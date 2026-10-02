import * as THREE from 'three';
import { Pipeline } from './core/pipeline.js';
import { Atmosphere, TIME_PRESETS, atmoUniforms, patchSceneMaterials } from './world/atmosphere.js';
import { buildGround, terrainHeight } from './world/ground.js';
import { buildCity } from './world/buildings.js';
import { buildCoast } from './world/coast.js';
import { buildVegetation, leafSun } from './world/vegetation.js';
import { buildProps, makeBeamMaterial } from './world/props.js';
import { route, spawn, CHECKPOINT_RADIUS, roadsX, nearestRoad, ROAD_HALF, SHORE_X, PIER } from './world/layout.js';
import { PlayerCar } from './vehicles/player.js';
import { Traffic } from './vehicles/traffic.js';
import { buildEffects, SkidMarks } from './fx/particles.js';
import { CameraRig, CAMERA_NAMES } from './camera.js';
import { Hud, formatTime } from './hud.js';
import { Audio } from './audio.js';
import { Input } from './input.js';
import { rand } from './core/rng.js';

const $ = id => document.getElementById(id);
const mobile = matchMedia('(pointer:coarse)').matches;
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode */ } },
};

function fail(err) {
  $('loading').classList.add('hidden');
  $('error').classList.remove('hidden');
  console.error(err);
}

