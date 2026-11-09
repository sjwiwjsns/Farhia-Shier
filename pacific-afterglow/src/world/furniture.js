import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { canvasTexture } from '../core/materials.js';
import { roadsX, roadsZ, ROAD_HALF, SLAB_H, BUS_STOPS, busStopPos } from './layout.js';
import { rand, pick } from '../core/rng.js';

// Street furniture: hydrants, trash cans, benches, mailboxes, news boxes, parking meters,
// street name signs, bus shelters and power lines. Small pieces are registered with the
// Knockables system so the car can send them flying; shelters and utility poles are solid.

// --- Geometry helpers (vertex-coloured parts merged into one mesh per prop) ---
function tint(geo, color) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const c = new THREE.Color(color);
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return g;
}
function bx(w, h, d, x, y, z, color, rx = 0, ry = 0, rz = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (rx || ry || rz) g.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rx, ry, rz)));
  g.translate(x, y, z);
  return tint(g, color);
}
function cy(rt, rb, h, seg, x, y, z, color, axis = 'y') {
  const g = new THREE.CylinderGeometry(rt, rb, h, seg);
  if (axis === 'x') g.rotateZ(Math.PI / 2);
  if (axis === 'z') g.rotateX(Math.PI / 2);
  g.translate(x, y, z);
  return tint(g, color);
}
function dome(r, seg, x, y, z, color, squash = 1) {
  const g = new THREE.SphereGeometry(r, seg, Math.max(3, seg / 3), 0, Math.PI * 2, 0, Math.PI / 2);
  g.scale(1, squash, 1);
  g.translate(x, y, z);
  return tint(g, color);
}

const RED = '#b0362a', CAP = '#d9d3c2', IRON = '#202427', WOOD = '#7d5b3b', BLUE = '#264a8a', GREY = '#626a70';

function hydrantGeo() {
  return mergeGeometries([
    cy(0.2, 0.21, 0.07, 10, 0, 0.035, 0, RED),
    cy(0.14, 0.15, 0.52, 10, 0, 0.33, 0, RED),
    cy(0.17, 0.17, 0.05, 10, 0, 0.6, 0, RED),
    dome(0.15, 10, 0, 0.62, 0, RED, 0.9),
    cy(0.035, 0.05, 0.07, 6, 0, 0.78, 0, CAP),
    ...[-1, 1].flatMap(s => [cy(0.055, 0.06, 0.14, 8, s * 0.17, 0.46, 0, RED, 'x'), cy(0.065, 0.065, 0.03, 8, s * 0.245, 0.46, 0, CAP, 'x')]),
    cy(0.075, 0.08, 0.13, 8, 0, 0.42, 0.17, RED, 'z'),
    cy(0.085, 0.085, 0.035, 8, 0, 0.42, 0.245, CAP, 'z'),
  ]);
}

function binGeo() {
  const parts = [cy(0.3, 0.27, 0.9, 14, 0, 0.45, 0, '#2c4a3b'), dome(0.31, 14, 0, 0.9, 0, '#1f2b27', 0.4), bx(0.22, 0.12, 0.02, 0, 0.78, 0.3, '#0d1110')];
  for (const y of [0.18, 0.5, 0.82]) parts.push(cy(0.305, 0.3, 0.03, 14, 0, y, 0, '#22392e'));
  return mergeGeometries(parts);
}

function benchGeo() {
  const parts = [];
  for (const z of [-0.14, 0, 0.14]) parts.push(bx(2.0, 0.04, 0.11, 0, 0.45, z, WOOD));
  for (let k = 0; k < 2; k++) parts.push(bx(2.0, 0.1, 0.035, 0, 0.64 + k * 0.15, -0.25 - k * 0.03, WOOD, -0.2));
  for (const x of [-0.85, 0.85]) {
    parts.push(bx(0.06, 0.45, 0.06, x, 0.225, 0.16, IRON), bx(0.06, 0.85, 0.06, x, 0.42, -0.24, IRON, -0.15));
    parts.push(bx(0.06, 0.04, 0.5, x, 0.63, -0.02, IRON), bx(0.06, 0.04, 0.42, x, 0.42, -0.04, IRON));
  }
  return mergeGeometries(parts);
}

