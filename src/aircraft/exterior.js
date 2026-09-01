// Exterior detail layer — the "hundreds of pieces per airframe" pass.
//
// Takes a built airframe (generic factory or the bespoke A380) and adds the
// parts that make a real airliner read as a machine rather than a shape:
//   wing     six-segment slats, double-slotted flaps with vanes and end
//            ribs, six spoiler panels with actuators, aileron with horn and
//            tab, flap-track canoes, vortex generators, static wicks, fuel
//            panels, landing light, nav/strobe, winglet fillet/cap/strip
//   hull     door frames and handles, cargo doors, overwing exits, VHF /
//            satcom / GPS / ELT / TCAS antennas, pitots, AoA vanes, static
//            ports, beacons, APU, belly fairing, windscreen posts + wipers,
//            radome seam, tail skid, drain masts, service panels
//   engine   22-blade fan disc + spinner, acoustic ring, fan-case band,
//            cowl seams and latches, strake, exhaust plug, nozzle chevrons
//            (modern types), reverser cascades on the sleeve, pylon fairings
//   tail     split rudder with horn + wicks, split elevators with tabs +
//            wicks, LE strips, tip caps, dorsal fillet, VOR rods, lights
//   gear     torque links, brake discs, hubcaps, axle beams, oleo collars,
//            gear doors
//
// Every piece is modelled individually from the airframe's real dimensions.
// Static pieces are then BATCHED per material into one mesh per parent, so
// ~500 pieces cost a few dozen draw calls; animated pieces (slats, flaps,
// spoilers, ailerons, rudder, elevator, fan discs, cascades) stay separate
// and plug straight into the entity's existing hinge-group contract.
import * as THREE from 'three';
import { lerp } from '../core/math.js';

// ------------------------------------------------------------- batching
const UNIT = {
  box: new THREE.BoxGeometry(1, 1, 1),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 10),
  cyl6: new THREE.CylinderGeometry(1, 1, 1, 6),
  cone: new THREE.ConeGeometry(1, 1, 10),
  sphere: new THREE.SphereGeometry(1, 10, 7),
  disc: new THREE.CylinderGeometry(1, 1, 1, 16)
};
const _o = new THREE.Object3D();
const _m = new THREE.Matrix4();

function mergeNonIndexed(list) {
  let n = 0;
  for (const g of list) n += g.getAttribute('position').count;
  const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), uv = new Float32Array(n * 2);
  let off = 0;
  for (const g of list) {
    const p = g.getAttribute('position'), nn = g.getAttribute('normal'), u = g.getAttribute('uv');
    pos.set(p.array, off * 3);
    if (nn) nor.set(nn.array, off * 3);
    if (u) uv.set(u.array, off * 2);
    off += p.count;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geo;
}

export class PieceBatcher {
  constructor() { this.buckets = new Map(); this.count = 0; }
  // t: { x,y,z, rx,ry,rz, order, sx,sy,sz }
  add(geo, material, t = {}) {
    _o.position.set(t.x || 0, t.y || 0, t.z || 0);
    _o.rotation.set(t.rx || 0, t.ry || 0, t.rz || 0, t.order || 'XYZ');
    _o.scale.set(t.sx ?? 1, t.sy ?? 1, t.sz ?? 1);
    _o.updateMatrix();
    return this.addM(geo, material, _o.matrix);
  }
  addM(geo, material, matrix) {
    const g = (geo.index ? geo.toNonIndexed() : geo.clone()).applyMatrix4(matrix);
    if (!this.buckets.has(material)) this.buckets.set(material, []);
    this.buckets.get(material).push(g);
    this.count++;
    return g;
  }
  flush(parent, shadow = true) {
    for (const [material, list] of this.buckets) {
      const mesh = new THREE.Mesh(mergeNonIndexed(list), material);
      mesh.castShadow = shadow;
      mesh.receiveShadow = shadow;
      parent.add(mesh);
      for (const g of list) g.dispose();
    }
    this.buckets.clear();
  }
}

// Euler that points a piece's local +X along (dx,dy,dz): Rz (dihedral rise)
// then Ry (sweep) — three's 'YZX' intrinsic order applies Z first.
function alignX(dx, dy, dz) {
  const L = Math.hypot(dx, dy, dz) || 1;
  return { ry: Math.atan2(-dz, dx), rz: Math.asin(Math.max(-1, Math.min(1, dy / L))), order: 'YZX', L };
}

