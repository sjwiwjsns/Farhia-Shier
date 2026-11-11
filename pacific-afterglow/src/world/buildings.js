import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { proceduralMaterial, canvasTexture } from '../core/materials.js';
import { batchStatic } from '../core/batch.js';
import { patchAtmosphere } from './atmosphere.js';
import { rand, range, pick, chance, hash2 } from '../core/rng.js';
import { BLOCK_SIZE, SIDEWALK, SLAB_H, EAST, NORTH, SOUTH } from './layout.js';
import { allBlocks } from './plan.js';
import { BoxGrid, chunkId, registerLod } from '../core/grid.js';
import { terrainHeight } from './ground.js';
import { STYLE, GROUND, ROOF, LIGHT, DOOR, facadeCode, makeFacadeMaterial, makeTileRoofMaterial } from './facade.js';

export { STYLE };

// The city's buildings. A building is a few facade parts (boxes, or cylinders for round
// towers) whose windows, walls and street fronts the facade shader draws, dressed with
// real pieces of trim that catch the sun and throw shadows: fins, ledges, cornices, piers,
// canopies, balconies, crowns. Everything is instanced per chunk of the city.

function hipRoofGeometry() {
  // Unit footprint at y=0 rising to a short ridge at y=1, with a small overhang.
  const o = 0.54, r = 0.22;
  const v = [
    -o, 0, -o, o, 0, -o, o, 0, o, -o, 0, o, // eaves
    -r, 1, 0, r, 1, 0, // ridge along x
  ];
  const idx = [0, 4, 5, 0, 5, 1, 1, 5, 2, 2, 5, 4, 2, 4, 3, 3, 4, 0];
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
  g.setIndex(idx);
  const ng = g.toNonIndexed();
  ng.computeVertexNormals();
  return ng;
}


const PALETTES = {
  stucco: ['#e8dcc4', '#f0d6c0', '#e6c9a8', '#d9e2d6', '#f2e8d8', '#e7b9a3', '#d6c7e0', '#f4e4b8', '#cfe0e3'],
  concrete: ['#a9a59c', '#b8b2a6', '#8f8e88', '#c9c3b5', '#9a9690', '#b0aba0'],
  brick: ['#8a4f3c', '#9c5a43', '#7a4535', '#a8735a', '#6d4a3c', '#a35b45'],
  tower: ['#9fa6a8', '#7c8589', '#b5b8b4', '#5f686d', '#c8c3b8', '#33383c', '#d7d9d6', '#7d6c57'],
  stone: ['#d8cbb0', '#c9b79a', '#b8a88c', '#d2c6ae', '#bfae94'],
  condo: ['#e9e8e4', '#d9dcdc', '#c4c9cb', '#ece4d6', '#d6d2ca'],
  metal: ['#8a9196', '#6d7a6f', '#9a8f7a', '#7d4a3a', '#5f6b78', '#a7a9a3'],
  cladding: ['#d9d6cf', '#3a3f44', '#b9b3a6', '#8c8f8a', '#c7b299', '#5a6268', '#e6e2d8'],
  glass: [
    [0.18, 0.32, 0.38], [0.16, 0.27, 0.36], [0.28, 0.3, 0.28], [0.25, 0.22, 0.18], [0.2, 0.34, 0.33], [0.14, 0.2, 0.3],
    [0.3, 0.24, 0.15], [0.12, 0.26, 0.24], [0.22, 0.27, 0.33], [0.17, 0.2, 0.23],
  ],
  // Accents: spandrel panels, painted bands, dados, rainscreen feature panels.
  accent: ['#8c3b2e', '#2f5d62', '#c9a45c', '#3b4a5a', '#7a2e3a', '#d9d4c8', '#4a4f54', '#b5673a', '#2e4a35'],
  dado: ['#b5673a', '#2f5d62', '#8c3b2e', '#5a7a8c', '#c9a45c', '#6b7f5a'],
  brass: ['#b08d4f', '#9a7b45', '#6f8f7a', '#a8794a'],
  trimMetal: ['#c9ccce', '#3a3d40', '#8a6a3c', '#e8e6e0', '#22262a'],
  crown: ['#bfe3ff', '#ffe2b0', '#ffffff', '#ffb9d8', '#b6ffe6'],
};
const shade = (hex, k) => '#' + new THREE.Color(hex).lerp(new THREE.Color(k > 0 ? '#ffffff' : '#000000'), Math.abs(k)).getHexString();

// --- City plan --------------------------------------------------------------
// Each block gets a mix of building types; lots are carved by a random split
// so neighbouring buildings differ in width, depth, height and setback.
// Smallest lot side each type can be built on.
const MIN_SIDE = { tower: 36, deco: 32, office: 28, hotel: 28, civic: 30, garage: 28, condo: 24, warehouse: 24, motel: 24, brick: 18, stucco: 14, shops: 14 };
export const BUILDING_TYPES = ['glass tower', 'office', 'art deco', 'brick apartments', 'condo', 'hotel', 'shops', 'parking garage', 'coastal stucco', 'motel', 'warehouse', 'civic hall'];
// Types that are built wall to wall along a street when their block is a terrace.
const PARTY_WALLS = new Set(['brick', 'shops', 'stucco', 'deco', 'office', 'condo', 'garage']);
const CORP_NAMES = ['PACIFICA', 'AURELIO', 'VANTA', 'MERIDIAN', 'ONDA', 'NORTHSTAR', 'SOLANO', 'HALCYON', 'ALTAMAR', 'KITE & CO'];

const SHOP_NAMES = ['COFFEE', 'PIZZA', 'NAILS', 'DELI', 'BOOKS', 'PHARMACY', 'TACOS', 'SURF', 'RAMEN', 'BAR', 'DONUTS', 'LAUNDRY', 'VINYL', 'BANK', 'FLOWERS', 'GYM'];
const SIGN_COLORS = ['#ff5a7a', '#5fe8ff', '#ffd25a', '#ff8a3d', '#a6ff6a', '#ffffff', '#ff6af0', '#7ab8ff'];
const HOTEL_NAMES = ['HOTEL MIRAMAR', 'THE PALMS', 'CASA DEL MAR', 'HOTEL AURELIO', 'THE SEABRIGHT'];

const LOT_SIGNS = ['SURF DINER', 'GAS · 24H', 'CAR WASH', 'DRIVE-IN', 'TIRE SHOP', 'TACO STAND', 'MINI MART', 'BURGERS'];

function splitLots(rect, minSide, maxSide, out, depth = 0) {
  const w = rect.x1 - rect.x0, d = rect.z1 - rect.z0;
  if ((w <= maxSide && d <= maxSide) || depth > 5) { out.push(rect); return out; }
  const alongX = w >= d;
  const len = alongX ? w : d;
  if (len < minSide * 2) { out.push(rect); return out; }
  const cut = THREE.MathUtils.clamp(range(0.36, 0.64) * len, minSide, len - minSide);
  if (alongX) {
    splitLots({ ...rect, x1: rect.x0 + cut }, minSide, maxSide, out, depth + 1);
    splitLots({ ...rect, x0: rect.x0 + cut }, minSide, maxSide, out, depth + 1);
  } else {
    splitLots({ ...rect, z1: rect.z0 + cut }, minSide, maxSide, out, depth + 1);
    splitLots({ ...rect, z0: rect.z0 + cut }, minSide, maxSide, out, depth + 1);
  }
  return out;
}

function weightedPick(weights) {
  const entries = Object.entries(weights);
  let total = entries.reduce((a, [, w]) => a + w, 0);
  let r = rand() * total;
  for (const [k, w] of entries) if ((r -= w) <= 0) return k;
  return entries[0][0];
}

// Faces of a box: outward normal, rotation that turns local +Z onto it.
const FACES = {
  px: { nx: 1, nz: 0, rot: Math.PI / 2 }, nx: { nx: -1, nz: 0, rot: -Math.PI / 2 },
  pz: { nx: 0, nz: 1, rot: 0 }, nz: { nx: 0, nz: -1, rot: Math.PI },
};
function faceLength(b, f) { return f.nx ? b.d : b.w; }
function facePoint(b, f, t, offset = 0) {
  return f.nx ? [b.x + f.nx * (b.w / 2 + offset), b.z + t] : [b.x + t, b.z + f.nz * (b.d / 2 + offset)];
}


// --- Detail geometry --------------------------------------------------------
function merged(parts) {
  return mergeGeometries(parts.map(([w, h, d, x, y, z, rx = 0, ry = 0, rz = 0, kind = 'box']) => {
    const g = kind === 'cyl' ? new THREE.CylinderGeometry(w, w, h, 12) : kind === 'cone' ? new THREE.ConeGeometry(w, h, 12) : new THREE.BoxGeometry(w, h, d);
    if (rx || ry || rz) g.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rx, ry, rz)));
    g.translate(x, y, z);
    return g.index ? g.toNonIndexed() : g;
  }));
}

function detailGeometries() {
  const acUnit = merged([[1.6, 1.0, 1.2, 0, 0.5, 0], [0.42, 0.08, 0, 0, 1.04, 0, 0, 0, 0, 'cyl'], [1.62, 0.06, 1.22, 0, 0.22, 0]]);
  const tank = merged([
    [1.6, 3.0, 0, 0, 4.1, 0, 0, 0, 0, 'cyl'], [1.75, 1.0, 0, 0, 6.1, 0, 0, 0, 0, 'cone'],
    [0.16, 2.6, 0.16, 1.1, 1.3, 1.1], [0.16, 2.6, 0.16, -1.1, 1.3, 1.1], [0.16, 2.6, 0.16, 1.1, 1.3, -1.1], [0.16, 2.6, 0.16, -1.1, 1.3, -1.1],
    [2.6, 0.14, 2.6, 0, 2.6, 0],
  ]);
  // One floor of fire escape against a wall in the XY plane, sticking out along +Z.
  const fe = [
    [3.2, 0.06, 1.1, 0, 0, 0.6], [3.2, 0.04, 0.04, 0, 0.95, 1.13], [0.04, 0.04, 1.1, -1.6, 0.95, 0.6], [0.04, 0.04, 1.1, 1.6, 0.95, 0.6],
    [0.04, 0.95, 0.04, -1.58, 0.47, 1.13], [0.04, 0.95, 0.04, 0, 0.47, 1.13], [0.04, 0.95, 0.04, 1.58, 0.47, 1.13],
    [3.2, 0.03, 0.03, 0, 0.5, 1.13],
  ];
  // Stairs run along the wall down to the platform below: tilt a long box about Z.
  const fireEscape = (floorH) => merged([...fe,
    [Math.hypot(2.4, floorH), 0.05, 0.55, 0, -floorH / 2, 0.55, 0, 0, Math.atan2(floorH, 2.4)],
    [Math.hypot(2.4, floorH), 0.03, 0.03, 0, -floorH / 2 + 0.85, 0.83, 0, 0, Math.atan2(floorH, 2.4)],
  ]);
  // Balcony: unit width slab plus a railing; scaled in X to the balcony width.
  const balconySlab = merged([[1, 0.16, 1.35, 0, 0, 0.67]]);
  const balconyRail = merged([[1, 1.0, 0.04, 0, 0.58, 1.33], [0.012, 1.0, 1.35, -0.5, 0.58, 0.67], [0.012, 1.0, 1.35, 0.5, 0.58, 0.67]]);
  // Awning: a sloped canvas and a short valance, unit width.
  const awning = (() => {
    const pos = [], uv = [];
    const quad = (a, b, c, d, ua, ub) => {
      pos.push(...a, ...b, ...c, ...a, ...c, ...d);
      uv.push(ua[0], ua[1], ub[0], ua[1], ub[0], ub[1], ua[0], ua[1], ub[0], ub[1], ua[0], ub[1]);
    };
    quad([-0.5, 0, 0], [0.5, 0, 0], [0.5, -0.7, 1.6], [-0.5, -0.7, 1.6], [0, 0], [1, 1]);
    quad([-0.5, -0.7, 1.6], [0.5, -0.7, 1.6], [0.5, -1.0, 1.6], [-0.5, -1.0, 1.6], [0, 0], [1, 0.3]);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.computeVertexNormals();
    return g;
  })();
  const sign = new THREE.PlaneGeometry(1, 1);
  const antenna = merged([[0.08, 1, 0, 0, 0.5, 0, 0, 0, 0, 'cyl']]);
  // Unit shapes for trim and crowns. All stand on y = 0 except the box and the drum,
  // which are centred like the facade parts they dress.
  const drum = new THREE.CylinderGeometry(0.5, 0.5, 1, 24);
  const round = new THREE.CylinderGeometry(0.5, 0.5, 1, 56, 1);
  const pyramid = new THREE.ConeGeometry(Math.SQRT1_2, 1, 4, 1, false, Math.PI / 4).toNonIndexed();
  pyramid.translate(0, 0.5, 0);
  pyramid.computeVertexNormals();
  const cone = new THREE.ConeGeometry(0.5, 1, 32);
  cone.translate(0, 0.5, 0);
  const dome = new THREE.SphereGeometry(0.5, 28, 10, 0, Math.PI * 2, 0, Math.PI / 2);
  // A gable: a triangle facing +Z, as deep as it is wide.
  const gable = new THREE.Shape();
  gable.moveTo(-0.5, 0); gable.lineTo(0.5, 0); gable.lineTo(0, 1); gable.closePath();
  const prism = new THREE.ExtrudeGeometry(gable, { depth: 1, bevelEnabled: false });
  prism.translate(0, 0, -0.5);
  return { acUnit, tank, fireEscape, balconySlab, balconyRail, awning, sign, antenna, drum, round, pyramid, cone, dome, prism };
}

