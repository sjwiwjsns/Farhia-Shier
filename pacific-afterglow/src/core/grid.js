import * as THREE from 'three';

// Spatial hashing and distance culling, so a city ten times the size costs the same per
// frame as the original: collision, line-of-sight and visibility tests only ever look at
// what is near the thing asking.

const K = (i, j) => (i + 4096) * 8192 + (j + 4096);

// Axis-aligned boxes { x, z, w, d } where w and d are HALF extents (as the colliders use).
export class BoxGrid {
  constructor(cell = 80, half = b => [b.w, b.d]) {
    this.cell = cell;
    this.half = half;
    this.map = new Map();
    this.stamp = 0;
    this.all = [];
  }

  add(b) {
    const [hw, hd] = this.half(b);
    const c = this.cell;
    const i0 = Math.floor((b.x - hw) / c), i1 = Math.floor((b.x + hw) / c);
    const j0 = Math.floor((b.z - hd) / c), j1 = Math.floor((b.z + hd) / c);
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) {
      const k = K(i, j);
      let list = this.map.get(k);
      if (!list) this.map.set(k, list = []);
      list.push(b);
    }
    b._gs = 0;
    this.all.push(b);
    return b;
  }

  addAll(list) {
    for (const b of list) this.add(b);
    return this;
  }

  // Calls fn(box) once for every box whose cell overlaps the square around (x, z).
  // fn may return true to stop early; near() then returns true.
  near(x, z, r, fn) {
    const c = this.cell, stamp = ++this.stamp;
    const i0 = Math.floor((x - r) / c), i1 = Math.floor((x + r) / c);
    const j0 = Math.floor((z - r) / c), j1 = Math.floor((z + r) / c);
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) {
      const list = this.map.get(K(i, j));
      if (!list) continue;
      for (let n = 0; n < list.length; n++) {
        const b = list[n];
        if (b._gs === stamp) continue;
        b._gs = stamp;
        if (fn(b) === true) return true;
      }
    }
    return false;
  }

  // Calls fn(box) for boxes in the cells a segment passes through (2D).
  segment(ax, az, bx, bz, fn) {
    const c = this.cell, stamp = ++this.stamp;
    const len = Math.hypot(bx - ax, bz - az);
    const steps = Math.max(1, Math.ceil(len / (c * 0.5)));
    let li = NaN, lj = NaN;
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const ci = Math.floor((ax + (bx - ax) * t) / c), cj = Math.floor((az + (bz - az) * t) / c);
      if (ci === li && cj === lj) continue;
      li = ci; lj = cj;
      // A half-cell step can clip a corner, so take the neighbours too.
      for (let i = ci - 1; i <= ci + 1; i++) for (let j = cj - 1; j <= cj + 1; j++) {
        const list = this.map.get(K(i, j));
        if (!list) continue;
        for (let n = 0; n < list.length; n++) {
          const b = list[n];
          if (b._gs === stamp) continue;
          b._gs = stamp;
          if (fn(b) === true) return true;
        }
      }
    }
    return false;
  }
}

// Points with a radius { x, z, r }: tree trunks, poles, piles.
export class PointGrid {
  constructor(cell = 24) {
    this.cell = cell;
    this.map = new Map();
    this.count = 0;
  }

  add(p) {
    const k = K(Math.floor(p.x / this.cell), Math.floor(p.z / this.cell));
    let list = this.map.get(k);
    if (!list) this.map.set(k, list = []);
    list.push(p);
    this.count++;
    return p;
  }

  addAll(list) {
    for (const p of list) this.add(p);
    return this;
  }

  near(x, z, r, fn) {
    const c = this.cell;
    const i0 = Math.floor((x - r) / c), i1 = Math.floor((x + r) / c);
    const j0 = Math.floor((z - r) / c), j1 = Math.floor((z + r) / c);
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) {
      const list = this.map.get(K(i, j));
      if (!list) continue;
      for (let n = 0; n < list.length; n++) if (fn(list[n]) === true) return true;
    }
    return false;
  }

  // True when any point lies within d of (x, z) on both axes.
  any(x, z, d) {
    return this.near(x, z, d, p => Math.abs(p.x - x) < d && Math.abs(p.z - z) < d);
  }
}

// --- Chunked instancing ---------------------------------------------------------
// Anything repeated across the city is split into square chunks, one InstancedMesh per
// chunk, so the renderer can frustum-cull whole neighbourhoods and the LOD pass below can
// drop small details with distance.
export const CHUNK = 320;
export const chunkId = (x, z) => K(Math.floor(x / CHUNK), Math.floor(z / CHUNK));

const lodEntries = [];
const _box = new THREE.Box3(), _sphere = new THREE.Sphere();

// Hide `object` when the camera is further than `far` from its bounds. `onLod(dist)` is an
// optional hook (used to swap in cheaper materials).
export function registerLod(object, far, onLod = null) {
  object.updateMatrixWorld(true);
  _box.setFromObject(object);
  _box.getBoundingSphere(_sphere);
  lodEntries.push({ object, far, x: _sphere.center.x, z: _sphere.center.z, r: Math.hypot(_box.max.x - _box.min.x, _box.max.z - _box.min.z) / 2, onLod });
  return object;
}

export function updateLod(cx, cz) {
  for (let i = 0; i < lodEntries.length; i++) {
    const e = lodEntries[i];
    const d = Math.hypot(e.x - cx, e.z - cz) - e.r;
    if (e.far > 0) e.object.visible = d < e.far;
    if (e.onLod) e.onLod(d, e.object);
  }
}

export const lodStats = () => ({ entries: lodEntries.length, visible: lodEntries.filter(e => e.object.visible).length });

// Build one InstancedMesh per chunk from `items`.
//   at(item) -> [x, z] decides the chunk; set(mesh, index, item) writes the instance.
//   Returns { meshes, refs } where refs[i] = { mesh, index } for items[i].
export function instancedChunks(scene, items, geometry, material, { at, set, far = 0, setup = null, cloneGeometry = false, chunk = CHUNK }) {
  const groups = new Map();
  items.forEach((item, i) => {
    const [x, z] = at(item);
    const k = K(Math.floor(x / chunk), Math.floor(z / chunk));
    let g = groups.get(k);
    if (!g) groups.set(k, g = []);
    g.push(i);
  });
  const refs = new Array(items.length);
  const meshes = [];
  for (const idx of groups.values()) {
    const mesh = new THREE.InstancedMesh(cloneGeometry ? geometry.clone() : geometry, material, idx.length);
    idx.forEach((itemIndex, n) => {
      set(mesh, n, items[itemIndex], itemIndex);
      refs[itemIndex] = { mesh, index: n };
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    setup?.(mesh, idx.map(i => items[i]));
    mesh.computeBoundingSphere();
    scene.add(mesh);
    if (far > 0) registerLod(mesh, far);
    meshes.push(mesh);
  }
  return { meshes, refs };
}
