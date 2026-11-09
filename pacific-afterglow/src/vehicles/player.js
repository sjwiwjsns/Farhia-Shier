import * as THREE from 'three';
import { carGeometry, carMaterials, paintMaterial } from './carModel.js';
import { makeBeamMaterial } from '../world/props.js';
import {
  surfaceAt, groundHeight, pierHeight, pierAt, BOUNDS, SLAB_H, nearestRoadX, nearestRoadZ, WEST, EAST, NORTH, SOUTH,
} from '../world/layout.js';

const damp = THREE.MathUtils.damp;
const clamp = THREE.MathUtils.clamp;

// --- Car roster ---------------------------------------------------------------
// Three player cars, described the way a spec sheet would: mass, weight distribution,
// an engine torque curve in newton metres, real gear ratios, drag and tyre grip. The
// simulation below works everything else out from these. stats are 0..1 for the
// selection screen only.
export const CARS = {
  coupe: {
    name: 'CALDERA GT', model: 'coupe', blurb: 'Grand tourer · 450 hp V8, rear drive, balanced',
    stats: { speed: 0.8, accel: 0.72, grip: 0.76 }, spec: '450 HP · 1,580 KG · 305 KM/H',
    mass: 1580, front: 0.52, cgH: 0.47, drive: 'rwd',
    torque: [[900, 360], [2500, 480], [4500, 520], [6200, 500], [6900, 468], [7400, 405]],
    idle: 900, redline: 7400, gears: [3.31, 2.13, 1.55, 1.19, 0.97, 0.79], final: 3.7, eff: 0.88, shift: 0.2,
    cdA: 0.7, clA: 0.3, aeroFront: 0.45, mu: 1.1, rollFront: 0.57, brakeBias: 0.63, brakeG: 1.3, steerLock: 0.6,
    roll: 0.0065, rollMax: 0.09, pitch: 0.0028, nitro: 0.45, engine: 'v8',
  },
  muscle: {
    name: 'VANTA SS', model: 'muscle', blurb: 'Muscle car · 465 hp big-block, huge torque, loose tail',
    stats: { speed: 0.74, accel: 0.74, grip: 0.5 }, spec: '465 HP · 1,760 KG · 290 KM/H',
    mass: 1760, front: 0.54, cgH: 0.53, drive: 'rwd',
    torque: [[750, 500], [2000, 610], [3800, 650], [5000, 622], [5800, 570], [6400, 495]],
    idle: 750, redline: 6400, gears: [2.66, 1.78, 1.3, 1.0, 0.74], final: 3.73, eff: 0.85, shift: 0.28,
    cdA: 0.92, clA: 0.05, aeroFront: 0.5, mu: 1.04, rollFront: 0.52, brakeBias: 0.66, brakeG: 1.15, steerLock: 0.58,
    roll: 0.0095, rollMax: 0.12, pitch: 0.0042, nitro: 0.5, engine: 'bigblock',
  },
  super: {
    name: 'VENTUS R', model: 'super', blurb: 'Mid-engine supercar · 640 hp V10, track grip',
    stats: { speed: 0.97, accel: 0.95, grip: 0.96 }, spec: '640 HP · 1,420 KG · 345 KM/H',
    mass: 1420, front: 0.42, cgH: 0.41, drive: 'rwd',
    torque: [[1100, 370], [3000, 500], [5000, 580], [6800, 600], [8200, 555], [8800, 495]],
    idle: 1100, redline: 8800, gears: [3.13, 2.19, 1.63, 1.29, 1.03, 0.84, 0.69], final: 3.9, eff: 0.9, shift: 0.09,
    cdA: 0.78, clA: 1.15, aeroFront: 0.4, mu: 1.22, rollFront: 0.6, brakeBias: 0.58, brakeG: 1.5, steerLock: 0.56,
    roll: 0.0035, rollMax: 0.05, pitch: 0.0018, nitro: 0.4, engine: 'v10',
  },
};
export const CAR_ORDER = ['coupe', 'muscle', 'super'];

// Handling modes. Easy is a modern car with every driver aid on plus a little steering
// help for keys and thumbs; Sport keeps ABS and a loose traction control that lets the
// tail move; Simulation is the bare machine. tc is how much of the engine's excess the
// traction control takes away (1 all of it, 0 none).
export const HANDLING = {
  easy: { label: 'EASY HANDLING', abs: true, tc: 1, esc: true, grip: 1.16, steerMargin: 0.06, counter: 0.85, align: true, wet: 0.35 },
  sport: { label: 'SPORT HANDLING', abs: true, tc: 0.55, esc: false, grip: 1.0, steerMargin: 0.1, counter: 0.55, align: false, wet: 1 },
  sim: { label: 'SIMULATION HANDLING', abs: false, tc: 0, esc: false, grip: 1.0, steerMargin: 0.15, counter: 0.25, align: false, wet: 1 },
};

const G = 9.81, AIR = 1.2;
// Grip and rolling drag per surface: [friction multiplier, rolling resistance coefficient].
const SURFACES = { road: [1, 0.013], curb: [0.9, 0.02], grass: [0.55, 0.09], sand: [0.45, 0.24] };

// Engine torque in N·m at an engine speed, from the car's curve.
function torqueAt(def, rpm) {
  const c = def.torque;
  if (rpm <= c[0][0]) return c[0][1];
  for (let i = 1; i < c.length; i++) {
    if (rpm <= c[i][0]) return c[i - 1][1] + (c[i][1] - c[i - 1][1]) * (rpm - c[i - 1][0]) / (c[i][0] - c[i - 1][0]);
  }
  return c[c.length - 1][1];
}

