// Bake OpenStreetMap buildings for Beylikdüzü (from OpenFreeMap z14 vector tiles)
// into a compact JSON the browser turns into 3D geometry.
//
// usage: node bake-beylikduzu.mjs <tileDir> <demDir> <overture.json> <out.json>
// Footprints: Overture Maps buildings (OpenStreetMap + Microsoft ML Buildings), names/addresses from OSM POIs.
import fs from 'node:fs';
import { VectorTile } from '@mapbox/vector-tile';
import Protobuf from 'pbf';
import polygonClipping from 'polygon-clipping';
import { PNG } from 'pngjs';

const [, , TILE_DIR, DEM_DIR, OVERTURE, OUT] = process.argv;
const Z = 14, X0 = 9492, X1 = 9499, Y0 = 6140, Y1 = 6145, N = 2 ** Z;
const Q = 0.25; // metres per stored coordinate unit

// ---------- projection: local metres around the area centre, mercator-exact
const latOfMy = (y) => (360 / Math.PI) * Math.atan(Math.exp((180 - y * 360) * Math.PI / 180)) - 90;
const lonOfMx = (x) => x * 360 - 180;
const CIRC = 40075016.68557849;
const MX0 = (X0 + X1 + 1) / 2 / N, MY0 = (Y0 + Y1 + 1) / 2 / N;
const LAT0 = latOfMy(MY0), LON0 = lonOfMx(MX0);
const S0 = 1 / (CIRC * Math.cos(LAT0 * Math.PI / 180)); // mercator units per metre at origin
const toLocal = (mx, my) => [(mx - MX0) / S0, -(my - MY0) / S0]; // +y = north
const toMerc = (x, y) => [MX0 + x * S0, MY0 - y * S0];
const tileRectLocal = (tx, ty) => { const [x0, y1] = toLocal(tx / N, ty / N); const [x1, y0] = toLocal((tx + 1) / N, (ty + 1) / N); return [x0, y0, x1, y1]; };
const AREA = (() => { const [a, , , d] = tileRectLocal(X0, Y0); const [, b, c] = tileRectLocal(X1, Y1); return [a, b, c, d]; })();

// ---------- geometry helpers
const ringArea = (r) => { let s = 0; for (let i = 0, j = r.length - 1; i < r.length; j = i++) s += (r[j][0] - r[i][0]) * (r[j][1] + r[i][1]); return s / 2; };
const polyArea = (p) => Math.abs(ringArea(p[0])) - p.slice(1).reduce((a, r) => a + Math.abs(ringArea(r)), 0);
const mpArea = (mp) => mp.reduce((a, p) => a + polyArea(p), 0);
const bboxOf = (p) => { let a = Infinity, b = Infinity, c = -Infinity, d = -Infinity; for (const [x, y] of p[0]) { if (x < a) a = x; if (y < b) b = y; if (x > c) c = x; if (y > d) d = y; } return [a, b, c, d]; };
const bbOverlap = (a, b) => a[0] < b[2] && b[0] < a[2] && a[1] < b[3] && b[1] < a[3];
const centroid = (ring) => { let a = 0, cx = 0, cy = 0; for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) { const f = ring[j][0] * ring[i][1] - ring[i][0] * ring[j][1]; a += f; cx += (ring[j][0] + ring[i][0]) * f; cy += (ring[j][1] + ring[i][1]) * f; } if (Math.abs(a) < 1e-9) return ring[0]; return [cx / (3 * a), cy / (3 * a)]; };
const pip = (pt, poly) => { let inside = false; for (const r of poly) for (let i = 0, j = r.length - 1; i < r.length; j = i++) { const [xi, yi] = r[i], [xj, yj] = r[j]; if ((yi > pt[1]) !== (yj > pt[1]) && pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi) inside = !inside; } return inside; };
const distToPoly = (pt, poly) => { let best = Infinity; for (const r of poly) for (let i = 0, j = r.length - 1; i < r.length; j = i++) { const [ax, ay] = r[j], [bx, by] = r[i]; const dx = bx - ax, dy = by - ay; const L = dx * dx + dy * dy; let t = L ? ((pt[0] - ax) * dx + (pt[1] - ay) * dy) / L : 0; t = Math.max(0, Math.min(1, t)); best = Math.min(best, Math.hypot(ax + t * dx - pt[0], ay + t * dy - pt[1])); } return best; };
const openRing = (r) => { const o = r.slice(); const a = o[0], b = o[o.length - 1]; if (o.length > 1 && a[0] === b[0] && a[1] === b[1]) o.pop(); return o; };
const clipRect = (poly, [a, b, c, d]) => polygonClipping.intersection(poly, [[[a, b], [c, b], [c, d], [a, d], [a, b]]]);

