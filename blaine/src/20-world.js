// =============================================================================
// 20-world — everything you can see and hit.
//
// The static skeleton (road ribbons with markings baked into their textures,
// sidewalks, parking, lakes, the landmark buildings) is built once. Housing,
// trees, streetlights and props stream in and out in 520 m chunks around the
// player so a 6 x 10 km city stays affordable on a phone.
// =============================================================================

var MATS = {};
var SCENE_ROOT = new T.Group();
var CHUNK = 520;
var CHUNKS = {};
var CHUNK_QUEUE = [];
var COLLIDERS = { cell: 44, grid: {} };   // static boxes for vehicle collision

// ------------------------------------------------------------- small geometry
// Vertical wall quad from (ax,az) to (bx,bz) between y0 and y1, UVs scaled so
// the texture keeps a constant world size.
function vwall(ax, az, bx, bz, y0, y1, tile) {
  var len = Math.hypot(bx - ax, bz - az), h = y1 - y0;
  var g = new T.BufferGeometry();
  var nx = (bz - az) / len, nz = -(bx - ax) / len;
  var p = new Float32Array([
    ax, y0, az, bx, y0, bz, bx, y1, bz,
    ax, y0, az, bx, y1, bz, ax, y1, az
  ]);
  var n = new Float32Array(18);
  for (var i = 0; i < 6; i++) { n[i * 3] = nx; n[i * 3 + 1] = 0; n[i * 3 + 2] = nz; }
  var u = len / tile, v = h / tile;
  var uvs = new Float32Array([0, 0, u, 0, u, v, 0, 0, u, v, 0, v]);
  g.setAttribute('position', new T.BufferAttribute(p, 3));
  g.setAttribute('normal', new T.BufferAttribute(n, 3));
  g.setAttribute('uv', new T.BufferAttribute(uvs, 2));
  return g;
}

// Horizontal quad. Anything large is subdivided: a single triangle spanning
// kilometres loses so much depth precision near the camera that the ground
// punches through the road surface a few metres in front of the car.
function hquad(cx, cz, w, d, y, rot, tile, flip) {
  var sw = clamp(Math.round(w / 120), 1, 48), sd = clamp(Math.round(d / 120), 1, 48);
  var g = new T.PlaneGeometry(w, d, sw, sd);
  g.rotateX(flip ? PI / 2 : -PI / 2);
  if (rot) g.rotateY(rot);
  g.translate(cx, y, cz);
  if (tile) scaleUV(g, w / tile, d / tile);
  return g;
}

// All rotations use three's rotateY convention: local +X maps to world
// (cos r, -sin r), local +Z to (sin r, cos r). rotFromDir() converts a road
// direction into that angle so buildings line up with the street they face.
function rotFromDir(dx, dz) { return Math.atan2(-dz, dx); }
function dirFromRot(r, out) { out.x = Math.cos(r); out.z = -Math.sin(r); return out; }

// Four walls + flat roof: the base of most commercial and civic buildings.
function boxShell(cx, cz, w, d, y0, y1, rot, tile, out, roofOut, roofTile) {
  var hw = w / 2, hd = d / 2, c = Math.cos(rot || 0), s = Math.sin(rot || 0);
  function P(lx, lz) { return [cx + lx * c + lz * s, cz - lx * s + lz * c]; }
  var a = P(-hw, -hd), b = P(hw, -hd), e = P(hw, hd), f = P(-hw, hd);
  out.push(vwall(a[0], a[1], b[0], b[1], y0, y1, tile));
  out.push(vwall(b[0], b[1], e[0], e[1], y0, y1, tile));
  out.push(vwall(e[0], e[1], f[0], f[1], y0, y1, tile));
  out.push(vwall(f[0], f[1], a[0], a[1], y0, y1, tile));
  if (roofOut) roofOut.push(hquad(cx, cz, w, d, y1, rot, roofTile || 6));
}

// Pitched roof for houses: two slopes plus the triangular gable ends.
function gableRoof(cx, cz, w, d, y, rise, rot, out) {
  var hw = w / 2, hd = d / 2, c = Math.cos(rot || 0), s = Math.sin(rot || 0);
  function P(lx, ly, lz) { return [cx + lx * c + lz * s, y + ly, cz - lx * s + lz * c]; }
  var over = 0.45;
  var A = P(-hw - over, 0, -hd - over), B = P(hw + over, 0, -hd - over);
  var C = P(hw + over, 0, hd + over), D = P(-hw - over, 0, hd + over);
  var R1 = P(-hw - over, rise, 0), R2 = P(hw + over, rise, 0);
  // Wound clockwise in the local frame, which is anticlockwise in world space
  // once the mirrored rotateY mapping is applied — so the normals face up/out.
  function tri(p1, p2, p3) {
    var g = new T.BufferGeometry();
    g.setAttribute('position', new T.BufferAttribute(new Float32Array([
      p1[0], p1[1], p1[2], p3[0], p3[1], p3[2], p2[0], p2[1], p2[2]]), 3));
    var uu = new Float32Array([0, 0, 0.6, 1.2, 1.2, 0]);
    g.setAttribute('uv', new T.BufferAttribute(uu, 2));
    g.computeVertexNormals();
    return g;
  }
  function quad(p1, p2, p3, p4) {
    var g = new T.BufferGeometry();
    g.setAttribute('position', new T.BufferAttribute(new Float32Array([
      p1[0], p1[1], p1[2], p3[0], p3[1], p3[2], p2[0], p2[1], p2[2],
      p1[0], p1[1], p1[2], p4[0], p4[1], p4[2], p3[0], p3[1], p3[2]]), 3));
    var uw = Math.hypot(p2[0] - p1[0], p2[2] - p1[2]) / 2.2;
    var uh = Math.hypot(p3[0] - p2[0], p3[1] - p2[1], p3[2] - p2[2]) / 2.2;
    g.setAttribute('uv', new T.BufferAttribute(new Float32Array([0, 0, uw, 0, uw, uh, 0, 0, uw, uh, 0, uh]), 2));
    g.computeVertexNormals();
    return g;
  }
  out.push(quad(A, B, R2, R1));
  out.push(quad(C, D, R1, R2));
  out.push(tri(B, C, R2));
  out.push(tri(D, A, R1));
}

// ----------------------------------------------------------- road striping
// Lane markings are painted into the road texture rather than added as
// geometry: one tile spans 24 m of road and the full carriageway width, so a
// six-lane divided highway and a residential street each get correct striping
// for free.
function makeRoadTexture(cls, lanes, median, totalW) {
  var PXW = 512, PXH = 512, mPerTile = 24;
  var c = makeCanvas(PXW); c.height = PXH;
  var x = c.getContext('2d');
  var px = PXW / totalW;              // pixels per metre across
  var py = PXH / mPerTile;            // pixels per metre along

  x.fillStyle = '#3b3e44'; x.fillRect(0, 0, PXW, PXH);
  speckle(x, PXW, 4200, ['#2c2f34', '#4a4e55', '#55595f', '#232529'], 0.6, 2.4);
  for (var i = 0; i < 8; i++) {
    x.strokeStyle = 'rgba(24,26,30,0.4)'; x.lineWidth = 1 + Math.random() * 2;
    x.beginPath(); x.moveTo(Math.random() * PXW, 0);
    x.bezierCurveTo(Math.random() * PXW, PXH * 0.3, Math.random() * PXW, PXH * 0.6, Math.random() * PXW, PXH);
    x.stroke();
  }

  var shoulder = ROAD_CLASS[cls].shoulder;
  function line(mx, color, width, dashed) {
    x.strokeStyle = color; x.lineWidth = Math.max(1.6, width * px);
    if (dashed) { x.setLineDash([3 * py, 9 * py]); } else { x.setLineDash([]); }
    x.beginPath(); x.moveTo(mx * px, -py * 2); x.lineTo(mx * px, PXH + py * 2); x.stroke();
    x.setLineDash([]);
  }
  var carriage = lanes * LANE_W;
  var leftEdge = shoulder, rightEdge = totalW - shoulder;
  var white = 'rgba(238,238,230,0.92)', yellow = 'rgba(238,196,60,0.92)';

  if (median > 0.5) {
    // Divided: paved median painted as concrete, white edges, dashed lane lines.
    var mStart = shoulder + carriage, mEnd = mStart + median;
    x.fillStyle = '#8f8f8a';
    x.fillRect(mStart * px, 0, median * px, PXH);
    x.fillStyle = 'rgba(120,120,116,0.5)';
    for (var k = 0; k < 12; k++) x.fillRect(mStart * px, k * PXH / 12, median * px, 2);
    line(leftEdge, white, 0.16, false);
    line(rightEdge, white, 0.16, false);
    for (var l = 1; l < lanes; l++) {
      line(shoulder + l * LANE_W, white, 0.13, true);
      line(mEnd + l * LANE_W, white, 0.13, true);
    }
    line(mStart - 0.12, yellow, 0.14, false);
    line(mEnd + 0.12, yellow, 0.14, false);
  } else if (cls === 'local' || cls === 'lot' || cls === 'ramp') {
    if (cls === 'ramp') { line(leftEdge, white, 0.16, false); line(rightEdge, white, 0.16, false); }
  } else {
    // Undivided: double yellow centre, white edges, dashed lane lines.
    var centre = totalW / 2;
    line(centre - 0.22, yellow, 0.13, false);
    line(centre + 0.22, yellow, 0.13, false);
    line(leftEdge, white, 0.15, false);
    line(rightEdge, white, 0.15, false);
    for (var m = 1; m < lanes; m++) {
      line(shoulder + m * LANE_W, white, 0.13, true);
      line(centre + m * LANE_W, white, 0.13, true);
    }
  }
  var t = finishTex(c, 0, true, 8);
  t.wrapS = T.ClampToEdgeWrapping; t.wrapT = T.RepeatWrapping;
  t.mPerTile = mPerTile;
  return t;
}

