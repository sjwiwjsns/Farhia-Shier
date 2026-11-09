import * as THREE from 'three';
import { rand } from '../core/rng.js';
import { SLAB_H, surfaceAt } from './layout.js';

// Street furniture the car can knock flying: hydrants, bins, benches, signs and lamp posts.
// Each prop is one or more instances in shared InstancedMeshes. A prop keeps the base matrix
// of every part plus a pivot; while it is loose we move the pivot and rotate around it.
//
//   kind 'fly'    small things: thrown along the car's path, tumble, bounce and settle.
//   kind 'topple' posts: hinge over at the base in the direction of the hit.

const CELL = 16;
const _m = new THREE.Matrix4(), _t = new THREE.Matrix4(), _q = new THREE.Quaternion(), _v = new THREE.Vector3();
const _axis = new THREE.Vector3(), _dq = new THREE.Quaternion(), _one = new THREE.Vector3(1, 1, 1);
const ZERO = new THREE.Matrix4().makeScale(0, 0, 0);

export class Knockables {
  constructor() {
    this.items = [];
    this.grid = new Map();
    this.loose = new Set();
    this.dirty = new Set();
  }

  // parts: [{ mesh, index }]; hide: [{ mesh, index }] parts that vanish when hit (light pools).
  // opts: { x, z, y (pivot height), r (radius), kind, mass, solid (min speed to break), lieH, material }
  add(parts, hide, opts) {
    const item = {
      ...opts,
      parts: parts.map(p => {
        const base = new THREE.Matrix4();
        p.mesh.getMatrixAt(p.index, base);
        return { ...p, base };
      }),
      hide: (hide || []).map(p => {
        const base = new THREE.Matrix4();
        p.mesh.getMatrixAt(p.index, base);
        return { ...p, base };
      }),
      pivot0: new THREE.Vector3(opts.x, opts.y, opts.z),
      pos: new THREE.Vector3(opts.x, opts.y, opts.z),
      vel: new THREE.Vector3(),
      quat: new THREE.Quaternion(),
      spin: new THREE.Vector3(),
      state: 0, // 0 standing, 1 loose, 2 settled
      timer: 0,
    };
    item.id = this.items.length;
    this.items.push(item);
    const key = this.key(opts.x, opts.z);
    if (!this.grid.has(key)) this.grid.set(key, []);
    this.grid.get(key).push(item);
    return item;
  }

  key(x, z) {
    return `${Math.floor(x / CELL)},${Math.floor(z / CELL)}`;
  }