// ---------- read tiles
const pois = []; const housenums = [];
const poiSeen = new Set(), hnSeen = new Set();
for (let tx = X0; tx <= X1; tx++) for (let ty = Y0; ty <= Y1; ty++) {
  const f = `${TILE_DIR}/${Z}-${tx}-${ty}.pbf`;
  const vt = new VectorTile(new Protobuf(fs.readFileSync(f)));
  const conv = (g) => g.map((ring) => ring.map(([lon, lat]) => {
    const mx = (lon + 180) / 360; const s = Math.sin(lat * Math.PI / 180); const my = 0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI);
    return toLocal(mx, my);
  }));
  const P = vt.layers.poi;
  if (P) for (let i = 0; i < P.length; i++) {
    const ft = P.feature(i); const g = ft.toGeoJSON(tx, ty, Z).geometry; if (g.type !== 'Point') continue;
    const p = ft.properties; const key = (p.name || '') + '|' + g.coordinates[0].toFixed(6) + '|' + g.coordinates[1].toFixed(6);
    if (poiSeen.has(key)) continue; poiSeen.add(key);
    const [x, y] = conv([[g.coordinates]])[0][0];
    pois.push({ x, y, name: p.name || p['name:latin'] || '', cls: p.class, sub: p.subclass });
  }
  const H = vt.layers.housenumber;
  if (H) for (let i = 0; i < H.length; i++) {
    const ft = H.feature(i); const g = ft.toGeoJSON(tx, ty, Z).geometry; if (g.type !== 'Point') continue;
    const key = ft.properties.housenumber + '|' + g.coordinates[0].toFixed(6) + '|' + g.coordinates[1].toFixed(6);
    if (hnSeen.has(key)) continue; hnSeen.add(key);
    const [x, y] = conv([[g.coordinates]])[0][0];
    housenums.push({ x, y, hn: String(ft.properties.housenumber) });
  }
}
console.log('pois', pois.length, 'housenumbers', housenums.length);

// ---------- Overture footprints
const CELL = 60;
const cellKeys = (bb) => { const ks = []; for (let gx = Math.floor(bb[0] / CELL); gx <= Math.floor(bb[2] / CELL); gx++) for (let gy = Math.floor(bb[1] / CELL); gy <= Math.floor(bb[3] / CELL); gy++) ks.push(gx + ':' + gy); return ks; };
const lonlatToLocal = ([lon, lat]) => { const mx = (lon + 180) / 360; const sn = Math.sin(lat * Math.PI / 180); const my = 0.5 - Math.log((1 + sn) / (1 - sn)) / (4 * Math.PI); return toLocal(mx, my); };
const buildings = JSON.parse(fs.readFileSync(OVERTURE)).map((o) => ({ poly: o.rings.map((r) => r.map(lonlatToLocal)), oh: o.h, ofl: o.fl, mh: o.mh || 0, cls: o.cls, src: o.src, roof: o.roof }));
console.log('overture polygons', buildings.length, 'ml', buildings.filter((b) => b.src === 'ml').length);
// 3) clip to the baked area and clean rings
const out = [];
for (const b of buildings) {
  const bb = bboxOf(b.poly);
  let polys = [b.poly];
  if (!(bb[0] >= AREA[0] && bb[2] <= AREA[2] && bb[1] >= AREA[1] && bb[3] <= AREA[3])) {
    if (!bbOverlap(bb, AREA)) continue;
    try { polys = clipRect(b.poly, AREA); } catch { continue; }
  }
  for (const pg of polys) {
    const rings = pg.map(openRing).filter((r) => r.length >= 3);
    if (!rings.length) continue;
    // outer ring counter-clockwise (+area, y north), holes clockwise
    rings.forEach((r, k) => { const a = ringArea(r); if ((k === 0 && a < 0) || (k > 0 && a > 0)) r.reverse(); });
    const area = polyArea(rings);
    if (area < 4) continue;
    out.push({ rings, oh: b.oh, ofl: b.ofl, mh: b.mh, cls: b.cls, src: b.src, roof: b.roof, area });
  }
}
{
  const g = new Map(); out.forEach((b, i) => { b.bb = bboxOf(b.rings); for (const k of cellKeys(b.bb)) { if (!g.has(k)) g.set(k, []); g.get(k).push(i); } });
  const dead = new Set(); let checked = 0;
  out.forEach((b, i) => {
    if (dead.has(i)) return;
    const seen = new Set();
    for (const k of cellKeys(b.bb)) for (const j of g.get(k)) {
      if (j <= i || dead.has(j) || seen.has(j)) continue; seen.add(j);
      const c = out[j]; if (!bbOverlap(b.bb, c.bb)) continue;
      checked++;
      let inter = 0; try { inter = mpArea(polygonClipping.intersection(b.rings, c.rings)); } catch { continue; }
      if (inter > 0.6 * Math.min(b.area, c.area)) {
        const keepB = (b.src === 'osm') !== (c.src === 'osm') ? b.src === 'osm' : b.area >= c.area;
        dead.add(keepB ? j : i); if (!keepB) break;
      }
    }
  });
  console.log('overlap pairs checked', checked, 'duplicates removed', dead.size);
  const kept = out.filter((_, i) => !dead.has(i)); out.length = 0; out.push(...kept);
}
console.log('final buildings', out.length);

