// OpenSkies — entry point & flight session orchestration.
import * as THREE from 'three';
import { GameLoop } from './core/loop.js';
import { Input } from './core/input.js';
import { DEG2RAD, KTS2MS, clamp, clamp01 } from './core/math.js';
import { TIERS, createRenderer, applyTier, createLights, updateSunTarget, makeEnvironment } from './render/graphics.js';
import { createSky } from './render/sky.js';
import { CameraRig } from './render/cameras.js';
import { Effects } from './render/effects.js';
import { buildAirport, updateAirportDynamics } from './world/airportBuilder.js';
import { createGrass } from './world/grass.js';
import { AircraftEntity } from './aircraft/entity.js';
import { airlineOperates } from './aircraft/liveries.js';
import { DamageSystem } from './physics/damage.js';
import { makeWindForFlight } from './physics/wind.js';
import { hashString } from './core/math.js';
import { Menu } from './ui/menu.js';
import { TouchControls, isTouchDevice } from './ui/touch.js';
import { HUD } from './ui/hud.js';
import { ATC } from './ui/atc.js';
import { AudioSystem } from './audio/engineSound.js';

const $ = (id) => document.getElementById(id);

function toast(text, ms = 3500) {
  const el = $('toast');
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove('show'), ms);
}

class Sim {
  constructor(config, data, shared) {
    this.config = config;
    this.data = data;
    this.shared = shared; // { renderer, input, hud, audio, loop }
    const s = config.settings;
    this.tier = TIERS[s.graphics] || TIERS.medium;
    this.arcade = s.difficulty === 'arcade';
    this.paused = false;
    this.time = 0;

    // --- scene ---
    const renderer = shared.renderer;
    applyTier(renderer, this.tier);
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog('#cfd8dd', this.tier.draw * 0.30, this.tier.draw * 0.92);
    this.scene.background = new THREE.Color('#cfd8dd');
    // Near plane at 5 cm: the flight deck puts structure within half a metre
    // of the eye (roof, glareshield, yoke), which a 0.5 m near plane clipped
    // clean away. The logarithmic depth buffer makes the tight near safe even
    // with a 40 km far plane.
    this.camera = new THREE.PerspectiveCamera(68, innerWidth / innerHeight, 0.05, this.tier.draw);
    this.lights = createLights(this.scene, this.tier);
    this.sky = createSky(this.scene, this.tier.draw);
    if (this.tier.reflections) this.scene.environment = makeEnvironment(renderer);

    // --- world ---
    this.world = buildAirport(config.airport, this.tier, this.buildFleetPool());
    this.scene.add(this.world.group);

    // --- player aircraft ---
    this.entity = new AircraftEntity({
      variant: config.variant, family: config.family, airline: config.airline,
      scene: this.scene, quality: this.tier.lowMat ? 'low' : (this.tier.fuselageReflections ? 'ultra' : 'high'), texScale: this.tier.texScale
    });
    if (this.tier.fuselageReflections) {
      // clearcoat + roughness map carry the finish now; just feed the env map
      this.entity.group.traverse((o) => {
        if (o.material && o.material.isMeshStandardMaterial && o.material.map) o.material.envMapIntensity = 0.9;
      });
    }
    this.fm = this.entity.fm;
    if (this.entity.parts.cockpitDisplays) {
      this.entity.parts.cockpitDisplays.ap = {
        icao: config.airport.icao, rw: config.runwayEnd,
        flt: (config.airline.callsign || 'FLT').slice(0, 3).toUpperCase() + (100 + Math.floor(Math.random() * 899))
      };
    }
    if (this.entity.info.pieceCount) {
      toast(`${config.variant.name} — ${this.entity.info.pieceCount.toLocaleString()} modelled pieces (press C for the flight deck)`, 3600);
    }

    // --- support systems ---
    this.effects = new Effects(this.scene);
    this.rig = new CameraRig(this.camera);
    this.damage = new DamageSystem({
      crashPhysics: s.crashPhysics,
      arcade: this.arcade,
      onCrash: (reason) => this.handleCrash(reason),
      onGearCollapse: () => { toast('Hard landing — landing gear collapsed!'); shared.audio.event('touchdown', 2.5); },
      onHardLanding: (ev) => { toast(`Hard landing: ${Math.round(ev.vsFpm)} fpm`); },
      onSoftReset: (reason) => this.softReset(reason)
    });
    shared.hud.mode = s.hud;
    shared.audio.setMuted(s.muted);
    shared.audio.start(config.family.sound);

    // Live wind field: steady wind + gusts + turbulence, seeded per flight.
    // One field drives the flight model, grass, dust, windsocks, ATC and HUD.
    this.simTime = 0;
    this.windField = makeWindForFlight(hashString(config.airport.iata) ^ (Date.now() & 0x3fff), this.arcade);
    this.wind = new THREE.Vector3();
    this.windField.sample(new THREE.Vector3(0, 3, 0), 0, this.wind);
    this.windInfo = this.windField.report(new THREE.Vector3(0, 3, 0), 0);
    this.effects.wind.copy(this.wind);

    // chunked clipmap grass (up to 40M blades at Maximum) + dirt-aware mask
    this.grass = createGrass(config.airport, this.tier, this.world);
    if (this.grass.group) this.scene.add(this.grass.group);

    // radio
    this.radioEl = $('radio');
    this.radioEl.innerHTML = '';
    this.radioEl.classList.remove('hidden');
    this.windText = () => {
      const r = this.windField.report(this.fm.pos, this.simTime);
      return `wind ${String(r.dirDeg).padStart(3, '0')} at ${r.meanKts}` +
        (r.gustKts > r.meanKts + 3 ? ` gusting ${r.gustKts}` : '');
    };
    this.atc = new ATC(config.airport, config.airline, config.runwayEnd, (m) => this.radioMsg(m), this.windText);

    this.spawn();
    this.atc.begin(config.spawn);
    this.tower = new THREE.Vector3(config.airport.tower.x, config.airport.tower.hM + 6, config.airport.tower.z);
    this.rig.setMode(config.spawn === 'final' ? 'chase' : 'chase', shared.input);
    onResizeSim(this);
  }

