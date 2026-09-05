// =============================================================================
// 50-traffic — AI vehicles, signalised intersections and pedestrians.
//
// Cars follow lane centrelines through the road graph, keep a gap to whatever
// is in front (a simple car-following law), stop for red lights and for stop
// signs on the minor approach, and give way to the player. Pedestrians walk the
// sidewalks and behave the way people in Minnesota actually do: when it starts
// raining they hurry off the street, and when it snows most of them simply are
// not out there.
// =============================================================================

var TRAFFIC = { cars: [], grid: {}, cell: 34, mesh: null };
var SIGNALS = { heads: [], lamps: [], group: null };
var PEDS = { list: [], mesh: null, count: 0, max: 0 };

var TRAFFIC_COLORS = [
  0xd8dde2, 0x2c3238, 0x8d949b, 0x8b1f22, 0x1f3f77, 0x2d5b3a,
  0xb9bcc0, 0x5a4632, 0xd8b62e, 0x7a2f5e, 0x2f6ea8, 0xe4e7ea
];

// --------------------------------------------------------------- signal masts
function buildSignals() {
  var poles = [], heads = [];
  NET.signals.forEach(function (sig) {
    var node = NET.nodes[sig.node];
    var reach = 6;
    for (var i = 0; i < node.out.length; i++) reach = Math.max(reach, NET.edges[node.out[i]].road.w * 0.5);
    for (var q = 0; q < 4; q++) {
      // A mast on each corner, with the head reaching over the stop line.
      var ang = q * (PI / 2) + PI / 4;
      var px = node.x + Math.cos(ang) * (reach + 2.5), pz = node.z + Math.sin(ang) * (reach + 2.5);
      var pole = new T.CylinderGeometry(0.12, 0.16, 6.4, 6);
      pole.translate(px, 3.2, pz);
      poles.push(pole);
      var toward = q * (PI / 2);
      var hx = node.x + Math.cos(toward) * (reach * 0.45), hz = node.z + Math.sin(toward) * (reach * 0.45);
      var armRot = rotFromDir(hx - px, hz - pz);
      var armLen = Math.hypot(hx - px, hz - pz);
      poles.push(boxGeo(armLen, 0.12, 0.12, (px + hx) / 2, 6.2, (pz + hz) / 2, armRot));
      poles.push(boxGeo(0.36, 1.15, 0.34, hx, 5.5, hz, armRot));
      // Is this approach a north-south one? (used to pick the phase)
      var isNS = Math.abs(Math.sin(toward)) > Math.abs(Math.cos(toward));
      heads.push({ x: hx, y: 5.5, z: hz, ns: isNS, sig: sig });
    }
  });
  if (!poles.length) return;
  var pm = new T.Mesh(mergeGeos(poles), MATS.pole);
  pm.castShadow = true; pm.matrixAutoUpdate = false;
  SCENE_ROOT.add(pm);

  // Lamps: three instanced meshes, scaled to zero when that aspect is dark.
  var lampGeo = new T.SphereGeometry(0.13, 8, 6);
  var mats = [MATS.signalRed, MATS.signalYel, MATS.signalGrn];
  SIGNALS.heads = heads;
  SIGNALS.lamps = [];
  for (var c = 0; c < 3; c++) {
    var im = new T.InstancedMesh(lampGeo, mats[c], heads.length);
    im.frustumCulled = false;
    SCENE_ROOT.add(im);
    SIGNALS.lamps.push(im);
  }
  updateSignalLamps(true);
}

// Phase 0: north-south green, 1: NS amber, 2: east-west green, 3: EW amber.
var SIGNAL_TIMING = [16, 3.4, 14, 3.4];
function updateSignals(dt) {
  for (var i = 0; i < NET.signals.length; i++) {
    var s = NET.signals[i];
    s.t += dt;
    if (s.t >= SIGNAL_TIMING[s.phase]) { s.t = 0; s.phase = (s.phase + 1) % 4; }
  }
}

