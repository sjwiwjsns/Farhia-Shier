import * as THREE from 'three';
import { proceduralMaterial, canvasTexture } from '../core/materials.js';
import { atmoUniforms } from './atmosphere.js';
import { rand, range, pick, chance } from '../core/rng.js';
import { blockCentersX, blockCentersZ, BLOCK_SIZE, SIDEWALK, SLAB_H } from './layout.js';
import { terrainHeight } from './ground.js';

// Facade styles. Every building box is one instance of a single facade
// material; the shader draws its floors, windows, frames, shop fronts and
// lit offices from the instance's size and style, so nothing ever stretches.
export const STYLE = { CURTAIN: 0, PUNCHED: 1, RIBBON: 2, BRICK: 3, STUCCO: 4, BALCONY: 5, BLANK: 6 };

// Per-instance values travel as flat varyings: interpolating a constant still
// adds per-pixel rounding error, and the hashes below amplify it into speckle.
const FACADE_GLSL = /* glsl */`
varying vec3 vFacLocal;
flat varying vec3 vFacSize;
flat varying vec3 vFacN;
flat varying vec4 vFacStyle;
flat varying vec3 vFacGlass;
flat varying vec2 vFacExtra;
flat varying float vFacTop;
uniform float nightFactor;
uniform float worldTime;
float fGlass; float fRough; float fMetal; vec3 fEmit; vec3 fTilt;

void paFacade(inout vec3 albedo) {
  fGlass = 0.0; fRough = 0.86; fMetal = 0.0; fEmit = vec3(0.0); fTilt = vec3(0.0);
  vec3 an = abs(vFacN);
  float style = vFacStyle.x, floorH = vFacStyle.y, cellW = vFacStyle.z, seed = vFacStyle.w;
  vec3 wall = albedo;
  float y = vPaWorld.y;
  float u = an.x > 0.5 ? vFacLocal.z : vFacLocal.x;
  float faceW = an.x > 0.5 ? vFacSize.z : vFacSize.x;
  float faceId = an.x > 0.5 ? (vFacN.x > 0.0 ? 1.0 : 2.0) : (vFacN.z > 0.0 ? 3.0 : 4.0);
  bool shops = vFacExtra.x > 0.5;
  float groundH = shops ? 4.8 : 0.9;
  // Screen-space derivatives are all taken here, before any branch or return:
  // GLSL leaves them undefined in non-uniform control flow, where they can come
  // back as zero and turn the anti-aliasing below into speckled garbage.
  float du = max(fwidth(u), 1e-4);
  float dy = max(fwidth(y), 1e-4);
  float nShops = max(floor(faceW / 6.0), 1.0);
  float shopW = faceW / nShops;
  float nCols = max(floor((faceW - 1.0) / cellW), 1.0);
  float wu = max(du / cellW, 0.0015), wv = max(dy / floorH, 0.0015);
  float grime = pa_fbm3(vPaWorld.xz * 0.15 + vec2(0.0, y * 0.4));

  if (an.y > 0.5) {
    // Roof: membrane with a coping stone border.
    float edge = min(vFacSize.x * 0.5 - abs(vFacLocal.x), vFacSize.z * 0.5 - abs(vFacLocal.z));
    vec3 roof = vec3(0.36, 0.36, 0.35) * (0.8 + grime * 0.4) * (0.9 + pa_noise(vPaWorld.xz * 4.0) * 0.2);
    albedo = edge < 0.55 ? wall * 0.9 : roof;
    fRough = 0.9;
    return;
  }

  // Base dirt and vertical rain streaks.
  float streak = pa_noise(vec2(u * 1.3 + faceId * 31.0, y * 0.05)) * pa_noise(vec2(u * 0.4, y * 0.3 + seed));
  wall *= 1.0 - smoothstep(0.35, 0.8, streak) * 0.18;
  wall *= 0.88 + grime * 0.24;
  wall *= mix(0.72, 1.0, smoothstep(0.0, 2.5, y));

  if (style > 5.5) { albedo = wall; return; }

  if (style > 2.5 && style < 3.5) {
    // Brick: running bond, faded out with distance.
    vec2 b = vec2(u / 0.24, y / 0.085);
    b.x += step(1.0, mod(floor(b.y), 2.0)) * 0.5;
    float fw = max(du / 0.24, dy / 0.085);
    vec2 f = fract(b);
    float mortar = (1.0 - pa_band(f.x, 0.06, 1.0, fw)) + (1.0 - pa_band(f.y, 0.12, 1.0, fw));
    mortar = clamp(mortar, 0.0, 1.0) * (1.0 - smoothstep(0.25, 0.6, fw));
    wall *= 0.88 + pa_hash12(floor(b)) * 0.22 * (1.0 - smoothstep(0.3, 0.8, fw));
    wall = mix(wall, vec3(0.52, 0.5, 0.46), mortar * 0.55);
  }

  // Shop fronts on the ground floor.
  if (shops && y < groundH) {
    float su = (u + faceW * 0.5) / shopW;
    float sid = floor(su), sf = fract(su);
    float fw = du / shopW;
    float h = pa_hash12(vec2(sid + faceId * 17.0, seed * 3.1));
    float glass = pa_band(sf, 0.06, 0.94, fw) * pa_band(y, 0.45, 3.5, dy);
    float fascia = pa_band(y, 3.7, 4.5, dy);
    // Palette picks use step/mix rather than nested ternaries, which some
    // shader compilers evaluate inconsistently across a pixel quad.
    vec3 fasciaCol = mix(vec3(0.08, 0.09, 0.1), vec3(0.5, 0.12, 0.08), step(0.33, h));
    fasciaCol = mix(fasciaCol, vec3(0.12, 0.25, 0.3), step(0.55, h));
    fasciaCol = mix(fasciaCol, vec3(0.75, 0.68, 0.55), step(0.75, h));
    albedo = mix(wall * 0.85, fasciaCol, fascia);
    albedo = mix(albedo, vec3(0.03, 0.035, 0.04), glass);
    fGlass = glass;
    fRough = mix(0.75, 0.04, glass);
    fMetal = glass * 0.2;
    float lit = step(0.15, pa_hash12(vec2(sid * 3.7, faceId + seed)));
    vec3 warm = mix(vec3(1.0, 0.75, 0.45), vec3(0.95, 0.95, 0.85), step(0.6, h));
    float shopGlow = 0.25 + 0.75 * pa_hash12(vec2(sid * 1.3 + 7.0, faceId * 3.0 + seed));
    fEmit = warm * glass * lit * shopGlow * (0.45 + 0.55 * smoothstep(0.45, 3.5, y)) * mix(0.05, 0.62, nightFactor);
    fEmit += fasciaCol * fascia * step(0.5, h) * nightFactor * 0.9;
    fTilt = vec3(h - 0.5, 0.0, 0.0) * 0.02 * glass;
    return;
  }

  // Window grid.
  float cu = u / cellW + nCols * 0.5;
  float cv = (y - groundH) / floorH;
  float colId = floor(cu), rowId = floor(cv);
  float fu = fract(cu), fv = fract(cv);
  float inGrid = pa_band(cu, 0.0, nCols, wu) * pa_aastep(groundH, y, dy) * (1.0 - pa_aastep(vFacTop - 1.3, y, dy));

  float u0 = 0.2, u1 = 0.8, v0 = 0.28, v1 = 0.86;
  if (style < 0.5) { u0 = 0.035; u1 = 0.965; v0 = 0.16; v1 = 0.985; }
  else if (style < 1.5) { u0 = 0.2; u1 = 0.8; v0 = 0.26; v1 = 0.86; }
  else if (style < 2.5) { u0 = 0.0; u1 = 1.0; v0 = 0.34; v1 = 0.9; }
  else if (style < 3.5) { u0 = 0.24; u1 = 0.76; v0 = 0.24; v1 = 0.84; }
  else if (style < 4.5) { u0 = 0.32; u1 = 0.68; v0 = 0.24; v1 = 0.8; }
  else { u0 = 0.1; u1 = 0.9; v0 = 0.1; v1 = 0.86; }

  float win = pa_band(fu, u0, u1, wu) * pa_band(fv, v0, v1, wv) * inGrid;
  float mull = style < 2.5 && style > 1.5 ? pa_band(fu, 0.0, 0.025, wu) + pa_band(fu, 0.975, 1.0, wu) : 0.0;
  win *= 1.0 - clamp(mull, 0.0, 1.0);
  float frame = clamp(pa_band(fu, u0 - 0.035, u1 + 0.035, wu) * pa_band(fv, v0 - 0.04, v1 + 0.03, wv) * inGrid - win, 0.0, 1.0);
  // Recessed windows cast a little shadow along their top edge.
  float reveal = pa_band(fv, v1 - 0.06, v1, wv) * pa_band(fu, u0, u1, wu) * inGrid;

  float h1 = pa_hash12(vec2(colId + faceId * 97.0 + seed * 13.0, rowId + seed * 7.0));
  float h2 = pa_hash12(vec2(rowId * 1.7 + seed, colId * 3.1 + faceId));
  float h3 = pa_hash12(vec2(colId * 5.3 + seed, rowId * 2.3));
  // Office floors tend to be lit in whole runs, homes window by window.
  float floorLit = pa_hash12(vec2(rowId + seed * 5.0, faceId));
  float litP = style < 2.5 ? mix(0.05, 0.62, nightFactor) * (0.6 + floorLit * 0.8) : mix(0.04, 0.48, nightFactor);
  float lit = step(h1, litP);

  vec3 glassCol = vFacGlass * (0.32 + h2 * 0.3);
  // A few windows show curtains, blinds or a lighter interior during the day.
  glassCol = mix(glassCol, vec3(0.32, 0.29, 0.25), step(0.82, h3) * 0.6 * step(0.5, style));
  float spandrel = 0.0;
  float isCurtain = 1.0 - step(0.5, style);
  float isStucco = step(3.5, style) * (1.0 - step(4.5, style));
  vec3 frameCol = mix(mix(vec3(0.07, 0.075, 0.08), vec3(0.95, 0.93, 0.86), isStucco), vFacGlass * 0.2 + vec3(0.03), isCurtain);
  if (style < 0.5) {
    // Curtain wall: the slab band is opaque tinted glass.
    spandrel = pa_band(cu, 0.0, nCols, wu) * (1.0 - pa_band(fv, v0, 1.0, wv)) * inGrid;
    frameCol = mix(frameCol, wall, 0.25);
  }
  albedo = wall;
  albedo = mix(albedo, frameCol, frame);
  albedo *= 1.0 - reveal * 0.35;
  albedo = mix(albedo, vFacGlass * 0.16, spandrel);
  albedo = mix(albedo, glassCol, win);

  if (style > 3.5 && style < 4.5) {
    // Painted shutters beside stucco windows.
    float shutter = (pa_band(fu, u0 - 0.15, u0 - 0.035, wu) + pa_band(fu, u1 + 0.035, u1 + 0.15, wu)) * pa_band(fv, v0, v1, wv) * inGrid;
    vec3 shutterCol = mix(mix(vec3(0.12, 0.3, 0.26), vec3(0.15, 0.25, 0.42), step(0.33, h2)), vec3(0.45, 0.2, 0.12), step(0.66, h2));
    albedo = mix(albedo, shutterCol, shutter);
  }
  if (style > 4.5) {
    // Balcony slab and railing.
    float slab = pa_band(fv, 0.0, 0.07, wv) * inGrid;
    float rail = pa_band(fv, 0.07, 0.36, wv) * pa_band(fu, 0.05, 0.95, wu) * inGrid;
    float bars = pa_band(fract(fu * 18.0), 0.0, 0.25, wu * 18.0);
    albedo = mix(albedo, vec3(0.75, 0.74, 0.7), slab);
    albedo = mix(albedo, vec3(0.05), rail * mix(0.35, 0.9, bars));
  }

  float glassAll = clamp(win + spandrel, 0.0, 1.0);
  fGlass = glassAll;
  float glassMetal = mix(mix(0.2, 0.45, 1.0 - step(2.5, style)), 0.75, isCurtain);
  fMetal = mix(style < 0.5 ? 0.35 : 0.0, glassMetal, glassAll);
  fRough = mix(style > 2.5 && style < 4.5 ? 0.92 : 0.78, 0.035 + h3 * 0.06, glassAll);
  fRough = mix(fRough, 0.35, frame * (style < 0.5 ? 1.0 : 0.0));

  // Interior light: ceiling glow near the top of the window, blinds on some.
  float wy = clamp((fv - v0) / (v1 - v0), 0.0, 1.0);
  float interior = 0.55 + 0.45 * smoothstep(0.2, 1.0, wy);
  interior *= mix(1.0, 0.65 + 0.35 * step(0.5, fract(wy * 11.0)), step(0.7, h2));
  vec3 lightCol = mix(mix(vec3(1.0, 0.7, 0.4), vec3(1.0, 0.88, 0.7), step(0.45, h2)), vec3(0.72, 0.85, 1.0), step(0.8, h2));
  // TVs flicker in a few homes late at night.
  float tv = step(0.94, h3) * step(2.5, style) * (0.6 + 0.4 * sin(worldTime * 7.0 + h1 * 50.0));
  lightCol = mix(lightCol, vec3(0.55, 0.65, 1.0) * (0.6 + tv), step(0.94, h3) * step(2.5, style));
  fEmit = lightCol * win * lit * interior * (0.5 + h2 * 0.9) * nightFactor * 0.8;
  fTilt = vec3(h1 - 0.5, 0.0, h2 - 0.5) * 0.045 * glassAll;
}
`;

