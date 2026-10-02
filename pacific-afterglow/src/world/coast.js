import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';
import { NOISE, SKY } from '../core/glsl.js';
import { atmoUniforms } from './atmosphere.js';
import { proceduralMaterial, canvasTexture } from '../core/materials.js';
import { SHORE_X, WATER_Y, PIER, BEACH_START, pierHeight } from './layout.js';
import { range, pick } from '../core/rng.js';

const oceanVertex = /* glsl */`
uniform mat4 textureMatrix;
uniform float time;
varying vec4 vMirror;
varying vec3 vWorld;
#include <fog_pars_vertex>
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  float offshore = smoothstep(${(SHORE_X).toFixed(1)}, ${(SHORE_X - 70).toFixed(1)}, wp.x);
  wp.y += (sin(wp.x * 0.045 + time * 0.9) * 0.22 + sin(wp.z * 0.031 - wp.x * 0.017 + time * 0.65) * 0.18) * offshore;
  vWorld = wp.xyz;
  vMirror = textureMatrix * vec4(position, 1.0);
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`;

const oceanFragment = /* glsl */`
uniform sampler2D tDiffuse;
uniform float useMirror;
uniform float time;
uniform vec3 sunLight;
uniform vec3 ambient;
varying vec4 vMirror;
varying vec3 vWorld;
${NOISE}
${SKY}
#include <fog_pars_fragment>

vec2 waveGrad(vec2 p, float t) {
  vec2 g = vec2(0.0);
  // Directional swell, chop and ripples.
  const int N = 7;
  vec3 waves[N] = vec3[N](
    vec3(-0.95, 0.31, 0.08), vec3(-0.7, -0.71, 0.13), vec3(-0.99, -0.12, 0.21),
    vec3(-0.4, 0.92, 0.37), vec3(-0.83, 0.55, 0.61), vec3(0.2, -0.98, 0.93), vec3(-0.6, -0.8, 1.7));
  for (int i = 0; i < N; i++) {
    vec2 d = normalize(waves[i].xy);
    float k = waves[i].z;
    float amp = 0.11 / (1.0 + k * 5.0);
    float ph = dot(d, p) * k + t * sqrt(9.8 * k);
    g += d * k * amp * cos(ph);
  }
  return g;
}

void main() {
  vec3 V = cameraPosition - vWorld;
  float dist = length(V);
  V /= dist;
  vec2 g = waveGrad(vWorld.xz, time);
  // High frequency ripples fade out with distance to avoid sparkle aliasing.
  float detail = 1.0 - smoothstep(40.0, 260.0, dist);
  vec2 rp = vWorld.xz * 0.9 + vec2(time * 0.35, time * 0.2);
  float r0 = pa_noise(rp), rx = pa_noise(rp + vec2(0.15, 0.0)), rz = pa_noise(rp + vec2(0.0, 0.15));
  g += vec2(r0 - rx, r0 - rz) * 0.5 * detail;
  vec3 n = normalize(vec3(-g.x, 1.0, -g.y));
  // Flatten toward the horizon so distant water acts like a mirror.
  n = normalize(mix(n, vec3(0.0, 1.0, 0.0), smoothstep(250.0, 1400.0, dist) * 0.7));

  float cosV = max(dot(n, V), 0.0);
  float fres = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
  vec3 R = reflect(-V, n);
  R.y = abs(R.y);
  vec3 refl;
  if (useMirror > 0.5) {
    vec4 mc = vMirror;
    mc.xy += n.xz * 3.5 * mc.w / max(dist * 0.08 + 1.0, 1.0);
    refl = texture2DProj(tDiffuse, mc).rgb;
  } else {
    refl = pa_sky(R, false, true);
  }

  float shoreDist = ${(SHORE_X).toFixed(1)} - vWorld.x; // meters offshore
  vec3 deep = vec3(0.004, 0.025, 0.04);
  vec3 shallow = vec3(0.02, 0.12, 0.12);
  vec3 body = mix(shallow, deep, smoothstep(0.0, 40.0, shoreDist));
  body *= ambient * 1.2 + sunLight * 0.08;

  vec3 sunDir = skySunDir;
  float sunDot = max(dot(R, sunDir), 0.0);
  float spec = pow(sunDot, 900.0) * 60.0 + pow(sunDot, 120.0) * 2.5 + pow(sunDot, 18.0) * 0.12;
  vec3 col = mix(body, refl, fres) + sunLight * spec * step(0.0, sunDir.y);

  // Breaking waves and swash foam close to shore.
  float nfoam = pa_noise(vWorld.xz * vec2(0.12, 0.06) + time * 0.1);
  float front = sin(shoreDist * 0.42 - time * 1.3 + nfoam * 4.0);
  float foam = smoothstep(0.82, 0.98, front) * smoothstep(28.0, 6.0, shoreDist);
  float swash = smoothstep(4.5 + sin(time * 0.8 + vWorld.z * 0.05) * 2.5, 0.0, shoreDist);
  foam = max(foam, swash * (0.55 + 0.45 * pa_noise(vWorld.xz * 0.8 + time)));
  foam *= smoothstep(0.25, 0.6, pa_noise(vWorld.xz * 0.35 + vec2(time * 0.2, 0.0)) + 0.3);
  vec3 foamCol = vec3(0.85, 0.88, 0.9) * (ambient * 1.3 + sunLight * 0.35);
  col = mix(col, foamCol, clamp(foam, 0.0, 1.0));

  float alpha = smoothstep(-1.0, 3.0, shoreDist);
  gl_FragColor = vec4(col, alpha);
  #include <fog_fragment>
}`;

