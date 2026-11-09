import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { proceduralMaterial, canvasTexture } from '../core/materials.js';
import { batchStatic } from '../core/batch.js';
import { atmoUniforms } from './atmosphere.js';
import { rand, range, pick, chance } from '../core/rng.js';
import { blockCentersX, blockCentersZ, BLOCK_SIZE, SIDEWALK, SLAB_H } from './layout.js';
import { terrainHeight } from './ground.js';

// Facade styles. Every building box is one instance of a single facade
// material; the shader draws its floors, windows, frames, shop fronts and
// lit offices from the instance's size and style, so nothing ever stretches.
export const STYLE = {
  CURTAIN: 0, PUNCHED: 1, RIBBON: 2, BRICK: 3, STUCCO: 4, BALCONY: 5, BLANK: 6,
  DECO: 7, GARAGE: 8, METAL: 9, MOTEL: 10, CONDO: 11,
};

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
  #ifdef FACADE_LOW
    float grime = 0.5; // distant chunks skip the noise
  #else
    float grime = pa_fbm3(vPaWorld.xz * 0.15 + vec2(0.0, y * 0.4));
  #endif

  if (an.y > 0.5) {
    // Roof: membrane with a coping stone border.
    float edge = min(vFacSize.x * 0.5 - abs(vFacLocal.x), vFacSize.z * 0.5 - abs(vFacLocal.z));
    vec3 roof = vec3(0.36, 0.36, 0.35) * (0.8 + grime * 0.4) * (0.9 + pa_noise(vPaWorld.xz * 4.0) * 0.2);
    albedo = edge < 0.55 ? wall * 0.9 : roof;
    fRough = 0.9;
    return;
  }

  // Base dirt and vertical rain streaks.
  #ifndef FACADE_LOW
    float streak = pa_noise(vec2(u * 1.3 + faceId * 31.0, y * 0.05)) * pa_noise(vec2(u * 0.4, y * 0.3 + seed));
    wall *= 1.0 - smoothstep(0.35, 0.8, streak) * 0.18;
  #endif
  wall *= 0.88 + grime * 0.24;
  wall *= mix(0.72, 1.0, smoothstep(0.0, 2.5, y));

  if (abs(style - 6.0) < 0.5) { albedo = wall; return; }

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

  if (abs(style - 8.0) < 0.5) {
    // Parking garage: a concrete spandrel per deck, the open deck above it
    // dark inside, with parked cars and strip lights under each slab.
    float cv8 = (y - 0.3) / floorH;
    float fv8 = fract(cv8), row8 = floor(cv8);
    float wv8 = max(dy / floorH, 0.0015);
    float pu = (u + faceW * 0.5) / 2.7;
    float wb = max(du / 2.7, 0.0015);
    float top8 = 1.0 - pa_aastep(vFacTop - 1.1, y, dy);
    float spand = 1.0 - pa_aastep(0.34, fv8, wv8);
    float column = pa_band(fract(pu / 3.0), 0.0, 0.06, wb / 3.0);
    float open = (1.0 - spand) * (1.0 - column) * top8 * step(0.0, cv8);
    float carId = floor(pu / 2.0);
    float ch = pa_hash12(vec2(carId + faceId * 41.0, row8 + seed));
    float cf = fract(pu / 2.0);
    float body = pa_band(cf, 0.08, 0.92, wb * 0.5) * pa_band(fv8, 0.34, 0.6, wv8);
    float cabin = pa_band(cf, 0.25, 0.72, wb * 0.5) * pa_band(fv8, 0.6, 0.76, wv8);
    float car = clamp(body + cabin, 0.0, 1.0) * step(0.35, ch) * open;
    vec3 carCol = mix(mix(vec3(0.62), vec3(0.04), step(0.5, ch)), vec3(0.45, 0.08, 0.06), step(0.82, ch));
    albedo = mix(wall, vec3(0.025, 0.027, 0.03), open);
    albedo = mix(albedo, carCol, car);
    float strip = pa_band(fv8, 0.9, 0.95, wv8) * pa_band(cf, 0.3, 0.7, wb * 0.5) * open;
    fEmit = vec3(0.85, 0.95, 1.0) * strip * mix(0.35, 2.2, nightFactor) + vec3(0.6, 0.7, 0.8) * open * (1.0 - car) * nightFactor * 0.05;
    fRough = mix(0.9, 0.45, car);
    fMetal = car * 0.45;
    return;
  }

  if (abs(style - 9.0) < 0.5) {
    // Warehouse: corrugated metal, clerestory windows and roll-up doors.
    float corrFade = 1.0 - smoothstep(0.08, 0.25, du / 0.2);
    float corr = 0.5 + 0.5 * sin(u * 6.2832 / 0.2);
    albedo = wall * (0.86 + 0.14 * mix(0.5, corr, corrFade));
    float pu9 = (u + faceW * 0.5) / 3.0;
    float clere = pa_band(y, vFacTop - 3.2, vFacTop - 1.7, dy) * pa_band(fract(pu9), 0.08, 0.92, du / 3.0);
    float dp = (u + faceW * 0.5) / 6.0;
    float doorId = floor(dp);
    float hasDoor = step(0.45, pa_hash12(vec2(doorId + faceId * 13.0, seed)));
    float door = pa_band(fract(dp), 0.15, 0.85, du / 6.0) * pa_band(y, 0.0, 4.6, dy) * hasDoor;
    float slatFade = 1.0 - smoothstep(0.05, 0.15, dy / 0.25);
    float slats = mix(0.92, 0.84 + 0.16 * step(0.5, fract(y / 0.25)), slatFade);
    vec3 doorCol = mix(vec3(0.55, 0.56, 0.55), vec3(0.62, 0.36, 0.18), step(0.75, pa_hash12(vec2(doorId, seed * 2.0))));
    albedo = mix(albedo, doorCol * slats, door);
    albedo = mix(albedo, vFacGlass * 0.3, clere);
    fGlass = clere;
    fMetal = mix(mix(0.55, 0.3, door), 0.2, clere);
    fRough = mix(mix(0.5, 0.6, door), 0.08, clere);
    fEmit = vec3(1.0, 0.85, 0.6) * clere * nightFactor * 0.55 * step(0.5, pa_hash12(vec2(floor(pu9), seed)));
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
  else if (style < 5.5) { u0 = 0.1; u1 = 0.9; v0 = 0.1; v1 = 0.86; }
  else if (style < 7.5) { u0 = 0.3; u1 = 0.7; v0 = 0.1; v1 = 0.92; }
  else if (style < 10.5) { u0 = 0.52; u1 = 0.88; v0 = 0.3; v1 = 0.75; }
  else { u0 = 0.05; u1 = 0.95; v0 = 0.06; v1 = 0.96; }
  float isDeco = 1.0 - step(0.5, abs(style - 7.0));
  float isMotel = 1.0 - step(0.5, abs(style - 10.0));
  float isCondo = 1.0 - step(0.5, abs(style - 11.0));

  float win = pa_band(fu, u0, u1, wu) * pa_band(fv, v0, v1, wv) * inGrid;
  float mull = style < 2.5 && style > 1.5 ? pa_band(fu, 0.0, 0.025, wu) + pa_band(fu, 0.975, 1.0, wu) : 0.0;
  mull += isCondo * pa_band(fu, 0.49, 0.51, wu);
  win *= 1.0 - clamp(mull, 0.0, 1.0);
  float frame = clamp(pa_band(fu, u0 - 0.035, u1 + 0.035, wu) * pa_band(fv, v0 - 0.04, v1 + 0.03, wv) * inGrid - win, 0.0, 1.0);
  // Recessed windows cast a little shadow along their top edge.
  float reveal = pa_band(fv, v1 - 0.06, v1, wv) * pa_band(fu, u0, u1, wu) * inGrid;

  float h1 = pa_hash12(vec2(colId + faceId * 97.0 + seed * 13.0, rowId + seed * 7.0));
  float h2 = pa_hash12(vec2(rowId * 1.7 + seed, colId * 3.1 + faceId));
  float h3 = pa_hash12(vec2(colId * 5.3 + seed, rowId * 2.3));
  // Office floors tend to be lit in whole runs, homes window by window.
  float floorLit = pa_hash12(vec2(rowId + seed * 5.0, faceId));
  float office = max(1.0 - step(2.5, style), isDeco);
  float litP = mix(mix(0.04, 0.48, nightFactor), mix(0.05, 0.62, nightFactor) * (0.6 + floorLit * 0.8), office);
  float lit = step(h1, litP);

  vec3 glassCol = vFacGlass * (0.32 + h2 * 0.3);
  // A few windows show curtains, blinds or a lighter interior during the day.
  glassCol = mix(glassCol, vec3(0.32, 0.29, 0.25), step(0.82, h3) * 0.6 * step(0.5, style));
  float spandrel = 0.0;
  float isCurtain = 1.0 - step(0.5, style);
  float isStucco = step(3.5, style) * (1.0 - step(4.5, style));
  vec3 frameCol = mix(mix(vec3(0.07, 0.075, 0.08), vec3(0.95, 0.93, 0.86), max(isStucco, isMotel)), vFacGlass * 0.2 + vec3(0.03), isCurtain);
  frameCol = mix(frameCol, vec3(0.32, 0.24, 0.15), isDeco);
  frameCol = mix(frameCol, vec3(0.78, 0.79, 0.8), isCondo);
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

  if (isDeco > 0.5) {
    // Art deco: raised piers between windows, dark spandrel panels, a cornice every six floors.
    float pier = (pa_band(fu, 0.0, 0.13, wu) + pa_band(fu, 0.87, 1.0, wu)) * inGrid;
    float panel = pa_band(fu, u0, u1, wu) * (1.0 - pa_band(fv, v0, v1, wv)) * inGrid;
    float cornice = pa_band(fract(cv / 6.0), 0.0, 0.025, wv / 6.0) * inGrid;
    albedo = mix(albedo, wall * 1.16, pier * (1.0 - win));
    albedo = mix(albedo, wall * 0.5 + vec3(0.02), panel);
    albedo = mix(albedo, wall * 1.25, cornice);
  }
  if (isMotel > 0.5) {
    // Motel rooms: a painted door beside each window.
    float door = pa_band(fu, 0.1, 0.36, wu) * pa_band(fv, 0.0, 0.8, wv) * inGrid;
    vec3 doorCol = mix(vec3(0.1, 0.42, 0.45), vec3(0.72, 0.28, 0.2), step(0.5, pa_hash12(vec2(seed, 3.0))));
    albedo = mix(albedo, doorCol * (0.9 + 0.1 * h2), door);
    albedo = mix(albedo, vec3(0.85, 0.78, 0.5), door * pa_band(fu, 0.31, 0.33, wu) * pa_band(fv, 0.38, 0.42, wv));
  }
  if (style > 3.5 && style < 4.5) {
    // Painted shutters beside stucco windows.
    float shutter = (pa_band(fu, u0 - 0.15, u0 - 0.035, wu) + pa_band(fu, u1 + 0.035, u1 + 0.15, wu)) * pa_band(fv, v0, v1, wv) * inGrid;
    vec3 shutterCol = mix(mix(vec3(0.12, 0.3, 0.26), vec3(0.15, 0.25, 0.42), step(0.33, h2)), vec3(0.45, 0.2, 0.12), step(0.66, h2));
    albedo = mix(albedo, shutterCol, shutter);
  }
  if (abs(style - 5.0) < 0.5) {
    // Balcony slab and railing.
    float slab = pa_band(fv, 0.0, 0.07, wv) * inGrid;
    float rail = pa_band(fv, 0.07, 0.36, wv) * pa_band(fu, 0.05, 0.95, wu) * inGrid;
    float bars = pa_band(fract(fu * 18.0), 0.0, 0.25, wu * 18.0);
    albedo = mix(albedo, vec3(0.75, 0.74, 0.7), slab);
    albedo = mix(albedo, vec3(0.05), rail * mix(0.35, 0.9, bars));
  }

  float glassAll = clamp(win + spandrel, 0.0, 1.0);
  fGlass = glassAll;
  float glassMetal = mix(mix(0.2, 0.45, max(1.0 - step(2.5, style), isCondo)), 0.75, isCurtain);
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

function makeFacadeMaterial(low = false) {
  const mat = proceduralMaterial(low ? 'facade-low' : 'facade', { color: 0xffffff, roughness: 0.85, metalness: 0.0 }, {
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
  // Merge, don't replace: MeshStandardMaterial relies on its own STANDARD define.
  if (low) mat.defines = { ...mat.defines, FACADE_LOW: '' };
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
  brick: ['#8a4f3c', '#9c5a43', '#7a4535', '#a8735a', '#6d4a3c', '#a35b45'],
  tower: ['#9fa6a8', '#7c8589', '#b5b8b4', '#5f686d', '#c8c3b8'],
  stone: ['#d8cbb0', '#c9b79a', '#b8a88c', '#d2c6ae', '#bfae94'],
  condo: ['#e9e8e4', '#d9dcdc', '#c4c9cb', '#ece4d6', '#d6d2ca'],
  metal: ['#8a9196', '#6d7a6f', '#9a8f7a', '#7d4a3a', '#5f6b78', '#a7a9a3'],
  glass: [[0.18, 0.32, 0.38], [0.16, 0.27, 0.36], [0.28, 0.3, 0.28], [0.25, 0.22, 0.18], [0.2, 0.34, 0.33], [0.14, 0.2, 0.3]],
};

// --- City plan --------------------------------------------------------------
// Each block gets a mix of building types; lots are carved by a random split
// so neighbouring buildings differ in width, depth, height and setback.
const BLOCK_PLAN = {
  '-240,-400': 'parking', '-240,-240': { stucco: 3, motel: 2, shops: 2 }, '-240,-80': { hotel: 3, shops: 2, stucco: 1 },
  '-240,80': { stucco: 3, shops: 2, motel: 1 }, '-240,240': { motel: 2, stucco: 3, shops: 1 }, '-240,400': { stucco: 3, shops: 2 },
  '-80,-400': { brick: 3, shops: 2, garage: 1 }, '-80,-240': { office: 2, garage: 1, deco: 1, shops: 1 }, '-80,-80': { shops: 2, condo: 2, deco: 1, brick: 1 },
  '-80,80': 'park', '-80,240': { brick: 3, garage: 1, shops: 1 }, '-80,400': { warehouse: 4, garage: 1 },
  '80,-400': { tower: 3, office: 2, deco: 1 }, '80,-240': { tower: 2, deco: 2, office: 1 }, '80,-80': 'plaza',
  '80,80': { hotel: 2, shops: 1, condo: 2 }, '80,240': 'parking', '80,400': { warehouse: 3, shops: 1, brick: 1 },
  '240,-400': { office: 2, tower: 2, garage: 1 }, '240,-240': 'plaza-tall', '240,-80': { deco: 2, tower: 2, hotel: 1 },
  '240,80': { condo: 2, brick: 2, shops: 1 }, '240,240': { condo: 3, shops: 2 }, '240,400': 'park',
};
// Smallest lot side each type can be built on.
const MIN_SIDE = { tower: 36, deco: 32, office: 28, hotel: 28, garage: 28, condo: 24, warehouse: 24, motel: 24, brick: 18, stucco: 14, shops: 14 };
export const BUILDING_TYPES = ['glass tower', 'office', 'art deco', 'brick apartments', 'condo', 'hotel', 'shops', 'parking garage', 'coastal stucco', 'motel', 'warehouse'];

const SHOP_NAMES = ['COFFEE', 'PIZZA', 'NAILS', 'DELI', 'BOOKS', 'PHARMACY', 'TACOS', 'SURF', 'RAMEN', 'BAR', 'DONUTS', 'LAUNDRY', 'VINYL', 'BANK', 'FLOWERS', 'GYM'];
const SIGN_COLORS = ['#ff5a7a', '#5fe8ff', '#ffd25a', '#ff8a3d', '#a6ff6a', '#ffffff', '#ff6af0', '#7ab8ff'];
const HOTEL_NAMES = ['HOTEL MIRAMAR', 'THE PALMS', 'CASA DEL MAR', 'HOTEL AURELIO', 'THE SEABRIGHT'];

const CHUNKS_X = 2, CHUNKS_Z = 3;
export function chunkOf(x, z) {
  return (x < 0 ? 0 : 1) + CHUNKS_X * (z < -160 ? 0 : z < 160 ? 1 : 2);
}

function splitLots(rect, minSide, maxSide, out, depth = 0) {
  const w = rect.x1 - rect.x0, d = rect.z1 - rect.z0;
  if ((w <= maxSide && d <= maxSide) || depth > 5) { out.push(rect); return out; }
  const alongX = w >= d;
  const len = alongX ? w : d;
  if (len < minSide * 2) { out.push(rect); return out; }
  const cut = THREE.MathUtils.clamp(range(0.36, 0.64) * len, minSide, len - minSide);
  if (alongX) {
    splitLots({ ...rect, x1: rect.x0 + cut }, minSide, maxSide, out, depth + 1);
    splitLots({ ...rect, x0: rect.x0 + cut }, minSide, maxSide, out, depth + 1);
  } else {
    splitLots({ ...rect, z1: rect.z0 + cut }, minSide, maxSide, out, depth + 1);
    splitLots({ ...rect, z0: rect.z0 + cut }, minSide, maxSide, out, depth + 1);
  }
  return out;
}

function weightedPick(weights) {
  const entries = Object.entries(weights);
  let total = entries.reduce((a, [, w]) => a + w, 0);
  let r = rand() * total;
  for (const [k, w] of entries) if ((r -= w) <= 0) return k;
  return entries[0][0];
}

// Faces of a box: outward normal, rotation that turns local +Z onto it.
const FACES = {
  px: { nx: 1, nz: 0, rot: Math.PI / 2 }, nx: { nx: -1, nz: 0, rot: -Math.PI / 2 },
  pz: { nx: 0, nz: 1, rot: 0 }, nz: { nx: 0, nz: -1, rot: Math.PI },
};
function faceLength(b, f) { return f.nx ? b.d : b.w; }
function facePoint(b, f, t, offset = 0) {
  return f.nx ? [b.x + f.nx * (b.w / 2 + offset), b.z + t] : [b.x + t, b.z + f.nz * (b.d / 2 + offset)];
}

// --- Detail geometry --------------------------------------------------------
function merged(parts) {
  return mergeGeometries(parts.map(([w, h, d, x, y, z, rx = 0, ry = 0, rz = 0, kind = 'box']) => {
    const g = kind === 'cyl' ? new THREE.CylinderGeometry(w, w, h, 12) : kind === 'cone' ? new THREE.ConeGeometry(w, h, 12) : new THREE.BoxGeometry(w, h, d);
    if (rx || ry || rz) g.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rx, ry, rz)));
    g.translate(x, y, z);
    return g.index ? g.toNonIndexed() : g;
  }));
}