var _mtx4 = new T.Matrix4(), _v3 = new T.Vector3(), _q4 = new T.Quaternion(), _sc = new T.Vector3();
function updateSignalLamps(force) {
  if (!SIGNALS.lamps.length) return;
  var heads = SIGNALS.heads;
  for (var i = 0; i < heads.length; i++) {
    var h = heads[i], ph = h.sig.phase;
    var green = h.ns ? ph === 0 : ph === 2;
    var amber = h.ns ? ph === 1 : ph === 3;
    var state = green ? 2 : (amber ? 1 : 0);
    for (var c = 0; c < 3; c++) {
      var on = (c === state);
      _v3.set(h.x, h.y + (c === 0 ? 0.36 : c === 1 ? 0 : -0.36), h.z);
      _sc.setScalar(on ? 1.35 : 0.55);
      _mtx4.compose(_v3, _q4, _sc);
      SIGNALS.lamps[c].setMatrixAt(i, _mtx4);
    }
  }
  for (var k = 0; k < 3; k++) SIGNALS.lamps[k].instanceMatrix.needsUpdate = true;
  MATS.signalRed.emissiveIntensity = 1.6;
  MATS.signalYel.emissiveIntensity = 1.6;
  MATS.signalGrn.emissiveIntensity = 1.6;
}

// Can a vehicle arriving on `edge` enter `node`?
function signalAllows(node, edge) {
  if (node.signal < 0) return true;
  var sig = NET.signals[node.signal];
  var isNS = Math.abs(edge.dz) > Math.abs(edge.dx);
  if (isNS) return sig.phase === 0 || (sig.phase === 1 && sig.t < 1.6);
  return sig.phase === 2 || (sig.phase === 3 && sig.t < 1.6);
}

// -------------------------------------------------------------------- AI cars
function TrafficCar(spec, color) {
  this.spec = spec;
  this.mass = spec.mass;
  this.x = 0; this.z = 0; this.y = 0; this.yaw = 0;
  this.speed = 0; this.target = 0;
  this.wvx = 0; this.wvz = 0;
  this.path = [];
  this.edge = null;
  this.lane = 0;
  this.personality = 0.85 + Math.random() * 0.3;
  this.stopTimer = 0;
  this.braking = 0;
  this.active = false;
  this.mesh = buildTrafficMesh(spec, color);
  this.group = this.mesh.group;
  this.group.visible = false;
  SCENE_ROOT.add(this.group);
}

// A cheap two-draw-call car: everything merged, plus a lights mesh.
function buildTrafficMesh(spec, color) {
  var built = buildVehicleMesh(spec, color, true);
  var geos = [], lightGeos = [];
  built.group.updateMatrixWorld(true);
  built.group.traverse(function (o) {
    if (!o.isMesh) return;
    var g = o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    if (o.material === built.headMat || o.material === built.tailMat) lightGeos.push(g);
    else {
      if (!g.attributes.color) {
        paintGeo(g, o.material.color ? '#' + o.material.color.getHexString() : 0x888888);
      }
      geos.push(g);
    }
  });
  built.group.traverse(function (o) { if (o.geometry) o.geometry.dispose(); });

  var body = new T.Mesh(mergeGeos(geos), carMaterials().body);
  body.castShadow = true;
  var lm = carMaterials().lightR.clone();
  var lights = new T.Mesh(mergeGeos(lightGeos), lm);
  var group = new T.Group();
  group.add(body); group.add(lights);
  return { group: group, lightMat: lm };
}

TrafficCar.prototype.push = function (dvx, dvz) {
  // Shoved by the player: convert the impulse into forward/lateral motion.
  var fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
  this.speed += (dvx * fx + dvz * fz) * 0.6;
  this.speed = clamp(this.speed, -4, 40);
  this.x += dvx * 0.03; this.z += dvz * 0.03;
};

TrafficCar.prototype.spawnAt = function (edge, s, lane) {
  this.edge = edge; this.lane = lane;
  this.path.length = 0;
  var p = { x: 0, z: 0 };
  lanePoint(edge, lane, s, p);
  this.x = p.x; this.z = p.z;
  this.yaw = Math.atan2(edge.dx, edge.dz);   // mesh forward is local +Z
  this.speed = edge.speed * 0.6;
  this.pathS = s;
  this.fillPath();
  this.active = true;
  this.group.visible = true;
};