async function main() {
  let pipeline;
  try {
    pipeline = new Pipeline($('world'));
    if (!pipeline.renderer.capabilities.isWebGL2) throw new Error('WebGL 2 unavailable');
  } catch (e) {
    fail(e);
    return;
  }
  const renderer = pipeline.renderer;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 3200);
  camera.layers.enable(1);
  pipeline.init(scene, camera);

  const progress = text => { $('loading-step').textContent = text; return new Promise(r => setTimeout(r, 0)); };

  await progress('Painting the sky…');
  const atmosphere = new Atmosphere(renderer, scene);
  await progress('Paving the boulevards…');
  buildGround(scene, renderer);
  await progress('Raising the skyline…');
  const city = buildCity(scene, renderer);
  await progress('Rolling in the surf…');
  const coast = buildCoast(scene, renderer);
  await progress('Planting palms…');
  const vegetation = buildVegetation(scene, renderer);
  const props = buildProps(scene, renderer, coast.pier.lamps);
  await progress('Fueling up…');
  const player = new PlayerCar(scene, renderer);
  const traffic = new Traffic(scene, renderer);
  const fx = buildEffects(scene, renderer);
  const skids = new SkidMarks(scene);

  // Checkpoint gate: two light columns, a ground ring and a floating chevron.
  const gate = new THREE.Group();
  const columnMat = makeBeamMaterial(0xffc27a, 0.9);
  const columnGeo = new THREE.CylinderGeometry(1.1, 1.1, 40, 20, 1, true);
  columnGeo.translate(0, 20, 0);
  const columns = [-1, 1].map(side => {
    const c = new THREE.Mesh(columnGeo, columnMat);
    c.userData.noAO = true;
    c.layers.set(1);
    gate.add(c);
    return { mesh: c, side };
  });
  const ringMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 1.8, 0.8), transparent: true, opacity: 0.8, depthWrite: false, blending: THREE.AdditiveBlending });
  const ring = new THREE.Mesh(new THREE.RingGeometry(CHECKPOINT_RADIUS - 0.6, CHECKPOINT_RADIUS, 72), ringMat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.06;
  ring.userData.noAO = true;
  gate.add(ring);
  const chevron = new THREE.Mesh(new THREE.ConeGeometry(1.6, 2.6, 3), new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 2.4, 1.1) }));
  chevron.rotation.z = Math.PI;
  chevron.userData.noAO = true;
  gate.add(chevron);
  gate.visible = false;
  scene.add(gate);

  const world = {
    colliders: city.colliders,
    circles: vegetation.trunkColliders,
    piles: (PIER.piles || []).map(([x, z]) => ({ x, z, r: 0.45 })),
  };
  patchSceneMaterials(scene);

  const rig = new CameraRig(camera);
  const hud = new Hud(city.colliders);
  const audio = new Audio();
  const input = new Input();

  const game = {
    state: 'intro', paused: false, mode: 'free', raceTime: 0, checkpoint: 0, route,
    lastX: spawn.x, lastZ: spawn.z, time: 0, frame: 0, flash: 0,
  };
  let qualityName = store.get('pacific-quality') || (mobile ? 'medium' : 'high');
  if (!['ultra', 'high', 'medium', 'low'].includes(qualityName)) qualityName = 'high';
  let timeName = store.get('pacific-time') || 'golden';
  if (!(timeName in TIME_PRESETS) && timeName !== 'cycle') timeName = 'golden';

  function applyQuality(name) {
    qualityName = name;
    store.set('pacific-quality', name);
    pipeline.setQuality(name);
    const q = pipeline.quality;
    atmosphere.setShadowQuality(q.shadow, q.shadowRange);
    coast.setReflections(q.reflections > 0, q.reflections);
    $('quality').value = name;
  }
  pipeline.onResize = () => coast.resize(pipeline.quality.reflections);

  function applyTime(name) {
    timeName = name;
    store.set('pacific-time', name);
    atmosphere.cycle = name === 'cycle';
    if (name !== 'cycle') atmosphere.setHours(TIME_PRESETS[name]);
    else atmosphere.envDirty = true;
    $('time-select').value = name;
  }

  player.reset(spawn.x, spawn.z, spawn.heading);
  const savedColor = store.get('pacific-color');
  if (savedColor) selectColor(savedColor);
  applyQuality(qualityName);
  applyTime(timeName);

  // --- UI ---------------------------------------------------------------
  let toastTimer;
  function toast(text) {
    const el = $('toast');
    el.textContent = text;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
  }

  function selectColor(hex) {
    player.setColor(hex);
    store.set('pacific-color', hex);
    document.querySelectorAll('.swatch').forEach(b => {
      const on = b.dataset.color === hex;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', String(on));
    });
  }

  function setGate() {
    if (game.checkpoint >= route.length) return;
    const [gx, gz] = route[game.checkpoint];
    gate.position.set(gx, 0, gz);
    const onAvenue = Math.abs(gx - nearestRoad(roadsX, gx)) < 1;
    for (const c of columns) c.mesh.position.set(onAvenue ? c.side * (ROAD_HALF + 1) : 0, 0, onAvenue ? 0 : c.side * (ROAD_HALF + 1));
    $('checkpoint-count').textContent = `${game.checkpoint + 1} / ${route.length}`;
  }

  function begin(mode) {
    game.mode = mode;
    game.state = 'play';
    game.paused = false;
    input.clear();
    for (const id of ['intro', 'intro-location', 'intro-footer']) $(id).classList.add('hidden');
    $('hud').classList.remove('hidden');
    document.body.classList.add('playing');
    document.body.classList.toggle('racing', mode === 'race');
    $('race').classList.toggle('hidden', mode !== 'race');
    $('start-trial').classList.toggle('hidden', mode === 'race');
    $('mode-label').textContent = mode === 'race' ? 'TIME TRIAL' : 'FREE ROAM';
    $('mission-title').textContent = mode === 'race' ? 'Follow the afterglow.' : 'Take the long way home.';
    $('mission-subtitle').textContent = mode === 'race' ? `Pass through all ${route.length} golden checkpoints.` : 'Explore Vista Pacífica at your own pace.';
    game.raceTime = 0;
    game.checkpoint = 0;
    player.reset(spawn.x, spawn.z, spawn.heading);
    game.lastX = player.x;
    game.lastZ = player.z;
    gate.visible = mode === 'race';
    setGate();
    rig.snap(player);
    audio.setEnabled(soundOn);
    toast(mode === 'race' ? 'SUNSET RUN · GO' : 'WELCOME TO VISTA PACÍFICA');
  }

  function finishRace() {
    game.paused = true;
    input.clear();
    audio.chime(true);
    $('final-time').textContent = formatTime(game.raceTime);
    const best = Number(store.get('pacific-best')) || null;
    if (!best || game.raceTime < best) {
      store.set('pacific-best', String(game.raceTime));
      $('best-time').textContent = 'A new personal best. Make the coast remember it.';
    } else $('best-time').textContent = 'PERSONAL BEST  ' + formatTime(best);
    $('result').showModal();
    gate.visible = false;
  }

  function pauseGame(settings = false) {
    if ($('result').open) return;
    game.paused = true;
    input.clear();
    $('menu-title').textContent = settings ? 'Make it your drive.' : 'Take a breather.';
    $('menu-description').textContent = settings ? 'Tune the look of the coast to your machine.' : 'The coast will be right here.';
    $('resume').textContent = game.state === 'intro' ? 'BACK TO THE COAST' : 'BACK TO THE DRIVE';
    $('back-title').classList.toggle('hidden', game.state === 'intro');
    $('restart-race').textContent = game.mode === 'race' && game.state === 'play' ? 'RESTART SUNSET RUN' : 'START SUNSET RUN';
    if (!$('menu').open) $('menu').showModal();
  }

  function closeMenu() {
    $('menu').close();
    game.paused = false;
    input.clear();
  }

  function cameraSwitch(value) {
    rig.mode = value ?? (rig.mode + 1) % CAMERA_NAMES.length;
    $('camera-select').value = rig.mode;
    if (game.state === 'play') {
      toast(CAMERA_NAMES[rig.mode]);
      rig.snap(player);
    }
  }

  function cycleTime() {
    const order = ['golden', 'dusk', 'night', 'dawn', 'noon', 'cycle'];
    const next = order[(order.indexOf(timeName) + 1) % order.length];
    applyTime(next);
    toast({ golden: 'GOLDEN HOUR', dusk: 'BLUE HOUR', night: 'MIDNIGHT', dawn: 'FIRST LIGHT', noon: 'HIGH NOON', cycle: 'LIVE DAY CYCLE' }[next]);
  }

  function toggleMap() {
    if (game.state !== 'play') return;
    hud.setExpanded(!hud.expanded);
    document.querySelector('.map-panel').classList.toggle('expanded', hud.expanded);
    $('map-button').setAttribute('aria-label', hud.expanded ? 'Close expanded map' : 'Expand map');
  }

  function resetCar() {
    if (game.mode === 'race') {
      game.raceTime = 0;
      game.checkpoint = 0;
      player.reset(spawn.x, spawn.z, spawn.heading);
      setGate();
      toast('RUN RESTARTED');
    } else {
      player.safeRespawn();
      toast('BACK ON THE ROAD');
    }
    game.lastX = player.x;
    game.lastZ = player.z;
    rig.snap(player);
  }

  function backToTitle() {
    closeMenu();
    game.state = 'intro';
    gate.visible = false;
    document.body.classList.remove('playing', 'racing');
    $('hud').classList.add('hidden');
    if (hud.expanded) toggleMapForce(false);
    for (const id of ['intro', 'intro-location', 'intro-footer']) $(id).classList.remove('hidden');
    player.reset(spawn.x, spawn.z, spawn.heading);
  }
  function toggleMapForce(on) {
    hud.setExpanded(on);
    document.querySelector('.map-panel').classList.toggle('expanded', on);
  }

  let soundOn = store.get('pacific-sound') !== 'off';
  function renderSoundButton() {
    $('sound').setAttribute('aria-label', soundOn ? 'Mute sound' : 'Enable sound');
    $('sound').querySelector('span').style.display = soundOn ? 'none' : 'block';
  }
  renderSoundButton();

  $('drive').onclick = () => begin('free');
  $('trial').onclick = () => begin('race');
  $('start-trial').onclick = () => begin('race');
  $('pause').onclick = () => pauseGame();
  $('settings').onclick = () => pauseGame(true);
  $('close-menu').onclick = closeMenu;
  $('resume').onclick = closeMenu;
  $('restart-race').onclick = () => { closeMenu(); begin('race'); };
  $('back-title').onclick = backToTitle;
  $('menu').addEventListener('cancel', e => { e.preventDefault(); closeMenu(); });
  $('result').addEventListener('cancel', e => e.preventDefault());
  $('race-again').onclick = () => { $('result').close(); begin('race'); };
  $('free-roam').onclick = () => { $('result').close(); begin('free'); };
  $('quality').onchange = e => applyQuality(e.target.value);
  $('time-select').onchange = e => applyTime(e.target.value);
  $('camera-select').onchange = e => cameraSwitch(Number(e.target.value));
  $('sound').onclick = () => {
    soundOn = !soundOn;
    store.set('pacific-sound', soundOn ? 'on' : 'off');
    audio.setEnabled(soundOn && game.state === 'play');
    if (soundOn) audio.start();
    renderSoundButton();
    toast(soundOn ? 'SOUND ON' : 'SOUND OFF');
  };
  $('map-button').onclick = toggleMap;
  for (const btn of document.querySelectorAll('.swatch')) btn.onclick = () => selectColor(btn.dataset.color);

  const blocked = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space']);
  addEventListener('keydown', e => {
    if (e.target.tagName === 'SELECT') return;
    if (blocked.has(e.code)) e.preventDefault();
    if (e.repeat) return;
    if (e.code === 'Escape') {
      e.preventDefault();
      if ($('menu').open) closeMenu();
      else if (game.state === 'play') pauseGame();
      return;
    }
    if (e.code === 'Enter' && game.state === 'intro' && !game.paused) { begin('free'); return; }
    if (e.code === 'KeyT' && !game.paused) { cycleTime(); return; }
    if (game.state !== 'play' || game.paused) return;
    if (e.code === 'KeyP') return pauseGame();
    if (e.code === 'KeyR') return resetCar();
    if (e.code === 'KeyC') return cameraSwitch();
    if (e.code === 'KeyM') return toggleMap();
    if (e.code === 'KeyH') { audio.horn(3); return; }
    input.keys.add(e.code);
  });
  addEventListener('keyup', e => input.keys.delete(e.code));
  addEventListener('blur', () => { input.clear(); if (game.state === 'play' && !game.paused) pauseGame(); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { input.clear(); if (game.state === 'play' && !game.paused) pauseGame(); }
  });
  input.onPadPress = name => {
    if (name === 'pause') return game.paused ? closeMenu() : game.state === 'play' ? pauseGame() : begin('free');
    if (game.state !== 'play' || game.paused) return;
    if (name === 'camera') cameraSwitch();
    if (name === 'map') toggleMap();
    if (name === 'reset') resetCar();
  };
  for (const btn of document.querySelectorAll('[data-key]')) {
    const clear = () => { input.keys.delete(btn.dataset.key); btn.classList.remove('pressed'); };
    btn.addEventListener('pointerdown', e => {
      e.preventDefault();
      if (game.paused) return;
      btn.setPointerCapture(e.pointerId);
      input.keys.add(btn.dataset.key);
      btn.classList.add('pressed');
    });
    btn.addEventListener('pointerup', clear);
    btn.addEventListener('pointercancel', clear);
    btn.addEventListener('lostpointercapture', clear);
  }
  addEventListener('resize', () => pipeline.applySize());

  // --- Simulation -------------------------------------------------------
  const tmpV = new THREE.Vector3();
  const sunScreen = new THREE.Vector3();
  let sunVis = 0;
  const exhaust = [new THREE.Vector3(-0.42, 0.32, 2.36), new THREE.Vector3(0.42, 0.32, 2.36)];

  function rayHitsBox(ox, oy, oz, dx, dy, dz, b) {
    let tmin = 0, tmax = 2000;
    for (const [o, d, lo, hi] of [[ox, dx, b.x - b.w / 2, b.x + b.w / 2], [oy, dy, 0, b.h], [oz, dz, b.z - b.d / 2, b.z + b.d / 2]]) {
      if (Math.abs(d) < 1e-6) { if (o < lo || o > hi) return false; continue; }
      let t1 = (lo - o) / d, t2 = (hi - o) / d;
      if (t1 > t2) [t1, t2] = [t2, t1];
      tmin = Math.max(tmin, t1);
      tmax = Math.min(tmax, t2);
      if (tmin > tmax) return false;
    }
    return true;
  }

  function sunVisibility() {
    const d = atmosphere.sunDir;
    if (atmosphere.elevation < -0.5) return 0;
    const o = camera.position;
    for (const b of city.buildingTops) if (rayHitsBox(o.x, o.y, o.z, d.x, d.y, d.z, b)) return 0;
    for (let t = 60; t < 1600; t *= 1.35) if (o.y + d.y * t < terrainHeight(o.x + d.x * t, o.z + d.z * t)) return 0;
    sunScreen.copy(o).addScaledVector(d, 1000).project(camera);
    if (sunScreen.z > 1) return 0;
    const edge = Math.max(Math.abs(sunScreen.x), Math.abs(sunScreen.y));
    return THREE.MathUtils.clamp(1.25 - edge, 0, 1) * THREE.MathUtils.smoothstep(atmosphere.elevation, -0.5, 4);
  }

  function emitEffects(dt) {
    const fast = Math.abs(player.speed) > 3;
    const sliding = (player.slip > 3.2 && fast) || player.wheelspin > 0.3;
    const sand = player.surface === 'sand' && player.y < 0.5;
    player.group.updateMatrixWorld();
    const light = new THREE.Color().copy(atmosphere.hemi.color).multiplyScalar(atmosphere.hemi.intensity * 0.55)
      .add(new THREE.Color().copy(atmosphere.sun.color).multiplyScalar(atmosphere.elevation > 0 ? atmosphere.sun.intensity * 0.22 : 0));
    fx.smoke.uniforms.light.value.copy(light);
    fx.dust.uniforms.light.value.copy(light);
    player.wheels.forEach((w, i) => {
      if (w.front) return;
      tmpV.set(w.x, 0.05, w.z).applyMatrix4(player.group.matrixWorld);
      skids.add(i, tmpV.x, player.y, tmpV.z, !sand && (sliding || (player.brake > 0 && player.speed > 14 && player.handbrake)), 0.24);
      const intensity = Math.min(1, (player.slip - 3) / 9) + player.wheelspin;
      if (!sand && sliding && rand() < intensity * 60 * dt) {
        fx.smoke.emit(tmpV.x, tmpV.y + 0.3, tmpV.z, player.vx * 0.15 + (rand() - 0.5) * 1.5, 0.6 + rand(), player.vz * 0.15 + (rand() - 0.5) * 1.5, 1.2 + rand() * 0.8, 2.2 + rand() * 1.2, 0.5 * Math.min(1, intensity + 0.3), 0.85, 0.85, 0.86);
      }
      if (sand && fast && rand() < Math.min(1, Math.abs(player.speed) / 25) * 40 * dt) {
        fx.dust.emit(tmpV.x, tmpV.y + 0.2, tmpV.z, (rand() - 0.5) * 2, 0.8 + rand(), (rand() - 0.5) * 2, 0.9 + rand() * 0.6, 1.4 + rand(), 0.55, 0.78, 0.68, 0.52);
      }
    });
    if (player.boosting) {
      for (const e of exhaust) {
        tmpV.copy(e).applyMatrix4(player.group.matrixWorld);
        const back = new THREE.Vector3(Math.sin(player.heading), 0, Math.cos(player.heading));
        for (let k = 0; k < 2; k++) {
          const hot = rand();
          fx.flames.emit(tmpV.x, tmpV.y, tmpV.z, player.vx + back.x * (6 + rand() * 4), rand() * 0.4, player.vz + back.z * (6 + rand() * 4), 0.35 + rand() * 0.25, 0.12 + rand() * 0.08, 1, 1.4 + hot, 0.8 + hot * 1.4, 2.8);
        }
      }
    }
    if (player.impact > 4) {
      const fwd = new THREE.Vector3(-Math.sin(player.heading), 0, -Math.cos(player.heading));
      const n = Math.min(40, Math.floor(player.impact * 2));
      for (let k = 0; k < n; k++) {
        fx.sparks.emit(player.x + fwd.x * 2, player.y + 0.5, player.z + fwd.z * 2, (rand() - 0.5) * 9, rand() * 5, (rand() - 0.5) * 9, 0.12 + rand() * 0.1, 0.4 + rand() * 0.5, 1, 6, 3.2, 1);
      }
      audio.impact(player.impact);
      rig.shake = Math.min(0.5, player.impact * 0.03);
    }
  }

  function checkpoints(dt) {
    if (game.mode !== 'race' || game.checkpoint >= route.length) return;
    game.raceTime += dt;
    const [gx, gz] = route[game.checkpoint];
    const ax = game.lastX, az = game.lastZ, bx = player.x - ax, bz = player.z - az;
    const len = bx * bx + bz * bz;
    const t = len ? THREE.MathUtils.clamp(((gx - ax) * bx + (gz - az) * bz) / len, 0, 1) : 0;
    if (Math.hypot(gx - ax - bx * t, gz - az - bz * t) < CHECKPOINT_RADIUS) {
      game.checkpoint++;
      if (game.checkpoint === route.length) finishRace();
      else {
        setGate();
        audio.chime();
        toast(`CHECKPOINT ${game.checkpoint} / ${route.length}`);
        game.flash = 1;
      }
    }
  }

  function simulate(dt, inp) {
    traffic.update(dt, game.time, player, car => audio.horn(Math.hypot(car.x - player.x, car.z - player.z)));
    if (game.state !== 'play') return;
    const steps = Math.ceil(dt / (1 / 120));
    for (let i = 0; i < steps; i++) {
      game.lastX = player.x;
      game.lastZ = player.z;
      player.update(dt / steps, inp, world);
      checkpoints(dt / steps);
      if (game.paused) break;
    }
  }

  // --- Frame loop -------------------------------------------------------
  const clock = new THREE.Clock();
  renderer.info.autoReset = false;
  function frame() {
    requestAnimationFrame(frame);
    renderer.info.reset();
    const rawDt = clock.getDelta();
    const dt = Math.min(rawDt, 0.05);
    game.time += dt;
    game.frame++;
    const inp = input.poll();

    if (!game.paused) {
      simulate(dt, inp);
      if (game.state === 'play') {
        emitEffects(dt);
        rig.update(player, dt);
      } else {
        rig.orbit(player, game.time);
      }
    }
    player.setLights(atmosphere.lampFactor, player.brake > 0 && player.speed > 0.5, player.gear < 0);

    // Shadows and sky follow a point a little ahead of the car.
    const focus = tmpV.set(player.x - Math.sin(player.heading) * pipeline.quality.shadowRange * 0.35, 0, player.z - Math.cos(player.heading) * pipeline.quality.shadowRange * 0.35);
    atmosphere.update(dt, game.time, focus, camera);
    leafSun.value.copy(atmosphere.sun.color).multiplyScalar(atmosphere.elevation > -1 ? atmosphere.sun.intensity : 0.1);
    city.update(atmosphere.lampFactor, game.time);
    props.update(game.time, atmosphere.lampFactor);
    coast.update(game.time, atmosphere);
    traffic.sync(atmosphere.lampFactor, player);
    for (const p of Object.values(fx)) p.update(game.paused ? 0 : dt);

    // Gate animation.
    if (gate.visible) {
      chevron.position.y = 12 + Math.sin(game.time * 2) * 0.6;
      chevron.rotation.y = game.time * 0.8;
      columnMat.uniforms.intensity.value = 0.55 + Math.sin(game.time * 3) * 0.12;
      ringMat.opacity = 0.65 + Math.sin(game.time * 3) * 0.15;
    }

    // Post-processing inputs.
    renderer.toneMappingExposure = atmosphere.exposure;
    const g = pipeline.grade.uniforms;
    g.time.value = game.time;
    sunVis = THREE.MathUtils.damp(sunVis, sunVisibility(), 10, dt);
    g.sunVisible.value = pipeline.quality.grade ? sunVis * 0.8 : 0;
    g.sunPos.value.set(sunScreen.x * 0.5 + 0.5, sunScreen.y * 0.5 + 0.5);
    g.sunColor.value.copy(atmoUniforms.fogSunColor.value);
    const speed01 = THREE.MathUtils.clamp((Math.abs(player.speed) - 30) / 35, 0, 1);
    g.speedBlur.value = game.state === 'play' && pipeline.quality.grade ? speed01 * 0.6 + (player.boosting ? 0.45 : 0) : 0;
    game.flash = Math.max(0, game.flash - dt * 3);
    g.flash.value = game.flash;
    g.night.value = atmosphere.nightFactor;
    if (pipeline.bloom) pipeline.bloom.strength = 0.36 + atmosphere.lampFactor * 0.22;

    pipeline.render();
    if (game.state === 'play' && game.frame % 2 === 0) hud.update(player, game, traffic, atmosphere);
    if (game.frame % 30 === 0) $('world-clock').textContent = atmosphere.clockLabel;
    audio.update({
      rpm: player.rpm, throttle: player.throttle, speed: player.speed, slip: player.slip + player.wheelspin * 12,
      boosting: player.boosting, active: game.state === 'play' && !game.paused, shoreDistance: Math.abs(camera.position.x - SHORE_X), time: game.time,
    });
    if (game.state === 'play' && !game.paused) pipeline.adapt(rawDt);
  }

  player.onShift = up => audio.shift(up > 0);

  // Compile every shader before the first frame so driving never hitches.
  await progress('Warming up the engine…');
  rig.orbit(player, 0);
  atmosphere.update(0, 0, tmpV.set(player.x, 0, player.z), camera);
  try {
    await renderer.compileAsync(scene, camera);
  } catch { /* fall back to lazy compilation */ }
  frame();
  requestAnimationFrame(() => $('loading').classList.add('hidden'));

  // Hooks for automated testing and curious players.
  window.__pacific = {
    getState: () => ({
      state: game.state, mode: game.mode, paused: game.paused, speed: player.speed, heading: player.heading,
      nitro: player.nitro, position: { x: player.x, z: player.z, y: player.y }, checkpoint: game.checkpoint,
      raceTime: game.raceTime, quality: qualityName, time: atmosphere.hours, gear: player.gear, rpm: player.rpm,
      distanceTravelled: player.distance, renderScale: pipeline.scale, drawCalls: renderer.info.render.calls,
      triangles: renderer.info.render.triangles,
    }),
    setTime: h => { atmosphere.cycle = false; atmosphere.setHours(h); },
    setQuality: applyQuality,
    teleport: (x, z, heading = 0) => { player.reset(x, z, heading); rig.snap(player); },
    // Advance the simulation without rendering (for automated tests).
    step: (seconds, controls = {}) => {
      const inp = { throttle: 0, brake: 0, steer: 0, handbrake: false, nitro: false, ...controls };
      for (let t = 0; t < seconds && !game.paused; t += 1 / 60) {
        game.time += 1 / 60;
        simulate(1 / 60, inp);
      }
      rig.snap(player);
      return window.__pacific.getState();
    },
    traffic: () => traffic.cars.map(c => ({ x: +c.x.toFixed(1), z: +c.z.toFixed(1), speed: +c.speed.toFixed(1), axis: c.axis, turn: !!c.turn, hit: !!c.hit })),
    reset: resetCar,
    camera: cameraSwitch,
    debug: { scene, atmosphere, pipeline, renderer, camera, rig },
  };
}

main().catch(fail);
