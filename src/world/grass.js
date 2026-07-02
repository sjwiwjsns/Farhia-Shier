// Instanced grass: tens of thousands of individual blades in ONE draw call.
//
// Blades live in a wrap-around tile that follows the camera (toroidal modulo
// in the vertex shader), so the full blade budget always forms a dense carpet
// around the player instead of evaporating over km² of airfield. A pavement
// mask texture — rasterized from the airport's pavement registry — is sampled
// per blade (vertex texture fetch) and zero-scales anything that would grow
// through runways, taxiways, aprons or slabs.
//
// Each blade is 5 vertices / 3 triangles with per-instance yaw/height/tint/
// phase. The shader animates two-octave wind sway biased along the ambient
// wind and bends blades away from the player's jet blast cone.
import * as THREE from 'three';
import { mulberry32, hashString } from '../core/math.js';

const MASK_SPAN = 3600; // mask covers world ±3600 m around the field centre

const VERT = /* glsl */`
attribute vec3 aOffset;   // blade offset within the wrap tile (x, 0, z)
attribute vec4 aData;     // x: yaw, y: height, z: tint, w: sway phase
uniform float uTime;
uniform vec3 uAnchor;     // tile centre (follows the camera)
uniform float uHalf;      // tile half-size
uniform float uSpan;      // pavement mask world half-span
uniform sampler2D uMask;
uniform vec3 uWindDir;
uniform float uWindStr;
uniform vec3 uBlastPos;
uniform vec3 uBlastDir;
uniform float uBlastLen;
uniform float uBlastStr;
varying float vTint;
varying float vShade;
#include <common>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
void main() {
  float yaw = aData.x, h = aData.y, tint = aData.z, phase = aData.w;
  vTint = tint;

  // toroidal wrap: keep this blade inside the tile centred on the anchor
  vec2 wrapped = mod(aOffset.xz - uAnchor.xz + uHalf, 2.0 * uHalf) - uHalf + uAnchor.xz;

  // pavement mask: white = paved, scale blade to zero there
  vec2 maskUV = (wrapped + uSpan) / (2.0 * uSpan);
  float paved = texture2D(uMask, clamp(maskUV, 0.0, 1.0)).r;
  float alive = 1.0 - step(0.5, paved);

  // fade blades slightly approaching the wrap boundary (hides re-tiling)
  vec2 rel = wrapped - uAnchor.xz;
  float edge = max(abs(rel.x), abs(rel.y)) / uHalf;
  alive *= 1.0 - smoothstep(0.82, 1.0, edge);

  float wsc = 0.085 * (0.7 + tint * 0.6);
  float c = cos(yaw), s = sin(yaw);
  vec3 pl = vec3(position.x * wsc, position.y * h * alive, 0.0);
  vec3 pr = vec3(pl.x * c, pl.y, -pl.x * s);
  vec3 base = vec3(wrapped.x, 0.0, wrapped.y);

  // flexibility grows quadratically toward the tip
  float wgt = position.y * position.y;
  float sway = sin(uTime * 2.1 + phase) * 0.6 + sin(uTime * 4.3 + phase * 2.7) * 0.25;
  vec3 disp = uWindDir * ((0.45 + 0.55 * sway) * uWindStr) * wgt;

  // jet blast: cone behind the engines flattens blades outward + downstream
  if (uBlastStr > 0.001) {
    vec3 toB = base - uBlastPos;
    float along = dot(toB, uBlastDir);
    if (along > 0.0 && along < uBlastLen) {
      vec3 radV = toB - uBlastDir * along;
      float r2 = dot(radV, radV);
      float sigma = 220.0 + along * along * 0.28;
      float g = exp(-r2 / sigma) * (1.0 - along / uBlastLen);
      float flutter = 0.75 + 0.35 * sin(uTime * 26.0 + phase * 7.0);
      vec3 outw = radV * inversesqrt(r2 + 0.05);
      disp += (uBlastDir + outw * 0.7 - vec3(0.0, 0.45, 0.0)) * (uBlastStr * g * flutter) * wgt;
    }
  }

  vec3 worldPos = base + pr + disp * (h * alive);
  vShade = 0.55 + 0.45 * min(position.y, 1.0);
  vec4 mvPosition = viewMatrix * vec4(worldPos, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <logdepthbuf_vertex>
  #ifdef USE_FOG
    vFogDepth = -mvPosition.z;
  #endif
}`;

const FRAG = /* glsl */`
uniform vec3 uColorA;
uniform vec3 uColorB;
varying float vTint;
varying float vShade;
#include <common>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
void main() {
  #include <logdepthbuf_fragment>
  vec3 col = mix(uColorA, uColorB, vTint) * vShade;
  gl_FragColor = vec4(col, 1.0);
  #include <fog_fragment>
}`;

