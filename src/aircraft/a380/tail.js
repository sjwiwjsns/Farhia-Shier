// A380 empennage: the enormous fin with dorsal fillet and two-segment rudder,
// plus dihedral tailplane with elevators, built from the same tapered-panel
// loft as the wing.
import * as THREE from 'three';
import { DEG2RAD } from '../../core/math.js';
import { A380 } from './spec.js';
import { crownYAt } from './fuselage.js';

// vertical tapered plate (fin) with sweep — root at origin, +y up
function finGeometry(rootChord, tipChord, height, sweepDeg, thickness) {
  const sw = Math.tan(sweepDeg * DEG2RAD);
  const v = [
    [thickness / 2, 0, 0], [thickness / 2, 0, rootChord],
    [thickness * 0.2, height, height * sw], [thickness * 0.2, height, height * sw + tipChord],
    [-thickness / 2, 0, 0], [-thickness / 2, 0, rootChord],
    [-thickness * 0.2, height, height * sw], [-thickness * 0.2, height, height * sw + tipChord]
  ];
  const faces = [
    [0, 1, 2], [1, 3, 2], [4, 6, 5], [5, 6, 7],
    [0, 2, 4], [4, 2, 6], [1, 5, 3], [3, 5, 7], [2, 3, 6], [3, 7, 6]
  ];
  const uvs = [[0, 0], [1, 0], [0, 1], [1, 1], [0, 0], [1, 0], [0, 1], [1, 1]];
  const pos = [], idx = [], uv = [];
  for (const p of v) pos.push(...p);
  for (const u of uvs) uv.push(...u);
  for (const f of faces) idx.push(...f);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

export function buildA380Tail(materials, parts) {
  const t = A380.tail;
  const L = A380.length;
  const group = new THREE.Group();

  const finRootT = (t.finRootX + t.finRootChord * 0.5) / L;
  const finBaseY = crownYAt(finRootT) - 0.4;
  const finZ = -L / 2 + t.finRootX;

  // fin
  const fin = new THREE.Mesh(
    finGeometry(t.finRootChord, t.finTipChord, t.finHeight, t.finSweepLE, 1.05), materials.tail);
  fin.position.set(0, finBaseY, finZ);
  fin.castShadow = true;
  group.add(fin);
  parts.fin = fin;

  // dorsal fillet ahead of the fin root
  const dorsal = new THREE.Mesh(
    finGeometry(t.dorsalLength, 0.6, 2.4, 68, 0.8), materials.fuselage);
  dorsal.position.set(0, finBaseY - 0.4, finZ - t.dorsalLength + 0.8);
  group.add(dorsal);

  // two-segment rudder along the fin trailing edge
  const teSweep = Math.atan((t.finHeight * Math.tan(t.finSweepLE * DEG2RAD) + t.finTipChord - t.finRootChord) / t.finHeight);
  const rudder = new THREE.Group();
  rudder.position.set(0, finBaseY, finZ + t.finRootChord);
  for (const [y0, y1, cFrac] of [[0.05, 0.52, 0.24], [0.55, 0.96, 0.22]]) {
    const h = (y1 - y0) * t.finHeight;
    const midY = (y0 + y1) / 2 * t.finHeight;
    const chord = (t.finRootChord + (t.finTipChord - t.finRootChord) * (y0 + y1) / 2) * cFrac;
    const seg = new THREE.Mesh(new THREE.BoxGeometry(0.30, h, chord), materials.tail);
    seg.position.set(0, midY, midY * Math.tan(teSweep) + chord * 0.3);
    rudder.add(seg);
  }
  group.add(rudder);
  parts.rudder = rudder;

  // tailplane with elevators
  const hstab = new THREE.Group();
  hstab.position.set(0, t.hstabY, -L / 2 + t.hstabX);
  const sw = Math.tan(t.hstabSweepLE * DEG2RAD);
  const di = Math.tan(t.hstabDihedral * DEG2RAD);
  for (const side of [1, -1]) {
    const p0 = { x: 0, y: 0, zLE: 0, chord: t.hstabRootChord };
    const p1 = { x: t.hstabSemiSpan, y: t.hstabSemiSpan * di, zLE: t.hstabSemiSpan * sw, chord: t.hstabTipChord };
    // reuse the fin plate builder rotated flat would lose dihedral; build directly
    const v = [
      [p0.x * side, p0.y + 0.30, p0.zLE], [p0.x * side, p0.y + 0.30, p0.zLE + p0.chord],
      [p1.x * side, p1.y + 0.10, p1.zLE], [p1.x * side, p1.y + 0.10, p1.zLE + p1.chord],
      [p0.x * side, p0.y - 0.30, p0.zLE], [p0.x * side, p0.y - 0.30, p0.zLE + p0.chord],
      [p1.x * side, p1.y - 0.10, p1.zLE], [p1.x * side, p1.y - 0.10, p1.zLE + p1.chord]
    ];
    let faces = [
      [0, 2, 1], [1, 2, 3], [4, 5, 6], [5, 7, 6],
      [0, 4, 2], [2, 4, 6], [1, 3, 5], [3, 7, 5], [2, 6, 3], [3, 6, 7]
    ];
    if (side < 0) faces = faces.map(([a, b, c]) => [a, c, b]);
    const pos = [], idx = [];
    for (const p of v) pos.push(...p);
    for (const f of faces) idx.push(...f);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    const plate = new THREE.Mesh(geo, materials.tailplane);
    plate.castShadow = true;
    hstab.add(plate);
  }
  // one elevator bar spanning both sides (entity rotates elevator.rotation.x)
  const elev = new THREE.Mesh(
    new THREE.BoxGeometry(t.hstabSemiSpan * 1.7, 0.16, t.hstabRootChord * 0.24), materials.tailplane);
  elev.position.set(0, 0, t.hstabRootChord * 0.92);
  hstab.add(elev);
  parts.elevator = elev;
  parts.hstab = hstab;
  group.add(hstab);

  return group;
}
