// AircraftEntity: binds one FlightModel to its 3D representation.
// Handles surface/gear animation and physics-based crash breakup
// (wing/engine/tail detachment + fire/smoke) when crash physics is ON.
import * as THREE from 'three';
import { buildAircraft, cockpitStation } from './aircraftFactory.js';
import { generateLivery } from './liveries.js';
import { FlightModel } from '../physics/flightModel.js';
import { clamp01, damp, lerp } from '../core/math.js';

const _v = new THREE.Vector3();
const _q2 = new THREE.Quaternion();
const _q3 = new THREE.Quaternion();

export class AircraftEntity {
  constructor({ variant, family, airline, scene, quality = 'high', texScale = 1 }) {
    this.scene = scene;
    this.variant = variant;
    this.family = family;
    this.airline = airline;
    // the painted windscreen must land where the modelled deck actually is
    this.livery = generateLivery(airline, variant, texScale, cockpitStation(family, variant).wsT);
    const built = buildAircraft(variant, family, this.livery, { quality, detail: 1 });
    this.group = built.group;
    this.parts = built.parts;
    this.info = built.info;
    scene.add(this.group);

    this.fm = new FlightModel(variant, family, { gearInfo: { gearHeight: this.info.gearHeight } });
    this.fm.gearHeight = this.info.gearHeight;
    this.fm.gearPoints.nose.y = -this.info.gearHeight;
    this.fm.gearPoints.left.y = -this.info.gearHeight;
    this.fm.gearPoints.right.y = -this.info.gearHeight;

    this.flapAnim = 0;
    this.spoilerAnim = 0;
    this.debris = [];
    this.broken = false;
    for (const e of this.parts.engines) {
      if (e.sleeve) e.sleeve.userData.baseZ = e.sleeve.position.z;
    }
  }

  // Called every render frame with interpolation-free state (fixed step is small).
  syncVisual(dt) {
    const fm = this.fm;
    if (!this.broken) {
      this.group.position.copy(fm.pos);
      this.group.quaternion.copy(fm.quat);
    }
    const p = this.parts;
    // Gear
    const a = fm.gearAnim;
    const show = a > 0.03 && !this.broken;
    for (const g of [p.gearNose, p.gearL, p.gearR, p.gearC]) if (g) g.visible = show;
    if (p.gearNose) p.gearNose.rotation.x = (1 - a) * 1.65;
    if (p.gearL) p.gearL.rotation.z = -(1 - a) * 1.5;
    if (p.gearR) p.gearR.rotation.z = (1 - a) * 1.5;
    if (p.gearC) p.gearC.rotation.x = (1 - a) * 1.6;
    if (fm.collapsed) {
      for (const g of [p.gearNose, p.gearL, p.gearR, p.gearC]) if (g) g.scale.y = 0.35;
    }
    // Flaps / spoilers
    this.flapAnim = damp(this.flapAnim, fm.flap, 1.6, dt);
    for (const f of p.flaps) f.hinge.rotation.x = this.flapAnim * 0.62;
    // slats translate forward/down along the leading edge and droop
    for (const s of (p.slats || [])) {
      s.hinge.position.copy(s.base).addScaledVector(s.out, this.flapAnim);
      s.hinge.rotation.x = -s.droop * this.flapAnim;
    }
    this.spoilerAnim = damp(this.spoilerAnim, fm.spoilers ? 1 : 0, 5, dt);
    for (const s of p.spoilers) s.hinge.rotation.x = -this.spoilerAnim * 0.95;
    // Primary surfaces
    const c = fm.controls;
    for (const ail of p.ailR) ail.hinge.rotation.x = -c.roll * 0.4;
    for (const ail of p.ailL) ail.hinge.rotation.x = c.roll * 0.4;
    if (p.elevator) p.elevator.rotation.x = -(c.pitch + fm.trim) * 0.4;
    // delta elevons: elevator authority plus differential roll
    for (const el of (p.elevons || [])) {
      el.hinge.rotation.x = -(c.pitch + fm.trim) * 0.35 + (el.side > 0 ? -1 : 1) * c.roll * 0.3;
    }
    if (p.rudder) p.rudder.rotation.y = -c.yaw * 0.45;
    // Engines
    for (const e of p.engines) {
      if (e.fan) e.fan.rotation.z += (0.15 + fm.n1) * dt * 55;
      if (e.sleeve) e.sleeve.position.z = damp(e.sleeve.position.z,
        e.sleeve.userData.baseZ + (fm.reversers ? 1.1 : 0), 6, dt);
    }
    this.syncCockpit(dt);
    this.updateDebris(dt);
  }

