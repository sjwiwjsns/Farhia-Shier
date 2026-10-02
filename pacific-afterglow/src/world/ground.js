import * as THREE from 'three';
import { proceduralMaterial } from '../core/materials.js';
import {
  roadsX, roadsZ, ROAD_HALF, SIDEWALK, SLAB_H, blockCentersX, blockCentersZ, BLOCK_SIZE,
  PROMENADE, BEACH_START, BOUNDS,
} from './layout.js';

// Roads are one large plane whose shader paints asphalt, lane markings,
// crosswalks and stop lines analytically, so they are sharp at any distance.
const ROAD_GLSL = /* glsl */`
float paRoadNearest(float v, float start, float maxIndex) {
  return clamp(floor((v - start) / 160.0 + 0.5), 0.0, maxIndex) * 160.0 + start;
}
// Returns paint mask (rgb = color, a = coverage) and fills asphalt wear.
vec4 paRoadMarkings(vec2 p, out float wear, out float onRoad) {
  float dx = p.x - paRoadNearest(p.x, -320.0, 4.0);
  float dz = p.y - paRoadNearest(p.y, -480.0, 6.0);
  float adx = abs(dx), adz = abs(dz);
  bool inX = adx < ${ROAD_HALF.toFixed(1)};
  bool inZ = adz < ${ROAD_HALF.toFixed(1)};
  onRoad = (inX || inZ) ? 1.0 : 0.0;
  vec4 paint = vec4(0.0);
  wear = 0.0;
  // Derivatives first: inside the loop below control flow is non-uniform.
  float fwx = max(fwidth(p.x), 0.002), fwz = max(fwidth(p.y), 0.002);
  // Avenues (constant x) unless we are inside the intersection box.
  for (int axis = 0; axis < 2; axis++) {
    float a = axis == 0 ? dx : dz;   // across the road
    float b = axis == 0 ? dz : dx;   // distance to the crossing road
    float along = axis == 0 ? p.y : p.x;
    float aa = abs(a), ab = abs(b);
    if (aa > ${ROAD_HALF.toFixed(1)} || ab < ${ROAD_HALF.toFixed(1)}) continue;
    float fw = axis == 0 ? fwx : fwz;
    float fwb = axis == 0 ? fwz : fwx;
    // Tire wear: two darker, smoother tracks per lane.
    float lane = min(abs(aa - 3.4), abs(aa - 9.2));
    wear = max(wear, smoothstep(1.4, 0.5, abs(lane - 0.85)) * 0.8);
    float yellow = pa_band(aa, 0.08, 0.22, fw);
    float dash = pa_band(aa, 6.22, 6.38, fw) * step(fract(along / 9.0), 0.36);
    float edge = pa_band(aa, 12.1, 12.3, fw);
    float zebra = 0.0, stopLine = 0.0;
    if (ab < 19.0 && ab > 14.2 && aa < 12.4) zebra = pa_band(fract(a / 1.2), 0.0, 0.55, fw / 1.2);
    float side = axis == 0 ? a * b : -a * b;
    if (side > 0.0 && aa > 0.3 && aa < 12.3) stopLine = pa_band(ab, 19.6, 20.15, fwb);
    vec3 white = vec3(0.82, 0.81, 0.76);
    paint = max(paint, vec4(vec3(0.85, 0.6, 0.16), yellow));
    paint = mix(paint, vec4(white, 1.0), max(dash, max(edge, max(zebra, stopLine))));
  }
  return paint;
}
`;