function mailboxGeo() {
  const parts = [];
  for (const x of [-0.22, 0.22]) for (const z of [-0.18, 0.18]) parts.push(bx(0.05, 0.22, 0.05, x, 0.11, z, IRON));
  parts.push(bx(0.52, 0.62, 0.46, 0, 0.53, 0, BLUE), cy(0.23, 0.23, 0.52, 14, 0, 0.84, 0, BLUE, 'x'));
  parts.push(bx(0.32, 0.07, 0.04, 0, 0.93, 0.225, '#16294d'), bx(0.2, 0.14, 0.012, 0, 0.6, 0.235, '#d8dde6'));
  return mergeGeometries(parts);
}

function newsboxGeo() {
  // White body parts take the per-instance colour.
  return mergeGeometries([
    bx(0.36, 0.03, 0.3, 0, 0.015, 0, IRON), bx(0.08, 0.36, 0.08, 0, 0.18, 0, IRON),
    bx(0.46, 0.55, 0.4, 0, 0.63, 0, '#ffffff'), bx(0.48, 0.04, 0.42, 0, 0.92, 0, '#ffffff'),
    bx(0.34, 0.24, 0.012, 0, 0.71, 0.205, '#1c2226'), bx(0.12, 0.03, 0.03, 0, 0.53, 0.215, '#9aa0a4'),
  ]);
}

function meterGeo() {
  return mergeGeometries([
    cy(0.035, 0.04, 1.05, 8, 0, 0.525, 0, GREY),
    bx(0.17, 0.28, 0.13, 0, 1.19, 0, '#8a9095'),
    cy(0.085, 0.085, 0.13, 10, 0, 1.33, 0, '#3a4044', 'z'),
    bx(0.1, 0.07, 0.012, 0, 1.24, 0.067, '#c9e0a8'),
  ]);
}

function signPoleGeo() {
  return mergeGeometries([cy(0.045, 0.05, 3.3, 8, 0, 1.65, 0, GREY), cy(0.06, 0.06, 0.06, 8, 0, 3.32, 0, GREY)]);
}

function powerPoleGeo(transformer) {
  const parts = [
    cy(0.13, 0.17, 10.6, 8, 0, 5.3, 0, '#5a4330'),
    bx(2.5, 0.13, 0.13, 0, 9.7, 0, '#4b3828'),
    bx(1.4, 0.1, 0.1, 0, 8.9, 0, '#4b3828'),
  ];
  for (const x of [-1.1, 0, 1.1]) parts.push(cy(0.05, 0.06, 0.2, 6, x, 9.86, 0, '#cfd4d2'));
  for (const x of [-0.6, 0.6]) parts.push(cy(0.04, 0.05, 0.16, 6, x, 9.04, 0, '#cfd4d2'));
  if (transformer) parts.push(cy(0.27, 0.27, 0.85, 10, 0, 7.9, 0.32, '#7d8487'), cy(0.29, 0.29, 0.05, 10, 0, 8.35, 0.32, '#5f6669'));
  return mergeGeometries(parts);
}

// Street name blades share one atlas; each instance picks its row.
const AVENUES = { '-320': 'OCEAN DR', '-160': 'SEAVIEW AV', '0': 'AURELIO BL', '160': 'GRAND AV', '320': 'HILLCREST AV' };
const STREETS = { '-480': 'MARINA ST', '-320': 'SUNSET BL', '-160': 'PIER AV', '0': 'PALM ST', '160': 'HARBOR ST', '320': 'ROSA ST', '480': 'SOUTHBANK RD' };