// Walk the graph forward, laying down lane-centre waypoints.
TrafficCar.prototype.fillPath = function () {
  var guard = 0;
  while (this.path.length < 6 && guard++ < 24) {
    var e = this.edge;
    if (!e) return;
    var s = this.pathS === undefined ? 0 : this.pathS;
    var step = Math.max(0.12, 26 / Math.max(e.len, 26));
    var next = s + step;
    if (next >= 1) {
      // Cross the node and pick an onward edge (no U-turns unless forced).
      var node = NET.nodes[e.to];
      var p0 = lanePoint(e, this.lane, 1, { x: 0, z: 0 });
      this.path.push({ x: p0.x, z: p0.z, node: node, edge: e });
      var options = [];
      for (var i = 0; i < node.out.length; i++) {
        var cand = NET.edges[node.out[i]];
        if (cand.to === e.from && node.out.length > 1) continue;
        // Prefer staying on the same class of road so traffic keeps to arterials.
        var weight = cand.road === e.road ? 3.2 : (cand.road.minor ? 0.4 : 1.2);
        options.push([cand, weight]);
      }
      if (!options.length) { this.active = false; this.group.visible = false; return; }
      var total = 0, k;
      for (k = 0; k < options.length; k++) total += options[k][1];
      var r = Math.random() * total, chosen = options[0][0];
      for (k = 0; k < options.length; k++) { r -= options[k][1]; if (r <= 0) { chosen = options[k][0]; break; } }
      this.edge = chosen;
      this.lane = Math.min(chosen.lanes - 1, this.lane) | 0;
      this.pathS = 0.02;
      var p1 = lanePoint(chosen, this.lane, 0.02, { x: 0, z: 0 });
      this.path.push({ x: p1.x, z: p1.z, edge: chosen });
    } else {
      this.pathS = next;
      var p = lanePoint(e, this.lane, next, { x: 0, z: 0 });
      this.path.push({ x: p.x, z: p.z, edge: e, s: next });
    }
  }
};

TrafficCar.prototype.update = function (dt, player) {
  this.fillPath();
  var wp = this.path[0];
  if (!wp) { this.active = false; this.group.visible = false; return; }

  var dx = wp.x - this.x, dz = wp.z - this.z;
  var d = Math.hypot(dx, dz);
  if (d < 3.2) { this.path.shift(); wp = this.path[0]; if (!wp) return; dx = wp.x - this.x; dz = wp.z - this.z; d = Math.hypot(dx, dz) || 1; }

  var wantYaw = Math.atan2(dx, dz);
  var dy = wrapAngle(wantYaw - this.yaw);
  var turnRate = clamp(dy * 2.6, -1.6, 1.6);
  this.yaw += turnRate * dt * clamp01(this.speed / 3 + 0.25);

  var edge = wp.edge || this.edge;
  var desired = (edge ? edge.speed : 12) * this.personality;
  // Slow for the corner we are actually turning through.
  desired *= clamp(1 - Math.abs(dy) * 0.85, 0.32, 1);

  // --- red lights and stop signs ------------------------------------------
  var stopDist = 1e9;
  for (var i = 0; i < Math.min(this.path.length, 4); i++) {
    var w = this.path[i];
    if (!w.node) continue;
    var dn = Math.hypot(w.x - this.x, w.z - this.z);
    if (w.node.signal >= 0) {
      if (!signalAllows(w.node, w.edge)) stopDist = Math.min(stopDist, dn - 5.5);
    } else if (w.node.major >= 2 && w.edge && w.edge.road.minor && dn < 26) {
      if (this.stopTimer <= 0 && dn < 9 && this.speed < 1.2) this.stopTimer = 0.9;
      if (this.stopTimer > 0) { this.stopTimer -= dt; }
      else stopDist = Math.min(stopDist, dn - 5.5);
    }
    break;
  }

  // --- keep a gap to whatever is ahead ------------------------------------
  var lead = this.findLead(player);
  if (lead.dist < 60) {
    var gap = lead.dist - 6.5;
    var follow = lead.speed + gap * 0.55;
    desired = Math.min(desired, Math.max(0, follow));
  }
  if (stopDist < 1e8) {
    var sd = Math.max(0, stopDist);
    desired = Math.min(desired, sd < 1.5 ? 0 : Math.sqrt(2 * 3.2 * sd));
  }

  // Weather makes the AI cautious too.
  desired *= lerp(1, 0.62, clamp01(WX.rain + WX.snow * 1.2 + WX.fog * 0.7));

  var accel = desired > this.speed ? 3.4 : -7.0;
  this.speed += accel * dt * clamp01(Math.abs(desired - this.speed) * 1.2 + 0.15);
  this.speed = clamp(this.speed, 0, 42);
  this.braking = desired < this.speed - 0.6 ? 1 : 0;

  var fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
  this.x += fx * this.speed * dt;
  this.z += fz * this.speed * dt;
  this.wvx = fx * this.speed; this.wvz = fz * this.speed;
  this.y = damp(this.y, roadHeightAt(this.x, this.z), 8, dt);

  this.group.position.set(this.x, this.y, this.z);
  this.group.rotation.y = this.yaw;
  this.mesh.lightMat.emissiveIntensity = this.braking ? 1.8 : (ENV.headlights ? 0.7 : 0.12);
};