// --------------------------------------------------------------- materials
var WET_ROAD_MATS = [];
var NIGHT_MATS = [];       // materials whose emissive tracks nightfall
var GLOW_MATS = [];        // additive light pools / lamp glows

function buildMaterials() {
  function road(cls, lanes, median, w) {
    var m = new T.MeshStandardMaterial({
      map: makeRoadTexture(cls, lanes, median, w),
      roughnessMap: TEX.asphaltRough,
      roughness: 0.94, metalness: 0.0,
      normalMap: TEX.rippleNormal,
      normalScale: new T.Vector2(0, 0),
      envMapIntensity: 0.35
    });
    m.userData.dryRough = 0.94;
    WET_ROAD_MATS.push(m);
    return m;
  }
  MATS.road = {};
  var seen = {};
  CITY.roads.forEach(function (r) {
    var key = r.cls + '_' + r.lanes + '_' + Math.round(r.median) + '_' + Math.round(r.w * 10);
    if (!seen[key]) { seen[key] = road(r.cls, r.lanes, r.median, r.w); MATS.road[key] = seen[key]; }
    r.matKey = key;
  });

  MATS.junction = new T.MeshStandardMaterial({
    map: TEX.asphalt, roughnessMap: TEX.asphaltRough, roughness: 0.94, metalness: 0,
    normalMap: TEX.rippleNormal, normalScale: new T.Vector2(0, 0), envMapIntensity: 0.35
  });
  MATS.junction.userData.dryRough = 0.94;
  MATS.junction.map = TEX.asphalt.clone();
  MATS.junction.map.repeat.set(0.12, 0.12);
  MATS.junction.map.wrapS = MATS.junction.map.wrapT = T.RepeatWrapping;
  MATS.junction.map.colorSpace = T.SRGBColorSpace;
  WET_ROAD_MATS.push(MATS.junction);

  MATS.lot = new T.MeshStandardMaterial({
    map: TEX.lot, roughnessMap: TEX.asphaltRough, roughness: 0.93, metalness: 0,
    normalMap: TEX.rippleNormal, normalScale: new T.Vector2(0, 0), envMapIntensity: 0.3
  });
  MATS.lot.userData.dryRough = 0.93;
  MATS.lot.map = TEX.lot.clone(); MATS.lot.map.wrapS = MATS.lot.map.wrapT = T.RepeatWrapping;
  MATS.lot.map.repeat.set(0.06, 0.06); MATS.lot.map.colorSpace = T.SRGBColorSpace;
  WET_ROAD_MATS.push(MATS.lot);

  MATS.paint = new T.MeshStandardMaterial({ color: 0xf0efe4, roughness: 0.8, metalness: 0 });
  MATS.sidewalk = new T.MeshStandardMaterial({
    map: TEX.concrete, roughness: 0.88, metalness: 0, envMapIntensity: 0.25
  });
  MATS.sidewalk.map = TEX.concrete.clone(); MATS.sidewalk.map.wrapS = MATS.sidewalk.map.wrapT = T.RepeatWrapping;
  MATS.sidewalk.map.repeat.set(0.35, 0.35); MATS.sidewalk.map.colorSpace = T.SRGBColorSpace;
  WET_ROAD_MATS.push(MATS.sidewalk); MATS.sidewalk.userData.dryRough = 0.88;

  MATS.ground = new T.MeshStandardMaterial({ map: TEX.grass, roughness: 0.97, metalness: 0, envMapIntensity: 0.2 });
  MATS.ground.map = TEX.grass.clone(); MATS.ground.map.wrapS = MATS.ground.map.wrapT = T.RepeatWrapping;
  MATS.ground.map.repeat.set(700, 700); MATS.ground.map.colorSpace = T.SRGBColorSpace;
  MATS.grass = new T.MeshStandardMaterial({ map: TEX.grass, roughness: 0.97, metalness: 0, vertexColors: true });
  MATS.dirt = new T.MeshStandardMaterial({ map: TEX.dirt, roughness: 0.99, metalness: 0, vertexColors: true });
  MATS.field = new T.MeshStandardMaterial({ map: TEX.field, roughness: 0.95, metalness: 0 });

  MATS.water = new T.MeshStandardMaterial({
    color: 0x1d3d52, roughness: 0.06, metalness: 0.15, transparent: true, opacity: 0.9,
    normalMap: TEX.waterNormal, normalScale: new T.Vector2(0.55, 0.55), envMapIntensity: 1.5
  });

  // Building shells. vertexColors lets one material tint hundreds of buildings.
  function facade(map, litMap, rough) {
    var m = new T.MeshStandardMaterial({
      map: map, emissiveMap: litMap || null, emissive: litMap ? 0xffffff : 0x000000,
      emissiveIntensity: 0, roughness: rough === undefined ? 0.82 : rough, metalness: 0.02,
      vertexColors: true, envMapIntensity: 0.5
    });
    if (litMap) NIGHT_MATS.push(m);
    return m;
  }
  MATS.house = facade(TEX.houseWin, TEX.houseLit, 0.86);
  MATS.apartment = facade(TEX.apartment, TEX.apartmentLit, 0.8);
  MATS.retail = facade(TEX.retail, TEX.retailLit, 0.78);
  MATS.office = facade(TEX.office, TEX.officeLit, 0.42);
  MATS.brick = facade(TEX.brick, null, 0.88);
  MATS.stucco = facade(TEX.stucco, null, 0.85);
  MATS.shingle = facade(TEX.shingle, null, 0.9);
  MATS.roofdeck = facade(TEX.roof, null, 0.93);
  MATS.metal = new T.MeshStandardMaterial({ color: 0xb8bcc2, roughness: 0.36, metalness: 0.82, vertexColors: true, envMapIntensity: 1.0 });
  MATS.accent = new T.MeshStandardMaterial({ color: 0xffffff, roughness: 0.55, metalness: 0.1, vertexColors: true, envMapIntensity: 0.6 });
  MATS.glass = new T.MeshPhysicalMaterial({
    color: 0x203040, roughness: 0.08, metalness: 0.1, transmission: 0, transparent: true,
    opacity: 0.55, envMapIntensity: 1.6
  });
  MATS.sign = new T.MeshStandardMaterial({
    map: TEX.signage, emissiveMap: TEX.signage, emissive: 0xffffff, emissiveIntensity: 0.15,
    roughness: 0.6, metalness: 0
  });
  NIGHT_MATS.push(MATS.sign);

  MATS.trunk = new T.MeshStandardMaterial({ color: 0x5a4632, roughness: 0.95, metalness: 0 });
  MATS.leaf = new T.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85, metalness: 0, vertexColors: true });
  MATS.pole = new T.MeshStandardMaterial({ color: 0x4a4f56, roughness: 0.55, metalness: 0.7 });
  MATS.lamp = new T.MeshStandardMaterial({ color: 0x2a2f36, emissive: 0xffe2b0, emissiveIntensity: 0, roughness: 0.4 });
  NIGHT_MATS.push(MATS.lamp);
  MATS.pool = new T.MeshBasicMaterial({
    map: TEX.glow, color: 0xffdca8, transparent: true, opacity: 0, depthWrite: false,
    blending: T.AdditiveBlending
  });
  GLOW_MATS.push(MATS.pool);
  MATS.signalRed = new T.MeshStandardMaterial({ color: 0x2a0a0a, emissive: 0xff2a1a, emissiveIntensity: 0.1, roughness: 0.4 });
  MATS.signalYel = new T.MeshStandardMaterial({ color: 0x2a220a, emissive: 0xffb020, emissiveIntensity: 0.1, roughness: 0.4 });
  MATS.signalGrn = new T.MeshStandardMaterial({ color: 0x0a2a12, emissive: 0x30ff70, emissiveIntensity: 0.1, roughness: 0.4 });
  MATS.snowMat = new T.MeshStandardMaterial({ color: 0xf2f6ff, roughness: 0.72, metalness: 0, transparent: true, opacity: 0 });
}

