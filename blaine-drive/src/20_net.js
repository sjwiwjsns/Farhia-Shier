// ============================================================================================
// 20 NET — polylines -> planar road graph with overpasses, ramps, signals and a surface query
// ============================================================================================
var NET = { pls: [], edges: [], nodes: [], byId: {}, lots: [], signals: [], cells: null };
function plWidth(pl) { var c = CLS[pl.cls]; return pl.oneway ? pl.lanes * c.laneW + c.shL + c.shR : 2 * pl.lanes * c.laneW + (pl.center || 0) + 2 * c.shR; }
function addPL(o) {
  var c = CLS[o.cls];
  var pl = {
    id: NET.pls.length, pts: o.pts, cls: o.cls, name: o.name || c.name, alt: o.alt || '', group: o.group || ((o.cls === 'fwy' || o.cls === 'ramp') ? 'fwy' : 'grade'),
    oneway: !!o.oneway, lanes: o.lanes || 1, center: o.center || 0, speed: o.speed || c.speed, road: o.road || null, dir: o.dir || '',
    construction: !!o.construction, layer: o.layer || 0, stub: !!o.stub, gen: !!o.gen, district: o.district || null, lot: !!o.lot, shore: o.shore || null
  };
  pl.width = plWidth(pl);
  NET.pls.push(pl); return pl;
}

// ---------------- majors ----------------
function buildMajors() {
  ROADDEFS.forEach(function (d) {
    var c = CLS[d.cls], pts = Ms(d.pts);
    if (pts.length > 2) pts = chaikin(pts, 3);
    pts = resample(pts, d.cls === 'fwy' ? 8 : 10);
    var base = { cls: d.cls, name: d.name, alt: d.alt, lanes: d.lanes, center: d.center, speed: d.speed, road: d.id, construction: d.construction, shore: d.shore };
    if (d.divided) {
      var cw = d.lanes * c.laneW + c.shL + c.shR, off = d.divided / 2 + cw / 2;
      var f = addPL(Object.assign({}, base, { pts: offsetPoly(pts, off), oneway: true, dir: d.dirs[0] }));
      var b = addPL(Object.assign({}, base, { pts: offsetPoly(pts.slice().reverse(), off), oneway: true, dir: d.dirs[1] }));
      NET.byId[d.id] = { center: pts, fwd: f, bwd: b, def: d, divided: true, halfW: off + cw / 2 };
    } else {
      var pl = addPL(Object.assign({}, base, { pts: pts }));
      NET.byId[d.id] = { center: pts, pl: pl, def: d, halfW: pl.width / 2 };
    }
  });
}
function firstCrossing(A, B) {
  var ca = cumLen(A), cb = cumLen(B);
  for (var i = 0; i < A.length - 1; i++) for (var j = 0; j < B.length - 1; j++) {
    var h = segInter(A[i][0], A[i][1], A[i + 1][0], A[i + 1][1], B[j][0], B[j][1], B[j + 1][0], B[j + 1][1]);
    if (h) return { x: A[i][0] + (A[i + 1][0] - A[i][0]) * h[0], z: A[i][1] + (A[i + 1][1] - A[i][1]) * h[0], sA: ca[i] + (ca[i + 1] - ca[i]) * h[0], sB: cb[j] + (cb[j + 1] - cb[j]) * h[1] };
  }
  return null;
}
function buildInterchanges() {
  INTERCHANGES.forEach(function (ic) {
    var F = NET.byId[ic.fwy], C = NET.byId[ic.cross];
    var P0 = firstCrossing(F.center, C.center); if (!P0) return;
    var cumC = cumLen(C.center), cAt = pointAt(C.center, cumC, P0.sB);
    var crossHalf = C.halfW;
    [F.fwd, F.bwd].forEach(function (cw) {
      var cc = cumLen(cw.pts), sP = projectOnPoly(cw.pts, P0.x, P0.z).s, at = pointAt(cw.pts, cc, sP);
      var d = [at.dx, at.dz], r = [-d[1], d[0]];
      var sgn = (cAt.dx * r[0] + cAt.dz * r[1]) > 0 ? 1 : -1;
      var T = pointAt(C.center, cumC, P0.sB + sgn * 132);
      var S = pointAt(cw.pts, cc, sP - 290), E = pointAt(cw.pts, cc, sP + 290);
      var gap = crossHalf + 26;
      var Q = [T.x - d[0] * gap, T.z - d[1] * gap], Q2 = [T.x + d[0] * gap, T.z + d[1] * gap];
      var nm = F.def.name + ' ' + cw.dir;
      var exitPts = resample(bez3([S.x, S.z], [S.x + S.dx * 120, S.z + S.dz * 120], [Q[0] - d[0] * 70, Q[1] - d[1] * 70], Q, 30), 6);
      var entPts = resample(bez3(Q2, [Q2[0] + d[0] * 70, Q2[1] + d[1] * 70], [E.x - E.dx * 120, E.z - E.dz * 120], [E.x, E.z], 30), 6);
      addPL({ pts: exitPts, cls: 'ramp', oneway: true, name: nm + ' exit to ' + ic.name, speed: 40, road: ic.fwy + '_ramp' });
      addPL({ pts: entPts, cls: 'ramp', oneway: true, name: 'Ramp to ' + nm, speed: 45, road: ic.fwy + '_ramp' });
      addPL({ pts: resample([Q, Q2], 6), cls: 'ramp', group: 'grade', oneway: true, stub: true, name: ic.name + ' ramp terminal', speed: 25, road: ic.fwy + '_term' });
    });
  });
}
function buildMerges() {
  ROADDEFS.forEach(function (d) {
    if (!d.mergeInto) return;
    var A = NET.byId[d.id], B = NET.byId[d.mergeInto];
    // eastbound (fwd) joins B.fwd downstream
    var ap = A.fwd.pts, L = ap[ap.length - 1], Lp = ap[ap.length - 2], dl = [L[0] - Lp[0], L[1] - Lp[1]], dlL = Math.hypot(dl[0], dl[1]); dl = [dl[0] / dlL, dl[1] / dlL];
    var cb = cumLen(B.fwd.pts), tg = pointAt(B.fwd.pts, cb, projectOnPoly(B.fwd.pts, L[0], L[1]).s + 190);
    var conn = resample(bez3(L, [L[0] + dl[0] * 80, L[1] + dl[1] * 80], [tg.x - tg.dx * 90, tg.z - tg.dz * 90], [tg.x, tg.z], 24), 8);
    A.fwd.pts = ap.concat(conn.slice(1));
    // westbound (bwd) leaves B.bwd upstream and flies over B.fwd
    var bp = A.bwd.pts, F0 = bp[0], F1 = bp[1], df = [F1[0] - F0[0], F1[1] - F0[1]], dfL = Math.hypot(df[0], df[1]); df = [df[0] / dfL, df[1] / dfL];
    var cb2 = cumLen(B.bwd.pts), sr = pointAt(B.bwd.pts, cb2, projectOnPoly(B.bwd.pts, F0[0], F0[1]).s - 230);
    var conn2 = resample(bez3([sr.x, sr.z], [sr.x + sr.dx * 110, sr.z + sr.dz * 110], [F0[0] - df[0] * 110, F0[1] - df[1] * 110], F0, 24), 8);
    A.bwd.pts = conn2.concat(bp.slice(1));
    A.bwd.layer = 1;
  });
}

