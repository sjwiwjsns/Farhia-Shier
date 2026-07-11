// Procedural airport + surrounding scenery builder.
// Consumes one entry from data/airports.json and a graphics tier config.
// Returns { group, collidables, runways, gates, movers } — all flat ground (y=0).
import * as THREE from 'three';
import { DEG2RAD, mulberry32, hashString, clamp, lerp } from '../core/math.js';
import { buildAircraft } from '../aircraft/aircraftFactory.js';
import { generateLivery, airlineOperates } from '../aircraft/liveries.js';

const FT2M = 0.3048;

function lambertOrStandard(tier, params) {
  return tier.lowMat ? new THREE.MeshLambertMaterial(params)
    : new THREE.MeshStandardMaterial({ metalness: 0.05, roughness: 0.85, ...params });
}

// ---------------------------------------------------------- building facades
// Procedural windows computed in the fragment shader from WORLD position:
// windows keep a fixed real-world size (one floor = floorH metres), so the
// same material puts correct facades on instanced boxes of ANY scale — the
// whole skyline stays a single draw call. Two looks:
//   'office' — punched-window grid, taller glass lobby, the odd lit interior,
//              subtle grime gradient, darker speckled roof with AC clutter
//   'ribbon' — the continuous glass bands + mullions of terminal buildings
// Works on Lambert and Standard materials (shared chunks), instanced or not.
function patchFacadeShader(mat, opts = {}) {
  const mode = opts.mode || 'office';
  const winW = (opts.winW ?? 3.2).toFixed(3);
  const floorH = (opts.floorH ?? 3.6).toFixed(3);
  const mullW = (opts.mullW ?? 2.8).toFixed(3);
  // three's program cache keys on onBeforeCompile SOURCE TEXT, which is
  // identical for every facade variant — key on the actual params instead,
  // or office and ribbon materials would silently share one program
  mat.customProgramCacheKey = () => `facade|${mode}|${winW}|${floorH}|${mullW}`;
  mat.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vFacPos;\nvarying vec3 vFacNrm;')
      .replace('#include <fog_vertex>', `#include <fog_vertex>
  #ifdef USE_INSTANCING
    vec4 facW = modelMatrix * instanceMatrix * vec4(position, 1.0);
    vFacNrm = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
  #else
    vec4 facW = modelMatrix * vec4(position, 1.0);
    vFacNrm = normalize(mat3(modelMatrix) * normal);
  #endif
  vFacPos = facW.xyz;`);
    const office = /* glsl */`
    float u = nA.x > nA.z ? vFacPos.z : vFacPos.x;
    vec2 grid = vec2(u / ${winW}, vFacPos.y / ${floorH});
    vec2 cell = floor(grid);
    vec2 f = fract(grid);
    // punched windows; the ground floor gets a taller glass lobby
    float win = step(0.17, f.x) * step(f.x, 0.83) * step(0.28, f.y) * step(f.y, 0.84);
    float lobby = step(vFacPos.y, ${floorH}) * step(0.6, vFacPos.y) * step(0.08, f.x) * step(f.x, 0.92);
    win = max(win * step(${floorH}, vFacPos.y), lobby);
    float h = facHash(cell);
    vec3 glass = mix(vec3(0.10, 0.13, 0.18), vec3(0.30, 0.38, 0.47), h);
    if (h > 0.965) glass = vec3(0.55, 0.47, 0.28);  // the odd lit interior
    diffuseColor.rgb = mix(diffuseColor.rgb, glass, win * 0.92);
    diffuseColor.rgb *= 0.80 + 0.20 * clamp(vFacPos.y * 0.025, 0.0, 1.0); // street grime`;
    const ribbon = /* glsl */`
    float u = nA.x > nA.z ? vFacPos.z : vFacPos.x;
    float fy = fract(vFacPos.y / ${floorH});
    float band = step(0.32, fy) * step(fy, 0.86) * step(1.1, vFacPos.y);
    float mull = step(0.06, fract(u / ${mullW}));
    float h = facHash(vec2(floor(u / ${mullW}), floor(vFacPos.y / ${floorH})));
    vec3 glass = mix(vec3(0.13, 0.18, 0.23), vec3(0.28, 0.36, 0.44), h);
    diffuseColor.rgb = mix(diffuseColor.rgb, glass, band * mull * 0.94);`;
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
varying vec3 vFacPos;
varying vec3 vFacNrm;
// sin-free hash, inputs wrapped small: fp32 sin(BIG) correlates neighbouring
// cells into giant blotches at world-scale coordinates
float facHash(vec2 c) {
  c = mod(c, 128.0);
  c = fract(c * vec2(0.1031, 0.1030));
  c += dot(c, c.yx + 33.33);
  return fract((c.x + c.y) * c.x);
}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
{
  vec3 nA = abs(vFacNrm);
  if (nA.y < 0.55) {
${mode === 'office' ? office : ribbon}
  } else if (vFacNrm.y > 0.55) {
${mode === 'office' ? `    // roof: darker deck with mechanical-unit speckle
    float rh = facHash(floor(vFacPos.xz / 5.0));
    diffuseColor.rgb *= 0.52 + 0.20 * step(0.82, rh);`
    : `    // terminal roofs read close-up: plain membrane deck (the instanced
    // AC units supply the physical detail — speckle here looks like grime)
    diffuseColor.rgb *= 0.62;`}
  }
}`);
  };
  return mat;
}

// ------------------------------------------------------------ runway texture
function runwayTexture(idPair, lenM, widM, texScale) {
  const [endA, endB] = idPair.split('/');
  const W = 200, H = Math.round(clamp(lenM * 1.1 * texScale, 512, 3400));
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  const pxm = H / lenM; // pixels per meter along runway

  g.fillStyle = '#43464b';
  g.fillRect(0, 0, W, H);
  // asphalt patchiness
  for (let i = 0; i < 240; i++) {
    g.fillStyle = `rgba(${30 + Math.random() * 40},${32 + Math.random() * 40},${36 + Math.random() * 40},0.18)`;
    g.fillRect(Math.random() * W, Math.random() * H, 8 + Math.random() * 30, 20 + Math.random() * 90);
  }
  // edge lines
  g.fillStyle = '#e8e6da';
  g.fillRect(3, 0, 4, H);
  g.fillRect(W - 7, 0, 4, H);

  const drawEnd = (top, label) => {
    g.save();
    if (top) { g.translate(W, 0); g.rotate(Math.PI); g.translate(0, -H); }
    const yBase = H;
    // piano keys
    const keys = 8, kw = W / (keys * 2 + 1);
    g.fillStyle = '#e8e6da';
    for (let k = 0; k < keys; k++) {
      g.fillRect(kw * (1 + k * 2) + (k >= keys / 2 ? kw * 0.6 : 0) - (k < keys / 2 ? kw * 0.3 : 0), yBase - 60 * pxm * 0.5 - 8, kw, 42 * pxm * 0.5);
    }
    // number
    g.font = `bold ${Math.round(26 * pxm)}px Arial`;
    g.textAlign = 'center';
    g.fillText(label.replace(/([LRC])$/, ' $1').trim().split(' ')[0], W / 2, yBase - 70 * pxm);
    const suffix = label.match(/([LRC])$/);
    if (suffix) g.fillText(suffix[1], W / 2, yBase - 44 * pxm);
    // touchdown zone bars + aiming blocks
    for (const d of [150, 225, 300, 375]) {
      const y = yBase - d * pxm;
      g.fillRect(W * 0.10, y, W * 0.13, 22 * pxm * 0.6);
      g.fillRect(W * 0.77, y, W * 0.13, 22 * pxm * 0.6);
    }
    g.fillRect(W * 0.14, yBase - 300 * pxm, W * 0.17, 45 * pxm * 0.6);
    g.fillRect(W * 0.69, yBase - 300 * pxm, W * 0.17, 45 * pxm * 0.6);
    g.restore();
  };
  drawEnd(false, endA);
  drawEnd(true, endB);

  // centreline dashes (30m dash / 20m gap)
  g.fillStyle = '#dcdacf';
  const dash = 30 * pxm, gap = 20 * pxm;
  for (let y = 430 * pxm; y < H - 430 * pxm; y += dash + gap) {
    g.fillRect(W / 2 - 3, y, 6, dash);
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.anisotropy = 4;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function stripTexture(color, lineColor) {
  const cv = document.createElement('canvas');
  cv.width = 64; cv.height = 64;
  const g = cv.getContext('2d');
  g.fillStyle = color; g.fillRect(0, 0, 64, 64);
  g.fillStyle = lineColor; g.fillRect(29, 0, 6, 64);
  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function groundTexture(base, blotch) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 256;
  const g = cv.getContext('2d');
  g.fillStyle = base; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 120; i++) {
    g.fillStyle = `rgba(${blotch},${0.05 + Math.random() * 0.10})`;
    g.beginPath();
    g.ellipse(Math.random() * 256, Math.random() * 256, 8 + Math.random() * 40, 8 + Math.random() * 40, Math.random() * 3, 0, 7);
    g.fill();
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(60, 60);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const INFIELD_SPAN = 3600; // must match MASK_SPAN in world/grass.js

// Paint the infield ground detail: turf mottling, bare-dirt patches and the
// graded dirt margins that hug every paved edge (real airfields keep a strip
// of cleared earth beside runways and taxiways — this is that strip).
function infieldTexture(size, groundColors, pavement, blobs, desert) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const g = cv.getContext('2d');
  const k = size / (2 * INFIELD_SPAN);
  // dirt has to sit well below the turf's brightness to survive the bright
  // always-day lighting — subtle tones wash out to nothing
  const dirtTones = desert ? ['158,132,88', '142,118,76'] : ['104,86,58', '92,76,50'];

  g.fillStyle = groundColors[0];
  g.fillRect(0, 0, size, size);

  // turf mottling so the field doesn't read as a flat green sheet
  for (let i = 0; i < 700; i++) {
    g.fillStyle = `rgba(${groundColors[1]},${0.04 + Math.random() * 0.09})`;
    g.beginPath();
    g.ellipse(Math.random() * size, Math.random() * size,
      3 + Math.random() * 26, 3 + Math.random() * 26, Math.random() * 3, 0, 7);
    g.fill();
  }

  // graded dirt margins: two layered expansions of every registered pavement
  // footprint (the slab meshes themselves cover the centre, so only the
  // strip just beyond each slab edge stays visible as packed earth)
  for (const [expand, alpha] of [[18, 0.30], [8, 0.5]]) {
    g.fillStyle = `rgba(${dirtTones[0]},${alpha})`;
    for (const r of pavement.rects) {
      g.save();
      g.translate((r.cx + INFIELD_SPAN) * k, (r.cz + INFIELD_SPAN) * k);
      g.rotate(Math.atan2(r.dirZ, r.dirX));
      g.fillRect(-(r.halfL + expand) * k, -(r.halfW + expand) * k,
        2 * (r.halfL + expand) * k, 2 * (r.halfW + expand) * k);
      g.restore();
    }
    for (const c of pavement.circles) {
      g.beginPath();
      g.arc((c.x + INFIELD_SPAN) * k, (c.z + INFIELD_SPAN) * k, (c.r + expand) * k, 0, Math.PI * 2);
      g.fill();
    }
  }

  // bare-earth patches: soft radial gradient + harder core per blob
  for (const b of blobs) {
    const px = (b.x + INFIELD_SPAN) * k, pz = (b.z + INFIELD_SPAN) * k, pr = Math.max(b.r * k, 1.5);
    const tone = dirtTones[(b.r * 7) & 1];
    const grad = g.createRadialGradient(px, pz, 0, px, pz, pr);
    grad.addColorStop(0, `rgba(${tone},${b.a})`);
    grad.addColorStop(0.55, `rgba(${tone},${0.75 * b.a})`);
    grad.addColorStop(1, `rgba(${tone},0)`);
    g.fillStyle = grad;
    g.beginPath();
    g.arc(px, pz, pr, 0, Math.PI * 2);
    g.fill();
  }

  // fine grain so dirt and turf both have tooth up close
  for (let i = 0; i < 2600; i++) {
    g.fillStyle = `rgba(${i % 2 ? dirtTones[1] : '30,40,20'},${0.05 + Math.random() * 0.05})`;
    g.fillRect(Math.random() * size, Math.random() * size, 1.5, 1.5);
  }

  // rim fade back to the plain ground colour so the quad blends into the
  // base terrain disc with no visible seam (fade from transparent-BASE, not
  // transparent black, or the ring darkens mid-gradient)
  const br = parseInt(groundColors[0].slice(1, 3), 16),
        bg = parseInt(groundColors[0].slice(3, 5), 16),
        bb = parseInt(groundColors[0].slice(5, 7), 16);
  const rim = g.createRadialGradient(size / 2, size / 2, size * 0.40, size / 2, size / 2, size * 0.52);
  rim.addColorStop(0, `rgba(${br},${bg},${bb},0)`);
  rim.addColorStop(1, `rgba(${br},${bg},${bb},1)`);
  g.fillStyle = rim;
  g.fillRect(0, 0, size, size);

  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// ================================================================== builder
export function buildAirport(airport, tier, fleetPool = []) {
  const rng = mulberry32(hashString(airport.iata));
  const group = new THREE.Group();
  const collidables = [];
  const gates = [];
  const movers = [];
  const tags = airport.scenery || [];
  const has = (t) => tags.includes(t);

  // ---------------------------------------------------------------- ground
  const groundColors = has('desert') ? ['#b3a077', '120,105,70'] :
    has('island') || has('tropical') ? ['#6f8f57', '60,90,40'] :
    has('plains') || has('prairie') ? ['#8d9468', '110,110,70'] :
    has('forest') ? ['#5e7350', '40,70,40'] : ['#78855e', '80,95,60'];
  const groundMat = lambertOrStandard(tier, { color: groundColors[0] });
  if (tier.texScale >= 0.75) {
    // the sRGB-tagged map already carries the base colour — a tinted
    // material colour would multiply in and double-darken it
    groundMat.map = groundTexture(groundColors[0], groundColors[1]);
    groundMat.color.set('#ffffff');
  }
  const groundR = has('island') ? 11000 : 45000;
  const ground = new THREE.Mesh(new THREE.CircleGeometry(groundR, 48), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = tier.shadows;
  // Coastal fields: slide the land disc away from the water heading so open
  // sea shows beyond ~water.distM on that side while land still runs to the
  // horizon everywhere else.
  if (airport.water && !has('island')) {
    const wd = airport.water.dirDeg * DEG2RAD;
    const wdir = new THREE.Vector3(Math.sin(wd), 0, -Math.cos(wd));
    const shift = groundR - Math.max(airport.water.distM, 800);
    ground.position.set(-wdir.x * shift, 0, -wdir.z * shift);
  }
  group.add(ground);

  if (airport.water || has('coastal') || has('island')) {
    const waterMat = tier.reflections
      ? new THREE.MeshStandardMaterial({ color: '#3b6d8c', metalness: 0.75, roughness: 0.18, envMapIntensity: 0.9 })
      : lambertOrStandard(tier, { color: '#3b6d8c' });
    const water = new THREE.Mesh(new THREE.PlaneGeometry(160000, 160000), waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.y = -2.5; // well below the land disc to avoid depth-fighting at distance
    group.add(water);
  }

  // Pavement registry: every paved surface registers its footprint so grass
  // placement and wheel-dust logic can ask isPavement(x, z). Rects are
  // oriented (dir = long axis); circles are radial.
  const pavement = { rects: [], circles: [] };
  const paveRect = (cx, cz, dirX, dirZ, halfL, halfW) =>
    pavement.rects.push({ cx, cz, dirX, dirZ, halfL, halfW });
  const paveCircle = (x, z, r) => pavement.circles.push({ x, z, r });
  const isPavement = (x, z) => {
    for (const c of pavement.circles) {
      const dx = x - c.x, dz = z - c.z;
      if (dx * dx + dz * dz < c.r * c.r) return true;
    }
    for (const r of pavement.rects) {
      const dx = x - r.cx, dz = z - r.cz;
      const along = dx * r.dirX + dz * r.dirZ;
      if (Math.abs(along) > r.halfL) continue;
      const across = dx * -r.dirZ + dz * r.dirX;
      if (Math.abs(across) < r.halfW) return true;
    }
    return false;
  };

  // ---------------------------------------------------------------- runways
  const runways = [];
  const taxiTex = stripTexture('#4e5257', '#c9a92c');
  const apronCentroid = new THREE.Vector3();
  for (const t of airport.terminals) apronCentroid.add(new THREE.Vector3(t.x, 0, t.z));
  apronCentroid.divideScalar(Math.max(airport.terminals.length, 1));

  for (const rw of airport.runways) {
    const h = rw.hdg * DEG2RAD;
    const dir = new THREE.Vector3(Math.sin(h), 0, -Math.cos(h));
    const perp = new THREE.Vector3(Math.cos(h), 0, Math.sin(h));
    const center = new THREE.Vector3(rw.x, 0, rw.z);

    const tex = runwayTexture(rw.id, rw.lenM, rw.widM, tier.texScale);
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(rw.widM, rw.lenM),
      lambertOrStandard(tier, { map: tex, color: '#ffffff' }));
    mesh.rotation.order = 'YXZ';
    mesh.rotation.y = -h;
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(rw.x, 0.20, rw.z);
    mesh.receiveShadow = tier.shadows;
    group.add(mesh);

    // graded shoulder strip under/around the runway
    const shoulder = new THREE.Mesh(new THREE.PlaneGeometry(rw.widM + 36, rw.lenM + 90),
      lambertOrStandard(tier, { color: '#5b5f56' }));
    shoulder.rotation.order = 'YXZ';
    shoulder.rotation.y = -h;
    shoulder.rotation.x = -Math.PI / 2;
    shoulder.position.set(rw.x, 0.06, rw.z);
    shoulder.receiveShadow = tier.shadows;
    group.add(shoulder);
    paveRect(rw.x, rw.z, dir.x, dir.z, rw.lenM / 2 + 60, rw.widM / 2 + 30);

    const [endA, endB] = rw.id.split('/');
    runways.push({
      id: rw.id, endA, endB, hdg: rw.hdg, lenM: rw.lenM, widM: rw.widM,
      center, dir, perp,
      thresholdA: center.clone().addScaledVector(dir, -rw.lenM / 2),
      thresholdB: center.clone().addScaledVector(dir, rw.lenM / 2)
    });

    // Parallel taxiway on the apron side + 3 connectors
    const side = Math.sign(perp.dot(new THREE.Vector3().subVectors(apronCentroid, center))) || 1;
    const off = (rw.widM / 2 + 90) * side;
    const taxi = new THREE.Mesh(new THREE.PlaneGeometry(24, rw.lenM * 0.92),
      lambertOrStandard(tier, { map: taxiTex.clone() }));
    taxi.material.map.repeat.set(1, rw.lenM / 60);
    taxi.rotation.order = 'YXZ';
    taxi.rotation.y = -h;
    taxi.rotation.x = -Math.PI / 2;
    taxi.position.set(rw.x + perp.x * off, 0.14, rw.z + perp.z * off);
    group.add(taxi);
    paveRect(taxi.position.x, taxi.position.z, dir.x, dir.z, rw.lenM * 0.46 + 10, 22);
    for (const f of [-0.46, 0, 0.46]) {
      const c = new THREE.Mesh(new THREE.PlaneGeometry(20, Math.abs(off) + 12), lambertOrStandard(tier, { color: '#4e5257' }));
      c.rotation.order = 'YXZ';
      c.rotation.y = -h + Math.PI / 2;
      c.rotation.x = -Math.PI / 2;
      const p = center.clone().addScaledVector(dir, f * rw.lenM).addScaledVector(perp, off / 2);
      c.position.set(p.x, 0.12, p.z);
      group.add(c);
      paveRect(p.x, p.z, perp.x, perp.z, (Math.abs(off) + 12) / 2 + 10, 20);
    }
  }

  // Apron slab around terminals + one slab per terminal footprint (covers
  // gates and parked aircraft), so the buildings never sit on turf.
  const apron = new THREE.Mesh(new THREE.CircleGeometry(520, 28), lambertOrStandard(tier, { color: '#63666a' }));
  apron.rotation.x = -Math.PI / 2;
  apron.position.set(apronCentroid.x, 0.10, apronCentroid.z);
  apron.receiveShadow = tier.shadows;
  group.add(apron);
  paveCircle(apronCentroid.x, apronCentroid.z, 560);
  const slabMat = lambertOrStandard(tier, { color: '#616468' });
  for (const t of airport.terminals) {
    const slabR = Math.max(t.lenM, t.widM) / 2 + t.widM + 55;
    const slab = new THREE.Mesh(new THREE.CircleGeometry(slabR, 24), slabMat);
    slab.rotation.x = -Math.PI / 2;
    // 0.17: clearly above the apron disc (0.10) — a 1 cm gap z-fights at
    // ~300 m even with the log depth buffer
    slab.position.set(t.x, 0.17, t.z);
    slab.receiveShadow = tier.shadows;
    group.add(slab);
    paveCircle(t.x, t.z, slabR + 10);
  }
  paveCircle(airport.tower.x, airport.tower.z, 30);

  // ---------------------------------------------------------------- terminals
  const wallMat = lambertOrStandard(tier, { color: '#c9c6bd' });
  const roofMat = lambertOrStandard(tier, { color: '#83878c' });
  // terminal walls carry continuous ribbon-glass window bands (procedural,
  // world-space — see patchFacadeShader); plain wallMat stays on curved
  // roofs/domes where a window grid would smear
  const terminalMat = patchFacadeShader(
    lambertOrStandard(tier, { color: '#c9c6bd' }), { mode: 'ribbon', floorH: 3.4, mullW: 2.8 });
  const glassMat = tier.reflections
    ? new THREE.MeshStandardMaterial({ color: '#5f7f99', metalness: 0.9, roughness: 0.15, envMapIntensity: 1.0 })
    : lambertOrStandard(tier, { color: '#54718a' });

  const roofSpots = []; // terminal roof rectangles -> AC/mechanical clutter
  const addBox = (x, z, rotY, w, hgt, d, matl = terminalMat, collide = true) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, hgt, d), matl);
    m.position.set(x, hgt / 2, z);
    m.rotation.y = rotY;
    m.castShadow = m.receiveShadow = tier.shadows;
    group.add(m);
    if (collide) collidables.push(new THREE.Box3().setFromObject(m));
    if (matl === terminalMat) roofSpots.push({ x, z, rotY, w: w * 0.8, d: d * 0.7, topY: hgt });
    return m;
  };

  const addGatesAlong = (cx, cz, rotY, length, offset, count) => {
    const dir = new THREE.Vector3(Math.sin(rotY + Math.PI / 2), 0, Math.cos(rotY + Math.PI / 2));
    const out = new THREE.Vector3(Math.sin(rotY), 0, Math.cos(rotY));
    for (let i = 0; i < count; i++) {
      const f = (i / Math.max(count - 1, 1) - 0.5) * length * 0.85;
      gates.push({
        pos: new THREE.Vector3(cx + dir.x * f + out.x * offset, 0, cz + dir.z * f + out.z * offset),
        rotY: rotY + Math.PI // nose-in toward the building
      });
    }
  };

  for (const t of airport.terminals) {
    const rot = (t.rotDeg || 0) * DEG2RAD;
    if (t.kind === 'main') {
      if (t.style === 'tent') {
        for (let i = 0; i < 6; i++) {
          const cone = new THREE.Mesh(new THREE.ConeGeometry(t.widM / 4, 26, 6), lambertOrStandard(tier, { color: '#eceae2' }));
          cone.position.set(t.x - t.lenM / 2 + (i + 0.5) * (t.lenM / 6), 18, t.z);
          cone.castShadow = tier.shadows;
          group.add(cone);
        }
        addBox(t.x, t.z, rot, t.lenM, 12, t.widM);
      } else if (t.style === 'swoop') {
        const roof = new THREE.Mesh(new THREE.CylinderGeometry(t.widM * 0.55, t.widM * 0.55, t.lenM, 18, 1, false, 0, Math.PI * 0.7), wallMat);
        roof.rotation.z = Math.PI / 2;
        roof.rotation.y = rot;
        roof.position.set(t.x, 12, t.z);
        group.add(roof);
        addBox(t.x, t.z, rot, t.lenM, 14, t.widM);
      } else if (t.style === 'domes') {
        for (let i = 0; i < 4; i++) {
          const dome = new THREE.Mesh(new THREE.SphereGeometry(t.widM / 2.6, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), wallMat);
          dome.position.set(t.x - t.lenM / 2 + (i + 0.5) * (t.lenM / 4), 12, t.z);
          group.add(dome);
        }
        addBox(t.x, t.z, rot, t.lenM, 12, t.widM);
      } else {
        addBox(t.x, t.z, rot, t.lenM, 20, t.widM);
        addBox(t.x, t.z, rot, t.lenM * 1.01, 8, t.widM * 0.7, glassMat, false).position.y = 12;
      }
      if (t.gates) addGatesAlong(t.x, t.z, rot, t.lenM, t.widM / 2 + 32, t.gates);
    } else if (t.kind === 'pier') {
      addBox(t.x, t.z, rot, t.widM, 13, t.lenM);
      addBox(t.x, t.z, rot, t.widM * 0.9, 5, t.lenM * 1.005, glassMat, false).position.y = 8;
      const n = Math.ceil((t.gates || 4) / 2);
      addGatesAlong(t.x, t.z, rot + Math.PI / 2, t.lenM, t.widM / 2 + 30, n);
      addGatesAlong(t.x, t.z, rot - Math.PI / 2, t.lenM, t.widM / 2 + 30, (t.gates || 4) - n);
    } else if (t.kind === 'satellite' || t.kind === 'round') {
      const r = t.lenM / 2;
      const cyl = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 13, 20), terminalMat);
      cyl.position.set(t.x, 6.5, t.z);
      cyl.castShadow = tier.shadows;
      group.add(cyl);
      const glass = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.02, r * 1.02, 4, 20), glassMat);
      glass.position.set(t.x, 9.5, t.z);
      group.add(glass);
      collidables.push(new THREE.Box3().setFromObject(cyl));
      const count = t.gates || 5;
      for (let i = 0; i < count; i++) {
        const a = (i / count) * Math.PI * 2;
        gates.push({
          pos: new THREE.Vector3(t.x + Math.sin(a) * (r + 32), 0, t.z + Math.cos(a) * (r + 32)),
          rotY: a + Math.PI
        });
      }
    } else if (t.kind === 'horseshoe' || t.kind === 'curve') {
      const segs = 5;
      const arc = t.kind === 'horseshoe' ? Math.PI : Math.PI * 0.66;
      const r = t.lenM / 2;
      for (let i = 0; i < segs; i++) {
        const a = rot + (i / (segs - 1) - 0.5) * arc;
        const px = t.x + Math.sin(a) * r, pz = t.z + Math.cos(a) * r;
        addBox(px, pz, a + Math.PI / 2, t.lenM / segs + 14, 14, t.widM);
      }
      const count = t.gates || 6;
      for (let i = 0; i < count; i++) {
        const a = rot + (i / Math.max(count - 1, 1) - 0.5) * arc;
        gates.push({
          pos: new THREE.Vector3(t.x + Math.sin(a) * (r + t.widM / 2 + 30), 0, t.z + Math.cos(a) * (r + t.widM / 2 + 30)),
          rotY: a + Math.PI
        });
      }
    }
  }

  // Rooftop mechanical clutter: AC units, vents and plant rooms scattered on
  // every terminal roof — one InstancedMesh for all of them.
  if (tier.clutter >= 0.4 && roofSpots.length) {
    let total = 0;
    const per = roofSpots.map((s) => {
      const n = clamp(Math.round((s.w * s.d) / 2600), 2, 9);
      total += n;
      return n;
    });
    const acInst = new THREE.InstancedMesh(
      new THREE.BoxGeometry(1, 1, 1), lambertOrStandard(tier, { color: '#8e949b' }), total);
    const m4 = new THREE.Matrix4();
    const q = new THREE.Quaternion(), sc = new THREE.Vector3(), pos = new THREE.Vector3();
    let idx = 0;
    roofSpots.forEach((s, si) => {
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), s.rotY);
      for (let i = 0; i < per[si]; i++) {
        const lu = (rng() - 0.5) * s.w, lv = (rng() - 0.5) * s.d;
        const bw = 2 + rng() * 3.5, bh = 1.2 + rng() * 2.2, bd = 2 + rng() * 3.5;
        const cy = Math.cos(s.rotY), sy = Math.sin(s.rotY);
        pos.set(s.x + lu * cy + lv * sy, s.topY + bh / 2, s.z - lu * sy + lv * cy);
        sc.set(bw, bh, bd);
        m4.compose(pos, q, sc);
        acInst.setMatrixAt(idx++, m4);
      }
    });
    acInst.instanceMatrix.needsUpdate = true;
    acInst.castShadow = tier.shadows;
    group.add(acInst);
  }

  // Windsocks: react live to the wind field (rotated/drooped per frame).
  const windsocks = [];
  const addWindsock = (x, z) => {
    if (isPavement(x, z)) return;
    const sock = new THREE.Group();
    sock.position.set(x, 0, z);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 6, 6), lambertOrStandard(tier, { color: '#c9ccd1' }));
    pole.position.y = 3;
    sock.add(pole);
    const yawGroup = new THREE.Group();
    yawGroup.position.y = 6;
    sock.add(yawGroup);
    const tiltGroup = new THREE.Group();
    yawGroup.add(tiltGroup);
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.32, 2.2, 8, 1, true), lambertOrStandard(tier, { color: '#e8641e' }));
    cone.geometry.rotateX(Math.PI / 2);       // point along +Z
    cone.geometry.translate(0, 0, 1.1);       // base at the pivot
    tiltGroup.add(cone);
    group.add(sock);
    windsocks.push({ yawGroup, tiltGroup });
  };
  {
    const tw = airport.tower;
    addWindsock(tw.x + 42, tw.z + 26);
    const rw0 = runways[0];
    if (rw0) {
      const p = rw0.thresholdA.clone().addScaledVector(rw0.perp, rw0.widM / 2 + 46);
      addWindsock(p.x, p.z);
    }
  }

  // Tower
  {
    const tw = airport.tower;
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 4.5, tw.hM, 10), wallMat);
    shaft.position.set(tw.x, tw.hM / 2, tw.z);
    shaft.castShadow = tier.shadows;
    group.add(shaft);
    const cab = new THREE.Mesh(new THREE.CylinderGeometry(6.5, 5.2, 7, 10), glassMat);
    cab.position.set(tw.x, tw.hM + 3, tw.z);
    group.add(cab);
    collidables.push(new THREE.Box3().setFromObject(shaft).expandByPoint(new THREE.Vector3(tw.x, tw.hM + 8, tw.z)));
  }

  // ------------------------------------------------- parked aircraft & GSE
  if (tier.clutter > 0 && fleetPool.length) {
    const liveryCache = new Map();
    const maxParked = Math.round(clamp(gates.length * tier.clutter * 0.6, 2, 14));
    const shuffled = [...gates].sort(() => rng() - 0.5).slice(0, maxParked);
    for (const gate of shuffled) {
      const pick = fleetPool[Math.floor(rng() * fleetPool.length)];
      let livery = liveryCache.get(pick.airline.id);
      if (!livery) {
        livery = generateLivery(pick.airline, pick.variant, tier.texScale * 0.5);
        liveryCache.set(pick.airline.id, livery);
      }
      const { group: acGroup, info } = buildAircraft(pick.variant, pick.family, livery, {
        quality: tier.lowMat ? 'low' : 'high', detail: 0.4
      });
      acGroup.position.copy(gate.pos).setY(info.gearHeight);
      acGroup.rotation.y = gate.rotY;
      group.add(acGroup);
      gate.occupied = true;
      // jet bridge
      if (tier.clutter >= 0.4) {
        const bridgeDir = gate.rotY;
        const bx = gate.pos.x + Math.sin(bridgeDir) * info.len * 0.30;
        const bz = gate.pos.z + Math.cos(bridgeDir) * info.len * 0.30;
        const bridge = new THREE.Mesh(new THREE.BoxGeometry(2.6, 3.4, 16), lambertOrStandard(tier, { color: '#9aa0a6' }));
        bridge.position.set(bx, 3.6, bz);
        bridge.rotation.y = bridgeDir + 0.5;
        group.add(bridge);
      }
      // baggage carts
      if (tier.clutter >= 0.4 && rng() > 0.4) {
        for (let i = 0; i < 3; i++) {
          const cart = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.6, 1.4), lambertOrStandard(tier, { color: i ? '#7a828a' : '#c9542e' }));
          cart.position.set(gate.pos.x + 8 + i * 3, 0.8, gate.pos.z + 6);
          group.add(cart);
        }
      }
    }
    // moving apron vehicles
    if (tier.clutter >= 0.7) {
      for (let i = 0; i < 6; i++) {
        const veh = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.2, 6),
          lambertOrStandard(tier, { color: ['#d8d8d8', '#3f6fb0', '#c9542e'][i % 3] }));
        veh.position.y = 1.1;
        veh.castShadow = tier.shadows;
        group.add(veh);
        movers.push({
          mesh: veh, cx: apronCentroid.x, cz: apronCentroid.z,
          r: 240 + i * 45, speed: (0.02 + rng() * 0.02) * (i % 2 ? 1 : -1), phase: rng() * 6.28
        });
      }
    }
  }

  // ------------------------------------------------------------------ dirt
  // Bare-earth patches through the turf + graded dirt margins hugging every
  // paved edge. One dataset drives three consumers: the infield ground
  // texture (visible soil), the grass mask (thin/stunt/brown the blades over
  // dirt) and wheel-dust intensity. Placed after ALL pavement registration.
  const dirt = { blobs: [] };
  {
    const drng = mulberry32(hashString(airport.iata) ^ 0xd1127);
    const nBlobs = has('desert') ? 140 : 95;
    for (let i = 0; i < nBlobs; i++) {
      const x = (drng() * 2 - 1) * 2600;
      const z = (drng() * 2 - 1) * 2600;
      const r = 14 + drng() * drng() * 85;   // mostly small scrapes, a few washes
      const a = 0.55 + drng() * 0.45;        // peak bareness
      if (isPavement(x, z)) continue;        // blob centres never under slabs
      dirt.blobs.push({ x, z, r, a });
    }
  }
  const dirtAt = (x, z) => {
    let d = 0;
    for (const b of dirt.blobs) {
      const dx = x - b.x, dz = z - b.z;
      const q = 1 - (dx * dx + dz * dz) / (b.r * b.r);
      if (q > 0) d += b.a * q;
    }
    return d > 1 ? 1 : d;
  };

  // Infield detail plane: a single quad over the field (±3600 m, matching the
  // grass mask span) whose canvas bakes turf mottling, the dirt patches and
  // graded margins along the pavement, fading to the plain ground colour at
  // its rim so it blends into the base disc. Sits between the ground (y=0)
  // and the lowest slab (y=0.06).
  const infield = new THREE.Mesh(
    new THREE.PlaneGeometry(INFIELD_SPAN * 2, INFIELD_SPAN * 2),
    lambertOrStandard(tier, {
      map: infieldTexture(tier.texScale >= 0.75 ? 2048 : 1024, groundColors, pavement, dirt.blobs, has('desert'))
    })
  );
  infield.material.map.anisotropy = tier.anisotropy;
  infield.rotation.x = -Math.PI / 2;
  infield.position.y = 0.03;
  infield.receiveShadow = tier.shadows;
  group.add(infield);

  // ---------------------------------------------------------------- scenery
  buildScenery(airport, tier, group, collidables, rng, has);

  return {
    group, collidables, runways, gates, movers, windsocks, apronCentroid,
    pavement, isPavement, dirt: { blobs: dirt.blobs, at: dirtAt }
  };
}

// ---------------------------------------------------------------- scenery
function buildScenery(airport, tier, group, collidables, rng, has) {
  const skl = airport.skyline;
  const lowMat = (c) => new THREE.MeshLambertMaterial({ color: c });

  if (skl) {
    const dir = skl.dirDeg * DEG2RAD;
    const cx = Math.sin(dir) * skl.distM, cz = -Math.cos(dir) * skl.distM;
    const conf = { m: [12, 120, 1000], l: [22, 210, 1600], xl: [38, 300, 2200], strip: [14, 160, 1400] }[skl.size] || [14, 130, 1100];
    const [count, maxH, radius] = conf;
    // white base + per-instance facade tint; the office window grid, lobby,
    // grime gradient and roof speckle come from the facade shader
    const mat = patchFacadeShader(lowMat('#ffffff'), { mode: 'office', winW: 3.4, floorH: 3.7 });
    const palette = ['#8fa0b4', '#a89f92', '#7c8894', '#9aa8b8', '#6f7a88', '#b5aca0']
      .map((c) => new THREE.Color(c));
    const geom = new THREE.BoxGeometry(1, 1, 1);
    const inst = new THREE.InstancedMesh(geom, mat, count);
    const m4 = new THREE.Matrix4();
    const towers = [];
    for (let i = 0; i < count; i++) {
      const a = rng() * Math.PI * 2, rr = Math.sqrt(rng()) * radius;
      const bx = cx + Math.cos(a) * rr, bz = cz + Math.sin(a) * rr * 0.6;
      const h = 30 + Math.pow(rng(), 2.2) * maxH;
      const w = 35 + rng() * 55;
      const d = w * (0.7 + rng() * 0.6);
      m4.makeScale(w, h, d);
      m4.setPosition(bx, h / 2, bz);
      inst.setMatrixAt(i, m4);
      inst.setColorAt(i, palette[Math.floor(rng() * palette.length)]);
      towers.push({ bx, bz, h, w, d, r: rng() });
      if (skl.distM < 6500) {
        collidables.push(new THREE.Box3(
          new THREE.Vector3(bx - w / 2, 0, bz - w / 2),
          new THREE.Vector3(bx + w / 2, h, bz + w / 2)));
      }
    }
    inst.instanceMatrix.needsUpdate = true;
    inst.instanceColor.needsUpdate = true;
    group.add(inst);

    // silhouette detail: stepped crowns on ~1/3 of towers, antenna spires on
    // the tallest — two more instanced draws for the whole skyline
    const crowns = towers.filter((t) => t.r < 0.35);
    if (crowns.length) {
      const cInst = new THREE.InstancedMesh(geom, mat, crowns.length);
      crowns.forEach((t, i) => {
        m4.makeScale(t.w * 0.58, t.h * 0.14, t.d * 0.58);
        m4.setPosition(t.bx, t.h + t.h * 0.07, t.bz);
        cInst.setMatrixAt(i, m4);
        cInst.setColorAt(i, palette[Math.floor(t.r * 17) % palette.length]);
      });
      cInst.instanceMatrix.needsUpdate = true;
      cInst.instanceColor.needsUpdate = true;
      group.add(cInst);
    }
    const tall = towers.filter((t) => t.h > maxH * 0.55).slice(0, 8);
    if (tall.length) {
      const sInst = new THREE.InstancedMesh(
        new THREE.CylinderGeometry(0.6, 1.8, 1, 6), lowMat('#5d646c'), tall.length);
      tall.forEach((t, i) => {
        const sh = 18 + t.r * 30;
        m4.makeScale(1, sh, 1);
        m4.setPosition(t.bx + (t.r - 0.5) * t.w * 0.4, t.h + sh / 2, t.bz);
        sInst.setMatrixAt(i, m4);
      });
      sInst.instanceMatrix.needsUpdate = true;
      group.add(sInst);
    }
    if (skl.size === 'strip') {
      const pyr = new THREE.Mesh(new THREE.ConeGeometry(120, 110, 4), lowMat('#2f2f33'));
      pyr.position.set(cx, 55, cz + 500);
      group.add(pyr);
      const orb = new THREE.Mesh(new THREE.SphereGeometry(60, 12, 10), lowMat('#c9b26a'));
      orb.position.set(cx + 700, 90, cz - 300);
      group.add(orb);
      const spire = new THREE.Mesh(new THREE.CylinderGeometry(6, 14, 320, 8), lowMat('#9aa3ad'));
      spire.position.set(cx - 600, 160, cz);
      group.add(spire);
    }
  }
  if (has('arch') && skl) {
    const dir = skl.dirDeg * DEG2RAD;
    const arch = new THREE.Mesh(new THREE.TorusGeometry(95, 6, 8, 24, Math.PI), new THREE.MeshStandardMaterial({ color: '#c9ccd1', metalness: 0.9, roughness: 0.3 }));
    arch.position.set(Math.sin(dir) * skl.distM * 0.9, 0, -Math.cos(dir) * skl.distM * 0.9);
    group.add(arch);
  }
  if (has('monuments') && skl) {
    const dir = skl.dirDeg * DEG2RAD;
    const bx = Math.sin(dir) * skl.distM * 0.75, bz = -Math.cos(dir) * skl.distM * 0.75;
    const obelisk = new THREE.Mesh(new THREE.CylinderGeometry(4, 9, 170, 4), lowMat('#e8e6df'));
    obelisk.position.set(bx, 85, bz);
    group.add(obelisk);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(9, 18, 4), lowMat('#e8e6df'));
    tip.position.set(bx, 178, bz);
    group.add(tip);
    const domeBase = new THREE.Mesh(new THREE.BoxGeometry(160, 26, 90), lowMat('#eceae2'));
    domeBase.position.set(bx + 900, 13, bz + 300);
    group.add(domeBase);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(34, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), lowMat('#eceae2'));
    dome.position.set(bx + 900, 26, bz + 300);
    group.add(dome);
  }

  const mts = airport.mountains || (has('mountain-west') ? { dirDeg: 260, distM: 32000, big: true } : null);
  if (mts) {
    const dir = mts.dirDeg * DEG2RAD;
    const far = mts.distM > 20000;
    const mat = lowMat(far ? '#95a2b2' : (has('island') || has('tropical')) ? '#6d8457' : '#8a8071');
    for (let i = 0; i < 14; i++) {
      const a = dir + (i / 13 - 0.5) * 1.9;
      const d = mts.distM * (0.9 + rng() * 0.25);
      const h = (mts.big ? 1500 : 550) * (0.6 + rng() * 0.9);
      const peak = new THREE.Mesh(new THREE.ConeGeometry(h * (1.6 + rng()), h, 5), mat);
      peak.position.set(Math.sin(a) * d, h / 2 - 12, -Math.cos(a) * d);
      peak.scale.z = 2.2 + rng() * 1.6;
      peak.rotation.y = rng() * 3;
      group.add(peak);
    }
  }
  if (has('hills') || has('rolling')) {
    const mat = lowMat('#7d8a63');
    for (let i = 0; i < 10; i++) {
      const a = rng() * Math.PI * 2, d = 6000 + rng() * 8000;
      const hill = new THREE.Mesh(new THREE.SphereGeometry(900 + rng() * 900, 10, 8), mat);
      hill.scale.y = 0.13 + rng() * 0.08;
      hill.position.set(Math.sin(a) * d, -25, -Math.cos(a) * d);
      group.add(hill);
    }
  }
  if (has('island')) {
    // volcanic head (Diamond Head-ish) SE
    const cone = new THREE.Mesh(new THREE.ConeGeometry(1400, 420, 8), lowMat('#7c7f62'));
    cone.position.set(6500, 160, 2500);
    cone.scale.y = 0.75;
    group.add(cone);
  }

  const clutter = tier.clutter;
  if (clutter > 0) {
    const isClear = (x, z) => {
      for (const rw of airport.runways) {
        const h = rw.hdg * DEG2RAD;
        const dx = x - rw.x, dz = z - rw.z;
        const along = dx * Math.sin(h) - dz * Math.cos(h);
        const across = dx * Math.cos(h) + dz * Math.sin(h);
        if (Math.abs(along) < rw.lenM / 2 + 900 && Math.abs(across) < 320) return false;
      }
      return Math.hypot(x, z) > 1300;
    };
    const scatterInstanced = (count, makeGeoms, ringMin, ringMax) => {
      const items = [];
      for (let i = 0; i < count; i++) {
        const a = rng() * Math.PI * 2, d = ringMin + rng() * (ringMax - ringMin);
        const x = Math.sin(a) * d, z = -Math.cos(a) * d;
        if (isClear(x, z)) items.push([x, z, 0.6 + rng() * 0.9, rng() * 3]);
      }
      for (const { geom, mat, yScaleBase, yPos } of makeGeoms) {
        const inst = new THREE.InstancedMesh(geom, mat, items.length);
        const m4 = new THREE.Matrix4();
        items.forEach(([x, z, s, rot], i) => {
          m4.makeRotationY(rot);
          m4.scale(new THREE.Vector3(s, s * yScaleBase, s));
          m4.setPosition(x, yPos * s, z);
          inst.setMatrixAt(i, m4);
        });
        inst.instanceMatrix.needsUpdate = true;
        group.add(inst);
      }
    };

    if (has('forest')) {
      scatterInstanced(Math.round(1500 * clutter), [
        { geom: new THREE.ConeGeometry(4.5, 14, 6), mat: lowMat('#4c6342'), yScaleBase: 1, yPos: 9 },
        { geom: new THREE.CylinderGeometry(0.7, 0.9, 5, 5), mat: lowMat('#6b5136'), yScaleBase: 1, yPos: 2.5 }
      ], 900, 8000);
    }
    if (has('tropical') || has('island')) {
      scatterInstanced(Math.round(420 * clutter), [
        { geom: new THREE.CylinderGeometry(0.5, 0.8, 9, 5), mat: lowMat('#8a7350'), yScaleBase: 1, yPos: 4.5 },
        { geom: new THREE.ConeGeometry(4.2, 2.6, 7), mat: lowMat('#4d7345'), yScaleBase: 1, yPos: 9.6 }
      ], 700, 5000);
    }
    if (has('desert')) {
      scatterInstanced(Math.round(220 * clutter), [
        { geom: new THREE.DodecahedronGeometry(3, 0), mat: lowMat('#9b8b6f'), yScaleBase: 0.7, yPos: 1.4 }
      ], 900, 7000);
      scatterInstanced(Math.round(120 * clutter), [
        { geom: new THREE.CylinderGeometry(0.7, 0.9, 7, 6), mat: lowMat('#5c7a4a'), yScaleBase: 1, yPos: 3.5 }
      ], 900, 6000);
    }
    if (has('urban') || has('suburban')) {
      const urban = has('urban');
      const count = Math.round((urban ? 1000 : 550) * clutter);
      const geom = new THREE.BoxGeometry(1, 1, 1);
      const mats = ['#9b9489', '#8b8e94', '#a3937f'].map((c) =>
        patchFacadeShader(lowMat(c), { mode: 'office', winW: 2.5, floorH: 3.1 }));
      for (let k = 0; k < 3; k++) {
        const inst = new THREE.InstancedMesh(geom, mats[k], Math.ceil(count / 3));
        const m4 = new THREE.Matrix4();
        let placed = 0;
        for (let i = 0; i < count && placed < Math.ceil(count / 3); i++) {
          const a = rng() * Math.PI * 2, d = 2100 + rng() * 7500;
          const x = Math.sin(a) * d, z = -Math.cos(a) * d;
          if (!isClear(x, z)) continue;
          const h = urban ? 9 + Math.pow(rng(), 2) * 40 : 5 + rng() * 8;
          const w = 14 + rng() * 26;
          m4.makeScale(w, h, w * (0.6 + rng() * 0.8));
          m4.setPosition(Math.round(x / 60) * 60, h / 2, Math.round(z / 60) * 60);
          inst.setMatrixAt(placed++, m4);
        }
        inst.count = placed;
        inst.instanceMatrix.needsUpdate = true;
        group.add(inst);
      }
    }
  }
}

export function updateAirportDynamics(world, dt, time, wind) {
  for (const mv of world.movers) {
    const a = mv.phase + time * mv.speed;
    mv.mesh.position.x = mv.cx + Math.cos(a) * mv.r;
    mv.mesh.position.z = mv.cz + Math.sin(a) * mv.r;
    mv.mesh.rotation.y = -a - Math.PI / 2 * Math.sign(mv.speed);
  }
  if (wind && world.windsocks) {
    const kts = wind.length() * 1.94384;
    const yaw = Math.atan2(wind.x, wind.z); // sock streams downwind (+Z local -> wind dir)
    const droop = (Math.PI / 2) * (1 - Math.min(kts / 15, 1));
    for (const ws of world.windsocks) {
      ws.yawGroup.rotation.y = yaw + Math.sin(time * 2.7) * 0.06; // slight flutter
      ws.tiltGroup.rotation.x = droop + Math.sin(time * 5.1) * 0.04;
    }
  }
}