function signAtlas(renderer) {
  // 2 columns x 8 rows of 512x128 shop signs.
  return canvasTexture(renderer, 1024, 1024, (c) => {
    SHOP_NAMES.forEach((name, i) => {
      const x = (i % 2) * 512, y = Math.floor(i / 2) * 128;
      const color = SIGN_COLORS[i % SIGN_COLORS.length];
      const dark = i % 3 === 0;
      c.fillStyle = dark ? '#121417' : ['#f4efe4', '#1d3b4a', '#5a1f1a'][i % 3];
      c.fillRect(x + 4, y + 4, 504, 120);
      c.strokeStyle = color;
      c.lineWidth = 6;
      c.strokeRect(x + 10, y + 10, 492, 108);
      c.font = '800 78px "Barlow Condensed", Impact, sans-serif';
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.shadowColor = color;
      c.shadowBlur = 16;
      c.fillStyle = i % 3 === 0 ? color : (i % 3 === 1 ? '#ffffff' : '#ffe9c2');
      c.fillText(name, x + 256, y + 68);
      c.shadowBlur = 0;
    });
  });
}

function stripeTexture(renderer) {
  return canvasTexture(renderer, 256, 32, (c, w, h) => {
    for (let i = 0; i < 8; i++) {
      c.fillStyle = i % 2 ? '#f4f1ea' : '#ffffff';
      c.fillRect((i * w) / 8, 0, w / 8, h);
      if (i % 2 === 0) { c.fillStyle = 'rgba(0,0,0,0.42)'; c.fillRect((i * w) / 8, 0, w / 8, h); }
    }
  }, { repeat: false });
}

const AROUND = [FACES.px, FACES.nx, FACES.pz, FACES.nz];
const doorMask = faces => faces.reduce((mask, f) => mask | (f.nx > 0 ? DOOR.px : f.nx < 0 ? DOOR.nx : f.nz > 0 ? DOOR.pz : DOOR.nz), 0);
// Where the shader puts the lobby doors on a wall this long: the middle of its middle bay.
const lobbyDoorAt = faceW => { const n = Math.max(Math.floor(faceW / 4.6), 1); return (Math.floor(n / 2) + 0.5) * (faceW / n) - faceW / 2; };