// ---------------- procedural local streets (bounded by the real arterials) ----------------
var BLOCK = null;   // raster: 1 = no local streets / houses
function buildBlockMask() {
  BLOCK = new Raster(5);
  var k;
  for (k in AREAS) { var a = AREAS[k]; BLOCK.fillRect(a.x0 - 8, a.z0 - 8, a.x1 + 8, a.z1 + 8, 1); }
  PARCELS.forEach(function (p) { BLOCK.fillRect(X(p.r[0]) - 4, Z(p.r[3]) - 4, X(p.r[1]) + 4, Z(p.r[2]) + 4, 1); });
  BLOCK.fillEllipse(LADDIE.x, LADDIE.z, LADDIE.rx + 28, LADDIE.rz + 26, 1);
  PONDS.forEach(function (p) { BLOCK.fillEllipse(p.x, p.z, p.rx + 14, p.rz + 14, 1); });
  BLOCK.strokePoly(Ms(RICE_CREEK), 56, 1);
  NET.pls.forEach(function (pl) {
    if (pl.group === 'fwy') BLOCK.strokePoly(pl.pts, pl.width + (pl.cls === 'fwy' ? 70 : 34), 1);
    else if (pl.cls === 'hwy') BLOCK.strokePoly(pl.pts, pl.width + 22, 1);
    else if (pl.stub) BLOCK.strokePoly(pl.pts, pl.width + 30, 1);
  });
}
function blocked(x, z) { return BLOCK.get(x, z) === 1; }
function clipStreet(pts, minLen) { // cut polyline where blocked; return pieces
  var fine = resample(pts, 4), out = [], cur = [];
  for (var i = 0; i < fine.length; i++) {
    if (blocked(fine[i][0], fine[i][1])) { if (cur.length > 1) out.push(cur); cur = []; }
    else cur.push(fine[i]);
  }
  if (cur.length > 1) out.push(cur);
  return out.filter(function (p) { return polyLen(p) >= (minLen || 45); }).map(function (p) { return resample(p, 10); });
}
function addStreet(pts, cls, d, name) {
  clipStreet(pts, cls === 'col' ? 60 : 45).forEach(function (p) { addPL({ pts: p, cls: cls, gen: true, district: d.id, name: name || (cls === 'col' ? 'Collector street' : 'Local street') }); });
}
var HOUSE_HINTS = [];  // cells with townhome flags etc.
function genDistricts() {
  DISTRICTS.forEach(function (d) {
    var xa = X(d.r[0]), xb = X(d.r[1]), zs = Z(d.r[2]), zn = Z(d.r[3]);
    var W = xb - xa, D = zs - zn;
    if (d.style === 'grid') {
      var sx = d.era === 'old' ? 150 : 170, sz = 100;
      for (var x = xa + sx * 0.55; x < xb - 40; x += sx) addStreet([[x, zs], [x, zn]], 'local', d);
      for (var z = zs - sz * 0.55; z > zn + 30; z -= sz) addStreet([[xa, z], [xb, z]], 'local', d);
    } else if (d.style === 'pods') {
      var nx = Math.max(1, Math.round(W / 470)), nz = Math.max(1, Math.round(D / 360));
      var cw = W / nx, ch = D / nz, i, j;
      for (i = 1; i < nx; i++) { var cx = xa + cw * i, amp = rr(-10, 10); addStreet(resample([[cx, zs], [cx + amp, (zs + zn) / 2], [cx, zn]], 10), 'col', d); }
      for (j = 1; j < nz; j++) { var cz = zs - ch * j, amp2 = rr(-8, 8); addStreet(resample([[xa, cz], [(xa + xb) / 2, cz + amp2], [xb, cz]], 10), 'col', d); }
      for (i = 0; i < nx; i++) for (j = 0; j < nz; j++) {
        if (d.dens && rand() > d.dens + 0.25) continue;
        var bx0 = xa + cw * i, bx1 = bx0 + cw, bz1 = zs - ch * j, bz0 = bz1 - ch;
        var ccx = (bx0 + bx1) / 2 + rr(-15, 15), ccz = (bz0 + bz1) / 2 + rr(-12, 12);
        var rx = cw / 2 - rr(48, 62), rz = ch / 2 - rr(48, 62);
        if (rx < 60 || rz < 50) { addStreet([[bx0, ccz], [bx1, ccz]], 'local', d); continue; }
        var ex = d.era === 'new' ? rr(2.2, 3.2) : rr(2.6, 4.0), wob = d.era === 'new' ? 0.12 : 0.05, seed = rand() * 100;
        var loop = [];
        for (var k = 0; k <= 48; k++) {
          var t = k / 48 * Math.PI * 2, ct = Math.cos(t), st = Math.sin(t);
          var f = 1 + wob * (vnoise(ct * 1.5 + seed, st * 1.5 + seed) - 0.5) * 2;
          loop.push([ccx + Math.sign(ct) * Math.pow(Math.abs(ct), 2 / ex) * rx * f, ccz + Math.sign(st) * Math.pow(Math.abs(st), 2 / ex) * rz * f]);
        }
        addStreet(loop.slice(0, 25), 'local', d); addStreet(loop.slice(24), 'local', d);
        // connectors to the cell boundary (always to real roads: interior collectors or bounding arterials)
        var sides = [[loop[0], [bx1, loop[0][1]]], [loop[24], [bx0, loop[24][1]]], [loop[12], [loop[12][0], bz1]], [loop[36], [loop[36][0], bz0]]];
        var nconn = d.era === 'new' ? 2 : 3, order = [0, 1, 2, 3].sort(function () { return rand() - 0.5; });
        for (k = 0; k < nconn; k++) addStreet(sides[order[k]], 'local', d);
        // cul-de-sacs pointing inwards from the loop
        var nc = d.era === 'new' ? ri(2, 4) : ri(1, 2);
        for (k = 0; k < nc; k++) {
          var li = Math.floor(rand() * 48), lp = loop[li], vx = ccx - lp[0], vz = ccz - lp[1], vl = Math.hypot(vx, vz);
          var len = Math.min(vl - 34, rr(55, 95)); if (len < 40) continue;
          var bend = rr(-0.35, 0.35), mx = lp[0] + vx / vl * len * 0.5 - vz / vl * len * bend * 0.3, mz = lp[1] + vz / vl * len * 0.5 + vx / vl * len * bend * 0.3;
          addStreet(resample([lp, [mx, mz], [lp[0] + vx / vl * len, lp[1] + vz / vl * len]], 8), 'local', d);
        }
        if (d.town && rand() < d.town) HOUSE_HINTS.push({ x0: bx0, x1: bx1, z0: bz0, z1: bz1, town: true });
      }
    } else if (d.style === 'rural') {
      for (var xr = xa + rr(250, 450); xr < xb - 150; xr += rr(650, 950)) addStreet(resample([[xr, zs], [xr + rr(-20, 20), (zs + zn) / 2], [xr, zn]], 10), 'gravel', d, 'Township road (gravel)');
    }
  });
}
// parking lots with drivable aisles (AI "parking-lot chaos" during events)
var LOTS = [];
function defineLots() {
  function lot(x0, z0, x1, z1, entries, venue, name) { LOTS.push({ x0: x0, z0: z0, x1: x1, z1: z1, entries: entries, venue: venue, name: name }); }
  var z105 = Z(105);
  lot(1405, -2080, 1990, -2026, [[1500, z105], [1850, z105]], 'nsc', 'NSC Lot A');
  lot(2440, -2240, 2560, -2030, [[2500, z105]], 'nsc', 'NSC Lot C (event)');
  lot(X(3.52), Z(115.2), X(3.62), Z(114.65), [[X(3.6), Z(114.72)]], 'tpc', 'TPC clubhouse lot');
  lot(X(3.48), Z(119.6), X(3.78), Z(118.55), [[X(3.46), Z(119.1)]], 'tpc', '3M Open lot (grass)');
  lot(X(0.12), Z(93.0), X(0.66), Z(92.6), [[X(0.3), Z(93.0)]], 'mall', 'Northtown Mall lot');
  lot(X(0.12), Z(90.6), X(0.66), Z(90.2), [[X(0.4), Z(90.2)]], 'mall', 'Northtown Mall lot');
  lot(X(1.84), Z(93.15), X(1.97), Z(92.8), [[X(2.0), Z(93.0)]], 'curling', 'Four Seasons lot');
  lot(X(1.69), Z(107.75), X(1.742), Z(107.55), [[X(1.67), Z(107.65)]], 'cityhall', 'City Hall lot');
}
function buildLotAisles() {
  LOTS.forEach(function (L) {
    var x0 = L.x0 + 5, x1 = L.x1 - 5, z0 = L.z0 + 5, z1 = L.z1 - 5;
    addPL({ pts: resample([[x0, z0], [x1, z0]], 10), cls: 'lot', lot: true, name: L.name });
    addPL({ pts: resample([[x0, z1], [x1, z1]], 10), cls: 'lot', lot: true, name: L.name });
    for (var x = x0; x <= x1 + 0.1; x += Math.max(24, (x1 - x0) / Math.max(1, Math.round((x1 - x0) / 26)))) addPL({ pts: resample([[x, z0], [x, z1]], 8), cls: 'lot', lot: true, name: L.name });
    L.entries.forEach(function (e) {
      var cx, cz;
      if (e[1] > z1) { cz = z1; cx = clamp(e[0], x0, x1); }
      else if (e[1] < z0) { cz = z0; cx = clamp(e[0], x0, x1); }
      else { cz = clamp(e[1], z0, z1); cx = e[0] < x0 ? x0 : x1; }
      addPL({ pts: resample([[cx, cz], e], 6), cls: 'lot', lot: true, name: L.name + ' entrance' });
    });
  });
}

