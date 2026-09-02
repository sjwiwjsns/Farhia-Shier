// Always-day sky: fixed midday sun, gradient dome, sun bloom sprites and a
// static decorative cloud layer. No time-of-day or weather simulation (v1).
import * as THREE from 'three';
import { DEG2RAD, mulberry32 } from '../core/math.js';

export const SUN_ELEVATION = 55 * DEG2RAD;
export const SUN_AZIMUTH = 135 * DEG2RAD;
export const SUN_DIR = new THREE.Vector3(
  Math.sin(SUN_AZIMUTH) * Math.cos(SUN_ELEVATION),
  Math.sin(SUN_ELEVATION),
  -Math.cos(SUN_AZIMUTH) * Math.cos(SUN_ELEVATION)
).normalize();

function glowTexture(inner, outer, stops = [[0, inner], [0.35, inner], [1, outer]]) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 128;
  const g = cv.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 4, 64, 64, 64);
  for (const [t, c] of stops) grad.addColorStop(t, c);
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(cv);
}

// A proper fair-weather cumulus: a cluster of soft puffs massed along a spine
// with a flattish base, then shaded top-down (sunlit crown, grey underside)
// and given a cool rim so it reads as a lit volume rather than a fog blob.
function cloudTexture(rand) {
  const W = 512, H = 256;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const g = cv.getContext('2d');

  const baseY = H * 0.74;           // flat-ish cumulus base
  const puff = (x, y, r, a) => {
    const grad = g.createRadialGradient(x, y, r * 0.15, x, y, r);
    grad.addColorStop(0, `rgba(255,255,255,${a})`);
    grad.addColorStop(0.55, `rgba(255,255,255,${a * 0.85})`);
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grad;
    g.beginPath();
    g.arc(x, y, r, 0, Math.PI * 2);
    g.fill();
  };

  // main mass: big puffs along the spine, tallest near the middle
  const lobes = 7 + Math.floor(rand() * 5);
  for (let i = 0; i < lobes; i++) {
    const t = i / (lobes - 1);
    const bell = Math.sin(t * Math.PI);            // fat middle, tapered ends
    const x = W * (0.13 + t * 0.74) + (rand() - 0.5) * 26;
    const r = (26 + bell * 52) * (0.75 + rand() * 0.5);
    const y = baseY - r * (0.35 + bell * 0.55);
    puff(x, y, r, 0.95);
  }
  // cauliflower detail on the crown
  for (let i = 0; i < 22; i++) {
    const t = rand();
    const bell = Math.sin(t * Math.PI);
    const x = W * (0.16 + t * 0.68) + (rand() - 0.5) * 40;
    const r = 12 + rand() * 26;
    const y = baseY - (18 + bell * 78) * (0.5 + rand() * 0.7);
    puff(x, y, r, 0.7);
  }
  // ragged base so it doesn't cut off as a straight line
  for (let i = 0; i < 9; i++) {
    const x = W * (0.18 + rand() * 0.64);
    puff(x, baseY - 4 + rand() * 8, 16 + rand() * 22, 0.55);
  }

  // vertical shading: warm sunlit crown -> neutral -> grey shadowed base
  g.globalCompositeOperation = 'source-atop';
  const shade = g.createLinearGradient(0, baseY - 150, 0, baseY + 14);
  shade.addColorStop(0, 'rgba(255,252,244,0.95)');
  shade.addColorStop(0.45, 'rgba(238,242,248,0.30)');
  shade.addColorStop(0.78, 'rgba(150,163,181,0.42)');
  shade.addColorStop(1, 'rgba(118,132,152,0.62)');
  g.fillStyle = shade;
  g.fillRect(0, 0, W, H);
  g.globalCompositeOperation = 'source-over';

  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createSky(scene, drawDist) {
  const group = new THREE.Group();
  scene.add(group);

  // Gradient dome
  const domeMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      zenith: { value: new THREE.Color('#2a63a8') },
      mid: { value: new THREE.Color('#84abd0') },
      horizon: { value: new THREE.Color('#d6dee2') },
      sunGlow: { value: new THREE.Color('#ffe6bd') },
      sunDir: { value: SUN_DIR.clone() }
    },
    // The renderer uses a logarithmic depth buffer, so this shader has to
    // write log depth too — otherwise its depth test is inconsistent with
    // every other material and the dome paints over near geometry (it was
    // showing through the flight-deck roof).
    vertexShader: `varying vec3 vDir;
      #include <common>
      #include <logdepthbuf_pars_vertex>
      void main(){
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        #include <logdepthbuf_vertex>
      }`,
    fragmentShader: `varying vec3 vDir;
      uniform vec3 zenith; uniform vec3 mid; uniform vec3 horizon; uniform vec3 sunGlow; uniform vec3 sunDir;
      #include <common>
      #include <logdepthbuf_pars_fragment>
      void main(){
        #include <logdepthbuf_fragment>
        vec3 d = normalize(vDir);
        float h = clamp(d.y, 0.0, 1.0);
        vec3 c = mix(horizon, mid, smoothstep(0.0, 0.16, h));
        c = mix(c, zenith, smoothstep(0.16, 0.70, h));
        // aerial perspective: the sky warms and pales toward the sun, and the
        // haze thickens into a band just above the horizon
        float sun = max(dot(d, normalize(sunDir)), 0.0);
        c = mix(c, sunGlow, pow(sun, 5.0) * 0.55 + pow(sun, 1.6) * 0.10);
        c = mix(c, horizon, (1.0 - smoothstep(0.0, 0.09, h)) * 0.55);
        gl_FragColor = vec4(c, 1.0);
      }`
  });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(drawDist * 0.93, 24, 14), domeMat);
  group.add(dome);

  // Sun disc + strong bloom halo (GTA-style punchy sun)
  const sunPos = SUN_DIR.clone().multiplyScalar(drawDist * 0.88);
  const disc = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture('rgba(255,252,240,1)', 'rgba(255,244,200,0)'),
    blending: THREE.AdditiveBlending, depthWrite: false, fog: false
  }));
  disc.position.copy(sunPos);
  disc.scale.setScalar(drawDist * 0.055);
  group.add(disc);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture('rgba(255,240,200,0.55)', 'rgba(255,230,180,0)'),
    blending: THREE.AdditiveBlending, depthWrite: false, fog: false, opacity: 0.8
  }));
  halo.position.copy(sunPos);
  halo.scale.setScalar(drawDist * 0.30);
  group.add(halo);

  // Cloud layer: shaded cumulus billboards on two decks, drifting with the
  // wind and wrapped around the camera so the sky stays populated wherever
  // you fly. Sprites keep the texture's 2:1 aspect (squashing reads as fog).
  const rand = mulberry32(0x0c10d5);
  const cloudGroup = new THREE.Group();
  const textures = [cloudTexture(rand), cloudTexture(rand), cloudTexture(rand), cloudTexture(rand)];
  const CLOUD_R = Math.min(19000, drawDist * 0.62);
  for (let i = 0; i < 34; i++) {
    const high = i >= 24;                       // thinner, higher, hazier deck
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({
      map: textures[Math.floor(rand() * textures.length)],
      transparent: true,
      opacity: high ? 0.30 + rand() * 0.18 : 0.72 + rand() * 0.26,
      depthWrite: false, fog: false
    }));
    const a = rand() * Math.PI * 2, d = 1800 + rand() * (CLOUD_R - 1800);
    const w = (high ? 1900 : 1000) + rand() * (high ? 2100 : 1500);
    sp.position.set(Math.sin(a) * d, (high ? 3700 : 1700) + rand() * (high ? 1500 : 1100), -Math.cos(a) * d);
    sp.scale.set(w, w * 0.5, 1);                // 512x256 texture -> 2:1
    cloudGroup.add(sp);
  }
  scene.add(cloudGroup);

  const _drift = new THREE.Vector3();

  return {
    group,
    clouds: cloudGroup,
    update(camera, dt = 0, wind = null) {
      // dome and sun track the camera (infinite-distance illusion)
      group.position.set(camera.position.x, 0, camera.position.z);

      if (dt > 0) {
        // clouds ride the wind aloft (a little faster than the surface layer)
        if (wind) _drift.set(wind.x, 0, wind.z).multiplyScalar(1.6);
        else _drift.set(2.4, 0, -1.8);
        const cx = camera.position.x, cz = camera.position.z;
        for (const sp of cloudGroup.children) {
          sp.position.x += _drift.x * dt;
          sp.position.z += _drift.z * dt;
          const dx = sp.position.x - cx, dz = sp.position.z - cz;
          const dist = Math.hypot(dx, dz);
          if (dist > CLOUD_R) {
            // recycle to the upwind side so the deck never thins out
            const k = (CLOUD_R * 0.94) / dist;
            sp.position.x = cx - dx * k;
            sp.position.z = cz - dz * k;
          }
        }
      }
    },
    dispose() {
      scene.remove(group);
      scene.remove(cloudGroup);
      for (const t of textures) t.dispose();
    }
  };
}