// ------------------------------------------------------------------ wing
// W: { side, parent, halfSpan, chordAt(f), leAt(f), yAt(f), thickAt(f),
//      tipChord, wingletKind, supersonic }   (wing-local frame: root LE at
//      origin, +x outboard on the right wing, +z aft)
function detailWing(W, mats, parts, opt) {
  const { side, parent, halfSpan, chordAt, leAt, yAt, thickAt } = W;
  const B = new PieceBatcher();
  let n = 0;
  const X = (f) => f * halfSpan * side;
  const teAt = (f) => leAt(f) + chordAt(f);
  const edge = (f0, f1, te) => {
    const dx = X(f1) - X(f0), dy = yAt(f1) - yAt(f0);
    const dz = (te ? teAt(f1) : leAt(f1)) - (te ? teAt(f0) : leAt(f0));
    return alignX(dx, dy, dz);
  };
  const hingeAt = (f, y, z, e) => {
    const h = new THREE.Group();
    h.position.set(X(f), y, z);
    h.rotation.set(0, e.ry, e.rz, e.order);
    return h;
  };

  if (opt.surfaces && !W.supersonic) {
    // ---- leading-edge slats (six segments, tracks, droop on deploy)
    const nS = 6, f0s = 0.08, f1s = 0.96, gap = 0.012;
    for (let i = 0; i < nS; i++) {
      const a = f0s + (i / nS) * (f1s - f0s) + gap, b = f0s + ((i + 1) / nS) * (f1s - f0s) - gap;
      const fm = (a + b) / 2, c = chordAt(fm), th = thickAt(fm), e = edge(a, b, false);
      const hinge = hingeAt(fm, yAt(fm) - th * 0.04, leAt(fm) + c * 0.03, e);
      const lb = new PieceBatcher();
      lb.add(UNIT.box, mats.wing, { sx: e.L * 0.97, sy: th * 0.5 + 0.05, sz: c * 0.10, z: c * 0.02 });
      lb.add(UNIT.box, mats.wing, { sx: e.L * 0.97, sy: th * 0.18, sz: c * 0.05, z: c * 0.09, y: -th * 0.12 });
      for (const k of [-0.3, 0.3]) lb.add(UNIT.box, mats.grey, { x: k * e.L, sx: 0.08, sy: th * 0.22, sz: c * 0.16, z: c * 0.16 });
      n += lb.count;
      lb.flush(hinge);
      parent.add(hinge);
      // real slats swing out ahead of and BELOW the leading edge on their tracks
      parts.slats.push({ hinge, side, base: hinge.position.clone(), out: new THREE.Vector3(0, -th * 0.95, -c * 0.12), droop: 0.42 });
    }
    // ---- flaps: double-slotted body + aft vane + trailing tab + end ribs
    for (const [a, b, cf] of [[0.12, 0.42, 0.30], [0.44, 0.68, 0.27]]) {
      const fm = (a + b) / 2, c = chordAt(fm), fc = c * cf, th = thickAt(fm), e = edge(a, b, true);
      const hinge = hingeAt(fm, yAt(fm) - th * 0.05, teAt(fm) - fc, e);
      const lb = new PieceBatcher();
      lb.add(UNIT.box, mats.wing, { sx: e.L * 0.96, sy: th * 0.42, sz: fc * 0.62, z: fc * 0.31 });
      lb.add(UNIT.box, mats.wing, { sx: e.L * 0.94, sy: th * 0.22, sz: fc * 0.40, z: fc * 0.78, y: -th * 0.14 });
      lb.add(UNIT.box, mats.wing, { sx: e.L * 0.96, sy: th * 0.10, sz: fc * 0.12, z: fc * 0.98, y: -th * 0.06 });
      for (const k of [-0.48, 0.48]) lb.add(UNIT.box, mats.grey, { x: k * e.L, sx: 0.06, sy: th * 0.5, sz: fc * 0.9, z: fc * 0.45 });
      n += lb.count;
      lb.flush(hinge);
      parent.add(hinge);
      parts.flaps.push({ hinge, side });
    }
    // ---- spoilers: six panels, each with its actuator
    const nSp = 6, s0 = 0.14, s1 = 0.66;
    for (let i = 0; i < nSp; i++) {
      const a = s0 + (i / nSp) * (s1 - s0) + 0.008, b = s0 + ((i + 1) / nSp) * (s1 - s0) - 0.008;
      const fm = (a + b) / 2, c = chordAt(fm), th = thickAt(fm), sc = c * 0.17, e = edge(a, b, true);
      const hinge = hingeAt(fm, yAt(fm) + th * 0.5 + 0.02, leAt(fm) + c * 0.55, e);
      const lb = new PieceBatcher();
      lb.add(UNIT.box, mats.wing, { sx: e.L * 0.95, sy: 0.06, sz: sc, z: sc / 2 });
      lb.add(UNIT.cyl6, mats.grey, { sx: 0.035, sy: sc * 0.5, sz: 0.035, z: sc * 0.55, y: -0.05, rx: -0.9 });
      n += lb.count;
      lb.flush(hinge);
      parent.add(hinge);
      parts.spoilers.push({ hinge, side });
    }
    // ---- aileron with balance horn and trim tab
    {
      const a = 0.71, b = 0.95, fm = (a + b) / 2, c = chordAt(fm), ac = c * 0.24, th = thickAt(fm), e = edge(a, b, true);
      const hinge = hingeAt(fm, yAt(fm), teAt(fm) - ac, e);
      const lb = new PieceBatcher();
      lb.add(UNIT.box, mats.wing, { sx: e.L * 0.96, sy: th * 0.36, sz: ac * 0.85, z: ac * 0.43 });
      lb.add(UNIT.box, mats.wing, { sx: e.L * 0.5, sy: th * 0.14, sz: ac * 0.18, z: ac * 0.94 });
      lb.add(UNIT.box, mats.grey, { x: e.L * 0.35, sx: 0.10, sy: th * 0.5, sz: ac * 0.35, z: ac * 0.1, y: -th * 0.25 });
      n += lb.count;
      lb.flush(hinge);
      parent.add(hinge);
      (side > 0 ? parts.ailR : parts.ailL).push({ hinge, side });
    }
  }

  if (!W.supersonic) {
    // ---- flap-track canoe fairings (+ tail fin each)
    for (const f of opt.fairings || [0.20, 0.34, 0.50, 0.63]) {
      const c = chordAt(f), th = thickAt(f), r = Math.max(c * 0.032, 0.18), L = c * 0.36;
      const caps = new THREE.CapsuleGeometry(r, L, 3, 8);
      B.add(caps, mats.belly, { x: X(f), y: yAt(f) - th * 0.45 - r * 0.4, z: teAt(f) - L * 0.30, rx: Math.PI / 2 });
      B.add(UNIT.box, mats.belly, { x: X(f), y: yAt(f) - th * 0.45 - r * 0.4, z: teAt(f) + L * 0.34, sx: r * 0.5, sy: r * 1.3, sz: r * 1.6 });
    }
    // ---- vortex generators: a row of small wedges outboard on the upper skin
    const nVG = opt.vgs ?? 28;
    for (let i = 0; i < nVG; i++) {
      const f = 0.15 + (i / (nVG - 1)) * 0.80, c = chordAt(f), th = thickAt(f);
      const h = 0.035 + th * 0.10;
      B.add(UNIT.box, mats.grey, {
        x: X(f), y: yAt(f) + th * 0.5 + h / 2, z: leAt(f) + c * 0.27,
        sx: 0.018, sy: h, sz: 0.15, ry: (i % 2 ? 0.32 : -0.32)
      });
    }
    // ---- static discharge wicks on the trailing edge (outboard)
    for (let i = 0; i < 8; i++) {
      const f = 0.64 + (i / 7) * 0.33, th = thickAt(f);
      B.add(UNIT.cyl6, mats.dark, { x: X(f), y: yAt(f) - th * 0.02, z: teAt(f) + 0.18, sx: 0.011, sy: 0.36, sz: 0.011, rx: Math.PI / 2 });
    }
    // ---- fuel access panels on the underside
    for (let i = 0; i < 8; i++) {
      const f = 0.20 + (i / 7) * 0.70, th = thickAt(f), c = chordAt(f);
      B.add(UNIT.disc, mats.metal, { x: X(f), y: yAt(f) - th * 0.5 - 0.005, z: leAt(f) + c * 0.42, sx: 0.16, sy: 0.012, sz: 0.16 });
    }
    // ---- inboard landing light (housing + lens) on the leading edge
    {
      const f = 0.26, c = chordAt(f), th = thickAt(f);
      B.add(UNIT.box, mats.grey, { x: X(f), y: yAt(f) - th * 0.05, z: leAt(f) + c * 0.02, sx: 0.5, sy: th * 0.45, sz: 0.30 });
      B.add(UNIT.box, mats.glass, { x: X(f), y: yAt(f) - th * 0.05, z: leAt(f) - 0.02, sx: 0.36, sy: th * 0.30, sz: 0.04 });
    }
    // ---- wingtip lights: nav (red L / green R) + white strobe
    {
      const th = thickAt(0.99), c = chordAt(0.99);
      B.add(UNIT.box, mats.grey, { x: X(0.995), y: yAt(0.99), z: leAt(0.99) + c * 0.12, sx: 0.12, sy: th * 0.5 + 0.03, sz: 0.30 });
      B.add(UNIT.sphere, side > 0 ? mats.navGreen : mats.navRed, { x: X(0.995) + side * 0.06, y: yAt(0.99), z: leAt(0.99) + c * 0.10, sx: 0.09, sy: 0.09, sz: 0.09 });
      B.add(UNIT.sphere, mats.strobe, { x: X(0.995) + side * 0.06, y: yAt(0.99), z: leAt(0.99) + c * 0.24, sx: 0.07, sy: 0.07, sz: 0.07 });
    }
    // ---- winglet: root fillet, leading-edge strip, tip cap, wick
    if (W.wingletKind && W.wingletKind !== 'none') {
      const tc = W.tipChord, th = thickAt(1);
      const z0 = leAt(1) + tc * 0.15;
      B.add(UNIT.box, mats.wing, { x: X(1), y: yAt(1) + th * 0.3, z: z0 + tc * 0.35, sx: 0.45, sy: th * 0.9, sz: tc * 0.75, rz: side * 0.35 });
      B.add(UNIT.box, mats.metal, { x: X(1) + side * 0.12, y: yAt(1) + th * 0.9, z: z0 - tc * 0.02, sx: 0.06, sy: th * 1.8, sz: 0.05, rz: side * 0.6 });
      B.add(UNIT.box, mats.wing, { x: X(1) + side * 0.25, y: yAt(1) + th * 1.9, z: z0 + tc * 0.3, sx: 0.12, sy: 0.12, sz: tc * 0.25, rz: side * 0.9 });
      B.add(UNIT.cyl6, mats.dark, { x: X(1) + side * 0.2, y: yAt(1) + th * 1.5, z: z0 + tc * 0.62, sx: 0.011, sy: 0.3, sz: 0.011, rx: Math.PI / 2 });
    }
  } else {
    // delta wing: three elevon segments per side (pitch + roll), each with
    // its actuator fairing; static wicks; tip lights
    if (opt.surfaces) {
      for (const [a, b] of [[0.30, 0.52], [0.54, 0.76], [0.78, 0.97]]) {
        const fm = (a + b) / 2, c = chordAt(fm), ec = c * 0.16, th = thickAt(fm), e = edge(a, b, true);
        const hinge = hingeAt(fm, yAt(fm), teAt(fm) - ec, e);
        const lb = new PieceBatcher();
        lb.add(UNIT.box, mats.wing, { sx: e.L * 0.95, sy: Math.max(th * 0.35, 0.08), sz: ec * 0.9, z: ec * 0.45 });
        lb.add(UNIT.box, mats.grey, { x: -e.L * 0.38, y: -0.12, z: ec * 0.12, sx: 0.14, sy: Math.max(th * 0.5, 0.14), sz: ec * 0.32 });
        lb.add(UNIT.box, mats.grey, { x: e.L * 0.38, y: -0.12, z: ec * 0.12, sx: 0.14, sy: Math.max(th * 0.5, 0.14), sz: ec * 0.32 });
        n += lb.count;
        lb.flush(hinge);
        parent.add(hinge);
        parts.elevons.push({ hinge, side });
      }
    }
    for (let i = 0; i < 10; i++) {
      const f = 0.30 + (i / 9) * 0.66;
      B.add(UNIT.cyl6, mats.dark, { x: X(f), y: yAt(f), z: teAt(f) + 0.18, sx: 0.011, sy: 0.36, sz: 0.011, rx: Math.PI / 2 });
    }
    for (let i = 0; i < 6; i++) {
      const f = 0.25 + (i / 5) * 0.6, c = chordAt(f), th = thickAt(f);
      B.add(UNIT.disc, mats.metal, { x: X(f), y: yAt(f) - th * 0.5 - 0.005, z: leAt(f) + c * 0.5, sx: 0.18, sy: 0.012, sz: 0.18 });
    }
    const c = chordAt(0.99);
    B.add(UNIT.sphere, side > 0 ? mats.navGreen : mats.navRed, { x: X(0.995), y: yAt(0.99), z: leAt(0.99) + c * 0.3, sx: 0.09, sy: 0.09, sz: 0.09 });
    B.add(UNIT.sphere, mats.strobe, { x: X(0.995), y: yAt(0.99), z: leAt(0.99) + c * 0.5, sx: 0.07, sy: 0.07, sz: 0.07 });
  }
  n += B.count;
  B.flush(parent);
  return n;
}

