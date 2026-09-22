// ============================================================================================
// 50 VEHICLES — procedural models, player rig (physics <-> world), collisions, camera, trails
// ============================================================================================
MB.prototype.frustum = function (x, y, z, lb, wb, lt, wt, h, shift, col) {
  // axis-aligned in model space (+x forward): bottom lb x wb, top lt x wt shifted by 'shift' along x
  var b = [[x - lb / 2, y, z - wb / 2], [x + lb / 2, y, z - wb / 2], [x + lb / 2, y, z + wb / 2], [x - lb / 2, y, z + wb / 2]];
  var t = [[x - lt / 2 + shift, y + h, z - wt / 2], [x + lt / 2 + shift, y + h, z - wt / 2], [x + lt / 2 + shift, y + h, z + wt / 2], [x - lt / 2 + shift, y + h, z + wt / 2]];
  for (var i = 0; i < 4; i++) { var j = (i + 1) % 4; this.quad(b[i], b[j], t[j], t[i], col); }
  this.quad(t[3], t[2], t[1], t[0], col);
};
var CARTYPES = {
  sedan:   { L: 4.88, W: 1.84, H: 1.45, wb: 2.82, r: 0.34, cl: 0.16, kind: 'car' },
  coupe:   { L: 4.79, W: 1.92, H: 1.38, wb: 2.72, r: 0.345, cl: 0.13, kind: 'coupe' },
  beater:  { L: 4.95, W: 1.83, H: 1.43, wb: 2.77, r: 0.33, cl: 0.17, kind: 'car', rust: true },
  suv:     { L: 4.9, W: 1.95, H: 1.78, wb: 2.86, r: 0.37, cl: 0.21, kind: 'suv' },
  minivan: { L: 5.15, W: 1.99, H: 1.77, wb: 3.03, r: 0.35, cl: 0.15, kind: 'van' },
  truck:   { L: 5.9, W: 2.03, H: 1.96, wb: 3.68, r: 0.405, cl: 0.24, kind: 'pickup' },
  box:     { L: 9.4, W: 2.5, H: 3.5, wb: 5.5, r: 0.5, cl: 0.3, kind: 'box' },
  semi:    { L: 19.5, W: 2.6, H: 4.0, wb: 5.2, r: 0.52, cl: 0.3, kind: 'semi' },
  bus:     { L: 12.0, W: 2.55, H: 3.2, wb: 7.0, r: 0.5, cl: 0.3, kind: 'bus' },
  plow:    { L: 9.8, W: 2.6, H: 3.4, wb: 5.2, r: 0.55, cl: 0.35, kind: 'plow' },
  police:  { L: 5.1, W: 2.0, H: 1.55, wb: 3.05, r: 0.36, cl: 0.16, kind: 'police' }
};
function buildCarModel(type) {
  var T = CARTYPES[type], mb = new MB(), L = T.L, W = T.W, H = T.H, cl = T.cl + T.r * 0.55;
  var paint = C3(0xffffff), glass = C3(0x1b2530), trim = C3(0x1d1f22), head = C3(0xf4f1dc), tail = C3(0xb31212), rust = C3(0x7a4a2a), prim = C3(0x8d9296);
  var lights = { head: [], tail: [] };
  var bodyH = (T.kind === 'suv' || T.kind === 'van' || T.kind === 'pickup') ? 0.85 : 0.62;
  if (T.kind === 'car' || T.kind === 'coupe' || T.kind === 'police' || T.kind === 'suv' || T.kind === 'van') {
    mb.box(0, cl, 0, L, bodyH, W, 0, paint);
    mb.box(L / 2 - 0.05, cl + 0.05, 0, 0.12, 0.3, W * 0.96, 0, trim);          // bumper/grille
    mb.box(-L / 2 + 0.05, cl + 0.05, 0, 0.12, 0.3, W * 0.96, 0, trim);
    var gl = T.kind === 'coupe' ? 2.3 : (T.kind === 'van' ? L * 0.78 : (T.kind === 'suv' ? L * 0.62 : 2.75)), gt = T.kind === 'coupe' ? 1.25 : gl * (T.kind === 'van' || T.kind === 'suv' ? 0.92 : 0.66);
    var gh = H - cl - bodyH, shift = T.kind === 'coupe' ? -0.35 : (T.kind === 'van' ? -0.05 : -0.15);
    var gx = T.kind === 'van' ? -0.1 : (T.kind === 'suv' ? -0.35 : -0.25);
    mb.frustum(gx, cl + bodyH, 0, gl, W * 0.9, gt, W * 0.74, gh * 0.92, shift, glass);
    mb.frustum(gx + shift, cl + bodyH + gh * 0.9, 0, gt + 0.02, W * 0.745, gt - 0.05, W * 0.72, gh * 0.1, 0, paint);   // roof
    if (T.rust) { mb.box(-L * 0.3, cl - 0.01, W / 2 - 0.02, 1.1, 0.28, 0.06, 0, rust); mb.box(L * 0.32, cl - 0.01, -W / 2 + 0.02, 0.8, 0.25, 0.06, 0, rust); mb.box(0.1, cl + 0.02, W / 2 + 0.005, 1.1, bodyH - 0.06, 0.03, 0, prim); }
    if (T.kind === 'police') { mb.box(gx + shift, H + 0.02, 0, 0.35, 0.16, W * 0.7, 0, C3(0x222222)); mb.box(gx + shift, H + 0.05, -0.35, 0.3, 0.14, 0.5, 0, C3(0xd01010)); mb.box(gx + shift, H + 0.05, 0.35, 0.3, 0.14, 0.5, 0, C3(0x1030e0)); mb.box(0, cl + 0.05, W / 2 + 0.01, 1.8, bodyH - 0.1, 0.02, 0, C3(0x111111)); mb.box(0, cl + 0.05, -W / 2 - 0.01, 1.8, bodyH - 0.1, 0.02, 0, C3(0x111111)); }
    lights.head.push([L / 2, cl + bodyH * 0.6, W * 0.36], [L / 2, cl + bodyH * 0.6, -W * 0.36]);
    lights.tail.push([-L / 2, cl + bodyH * 0.65, W * 0.38], [-L / 2, cl + bodyH * 0.65, -W * 0.38]);
  } else if (T.kind === 'pickup') {
    mb.box(0, cl, 0, L, 0.7, W, 0, paint);
    mb.box(L * 0.18, cl + 0.7, 0, 1.9, 0.25, W, 0, paint);                    // hood
    mb.frustum(-0.25, cl + 0.7, 0, 2.2, W * 0.94, 1.7, W * 0.86, H - cl - 0.75, -0.05, glass);
    mb.box(-0.3, H - 0.06, 0, 1.72, 0.07, W * 0.86, 0, paint);
    mb.box(-L / 2 + 1.0, cl + 0.7, W / 2 - 0.05, 2.0, 0.45, 0.1, 0, paint); mb.box(-L / 2 + 1.0, cl + 0.7, -W / 2 + 0.05, 2.0, 0.45, 0.1, 0, paint); mb.box(-L / 2 + 0.05, cl + 0.7, 0, 0.1, 0.45, W, 0, paint);
    mb.box(L / 2 - 0.05, cl + 0.1, 0, 0.14, 0.5, W * 0.96, 0, C3(0x9aa0a6));
    lights.head.push([L / 2, cl + 0.55, W * 0.38], [L / 2, cl + 0.55, -W * 0.38]); lights.tail.push([-L / 2, cl + 0.8, W * 0.43], [-L / 2, cl + 0.8, -W * 0.43]);
  } else if (T.kind === 'box' || T.kind === 'semi' || T.kind === 'plow') {
    var cabL = T.kind === 'semi' ? 3.2 : 2.4, cabX = L / 2 - cabL / 2;
    mb.box(cabX, cl, 0, cabL, H * 0.78 - cl, W, 0, paint); mb.box(cabX + cabL * 0.18, cl + H * 0.42, 0, cabL * 0.55, H * 0.3, W * 0.98, 0, glass);
    if (T.kind === 'plow') {
      mb.box(-1.0, cl, 0, L - cabL - 0.5, 1.6, W, 0, C3(0x4a4d50));        // dump body
      mb.box(-1.0, cl + 1.6, 0, L - cabL - 0.5, 0.2, W, 0, C3(0x3a3d40));
      mb.box(L / 2 + 0.9, 0.12, 0, 0.35, 1.1, 3.6, 0.35, C3(0xf2c10b));     // angled front blade
      mb.box(-L / 2 + 0.3, cl + 0.3, 0, 0.6, 0.7, 1.2, 0, C3(0x222222));     // spreader
      mb.box(cabX, H * 0.78, -0.5, 0.25, 0.18, 0.25, 0, C3(0xffa500)); mb.box(cabX, H * 0.78, 0.5, 0.25, 0.18, 0.25, 0, C3(0xffa500));
      lights.beacon = [[cabX, H * 0.78 + 0.2, -0.5], [cabX, H * 0.78 + 0.2, 0.5], [-L / 2 + 0.2, cl + 1.9, -W / 2], [-L / 2 + 0.2, cl + 1.9, W / 2]];
    } else if (T.kind === 'semi') {
      mb.box(-L / 2 + 7.8, cl + 0.2, 0, 15.6, H - cl - 0.2, W, 0, C3(0xe8e8e6)); mb.box(-L / 2 + 7.8, cl, 0, 15.6, 0.25, W * 0.9, 0, trim);
    } else mb.box(-cabL / 2 - 0.1, cl + 0.1, 0, L - cabL - 0.2, H - cl - 0.1, W, 0, C3(0xecebe6));
    lights.head.push([L / 2, cl + 0.5, W * 0.4], [L / 2, cl + 0.5, -W * 0.4]); lights.tail.push([-L / 2, cl + 0.5, W * 0.42], [-L / 2, cl + 0.5, -W * 0.42]);
  } else if (T.kind === 'bus') {
    mb.box(0, cl, 0, L, H - cl, W, 0, paint);
    for (var k = 0; k < 9; k++) mb.box(-L / 2 + 1.6 + k * 1.1, cl + (H - cl) * 0.5, 0, 0.9, (H - cl) * 0.33, W + 0.02, 0, glass);
    mb.box(L / 2 - 0.02, cl + (H - cl) * 0.45, 0, 0.06, (H - cl) * 0.45, W * 0.9, 0, glass);
    mb.box(0, cl, 0, L + 0.02, 0.3, W + 0.02, 0, trim);
    lights.head.push([L / 2, cl + 0.5, W * 0.4], [L / 2, cl + 0.5, -W * 0.4]); lights.tail.push([-L / 2, cl + 0.6, W * 0.42], [-L / 2, cl + 0.6, -W * 0.42]);
  }
  lights.head.forEach(function (p) { mb.box(p[0] - 0.02, p[1] - 0.08, p[2], 0.06, 0.16, 0.34, 0, head); });
  lights.tail.forEach(function (p) { mb.box(p[0] + 0.02, p[1] - 0.07, p[2], 0.06, 0.14, 0.3, 0, tail); });
  // wheels
  var wheels = [], hw = W / 2 - 0.12, xa = T.wb / 2 + (T.kind === 'box' || T.kind === 'semi' || T.kind === 'plow' || T.kind === 'bus' ? L / 2 - T.wb / 2 - 1.3 : 0);
  var axles = T.kind === 'semi' ? [L / 2 - 1.3, L / 2 - 1.3 - T.wb, -L / 2 + 1.4, -L / 2 + 2.7] : [xa, xa - T.wb];
  axles.forEach(function (ax, i) { wheels.push([ax, T.r, hw, i === 0], [ax, T.r, -hw, i === 0]); });
  return { geo: mb.geometry(), wheels: wheels, lights: lights, T: T };
}
function wheelGeometry(r, w) {
  var mb = new MB(), tire = C3(0x151515), rim = C3(0x9aa0a6), seg = 14;
  for (var k = 0; k < seg; k++) {
    var a0 = k / seg * Math.PI * 2, a1 = (k + 1) / seg * Math.PI * 2, c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1);
    mb.quad([c0 * r, s0 * r, -w / 2], [c1 * r, s1 * r, -w / 2], [c1 * r, s1 * r, w / 2], [c0 * r, s0 * r, w / 2], tire);
    [-w / 2, w / 2].forEach(function (z) { var f = z > 0 ? 1 : -1; mb.tri([0, 0, z * 1.01], [c0 * r * 0.62, s0 * r * 0.62, z * 1.01], [c1 * r * 0.62, s1 * r * 0.62, z * 1.01], (k % 2) ? rim : C3(0x6c7277)); mb.quad([c0 * r * 0.62, s0 * r * 0.62, z], [c0 * r, s0 * r, z], [c1 * r, s1 * r, z], [c1 * r * 0.62, s1 * r * 0.62, z], tire); });
  }
  return mb.geometry();
}

