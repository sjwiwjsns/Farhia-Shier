import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';

// Quality tiers. Dynamic resolution keeps the frame rate steady inside each tier.
export const QUALITY = {
  ultra: { label: 'Ultra', pixelRatio: 2, msaa: 4, shadow: 4096, shadowRange: 150, ao: true, reflections: 0.75, bloom: true, grade: true, shafts: true },
  high: { label: 'High', pixelRatio: 1.5, msaa: 4, shadow: 2048, shadowRange: 120, ao: false, reflections: 0.5, bloom: true, grade: true, shafts: true },
  medium: { label: 'Balanced', pixelRatio: 1.2, msaa: 2, shadow: 2048, shadowRange: 90, ao: false, reflections: 0, bloom: true, grade: true, shafts: true },
  low: { label: 'Performance', pixelRatio: 1, msaa: 0, shadow: 1024, shadowRange: 70, ao: false, reflections: 0, bloom: false, grade: false, shafts: false },
};

// GTAO that ignores sky, water, particles and decals in its geometry pass.
class CityAOPass extends GTAOPass {
  _overrideVisibility() {
    super._overrideVisibility();
    this.scene.traverseVisible(o => {
      if (o.userData.noAO) {
        o.visible = false;
        this._visibilityCache.push(o);
      }
    });
  }
}

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    time: { value: 0 },
    resolution: { value: new THREE.Vector2(1, 1) },
    speedBlur: { value: 0 },
    camBlur: { value: new THREE.Vector2() },
    aberration: { value: 0.0015 },
    vignette: { value: 0.32 },
    grain: { value: 0.035 },
    sunPos: { value: new THREE.Vector2(0.5, 0.5) },
    sunVisible: { value: 0 },
    sunColor: { value: new THREE.Color(1, 0.7, 0.4) },
    flash: { value: 0 },
    night: { value: 0 },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform float time, speedBlur, aberration, vignette, grain, sunVisible, flash, night;
    uniform vec2 resolution, sunPos, camBlur;
    uniform vec3 sunColor;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    vec3 sampleCA(vec2 uv, float amount) {
      vec2 d = (uv - 0.5) * amount;
      return vec3(texture2D(tDiffuse, uv - d).r, texture2D(tDiffuse, uv).g, texture2D(tDiffuse, uv + d).b);
    }
    float ghost(vec2 uv, vec2 c, float r) {
      vec2 d = (uv - c) * vec2(resolution.x / resolution.y, 1.0);
      return smoothstep(r, r * 0.55, length(d));
    }
    void main() {
      vec2 uv = vUv;
      vec2 fromCenter = uv - 0.5;
      float edge = dot(fromCenter, fromCenter);
      vec3 col = sampleCA(uv, aberration * (1.0 + edge * 6.0) + speedBlur * 0.004);
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
          acc += texture2D(tDiffuse, suv).rgb * wk;
          w += wk;
        }
        col = acc / w;
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
        float halo = smoothstep(0.03, 0.0, abs(length(sd) - 0.32)) * 0.12;
        float streak = exp(-abs(sd.y) * 260.0) * exp(-abs(sd.x) * 2.2) * 0.45;
        float glow = exp(-length(sd) * 7.0) * 0.18;
        col += (flare + vec3(halo) + vec3(streak) * vec3(1.0, 0.8, 0.55) + glow) * sunColor * sunVisible;
      }
      // Grade: gentle S-curve, cool shadows, warm highlights.
      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(luma), col, 1.08 + night * 0.06);
      vec3 shadowTint = mix(vec3(0.94, 1.0, 1.06), vec3(0.9, 0.97, 1.12), night);
      vec3 highTint = vec3(1.04, 1.0, 0.95);
      col *= mix(shadowTint, highTint, smoothstep(0.1, 0.75, luma));
      col = mix(col, col * col * (3.0 - 2.0 * col), 0.22);
      col += flash * vec3(1.0, 0.95, 0.85) * 0.35;
      // Vignette, grain and dithering.
      col *= 1.0 - vignette * smoothstep(0.08, 0.62, edge * 1.6);
      float n = hash(uv * resolution + fract(time * 7.13) * 100.0) - 0.5;
      col += n * grain * (1.0 - luma * 0.6);
      col += (hash(uv * resolution * 1.37) - 0.5) / 255.0;
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`,
};

// Sun shafts: march from each pixel toward the sun and gather the bright sky
// seen along the way. Buildings in between leave dark gaps, so the light
// breaks into rays between them. Runs on the linear HDR image before bloom.
const SunShaftShader = {
  uniforms: {
    tDiffuse: { value: null },
    sunPos: { value: new THREE.Vector2(0.5, 0.5) },
    strength: { value: 0 },
    color: { value: new THREE.Color(1, 0.7, 0.4) },
    aspect: { value: 1 },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform vec2 sunPos;
    uniform float strength, aspect;
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      vec3 base = texture2D(tDiffuse, vUv).rgb;
      if (strength < 0.002) { gl_FragColor = vec4(base, 1.0); return; }
      vec2 delta = sunPos - vUv;
      float dist = length(delta * vec2(aspect, 1.0));
      vec2 stepv = delta * (0.9 / 30.0);
      vec2 uv = vUv;
      float illum = 0.0, decay = 1.0;
      for (int i = 0; i < 30; i++) {
        uv += stepv;
        vec3 c = texture2D(tDiffuse, clamp(uv, 0.001, 0.999)).rgb;
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        illum += smoothstep(1.0, 3.0, l) * decay;
        decay *= 0.965;
      }
      illum /= 30.0;
      // Rays show against what blocks the sun; open sky is already bright and gains little.
      float baseLum = dot(base, vec3(0.2126, 0.7152, 0.0722));
      float contrast = 1.0 - 0.8 * smoothstep(0.5, 2.2, baseLum);
      gl_FragColor = vec4(base + color * illum * strength * contrast * exp(-dist * 2.0), 1.0);
    }`,
};

