// A380 cabin interiors — both decks, four classes, walkable via the cabin
// camera. Laid out after the real Emirates configuration:
//   Upper deck:  14 First Class suites (1-2-1) · shower spas · 76 Business
//                pods (1-2-1) · rear lounge/bar
//   Main deck:   56 Premium Economy (2-4-2) forward · ~330 Economy (3-4-3)
// Seats/pods/suites are InstancedMesh per element type (a handful of draw
// calls for ~500 seats). A BackSide inner liner loft encloses the cabin so
// the interior reads as a room, not the inside of a painted eggshell.
import * as THREE from 'three';
import { A380 } from './spec.js';
import { sectionAt } from './fuselage.js';

const L = A380.length;
const zAt = (x) => -L / 2 + x; // x measured from the nose in spec terms

// deck reference heights (datum-relative)
export const DECKS = [
  { name: 'main', floorY: -2.35, eyeY: -0.85, halfW: 3.05, xMin: 7.5, xMax: 60.5 },
  { name: 'upper', floorY: 1.35, eyeY: 2.85, halfW: 2.45, xMin: 9.0, xMax: 57.5 }
];

// ---------------------------------------------------------------- helpers
// Merge axis-aligned boxes ({w,h,d, x,y,z}) into one BufferGeometry.
function mergeBoxes(boxes) {
  const pos = [], norm = [], uv = [], idx = [];
  let vo = 0;
  for (const b of boxes) {
    const g = new THREE.BoxGeometry(b.w, b.h, b.d);
    g.translate(b.x || 0, b.y || 0, b.z || 0);
    const p = g.getAttribute('position'), n = g.getAttribute('normal'), u = g.getAttribute('uv');
    for (let i = 0; i < p.count; i++) {
      pos.push(p.getX(i), p.getY(i), p.getZ(i));
      norm.push(n.getX(i), n.getY(i), n.getZ(i));
      uv.push(u.getX(i), u.getY(i));
    }
    const ix = g.getIndex();
    for (let i = 0; i < ix.count; i++) idx.push(ix.getX(i) + vo);
    vo += p.count;
    g.dispose();
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(norm, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  return geo;
}

function instanced(geo, mat, transforms, group) {
  const inst = new THREE.InstancedMesh(geo, mat, transforms.length);
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  transforms.forEach(([x, y, z, rotY], i) => {
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rotY || 0);
    m4.compose(new THREE.Vector3(x, y, z), q, new THREE.Vector3(1, 1, 1));
    inst.setMatrixAt(i, m4);
  });
  inst.instanceMatrix.needsUpdate = true;
  group.add(inst);
  return inst;
}

// ------------------------------------------------------------- geometries
function econSeatGeo(w) {
  return mergeBoxes([
    { w, h: 0.12, d: 0.50, y: 0.34 },                    // base
    { w, h: 0.09, d: 0.48, y: 0.45 },                    // cushion
    { w, h: 0.66, d: 0.11, y: 0.80, z: 0.22 },           // backrest
    { w: w * 0.9, h: 0.14, d: 0.10, y: 1.16, z: 0.22 },  // headrest
    { w: 0.06, h: 0.24, d: 0.44, x: -w / 2 - 0.03, y: 0.56 },
    { w: 0.06, h: 0.24, d: 0.44, x: w / 2 + 0.03, y: 0.56 }
  ]);
}

function bizPodGeo() {
  return mergeBoxes([
    { w: 0.58, h: 0.16, d: 1.55, y: 0.30 },                     // lie-flat base
    { w: 0.58, h: 0.60, d: 0.14, y: 0.66, z: 0.68 },            // backrest
    { w: 0.48, h: 0.13, d: 0.09, y: 1.02, z: 0.68 },            // headrest
    { w: 0.14, h: 0.78, d: 1.60, x: -0.42, y: 0.42 },           // console/shell left
    { w: 0.14, h: 0.78, d: 1.60, x: 0.42, y: 0.42 },            // shell right
    { w: 0.84, h: 0.72, d: 0.10, y: 0.40, z: -0.80 },           // front shell / TV
    { w: 0.36, h: 0.34, d: 0.35, y: 0.20, z: -0.55 }            // ottoman
  ]);
}

function suiteGeo() {
  return mergeBoxes([
    { w: 0.12, h: 1.45, d: 2.05, x: -0.50, y: 0.78 },           // wall left
    { w: 0.12, h: 1.45, d: 2.05, x: 0.50, y: 0.78 },            // wall right
    { w: 1.00, h: 1.45, d: 0.12, y: 0.78, z: 1.00 },            // rear wall
    { w: 1.00, h: 0.45, d: 0.12, y: 1.28, z: -1.00 },           // front header (door gap below)
    { w: 0.62, h: 0.15, d: 0.85, y: 0.40, z: 0.30 },            // plush seat base
    { w: 0.62, h: 0.62, d: 0.14, y: 0.76, z: 0.72 },            // seat back
    { w: 0.36, h: 0.42, d: 0.45, x: -0.28, y: 0.32, z: -0.45 }, // side table
    { w: 0.70, h: 0.55, d: 0.06, y: 0.85, z: -0.93 }            // TV panel
  ]);
}

function premSeatGeo() { return econSeatGeo(0.52); }

// ------------------------------------------------------------- zone décor
function addFloor(group, mat, xMin, xMax, halfW, y) {
  const f = new THREE.Mesh(new THREE.BoxGeometry(halfW * 2, 0.12, xMax - xMin), mat);
  f.position.set(0, y - 0.06, zAt((xMin + xMax) / 2));
  group.add(f);
}

function addBulkhead(group, mat, x, floorY, halfW, height, aisles) {
  // partition wall with aisle gaps: aisles = [xCenter offsets]
  let edges = [-halfW, ...aisles.flatMap((a) => [a - 0.55, a + 0.55]), halfW];
  for (let i = 0; i < edges.length; i += 2) {
    const w = edges[i + 1] - edges[i];
    if (w <= 0.05) continue;
    const seg = new THREE.Mesh(new THREE.BoxGeometry(w, height, 0.12), mat);
    seg.position.set((edges[i] + edges[i + 1]) / 2, floorY + height / 2, zAt(x));
    group.add(seg);
  }
  const header = new THREE.Mesh(new THREE.BoxGeometry(halfW * 2, 0.35, 0.12), mat);
  header.position.set(0, floorY + height + 0.17, zAt(x));
  group.add(header);
}

function addGalley(group, mat, trimMat, x0, x1, floorY, halfW) {
  for (const side of [-1, 1]) {
    const g = new THREE.Mesh(new THREE.BoxGeometry(0.85, 2.0, x1 - x0), mat);
    g.position.set(side * (halfW - 0.45), floorY + 1.0, zAt((x0 + x1) / 2));
    group.add(g);
    const face = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.2, (x1 - x0) * 0.8), trimMat);
    face.position.set(side * (halfW - 0.88), floorY + 1.1, zAt((x0 + x1) / 2));
    group.add(face);
  }
}

