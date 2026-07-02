// Pooled CPU particle systems (smoke / fire / sparks / dust) — one THREE.Points
// draw call per type. Deliberately simple: GTA-era puffs, not volumetrics.
import * as THREE from 'three';

const VERT = `
attribute float size;
attribute float alpha;
varying float vAlpha;
#include <common>
#include <logdepthbuf_pars_vertex>
void main() {
  vAlpha = alpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * (300.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
  #include <logdepthbuf_vertex>
}`;
const FRAG = `
uniform vec3 uColor;
varying float vAlpha;
#include <common>
#include <logdepthbuf_pars_fragment>
void main() {
  #include <logdepthbuf_fragment>
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d);
  if (r > 0.5) discard;
  float soft = smoothstep(0.1, 0.5, r);
  gl_FragColor = vec4(uColor, vAlpha * (1.0 - soft));
}`;

class Pool {
  constructor(scene, { count, color, blending, gravity, drag, grow, windMix = 0, fieldMix = 0 }) {
    this.count = count;
    this.gravity = gravity;
    this.drag = drag;
    this.grow = grow;
    this.windMix = windMix;   // how strongly particles are advected toward ambient wind
    this.fieldMix = fieldMix; // how strongly jet-blast fields accelerate particles
    this.pos = new Float32Array(count * 3);
    this.vel = new Float32Array(count * 3);
    this.life = new Float32Array(count);     // seconds remaining
    this.maxLife = new Float32Array(count);
    this.size = new Float32Array(count);
    this.alpha = new Float32Array(count);
    this.baseAlpha = new Float32Array(count);
    this.cursor = 0;

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geom.setAttribute('size', new THREE.BufferAttribute(this.size, 1));
    geom.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1));
    const mat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color(color) } },
      vertexShader: VERT, fragmentShader: FRAG,
      transparent: true, depthWrite: false, blending
    });
    this.points = new THREE.Points(geom, mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
  }

  emit(x, y, z, vx, vy, vz, life, size, alpha) {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.count;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.life[i] = this.maxLife[i] = life;
    this.size[i] = size;
    this.baseAlpha[i] = alpha;
  }

  update(dt, wind, fields) {
    const { pos, vel, life, maxLife, size, alpha, baseAlpha } = this;
    const dragF = Math.exp(-this.drag * dt);
    const wMix = this.windMix > 0 && wind ? 1 - Math.exp(-this.windMix * dt) : 0;
    const useFields = this.fieldMix > 0 && fields && fields.length > 0;
    for (let i = 0; i < this.count; i++) {
      if (life[i] <= 0) { alpha[i] = 0; continue; }
      life[i] -= dt;
      const t = Math.max(life[i] / maxLife[i], 0);
      const i3 = i * 3;
      vel[i3] *= dragF;
      vel[i3 + 1] = vel[i3 + 1] * dragF + this.gravity * dt;
      vel[i3 + 2] *= dragF;
      // ambient wind advection: velocity relaxes toward the wind vector
      if (wMix > 0) {
        vel[i3] += (wind.x - vel[i3]) * wMix;
        vel[i3 + 2] += (wind.z - vel[i3 + 2]) * wMix;
      }
      // jet-blast acceleration cones (dust/smoke physically pushed by exhaust)
      if (useFields) {
        for (const f of fields) {
          const dx = pos[i3] - f.x, dy = pos[i3 + 1] - f.y, dz = pos[i3 + 2] - f.z;
          const along = dx * f.dx + dy * f.dy + dz * f.dz;
          if (along < -4 || along > f.len) continue;
          const rx = dx - f.dx * along, ry = dy - f.dy * along, rz = dz - f.dz * along;
          const r2 = rx * rx + ry * ry + rz * rz;
          const sigma = f.r2 + along * along * 0.20;
          const g = Math.exp(-r2 / sigma) * (1 - Math.max(along, 0) / f.len);
          if (g < 0.01) continue;
          const a = f.str * g * this.fieldMix * dt;
          const rInv = 1 / Math.sqrt(r2 + 1);
          vel[i3] += (f.dx + rx * rInv * 0.5) * a;
          vel[i3 + 1] += (f.dy + ry * rInv * 0.5 + 0.25) * a;
          vel[i3 + 2] += (f.dz + rz * rInv * 0.5) * a;
        }
      }
      pos[i3] += vel[i3] * dt;
      pos[i3 + 1] += vel[i3 + 1] * dt;
      pos[i3 + 2] += vel[i3 + 2] * dt;
      if (pos[i3 + 1] < 0.1) { pos[i3 + 1] = 0.1; vel[i3 + 1] *= -0.2; }
      size[i] += this.grow * dt;
      alpha[i] = baseAlpha[i] * Math.min(1, t * 3) * t;
    }
    const g = this.points.geometry;
    g.attributes.position.needsUpdate = true;
    g.attributes.size.needsUpdate = true;
    g.attributes.alpha.needsUpdate = true;
  }
}

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.smoke = new Pool(scene, { count: 900, color: 0x3c3c3e, blending: THREE.NormalBlending, gravity: 1.4, drag: 0.6, grow: 6, windMix: 0.9, fieldMix: 0.8 });
    this.fire = new Pool(scene, { count: 500, color: 0xff7a1a, blending: THREE.AdditiveBlending, gravity: 2.2, drag: 1.2, grow: 2.5, windMix: 0.35, fieldMix: 0.5 });
    this.sparks = new Pool(scene, { count: 400, color: 0xffd28a, blending: THREE.AdditiveBlending, gravity: -14, drag: 0.4, grow: 0 });
    this.dust = new Pool(scene, { count: 900, color: 0x9a8d78, blending: THREE.NormalBlending, gravity: 0.6, drag: 1.4, grow: 7, windMix: 0.6, fieldMix: 1.0 });
    this.emitters = [];
    this.wind = new THREE.Vector3();  // ambient wind (m/s), set by the sim
    this.fields = [];                 // jet-blast cones: {x,y,z, dx,dy,dz, len, r2, str}
  }

  // Emit particles with a directed initial velocity (wheel spray, blast pickup).
  dustKick(p, v, count, size = 3, life = 1.6, alpha = 0.5) {
    for (let i = 0; i < count; i++) {
      this.dust.emit(
        p.x + (Math.random() - 0.5) * 2.5, Math.max(p.y + (Math.random() - 0.5), 0.3), p.z + (Math.random() - 0.5) * 2.5,
        v.x * (0.6 + Math.random() * 0.8), v.y * (0.6 + Math.random() * 0.8), v.z * (0.6 + Math.random() * 0.8),
        life * (0.6 + Math.random() * 0.8), size * (0.6 + Math.random() * 0.9), alpha
      );
    }
  }

  burst(type, p, count, speed, life, size, alpha = 0.8) {
    const pool = this[type];
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2, e = Math.random() * Math.PI;
      const s = speed * (0.3 + Math.random() * 0.7);
      pool.emit(
        p.x + (Math.random() - 0.5) * 2, p.y + (Math.random() - 0.5) * 2, p.z + (Math.random() - 0.5) * 2,
        Math.cos(a) * Math.sin(e) * s, Math.abs(Math.cos(e)) * s * 0.8, Math.sin(a) * Math.sin(e) * s,
        life * (0.5 + Math.random() * 0.8), size * (0.6 + Math.random() * 0.8), alpha
      );
    }
  }

  // Continuous emitter attached to a world-space getter.
  addEmitter(type, getPos, rate, opts = {}) {
    const e = { type, getPos, rate, acc: 0, life: opts.life ?? 2.5, size: opts.size ?? 4, speed: opts.speed ?? 3, alpha: opts.alpha ?? 0.7, enabled: true, ttl: opts.ttl ?? Infinity };
    this.emitters.push(e);
    return e;
  }

  tireSmoke(p, intensity) {
    this.burst('dust', p, Math.ceil(6 * intensity), 4, 1.2, 2.5, 0.5);
  }

  update(dt) {
    for (let i = this.emitters.length - 1; i >= 0; i--) {
      const e = this.emitters[i];
      e.ttl -= dt;
      if (e.ttl <= 0) { this.emitters.splice(i, 1); continue; }
      if (!e.enabled) continue;
      e.acc += e.rate * dt;
      while (e.acc >= 1) {
        e.acc -= 1;
        const p = e.getPos();
        this[e.type].emit(
          p.x + (Math.random() - 0.5), p.y + (Math.random() - 0.5), p.z + (Math.random() - 0.5),
          (Math.random() - 0.5) * e.speed, Math.random() * e.speed, (Math.random() - 0.5) * e.speed,
          e.life * (0.6 + Math.random() * 0.8), e.size, e.alpha
        );
      }
    }
    this.smoke.update(dt, this.wind, this.fields);
    this.fire.update(dt, this.wind, this.fields);
    this.sparks.update(dt);
    this.dust.update(dt, this.wind, this.fields);
  }

  dispose() {
    for (const k of ['smoke', 'fire', 'sparks', 'dust']) {
      this.scene.remove(this[k].points);
      this[k].points.geometry.dispose();
      this[k].points.material.dispose();
    }
    this.emitters.length = 0;
  }
}
