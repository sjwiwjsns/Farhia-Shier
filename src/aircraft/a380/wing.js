// A380 wing: cranked three-break planform lofted per segment, with 8 leading-
// edge slats, two big flap bodies + track fairings, 8 spoiler panels, an
// outboard aileron and the signature up/down wingtip fence — per side.
// Animated surfaces are exposed as hinge groups matching the entity contract.
import * as THREE from 'three';
import { DEG2RAD, lerp, clamp } from '../../core/math.js';
import { A380 } from './spec.js';

// Piecewise planform lookups (right-wing local frame: +x outboard, +z aft,
// origin at the leading-edge root).
function breaks() {
  const w = A380.wing;
  const list = [{ x: 0, y: 0, zLE: 0, chord: w.segments[0].chord0 }];
  for (const seg of w.segments) {
    const prev = list[list.length - 1];
    const dx = (seg.eta1 - seg.eta0) * w.semiSpan;
    list.push({
      x: prev.x + dx,
      y: prev.y + dx * Math.tan(seg.dihedral * DEG2RAD),
      zLE: prev.zLE + dx * Math.tan(seg.sweepLE * DEG2RAD),
      chord: seg.chord1
    });
  }
  return list;
}
const BRK = breaks();

export function planformAt(eta) {
  const w = A380.wing;
  const x = eta * w.semiSpan;
  let i = 0;
  while (i < BRK.length - 2 && BRK[i + 1].x < x) i++;
  const a = BRK[i], b = BRK[i + 1];
  const f = b.x > a.x ? (x - a.x) / (b.x - a.x) : 0;
  return {
    x,
    y: lerp(a.y, b.y, f),
    zLE: lerp(a.zLE, b.zLE, f),
    chord: lerp(a.chord, b.chord, f)
  };
}

