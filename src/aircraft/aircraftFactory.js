// Procedural mid-poly airliner builder (GTA IV-era fidelity target).
// Reads family geometry + variant dims from data/aircraft.json and assembles
// fuselage, wings, tail, engines (per real layout), gear, and animated
// control surfaces. Returns { group, parts, info } — parts are detachable for
// the crash-breakup system.
import * as THREE from 'three';
import { DEG2RAD, clamp, lerp } from '../core/math.js';
import { buildA380 } from './a380/index.js';

function mergeGeo(family, variant) {
  const g = JSON.parse(JSON.stringify(family.geometry));
  if (variant.geo) {
    for (const [k, v] of Object.entries(variant.geo)) {
      if (v && typeof v === 'object' && !Array.isArray(v)) Object.assign(g[k] ?? (g[k] = {}), v);
      else g[k] = v;
    }
  }
  return g;
}

function mat(quality, params) {
  return quality === 'low'
    ? new THREE.MeshLambertMaterial(params)
    : new THREE.MeshStandardMaterial({ metalness: 0.15, roughness: 0.55, ...params });
}

// ---------------------------------------------------------------- fuselage
function buildFuselage(len, R, geo, supersonic, radialSegs, lengthSegs) {
  const scaleY = geo.deck === 'double' ? 1.30 : 1.0;
  const noseFrac = supersonic ? 0.24 : 0.115;
  const tailFrac = supersonic ? 0.26 : 0.30;
  const pos = [], uv = [], idx = [];

  for (let i = 0; i <= lengthSegs; i++) {
    const t = i / lengthSegs;
    let r = R, yOff = 0;
    if (t < noseFrac) {
      const s = t / noseFrac;
      r = R * Math.pow(s, supersonic ? 1.0 : 0.62);
      if (supersonic) yOff = -R * 0.35 * Math.pow(1 - s, 1.4);
    } else if (t > 1 - tailFrac) {
      const s = (t - (1 - tailFrac)) / tailFrac;
      r = R * (1 - 0.90 * Math.pow(s, 1.35));
      yOff = R * 0.72 * Math.pow(s, 1.7);
    }
    r = Math.max(r, 0.02);
    const z = -len / 2 + t * len;
    for (let j = 0; j <= radialSegs; j++) {
      const phi = (j / radialSegs) * Math.PI * 2;
      pos.push(r * Math.sin(phi), (-r * Math.cos(phi)) * scaleY + yOff, z);
      uv.push(t, j / radialSegs);
    }
  }
  const ring = radialSegs + 1;
  for (let i = 0; i < lengthSegs; i++) {
    for (let j = 0; j < radialSegs; j++) {
      const a = i * ring + j, b = a + ring;
      // outward-facing winding (front faces point out of the hull)
      idx.push(a, a + 1, b, b, a + 1, b + 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// ------------------------------------------------------- wing/tail panels
// Tapered swept slab. Built for the right side (+X); side=-1 mirrors.
function buildPanel(rootChord, tipChord, halfSpan, sweepDeg, dihedralDeg, side = 1, tRoot = 0.10, tTip = 0.06) {
  const sw = Math.tan(sweepDeg * DEG2RAD), di = Math.tan(dihedralDeg * DEG2RAD);
  const x1 = halfSpan * side;
  const yT = halfSpan * di;
  const zLE = halfSpan * sw;
  const thR = rootChord * tRoot, thT = tipChord * tTip;
  // 8 corners: root LE/TE top/bottom, tip LE/TE top/bottom
  const v = [
    [0, thR / 2, 0], [0, thR / 2, rootChord], [x1, yT + thT / 2, zLE], [x1, yT + thT / 2, zLE + tipChord],
    [0, -thR / 2, 0], [0, -thR / 2, rootChord], [x1, yT - thT / 2, zLE], [x1, yT - thT / 2, zLE + tipChord]
  ];
  let faces = [
    [0, 2, 1], [1, 2, 3],       // top
    [4, 5, 6], [5, 7, 6],       // bottom
    [0, 4, 2], [2, 4, 6],       // leading edge
    [1, 3, 5], [3, 7, 5],       // trailing edge
    [2, 6, 3], [3, 6, 7]        // tip cap
  ];
  if (side < 0) faces = faces.map(([a, b, c]) => [a, c, b]);
  const uvs = [[0, 0], [1, 0], [0, 1], [1, 1], [0, 0], [1, 0], [0, 1], [1, 1]]; // u: chord LE->TE, v: root->tip
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

function boxMesh(w, h, d, material) {
  return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
}

// ---------------------------------------------------------------- engines
function makeNacelle(nacR, nacL, engineMat, darkMat, detail) {
  const seg = detail > 0.6 ? 18 : 10;
  const grp = new THREE.Group();
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(nacR, nacR * 0.90, nacL * 0.62, seg, 1, true), engineMat);
  barrel.rotation.x = Math.PI / 2;
  barrel.position.z = -nacL * 0.12;
  grp.add(barrel);
  const lip = new THREE.Mesh(new THREE.TorusGeometry(nacR * 0.93, nacR * 0.09, 8, seg), engineMat);
  lip.position.z = -nacL * 0.43;
  grp.add(lip);
  const fan = new THREE.Mesh(new THREE.CircleGeometry(nacR * 0.86, seg), darkMat);
  fan.position.z = -nacL * 0.42;
  fan.rotation.y = Math.PI;
  grp.add(fan);
  const spinner = new THREE.Mesh(new THREE.ConeGeometry(nacR * 0.16, nacR * 0.4, 8), engineMat);
  spinner.rotation.x = -Math.PI / 2;
  spinner.position.z = -nacL * 0.46;
  grp.add(spinner);
  const core = new THREE.Mesh(new THREE.CylinderGeometry(nacR * 0.52, nacR * 0.26, nacL * 0.40, seg), darkMat);
  core.rotation.x = Math.PI / 2;
  core.position.z = nacL * 0.33;
  grp.add(core);
  // Reverser sleeve — translates aft when reverse thrust is selected.
  const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(nacR * 1.02, nacR * 0.95, nacL * 0.22, seg, 1, true), engineMat);
  sleeve.rotation.x = Math.PI / 2;
  sleeve.position.z = nacL * 0.12;
  grp.add(sleeve);
  return { grp, fan, sleeve };
}

// ------------------------------------------------------------------ gear
function makeGear({ strutLen, wheelR, bogie, dark, grey, detail }) {
  const grp = new THREE.Group();
  const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, strutLen, detail > 0.6 ? 10 : 6), grey);
  strut.position.y = -strutLen / 2;
  grp.add(strut);
  const wheelGeom = new THREE.CylinderGeometry(wheelR, wheelR, wheelR * 0.7, detail > 0.6 ? 14 : 8);
  const positions = bogie === 4
    ? [[-wheelR * 0.85, -wheelR * 1.1], [wheelR * 0.85, -wheelR * 1.1], [-wheelR * 0.85, wheelR * 1.1], [wheelR * 0.85, wheelR * 1.1]]
    : [[-wheelR * 0.75, 0], [wheelR * 0.75, 0]];
  for (const [wx, wz] of positions) {
    const w = new THREE.Mesh(wheelGeom, dark);
    w.rotation.z = Math.PI / 2;
    w.position.set(wx, -strutLen + wheelR * 0.2, wz);
    grp.add(w);
  }
  return grp;
}

// =================================================================== main
export function buildAircraft(variant, family, livery, opts = {}) {
  const quality = opts.quality || 'high';
  const detail = opts.detail ?? 1;
  // The A380 has its own from-scratch high-detail builder (src/aircraft/a380/).
  // Parked/ambient copies (low detail) still use the cheap generic path.
  if (variant.id === 'a380-800' && detail >= 0.9) {
    return buildA380(livery, { quality, detail });
  }
  const geo = mergeGeo(family, variant);
  const { len, span } = variant.dims;
  const R = geo.fusR;
  const supersonic = (variant.flags || []).includes('supersonic');
  const radialSegs = Math.round(clamp(24 * detail, 10, 24));
  const lengthSegs = Math.round(clamp(26 * detail, 12, 26));

  const group = new THREE.Group();
  const parts = { engines: [], flaps: [], spoilers: [], slats: [] };

  const fuselageMat = mat(quality, { map: livery.fuselageMap });
  const tailMat = mat(quality, { map: livery.tailMap });
  const wingMat = mat(quality, { color: livery.wingColor });
  wingMat.side = THREE.DoubleSide;
  const engineMat = mat(quality, { color: livery.engineColor });
  const darkMat = mat(quality, { color: 0x23262a });
  const greyMat = mat(quality, { color: 0x8d9297 });

  // Fuselage
  const fuselage = new THREE.Mesh(buildFuselage(len, R, geo, supersonic, radialSegs, lengthSegs), fuselageMat);
  fuselage.castShadow = fuselage.receiveShadow = quality !== 'low';
  group.add(fuselage);
  parts.fuselage = fuselage;

  // 747 hump
  if (geo.deck === 'hump') {
    const hump = new THREE.Mesh(new THREE.CapsuleGeometry(R * 0.62, len * 0.16, 6, radialSegs), fuselageMat.clone());
    hump.material.map = null;
    hump.material.color = new THREE.Color('#e9ebee');
    hump.rotation.x = Math.PI / 2;
    hump.scale.y = 0.85;
    hump.position.set(0, R * 0.62, -len / 2 + len * 0.225);
    hump.castShadow = quality !== 'low';
    group.add(hump);
  }

  // ------------------------------------------------------------- wings
  const wing = geo.wing;
  const halfSpan = span / 2;
  const wingY = geo.deck === 'double' ? -R * 0.9 : -R * 0.45;
  const wingZ = -len / 2 + wing.posFrac * len;
  const tipChord = wing.rootChord * wing.taper;
  const sweepTan = Math.tan(wing.sweep * DEG2RAD);
  const dihTan = Math.tan(wing.dihedral * DEG2RAD);

  const wingL = new THREE.Group(), wingR = new THREE.Group();
  wingL.position.set(0, wingY, wingZ);
  wingR.position.set(0, wingY, wingZ);
  const panelR = new THREE.Mesh(buildPanel(wing.rootChord, tipChord, halfSpan, wing.sweep, wing.dihedral, 1), wingMat);
  const panelL = new THREE.Mesh(buildPanel(wing.rootChord, tipChord, halfSpan, wing.sweep, wing.dihedral, -1), wingMat);
  panelR.castShadow = panelL.castShadow = quality !== 'low';
  wingR.add(panelR); wingL.add(panelL);
  group.add(wingL, wingR);
  parts.wingL = wingL; parts.wingR = wingR;

  // Winglets
  const wingletKind = geo.winglets;
  if (wingletKind && wingletKind !== 'none' && !supersonic) {
    for (const side of [1, -1]) {
      const tipX = halfSpan * side, tipY = halfSpan * dihTan, tipZ = halfSpan * sweepTan;
      const wl = new THREE.Group();
      wl.position.set(tipX, tipY, tipZ + tipChord * 0.15);
      const parent = side > 0 ? wingR : wingL;
      const h = { blended: 0.045, sharklet: 0.055, split: 0.05, fence: 0.03, canted: 0.05, raked: 0.07, folding: 0.07 }[wingletKind] * span;
      const wm = new THREE.Mesh(buildPanel(tipChord * 0.8, tipChord * 0.3, h, 38, 0, side), wingMat);
      if (wingletKind === 'raked' || wingletKind === 'folding') wm.rotation.z = side * 0.35;
      else if (wingletKind === 'canted') wm.rotation.z = side * 0.9;
      else wm.rotation.z = side * 1.35;
      wl.add(wm);
      if (wingletKind === 'split' || wingletKind === 'fence') {
        const dn = new THREE.Mesh(buildPanel(tipChord * 0.6, tipChord * 0.25, h * 0.6, 30, 0, side), wingMat);
        dn.rotation.z = -side * 1.6;
        wl.add(dn);
      }
      parent.add(wl);
    }
  }

  // Control surfaces (skip at very low detail — parked/AI aircraft)
  const chordAt = (fx) => lerp(wing.rootChord, tipChord, fx);
  const leAt = (fx) => fx * halfSpan * sweepTan;
  const yAt = (fx) => fx * halfSpan * dihTan;
  if (detail > 0.5 && !supersonic) {
    for (const side of [1, -1]) {
      const parent = side > 0 ? wingR : wingL;
      const addTE = (f0, f1, chordFrac, list, isTop) => {
        const fm = (f0 + f1) / 2;
        const c = chordAt(fm) * chordFrac;
        const w = (f1 - f0) * halfSpan;
        const hinge = new THREE.Group();
        const zHinge = isTop ? leAt(fm) + chordAt(fm) * 0.55 : leAt(fm) + chordAt(fm) - c;
        hinge.position.set(fm * halfSpan * side, yAt(fm) + (isTop ? 0.09 : 0), zHinge);
        const panel = boxMesh(w, 0.10, c, wingMat);
        panel.position.z = c / 2;
        hinge.add(panel);
        parent.add(hinge);
        list.push({ hinge, side });
        return hinge;
      };
      addTE(0.14, 0.40, 0.30, parts.flaps, false);
      addTE(0.42, 0.64, 0.28, parts.flaps, false);
      addTE(0.68, 0.92, 0.24, side > 0 ? (parts.ailR = []) && parts.ailR : (parts.ailL = []) && parts.ailL, false);
      addTE(0.28, 0.56, 0.22, parts.spoilers, true);
    }
    // fix aileron lists (addTE pushed into fresh arrays)
    parts.ailR = parts.ailR || []; parts.ailL = parts.ailL || [];
  } else { parts.ailR = []; parts.ailL = []; }

  // ------------------------------------------------------------- tail
  const tailGroup = new THREE.Group();
  group.add(tailGroup);
  parts.tail = tailGroup;
  const finRootChord = len * (geo.tail === 'ttail' ? 0.15 : 0.13);
  const finH = geo.finH;
  const finZ = len / 2 - finRootChord * 1.35;
  { // vertical stabilizer (all layouts)
    const finGeom = buildPanel(finRootChord, finRootChord * 0.45, finH, supersonic ? 52 : 42, 0, 1);
    const fin = new THREE.Mesh(finGeom, tailMat);
    fin.rotation.z = Math.PI / 2; // span +X -> +Y (up); chord stays along +Z
    fin.position.set(0, R * 0.70, finZ);
    fin.castShadow = quality !== 'low';
    tailGroup.add(fin);
    parts.fin = fin;
    const rudder = boxMesh(0.14, finH * 0.85, finRootChord * 0.22, tailMat);
    rudder.position.set(0, R * 0.7 + finH * 0.45, finZ + finRootChord * 0.62 + finH * 0.45 * Math.tan((supersonic ? 52 : 42) * DEG2RAD) * 0.4);
    tailGroup.add(rudder);
    parts.rudder = rudder;
  }
  if (geo.tail !== 'delta') {
    const hSpan = span * 0.185;
    const hChord = len * 0.085;
    const hstab = new THREE.Group();
    const hy = geo.tail === 'ttail' ? R * 0.70 + finH * 0.96 : R * 0.32;
    const hz = geo.tail === 'ttail' ? finZ + finH * Math.tan(42 * DEG2RAD) * 0.85 : len / 2 - hChord * 2.1;
    hstab.position.set(0, hy, hz);
    for (const side of [1, -1]) {
      const hp = new THREE.Mesh(buildPanel(hChord, hChord * 0.42, hSpan, wing.sweep + 4, geo.tail === 'ttail' ? -3 : 7, side), tailMat);
      hp.castShadow = quality !== 'low';
      hstab.add(hp);
    }
    const elev = boxMesh(hSpan * 1.8, 0.09, hChord * 0.25, wingMat);
    elev.position.set(0, 0, hChord * 0.9);
    hstab.add(elev);
    parts.elevator = elev;
    tailGroup.add(hstab);
    parts.hstab = hstab;
  }

  // ------------------------------------------------------------- engines
  const layout = geo.engines.layout;
  const nacR = geo.engines.nacR, nacL = geo.engines.nacL;
  const addEngine = (x, y, z, parent, withPylon = true, pylonDown = true) => {
    const { grp, fan, sleeve } = makeNacelle(nacR, nacL, engineMat, darkMat, detail);
    grp.position.set(x, y, z);
    if (withPylon) {
      const py = boxMesh(0.28, Math.abs(pylonDown ? nacR * 1.0 : nacR * 0.8), nacL * 0.5, greyMat);
      py.position.set(x, y + (pylonDown ? nacR * 0.75 : 0), z + nacL * 0.1);
      parent.add(py);
    }
    parent.add(grp);
    parts.engines.push({ grp, fan, sleeve, pos: new THREE.Vector3(x, y, z) });
  };

  if (layout === 'wing2' || layout === 'wing4' || layout === 'trijetdc10') {
    const fracs = layout === 'wing4' ? [0.30, 0.585] : [0.34];
    for (const f of fracs) {
      for (const side of [1, -1]) {
        const x = f * halfSpan * side;
        const yE = wingY + f * halfSpan * dihTan - nacR * 1.02;
        const zE = wingZ + f * halfSpan * sweepTan - nacL * 0.22;
        addEngine(x, yE, zE, group);
      }
    }
  }
  if (layout === 'tail2' || layout === 'trijet727') {
    for (const side of [1, -1]) {
      addEngine((R + nacR * 0.94) * side, R * 0.26, len * 0.315, tailGroup, true, false);
    }
  }
  if (layout === 'trijet727') {
    // centre S-duct engine: intake above fuselage, exhaust in tail cone
    const duct = new THREE.Mesh(new THREE.CylinderGeometry(nacR * 1.05, nacR * 0.8, len * 0.16, 12), fuselageMat.clone());
    duct.material.map = null; duct.material.color = new THREE.Color('#dfe2e6');
    duct.rotation.x = Math.PI / 2 - 0.22;
    duct.position.set(0, R * 0.78, len * 0.335);
    tailGroup.add(duct);
    const intake = new THREE.Mesh(new THREE.CircleGeometry(nacR * 0.85, 14), darkMat);
    intake.rotation.x = -0.22; intake.rotation.y = Math.PI;
    intake.position.set(0, R * 0.95, len * 0.262);
    tailGroup.add(intake);
    const exhaust = new THREE.Mesh(new THREE.ConeGeometry(nacR * 0.6, nacL * 0.5, 12), darkMat);
    exhaust.rotation.x = Math.PI / 2;
    exhaust.position.set(0, R * 0.5, len * 0.5);
    tailGroup.add(exhaust);
  }
  if (layout === 'trijetdc10') {
    // banjo engine at fin base
    const { grp, fan, sleeve } = makeNacelle(nacR, nacL * 1.05, engineMat, darkMat, detail);
    grp.position.set(0, R * 0.72 + finH * 0.30, finZ + finRootChord * 0.35);
    tailGroup.add(grp);
    parts.engines.push({ grp, fan, sleeve, pos: grp.position.clone() });
  }
  if (layout === 'sst4paired' || layout === 'sst4') {
    const under = wingY - nacR * 0.9;
    if (layout === 'sst4paired') {
      for (const side of [1, -1]) {
        const bx = 0.30 * halfSpan * side;
        const bz = wingZ + wing.rootChord * 0.62;
        const box = boxMesh(nacR * 4.4, nacR * 1.9, nacL, engineMat);
        box.position.set(bx, under, bz);
        group.add(box);
        const inlet = boxMesh(nacR * 4.2, nacR * 1.5, 0.2, darkMat);
        inlet.position.set(bx, under, bz - nacL / 2 - 0.05);
        group.add(inlet);
        for (const off of [-1, 1]) {
          const noz = new THREE.Mesh(new THREE.CylinderGeometry(nacR * 0.62, nacR * 0.72, nacL * 0.22, 10), darkMat);
          noz.rotation.x = Math.PI / 2;
          noz.position.set(bx + off * nacR * 1.05, under, bz + nacL / 2);
          group.add(noz);
          parts.engines.push({ grp: noz, fan: null, sleeve: null, pos: noz.position.clone() });
        }
      }
    } else {
      for (const f of [0.28, 0.55]) {
        for (const side of [1, -1]) {
          const x = f * halfSpan * side;
          addEngine(x, under, wingZ + wing.rootChord * 0.55 + f * halfSpan * Math.tan(wing.sweep * DEG2RAD) * 0.4, group, false);
        }
      }
    }
  }

  // ------------------------------------------------------------- gear
  const strutLenMain = clamp(R * 0.95, 1.5, 4.6);
  const gearHeight = R * 0.6 + strutLenMain + clamp(R * 0.28, 0.35, 0.62);
  const wheelR = clamp(R * 0.28, 0.35, 0.62);
  const heavy = variant.perf.mtowKg > 150000;

  const gearNose = makeGear({ strutLen: gearHeight - R * 0.72 - wheelR, wheelR: wheelR * 0.8, bogie: 2, dark: darkMat, grey: greyMat, detail });
  gearNose.position.set(0, -R * 0.72, -len * 0.36);
  group.add(gearNose);
  const track = Math.max(0.095 * span, R * 1.5);
  const gearL = makeGear({ strutLen: gearHeight - R * 0.6 - wheelR, wheelR, bogie: heavy ? 4 : 2, dark: darkMat, grey: greyMat, detail });
  gearL.position.set(-track, -R * 0.6, len * 0.04);
  const gearR = makeGear({ strutLen: gearHeight - R * 0.6 - wheelR, wheelR, bogie: heavy ? 4 : 2, dark: darkMat, grey: greyMat, detail });
  gearR.position.set(track, -R * 0.6, len * 0.04);
  group.add(gearL, gearR);
  parts.gearNose = gearNose; parts.gearL = gearL; parts.gearR = gearR;
  if ((variant.flags || []).includes('center-gear') || variant.perf.mtowKg > 350000) {
    const gc = makeGear({ strutLen: gearHeight - R * 0.85 - wheelR, wheelR: wheelR * 0.9, bogie: 2, dark: darkMat, grey: greyMat, detail });
    gc.position.set(0, -R * 0.85, len * 0.09);
    group.add(gc);
    parts.gearC = gc;
  }

  const info = {
    gearHeight,
    cockpitPos: new THREE.Vector3(0, R * (geo.deck === 'hump' ? 1.15 : 0.55), -len / 2 + len * 0.055),
    engineOffsets: parts.engines.map((e) => e.pos.clone()),
    wingTipL: new THREE.Vector3(-halfSpan, wingY + halfSpan * dihTan, wingZ + halfSpan * sweepTan),
    wingTipR: new THREE.Vector3(halfSpan, wingY + halfSpan * dihTan, wingZ + halfSpan * sweepTan),
    tailPos: new THREE.Vector3(0, R, len * 0.46),
    len, span, fusR: R
  };
  return { group, parts, info };
}
