import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Procedural cars. Bodies are lofted from smooth cross-sections (rounded
// superellipses) along the car's length, with arches carved where the wheels
// sit. Cars face local -Z; y = 0 is the ground.

const smooth = (keys, s) => {
  if (s <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    if (s <= keys[i][0]) {
      const [s0, a] = keys[i - 1], [s1, b] = keys[i];
      let t = (s - s0) / (s1 - s0);
      t = t * t * (3 - 2 * t);
      return a + (b - a) * t;
    }
  }
  return keys[keys.length - 1][1];
};

export const CAR_TYPES = {
  coupe: {
    length: 4.62, wheelR: 0.355, wheelW: 0.27, track: 0.83, wheels: [0.185, 0.79],
    body: {
      top: [[0, 0.6], [0.05, 0.7], [0.18, 0.8], [0.33, 0.9], [0.78, 0.96], [0.92, 0.95], [1, 0.82]],
      bottom: [[0, 0.33], [0.06, 0.25], [0.94, 0.26], [1, 0.38]],
      width: [[0, 0.76], [0.07, 0.93], [0.3, 0.97], [0.74, 1.0], [0.93, 0.96], [1, 0.84]],
      exp: 3.4, taper: 0.1,
    },
    cabin: {
      from: 0.31, to: 0.9,
      top: [[0, 0.88], [0.3, 1.27], [0.52, 1.29], [0.72, 1.14], [1, 0.93]],
      width: [[0, 0.8], [0.35, 0.79], [0.75, 0.76], [1, 0.66]],
      taper: 0.3, exp: 2.6, roof: [0.33, 0.64],
    },
    spoiler: true,
  },
  sedan: {
    length: 4.85, wheelR: 0.34, wheelW: 0.24, track: 0.81, wheels: [0.2, 0.77],
    body: {
      top: [[0, 0.66], [0.06, 0.76], [0.25, 0.86], [0.32, 0.92], [0.8, 0.98], [0.94, 0.96], [1, 0.86]],
      bottom: [[0, 0.36], [0.07, 0.3], [0.93, 0.3], [1, 0.4]],
      width: [[0, 0.78], [0.07, 0.92], [0.5, 0.95], [0.93, 0.93], [1, 0.84]],
      exp: 3.6, taper: 0.08,
    },
    cabin: {
      from: 0.3, to: 0.82,
      top: [[0, 0.92], [0.27, 1.43], [0.68, 1.43], [0.88, 1.2], [1, 0.97]],
      width: [[0, 0.8], [0.4, 0.82], [1, 0.76]],
      taper: 0.24, exp: 2.8, roof: [0.28, 0.72],
    },
  },
  suv: {
    length: 4.75, wheelR: 0.39, wheelW: 0.27, track: 0.85, wheels: [0.18, 0.79],
    body: {
      top: [[0, 0.82], [0.06, 0.97], [0.26, 1.06], [0.33, 1.08], [0.95, 1.1], [1, 1.02]],
      bottom: [[0, 0.44], [0.07, 0.36], [0.93, 0.37], [1, 0.46]],
      width: [[0, 0.82], [0.07, 0.95], [0.5, 0.98], [0.95, 0.96], [1, 0.9]],
      exp: 4.5, taper: 0.06,
    },
    cabin: {
      from: 0.28, to: 0.98,
      top: [[0, 1.05], [0.2, 1.72], [0.85, 1.74], [0.97, 1.62], [1, 1.1]],
      width: [[0, 0.86], [0.5, 0.88], [1, 0.84]],
      taper: 0.15, exp: 4, roof: [0.2, 0.96],
    },
    rails: true,
  },
  hatch: {
    length: 4.05, wheelR: 0.32, wheelW: 0.22, track: 0.78, wheels: [0.19, 0.8],
    body: {
      top: [[0, 0.66], [0.07, 0.78], [0.28, 0.88], [0.34, 0.92], [0.95, 0.98], [1, 0.9]],
      bottom: [[0, 0.36], [0.08, 0.3], [0.94, 0.31], [1, 0.42]],
      width: [[0, 0.76], [0.08, 0.89], [0.5, 0.92], [0.94, 0.9], [1, 0.84]],
      exp: 3.6, taper: 0.08,
    },
    cabin: {
      from: 0.3, to: 0.97,
      top: [[0, 0.92], [0.3, 1.46], [0.82, 1.45], [0.96, 1.32], [1, 0.98]],
      width: [[0, 0.79], [0.5, 0.8], [1, 0.76]],
      taper: 0.2, exp: 3.2, roof: [0.3, 0.92],
    },
  },
  pickup: {
    length: 5.4, wheelR: 0.41, wheelW: 0.28, track: 0.88, wheels: [0.17, 0.75],
    body: {
      top: [[0, 0.92], [0.05, 1.06], [0.24, 1.14], [0.3, 1.16], [1, 1.16]],
      bottom: [[0, 0.5], [0.06, 0.42], [0.95, 0.44], [1, 0.52]],
      width: [[0, 0.86], [0.06, 0.98], [0.95, 1.0], [1, 0.98]],
      exp: 5, taper: 0.04,
    },
    cabin: {
      from: 0.29, to: 0.58,
      top: [[0, 1.12], [0.3, 1.86], [0.92, 1.88], [1, 1.16]],
      width: [[0, 0.9], [1, 0.9]],
      taper: 0.12, exp: 4.5, roof: [0.28, 0.94],
    },
    bed: true,
  },
};

function section(w, y0, y1, n, taper, ring, out, z, angleRange = null) {
  const mid = (y0 + y1) / 2, half = (y1 - y0) / 2;
  const e = 2 / n;
  for (let k = 0; k < ring; k++) {
    const a = angleRange ? angleRange[0] + (angleRange[1] - angleRange[0]) * (k / (ring - 1)) : (k / ring) * Math.PI * 2;
    const c = Math.cos(a), s = Math.sin(a);
    let x = w * Math.sign(c) * Math.pow(Math.abs(c), e);
    const y = mid + half * Math.sign(s) * Math.pow(Math.abs(s), e);
    x *= 1 - taper * Math.max(0, s);
    out.push(x, y, z);
  }
}

function loft(sections, ring, { closed = true, caps = true } = {}) {
  const pos = [], idx = [];
  for (const sct of sections) pos.push(...sct);
  const rows = sections.length;
  const cols = ring;
  const seg = closed ? cols : cols - 1;
  for (let i = 0; i < rows - 1; i++) {
    for (let k = 0; k < seg; k++) {
      const k1 = (k + 1) % cols;
      const a = i * cols + k, b = i * cols + k1, c = (i + 1) * cols + k, d = (i + 1) * cols + k1;
      idx.push(a, b, c, b, d, c);
    }
  }
  if (caps && closed) {
    for (const [row, front] of [[0, true], [rows - 1, false]]) {
      const base = pos.length / 3;
      let cx = 0, cy = 0, cz = 0;
      for (let k = 0; k < cols; k++) {
        const j = (row * cols + k) * 3;
        cx += pos[j]; cy += pos[j + 1]; cz += pos[j + 2];
      }
      for (let k = 0; k < cols; k++) {
        const j = (row * cols + k) * 3;
        pos.push(pos[j], pos[j + 1], pos[j + 2]);
      }
      pos.push(cx / cols, cy / cols, cz / cols);
      const center = base + cols;
      for (let k = 0; k < cols; k++) {
        const k1 = (k + 1) % cols;
        if (front) idx.push(center, base + k1, base + k);
        else idx.push(center, base + k, base + k1);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array((pos.length / 3) * 2), 2));
  return g;
}

function box(w, h, d, x, y, z, rx = 0, ry = 0, rz = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (rx || ry || rz) g.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rx, ry, rz)));
  g.translate(x, y, z);
  return g;
}

