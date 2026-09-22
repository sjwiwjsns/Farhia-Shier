// ============================================================================================
// 10 CORE — utilities, projection, Blaine geography definitions (no THREE dependency)
// Projection: 1 real mile -> 800 m (scale ~0.5, topology + angles preserved). Numbered avenues
// sit 1/8 mile apart as in the Anoka County grid, so avenue N is at z = -(N-85)*100 m.
// x = east, z = south (THREE convention), north = -z. Physics uses Y = -z.
// ============================================================================================
var P = BDPhysics;
var clamp = P.clamp, lerp = P.lerp, smooth = P.smooth;
var MPH = P.MPH;
function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
var rand = mulberry32(1850);   // Blaine founding-era seed; world is deterministic
function rr(a, b) { return a + (b - a) * rand(); }
function ri(a, b) { return Math.floor(a + (b - a + 1) * rand()); }
function pick(a) { return a[Math.floor(rand() * a.length)]; }
function hash2(x, z) { var h = Math.imul(x | 0, 374761393) + Math.imul(z | 0, 668265263) | 0; h = Math.imul(h ^ h >>> 13, 1274126177); return ((h ^ h >>> 16) >>> 0) / 4294967296; }
function vnoise(x, z) {
  var xi = Math.floor(x), zi = Math.floor(z), xf = x - xi, zf = z - zi;
  var u = xf * xf * (3 - 2 * xf), v = zf * zf * (3 - 2 * zf);
  var a = hash2(xi, zi), b = hash2(xi + 1, zi), c = hash2(xi, zi + 1), d = hash2(xi + 1, zi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function fbm(x, z, oct) { var s = 0, amp = 0.5, f = 1; for (var i = 0; i < (oct || 4); i++) { s += amp * vnoise(x * f, z * f); f *= 2.03; amp *= 0.5; } return s; }
function dist2(ax, az, bx, bz) { var dx = ax - bx, dz = az - bz; return dx * dx + dz * dz; }
function segDist(px, pz, ax, az, bx, bz, out) {
  var dx = bx - ax, dz = bz - az, L2 = dx * dx + dz * dz, t = L2 > 0 ? ((px - ax) * dx + (pz - az) * dz) / L2 : 0;
  t = t < 0 ? 0 : (t > 1 ? 1 : t);
  var cx = ax + dx * t, cz = az + dz * t;
  if (out) { out.t = t; out.x = cx; out.z = cz; out.side = dx * (pz - az) - dz * (px - ax); }
  return Math.sqrt((px - cx) * (px - cx) + (pz - cz) * (pz - cz));
}
function segInter(ax, az, bx, bz, cx, cz, dx, dz) { // returns [t,u] or null
  var rx = bx - ax, rz = bz - az, sx = dx - cx, sz = dz - cz, den = rx * sz - rz * sx;
  if (Math.abs(den) < 1e-9) return null;
  var qx = cx - ax, qz = cz - az, t = (qx * sz - qz * sx) / den, u = (qx * rz - qz * rx) / den;
  if (t < 0 || t > 1 || u < 0 || u > 1) return null;
  return [t, u];
}
function polyLen(pts) { var L = 0; for (var i = 1; i < pts.length; i++) L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); return L; }
function cumLen(pts) { var c = [0]; for (var i = 1; i < pts.length; i++) c.push(c[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1])); return c; }
// resample polyline at spacing (keeps ends)
function resample(pts, sp) {
  var c = cumLen(pts), L = c[c.length - 1], n = Math.max(1, Math.round(L / sp)), out = [], j = 0;
  for (var k = 0; k <= n; k++) {
    var s = L * k / n; while (j < pts.length - 2 && c[j + 1] < s) j++;
    var f = (s - c[j]) / Math.max(1e-9, c[j + 1] - c[j]);
    out.push([pts[j][0] + (pts[j + 1][0] - pts[j][0]) * f, pts[j][1] + (pts[j + 1][1] - pts[j][1]) * f]);
  }
  return out;
}
// Chaikin smoothing (open polyline)
function chaikin(pts, it) {
  for (var k = 0; k < it; k++) {
    var o = [pts[0]];
    for (var i = 0; i < pts.length - 1; i++) {
      var a = pts[i], b = pts[i + 1];
      o.push([a[0] * 0.75 + b[0] * 0.25, a[1] * 0.75 + b[1] * 0.25], [a[0] * 0.25 + b[0] * 0.75, a[1] * 0.25 + b[1] * 0.75]);
    }
    o.push(pts[pts.length - 1]); pts = o;
  }
  return pts;
}
function bez3(p0, p1, p2, p3, n) {
  var o = [];
  for (var i = 0; i <= n; i++) {
    var t = i / n, a = (1 - t) * (1 - t) * (1 - t), b = 3 * (1 - t) * (1 - t) * t, c = 3 * (1 - t) * t * t, d = t * t * t;
    o.push([a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0], a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1]]);
  }
  return o;
}
// offset polyline to the right of travel (right = (-dz, dx) in x/z)
function offsetPoly(pts, off) {
  var o = [];
  for (var i = 0; i < pts.length; i++) {
    var a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
    var dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz) || 1;
    o.push([pts[i][0] - dz / L * off, pts[i][1] + dx / L * off]);
  }
  return o;
}
function pointAt(pts, cum, s) { // position + tangent at arc length
  var n = pts.length; s = clamp(s, 0, cum[n - 1]);
  var lo = 0, hi = n - 1;
  while (hi - lo > 1) { var m = (lo + hi) >> 1; if (cum[m] <= s) lo = m; else hi = m; }
  var a = pts[lo], b = pts[hi], L = cum[hi] - cum[lo] || 1e-9, f = (s - cum[lo]) / L;
  return { x: a[0] + (b[0] - a[0]) * f, z: a[1] + (b[1] - a[1]) * f, dx: (b[0] - a[0]) / L, dz: (b[1] - a[1]) / L, i: lo, f: f };
}
function projectOnPoly(pts, x, z) { // nearest station
  var best = 1e18, bs = 0, acc = 0, tmp = {};
  for (var i = 0; i < pts.length - 1; i++) {
    var d = segDist(x, z, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], tmp), L = Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]);
    if (d < best) { best = d; bs = acc + tmp.t * L; }
    acc += L;
  }
  return { s: bs, d: best };
}
function pointInPoly(x, z, poly) {
  var c = false;
  for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    var a = poly[i], b = poly[j];
    if ((a[1] > z) !== (b[1] > z) && x < (b[0] - a[0]) * (z - a[1]) / (b[1] - a[1]) + a[0]) c = !c;
  }
  return c;
}