function makeRoadMaterial() {
  return proceduralMaterial('road', { color: 0xffffff, roughness: 0.85, metalness: 0.0 }, {
    fragmentPars: ROAD_GLSL + `
      float paPaint; float paWear; float paOnRoad;`,
    color: `
      {
        vec2 p = vPaWorld.xz;
        vec4 paint = paRoadMarkings(p, paWear, paOnRoad);
        float big = pa_fbm3(p * 0.035);
        float grain = pa_noise(p * 7.0) * 0.5 + pa_noise(p * 23.0) * 0.5;
        // Repaired patches: random rectangles of fresher or older asphalt.
        vec2 cell = floor(p / vec2(7.0, 11.0));
        float patchSel = pa_hash12(cell);
        vec2 cf = fract(p / vec2(7.0, 11.0));
        float patchMask = step(0.86, patchSel) * step(0.12, cf.x) * step(cf.x, 0.88) * step(0.15, cf.y) * step(cf.y, 0.8);
        vec3 asphalt = vec3(0.118, 0.115, 0.112) * (0.78 + big * 0.45) * (0.85 + grain * 0.3);
        asphalt = mix(asphalt, asphalt * (patchSel > 0.93 ? 0.72 : 1.25), patchMask);
        // Cracks from a ridged noise field.
        float crack = 1.0 - abs(pa_noise(p * 0.9) * 2.0 - 1.0);
        asphalt *= 1.0 - smoothstep(0.93, 0.99, crack) * 0.35 * smoothstep(0.4, 0.7, big);
        asphalt *= 1.0 - paWear * 0.18;
        // Off-road ground beyond the city edges.
        vec3 dirt = mix(vec3(0.17, 0.2, 0.11), vec3(0.24, 0.22, 0.15), big);
        asphalt = mix(dirt, asphalt, paOnRoad);
        float worn = smoothstep(0.25, 0.65, pa_noise(p * 1.7) * 0.6 + big * 0.6);
        paPaint = paint.a * (0.55 + 0.45 * worn) * paOnRoad;
        diffuseColor.rgb = mix(asphalt, paint.rgb, paPaint);
      }`,
    roughness: `roughnessFactor = mix(mix(0.9, 0.62, paWear), 0.55, paPaint);`,
    normal: `
      {
        vec2 p = vPaWorld.xz * 9.0;
        float e = 0.35;
        float n0 = pa_noise(p), nx = pa_noise(p + vec2(e, 0.0)), nz = pa_noise(p + vec2(0.0, e));
        vec3 bump = normalize(vec3((n0 - nx) * 0.22, 1.0, (n0 - nz) * 0.22));
        float fade = 1.0 - smoothstep(12.0, 35.0, length(vPaWorld - cameraPosition));
        bump = normalize(mix(vec3(0.0, 1.0, 0.0), bump, fade * (1.0 - paPaint)));
        normal = normalize((viewMatrix * vec4(bump, 0.0)).xyz);
      }`,
  });
}