// ---------- DEM (Terrarium, same source the site renders)
const dem = new Map();
const demTile = (tx, ty) => { const k = tx + ':' + ty; if (!dem.has(k)) { const f = `${DEM_DIR}/${Z}-${tx}-${ty}.png`; dem.set(k, fs.existsSync(f) ? PNG.sync.read(fs.readFileSync(f)) : null); } return dem.get(k); };
const demPx = (gx, gy) => { const tx = Math.floor(gx / 256), ty = Math.floor(gy / 256); const t = demTile(tx, ty); if (!t) return 0; const px = gx - tx * 256, py = gy - ty * 256; const o = (py * 256 + px) * 4; return t.data[o] * 256 + t.data[o + 1] + t.data[o + 2] / 256 - 32768; };
function elevAt(x, y) {
  const [mx, my] = toMerc(x, y); const fx = mx * N * 256 - 0.5, fy = my * N * 256 - 0.5;
  const ix = Math.floor(fx), iy = Math.floor(fy), ax = fx - ix, ay = fy - iy;
  const e = demPx(ix, iy) * (1 - ax) * (1 - ay) + demPx(ix + 1, iy) * ax * (1 - ay) + demPx(ix, iy + 1) * (1 - ax) * ay + demPx(ix + 1, iy + 1) * ax * ay;
  return e;
}

// ---------- attach POIs + house numbers
const bgrid = new Map();
out.forEach((b, i) => { b.bb = bboxOf(b.rings); b.c = centroid(b.rings[0]); for (const k of cellKeys(b.bb)) { if (!bgrid.has(k)) bgrid.set(k, []); bgrid.get(k).push(i); } b.pois = []; b.hn = []; });
const near = (x, y, r) => { const s = new Set(); for (let gx = Math.floor((x - r) / CELL); gx <= Math.floor((x + r) / CELL); gx++) for (let gy = Math.floor((y - r) / CELL); gy <= Math.floor((y + r) / CELL); gy++) for (const i of bgrid.get(gx + ':' + gy) || []) s.add(i); return [...s]; };
function hostOf(x, y, maxDist) {
  let best = -1, bd = Infinity;
  for (const i of near(x, y, maxDist)) { const b = out[i]; if (pip([x, y], b.rings)) return i; const d = distToPoly([x, y], b.rings); if (d < bd) { bd = d; best = i; } }
  return bd <= maxDist ? best : -1;
}
const SKIP = new Set(['bus', 'gate', 'lift_gate', 'bollard', 'parking', 'park', 'playground', 'pitch', 'swimming_pool', 'bicycle_parking', 'motorcycle_parking', 'waste_basket', 'drinking_water', 'shelter', 'telephone', 'cemetery', 'garden', 'picnic_site', 'brownfield', 'art_gallery_artwork']);
for (const p of pois) {
  if (SKIP.has(p.cls) || (p.cls === 'art_gallery' && p.sub === 'artwork')) continue;
  const big = p.cls === 'shop' && p.sub === 'mall';
  const i = hostOf(p.x, p.y, p.cls === 'place_of_worship' ? 12 : big ? 25 : 6);
  if (i >= 0) out[i].pois.push(p);
}
for (const h of housenums) { const i = hostOf(h.x, h.y, 0.01); if (i >= 0 && out[i].hn.length < 2 && !out[i].hn.includes(h.hn)) out[i].hn.push(h.hn); }

