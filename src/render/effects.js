// Pooled CPU particle systems (smoke / fire / sparks / dust) — one THREE.Points
// draw call per type. Deliberately simple: GTA-era puffs, not volumetrics.
import * as THREE from 'three';

const VERT = `
attribute float size;
attribute float alpha;
varying float vAlpha;
void main() {
  vAlpha = alpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * (300.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}`;
const FRAG = `
uniform vec3 uColor;
varying float vAlpha;
void main() {
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d);
  if (r > 0.5) discard;
  float soft = smoothstep(0.5, 0.1, r);
  gl_FragColor = vec4(uColor, vAlpha * soft);
}`;

class Pool {
  constructor(scene, { count, color, blending, gravity, drag, grow }) {
    this.count = count;
    this.gravity = gravity;
    this.drag = drag;
    this.grow = grow;
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

  update(dt) {
    const { pos, vel, life, maxLife, size, alpha, baseAlpha } = this;
    const dragF = Math.exp(-this.drag * dt);
    for (let i = 0; i < this.count; i++) {
      if (life[i] <= 0) { alpha[i] = 0; continue; }
      life[i] -= dt;
      const t = Math.max(life[i] / maxLife[i], 0);
      vel[i * 3] *= dragF;
      vel[i * 3 + 1] = vel[i * 3 + 1] * dragF + this.gravity * dt;
      vel[i * 3 + 2] *= dragF;
      pos[i * 3] += vel[i * 3] * dt;
      pos[i * 3 + 1] += vel[i * 3 + 1] * dt;
      pos[i * 3 + 2] += vel[i * 3 + 2] * dt;
      if (pos[i * 3 + 1] < 0.1) { pos[i * 3 + 1] = 0.1; vel[i * 3 + 1] *= -0.2; }
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
    this.smoke = new Pool(scene, { count: 900, color: 0x3c3c3e, blending: THREE.NormalBlending, gravity: 1.4, drag: 0.6, grow: 6 });
    this.fire = new Pool(scene, { count: 500, color: 0xff7a1a, blending: THREE.AdditiveBlending, gravity: 2.2, drag: 1.2, grow: 2.5 });
    this.sparks = new Pool(scene, { count: 400, color: 0xffd28a, blending: THREE.AdditiveBlending, gravity: -14, drag: 0.4, grow: 0 });
    this.dust = new Pool(scene, { count: 400, color: 0x9a938a, blending: THREE.NormalBlending, gravity: 0.6, drag: 1.6, grow: 8 });
    this.emitters = [];
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
    this.smoke.update(dt);
    this.fire.update(dt);
    this.sparks.update(dt);
    this.dust.update(dt);
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