// ------------------------------------------------------------ static skeleton
function addColliderBox(x, z, hw, hd, rot, h) {
  var c = COLLIDERS, key;
  var box = { x: x, z: z, hw: hw, hd: hd, rot: rot || 0, h: h === undefined ? 8 : h };
  var r = Math.hypot(hw, hd);
  for (var cx = Math.floor((x - r) / c.cell); cx <= Math.floor((x + r) / c.cell); cx++) {
    for (var cz = Math.floor((z - r) / c.cell); cz <= Math.floor((z + r) / c.cell); cz++) {
      key = cx + ',' + cz;
      (c.grid[key] || (c.grid[key] = [])).push(box);
    }
  }
  return box;
}
function collidersNear(x, z, out) {
  out.length = 0;
  var c = COLLIDERS, cx = Math.floor(x / c.cell), cz = Math.floor(z / c.cell);
  for (var i = -1; i <= 1; i++) for (var j = -1; j <= 1; j++) {
    var list = c.grid[(cx + i) + ',' + (cz + j)];
    if (list) for (var k = 0; k < list.length; k++) if (out.indexOf(list[k]) < 0) out.push(list[k]);
  }
  return out;
}

// Nearest road centreline + its direction — drives building orientation,
// sidewalk placement and streetlight spacing.
var _nri = { d: 1e9, road: null, dx: 0, dz: 1, cx: 0, cz: 0 };
function nearestRoadInfo(px, pz) {
  var cs = NET.segCell, best = 1e9, res = _nri;
  res.d = 1e9; res.road = null;
  var cx = Math.floor(px / cs), cz = Math.floor(pz / cs);
  for (var i = -1; i <= 1; i++) for (var j = -1; j <= 1; j++) {
    var list = NET.segIndex[(cx + i) + ',' + (cz + j)];
    if (!list) continue;
    for (var k = 0; k < list.length; k++) {
      var s = list[k];
      if (s.lot) continue;
      var r = segDist(px, pz, s.ax, s.az, s.bx, s.bz);
      if (r.d < best) {
        best = r.d;
        var L = Math.hypot(s.bx - s.ax, s.bz - s.az) || 1;
        res.d = r.d - s.hw; res.road = s.r; res.dx = (s.bx - s.ax) / L; res.dz = (s.bz - s.az) / L;
        res.cx = r.x; res.cz = r.z; res.hw = s.hw;
      }
    }
  }
  return res;
}

// Emit a road ribbon, subdividing where it climbs an overpass.
function ribbon(pts, w, tex, out) {
  var mPer = tex && tex.mPerTile ? tex.mPerTile : 24;
  var run = 0;
  for (var i = 0; i < pts.length - 1; i++) {
    var ax = pts[i][0], az = pts[i][1], bx = pts[i + 1][0], bz = pts[i + 1][1];
    var len = Math.hypot(bx - ax, bz - az);
    if (len < 0.01) continue;
    var needsSub = false;
    for (var b = 0; b < CITY.bridges.length; b++) {
      var br = CITY.bridges[b];
      if (Math.min(ax, bx) - br.halfLen < br.x && Math.max(ax, bx) + br.halfLen > br.x &&
          Math.min(az, bz) - br.halfLen < br.z && Math.max(az, bz) + br.halfLen > br.z) needsSub = true;
    }
    // Long ribbons are split for the same depth-precision reason as hquad;
    // bridge approaches are split much finer so the deck can ramp.
    var steps = needsSub ? Math.max(2, Math.ceil(len / 12)) : Math.max(1, Math.ceil(len / 90));
    var dx = (bx - ax) / len, dz = (bz - az) / len, nx = -dz * w / 2, nz = dx * w / 2;
    for (var s = 0; s < steps; s++) {
      var t0 = s / steps, t1 = (s + 1) / steps;
      var x0 = lerp(ax, bx, t0), z0 = lerp(az, bz, t0);
      var x1 = lerp(ax, bx, t1), z1 = lerp(az, bz, t1);
      var y0 = roadHeightAt(x0, z0) + 0.03, y1 = roadHeightAt(x1, z1) + 0.03;
      var v0 = (run + len * t0) / mPer, v1 = (run + len * t1) / mPer;
      var g = new T.BufferGeometry();
      var P = new Float32Array([
        x0 - nx, y0, z0 - nz, x0 + nx, y0, z0 + nz, x1 + nx, y1, z1 + nz,
        x0 - nx, y0, z0 - nz, x1 + nx, y1, z1 + nz, x1 - nx, y1, z1 - nz
      ]);
      var N = new Float32Array(18);
      for (var q = 0; q < 6; q++) { N[q * 3 + 1] = 1; }
      var U = new Float32Array([0, v0, 1, v0, 1, v1, 0, v0, 1, v1, 0, v1]);
      g.setAttribute('position', new T.BufferAttribute(P, 3));
      g.setAttribute('normal', new T.BufferAttribute(N, 3));
      g.setAttribute('uv', new T.BufferAttribute(U, 2));
      out.push(g);
    }
    run += len;
  }
}

function buildRoads() {
  var byMat = {}, junctions = [], walks = [], curbs = [], paint = [];
  CITY.roads.forEach(function (r) {
    var arr = byMat[r.matKey] || (byMat[r.matKey] = []);
    ribbon(r.pts, r.w, MATS.road[r.matKey].map, arr);

    // Sidewalks + curbs on urban streets.
    if (r.walk) {
      for (var i = 0; i < r.pts.length - 1; i++) {
        var ax = r.pts[i][0], az = r.pts[i][1], bx = r.pts[i + 1][0], bz = r.pts[i + 1][1];
        var len = Math.hypot(bx - ax, bz - az);
        if (len < 12) continue;
        var dx = (bx - ax) / len, dz = (bz - az) / len, nx = -dz, nz = dx;
        var off = r.w / 2 + 1.6, sw = 2.0;
        [1, -1].forEach(function (sgn) {
          var cx = (ax + bx) / 2 + nx * off * sgn, cz = (az + bz) / 2 + nz * off * sgn;
          var rot = Math.atan2(dx, dz);
          if (roadHeightAt(cx, cz) > 0.2) return;
          walks.push(hquad(cx, cz, sw, len, 0.16, rot, 3));
          curbs.push(boxGeo(0.34, 0.17, len, cx - nx * (sw / 2 + 0.17) * sgn, 0.085, cz - nz * (sw / 2 + 0.17) * sgn, rot));
        });
      }
    }
  });

  // Intersection plates hide the crossing stripes, plus crosswalk bars.
  NET.nodes.forEach(function (n) {
    if (n.out.length < 2) return;
    var maxW = 6;
    for (var i = 0; i < n.out.length; i++) maxW = Math.max(maxW, NET.edges[n.out[i]].road.w);
    var y = roadHeightAt(n.x, n.z) + 0.045;
    junctions.push(hquad(n.x, n.z, maxW * 1.02, maxW * 1.02, y, 0, 1));
    if (n.signal >= 0) {
      for (var s = 0; s < 4; s++) {
        var ang = (s * PI) / 2, ox = Math.cos(ang) * maxW * 0.42, oz = Math.sin(ang) * maxW * 0.42;
        for (var b = -3; b <= 3; b++) {
          paint.push(hquad(n.x + ox - Math.sin(ang) * b * 0.9, n.z + oz + Math.cos(ang) * b * 0.9,
            0.5, 3.4, y + 0.012, ang, 0));
        }
      }
    }
  });

  // Parking lots.
  var lotGeos = [];
  CITY.lots.forEach(function (L) { lotGeos.push(hquad(L.x, L.z, L.w, L.d, 0.04, L.rot, 1)); });

  var group = new T.Group();
  for (var key in byMat) {
    if (!byMat[key].length) continue;
    var mesh = new T.Mesh(mergeGeos(byMat[key]), MATS.road[key]);
    mesh.receiveShadow = true; mesh.matrixAutoUpdate = false;
    group.add(mesh);
  }
  function addMerged(list, mat, shadow) {
    if (!list.length) return;
    var m = new T.Mesh(mergeGeos(list), mat);
    m.receiveShadow = true; m.castShadow = !!shadow; m.matrixAutoUpdate = false;
    group.add(m);
  }
  addMerged(junctions, MATS.junction);
  addMerged(lotGeos, MATS.lot);
  addMerged(walks, MATS.sidewalk);
  addMerged(curbs, MATS.sidewalk, true);
  addMerged(paint, MATS.paint);
  SCENE_ROOT.add(group);
}

function buildBridges() {
  var deck = [], rail = [], pier = [];
  CITY.bridges.forEach(function (b) {
    // Piers under the deck and guardrails along it (both are solid to drive into).
    for (var s = -1; s <= 1; s += 2) {
      pier.push(boxGeo(3.2, b.h, 2.6, b.x + s * 20, b.h / 2 - 0.5, b.z, 0));
    }
    for (var side = -1; side <= 1; side += 2) {
      var zz = b.z + side * (b.halfWid - 1.2);
      rail.push(boxGeo(b.halfLen * 2 * 0.62, 1.05, 0.42, b.x, b.h + 0.5, zz, 0));
      addColliderBox(b.x, zz, b.halfLen * 0.62, 0.25, 0, 1.2);
    }
    deck.push(boxGeo(b.halfLen * 1.3, 0.8, b.halfWid * 2, b.x, b.h - 0.45, b.z, 0));
  });
  if (deck.length) {
    var m1 = new T.Mesh(mergeGeos(deck), MATS.sidewalk); m1.castShadow = true; m1.receiveShadow = true;
    var m2 = new T.Mesh(mergeGeos(rail), MATS.pole); m2.castShadow = true;
    var m3 = new T.Mesh(mergeGeos(pier), MATS.sidewalk); m3.castShadow = true; m3.receiveShadow = true;
    SCENE_ROOT.add(m1); SCENE_ROOT.add(m2); SCENE_ROOT.add(m3);
  }
}

