// Always-day sky: fixed midday sun, gradient dome, sun bloom sprites and a
// static decorative cloud layer. No time-of-day or weather simulation (v1).
import * as THREE from 'three';
import { DEG2RAD } from '../core/math.js';

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

function cloudTexture() {
  const cv = document.createElement('canvas');
  cv.width = 256; cv.height = 128;
  const g = cv.getContext('2d');
  for (let i = 0; i < 26; i++) {
    const x = 30 + Math.random() * 196, y = 40 + Math.random() * 50;
    const r = 14 + Math.random() * 30;
    const grad = g.createRadialGradient(x, y, 2, x, y, r);
    grad.addColorStop(0, 'rgba(255,255,255,0.55)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grad;
    g.fillRect(x - r, y - r, r * 2, r * 2);
  }
  return new THREE.CanvasTexture(cv);
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
      zenith: { value: new THREE.Color('#2f6bad') },
      mid: { value: new THREE.Color('#84abd0') },
      horizon: { value: new THREE.Color('#d3dce0') }
    },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);}`,
    fragmentShader: `varying vec3 vDir; uniform vec3 zenith; uniform vec3 mid; uniform vec3 horizon;
      void main(){
        float h = clamp(vDir.y, 0.0, 1.0);
        vec3 c = mix(horizon, mid, smoothstep(0.0, 0.18, h));
        c = mix(c, zenith, smoothstep(0.18, 0.65, h));
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

  // Static cloud layer (world-fixed, decorative)
  const cloudGroup = new THREE.Group();
  const ctex = cloudTexture();
  for (let i = 0; i < 20; i++) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({
      map: ctex, transparent: true, opacity: 0.5 + Math.random() * 0.3, depthWrite: false, fog: false
    }));
    const a = Math.random() * Math.PI * 2, d = 2500 + Math.random() * Math.min(14000, drawDist * 0.5);
    sp.position.set(Math.sin(a) * d, 1900 + Math.random() * 1400, -Math.cos(a) * d);
    sp.scale.set(1100 + Math.random() * 1400, 380 + Math.random() * 300, 1);
    cloudGroup.add(sp);
  }
  scene.add(cloudGroup);

  return {
    group,
    clouds: cloudGroup,
    update(camera) {
      // dome and sun track the camera (infinite-distance illusion)
      group.position.set(camera.position.x, 0, camera.position.z);
    },
    dispose() {
      scene.remove(group);
      scene.remove(cloudGroup);
    }
  };
}