// ---------------- world surface for the physics ----------------
var SURF = { mu: 1, kind: 'dry', drag: 0, water: 0, label: 'Dry asphalt', onRoad: true, bridge: 0, blackIce: false, shown: 'Dry' };
var _rq3 = {};
var ROADSTATE = null;   // set by weather: per class {snow, ice, wet, slush}, blackIce, leaves, frozen...
function surfaceAt(x, z, yHint, out) {
  var e = roadAt(x, z, yHint, _rq3), W = ROADSTATE;
  out.bridge = 0; out.blackIce = false; out.e = e; out.node = _rq3.node;
  if (e) {
    out.h = _rq3.h; out.onRoad = true;
    var ci = e.ci, st = W.cls[ci], snow = st.snow, k = _rq3.k;
    var sAt = stationOf(e, k, _rq3.t);
    if (e.pl.road && e.pl.road.indexOf('mn65') === 0) { var age = W.gameMin - e.plow[Math.min(e.plow.length - 1, Math.floor(sAt / 10))]; snow = Math.min(snow, Math.max(0, age) * W.snowRate); }
    // wheel paths are packed/cleared: lateral position within the lane
    var laneC = e.lanesB ? (Math.abs(_rq3.lat) - e.pl.center / 2) / e.laneW : (_rq3.lat + e.hw - CLS[e.cls].shL) / e.laneW;
    var ln = laneC - Math.floor(laneC), track = (Math.abs(ln - 0.27) < 0.09 || Math.abs(ln - 0.73) < 0.09) ? 1 : 0;
    snow = clamp(snow * (1 - (W.tempF > 26 ? 0.6 : (W.tempF > 15 ? 0.3 : 0)) * track), 0, 1);   // cold: tracks polish instead of clearing
    var base = e.cls === 'gravel' ? 0.62 : 1.0, kind = e.cls === 'gravel' ? 'gravel' : 'dry', water = 0, drag = e.cls === 'gravel' ? 0.02 : 0, label = e.cls === 'gravel' ? 'Gravel' : (e.cls === 'fwy' || e.cls === 'ramp' ? 'Dry concrete' : 'Dry asphalt');
    if (st.wet > 0.05) { base = lerp(base, base * 0.8, st.wet); kind = 'wet'; water = W.water * st.wet * (1 + (Math.abs(_rq3.lat) > e.hw - 1.5 ? 1.5 : 0) + (track ? 0.6 : 0)); label = water > 1.5 ? 'Standing water' : 'Wet'; }
    if (e.ci >= 4 && W.leaves > 0) { var lf = leafAt(x, z, e.ci) * W.leaves * (vnoise(x * 0.9 / 1.7, z * 0.9 / 1.7) > 0.5 ? 1 : 0.2); if (lf > 0.2) { base *= lerp(1, st.wet > 0.2 ? 0.62 : 0.85, clamp(lf, 0, 1)); label = st.wet > 0.2 ? 'Wet leaves' : 'Leaves'; } }
    if (snow > 0.03) { var sm = (st.slush && !(st.fresh && snow > 0.25)) ? lerp(0.32, 0.5, clamp((W.tempF - 18) / 14, 0, 1)) : (snow > 0.7 && st.fresh ? 0.30 : 0.25); base = lerp(base, sm, smooth(0.03, 0.6, snow)); kind = 'snow'; drag += snow * (st.fresh ? 0.03 : 0.008); label = (st.slush && !(st.fresh && snow > 0.25)) ? 'Slush' : (st.fresh ? 'Fresh snow' : 'Packed snow'); }
    if (st.ice > 0.02) { base = lerp(base, 0.085, st.ice); if (st.ice > 0.4) { kind = 'ice'; label = 'Icy'; } }
    var br = e.br[k] || e.br[k + 1];
    if (br) out.bridge = br;
    // black ice: bridge decks and overpass approaches freeze first -- not shown to the driver
    if (W.blackIce > 0 && (br || (e.pl.group === 'fwy' && _rq3.h > 0.4))) { base = Math.min(base, lerp(base, 0.055, W.blackIce)); kind = 'ice'; out.blackIce = true; }
    if (e.closed >= 0 && !e.lanesB && _rq3.lat > -e.hw + CLS[e.cls].shL + e.closed * e.laneW + e.shift) { base *= 0.75; drag += 0.015; label = 'Milled work-zone lane'; }
    out.mu = base; out.kind = kind; out.water = water; out.drag = drag; out.label = label;
  } else {
    var lu = LUR.get(x, z); out.onRoad = false; out.h = groundH(x, z);
    var g = W.groundSnow;
    if (lu === LU.WATER) { if (W.frozen) { out.mu = 0.08 + 0.2 * Math.min(1, g); out.kind = g > 0.3 ? 'snow' : 'ice'; out.drag = 0.01 + g * 0.02; out.label = 'Lake ice'; out.water = 0; out.h = -0.42; } else { out.mu = 0.1; out.kind = 'wet'; out.drag = 0.4; out.water = 20; out.label = 'Water'; out.h = -1.2; } return out; }
    var m = { 2: 0.95, 8: 1.0, 7: 0.45, 11: 0.55, 12: 0.35 }[lu] || 0.5;
    var kd = (lu === 2 || lu === 8) ? 'dry' : (lu === 7 || lu === 11 ? 'gravel' : 'grass');
    out.drag = (lu === 2 || lu === 8) ? 0 : (lu === 7 ? 0.09 : 0.035);
    if (W.cls[3].wet > 0.2 && kd === 'grass') { m *= 0.7; kd = 'wet'; }
    if (g > 0.05 && lu !== 2 && lu !== 8) { m = lerp(m, 0.3, Math.min(1, g * 1.5)); kd = 'snow'; out.drag += 0.02 + 0.06 * g; }
    out.mu = m; out.kind = kd; out.water = 0;
    out.label = { 0: 'Grass', 1: 'Farm field', 2: 'Parking lot', 4: 'Woods', 5: 'Fairway', 6: 'Putting green', 7: 'Bunker sand', 8: 'Runway', 9: 'Airfield grass', 10: 'Turf', 11: 'Dirt', 12: 'Marsh', 13: 'Lawn', 14: 'Rough' }[lu] || 'Grass';
    if (g > 0.3 && lu !== 2 && lu !== 8) out.label = 'Deep snow';
  }
  return out;
}

