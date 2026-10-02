import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { blockCentersX, blockCentersZ, SLAB_H } from './layout.js';
import { signalState } from './props.js';
import { rand, range, pick, chance } from '../core/rng.js';

// Pedestrians walk a loop around their block's sidewalk, wait for the lights
// and cross at the zebra crossings, and jump clear of cars coming at them.
// One instanced mesh draws them all; legs and arms swing in the vertex shader.

const RING = 62.5; // sidewalk path, measured from the block center
const SIDE = RING * 2;
const PERIM = SIDE * 4;
const COUNT = 140;

const SKIN = ['#f1c7a5', '#e0ac85', '#c68b62', '#a26a45', '#7a4b2f', '#5a3824'];
const SHIRTS = ['#e9e6dd', '#20242a', '#c23b2e', '#2d5d8a', '#f2c14e', '#3f7a52', '#7a4a8c', '#e07a4a', '#9fb3c4', '#d4d0c4', '#1f3b5c', '#a83c62'];
const PANTS = ['#26303d', '#1b1d20', '#5c6b7a', '#c9b79a', '#3b4652', '#6f5b45', '#2f3b2c', '#e5e1d6'];

// --- Model ----------------------------------------------------------------
// part: 0 body, 1/2 left/right leg, 3/4 left/right arm. region: 0 skin,
// 1 shirt, 2 pants, 3 shoes, 4 hair. The figure faces local -Z.
function pedGeometry() {
  const parts = [];
  const add = (g, x, y, z, part, region) => {
    g.translate(x, y, z);
    const n = g.index ? g.toNonIndexed() : g;
    const count = n.attributes.position.count;
    n.setAttribute('aPart', new THREE.Float32BufferAttribute(new Float32Array(count).fill(part), 1));
    n.setAttribute('aRegion', new THREE.Float32BufferAttribute(new Float32Array(count).fill(region), 1));
    if (n.attributes.uv) n.deleteAttribute('uv');
    parts.push(n);
  };
  for (const [side, part] of [[-1, 1], [1, 2]]) {
    add(new THREE.BoxGeometry(0.15, 0.82, 0.17), side * 0.1, 0.49, 0, part, 2);
    add(new THREE.BoxGeometry(0.16, 0.09, 0.28), side * 0.1, 0.045, -0.05, part, 3);
  }
  add(new THREE.BoxGeometry(0.36, 0.2, 0.21), 0, 0.96, 0, 0, 2);
  add(new THREE.BoxGeometry(0.42, 0.56, 0.23), 0, 1.33, 0, 0, 1);
  add(new THREE.CylinderGeometry(0.05, 0.055, 0.1, 8), 0, 1.65, 0, 0, 0);
  add(new THREE.SphereGeometry(0.115, 12, 10), 0, 1.79, -0.01, 0, 0);
  add(new THREE.SphereGeometry(0.122, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), 0, 1.81, 0.012, 0, 4);
  for (const [side, part] of [[-1, 3], [1, 4]]) {
    add(new THREE.BoxGeometry(0.1, 0.34, 0.12), side * 0.27, 1.43, 0, part, 1);
    add(new THREE.BoxGeometry(0.085, 0.3, 0.1), side * 0.275, 1.11, 0, part, 0);
  }
  return mergeGeometries(parts);
}

const POSE_GLSL = /* glsl */`
attribute float aPart;
attribute float aRegion;
attribute vec4 aWalk;  // phase, swing amount, forward lean, fall angle
mat3 pedRotX(float a) { float c = cos(a), s = sin(a); return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c); }
mat3 pedLimb; vec3 pedPivot; mat3 pedBody;
void pedPose() {
  float swing = sin(aWalk.x) * aWalk.y;
  float ang = 0.0;
  pedPivot = vec3(0.0, 0.9, 0.0);
  if (aPart > 0.5 && aPart < 2.5) ang = aPart < 1.5 ? swing * 0.65 : -swing * 0.65;
  else if (aPart > 2.5) { ang = aPart < 3.5 ? -swing * 0.55 : swing * 0.55; pedPivot = vec3(0.0, 1.58, 0.0); }
  pedLimb = pedRotX(ang);
  pedBody = pedRotX(-aWalk.w) * pedRotX(-aWalk.z);
}
vec3 pedTransform(vec3 p) {
  p = pedLimb * (p - pedPivot) + pedPivot;
  p.y += abs(sin(aWalk.x)) * 0.035 * aWalk.y;
  return pedBody * p;
}`;