// ---------------- planarisation ----------------
function planarize() {
  var pls = NET.pls, CELL = 48, i, j;
  function buildHash() {
    var H = new Map();
    pls.forEach(function (pl) {
      pl.cum = cumLen(pl.pts);
      for (var k = 0; k < pl.pts.length - 1; k++) {
        var a = pl.pts[k], b = pl.pts[k + 1];
        var i0 = Math.floor(Math.min(a[0], b[0]) / CELL), i1 = Math.floor(Math.max(a[0], b[0]) / CELL);
        var j0 = Math.floor(Math.min(a[1], b[1]) / CELL), j1 = Math.floor(Math.max(a[1], b[1]) / CELL);
        for (var ii = i0; ii <= i1; ii++) for (var jj = j0; jj <= j1; jj++) {
          var key = ii * 65536 + jj, lst = H.get(key); if (!lst) H.set(key, lst = []); lst.push(pl.id, k);
        }
      }
    });
    return H;
  }
  pls.forEach(function (pl) { pl.splits = []; pl.cross = []; });
  // 1) endpoint snapping (T-junctions); dangling generated streets may extend up to 16 m to reach a road
  var H = buildHash(), tmp = {};
  pls.forEach(function (pl) {
    [0, 1].forEach(function (endSide) {
      var idx = endSide ? pl.pts.length - 1 : 0, p = pl.pts[idx];
      var tol = (pl.gen || pl.lot) ? 16 : 2.2, best = null, bd = tol;
      var ci = Math.floor(p[0] / CELL), cj = Math.floor(p[1] / CELL);
      for (var di = -1; di <= 1; di++) for (var dj = -1; dj <= 1; dj++) {
        var lst = H.get((ci + di) * 65536 + cj + dj); if (!lst) continue;
        for (var q = 0; q < lst.length; q += 2) {
          var o = pls[lst[q]]; if (o === pl || o.group !== pl.group) continue;
          var k = lst[q + 1], a = o.pts[k], b = o.pts[k + 1];
          var dd = segDist(p[0], p[1], a[0], a[1], b[0], b[1], tmp);
          if (dd < bd) { bd = dd; best = { o: o, s: o.cum[k] + tmp.t * (o.cum[k + 1] - o.cum[k]), x: tmp.x, z: tmp.z }; }
        }
      }
      if (!best) return;
      if (bd > 2.2) { if (endSide) pl.pts.push([best.x, best.z]); else pl.pts.unshift([best.x, best.z]); }
      else pl.pts[idx] = [best.x, best.z];
      best.o.splits.push(best.s);
    });
  });
  // 2) crossings
  H = buildHash();
  H.forEach(function (lst, key) {
    var ci = Math.floor(key / 65536 + 1e-9), cj = key - ci * 65536;
    if (cj > 32767) { cj -= 65536; ci += 1; }
    for (var a = 0; a < lst.length; a += 2) {
      var A = pls[lst[a]], ka = lst[a + 1], p = A.pts[ka], q = A.pts[ka + 1];
      var axmin = Math.min(p[0], q[0]), axmax = Math.max(p[0], q[0]), azmin = Math.min(p[1], q[1]), azmax = Math.max(p[1], q[1]);
      for (var b = a + 2; b < lst.length; b += 2) {
        var B = pls[lst[b]], kb = lst[b + 1];
        if (A === B) continue;
        var r = B.pts[kb], s = B.pts[kb + 1];
        if (Math.max(r[0], s[0]) < axmin || Math.min(r[0], s[0]) > axmax || Math.max(r[1], s[1]) < azmin || Math.min(r[1], s[1]) > azmax) continue;
        var h = segInter(p[0], p[1], q[0], q[1], r[0], r[1], s[0], s[1]); if (!h) continue;
        var ix = p[0] + (q[0] - p[0]) * h[0], iz = p[1] + (q[1] - p[1]) * h[0];
        if (Math.floor(ix / CELL) * 65536 + Math.floor(iz / CELL) !== key) continue;   // each crossing handled once, by its own cell
        var sa = A.cum[ka] + h[0] * (A.cum[ka + 1] - A.cum[ka]), sb = B.cum[kb] + h[1] * (B.cum[kb + 1] - B.cum[kb]);
        if (A.group === 'grade' && B.group === 'grade') {
          if (A.cls === 'hwy' && B.cls === 'hwy' && A.road !== B.road && A.dir === B.dir) continue;
          A.splits.push(sa); B.splits.push(sb);
        } else {
          var ang = Math.abs(((q[0] - p[0]) * (s[1] - r[1]) - (q[1] - p[1]) * (s[0] - r[0])) / (Math.hypot(q[0] - p[0], q[1] - p[1]) * Math.hypot(s[0] - r[0], s[1] - r[1])));
          if (A.group === 'fwy' && B.group === 'grade') A.cross.push({ s: sa, w: B.width, sin: ang });
          else if (B.group === 'fwy' && A.group === 'grade') B.cross.push({ s: sb, w: A.width, sin: ang });
          else if (A.layer !== B.layer) { var U = A.layer > B.layer ? A : B, Lw = A.layer > B.layer ? B : A; U.cross.push({ s: U === A ? sa : sb, w: Lw.width, sin: ang }); }
        }
      }
    }
  });
  // creek crossings -> bridge stations
  var creek = resample(Ms(RICE_CREEK), 10), CM = new Raster(10);
  CM.strokePoly(creek, 50, 1);
  pls.forEach(function (pl) {
    pl.creek = [];
    for (var k = 0; k < pl.pts.length - 1; k++) {
      var pa = pl.pts[k], pb = pl.pts[k + 1];
      if (!CM.get(pa[0], pa[1]) && !CM.get(pb[0], pb[1]) && !CM.get((pa[0] + pb[0]) / 2, (pa[1] + pb[1]) / 2)) continue;
      for (var c = 0; c < creek.length - 1; c++) {
      var h = segInter(pl.pts[k][0], pl.pts[k][1], pl.pts[k + 1][0], pl.pts[k + 1][1], creek[c][0], creek[c][1], creek[c + 1][0], creek[c + 1][1]);
      if (h) pl.creek.push(pl.cum[k] + h[0] * (pl.cum[k + 1] - pl.cum[k]));
      }
    }
  });
  // 3) split into edges
  var raw = [];
  pls.forEach(function (pl) {
    var L = pl.cum[pl.cum.length - 1];
    var st = pl.splits.filter(function (s) { return s > 0.8 && s < L - 0.8; }).sort(function (a, b) { return a - b; });
    var cuts = [0]; st.forEach(function (s) { if (s - cuts[cuts.length - 1] > 0.8) cuts.push(s); }); if (L - cuts[cuts.length - 1] < 0.8) cuts.pop(); cuts.push(L);
    for (var k = 0; k < cuts.length - 1; k++) {
      var s0 = cuts[k], s1 = cuts[k + 1], pts = [], a0 = pointAt(pl.pts, pl.cum, s0);
      pts.push([a0.x, a0.z]);
      for (var m = 0; m < pl.pts.length; m++) if (pl.cum[m] > s0 + 0.3 && pl.cum[m] < s1 - 0.3) pts.push(pl.pts[m]);
      var a1 = pointAt(pl.pts, pl.cum, s1); pts.push([a1.x, a1.z]);
      raw.push({ pl: pl, pts: pts, s0: s0 });
    }
  });
  // 4) nodes by clustering endpoints
  var nodes = [], NH = new Map(), TOL = 2.6;
  function nodeAt(p) {
    var ci = Math.floor(p[0] / 8), cj = Math.floor(p[1] / 8);
    for (var di = -1; di <= 1; di++) for (var dj = -1; dj <= 1; dj++) {
      var l = NH.get((ci + di) * 65536 + cj + dj); if (!l) continue;
      for (var q = 0; q < l.length; q++) { var n = nodes[l[q]]; if (dist2(n.x, n.z, p[0], p[1]) < TOL * TOL) return n; }
    }
    var nn = { id: nodes.length, x: p[0], z: p[1], edges: [] }; nodes.push(nn);
    var key = ci * 65536 + cj, ll = NH.get(key); if (!ll) NH.set(key, ll = []); ll.push(nn.id);
    return nn;
  }
  var edges = [];
  raw.forEach(function (r) {
    var na = nodeAt(r.pts[0]), nb = nodeAt(r.pts[r.pts.length - 1]);
    if (na === nb && polyLen(r.pts) < 5) return;
    r.pts[0] = [na.x, na.z]; r.pts[r.pts.length - 1] = [nb.x, nb.z];
    var e = { id: edges.length, pl: r.pl, pts: r.pts, a: na.id, b: nb.id, s0: r.s0 };
    edges.push(e); na.edges.push(e.id); nb.edges.push(e.id);
  });
  // 5) prune dangling stubs (bits of ramp terminals poking past a carriageway, etc.)
  for (var pass = 0; pass < 3; pass++) {
    edges.forEach(function (e) {
      if (e.dead) return;
      var L = polyLen(e.pts), da = nodes[e.a].edges.length, db = nodes[e.b].edges.length;
      if ((da === 1 || db === 1) && L < (e.pl.stub || e.pl.cls === 'hwy' ? 40 : 14)) {
        e.dead = true;
        [nodes[e.a], nodes[e.b]].forEach(function (n) { n.edges = n.edges.filter(function (x) { return x !== e.id; }); });
      }
    });
  }
  var remap = {}, E2 = [];
  edges.forEach(function (e) { if (!e.dead) { remap[e.id] = E2.length; e.id = E2.length; E2.push(e); } });
  nodes.forEach(function (n) { n.edges = n.edges.map(function (x) { return remap[x]; }).filter(function (x) { return x !== undefined; }); });
  NET.edges = E2; NET.nodes = nodes;
}

