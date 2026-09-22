// ============================================================================================
// 40 MESH — THREE geometry for terrain, water, roads, markings, overpasses (batched per tile)
// ============================================================================================
var T3 = null;              // THREE namespace (set at boot)
var SCENE = null;
var TILE = 645, NTX = Math.ceil(WORLD.w / TILE), NTZ = Math.ceil(WORLD.d / TILE);
function tileIdx(x, z) { return clamp(Math.floor((x - WORLD.x0) / TILE), 0, NTX - 1) + NTX * clamp(Math.floor((z - WORLD.z0) / TILE), 0, NTZ - 1); }
// shared uniforms driven by the weather/time system
var UNI = {
  uTime: { value: 0 }, uGameMin: { value: 0 }, uSnow: { value: 0 }, uWet: { value: 0 }, uIce: { value: 0 },
  uRoadSnow: { value: [0, 0, 0, 0, 0, 0, 0, 0, 0] }, uSnowRate: { value: 0 }, uNight: { value: 0 }, uHeat: { value: 0 },
  uHorizon: { value: null }, uLeaves: { value: 0 }, uFrozen: { value: 0 }, uSlush: { value: 0 }, uSeasonTint: { value: null }
};
var GLSL_NOISE = [
  'float bdHash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }',
  'float bdNoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);',
  '  return mix(mix(bdHash(i), bdHash(i+vec2(1.0,0.0)), f.x), mix(bdHash(i+vec2(0.0,1.0)), bdHash(i+vec2(1.0,1.0)), f.x), f.y); }'
].join('\n');

// --------------- triangle-soup builder with vertex colours ---------------
function MB() { this.p = []; this.n = []; this.c = []; this.u = null; this.ex = null; }
MB.prototype.v = function (x, y, z, nx, ny, nz, col) { this.p.push(x, y, z); this.n.push(nx, ny, nz); this.c.push(col.r, col.g, col.b); };
MB.prototype.tri = function (a, b, c, col) {
  var ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
  var nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx, L = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
  nx /= L; ny /= L; nz /= L;
  this.v(a[0], a[1], a[2], nx, ny, nz, col); this.v(b[0], b[1], b[2], nx, ny, nz, col); this.v(c[0], c[1], c[2], nx, ny, nz, col);
};
MB.prototype.quad = function (a, b, c, d, col) { this.tri(a, b, c, col); this.tri(a, c, d, col); };
// oriented box: centre x,z, base y, size w (local x), h, d (local z), yaw
MB.prototype.box = function (x, y, z, w, h, d, rot, col, colTop) {
  var c = Math.cos(rot || 0), s = Math.sin(rot || 0);
  function P(lx, ly, lz) { return [x + lx * c + lz * s, y + ly, z - lx * s + lz * c]; }
  var hw = w / 2, hd = d / 2;
  var p000 = P(-hw, 0, -hd), p100 = P(hw, 0, -hd), p110 = P(hw, h, -hd), p010 = P(-hw, h, -hd), p001 = P(-hw, 0, hd), p101 = P(hw, 0, hd), p111 = P(hw, h, hd), p011 = P(-hw, h, hd);
  this.quad(p001, p101, p111, p011, col); this.quad(p100, p000, p010, p110, col);
  this.quad(p101, p100, p110, p111, col); this.quad(p000, p001, p011, p010, col);
  this.quad(p011, p111, p110, p010, colTop || col);
};
MB.prototype.cyl = function (x, y, z, r, h, seg, col, r2, colTop) {
  seg = seg || 10; var rt = r2 === undefined ? r : r2;
  for (var k = 0; k < seg; k++) {
    var a0 = k / seg * Math.PI * 2, a1 = (k + 1) / seg * Math.PI * 2;
    var b0 = [x + Math.cos(a0) * r, y, z + Math.sin(a0) * r], b1 = [x + Math.cos(a1) * r, y, z + Math.sin(a1) * r];
    var t0 = [x + Math.cos(a0) * rt, y + h, z + Math.sin(a0) * rt], t1 = [x + Math.cos(a1) * rt, y + h, z + Math.sin(a1) * rt];
    this.quad(b1, b0, t0, t1, col);
    if (rt > 0) this.tri([x, y + h, z], t1, t0, colTop || col);
  }
};
MB.prototype.count = function () { return this.p.length / 3; };
MB.prototype.geometry = function () {
  var g = new T3.BufferGeometry();
  g.setAttribute('position', new T3.Float32BufferAttribute(this.p, 3));
  g.setAttribute('normal', new T3.Float32BufferAttribute(this.n, 3));
  g.setAttribute('color', new T3.Float32BufferAttribute(this.c, 3));
  g.computeBoundingSphere();
  return g;
};
var _col = {};
function C3(hex) { var c = _col[hex]; if (!c) { c = _col[hex] = new T3.Color(hex); } return c; }
// batches keyed by material + tile
var BATCH = {};
function batch(mat, x, z) { var k = mat + ':' + tileIdx(x, z); return BATCH[k] || (BATCH[k] = new MB()); }
function flushBatches(mats, group) {
  for (var k in BATCH) {
    var mb = BATCH[k]; if (!mb.count()) continue;
    var mat = mats[k.split(':')[0]];
    var m = new T3.Mesh(mb.geometry(), mat);
    m.matrixAutoUpdate = false; m.receiveShadow = true;
    group.add(m);
  }
  BATCH = {};
}

