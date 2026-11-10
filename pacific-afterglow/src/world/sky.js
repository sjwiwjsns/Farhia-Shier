import * as THREE from 'three';
import { FullScreenQuad } from 'three/addons/postprocessing/Pass.js';
import { NOISE, ATMOSPHERE } from '../core/glsl.js';
import { CLOUD_FIELD_GLSL } from '../core/lighting.js';

// The sky is painted into a panorama rather than computed per pixel every frame: the
// atmosphere, a deck of ray-marched cumulus with real self-shadowing, and high cirrus.
// A few columns are repainted each frame, so a whole new sky arrives about once a second
// and the dome cross-fades from the last one to it. Everything that needs the sky (the
// dome, the lighting probe, the ocean, distance fog, glass) then reads one texture.
//
// Mapping: u is compass bearing; v is elevation, squared so the horizon, where the eye
// spends its time, gets most of the rows.
const bakeFragment = /* glsl */`
precision highp float;
varying vec2 vUv;
uniform vec4 uRect; // u0, v0, u1, v1 of the strip being painted
uniform vec2 uWind;
uniform vec3 uLightDir;
${NOISE}
${CLOUD_FIELD_GLSL}
${ATMOSPHERE}

const float H0 = 1150.0, H1 = 2750.0; // cloud base and ceiling, metres

// Cloud density at p (the viewer stands at the origin). fine adds the wispy detail.
float cloudDensity(vec3 p, bool fine) {
  float h = (p.y - H0) / (H1 - H0);
  if (h <= 0.0 || h >= 1.0) return 0.0;
  vec2 xz = p.xz + uWind;
  float edge = 1.0 - skyCloudCover;
  if (paCloudField(xz, 2) < edge - 0.2) return 0.0; // nowhere near a cloud: skip the rest
  float base = smoothstep(edge, edge + 0.3, paCloudField(xz, fine ? 5 : 3));
  if (base <= 0.0) return 0.0;
  // Flat bases, and tops that tower where the weather is thickest.
  float top = mix(0.32, 1.0, base);
  float d = base * smoothstep(0.0, 0.07, h) * (1.0 - smoothstep(top * 0.5, top, h));
  if (fine) {
    vec2 q = p.xz * 0.0014 + vec2(p.y * 0.0012, -p.y * 0.0008) + uWind * 0.0012;
    d = clamp(d - (1.0 - pa_fbm3(q)) * 0.4 * (1.0 - d * 0.55), 0.0, 1.0);
  }
  return d;
}

// Marches the cloud deck along dir. Returns light scattered toward the eye (rgb) and how
// much of the sky behind still shows (a).
vec4 marchClouds(vec3 dir, vec3 sky) {
  if (dir.y < 0.012) return vec4(0.0, 0.0, 0.0, 1.0);
  float t0 = H0 / dir.y, t1 = min(H1 / dir.y, 75000.0);
  if (t0 >= t1) return vec4(0.0, 0.0, 0.0, 1.0);
  float dt = (t1 - t0) / float(CLOUD_STEPS);
  float t = t0 + dt * pa_hash12(gl_FragCoord.xy + 0.5);
  // Clouds scatter mostly forward: edges toward the light glow (the silver lining).
  float cosL = dot(dir, uLightDir), g = 0.6;
  float hg = (1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * cosL, 1.5);
  float phase = 0.62 + 0.36 * min(hg, 5.5);
  float T = 1.0;
  vec3 L = vec3(0.0);
  for (int i = 0; i < CLOUD_STEPS; i++) {
    vec3 p = dir * t;
    float d = cloudDensity(p, true);
    if (d > 0.004) {
      // How much cloud lies between here and the light.
      float tau = 0.0, sl = 75.0;
      vec3 q = p;
      for (int j = 0; j < 4; j++) { q += uLightDir * sl; tau += cloudDensity(q, false) * sl; sl *= 1.9; }
      float h = (p.y - H0) / (H1 - H0);
      // Light bounces around inside a cloud many times, so its depths are far brighter
      // than a single pass through would leave them: three ever-gentler fall-offs stand in.
      float k = tau * 0.0105;
      float lit = exp(-k) * 0.58 + exp(-k * 0.28) * 0.29 + exp(-k * 0.07) * 0.13;
      // Sunlight that got through, sky light from above, and at night the city's glow from below.
      vec3 lum = skyCloudLit * (lit * phase) + skyCloudShade * (0.74 + 0.62 * h) + vec3(0.11, 0.07, 0.04) * skyNight * (1.0 - h);
      // Far clouds take on the colour of the air in front of them.
      lum = mix(lum, sky, 1.0 - exp(-t / 42000.0));
      float a = 1.0 - exp(-d * dt * 0.013);
      L += T * a * lum;
      T *= 1.0 - a;
      if (T < 0.012) break;
    }
    t += dt;
  }
  return vec4(L, T);
}

void main() {
  vec2 uv = mix(uRect.xy, uRect.zw, vUv);
  float el = mix(-0.035, 1.5707963, uv.y * uv.y);
  float az = (uv.x - 0.5) * 6.2831853;
  vec3 dir = vec3(cos(el) * cos(az), sin(el), cos(el) * sin(az));

  float day = smoothstep(-0.12, 0.08, skySunDir.y);
  vec3 col = pa_atmosphere(dir) * day;
  // A deeper, more saturated blue overhead than the model gives on its own.
  col *= mix(1.0, 0.74, smoothstep(0.0, 0.75, dir.y));
  col = mix(vec3(dot(col, vec3(0.2126, 0.7152, 0.0722))), col, 1.28);
  // Afterglow: for a while either side of sunset an ember band lies along the horizon
  // where the sun went down, with violet above it.
  float tw = smoothstep(-0.2, -0.02, skySunDir.y) * (1.0 - smoothstep(-0.02, 0.11, skySunDir.y));
  float toward = max(dot(normalize(dir.xz + 1e-5), normalize(skySunDir.xz + 1e-5)), 0.0);
  float low = max(dir.y, 0.0);
  col += vec3(1.3, 0.45, 0.13) * exp(-low * 6.5) * pow(toward, 2.5) * tw * 0.95;
  col += vec3(0.4, 0.2, 0.44) * exp(-low * 2.4) * (0.3 + 0.7 * toward) * tw * 0.32;
  // Night: deep blue, the glow of the city along the horizon, a halo round the moon.
  vec3 night = mix(vec3(0.010, 0.016, 0.034), vec3(0.002, 0.004, 0.012), clamp(dir.y * 1.6, 0.0, 1.0));
  night += vec3(0.055, 0.036, 0.028) * exp(-max(dir.y, 0.0) * 9.0) * 0.7;
  night += vec3(0.05, 0.07, 0.11) * pow(max(dot(dir, skyMoonDir), 0.0), 40.0);
  col += night * skyNight;

  float T = 1.0;
  // Cirrus: thin streaks far above everything, still lit after the cumulus has gone grey.
  if (dir.y > 0.02) {
    vec2 cuv = dir.xz / (dir.y + 0.06) * 3.0 + uWind * 0.00005;
    float c = pa_fbm(vec2(cuv.x * 0.5 + cuv.y * 0.16, cuv.y * 2.3));
    c = smoothstep(0.56, 0.94, c) * 0.36 * smoothstep(0.02, 0.2, dir.y);
    vec3 cc = skyCloudLit * (0.5 + 1.1 * pow(max(dot(dir, skySunDir), 0.0), 6.0)) + skyCloudShade * 0.45;
    col = mix(col, cc, c);
    T *= 1.0 - c * 0.6;
  }
  vec4 cl = marchClouds(dir, col);
  gl_FragColor = vec4(col * cl.a + cl.rgb, T * cl.a);
}`;

