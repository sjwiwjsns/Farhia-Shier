// Chunked instanced grass — up to TEN MILLION individual blades (Maximum
// tier), 100x the first-generation system, at a handful of draw calls.
//
// Architecture (v2):
//  · The world around the camera is tiled by an N x N grid of grass CHUNKS.
//    All chunks share ONE tuft geometry and ONE material; each frame every
//    chunk snaps to the grid cell nearest the camera (a clipmap), so grass
//    coverage follows you across the entire 45 km world with zero re-uploads.
//  · Each chunk gets a proper local bounding sphere, so three.js frustum-culls
//    off-screen chunks — the trick that makes multi-million-blade counts
//    affordable: typically only ~35-45% of blades are vertex-processed.
//  · One INSTANCE is a whole TUFT of 8-25 blades (baked into the shared
//    geometry with per-vertex flex/phase), not a single blade — so 10M blades
//    need only 400k instances.
//  · A 1024² pavement mask (rasterized from the airport's pavement registry)
//    zero-scales any tuft over runways/taxiways/aprons, sampled per instance
//    in the vertex shader using true world coordinates.
//  · Wind is LIVE: the same WindField that rocks the aircraft drives sway
//    direction, strength and a travelling gust wave; the player's jet blast
//    flattens blades in a decaying cone behind the engines.
import * as THREE from 'three';
import { mulberry32, hashString } from '../core/math.js';

const MASK_SPAN = 3600; // mask covers world ±3600 m around the field centre