// --------------- materials ---------------
function patchSnowTop(mat, snowCol, windows) {
  mat.onBeforeCompile = function (sh) {
    sh.uniforms.uSnow = UNI.uSnow; sh.uniforms.uNight = UNI.uNight; sh.uniforms.uWet = UNI.uWet;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying float vUpN;\nvarying vec3 vObj; varying vec3 vNrm; varying float vSeedH; varying float vHt; varying vec3 vWP;')
      .replace('#include <begin_vertex>', ['#include <begin_vertex>',
        'vec3 wn = objectNormal;', '#ifdef USE_INSTANCING', 'wn = mat3(instanceMatrix) * wn;',
        'vec3 sc = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));',
        'vObj = position * sc; vSeedH = fract(sin(dot(floor(instanceMatrix[3].xz), vec2(12.9898, 78.233))) * 43758.5453); vHt = sc.y;', '#else', 'vObj = position; vSeedH = 0.5; vHt = 3.0;', '#endif',
        'vNrm = objectNormal; vUpN = normalize(mat3(modelMatrix) * wn).y;'].join('\n'))
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWP = (modelMatrix * vec4(transformed,1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uSnow; uniform float uNight; uniform float uWet;\nvarying float vUpN; varying vec3 vObj; varying vec3 vNrm; varying float vSeedH; varying float vHt; varying vec3 vWP;\n' + GLSL_NOISE)
      .replace('#include <color_fragment>', ['#include <color_fragment>',
        'float snowK = uSnow * smoothstep(0.3, 0.75, vUpN) * (0.85 + 0.15 * bdNoise(vWP.xz * 0.7));',
        'diffuseColor.rgb = mix(diffuseColor.rgb, vec3(' + snowCol + '), clamp(snowK * 1.2, 0.0, 1.0));',
        'diffuseColor.rgb *= 1.0 - 0.18 * uWet * (1.0 - snowK) * step(0.5, vUpN);'].join('\n'));
    if (windows) {
      sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', ['#include <emissivemap_fragment>',
        'float isWall = 1.0 - step(0.5, abs(vNrm.y));',
        'vec2 fc = abs(vNrm.x) > 0.5 ? vec2(vObj.z, vObj.y) : vec2(vObj.x, vObj.y);',
        'vec2 gq = vec2((fc.x + 50.0) / 3.3, (fc.y - 0.8) / 3.0);',
        'vec2 cellw = floor(gq); vec2 fw = fract(gq);',
        'float win = isWall * step(0.3, fw.x) * step(fw.x, 0.7) * step(0.28, fw.y) * step(fw.y, 0.78) * step(0.8, fc.y) * step(fc.y, vHt - 0.5);',
        'float lit = step(0.52, bdHash(cellw + vec2(floor(vSeedH * 97.0), floor(vSeedH * 61.0))));',
        'diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.10, 0.13, 0.17), win * 0.85);',
        'totalEmissiveRadiance += win * lit * uNight * vec3(1.0, 0.74, 0.42) * 0.85;'].join('\n'));
    }
  };
  return mat;
}
var MATS = {};
function makeRoadMaterial(kind) {
  var base = { asphalt: 0x3a3b3e, concrete: 0x77787a, gravel: 0x8a7c66, lot: 0x46474a, marking: 0xffffff, drive: 0x8d8b86 }[kind];
  var m = new T3.MeshPhongMaterial({ color: kind === 'marking' ? 0xffffff : base, vertexColors: kind === 'marking', shininess: 55, specular: 0xffffff, transparent: kind === 'marking', polygonOffset: true, polygonOffsetFactor: kind === 'marking' ? -4 : -2, polygonOffsetUnits: kind === 'marking' ? -4 : -2, depthWrite: kind !== 'marking', side: T3.DoubleSide });
  m.onBeforeCompile = function (sh) {
    ['uGameMin', 'uRoadSnow', 'uSnowRate', 'uWet', 'uIce', 'uHeat', 'uHorizon', 'uTime', 'uLeaves', 'uSlush', 'uSnow'].forEach(function (k) { sh.uniforms[k] = UNI[k]; });
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute float aLane; attribute float aCls; attribute float aPlow; attribute float aLeaf;\nvarying float vLane; varying float vCls; varying float vPlow; varying float vLeaf; varying vec3 vWP;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvLane = aLane; vCls = aCls; vPlow = aPlow; vLeaf = aLeaf;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', ['#include <common>',
      'uniform float uGameMin; uniform float uRoadSnow[9]; uniform float uSnowRate; uniform float uWet; uniform float uIce; uniform float uHeat; uniform vec3 uHorizon; uniform float uTime; uniform float uLeaves; uniform float uSlush; uniform float uSnow;',
      'varying float vLane; varying float vCls; varying float vPlow; varying float vLeaf; varying vec3 vWP;', GLSL_NOISE,
      'float roadSnowAt(float cls){ float s = 0.0; for (int i = 0; i < 9; i++) { if (abs(float(i) - cls) < 0.5) s = uRoadSnow[i]; } return s; }'].join('\n'))
      .replace('#include <color_fragment>', ['#include <color_fragment>',
        'float n1 = bdNoise(vWP.xz * 1.9), n2 = bdNoise(vWP.xz * 0.23), n3 = bdNoise(vWP.xz * 0.05);',
        'float s = roadSnowAt(vCls);',
        's = min(s, max(0.0, uGameMin - vPlow) * uSnowRate);',
        'float ln = fract(vLane);',
        'float track = smoothstep(0.1, 0.03, abs(ln - 0.27)) + smoothstep(0.1, 0.03, abs(ln - 0.73));',
        'float ridge = smoothstep(0.12, 0.0, min(ln, 1.0 - ln));',
        'float sAmt = clamp(s * (1.0 - 0.6 * track + 0.5 * ridge) * (0.75 + 0.5 * n2), 0.0, 1.0);',
        kind === 'marking' ? 'diffuseColor.a *= (1.0 - smoothstep(0.08, 0.45, sAmt)) * (0.75 + 0.25 * n1);' : [
          'vec3 col = diffuseColor.rgb * (0.78 + 0.3 * n2 + 0.12 * n1) * (0.9 + 0.2 * n3);',
          'vec3 snowCol = mix(vec3(0.70, 0.71, 0.74), vec3(0.93, 0.94, 0.97), smoothstep(0.3, 1.0, sAmt) * (0.7 + 0.3 * n1));',
          'snowCol = mix(snowCol, vec3(0.55, 0.53, 0.50), uSlush * (1.0 - smoothstep(0.6, 1.0, sAmt)));',
          'col = mix(col, snowCol, smoothstep(0.04, 0.55, sAmt));',
          'float lfn = bdNoise(vWP.xz * 3.1) * 0.6 + bdNoise(vWP.xz * 0.35) * 0.4;',
          'float lf = vLeaf * uLeaves * smoothstep(0.5, 0.62, lfn) * (0.55 + 0.45 * bdNoise(vWP.xz * 9.0));',
          'vec3 leafC = mix(mix(vec3(0.72, 0.36, 0.08), vec3(0.85, 0.62, 0.12), bdNoise(vWP.xz * 5.3)), vec3(0.55, 0.16, 0.08), step(0.8, bdNoise(vWP.xz * 7.7)));',
          'col = mix(col, leafC * (1.0 - 0.25 * uWet), clamp(lf, 0.0, 0.8) * (1.0 - sAmt));',
          'float wetK = clamp(uWet + uIce * 0.6, 0.0, 1.0) * (1.0 - sAmt);',
          'col *= 1.0 - 0.38 * wetK;',
          'vec3 Vd = normalize(cameraPosition - vWP); float dist = length(cameraPosition - vWP);',
          'float mir = uHeat * smoothstep(0.045, 0.01, Vd.y) * smoothstep(55.0, 150.0, dist) * (0.75 + 0.25 * sin(uTime * 3.0 + vWP.x * 0.2 + n1 * 6.0));',
          'col = mix(col, uHorizon * (0.92 + 0.12 * bdNoise(vWP.xz * 0.06 + uTime * 0.4)), clamp(mir, 0.0, 0.8));',
          'diffuseColor.rgb = col;'].join('\n')].join('\n'))
      .replace('#include <specularmap_fragment>', '#include <specularmap_fragment>\nspecularStrength = ' + (kind === 'marking' ? '0.1' : 'clamp(0.04 + 0.95 * wetK * (0.6 + 0.4 * n2) + mir * 0.5, 0.0, 1.0)') + ';');
  };
  return m;
}
function makeMaterials() {
  MATS.asphalt = makeRoadMaterial('asphalt'); MATS.concrete = makeRoadMaterial('concrete'); MATS.gravel = makeRoadMaterial('gravel');
  MATS.lot = makeRoadMaterial('lot'); MATS.marking = makeRoadMaterial('marking'); MATS.drive = makeRoadMaterial('drive');
  MATS.prop = patchSnowTop(new T3.MeshLambertMaterial({ vertexColors: true, side: T3.DoubleSide }), '0.92,0.94,0.97');
  MATS.propWin = patchSnowTop(new T3.MeshLambertMaterial({ vertexColors: true }), '0.92,0.94,0.97', true);
  MATS.bank = patchSnowTop(new T3.MeshLambertMaterial({ vertexColors: true, side: T3.DoubleSide }), '0.9,0.92,0.95');
  MATS.glass = new T3.MeshPhongMaterial({ color: 0x7fa4bd, shininess: 90, specular: 0x999999, emissive: 0x000000 });
  MATS.glow = new T3.MeshBasicMaterial({ vertexColors: true });
}

