#!/usr/bin/env node
// Headless physics regression for Blaine Drive.
// Extracts the physics core and validation suite from the shipped index.html (so CI tests exactly what
// players run), executes the full suite, prints a table and exits non-zero if any check is out of tolerance.
//   node blaine-drive/validate.mjs            # table
//   node blaine-drive/validate.mjs --json     # machine-readable results
//   node blaine-drive/validate.mjs --vehicle coupe
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
function block(id) {
  const m = html.match(new RegExp('<script id="' + id + '">([\\s\\S]*?)</script>'));
  if (!m) throw new Error('script block #' + id + ' not found in index.html');
  return m[1];
}
// Evaluate as a plain function body in this realm (node:vm contexts intercept every global lookup and
// run the 480 Hz integrator ~10x slower).
const ctx = new Function(block('bd-physics') + '\n' + block('bd-validate') + '\nreturn { V: BDValidate, P: BDPhysics };')();

const args = process.argv.slice(2);
const json = args.includes('--json');
const vi = args.indexOf('--vehicle');
const opts = vi >= 0 ? { vehicles: [args[vi + 1]] } : {};
const fmt = v => v === null || v === undefined ? '—' : (Math.abs(v) >= 100 ? v.toFixed(0) : Math.abs(v) >= 10 ? v.toFixed(1) : v.toFixed(3));
const t0 = Date.now();
const res = ctx.V.suite(Object.assign({
  onResult: r => { if (!json) console.log((r.pass ? 'PASS' : 'FAIL').padEnd(5), r.vehicle.padEnd(7), r.test.padEnd(42), (fmt(r.value) + ' ' + r.unit).padStart(14), ('[' + fmt(r.lo) + ', ' + fmt(r.hi) + ']').padStart(18), r.note ? ' ' + r.note : ''); }
}, opts));
const ms = Date.now() - t0;
if (json) console.log(JSON.stringify({ passed: res.passed, total: res.total, ms, results: res.results, stats: res.stats }, null, 1));
else console.log(`\n${res.passed}/${res.total} checks passed in ${ms} ms (fixed step ${(1 / ctx.P.DT).toFixed(0)} Hz)`);
process.exit(res.ok ? 0 : 1);
