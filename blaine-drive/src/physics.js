/* BDPhysics — force-based vehicle model. Pure JS: no DOM, no THREE.
   Frame: X east, Y north (metres), heading psi CCW from +X. Body axes: u forward, v left, r yaw rate (CCW +).
   Model: planar 3-DOF body + 4 spinning wheels (linearly-implicit spin update), Magic-Formula tyres with
   combined slip (similarity method), load sensitivity, second-order weight transfer, torque-curve engine,
   torque converter / clutch launch, automatic or manual gearbox, open or limited-slip diffs, FWD/RWD/AWD,
   ABS / TC / ESC, aero drag, rolling resistance, grade, hydroplaning. Fixed step DT. */
var BDPhysics = (function () {
  'use strict';
  var G = 9.81, RHO = 1.2, DT = 1 / 480, MPH = 0.44704;
  var V_MIN_LONG = 0.6, V_MIN_LAT = 0.9;

  // Surface kinds. mu is relative to dry asphalt for an all-season tyre; compounds scale by kind.
  var SURFACES = {
    dry:      { mu: 1.00, kind: 'dry',    drag: 0,     water: 0,   label: 'Dry asphalt' },
    concrete: { mu: 0.97, kind: 'dry',    drag: 0,     water: 0,   label: 'Concrete' },
    wet:      { mu: 0.80, kind: 'wet',    drag: 0.001, water: 0.4, label: 'Wet asphalt' },
    flooded:  { mu: 0.78, kind: 'wet',    drag: 0.004, water: 3.0, label: 'Standing water' },
    slush:    { mu: 0.45, kind: 'snow',   drag: 0.010, water: 1.0, label: 'Slush' },
    snow:     { mu: 0.25, kind: 'snow',   drag: 0.006, water: 0,   label: 'Packed snow' },
    loose:    { mu: 0.30, kind: 'snow',   drag: 0.030, water: 0,   label: 'Fresh snow' },
    ice:      { mu: 0.085, kind: 'ice',    drag: 0,     water: 0,   label: 'Ice' },
    blackice: { mu: 0.055, kind: 'ice',   drag: 0,     water: 0,   label: 'Black ice' },
    gravel:   { mu: 0.62, kind: 'gravel', drag: 0.020, water: 0,   label: 'Gravel' },
    grass:    { mu: 0.50, kind: 'grass',  drag: 0.035, water: 0,   label: 'Grass' },
    leaves:   { mu: 0.60, kind: 'wet',    drag: 0.002, water: 0,   label: 'Wet leaves' },
    sand:     { mu: 0.45, kind: 'gravel', drag: 0.080, water: 0,   label: 'Sand' }
  };
  var COMPOUNDS = {
    allseason: { name: 'All-season', dry: 1.00, wet: 1.00, snow: 1.00, ice: 1.00, gravel: 1.00, grass: 1.00, tread: 1.00 },
    winter:    { name: 'Winter (studless)', dry: 0.93, wet: 0.97, snow: 1.40, ice: 1.38, gravel: 1.03, grass: 1.05, tread: 1.05 },
    summer:    { name: 'Summer performance', dry: 1.00, wet: 1.03, snow: 0.50, ice: 0.62, gravel: 0.95, grass: 0.95, tread: 0.95 },
    worn:      { name: 'Worn all-season', dry: 1.00, wet: 0.84, snow: 0.84, ice: 0.92, gravel: 1.00, grass: 1.00, tread: 0.82 },
    allterrain:{ name: 'All-terrain', dry: 1.00, wet: 0.97, snow: 1.12, ice: 0.98, gravel: 1.12, grass: 1.15, tread: 1.05 }
  };

  function clamp(x, a, b) { return x < a ? a : (x > b ? b : x); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function smooth(a, b, x) { var t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }
  function interp(tab, x) {
    if (x <= tab[0][0]) return tab[0][1];
    for (var i = 1; i < tab.length; i++) if (x <= tab[i][0]) {
      var a = tab[i - 1], b = tab[i]; return a[1] + (b[1] - a[1]) * (x - a[0]) / (b[0] - a[0]);
    }
    return tab[tab.length - 1][1];
  }
  // Magic Formula shape, normalised input x (= B*slip)
  function mf(C, E, x) { return Math.sin(C * Math.atan(x - E * (x - Math.atan(x)))); }
  // x at which mf peaks, for given C, E
  function mfPeakX(C, E) {
    var lo = 0.05, hi = 20;
    for (var i = 0; i < 60; i++) {
      var m = (lo + hi) / 2, h = 1e-4;
      if (mf(C, E, m + h) > mf(C, E, m)) lo = m; else hi = m;
    }
    return (lo + hi) / 2;
  }

  // ---- Vehicle archetypes. Numbers are class-representative published figures, not a specific model. ----
  var VEHICLES = {
    sedan: {
      id: 'sedan', name: 'Mid-size sedan', short: 'Sedan', blurb: 'FWD 2.5 L I4, 8-speed auto. Understeer-biased and forgiving; ABS, traction and stability control.',
      mass: 1540, cgH: 0.56, wheelbase: 2.825, frontWeight: 0.61, trackF: 1.60, trackR: 1.61, izzK: 1.05,
      rollFront: 0.64, rollGrad: 5.0, pitchGrad: 1.8, suspHz: 1.5, suspZeta: 0.55,
      tire: { r: 0.338, inertia: 1.3, mu: 0.98, latRatio: 0.97, kx: 20, kyF: 15.0, kyR: 22.0, Cx: 1.55, Ex: 0.0, Cy: 1.35, Ey: -0.6, loadSens: 0.12, psi: 35, compound: 'allseason' },
      engine: { idle: 700, redline: 6600, limiter: 6800, inertia: 0.16, eb0: 12, eb1: 4.5, creep: 22,
        torque: [[700, 150], [1500, 195], [2500, 220], [3500, 235], [4500, 245], [5000, 249], [5500, 245], [6000, 236], [6600, 218], [7000, 190]] },
      trans: { type: 'auto', ratios: [5.25, 3.03, 1.95, 1.46, 1.22, 1.00, 0.81, 0.67], reverse: 4.1, final: 2.80, eff: 0.90, shiftTime: 0.28, stall: 2400, tr: 1.9 },
      drive: 'FWD', awdSplit: 0.5, lsd: 0, lsdMax: 0,
      brakes: { front: 2600, rear: 1250, hand: 2200 },
      aero: { cd: 0.28, area: 2.25 }, crr: 0.0105,
      steer: { lock: 0.62, rate: 1.7 },
      aids: { abs: true, tc: true, esc: true }, governor: 130 * MPH,
      look: { body: 0x9aa7b4, len: 4.88, wid: 1.84, hgt: 1.45 }
    },
    truck: {
      id: 'truck', name: 'Full-size pickup', short: 'Pickup', blurb: '5.0 L V8, 10-speed auto, RWD with selectable 4H. High centre of gravity, soft roll, heavy.',
      mass: 2400, cgH: 0.78, wheelbase: 3.683, frontWeight: 0.57, trackF: 1.72, trackR: 1.72, izzK: 1.10,
      rollFront: 0.60, rollGrad: 8.5, pitchGrad: 2.6, suspHz: 1.3, suspZeta: 0.45,
      tire: { r: 0.405, inertia: 3.2, mu: 0.90, latRatio: 0.95, kx: 17, kyF: 12.0, kyR: 17.5, Cx: 1.5, Ex: 0.0, Cy: 1.30, Ey: -0.5, loadSens: 0.15, psi: 38, compound: 'allterrain' },
      engine: { idle: 650, redline: 6500, limiter: 6700, inertia: 0.25, eb0: 20, eb1: 7, creep: 35,
        torque: [[650, 330], [1500, 430], [2500, 500], [3500, 540], [4250, 556], [5000, 540], [5500, 515], [6000, 475], [6500, 420], [7000, 340]] },
      trans: { type: 'auto', ratios: [4.70, 2.99, 2.15, 1.77, 1.52, 1.28, 1.00, 0.85, 0.69, 0.64], reverse: 4.87, final: 3.55, eff: 0.88, shiftTime: 0.30, stall: 2500, tr: 2.0 },
      drive: 'RWD', awdCapable: true, awdSplit: 0.5, lsd: 0, lsdMax: 0,
      brakes: { front: 4300, rear: 2700, hand: 3000 },
      aero: { cd: 0.48, area: 3.45 }, crr: 0.012,
      steer: { lock: 0.58, rate: 1.3 },
      aids: { abs: true, tc: true, esc: true }, governor: 106 * MPH,
      look: { body: 0x7a1f1f, len: 5.9, wid: 2.03, hgt: 1.96 }
    },
    coupe: {
      id: 'coupe', name: 'RWD sports coupe', short: 'Coupe', blurb: '5.0 L V8, 6-speed (auto-clutch), limited-slip rear. Oversteer-capable; summer tyres by default.',
      mass: 1760, cgH: 0.50, wheelbase: 2.72, frontWeight: 0.53, trackF: 1.58, trackR: 1.65, izzK: 0.98,
      rollFront: 0.55, rollGrad: 3.6, pitchGrad: 1.3, suspHz: 1.8, suspZeta: 0.6,
      tire: { r: 0.345, inertia: 1.5, mu: 1.08, latRatio: 1.0, kx: 22, kyF: 17.5, kyR: 19.5, Cx: 1.5, Ex: 0.0, Cy: 1.33, Ey: -0.6, loadSens: 0.10, psi: 36, compound: 'summer' },
      engine: { idle: 750, redline: 7400, limiter: 7500, inertia: 0.20, eb0: 18, eb1: 6, creep: 0,
        torque: [[750, 300], [1500, 400], [2500, 470], [3500, 520], [4600, 556], [5500, 535], [6500, 490], [7000, 470], [7500, 420]] },
      trans: { type: 'manual', ratios: [3.66, 2.43, 1.69, 1.32, 1.00, 0.65], reverse: 3.7, final: 3.73, eff: 0.90, shiftTime: 0.18, stall: 3600, tr: 1.0 },
      drive: 'RWD', awdSplit: 0.5, lsd: 260, lsdMax: 900,
      brakes: { front: 3600, rear: 2000, hand: 2600 },
      aero: { cd: 0.35, area: 2.10 }, crr: 0.011,
      steer: { lock: 0.60, rate: 2.0 },
      aids: { abs: true, tc: true, esc: false }, governor: 155 * MPH,
      look: { body: 0x1f4fbf, len: 4.79, wid: 1.92, hgt: 1.38 }
    },
    beater: {
      id: 'beater', name: 'Winter beater', short: 'Beater', blurb: '20-year-old FWD sedan, 3.1 L V6, 4-speed auto, worn all-seasons, tired dampers, no ABS or traction control.',
      mass: 1520, cgH: 0.57, wheelbase: 2.769, frontWeight: 0.63, trackF: 1.52, trackR: 1.49, izzK: 1.05,
      rollFront: 0.66, rollGrad: 6.5, pitchGrad: 2.4, suspHz: 1.25, suspZeta: 0.30,
      tire: { r: 0.33, inertia: 1.1, mu: 0.86, latRatio: 0.95, kx: 17, kyF: 13.0, kyR: 19.5, Cx: 1.68, Ex: 0.0, Cy: 1.45, Ey: -0.4, loadSens: 0.14, psi: 30, compound: 'worn' },
      engine: { idle: 650, redline: 5600, limiter: 5800, inertia: 0.22, eb0: 10, eb1: 3.5, creep: 20,
        torque: [[650, 180], [1500, 225], [2500, 250], [3200, 260], [4000, 264], [4800, 252], [5200, 240], [5600, 215], [6000, 180]] },
      trans: { type: 'auto', ratios: [2.92, 1.57, 1.00, 0.71], reverse: 2.38, final: 3.05, eff: 0.87, shiftTime: 0.50, stall: 2200, tr: 2.1 },
      drive: 'FWD', awdSplit: 0.5, lsd: 0, lsdMax: 0,
      brakes: { front: 2300, rear: 1000, hand: 1600 },
      aero: { cd: 0.33, area: 2.10 }, crr: 0.012,
      steer: { lock: 0.60, rate: 1.3 },
      aids: { abs: false, tc: false, esc: false }, governor: 108 * MPH,
      look: { body: 0x6b5a3e, len: 4.95, wid: 1.83, hgt: 1.43 }
    }
  };

  function surfaceCopy(s) { return { mu: s.mu, kind: s.kind, drag: s.drag, water: s.water, label: s.label }; }

  function Car(spec, opts) {
    opts = opts || {};
    this.spec = spec;
    var t = spec.tire;
    this.compound = opts.compound || t.compound;
    this.aids = { abs: spec.aids.abs, tc: spec.aids.tc, esc: spec.aids.esc };
    if (opts.aids) for (var k in opts.aids) this.aids[k] = opts.aids[k];
    this.drive = opts.drive || spec.drive;           // 'FWD' | 'RWD' | 'AWD'
    this.manual = !!opts.manual;
    var L = spec.wheelbase;
    this.a = L * (1 - spec.frontWeight);              // CG -> front axle
    this.b = L * spec.frontWeight;                    // CG -> rear axle
    this.izz = spec.mass * this.a * this.b * spec.izzK;
    this.pkX = mfPeakX(t.Cx, t.Ex); this.pkY = mfPeakX(t.Cy, t.Ey);
    var mg = spec.mass * G;
    this.fz0 = [mg * spec.frontWeight / 2, mg * spec.frontWeight / 2, mg * (1 - spec.frontWeight) / 2, mg * (1 - spec.frontWeight) / 2];
    this.wx = [this.a, this.a, -this.b, -this.b];
    this.wy = [spec.trackF / 2, -spec.trackF / 2, spec.trackR / 2, -spec.trackR / 2];
    this.w = [];
    for (var i = 0; i < 4; i++) this.w.push({ omega: 0, steer: 0, fz: this.fz0[i], fx: 0, fy: 0, kappa: 0, alpha: 0, slipVel: 0, absScale: 1, surf: surfaceCopy(SURFACES.dry), grip: 1 });
    this.reset(0, 0, 0, 0);
  }
  Car.prototype.reset = function (x, y, psi, speed) {
    this.x = x; this.y = y; this.psi = psi;
    this.u = speed || 0; this.v = 0; this.r = 0;
    this.axF = 0; this.ayF = 0;           // filtered accelerations used for load transfer
    this.rollAy = 0; this.rollAyD = 0;    // 2nd-order lateral transfer state
    this.pitchAx = 0; this.pitchAxD = 0;
    this.steerAngle = 0;
    this.gear = 1; this.shiftT = 0; this.shiftTo = 0; this.gearHold = 0;
    this.slope = 0; this.slopeL = 0;
    this.tcCut = 1; this.escBrake = [0, 0, 0, 0];
    this.input = { throttle: 0, brake: 0, steer: 0, handbrake: 0 };
    this.t = 0; this.acc = 0; this.odo = 0;
    this.ax = 0; this.ay = 0;
    this.limiterHit = false; this.hydro = 0;
    for (var i = 0; i < 4; i++) { this.w[i].omega = this.u / this.spec.tire.r; this.w[i].absScale = 1; }
    var e = this.spec.engine;
    this.engW = e.idle * Math.PI / 30;
    if (this.u > 1) { this.gear = this.bestGear(this.u); this.engW = Math.max(this.engW, this.wheelEngW()); }
  };
  Car.prototype.setSurface = function (i, s) { var d = this.w[i].surf; d.mu = s.mu; d.kind = s.kind; d.drag = s.drag || 0; d.water = s.water || 0; d.label = s.label || ''; };
  Car.prototype.setAllSurfaces = function (s) { for (var i = 0; i < 4; i++) this.setSurface(i, s); };
  Car.prototype.gearRatio = function (g) {
    var tr = this.spec.trans;
    if (g === 0) return 0; if (g < 0) return -tr.reverse * tr.final;
    return tr.ratios[g - 1] * tr.final;
  };
  Car.prototype.drivenW = function () {
    var w = this.w;
    if (this.drive === 'FWD') return (w[0].omega + w[1].omega) / 2;
    if (this.drive === 'RWD') return (w[2].omega + w[3].omega) / 2;
    var s = this.spec.awdSplit; return s * (w[0].omega + w[1].omega) / 2 + (1 - s) * (w[2].omega + w[3].omega) / 2;
  };
  Car.prototype.wheelEngW = function () { return this.drivenW() * this.gearRatio(this.gear); };
  Car.prototype.bestGear = function (u) {
    var tr = this.spec.trans, e = this.spec.engine, n = tr.ratios.length;
    for (var g = 1; g <= n; g++) { var rpm = u / this.spec.tire.r * this.gearRatio(g) * 30 / Math.PI; if (rpm < e.redline * 0.55 || g === n) return g; }
    return n;
  };
  Car.prototype.rpm = function () { return this.engW * 30 / Math.PI; };
  Car.prototype.engineTorque = function (rpm, th) {
    var e = this.spec.engine;
    var full = interp(e.torque, rpm);
    var fric = -(e.eb0 + e.eb1 * rpm / 1000) * smooth(e.idle, e.idle + 400, rpm);
    if (rpm > e.limiter) { this.limiterHit = true; return fric; }
    return th * full + (1 - th) * fric;
  };
  Car.prototype.speed = function () { return Math.sqrt(this.u * this.u + this.v * this.v); };
  Car.prototype.beta = function () { return Math.abs(this.u) < 0.5 ? 0 : Math.atan2(this.v, Math.abs(this.u)); };

  // Tyre forces in wheel frame. Returns via out {fx, fy}. mu = total peak coefficient; stiff = sqrt surface factor.
  var tmp = { fx: 0, fy: 0 };
  Car.prototype.tyre = function (i, fz, mu, stiff, kappa, alpha, out) {
    var t = this.spec.tire;
    if (fz <= 0 || mu <= 0) { out.fx = 0; out.fy = 0; return; }
    var ky = i < 2 ? t.kyF : t.kyR;
    var Dx = mu * fz, Dy = mu * fz * t.latRatio;
    var Bx = t.kx * stiff / (t.Cx * mu), By = ky * stiff / (t.Cy * mu * t.latRatio);
    var kpk = this.pkX / Bx, apk = this.pkY / By;
    this.w[i].kpk = kpk;
    var sx = kappa / kpk, sy = alpha / apk;
    var s = Math.sqrt(sx * sx + sy * sy);
    if (s < 1e-9) { out.fx = 0; out.fy = 0; return; }
    var fx0 = Dx * mf(t.Cx, t.Ex, s * this.pkX), fy0 = Dy * mf(t.Cy, t.Ey, s * this.pkY);
    out.fx = fx0 * sx / s; out.fy = -fy0 * sy / s;
  };

  Car.prototype.step = function (dt, input) {
    if (input) { var I = this.input; I.throttle = input.throttle || 0; I.brake = input.brake || 0; I.steer = input.steer || 0; I.handbrake = input.handbrake || 0; }
    this.acc += dt;
    var n = 0;
    while (this.acc >= DT && n < 200) { this.substep(DT); this.acc -= DT; n++; }
    if (n >= 200) this.acc = 0;
  };

  Car.prototype.substep = function (dt) {
    var sp = this.spec, t = sp.tire, e = sp.engine, tr = sp.trans, m = sp.mass, L = sp.wheelbase;
    var inp = this.input, w = this.w, i;
    this.t += dt;
    // --- steering actuator (road-wheel angle), Ackermann split
    var target = clamp(inp.steer, -sp.steer.lock, sp.steer.lock);
    var dMax = sp.steer.rate * dt;
    this.steerAngle += clamp(target - this.steerAngle, -dMax, dMax);
    var d = this.steerAngle;
    if (Math.abs(d) > 1e-5) {
      var R = L / Math.tan(d), h = sp.trackF / 2;
      w[0].steer = Math.atan(L / (R - h)); w[1].steer = Math.atan(L / (R + h));
    } else { w[0].steer = d; w[1].steer = d; }
    w[2].steer = 0; w[3].steer = 0;

    // --- loads: longitudinal (1st order) + lateral (2nd order spring/damper) transfer
    var wn = 2 * Math.PI * sp.suspHz, z = sp.suspZeta;
    this.rollAyD += (wn * wn * (this.ay - this.rollAy) - 2 * z * wn * this.rollAyD) * dt;
    this.rollAy += this.rollAyD * dt;
    this.pitchAxD += (wn * wn * (this.ax - this.pitchAx) - 2 * 0.7 * wn * this.pitchAxD) * dt;
    this.pitchAx += this.pitchAxD * dt;
    var mgc = m * G / Math.sqrt(1 + this.slope * this.slope + this.slopeL * this.slopeL);
    var dLong = m * this.pitchAx * sp.cgH / L;               // + when accelerating: rear gains
    var dLatF = m * this.rollAy * sp.cgH / sp.trackF * sp.rollFront;
    var dLatR = m * this.rollAy * sp.cgH / sp.trackR * (1 - sp.rollFront);
    var sf = mgc / (m * G);
    w[0].fz = Math.max(0, this.fz0[0] * sf - dLong / 2 - dLatF);
    w[1].fz = Math.max(0, this.fz0[1] * sf - dLong / 2 + dLatF);
    w[2].fz = Math.max(0, this.fz0[2] * sf + dLong / 2 - dLatR);
    w[3].fz = Math.max(0, this.fz0[3] * sf + dLong / 2 + dLatR);

    // --- powertrain
    var th = clamp(inp.throttle, 0, 1);
    if (this.gear > 0 && this.u > sp.governor) th *= clamp(1 - (this.u - sp.governor) / 0.8, 0, 1);
    th *= this.tcCut;
    var ratio = this.gearRatio(this.gear);
    var wheelE = this.drivenW() * ratio;               // engine speed implied by wheels
    var idleW = e.idle * Math.PI / 30;
    var launchW = idleW + (tr.stall * Math.PI / 30 - idleW) * clamp(inp.throttle * 1.25, 0, 1);
    var driveT = 0, coupled = false;
    this.limiterHit = false;
    if (this.gear === 0 || this.shiftT > 0 && tr.type === 'manual') {
      var freeT = idleW + (e.redline * Math.PI / 30 - idleW) * th;
      this.engW += (freeT - this.engW) * clamp(dt * 6, 0, 1);
      if (this.gear !== 0) this.engW += (Math.max(idleW, wheelE) - this.engW) * clamp(dt * 10, 0, 1);
    } else if (wheelE >= launchW - 1) {
      coupled = true; this.engW = Math.max(wheelE, idleW * 0.8);
      var Te = this.engineTorque(this.engW * 30 / Math.PI, th);
      driveT = Te * ratio * tr.eff;
    } else {
      // converter / slipping clutch: engine held near launch speed, torque multiplied by TR(SR)
      this.engW += (launchW - this.engW) * clamp(dt / 0.06, 0, 1);
      var SR = clamp(wheelE / this.engW, 0, 1);
      var TR = tr.tr + (1 - tr.tr) * Math.min(1, SR / 0.85);
      var Te2 = this.engineTorque(this.engW * 30 / Math.PI, th);
      if (th < 0.02) Te2 = tr.type === 'auto' ? e.creep * (1 - SR) : 0;
      driveT = Math.max(0, Te2) * TR * ratio * tr.eff;
    }
    if (this.shiftT > 0) { driveT *= tr.type === 'manual' ? 0 : 0.25; }
    if (ratio < 0) driveT = driveT; // sign carried by ratio

    // distribute drive torque
    var Tw = [0, 0, 0, 0], drv = this.drive, fr = drv === 'FWD' ? 1 : (drv === 'RWD' ? 0 : sp.awdSplit);
    Tw[0] = Tw[1] = driveT * fr / 2; Tw[2] = Tw[3] = driveT * (1 - fr) / 2;
    // limited slip (viscous + cap) on driven axle(s)
    if (sp.lsd > 0) {
      if (fr > 0) { var c0 = clamp(sp.lsd * (w[1].omega - w[0].omega), -sp.lsdMax, sp.lsdMax); Tw[0] += c0; Tw[1] -= c0; }
      if (fr < 1) { var c1 = clamp(sp.lsd * (w[3].omega - w[2].omega), -sp.lsdMax, sp.lsdMax); Tw[2] += c1; Tw[3] -= c1; }
    }
    if (drv === 'AWD') { // locked centre (part-time 4H): stiff coupling between axles
      var cc = clamp(500 * ((w[2].omega + w[3].omega) - (w[0].omega + w[1].omega)) / 2, -3000, 3000);
      Tw[0] += cc / 2; Tw[1] += cc / 2; Tw[2] -= cc / 2; Tw[3] -= cc / 2;
    }
    var nDriven = drv === 'AWD' ? 4 : 2;
    var engInertiaW = coupled ? e.inertia * ratio * ratio * tr.eff / nDriven : 0;

    // --- brakes (ABS modulated) + ESC
    var bIn = clamp(inp.brake, 0, 1);
    // EBD / proportioning valve: rear line pressure follows the rear axle's dynamic load
    var ebd = clamp((w[2].fz + w[3].fz) / (this.fz0[2] + this.fz0[3]), 0.35, 1);
    var Tb = [bIn * sp.brakes.front, bIn * sp.brakes.front, bIn * sp.brakes.rear * ebd, bIn * sp.brakes.rear * ebd];
    if (inp.handbrake > 0) { Tb[2] += inp.handbrake * sp.brakes.hand; Tb[3] += inp.handbrake * sp.brakes.hand; }
    for (i = 0; i < 4; i++) Tb[i] += this.escBrake[i];

    // --- per-wheel: contact velocities, implicit spin update, tyre forces
    var Fx = 0, Fy = 0, Mz = 0, u = this.u, v = this.v, r = this.r;
    var comp = COMPOUNDS[this.compound] || COMPOUNDS.allseason;
    var vp = 10.35 * Math.sqrt(t.psi) * MPH * comp.tread;
    var hydroSum = 0;
    for (i = 0; i < 4; i++) {
      var W = w[i];
      var cvx = u - r * this.wy[i], cvy = v + r * this.wx[i];
      var cs = Math.cos(W.steer), sn = Math.sin(W.steer);
      var vxw = cvx * cs + cvy * sn, vyw = -cvx * sn + cvy * cs;
      var S = W.surf;
      var loadMu = t.mu * clamp(1 - t.loadSens * (W.fz / this.fz0[i] - 1), 0.6, 1.3);
      var sMu = S.mu * (comp[S.kind] || 1);
      var hyd = 1;
      if (S.water > 0.3) { hyd = 1 - 0.88 * smooth(0.6 * vp, 1.05 * vp, Math.abs(vxw)) * clamp((S.water - 0.3) / 2.5, 0, 1); }
      hydroSum += 1 - hyd;
      var mu = loadMu * sMu * hyd;
      var stiff = Math.sqrt(clamp(sMu * hyd, 0.02, 1.2));
      W.grip = sMu * hyd;
      var vden = Math.max(Math.abs(vxw), V_MIN_LONG);
      var alpha = Math.atan2(vyw, Math.max(Math.abs(vxw), V_MIN_LAT));
      var Iw = t.inertia + ((i < 2 && fr > 0) || (i >= 2 && fr < 1) ? engInertiaW : 0);
      var rr = (sp.crr + S.drag) * W.fz * t.r;
      var Troll = -rr * Math.tanh(W.omega * t.r / 0.4);
      // linearise tyre Fx wrt omega
      var k0 = (W.omega * t.r - vxw) / vden;
      this.tyre(i, W.fz, mu, stiff, k0, alpha, tmp); var f0 = tmp.fx;
      var hk = 1e-4;
      this.tyre(i, W.fz, mu, stiff, k0 + hk, alpha, tmp); var dFdk = (tmp.fx - f0) / hk;
      var dFdw = Math.max(0, dFdk) * t.r / vden;
      var denom = Iw + dt * t.r * dFdw;
      var wFree = W.omega + dt * (Tw[i] + Troll - t.r * f0) / denom;
      // ABS: modulate brake torque when wheel slip exceeds threshold
      var tb = Tb[i];
      if (this.aids.abs && bIn > 0 && Math.abs(vxw) > 1.5) {
        var kt = 0.9 * (W.kpk || 0.12);
        W.absScale = clamp(W.absScale + dt * 14 * clamp((k0 + kt) / kt, -3, 1), 0.03, 1);
        tb = Tb[i] * W.absScale + (inp.handbrake > 0 && i >= 2 ? inp.handbrake * sp.brakes.hand * (1 - W.absScale) : 0);
      } else W.absScale = 1;
      var bImp = tb * dt / denom;
      if (Math.abs(wFree) <= bImp) W.omega = 0; else W.omega = wFree - (wFree > 0 ? bImp : -bImp);
      var kap = (W.omega * t.r - vxw) / vden;
      this.tyre(i, W.fz, mu, stiff, kap, alpha, tmp);
      var fxw = tmp.fx, fyw = tmp.fy;
      // low-speed lateral damping so a parked car does not creep sideways
      if (Math.abs(vxw) < 2.0) { var ld = (1 - Math.abs(vxw) / 2.0); fyw = fyw * (1 - ld) + clamp(-vyw * 9000, -mu * W.fz, mu * W.fz) * ld; }
      W.kappa = kap; W.alpha = alpha;
      W.slipVel = Math.sqrt((W.omega * t.r - vxw) * (W.omega * t.r - vxw) + vyw * vyw);
      W.fx = fxw; W.fy = fyw;
      var bx = fxw * cs - fyw * sn, by = fxw * sn + fyw * cs;
      Fx += bx; Fy += by; Mz += this.wx[i] * by - this.wy[i] * bx;
    }
    this.hydro = hydroSum / 4;
    // --- aero, grade
    var cda = 0.5 * RHO * sp.aero.cd * sp.aero.area;
    Fx -= cda * u * Math.abs(u);
    Fy -= cda * 2.5 * v * Math.abs(v);
    Fx -= m * G * this.slope / Math.sqrt(1 + this.slope * this.slope);
    Fy -= m * G * this.slopeL / Math.sqrt(1 + this.slopeL * this.slopeL);
    // --- body integration (semi-implicit)
    var du = Fx / m + v * r, dv = Fy / m - u * r;
    this.ax = Fx / m; this.ay = Fy / m;
    this.u += du * dt; this.v += dv * dt;
    this.r += Mz / this.izz * dt;
    this.psi += this.r * dt;
    var c = Math.cos(this.psi), s2 = Math.sin(this.psi);
    var vx = this.u * c - this.v * s2, vy = this.u * s2 + this.v * c;
    this.x += vx * dt; this.y += vy * dt;
    this.odo += Math.sqrt(vx * vx + vy * vy) * dt;

    // --- driver aids: traction control
    if (this.aids.tc && th > 0) {
      var ks = 0, lim = 0.12;
      for (i = 0; i < 4; i++) { var dw = (i < 2 && fr > 0) || (i >= 2 && fr < 1); if (dw) { ks = Math.max(ks, w[i].kappa * Math.sign(ratio || 1)); lim = Math.min(lim, 1.05 * (w[i].kpk || 0.12)); } }
      this.tcCut = clamp(this.tcCut - dt * 9 * clamp((ks - lim) / lim, -0.5, 3), 0.1, 1);
    } else this.tcCut = Math.min(1, this.tcCut + dt * 4);
    // --- ESC: oversteer -> brake outside front; understeer -> brake inside rear
    for (i = 0; i < 4; i++) this.escBrake[i] *= Math.max(0, 1 - dt * 20);
    if (this.aids.esc && this.u > 4) {
      var muEst = 0.9 * Math.max(0.1, (w[0].grip + w[1].grip + w[2].grip + w[3].grip) / 4) * t.mu;
      var rRef = this.u * d / (L * (1 + this.u * this.u / (22 * 22)));
      var rMax = muEst * G / this.u; rRef = clamp(rRef, -rMax, rMax);
      var err = this.r - rRef;
      var over = (Math.abs(this.r) > Math.abs(rRef) + 0.06) && (Math.sign(err) === Math.sign(this.r));
      if (over || Math.abs(this.beta()) > 0.12) {
        var idx = this.r > 0 ? 1 : 0;
        this.escBrake[idx] = Math.min(2500, this.escBrake[idx] + 30000 * Math.abs(err) * dt * 60);
        this.tcCut = Math.min(this.tcCut, 0.4);
      }
    }
    // --- engine speed when coupled already set; gearbox logic
    this.updateGearbox(dt);
  };

  Car.prototype.updateGearbox = function (dt) {
    var tr = this.spec.trans, e = this.spec.engine, n = tr.ratios.length;
    if (this.gearHold > 0) this.gearHold -= dt;
    if (this.shiftT > 0) { this.shiftT -= dt; if (this.shiftT <= 0) this.shiftT = 0; return; }
    if (this.manual || this.gear <= 0) return;
    var th = this.input.throttle;
    var rpmW = this.wheelEngW() * 30 / Math.PI;
    var rpmU = Math.abs(this.u) / this.spec.tire.r * this.gearRatio(this.gear) * 30 / Math.PI;
    // automatics schedule from output-shaft speed; the auto-clutch "driver" shifts on engine speed
    var rpm = tr.type === 'manual' ? rpmW : Math.min(rpmW, rpmU * 1.05 + 250);
    var p = Math.pow(clamp(th, 0, 1), 1.6);
    var up = lerp(1750, e.redline * (tr.type === 'manual' ? 1.0 : 0.97), p);
    var down = lerp(1050, e.redline * 0.5, p);
    if (this.gear < n && (rpm > up || rpmW > e.limiter - 50) && this.gearHold <= 0) { this.shift(this.gear + 1); this.gearHold = 0.9; return; }
    if (this.gear > 1 && rpm < down && this.gearHold <= 0) {
      var nr = rpm * tr.ratios[this.gear - 2] / tr.ratios[this.gear - 1];
      if (nr < Math.min(up * 0.92, e.redline * 0.92)) { this.shift(this.gear - 1); this.gearHold = 1.2; }
    }
  };
  Car.prototype.shift = function (g) {
    var n = this.spec.trans.ratios.length;
    g = clamp(g, -1, n);
    if (g === this.gear) return;
    this.gear = g; this.shiftT = this.spec.trans.shiftTime;
  };
  Car.prototype.shiftUp = function () { if (this.gear < this.spec.trans.ratios.length) this.shift(this.gear + 1 === 0 ? 1 : this.gear + 1); };
  Car.prototype.shiftDown = function () { if (this.gear > -1) this.shift(this.gear - 1 === 0 && this.u > 1 ? 1 : this.gear - 1); };
  Car.prototype.applyImpulse = function (px, py, jx, jy) {
    // world-space impulse at world point
    var c = Math.cos(this.psi), s = Math.sin(this.psi);
    var ju = jx * c + jy * s, jv = -jx * s + jy * c;
    var rx = px - this.x, ry = py - this.y;
    var lx = rx * c + ry * s, ly = -rx * s + ry * c;
    this.u += ju / this.spec.mass; this.v += jv / this.spec.mass;
    this.r += (lx * jv - ly * ju) / this.izz;
  };
  Car.prototype.worldVel = function () { var c = Math.cos(this.psi), s = Math.sin(this.psi); return [this.u * c - this.v * s, this.u * s + this.v * c]; };
  Car.prototype.wheelWorld = function (i) { var c = Math.cos(this.psi), s = Math.sin(this.psi); return [this.x + this.wx[i] * c - this.wy[i] * s, this.y + this.wx[i] * s + this.wy[i] * c]; };
  Car.prototype.bodyRoll = function () { return -this.rollAy / G * this.spec.rollGrad * Math.PI / 180; };
  Car.prototype.bodyPitch = function () { return -this.pitchAx / G * this.spec.pitchGrad * Math.PI / 180; };

  // Driver-facing mapping: gas/brake keys with automatic reverse engagement (shared by game and harness).
  function DriverInput() { this.revHold = 0; }
  DriverInput.prototype.map = function (car, gas, brake, steer, hand, dt) {
    var out = { throttle: 0, brake: 0, steer: steer, handbrake: hand };
    var spd = car.u;
    if (car.gear === -1) {
      out.throttle = brake; out.brake = gas;
      if (gas > 0.1 && spd > -0.4) { car.shift(1); }
    } else {
      out.throttle = gas; out.brake = brake;
      if (brake > 0.1 && gas < 0.05 && Math.abs(spd) < 0.4) { this.revHold += dt; if (this.revHold > 0.35) { car.shift(-1); this.revHold = 0; } }
      else this.revHold = 0;
      if (car.gear === 0 && gas > 0.1) car.shift(1);
    }
    return out;
  };

  return { G: G, DT: DT, MPH: MPH, SURFACES: SURFACES, COMPOUNDS: COMPOUNDS, VEHICLES: VEHICLES, Car: Car, DriverInput: DriverInput,
    clamp: clamp, lerp: lerp, smooth: smooth, interp: interp, mf: mf };
})();
if (typeof module !== 'undefined') module.exports = BDPhysics;
