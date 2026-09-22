// ============================================================================================
// 30 GEN — land use raster, terrain heightfield, buildings, trees, props, parking slots
// ============================================================================================
var LUR = null, OCC = null, HF = null;
var BLD = [], TREES = [], LIGHTS = [], SIGNS = [], PROPS = [], SLOTS = [], FIELDS = [], HOLES = [], DRUMS = [], BARRIERS = [], FENCES = [], WORKERS = [], PLANES = [];
var QUALITY = { houses: 1, trees: 1 };
var NO_HOUSES = { frontW: 1, frontE: 1, nscr: 1, tpp: 1, north: 1, a89: 1, a99m: 1, lincoln: 1 };

function genParcelStreets() {
  PARCELS.forEach(function (p) {
    if (p.type !== 'mobile') return;
    var x0 = X(p.r[0]) - 4, x1 = X(p.r[1]) - 14, zs = Z(p.r[2]) - 18, zn = Z(p.r[3]) + 14;
    for (var z = zs; z > zn; z -= 46) addPL({ pts: resample([[x0, z], [x1, z]], 10), cls: 'local', gen: true, name: 'Mobile home park drive', district: 'mhp' });
    addPL({ pts: resample([[x1, zs], [x1, zn]], 10), cls: 'local', gen: true, name: 'Mobile home park drive', district: 'mhp' });
  });
}