  // Test the car (a capsule between its two collision circles) against nearby props.
  collide(car, dt, onHit) {
    const fx = -Math.sin(car.heading), fz = -Math.cos(car.heading);
    const ax = car.x - fx * 1.35, az = car.z - fz * 1.35, bx = car.x + fx * 1.35, bz = car.z + fz * 1.35;
    const speed = Math.hypot(car.vx, car.vz);
    const cx = Math.floor(car.x / CELL), cz = Math.floor(car.z / CELL);
    for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) {
      const list = this.grid.get(`${cx + i},${cz + j}`);
      if (!list) continue;
      for (const it of list) {
        if (it.state !== 0) continue;
        // Closest point on the car's center segment.
        const ex = bx - ax, ez = bz - az;
        const t = THREE.MathUtils.clamp(((it.x - ax) * ex + (it.z - az) * ez) / (ex * ex + ez * ez), 0, 1);
        const px = ax + ex * t, pz = az + ez * t;
        let nx = it.x - px, nz = it.z - pz;
        const d = Math.hypot(nx, nz), min = 1.05 + it.r;
        if (d >= min || car.y > it.y + 3) continue;
        if (d > 1e-4) { nx /= d; nz /= d; } else { nx = fx; nz = fz; }
        const vn = car.vx * nx + car.vz * nz; // closing speed toward the prop
        if (vn < it.solid) {
          // Too slow to break it: it behaves like a bollard.
          if (vn > 0) {
            car.vx -= vn * nx * 1.2;
            car.vz -= vn * nz * 1.2;
          }
          car.x -= nx * (min - d);
          car.z -= nz * (min - d);
          continue;
        }
        this.knock(it, car, nx, nz, vn, speed);
        onHit?.({ item: it, x: it.x, z: it.z, speed: vn, nx, nz });
      }
    }
  }

  knock(it, car, nx, nz, vn, speed) {
    it.state = 1;
    it.timer = 0;
    this.loose.add(it);
    // The car keeps most of its momentum; heavier props take more of it.
    const keep = 1 - it.mass * Math.min(1, 6 / Math.max(speed, 6));
    car.vx *= keep;
    car.vz *= keep;
    car.registerHit?.(it.x, it.z, vn * it.mass * 3);
    if (it.kind === 'topple') {
      // Fall over away from the car, rotating about the base.
      _axis.set(nz, 0, -nx).normalize(); // horizontal axis perpendicular to the push
      it.axis = _axis.clone();
      it.angle = 0;
      it.angVel = 0.6 + vn * 0.08;
    } else {
      const lift = 2.5 + rand() * 2.5 + vn * 0.12;
      const carry = 0.5 + rand() * 0.25;
      it.vel.set(car.vx * carry + nx * vn * 0.25, lift, car.vz * carry + nz * vn * 0.25);
      it.spin.set((rand() - 0.5) * 2, (rand() - 0.5) * 2, (rand() - 0.5) * 2).normalize().multiplyScalar(5 + vn * 0.35);
      it.pos.copy(it.pivot0);
    }
    for (const h of it.hide) { h.mesh.setMatrixAt(h.index, ZERO); h.mesh.instanceMatrix.needsUpdate = true; }
  }

  groundY(x, z) {
    const s = surfaceAt(x, z);
    return s === 'road' ? 0 : SLAB_H;
  }

  update(dt, player) {
    for (const it of this.loose) {
      it.timer += dt;
      if (it.state === 1) {
        if (it.kind === 'topple') {
          // Gravity torque grows as the post leans; it stops when it hits the ground.
          it.angVel += Math.sin(Math.max(it.angle, 0.05)) * 6 * dt + 0.4 * dt;
          it.angle += it.angVel * dt;
          if (it.angle >= Math.PI / 2 - 0.04) {
            it.angle = Math.PI / 2 - 0.04;
            it.angVel *= -0.18;
            if (Math.abs(it.angVel) < 0.08) it.state = 2;
          }
          it.quat.setFromAxisAngle(it.axis, it.angle);
        } else {
          it.vel.y -= 9.8 * dt;
          it.pos.addScaledVector(it.vel, dt);
          const w = it.spin.length();
          if (w > 1e-3) {
            _dq.setFromAxisAngle(_axis.copy(it.spin).divideScalar(w), w * dt);
            it.quat.premultiply(_dq);
          }
          const floor = this.groundY(it.pos.x, it.pos.z) + it.lieH;
          if (it.pos.y < floor) {
            it.pos.y = floor;
            if (it.vel.y < -1.2) {
              it.vel.y *= -0.32;
              it.vel.x *= 0.5;
              it.vel.z *= 0.5;
              it.spin.multiplyScalar(0.55);
            } else {
              // Slide to rest, lying on its side.
              it.vel.y = 0;
              it.vel.x *= Math.exp(-8 * dt);
              it.vel.z *= Math.exp(-8 * dt);
              it.spin.multiplyScalar(Math.exp(-6 * dt));
              if (Math.hypot(it.vel.x, it.vel.z) < 0.3) this.settle(it);
            }
          }
        }
        this.dirty.add(it);
      }
      // Props respawn once the player has gone and they have been down a while.
      if (it.timer > 25 && Math.hypot(player.x - it.x, player.z - it.z) > 200) this.restore(it);
    }
    for (const it of this.dirty) this.write(it);
    this.dirty.clear();
  }

  // Lay a settled prop on its side with its long axis flat, keeping the heading it landed with.
  settle(it) {
    it.state = 2;
    _v.set(0, 1, 0).applyQuaternion(it.quat);
    const yaw = Math.atan2(_v.x, _v.z);
    _q.setFromAxisAngle(_axis.set(0, 1, 0), yaw);
    _dq.setFromAxisAngle(_axis.set(1, 0, 0), Math.PI / 2);
    it.quat.copy(_q).multiply(_dq);
    it.pos.y = this.groundY(it.pos.x, it.pos.z) + it.lieH;
    this.dirty.add(it);
  }

  restore(it) {
    it.state = 0;
    it.pos.copy(it.pivot0);
    it.quat.identity();
    it.vel.set(0, 0, 0);
    it.spin.set(0, 0, 0);
    this.loose.delete(it);
    for (const p of [...it.parts, ...it.hide]) { p.mesh.setMatrixAt(p.index, p.base); p.mesh.instanceMatrix.needsUpdate = true; }
  }

  // Part matrix = T(pos) · R(quat) · T(-pivot0) · base.
  write(it) {
    _m.compose(it.pos, it.quat, _one);
    _t.makeTranslation(-it.pivot0.x, -it.pivot0.y, -it.pivot0.z);
    _m.multiply(_t);
    for (const p of it.parts) {
      _t.multiplyMatrices(_m, p.base);
      p.mesh.setMatrixAt(p.index, _t);
      p.mesh.instanceMatrix.needsUpdate = true;
    }
  }

  restoreAll() {
    for (const it of [...this.loose]) this.restore(it);
  }
}