TrafficCar.prototype.findLead = function (player) {
  var best = { dist: 1e9, speed: 0 };
  var fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
  var cx = Math.floor(this.x / TRAFFIC.cell), cz = Math.floor(this.z / TRAFFIC.cell);
  for (var i = -2; i <= 2; i++) {
    for (var j = -2; j <= 2; j++) {
      var list = TRAFFIC.grid[(cx + i) + ',' + (cz + j)];
      if (!list) continue;
      for (var k = 0; k < list.length; k++) {
        var o = list[k];
        if (o === this) continue;
        var dx = o.x - this.x, dz = o.z - this.z;
        var along = dx * fx + dz * fz;
        if (along <= 0.2) continue;
        var lat = Math.abs(dx * fz - dz * fx);
        if (lat > 2.6) continue;
        if (along < best.dist) { best.dist = along; best.speed = o.speed || 0; }
      }
    }
  }
  if (player) {
    var pdx = player.x - this.x, pdz = player.z - this.z;
    var pa = pdx * fx + pdz * fz, pl = Math.abs(pdx * fz - pdz * fx);
    if (pa > 0.2 && pl < 2.8 && pa < best.dist) { best.dist = pa; best.speed = Math.max(0, player.vx); }
  }
  return best;
};

function initTraffic() {
  var count = Q.aiCars;
  for (var i = 0; i < count; i++) {
    var spec = VEHICLE_TYPES[(Math.random() * VEHICLE_TYPES.length) | 0];
    var col = TRAFFIC_COLORS[(Math.random() * TRAFFIC_COLORS.length) | 0];
    TRAFFIC.cars.push(new TrafficCar(spec, col));
  }
  buildSignals();
}

// Spawn on a road near, but preferably not right in front of, the player.
function spawnTrafficNear(car, px, pz, minR, maxR) {
  for (var attempt = 0; attempt < 24; attempt++) {
    var e = NET.edges[(Math.random() * NET.edges.length) | 0];
    if (!e || e.road.minor && Math.random() < 0.75) continue;
    var n = NET.nodes[e.from];
    var d = dist(n.x, n.z, px, pz);
    if (d < minR || d > maxR) continue;
    var lane = (Math.random() * e.lanes) | 0;
    car.spawnAt(e, Math.random() * 0.8 + 0.1, lane);
    return true;
  }
  return false;
}

