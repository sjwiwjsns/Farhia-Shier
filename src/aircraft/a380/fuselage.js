// A380 fuselage: lofted double-bubble hull with the trademark low cockpit
// brow, wing-to-body belly fairing, 6-pane cockpit glazing, 16 cabin doors
// across two decks, blade antennas, beacon, pitots and APU tail cone.
import * as THREE from 'three';
import { clamp, lerp } from '../../core/math.js';
import { A380 } from './spec.js';

// Interpolated cross-section parameters at any t along the fuselage.
export function sectionAt(t) {
  const s = A380.fuselage.sections;
  t = clamp(t, 0, 1);
  let i = 0;
  while (i < s.length - 2 && s[i + 1].t < t) i++;
  const a = s[i], b = s[i + 1];
  const f = b.t > a.t ? (t - a.t) / (b.t - a.t) : 0;
  return {
    w: lerp(a.w, b.w, f),
    up: lerp(a.up, b.up, f),
    lo: lerp(a.lo, b.lo, f),
    yC: lerp(a.yC, b.yC, f)
  };
}

// Half-height blends smoothly from keel (lo) to crown (up) around the ring —
// no crease at the widest point.
function ringPoint(sec, phi) {
  const c = Math.cos(phi);
  const blend = Math.pow(0.5 - 0.5 * c, 1.15);
  const h = sec.lo + (sec.up - sec.lo) * blend;
  return { x: sec.w * Math.sin(phi), y: sec.yC - h * c };
}

export function surfaceXAt(t, y) {
  // solve the ring for the station whose height matches y; returns half-width
  const sec = sectionAt(t);
  let best = 0, bestErr = 1e9;
  for (let i = 1; i < 64; i++) {
    const p = ringPoint(sec, (i / 64) * Math.PI); // right half only
    const err = Math.abs(p.y - y);
    if (err < bestErr) { bestErr = err; best = p.x; }
  }
  return best;
}

export function crownYAt(t) { const s = sectionAt(t); return s.yC + s.up; }
export function keelYAt(t) { const s = sectionAt(t); return s.yC - s.lo; }

// ------------------------------------------------------------------- loft
function buildLoft(materials, detail) {
  const L = A380.length;
  const radial = Math.round(A380.fuselage.radialSegments * clamp(detail, 0.4, 1));
  const lengthSegs = Math.round(88 * clamp(detail, 0.4, 1));
  const pos = [], uv = [], idx = [];

  for (let i = 0; i <= lengthSegs; i++) {
    const t = i / lengthSegs;
    // extra sampling density at the nose (fast curvature)
    const te = t < 0.25 ? Math.pow(t / 0.25, 1.35) * 0.25 : t;
    const sec = sectionAt(te);
    const z = -L / 2 + te * L;
    for (let j = 0; j <= radial; j++) {
      const phi = (j / radial) * Math.PI * 2;
      const p = ringPoint(sec, phi);
      pos.push(p.x, p.y, z);
      uv.push(te, j / radial);
    }
  }
  const ring = radial + 1;
  for (let i = 0; i < lengthSegs; i++) {
    for (let j = 0; j < radial; j++) {
      const a = i * ring + j, b = a + ring;
      // outward-facing winding (front faces point out of the hull)
      idx.push(a, a + 1, b, b, a + 1, b + 1);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, materials.fuselage);
  mesh.castShadow = mesh.receiveShadow = true;
  return mesh;
}

// ------------------------------------------------------------ belly fairing
function buildBellyFairing(materials, detail) {
  const L = A380.length;
  const bf = A380.fuselage.bellyFairing;
  const segsL = Math.round(20 * clamp(detail, 0.4, 1));
  const segsR = Math.round(14 * clamp(detail, 0.4, 1));
  const pos = [], idx = [], uv = [];
  const len = (bf.tEnd - bf.tStart) * L;

  for (let i = 0; i <= segsL; i++) {
    const f = i / segsL;
    const t = bf.tStart + (bf.tEnd - bf.tStart) * f;
    const z = -L / 2 + t * L;
    // fairing depth swells in the middle, feathers to the hull at the ends
    const swell = Math.sin(f * Math.PI);
    const halfW = lerp(3.3, bf.halfW, swell);
    const depth = bf.depth * Math.pow(swell, 0.7);
    for (let j = 0; j <= segsR; j++) {
      const phi = Math.PI + (j / segsR) * Math.PI; // lower half arc only
      const x = halfW * Math.sin(phi + Math.PI);   // -> ±halfW
      const y = bf.yTop - depth * Math.max(0, -Math.cos(phi + Math.PI));
      pos.push(x, y, z);
      uv.push(t, j / segsR * 0.1); // maps into the belly band of the livery
    }
  }
  const ring = segsR + 1;
  for (let i = 0; i < segsL; i++) {
    for (let j = 0; j < segsR; j++) {
      const a = i * ring + j, b = a + ring;
      idx.push(a, a + 1, b, b, a + 1, b + 1);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, materials.belly);
  mesh.castShadow = true;
  return mesh;
}

// --------------------------------------------------------- cockpit glazing
function buildCockpitWindows(materials) {
  const grp = new THREE.Group();
  const cp = A380.cockpit;
  const L = A380.length;
  const zC = -L / 2 + cp.x;
  const sec = sectionAt(cp.x / L);
  const rArc = sec.w * 1.02;
  for (const aDeg of [-58, -35, -12, 12, 35, 58]) {
    const a = aDeg * Math.PI / 180;
    const pane = new THREE.Mesh(new THREE.BoxGeometry(cp.paneW, cp.paneH, 0.05), materials.glassDark);
    pane.position.set(
      Math.sin(a) * rArc * 0.92,
      cp.y,
      zC - Math.cos(a) * rArc * 0.30 + Math.abs(Math.sin(a)) * rArc * 0.34
    );
    pane.rotation.y = -a;
    pane.rotation.x = -0.30; // windshield rake
    grp.add(pane);
    // frame post between panes
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.07, cp.paneH * 1.06, 0.06), materials.dark);
    post.position.copy(pane.position);
    post.position.x += Math.cos(a) * (cp.paneW / 2 + 0.035) * Math.sign(aDeg || 1);
    post.rotation.copy(pane.rotation);
    grp.add(post);
  }
  return grp;
}