  buildFleetPool() {
    // ambience: parked aircraft in liveries of airlines that plausibly serve the field
    const pool = [];
    const { variants, families } = this.data.aircraft;
    const airlines = this.data.airlines.airlines.filter((a) => !a.fictional || a.id === 'sunliner');
    let guard = 0;
    while (pool.length < 24 && guard++ < 300) {
      const al = airlines[Math.floor(Math.random() * airlines.length)];
      const v = variants[Math.floor(Math.random() * variants.length)];
      if ((v.flags || []).includes('concept')) continue;
      if (!airlineOperates(al, v)) continue;
      if (v.era[1] < 2000) continue; // keep the ramp modern-ish
      pool.push({ variant: v, family: families[v.family], airline: al });
    }
    return pool;
  }

  runway() {
    return this.world.runways.find((r) => r.id === this.config.runwayId) || this.world.runways[0];
  }

  spawn() {
    const rw = this.runway();
    const isEndA = this.config.runwayEnd === rw.endA;
    const hdg = isEndA ? rw.hdg : (rw.hdg + 180) % 360;
    const dir = rw.dir.clone().multiplyScalar(isEndA ? 1 : -1);
    const threshold = isEndA ? rw.thresholdA : rw.thresholdB;
    const quat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -hdg * DEG2RAD);
    const fm = this.fm;

