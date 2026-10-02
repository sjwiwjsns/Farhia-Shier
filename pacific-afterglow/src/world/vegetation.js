import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { canvasTexture, proceduralMaterial } from '../core/materials.js';
import { atmoUniforms } from './atmosphere.js';
import { rand, range, chance } from '../core/rng.js';
import { roadsX, roadsZ, ROAD_HALF, PROMENADE, BEACH_START, PIER, BLOCK_SIZE, BUS_STOPS, busStopPos } from './layout.js';
import { terrainHeight } from './ground.js';

export const leafSun = { value: new THREE.Color() };

function frondTexture(renderer) {
  return canvasTexture(renderer, 256, 1024, (c, w, h) => {
    c.clearRect(0, 0, w, h);
    // Leaflets angled toward the tip on both sides of the rachis.
    for (let i = 0; i < 150; i++) {
      const t = i / 150;
      const y = h * (0.04 + t * 0.94);
      const len = w * 0.47 * Math.sin(Math.PI * Math.pow(t, 0.75)) * (0.85 + rand() * 0.3);
      const g = 70 + rand() * 50, r = 40 + rand() * 30, b = 25 + rand() * 20;
      c.strokeStyle = `rgb(${r},${g},${b})`;
      c.lineWidth = 3.2 + rand() * 2.2;
      for (const side of [-1, 1]) {
        c.beginPath();
        c.moveTo(w / 2, y);
        c.quadraticCurveTo(w / 2 + side * len * 0.5, y - len * 0.25, w / 2 + side * len, y - len * 0.55 + rand() * 8);
        c.stroke();
      }
    }
    c.strokeStyle = '#5b5a34';
    c.lineWidth = 6;
    c.beginPath();
    c.moveTo(w / 2, h * 0.02);
    c.lineTo(w / 2, h);
    c.stroke();
  });
}

function leafClusterTexture(renderer) {
  // Sprigs of small leaves on twigs; the middle of the card is darker, like the shaded
  // inside of a crown, so stacked cards read as depth rather than flat green.
  return canvasTexture(renderer, 512, 512, (c, w, h) => {
    c.clearRect(0, 0, w, h);
    for (let s = 0; s < 46; s++) {
      const a = rand() * Math.PI * 2, r = Math.sqrt(rand()) * w * 0.36;
      const sx = w / 2 + Math.cos(a) * r, sy = h / 2 + Math.sin(a) * r;
      const dir = a + (rand() - 0.5) * 1.2;
      const len = 40 + rand() * 50;
      const shade = 0.55 + 0.45 * (r / (w * 0.36));
      c.strokeStyle = `rgba(60,48,30,${0.8})`;
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(sx, sy);
      c.lineTo(sx + Math.cos(dir) * len, sy + Math.sin(dir) * len);
      c.stroke();
      for (let k = 0; k < 16; k++) {
        const t = rand();
        const lx = sx + Math.cos(dir) * len * t + (rand() - 0.5) * 18, ly = sy + Math.sin(dir) * len * t + (rand() - 0.5) * 18;
        const g = (70 + rand() * 70) * shade, rr = (28 + rand() * 32) * shade, b = (18 + rand() * 26) * shade;
        c.fillStyle = `rgb(${rr | 0},${g | 0},${b | 0})`;
        c.save();
        c.translate(lx, ly);
        c.rotate(dir + (rand() - 0.5) * 2.2);
        c.beginPath();
        c.ellipse(0, 0, 9 + rand() * 7, 3.5 + rand() * 2.5, 0, 0, Math.PI * 2);
        c.fill();
        // A light midrib catches the sun.
        c.strokeStyle = `rgba(190,210,140,${0.25 * shade})`;
        c.lineWidth = 1;
        c.beginPath();
        c.moveTo(-8, 0);
        c.lineTo(8, 0);
        c.stroke();
        c.restore();
      }
    }
  });
}