// ---------------- static collision grid ----------------
var CGRID = null, CCELL = 20;
function buildColliders() {
  CGRID = new Map();
  function put(x0, z0, x1, z1, item) {
    for (var i = Math.floor(x0 / CCELL); i <= Math.floor(x1 / CCELL); i++) for (var j = Math.floor(z0 / CCELL); j <= Math.floor(z1 / CCELL); j++) { var k = i * 65536 + j, l = CGRID.get(k); if (!l) CGRID.set(k, l = []); l.push(item); }
  }
  BLD.forEach(function (b) {
    var r = Math.hypot(b.w, b.d) / 2; var it = { t: 'obb', x: b.x, z: b.z, hw: b.w / 2, hd: b.d / 2, c: Math.cos(b.rot), s: Math.sin(b.rot), top: (b.y || 0) + b.h + 2 };
    put(b.x - r, b.z - r, b.x + r, b.z + r, it);
  });
  if (NSCL) { var V = NSCL.velo; put(V.x - V.a - 8, V.z - V.b - 8, V.x + V.a + 8, V.z + V.b + 8, { t: 'ell', x: V.x, z: V.z, a: V.a + 7, b: V.b + 7 }); var S = NSCL.stadium; put(S.x - 80, S.z - 66, S.x + 80, S.z + 66, { t: 'obb', x: S.x - 66, z: S.z, hw: 7, hd: 56, c: 1, s: 0, top: 12 }); }
  TREES.forEach(function (t) { var r = (t.t ? 0.3 : 0.25) * t.s + 0.15; put(t.x - r, t.z - r, t.x + r, t.z + r, { t: 'cir', x: t.x, z: t.z, r: r, top: 8 }); });
  POLES.forEach(function (p) { put(p[0] - 0.3, p[1] - 0.3, p[0] + 0.3, p[1] + 0.3, { t: 'cir', x: p[0], z: p[1], r: 0.2, top: 8, pole: true }); });
  PIER_POS.forEach(function (p) { put(p[0] - 1, p[1] - 1, p[0] + 1, p[1] + 1, { t: 'cir', x: p[0], z: p[1], r: 0.7, top: 5 }); });
  COLLIDE_SEGS.forEach(function (s) { put(Math.min(s[0], s[2]) - 1, Math.min(s[1], s[3]) - 1, Math.max(s[0], s[2]) + 1, Math.max(s[1], s[3]) + 1, { t: 'seg', x0: s[0], z0: s[1], x1: s[2], z1: s[3], y: s[4] }); });
}