// ------------------------------------------------------------------ hull
// F: { len, at(t, phi) -> {x,y} (phi 0 = keel, PI = crown, PI/2 = right),
//      R, wingZ, rootChord, wingY, supersonic, deck }
function detailFuselage(F, mats, group, opt) {
  const { len, at } = F;
  const B = new PieceBatcher();
  const Z = (t) => -len / 2 + t * len;
  // Surface-mounted piece: local +X = outward normal, +Y = around the ring
  // (vertical on the flanks), +Z = along the fuselage.
  const mount = (geo, mat, t, phi, o = {}) => {
    const p = at(t, phi);
    const N = new THREE.Vector3(Math.sin(phi), -Math.cos(phi), 0);
    const T = new THREE.Vector3(Math.cos(phi), Math.sin(phi), 0);
    const Zv = new THREE.Vector3(0, 0, 1);
    const basis = new THREE.Matrix4().makeBasis(N, T, Zv);
    _o.position.set(o.ox || 0, o.oy || 0, o.oz || 0);
    _o.rotation.set(o.rx || 0, o.ry || 0, o.rz || 0);
    _o.scale.set(o.sx ?? 1, o.sy ?? 1, o.sz ?? 1);
    _o.updateMatrix();
    _m.copy(basis).multiply(_o.matrix);
    _m.setPosition(
      p.x + N.x * (o.ox || 0) + T.x * (o.oy || 0),
      p.y + N.y * (o.ox || 0) + T.y * (o.oy || 0),
      Z(t) + (o.oz || 0)
    );
    return B.addM(geo, mat, _m);
  };
  // door outline: top/bottom bars + 3-segment uprights (follow the hull arc)
  const doorFrame = (t, phi, w, h, r, handle = true) => {
    const dphi = (h / 2) / r;
    mount(UNIT.box, mats.dark, t, phi + dphi, { ox: 0.012, sx: 0.025, sy: 0.05, sz: w });
    mount(UNIT.box, mats.dark, t, phi - dphi, { ox: 0.012, sx: 0.025, sy: 0.05, sz: w });
    for (const k of [-0.34, 0, 0.34]) {
      for (const s of [-1, 1]) {
        mount(UNIT.box, mats.dark, t + (s * w / 2) / len, phi + k * dphi * 2, { ox: 0.012, sx: 0.025, sy: h * 0.34, sz: 0.05 });
      }
    }
    if (handle) mount(UNIT.box, mats.metal, t + (w * 0.34) / len, phi, { ox: 0.03, sx: 0.03, sy: 0.07, sz: 0.24 });
  };

  const R = F.R;
  const sideR = Math.PI / 2, sideL = -Math.PI / 2, top = Math.PI, bot = 0;
  if (!F.supersonic) {
    const doorT = len > 60 ? [0.09, 0.28, 0.55, 0.86] : len > 40 ? [0.09, 0.62, 0.86] : [0.09, 0.86];
    const dh = Math.min(1.9, R * 0.9), dw = Math.min(1.07, R * 0.55);
    for (const t of doorT) for (const phi of [sideR, sideL]) doorFrame(t, phi, dw, dh, at(t, phi).x * (phi > 0 ? 1 : -1) || R);
    // cargo doors: forward + aft holds, lower right
    for (const t of [0.20, 0.72]) doorFrame(t, sideR - 0.55, Math.min(2.6, R * 1.2), Math.min(1.6, R * 0.75), R, false);
    // overwing exits on narrowbodies
    if (len < 45) for (const t of [0.46, 0.51]) for (const phi of [sideR, sideL]) doorFrame(t, phi + (phi > 0 ? 0.12 : -0.12), 0.5, 0.9, R, false);
  } else {
    // supersonic hull: two slim doors per side, the nose probe, visor seams
    for (const t of [0.16, 0.78]) for (const phi of [sideR, sideL]) doorFrame(t, phi, 0.75, Math.min(1.5, R * 0.9), R);
    const tip = at(0.0, top);
    B.add(UNIT.cyl6, mats.metal, { y: (tip.y + at(0.0, bot).y) / 2, z: Z(0) - 1.7, sx: 0.035, sy: 3.4, sz: 0.035, rx: Math.PI / 2 });
    B.add(UNIT.cone, mats.metal, { y: (tip.y + at(0.0, bot).y) / 2, z: Z(0) - 3.55, sx: 0.035, sy: 0.3, sz: 0.035, rx: -Math.PI / 2 });
    for (const u of [0.10, 0.19]) { const p = at(u, sideR); B.add(new THREE.TorusGeometry(1, 0.012, 4, 28), mats.dark, { y: (at(u, top).y + at(u, bot).y) / 2, z: Z(u), sx: p.x, sy: (at(u, top).y - at(u, bot).y) / 2 }); }
  }
  {
    // antennas: VHF blades (3 top, 1 bottom), TCAS pair, GPS puck, satcom, ELT
    for (const t of [0.20, 0.44, 0.72]) mount(UNIT.box, mats.white, t, top, { ox: 0.15, sx: 0.30, sy: 0.04, sz: 0.42, rz: 0, ry: 0 });
    mount(UNIT.box, mats.white, 0.33, bot, { ox: 0.13, sx: 0.26, sy: 0.04, sz: 0.38 });
    for (const t of [0.15, 0.17]) mount(UNIT.box, mats.white, t, bot + 0.2, { ox: 0.06, sx: 0.12, sy: 0.05, sz: 0.16 });
    mount(UNIT.disc, mats.white, 0.30, top, { ox: 0.025, sx: 0.16, sy: 0.05, sz: 0.16, rz: Math.PI / 2 });
    mount(new THREE.CapsuleGeometry(0.26, 1.4, 3, 8), mats.white, 0.55, top, { ox: 0.12, rx: Math.PI / 2 });
    mount(UNIT.box, mats.white, 0.80, top, { ox: 0.05, sx: 0.10, sy: 0.14, sz: 0.28 });
    // pitot probes (2 left, 1 right) with masts, AoA vanes, static ports
    for (const [t, phi] of [[0.075, sideL + 0.10], [0.075, sideL - 0.10], [0.075, sideR]]) {
      mount(UNIT.box, mats.metal, t, phi, { ox: 0.05, sx: 0.10, sy: 0.05, sz: 0.09 });
      mount(UNIT.cyl6, mats.metal, t, phi, { ox: 0.10, oz: -0.16, sx: 0.013, sy: 0.30, sz: 0.013, rx: Math.PI / 2 });
    }
    for (const phi of [sideR, sideL]) {
      mount(UNIT.disc, mats.metal, 0.088, phi, { ox: 0.01, sx: 0.09, sy: 0.02, sz: 0.09, rz: Math.PI / 2 });
      mount(UNIT.box, mats.metal, 0.088, phi, { ox: 0.06, sx: 0.10, sy: 0.02, sz: 0.09 });
      mount(UNIT.box, mats.metal, 0.115, phi, { ox: 0.006, sx: 0.012, sy: 0.18, sz: 0.24 });
    }
    // anti-collision beacons + bases
    for (const [t, phi] of [[0.50, top], [0.44, bot]]) {
      mount(UNIT.disc, mats.dark, t, phi, { ox: 0.03, sx: 0.13, sy: 0.06, sz: 0.13, rz: Math.PI / 2 });
      mount(UNIT.sphere, mats.beacon, t, phi, { ox: 0.11, sx: 0.09, sy: 0.09, sz: 0.09 });
    }
    // APU: exhaust duct at the cone, inlet door on the crown, tail cap
    const tailY = at(0.985, top).y - (at(0.985, top).y - at(0.985, bot).y) * 0.35;
    B.add(UNIT.cyl, mats.dark, { x: 0, y: tailY, z: Z(0.99), sx: R * 0.16, sy: R * 0.5, sz: R * 0.16, rx: Math.PI / 2 });
    B.add(UNIT.cone, mats.metal, { x: 0, y: tailY, z: Z(1.0) + R * 0.12, sx: R * 0.13, sy: R * 0.3, sz: R * 0.13, rx: Math.PI / 2 });
    mount(UNIT.box, mats.grey, 0.955, top, { ox: 0.02, sx: 0.05, sy: 0.32, sz: 0.55 });
    // belly fairing + wing-root fillets (subsonic only — deltas blend in)
    if (F.rootChord && !F.supersonic) {
      const bw = R * 0.62;
      const fair = new THREE.CapsuleGeometry(bw, F.rootChord * 0.85, 4, 12);
      B.add(fair, mats.belly, { x: 0, y: at(0.5, bot).y + bw * 0.55, z: F.wingZ + F.rootChord * 0.48, rx: Math.PI / 2, sy: 0.55 });
      for (const s of [-1, 1]) B.add(UNIT.box, mats.belly, { x: s * R * 0.95, y: F.wingY + 0.1, z: F.wingZ + F.rootChord * 0.45, sx: R * 0.5, sy: 0.22, sz: F.rootChord * 0.8, rz: s * 0.55 });
    }
    // drain masts, service panels, tail skid
    for (const t of [0.38, 0.80]) mount(UNIT.box, mats.metal, t, bot, { ox: 0.10, sx: 0.20, sy: 0.03, sz: 0.06, rz: 0, ry: 0.35 });
    for (const t of [0.25, 0.60]) mount(UNIT.box, mats.metal, t, bot + 0.35, { ox: 0.006, sx: 0.012, sy: 0.32, sz: 0.32 });
    mount(UNIT.box, mats.dark, 0.90, bot, { ox: 0.10, sx: 0.20, sy: 0.16, sz: 0.55 });
  }
  // windscreen posts + wipers, radome seam (all types)
  for (const dphi of [-0.30, 0, 0.30]) mount(UNIT.box, mats.dark, 0.047, top + dphi, { ox: 0.012, sx: 0.025, sy: 0.05, sz: R * 0.55 });
  for (const s of [-1, 1]) mount(UNIT.box, mats.dark, 0.05, top + s * 0.18, { ox: 0.03, sx: 0.02, sy: 0.03, sz: R * 0.32, ry: s * 0.4 });
  {
    const p = at(0.035, top), q = at(0.035, bot);
    const rr = (p.y - q.y) / 2;
    const seam = new THREE.TorusGeometry(1, 0.012, 4, 28);
    B.add(seam, mats.dark, { x: 0, y: (p.y + q.y) / 2, z: Z(0.035), sx: at(0.035, sideR).x, sy: rr });
  }
  const n = B.count;
  B.flush(group);
  return n;
}