    if (this.config.spawn === 'final') {
      const vApp = (fm.vref + 8) * KTS2MS;
      const pos = threshold.clone().addScaledVector(dir, -3800);
      pos.y = 200;
      fm.reset({
        pos, quat, vel: dir.clone().multiplyScalar(vApp).setY(-vApp * 0.052),
        throttle: 0.52, flapIndex: 4, gearDown: true
      });
    } else {
      const pos = threshold.clone().addScaledVector(dir, rw.lenM * 0.02);
      pos.y = fm.gearHeight;
      fm.reset({ pos, quat, throttle: 0, flapIndex: 1, gearDown: true });
    }
    this.damage.reset();
  }

  radioMsg({ from, text }) {
    const div = document.createElement('div');
    div.className = 'radio-line ' + (from === 'TWR' ? 'twr' : from === 'GPWS' ? 'gpws' : 'you');
    div.textContent = `${from}: ${text}`;
    this.radioEl.appendChild(div);
    while (this.radioEl.children.length > 5) this.radioEl.firstChild.remove();
    div.animate?.([{ opacity: 0 }, { opacity: 1 }], { duration: 250 });
  }

  handleCrash(reason) {
    this.shared.audio.event('crash');
    this.entity.breakup(this.effects, 0);
    this.crashed = true;
    setTimeout(() => {
      $('crash-reason').textContent = reason + '.';
      $('crash').classList.remove('hidden');
    }, 2200);
  }

  softReset(reason) {
    toast(`${reason} — crash physics OFF, position reset.`, 4000);
    this.shared.audio.event('touchdown', 2);
    this.spawn();
  }

  restart() {
    $('crash').classList.add('hidden');
    if (this.crashed || this.entity.broken) {
      // rebuild a fresh airframe
      this.entity.dispose();
      this.entity = new AircraftEntity({
        variant: this.config.variant, family: this.config.family, airline: this.config.airline,
        scene: this.scene, quality: this.tier.lowMat ? 'low' : (this.tier.fuselageReflections ? 'ultra' : 'high'), texScale: this.tier.texScale
      });
      this.fm = this.entity.fm;
      this.crashed = false;
    }
    this.spawn();
    this.atc = new ATC(this.config.airport, this.config.airline, this.config.runwayEnd, (m) => this.radioMsg(m), this.windText);
    this.atc.begin(this.config.spawn);
  }

  // ------------------------------------------------------------ per-step
  fixedStep(dt) {
    if (this.paused || this.crashed) return;
    const input = this.shared.input;
    const fm = this.fm;
    input.update(dt);

    for (const action of input.consumeActions()) {
      if (action === 'pause') { this.setPaused(true); return; }
      else if (action === 'camera') {
        const mode = this.rig.cycle(input, this.entity);
        toast(mode === 'cabin'
          ? 'Camera: cabin — I/J/K/L walk, U main deck, O upper deck'
          : 'Camera: ' + mode, mode === 'cabin' ? 3200 : 1200);
      }
      else if (action === 'hud') { toast('HUD: ' + this.shared.hud.cycle(), 1200); }
      else if (action === 'mute') {
        this.config.settings.muted = !this.config.settings.muted;
        this.shared.audio.setMuted(this.config.settings.muted);
        toast(this.config.settings.muted ? 'Sound muted' : 'Sound on', 1200);
      } else if (action === 'atc') {
        this.radioEl.classList.toggle('hidden');
      } else {
        fm.applyActions([action]);
        if (action === 'gear') this.shared.audio.event('gearWarn', 0.4);
      }
    }

    // throttle: touch slider > gamepad lever > keyboard ramp
    const absThrottle = input.touchThrottle !== null ? input.touchThrottle : input.gamepadThrottle;
    if (absThrottle !== null) fm.throttle = absThrottle;
    else fm.throttle = clamp01(fm.throttle + input.axes.throttleDelta * dt * 0.35);
    fm.brakes = input.axes.brakes;
    fm.trim = clamp(fm.trim + input.axes.trim * dt * 0.12, -0.5, 0.5);
    fm.controls.pitch = input.axes.pitch;
    fm.controls.roll = input.axes.roll;
    fm.controls.yaw = input.axes.yaw;

    this.simTime += dt;
    this.windField.sample(fm.pos, this.simTime, this.wind);
    fm.step(dt, {
      groundY: 0,
      wind: this.wind,
      arcade: this.arcade,
      fieldElevM: this.config.airport.elevFt * 0.3048,
      turbulence: this.windField.turbulenceAt(fm.aglM)
    });

    for (const ev of fm.events) {
      if (ev.type === 'touchdown' && ev.gear !== 'nose') {
        this.shared.audio.event('touchdown', clamp(ev.vsFpm / 400, 0.3, 2));
        if (ev.vsFpm < this.damage.hardFpm && ev.vsFpm > 60) {
          if (this.world.isPavement(fm.pos.x, fm.pos.z)) {
            this.effects.tireSmoke(new THREE.Vector3(fm.pos.x, 0.5, fm.pos.z), ev.vsFpm / 500);
          } else {
            // turf touchdown: throw a proper dirt cloud instead of tyre smoke
            this.effects.dustKick(new THREE.Vector3(fm.pos.x, 0.6, fm.pos.z),
              new THREE.Vector3(-fm.vel.x * 0.3, 3 + ev.vsFpm / 250, -fm.vel.z * 0.3),
              Math.ceil(clamp(ev.vsFpm / 80, 4, 16)), 3.5, 2.2, 0.55);
          }
        }
      }
    }
    this.damage.update(fm, this.world.collidables, this.effects);
    this.atc.update(dt, fm);
    this.shared.audio.update(dt, fm);
  }

  // Jet-blast cone behind the engines (drives grass bending, dust fields
  // and turf scouring). Null when the engines are quiet or well airborne.
  computeBlast() {
    const fm = this.fm;
    if (this.crashed || this.entity.broken || fm.n1 < 0.22 || fm.aglM > 25) return null;
    const offs = this.entity.info.engineOffsets;
    if (!offs.length) return null;
    const mean = new THREE.Vector3();
    for (const o of offs) mean.add(o);
    mean.divideScalar(offs.length);
    const pos = this.entity.worldPoint(mean);
    const dir = new THREE.Vector3(0, 0, 1).applyQuaternion(fm.quat);
    if (fm.reversers) dir.negate();
    dir.y *= 0.2;
    dir.normalize();
    const len = (35 + fm.n1 * fm.n1 * 170) * (fm.reversers ? 0.45 : 1);
    return { pos, dir, len, n1: fm.n1 };
  }

  spawnGroundDust(dt, blast) {
    const fm = this.fm;
    // wheels rolling on turf spray dirt behind the mains; bare-earth patches
    // throw noticeably more of it than healthy sward
    if (fm.onGround && !this.crashed) {
      const speed = Math.hypot(fm.vel.x, fm.vel.z);
      if (speed > 4 && !this.world.isPavement(fm.pos.x, fm.pos.z)) {
        const dirt = this.world.dirt ? this.world.dirt.at(fm.pos.x, fm.pos.z) : 0;
        this._wheelDustAcc = (this._wheelDustAcc || 0) + dt * Math.min(speed, 60) * 0.9 * (1 + 1.6 * dirt);
        while (this._wheelDustAcc >= 1) {
          this._wheelDustAcc -= 1;
          for (const g of ['left', 'right']) {
            const p = this.entity.worldPoint(fm.gearPoints[g]);
            p.y = Math.max(p.y, 0.4);
            this.effects.dustKick(p,
              new THREE.Vector3(-fm.vel.x * 0.22, 1.6 + Math.random() * 2.2, -fm.vel.z * 0.22),
              2, 2.6 + 1.4 * dirt, 1.5, 0.5);
          }
        }
      }
    }
    // jet blast scouring dirt off the turf behind the engines
    if (blast && blast.n1 > 0.45 && fm.aglM < 14) {
      this._blastDustAcc = (this._blastDustAcc || 0) + dt * blast.n1 * 34;
      while (this._blastDustAcc >= 1) {
        this._blastDustAcc -= 1;
        const along = 6 + Math.random() * blast.len * 0.6;
        const bp = blast.pos.clone().addScaledVector(blast.dir, along);
        bp.y = 0.4;
        if (this.world.isPavement(bp.x, bp.z)) continue;
        const dirt = this.world.dirt ? this.world.dirt.at(bp.x, bp.z) : 0;
        this.effects.dustKick(bp,
          blast.dir.clone().multiplyScalar(12 + 32 * blast.n1).setY(1.2 + Math.random() * 3),
          3, 3.8 + 1.8 * dirt, 2.0, 0.55);
      }
    }
  }

  frame(dt) {
    this.time += dt;
    // the flight deck only exists for the cockpit camera — hidden elsewhere
    // it costs nothing, and hiding it also skips the display redraws
    if (this.entity.parts.cockpit) {
      this.entity.parts.cockpit.visible = this.rig.mode === 'cockpit';
      this.fm.windKts = this.windInfo.kts;
      this.fm.windDir = this.windInfo.dirDeg;
    }
    this.entity.syncVisual(dt);
    const blast = this.computeBlast();
    // live wind for grass / dust / windsocks / HUD
    const wf = this.windField;
    const camWind = wf.sample(this.camera.position, this.simTime, this._camWind || (this._camWind = new THREE.Vector3()));
    const speed = camWind.length();
    const windNow = {
      dir: speed > 0.01 ? camWind.clone().divideScalar(speed) : new THREE.Vector3(1, 0, 0),
      sway: 0.12 + speed * 0.055,
      gust: Math.min(Math.max((speed / 0.5144 - wf.baseKts) / Math.max(wf.gustKts, 1), 0), 1)
    };
    this.grass.update(dt, this.time, blast, this.camera.position, windNow);
    this.effects.wind.copy(this.wind);
    this.windInfo = wf.report(this.fm.pos, this.simTime);
    this.effects.fields.length = 0;
    if (blast) {
      this.effects.fields.push({
        x: blast.pos.x, y: blast.pos.y, z: blast.pos.z,
        dx: blast.dir.x, dy: blast.dir.y, dz: blast.dir.z,
        len: blast.len, r2: 90, str: 50 * blast.n1 * blast.n1
      });
    }
    this.spawnGroundDust(dt, blast);
    this.effects.update(dt);
    updateAirportDynamics(this.world, dt, this.time, this.wind);
    this.rig.update(dt, this.entity, this.shared.input, this.tower);
    this.sky.update(this.camera, dt, this.wind);
    updateSunTarget(this.lights.sun, this.fm.pos);
    this.shared.renderer.render(this.scene, this.camera);
    this.shared.hud.draw(dt, this.fm, this.entity, this.rig.mode, {
      fps: this.shared.loop.fps,
      windKts: this.windInfo.kts, windDir: this.windInfo.dirDeg, gustKts: this.windInfo.gustKts
    });
  }

  setPaused(p) {
    this.paused = p;
    $('pause').classList.toggle('hidden', !p);
  }

  dispose() {
    this.entity.dispose();
    this.effects.dispose();
    this.grass.dispose();
    if (this.grass.group) this.scene.remove(this.grass.group);
    this.sky.dispose();
    this.scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
          if (m.map) m.map.dispose();
          m.dispose();
        }
      }
    });
    this.radioEl.classList.add('hidden');
  }
}

