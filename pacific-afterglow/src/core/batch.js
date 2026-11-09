import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Static batching: merge every plain mesh under `root` that shares a material (and the
// same shadow, layer and sort settings) into one mesh, so a pier made of a hundred
// planks costs one draw call per material instead of one per plank, in every pass
// (camera, shadow map and reflections). Subtrees listed in `exclude` (anything that
// moves) are left alone. Returns how many meshes were removed.
const _m = new THREE.Matrix4();

export function batchStatic(root, { exclude = [] } = {}) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const skip = new Set();
  for (const e of exclude) e.traverse(o => skip.add(o));
  const buckets = new Map();
  root.traverse(o => {
    if (!o.isMesh || o.isInstancedMesh || o.isSkinnedMesh || skip.has(o) || Array.isArray(o.material)) return;
    if (o.geometry.isInstancedBufferGeometry || Object.keys(o.geometry.morphAttributes).length) return;
    const key = [o.material.uuid, o.castShadow, o.receiveShadow, o.layers.mask, o.renderOrder, !!o.userData.noAO, o.frustumCulled].join('|');
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(o);
  });
  let removed = 0;
  for (const list of buckets.values()) {
    if (list.length < 2) continue;
    const geos = list.map(o => {
      const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      g.applyMatrix4(_m.multiplyMatrices(inv, o.matrixWorld));
      return g;
    });
    // Keep only the attributes every piece has, so they can be merged.
    const names = Object.keys(geos[0].attributes).filter(n => geos.every(g => g.attributes[n] && g.attributes[n].itemSize === geos[0].attributes[n].itemSize));
    for (const g of geos) for (const n of Object.keys(g.attributes)) if (!names.includes(n)) g.deleteAttribute(n);
    const merged = mergeGeometries(geos);
    if (!merged) continue;
    const first = list[0];
    const mesh = new THREE.Mesh(merged, first.material);
    mesh.castShadow = first.castShadow;
    mesh.receiveShadow = first.receiveShadow;
    mesh.layers.mask = first.layers.mask;
    mesh.renderOrder = first.renderOrder;
    mesh.frustumCulled = first.frustumCulled;
    mesh.userData = { ...first.userData, batched: list.length };
    root.add(mesh);
    for (const o of list) o.removeFromParent(); // geometry may be shared, so it is not disposed
    removed += list.length - 1;
  }
  return removed;
}
