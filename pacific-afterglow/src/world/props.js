import * as THREE from 'three';
import { canvasTexture } from '../core/materials.js';
import { roadsX, roadsZ, ROAD_HALF, SLAB_H, PROMENADE, PIER } from './layout.js';
import { terrainHeight } from './ground.js';
import { range, pick, chance } from '../core/rng.js';

// Traffic signal timing shared by the lamps and the traffic AI.
// Axis 0 controls north/south traffic, axis 1 east/west.
const CYCLE = 28;
export function signalState(axis, time) {
  const t = ((time % CYCLE) + CYCLE) % CYCLE;
  const local = axis === 0 ? t : (t + 14) % CYCLE;
  if (local < 10) return 2; // green
  if (local < 13) return 1; // yellow
  return 0; // red
}

function lightPoolTexture(renderer) {
  return canvasTexture(renderer, 128, 128, (c, w, h) => {
    const g = c.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.35, 'rgba(255,255,255,0.55)');
    g.addColorStop(0.7, 'rgba(255,255,255,0.15)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g;
    c.fillRect(0, 0, w, h);
  });
}

const beamVertex = /* glsl */`
varying float vH;
varying vec3 vN;
varying vec3 vW;
void main() {
  vH = uv.y;
  vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`;
const beamFragment = /* glsl */`
uniform vec3 color;
uniform float intensity;
varying float vH;
varying vec3 vN;
varying vec3 vW;
void main() {
  vec3 v = normalize(cameraPosition - vW);
  float edge = pow(abs(dot(v, normalize(vN))), 1.5);
  float fade = smoothstep(0.0, 0.9, vH) * (1.0 - smoothstep(0.92, 1.0, vH));
  float dist = length(cameraPosition - vW);
  float a = edge * fade * intensity * smoothstep(4.0, 14.0, dist);
  gl_FragColor = vec4(color * a, 1.0);
}`;

export function makeBeamMaterial(color, intensity = 0) {
  return new THREE.ShaderMaterial({
    uniforms: { color: { value: new THREE.Color(color) }, intensity: { value: intensity } },
    vertexShader: beamVertex,
    fragmentShader: beamFragment,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });
}

