// =============================================================================
// 00-core — configuration, device/quality detection, math, RNG, procedural
// textures and the geometry-merging helpers everything else is built from.
// =============================================================================

var T = THREE;

// ---------------------------------------------------------------- device tier
var UA = navigator.userAgent || '';
var IS_TOUCH = ('ontouchstart' in window) || (navigator.maxTouchPoints || 0) > 0;
var IS_MOBILE = IS_TOUCH && (/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle/i.test(UA) ||
                             Math.min(screen.width, screen.height) < 820);
var CORES = navigator.hardwareConcurrency || 4;
var LOW_END = IS_MOBILE && CORES <= 6;

// Quality presets. Mobile gets shorter draw distance, smaller shadow maps,
// fewer particles and no post chain so the framerate stays playable.
var QUALITY_PRESETS = {
  low: {
    name: 'Low', pixelRatio: 1.0, shadowSize: 1024, shadowDist: 62, drawDistance: 620,
    chunkRadius: 2, rain: 2200, snow: 1400, aiCars: 26, peds: 14, trees: 0.35,
    post: false, envRes: 64, shadows: true, lightPools: 26, detailProps: false
  },
  medium: {
    name: 'Medium', pixelRatio: 1.35, shadowSize: 1536, shadowDist: 90, drawDistance: 950,
    chunkRadius: 3, rain: 4800, snow: 2800, aiCars: 48, peds: 26, trees: 0.62,
    post: false, envRes: 128, shadows: true, lightPools: 52, detailProps: true
  },
  high: {
    name: 'High', pixelRatio: 1.75, shadowSize: 2048, shadowDist: 118, drawDistance: 1400,
    chunkRadius: 4, rain: 9000, snow: 5200, aiCars: 78, peds: 46, trees: 1.0,
    post: true, envRes: 256, shadows: true, lightPools: 90, detailProps: true
  },
  ultra: {
    name: 'Ultra', pixelRatio: 2.0, shadowSize: 3072, shadowDist: 150, drawDistance: 1850,
    chunkRadius: 5, rain: 14000, snow: 8000, aiCars: 105, peds: 66, trees: 1.35,
    post: true, envRes: 256, shadows: true, lightPools: 130, detailProps: true
  }
};

var Q = Object.assign({}, QUALITY_PRESETS[LOW_END ? 'low' : (IS_MOBILE ? 'medium' : 'high')]);
var QUALITY_NAME = LOW_END ? 'low' : (IS_MOBILE ? 'medium' : 'high');

function applyQuality(name) {
  if (!QUALITY_PRESETS[name]) return;
  QUALITY_NAME = name;
  var p = QUALITY_PRESETS[name];
  for (var k in p) Q[k] = p[k];
}

// ------------------------------------------------------------------ math bits
var PI = Math.PI, TAU = Math.PI * 2, DEG = Math.PI / 180;
function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }
function clamp01(v) { return v < 0 ? 0 : (v > 1 ? 1 : v); }
function lerp(a, b, t) { return a + (b - a) * t; }
function invLerp(a, b, v) { return b === a ? 0 : clamp01((v - a) / (b - a)); }
function smoothstep(a, b, v) { var t = invLerp(a, b, v); return t * t * (3 - 2 * t); }
function sign(v) { return v < 0 ? -1 : (v > 0 ? 1 : 0); }
// Frame-rate independent exponential approach toward a target.
function damp(cur, target, rate, dt) { return lerp(cur, target, 1 - Math.exp(-rate * dt)); }
function wrapAngle(a) { a = (a + PI) % TAU; if (a < 0) a += TAU; return a - PI; }
function dist2(ax, az, bx, bz) { var dx = ax - bx, dz = az - bz; return dx * dx + dz * dz; }
function dist(ax, az, bx, bz) { return Math.sqrt(dist2(ax, az, bx, bz)); }