function cyl(rt, rb, h, seg, x, y, z, axis = 'y') {
  const g = new THREE.CylinderGeometry(rt, rb, h, seg);
  if (axis === 'x') g.rotateZ(Math.PI / 2);
  if (axis === 'z') g.rotateX(Math.PI / 2);
  g.translate(x, y, z);
  return g;
}

function strut(a, b, r) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const g = new THREE.CylinderGeometry(r, r, len, 6);
  g.translate(0, len / 2, 0);
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize()));
  g.translate(a.x, a.y, a.z);
  return g;
}

const cache = new Map();

// Returns geometries grouped by material slot, plus wheel geometry and layout.
export function carGeometry(typeName) {
  if (cache.has(typeName)) return cache.get(typeName);
  const T = CAR_TYPES[typeName];
  const L = T.length, zf = -L / 2;
  const zAt = s => zf + s * L;
  const wheelZ = T.wheels.map(zAt);
  const archR = T.wheelR + 0.07;
  // The player's coupe gets the dense mesh; traffic uses a lighter one.
  const hero = typeName === 'coupe';
  const ring = hero ? 40 : 26;
  const N = hero ? 64 : 40;

  // Lower body with arches.
  const bodySections = [];
  for (let i = 0; i <= N; i++) {
    const s = i / N, z = zAt(s);
    let y0 = smooth(T.body.bottom, s);
    for (const wz of wheelZ) {
      const dz = z - wz;
      if (Math.abs(dz) < archR) y0 = Math.max(y0, T.wheelR + Math.sqrt(archR * archR - dz * dz) * 0.98);
    }
    const y1 = smooth(T.body.top, s);
    const out = [];
    section(smooth(T.body.width, s), Math.min(y0, y1 - 0.08), y1, T.body.exp, T.body.taper, ring, out, z);
    bodySections.push(out);
  }
  const paint = [loft(bodySections, ring)];

  // Greenhouse (glass) and a painted roof skin over it.
  const C = T.cabin;
  const cabinSections = [], roofSections = [];
  const cabinTopAt = cs => smooth(C.top, cs);
  const CN = hero ? 36 : 20;
  for (let i = 0; i <= CN; i++) {
    const cs = i / CN, s = C.from + cs * (C.to - C.from), z = zAt(s);
    const y0 = smooth(T.body.top, s) - 0.06;
    const y1 = Math.max(cabinTopAt(cs), y0 + 0.02);
    const w = smooth(C.width, cs);
    const out = [];
    section(w, y0, y1, C.exp, C.taper, ring, out, z);
    cabinSections.push(out);
    if (cs >= C.roof[0] && cs <= C.roof[1]) {
      const r = [];
      section(w * 1.01, y0, y1 + 0.012, C.exp, C.taper, 14, r, z, [0.2 * Math.PI, 0.8 * Math.PI]);
      roofSections.push(r);
    }
  }
  const glass = [loft(cabinSections, ring)];
  if (roofSections.length > 1) paint.push(loft(roofSections, 14, { closed: false, caps: false }));

  // Pillars: A pillars along the windshield edges, B pillars at the door line.
  const trim = [], chrome = [], head = [], tail = [], dark = [];
  const cabinPoint = (cs, side, up) => {
    const s = C.from + cs * (C.to - C.from);
    const y0 = smooth(T.body.top, s) - 0.02;
    const y1 = cabinTopAt(cs);
    const w = smooth(C.width, cs) * (1 - C.taper * (up ? 0.92 : 0)) * 0.97;
    return new THREE.Vector3(side * w, up ? y1 - 0.02 : y0, zAt(s));
  };
  for (const side of [-1, 1]) {
    paint.push(strut(cabinPoint(0.02, side, false), cabinPoint(C.roof[0] + 0.01, side, true), 0.045));
    const bs = (C.roof[0] + C.roof[1]) / 2;
    trim.push(strut(cabinPoint(bs, side, false), cabinPoint(bs, side, true), 0.05));
    // Mirrors.
    const mp = cabinPoint(0.1, side, false);
    paint.push(box(0.16, 0.1, 0.12, mp.x + side * 0.14, mp.y + 0.06, mp.z));
    trim.push(box(0.1, 0.025, 0.04, mp.x + side * 0.05, mp.y + 0.03, mp.z));
  }

  const sW = s => smooth(T.body.width, s);
  // Front: headlight clusters, grille, splitter.
  // Headlights sit in the nose fascia, just proud of the surface.
  const noseMid = (smooth(T.body.bottom, 0.02) + smooth(T.body.top, 0.02)) / 2;
  const noseTop = smooth(T.body.top, 0.02);
  for (const side of [-1, 1]) {
    const hx = side * sW(0.02) * 0.62;
    const hy = noseMid + (noseTop - noseMid) * 0.45;
    dark.push(box(0.44, 0.1, 0.06, hx, hy, zf + 0.045, 0, side * 0.32, 0));
    head.push(box(0.38, 0.055, 0.05, hx, hy + 0.005, zf + 0.03, 0, side * 0.32, 0));
    head.push(box(0.34, 0.016, 0.03, hx, hy + 0.06, zf + 0.04, 0, side * 0.32, 0));
  }
  dark.push(box(sW(0.03) * 1.05, 0.18, 0.12, 0, smooth(T.body.bottom, 0.02) + 0.17, zf + 0.06));
  trim.push(box(sW(0.03) * 1.7, 0.04, 0.22, 0, smooth(T.body.bottom, 0.02) + 0.02, zf + 0.1));
  // Rear: full-width light bar, diffuser, exhausts.
  const rearY = smooth(T.body.top, 0.97);
  tail.push(box(sW(0.98) * 1.72, 0.05, 0.06, 0, rearY - 0.08, -zf - 0.02));
  for (const side of [-1, 1]) tail.push(box(0.36, 0.11, 0.06, side * sW(0.98) * 0.68, rearY - 0.12, -zf - 0.03));
  dark.push(box(sW(0.98) * 1.5, 0.16, 0.1, 0, smooth(T.body.bottom, 0.98) + 0.06, -zf - 0.05));
  for (const side of [-1, 1]) chrome.push(cyl(0.05, 0.05, 0.14, 12, side * 0.42, smooth(T.body.bottom, 0.98) + 0.03, -zf + 0.02, 'z'));
  // Side skirts.
  for (const side of [-1, 1]) {
    const len = (wheelZ[1] - wheelZ[0]) - archR * 2;
    trim.push(box(0.06, 0.08, len, side * sW(0.5) * 0.99, smooth(T.body.bottom, 0.5) + 0.03, (wheelZ[0] + wheelZ[1]) / 2));
  }
  if (T.spoiler) paint.push(box(sW(0.96) * 1.5, 0.022, 0.12, 0, smooth(T.body.top, 0.96) + 0.012, zAt(0.965), -0.2));
  if (T.rails) for (const side of [-1, 1]) trim.push(box(0.05, 0.05, L * 0.5, side * 0.62, smooth(C.top, 0.6) + 0.04, zAt(0.62)));
  if (T.bed) {
    // Open bed walls behind the cab.
    const bedFrom = zAt(C.to + 0.01), bedTo = -zf - 0.05;
    const bedY = smooth(T.body.top, 0.8);
    dark.push(box(sW(0.8) * 1.86, 0.04, bedTo - bedFrom, 0, bedY - 0.02, (bedFrom + bedTo) / 2));
    for (const side of [-1, 1]) paint.push(box(0.08, 0.4, bedTo - bedFrom, side * sW(0.8) * 0.96, bedY + 0.2, (bedFrom + bedTo) / 2));
    paint.push(box(sW(0.8) * 1.9, 0.4, 0.08, 0, bedY + 0.2, bedTo));
  }

  // Plates (share one texture through UVs).
  const plate = [box(0.52, 0.12, 0.01, 0, smooth(T.body.bottom, 0.99) + 0.24, -zf + 0.005), box(0.52, 0.12, 0.01, 0, smooth(T.body.bottom, 0.01) + 0.28, zf - 0.005)];

  const toNonIndexed = list => mergeGeometries(list.map(g => (g.index ? g.toNonIndexed() : g)).map(g => {
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    return g;
  }));
  const out = {
    type: T,
    parts: {
      paint: toNonIndexed(paint),
      glass: toNonIndexed(glass),
      trim: toNonIndexed(trim),
      dark: toNonIndexed(dark),
      chrome: toNonIndexed(chrome),
      head: toNonIndexed(head),
      tail: toNonIndexed(tail),
      plate: toNonIndexed(plate),
    },
    wheels: [],
    wheel: wheelGeometry(T.wheelR, T.wheelW),
  };
  for (const z of wheelZ) for (const side of [-1, 1]) out.wheels.push({ x: side * T.track, y: T.wheelR, z, side, front: z < 0 });
  cache.set(typeName, out);
  return out;
}