function buildGroundAndWater() {
  // One big grass plane, subdivided so its depth stays well-conditioned.
  var g = new T.PlaneGeometry(16000, 16000, 80, 80);
  g.rotateX(-PI / 2);
  g.translate(2800, -0.02, -4900);
  var ground = new T.Mesh(g, MATS.ground);
  ground.receiveShadow = true; ground.matrixAutoUpdate = false;
  SCENE_ROOT.add(ground);

  var patches = [], dirtP = [], fieldP = [];
  CITY.zones.forEach(function (z) {
    var w = z.x1 - z.x0, d = z.z1 - z.z0, cx = (z.x0 + z.x1) / 2, cz = (z.z0 + z.z1) / 2;
    if (z.type === 'rural') {
      // Farm fields and fallow ground on the north edge.
      var rng = mulberry32((cx * 13 + cz * 7) | 0);
      var nx = Math.max(1, Math.round(w / 320)), nz = Math.max(1, Math.round(d / 320));
      for (var i = 0; i < nx; i++) for (var j = 0; j < nz; j++) {
        var fx = z.x0 + w * (i + 0.5) / nx, fz = z.z0 + d * (j + 0.5) / nz;
        var fg = hquad(fx, fz, (w / nx) * 0.86, (d / nz) * 0.86, 0.01, 0, 9);
        if (rng() < 0.45) { paintGeo(fg, 0xbfae86); dirtP.push(fg); }
        else { paintGeo(fg, rng() < 0.5 ? 0x87a05c : 0x6f8c46); patches.push(fg); }
      }
    } else if (z.type === 'sports') {
      fieldP.push(hquad(cx, cz, w, d, 0.012, 0, 24));
    } else if (z.type === 'park') {
      var pg = hquad(cx, cz, w * 0.96, d * 0.96, 0.011, 0, 12);
      paintGeo(pg, 0x8fb066); patches.push(pg);
    } else if (z.type === 'airport') {
      var ag = hquad(cx, cz, w, d, 0.011, 0, 16);
      paintGeo(ag, 0x9aa878); patches.push(ag);
    }
  });
  if (patches.length) { var pm = new T.Mesh(mergeGeos(patches), MATS.grass); pm.receiveShadow = true; SCENE_ROOT.add(pm); }
  if (dirtP.length) { var dm = new T.Mesh(mergeGeos(dirtP), MATS.dirt); dm.receiveShadow = true; SCENE_ROOT.add(dm); }
  if (fieldP.length) { var fm = new T.Mesh(mergeGeos(fieldP), MATS.field); fm.receiveShadow = true; SCENE_ROOT.add(fm); }

  // Lakes: an ellipse of water sunk slightly, with a muddy shore ring.
  var waters = [], shores = [];
  CITY.lakes.forEach(function (lk) {
    var shape = new T.Shape();
    for (var i = 0; i <= 48; i++) {
      var a = (i / 48) * TAU;
      var wob = 1 + Math.sin(a * 3 + lk.x) * 0.07 + Math.cos(a * 5 + lk.z) * 0.05;
      var px = Math.cos(a) * lk.rx * wob, pz = Math.sin(a) * lk.rz * wob;
      if (i === 0) shape.moveTo(px, pz); else shape.lineTo(px, pz);
    }
    function ring(scale, y) {
      var g2 = new T.ShapeGeometry(shape, 12);
      g2.scale(scale, scale, 1);
      g2.rotateX(-PI / 2); g2.rotateY(lk.rot);
      g2.translate(lk.x, y, lk.z);
      scaleUV(g2, 0.05, 0.05);
      return g2;
    }
    shores.push(paintGeo(ring(1.13, -0.03), 0x7d7053));
    waters.push(ring(1.0, -0.32));
  });
  if (shores.length) { var sm = new T.Mesh(mergeGeos(shores), MATS.dirt); sm.receiveShadow = true; SCENE_ROOT.add(sm); }
  if (waters.length) {
    var wm = new T.Mesh(mergeGeos(waters), MATS.water);
    wm.receiveShadow = false; SCENE_ROOT.add(wm);
    WORLD.waterMesh = wm;
  }

  // Rice Creek, plus the bridges that carry the arterials over it.
  var creek = [];
  for (var c = 0; c < CITY.creek.length - 1; c++) {
    var a0 = CITY.creek[c], a1 = CITY.creek[c + 1];
    var L = Math.hypot(a1[0] - a0[0], a1[1] - a0[1]);
    creek.push(hquad((a0[0] + a1[0]) / 2, (a0[1] + a1[1]) / 2, 14, L + 2,
      -0.28, Math.atan2(a1[0] - a0[0], a1[1] - a0[1]), 0));
  }
  var cm = new T.Mesh(mergeGeos(creek), MATS.water);
  SCENE_ROOT.add(cm);
}

