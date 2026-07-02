// Headless physics sanity test: takes a 737-800 and a 747-400 through a
// scripted takeoff -> climb -> cruise-ish -> descent profile and asserts the
// numbers stay plausible. Run: npm run test:flight
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as THREE from '../vendor/three.module.js';
import { FlightModel } from '../src/physics/flightModel.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const aircraft = JSON.parse(readFileSync(join(root, 'data/aircraft.json'), 'utf8'));

let failures = 0;
const check = (label, cond, detail) => {
  console.log(`${cond ? '  ok ' : 'FAIL '} ${label}${detail ? ` (${detail})` : ''}`);
  if (!cond) failures++;
};

function testAircraft(id) {
  const v = aircraft.variants.find((x) => x.id === id);
  const fam = aircraft.families[v.family];
  console.log(`\n=== ${v.name} ===`);
  const fm = new FlightModel(v, fam, {});
  const env = { groundY: 0, wind: new THREE.Vector3(), arcade: false, fieldElevM: 0 };
  const dt = 1 / 120;

  // spawn on runway, heading north (slightly settled onto the oleos)
  fm.reset({
    pos: new THREE.Vector3(0, fm.gearHeight * 0.97, 0),
    quat: new THREE.Quaternion(),
    flapIndex: 1, gearDown: true, throttle: 0
  });

  // --- takeoff roll: full thrust, rotate at Vr ---
  fm.throttle = 1;
  let t = 0, liftoffT = null, liftoffDist = null, vrSeen = null;
  while (t < 120 && liftoffT === null) {
    fm.controls.pitch = fm.iasKts > fm.vr ? (fm.pitchDeg < 12 ? 0.5 : 0.05) : 0;
    fm.step(dt, env);
    t += dt;
    if (vrSeen === null && fm.iasKts >= fm.vr) vrSeen = Math.abs(fm.pos.z);
    if (!fm.onGround && fm.aglM > fm.gearHeight + 2) { liftoffT = t; liftoffDist = Math.abs(fm.pos.z); }
  }
  check('lifts off', liftoffT !== null, `t=${liftoffT?.toFixed(0)}s`);
  if (liftoffT === null) return;
  check('takeoff run plausible', liftoffDist > 600 && liftoffDist < v.perf.takeoffM * 1.6,
    `${Math.round(liftoffDist)} m vs book ${v.perf.takeoffM} m`);

  // --- climb 90 s at moderate pitch ---
  let stalled = false;
  const climbStart = fm.pos.y;
  for (let i = 0; i < 90 / dt && fm.pos.y < 3000; i++) {
    fm.controls.pitch = fm.pitchDeg < 12 ? 0.25 : -0.05;
    if (fm.iasKts > fm.vr + 25) { fm.gearDown = false; fm.flapIndex = 0; }
    fm.step(dt, env);
    if (fm.stallWarn) stalled = true;
  }
  check('climbs', fm.pos.y - climbStart > 800, `${Math.round(fm.pos.y)} m`);
  check('no stall during normal climb', !stalled);
  const iasCap = (v.flags || []).includes('supersonic') ? 560 : 420; // SSTs accelerate hard down low
  check('climb speed sane', fm.iasKts > 160 && fm.iasKts < iasCap, `${Math.round(fm.iasKts)} kt IAS`);

  // --- accelerate level-ish: trim for near-zero VS via crude autopilot ---
  for (let i = 0; i < 120 / dt; i++) {
    fm.controls.pitch = Math.max(-0.4, Math.min(0.4, -fm.vsFpm / 4000 - fm.rates.q * 6));
    fm.step(dt, env);
  }
  check('accelerates toward cruise', fm.tasKts > 300, `${Math.round(fm.tasKts)} kt TAS`);
  check('mach below Mmo+0.06', fm.mach < (v.perf.mmo + 0.06), `M${fm.mach.toFixed(2)}`);

  // --- idle descent ---
  fm.throttle = 0.1;
  const descStart = fm.pos.y;
  for (let i = 0; i < 90 / dt; i++) {
    fm.controls.pitch = Math.max(-0.6, Math.min(0.5, -(fm.vsFpm + 1500) / 3500 - fm.rates.q * 4));
    fm.step(dt, env);
  }
  check('descends at idle', fm.pos.y < descStart - 300, `${Math.round(fm.pos.y - descStart)} m over 90 s`);

  // --- stall behaviour: pull hard at low speed ---
  fm.reset({
    pos: new THREE.Vector3(0, 1500, 0),
    quat: new THREE.Quaternion(),
    vel: new THREE.Vector3(0, 0, -90),
    flapIndex: 0, gearDown: false, throttle: 0.2
  });
  fm.n1 = 0.2;
  let warned = false, maxAlpha = 0;
  for (let i = 0; i < 60 / dt; i++) {
    fm.controls.pitch = 0.8;
    fm.step(dt, env);
    if (fm.stallWarn) warned = true;
    maxAlpha = Math.max(maxAlpha, fm.alphaDeg);
  }
  check('stall warning fires when hauled up', warned, `max alpha ${maxAlpha.toFixed(1)}°`);
  check('post-stall does not fly away upward', fm.pos.y < 2600, `${Math.round(fm.pos.y)} m`);
}

testAircraft('b737-800');
testAircraft('b747-400');
testAircraft('concorde');

console.log(failures ? `\n${failures} check(s) FAILED` : '\nAll flight checks passed.');
process.exit(failures ? 1 : 0);