function detailGeometries() {
  const acUnit = merged([[1.6, 1.0, 1.2, 0, 0.5, 0], [0.42, 0.08, 0, 0, 1.04, 0, 0, 0, 0, 'cyl'], [1.62, 0.06, 1.22, 0, 0.22, 0]]);
  const tank = merged([
    [1.6, 3.0, 0, 0, 4.1, 0, 0, 0, 0, 'cyl'], [1.75, 1.0, 0, 0, 6.1, 0, 0, 0, 0, 'cone'],
    [0.16, 2.6, 0.16, 1.1, 1.3, 1.1], [0.16, 2.6, 0.16, -1.1, 1.3, 1.1], [0.16, 2.6, 0.16, 1.1, 1.3, -1.1], [0.16, 2.6, 0.16, -1.1, 1.3, -1.1],
    [2.6, 0.14, 2.6, 0, 2.6, 0],
  ]);
  // One floor of fire escape against a wall in the XY plane, sticking out along +Z.
  const fe = [
    [3.2, 0.06, 1.1, 0, 0, 0.6], [3.2, 0.04, 0.04, 0, 0.95, 1.13], [0.04, 0.04, 1.1, -1.6, 0.95, 0.6], [0.04, 0.04, 1.1, 1.6, 0.95, 0.6],
    [0.04, 0.95, 0.04, -1.58, 0.47, 1.13], [0.04, 0.95, 0.04, 0, 0.47, 1.13], [0.04, 0.95, 0.04, 1.58, 0.47, 1.13],
    [3.2, 0.03, 0.03, 0, 0.5, 1.13],
  ];
  // Stairs run along the wall down to the platform below: tilt a long box about Z.
  const fireEscape = (floorH) => merged([...fe,
    [Math.hypot(2.4, floorH), 0.05, 0.55, 0, -floorH / 2, 0.55, 0, 0, Math.atan2(floorH, 2.4)],
    [Math.hypot(2.4, floorH), 0.03, 0.03, 0, -floorH / 2 + 0.85, 0.83, 0, 0, Math.atan2(floorH, 2.4)],
  ]);
  // Balcony: unit width slab plus a railing; scaled in X to the balcony width.
  const balconySlab = merged([[1, 0.16, 1.35, 0, 0, 0.67]]);
  const balconyRail = merged([[1, 1.0, 0.04, 0, 0.58, 1.33], [0.012, 1.0, 1.35, -0.5, 0.58, 0.67], [0.012, 1.0, 1.35, 0.5, 0.58, 0.67]]);
  // Awning: a sloped canvas and a short valance, unit width.
  const awning = (() => {
    const pos = [], uv = [];
    const quad = (a, b, c, d, ua, ub) => {
      pos.push(...a, ...b, ...c, ...a, ...c, ...d);
      uv.push(ua[0], ua[1], ub[0], ua[1], ub[0], ub[1], ua[0], ua[1], ub[0], ub[1], ua[0], ub[1]);
    };
    quad([-0.5, 0, 0], [0.5, 0, 0], [0.5, -0.7, 1.6], [-0.5, -0.7, 1.6], [0, 0], [1, 1]);
    quad([-0.5, -0.7, 1.6], [0.5, -0.7, 1.6], [0.5, -1.0, 1.6], [-0.5, -1.0, 1.6], [0, 0], [1, 0.3]);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.computeVertexNormals();
    return g;
  })();
  const sign = new THREE.PlaneGeometry(1, 1);
  const antenna = merged([[0.08, 1, 0, 0, 0.5, 0, 0, 0, 0, 'cyl']]);
  return { acUnit, tank, fireEscape, balconySlab, balconyRail, awning, sign, antenna };
}

