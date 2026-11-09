import * as THREE from 'three';
import { canvasTexture } from '../core/materials.js';
import { rand } from '../core/rng.js';

const vertex = /* glsl */`
attribute vec3 aPos;
attribute vec4 aData; // size, alpha, rotation, age (0..1)
attribute vec3 aColor;
varying vec2 vUv;
varying float vAlpha;
varying float vAge;
varying vec3 vColor;
void main() {
  vUv = uv;
  vAlpha = aData.y;
  vAge = aData.w;
  vColor = aColor;
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  float c = cos(aData.z), s = sin(aData.z);
  vec2 p = vec2(position.x * c - position.y * s, position.x * s + position.y * c) * aData.x;
  vec3 world = aPos + right * p.x + up * p.y;
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
}`;

const smokeFragment = /* glsl */`
uniform sampler2D map;
uniform vec3 light;
varying vec2 vUv;
varying float vAlpha;
varying float vAge;
varying vec3 vColor;
void main() {
  vec4 t = texture2D(map, vUv);
  float a = t.a * vAlpha;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vColor * light * (0.75 + t.r * 0.35), a);
}`;

const glowFragment = /* glsl */`
uniform sampler2D map;
varying vec2 vUv;
varying float vAlpha;
varying float vAge;
varying vec3 vColor;
void main() {
  vec4 t = texture2D(map, vUv);
  gl_FragColor = vec4(vColor * t.a * vAlpha, 1.0);
}`;

export class ParticlePool {
  constructor(scene, max, { texture, additive = false, drag = 1.5, gravity = 0, grow = 1.5 }) {
    this.max = max;
    this.drag = drag;
    this.gravity = gravity;
    this.grow = grow;
    this.count = 0;
    this.p = new Float32Array(max * 3);
    this.v = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.size = new Float32Array(max);
    this.alpha = new Float32Array(max);
    this.rot = new Float32Array(max);
    this.spin = new Float32Array(max);
    this.col = new Float32Array(max * 3);
    const geo = new THREE.InstancedBufferGeometry();
    const quad = new THREE.PlaneGeometry(1, 1);
    geo.index = quad.index;
    geo.setAttribute('position', quad.attributes.position);
    geo.setAttribute('uv', quad.attributes.uv);
    this.aPos = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.aData = new THREE.InstancedBufferAttribute(new Float32Array(max * 4), 4).setUsage(THREE.DynamicDrawUsage);
    this.aColor = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3).setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('aPos', this.aPos);
    geo.setAttribute('aData', this.aData);
    geo.setAttribute('aColor', this.aColor);
    geo.instanceCount = 0;
    this.uniforms = { map: { value: texture }, light: { value: new THREE.Color(1, 1, 1) } };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: vertex,
      fragmentShader: additive ? glowFragment : smokeFragment,
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = additive ? 6 : 5;
    this.mesh.userData.noAO = true;
    this.mesh.layers.set(1);
    this.geo = geo;
    scene.add(this.mesh);
  }

  emit(x, y, z, vx, vy, vz, size, life, alpha, r = 1, g = 1, b = 1) {
    let i = this.count;
    if (i >= this.max) {
      // Recycle the oldest-looking particle.
      let best = 0;
      for (let k = 1; k < this.max; k++) if (this.life[k] < this.life[best]) best = k;
      i = best;
    } else this.count++;
    this.p.set([x, y, z], i * 3);
    this.v.set([vx, vy, vz], i * 3);
    this.col.set([r, g, b], i * 3);
    this.life[i] = this.maxLife[i] = life;
    this.size[i] = size;
    this.alpha[i] = alpha;
    this.rot[i] = rand() * Math.PI * 2;
    this.spin[i] = (rand() - 0.5) * 1.2;
  }

  update(dt) {
    const k = Math.exp(-this.drag * dt);
    let n = 0;
    for (let i = 0; i < this.count; i++) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) continue;
      // Compact live particles to the front.
      if (n !== i) {
        for (const [arr, w] of [[this.p, 3], [this.v, 3], [this.col, 3]]) arr.copyWithin(n * w, i * w, i * w + w);
        this.life[n] = this.life[i]; this.maxLife[n] = this.maxLife[i]; this.size[n] = this.size[i];
        this.alpha[n] = this.alpha[i]; this.rot[n] = this.rot[i]; this.spin[n] = this.spin[i];
      }
      const j = n * 3;
      this.v[j] *= k; this.v[j + 1] = this.v[j + 1] * k + this.gravity * dt; this.v[j + 2] *= k;
      this.p[j] += this.v[j] * dt; this.p[j + 1] += this.v[j + 1] * dt; this.p[j + 2] += this.v[j + 2] * dt;
      this.rot[n] += this.spin[n] * dt;
      const age = 1 - this.life[n] / this.maxLife[n];
      const fade = Math.min(age * 6, 1) * (1 - age) * (1 - age);
      this.aPos.array.set([this.p[j], this.p[j + 1], this.p[j + 2]], j);
      this.aData.array.set([this.size[n] * (1 + age * this.grow), this.alpha[n] * fade, this.rot[n], age], n * 4);
      this.aColor.array.set([this.col[j], this.col[j + 1], this.col[j + 2]], j);
      n++;
    }
    this.count = n;
    this.geo.instanceCount = n;
    this.aPos.needsUpdate = this.aData.needsUpdate = this.aColor.needsUpdate = true;
  }
}