// Tapered slab between two planform stations. side: 1 = right, -1 = left.
function panelGeometry(p0, p1, side, thickFrac0, thickFrac1) {
  const th0 = p0.chord * thickFrac0, th1 = p1.chord * thickFrac1;
  const v = [
    [p0.x * side, p0.y + th0 / 2, p0.zLE], [p0.x * side, p0.y + th0 / 2, p0.zLE + p0.chord],
    [p1.x * side, p1.y + th1 / 2, p1.zLE], [p1.x * side, p1.y + th1 / 2, p1.zLE + p1.chord],
    [p0.x * side, p0.y - th0 / 2, p0.zLE], [p0.x * side, p0.y - th0 / 2, p0.zLE + p0.chord],
    [p1.x * side, p1.y - th1 / 2, p1.zLE], [p1.x * side, p1.y - th1 / 2, p1.zLE + p1.chord]
  ];
  let faces = [
    [0, 2, 1], [1, 2, 3], [4, 5, 6], [5, 7, 6],
    [0, 4, 2], [2, 4, 6], [1, 3, 5], [3, 7, 5], [2, 6, 3], [3, 6, 7]
  ];
  if (side < 0) faces = faces.map(([a, b, c]) => [a, c, b]);
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

// Aligns a surface element with the local leading- or trailing-edge line.
function edgeYaw(eta0, eta1, side, trailing) {
  const p0 = planformAt(eta0), p1 = planformAt(eta1);
  const dz = trailing
    ? (p1.zLE + p1.chord) - (p0.zLE + p0.chord)
    : p1.zLE - p0.zLE;
  const dx = p1.x - p0.x;
  return -Math.atan2(dz, dx) * side + (side < 0 ? Math.PI : 0);
}

export function buildA380Wing(side, materials, parts, detail) {
  const w = A380.wing;
  const grp = new THREE.Group();
  const L = A380.length;
  grp.position.set(0, w.rootY, -L / 2 + w.rootX);

  // ---- main panels
  let eta = 0;
  const thickRoot = w.thickness, thickTip = 0.075;
  for (const seg of w.segments) {
    const p0 = planformAt(seg.eta0), p1 = planformAt(seg.eta1);
    const tf0 = lerp(thickRoot, thickTip, seg.eta0);
    const tf1 = lerp(thickRoot, thickTip, seg.eta1);
    const mesh = new THREE.Mesh(panelGeometry(p0, p1, side, tf0, tf1), materials.wing);
    mesh.castShadow = mesh.receiveShadow = true;
    grp.add(mesh);
    eta = seg.eta1;
  }

  // ---- leading-edge slats
  if (detail > 0.55) {
    for (const [e0, e1] of w.slats) {
      const p0 = planformAt(e0), p1 = planformAt(e1);
      const mid = planformAt((e0 + e1) / 2);
      const len = Math.hypot(p1.x - p0.x, p1.zLE - p0.zLE);
      const slat = new THREE.Mesh(
        new THREE.BoxGeometry(len, mid.chord * 0.035 + 0.10, mid.chord * 0.11), materials.wing);
      slat.position.set(mid.x * side, mid.y + 0.02, mid.zLE + mid.chord * 0.02);
      slat.rotation.y = edgeYaw(e0, e1, side, false);
      grp.add(slat);
    }
  }

  // ---- flaps (hinge groups; entity rotates hinge.rotation.x)
  for (const fl of w.flaps) {
    const mid = planformAt((fl.eta0 + fl.eta1) / 2);
    const p0 = planformAt(fl.eta0), p1 = planformAt(fl.eta1);
    const fc = mid.chord * fl.chordFrac;
    const len = Math.hypot(p1.x - p0.x, (p1.zLE + p1.chord) - (p0.zLE + p0.chord));
    const hinge = new THREE.Group();
    hinge.position.set(mid.x * side, mid.y - 0.06, mid.zLE + mid.chord - fc);
    hinge.rotation.y = edgeYaw(fl.eta0, fl.eta1, side, true);
    const panel = new THREE.Mesh(new THREE.BoxGeometry(len * 0.98, 0.14, fc), materials.wing);
    panel.position.z = fc / 2;
    panel.castShadow = true;
    hinge.add(panel);
    grp.add(hinge);
    parts.flaps.push({ hinge, side });
  }

  // ---- flap track fairings (teardrop pods under the trailing edge)
  if (detail > 0.55) {
    for (const eta of w.flapTrackFairings) {
      const p = planformAt(eta);
      const pod = new THREE.Mesh(new THREE.CapsuleGeometry(0.34, 2.4, 4, 8), materials.belly);
      pod.rotation.x = Math.PI / 2;
      pod.position.set(p.x * side, p.y - 0.42, p.zLE + p.chord * 0.86);
      pod.castShadow = true;
      grp.add(pod);
    }
  }

  // ---- spoiler panels (hinge at the forward edge, panel extends aft)
  const sp = w.spoilers;
  for (let i = 0; i < sp.count; i++) {
    const e0 = sp.eta0 + (i / sp.count) * (sp.eta1 - sp.eta0);
    const e1 = sp.eta0 + ((i + 0.88) / sp.count) * (sp.eta1 - sp.eta0);
    const mid = planformAt((e0 + e1) / 2);
    const sc = mid.chord * sp.chordFrac;
    const len = (e1 - e0) * w.semiSpan;
    const hinge = new THREE.Group();
    hinge.position.set(mid.x * side, mid.y + mid.chord * lerp(thickRoot, thickTip, mid.x / w.semiSpan) * 0.5 + 0.03,
      mid.zLE + mid.chord * 0.58 - sc / 2);
    hinge.rotation.y = edgeYaw(e0, e1, side, true);
    const panel = new THREE.Mesh(new THREE.BoxGeometry(len, 0.07, sc), materials.wing);
    panel.position.z = sc / 2;
    hinge.add(panel);
    grp.add(hinge);
    parts.spoilers.push({ hinge, side });
  }

  // ---- aileron
  {
    const al = w.aileron;
    const mid = planformAt((al.eta0 + al.eta1) / 2);
    const p0 = planformAt(al.eta0), p1 = planformAt(al.eta1);
    const ac = mid.chord * al.chordFrac;
    const len = Math.hypot(p1.x - p0.x, (p1.zLE + p1.chord) - (p0.zLE + p0.chord));
    const hinge = new THREE.Group();
    hinge.position.set(mid.x * side, mid.y - 0.02, mid.zLE + mid.chord - ac);
    hinge.rotation.y = edgeYaw(al.eta0, al.eta1, side, true);
    const panel = new THREE.Mesh(new THREE.BoxGeometry(len * 0.96, 0.11, ac), materials.wing);
    panel.position.z = ac / 2;
    hinge.add(panel);
    grp.add(hinge);
    (side > 0 ? parts.ailR : parts.ailL).push({ hinge, side });
  }

  // ---- wingtip fence (up + down plates, the A380 signature)
  {
    const tip = planformAt(1);
    const tf = w.tipFence;
    const up = new THREE.Mesh(panelGeometry(
      { x: 0, y: 0, zLE: 0, chord: tf.depth },
      { x: tf.height * 0.62, y: tf.height * 0.78, zLE: tf.depth * 0.45, chord: tf.depth * 0.45 },
      side, 0.05, 0.05), materials.wing);
    const dn = new THREE.Mesh(panelGeometry(
      { x: 0, y: 0, zLE: 0, chord: tf.depth * 0.8 },
      { x: tf.height * 0.30, y: -tf.height * 0.42, zLE: tf.depth * 0.4, chord: tf.depth * 0.35 },
      side, 0.06, 0.06), materials.wing);
    for (const m of [up, dn]) {
      m.position.set(tip.x * side, tip.y, tip.zLE + tip.chord * 0.18);
      m.castShadow = true;
      grp.add(m);
    }
    // nav light on the tip
    const nav = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 5),
      new THREE.MeshBasicMaterial({ color: side > 0 ? 0x2bd94a : 0xd93a2b }));
    nav.position.set(tip.x * side, tip.y + 0.05, tip.zLE + tip.chord * 0.3);
    grp.add(nav);
  }

  return grp;
}