function updateTraffic(dt, player) {
  updateSignals(dt);
  updateSignalLamps();

  // Rebuild the neighbour grid once per frame.
  TRAFFIC.grid = {};
  var i, c;
  for (i = 0; i < TRAFFIC.cars.length; i++) {
    c = TRAFFIC.cars[i];
    if (!c.active) continue;
    var k = Math.floor(c.x / TRAFFIC.cell) + ',' + Math.floor(c.z / TRAFFIC.cell);
    (TRAFFIC.grid[k] || (TRAFFIC.grid[k] = [])).push(c);
  }

  var far = Q.drawDistance + 260;
  for (i = 0; i < TRAFFIC.cars.length; i++) {
    c = TRAFFIC.cars[i];
    if (!c.active) { spawnTrafficNear(c, player.x, player.z, 90, Q.drawDistance * 0.8); continue; }
    var d = dist(c.x, c.z, player.x, player.z);
    if (d > far) {
      c.active = false; c.group.visible = false;
      spawnTrafficNear(c, player.x, player.z, 120, Q.drawDistance * 0.75);
      continue;
    }
    c.update(dt, player);
    if (d < 26) collideVehicles(player, c);
  }
}

// ---------------------------------------------------------------- pedestrians
function buildPedGeometry() {
  var parts = [];
  parts.push(boxGeo(0.42, 0.62, 0.26, 0, 1.18, 0, 0));       // torso
  parts.push(boxGeo(0.22, 0.24, 0.22, 0, 1.62, 0, 0));       // head
  parts.push(boxGeo(0.14, 0.52, 0.16, -0.13, 0.56, 0, 0));   // legs
  parts.push(boxGeo(0.14, 0.52, 0.16, 0.13, 0.56, 0, 0));
  parts.push(boxGeo(0.12, 0.46, 0.14, -0.27, 1.16, 0, 0));   // arms
  parts.push(boxGeo(0.12, 0.46, 0.14, 0.27, 1.16, 0, 0));
  var g = mergeGeos(parts);
  paintGeo(g, 0xffffff);
  return g;
}

function initPeds() {
  PEDS.max = Q.peds;
  var geo = buildPedGeometry();
  var mat = new T.MeshStandardMaterial({ roughness: 0.85, metalness: 0, vertexColors: true });
  PEDS.mesh = new T.InstancedMesh(geo, mat, PEDS.max);
  PEDS.mesh.castShadow = true;
  PEDS.mesh.frustumCulled = false;
  PEDS.mesh.count = 0;
  SCENE_ROOT.add(PEDS.mesh);
  for (var i = 0; i < PEDS.max; i++) {
    PEDS.list.push({
      x: 0, z: 0, yaw: 0, speed: 1.3, phase: Math.random() * TAU,
      active: false, tx: 0, tz: 0, shelter: false, hue: Math.random(), life: 0
    });
  }
}

function pedTargetCount() {
  // Rain empties the sidewalks; snow empties them further.
  var f = 1 - clamp01(WX.rain * 0.75 + WX.snow * 0.85 + WX.fog * 0.25);
  // Fewer people about in the small hours.
  var hour = ENV.time;
  var tod = hour < 5.5 || hour > 22.5 ? 0.18 : (hour < 7.5 || hour > 20.5 ? 0.55 : 1);
  return Math.round(PEDS.max * clamp01(f) * tod);
}

// Find a sidewalk spot: offset from a walkable street in a populated zone.
function findSidewalkSpot(px, pz, minR, maxR) {
  for (var a = 0; a < 20; a++) {
    var ang = Math.random() * TAU, rad = minR + Math.random() * (maxR - minR);
    var sx = px + Math.cos(ang) * rad, sz = pz + Math.sin(ang) * rad;
    var zn = zoneAt(sx, sz);
    if (!zn) continue;
    if (zn.type !== 'strip' && zn.type.indexOf('res') !== 0 && zn.type !== 'civic' && zn.type !== 'mall') continue;
    var info = nearestRoadInfo(sx, sz);
    if (!info.road || !info.road.walk) continue;
    var side = Math.random() < 0.5 ? 1 : -1;
    var off = info.hw + 1.7;
    return {
      x: info.cx + (-info.dz) * off * side,
      z: info.cz + (info.dx) * off * side,
      dx: info.dx, dz: info.dz
    };
  }
  return null;
}

