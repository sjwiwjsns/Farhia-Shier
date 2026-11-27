// Download OpenFreeMap vector tiles for a bbox.
// usage: node fetch-tiles.mjs <outDir> <z> <west> <south> <east> <north>
import fs from 'node:fs';
const [,, outDir, z, w, s, e, n] = process.argv;
const Z = +z;
const lon2x = (lon) => Math.floor((+lon + 180) / 360 * 2 ** Z);
const lat2y = (lat) => { const r = +lat * Math.PI / 180; return Math.floor((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2 * 2 ** Z); };
const x0 = lon2x(w), x1 = lon2x(e), y0 = lat2y(n), y1 = lat2y(s);
// current OpenFreeMap planet build (the dated path changes weekly)
const tpl = (await (await fetch('https://tiles.openfreemap.org/planet')).json()).tiles[0];
const jobs = [];
for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) jobs.push([x, y]);
console.log('tiles', jobs.length, x0, x1, y0, y1);
let i = 0;
async function worker() {
  while (i < jobs.length) {
    const [x, y] = jobs[i++];
    const f = `${outDir}/${Z}-${x}-${y}.pbf`;
    if (fs.existsSync(f)) continue;
    for (let t = 0; t < 4; t++) {
      try {
        const r = await fetch(tpl.replace('{z}', Z).replace('{x}', x).replace('{y}', y));
        if (!r.ok) throw new Error(r.status);
        fs.writeFileSync(f, Buffer.from(await r.arrayBuffer()));
        break;
      } catch (err) { if (t === 3) console.log('fail', x, y, err.message); await new Promise(r => setTimeout(r, 1000 * (t + 1))); }
    }
  }
}
await Promise.all([1, 2, 3, 4].map(worker));
console.log('done');
