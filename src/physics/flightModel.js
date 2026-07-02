// Rigid-body-lite flight model.
// Body frame: forward = -Z, right = +X, up = +Y.
// Angular rates: p = roll right, q = pitch up, r = yaw right.
// Aerodynamic coefficients are derived from each aircraft's published-ish
// performance envelope (data/aircraft.json), so weight class drives handling.
import * as THREE from 'three';
import {
  clamp, clamp01, lerp, DEG2RAD, RAD2DEG, KTS2MS, MS2KTS, FT2M, M2FT, G,
  airDensity, speedOfSound, wrap360
} from '../core/math.js';

const RHO0 = 1.225;
const FLAP_DETENTS = [0, 0.25, 0.5, 0.75, 1]; // UP, 1, 2, 3, FULL

const _v1 = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _v3 = new THREE.Vector3();
const _q1 = new THREE.Quaternion();

export class FlightModel {
  constructor(variant, family, opts = {}) {
    this.variant = variant;
    this.family = family;
    const p = variant.perf;
    const geo = variant.geoMerged || family.geometry;
    this.flags = variant.flags || [];
    this.supersonic = this.flags.includes('supersonic');

    this.mass = p.emptyKg + 0.45 * (p.mtowKg - p.emptyKg); // mid-weight
    this.S = p.wingAreaM2;
    this.span = variant.dims.span;
    this.len = variant.dims.len;
    this.chord = this.S / this.span;
    const AR = (this.span * this.span) / this.S;
    this.engineCount = { wing2: 2, tail2: 2, wing4: 4, trijet727: 3, trijetdc10: 3, sst4: 4, sst4paired: 4 }[geo.engines.layout] || 2;
    this.maxThrust = p.thrustKN * 1000 * this.engineCount;

    // Lift curve & stall. CLmax(landing flap) chosen to match published stall speed.
    const vsLand = p.stallKts * KTS2MS;
    this.clMaxLanding = (2 * this.mass * G) / (RHO0 * vsLand * vsLand * this.S);
    this.clMaxClean = this.clMaxLanding * 0.62;
    this.clFlapGain = this.clMaxLanding - this.clMaxClean;
    this.clAlpha = this.supersonic ? 2.2 : 5.2 * (AR / (AR + 2)); // deltas lift less per alpha
    this.cl0 = this.supersonic ? 0.0 : 0.12;
    this.alphaStallClean = this.supersonic ? 22 * DEG2RAD : (this.clMaxClean - this.cl0) / this.clAlpha + 2 * DEG2RAD;

    this.cd0 = this.supersonic ? 0.015 : 0.021;
    this.kInduced = 1 / (Math.PI * 0.78 * AR);
    this.mmo = p.mmo || 0.84;

    // Inertia approximations by geometry + mass.
    this.Ix = this.mass * Math.pow(0.22 * this.span, 2);
    this.Iy = this.mass * Math.pow(0.25 * this.len, 2);
    this.Iz = this.mass * Math.pow(0.26 * (this.span + this.len) * 0.5, 2);

    // Control/stability coefficients (effectiveness normalized by reference
    // dynamic pressure so handling stays sane from approach to cruise).
    this.qbarRef = 0.5 * RHO0 * Math.pow(95, 2);
    this.C = {
      clDa: 0.11, clP: -0.55, clBeta: -0.09,
      cm0: 0.035, cmAlpha: -1.5, cmDe: 1.6, cmQ: -34,
      cnBeta: 0.11, cnDr: 0.13, cnR: -0.22, cyBeta: -0.35
    };

    // Gear geometry (meters, body frame) from the visual model config.
    const g = opts.gearInfo || {};
    this.gearHeight = g.gearHeight ?? (geo.fusR * 1.15 + 1.2);
    this.gearPoints = {
      nose: new THREE.Vector3(0, -this.gearHeight, -this.len * 0.36),
      left: new THREE.Vector3(-this.span * 0.10, -this.gearHeight, this.len * 0.04),
      right: new THREE.Vector3(this.span * 0.10, -this.gearHeight, this.len * 0.04)
    };
    // Contact probes follow the actual hull: the rear fuselage is upswept
    // (bottom sits near -0.15R by 0.40L aft), which sets a realistic
    // tail-strike pitch angle; wingtips include dihedral rise.
    const dihTan = Math.tan((geo.wing?.dihedral ?? 5) * DEG2RAD);
    const tipY = -geo.fusR * 0.45 + (this.span / 2) * dihTan;
    this.strikePoints = {
      tail: new THREE.Vector3(0, -geo.fusR * 0.15, this.len * 0.40),
      nose: new THREE.Vector3(0, -geo.fusR * 0.5, -this.len * 0.44),
      belly: new THREE.Vector3(0, -geo.fusR, 0),
      wingL: new THREE.Vector3(-this.span * 0.48, tipY, this.len * 0.05),
      wingR: new THREE.Vector3(this.span * 0.48, tipY, this.len * 0.05)
    };

    // V-speeds (approx, for callouts/HUD).
    this.vr = p.stallKts * 1.28;
    this.vref = p.stallKts * 1.3;
    this.vmo = this.supersonic ? 530 : Math.min(p.cruiseKts * 0.78 + 120, 390);

    // --- Mutable state ---
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.quat = new THREE.Quaternion();
    this.rates = { p: 0, q: 0, r: 0 };
    this.throttle = 0;
    this.n1 = 0;                 // spooled thrust fraction 0..1
    this.trim = 0;
    this.flapIndex = 0;
    this.gearDown = true;
    this.gearAnim = 1;           // 0 = up, 1 = down
    this.spoilers = false;
    this.reversers = false;
    this.brakes = 0;
    this.controls = { pitch: 0, roll: 0, yaw: 0 };
    this.onGround = true;
    this.gearWasGrounded = { nose: true, left: true, right: true };
    this.collapsed = false;
    this.destroyed = false;
    this.buffet = 0;
    this.gForce = 1;
    this.events = [];
    // Readouts
    this.iasKts = 0; this.tasKts = 0; this.mach = 0; this.vsFpm = 0;
    this.hdgDeg = 0; this.aglM = 0; this.alphaDeg = 0; this.stallWarn = false;
  }