// One palm frond: a V-shaped strip that arcs outward and droops toward its tip.
function frondGeometry(angle, lift, length, width, droop) {
  const segs = 7;
  const pos = [], uv = [], idx = [];
  const dir = new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle));
  const side = new THREE.Vector3(-dir.z, 0, dir.x);
  let p = new THREE.Vector3();
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const pitch = lift - droop * t * t;
    if (i > 0) p = p.clone().addScaledVector(dir, Math.cos(pitch) * length / segs).add(new THREE.Vector3(0, Math.sin(pitch) * length / segs, 0));
    const w = width * Math.sin(Math.PI * Math.min(1, 0.15 + t * 0.95)) * 0.5 + 0.05;
    const keel = 0.18 * w;
    for (const [s, u] of [[-1, 0], [0, 0.5], [1, 1]]) {
      const v = p.clone().addScaledVector(side, s * w);
      v.y += s === 0 ? keel : -keel * 0.2;
      pos.push(v.x, v.y, v.z);
      uv.push(u, 1 - t);
    }
    if (i > 0) {
      const a = (i - 1) * 3, b = i * 3;
      idx.push(a, b, a + 1, a + 1, b, b + 1, a + 1, b + 1, a + 2, a + 2, b + 1, b + 2);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

function crownGeometry(count, length, width) {
  const parts = [];
  for (let i = 0; i < count; i++) {
    const ring = i % 3;
    const angle = (i / count) * Math.PI * 2 + rand() * 0.3;
    const lift = [0.95, 0.45, 0.05][ring] + rand() * 0.2;
    const droop = [1.3, 1.6, 1.4][ring];
    parts.push(frondGeometry(angle, lift, length * (ring === 0 ? 0.8 : 1) * range(0.88, 1.1), width, droop));
  }
  return mergeGeometries(parts);
}

function trunkGeometry(bend) {
  const g = new THREE.CylinderGeometry(0.62, 1, 1, 9, 12, true);
  g.translate(0, 0.5, 0);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i);
    p.setX(i, p.getX(i) + bend * y * y);
  }
  g.computeVertexNormals();
  return g;
}