function wheelGeometry(R, W) {
  // Tire: lathe of a rounded profile, axis along X.
  const rimR = R * 0.69;
  const pts = [
    [rimR, -W / 2 + 0.01], [R * 0.86, -W / 2 - 0.004], [R * 0.97, -W / 2 + 0.025], [R, -W / 2 + 0.06],
    [R, W / 2 - 0.06], [R * 0.97, W / 2 - 0.025], [R * 0.86, W / 2 + 0.004], [rimR, W / 2 - 0.01],
  ].map(([r, y]) => new THREE.Vector2(r, y));
  const tire = new THREE.LatheGeometry(pts, 30);
  tire.rotateZ(Math.PI / 2);
  // Rim: barrel, lip and five split spokes on the outer face (+X; mirrored per side by scale).
  const rimParts = [];
  const barrel = new THREE.CylinderGeometry(rimR, rimR, W - 0.03, 24, 1, true);
  barrel.rotateZ(Math.PI / 2);
  rimParts.push(barrel);
  const lip = new THREE.TorusGeometry(rimR - 0.008, 0.014, 6, 32);
  lip.rotateY(Math.PI / 2);
  lip.translate(W / 2 - 0.03, 0, 0);
  rimParts.push(lip);
  const face = W / 2 - 0.05;
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 + (i % 2) * 0.12;
    const spoke = new THREE.BoxGeometry(0.035, rimR - 0.05, 0.045);
    spoke.translate(0, (rimR - 0.05) / 2 + 0.05, 0);
    spoke.rotateX(a);
    spoke.translate(face, 0, 0);
    rimParts.push(spoke);
  }
  const hub = new THREE.CylinderGeometry(0.07, 0.08, 0.05, 12);
  hub.rotateZ(Math.PI / 2);
  hub.translate(face + 0.01, 0, 0);
  rimParts.push(hub);
  const rim = mergeGeometries(rimParts.map(g => (g.index ? g.toNonIndexed() : g)));
  const disc = new THREE.CylinderGeometry(rimR * 0.82, rimR * 0.82, 0.03, 24);
  disc.rotateZ(Math.PI / 2);
  disc.translate(face - 0.06, 0, 0);
  const caliper = new THREE.BoxGeometry(0.07, 0.16, 0.12);
  caliper.translate(face - 0.03, rimR * 0.55, 0.07);
  return { tire, rim, disc, caliper };
}

