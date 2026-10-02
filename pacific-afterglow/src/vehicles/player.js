import * as THREE from 'three';
import { carGeometry, carMaterials, paintMaterial } from './carModel.js';
import { makeBeamMaterial } from '../world/props.js';
import {
  surfaceAt, groundHeight, pierHeight, PIER, BOUNDS, SLAB_H, roadsX, roadsZ, nearestRoad,
} from '../world/layout.js';

const damp = THREE.MathUtils.damp;
const clamp = THREE.MathUtils.clamp;

// --- Car roster ---------------------------------------------------------------
// Three player cars. Each one has its own engine, gearbox, grip and body motion.
// stats are 0..1 for the selection screen only.
export const CARS = {
  coupe: {
    name: 'CALDERA GT', model: 'coupe', blurb: 'Grand tourer · balanced and forgiving',
    stats: { speed: 0.58, accel: 0.6, grip: 0.72 },
    power: 12.5, curve: [0.55, 1.15, 0.95], gears: [3.25, 2.15, 1.6, 1.25, 1.02, 0.86], final: 3.55,
    idle: 900, redline: 7400, drag: 0.0029, brake: 28, maxSpeed: 64,
    grip: 11, slideHold: 0.55, lat: 15, latDrift: 24, steer: 0.62, yawDamp: 7.5, powerSlide: 0,
    roll: 0.0065, rollMax: 0.09, pitch: 0.0028, nitro: 9, engine: 'v8',
  },
  muscle: {
    name: 'VANTA SS', model: 'muscle', blurb: 'Muscle car · huge torque, loose tail',
    stats: { speed: 0.66, accel: 0.76, grip: 0.45 },
    power: 14.2, curve: [0.86, 0.6, 0.72], gears: [2.9, 1.9, 1.4, 1.1, 0.88], final: 3.6,
    idle: 750, redline: 6400, drag: 0.0026, brake: 24, maxSpeed: 62,
    grip: 8.4, slideHold: 0.45, lat: 12.8, latDrift: 27, steer: 0.56, yawDamp: 6, powerSlide: 0.55,
    roll: 0.0095, rollMax: 0.12, pitch: 0.0042, nitro: 10.5, engine: 'bigblock',
  },
  super: {
    name: 'VENTUS R', model: 'super', blurb: 'Mid-engine supercar · track grip, 220 km/h',
    stats: { speed: 0.95, accel: 0.94, grip: 0.95 },
    power: 16, curve: [0.45, 1.25, 0.88], gears: [3.4, 2.3, 1.75, 1.4, 1.15, 0.97], final: 3.3,
    idle: 1100, redline: 8800, drag: 0.0016, brake: 33, maxSpeed: 80,
    grip: 13.5, slideHold: 0.65, lat: 19, latDrift: 22, steer: 0.6, yawDamp: 9, powerSlide: 0,
    roll: 0.0035, rollMax: 0.05, pitch: 0.0018, nitro: 9, engine: 'v10',
  },
};
export const CAR_ORDER = ['coupe', 'muscle', 'super'];

