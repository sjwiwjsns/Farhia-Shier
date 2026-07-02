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
import { AircraftEntity } from './aircraft/entity.js';
import { airlineOperates } from './aircraft/liveries.js';
import { DamageSystem } from './physics/damage.js';
import { Menu } from './ui/menu.js';
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
    this.camera = new THREE.PerspectiveCamera(68, innerWidth / innerHeight, 0.5, this.tier.draw);
    this.lights = createLights(this.scene, this.tier);
    this.sky = createSky(this.scene, this.tier.draw);
    if (this.tier.reflections) this.scene.environment = makeEnvironment(renderer);

    // --- world ---
    this.world = buildAirport(config.airport, this.tier, this.buildFleetPool());
    this.scene.add(this.world.group);

    // --- player aircraft ---
    this.entity = new AircraftEntity({
      variant: config.variant, family: config.family, airline: config.airline,
      scene: this.scene, quality: this.tier.lowMat ? 'low' : 'high', texScale: this.tier.texScale
    });
    if (this.tier.fuselageReflections) {
      this.entity.group.traverse((o) => {
        if (o.material && o.material.isMeshStandardMaterial && o.material.map) {
          o.material.envMapIntensity = 0.85;
          o.material.metalness = 0.3;
          o.material.roughness = 0.35;
        }
      });
    }
    this.fm = this.entity.fm;

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

    // wind: fixed light crosswind, halved in arcade
    const windFrom = 240 * DEG2RAD;
    const windKts = this.arcade ? 4 : 7;
    this.wind = new THREE.Vector3(-Math.sin(windFrom), 0, Math.cos(windFrom)).multiplyScalar(windKts * KTS2MS);
    this.windInfo = { dir: 240, kts: windKts };

    // radio
    this.radioEl = $('radio');
    this.radioEl.innerHTML = '';
    this.radioEl.classList.remove('hidden');
    this.atc = new ATC(config.airport, config.airline, config.runwayEnd, (m) => this.radioMsg(m));

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
        scene: this.scene, quality: this.tier.lowMat ? 'low' : 'high', texScale: this.tier.texScale
      });
      this.fm = this.entity.fm;
      this.crashed = false;
    }
    this.spawn();
    this.atc = new ATC(this.config.airport, this.config.airline, this.config.runwayEnd, (m) => this.radioMsg(m));
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
      else if (action === 'camera') { toast('Camera: ' + this.rig.cycle(input), 1200); }
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

    // throttle
    if (input.gamepadThrottle !== null) fm.throttle = input.gamepadThrottle;
    else fm.throttle = clamp01(fm.throttle + input.axes.throttleDelta * dt * 0.35);
    fm.brakes = input.axes.brakes;
    fm.trim = clamp(fm.trim + input.axes.trim * dt * 0.12, -0.5, 0.5);
    fm.controls.pitch = input.axes.pitch;
    fm.controls.roll = input.axes.roll;
    fm.controls.yaw = input.axes.yaw;

    fm.step(dt, {
      groundY: 0,
      wind: this.wind,
      arcade: this.arcade,
      fieldElevM: this.config.airport.elevFt * 0.3048
    });

    for (const ev of fm.events) {
      if (ev.type === 'touchdown' && ev.gear !== 'nose') {
        this.shared.audio.event('touchdown', clamp(ev.vsFpm / 400, 0.3, 2));
        if (ev.vsFpm < this.damage.hardFpm && ev.vsFpm > 60) {
          this.effects.tireSmoke(new THREE.Vector3(fm.pos.x, 0.5, fm.pos.z), ev.vsFpm / 500);
        }
      }
    }
    this.damage.update(fm, this.world.collidables, this.effects);
    this.atc.update(dt, fm);
    this.shared.audio.update(dt, fm);
  }

  frame(dt) {
    this.time += dt;
    this.entity.syncVisual(dt);
    this.effects.update(dt);
    updateAirportDynamics(this.world, dt, this.time);
    this.rig.update(dt, this.entity, this.shared.input, this.tower);
    this.sky.update(this.camera);
    updateSunTarget(this.lights.sun, this.fm.pos);
    this.shared.renderer.render(this.scene, this.camera);
    this.shared.hud.draw(dt, this.fm, this.entity, this.rig.mode, {
      fps: this.shared.loop.fps, windKts: this.windInfo.kts, windDir: this.windInfo.dir
    });
  }

  setPaused(p) {
    this.paused = p;
    $('pause').classList.toggle('hidden', !p);
  }

  dispose() {
    this.entity.dispose();
    this.effects.dispose();
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

  window.addEventListener('resize', () => {
    shared.renderer.setSize(innerWidth, innerHeight);
    shared.hud.resize();
    onResizeSim(sim);
  });

  menu = new Menu(data, (config) => {
    if (sim) { sim.dispose(); sim = null; }
    sim = new Sim(config, data, shared);
    window.__sim = sim; // debug/testing hook
  });

  // pause overlay buttons
  $('btn-resume').addEventListener('click', () => sim?.setPaused(false));
  $('btn-restart').addEventListener('click', () => { sim?.setPaused(false); sim?.restart(); });
  $('btn-quit').addEventListener('click', () => {
    sim?.setPaused(false);
    if (sim) { sim.dispose(); sim = null; }
    shared.audio.stopEngine();
    menu.show();
  });
  $('btn-crash-restart').addEventListener('click', () => sim?.restart());
  $('btn-crash-quit').addEventListener('click', () => {
    $('crash').classList.add('hidden');
    if (sim) { sim.dispose(); sim = null; }
    shared.audio.stopEngine();
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
