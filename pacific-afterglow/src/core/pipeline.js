import * as THREE from 'three';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { FullScreenQuad } from 'three/addons/postprocessing/Pass.js';

// The frame is built in five steps, all in linear HDR until the last:
//
//   scene      colour + depth, multisampled
//   occlusion  ambient occlusion from the depth buffer alone, at half resolution
//   light      scene x occlusion, plus sun shafts masked by depth
//   bloom      added in place
//   lens       depth of field, motion blur, tone mapping, sharpening, flare, grade, grain
//
// Depth is a texture, so every later step can read it. Nothing needs a second geometry
// pass (the old ambient occlusion re-drew the whole city for its normals).

// Quality tiers. Dynamic resolution keeps the frame rate steady inside each tier.
//   ao: occlusion samples (0 off)   farShadow: far shadow cascade size (0 off)
//   sky: [panorama width, cloud march steps]   lamps: street lamps really light the street
export const QUALITY = {
  ultra: { label: 'Ultra', pixelRatio: 2, msaa: 4, shadow: 4096, shadowRange: 150, farShadow: 2048, ao: 16, reflections: 0.75, bloom: true, grade: true, shafts: true, carProbe: 256, sharpen: 0.55, lamps: true, dof: true, sky: [1024, 36], facade: 520 },
  high: { label: 'High', pixelRatio: 1.5, msaa: 4, shadow: 2048, shadowRange: 120, farShadow: 2048, ao: 10, reflections: 0.5, bloom: true, grade: true, shafts: true, carProbe: 128, sharpen: 0.55, lamps: true, dof: true, sky: [1024, 28], facade: 360 },
  medium: { label: 'Balanced', pixelRatio: 1.2, msaa: 2, shadow: 2048, shadowRange: 90, farShadow: 1024, ao: 6, reflections: 0, bloom: true, grade: true, shafts: true, carProbe: 0, sharpen: 0.45, lamps: true, dof: false, sky: [768, 20], facade: 240 },
  low: { label: 'Performance', pixelRatio: 1, msaa: 0, shadow: 1024, shadowRange: 70, farShadow: 0, ao: 0, reflections: 0, bloom: false, grade: false, shafts: false, carProbe: 0, sharpen: 0.3, lamps: false, dof: false, sky: [512, 14], facade: 130 },
};

// Render resolution. A fixed mode holds a pixel budget ("1080p" is 1080p's worth of pixels
// whatever the screen's shape, or every pixel the screen has if that is fewer) and never
// drops below it. 'auto' follows the quality tier and lowers the scale when frames run slow.
export const RESOLUTIONS = { auto: 0, '720p': 1280 * 720, '1080p': 1920 * 1080, '1440p': 2560 * 1440, native: Infinity };

// How much camera character the lens pass adds: colour fringing, grain, motion blur, vignette.
export const FILM = {
  clean: { aberration: 0, grain: 0, blur: 0, vignette: 0.14 },
  subtle: { aberration: 0.0005, grain: 0.015, blur: 0.55, vignette: 0.26 },
  cinematic: { aberration: 0.0015, grain: 0.035, blur: 1, vignette: 0.32 },
};