// Raised blocks: curb stones, a paved sidewalk ring and the lot surface inside.
function makeSlabMaterial() {
  return proceduralMaterial('slab', { color: 0xffffff, roughness: 0.85, metalness: 0.0 }, {
    vertexPars: 'attribute float aLot; flat varying float vLot; flat varying vec3 vSlabCenter; flat varying vec2 vSlabHalf;',
    vertex: `
      vLot = aLot;
      vSlabCenter = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
      vSlabHalf = vec2(length(instanceMatrix[0].xyz), length(instanceMatrix[2].xyz)) * 0.5;`,
    fragmentPars: 'flat varying float vLot; flat varying vec3 vSlabCenter; flat varying vec2 vSlabHalf; float paSlabRough;',
    color: `
      {
        vec2 p = vPaWorld.xz;
        vec2 l = p - vSlabCenter.xz;
        float edge = min(vSlabHalf.x - abs(l.x), vSlabHalf.y - abs(l.y));
        float big = pa_fbm3(p * 0.08);
        float fwp = max(max(fwidth(p.x), fwidth(p.y)), 1e-4); // before any branch
        vec3 col;
        paSlabRough = 0.88;
        bool top = vPaNormalW.y > 0.5;
        float ring = ${SIDEWALK.toFixed(1)};
        if (!top || edge < 0.38) {
          col = vec3(0.56, 0.55, 0.52) * (0.85 + 0.2 * pa_noise(p * 3.0));
        } else if (edge < ring || vLot < 0.5) {
          // Sidewalk paving: 1.5 m slabs with joints and grime.
          vec2 t = p / 1.5;
          vec2 f = abs(fract(t) - 0.5);
          float fw = fwp / 1.5;
          float joint = 1.0 - smoothstep(0.47 - fw, 0.49, max(f.x, f.y)) * (1.0 - smoothstep(0.3, 0.8, fw * 4.0));
          float tileVar = pa_hash12(floor(t));
          col = vec3(0.47, 0.46, 0.43) * (0.86 + tileVar * 0.14) * (0.8 + big * 0.35);
          col *= mix(0.72, 1.0, joint);
          col *= 1.0 - smoothstep(0.62, 0.9, pa_noise(p * 0.6)) * 0.18;
        } else if (vLot < 1.5) {
          // Grass with clumps and dry patches.
          float clump = pa_fbm(p * 0.5);
          col = mix(vec3(0.07, 0.13, 0.04), vec3(0.17, 0.2, 0.07), clump);
          col = mix(col, vec3(0.3, 0.27, 0.15), smoothstep(0.62, 0.85, pa_noise(p * 0.15)) * 0.6);
          col *= 0.8 + pa_noise(p * 12.0) * 0.4;
          paSlabRough = 0.95;
        } else if (vLot < 2.5) {
          // Parking lot with painted stalls.
          col = vec3(0.12, 0.12, 0.125) * (0.8 + big * 0.4) * (0.85 + pa_noise(p * 9.0) * 0.3);
          float sx = fract((p.x + 0.0) / 3.0);
          float rowZ = abs(fract((p.y) / 14.0) - 0.5) * 14.0;
          float fw = max(fwp / 3.0, 0.002);
          float stall = pa_band(sx, 0.0, 0.04, fw) * step(1.5, rowZ) * step(rowZ, 6.2);
          col = mix(col, vec3(0.78, 0.77, 0.7), stall * 0.85);
          paSlabRough = 0.8;
        } else if (vLot < 3.5) {
          // Boardwalk planks running along the beach.
          float plank = p.x / 0.32;
          float fw = max(fwp / 0.32, 0.002);
          float gap = pa_band(fract(plank), 0.0, 0.08, fw);
          float id = pa_hash12(vec2(floor(plank), floor(p.y / 4.0 + floor(plank) * 0.37)));
          col = mix(vec3(0.33, 0.24, 0.16), vec3(0.45, 0.35, 0.24), id) * (0.8 + pa_noise(vec2(plank * 0.3, p.y * 4.0)) * 0.3);
          col *= 1.0 - gap * 0.6;
          paSlabRough = 0.75;
        } else {
          // Plaza stone.
          vec2 t = p / 3.0;
          float fw = max(fwp / 3.0, 0.002);
          vec2 f = abs(fract(t) - 0.5);
          float joint = 1.0 - smoothstep(0.48 - fw, 0.495, max(f.x, f.y));
          col = vec3(0.6, 0.56, 0.5) * (0.85 + pa_hash12(floor(t)) * 0.15) * mix(0.8, 1.0, joint);
          paSlabRough = 0.7;
        }
        diffuseColor.rgb = col;
      }`,
    roughness: 'roughnessFactor = paSlabRough;',
  });
}

function makeSandMaterial() {
  return proceduralMaterial('sand', { color: 0xffffff, roughness: 0.95 }, {
    fragmentPars: 'float paWet;',
    color: `
      {
        vec2 p = vPaWorld.xz;
        float ripple = sin(p.x * 2.4 + pa_noise(p * 0.4) * 6.0) * 0.5 + 0.5;
        float big = pa_fbm3(p * 0.05);
        vec3 dry = mix(vec3(0.62, 0.52, 0.38), vec3(0.72, 0.62, 0.47), big) * (0.92 + ripple * 0.08);
        dry *= 0.85 + pa_noise(p * 14.0) * 0.25;
        // Wet sand near the waterline, with a wavering edge.
        float wetLine = ${(-405).toFixed(1)} + sin(p.y * 0.05) * 2.0 + pa_noise(p * 0.2) * 4.0;
        paWet = smoothstep(wetLine, wetLine - 7.0, p.x);
        vec3 wet = dry * vec3(0.48, 0.47, 0.48);
        diffuseColor.rgb = mix(dry, wet, paWet);
      }`,
    roughness: 'roughnessFactor = mix(0.95, 0.22, paWet);',
  });
}