// ---------------- land use ----------------
var TPC_LAYOUT = null;
function buildTPC() {
  var A = AREAS.tpc, holes = [], ponds = [];
  var r = mulberry32(3003);
  function R(a, b) { return a + (b - a) * r(); }
  // 18 holes: front nine loops the west half, back nine the east half, both returning to the clubhouse
  var cx = X(3.58), cz = Z(114.9), W = A.x1 - A.x0, D = A.z1 - A.z0;
  var wps = [];
  [[A.x0 + W * 0.27, -1], [A.x0 + W * 0.72, 1]].forEach(function (lp, li) {
    for (var k = 0; k <= 9; k++) {
      var t = k / 9 * Math.PI * 2 + (li ? Math.PI : 0), rx = W * 0.22, rz = D * 0.4;
      var px = lp[0] + Math.cos(t) * rx * R(0.7, 1.05), pz = (A.z0 + A.z1) / 2 + Math.sin(t) * rz * R(0.7, 1.05);
      if (k === 0 || k === 9) { px = cx + R(-20, 20) + (li ? 40 : -10); pz = cz + R(-10, 30); }
      wps.push([clamp(px, A.x0 + 35, A.x1 - 35), clamp(pz, A.z0 + 35, A.z1 - 35)]);
    }
  });
  for (var h = 0; h < 18; h++) {
    var a = wps[h < 9 ? h : h + 1], b = wps[h < 9 ? h + 1 : h + 2], len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    var tee = [a[0] + (b[0] - a[0]) * 12 / len, a[1] + (b[1] - a[1]) * 12 / len];
    holes.push({ tee: tee, green: b, w: R(24, 32), par: len < 120 ? 3 : (len > 200 ? 5 : 4) });
  }
  for (var k = 0; k < 6; k++) { var hh = holes[Math.floor(r() * 18)], t = R(0.35, 0.7); ponds.push({ x: hh.tee[0] + (hh.green[0] - hh.tee[0]) * t + R(-30, 30), z: hh.tee[1] + (hh.green[1] - hh.tee[1]) * t + R(-30, 30), rx: R(22, 45), rz: R(16, 30) }); }
  TPC_LAYOUT = { holes: holes, ponds: ponds, club: [X(3.575), Z(114.95)] };
  HOLES = holes;
}
function buildLandUse() {
  LUR = new Raster(5);
  var L = LUR;
  // rural districts -> fields (with shelterbelts left as grass)
  DISTRICTS.forEach(function (d) { if (d.style === 'rural') L.fillRect(X(d.r[0]), Z(d.r[3]), X(d.r[1]), Z(d.r[2]), LU.FIELD); });
  L.fillRect(X(-0.97), Z(135.4), X(5.45), Z(133.2), LU.FIELD);
  L.fillRect(X(3.46), Z(133), X(4.5), Z(125.2), LU.FIELD);
  // scattered farm fields at the growth edges
  for (var k = 0; k < 26; k++) {
    var fx = rr(X(2.0), X(5.4)), fz = rr(Z(133), Z(118));
    if (fx > X(3.4) && fx < X(4.5) && fz > Z(118.4)) continue;
    L.fillRect(fx, fz, fx + rr(120, 260), fz + rr(90, 200), LU.FIELD, function (v) { return v === LU.GRASS; });
  }
  // woodlots
  for (k = 0; k < 40; k++) {
    var wx = rr(WORLD.x0, WORLD.x1), wz = rr(WORLD.z0, WORLD.z1);
    L.fillPoly(blobPoly(wx, wz, rr(35, 90), rr(30, 70), k * 3.1), LU.FOREST);
  }
  // Rice Creek corridor: marsh + woods, then the water channel
  var creek = Ms(RICE_CREEK);
  L.strokePoly(creek, 120, LU.FOREST);
  L.strokePoly(creek, 55, LU.MARSH);
  // TPC Twin Cities: wooded course
  var A = AREAS.tpc;
  L.fillRect(A.x0, A.z0, A.x1, A.z1, LU.FOREST);
  TPC_LAYOUT.holes.forEach(function (h) {
    L.strokePoly([h.tee, h.green], h.w + 26, LU.ROUGH);
  });
  TPC_LAYOUT.holes.forEach(function (h) {
    L.strokePoly([h.tee, h.green], h.w, LU.FAIRWAY);
    L.fillEllipse(h.green[0], h.green[1], 15, 13, LU.GREEN);
    L.fillEllipse(h.tee[0], h.tee[1], 8, 6, LU.GREEN);
    var dx = h.green[0] - h.tee[0], dz = h.green[1] - h.tee[1], dl = Math.hypot(dx, dz);
    L.fillEllipse(h.green[0] - dz / dl * 18, h.green[1] + dx / dl * 18, 7, 5, LU.SAND);
    L.fillEllipse(h.tee[0] + dx * 0.62 + dz / dl * 17, h.tee[1] + dz * 0.62 - dx / dl * 17, 9, 6, LU.SAND);
  });
  L.fillRect(X(3.5), Z(115.35), X(3.66), Z(114.5), LU.LAWN);
  // National Sports Center
  var N = AREAS.nsc;
  L.fillRect(N.x0, N.z0, N.x1, N.z1, LU.LAWN);
  // Airport
  var AP = AREAS.airport;
  L.fillRect(AP.x0, AP.z0, AP.x1, AP.z1, LU.AIRGRASS);
  // Laddie Lake + park, ponds
  L.fillEllipse(LADDIE.x - 20, LADDIE.z + 8, LADDIE.rx + 45, LADDIE.rz + 32, LU.LAWN);
  L.fillPoly(blobPoly(LADDIE.x + 90, LADDIE.z - 60, 70, 45, 7), LU.MARSH);
  L.fillPoly(blobPoly(LADDIE.x, LADDIE.z, LADDIE.rx, LADDIE.rz, 2.2, 48), LU.WATER);
  PONDS.forEach(function (p, i) { L.fillPoly(blobPoly(p.x, p.z, p.rx + 8, p.rz + 8, i + 11), LU.MARSH); L.fillPoly(blobPoly(p.x, p.z, p.rx, p.rz, i + 11), LU.WATER); });
  TPC_LAYOUT.ponds.forEach(function (p, i) { L.fillPoly(blobPoly(p.x, p.z, p.rx, p.rz, i + 40), LU.WATER); });
  L.strokePoly(creek, 13, LU.WATER);
  // parcels & lots
  PARCELS.forEach(function (p) {
    var v = p.type === 'mobile' ? LU.GRASS : (p.type === 'apts' ? LU.LAWN : LU.LOT);
    L.fillRect(X(p.r[0]), Z(p.r[3]), X(p.r[1]), Z(p.r[2]), v);
  });
  LOTS.forEach(function (l) { L.fillRect(l.x0, l.z0, l.x1, l.z1, l.name.indexOf('grass') >= 0 ? LU.LAWN : LU.LOT); });
  var M2 = AREAS.mall; L.fillRect(M2.x0, M2.z0, M2.x1, M2.z1, LU.LOT);
  var S = AREAS.school; L.fillRect(S.x0, S.z0, S.x1, S.z1, LU.LAWN);
  var CH = AREAS.cityhall; L.fillRect(CH.x0, CH.z0, CH.x1, CH.z1, LU.LAWN);
  var CU = AREAS.curling; L.fillRect(CU.x0, CU.z0, CU.x1, CU.z1, LU.LOT);
  // Hwy 65 work zone: torn-up outer shoulders and the future 105th Ave interchange footprint
  L.fillRect(X(1.6) + 22, Z(108.45), X(1.6) + 40, Z(101.55), LU.DIRT);
  L.fillRect(X(1.6) - 40, Z(108.45), X(1.6) - 22, Z(101.55), LU.DIRT);
  L.fillRect(X(1.6) - 70, Z(105.8), X(1.6) + 70, Z(104.2), LU.DIRT, function (v) { return v !== LU.WATER; });
}