// --------------- terrain ---------------
var LU_COL = {}, GROUND = { tex: null, mat: null, data: null, season: null };
function luColor(t, season) {
  // [summer, fall, winter-dormant, spring], snow-hold
  var P = {
    0: [[0x6a8c46, 0x8c8a50, 0x8e8b6c, 0x759a4a], 1], 1: [[0x9ca458, 0xb49b62, 0x9e917a, 0x6e5c46], 1], 2: [[0x4d4f52, 0x4d4f52, 0x55575a, 0x4d4f52], 0.5],
    3: [[0x2b4a5e, 0x2b4a5e, 0x2b4a5e, 0x2b4a5e], 1], 4: [[0x3b5429, 0x6a5630, 0x655d50, 0x4a6230], 0.75], 5: [[0x5ba24a, 0x7c9a4c, 0x88886a, 0x68a64e], 1],
    6: [[0x4fb24c, 0x6aa24a, 0x86886a, 0x5cb050], 1], 7: [[0xd9c99b, 0xd2c090, 0xcfc4a4, 0xd9c99b], 1], 8: [[0x404245, 0x404245, 0x47494c, 0x404245], 0.25],
    9: [[0x809c56, 0x9a9458, 0x928d70, 0x86a052], 1], 10: [[0x3c9a3d, 0x3e943d, 0x5f7f55, 0x3c9a3d], 1], 11: [[0x8b6b48, 0x8b6b48, 0x7d6a55, 0x7a5c3e], 0.9],
    12: [[0x6c7b44, 0x9a8858, 0x8e8466, 0x77864a], 0.9], 13: [[0x5c9c44, 0x7c9848, 0x8a8a6c, 0x6aa24c], 1], 14: [[0x5a8840, 0x7e8a48, 0x8a876a, 0x62924a], 1]
  }[t] || [[0xff00ff, 0xff00ff, 0xff00ff, 0xff00ff], 1];
  return { hex: P[0][{ summer: 0, fall: 1, winter: 2, spring: 3 }[season]], hold: P[1] };
}
function buildGroundTexture(season) {
  var N = 1024, data = GROUND.data || new Uint8Array(N * N * 4), cache = {};
  for (var t = 0; t < 16; t++) { var lc = luColor(t, season), c = new T3.Color(lc.hex); cache[t] = [c.r * 255, c.g * 255, c.b * 255, lc.hold * 255]; }
  for (var j = 0; j < N; j++) {
    var z = WORLD.z0 + (j + 0.5) / N * WORLD.d;
    for (var i = 0; i < N; i++) {
      var x = WORLD.x0 + (i + 0.5) / N * WORLD.w, t2 = LUR.get(x, z), c2 = cache[t2];
      var nz = 0.9 + 0.2 * hash2(i, j) + (t2 === 1 ? 0.12 * Math.sin((season === 'summer' ? x : z) * 0.9) : 0);
      var q = (j * N + i) * 4;
      data[q] = Math.min(255, c2[0] * nz); data[q + 1] = Math.min(255, c2[1] * nz); data[q + 2] = Math.min(255, c2[2] * nz); data[q + 3] = c2[3];
    }
  }
  GROUND.data = data;
  if (!GROUND.tex) {
    GROUND.tex = new T3.DataTexture(data, N, N, T3.RGBAFormat);
    GROUND.tex.magFilter = T3.LinearFilter; GROUND.tex.minFilter = T3.LinearMipmapLinearFilter; GROUND.tex.generateMipmaps = true;
    GROUND.tex.anisotropy = 4;
  }
  GROUND.tex.needsUpdate = true; GROUND.season = season;
}
function buildGround(group) {
  var mat = new T3.MeshLambertMaterial({ map: GROUND.tex });
  mat.onBeforeCompile = function (sh) {
    sh.uniforms.uSnow = UNI.uSnow; sh.uniforms.uWet = UNI.uWet;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP;').replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWP = (modelMatrix * vec4(transformed,1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uSnow; uniform float uWet; varying vec3 vWP;\n' + GLSL_NOISE)
      .replace('#include <map_fragment>', ['#include <map_fragment>',
        'float hold = diffuseColor.a; diffuseColor.a = 1.0;',
        'float g1 = bdNoise(vWP.xz * 0.45), g2 = bdNoise(vWP.xz * 0.06), g3 = bdNoise(vWP.xz * 3.1);',
        'diffuseColor.rgb *= 0.84 + 0.2 * g1 + 0.1 * g2 + 0.06 * g3;',
        'float sk = clamp(uSnow * 1.25 - (1.0 - hold) * 0.9 - (g2 - 0.5) * 0.5 * (1.0 - uSnow), 0.0, 1.0) * hold;',
        'vec3 snowC = vec3(0.90, 0.92, 0.96) * (0.93 + 0.07 * g1) - vec3(0.05, 0.04, 0.0) * g3 * (1.0 - hold);',
        'diffuseColor.rgb = mix(diffuseColor.rgb, snowC, smoothstep(0.05, 0.7, sk));',
        'diffuseColor.rgb *= 1.0 - 0.2 * uWet * (1.0 - sk);'].join('\n'));
  };
  GROUND.mat = mat;
  var per = 40, step = HF.step;
  for (var tj = 0; tj < HF.nz - 1; tj += per) for (var ti = 0; ti < HF.nx - 1; ti += per) {
    var i1 = Math.min(HF.nx - 1, ti + per), j1 = Math.min(HF.nz - 1, tj + per), w = i1 - ti + 1, h = j1 - tj + 1;
    var pos = new Float32Array(w * h * 3), uv = new Float32Array(w * h * 2), nrm = new Float32Array(w * h * 3), idx = [];
    for (var j = 0; j < h; j++) for (var i = 0; i < w; i++) {
      var gi = ti + i, gj = tj + j, x = WORLD.x0 + gi * step, z = WORLD.z0 + gj * step, q = j * w + i;
      pos[q * 3] = x; pos[q * 3 + 1] = HF.h[gj * HF.nx + gi]; pos[q * 3 + 2] = z;
      uv[q * 2] = (x - WORLD.x0) / WORLD.w; uv[q * 2 + 1] = (z - WORLD.z0) / WORLD.d;
      var hl = HF.h[gj * HF.nx + Math.max(0, gi - 1)], hr = HF.h[gj * HF.nx + Math.min(HF.nx - 1, gi + 1)], hu = HF.h[Math.max(0, gj - 1) * HF.nx + gi], hd = HF.h[Math.min(HF.nz - 1, gj + 1) * HF.nx + gi];
      var nx = (hl - hr) / (2 * step), nz = (hu - hd) / (2 * step), L = Math.sqrt(nx * nx + 1 + nz * nz);
      nrm[q * 3] = nx / L; nrm[q * 3 + 1] = 1 / L; nrm[q * 3 + 2] = nz / L;
      if (i < w - 1 && j < h - 1) idx.push(q, q + w, q + 1, q + 1, q + w, q + w + 1);
    }
    var g = new T3.BufferGeometry();
    g.setAttribute('position', new T3.BufferAttribute(pos, 3)); g.setAttribute('normal', new T3.BufferAttribute(nrm, 3)); g.setAttribute('uv', new T3.BufferAttribute(uv, 2));
    g.setIndex(idx); g.computeBoundingSphere();
    var m = new T3.Mesh(g, mat); m.receiveShadow = true; m.matrixAutoUpdate = false; group.add(m);
  }
  // skirt plane far beyond the modelled area (farmland to the horizon)
  var sk = new T3.Mesh(new T3.RingGeometry(3400, 16000, 48, 1), new T3.MeshLambertMaterial({ color: 0x8e8a62 }));
  sk.rotation.x = -Math.PI / 2; sk.position.set((WORLD.x0 + WORLD.x1) / 2, -0.4, (WORLD.z0 + WORLD.z1) / 2); sk.name = 'skirt';
  GROUND.skirt = sk; group.add(sk);
}

