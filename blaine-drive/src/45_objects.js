// ============================================================================================
// 45 OBJECTS — buildings, trees, landmarks, street furniture, signs, events (instanced/batched)
// ============================================================================================
var TILES = [];          // per-tile groups for distance culling
var OBJ = { treeMeshes: [], drum: null, drums: [], lights: null, pools: null, lampPts: null, lenses: null, eventGroups: {}, workGroup: null, iceGroup: null, crowd: null };
function tileGroup(i) { return TILES[i].g; }
function initTiles(root) {
  for (var j = 0; j < NTZ; j++) for (var i = 0; i < NTX; i++) {
    var g = new T3.Group(); g.matrixAutoUpdate = false; root.add(g);
    TILES.push({ g: g, x: WORLD.x0 + (i + 0.5) * TILE, z: WORLD.z0 + (j + 0.5) * TILE });
  }
}
function unitBox() { var g = new T3.BoxGeometry(1, 1, 1); g.translate(0, 0.5, 0); return g; }
function unitPrism() {
  var v = [-.5, 0, -.5, .5, 0, -.5, .5, 1, 0, -.5, 0, -.5, .5, 1, 0, -.5, 1, 0, .5, 0, .5, -.5, 0, .5, -.5, 1, 0, .5, 0, .5, -.5, 1, 0, .5, 1, 0,
    -.5, 0, .5, -.5, 0, -.5, -.5, 1, 0, .5, 0, -.5, .5, 0, .5, .5, 1, 0, -.5, 0, -.5, .5, 0, -.5, .5, 0, .5, -.5, 0, -.5, .5, 0, .5, -.5, 0, .5];
  var g = new T3.BufferGeometry(); g.setAttribute('position', new T3.Float32BufferAttribute(v, 3)); g.computeVertexNormals(); return g;
}
function shareGeo(base, sphere) {
  var g = new T3.BufferGeometry();
  for (var k in base.attributes) g.setAttribute(k, base.attributes[k]);
  if (base.index) g.setIndex(base.index);
  g.boundingSphere = sphere; return g;
}
var _m4 = null, _q = null, _v = null, _s = null, _e = null;
function setInst(mesh, i, x, y, z, yaw, sx, sy, sz, col) {
  _e.set(0, yaw, 0); _q.setFromEuler(_e); _v.set(x, y, z); _s.set(sx, sy, sz); _m4.compose(_v, _q, _s);
  mesh.setMatrixAt(i, _m4); if (col !== undefined) mesh.setColorAt(i, C3(col));
}
function instancedPerTile(items, geoBase, mat, fill, opts) {
  var byTile = {};
  items.forEach(function (it) { var t = tileIdx(it.x, it.z); (byTile[t] = byTile[t] || []).push(it); });
  var out = [];
  for (var t in byTile) {
    var arr = byTile[t], tl = TILES[t];
    var mesh = new T3.InstancedMesh(shareGeo(geoBase, new T3.Sphere(new T3.Vector3(tl.x, 20, tl.z), TILE * 0.75 + 60)), mat, arr.length);
    for (var i = 0; i < arr.length; i++) fill(mesh, i, arr[i]);
    mesh.instanceMatrix.needsUpdate = true; if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.castShadow = !!(opts && opts.cast); mesh.receiveShadow = true; mesh.matrixAutoUpdate = false;
    mesh.userData.items = arr;
    tl.g.add(mesh); out.push(mesh);
  }
  return out;
}

