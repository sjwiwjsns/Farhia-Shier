import * as THREE from 'three';
import { NOISE, SKY } from '../core/glsl.js';

// Time of day drives everything: sun and moon position, sky scattering, light
// colors, fog, reflections and how many windows, lamps and headlights glow.

export const TIME_PRESETS = {
  golden: 19.22,
  dusk: 19.95,
  night: 23.2,
  dawn: 6.9,
  noon: 13.2,
};

const SUNRISE = 6.4;
const SUNSET = 19.7;

// Uniforms shared with every patched material, the sky and the ocean.
export const atmoUniforms = {
  skySunDir: { value: new THREE.Vector3(-0.9, 0.12, -0.3).normalize() },
  skyMoonDir: { value: new THREE.Vector3(0.6, 0.5, 0.4).normalize() },
  skyTurbidity: { value: 6 },
  skyRayleigh: { value: 2.2 },
  skyMie: { value: 0.006 },
  skyMieG: { value: 0.82 },
  skyIntensity: { value: 0.75 },
  skyCloudCover: { value: 0.42 },
  skyTime: { value: 0 },
  skyNight: { value: 0 },
  skyCloudLit: { value: new THREE.Color() },
  skyCloudShade: { value: new THREE.Color() },
  fogSunColor: { value: new THREE.Color() },
  fogSunDir: { value: new THREE.Vector3() },
  fogHeightFalloff: { value: 0.012 },
  nightFactor: { value: 0 },
  worldTime: { value: 0 },
};

// Every lit material gets atmospheric fog that is brighter toward the sun and
// thins out with altitude, so towers fade into haze and the horizon glows.
THREE.ShaderChunk.fog_pars_vertex = `
#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogWorld;
#endif`;
THREE.ShaderChunk.fog_vertex = `
#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vFogWorld = transpose(mat3(viewMatrix)) * (mvPosition.xyz - viewMatrix[3].xyz);
#endif`;
THREE.ShaderChunk.fog_pars_fragment = `
#ifdef USE_FOG
  uniform vec3 fogColor;
  uniform float fogDensity;
  uniform vec3 fogSunColor;
  uniform vec3 fogSunDir;
  uniform float fogHeightFalloff;
  varying float vFogDepth;
  varying vec3 vFogWorld;
  vec3 pa_applyFog(vec3 color, vec3 worldPos) {
    vec3 ray = worldPos - cameraPosition;
    float dist = length(ray);
    vec3 dir = ray / max(dist, 1e-4);
    float k = fogHeightFalloff;
    float kdy = clamp(k * ray.y, -20.0, 20.0);
    float heightTerm = exp(-k * max(cameraPosition.y, 0.0)) * (abs(kdy) > 0.001 ? (1.0 - exp(-kdy)) / kdy : 1.0);
    float amount = 1.0 - exp(-fogDensity * dist * heightTerm);
    float sunAmt = pow(max(dot(dir, fogSunDir), 0.0), 7.0);
    vec3 fogCol = mix(fogColor, fogSunColor, sunAmt);
    return mix(color, fogCol, clamp(amount, 0.0, 1.0));
  }
#endif`;
THREE.ShaderChunk.fog_fragment = `
#ifdef USE_FOG
  gl_FragColor.rgb = pa_applyFog(gl_FragColor.rgb, vFogWorld);
#endif`;

// Adds the shared atmosphere uniforms to a built-in material without
// disturbing any onBeforeCompile hook it already has.
export function patchAtmosphere(material) {
  if (material.userData.atmo) return material;
  material.userData.atmo = true;
  const prev = material.onBeforeCompile;
  const prevKey = material.customProgramCacheKey();
  material.onBeforeCompile = function (shader, renderer) {
    prev.call(this, shader, renderer);
    shader.uniforms.fogSunColor = atmoUniforms.fogSunColor;
    shader.uniforms.fogSunDir = atmoUniforms.fogSunDir;
    shader.uniforms.fogHeightFalloff = atmoUniforms.fogHeightFalloff;
  };
  material.customProgramCacheKey = () => prevKey + '|atmo';
  return material;
}

export function patchSceneMaterials(scene) {
  scene.traverse(obj => {
    if (!obj.material) return;
    for (const m of Array.isArray(obj.material) ? obj.material : [obj.material]) {
      if (m.isShaderMaterial || m.isRawShaderMaterial) continue;
      patchAtmosphere(m);
    }
  });
}