// ------------------------------------------------------------------- doors
function buildDoors(materials) {
  const grp = new THREE.Group();
  const L = A380.length;
  const d = A380.doors;
  for (const st of d.stations) {
    const t = st.x / L;
    const y = st.deck === 'main' ? d.mainDeckY : d.upperDeckY;
    const xSurf = surfaceXAt(t, y);
    for (const side of [1, -1]) {
      const door = new THREE.Mesh(new THREE.BoxGeometry(0.05, d.height, d.width), materials.doorTrim);
      door.position.set(side * (xSurf + 0.015), y, -L / 2 + st.x);
      grp.add(door);
      const handleBar = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.08, d.width * 0.5), materials.dark);
      handleBar.position.set(side * (xSurf + 0.05), y + d.height * 0.28, -L / 2 + st.x);
      grp.add(handleBar);
    }
  }
  return grp;
}

// ----------------------------------------------------------- small details
function buildDetails(materials) {
  const grp = new THREE.Group();
  const L = A380.length;
  const det = A380.details;

  const blade = (x, top) => {
    const t = x / L;
    const y = top ? crownYAt(t) : keelYAt(t);
    const m = new THREE.Mesh(new THREE.ConeGeometry(0.30, 0.72, 4), materials.white);
    m.scale.set(0.16, 1, 1);
    m.position.set(0, y + (top ? 0.32 : -0.32), -L / 2 + x);
    if (!top) m.rotation.z = Math.PI;
    m.rotation.x = top ? -0.35 : 0.35; // swept aft
    grp.add(m);
  };
  for (const x of det.antennasTop) blade(x, true);
  for (const x of det.antennasBottom) blade(x, false);

  // anti-collision beacon on the crown
  const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.10, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0xd22a1e }));
  beacon.position.set(0, crownYAt(det.beaconX / L) + 0.06, -L / 2 + det.beaconX);
  grp.add(beacon);

  // satcom dome fairing on the spine (low blister aft of the wing box)
  const sd = A380.fuselage.satcomDome;
  if (sd) {
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(1, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), materials.white);
    dome.scale.set(sd.width / 2, sd.height, sd.length / 2);
    dome.position.set(0, crownYAt(sd.t) - 0.06, -L / 2 + sd.t * L);
    dome.castShadow = true;
    grp.add(dome);
  }

  // pitot probes near the nose
  for (const side of [1, -1]) {
    const pitot = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.04, 0.5, 6), materials.grey);
    pitot.rotation.x = Math.PI / 2;
    const tN = det.pitotX / L;
    pitot.position.set(side * surfaceXAt(tN, -1.1) * 0.98, -1.1, -L / 2 + det.pitotX - 0.2);
    grp.add(pitot);
  }

  // APU exhaust at the very tail
  const apu = new THREE.Mesh(new THREE.CylinderGeometry(det.apuExhaustRadius, det.apuExhaustRadius * 0.8, 0.7, 12),
    materials.dark);
  apu.rotation.x = Math.PI / 2;
  const tailSec = sectionAt(0.995);
  apu.position.set(0, tailSec.yC, L / 2 - 0.2);
  grp.add(apu);

  // nav lights (visual dressing; always-day world)
  const nav = (x, y, z, color) => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 5), new THREE.MeshBasicMaterial({ color }));
    m.position.set(x, y, z);
    grp.add(m);
  };
  nav(0, sectionAt(0.99).yC + 0.4, L / 2 - 0.5, 0xffffff); // tail white
  return grp;
}

export function buildA380Fuselage(materials, detail) {
  const group = new THREE.Group();
  group.add(buildLoft(materials, detail));
  group.add(buildBellyFairing(materials, detail));
  group.add(buildCockpitWindows(materials));
  if (detail > 0.6) {
    group.add(buildDoors(materials));
    group.add(buildDetails(materials));
  }
  return group;
}