// ---------------- heights (overpasses) + per-edge data ----------------
var BRIDGE_H = 7.2, APPROACH = 190;
function plHeight(pl, s) {
  var h = 0;
  for (var k = 0; k < pl.cross.length; k++) {
    var c = pl.cross[k], flat = (c.w / 2 + 7) / Math.max(0.35, c.sin), d = Math.abs(s - c.s);
    var v = d < flat ? 1 : 1 - smooth(0, 1, (d - flat) / APPROACH);
    if (v > 0) h = Math.max(h, BRIDGE_H * v);
  }
  return h;
}
function plBridge(pl, s) {
  if (plHeight(pl, s) > 1.2) return 1;
  for (var k = 0; k < pl.creek.length; k++) if (Math.abs(s - pl.creek[k]) < 16) return 2;
  return 0;
}
function finishEdges() {
  NET.edges.forEach(function (e) {
    var pl = e.pl, c = CLS[pl.cls];
    e.cum = cumLen(e.pts); e.len = e.cum[e.cum.length - 1];
    e.h = []; e.br = [];
    for (var k = 0; k < e.pts.length; k++) { var s = e.s0 + e.cum[k]; e.h.push(pl.group === 'fwy' ? plHeight(pl, s) : 0); e.br.push(plBridge(pl, s)); }
    e.hw = pl.width / 2; e.cls = pl.cls; e.ci = c.i; e.prio = c.prio; e.speed = pl.speed * MPH;
    e.lanesF = pl.lanes; e.lanesB = pl.oneway ? 0 : pl.lanes; e.laneW = c.laneW;
    e.closed = pl.construction ? pl.lanes - 1 : -1; e.shift = pl.construction ? -1.3 : 0;
    if (pl.construction) e.speed = 45 * MPH;
    e.name = pl.name; e.alt = pl.alt; e.dir = pl.dir;
    e.plow = new Float32Array(Math.max(1, Math.ceil(e.len / 10)));   // game-minute timestamps of last plow pass
    for (var q = 0; q < e.plow.length; q++) e.plow[q] = -1e9;
  });
  NET.nodes.forEach(function (n) {
    var mx = 0, pr = 0, names = {};
    n.edges.forEach(function (id) { var e = NET.edges[id]; mx = Math.max(mx, e.hw); pr = Math.max(pr, e.prio); names[e.pl.road || e.name] = 1; });
    n.prio = pr; n.deg = n.edges.length;
    var same = Object.keys(names).length === 1;
    n.r = n.deg <= 1 ? 0 : (n.deg === 2 && same ? 0 : Math.min(24, mx + 2));
    n.h = 0;
    if (n.edges.length) { var e0 = NET.edges[n.edges[0]]; n.h = e0.a === n.id ? e0.h[0] : e0.h[e0.h.length - 1]; }
  });
}
// lateral offset (right-positive, in the lane's travel direction) of lane k
function laneOffset(e, fwd, k) {
  var c = CLS[e.cls];
  if (!fwd || e.lanesB > 0) return (e.pl.center || 0) / 2 + (k + 0.5) * e.laneW;
  return -e.hw + c.shL + (k + 0.5) * e.laneW + e.shift;
}
function edgeDirAtNode(e, nid, outward) { // unit direction leaving the node along e (outward) or arriving (inward)
  var p = e.pts, a, b;
  if (e.a === nid) { a = p[0]; b = p[Math.min(1, p.length - 1)]; } else { a = p[p.length - 1]; b = p[Math.max(0, p.length - 2)]; }
  var dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz) || 1;
  return outward ? [dx / L, dz / L] : [-dx / L, -dz / L];
}

