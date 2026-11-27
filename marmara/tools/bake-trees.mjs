// Place street + park trees around the Beylikdüzü detail zone.
// Trees are NOT individually mapped in the source data: they are generated
// along real OSM streets and inside real OSM parks, avoiding real buildings.
//
// usage: node bake-trees.mjs <tileDir> <demDir> <buildings.json> <out.json>
import fs from 'node:fs';
import { VectorTile } from '@mapbox/vector-tile';
import Protobuf from 'pbf';
import { PNG } from 'pngjs';

const [, , TILE_DIR, DEM_DIR, BJSON, OUT] = process.argv;
const B = JSON.parse(fs.readFileSync(BJSON));
const Z = 14, N = 2 ** Z, CIRC = 40075016.68557849;
const [LON0, LAT0] = B.origin;
const mxOf = (lon) => (lon + 180) / 360;
const myOf = (lat) => { const s = Math.sin(lat * Math.PI / 180); return 0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI); };
const MX0 = mxOf(LON0), MY0 = myOf(LAT0), S0 = 1 / (CIRC * Math.cos(LAT0 * Math.PI / 180));
const toLocal = (lon, lat) => [(mxOf(lon) - MX0) / S0, -(myOf(lat) - MY0) / S0];
const toMerc = (x, y) => [MX0 + x * S0, MY0 - y * S0];

// detail zone: around Paradise AVM, reaching both nearby Starbucks (Yeşilkent + Park Teras)
const ZONES = [
  { c: toLocal(28.62532, 41.00403), r: 1500 },
  { c: toLocal(28.62599, 40.99529), r: 700 },
  { c: toLocal(28.63764, 41.00325), r: 700 },
];
const inZone = (x, y, pad = 0) => ZONES.some((z) => Math.hypot(x - z.c[0], y - z.c[1]) < z.r + pad);

// ---- decode buildings for collision
const CELL = 40; const bgrid = new Map(); const polys = [];
{ let ri = 0, ci = 0, px = 0, py = 0;
  for (let i = 0; i < B.h.length; i++) {
    const nr = B.r[ri++]; const counts = B.r.slice(ri, ri + nr); ri += nr; const rings = [];
    for (const c of counts) { const ring = []; for (let k = 0; k < c; k++) { px += B.c[ci++]; py += B.c[ci++]; ring.push([px * B.q, py * B.q]); } rings.push(ring); }
    const r0 = rings[0]; let a = Infinity, b = Infinity, cc = -Infinity, d = -Infinity; for (const [x, y] of r0) { a = Math.min(a, x); b = Math.min(b, y); cc = Math.max(cc, x); d = Math.max(d, y); }
    if (!inZone((a + cc) / 2, (b + d) / 2, 200)) continue;
    const id = polys.length; polys.push({ rings, bb: [a, b, cc, d] });
    for (let gx = Math.floor(a / CELL); gx <= Math.floor(cc / CELL); gx++) for (let gy = Math.floor(b / CELL); gy <= Math.floor(d / CELL); gy++) { const k = gx + ':' + gy; if (!bgrid.has(k)) bgrid.set(k, []); bgrid.get(k).push(id); }
  } }
const pip = (pt, rings) => { let inside = false; for (const r of rings) for (let i = 0, j = r.length - 1; i < r.length; j = i++) { const [xi, yi] = r[i], [xj, yj] = r[j]; if ((yi > pt[1]) !== (yj > pt[1]) && pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi) inside = !inside; } return inside; };
const segDist = (px, py, ax, ay, bx, by) => { const dx = bx - ax, dy = by - ay; const L = dx * dx + dy * dy; let t = L ? ((px - ax) * dx + (py - ay) * dy) / L : 0; t = Math.max(0, Math.min(1, t)); return Math.hypot(ax + t * dx - px, ay + t * dy - py); };
function nearBuilding(x, y, clear) {
  for (let gx = Math.floor((x - clear) / CELL); gx <= Math.floor((x + clear) / CELL); gx++) for (let gy = Math.floor((y - clear) / CELL); gy <= Math.floor((y + clear) / CELL); gy++) {
    for (const id of bgrid.get(gx + ':' + gy) || []) {
      const p = polys[id]; if (x < p.bb[0] - clear || x > p.bb[2] + clear || y < p.bb[1] - clear || y > p.bb[3] + clear) continue;
      if (pip([x, y], p.rings)) return true;
      for (const r of p.rings) for (let i = 0, j = r.length - 1; i < r.length; j = i++) if (segDist(x, y, r[j][0], r[j][1], r[i][0], r[i][1]) < clear) return true;
    }
  }
  return false;
}