const skyVertex = /* glsl */`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`;
const skyFragment = /* glsl */`
${NOISE}
${SKY}
varying vec3 vDir;
uniform float skyClouds;
uniform float skyDisc;
void main() {
  vec3 dir = normalize(vDir);
  vec3 col = pa_sky(dir, skyDisc > 0.5, skyClouds > 0.5);
  // The lighting probe clamps the bright Mie glow around the sun for the same reason.
  if (skyDisc < 0.5) col = min(col, vec3(1.4));
  // Below the horizon fade to the haze color so the far ocean edge blends in.
  gl_FragColor = vec4(col, 1.0);
}`;

function makeSkyMaterial(clouds = true, disc = true) {
  return new THREE.ShaderMaterial({
    uniforms: { ...atmoUniforms, skyClouds: { value: clouds ? 1 : 0 }, skyDisc: { value: disc ? 1 : 0 } },
    vertexShader: skyVertex,
    fragmentShader: skyFragment,
    side: THREE.BackSide,
    depthWrite: false,
    depthTest: true,
    fog: false,
  });
}

const _up = new THREE.Vector3(0, 1, 0), _right = new THREE.Vector3(), _upL = new THREE.Vector3(), _snap = new THREE.Vector3();
const C = (r, g, b) => new THREE.Color(r, g, b);
const lerpColor = (out, stops, t) => {
  // stops: [[t, Color], ...] sorted by t
  if (t <= stops[0][0]) return out.copy(stops[0][1]);
  for (let i = 1; i < stops.length; i++) {
    if (t <= stops[i][0]) {
      const [t0, c0] = stops[i - 1], [t1, c1] = stops[i];
      return out.copy(c0).lerp(c1, (t - t0) / (t1 - t0));
    }
  }
  return out.copy(stops[stops.length - 1][1]);
};
const lerpNum = (stops, t) => {
  if (t <= stops[0][0]) return stops[0][1];
  for (let i = 1; i < stops.length; i++) {
    if (t <= stops[i][0]) {
      const [t0, a] = stops[i - 1], [t1, b] = stops[i];
      return a + (b - a) * (t - t0) / (t1 - t0);
    }
  }
  return stops[stops.length - 1][1];
};

// Keyed on sun elevation in degrees.
const SUN_COLOR = [[-6, C(0.9, 0.35, 0.2)], [0, C(1.0, 0.34, 0.1)], [4, C(1.0, 0.47, 0.19)], [10, C(1.0, 0.66, 0.38)], [25, C(1.0, 0.88, 0.74)], [60, C(1.0, 0.97, 0.92)]];
const SUN_POWER = [[-4, 0], [0, 1.6], [4, 4.6], [12, 5.0], [40, 5.2]];
const HEMI_SKY = [[-15, C(0.06, 0.09, 0.18)], [-4, C(0.22, 0.24, 0.42)], [2, C(0.62, 0.55, 0.62)], [12, C(0.6, 0.7, 0.85)], [40, C(0.62, 0.76, 0.95)]];
const HEMI_GROUND = [[-15, C(0.05, 0.05, 0.06)], [0, C(0.35, 0.24, 0.2)], [15, C(0.42, 0.36, 0.3)], [40, C(0.45, 0.42, 0.38)]];
const HEMI_POWER = [[-15, 0.4], [-4, 0.42], [3, 0.32], [12, 0.45], [30, 0.6]];
const FOG_COLOR = [[-15, C(0.03, 0.04, 0.075)], [-5, C(0.15, 0.15, 0.26)], [0, C(0.42, 0.33, 0.38)], [6, C(0.58, 0.45, 0.42)], [18, C(0.55, 0.62, 0.72)], [50, C(0.55, 0.66, 0.8)]];
const FOG_SUN = [[-15, C(0.05, 0.06, 0.1)], [-5, C(0.4, 0.24, 0.22)], [0, C(1.15, 0.5, 0.22)], [6, C(1.2, 0.68, 0.38)], [20, C(0.9, 0.84, 0.76)], [50, C(0.75, 0.8, 0.86)]];
const CLOUD_LIT = [[-12, C(0.04, 0.05, 0.08)], [-5, C(0.45, 0.25, 0.32)], [0, C(1.8, 0.72, 0.42)], [5, C(1.9, 1.1, 0.7)], [15, C(1.5, 1.4, 1.35)], [50, C(1.5, 1.5, 1.5)]];
const CLOUD_SHADE = [[-12, C(0.02, 0.025, 0.04)], [-5, C(0.18, 0.13, 0.22)], [0, C(0.42, 0.26, 0.34)], [5, C(0.6, 0.45, 0.48)], [15, C(0.62, 0.66, 0.74)], [50, C(0.7, 0.74, 0.8)]];
const FOG_DENSITY = [[-15, 0.0007], [-3, 0.0008], [3, 0.00085], [15, 0.0006], [50, 0.00045]];
const EXPOSURE = [[-15, 1.35], [-5, 1.2], [0, 1.05], [6, 0.92], [20, 0.76], [50, 0.68]];
const ENV_POWER = [[-15, 0.5], [-4, 0.45], [2, 0.36], [12, 0.45], [30, 0.6]];

