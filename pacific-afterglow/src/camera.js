import * as THREE from 'three';

const damp = THREE.MathUtils.damp;
export const CAMERA_NAMES = ['CHASE CAMERA', 'FAR CHASE CAMERA', 'HOOD CAMERA', 'CINEMATIC CAMERA'];

export class CameraRig {
  constructor(camera) {
    this.camera = camera;
    this.mode = 0;
    this.pos = new THREE.Vector3();
    this.look = new THREE.Vector3();
    this.desired = new THREE.Vector3();
    this.target = new THREE.Vector3();
    this.yaw = 0;
    this.shake = 0;
    this.cine = null;
    this.cineTimer = 0;
    this.baseFov = 55;
  }

  snap(car) {
    this.yaw = car.heading;
    this.cine = null;
    this.compute(car, 0);
    this.pos.copy(this.desired);
    this.look.copy(this.target);
    this.apply(0);
  }

  compute(car, dt) {
    const v = Math.min(Math.abs(car.speed) / 55, 1);
    // Look slightly into the direction of travel, so drifts read on screen.
    const velYaw = Math.hypot(car.vx, car.vz) > 4 ? Math.atan2(-car.vx, -car.vz) : car.heading;
    let blend = car.heading + wrap(velYaw - car.heading) * 0.35;
    if (car.speed < -1) blend = car.heading;
    this.yaw = dt ? this.yaw + wrap(blend - this.yaw) * (1 - Math.exp(-4.5 * dt)) : blend;
    const s = Math.sin(this.yaw), c = Math.cos(this.yaw);
    const p = car.group.position;
    if (this.mode === 2) {
      const hs = Math.sin(car.heading), hc = Math.cos(car.heading);
      this.desired.set(p.x - hs * 0.15, p.y + 1.18, p.z - hc * 0.15);
      this.target.set(p.x - hs * 30, p.y + 0.9, p.z - hc * 30);
    } else if (this.mode === 3) {
      this.cinematic(car, dt);
    } else {
      const far = this.mode === 1;
      const dist = (far ? 11.5 : 7.4) + v * 1.6;
      const height = (far ? 4.6 : 2.45) + v * 0.25;
      this.desired.set(p.x + s * dist, p.y + height, p.z + c * dist);
      this.target.set(p.x - s * 6, p.y + 1.15, p.z - c * 6);
    }
  }

  cinematic(car, dt) {
    const p = car.group.position;
    this.cineTimer -= dt;
    const fx = -Math.sin(car.heading), fz = -Math.cos(car.heading);
    const tooFar = !this.cine || this.cine.distanceTo(p) > 70 || this.cineTimer <= 0;
    if (tooFar) {
      // Drop a camera ahead of the car, low and to the side, then let it pass.
      const side = Math.random() < 0.5 ? -1 : 1;
      const ahead = 28 + Math.abs(car.speed) * 1.6;
      this.cine = new THREE.Vector3(p.x + fx * ahead + fz * side * 7, p.y + 0.7 + Math.random() * 2.5, p.z + fz * ahead - fx * side * 7);
      this.cineTimer = 7;
      this.pos.copy(this.cine);
    }
    this.desired.copy(this.cine);
    this.target.set(p.x, p.y + 0.8, p.z);
  }

  apply(dt) {
    const cam = this.camera;
    cam.position.copy(this.pos);
    if (this.shake > 0.001) {
      const s = this.shake;
      cam.position.x += (Math.random() - 0.5) * s;
      cam.position.y += (Math.random() - 0.5) * s;
      cam.position.z += (Math.random() - 0.5) * s;
      this.shake = damp(this.shake, 0, 6, dt || 0.016);
    }
    cam.lookAt(this.look);
  }

  update(car, dt) {
    this.compute(car, dt);
    if (this.mode === 2) {
      this.pos.copy(this.desired);
      this.look.copy(this.target);
    } else if (this.mode === 3) {
      this.pos.lerp(this.desired, 1 - Math.exp(-3 * dt));
      this.look.lerp(this.target, 1 - Math.exp(-10 * dt));
    } else {
      this.pos.x = damp(this.pos.x, this.desired.x, 9, dt);
      this.pos.z = damp(this.pos.z, this.desired.z, 9, dt);
      this.pos.y = damp(this.pos.y, this.desired.y, 6, dt);
      this.look.lerp(this.target, 1 - Math.exp(-12 * dt));
    }
    const speedFov = Math.min(Math.abs(car.speed) / 60, 1) * 12;
    const target = (this.mode === 2 ? 68 : this.mode === 3 ? 40 : this.baseFov) + (this.mode === 3 ? 0 : speedFov + (car.boosting ? 7 : 0));
    this.camera.fov = damp(this.camera.fov, target, 3, dt);
    this.camera.updateProjectionMatrix();
    if (car.boosting) this.shake = Math.max(this.shake, 0.035);
    this.apply(dt);
  }

  // Slow orbit for the title screen.
  orbit(car, time) {
    const p = car.group.position;
    const a = 2.25 + Math.sin(time * 0.05) * 0.5;
    this.camera.position.set(p.x + Math.sin(a) * 9.5, p.y + 1.6 + Math.sin(time * 0.11) * 0.25, p.z + Math.cos(a) * 9.5);
    this.camera.fov = 42;
    this.camera.updateProjectionMatrix();
    this.camera.lookAt(p.x - 1.5, p.y + 1.1, p.z - 2);
  }
}

function wrap(a) {
  return Math.atan2(Math.sin(a), Math.cos(a));
}