// ---------------- player rig ----------------
var PLAYER = null;
function makePlayer(specId, opts) {
  var spec = P.VEHICLES[specId], type = specId === 'truck' ? 'truck' : specId;
  var model = buildCarModel(type);
  var car = new P.Car(spec, opts);
  var root = new T3.Group(), body = new T3.Group(), paint = new T3.Color(spec.look.body);
  var bodyMat = new T3.MeshPhongMaterial({ vertexColors: true, color: paint, shininess: specId === 'beater' ? 8 : 70, specular: specId === 'beater' ? 0x111111 : 0x555555 });
  var bm = new T3.Mesh(model.geo, bodyMat); bm.castShadow = true; body.add(bm); root.add(body);
  var wg = wheelGeometry(spec.tire.r, specId === 'truck' ? 0.3 : 0.24), wm = new T3.MeshLambertMaterial({ vertexColors: true });
  var wheels = [];
  // physics wheel order FL, FR, RL, RR (left = +y physics = -z model)
  var wpos = [[car.a, -spec.trackF / 2], [car.a, spec.trackF / 2], [-car.b, -spec.trackR / 2], [-car.b, spec.trackR / 2]];
  var cgOff = (model.T.wb / 2) - car.a;   // model is centred on wheelbase midpoint; physics on the CG
  bm.position.x = cgOff;
  wpos.forEach(function (w) { var piv = new T3.Group(), m = new T3.Mesh(wg, wm); m.castShadow = true; piv.add(m); piv.position.set(w[0], spec.tire.r, w[1]); root.add(piv); wheels.push({ piv: piv, mesh: m, spin: 0 }); });
  // cockpit (visible in hood camera)
  var cockpit = new T3.Group(), dash = new MB(), dk = C3(0x1a1c1f);
  var cx = model.T.L * 0.05 + cgOff, eyeH = model.T.cl + model.T.r * 0.55 + (specId === 'truck' ? 1.25 : 1.0);
  dash.box(cx + 0.8, eyeH - 0.62, 0, 0.55, 0.22, model.T.W * 0.95, 0, dk);
  dash.box(cx + 0.62, eyeH - 0.5, -0.37, 0.18, 0.12, 0.5, 0, C3(0x26292d));
  dash.box(cx + 1.05, eyeH - 0.25, -model.T.W * 0.46, 0.05, 0.75, 0.05, 0, dk); dash.box(cx + 1.05, eyeH - 0.25, model.T.W * 0.46, 0.05, 0.75, 0.05, 0, dk);
  cockpit.add(new T3.Mesh(dash.geometry(), new T3.MeshLambertMaterial({ vertexColors: true })));
  var sw = new T3.Mesh(new T3.TorusGeometry(0.19, 0.025, 6, 20), new T3.MeshLambertMaterial({ color: 0x151515 }));
  sw.position.set(cx + 0.38, eyeH - 0.42, -0.37); sw.rotation.y = Math.PI / 2; sw.rotation.x = -0.35; cockpit.add(sw);
  cockpit.visible = false; body.add(cockpit);
  // headlights
  var spot = new T3.SpotLight(0xfff4e0, 0, 110, 0.48, 0.55, 1.2);
  spot.position.set(model.T.L / 2 + cgOff, 0.8, 0); var tgt = new T3.Object3D(); tgt.position.set(30, -1.2, 0); root.add(tgt); spot.target = tgt; root.add(spot);
  SCENE.add(root);
  PLAYER = {
    spec: spec, specId: specId, car: car, root: root, body: body, bodyMesh: bm, wheels: wheels, model: model, cockpit: cockpit, steerWheel: sw, eye: new T3.Vector3(cx - 0.05, eyeH, -0.37),
    spot: spot, drv: new P.DriverInput(), y: 0, vy: 0, surf: [0, 1, 2, 3].map(function () { return Object.assign({}, SURF); }), hazard: 0, crashT: 0, lastHit: 0,
    trailLast: [null, null, null, null], stats: { crashes: 0, redLights: 0, maxSpeed: 0, dist: 0, wzSpeeding: 0 }, onBridge: 0, lost: 0, sink: 0
  };
  return PLAYER;
}
function disposePlayer() { if (PLAYER) { SCENE.remove(PLAYER.root); PLAYER = null; } }
var _surf = { }, _vec = null;
function playerSpawn(x, z, yaw, speed) {
  var c = PLAYER.car, n = nearestEdge(x, z, 200, function (e) { return e.cls !== 'lot'; });
  var h = 0;
  if (n) { var at = pointAt(n.e.pts, n.e.cum, n.s), fwd = true; if (yaw === undefined) yaw = yawOf(at.dx, at.dz); x = at.x; z = at.z; h = n.e.h[n.k]; var off = n.e.lanesB ? laneOffset(n.e, true, 0) : laneOffset(n.e, true, Math.max(0, (n.e.closed >= 0 ? n.e.closed - 1 : n.e.lanesF - 1))); x += -at.dz * off; z += at.dx * off; }
  c.reset(x, -z, yaw || 0, speed || 0);
  PLAYER.y = h; PLAYER.vy = 0; PLAYER.crashT = 0; PLAYER.sink = 0;
  PLAYER.trailLast = [null, null, null, null];
}
// per-frame coupling: sample surface under each wheel, grade, step physics, collisions, visuals
function updatePlayer(dt, inp) {
  var pl = PLAYER, car = pl.car, sp = pl.spec;
  var mapped = pl.drv.map(car, inp.gas, inp.brake, inp.steer, inp.hand, dt);
  car.input.throttle = mapped.throttle; car.input.brake = mapped.brake; car.input.steer = mapped.steer; car.input.handbrake = mapped.handbrake;
  if (pl.sink > 0) { car.input.throttle = 0; }
  var hs = [], onR = 0, blk = false, br = 0;
  for (var i = 0; i < 4; i++) {
    var ww = car.wheelWorld(i), s = surfaceAt(ww[0], -ww[1], pl.y + 0.5, pl.surf[i]);
    car.setSurface(i, s); hs.push(s.h); if (s.onRoad) onR++; if (s.blackIce) blk = true; if (s.bridge) br = s.bridge;
  }
  pl.onBridge = br; pl.blackIce = blk;
  var hF = (hs[0] + hs[1]) / 2, hR = (hs[2] + hs[3]) / 2, hL = (hs[0] + hs[2]) / 2, hRt = (hs[1] + hs[3]) / 2;
  var target = (hF * car.b + hR * car.a) / sp.wheelbase;
  car.slope = pl.y - target > 0.4 ? 0 : (hF - hR) / sp.wheelbase;
  car.slopeL = pl.y - target > 0.4 ? 0 : (hL - hRt) / ((sp.trackF + sp.trackR) / 2);
  var airborne = pl.y > target + 0.35;
  if (airborne) car.setAllSurfaces({ mu: 0, kind: 'dry', drag: 0, water: 0 });
  car.step(dt);
  // vertical: follow surface, fall off edges
  if (pl.y > target + 0.05) { pl.vy -= 9.81 * dt; pl.y += pl.vy * dt; if (pl.y <= target) { if (pl.vy < -6) { cameraShake(0.6); AUDIO.thump(0.8); } pl.y = target; pl.vy = 0; } }
  else { pl.vy = (target - pl.y) / Math.max(dt, 1e-3) * 0.3; pl.y = target; }
  collideStatic(pl, dt);
  collideTraffic(pl, dt);
  // water: unfrozen lake / creek
  var cs = pl.surf[0];
  var wet = 0; for (var wi = 0; wi < 4; wi++) if (pl.surf[wi].label === 'Water') wet++;
  if (wet) { var dmp = Math.max(0, 1 - dt * 0.9 * wet); car.u *= dmp; car.v *= dmp; car.r *= dmp; }   // hydrodynamic drag on the body
  if (cs.label === 'Water' && pl.surf[3].label === 'Water') { pl.sink += dt; if (pl.sink > 0.1 && !pl.sinkMsg) { pl.sinkMsg = true; toast('Splash! You drove into the water — resetting to the road', 3); PARTS.burst(car.x, pl.y, -car.y, 60, 'splash'); } if (pl.sink > 2.2) { pl.sinkMsg = false; resetPlayerToRoad(); } }
  else pl.sink = 0;
  var v = car.speed();
  pl.stats.maxSpeed = Math.max(pl.stats.maxSpeed, v); pl.stats.dist += v * dt;
  // visuals
  pl.root.position.set(car.x, pl.y - pl.sink * 0.5, -car.y);
  pl.root.rotation.set(0, car.psi, 0);
  pl.body.rotation.x = -car.bodyRoll() + Math.atan(car.slopeL) * 0.5; pl.body.rotation.z = -car.bodyPitch() + Math.atan(car.slope) * 0.5;
  pl.body.position.y = 0;
  for (i = 0; i < 4; i++) {
    var W = pl.wheels[i], wd = car.w[i];
    W.spin += wd.omega * dt;
    W.piv.rotation.set(0, wd.steer, 0);
    W.mesh.rotation.set(0, 0, -W.spin);
    W.piv.position.y = sp.tire.r + (hs[i] - pl.y) * 0.6;
  }
  pl.steerWheel.rotation.z = -car.steerAngle * 14;
  // tyre tracks in snow / skid marks
  for (i = 0; i < 4; i++) {
    var sw2 = pl.surf[i], wdd = car.w[i], wp = car.wheelWorld(i);
    var snowy = sw2.kind === 'snow' || (sw2.label === 'Deep snow');
    var skid = wdd.slipVel > 4.5 && sw2.kind === 'dry' && sw2.onRoad;
    var cur = [wp[0], -wp[1], sw2.h];
    if ((snowy || skid || sw2.kind === 'wet' && wdd.slipVel > 3) && v > 0.3) {
      var last = pl.trailLast[i];
      if (!last || dist2(last[0], last[1], cur[0], cur[1]) > 0.36) { if (last && dist2(last[0], last[1], cur[0], cur[1]) < 16) TRAILS.add(last, cur, snowy ? 0 : 1, sp.tire.r > 0.38 ? 0.3 : 0.23); pl.trailLast[i] = cur; }
    } else pl.trailLast[i] = null;
    if (wdd.slipVel > 6 && sw2.kind === 'dry' && Math.random() < dt * 30) PARTS.emit(cur[0], cur[2] + 0.3, cur[1], 'smoke');
    if (snowy && v > 6 && Math.random() < dt * v * 0.6) PARTS.emit(cur[0], cur[2] + 0.2, cur[1], 'snow');
    if (sw2.kind === 'wet' && v > 10 && Math.random() < dt * v * (sw2.water > 1 ? 1.2 : 0.35)) PARTS.emit(cur[0], cur[2] + 0.2, cur[1], 'spray');
  }
  // exhaust vapour in the cold
  if (WEATHER.tempF < 38 && Math.random() < dt * 8) { var ex = car.x - Math.cos(car.psi) * (pl.model.T.L / 2) , ez = -car.y + Math.sin(car.psi) * (pl.model.T.L / 2); PARTS.emit(ex, pl.y + 0.35, ez, 'vapor'); }
  // headlights
  pl.spot.intensity = LIGHT_STATE.headlights ? (LIGHT_STATE.high ? 2.6 : 1.9) : 0;
  pl.spot.distance = LIGHT_STATE.high ? 170 : 105;
}
function resetPlayerToRoad() {
  var c = PLAYER.car, n = nearestEdge(c.x, -c.y, 400, function (e) { return e.cls !== 'lot' && e.cls !== 'gravel'; });
  if (n) { var at = pointAt(n.e.pts, n.e.cum, n.s); playerSpawn(at.x, at.z, undefined, 0); }
  else playerSpawn(c.x, -c.y, c.psi, 0);
}
// OBB of the car in world x/z
function carOBB(car, L, W) { var c = Math.cos(car.psi), s = Math.sin(car.psi); return { x: car.x, z: -car.y, fx: c, fz: -s, rx: s, rz: c, hl: L / 2, hw: W / 2 }; }
function collideStatic(pl, dt) {
  var car = pl.car, T = pl.model.T, ob = carOBB(car, T.L, T.W), R = Math.hypot(ob.hl, ob.hw) + 1;
  var ci = Math.floor(ob.x / CCELL), cj = Math.floor(ob.z / CCELL), seen = new Set();
  for (var di = -1; di <= 1; di++) for (var dj = -1; dj <= 1; dj++) {
    var l = CGRID.get((ci + di) * 65536 + cj + dj); if (!l) continue;
    for (var q = 0; q < l.length; q++) {
      var it = l[q]; if (seen.has(it)) continue; seen.add(it);
      var hit = null;
      if (it.t === 'cir') { if (pl.y > it.top || pl.y < -3) continue; hit = obbCircle(ob, it.x, it.z, it.r); }
      else if (it.t === 'obb') { if (pl.y > it.top) continue; hit = obbObb(ob, it); }
      else if (it.t === 'seg') { if (Math.abs(pl.y - it.y) > 2.2) continue; hit = obbSeg(ob, it); }
      else if (it.t === 'ell') { var ex = (ob.x - it.x) / it.a, ez = (ob.z - it.z) / it.b, d = Math.sqrt(ex * ex + ez * ez); if (d < 1) { var nx = ex / (d || 1), nz = ez / (d || 1); hit = { nx: nx / it.a * it.a, nz: nz, pen: (1 - d) * Math.min(it.a, it.b), px: ob.x, pz: ob.z }; var nl = Math.hypot(hit.nx, hit.nz); hit.nx /= nl; hit.nz /= nl; } }
      if (hit) resolveHit(pl, hit, 1e9, it.pole ? 0.1 : 0.15);
    }
  }
  // work-zone drums: knock them flying
  for (var k = 0; k < DRUMS.length; k++) {
    var dr = DRUMS[k]; if (dr.tilt > 1.4 && !dr.moving) continue;
    var dx = dr.x - ob.x, dz = dr.z - ob.z; if (dx * dx + dz * dz > (R + 0.5) * (R + 0.5)) continue;
    var h2 = obbCircle(ob, dr.x, dr.z, 0.32);
    if (h2 && !dr.moving) { var vv = car.worldVel(), sp2 = Math.hypot(vv[0], vv[1]); dr.moving = true; dr.vx = vv[0] * 0.9 + h2.nx * -2; dr.vz = -vv[1] * 0.9 + h2.nz * -2; dr.vy = 1.5 + sp2 * 0.15; dr.spin = (Math.random() - 0.5) * 8; car.u *= 0.985; AUDIO.thump(0.3); if (sp2 > 3) toast('You hit a work-zone drum', 1.5); }
  }
}
function obbCircle(ob, cx, cz, r) {
  var dx = cx - ob.x, dz = cz - ob.z, lf = dx * ob.fx + dz * ob.fz, lr = dx * ob.rx + dz * ob.rz;
  var qf = clamp(lf, -ob.hl, ob.hl), qr = clamp(lr, -ob.hw, ob.hw), px = ob.x + ob.fx * qf + ob.rx * qr, pz = ob.z + ob.fz * qf + ob.rz * qr;
  var ex = cx - px, ez = cz - pz, d = Math.sqrt(ex * ex + ez * ez);
  if (d > r) return null;
  if (d < 1e-4) { var pf = ob.hl - Math.abs(lf), pr = ob.hw - Math.abs(lr); if (pf < pr) { ex = ob.fx * Math.sign(lf); ez = ob.fz * Math.sign(lf); d = -pf; } else { ex = ob.rx * Math.sign(lr); ez = ob.rz * Math.sign(lr); d = -pr; } return { nx: -ex, nz: -ez, pen: r - d, px: px, pz: pz }; }
  return { nx: -ex / d, nz: -ez / d, pen: r - d, px: px, pz: pz };   // normal pushes car away from obstacle
}
function obbObb(a, b) {
  // b: {x,z,hw,hd,c,s} with local x axis (c,-s), local z axis (s,c)
  var bx = { fx: b.c, fz: -b.s, rx: b.s, rz: b.c, hl: b.hw, hw: b.hd, x: b.x, z: b.z };
  var axes = [[a.fx, a.fz], [a.rx, a.rz], [bx.fx, bx.fz], [bx.rx, bx.rz]], best = 1e9, bn = null;
  var dx = bx.x - a.x, dz = bx.z - a.z;
  for (var i = 0; i < 4; i++) {
    var ax = axes[i][0], az = axes[i][1];
    var ra = Math.abs(a.hl * (a.fx * ax + a.fz * az)) + Math.abs(a.hw * (a.rx * ax + a.rz * az));
    var rb = Math.abs(bx.hl * (bx.fx * ax + bx.fz * az)) + Math.abs(bx.hw * (bx.rx * ax + bx.rz * az));
    var d = dx * ax + dz * az, o = ra + rb - Math.abs(d);
    if (o < 0) return null;
    if (o < best) { best = o; bn = d > 0 ? [-ax, -az] : [ax, az]; }
  }
  // contact point: car corner deepest into b (approx: point on car toward b)
  var px = a.x + clamp(dx * a.fx + dz * a.fz, -a.hl, a.hl) * a.fx + clamp(dx * a.rx + dz * a.rz, -a.hw, a.hw) * a.rx;
  var pz = a.z + clamp(dx * a.fx + dz * a.fz, -a.hl, a.hl) * a.fz + clamp(dx * a.rx + dz * a.rz, -a.hw, a.hw) * a.rz;
  return { nx: bn[0], nz: bn[1], pen: best, px: px, pz: pz };
}
function obbSeg(ob, s) {
  // test car corners against the barrier line + barrier ends against the car
  var sx = s.x1 - s.x0, sz = s.z1 - s.z0, L = Math.hypot(sx, sz) || 1, best = null;
  var corners = [[1, 1], [1, -1], [-1, 1], [-1, -1]], tmp = {};
  var side = (sx * (ob.z - s.z0) - sz * (ob.x - s.x0)) > 0 ? 1 : -1;
  for (var i = 0; i < 4; i++) {
    var cx = ob.x + ob.fx * ob.hl * corners[i][0] + ob.rx * ob.hw * corners[i][1], cz = ob.z + ob.fz * ob.hl * corners[i][0] + ob.rz * ob.hw * corners[i][1];
    var d = segDist(cx, cz, s.x0, s.z0, s.x1, s.z1, tmp), cs = (sx * (cz - s.z0) - sz * (cx - s.x0)) > 0 ? 1 : -1;
    if (tmp.t <= 0 || tmp.t >= 1) continue;
    if (cs !== side || d < 0.25) {
      var pen = cs !== side ? d + 0.25 : 0.25 - d;
      var nx = -sz / L * side, nz = sx / L * side;
      if (!best || pen > best.pen) best = { nx: nx, nz: nz, pen: pen, px: cx, pz: cz };
    }
  }
  return best;
}
function contactImpulse(car, h, rest, massB, vBx, vBy) {
  // all in physics coordinates (X east, Y north); returns normal impact speed (>0 if closing)
  var nx = h.nx, ny = -h.nz, px = h.px, py = -h.pz, rx = px - car.x, ry = py - car.y;
  var vx = car.u * Math.cos(car.psi) - car.v * Math.sin(car.psi) - car.r * ry, vy = car.u * Math.sin(car.psi) + car.v * Math.cos(car.psi) + car.r * rx;
  vx -= vBx || 0; vy -= vBy || 0;
  var vn = vx * nx + vy * ny;
  if (vn >= 0) return 0;
  var m = car.spec.mass, rn = rx * ny - ry * nx, k = 1 / m + rn * rn / car.izz + (massB ? 1 / massB : 0);
  var j = -(1 + rest) * vn / k;
  var tx = -ny, ty = nx, vt = vx * tx + vy * ty, rt = rx * ty - ry * tx, kt = 1 / m + rt * rt / car.izz;
  var jt = clamp(-vt / kt, -0.45 * j, 0.45 * j);
  car.applyImpulse(px, py, nx * j + tx * jt, ny * j + ty * jt);
  return { vn: -vn, j: j, jx: nx * j + tx * jt, jy: ny * j + ty * jt };
}
function resolveHit(pl, h, massB, rest) {
  var car = pl.car;
  car.x += h.nx * h.pen; car.y -= h.nz * h.pen;
  var r = contactImpulse(car, h, rest, 0);
  var impact = r ? r.vn : 0;
  if (impact > 2.5 && car.t - pl.lastHit > 0.6) { pl.lastHit = car.t; pl.stats.crashes++; cameraShake(Math.min(1.2, impact / 12)); AUDIO.thump(Math.min(1, impact / 15)); if (impact > 8) toast('Crash! ' + Math.round(impact / MPH) + ' mph impact', 2.2); }
}
function collideTraffic(pl, dt) {
  var car = pl.car, T = pl.model.T, ob = carOBB(car, T.L, T.W);
  AI.nearby(ob.x, ob.z, 14, function (a) {
    if (a.isPlayer || Math.abs(a.y - pl.y) > 2.5) return;
    var at = CARTYPES[a.type];
    var h = obbObb(ob, { x: a.x, z: a.z, hw: at.L / 2, hd: at.W / 2, c: Math.cos(a.yaw), s: Math.sin(a.yaw) });
    if (!h) return;
    var mB = a.type === 'semi' ? 30000 : (a.type === 'bus' || a.type === 'plow' || a.type === 'box' ? 12000 : 1800);
    var vvA = [Math.cos(a.yaw) * a.v, -Math.sin(a.yaw) * a.v];   // world x/z velocity of AI
    car.x += h.nx * h.pen * 0.7; car.y -= h.nz * h.pen * 0.7;
    var r = contactImpulse(car, h, 0.25, mB, vvA[0], -vvA[1]);
    if (r) {
      AI.hit(a, -r.jx / mB, r.jy / mB);
      if (r.vn > 2.5 && car.t - pl.lastHit > 0.6) { pl.lastHit = car.t; pl.stats.crashes++; cameraShake(Math.min(1.2, r.vn / 10)); AUDIO.thump(Math.min(1, r.vn / 12)); toast(r.vn > 6 ? 'Collision with traffic!' : 'Bumped another vehicle', 2); }
    }
  });
}