export class Atmosphere {
  constructor(renderer, scene) {
    this.renderer = renderer;
    this.scene = scene;
    this.hours = TIME_PRESETS.golden;
    this.cycle = false; // when true time advances
    this.cycleSpeed = 24 / (48 * 60); // a full day in 48 real minutes; sunset to night takes about four

    this.sky = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), makeSkyMaterial(true));
    this.sky.scale.setScalar(2000);
    this.sky.frustumCulled = false;
    this.sky.renderOrder = -10;
    this.sky.userData.noAO = true;
    scene.add(this.sky);

    // A separate sky feeds the probe used for image based lighting. It leaves out
    // the sun disc: the sun is a real shadow-casting light, and baking it into
    // the probe too would add a second, shadowless sun that washes shadows out.
    this.probeScene = new THREE.Scene();
    this.probeSky = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), makeSkyMaterial(true, false));
    this.probeSky.scale.setScalar(100);
    this.probeScene.add(this.probeSky);
    // A dim ground disc so reflections are not lit from below by the sky.
    const ground = new THREE.Mesh(new THREE.CircleGeometry(60, 24), new THREE.MeshBasicMaterial({ color: 0x1b1a1c }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2;
    this.probeGround = ground;
    this.probeScene.add(ground);
    this.pmrem = new THREE.PMREMGenerator(renderer);
    this.envTarget = null;
    this.envDirty = true;
    this.envTimer = 0;
    this.lastEnvHours = -100;

    this.sun = new THREE.DirectionalLight(0xffffff, 3);
    this.sun.castShadow = true;
    this.sun.shadow.bias = -0.0002;
    this.sun.shadow.normalBias = 0.06;
    this.shadowRange = 110;
    scene.add(this.sun, this.sun.target);
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    scene.add(this.hemi);

    scene.fog = new THREE.FogExp2(0xc1998f, 0.0016);
    this.sunDir = new THREE.Vector3();
    this.moonDir = new THREE.Vector3();
    this.lightDir = new THREE.Vector3();
    this.nightFactor = 0;
    this.elevation = 0;
    this.exposure = 0.8;
    this.apply();
  }

  setHours(h) {
    this.hours = ((h % 24) + 24) % 24;
    this.envDirty = true;
    this.apply();
  }

  setShadowQuality(size, range) {
    this.sun.shadow.mapSize.set(size, size);
    this.shadowRange = range;
    if (this.sun.shadow.map) {
      this.sun.shadow.map.dispose();
      this.sun.shadow.map = null;
    }
    const cam = this.sun.shadow.camera;
    cam.left = cam.bottom = -range;
    cam.right = cam.top = range;
    cam.near = 1;
    cam.far = 900;
    cam.updateProjectionMatrix();
  }

  computeSun(hours, out) {
    const p = (hours - SUNRISE) / (SUNSET - SUNRISE);
    const a = Math.PI * p;
    const el = Math.asin(Math.sin(a) * Math.sin(THREE.MathUtils.degToRad(64)));
    // Rises east-north-east over the hills, sets west-north-west over the ocean.
    const hx = Math.cos(a), hz = Math.sin(a) * 0.6 - 0.32;
    const hl = Math.hypot(hx, hz) || 1;
    out.set((hx / hl) * Math.cos(el), Math.sin(el), (hz / hl) * Math.cos(el)).normalize();
    return THREE.MathUtils.radToDeg(el);
  }

  apply() {
    const u = atmoUniforms;
    const elev = this.computeSun(this.hours, this.sunDir);
    this.elevation = elev;
    // The moon follows roughly opposite the sun, a little higher so night scenes are lit.
    this.computeSun(this.hours + 12.4, this.moonDir);
    this.moonDir.y = Math.max(this.moonDir.y, 0.25);
    this.moonDir.normalize();
    u.skySunDir.value.copy(this.sunDir);
    u.skyMoonDir.value.copy(this.moonDir);

    const night = THREE.MathUtils.smoothstep(-elev, -2, 9); // 0 at day, 1 at deep night
    const lamps = THREE.MathUtils.smoothstep(-elev, -7, 1.5); // lamps switch on before full dark
    this.nightFactor = night;
    this.lampFactor = lamps;
    u.nightFactor.value = lamps;
    u.skyNight.value = night;
    u.skyTurbidity.value = lerpNum([[-5, 3.5], [2, 5.5], [10, 4.5], [40, 2.6]], elev);
    u.skyRayleigh.value = lerpNum([[-5, 1.6], [2, 2.8], [10, 2.0], [40, 1.2]], elev);
    u.skyMie.value = lerpNum([[0, 0.006], [10, 0.005], [40, 0.004]], elev);
    u.skyIntensity.value = lerpNum([[-8, 0.6], [0, 0.72], [20, 0.62], [50, 0.55]], elev);
    lerpColor(u.skyCloudLit.value, CLOUD_LIT, elev);
    lerpColor(u.skyCloudShade.value, CLOUD_SHADE, elev);

    const sunVisible = elev > -1.5;
    this.lightDir.copy(sunVisible ? this.sunDir : this.moonDir);
    if (sunVisible) {
      lerpColor(this.sun.color, SUN_COLOR, elev);
      this.sun.intensity = lerpNum(SUN_POWER, elev);
    } else {
      this.sun.color.setRGB(0.55, 0.65, 0.95);
      this.sun.intensity = 0.32 * night;
    }
    // Keep the shadow caster above the horizon so shadows never come from underground.
    if (this.lightDir.y < 0.08) {
      this.lightDir.y = 0.08;
      this.lightDir.normalize();
    }
    lerpColor(this.hemi.color, HEMI_SKY, elev);
    lerpColor(this.hemi.groundColor, HEMI_GROUND, elev);
    this.hemi.intensity = lerpNum(HEMI_POWER, elev);
    lerpColor(this.scene.fog.color, FOG_COLOR, elev);
    lerpColor(u.fogSunColor.value, FOG_SUN, elev);
    u.fogSunDir.value.copy(this.sunDir);
    this.scene.fog.density = lerpNum(FOG_DENSITY, elev);
    this.exposure = lerpNum(EXPOSURE, elev);
    this.scene.environmentIntensity = lerpNum(ENV_POWER, elev);
    this.probeGround.material.color.copy(this.hemi.groundColor).multiplyScalar(0.25);
  }

  regenerateEnvironment() {
    const prev = this.envTarget;
    this.envTarget = this.pmrem.fromScene(this.probeScene, 0, 0.1, 400);
    this.scene.environment = this.envTarget.texture;
    if (prev) prev.dispose();
    this.envDirty = false;
    this.lastEnvHours = this.hours;
  }

  update(dt, time, focus, camera) {
    atmoUniforms.skyTime.value = time;
    atmoUniforms.worldTime.value = time;
    if (this.cycle) {
      this.hours = (this.hours + dt * this.cycleSpeed) % 24;
      this.apply();
      if (Math.abs(this.hours - this.lastEnvHours) > 0.12) this.envDirty = true;
    }
    if (this.envDirty) this.regenerateEnvironment();

    this.sky.position.copy(camera.position);
    // Shadow camera follows the car and snaps to whole texels in light space so
    // shadow edges stay still instead of crawling as the car moves.
    const range = this.shadowRange;
    const texel = (range * 2) / this.sun.shadow.mapSize.x;
    const r = _right.crossVectors(_up, this.lightDir).normalize();
    const u = _upL.crossVectors(this.lightDir, r);
    const sr = Math.round(focus.dot(r) / texel) * texel;
    const su = Math.round(focus.dot(u) / texel) * texel;
    const sf = focus.dot(this.lightDir);
    _snap.copy(r).multiplyScalar(sr).addScaledVector(u, su).addScaledVector(this.lightDir, sf);
    this.sun.target.position.copy(_snap);
    this.sun.position.copy(_snap).addScaledVector(this.lightDir, 450);
    this.sun.target.updateMatrixWorld();
  }

  get clockLabel() {
    const h = Math.floor(this.hours), m = Math.floor((this.hours - h) * 60);
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }
}