// ---------------------------------------------------------- landmark builders
// Hand-placed, recognisable structures: the sports campus, the mall, the high
// school, city hall, the depot and the airport.
function buildLandmarks() {
  var walls = [], roofs = [], metal = [], accent = [], glass = [], brick = [], signs = [];
  var g;

  function block(cx, cz, w, d, h, rot, wallArr, color, tile, roofColor) {
    var wl = [], rf = [];
    boxShell(cx, cz, w, d, 0, h, rot, tile || 4, wl, rf, 6);
    var mw = mergeGeos(wl); paintGeo(mw, color); wallArr.push(mw);
    var mr = mergeGeos(rf); paintGeo(mr, roofColor || 0x54565a); roofs.push(mr);
    addColliderBox(cx, cz, w / 2, d / 2, rot, h);
  }

  // ---- National Sports Center ---------------------------------------------
  var nscX = 4280, nscZ = avZ(103);
  // Super Rink: long barrel-vaulted ice complex.
  (function () {
    var w = 300, d = 130, x = 4600, z = avZ(102) - 40;
    block(x, z, w, d, 12, 0, walls, 0xa9b2bb, 8, 0x6d7580);
    var vault = new T.CylinderGeometry(d / 2, d / 2, w, 22, 1, true, 0, PI);
    vault.rotateZ(PI / 2); vault.rotateY(PI / 2);
    vault.translate(x, 12, z);
    scaleUV(vault, 14, 8);
    var vm = mergeGeos([vault]); paintGeo(vm, 0xc3ccd4); metal.push(vm);
    signs.push(hquad(x, z - d / 2 - 0.4, 46, 6, 0, 0, 0));
    var sg = new T.PlaneGeometry(46, 6); sg.translate(x, 16, z - d / 2 - 0.5); signs.push(sg);
  })();

  // TCO Stadium: an oval bowl of raked seating around a pitch.
  (function () {
    var x = 3980, z = avZ(103) + 70, rx = 118, rz = 88;
    var bowl = [], seats = [];
    for (var i = 0; i < 40; i++) {
      var a0 = (i / 40) * TAU, a1 = ((i + 1) / 40) * TAU;
      var mid = (a0 + a1) / 2;
      var px = x + Math.cos(mid) * (rx + 16), pz = z + Math.sin(mid) * (rz + 16);
      var seg = new T.BoxGeometry(Math.hypot(Math.cos(a1) * rx - Math.cos(a0) * rx, Math.sin(a1) * rz - Math.sin(a0) * rz) + 6, 15, 30);
      seg.rotateY(-mid);
      seg.translate(px, 7.5, pz);
      bowl.push(seg);
      var st = new T.BoxGeometry(20, 1.2, 22);
      st.rotateZ(0.34); st.rotateY(-mid);
      st.translate(x + Math.cos(mid) * (rx + 8), 10, z + Math.sin(mid) * (rz + 8));
      seats.push(st);
    }
    var bm = mergeGeos(bowl); paintGeo(bm, 0x8e959c); walls.push(bm);
    var sm2 = mergeGeos(seats); paintGeo(sm2, 0x2c4a7a); accent.push(sm2);
    var pitch = hquad(x, z, rx * 1.5, rz * 1.7, 0.05, 0, 22);
    var pm = new T.Mesh(pitch, MATS.field); pm.receiveShadow = true; SCENE_ROOT.add(pm);
    for (var L = 0; L < 4; L++) {
      var la = (L / 4) * TAU + 0.7;
      var mast = new T.CylinderGeometry(0.7, 0.9, 34, 6);
      mast.translate(x + Math.cos(la) * (rx + 34), 17, z + Math.sin(la) * (rz + 34));
      var mm = mergeGeos([mast]); paintGeo(mm, 0x6a7078); metal.push(mm);
      var head = new T.BoxGeometry(9, 3, 1.6);
      head.rotateY(-la); head.translate(x + Math.cos(la) * (rx + 34), 34, z + Math.sin(la) * (rz + 34));
      var hm3 = mergeGeos([head]); paintGeo(hm3, 0xe8ecf0); accent.push(hm3);
    }
    addColliderBox(x, z, rx + 22, rz + 22, 0, 15);
  })();

  // The velodrome: a banked 250 m timber oval, the NSC's signature silhouette.
  (function () {
    var x = 4180, z = avZ(103) - 110, rx = 66, rz = 42;
    var track = [], inner = [];
    var STEPS = 56;
    for (var i = 0; i < STEPS; i++) {
      var a0 = (i / STEPS) * TAU, a1 = ((i + 1) / STEPS) * TAU;
      // Banking is steepest in the turns, shallow on the straights.
      function bank(a) { return 0.55 + 0.45 * Math.abs(Math.cos(a)); }
      var g0 = new T.BufferGeometry();
      function pt(a, out, hi) {
        var b = bank(a) * 6.4;
        var w = hi ? 10.5 : 0;
        var ca = Math.cos(a), sa = Math.sin(a);
        var R = 1 + (hi ? w / Math.hypot(rx, rz) : 0);
        return [x + ca * rx * R, hi ? b : 0.05, z + sa * rz * R];
      }
      var p1 = pt(a0, 0, false), p2 = pt(a1, 0, false), p3 = pt(a1, 0, true), p4 = pt(a0, 0, true);
      g0.setAttribute('position', new T.BufferAttribute(new Float32Array([
        p1[0], p1[1], p1[2], p2[0], p2[1], p2[2], p3[0], p3[1], p3[2],
        p1[0], p1[1], p1[2], p3[0], p3[1], p3[2], p4[0], p4[1], p4[2]]), 3));
      g0.setAttribute('uv', new T.BufferAttribute(new Float32Array([0, 0, 1.4, 0, 1.4, 1, 0, 0, 1.4, 1, 0, 1]), 2));
      g0.computeVertexNormals();
      track.push(g0);
    }
    var tm = mergeGeos(track); paintGeo(tm, 0xb08a58);
    var tmesh = new T.Mesh(tm, MATS.accent); tmesh.receiveShadow = true; tmesh.castShadow = true;
    SCENE_ROOT.add(tmesh);
    // Safety rail around the top of the banking, and the flat infield.
    var rail = [];
    for (var k = 0; k < STEPS; k++) {
      var ra = (k / STEPS) * TAU, rb = ((k + 1) / STEPS) * TAU;
      var R2 = 1 + 10.5 / Math.hypot(rx, rz);
      var bank2 = function (a) { return (0.55 + 0.45 * Math.abs(Math.cos(a))) * 6.4; };
      var mx = (Math.cos(ra) + Math.cos(rb)) / 2 * rx * R2 + x;
      var mz = (Math.sin(ra) + Math.sin(rb)) / 2 * rz * R2 + z;
      var segLen = Math.hypot(Math.cos(rb) * rx - Math.cos(ra) * rx, Math.sin(rb) * rz - Math.sin(ra) * rz) * R2 + 0.6;
      var tang = rotFromDir(Math.cos(rb) - Math.cos(ra), Math.sin(rb) - Math.sin(ra));
      rail.push(boxGeo(segLen, 1.0, 0.18, mx, bank2((ra + rb) / 2) + 0.5, mz, tang));
    }
    var rlm = mergeGeos(rail); paintGeo(rlm, 0xd8dde2); metal.push(rlm);
    inner.push(hquad(x, z, rx * 1.5, rz * 1.5, 0.06, 0, 12));
    var im = new T.Mesh(mergeGeos(inner), MATS.field); im.receiveShadow = true; SCENE_ROOT.add(im);
    addColliderBox(x, z, rx + 8, rz + 8, 0, 6);
    CITY.velodrome = { x: x, z: z, rx: rx, rz: rz };
  })();

  // Soccer fields north of 105th — the NSC's 50-plus pitches.
  (function () {
    var fields = [], goals = [];
    for (var r = 0; r < 5; r++) {
      for (var c2 = 0; c2 < 8; c2++) {
        var fx = 3760 + c2 * 140, fz = avZ(105) - 70 - r * 92;
        fields.push(hquad(fx, fz, 105, 68, 0.03, 0, 11));
        for (var s = -1; s <= 1; s += 2) {
          goals.push(boxGeo(0.2, 2.4, 7.3, fx + s * 50, 1.2, fz, 0));
        }
      }
    }
    var fm2 = new T.Mesh(mergeGeos(fields), MATS.field); fm2.receiveShadow = true; SCENE_ROOT.add(fm2);
    var gm = mergeGeos(goals); paintGeo(gm, 0xe8ecf0); metal.push(gm);
  })();

  // NSC administration / expo hall.
  block(4300, avZ(104) - 40, 130, 70, 11, 0, walls, 0xd8d2c4, 6, 0x5f6166);

  // ---- Northtown Mall ------------------------------------------------------
  (function () {
    var x = X_UNIV + 400, z = avZ(86) - 90;
    block(x, z, 420, 210, 13, 0, walls, 0xc8bda9, 8, 0x5b5d61);
    block(x - 150, z - 120, 90, 60, 17, 0, walls, 0xb9a893, 6, 0x5b5d61);
    block(x + 160, z + 118, 100, 64, 16, 0, walls, 0xb9a893, 6, 0x5b5d61);
    // Entry canopies + pylon sign.
    var can = boxGeo(60, 1.4, 14, x, 7.6, z - 112, 0); paintGeo(can, 0x3a6ea8); accent.push(can);
    var pyl = boxGeo(6, 18, 2.2, x - 190, 9, z - 130, 0); paintGeo(pyl, 0x2a3038); accent.push(pyl);
    var face = new T.PlaneGeometry(5.4, 12); face.translate(x - 190, 11, z - 131.2); signs.push(face);
  })();

  // ---- Blaine High School --------------------------------------------------
  (function () {
    var x = X_UNIV + 330, z = avZ(126) + 30;
    block(x, z, 210, 92, 12, 0, brick, 0xb08464, 5, 0x4f5155);
    block(x - 130, z + 20, 70, 70, 16, 0, brick, 0xa87c5c, 5, 0x4f5155);   // gym
    block(x + 140, z - 10, 60, 50, 10, 0, brick, 0xb08464, 5, 0x4f5155);
    // Football stadium behind the school.
    var fx = x + 40, fz = z + 150;
    var pitch = hquad(fx, fz, 110, 70, 0.04, 0, 11);
    var pm = new T.Mesh(pitch, MATS.field); pm.receiveShadow = true; SCENE_ROOT.add(pm);
    for (var s = -1; s <= 1; s += 2) {
      var stand = new T.BoxGeometry(100, 7, 16);
      stand.translate(fx, 3.5, fz + s * 46);
      var sm3 = mergeGeos([stand]); paintGeo(sm3, 0x9aa1a8); walls.push(sm3);
      addColliderBox(fx, fz + s * 46, 50, 8, 0, 7);
    }
    var trk = hquad(fx, fz, 140, 96, 0.03, 0, 9);
    paintGeo(trk, 0xa2543c);
    var tm2 = new T.Mesh(trk, MATS.grass); tm2.receiveShadow = true; SCENE_ROOT.add(tm2);
  })();

  // ---- Blaine City Hall ----------------------------------------------------
  (function () {
    var x = X_H65 + 350, z = avZ(110) + 20;
    block(x, z, 120, 66, 13, 0, walls, 0xd9cdb4, 5, 0x50525a);
    block(x - 44, z - 40, 26, 26, 20, 0.4, walls, 0xc9bda4, 4, 0x50525a);   // corner tower
    var rot = new T.CylinderGeometry(15, 15, 9, 20, 1, true);
    rot.translate(x + 44, 15, z - 20);
    scaleUV(rot, 10, 3);
    var rm = mergeGeos([rot]); paintGeo(rm, 0xbfd4e2); glass.push(rm);
    var plaza = hquad(x, z + 56, 120, 34, 0.06, 0, 4);
    var pmesh = new T.Mesh(plaza, MATS.sidewalk); pmesh.receiveShadow = true; SCENE_ROOT.add(pmesh);
    var flag = new T.CylinderGeometry(0.18, 0.22, 18, 6); flag.translate(x - 40, 9, z + 56);
    var fm3 = mergeGeos([flag]); paintGeo(fm3, 0xd8dde2); metal.push(fm3);
    block(x + 150, z + 10, 70, 46, 9, 0, brick, 0x9c7a60, 5, 0x50525a);     // police
  })();

  // ---- Blaine Depot (the restored 1918 station) ----------------------------
  (function () {
    var x = 1450, z = avZ(95) - 60;
    var wl = [], rf = [];
    boxShell(x, z, 34, 12, 0, 5.4, 0, 3, wl, null);
    var mw = mergeGeos(wl); paintGeo(mw, 0x8c4a3a); walls.push(mw);
    // Deep overhanging hip roof.
    var roof = new T.BoxGeometry(40, 0.7, 18); roof.translate(x, 5.9, z);
    var roof2 = new T.BoxGeometry(34, 1.6, 12); roof2.translate(x, 6.7, z);
    var rmm = mergeGeos([roof, roof2]); paintGeo(rmm, 0x4a3a30); roofs.push(rmm);
    addColliderBox(x, z, 20, 9, 0, 6);
    // Rail line and a parked boxcar.
    var rails = [], ties = [];
    for (var i = -60; i < 60; i++) {
      ties.push(boxGeo(0.24, 0.16, 2.6, x + i * 6, 0.1, z - 22, 0));
    }
    for (var s = -1; s <= 1; s += 2) {
      rails.push(boxGeo(720, 0.16, 0.12, x, 0.24, z - 22 + s * 0.72, 0));
    }
    var tm3 = mergeGeos(ties); paintGeo(tm3, 0x4a3c2e); walls.push(tm3);
    var rm2 = mergeGeos(rails); paintGeo(rm2, 0x8a8e94); metal.push(rm2);
    var car = boxGeo(18, 4.4, 3.1, x + 40, 2.6, z - 22, 0); paintGeo(car, 0x7a3a32); walls.push(car);
    addColliderBox(x + 40, z - 22, 9, 1.6, 0, 4.4);
  })();

  // ---- Anoka County–Blaine Airport ----------------------------------------
  (function () {
    var cx = 3560, cz = avZ(99);
    var rw = [];
    rw.push(hquad(cx, cz, 1500, 34, 0.05, 0, 1));                    // runway 09/27
    rw.push(hquad(cx - 120, cz - 260, 1100, 30, 0.05, 0.16, 1));      // crosswind
    rw.push(hquad(cx + 300, cz + 130, 700, 18, 0.05, 0, 1));          // taxiway
    var rmesh = new T.Mesh(mergeGeos(rw), MATS.junction);
    rmesh.receiveShadow = true; SCENE_ROOT.add(rmesh);
    // Marking dashes down the runway centreline.
    var dash = [];
    for (var i = -18; i <= 18; i++) dash.push(hquad(cx + i * 38, cz, 20, 1, 0.07, 0, 0));
    var dm2 = new T.Mesh(mergeGeos(dash), MATS.paint); SCENE_ROOT.add(dm2);
    for (var h = 0; h < 5; h++) {
      var hx = cx + 260 + h * 62, hz = cz + 210;
      var wl2 = [];
      boxShell(hx, hz, 54, 34, 0, 8.5, 0, 6, wl2, null);
      var hm = mergeGeos(wl2); paintGeo(hm, 0xa9aeb4); metal.push(hm);
      var arc = new T.CylinderGeometry(17, 17, 54, 14, 1, true, 0, PI);
      arc.rotateZ(PI / 2); arc.rotateY(PI / 2); arc.translate(hx, 8.5, hz);
      scaleUV(arc, 8, 4);
      var am = mergeGeos([arc]); paintGeo(am, 0xc0c5cb); metal.push(am);
      addColliderBox(hx, hz, 27, 17, 0, 12);
    }
    var tower = new T.CylinderGeometry(3.4, 4.6, 16, 10);
    tower.translate(cx + 200, 8, cz + 200);
    var twm = mergeGeos([tower]); paintGeo(twm, 0xcfd4d9); walls.push(twm);
    var cab = new T.CylinderGeometry(5.4, 4.4, 4.4, 10);
    cab.translate(cx + 200, 18, cz + 200);
    var cm2 = mergeGeos([cab]); paintGeo(cm2, 0x9fc4dd); glass.push(cm2);
    addColliderBox(cx + 200, cz + 200, 5, 5, 0, 20);
  })();

  // ---- big-box retail boxes with signage bands ----------------------------
  CITY.zones.forEach(function (z) {
    if (z.type !== 'bigbox') return;
    var w = z.x1 - z.x0, d = z.z1 - z.z0;
    var n = Math.max(1, Math.floor(w / 150));
    for (var i = 0; i < n; i++) {
      var bw = (w / n) * 0.82, bd = Math.min(d * 0.55, 90);
      var bx = z.x0 + (w * (i + 0.5)) / n, bz = z.z1 - bd / 2 - 12;
      block(bx, bz, bw, bd, 10.5, 0, walls, [0xd4cbb8, 0xc2c8cc, 0xd8c9b0][i % 3], 6, 0x54565a);
      var band = new T.PlaneGeometry(bw * 0.5, 4.2);
      band.translate(bx, 7.4, bz - bd / 2 - 0.35);
      signs.push(band);
    }
  });

  // ---- push everything into the scene -------------------------------------
  function push(list, mat, cast) {
    if (!list.length) return;
    var m = new T.Mesh(mergeGeos(list), mat);
    m.castShadow = cast !== false; m.receiveShadow = true; m.matrixAutoUpdate = false;
    SCENE_ROOT.add(m);
  }
  push(walls, MATS.stucco);
  push(brick, MATS.brick);
  push(roofs, MATS.roofdeck);
  push(metal, MATS.metal);
  push(accent, MATS.accent);
  push(glass, MATS.glass, false);
  if (signs.length) {
    var sgm = new T.Mesh(mergeGeos(signs), MATS.sign);
    sgm.matrixAutoUpdate = false; SCENE_ROOT.add(sgm);
  }
}
// ============================================================ chunk streaming
function zoneAt(x, z) {
  for (var i = CITY.zones.length - 1; i >= 0; i--) {
    var q = CITY.zones[i];
    if (x >= q.x0 && x <= q.x1 && z >= q.z0 && z <= q.z1) return q;
  }
  return null;
}

