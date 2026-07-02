// Camera rig: cockpit / chase / free / tower, with mouse-look and zoom.
import * as THREE from 'three';
import { clamp, damp, RAD2DEG } from '../core/math.js';

const MODES = ['chase', 'cockpit', 'tower', 'free'];
const _v = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();

export class CameraRig {
  constructor(camera) {
    this.camera = camera;
    this.mode = 'chase';
    this.freePos = new THREE.Vector3();
    this.freeYaw = 0;
    this.freePitch = 0;
    this.smoothPos = new THREE.Vector3(0, 50, 200);
    this.baseFov = 68;
  }

  cycle(input) {
    const i = MODES.indexOf(this.mode);
    this.setMode(MODES[(i + 1) % MODES.length], input);
    return this.mode;
  }

  setMode(mode, input) {
    this.mode = mode;
    if (input) { input.look.x = 0; input.look.y = 0; }
    if (mode === 'free') {
      this.freePos.copy(this.camera.position);
      _e.setFromQuaternion(this.camera.quaternion, 'YXZ');
      this.freeYaw = _e.y;
      this.freePitch = _e.x;
    }
    if (mode !== 'tower') this.setFov(this.baseFov);
  }

  setFov(fov) {
    if (Math.abs(this.camera.fov - fov) > 0.01) {
      this.camera.fov = fov;
      this.camera.updateProjectionMatrix();
    }
  }

  update(dt, entity, input, towerPos) {
    const cam = this.camera;
    const fm = entity.fm;
    const look = input.look;

    if (this.mode === 'chase') {
      const dist = Math.max(entity.info.len * 1.5, entity.info.span * 1.3) * (1 + look.zoom * 0.45);
      const yaw = look.x, pitch = clamp(look.y + 0.18, -1.1, 1.2);
      const offDir = _v.set(
        Math.sin(yaw) * Math.cos(pitch),
        Math.sin(pitch),
        Math.cos(yaw) * Math.cos(pitch)
      );
      // orbit in aircraft yaw frame (stays behind the jet as it turns)
      const hdgQ = _q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -fm.hdgDeg * Math.PI / 180);
      offDir.applyQuaternion(hdgQ);
      const target = fm.pos;
      const desired = new THREE.Vector3().copy(target).addScaledVector(offDir, dist);
      desired.y = Math.max(desired.y, 2.5);
      this.smoothPos.x = damp(this.smoothPos.x, desired.x, 7, dt);
      this.smoothPos.y = damp(this.smoothPos.y, desired.y, 7, dt);
      this.smoothPos.z = damp(this.smoothPos.z, desired.z, 7, dt);
      cam.position.copy(this.smoothPos);
      cam.lookAt(target.x, target.y + entity.info.fusR, target.z);
      this.setFov(this.baseFov);
    } else if (this.mode === 'cockpit') {
      const p = entity.worldPoint(entity.info.cockpitPos, _v);
      cam.position.copy(p);
      cam.quaternion.copy(fm.quat);
      // mouse look inside the cockpit
      cam.quaternion.multiply(_q.setFromEuler(_e.set(-look.y, -look.x, 0, 'YXZ')));
      this.setFov(this.baseFov + look.zoom * -14);
    } else if (this.mode === 'tower') {
      cam.position.set(towerPos.x, towerPos.y, towerPos.z);
      cam.lookAt(fm.pos);
      const dist = cam.position.distanceTo(fm.pos);
      const fov = clamp(Math.atan2(entity.info.span * 2.2, dist) * RAD2DEG, 3, 55);
      this.setFov(fov);
    } else if (this.mode === 'free') {
      this.freeYaw -= (look.dragging ? 0 : 0) + (look.x - (this._lastLookX ?? look.x));
      this.freePitch = clamp(this.freePitch - (look.y - (this._lastLookY ?? look.y)), -1.4, 1.4);
      const speed = 80 * (1 + look.zoom * 3) * (input.keys.has('ShiftLeft') ? 4 : 1);
      const fwd = new THREE.Vector3(-Math.sin(this.freeYaw) * Math.cos(this.freePitch), Math.sin(this.freePitch), -Math.cos(this.freeYaw) * Math.cos(this.freePitch));
      const right = new THREE.Vector3(Math.cos(this.freeYaw), 0, -Math.sin(this.freeYaw));
      if (input.keys.has('KeyI')) this.freePos.addScaledVector(fwd, speed * dt);
      if (input.keys.has('KeyK')) this.freePos.addScaledVector(fwd, -speed * dt);
      if (input.keys.has('KeyJ')) this.freePos.addScaledVector(right, -speed * dt);
      if (input.keys.has('KeyL')) this.freePos.addScaledVector(right, speed * dt);
      if (input.keys.has('KeyU')) this.freePos.y -= speed * dt;
      if (input.keys.has('KeyO')) this.freePos.y += speed * dt;
      this.freePos.y = Math.max(this.freePos.y, 1.5);
      cam.position.copy(this.freePos);
      cam.quaternion.setFromEuler(_e.set(this.freePitch, this.freeYaw, 0, 'YXZ'));
      this.setFov(this.baseFov);
    }
    this._lastLookX = look.x;
    this._lastLookY = look.y;
  }
}