function makeFacadeMaterial() {
  const mat = proceduralMaterial('facade', { color: 0xffffff, roughness: 0.85, metalness: 0.0 }, {
    uniforms: { nightFactor: atmoUniforms.nightFactor, worldTime: atmoUniforms.worldTime },
    vertexPars: `
      attribute vec4 aStyle; attribute vec3 aGlass; attribute vec2 aExtra;
      varying vec3 vFacLocal; flat varying vec3 vFacSize; flat varying vec3 vFacN; flat varying vec4 vFacStyle;
      flat varying vec3 vFacGlass; flat varying vec2 vFacExtra; flat varying float vFacTop;`,
    vertex: `
      vec3 facScale = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
      vFacSize = facScale;
      vFacLocal = position * facScale;
      vFacN = normal;
      vFacStyle = aStyle;
      vFacGlass = aGlass;
      vFacExtra = aExtra;
      vFacTop = (modelMatrix * instanceMatrix * vec4(0.0, 0.5, 0.0, 1.0)).y;`,
    fragmentPars: FACADE_GLSL,
    color: `
      {
        vec3 albedo = diffuseColor.rgb;
        paFacade(albedo);
        diffuseColor.rgb = albedo;
      }`,
    roughness: 'roughnessFactor = fRough;',
    metalness: 'metalnessFactor = fMetal;',
    normal: 'normal = normalize(normal + (viewMatrix * vec4(fTilt, 0.0)).xyz);',
    emissive: 'totalEmissiveRadiance += fEmit;',
  });
  return mat;
}