const STRIPS = 64;

export class SkyBaker {
  // uniforms: the shared atmosphere uniforms (sun, scattering, cloud colours, panorama slots).
  constructor(renderer, uniforms) {
    this.renderer = renderer;
    this.shared = uniforms;
    this.width = 0;
    this.steps = 0;
    this.targets = [];
    this.a = 0; // the panorama being faded from
    this.b = 0; // ... and to
    this.work = 1; // the one being painted
    this.progress = 0;
    this.pending = true; // a full repaint is due (first frame, a jump in time, a new quality)
    this.material = null;
    this.quad = new FullScreenQuad(null);
    this.onComplete = null;
  }

  setQuality(width, steps) {
    if (width === this.width && steps === this.steps) return;
    this.width = width;
    this.steps = steps;
    for (const t of this.targets) t.dispose();
    this.targets = [0, 1, 2].map(() => {
      const t = new THREE.WebGLRenderTarget(width, width / 2, { type: THREE.HalfFloatType, depthBuffer: false });
      t.texture.wrapS = THREE.RepeatWrapping;
      t.texture.minFilter = t.texture.magFilter = THREE.LinearFilter;
      t.texture.generateMipmaps = false;
      return t;
    });
    this.material?.dispose();
    // The bake keeps its own copy of the sky's state, frozen while one panorama is painted,
    // so every column of it belongs to the same moment.
    this.frozen = {
      skySunDir: { value: new THREE.Vector3() }, skyMoonDir: { value: new THREE.Vector3() },
      skyTurbidity: { value: 0 }, skyRayleigh: { value: 0 }, skyMie: { value: 0 }, skyMieG: { value: 0 },
      skyCloudCover: { value: 0 }, skyNight: { value: 0 },
      skyCloudLit: { value: new THREE.Color() }, skyCloudShade: { value: new THREE.Color() },
      uWind: { value: new THREE.Vector2() }, uLightDir: { value: new THREE.Vector3() }, uRect: { value: new THREE.Vector4() },
    };
    this.material = new THREE.ShaderMaterial({
      uniforms: this.frozen, defines: { CLOUD_STEPS: steps }, depthTest: false, depthWrite: false, toneMapped: false,
      vertexShader: 'varying vec2 vUv;\nvoid main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
      fragmentShader: bakeFragment,
    });
    this.quad.material = this.material;
    this.a = this.b = 0;
    this.work = 1;
    this.progress = 0;
    this.pending = true;
  }

