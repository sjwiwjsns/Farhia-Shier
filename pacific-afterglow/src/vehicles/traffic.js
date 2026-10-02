import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { carGeometry, carMaterials, paintMaterial } from './carModel.js';
import { roadsX, roadsZ, LANES, ROAD_HALF, BOUNDS, BUS_STOPS, busStopPos, PIER } from '../world/layout.js';
import { signalState } from '../world/props.js';
import { rand, range, pick, chance } from '../core/rng.js';
import { canvasTexture } from '../core/materials.js';

// ============================================================================
// Traffic: moving AI cars, police, and parked cars along the curbs.
//
// Every vehicle of a type shares one InstancedMesh per part, so the whole
// street population costs a few dozen draw calls. Moving cars stream around
// the player: a car that drifts too far away reappears on a lane nearby,
// out of sight. Parked cars are static records; only the ones closest to the
// player are written into instance slots each refresh.
// ============================================================================

const FLEET = [['sedan', 16], ['suv', 11], ['hatch', 11], ['pickup', 7], ['taxi', 9], ['police', 5]];
const PARK_CAP = { sedan: 26, suv: 20, hatch: 22, pickup: 12, taxi: 0, police: 0 };
const PARK_TYPES = ['sedan', 'sedan', 'suv', 'hatch', 'hatch', 'pickup'];
const COLORS = ['#e9e9e6', '#e9e9e6', '#151719', '#151719', '#9ea3a6', '#5d6265', '#1f3a5f', '#8e1c1c', '#c9b99a', '#2e4a3a', '#6b7d8c', '#3a2f2a', '#7a8f9e', '#b85c2a'];
const PARK_OFFSET = 11.85;
const STREAM_RADIUS = 430;
const PARK_RADIUS = 210;

const tmpM = new THREE.Matrix4(), tmpQ = new THREE.Quaternion(), tmpV = new THREE.Vector3(), tmpS = new THREE.Vector3(1, 1, 1);
const UP = new THREE.Vector3(0, 1, 0), XAXIS = new THREE.Vector3(1, 0, 0);
const wheelM = new THREE.Matrix4(), spinQ = new THREE.Quaternion(), flipQ = new THREE.Quaternion().setFromAxisAngle(UP, Math.PI);
const ZERO = new THREE.Matrix4().makeScale(0, 0, 0);
const scalar = new THREE.Color();

// --- Lane geometry ----------------------------------------------------------
function laneOffsetSign(axis, dir) {
  return axis === 'ns' ? -dir : dir;
}
function headingFor(axis, dir) {
  return axis === 'ns' ? (dir < 0 ? 0 : Math.PI) : (dir > 0 ? -Math.PI / 2 : Math.PI / 2);
}
function forwardFor(axis, dir) {
  return axis === 'ns' ? [0, dir] : [dir, 0];
}
function lanePos(axis, road, dir, lane, s) {
  const off = laneOffsetSign(axis, dir) * LANES[lane];
  return axis === 'ns' ? [road + off, s] : [s, road + off];
}
function wrapAngle(a) {
  return Math.atan2(Math.sin(a), Math.cos(a));
}

// Emissive scaled by instance color: lets headlights and brake lights differ per car.
function perInstanceGlow(mat, key) {
  mat.onBeforeCompile = sh => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n#ifdef USE_INSTANCING_COLOR\ntotalEmissiveRadiance *= vColor;\n#endif');
  };
  mat.customProgramCacheKey = () => key;
  return mat;
}

// Police paint: black lower body, white upper body and roof.
// AI cars draw five parts instead of eight: the small trim pieces are merged into one
// vertex-coloured mesh per car type.
const trafficPartCache = new Map();
function trafficParts(geo) {
  if (trafficPartCache.has(geo)) return trafficPartCache.get(geo);
  const colors = { trim: '#14181a', dark: '#07090a', chrome: '#b9bec2', plate: '#d6d2c4' };
  const pieces = Object.entries(colors).map(([k, hex]) => {
    const g = geo.parts[k].clone();
    const c = new THREE.Color(hex), n = g.attributes.position.count, arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    return g;
  });
  const out = { paint: geo.parts.paint, glass: geo.parts.glass, body: mergeGeometries(pieces), head: geo.parts.head, tail: geo.parts.tail };
  trafficPartCache.set(geo, out);
  return out;
}

function policePaint() {
  const mat = paintMaterial(0xffffff, { metalness: 0.35, roughness: 0.32 });
  mat.onBeforeCompile = sh => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying float vBodyY;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvBodyY = position.y;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vBodyY;')
      .replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb = mix(vec3(0.015), vec3(0.92), smoothstep(0.7, 0.74, vBodyY));');
  };
  mat.customProgramCacheKey = () => 'police-paint';
  return mat;
}

