/* BDValidate — headless physics regression suite. Depends only on BDPhysics.
   Every vehicle archetype must land inside published-class tolerances BEFORE any visual tuning.
   Runs in a Web Worker at boot (results gate the Drive button) and in Node (blaine-drive/validate.mjs, CI). */
var BDValidate = (function (P) {
  'use strict';
  var G = P.G, DT = P.DT, MPH = P.MPH, FT = 0.3048, clamp = P.clamp;

  // Tolerance bands: class-representative road-test figures (mid-size sedan, full-size V8 pickup,
  // V8 pony coupe, 2000s FWD sedan on worn tyres). Lap baselines are regression anchors (+/-3%).
  var TARGETS = {
    sedan:  { z60: [7.0, 8.6], top: [124, 136], b60: [112, 138], skid: [0.79, 0.90], K: [1.2, 5.5], coast: [13, 24], },
    truck:  { z60: [5.6, 7.4], top: [100, 112], b60: [122, 152], skid: [0.70, 0.82], K: [1.5, 7.0], coast: [9, 18], },
    coupe:  { z60: [4.1, 5.2], top: [148, 160], b60: [98, 118], skid: [0.90, 1.03], K: [-0.5, 2.5], coast: [13, 24], },
    beater: { z60: [8.8, 11.8], top: [102, 112], b60: [128, 172], skid: [0.66, 0.80], K: [1.5, 7.0], coast: [12, 24], lap: 0 }
  };
  var LAP_BASELINE = { sedan: 91.85, truck: 93.69, coupe: 79.86, beater: 94.24 };
  var LAP_TOL = 0.03;

  function mk(id, opts) {
    var c = new P.Car(P.VEHICLES[id], opts || {});
    c.setAllSurfaces(P.SURFACES.dry);
    return c;
  }
  function run(car, secs, fn) { // fn(t) -> input object or false to stop
    var n = Math.round(secs / DT);
    for (var k = 0; k < n; k++) {
      var inp = fn(car.t);
      if (inp === false) return false;
      if (inp) { car.input.throttle = inp.throttle || 0; car.input.brake = inp.brake || 0; car.input.steer = inp.steer || 0; car.input.handbrake = inp.handbrake || 0; }
      car.substep(DT);
      if (!isFinite(car.u) || !isFinite(car.x) || !isFinite(car.r)) throw new Error('non-finite state');
    }
    return true;
  }

  // ---------- straight-line tests ----------
  function accelTop(id) {
    var c = mk(id), t60 = null, vmax = 0, tq = null, lastGain = 0, best = 0;
    run(c, 170, function (t) {
      var v = c.u;
      if (t60 === null && v >= 60 * MPH) t60 = t;
      if (tq === null && c.odo >= 402.34) tq = t;
      if (v > best + 0.02) { best = v; lastGain = t; }
      if (t > 20 && t - lastGain > 6) return false;
      return { throttle: 1 };
    });
    return { z60: t60, top: best / MPH, qmile: tq };
  }
  function brake(id, v0, surf, opts, mode) {
    var c = mk(id, opts);
    c.setAllSurfaces(surf);
    c.reset(0, 0, 0, v0);
    var x0 = c.x, b = mode === 'threshold' ? 0.6 : 1;
    run(c, 40, function () {
      if (c.u < 0.05) return false;
      if (mode === 'threshold') {
        var km = Math.min(c.w[0].kappa, c.w[1].kappa, c.w[2].kappa, c.w[3].kappa);
        b = clamp(b + DT * (km > -0.10 ? 3 : -7), 0.15, 1);
      }
      return { brake: b };
    });
    return (c.x - x0);
  }
  function coast(id) {
    var c = mk(id); c.reset(0, 0, 0, 60 * MPH); c.gear = 0;
    var t50 = null;
    run(c, 60, function (t) { if (c.u <= 50 * MPH) { t50 = t; return false; } return {}; });
    return t50;
  }
  function standstill(id) {
    var c = mk(id); c.reset(0, 0, 0, 0);
    run(c, 5, function () { return { brake: 0.4 }; });
    var held = Math.abs(c.x) + Math.abs(c.y);
    var c2 = mk(id); c2.reset(0, 0, 0, 0);
    run(c2, 12, function () { return {}; });
    return { drift: held, creep: c2.u, yaw: Math.abs(c.r) + Math.abs(c2.r) };
  }

  // ---------- path following ----------
  function purePursuit(c, px, py) {
    var ca = Math.cos(c.psi), sa = Math.sin(c.psi);
    var rx = c.x - c.b * ca, ry = c.y - c.b * sa;          // rear axle
    var dx = px - rx, dy = py - ry;
    var lx = dx * ca + dy * sa, ly = -dx * sa + dy * ca;
    var Ld = Math.sqrt(lx * lx + ly * ly);
    return Math.atan(2 * c.spec.wheelbase * ly / (Ld * Ld));
  }
  function circleDriver(c, R, lookK) {
    var ie = 0;
    return function () {
      var th = Math.atan2(c.y, c.x), Ld = Math.max(6, lookK * Math.abs(c.u) + 4);
      var a = th + Ld / R, e = Math.sqrt(c.x * c.x + c.y * c.y) - R;
      ie = clamp(ie + e * DT, -4, 4);
      return purePursuit(c, R * Math.cos(a), R * Math.sin(a)) + 0.012 * e + 0.02 * ie;
    };
  }
  function speedCtl() {
    var integ = 0;
    return function (c, vt) {
      var e = vt - c.u; integ = clamp(integ + e * DT, -2, 4);
      var th = clamp(0.35 * e + 0.25 * integ + 0.08, 0, 1);
      return { throttle: e > -0.5 ? th : 0, brake: e < -0.8 ? clamp(-e * 0.25, 0, 0.8) : 0 };
    };
  }
  function onCircle(c, R, v) {
    c.reset(R, 0, Math.PI / 2, v);
    c.r = v / R;
    for (var i = 0; i < 4; i++) c.w[i].omega = v / c.spec.tire.r;
  }
  function skidpad(id, opts) {
    var R = 30.48, c = mk(id, opts), steer = circleDriver(c, R, 0.3), sc = speedCtl();
    onCircle(c, R, 8);
    var vt = 8, best = 0, win = [], next = 0;
    run(c, 90, function (t) {
      if (t > 3) vt += 0.18 * DT;
      var d = Math.sqrt(c.x * c.x + c.y * c.y), e = d - R;
      if (t >= next) {
        next += 0.25;
        win.push({ ay: c.u * c.r, e: e }); if (win.length > 8) win.shift();
        if (win.length === 8) {
          var ok = true, s = 0; for (var k = 0; k < 8; k++) { if (Math.abs(win[k].e) > 0.75) ok = false; s += win[k].ay; }
          if (ok) best = Math.max(best, s / 8);
        }
        if (Math.abs(e) > 3 || Math.abs(c.beta()) > 0.35) return false;
      }
      var s2 = sc(c, vt); s2.steer = steer(); return s2;
    });
    return best / G;
  }
  function understeer(id) {
    var R = 50, c = mk(id), steer = circleDriver(c, R, 0.3), sc = speedCtl();
    var pts = [];
    onCircle(c, R, 5);
    var levels = [0.06, 0.12, 0.18, 0.24, 0.30, 0.36, 0.42];
    for (var li = 0; li < levels.length; li++) {
      var vt = Math.sqrt(levels[li] * G * R), acc = { d: 0, ay: 0, k: 0, n: 0 };
      var t0 = c.t;
      run(c, 4.5, function (t) {
        if (t - t0 > 3) { acc.d += c.steerAngle; acc.ay += c.u * c.r; acc.k += c.r / Math.max(c.u, 0.1); acc.n++; }
        var s = sc(c, vt); s.steer = steer(); return s;
      });
      var dm = acc.d / acc.n, aym = acc.ay / acc.n, km = acc.k / acc.n;
      pts.push([aym / G, (dm - c.spec.wheelbase * km) * 180 / Math.PI]);
    }
    var n = pts.length, sx = 0, sy = 0, sxx = 0, sxy = 0;
    pts.forEach(function (p) { sx += p[0]; sy += p[1]; sxx += p[0] * p[0]; sxy += p[0] * p[1]; });
    return (n * sxy - sx * sy) / (n * sxx - sx * sx);
  }
  function powerOn(id, skidG) {
    var R = 30.48, c = mk(id, { aids: { tc: false, esc: false } }), steer = circleDriver(c, R, 0.3), sc = speedCtl();
    var v0 = Math.sqrt(0.55 * skidG * G * R);
    onCircle(c, R, v0);
    run(c, 5, function () { var s = sc(c, v0); s.steer = steer(); return s; });
    var d0 = c.steerAngle, k0 = c.r / c.u, bmax = 0;
    run(c, 2.0, function () { bmax = Math.max(bmax, Math.abs(c.beta())); return { throttle: 1, steer: d0 }; });
    return { beta: bmax * 180 / Math.PI, curv: (c.r / Math.max(c.u, 0.1)) / k0 };
  }
  function sineDwell(id) {
    var c = mk(id), v = 80 / 3.6;
    c.reset(0, 0, 0, v);
    var R03 = v * v / (0.3 * G), A = 3.5 * (c.spec.wheelbase / R03 + 0.035 * 0.3), f = 0.7, sc = speedCtl();
    var T = 1 / f, rPk = 0, cos = 0.75 * T + 0.5 + 0.25 * T, samples = {};
    run(c, cos + 2.2, function (t) {
      var d;
      if (t < 0.75 * T) d = A * Math.sin(2 * Math.PI * f * t);
      else if (t < 0.75 * T + 0.5) d = -A;
      else if (t < cos) d = A * Math.sin(2 * Math.PI * f * (t - 0.5));
      else d = 0;
      if (t > 0.5 * T && t < cos) rPk = Math.max(rPk, Math.abs(c.r));
      if (samples.a === undefined && t >= cos + 1.0) samples.a = Math.abs(c.r);
      if (samples.b === undefined && t >= cos + 1.75) samples.b = Math.abs(c.r);
      return { throttle: c.u < v ? 0.2 : 0, steer: d };
    });
    return { r1: samples.a / rPk, r175: samples.b / rPk, beta: Math.abs(c.beta()) * 180 / Math.PI };
  }
  // open-loop: 0.2 s steering pulse at 80% of top speed, then hands-off. Yaw must decay by itself.
  function pulse(id) {
    var c = mk(id), v = 0.8 * c.spec.governor, rPk = 0, r2 = null;
    c.reset(0, 0, 0, v);
    var A = 0.35 * Math.PI / 180;
    run(c, 3.2, function (t) {
      rPk = Math.max(rPk, Math.abs(c.r));
      if (r2 === null && t >= 2.2) r2 = Math.abs(c.r);
      return { throttle: 0.35, steer: t < 0.2 ? A : 0 };
    });
    return { ratio: r2 / rPk, beta: Math.abs(c.beta()) * 180 / Math.PI };
  }
  function tractionSnow(id, opts) {
    var c = mk(id, opts); c.setAllSurfaces(P.SURFACES.snow);
    var t30 = 99;
    run(c, 40, function (t) { if (c.u >= 30 * MPH) { t30 = t; return false; } return { throttle: 1 }; });
    return t30;
  }

  // ---------- lap regression: fixed handling circuit ----------
  var CIRCUIT = null;
  function circuit() {
    if (CIRCUIT) return CIRCUIT;
    var wp = [[0, 0], [420, 0], [520, 40], [560, 140], [520, 240], [430, 260], [380, 220], [330, 250], [280, 220], [230, 250],
      [120, 330], [20, 330], [-60, 280], [-80, 200], [-40, 120], [-90, 60], [-60, 10]];
    var pts = [], n = wp.length;
    for (var i = 0; i < n; i++) {
      var p0 = wp[(i - 1 + n) % n], p1 = wp[i], p2 = wp[(i + 1) % n], p3 = wp[(i + 2) % n];
      for (var s = 0; s < 1; s += 0.02) {
        var s2 = s * s, s3 = s2 * s;
        pts.push([0.5 * ((2 * p1[0]) + (-p0[0] + p2[0]) * s + (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * s2 + (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * s3),
          0.5 * ((2 * p1[1]) + (-p0[1] + p2[1]) * s + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * s2 + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * s3)]);
      }
    }
    // resample at exactly 2 m arc length (closed loop, no duplicate seam point)
    var cum = [0], k2;
    for (k2 = 1; k2 <= pts.length; k2++) { var pa = pts[k2 - 1], pb = pts[k2 % pts.length]; cum.push(cum[k2 - 1] + Math.hypot(pb[0] - pa[0], pb[1] - pa[1])); }
    var total = cum[cum.length - 1], nOut = Math.floor(total / 2), out = [], seg = 0;
    for (var q = 0; q < nOut; q++) {
      var sd = q * total / nOut;
      while (cum[seg + 1] < sd) seg++;
      var f = (sd - cum[seg]) / Math.max(1e-9, cum[seg + 1] - cum[seg]), A0 = pts[seg], B0 = pts[(seg + 1) % pts.length];
      out.push([A0[0] + (B0[0] - A0[0]) * f, A0[1] + (B0[1] - A0[1]) * f]);
    }
    var m = out.length, curv = [];
    for (i = 0; i < m; i++) {
      var A = out[(i - 3 + m) % m], B = out[i], C = out[(i + 3) % m];
      var ab = Math.hypot(B[0] - A[0], B[1] - A[1]), bc = Math.hypot(C[0] - B[0], C[1] - B[1]), ca = Math.hypot(A[0] - C[0], A[1] - C[1]);
      var cr = Math.abs((B[0] - A[0]) * (C[1] - A[1]) - (B[1] - A[1]) * (C[0] - A[0]));
      curv.push(2 * cr / Math.max(1e-6, ab * bc * ca));
    }
    CIRCUIT = { pts: out, curv: curv, len: total };
    return CIRCUIT;
  }
  function lap(id, skidG) {
    var C = circuit(), c = mk(id), sc = speedCtl(), n = C.pts.length;
    // g-g aware speed plan: corner speed from lateral grip, braking only with the grip left over
    var muLat = skidG * 0.80 * G, dec = 0.62 * G * skidG, vmax = 60;
    var vt = [];
    for (var i = 0; i < n; i++) vt.push(Math.min(vmax, Math.sqrt(muLat / Math.max(C.curv[i], 1e-4))));
    for (var pass = 0; pass < 2; pass++) for (i = 2 * n - 1; i >= 0; i--) {
      var k = i % n, k1 = (i + 1) % n, latU = vt[k1] * vt[k1] * C.curv[k] / muLat;
      var aAv = dec * Math.sqrt(Math.max(0.04, 1 - latU * latU));
      vt[k] = Math.min(vt[k], Math.sqrt(vt[k1] * vt[k1] + 2 * aAv * 2));
    }
    var p0 = C.pts[0], p1 = C.pts[1];
    c.reset(p0[0], p0[1], Math.atan2(p1[1] - p0[1], p1[0] - p0[0]), 15);
    var idx = 0, laps = -1, tStart = 0, lapT = null, maxE = 0, lastIdx = 0;
    run(c, 400, function (t) {
      var best = 1e9, bi = idx;
      for (var j = -5; j < 25; j++) { var q = C.pts[(idx + j + n) % n], dd = (q[0] - c.x) * (q[0] - c.x) + (q[1] - c.y) * (q[1] - c.y); if (dd < best) { best = dd; bi = (idx + j + n) % n; } }
      if (bi < lastIdx - n / 2) { laps++; if (laps === 1) tStart = t; if (laps === 2) { lapT = t - tStart; return false; } }
      lastIdx = bi; idx = bi;
      if (laps >= 1) maxE = Math.max(maxE, Math.sqrt(best));
      if (Math.sqrt(best) > 12) return false;
      var Ld = 6 + 0.6 * Math.abs(c.u), look = (bi + Math.round(Ld / 2)) % n, q2 = C.pts[look];
      var s = sc(c, vt[(bi + Math.round(Math.max(3, c.u * 0.5) / 2)) % n]);
      s.throttle *= clamp(1.25 - Math.abs(c.u * c.r) / (skidG * G), 0.08, 1);
      var qa = C.pts[bi], qb = C.pts[(bi + 1) % n], tx = qb[0] - qa[0], ty = qb[1] - qa[1], tl = Math.hypot(tx, ty) || 1;
      var eLat = (tx * (c.y - qa[1]) - ty * (c.x - qa[0])) / tl;   // + = left of path
      s.steer = purePursuit(c, q2[0], q2[1]) - 0.015 * eLat / (1 + Math.abs(c.u) / 12);
      return s;
    });
    return { time: lapT, maxErr: maxE };
  }

  function determinism() {
    var a = accelTop('coupe'), b = accelTop('coupe');
    return a.z60 === b.z60 && a.top === b.top;
  }

  // ---------- suite ----------
  function suite(opts) {
    opts = opts || {};
    var ids = opts.vehicles || ['sedan', 'truck', 'coupe', 'beater'];
    var out = [], onResult = opts.onResult || function () {};
    function rec(veh, test, val, unit, lo, hi, note) {
      var pass = val !== null && isFinite(val) && val >= lo && val <= hi;
      var r = { vehicle: veh, test: test, value: val, unit: unit, lo: lo, hi: hi, pass: pass, note: note || '' };
      out.push(r); onResult(r); return r;
    }
    var stats = {};
    ids.forEach(function (id) {
      var T = TARGETS[id], st = stats[id] = {};
      var a = accelTop(id);
      st.z60 = a.z60; st.top = a.top; st.qmile = a.qmile;
      rec(id, '0-60 mph', a.z60, 's', T.z60[0], T.z60[1]);
      rec(id, 'Top speed', a.top, 'mph', T.top[0], T.top[1]);
      var b60 = brake(id, 60 * MPH, P.SURFACES.dry, null, P.VEHICLES[id].aids.abs ? 'abs' : 'threshold') / FT;
      st.b60 = b60;
      rec(id, '60-0 mph braking', b60, 'ft', T.b60[0], T.b60[1], P.VEHICLES[id].aids.abs ? 'ABS' : 'threshold (no ABS)');
      if (!P.VEHICLES[id].aids.abs) {
        var lock = brake(id, 60 * MPH, P.SURFACES.dry, null, 'lock') / FT;
        rec(id, '60-0 locked wheels', lock, 'ft', b60 * 1.02, b60 * 1.6, 'no ABS: locking must cost distance');
      }
      var sk = skidpad(id); st.skid = sk;
      rec(id, 'Skid-pad (200 ft)', sk, 'g', T.skid[0], T.skid[1]);
      var K = understeer(id); st.K = K;
      rec(id, 'Understeer gradient', K, 'deg/g', T.K[0], T.K[1]);
      var cd = coast(id);
      rec(id, 'Coast-down 60-50 mph', cd, 's', T.coast[0], T.coast[1], 'aero + rolling resistance');
      var ss = standstill(id);
      rec(id, 'Standstill drift (brake held)', ss.drift, 'm', 0, 0.02);
      if (P.VEHICLES[id].trans.type === 'auto') rec(id, 'Idle creep speed', ss.creep / MPH, 'mph', 1.5, 7.0, 'torque converter');
      var sd = sineDwell(id);
      rec(id, 'Sine-with-dwell yaw @1.0 s', sd.r1, 'ratio', 0, 0.35, 'FMVSS 126-style');
      rec(id, 'Sine-with-dwell yaw @1.75 s', sd.r175, 'ratio', 0, 0.20);
      var pu = pulse(id);
      rec(id, 'High-speed steer pulse: yaw decay', pu.ratio, 'ratio', 0, 0.1, 'open-loop at 80% Vmax');
      var lp = lap(id, sk); st.lap = lp.time;
      var base = LAP_BASELINE[id];
      if (base) rec(id, 'Lap regression', lp.time, 's', base * (1 - LAP_TOL), base * (1 + LAP_TOL), 'baseline ' + base.toFixed(2) + ' s');
      else rec(id, 'Lap completes', lp.time, 's', 1, 400, 'no baseline yet');
      rec(id, 'Lap max path error', lp.maxErr, 'm', 0, 4.0);
      if (opts.onVehicle) opts.onVehicle(id, st);
    });
    // archetype behaviour
    if (ids.indexOf('coupe') >= 0) {
      var pc = powerOn('coupe', stats.coupe.skid);
      rec('coupe', 'Power-on oversteer: body slip', pc.beta, 'deg', 4, 180, 'TC/ESC off, full throttle mid-corner');
    }
    if (ids.indexOf('sedan') >= 0) {
      var ps = powerOn('sedan', stats.sedan.skid);
      rec('sedan', 'Power-on understeer: curvature ratio', ps.curv, 'x', 0, 0.97, 'FWD runs wide under power');
      // surface calibration (sedan, ABS)
      var d = brake('sedan', 60 * MPH, P.SURFACES.dry, null, 'abs');
      var dw = brake('sedan', 60 * MPH, P.SURFACES.wet, null, 'abs');
      rec('sedan', 'Wet/dry 60-0 ratio', dw / d, 'x', 1.10, 1.40);
      rec('sedan', 'Packed snow 20-0 (all-season)', brake('sedan', 20 * MPH, P.SURFACES.snow, null, 'abs') / FT, 'ft', 48, 75, 'Tire Rack-style snow stop');
      rec('sedan', 'Packed snow 20-0 (winter tyres)', brake('sedan', 20 * MPH, P.SURFACES.snow, { compound: 'winter' }, 'abs') / FT, 'ft', 32, 52);
      rec('sedan', 'Glare ice 10-0 (all-season)', brake('sedan', 10 * MPH, P.SURFACES.ice, null, 'abs') / FT, 'ft', 36, 60, 'CR-style ice stop');
      rec('sedan', 'Glare ice 10-0 (winter tyres)', brake('sedan', 10 * MPH, P.SURFACES.ice, { compound: 'winter' }, 'abs') / FT, 'ft', 25, 45);
      var hc = mk('sedan'); hc.setAllSurfaces(P.SURFACES.flooded);
      hc.reset(0, 0, 0, 40 * MPH); run(hc, 0.05, function () { return { throttle: 0.3 }; }); var h40 = hc.hydro;
      hc.reset(0, 0, 0, 72 * MPH); run(hc, 0.05, function () { return { throttle: 0.3 }; }); var h72 = hc.hydro;
      rec('sedan', 'Hydroplaning grip loss @40 mph (3 mm)', h40, 'frac', 0, 0.08);
      rec('sedan', 'Hydroplaning grip loss @72 mph (3 mm)', h72, 'frac', 0.45, 0.95);
    }
    if (ids.length === 4) {
      var s4 = tractionSnow('truck', { drive: 'AWD' }), s2 = tractionSnow('truck'), sf = tractionSnow('sedan'), sr = tractionSnow('coupe');
      rec('truck', 'Snow 0-30: 4H vs 2H', s2 - s4, 's gain', 0.5, 30, '4H ' + s4.toFixed(1) + ' s / 2H ' + s2.toFixed(1) + ' s');
      rec('sedan', 'Snow 0-30: FWD beats RWD-summer', sr - sf, 's gain', 0.5, 60, 'FWD ' + sf.toFixed(1) + ' s / coupe ' + sr.toFixed(1) + ' s');
      rec('truck', 'Snow 0-30: 4H beats FWD', sf - s4, 's gain', 0.2, 30);
    }
    rec('all', 'Deterministic replay', determinism() ? 1 : 0, 'bool', 1, 1);
    var passed = out.filter(function (r) { return r.pass; }).length;
    return { results: out, stats: stats, passed: passed, total: out.length, ok: passed === out.length };
  }

  return { suite: suite, TARGETS: TARGETS, LAP_BASELINE: LAP_BASELINE,
    tests: { pulse: pulse, accelTop: accelTop, brake: brake, skidpad: skidpad, understeer: understeer, powerOn: powerOn, sineDwell: sineDwell, coast: coast, standstill: standstill, lap: lap, tractionSnow: tractionSnow } };
})(typeof BDPhysics !== 'undefined' ? BDPhysics : require('./physics.js'));
if (typeof module !== 'undefined') module.exports = BDValidate;