// ---------------- terrain ----------------
function buildHeightfield(step) {
  var nx = Math.ceil(WORLD.w / step) + 1, nz = Math.ceil(WORLD.d / step) + 1;
  HF = { step: step, nx: nx, nz: nz, h: new Float32Array(nx * nz) };
  // proximity-to-road mask so terrain never rises over a road
  var RM = new Raster(8);
  NET.edges.forEach(function (e) { RM.strokePoly(e.pts, e.hw * 2 + 70, 2); });
  NET.edges.forEach(function (e) { RM.strokePoly(e.pts, e.hw * 2 + 22, 1); });
  var CR = new Raster(6), creek = Ms(RICE_CREEK);
  CR.strokePoly(creek, 52, 1); CR.strokePoly(creek, 34, 2); CR.strokePoly(creek, 18, 3);
  for (var j = 0; j < nz; j++) for (var i = 0; i < nx; i++) {
    var x = WORLD.x0 + i * step, z = WORLD.z0 + j * step, h = 0;
    var m = RM.get(x, z), fm = m === 1 ? 0 : (m === 2 ? 0.45 : 1);
    var A = AREAS.tpc;
    if (x > A.x0 - 60 && x < A.x1 + 60 && z > A.z0 - 60 && z < A.z1 + 60) {
      var edge = Math.min(x - A.x0 + 60, A.x1 + 60 - x, z - A.z0 + 60, A.z1 + 60 - z) / 90;
      h += 6.5 * (fbm(x / 180, z / 180, 3) - 0.42) * clamp(edge, 0, 1);
    }
    var lu = LUR.get(x, z);
    if (lu === LU.FIELD || lu === LU.FOREST) h += 2.2 * (fbm(x / 260 + 9, z / 260 + 4, 3) - 0.45);
    h *= fm;
    // Laddie Lake basin, ponds, creek channel (depressions allowed under bridges)
    var dl = Math.sqrt(Math.pow((x - LADDIE.x) / (LADDIE.rx + 12), 2) + Math.pow((z - LADDIE.z) / (LADDIE.rz + 12), 2));
    if (dl < 1.25) h = Math.min(h, -1.6 * smooth(1.25, 0.85, dl));
    if (lu === LU.WATER || lu === LU.MARSH) h = Math.min(h, lu === LU.WATER ? -1.4 : -0.4);
    var cv = CR.get(x, z);
    if (cv) h = Math.min(h, -[0, 0.45, 1.2, 2.0][cv]);
    HF.h[j * nx + i] = h;
  }
}
function groundH(x, z) {
  var fx = (x - WORLD.x0) / HF.step, fz = (z - WORLD.z0) / HF.step, i = Math.floor(fx), j = Math.floor(fz);
  if (i < 0 || j < 0 || i >= HF.nx - 1 || j >= HF.nz - 1) return 0;
  var u = fx - i, v = fz - j, n = HF.nx, a = HF.h[j * n + i], b = HF.h[j * n + i + 1], c = HF.h[(j + 1) * n + i], d = HF.h[(j + 1) * n + i + 1];
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

// ---------------- occupancy + buildings ----------------
function occFree(x, z, hw, hd, rot, margin) {
  var c = Math.cos(rot), s = Math.sin(rot), m = margin || 0;
  for (var a = -hw - m; a <= hw + m + 0.1; a += 3) for (var b = -hd - m; b <= hd + m + 0.1; b += 3) {
    var px = x + a * c + b * s, pz = z - a * s + b * c;
    if (OCC.get(px, pz)) return false;
    var lu = LUR.get(px, pz); if (lu === LU.WATER || lu === LU.MARSH) return false;
  }
  return true;
}
function occMark(x, z, hw, hd, rot) {
  var c = Math.cos(rot), s = Math.sin(rot), pts = [[-hw, -hd], [hw, -hd], [hw, hd], [-hw, hd]].map(function (p) { return [x + p[0] * c + p[1] * s, z - p[0] * s + p[1] * c]; });
  OCC.fillPoly(pts, 1);
}
var _rq2 = {};
function clearOfRoads(x, z, r) {
  for (var a = 0; a < 6.28; a += 1.05) { if (roadAt(x + Math.cos(a) * r, z + Math.sin(a) * r, 0, _rq2)) return false; }
  return !roadAt(x, z, 0, _rq2);
}
var SIDING = [0xd9ccb0, 0xc8b89a, 0xb9b5a8, 0xe8e4d8, 0x9fb3c4, 0xa9b89a, 0x8a7560, 0xf0e6c8, 0xe6d9a0, 0x6f7479, 0x8c9296, 0xb5a28a, 0xcfd4d6];
var ROOFS = [0x3b3b3e, 0x4a3f36, 0x2c2c2e, 0x5a5550, 0x6b5d4f, 0x44484c];
function addBld(o) {
  // o: x,z,w (along rot axis),d,h,rot,roof ('gable'|'flat'|'barrel'|'none'),rh,col,rcol,kind,win
  BLD.push(o);
  occMark(o.x, o.z, o.w / 2 + 1, o.d / 2 + 1, o.rot);
  return o;
}
function placeHouses() {
  var styleOf = {};
  DISTRICTS.forEach(function (d) { styleOf[d.id] = d; });
  NET.edges.forEach(function (e) {
    var pl = e.pl;
    if (!(pl.cls === 'local' || pl.cls === 'col' || pl.cls === 'rural' || pl.cls === 'gravel')) return;
    if (pl.lot || pl.stub || NO_HOUSES[pl.road]) return;
    var mhp = pl.district === 'mhp';
    var d = styleOf[pl.district] || { era: 'mid', style: 'grid' };
    var rural = d.style === 'rural' || pl.cls === 'rural' || pl.cls === 'gravel';
    var dens = (d.dens || 1) * QUALITY.houses;
    var sp = mhp ? 10 : (rural ? rr(260, 420) : (d.era === 'new' ? 25 : 23));
    var town = false;
    if (e.len < 30) return;
    for (var s = mhp ? 12 : 16; s < e.len - (mhp ? 8 : 16); s += sp * (rural ? rr(0.7, 1.3) : 1)) {
      var at = pointAt(e.pts, e.cum, s), rx = -at.dz, rz = at.dx;
      for (var side = -1; side <= 1; side += 2) {
        if (rand() > dens) continue;
        if (mhp && side < 0 && rand() < 0.1) continue;
        var W, D, H, rh, sb, kind = 'house', rot = yawOf(at.dx, at.dz);
        town = false;
        for (var q = 0; q < HOUSE_HINTS.length; q++) { var hh = HOUSE_HINTS[q]; if (at.x > hh.x0 && at.x < hh.x1 && at.z > hh.z0 && at.z < hh.z1) town = true; }
        if (mhp) { W = 5; D = rr(16, 21); H = 3.0; rh = 0.6; sb = e.hw + 4 + D / 2; kind = 'mobile'; }
        else if (rural) { W = 13; D = 10; H = 6; rh = 3.2; sb = rr(40, 70); kind = 'farm'; }
        else if (town) { W = rr(34, 42); D = 11; H = 6.2; rh = 2.6; sb = e.hw + 9 + D / 2; kind = 'town'; }
        else if (d.era === 'old') { W = rr(12.5, 15); D = rr(8.5, 10); H = 3.1; rh = 1.7; sb = e.hw + 10 + D / 2; }
        else if (d.era === 'new') { W = rr(14.5, 18); D = rr(10.5, 13); H = 5.9; rh = 3.0; sb = e.hw + 9.5 + D / 2; }
        else { W = rr(13, 16); D = rr(9.5, 11.5); H = rand() < 0.5 ? 4.4 : 5.6; rh = 2.3; sb = e.hw + 10 + D / 2; }
        var hx = at.x + rx * side * sb, hz = at.z + rz * side * sb;
        var hw = mhp ? D / 2 : W / 2, hd = mhp ? W / 2 : D / 2;
        var brot = mhp ? yawOf(rx * side, rz * side) : rot;
        if (blocked(hx, hz) && !mhp && !rural) continue;
        if (!occFree(hx, hz, (mhp ? D : W) / 2, (mhp ? W : D) / 2, mhp ? brot : rot, 2.5)) continue;
        if (!clearOfRoads(hx, hz, Math.max(W, D) * 0.62)) continue;
        var col = pick(SIDING), rcol = pick(ROOFS);
        if (mhp) { col = pick([0xe9e6dc, 0xd8dde0, 0xe6dfc8, 0xc9d6c9, 0xdad2c2]); rcol = 0x9a9a98; }
        var b = addBld({ x: hx, z: hz, w: mhp ? D : W, d: mhp ? W : D, h: H, rot: mhp ? brot : rot, roof: 'gable', rh: rh, col: col, rcol: rcol, kind: kind, face: side });
        // attached garage + driveway parking slot
        if (!mhp && !town && !rural && rand() < 0.85) {
          var gw = d.era === 'new' ? 9.5 : 7, gs = rand() < 0.5 ? 1 : -1, gx = hx + at.dx * (W / 2 + gw / 2) * gs, gz = hz + at.dz * (W / 2 + gw / 2) * gs;
          if (occFree(gx, gz, gw / 2, 3.4, rot, 0.5) && clearOfRoads(gx, gz, 5)) {
            addBld({ x: gx, z: gz, w: gw, d: 7, h: 2.9, rot: rot, roof: 'gable', rh: 1.2, col: col, rcol: rcol, kind: 'garage' });
            var dx0 = gx - rx * side * (3.5 + 3), dz0 = gz - rz * side * (3.5 + 3);
            SLOTS.push({ x: dx0, z: dz0, rot: yawOf(-rx * side, -rz * side), venue: 'home', p: 0.55 });
          }
        }
        if (rural) placeFarmstead(hx, hz, rot, side, rx, rz);
        // yard trees
        var nt = d.era === 'old' ? 2 : 1;
        for (var t = 0; t < nt; t++) {
          var tx = hx + rx * side * rr(D / 2 + 6, D / 2 + 13) + at.dx * rr(-W / 2, W / 2), tz = hz + rz * side * rr(D / 2 + 6, D / 2 + 13) + at.dz * rr(-W / 2, W / 2);
          if (!OCC.get(tx, tz)) addTree(tx, tz, rand() < (d.era === 'old' ? 0.3 : 0.45) ? 0 : 1, d.era === 'old' ? rr(1.0, 1.4) : rr(0.6, 0.9));
        }
        if (d.era === 'old' && rand() < 0.5) { var fx = at.x + rx * side * (e.hw + 3.5), fz = at.z + rz * side * (e.hw + 3.5); if (!OCC.get(fx, fz)) addTree(fx, fz, 1, rr(1.0, 1.3)); }
      }
    }
  });
}
function placeFarmstead(hx, hz, rot, side, rx, rz) {
  var fdx = Math.cos(rot), fdz = -Math.sin(rot);
  var bx = hx + rx * side * 32 + fdx * 20, bz = hz + rz * side * 32 + fdz * 20;
  if (occFree(bx, bz, 8, 13, rot + Math.PI / 2, 2) && clearOfRoads(bx, bz, 14)) {
    addBld({ x: bx, z: bz, w: 15, d: 26, h: 6.5, rot: rot, roof: 'gable', rh: 4.2, col: 0x8e2a22, rcol: 0x55504a, kind: 'barn' });
    PROPS.push({ type: 'silo', x: bx + fdx * 12, z: bz + fdz * 12, h: rr(14, 19), r: 3 });
    var sx = bx - fdx * 26, sz = bz - fdz * 26;
    if (occFree(sx, sz, 10, 16, rot, 1)) addBld({ x: sx, z: sz, w: 18, d: 30, h: 5, rot: rot, roof: 'gable', rh: 2, col: 0x9ea3a6, rcol: 0x8a8f92, kind: 'shed' });
  }
  // shelterbelt on the windward (north-west) side
  for (var k = 0; k < 12; k++) addTree(hx - 40 + k * 7, hz - 45 + rr(-2, 2), 0, rr(0.9, 1.2));
}
function placeParcels() {
  PARCELS.forEach(function (p) {
    var x0 = X(p.r[0]), x1 = X(p.r[1]), zS = Z(p.r[2]), zN = Z(p.r[3]), cx = (x0 + x1) / 2, cz = (zS + zN) / 2, W = x1 - x0, D = zS - zN;
    // face the nearest major road
    var face = Math.abs(cx - X(1.6)) < Math.abs(cx - X(0)) && Math.abs(cx - X(1.6)) < 400 ? (cx > X(1.6) ? -1 : 1) : 0;
    if (p.type === 'mobile') return;
    if (p.type === 'strip') {
      var n = Math.max(1, Math.round(D / 110));
      for (var k = 0; k < n; k++) {
        var bz = zN + D * (k + 0.5) / n, bl = D / n - 26, bx = face ? (face < 0 ? x1 - 16 : x0 + 16) : cx;
        if (!face) addBld({ x: cx, z: zN + 16, w: W - 20, d: 22, h: 6.5, rot: 0, roof: 'flat', col: pick([0xc9b8a0, 0xb0a490, 0xd6cdbd, 0x9c8f7d]), kind: 'comm', sign: true });
        else addBld({ x: bx, z: bz, w: 22, d: Math.max(20, bl), h: rr(6, 8), rot: 0, roof: 'flat', col: pick([0xc9b8a0, 0xb0a490, 0xd6cdbd, 0x9c8f7d, 0xa8583c]), kind: 'comm', sign: true });
      }
      slotsGrid(face ? (face < 0 ? x0 + 6 : x0 + 34) : x0 + 6, face ? (face < 0 ? x1 - 34 : x1 - 6) : x1 - 6, face ? zN + 6 : zN + 34, zS - 6, 'retail');
    } else if (p.type === 'bigbox') {
      var bw = Math.min(W - 60, 150), bd = Math.min(D * 0.45, 95);
      var bxx = face ? (face < 0 ? x1 - bw / 2 - 12 : x0 + bw / 2 + 12) : cx;
      addBld({ x: bxx, z: zN + bd / 2 + 14, w: bw, d: bd, h: 9.5, rot: 0, roof: 'flat', col: pick([0xbfb4a3, 0xa9a39a, 0xc4b59c]), kind: 'comm', sign: true, big: true });
      if (D > 200) addBld({ x: bxx, z: zN + bd + 70, w: bw * 0.6, d: 60, h: 8, rot: 0, roof: 'flat', col: 0xb8b0a2, kind: 'comm', sign: true });
      slotsGrid(x0 + 8, x1 - 8, zN + bd + 30, zS - 8, 'retail');
    } else if (p.type === 'apts') {
      addBld({ x: cx, z: cz, w: W - 30, d: 18, h: 12, rot: 0, roof: 'gable', rh: 3, col: 0xb5a58c, rcol: 0x3f3f42, kind: 'apt' });
    } else if (p.type === 'industrial') {
      for (var q = 0; q < 3; q++) { var ix = x0 + W * (q + 0.5) / 3, iz = cz + rr(-20, 20); if (occFree(ix, iz, 45, 28, 0, 2)) addBld({ x: ix, z: iz, w: 90, d: 56, h: 9, rot: 0, roof: 'flat', col: pick([0xa6a8a8, 0x8f9496, 0xc2beb4]), kind: 'ind' }); }
    }
  });
}
function slotsGrid(x0, x1, z0, z1, venue, rotAlt) {
  for (var z = z0 + 3; z < z1 - 2; z += 18) for (var x = x0 + 2; x < x1 - 2; x += 2.9) {
    if (roadAt(x, z, 0, _rq2)) continue;
    SLOTS.push({ x: x, z: z, rot: Math.PI / 2, venue: venue, p: 0.5 });
    if (z + 5.5 < z1) SLOTS.push({ x: x, z: z + 5.5, rot: -Math.PI / 2, venue: venue, p: 0.5 });
  }
}
// ---------------- landmarks ----------------
var NSCL = null;
function placeLandmarks() {
  // --- National Sports Center: Super Rink, stadium, velodrome, 50+ fields ---
  NSCL = { rink: { x: 1500, z: -2155, w: 180, d: 130 }, stadium: { x: 1705, z: -2160, w: 150, d: 128 }, velo: { x: 1880, z: -2152, a: 55, b: 28 } };
  BLD.push({ x: 1500, z: -2155, w: 180, d: 130, h: 11, rot: 0, roof: 'barrel', vaults: 4, col: 0xdad8d2, rcol: 0xe8ecef, kind: 'rink', noInst: true });
  occMark(1500, -2155, 92, 67, 0);
  occMark(1705, -2160, 78, 66, 0); occMark(1880, -2152, 62, 34, 0);
  var f = 0, x, z;
  for (z = -2266; z > -2372 + 40; z -= 50) for (x = 1428; x < 2565 - 60; x += 74) { FIELDS.push({ x: x + 32, z: z - 20, w: 64, d: 40 }); f++; }
  for (z = -2040; z > -2244 + 40; z -= 50) for (x = 2014; x < 2430 - 60; x += 74) { FIELDS.push({ x: x + 32, z: z - 20, w: 64, d: 40 }); f++; }
  FIELDS.forEach(function (fl) { LUR.fillRect(fl.x - fl.w / 2 - 3, fl.z - fl.d / 2 - 3, fl.x + fl.w / 2 + 3, fl.z + fl.d / 2 + 3, LU.TURF); occMark(fl.x, fl.z, fl.w / 2, fl.d / 2, 0); });
  LUR.fillRect(1705 - 52, -2160 - 34, 1705 + 52, -2160 + 34, LU.TURF);
  slotsGrid(1410, 1985, -2076, -2030, 'nsc'); slotsGrid(2445, 2555, -2236, -2034, 'nsc');
  for (var lt = 0; lt < 8; lt++) PROPS.push({ type: 'lighttower', x: 1705 + (lt % 2 ? 70 : -70), z: -2160 - 50 + Math.floor(lt / 2) * 33 });
  // --- Blaine City Hall (brick wings + glass atrium) ---
  var CH = AREAS.cityhall, chx = (CH.x0 + CH.x1) / 2, chz = (CH.z0 + CH.z1) / 2 - 30;
  BLD.push({ x: chx, z: chz, w: 30, d: 56, h: 9, rot: 0, roof: 'flat', col: 0x9a5a44, kind: 'cityhall', noInst: true }); occMark(chx, chz, 18, 30, 0);
  PROPS.push({ type: 'flag', x: chx - 22, z: chz + 34 });
  // --- Four Seasons Curling Club / Fogerty Arena ---
  var CU = AREAS.curling, cux = (CU.x0 + CU.x1) / 2, cuz = (CU.z0 + CU.z1) / 2 + 20;
  BLD.push({ x: cux, z: cuz, w: 90, d: 62, h: 9, rot: 0, roof: 'curling', col: 0xc9c2b4, kind: 'curling', noInst: true }); occMark(cux, cuz, 46, 32, 0);
  slotsGrid(CU.x0 + 4, CU.x1 - 4, CU.z0 + 4, CU.z0 + 30, 'curling');
  // --- TPC Twin Cities clubhouse ---
  BLD.push({ x: TPC_LAYOUT.club[0], z: TPC_LAYOUT.club[1], w: 60, d: 34, h: 8, rot: 0.2, roof: 'gable', rh: 6, col: 0x8c8278, rcol: 0x3d3a36, kind: 'club', noInst: true });
  occMark(TPC_LAYOUT.club[0], TPC_LAYOUT.club[1], 32, 19, 0.2);
  slotsGrid(X(3.52), X(3.62), Z(115.2), Z(114.65), 'tpc');
  slotsGrid(X(3.48), X(3.78), Z(119.6), Z(118.55), 'tpc3m');
  // --- Northtown Mall ---
  var MA = AREAS.mall;
  addBld({ x: (MA.x0 + MA.x1) / 2, z: (MA.z0 + MA.z1) / 2, w: 300, d: 150, h: 10, rot: 0, roof: 'flat', col: 0xc7b9a6, kind: 'mall', sign: true, big: true });
  slotsGrid(MA.x0 + 4, MA.x1 - 4, Z(92.5), Z(92.1), 'mall'); slotsGrid(MA.x0 + 4, MA.x1 - 4, Z(90.55), Z(90.25), 'mall');
  // --- Blaine High School ---
  var SC = AREAS.school;
  addBld({ x: SC.x0 + 110, z: SC.z1 - 70, w: 170, d: 110, h: 10, rot: 0, roof: 'flat', col: 0xa86a4c, kind: 'school', sign: true, big: true });
  FIELDS.push({ x: SC.x0 + 110, z: SC.z0 + 60, w: 100, d: 60, track: true }); LUR.fillRect(SC.x0 + 50, SC.z0 + 25, SC.x0 + 170, SC.z0 + 95, LU.TURF);
  // --- Airport: runways, taxiways, hangars, tower, parked planes, fence ---
  var AP = AREAS.airport;
  LUR.fillRect(1760, -1100 - 15, 2520, -1100 + 15, LU.RUNWAY);           // 9/27
  LUR.fillRect(2300 - 15, -1480, 2300 + 15, -730, LU.RUNWAY);            // 18/36
  LUR.fillRect(1760, -1100 + 45, 2520, -1100 + 57, LU.RUNWAY);           // parallel taxiway
  LUR.fillRect(2300 - 70, -1480, 2300 - 58, -730, LU.RUNWAY);
  LUR.fillRect(1740, -690, 2000, -470, LU.RUNWAY);                        // apron
  LUR.fillRect(1740, -1058, 1760, -690, LU.RUNWAY);
  for (var hr = 0; hr < 5; hr++) addBld({ x: 1790 + hr * 45, z: -520, w: 36, d: 18, h: 5, rot: 0, roof: 'flat', col: 0xb7bcc0, kind: 'hangar' });
  for (hr = 0; hr < 3; hr++) addBld({ x: 1800 + hr * 70, z: -640, w: 50, d: 34, h: 9, rot: 0, roof: 'barrelsmall', rh: 4, col: 0xa9afb3, rcol: 0x8b9398, kind: 'hangar' });
  addBld({ x: 1760, z: -460, w: 24, d: 16, h: 5, rot: 0, roof: 'flat', col: 0xc4b8a4, kind: 'fbo', sign: true });
  PROPS.push({ type: 'tower', x: 1990, z: -480 });
  PROPS.push({ type: 'windsock', x: 2250, z: -1150 });
  for (var pp = 0; pp < 9; pp++) PLANES.push({ x: 1780 + (pp % 5) * 42, z: -600 + Math.floor(pp / 5) * 60, rot: Math.PI / 2 + rr(-0.2, 0.2), col: pick([0xffffff, 0xf2f0e6, 0xd8e2ea]) });
  var fence = [[AP.x0, AP.z1], [AP.x0, AP.z0], [AP.x1, AP.z0], [AP.x1, AP.z1], [1810, AP.z1]];
  FENCES.push(fence);
  // --- Laddie Lake Park ---
  PROPS.push({ type: 'shelter', x: LADDIE.x + 80, z: LADDIE.z + 125 }); PROPS.push({ type: 'pier', x: LADDIE.x + 20, z: LADDIE.z + LADDIE.rz - 4, rot: Math.PI / 2 });
  // city-limit signs
  SIGNS.push({ type: 'welcome', x: X(1.6) + 26, z: Z(85.9), fx: 0, fz: 1 });
  SIGNS.push({ type: 'welcome', x: X(0) + 14, z: Z(95.5), fx: 0, fz: 1 });
}
// ---------------- Hwy 65 work zone (2026 reconstruction) ----------------
function placeWorkZone() {
  var zA = Z(101.55), zB = Z(108.45);
  NET.edges.forEach(function (e) {
    if (!e.pl.construction) return;
    // drums on the line between the last open lane and the closed lane, with a taper at the upstream end
    var closedOff = laneOffset(e, true, e.closed) - e.laneW / 2 - 0.3;
    for (var s = 2; s < e.len - 2; s += 12) {
      var at = pointAt(e.pts, e.cum, s), rx = -at.dz, rz = at.dx;
      var taper = e.pl.cum ? 1 : 1;
      var node = NET.nodes[e.a], nb = NET.nodes[e.b];
      if (Math.sqrt(dist2(at.x, at.z, node.x, node.z)) < node.r + 3 || Math.sqrt(dist2(at.x, at.z, nb.x, nb.z)) < nb.r + 3) continue;
      DRUMS.push({ x: at.x + rx * closedOff, z: at.z + rz * closedOff, e: e.id });
    }
  });
  // upstream tapers (drums angled across the closed lane)
  NET.edges.forEach(function (e) {
    if (!e.pl.construction) return;
    var up = e.dir === 'NB' ? e.pts[0] : null;
  });
  // equipment + future interchange works at 105th
  var x65 = X(1.6);
  [[x65 + 31, Z(103.2), 'excavator', 0], [x65 + 30, Z(106.8), 'loader', Math.PI / 2], [x65 - 31, Z(104.0), 'roller', Math.PI / 2], [x65 - 30, Z(107.4), 'excavator', Math.PI],
   [x65 + 55, Z(104.6), 'crane', 0], [x65 - 55, Z(105.5), 'truck', 0.3]].forEach(function (q) { PROPS.push({ type: q[2], x: q[0], z: q[1], rot: q[3], work: true }); });
  for (var k = -1; k <= 1; k += 2) for (var j = 0; j < 3; j++) PROPS.push({ type: 'pier', x: x65 + k * 48, z: Z(105) + (j - 1) * 14, h: 7.5, work: true });
  for (k = 0; k < 7; k++) WORKERS.push({ x: x65 + (k % 2 ? 28 : -28) + rr(-4, 4), z: rr(Z(107.5), Z(102.5)), rot: rr(0, 6.28) });
  // portable concrete barrier protecting the work area
  [[x65 + 21, zA - 20, x65 + 21, zB + 20], [x65 - 21, zA - 20, x65 - 21, zB + 20]].forEach(function (b) { BARRIERS.push(b); });
  SIGNS.push({ type: 'roadwork', x: x65 + 22, z: Z(99.6), fx: 0, fz: 1 }); SIGNS.push({ type: 'roadwork', x: x65 - 22, z: Z(110.4), fx: 0, fz: -1 });
  SIGNS.push({ type: 'wz45', x: x65 + 22, z: Z(100.9), fx: 0, fz: 1 }); SIGNS.push({ type: 'wz45', x: x65 - 22, z: Z(109.1), fx: 0, fz: -1 });
  SIGNS.push({ type: 'fines', x: x65 + 22, z: Z(101.2), fx: 0, fz: 1 }); SIGNS.push({ type: 'fines', x: x65 - 22, z: Z(108.8), fx: 0, fz: -1 });
}
// ---------------- trees ----------------
function addTree(x, z, type, s) { TREES.push({ x: x, z: z, t: type, s: s, v: rand() }); }
function placeTrees() {
  var q = QUALITY.trees;
  // forest cells from land use
  var step = 11;
  for (var z = WORLD.z0; z < WORLD.z1; z += step) for (var x = WORLD.x0; x < WORLD.x1; x += step) {
    var jx = x + rr(-4.5, 4.5), jz = z + rr(-4.5, 4.5), lu = LUR.get(jx, jz);
    var p = lu === LU.FOREST ? 0.55 : (lu === LU.ROUGH ? 0.12 : (lu === LU.MARSH ? 0.08 : (lu === LU.LAWN ? 0.02 : (lu === LU.GRASS ? 0.012 : 0))));
    if (p === 0 || rand() > p * q) continue;
    if (OCC.get(jx, jz)) continue;
    if (roadAt(jx, jz, 0, _rq2) || roadAt(jx + 4, jz, 0, _rq2) || roadAt(jx - 4, jz, 0, _rq2) || roadAt(jx, jz + 4, 0, _rq2) || roadAt(jx, jz - 4, 0, _rq2)) continue;
    var conifer = lu === LU.FOREST ? rand() < 0.35 : rand() < 0.3;
    addTree(jx, jz, conifer ? 0 : 1, rr(0.8, 1.35));
  }
}
// ---------------- street lights, signal heads, signs ----------------
var SIGHEADS = [];
function placeStreetFurniture() {
  NET.edges.forEach(function (e) {
    var c = e.cls; if (!(c === 'hwy' || c === 'art' || c === 'fwy' || c === 'ramp') || e.pl.stub) return;
    var sp = c === 'fwy' ? 70 : 58, side = 1;
    for (var s = 20; s < e.len - 15; s += sp) {
      var at = pointAt(e.pts, e.cum, s), rx = -at.dz, rz = at.dx, k = Math.min(e.pts.length - 2, at.i), h = e.h[k] + (e.h[k + 1] - e.h[k]) * at.f;
      if (!e.lanesB) side = 1; else side = -side;
      if (h > 1 && h < 6.9) continue;
      var off = e.hw + 1.3;
      var lx = at.x + rx * off * side, lz = at.z + rz * off * side;
      if (!e.lanesB || rand() < 0.7) LIGHTS.push({ x: lx, z: lz, y: h, ax: -rx * side, az: -rz * side, led: c === 'hwy' || c === 'fwy' || e.pl.construction, e: e.id });
    }
  });
  // signal heads: one per approach, over the approach lanes on the far side
  NET.signals.forEach(function (g) {
    g.nodes.forEach(function (n) {
      n.edges.forEach(function (id) {
        var e = NET.edges[id], inbound = (e.b === n.id) || (e.a === n.id && e.lanesB > 0);
        if (!inbound) return;
        if (e.pl.stub && e.a === n.id) return;
        var d = edgeDirAtNode(e, n.id, false); // direction of travel into node
        var rx = -d[1], rz = d[0], far = n.r + 3;
        var laneC = e.lanesB > 0 ? (e.pl.center / 2 + e.lanesF * e.laneW / 2) : 0;
        var px = n.x + d[0] * far + rx * (e.hw + 2), pz = n.z + d[1] * far + rz * (e.hw + 2);
        var hx = n.x + d[0] * far + rx * laneC, hz = n.z + d[1] * far + rz * laneC;
        SIGHEADS.push({ node: n, e: e, px: px, pz: pz, hx: hx, hz: hz, fx: -d[0], fz: -d[1], y: n.h });
      });
    });
  });
  // speed-limit signs along majors
  NET.edges.forEach(function (e) {
    if (!(e.cls === 'hwy' || e.cls === 'art' || e.cls === 'fwy' || e.cls === 'rural') || e.len < 160 || e.pl.construction) return;
    [1, -1].forEach(function (dir) {
      if (dir < 0 && !e.lanesB) return;
      var s = dir > 0 ? 45 : e.len - 45, at = pointAt(e.pts, e.cum, s), rx = -at.dz * dir, rz = at.dx * dir;
      var k = Math.min(e.pts.length - 2, at.i), h = e.h[k];
      if (h > 0.5) return;
      SIGNS.push({ type: 'speed', v: Math.round(e.speed / MPH), x: at.x + rx * (e.hw + 1.8), z: at.z + rz * (e.hw + 1.8), fx: -at.dx * dir, fz: -at.dz * dir });
    });
  });
}
function buildWorld() {
  OCC = new Raster(4);
  buildTPC();
  buildLandUse();
  placeLandmarks();
  placeWorkZone();
  placeParcels();
  placeHouses();
  placeTrees();
  placeStreetFurniture();
  buildHeightfield(16);
}