function bladeMaterial(renderer, names) {
  const rows = names.length;
  const tex = canvasTexture(renderer, 512, 64 * rows, (c, w, h) => {
    const rh = h / rows;
    names.forEach((name, i) => {
      const y = i * rh;
      c.fillStyle = '#16603d';
      c.fillRect(0, y, w, rh);
      c.strokeStyle = '#e9f1ea';
      c.lineWidth = 3;
      c.strokeRect(6, y + 6, w - 12, rh - 12);
      c.fillStyle = '#f4f7f2';
      c.font = '700 40px "Barlow Condensed", Arial Narrow, Arial, sans-serif';
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.fillText(name, w / 2, y + rh / 2 + 2);
    });
  });
  const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.45, metalness: 0.2 });
  mat.onBeforeCompile = shader => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aRow;')
      .replace('#include <uv_vertex>', `#include <uv_vertex>\n  vMapUv.y = (vMapUv.y + aRow) / ${rows.toFixed(1)};`);
  };
  mat.customProgramCacheKey = () => 'pa-street-blade';
  return mat;
}

function adTexture(renderer) {
  return canvasTexture(renderer, 256, 384, (c, w, h) => {
    const g = c.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#ff8a4c');
    g.addColorStop(1, '#5a1c3c');
    c.fillStyle = g;
    c.fillRect(0, 0, w, h);
    c.fillStyle = '#fff4dc';
    c.beginPath();
    c.arc(w / 2, h * 0.36, 62, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = '#1b1020';
    c.font = '800 54px "Barlow Condensed", Impact, sans-serif';
    c.textAlign = 'center';
    c.fillText('SURF', w / 2, h * 0.7);
    c.fillText('FIZZ', w / 2, h * 0.84);
    c.fillStyle = '#fff4dc';
    c.font = '600 18px Arial, sans-serif';
    c.fillText('TASTE THE SWELL', w / 2, h * 0.94);
  });
}

// --- Builder ---------------------------------------------------------------------
export function buildFurniture(scene, renderer, knock, lamps, trunks = []) {
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
  const up = new THREE.Vector3(0, 1, 0);
  const vc = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55, metalness: 0.15 });
  const solids = []; // axis-aligned boxes the car cannot pass
  const circles = []; // round solids
  const crossClear = ROAD_HALF + 5;
  const lampSpots = lamps.map(([x, z]) => [x, z]);
  for (const t of trunks) lampSpots.push([t.x, t.z]); // palm and tree trunks need the same clearance
  const nearLamp = (x, z, d = 2.4) => lampSpots.some(([lx, lz]) => Math.abs(lx - x) < d && Math.abs(lz - z) < d);
  const stops = BUS_STOPS.map(b => busStopPos(b));
  const nearStop = (x, z) => stops.some(([sx, sz]) => Math.abs(sx - x) < 7 && Math.abs(sz - z) < 7);

  // Plan every sidewalk slot first, then build one instanced mesh per prop type.
  const plan = { hydrant: [], bin: [], bench: [], mailbox: [], newsbox: [], meter: [] };
  const sidewalk = (axis, road, side, s) => {
    // Returns a function placing something `inset` metres in from the curb at along-position s.
    return inset => axis === 'ns' ? [road + side * (ROAD_HALF + inset), s] : [s, road + side * (ROAD_HALF + inset)];
  };
  for (const axis of ['ns', 'ew']) {
    const roads = axis === 'ns' ? roadsX : roadsZ, cross = axis === 'ns' ? roadsZ : roadsX;
    const [lo, hi] = axis === 'ns' ? [-525, 525] : [-305, 345];
    for (const road of roads) for (const side of [-1, 1]) {
      if (axis === 'ns' && road === roadsX[0] && side < 0) continue; // beach side
      for (let s = lo; s <= hi; s += 6.5) {
        if (cross.some(c => Math.abs(s - c) < crossClear)) continue;
        const at = sidewalk(axis, road, side, s);
        const [cx, cz] = at(1);
        if (nearLamp(cx, cz) || nearStop(cx, cz)) continue;
        // Faces the road.
        const yaw = axis === 'ns' ? (side > 0 ? -Math.PI / 2 : Math.PI / 2) : (side > 0 ? Math.PI : 0);
        const downtown = road > -200 && (axis === 'ns' ? s < 120 : road < 120);
        const r = rand();
        if (r < 0.055) plan.hydrant.push([...at(0.6), yaw]);
        else if (r < 0.12) plan.bin.push([...at(0.9), yaw]);
        else if (r < 0.165) plan.bench.push([...at(3.4), yaw]);
        else if (r < 0.19) plan.mailbox.push([...at(1.1), yaw]);
        else if (r < 0.23) {
          // News boxes come in little rows.
          const n = 2 + Math.floor(rand() * 2);
          for (let k = 0; k < n; k++) {
            const off = (k - (n - 1) / 2) * 0.55;
            const [x, z] = at(1.1);
            plan.newsbox.push([axis === 'ns' ? x : x + off, axis === 'ns' ? z + off : z, yaw]);
          }
        } else if (downtown && r < 0.42) plan.meter.push([...at(0.45), yaw]);
      }
    }
  }

  const defs = {
    hydrant: { geo: hydrantGeo(), y: 0.4, r: 0.22, mass: 0.08, solid: 1.5, lieH: 0.17, kind: 'fly', sparks: true },
    bin: { geo: binGeo(), y: 0.5, r: 0.32, mass: 0.04, solid: 1.2, lieH: 0.29, kind: 'fly' },
    bench: { geo: benchGeo(), y: 0.4, r: 0.75, mass: 0.07, solid: 1.5, lieH: 0.3, kind: 'fly' },
    mailbox: { geo: mailboxGeo(), y: 0.5, r: 0.34, mass: 0.06, solid: 1.5, lieH: 0.25, kind: 'fly', sparks: true },
    newsbox: { geo: newsboxGeo(), y: 0.5, r: 0.28, mass: 0.04, solid: 1.2, lieH: 0.22, kind: 'fly' },
    meter: { geo: meterGeo(), y: 0, r: 0.12, mass: 0.04, solid: 2, kind: 'topple', sparks: true },
  };
  const newsColors = ['#c8342b', '#2f5fa8', '#e2b33a', '#2e7d4f', '#e8e4da', '#d9662f'].map(c => new THREE.Color(c));
  const meshes = {};
  for (const [type, list] of Object.entries(plan)) {
    const d = defs[type];
    const mesh = new THREE.InstancedMesh(d.geo, vc, Math.max(1, list.length));
    mesh.count = list.length;
    list.forEach(([x, z, yaw], i) => {
      q.setFromAxisAngle(up, yaw + (type === 'bin' || type === 'hydrant' ? rand() * 6.28 : 0));
      m.compose(v.set(x, SLAB_H, z), q, one);
      mesh.setMatrixAt(i, m);
      if (type === 'newsbox') mesh.setColorAt(i, pick(newsColors));
    });
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.layers.set(1);
    mesh.name = type;
    scene.add(mesh);
    meshes[type] = mesh;
    list.forEach(([x, z], i) => {
      knock.add([{ mesh, index: i }], null, { type, x, z, y: SLAB_H + d.y, r: d.r, mass: d.mass, solid: d.solid, lieH: d.lieH ?? 0.2, kind: d.kind, sparks: !!d.sparks });
    });
  }

  // Street name signs on the north-east corner of every crossing.
  const names = [...Object.values(AVENUES), ...Object.values(STREETS)];
  const corners = [];
  for (const x of roadsX) for (const z of roadsZ) corners.push([x + ROAD_HALF + 1.3, z - ROAD_HALF - 1.3, x, z]);
  const poles = new THREE.InstancedMesh(signPoleGeo(), vc, corners.length);
  const bladeGeo = new THREE.BoxGeometry(1.7, 0.27, 0.03);
  const blades = new THREE.InstancedMesh(bladeGeo, bladeMaterial(renderer, names), corners.length * 2);
  const rows = new Float32Array(corners.length * 2);
  corners.forEach(([px, pz, rx, rz], i) => {
    m.makeTranslation(px, SLAB_H, pz);
    poles.setMatrixAt(i, m);
    // Avenue blade runs north-south, street blade east-west, a little higher.
    q.setFromAxisAngle(up, Math.PI / 2);
    m.compose(v.set(px, SLAB_H + 3.0, pz), q, one);
    blades.setMatrixAt(i * 2, m);
    q.identity();
    m.compose(v.set(px, SLAB_H + 3.3, pz), q, one);
    blades.setMatrixAt(i * 2 + 1, m);
    // Rows count from the bottom of the atlas (canvas textures are flipped).
    rows[i * 2] = names.length - 1 - names.indexOf(AVENUES[String(rx)]);
    rows[i * 2 + 1] = names.length - 1 - names.indexOf(STREETS[String(rz)]);
  });
  bladeGeo.setAttribute('aRow', new THREE.InstancedBufferAttribute(rows, 1));
  for (const o of [poles, blades]) { o.castShadow = true; o.layers.set(1); scene.add(o); }
  corners.forEach(([px, pz], i) => {
    knock.add([{ mesh: poles, index: i }, { mesh: blades, index: i * 2 }, { mesh: blades, index: i * 2 + 1 }], null,
      { type: 'sign', x: px, z: pz, y: SLAB_H, r: 0.12, mass: 0.05, solid: 2.5, kind: 'topple', sparks: true });
  });

  // Bus shelters: roof, posts, glass, a bench and a lit advert at one end.
  const shelterParts = [], glassParts = [], adParts = [];
  for (const b of BUS_STOPS) {
    const [x, z] = busStopPos(b);
    // Local frame: +Z faces the road.
    const yaw = b.axis === 'ns' ? (b.side > 0 ? -Math.PI / 2 : Math.PI / 2) : (b.side > 0 ? Math.PI : 0);
    const T = new THREE.Matrix4().compose(v.set(x, SLAB_H, z), q.setFromAxisAngle(up, yaw), one);
    const add = (list, g) => list.push(g.applyMatrix4(T));
    add(shelterParts, bx(4.3, 0.08, 1.8, 0, 2.55, 0, '#3b4448', 0.04));
    add(shelterParts, bx(4.3, 0.18, 0.06, 0, 2.48, 0.88, '#2b3236'));
    for (const px of [-2.05, 2.05]) for (const pz of [-0.78, 0.7]) add(shelterParts, cy(0.05, 0.05, 2.5, 8, px, 1.25, pz, '#2b3236'));
    add(shelterParts, bx(2.4, 0.05, 0.42, -0.2, 0.47, -0.45, '#9aa3a8'));
    for (const px of [-1.2, 0.8]) add(shelterParts, bx(0.05, 0.45, 0.35, px, 0.225, -0.45, '#2b3236'));
    // Stop sign pole by the curb.
    add(shelterParts, cy(0.04, 0.04, 2.8, 8, 2.7, 1.4, 0.9, GREY));
    add(shelterParts, cy(0.27, 0.27, 0.03, 18, 2.7, 2.65, 0.9, '#1d4f9a', 'z'));
    add(shelterParts, cy(0.2, 0.2, 0.035, 18, 2.7, 2.65, 0.9, '#f2f4f6', 'z'));
    add(glassParts, bx(4.0, 1.85, 0.02, 0, 1.3, -0.8, '#ffffff'));
    add(glassParts, bx(0.02, 1.85, 1.35, -2.05, 1.3, -0.1, '#ffffff'));
    const ad = new THREE.BoxGeometry(0.14, 1.8, 1.3);
    ad.translate(2.05, 1.3, -0.08);
    adParts.push(tint(ad, '#ffffff').applyMatrix4(T));
    // Solid footprint for the car (axis-aligned half extents).
    const along = 2.25, depth = 0.95;
    solids.push(b.axis === 'ns' ? { x, z, w: depth, d: along } : { x, z, w: along, d: depth });
  }
  const shelters = new THREE.Mesh(mergeGeometries(shelterParts), vc);
  shelters.castShadow = shelters.receiveShadow = true;
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x9fc4d4, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.22, depthWrite: false });
  const glass = new THREE.Mesh(mergeGeometries(glassParts), glassMat);
  glass.renderOrder = 2;
  const adTex = adTexture(renderer);
  const adMat = new THREE.MeshStandardMaterial({ map: adTex, emissive: 0xffffff, emissiveMap: adTex, emissiveIntensity: 0.1, roughness: 0.3 });
  const ads = new THREE.Mesh(mergeGeometries(adParts), adMat);
  ads.castShadow = true;
  scene.add(shelters, glass, ads);

  // Power lines on wooden poles along the city's outer streets, wires sagging between them.
  const lines = [];
  for (let z = -510; z <= 525; z += 38) if (!roadsZ.some(r => Math.abs(z - r) < crossClear)) lines.push([320 + ROAD_HALF + 1.7, z, 'ns']);
  for (const [road, side] of [[480, 1], [-480, -1]]) {
    for (let x = -290; x <= 330; x += 38) if (!roadsX.some(r => Math.abs(x - r) < crossClear)) lines.push([x, road + side * (ROAD_HALF + 1.7), 'ew']);
  }
  const plain = lines.filter((_, i) => i % 4 !== 2), withTx = lines.filter((_, i) => i % 4 === 2);
  for (const [list, tx] of [[plain, false], [withTx, true]]) {
    const mesh = new THREE.InstancedMesh(powerPoleGeo(tx), vc, list.length);
    list.forEach(([x, z, axis], i) => {
      // Crossarms sit across the line's direction.
      q.setFromAxisAngle(up, axis === 'ns' ? 0 : Math.PI / 2);
      m.compose(v.set(x, SLAB_H, z), q, one);
      mesh.setMatrixAt(i, m);
      circles.push({ x, z, r: 0.22 });
    });
    mesh.castShadow = true;
    scene.add(mesh);
  }
  // Wires: a catenary per conductor between consecutive poles of the same run.
  const wire = [];
  const runs = [lines.filter(l => l[2] === 'ns'), lines.filter(l => l[2] === 'ew' && l[1] > 0), lines.filter(l => l[2] === 'ew' && l[1] < 0)];
  for (const run of runs) {
    for (let i = 0; i < run.length - 1; i++) {
      const [x0, z0, axis] = run[i], [x1, z1] = run[i + 1];
      if (Math.hypot(x1 - x0, z1 - z0) > 80) continue;
      for (const [off, h] of [[-1.1, 9.92], [0, 9.92], [1.1, 9.92], [-0.6, 9.08], [0.6, 9.08]]) {
        const ox = axis === 'ns' ? off : 0, oz = axis === 'ns' ? 0 : off;
        const sag = 0.55 + Math.abs(off) * 0.1;
        let px = x0 + ox, py = SLAB_H + h, pz = z0 + oz;
        for (let k = 1; k <= 12; k++) {
          const t = k / 12;
          const nx = x0 + (x1 - x0) * t + ox, nz = z0 + (z1 - z0) * t + oz, ny = SLAB_H + h - sag * 4 * t * (1 - t);
          wire.push(px, py, pz, nx, ny, nz);
          px = nx; py = ny; pz = nz;
        }
      }
    }
  }
  const wireGeo = new THREE.BufferGeometry();
  wireGeo.setAttribute('position', new THREE.Float32BufferAttribute(wire, 3));
  const wires = new THREE.LineSegments(wireGeo, new THREE.LineBasicMaterial({ color: 0x0b0c0d, transparent: true, opacity: 0.85 }));
  scene.add(wires);

  return {
    solids,
    circles,
    meshes,
    update(lampFactor) {
      adMat.emissiveIntensity = 0.12 + lampFactor * 1.4;
    },
  };
}
