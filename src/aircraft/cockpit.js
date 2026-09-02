// Fully modelled flight deck.
//
// Built piece by piece in the aircraft's local frame from a panel-basis
// helper: every sub-panel declares its own origin/orientation, then lays out
// switches, knobs, buttons, circuit breakers, screws and legend plates on it.
// A typical deck comes out at ~4 000 individual pieces:
//
//   shell + glazing      floor, side walls, ceiling, rear bulkhead + door,
//                        windscreen posts, side-window frames and rails
//   glareshield          coaming, MCP/FCU (rotaries, mode buttons, five
//                        digital windows), master warning/caution
//   main panel           six display bezels with live PFD/ND/EICAS screens,
//                        integrated standby, EFIS control panels, gear lever
//                        and annunciators, autobrake, flap gauge, clock
//   pedestal             throttle quadrant with per-engine levers and reverse
//                        piggybacks, flap and speedbrake levers, trim wheels,
//                        two full FMC/CDUs with 69-key boards, radio and
//                        audio panels, transponder, weather radar
//   overhead             fifteen system sub-panels — electrical, fuel, hyd,
//                        bleed/pack, anti-ice, APU, start, lights, pressure
//   circuit breakers     P6/P18 side stacks and the aft overhead bank
//   furniture            both pilot seats, jumpseat, yokes or sidesticks,
//                        rudder pedals, tiller, visors, oxygen boxes, vents
//
// Static pieces batch per material (a handful of draw calls); levers, yokes,
// pedals and trim wheels stay separate so the entity can animate them. The
// whole group is hidden unless the cockpit camera is active, so it costs
// nothing in the other views.
import * as THREE from 'three';
import { PieceBatcher } from './exterior.js';
import { CockpitDisplays } from './cockpitDisplays.js';

const G = {
  box: new THREE.BoxGeometry(1, 1, 1),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 12),
  cyl6: new THREE.CylinderGeometry(1, 1, 1, 6),
  cone: new THREE.ConeGeometry(1, 1, 10),
  sphere: new THREE.SphereGeometry(1, 8, 6),
  torus: new THREE.TorusGeometry(1, 0.12, 6, 16)
};

// A mounting plane. Local +X = panel right, +Y = panel up, +Z = out of the
// face toward the crew; pieces sit at z >= 0.
class Panel {
  constructor(B, x, y, z, rx = 0, ry = 0, rz = 0) {
    this.B = B;
    this.M = new THREE.Matrix4().compose(
      new THREE.Vector3(x, y, z),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz, 'YXZ')),
      new THREE.Vector3(1, 1, 1));
    this._o = new THREE.Object3D();
    this._m = new THREE.Matrix4();
  }
  add(geo, mat, t = {}) {
    this._o.position.set(t.x || 0, t.y || 0, t.z || 0);
    this._o.rotation.set(t.rx || 0, t.ry || 0, t.rz || 0, t.order || 'XYZ');
    this._o.scale.set(t.sx ?? 1, t.sy ?? 1, t.sz ?? 1);
    this._o.updateMatrix();
    this._m.multiplyMatrices(this.M, this._o.matrix);
    this.B.addM(geo, mat, this._m);
  }
  place(obj, x, y, z, rx = 0) {
    this._o.position.set(x, y, z);
    this._o.rotation.set(rx, 0, 0);
    this._o.scale.set(1, 1, 1);
    this._o.updateMatrix();
    this._m.multiplyMatrices(this.M, this._o.matrix);
    this._m.decompose(obj.position, obj.quaternion, obj.scale);
    // bases the entity animates against (rotate about the panel's own axes,
    // slide along its up-vector) without losing the mounting orientation
    obj.userData.q0 = obj.quaternion.clone();
    obj.userData.p0 = obj.position.clone();
    obj.userData.axX = new THREE.Vector3(1, 0, 0).applyQuaternion(obj.quaternion);
    obj.userData.axY = new THREE.Vector3(0, 1, 0).applyQuaternion(obj.quaternion);
    obj.userData.axZ = new THREE.Vector3(0, 0, 1).applyQuaternion(obj.quaternion);
  }
}

// ------------------------------------------------------------- primitives
// Panel plate with a bezel lip and corner screws — the base of everything.
function plate(P, m, x, y, w, h, { screws = 4, lip = true } = {}) {
  P.add(G.box, m.panel, { x, y, z: 0.004, sx: w, sy: h, sz: 0.008 });
  if (lip) {
    P.add(G.box, m.trim, { x, y: y + h / 2, z: 0.009, sx: w, sy: 0.006, sz: 0.004 });
    P.add(G.box, m.trim, { x, y: y - h / 2, z: 0.009, sx: w, sy: 0.006, sz: 0.004 });
    P.add(G.box, m.trim, { x: x - w / 2, y, z: 0.009, sx: 0.006, sy: h, sz: 0.004 });
    P.add(G.box, m.trim, { x: x + w / 2, y, z: 0.009, sx: 0.006, sy: h, sz: 0.004 });
  }
  const sx = w / 2 - 0.010, sy = h / 2 - 0.010;
  for (let i = 0; i < screws; i++) {
    const a = (i / screws) * Math.PI * 2 + Math.PI / 4;
    P.add(G.cyl6, m.metal, {
      x: x + Math.cos(a) * sx, y: y + Math.sin(a) * sy, z: 0.010,
      sx: 0.0045, sy: 0.003, sz: 0.0045, rx: Math.PI / 2
    });
  }
}

// Toggle switch: base, stem, tip, optional guard, annunciator, legend.
function toggle(P, m, x, y, { guard = false, light = true, on = false } = {}) {
  P.add(G.box, m.panelDark, { x, y, z: 0.010, sx: 0.020, sy: 0.020, sz: 0.005 });
  P.add(G.cyl6, m.metal, { x, y: y + 0.006, z: 0.019, sx: 0.0035, sy: 0.016, sz: 0.0035, rx: 1.35 });
  P.add(G.sphere, m.white, { x, y: y + 0.013, z: 0.026, sx: 0.0055, sy: 0.0055, sz: 0.0055 });
  if (guard) {
    P.add(G.box, m.metal, { x, y: y + 0.019, z: 0.020, sx: 0.020, sy: 0.0035, sz: 0.0035 });
    P.add(G.box, m.metal, { x: x - 0.009, y: y + 0.008, z: 0.020, sx: 0.0035, sy: 0.020, sz: 0.0035 });
    P.add(G.box, m.metal, { x: x + 0.009, y: y + 0.008, z: 0.020, sx: 0.0035, sy: 0.020, sz: 0.0035 });
  }
  if (light) P.add(G.box, on ? m.lightGreen : m.lightOff, { x, y: y + 0.026, z: 0.011, sx: 0.017, sy: 0.009, sz: 0.004 });
  P.add(G.box, m.legend, { x, y: y - 0.017, z: 0.010, sx: 0.026, sy: 0.007, sz: 0.002 });
}

// Rotary knob: bezel, shaft, body, pointer, index marks.
function knob(P, m, x, y, r = 0.017) {
  P.add(G.cyl, m.panelDark, { x, y, z: 0.009, sx: r * 1.35, sy: 0.004, sz: r * 1.35, rx: Math.PI / 2 });
  P.add(G.cyl, m.metal, { x, y, z: 0.014, sx: r * 0.30, sy: 0.010, sz: r * 0.30, rx: Math.PI / 2 });
  P.add(G.cyl, m.knob, { x, y, z: 0.021, sx: r, sy: 0.014, sz: r, rx: Math.PI / 2 });
  P.add(G.box, m.white, { x, y: y + r * 0.55, z: 0.029, sx: 0.0035, sy: r * 0.8, sz: 0.003 });
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    P.add(G.box, m.legend, { x: x + Math.sin(a) * r * 1.5, y: y + Math.cos(a) * r * 1.5, z: 0.010, sx: 0.004, sy: 0.004, sz: 0.002 });
  }
}

