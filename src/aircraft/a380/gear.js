// A380 undercarriage — all 22 wheels: twin nosewheel, two 4-wheel wing
// bogies and two 6-wheel body bogies, with oleo struts, drag braces, bogie
// beams, hub caps and scissor links. Group origins sit at the retraction
// pivot so the entity's gear animation works unchanged.
import * as THREE from 'three';
import { A380 } from './spec.js';

function makeWheel(materials, detail) {
  const g = A380.gear;
  const seg = detail > 0.6 ? 16 : 10;
  const grp = new THREE.Group();
  const tyre = new THREE.Mesh(new THREE.CylinderGeometry(g.wheelRadius, g.wheelRadius, g.wheelWidth, seg), materials.tyre);
  tyre.rotation.z = Math.PI / 2;
  tyre.castShadow = true;
  grp.add(tyre);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(g.wheelRadius * 0.42, g.wheelRadius * 0.42, g.wheelWidth * 1.04, seg), materials.hub);
  hub.rotation.z = Math.PI / 2;
  grp.add(hub);
  return grp;
}

function makeStrut(len, r, materials) {
  const strut = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 1.15, len, 10), materials.strut);
  strut.position.y = -len / 2;
  strut.castShadow = true;
  return strut;
}

// scissor link (torque link) dressing on the oleo
function makeScissor(len, materials) {
  const grp = new THREE.Group();
  for (const [y, rot] of [[-len * 0.55, 0.5], [-len * 0.75, -0.5]]) {
    const link = new THREE.Mesh(new THREE.BoxGeometry(0.10, len * 0.24, 0.16), materials.hub);
    link.position.set(0, y, 0.16);
    link.rotation.x = rot;
    grp.add(link);
  }
  return grp;
}

function makeBogie(axles, materials, detail) {
  const g = A380.gear;
  const grp = new THREE.Group();
  const spacing = g.wheelRadius * 2.35;
  const beamLen = (axles - 1) * spacing + g.wheelRadius * 1.5;
  const beam = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.40, beamLen), materials.strut);
  beam.castShadow = true;
  grp.add(beam);
  for (let a = 0; a < axles; a++) {
    const zA = -beamLen / 2 + g.wheelRadius * 0.75 + a * spacing;
    const axle = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, g.wheelWidth * 2 + 0.7, 8), materials.strut);
    axle.rotation.z = Math.PI / 2;
    axle.position.set(0, -0.1, zA);
    grp.add(axle);
    for (const side of [1, -1]) {
      const wheel = makeWheel(materials, detail);
      wheel.position.set(side * (g.wheelWidth / 2 + 0.36), -0.1, zA);
      grp.add(wheel);
    }
  }
  return grp;
}

export function buildA380Gear(materials, parts, detail) {
  const g = A380.gear;
  const L = A380.length;
  const group = new THREE.Group();

  // ---------------- nose gear (twin, steerable)
  {
    const attachY = -3.6;
    const strutLen = g.height + attachY - g.wheelRadius; // to axle height
    const nose = new THREE.Group();
    nose.position.set(0, attachY, -L / 2 + g.nose.x);
    nose.add(makeStrut(strutLen, 0.16, materials));
    nose.add(makeScissor(strutLen, materials));
    const drag = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, strutLen * 0.7, 8), materials.strut);
    drag.position.set(0, -strutLen * 0.4, -strutLen * 0.28);
    drag.rotation.x = 0.6;
    nose.add(drag);
    for (const side of [1, -1]) {
      const wheel = makeWheel(materials, detail);
      wheel.scale.setScalar(0.85);
      wheel.position.set(side * 0.42, -strutLen, 0);
      nose.add(wheel);
    }
    // landing lights on the nose strut
    const light = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 5), new THREE.MeshBasicMaterial({ color: 0xf8f4d8 }));
    light.position.set(0, -strutLen * 0.35, -0.25);
    nose.add(light);
    group.add(nose);
    parts.gearNose = nose;
  }

  // ---------------- wing gear (4-wheel bogies)
  for (const side of [1, -1]) {
    const attachY = -3.3;
    const strutLen = g.height + attachY - g.wheelRadius + 0.1;
    const leg = new THREE.Group();
    leg.position.set(side * g.wing.track, attachY, -L / 2 + g.wing.x);
    leg.add(makeStrut(strutLen, 0.24, materials));
    leg.add(makeScissor(strutLen, materials));
    const sideBrace = new THREE.Mesh(new THREE.CylinderGeometry(0.10, 0.10, strutLen * 0.85, 8), materials.strut);
    sideBrace.position.set(-side * strutLen * 0.28, -strutLen * 0.5, 0);
    sideBrace.rotation.z = side * 0.55;
    leg.add(sideBrace);
    const bogie = makeBogie(2, materials, detail);
    bogie.position.set(0, -strutLen, 0);
    bogie.rotation.x = -0.06; // parked bogie tilt
    leg.add(bogie);
    group.add(leg);
    if (side > 0) parts.gearR = leg; else parts.gearL = leg;
  }

  // ---------------- body gear (6-wheel bogies) — grouped so the entity's
  // centre-gear animation channel retracts both legs together.
  {
    const attachY = -3.9;
    const strutLen = g.height + attachY - g.wheelRadius + 0.1;
    const centre = new THREE.Group();
    centre.position.set(0, attachY, -L / 2 + g.body.x);
    for (const side of [1, -1]) {
      const leg = new THREE.Group();
      leg.position.set(side * g.body.track, 0, 0);
      leg.add(makeStrut(strutLen, 0.26, materials));
      const bogie = makeBogie(3, materials, detail);
      bogie.position.set(0, -strutLen, 0);
      bogie.rotation.x = -0.05;
      leg.add(bogie);
      centre.add(leg);
    }
    group.add(centre);
    parts.gearC = centre;
  }

  return group;
}