// yaw (THREE rotation.y) whose local +X points along (dx, dz)
function yawOf(dx, dz) { return Math.atan2(-dz, dx); }

var MI = 800, AVE = 100;
function X(mi) { return mi * MI; }
function Z(ave) { return -(ave - 85) * AVE; }
function M(p) { return [X(p[0]), Z(p[1])]; }
function Ms(arr) { return arr.map(M); }
function aveOf(z) { return 85 - z / AVE; }
function miOf(x) { return x / MI; }
var WORLD = { x0: X(-0.97), x1: X(5.45), z0: Z(135.4), z1: Z(82.6) };
WORLD.w = WORLD.x1 - WORLD.x0; WORLD.d = WORLD.z1 - WORLD.z0;

// ---------------- road classes ----------------
var CLS = {
  fwy:    { i: 0, laneW: 3.66, shL: 1.8, shR: 3.0, speed: 65, prio: 6, plow: 50,  name: 'Freeway' },
  ramp:   { i: 1, laneW: 4.0,  shL: 1.0, shR: 2.4, speed: 40, prio: 5, plow: 50,  name: 'Ramp' },
  hwy:    { i: 2, laneW: 3.66, shL: 1.4, shR: 2.6, speed: 55, prio: 5, plow: 60,  name: 'Highway' },
  art:    { i: 3, laneW: 3.5,  shL: 0.3, shR: 1.2, speed: 45, prio: 4, plow: 120, name: 'Arterial' },
  col:    { i: 4, laneW: 3.4,  shL: 0,   shR: 0.9, speed: 35, prio: 3, plow: 240, name: 'Collector' },
  local:  { i: 5, laneW: 3.2,  shL: 0,   shR: 0.7, speed: 30, prio: 2, plow: 480, name: 'Local street' },
  rural:  { i: 6, laneW: 3.5,  shL: 0,   shR: 2.2, speed: 50, prio: 3, plow: 300, name: 'Rural road' },
  gravel: { i: 7, laneW: 3.3,  shL: 0,   shR: 0.6, speed: 40, prio: 2, plow: 600, name: 'Gravel road' },
  lot:    { i: 8, laneW: 3.2,  shL: 0,   shR: 0.4, speed: 15, prio: 1, plow: 600, name: 'Parking aisle' }
};
var CLS_BY_I = []; for (var ck in CLS) { CLS[ck].key = ck; CLS_BY_I[CLS[ck].i] = CLS[ck]; }