// ---------------- camera ----------------
var CAM = { mode: 0, shake: 0, pos: null, look: null, yaw: 0, init: false, orbit: 0, pitch: 0.18 };
var CAM_MODES = ['Chase', 'Far chase', 'Hood / cockpit', 'Overhead'];
function cameraShake(a) { CAM.shake = Math.max(CAM.shake, a); }
function updateCamera(camera, dt) {
  var pl = PLAYER, car = pl.car, T = pl.model.T;
  if (!CAM.pos) { CAM.pos = new T3.Vector3(); CAM.look = new T3.Vector3(); }
  var vv = car.worldVel(), sp = Math.hypot(vv[0], vv[1]);
  var velYaw = sp > 2 ? Math.atan2(vv[1], vv[0]) : car.psi;
  var targetYaw = car.psi + 0.5 * angWrap(velYaw - car.psi) * clamp(sp / 8, 0, 1) + CAM.orbit;
  if (!CAM.init) { CAM.yaw = targetYaw; CAM.init = true; }
  CAM.yaw += angWrap(targetYaw - CAM.yaw) * clamp(dt * 4.5, 0, 1);
  pl.cockpit.visible = CAM.mode === 2; pl.bodyMesh.visible = CAM.mode !== 2;
  var px, py, pz, lx, ly, lz;
  var cx = car.x, cz = -car.y, cy = pl.y;
  if (CAM.mode === 2) {
    var e = pl.eye.clone(); pl.body.localToWorld(e);
    camera.position.copy(e);
    var fx = Math.cos(car.psi + CAM.orbit), fz = -Math.sin(car.psi + CAM.orbit);
    camera.up.set(0, 1, 0);
    camera.lookAt(e.x + fx * 20, e.y - 0.8 + pl.body.rotation.z * 6, e.z + fz * 20);
    camera.fov = 70; camera.updateProjectionMatrix();
  } else {
    var dist = CAM.mode === 1 ? T.L * 2.6 + 7 : T.L * 1.35 + 3.2, hgt = CAM.mode === 1 ? 4.8 + T.H : 1.6 + T.H * 0.9;
    if (CAM.mode === 3) { dist = 28; hgt = 60; }
    dist += clamp(sp - 20, 0, 30) * 0.08;
    px = cx - Math.cos(CAM.yaw) * dist; pz = cz + Math.sin(CAM.yaw) * dist; py = cy + hgt;
    // keep camera above terrain/road
    var gy = Math.max(groundH(px, pz), cy - 1) + 0.6; if (py < gy) py = gy;
    CAM.pos.lerp(new T3.Vector3(px, py, pz), CAM.mode === 3 ? 1 : clamp(dt * 10, 0, 1));
    if (CAM.pos.distanceTo(new T3.Vector3(px, py, pz)) > 40) CAM.pos.set(px, py, pz);
    camera.position.copy(CAM.pos);
    lx = cx + Math.cos(car.psi) * 4; lz = cz - Math.sin(car.psi) * 4; ly = cy + T.H * 0.7;
    camera.lookAt(lx, ly, lz);
    var fovT = 62 + clamp(sp - 15, 0, 40) * 0.22; camera.fov += (fovT - camera.fov) * clamp(dt * 2, 0, 1); camera.updateProjectionMatrix();
  }
  if (BD.freeCam) { var fc = BD.freeCam; camera.position.set(fc[0], fc[1], fc[2]); camera.lookAt(fc[3], fc[4], fc[5]); camera.fov = fc[6] || 60; camera.updateProjectionMatrix(); pl.cockpit.visible = false; pl.bodyMesh.visible = true; return; }
  if (CAM.shake > 0) { camera.position.x += (Math.random() - 0.5) * CAM.shake * 0.3; camera.position.y += (Math.random() - 0.5) * CAM.shake * 0.3; CAM.shake = Math.max(0, CAM.shake - dt * 2.5); }
}
function angWrap(a) { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; }