function torqueCurve(def, rpm) {
  // Normalized torque against engine speed; each car shapes its own band.
  const x = rpm / def.redline, [a, b, c] = def.curve;
  return clamp(a + b * x - c * x * x * x, 0.35, 1);
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
    if (pier !== null && (currentY > pier - 1.2 || x > PIER.x0)) return pier;
    const s = surfaceAt(x, z);
    return s === 'curb' || s === 'grass' ? base + SLAB_H : base;
  }

  update(dt, input, world) {
    const D = this.def;
    const fx = -Math.sin(this.heading), fz = -Math.cos(this.heading);
    const rx = Math.cos(this.heading), rz = -Math.sin(this.heading);
    let vLong = this.vx * fx + this.vz * fz;
    let vLat = this.vx * rx + this.vz * rz;
    const absV = Math.abs(vLong);
    this.surface = surfaceAt(this.x, this.z);
    const onPier = pierHeight(this.x, this.z) !== null && this.y > 1;
    const loose = this.surface === 'sand' && !onPier ? 1 : this.surface === 'grass' ? 0.5 : 0;

    this.throttle = input.throttle;
    this.brake = input.brake;
    this.handbrake = input.handbrake;
    const steerTarget = input.steer;
    const steerRate = Math.abs(steerTarget) > Math.abs(this.steer) ? 5.5 : 8;
    this.steer = damp(this.steer, steerTarget, steerRate, dt);

    // Nitro.
    this.boosting = input.nitro && input.throttle > 0 && this.nitro > 1 && vLong > 3;
    this.nitro = clamp(this.nitro + (this.boosting ? -22 : 9) * dt, 0, 100);

    // Gearbox: automatic with short shift cuts.
    const gears = D.gears;
    const wheelRpm = (absV / (2 * Math.PI * this.dims.wheelR)) * 60;
    const reversing = vLong < -0.5 || (this.brake > 0 && absV < 1.2 && this.throttle === 0);
    if (reversing) this.gear = -1;
    else if (this.gear === -1) this.gear = 1;
    const ratio = this.gear === -1 ? gears[0] : gears[this.gear - 1];
    const engineRpm = wheelRpm * ratio * D.final;
    if (this.shiftTimer > 0) this.shiftTimer -= dt;
    else if (this.gear > 0) {
      if (engineRpm > D.redline - 300 && this.gear < gears.length) { this.gear++; this.shiftTimer = 0.22; this.onShift?.(1); }
      else if (this.gear > 1 && engineRpm < D.redline * 0.36 && !(this.throttle && engineRpm > D.redline * 0.27)) { this.gear--; this.shiftTimer = 0.12; this.onShift?.(-1); }
    }
    // Free revving when the clutch is out or the wheels spin.
    const launch = this.throttle > 0 && absV < 6 && this.gear === 1;
    const targetRpm = clamp(Math.max(engineRpm, D.idle + (launch ? D.redline * 0.51 : 0) * this.throttle), D.idle, D.redline);
    this.rpm = damp(this.rpm, this.shiftTimer > 0 ? targetRpm * 0.82 : targetRpm, 12, dt);

    // Longitudinal forces.
    let accel = 0;
    if (this.throttle > 0 && this.gear > 0 && this.shiftTimer <= 0) {
      accel += D.power * torqueCurve(D, this.rpm) * (ratio / gears[0]) * this.throttle * (1 - loose * 0.35);
      if (this.boosting) accel += D.nitro;
    }
    if (this.brake > 0) {
      if (vLong > 0.6) accel -= D.brake * this.brake;
      else accel -= 7 * this.brake; // reverse
    }
    if (this.throttle > 0 && vLong < -0.6) accel += 26; // throttle while rolling back brakes
    // Aero drag and rolling resistance, more on sand.
    accel -= vLong * Math.abs(vLong) * (D.drag + loose * 0.006);
    accel -= Math.sign(vLong) * Math.min(Math.abs(vLong) / dt, 0.25 + loose * 2.6);
    if (!this.throttle && !this.brake) accel -= Math.sign(vLong) * Math.min(Math.abs(vLong) / dt, 0.9);
    if (this.handbrake) accel -= Math.sign(vLong) * Math.min(Math.abs(vLong) / dt, 5);
    vLong += accel * dt;
    vLong = clamp(vLong, -14, D.maxSpeed + (this.boosting ? 10 : 0));

    // Lateral grip: strong normally, breaks away with the handbrake or on sand.
    let grip = D.grip - loose * 6;
    if (this.handbrake) grip = 1.2;
    const slipRatio = Math.abs(vLat) / (absV + 4);
    if (slipRatio > 0.18 && !this.handbrake) grip *= D.slideHold; // already sliding: hold the drift
    // Rear-drive torque breaks the tail loose in low gears.
    if (D.powerSlide && this.gear > 0 && this.gear <= 2) {
      grip *= 1 - D.powerSlide * this.throttle * Math.abs(this.steer) * clamp(absV / 14, 0, 1);
    }
    vLat *= Math.exp(-grip * dt);
    this.slip = Math.abs(vLat);

    // Bicycle-model yaw with speed-sensitive steering.
    const wheelbase = (this.dims.wheels[1] - this.dims.wheels[0]) * this.dims.length;
    const maxSteer = D.steer / (1 + absV * 0.04);
    this.wheelAngle = this.steer * maxSteer;
    let targetYaw = (vLong * Math.tan(this.wheelAngle)) / wheelbase;
    // Tires can only hold so much cornering force; past that the car understeers.
    const latLimit = (this.handbrake ? D.latDrift : D.lat) * (1 - loose * 0.4);
    const maxYaw = latLimit / Math.max(absV, 4);
    targetYaw = clamp(targetYaw, -maxYaw, maxYaw);
    if (this.handbrake && absV > 6) targetYaw *= 1.5;
    if (slipRatio > 0.18) targetYaw += this.steer * 0.6 * Math.min(absV / 20, 1); // counter-steer authority mid-drift
    this.yawRate = damp(this.yawRate, targetYaw, D.yawDamp, dt);
    this.heading += this.yawRate * dt;

    // Recombine in world space; the next step sees the slip angle that results.
    this.vx = fx * vLong + rx * vLat;
    this.vz = fz * vLong + rz * vLat;
    const lastX = this.x, lastZ = this.z;
    this.x += this.vx * dt;
    this.z += this.vz * dt;

    this.wheelspin = launch && this.throttle > 0 ? clamp(1 - absV / 8, 0, 1) : 0;
    if (D.powerSlide && this.gear === 1 && this.throttle > 0.8) this.wheelspin = Math.max(this.wheelspin, clamp(1 - absV / 16, 0, 1));
    this.impact = 0;
    this.collide(world, lastX, lastZ);
    this.distance += Math.hypot(this.x - lastX, this.z - lastZ);
    this.dentCooldown -= dt;

    // Ground following and suspension: the body pitches, rolls and heaves on springs.
    const gy = this.groundAt(this.x, this.z, this.y);
    if (gy - this.y > 0.08 && gy - this.y < 0.3) this.heaveVel -= (gy - this.y) * 9; // curb bump
    if (this.y - gy > 0.08 && this.y - gy < 0.3) this.heaveVel += (this.y - gy) * 5; // dropping off a curb
    this.y = damp(this.y, gy, gy > this.y ? 22 : 9, dt);
    const longAccel = (vLong - this.prevLong) / dt;
    this.prevLong = vLong;
    const latAccel = vLong * this.yawRate;
    const slope = this.slopeAt();
    this.spring('pitch', clamp(longAccel * D.pitch, -D.rollMax * 0.75, D.rollMax * 0.55) + slope, 70, 9, dt);
    this.spring('roll', clamp(latAccel * D.roll, -D.rollMax, D.rollMax), 60, 7, dt);
    this.spring('heave', 0, 90, 10, dt);
    this.sync();
    for (const w of this.wheels) {
      w.spin.rotation.x -= (vLong * dt) / this.dims.wheelR * (w.side < 0 ? -1 : 1) * (w.front ? 1 : 1 + this.wheelspin * 2.5);
      if (w.front) w.pivot.rotation.y = this.wheelAngle;
    }
  }

  slopeAt() {
    const p = pierHeight(this.x, this.z);
    if (p !== null && this.x > PIER.x0 && this.y > 0.2) {
      const grade = Math.atan2(PIER.deckY - SLAB_H, PIER.rampStart - PIER.x0);
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
      for (const off of [-1.35, 1.35]) {
        const cx = this.x + fx * off, cz = this.z + fz * off;
        // Buildings and shelters (axis-aligned boxes).
        for (const b of world.boxes || world.colliders) {
          if (Math.abs(cx - b.x) > b.w + r || Math.abs(cz - b.z) > b.d + r) continue;
          const px = clamp(cx, b.x - b.w, b.x + b.w), pz = clamp(cz, b.z - b.d, b.z + b.d);
          let nx = cx - px, nz = cz - pz;
          let d = Math.hypot(nx, nz);
          if (d < 1e-4) {
            // Center inside: push out the shortest way.
            const ox = b.w - Math.abs(cx - b.x), oz = b.d - Math.abs(cz - b.z);
            if (ox < oz) { nx = Math.sign(cx - b.x); nz = 0; d = -ox; } else { nx = 0; nz = Math.sign(cz - b.z); d = -oz; }
          } else { nx /= d; nz /= d; }
          if (d < r) this.resolve(nx, nz, r - d, 0.25, cx - nx * r, cz - nz * r);
        }
        // Thin round obstacles: palm trunks and poles, plus the pier piles when driving under it.
        const underPier = this.y < (pierHeight(cx, cz) ?? -9) - 1;
        for (const list of underPier ? [world.circles, world.piles] : [world.circles]) {
          for (const t of list) {
            const dx = cx - t.x, dz = cz - t.z;
            if (Math.abs(dx) > 3 || Math.abs(dz) > 3) continue;
            const d = Math.hypot(dx, dz), min = r + t.r;
            if (d < min && d > 1e-4) this.resolve(dx / d, dz / d, min - d, 0.2, t.x + (dx / d) * t.r, t.z + (dz / d) * t.r);
          }
        }
      }
    }
    // Pier rails and the drop off its end.
    if (this.y > 1.2 && pierHeight(lastX, lastZ) !== null) {
      const lim = PIER.halfWidth - 1.1;
      if (Math.abs(this.z - PIER.z) > lim) this.resolve(0, -Math.sign(this.z - PIER.z), Math.abs(this.z - PIER.z) - lim, 0.15);
      if (this.x < PIER.x1 + 3) this.resolve(1, 0, PIER.x1 + 3 - this.x, 0.15);
    }
    // Walk under the pier ramp only where it is high enough.
    const ramp = pierHeight(this.x, this.z);
    if (ramp !== null && this.x > PIER.x0 && this.y < ramp - 0.9 && this.x < -345) {
      const side = Math.sign(this.z - PIER.z) || 1;
      this.resolve(0, side, PIER.halfWidth + 0.2 - Math.abs(this.z - PIER.z), 0.2);
    }
    // World bounds (barriers and the sea).
    const minX = this.y > 1.2 && Math.abs(this.z - PIER.z) < PIER.halfWidth ? PIER.x1 + 3 : BOUNDS.minX;
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
      this.vx -= (1 + bounce) * vn * nx;
      this.vz -= (1 + bounce) * vn * nz;
      this.vx *= 0.9;
      this.vz *= 0.9;
      this.impact = Math.max(this.impact, -vn);
      if (!this.contact || -vn > this.contact.speed) this.contact = { x: px, z: pz, speed: -vn, nx, nz };
      this.registerHit(px, pz, -vn);
      this.yawRate *= 0.6;
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
    const rx = nearestRoad(roadsX, this.x), rz = nearestRoad(roadsZ, this.z);
    if (Math.abs(this.x - rx) < Math.abs(this.z - rz)) {
      const north = Math.cos(this.heading) > 0;
      this.reset(rx + (north ? 3.4 : -3.4), clamp(this.z, -470, 470), north ? 0 : Math.PI);
    } else {
      const east = Math.sin(this.heading) < 0;
      this.reset(clamp(this.x, -310, 310), rz + (east ? 3.4 : -3.4), east ? -Math.PI / 2 : Math.PI / 2);
    }
  }
}
