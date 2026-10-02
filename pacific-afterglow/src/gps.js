import { roadsX, roadsZ, ROAD_HALF } from './world/layout.js';

// GPS: shortest path along the road grid between two points. Nodes are the crossings;
// each end point is first snapped onto its nearest road and linked to the two crossings
// on either side of it. The grid is small (35 crossings), so plain Dijkstra is instant.

const nodes = [];
for (let i = 0; i < roadsX.length; i++) for (let j = 0; j < roadsZ.length; j++) nodes.push({ x: roadsX[i], z: roadsZ[j], i, j });
const nodeAt = (i, j) => (i >= 0 && j >= 0 && i < roadsX.length && j < roadsZ.length ? i * roadsZ.length + j : -1);

// Snap a point to the nearest road center line and return the crossings that bound it.
function snap(x, z) {
  let best = null;
  roadsX.forEach((rx, i) => {
    const cz = Math.min(Math.max(z, roadsZ[0]), roadsZ[roadsZ.length - 1]);
    const d = Math.hypot(x - rx, z - cz);
    if (!best || d < best.d) {
      let j = roadsZ.findIndex(r => r >= cz);
      if (j < 0) j = roadsZ.length - 1;
      const j0 = roadsZ[j] === cz ? j : Math.max(0, j - 1);
      best = { d, x: rx, z: cz, ends: [nodeAt(i, j0), nodeAt(i, j)] };
    }
  });
  roadsZ.forEach((rz, j) => {
    const cx = Math.min(Math.max(x, roadsX[0]), roadsX[roadsX.length - 1]);
    const d = Math.hypot(x - cx, z - rz);
    if (d < best.d) {
      let i = roadsX.findIndex(r => r >= cx);
      if (i < 0) i = roadsX.length - 1;
      const i0 = roadsX[i] === cx ? i : Math.max(0, i - 1);
      best = { d, x: cx, z: rz, ends: [nodeAt(i0, j), nodeAt(i, j)] };
    }
  });
  return best;
}

// Returns a polyline [[x, z], ...] from (ax, az) to (bx, bz) following the roads.
export function routeBetween(ax, az, bx, bz) {
  const a = snap(ax, az), b = snap(bx, bz);
  const n = nodes.length, START = n, END = n + 1;
  const pos = i => (i === START ? a : i === END ? b : nodes[i]);
  const edges = i => {
    if (i === START) return a.ends.map(k => [k, Math.hypot(nodes[k].x - a.x, nodes[k].z - a.z)]);
    const out = [];
    if (i < n) {
      const { i: gi, j: gj } = nodes[i];
      for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const k = nodeAt(gi + di, gj + dj);
        if (k >= 0) out.push([k, Math.hypot(nodes[k].x - nodes[i].x, nodes[k].z - nodes[i].z)]);
      }
      if (b.ends.includes(i)) out.push([END, Math.hypot(b.x - nodes[i].x, b.z - nodes[i].z)]);
    }
    return out;
  };
  // Both points on the same stretch of road: drive straight there.
  const sameSegment = a.ends[0] === b.ends[0] && a.ends[1] === b.ends[1];
  if (sameSegment) return [[ax, az], [a.x, a.z], [b.x, b.z], [bx, bz]];
  const dist = new Map([[START, 0]]), prev = new Map(), done = new Set();
  while (true) {
    let cur = -1, cd = Infinity;
    for (const [k, d] of dist) if (!done.has(k) && d < cd) { cur = k; cd = d; }
    if (cur < 0 || cur === END) break;
    done.add(cur);
    for (const [k, w] of edges(cur)) {
      const nd = cd + w;
      if (nd < (dist.get(k) ?? Infinity)) { dist.set(k, nd); prev.set(k, cur); }
    }
  }
  const path = [];
  for (let k = END; k !== undefined; k = prev.get(k)) {
    const p = pos(k);
    path.unshift([p.x, p.z]);
    if (k === START) break;
  }
  path.unshift([ax, az]);
  path.push([bx, bz]);
  return path;
}

// Length of a polyline in metres.
export function routeLength(path) {
  let d = 0;
  for (let i = 1; i < path.length; i++) d += Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1]);
  return d;
}

export const onRoadGrid = (x, z) => roadsX.some(r => Math.abs(x - r) < ROAD_HALF) || roadsZ.some(r => Math.abs(z - r) < ROAD_HALF);