// ---------------- the real road hierarchy ----------------
// pts in [miles east of University Ave, avenue number]. group 'fwy' roads never meet grade roads except
// through ramp endpoints; where they cross a grade road they rise onto an overpass automatically.
var ROADDEFS = [
  // --- freeways ---
  { id: 'us10', name: 'US-10', cls: 'fwy', lanes: 2, divided: 16, dirs: ['EB', 'WB'],
    pts: [[-0.97, 90.35], [-0.5, 89.3], [0.0, 88.2], [0.6, 86.8], [1.0, 85.65], [1.6, 84.1], [2.08, 82.6]] },
  { id: 'mn610', name: 'MN-610', cls: 'fwy', lanes: 2, divided: 14, dirs: ['EB', 'WB'], note: 'compressed: real junction is ~3 mi west in Coon Rapids',
    pts: [[-0.97, 87.3], [-0.78, 88.0], [-0.58, 88.75]], mergeInto: 'us10' },
  { id: 'i35w', name: 'I-35W', cls: 'fwy', lanes: 2, divided: 16, dirs: ['NB', 'SB'],
    pts: [[3.5, 82.6], [3.55, 88], [3.63, 92.5], [3.76, 96], [4.05, 99.5], [4.5, 102.4], [5.0, 105.9], [5.45, 109.3]] },
  // --- MN-65 (Central Ave NE): divided highway, the north-south spine ---
  { id: 'mn65s', name: 'MN-65', alt: 'Central Ave NE', cls: 'hwy', lanes: 3, divided: 14, dirs: ['NB', 'SB'], pts: [[1.6, 82.6], [1.6, 101.55]] },
  { id: 'mn65c', name: 'MN-65', alt: 'Central Ave NE', cls: 'hwy', lanes: 3, divided: 14, dirs: ['NB', 'SB'], pts: [[1.6, 101.55], [1.6, 108.45]], construction: true, speed: 45 },
  { id: 'mn65m', name: 'MN-65', alt: 'Central Ave NE', cls: 'hwy', lanes: 3, divided: 14, dirs: ['NB', 'SB'], pts: [[1.6, 108.45], [1.6, 112.5]] },
  { id: 'mn65n', name: 'MN-65', alt: 'Central Ave NE', cls: 'hwy', lanes: 2, divided: 14, dirs: ['NB', 'SB'], pts: [[1.6, 112.5], [1.6, 135.4]] },
  // --- county arterials ---
  { id: 'univ', name: 'University Ave NE', alt: 'CR 51', cls: 'art', lanes: 2, center: 4, pts: [[0, 82.6], [0, 135.4]] },
  { id: 'lex', name: 'Lexington Ave NE', alt: 'CR 17', cls: 'art', lanes: 2, center: 4, speed: 50, pts: [[4.5, 82.6], [4.5, 135.4]] },
  { id: 'radis', name: 'Radisson Rd NE', alt: 'CR 52', cls: 'art', lanes: 1, center: 3.5, speed: 50,
    pts: [[3.35, 85], [3.35, 103.2], [3.3, 105], [3.3, 106.5], [3.36, 109], [3.4, 113], [3.42, 117], [3.46, 125], [3.52, 129], [3.55, 135.4]] },
  { id: 'hamline', name: 'Hamline Ave NE', cls: 'col', lanes: 1, speed: 40, pts: [[4.0, 85], [4.0, 95]] },
  { id: 'lincoln', name: 'Lincoln St NE', cls: 'col', lanes: 1, speed: 30, pts: [[2.0, 85], [2.0, 93.6]] },
  { id: 'sunset', name: 'Sunset Ave NE', cls: 'rural', lanes: 1, speed: 50, pts: [[5.2, 109], [5.2, 135.4]] },
  // --- numbered avenues (east-west) ---
  { id: 'a85', name: '85th Ave NE', cls: 'art', lanes: 1, center: 3.5, speed: 45, pts: [[2.0, 85], [3.35, 85], [4.0, 85], [4.5, 85], [5.45, 85]] },
  { id: 'a87', name: '87th Ave NE', cls: 'col', lanes: 1, speed: 30, pts: [[0.64, 87.05], [0.9, 87.05], [1.585, 87.05]], shore: 'Laddie Lake' },
  { id: 'a89', name: '89th Ave NE', alt: 'Airport Rd', cls: 'col', lanes: 1, speed: 35, pts: [[1.62, 89.05], [2.0, 89.05], [2.2, 89.05]] },
  { id: 'a95w', name: '95th Ave NE', cls: 'col', lanes: 1, speed: 35, pts: [[0, 95], [0.8, 95], [1.585, 95]] },
  { id: 'a95e', name: '95th Ave NE', cls: 'art', lanes: 1, center: 3.5, speed: 45, pts: [[3.35, 95], [4.0, 95], [4.5, 95], [5.45, 95]] },
  { id: 'a99w', name: '99th Ave NE', cls: 'art', lanes: 1, center: 3.5, speed: 40, pts: [[0, 99], [1.6, 99]] },
  { id: 'a99m', name: '99th Ave NE', cls: 'col', lanes: 1, speed: 35, pts: [[1.6, 99], [2.08, 99]] },
  { id: 'a99e', name: '99th Ave NE', cls: 'art', lanes: 1, center: 3.5, speed: 45, pts: [[3.35, 99], [4.5, 99], [5.45, 99]] },
  { id: 'a105', name: '105th Ave NE', cls: 'art', lanes: 2, center: 4, speed: 45, pts: [[0, 105], [1.6, 105], [3.3, 105], [4.5, 105]] },
  { id: 'a109', name: '109th Ave NE', alt: 'CR 12', cls: 'art', lanes: 2, center: 4, speed: 45, pts: [[0, 109], [1.6, 109], [3.36, 109], [4.5, 109], [5.45, 109]] },
  { id: 'a117w', name: '117th Ave NE', cls: 'art', lanes: 1, center: 3.5, speed: 40, pts: [[0, 117], [1.6, 117]] },
  { id: 'a117e', name: 'Cloud Dr NE', alt: '117th Ave NE', cls: 'art', lanes: 1, center: 3.5, speed: 40, pts: [[1.6, 117], [3.42, 117]] },
  { id: 'a125', name: 'Main St NE', alt: '125th Ave NE / CR 14', cls: 'art', lanes: 2, center: 4, speed: 50, pts: [[-0.97, 125], [0, 125], [1.6, 125], [3.46, 125], [4.5, 125], [5.45, 125]] },
  { id: 'a133', name: '133rd Ave NE', cls: 'rural', lanes: 1, speed: 50, pts: [[0, 133], [1.6, 133], [3.5, 133]] },
  { id: 'a133e', name: '133rd Ave NE', cls: 'gravel', lanes: 1, speed: 40, pts: [[3.5, 133], [4.5, 133], [5.2, 133]] },
  // --- frontage roads built by the 2026-29 Hwy 65 project (99th-109th) ---
  { id: 'frontW', name: 'W Frontage Rd', cls: 'col', lanes: 1, speed: 30, pts: [[1.53, 99], [1.53, 109]] },
  { id: 'frontE', name: 'Town Square Dr NE', cls: 'col', lanes: 1, speed: 30, pts: [[1.67, 105], [1.67, 109]] },
  // --- landmark access ---
  { id: 'tpp', name: 'Tournament Players Pkwy', cls: 'col', lanes: 1, speed: 25, pts: [[3.4, 114.43], [3.5, 114.4], [3.6, 114.7], [3.66, 115.1]] },
  { id: 'nscr', name: 'NSC Access Rd', cls: 'col', lanes: 1, speed: 20, pts: [[2.4875, 105], [2.4875, 107.5], [1.67, 107.5]] },
  { id: 'north', name: 'Northtown Dr NE', cls: 'col', lanes: 1, speed: 25, pts: [[0, 92.9], [0.35, 93.0], [0.7, 92.6], [0.78, 91.2], [0.72, 90.0], [0.4, 89.85], [0.15, 90.0], [0, 90.3]] },
  { id: 'laddie', name: 'Laddie Lake shoreline', cls: 'local', lanes: 1, speed: 25, pts: [[0.9, 87.05], [0.86, 87.9], [0.9, 88.9], [1.08, 89.55], [1.3, 89.6], [1.45, 89.5], [1.585, 89.5]] }
];
// Rice Creek (flows NE -> SW through the southeast), Laddie Lake, ponds
var RICE_CREEK = [[5.45, 99.4], [5.05, 98.4], [4.62, 96.9], [4.28, 95.35], [4.0, 93.6], [3.74, 92.1], [3.52, 90.2], [3.34, 87.7], [3.12, 85.7], [2.88, 83.9], [2.72, 82.6]];
var LADDIE = { x: X(1.13), z: Z(88.3), rx: 150, rz: 102 };
var PONDS = [
  { x: X(3.2), z: Z(113.2), rx: 60, rz: 38 }, { x: X(2.7), z: Z(119.5), rx: 70, rz: 45 }, { x: X(0.6), z: Z(121.5), rx: 55, rz: 35 },
  { x: X(4.1), z: Z(121.0), rx: 80, rz: 50 }, { x: X(2.45), z: Z(128), rx: 48, rz: 36 }, { x: X(0.9), z: Z(112.3), rx: 42, rz: 30 },
  { x: X(4.95), z: Z(118.5), rx: 90, rz: 60 }, { x: X(0.35), z: Z(102.2), rx: 40, rz: 28 }
];
// Interchanges (freeway x crossing road). Diamond ramps with at-grade terminals.
var INTERCHANGES = [
  { fwy: 'us10', cross: 'univ', name: 'University Ave' },
  { fwy: 'us10', cross: 'mn65s', name: 'MN-65' },
  { fwy: 'i35w', cross: 'a95e', name: '95th Ave NE' },
  { fwy: 'i35w', cross: 'lex', name: 'Lexington Ave' }
];
// Signalised intersections (the four named in the Hwy 65 project plus other real arterial signals)
var SIGNALS = [[1.6, 99], [1.6, 105], [1.6, 109], [1.6, 117], [1.6, 125], [0, 95], [0, 99], [0, 105], [0, 109], [0, 117], [0, 125],
  [3.35, 105], [3.36, 109], [3.46, 125], [4.5, 95], [4.5, 99], [4.5, 105], [4.5, 109], [4.5, 125], [3.35, 95], [3.35, 85], [4.5, 85]];
