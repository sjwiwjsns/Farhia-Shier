// Damage & crash state machine.
// Consumes flight-model contact events + building collisions and decides:
// scrape, hard landing, gear collapse, or full crash. Honors the crash-physics
// toggle: ON = physics-based breakup, OFF = soft reset for arcade play.
import * as THREE from 'three';

const _box = new THREE.Box3();

export class DamageSystem {
  constructor({ crashPhysics = true, arcade = false, onCrash, onGearCollapse, onHardLanding, onSoftReset }) {
    this.crashPhysics = crashPhysics;
    this.arcade = arcade;
    this.onCrash = onCrash;
    this.onGearCollapse = onGearCollapse;
    this.onHardLanding = onHardLanding;
    this.onSoftReset = onSoftReset;
    this.state = 'intact'; // intact | collapsed | crashed
    this.stress = 0;
  }

  // Thresholds (fpm). Arcade/assisted mode is far more forgiving.
  get hardFpm() { return this.arcade ? 1000 : 700; }
  get collapseFpm() { return this.arcade ? 1900 : 1150; }
  get crashFpm() { return this.arcade ? 2900 : 1900; }

  update(fm, collidables, effects) {
    if (this.state === 'crashed') return;

    // Building collision check (coarse AABB around aircraft centre).
    if (collidables && collidables.length) {
      const r = fm.span * 0.3;
      _box.min.set(fm.pos.x - r, fm.pos.y - fm.gearHeight * 0.6, fm.pos.z - r);
      _box.max.set(fm.pos.x + r, fm.pos.y + 2, fm.pos.z + r);
      for (const b of collidables) {
        if (_box.intersectsBox(b)) { this.trigger(fm, 'Collision with a structure'); return; }
      }
    }

    for (const ev of fm.events) {
      if (ev.type === 'touchdown') {
        const fpm = ev.vsFpm;
        if (fpm > this.crashFpm) { this.trigger(fm, `Impact at ${Math.round(fpm)} fpm`); return; }
        if (fpm > this.collapseFpm && this.state === 'intact') {
          this.state = 'collapsed';
          fm.collapsed = true;
          this.onGearCollapse?.(ev);
        } else if (fpm > this.hardFpm) {
          this.stress = Math.min(1, this.stress + fpm / 4000);
          this.onHardLanding?.(ev);
        }
        if (effects && fpm > 250) {
          effects.tireSmoke(fm.pos.clone().setY(Math.max(fm.pos.y - fm.gearHeight, 0.4)), Math.min(fpm / 700, 2));
        }
      } else if (ev.type === 'strike') {
        // Fuselage/wing/tail hit the ground.
        const highEnergy = ev.iasKts > 90 || Math.abs(ev.vsFpm) > this.crashFpm * 0.8;
        if (ev.part === 'tail') {
          // Tail strike (over-rotation): sparks + airframe stress. Only fatal
          // when combined with a truly excessive sink rate.
          if (Math.abs(ev.vsFpm) > this.crashFpm * 0.9) { this.trigger(fm, 'Tail impact'); return; }
          this.stress = Math.min(1, this.stress + 0.02);
          if (this.stress >= 1) { this.trigger(fm, 'Airframe overstressed by repeated tail strikes'); return; }
          effects?.burst('sparks', fm.pos.clone().add(new THREE.Vector3(0, -1, fm.len * 0.4)), 6, 12, 0.5, 1.5);
          continue;
        }
        if (this.state === 'collapsed' || !ev.gearDown) {
          // belly slide: survivable below ~90 kts if wings level-ish
          effects?.burst('sparks', fm.pos.clone().setY(0.5), 14, 10, 0.5, 1.4);
          if (highEnergy) { this.trigger(fm, 'Airframe ground impact'); return; }
          continue;
        }
        if (highEnergy || ev.part === 'nose' || ev.part === 'wingL' || ev.part === 'wingR') {
          this.trigger(fm, ev.part.startsWith('wing') ? 'Wing strike' : 'Airframe ground impact');
          return;
        }
      }
    }
  }

  trigger(fm, reason) {
    if (this.crashPhysics) {
      this.state = 'crashed';
      fm.destroyed = true;
      this.onCrash?.(reason);
    } else {
      // Casual mode: soft "landing reset" instead of destruction.
      this.onSoftReset?.(reason);
    }
  }

  reset() {
    this.state = 'intact';
    this.stress = 0;
  }
}