export function buildCity(scene, renderer) {
  const batches = new Map(); // `${kind}|${chunk}` -> records
  const colliders = [];
  const buildingTops = [];
  const emptyLots = [];
  const special = []; // individual meshes (hotel signs, canopies, garage signs, neon)
  const glow = []; // lit strips: crown bands, canopy soffits, lamp heads
  const beacons = [];
  const signs = []; // coastal neon
  const houses = [];

  const put = (kind, x, z, rec) => {
    const key = `${kind}|${chunkId(x, z)}`;
    if (!batches.has(key)) batches.set(key, []);
    batches.get(key).push(rec);
  };

  // A facade part. Parts standing on the ground block the car; `top: false` keeps small
  // rooftop pieces out of the list that occludes the sun.
  function fbox(x, z, w, d, y0, h, style, p, o = {}) {
    put(o.round ? 'facadeRound' : 'facade', x, z, { x, z, w, d, y0, h, style, ...p, ...o });
    if (o.top !== false) buildingTops.push({ x, z, w, d, h: y0 + h });
    if (y0 < 1 && o.solid !== false) colliders.push({ x, z, w: w / 2, d: d / 2 });
    return { x, z, w, d, y0, h, top: y0 + h };
  }
  const params = (style, wall, extra = {}) => ({
    wall, glass: pick(PALETTES.glass), seed: rand() * 100, shops: false, lobby: false, doors: 0,
    accent: pick(PALETTES.accent), variant: rand(), roof: ROOF.MEMBRANE, light: LIGHT.NONE,
    floorH: style === STYLE.CURTAIN ? range(3.7, 4.2) : style === STYLE.STUCCO ? 3.4 : style === STYLE.GARAGE ? 3.0 : range(3.2, 3.6),
    cellW: style === STYLE.CURTAIN ? range(1.6, 2.2) : style === STYLE.RIBBON ? range(2.4, 3.0) : style === STYLE.STUCCO ? range(3.8, 4.6)
      : style === STYLE.DECO ? range(2.2, 2.6) : style === STYLE.MOTEL ? 4.2 : style === STYLE.CONDO ? range(3.2, 3.8)
        : style === STYLE.PANEL ? range(1.5, 1.9) : range(2.8, 3.6),
    ...extra,
  });
  const blank = (color, extra = {}) => params(STYLE.BLANK, color, extra);
  const groundOf = p => (p.shops || p.lobby ? 4.8 : 0.9);
  // Height for a number of window rows above the street floor, plus parapet.
  const heightFor = (floors, p) => floors * p.floorH + groundOf(p) + 1.3 - SLAB_H;
  // Window layout as the shader computes it, so details line up with windows. Rows are
  // counted from the part's own base, so the storeys of a setback start at the setback.
  const grid = (b, p, f) => {
    const faceW = faceLength(b, f);
    const nCols = Math.max(Math.floor((faceW - 1) / p.cellW), 1);
    const groundH = groundOf(p);
    const base = b.y0 - SLAB_H;
    const rows = Math.max(0, Math.floor((b.h + SLAB_H - 1.3 - groundH) / p.floorH + 0.02));
    return { faceW, nCols, groundH, rows, colU: c => (c + 0.5 - nCols / 2) * p.cellW, rowY: r => base + groundH + r * p.floorH };
  };

  // --- Trim: the solid pieces that give a facade depth ------------------------
  // Plain boxes and drums in a few materials, instanced per chunk and dropped with distance.
  // ('trimMetal' and 'drumMetal' are the same pieces with a metal finish.)
  const box = (kind, x, y0, z, w, h, d, color) => put('trim', x, z, { pos: [x, y0 + h / 2, z], rot: 0, scale: [w, h, d], color, metal: kind === 'trimMetal' ? 1 : 0 });
  const drum = (kind, x, y0, z, dia, h, color) => put('drum', x, z, { pos: [x, y0 + h / 2, z], rot: 0, scale: [dia, h, dia], color, metal: kind === 'drumMetal' ? 1 : 0 });
  // A piece on face f of part b: centred t along the face, standing `depth` proud of it.
  function onFace(kind, b, f, t, along, depth, y0, h, color) {
    const [x, z] = facePoint(b, f, t, depth / 2 - 0.04);
    box(kind, x, y0, z, f.nx ? depth + 0.08 : along, h, f.nx ? along : depth + 0.08, color);
  }
  // A band right round a part. (It runs through the building, so keep its top below the roof.)
  const belt = (kind, b, y0, h, out, color) => box(kind, b.x, y0, b.z, b.w + out * 2, h, b.d + out * 2, color);
  // Upright fins or piers on the lines between bays.
  function fins(kind, b, p, f, { every = 1, depth = 0.45, width = 0.14, from = null, to = null, color }) {
    const g = grid(b, p, f);
    const y0 = from ?? g.rowY(0), y1 = to ?? b.top - 0.3;
    if (y1 - y0 < 2) return;
    for (let c = 0; c <= g.nCols; c += every) onFace(kind, b, f, (c - g.nCols / 2) * p.cellW, width, depth, y0, y1 - y0, color);
  }
  // A ledge at every storey, `at` of a storey above the floor line.
  function ledges(kind, b, p, { every = 1, depth = 0.5, thick = 0.14, at = 0, from = 0, color }) {
    const g = grid(b, p, FACES.pz);
    for (let r = from; r <= g.rows; r += every) {
      const y = g.rowY(r) + at * p.floorH;
      if (y < b.top - 0.6) belt(kind, b, y - thick / 2, thick, depth, color);
    }
  }
  // Cornice: a lower moulding under a projecting top course. The top course carries the
  // roof, so it is a facade part; whatever stands on the roof stands on it.
  function cornice(b, color, size = 1) {
    belt('trim', b, b.top - 0.55 * size, 0.36 * size, 0.3 * size, shade(color, -0.1));
    const cap = fbox(b.x, b.z, b.w + 1.1 * size, b.d + 1.1 * size, b.top - 0.19 * size, 0.7 * size, STYLE.BLANK, blank(color), { top: false });
    b.roofY = cap.top;
  }
  // A canopy over a lobby's doors: a slab with a lit soffit, on posts where it reaches far.
  function entrance(b, f, setback = 1) {
    const reach = Math.min(3.4, Math.max(1.1, setback - 0.3));
    const t = lobbyDoorAt(faceLength(b, f));
    const [x, z] = facePoint(b, f, t, reach / 2);
    const w = f.nx ? reach : 6.2, d = f.nx ? 6.2 : reach;
    box('trimMetal', x, 4.32, z, w, 0.26, d, '#2a2d30');
    glow.push({ x, y: 4.3, z, w: w - 0.5, h: 0.05, d: d - 0.5, color: '#ffe2b0' });
    if (reach > 2.2) for (const side of [-1, 1]) {
      const [px, pz] = facePoint(b, f, t + side * 2.8, reach - 0.3);
      drum('drumMetal', px, SLAB_H, pz, 0.16, 4.32 - SLAB_H, '#2a2d30');
    }
  }
  // A plant room behind louvres, set in from the roof edge.
  function plantScreen(b, color, h = 4.6) {
    const s = fbox(b.x, b.z, Math.max(4, b.w - 5), Math.max(4, b.d - 5), b.roofY ?? b.top, h, STYLE.LOUVRE, params(STYLE.LOUVRE, color), { top: false });
    return s;
  }

  function roofKit(b, count, tank = false) {
    const y = b.roofY ?? b.top;
    for (let i = 0; i < count; i++) {
      const x = b.x + range(-b.w / 2 + 2.5, b.w / 2 - 2.5), z = b.z + range(-b.d / 2 + 2.5, b.d / 2 - 2.5);
      put('ac', x, z, { pos: [x, y, z], rot: pick([0, Math.PI / 2]), scale: [range(0.8, 1.6), range(0.8, 1.3), range(0.8, 1.5)], color: pick(['#b5b8b6', '#9a9d9c', '#c8c9c4']) });
    }
    if (tank) {
      const x = b.x + range(-b.w / 4, b.w / 4), z = b.z + range(-b.d / 4, b.d / 4);
      put('tank', x, z, { pos: [x, y, z], rot: 0, scale: [1, range(0.9, 1.15), 1], color: pick(['#6b4f36', '#5e4a3a', '#7a5a3e']) });
    }
  }
  function antenna(x, y, z, h) {
    put('antenna', x, z, { pos: [x, y, z], rot: 0, scale: [1, h, 1], color: '#9aa0a3' });
    beacons.push([x, y + h + 0.3, z]);
  }
  // A band of light round the top of a part.
  const crownLight = (b, color, y = b.top - 0.6, h = 0.7) => glow.push({ x: b.x, y, z: b.z, w: b.w + 0.5, h, d: b.d + 0.5, color, round: !!b.round });

  // Storefronts: lit signs above each shop and striped awnings on some.
  function storefronts(b, p, faces, withAwnings) {
    for (const f of faces) {
      const faceW = faceLength(b, f);
      const n = Math.max(Math.floor(faceW / 6), 1), shopW = faceW / n;
      const awningColor = pick(['#b8322a', '#2b6e8f', '#2f7a4f', '#d08a2a', '#6b3f8f', '#20304a']);
      for (let k = 0; k < n; k++) {
        const t = -faceW / 2 + (k + 0.5) * shopW;
        if (chance(0.78)) {
          const [x, z] = facePoint(b, f, t, 0.07);
          put('sign', x, z, { pos: [x, 4.1, z], rot: f.rot, scale: [(shopW - 0.8) * 0.78, 0.7, 1], sign: Math.floor(rand() * SHOP_NAMES.length), color: '#ffffff' });
        }
        if (withAwnings && chance(0.7)) {
          const [x, z] = facePoint(b, f, t, 0.02);
          put('awning', x, z, { pos: [x, 3.62, z], rot: f.rot, scale: [shopW * 0.86, 1, 1], color: chance(0.75) ? awningColor : pick(['#b8322a', '#2b6e8f', '#2f7a4f']) });
        }
      }
    }
  }
  // Piers standing proud between the shops, from the pavement to the moulding.
  function pilasters(b, f, color) {
    const faceW = faceLength(b, f);
    const n = Math.max(Math.floor(faceW / 6), 1), shopW = faceW / n;
    for (let k = 0; k <= n; k++) {
      const t = THREE.MathUtils.clamp(-faceW / 2 + k * shopW, -faceW / 2 + 0.3, faceW / 2 - 0.3);
      onFace('trim', b, f, t, 0.6, 0.2, SLAB_H, 4.5 - SLAB_H, color);
    }
  }
  function balconies(b, p, faces, every = 2, rail = 'glass', stagger = false) {
    for (const f of faces) {
      const g = grid(b, p, f);
      for (let r = 1; r < g.rows; r++) {
        for (let c = 0; c + every <= g.nCols; c += every) {
          if (stagger && (r + c / every) % 2) continue;
          const t = (g.colU(c) + g.colU(c + every - 1)) / 2;
          const width = every * p.cellW - 0.5;
          const [x, z] = facePoint(b, f, t, 0);
          const y = g.rowY(r) + 0.02;
          put('balconySlab', x, z, { pos: [x, y, z], rot: f.rot, scale: [width, 1, 1], color: '#d9d8d2' });
          put(rail === 'glass' ? 'balconyGlass' : 'balconyRail', x, z, { pos: [x, y, z], rot: f.rot, scale: [width, 1, 1], color: rail === 'glass' ? '#9fb6bf' : '#2a2c2d' });
        }
      }
    }
  }
  // Shallow iron balconies under the upper windows.
  function juliets(b, p, faces) {
    for (const f of faces) {
      const g = grid(b, p, f);
      for (let r = 1; r < g.rows; r++) {
        for (let c = 0; c < g.nCols; c++) {
          if (chance(0.35)) continue;
          const [x, z] = facePoint(b, f, g.colU(c), 0);
          const y = g.rowY(r) + 0.24 * p.floorH - 0.12, width = p.cellW * 0.5;
          put('balconySlab', x, z, { pos: [x, y, z], rot: f.rot, scale: [width, 0.7, 0.42], color: '#d9d2c4' });
          put('balconyRail', x, z, { pos: [x, y, z], rot: f.rot, scale: [width, 0.95, 0.42], color: '#24262a' });
        }
      }
    }
  }
  function fireEscapes(b, p, f) {
    const g = grid(b, p, f);
    if (g.nCols < 4 || g.rows < 3) return;
    const c = Math.floor(rand() * (g.nCols - 2)) + 1;
    const t = (g.colU(c) + g.colU(c + 1)) / 2;
    const [x, z] = facePoint(b, f, t, 0);
    for (let r = 1; r < g.rows; r++) put('fireEscape', x, z, { pos: [x, g.rowY(r), z], rot: f.rot, scale: [1, 1, 1], color: '#2b2e30', floorH: p.floorH });
  }
  // A lit name high on a wall.
  function corpSign(b, f) {
    if (faceLength(b, f) < 20) return;
    special.push({ kind: 'corp', b, f, name: pick(CORP_NAMES), color: pick(['#ffffff', '#bfe9ff', '#ffe2b0', '#ffb3a0']) });
  }

  // --- Building types -----------------------------------------------------
  const build = {
    tower(lot, faces, dw) {
      const pw = lot.w, pd = lot.d;
      const stone = pick(PALETTES.concrete);
      const lobby = chance(0.6);
      const podStyle = pick([STYLE.RIBBON, STYLE.PUNCHED, STYLE.PANEL]);
      const pp = params(podStyle, stone, { ...(lobby ? { lobby: true, doors: doorMask(faces) } : { shops: true }), roof: ROOF.TERRACE });
      const podium = fbox(lot.x, lot.z, pw, pd, SLAB_H, range(10, 16), podStyle, pp);
      if (lobby) entrance(podium, faces[0], lot.setback ?? 6);
      else {
        storefronts(podium, null, faces, false);
        for (const f of faces) pilasters(podium, f, shade(stone, 0.08));
      }
      belt('trim', podium, 4.5, 0.3, 0.2, shade(stone, 0.1));
      belt('trim', podium, podium.top - 0.5, 0.34, 0.28, shade(stone, 0.12));
      roofKit({ ...podium, x: lot.x + pw * 0.3, w: pw * 0.3, d: pd * 0.4 }, 3);

      const p = params(STYLE.CURTAIN, pick(PALETTES.tower));
      const h = 70 + dw * range(70, 150);
      const tw = Math.min(pw - 10, range(30, 46)), td = Math.min(pd - 10, range(30, 46));
      const metal = pick(PALETTES.trimMetal), light = pick(PALETTES.crown);
      const shape = weightedPick({ stepped: 3, round: 1.7, twin: 1.4, framed: 1.5, crowned: 1.7 });
      let b; // the highest part
      if (shape === 'round') {
        // A drum, stepping in once if it is tall, ringed at each top.
        const dia = Math.max(22, Math.min(tw, td));
        const split = h > 120;
        b = fbox(lot.x, lot.z, dia, dia, podium.top, split ? h * 0.66 : h, STYLE.CURTAIN, p, { round: true, roof: split ? ROOF.TERRACE : ROOF.HELIPAD });
        b.round = true;
        drum('drumMetal', b.x, b.top - 0.7, b.z, dia + 1.1, 0.5, metal);
        if (split) {
          crownLight(b, light, b.top - 0.15, 0.3);
          b = fbox(lot.x, lot.z, dia * 0.78, dia * 0.78, b.top, h * 0.34, STYLE.CURTAIN, p, { round: true, roof: ROOF.HELIPAD });
          b.round = true;
          drum('drumMetal', b.x, b.top - 0.7, b.z, b.w + 1.1, 0.5, metal);
        }
        crownLight(b, light);
        antenna(b.x, b.top, b.z, h > 140 ? 30 : 14);
      } else if (shape === 'twin') {
        // Two slabs either side of a dark core that rises above them both.
        const alongX = chance(0.5);
        const sw = alongX ? tw : tw * 0.46, sd = alongX ? td * 0.46 : td;
        const off = (alongX ? td : tw) * 0.27;
        b = fbox(lot.x - (alongX ? 0 : off), lot.z - (alongX ? off : 0), sw, sd, podium.top, h, STYLE.CURTAIN, p, { roof: ROOF.GRAVEL });
        const c = fbox(lot.x + (alongX ? 0 : off), lot.z + (alongX ? off : 0), sw, sd, podium.top, h * range(0.66, 0.86), STYLE.CURTAIN, { ...p, seed: rand() * 100 }, { roof: ROOF.TERRACE });
        const core = fbox(lot.x, lot.z, alongX ? tw * 0.3 : tw * 0.2, alongX ? td * 0.2 : td * 0.3, podium.top, h + 7, STYLE.BLANK, blank(shade(p.wall, -0.5)), { top: false });
        crownLight(b, light);
        crownLight(c, light);
        antenna(core.x, core.top, core.z, 18);
      } else if (shape === 'framed') {
        // A glass shaft inside a frame: piers up the corners, belts every eight floors,
        // and the frame carried on above the roof as an open crown.
        b = fbox(lot.x, lot.z, tw, td, podium.top, h, STYLE.CURTAIN, p, { roof: ROOF.GRAVEL });
        const fp = blank(pick(['#e4e2dc', '#cfcac0', '#3a3d41', '#d9d2c2']));
        for (const sx of [-1, 1]) for (const sz of [-1, 1]) fbox(b.x + sx * (tw / 2 - 0.4), b.z + sz * (td / 2 - 0.4), 2.4, 2.4, podium.top, h + 5.5, STYLE.BLANK, fp, { top: false });
        const g = grid(b, p, FACES.pz);
        for (let r = 8; r < g.rows - 3; r += 8) fbox(b.x, b.z, tw + 1.4, td + 1.4, g.rowY(r) - 0.1, 1.15, STYLE.BLANK, fp, { top: false });
        for (const s of [-1, 1]) {
          fbox(b.x, b.z + s * (td / 2 - 0.4), tw - 0.8, 1.2, b.top + 4.15, 1.2, STYLE.BLANK, fp, { top: false });
          fbox(b.x + s * (tw / 2 - 0.4), b.z, 1.2, td - 0.8, b.top + 4.15, 1.2, STYLE.BLANK, fp, { top: false });
        }
        crownLight(b, light, b.top + 0.2, 0.3);
        roofKit(b, 4);
        beacons.push([b.x + tw / 2 - 0.4, b.top + 6, b.z + td / 2 - 0.4]);
      } else if (shape === 'crowned') {
        // A plain shaft that steps in quickly at the top under a pyramid roof.
        b = fbox(lot.x, lot.z, tw, td, podium.top, h * 0.8, STYLE.CURTAIN, p, { roof: ROOF.TERRACE });
        if (chance(0.5)) for (const f of AROUND) fins('trimMetal', b, p, f, { every: 3, depth: 0.6, width: 0.16, color: metal });
        let w = tw, d = td;
        for (let i = 0; i < 3; i++) {
          w *= 0.8; d *= 0.8;
          b = fbox(lot.x, lot.z, w, d, b.top, h * 0.2 / 3, STYLE.CURTAIN, p, { roof: ROOF.GRAVEL });
        }
        const ph = Math.min(w, d) * range(0.8, 1.3);
        put('pyramid', b.x, b.z, { pos: [b.x, b.top, b.z], rot: 0, scale: [w, ph, d], color: pick(['#5f8f80', '#3b4046', '#8a8f93', '#a8874a']) });
        crownLight(b, light);
        antenna(b.x, b.top + ph - 0.5, b.z, 14);
      } else {
        // Setbacks, with fins up the glass on some.
        let w = tw, d = td, y = podium.top;
        const tiers = h > 120 ? 3 : h > 75 ? 2 : 1;
        const finned = chance(0.55), pent = chance(0.5);
        for (let t = 0; t < tiers; t++) {
          const last = t === tiers - 1;
          const th = last ? Math.max(h - (y - SLAB_H), 12) : h * range(0.42, 0.58) / (t + 1);
          b = fbox(lot.x, lot.z, w, d, y, th, STYLE.CURTAIN, p, { roof: last ? (pent ? ROOF.GRAVEL : ROOF.HELIPAD) : ROOF.TERRACE });
          if (finned) for (const f of AROUND) fins('trimMetal', b, p, f, { every: 2, depth: 0.5, width: 0.12, color: metal });
          y += th;
          w *= range(0.72, 0.86);
          d *= range(0.72, 0.86);
        }
        crownLight(b, light);
        if (pent) {
          const house = fbox(b.x, b.z, b.w * 0.45, b.d * 0.45, b.top, 6, STYLE.LOUVRE, params(STYLE.LOUVRE, '#7d8487'), { top: false });
          antenna(b.x, house.top, b.z, h > 140 ? 28 : 12);
        } else {
          roofKit(b, 4);
          beacons.push([b.x + b.w / 2 - 1, b.top + 0.8, b.z + b.d / 2 - 1]);
        }
      }
      if (h > 85 && shape !== 'round' && shape !== 'crowned' && chance(0.5)) corpSign(b, faces[0]);
    },
    office(lot, faces, dw) {
      const floors = Math.floor(range(9, 18) + dw * range(4, 12));
      const style = Number(weightedPick({ [STYLE.RIBBON]: 4, [STYLE.PUNCHED]: 3, [STYLE.PANEL]: 2.5 }));
      const wall = style === STYLE.PANEL ? pick(PALETTES.cladding) : pick(PALETTES.concrete);
      const lobby = chance(0.5);
      const p = params(style, wall, lobby ? { lobby: true, doors: doorMask(faces) } : { shops: true });
      const trimCol = chance(0.5) ? shade(wall, 0.22) : pick(['#e6e3dc', '#d2cec4', '#3c4044']);
      const look = style === STYLE.RIBBON ? weightedPick({ eyebrow: 5, piers: 3, plain: 2 })
        : style === STYLE.PUNCHED ? weightedPick({ grid: 3.5, fins: 2.5, piers: 2.5, plain: 1.5 }) : weightedPick({ plain: 6, fins: 4 });
      // What stands proud of the wall: sunshades over each strip of windows, a grid of
      // fins and slab edges, or piers running the height of the building.
      const dress = b => {
        if (look === 'eyebrow') ledges('trim', b, p, { depth: 0.6, thick: 0.13, at: 0.92, color: trimCol });
        if (look === 'grid') ledges('trim', b, p, { depth: 0.42, thick: 0.2, color: trimCol });
        if (look === 'grid' || look === 'fins') for (const f of AROUND) fins('trim', b, p, f, { every: style === STYLE.PANEL ? 2 : 1, depth: 0.42, width: 0.2, color: trimCol });
        if (look === 'piers') for (const f of AROUND) fins('trim', b, p, f, { every: 2, depth: 0.3, width: 0.6, color: trimCol });
      };
      let b;
      const ell = Math.min(lot.w, lot.d) >= 40 && chance(0.4);
      if (ell) {
        // An L: the main block across the lot, a lower wing running back from one end.
        const fx = chance(0.5) ? 1 : -1, fz = chance(0.5) ? 1 : -1;
        const mainD = lot.d * range(0.42, 0.52), wingW = lot.w * range(0.4, 0.52);
        b = fbox(lot.x, lot.z + fz * (lot.d - mainD) / 2, lot.w, mainD, SLAB_H, heightFor(floors, p), style, p);
        const wingFloors = Math.max(3, Math.floor(floors * range(0.45, 0.7)));
        const wing = fbox(lot.x + fx * (lot.w - wingW) / 2, lot.z - fz * mainD / 2, wingW, lot.d - mainD, SLAB_H, heightFor(wingFloors, p), style, { ...p, seed: rand() * 100, roof: ROOF.TERRACE });
        dress(wing);
        if (p.shops) storefronts(wing, p, faces, false);
        belt('trim', wing, 4.5, 0.3, 0.2, trimCol);
        roofKit(wing, 2);
      } else b = fbox(lot.x, lot.z, lot.w, lot.d, SLAB_H, heightFor(floors, p), style, p);
      dress(b);
      if (p.shops) storefronts(b, p, faces, false);
      else entrance(b, faces[0], lot.setback);
      belt('trim', b, 4.5, 0.3, 0.2, trimCol);
      let top = b;
      if (!ell && chance(0.45)) {
        top = fbox(b.x + range(-2, 2), b.z + range(-2, 2), lot.w * range(0.6, 0.75), lot.d * range(0.6, 0.75), b.top, range(8, 20), style, { ...p, shops: false, lobby: false, doors: 0 });
        dress(top);
      }
      if (chance(0.5)) {
        const screen = plantScreen(top, shade(wall, -0.25));
        beacons.push([screen.x, screen.top + 0.3, screen.z]);
      } else {
        const house = fbox(top.x, top.z, top.w * 0.35, top.d * 0.35, top.top, 4.5, STYLE.BLANK, blank('#8d8f8c'), { top: false });
        roofKit(top, 5);
        beacons.push([house.x, house.top + 0.3, house.z]);
      }
      if (floors > 14 && chance(0.3)) corpSign(top, faces[0]);
    },
    deco(lot, faces, dw) {
      const stone = pick(PALETTES.stone);
      const p = params(STYLE.DECO, stone, { shops: true, accent: pick(PALETTES.brass), light: LIGHT.BASE });
      const h = 50 + dw * range(30, 90);
      let w = lot.w, d = lot.d, y = SLAB_H, b;
      const tiers = 3 + (h > 100 ? 1 : 0);
      for (let t = 0; t < tiers; t++) {
        const th = t === 0 ? h * 0.45 : h * 0.55 / (tiers - 1);
        b = fbox(lot.x, lot.z, w, d, y, th, STYLE.DECO, t === 0 ? p : { ...p, shops: false, light: t === tiers - 1 ? LIGHT.CROWN : LIGHT.NONE });
        if (t === 0) {
          storefronts(b, p, faces, chance(0.4));
          for (const f of faces) pilasters(b, f, shade(stone, 0.05));
        }
        // Stone piers standing proud of the wall between every second pair of windows.
        for (const f of AROUND) fins('trim', b, p, f, { every: 2, depth: 0.38, width: 0.72, color: shade(stone, 0.06), to: b.top - 0.6 });
        cornice(b, '#e6dcc6');
        y += th;
        w *= range(0.7, 0.8);
        d *= range(0.7, 0.8);
      }
      // A lantern under a pyramid roof, and a mast.
      const cw = Math.max(4, w * 0.55), cd = Math.max(4, d * 0.55);
      const lantern = fbox(b.x, b.z, cw, cd, b.roofY ?? b.top, 7, STYLE.DECO, { ...p, shops: false, light: LIGHT.CROWN }, { top: false });
      const ph = Math.min(cw, cd) * 1.5;
      put('pyramid', b.x, b.z, { pos: [b.x, lantern.top, b.z], rot: 0, scale: [cw + 0.6, ph, cd + 0.6], color: pick(['#5f8f80', '#6f9a8a', '#a8874a', '#4a5560']) });
      antenna(b.x, lantern.top + ph - 0.6, b.z, 14);
      crownLight(lantern, pick(['#ffe2b0', '#bfe3ff']), lantern.top - 0.3, 0.5);
    },
    brick(lot, faces) {
      const p = params(STYLE.BRICK, pick(PALETTES.brick), { shops: chance(0.75), floorH: range(3.1, 3.4) });
      if (!p.shops) p.doors = doorMask(faces);
      const floors = Math.floor(range(4, 8));
      const b = fbox(lot.x, lot.z, lot.w, lot.d, SLAB_H, heightFor(floors, p), STYLE.BRICK, p);
      if (p.shops) {
        storefronts(b, p, faces, chance(0.5));
        for (const f of faces) pilasters(b, f, '#b8ab98');
        belt('trim', b, 4.5, 0.3, 0.18, '#b8ab98');
      }
      cornice(b, '#b8ab98');
      for (const f of faces.slice(0, 2)) if (chance(0.8)) fireEscapes(b, p, f);
      roofKit(b, 2, chance(0.8));
    },
    condo(lot, faces, dw) {
      const wall = pick(PALETTES.condo);
      const lobby = chance(0.5);
      const p = params(STYLE.CONDO, wall, { ...(lobby ? { lobby: true } : { shops: chance(0.6) }), floorH: 3.2, roof: ROOF.TERRACE });
      if (!p.shops) p.doors = doorMask(lobby ? [faces[0]] : faces);
      const floors = Math.floor(range(6, 12) + dw * 8);
      const b = fbox(lot.x, lot.z, lot.w, lot.d, SLAB_H, heightFor(floors, p), STYLE.CONDO, p);
      if (p.shops) storefronts(b, p, faces, false);
      else if (lobby) entrance(b, faces[0], lot.setback);
      const look = pick(['grid', 'grid', 'stagger', 'plain']);
      const white = shade(wall, 0.3);
      // Party walls between the balconies, from the first floor to the roof.
      if (look === 'grid') for (const f of faces) fins('trim', b, p, f, { every: 2, depth: 1.45, width: 0.24, color: white, from: grid(b, p, f).rowY(1) - 0.3 });
      balconies(b, p, faces, 2, 'glass', look === 'stagger');
      if (p.shops || lobby) belt('trim', b, 4.5, 0.3, 0.2, white);
      belt('trim', b, b.top - 0.62, 0.36, 0.36, white);
      fbox(b.x, b.z, b.w * 0.5, b.d * 0.5, b.top, 5.4, STYLE.CONDO, { ...p, shops: false, lobby: false, doors: 0, seed: rand() * 100, roof: ROOF.GRAVEL }, { top: false });
      roofKit(b, 3);
    },
    hotel(lot, faces, dw) {
      const wall = pick(['#efe6d4', '#e2d3bd', '#d8dfe2', '#f2ddd0']);
      const f = faces[0] || FACES.pz;
      const p = params(STYLE.CONDO, wall, { lobby: true, doors: doorMask([f]), floorH: 3.3, light: LIGHT.BASE, roof: ROOF.TERRACE });
      const w = Math.min(lot.w, range(26, 38)), d = Math.min(lot.d, range(18, 26));
      const floors = Math.floor(range(10, 16) + dw * 6);
      const b = fbox(lot.x, lot.z, w, d, SLAB_H, heightFor(floors, p), STYLE.CONDO, p);
      balconies(b, p, faces.length ? faces : [FACES.pz], 1, 'metal');
      special.push({ kind: 'hotel', b, f, name: pick(HOTEL_NAMES), t: lobbyDoorAt(faceLength(b, f)) });
      belt('trim', b, 4.5, 0.32, 0.25, shade(wall, 0.15));
      belt('trim', b, b.top - 0.62, 0.4, 0.4, shade(wall, 0.15));
      crownLight(b, '#ffe2b0', b.top - 0.12, 0.2);
      roofKit(b, 3);
    },
    shops(lot, faces) {
      const two = chance(0.5);
      const wall = chance(0.6) ? pick(PALETTES.stucco) : pick(PALETTES.concrete);
      const p = params(STYLE.PUNCHED, wall, { shops: true });
      const b = fbox(lot.x, lot.z, lot.w, lot.d, SLAB_H, two ? heightFor(1, p) : 6.0, STYLE.PUNCHED, p);
      const fronts = faces.length ? faces : [FACES.pz];
      storefronts(b, p, fronts, true);
      for (const f of fronts) {
        pilasters(b, f, shade(wall, 0.12));
        if (!two && chance(0.55)) {
          // A false front: the parapet steps up over the middle of the shops.
          const fw = faceLength(b, f) * range(0.35, 0.6);
          const [x, z] = facePoint(b, f, 0, -0.3);
          fbox(x, z, f.nx ? 0.6 : fw, f.nx ? fw : 0.6, b.top, range(1.0, 1.9), STYLE.BLANK, blank(wall), { top: false });
        }
      }
      cornice(b, '#cfc6b4');
      roofKit(b, Math.floor(range(2, 5)));
    },
    garage(lot, faces) {
      const wall = pick(['#b3ada2', '#a7a49c', '#c0b8aa']);
      const p = params(STYLE.GARAGE, wall, { floorH: 3.0, roof: ROOF.GRAVEL });
      const decks = Math.floor(range(4, 7));
      const b = fbox(lot.x, lot.z, lot.w, lot.d, SLAB_H, decks * 3.0 + 1.4, STYLE.GARAGE, p);
      special.push({ kind: 'garage', b, f: faces[0] || FACES.pz });
      // A rail along the top of each deck's wall, and the stair tower on a corner.
      for (let k = 0; k <= decks; k++) belt('trimMetal', b, 0.3 + k * 3.0 + 0.92, 0.12, 0.1, '#8d9296');
      const sx = chance(0.5) ? 1 : -1, sz = chance(0.5) ? 1 : -1;
      const stair = fbox(b.x + sx * (b.w / 2 - 2.3), b.z + sz * (b.d / 2 - 2.3), 5.2, 5.2, SLAB_H, b.h + 4, STYLE.PUNCHED,
        params(STYLE.PUNCHED, shade(wall, 0.1), { cellW: 3.4, floorH: 3.0 }), { solid: false, top: false });
      crownLight(stair, '#bfe3ff', stair.top - 0.5, 0.35);
      // Lamps on the top deck.
      for (const [lx, lz] of [[-0.25, -0.25], [0.25, -0.25], [-0.25, 0.25], [0.25, 0.25]]) {
        const x = b.x + lx * b.w, z = b.z + lz * b.d;
        drum('drumMetal', x, b.top, z, 0.14, 5, '#5a5f63');
        glow.push({ x, y: b.top + 5.05, z, w: 0.9, h: 0.14, d: 0.35, color: '#dcecff' });
      }
      roofKit(b, 1);
    },
    stucco(lot, faces) {
      const shops = faces.length > 0 && chance(0.8);
      const wall = pick(PALETTES.stucco);
      const p = params(STYLE.STUCCO, wall, { shops, accent: pick(PALETTES.dado), doors: shops ? 0 : doorMask(faces) });
      const floors = Math.floor(range(2, 5));
      const style = chance(0.8) ? STYLE.STUCCO : STYLE.PUNCHED;
      const b = fbox(lot.x, lot.z, lot.w, lot.d, SLAB_H, heightFor(floors, p), style, p);
      if (shops) {
        storefronts(b, p, faces, chance(0.6));
        for (const f of faces) pilasters(b, f, shade(wall, 0.1));
      }
      if (chance(0.8)) {
        const rise = Math.min(b.w, b.d) * 0.22;
        put('tileRoof', b.x, b.z, { pos: [b.x, b.top, b.z], rot: 0, scale: [b.w, rise, b.d] });
        if (chance(0.6)) {
          // Chimney.
          const x = b.x + range(-0.3, 0.3) * b.w, z = b.z + range(-0.3, 0.3) * b.d;
          box('trim', x, b.top, z, 0.9, rise + 1.0, 0.9, shade(wall, -0.06));
          box('trim', x, b.top + rise + 1.0, z, 1.15, 0.16, 1.15, '#8a5a40');
        }
      } else roofKit(b, 2);
      if (style === STYLE.STUCCO && floors > 2 && chance(0.5)) juliets(b, p, faces);
      const west = faces.find(f => f.nx === -1);
      if (west && chance(0.6)) {
        signs.push({ x: b.x - b.w / 2 - 0.12, z: b.z, y: (shops ? 4.8 : 1.2) + 1.8, face: 'west', text: pick(['MOTEL', 'TACOS', 'SURF SHOP', 'LIQUOR', 'PIZZA', 'COCKTAILS', 'ICE CREAM', 'BAIT & TACKLE']), color: pick(['#ff4f7b', '#5ff2ff', '#ffd25a', '#ff7a3d', '#9dff6a']) });
      }
    },
    motel(lot, faces) {
      const f = faces[0] || FACES.pz;
      const p = params(STYLE.MOTEL, pick(PALETTES.stucco), { floorH: 3.0, accent: pick(PALETTES.dado) });
      // A long two-storey bar set back behind its parking, facing the street.
      const along = faceLength(lot, f), depth = f.nx ? lot.w : lot.d;
      const barDepth = Math.min(depth * 0.5, 12);
      const back = depth / 2 - barDepth / 2;
      const cx = lot.x - f.nx * back, cz = lot.z - f.nz * back;
      const bw = f.nx ? barDepth : along * 0.92, bd = f.nx ? along * 0.92 : barDepth;
      const b = fbox(cx, cz, bw, bd, SLAB_H, heightFor(2, p), STYLE.MOTEL, p);
      // Upper walkway with a railing along the room doors, on posts.
      const fl = faceLength(b, f);
      const [wx, wz] = facePoint(b, f, 0, 0);
      put('balconySlab', wx, wz, { pos: [wx, 0.9 + 3.0 + 0.02, wz], rot: f.rot, scale: [fl - 0.4, 1, 1.15], color: '#e6e1d6' });
      put('balconyRail', wx, wz, { pos: [wx, 0.9 + 3.0 + 0.02, wz], rot: f.rot, scale: [fl - 0.4, 1, 1.15], color: '#e8e4da' });
      for (let t = -fl / 2 + 0.5; t <= fl / 2 - 0.4; t += 4.2) {
        const [px, pz] = facePoint(b, f, t, 1.4);
        drum('drum', px, SLAB_H, pz, 0.16, 3.68, '#e8e4da');
      }
      put('tileRoof', b.x, b.z, { pos: [b.x, b.top, b.z], rot: 0, scale: [b.w, Math.min(b.w, b.d) * 0.28, b.d] });
      const [sx, sz] = facePoint(lot, f, -faceLength(lot, f) / 2 + 4, -2);
      special.push({ kind: 'motelSign', x: sx, z: sz, f, name: pick(['SEA BREEZE', 'SUNSET', 'PALM VIEW', 'BLUE WAVE']) });
      emptyLots.push({ x: lot.x + f.nx * barDepth / 2, z: lot.z + f.nz * barDepth / 2, w: f.nx ? depth - barDepth : along, d: f.nx ? along : depth - barDepth, parking: true });
    },
    warehouse(lot, faces) {
      const p = params(STYLE.METAL, pick(PALETTES.metal), { floorH: 9, roof: ROOF.SKYLIGHTS });
      const b = fbox(lot.x, lot.z, lot.w, lot.d, SLAB_H, range(8, 11.5), STYLE.METAL, p);
      // A canopy over the loading doors, and a raised monitor along the ridge.
      const f = faces[0];
      if (f) onFace('trimMetal', b, f, 0, faceLength(b, f) * 0.82, Math.min(2.4, (lot.setback ?? 1) + 1.2), 4.9, 0.16, '#5a5f63');
      const longX = b.w > b.d;
      box('trimMetal', b.x, b.top, b.z, longX ? b.w * 0.7 : 2.6, 1.1, longX ? 2.6 : b.d * 0.7, '#7d8388');
      roofKit(b, Math.floor(range(1, 4)));
    },
    // A bank, a library, a town hall: dressed stone behind a row of columns and a pediment.
    civic(lot, faces) {
      const stone = pick(['#d9d2c0', '#cfc8b8', '#e0d8c8', '#c9c2b2']);
      const f = faces[0] || FACES.pz;
      const p = params(STYLE.DECO, stone, { floorH: 5.4, cellW: 3.6, accent: pick(PALETTES.brass), light: LIGHT.BASE });
      const along = faceLength(lot, f), deep = f.nx ? lot.w : lot.d;
      const porch = Math.min(6.5, deep * 0.22);
      // The hall stands back from the street behind its steps.
      const b = fbox(lot.x - f.nx * porch / 2, lot.z - f.nz * porch / 2, f.nx ? deep - porch : along, f.nx ? along : deep - porch, SLAB_H, heightFor(3, p), STYLE.DECO, p);
      cornice(b, shade(stone, 0.08), 1.3);
      const pw = Math.min(along * 0.62, 30), baseH = 1.1, colH = b.h * 0.6;
      const light = shade(stone, 0.1);
      for (let k = 0; k < 3; k++) onFace('trim', b, f, 0, pw + 2.6 - k * 0.5, porch - 0.3 - k * 0.85, SLAB_H, (k + 1) * baseH / 3, shade(stone, -0.08));
      const colAt = porch - 2.85; // the columns stand on the top step
      const n = Math.max(4, 2 * Math.round(pw / 7));
      const y0 = SLAB_H + baseH;
      for (let i = 0; i < n; i++) {
        const [x, z] = facePoint(b, f, -pw / 2 + 0.8 + (i / (n - 1)) * (pw - 1.6), colAt);
        box('trim', x, y0, z, 1.5, 0.3, 1.5, light);
        drum('drum', x, y0 + 0.3, z, 1.12, colH - 0.6, light);
        box('trim', x, y0 + colH - 0.3, z, 1.5, 0.3, 1.5, light);
      }
      onFace('trim', b, f, 0, pw + 1.4, colAt + 0.85, y0 + colH, 1.5, light);
      const [gx, gz] = facePoint(b, f, 0, (colAt + 1.0) / 2 - 0.04);
      put('prism', gx, gz, { pos: [gx, y0 + colH + 1.5, gz], rot: f.rot, scale: [pw + 2.2, pw * 0.17, colAt + 1.08], color: light });
      glow.push({ x: gx, y: y0 + colH - 0.05, z: gz, w: f.nx ? colAt - 0.6 : pw - 2, h: 0.06, d: f.nx ? pw - 2 : colAt - 0.6, color: '#ffe2b0' });
      // Bronze doors behind the columns.
      onFace('trimMetal', b, f, 0, 3.4, 0.22, y0, 5.4, '#5a4026');
      const [cx, cz] = facePoint(b, f, 0, (porch - 0.3) / 2);
      colliders.push({ x: cx, z: cz, w: (f.nx ? porch - 0.3 : pw + 2.6) / 2, d: (f.nx ? pw + 2.6 : porch - 0.3) / 2 });
      if (chance(0.4)) {
        // A dome on a drum, with a small lantern.
        const dia = Math.min(b.w, b.d) * 0.44, y = b.roofY ?? b.top;
        const copper = pick(['#6f9a8a', '#5f8f80', '#a8874a']);
        drum('drum', b.x, y, b.z, dia, 3.4, light);
        put('dome', b.x, b.z, { pos: [b.x, y + 3.4, b.z], rot: 0, scale: [dia * 0.97, dia * 0.97, dia * 0.97], color: copper });
        drum('drum', b.x, y + 3.4 + dia * 0.47, b.z, dia * 0.13, 1.8, light);
        put('cone', b.x, b.z, { pos: [b.x, y + 5.2 + dia * 0.47, b.z], rot: 0, scale: [dia * 0.17, 1.6, dia * 0.17], color: copper });
      } else roofKit(b, 2);
    },
    // The city's tallest building: a round shaft with a flared crown, on its own plaza.
    landmark(cx, cz) {
      const metal = '#c9ccce';
      const p = params(STYLE.CURTAIN, '#d4d7d9', { glass: [0.13, 0.25, 0.3], cellW: 1.9, floorH: 4.0, variant: 0.9, accent: metal });
      const base = fbox(cx, cz, 48, 48, SLAB_H, 14, STYLE.CURTAIN, { ...p, lobby: true, roof: ROOF.TERRACE }, { round: true });
      drum('drumMetal', cx, base.top - 0.7, cz, 49.2, 0.5, metal);
      const shaft = fbox(cx, cz, 30, 30, base.top, 236, STYLE.CURTAIN, p, { round: true, roof: ROOF.GRAVEL });
      for (let y = base.top + 40; y < shaft.top - 20; y += 40) drum('drumMetal', cx, y, cz, 31, 0.6, metal);
      // Decks flare out under the lantern; a cone and a mast finish it.
      let y = shaft.top;
      const deck = (dia, h) => {
        const b = fbox(cx, cz, dia, dia, y, h, STYLE.CURTAIN, { ...p, seed: rand() * 100 }, { round: true, top: false });
        y += h;
        return b;
      };
      deck(33, 3.2);
      deck(37, 3.2);
      const lookout = deck(41, 6.5);
      glow.push({ x: cx, y: lookout.y0 + 0.2, z: cz, w: 41.7, h: 0.5, d: 41.7, round: true, pulse: true });
      glow.push({ x: cx, y: lookout.top - 0.3, z: cz, w: 41.7, h: 0.4, d: 41.7, round: true, pulse: true });
      deck(35, 4);
      const cap = deck(27, 8);
      glow.push({ x: cx, y: cap.top - 0.3, z: cz, w: 27.6, h: 0.4, d: 27.6, round: true, pulse: true });
      put('cone', cx, cz, { pos: [cx, y, cz], rot: 0, scale: [27.4, 26, 27.4], color: '#8a9196' });
      put('antenna', cx, cz, { pos: [cx, y + 24, cz], rot: 0, scale: [5, 60, 5], color: '#b9bdc0' });
      beacons.push([cx, y + 84.5, cz]);
      landmark = { x: cx, z: cz, top: y + 84 };
    },
  };

  // --- Lay out every block --------------------------------------------------
  let landmark = null;
  const catalog = []; // what was built where, for the map and for tests
  const half = BLOCK_SIZE / 2 - SIDEWALK; // usable lot half-size (61)
  for (const [cx, cz, blockPlan] of allBlocks()) {
    const key = `${cx},${cz}`;
    const plan = blockPlan.kind === 'mix' ? blockPlan.weights : blockPlan.kind;
    const dw = blockPlan.dw;
    if (plan === 'park') { emptyLots.push({ x: cx, z: cz, w: half * 2, d: half * 2, park: true }); continue; }
    if (plan === 'parking') {
      const b = fbox(cx - half + 14, cz - half + 11, 24, 18, SLAB_H, 5.5, STYLE.STUCCO, params(STYLE.STUCCO, pick(PALETTES.stucco), { shops: true }));
      storefronts(b, null, [FACES.nz], true);
      pilasters(b, FACES.nz, '#d9d2c4');
      const text = key === '80,240' ? 'GAS · 24H' : key === '-240,-400' ? 'SURF DINER' : LOT_SIGNS[Math.floor(hash2(cx + 3, cz + 9) * LOT_SIGNS.length)];
      signs.push({ x: b.x, z: b.z - b.d / 2 - 0.1, y: 7.6, face: 'north', text, color: '#ff6a5a' });
      emptyLots.push({ x: cx + 10, z: cz + 10, w: half * 1.6, d: half * 1.6, parking: true });
      continue;
    }
    if (plan === 'plaza' || plan === 'plaza-tall') {
      if (blockPlan.landmark) build.landmark(cx, cz);
      else {
        const s = range(46, 54);
        build.tower({ x: cx + range(-6, 6), z: cz + range(-6, 6), w: s, d: s, setback: 6 }, AROUND, plan === 'plaza-tall' ? Math.max(1.25, dw * 1.1) : Math.max(0.95, dw));
      }
      emptyLots.push({ x: cx, z: cz, w: half * 2, d: half * 2, plaza: true });
      continue;
    }
    const coastal = blockPlan.coastal;
    // Beach and hillside neighbourhoods are built in smaller lots than the centre.
    const small = coastal || blockPlan.district === 'eastside' || blockPlan.district === 'foothills';
    const lots = splitLots({ x0: cx - half, x1: cx + half, z0: cz - half, z1: cz + half }, small ? 18 : 22, small ? 44 : 64, []);
    // On a terraced block the buildings stand wall to wall; on the rest there are gaps.
    const terrace = chance(0.6);
    for (const r of lots) {
      const w = r.x1 - r.x0, d = r.z1 - r.z0;
      // Street-facing sides are the ones on the block edge.
      const faces = [];
      if (r.x0 <= cx - half + 0.5) faces.push(FACES.nx);
      if (r.x1 >= cx + half - 0.5) faces.push(FACES.px);
      if (r.z0 <= cz - half + 0.5) faces.push(FACES.nz);
      if (r.z1 >= cz + half - 0.5) faces.push(FACES.pz);
      if (chance(0.07) || !faces.length) { emptyLots.push({ x: (r.x0 + r.x1) / 2, z: (r.z0 + r.z1) / 2, w, d }); continue; }
      const fits = Object.fromEntries(Object.entries(plan).filter(([t]) => Math.min(w, d) >= MIN_SIDE[t]));
      const type = Object.keys(fits).length ? weightedPick(fits) : 'shops';
      // Setback from streets (towers sit back on a plaza), gaps between neighbours.
      const streetSet = type === 'tower' ? range(2, 6) : type === 'shops' || type === 'brick' ? range(0.2, 1) : range(0.5, 3);
      const inner = terrace && PARTY_WALLS.has(type) ? 0 : range(1.5, 4);
      const sx0 = faces.includes(FACES.nx) ? streetSet : inner, sx1 = faces.includes(FACES.px) ? streetSet : inner;
      const sz0 = faces.includes(FACES.nz) ? streetSet : inner, sz1 = faces.includes(FACES.pz) ? streetSet : inner;
      const lot = { x: (r.x0 + sx0 + r.x1 - sx1) / 2, z: (r.z0 + sz0 + r.z1 - sz1) / 2, w: w - sx0 - sx1, d: d - sz0 - sz1, setback: streetSet };
      catalog.push({ type, x: lot.x, z: lot.z, w: lot.w, d: lot.d, faces: faces.map(f => [f.nx, f.nz]) });
      build[type](lot, faces, dw);
    }
  }

  // Houses dotted over the hills.
  for (let i = 0; i < 620; i++) {
    const side = rand();
    const x = side < 0.6 ? range(EAST + 100, EAST + 760) : range(-300, EAST + 400);
    const z = side < 0.6 ? range(NORTH - 500, SOUTH + 500) : (chance(0.5) ? range(SOUTH + 140, SOUTH + 620) : range(NORTH - 620, NORTH - 140));
    houses.push([x, z]);
  }

  // --- Instanced meshes per kind and chunk ----------------------------------
  const geo = detailGeometries();
  const atlas = signAtlas(renderer);
  const stripes = stripeTexture(renderer);
  const boxGeo = new THREE.BoxGeometry(1, 1, 1);
  const facadeMat = makeFacadeMaterial();
  const signMat = new THREE.MeshStandardMaterial({ map: atlas, emissive: 0xffffff, emissiveMap: atlas, emissiveIntensity: 0.4, roughness: 0.5 });
  signMat.onBeforeCompile = sh => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec2 aSign;')
      .replace('#include <uv_vertex>', `#include <uv_vertex>
        vec2 atlasUv = uv * vec2(0.5, 0.125) + aSign;
        #ifdef USE_MAP
          vMapUv = atlasUv;
        #endif
        #ifdef USE_EMISSIVEMAP
          vEmissiveMapUv = atlasUv;
        #endif`);
  };
  signMat.customProgramCacheKey = () => 'shop-sign-atlas';
  const fireEscapeGeo = new Map();
  const matte = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.82 });
  // Trim is one material: each piece says whether it is painted or metal.
  const trimMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.82 });
  trimMat.onBeforeCompile = sh => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aMetal;\nvarying float vMetal;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvMetal = aMetal;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vMetal;')
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = mix(0.82, 0.38, vMetal);')
      .replace('#include <metalnessmap_fragment>', '#include <metalnessmap_fragment>\nmetalnessFactor = vMetal * 0.85;');
  };
  trimMat.customProgramCacheKey = () => 'trim';
  const roofing = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0.45 });
  const KINDS = {
    facade: { geometry: boxGeo, material: facadeMat, shadow: true, lod: 0 },
    facadeRound: { geometry: geo.round, material: facadeMat, shadow: true, lod: 0 },
    tileRoof: { geometry: hipRoofGeometry(), material: makeTileRoofMaterial(), shadow: true, lod: 1100 },
    ac: { geometry: geo.acUnit, material: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.55, metalness: 0.5 }), shadow: true, lod: 320 },
    tank: { geometry: geo.tank, material: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 }), shadow: true, lod: 420 },
    antenna: { geometry: geo.antenna, material: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4, metalness: 0.8 }), shadow: true, lod: 1400 },
    fireEscape: { geometry: null, material: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, metalness: 0.6 }), shadow: true, lod: 260 },
    balconySlab: { geometry: geo.balconySlab, material: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 }), shadow: true, lod: 340 },
    balconyGlass: { geometry: geo.balconyRail, material: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.08, metalness: 0.7, transparent: true, opacity: 0.55, depthWrite: false }), shadow: false, lod: 300 },
    balconyRail: { geometry: geo.balconyRail, material: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0.5 }), shadow: true, lod: 300 },
    awning: { geometry: geo.awning, material: new THREE.MeshStandardMaterial({ map: stripes, side: THREE.DoubleSide, roughness: 0.9 }), shadow: true, lod: 300 },
    sign: { geometry: geo.sign, material: signMat, shadow: false, lod: 520 },
    // Trim. Small pieces go with distance; crowns stay, they are the skyline.
    trim: { geometry: boxGeo, material: trimMat, shadow: true, lod: 640 },
    drum: { geometry: geo.drum, material: trimMat, shadow: true, lod: 900 },
    prism: { geometry: geo.prism, material: matte, shadow: true, lod: 1000 },
    pyramid: { geometry: geo.pyramid, material: roofing, shadow: true, lod: 0 },
    cone: { geometry: geo.cone, material: roofing, shadow: true, lod: 0 },
    dome: { geometry: geo.dome, material: roofing, shadow: true, lod: 0 },
  };
  const MIRROR_SKIP = new Set(['tileRoof', 'ac', 'tank', 'antenna', 'fireEscape', 'balconyGlass', 'balconyRail', 'balconySlab', 'trim', 'drum', 'prism']);
  const FACADES = new Set(['facade', 'facadeRound']);
  // The distance variant is swapped in by the LOD pass, after the scene's materials have been
  // patched for the atmosphere, so it is patched here.
  const facadeLow = patchAtmosphere(makeFacadeMaterial(true));
  const detail = { range: 360 }; // how far the full facade shader is used
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3(), color = new THREE.Color();
  const up = new THREE.Vector3(0, 1, 0);
  const counts = {};
  for (const [key, recs] of batches) {
    const [kind] = key.split('|');
    const def = KINDS[kind];
    counts[kind] = (counts[kind] || 0) + recs.length;
    if (kind === 'fireEscape') {
      // Fire escape stairs depend on floor height; group by it.
      const byH = new Map();
      for (const r of recs) { const k = r.floorH.toFixed(1); if (!byH.has(k)) byH.set(k, []); byH.get(k).push(r); }
      for (const [k, list] of byH) {
        if (!fireEscapeGeo.has(k)) fireEscapeGeo.set(k, geo.fireEscape(Number(k)));
        addMesh(kind, list, fireEscapeGeo.get(k), def);
      }
      continue;
    }
    addMesh(kind, recs, def.geometry, def);
  }
  function addMesh(kind, recs, geometry, def) {
    let g = geometry;
    const isTrim = kind === 'trim' || kind === 'drum';
    if (FACADES.has(kind) || kind === 'sign' || isTrim) g = geometry.clone();
    const mesh = new THREE.InstancedMesh(g, def.material, recs.length);
    if (FACADES.has(kind)) {
      const aStyle = new Float32Array(recs.length * 4), aGlass = new Float32Array(recs.length * 4), aAccent = new Float32Array(recs.length * 4);
      recs.forEach((b, i) => {
        m.compose(p.set(b.x, b.y0 + b.h / 2, b.z), q.identity(), s.set(b.w, b.h, b.d));
        mesh.setMatrixAt(i, m);
        mesh.setColorAt(i, color.set(b.wall));
        aStyle.set([b.style, b.floorH, b.cellW, b.seed], i * 4);
        aGlass.set([...b.glass, facadeCode({ ground: b.lobby ? GROUND.LOBBY : b.shops ? GROUND.SHOPS : GROUND.PLINTH, round: !!b.round, roof: b.roof, light: b.light, doors: b.doors })], i * 4);
        color.set(b.accent);
        aAccent.set([color.r, color.g, color.b, b.variant], i * 4);
      });
      g.setAttribute('aStyle', new THREE.InstancedBufferAttribute(aStyle, 4));
      g.setAttribute('aGlass', new THREE.InstancedBufferAttribute(aGlass, 4));
      g.setAttribute('aAccent', new THREE.InstancedBufferAttribute(aAccent, 4));
    } else {
      const aSign = kind === 'sign' ? new Float32Array(recs.length * 2) : null;
      if (isTrim) g.setAttribute('aMetal', new THREE.InstancedBufferAttribute(new Float32Array(recs.map(r => r.metal || 0)), 1));
      recs.forEach((r, i) => {
        q.setFromAxisAngle(up, r.rot || 0);
        m.compose(p.set(...r.pos), q, s.set(...r.scale));
        mesh.setMatrixAt(i, m);
        if (r.color) mesh.setColorAt(i, color.set(r.color));
        if (aSign) aSign.set([(r.sign % 2) * 0.5, 0.875 - Math.floor(r.sign / 2) * 0.125], i * 2);
      });
      if (aSign) g.setAttribute('aSign', new THREE.InstancedBufferAttribute(aSign, 2));
    }
    mesh.name = kind;
    mesh.castShadow = def.shadow;
    mesh.receiveShadow = true;
    mesh.userData.lod = def.lod;
    if (kind === 'balconyGlass') mesh.userData.noAO = true;
    // Roof kit and small wall details can't be seen from the mirror camera under the
    // water plane; layer 1 keeps them out of that pass.
    if (MIRROR_SKIP.has(kind)) mesh.layers.set(1);
    mesh.instanceMatrix.needsUpdate = true;
    mesh.computeBoundingSphere();
    mesh.computeBoundingBox();
    scene.add(mesh);
    // Distant chunks drop their small details, and their facades switch to a cheaper shader.
    if (FACADES.has(kind)) registerLod(mesh, 0, (dist, o) => { o.material = dist > detail.range ? facadeLow : facadeMat; });
    else registerLod(mesh, def.lod);
  }

  // Hotels: an entrance canopy, a vertical blade sign and a lit rooftop name.
  // Garages get a lit P; motels a roadside sign on a pole; some towers carry a name.
  const specialMeshes = [];
  const texCache = new Map();
  const signTex = (w, h, draw, key = null) => {
    if (key && texCache.has(key)) return texCache.get(key);
    const t = canvasTexture(renderer, w, h, draw);
    if (key) texCache.set(key, t);
    return t;
  };
  const matCache = new Map();
  const cached = (key, make) => { if (!matCache.has(key)) matCache.set(key, make()); return matCache.get(key); };
  const glowMat = (tex, extra = {}) => new THREE.MeshStandardMaterial({ color: 0x111111, map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.4, roughness: 0.5, ...extra });
  const darkMetal = new THREE.MeshStandardMaterial({ color: 0x1c2023, roughness: 0.45, metalness: 0.6 });
  const warmLight = new THREE.MeshStandardMaterial({ color: 0x332a20, emissive: 0xffd9a0, emissiveIntensity: 0.3 });
  const addSpecial = (mesh, x, z, glows = true, far = 700) => {
    mesh.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    if (mesh.isGroup) batchStatic(mesh);
    mesh.userData.glow = glows;
    scene.add(mesh);
    registerLod(mesh, far);
    specialMeshes.push({ mesh });
  };
  for (const sp of special) {
    if (sp.kind === 'hotel') {
      const { b, f, name, t } = sp;
      const fl = faceLength(b, f);
      const g = new THREE.Group();
      const color = pick(['#ffd27a', '#ff7aa8', '#7ad7ff']);
      // Canopy over the entrance with downlights.
      const canopy = new THREE.Mesh(new THREE.BoxGeometry(7, 0.35, 3.4), darkMetal);
      canopy.position.set(t, 4.25, 1.7);
      const under = new THREE.Mesh(new THREE.BoxGeometry(6.6, 0.05, 3.0), warmLight);
      under.position.set(t, 4.05, 1.7);
      g.add(canopy, under);
      for (const sx of [-3.2, 3.2]) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 4.1, 8), darkMetal);
        post.position.set(t + sx, 2.05, 3.3);
        g.add(post);
      }
      // Blade sign near the corner, readable along the street.
      const letters = name.replace('HOTEL ', '').replace('THE ', '');
      const blade = signTex(128, 1024, (c, w, h) => {
        c.fillStyle = '#121519'; c.fillRect(0, 0, w, h);
        c.strokeStyle = color; c.lineWidth = 6; c.strokeRect(8, 8, w - 16, h - 16);
        c.fillStyle = color; c.textAlign = 'center'; c.textBaseline = 'middle';
        c.shadowColor = color; c.shadowBlur = 14;
        const chars = letters.split('');
        const step = (h - 80) / chars.length;
        c.font = `800 ${Math.min(100, step * 0.95)}px "Barlow Condensed", Impact, sans-serif`;
        chars.forEach((ch, i) => c.fillText(ch, w / 2, 50 + step * (i + 0.5)));
      }, 'blade' + letters + color);
      const bladeMat = cached('blade' + letters + color, () => glowMat(blade));
      const bladeH = Math.min(14, b.top - 9);
      if (bladeH > 5) {
        const bladeMesh = new THREE.Mesh(new THREE.BoxGeometry(0.35, bladeH, 2.2), [bladeMat, bladeMat, darkMetal, darkMetal, darkMetal, darkMetal]);
        bladeMesh.position.set(fl / 2 - 2.2, 7 + bladeH / 2, 1.2);
        g.add(bladeMesh);
      }
      // Rooftop name in lights.
      const roofTex = signTex(1024, 128, (c, w, h) => {
        c.clearRect(0, 0, w, h);
        c.font = '800 104px "Barlow Condensed", Impact, sans-serif';
        c.textAlign = 'center'; c.textBaseline = 'middle';
        c.shadowColor = color; c.shadowBlur = 18; c.fillStyle = color;
        c.fillText(name, w / 2, h / 2 + 4);
        c.shadowBlur = 0; c.fillStyle = '#fff6e0'; c.fillText(name, w / 2, h / 2 + 4);
      }, 'roof' + name + color);
      const roofMat = cached('roof' + name + color, () => {
        const mat = glowMat(roofTex, { transparent: true, alphaTest: 0.05, color: 0x000000 });
        mat.userData.boost = 1.4;
        return mat;
      });
      const roofSign = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(fl * 0.85, 26), Math.min(fl * 0.85, 26) / 8), roofMat);
      roofSign.position.set(0, b.top - b.y0 + 1.9, -0.6);
      g.add(roofSign);
      const [x, z] = facePoint(b, f, 0, 0);
      g.position.set(x, SLAB_H, z);
      g.rotation.y = f.rot;
      addSpecial(g, x, z);
    } else if (sp.kind === 'corp') {
      const { b, f, name, color } = sp;
      const width = Math.min(faceLength(b, f) * 0.62, 24), height = width / 6.4;
      const tex = signTex(1024, 160, (c, w, h) => {
        c.clearRect(0, 0, w, h);
        c.font = '700 118px "Barlow Condensed", Impact, sans-serif';
        c.textAlign = 'center'; c.textBaseline = 'middle';
        c.shadowColor = color; c.shadowBlur = 16; c.fillStyle = color;
        c.fillText(name, w / 2, h / 2 + 6, w - 40);
        c.shadowBlur = 0; c.fillStyle = '#ffffff'; c.fillText(name, w / 2, h / 2 + 6, w - 40);
      }, 'corp' + name + color);
      const mat = cached('corp' + name + color, () => {
        const made = glowMat(tex, { transparent: true, alphaTest: 0.05, color: 0x000000 });
        made.userData.boost = 1.5;
        return made;
      });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), mat);
      const [x, z] = facePoint(b, f, 0, 0.14);
      mesh.position.set(x, b.top - 1.7 - height / 2, z);
      mesh.rotation.y = f.rot;
      addSpecial(mesh, x, z, true, 1700);
      mesh.castShadow = false;
    } else if (sp.kind === 'garage') {
      const { b, f } = sp;
      const tex = signTex(128, 128, (c, w, h) => {
        c.fillStyle = '#1d5fbf'; c.fillRect(0, 0, w, h);
        c.strokeStyle = '#ffffff'; c.lineWidth = 8; c.strokeRect(8, 8, w - 16, h - 16);
        c.fillStyle = '#ffffff'; c.font = '800 100px Arial, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
        c.fillText('P', w / 2, h / 2 + 6);
      }, 'garageP');
      const mat = cached('garageP', () => glowMat(tex, { color: 0xffffff }));
      const sign = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.8, 0.3), [darkMetal, darkMetal, darkMetal, darkMetal, mat, mat]);
      const [x, z] = facePoint(b, f, 0, 0.3); // mid-wall, clear of the stair tower on the corner
      sign.position.set(x, b.top - 2, z);
      sign.rotation.y = f.rot;
      addSpecial(sign, x, z);
    } else if (sp.kind === 'motelSign') {
      const { x, z, f, name } = sp;
      const tex = signTex(512, 256, (c, w, h) => {
        c.fillStyle = '#16303a'; c.fillRect(0, 0, w, h);
        c.strokeStyle = '#ff5a6e'; c.lineWidth = 10; c.strokeRect(10, 10, w - 20, h - 20);
        c.textAlign = 'center'; c.textBaseline = 'middle';
        c.shadowColor = '#ff5a6e'; c.shadowBlur = 20; c.fillStyle = '#ff7a8a';
        c.font = '800 110px "Barlow Condensed", Impact, sans-serif'; c.fillText('MOTEL', w / 2, 92);
        c.shadowColor = '#5fe8ff'; c.fillStyle = '#9ff3ff';
        c.font = '700 54px "Barlow Condensed", Impact, sans-serif'; c.fillText(name, w / 2, 186);
        c.shadowBlur = 0; c.fillStyle = '#ffd25a'; c.font = '700 30px Arial'; c.fillText('VACANCY', w / 2, 232);
      }, 'motel' + name);
      const mat = cached('motel' + name, () => glowMat(tex));
      const g = new THREE.Group();
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 7.5, 10), darkMetal);
      pole.position.y = 3.75;
      const board = new THREE.Mesh(new THREE.BoxGeometry(5.4, 2.7, 0.35), [darkMetal, darkMetal, darkMetal, darkMetal, mat, mat]);
      board.position.y = 8.6;
      g.add(pole, board);
      g.position.set(x, SLAB_H, z);
      g.rotation.y = f.rot + Math.PI / 2;
      addSpecial(g, x, z);
    }
  }

  // Lit strips: LED bands round the tops of towers, canopy soffits, lamp heads. They glow
  // after sunset. The landmark's rings have a material of their own, which changes colour.
  const glowMaterial = () => {
    const mat = new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.4 });
    // Instance color multiplies emissive too, via a tiny patch.
    mat.onBeforeCompile = sh => {
      sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n#ifdef USE_INSTANCING_COLOR\ntotalEmissiveRadiance *= vColor;\n#endif');
    };
    mat.customProgramCacheKey = () => 'crown';
    return mat;
  };
  const crownMat = glowMaterial(), pulseMat = glowMaterial();
  const glowMesh = (list, geometry, mat) => {
    if (!list.length) return;
    const mesh = new THREE.InstancedMesh(geometry, mat, list.length);
    list.forEach((c, i) => {
      m.compose(p.set(c.x, c.y, c.z), q.identity(), s.set(c.w, c.h, c.d));
      mesh.setMatrixAt(i, m);
      mesh.setColorAt(i, color.set(c.color || '#ffffff'));
    });
    mesh.layers.set(1);
    scene.add(mesh);
  };
  glowMesh(glow.filter(c => !c.round && !c.pulse), boxGeo, crownMat);
  glowMesh(glow.filter(c => c.round && !c.pulse), geo.drum, crownMat);
  glowMesh(glow.filter(c => c.pulse), geo.drum, pulseMat);

  // Blinking red aircraft beacons.
  const beaconMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(6, 0.3, 0.2) });
  const beaconMesh = new THREE.InstancedMesh(new THREE.SphereGeometry(0.45, 8, 6), beaconMat, beacons.length);
  beacons.forEach(([x, y, z], i) => {
    m.makeTranslation(x, y, z);
    beaconMesh.setMatrixAt(i, m);
  });
  scene.add(beaconMesh);

  // Hillside houses, small and simple; at night their windows twinkle.
  const houseMesh = buildHillHouses(scene, houses);

  // Neon shop signs on the coast.
  const signMeshes = [];
  for (const sg of signs) signMeshes.push(neonSign(scene, renderer, sg));

  const glowSpecial = new Set(specialMeshes.flatMap(({ mesh }) => {
    const mats = [];
    mesh.traverse(o => { if (o.isMesh) for (const mm of [].concat(o.material)) if (mm.emissiveMap || mm === warmLight) mats.push(mm); });
    return mats;
  }));
  const signMats = new Set(signMeshes.map(sm => sm.material));
  // Sun occlusion and line-of-sight tests only look at boxes near the ray.
  const topsGrid = new BoxGrid(160, b => [b.w / 2, b.d / 2]).addAll(buildingTops);

  const api = {
    colliders,
    buildingTops,
    emptyLots,
    topsGrid,
    landmark,
    catalog,
    stats: { buildings: colliders.length, facadeBoxes: (counts.facade || 0) + (counts.facadeRound || 0), pieces: counts },
    // How far from the camera the full facade shader (window recesses, rooms, joints) is used.
    setDetail(range) { detail.range = range; },
    update(night, time) {
      crownMat.emissiveIntensity = night * 1.6;
      // The landmark's rings drift between coral, amber and rose.
      pulseMat.emissive.setHSL((1.03 + 0.07 * Math.sin(time * 0.12)) % 1, 0.9, 0.56);
      pulseMat.emissiveIntensity = night * (2.0 + 0.4 * Math.sin(time * 0.7));
      beaconMat.color.setRGB(8 * (0.15 + 0.85 * night) * (Math.sin(time * 3.2) > 0.2 ? 1 : 0.04), 0.25, 0.15);
      signMat.emissiveIntensity = 0.3 + night * 2.0;
      for (const mm of glowSpecial) mm.emissiveIntensity = (0.3 + night * 2.2) * (mm.userData.boost || 1);
      const flick = Math.sin(time * 37) > 0.93 ? 0.3 : 1;
      for (const mm of signMats) mm.emissiveIntensity = (0.3 + night * 2.2) * (mm.userData.flicker ? flick : 1);
      if (houseMesh) houseMesh.material.userData.night.value = night;
    },
  };
  return api;
}