// Magic-formula tyre: normalised force for a slip angle. Peaks near 8 degrees and falls
// to about three quarters once the tyre is sliding, which is what makes a drift holdable.
function tyreCurve(alpha) {
  const B = 9.5, C = 1.45, E = 0.25;
  const x = B * alpha;
  return Math.sin(C * Math.atan(x - E * (x - Math.atan(x))));
}

// Deterministic per-position noise, so coincident vertices of a non-indexed mesh move together.
function hash3(x, y, z) {
  const s = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  return s - Math.floor(s);
}

// Split a light cluster geometry into its left and right halves so each can break alone.
function splitSides(geo) {
  const pos = geo.attributes.position.array, nor = geo.attributes.normal.array;
  const sides = [[[], []], [[], []]];
  for (let t = 0; t < pos.length; t += 9) {
    const side = pos[t] + pos[t + 3] + pos[t + 6] < 0 ? 0 : 1;
    for (let k = 0; k < 9; k++) { sides[side][0].push(pos[t + k]); sides[side][1].push(nor[t + k]); }
  }
  return sides.map(([p, n]) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(n, 3));
    return g;
  });
}

// --- Player car ---------------------------------------------------------------
export class PlayerCar {
  constructor(scene, renderer, key = 'coupe') {
    this.mode = 'easy'; // 'easy', 'sport' or 'sim' (see HANDLING)
    this.aids = HANDLING.easy;
    this.mats = carMaterials(renderer);
    this.paint = paintMaterial('#df6339');
    this.group = new THREE.Group();
    this.body = new THREE.Group();
    this.group.add(this.body);
    this.lightMats = { head: [], tail: [] };
    for (let i = 0; i < 2; i++) {
      this.lightMats.head.push(new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff4dc, emissiveIntensity: 2, roughness: 0.2 }));
      this.lightMats.tail.push(new THREE.MeshStandardMaterial({ color: 0x400806, emissive: 0xff2412, emissiveIntensity: 1.5, roughness: 0.3 }));
    }

    // Headlights: two real spotlights for night driving plus faint volumetric beams.
    this.spots = [];
    for (const side of [-1, 1]) {
      const spot = new THREE.SpotLight(0xfff1d8, 0, 70, 0.42, 0.55, 1.4);
      this.group.add(spot, spot.target);
      this.spots.push(spot);
    }
    const beamGeo = new THREE.CylinderGeometry(0.12, 3.2, 16, 16, 1, true);
    beamGeo.translate(0, -8, 0);
    beamGeo.rotateX(-Math.PI / 2 + 0.06);
    this.beamMat = makeBeamMaterial(0xfff0d0);
    this.beams = [];
    for (let i = 0; i < 2; i++) {
      const beam = new THREE.InstancedMesh(beamGeo, this.beamMat, 1);
      beam.userData.noAO = true;
      beam.layers.set(1);
      beam.frustumCulled = false;
      this.group.add(beam);
      this.beams.push(beam);
    }
    scene.add(this.group);
    this.setModel(key);
    this.reset(0, 0, 0);
  }

  // Swap the body, wheels and handling for another car in the roster.
  setModel(key) {
    if (!CARS[key]) key = 'coupe';
    this.key = key;
    this.def = CARS[key];
    for (const o of [...this.body.children]) { this.body.remove(o); o.geometry.dispose(); }
    for (const w of this.wheels || []) this.group.remove(w.pivot);
    const geo = carGeometry(this.def.model);
    this.dims = geo.type;
    // Chassis constants worked out once from the spec sheet and the body's dimensions.
    {
      const D = this.def, L = (geo.type.wheels[1] - geo.type.wheels[0]) * geo.type.length;
      this.chassis = {
        L, a: L * (1 - D.front), b: L * D.front, track: geo.type.track * 2, R: geo.type.wheelR,
        Iz: D.mass * L * (1 - D.front) * L * D.front * 1.05, Fz0: D.mass * G / 4,
        peakTorque: Math.max(...D.torque.map(t => t[1])),
      };
    }
    this.exhausts = geo.exhausts.map(e => e.clone());
    const m = this.mats;
    const slot = { paint: this.paint, glass: m.glass, trim: m.trim, dark: m.dark, chrome: m.chrome, plate: m.plate };
    // Every body part is our own copy, so dents never touch the shared geometry cache.
    this.deformables = [];
    const deformable = geometry => {
      const d = {
        geo: geometry,
        basePos: Float32Array.from(geometry.attributes.position.array),
        baseNormal: Float32Array.from(geometry.attributes.normal.array),
        weight: new Float32Array(geometry.attributes.position.count),
      };
      this.deformables.push(d);
      return d;
    };
    for (const [k, g] of Object.entries(geo.parts)) {
      if (k === 'head' || k === 'tail') {
        splitSides(g).forEach((half, i) => {
          const mesh = new THREE.Mesh(half, this.lightMats[k][i]);
          mesh.userData.own = true;
          this.body.add(mesh);
          deformable(half);
        });
        continue;
      }
      const mesh = new THREE.Mesh(g.clone(), slot[k]);
      mesh.userData.own = true;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.body.add(mesh);
      const d = deformable(mesh.geometry);
      if (k === 'paint') {
        this.shell = d.geo;
        this.basePos = d.basePos;
      }
    }
    // Wheels: pivot (steering) > mount (side) > spin (rolling).
    this.wheels = geo.wheels.map(w => {
      const pivot = new THREE.Group();
      pivot.position.set(w.x, w.y, w.z);
      const mount = new THREE.Group();
      if (w.side < 0) mount.rotation.y = Math.PI; // mirror by rotation so faces stay outward
      pivot.add(mount);
      const spin = new THREE.Group();
      mount.add(spin);
      for (const [part, mat] of [['tire', m.tire], ['rim', m.rim], ['disc', m.disc]]) {
        const mesh = new THREE.Mesh(geo.wheel[part], mat);
        mesh.castShadow = true;
        spin.add(mesh);
      }
      mount.add(new THREE.Mesh(geo.wheel.caliper, m.caliper));
      this.group.add(pivot);
      return { ...w, pivot, spin, mount, compress: 0 };
    });
    // Lamps sit at the nose of whichever body is fitted.
    const nose = -this.dims.length / 2, lampY = this.key === 'super' ? 0.55 : 0.72;
    this.spots.forEach((spot, i) => {
      const side = i ? 1 : -1;
      spot.position.set(side * 0.62, lampY, nose + 0.15);
      spot.target.position.set(side * 1.6, -0.6, nose - 20);
    });
    this.beams.forEach((beam, i) => {
      beam.setMatrixAt(0, new THREE.Matrix4().makeTranslation((i ? 1 : -1) * 0.62, lampY, nose));
      beam.instanceMatrix.needsUpdate = true;
    });
    this.repair();
  }

  // Easy handling (the default) keeps the assists described in HANDLING.
  get assist() { return this.mode === 'easy'; }
  set assist(on) { this.setHandling(on ? 'easy' : 'sport'); }
  setHandling(mode) {
    this.mode = HANDLING[mode] ? mode : 'easy';
    this.aids = HANDLING[this.mode];
  }

  setColor(hex) {
    this.paint.color.set(hex);
  }

  // Every respawn brings the car back fresh from the body shop.
  reset(x, z, heading) {
    this.repair();
    this.x = x;
    this.z = z;
    this.y = this.groundAt(x, z, 0);
    this.heading = heading;
    this.vx = 0;
    this.vz = 0;
    this.yawRate = 0;
    this.steer = 0;
    this.wheelAngle = 0;
    this.ax = 0; // body accelerations, filtered: they drive weight transfer and body motion
    this.ay = 0;
    this.lock = 0; // 0..1, wheels locked under braking
    this.escActive = false;
    this.handbrakeTimer = 0;
    this.shiftHold = 0;
    this.pedal = 0;
    this.gear = 1;
    this.rpm = this.def.idle;
    this.shiftTimer = 0;
    this.nitro = 100;
    this.boosting = false;
    this.throttle = 0;
    this.brake = 0;
    this.handbrake = false;
    this.slip = 0;
    this.wheelspin = 0;
    this.impact = 0;
    this.contact = null;
    this.scrape = null;
    this.pendingHit = null;
    this.dentCooldown = 0;
    this.pitch = 0;
    this.roll = 0;
    this.pitchVel = 0;
    this.rollVel = 0;
    this.heave = 0;
    this.heaveVel = 0;
    this.wheelAngle = 0;
    this.surface = 'road';
    this.prevLong = 0;
    this.distance = 0;
    this.sync();
  }

  get speed() {
    return this.vx * -Math.sin(this.heading) + this.vz * -Math.cos(this.heading);
  }

  get kmh() {
    return Math.abs(this.speed) * 3.6;
  }

  groundAt(x, z, currentY) {
    const pier = pierHeight(x, z);
    const base = groundHeight(x);
    if (pier !== null && (currentY > pier - 1.2 || x > pierAt(x, z).x0)) return pier;
    const s = surfaceAt(x, z);
    return s === 'curb' || s === 'grass' ? base + SLAB_H : base;
  }

  // One simulation step. The tyre model is stiff, so each call is integrated in two halves.
  update(dt, input, world) {
    const D = this.def, C = this.chassis, A = this.aids;
    const lastX = this.x, lastZ = this.z;
    this.surface = surfaceAt(this.x, this.z);
    const onPier = pierHeight(this.x, this.z) !== null && this.y > 1;
    const surf = onPier ? SURFACES.curb : SURFACES[this.surface] || SURFACES.road;
    const loose = this.surface === 'sand' && !onPier ? 1 : this.surface === 'grass' ? 0.5 : 0;
    const wet = this.surface === 'road' ? (world.wetness || 0) * 0.22 * A.wet : 0;
    const mu = D.mu * surf[0] * A.grip * (1 - wet);

    // --- Controls -----------------------------------------------------------------
    this.throttle = input.throttle;
    this.brake = input.brake;
    this.handbrake = input.handbrake;
    const fx = -Math.sin(this.heading), fz = -Math.cos(this.heading);
    const speedNow = this.vx * fx + this.vz * fz;
    const absV = Math.abs(speedNow);
    // The brake pedal becomes the reverse pedal once the car has stopped (and back again).
    if (this.gear === -1) {
      if (speedNow > -0.6 && input.throttle > 0 && input.brake === 0) this.gear = 1;
    } else if (speedNow < 0.6 && input.brake > 0 && input.throttle === 0) this.gear = -1;
    else if (speedNow < -1.5) this.gear = -1;
    const reversing = this.gear === -1;
    // A foot takes a moment to cross the pedal's travel, which is also what makes a
    // keyboard's all-or-nothing throttle driveable.
    const wantPedal = reversing ? input.brake : input.throttle; // toward where the gearbox points
    this.pedal += clamp(wantPedal - this.pedal, -7 * dt, (this.pedal < 0.35 ? 5 : 2.4) * dt);
    if (this.pedal < 0.001) this.pedal = 0;
    const pedal = this.pedal;
    const braking = reversing ? input.throttle : input.brake;

    // Nitrous: more torque while it lasts.
    this.boosting = input.nitro && input.throttle > 0 && this.nitro > 1 && speedNow > 3 && !reversing;
    this.nitro = clamp(this.nitro + (this.boosting ? -22 : 9) * dt, 0, 100);

    // Gearbox: automatic. It shifts up early on a light foot and holds gears under power.
    const gears = D.gears;
    const ratio = (reversing ? gears[0] * 1.05 : gears[this.gear - 1]) * D.final;
    const wheelRpm = (absV / C.R) * (30 / Math.PI);
    const engineRpm = wheelRpm * ratio;
    this.shiftHold -= dt;
    if (this.shiftTimer > 0) this.shiftTimer -= dt;
    else if (!reversing && this.shiftHold <= 0) {
      const up = D.redline * (0.5 + 0.47 * pedal);
      const down = D.redline * (0.2 + 0.14 * pedal);
      const lowerRpm = this.gear > 1 ? wheelRpm * gears[this.gear - 2] * D.final : Infinity;
      if (engineRpm > up && this.gear < gears.length) {
        this.gear++; this.shiftTimer = D.shift; this.shiftHold = D.shift + 0.5; this.onShift?.(1);
      } else if (this.gear > 1 && (engineRpm < down || (pedal > 0.9 && lowerRpm < D.redline * 0.78))) {
        this.gear--; this.shiftTimer = D.shift * 0.7; this.shiftHold = D.shift + 0.7; this.onShift?.(-1);
      }
    }
    // Below the clutch's bite point the engine runs free of the wheels (launch revs).
    const launchRpm = D.idle + (D.redline * 0.44 - D.idle) * pedal;
    const slipping = engineRpm < launchRpm;
    const targetRpm = clamp(Math.max(engineRpm, launchRpm), D.idle, D.redline);
    this.rpm = damp(this.rpm, this.shiftTimer > 0 ? targetRpm * 0.84 : targetRpm, slipping ? 7 : 16, dt);

    // Torque at the driven wheels, as a force at the contact patch.
    let driveForce = 0;
    if (this.shiftTimer <= 0) {
      if (pedal > 0 && this.rpm < D.redline - 40) {
        driveForce = torqueAt(D, this.rpm) * pedal * (this.boosting ? 1 + D.nitro : 1) * ratio * D.eff / C.R;
      } else if (pedal === 0 && absV > 2) {
        driveForce = -C.peakTorque * 0.1 * (this.rpm / D.redline) * ratio / C.R; // engine braking
      }
    }
    if (reversing) driveForce = -driveForce;
    const brakeForce = braking * D.brakeG * D.mass * G;

    // Steering: the road wheels cannot usefully turn further than the tyres can use, so
    // the lock narrows with speed. Hands off, they trail along the direction of travel,
    // which is also what catches a slide.
    const lx = -Math.cos(this.heading), lz = Math.sin(this.heading); // the car's left
    const uNow = speedNow, vNow = this.vx * lx + this.vz * lz;
    const speed = Math.hypot(uNow, vNow);
    const steerSS = Math.atan(C.L * mu * G / Math.max(speed * speed, 1));
    const maxSteer = Math.min(D.steerLock, steerSS + A.steerMargin + 0.085 + 0.12 * A.counter);
    // Counter-steer comes from how far the tail has stepped out (the rear slip angle).
    const trail = uNow > 4 ? clamp(Math.atan2(vNow - C.b * this.yawRate, uNow), -0.55, 0.55) * A.counter : 0;
    const wantAngle = clamp(input.steer * maxSteer + trail, -D.steerLock, D.steerLock);
    const turningIn = Math.abs(wantAngle) > Math.abs(this.wheelAngle);
    const steerRate = (turningIn ? 1.5 : 2.6) * (0.55 + 0.45 * Math.min(1, Math.abs(wantAngle - this.wheelAngle) / 0.12)) + (uNow > 4 ? Math.abs(trail) * 3 : 0);
    this.wheelAngle += clamp(wantAngle - this.wheelAngle, -steerRate * dt, steerRate * dt);
    this.steer = this.wheelAngle / D.steerLock;
    if (this.handbrake) this.handbrakeTimer = 0.7; else this.handbrakeTimer -= dt;

    // --- Dynamics -----------------------------------------------------------------
    const h = dt / 2;
    let spinSum = 0, lockSum = 0, slipSum = 0;
    this.escActive = false;
    for (let pass = 0; pass < 2; pass++) {
      const sh = Math.sin(this.heading), ch = Math.cos(this.heading);
      // Body frame: u forward, v to the left, r yaw rate (positive turns left).
      let u = -this.vx * sh - this.vz * ch;
      let v = -this.vx * ch + this.vz * sh;
      let r = this.yawRate;
      const delta = this.wheelAngle, cd = Math.cos(delta), sd = Math.sin(delta);

      // Wheel loads: static split, aerodynamic downforce, then weight transfer from the
      // accelerations the body is feeling. Tyres give a little less grip per newton as
      // they are loaded up, which is why the outside pair cannot make up what the inside loses.
      const q = 0.5 * AIR * u * u;
      const down = q * D.clA;
      const longShift = D.mass * this.ax * D.cgH / C.L;
      const Fzf = Math.max(D.mass * G * C.b / C.L + down * D.aeroFront - longShift, 0);
      const Fzr = Math.max(D.mass * G * C.a / C.L + down * (1 - D.aeroFront) + longShift, 0);
      const latShift = D.mass * this.ay * D.cgH / C.track;
      const axleGrip = (Fz, share) => {
        const d = clamp(latShift * share, -Fz / 2, Fz / 2);
        const w0 = Fz / 2 - d, w1 = Fz / 2 + d;
        return mu * (w0 * (1 - 0.13 * (w0 / C.Fz0 - 1)) + w1 * (1 - 0.13 * (w1 / C.Fz0 - 1)));
      };
      const capF = Math.max(axleGrip(Fzf, D.rollFront), 1), capR = Math.max(axleGrip(Fzr, 1 - D.rollFront), 1);

      // Slip angles from the velocity of each axle's contact patch.
      const vyF = v + C.a * r, vyR = v - C.b * r;
      const wxF = u * cd + vyF * sd, wyF = -u * sd + vyF * cd;
      const alphaF = -Math.atan2(wyF, Math.max(Math.abs(wxF), 1.5));
      const alphaR = -Math.atan2(vyR, Math.max(Math.abs(u), 1.5));
      let FyF = tyreCurve(alphaF) * capF, FyR = tyreCurve(alphaR) * capR;

      // Longitudinal demand per axle: brakes on both, engine on the rear.
      const dirU = u > 0.05 ? 1 : u < -0.05 ? -1 : 0;
      let brakeF = brakeForce * D.brakeBias, brakeR = brakeForce * (1 - D.brakeBias);
      let FxF = 0, FxR = 0, lockF = false, lockR = this.handbrake;
      // Anti-lock keeps each axle just inside what its tyres can hold while still steering.
      const room = (cap, Fy) => cap * Math.sqrt(Math.max(0.04, 1 - Math.min(1, (Fy / cap) ** 2 * 0.85)));
      if (A.abs) { brakeF = Math.min(brakeF, room(capF, FyF) * 0.97); brakeR = Math.min(brakeR, room(capR, FyR) * 0.97); } else {
        lockF = brakeF > capF * 1.02;
        lockR = lockR || brakeR > capR * 1.02;
      }
      let drive = driveForce;
      const spin = Math.max(0, Math.abs(drive) / capR - 1);
      // Traction control trims the engine toward what the rear tyres have left over from cornering.
      if (A.tc) {
        const lim = capR * 0.95 + (room(capR, FyR) - capR * 0.95) * A.tc;
        drive = clamp(drive, -lim, lim);
      }
      FxF = -dirU * brakeF;
      FxR = clamp(drive - dirU * brakeR, -capR * 0.95, capR * 0.95);
      // A locked wheel just drags: its force opposes whichever way the patch is sliding.
      if (lockF) {
        const sl = Math.hypot(wxF, wyF);
        if (sl > 0.3) { FxF = -capF * 0.82 * wxF / sl; FyF = -capF * 0.82 * wyF / sl; } else { FxF = 0; FyF *= 0.3; }
      } else FyF = Math.sign(FyF) * Math.min(Math.abs(FyF), capF * Math.sqrt(Math.max(0, 1 - (FxF / capF) ** 2)));
      if (lockR) {
        const sl = Math.hypot(u, vyR);
        if (sl > 0.3) { FxR = -capR * 0.8 * u / sl; FyR = -capR * 0.8 * vyR / sl; } else { FxR = 0; FyR *= 0.3; }
      } else FyR = Math.sign(FyR) * Math.min(Math.abs(FyR), capR * Math.sqrt(Math.max(0, 1 - (FxR / capR) ** 2)));

      // Stability control: brake a wheel to pull the yaw rate back to what the steering asks.
      let Mz = 0;
      if (A.esc && this.handbrakeTimer <= 0 && u > 7) {
        const beta = Math.atan2(v, u);
        const wantR = clamp(u * Math.tan(delta) / (C.L * (1 + 0.0022 * u * u)), -mu * G / u, mu * G / u);
        const err = r - wantR;
        if (Math.abs(err) > 0.07 || Math.abs(beta) > 0.09) {
          Mz = C.Iz * clamp(-err * 6.5 + beta * 5, -3.2, 3.2);
          u -= Math.min(Math.abs(err) + Math.abs(beta), 0.6) * 2.2 * h;
          this.escActive = true;
        }
      }

      // Resistances: air, and the tyres' rolling drag (which is what bogs a car down in sand).
      const drag = q * D.cdA * Math.sign(u);
      const rollMax = D.mass * Math.abs(u) / h;
      const rolling = Math.sign(u) * Math.min(surf[1] * D.mass * G, rollMax);

      const FX = FxF * cd - FyF * sd + FxR - drag - rolling;
      const FY = FxF * sd + FyF * cd + FyR;
      Mz += C.a * (FxF * sd + FyF * cd) - C.b * FyR;
      const ax = FX / D.mass, ay = FY / D.mass;
      const u0 = u;
      u += (ax + v * r) * h;
      v += (ay - u0 * r) * h;
      r += (Mz / C.Iz) * h;
      // Brakes stop the car; they never push it backwards.
      if ((braking > 0 || this.handbrake) && pedal === 0 && u0 * u < 0) u = 0;
      if (pedal === 0 && braking === 0 && Math.abs(u) < 0.06 && Math.abs(v) < 0.06) { u = 0; v = 0; }
      // At walking pace tyres simply roll where they point (no slip to speak of).
      const k = 1 - THREE.MathUtils.smoothstep(Math.hypot(u, v), 1.2, 5);
      if (k > 0) {
        const rKin = u * Math.tan(delta) / C.L;
        const pull = k * (1 - Math.exp(-h * 28));
        r += (rKin - r) * pull;
        v += (C.b * rKin - v) * pull;
      }
      if (reversing) u = Math.max(u, -16);

      // Body accelerations lag a little behind the tyres, as they do through real springs.
      const lag = 1 - Math.exp(-h * 11);
      this.ax += (ax - this.ax) * lag;
      this.ay += (ay - this.ay) * lag;
      this.yawRate = r;
      this.heading += r * h;
      const sh2 = Math.sin(this.heading), ch2 = Math.cos(this.heading);
      this.vx = -sh2 * u - ch2 * v;
      this.vz = -ch2 * u + sh2 * v;
      this.x += this.vx * h;
      this.z += this.vz * h;
      spinSum += spin;
      lockSum += (lockF || lockR) && Math.abs(u) > 2 ? 1 : 0;
      // Sliding speed of the tyres once they are past their peak (smoke, squeal and skid marks).
      const past = a => THREE.MathUtils.smoothstep(Math.abs(a), 0.1, 0.22);
      slipSum += Math.max(Math.abs(vyR) * past(alphaR), Math.abs(wyF) * 0.7 * past(alphaF));
    }
    this.wheelspin = clamp(spinSum * 0.5 * (1.2 - 0.6 * A.tc), 0, 1) * (absV < 45 ? 1 : 0);
    this.lock = lockSum / 2;
    this.slip = slipSum / 2;

    // Road assist (Easy): with the wheel centred on a street, the car settles parallel to
    // it, so nudges with the keys or a thumb never leave it crabbing toward the curb.
    if (A.align && Math.abs(input.steer) < 0.05 && Math.abs(this.wheelAngle) < 0.05 && absV > 5 && !this.handbrake && this.surface === 'road') {
      const quarter = Math.PI / 2;
      const off = this.heading - Math.round(this.heading / quarter) * quarter;
      if (Math.abs(off) < 0.3) {
        const turn = off * Math.min(1, 1.6 * dt);
        this.heading -= turn;
        const c = Math.cos(-turn), sn = Math.sin(-turn);
        const nvx = this.vx * c + this.vz * sn, nvz = -this.vx * sn + this.vz * c;
        this.vx = nvx; this.vz = nvz;
      }
    }

    this.impact = 0;
    this.collide(world, lastX, lastZ);
    this.distance += Math.hypot(this.x - lastX, this.z - lastZ);
    this.dentCooldown -= dt;

    // Ground following and suspension: the body pitches, rolls and heaves on springs.
    const gy = this.groundAt(this.x, this.z, this.y);
    if (gy - this.y > 0.08 && gy - this.y < 0.3) this.heaveVel -= (gy - this.y) * 9; // curb bump
    if (this.y - gy > 0.08 && this.y - gy < 0.3) this.heaveVel += (this.y - gy) * 5; // dropping off a curb
    this.y = damp(this.y, gy, gy > this.y ? 22 : 9, dt);
    const slope = this.slopeAt();
    // Loose ground and kerbs shake the body a little.
    const rough = loose * Math.min(absV / 12, 1) * 0.012;
    this.spring('pitch', clamp(this.ax * D.pitch, -D.rollMax * 0.75, D.rollMax * 0.55) + slope + (Math.random() - 0.5) * rough, 70, 9, dt);
    this.spring('roll', clamp(this.ay * D.roll, -D.rollMax, D.rollMax) + (Math.random() - 0.5) * rough, 60, 7, dt);
    this.spring('heave', 0, 90, 10, dt);
    this.sync();
    const vLong = this.speed;
    for (const w of this.wheels) {
      // Driven wheels spin up when they break traction; locked wheels stop turning.
      const rate = w.front ? (this.lock && !this.handbrake ? 0.15 : 1) : this.handbrake || this.lock ? 0.05 : 1 + this.wheelspin * 2.5;
      const roll = w.front || this.wheelspin < 0.05 ? vLong : Math.max(Math.abs(vLong), 6 * this.wheelspin) * (reversing ? -1 : 1);
      w.spin.rotation.x -= (roll * rate * dt) / C.R * (w.side < 0 ? -1 : 1);
      if (w.front) w.pivot.rotation.y = this.wheelAngle;
    }
  }

  slopeAt() {
    const P = pierAt(this.x, this.z);
    if (P && this.x > P.x0 && this.y > 0.2) {
      const grade = Math.atan2(P.deckY - SLAB_H, P.rampStart - P.x0);
      // Positive pitch raises the nose; we climb when heading west.
      return grade * Math.sin(this.heading);
    }
    return 0;
  }

  spring(name, target, k, c, dt) {
    const vel = name + 'Vel';
    const a = (target - this[name]) * k - this[vel] * c;
    this[vel] += a * dt;
    this[name] += this[vel] * dt;
  }

  sync() {
    this.group.position.set(this.x, this.y + this.heave * 0.4, this.z);
    this.group.rotation.set(0, this.heading, 0);
    this.body.rotation.set(this.pitch, 0, -this.roll);
    this.body.position.y = this.heave * 0.3;
    // Wheels follow the springs a little, so the body moves over them.
    for (const w of this.wheels) {
      const travel = -this.roll * w.side * this.dims.track * 0.35 + this.pitch * w.z * 0.35;
      w.pivot.position.y = w.y + clamp(travel, -0.06, 0.06) * 0.5;
    }
  }

  collide(world, lastX, lastZ) {
    const r = 1.05; // two circles along the car
    const fx = -Math.sin(this.heading), fz = -Math.cos(this.heading);
    for (let iter = 0; iter < 2; iter++) {
      for (let k = 0; k < 2; k++) {
        const off = k ? 1.35 : -1.35;
        const cx = this.x + fx * off, cz = this.z + fz * off;
        // Buildings and shelters (axis-aligned boxes).
        world.boxGrid.near(cx, cz, r, b => {
          if (Math.abs(cx - b.x) > b.w + r || Math.abs(cz - b.z) > b.d + r) return;
          const px = clamp(cx, b.x - b.w, b.x + b.w), pz = clamp(cz, b.z - b.d, b.z + b.d);
          let nx = cx - px, nz = cz - pz;
          let d = Math.hypot(nx, nz);
          if (d < 1e-4) {
            // Center inside: push out the shortest way.
            const ox = b.w - Math.abs(cx - b.x), oz = b.d - Math.abs(cz - b.z);
            if (ox < oz) { nx = Math.sign(cx - b.x); nz = 0; d = -ox; } else { nx = 0; nz = Math.sign(cz - b.z); d = -oz; }
          } else { nx /= d; nz /= d; }
          if (d < r) this.resolve(nx, nz, r - d, 0.25, cx - nx * r, cz - nz * r);
        });
        // Thin round obstacles: palm trunks and poles, plus the pier piles when driving under it.
        const hitCircle = t => {
          const dx = cx - t.x, dz = cz - t.z;
          if (Math.abs(dx) > 3 || Math.abs(dz) > 3) return;
          const d = Math.hypot(dx, dz), min = r + t.r;
          if (d < min && d > 1e-4) this.resolve(dx / d, dz / d, min - d, 0.2, t.x + (dx / d) * t.r, t.z + (dz / d) * t.r);
        };
        world.circleGrid.near(cx, cz, 3, hitCircle);
        if (this.y < (pierHeight(cx, cz) ?? -9) - 1) world.pileGrid.near(cx, cz, 3, hitCircle);
      }
    }
    // Pier rails and the drop off its end.
    const P = pierAt(lastX, lastZ) || pierAt(this.x, this.z);
    if (P && this.y > 1.2) {
      const lim = P.halfWidth - 1.1;
      if (Math.abs(this.z - P.z) > lim) this.resolve(0, -Math.sign(this.z - P.z), Math.abs(this.z - P.z) - lim, 0.15);
      if (this.x < P.x1 + 3) this.resolve(1, 0, P.x1 + 3 - this.x, 0.15);
    }
    // Walk under the pier ramp only where it is high enough.
    const ramp = pierHeight(this.x, this.z);
    const R = pierAt(this.x, this.z);
    if (R && this.x > R.x0 && this.y < ramp - 0.9 && this.x < -345) {
      const side = Math.sign(this.z - R.z) || 1;
      this.resolve(0, side, R.halfWidth + 0.2 - Math.abs(this.z - R.z), 0.2);
    }
    // World bounds (barriers and the sea).
    const minX = P && this.y > 1.2 ? P.x1 + 3 : BOUNDS.minX;
    if (this.x < minX) this.resolve(1, 0, minX - this.x, 0.2);
    if (this.x > BOUNDS.maxX) this.resolve(-1, 0, this.x - BOUNDS.maxX, 0.3);
    if (this.z < BOUNDS.minZ) this.resolve(0, 1, BOUNDS.minZ - this.z, 0.3);
    if (this.z > BOUNDS.maxZ) this.resolve(0, -1, this.z - BOUNDS.maxZ, 0.3);
  }

  // Push out along n and remove the velocity going into the surface. (px, pz) is the
  // contact point, used for sparks and dents.
  resolve(nx, nz, depth, bounce, px = this.x - nx * 2, pz = this.z - nz * 2) {
    this.x += nx * depth;
    this.z += nz * depth;
    const vn = this.vx * nx + this.vz * nz;
    if (vn < 0) {
      // Sliding along the surface scrapes; hitting it square dents.
      const tx = this.vx - vn * nx, tz = this.vz - vn * nz;
      const tangent = Math.hypot(tx, tz);
      if (tangent > 6 && (!this.scrape || tangent > this.scrape.speed)) this.scrape = { x: px, z: pz, speed: tangent, nx, nz };
      const glancing = this.assist && tangent > -vn * 1.2;
      // Easy handling: a glancing hit slides along the wall instead of stopping dead.
      const b = glancing ? 0 : bounce;
      this.vx -= (1 + b) * vn * nx;
      this.vz -= (1 + b) * vn * nz;
      const keep = glancing ? 0.985 : 0.9;
      this.vx *= keep;
      this.vz *= keep;
      if (glancing && tangent > 4) {
        // Turn the nose to follow the wall.
        const along = Math.atan2(-tx, -tz);
        let d = along - this.heading;
        d = Math.atan2(Math.sin(d), Math.cos(d));
        if (Math.abs(d) < 1.2) this.heading += d * 0.08;
      }
      this.impact = Math.max(this.impact, -vn);
      if (!this.contact || -vn > this.contact.speed) this.contact = { x: px, z: pz, speed: -vn, nx, nz };
      this.registerHit(px, pz, -vn);
      this.yawRate *= 0.6;
      // A hit away from the centre of mass spins the car (the assisted mode damps this out).
      if (!glancing) {
        const j = -(1 + b) * vn;
        const kick = ((pz - this.z) * nx - (px - this.x) * nz) * j / 2.6;
        this.yawRate += clamp(kick * (this.assist ? 0.15 : 0.45), -2.2, 2.2);
      }
    }
  }

  // --- Damage ----------------------------------------------------------------
  registerHit(x, z, speed) {
    if (!this.pendingHit || speed > this.pendingHit.speed) this.pendingHit = { x, z, speed };
  }

  // Called once per frame: turns the hardest hit into a dent in the body shell.
  applyDamage() {
    const hit = this.pendingHit;
    this.pendingHit = null;
    if (!hit || hit.speed < 3.5 || this.dentCooldown > 0) return;
    this.dentCooldown = 0.18;
    // Contact point in the car's frame (cars face local -Z).
    const dx = hit.x - this.x, dz = hit.z - this.z;
    const c = Math.cos(this.heading), s = Math.sin(this.heading);
    let lx = dx * c - dz * s, lz = dx * s + dz * c;
    // Clamp onto the body outline and dent inward, toward the center line.
    const L = this.dims.length / 2, W = this.dims.track + 0.1;
    lx = clamp(lx, -W, W);
    lz = clamp(lz, -L, L);
    const amount = clamp((hit.speed - 3) / 16, 0.05, 1);
    this.dent(lx, 0.62, lz, amount);
  }

  dent(lx, ly, lz, amount) {
    const R = 0.5 + amount * 0.55;
    const depth = 0.035 + amount * 0.13;
    // Push inward toward the car's middle, mostly along whichever axis was hit.
    const L = this.dims.length / 2;
    const front = Math.abs(lz) / L > Math.abs(lx) / this.dims.track;
    let ix = front ? -lx * 0.15 : -Math.sign(lx), iz = front ? -Math.sign(lz) : -lz * 0.1;
    const il = Math.hypot(ix, iz) || 1;
    ix /= il; iz /= il;
    const e1 = new THREE.Vector3(), e2 = new THREE.Vector3(), fn = new THREE.Vector3();
    for (const part of this.deformables) {
      const p = part.geo.attributes.position.array, n = part.geo.attributes.normal.array, b = part.basePos, w = part.weight;
      let touched = false;
      for (let i = 0, v = 0; i < p.length; i += 3, v++) {
        const dx = b[i] - lx, dy = (b[i + 1] - ly) * 1.3, dz = b[i + 2] - lz;
        const d2 = (dx * dx + dy * dy + dz * dz) / (R * R);
        if (d2 > 3) continue;
        // Deterministic per-position jitter keeps coincident vertices of every part together.
        const k = Math.exp(-d2 * 1.8) * (0.65 + 0.7 * hash3(b[i], b[i + 1], b[i + 2]));
        p[i] += ix * depth * k;
        p[i + 1] -= depth * 0.3 * k;
        p[i + 2] += iz * depth * k;
        // Metal only crumples so far.
        const ox = p[i] - b[i], oy = p[i + 1] - b[i + 1], oz = p[i + 2] - b[i + 2];
        const len = Math.hypot(ox, oy, oz);
        if (len > 0.26) { const f = 0.26 / len; p[i] = b[i] + ox * f; p[i + 1] = b[i + 1] + oy * f; p[i + 2] = b[i + 2] + oz * f; }
        w[v] = Math.min(1, w[v] + k);
        touched = true;
      }
      if (!touched) continue;
      // Crumpled panels catch the light in facets: blend dented normals toward face normals.
      for (let t = 0; t < p.length; t += 9) {
        const v0 = t / 3;
        if (Math.max(w[v0], w[v0 + 1], w[v0 + 2]) < 0.02) continue;
        e1.set(p[t + 3] - p[t], p[t + 4] - p[t + 1], p[t + 5] - p[t + 2]);
        e2.set(p[t + 6] - p[t], p[t + 7] - p[t + 1], p[t + 8] - p[t + 2]);
        fn.crossVectors(e1, e2).normalize();
        for (let j = 0; j < 3; j++) {
          const o = t + j * 3, f = Math.min(1, w[v0 + j] * 1.6), bn = part.baseNormal;
          const nx = bn[o] * (1 - f) + fn.x * f, ny = bn[o + 1] * (1 - f) + fn.y * f, nz = bn[o + 2] * (1 - f) + fn.z * f;
          const nl = Math.hypot(nx, ny, nz) || 1;
          n[o] = nx / nl; n[o + 1] = ny / nl; n[o + 2] = nz / nl;
        }
      }
      part.geo.attributes.position.needsUpdate = true;
      part.geo.attributes.normal.needsUpdate = true;
    }
    this.damage = Math.min(1, this.damage + amount * 0.18);
    // A hard hit on a corner smashes that lamp.
    if (amount > 0.3) {
      const side = lx < 0 ? 0 : 1;
      if (lz < -L + 0.9) this.broken.head[side] = true;
      if (lz > L - 0.9) this.broken.tail[side] = true;
    }
  }

  repair() {
    for (const part of this.deformables || []) {
      if (!part.weight.some(v => v > 0)) continue;
      part.geo.attributes.position.array.set(part.basePos);
      part.geo.attributes.normal.array.set(part.baseNormal);
      part.geo.attributes.position.needsUpdate = true;
      part.geo.attributes.normal.needsUpdate = true;
      part.weight.fill(0);
    }
    this.damage = 0;
    this.broken = { head: [false, false], tail: [false, false] };
  }

  // Lighting state, called every frame.
  setLights(night, braking) {
    const headOn = Math.max(night, 0.15);
    this.lightMats.head.forEach((mat, i) => {
      const ok = !this.broken.head[i];
      mat.emissiveIntensity = ok ? 1.5 + headOn * 9 : 0;
      mat.color.setScalar(ok ? 1 : 0.12);
      this.spots[i].intensity = ok ? night * 220 : 0;
      this.beams[i].visible = ok && night > 0.05;
    });
    this.lightMats.tail.forEach((mat, i) => {
      mat.emissiveIntensity = this.broken.tail[i] ? 0.05 : braking ? 6 : 1.1 + night * 1.2;
    });
    this.beamMat.uniforms.intensity.value = night * 0.06;
  }

  safeRespawn() {
    // Nearest lane on the closest road, facing along it.
    const rx = nearestRoadX(this.x), rz = nearestRoadZ(this.z);
    if (Math.abs(this.x - rx) < Math.abs(this.z - rz)) {
      const north = Math.cos(this.heading) > 0;
      this.reset(rx + (north ? 3.4 : -3.4), clamp(this.z, NORTH + 10, SOUTH - 10), north ? 0 : Math.PI);
    } else {
      const east = Math.sin(this.heading) < 0;
      this.reset(clamp(this.x, WEST + 10, EAST - 10), rz + (east ? 3.4 : -3.4), east ? -Math.PI / 2 : Math.PI / 2);
    }
  }
}
