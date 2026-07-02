// Graphics quality tiers. See docs/PERFORMANCE.md for the budget notes.
// All tiers share the same GTA IV-ish visual language (ACES tone mapping,
// warm sun, desaturated-but-punchy palette); tiers trade draw distance,
// shadows, reflections, texture resolution and ground clutter.
import * as THREE from 'three';
import { SUN_DIR } from './sky.js';

export const TIERS = {
  low: {
    id: 'low', label: 'Low',
    px: 0.75, lowMat: true, shadows: false, shadowMap: 0,
    draw: 9000, clutter: 0, reflections: false, fuselageReflections: false,
    texScale: 0.5, anisotropy: 1
  },
  medium: {
    id: 'medium', label: 'Medium',
    px: 1.0, lowMat: false, shadows: true, shadowMap: 1024,
    draw: 16000, clutter: 0.4, reflections: false, fuselageReflections: false,
    texScale: 0.75, anisotropy: 2
  },
  high: {
    id: 'high', label: 'High',
    px: 1.0, lowMat: false, shadows: true, shadowMap: 2048,
    draw: 26000, clutter: 0.7, reflections: true, fuselageReflections: false,
    texScale: 1, anisotropy: 4
  },
  max: {
    id: 'max', label: 'Maximum',
    px: 0, /* 0 = native devicePixelRatio */ lowMat: false, shadows: true, shadowMap: 4096,
    draw: 40000, clutter: 1, reflections: true, fuselageReflections: true,
    texScale: 1, anisotropy: 8
  }
};

export function createRenderer(canvas) {
  // logarithmicDepthBuffer: the world spans centimetres (runway markings)
  // to ~40 km (draw distance); a linear depth buffer z-fights beyond ~3 km.
  const renderer = new THREE.WebGLRenderer({
    canvas, antialias: true, powerPreference: 'high-performance', logarithmicDepthBuffer: true
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  return renderer;
}

export function applyTier(renderer, tier) {
  renderer.setPixelRatio(tier.px === 0 ? Math.min(window.devicePixelRatio, 2) : tier.px);
  renderer.shadowMap.enabled = tier.shadows;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
}

export function createLights(scene, tier) {
  const hemi = new THREE.HemisphereLight('#bcd4f5', '#8a8d7a', 0.85);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight('#fff1da', 2.6);
  sun.position.copy(SUN_DIR).multiplyScalar(1200);
  scene.add(sun);
  scene.add(sun.target);
  if (tier.shadows) {
    sun.castShadow = true;
    sun.shadow.mapSize.set(tier.shadowMap, tier.shadowMap);
    const ext = tier.id === 'medium' ? 220 : 420;
    sun.shadow.camera.left = -ext;
    sun.shadow.camera.right = ext;
    sun.shadow.camera.top = ext;
    sun.shadow.camera.bottom = -ext;
    sun.shadow.camera.near = 50;
    sun.shadow.camera.far = 3200;
    sun.shadow.bias = -0.0004;
  }
  return { hemi, sun };
}

// Keep the (bounded) shadow frustum centred on the player.
export function updateSunTarget(sun, target) {
  sun.target.position.copy(target);
  sun.position.copy(target).addScaledVector(SUN_DIR, 1500);
}

// Cheap environment reflections: PMREM of a tiny gradient scene.
// Applied as scene.environment on High/Maximum.
export function makeEnvironment(renderer) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  const grad = new THREE.Mesh(
    new THREE.SphereGeometry(80, 16, 10),
    new THREE.MeshBasicMaterial({ side: THREE.BackSide, vertexColors: true })
  );
  const geo = grad.geometry;
  const colors = [];
  const posAttr = geo.getAttribute('position');
  const top = new THREE.Color('#4a7fbd'), bottom = new THREE.Color('#6b6f66'), mid = new THREE.Color('#cfd9de');
  for (let i = 0; i < posAttr.count; i++) {
    const y = posAttr.getY(i) / 80;
    const c = y > 0 ? mid.clone().lerp(top, Math.min(y * 1.6, 1)) : mid.clone().lerp(bottom, Math.min(-y * 2, 1));
    colors.push(c.r, c.g, c.b);
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  envScene.add(grad);
  const sunBall = new THREE.Mesh(new THREE.SphereGeometry(6, 8, 6), new THREE.MeshBasicMaterial({ color: '#fffbe8' }));
  sunBall.position.copy(SUN_DIR).multiplyScalar(60);
  envScene.add(sunBall);
  const tex = pmrem.fromScene(envScene, 0.04).texture;
  pmrem.dispose();
  return tex;
}