// Push button: recess, cap, legend strip.
function button(P, m, x, y, w = 0.024, h = 0.018, mat = null) {
  P.add(G.box, m.panelDark, { x, y, z: 0.009, sx: w + 0.005, sy: h + 0.005, sz: 0.006 });
  P.add(G.box, mat || m.button, { x, y, z: 0.015, sx: w, sy: h, sz: 0.007 });
  P.add(G.box, m.legend, { x, y, z: 0.019, sx: w * 0.72, sy: h * 0.34, sz: 0.001 });
}

// Circuit breaker: barrel, collar, white pull-button.
function breaker(P, m, x, y) {
  P.add(G.cyl, m.panelDark, { x, y, z: 0.006, sx: 0.0085, sy: 0.006, sz: 0.0085, rx: Math.PI / 2 });
  P.add(G.cyl, m.metal, { x, y, z: 0.011, sx: 0.0062, sy: 0.005, sz: 0.0062, rx: Math.PI / 2 });
  P.add(G.cyl, m.white, { x, y, z: 0.015, sx: 0.0048, sy: 0.004, sz: 0.0048, rx: Math.PI / 2 });
}

// Annunciator light block (two-line legend caps).
function annun(P, m, x, y, mat) {
  P.add(G.box, m.panelDark, { x, y, z: 0.009, sx: 0.030, sy: 0.020, sz: 0.006 });
  P.add(G.box, mat, { x, y, z: 0.014, sx: 0.026, sy: 0.016, sz: 0.005 });
}

// Digital readout window (bezel + dark glass + segment blocks).
function readout(P, m, x, y, w = 0.052, h = 0.020, digits = 4) {
  P.add(G.box, m.panelDark, { x, y, z: 0.009, sx: w + 0.006, sy: h + 0.006, sz: 0.006 });
  P.add(G.box, m.screenGlass, { x, y, z: 0.014, sx: w, sy: h, sz: 0.003 });
  for (let i = 0; i < digits; i++) {
    P.add(G.box, m.lightGreen, { x: x - w / 2 + w * (i + 0.5) / digits, y, z: 0.0165, sx: w / digits * 0.5, sy: h * 0.6, sz: 0.001 });
  }
}