// Terracotta tile roofs for the coastal low-rise buildings.
function makeTileRoofMaterial() {
  return proceduralMaterial('tiles', { color: 0xffffff, roughness: 0.7 }, {
    color: `
      {
        float along = dot(vPaWorld.xz, normalize(vec2(1.0 - abs(vPaNormalW.x), 1.0 - abs(vPaNormalW.z)) + 1e-4));
        vec2 t = vec2(along / 0.32, vPaWorld.y / 0.26);
        t.x += step(1.0, mod(floor(t.y), 2.0)) * 0.5;
        float fw = max(fwidth(t.x), fwidth(t.y));
        vec2 f = fract(t);
        float ridge = mix(1.0, 0.55 + 0.45 * sin(f.x * 3.14159), 1.0 - smoothstep(0.2, 0.6, fw));
        float lap = mix(1.0, smoothstep(0.0, 0.35, f.y) * 0.4 + 0.6, 1.0 - smoothstep(0.2, 0.6, fw));
        float var = pa_hash12(floor(t));
        vec3 col = mix(vec3(0.55, 0.2, 0.1), vec3(0.68, 0.32, 0.16), var);
        col = mix(col, vec3(0.3, 0.26, 0.2), smoothstep(0.6, 0.9, pa_noise(vPaWorld.xz * 0.5)) * 0.4);
        diffuseColor.rgb = col * ridge * lap;
      }`,
  });
}