// ---------------- tyre tracks / skid marks (ring buffer of quads) ----------------
var TRAILS = {
  n: 0, max: 2400, mesh: null, pos: null, col: null, i: 0,
  init: function (root) {
    this.pos = new Float32Array(this.max * 4 * 3); this.col = new Float32Array(this.max * 4 * 4);
    var idx = []; for (var q = 0; q < this.max; q++) { var b = q * 4; idx.push(b, b + 1, b + 2, b + 1, b + 3, b + 2); }
    var g = new T3.BufferGeometry(); g.setAttribute('position', new T3.BufferAttribute(this.pos, 3)); g.setAttribute('color', new T3.BufferAttribute(this.col, 4)); g.setIndex(idx);
    var m = new T3.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -5, polygonOffsetUnits: -5 });
    this.mesh = new T3.Mesh(g, m); this.mesh.frustumCulled = false; this.mesh.renderOrder = 4; root.add(this.mesh);
  },
  add: function (a, b, type, w) {
    var dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz) || 1, nx = -dz / L * w / 2, nz = dx / L * w / 2, q = this.i, p = this.pos, c = this.col;
    var ya = a[2] + 0.075, yb = b[2] + 0.075;
    p.set([a[0] + nx, ya, a[1] + nz, a[0] - nx, ya, a[1] - nz, b[0] + nx, yb, b[1] + nz, b[0] - nx, yb, b[1] - nz], q * 12);
    var col = type === 0 ? [0.38, 0.4, 0.44, 0.6] : [0.03, 0.03, 0.03, 0.55];
    for (var k = 0; k < 4; k++) c.set(col, q * 16 + k * 4);
    this.i = (this.i + 1) % this.max;
    this.mesh.geometry.attributes.position.needsUpdate = true; this.mesh.geometry.attributes.color.needsUpdate = true;
  },
  clear: function () { this.pos.fill(0); this.mesh.geometry.attributes.position.needsUpdate = true; }
};
// ---------------- small particle system (smoke, snow spray, water spray, exhaust vapour, salt) ----------------
var PARTS = {
  max: 1400, pts: null, pos: null, col: null, siz: null, life: null, vel: null, n: 0, i: 0,
  init: function (root) {
    var M = this.max; this.pos = new Float32Array(M * 3); this.col = new Float32Array(M * 4); this.siz = new Float32Array(M); this.life = new Float32Array(M); this.vel = new Float32Array(M * 3); this.kind = new Uint8Array(M); this.age = new Float32Array(M);
    var g = new T3.BufferGeometry(); g.setAttribute('position', new T3.BufferAttribute(this.pos, 3)); g.setAttribute('color', new T3.BufferAttribute(this.col, 4)); g.setAttribute('size', new T3.BufferAttribute(this.siz, 1));
    if (!GLOW.tex) GLOW.tex = glowTexture();
    var m = new T3.ShaderMaterial({ uniforms: { map: { value: GLOW.tex }, uPx: GLOW.uni.uPx }, transparent: true, depthWrite: false,
      vertexShader: 'attribute vec4 color; attribute float size; uniform float uPx; varying vec4 vC; void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp(size * uPx * 300.0 / max(0.5, -mv.z), 0.0, 220.0); }',
      fragmentShader: 'uniform sampler2D map; varying vec4 vC; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC.rgb, vC.a * t.a); }' });
    this.pts = new T3.Points(g, m); this.pts.frustumCulled = false; this.pts.renderOrder = 6; root.add(this.pts);
  },
  emit: function (x, y, z, kind, vx, vy, vz) {
    var i = this.i; this.i = (this.i + 1) % this.max;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    var K = { smoke: [0.8, 0.8, 0.8, 0.35, 1.2, 2.2], snow: [0.95, 0.97, 1, 0.8, 0.5, 0.9], spray: [0.75, 0.8, 0.85, 0.35, 0.8, 0.8], vapor: [0.92, 0.94, 0.97, 0.16, 0.35, 1.6], salt: [0.85, 0.82, 0.78, 0.7, 0.25, 0.9], splash: [0.7, 0.8, 0.9, 0.7, 1.0, 1.4] }[kind];
    this.col[i * 4] = K[0]; this.col[i * 4 + 1] = K[1]; this.col[i * 4 + 2] = K[2]; this.col[i * 4 + 3] = K[3];
    this.siz[i] = K[4]; this.life[i] = K[5]; this.age[i] = 0; this.kind[i] = kind === 'smoke' ? 1 : (kind === 'vapor' ? 2 : 0);
    this.vel[i * 3] = vx !== undefined ? vx : (Math.random() - 0.5) * 2; this.vel[i * 3 + 1] = vy !== undefined ? vy : 0.5 + Math.random() * 1.5; this.vel[i * 3 + 2] = vz !== undefined ? vz : (Math.random() - 0.5) * 2;
  },
  burst: function (x, y, z, n, kind) { for (var k = 0; k < n; k++) this.emit(x, y, z, kind, (Math.random() - 0.5) * 8, 2 + Math.random() * 5, (Math.random() - 0.5) * 8); },
  update: function (dt, wind) {
    var M = this.max;
    for (var i = 0; i < M; i++) {
      if (this.life[i] <= 0) { if (this.col[i * 4 + 3] !== 0) this.col[i * 4 + 3] = 0; continue; }
      this.age[i] += dt; this.life[i] -= dt;
      var k = this.kind[i];
      this.vel[i * 3 + 1] += (k ? 0.3 : -6) * dt;
      this.pos[i * 3] += (this.vel[i * 3] + wind[0] * (k ? 0.8 : 0.2)) * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += (this.vel[i * 3 + 2] + wind[1] * (k ? 0.8 : 0.2)) * dt;
      if (k) this.siz[i] += dt * (k === 1 ? 2.5 : 1.2);
      this.col[i * 4 + 3] *= Math.max(0, 1 - dt * (k ? 0.6 : 1.2));
    }
    var g = this.pts.geometry; g.attributes.position.needsUpdate = true; g.attributes.color.needsUpdate = true; g.attributes.size.needsUpdate = true;
  }
};