function inLake(x, z, pad) {
  for (var w = 0; w < CITY.lakes.length; w++) {
    var lk = CITY.lakes[w], p = pad || 0;
    var ca = Math.cos(-lk.rot), sa = Math.sin(-lk.rot);
    var lx = (x - lk.x) * ca - (z - lk.z) * sa, lz = (x - lk.x) * sa + (z - lk.z) * ca;
    if ((lx * lx) / ((lk.rx + p) * (lk.rx + p)) + (lz * lz) / ((lk.rz + p) * (lk.rz + p)) < 1) return true;
  }
  return false;
}
function inLot(x, z, pad) {
  for (var i = 0; i < CITY.lots.length; i++) {
    var L = CITY.lots[i], p = pad || 0;
    if (Math.abs(x - L.x) < L.w / 2 + p && Math.abs(z - L.z) < L.d / 2 + p) return true;
  }
  return false;
}

// --- individual building generators -----------------------------------------
function genHouse(out, x, z, rot, rng) {
  var w = 10 + rng() * 5, d = 8 + rng() * 4.5, h = rng() < 0.32 ? 6.2 : 3.5;
  var wl = [];
  boxShell(x, z, w, d, 0, h, rot, 3.4, wl, null);
  var body = mergeGeos(wl);
  paintGeo(body, [0xe4e0d6, 0xd8cdb8, 0xc8d2d6, 0xb9c4b0, 0xe0d2c0, 0xcfc4bb, 0xa9b6bd][(rng() * 7) | 0]);
  out.house.push(body);
  var rr = [];
  gableRoof(x, z, w, d, h, 1.9 + rng() * 1.2, rot, rr);
  var rm = mergeGeos(rr); paintGeo(rm, [0x5a5148, 0x4a443d, 0x6a5c4c, 0x3f4448][(rng() * 4) | 0]);
  out.shingle.push(rm);
  // Attached garage facing the street.
  if (rng() < 0.75) {
    var gw = 6, gd = 6.4, gOff = (w / 2 + gw / 2 - 0.4) * (rng() < 0.5 ? 1 : -1);
    var gx = x + Math.cos(rot) * gOff, gz = z - Math.sin(rot) * gOff;
    var gl = [];
    boxShell(gx, gz, gw, gd, 0, 3.0, rot, 3.4, gl, null);
    var gm = mergeGeos(gl); paintGeo(gm, 0xdcd6c9); out.house.push(gm);
    var gr = [];
    gableRoof(gx, gz, gw, gd, 3.0, 1.2, rot, gr);
    var grm = mergeGeos(gr); paintGeo(grm, 0x4f4941); out.shingle.push(grm);
    addColliderBox(gx, gz, gw / 2, gd / 2, rot, 3);
  }
  addColliderBox(x, z, w / 2, d / 2, rot, h + 2);
}

function genTownhome(out, x, z, rot, rng) {
  var units = 3 + ((rng() * 3) | 0), uw = 6.6, d = 11, h = 6.6;
  var w = units * uw;
  var wl = [];
  boxShell(x, z, w, d, 0, h, rot, 3.4, wl, null);
  var body = mergeGeos(wl); paintGeo(body, [0xd0c7b6, 0xbfc7c9, 0xc9b9a6][(rng() * 3) | 0]);
  out.house.push(body);
  var rr = [];
  gableRoof(x, z, w, d, h, 2.1, rot, rr);
  var rm = mergeGeos(rr); paintGeo(rm, 0x4a443d); out.shingle.push(rm);
  addColliderBox(x, z, w / 2, d / 2, rot, h + 2);
}