function makeTerrainMaterial() {
  return proceduralMaterial('terrain', { color: 0xffffff, roughness: 0.95 }, {
    color: `
      {
        vec2 p = vPaWorld.xz;
        float slope = 1.0 - clamp(vPaNormalW.y, 0.0, 1.0);
        float n = pa_fbm(p * 0.02);
        float d = pa_noise(p * 0.3);
        vec3 grass = mix(vec3(0.13, 0.13, 0.06), vec3(0.25, 0.22, 0.12), n); // dry Californian grass
        vec3 brush = vec3(0.06, 0.09, 0.04) * (0.7 + d * 0.5);                 // chaparral
        vec3 rock = mix(vec3(0.27, 0.24, 0.2), vec3(0.38, 0.34, 0.29), d);
        vec3 col = mix(grass, brush, smoothstep(0.38, 0.55, pa_fbm3(p * 0.06 + 4.0)));
        col = mix(col, rock, smoothstep(0.32, 0.55, slope + (d - 0.5) * 0.25));
        diffuseColor.rgb = col;
      }`,
  });
}

export function terrainHeight(x, z) {
  // Hills ring the east, north and south of the city; the ocean is west.
  const east = Math.max(0, x - 372);
  const north = Math.max(0, -z - 560);
  const south = Math.max(0, z - 560);
  const out = Math.hypot(east, Math.max(north, south) * 0.9);
  if (x < -360) return -40;
  if (out <= 0) return -0.6;
  const n = Math.sin(x * 0.011 + Math.sin(z * 0.006) * 2.0) * 0.5 + Math.sin(z * 0.013 + x * 0.004) * 0.5;
  const ridges = Math.sin(x * 0.031 + z * 0.017) * 5 + Math.sin(z * 0.043 - x * 0.012) * 3.5;
  const rise = 70 * (1 - Math.exp(-out / 170)) + out * 0.1;
  return -0.6 + rise * (0.8 + n * 0.3) + ridges * Math.min(out / 120, 1) + Math.min(out / 30, 1) * 1.5;
}