function hipRoofGeometry() {
  // Unit footprint at y=0 rising to a short ridge at y=1, with a small overhang.
  const o = 0.54, r = 0.22;
  const v = [
    -o, 0, -o, o, 0, -o, o, 0, o, -o, 0, o, // eaves
    -r, 1, 0, r, 1, 0, // ridge along x
  ];
  const idx = [0, 4, 5, 0, 5, 1, 1, 5, 2, 2, 5, 4, 2, 4, 3, 3, 4, 0];
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
  g.setIndex(idx);
  const ng = g.toNonIndexed();
  ng.computeVertexNormals();
  return ng;
}

const PALETTES = {
  stucco: ['#e8dcc4', '#f0d6c0', '#e6c9a8', '#d9e2d6', '#f2e8d8', '#e7b9a3', '#d6c7e0', '#f4e4b8', '#cfe0e3'],
  concrete: ['#a9a59c', '#b8b2a6', '#8f8e88', '#c9c3b5', '#9a9690', '#b0aba0'],
  brick: ['#8a4f3c', '#9c5a43', '#7a4535', '#a8735a', '#6d4a3c'],
  tower: ['#9fa6a8', '#7c8589', '#b5b8b4', '#5f686d', '#c8c3b8'],
  glass: [[0.18, 0.32, 0.38], [0.16, 0.27, 0.36], [0.28, 0.3, 0.28], [0.25, 0.22, 0.18], [0.2, 0.34, 0.33], [0.14, 0.2, 0.3]],
};