  freeze(wind, lightDir) {
    const f = this.frozen, u = this.shared;
    for (const k of ['skySunDir', 'skyMoonDir', 'skyCloudLit', 'skyCloudShade']) f[k].value.copy(u[k].value);
    for (const k of ['skyTurbidity', 'skyRayleigh', 'skyMie', 'skyMieG', 'skyCloudCover', 'skyNight']) f[k].value = u[k].value;
    f.uWind.value.copy(wind);
    f.uLightDir.value.copy(lightDir);
  }

  paint(from, to) {
    const r = this.renderer, t = this.targets[this.work];
    const prev = r.getRenderTarget();
    const x0 = Math.round((from / STRIPS) * this.width), x1 = Math.round((to / STRIPS) * this.width);
    t.viewport.set(x0, 0, x1 - x0, t.height);
    t.scissor.set(x0, 0, x1 - x0, t.height);
    t.scissorTest = true;
    this.frozen.uRect.value.set(x0 / this.width, 0, x1 / this.width, 1);
    r.setRenderTarget(t);
    this.quad.render(r);
    r.setRenderTarget(prev);
  }

  publish() {
    const u = this.shared;
    u.skyPanoA.value = this.targets[this.a].texture;
    u.skyPanoB.value = this.targets[this.b].texture;
    u.skyPanoBlend.value = this.a === this.b ? 0 : this.progress / STRIPS;
  }

  // Call once per frame. wind: cloud drift in metres; lightDir: toward the sun or moon.
  update(wind, lightDir, strips = 1) {
    if (!this.material) return;
    if (this.pending) {
      // Repaint everything now and show it at once.
      this.pending = false;
      this.freeze(wind, lightDir);
      this.paint(0, STRIPS);
      this.a = this.b = this.work;
      this.work = (this.work + 1) % 3;
      this.progress = 0;
      this.publish();
      this.onComplete?.(true);
      return;
    }
    if (this.progress === 0) this.freeze(wind, lightDir);
    const to = Math.min(STRIPS, this.progress + strips);
    this.paint(this.progress, to);
    this.progress = to;
    if (this.progress >= STRIPS) {
      // The new sky is whole: it becomes the one being faded to.
      const done = this.work;
      this.work = [0, 1, 2].find(i => i !== this.b && i !== done);
      this.a = this.b;
      this.b = done;
      this.progress = 0;
      this.onComplete?.(false);
    }
    this.publish();
  }
}