function genApartment(out, x, z, rot, rng) {
  var w = 26 + rng() * 22, d = 15 + rng() * 8, floors = 3 + ((rng() * 3) | 0), h = floors * 3.1;
  var wl = [], rf = [];
  boxShell(x, z, w, d, 0, h, rot, 3.2, wl, rf, 6);
  var body = mergeGeos(wl); paintGeo(body, [0xc9b9a2, 0xb8b0a4, 0xa89c8c][(rng() * 3) | 0]);
  out.apartment.push(body);
  var rm = mergeGeos(rf); paintGeo(rm, 0x50525a); out.roofdeck.push(rm);
  addColliderBox(x, z, w / 2, d / 2, rot, h);
}

function genStrip(out, x, z, rot, rng, face) {
  var w = 30 + rng() * 40, d = 16 + rng() * 8, h = 5.2 + rng() * 2.4;
  face = face || 1;
  var wl = [], rf = [];
  boxShell(x, z, w, d, 0, h, rot, 3.6, wl, rf, 6);
  var body = mergeGeos(wl); paintGeo(body, [0xd8cfbc, 0xc6ccd0, 0xd4c0aa, 0xbfc9bd][(rng() * 4) | 0]);
  out.retail.push(body);
  var rm = mergeGeos(rf); paintGeo(rm, 0x54565a); out.roofdeck.push(rm);
  // Parapet + illuminated sign band on the street face.
  var par = [];
  boxShell(x, z, w + 0.5, d + 0.5, h, h + 1.1, rot, 3, par, null);
  var pm = mergeGeos(par); paintGeo(pm, 0x8f8578); out.retail.push(pm);
  // The street side is local +Z * face -> world (sin rot, cos rot) * face.
  var fx = Math.sin(rot) * face, fz = Math.cos(rot) * face;
  var band = new T.PlaneGeometry(w * 0.66, 1.5);
  band.rotateY(rot + (face > 0 ? 0 : PI));
  band.translate(x + fx * (d / 2 + 0.34), h - 1.4, z + fz * (d / 2 + 0.34));
  out.sign.push(band);
  // Awning over the shopfronts.
  var aw = boxGeo(w * 0.9, 0.3, 2.4, x + fx * (d / 2 + 1.1), 3.4, z + fz * (d / 2 + 1.1), rot);
  paintGeo(aw, [0x2f5d8f, 0x8f3f3a, 0x2f6d4a][(rng() * 3) | 0]);
  out.accent.push(aw);
  addColliderBox(x, z, w / 2, d / 2, rot, h);
}

function genOffice(out, x, z, rot, rng) {
  var w = 24 + rng() * 18, d = 18 + rng() * 12, floors = 2 + ((rng() * 4) | 0), h = floors * 3.7;
  var wl = [], rf = [];
  boxShell(x, z, w, d, 0, h, rot, 3.5, wl, rf, 6);
  var body = mergeGeos(wl); paintGeo(body, [0x9fb0bd, 0x8d9aa6, 0xb4bcc4][(rng() * 3) | 0]);
  out.office.push(body);
  var rm = mergeGeos(rf); paintGeo(rm, 0x4d5157); out.roofdeck.push(rm);
  // Rooftop plant.
  var hv = boxGeo(4 + rng() * 4, 1.6, 3 + rng() * 3, x + (rng() - 0.5) * w * 0.4, h + 0.8, z + (rng() - 0.5) * d * 0.4, rot);
  paintGeo(hv, 0x9aa0a6); out.metal.push(hv);
  addColliderBox(x, z, w / 2, d / 2, rot, h);
}

function genWarehouse(out, x, z, rot, rng) {
  var w = 48 + rng() * 60, d = 30 + rng() * 26, h = 8 + rng() * 3;
  var wl = [], rf = [];
  boxShell(x, z, w, d, 0, h, rot, 6, wl, rf, 8);
  var body = mergeGeos(wl); paintGeo(body, [0xb6bcc0, 0xa8aeb4, 0xc4c8cb][(rng() * 3) | 0]);
  out.metal.push(body);
  var rm = mergeGeos(rf); paintGeo(rm, 0x6a6e73); out.roofdeck.push(rm);
  // Loading docks.
  for (var i = 0; i < 4; i++) {
    var dk = boxGeo(3.2, 3.4, 0.4, x - w / 2 + 8 + i * 7, 1.7, z + d / 2 + 0.2, rot);
    paintGeo(dk, 0x3a4046); out.accent.push(dk);
  }
  addColliderBox(x, z, w / 2, d / 2, rot, h);
}

function genFarm(out, x, z, rot, rng) {
  if (rng() < 0.45) {
    var w = 16 + rng() * 10, d = 11 + rng() * 6, h = 5.5;
    var wl = [];
    boxShell(x, z, w, d, 0, h, rot, 3.4, wl, null);
    var body = mergeGeos(wl); paintGeo(body, 0x8a3b30); out.house.push(body);
    var rr = []; gableRoof(x, z, w, d, h, 3.4, rot, rr);
    var rm = mergeGeos(rr); paintGeo(rm, 0x4a4a4e); out.shingle.push(rm);
    addColliderBox(x, z, w / 2, d / 2, rot, h + 3);
    if (rng() < 0.6) {   // grain silo
      var sil = new T.CylinderGeometry(3, 3, 13, 12, 1, true);
      sil.translate(x + w * 0.75, 6.5, z);
      scaleUV(sil, 6, 4);
      var sm = mergeGeos([sil]); paintGeo(sm, 0xc8ccd0); out.metal.push(sm);
      var cap = new T.ConeGeometry(3.2, 2.4, 12); cap.translate(x + w * 0.75, 14.2, z);
      var cm = mergeGeos([cap]); paintGeo(cm, 0xaeb3b8); out.metal.push(cm);
      addColliderBox(x + w * 0.75, z, 3, 3, 0, 14);
    }
  } else {
    genHouse(out, x, z, rot, rng);
  }
}

// --- chunk assembly ---------------------------------------------------------
function chunkKey(cx, cz) { return cx + ':' + cz; }