// ---------------------------------------------------------------- engine
function detailEngine(e, mats) {
  if (!e.fan) return detailSstNozzle(e, mats);
  const { nacR, nacL, modern, mount } = e.grp.userData;
  if (!nacR) return 0;
  let n = 0;
  // fan disc: 22 twisted blades + spinner + nut, spinning as one mesh
  const fanGrp = new THREE.Group();
  fanGrp.position.copy(e.fan.position);
  const fb = new PieceBatcher();
  const blades = 22;
  for (let i = 0; i < blades; i++) {
    const a = (i / blades) * Math.PI * 2, d = nacR * 0.50;
    fb.add(UNIT.box, mats.fanBlade, { x: -Math.sin(a) * d, y: Math.cos(a) * d, sx: nacR * 0.11, sy: nacR * 0.66, sz: 0.03, rz: a, ry: 0.55, order: 'ZYX' });
  }
  fb.add(UNIT.cone, mats.metal, { z: -nacR * 0.22, sx: nacR * 0.20, sy: nacR * 0.46, sz: nacR * 0.20, rx: -Math.PI / 2 });
  fb.add(UNIT.disc, mats.dark, { sx: nacR * 0.22, sy: 0.06, sz: nacR * 0.22, rx: Math.PI / 2 });
  n += fb.count;
  fb.flush(fanGrp, false);
  e.grp.add(fanGrp);
  e.fan = fanGrp;

  const B = new PieceBatcher();
  // inlet acoustic ring, fan-case band, cowl seams, latches, strake
  B.add(new THREE.TorusGeometry(nacR * 0.86, nacR * 0.05, 6, 24), mats.dark, { z: -nacL * 0.40 });
  B.add(new THREE.TorusGeometry(nacR * 1.0, 0.025, 4, 24), mats.metal, { z: -nacL * 0.27 });
  for (const a of [0.8, 2.35, 3.95, 5.5]) {
    B.add(UNIT.box, mats.dark, { x: Math.sin(a) * nacR * 0.985, y: -Math.cos(a) * nacR * 0.985, z: -nacL * 0.12, sx: 0.02, sy: 0.02, sz: nacL * 0.52, rz: a });
  }
  for (let i = 0; i < 6; i++) {
    B.add(UNIT.box, mats.metal, { x: (i % 2 ? 1 : -1) * nacR * 0.18, y: -nacR * 0.97, z: -nacL * 0.32 + (i >> 1) * nacL * 0.16, sx: 0.12, sy: 0.04, sz: 0.09 });
  }
  const inb = mount === 'tail' ? 0 : (e.pos.x > 0 ? -1 : 1);
  if (inb) B.add(UNIT.box, mats.engine, { x: inb * nacR * 0.9, y: nacR * 0.35, z: -nacL * 0.22, sx: 0.03, sy: nacR * 0.36, sz: nacR * 0.55, rz: inb * 0.5 });
  // exhaust plug + core nozzle ring (+ chevrons on modern types)
  B.add(UNIT.cone, mats.dark, { z: nacL * 0.60, sx: nacR * 0.18, sy: nacL * 0.28, sz: nacR * 0.18, rx: Math.PI / 2 });
  B.add(new THREE.TorusGeometry(nacR * 0.51, 0.02, 4, 24), mats.metal, { z: nacL * 0.53 });
  if (modern) {
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      B.add(UNIT.box, mats.metal, { x: Math.sin(a) * nacR * 0.50, y: -Math.cos(a) * nacR * 0.50, z: nacL * 0.555, sx: nacR * 0.11, sy: 0.018, sz: nacR * 0.13, rz: a, rx: 0.25, order: 'ZXY' });
    }
  }
  // pylon fairings (wing-mounted) and drain mast
  if (mount === 'wing') {
    B.add(UNIT.box, mats.grey, { y: nacR * 0.98, z: -nacL * 0.02, sx: 0.36, sy: nacR * 0.32, sz: nacL * 0.40, rx: 0.12 });
    B.add(UNIT.box, mats.grey, { y: nacR * 0.75, z: nacL * 0.30, sx: 0.26, sy: nacR * 0.28, sz: nacL * 0.32, rx: -0.35 });
  }
  B.add(UNIT.box, mats.metal, { y: -nacR * 0.98, z: nacL * 0.10, sx: 0.05, sy: 0.16, sz: 0.06 });
  n += B.count;
  B.flush(e.grp);
  // reverser cascades ride on the translating sleeve
  if (e.sleeve) {
    const sb = new PieceBatcher();
    for (const s of [-1, 1]) {
      sb.add(UNIT.box, mats.dark, { x: s * nacR * 0.99, y: 0, sx: 0.02, sy: nacR * 0.55, sz: nacL * 0.16 });
      for (let k = 0; k < 4; k++) sb.add(UNIT.box, mats.metal, { x: s * nacR * 1.0, y: -nacR * 0.22 + k * nacR * 0.15, sx: 0.03, sy: 0.02, sz: nacL * 0.15 });
    }
    n += sb.count;
    sb.flush(e.sleeve, false);
  }
  return n;
}