// Deterministic RNG so the city is identical on every load / device.
function mulberry32(seed) {
  var a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    var t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hash2(x, y) {
  var h = Math.imul(x | 0, 374761393) ^ Math.imul(y | 0, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
// Smooth 2D value noise (used for terrain tint, tree scatter, cloud shapes).
function vnoise(x, y) {
  var xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  var u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  var a = hash2(xi, yi), b = hash2(xi + 1, yi), c = hash2(xi, yi + 1), d = hash2(xi + 1, yi + 1);
  return lerp(lerp(a, b, u), lerp(c, d, u), v);
}
function fbm(x, y, oct) {
  var s = 0, amp = 0.5, f = 1, norm = 0;
  for (var i = 0; i < (oct || 4); i++) { s += vnoise(x * f, y * f) * amp; norm += amp; amp *= 0.5; f *= 2; }
  return s / norm;
}

var RNG = mulberry32(20240415);
function rnd() { return RNG(); }
function rrange(a, b) { return a + (b - a) * RNG(); }
function rint(a, b) { return Math.floor(a + (b - a + 1) * RNG()); }
function pick(arr) { return arr[Math.floor(RNG() * arr.length) % arr.length]; }

// ------------------------------------------------------------ geometry merging
// The world is drawn as a handful of big merged meshes per chunk. three's
// BufferGeometryUtils lives in /examples (not the standalone build), so this is
// a compact stand-in: everything is expanded to non-indexed triangle soup with a
// position/normal/uv/color layout, then concatenated.
function geoToSoup(g) {
  var geo = g.index ? g.toNonIndexed() : g;
  if (!geo.attributes.uv) {
    var n = geo.attributes.position.count;
    geo.setAttribute('uv', new T.BufferAttribute(new Float32Array(n * 2), 2));
  }
  if (!geo.attributes.normal) geo.computeVertexNormals();
  return geo;
}

function mergeGeos(list) {
  var total = 0, i, g;
  var soups = [];
  for (i = 0; i < list.length; i++) {
    g = geoToSoup(list[i]);
    soups.push(g);
    total += g.attributes.position.count;
  }
  var pos = new Float32Array(total * 3), nor = new Float32Array(total * 3);
  var uv = new Float32Array(total * 2), col = new Float32Array(total * 3);
  var off = 0, hasColor = false;
  for (i = 0; i < soups.length; i++) if (soups[i].attributes.color) { hasColor = true; break; }
  for (i = 0; i < soups.length; i++) {
    g = soups[i];
    var n = g.attributes.position.count;
    pos.set(g.attributes.position.array.subarray(0, n * 3), off * 3);
    nor.set(g.attributes.normal.array.subarray(0, n * 3), off * 3);
    uv.set(g.attributes.uv.array.subarray(0, n * 2), off * 2);
    if (hasColor) {
      if (g.attributes.color) col.set(g.attributes.color.array.subarray(0, n * 3), off * 3);
      else col.fill(1, off * 3, off * 3 + n * 3);
    }
    off += n;
    if (g !== list[i]) g.dispose();
  }
  var out = new T.BufferGeometry();
  out.setAttribute('position', new T.BufferAttribute(pos, 3));
  out.setAttribute('normal', new T.BufferAttribute(nor, 3));
  out.setAttribute('uv', new T.BufferAttribute(uv, 2));
  if (hasColor) out.setAttribute('color', new T.BufferAttribute(col, 3));
  return out;
}

// Paint a whole geometry with one colour (merged meshes use vertexColors so a
// single material can serve hundreds of differently tinted buildings).
var _tmpCol = new T.Color();
function paintGeo(g, hex) {
  var n = g.attributes.position.count;
  var arr = new Float32Array(n * 3);
  _tmpCol.set(hex);
  if (T.ColorManagement && T.ColorManagement.enabled) _tmpCol.convertSRGBToLinear();
  for (var i = 0; i < n; i++) { arr[i * 3] = _tmpCol.r; arr[i * 3 + 1] = _tmpCol.g; arr[i * 3 + 2] = _tmpCol.b; }
  g.setAttribute('color', new T.BufferAttribute(arr, 3));
  return g;
}

// Scale the UVs of a geometry so a tiling texture keeps a constant world size.
function scaleUV(g, su, sv) {
  var uv = g.attributes.uv;
  for (var i = 0; i < uv.count; i++) { uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv); }
  uv.needsUpdate = true;
  return g;
}

// A flat horizontal quad from a centre, size and rotation — the workhorse for
// road surfaces, lot pavement, decals and lane markings.
function quadXZ(cx, cz, w, h, rot, y, uvScale) {
  var g = new T.PlaneGeometry(w, h, 1, 1);
  g.rotateX(-PI / 2);
  if (rot) g.rotateY(rot);
  g.translate(cx, y || 0, cz);
  if (uvScale) scaleUV(g, w * uvScale, h * uvScale);
  return g;
}

function boxGeo(w, h, d, x, y, z, rot) {
  var g = new T.BoxGeometry(w, h, d);
  if (rot) g.rotateY(rot);
  g.translate(x, y, z);
  return g;
}

// ------------------------------------------------------------ canvas textures
// Every texture in the build is drawn here at load time: no network requests,
// no binary assets, and they can be re-tinted procedurally.
function makeCanvas(size) {
  var c = document.createElement('canvas');
  c.width = c.height = size;
  return c;
}

function finishTex(canvas, repeat, srgb, aniso) {
  var t = new T.CanvasTexture(canvas);
  t.wrapS = t.wrapT = T.RepeatWrapping;
  if (repeat) t.repeat.set(repeat, repeat);
  t.colorSpace = srgb === false ? T.NoColorSpace : T.SRGBColorSpace;
  t.anisotropy = aniso || 4;
  return t;
}

// Fine grain / speckle used by most surfaces.
function speckle(ctx, size, count, colors, minR, maxR, alpha) {
  for (var i = 0; i < count; i++) {
    ctx.globalAlpha = alpha === undefined ? (0.05 + Math.random() * 0.25) : alpha * Math.random();
    ctx.fillStyle = colors[(Math.random() * colors.length) | 0];
    var r = minR + Math.random() * (maxR - minR);
    ctx.beginPath();
    ctx.arc(Math.random() * size, Math.random() * size, r, 0, TAU);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

var TEX = {};

function buildTextures() {
  var S = 256, c, x, i, j;

  // --- asphalt ------------------------------------------------------------
  c = makeCanvas(S); x = c.getContext('2d');
  x.fillStyle = '#3b3e44'; x.fillRect(0, 0, S, S);
  speckle(x, S, 2600, ['#2c2f34', '#4a4e55', '#55595f', '#232529'], 0.5, 2.1);
  for (i = 0; i < 12; i++) { // tar seams / cracks
    x.strokeStyle = 'rgba(26,28,32,' + (0.25 + Math.random() * 0.4) + ')';
    x.lineWidth = 0.7 + Math.random() * 1.6;
    x.beginPath();
    var px = Math.random() * S, py = Math.random() * S;
    x.moveTo(px, py);
    for (j = 0; j < 5; j++) { px += (Math.random() - 0.5) * 70; py += (Math.random() - 0.5) * 70; x.lineTo(px, py); }
    x.stroke();
  }
  TEX.asphalt = finishTex(c, 1, true, 8);

  // asphalt roughness: patchy so wet roads get uneven, believable glare
  c = makeCanvas(128); x = c.getContext('2d');
  x.fillStyle = '#c8c8c8'; x.fillRect(0, 0, 128, 128);
  for (i = 0; i < 900; i++) {
    var g = (140 + Math.random() * 110) | 0;
    x.fillStyle = 'rgba(' + g + ',' + g + ',' + g + ',0.5)';
    x.beginPath(); x.arc(Math.random() * 128, Math.random() * 128, 1 + Math.random() * 8, 0, TAU); x.fill();
  }
  TEX.asphaltRough = finishTex(c, 1, false, 4);

  // --- concrete / sidewalk with slab joints -------------------------------
  c = makeCanvas(S); x = c.getContext('2d');
  x.fillStyle = '#9a9a96'; x.fillRect(0, 0, S, S);
  speckle(x, S, 1800, ['#8a8a86', '#a8a8a3', '#7d7d79'], 0.5, 2.0);
  x.strokeStyle = 'rgba(90,90,88,0.75)'; x.lineWidth = 2;
  for (i = 0; i <= S; i += S / 4) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, S); x.stroke(); x.beginPath(); x.moveTo(0, i); x.lineTo(S, i); x.stroke(); }
  TEX.concrete = finishTex(c, 1, true, 8);

  // --- grass / turf -------------------------------------------------------
  c = makeCanvas(S); x = c.getContext('2d');
  x.fillStyle = '#4a6b34'; x.fillRect(0, 0, S, S);
  speckle(x, S, 5200, ['#3f5d2c', '#577a3c', '#6a8c48', '#35502a'], 0.6, 2.6, 0.7);
  for (i = 0; i < 700; i++) {
    x.strokeStyle = 'rgba(' + (70 + Math.random() * 50 | 0) + ',' + (100 + Math.random() * 50 | 0) + ',50,0.5)';
    x.lineWidth = 0.7;
    var gx = Math.random() * S, gy = Math.random() * S;
    x.beginPath(); x.moveTo(gx, gy); x.lineTo(gx + (Math.random() - 0.5) * 5, gy - 2 - Math.random() * 5); x.stroke();
  }
  TEX.grass = finishTex(c, 1, true, 8);

  // --- dirt / gravel shoulder --------------------------------------------
  c = makeCanvas(S); x = c.getContext('2d');
  x.fillStyle = '#6d5c46'; x.fillRect(0, 0, S, S);
  speckle(x, S, 4200, ['#5c4d3a', '#7d6b52', '#8a7860', '#4d4033'], 0.6, 2.6, 0.8);
  TEX.dirt = finishTex(c, 1, true, 8);

  // --- mown sports turf with mower stripes --------------------------------
  c = makeCanvas(S); x = c.getContext('2d');
  for (i = 0; i < 8; i++) { x.fillStyle = i % 2 ? '#4d7436' : '#43682f'; x.fillRect(i * S / 8, 0, S / 8, S); }
  speckle(x, S, 2400, ['#3f5d2c', '#54793a'], 0.5, 2.0, 0.4);
  TEX.field = finishTex(c, 1, true, 8);

  // --- roof: gravel / membrane -------------------------------------------
  c = makeCanvas(128); x = c.getContext('2d');
  x.fillStyle = '#55565a'; x.fillRect(0, 0, 128, 128);
  speckle(x, 128, 1600, ['#45464a', '#65666a', '#3a3b3f'], 0.6, 2.0, 0.8);
  TEX.roof = finishTex(c, 1, true, 4);

  // --- asphalt shingles ---------------------------------------------------
  c = makeCanvas(128); x = c.getContext('2d');
  x.fillStyle = '#5a5148'; x.fillRect(0, 0, 128, 128);
  for (j = 0; j < 8; j++) {
    for (i = 0; i < 8; i++) {
      var sh = 70 + ((i * 7 + j * 13) % 5) * 8 + Math.random() * 12;
      x.fillStyle = 'rgb(' + (sh | 0) + ',' + ((sh - 6) | 0) + ',' + ((sh - 14) | 0) + ')';
      x.fillRect(i * 16 + (j % 2 ? 8 : 0), j * 16, 15, 15);
    }
  }
  TEX.shingle = finishTex(c, 1, true, 4);

  // --- brick --------------------------------------------------------------
  c = makeCanvas(S); x = c.getContext('2d');
  x.fillStyle = '#9c9188'; x.fillRect(0, 0, S, S);
  for (j = 0; j < 16; j++) {
    for (i = 0; i < 8; i++) {
      var r0 = 140 + Math.random() * 40, g0 = 78 + Math.random() * 26, b0 = 62 + Math.random() * 22;
      x.fillStyle = 'rgb(' + (r0 | 0) + ',' + (g0 | 0) + ',' + (b0 | 0) + ')';
      x.fillRect(i * 32 + (j % 2 ? 16 : 0) + 1.5, j * 16 + 1.5, 29, 13);
    }
  }
  TEX.brick = finishTex(c, 1, true, 8);

  // --- horizontal vinyl siding (houses) ----------------------------------
  c = makeCanvas(128); x = c.getContext('2d');
  x.fillStyle = '#d7d3cb'; x.fillRect(0, 0, 128, 128);
  for (j = 0; j < 16; j++) {
    x.fillStyle = 'rgba(255,255,255,0.35)'; x.fillRect(0, j * 8, 128, 6);
    x.fillStyle = 'rgba(0,0,0,0.16)'; x.fillRect(0, j * 8 + 6, 128, 2);
  }
  speckle(x, 128, 500, ['#c9c5bd', '#e6e2da'], 0.5, 1.4, 0.35);
  TEX.siding = finishTex(c, 1, true, 8);

  // --- stucco / EIFS (strip malls, big box) -------------------------------
  c = makeCanvas(128); x = c.getContext('2d');
  x.fillStyle = '#cfc6b8'; x.fillRect(0, 0, 128, 128);
  speckle(x, 128, 2600, ['#c2b9ab', '#ded6c9', '#b6ad9f'], 0.5, 2.0, 0.6);
  TEX.stucco = finishTex(c, 1, true, 8);

  // --- glass curtain wall + its emissive twin -----------------------------
  // Windows are dark by day; the emissive map is what lights up after dusk.
  function windowWall(cols, rows, base, glass, litChance) {
    var W = 256, H = 256;
    var a = makeCanvas(W), ac = a.getContext('2d');
    var e = makeCanvas(W), ec = e.getContext('2d');
    ac.fillStyle = base; ac.fillRect(0, 0, W, H);
    ec.fillStyle = '#000'; ec.fillRect(0, 0, W, H);
    var cw = W / cols, ch = H / rows;
    for (var jj = 0; jj < rows; jj++) {
      for (var ii = 0; ii < cols; ii++) {
        var px = ii * cw + cw * 0.16, py = jj * ch + ch * 0.16;
        var pw = cw * 0.68, ph = ch * 0.62;
        var shade = 0.75 + Math.random() * 0.5;
        ac.fillStyle = glass;
        ac.globalAlpha = clamp01(shade * 0.9);
        ac.fillRect(px, py, pw, ph);
        ac.globalAlpha = 1;
        ac.strokeStyle = 'rgba(0,0,0,0.35)'; ac.lineWidth = 1.5;
        ac.strokeRect(px, py, pw, ph);
        if (Math.random() < litChance) {
          var warm = Math.random();
          ec.fillStyle = warm < 0.72 ? 'rgb(255,' + (200 + Math.random() * 40 | 0) + ',' + (140 + Math.random() * 60 | 0) + ')'
                                     : 'rgb(' + (180 + Math.random() * 50 | 0) + ',215,255)';
          ec.globalAlpha = 0.55 + Math.random() * 0.45;
          ec.fillRect(px, py, pw, ph);
          ec.globalAlpha = 1;
        }
      }
    }
    return { albedo: finishTex(a, 1, true, 8), emissive: finishTex(e, 1, true, 4) };
  }

  var office = windowWall(6, 6, '#5b6773', '#2a3d4d', 0.5);
  TEX.office = office.albedo; TEX.officeLit = office.emissive;
  var apt = windowWall(5, 5, '#8d8378', '#3a4450', 0.42);
  TEX.apartment = apt.albedo; TEX.apartmentLit = apt.emissive;
  var shop = windowWall(4, 2, '#b9b0a2', '#37474f', 0.6);
  TEX.retail = shop.albedo; TEX.retailLit = shop.emissive;
  var house = windowWall(3, 2, '#d7d3cb', '#3d4a55', 0.35);
  TEX.houseWin = house.albedo; TEX.houseLit = house.emissive;

  // --- parking lot with painted stalls ------------------------------------
  c = makeCanvas(S); x = c.getContext('2d');
  x.fillStyle = '#41444a'; x.fillRect(0, 0, S, S);
  speckle(x, S, 2000, ['#33363b', '#4d5158'], 0.5, 2.0);
  x.strokeStyle = 'rgba(226,226,214,0.62)'; x.lineWidth = 2.2;
  for (i = 0; i < S; i += 32) { // stalls back-to-back with a drive aisle
    x.beginPath(); x.moveTo(i, 4); x.lineTo(i, 60); x.stroke();
    x.beginPath(); x.moveTo(i, 68); x.lineTo(i, 124); x.stroke();
    x.beginPath(); x.moveTo(i, 132); x.lineTo(i, 188); x.stroke();
    x.beginPath(); x.moveTo(i, 196); x.lineTo(i, 252); x.stroke();
  }
  TEX.lot = finishTex(c, 1, true, 8);

  // --- water normal map (animated by scrolling the offset) ----------------
  c = makeCanvas(128); x = c.getContext('2d');
  var img = x.createImageData(128, 128);
  for (j = 0; j < 128; j++) {
    for (i = 0; i < 128; i++) {
      var h1 = fbm(i * 0.09, j * 0.09, 3), hx = fbm((i + 1) * 0.09, j * 0.09, 3), hy = fbm(i * 0.09, (j + 1) * 0.09, 3);
      // Tangent-space normal: R = x, G = y, B = z (flat is 128,128,255).
      var nx = (h1 - hx) * 3, ny = (h1 - hy) * 3, nz = 1;
      var len = Math.hypot(nx, ny, nz);
      var p = (j * 128 + i) * 4;
      img.data[p] = (nx / len * 0.5 + 0.5) * 255;
      img.data[p + 1] = (ny / len * 0.5 + 0.5) * 255;
      img.data[p + 2] = (nz / len * 0.5 + 0.5) * 255;
      img.data[p + 3] = 255;
    }
  }
  x.putImageData(img, 0, 0);
  TEX.waterNormal = finishTex(c, 1, false, 4);

  // --- rain ripple normal map (overlaid on wet roads) ---------------------
  // Flat tangent-space normal is (128,128,255); the rings tilt R/G.
  c = makeCanvas(128); x = c.getContext('2d');
  x.fillStyle = 'rgb(128,128,255)'; x.fillRect(0, 0, 128, 128);
  for (i = 0; i < 70; i++) {
    var rx = Math.random() * 128, ry = Math.random() * 128, rr = 2 + Math.random() * 7;
    var grd = x.createRadialGradient(rx, ry, 0, rx, ry, rr);
    grd.addColorStop(0, 'rgba(96,160,250,0.85)');
    grd.addColorStop(0.55, 'rgba(168,104,250,0.55)');
    grd.addColorStop(1, 'rgba(128,128,255,0)');
    x.fillStyle = grd; x.beginPath(); x.arc(rx, ry, rr, 0, TAU); x.fill();
  }
  TEX.rippleNormal = finishTex(c, 1, false, 2);

  // --- soft radial glow (light pools, headlight spill, sun flare) ---------
  c = makeCanvas(128); x = c.getContext('2d');
  var gg = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  gg.addColorStop(0, 'rgba(255,255,255,1)');
  gg.addColorStop(0.28, 'rgba(255,255,255,0.55)');
  gg.addColorStop(0.65, 'rgba(255,255,255,0.13)');
  gg.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = gg; x.fillRect(0, 0, 128, 128);
  var glowTex = finishTex(c, 0, true, 2);
  glowTex.wrapS = glowTex.wrapT = T.ClampToEdgeWrapping;
  TEX.glow = glowTex;

  // --- rain streak sprite -------------------------------------------------
  c = makeCanvas(32); x = c.getContext('2d');
  var rg = x.createLinearGradient(0, 0, 0, 32);
  rg.addColorStop(0, 'rgba(200,225,255,0)');
  rg.addColorStop(0.45, 'rgba(210,232,255,0.85)');
  rg.addColorStop(1, 'rgba(200,225,255,0)');
  x.fillStyle = rg; x.fillRect(12, 0, 8, 32);
  var rt = finishTex(c, 0, true, 1); rt.wrapS = rt.wrapT = T.ClampToEdgeWrapping;
  TEX.rainDrop = rt;

  // --- snowflake ----------------------------------------------------------
  c = makeCanvas(32); x = c.getContext('2d');
  var sg = x.createRadialGradient(16, 16, 0, 16, 16, 15);
  sg.addColorStop(0, 'rgba(255,255,255,1)');
  sg.addColorStop(0.5, 'rgba(245,250,255,0.6)');
  sg.addColorStop(1, 'rgba(240,248,255,0)');
  x.fillStyle = sg; x.beginPath(); x.arc(16, 16, 15, 0, TAU); x.fill();
  var st = finishTex(c, 0, true, 1); st.wrapS = st.wrapT = T.ClampToEdgeWrapping;
  TEX.snowFlake = st;

  // --- tree foliage card (crossed billboards for distant trees) -----------
  c = makeCanvas(128); x = c.getContext('2d');
  x.clearRect(0, 0, 128, 128);
  for (i = 0; i < 260; i++) {
    var a2 = Math.random() * TAU, rr2 = Math.pow(Math.random(), 0.6) * 58;
    var lx = 64 + Math.cos(a2) * rr2, ly = 62 + Math.sin(a2) * rr2 * 0.92;
    x.fillStyle = 'rgba(' + (36 + Math.random() * 44 | 0) + ',' + (74 + Math.random() * 60 | 0) + ',' + (28 + Math.random() * 34 | 0) + ',' + (0.55 + Math.random() * 0.45) + ')';
    x.beginPath(); x.ellipse(lx, ly, 5 + Math.random() * 9, 4 + Math.random() * 7, Math.random() * TAU, 0, TAU); x.fill();
  }
  var tt = finishTex(c, 0, true, 4); tt.wrapS = tt.wrapT = T.ClampToEdgeWrapping;
  TEX.leaf = tt;

  // --- generic storefront signage band ------------------------------------
  c = makeCanvas(256); x = c.getContext('2d');
  x.fillStyle = '#1b2027'; x.fillRect(0, 0, 256, 256);
  // Muted storefront lettering on a dark fascia rather than a rainbow.
  var signColors = ['#d8d2c4', '#e6c88a', '#9fc4dd', '#d7a2a2', '#b9d7a8'];
  for (j = 0; j < 8; j++) {
    x.fillStyle = signColors[(Math.random() * signColors.length) | 0];
    x.globalAlpha = 0.75;
    var sw = 40 + Math.random() * 90, sx = 20 + Math.random() * (200 - sw);
    for (var w2 = 0; w2 < 4; w2++) {
      if (Math.random() < 0.25) continue;
      x.fillRect(sx + w2 * (sw / 4), j * 32 + 11, sw / 4 - 4, 11);
    }
  }
  x.globalAlpha = 1;
  TEX.signage = finishTex(c, 1, true, 4);
}

// ------------------------------------------------------------------ utilities
function fmtClock(hours) {
  var h = Math.floor(hours) % 24, m = Math.floor((hours % 1) * 60);
  var ap = h < 12 ? 'AM' : 'PM', hh = h % 12; if (hh === 0) hh = 12;
  return hh + ':' + (m < 10 ? '0' : '') + m + ' ' + ap;
}
