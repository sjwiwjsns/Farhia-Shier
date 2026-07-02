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
    strut: metal({ color: 0xa8adb4 })
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

  const tip = planformAt(1);
  const wingY = A380.wing.rootY, wingZ = -L / 2 + A380.wing.rootX;
  const info = {
    gearHeight: A380.gear.height,
    cockpitPos: new THREE.Vector3(0, A380.cockpit.eyePoint.y, -L / 2 + A380.cockpit.eyePoint.x),
    engineOffsets: parts.engines.map((e) => e.pos.clone()),
    wingTipL: new THREE.Vector3(-tip.x, wingY + tip.y, wingZ + tip.zLE),
    wingTipR: new THREE.Vector3(tip.x, wingY + tip.y, wingZ + tip.zLE),
    tailPos: new THREE.Vector3(0, crownYAt(0.9), L * 0.44),
    len: L, span: A380.span, fusR: A380.fuselage.halfW
  };
  return { group, parts, info };
}