export function buildProps(scene, renderer, extraLamps = []) {
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), s = new THREE.Vector3(1, 1, 1);
  const up = new THREE.Vector3(0, 1, 0);
  const metal = new THREE.MeshStandardMaterial({ color: 0x3f4648, roughness: 0.45, metalness: 0.7 });
  const lamps = []; // [poleX, poleZ, dirX, dirZ]
  const crossClear = ROAD_HALF + 7;

  for (const x of roadsX) {
    for (let z = -520; z <= 520; z += 38) {
      if (roadsZ.some(r => Math.abs(z - r) < crossClear)) continue;
      for (const side of [-1, 1]) {
        if (x === roadsX[0] && side < 0) continue; // the beach side has palms instead
        lamps.push([x + side * (ROAD_HALF + 0.9), z + (side > 0 ? 19 : 0), -side, 0]);
      }
    }
  }
  for (const z of roadsZ) {
    for (let x = -300; x <= 320; x += 38) {
      if (roadsX.some(r => Math.abs(x - r) < crossClear)) continue;
      for (const side of [-1, 1]) lamps.push([x + (side > 0 ? 19 : 0), z + side * (ROAD_HALF + 0.9), 0, -side]);
    }
  }
  // Promenade lamps (decorative, no arm).
  const promenade = [];
  for (let z = -540; z <= 540; z += 24) if (Math.abs(z - PIER.z) > 12) promenade.push([(PROMENADE.from + PROMENADE.to) / 2, z]);

  const poleGeo = new THREE.CylinderGeometry(0.09, 0.14, 9, 8);
  poleGeo.translate(0, 4.5, 0);
  const armGeo = new THREE.BoxGeometry(0.1, 0.1, 2.6);
  armGeo.translate(0, 0, 1.3);
  const headGeo = new THREE.BoxGeometry(0.42, 0.16, 0.9);
  const poles = new THREE.InstancedMesh(poleGeo, metal, lamps.length);
  const arms = new THREE.InstancedMesh(armGeo, metal, lamps.length);
  const headMat = new THREE.MeshStandardMaterial({ color: 0x777777, emissive: 0xffd6a0, emissiveIntensity: 0, roughness: 0.3 });
  const heads = new THREE.InstancedMesh(headGeo, headMat, lamps.length);
  const poolPositions = [];
  lamps.forEach(([x, z, dx, dz], i) => {
    const yaw = Math.atan2(dx, dz);
    q.setFromAxisAngle(up, yaw);
    m.compose(v.set(x, SLAB_H, z), q, s);
    poles.setMatrixAt(i, m);
    m.compose(v.set(x, SLAB_H + 8.85, z), q, s);
    arms.setMatrixAt(i, m);
    m.compose(v.set(x + dx * 2.5, SLAB_H + 8.78, z + dz * 2.5), q, s);
    heads.setMatrixAt(i, m);
    poolPositions.push([x + dx * 2.6, z + dz * 2.6, 13, 1]);
  });
  poles.castShadow = arms.castShadow = true;
  for (const o of [poles, arms, heads]) scene.add(o);

  const promPoles = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.07, 0.1, 4.2, 8), metal, promenade.length);
  const globeMat = new THREE.MeshStandardMaterial({ color: 0xfff6e8, emissive: 0xffcf8a, emissiveIntensity: 0, roughness: 0.2 });
  const globes = new THREE.InstancedMesh(new THREE.SphereGeometry(0.3, 12, 8), globeMat, promenade.length);
  promenade.forEach(([x, z], i) => {
    m.makeTranslation(x, SLAB_H + 2.1, z);
    promPoles.setMatrixAt(i, m);
    m.makeTranslation(x, SLAB_H + 4.4, z);
    globes.setMatrixAt(i, m);
    poolPositions.push([x, z, 8, 0.8]);
  });
  for (const [x, y, z] of extraLamps) poolPositions.push([x, z, 7, 0.7, y - 4.6]);
  scene.add(promPoles, globes);

  // Light pools painted on the ground under lamps at night.
  const poolMat = new THREE.MeshBasicMaterial({
    map: lightPoolTexture(renderer), color: 0xffb46a, transparent: true, depthWrite: false,
    blending: THREE.AdditiveBlending, opacity: 0, polygonOffset: true, polygonOffsetFactor: -2, fog: true,
  });
  const poolGeo = new THREE.PlaneGeometry(1, 1);
  poolGeo.rotateX(-Math.PI / 2);
  const pools = new THREE.InstancedMesh(poolGeo, poolMat, poolPositions.length);
  poolPositions.forEach(([x, z, size, k, y = 0], i) => {
    m.compose(v.set(x, y + 0.04 + (k < 1 ? SLAB_H : 0), z), q.identity(), s.set(size, 1, size));
    pools.setMatrixAt(i, m);
  });
  pools.renderOrder = 2;
  pools.userData.noAO = true;
  pools.layers.set(1);
  s.set(1, 1, 1);
  scene.add(pools);

  // Soft volumetric cones under the street lamps.
  const beamGeo = new THREE.CylinderGeometry(0.25, 3.6, 8.6, 18, 1, true);
  beamGeo.translate(0, -4.3, 0);
  const beamMat = makeBeamMaterial(0xffb46a);
  const beams = new THREE.InstancedMesh(beamGeo, beamMat, lamps.length);
  lamps.forEach(([x, z, dx, dz], i) => {
    m.makeTranslation(x + dx * 2.5, SLAB_H + 8.7, z + dz * 2.5);
    beams.setMatrixAt(i, m);
  });
  beams.userData.noAO = true;
  beams.layers.set(1);
  beams.renderOrder = 3;
  scene.add(beams);

  // Traffic signals: one head per approach, hung above the lanes on a mast arm.
  const heads2 = [], masts = [];
  for (const x of roadsX) for (const z of roadsZ) {
    // Approaches: [laneSideX, laneSideZ, facingX, facingZ, axis]
    const approaches = [
      [x + 6, z - 16, 0, 1, 0], // northbound traffic sees it on the far (north) side
      [x - 6, z + 16, 0, -1, 0],
      [x + 16, z + 6, -1, 0, 1], // eastbound
      [x - 16, z - 6, 1, 0, 1],
    ];
    for (const [hx, hz, fx, fz, axis] of approaches) {
      // Skip approaches that come from outside the grid.
      if (axis === 0 && ((fz > 0 && z === roadsZ[roadsZ.length - 1]) || (fz < 0 && z === roadsZ[0]))) continue;
      if (axis === 1 && ((fx < 0 && x === roadsX[0]) || (fx > 0 && x === roadsX[roadsX.length - 1]))) continue;
      heads2.push([hx, hz, fx, fz, axis]);
      // Mast from the curb on the right of the approaching driver.
      const px = axis === 0 ? x + 14.2 * Math.sign(hx - x) : hx;
      const pz = axis === 0 ? hz : z + 14.2 * Math.sign(hz - z);
      masts.push([px, pz, hx, hz]);
    }
  }
  const mastPoleGeo = new THREE.CylinderGeometry(0.16, 0.2, 7, 8);
  mastPoleGeo.translate(0, 3.5, 0);
  const mastPoles = new THREE.InstancedMesh(mastPoleGeo, metal, masts.length);
  const mastArms = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 0.16, 0.16), metal, masts.length);
  masts.forEach(([px, pz, hx, hz], i) => {
    m.makeTranslation(px, SLAB_H, pz);
    mastPoles.setMatrixAt(i, m);
    const len = Math.hypot(hx - px, hz - pz) + 1;
    q.setFromAxisAngle(up, Math.atan2(-(hz - pz), hx - px));
    m.compose(v.set((px + hx) / 2, 6.8, (pz + hz) / 2), q, s.set(len, 1, 1));
    mastArms.setMatrixAt(i, m);
    s.set(1, 1, 1);
  });
  mastPoles.castShadow = mastArms.castShadow = true;
  scene.add(mastPoles, mastArms);

  const housingMat = new THREE.MeshStandardMaterial({ color: 0x1d2224, roughness: 0.5, metalness: 0.4 });
  const housings = new THREE.InstancedMesh(new THREE.BoxGeometry(0.5, 1.4, 0.36), housingMat, heads2.length);
  const lampGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.06, 12);
  lampGeo.rotateX(Math.PI / 2);
  const signalLamps = new THREE.InstancedMesh(lampGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }), heads2.length * 3);
  const lampInfo = [];
  heads2.forEach(([hx, hz, fx, fz, axis], i) => {
    q.setFromAxisAngle(up, Math.atan2(fx, fz));
    m.compose(v.set(hx, 6.1, hz), q, s);
    housings.setMatrixAt(i, m);
    for (let k = 0; k < 3; k++) {
      m.compose(v.set(hx + fx * 0.2, 6.55 - k * 0.43, hz + fz * 0.2), q, s);
      signalLamps.setMatrixAt(i * 3 + k, m);
      lampInfo.push([axis, k]);
    }
  });
  scene.add(housings, signalLamps);
  const signalColors = [new THREE.Color(7, 0.35, 0.2), new THREE.Color(7, 3.6, 0.3), new THREE.Color(0.3, 6, 2.2)];
  const offColor = new THREE.Color(0.05, 0.05, 0.05);

  // Fire hydrants, benches and trash cans along the sidewalks.
  const hydrants = [], benches = [], bins = [];
  for (const x of roadsX) for (let z = -500; z <= 500; z += 50) {
    if (roadsZ.some(r => Math.abs(z - r) < crossClear)) continue;
    const side = chance(0.5) ? 1 : -1;
    if (x === roadsX[0] && side < 0) continue;
    if (chance(0.5)) hydrants.push([x + side * (ROAD_HALF + 0.6), z + 6]);
    if (chance(0.35)) benches.push([x + side * (ROAD_HALF + 3.2), z + 12, side]);
    if (chance(0.4)) bins.push([x + side * (ROAD_HALF + 0.9), z + 15]);
  }
  const hydrantMesh = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.16, 0.2, 0.8, 8), new THREE.MeshStandardMaterial({ color: 0xb8352a, roughness: 0.5 }), hydrants.length);
  hydrants.forEach(([x, z], i) => { m.makeTranslation(x, SLAB_H + 0.4, z); hydrantMesh.setMatrixAt(i, m); });
  const benchMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(0.6, 0.5, 2.2), new THREE.MeshStandardMaterial({ color: 0x5a4632, roughness: 0.8 }), benches.length);
  benches.forEach(([x, z], i) => { m.makeTranslation(x, SLAB_H + 0.25, z); benchMesh.setMatrixAt(i, m); });
  const binMesh = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.3, 0.28, 1, 10), new THREE.MeshStandardMaterial({ color: 0x2d4a3a, roughness: 0.6, metalness: 0.3 }), bins.length);
  bins.forEach(([x, z], i) => { m.makeTranslation(x, SLAB_H + 0.5, z); binMesh.setMatrixAt(i, m); });
  for (const o of [hydrantMesh, benchMesh, binMesh]) {
    o.castShadow = true;
    o.layers.set(1);
    scene.add(o);
  }

  // Billboards with original ads, lit after dark.
  const ads = [
    ['SURF FIZZ', 'TASTE THE SWELL', '#ff6b4a', '#14303d'],
    ['HORIZON AIR', 'FLY THE COAST', '#ffd36b', '#1a2a52'],
    ['VISTA BANK', 'YOUR MONEY. YOUR VIEW.', '#9fe3d3', '#10302c'],
    ['NEON NIGHTS', 'THE PIER · FRIDAYS', '#ff63c3', '#1d0f2e'],
    ['CALDERA GT', 'BUILT FOR THE COAST ROAD', '#ff7a3d', '#141a20'],
    ['SOLSTICE', 'SUNSCREEN · SPF 50', '#ffe2a8', '#c2542e'],
  ];
  // [x, z, yaw]: yaw -PI/2 faces west, PI faces north.
  const billboardSpots = [
    [-215, -432, -Math.PI / 2], [100, 212, Math.PI], [-136, 30, -Math.PI / 2], [270, 362, Math.PI], [345, -200, -Math.PI / 2], [345, 250, -Math.PI / 2],
  ];
  const billboards = [];
  billboardSpots.forEach(([x, z, ry], i) => {
    const [title, tag, accent, bg] = ads[i % ads.length];
    const tex = canvasTexture(renderer, 1024, 384, (c, w, h) => {
      const g = c.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, bg);
      g.addColorStop(1, '#000000');
      c.fillStyle = g;
      c.fillRect(0, 0, w, h);
      c.fillStyle = accent;
      c.beginPath();
      c.arc(w * 0.82, h * 0.5, h * 0.36, 0, Math.PI * 2);
      c.fill();
      c.fillStyle = '#fff6e6';
      c.font = '800 120px "Barlow Condensed", Impact, sans-serif';
      c.fillText(title, 48, 170);
      c.fillStyle = accent;
      c.font = '600 46px "Barlow", Arial, sans-serif';
      c.fillText(tag, 52, 250);
      c.fillStyle = '#ffffff40';
      c.fillRect(52, 290, 300, 6);
    });
    const group = new THREE.Group();
    const board = new THREE.Mesh(new THREE.PlaneGeometry(14, 5.25), new THREE.MeshStandardMaterial({ map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0, roughness: 0.55 }));
    board.position.y = 14;
    const back = new THREE.Mesh(new THREE.BoxGeometry(14.4, 5.6, 0.3), metal);
    back.position.set(0, 14, -0.2);
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 11.5, 10), metal);
    post.position.y = 5.75;
    group.add(board, back, post);
    group.position.set(x, SLAB_H, z);
    group.rotation.y = ry;
    group.traverse(o => { if (o.isMesh) o.castShadow = true; });
    scene.add(group);
    billboards.push(board.material);
  });

  // The hillside sign overlooking the city.
  const letters = 'VISTA PACÍFICA';
  const letterMat = new THREE.MeshStandardMaterial({ color: 0xf4f1ea, roughness: 0.7, side: THREE.DoubleSide, alphaTest: 0.5 });
  const letterTextures = new Map();
  const signGroup = new THREE.Group();
  let lz = -270;
  for (const ch of letters) {
    if (ch === ' ') { lz += 22; continue; }
    if (!letterTextures.has(ch)) {
      letterTextures.set(ch, canvasTexture(renderer, 128, 160, (c, w, h) => {
        c.clearRect(0, 0, w, h);
        c.fillStyle = '#fff';
        c.font = '800 168px "Barlow Condensed", Impact, sans-serif';
        c.textAlign = 'center';
        c.textBaseline = 'alphabetic';
        c.fillText(ch, w / 2, h - 8);
      }));
    }
    const mat = letterMat.clone();
    mat.map = letterTextures.get(ch);
    const letter = new THREE.Mesh(new THREE.PlaneGeometry(15, 19), mat);
    const lx = 600;
    letter.position.set(lx, Math.min(terrainHeight(lx, lz - 6), terrainHeight(lx, lz + 6)) + 8.5, lz);
    letter.rotation.y = -Math.PI / 2;
    letter.castShadow = true;
    signGroup.add(letter);
    lz += 17;
  }
  scene.add(signGroup);

  return {
    lamps,
    update(time, lampFactor) {
      headMat.emissiveIntensity = lampFactor * 4;
      globeMat.emissiveIntensity = lampFactor * 2.6;
      poolMat.opacity = lampFactor * 0.7;
      beamMat.uniforms.intensity.value = lampFactor * 0.09;
      for (const b of billboards) b.emissiveIntensity = 0.05 + lampFactor * 1.1;
      const states = [signalState(0, time), signalState(1, time)];
      for (let i = 0; i < lampInfo.length; i++) {
        const [axis, k] = lampInfo[i];
        const lit = (k === 0 && states[axis] === 0) || (k === 1 && states[axis] === 1) || (k === 2 && states[axis] === 2);
        signalLamps.setColorAt(i, lit ? signalColors[k] : offColor);
      }
      signalLamps.instanceColor.needsUpdate = true;
    },
  };
}