// ==================================================================== deck
export function buildCockpit(opts) {
  const { style = 'boeing-ng', nEng = 2, quality = 'high', airportInfo = null, hull = null } = opts;
  const airbus = style === 'airbus-fbw';
  const classic = style === 'boeing-classic' || style === 'mddc';
  const sst = style === 'supersonic';

  const em = (hex, e) => new THREE.MeshLambertMaterial({ color: hex, emissive: e });
  const lit = (hex) => new THREE.MeshBasicMaterial({ color: hex });
  // Emissive lift: the deck is enclosed, so pure diffuse would read black.
  const m = {
    shell: em(0x3b4149, 0x2a2f35),
    noseSkin: em(0xd7dbe0, 0x6e7378),
    floor: em(0x2b3036, 0x171a1e),
    panel: em(0x2e3339, 0x1b1e22),
    panelDark: em(0x1d2126, 0x101315),
    trim: em(0x4a5058, 0x2a2e33),
    metal: new THREE.MeshStandardMaterial({ color: 0xb9c0c8, metalness: 0.85, roughness: 0.32, emissive: 0x2a2e33 }),
    knob: em(0x1a1d21, 0x0e1012),
    button: em(0x555c66, 0x30343a),
    legend: em(0xd8dde3, 0x8a8f95),
    white: em(0xe8ecf0, 0x8f9399),
    screenGlass: em(0x0a0e13, 0x05070a),
    lightOff: em(0x2a2f35, 0x15181b),
    lightGreen: lit(0x35e05a),
    lightAmber: lit(0xf0a52a),
    lightRed: lit(0xff3a2f),
    lightBlue: lit(0x5ec8ff),
    lightWhite: lit(0xf2f5f8),
    leather: em(0x23303e, 0x131a22),
    fabric: em(0x2a3340, 0x161c24),
    rubber: em(0x16191c, 0x0b0d0f),
    glass: new THREE.MeshPhysicalMaterial({
      color: 0xcfe0ee, transparent: true, opacity: 0.10, roughness: 0.06,
      metalness: 0, side: THREE.DoubleSide, depthWrite: false
    })
  };

  const group = new THREE.Group();
  const parts = {
    thrustLevers: [], yokes: [], pedals: [], trimWheels: [],
    flapLever: null, speedbrakeLever: null, gearLever: null
  };
  const B = new PieceBatcher();
  const displays = new CockpitDisplays(style, nEng, airportInfo);
  const screenMeshes = [];

  // --- deck envelope (metres, local: -Z forward, origin at captain-eye height)
  // Seated-pilot proportions (metres from the captain's eye): the overhead
  // is within arm's reach, the main panel about an arm away, the floor a
  // seated eye-height below.
  const HW = 0.98, FLOOR = -1.06, CEIL = 0.46;
  const PANEL_Z = -0.92, PANEL_TILT = -0.22;
  const PED_TOP = -0.52, OVH_Y = 0.40;
  const WS_BOT_Y = -0.04, WS_BOT_Z = -1.00, WS_TOP_Y = 0.40, WS_TOP_Z = -0.84;
  const WS_RAKE = Math.atan2(WS_TOP_Z - WS_BOT_Z, WS_TOP_Y - WS_BOT_Y);

  // ------------------------------------------------------------ 1. shell
  {
    const S = new Panel(B, 0, 0, 0);
    // floor, with seat rails and track fasteners
    S.add(G.box, m.floor, { y: FLOOR, z: 0.05, sx: HW * 2, sy: 0.05, sz: 1.9 });
    for (const sx2 of [-0.62, -0.30, 0.30, 0.62]) {
      S.add(G.box, m.metal, { x: sx2, y: FLOOR + 0.035, z: 0.15, sx: 0.05, sy: 0.02, sz: 1.1 });
      for (let i = 0; i < 9; i++) S.add(G.cyl6, m.metal, { x: sx2, y: FLOOR + 0.047, z: -0.35 + i * 0.12, sx: 0.008, sy: 0.004, sz: 0.008, rx: Math.PI / 2 });
    }
    // side walls: full height, from the windscreen base aft to the bulkhead,
    // with the sliding-window aperture left open
    for (const s of [-1, 1]) {
      S.add(G.box, m.shell, { x: s * HW, y: -0.40, z: -0.10, sx: 0.04, sy: 1.30, sz: 1.95 });
      S.add(G.box, m.shell, { x: s * HW, y: 0.34, z: 0.42, sx: 0.04, sy: 0.24, sz: 1.10 });
      S.add(G.box, m.shell, { x: s * HW, y: 0.20, z: -1.00, sx: 0.04, sy: 0.52, sz: 0.24 });
      S.add(G.box, m.shell, { x: s * (HW - 0.05), y: CEIL - 0.06, z: -0.10, sx: 0.12, sy: 0.16, sz: 1.95, rz: s * 0.6 });
    }
    // Roof: generous, so no sight-line escapes between the overhead panel and
    // the hull. The header then closes the strip between the roof and the top
    // of the windscreen, and the eyebrow panels close the corners outboard of
    // the glass.
    S.add(G.box, m.shell, { y: CEIL + 0.05, z: 0.10, sx: HW * 2.3, sy: 0.08, sz: 2.4 });
    S.add(G.box, m.shell, { y: CEIL + 0.05, z: -1.02, sx: HW * 2.3, sy: 0.08, sz: 0.55 });
    S.add(G.box, m.shell, { y: (CEIL + WS_TOP_Y) / 2 + 0.03, z: WS_TOP_Z - 0.02,
      sx: HW * 2.3, sy: CEIL - WS_TOP_Y + 0.10, sz: 0.06 });
    for (const s of [-1, 1]) {
      S.add(G.box, m.shell, { x: s * 0.80, y: (CEIL + WS_BOT_Y) / 2, z: -0.95,
        sx: 0.40, sy: CEIL - WS_BOT_Y, sz: 0.06, rz: s * 0.18 });
    }
    // Nose cowl: the aircraft's own upper skin ahead of the windscreen. This
    // is what a pilot actually looks along, and it occludes the exterior nose
    // detail, which is otherwise visible from inside (the hull loft is wound
    // outward, so it back-face culls when seen from the flight deck).
    if (hull) {
      const zNose = hull.tipZ + 0.10;
      const segs = 16;
      for (let i = 0; i < segs; i++) {
        const za = WS_BOT_Z - (WS_BOT_Z - zNose) * (i / segs);
        const zb = WS_BOT_Z - (WS_BOT_Z - zNose) * ((i + 1) / segs);
        const a = hull.at(za), b = hull.at(zb);
        if (!a || !b) continue;
        // the skin runs forward from the windscreen SILL and only follows the
        // crown once the nose has tapered below it — using the crown itself
        // would stand a wall of fuselage up inside the glass
        const ca = Math.min(a.crown, WS_BOT_Y - 0.02), cb = Math.min(b.crown, WS_BOT_Y - 0.02);
        const yc = (ca + cb) / 2, hw = Math.max((a.hw + b.hw) / 2, 0.06);
        const dy = cb - ca, dz = zb - za;
        S.add(G.box, m.noseSkin, {
          y: yc - 0.015, z: (za + zb) / 2,
          sx: hw * 1.98, sy: 0.05, sz: Math.hypot(dy, dz) * 1.25,
          rx: Math.atan2(dy, -dz)
        });
        // shoulders, so nothing shows past the sides of the crown either
        for (const s of [-1, 1]) {
          S.add(G.box, m.noseSkin, {
            x: s * hw * 0.86, y: yc - 0.22, z: (za + zb) / 2,
            sx: 0.06, sy: 0.46, sz: Math.hypot(dy, dz) * 1.25, rx: Math.atan2(dy, -dz), rz: s * 0.30
          });
        }
      }
    }
    S.add(G.box, m.shell, { y: -0.20, z: 0.98, sx: HW * 2, sy: 1.9, sz: 0.05 });
    S.add(G.box, m.panelDark, { x: -0.30, y: -0.28, z: 0.95, sx: 0.62, sy: 1.72, sz: 0.05 });
    S.add(G.box, m.metal, { x: -0.02, y: -0.28, z: 0.92, sx: 0.03, sy: 0.10, sz: 0.05 });
    // soundproofing quilt panels + fasteners
    for (const s of [-1, 1]) {
      for (let i = 0; i < 5; i++) {
        S.add(G.box, m.shell, { x: s * (HW - 0.03), y: -0.62 + i * 0.10, z: 0.55, sx: 0.012, sy: 0.085, sz: 0.72 });
        for (let k = 0; k < 4; k++) S.add(G.cyl6, m.metal, { x: s * (HW - 0.04), y: -0.62 + i * 0.10, z: 0.28 + k * 0.18, sx: 0.005, sy: 0.004, sz: 0.005, rz: Math.PI / 2 });
      }
    }
    // ceiling wire conduits + reading lights + speakers
    for (const s of [-1, 1]) {
      S.add(G.cyl, m.trim, { x: s * 0.55, y: CEIL - 0.02, z: 0.45, sx: 0.022, sy: 0.9, sz: 0.022, rx: Math.PI / 2 });
      S.add(G.box, m.panelDark, { x: s * 0.46, y: CEIL - 0.03, z: 0.05, sx: 0.07, sy: 0.03, sz: 0.10 });
      S.add(G.box, m.lightWhite, { x: s * 0.46, y: CEIL - 0.05, z: 0.05, sx: 0.05, sy: 0.008, sz: 0.07 });
      S.add(G.box, m.panelDark, { x: s * 0.72, y: CEIL - 0.02, z: 0.55, sx: 0.10, sy: 0.04, sz: 0.10 });
      for (let i = 0; i < 6; i++) S.add(G.cyl6, m.metal, { x: s * 0.72, y: CEIL - 0.045, z: 0.52 + (i % 3) * 0.03, sx: 0.005, sy: 0.003, sz: 0.005 });
    }
  }

  // -------------------------------------------------- 2. glazing + frames
  {
    const S = new Panel(B, 0, 0, 0);
    const wTop = WS_TOP_Y, wBot = WS_BOT_Y, zTop = WS_TOP_Z, zBot = WS_BOT_Z;
    const wcy = (wTop + wBot) / 2, wcz = (zTop + zBot) / 2, wLen = Math.hypot(wTop - wBot, zTop - zBot);
    // centre post, side posts, header and sill (all following the rake)
    S.add(G.box, m.trim, { x: 0, y: wcy, z: wcz, sx: 0.050, sy: wLen, sz: 0.05, rx: WS_RAKE });
    for (const s of [-1, 1]) {
      S.add(G.box, m.trim, { x: s * 0.56, y: wcy, z: wcz + 0.02, sx: 0.055, sy: wLen, sz: 0.05, rx: WS_RAKE, rz: s * 0.10 });
      S.add(G.box, m.trim, { x: s * 0.29, y: wTop + 0.025, z: zTop - 0.01, sx: 0.60, sy: 0.05, sz: 0.05 });
      S.add(G.box, m.trim, { x: s * 0.29, y: wBot - 0.025, z: zBot + 0.01, sx: 0.60, sy: 0.05, sz: 0.05 });
      // windscreen glass
      S.add(G.box, m.glass, { x: s * 0.29, y: wcy, z: wcz, sx: 0.54, sy: wLen, sz: 0.010, rx: WS_RAKE });
      // side window: frame, glass, sliding rail, latch
      S.add(G.box, m.trim, { x: s * (HW - 0.01), y: 0.20, z: -0.56, sx: 0.03, sy: 0.40, sz: 0.66 });
      S.add(G.box, m.glass, { x: s * (HW - 0.02), y: 0.20, z: -0.56, sx: 0.010, sy: 0.32, sz: 0.58 });
      S.add(G.box, m.metal, { x: s * (HW - 0.03), y: 0.01, z: -0.56, sx: 0.02, sy: 0.02, sz: 0.64 });
      S.add(G.box, m.metal, { x: s * (HW - 0.03), y: 0.39, z: -0.56, sx: 0.02, sy: 0.02, sz: 0.64 });
      S.add(G.box, m.metal, { x: s * (HW - 0.05), y: 0.14, z: -0.30, sx: 0.03, sy: 0.05, sz: 0.03 });
      // eyebrow window on classic decks
      if (classic) {
        S.add(G.box, m.trim, { x: s * 0.42, y: wTop + 0.10, z: zTop + 0.06, sx: 0.34, sy: 0.13, sz: 0.05, rx: 0.85 });
        S.add(G.box, m.glass, { x: s * 0.42, y: wTop + 0.10, z: zTop + 0.05, sx: 0.28, sy: 0.09, sz: 0.01, rx: 0.85 });
      }
      // sun visor, stowed flat against the windscreen header
      S.add(G.cyl6, m.metal, { x: s * 0.30, y: wTop + 0.055, z: zTop + 0.02, sx: 0.007, sy: 0.30, sz: 0.007, rz: Math.PI / 2 });
      S.add(G.box, m.panelDark, { x: s * 0.30, y: wTop + 0.048, z: zTop + 0.10, sx: 0.44, sy: 0.010, sz: 0.20 });
      S.add(G.cyl6, m.metal, { x: s * 0.09, y: wTop + 0.055, z: zTop + 0.02, sx: 0.009, sy: 0.02, sz: 0.009, rz: Math.PI / 2 });
      // window heat sensor + demist duct
      S.add(G.box, m.panelDark, { x: s * (HW - 0.05), y: 0.34, z: -0.90, sx: 0.02, sy: 0.02, sz: 0.05 });
      S.add(G.box, m.trim, { x: s * 0.30, y: wBot - 0.05, z: zBot + 0.03, sx: 0.50, sy: 0.03, sz: 0.03 });
    }
  }

  // ------------------------------------------------ 3. glareshield + MCP
  {
    const S = new Panel(B, 0, 0, 0);
    // coaming shell
    S.add(G.box, m.panelDark, { y: -0.055, z: -0.84, sx: HW * 1.9, sy: 0.07, sz: 0.26, rx: -0.30 });
    S.add(G.box, m.panelDark, { y: -0.10, z: -0.95, sx: HW * 1.9, sy: 0.12, sz: 0.05, rx: -0.10 });
    for (const s of [-1, 1]) S.add(G.box, m.panelDark, { x: s * 0.92, y: -0.08, z: -0.88, sx: 0.16, sy: 0.14, sz: 0.28, rz: s * 0.3 });

    // MCP / FCU face
    const P = new Panel(B, 0, -0.055, -0.80, -0.85);
    plate(P, m, 0, 0, 0.82, 0.15, { screws: 8 });
    const cols = airbus ? ['SPD', 'HDG', 'ALT', 'V/S'] : ['CRS', 'IAS', 'HDG', 'ALT', 'V/S'];
    cols.forEach((c, i) => {
      const x = -0.34 + i * (0.68 / (cols.length - 1));
      readout(P, m, x, 0.030, 0.062, 0.024, 4);
      knob(P, m, x, -0.035, 0.016);
      button(P, m, x, -0.062, 0.030, 0.011);
    });
    // autopilot / flight-director mode row
    const modes = airbus ? ['LOC', 'AP1', 'AP2', 'ATHR', 'EXPED', 'APPR'] : ['N1', 'SPEED', 'LVL', 'VNAV', 'LNAV', 'APP', 'CMD A', 'CMD B'];
    modes.forEach((mo, i) => {
      const x = -0.36 + i * (0.72 / (modes.length - 1));
      button(P, m, x, 0.062, 0.028, 0.016, i > modes.length - 3 ? m.lightGreen : null);
    });
    for (const s of [-1, 1]) {
      knob(P, m, s * 0.385, 0.0, 0.020);
      P.add(G.box, m.legend, { x: s * 0.385, y: -0.048, z: 0.010, sx: 0.05, sy: 0.008, sz: 0.002 });
    }
    // master warning / caution + fire bell, per side
    for (const s of [-1, 1]) {
      const W = new Panel(B, s * 0.62, -0.02, -0.83, -0.55);
      plate(W, m, 0, 0, 0.13, 0.10, { screws: 4 });
      annun(W, m, 0, 0.021, m.lightRed);
      annun(W, m, 0, -0.021, m.lightAmber);
      W.add(G.box, m.legend, { y: 0.043, z: 0.010, sx: 0.06, sy: 0.006, sz: 0.002 });
    }
    // glareshield floodlights + chart lights
    for (const s of [-1, 1]) {
      S.add(G.box, m.panelDark, { x: s * 0.44, y: 0.01, z: -0.92, sx: 0.16, sy: 0.03, sz: 0.05 });
      S.add(G.box, m.lightWhite, { x: s * 0.44, y: -0.005, z: -0.92, sx: 0.13, sy: 0.006, sz: 0.03 });
    }
  }

  // ------------------------------------------------------ 4. main panel
  {
    const P = new Panel(B, 0, -0.40, PANEL_Z, PANEL_TILT);
    plate(P, m, 0, 0, HW * 1.94, 0.74, { screws: 12 });
    // six display bays: PFD/ND per pilot + two centre EICAS/ECAM
    const bays = [
      { x: -0.68, y: 0.10, k: 'pfd', s: 0.235 }, { x: -0.40, y: 0.10, k: 'nd', s: 0.235 },
      { x: 0.00, y: 0.14, k: 'eicas', s: 0.215 }, { x: 0.00, y: -0.12, k: 'eicas2', s: 0.215 },
      { x: 0.40, y: 0.10, k: 'nd', s: 0.235 }, { x: 0.68, y: 0.10, k: 'pfd', s: 0.235 }
    ];
    for (const b of bays) {
      const sw = b.s, sh = b.s * 0.86;
      P.add(G.box, m.panelDark, { x: b.x, y: b.y, z: 0.012, sx: sw + 0.030, sy: sh + 0.030, sz: 0.014 });
      // bezel line-select buttons
      for (let i = 0; i < 5; i++) {
        button(P, m, b.x - sw / 2 - 0.020, b.y - sh / 2 + sh * (i + 0.5) / 5, 0.016, 0.020);
        button(P, m, b.x + sw / 2 + 0.020, b.y - sh / 2 + sh * (i + 0.5) / 5, 0.016, 0.020);
      }
      for (let i = 0; i < 4; i++) button(P, m, b.x - sw / 2 + sw * (i + 0.5) / 4, b.y - sh / 2 - 0.020, 0.020, 0.014);
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        P.add(G.cyl6, m.metal, { x: b.x + Math.cos(a) * (sw / 2 + 0.012), y: b.y + Math.sin(a) * (sh / 2 + 0.012), z: 0.020, sx: 0.004, sy: 0.003, sz: 0.004, rx: Math.PI / 2 });
      }
      // live screen (own mesh — canvas texture)
      const sc = displays.make(b.k, b.k === 'eicas' || b.k === 'eicas2' ? 448 : 512);
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(sw, sh),
        new THREE.MeshBasicMaterial({ map: sc.tex }));
      P.place(mesh, b.x, b.y, 0.021);
      group.add(mesh);
      screenMeshes.push(mesh);
    }
    // integrated standby instrument
    {
      const sc = displays.make('standby', 256);
      P.add(G.box, m.panelDark, { x: 0.19, y: -0.12, z: 0.012, sx: 0.115, sy: 0.115, sz: 0.014 });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(0.085, 0.073),
        new THREE.MeshBasicMaterial({ map: sc.tex }));
      P.place(mesh, 0.19, -0.12, 0.021);
      group.add(mesh);
      screenMeshes.push(mesh);
      for (let i = 0; i < 4; i++) button(P, m, 0.19 - 0.045 + i * 0.030, -0.185, 0.020, 0.013);
    }
    // EFIS control panels
    for (const s of [-1, 1]) {
      const E = new Panel(B, s * 0.545, -0.63, PANEL_Z + 0.02, PANEL_TILT);
      plate(E, m, 0, 0, 0.20, 0.15, { screws: 6 });
      knob(E, m, -0.055, 0.038, 0.019); knob(E, m, 0.055, 0.038, 0.019);
      knob(E, m, -0.055, -0.030, 0.017); knob(E, m, 0.055, -0.030, 0.017);
      for (let i = 0; i < 5; i++) button(E, m, -0.070 + i * 0.035, -0.062, 0.026, 0.014);
    }
    // landing gear lever + position lights
    {
      const Gp = new Panel(B, 0.36, -0.30, PANEL_Z + 0.02, PANEL_TILT);
      plate(Gp, m, 0, 0, 0.15, 0.24, { screws: 6 });
      Gp.add(G.box, m.panelDark, { x: 0, y: 0.02, z: 0.012, sx: 0.030, sy: 0.16, sz: 0.010 });
      for (const [yy, mat] of [[0.085, m.lightGreen], [0.030, m.lightGreen], [-0.025, m.lightGreen]]) annun(Gp, m, -0.045, yy, mat);
      annun(Gp, m, 0.045, 0.085, m.lightRed);
      const lever = new THREE.Group();
      const LB = new PieceBatcher();
      LB.add(G.cyl6, m.metal, { y: 0.055, sx: 0.010, sy: 0.11, sz: 0.010 });
      LB.add(G.sphere, m.white, { y: 0.115, sx: 0.024, sy: 0.030, sz: 0.024 });
      LB.add(G.box, m.panelDark, { y: 0.005, sx: 0.030, sy: 0.02, sz: 0.02 });
      LB.flush(lever, false);
      Gp.place(lever, 0, -0.03, 0.030);
      group.add(lever);
      parts.gearLever = lever;
      B.count += 3;
    }
    // autobrake, anti-skid, brake pressure, clock, flap gauge
    {
      const A = new Panel(B, 0.60, -0.30, PANEL_Z + 0.02, PANEL_TILT);
      plate(A, m, 0, 0, 0.19, 0.22, { screws: 6 });
      knob(A, m, -0.045, 0.055, 0.021);
      knob(A, m, 0.045, 0.055, 0.018);
      for (let i = 0; i < 6; i++) A.add(G.box, m.legend, { x: -0.045 + Math.sin(i * 1.05 - 2.6) * 0.033, y: 0.055 + Math.cos(i * 1.05 - 2.6) * 0.033, z: 0.010, sx: 0.005, sy: 0.005, sz: 0.002 });
      // brake pressure gauge with needle + dial marks
      A.add(G.cyl, m.panelDark, { x: -0.045, y: -0.045, z: 0.010, sx: 0.036, sy: 0.005, sz: 0.036, rx: Math.PI / 2 });
      A.add(G.box, m.white, { x: -0.045, y: -0.030, z: 0.015, sx: 0.003, sy: 0.028, sz: 0.002, rz: 0.6 });
      for (let i = 0; i < 8; i++) {
        const a = -2.4 + i * 0.68;
        A.add(G.box, m.legend, { x: -0.045 + Math.sin(a) * 0.028, y: -0.045 + Math.cos(a) * 0.028, z: 0.014, sx: 0.003, sy: 0.006, sz: 0.001, rz: -a });
      }
      readout(A, m, 0.045, -0.045, 0.052, 0.022, 4);
    }
    {
      const F = new Panel(B, -0.19, -0.12, PANEL_Z + 0.02, PANEL_TILT);
      F.add(G.cyl, m.panelDark, { z: 0.010, sx: 0.055, sy: 0.006, sz: 0.055, rx: Math.PI / 2 });
      F.add(G.box, m.white, { y: 0.020, z: 0.016, sx: 0.004, sy: 0.040, sz: 0.002 });
      F.add(G.box, m.lightGreen, { y: 0.018, z: 0.018, sx: 0.004, sy: 0.036, sz: 0.002, rz: 0.4 });
      for (let i = 0; i < 9; i++) {
        const a = -1.9 + i * 0.42;
        F.add(G.box, m.legend, { x: Math.sin(a) * 0.044, y: Math.cos(a) * 0.044, z: 0.014, sx: 0.003, sy: 0.008, sz: 0.001, rz: -a });
      }
    }
    // sub-panel divider frames + fastener rows across the whole panel
    for (const x of [-0.86, -0.55, -0.20, 0.20, 0.55, 0.86]) {
      P.add(G.box, m.trim, { x, y: 0, z: 0.011, sx: 0.008, sy: 0.72, sz: 0.004 });
      for (let i = 0; i < 8; i++) P.add(G.cyl6, m.metal, { x, y: -0.32 + i * 0.09, z: 0.014, sx: 0.0045, sy: 0.003, sz: 0.0045, rx: Math.PI / 2 });
    }
  }

  // -------------------------------------------------------- 5. pedestal
  {
    const S = new Panel(B, 0, 0, 0);
    // pedestal body
    S.add(G.box, m.panel, { y: (PED_TOP + FLOOR) / 2, z: -0.10, sx: 0.42, sy: PED_TOP - FLOOR, sz: 0.86 });
    S.add(G.box, m.trim, { y: PED_TOP + 0.005, z: -0.10, sx: 0.44, sy: 0.012, sz: 0.88 });

    // throttle quadrant (forward, sloping)
    const Q = new Panel(B, 0, PED_TOP + 0.02, -0.46, -0.62);
    plate(Q, m, 0, 0, 0.40, 0.26, { screws: 8 });
    Q.add(G.box, m.panelDark, { z: 0.012, sx: 0.30, sy: 0.16, sz: 0.010 });
    for (let i = 0; i < nEng; i++) {
      const x = nEng === 1 ? 0 : -0.105 + i * (0.21 / (nEng - 1));
      Q.add(G.box, m.panelDark, { x, z: 0.014, sx: 0.024, sy: 0.15, sz: 0.012 });
      const lever = new THREE.Group();
      const LB = new PieceBatcher();
      LB.add(G.box, m.metal, { y: 0.075, sx: 0.016, sy: 0.15, sz: 0.014 });
      LB.add(G.box, m.knob, { y: 0.158, sx: 0.040, sy: 0.045, sz: 0.032 });
      LB.add(G.box, m.panelDark, { y: 0.185, sx: 0.044, sy: 0.014, sz: 0.036 });
      LB.add(G.box, m.metal, { x: 0.014, y: 0.150, sx: 0.010, sy: 0.06, sz: 0.010, rz: 0.25 });
      LB.flush(lever, false);
      Q.place(lever, x, 0.02, 0.030);
      group.add(lever);
      parts.thrustLevers.push(lever);
      B.count += 4;
    }
    knob(Q, m, -0.165, -0.06, 0.016);
    for (let i = 0; i < nEng; i++) {
      const x = nEng === 1 ? 0 : -0.105 + i * (0.21 / (nEng - 1));
      toggle(Q, m, x, -0.095, { guard: true, light: true, on: true });
    }

    // flap lever with detent gate
    {
      const F = new Panel(B, 0.15, PED_TOP + 0.02, -0.16, -Math.PI / 2);
      plate(F, m, 0, 0, 0.13, 0.30, { screws: 6 });
      F.add(G.box, m.panelDark, { z: 0.012, sx: 0.030, sy: 0.24, sz: 0.010 });
      for (let i = 0; i < 7; i++) {
        F.add(G.box, m.metal, { x: 0.026, y: -0.10 + i * 0.033, z: 0.014, sx: 0.014, sy: 0.006, sz: 0.008 });
        F.add(G.box, m.legend, { x: 0.048, y: -0.10 + i * 0.033, z: 0.012, sx: 0.020, sy: 0.008, sz: 0.002 });
      }
      const lever = new THREE.Group();
      const LB = new PieceBatcher();
      LB.add(G.box, m.metal, { z: 0.03, sx: 0.014, sy: 0.014, sz: 0.09 });
      LB.add(G.box, m.knob, { z: 0.082, sx: 0.034, sy: 0.030, sz: 0.030 });
      LB.add(G.box, m.metal, { z: 0.062, sx: 0.020, sy: 0.010, sz: 0.020 });
      LB.flush(lever, false);
      F.place(lever, 0, -0.10, 0.014);
      group.add(lever);
      parts.flapLever = lever;
      parts.flapLeverBase = { panel: F, x: 0, y0: -0.10, y1: 0.11, z: 0.014 };
      B.count += 3;
    }
    // speedbrake lever
    {
      const V = new Panel(B, -0.15, PED_TOP + 0.02, -0.20, -Math.PI / 2);
      plate(V, m, 0, 0, 0.11, 0.24, { screws: 4 });
      V.add(G.box, m.panelDark, { z: 0.012, sx: 0.026, sy: 0.19, sz: 0.010 });
      for (let i = 0; i < 4; i++) V.add(G.box, m.legend, { x: 0.034, y: -0.07 + i * 0.045, z: 0.012, sx: 0.022, sy: 0.007, sz: 0.002 });
      const lever = new THREE.Group();
      const LB = new PieceBatcher();
      LB.add(G.box, m.metal, { z: 0.028, sx: 0.013, sy: 0.013, sz: 0.085 });
      LB.add(G.box, m.knob, { z: 0.078, sx: 0.030, sy: 0.026, sz: 0.026 });
      LB.flush(lever, false);
      V.place(lever, 0, -0.07, 0.014);
      group.add(lever);
      parts.speedbrakeLever = lever;
      parts.speedbrakeBase = { panel: V, y0: -0.07, y1: 0.075, z: 0.014 };
      B.count += 2;
    }
    // stabiliser trim wheels + indicator
    for (const s of [-1, 1]) {
      const wheel = new THREE.Group();
      const WB = new PieceBatcher();
      WB.add(G.cyl, m.knob, { sx: 0.085, sy: 0.022, sz: 0.085, rz: Math.PI / 2 });
      WB.add(G.cyl, m.metal, { sx: 0.030, sy: 0.026, sz: 0.030, rz: Math.PI / 2 });
      WB.add(G.box, m.white, { y: 0.058, sx: 0.026, sy: 0.030, sz: 0.014 });
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        WB.add(G.box, m.panelDark, { y: Math.cos(a) * 0.070, z: Math.sin(a) * 0.070, sx: 0.024, sy: 0.018, sz: 0.010, rx: -a });
      }
      WB.flush(wheel, false);
      wheel.position.set(s * 0.235, PED_TOP - 0.10, -0.30);
      group.add(wheel);
      parts.trimWheels.push(wheel);
      B.count += 11;
      S.add(G.box, m.panelDark, { x: s * 0.215, y: PED_TOP - 0.10, z: -0.30, sx: 0.02, sy: 0.20, sz: 0.20 });
    }
    S.add(G.box, m.panelDark, { x: 0, y: PED_TOP - 0.06, z: -0.30, sx: 0.09, sy: 0.10, sz: 0.03 });
    for (let i = 0; i < 5; i++) S.add(G.box, m.legend, { x: -0.03 + i * 0.015, y: PED_TOP - 0.06, z: -0.285, sx: 0.008, sy: 0.05, sz: 0.002 });

    // two FMC / CDU units — full alpha-numeric keyboards
    for (const s of [-1, 1]) {
      const C = new Panel(B, s * 0.115, PED_TOP + 0.015, 0.02, -Math.PI / 2 + 0.12);
      plate(C, m, 0, 0, 0.20, 0.30, { screws: 8 });
      const sc = displays.make('cdu', 256);
      C.add(G.box, m.panelDark, { y: 0.088, z: 0.012, sx: 0.150, sy: 0.100, sz: 0.010 });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(0.128, 0.082),
        new THREE.MeshBasicMaterial({ map: sc.tex }));
      C.place(mesh, 0, 0.088, 0.019);
      group.add(mesh);
      screenMeshes.push(mesh);
      // line-select keys down both sides of the screen
      for (let i = 0; i < 6; i++) {
        button(C, m, -0.086, 0.126 - i * 0.017, 0.014, 0.010);
        button(C, m, 0.086, 0.126 - i * 0.017, 0.014, 0.010);
      }
      // function row + 6x8 alpha-numeric block
      const fn = ['INIT', 'RTE', 'CLB', 'CRZ', 'DES', 'MENU', 'LEGS', 'DEP', 'HOLD', 'PROG', 'EXEC', 'N1'];
      fn.forEach((f, i) => button(C, m, -0.075 + (i % 6) * 0.030, 0.020 - Math.floor(i / 6) * 0.022, 0.024, 0.016,
        f === 'EXEC' ? m.lightGreen : null));
      for (let r = 0; r < 6; r++) {
        for (let c2 = 0; c2 < 6; c2++) {
          button(C, m, -0.075 + c2 * 0.030, -0.030 - r * 0.020, 0.024, 0.015);
        }
      }
      // annunciators
      for (let i = 0; i < 4; i++) annun(C, m, -0.060 + i * 0.040, 0.148, i === 0 ? m.lightAmber : m.lightOff);
    }

    // radio / audio / transponder / weather-radar panels aft of the CDUs
    const stack = [
      { z: 0.30, knobs: 4, btns: 8, reads: 2 },
      { z: 0.42, knobs: 4, btns: 8, reads: 2 },
      { z: 0.54, knobs: 3, btns: 12, reads: 1 },
      { z: 0.66, knobs: 4, btns: 6, reads: 1 },
      { z: 0.78, knobs: 2, btns: 10, reads: 1 }
    ];
    for (const st of stack) {
      const R2 = new Panel(B, 0, PED_TOP + 0.015, st.z, -Math.PI / 2);
      plate(R2, m, 0, 0, 0.38, 0.10, { screws: 6 });
      for (let i = 0; i < st.reads; i++) readout(R2, m, -0.10 + i * 0.20, 0.026, 0.075, 0.020, 5);
      for (let i = 0; i < st.knobs; i++) knob(R2, m, -0.145 + i * 0.095, -0.026, 0.015);
      for (let i = 0; i < st.btns; i++) button(R2, m, -0.165 + (i % 6) * 0.066, 0.026 - Math.floor(i / 6) * 0.040, 0.030, 0.014);
    }
    // rudder / aileron trim + parking brake at the aft end
    const T2 = new Panel(B, 0, PED_TOP + 0.015, 0.90, -Math.PI / 2);
    plate(T2, m, 0, 0, 0.34, 0.10, { screws: 4 });
    knob(T2, m, -0.10, 0, 0.022);
    knob(T2, m, 0.10, 0, 0.019);
    T2.add(G.box, m.metal, { x: 0, y: 0.02, z: 0.020, sx: 0.016, sy: 0.05, sz: 0.016 });
    annun(T2, m, 0, -0.030, m.lightRed);
  }

  // ------------------------------------------------------- 6. overhead
  {
    // Fifteen system sub-panels laid out in two banks, facing down.
    const subs = [
      { name: 'FLT CONTROL', x: -0.34, z: -0.42, w: 0.30, h: 0.20, sw: 6, kn: 0, an: 4, gu: 4 },
      { name: 'NAV/DSPL', x: 0.00, z: -0.42, w: 0.30, h: 0.20, sw: 2, kn: 4, an: 2, gu: 0 },
      { name: 'FUEL', x: 0.34, z: -0.42, w: 0.30, h: 0.20, sw: 8, kn: 0, an: 8, gu: 0 },
      { name: 'ELEC', x: -0.34, z: -0.20, w: 0.30, h: 0.20, sw: 10, kn: 2, an: 8, gu: 2 },
      { name: 'APU', x: 0.00, z: -0.20, w: 0.30, h: 0.20, sw: 4, kn: 1, an: 4, gu: 1 },
      { name: 'START', x: 0.34, z: -0.20, w: 0.30, h: 0.20, sw: 4, kn: 2, an: 4, gu: 0 },
      { name: 'ANTI-ICE', x: -0.34, z: 0.02, w: 0.30, h: 0.20, sw: 8, kn: 0, an: 6, gu: 2 },
      { name: 'HYD', x: 0.00, z: 0.02, w: 0.30, h: 0.20, sw: 4, kn: 0, an: 6, gu: 0 },
      { name: 'BLEED/PACK', x: 0.34, z: 0.02, w: 0.30, h: 0.20, sw: 10, kn: 1, an: 6, gu: 0 },
      { name: 'PRESS', x: -0.34, z: 0.24, w: 0.30, h: 0.20, sw: 3, kn: 3, an: 3, gu: 0 },
      { name: 'LIGHTS EXT', x: 0.00, z: 0.24, w: 0.30, h: 0.20, sw: 10, kn: 0, an: 2, gu: 0 },
      { name: 'LIGHTS INT', x: 0.34, z: 0.24, w: 0.30, h: 0.20, sw: 6, kn: 4, an: 0, gu: 0 },
      { name: 'OXY/CVR', x: -0.34, z: 0.46, w: 0.30, h: 0.18, sw: 4, kn: 1, an: 2, gu: 1 },
      { name: 'IRS/ADIRU', x: 0.00, z: 0.46, w: 0.30, h: 0.18, sw: 2, kn: 2, an: 6, gu: 0 },
      { name: 'WIPERS', x: 0.34, z: 0.46, w: 0.30, h: 0.18, sw: 2, kn: 2, an: 0, gu: 0 }
    ];
    for (const s of subs) {
      const P = new Panel(B, s.x, OVH_Y, s.z, Math.PI / 2);
      plate(P, m, 0, 0, s.w, s.h, { screws: 8 });
      P.add(G.box, m.legend, { y: s.h / 2 - 0.014, z: 0.010, sx: s.w * 0.55, sy: 0.010, sz: 0.002 });
      let gi = 0;
      for (let i = 0; i < s.sw; i++) {
        const cols2 = Math.min(5, s.sw);
        const x = -s.w / 2 + s.w * ((i % cols2) + 0.5) / cols2;
        const y = 0.03 - Math.floor(i / cols2) * 0.055;
        toggle(P, m, x, y, { guard: gi++ < s.gu, light: true, on: i % 3 !== 0 });
      }
      for (let i = 0; i < s.kn; i++) knob(P, m, -s.w / 2 + s.w * (i + 0.5) / Math.max(s.kn, 1), -s.h / 2 + 0.030, 0.016);
      for (let i = 0; i < s.an; i++) {
        annun(P, m, -s.w / 2 + s.w * ((i % 4) + 0.5) / 4, s.h / 2 - 0.038 - Math.floor(i / 4) * 0.024,
          i % 5 === 0 ? m.lightAmber : m.lightOff);
      }
    }
    // structural frames between the banks + the aft circuit-breaker bank
    const S = new Panel(B, 0, 0, 0);
    for (const z of [-0.53, -0.31, -0.09, 0.13, 0.35, 0.56]) S.add(G.box, m.trim, { y: OVH_Y + 0.012, z, sx: 1.06, sy: 0.012, sz: 0.010 });
    for (const x of [-0.51, -0.17, 0.17, 0.51]) S.add(G.box, m.trim, { x, y: OVH_Y + 0.012, z: 0.02, sx: 0.010, sy: 0.012, sz: 1.12 });
    {
      const P = new Panel(B, 0, OVH_Y + 0.02, 0.76, Math.PI / 2);
      plate(P, m, 0, 0, 0.96, 0.34, { screws: 10 });
      for (let c2 = 0; c2 < 11; c2++) {
        for (let r = 0; r < 16; r++) breaker(P, m, -0.435 + c2 * 0.0870, -0.150 + r * 0.0200);
      }
    }
  }

  // ------------------------------------------- 7. side circuit breakers
  for (const s of [-1, 1]) {
    const P = new Panel(B, s * (HW - 0.045), -0.10, 0.34, 0, s * Math.PI / 2);
    plate(P, m, 0, 0, 0.80, 0.62, { screws: 10 });
    for (let c2 = 0; c2 < 11; c2++) {
      for (let r = 0; r < 17; r++) breaker(P, m, -0.360 + c2 * 0.0720, -0.272 + r * 0.0340);
    }
    for (let r = 0; r < 4; r++) P.add(G.box, m.legend, { x: 0, y: 0.30 - r * 0.145, z: 0.010, sx: 0.78, sy: 0.006, sz: 0.002 });
  }

  // ---------------------------------------------------------- 8. seats
  for (const s of [-1, 1]) {
    const S = new Panel(B, s * 0.46, 0, 0.30);
    S.add(G.box, m.metal, { y: FLOOR + 0.09, sx: 0.30, sy: 0.10, sz: 0.34 });
    S.add(G.cyl, m.metal, { y: FLOOR + 0.24, sx: 0.055, sy: 0.20, sz: 0.055 });
    S.add(G.box, m.leather, { y: FLOOR + 0.38, sx: 0.44, sy: 0.10, sz: 0.44 });
    S.add(G.box, m.leather, { y: FLOOR + 0.66, z: 0.20, sx: 0.44, sy: 0.56, sz: 0.10, rx: 0.14 });
    S.add(G.box, m.leather, { y: FLOOR + 0.98, z: 0.23, sx: 0.26, sy: 0.16, sz: 0.10 });
    for (const a of [-1, 1]) {
      S.add(G.box, m.fabric, { x: a * 0.24, y: FLOOR + 0.50, z: 0.02, sx: 0.06, sy: 0.05, sz: 0.30, rz: a * 0.1 });
      S.add(G.cyl6, m.metal, { x: a * 0.24, y: FLOOR + 0.44, z: 0.10, sx: 0.012, sy: 0.10, sz: 0.012 });
    }
    for (const a of [-1, 1]) {
      S.add(G.box, m.fabric, { x: a * 0.10, y: FLOOR + 0.60, z: 0.14, sx: 0.06, sy: 0.36, sz: 0.02, rx: 0.14 });
      S.add(G.box, m.metal, { x: a * 0.10, y: FLOOR + 0.42, z: 0.02, sx: 0.05, sy: 0.03, sz: 0.02 });
    }
    S.add(G.box, m.metal, { x: 0, y: FLOOR + 0.41, z: -0.02, sx: 0.07, sy: 0.05, sz: 0.05 });
    S.add(G.box, m.metal, { x: -s * 0.23, y: FLOOR + 0.35, z: -0.14, sx: 0.10, sy: 0.03, sz: 0.03 });
  }
  {
    // observer jumpseat, folded against the rear bulkhead
    const S = new Panel(B, 0.02, 0, 0.86);
    S.add(G.box, m.fabric, { y: FLOOR + 0.52, sx: 0.36, sy: 0.06, sz: 0.20, rx: 0.9 });
    S.add(G.box, m.fabric, { y: FLOOR + 0.80, z: 0.06, sx: 0.36, sy: 0.42, sz: 0.06 });
    S.add(G.box, m.metal, { y: FLOOR + 0.30, sx: 0.05, sy: 0.60, sz: 0.05 });
    for (const a of [-1, 1]) S.add(G.box, m.metal, { x: a * 0.15, y: FLOOR + 0.62, z: 0.02, sx: 0.03, sy: 0.30, sz: 0.03 });
    for (let i = 0; i < 4; i++) S.add(G.box, m.legend, { x: -0.09 + i * 0.06, y: FLOOR + 0.66, z: 0.05, sx: 0.03, sy: 0.16, sz: 0.008 });
  }

  // ------------------------------------------------------- 9. controls
  for (const s of [-1, 1]) {
    if (airbus || sst) {
      // sidestick on the outboard console
      const S = new Panel(B, s * 0.80, 0, 0.12);
      S.add(G.box, m.panel, { y: FLOOR + 0.42, sx: 0.22, sy: 0.14, sz: 0.44 });
      const stick = new THREE.Group();
      const SB = new PieceBatcher();
      SB.add(G.cyl, m.panelDark, { y: 0.02, sx: 0.035, sy: 0.05, sz: 0.035 });
      SB.add(G.cyl, m.metal, { y: 0.12, sx: 0.018, sy: 0.20, sz: 0.018 });
      SB.add(G.box, m.knob, { y: 0.25, sx: 0.05, sy: 0.11, sz: 0.06 });
      SB.add(G.box, m.button, { y: 0.30, z: -0.026, sx: 0.022, sy: 0.014, sz: 0.010 });
      SB.add(G.box, m.lightRed, { y: 0.27, z: -0.028, sx: 0.018, sy: 0.010, sz: 0.008 });
      SB.add(G.box, m.button, { x: s * 0.022, y: 0.26, sx: 0.010, sy: 0.016, sz: 0.016 });
      SB.flush(stick, false);
      S.place(stick, 0, FLOOR + 0.49, 0);
      group.add(stick);
      parts.yokes.push(stick);
      B.count += 6;
    } else {
      // control column + yoke wheel with grips and switch cluster
      const S = new Panel(B, s * 0.46, 0, -0.30);
      S.add(G.box, m.panelDark, { y: FLOOR + 0.06, sx: 0.16, sy: 0.10, sz: 0.20 });
      const yoke = new THREE.Group();
      const YB = new PieceBatcher();
      YB.add(G.cyl, m.metal, { y: 0.20, sx: 0.026, sy: 0.42, sz: 0.026, rx: 0.18 });
      YB.add(G.cyl, m.panelDark, { y: 0.42, z: -0.045, sx: 0.040, sy: 0.10, sz: 0.040, rx: 1.4 });
      YB.add(G.box, m.knob, { y: 0.44, z: -0.08, sx: 0.34, sy: 0.030, sz: 0.028 });
      for (const a of [-1, 1]) {
        YB.add(G.box, m.knob, { x: a * 0.16, y: 0.50, z: -0.08, sx: 0.030, sy: 0.14, sz: 0.028 });
        YB.add(G.box, m.knob, { x: a * 0.145, y: 0.565, z: -0.08, sx: 0.075, sy: 0.030, sz: 0.030, rz: -a * 0.35 });
        YB.add(G.box, m.rubber, { x: a * 0.175, y: 0.475, z: -0.075, sx: 0.045, sy: 0.10, sz: 0.045 });
        YB.add(G.box, m.button, { x: a * 0.175, y: 0.520, z: -0.098, sx: 0.020, sy: 0.014, sz: 0.010 });
        YB.add(G.box, m.button, { x: a * 0.175, y: 0.495, z: -0.098, sx: 0.020, sy: 0.014, sz: 0.010 });
        YB.add(G.box, m.lightWhite, { x: a * 0.175, y: 0.450, z: -0.098, sx: 0.016, sy: 0.010, sz: 0.008 });
      }
      YB.add(G.box, m.button, { y: 0.44, z: -0.10, sx: 0.030, sy: 0.020, sz: 0.012 });
      YB.add(G.box, m.legend, { y: 0.41, z: -0.098, sx: 0.10, sy: 0.010, sz: 0.003 });
      YB.flush(yoke, false);
      S.place(yoke, 0, FLOOR + 0.10, 0);
      group.add(yoke);
      parts.yokes.push(yoke);
      B.count += 19;
    }
    // rudder pedals (upper + lower pair with linkage)
    const Pd = new Panel(B, s * 0.42, 0, -0.68);
    Pd.add(G.box, m.metal, { y: FLOOR + 0.06, sx: 0.22, sy: 0.04, sz: 0.30 });
    for (const a of [-1, 1]) {
      const ped = new THREE.Group();
      const PB = new PieceBatcher();
      PB.add(G.box, m.metal, { sx: 0.10, sy: 0.17, sz: 0.020, rx: 0.42 });
      PB.add(G.box, m.rubber, { z: -0.014, sx: 0.085, sy: 0.15, sz: 0.008, rx: 0.42 });
      PB.add(G.cyl6, m.metal, { y: -0.10, sx: 0.010, sy: 0.14, sz: 0.010, rx: 0.30 });
      PB.add(G.box, m.metal, { y: -0.17, sx: 0.05, sy: 0.03, sz: 0.05 });
      PB.flush(ped, false);
      Pd.place(ped, a * 0.075, FLOOR + 0.24, -0.02);
      group.add(ped);
      parts.pedals.push({ obj: ped, side: s, foot: a });
      B.count += 4;
    }
  }
  {
    // nose-wheel steering tiller, captain's side
    const S = new Panel(B, -(HW - 0.12), 0, 0.05);
    S.add(G.box, m.panel, { y: FLOOR + 0.55, sx: 0.14, sy: 0.10, sz: 0.30 });
    S.add(G.cyl, m.knob, { y: FLOOR + 0.64, sx: 0.075, sy: 0.020, sz: 0.075, rz: Math.PI / 2 });
    S.add(G.box, m.knob, { x: 0.02, y: FLOOR + 0.70, sx: 0.03, sy: 0.05, sz: 0.03 });
    S.add(G.box, m.legend, { y: FLOOR + 0.61, z: 0.14, sx: 0.10, sy: 0.008, sz: 0.002 });
  }

  // ---------------------------------------------------- 10. furnishings
  {
    const S = new Panel(B, 0, 0, 0);
    for (const s of [-1, 1]) {
      // oxygen mask stowage box
      S.add(G.box, m.panelDark, { x: s * 0.86, y: 0.20, z: 0.30, sx: 0.18, sy: 0.20, sz: 0.22 });
      S.add(G.box, m.lightRed, { x: s * 0.78, y: 0.20, z: 0.30, sx: 0.012, sy: 0.06, sz: 0.06 });
      S.add(G.box, m.legend, { x: s * 0.775, y: 0.31, z: 0.30, sx: 0.008, sy: 0.02, sz: 0.14 });
      // gasper vents
      for (let i = 0; i < 2; i++) {
        S.add(G.cyl, m.panelDark, { x: s * 0.62, y: CEIL - 0.04, z: -0.10 + i * 0.20, sx: 0.030, sy: 0.020, sz: 0.030 });
        S.add(G.cyl, m.metal, { x: s * 0.62, y: CEIL - 0.055, z: -0.10 + i * 0.20, sx: 0.020, sy: 0.012, sz: 0.020 });
      }
      // EFB mount + chart clip + cup holder + coat hook
      S.add(G.box, m.metal, { x: s * (HW - 0.10), y: 0.05, z: -0.30, sx: 0.02, sy: 0.14, sz: 0.10 });
      S.add(G.box, m.panelDark, { x: s * (HW - 0.13), y: 0.05, z: -0.30, sx: 0.02, sy: 0.20, sz: 0.15 });
      S.add(G.box, m.screenGlass, { x: s * (HW - 0.145), y: 0.05, z: -0.30, sx: 0.006, sy: 0.17, sz: 0.13 });
      S.add(G.box, m.metal, { x: s * (HW - 0.06), y: -0.30, z: 0.10, sx: 0.05, sy: 0.02, sz: 0.09 });
      S.add(G.cyl, m.metal, { x: s * (HW - 0.08), y: -0.34, z: 0.10, sx: 0.035, sy: 0.03, sz: 0.035 });
      S.add(G.box, m.metal, { x: s * (HW - 0.04), y: 0.42, z: 0.60, sx: 0.03, sy: 0.03, sz: 0.02 });
      // placards
      for (let i = 0; i < 6; i++) S.add(G.box, m.legend, { x: s * (HW - 0.045), y: -0.50 + i * 0.06, z: -0.20, sx: 0.004, sy: 0.020, sz: 0.075 });
    }
    // fire extinguisher, crash axe, escape rope hatch
    S.add(G.cyl, m.lightRed, { x: -0.86, y: FLOOR + 0.30, z: 0.72, sx: 0.055, sy: 0.28, sz: 0.055 });
    S.add(G.cyl, m.metal, { x: -0.86, y: FLOOR + 0.46, z: 0.72, sx: 0.020, sy: 0.06, sz: 0.020 });
    S.add(G.box, m.metal, { x: 0.86, y: FLOOR + 0.60, z: 0.80, sx: 0.03, sy: 0.26, sz: 0.02, rz: 0.4 });
    S.add(G.box, m.panelDark, { x: 0, y: CEIL - 0.01, z: 0.62, sx: 0.26, sy: 0.02, sz: 0.26 });
    for (let i = 0; i < 4; i++) S.add(G.cyl6, m.metal, { x: -0.10 + (i % 2) * 0.20, y: CEIL - 0.025, z: 0.52 + Math.floor(i / 2) * 0.20, sx: 0.006, sy: 0.006, sz: 0.006 });
  }

  const count = B.count + screenMeshes.length;
  B.flush(group, false);
  group.visible = false;
  return { group, parts, displays, screenMeshes, count };
}