// ---------------- buildings ----------------
function buildBuildings() {
  var body = unitBox(), prism = unitPrism();
  MATS.body = patchSnowTop(new T3.MeshLambertMaterial({}), '0.92,0.94,0.97', true);
  MATS.bodyPlain = patchSnowTop(new T3.MeshLambertMaterial({}), '0.92,0.94,0.97', false);
  var plainKinds = { comm: 1, mall: 1, ind: 1, hangar: 1, barn: 1, shed: 1, garage: 1, fbo: 1 };
  MATS.roof = patchSnowTop(new T3.MeshLambertMaterial({}), '0.93,0.95,0.98');
  var inst = BLD.filter(function (b) { return !b.noInst; });
  inst.forEach(function (b) { b.y = groundH(b.x, b.z) - 0.25; });
  function bodyFill(m, i, b) { setInst(m, i, b.x, b.y, b.z, b.rot, b.w, b.h + 0.25, b.d, b.col); }
  instancedPerTile(inst.filter(function (b) { return !plainKinds[b.kind]; }), body, MATS.body, bodyFill, { cast: true });
  instancedPerTile(inst.filter(function (b) { return plainKinds[b.kind]; }), body, MATS.bodyPlain, bodyFill, { cast: true });
  // storefront glazing on commercial boxes
  inst.forEach(function (b) { if (b.kind === 'comm' || b.kind === 'mall') { var mbg = batch('prop', b.x, b.z), c = Math.cos(b.rot), s2 = Math.sin(b.rot); mbg.box(b.x + s2 * (b.d / 2 + 0.03), b.y + 0.3, b.z + c * (b.d / 2 + 0.03), b.w * 0.8, 2.6, 0.06, b.rot, C3(0x2a3b4c)); mbg.box(b.x - s2 * (b.d / 2 + 0.03), b.y + 0.3, b.z - c * (b.d / 2 + 0.03), b.w * 0.8, 2.6, 0.06, b.rot, C3(0x2a3b4c)); } });
  instancedPerTile(inst.filter(function (b) { return b.roof === 'gable'; }), prism, MATS.roof, function (m, i, b) { setInst(m, i, b.x, b.y + b.h + 0.25, b.z, b.rot, b.w + 0.8, b.rh, b.d + 1.1, b.rcol); }, { cast: true });
  // commercial signage bands + barrel roofs on hangars
  BLD.forEach(function (b) {
    if (b.roof === 'barrelsmall') { var mb = batch('prop', b.x, b.z); barrelRoof(mb, b.x, b.y + b.h + 0.25, b.z, b.w, b.d, b.rh, 1, b.rot, C3(b.rcol)); }
    if (b.sign && b.kind === 'comm') { var mb2 = batch('prop', b.x, b.z); mb2.box(b.x, b.y + b.h - 1.6, b.z, b.w + 0.3, 1.2, b.d + 0.3, b.rot, C3(pick([0x9b2d20, 0x2b4d7a, 0x315e3a, 0x6b3c7a, 0x8a6a18]))); }
  });
}
function barrelRoof(mb, x, y, z, w, d, rise, nv, rot, col) {
  // nv parallel barrel vaults spanning local x, running along local z
  var c = Math.cos(rot), s = Math.sin(rot), vw = w / nv, seg = 12;
  function P(lx, ly, lz) { return [x + lx * c + lz * s, y + ly, z - lx * s + lz * c]; }
  for (var v = 0; v < nv; v++) {
    var x0 = -w / 2 + v * vw;
    for (var k = 0; k < seg; k++) {
      var t0 = k / seg * Math.PI, t1 = (k + 1) / seg * Math.PI;
      var ax = x0 + vw / 2 - Math.cos(t0) * vw / 2, ay = Math.sin(t0) * rise, bx = x0 + vw / 2 - Math.cos(t1) * vw / 2, by = Math.sin(t1) * rise;
      mb.quad(P(ax, ay, -d / 2), P(bx, by, -d / 2), P(bx, by, d / 2), P(ax, ay, d / 2), col);
      mb.tri(P(x0 + vw / 2, 0, -d / 2), P(bx, by, -d / 2), P(ax, ay, -d / 2), col);
      mb.tri(P(x0 + vw / 2, 0, d / 2), P(ax, ay, d / 2), P(bx, by, d / 2), col);
    }
  }
}
// ---------------- trees ----------------
var TREE_STATE = { season: null };
function buildTrees() {
  var trunk = new T3.CylinderGeometry(0.5, 0.6, 1, 5, 1, true); trunk.translate(0, 0.5, 0);
  var cone = new T3.ConeGeometry(1, 1, 6, 1, true); cone.translate(0, 0.5, 0);
  var ball = new T3.IcosahedronGeometry(1, 0);
  var coneFar = new T3.ConeGeometry(1, 1, 4, 1, true); coneFar.translate(0, 0.5, 0);
  var ballFar = new T3.OctahedronGeometry(1, 0);
  MATS.trunk = new T3.MeshLambertMaterial({ color: 0x5a4636 });
  MATS.crown = patchSnowTop(new T3.MeshLambertMaterial({}), '0.9,0.93,0.97');
  TREES.forEach(function (t) { t.y = groundH(t.x, t.z) - 0.2; });
  var con = TREES.filter(function (t) { return t.t === 0; }), dec = TREES.filter(function (t) { return t.t === 1; });
  function conFill(m, i, t) { var s = t.s; setInst(m, i, t.x, t.y + 1.4 * s, t.z, t.v * 6, 2.7 * s, 10.5 * s, 2.7 * s, [0x2d4a2a, 0x355534, 0x264024, 0x3b5a36][Math.floor(t.v * 4)]); }
  function decFill(m, i, t) { var s = t.s; setInst(m, i, t.x, t.y + 6.2 * s, t.z, t.v * 6, 4.2 * s, 3.9 * s, 4.2 * s, 0x4a7a32); }
  var near = [].concat(
    instancedPerTile(TREES, trunk, MATS.trunk, function (m, i, t) { var s = t.s; setInst(m, i, t.x, t.y, t.z, t.v * 6, t.t ? 0.5 * s : 0.42 * s, t.t ? 4.2 * s : 2.2 * s, t.t ? 0.5 * s : 0.42 * s); }),
    OBJ.coniferMeshes = instancedPerTile(con, cone, MATS.crown, conFill, { cast: true }),
    OBJ.decidNear = instancedPerTile(dec, ball, MATS.crown, decFill, { cast: true }));
  var far = [].concat(instancedPerTile(con, coneFar, MATS.crown, conFill), OBJ.decidFar = instancedPerTile(dec, ballFar, MATS.crown, decFill));
  OBJ.decidMeshes = OBJ.decidNear.concat(OBJ.decidFar);
  OBJ.treeNear = near; OBJ.treeFar = far;
  near.forEach(function (m) { m.userData.lod = 'near'; }); far.forEach(function (m) { m.userData.lod = 'far'; m.visible = false; });
}
function updateTreeLOD(cx, cz, nearD) {
  for (var i = 0; i < OBJ.treeNear.length; i++) { var m = OBJ.treeNear[i], c = m.geometry.boundingSphere.center; m.visible = Math.hypot(c.x - cx, c.z - cz) < nearD; }
  for (i = 0; i < OBJ.treeFar.length; i++) { var f = OBJ.treeFar[i], c2 = f.geometry.boundingSphere.center; f.visible = Math.hypot(c2.x - cx, c2.z - cz) >= nearD; }
}
function updateTreeSeason(season, fallP) {
  var key = season + ':' + Math.round(fallP * 10);
  if (TREE_STATE.key === key) return; TREE_STATE.key = key;
  var summer = [0x4a7a32, 0x557f36, 0x3f6b2c, 0x5d8a3a], fall = [0xc0621c, 0xa8321e, 0xd4a520, 0x8a5a2a, 0xb8471c, 0xcf8a1e], spring = [0x8fbf4a, 0x7fb04a, 0x9cc85a];
  OBJ.decidMeshes.forEach(function (m) {
    var items = m.userData.items;
    for (var i = 0; i < items.length; i++) {
      var t = items[i], s = t.s, col, sc = 1, h = hash2(Math.floor(t.x), Math.floor(t.z));
      if (season === 'winter' || (season === 'fall' && fallP > 0.92) || (season === 'spring' && fallP < 0.15)) { col = 0x6e6358; sc = 0.72; }
      else if (season === 'fall') { col = h < fallP * 1.1 ? fall[Math.floor(h * 60) % fall.length] : summer[Math.floor(h * 40) % 4]; sc = 1 - Math.max(0, fallP - 0.7) * 0.6; }
      else if (season === 'spring') col = spring[Math.floor(h * 30) % 3];
      else col = summer[Math.floor(h * 40) % 4];
      setInst(m, i, t.x, t.y + 6.2 * s, t.z, t.v * 6, 4.2 * s * sc, 3.9 * s * sc, 4.2 * s * sc, col);
    }
    m.instanceMatrix.needsUpdate = true; m.instanceColor.needsUpdate = true;
  });
}