function leafMaterial(map, key, extra = {}) {
  const mat = proceduralMaterial(key, { map, alphaTest: 0.42, side: THREE.DoubleSide, roughness: 0.72, metalness: 0, ...extra }, {
    uniforms: { worldTime: atmoUniforms.worldTime, leafSun, skySunDir: atmoUniforms.skySunDir },
    vertexPars: 'uniform float worldTime;',
    vertex: '',
    fragmentPars: 'uniform vec3 leafSun; uniform vec3 skySunDir;',
    color: 'diffuseColor.rgb *= 0.8 + 0.4 * pa_noise(vPaWorld.xz * 0.7 + vPaWorld.y);',
    emissive: `
      {
        // Sunlight shining through the leaves when they are backlit.
        vec3 vdir = normalize(vPaWorld - cameraPosition);
        float back = pow(max(dot(vdir, skySunDir), 0.0), 3.0);
        totalEmissiveRadiance += diffuseColor.rgb * leafSun * (back * 0.55 + 0.04);
      }`,
  });
  // Wind sway, stronger toward the frond tips.
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => {
    prev(sh, r);
    sh.vertexShader = sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      {
        float ph = 0.0;
        #ifdef USE_INSTANCING
          ph = instanceMatrix[3].x * 0.31 + instanceMatrix[3].z * 0.17;
        #endif
        float reach = length(position.xz);
        float sway = sin(worldTime * 1.4 + ph + reach * 0.4) * 0.5 + sin(worldTime * 2.3 + ph * 1.7) * 0.25;
        transformed.y += sway * 0.05 * reach;
        transformed.xz += normalize(position.xz + 1e-4) * sway * 0.035 * reach;
      }`);
  };
  return mat;
}

function trunkMaterial() {
  return proceduralMaterial('palmtrunk', { color: 0xffffff, roughness: 0.9 }, {
    color: `
      {
        float rings = pa_band(fract(vPaWorld.y * 3.2 + pa_noise(vPaWorld.xz * 3.0) * 0.4), 0.0, 0.18, fwidth(vPaWorld.y * 3.2));
        vec3 bark = mix(vec3(0.33, 0.29, 0.24), vec3(0.45, 0.4, 0.33), pa_noise(vec2(atan(vPaNormalW.z, vPaNormalW.x) * 4.0, vPaWorld.y * 0.8)));
        diffuseColor.rgb = bark * (1.0 - rings * 0.3);
      }`,
  });
}

// A tree: trunk, limbs out to each lobe, and leaf cards scattered through every lobe. Card
// normals point out of their lobe (and a little out of the whole crown) so light wraps
// around the canopy, and inner cards are darkened through vertex colour.
function treeGeometry({ lobes, cards, spread, crownY, lobeR, trunkH, columnar = false }) {
  const leaf = [], wood = [];
  const trunk = new THREE.CylinderGeometry(0.2, 0.34, trunkH + 0.4, 7);
  trunk.translate(0, (trunkH + 0.4) / 2, 0);
  wood.push(trunk);
  const centers = [];
  for (let i = 0; i < lobes; i++) {
    if (columnar) {
      const t = i / Math.max(1, lobes - 1);
      centers.push([new THREE.Vector3((rand() - 0.5) * 0.3, crownY + t * 6.4, (rand() - 0.5) * 0.3), lobeR * (1.05 - t * 0.55)]);
      continue;
    }
    if (i === lobes - 1) { centers.push([new THREE.Vector3(0, crownY + lobeR * 0.75, 0), lobeR * 1.05]); continue; }
    const a = (i / (lobes - 1)) * Math.PI * 2 + rand() * 0.6;
    const r = spread * range(0.75, 1.1);
    centers.push([new THREE.Vector3(Math.cos(a) * r, crownY + range(-0.6, 0.5), Math.sin(a) * r), lobeR * range(0.85, 1.1)]);
  }
  const base = new THREE.Vector3(0, trunkH * 0.92, 0);
  const n = new THREE.Vector3(), o = new THREE.Vector3();
  for (const [c, R] of centers) {
    if (!columnar) {
      // Limb from the trunk head toward the lobe.
      const dir = c.clone().sub(base);
      const len = dir.length() * 0.85;
      const limb = new THREE.CylinderGeometry(0.07, 0.14, len, 5);
      limb.translate(0, len / 2, 0);
      limb.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize()));
      limb.translate(base.x, base.y, base.z);
      wood.push(limb);
    }
    for (let k = 0; k < cards; k++) {
      const g = new THREE.PlaneGeometry(2.1, 2.1);
      n.set(rand() - 0.5, rand() - 0.35, rand() - 0.5).normalize();
      const depth = Math.cbrt(rand());
      const p = c.clone().addScaledVector(n, depth * R * 0.85);
      // Face mostly outward, with some jitter so the cards don't line up.
      const face = n.clone().add(new THREE.Vector3(rand() - 0.5, rand() - 0.5, rand() - 0.5).multiplyScalar(0.9)).normalize();
      g.lookAt(face);
      g.rotateZ(rand() * 6.28);
      g.translate(p.x, p.y, p.z);
      const nor = g.attributes.normal, pos = g.attributes.position;
      const col = new Float32Array(pos.count * 3);
      for (let i = 0; i < pos.count; i++) {
        o.set(pos.getX(i), pos.getY(i), pos.getZ(i));
        const fromLobe = o.clone().sub(c).normalize();
        const fromCrown = o.clone().sub(new THREE.Vector3(0, crownY, 0)).normalize();
        fromLobe.multiplyScalar(0.7).addScaledVector(fromCrown, 0.3).normalize();
        nor.setXYZ(i, fromLobe.x, fromLobe.y, fromLobe.z);
        // Inner and underside cards sit in shade.
        const shade = THREE.MathUtils.clamp(0.5 + depth * 0.4 + fromLobe.y * 0.15, 0.35, 1);
        col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = shade;
      }
      g.setAttribute('color', new THREE.BufferAttribute(col, 3));
      leaf.push(g);
    }
  }
  return { canopy: mergeGeometries(leaf), wood: mergeGeometries(wood.map(g => g.index ? g.toNonIndexed() : g)) };
}

export function buildVegetation(scene, renderer) {
  const trunkColliders = [];
  const frondTex = frondTexture(renderer);
  const leafTex = leafClusterTexture(renderer);
  const frondMat = leafMaterial(frondTex, 'frond');
  const canopyMat = leafMaterial(leafTex, 'canopy', { vertexColors: true });
  const barkMat = trunkMaterial();
  const skirtMat = new THREE.MeshStandardMaterial({ color: 0x5c4a35, roughness: 1 });

  // Two palm species: tall slender ones that line the avenues, and stout ones with big crowns.
  const tall = [], stout = [], trees = [];
  for (let z = -545; z <= 545; z += 18) {
    if (Math.abs(z - PIER.z) < 14) continue;
    tall.push([(PROMENADE.to + BEACH_START) / 2 + range(-1.5, 1.5), z + range(-2, 2)]);
    if (chance(0.3)) stout.push([BEACH_START - range(6, 14), z + range(-4, 4)]);
  }
  for (const z of [-320, 0]) {
    for (let x = -300; x < 330; x += 28) {
      if (roadsX.some(r => Math.abs(x - r) < ROAD_HALF + 6)) continue;
      for (const s of [-1, 1]) tall.push([x + range(-1, 1), z + s * (ROAD_HALF + 1.6)]);
    }
  }
  for (let z = -470; z < 480; z += 32) {
    if (roadsZ.some(r => Math.abs(z - r) < ROAD_HALF + 6)) continue;
    tall.push([-320 + ROAD_HALF + 1.6, z + range(-1, 1)]);
  }
  // Palms march down both sides of Seaview Ave and Aurelio Blvd too, clear of the bus stops.
  const stops = BUS_STOPS.map(b => busStopPos(b));
  for (const x of [-160, 0]) for (let z = -506; z < 520; z += 34) {
    if (roadsZ.some(r => Math.abs(z - r) < ROAD_HALF + 7)) continue;
    for (const side of [-1, 1]) {
      // A little further back than the lamp line (ROAD_HALF + 0.9), so trunks and posts don't crowd.
      const px = x + side * (ROAD_HALF + 2.7), pz = z + (side > 0 ? 17 : 0);
      if (stops.some(([sx, sz]) => Math.abs(sx - px) < 4 && Math.abs(sz - pz) < 6)) continue;
      if (roadsZ.some(r => Math.abs(pz - r) < ROAD_HALF + 7)) continue;
      tall.push([px + range(-0.3, 0.3), pz + range(-1, 1)]);
    }
  }
  // Parks.
  for (const [cx, cz] of [[-80, 80], [240, 400]]) {
    const half = BLOCK_SIZE / 2 - 10;
    for (let i = 0; i < 26; i++) {
      const x = cx + range(-half, half), z = cz + range(-half, half);
      if (Math.abs(x - cx) < 9 && Math.abs(z - cz) < 9) continue;
      if (chance(0.4)) stout.push([x, z]); else trees.push([x, z, range(0.8, 1.3), 0]);
    }
  }
  // Street trees on the residential avenues.
  for (const x of [0, 160, 320]) for (let z = 110; z < 470; z += 24) {
    if (roadsZ.some(r => Math.abs(z - r) < ROAD_HALF + 6)) continue;
    for (const s of [-1, 1]) if (!(x === 320 && s > 0)) trees.push([x + s * (ROAD_HALF + 1.8), z, range(0.6, 0.85), 0]);
  }
  // Hills.
  for (let i = 0; i < 520; i++) {
    const region = rand();
    const x = region < 0.56 ? range(380, 1100) : range(-300, 700);
    const z = region < 0.56 ? range(-1100, 1100) : region < 0.78 ? range(-1000, -575) : range(575, 1000);
    const y = terrainHeight(x, z);
    if (y < 2) continue;
    trees.push([x, z, range(0.7, 1.6), y]);
  }

  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), s = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);

  function palms(list, { heightRange, thickness, bend, crown, skirt }) {
    const trunkGeo = trunkGeometry(bend);
    const crownGeo = crownGeometry(crown.count, crown.length, crown.width);
    const trunks = new THREE.InstancedMesh(trunkGeo, barkMat, list.length);
    const crowns = new THREE.InstancedMesh(crownGeo, frondMat, list.length);
    const skirts = skirt ? new THREE.InstancedMesh(new THREE.CylinderGeometry(0.9, 0.55, 1, 8), skirtMat, list.length) : null;
    list.forEach(([x, z], i) => {
      const h = range(...heightRange);
      q.setFromAxisAngle(up, rand() * Math.PI * 2);
      s.set(thickness, h, thickness);
      v.set(x, -0.1, z);
      m.compose(v, q, s);
      trunks.setMatrixAt(i, m);
      const top = new THREE.Vector3(bend, 1, 0).applyMatrix4(m);
      const cs = range(0.85, 1.15);
      q.setFromAxisAngle(up, rand() * Math.PI * 2);
      m.compose(top, q, s.set(cs, cs, cs));
      crowns.setMatrixAt(i, m);
      if (skirts) {
        m.compose(top.clone().add(new THREE.Vector3(0, -1.6, 0)), q, s.set(1, 2.6, 1));
        skirts.setMatrixAt(i, m);
      }
      trunkColliders.push({ x, z, r: 0.45 });
    });
    trunks.castShadow = crowns.castShadow = true;
    trunks.receiveShadow = crowns.receiveShadow = true;
    scene.add(trunks, crowns);
    if (skirts) {
      skirts.castShadow = true;
      scene.add(skirts);
    }
  }

  palms(tall, { heightRange: [17, 26], thickness: 0.36, bend: 4, crown: { count: 15, length: 4.2, width: 1.5 }, skirt: true });
  palms(stout, { heightRange: [6, 10], thickness: 0.75, bend: 0.8, crown: { count: 24, length: 6.2, width: 2.2 }, skirt: false });

  // Broadleaf trees: a trunk that forks into limbs, each ending in a lobe of leaf cards.
  // Three kinds: a spreading street tree, a jacaranda (tinted violet per instance) and a
  // narrow cypress for the hills, plus a light version of the spreading tree for far slopes.
  const kinds = {
    broad: treeGeometry({ lobes: 6, cards: 22, spread: 2.1, crownY: 5.6, lobeR: 1.85, trunkH: 4.2 }),
    cypress: treeGeometry({ lobes: 5, cards: 14, spread: 0.25, crownY: 2.4, lobeR: 1.05, trunkH: 1.6, columnar: true }),
    far: treeGeometry({ lobes: 3, cards: 14, spread: 1.7, crownY: 5.4, lobeR: 2.1, trunkH: 4.2 }),
  };
  const groups = { broad: [], cypress: [], far: [] };
  for (const t of trees) {
    const [x, z, sc, y] = t;
    if (y > 0) groups[chance(0.35) ? 'cypress' : 'far'].push(t);
    else groups.broad.push(t);
  }
  const barkTree = new THREE.MeshStandardMaterial({ color: 0x4a3d30, roughness: 0.95 });
  const tint = new THREE.Color();
  for (const [kind, list] of Object.entries(groups)) {
    const { canopy, wood } = kinds[kind];
    const canopies = new THREE.InstancedMesh(canopy, canopyMat, list.length);
    const woods = new THREE.InstancedMesh(wood, barkTree, list.length);
    list.forEach(([x, z, sc, y], i) => {
      q.setFromAxisAngle(up, rand() * Math.PI * 2);
      const tall = kind === 'cypress' ? range(1.1, 1.6) : range(0.85, 1.2);
      m.compose(v.set(x, y - 0.1, z), q, s.set(sc, sc * tall, sc));
      canopies.setMatrixAt(i, m);
      woods.setMatrixAt(i, m);
      if (kind === 'broad' && chance(0.22)) tint.setHSL(range(0.72, 0.78), range(0.35, 0.5), range(0.62, 0.72)); // jacaranda
      else if (kind === 'cypress') tint.setHSL(range(0.26, 0.32), range(0.3, 0.45), range(0.32, 0.42));
      else tint.setHSL(range(0.2, 0.3), range(0.35, 0.6), range(0.45, 0.62));
      canopies.setColorAt(i, tint);
      if (y === 0) trunkColliders.push({ x, z, r: 0.5 });
    });
    canopies.castShadow = woods.castShadow = kind !== 'far';
    canopies.receiveShadow = true;
    if (kind !== 'broad') {
      // Hill trees stay out of the mirror pass.
      canopies.layers.set(1);
      woods.layers.set(1);
    }
    scene.add(canopies, woods);
  }

  return { trunkColliders };
}