// ==================================================================== boot
let sim = null;
let shared = null;
let menu = null;

function onResizeSim(s) {
  if (!s) return;
  s.camera.aspect = innerWidth / innerHeight;
  s.camera.updateProjectionMatrix();
}

async function boot() {
  const [aircraft, airlines, airports] = await Promise.all([
    fetch('data/aircraft.json').then((r) => r.json()),
    fetch('data/airlines.json').then((r) => r.json()),
    fetch('data/airports.json').then((r) => r.json())
  ]);
  const data = { aircraft, airlines, airports };

  const canvas = $('scene');
  shared = {
    renderer: createRenderer(canvas),
    input: new Input(canvas),
    hud: new HUD($('hud')),
    audio: new AudioSystem(),
    loop: new GameLoop()
  };
  shared.renderer.setSize(innerWidth, innerHeight);
  shared.hud.resize();
  if (isTouchDevice()) shared.touch = new TouchControls(shared.input, canvas);

  window.addEventListener('resize', () => {
    shared.renderer.setSize(innerWidth, innerHeight);
    shared.hud.resize();
    onResizeSim(sim);
  });

  menu = new Menu(data, (config) => {
    if (sim) { sim.dispose(); sim = null; }
    sim = new Sim(config, data, shared);
    window.__sim = sim; // debug/testing hook
    if (shared.touch) {
      shared.touch.resetForFlight();
      shared.touch.show();
    }
  });

  // pause overlay buttons
  $('btn-resume').addEventListener('click', () => sim?.setPaused(false));
  $('btn-restart').addEventListener('click', () => { sim?.setPaused(false); sim?.restart(); });
  $('btn-quit').addEventListener('click', () => {
    sim?.setPaused(false);
    if (sim) { sim.dispose(); sim = null; }
    shared.audio.stopEngine();
    shared.touch?.hide();
    menu.show();
  });
  $('btn-crash-restart').addEventListener('click', () => sim?.restart());
  $('btn-crash-quit').addEventListener('click', () => {
    $('crash').classList.add('hidden');
    if (sim) { sim.dispose(); sim = null; }
    shared.audio.stopEngine();
    shared.touch?.hide();
    menu.show();
  });
  // in-pause quick settings
  $('pause-graphics').addEventListener('change', (e) => {
    if (!sim) return;
    const tier = TIERS[e.target.value];
    sim.config.settings.graphics = e.target.value;
    applyTier(shared.renderer, tier);
    toast('Renderer settings applied. Draw distance/clutter changes take effect on the next flight.', 4500);
  });
  $('pause-crash').addEventListener('change', (e) => {
    if (!sim) return;
    sim.damage.crashPhysics = e.target.checked;
    sim.config.settings.crashPhysics = e.target.checked;
  });
  $('pause-difficulty').addEventListener('change', (e) => {
    if (!sim) return;
    sim.arcade = e.target.value === 'arcade';
    sim.damage.arcade = sim.arcade;
    sim.config.settings.difficulty = e.target.value;
  });

  shared.loop.start({
    fixed: (dt) => sim?.fixedStep(dt),
    frame: (dt) => {
      if (sim) sim.frame(dt);
      else shared.renderer.clear();
    }
  });
}

boot().catch((err) => {
  console.error(err);
  document.body.insertAdjacentHTML('beforeend',
    `<div style="position:fixed;inset:20px;background:#300;color:#fff;padding:20px;font-family:monospace;z-index:99">
     Failed to start: ${err.message}<br>Serve this folder over HTTP (e.g. <code>python3 -m http.server</code>) — ES modules cannot load from file://.</div>`);
});