// ---------------- signals ----------------
function buildSignals() {
  var groups = [];
  SIGNALS.forEach(function (sp) {
    var px = X(sp[0]), pz = Z(sp[1]), g = { x: px, z: pz, nodes: [], axis: null, offset: 0, term: false };
    NET.nodes.forEach(function (n) { if (n.deg >= 3 && n.prio >= 3 && dist2(n.x, n.z, px, pz) < 36 * 36 && !n.sig) { g.nodes.push(n); n.sig = g; } });
    if (g.nodes.length) groups.push(g);
  });
  // freeway ramp terminals
  NET.nodes.forEach(function (n) {
    if (n.sig || n.deg < 3) return;
    var stub = false, other = false;
    n.edges.forEach(function (id) { var e = NET.edges[id]; if (e.pl.stub) stub = true; else if (e.pl.group === 'grade') other = true; });
    if (!stub || !other) return;
    var g = null;
    groups.forEach(function (G) { if (G.term && dist2(G.x, G.z, n.x, n.z) < 50 * 50) g = G; });
    if (!g) { g = { x: n.x, z: n.z, nodes: [], axis: null, offset: 0, term: true }; groups.push(g); }
    g.nodes.push(n); n.sig = g;
  });
  groups.forEach(function (g, gi) {
    // main axis = direction of the highest-priority non-stub edge
    var best = -1;
    g.nodes.forEach(function (n) { n.edges.forEach(function (id) { var e = NET.edges[id]; var p = e.prio + (e.pl.stub ? -10 : 0); if (p > best) { best = p; g.axis = edgeDirAtNode(e, n.id, true); } }); });
    var main = Math.abs(g.axis[1]) > Math.abs(g.axis[0]) ? 'ns' : 'ew';
    g.green = [g.term ? 30 : (main === 'ns' && Math.abs(g.x - X(1.6)) < 30 ? 42 : 30), g.term ? 18 : 22];
    g.yellow = 4; g.allred = 2;
    g.cycle = g.green[0] + g.green[1] + 2 * (g.yellow + g.allred);
    g.offset = (-g.z / 24.6) % g.cycle;   // green wave northbound on the 55-mph corridors
    g.id = gi;
  });
  NET.signals = groups;
}
// phase state: returns 'G','Y','R' for an approach arriving along edge e into node n at time t (s)
function signalState(n, e, t) {
  var g = n.sig; if (!g) return 'G';
  var d = edgeDirAtNode(e, n.id, false), onMain = Math.abs(d[0] * g.axis[0] + d[1] * g.axis[1]) > 0.6;
  if (g.term) onMain = !e.pl.stub;
  var tc = ((t + g.offset) % g.cycle + g.cycle) % g.cycle;
  var a0 = g.green[0], a1 = a0 + g.yellow, a2 = a1 + g.allred, b0 = a2 + g.green[1], b1 = b0 + g.yellow;
  if (onMain) return tc < a0 ? 'G' : (tc < a1 ? 'Y' : 'R');
  return (tc >= a2 && tc < b0) ? 'G' : ((tc >= b0 && tc < b1) ? 'Y' : 'R');
}