export function buildCoast(scene, renderer) {
  const width = 2400, depth = 3400;
  const geo = new THREE.PlaneGeometry(width, depth, 120, 170);
  const reflector = new Reflector(geo, { textureWidth: 512, textureHeight: 512, clipBias: 0.003, multisample: 0 });
  const mirrorUniforms = reflector.material.uniforms;
  const uniforms = {
    ...THREE.UniformsUtils.clone(THREE.UniformsLib.fog),
    ...atmoUniforms,
    fogSunColor: atmoUniforms.fogSunColor,
    fogSunDir: atmoUniforms.fogSunDir,
    fogHeightFalloff: atmoUniforms.fogHeightFalloff,
    tDiffuse: mirrorUniforms.tDiffuse,
    textureMatrix: mirrorUniforms.textureMatrix,
    useMirror: { value: 1 },
    time: { value: 0 },
    sunLight: { value: new THREE.Color() },
    ambient: { value: new THREE.Color() },
  };
  reflector.material.dispose();
  reflector.material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: oceanVertex,
    fragmentShader: oceanFragment,
    fog: true,
    transparent: true,
  });
  reflector.rotation.x = -Math.PI / 2;
  reflector.position.set(SHORE_X + 8 - width / 2, WATER_Y, 0);
  reflector.userData.noAO = true;
  reflector.camera.layers.set(0); // props on layer 1 are skipped in reflections
  reflector.renderOrder = 1;
  scene.add(reflector);
  const mirrorRender = reflector.onBeforeRender;
  let mirrorEnabled = true;

  const pier = buildPier(scene, renderer);
  const beach = buildBeachProps(scene);

  return {
    ocean: reflector,
    pier,
    setReflections(on, scale = 0.5) {
      mirrorEnabled = on;
      uniforms.useMirror.value = on ? 1 : 0;
      reflector.onBeforeRender = on ? mirrorRender : () => {};
      this.resize(scale);
    },
    resize(scale = 0.5) {
      if (!mirrorEnabled) return;
      const size = renderer.getDrawingBufferSize(new THREE.Vector2());
      reflector.getRenderTarget().setSize(Math.max(256, Math.round(size.x * scale)), Math.max(256, Math.round(size.y * scale)));
    },
    update(time, atmosphere) {
      uniforms.time.value = time;
      uniforms.sunLight.value.copy(atmosphere.sun.color).multiplyScalar(atmosphere.elevation > -1 ? atmosphere.sun.intensity : 0);
      uniforms.ambient.value.copy(atmosphere.hemi.color).multiplyScalar(atmosphere.hemi.intensity * 0.6);
      pier.update(time, atmosphere.lampFactor);
      beach.update(atmosphere.lampFactor);
    },
  };
}