function pedMaterial() {
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.82 });
  mat.onBeforeCompile = sh => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>\n${POSE_GLSL}\nattribute vec3 aShirt; attribute vec3 aPants; attribute vec4 aSkin; varying vec3 vPedCol;`)
      .replace('#include <beginnormal_vertex>', '#include <beginnormal_vertex>\npedPose();\nobjectNormal = pedBody * (pedLimb * objectNormal);')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        transformed = pedTransform(transformed);
        vec3 hair = mix(vec3(0.05, 0.035, 0.02), vec3(0.55, 0.42, 0.22), aSkin.w);
        vPedCol = aRegion < 0.5 ? aSkin.rgb : aRegion < 1.5 ? aShirt : aRegion < 2.5 ? aPants : aRegion < 3.5 ? vec3(0.06) : hair;`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vPedCol;')
      .replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb = vPedCol;');
  };
  mat.customProgramCacheKey = () => 'pedestrian';
  const depth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
  depth.onBeforeCompile = sh => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>\n${POSE_GLSL}`)
      .replace('#include <begin_vertex>', '#include <begin_vertex>\npedPose();\ntransformed = pedTransform(transformed);');
  };
  depth.customProgramCacheKey = () => 'pedestrian-depth';
  return { mat, depth };
}

// --- Paths ----------------------------------------------------------------
function ringPoint(cx, cz, t, out) {
  const tt = ((t % PERIM) + PERIM) % PERIM;
  const side = Math.floor(tt / SIDE), f = tt - side * SIDE;
  // 0: north edge going +x, 1: east edge +z, 2: south edge -x, 3: west edge -z
  if (side === 0) { out.x = cx - RING + f; out.z = cz - RING; out.dx = 1; out.dz = 0; }
  else if (side === 1) { out.x = cx + RING; out.z = cz - RING + f; out.dx = 0; out.dz = 1; }
  else if (side === 2) { out.x = cx + RING - f; out.z = cz + RING; out.dx = -1; out.dz = 0; }
  else { out.x = cx - RING; out.z = cz + RING - f; out.dx = 0; out.dz = -1; }
  return out;
}
const cornerT = k => k * SIDE; // corner k: 0 NW, 1 NE, 2 SE, 3 SW
const cornerSign = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
function cornerIndex(sx, sz) { return cornerSign.findIndex(([a, b]) => a === sx && b === sz); }

export class Pedestrians {
  constructor(scene) {
    const { mat, depth } = pedMaterial();
    const geo = pedGeometry();
    this.aWalk = new THREE.InstancedBufferAttribute(new Float32Array(COUNT * 4), 4).setUsage(THREE.DynamicDrawUsage);
    const shirt = new Float32Array(COUNT * 3), pants = new Float32Array(COUNT * 3), skin = new Float32Array(COUNT * 4);
    const c = new THREE.Color();
    for (let i = 0; i < COUNT; i++) {
      shirt.set(c.set(pick(SHIRTS)).toArray(), i * 3);
      pants.set(c.set(pick(PANTS)).toArray(), i * 3);
      skin.set([...c.set(pick(SKIN)).toArray(), rand() < 0.2 ? 1 : rand() * 0.4], i * 4);
    }
    geo.setAttribute('aWalk', this.aWalk);
    geo.setAttribute('aShirt', new THREE.InstancedBufferAttribute(shirt, 3));
    geo.setAttribute('aPants', new THREE.InstancedBufferAttribute(pants, 3));
    geo.setAttribute('aSkin', new THREE.InstancedBufferAttribute(skin, 4));
    this.mesh = new THREE.InstancedMesh(geo, mat, COUNT);
    this.mesh.customDepthMaterial = depth;
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.frustumCulled = false;
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.name = 'pedestrians';
    scene.add(this.mesh);
    this.peds = [];
    this.events = [];
    this.onRoad = [];
    this.tmp = { x: 0, z: 0, dx: 0, dz: 0 };
    this.m = new THREE.Matrix4();
    this.q = new THREE.Quaternion();
    this.e = new THREE.Euler(0, 0, 0, 'YXZ');
    for (let i = 0; i < COUNT; i++) {
      const p = { i, scale: range(0.9, 1.08) };
      this.place(p, -316, 246, true);
      this.peds.push(p);
    }
  }

  // Put a pedestrian somewhere on a block near (px, pz).
  place(p, px, pz, anywhere = false) {
    const blocks = [];
    for (const cx of blockCentersX) for (const cz of blockCentersZ) {
      const d = Math.hypot(cx - px, cz - pz);
      if (d < (anywhere ? 330 : 300)) blocks.push([cx, cz]);
    }
    const [cx, cz] = blocks.length ? pick(blocks) : [blockCentersX[0], blockCentersZ[3]];
    Object.assign(p, {
      cx, cz, t: rand() * PERIM, dir: chance(0.5) ? 1 : -1, speed: range(1.05, 1.55),
      lateral: range(-0.9, 0.9), state: chance(0.12) ? 'idle' : 'walk', timer: range(3, 9),
      phase: rand() * 6, amp: 0, fall: 0, lean: 0, vx: 0, vz: 0, cross: null, x: 0, z: 0, heading: 0,
    });
    this.pathPoint(p);
    p.x = p.px;
    p.z = p.pz;
  }

  pathPoint(p) {
    const r = ringPoint(p.cx, p.cz, p.t, this.tmp);
    // Lateral offset toward the curb is the outward normal of the ring edge.
    const ox = r.dz, oz = -r.dx;
    p.px = r.x + ox * p.lateral;
    p.pz = r.z + oz * p.lateral;
    p.pdx = r.dx * p.dir;
    p.pdz = r.dz * p.dir;
  }

  // At a corner, maybe cross to the next block when the light is red for that road.
  tryCross(p, corner, time) {
    const [sx, sz] = cornerSign[corner];
    const options = [];
    const nx = p.cx + sx * 160, nz = p.cz + sz * 160;
    if (blockCentersX.includes(nx)) options.push({ axis: 0, tx: nx, tz: p.cz, corner: cornerIndex(-sx, sz) }); // over a north-south road
    if (blockCentersZ.includes(nz)) options.push({ axis: 1, tx: p.cx, tz: nz, corner: cornerIndex(sx, -sz) }); // over an east-west road
    if (!options.length || !chance(0.45)) return false;
    const o = pick(options);
    const from = ringPoint(p.cx, p.cz, cornerT(corner), {});
    const to = ringPoint(o.tx, o.tz, cornerT(o.corner), {});
    p.cross = { ...o, ax: from.x, az: from.z, bx: to.x, bz: to.z, f: 0, len: Math.hypot(to.x - from.x, to.z - from.z) };
    p.state = 'wait';
    p.timer = 25;
    return true;
  }

  update(dt, time, player) {
    const fx = -Math.sin(player.heading), fz = -Math.cos(player.heading);
    const rx = Math.cos(player.heading), rz = -Math.sin(player.heading);
    const carSpeed = Math.abs(player.speed);
    this.onRoad.length = 0;
    this.events.length = 0;
    const walk = this.aWalk.array;
    for (const p of this.peds) {
      // Stream: pedestrians far from the player reappear on a nearby block.
      if (Math.hypot(p.x - player.x, p.z - player.z) > 330 && (p.state === 'walk' || p.state === 'idle')) this.place(p, player.x, player.z);

      let targetSpeed = 0;
      const dxp = p.x - player.x, dzp = p.z - player.z;
      const ahead = dxp * fx + dzp * fz, lateral = dxp * rx + dzp * rz;
      const threat = carSpeed > 4 && ahead > -1 && ahead < carSpeed * 1.25 + 5 && Math.abs(lateral) < 2.6 && Math.abs(player.y - SLAB_H) < 2.5;
      if (threat && p.state !== 'down' && p.state !== 'getup' && p.state !== 'dodge') {
        // Jump out of the car's path, to whichever side is closer.
        const side = Math.abs(lateral) > 0.2 ? Math.sign(lateral) : (chance(0.5) ? 1 : -1);
        p.vx = rx * side * 5.2 + fx * 0.6;
        p.vz = rz * side * 5.2 + fz * 0.6;
        p.state = 'dodge';
        p.timer = 0.55;
        p.resume = p.cross ? 'cross' : 'return';
      }
      // Struck anyway: knocked over, then back on their feet.
      const hitD = Math.hypot(p.x - (player.x + fx * 1.3 * Math.sign(ahead || 1)), p.z - (player.z + fz * 1.3 * Math.sign(ahead || 1)));
      if (p.state !== 'down' && p.state !== 'getup' && Math.hypot(dxp, dzp) < 3 && hitD < 1.4) {
        if (carSpeed > 5) {
          p.state = 'down';
          p.timer = 2.6;
          p.vx = player.vx * 0.35 + rx * Math.sign(lateral || 1) * 1.5;
          p.vz = player.vz * 0.35 + rz * Math.sign(lateral || 1) * 1.5;
          p.heading = Math.atan2(-p.vx, -p.vz) + Math.PI;
          this.events.push({ type: 'hit', x: p.x, z: p.z, speed: carSpeed });
        } else {
          const d = Math.max(hitD, 0.01);
          p.x += (p.x - player.x) / Math.hypot(dxp, dzp) * (1.4 - d) * 0.5;
          p.z += (p.z - player.z) / Math.hypot(dxp, dzp) * (1.4 - d) * 0.5;
        }
      }

      switch (p.state) {
        case 'idle': {
          p.timer -= dt;
          if (p.timer <= 0) { p.state = 'walk'; p.timer = range(6, 20); }
          break;
        }
        case 'walk': {
          targetSpeed = p.speed;
          const before = p.t;
          p.t += p.dir * p.speed * dt;
          const kBefore = Math.floor(before / SIDE), kAfter = Math.floor(p.t / SIDE);
          if (kBefore !== kAfter) {
            const corner = ((p.dir > 0 ? kAfter : kBefore) % 4 + 4) % 4;
            if (this.tryCross(p, corner, time)) { p.t = cornerT(corner); }
          }
          p.t = ((p.t % PERIM) + PERIM) % PERIM;
          p.timer -= dt;
          if (p.timer <= 0 && !p.cross) {
            if (chance(0.25)) { p.state = 'idle'; p.timer = range(2, 6); }
            else { p.timer = range(5, 20); if (chance(0.2)) p.dir *= -1; }
          }
          this.pathPoint(p);
          p.x += (p.px - p.x) * Math.min(1, dt * 6);
          p.z += (p.pz - p.z) * Math.min(1, dt * 6);
          p.heading = Math.atan2(-p.pdx, -p.pdz);
          break;
        }
        case 'wait': {
          p.timer -= dt;
          const c = p.cross;
          p.x += (c.ax - p.x) * Math.min(1, dt * 3);
          p.z += (c.az - p.z) * Math.min(1, dt * 3);
          p.heading = Math.atan2(-(c.bx - c.ax), -(c.bz - c.az));
          const light = signalState(c.axis, time);
          // Walk only at the start of the red so the crossing finishes in time.
          const local = ((time % 28) + 28) % 28, phase = c.axis === 0 ? local : (local + 14) % 28;
          if (light === 0 && phase >= 13 && phase < 17) { p.state = 'cross'; }
          else if (p.timer <= 0) { p.cross = null; p.state = 'walk'; }
          break;
        }
        case 'cross': {
          const c = p.cross;
          targetSpeed = 1.85;
          c.f = Math.min(1, c.f + (targetSpeed * dt) / c.len);
          const tx = c.ax + (c.bx - c.ax) * c.f, tz = c.az + (c.bz - c.az) * c.f;
          p.x += (tx - p.x) * Math.min(1, dt * 8);
          p.z += (tz - p.z) * Math.min(1, dt * 8);
          p.heading = Math.atan2(-(c.bx - c.ax), -(c.bz - c.az));
          this.onRoad.push(p);
          if (c.f >= 1) {
            p.cx = c.tx;
            p.cz = c.tz;
            p.t = cornerT(c.corner);
            p.cross = null;
            p.state = 'walk';
            p.dir = chance(0.5) ? 1 : -1;
          }
          break;
        }
        case 'dodge': {
          targetSpeed = 5;
          p.x += p.vx * dt;
          p.z += p.vz * dt;
          p.vx *= Math.exp(-2.5 * dt);
          p.vz *= Math.exp(-2.5 * dt);
          p.heading = Math.atan2(-p.vx, -p.vz);
          p.timer -= dt;
          if (p.timer <= 0) { p.state = p.resume === 'cross' && p.cross ? 'cross' : 'return'; }
          break;
        }
        case 'down': {
          p.x += p.vx * dt;
          p.z += p.vz * dt;
          const k = Math.exp(-3.5 * dt);
          p.vx *= k;
          p.vz *= k;
          p.fall = Math.min(1.5, p.fall + dt * 6);
          p.timer -= dt;
          if (p.timer <= 0) { p.state = 'getup'; p.timer = 0.9; }
          break;
        }
        case 'getup': {
          p.fall = Math.max(0, p.fall - dt * 1.9);
          p.timer -= dt;
          if (p.timer <= 0) { p.fall = 0; p.state = p.cross ? 'cross' : 'return'; }
          break;
        }
        case 'return': {
          // Walk back to the sidewalk loop at a brisk pace.
          this.pathPoint(p);
          const dx = p.px - p.x, dz = p.pz - p.z, d = Math.hypot(dx, dz);
          targetSpeed = 2.2;
          if (d < 0.25) { p.state = 'walk'; break; }
          p.x += (dx / d) * Math.min(d, targetSpeed * dt);
          p.z += (dz / d) * Math.min(d, targetSpeed * dt);
          p.heading = Math.atan2(-dx, -dz);
          if (Math.abs(p.x - p.cx) < RING + 1 && Math.abs(p.z - p.cz) < RING + 1) { /* on the block */ }
          break;
        }
      }
      if (p.state === 'dodge' || p.state === 'return') {
        const onRoad = Math.abs(p.x - p.cx) > RING + 3 || Math.abs(p.z - p.cz) > RING + 3;
        if (onRoad) this.onRoad.push(p);
      }

      // Animation: stride phase follows speed; running leans forward.
      const moving = p.state === 'down' || p.state === 'getup' ? 0 : targetSpeed;
      p.amp += ((moving > 0.1 ? Math.min(0.45 + moving * 0.12, 1.05) : 0) - p.amp) * Math.min(1, dt * 6);
      p.phase += dt * (moving > 0.1 ? 3.2 + moving * 1.6 : 0);
      p.lean += ((moving > 3 ? 0.18 : 0.02) - p.lean) * Math.min(1, dt * 5);
      walk[p.i * 4] = p.phase;
      walk[p.i * 4 + 1] = p.amp;
      walk[p.i * 4 + 2] = p.lean;
      walk[p.i * 4 + 3] = p.fall;
      const y = p.state === 'cross' || p.state === 'down' || p.state === 'dodge' || p.state === 'getup'
        ? (Math.abs(p.x - p.cx) < RING + 4.5 && Math.abs(p.z - p.cz) < RING + 4.5 ? SLAB_H : 0.02) : SLAB_H;
      this.q.setFromEuler(this.e.set(0, p.heading, 0));
      this.m.compose(new THREE.Vector3(p.x, y, p.z), this.q, new THREE.Vector3(p.scale, p.scale, p.scale));
      this.mesh.setMatrixAt(p.i, this.m);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    this.aWalk.needsUpdate = true;
  }
}