function signAtlas(renderer) {
  // 2 columns x 8 rows of 512x128 shop signs.
  return canvasTexture(renderer, 1024, 1024, (c) => {
    SHOP_NAMES.forEach((name, i) => {
      const x = (i % 2) * 512, y = Math.floor(i / 2) * 128;
      const color = SIGN_COLORS[i % SIGN_COLORS.length];
      const dark = i % 3 === 0;
      c.fillStyle = dark ? '#121417' : ['#f4efe4', '#1d3b4a', '#5a1f1a'][i % 3];
      c.fillRect(x + 4, y + 4, 504, 120);
      c.strokeStyle = color;
      c.lineWidth = 6;
      c.strokeRect(x + 10, y + 10, 492, 108);
      c.font = '800 78px "Barlow Condensed", Impact, sans-serif';
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.shadowColor = color;
      c.shadowBlur = 16;
      c.fillStyle = i % 3 === 0 ? color : (i % 3 === 1 ? '#ffffff' : '#ffe9c2');
      c.fillText(name, x + 256, y + 68);
      c.shadowBlur = 0;
    });
  });
}

function stripeTexture(renderer) {
  return canvasTexture(renderer, 256, 32, (c, w, h) => {
    for (let i = 0; i < 8; i++) {
      c.fillStyle = i % 2 ? '#f4f1ea' : '#ffffff';
      c.fillRect((i * w) / 8, 0, w / 8, h);
      if (i % 2 === 0) { c.fillStyle = 'rgba(0,0,0,0.42)'; c.fillRect((i * w) / 8, 0, w / 8, h); }
    }
  }, { repeat: false });
}