  get flap() { return FLAP_DETENTS[this.flapIndex]; }
  get flapDeg() { return Math.round(this.flap * 40); }

  reset(pose) {
    this.pos.copy(pose.pos);
    this.quat.copy(pose.quat);
    this.vel.copy(pose.vel || _v1.set(0, 0, 0));
    this.rates.p = this.rates.q = this.rates.r = 0;
    this.throttle = pose.throttle ?? 0;
    this.n1 = this.throttle;
    this.trim = pose.trim ?? 0;
    this.flapIndex = pose.flapIndex ?? 0;
    this.gearDown = pose.gearDown ?? true;
    this.gearAnim = this.gearDown ? 1 : 0;
    this.spoilers = false;
    this.reversers = false;
    this.collapsed = false;
    this.destroyed = false;
    this.events.length = 0;
  }

  applyActions(actions, settings) {
    for (const a of actions) {
      if (a === 'gear' && !this.collapsed) this.gearDown = !this.gearDown;
      else if (a === 'flapsDown') this.flapIndex = Math.min(this.flapIndex + 1, FLAP_DETENTS.length - 1);
      else if (a === 'flapsUp') this.flapIndex = Math.max(this.flapIndex - 1, 0);
      else if (a === 'spoilers') this.spoilers = !this.spoilers;
      else if (a === 'reversers') { if (this.onGround) this.reversers = !this.reversers; }
    }
  }