// ---------------- spatial hash for surface queries ----------------
var RCELL = 32;
function buildRoadHash() {
  var H = new Map();
  function put(ii, jj, v) { var key = ii * 65536 + jj, l = H.get(key); if (!l) H.set(key, l = []); l.push(v); }
  NET.edges.forEach(function (e) {
    for (var k = 0; k < e.pts.length - 1; k++) {
      var a = e.pts[k], b = e.pts[k + 1], m = e.hw + 1.5;
      for (var ii = Math.floor((Math.min(a[0], b[0]) - m) / RCELL); ii <= Math.floor((Math.max(a[0], b[0]) + m) / RCELL); ii++)
        for (var jj = Math.floor((Math.min(a[1], b[1]) - m) / RCELL); jj <= Math.floor((Math.max(a[1], b[1]) + m) / RCELL); jj++) put(ii, jj, e.id * 4096 + k);
    }
  });
  NET.cells = H;
  var NHs = new Map();
  NET.nodes.forEach(function (n) {
    if (n.r <= 0) return;
    for (var ii = Math.floor((n.x - n.r) / RCELL); ii <= Math.floor((n.x + n.r) / RCELL); ii++)
      for (var jj = Math.floor((n.z - n.r) / RCELL); jj <= Math.floor((n.z + n.r) / RCELL); jj++) { var key = ii * 65536 + jj, l = NHs.get(key); if (!l) NHs.set(key, l = []); l.push(n.id); }
  });
  NET.ncells = NHs;
}
var _rq = {};
// Road under a point. yHint picks between an overpass deck and the road beneath it.
function roadAt(x, z, yHint, out) {
  var key = Math.floor(x / RCELL) * 65536 + Math.floor(z / RCELL), l = NET.cells.get(key);
  var best = null, bs = 1e9;
  out.e = null; out.node = null;
  if (l) for (var q = 0; q < l.length; q++) {
    var v = l[q], e = NET.edges[(v / 4096) | 0], k = v % 4096, a = e.pts[k], b = e.pts[k + 1];
    var d = segDist(x, z, a[0], a[1], b[0], b[1], _rq);
    if (d > e.hw + 0.25) continue;
    var h = e.h[k] + (e.h[k + 1] - e.h[k]) * _rq.t;
    var sc = Math.abs(h - yHint) + (h > yHint + 1.8 ? 50 : 0) + d * 0.01 - e.prio * 0.001;
    if (sc < bs) { bs = sc; best = e; out.k = k; out.t = _rq.t; out.lat = _rq.side > 0 ? d : -d; out.h = h; out.d = d; }
  }
  var ln = NET.ncells.get(key);
  if (ln) for (q = 0; q < ln.length; q++) {
    var n = NET.nodes[ln[q]];
    if (dist2(x, z, n.x, n.z) > n.r * n.r || Math.abs(n.h - yHint) > 2.5) continue;
    out.node = n;
    if (!best) { best = NET.edges[n.edges[0]]; out.k = 0; out.t = 0; out.lat = 0; out.h = n.h; out.d = 0; }
  }
  out.e = best;
  return best;
}
function stationOf(e, k, t) { return e.cum[k] + t * (e.cum[k + 1] - e.cum[k]); }
function nearestEdge(x, z, maxD, filter) {
  var best = null, bd = maxD || 60, r = Math.ceil((maxD || 60) / RCELL), ci = Math.floor(x / RCELL), cj = Math.floor(z / RCELL), tmp = {}, res = null;
  for (var di = -r; di <= r; di++) for (var dj = -r; dj <= r; dj++) {
    var l = NET.cells.get((ci + di) * 65536 + cj + dj); if (!l) continue;
    for (var q = 0; q < l.length; q++) {
      var v = l[q], e = NET.edges[(v / 4096) | 0], k = v % 4096; if (filter && !filter(e)) continue;
      var d = segDist(x, z, e.pts[k][0], e.pts[k][1], e.pts[k + 1][0], e.pts[k + 1][1], tmp);
      if (d < bd) { bd = d; best = e; res = { e: e, k: k, t: tmp.t, s: stationOf(e, k, tmp.t), d: d, lat: tmp.side > 0 ? d : -d }; }
    }
  }
  return res;
}
function buildNetwork() {
  buildMajors(); buildInterchanges(); buildMerges();
  defineLots();
  buildBlockMask();
  genDistricts();
  genParcelStreets();
  buildLotAisles();
  planarize();
  finishEdges();
  buildSignals();
  buildRoadHash();
}