function buildHillHouses(scene, list) {
  const night = { value: 0 };
  const mat = proceduralMaterial('hillhouse', { color: 0xffffff, roughness: 0.85 }, {
    uniforms: { night },
    fragmentPars: 'uniform float night; float paHouseGlow;',
    color: `
      {
        float h = pa_hash12(floor(vPaWorld.xz * 0.2));
        float win = step(0.5, fract(vPaWorld.y * 0.45)) * step(0.4, fract((vPaWorld.x + vPaWorld.z) * 0.35)) * step(0.3, abs(vPaNormalW.y - 1.0));
        paHouseGlow = win * step(h, 0.7);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05), win * 0.7);
      }`,
    emissive: 'totalEmissiveRadiance += vec3(1.0, 0.7, 0.4) * paHouseGlow * night * 2.5;',
  });
  const placed = list.filter(([x, z]) => terrainHeight(x, z) > 4);
  const mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), mat, placed.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color();
  placed.forEach(([x, z], i) => {
    const w = range(8, 16), d = range(8, 14), h = range(4, 8);
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rand() * Math.PI);
    m.compose(new THREE.Vector3(x, terrainHeight(x, z) + h / 2 - 1, z), q, new THREE.Vector3(w, h, d));
    mesh.setMatrixAt(i, m);
    mesh.setColorAt(i, c.set(pick(PALETTES.stucco)));
  });
  mat.userData.night = night;
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  scene.add(mesh);
  // Tiled roofs: one mesh for every house on the hills.
  const roofs = new THREE.InstancedMesh(hipRoofGeometry(), makeTileRoofMaterial(), placed.length);
  const pos = new THREE.Vector3(), scale = new THREE.Vector3();
  for (let i = 0; i < placed.length; i++) {
    mesh.getMatrixAt(i, m);
    m.decompose(pos, q, scale);
    m.compose(pos.set(pos.x, pos.y + scale.y / 2, pos.z), q, scale.set(scale.x, Math.min(scale.x, scale.z) * 0.3, scale.z));
    roofs.setMatrixAt(i, m);
  }
  roofs.receiveShadow = true;
  roofs.layers.set(1);
  scene.add(roofs);
  return mesh;
}