  step(dt, env) {
    if (this.destroyed) return;
    const { groundY = 0, wind = _v3.set(0, 0, 0), arcade = false } = env;
    const st = this;
    st.events.length = 0;

    // --- Systems ---
    st.gearAnim = clamp01(st.gearAnim + (st.gearDown ? dt / 3 : -dt / 3));
    let thrTarget = st.throttle;
    // engine spool lag
    st.n1 += clamp(thrTarget - st.n1, -0.28 * dt, 0.22 * dt);
    if (!st.onGround) st.reversers = false;

    // --- Atmosphere & relative wind ---
    const altM = st.pos.y + (env.fieldElevM || 0);
    const rho = airDensity(altM);
    const relVel = _v1.copy(st.vel).sub(wind);
    const V = Math.max(relVel.length(), 0.001);
    const a = speedOfSound(altM);
    const M = V / a;
    st.mach = M;
    st.tasKts = V * MS2KTS;
    st.iasKts = st.tasKts * Math.sqrt(rho / RHO0);

    // Velocity in body frame.
    const qInv = _q1.copy(st.quat).invert();
    const vb = _v2.copy(relVel).applyQuaternion(qInv);
    const fwdSpeed = -vb.z;
    const alpha = Math.abs(fwdSpeed) > 1 ? Math.atan2(-vb.y, fwdSpeed) : 0;
    const beta = Math.abs(fwdSpeed) > 1 ? Math.atan2(vb.x, Math.abs(fwdSpeed)) : 0;
    st.alphaDeg = alpha * RAD2DEG;

    // --- Lift/stall ---
    const flap = st.flap;
    const alphaStall = st.alphaStallClean + flap * 4 * DEG2RAD + (arcade ? 3 * DEG2RAD : 0);
    let cl = st.cl0 + st.clAlpha * alpha + st.clFlapGain * flap;
    const clMax = st.clMaxClean + st.clFlapGain * flap + 0.15;
    let stalled = false;
    if (alpha > alphaStall) {
      stalled = true;
      const over = alpha - alphaStall;
      cl = Math.max(clMax * (1 - over * 2.2), 0.35);
    } else if (alpha < -alphaStall * 0.8) {
      stalled = true;
      cl = Math.min(cl, -0.6);
    }
    cl = clamp(cl, -1.2, clMax);
    if (st.spoilers) cl -= st.onGround ? 0.5 : 0.3;

    // Ground effect
    const agl = st.pos.y - groundY;
    st.aglM = agl;
    const hb = clamp((16 * Math.max(agl, 0.1)) / this.span, 0.05, 10);
    const geFactor = (hb * hb) / (1 + hb * hb); // -> 0 near ground
    cl += cl * 0.10 * (1 - geFactor);

    // --- Drag ---
    let cd = st.cd0 + st.kInduced * cl * cl * geFactor
      + flap * flap * 0.055 + st.gearAnim * 0.018 + (st.spoilers ? 0.055 : 0);
    // Transonic / wave drag
    if (st.supersonic) {
      cd += 0.028 * Math.exp(-Math.pow((M - 1.03) / 0.13, 2)) + (M > 1.15 ? 0.006 : 0);
      if (M > st.mmo) cd += (M - st.mmo) * 0.5;
    } else {
      const mcrit = st.mmo - 0.02;
      if (M > mcrit) cd += 14 * Math.pow(M - mcrit, 2);
    }

    // --- Thrust ---
    const densityFactor = Math.pow(rho / RHO0, 0.72);
    let thrust = st.n1 * st.maxThrust * densityFactor;
    if (st.supersonic && st.throttle > 0.95) thrust *= 1.45; // reheat
    if (st.reversers && st.onGround) thrust = -0.45 * st.n1 * st.maxThrust * densityFactor;

    // --- Assemble world-frame forces ---
    const qbar = 0.5 * rho * V * V;
    const force = new THREE.Vector3(0, -st.mass * G, 0);
    const fwdW = _v3.set(0, 0, -1).applyQuaternion(st.quat);
    force.addScaledVector(fwdW, thrust);

    if (V > 2) {
      const vHat = relVel.clone().divideScalar(V);
      const upW = new THREE.Vector3(0, 1, 0).applyQuaternion(st.quat);
      const liftDir = upW.clone().addScaledVector(vHat, -upW.dot(vHat));
      if (liftDir.lengthSq() > 1e-6) liftDir.normalize();
      force.addScaledVector(liftDir, qbar * st.S * cl);
      force.addScaledVector(vHat, -qbar * st.S * cd);
      const rightW = new THREE.Vector3(1, 0, 0).applyQuaternion(st.quat);
      force.addScaledVector(rightW, qbar * st.S * st.C.cyBeta * beta * 0.5);
    }

    // --- Moments (angular accelerations) ---
    const eff = clamp(st.qbarRef / Math.max(qbar, 1), 0, 1) * clamp(V / 45, 0, 1);
    const C = st.C;
    const b = st.span, c = st.chord;
    const ctl = st.controls;
    let da = ctl.roll, de = ctl.pitch + st.trim, dr = ctl.yaw;
    if (arcade) dr += ctl.roll * 0.35; // auto-coordination

    const qbS = qbar * st.S;
    const nd = V > 1 ? 1 / (2 * V) : 0;
    let Lm = qbS * b * (C.clDa * da * eff + C.clP * st.rates.p * b * nd + C.clBeta * beta);
    let Mm = qbS * c * (C.cm0 + C.cmAlpha * alpha + C.cmDe * de * eff + C.cmQ * st.rates.q * c * nd
      - flap * 0.05 - (stalled ? clamp((alpha - alphaStall) * 1.8, 0, 0.9) : 0));
    let Nm = qbS * b * (C.cnBeta * beta + C.cnDr * dr * eff + C.cnR * st.rates.r * b * nd);

    // Stall buffet & (realistic) wing drop
    st.buffet = stalled ? clamp01((alpha - alphaStall) * 8) : Math.max(0, st.buffet - dt * 2);
    if (st.buffet > 0.01) {
      Lm += (Math.random() - 0.5) * st.buffet * qbS * b * 0.03;
      Mm += (Math.random() - 0.5) * st.buffet * qbS * c * 0.05;
      if (!arcade && stalled) Lm += Math.sin(st.pos.x * 0.13 + st.pos.z * 0.31) * qbS * b * 0.02;
    }
    st.stallWarn = alpha > alphaStall - 1.5 * DEG2RAD && st.iasKts > 40 && !st.onGround;

    st.rates.p += (Lm / st.Ix) * dt;
    st.rates.q += (Mm / st.Iy) * dt;
    st.rates.r += (Nm / st.Iz) * dt;
    // Separated flow at extreme alpha kills pitch momentum — prevents
    // full-elevator backflips while leaving normal stalls dynamic.
    if (Math.abs(alpha) > 0.42) {
      const dq = Math.exp(-2.2 * dt);
      st.rates.q *= dq; st.rates.p *= dq;
    }

    // --- Ground contact ---
    const omegaBody = _v2.set(st.rates.q, -st.rates.r, -st.rates.p);
    const omegaWorld = omegaBody.clone().applyQuaternion(st.quat);
    let anyContact = false;
    const torque = new THREE.Vector3();

    if (st.gearAnim > 0.85 && !st.collapsed) {
      const kSpring = st.mass * G * 3.2;
      const cDamp = st.mass * 3.5;
      const fwdH = fwdW.clone().setY(0).normalize();
      const sideDir = new THREE.Vector3(-fwdH.z, 0, fwdH.x);
      for (const [name, local] of Object.entries(st.gearPoints)) {
        const rw = local.clone().applyQuaternion(st.quat);
        const wp = rw.clone().add(st.pos);
        const pen = groundY - wp.y;
        const vp = st.vel.clone().add(_v1.copy(omegaWorld).cross(rw));
        if (pen > 0) {
          anyContact = true;
          if (!st.gearWasGrounded[name]) {
            st.gearWasGrounded[name] = true;
            st.events.push({ type: 'touchdown', gear: name, vsFpm: -vp.y * M2FT * 60, iasKts: st.iasKts });
          }
          const N = clamp(kSpring * Math.min(pen, 0.6) - cDamp * vp.y, 0, st.mass * G * 2.5);
          // Only the vertical (strut) force produces torque — horizontal tire
          // forces are applied as pure forces, with yaw/caster dynamics handled
          // holistically below. (Per-gear side-friction torque made the model a
          // divergent shopping cart.)
          force.y += N;
          torque.add(_v1.copy(rw).cross(_v2.set(0, N, 0)));
          const vLong = vp.x * fwdH.x + vp.z * fwdH.z;
          const vSide = vp.x * sideDir.x + vp.z * sideDir.z;
          const rollMu = name === 'nose' ? 0.010 : 0.012 + st.brakes * 0.40;
          force.addScaledVector(fwdH, -Math.sign(vLong) * Math.min(rollMu * N, Math.abs(vLong) * st.mass * 0.5));
          force.addScaledVector(sideDir, -clamp(vSide * st.mass * 0.9, -0.7 * N, 0.7 * N));
        } else {
          st.gearWasGrounded[name] = false;
        }
      }
    }

    // Fuselage/wing strikes (scrape or crash — damage system decides).
    // Modeled as a stiff contact at the strike point: the normal force
    // produces a natural restoring moment (tail strike pushes the nose back
    // down) and friction is proportional to contact load, so a light scrape
    // costs little energy while a hard belly slide grinds to a stop.
    for (const [name, local] of Object.entries(st.strikePoints)) {
      const rs = local.clone().applyQuaternion(st.quat);
      const wp = rs.clone().add(st.pos);
      const pen = groundY - wp.y;
      if (pen > 0) {
        st.events.push({
          type: 'strike', part: name, iasKts: st.iasKts,
          vsFpm: st.vsFpm, gearDown: st.gearAnim > 0.85 && !st.collapsed
        });
        anyContact = true;
        const N = st.mass * G * clamp(pen * 4 - st.vel.y * 0.15, 0, 2.0);
        force.y += N;
        torque.add(_v1.copy(rs).cross(_v2.set(0, N, 0)));
        const vh = Math.hypot(st.vel.x, st.vel.z);
        if (vh > 0.5) {
          const fr = 0.5 * N / vh;
          force.x -= st.vel.x * fr;
          force.z -= st.vel.z * fr;
        }
        st.rates.p *= 0.97; st.rates.q *= 0.98; st.rates.r *= 0.98;
        break;
      }
    }

    if (torque.lengthSq() > 0) {
      const tb = torque.applyQuaternion(qInv);
      st.rates.q += (tb.x / st.Iy) * dt;
      st.rates.r += (-tb.y / st.Iz) * dt;
      st.rates.p += (-tb.z / st.Ix) * dt;
    }
    st.onGround = anyContact;
    if (anyContact) {
      // extra rotational damping on the ground
      const d = Math.exp(-3.5 * dt);
      st.rates.p *= d; st.rates.q *= Math.exp(-1.2 * dt);
      // Ground yaw dynamics: castering alignment toward the velocity vector
      // (tires resist skidding) + nosewheel steering from rudder input.
      const vHx = st.vel.x, vHz = st.vel.z;
      const speed = Math.hypot(vHx, vHz);
      if (speed > 0.6) {
        const fx = fwdW.x, fz = fwdW.z;
        const fl = Math.hypot(fx, fz) || 1;
        const crossY = (fz / fl) * (vHx / speed) - (fx / fl) * (vHz / speed);
        const dotF = clamp((fx * vHx + fz * vHz) / (fl * speed), -1, 1);
        const err = Math.atan2(crossY, dotF); // >0: velocity is left of the nose
        const steerMax = lerp(0.75, 0.045, clamp01(speed / 60));
        const rDes = clamp(st.controls.yaw * steerMax - err * 2.2, -1.0, 1.0);
        st.rates.r += (rDes - st.rates.r) * Math.min(6 * dt, 1);
        // braking pitches the nose down a touch
        st.rates.q -= st.brakes * 0.05 * clamp01(speed / 25) * dt;
      } else {
        st.rates.r *= Math.exp(-4 * dt);
      }
    }

    // Arcade auto-trim: bleed pitch rate toward zero hands-off.
    if (arcade && Math.abs(ctl.pitch) < 0.05 && !st.onGround) {
      st.trim = clamp(st.trim - st.rates.q * 0.10 * dt * 60 * 0.01, -0.5, 0.5);
    }

    // --- Integrate ---
    const accel = force.divideScalar(st.mass);
    st.gForce = clamp((accel.y + G) / G, -2, 5); // vertical load factor approx
    st.vel.addScaledVector(accel, dt);
    st.pos.addScaledVector(st.vel, dt);

    const wMag = omegaBody.set(st.rates.q, -st.rates.r, -st.rates.p).length();
    if (wMag > 1e-7) {
      _q1.setFromAxisAngle(_v1.copy(omegaBody).divideScalar(wMag), wMag * dt);
      st.quat.multiply(_q1).normalize();
    }

    // Hard floor: never sink below the ground plane.
    if (st.pos.y < groundY - 2) { st.pos.y = groundY - 2; st.vel.y = Math.max(st.vel.y, 0); }

    // --- Readouts ---
    st.vsFpm = st.vel.y * M2FT * 60;
    const fwd2 = _v1.set(0, 0, -1).applyQuaternion(st.quat);
    st.hdgDeg = wrap360(Math.atan2(fwd2.x, -fwd2.z) * RAD2DEG);
    st.pitchDeg = Math.asin(clamp(fwd2.y, -1, 1)) * RAD2DEG;
    const rightW2 = _v2.set(1, 0, 0).applyQuaternion(st.quat);
    st.bankDeg = Math.asin(clamp(rightW2.y, -1, 1)) * -RAD2DEG;
    st.altFt = (st.pos.y + (env.fieldElevM || 0)) * M2FT;
  }
}

export { FLAP_DETENTS };