function addBins(group, mat, xMin, xMax, halfW, floorY) {
  for (const side of [-1, 1]) {
    const bin = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.5, xMax - xMin), mat);
    bin.position.set(side * (halfW - 0.55), floorY + 2.05, zAt((xMin + xMax) / 2));
    bin.rotation.z = side * 0.28;
    group.add(bin);
  }
}

function addStairs(group, mat, x, floorLo, floorHi, forward) {
  const steps = 9;
  const rise = (floorHi - floorLo) / steps;
  for (let i = 0; i < steps; i++) {
    const s = new THREE.Mesh(new THREE.BoxGeometry(1.15, rise, 0.34), mat);
    s.position.set(0, floorLo + rise * (i + 0.5), zAt(x + (forward ? -1 : 1) * i * 0.32));
    group.add(s);
  }
}

// =================================================================== main
export function buildA380Cabin(materials, detail) {
  const group = new THREE.Group();
  const m = materials;

  // Inner liner: BackSide loft slightly inside the hull encloses the cabin.
  {
    const radial = 30, lengthSegs = 40;
    const pos = [], idx = [];
    for (let i = 0; i <= lengthSegs; i++) {
      const t = 0.075 + (i / lengthSegs) * (0.905 - 0.075);
      const sec = sectionAt(t);
      const z = -L / 2 + t * L;
      for (let j = 0; j <= radial; j++) {
        const phi = (j / radial) * Math.PI * 2;
        const c = Math.cos(phi);
        const blend = Math.pow(0.5 - 0.5 * c, 1.15);
        const h = (sec.lo + (sec.up - sec.lo) * blend) * 0.955;
        pos.push(sec.w * 0.955 * Math.sin(phi), sec.yC - h * c, z);
      }
    }
    const ring = radial + 1;
    for (let i = 0; i < lengthSegs; i++) {
      for (let j = 0; j < radial; j++) {
        const a = i * ring + j, b = a + ring;
        idx.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    const liner = new THREE.Mesh(geo, m.cabinLiner);
    group.add(liner);
    // end caps close the tube so the nose/tail interiors never show through
    for (const t of [0.075, 0.905]) {
      const sec = sectionAt(t);
      const cap = new THREE.Mesh(new THREE.CircleGeometry(1, 24), m.cabinWallSolid);
      cap.scale.set(sec.w * 0.96, Math.max(sec.up, sec.lo) * 0.96, 1);
      cap.position.set(0, sec.yC, -L / 2 + t * L);
      group.add(cap);
    }
  }

  const [main, upper] = DECKS;

  // ------------------------------------------------------------ floors
  addFloor(group, m.carpetEcon, main.xMin, main.xMax, main.halfW + 0.4, main.floorY);
  addFloor(group, m.carpetPrem, main.xMin, 16.6, main.halfW + 0.3, main.floorY + 0.01);
  addFloor(group, m.carpetUpper, upper.xMin, upper.xMax, upper.halfW + 0.4, upper.floorY);
  addFloor(group, m.carpetFirst, upper.xMin, 21.5, upper.halfW + 0.3, upper.floorY + 0.01);

  // solid walls at the deck ends (nothing beyond them is modelled)
  for (const [deck, x] of [[main, main.xMin], [main, main.xMax], [upper, upper.xMin], [upper, upper.xMax]]) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(deck.halfW * 2 + 1.2, 2.6, 0.14), m.cabinWallSolid);
    wall.position.set(0, deck.floorY + 1.3, zAt(x));
    group.add(wall);
  }

  // main-deck ceiling panel (hides the raw underside of the upper floor)
  {
    const ceil = new THREE.Mesh(
      new THREE.BoxGeometry(main.halfW * 2 - 0.6, 0.08, main.xMax - main.xMin), m.cabinWall);
    ceil.position.set(0, upper.floorY - 0.32, zAt((main.xMin + main.xMax) / 2));
    group.add(ceil);
  }

  // ============================================================ UPPER DECK
  // ---- First Class suites: rows 1-2-1, 14 suites total
  {
    const t = [];
    const lanes = [-1.88, -0.54, 0.54, 1.88]; // 1-2-1 with aisles at ±1.2
    const rows = [11.2, 13.5, 15.8, 18.1];
    rows.forEach((x, ri) => {
      const use = ri < 3 ? lanes : [lanes[0], lanes[3]]; // 3 full rows + 2 = 14 suites
      for (const lx of use) t.push([lx, upper.floorY, zAt(x), 0]);
    });
    instanced(suiteGeo(), m.suiteShell, t, group);
    // gold trim strip along the suites
    for (const side of [-1, 1]) {
      const trim = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.10, 9.5), m.gold);
      trim.position.set(side * 2.28, upper.floorY + 1.5, zAt(14.6));
      group.add(trim);
    }
  }

  // ---- Shower spas (two rooms) + galley behind First
  {
    for (const side of [-1, 1]) {
      const spa = new THREE.Mesh(new THREE.BoxGeometry(1.5, 2.05, 2.2), m.suiteShell);
      spa.position.set(side * 1.5, upper.floorY + 1.02, zAt(20.6));
      group.add(spa);
      const door = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.8, 0.7), m.gold);
      door.position.set(side * 0.72, upper.floorY + 0.95, zAt(20.6));
      group.add(door);
    }
  }
  addBulkhead(group, m.cabinWall, 22.0, upper.floorY, upper.halfW, 2.0, [-1.15, 1.15]);

  // ---- Business Class pods: 1-2-1, 19 rows = 76 pods
  {
    const t = [];
    const lanes = [-1.86, -0.52, 0.52, 1.86]; // 1-2-1, aisles at ±1.19
    for (let r = 0; r < 19; r++) {
      const x = 23.4 + r * 1.22;
      if (x > 33.4 && x < 35.2) continue; // mid-cabin galley break (door U2)
      for (const lx of lanes) t.push([lx, upper.floorY, zAt(x), 0]);
    }
    instanced(bizPodGeo(), m.bizShell, t, group);
  }
  addGalley(group, m.galley, m.steel, 33.4, 35.2, upper.floorY, upper.halfW);
  addBins(group, m.bins, 22.5, 48.5, upper.halfW, upper.floorY);
  addBulkhead(group, m.cabinWall, 49.3, upper.floorY, upper.halfW, 2.0, [0]);

  // ---- The lounge/bar at the back of the upper deck
  {
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.05, 1.12, 20, 1, false, 0, Math.PI), m.barCounter);
    bar.position.set(0, upper.floorY + 0.56, zAt(53.6));
    bar.rotation.y = Math.PI / 2;
    group.add(bar);
    const barTop = new THREE.Mesh(new THREE.CylinderGeometry(1.12, 1.12, 0.06, 20, 1, false, 0, Math.PI), m.gold);
    barTop.position.set(0, upper.floorY + 1.15, zAt(53.6));
    barTop.rotation.y = Math.PI / 2;
    group.add(barTop);
    // back bottle shelf
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.5, 0.35), m.barCounter);
    shelf.position.set(0, upper.floorY + 0.95, zAt(55.4));
    group.add(shelf);
    const glow = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.9, 0.05),
      new THREE.MeshBasicMaterial({ color: 0xd9b36a }));
    glow.position.set(0, upper.floorY + 1.05, zAt(55.2));
    group.add(glow);
    // curved lounge sofas along the walls
    for (const side of [-1, 1]) {
      const sofa = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.45, 3.4), m.sofa);
      sofa.position.set(side * (upper.halfW - 0.55), upper.floorY + 0.24, zAt(52.2));
      group.add(sofa);
      const back = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.55, 3.4), m.sofa);
      back.position.set(side * (upper.halfW - 0.28), upper.floorY + 0.68, zAt(52.2));
      group.add(back);
    }
  }

  // ============================================================= MAIN DECK
  // ---- Premium Economy: 2-4-2, 7 rows = 56 seats
  {
    const t = [];
    const lanes = [-2.35, -1.78, -0.86, -0.29, 0.29, 0.86, 1.78, 2.35];
    for (let r = 0; r < 7; r++) {
      const x = 10.2 + r * 0.99;
      for (const lx of lanes) t.push([lx, main.floorY, zAt(x), 0]);
    }
    const inst = instanced(premSeatGeo(), m.premSeat, t, group);
    inst.castShadow = false;
  }
  addBulkhead(group, m.cabinWall, 17.2, main.floorY, main.halfW, 2.05, [-1.32, 1.32]);
  addGalley(group, m.galley, m.steel, 17.4, 18.9, main.floorY, main.halfW);

  // ---- Economy: 3-4-3 (narrowing to 2-4-2 in the tail), ~330 seats
  {
    const t = [];
    const seatW = 0.51;
    for (let r = 0; r < 34; r++) {
      const x = 19.8 + r * 0.84;
      if (x > 27.3 && x < 29.1) continue;  // door M3 galley break
      if (x > 43.6 && x < 45.9) continue;  // door M4 galley break
      const sec = sectionAt(x / L);
      const cabinHalf = Math.min(main.halfW, sec.w * 0.90 - 0.35);
      if (cabinHalf < 2.1) break;
      const wide = cabinHalf > 2.75;
      const lanes = wide
        ? [-2.62, -2.10, -1.58, -0.78, -0.26, 0.26, 0.78, 1.58, 2.10, 2.62]
        : [-1.95, -1.43, -0.78, -0.26, 0.26, 0.78, 1.43, 1.95];
      for (const lx of lanes) {
        if (Math.abs(lx) > cabinHalf - 0.30) continue;
        t.push([lx, main.floorY, zAt(x), 0]);
      }
    }
    const inst = instanced(econSeatGeo(seatW), m.econSeat, t, group);
    inst.castShadow = false;
    addGalley(group, m.galley, m.steel, 27.3, 29.1, main.floorY, main.halfW);
    addGalley(group, m.galley, m.steel, 43.6, 45.9, main.floorY, main.halfW - 0.2);
  }
  addBins(group, m.bins, 10.0, 47.5, main.halfW + 0.15, main.floorY);
  // rear galley + lavs
  addGalley(group, m.galley, m.steel, 56.5, 58.5, main.floorY, main.halfW - 0.8);

  // ---- stairs: grand staircase forward, straight stairs aft
  addStairs(group, m.stairs, 9.6, main.floorY, upper.floorY, false);
  addStairs(group, m.stairs, 56.2, main.floorY, upper.floorY, true);

  // soft cabin glow strips so the interior isn't pitch-dark under the liner
  for (const deck of DECKS) {
    const strip = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.03, deck.xMax - deck.xMin - 4),
      new THREE.MeshBasicMaterial({ color: 0xf4eee2 }));
    strip.position.set(0, deck.floorY + (deck.name === 'main' ? 2.45 : 2.35), zAt((deck.xMin + deck.xMax) / 2));
    group.add(strip);
  }

  return group;
}

// Camera-facing metadata (aircraft-local bounds per deck).
export function cabinInfo() {
  return {
    decks: DECKS.map((d) => ({
      eyeY: d.eyeY,
      zMin: zAt(d.xMin + 0.8),
      zMax: zAt(d.xMax - 1.2),
      halfW: d.halfW - 0.55
    })),
    start: new THREE.Vector3(0, DECKS[1].eyeY, zAt(12.4)) // First Class, upper deck
  };
}