function buildChunk(cx, cz) {
  var x0 = cx * CHUNK, z0 = cz * CHUNK;
  var rng = mulberry32(((cx & 1023) << 10 ^ (cz & 1023)) + 7771);
  var out = {
    house: [], shingle: [], apartment: [], retail: [], office: [], metal: [],
    roofdeck: [], accent: [], sign: [], brick: [], stucco: []
  };
  var trees = [], lights = [], pools = [], props = [];

  var zoneStep = { 'res-dense': 23, 'res-med': 29, 'res-sparse': 38, 'rural': 74, 'strip': 34, 'industrial': 64 };
  var step = 23;
  // Walk a jittered lattice; anything that lands in a building band along a
  // street frontage becomes a building facing that street.
  for (var gx = 0; gx < CHUNK; gx += step) {
    for (var gz = 0; gz < CHUNK; gz += step) {
      var px = x0 + gx + (rng() - 0.5) * 7, pz = z0 + gz + (rng() - 0.5) * 7;
      var zn = zoneAt(px, pz);
      if (!zn) continue;
      var s = zoneStep[zn.type];
      if (!s) continue;
      // Sub-sample coarse zones so big lots do not get house-grid density.
      if (s > step && ((gx / step) | 0) % Math.round(s / step) !== 0) continue;
      if (s > step && ((gz / step) | 0) % Math.round(s / step) !== 0) continue;
      if (rng() > zn.density) continue;
      if (inLake(px, pz, 26) || inLot(px, pz, 10)) continue;

      var info = nearestRoadInfo(px, pz);
      if (!info.road) continue;
      var frontage = zn.type === 'rural' ? 90 : (zn.type === 'strip' ? 46 : 34);
      if (info.d < 7 || info.d > frontage) continue;
      if (info.road.cls === 'freeway') continue;

      // Face the street: rotate so the building's long axis parallels the road,
      // then push it back from the kerb by the zone's setback.
      var rot = rotFromDir(info.dx, info.dz);
      var side = ((px - info.cx) * -info.dz + (pz - info.cz) * info.dx) > 0 ? 1 : -1;
      var setback = zn.type === 'strip' ? 22 : 13;
      var bx = info.cx + (-info.dz) * side * (info.hw + setback);
      var bz = info.cz + (info.dx) * side * (info.hw + setback);
      if (Math.abs(bx - px) > 40 || Math.abs(bz - pz) > 40) { bx = px; bz = pz; }
      if (bx < x0 - 30 || bx > x0 + CHUNK + 30 || bz < z0 - 30 || bz > z0 + CHUNK + 30) continue;
      if (inLot(bx, bz, 6) || inLake(bx, bz, 20)) continue;
      // The setback is measured from one street; make sure the footprint has
      // not landed on a *crossing* street (or in an intersection).
      var clear = nearestRoadInfo(bx, bz);
      if (clear.road && clear.d < (zn.type === 'strip' ? 13 : 9)) continue;

      var t = zn.type, roll = rng();
      if (t === 'res-dense') { roll < 0.12 ? genTownhome(out, bx, bz, rot, rng) : genHouse(out, bx, bz, rot, rng); }
      else if (t === 'res-med') { roll < 0.08 ? genApartment(out, bx, bz, rot, rng) : genHouse(out, bx, bz, rot, rng); }
      else if (t === 'res-sparse') { genHouse(out, bx, bz, rot, rng); }
      else if (t === 'rural') { genFarm(out, bx, bz, rot, rng); }
      else if (t === 'strip') {
        if (roll < 0.62) genStrip(out, bx, bz, rot, rng, -side);
        else if (roll < 0.85) genOffice(out, bx, bz, rot, rng);
        else genApartment(out, bx, bz, rot, rng);
      } else if (t === 'industrial') {
        roll < 0.7 ? genWarehouse(out, bx, bz, rot, rng) : genOffice(out, bx, bz, rot, rng);
      }
    }
  }

  // --- trees ---------------------------------------------------------------
  var treeCount = Math.round(58 * Q.trees);
  for (var ti = 0; ti < treeCount; ti++) {
    var tx = x0 + rng() * CHUNK, tz = z0 + rng() * CHUNK;
    if (inLake(tx, tz, 6) || inLot(tx, tz, 4)) continue;
    var zn2 = zoneAt(tx, tz);
    var dens = 0.4;
    if (zn2) {
      if (zn2.type === 'park') dens = 1;
      else if (zn2.type.indexOf('res') === 0) dens = 0.55;
      else if (zn2.type === 'rural') dens = 0.3;
      else if (zn2.type === 'sports' || zn2.type === 'airport') dens = 0.03;
      else dens = 0.18;
    }
    if (rng() > dens) continue;
    var inf = nearestRoadInfo(tx, tz);
    if (inf.road && inf.d < 4) continue;
    trees.push({ x: tx, z: tz, s: 0.7 + rng() * 0.9, r: rng() * TAU, c: rng() });
  }

  // --- streetlights along lit roads ---------------------------------------
  var lightSpacing = 62;
  CITY.roads.forEach(function (r) {
    if (!r.lit) return;
    for (var i = 0; i < r.pts.length - 1; i++) {
      var ax = r.pts[i][0], az = r.pts[i][1], bx2 = r.pts[i + 1][0], bz2 = r.pts[i + 1][1];
      var len = Math.hypot(bx2 - ax, bz2 - az);
      if (len < 1) continue;
      var dx = (bx2 - ax) / len, dz = (bz2 - az) / len;
      var nx = -dz, nz = dx;                       // left-hand normal
      for (var k = 0; k * lightSpacing < len; k++) {
        var d0 = k * lightSpacing;
        var lx = ax + dx * d0, lz = az + dz * d0;
        if (lx < x0 || lx >= x0 + CHUNK || lz < z0 || lz >= z0 + CHUNK) continue;
        var sgn = (k % 2) ? 1 : -1;                // alternate kerbs
        var off = r.w / 2 + 2.4;
        lights.push({
          x: lx + nx * off * sgn, z: lz + nz * off * sgn,
          ax: -nx * sgn, az: -nz * sgn,            // arm points back over the road
          tall: !r.minor
        });
      }
    }
  });

  // --- assemble meshes -----------------------------------------------------
  var group = new T.Group();
  var matFor = {
    house: MATS.house, shingle: MATS.shingle, apartment: MATS.apartment, retail: MATS.retail,
    office: MATS.office, metal: MATS.metal, roofdeck: MATS.roofdeck, accent: MATS.accent,
    sign: MATS.sign, brick: MATS.brick, stucco: MATS.stucco
  };
  for (var k2 in out) {
    if (!out[k2].length) continue;
    var geo = mergeGeos(out[k2]);
    if (!geo.attributes.color && matFor[k2].vertexColors) paintGeo(geo, 0xffffff);
    var mesh = new T.Mesh(geo, matFor[k2]);
    mesh.castShadow = true; mesh.receiveShadow = true; mesh.matrixAutoUpdate = false;
    group.add(mesh);
  }

  if (trees.length) {
    var trunkG = new T.CylinderGeometry(0.19, 0.28, 3.4, 6);
    trunkG.translate(0, 1.7, 0);
    var foliageG = new T.IcosahedronGeometry(2.3, 0);
    foliageG.scale(1, 1.25, 1); foliageG.translate(0, 4.4, 0);
    var trunkM = new T.InstancedMesh(trunkG, MATS.trunk, trees.length);
    var leafM = new T.InstancedMesh(foliageG, MATS.leaf, trees.length);
    leafM.castShadow = true; trunkM.castShadow = true;
    var mtx = new T.Matrix4(), col = new T.Color();
    for (var i2 = 0; i2 < trees.length; i2++) {
      var tr = trees[i2];
      mtx.makeRotationY(tr.r);
      mtx.scale(new T.Vector3(tr.s, tr.s * (0.85 + tr.c * 0.5), tr.s));
      mtx.setPosition(tr.x, 0, tr.z);
      trunkM.setMatrixAt(i2, mtx); leafM.setMatrixAt(i2, mtx);
      col.setHSL(0.24 + tr.c * 0.07, 0.42 + tr.c * 0.2, 0.22 + tr.c * 0.12);
      if (T.ColorManagement && T.ColorManagement.enabled) col.convertSRGBToLinear();
      leafM.setColorAt(i2, col);
    }
    trunkM.instanceMatrix.needsUpdate = true; leafM.instanceMatrix.needsUpdate = true;
    if (leafM.instanceColor) leafM.instanceColor.needsUpdate = true;
    group.add(trunkM); group.add(leafM);
  }

  if (lights.length) {
    var poleGeos = [], headGeos = [], poolGeos = [];
    for (var li = 0; li < lights.length; li++) {
      var L = lights[li], hgt = L.tall ? 9.2 : 6.4, arm = L.tall ? 2.6 : 1.5;
      var p = new T.CylinderGeometry(0.11, 0.16, hgt, 6);
      p.translate(L.x, hgt / 2, L.z);
      poleGeos.push(p);
      var armRot = rotFromDir(L.ax, L.az);
      var hx = L.x + L.ax * arm, hz = L.z + L.az * arm;
      poleGeos.push(boxGeo(arm, 0.13, 0.13, L.x + L.ax * arm / 2, hgt - 0.25, L.z + L.az * arm / 2, armRot));
      headGeos.push(boxGeo(0.85, 0.24, 0.42, hx, hgt - 0.42, hz, armRot));
      poolGeos.push(hquad(hx, hz, 17, 17, 0.09, 0, 0));
    }
    var pm2 = new T.Mesh(mergeGeos(poleGeos), MATS.pole);
    pm2.castShadow = true; pm2.matrixAutoUpdate = false; group.add(pm2);
    var hm2 = new T.Mesh(mergeGeos(headGeos), MATS.lamp);
    hm2.matrixAutoUpdate = false; group.add(hm2);
    var pool = new T.Mesh(mergeGeos(poolGeos), MATS.pool);
    pool.matrixAutoUpdate = false; pool.renderOrder = 3; group.add(pool);
  }

  group.matrixAutoUpdate = false;
  return { group: group, cx: cx, cz: cz, x: x0 + CHUNK / 2, z: z0 + CHUNK / 2 };
}

var chunkBudget = 2;
function updateChunks(px, pz, force) {
  var r = Q.chunkRadius;
  var pcx = Math.floor(px / CHUNK), pcz = Math.floor(pz / CHUNK);
  var built = 0, budget = force ? 999 : chunkBudget;
  for (var i = -r; i <= r; i++) {
    for (var j = -r; j <= r; j++) {
      if (i * i + j * j > (r + 0.4) * (r + 0.4)) continue;
      var cx = pcx + i, cz = pcz + j;
      if (cx * CHUNK > WORLD.maxX || (cx + 1) * CHUNK < WORLD.minX) continue;
      if (cz * CHUNK > WORLD.maxZ || (cz + 1) * CHUNK < WORLD.minZ) continue;
      var key = chunkKey(cx, cz);
      var ch = CHUNKS[key];
      if (!ch) {
        if (built >= budget) continue;
        ch = buildChunk(cx, cz);
        CHUNKS[key] = ch;
        SCENE_ROOT.add(ch.group);
        built++;
      }
      ch.group.visible = true;
      ch.seen = 1;
    }
  }
  // Hide (but keep) chunks that fell out of range; drop the far ones if the
  // cache grows too large for the device.
  var keys = Object.keys(CHUNKS), far = [];
  for (var k = 0; k < keys.length; k++) {
    var c = CHUNKS[keys[k]];
    var d = Math.max(Math.abs(c.cx - pcx), Math.abs(c.cz - pcz));
    if (d > r) { c.group.visible = false; far.push({ k: keys[k], d: d, c: c }); }
  }
  var cap = IS_MOBILE ? 46 : 130;
  if (keys.length > cap) {
    far.sort(function (a, b) { return b.d - a.d; });
    for (var f = 0; f < far.length && keys.length - f > cap; f++) {
      disposeChunk(far[f].c);
      delete CHUNKS[far[f].k];
    }
  }
  return built;
}

function disposeChunk(ch) {
  SCENE_ROOT.remove(ch.group);
  ch.group.traverse(function (o) {
    if (o.geometry) o.geometry.dispose();
    if (o.isInstancedMesh) o.dispose();
  });
}

function buildWorld() {
  buildMaterials();
  buildRoads();
  buildBridges();
  buildGroundAndWater();
  buildLandmarks();
}