// --------------- water ---------------
var WATER = { mat: null, meshes: [] };
function buildWater(group) {
  var mat = new T3.MeshPhongMaterial({ color: 0x2d5673, shininess: 110, specular: 0xbfd6e6, transparent: true, opacity: 0.92 });
  mat.onBeforeCompile = function (sh) {
    sh.uniforms.uFrozen = UNI.uFrozen; sh.uniforms.uSnow = UNI.uSnow; sh.uniforms.uTime = UNI.uTime;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP;').replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWP = (modelMatrix * vec4(transformed,1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uFrozen; uniform float uSnow; uniform float uTime; varying vec3 vWP;\n' + GLSL_NOISE)
      .replace('#include <color_fragment>', ['#include <color_fragment>',
        'float w1 = bdNoise(vWP.xz * 0.35 + vec2(uTime * 0.15, uTime * 0.07)), w2 = bdNoise(vWP.xz * 1.3 - uTime * 0.2);',
        'diffuseColor.rgb *= 0.85 + 0.25 * w1 + 0.1 * w2;',
        'vec3 ice = mix(vec3(0.62, 0.70, 0.76), vec3(0.93, 0.95, 0.98), clamp(uSnow * 1.3 * (0.7 + 0.5 * w1), 0.0, 1.0));',
        'diffuseColor.rgb = mix(diffuseColor.rgb, ice, uFrozen); diffuseColor.a = mix(diffuseColor.a, 1.0, uFrozen);'].join('\n'))
      .replace('#include <normal_fragment_maps>', '#include <normal_fragment_maps>\nnormal = normalize(normal + (1.0 - uFrozen) * vec3((bdNoise(vWP.xz*0.8+uTime*0.3)-0.5)*0.25, 0.0, (bdNoise(vWP.zx*0.8-uTime*0.25)-0.5)*0.25));');
  };
  WATER.mat = mat;
  function blobMesh(poly, y) {
    var shape = new T3.Shape(poly.map(function (p) { return new T3.Vector2(p[0], -p[1]); }));
    var g = new T3.ShapeGeometry(shape, 2); g.rotateX(-Math.PI / 2); g.translate(0, y, 0);
    var m = new T3.Mesh(g, mat); group.add(m); WATER.meshes.push(m); return m;
  }
  blobMesh(blobPoly(LADDIE.x, LADDIE.z, LADDIE.rx, LADDIE.rz, 2.2, 48), -0.45);
  PONDS.forEach(function (p, i) { blobMesh(blobPoly(p.x, p.z, p.rx, p.rz, i + 11), -0.4); });
  TPC_LAYOUT.ponds.forEach(function (p, i) { blobMesh(blobPoly(p.x, p.z, p.rx, p.rz, i + 40), -0.3 + groundH(p.x, p.z) * 0); });
  // creek ribbon
  var cr = resample(Ms(RICE_CREEK), 8), pos = [], idx = [];
  for (var k = 0; k < cr.length; k++) {
    var a = cr[Math.max(0, k - 1)], b = cr[Math.min(cr.length - 1, k + 1)], dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz) || 1, w = 7.5 + 2.5 * Math.sin(k * 0.37);
    pos.push(cr[k][0] + dz / L * w, -1.0, cr[k][1] - dx / L * w, cr[k][0] - dz / L * w, -1.0, cr[k][1] + dx / L * w);
    if (k) idx.push(2 * k - 2, 2 * k - 1, 2 * k, 2 * k - 1, 2 * k + 1, 2 * k);
  }
  var g = new T3.BufferGeometry(); g.setAttribute('position', new T3.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  var cm = new T3.Mesh(g, mat); group.add(cm); WATER.meshes.push(cm);
}