// ---- roads + parks from tiles
const HALF = { motorway: 11, trunk: 10, primary: 8, secondary: 7, tertiary: 6, minor: 4.5, service: 3 };
const TREE_ROADS = new Set(['primary', 'secondary', 'tertiary', 'minor']);
const roads = []; const parks = [];
for (const f of fs.readdirSync(TILE_DIR)) {
  const [z, x, y] = f.replace('.pbf', '').split('-').map(Number);
  const vt = new VectorTile(new Protobuf(fs.readFileSync(`${TILE_DIR}/${f}`)));
  const T = vt.layers.transportation;
  if (T) for (let i = 0; i < T.length; i++) {
    const ft = T.feature(i); const p = ft.properties; if (!(p.class in HALF) || p.brunnel === 'tunnel' || p.brunnel === 'bridge') continue;
    const g = ft.toGeoJSON(x, y, z).geometry; const lines = g.type === 'LineString' ? [g.coordinates] : g.type === 'MultiLineString' ? g.coordinates : [];
    for (const l of lines) roads.push({ cls: p.class, pts: l.map(([lo, la]) => toLocal(lo, la)) });
  }
  for (const ln of ['park', 'landcover']) {
    const L = vt.layers[ln]; if (!L) continue;
    for (let i = 0; i < L.length; i++) {
      const ft = L.feature(i); const p = ft.properties;
      if (ln === 'landcover' && !['grass', 'wood'].includes(p.class)) continue;
      const g = ft.toGeoJSON(x, y, z).geometry; const ps = g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [];
      for (const pg of ps) parks.push({ wood: p.class === 'wood', rings: pg.map((r) => r.map(([lo, la]) => toLocal(lo, la))) });
    }
  }
}
// road segment grid (to keep trees off carriageways)
const rgrid = new Map(); const segs = [];
for (const r of roads) for (let i = 1; i < r.pts.length; i++) {
  const [ax, ay] = r.pts[i - 1], [bx, by] = r.pts[i]; if (!inZone(ax, ay, 300)) continue;
  const id = segs.length; segs.push([ax, ay, bx, by, HALF[r.cls]]);
  for (let gx = Math.floor(Math.min(ax, bx) / CELL); gx <= Math.floor(Math.max(ax, bx) / CELL); gx++) for (let gy = Math.floor(Math.min(ay, by) / CELL); gy <= Math.floor(Math.max(ay, by) / CELL); gy++) { const k = gx + ':' + gy; if (!rgrid.has(k)) rgrid.set(k, []); rgrid.get(k).push(id); }
}
const onRoad = (x, y) => { for (const id of rgrid.get(Math.floor(x / CELL) + ':' + Math.floor(y / CELL)) || []) { const s = segs[id]; if (segDist(x, y, s[0], s[1], s[2], s[3]) < s[4] + 1.2) return true; } return false; };

// ---- DEM
const dem = new Map();
const demPx = (gx, gy) => { const tx = Math.floor(gx / 256), ty = Math.floor(gy / 256); const k = tx + ':' + ty; if (!dem.has(k)) { const f = `${DEM_DIR}/${Z}-${tx}-${ty}.png`; dem.set(k, fs.existsSync(f) ? PNG.sync.read(fs.readFileSync(f)) : null); } const t = dem.get(k); if (!t) return 0; const o = ((gy - ty * 256) * 256 + (gx - tx * 256)) * 4; return t.data[o] * 256 + t.data[o + 1] + t.data[o + 2] / 256 - 32768; };
const elevAt = (x, y) => { const [mx, my] = toMerc(x, y); const fx = mx * N * 256 - 0.5, fy = my * N * 256 - 0.5; const ix = Math.floor(fx), iy = Math.floor(fy), ax = fx - ix, ay = fy - iy; return demPx(ix, iy) * (1 - ax) * (1 - ay) + demPx(ix + 1, iy) * ax * (1 - ay) + demPx(ix, iy + 1) * (1 - ax) * ay + demPx(ix + 1, iy + 1) * ax * ay; };