export function plateTexture(renderer, text = 'PCFC 7X') {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = '#e9e6da';
  g.fillRect(0, 0, 256, 64);
  g.fillStyle = '#1e3b78';
  g.font = '700 14px Arial';
  g.textAlign = 'center';
  g.fillText('VISTA PACÍFICA', 128, 16);
  g.fillStyle = '#7a1f1f';
  g.font = '700 34px "Barlow Condensed", Impact, monospace';
  g.fillText(text, 128, 52);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// Shared materials. Paint uses a clearcoat over metallic flake for that showroom look.
export function paintMaterial(color, opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    color, metalness: 0.55, roughness: 0.34, clearcoat: 1, clearcoatRoughness: 0.035, envMapIntensity: 1.1, ...opts,
  });
}

export function carMaterials(renderer) {
  const plateTex = plateTexture(renderer);
  return {
    glass: new THREE.MeshPhysicalMaterial({ color: 0x0c1215, metalness: 0.1, roughness: 0.04, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.4 }),
    trim: new THREE.MeshStandardMaterial({ color: 0x14181a, roughness: 0.45, metalness: 0.4 }),
    dark: new THREE.MeshStandardMaterial({ color: 0x07090a, roughness: 0.6, metalness: 0.2 }),
    chrome: new THREE.MeshStandardMaterial({ color: 0xd8dcdf, roughness: 0.12, metalness: 1 }),
    plate: new THREE.MeshStandardMaterial({ map: plateTex, roughness: 0.5 }),
    tire: new THREE.MeshStandardMaterial({ color: 0x141516, roughness: 0.92, metalness: 0 }),
    rim: new THREE.MeshStandardMaterial({ color: 0xb9bec2, roughness: 0.22, metalness: 1 }),
    disc: new THREE.MeshStandardMaterial({ color: 0x5c5e60, roughness: 0.4, metalness: 0.9 }),
    caliper: new THREE.MeshStandardMaterial({ color: 0xc23a22, roughness: 0.4, metalness: 0.3 }),
  };
}