  // Flight-deck animation: levers, yokes, pedals and trim wheels follow the
  // same state the aerodynamic surfaces do. Only runs when the deck is
  // visible (cockpit camera), which is also when the displays refresh.
  syncCockpit(dt) {
    const ck = this.parts.cockpitParts;
    if (!ck || !this.parts.cockpit || !this.parts.cockpit.visible) return;
    const fm = this.fm, c = fm.controls;
    const rot = (obj, axis, ang) => {
      obj.quaternion.copy(obj.userData.q0).multiply(_q2.setFromAxisAngle(axis, ang));
    };
    for (const l of ck.thrustLevers) rot(l, l.userData.axX, -0.62 + fm.throttle * 0.95);
    if (ck.gearLever) rot(ck.gearLever, ck.gearLever.userData.axX, (fm.gearAnim - 0.5) * 0.85);
    if (ck.flapLever) {
      ck.flapLever.position.copy(ck.flapLever.userData.p0)
        .addScaledVector(ck.flapLever.userData.axY, this.flapAnim * 0.21);
    }
    if (ck.speedbrakeLever) {
      ck.speedbrakeLever.position.copy(ck.speedbrakeLever.userData.p0)
        .addScaledVector(ck.speedbrakeLever.userData.axY, this.spoilerAnim * 0.145);
    }
    for (const w of ck.trimWheels) w.rotation.x += (c.pitch * 0.6 + fm.trim * 0.5) * dt * 6;
    for (const y of ck.yokes) {
      y.quaternion.copy(y.userData.q0)
        .multiply(_q2.setFromAxisAngle(y.userData.axX, c.pitch * 0.20))
        .multiply(_q3.setFromAxisAngle(y.userData.axZ, -c.roll * 0.85));
    }
    for (const p of ck.pedals) {
      p.obj.position.copy(p.obj.userData.p0)
        .addScaledVector(p.obj.userData.axZ, -c.yaw * p.foot * 0.045);
    }
    if (this.parts.cockpitDisplays) this.parts.cockpitDisplays.update(fm, dt);
  }

  worldPoint(local, out = new THREE.Vector3()) {
    return out.copy(local).applyQuaternion(this.fm.quat).add(this.fm.pos);
  }

  // ---------------------------------------------------------- crash breakup
  breakup(effects, groundY = 0) {
    if (this.broken) return;
    this.broken = true;
    const fm = this.fm;
    const baseVel = fm.vel.clone();

    const detach = (obj, kick) => {
      if (!obj) return null;
      const wp = new THREE.Vector3(), wq = new THREE.Quaternion();
      obj.getWorldPosition(wp); obj.getWorldQuaternion(wq);
      this.group.remove(obj);
      // engines etc. may be nested — reattach at world transform
      obj.position.copy(wp); obj.quaternion.copy(wq);
      this.scene.add(obj);
      const d = {
        obj,
        vel: baseVel.clone().add(new THREE.Vector3(
          (Math.random() - 0.5) * kick, Math.random() * kick * 0.6, (Math.random() - 0.5) * kick)),
        ang: new THREE.Vector3((Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3),
        rest: false
      };
      this.debris.push(d);
      return d;
    };

    for (const e of this.parts.engines) detach(e.grp, 22);
    const wl = detach(this.parts.wingL, 14);
    const wr = detach(this.parts.wingR, 14);
    detach(this.parts.tail, 10);
    // Fuselage keeps sliding as its own debris body.
    const fus = {
      obj: this.group,
      vel: baseVel.multiplyScalar(0.85),
      ang: new THREE.Vector3(0, (Math.random() - 0.5) * 1.2, 0),
      rest: false
    };
    this.debris.push(fus);
    // crumple the nose a little
    this.group.scale.z = 0.94;
    this.group.rotation.z += (Math.random() - 0.5) * 0.15;

    if (effects) {
      const impact = this.fm.pos.clone().setY(Math.max(groundY + 1, this.fm.pos.y - 2));
      effects.burst('fire', impact, 90, 24, 1.6, 9, 0.9);
      effects.burst('smoke', impact, 70, 16, 6, 12, 0.75);
      effects.burst('sparks', impact, 60, 30, 0.8, 1.6);
      for (const src of [fus, wl, wr].filter(Boolean)) {
        effects.addEmitter('fire', () => src.obj.position, 26, { life: 1.1, size: 6, speed: 4, alpha: 0.85, ttl: 18 });
        effects.addEmitter('smoke', () => _v.copy(src.obj.position).add(new THREE.Vector3(0, 4, 0)), 18, { life: 5, size: 10, speed: 2.5, alpha: 0.6, ttl: 45 });
      }
    }
    this.groundY = groundY;
  }

  updateDebris(dt) {
    if (!this.debris.length) return;
    const gy = this.groundY ?? 0;
    for (const d of this.debris) {
      if (d.rest) continue;
      d.vel.y -= 9.81 * dt;
      d.obj.position.addScaledVector(d.vel, dt);
      d.obj.rotation.x += d.ang.x * dt;
      d.obj.rotation.y += d.ang.y * dt;
      d.obj.rotation.z += d.ang.z * dt;
      if (d.obj.position.y < gy + 1.2) {
        d.obj.position.y = gy + 1.2;
        d.vel.y = Math.abs(d.vel.y) * -0.05;
        d.vel.x *= Math.exp(-1.8 * dt) * 0.985;
        d.vel.z *= Math.exp(-1.8 * dt) * 0.985;
        d.ang.multiplyScalar(Math.exp(-2.5 * dt));
        if (d.vel.lengthSq() < 1.5) d.rest = true;
      }
    }
  }

  dispose() {
    for (const d of this.debris) this.scene.remove(d.obj);
    this.scene.remove(this.group);
    this.group.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
          if (m.map) m.map.dispose();
          m.dispose();
        }
      }
    });
  }
}