// ---- deterministic rng
let seed = 1234567;
const rnd = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };

const trees = []; const tgrid = new Set();
const tkey = (x, y) => Math.round(x / 4) + ':' + Math.round(y / 4);
function addTree(x, y, species) {
  if (!inZone(x, y) || onRoad(x, y) || nearBuilding(x, y, 2.2)) return;
  const k = tkey(x, y); if (tgrid.has(k)) return; tgrid.add(k);
  trees.push([x, y, elevAt(x, y), species, rnd()]);
}
// street trees
for (const r of roads) {
  if (!TREE_ROADS.has(r.cls)) continue;
  const off = HALF[r.cls] + 2.6;
  for (let i = 1; i < r.pts.length; i++) {
    const [ax, ay] = r.pts[i - 1], [bx, by] = r.pts[i]; const L = Math.hypot(bx - ax, by - ay); if (L < 1) continue;
    if (!inZone(ax, ay, 50) && !inZone(bx, by, 50)) continue;
    const ux = (bx - ax) / L, uy = (by - ay) / L, nx = -uy, ny = ux;
    const avenue = r.cls === 'primary' || r.cls === 'secondary';
    for (let t = 4 + rnd() * 6; t < L - 2; t += (avenue ? 9 : 11) + rnd() * 6) {
      for (const side of [-1, 1]) {
        if (rnd() < (avenue ? 0.15 : 0.4)) continue;
        const o = off + rnd() * 1.2;
        addTree(ax + ux * t + nx * o * side, ay + uy * t + ny * o * side, avenue && rnd() < 0.25 ? 1 : rnd() < 0.12 ? 1 : 0);
      }
    }
  }
}
// median trees on dual carriageways are skipped (not knowable from the data)
// park trees
for (const p of parks) {
  let a = Infinity, b = Infinity, c = -Infinity, d = -Infinity; for (const [x, y] of p.rings[0]) { a = Math.min(a, x); b = Math.min(b, y); c = Math.max(c, x); d = Math.max(d, y); }
  if (!inZone((a + c) / 2, (b + d) / 2, Math.max(c - a, d - b))) continue;
  const area = (c - a) * (d - b); const n = Math.min(4000, Math.floor(area / (p.wood ? 45 : 110)));
  for (let i = 0; i < n; i++) { const x = a + rnd() * (c - a), y = b + rnd() * (d - b); if (pip([x, y], p.rings)) addTree(x, y, p.wood ? (rnd() < 0.5 ? 2 : 0) : rnd() < 0.2 ? 1 : rnd() < 0.3 ? 2 : 0); }
}
// encode: deltas at 0.5 m, elevation dm, species, size byte
trees.sort((p, q) => (Math.floor(p[1] / 100) - Math.floor(q[1] / 100)) || p[0] - q[0]);
const t = []; let px = 0, py = 0;
for (const [x, y, e, sp, r] of trees) { const qx = Math.round(x * 2), qy = Math.round(y * 2); t.push(qx - px, qy - py, Math.round(e * 10), sp, Math.round(r * 99)); px = qx; py = qy; }
fs.writeFileSync(OUT, JSON.stringify({ v: 1, origin: B.origin, q: 0.5, stride: 5, note: 'generated along OpenStreetMap streets and inside parks; not individually surveyed trees', zones: ZONES.map((z) => ({ x: Math.round(z.c[0]), y: Math.round(z.c[1]), r: z.r })), t }));
console.log('trees', trees.length, 'roads', roads.length, 'parks', parks.length, (fs.statSync(OUT).size / 1e3).toFixed(0) + ' kB');
