// Download AWS Terrain Tiles (Terrarium PNG) for a z/x/y range.
// usage: node fetch-dem.mjs <outDir> <z> <x0> <x1> <y0> <y1>
import fs from 'node:fs';
const [,, outDir, z, x0, x1, y0, y1] = process.argv.map((v, i) => i > 3 ? +v : v);
const jobs = []; for (let x = +x0; x <= +x1; x++) for (let y = +y0; y <= +y1; y++) jobs.push([x, y]);
let i = 0;
async function w() { while (i < jobs.length) { const [x, y] = jobs[i++]; const f = `${outDir}/${z}-${x}-${y}.png`; if (fs.existsSync(f)) continue;
  for (let t = 0; t < 4; t++) { try { const r = await fetch(`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${z}/${x}/${y}.png`); if (!r.ok) throw new Error(r.status); fs.writeFileSync(f, Buffer.from(await r.arrayBuffer())); break; } catch (e) { if (t === 3) console.log('fail', x, y, e.message); await new Promise(r => setTimeout(r, 800 * (t + 1))); } } } }
await Promise.all([1, 2, 3, 4].map(w)); console.log('ok', jobs.length);