const VERT = /* glsl */`
attribute vec2 aOffset;   // tuft origin within the chunk (x, z)
attribute vec4 aData;     // x: yaw, y: scale, z: tint, w: phase
attribute float aFlex;    // per-vertex flexibility (0 root .. 1 tip, squared)
attribute float aPhase;   // per-blade phase within the tuft
uniform float uTime;
uniform float uChunk;     // chunk size (m)
uniform float uFadeStart; // camera-distance fade of the whole field
uniform float uFadeEnd;
uniform float uSpan;      // pavement mask world half-span
uniform sampler2D uMask;
uniform vec3 uWindDir;    // live wind direction (unit, horizontal)
uniform float uWindStr;   // live sway strength
uniform float uGust;      // 0..1 gustiness right now (drives extra bend)
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
  float yaw = aData.x, scl = aData.y, tint = aData.z, phase = aData.w + aPhase;
  vTint = tint;
  float c = cos(yaw), s = sin(yaw);
  // rotate the baked tuft-local vertex around the tuft origin, then place it
  vec3 pl = vec3(position.x * c + position.z * s, position.y, -position.x * s + position.z * c) * scl;
  vec3 chunkLocal = vec3(aOffset.x, 0.0, aOffset.y);
  vec4 baseW4 = modelMatrix * vec4(chunkLocal, 1.0);
  vec3 baseW = baseW4.xyz;

  // pavement mask: white = paved -> no grass
  vec2 maskUV = (baseW.xz + uSpan) / (2.0 * uSpan);
  float paved = texture2D(uMask, clamp(maskUV, 0.0, 1.0)).r;
  float alive = 1.0 - step(0.5, paved);

  // whole-field distance fade (chunks beyond the grid edge don't exist)
  float dist = distance(baseW.xz, cameraPosition.xz);
  alive *= 1.0 - smoothstep(uFadeStart, uFadeEnd, dist);

  // live wind: two-octave sway + a travelling gust wave sweeping the field
  float wgt = aFlex;
  float sway = sin(uTime * 2.1 + phase + baseW.x * 0.09) * 0.6
             + sin(uTime * 4.3 + phase * 2.7 + baseW.z * 0.11) * 0.25;
  float gustWave = sin(uTime * 1.4 - dot(baseW.xz, uWindDir.xz) * 0.045 + phase * 0.3);
  float bend = (0.45 + 0.55 * sway) * uWindStr + max(gustWave, 0.0) * uGust * 0.9;
  vec3 disp = uWindDir * bend * wgt;

  // jet blast cone
  if (uBlastStr > 0.001) {
    vec3 toB = baseW - uBlastPos;
    float along = dot(toB, uBlastDir);
    if (along > 0.0 && along < uBlastLen) {
      vec3 radV = toB - uBlastDir * along;
      float r2 = dot(radV, radV);
      float sigma = 220.0 + along * along * 0.28;
      float gg = exp(-r2 / sigma) * (1.0 - along / uBlastLen);
      float flutter = 0.75 + 0.35 * sin(uTime * 26.0 + phase * 7.0);
      vec3 outw = radV * inversesqrt(r2 + 0.05);
      disp += (uBlastDir + outw * 0.7 - vec3(0.0, 0.45, 0.0)) * (uBlastStr * gg * flutter) * wgt;
    }
  }

  vec3 worldPos = baseW + pl * alive + disp * (scl * alive);
  vShade = 0.52 + 0.48 * min(aFlex * 1.6, 1.0);
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
  tex.flipY = false;
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  return tex;
}

// Shared tuft geometry: `blades` blades (5 verts / 3 tris each) scattered in
// a ~1.5 m clump, with per-vertex flex weight and per-blade phase baked in.
function buildTuftGeometry(blades, rng, desert) {
  const pos = [], flex = [], phase = [], idx = [];
  let vo = 0;
  for (let b = 0; b < blades; b++) {
    const a = rng() * Math.PI * 2;
    const r = Math.pow(rng(), 0.6) * 0.85;
    const bx = Math.sin(a) * r, bz = Math.cos(a) * r;
    const h = (0.30 + rng() * 0.45) * (desert ? 0.75 : 1);
    const w = 0.045 * (0.75 + rng() * 0.6);
    const yawB = rng() * Math.PI * 2;
    const cb = Math.cos(yawB), sb = Math.sin(yawB);
    const ph = rng() * Math.PI * 2;
    // 5 verts: two roots, two mids, one tip — in blade-local x/y then rotated
    const verts = [
      [-w, 0], [w, 0], [-w * 0.64, h * 0.55], [w * 0.64, h * 0.55], [0, h * 1.05]
    ];
    for (const [vx, vy] of verts) {
      pos.push(bx + vx * cb, vy, bz - vx * sb);
      flex.push(Math.pow(vy / (h * 1.05), 2));
      phase.push(ph);
    }
    idx.push(vo, vo + 1, vo + 2, vo + 1, vo + 3, vo + 2, vo + 2, vo + 3, vo + 4);
    vo += 5;
  }
  const geo = new THREE.InstancedBufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('aFlex', new THREE.Float32BufferAttribute(flex, 1));
  geo.setAttribute('aPhase', new THREE.Float32BufferAttribute(phase, 1));
  geo.setIndex(idx);
  return geo;
}

export function createGrass(airport, tier, world, wind) {
  const cfg = tier.grass;
  if (!cfg || !cfg.perChunk) return { meshes: [], group: new THREE.Group(), count: 0, update() {}, dispose() {} };

  const rng = mulberry32(hashString(airport.iata) ^ 0x51f15eed);
  const tags = airport.scenery || [];
  const desert = tags.includes('desert');
  const tropical = tags.includes('tropical') || tags.includes('island');
  const { chunk: S, grid: N, perChunk, tuft } = cfg;

  // Shared geometry: one tuft template + per-instance tuft placements.
  const template = buildTuftGeometry(tuft, rng, desert);
  const offsets = new Float32Array(perChunk * 2);
  const data = new Float32Array(perChunk * 4);
  for (let i = 0; i < perChunk; i++) {
    offsets[i * 2] = rng() * S;
    offsets[i * 2 + 1] = rng() * S;
    data[i * 4] = rng() * Math.PI * 2;
    data[i * 4 + 1] = 0.7 + rng() * 0.65;    // tuft scale
    data[i * 4 + 2] = rng();                  // tint
    data[i * 4 + 3] = rng() * Math.PI * 2;    // phase
  }
  template.setAttribute('aOffset', new THREE.InstancedBufferAttribute(offsets, 2));
  template.setAttribute('aData', new THREE.InstancedBufferAttribute(data, 4));
  template.instanceCount = perChunk;
  // local bounds: chunk footprint + sway headroom -> proper per-chunk culling
  template.boundingSphere = new THREE.Sphere(new THREE.Vector3(S / 2, 0.6, S / 2), S * 0.75);

  const fieldHalf = (N * S) / 2;
  const uniforms = {
    uTime: { value: 0 },
    uChunk: { value: S },
    uFadeStart: { value: fieldHalf * 0.62 },
    uFadeEnd: { value: fieldHalf * 0.94 },
    uSpan: { value: MASK_SPAN },
    uMask: { value: buildPavementMask(world.pavement) },
    uWindDir: { value: new THREE.Vector3(0.7, 0, -0.7) },
    uWindStr: { value: 0.3 },
    uGust: { value: 0 },
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

  const group = new THREE.Group();
  const meshes = [];
  for (let i = 0; i < N * N; i++) {
    const mesh = new THREE.Mesh(template, material);
    group.add(mesh);
    meshes.push(mesh);
  }

  return {
    group,
    meshes,
    count: N * N * perChunk * tuft,
    update(dt, time, blast, cameraPos, windNow) {
      uniforms.uTime.value = time;
      if (windNow) {
        uniforms.uWindDir.value.copy(windNow.dir);
        uniforms.uWindStr.value = windNow.sway;
        uniforms.uGust.value = windNow.gust;
      }
      if (blast) {
        uniforms.uBlastPos.value.copy(blast.pos);
        uniforms.uBlastDir.value.copy(blast.dir);
        uniforms.uBlastLen.value = blast.len;
        uniforms.uBlastStr.value = 2.4 * blast.n1 * blast.n1;
      } else {
        uniforms.uBlastStr.value = 0;
      }
      // clipmap: snap the N x N chunk grid around the camera
      if (cameraPos) {
        const ci = Math.floor(cameraPos.x / S), cj = Math.floor(cameraPos.z / S);
        let m = 0;
        const h = Math.floor(N / 2);
        for (let a = -h; a < N - h; a++) {
          for (let b = -h; b < N - h; b++) {
            meshes[m++].position.set((ci + a) * S, 0, (cj + b) * S);
          }
        }
      }
    },
    dispose() {
      template.dispose();
      uniforms.uMask.value.dispose();
      material.dispose();
    }
  };
}