// Special areas (metres)
var AREAS = {
  airport: { x0: X(2.15), x1: X(3.2), z0: Z(102.6), z1: Z(88.6), name: 'Anoka County-Blaine Airport (Janes Field)' },
  nsc: { x0: X(1.745), x1: X(3.22), z0: Z(108.7), z1: Z(105.18), name: 'National Sports Center' },
  tpc: { x0: X(3.46), x1: X(4.44), z0: Z(118.3), z1: Z(110.2), name: 'TPC Twin Cities' },
  cityhall: { x0: X(1.69), x1: X(1.742), z0: Z(108.5), z1: Z(107.2), name: 'Blaine City Hall' },
  mall: { x0: X(0.1), x1: X(0.66), z0: Z(92.5), z1: Z(90.2), name: 'Northtown Mall' },
  curling: { x0: X(1.83), x1: X(1.97), z0: Z(93.2), z1: Z(91.7), name: 'Four Seasons Curling Club' },
  school: { x0: X(0.05), x1: X(0.42), z0: Z(127.6), z1: Z(125.4), name: 'Blaine High School' }
};
var LANDMARKS = [
  { id: 'nsc', name: 'National Sports Center', sub: 'Schwan Super Rink · velodrome · 50+ fields', x: X(1.95), z: Z(105.9) },
  { id: 'rink', name: 'Schwan Super Rink', sub: '8 sheets of ice', x: X(1.86), z: Z(106.4) },
  { id: 'curling', name: 'Four Seasons Curling Club', sub: 'Olympic curling training site', x: X(1.9), z: Z(92.45) },
  { id: 'tpc', name: 'TPC Twin Cities', sub: 'Home of the 3M Open', x: X(3.56), z: Z(114.8) },
  { id: 'cityhall', name: 'Blaine City Hall', sub: '10801 Town Square Dr NE', x: X(1.715), z: Z(107.85) },
  { id: 'laddie', name: 'Laddie Lake', sub: 'Laddie Lake Park · 87th Ave NE', x: LADDIE.x, z: LADDIE.z },
  { id: 'rice', name: 'Rice Creek', sub: 'Creek corridor & I-35W bridge', x: X(3.58), z: Z(90.9) },
  { id: 'airport', name: 'Anoka County-Blaine Airport', sub: 'Janes Field (ANE)', x: X(2.65), z: Z(95.5) },
  { id: 'northtown', name: 'Northtown Mall', sub: 'US-10 & University Ave', x: X(0.37), z: Z(90.9) },
  { id: 'work', name: 'Hwy 65 work zone', sub: '2026 reconstruction at 105th Ave', x: X(1.6), z: Z(104.2) },
  { id: 'school', name: 'Blaine High School', sub: 'University Ave & 125th', x: X(0.23), z: Z(126.5) }
];
// District styles for procedural local streets (bounded by the real arterials above)
var DISTRICTS = [
  { id: 'coonrapids', style: 'grid', r: [-0.97, -0.02, 91.1, 133], dens: 0.55, era: 'old', label: 'Coon Rapids' },
  { id: 'sw', style: 'grid', r: [0, 1.56, 89.7, 99], era: 'old', label: 'Southwest Blaine (1960s-70s)' },
    { id: 'wc', style: 'pods', r: [0, 1.53, 99, 109], era: 'mid', label: 'West-central Blaine' },
  { id: 'w117', style: 'pods', r: [0, 1.56, 109, 117], era: 'mid', label: 'Blaine' },
  { id: 'nw', style: 'pods', r: [0, 1.56, 117, 125], era: 'new', town: 0.25, label: 'North Blaine subdivisions' },
  { id: 'fnw', style: 'pods', r: [0, 1.56, 125, 133], era: 'new', town: 0.15, label: 'North Blaine subdivisions' },
  { id: 'e65', style: 'grid', r: [1.64, 2.1, 93.6, 98.8], era: 'old', dens: 0.8, label: 'East Blaine (Hwy 65 corridor)' },
  { id: 'nc', style: 'pods', r: [1.64, 3.36, 109, 117], era: 'new', town: 0.35, label: 'North-central Blaine' },
  { id: 'nc2', style: 'pods', r: [1.64, 3.42, 117, 125], era: 'new', town: 0.3, label: 'North-central Blaine' },
  { id: 'lakes', style: 'pods', r: [3.36, 4.5, 105, 109], era: 'new', label: 'The Lakes' },
  { id: 'lakes2', style: 'pods', r: [3.42, 4.5, 118.3, 125], era: 'new', town: 0.2, label: 'The Lakes' },
  { id: 'se', style: 'pods', r: [3.35, 4.5, 99, 105], era: 'mid', label: 'Southeast Blaine' },
  { id: 'se2', style: 'pods', r: [3.35, 4.0, 85, 95], era: 'mid', label: 'Southeast Blaine' },
  { id: 'se3', style: 'pods', r: [3.35, 4.5, 95, 99], era: 'mid', label: 'Southeast Blaine' },
  { id: 'se4', style: 'pods', r: [4.0, 4.5, 85, 95], era: 'mid', label: 'Southeast Blaine' },
  { id: 'n125', style: 'pods', r: [0, 3.46, 125, 133], era: 'new', dens: 0.6, label: 'North Blaine (growth edge)' },
  { id: 'lexe', style: 'pods', r: [4.5, 5.45, 99, 109], era: 'mid', dens: 0.6, label: 'Lino Lakes edge' },
  { id: 'lexe2', style: 'rural', r: [4.5, 5.45, 109, 133], label: 'Rural east edge' },
  { id: 'rural', style: 'rural', r: [-0.97, 5.45, 133, 135.4], label: 'Rural north edge' },
  { id: 'rural2', style: 'rural', r: [3.46, 4.5, 125, 133], label: 'Rural north edge' },
  { id: 'spl', style: 'grid', r: [-0.97, 1.56, 82.6, 85.4], era: 'old', dens: 0.7, label: 'Spring Lake Park edge' },
  { id: 'mv', style: 'grid', r: [2.2, 3.3, 82.6, 84.9], era: 'old', dens: 0.7, label: 'Mounds View edge' },
  { id: 'cp', style: 'grid', r: [4.5, 5.45, 82.6, 94.9], era: 'mid', dens: 0.6, label: 'Circle Pines edge' }
];
// Mobile-home parks on the east side of Hwy 65 (east Blaine) and newer infill next to them
var PARCELS = [
  { type: 'mobile', r: [1.64, 1.8, 89.4, 92.6] }, { type: 'mobile', r: [1.64, 1.98, 98.9, 101.2] },
  { type: 'apts', r: [1.64, 1.8, 92.9, 93.5] },
  { type: 'bigbox', r: [1.64, 1.98, 101.4, 104.8], name: 'Blaine retail' },
  { type: 'strip', r: [1.36, 1.51, 99.3, 104.7] }, { type: 'strip', r: [1.36, 1.51, 105.3, 108.7] },
  { type: 'bigbox', r: [1.64, 2.08, 109.2, 111.6], name: 'The Village' }, { type: 'strip', r: [1.3, 1.57, 109.2, 111.2] },
  { type: 'strip', r: [1.3, 1.57, 124.2, 124.85] }, { type: 'strip', r: [1.64, 1.9, 125.2, 126.2] },
  { type: 'strip', r: [4.52, 4.75, 109.2, 110.6] }, { type: 'strip', r: [4.25, 4.48, 109.2, 110.2] },
  { type: 'strip', r: [0.03, 0.3, 105.2, 106.2] }, { type: 'strip', r: [1.64, 1.9, 85.6, 88.6] },
  { type: 'bigbox', r: [-0.6, -0.1, 85.4, 87.6], name: 'Coon Rapids retail' }, { type: 'strip', r: [0.03, 0.4, 117.2, 118.0] },
  { type: 'industrial', r: [2.1, 2.9, 83.0, 84.6] }, { type: 'industrial', r: [1.64, 1.98, 104.9, 105.0] }
];
// Seasonal calendar for 2026 events (approximate annual windows; simulated)
var EVENTS = {
  usacup: { name: 'USA Cup weekend', venue: 'nsc', start: [7, 11], end: [7, 18], note: 'Simulated window (mid-July); youth soccer at the National Sports Center' },
  open3m: { name: '3M Open week', venue: 'tpc', start: [7, 20], end: [7, 26], note: 'Simulated window (late July); PGA TOUR at TPC Twin Cities' }
};