// ---------------- sign atlas ----------------
var ATLAS = { tex: null, cells: {}, n: 8 };
function buildAtlas() {
  var cv = document.createElement('canvas'), S = 128, N = 8; cv.width = cv.height = S * N;
  var g = cv.getContext('2d'), idx = 0;
  function cell(key, draw) { var cx = (idx % N) * S, cy = Math.floor(idx / N) * S; g.save(); g.translate(cx, cy); draw(g, S); g.restore(); ATLAS.cells[key] = [idx % N, Math.floor(idx / N)]; idx++; }
  function txt(g, t, x, y, size, col, font) { g.fillStyle = col; g.font = (font || 'bold ') + size + 'px Arial, Helvetica, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(t, x, y); }
  [25, 30, 35, 40, 45, 50, 55, 65].forEach(function (v) {
    cell('speed' + v, function (g, S) { g.fillStyle = '#fff'; g.fillRect(8, 0, S - 16, S); g.strokeStyle = '#111'; g.lineWidth = 5; g.strokeRect(13, 5, S - 26, S - 10); txt(g, 'SPEED', S / 2, 26, 17, '#111'); txt(g, 'LIMIT', S / 2, 46, 17, '#111'); txt(g, '' + v, S / 2, 88, 48, '#111'); });
  });
  cell('wz45', function (g, S) { g.fillStyle = '#fff'; g.fillRect(8, 0, S - 16, S); g.strokeStyle = '#111'; g.lineWidth = 5; g.strokeRect(13, 5, S - 26, S - 10); txt(g, 'WORK ZONE', S / 2, 24, 14, '#c2410c'); txt(g, 'LIMIT', S / 2, 44, 17, '#111'); txt(g, '45', S / 2, 88, 48, '#111'); });
  cell('roadwork', function (g, S) { g.translate(S / 2, S / 2); g.rotate(Math.PI / 4); g.fillStyle = '#f97316'; g.fillRect(-44, -44, 88, 88); g.strokeStyle = '#111'; g.lineWidth = 4; g.strokeRect(-40, -40, 80, 80); g.rotate(-Math.PI / 4); txt(g, 'ROAD', 0, -18, 17, '#111'); txt(g, 'WORK', 0, 2, 17, '#111'); txt(g, 'AHEAD', 0, 22, 15, '#111'); });
  cell('fines', function (g, S) { g.fillStyle = '#fff'; g.fillRect(4, 20, S - 8, 88); g.strokeStyle = '#111'; g.lineWidth = 4; g.strokeRect(8, 24, S - 16, 80); txt(g, 'FINES', S / 2, 50, 22, '#111'); txt(g, 'DOUBLE', S / 2, 80, 22, '#111'); });
  cell('welcome', function (g, S) { g.fillStyle = '#1f5a3a'; g.fillRect(0, 16, S, 96); g.strokeStyle = '#fff'; g.lineWidth = 3; g.strokeRect(5, 21, S - 10, 86); txt(g, 'Welcome to', S / 2, 42, 15, '#fff', 'italic '); txt(g, 'BLAINE', S / 2, 70, 30, '#fff'); txt(g, 'Est. 1877', S / 2, 96, 12, '#dfe', ''); });
  var names = { nsc: 'NATIONAL SPORTS CENTER', rink: 'SCHWAN SUPER RINK', curling: 'FOUR SEASONS CURLING', cityhall: 'BLAINE CITY HALL', mall: 'NORTHTOWN', tpc: 'TPC TWIN CITIES', open3m: '3M OPEN', school: 'BLAINE HIGH SCHOOL', airport: 'ANOKA CO-BLAINE AIRPORT', usacup: 'USA CUP', velo: 'VELODROME', stadium: 'NSC STADIUM' };
  for (var k in names) (function (k, t) {
    cell('n_' + k, function (g, S) {
      g.fillStyle = k === 'open3m' ? '#b91c1c' : (k === 'usacup' ? '#1d4ed8' : '#12355b'); g.fillRect(0, 30, S, 68); g.strokeStyle = '#fff'; g.lineWidth = 2; g.strokeRect(3, 33, S - 6, 62);
      var words = t.split(' '), mid = Math.ceil(words.length / 2), l1 = words.slice(0, mid).join(' '), l2 = words.slice(mid).join(' ');
      if (!l2) txt(g, l1, S / 2, 64, 24, '#fff'); else { txt(g, l1, S / 2, 52, l1.length > 11 ? 13 : 17, '#fff'); txt(g, l2, S / 2, 78, l2.length > 11 ? 13 : 17, '#fff'); }
    });
  })(k, names[k]);
  cell('lb3m', function (g, S) { g.fillStyle = '#0b2545'; g.fillRect(0, 0, S, S); txt(g, '3M OPEN', S / 2, 18, 16, '#ef4444'); g.font = '11px monospace'; g.fillStyle = '#fef08a'; ['1  MINN -14', '2  PARK -12', '3  LOON -11', '4  GOPH -10', '5  ANOK  -9', '6  BLNE  -9'].forEach(function (l, i) { g.fillText(l, 64, 40 + i * 14); }); });
  cell('runway9', function (g, S) { txt(g, '9', S / 2, S / 2, 90, '#eee'); });
  cell('runway27', function (g, S) { txt(g, '27', S / 2, S / 2, 80, '#eee'); });
  cell('runway18', function (g, S) { txt(g, '18', S / 2, S / 2, 80, '#eee'); });
  cell('runway36', function (g, S) { txt(g, '36', S / 2, S / 2, 80, '#eee'); });
  cell('stone', function (g, S) { g.fillStyle = '#7a7d80'; g.fillRect(0, 0, S, S); });
  ATLAS.tex = new T3.CanvasTexture(cv); ATLAS.tex.anisotropy = 4;
  MATS.sign = new T3.MeshLambertMaterial({ map: ATLAS.tex, transparent: true, alphaTest: 0.3, side: T3.DoubleSide });
  MATS.decal = new T3.MeshLambertMaterial({ map: ATLAS.tex, transparent: true, alphaTest: 0.3, polygonOffset: true, polygonOffsetFactor: -3 });
}
function SGB() { this.p = []; this.n = []; this.uv = []; }
var SIGNB = {};
function signQuad(key, x, y, z, fx, fz, w, h, flat, matKey) {
  var cellc = ATLAS.cells[key]; if (!cellc) return;
  var mk = (matKey || 'sign') + ':' + tileIdx(x, z), b = SIGNB[mk] || (SIGNB[mk] = new SGB());
  var u0 = cellc[0] / ATLAS.n, v1 = 1 - cellc[1] / ATLAS.n, u1 = u0 + 1 / ATLAS.n, v0 = v1 - 1 / ATLAS.n;
  var rx = -fz, rz = fx, P;   // right vector of a face looking along (fx,fz)
  if (flat) P = [[x - rx * w / 2 - fx * h / 2, y, z - rz * w / 2 - fz * h / 2], [x + rx * w / 2 - fx * h / 2, y, z + rz * w / 2 - fz * h / 2], [x + rx * w / 2 + fx * h / 2, y, z + rz * w / 2 + fz * h / 2], [x - rx * w / 2 + fx * h / 2, y, z - rz * w / 2 + fz * h / 2]];
  else P = [[x + rx * w / 2, y, z + rz * w / 2], [x - rx * w / 2, y, z - rz * w / 2], [x - rx * w / 2, y + h, z - rz * w / 2], [x + rx * w / 2, y + h, z + rz * w / 2]];
  var U = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]], nx = flat ? 0 : fx, ny = flat ? 1 : 0, nz = flat ? 0 : fz;
  [0, 1, 2, 0, 2, 3].forEach(function (i) { b.p.push(P[i][0], P[i][1], P[i][2]); b.n.push(nx, ny, nz); b.uv.push(U[i][0], U[i][1]); });
}
function flushSigns() {
  for (var k in SIGNB) {
    var b = SIGNB[k], g = new T3.BufferGeometry();
    g.setAttribute('position', new T3.Float32BufferAttribute(b.p, 3)); g.setAttribute('normal', new T3.Float32BufferAttribute(b.n, 3)); g.setAttribute('uv', new T3.Float32BufferAttribute(b.uv, 2));
    g.computeBoundingSphere();
    var m = new T3.Mesh(g, MATS[k.split(':')[0]]); m.matrixAutoUpdate = false; TILES[+k.split(':')[1]].g.add(m);
  }
  SIGNB = {};
}