// ---------- classify + estimate heights
const hash = (x, y, k) => { let h = Math.imul(Math.round(x * 4) ^ 0x9e3779b9, 0x85ebca6b) ^ Math.imul(Math.round(y * 4) ^ k, 0xc2b2ae35); h ^= h >>> 15; h = Math.imul(h, 0x2c1b3c6d); h ^= h >>> 12; return (h >>> 0) / 4294967296; };
const KIND = { apartment: 0, house: 1, commercial: 2, mall: 3, industrial: 4, mosque: 5, civic: 6, shed: 7, tower: 8, canopy: 9 };
const RETAIL = new Set(['shop', 'grocery', 'clothing_store', 'restaurant', 'cafe', 'fast_food', 'bank', 'pharmacy', 'bakery', 'hairdresser', 'atm', 'jewelry', 'butcher', 'alcohol_shop', 'ice_cream', 'beer', 'bar', 'car', 'laundry', 'dentist', 'office', 'post', 'optician']);
const CIVIC = new Set(['school', 'college', 'hospital', 'town_hall', 'library', 'police', 'fire_station', 'stadium', 'sports_centre', 'theatre', 'museum', 'cinema']);
const stats = { est: 0, mapped: 0, kinds: {} };
const names = ['']; const nameIdx = new Map([['', 0]]);
const nid = (s) => { if (!nameIdx.has(s)) { nameIdx.set(s, names.length); names.push(s); } return nameIdx.get(s); };
for (const b of out) {
  const [cx, cy] = b.c; const r = (k) => hash(cx, cy, k);
  const perim = b.rings[0].reduce((a, p, i, arr) => a + Math.hypot(p[0] - arr[(i + 1) % arr.length][0], p[1] - arr[(i + 1) % arr.length][1]), 0);
  const compact = (4 * Math.PI * b.area) / (perim * perim); // 1 = circle, ~0.785 square, low = elongated
  const cls = new Set(b.pois.map((p) => p.cls));
  const isMall = b.pois.some((p) => p.cls === 'shop' && p.sub === 'mall') && b.area > 1200;
  const isMosque = b.pois.some((p) => p.cls === 'place_of_worship');
  const civic = [...cls].some((c) => CIVIC.has(c));
  const retail = [...cls].some((c) => RETAIL.has(c));
  const C = b.cls || '';
  const mappedH = b.oh != null && b.oh > 0, mappedF = b.ofl != null && b.ofl > 0;
  const mapped = mappedH || mappedF;
  const CLS = { apartments: 'apt', residential: 'apt', dormitory: 'apt', hotel: 'comm', house: 'house', detached: 'house', semidetached_house: 'house', terrace: 'house', bungalow: 'house', farm: 'house',
    mosque: 'mosque', school: 'civic', university: 'civic', college: 'civic', kindergarten: 'civic', hospital: 'civic', public: 'civic', government: 'civic', civic: 'civic', fire_station: 'civic', sports_hall: 'civic', stadium: 'civic',
    industrial: 'ind', warehouse: 'ind', manufacture: 'ind', factory: 'ind', commercial: 'comm', retail: 'comm', office: 'comm', supermarket: 'comm', kiosk: 'shed',
    shed: 'shed', garage: 'shed', garages: 'shed', hut: 'shed', container: 'shed', toilets: 'shed', service: 'shed', transformer_tower: 'shed', roof: 'canopy', carport: 'canopy', grandstand: 'canopy' };
  const tag = CLS[C];
  let kind, floors, floorH, h = b.oh;
  if ((isMosque || tag === 'mosque') && b.area > 60) kind = KIND.mosque;
  else if (tag === 'canopy') kind = KIND.canopy;
  else if (isMall) kind = KIND.mall;
  else if ((civic || tag === 'civic') && b.area > 250) kind = KIND.civic;
  else if (mappedH && b.oh >= 60) kind = KIND.tower;
  else if (tag === 'shed' || b.area < 30) kind = KIND.shed;
  else if (tag === 'ind' || (!tag && b.area > 2500 && !retail && compact < 0.6)) kind = KIND.industrial;
  else if (tag === 'comm' || (b.area > 2000 && retail)) kind = KIND.commercial;
  else if (tag === 'house' || (!tag && b.area < 115 && !retail)) kind = KIND.house;
  else kind = KIND.apartment;
  floorH = { 0: 2.95, 1: 2.9, 2: 3.8, 3: 5.2, 4: 7, 5: 4, 6: 3.6, 7: 2.8, 8: 3.4, 9: 4.5 }[kind];
  if (mapped) {
    if (mappedH) floors = mappedF ? b.ofl : Math.max(1, Math.round((b.oh - b.mh) / floorH));
    else { floors = b.ofl; h = floors * floorH + (kind === KIND.apartment ? 1.2 : 0.4) + b.mh; }
    stats.mapped++;
  } else {
    stats.est++;
    const north = cy > 300 ? 1.25 : 1; // the newer gated towers sit mostly north of the D-100
    const pick = (lo, hi, k = 1) => lo + Math.floor(Math.pow(r(k), 1.15) * (hi - lo + 1));
    switch (kind) {
      case KIND.shed: floors = 1; break;
      case KIND.canopy: floors = 1; break;
      case KIND.house: floors = pick(1, 3); break;
      case KIND.mosque: floors = pick(2, 3); break;
      case KIND.mall: floors = pick(3, 4); break;
      case KIND.civic: floors = pick(3, 5); break;
      case KIND.industrial: floors = pick(1, 2); break;
      case KIND.commercial: floors = pick(2, 5); break;
      default: {
        const a = b.area; const elong = compact < 0.45 ? 0.6 : 1;
        if (a < 180) floors = pick(3, 6);
        else if (a < 350) floors = pick(4, 9);
        else if (a < 700) floors = Math.round(pick(6, 14) * north * elong);
        else if (a < 1400) floors = Math.round(pick(8, 18) * north * elong);
        else floors = Math.round(pick(5, 12) * elong);
        floors = Math.max(2, floors);
      }
    }
    h = floors * floorH + (kind === KIND.apartment || kind === KIND.commercial ? 1.2 : 0.4);
  }
  stats.kinds[kind] = (stats.kinds[kind] || 0) + 1;
  // terrain: centroid height (roofline reference) and lowest corner (foundation)
  const ec = elevAt(cx, cy);
  let emin = ec; for (const p of b.rings[0]) emin = Math.min(emin, elevAt(p[0], p[1]));
  // display name
  const rank = (p) => (p.cls === 'shop' && p.sub === 'mall' ? 0 : p.cls === 'place_of_worship' ? 1 : CIVIC.has(p.cls) ? 2 : 3);
  const named = b.pois.filter((p) => p.name).sort((a, c) => rank(a) - rank(c));
  const label = [...new Set(named.map((p) => p.name))].slice(0, 4).join(' · ');
  b.out = { h: Math.round(h * 10), mh: Math.round(b.mh * 10), e: Math.round(ec * 10), eb: Math.round((emin - ec) * 10) - 25, k: kind, est: mapped ? (mappedH ? 0 : 2) : 1, fl: floors, shop: retail ? 1 : 0, ml: b.src === 'ml' ? 1 : 0, nm: nid(label), hn: b.hn.join('/') };
}
console.log(stats);