const QUAD_VERTEX = /* glsl */`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

// View-space depth and position from the depth texture (perspective camera).
const DEPTH_GLSL = /* glsl */`
  uniform sampler2D tDepth;
  uniform vec2 uNearFar;
  uniform vec2 uInvProj; // 1 / projection[0][0], 1 / projection[1][1]
  float paViewZ(float d) { return (uNearFar.x * uNearFar.y) / ((uNearFar.y - uNearFar.x) * d - uNearFar.y); }
  vec3 paViewPos(vec2 uv) {
    float z = paViewZ(texture2D(tDepth, uv).x);
    return vec3((uv * 2.0 - 1.0) * uInvProj * -z, z);
  }`;

// Ambient occlusion: how much of the hemisphere above each pixel is blocked by nearby
// geometry, estimated from depth alone. It is what seats cars on the road, darkens the foot
// of every wall and the gaps between buildings, and gives shape to anything in shade.
const AOShader = {
  uniforms: {
    tDepth: { value: null }, uNearFar: { value: new THREE.Vector2() }, uInvProj: { value: new THREE.Vector2() },
    uTexel: { value: new THREE.Vector2() }, uRadius: { value: 1.15 }, uStrength: { value: 1.0 },
  },
  vertexShader: QUAD_VERTEX,
  fragmentShader: /* glsl */`
    ${DEPTH_GLSL}
    uniform vec2 uTexel;
    uniform float uRadius, uStrength;
    varying vec2 vUv;
    float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
    void main() {
      // This pass runs at half resolution, so its pixel centres fall on the corners of depth
      // texels. Every lookup is snapped to a texel centre: a position is only right when it
      // is rebuilt from the same spot its depth was read at.
      vec2 uv0 = (floor(vUv / uTexel) + 0.5) * uTexel;
      float d0 = texture2D(tDepth, uv0).x;
      if (d0 >= 0.99999) { gl_FragColor = vec4(1.0); return; }
      vec3 p = paViewPos(uv0);
      float dist = -p.z;
      float fade = 1.0 - smoothstep(110.0, 240.0, dist);
      if (fade <= 0.0) { gl_FragColor = vec4(1.0); return; }
      // Surface normal from depth: on each axis take the neighbour on the same surface.
      vec3 px1 = paViewPos(uv0 + vec2(uTexel.x, 0.0)), px0 = paViewPos(uv0 - vec2(uTexel.x, 0.0));
      vec3 py1 = paViewPos(uv0 + vec2(0.0, uTexel.y)), py0 = paViewPos(uv0 - vec2(0.0, uTexel.y));
      vec3 dx = abs(px1.z - p.z) < abs(p.z - px0.z) ? px1 - p : p - px0;
      vec3 dy = abs(py1.z - p.z) < abs(p.z - py0.z) ? py1 - p : p - py0;
      vec3 n = normalize(cross(dx, dy));
      // The sampling disc is a fixed size in the world, so it shrinks with distance on screen.
      float radius = uRadius * (1.0 + dist * 0.014);
      vec2 rUv = clamp(radius / (2.0 * dist * uInvProj), uTexel * 3.0, vec2(0.09));
      float spin = ign(gl_FragCoord.xy) * 6.2831853;
      float occ = 0.0, r2 = radius * radius;
      for (int i = 0; i < AO_SAMPLES; i++) {
        // More samples close in, where contact shadows live.
        float f = (float(i) + 0.5) / float(AO_SAMPLES);
        float a = spin + float(i) * 2.3999632;
        vec2 suv = uv0 + vec2(cos(a), sin(a)) * pow(f, 0.8) * rUv;
        if (suv.x < 0.0 || suv.x > 1.0 || suv.y < 0.0 || suv.y > 1.0) continue;
        suv = (floor(suv / uTexel) + 0.5) * uTexel;
        vec3 v = paViewPos(suv) - p;
        float l2 = dot(v, v);
        // Only what lies inside the sphere occludes, and nearer things occlude more.
        occ += max(dot(n, v) * inversesqrt(l2 + 1e-4) - 0.12, 0.0) * max(1.0 - l2 / r2, 0.0);
      }
      float ao = 1.0 - clamp(occ / float(AO_SAMPLES) * 4.2 * uStrength, 0.0, 0.9) * fade;
      gl_FragColor = vec4(ao, ao, ao, 1.0);
    }`,
};

// A 4x4 blur that stops at depth edges, to remove the sampling pattern without smearing
// occlusion across silhouettes.
const AOBlurShader = {
  uniforms: {
    tAO: { value: null }, tDepth: { value: null }, uNearFar: { value: new THREE.Vector2() }, uInvProj: { value: new THREE.Vector2() },
    uTexel: { value: new THREE.Vector2() }, uDepthTexel: { value: new THREE.Vector2() },
  },
  vertexShader: QUAD_VERTEX,
  fragmentShader: /* glsl */`
    ${DEPTH_GLSL}
    uniform sampler2D tAO;
    uniform vec2 uTexel, uDepthTexel;
    varying vec2 vUv;
    void main() {
      float z0 = paViewZ(texture2D(tDepth, (floor(vUv / uDepthTexel) + 0.5) * uDepthTexel).x);
      float sum = 0.0, wsum = 0.0;
      for (int x = 0; x < 4; x++) for (int y = 0; y < 4; y++) {
        vec2 uv = vUv + (vec2(float(x), float(y)) - 1.5) * uTexel;
        float z = paViewZ(texture2D(tDepth, (floor(uv / uDepthTexel) + 0.5) * uDepthTexel).x);
        float w = 1.0 / (0.02 + abs(z - z0) / max(-z0, 0.5) * 18.0);
        sum += texture2D(tAO, uv).r * w;
        wsum += w;
      }
      gl_FragColor = vec4(vec3(sum / wsum), 1.0);
    }`,
};

// Light: occlusion applied to the scene, and shafts of sunlight. A shaft is the open sky
// seen along the line from a pixel to the sun; depth says exactly what is sky, so
// buildings, palms and lamp posts all cut the light into rays.
const LightShader = {
  uniforms: {
    tScene: { value: null }, tAO: { value: null }, tDepth: { value: null }, aoOn: { value: 0 },
    sunPos: { value: new THREE.Vector2(0.5, 0.5) }, strength: { value: 0 }, color: { value: new THREE.Color(1, 0.7, 0.4) }, aspect: { value: 1 },
  },
  vertexShader: QUAD_VERTEX,
  fragmentShader: /* glsl */`
    uniform sampler2D tScene, tAO, tDepth;
    uniform float aoOn, strength, aspect;
    uniform vec2 sunPos;
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      vec3 col = texture2D(tScene, vUv).rgb;
      float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
      if (aoOn > 0.5) {
        // Occlusion belongs to ambient light: lamps, windows and anything glowing keep their brightness.
        float ao = mix(texture2D(tAO, vUv).r, 1.0, smoothstep(1.0, 3.2, lum));
        col *= mix(vec3(ao), vec3(1.0), vec3(0.0, 0.02, 0.06)); // a breath of sky blue left in the creases
      }
      if (strength > 0.002) {
        vec2 delta = sunPos - vUv;
        float dist = length(delta * vec2(aspect, 1.0));
        vec2 stepv = delta * (0.92 / 28.0);
        vec2 uv = vUv;
        float illum = 0.0, decay = 1.0;
        for (int i = 0; i < 28; i++) {
          uv += stepv;
          // Open sky counts, and counts for more the nearer it is to the sun.
          float open = step(0.99999, texture2D(tDepth, clamp(uv, 0.001, 0.999)).x);
          illum += open * decay * exp(-length((sunPos - uv) * vec2(aspect, 1.0)) * 2.6);
          decay *= 0.962;
        }
        illum /= 28.0;
        // Rays show against what blocks the sun; open sky is already bright and gains little.
        float contrast = 1.0 - 0.8 * smoothstep(0.5, 2.2, lum);
        col += color * illum * strength * contrast * exp(-dist * 1.6) * 0.85;
      }
      gl_FragColor = vec4(col, 1.0);
    }`,
};

// Lens: everything a camera and a colourist would do to the picture.
const LensShader = {
  uniforms: {
    tHdr: { value: null }, tDepth: { value: null }, uNearFar: { value: new THREE.Vector2() }, uInvProj: { value: new THREE.Vector2() },
    exposure: { value: 1 },
    time: { value: 0 },
    resolution: { value: new THREE.Vector2(1, 1) },
    speedBlur: { value: 0 },
    camBlur: { value: new THREE.Vector2() },
    aberration: { value: 0.0015 },
    vignette: { value: 0.32 },
    grain: { value: 0.035 },
    sharpen: { value: 0 },
    sunPos: { value: new THREE.Vector2(0.5, 0.5) },
    sunVisible: { value: 0 },
    sunColor: { value: new THREE.Color(1, 0.7, 0.4) },
    flash: { value: 0 },
    night: { value: 0 },
    warmth: { value: 0 }, // 0..1, how much golden hour is in the light
    dof: { value: 0 },
    focus: { value: 10 },
    grade: { value: 1 },
    debugView: { value: 0 }, tDebug: { value: null }, // 1 occlusion, 2 depth (see Pipeline.debugView)
  },
  vertexShader: QUAD_VERTEX,
  fragmentShader: /* glsl */`
    ${DEPTH_GLSL}
    uniform sampler2D tHdr, tDebug;
    uniform float debugView;
    uniform float exposure, time, speedBlur, aberration, vignette, grain, sunVisible, flash, night, warmth, sharpen, dof, focus, grade;
    uniform vec2 resolution, sunPos, camBlur;
    uniform vec3 sunColor;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    // ACES filmic tone curve (the fit three.js uses), then the display transfer function.
    vec3 rrtOdt(vec3 v) { vec3 a = v * (v + 0.0245786) - 0.000090537; vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081; return a / b; }
    vec3 display(vec3 c) {
      c *= exposure / 0.6;
      c = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777) * c;
      c = rrtOdt(c);
      c = clamp(mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602) * c, 0.0, 1.0);
      return mix(pow(c, vec3(0.41666)) * 1.055 - 0.055, c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308))));
    }
    float ghost(vec2 uv, vec2 c, float r) {
      vec2 d = (uv - c) * vec2(resolution.x / resolution.y, 1.0);
      return smoothstep(r, r * 0.55, length(d));
    }
    // Circle of confusion in pixels for a point at view depth z.
    // (A band about a metre either side of the focal plane stays fully sharp: the whole car.)
    float coc(float z) { return clamp((abs(1.0 / focus - 1.0 / z) - 0.014) * 9.0, 0.0, 1.0) * dof * resolution.y * 0.011; }
    void main() {
      vec2 uv = vUv;
      vec2 fromCenter = uv - 0.5;
      float edge = dot(fromCenter, fromCenter);
      vec2 ca = fromCenter * (aberration * (1.0 + edge * 6.0) + speedBlur * 0.004);
      vec3 col = vec3(texture2D(tHdr, uv - ca).r, texture2D(tHdr, uv).g, texture2D(tHdr, uv + ca).b);
      // Depth of field (title screen and cinematic camera): what is off the focal plane
      // spreads into a disc, gathered from neighbours that are themselves out of focus.
      if (dof > 0.001) {
        float c0 = coc(-paViewZ(texture2D(tDepth, uv).x));
        if (c0 > 0.6) {
          vec3 acc = col;
          float w = 1.0;
          float spin = hash(gl_FragCoord.xy) * 6.2831853;
          for (int i = 0; i < 16; i++) {
            float f = (float(i) + 0.5) / 16.0;
            float a = spin + float(i) * 2.3999632;
            float r = sqrt(f) * c0;
            vec2 suv = uv + vec2(cos(a), sin(a)) * r / resolution;
            float ci = coc(-paViewZ(texture2D(tDepth, suv).x));
            float wi = smoothstep(r - 1.5, r, ci) + 0.03;
            acc += texture2D(tHdr, suv).rgb * wi;
            w += wi;
          }
          col = acc / w;
        }
      }
      // Motion blur: radial streaks toward the edges at speed, plus a directional smear when
      // the camera swings round. The car itself moves with the camera, so it stays sharp.
      float radial = speedBlur * 0.055 * smoothstep(0.02, 0.25, edge);
      float carMask = smoothstep(0.035, 0.13, length((uv - vec2(0.5, 0.33)) * vec2(1.0, 1.5)));
      vec2 swing = camBlur * carMask;
      if (radial > 0.0004 || dot(swing, swing) > 1e-7) {
        vec3 acc = col;
        float w = 1.0;
        for (int i = 1; i <= 6; i++) {
          float k = float(i) / 6.0;
          vec2 suv = uv - fromCenter * k * radial - swing * (k - 0.5);
          float wk = 1.0 - k * 0.5;
          acc += texture2D(tHdr, suv).rgb * wk;
          w += wk;
        }
        col = acc / w;
      }
      col = display(col);
      // Contrast-adaptive sharpening: restores the fine detail that scaling and anti-aliasing
      // soften, and backs off on edges that are already strong so nothing rings.
      if (sharpen > 0.0) {
        vec2 px = 1.0 / resolution;
        vec3 n = display(texture2D(tHdr, uv + vec2(0.0, px.y)).rgb), s = display(texture2D(tHdr, uv - vec2(0.0, px.y)).rgb);
        vec3 e = display(texture2D(tHdr, uv + vec2(px.x, 0.0)).rgb), w = display(texture2D(tHdr, uv - vec2(px.x, 0.0)).rgb);
        vec3 lo = min(col, min(min(n, s), min(e, w))), hi = max(col, max(max(n, s), max(e, w)));
        vec3 amount = sqrt(clamp(min(lo, 1.0 - hi) / max(hi, 1e-3), 0.0, 1.0)) * sharpen * (1.0 - smoothstep(0.0, 1.0, dof));
        col = clamp(col + (col * 4.0 - n - s - e - w) * amount * 0.5, lo, hi);
      }
      // Lens flare: ghosts mirrored through the center, a halo and an anamorphic streak.
      if (sunVisible > 0.001) {
        vec2 axis = vec2(0.5) - sunPos;
        vec3 flare = vec3(0.0);
        flare += vec3(1.0, 0.55, 0.3) * ghost(uv, sunPos + axis * 0.55, 0.035) * 0.25;
        flare += vec3(0.4, 0.8, 1.0) * ghost(uv, sunPos + axis * 1.25, 0.06) * 0.18;
        flare += vec3(1.0, 0.85, 0.45) * ghost(uv, sunPos + axis * 1.6, 0.025) * 0.35;
        flare += vec3(0.6, 1.0, 0.7) * ghost(uv, sunPos + axis * 2.1, 0.09) * 0.08;
        vec2 sd = (uv - sunPos) * vec2(resolution.x / resolution.y, 1.0);
        float halo = smoothstep(0.05, 0.0, abs(length(sd) - 0.32)) * 0.035;
        float streak = exp(-abs(sd.y) * 260.0) * exp(-abs(sd.x) * 2.2) * 0.45;
        float glow = exp(-length(sd) * 7.0) * 0.13;
        col += (flare + vec3(halo) + vec3(streak) * vec3(1.0, 0.8, 0.55) + glow) * sunColor * sunVisible;
      }
      // Grade. Shadows lean teal and highlights amber (more so at golden hour), midtones gain
      // a little saturation where they are dull, and a soft S-curve sets the contrast.
      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      if (grade > 0.5) {
        float sat = max(col.r, max(col.g, col.b)) - min(col.r, min(col.g, col.b));
        col = mix(vec3(luma), col, 1.06 + 0.22 * (1.0 - sat) + night * 0.06);
        vec3 shadowTint = mix(mix(vec3(0.95, 1.0, 1.05), vec3(0.9, 1.0, 1.07), warmth), vec3(0.88, 0.96, 1.14), night);
        vec3 highTint = mix(vec3(1.03, 1.0, 0.96), vec3(1.07, 1.0, 0.92), warmth);
        col *= mix(shadowTint, highTint, smoothstep(0.08, 0.72, luma));
        col = mix(col, col * col * (3.0 - 2.0 * col), 0.3);
        // Lifted blacks, like film: pure black never quite arrives.
        col = col * 0.985 + 0.012 * vec3(0.9, 1.0, 1.1);
      } else {
        col = mix(vec3(luma), col, 1.08);
        col = mix(col, col * col * (3.0 - 2.0 * col), 0.22);
      }
      col += flash * vec3(1.0, 0.95, 0.85) * 0.35;
      // Vignette, grain and dithering.
      col *= 1.0 - vignette * smoothstep(0.08, 0.62, edge * 1.6);
      float n = hash(uv * resolution + fract(time * 7.13) * 100.0) - 0.5;
      col += n * grain * (1.0 - luma * 0.6);
      col += (hash(uv * resolution * 1.37) - 0.5) / 255.0;
      if (debugView > 1.5) col = vec3(fract(-paViewZ(texture2D(tDepth, uv).x) * 0.1), texture2D(tDepth, uv).x, 0.0);
      else if (debugView > 0.5) col = texture2D(tDebug, uv).rrr;
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`,
};

function quadMaterial(shader, defines = {}) {
  return new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.clone(shader.uniforms), vertexShader: shader.vertexShader, fragmentShader: shader.fragmentShader,
    defines, depthTest: false, depthWrite: false, toneMapped: false,
  });
}

export class Pipeline {
  constructor(canvas) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
    const r = this.renderer;
    // Tone mapping happens in the lens pass; the exposure value is still read from here.
    r.toneMapping = THREE.NoToneMapping;
    r.toneMappingExposure = 0.85;
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFSoftShadowMap;
    this.quality = null;
    this.scale = 1; // dynamic resolution factor
    this.frameTimes = [];
    this.adaptTimer = 0;
    this.quad = new FullScreenQuad(null);
    this.resolution = '1080p';
    this.filmName = 'subtle';
    this.film = FILM.subtle;
    this.targets = null;
    this.size = new THREE.Vector2();
  }

  init(scene, camera) {
    this.scene = scene;
    this.camera = camera;
  }

  // Materials and bloom for the current tier (render targets are sized in applySize).
  buildPasses() {
    const q = this.quality;
    for (const m of [this.aoMat, this.aoBlurMat, this.lightMat, this.lensMat]) m?.dispose();
    this.bloomPass?.dispose();
    this.aoMat = q.ao ? quadMaterial(AOShader, { AO_SAMPLES: q.ao }) : null;
    this.aoBlurMat = q.ao ? quadMaterial(AOBlurShader) : null;
    this.lightMat = quadMaterial(LightShader);
    this.lensMat = quadMaterial(LensShader);
    this.bloomPass = q.bloom ? new UnrealBloomPass(new THREE.Vector2(4, 4), 0.34, 0.5, 1.0) : null;
    // The names the rest of the game drives.
    this.grade = { uniforms: this.lensMat.uniforms };
    this.shafts = { uniforms: this.lightMat.uniforms };
    this.bloom = this.bloomPass;
    const u = this.lensMat.uniforms;
    u.sharpen.value = q.sharpen;
    u.grade.value = q.grade ? 1 : 0;
    this.applyFilm();
    this.disposeTargets();
    this.applySize();
  }

  setFilm(name) {
    this.filmName = name in FILM ? name : 'subtle';
    this.film = FILM[this.filmName];
    if (this.lensMat) this.applyFilm();
  }

  applyFilm() {
    const u = this.lensMat.uniforms, f = this.film, on = this.quality.grade;
    u.aberration.value = on ? f.aberration : 0;
    u.grain.value = on ? f.grain : 0;
    u.vignette.value = f.vignette;
  }

  setResolution(mode) {
    this.resolution = mode in RESOLUTIONS ? mode : '1080p';
    this.scale = 1;
    if (this.quality) this.applySize();
  }

  disposeTargets() {
    if (!this.targets) return;
    for (const t of Object.values(this.targets)) { t.depthTexture?.dispose(); t.dispose(); }
    this.targets = null;
  }

  buildTargets(w, h) {
    this.disposeTargets();
    const q = this.quality;
    const depth = new THREE.DepthTexture(w, h);
    depth.minFilter = depth.magFilter = THREE.NearestFilter;
    const scene = new THREE.WebGLRenderTarget(w, h, { type: THREE.HalfFloatType, samples: q.msaa, depthTexture: depth });
    const hdr = new THREE.WebGLRenderTarget(w, h, { type: THREE.HalfFloatType, depthBuffer: false });
    this.targets = { scene, hdr };
    if (q.ao) {
      const hw = Math.max(2, Math.round(w / 2)), hh = Math.max(2, Math.round(h / 2));
      this.targets.ao = new THREE.WebGLRenderTarget(hw, hh, { depthBuffer: false });
      this.targets.aoBlur = new THREE.WebGLRenderTarget(hw, hh, { depthBuffer: false });
    }
    this.bloomPass?.setSize(w, h);
  }

  setQuality(name) {
    this.quality = QUALITY[name] || QUALITY.high;
    this.qualityName = name;
    this.scale = 1;
    this.renderer.shadowMap.enabled = true;
    this.buildPasses();
  }

  applySize() {
    const w = innerWidth, h = innerHeight, dpr = devicePixelRatio || 1;
    const budget = RESOLUTIONS[this.resolution];
    const pr = budget ? Math.min(dpr, Math.sqrt(budget / (w * h))) : Math.min(dpr, this.quality.pixelRatio) * this.scale;
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h);
    const pw = Math.max(2, Math.round(w * pr)), ph = Math.max(2, Math.round(h * pr));
    if (!this.targets || this.size.x !== pw || this.size.y !== ph) {
      this.size.set(pw, ph);
      this.buildTargets(pw, ph);
    }
    this.lensMat.uniforms.resolution.value.set(pw, ph);
    this.lightMat.uniforms.aspect.value = w / h;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.onResize?.();
  }

  // Lower or raise the render scale to hold ~55+ fps.
  adapt(dt) {
    if (this.resolution !== 'auto') return; // a fixed resolution is a promise
    this.frameTimes.push(dt);
    if (this.frameTimes.length > 90) this.frameTimes.shift();
    this.adaptTimer += dt;
    if (this.adaptTimer < 2 || this.frameTimes.length < 60) return;
    this.adaptTimer = 0;
    const sorted = [...this.frameTimes].sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)];
    let next = this.scale;
    if (median > 1 / 45) next = Math.max(0.6, this.scale - 0.1);
    else if (median < 1 / 58 && this.scale < 1) next = Math.min(1, this.scale + 0.05);
    if (Math.abs(next - this.scale) > 0.001) {
      this.scale = next;
      this.applySize();
    }
  }

  // The shadow map is drawn once per frame, by whichever pass renders first. Without this
  // every nested render (ocean mirror, reflection probe) would redraw it.
  beginFrame() {
    this.renderer.shadowMap.autoUpdate = false;
    this.renderer.shadowMap.needsUpdate = true;
  }

  blit(material, target) {
    this.quad.material = material;
    this.renderer.setRenderTarget(target);
    this.quad.render(this.renderer);
  }

  render() {
    const r = this.renderer, q = this.quality, t = this.targets, cam = this.camera;
    const invX = 1 / cam.projectionMatrix.elements[0], invY = 1 / cam.projectionMatrix.elements[5];
    const depthUniforms = u => { u.tDepth.value = t.scene.depthTexture; u.uNearFar.value.set(cam.near, cam.far); u.uInvProj.value.set(invX, invY); };

    r.setRenderTarget(t.scene);
    r.render(this.scene, cam);

    let source = t.scene;
    const light = this.lightMat.uniforms;
    if (!q.shafts) light.strength.value = 0;
    if (q.ao || light.strength.value > 0.002 || this.bloomPass) {
      if (q.ao) {
        const a = this.aoMat.uniforms;
        depthUniforms(a);
        a.uTexel.value.set(1 / t.scene.width, 1 / t.scene.height);
        this.blit(this.aoMat, t.ao);
        const b = this.aoBlurMat.uniforms;
        depthUniforms(b);
        b.tAO.value = t.ao.texture;
        b.uTexel.value.set(1 / t.ao.width, 1 / t.ao.height);
        b.uDepthTexel.value.set(1 / t.scene.width, 1 / t.scene.height);
        this.blit(this.aoBlurMat, t.aoBlur);
        light.tAO.value = t.aoBlur.texture;
      }
      light.aoOn.value = q.ao ? 1 : 0;
      light.tScene.value = t.scene.texture;
      light.tDepth.value = t.scene.depthTexture;
      this.blit(this.lightMat, t.hdr);
      source = t.hdr;
      if (this.bloomPass) this.bloomPass.render(r, null, t.hdr, 0, false);
    }

    const lens = this.lensMat.uniforms;
    depthUniforms(lens);
    lens.tHdr.value = source.texture;
    lens.exposure.value = r.toneMappingExposure;
    if (!q.dof) lens.dof.value = 0;
    lens.debugView.value = this.debugView === 'ao' && t.aoBlur ? 1 : this.debugView === 'depth' ? 2 : 0;
    lens.tDebug.value = t.aoBlur ? t.aoBlur.texture : null;
    this.blit(this.lensMat, null);
  }
}