export function buildCity(scene, renderer) {
  const boxes = []; // facade instances
  const roofs = []; // hip roofs
  const details = []; // rooftop equipment boxes [x,y,z,sx,sy,sz,colorIndex]
  const crowns = []; // glowing tower crowns
  const beacons = []; // aircraft warning lights
  const awnings = [];
  const colliders = [];
  const signs = [];
  const buildingTops = [];
  const houses = [];

  const color = new THREE.Color();
  function box(x, z, w, d, y0, h, style, opts = {}) {
    boxes.push({ x, z, w, d, y0, h, style, ...opts });
  }

  function building(x, z, w, d, h, style, kind) {
    const wall = style === STYLE.STUCCO ? pick(PALETTES.stucco)
      : style === STYLE.BRICK ? pick(PALETTES.brick)
      : style === STYLE.CURTAIN ? pick(PALETTES.tower)
      : chance(0.35) ? pick(PALETTES.stucco) : pick(PALETTES.concrete);
    const glass = pick(PALETTES.glass);
    const floorH = style === STYLE.CURTAIN ? range(3.7, 4.2) : style === STYLE.STUCCO ? 3.4 : range(3.2, 3.6);
    const cellW = style === STYLE.CURTAIN ? range(1.6, 2.2) : style === STYLE.RIBBON ? range(2.4, 3.0) : style === STYLE.STUCCO ? range(3.8, 4.6) : range(2.8, 3.6);
    const seed = rand() * 100;
    const shops = kind !== 'tower-upper' && (kind === 'shops' || chance(0.6));
    const base = { wall, glass, floorH, cellW, seed, shops };
    box(x, z, w, d, SLAB_H, h, style, base);
    colliders.push({ x, z, w: w / 2, d: d / 2 });
    buildingTops.push({ x, z, w, d, h: h + SLAB_H });
    return base;
  }

  function roofEquipment(x, z, w, d, top, count) {
    for (let i = 0; i < count; i++) {
      const sx = range(1.5, 4), sz = range(1.5, 4), sy = range(1, 2.4);
      details.push([x + range(-w / 2 + 3, w / 2 - 3), top + sy / 2, z + range(-d / 2 + 3, d / 2 - 3), sx, sy, sz, i % 3]);
    }
  }

  function tower(x, z, w, d, h) {
    // Podium with shops, then a setback tower and sometimes a slimmer top tier.
    const podiumH = range(10, 16);
    const style = chance(0.75) ? STYLE.CURTAIN : pick([STYLE.RIBBON, STYLE.PUNCHED]);
    const pw = Math.min(w + range(10, 24), 110), pd = Math.min(d + range(10, 24), 110);
    building(x, z, pw, pd, podiumH, chance(0.5) ? STYLE.RIBBON : STYLE.PUNCHED, 'shops');
    roofEquipment(x + pw * 0.3, z + pd * 0.3, pw * 0.3, pd * 0.3, podiumH + SLAB_H, 3);
    const glass = pick(PALETTES.glass);
    const wall = pick(PALETTES.tower);
    const common = { wall, glass, floorH: range(3.8, 4.2), cellW: range(1.6, 2.1), seed: rand() * 100, shops: false };
    const tiers = h > 120 ? 3 : h > 70 ? 2 : 1;
    let y = SLAB_H, tw = w, td = d;
    for (let t = 0; t < tiers; t++) {
      const th = t === tiers - 1 ? h - (y - SLAB_H) : h * range(0.45, 0.6) / (t + 1);
      box(x, z, tw, td, y, th, style, common);
      y += th;
      if (t < tiers - 1) {
        tw *= range(0.72, 0.85);
        td *= range(0.72, 0.85);
      }
    }
    buildingTops.push({ x, z, w: tw, d: td, h: y });
    crowns.push({ x, z, w: tw, d: td, y: y - 0.6, color: pick(['#bfe3ff', '#ffe2b0', '#ffffff', '#ffb9d8']) });
    if (chance(0.6)) {
      details.push([x, y + 3, z, tw * 0.45, 6, td * 0.45, 0]);
      beacons.push([x + tw * 0.2, y + 6.5, z]);
      if (h > 140) {
        details.push([x, y + 6 + 14, z, 0.6, 28, 0.6, 2]);
        beacons.push([x, y + 34.5, z]);
      }
    } else {
      roofEquipment(x, z, tw, td, y, 4);
      beacons.push([x + tw / 2 - 1, y + 0.8, z + td / 2 - 1]);
    }
  }

  const half = BLOCK_SIZE / 2 - SIDEWALK; // usable lot half-size (61)
  for (const cx of blockCentersX) for (const cz of blockCentersZ) {
    const key = `${cx},${cz}`;
    const downtownWeight = Math.max(0, 1 - Math.hypot(cx - 150, cz + 200) / 380);
    if (key === '-80,80' || key === '240,400') continue; // parks
    if (key === '-240,-400' || key === '80,240') {
      // Parking lot with a small diner on one corner.
      building(cx - half + 14, cz - half + 11, 24, 18, 5.5, STYLE.STUCCO, 'shops');
      signs.push({ x: cx - half + 14, z: cz - half + 1.9, y: 7.6, face: 'north', text: key === '80,240' ? 'GAS · 24H' : 'SURF DINER', color: '#ff6a5a' });
      continue;
    }
    if (key === '80,-80' || key === '240,-240') {
      // Plaza with a single landmark tower.
      tower(cx + range(-8, 8), cz + range(-8, 8), range(34, 42), range(34, 42), key === '240,-240' ? 205 : range(150, 175));
      continue;
    }
    if (cx === -240) {
      // Coastal quarter: low stucco buildings with tile roofs, motels and beach shops.
      const n = 3, cell = (half * 2) / n;
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        if (i === 1 && j === 1) continue; // courtyard
        if (chance(0.1)) continue;
        const x = cx - half + cell * (i + 0.5), z = cz - half + cell * (j + 0.5);
        const w = cell - range(3, 7), d = cell - range(3, 7);
        const floors = Math.floor(range(2, 5));
        const h = floors * 3.4 + 1.2;
        const style = chance(0.75) ? STYLE.STUCCO : STYLE.PUNCHED;
        building(x, z, w, d, h, style, i === 0 || j === 0 || i === n - 1 || j === n - 1 ? 'shops' : 'home');
        if (style === STYLE.STUCCO && chance(0.8)) roofs.push({ x, z, w, d, y: h + SLAB_H, h: Math.min(w, d) * 0.22 });
        else roofEquipment(x, z, w, d, h + SLAB_H, 2);
        if (i === 0 && chance(0.55)) signs.push({ x: x - w / 2 - 0.12, z, y: 4.2 + 1.2, face: 'west', text: pick(['MOTEL', 'TACOS', 'SURF SHOP', 'LIQUOR', 'PIZZA', 'COCKTAILS', 'ICE CREAM', 'BAIT & TACKLE']), color: pick(['#ff4f7b', '#5ff2ff', '#ffd25a', '#ff7a3d', '#9dff6a']) });
      }
      continue;
    }
    const tall = downtownWeight > 0.25 && cz < 100;
    if (tall && chance(0.85)) {
      // Downtown: one or two towers per block.
      if (chance(0.45)) {
        tower(cx + range(-6, 6), cz + range(-6, 6), range(38, 48), range(38, 48), 70 + downtownWeight * range(70, 140));
      } else {
        tower(cx - half / 2, cz + range(-8, 8), range(28, 34), range(32, 40), 50 + downtownWeight * range(50, 120));
        tower(cx + half / 2, cz + range(-8, 8), range(28, 34), range(32, 40), 45 + downtownWeight * range(40, 100));
      }
      continue;
    }
    // Midtown and residential blocks: four mid-rise buildings.
    const cell = half;
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
      const x = cx - half / 2 + i * cell + range(-2, 2), z = cz - half / 2 + j * cell + range(-2, 2);
      const w = cell - range(4, 10), d = cell - range(4, 10);
      const residential = cz > 100;
      const floors = Math.floor(range(4, 9) + downtownWeight * range(4, 14));
      const style = residential ? pick([STYLE.BALCONY, STYLE.BALCONY, STYLE.PUNCHED, STYLE.BRICK]) : pick([STYLE.PUNCHED, STYLE.RIBBON, STYLE.BRICK, STYLE.CURTAIN]);
      const b = building(x, z, w, d, floors * 3.4 + 1.5, style, 'shops');
      const top = floors * 3.4 + 1.5 + SLAB_H;
      if (chance(0.4) && floors > 6) {
        // Upper setback.
        box(x + range(-3, 3), z + range(-3, 3), w * 0.62, d * 0.62, top, range(6, 16), style, { ...b, shops: false });
      }
      roofEquipment(x, z, w, d, top, Math.floor(range(2, 5)));
      if (chance(0.3)) details.push([x + w / 4, top + 3.5, z - d / 4, 3.4, 7, 3.4, 3]); // water tank
    }
  }

  // Houses dotted over the hills.
  for (let i = 0; i < 160; i++) {
    const side = rand();
    const x = side < 0.6 ? range(420, 980) : range(-300, 700);
    const z = side < 0.6 ? range(-900, 900) : (chance(0.5) ? range(620, 1000) : range(-1000, -620));
    houses.push([x, z]);
  }

  // --- Build instanced meshes ---
  const boxGeo = new THREE.BoxGeometry(1, 1, 1);
  const facade = new THREE.InstancedMesh(boxGeo, makeFacadeMaterial(), boxes.length);
  const aStyle = new Float32Array(boxes.length * 4);
  const aGlass = new Float32Array(boxes.length * 3);
  const aExtra = new Float32Array(boxes.length * 2);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3();
  boxes.forEach((b, i) => {
    p.set(b.x, b.y0 + b.h / 2, b.z);
    s.set(b.w, b.h, b.d);
    m.compose(p, q, s);
    facade.setMatrixAt(i, m);
    facade.setColorAt(i, color.set(b.wall));
    aStyle.set([b.style, b.floorH, b.cellW, b.seed], i * 4);
    aGlass.set(b.glass, i * 3);
    aExtra.set([b.shops ? 1 : 0, 0], i * 2);
  });
  const fg = facade.geometry = boxGeo.clone();
  fg.setAttribute('aStyle', new THREE.InstancedBufferAttribute(aStyle, 4));
  fg.setAttribute('aGlass', new THREE.InstancedBufferAttribute(aGlass, 3));
  fg.setAttribute('aExtra', new THREE.InstancedBufferAttribute(aExtra, 2));
  facade.castShadow = facade.receiveShadow = true;
  scene.add(facade);

  const roofList = roofs;
  const hip = new THREE.InstancedMesh(hipRoofGeometry(), makeTileRoofMaterial(), roofList.length);
  roofList.forEach((r, i) => {
    p.set(r.x, r.y, r.z);
    s.set(r.w, r.h, r.d);
    m.compose(p, q, s);
    hip.setMatrixAt(i, m);
  });
  hip.castShadow = hip.receiveShadow = true;
  scene.add(hip);

  // Rooftop equipment.
  const detailMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, metalness: 0.4 });
  const det = new THREE.InstancedMesh(boxGeo, detailMat, details.length);
  const detailColors = ['#a7aaa8', '#77797a', '#55585a', '#6a5040'];
  details.forEach(([x, y, z, sx, sy, sz, c], i) => {
    p.set(x, y, z);
    s.set(sx, sy, sz);
    m.compose(p, q, s);
    det.setMatrixAt(i, m);
    det.setColorAt(i, color.set(detailColors[c]));
  });
  det.castShadow = det.receiveShadow = true;
  scene.add(det);

  // Crowns: LED bands at the top of towers that glow after sunset.
  const crownMat = new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.4 });
  const crownMesh = new THREE.InstancedMesh(boxGeo, crownMat, crowns.length);
  crowns.forEach((c, i) => {
    p.set(c.x, c.y, c.z);
    s.set(c.w + 0.5, 0.7, c.d + 0.5);
    m.compose(p, q, s);
    crownMesh.setMatrixAt(i, m);
    crownMesh.setColorAt(i, color.set(c.color));
  });
  scene.add(crownMesh);
  // Instance color multiplies emissive too, via a tiny patch.
  crownMat.onBeforeCompile = sh => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n#ifdef USE_INSTANCING_COLOR\ntotalEmissiveRadiance *= vColor;\n#endif');
  };
  crownMat.customProgramCacheKey = () => 'crown';

  // Blinking red aircraft beacons.
  const beaconMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(6, 0.3, 0.2) });
  const beaconMesh = new THREE.InstancedMesh(new THREE.SphereGeometry(0.45, 8, 6), beaconMat, beacons.length);
  beacons.forEach(([x, y, z], i) => {
    m.makeTranslation(x, y, z);
    beaconMesh.setMatrixAt(i, m);
  });
  scene.add(beaconMesh);

  // Hillside houses, small and simple; at night their windows twinkle.
  const houseMesh = buildHillHouses(scene, houses);

  // Neon shop signs.
  const signMeshes = [];
  for (const sg of signs) signMeshes.push(neonSign(scene, renderer, sg));

  return {
    colliders,
    buildingTops,
    update(night, time) {
      crownMat.emissiveIntensity = night * 1.6;
      beaconMat.color.setRGB(8 * (0.15 + 0.85 * night) * (Math.sin(time * 3.2) > 0.2 ? 1 : 0.04), 0.25, 0.15);
      for (const sm of signMeshes) {
        const flicker = sm.userData.flicker && Math.sin(time * 37) > 0.93 ? 0.3 : 1;
        sm.material.emissiveIntensity = (0.3 + night * 2.2) * flicker;
      }
      if (houseMesh) houseMesh.material.userData.night.value = night;
    },
  };
}