function woodMaterial() {
  return proceduralMaterial('wood', { color: 0xffffff, roughness: 0.8 }, {
    color: `
      {
        vec2 p = vPaWorld.xz;
        float plank = (abs(vPaNormalW.y) > 0.5 ? p.y : p.x) / 0.3;
        float fw = max(fwidth(plank), 0.002);
        float gap = pa_band(fract(plank), 0.0, 0.07, fw);
        float id = pa_hash12(vec2(floor(plank), 3.0));
        vec3 col = mix(vec3(0.3, 0.22, 0.15), vec3(0.42, 0.33, 0.23), id) * (0.82 + pa_noise(vec2(p.x * 3.0, plank)) * 0.25);
        diffuseColor.rgb = col * (1.0 - gap * 0.55);
      }`,
  });
}

function buildPier(scene, renderer) {
  const group = new THREE.Group();
  const { x0, x1, z, halfWidth, deckY } = PIER;
  const wood = woodMaterial();
  const deckLen = x0 - x1;
  const deck = new THREE.Mesh(new THREE.BoxGeometry(deckLen, 0.6, halfWidth * 2), wood);
  deck.position.set((x0 + x1) / 2, deckY - 0.3, z);
  deck.castShadow = deck.receiveShadow = true;
  group.add(deck);

  // Ramp up from the promenade.
  const rampLen = PIER.rampStart - x0;
  const rampAngle = Math.atan2(deckY - 0.16, rampLen);
  const rampGeo = new THREE.BoxGeometry(Math.hypot(rampLen, deckY), 0.6, halfWidth * 2);
  const ramp = new THREE.Mesh(rampGeo, wood);
  ramp.position.set((PIER.rampStart + x0) / 2, (deckY + 0.16) / 2 - 0.3, z);
  ramp.rotation.z = -rampAngle;
  ramp.castShadow = ramp.receiveShadow = true;
  group.add(ramp);

  // Pilings under the ramp and the deck.
  const piles = [];
  for (let x = PIER.rampStart - 8; x >= x1; x -= 9) for (const dz of [-halfWidth + 1, 0, halfWidth - 1]) piles.push([x, z + dz]);
  const pileGeo = new THREE.CylinderGeometry(0.32, 0.38, 1, 8);
  const pileMesh = new THREE.InstancedMesh(pileGeo, new THREE.MeshStandardMaterial({ color: 0x4b3b2d, roughness: 0.9 }), piles.length);
  const m = new THREE.Matrix4();
  piles.forEach(([x, zz], i) => {
    const bottom = -6, top = (pierHeight(x, z) ?? deckY) - 0.5;
    m.compose(new THREE.Vector3(x, (bottom + top) / 2, zz), new THREE.Quaternion(), new THREE.Vector3(1, top - bottom, 1));
    pileMesh.setMatrixAt(i, m);
  });
  pileMesh.castShadow = true;
  group.add(pileMesh);
  PIER.piles = piles.filter(([x]) => x > SHORE_X - 4);

  // Railings and lamps.
  const railMat = new THREE.MeshStandardMaterial({ color: 0xe8e4da, roughness: 0.5, metalness: 0.3 });
  for (const side of [-1, 1]) {
    for (const y of [0.55, 1.05]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(deckLen, 0.08, 0.08), railMat);
      rail.position.set((x0 + x1) / 2, deckY + y, z + side * (halfWidth - 0.1));
      group.add(rail);
    }
  }
  const postCount = Math.floor(deckLen / 3);
  const posts = new THREE.InstancedMesh(new THREE.BoxGeometry(0.1, 1.1, 0.1), railMat, postCount * 2);
  for (let i = 0; i < postCount; i++) for (const [k, side] of [-1, 1].entries()) {
    m.makeTranslation(x0 - i * 3, deckY + 0.55, z + side * (halfWidth - 0.1));
    posts.setMatrixAt(i * 2 + k, m);
  }
  group.add(posts);

  // Pier-end buildings: a pavilion and arcade.
  const shopMat = new THREE.MeshStandardMaterial({ color: 0xe9e1cf, roughness: 0.75 });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x2f6f7a, roughness: 0.5, metalness: 0.2 });
  for (const [bx, bz, w, d, h] of [[x1 + 14, z + 4.5, 18, 7, 6], [x1 + 36, z - 5, 12, 6, 5]]) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), shopMat);
    b.position.set(bx, deckY + h / 2, bz);
    b.castShadow = b.receiveShadow = true;
    group.add(b);
    const r = new THREE.Mesh(new THREE.BoxGeometry(w + 1, 0.4, d + 1), roofMat);
    r.position.set(bx, deckY + h + 0.2, bz);
    group.add(r);
  }

  // Entrance arch with a neon sign.
  const archMat = new THREE.MeshStandardMaterial({ color: 0x1b2a33, roughness: 0.4, metalness: 0.6 });
  for (const side of [-1, 1]) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.6, 8, 0.6), archMat);
    post.position.set(PIER.rampStart - 2, 4.1, z + side * (halfWidth + 0.4));
    post.castShadow = true;
    group.add(post);
  }
  const signTex = canvasTexture(renderer, 1024, 160, (c, w, h) => {
    c.fillStyle = '#0d1418';
    c.fillRect(0, 0, w, h);
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.font = '800 96px "Barlow Condensed", Impact, sans-serif';
    c.shadowColor = '#ff8a3d';
    c.shadowBlur = 24;
    c.fillStyle = '#ffb36b';
    c.fillText('VISTA PACÍFICA PIER', w / 2, h / 2 + 4);
    c.shadowBlur = 0;
    c.fillStyle = '#fff3e0';
    c.fillText('VISTA PACÍFICA PIER', w / 2, h / 2 + 4);
  });
  const signMat = new THREE.MeshStandardMaterial({ color: 0x111111, map: signTex, emissive: 0xffffff, emissiveMap: signTex, emissiveIntensity: 1 });
  const sign = new THREE.Mesh(new THREE.BoxGeometry(0.4, 2.6, halfWidth * 2 + 1.4), archMat);
  sign.position.set(PIER.rampStart - 2, 8.6, z);
  group.add(sign);
  for (const side of [-1, 1]) {
    const face = new THREE.Mesh(new THREE.PlaneGeometry(halfWidth * 2 + 1.2, 2.4), signMat);
    face.position.set(PIER.rampStart - 2 + side * 0.21, 8.6, z);
    face.rotation.y = side * Math.PI / 2;
    group.add(face);
  }

  // Ferris wheel.
  const wheel = new THREE.Group();
  const R = 19, hubY = deckY + R + 3.5, wx = x1 + 55, wz = z + 0.5;
  wheel.position.set(wx, hubY, wz);
  const steel = new THREE.MeshStandardMaterial({ color: 0xd9dde0, roughness: 0.35, metalness: 0.8 });
  const rim = new THREE.TorusGeometry(R, 0.22, 8, 96);
  for (const dz of [-1.3, 1.3]) {
    const r = new THREE.Mesh(rim, steel);
    r.position.z = dz;
    wheel.add(r);
    const inner = new THREE.Mesh(new THREE.TorusGeometry(R * 0.55, 0.14, 6, 64), steel);
    inner.position.z = dz;
    wheel.add(inner);
  }
  const spokes = 24;
  const spokeGeo = new THREE.CylinderGeometry(0.07, 0.07, R, 4);
  spokeGeo.translate(0, R / 2, 0);
  for (let i = 0; i < spokes; i++) for (const dz of [-1.3, 1.3]) {
    const s = new THREE.Mesh(spokeGeo, steel);
    s.rotation.z = (i / spokes) * Math.PI * 2;
    s.position.z = dz;
    wheel.add(s);
  }
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 3.6, 16), steel);
  hub.rotation.x = Math.PI / 2;
  wheel.add(hub);
  group.add(wheel);
  // Support legs (static).
  for (const dz of [-3.5, 3.5]) for (const sx of [-1, 1]) {
    const len = Math.hypot(9, hubY - deckY);
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.4, len, 8), steel);
    leg.position.set(wx + sx * 4.5, (hubY + deckY) / 2, wz + dz);
    leg.rotation.z = sx * Math.atan2(9, hubY - deckY);
    leg.castShadow = true;
    group.add(leg);
  }
  // Gondolas hang level as the wheel turns.
  const gondolaCount = 16;
  const gondolaMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4, metalness: 0.3 });
  const gondolas = new THREE.InstancedMesh(new THREE.BoxGeometry(1.8, 2, 1.8), gondolaMat, gondolaCount);
  const gColors = ['#e2523a', '#f2c14e', '#3aa0c8', '#f7f2e6'];
  const tmpColor = new THREE.Color();
  for (let i = 0; i < gondolaCount; i++) gondolas.setColorAt(i, tmpColor.set(gColors[i % 4]));
  gondolas.castShadow = true;
  group.add(gondolas);
  // LED lights along spokes and rim chase colors after dark.
  const ledPerSpoke = 9;
  const ledCount = spokes * ledPerSpoke + 96;
  const ledMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const leds = new THREE.InstancedMesh(new THREE.SphereGeometry(0.16, 6, 4), ledMat, ledCount);
  const ledPos = [];
  for (let i = 0; i < spokes; i++) {
    const a = (i / spokes) * Math.PI * 2;
    for (let k = 1; k <= ledPerSpoke; k++) {
      const r = (k / ledPerSpoke) * R;
      ledPos.push([-Math.sin(a) * r, Math.cos(a) * r, 1.45, k / ledPerSpoke, i]);
    }
  }
  for (let i = 0; i < 96; i++) {
    const a = (i / 96) * Math.PI * 2;
    ledPos.push([Math.cos(a) * R, Math.sin(a) * R, 1.5, 1.0, i]);
  }
  ledPos.forEach(([x, y, zz], i) => {
    m.makeTranslation(x, y, zz);
    leds.setMatrixAt(i, m);
  });
  wheel.add(leds);
  leds.layers.set(1);

  // Pier lamps.
  const lampPositions = [];
  for (let x = x0 - 6; x > x1 + 4; x -= 16) for (const side of [-1, 1]) lampPositions.push([x, z + side * (halfWidth - 0.4)]);
  const lampPole = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.06, 0.09, 4.5, 6), archMat, lampPositions.length);
  const lampHeadMat = new THREE.MeshStandardMaterial({ color: 0xfff2d6, emissive: 0xffd08a, emissiveIntensity: 0 });
  const lampHead = new THREE.InstancedMesh(new THREE.SphereGeometry(0.28, 10, 8), lampHeadMat, lampPositions.length);
  lampPositions.forEach(([x, zz], i) => {
    m.makeTranslation(x, deckY + 2.25, zz);
    lampPole.setMatrixAt(i, m);
    m.makeTranslation(x, deckY + 4.6, zz);
    lampHead.setMatrixAt(i, m);
  });
  group.add(lampPole, lampHead);

  scene.add(group);
  const hsl = new THREE.Color();
  const dummy = new THREE.Object3D();
  return {
    lamps: lampPositions.map(([x, zz]) => [x, deckY + 4.6, zz]),
    update(time, night) {
      const angle = time * 0.06;
      wheel.rotation.z = angle;
      for (let i = 0; i < gondolaCount; i++) {
        const a = angle + (i / gondolaCount) * Math.PI * 2;
        dummy.position.set(wx + Math.cos(a) * R, hubY + Math.sin(a) * R - 1.4, wz);
        dummy.updateMatrix();
        gondolas.setMatrixAt(i, dummy.matrix);
      }
      gondolas.instanceMatrix.needsUpdate = true;
      const glow = 0.25 + night * 5.5;
      for (let i = 0; i < ledPos.length; i++) {
        const [, , , r, id] = ledPos[i];
        const hue = (time * 0.08 + r * 0.35 + id * 0.013) % 1;
        const pulse = 0.55 + 0.45 * Math.sin(time * 4 - r * 8 + id * 0.5);
        hsl.setHSL(hue, 0.85, 0.55);
        hsl.multiplyScalar(glow * pulse);
        leds.setColorAt(i, hsl);
      }
      leds.instanceColor.needsUpdate = true;
      lampHeadMat.emissiveIntensity = night * 3;
      signMat.emissiveIntensity = 0.3 + night * 1.8;
    },
  };
}

