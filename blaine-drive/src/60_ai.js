// ============================================================================================
// 60 TRAFFIC — lane-graph AI (IDM car following), signals, stop/yield, plows, events, parking
// ============================================================================================
var AI = {
  cars: [], plows: [], meshes: {}, free: {}, hash: new Map(), HC: 24, t: 0, spawnT: 0, nearT: 0, near: [], nearW: [], nearSum: 0,
  target: 140, radius: 700, glow: null, nextId: 1, parked: [], parkedMeshes: {}, parkedKey: '', parkHash: new Map(), events: { usacup: false, open3m: false }, density: 1
};
var AI_CAP = { sedan: 70, suv: 64, truck: 52, minivan: 24, semi: 14, box: 14, bus: 12, plow: 8, police: 8, coupe: 8, beater: 10 };
var PAINTS = [[0xf2f2f0, 24], [0x151618, 22], [0x6e7276, 18], [0xb8bcc0, 12], [0x1f3f7a, 9], [0x9a1c1c, 9], [0x2f4f3a, 2], [0x6b4a2e, 2], [0xc9b27a, 1], [0x5b2d6b, 1]];
function pickPaint() { var t = rand() * 100, a = 0; for (var i = 0; i < PAINTS.length; i++) { a += PAINTS[i][1]; if (t < a) return PAINTS[i][0]; } return 0xffffff; }
function initAI(root, mobile) {
  AI.target = mobile ? 55 : 140; AI.radius = mobile ? 480 : 720;
  for (var t in AI_CAP) {
    var cap = mobile ? Math.ceil(AI_CAP[t] * 0.5) : AI_CAP[t];
    var m = buildCarModel(t), mat = new T3.MeshLambertMaterial({ vertexColors: true });
    var im = new T3.InstancedMesh(m.geo, mat, cap); im.frustumCulled = false; im.castShadow = !mobile;
    for (var i = 0; i < cap; i++) setInst(im, i, 0, -500, 0, 0, 0.001, 0.001, 0.001, 0xffffff);
    im.instanceMatrix.setUsage(T3.DynamicDrawUsage);
    root.add(im); AI.meshes[t] = { mesh: im, model: m, cap: cap }; AI.free[t] = []; for (i = cap - 1; i >= 0; i--) AI.free[t].push(i);
  }
  var n = (mobile ? 200 : 460) * 4 + 64;
  AI.glowPos = new Float32Array(n * 3); AI.glowCol = new Float32Array(n * 3);
  AI.glow = makeGlowPoints(AI.glowPos, AI.glowCol, 1.1); AI.glow.frustumCulled = false; root.add(AI.glow); AI.glowMax = n;
  // parked cars (static instanced, refilled with time of day / events)
  ['sedan', 'suv', 'truck', 'minivan'].forEach(function (t) {
    var cap = mobile ? 1500 : 4200, m = AI.meshes[t].model, im = new T3.InstancedMesh(m.geo, new T3.MeshLambertMaterial({ vertexColors: true }), cap);
    im.instanceColor = new T3.InstancedBufferAttribute(new Float32Array(cap * 3), 3);   // allocate before count drops to 0
    im.frustumCulled = false; im.count = 0; im.userData.cap = cap; root.add(im); AI.parkedMeshes[t] = im;
  });
  NET.edges.forEach(function (e) {
    var cmax = 0;
    for (var k = 1; k < e.pts.length - 1; k++) {
      var a = e.pts[k - 1], b = e.pts[k], c = e.pts[k + 1], ab = Math.hypot(b[0] - a[0], b[1] - a[1]), bc = Math.hypot(c[0] - b[0], c[1] - b[1]), ca = Math.hypot(a[0] - c[0], a[1] - c[1]);
      var cr = Math.abs((b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]));
      cmax = Math.max(cmax, 2 * cr / Math.max(1e-6, ab * bc * ca));
    }
    e.vCurve = cmax > 1e-4 ? Math.sqrt(2.6 / cmax) : 99;
    e.mid = e.pts[Math.floor(e.pts.length / 2)];
  });
}
function edgeDensity(e) {
  var c = e.cls, w = { fwy: 3.0, hwy: 4.2, ramp: 0.7, art: 1.7, col: 0.7, rural: 0.45, local: 0.16, gravel: 0.06, lot: 0.04 }[c] || 0.2;
  if (e.pl.stub) w = 0.2;
  var lanes = e.lanesF + e.lanesB;
  w *= lanes * e.len;
  var ev = eventBoost(e.mid[0], e.mid[1]);
  if (c === 'lot') w *= ev > 1 ? 70 : 1;
  return w * ev;
}
function eventBoost(x, z) {
  var b = 1;
  if (AI.events.usacup) { var d = Math.hypot(x - X(1.95), z - Z(106.3)); if (d < 1300) b *= 1 + 2.4 * (1 - d / 1300); }
  if (AI.events.open3m) { var d2 = Math.hypot(x - X(3.6), z - Z(115)); if (d2 < 1400) b *= 1 + 2.4 * (1 - d2 / 1400); var d3 = Math.hypot(x - X(1.95), z - Z(106.3)); if (d3 < 700) b *= 1.6; }
  return b;
}
function pickType(e) {
  var r = rand();
  if ((e.cls === 'fwy' || e.cls === 'hwy') && r < 0.07) return 'semi';
  if ((e.cls === 'fwy' || e.cls === 'hwy' || e.cls === 'art') && r < 0.12) return 'box';
  if (AI.events.open3m && r < 0.16 && (e.cls === 'art' || e.cls === 'hwy')) return 'bus';
  r = rand();
  if (r < 0.006) return 'police';
  if (r < 0.02) return 'bus';
  if (r < 0.03) return 'coupe';
  if (r < 0.05) return WEATHER.season === 'winter' ? 'beater' : 'sedan';
  if (r < 0.33) return 'sedan';
  if (r < 0.62) return 'suv';
  if (r < 0.83) return 'truck';
  return 'minivan';
}
// ---------------- geometry helpers ----------------
var _lp = {};
function lanePose(e, fwd, lane, s, out) {
  var sp = fwd ? s : e.len - s, at = pointAt(e.pts, e.cum, sp);
  var dx = fwd ? at.dx : -at.dx, dz = fwd ? at.dz : -at.dz, off = laneOffset(e, fwd, lane);
  out.x = at.x - dz * off; out.z = at.z + dx * off; out.dx = dx; out.dz = dz;
  var k = Math.min(e.pts.length - 2, at.i); out.y = e.h[k] + (e.h[k + 1] - e.h[k]) * at.f;
  return out;
}
function endNodeOf(e, fwd) { return NET.nodes[fwd ? e.b : e.a]; }
function startNodeOf(e, fwd) { return NET.nodes[fwd ? e.a : e.b]; }
function lanesOf(e, fwd) { return fwd ? e.lanesF : e.lanesB; }
function openLanes(e, fwd) { var n = lanesOf(e, fwd); return (fwd && e.closed >= 0) ? n - 1 : n; }
function turnAngle(din, dout) { return Math.atan2(din[0] * dout[1] - din[1] * dout[0], din[0] * dout[0] + din[1] * dout[1]); }
function options(e, fwd, car) {
  var n = endNodeOf(e, fwd), din = edgeDirAtNode(e, n.id, false), out = [];
  n.edges.forEach(function (id) {
    var x = NET.edges[id]; if (x.a === x.b) return;
    [true, false].forEach(function (f) {
      if (f && x.a !== n.id) return; if (!f && x.b !== n.id) return;
      if (lanesOf(x, f) === 0) return;
      if (x === e && f !== fwd) return;
      if (x.len < 6) return;
      var dout = edgeDirAtNode(x, n.id, true), ang = turnAngle(din, dout);
      if (Math.abs(ang) > 2.7) return;
      var w = Math.abs(ang) < 0.45 ? 4 : (ang > 0 ? 1.6 : 1.2);
      w *= 0.45 + x.prio * 0.35;
      if (x.cls === 'lot') w *= eventBoost(x.mid[0], x.mid[1]) > 1.2 ? 2.5 : 0.03;
      if (x.cls === 'gravel') w *= 0.3;
      if (x.cls === 'local' && e.prio >= 4) w *= 0.35;
      if (car && car.type === 'plow') w = (x.pl.road && x.pl.road.indexOf('mn65') === 0) ? 1 : 0;
      if (car && car.goal) { var gx = car.goal[0] - n.x, gz = car.goal[1] - n.z, gl = Math.hypot(gx, gz) || 1; w *= 0.15 + 3 * Math.max(0, (dout[0] * gx + dout[1] * gz) / gl); }
      if (w > 0) out.push({ e: x, fwd: f, ang: ang, w: w });
    });
  });
  if (!out.length) { // dead end: turn around
    if (lanesOf(e, !fwd) > 0) out.push({ e: e, fwd: !fwd, ang: 3.1, w: 1 });
  }
  return out;
}
function choose(opts) { var s = 0, i; for (i = 0; i < opts.length; i++) s += opts[i].w; var r = rand() * s; for (i = 0; i < opts.length; i++) { r -= opts[i].w; if (r <= 0) return opts[i]; } return opts[opts.length - 1]; }
function laneFor(e, fwd, turnAng) {
  var n = openLanes(e, fwd); if (n <= 1) return 0;
  if (turnAng > 0.45) return n - 1;
  if (turnAng < -0.45) return 0;
  return Math.floor(rand() * n);
}
// ---------------- spawning ----------------
function refreshNear(px, pz) {
  AI.near = []; AI.nearW = []; var sum = 0, R = AI.radius - 40;
  NET.edges.forEach(function (e) {
    var d = Math.hypot(e.mid[0] - px, e.mid[1] - pz);
    if (d > R + e.len / 2 || d < 60) return;
    if (e.len < 30) return;
    var w = edgeDensity(e); if (w <= 0) return;
    sum += w; AI.near.push(e); AI.nearW.push(sum);
  });
  AI.nearSum = sum;
}
function spawnOne(px, pz, camF) {
  if (!AI.near.length) return;
  var r = rand() * AI.nearSum, lo = 0, hi = AI.near.length - 1;
  while (lo < hi) { var m = (lo + hi) >> 1; if (AI.nearW[m] < r) lo = m + 1; else hi = m; }
  var e = AI.near[lo], fwd = e.lanesB === 0 ? true : rand() < 0.5;
  var rs = startNodeOf(e, fwd).r, re = endNodeOf(e, fwd).r;
  var s = rr(rs + 4, e.len - re - 6); if (!(s > 0)) return;
  var type = pickType(e); if (!AI.free[type].length) type = 'sedan'; if (!AI.free[type].length) return;
  var lane = Math.floor(rand() * Math.max(1, openLanes(e, fwd)));
  lanePose(e, fwd, lane, s, _lp);
  var d = Math.hypot(_lp.x - px, _lp.z - pz);
  if (d < 140 || d > AI.radius - 30) return;
  if (camF && d < 320 && ((_lp.x - px) * camF[0] + (_lp.z - pz) * camF[1]) > 0.35 * d) return;   // don't pop into view close ahead
  var clash = false; AI.nearby(_lp.x, _lp.z, 14, function () { clash = true; }); if (clash) return;
  var car = makeAICar(type, e, fwd, lane, s);
  car.v = Math.min(e.speed, e.vCurve) * rr(0.75, 1.0);
  if (AI.events.open3m && type === 'bus') car.goal = rand() < 0.5 ? [X(3.6), Z(115.2)] : [X(1.95), Z(105.4)];
  else if ((AI.events.usacup || AI.events.open3m) && rand() < 0.5) { var ev = AI.events.usacup && (!AI.events.open3m || rand() < 0.5) ? [X(1.9), Z(105.5)] : [X(3.6), Z(115.4)]; if (Math.hypot(ev[0] - _lp.x, ev[1] - _lp.z) < 1600) car.goal = ev; }
}
function makeAICar(type, e, fwd, lane, s) {
  var T = CARTYPES[type], slot = AI.free[type].pop();
  var car = {
    id: AI.nextId++, type: type, slot: slot, e: e, fwd: fwd, lane: lane, s: s, v: 0, len: T.L, wid: T.W,
    col: type === 'police' ? 0xffffff : (type === 'bus' ? (rand() < 0.6 ? 0xf2b705 : 0xf2f2f0) : (type === 'plow' ? 0xf06a14 : (type === 'semi' || type === 'box' ? pick([0xf2f2f0, 0x1f3f7a, 0x9a1c1c, 0x2d2d2d]) : pickPaint()))),
    drv: rr(0.9, 1.1), aMax: (type === 'semi' || type === 'box' || type === 'bus' || type === 'plow') ? 0.9 : rr(1.3, 2.0), T: rr(1.1, 1.6),
    conn: null, plan: null, brake: false, stopT: 0, stopped: false, stuck: 0, crash: 0, hv: [0, 0], x: 0, z: 0, y: 0, yaw: 0, dx: 1, dz: 0, blink: 0
  };
  lanePose(e, fwd, lane, s, _lp); car.x = _lp.x; car.z = _lp.z; car.y = _lp.y; car.dx = _lp.dx; car.dz = _lp.dz; car.yaw = yawOf(_lp.dx, _lp.dz);
  setInst(AI.meshes[type].mesh, slot, car.x, car.y, car.z, car.yaw, 1, 1, 1, car.col);
  AI.meshes[type].mesh.instanceColor.needsUpdate = true;
  car.plan = options(e, fwd, car).length ? choose(options(e, fwd, car)) : null;
  AI.cars.push(car);
  return car;
}
function removeAICar(car) {
  var M = AI.meshes[car.type]; setInst(M.mesh, car.slot, 0, -500, 0, 0, 0.001, 0.001, 0.001); AI.free[car.type].push(car.slot);
  var i = AI.cars.indexOf(car); if (i >= 0) AI.cars.splice(i, 1);
  var j = AI.plows.indexOf(car); if (j >= 0) AI.plows.splice(j, 1);
}
AI.clear = function () { while (AI.cars.length) removeAICar(AI.cars[0]); AI.plows = []; };
// ---------------- spatial hash of all moving vehicles ----------------
AI.rehash = function (playerObj) {
  var H = AI.hash, C = AI.HC; H.clear();
  function put(o) { var k = Math.floor(o.x / C) * 65536 + Math.floor(o.z / C), l = H.get(k); if (!l) H.set(k, l = []); l.push(o); }
  for (var i = 0; i < AI.cars.length; i++) put(AI.cars[i]);
  if (playerObj) put(playerObj);
};
AI.nearby = function (x, z, r, fn) {
  var C = AI.HC, i0 = Math.floor((x - r) / C), i1 = Math.floor((x + r) / C), j0 = Math.floor((z - r) / C), j1 = Math.floor((z + r) / C);
  for (var i = i0; i <= i1; i++) for (var j = j0; j <= j1; j++) { var l = AI.hash.get(i * 65536 + j); if (!l) continue; for (var q = 0; q < l.length; q++) { var o = l[q]; if ((o.x - x) * (o.x - x) + (o.z - z) * (o.z - z) <= r * r) fn(o); } }
};
AI.hit = function (car, dvx, dvz) {
  if (!car || car.isPlayer) return;
  car.crash = Math.max(car.crash, 0.01); car.hv[0] += dvx; car.hv[1] += dvz; car.v = 0; car.spin = (rand() - 0.5) * Math.min(2, Math.hypot(dvx, dvz) * 0.3);
};
// ---------------- per-frame update ----------------
var PLAYER_PROXY = { isPlayer: true, x: 0, z: 0, y: 0, yaw: 0, v: 0, len: 4.8, wid: 1.9, dx: 1, dz: 0 };
function updateAI(dt, gameT, weatherK) {
  AI.t += dt;
  var pc = PLAYER.car, px = pc.x, pz = -pc.y;
  PLAYER_PROXY.x = px; PLAYER_PROXY.z = pz; PLAYER_PROXY.y = PLAYER.y; PLAYER_PROXY.yaw = pc.psi; PLAYER_PROXY.v = pc.u; PLAYER_PROXY.len = PLAYER.model.T.L; PLAYER_PROXY.dx = Math.cos(pc.psi); PLAYER_PROXY.dz = -Math.sin(pc.psi);
  AI.rehash(PLAYER_PROXY);
  AI.nearT -= dt; if (AI.nearT <= 0) { AI.nearT = 2.5; refreshNear(px, pz); }
  AI.spawnT -= dt;
  var camF = CAM_FWD;
  var tgt = Math.round(AI.target * AI.density * trafficTimeFactor() * weatherK.density * (AI.events.usacup || AI.events.open3m ? 1.25 : 1));
  if (AI.spawnT <= 0) { AI.spawnT = 0.12; var n = 0; while (AI.cars.length - AI.plows.length < tgt && n++ < 3) spawnOne(px, pz, camF); }
  for (var i = AI.cars.length - 1; i >= 0; i--) {
    var c = AI.cars[i];
    var dp = Math.hypot(c.x - px, c.z - pz);
    if (c.type !== 'plow' && (dp > AI.radius + 60 || (c.crash > 40 && dp > 120) || (c.stuck > 60 && dp > 150) || (AI.cars.length - AI.plows.length > tgt + 15 && dp > AI.radius * 0.8))) { removeAICar(c); continue; }
    stepCar(c, dt, gameT, weatherK);
  }
  updatePlows(dt, gameT);
  writeAIInstances(gameT);
}
function trafficTimeFactor() {
  var h = WEATHER.hour, wk = WEATHER.weekday;
  var am = Math.exp(-Math.pow((h - 7.7) / 1.1, 2)), pm = Math.exp(-Math.pow((h - 16.9) / 1.4, 2)), mid = Math.exp(-Math.pow((h - 12.5) / 3.5, 2));
  var f = 0.14 + (wk ? 0.95 : 0.35) * (am + pm) + 0.55 * mid + 0.25 * Math.exp(-Math.pow((h - 20) / 2, 2));
  return clamp(f, 0.12, 1.15);
}
var _nb = [];
function stepCar(c, dt, gameT, WK) {
  if (c.crash > 0) {
    c.crash += dt; c.x += c.hv[0] * dt; c.z += c.hv[1] * dt; c.yaw += (c.spin || 0) * dt; var f = Math.max(0, 1 - dt * 2.5); c.hv[0] *= f; c.hv[1] *= f; c.spin = (c.spin || 0) * f;
    return;
  }
  var e = c.e, fwd = c.fwd, endN = endNodeOf(e, fwd), rEnd = endN.r, sEnd = e.len - rEnd - 0.6;
  var v0 = Math.min(e.speed * c.drv, e.vCurve) * WK.speed;
  if (c.type === 'plow') v0 = 15.6;
  var gapStop = 1e9;
  // --- intersection control at the end of this edge
  if (!c.conn) {
    var dStop = sEnd - c.s;
    if (dStop < 70 && c.plan) {
      var turn = c.plan.ang;
      var vTurn = Math.abs(turn) < 0.45 ? 99 : (turn > 0 ? 5.5 : 7.5);
      if (c.plan.e.cls === 'lot') vTurn = Math.min(vTurn, 4);
      v0 = Math.min(v0, Math.sqrt(vTurn * vTurn + 2 * 2.2 * Math.max(0, dStop)));
      if (endN.sig) {
        var st = signalState(endN, e, gameT);
        if (st === 'R' || (st === 'Y' && dStop > c.v * c.v / (2 * 3.2) + 1)) gapStop = dStop;
        if (st === 'R' && c.v < 0.2 && dStop < 3 && c.plan && c.plan.ang > 0.45 && endN.prio >= 3 && !endN.sig.term) { /* right on red after stop */ if (!conflictAt(endN, c, e)) gapStop = 1e9; }
      } else if (endN.deg >= 3) {
        var merge = c.plan.e.cls === 'fwy' || (e.cls === 'ramp' && c.plan.e.cls !== 'ramp' && e.pl.group === 'fwy');
        var minor = endN.prio > e.prio + 0.5 && !merge;
        var allway = endN.prio === e.prio && e.prio <= 2;
        if (minor || allway) {
          if (!c.stopped) { gapStop = dStop; if (dStop < 2.5 && c.v < 0.4) { c.stopT += dt; if (c.stopT > (minor ? 0.8 : 0.4)) c.stopped = true; } }
          else if (conflictAt(endN, c, e) || (endN.resv > AI.t && endN.resvBy !== c.id)) gapStop = dStop;
          else { endN.resv = AI.t + 2.5; endN.resvBy = c.id; }
        }
      }
    }
  }
  // --- leader (any vehicle ahead in our corridor)
  var lead = 1e9, lv = 0, rx = -c.dz, rz = c.dx, look = 18 + c.v * 2.2;
  AI.nearby(c.x + c.dx * look * 0.5, c.z + c.dz * look * 0.5, look * 0.5 + 8, function (o) {
    if (o === c) return;
    if (Math.abs(o.y - c.y) > 3) return;
    var ex = o.x - c.x, ez = o.z - c.z, ah = ex * c.dx + ez * c.dz; if (ah <= 0.5) return;
    var lat = Math.abs(ex * rx + ez * rz), hd = o.dx * c.dx + o.dz * c.dz;
    var tol = 1.55 + (c.conn ? 0.7 : 0) + ah * 0.012 + (o.isPlayer ? 0.35 : 0);
    if (lat > tol) return;
    if (hd < -0.6 && !c.conn) return;
    var g = ah - (c.len + (o.len || 4.8)) / 2;
    if (hd < 0.5 && !(c.conn || o.conn) && !o.isPlayer && ah > 12) return;
    if (g < lead) { lead = g; lv = (o.v || 0) * Math.max(0, hd); }
  });
  // --- IDM
  var s0 = 2.4, T = c.T * WK.headway, a = c.aMax * WK.accel, b = 2.4 * WK.brake;
  var acc = a * (1 - Math.pow(c.v / Math.max(v0, 0.5), 4));
  function obst(g, dv) { var ss = s0 + Math.max(0, c.v * T + c.v * dv / (2 * Math.sqrt(a * b))); return -a * (ss / Math.max(g, 0.2)) * (ss / Math.max(g, 0.2)); }
  if (lead < 120) acc += obst(lead, c.v - lv);
  if (gapStop < 120) acc = Math.min(acc, a * (1 - Math.pow(c.v / Math.max(v0, 0.5), 4)) + obst(gapStop, c.v));
  acc = clamp(acc, -8, a);
  c.brake = acc < -0.6;
  c.v = Math.max(0, c.v + acc * dt);
  if (c.v < 0.1) c.stuck += dt; else c.stuck = 0;
  if (c.stuck > 12 && lead < 6) { c.v = Math.max(c.v, 1.2); } // creep to break rare deadlocks
  // --- advance
  var ds = c.v * dt;
  if (c.conn) {
    c.conn.u += ds / c.conn.len;
    if (c.conn.u >= 1) { var nx = c.conn.to; c.conn = null; c.e = nx.e; c.fwd = nx.fwd; c.lane = nx.lane; c.s = startNodeOf(nx.e, nx.fwd).r + 0.6; c.plan = nx.plan; c.stopped = false; c.stopT = 0; }
  } else {
    c.s += ds;
    if (c.s >= sEnd) {
      if (!c.plan) { var op = options(e, fwd, c); if (!op.length) { c.crash = 50; return; } c.plan = choose(op); }
      var P = c.plan, nopt = options(P.e, P.fwd, c), nplan = nopt.length ? choose(nopt) : null;
      var lane = laneFor(P.e, P.fwd, nplan ? nplan.ang : 0);
      if (P.e.cls === 'fwy' && e.cls === 'ramp') lane = openLanes(P.e, P.fwd) - 1;
      if (P.e.cls === 'ramp' && e.cls === 'fwy') lane = 0;
      var a0 = lanePose(e, fwd, c.lane, sEnd, {}), a1 = lanePose(P.e, P.fwd, lane, startNodeOf(P.e, P.fwd).r + 0.6, {});
      var d01 = Math.hypot(a1.x - a0.x, a1.z - a0.z), k = d01 * 0.42;
      c.conn = { p0: [a0.x, a0.y, a0.z], p1: [a0.x + a0.dx * k, a0.y, a0.z + a0.dz * k], p2: [a1.x - a1.dx * k, a1.y, a1.z - a1.dz * k], p3: [a1.x, a1.y, a1.z], len: Math.max(0.5, d01 * (1 + 0.12 * Math.abs(P.ang))), u: 0, to: { e: P.e, fwd: P.fwd, lane: lane, plan: nplan } };
      if (P.e === e && P.fwd !== fwd) c.conn.len = Math.max(c.conn.len, 12);
    }
  }
  // --- pose
  if (c.conn) {
    var C = c.conn, u = clamp(C.u, 0, 1), iu = 1 - u, b0 = iu * iu * iu, b1 = 3 * iu * iu * u, b2 = 3 * iu * u * u, b3 = u * u * u;
    c.x = b0 * C.p0[0] + b1 * C.p1[0] + b2 * C.p2[0] + b3 * C.p3[0]; c.y = b0 * C.p0[1] + b1 * C.p1[1] + b2 * C.p2[1] + b3 * C.p3[1]; c.z = b0 * C.p0[2] + b1 * C.p1[2] + b2 * C.p2[2] + b3 * C.p3[2];
    var tx = 3 * iu * iu * (C.p1[0] - C.p0[0]) + 6 * iu * u * (C.p2[0] - C.p1[0]) + 3 * u * u * (C.p3[0] - C.p2[0]), tz = 3 * iu * iu * (C.p1[2] - C.p0[2]) + 6 * iu * u * (C.p2[2] - C.p1[2]) + 3 * u * u * (C.p3[2] - C.p2[2]), tl = Math.hypot(tx, tz) || 1;
    c.dx = tx / tl; c.dz = tz / tl;
  } else {
    lanePose(c.e, c.fwd, c.lane, clamp(c.s, 0, c.e.len), _lp); c.x = _lp.x; c.z = _lp.z; c.y = _lp.y; c.dx = _lp.dx; c.dz = _lp.dz;
  }
  c.yaw = yawOf(c.dx, c.dz);
}
function conflictAt(n, me, myEdge) {
  var busy = false, R = n.r + 48;
  AI.nearby(n.x, n.z, R, function (o) {
    if (o === me || busy) return;
    var dx = n.x - o.x, dz = n.z - o.z, d = Math.hypot(dx, dz);
    if (d < n.r + 1.5) { busy = true; return; }
    var v = o.isPlayer ? Math.abs(o.v) : o.v; if (v < 1.2) return;
    var toward = (o.dx * dx + o.dz * dz) / (d || 1); if (toward < 0.75) return;
    if (!o.isPlayer && o.e === myEdge) return;
    if (d / v < 4.8) busy = true;
  });
  return busy;
}
var CAM_FWD = [1, 0];
function writeAIInstances(gameT) {
  var gp = AI.glowPos, gc = AI.glowCol, gi = 0, night = LIGHT_STATE.aiLights, flash = (AI.t * 2.2) % 1 < 0.5;
  for (var t in AI.meshes) AI.meshes[t].dirty = false;
  for (var i = 0; i < AI.cars.length; i++) {
    var c = AI.cars[i], M = AI.meshes[c.type];
    setInst(M.mesh, c.slot, c.x, c.y + 0.05, c.z, c.yaw, 1, 1, 1); M.dirty = true;
    if (gi > AI.glowMax - 8) continue;
    var L = M.model.lights, cs = Math.cos(c.yaw), sn = Math.sin(c.yaw);
    function put(p, r, g, b) { gp[gi * 3] = c.x + p[0] * cs + p[2] * sn; gp[gi * 3 + 1] = c.y + p[1] + 0.05; gp[gi * 3 + 2] = c.z - p[0] * sn + p[2] * cs; gc[gi * 3] = r; gc[gi * 3 + 1] = g; gc[gi * 3 + 2] = b; gi++; }
    if (night) { put(L.head[0], 1, 0.95, 0.82); put(L.head[1], 1, 0.95, 0.82); }
    var tb = c.brake ? 1.0 : (night ? 0.45 : 0), hz = c.crash > 0 && flash;
    if (tb > 0 || hz) { put(L.tail[0], hz ? 1 : tb, hz ? 0.55 : 0.05 * tb, 0.02); put(L.tail[1], hz ? 1 : tb, hz ? 0.55 : 0.05 * tb, 0.02); }
    if (L.beacon) { var on = (AI.t * 3 + c.id) % 1 < 0.45; L.beacon.forEach(function (p, k) { if ((k % 2 === 0) === on) put(p, 1, 0.6, 0.05); }); }
    if (c.type === 'police' && (AI.events.usacup || AI.events.open3m || c.crash > 0)) { put([-0.3, CARTYPES.police.H + 0.1, flash ? -0.35 : 0.35], flash ? 1 : 0.1, 0.1, flash ? 0.1 : 1); }
  }
  // flashing police at event entrances
  EVENT_POLICE.forEach(function (p) { if (!AI.events[p.ev]) return; gp.set([p.x, 1.7, p.z], gi * 3); gc.set(flash ? [1, 0.1, 0.1] : [0.1, 0.2, 1], gi * 3); gi++; });
  for (var k = gi; k < AI.glowMax; k++) { gc[k * 3] = gc[k * 3 + 1] = gc[k * 3 + 2] = 0; }
  AI.glow.geometry.attributes.position.needsUpdate = true; AI.glow.geometry.attributes.color.needsUpdate = true;
  AI.glow.geometry.setDrawRange(0, Math.max(gi, 1));
  for (t in AI.meshes) if (AI.meshes[t].dirty || AI.meshes[t].wasDirty) { AI.meshes[t].mesh.instanceMatrix.needsUpdate = true; AI.meshes[t].wasDirty = AI.meshes[t].dirty; }
}
// ---------------- snow plows on Hwy 65 (tandem/echelon plowing) ----------------
function mn65Edges(dir) { return NET.edges.filter(function (e) { return e.pl.road && e.pl.road.indexOf('mn65') === 0 && e.dir === dir && !e.lanesB; }); }
function ensurePlows(active) {
  if (!active) { while (AI.plows.length) removeAICar(AI.plows[0]); return; }
  if (AI.plows.length) return;
  ['NB', 'SB'].forEach(function (dir) {
    var es = mn65Edges(dir); if (!es.length) return;
    // two convoys per direction, spread along the corridor
    [0.2, 0.7].forEach(function (frac) {
      var e = es[Math.floor(frac * es.length)];
      [0, 1].forEach(function (k) {
        if (!AI.free.plow.length) return;
        var lanes = openLanes(e, true), lane = Math.max(0, lanes - 1 - k);
        var s = clamp(e.len * 0.5 - k * 28, 2, e.len - 2);
        var p = makeAICar('plow', e, true, lane, s); p.v = 14; p.echelon = k; p.lastB = -1;
        AI.plows.push(p);
      });
    });
  });
}
function updatePlows(dt, gameT) {
  for (var i = 0; i < AI.plows.length; i++) {
    var p = AI.plows[i]; if (p.conn || p.crash > 0) { if (p.crash > 12) { p.crash = 0; p.hv = [0, 0]; } continue; }
    var e = p.e, b = Math.floor(p.s / 10);
    if (b !== p.lastB) {
      p.lastB = b;
      var t = WEATHER.gameMin, s0 = Math.max(0, p.s - 12), s1 = Math.min(e.len, p.s + 4);
      for (var q = Math.floor(s0 / 10); q <= Math.floor(s1 / 10) && q < e.plow.length; q++) e.plow[q] = t;
      updatePlowAttr(e.id, s0, s1, t);
    }
    var endN = endNodeOf(e, true);
    if (endN.deg === 1 && p.s > e.len - endN.r - 4) {   // end of corridor: start another pass from the other end
      var es = mn65Edges(e.dir), first = es.filter(function (x) { return NET.nodes[x.a].deg === 1; })[0];
      if (first) { p.e = first; p.s = 3 + p.echelon * 28; p.lane = Math.max(0, openLanes(first, true) - 1 - p.echelon); p.plan = null; p.lastB = -1; }
    }
    var dp = Math.hypot(p.x - PLAYER.car.x, p.z + PLAYER.car.y);
    if (dp < 220 && p.v > 3 && Math.random() < dt * 25) PARTS.emit(p.x - p.dx * 5, p.y + 1.1, p.z - p.dz * 5, 'salt', -p.dx * 3 + (Math.random() - 0.5) * 6, 1, -p.dz * 3 + (Math.random() - 0.5) * 6);
    if (dp < 220 && p.v > 3 && WEATHER.roadSnowHwy > 0.1 && Math.random() < dt * 40) PARTS.emit(p.x + p.dx * 5.3 - p.dz * 1.8, p.y + 0.6, p.z + p.dz * 5.3 + p.dx * 1.8, 'snow', -p.dz * 6, 2.5, p.dx * 6);
  }
}
// ---------------- parked cars ----------------
var EVENT_POLICE = [{ x: 1500, z: Z(105) - 8, ev: 'usacup' }, { x: 1850, z: Z(105) - 8, ev: 'usacup' }, { x: X(3.4), z: Z(114.3), ev: 'open3m' }, { x: X(3.47), z: Z(119.1), ev: 'open3m' }];
function refillParking(force) {
  var h = WEATHER.hour, wk = WEATHER.weekday, day = h > 7 && h < 21, key = Math.floor(h) + ':' + AI.events.usacup + ':' + AI.events.open3m;
  if (!force && key === AI.parkedKey) return; AI.parkedKey = key;
  var fill = {
    home: day ? (wk ? 0.35 : 0.6) : 0.85, retail: h > 9 && h < 21 ? 0.55 : 0.08, mall: h > 10 && h < 21 ? 0.5 : 0.04,
    nsc: AI.events.usacup ? 0.97 : (AI.events.open3m ? 0.85 : (h > 16 && h < 22 ? 0.35 : 0.12)), tpc: AI.events.open3m ? 0.97 : (day ? 0.35 : 0.02), tpc3m: AI.events.open3m ? 0.95 : 0,
    curling: h > 17 && h < 23 ? 0.6 : 0.12, cityhall: wk && day ? 0.6 : 0.05
  };
  var counts = { sedan: 0, suv: 0, truck: 0, minivan: 0 }, types = ['sedan', 'suv', 'suv', 'truck', 'sedan', 'minivan', 'truck'];
  AI.parked = [];
  var PH = AI.parkHash; PH.clear();
  for (var i = 0; i < SLOTS.length; i++) {
    var s = SLOTS[i], f = fill[s.venue] || 0.4;
    if (hash2(i * 7 + 3, i * 13 + 1) > f) continue;
    var t = types[Math.floor(hash2(i, 91) * types.length)], im = AI.parkedMeshes[t];
    if (counts[t] >= im.userData.cap) continue;
    var yaw = s.rot + (hash2(i, 5) - 0.5) * 0.08, col = PAINTS[Math.floor(hash2(i, 17) * PAINTS.length)][0];
    setInst(im, counts[t], s.x, groundH(s.x, s.z) + 0.02, s.z, yaw, 1, 1, 1, col);
    counts[t]++;
    var o = { x: s.x, z: s.z, yaw: yaw, type: t };
    AI.parked.push(o);
    var k = Math.floor(s.x / 20) * 65536 + Math.floor(s.z / 20), l = PH.get(k); if (!l) PH.set(k, l = []); l.push(o);
  }
  for (t in counts) { var m = AI.parkedMeshes[t]; m.count = counts[t]; m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true; }
}
function collideParked(pl) {
  var car = pl.car, T = pl.model.T, ob = carOBB(car, T.L, T.W), ci = Math.floor(ob.x / 20), cj = Math.floor(ob.z / 20);
  if (pl.y > 3) return;
  for (var di = -1; di <= 1; di++) for (var dj = -1; dj <= 1; dj++) {
    var l = AI.parkHash.get((ci + di) * 65536 + cj + dj); if (!l) continue;
    for (var q = 0; q < l.length; q++) {
      var o = l[q], ct = CARTYPES[o.type];
      var h = obbObb(ob, { x: o.x, z: o.z, hw: ct.L / 2, hd: ct.W / 2, c: Math.cos(o.yaw), s: Math.sin(o.yaw) });
      if (h) resolveHit(pl, h, 1e9, 0.2);
    }
  }
}