const neonMats = new Map();
function neonSign(scene, renderer, { x, y, z, face, text, color }) {
  const key = text + color;
  if (!neonMats.has(key)) {
    const tex = canvasTexture(renderer, 512, 128, (c, w, h) => {
      c.fillStyle = '#0b0d10';
      c.fillRect(0, 0, w, h);
      c.font = '700 70px "Barlow Condensed", Impact, sans-serif';
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.shadowColor = color;
      c.shadowBlur = 18;
      c.fillStyle = color;
      c.fillText(text, w / 2, h / 2 + 3);
      c.shadowBlur = 0;
      c.fillStyle = '#ffffffcc';
      c.fillText(text, w / 2, h / 2 + 3);
      c.strokeStyle = color;
      c.lineWidth = 5;
      c.strokeRect(8, 8, w - 16, h - 16);
    });
    const mat = new THREE.MeshStandardMaterial({ color: 0x111111, map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 1, roughness: 0.5 });
    mat.userData.flicker = chance(0.25);
    neonMats.set(key, mat);
  }
  const width = Math.min(12, 3 + text.length * 0.9);
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, width / 4), neonMats.get(key));
  mesh.position.set(x, y, z);
  mesh.rotation.y = face === 'west' ? -Math.PI / 2 : face === 'east' ? Math.PI / 2 : face === 'north' ? Math.PI : 0;
  scene.add(mesh);
  registerLod(mesh, 520);
  return mesh;
}