export function buildGround(scene, renderer) {
  const roadMat = makeRoadMaterial();
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), roadMat);
  ground.rotation.x = -Math.PI / 2;
  const gx0 = BEACH_START - 1, gx1 = 400, gz0 = -620, gz1 = 620;
  ground.scale.set(gx1 - gx0, gz1 - gz0, 1);
  ground.position.set((gx0 + gx1) / 2, 0, (gz0 + gz1) / 2);
  ground.receiveShadow = true;
  scene.add(ground);

  // Blocks and sidewalks as instanced boxes with a per-instance lot type.
  const slabs = [];
  const parks = new Set(['-80,80', '240,400']);
  const parking = new Set(['-240,-400', '80,240']);
  const plazas = new Set(['80,-80', '240,-240']);
  for (const x of blockCentersX) for (const z of blockCentersZ) {
    const k = `${x},${z}`;
    const lot = parks.has(k) ? 1 : parking.has(k) ? 2 : plazas.has(k) ? 4 : 0;
    slabs.push([x, z, BLOCK_SIZE, BLOCK_SIZE, lot]);
  }
  const zLen = gz1 - gz0;
  // Beach promenade boardwalk and the palm verge west of Ocean Drive.
  slabs.push([(PROMENADE.from + PROMENADE.to) / 2, 0, PROMENADE.from - PROMENADE.to, zLen, 3]);
  slabs.push([(PROMENADE.to + BEACH_START) / 2, 0, PROMENADE.to - BEACH_START, zLen, 1]);
  // Outer sidewalks and verges.
  const east = roadsX[roadsX.length - 1] + ROAD_HALF;
  slabs.push([east + SIDEWALK / 2, 0, SIDEWALK, zLen, 0]);
  slabs.push([(east + SIDEWALK + 400) / 2, 0, 400 - east - SIDEWALK, zLen, 1]);
  const north = roadsZ[0] - ROAD_HALF, south = roadsZ[roadsZ.length - 1] + ROAD_HALF;
  for (const [edge, dir] of [[north, -1], [south, 1]]) {
    const w = east - PROMENADE.from;
    const cx = (east + PROMENADE.from) / 2;
    slabs.push([cx, edge + dir * SIDEWALK / 2, w, SIDEWALK, 0]);
    slabs.push([cx, edge + dir * (SIDEWALK + 35), w, 70, 1]);
  }
  const slabGeo = new THREE.BoxGeometry(1, 1, 1);
  const slabMesh = new THREE.InstancedMesh(slabGeo, makeSlabMaterial(), slabs.length);
  const lots = new Float32Array(slabs.length);
  const m = new THREE.Matrix4();
  slabs.forEach(([x, z, w, d, lot], i) => {
    m.compose(new THREE.Vector3(x, SLAB_H / 2 - 0.05, z), new THREE.Quaternion(), new THREE.Vector3(w, SLAB_H + 0.1, d));
    slabMesh.setMatrixAt(i, m);
    lots[i] = lot;
  });
  slabGeo.setAttribute('aLot', new THREE.InstancedBufferAttribute(lots, 1));
  slabMesh.receiveShadow = true;
  scene.add(slabMesh);

  // Beach: sand that slopes under the water.
  const sandGeo = new THREE.PlaneGeometry(1, 1, 24, 1);
  const sand = new THREE.Mesh(sandGeo, makeSandMaterial());
  sand.rotation.x = -Math.PI / 2;
  const sx0 = -470, sx1 = BEACH_START;
  sand.scale.set(sx1 - sx0, 1400, 1);
  sand.position.set((sx0 + sx1) / 2, 0, 0);
  sand.updateMatrixWorld();
  const pos = sandGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const wx = sx0 + (pos.getX(i) + 0.5) * (sx1 - sx0);
    pos.setZ(i, wx >= BEACH_START ? 0 : -0.02 - (BEACH_START - wx) * 0.0105);
  }
  sandGeo.computeVertexNormals();
  sand.receiveShadow = true;
  scene.add(sand);

  // Hills around the city.
  const tGeo = new THREE.PlaneGeometry(2600, 2600, 220, 220);
  tGeo.rotateX(-Math.PI / 2);
  const tp = tGeo.attributes.position;
  for (let i = 0; i < tp.count; i++) {
    const x = tp.getX(i) + 500, z = tp.getZ(i);
    tp.setX(i, x);
    tp.setY(i, terrainHeight(x, z));
  }
  tGeo.computeVertexNormals();
  const terrain = new THREE.Mesh(tGeo, makeTerrainMaterial());
  terrain.receiveShadow = true;
  scene.add(terrain);

  // Concrete barriers along the drivable edge so the invisible wall reads as a real one.
  const barrierGeo = new THREE.BoxGeometry(1, 1, 1);
  const barrierMat = new THREE.MeshStandardMaterial({ color: 0x9a968c, roughness: 0.9 });
  const barriers = [
    [BOUNDS.maxX + 1.5, 0, 1, 1.0, BOUNDS.maxZ - BOUNDS.minZ + 4],
    [(BOUNDS.maxX + PROMENADE.from) / 2, BOUNDS.minZ - 1.5, BOUNDS.maxX - PROMENADE.from, 1.0, 1],
    [(BOUNDS.maxX + PROMENADE.from) / 2, BOUNDS.maxZ + 1.5, BOUNDS.maxX - PROMENADE.from, 1.0, 1],
  ];
  const bar = new THREE.InstancedMesh(barrierGeo, barrierMat, barriers.length);
  barriers.forEach(([x, z, w, h, d], i) => {
    m.compose(new THREE.Vector3(x, h / 2, z), new THREE.Quaternion(), new THREE.Vector3(w, h, d));
    bar.setMatrixAt(i, m);
  });
  bar.castShadow = bar.receiveShadow = true;
  scene.add(bar);

  return { ground, slabMesh, terrain };
}