// Rasterize the pavement registry into a mask texture (white = paved).
function buildPavementMask(pavement) {
  const N = 1024;
  const cv = document.createElement('canvas');
  cv.width = cv.height = N;
  const g = cv.getContext('2d');
  const k = N / (2 * MASK_SPAN);
  g.fillStyle = '#000';
  g.fillRect(0, 0, N, N);
  g.fillStyle = '#fff';
  for (const c of pavement.circles) {
    g.beginPath();
    g.arc((c.x + MASK_SPAN) * k, (c.z + MASK_SPAN) * k, c.r * k, 0, Math.PI * 2);
    g.fill();
  }
  for (const r of pavement.rects) {
    g.save();
    g.translate((r.cx + MASK_SPAN) * k, (r.cz + MASK_SPAN) * k);
    g.rotate(Math.atan2(r.dirZ, r.dirX));
    g.fillRect(-r.halfL * k, -r.halfW * k, 2 * r.halfL * k, 2 * r.halfW * k);
    g.restore();
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.flipY = false; // canvas row 0 == v 0 == world z = -MASK_SPAN
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  return tex;
}

export function createGrass(airport, tier, world, wind) {
  const count = tier.grass | 0;
  if (!count) return { mesh: null, count: 0, update() {}, dispose() {} };

  const rng = mulberry32(hashString(airport.iata) ^ 0x9e3779b9);
  const tags = airport.scenery || [];
  const desert = tags.includes('desert');
  const tropical = tags.includes('tropical') || tags.includes('island');
  const half = { 12000: 150, 30000: 190, 60000: 230, 100000: 265 }[count] || Math.sqrt(count) * 0.85;

  // Blade: 5 verts, 3 tris. x = width axis (±0.5), y = 0..1.05 normalized height.
  const geo = new THREE.InstancedBufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute([
    -0.5, 0, 0, 0.5, 0, 0, -0.32, 0.55, 0, 0.32, 0.55, 0, 0, 1.05, 0
  ], 3));
  geo.setIndex([0, 1, 2, 1, 3, 2, 2, 3, 4]);

  // Blades grow in small tufts inside the wrap tile — clumps read as grass
  // both up close and from the air.
  const offsets = new Float32Array(count * 3);
  const data = new Float32Array(count * 4);
  let placed = 0;
  while (placed < count) {
    const cx = (rng() * 2 - 1) * half;
    const cz = (rng() * 2 - 1) * half;
    const tuft = 14 + ((rng() * 14) | 0);
    const tuftTint = rng() * 0.5;
    for (let b = 0; b < tuft && placed < count; b++) {
      const a = rng() * Math.PI * 2;
      const r = Math.pow(rng(), 0.6) * 1.5;
      offsets[placed * 3] = cx + Math.sin(a) * r;
      offsets[placed * 3 + 1] = 0;
      offsets[placed * 3 + 2] = cz + Math.cos(a) * r;
      data[placed * 4] = rng() * Math.PI * 2;
      data[placed * 4 + 1] = (0.32 + rng() * 0.45) * (desert ? 0.75 : 1);
      data[placed * 4 + 2] = tuftTint + rng() * 0.5;
      data[placed * 4 + 3] = rng() * Math.PI * 2;
      placed++;
    }
  }
  geo.setAttribute('aOffset', new THREE.InstancedBufferAttribute(offsets, 3));
  geo.setAttribute('aData', new THREE.InstancedBufferAttribute(data, 4));
  geo.instanceCount = placed;

  const windDir = wind && wind.lengthSq() > 1e-6 ? wind.clone().normalize() : new THREE.Vector3(0.6, 0, -0.4);
  const windStr = 0.18 + (wind ? wind.length() : 3) * 0.055;
  const uniforms = {
    uTime: { value: 0 },
    uAnchor: { value: new THREE.Vector3() },
    uHalf: { value: half },
    uSpan: { value: MASK_SPAN },
    uMask: { value: buildPavementMask(world.pavement) },
    uWindDir: { value: windDir },
    uWindStr: { value: windStr },
    uBlastPos: { value: new THREE.Vector3(0, -1000, 0) },
    uBlastDir: { value: new THREE.Vector3(0, 0, 1) },
    uBlastLen: { value: 0 },
    uBlastStr: { value: 0 },
    uColorA: { value: new THREE.Color(desert ? '#8f8a52' : tropical ? '#48733a' : '#55743d') },
    uColorB: { value: new THREE.Color(desert ? '#b5aa6e' : tropical ? '#7ca24d' : '#8f9d55') },
    fogColor: { value: new THREE.Color('#cfd8dd') },
    fogNear: { value: 1 },
    fogFar: { value: 20000 }
  };
  const material = new THREE.ShaderMaterial({
    uniforms, vertexShader: VERT, fragmentShader: FRAG,
    side: THREE.DoubleSide, fog: true
  });
  const mesh = new THREE.Mesh(geo, material);
  mesh.frustumCulled = false; // tile follows the camera; bounds are dynamic

  return {
    mesh,
    count: placed,
    update(dt, time, blast, anchorPos) {
      uniforms.uTime.value = time;
      if (anchorPos) uniforms.uAnchor.value.set(anchorPos.x, 0, anchorPos.z);
      if (blast) {
        uniforms.uBlastPos.value.copy(blast.pos);
        uniforms.uBlastDir.value.copy(blast.dir);
        uniforms.uBlastLen.value = blast.len;
        uniforms.uBlastStr.value = 2.4 * blast.n1 * blast.n1;
      } else {
        uniforms.uBlastStr.value = 0;
      }
    },
    dispose() {
      geo.dispose();
      uniforms.uMask.value.dispose();
      material.dispose();
    }
  };
}