export function buildCity(scene, renderer) {
  const batches = new Map(); // `${kind}|${chunk}` -> records
  const colliders = [];
  const buildingTops = [];
  const emptyLots = [];
  const special = []; // individual meshes (hotel signs, canopies, garage signs, neon)
  const crowns = [];
  const beacons = [];
  const signs = []; // coastal neon
  const houses = [];

  const put = (kind, x, z, rec) => {
    const key = `${kind}|${chunkOf(x, z)}`;
    if (!batches.has(key)) batches.set(key, []);
    batches.get(key).push(rec);
  };

  // A facade box. Ground boxes block the car and occlude the sun.
  function fbox(x, z, w, d, y0, h, style, p) {
    put('facade', x, z, { x, z, w, d, y0, h, style, ...p });
    buildingTops.push({ x, z, w, d, h: y0 + h });
    if (y0 < 1) colliders.push({ x, z, w: w / 2, d: d / 2 });
    return { x, z, w, d, y0, h, top: y0 + h };
  }
  const params = (style, wall, extra = {}) => ({
    wall, glass: pick(PALETTES.glass), seed: rand() * 100, shops: false,
    floorH: style === STYLE.CURTAIN ? range(3.7, 4.2) : style === STYLE.STUCCO ? 3.4 : style === STYLE.GARAGE ? 3.0 : range(3.2, 3.6),
    cellW: style === STYLE.CURTAIN ? range(1.6, 2.2) : style === STYLE.RIBBON ? range(2.4, 3.0) : style === STYLE.STUCCO ? range(3.8, 4.6)
      : style === STYLE.DECO ? range(2.2, 2.6) : style === STYLE.MOTEL ? 4.2 : style === STYLE.CONDO ? range(3.2, 3.8) : range(2.8, 3.6),
    ...extra,
  });
  // Height for a number of window rows above an optional shop floor, plus parapet.
  const heightFor = (floors, p) => floors * p.floorH + (p.shops ? 4.8 : 0.9) + 1.3 - SLAB_H;
  // Window layout as the shader computes it, so details line up with windows.
  const grid = (b, p, f) => {
    const faceW = faceLength(b, f);
    const nCols = Math.max(Math.floor((faceW - 1) / p.cellW), 1);
    const groundH = p.shops ? 4.8 : 0.9;
    const rows = Math.max(0, Math.floor((b.top - 1.3 - groundH) / p.floorH));
    return { faceW, nCols, groundH, rows, colU: c => (c + 0.5 - nCols / 2) * p.cellW, rowY: r => groundH + r * p.floorH };
  };

  function roofKit(b, count, tank = false) {
    for (let i = 0; i < count; i++) {
      const x = b.x + range(-b.w / 2 + 2.5, b.w / 2 - 2.5), z = b.z + range(-b.d / 2 + 2.5, b.d / 2 - 2.5);
      put('ac', x, z, { pos: [x, b.top, z], rot: pick([0, Math.PI / 2]), scale: [range(0.8, 1.6), range(0.8, 1.3), range(0.8, 1.5)], color: pick(['#b5b8b6', '#9a9d9c', '#c8c9c4']) });
    }
    if (tank) {
      const x = b.x + range(-b.w / 4, b.w / 4), z = b.z + range(-b.d / 4, b.d / 4);
      put('tank', x, z, { pos: [x, b.top, z], rot: 0, scale: [1, range(0.9, 1.15), 1], color: pick(['#6b4f36', '#5e4a3a', '#7a5a3e']) });
    }
  }
  function antenna(x, y, z, h) {
    put('antenna', x, z, { pos: [x, y, z], rot: 0, scale: [1, h, 1], color: '#9aa0a3' });
    beacons.push([x, y + h + 0.3, z]);
  }
  function cornice(b, color) {
    fbox(b.x, b.z, b.w + 0.9, b.d + 0.9, b.top - 0.15, 0.75, STYLE.BLANK, params(STYLE.BLANK, color));
  }

  // Storefronts: lit signs above each shop and striped awnings on some.
  function storefronts(b, p, faces, withAwnings) {
    for (const f of faces) {
      const faceW = faceLength(b, f);
      const n = Math.max(Math.floor(faceW / 6), 1), shopW = faceW / n;
      const awningColor = pick(['#b8322a', '#2b6e8f', '#2f7a4f', '#d08a2a', '#6b3f8f', '#20304a']);
      for (let k = 0; k < n; k++) {
        const t = -faceW / 2 + (k + 0.5) * shopW;
        if (chance(0.78)) {
          const [x, z] = facePoint(b, f, t, 0.07);
          put('sign', x, z, { pos: [x, 4.1, z], rot: f.rot, scale: [shopW * 0.72, 0.7, 1], sign: Math.floor(rand() * SHOP_NAMES.length), color: '#ffffff' });
        }
        if (withAwnings && chance(0.7)) {
          const [x, z] = facePoint(b, f, t, 0.02);
          put('awning', x, z, { pos: [x, 3.62, z], rot: f.rot, scale: [shopW * 0.9, 1, 1], color: chance(0.75) ? awningColor : pick(['#b8322a', '#2b6e8f', '#2f7a4f']) });
        }
      }
    }
  }
  function balconies(b, p, faces, every = 2, rail = 'glass') {
    for (const f of faces) {
      const g = grid(b, p, f);
      for (let r = 1; r < g.rows; r++) {
        for (let c = 0; c + every <= g.nCols; c += every) {
          const t = (g.colU(c) + g.colU(c + every - 1)) / 2;
          const width = every * p.cellW - 0.5;
          const [x, z] = facePoint(b, f, t, 0);
          const y = g.rowY(r) + 0.02;
          put('balconySlab', x, z, { pos: [x, y, z], rot: f.rot, scale: [width, 1, 1], color: '#d9d8d2' });
          put(rail === 'glass' ? 'balconyGlass' : 'balconyRail', x, z, { pos: [x, y, z], rot: f.rot, scale: [width, 1, 1], color: rail === 'glass' ? '#9fb6bf' : '#2a2c2d' });
        }
      }
    }
  }
  function fireEscapes(b, p, f) {
    const g = grid(b, p, f);
    if (g.nCols < 4 || g.rows < 3) return;
    const c = Math.floor(rand() * (g.nCols - 2)) + 1;
    const t = (g.colU(c) + g.colU(c + 1)) / 2;
    const [x, z] = facePoint(b, f, t, 0);
    for (let r = 1; r < g.rows; r++) put('fireEscape', x, z, { pos: [x, g.rowY(r), z], rot: f.rot, scale: [1, 1, 1], color: '#2b2e30', floorH: p.floorH });
  }

  // --- Building types -----------------------------------------------------
  const build = {
    tower(lot, faces, dw) {
      const pw = lot.w, pd = lot.d;
      const podium = fbox(lot.x, lot.z, pw, pd, SLAB_H, range(10, 16), pick([STYLE.RIBBON, STYLE.PUNCHED]), params(STYLE.RIBBON, pick(PALETTES.concrete), { shops: true }));
      storefronts(podium, null, faces, false);
      roofKit({ ...podium, x: lot.x + pw * 0.3, w: pw * 0.3, d: pd * 0.4 }, 3);
      const p = params(STYLE.CURTAIN, pick(PALETTES.tower));
      const h = 70 + dw * range(70, 150);
      let tw = Math.min(pw - 10, range(30, 46)), td = Math.min(pd - 10, range(30, 46));
      let y = podium.top, tiers = h > 120 ? 3 : h > 75 ? 2 : 1, b;
      for (let t = 0; t < tiers; t++) {
        const th = t === tiers - 1 ? Math.max(h - (y - SLAB_H), 12) : h * range(0.42, 0.58) / (t + 1);
        b = fbox(lot.x, lot.z, tw, td, y, th, STYLE.CURTAIN, p);
        y += th;
        tw *= range(0.72, 0.86);
        td *= range(0.72, 0.86);
      }
      crowns.push({ x: b.x, z: b.z, w: b.w, d: b.d, y: b.top - 0.6, color: pick(['#bfe3ff', '#ffe2b0', '#ffffff', '#ffb9d8']) });
      if (chance(0.5)) {
        const pent = fbox(b.x, b.z, b.w * 0.45, b.d * 0.45, b.top, 6, STYLE.BLANK, params(STYLE.BLANK, '#7d8487'));
        antenna(b.x, pent.top, b.z, h > 140 ? 28 : 12);
      } else {
        roofKit(b, 4);
        beacons.push([b.x + b.w / 2 - 1, b.top + 0.8, b.z + b.d / 2 - 1]);
      }
    },
    office(lot, faces, dw) {
      const w = lot.w, d = lot.d;
      const floors = Math.floor(range(9, 18) + dw * range(4, 12));
      const style = chance(0.6) ? STYLE.RIBBON : STYLE.PUNCHED;
      const p = params(style, pick(PALETTES.concrete), { shops: true });
      const b = fbox(lot.x, lot.z, w, d, SLAB_H, heightFor(floors, p), style, p);
      storefronts(b, p, faces, false);
      let top = b;
      if (chance(0.45)) top = fbox(b.x + range(-2, 2), b.z + range(-2, 2), w * range(0.6, 0.75), d * range(0.6, 0.75), b.top, range(8, 20), style, { ...p, shops: false });
      const pent = fbox(top.x, top.z, top.w * 0.35, top.d * 0.35, top.top, 4.5, STYLE.BLANK, params(STYLE.BLANK, '#8d8f8c'));
      roofKit(top, 5);
      beacons.push([pent.x, pent.top + 0.3, pent.z]);
    },
    deco(lot, faces, dw) {
      const stone = pick(PALETTES.stone);
      const p = params(STYLE.DECO, stone, { shops: true });
      const h = 50 + dw * range(30, 90);
      let w = lot.w, d = lot.d, y = SLAB_H, b;
      const tiers = 3 + (h > 100 ? 1 : 0);
      for (let t = 0; t < tiers; t++) {
        const th = t === 0 ? h * 0.45 : h * 0.55 / (tiers - 1);
        b = fbox(lot.x, lot.z, w, d, y, th, STYLE.DECO, t === 0 ? p : { ...p, shops: false });
        if (t === 0) storefronts(b, p, faces, chance(0.4));
        cornice(b, '#e6dcc6');
        y += th;
        w *= range(0.7, 0.8);
        d *= range(0.7, 0.8);
      }
      const spire = fbox(b.x, b.z, Math.max(3, w * 0.4), Math.max(3, d * 0.4), b.top, 8, STYLE.BLANK, params(STYLE.BLANK, stone));
      antenna(spire.x, spire.top, spire.z, 18);
      crowns.push({ x: spire.x, z: spire.z, w: spire.w, d: spire.d, y: spire.top - 1.2, color: pick(['#ffe2b0', '#bfe3ff']) });
    },
    brick(lot, faces) {
      const p = params(STYLE.BRICK, pick(PALETTES.brick), { shops: chance(0.75), floorH: range(3.1, 3.4) });
      const floors = Math.floor(range(4, 8));
      const b = fbox(lot.x, lot.z, lot.w, lot.d, SLAB_H, heightFor(floors, p), STYLE.BRICK, p);
      if (p.shops) storefronts(b, p, faces, chance(0.5));
      cornice(b, '#b8ab98');
      for (const f of faces.slice(0, 2)) if (chance(0.8)) fireEscapes(b, p, f);
      roofKit(b, 2, chance(0.8));
    },
    condo(lot, faces, dw) {
      const p = params(STYLE.CONDO, pick(PALETTES.condo), { shops: chance(0.6), floorH: 3.2 });
      const floors = Math.floor(range(6, 12) + dw * 8);
      const b = fbox(lot.x, lot.z, lot.w, lot.d, SLAB_H, heightFor(floors, p), STYLE.CONDO, p);
      if (p.shops) storefronts(b, p, faces, false);
      balconies(b, p, faces, 2, 'glass');
      roofKit(b, 3);
    },
    hotel(lot, faces, dw) {
      const p = params(STYLE.CONDO, pick(['#efe6d4', '#e2d3bd', '#d8dfe2', '#f2ddd0']), { shops: true, floorH: 3.3 });
      const w = Math.min(lot.w, range(26, 38)), d = Math.min(lot.d, range(18, 26));
      const floors = Math.floor(range(10, 16) + dw * 6);
      const b = fbox(lot.x, lot.z, w, d, SLAB_H, heightFor(floors, p), STYLE.CONDO, p);
      balconies(b, p, faces.length ? faces : [FACES.pz], 1, 'metal');
      const f = faces[0] || FACES.pz;
      const name = pick(HOTEL_NAMES);
      special.push({ kind: 'hotel', b, f, name });
      roofKit(b, 3);
    },
    shops(lot, faces) {
      const two = chance(0.5);
      const p = params(STYLE.PUNCHED, chance(0.6) ? pick(PALETTES.stucco) : pick(PALETTES.concrete), { shops: true });
      const b = fbox(lot.x, lot.z, lot.w, lot.d, SLAB_H, two ? heightFor(1, p) : 6.0, STYLE.PUNCHED, p);
      storefronts(b, p, faces.length ? faces : [FACES.pz], true);
      cornice(b, '#cfc6b4');
      roofKit(b, Math.floor(range(2, 5)));
    },
    garage(lot, faces) {
      const p = params(STYLE.GARAGE, pick(['#b3ada2', '#a7a49c', '#c0b8aa']), { floorH: 3.0 });
      const decks = Math.floor(range(4, 7));
      const b = fbox(lot.x, lot.z, lot.w, lot.d, SLAB_H, decks * 3.0 + 1.4, STYLE.GARAGE, p);
      special.push({ kind: 'garage', b, f: faces[0] || FACES.pz });
      roofKit(b, 1);
    },
    stucco(lot, faces) {
      const shops = faces.length > 0 && chance(0.8);
      const p = params(STYLE.STUCCO, pick(PALETTES.stucco), { shops });
      const floors = Math.floor(range(2, 5));
      const b = fbox(lot.x, lot.z, lot.w, lot.d, SLAB_H, heightFor(floors, p), chance(0.8) ? STYLE.STUCCO : STYLE.PUNCHED, p);
      if (shops) storefronts(b, p, faces, chance(0.6));
      if (chance(0.8)) put('tileRoof', b.x, b.z, { pos: [b.x, b.top, b.z], rot: 0, scale: [b.w, Math.min(b.w, b.d) * 0.22, b.d] });
      else roofKit(b, 2);
      const west = faces.find(f => f.nx === -1);
      if (west && chance(0.6)) {
        signs.push({ x: b.x - b.w / 2 - 0.12, z: b.z, y: (shops ? 4.8 : 1.2) + 1.8, face: 'west', text: pick(['MOTEL', 'TACOS', 'SURF SHOP', 'LIQUOR', 'PIZZA', 'COCKTAILS', 'ICE CREAM', 'BAIT & TACKLE']), color: pick(['#ff4f7b', '#5ff2ff', '#ffd25a', '#ff7a3d', '#9dff6a']) });
      }
    },
    motel(lot, faces) {
      const f = faces[0] || FACES.pz;
      const p = params(STYLE.MOTEL, pick(PALETTES.stucco), { floorH: 3.0 });
      // A long two-storey bar set back behind its parking, facing the street.
      const along = faceLength(lot, f), depth = f.nx ? lot.w : lot.d;
      const barDepth = Math.min(depth * 0.5, 12);
      const back = depth / 2 - barDepth / 2;
      const cx = lot.x - f.nx * back, cz = lot.z - f.nz * back;
      const bw = f.nx ? barDepth : along * 0.92, bd = f.nx ? along * 0.92 : barDepth;
      const b = fbox(cx, cz, bw, bd, SLAB_H, heightFor(2, p), STYLE.MOTEL, p);
      // Upper walkway with a railing along the room doors.
      const [wx, wz] = facePoint(b, f, 0, 0);
      put('balconySlab', wx, wz, { pos: [wx, 0.9 + 3.0 + 0.02, wz], rot: f.rot, scale: [faceLength(b, f) - 0.4, 1, 1.15], color: '#e6e1d6' });
      put('balconyRail', wx, wz, { pos: [wx, 0.9 + 3.0 + 0.02, wz], rot: f.rot, scale: [faceLength(b, f) - 0.4, 1, 1.15], color: '#e8e4da' });
      put('tileRoof', b.x, b.z, { pos: [b.x, b.top, b.z], rot: 0, scale: [b.w, Math.min(b.w, b.d) * 0.28, b.d] });
      const [sx, sz] = facePoint(lot, f, -faceLength(lot, f) / 2 + 4, -2);
      special.push({ kind: 'motelSign', x: sx, z: sz, f, name: pick(['SEA BREEZE', 'SUNSET', 'PALM VIEW', 'BLUE WAVE']) });
      emptyLots.push({ x: lot.x + f.nx * barDepth / 2, z: lot.z + f.nz * barDepth / 2, w: f.nx ? depth - barDepth : along, d: f.nx ? along : depth - barDepth, parking: true });
    },
    warehouse(lot, faces) {
      const p = params(STYLE.METAL, pick(PALETTES.metal), { floorH: 9 });
      const h = range(8, 11.5);
      const b = fbox(lot.x, lot.z, lot.w, lot.d, SLAB_H, h, STYLE.METAL, p);
      roofKit(b, Math.floor(range(1, 4)));
    },
  };

  // --- Lay out every block --------------------------------------------------
  const half = BLOCK_SIZE / 2 - SIDEWALK; // usable lot half-size (61)
  for (const cx of blockCentersX) for (const cz of blockCentersZ) {
    const key = `${cx},${cz}`;
    const plan = BLOCK_PLAN[key];
    const dw = Math.max(0, 1 - Math.hypot(cx - 150, cz + 200) / 380);
    if (plan === 'park') { emptyLots.push({ x: cx, z: cz, w: half * 2, d: half * 2, park: true }); continue; }
    if (plan === 'parking') {
      const b = fbox(cx - half + 14, cz - half + 11, 24, 18, SLAB_H, 5.5, STYLE.STUCCO, params(STYLE.STUCCO, pick(PALETTES.stucco), { shops: true }));
      storefronts(b, null, [FACES.nz], true);
      signs.push({ x: b.x, z: b.z - b.d / 2 - 0.1, y: 7.6, face: 'north', text: key === '80,240' ? 'GAS · 24H' : 'SURF DINER', color: '#ff6a5a' });
      emptyLots.push({ x: cx + 10, z: cz + 10, w: half * 1.6, d: half * 1.6, parking: true });
      continue;
    }
    if (plan === 'plaza' || plan === 'plaza-tall') {
      const s = range(46, 54);
      build.tower({ x: cx + range(-6, 6), z: cz + range(-6, 6), w: s, d: s }, [FACES.px, FACES.nx, FACES.pz, FACES.nz], plan === 'plaza-tall' ? 1.25 : 0.95);
      emptyLots.push({ x: cx, z: cz, w: half * 2, d: half * 2, plaza: true });
      continue;
    }
    const coastal = cx === -240;
    const lots = splitLots({ x0: cx - half, x1: cx + half, z0: cz - half, z1: cz + half }, coastal ? 18 : 22, coastal ? 44 : 64, []);
    for (const r of lots) {
      const w = r.x1 - r.x0, d = r.z1 - r.z0;
      // Street-facing sides are the ones on the block edge.
      const faces = [];
      if (r.x0 <= cx - half + 0.5) faces.push(FACES.nx);
      if (r.x1 >= cx + half - 0.5) faces.push(FACES.px);
      if (r.z0 <= cz - half + 0.5) faces.push(FACES.nz);
      if (r.z1 >= cz + half - 0.5) faces.push(FACES.pz);
      if (chance(0.07) || !faces.length) { emptyLots.push({ x: (r.x0 + r.x1) / 2, z: (r.z0 + r.z1) / 2, w, d }); continue; }
      const fits = Object.fromEntries(Object.entries(plan).filter(([t]) => Math.min(w, d) >= MIN_SIDE[t]));
      const type = Object.keys(fits).length ? weightedPick(fits) : 'shops';
      // Setback from streets (towers sit back on a plaza), gaps between neighbours.
      const streetSet = type === 'tower' ? range(2, 6) : type === 'shops' || type === 'brick' ? range(0.2, 1) : range(0.5, 3);
      const inner = range(1.5, 4);
      const sx0 = faces.includes(FACES.nx) ? streetSet : inner, sx1 = faces.includes(FACES.px) ? streetSet : inner;
      const sz0 = faces.includes(FACES.nz) ? streetSet : inner, sz1 = faces.includes(FACES.pz) ? streetSet : inner;
      const lot = { x: (r.x0 + sx0 + r.x1 - sx1) / 2, z: (r.z0 + sz0 + r.z1 - sz1) / 2, w: w - sx0 - sx1, d: d - sz0 - sz1 };
      build[type](lot, faces, dw);
    }
  }

  // Houses dotted over the hills.
  for (let i = 0; i < 160; i++) {
    const side = rand();
    const x = side < 0.6 ? range(420, 980) : range(-300, 700);
    const z = side < 0.6 ? range(-900, 900) : (chance(0.5) ? range(620, 1000) : range(-1000, -620));
    houses.push([x, z]);
  }

  // --- Instanced meshes per kind and chunk ----------------------------------
  const geo = detailGeometries();
  const atlas = signAtlas(renderer);
  const stripes = stripeTexture(renderer);
  const boxGeo = new THREE.BoxGeometry(1, 1, 1);
  const facadeMat = makeFacadeMaterial();
  const signMat = new THREE.MeshStandardMaterial({ map: atlas, emissive: 0xffffff, emissiveMap: atlas, emissiveIntensity: 0.4, roughness: 0.5 });
  signMat.onBeforeCompile = sh => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec2 aSign;')
      .replace('#include <uv_vertex>', `#include <uv_vertex>
        vec2 atlasUv = uv * vec2(0.5, 0.125) + aSign;
        #ifdef USE_MAP
          vMapUv = atlasUv;
        #endif
        #ifdef USE_EMISSIVEMAP
          vEmissiveMapUv = atlasUv;
        #endif`);
  };
  signMat.customProgramCacheKey = () => 'shop-sign-atlas';
  const fireEscapeGeo = new Map();
  const KINDS = {
    facade: { geometry: boxGeo, material: facadeMat, shadow: true, lod: 0 },
    tileRoof: { geometry: hipRoofGeometry(), material: makeTileRoofMaterial(), shadow: true, lod: 0 },
    ac: { geometry: geo.acUnit, material: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.55, metalness: 0.5 }), shadow: true, lod: 320 },
    tank: { geometry: geo.tank, material: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 }), shadow: true, lod: 420 },
    antenna: { geometry: geo.antenna, material: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4, metalness: 0.8 }), shadow: true, lod: 0 },
    fireEscape: { geometry: null, material: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, metalness: 0.6 }), shadow: true, lod: 260 },
    balconySlab: { geometry: geo.balconySlab, material: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 }), shadow: true, lod: 340 },
    balconyGlass: { geometry: geo.balconyRail, material: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.08, metalness: 0.7, transparent: true, opacity: 0.55, depthWrite: false }), shadow: false, lod: 300 },
    balconyRail: { geometry: geo.balconyRail, material: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0.5 }), shadow: true, lod: 300 },
    awning: { geometry: geo.awning, material: new THREE.MeshStandardMaterial({ map: stripes, side: THREE.DoubleSide, roughness: 0.9 }), shadow: true, lod: 300 },
    sign: { geometry: geo.sign, material: signMat, shadow: false, lod: 520 },
  };
  const MIRROR_SKIP = new Set(['tileRoof', 'ac', 'tank', 'antenna', 'fireEscape', 'balconyGlass', 'balconyRail', 'balconySlab']);
  const chunkMeshes = Array.from({ length: CHUNKS_X * CHUNKS_Z }, () => []);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3(), color = new THREE.Color();
  const up = new THREE.Vector3(0, 1, 0);
  for (const [key, recs] of batches) {
    const [kind, chunkStr] = key.split('|');
    const def = KINDS[kind];
    if (kind === 'fireEscape') {
      // Fire escape stairs depend on floor height; group by it.
      const byH = new Map();
      for (const r of recs) { const k = r.floorH.toFixed(1); if (!byH.has(k)) byH.set(k, []); byH.get(k).push(r); }
      for (const [k, list] of byH) {
        if (!fireEscapeGeo.has(k)) fireEscapeGeo.set(k, geo.fireEscape(Number(k)));
        addMesh(kind, Number(chunkStr), list, fireEscapeGeo.get(k), def);
      }
      continue;
    }
    addMesh(kind, Number(chunkStr), recs, def.geometry, def);
  }
  function addMesh(kind, chunk, recs, geometry, def) {
    let g = geometry;
    if (kind === 'facade' || kind === 'sign') g = geometry.clone();
    const mesh = new THREE.InstancedMesh(g, def.material, recs.length);
    if (kind === 'facade') {
      const aStyle = new Float32Array(recs.length * 4), aGlass = new Float32Array(recs.length * 3), aExtra = new Float32Array(recs.length * 2);
      recs.forEach((b, i) => {
        m.compose(p.set(b.x, b.y0 + b.h / 2, b.z), q.identity(), s.set(b.w, b.h, b.d));
        mesh.setMatrixAt(i, m);
        mesh.setColorAt(i, color.set(b.wall));
        aStyle.set([b.style, b.floorH, b.cellW, b.seed], i * 4);
        aGlass.set(b.glass, i * 3);
        aExtra.set([b.shops ? 1 : 0, 0], i * 2);
      });
      g.setAttribute('aStyle', new THREE.InstancedBufferAttribute(aStyle, 4));
      g.setAttribute('aGlass', new THREE.InstancedBufferAttribute(aGlass, 3));
      g.setAttribute('aExtra', new THREE.InstancedBufferAttribute(aExtra, 2));
    } else {
      const aSign = kind === 'sign' ? new Float32Array(recs.length * 2) : null;
      recs.forEach((r, i) => {
        q.setFromAxisAngle(up, r.rot || 0);
        m.compose(p.set(...r.pos), q, s.set(...r.scale));
        mesh.setMatrixAt(i, m);
        if (r.color) mesh.setColorAt(i, color.set(r.color));
        if (aSign) aSign.set([(r.sign % 2) * 0.5, 0.875 - Math.floor(r.sign / 2) * 0.125], i * 2);
      });
      if (aSign) g.setAttribute('aSign', new THREE.InstancedBufferAttribute(aSign, 2));
    }
    mesh.name = kind;
    mesh.castShadow = def.shadow;
    mesh.receiveShadow = true;
    mesh.userData.lod = def.lod;
    if (kind === 'balconyGlass') mesh.userData.noAO = true;
    // Roof kit and small wall details can't be seen from the mirror camera under the
    // water plane; layer 1 keeps them out of that pass.
    if (MIRROR_SKIP.has(kind)) mesh.layers.set(1);
    mesh.computeBoundingSphere();
    scene.add(mesh);
    chunkMeshes[chunk].push(mesh);
  }
  const chunkCenters = chunkMeshes.map((_, i) => new THREE.Vector3((i % CHUNKS_X) ? 160 : -200, 0, [-320, 0, 320][Math.floor(i / CHUNKS_X)]));

  // Hotels: an entrance canopy, a vertical blade sign and a lit rooftop name.
  // Garages get a lit P; motels a roadside sign on a pole.
  const specialMeshes = [];
  const signTex = (w, h, draw) => canvasTexture(renderer, w, h, draw);
  const glowMat = (tex, extra = {}) => new THREE.MeshStandardMaterial({ color: 0x111111, map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.4, roughness: 0.5, ...extra });
  const darkMetal = new THREE.MeshStandardMaterial({ color: 0x1c2023, roughness: 0.45, metalness: 0.6 });
  const warmLight = new THREE.MeshStandardMaterial({ color: 0x332a20, emissive: 0xffd9a0, emissiveIntensity: 0.3 });
  const addSpecial = (mesh, x, z, glow = true) => {
    mesh.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    if (mesh.isGroup) batchStatic(mesh);
    mesh.userData.glow = glow;
    scene.add(mesh);
    specialMeshes.push({ mesh, chunk: chunkOf(x, z) });
  };
  for (const sp of special) {
    if (sp.kind === 'hotel') {
      const { b, f, name } = sp;
      const fl = faceLength(b, f);
      const g = new THREE.Group();
      const color = pick(['#ffd27a', '#ff7aa8', '#7ad7ff']);
      // Canopy over the entrance with downlights.
      const canopy = new THREE.Mesh(new THREE.BoxGeometry(7, 0.35, 3.4), darkMetal);
      canopy.position.set(0, 4.25, 1.7);
      const under = new THREE.Mesh(new THREE.BoxGeometry(6.6, 0.05, 3.0), warmLight);
      under.position.set(0, 4.05, 1.7);
      g.add(canopy, under);
      for (const sx of [-3.2, 3.2]) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 4.1, 8), darkMetal);
        post.position.set(sx, 2.05, 3.3);
        g.add(post);
      }
      // Blade sign near the corner, readable along the street.
      const letters = name.replace('HOTEL ', '').replace('THE ', '');
      const blade = signTex(128, 1024, (c, w, h) => {
        c.fillStyle = '#121519'; c.fillRect(0, 0, w, h);
        c.strokeStyle = color; c.lineWidth = 6; c.strokeRect(8, 8, w - 16, h - 16);
        c.fillStyle = color; c.textAlign = 'center'; c.textBaseline = 'middle';
        c.shadowColor = color; c.shadowBlur = 14;
        const chars = letters.split('');
        const step = (h - 80) / chars.length;
        c.font = `800 ${Math.min(100, step * 0.95)}px "Barlow Condensed", Impact, sans-serif`;
        chars.forEach((ch, i) => c.fillText(ch, w / 2, 50 + step * (i + 0.5)));
      });
      const bladeMat = glowMat(blade);
      const bladeH = Math.min(14, b.top - 9);
      if (bladeH > 5) {
        const bladeMesh = new THREE.Mesh(new THREE.BoxGeometry(0.35, bladeH, 2.2), [bladeMat, bladeMat, darkMetal, darkMetal, darkMetal, darkMetal]);
        bladeMesh.position.set(fl / 2 - 2.2, 7 + bladeH / 2, 1.2);
        g.add(bladeMesh);
      }
      // Rooftop name in lights.
      const roofTex = signTex(1024, 128, (c, w, h) => {
        c.clearRect(0, 0, w, h);
        c.font = '800 104px "Barlow Condensed", Impact, sans-serif';
        c.textAlign = 'center'; c.textBaseline = 'middle';
        c.shadowColor = color; c.shadowBlur = 18; c.fillStyle = color;
        c.fillText(name, w / 2, h / 2 + 4);
        c.shadowBlur = 0; c.fillStyle = '#fff6e0'; c.fillText(name, w / 2, h / 2 + 4);
      });
      const roofSign = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(fl * 0.85, 26), Math.min(fl * 0.85, 26) / 8), glowMat(roofTex, { transparent: true, alphaTest: 0.05, color: 0x000000 }));
      roofSign.position.set(0, b.top - b.y0 + 1.9, -0.6);
      roofSign.material.userData.boost = 1.4;
      g.add(roofSign);
      const [x, z] = facePoint(b, f, 0, 0);
      g.position.set(x, SLAB_H, z);
      g.rotation.y = f.rot;
      addSpecial(g, x, z);
    } else if (sp.kind === 'garage') {
      const { b, f } = sp;
      const tex = signTex(128, 128, (c, w, h) => {
        c.fillStyle = '#1d5fbf'; c.fillRect(0, 0, w, h);
        c.strokeStyle = '#ffffff'; c.lineWidth = 8; c.strokeRect(8, 8, w - 16, h - 16);
        c.fillStyle = '#ffffff'; c.font = '800 100px Arial, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
        c.fillText('P', w / 2, h / 2 + 6);
      });
      const mat = glowMat(tex, { color: 0xffffff });
      const sign = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.8, 0.3), [darkMetal, darkMetal, darkMetal, darkMetal, mat, mat]);
      const fl = faceLength(b, f);
      const [x, z] = facePoint(b, f, fl / 2 - 1.5, 0.3);
      sign.position.set(x, b.top - 2, z);
      sign.rotation.y = f.rot;
      addSpecial(sign, x, z);
    } else if (sp.kind === 'motelSign') {
      const { x, z, f, name } = sp;
      const tex = signTex(512, 256, (c, w, h) => {
        c.fillStyle = '#16303a'; c.fillRect(0, 0, w, h);
        c.strokeStyle = '#ff5a6e'; c.lineWidth = 10; c.strokeRect(10, 10, w - 20, h - 20);
        c.textAlign = 'center'; c.textBaseline = 'middle';
        c.shadowColor = '#ff5a6e'; c.shadowBlur = 20; c.fillStyle = '#ff7a8a';
        c.font = '800 110px "Barlow Condensed", Impact, sans-serif'; c.fillText('MOTEL', w / 2, 92);
        c.shadowColor = '#5fe8ff'; c.fillStyle = '#9ff3ff';
        c.font = '700 54px "Barlow Condensed", Impact, sans-serif'; c.fillText(name, w / 2, 186);
        c.shadowBlur = 0; c.fillStyle = '#ffd25a'; c.font = '700 30px Arial'; c.fillText('VACANCY', w / 2, 232);
      });
      const mat = glowMat(tex);
      const g = new THREE.Group();
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 7.5, 10), darkMetal);
      pole.position.y = 3.75;
      const board = new THREE.Mesh(new THREE.BoxGeometry(5.4, 2.7, 0.35), [darkMetal, darkMetal, darkMetal, darkMetal, mat, mat]);
      board.position.y = 8.6;
      g.add(pole, board);
      g.position.set(x, SLAB_H, z);
      g.rotation.y = f.rot + Math.PI / 2;
      addSpecial(g, x, z);
    }
  }

  // Crowns: LED bands at the top of towers that glow after sunset.
  const crownMat = new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.4 });
  const crownMesh = new THREE.InstancedMesh(boxGeo, crownMat, crowns.length);
  crowns.forEach((c, i) => {
    m.compose(p.set(c.x, c.y, c.z), q.identity(), s.set(c.w + 0.5, 0.7, c.d + 0.5));
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

  // Neon shop signs on the coast.
  const signMeshes = [];
  for (const sg of signs) signMeshes.push(neonSign(scene, renderer, sg));

  const facadeLow = makeFacadeMaterial(true);
  const chunkBounds = chunkMeshes.map((_, i) => {
    const xi = i % CHUNKS_X, zi = Math.floor(i / CHUNKS_X);
    return { x0: xi ? 0 : -360, x1: xi ? 360 : 0, z0: [-570, -160, 160][zi], z1: [-160, 160, 570][zi] };
  });
  let lodTimer = 0;
  const glowSpecial = specialMeshes.flatMap(({ mesh }) => {
    const mats = [];
    mesh.traverse(o => { if (o.isMesh) for (const mm of [].concat(o.material)) if (mm.emissiveMap || mm === warmLight) mats.push(mm); });
    return mats;
  });

  const api = {
    colliders,
    buildingTops,
    emptyLots,
    stats: { buildings: colliders.length, facadeBoxes: [...batches.keys()].filter(k => k.startsWith('facade')).reduce((a, k) => a + batches.get(k).length, 0) },
    update(night, time, camera, dt = 0.016) {
      crownMat.emissiveIntensity = night * 1.6;
      beaconMat.color.setRGB(8 * (0.15 + 0.85 * night) * (Math.sin(time * 3.2) > 0.2 ? 1 : 0.04), 0.25, 0.15);
      signMat.emissiveIntensity = 0.3 + night * 2.0;
      for (const mm of new Set(glowSpecial)) mm.emissiveIntensity = (0.3 + night * 2.2) * (mm.userData.boost || 1);
      for (const sm of signMeshes) {
        const flicker = sm.userData.flicker && Math.sin(time * 37) > 0.93 ? 0.3 : 1;
        sm.material.emissiveIntensity = (0.3 + night * 2.2) * flicker;
      }
      if (houseMesh) houseMesh.material.userData.night.value = night;
      // Level of detail: hide small details in distant chunks and switch
      // their facades to a cheaper shader.
      lodTimer -= dt;
      if (camera && lodTimer <= 0) {
        lodTimer = 0.25;
        const cx = camera.position.x, cz = camera.position.z;
        chunkMeshes.forEach((meshes, i) => {
          const bnd = chunkBounds[i];
          const dx = Math.max(bnd.x0 - cx, 0, cx - bnd.x1), dz = Math.max(bnd.z0 - cz, 0, cz - bnd.z1);
          const dist = Math.hypot(dx, dz);
          for (const mesh of meshes) {
            if (mesh.userData.lod > 0) mesh.visible = dist < mesh.userData.lod;
            if (mesh.material === facadeMat || mesh.material === facadeLow) mesh.material = dist > 360 ? facadeLow : facadeMat;
          }
        });
        for (const { mesh, chunk } of specialMeshes) {
          const bnd = chunkBounds[chunk];
          const dx = Math.max(bnd.x0 - cx, 0, cx - bnd.x1), dz = Math.max(bnd.z0 - cz, 0, cz - bnd.z1);
          mesh.visible = Math.hypot(dx, dz) < 700;
        }
      }
    },
  };
  // Run one LOD pass from the spawn so both facade shaders exist at load time
  // and get compiled up front instead of hitching mid-drive.
  api.update(0, 0, { position: { x: -316, z: 246 } }, 1);
  return api;
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