export function buildEffects(scene, renderer) {
  const smokeTex = canvasTexture(renderer, 128, 128, (c, w, h) => {
    const img = c.createImageData(w, h);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const dx = (x - w / 2) / (w / 2), dy = (y - h / 2) / (h / 2);
      const d = Math.sqrt(dx * dx + dy * dy);
      const n = 0.65 + 0.35 * Math.sin(x * 0.31 + Math.sin(y * 0.23) * 3) * Math.sin(y * 0.27 + Math.cos(x * 0.19) * 2);
      const a = Math.max(0, 1 - d) ** 1.6 * n;
      const i = (y * w + x) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = 200 + n * 55;
      img.data[i + 3] = Math.min(255, a * 255);
    }
    c.putImageData(img, 0, 0);
  }, { srgb: false });
  const glowTex = canvasTexture(renderer, 64, 64, (c, w, h) => {
    const g = c.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.3, 'rgba(255,255,255,0.6)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g;
    c.fillRect(0, 0, w, h);
  }, { srgb: false });
  return {
    smoke: new ParticlePool(scene, 420, { texture: smokeTex, drag: 1.1, gravity: 0.35, grow: 2.6 }),
    dust: new ParticlePool(scene, 200, { texture: smokeTex, drag: 1.6, gravity: -0.2, grow: 2.0 }),
    sparks: new ParticlePool(scene, 160, { texture: glowTex, additive: true, drag: 0.6, gravity: -9.8, grow: -0.6 }),
    flames: new ParticlePool(scene, 160, { texture: glowTex, additive: true, drag: 3, gravity: 0.5, grow: -0.4 }),
    water: new ParticlePool(scene, 360, { texture: smokeTex, drag: 0.35, gravity: -9.8, grow: 1.6 }),
  };
}

// Skid marks: a ring buffer of quads laid between successive tire positions.
export class SkidMarks {
  constructor(scene, max = 900) {
    this.max = max;
    this.index = 0;
    const geo = new THREE.PlaneGeometry(1, 1);
    geo.rotateX(-Math.PI / 2);
    this.mat = new THREE.MeshStandardMaterial({ color: 0x050505, transparent: true, opacity: 0.55, roughness: 0.6, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3 });
    this.mesh = new THREE.InstancedMesh(geo, this.mat, max);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.receiveShadow = true;
    this.mesh.renderOrder = 1;
    this.mesh.userData.noAO = true;
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < max; i++) this.mesh.setMatrixAt(i, zero);
    this.last = new Map();
    scene.add(this.mesh);
    this.m = new THREE.Matrix4();
    this.q = new THREE.Quaternion();
    this.v = new THREE.Vector3();
    this.s = new THREE.Vector3();
    this.up = new THREE.Vector3(0, 1, 0);
  }

  // Continue the mark for wheel `id`, or break it when not sliding.
  add(id, x, y, z, sliding, width = 0.26) {
    const prev = this.last.get(id);
    if (!sliding) { this.last.delete(id); return; }
    if (prev) {
      const dx = x - prev[0], dz = z - prev[2];
      const len = Math.hypot(dx, dz);
      if (len < 0.35) return;
      if (len < 4) {
        this.q.setFromAxisAngle(this.up, Math.atan2(dx, dz));
        this.m.compose(this.v.set((x + prev[0]) / 2, y + 0.03, (z + prev[2]) / 2), this.q, this.s.set(width, 1, len + 0.05));
        this.mesh.setMatrixAt(this.index, this.m);
        this.index = (this.index + 1) % this.max;
        this.mesh.instanceMatrix.needsUpdate = true;
      }
    }
    this.last.set(id, [x, y, z]);
  }
}