function buildHillHouses(scene, list) {
  const night = { value: 0 };
  const mat = proceduralMaterial('hillhouse', { color: 0xffffff, roughness: 0.85 }, {
    uniforms: { night },
    fragmentPars: 'uniform float night; float paHouseGlow;',
    color: `
      {
        float h = pa_hash12(floor(vPaWorld.xz * 0.2));
        float win = step(0.5, fract(vPaWorld.y * 0.45)) * step(0.4, fract((vPaWorld.x + vPaWorld.z) * 0.35)) * step(0.3, abs(vPaNormalW.y - 1.0));
        paHouseGlow = win * step(h, 0.7);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05), win * 0.7);
      }`,
    emissive: 'totalEmissiveRadiance += vec3(1.0, 0.7, 0.4) * paHouseGlow * night * 2.5;',
  });
  const placed = list.filter(([x, z]) => terrainHeight(x, z) > 4);
  const mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), mat, placed.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color();
  placed.forEach(([x, z], i) => {
    const w = range(8, 16), d = range(8, 14), h = range(4, 8);
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rand() * Math.PI);
    m.compose(new THREE.Vector3(x, terrainHeight(x, z) + h / 2 - 1, z), q, new THREE.Vector3(w, h, d));
    mesh.setMatrixAt(i, m);
    mesh.setColorAt(i, c.set(pick(PALETTES.stucco)));
  });
  mat.userData.night = night;
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}

function neonSign(scene, renderer, { x, y, z, face, text, color }) {
  const tex = canvasTexture(renderer, 512, 128, (c, w, h) => {
    c.fillStyle = '#0b0d10';
    c.fillRect(0, 0, w, h);
    c.font = '700 70px "Barlow Condensed", Impact, sans-serif';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.shadowColor = color;
    c.shadowBlur = 18;
    c.fillStyle = color;
    c.fillText(text, w / 2, h / 2 + 3);
    c.shadowBlur = 0;
    c.fillStyle = '#ffffffcc';
    c.fillText(text, w / 2, h / 2 + 3);
    c.strokeStyle = color;
    c.lineWidth = 5;
    c.strokeRect(8, 8, w - 16, h - 16);
  });
  const mat = new THREE.MeshStandardMaterial({ color: 0x111111, map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 1, roughness: 0.5 });
  const width = Math.min(12, 3 + text.length * 0.9);
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, width / 4), mat);
  mesh.position.set(x, y, z);
  mesh.rotation.y = face === 'west' ? -Math.PI / 2 : face === 'east' ? Math.PI / 2 : face === 'north' ? Math.PI : 0;
  mesh.userData.flicker = chance(0.25);
  scene.add(mesh);
  return mesh;
}