// ---------- encode
const enc = { v: 1, origin: [+LON0.toFixed(7), +LAT0.toFixed(7)], q: Q, area: AREA.map((v) => +v.toFixed(1)),
  bounds: [lonOfMx(X0 / N), latOfMy((Y1 + 1) / N), lonOfMx((X1 + 1) / N), latOfMy(Y0 / N)].map((v) => +v.toFixed(6)),
  source: 'Footprints: Overture Maps 2026-11-18 buildings (OpenStreetMap contributors + Microsoft ML Buildings, ODbL); names/addresses: OpenStreetMap via OpenFreeMap; terrain: AWS Terrain Tiles. est: 0 = OSM height, 2 = OSM floor count, 1 = estimated from footprint',
  names, h: [], mh: [], e: [], eb: [], k: [], est: [], fl: [], shop: [], ml: [], nm: [], hn: [], r: [], c: [] };
let px = 0, py = 0;
// sort spatially (helps compression + lets the client stream)
out.sort((a, b) => (Math.floor(a.c[1] / 200) - Math.floor(b.c[1] / 200)) || a.c[0] - b.c[0]);
for (const b of out) {
  const o = b.out;
  for (const k of ['h', 'mh', 'e', 'eb', 'k', 'est', 'fl', 'shop', 'ml', 'nm', 'hn']) enc[k].push(o[k]);
  enc.r.push(b.rings.length, ...b.rings.map((r) => r.length));
  for (const ring of b.rings) for (const [x, y] of ring) { const qx = Math.round(x / Q), qy = Math.round(y / Q); enc.c.push(qx - px, qy - py); px = qx; py = qy; }
}
// sparse-encode near-constant columns
const sparse = (arr) => { const o = {}; arr.forEach((v, i) => { if (v) o[i] = v; }); return o; };
enc.mh = sparse(enc.mh); enc.hn = sparse(enc.hn.map((s) => s || 0)); enc.nm = sparse(enc.nm);
fs.writeFileSync(OUT, JSON.stringify(enc));
console.log('wrote', OUT, (fs.statSync(OUT).size / 1e6).toFixed(2), 'MB', 'buildings', out.length, 'vertices', enc.c.length / 2);
