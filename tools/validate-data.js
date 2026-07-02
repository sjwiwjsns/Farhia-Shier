// Referential-integrity checks for the JSON databases. Run: npm run validate
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => JSON.parse(readFileSync(join(root, p), 'utf8'));

const aircraft = read('data/aircraft.json');
const airlines = read('data/airlines.json');
const airports = read('data/airports.json');

let errors = 0;
const err = (msg) => { console.error('ERROR:', msg); errors++; };

// ---- aircraft ----
const familyIds = new Set(Object.keys(aircraft.families));
const variantIds = new Set();
const LAYOUTS = new Set(['wing2', 'wing4', 'tail2', 'trijet727', 'trijetdc10', 'sst4', 'sst4paired']);
for (const [id, fam] of Object.entries(aircraft.families)) {
  if (!fam.geometry?.engines?.layout || !LAYOUTS.has(fam.geometry.engines.layout)) err(`family ${id}: bad engine layout`);
  if (!fam.cockpit) err(`family ${id}: missing cockpit`);
  if (!fam.sound) err(`family ${id}: missing sound profile`);
}
for (const v of aircraft.variants) {
  if (variantIds.has(v.id)) err(`variant ${v.id}: duplicate id`);
  variantIds.add(v.id);
  if (!familyIds.has(v.family)) err(`variant ${v.id}: unknown family ${v.family}`);
  for (const k of ['len', 'span', 'h']) if (!(v.dims?.[k] > 0)) err(`variant ${v.id}: dims.${k}`);
  for (const k of ['mtowKg', 'emptyKg', 'thrustKN', 'cruiseKts', 'ceilingFt', 'stallKts', 'takeoffM', 'landingM', 'wingAreaM2'])
    if (!(v.perf?.[k] > 0)) err(`variant ${v.id}: perf.${k}`);
  if (v.perf && v.perf.emptyKg >= v.perf.mtowKg) err(`variant ${v.id}: empty >= MTOW`);
  if (!Array.isArray(v.era) || v.era.length !== 2) err(`variant ${v.id}: era`);
}
console.log(`aircraft: ${Object.keys(aircraft.families).length} families, ${aircraft.variants.length} variants`);

// ---- airlines ----
const airlineIds = new Set();
for (const al of airlines.airlines) {
  if (airlineIds.has(al.id)) err(`airline ${al.id}: duplicate id`);
  airlineIds.add(al.id);
  if (!al.callsign) err(`airline ${al.id}: missing callsign`);
  if (!al.colors?.fuselage || !al.colors?.tail) err(`airline ${al.id}: colors incomplete`);
  for (const f of al.fleet) {
    if (f === '*') continue;
    if (!familyIds.has(f) && !variantIds.has(f)) err(`airline ${al.id}: fleet ref '${f}' matches no family/variant`);
  }
}
// every non-concept variant must be reachable by at least one airline
import('../src/aircraft/liveries.js').catch(() => null); // liveries needs DOM; replicate matching inline:
const operates = (al, v) => {
  const flags = v.flags || [];
  if (flags.includes('concept') && !al.allowConcept) return false;
  if (al.cargo && !flags.includes('freighter') && !al.fleet.includes(v.id) && !al.fleet.includes(v.family)) return false;
  const inFleet = al.fleet.includes('*') || al.fleet.includes(v.id) || al.fleet.includes(v.family);
  if (!inFleet) return false;
  return v.era[0] <= al.era[1] && v.era[1] >= al.era[0];
};
for (const v of aircraft.variants) {
  const ops = airlines.airlines.filter((al) => operates(al, v));
  if (ops.length === 0) err(`variant ${v.id}: no airline can operate it`);
  if ((v.flags || []).includes('concept')) {
    const real = ops.filter((al) => !al.fictional);
    if (real.length) err(`variant ${v.id}: concept aircraft offered to real airline(s): ${real.map((a) => a.id).join(',')}`);
  }
}
console.log(`airlines: ${airlines.airlines.length}`);

// ---- airports ----
const seen = new Set();
for (const ap of airports.airports) {
  if (seen.has(ap.iata)) err(`airport ${ap.iata}: duplicate`);
  seen.add(ap.iata);
  if (!ap.runways?.length) err(`airport ${ap.iata}: no runways`);
  for (const rw of ap.runways || []) {
    if (!/^\d{2}[LRC]?\/\d{2}[LRC]?$/.test(rw.id)) err(`airport ${ap.iata}: runway id '${rw.id}'`);
    if (!(rw.lenM > 500)) err(`airport ${ap.iata} ${rw.id}: length`);
    if (typeof rw.hdg !== 'number') err(`airport ${ap.iata} ${rw.id}: hdg`);
    const num = parseInt(rw.id, 10) * 10;
    if (Math.abs(((rw.hdg - num + 540) % 360) - 180) > 180 - 0 && false) err('unreachable');
    if (Math.abs(rw.hdg - num) > 15) err(`airport ${ap.iata} ${rw.id}: hdg ${rw.hdg} far from runway number (${num})`);
  }
  if (!ap.terminals?.length) err(`airport ${ap.iata}: no terminals`);
  if (!ap.tower) err(`airport ${ap.iata}: no tower`);
}
console.log(`airports: ${airports.airports.length}`);

if (errors) {
  console.error(`\n${errors} error(s).`);
  process.exit(1);
}
console.log('\nAll data valid.');