// --------------- roads ---------------
var ROADGEO = { plowRefs: {} };   // edge id -> {attr, start, n}
function RB() { this.p = []; this.a = []; this.c = []; this.pl = []; this.lf = []; this.idx = []; this.col = null; }
RB.prototype.vert = function (x, y, z, lane, cls, plow, leaf) { this.p.push(x, y, z); this.a.push(lane); this.c.push(cls); this.pl.push(plow); this.lf.push(leaf); return this.p.length / 3 - 1; };
RB.prototype.geometry = function () {
  var g = new T3.BufferGeometry(), n = this.p.length / 3, nrm = new Float32Array(n * 3);
  for (var i = 0; i < n; i++) nrm[i * 3 + 1] = 1;
  g.setAttribute('position', new T3.Float32BufferAttribute(this.p, 3)); g.setAttribute('normal', new T3.BufferAttribute(nrm, 3));
  g.setAttribute('aLane', new T3.Float32BufferAttribute(this.a, 1)); g.setAttribute('aCls', new T3.Float32BufferAttribute(this.c, 1));
  var pa = new T3.Float32BufferAttribute(this.pl, 1); pa.setUsage(T3.DynamicDrawUsage); g.setAttribute('aPlow', pa);
  g.setAttribute('aLeaf', new T3.Float32BufferAttribute(this.lf, 1));
  if (this.col) g.setAttribute('color', new T3.Float32BufferAttribute(this.col, 3));
  g.setIndex(this.idx); g.computeBoundingSphere();
  return g;
};
var RBATCH = {};
function rbatch(mat, x, z) { var k = mat + ':' + tileIdx(x, z); return RBATCH[k] || (RBATCH[k] = new RB()); }
function leafAt(x, z, ci) { return (ci === 5 || ci === 4) ? clamp(vnoise(x * 0.02, z * 0.02) * 1.7 - 0.45, 0, 1) : 0; }
function edgeMatKey(e) { return e.cls === 'fwy' || e.cls === 'ramp' && e.pl.group === 'fwy' ? 'concrete' : (e.cls === 'gravel' ? 'gravel' : (e.cls === 'lot' ? 'lot' : 'asphalt')); }
function plDeck(pl, s) { for (var k = 0; k < pl.cross.length; k++) { var c = pl.cross[k]; if (Math.abs(s - c.s) < (c.w / 2 + 7) / Math.max(0.35, c.sin) + 3) return true; } return false; }
var COLLIDE_SEGS = [];   // static barrier segments [x0,z0,x1,z1,y]
function buildRoads(group) {
  var markC = { w: [0.92, 0.92, 0.9], y: [0.93, 0.72, 0.12], g: [0.45, 0.45, 0.42] };
  NET.edges.forEach(function (e) {
    var key = edgeMatKey(e), n = e.pts.length, pts = e.pts, ci = e.ci, hw = e.hw;
    var mid = pts[Math.floor(n / 2)], rb = rbatch(key, mid[0], mid[1]);
    var yOff = 0.06, base = rb.p.length / 3;
    var c = CLS[e.cls], oneway = !e.lanesB;
    var nx = [], nz = [];
    for (var k = 0; k < n; k++) {
      var a = pts[Math.max(0, k - 1)], b = pts[Math.min(n - 1, k + 1)], dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz) || 1;
      nx.push(-dz / L); nz.push(dx / L);
    }
    for (k = 0; k < n; k++) {
      var p = pts[k], y = e.h[k] + yOff, lf = leafAt(p[0], p[1], ci);
      var laneL, laneC, laneR;
      if (oneway) { laneL = (-c.shL + e.shift * 0) / e.laneW - 0.0001; laneC = (hw - c.shL) / e.laneW; laneR = (2 * hw - c.shL) / e.laneW; laneL = -c.shL / e.laneW; }
      else { laneL = (hw - e.pl.center / 2) / e.laneW; laneC = -e.pl.center / 2 / e.laneW; laneR = laneL; }
      rb.vert(p[0] - nx[k] * hw, y, p[1] - nz[k] * hw, laneL, ci, -1e7, lf);
      rb.vert(p[0], y, p[1], laneC, ci, -1e7, lf);
      rb.vert(p[0] + nx[k] * hw, y, p[1] + nz[k] * hw, laneR, ci, -1e7, lf);
      if (k) { var q = base + 3 * (k - 1); rb.idx.push(q, q + 1, q + 3, q + 1, q + 4, q + 3, q + 1, q + 2, q + 4, q + 2, q + 5, q + 4); }
    }
    if (e.pl.road && e.pl.road.indexOf('mn65') === 0) ROADGEO.plowRefs[e.id] = { rb: rb, start: base, n: n };
    // ---- markings ----
    if (e.cls === 'lot' || e.cls === 'gravel' || e.pl.stub) return;
    var na = NET.nodes[e.a], nb = NET.nodes[e.b], mk = rbatch('marking', mid[0], mid[1]);
    function line(off, w, col, dash, ghost) {
      var s0 = na.r + 2, s1 = e.len - nb.r - 2; if (s1 - s0 < 3) return;
      var step = dash ? 12 : Math.max(4, Math.min(12, e.len / 4)), on = dash ? 3 : step;
      for (var s = s0; s < s1; s += step) {
        var sA = s, sB = Math.min(s1, s + on);
        var A = pointAt(pts, e.cum, sA), B = pointAt(pts, e.cum, sB);
        var ka = Math.min(n - 2, A.i), kb = Math.min(n - 2, B.i);
        var ya = e.h[ka] + (e.h[ka + 1] - e.h[ka]) * A.f + yOff + 0.015, yb = e.h[kb] + (e.h[kb + 1] - e.h[kb]) * B.f + yOff + 0.015;
        var ax = A.x - A.dz * off, az = A.z + A.dx * off, bx = B.x - B.dz * off, bz = B.z + B.dx * off;
        var i0 = mk.vert(ax - A.dz * w, ya, az + A.dx * w, 0.5, ci, -1e7, 0), i1 = mk.vert(ax + A.dz * w, ya, az - A.dx * w, 0.5, ci, -1e7, 0);
        var i2 = mk.vert(bx - B.dz * w, yb, bz + B.dx * w, 0.5, ci, -1e7, 0), i3 = mk.vert(bx + B.dz * w, yb, bz - B.dx * w, 0.5, ci, -1e7, 0);
        mk.col = mk.col || []; var cc = markC[col], gm = ghost ? 0.55 : 1;
        for (var t = 0; t < 4; t++) mk.col.push(cc[0] * gm, cc[1] * gm, cc[2] * gm);
        mk.idx.push(i0, i2, i1, i1, i2, i3);
      }
    }
    var W = 0.07, WE = 0.1;
    if (oneway) {
      var shift = e.shift, lanes = e.lanesF, openL = e.closed >= 0 ? lanes - 1 : lanes;
      if (e.pl.construction) {
        line(-hw + c.shL, W, 'g', false, true); line(-hw + c.shL + lanes * e.laneW, W, 'g', false, true);
        for (var li = 1; li < lanes; li++) line(-hw + c.shL + li * e.laneW, W, 'g', true, true);
      }
      line(-hw + c.shL + shift, WE, 'y', false); line(-hw + c.shL + openL * e.laneW + shift, WE, 'w', false);
      for (li = 1; li < openL; li++) line(-hw + c.shL + li * e.laneW + shift, W, 'w', true);
    } else {
      var cw = e.pl.center / 2;
      if (e.cls === 'art' || e.cls === 'col' || e.cls === 'rural') {
        if (cw > 0) { line(-cw, W, 'y', false); line(cw, W, 'y', false); line(-cw + 0.35, W * 0.8, 'y', true); line(cw - 0.35, W * 0.8, 'y', true); }
        else if (e.cls === 'art') { line(-0.12, W, 'y', false); line(0.12, W, 'y', false); }
        else line(0, W, 'y', true);
      }
      if (e.cls === 'art' || e.cls === 'rural') { line(cw + e.lanesF * e.laneW, WE, 'w', false); line(-(cw + e.lanesF * e.laneW), WE, 'w', false); }
      for (li = 1; li < e.lanesF; li++) { line(cw + li * e.laneW, W, 'w', true); line(-(cw + li * e.laneW), W, 'w', true); }
    }
    // stop bars on controlled approaches
    [[e.b, true], [e.a, false]].forEach(function (end) {
      var node = NET.nodes[end[0]];
      if (!node.sig && !(node.prio > e.prio && node.deg >= 3)) return;
      if (!end[1] && oneway) return;
      var s = end[1] ? e.len - node.r - 1.2 : node.r + 1.2; if (s < 2 || s > e.len - 2) return;
      var A = pointAt(pts, e.cum, s), sgn = end[1] ? 1 : -1;
      var o0 = oneway ? -hw + c.shL : 0.2, o1 = oneway ? -hw + c.shL + e.lanesF * e.laneW : e.pl.center / 2 + e.lanesF * e.laneW;
      var fx = A.dx * sgn, fz = A.dz * sgn, rx = -fz, rz = fx, y = e.h[Math.min(n - 1, A.i)] + yOff + 0.016;
      var i0 = mk.vert(A.x + rx * o0 - fx * 0.3, y, A.z + rz * o0 - fz * 0.3, 0.5, ci, -1e7, 0), i1 = mk.vert(A.x + rx * o1 - fx * 0.3, y, A.z + rz * o1 - fz * 0.3, 0.5, ci, -1e7, 0);
      var i2 = mk.vert(A.x + rx * o0 + fx * 0.3, y, A.z + rz * o0 + fz * 0.3, 0.5, ci, -1e7, 0), i3 = mk.vert(A.x + rx * o1 + fx * 0.3, y, A.z + rz * o1 + fz * 0.3, 0.5, ci, -1e7, 0);
      mk.col = mk.col || []; for (var t = 0; t < 4; t++) mk.col.push(0.92, 0.92, 0.9);
      mk.idx.push(i0, i1, i2, i1, i3, i2);
    });
  });
  // intersection patches + cul-de-sac bulbs
  NET.nodes.forEach(function (nd) {
    var r = nd.r, e0 = NET.edges[nd.edges[0]]; if (!e0) return;
    if (nd.deg === 1 && e0.cls === 'local' && e0.len > 40) r = 10.5;
    if (r <= 0) return;
    var minCi = 9, isF = false;
    nd.edges.forEach(function (id) { var e = NET.edges[id]; minCi = Math.min(minCi, e.ci); if (e.pl.group === 'fwy') isF = true; });
    if (isF) return;
    var rb = rbatch(e0.cls === 'lot' ? 'lot' : (e0.cls === 'gravel' ? 'gravel' : 'asphalt'), nd.x, nd.z), base = rb.p.length / 3, y = nd.h + 0.055;
    rb.vert(nd.x, y, nd.z, 0.5, minCi, -1e7, 0);
    for (var k = 0; k <= 20; k++) { var a = k / 20 * Math.PI * 2; rb.vert(nd.x + Math.cos(a) * r, y, nd.z + Math.sin(a) * r, 0.5, minCi, -1e7, 0); if (k) rb.idx.push(base, base + k + 1, base + k); }
  });
  // driveways
  SLOTS.forEach(function (s) {
    if (s.venue !== 'home') return;
    var rb = rbatch('drive', s.x, s.z), base = rb.p.length / 3, fx = Math.cos(s.rot), fz = -Math.sin(s.rot), W2 = 2.8;
    var pts4 = [[-5, -W2], [9.5, -W2], [9.5, W2], [-5, W2]];
    pts4.forEach(function (p) { rb.vert(s.x + p[0] * fx - p[1] * fz, 0.04, s.z + p[0] * fz + p[1] * fx, 0.5, 5, -1e7, 0); });
    rb.idx.push(base, base + 2, base + 1, base, base + 3, base + 2);
  });
  for (var key in RBATCH) {
    var rbx = RBATCH[key]; if (!rbx.idx.length) continue;
    var g = rbx.geometry(), mesh = new T3.Mesh(g, MATS[key.split(':')[0]]);
    mesh.receiveShadow = true; mesh.matrixAutoUpdate = false; mesh.renderOrder = key.indexOf('marking') === 0 ? 2 : 1;
    rbx.mesh = mesh; rbx.geo = g;
    group.add(mesh);
  }
  buildOverpasses();
}
// bridge decks, embankments, jersey barriers, piers, creek bridges
function buildOverpasses() {
  var conc = C3(0x9a9994), concD = C3(0x7c7b77), earth = C3(0x6b7d4a), rail = C3(0xa8adb0);
  NET.edges.forEach(function (e) {
    var pl = e.pl, n = e.pts.length, pts = e.pts, hw = e.hw;
    var elevated = false; for (var k = 0; k < n; k++) if (e.h[k] > 0.3) elevated = true;
    var creek = false; for (k = 0; k < n; k++) if (e.br[k] === 2) creek = true;
    if (!elevated && !creek) return;
    for (k = 0; k < n - 1; k++) {
      var a = pts[k], b = pts[k + 1], ha = e.h[k], hb = e.h[k + 1];
      var dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz) || 1, rx = -dz / L, rz = dx / L;
      var mb = batch('prop', a[0], a[1]), mbank = batch('bank', a[0], a[1]);
      var sA = e.s0 + e.cum[k], deck = pl.group === 'fwy' && plDeck(pl, sA);
      if (ha > 0.3 || hb > 0.3) {
        [-1, 1].forEach(function (sd) {
          var ox = rx * hw * sd, oz = rz * hw * sd;
          var A0 = [a[0] + ox, ha + 0.06, a[1] + oz], B0 = [b[0] + ox, hb + 0.06, b[1] + oz];
          // jersey barrier
          var bx = rx * 0.45 * sd, bz = rz * 0.45 * sd;
          var A1 = [A0[0] - bx * 0, A0[1] + 0.85, A0[2]], B1 = [B0[0], B0[1] + 0.85, B0[2]];
          var A2 = [A0[0] - bx, A0[1] + 0.85, A0[2] - bz], B2 = [B0[0] - bx, B0[1] + 0.85, B0[2] - bz];
          var A3 = [A0[0] - bx, A0[1], A0[2] - bz], B3 = [B0[0] - bx, B0[1], B0[2] - bz];
          if (sd > 0) { mb.quad(A3, B3, B2, A2, conc); mb.quad(A2, B2, B1, A1, conc); mb.quad(A1, B1, B0, A0, concD); }
          else { mb.quad(A2, B2, B3, A3, conc); mb.quad(A1, B1, B2, A2, conc); mb.quad(A0, B0, B1, A1, concD); }
          COLLIDE_SEGS.push([A0[0] - bx, A0[2] - bz, B0[0] - bx, B0[2] - bz, (ha + hb) / 2]);
          if (deck) {
            var Ad = [A0[0], A0[1] - 1.4, A0[2]], Bd = [B0[0], B0[1] - 1.4, B0[2]];
            if (sd > 0) mb.quad(Ad, Bd, B0, A0, concD); else mb.quad(A0, B0, Bd, Ad, concD);
          } else {
            var sp = 1.7;
            var Ae = [A0[0] + rx * ha * sp * sd, groundH(a[0], a[1]) - 0.2, A0[2] + rz * ha * sp * sd], Be = [B0[0] + rx * hb * sp * sd, groundH(b[0], b[1]) - 0.2, B0[2] + rz * hb * sp * sd];
            if (sd > 0) mbank.quad(A0, Ae, Be, B0, earth); else mbank.quad(A0, B0, Be, Ae, earth);
          }
        });
        if (deck) { // underside
          var U0 = [a[0] - rx * hw, ha - 1.34, a[1] - rz * hw], U1 = [b[0] - rx * hw, hb - 1.34, b[1] - rz * hw], U2 = [b[0] + rx * hw, hb - 1.34, b[1] + rz * hw], U3 = [a[0] + rx * hw, ha - 1.34, a[1] + rz * hw];
          mb.quad(U0, U1, U2, U3, concD);
        }
      }
      if (e.br[k] === 2 && !(ha > 0.3 || hb > 0.3)) { // creek bridge rails
        [-1, 1].forEach(function (sd) {
          var ox = rx * (hw + 0.2) * sd, oz = rz * (hw + 0.2) * sd;
          mb.box(a[0] + ox, 0, a[1] + oz, 0.25, 1.0, 0.25, 0, rail);
          var A0 = [a[0] + ox, 0.95, a[1] + oz], B0 = [b[0] + ox, 0.95, b[1] + oz];
          mb.quad([A0[0], 0.75, A0[2]], [B0[0], 0.75, B0[2]], [B0[0], 1.0, B0[2]], [A0[0], 1.0, A0[2]], rail);
          mb.quad([B0[0], 0.75, B0[2]], [A0[0], 0.75, A0[2]], [A0[0], 1.0, A0[2]], [B0[0], 1.0, B0[2]], rail);
          var Ad = [a[0] + rx * hw * sd, 0.06, a[1] + rz * hw * sd], Bd = [b[0] + rx * hw * sd, 0.06, b[1] + rz * hw * sd];
          mb.quad([Ad[0], -1.6, Ad[2]], [Bd[0], -1.6, Bd[2]], Bd, Ad, concD); mb.quad(Ad, Bd, [Bd[0], -1.6, Bd[2]], [Ad[0], -1.6, Ad[2]], concD);
          COLLIDE_SEGS.push([a[0] + ox, a[1] + oz, b[0] + ox, b[1] + oz, 0]);
        });
      }
    }
    // piers and abutments at each crossing
    if (pl.group === 'fwy') pl.cross.forEach(function (c) {
      var sLoc = c.s - e.s0; if (sLoc < 0 || sLoc > e.len) return;
      var flat = (c.w / 2 + 7) / Math.max(0.35, c.sin);
      [-flat + 1.5, flat - 1.5, -(c.w / 2 + 2) / Math.max(0.35, c.sin), (c.w / 2 + 2) / Math.max(0.35, c.sin)].forEach(function (off, oi) {
        var s = sLoc + off; if (s < 0 || s > e.len) return;
        var A = pointAt(pts, e.cum, s), k2 = Math.min(n - 2, A.i), h = e.h[k2] + (e.h[k2 + 1] - e.h[k2]) * A.f, rx2 = -A.dz, rz2 = A.dx, mbp = batch('prop', A.x, A.z);
        if (oi < 2) { // abutment wall
          var p0 = [A.x - rx2 * hw, -0.3, A.z - rz2 * hw], p1 = [A.x + rx2 * hw, -0.3, A.z + rz2 * hw];
          mbp.quad(p0, p1, [p1[0], h - 1.3, p1[2]], [p0[0], h - 1.3, p0[2]], concD); mbp.quad(p1, p0, [p0[0], h - 1.3, p0[2]], [p1[0], h - 1.3, p1[2]], concD);
        } else {
          for (var q = -1; q <= 1; q++) { var cx = A.x + rx2 * q * (hw - 2.2), cz = A.z + rz2 * q * (hw - 2.2); mbp.cyl(cx, -0.2, cz, 0.55, h - 1.3, 8, conc); PIER_POS.push([cx, cz]); }
          mbp.box(A.x, h - 2.3, A.z, 1.4, 1.0, 2 * hw - 1, Math.atan2(-A.dz, A.dx) + Math.PI / 2, concD);
        }
      });
    });
  });
}
var PIER_POS = [];
function updatePlowAttr(eid, s0, s1, t) {
  var ref = ROADGEO.plowRefs[eid]; if (!ref || !ref.rb.geo) return;
  var e = NET.edges[eid], attr = ref.rb.geo.attributes.aPlow, arr = attr.array, lo = 1e9, hi = -1;
  for (var k = 0; k < ref.n; k++) { var s = e.cum[k]; if (s >= s0 - 6 && s <= s1 + 6) { var b = ref.start + 3 * k; arr[b] = arr[b + 1] = arr[b + 2] = t; lo = Math.min(lo, b); hi = Math.max(hi, b + 2); } }
  if (hi >= 0) { attr.updateRange.offset = 0; attr.updateRange.count = -1; attr.needsUpdate = true; }
}