export class Pipeline {
  constructor(canvas) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
    const r = this.renderer;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 0.85;
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFSoftShadowMap;
    this.quality = null;
    this.scale = 1; // dynamic resolution factor
    this.frameTimes = [];
    this.adaptTimer = 0;
  }

  init(scene, camera) {
    this.scene = scene;
    this.camera = camera;
  }

  buildComposer() {
    const q = this.quality;
    const r = this.renderer;
    if (this.composer) {
      this.composer.renderTarget1.dispose();
      this.composer.renderTarget2.dispose();
      for (const p of this.composer.passes) p.dispose?.();
    }
    const size = r.getSize(new THREE.Vector2());
    const target = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: q.msaa });
    this.composer = new EffectComposer(r, target);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.ao = null;
    if (q.ao) {
      this.ao = new CityAOPass(this.scene, this.camera, size.x, size.y);
      this.ao.output = GTAOPass.OUTPUT.Default;
      this.ao.blendIntensity = 0.85;
      this.ao.updateGtaoMaterial({ radius: 1.6, distanceExponent: 1.6, thickness: 2.5, scale: 1.4, samples: 12, distanceFallOff: 1, screenSpaceRadius: false });
      this.ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 });
      this.composer.addPass(this.ao);
    }
    this.shafts = new ShaderPass(SunShaftShader);
    this.shafts.enabled = q.shafts;
    this.composer.addPass(this.shafts);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.42, 0.62, 0.92);
    this.bloom.enabled = q.bloom;
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());
    this.grade = new ShaderPass(GradeShader);
    this.grade.enabled = true;
    if (!q.grade) {
      this.grade.uniforms.grain.value = 0;
      this.grade.uniforms.aberration.value = 0;
    }
    this.composer.addPass(this.grade);
    this.applySize();
  }

  setQuality(name) {
    this.quality = QUALITY[name] || QUALITY.high;
    this.qualityName = name;
    this.scale = 1;
    this.renderer.shadowMap.enabled = true;
    this.buildComposer();
  }

  applySize() {
    const w = innerWidth, h = innerHeight;
    const pr = Math.min(devicePixelRatio || 1, this.quality.pixelRatio) * this.scale;
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h);
    this.composer.setPixelRatio(pr);
    this.composer.setSize(w, h);
    this.grade.uniforms.resolution.value.set(w * pr, h * pr);
    this.shafts.uniforms.aspect.value = w / h;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.onResize?.();
  }

  // Lower or raise the render scale to hold ~55+ fps.
  adapt(dt) {
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

  render() {
    this.composer.render();
  }
}