export class Traffic {
  constructor(scene, renderer) {
    this.cars = [];
    this.meshes = [];
    this.types = {};
    this.parked = [];
    this.police = [];
    this.world = null;
    this.peds = [];
    const mats = carMaterials(renderer);
    this.headMat = perInstanceGlow(new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff2d6, emissiveIntensity: 1, roughness: 0.2 }), 'head-inst');
    this.tailMat = perInstanceGlow(new THREE.MeshStandardMaterial({ color: 0x3a0705, emissive: 0xff2010, emissiveIntensity: 1, roughness: 0.3 }), 'tail-inst');
    const taxiSignTex = canvasTexture(renderer, 128, 32, (c, w) => {
      c.fillStyle = '#f7d046';
      c.fillRect(0, 0, w, 32);
      c.fillStyle = '#1a1a1a';
      c.font = '800 24px "Barlow Condensed", Impact, sans-serif';
      c.textAlign = 'center';
      c.fillText('TAXI', w / 2, 25);
    });
    this.taxiSignMat = new THREE.MeshStandardMaterial({ map: taxiSignTex, emissive: 0xffffff, emissiveMap: taxiSignTex, emissiveIntensity: 0.3 });
    this.barMat = perInstanceGlow(new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0xffffff, emissiveIntensity: 1, roughness: 0.3 }), 'lightbar-inst');

    // Trim, black plastics, chrome and plates share one vertex-coloured material on AI cars.
    this.bodyMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, metalness: 0.4 });
    this.parked = this.layoutParking();
    for (const [typeName, count] of FLEET) {
      const geoType = typeName === 'taxi' || typeName === 'police' ? 'sedan' : typeName;
      const geo = carGeometry(geoType);
      const cap = count + (PARK_CAP[typeName] || 0);
      const paint = typeName === 'police' ? policePaint() : paintMaterial(0xffffff, { metalness: 0.45, roughness: 0.38 });
      const slot = { paint, glass: mats.glass, body: this.bodyMat, head: this.headMat, tail: this.tailMat };
      const parts = {};
      for (const [k, g] of Object.entries(trafficParts(geo))) {
        const mesh = new THREE.InstancedMesh(g, slot[k], cap);
        mesh.castShadow = k === 'paint';
        // Glass and trim are lost in a puddle's reflection; paint and lights are not.
        if (k === 'glass' || k === 'body') mesh.layers.set(1);
        mesh.receiveShadow = true;
        mesh.frustumCulled = false;
        mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        for (let i = 0; i < cap; i++) mesh.setMatrixAt(i, ZERO);
        scene.add(mesh);
        parts[k] = mesh;
        this.meshes.push(mesh);
      }
      for (let i = 0; i < cap; i++) {
        parts.paint.setColorAt(i, scalar.set(typeName === 'taxi' ? '#f2c230' : pick(COLORS)));
        parts.tail.setColorAt(i, scalar.setScalar(1));
        parts.head.setColorAt(i, scalar.setScalar(1));
      }
      const tire = new THREE.InstancedMesh(geo.wheel.tire, mats.tire, cap * 4);
      const rim = new THREE.InstancedMesh(geo.wheel.rim, mats.rim, cap * 4);
      for (const w of [tire, rim]) {
        w.frustumCulled = false;
        // Wheels are small: no shadow pass, and left out of the mirror (layer 1).
        w.castShadow = false;
        w.layers.set(1);
        w.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        for (let i = 0; i < cap * 4; i++) w.setMatrixAt(i, ZERO);
        scene.add(w);
        this.meshes.push(w);
      }
      let sign = null, bar = null;
      if (typeName === 'taxi') {
        sign = new THREE.InstancedMesh(new THREE.BoxGeometry(0.62, 0.2, 0.26), this.taxiSignMat, count);
        sign.frustumCulled = false;
        scene.add(sign);
        this.meshes.push(sign);
      }
      if (typeName === 'police') {
        // Two light-bar halves per car; colors flash red and blue.
        bar = new THREE.InstancedMesh(new THREE.BoxGeometry(0.62, 0.16, 0.3), this.barMat, count * 2);
        bar.frustumCulled = false;
        for (let i = 0; i < count * 2; i++) bar.setColorAt(i, scalar.setScalar(0));
        scene.add(bar);
        this.meshes.push(bar);
      }
      const roofY = Math.max(...geo.type.cabin.top.map(k => k[1]));
      const T = { name: typeName, geo, parts, tire, rim, sign, bar, roofY, moving: count, cap };
      this.types[typeName] = T;
      for (let i = 0; i < count; i++) {
        const car = { type: T, slot: i, geo, police: typeName === 'police', mode: 'lane' };
        this.spawnLane(car, -316, 246, 0, 420);
        this.cars.push(car);
        if (car.police) this.police.push(car);
      }
    }

    // Soft contact shadows and night-time headlight pools on the road.
    const blobTex = canvasTexture(renderer, 64, 128, (c, w, h) => {
      const g = c.createRadialGradient(w / 2, h / 2, 4, w / 2, h / 2, h / 2);
      g.addColorStop(0, 'rgba(0,0,0,0.75)');
      g.addColorStop(0.55, 'rgba(0,0,0,0.45)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      c.fillStyle = g;
      c.fillRect(0, 0, w, h);
    });
    const blobGeo = new THREE.PlaneGeometry(2.6, 5.6);
    blobGeo.rotateX(-Math.PI / 2);
    const parkSlots = Object.values(PARK_CAP).reduce((a, b) => a + b, 0);
    this.blobs = new THREE.InstancedMesh(blobGeo, new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1 }), this.cars.length + parkSlots + 1);
    this.blobs.frustumCulled = false;
    this.blobs.renderOrder = 1;
    this.blobs.userData.noAO = true;
    scene.add(this.blobs);
    const poolTex = canvasTexture(renderer, 64, 128, (c, w, h) => {
      const g = c.createRadialGradient(w / 2, h * 0.75, 2, w / 2, h * 0.6, h * 0.6);
      g.addColorStop(0, 'rgba(255,255,255,0.9)');
      g.addColorStop(0.5, 'rgba(255,255,255,0.3)');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      c.fillStyle = g;
      c.fillRect(0, 0, w, h);
    });
    const poolGeo = new THREE.PlaneGeometry(6, 14);
    poolGeo.rotateX(-Math.PI / 2);
    poolGeo.translate(0, 0, -9.5);
    this.poolMat = new THREE.MeshBasicMaterial({ map: poolTex, color: 0xfff0d0, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0, polygonOffset: true, polygonOffsetFactor: -2 });
    this.pools = new THREE.InstancedMesh(poolGeo, this.poolMat, this.cars.length);
    this.pools.frustumCulled = false;
    this.pools.layers.set(1);
    this.pools.userData.noAO = true;
    scene.add(this.pools);
    this.parkTimer = 0;
    this.nearParked = [];
    this.refreshParked(-316, 246);
  }

  // --- Parking --------------------------------------------------------------
  // Cars line both curbs of every block face, leaving room at corners and stops.
  layoutParking() {
    const out = [];
    const stops = BUS_STOPS.map(b => busStopPos(b));
    const segments = (list, max) => {
      const segs = [];
      const ends = [-max, ...list, max];
      for (let i = 0; i < ends.length - 1; i++) segs.push([ends[i] + 27, ends[i + 1] - 27]);
      return segs.filter(([a, b]) => b - a > 8);
    };
    for (const [axis, roads, cross, max] of [['ns', roadsX, roadsZ, 486], ['ew', roadsZ, roadsX, 326]]) {
      for (const road of roads) for (const side of [-1, 1]) {
        if (axis === 'ns' && road === roadsX[0] && side < 0) continue; // beach side of Ocean Drive
        for (const [a, b] of segments(cross, max)) {
          for (let s0 = a + 3.6; s0 < b - 3; s0 += 7.2) {
            if (!chance(0.42)) continue;
            const s = s0 + range(-0.6, 0.6);
            const x = axis === 'ns' ? road + side * PARK_OFFSET : s, z = axis === 'ns' ? s : road + side * PARK_OFFSET;
            if (stops.some(([bx, bz]) => Math.hypot(bx - x, bz - z) < 14)) continue;
            if (Math.abs(z - PIER.z) < 20 && x < -300) continue;
            // Parked facing the direction of traffic on that side.
            const dir = axis === 'ns' ? -side : side;
            out.push({
              parked: true, type: pick(PARK_TYPES), x, z, heading: headingFor(axis, dir) + range(-0.04, 0.04),
              color: pick(COLORS), hit: null, slot: -1,
            });
          }
        }
      }
    }
    return out;
  }

  refreshParked(px, pz) {
    for (const T of Object.values(this.types)) {
      for (let i = T.moving; i < T.cap; i++) {
        for (const mesh of Object.values(T.parts)) mesh.setMatrixAt(i, ZERO);
        for (let k = 0; k < 4; k++) { T.tire.setMatrixAt(i * 4 + k, ZERO); T.rim.setMatrixAt(i * 4 + k, ZERO); }
      }
    }
    for (const p of this.parked) { p.d = Math.hypot(p.x - px, p.z - pz); p.slot = -1; }
    const near = this.parked.filter(p => p.d < PARK_RADIUS).sort((a, b) => a.d - b.d);
    const used = {};
    this.nearParked = [];
    for (const p of near) {
      const T = this.types[p.type];
      const n = used[p.type] || 0;
      if (n >= PARK_CAP[p.type]) continue;
      used[p.type] = n + 1;
      p.slot = T.moving + n;
      T.parts.paint.setColorAt(p.slot, scalar.set(p.color));
      T.parts.head.setColorAt(p.slot, scalar.setScalar(0));
      T.parts.tail.setColorAt(p.slot, scalar.setScalar(0.12));
      this.writeCar(T, p.slot, p.x, p.z, p.heading, 0);
      this.nearParked.push(p);
    }
  }

  writeCar(T, slot, x, z, heading, spin) {
    tmpQ.setFromAxisAngle(UP, heading);
    tmpM.compose(tmpV.set(x, 0.02, z), tmpQ, tmpS);
    for (const mesh of Object.values(T.parts)) mesh.setMatrixAt(slot, tmpM);
    T.geo.wheels.forEach((w, k) => {
      spinQ.setFromAxisAngle(XAXIS, spin * (w.side < 0 ? -1 : 1));
      if (w.side < 0) spinQ.premultiply(flipQ);
      wheelM.compose(tmpV.set(w.x, w.y, w.z), spinQ, tmpS);
      wheelM.premultiply(tmpM);
      T.tire.setMatrixAt(slot * 4 + k, wheelM);
      T.rim.setMatrixAt(slot * 4 + k, wheelM);
    });
    return tmpM;
  }

  // --- Spawning -------------------------------------------------------------
  // Place a car on a random lane within [minD, maxD] of (px, pz), optionally out of view.
  spawnLane(car, px, pz, minD, maxD, cam = null) {
    for (let attempt = 0; attempt < 40; attempt++) {
      const axis = rand() < 0.5 ? 'ns' : 'ew';
      const roads = (axis === 'ns' ? roadsX : roadsZ).filter(r => Math.abs(r - (axis === 'ns' ? px : pz)) < maxD);
      if (!roads.length) continue;
      const road = pick(roads);
      const dir = rand() < 0.5 ? 1 : -1;
      const lane = rand() < 0.5 ? 0 : 1;
      const lim = axis === 'ns' ? 470 : 310;
      const s = THREE.MathUtils.clamp((axis === 'ns' ? pz : px) + range(-maxD, maxD), -lim, lim);
      const [x, z] = lanePos(axis, road, dir, lane, s);
      const d = Math.hypot(x - px, z - pz);
      if (d < minD || d > maxD) continue;
      if ((axis === 'ns' ? roadsZ : roadsX).some(r => Math.abs(r - s) < 24)) continue;
      if (this.cars.some(o => o !== car && o.mode === 'lane' && o.axis === axis && o.road === road && o.dir === dir && o.lane === lane && Math.abs(o.s - s) < 20)) continue;
      if (cam) {
        const vx = x - cam.position.x, vz = z - cam.position.z, len = Math.hypot(vx, vz) || 1;
        const along = (vx * cam.fx + vz * cam.fz) / len;
        if (along > 0.2 && len < 300) continue; // would pop into view
      }
      Object.assign(car, { axis, road, dir, lane, s });
      Object.assign(car, {
        mode: 'lane', cruise: car.police ? range(13, 16) : range(11, 16.5), speed: 9, turn: null, plan: null, decided: null,
        hit: null, offset: null, braking: false, blockedTime: 0, wheelSpin: 0, vx: 0, vz: 0,
      });
      this.place(car);
      return true;
    }
    if (car.axis === undefined) Object.assign(car, { axis: 'ns', road: roadsX[1], dir: 1, lane: 0, s: 0 });
    Object.assign(car, { mode: 'lane', cruise: 12, speed: 0, turn: null, plan: null, hit: null, offset: null, wheelSpin: 0, vx: 0, vz: 0, blockedTime: 0 });
    this.place(car);
    return false;
  }

  place(car) {
    if (car.turn) {
      const t = car.turn;
      const a = t.t * Math.PI / 2;
      const c = Math.cos(a), s = Math.sin(a);
      car.x = t.O[0] + t.u[0] * c + t.v[0] * s;
      car.z = t.O[1] + t.u[1] * c + t.v[1] * s;
      const tx = -t.u[0] * s + t.v[0] * c, tz = -t.u[1] * s + t.v[1] * c;
      car.heading = Math.atan2(-tx, -tz);
    } else {
      [car.x, car.z] = lanePos(car.axis, car.road, car.dir, car.lane, car.s);
      car.heading = headingFor(car.axis, car.dir);
    }
  }

  // --- Lane following -------------------------------------------------------
  nextCross(car) {
    const list = car.axis === 'ns' ? roadsZ : roadsX;
    let best = null;
    for (const r of list) {
      const d = (r - car.s) * car.dir;
      if (d > -1 && (best === null || d < (best - car.s) * car.dir)) best = r;
    }
    return best;
  }

  exitValid(axis, dir, road) {
    const list = axis === 'ns' ? roadsZ : roadsX;
    return dir > 0 ? road < list[list.length - 1] : road > list[0];
  }

  planTurn(car, cross) {
    // Movement directions as compass: N(-z) E(+x) S(+z) W(-x).
    const compass = car.axis === 'ns' ? (car.dir < 0 ? 'N' : 'S') : (car.dir > 0 ? 'E' : 'W');
    const right = { N: 'E', E: 'S', S: 'W', W: 'N' }[compass];
    const left = { N: 'W', W: 'S', S: 'E', E: 'N' }[compass];
    const toAxisDir = c => (c === 'N' ? ['ns', -1] : c === 'S' ? ['ns', 1] : c === 'E' ? ['ew', 1] : ['ew', -1]);
    const valid = c => {
      const [axis, dir] = toAxisDir(c);
      if (axis === car.axis) return this.exitValid(axis, dir, cross);
      return this.exitValid(axis, dir, car.road);
    };
    const options = [];
    if (valid(compass)) options.push(['straight', car.lane === 1 ? 0.6 : 0.72]);
    if (valid(right)) options.push(['right', car.lane === 1 ? 0.4 : 0.08]);
    if (valid(left)) options.push(['left', car.lane === 0 ? 0.28 : 0.06]);
    let r = rand() * options.reduce((a, o) => a + o[1], 0), choice = options[0][0];
    for (const [name, w] of options) { if ((r -= w) <= 0) { choice = name; break; } }
    if (choice === 'straight') return null;
    const [naxis, ndir] = toAxisDir(choice === 'right' ? right : left);
    const nlane = car.lane, nroad = cross;
    // Corner point where the two lane lines meet, rounded off with a quarter circle.
    const inPos = lanePos(car.axis, car.road, car.dir, car.lane, 0);
    const outPos = lanePos(naxis, nroad, ndir, nlane, 0);
    const P = car.axis === 'ns' ? [inPos[0], outPos[1]] : [outPos[0], inPos[1]];
    const din = forwardFor(car.axis, car.dir), dout = forwardFor(naxis, ndir);
    const R = choice === 'right' ? 6.5 : 10.5;
    const A = [P[0] - din[0] * R, P[1] - din[1] * R];
    const B = [P[0] + dout[0] * R, P[1] + dout[1] * R];
    const O = [A[0] + dout[0] * R, A[1] + dout[1] * R];
    return {
      startS: car.axis === 'ns' ? A[1] : A[0],
      O, u: [A[0] - O[0], A[1] - O[1]], v: [B[0] - O[0], B[1] - O[1]], t: 0, len: R * Math.PI / 2,
      next: { axis: naxis, road: nroad, dir: ndir, lane: nlane, s: naxis === 'ns' ? B[1] : B[0] },
    };
  }

  // Snap a free-driving car back onto the nearest lane in its direction of travel.
  rejoinLane(car) {
    const fx = -Math.sin(car.heading), fz = -Math.cos(car.heading);
    const axis = Math.abs(fz) > Math.abs(fx) ? 'ns' : 'ew';
    const dir = axis === 'ns' ? Math.sign(fz) || 1 : Math.sign(fx) || 1;
    const roads = axis === 'ns' ? roadsX : roadsZ;
    const v = axis === 'ns' ? car.x : car.z;
    const road = roads.reduce((a, b) => (Math.abs(b - v) < Math.abs(a - v) ? b : a));
    const off = (v - road) * laneOffsetSign(axis, dir);
    const lane = Math.abs(off - LANES[0]) < Math.abs(off - LANES[1]) ? 0 : 1;
    const s = axis === 'ns' ? car.z : car.x;
    const [lx, lz] = lanePos(axis, road, dir, lane, s);
    Object.assign(car, { mode: 'lane', axis, road, dir, lane, s, turn: null, plan: null, decided: null, hit: null });
    car.offset = { dx: car.x - lx, dz: car.z - lz, dh: wrapAngle(car.heading - headingFor(axis, dir)), t: 1 };
    if (Math.abs(v - road) > ROAD_HALF + 6) this.spawnLane(car, car.x, car.z, 0, 200);
  }

  // --- Simulation -----------------------------------------------------------
  update(dt, time, player, onHonk, camera = null) {
    if (this.frozen) return; // test hook: physics checks on an empty road
    const px = player.x, pz = player.z;
    const cam = camera ? { position: camera.position, fx: 0, fz: 0 } : null;
    if (cam) {
      camera.getWorldDirection(tmpV);
      cam.fx = tmpV.x; cam.fz = tmpV.z;
      const l = Math.hypot(cam.fx, cam.fz) || 1;
      cam.fx /= l; cam.fz /= l;
    }
    for (const car of this.cars) {
      // Streaming: far cars come back on a lane near the player, out of view.
      if (car.mode === 'lane' && Math.hypot(car.x - px, car.z - pz) > STREAM_RADIUS) {
        this.spawnLane(car, px, pz, 140, 380, cam);
        continue;
      }
      if (car.mode === 'chase') { this.chase(car, dt, player); continue; }
      if (car.hit) {
        const h = car.hit;
        car.x += h.vx * dt;
        car.z += h.vz * dt;
        const k = Math.exp(-1.8 * dt);
        h.vx *= k;
        h.vz *= k;
        car.heading += h.spin * dt;
        h.spin *= Math.exp(-2.5 * dt);
        h.t -= dt;
        car.speed = 0;
        this.collideWorld(car);
        if (h.t <= 0) this.rejoinLane(car);
        continue;
      }

      let target = car.cruise;
      const [fx, fz] = car.turn ? [-Math.sin(car.heading), -Math.cos(car.heading)] : forwardFor(car.axis, car.dir);
      if (!car.turn) {
        const cross = this.nextCross(car);
        if (cross !== null) {
          const d = (cross - car.s) * car.dir;
          if (d < 34 && car.decided !== cross) {
            car.decided = cross;
            car.plan = this.planTurn(car, cross);
          }
          const stopDist = d - 20.5;
          const light = signalState(car.axis === 'ns' ? 0 : 1, time);
          if (stopDist > -1 && (light === 0 || (light === 1 && stopDist > 9))) target = Math.min(target, Math.sqrt(Math.max(0, stopDist - 0.5)) * 2.4);
          if (car.plan) target = Math.min(target, car.plan.next.lane === 0 ? 9 : 7.5);
          if (!car.plan && !this.exitValid(car.axis, car.dir, cross)) target = Math.min(target, Math.sqrt(Math.max(0, stopDist)) * 2);
        }
        // Follow the car ahead in our lane.
        for (const o of this.cars) {
          if (o === car || o.mode !== 'lane' || o.turn || o.axis !== car.axis || o.road !== car.road || o.dir !== car.dir || o.lane !== car.lane) continue;
          const gap = (o.s - car.s) * car.dir;
          if (gap > 0 && gap < 45) target = Math.min(target, Math.max(0, gap - 7.5) * 0.9);
        }
      } else {
        target = Math.min(target, 8);
      }
      // Yield to the player and to anyone crossing in front.
      const yieldTo = (x, z, gap, width) => {
        const dx = x - car.x, dz = z - car.z;
        const ahead = dx * fx + dz * fz;
        const lateral = Math.abs(dx * fz - dz * fx);
        if (ahead > 0 && ahead < 32 && lateral < width) { target = Math.min(target, Math.max(0, ahead - gap) * 0.85); return true; }
        return false;
      };
      if (yieldTo(px, pz, 6.5, 2.6)) {
        if (car.speed < 1 && player.kmh < 5) {
          car.blockedTime += dt;
          if (car.blockedTime > 2.5) { car.blockedTime = -4; onHonk?.(car); }
        }
      } else car.blockedTime = Math.max(0, car.blockedTime - dt);
      for (const p of this.peds) yieldTo(p.x, p.z, 5, 2.4);
      for (const o of this.cars) if ((o.mode !== 'lane' || o.hit) && o !== car) yieldTo(o.x, o.z, 7, 2.6);

      const accel = target > car.speed ? 3.2 : 9;
      car.speed += Math.sign(target - car.speed) * Math.min(Math.abs(target - car.speed), accel * dt);
      car.braking = target < car.speed - 0.3 || (car.speed < 0.5 && target < 0.5);

      if (car.turn) {
        car.turn.t += (car.speed * dt) / car.turn.len;
        if (car.turn.t >= 1) {
          Object.assign(car, car.turn.next);
          car.turn = null;
          car.decided = null;
        }
      } else {
        car.s += car.speed * car.dir * dt;
        if (car.plan && (car.s - car.plan.startS) * car.dir >= 0) {
          car.turn = car.plan;
          car.plan = null;
        }
      }
      this.place(car);
      if (car.offset) {
        const o = car.offset;
        o.t -= dt / 1.6;
        if (o.t <= 0) car.offset = null;
        else {
          const e = o.t * o.t;
          car.x += o.dx * e;
          car.z += o.dz * e;
          car.heading += o.dh * e;
        }
      }
      car.vx = fx * car.speed;
      car.vz = fz * car.speed;
      car.wheelSpin -= (car.speed * dt) / car.geo.type.wheelR;
    }
    this.updateParked(dt);
    this.collidePlayer(player);
    // Refresh which parked cars are drawn twice a second, or at once after a jump.
    this.parkTimer -= dt;
    const jumped = Math.hypot(px - (this.lastParkX ?? px), pz - (this.lastParkZ ?? pz)) > 60;
    if (this.parkTimer <= 0 || jumped) {
      this.parkTimer = 0.5;
      this.lastParkX = px;
      this.lastParkZ = pz;
      this.refreshParked(px, pz);
    }
  }

  // Police pursuit: steer at where the player is heading, feel around buildings.
  chase(car, dt, player) {
    const dx = player.x - car.x, dz = player.z - car.z;
    const dist = Math.hypot(dx, dz);
    const lead = Math.min(dist / 35, 1.1);
    const tx = player.x + player.vx * lead, tz = player.z + player.vz * lead;
    let want = Math.atan2(-(tx - car.x), -(tz - car.z));
    // Feelers: if the way ahead is blocked by a building, turn toward the clearer side.
    const look = 10 + car.speed * 0.6;
    const blocked = a => {
      const x = car.x - Math.sin(a) * look, z = car.z - Math.cos(a) * look;
      return (this.world?.colliders || []).some(b => Math.abs(x - b.x) < b.w + 1.8 && Math.abs(z - b.z) < b.d + 1.8);
    };
    if (blocked(want)) {
      for (const off of [0.5, -0.5, 1.0, -1.0, 1.6, -1.6]) if (!blocked(want + off)) { want += off; break; }
    }
    const diff = wrapAngle(want - car.heading);
    const turnRate = 1.9 / (1 + car.speed * 0.012);
    car.heading += THREE.MathUtils.clamp(diff, -turnRate * dt, turnRate * dt);
    const pSpeed = Math.hypot(player.vx, player.vz);
    let target = dist > 60 ? 50 : Math.min(52, pSpeed + 10);
    if (Math.abs(diff) > 0.9) target = Math.min(target, 14);
    if (dist < 9 && pSpeed < 3) target = Math.min(target, 2); // box the player in
    car.speed += THREE.MathUtils.clamp(target - car.speed, -14 * dt, 9 * dt);
    const fx = -Math.sin(car.heading), fz = -Math.cos(car.heading);
    // A little lateral slip so they slide through corners.
    car.vx += (fx * car.speed - car.vx) * Math.min(1, dt * 5);
    car.vz += (fz * car.speed - car.vz) * Math.min(1, dt * 5);
    car.x += car.vx * dt;
    car.z += car.vz * dt;
    this.collideWorld(car);
    car.wheelSpin -= (car.speed * dt) / car.geo.type.wheelR;
    car.braking = target < car.speed - 1;
  }

  collideWorld(car) {
    const cols = this.world?.colliders;
    if (!cols) return;
    for (const b of cols) {
      const ox = b.w + 1.1 - Math.abs(car.x - b.x), oz = b.d + 1.1 - Math.abs(car.z - b.z);
      if (ox <= 0 || oz <= 0) continue;
      if (ox < oz) { car.x += Math.sign(car.x - b.x) * ox; car.vx *= -0.2; } else { car.z += Math.sign(car.z - b.z) * oz; car.vz *= -0.2; }
      car.speed *= 0.6;
    }
    car.x = THREE.MathUtils.clamp(car.x, BOUNDS.minX + 60, BOUNDS.maxX);
    car.z = THREE.MathUtils.clamp(car.z, BOUNDS.minZ, BOUNDS.maxZ);
  }

  startChase(car) {
    if (car.mode === 'chase') return;
    car.mode = 'chase';
    car.turn = null;
    car.plan = null;
    car.hit = null;
    car.offset = null;
    const fx = -Math.sin(car.heading), fz = -Math.cos(car.heading);
    car.vx = fx * car.speed;
    car.vz = fz * car.speed;
  }

  endChase(car) {
    if (car.mode !== 'chase') return;
    this.rejoinLane(car);
    car.speed = Math.min(car.speed, 10);
  }

  // Bring a police car in from somewhere near the player but out of sight.
  dispatch(car, player, camera) {
    const cam = { position: camera.position, fx: 0, fz: 0 };
    camera.getWorldDirection(tmpV);
    const l = Math.hypot(tmpV.x, tmpV.z) || 1;
    cam.fx = tmpV.x / l; cam.fz = tmpV.z / l;
    this.spawnLane(car, player.x, player.z, 110, 240, cam);
    this.startChase(car);
  }

  updateParked(dt) {
    for (const p of this.nearParked) {
      if (!p.hit) continue;
      const h = p.hit;
      p.x += h.vx * dt;
      p.z += h.vz * dt;
      p.heading += h.spin * dt;
      const k = Math.exp(-2.4 * dt);
      h.vx *= k; h.vz *= k; h.spin *= k;
      if (Math.hypot(h.vx, h.vz) < 0.05 && Math.abs(h.spin) < 0.02) p.hit = null;
      this.writeCar(this.types[p.type], p.slot, p.x, p.z, p.heading, 0);
    }
  }

  // Two circles per car on each side. Hits shove AI cars; parked cars slide.
  collidePlayer(player) {
    const pf = [-Math.sin(player.heading), -Math.cos(player.heading)];
    const bodies = [...this.cars, ...this.nearParked];
    this.lastHit = null;
    for (const car of bodies) {
      const dx0 = player.x - car.x, dz0 = player.z - car.z;
      if (dx0 * dx0 + dz0 * dz0 > 64) continue;
      const parked = !!car.parked;
      const cf = [-Math.sin(car.heading), -Math.cos(car.heading)];
      const len = parked ? 4.7 : car.geo.type.length;
      const half = len / 2 - 1.05;
      for (const a of [-1.3, 1.3]) for (const b of [-half, half]) {
        const pxc = player.x + pf[0] * a, pzc = player.z + pf[1] * a;
        const cxc = car.x + cf[0] * b, czc = car.z + cf[1] * b;
        let nx = pxc - cxc, nz = pzc - czc;
        const d = Math.hypot(nx, nz);
        if (d > 2.15 || d < 1e-4) continue;
        nx /= d;
        nz /= d;
        const depth = 2.15 - d;
        player.x += nx * depth * 0.6;
        player.z += nz * depth * 0.6;
        const cvx = parked ? (car.hit ? car.hit.vx : 0) : car.mode === 'chase' ? car.vx : car.hit ? car.hit.vx : cf[0] * car.speed;
        const cvz = parked ? (car.hit ? car.hit.vz : 0) : car.mode === 'chase' ? car.vz : car.hit ? car.hit.vz : cf[1] * car.speed;
        const vn = (player.vx - cvx) * nx + (player.vz - cvz) * nz;
        if (vn < 0) {
          const massRatio = parked ? 0.55 : 0.5;
          const j = -1.3 * vn * massRatio;
          player.vx += j * nx * (parked ? 0.8 : 1);
          player.vz += j * nz * (parked ? 0.8 : 1);
          player.impact = Math.max(player.impact, -vn);
          this.lastHit = { car, parked, police: !!car.police, speed: -vn, x: (pxc + cxc) / 2, z: (pzc + czc) / 2 };
          player.registerHit?.(this.lastHit.x, this.lastHit.z, -vn);
          if (!player.contact || -vn > player.contact.speed) player.contact = { x: this.lastHit.x, z: this.lastHit.z, speed: -vn, nx, nz };
          if (car.mode === 'chase') {
            car.vx -= j * nx;
            car.vz -= j * nz;
          } else {
            if (!car.hit) car.hit = { vx: cvx, vz: cvz, spin: 0, t: 0 };
            car.hit.vx -= j * nx;
            car.hit.vz -= j * nz;
            car.hit.spin += (rand() - 0.5) * Math.min(-vn, 20) * 0.25;
            car.hit.t = 2.8;
            car.turn = null;
            car.plan = null;
          }
        } else if (!car.hit && !parked && car.mode !== 'chase') {
          car.hit = { vx: -nx * 1.5, vz: -nz * 1.5, spin: 0, t: 0.6 };
        }
        car.x -= nx * depth * 0.4;
        car.z -= nz * depth * 0.4;
      }
    }
  }

  // --- Rendering ------------------------------------------------------------
  sync(night, player, time = 0) {
    let blobIndex = 0;
    this.cars.forEach((car, ci) => {
      const T = car.type;
      const m = this.writeCar(T, car.slot, car.x, car.z, car.heading, car.wheelSpin);
      if (T.sign) {
        const m2 = m.clone().multiply(new THREE.Matrix4().makeTranslation(0, T.roofY + 0.1, 0.1));
        T.sign.setMatrixAt(car.slot, m2);
      }
      if (T.bar) {
        // Light bar: alternate red and blue while chasing.
        for (let k = 0; k < 2; k++) {
          const m2 = m.clone().multiply(new THREE.Matrix4().makeTranslation(k ? 0.32 : -0.32, T.roofY + 0.09, 0.1));
          T.bar.setMatrixAt(car.slot * 2 + k, m2);
          const on = car.mode === 'chase' ? (Math.sin(time * 18 + k * Math.PI) > 0 ? 1 : 0) : 0;
          T.bar.setColorAt(car.slot * 2 + k, on ? (k ? scalar.setRGB(0.3, 0.5, 6) : scalar.setRGB(6, 0.2, 0.15)) : scalar.setRGB(0.04, 0.04, 0.05));
        }
      }
      T.parts.tail.setColorAt(car.slot, scalar.setScalar(car.braking ? 4 : 1));
      tmpQ.setFromAxisAngle(UP, car.heading);
      tmpM.compose(tmpV.set(car.x, 0.035, car.z), tmpQ, tmpS);
      this.blobs.setMatrixAt(blobIndex++, tmpM);
      this.pools.setMatrixAt(ci, tmpM);
    });
    for (const p of this.nearParked) {
      tmpQ.setFromAxisAngle(UP, p.heading);
      tmpM.compose(tmpV.set(p.x, 0.035, p.z), tmpQ, tmpS);
      this.blobs.setMatrixAt(blobIndex++, tmpM);
    }
    tmpQ.setFromAxisAngle(UP, player.heading);
    tmpM.compose(tmpV.set(player.x, player.y + 0.035, player.z), tmpQ, tmpS.set(1.05, 1, 1.0));
    tmpS.set(1, 1, 1);
    this.blobs.setMatrixAt(blobIndex++, tmpM);
    this.blobs.count = blobIndex;
    this.blobs.instanceMatrix.needsUpdate = true;
    this.pools.instanceMatrix.needsUpdate = true;
    for (const mesh of this.meshes) {
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    }
    this.headMat.emissiveIntensity = 1 + night * 8;
    this.tailMat.emissiveIntensity = 0.8 + night * 2.2;
    this.taxiSignMat.emissiveIntensity = 0.3 + night * 2.5;
    this.poolMat.opacity = night * 0.55;
  }

  nearest(x, z) {
    let best = Infinity;
    for (const c of this.cars) best = Math.min(best, Math.hypot(c.x - x, c.z - z));
    return best;
  }
}
