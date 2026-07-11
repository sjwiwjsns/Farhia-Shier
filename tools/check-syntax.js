// Syntax-checks every ES module under src/ with `node --check`.
import { execFileSync } from 'node:child_process';
import { readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.js')) files.push(p);
  }
})(join(root, 'src'));
files.push(join(root, 'tools', 'validate-data.js'), join(root, 'tools', 'server.js'));

let failed = 0;
for (const f of files) {
  try {
    execFileSync(process.execPath, ['--check', f], { stdio: 'pipe' });
  } catch (e) {
    failed++;
    console.error(`SYNTAX ERROR in ${f}\n${e.stderr}`);
  }
}
console.log(`${files.length - failed}/${files.length} modules parse cleanly.`);
if (failed) process.exit(1);
