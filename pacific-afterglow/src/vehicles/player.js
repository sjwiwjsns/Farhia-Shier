import * as THREE from 'three';
import { carGeometry, carMaterials, paintMaterial } from './carModel.js';
import { makeBeamMaterial } from '../world/props.js';
import {
  surfaceAt, groundHeight, pierHeight, PIER, BOUNDS, SLAB_H, roadsX, roadsZ, nearestRoad,
} from '../world/layout.js';

const damp = THREE.MathUtils.damp;
const clamp = THREE.MathUtils.clamp;

const GEARS = [3.25, 2.15, 1.6, 1.25, 1.02, 0.86];
const FINAL = 3.55;
const IDLE = 900, REDLINE = 7400;

function torqueCurve(rpm) {
  // Normalized torque: builds to a broad peak around 4.5–6k, tails off near redline.
  const x = rpm / REDLINE;
  return clamp(0.55 + 1.15 * x - 0.95 * x * x * x, 0.35, 1);
}

export class PlayerCar {
  constructor(scene, renderer) {
    const geo = carGeometry('coupe');
    this.dims = geo.type;
    const mats = carMaterials(renderer);
    this.paint = paintMaterial('#df6339');
    this.headMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff4dc, emissiveIntensity: 2, roughness: 0.2 });
    this.tailMat = new THREE.MeshStandardMaterial({ color: 0x400806, emissive: 0xff2412, emissiveIntensity: 1.5, roughness: 0.3 });
    const slot = { paint: this.paint, glass: mats.glass, trim: mats.trim, dark: mats.dark, chrome: mats.chrome, head: this.headMat, tail: this.tailMat, plate: mats.plate };

    this.group = new THREE.Group();
    this.body = new THREE.Group();
    this.group.add(this.body);
    for (const [k, g] of Object.entries(geo.parts)) {
      const mesh = new THREE.Mesh(g, slot[k]);
      mesh.castShadow = k !== 'head' && k !== 'tail';
      mesh.receiveShadow = true;
      this.body.add(mesh);
    }
    // Wheels: pivot (steering) > spin (rolling).
    this.wheels = geo.wheels.map(w => {
      const pivot = new THREE.Group();
      pivot.position.set(w.x, w.y, w.z);
      const mount = new THREE.Group();
      if (w.side < 0) mount.rotation.y = Math.PI; // mirror by rotation so faces stay outward
      pivot.add(mount);
      const spin = new THREE.Group();
      mount.add(spin);
      for (const [part, mat] of [['tire', mats.tire], ['rim', mats.rim], ['disc', mats.disc]]) {
        const m = new THREE.Mesh(geo.wheel[part], mat);
        m.castShadow = true;
        spin.add(m);
      }
      mount.add(new THREE.Mesh(geo.wheel.caliper, mats.caliper));
      this.group.add(pivot);
      return { ...w, pivot, spin, mount, compress: 0 };
    });

    // Headlights: two real spotlights for night driving plus faint volumetric beams.
    this.spots = [];
    for (const side of [-1, 1]) {
      const spot = new THREE.SpotLight(0xfff1d8, 0, 70, 0.42, 0.55, 1.4);
      spot.position.set(side * 0.62, 0.72, -2.15);
      spot.target.position.set(side * 1.6, -0.6, -22);
      this.group.add(spot, spot.target);
      this.spots.push(spot);
    }
    const beamGeo = new THREE.CylinderGeometry(0.12, 3.2, 16, 16, 1, true);
    beamGeo.translate(0, -8, 0);
    beamGeo.rotateX(-Math.PI / 2 + 0.06);
    this.beamMat = makeBeamMaterial(0xfff0d0);
    this.beams = [];
    for (const side of [-1, 1]) {
      const beam = new THREE.InstancedMesh(beamGeo, this.beamMat, 1);
      beam.setMatrixAt(0, new THREE.Matrix4().makeTranslation(side * 0.62, 0.72, -2.3));
      beam.userData.noAO = true;
      beam.layers.set(1);
      beam.frustumCulled = false;
      this.group.add(beam);
      this.beams.push(beam);
    }
    scene.add(this.group);

    this.reset(0, 0, 0);
  }

  setColor(hex) {
    this.paint.color.set(hex);
  }

  reset(x, z, heading) {
    this.x = x;
    this.z = z;
    this.y = this.groundAt(x, z, 0);
    this.heading = heading;
    this.vx = 0;
    this.vz = 0;
    this.yawRate = 0;
    this.steer = 0;
    this.gear = 1;
    this.rpm = IDLE;
    this.shiftTimer = 0;
    this.nitro = 100;
    this.boosting = false;
    this.throttle = 0;
    this.brake = 0;
    this.handbrake = false;
    this.slip = 0;
    this.wheelspin = 0;
    this.impact = 0;
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
    const wheelRpm = (absV / (2 * Math.PI * this.dims.wheelR)) * 60;
    const reversing = vLong < -0.5 || (this.brake > 0 && absV < 1.2 && this.throttle === 0);
    if (reversing) this.gear = -1;
    else if (this.gear === -1) this.gear = 1;
    const ratio = this.gear === -1 ? GEARS[0] : GEARS[this.gear - 1];
    const engineRpm = wheelRpm * ratio * FINAL;
    if (this.shiftTimer > 0) this.shiftTimer -= dt;
    else if (this.gear > 0) {
      if (engineRpm > REDLINE - 300 && this.gear < GEARS.length) { this.gear++; this.shiftTimer = 0.22; this.onShift?.(1); }
      else if (this.gear > 1 && engineRpm < 2700 && !(this.throttle && engineRpm > 2000)) { this.gear--; this.shiftTimer = 0.12; this.onShift?.(-1); }
    }
    // Free revving when the clutch is out or the wheels spin.
    const launch = this.throttle > 0 && absV < 6 && this.gear === 1;
    const targetRpm = clamp(Math.max(engineRpm, IDLE + (launch ? 3800 : 0) * this.throttle), IDLE, REDLINE);
    this.rpm = damp(this.rpm, this.shiftTimer > 0 ? targetRpm * 0.82 : targetRpm, 12, dt);

    // Longitudinal forces.
    let accel = 0;
    if (this.throttle > 0 && this.gear > 0 && this.shiftTimer <= 0) {
      accel += 12.5 * torqueCurve(this.rpm) * (ratio / GEARS[0]) * this.throttle * (1 - loose * 0.35);
      if (this.boosting) accel += 9;
    }
    if (this.brake > 0) {
      if (vLong > 0.6) accel -= 28 * this.brake;
      else accel -= 7 * this.brake; // reverse
    }
    if (this.throttle > 0 && vLong < -0.6) accel += 26; // throttle while rolling back brakes
    // Aero drag and rolling resistance, more on sand.
    accel -= vLong * Math.abs(vLong) * (0.0029 + loose * 0.006);
    accel -= Math.sign(vLong) * Math.min(Math.abs(vLong) / dt, 0.25 + loose * 2.6);
    if (!this.throttle && !this.brake) accel -= Math.sign(vLong) * Math.min(Math.abs(vLong) / dt, 0.9);
    if (this.handbrake) accel -= Math.sign(vLong) * Math.min(Math.abs(vLong) / dt, 5);
    vLong += accel * dt;
    vLong = clamp(vLong, -14, this.boosting ? 74 : 64);

    // Lateral grip: strong normally, breaks away with the handbrake or on sand.
    let grip = 11 - loose * 6;
    if (this.handbrake) grip = 1.2;
    const slipRatio = Math.abs(vLat) / (absV + 4);
    if (slipRatio > 0.18 && !this.handbrake) grip *= 0.55; // already sliding: hold the drift
    vLat *= Math.exp(-grip * dt);
    this.slip = Math.abs(vLat);

    // Bicycle-model yaw with speed-sensitive steering.
    const wheelbase = (this.dims.wheels[1] - this.dims.wheels[0]) * this.dims.length;
    const maxSteer = 0.62 / (1 + absV * 0.04);
    this.wheelAngle = this.steer * maxSteer;
    let targetYaw = (vLong * Math.tan(this.wheelAngle)) / wheelbase;
    // Tires can only hold so much cornering force; past that the car understeers.
    const latLimit = (this.handbrake ? 24 : 15) * (1 - loose * 0.4);
    const maxYaw = latLimit / Math.max(absV, 4);
    targetYaw = clamp(targetYaw, -maxYaw, maxYaw);
    if (this.handbrake && absV > 6) targetYaw *= 1.5;
    if (slipRatio > 0.18) targetYaw += this.steer * 0.6 * Math.min(absV / 20, 1); // counter-steer authority mid-drift
    this.yawRate = damp(this.yawRate, targetYaw, 7.5, dt);
    this.heading += this.yawRate * dt;

    // Recombine in world space; the next step sees the slip angle that results.
    this.vx = fx * vLong + rx * vLat;
    this.vz = fz * vLong + rz * vLat;
    const lastX = this.x, lastZ = this.z;
    this.x += this.vx * dt;
    this.z += this.vz * dt;

    this.wheelspin = launch && this.throttle > 0 ? clamp(1 - absV / 8, 0, 1) : 0;
    this.impact = 0;
    this.collide(world, lastX, lastZ);
    this.distance += Math.hypot(this.x - lastX, this.z - lastZ);

    // Ground following and suspension.
    const gy = this.groundAt(this.x, this.z, this.y);
    if (gy - this.y > 0.08 && gy - this.y < 0.3) this.heaveVel -= (gy - this.y) * 9; // curb bump
    this.y = damp(this.y, gy, gy > this.y ? 22 : 9, dt);
    const longAccel = (vLong - this.prevLong) / dt;
    this.prevLong = vLong;
    const latAccel = vLong * this.yawRate;
    const slope = this.slopeAt();
    this.spring('pitch', clamp(longAccel * 0.0022, -0.055, 0.04) + slope, 70, 9, dt);
    this.spring('roll', clamp(latAccel * 0.0055, -0.08, 0.08), 60, 8, dt);
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
  }

  collide(world, lastX, lastZ) {
    const r = 1.05; // two circles along the car
    const fx = -Math.sin(this.heading), fz = -Math.cos(this.heading);
    for (let iter = 0; iter < 2; iter++) {
      for (const off of [-1.35, 1.35]) {
        const cx = this.x + fx * off, cz = this.z + fz * off;
        // Buildings (axis-aligned boxes).
        for (const b of world.colliders) {
          if (Math.abs(cx - b.x) > b.w + r || Math.abs(cz - b.z) > b.d + r) continue;
          const px = clamp(cx, b.x - b.w, b.x + b.w), pz = clamp(cz, b.z - b.d, b.z + b.d);
          let nx = cx - px, nz = cz - pz;
          let d = Math.hypot(nx, nz);
          if (d < 1e-4) {
            // Center inside: push out the shortest way.
            const ox = b.w - Math.abs(cx - b.x), oz = b.d - Math.abs(cz - b.z);
            if (ox < oz) { nx = Math.sign(cx - b.x); nz = 0; d = -ox; } else { nx = 0; nz = Math.sign(cz - b.z); d = -oz; }
          } else { nx /= d; nz /= d; }
          if (d < r) this.resolve(nx, nz, r - d, 0.25);
        }
        // Thin round obstacles: palm trunks and poles, plus the pier piles when driving under it.
        const underPier = this.y < (pierHeight(cx, cz) ?? -9) - 1;
        for (const list of underPier ? [world.circles, world.piles] : [world.circles]) {
          for (const t of list) {
            const dx = cx - t.x, dz = cz - t.z;
            if (Math.abs(dx) > 3 || Math.abs(dz) > 3) continue;
            const d = Math.hypot(dx, dz), min = r + t.r;
            if (d < min && d > 1e-4) this.resolve(dx / d, dz / d, min - d, 0.2);
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

  // Push out along n and remove the velocity going into the surface.
  resolve(nx, nz, depth, bounce) {
    this.x += nx * depth;
    this.z += nz * depth;
    const vn = this.vx * nx + this.vz * nz;
    if (vn < 0) {
      this.vx -= (1 + bounce) * vn * nx;
      this.vz -= (1 + bounce) * vn * nz;
      this.vx *= 0.9;
      this.vz *= 0.9;
      this.impact = Math.max(this.impact, -vn);
      this.yawRate *= 0.6;
    }
  }

  // Lighting state, called every frame.
  setLights(night, braking, reversing) {
    const headOn = Math.max(night, 0.15);
    this.headMat.emissiveIntensity = 1.5 + headOn * 9;
    this.tailMat.emissiveIntensity = braking ? 6 : 1.1 + night * 1.2;
    for (const s of this.spots) s.intensity = night * 220;
    this.beamMat.uniforms.intensity.value = night * 0.06;
    for (const b of this.beams) b.visible = night > 0.05;
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