// ---------------- rasteriser (for land use + physics ground type) ----------------
var LU = { GRASS: 0, FIELD: 1, LOT: 2, WATER: 3, FOREST: 4, FAIRWAY: 5, GREEN: 6, SAND: 7, RUNWAY: 8, AIRGRASS: 9, TURF: 10, DIRT: 11, MARSH: 12, LAWN: 13, ROUGH: 14 };
function Raster(res) {
  this.res = res; this.w = Math.ceil(WORLD.w / res); this.h = Math.ceil(WORLD.d / res);
  this.a = new Uint8Array(this.w * this.h);
}
Raster.prototype.ix = function (x) { return Math.floor((x - WORLD.x0) / this.res); };
Raster.prototype.iz = function (z) { return Math.floor((z - WORLD.z0) / this.res); };
Raster.prototype.get = function (x, z) {
  var i = this.ix(x), j = this.iz(z);
  if (i < 0 || j < 0 || i >= this.w || j >= this.h) return LU.FIELD;
  return this.a[j * this.w + i];
};
Raster.prototype.fillPoly = function (poly, v, pred) {
  var zmin = 1e9, zmax = -1e9, k, n = poly.length, inv = 1 / this.res, W = this.w, a = this.a, x0 = WORLD.x0, z0 = WORLD.z0;
  for (k = 0; k < n; k++) { var pz = poly[k][1]; if (pz < zmin) zmin = pz; if (pz > zmax) zmax = pz; }
  var j0 = Math.max(0, Math.floor((zmin - z0) * inv)), j1 = Math.min(this.h - 1, Math.floor((zmax - z0) * inv));
  var xs = this._xs || (this._xs = new Float64Array(64)), m;
  for (var j = j0; j <= j1; j++) {
    var zc = z0 + (j + 0.5) * this.res; m = 0;
    for (var ia = 0, ib = n - 1; ia < n; ib = ia++) {
      var p = poly[ia], q = poly[ib];
      if ((p[1] > zc) !== (q[1] > zc) && m < 64) xs[m++] = p[0] + (q[0] - p[0]) * (zc - p[1]) / (q[1] - p[1]);
    }
    if (m < 2) continue;
    if (m === 2) { if (xs[0] > xs[1]) { var tt = xs[0]; xs[0] = xs[1]; xs[1] = tt; } }
    else { var arr = Array.prototype.slice.call(xs, 0, m).sort(function (u, w) { return u - w; }); for (k = 0; k < m; k++) xs[k] = arr[k]; }
    var row = j * W;
    for (k = 0; k + 1 < m; k += 2) {
      var i0 = Math.ceil((xs[k] - x0) * inv - 0.5), i1 = Math.floor((xs[k + 1] - x0) * inv - 0.5);
      if (i0 < 0) i0 = 0; if (i1 > W - 1) i1 = W - 1;
      if (pred) { for (var i = i0; i <= i1; i++) if (pred(a[row + i])) a[row + i] = v; }
      else for (i = i0; i <= i1; i++) a[row + i] = v;
    }
  }
};
Raster.prototype.fillRect = function (x0, z0, x1, z1, v, pred) { this.fillPoly([[x0, z0], [x1, z0], [x1, z1], [x0, z1]], v, pred); };
Raster.prototype.fillEllipse = function (cx, cz, rx, rz, v, rot, pred, nseg) {
  var poly = [], c = Math.cos(rot || 0), s = Math.sin(rot || 0), N = nseg || 40;
  for (var k = 0; k < N; k++) { var t = k / N * Math.PI * 2, ex = Math.cos(t) * rx, ez = Math.sin(t) * rz; poly.push([cx + ex * c - ez * s, cz + ex * s + ez * c]); }
  this.fillPoly(poly, v, pred);
};
Raster.prototype.strokePoly = function (pts, w, v, pred) {
  for (var k = 0; k < pts.length - 1; k++) {
    var a = pts[k], b = pts[k + 1], dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz) || 1, nx = -dz / L * w / 2, nz = dx / L * w / 2;
    this.fillPoly([[a[0] + nx, a[1] + nz], [b[0] + nx, b[1] + nz], [b[0] - nx, b[1] - nz], [a[0] - nx, a[1] - nz]], v, pred);
    if (k < pts.length - 2) this.fillEllipse(b[0], b[1], w / 2, w / 2, v, 0, pred, 10);
  }
};
function blobPoly(cx, cz, rx, rz, seed, n) { // irregular natural outline
  var o = [];
  for (var k = 0; k < (n || 36); k++) {
    var t = k / (n || 36) * Math.PI * 2, f = 0.82 + 0.3 * vnoise(Math.cos(t) * 2 + seed, Math.sin(t) * 2 + seed * 1.7);
    o.push([cx + Math.cos(t) * rx * f, cz + Math.sin(t) * rz * f]);
  }
  return o;
}