// Supersonic nozzle (the paired-box installations): 12 variable-geometry
// petals, a reheat ring and the centre plug. The nozzle mesh is a cylinder
// rotated rx = PI/2, so in its local frame the axis is +Y (aft).
function detailSstNozzle(e, mats) {
  const p = e.grp.geometry && e.grp.geometry.parameters;
  if (!p) return 0;
  const r = p.radiusBottom || p.radiusTop || 0.5, h = p.height || 1;
  const B = new PieceBatcher();
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    B.add(UNIT.box, mats.metal, { x: Math.cos(a) * r * 0.97, z: -Math.sin(a) * r * 0.97, y: h * 0.58, sx: 0.03, sy: h * 0.55, sz: r * 0.5, ry: a });
  }
  B.add(new THREE.TorusGeometry(r * 0.72, 0.03, 4, 20), mats.dark, { y: h * 0.28, rx: Math.PI / 2 });
  B.add(UNIT.cone, mats.dark, { y: h * 0.22, sx: r * 0.36, sy: h * 0.62, sz: r * 0.36 });
  const n = B.count;
  B.flush(e.grp, false);
  return n;
}

// ------------------------------------------------------------------ tail
function detailTail(T, mats, parts) {
  const B = new PieceBatcher();
  let n = 0;
  const { group, fin, hstab } = T;
  // ---- rudder: two segments + horn + wicks, hinged at its leading edge
  if (parts.rudder && fin) {
    const old = parts.rudder;
    const p = old.geometry.parameters || { width: 0.14, height: fin.height * 0.85, depth: fin.rootChord * 0.22 };
    const g = new THREE.Group();
    g.position.copy(old.position);
    g.position.z -= p.depth / 2;
    g.rotation.copy(old.rotation);
    const rb = new PieceBatcher();
    rb.add(UNIT.box, mats.tail, { y: p.height * 0.24, z: p.depth * 0.5, sx: p.width, sy: p.height * 0.46, sz: p.depth * 0.95 });
    rb.add(UNIT.box, mats.tail, { y: -p.height * 0.24, z: p.depth * 0.52, sx: p.width * 1.1, sy: p.height * 0.46, sz: p.depth * 1.05 });
    rb.add(UNIT.box, mats.grey, { y: -p.height * 0.44, z: p.depth * 0.1, sx: p.width * 0.9, sy: p.height * 0.08, sz: p.depth * 0.32 });
    for (let i = 0; i < 5; i++) rb.add(UNIT.cyl6, mats.dark, { y: -p.height * 0.35 + i * p.height * 0.18, z: p.depth * 1.02 + 0.17, sx: 0.011, sy: 0.34, sz: 0.011, rx: Math.PI / 2 });
    n += rb.count;
    rb.flush(g);
    old.parent.remove(old);
    old.geometry.dispose();
    group.add(g);
    parts.rudder = g;
  }
  // ---- elevators: per-side panels + trim tabs + horns + wicks
  if (parts.elevator && hstab) {
    const old = parts.elevator;
    const p = old.geometry.parameters || { width: hstab.span * 1.8, height: 0.09, depth: hstab.chord * 0.25 };
    const g = new THREE.Group();
    g.position.copy(old.position);
    g.position.z -= p.depth / 2;
    const eb = new PieceBatcher();
    for (const s of [-1, 1]) {
      const half = p.width / 2;
      eb.add(UNIT.box, mats.wing, { x: s * half * 0.52, z: p.depth * 0.5, sx: half * 0.90, sy: p.height, sz: p.depth * 0.9 });
      eb.add(UNIT.box, mats.wing, { x: s * half * 0.28, z: p.depth * 0.98, sx: half * 0.36, sy: p.height * 0.6, sz: p.depth * 0.16 });
      eb.add(UNIT.box, mats.grey, { x: s * half * 0.97, z: p.depth * 0.15, sx: half * 0.06, sy: p.height * 1.3, sz: p.depth * 0.3 });
      for (let i = 0; i < 3; i++) eb.add(UNIT.cyl6, mats.dark, { x: s * half * (0.60 + i * 0.16), z: p.depth * 1.02 + 0.17, sx: 0.011, sy: 0.34, sz: 0.011, rx: Math.PI / 2 });
    }
    n += eb.count;
    eb.flush(g);
    old.parent.remove(old);
    old.geometry.dispose();
    hstab.group.add(g);
    parts.elevator = g;
    // stabilizer LE strips + tip caps + trim-screw fairing
    for (const s of [-1, 1]) {
      const a = alignX(s * hstab.span, hstab.span * Math.tan(hstab.dihedral), hstab.span * Math.tan(hstab.sweep));
      const sb = new PieceBatcher();
      sb.add(UNIT.box, mats.metal, { x: s * hstab.span * 0.5, y: hstab.span * 0.5 * Math.tan(hstab.dihedral), z: hstab.span * 0.5 * Math.tan(hstab.sweep) + 0.03, sx: a.L * 0.96, sy: 0.05, sz: 0.06, ry: a.ry, rz: a.rz, order: a.order });
      sb.add(UNIT.box, mats.wing, { x: s * hstab.span * 0.995, y: hstab.span * Math.tan(hstab.dihedral), z: hstab.span * Math.tan(hstab.sweep) + hstab.chord * 0.42 * 0.5, sx: 0.08, sy: 0.08, sz: hstab.chord * 0.42 });
      n += sb.count;
      sb.flush(hstab.group);
    }
    B.add(UNIT.box, mats.grey, { x: 0, y: hstab.group.position.y - 0.1, z: hstab.group.position.z + hstab.chord * 0.3, sx: 0.6, sy: 0.3, sz: hstab.chord * 0.7 });
  }
  if (fin) {
    const topY = fin.y + fin.height, topZ = fin.z + fin.height * Math.tan(fin.sweep) + fin.rootChord * 0.45 * 0.5;
    // fin cap fairing, VOR rods, tail nav light, dorsal fillet, LE strip
    B.add(UNIT.box, mats.tail, { y: topY + 0.06, z: topZ, sx: 0.32, sy: 0.12, sz: fin.rootChord * 0.42 });
    for (const s of [-1, 1]) B.add(UNIT.cyl6, mats.metal, { x: s * 0.35, y: topY + 0.08, z: topZ - fin.rootChord * 0.05, sx: 0.015, sy: 0.7, sz: 0.015, rz: Math.PI / 2 });
    B.add(UNIT.sphere, mats.strobe, { y: topY + 0.08, z: topZ + fin.rootChord * 0.22, sx: 0.08, sy: 0.08, sz: 0.08 });
    B.add(UNIT.box, mats.tail, { y: fin.y + 0.25, z: fin.z - fin.rootChord * 0.22, sx: 0.22, sy: 0.5, sz: fin.rootChord * 0.5, rx: 0.55 });
    const a = alignX(0, fin.height, fin.height * Math.tan(fin.sweep));
    B.add(UNIT.box, mats.metal, { y: fin.y + fin.height * 0.5, z: fin.z + fin.height * 0.5 * Math.tan(fin.sweep) - 0.02, sx: a.L * 0.95, sy: 0.06, sz: 0.05, ry: a.ry, rz: a.rz, order: a.order });
  }
  n += B.count;
  B.flush(group);
  return n;
}

