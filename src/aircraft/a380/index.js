// A380-800 — bespoke from-scratch build (not the generic family factory).
// Assembles the lofted fuselage, cranked wing, four detailed engines, the
// 22-wheel undercarriage and empennage, and returns the same
// { group, parts, info } contract the generic factory uses, so physics,
// animation and crash-breakup work unchanged.
import * as THREE from 'three';
import { A380 } from './spec.js';
import { buildA380Fuselage, crownYAt } from './fuselage.js';
import { buildA380Wing, planformAt } from './wing.js';
import { buildA380Engines } from './engines.js';
import { buildA380Gear } from './gear.js';
import { buildA380Tail } from './tail.js';
import { buildA380Cabin, cabinInfo } from './cabin.js';

function makeMaterials(livery, quality) {
  const std = (params) => quality === 'low'
    ? new THREE.MeshLambertMaterial(params)
    : new THREE.MeshStandardMaterial({ metalness: 0.15, roughness: 0.5, ...params });
  const metal = (params) => quality === 'low'
    ? new THREE.MeshLambertMaterial(params)
    : new THREE.MeshStandardMaterial({ metalness: 0.75, roughness: 0.3, ...params });

  const wing = std({ color: livery.wingColor });
  wing.side = THREE.DoubleSide;
  return {
    fuselage: std({ map: livery.fuselageMap }),
    belly: std({ color: livery.bellyColor }),
    wing,
    tail: std({ map: livery.tailMap }),
    tailplane: std({ color: livery.wingColor }),
    engine: std({ color: livery.engineColor }),
    engineLip: metal({ color: 0xd9dde2 }),
    engineCore: metal({ color: 0x8e959c }),
    fanBlade: metal({ color: 0x3a3f45 }),
    dark: std({ color: 0x22262b }),
    grey: std({ color: 0x8d9297 }),
    white: std({ color: 0xe8eaee }),
    glassDark: std({ color: 0x10151b }),
    doorTrim: std({ color: 0x9aa0a8 }),
    tyre: std({ color: 0x1d2023 }),
    hub: metal({ color: 0xb7bcc2 }),
    strut: metal({ color: 0xa8adb4 }),
    // ---- cabin (Emirates-inspired palette; emissive lift so the interior
    // reads warmly under the enclosing liner)
    // liner keeps the inward-front winding, so FrontSide + inward normals
    // is exactly right for a camera inside the cabin
    cabinLiner: new THREE.MeshLambertMaterial({ color: 0xe9e4da, emissive: 0x9a938a }),
    cabinWall: new THREE.MeshLambertMaterial({ color: 0xded8cb, emissive: 0x8a847a }),
    cabinWallSolid: new THREE.MeshLambertMaterial({ color: 0xd8d2c6, emissive: 0x827c72, side: THREE.DoubleSide }),
    carpetFirst: new THREE.MeshLambertMaterial({ color: 0x6e5a3e, emissive: 0x4a3c28 }),
    carpetUpper: new THREE.MeshLambertMaterial({ color: 0x8a7a5f, emissive: 0x5a5040 }),
    carpetPrem: new THREE.MeshLambertMaterial({ color: 0x6c6f74, emissive: 0x45474a }),
    carpetEcon: new THREE.MeshLambertMaterial({ color: 0x7d6a55, emissive: 0x504437 }),
    suiteShell: new THREE.MeshLambertMaterial({ color: 0xd9cba8, emissive: 0x8c8069 }),
    gold: new THREE.MeshLambertMaterial({ color: 0xc7a24f, emissive: 0x8a6c2e }),
    bizShell: new THREE.MeshLambertMaterial({ color: 0xefe7d4, emissive: 0x94907f }),
    premSeat: new THREE.MeshLambertMaterial({ color: 0x777b82, emissive: 0x4c4f54 }),
    econSeat: new THREE.MeshLambertMaterial({ color: 0x94765a, emissive: 0x5e4a37 }),
    galley: new THREE.MeshLambertMaterial({ color: 0xcfd2d6, emissive: 0x77797d }),
    steel: new THREE.MeshLambertMaterial({ color: 0x9ba1a8, emissive: 0x5a5e63 }),
    bins: new THREE.MeshLambertMaterial({ color: 0xe4e0d6, emissive: 0x8c887e }),
    barCounter: new THREE.MeshLambertMaterial({ color: 0x4a3423, emissive: 0x2e1f14 }),
    sofa: new THREE.MeshLambertMaterial({ color: 0x8a2f38, emissive: 0x521a20 }),
    stairs: new THREE.MeshLambertMaterial({ color: 0xb8a888, emissive: 0x6e6350 })
  };
}

export function buildA380(livery, opts = {}) {
  const quality = opts.quality || 'high';
  const detail = opts.detail ?? 1;
  const materials = makeMaterials(livery, quality);

  const group = new THREE.Group();
  const parts = { engines: [], flaps: [], spoilers: [], ailR: [], ailL: [] };
  const L = A380.length;

  const fuselage = buildA380Fuselage(materials, detail);
  group.add(fuselage);
  parts.fuselage = fuselage;

  const wingR = buildA380Wing(1, materials, parts, detail);
  const wingL = buildA380Wing(-1, materials, parts, detail);
  group.add(wingR, wingL);
  parts.wingR = wingR;
  parts.wingL = wingL;

  group.add(buildA380Engines(materials, parts, detail));

  const tail = buildA380Tail(materials, parts);
  group.add(tail);
  parts.tail = tail;

  group.add(buildA380Gear(materials, parts, detail));

  // full two-deck cabin interior (skipped on the Low tier)
  let cabin = null;
  if (quality !== 'low') {
    const cabinGroup = buildA380Cabin(materials, detail);
    group.add(cabinGroup);
    parts.cabin = cabinGroup;
    cabin = cabinInfo();
  }

  const tip = planformAt(1);
  const wingY = A380.wing.rootY, wingZ = -L / 2 + A380.wing.rootX;
  const info = {
    gearHeight: A380.gear.height,
    cockpitPos: new THREE.Vector3(0, A380.cockpit.eyePoint.y, -L / 2 + A380.cockpit.eyePoint.x),
    engineOffsets: parts.engines.map((e) => e.pos.clone()),
    wingTipL: new THREE.Vector3(-tip.x, wingY + tip.y, wingZ + tip.zLE),
    wingTipR: new THREE.Vector3(tip.x, wingY + tip.y, wingZ + tip.zLE),
    tailPos: new THREE.Vector3(0, crownYAt(0.9), L * 0.44),
    len: L, span: A380.span, fusR: A380.fuselage.halfW,
    cabin
  };
  return { group, parts, info };
}
