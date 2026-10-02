import * as THREE from 'three';
import { carGeometry, carMaterials, paintMaterial } from './carModel.js';
import { roadsX, roadsZ, LANES } from '../world/layout.js';
import { signalState } from '../world/props.js';
import { rand, range, pick } from '../core/rng.js';
import { canvasTexture } from '../core/materials.js';

const FLEET = [['sedan', 13], ['suv', 9], ['hatch', 9], ['pickup', 6], ['taxi', 7]];
const COLORS = ['#e9e9e6', '#e9e9e6', '#151719', '#151719', '#9ea3a6', '#5d6265', '#1f3a5f', '#8e1c1c', '#c9b99a', '#2e4a3a', '#6b7d8c', '#3a2f2a'];

const tmpM = new THREE.Matrix4(), tmpQ = new THREE.Quaternion(), tmpV = new THREE.Vector3(), tmpS = new THREE.Vector3(1, 1, 1);
const UP = new THREE.Vector3(0, 1, 0), XAXIS = new THREE.Vector3(1, 0, 0);
const wheelM = new THREE.Matrix4(), spinQ = new THREE.Quaternion(), flipQ = new THREE.Quaternion().setFromAxisAngle(UP, Math.PI);

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

export class Traffic {
  constructor(scene, renderer) {
    this.cars = [];
    this.meshes = [];
    this.wheelMeshes = [];
    this.events = [];
    const mats = carMaterials(renderer);
    this.headMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff2d6, emissiveIntensity: 1, roughness: 0.2 });
    this.tailMat = new THREE.MeshStandardMaterial({ color: 0x3a0705, emissive: 0xff2010, emissiveIntensity: 1, roughness: 0.3 });
    // Instance color scales the tail light glow so brake lights can flare per car.
    this.tailMat.onBeforeCompile = sh => {
      sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n#ifdef USE_INSTANCING_COLOR\ntotalEmissiveRadiance *= vColor;\n#endif');
    };
    this.tailMat.customProgramCacheKey = () => 'tail-inst';

    const taxiSignTex = canvasTexture(renderer, 128, 32, (c, w, h) => {
      c.fillStyle = '#f7d046';
      c.fillRect(0, 0, w, h);
      c.fillStyle = '#1a1a1a';
      c.font = '800 24px "Barlow Condensed", Impact, sans-serif';
      c.textAlign = 'center';
      c.fillText('TAXI', w / 2, 25);
    });
    this.taxiSignMat = new THREE.MeshStandardMaterial({ map: taxiSignTex, emissive: 0xffffff, emissiveMap: taxiSignTex, emissiveIntensity: 0.3 });

    let index = 0;
    for (const [typeName, count] of FLEET) {
      const geoType = typeName === 'taxi' ? 'sedan' : typeName;
      const geo = carGeometry(geoType);
      const paint = paintMaterial(0xffffff, { metalness: 0.45, roughness: 0.38 });
      const slot = { paint, glass: mats.glass, trim: mats.trim, dark: mats.dark, chrome: mats.chrome, head: this.headMat, tail: this.tailMat, plate: mats.plate };
      const parts = {};
      for (const [k, g] of Object.entries(geo.parts)) {
        const mesh = new THREE.InstancedMesh(g, slot[k], count);
        mesh.castShadow = k === 'paint' || k === 'glass';
        mesh.receiveShadow = true;
        mesh.frustumCulled = false;
        mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        scene.add(mesh);
        parts[k] = mesh;
        this.meshes.push(mesh);
      }
      const tire = new THREE.InstancedMesh(geo.wheel.tire, mats.tire, count * 4);
      const rim = new THREE.InstancedMesh(geo.wheel.rim, mats.rim, count * 4);
      for (const w of [tire, rim]) {
        w.frustumCulled = false;
        w.castShadow = w === tire;
        w.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        scene.add(w);
      }
      let sign = null;
      if (typeName === 'taxi') {
        sign = new THREE.InstancedMesh(new THREE.BoxGeometry(0.62, 0.2, 0.26), this.taxiSignMat, count);
        sign.frustumCulled = false;
        scene.add(sign);
      }
      const roofY = Math.max(...geo.type.cabin.top.map(k => k[1]));
      for (let i = 0; i < count; i++) {
        const color = typeName === 'taxi' ? '#f2c230' : pick(COLORS);
        parts.paint.setColorAt(i, new THREE.Color(color));
        parts.tail.setColorAt(i, new THREE.Color(1, 1, 1));
        const car = this.spawn({ typeName, slot: i, parts, tire, rim, sign, geo, roofY, index: index++ });
        this.cars.push(car);
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
    this.blobs = new THREE.InstancedMesh(blobGeo, new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1 }), this.cars.length + 1);
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
  }

  spawn(car) {
    // Random lane anywhere on the grid, kept apart from other cars.
    for (let attempt = 0; attempt < 40; attempt++) {
      const axis = rand() < 0.55 ? 'ns' : 'ew';
      const road = axis === 'ns' ? pick(roadsX) : pick(roadsZ);
      const dir = rand() < 0.5 ? 1 : -1;
      const lane = rand() < 0.5 ? 0 : 1;
      const s = axis === 'ns' ? range(-470, 470) : range(-310, 310);
      const clash = this.cars.some(o => o.axis === axis && o.road === road && o.dir === dir && o.lane === lane && Math.abs(o.s - s) < 18);
      const nearCross = (axis === 'ns' ? roadsZ : roadsX).some(r => Math.abs(r - s) < 24);
      Object.assign(car, { axis, road, dir, lane, s });
      if (!clash && !nearCross) break;
    }
    car.cruise = range(11, 16.5);
    car.speed = car.cruise * 0.6;
    car.turn = null;
    car.decided = null;
    car.hit = null;
    car.offset = null;
    car.braking = false;
    car.blockedTime = 0;
    car.wheelSpin = 0;
    car.x = 0;
    car.z = 0;
    car.heading = 0;
    this.place(car);
    return car;
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

  nextCross(car) {
    const list = car.axis === 'ns' ? roadsZ : roadsX;
    let best = null;
    for (const r of list) {
      const d = (r - car.s) * car.dir;
      if (d > -1 && (best === null || d < (best - car.s) * car.dir)) best = r;
    }
    return best;
  }

  // Can a car leave the intersection at (crossValue) heading in the given way?
  exitValid(axis, dir, road) {
    const list = axis === 'ns' ? roadsZ : roadsX;
    // Moving along `axis` away from cross coordinate `road`... we check the next road exists.
    return dir > 0 ? road < list[list.length - 1] : road > list[0];
  }

  planTurn(car, cross) {
    // Movement directions as compass: N(-z) E(+x) S(+z) W(-x).
    const compass = car.axis === 'ns' ? (car.dir < 0 ? 'N' : 'S') : (car.dir > 0 ? 'E' : 'W');
    const right = { N: 'E', E: 'S', S: 'W', W: 'N' }[compass];
    const left = { N: 'W', W: 'S', S: 'E', E: 'N' }[compass];
    const toAxisDir = c => (c === 'N' ? ['ns', -1] : c === 'S' ? ['ns', 1] : c === 'E' ? ['ew', 1] : ['ew', -1]);
    // The exit road is the crossing road for turns.
    const valid = c => {
      const [axis, dir] = toAxisDir(c);
      if (axis === car.axis) return this.exitValid(axis, dir, cross);
      return this.exitValid(axis, dir, car.road);
    };
    const options = [];
    if (valid(compass)) options.push(['straight', car.lane === 1 ? 0.6 : 0.72]);
    if (valid(right)) options.push(['right', car.lane === 1 ? 0.4 : 0.08]);
    if (valid(left)) options.push(['left', car.lane === 0 ? 0.28 : 0.06]);
    let total = options.reduce((a, o) => a + o[1], 0), r = rand() * total, choice = options[0][0];
    for (const [name, w] of options) { if ((r -= w) <= 0) { choice = name; break; } }
    if (choice === 'straight') return null;
    const [naxis, ndir] = toAxisDir(choice === 'right' ? right : left);
    const nlane = car.lane;
    const nroad = cross;
    // Corner point where the two lane lines meet.
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

  update(dt, time, player, onHonk) {
    const px = player.x, pz = player.z;
    for (const car of this.cars) {
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
        if (h.t <= 0) {
          // Rejoin the lane we were on, easing back from where we ended up.
          car.hit = null;
          car.turn = null;
          car.s = car.axis === 'ns' ? car.z : car.x;
          const [lx, lz] = lanePos(car.axis, car.road, car.dir, car.lane, car.s);
          car.offset = { dx: car.x - lx, dz: car.z - lz, dh: wrapAngle(car.heading - headingFor(car.axis, car.dir)), t: 1 };
          car.decided = null;
        }
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
            if (!car.plan && !this.exitValid(car.axis, car.dir, cross)) car.plan = null;
          }
          const stopDist = d - 20.5;
          const light = signalState(car.axis === 'ns' ? 0 : 1, time);
          if (stopDist > -1 && (light === 0 || (light === 1 && stopDist > 9))) target = Math.min(target, Math.sqrt(Math.max(0, stopDist - 0.5)) * 2.4);
          if (car.plan) target = Math.min(target, car.plan.next.lane === 0 ? 9 : 7.5);
          // Dead end without a plan (should not happen): stop at the line.
          if (!car.plan && !this.exitValid(car.axis, car.dir, cross)) target = Math.min(target, Math.sqrt(Math.max(0, stopDist)) * 2);
        }
        // Follow the car ahead in our lane.
        for (const o of this.cars) {
          if (o === car || o.turn || o.axis !== car.axis || o.road !== car.road || o.dir !== car.dir || o.lane !== car.lane) continue;
          const gap = (o.s - car.s) * car.dir;
          if (gap > 0 && gap < 45) target = Math.min(target, Math.max(0, gap - 7.5) * 0.9);
        }
      } else {
        target = Math.min(target, 8);
      }
      // Yield to the player (and honk if they park in front of us).
      const dx = px - car.x, dz = pz - car.z;
      const ahead = dx * fx + dz * fz;
      const lateral = Math.abs(dx * fz - dz * fx);
      if (ahead > 0 && ahead < 32 && lateral < 2.6) {
        target = Math.min(target, Math.max(0, ahead - 6.5) * 0.85);
        if (car.speed < 1 && player.kmh < 5) {
          car.blockedTime += dt;
          if (car.blockedTime > 2.5) { car.blockedTime = -4; onHonk?.(car); }
        }
      } else car.blockedTime = Math.max(0, car.blockedTime - dt);

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
      car.wheelSpin -= (car.speed * dt) / car.geo.type.wheelR;
    }
    this.collidePlayer(player);
  }

  collidePlayer(player) {
    const pf = [-Math.sin(player.heading), -Math.cos(player.heading)];
    for (const car of this.cars) {
      const dx0 = player.x - car.x, dz0 = player.z - car.z;
      if (dx0 * dx0 + dz0 * dz0 > 64) continue;
      const cf = [-Math.sin(car.heading), -Math.cos(car.heading)];
      const half = car.geo.type.length / 2 - 1.05;
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
        const cvx = car.hit ? car.hit.vx : cf[0] * car.speed, cvz = car.hit ? car.hit.vz : cf[1] * car.speed;
        const vn = (player.vx - cvx) * nx + (player.vz - cvz) * nz;
        if (vn < 0) {
          const j = -1.3 * vn / 2;
          player.vx += j * nx;
          player.vz += j * nz;
          player.impact = Math.max(player.impact, -vn);
          if (!car.hit) car.hit = { vx: cvx, vz: cvz, spin: 0, t: 0 };
          car.hit.vx -= j * nx;
          car.hit.vz -= j * nz;
          car.hit.spin += (rand() - 0.5) * Math.min(-vn, 20) * 0.25;
          car.hit.t = 2.8;
          car.turn = null;
          car.plan = null;
        } else if (!car.hit) {
          car.hit = { vx: -nx * 1.5, vz: -nz * 1.5, spin: 0, t: 0.6 };
        }
        car.x -= nx * depth * 0.4;
        car.z -= nz * depth * 0.4;
      }
    }
  }

  // Write instance matrices; called once per frame after update.
  sync(night, player) {
    let blobIndex = 0;
    this.cars.forEach((car, ci) => {
      tmpQ.setFromAxisAngle(UP, car.heading);
      tmpM.compose(tmpV.set(car.x, 0.02, car.z), tmpQ, tmpS);
      for (const mesh of Object.values(car.parts)) mesh.setMatrixAt(car.slot, tmpM);
      if (car.sign) {
        const m2 = tmpM.clone().multiply(new THREE.Matrix4().makeTranslation(0, car.roofY + 0.1, 0.1));
        car.sign.setMatrixAt(car.slot, m2);
      }
      car.parts.tail.setColorAt(car.slot, tailColor.setScalar(car.braking ? 4 : 1));
      car.geo.wheels.forEach((w, k) => {
        spinQ.setFromAxisAngle(XAXIS, car.wheelSpin * (w.side < 0 ? -1 : 1));
        if (w.side < 0) spinQ.premultiply(flipQ);
        wheelM.compose(tmpV.set(w.x, w.y, w.z), spinQ, tmpS);
        wheelM.premultiply(tmpM);
        car.tire.setMatrixAt(car.slot * 4 + k, wheelM);
        car.rim.setMatrixAt(car.slot * 4 + k, wheelM);
      });
      tmpM.compose(tmpV.set(car.x, 0.035, car.z), tmpQ, tmpS);
      this.blobs.setMatrixAt(blobIndex++, tmpM);
      this.pools.setMatrixAt(ci, tmpM);
    });
    tmpQ.setFromAxisAngle(UP, player.heading);
    tmpM.compose(tmpV.set(player.x, player.y + 0.035, player.z), tmpQ, tmpS.set(1.05, 1, 1.0));
    tmpS.set(1, 1, 1);
    this.blobs.setMatrixAt(blobIndex, tmpM);
    this.blobs.instanceMatrix.needsUpdate = true;
    this.pools.instanceMatrix.needsUpdate = true;
    for (const mesh of this.meshes) {
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    }
    for (const car of this.cars) {
      car.tire.instanceMatrix.needsUpdate = true;
      car.rim.instanceMatrix.needsUpdate = true;
      if (car.sign) car.sign.instanceMatrix.needsUpdate = true;
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

const tailColor = new THREE.Color();
function wrapAngle(a) {
  return Math.atan2(Math.sin(a), Math.cos(a));
}