// ------------------------------------------------------------------ gear
function detailGear(gear, mats) {
  const u = gear.userData;
  if (!u || !u.wheelR) return 0;
  const B = new PieceBatcher();
  const { strutLen, wheelR, positions, isNose } = u;
  // torque links (scissor), oleo collar, axle beam
  for (const s of [-1, 1]) B.add(UNIT.box, mats.metal, { x: 0.20, y: -strutLen * (0.5 + s * 0.12), z: 0, sx: 0.06, sy: strutLen * 0.28, sz: 0.10, rx: s * 0.45 });
  B.add(UNIT.cyl, mats.metal, { y: -strutLen * 0.36, sx: 0.19, sy: 0.22, sz: 0.19 });
  if (positions.length === 4) B.add(UNIT.box, mats.grey, { y: -strutLen + wheelR * 0.2, sx: 0.22, sy: 0.24, sz: wheelR * 2.8 });
  for (const [wx, wz] of positions) {
    const y = -strutLen + wheelR * 0.2;
    B.add(UNIT.disc, mats.brake, { x: wx + Math.sign(wx || 1) * wheelR * 0.36, y, z: wz, sx: wheelR * 0.62, sy: wheelR * 0.18, sz: wheelR * 0.62, rz: Math.PI / 2 });
    B.add(UNIT.disc, mats.metal, { x: wx + Math.sign(wx || 1) * wheelR * 0.37, y, z: wz, sx: wheelR * 0.34, sy: wheelR * 0.30, sz: wheelR * 0.34, rz: Math.PI / 2 });
  }
  // doors ride the leg so they retract with it
  const dl = strutLen * (isNose ? 0.55 : 0.6);
  for (const s of [-1, 1]) B.add(UNIT.box, mats.belly, { x: s * wheelR * (isNose ? 1.15 : 1.35), y: -dl * 0.45, z: isNose ? 0 : wheelR * 0.4, sx: 0.035, sy: dl, sz: wheelR * (isNose ? 2.2 : 2.6) });
  if (isNose) B.add(UNIT.box, mats.glass, { y: -strutLen * 0.22, z: -0.16, sx: 0.22, sy: 0.14, sz: 0.06 });
  const n = B.count;
  B.flush(gear);
  return n;
}

// ------------------------------------------------------------------ main
export function applyExterior(desc) {
  const { parts, mats } = desc;
  const opt = { surfaces: true, fuselage: true, engines: true, tail: true, gear: true, ...(desc.options || {}) };
  parts.slats = parts.slats || [];
  parts.elevons = parts.elevons || [];
  let n = 0;
  for (const W of desc.wings || []) n += detailWing(W, mats, parts, { surfaces: opt.surfaces, fairings: W.fairings, vgs: W.vgs });
  if (opt.fuselage && desc.fus) n += detailFuselage(desc.fus, mats, desc.group, opt);
  if (opt.engines) for (const e of parts.engines) n += detailEngine(e, mats);
  if (opt.tail && desc.tail) n += detailTail(desc.tail, mats, parts);
  if (opt.gear) for (const g of desc.gears || []) n += detailGear(g, mats);
  // animated hinge groups count as pieces of their own
  n += parts.slats.length + parts.flaps.length + parts.spoilers.length + parts.ailR.length + parts.ailL.length + parts.elevons.length;
  return n;
}