function buildBeachProps(scene) {
  const group = new THREE.Group();
  const m = new THREE.Matrix4();
  // Lifeguard towers: a little hut on stilts.
  const hutMat = new THREE.MeshStandardMaterial({ color: 0x5fa9c9, roughness: 0.6 });
  const trimMat = new THREE.MeshStandardMaterial({ color: 0xf1ead8, roughness: 0.6 });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0xd84c3a, roughness: 0.6 });
  for (let zz = -520; zz <= 520; zz += 130) {
    if (Math.abs(zz - PIER.z) < 40) continue;
    const t = new THREE.Group();
    const hut = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.4, 3.2), hutMat);
    hut.position.y = 3.2;
    const roof = new THREE.Mesh(new THREE.ConeGeometry(2.7, 1.1, 4), roofMat);
    roof.position.y = 4.95;
    roof.rotation.y = Math.PI / 4;
    const deck = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.18, 4.4), trimMat);
    deck.position.y = 1.95;
    const win = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.9, 2.4), new THREE.MeshStandardMaterial({ color: 0x1d2a33, roughness: 0.1, metalness: 0.6 }));
    win.position.set(-1.62, 3.5, 0);
    t.add(hut, roof, deck, win);
    for (const sx of [-1.8, 1.8]) for (const sz of [-1.8, 1.8]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 2.4, 0.18), trimMat);
      leg.position.set(sx, 0.8, sz);
      t.add(leg);
    }
    const ramp = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.12, 1.4), trimMat);
    ramp.position.set(3.6, 1.0, 0);
    ramp.rotation.z = -0.42;
    t.add(ramp);
    const x = -388;
    t.position.set(x, -0.02 - (BEACH_START - x) * 0.0105, zz);
    t.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    group.add(t);
  }
  // Beach umbrellas.
  const umbrellaColors = ['#e8553a', '#f0c24b', '#3b8fc2', '#f3efe4', '#45a37f'];
  const count = 40;
  const canopy = new THREE.InstancedMesh(new THREE.ConeGeometry(1.4, 0.55, 12, 1, true), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8, side: THREE.DoubleSide }), count);
  const pole = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.03, 0.03, 2.3, 4), trimMat, count);
  const towels = new THREE.InstancedMesh(new THREE.BoxGeometry(0.9, 0.02, 1.9), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 }), count);
  const c = new THREE.Color(), q = new THREE.Quaternion();
  for (let i = 0; i < count; i++) {
    let zz = range(-520, 520);
    if (Math.abs(zz - PIER.z) < 14) zz += 30;
    const x = range(-398, -366);
    const y = -0.02 - (BEACH_START - x) * 0.0105;
    q.setFromEuler(new THREE.Euler(range(-0.12, 0.12), 0, range(-0.12, 0.12)));
    m.compose(new THREE.Vector3(x, y + 2.3, zz), q, new THREE.Vector3(1, 1, 1));
    canopy.setMatrixAt(i, m);
    m.compose(new THREE.Vector3(x, y + 1.15, zz), q, new THREE.Vector3(1, 1, 1));
    pole.setMatrixAt(i, m);
    canopy.setColorAt(i, c.set(pick(umbrellaColors)));
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), range(0, Math.PI));
    m.compose(new THREE.Vector3(x + range(-1.5, 1.5), y + 0.02, zz + range(-1.5, 1.5)), q, new THREE.Vector3(1, 1, 1));
    towels.setMatrixAt(i, m);
    towels.setColorAt(i, c.set(pick(umbrellaColors)));
  }
  canopy.castShadow = pole.castShadow = true;
  towels.receiveShadow = true;
  group.add(canopy, pole, towels);
  for (const o of [canopy, pole, towels]) o.layers.set(1);
  scene.add(group);
  return { update() {} };
}