function updatePeds(dt, px, pz) {
  if (!PEDS.mesh) return;
  var want = pedTargetCount();
  var alive = 0, i, p;
  var far = Math.min(Q.drawDistance, 340);
  var col = new T.Color();

  for (i = 0; i < PEDS.list.length; i++) {
    p = PEDS.list[i];
    if (!p.active) continue;
    var d = dist(p.x, p.z, px, pz);
    if (d > far + 90) { p.active = false; continue; }

    // Caught in the rain: make for the nearest building and disappear inside.
    var wantShelter = WX.rain > 0.28 || WX.snow > 0.4;
    if (wantShelter && !p.shelter) { p.shelter = true; p.speed = 2.4 + Math.random() * 0.8; }
    if (!wantShelter && p.shelter) { p.shelter = false; p.speed = 1.1 + Math.random() * 0.6; }

    var tdx = p.tx - p.x, tdz = p.tz - p.z;
    var td = Math.hypot(tdx, tdz);
    if (td < 1.6) {
      if (p.shelter) { p.active = false; continue; }       // ducked indoors
      var spot = findSidewalkSpot(p.x, p.z, 24, 90);
      if (spot) { p.tx = spot.x; p.tz = spot.z; } else { p.active = false; continue; }
      tdx = p.tx - p.x; tdz = p.tz - p.z; td = Math.hypot(tdx, tdz) || 1;
    }
    var wantYaw = Math.atan2(tdx, tdz);
    p.yaw += wrapAngle(wantYaw - p.yaw) * Math.min(1, dt * 6);
    var sp = p.speed * (p.shelter ? 1.5 : 1);
    p.x += (tdx / td) * sp * dt;
    p.z += (tdz / td) * sp * dt;
    p.phase += dt * sp * 3.4;
    alive++;
  }

  // Top up toward the target population.
  if (alive < want) {
    for (i = 0; i < PEDS.list.length && alive < want; i++) {
      p = PEDS.list[i];
      if (p.active) continue;
      var spot2 = findSidewalkSpot(px, pz, 40, Math.min(far, 260));
      if (!spot2) break;
      p.x = spot2.x; p.z = spot2.z; p.active = true; p.shelter = false;
      p.speed = 1.1 + Math.random() * 0.6;
      p.hue = Math.random();
      var t2 = findSidewalkSpot(spot2.x, spot2.z, 25, 90);
      p.tx = t2 ? t2.x : spot2.x + 20; p.tz = t2 ? t2.z : spot2.z;
      p.yaw = Math.atan2(p.tx - p.x, p.tz - p.z);
      alive++;
    }
  }

  // Write the instance transforms.
  var n = 0;
  for (i = 0; i < PEDS.list.length; i++) {
    p = PEDS.list[i];
    if (!p.active) continue;
    var bob = Math.sin(p.phase) * 0.055;
    var sway = Math.sin(p.phase * 0.5) * 0.06;
    _v3.set(p.x, bob + (p.shelter ? -0.02 : 0), p.z);
    _q4.setFromEuler(new T.Euler(sway * 0.5, p.yaw, sway, 'YXZ'));
    _sc.set(1, 0.92 + Math.abs(Math.cos(p.phase)) * 0.08, 1);
    _mtx4.compose(_v3, _q4, _sc);
    PEDS.mesh.setMatrixAt(n, _mtx4);
    col.setHSL(p.hue, 0.35, 0.28 + p.hue * 0.25);
    if (T.ColorManagement && T.ColorManagement.enabled) col.convertSRGBToLinear();
    PEDS.mesh.setColorAt(n, col);
    n++;
  }
  PEDS.mesh.count = n;
  PEDS.mesh.instanceMatrix.needsUpdate = true;
  if (PEDS.mesh.instanceColor) PEDS.mesh.instanceColor.needsUpdate = true;
  PEDS.count = n;
}
