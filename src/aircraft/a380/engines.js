// A380 powerplants: four GP7200/Trent-900-class nacelles with lathe-profiled
// cowls, individually modelled fan blades, spinners, core/exhaust plugs and
// shaped pylons. Thrust-reverser sleeves exist on the INBOARD pair only —
// exactly like the real aircraft.
import * as THREE from 'three';
import { A380 } from './spec.js';
import { planformAt } from './wing.js';

function cowlProfile(r, len) {
  // LatheGeometry points (radius, y) — y along engine axis, converted later.
  return [
    new THREE.Vector2(r * 0.55, -len * 0.50),  // inlet lip inner
    new THREE.Vector2(r * 0.98, -len * 0.46),
    new THREE.Vector2(r * 1.00, -len * 0.30),
    new THREE.Vector2(r * 1.00, -len * 0.02),  // max diameter barrel
    new THREE.Vector2(r * 0.94, len * 0.18),
    new THREE.Vector2(r * 0.80, len * 0.30)    // cowl trailing edge
  ];
}

function makeNacelle(materials, detail, withReverser) {
  const e = A380.engines;
  const r = e.nacelleRadius, len = e.nacelleLength;
  const seg = detail > 0.6 ? 26 : 14;
  const grp = new THREE.Group();

  // outer cowl (lathe: axis Y, rotated to Z)
  const cowl = new THREE.Mesh(new THREE.LatheGeometry(cowlProfile(r, len), seg), materials.engine);
  cowl.rotation.x = Math.PI / 2;
  cowl.castShadow = true;
  grp.add(cowl);

  // inlet lip highlight ring
  const lip = new THREE.Mesh(new THREE.TorusGeometry(r * 0.985, r * 0.055, 8, seg), materials.engineLip);
  lip.position.z = -len * 0.47;
  grp.add(lip);

  // fan: hub + individually placed blades + spinner
  const fanGroup = new THREE.Group();
  fanGroup.position.z = -len * 0.40;
  const hub = new THREE.Mesh(new THREE.CircleGeometry(e.fanRadius, seg), materials.dark);
  hub.rotation.y = Math.PI;
  fanGroup.add(hub);
  if (detail > 0.5) {
    const bladeGeo = new THREE.BoxGeometry(0.10, e.fanRadius * 0.92, 0.035);
    for (let i = 0; i < e.fanBlades; i++) {
      const blade = new THREE.Mesh(bladeGeo, materials.fanBlade);
      const a = (i / e.fanBlades) * Math.PI * 2;
      blade.position.set(Math.cos(a) * e.fanRadius * 0.52, Math.sin(a) * e.fanRadius * 0.52, 0.03);
      blade.rotation.z = a + Math.PI / 2;
      blade.rotation.y = 0.42; // blade pitch
      fanGroup.add(blade);
    }
  }
  const spinner = new THREE.Mesh(new THREE.ConeGeometry(e.fanRadius * 0.16, 0.55, 12), materials.engineLip);
  spinner.rotation.x = -Math.PI / 2;
  spinner.position.z = -0.22;
  fanGroup.add(spinner);
  grp.add(fanGroup);

  // core cowl + exhaust nozzle + plug
  const core = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.56, r * 0.40, len * 0.34, seg), materials.engineCore);
  core.rotation.x = Math.PI / 2;
  core.position.z = len * 0.42;
  grp.add(core);
  const plug = new THREE.Mesh(new THREE.ConeGeometry(r * 0.17, len * 0.16, 10), materials.dark);
  plug.rotation.x = Math.PI / 2;
  plug.position.z = len * 0.62;
  grp.add(plug);

  // reverser sleeve — inboard engines only
  let sleeve = null;
  if (withReverser) {
    sleeve = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.015, r * 0.90, len * 0.24, seg, 1, true), materials.engine);
    sleeve.rotation.x = Math.PI / 2;
    sleeve.position.z = len * 0.16;
    grp.add(sleeve);
  }

  return { grp, fan: fanGroup, sleeve };
}

export function buildA380Engines(materials, parts, detail) {
  const group = new THREE.Group();
  const e = A380.engines;
  const w = A380.wing;
  const L = A380.length;
  const wingY = w.rootY, wingZ = -L / 2 + w.rootX;

  for (const eng of e.positions) {
    for (const side of [1, -1]) {
      const p = planformAt(eng.eta);
      const x = p.x * side;
      const y = wingY + p.y - e.dropBelowWing;
      const z = wingZ + p.zLE - e.forwardOfLE + e.nacelleLength * 0.42;
      const { grp, fan, sleeve } = makeNacelle(materials, detail, eng.reverser);
      grp.position.set(x, y, z);
      group.add(grp);
      parts.engines.push({ grp, fan, sleeve, pos: new THREE.Vector3(x, y, z) });

      // shaped pylon: swept strut from cowl crown to wing underside
      const pylon = new THREE.Mesh(new THREE.BoxGeometry(0.55, e.dropBelowWing * 1.15, e.nacelleLength * 0.55), materials.grey);
      pylon.position.set(x, y + e.dropBelowWing * 0.62, z + e.nacelleLength * 0.28);
      pylon.rotation.x = -0.12;
      pylon.castShadow = true;
      group.add(pylon);
      const pylonFair = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.5, e.nacelleLength * 0.34), materials.grey);
      pylonFair.position.set(x, y + e.dropBelowWing * 1.02, z + e.nacelleLength * 0.42);
      group.add(pylonFair);
    }
  }
  return group;
}