// ---------------- landmarks & props ----------------
function person(mb, x, y, z, rot, shirt) {
  mb.box(x, y, z, 0.45, 0.85, 0.3, rot, C3(0x2d3440));
  mb.box(x, y + 0.85, z, 0.5, 0.65, 0.32, rot, C3(shirt));
  mb.box(x, y + 1.5, z, 0.24, 0.26, 0.24, rot, C3(0xd8b090));
}
function grandstand(mb, x, z, w, rows, rot, col) {
  var c = Math.cos(rot), s = Math.sin(rot);
  for (var r = 0; r < rows; r++) { var off = r * 0.9; mb.box(x + (-off) * s, r * 0.45, z + (-off) * c, w, 0.45, 0.9, rot, C3(r % 2 ? col : 0x8a8f95)); }
}
function buildLandmarks() {
  var mbs = function (x, z) { return batch('prop', x, z); };
  // ---- Schwan Super Rink: 4 barrel vaults over 8 sheets ----
  var R = NSCL.rink, mb = mbs(R.x, R.z);
  mb.box(R.x, 0, R.z, R.w, 9, R.d, 0, C3(0xcfd3d6)); mb.box(R.x, 6.2, R.z, R.w + 0.4, 1.4, R.d + 0.4, 0, C3(0x1f4e8c));
  barrelRoof(mb, R.x, 9, R.z, R.w, R.d, 7.5, 4, 0, C3(0xe6eaee));
  mb.box(R.x + 20, 0, R.z + R.d / 2 + 5, 60, 7, 10, 0, C3(0x9fb8c9));
  signQuad('n_rink', R.x - 20, 9.5, R.z + R.d / 2 + 0.6, 0, 1, 22, 22);
  // ---- NSC Stadium ----
  var S = NSCL.stadium; mb = mbs(S.x, S.z);
  grandstand(mb, S.x - 62, S.z, 110, 14, Math.PI / 2, 0x1f4e8c);
  mb.box(S.x - 69, 11.5, S.z, 16, 0.6, 112, 0, C3(0xd0d4d8));
  for (var k = -2; k <= 2; k++) mb.box(S.x - 75, 0, S.z + k * 26, 0.6, 12, 0.6, 0, C3(0x8a8f95));
  grandstand(mb, S.x + 60, S.z, 90, 7, -Math.PI / 2, 0x1f4e8c);
  fieldLines(mb, S.x, S.z, 100, 64, 0);
  signQuad('n_stadium', S.x - 55, 13, S.z, 1, 0, 26, 26);
  // ---- Velodrome: 250 m banked oval ----
  var V = NSCL.velo; mb = mbs(V.x, V.z);
  var wood = C3(0x9c6b3e), woodD = C3(0x7d5431), segN = 64, trackW = 7;
  for (k = 0; k < segN; k++) {
    var t0 = k / segN * Math.PI * 2, t1 = (k + 1) / segN * Math.PI * 2;
    var b0 = 0.1 + 0.62 * Math.pow(Math.abs(Math.cos(t0)), 3), b1 = 0.1 + 0.62 * Math.pow(Math.abs(Math.cos(t1)), 3);   // banking steepest in the turns
    var i0 = [V.x + Math.cos(t0) * V.a, 0.6, V.z + Math.sin(t0) * V.b], i1 = [V.x + Math.cos(t1) * V.a, 0.6, V.z + Math.sin(t1) * V.b];
    var o0 = [V.x + Math.cos(t0) * (V.a + trackW), 0.6 + trackW * Math.tan(b0), V.z + Math.sin(t0) * (V.b + trackW)], o1 = [V.x + Math.cos(t1) * (V.a + trackW), 0.6 + trackW * Math.tan(b1), V.z + Math.sin(t1) * (V.b + trackW)];
    mb.quad(i0, i1, o1, o0, k % 2 ? wood : woodD);
    mb.quad([o0[0], 0, o0[2]], [o1[0], 0, o1[2]], o1, o0, C3(0x5d6166));
    if (k % 4 === 0) mb.box(o0[0], 0, o0[2], 0.4, o0[1], 0.4, 0, C3(0x5d6166));
  }
  signQuad('n_velo', V.x, 0.05, V.z, 0, -1, 26, 26, true, 'decal');
  // ---- NSC fields (50+) with goals ----
  FIELDS.forEach(function (f) { var m2 = mbs(f.x, f.z); fieldLines(m2, f.x, f.z, f.w, f.d, f.track ? 1 : 0); });
  signQuad('n_nsc', 1455, 0, -2020, 0, 1, 16, 16); mbs(1455, -2020).box(1455, 0, -2020.5, 16, 1.2, 0.6, 0, C3(0x5d6166));
  PROPS.forEach(function (p) { if (p.type === 'lighttower') { var m3 = mbs(p.x, p.z); m3.box(p.x, 0, p.z, 0.8, 24, 0.8, 0, C3(0x8a8f95)); m3.box(p.x, 24, p.z, 5, 2.2, 0.6, 0, C3(0xd8dde2)); LAMP_EXTRA.push([p.x, 25, p.z, 1]); } });
  // ---- Blaine City Hall: brick wings + glass atrium ----
  var chb = BLD.filter(function (b) { return b.kind === 'cityhall'; })[0]; mb = mbs(chb.x, chb.z);
  mb.box(chb.x, 0, chb.z - 17, chb.w, 9, 22, 0, C3(0x96573f)); mb.box(chb.x, 0, chb.z + 17, chb.w, 9, 22, 0, C3(0x96573f));
  for (k = 0; k < 6; k++) { mb.box(chb.x - chb.w / 2 - 0.05, 2.2 + (k % 2) * 3.5, chb.z - 24 + Math.floor(k / 2) * 5, 0.1, 1.6, 2.6, 0, C3(0x273746)); mb.box(chb.x - chb.w / 2 - 0.05, 2.2 + (k % 2) * 3.5, chb.z + 12 + Math.floor(k / 2) * 5, 0.1, 1.6, 2.6, 0, C3(0x273746)); }
  var atr = new T3.Mesh(new T3.CylinderGeometry(9, 9, 12, 16, 1, false, 0, Math.PI * 2), MATS.glass); atr.position.set(chb.x, 6, chb.z); TILES[tileIdx(chb.x, chb.z)].g.add(atr); atr.updateMatrix();
  mb.cyl(chb.x, 12, chb.z, 9.6, 1.2, 16, C3(0x5d6166), 0, C3(0x5d6166));
  signQuad('n_cityhall', chb.x - chb.w / 2 - 3, 0.3, chb.z + 32, -1, 0, 7, 7);
  flagpole(mb, chb.x - 22, chb.z + 34);
  // ---- Four Seasons Curling Club ----
  var cu = BLD.filter(function (b) { return b.kind === 'curling'; })[0]; mb = mbs(cu.x, cu.z);
  mb.box(cu.x, 0, cu.z, cu.w, 7, cu.d, 0, C3(0xc9c2b4));
  barrelRoof(mb, cu.x, 7, cu.z, cu.d, cu.w, 4, 1, Math.PI / 2, C3(0x5f7d95));
  mb.box(cu.x, 0, cu.z - cu.d / 2 - 6, 30, 5, 12, 0, C3(0x8a6e55));
  signQuad('n_curling', cu.x, 5.3, cu.z - cu.d / 2 - 12.1, 0, -1, 16, 16);
  // giant curling stone sculpture by the entrance
  var sx = cu.x + 22, sz = cu.z - cu.d / 2 - 14;
  mb.cyl(sx, 0, sz, 2.3, 0.6, 18, C3(0x6d7074)); mb.cyl(sx, 0.6, sz, 2.6, 1.3, 18, C3(0x8b8f93)); mb.cyl(sx, 1.9, sz, 2.3, 0.35, 18, C3(0x6d7074), 1.4, C3(0x6d7074));
  mb.box(sx - 0.2, 2.2, sz, 0.5, 0.6, 0.5, 0, C3(0xc81e1e)); mb.box(sx + 0.6, 2.7, sz, 1.8, 0.35, 0.45, 0, C3(0xc81e1e));
  // ---- TPC Twin Cities clubhouse + course dressing ----
  var cl = BLD.filter(function (b) { return b.kind === 'club'; })[0]; mb = mbs(cl.x, cl.z);
  mb.box(cl.x, groundH(cl.x, cl.z), cl.z, cl.w, cl.h, cl.d, cl.rot, C3(0x8c8278));
  var roofM = batch('prop', cl.x, cl.z);
  hipRoof(roofM, cl.x, groundH(cl.x, cl.z) + cl.h, cl.z, cl.w + 2, cl.d + 2, cl.rh, cl.rot, C3(0x3d3a36));
  signQuad('n_tpc', X(3.43), 0.3, Z(114.2), -1, 0, 10, 10);
  HOLES.forEach(function (h, i) {
    var g = h.green, gy = groundH(g[0], g[1]), m4 = mbs(g[0], g[1]);
    m4.box(g[0], gy, g[1], 0.06, 2.3, 0.06, 0, C3(0xeeeeee)); m4.box(g[0] + 0.35, gy + 1.8, g[1], 0.7, 0.45, 0.03, 0, C3(i === 17 ? 0xd12b2b : 0xf2d024));
    var tt = h.tee; m4.box(tt[0] - 1.5, groundH(tt[0], tt[1]), tt[1], 0.3, 0.3, 0.3, 0, C3(0x2b58c9)); m4.box(tt[0] + 1.5, groundH(tt[0], tt[1]), tt[1], 0.3, 0.3, 0.3, 0, C3(0x2b58c9));
  });
  // ---- Northtown Mall / school / airport ----
  var ma = BLD.filter(function (b) { return b.kind === 'mall'; })[0];
  signQuad('n_mall', ma.x, ma.h - 1, ma.z - ma.d / 2 - 0.4, 0, -1, 24, 24); signQuad('n_mall', ma.x, ma.h - 1, ma.z + ma.d / 2 + 0.4, 0, 1, 24, 24);
  var sc = BLD.filter(function (b) { return b.kind === 'school'; })[0]; signQuad('n_school', sc.x, sc.h - 1, sc.z + sc.d / 2 + 0.4, 0, 1, 20, 20);
  signQuad('n_airport', 1735, 0.4, -420, -1, 0, 12, 12); mbs(1735, -420).box(1735.6, 0, -420, 0.5, 1.5, 12, 0, C3(0x5d6166));
  // runway markings (numbers + threshold bars)
  [['runway9', 1800, -1100, 1, 0], ['runway27', 2480, -1100, -1, 0], ['runway18', 2300, -1440, 0, 1], ['runway36', 2300, -770, 0, -1]].forEach(function (r) {
    signQuad(r[0], r[1], 0.07, r[2], r[3], r[4], 18, 18, true, 'decal');
    var m5 = mbs(r[1], r[2]);
    for (var q = -3; q <= 3; q++) { var ox = r[4] ? q * 3.4 : 0, oz = r[3] ? q * 3.4 : 0; m5.box(r[1] - r[3] * 16 + ox, 0.05, r[2] - r[4] * 16 + oz, r[3] ? 12 : 1.4, 0.03, r[3] ? 1.4 : 12, 0, C3(0xeeeeee)); }
  });
  for (var rx2 = 1780; rx2 < 2500; rx2 += 30) { mbs(rx2, -1100).box(rx2, 0.05, -1100, 9, 0.03, 0.5, 0, C3(0xeeeeee)); LAMP_EXTRA.push([rx2, 0.4, -1116, 2]); LAMP_EXTRA.push([rx2, 0.4, -1084, 2]); }
  PLANES.forEach(function (p) { var m6 = mbs(p.x, p.z); plane(m6, p.x, p.z, p.rot, C3(p.col)); });
  PROPS.forEach(function (p) {
    var m7 = mbs(p.x, p.z), gy2 = groundH(p.x, p.z);
    if (p.type === 'tower') { m7.cyl(p.x, 0, p.z, 3, 16, 10, C3(0xd8d2c4)); m7.cyl(p.x, 16, p.z, 4.2, 3.2, 10, C3(0x2e3d48)); m7.cyl(p.x, 19.2, p.z, 4.6, 0.6, 10, C3(0x8a8f95), 0); LAMP_EXTRA.push([p.x, 20.5, p.z, 3]); }
    else if (p.type === 'windsock') { m7.box(p.x, 0, p.z, 0.15, 6, 0.15, 0, C3(0xcccccc)); m7.cyl(p.x + 1.3, 5.6, p.z, 0.4, 2.6, 8, C3(0xf97316), 0.2); }
    else if (p.type === 'silo') { m7.cyl(p.x, gy2, p.z, p.r, p.h, 12, C3(0xb9bcbd)); m7.cyl(p.x, gy2 + p.h, p.z, p.r, 2.2, 12, C3(0x9ea3a6), 0.2); }
    else if (p.type === 'shelter') { for (var q = 0; q < 4; q++) m7.box(p.x + (q % 2 ? 6 : -6), gy2, p.z + (q < 2 ? 4 : -4), 0.35, 3, 0.35, 0, C3(0x6b4f3a)); hipRoof(m7, p.x, gy2 + 3, p.z, 15, 11, 2.2, 0, C3(0x7a3b2a)); }
    else if (p.type === 'pier' && !p.work) { m7.box(p.x, -0.2, p.z - 12, 2.4, 0.4, 26, 0, C3(0x8a6e55)); }
  });
  FENCES.forEach(function (f) {
    for (var q = 0; q < f.length - 1; q++) {
      var a = f[q], b = f[q + 1], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
      for (var s = 0; s < L; s += 12) { var px = a[0] + (b[0] - a[0]) * s / L, pz = a[1] + (b[1] - a[1]) * s / L; mbs(px, pz).box(px, 0, pz, 0.12, 2.2, 0.12, 0, C3(0x8a8f95)); }
      var m8 = mbs(a[0], a[1]), fc = C3(0xa5abb0);
      m8.quad([a[0], 0.1, a[1]], [b[0], 0.1, b[1]], [b[0], 2.1, b[1]], [a[0], 2.1, a[1]], fc);
      COLLIDE_SEGS.push([a[0], a[1], b[0], b[1], 0]);
    }
  });
  // welcome / regulatory signs
  SIGNS.forEach(function (s) {
    var key = s.type === 'speed' ? 'speed' + s.v : s.type, big = s.type === 'welcome' ? 5 : (s.type === 'roadwork' ? 1.9 : 1.3);
    if (!ATLAS.cells[key]) return;
    var y0 = groundH(s.x, s.z) + (s.type === 'welcome' ? 0.4 : 1.6);
    signQuad(key, s.x, y0, s.z, s.fx, s.fz, big, big);
    var m9 = mbs(s.x, s.z); m9.box(s.x - s.fx * 0.08, groundH(s.x, s.z), s.z - s.fz * 0.08, 0.1, y0 - groundH(s.x, s.z) + big * 0.5, 0.1, 0, C3(0x8a8f95));
    POLES.push([s.x, s.z]);
  });
}
var LAMP_EXTRA = [], POLES = [];
function fieldLines(mb, x, z, w, d, track) {
  var wc = C3(0xf2f2ee), y = 0.04;
  if (track) { mb.box(x, 0.02, z, w + 22, 0.02, d + 22, 0, C3(0x9c3b2e)); mb.box(x, 0.025, z, w + 2, 0.02, d + 2, 0, C3(0x3c9a3d)); }
  mb.box(x, y, z - d / 2, w, 0.02, 0.15, 0, wc); mb.box(x, y, z + d / 2, w, 0.02, 0.15, 0, wc);
  mb.box(x - w / 2, y, z, 0.15, 0.02, d, 0, wc); mb.box(x + w / 2, y, z, 0.15, 0.02, d, 0, wc); mb.box(x, y, z, 0.15, 0.02, d, 0, wc);
  [-1, 1].forEach(function (sd) {
    var gx = x + sd * w / 2;
    mb.box(gx, y, z - d * 0.2, w * 0.14, 0.02, 0.15, 0, wc); mb.box(gx, y, z + d * 0.2, w * 0.14, 0.02, 0.15, 0, wc);
    mb.box(gx, 0, z - 3.6, 0.12, 2.4, 0.12, 0, wc); mb.box(gx, 0, z + 3.6, 0.12, 2.4, 0.12, 0, wc); mb.box(gx, 2.4, z, 0.12, 0.12, 7.4, 0, wc);
  });
}
function hipRoof(mb, x, y, z, w, d, h, rot, col) {
  var c = Math.cos(rot), s = Math.sin(rot);
  function P(lx, ly, lz) { return [x + lx * c + lz * s, y + ly, z - lx * s + lz * c]; }
  var a = P(-w / 2, 0, -d / 2), b = P(w / 2, 0, -d / 2), cc = P(w / 2, 0, d / 2), dd = P(-w / 2, 0, d / 2), r0 = P(-w / 2 + d / 2, h, 0), r1 = P(w / 2 - d / 2, h, 0);
  mb.quad(a, r0, r1, b, col); mb.quad(cc, r1, r0, dd, col); mb.tri(b, r1, cc, col); mb.tri(dd, r0, a, col);
}
function flagpole(mb, x, z) { mb.box(x, 0, z, 0.15, 11, 0.15, 0, C3(0xcccccc)); mb.box(x + 1, 9.3, z, 2.0, 1.2, 0.04, 0, C3(0x1e3a8a)); mb.box(x + 0.5, 9.9, z, 1.0, 0.6, 0.045, 0, C3(0xb91c1c)); }
function plane(mb, x, z, rot, col) {
  var c = Math.cos(rot), s = Math.sin(rot);
  mb.box(x, 1.0, z, 8, 1.3, 1.3, rot, col); mb.box(x + 0.6 * c, 1.9, z - 0.6 * s, 1.4, 0.15, 11, rot, col);
  mb.box(x - 3.6 * c, 1.4, z + 3.6 * s, 1.0, 1.6, 0.15, rot, col); mb.box(x - 3.6 * c, 1.5, z + 3.6 * s, 1.0, 0.12, 3.6, rot, col);
  mb.box(x + 1.2 * c, 0, z - 1.2 * s, 0.1, 1.0, 0.1, rot, C3(0x333333));
}
// ---------------- street lights (instanced) + glows + pools ----------------
function buildStreetLights(root) {
  var mb = new MB(), grey = C3(0x8a8f95);
  mb.box(0, 0, 0, 0.26, 10.5, 0.26, 0, grey); mb.box(1.35, 10.2, 0, 2.8, 0.18, 0.18, 0, grey); mb.box(2.6, 9.95, 0, 0.9, 0.28, 0.45, 0, C3(0x555a5e));
  var g = mb.geometry(), mat = new T3.MeshLambertMaterial({ vertexColors: true });
  var mesh = new T3.InstancedMesh(g, mat, LIGHTS.length);
  LIGHTS.forEach(function (l, i) { setInst(mesh, i, l.x, l.y, l.z, yawOf(l.ax, l.az), 1, 1, 1); POLES.push([l.x, l.z]); });
  mesh.instanceMatrix.needsUpdate = true; mesh.frustumCulled = false; root.add(mesh);
  // light pools on the pavement
  var disc = new T3.CircleGeometry(1, 16); disc.rotateX(-Math.PI / 2);
  var pm = new T3.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, blending: T3.AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -6 });
  pm.onBeforeCompile = function (sh) {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec2 vPC;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvPC = position.xz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec2 vPC;').replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb *= pow(max(0.0, 1.0 - length(vPC)), 1.6);');
  };
  var pools = new T3.InstancedMesh(disc, pm, LIGHTS.length);
  LIGHTS.forEach(function (l, i) { setInst(pools, i, l.x + l.ax * 2.6, l.y + 0.1, l.z + l.az * 2.6, 0, 11, 1, 11, l.led ? 0x9fb4d0 : 0xd58a36); });
  pools.instanceMatrix.needsUpdate = true; pools.instanceColor.needsUpdate = true; pools.frustumCulled = false; pools.renderOrder = 3; root.add(pools);
  OBJ.pools = pools; OBJ.poolMat = pm;
  // lamp glows (points)
  var n = LIGHTS.length + LAMP_EXTRA.length, pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
  LIGHTS.forEach(function (l, i) { pos[i * 3] = l.x + l.ax * 2.6; pos[i * 3 + 1] = l.y + 9.8; pos[i * 3 + 2] = l.z + l.az * 2.6; var c = l.led ? [0.85, 0.9, 1] : [1, 0.62, 0.25]; col.set(c, i * 3); });
  LAMP_EXTRA.forEach(function (l, j) { var i = LIGHTS.length + j; pos.set([l[0], l[1], l[2]], i * 3); col.set(l[3] === 2 ? [1, 0.95, 0.7] : (l[3] === 3 ? [1, 0.2, 0.15] : [1, 1, 0.95]), i * 3); });
  OBJ.lampPts = makeGlowPoints(pos, col, 7.0);
  OBJ.lampPts.frustumCulled = false; root.add(OBJ.lampPts);
}
function glowTexture() {
  var cv = document.createElement('canvas'); cv.width = cv.height = 64; var g = cv.getContext('2d');
  var gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.18, 'rgba(255,255,255,0.8)'); gr.addColorStop(0.45, 'rgba(255,255,255,0.18)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return new T3.CanvasTexture(cv);
}
var GLOW = { tex: null, uni: { uScatter: { value: 0 }, uNightG: { value: 0 }, uPx: { value: 1 } } };
function makeGlowPoints(pos, col, size) {
  if (!GLOW.tex) GLOW.tex = glowTexture();
  var g = new T3.BufferGeometry(); g.setAttribute('position', new T3.BufferAttribute(pos, 3)); g.setAttribute('color', new T3.BufferAttribute(col, 3));
  var m = new T3.ShaderMaterial({
    uniforms: { map: { value: GLOW.tex }, uSize: { value: size }, uScatter: GLOW.uni.uScatter, uNightG: GLOW.uni.uNightG, uPx: GLOW.uni.uPx, fogColor: { value: new T3.Color() }, fogNear: { value: 1 }, fogFar: { value: 2000 } },
    vertexShader: 'uniform float uSize; uniform float uScatter; uniform float uPx; varying vec3 vC; varying float vFogD; attribute vec3 color;\nvoid main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); vFogD = -mv.z; gl_Position = projectionMatrix * mv; gl_PointSize = clamp(uSize * (1.0 + 2.2 * uScatter) * uPx * 300.0 / max(1.0, -mv.z), 1.5, 180.0); }',
    fragmentShader: 'uniform sampler2D map; uniform float uNightG; uniform float uScatter; uniform vec3 fogColor; uniform float fogNear; uniform float fogFar; varying vec3 vC; varying float vFogD;\nvoid main(){ vec4 t = texture2D(map, gl_PointCoord); float f = smoothstep(fogNear, fogFar * (1.0 + uScatter), vFogD); gl_FragColor = vec4(vC * t.rgb * uNightG * (1.0 - f * 0.85), t.a * uNightG); }',
    transparent: true, depthWrite: false, blending: T3.AdditiveBlending
  });
  m.userData.fog = true;
  var p = new T3.Points(g, m); p.renderOrder = 5; return p;
}
// ---------------- signal heads ----------------
function buildSignalHeads(root) {
  var lensG = new T3.CircleGeometry(0.2, 10);
  var mats = [0, 1, 2].map(function () { return new T3.MeshBasicMaterial({ color: 0xffffff }); });
  var n = SIGHEADS.length;
  OBJ.lenses = mats.map(function (m) { var im = new T3.InstancedMesh(lensG, m, n); im.frustumCulled = false; root.add(im); return im; });
  SIGHEADS.forEach(function (h, i) {
    var mb = batch('prop', h.px, h.pz), yaw = yawOf(h.fx, h.fz), grey = C3(0x7b8288);
    mb.box(h.px, h.y, h.pz, 0.3, 7.2, 0.3, 0, grey);
    var ax = h.hx - h.px, az = h.hz - h.pz, L = Math.hypot(ax, az) || 1;
    mb.box((h.px + h.hx) / 2, h.y + 6.9, (h.pz + h.hz) / 2, L, 0.22, 0.22, yawOf(ax, az), grey);
    mb.box(h.hx, h.y + 5.2, h.hz, 0.42, 1.5, 0.42, yaw, C3(0x2c2e22));
    mb.box(h.hx + h.fx * 0.22, h.y + 5.15, h.hz + h.fz * 0.22, 0.62, 1.62, 0.06, yaw, C3(0xd8c22a));
    for (var k = 0; k < 3; k++) {
      _e.set(0, yaw + Math.PI / 2, 0); _q.setFromEuler(_e);
      _v.set(h.hx + h.fx * 0.25, h.y + 5.95 - k * 0.48, h.hz + h.fz * 0.25); _s.set(1, 1, 1); _m4.compose(_v, _q, _s);
      OBJ.lenses[k].setMatrixAt(i, _m4); OBJ.lenses[k].setColorAt(i, C3(0x222222));
    }
    POLES.push([h.px, h.pz]);
  });
  OBJ.lenses.forEach(function (l) { l.instanceMatrix.needsUpdate = true; });
  var lp = new Float32Array(n * 3), lc = new Float32Array(n * 3);
  OBJ.sigGlow = makeGlowPoints(lp, lc, 1.4); OBJ.sigGlow.frustumCulled = false; root.add(OBJ.sigGlow);
}
var SIG_COLS = null;
function updateSignalHeads(t) {
  if (!SIG_COLS) SIG_COLS = { R: [C3(0xff2a1a), C3(0x3a0c08)], Y: [C3(0xffb21a), C3(0x3a2a08)], G: [C3(0x2aff7a), C3(0x083a1c)] };
  var pos = OBJ.sigGlow.geometry.attributes.position, col = OBJ.sigGlow.geometry.attributes.color;
  for (var i = 0; i < SIGHEADS.length; i++) {
    var h = SIGHEADS[i], st = signalState(h.node, h.e, t);
    OBJ.lenses[0].setColorAt(i, SIG_COLS.R[st === 'R' ? 0 : 1]); OBJ.lenses[1].setColorAt(i, SIG_COLS.Y[st === 'Y' ? 0 : 1]); OBJ.lenses[2].setColorAt(i, SIG_COLS.G[st === 'G' ? 0 : 1]);
    var k = st === 'R' ? 0 : (st === 'Y' ? 1 : 2), c = [SIG_COLS.R[0], SIG_COLS.Y[0], SIG_COLS.G[0]][k];
    pos.setXYZ(i, h.hx + h.fx * 0.4, h.y + 5.95 - k * 0.48, h.hz + h.fz * 0.4); col.setXYZ(i, c.r, c.g, c.b);
  }
  OBJ.lenses.forEach(function (l) { l.instanceColor.needsUpdate = true; });
  pos.needsUpdate = true; col.needsUpdate = true;
}
// ---------------- work zone: drums (knockable), barriers, equipment, workers ----------------
function buildWorkZone(root) {
  var mb = new MB(), o = C3(0xf06a14), w = C3(0xf2f2f2);
  for (var k = 0; k < 5; k++) mb.cyl(0, k * 0.2, 0, 0.3 - k * 0.005, 0.2, 10, k % 2 ? w : o, 0.3 - k * 0.005 - 0.005);
  mb.cyl(0, 0, 0, 0.42, 0.06, 10, C3(0x222222));
  OBJ.drum = new T3.InstancedMesh(mb.geometry(), new T3.MeshLambertMaterial({ vertexColors: true }), DRUMS.length);
  DRUMS.forEach(function (d, i) { d.y = 0.05; d.vx = d.vz = d.vy = 0; d.tilt = 0; d.yaw = 0; d.x0 = d.x; d.z0 = d.z; setInst(OBJ.drum, i, d.x, d.y, d.z, 0, 1, 1, 1); });
  OBJ.drum.instanceMatrix.needsUpdate = true; OBJ.drum.frustumCulled = false; root.add(OBJ.drum);
  BARRIERS.forEach(function (b) {
    var L = Math.hypot(b[2] - b[0], b[3] - b[1]);
    for (var s = 0; s < L; s += 6) { var x = b[0] + (b[2] - b[0]) * s / L, z = b[1] + (b[3] - b[1]) * s / L; batch('prop', x, z).box(x, 0, z, 0.6, 0.82, 5.9, yawOf(b[2] - b[0], b[3] - b[1]) + Math.PI / 2, C3(0xbfbdb6)); }
    COLLIDE_SEGS.push([b[0], b[1], b[2], b[3], 0]);
  });
  var wg = new T3.Group(); root.add(wg); OBJ.workGroup = wg;
  var mbw = new MB();
  PROPS.forEach(function (p) {
    if (!p.work) return;
    var yel = C3(0xe8a90c), dark = C3(0x333333);
    if (p.type === 'excavator') { mb.box(p.x, 0, p.z, 4.5, 1.0, 2.8, p.rot, dark); mb.box(p.x, 1.0, p.z, 3.2, 1.6, 2.6, p.rot, yel); mb.box(p.x + 2.8 * Math.cos(p.rot), 1.8, p.z - 2.8 * Math.sin(p.rot), 4.5, 0.5, 0.5, p.rot, yel); }
    else if (p.type === 'loader') { mb.box(p.x, 0, p.z, 5, 1.4, 2.4, p.rot, yel); mb.box(p.x, 1.4, p.z, 1.8, 1.6, 2.2, p.rot, dark); }
    else if (p.type === 'roller') { mb.box(p.x, 0, p.z, 4, 1.4, 2.0, p.rot, yel); }
    else if (p.type === 'truck') { mb.box(p.x, 0, p.z, 8, 2.6, 2.5, p.rot, C3(0xd8d8d8)); mb.box(p.x + 4.8 * Math.cos(p.rot), 0, p.z - 4.8 * Math.sin(p.rot), 2.2, 3, 2.5, p.rot, C3(0xf97316)); }
    else if (p.type === 'crane') { mb.box(p.x, 0, p.z, 6, 2.5, 3, 0, yel); mb.box(p.x, 2.5, p.z, 0.8, 28, 0.8, 0, yel); mb.box(p.x + 12, 28, p.z, 26, 0.8, 0.8, 0, yel); LAMP_EXTRA.push([p.x + 24, 28.5, p.z, 3]); }
    else if (p.type === 'pier') { mb.box(p.x, 0, p.z, 1.6, p.h, 1.6, 0, C3(0xb8b6ae)); mb.box(p.x, p.h - 0.4, p.z, 3, 0.5, 3, 0, C3(0x9a9994)); PIER_POS.push([p.x, p.z]); }
  });
  var g0 = new T3.Mesh(mb.geometry(), MATS.prop); root.add(g0);
  WORKERS.forEach(function (w) { person(mbw, w.x, 0, w.z, w.rot, 0xfa7a14); });
  if (mbw.count()) wg.add(new T3.Mesh(mbw.geometry(), MATS.prop));
}
function updateDrums(dt) {
  var any = false;
  for (var i = 0; i < DRUMS.length; i++) {
    var d = DRUMS[i];
    if (!d.moving) continue;
    any = true;
    d.x += d.vx * dt; d.z += d.vz * dt; d.y += d.vy * dt; d.vy -= 9.81 * dt; d.yaw += d.spin * dt;
    if (d.y < 0.05) { d.y = 0.05; d.vy = -d.vy * 0.25; d.vx *= 0.6; d.vz *= 0.6; d.tilt = Math.min(Math.PI / 2, d.tilt + 3 * dt); }
    if (Math.abs(d.vx) + Math.abs(d.vz) < 0.2 && d.y < 0.08) d.moving = false;
    _e.set(d.tilt, d.yaw, 0, 'YXZ'); _q.setFromEuler(_e); _v.set(d.x, d.y + (d.tilt > 0.5 ? 0.25 : 0), d.z); _s.set(1, 1, 1); _m4.compose(_v, _q, _s);
    OBJ.drum.setMatrixAt(i, _m4);
  }
  if (any) OBJ.drum.instanceMatrix.needsUpdate = true;
}
// ---------------- seasonal / event dressing ----------------
function buildEventProps(root) {
  // 3M Open at TPC: grandstands at 18, hospitality tents, leaderboard, gallery crowd
  var g3 = new T3.Group(); root.add(g3); OBJ.eventGroups.open3m = g3;
  var mb = new MB(), h18 = HOLES[17].green, cx = h18[0], cz = h18[1], gy = groundH(cx, cz);
  grandstandAt(mb, cx - 28, gy, cz, 36, 10, Math.PI / 2); grandstandAt(mb, cx + 28, gy, cz, 36, 10, -Math.PI / 2);
  for (var k = 0; k < 8; k++) tent(mb, X(3.6) + (k % 4) * 16, groundH(X(3.6), Z(115.4)), Z(115.4) - Math.floor(k / 4) * 14, 12, 10);
  var crowd = new MB();
  for (k = 0; k < 260; k++) { var a = rand() * 6.28, r = rr(18, 42); var px = cx + Math.cos(a) * r, pz = cz + Math.sin(a) * r; person(crowd, px, groundH(px, pz), pz, a + Math.PI, pick([0xffffff, 0x1d4ed8, 0xdc2626, 0x16a34a, 0xfacc15, 0x111827])); }
  g3.add(new T3.Mesh(mb.geometry(), MATS.prop)); g3.add(new T3.Mesh(crowd.geometry(), MATS.prop));
  signQuad('lb3m', cx + 5, gy + 3, cz - 34, 0, 1, 8, 8, false, 'sign3m');
  signQuad('n_open3m', X(3.43), 3.0, Z(115.0), -1, 0, 9, 9, false, 'sign3m');
  // USA Cup at NSC: team tents along the fields, banners, spectators
  var gu = new T3.Group(); root.add(gu); OBJ.eventGroups.usacup = gu;
  var mu = new MB(), cu2 = new MB();
  for (k = 0; k < 36; k++) { var f = FIELDS[k % FIELDS.length]; tent(mu, f.x + f.w / 2 + 3, 0, f.z - f.d / 2 + 6, 4, 4, pick([0x1d4ed8, 0xdc2626, 0x16a34a, 0xf59e0b, 0x7c3aed, 0xffffff])); }
  for (k = 0; k < 420; k++) { var f2 = FIELDS[k % 40]; var sd = rand() < 0.5 ? -1 : 1, px2 = f2.x + rr(-f2.w / 2, f2.w / 2), pz2 = f2.z + sd * (f2.d / 2 + rr(1.5, 4)); person(cu2, px2, 0, pz2, sd > 0 ? Math.PI / 2 : -Math.PI / 2, pick([0xffffff, 0x1d4ed8, 0xdc2626, 0x16a34a, 0xfacc15, 0xf97316])); }
  for (k = 0; k < 160; k++) { var f3 = FIELDS[k % 40]; person(cu2, f3.x + rr(-f3.w / 2 + 3, f3.w / 2 - 3), 0, f3.z + rr(-f3.d / 2 + 3, f3.d / 2 - 3), rand() * 6.28, (k % 2) ? 0xdc2626 : 0x1d4ed8); }
  gu.add(new T3.Mesh(mu.geometry(), MATS.prop)); gu.add(new T3.Mesh(cu2.geometry(), MATS.prop));
  signQuad('n_usacup', 1455, 3.5, -2021, 0, 1, 8, 8, false, 'signcup');
  // ice-fishing houses on frozen Laddie Lake (winter)
  var gi = new T3.Group(); root.add(gi); OBJ.iceGroup = gi;
  var mi = new MB();
  for (k = 0; k < 14; k++) { var ix = LADDIE.x + rr(-100, 100), iz = LADDIE.z + rr(-60, 60); if (((ix - LADDIE.x) / LADDIE.rx) ** 2 + ((iz - LADDIE.z) / LADDIE.rz) ** 2 > 0.6) continue; var cc = pick([0xb91c1c, 0x1e40af, 0x15803d, 0x92400e, 0xe5e7eb]); mi.box(ix, -0.4, iz, 2.4, 2.1, 3.2, rand() * 3, C3(cc)); mi.box(ix, 1.7, iz, 2.6, 0.2, 3.4, 0, C3(0x444444)); }
  gi.add(new T3.Mesh(mi.geometry(), MATS.prop));
  MATS.sign3m = MATS.sign.clone(); MATS.signcup = MATS.sign.clone();
}
function grandstandAt(mb, x, y, z, w, rows, rot) {
  var c = Math.cos(rot), s = Math.sin(rot);
  for (var r = 0; r < rows; r++) { var off = r * 0.85; mb.box(x - off * s * 0 - off * c * 0 + (rot > 0 ? -off : off), y + r * 0.42, z, 0.85, 0.42, w, 0, C3(r % 2 ? 0x1e3a8a : 0x9ca3af)); }
}
function tent(mb, x, y, z, w, d, col) {
  var c = C3(col || 0xf5f5f5);
  for (var q = 0; q < 4; q++) mb.box(x + (q % 2 ? w / 2 : -w / 2), y, z + (q < 2 ? d / 2 : -d / 2), 0.12, 2.6, 0.12, 0, C3(0x999999));
  var a = [x - w / 2, y + 2.6, z - d / 2], b = [x + w / 2, y + 2.6, z - d / 2], cc = [x + w / 2, y + 2.6, z + d / 2], dd = [x - w / 2, y + 2.6, z + d / 2], top = [x, y + 2.6 + Math.min(w, d) * 0.35, z];
  mb.tri(a, top, b, c); mb.tri(b, top, cc, c); mb.tri(cc, top, dd, c); mb.tri(dd, top, a, c);
}
function buildObjects(root) {
  _m4 = new T3.Matrix4(); _q = new T3.Quaternion(); _v = new T3.Vector3(); _s = new T3.Vector3(); _e = new T3.Euler();
  buildAtlas();
  buildBuildings();
  buildTrees();
  buildLandmarks();
  buildWorkZone(root);
  buildSignalHeads(root);
  buildStreetLights(root);
  buildEventProps(root);
}
