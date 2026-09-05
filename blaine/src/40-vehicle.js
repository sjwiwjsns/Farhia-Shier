// =============================================================================
// 40-vehicle — vehicle dynamics and the four drivable cars.
//
// A single-track (bicycle) model with longitudinal load transfer and a
// simplified Pacejka tyre curve. Grip is the product of the tyre's own peak,
// the surface under the wheels and the weather, so a sports car that sticks in
// the dry genuinely lets go in the rain, and the pickup keeps working on grass.
// Body roll and pitch are driven by the same accelerations, and a vehicle whose
// static stability factor is exceeded in a turn will actually go over.
// =============================================================================

var G = 9.81;

var VEHICLE_TYPES = [
  {
    id: 'sedan', name: 'Sedan', tag: 'Balanced',
    desc: 'The default Blaine commuter. Front-wheel drive, forgiving, quick enough on Highway 65.',
    color: 0x2f6ea8, mass: 1520, a: 1.25, b: 1.42, track: 1.56, cgH: 0.55, izz: 2100,
    power: 118000, topSpeed: 58, brake: 13500, drive: 'fwd',
    gripF: 1.06, gripR: 1.10, steerMax: 0.60, drag: 0.72, roll: 12.5,
    offroad: 0.62, wetPenalty: 0.85, tyre: { B: 9.5, C: 1.55, D: 1.0 },
    gears: [3.5, 2.05, 1.42, 1.05, 0.82, 0.68], finalDrive: 3.9, redline: 6400,
    size: { w: 1.82, l: 4.62, h: 1.02, roof: 1.34, wheel: 0.33 },
    stats: { speed: 0.6, grip: 0.7, accel: 0.55, offroad: 0.4 }
  },
  {
    id: 'pickup', name: 'Pickup Truck', tag: 'Heavy · 4x4',
    desc: 'Half-ton four-by-four. Slow to wind up and it leans, but it will pull through the ditch and the snow.',
    color: 0x8a3b30, mass: 2450, a: 1.62, b: 1.78, track: 1.72, cgH: 0.78, izz: 4600,
    power: 165000, topSpeed: 50, brake: 16500, drive: 'awd',
    gripF: 0.94, gripR: 1.02, steerMax: 0.52, drag: 1.25, roll: 20,
    offroad: 0.92, wetPenalty: 0.90, tyre: { B: 7.6, C: 1.48, D: 0.96 },
    gears: [3.9, 2.3, 1.55, 1.12, 0.88, 0.70], finalDrive: 4.1, redline: 5200,
    size: { w: 2.02, l: 5.62, h: 1.24, roof: 1.46, wheel: 0.42 },
    stats: { speed: 0.45, grip: 0.5, accel: 0.45, offroad: 0.95 }
  },
  {
    id: 'sports', name: 'Sports Car', tag: 'Fast · Twitchy',
    desc: 'Mid-engine, rear drive, sticky summer tyres. Enormous speed and bite in the dry — and very little of either once the road is wet.',
    color: 0xd8b62e, mass: 1290, a: 1.24, b: 1.20, track: 1.66, cgH: 0.40, izz: 1500,
    power: 285000, topSpeed: 82, brake: 21000, drive: 'rwd',
    gripF: 1.32, gripR: 1.36, steerMax: 0.62, drag: 0.60, roll: 6,
    offroad: 0.34, wetPenalty: 0.58, tyre: { B: 13.5, C: 1.72, D: 1.05 },
    gears: [3.1, 2.0, 1.48, 1.14, 0.92, 0.76, 0.64], finalDrive: 3.6, redline: 8200,
    size: { w: 1.94, l: 4.42, h: 0.78, roof: 1.14, wheel: 0.34 },
    stats: { speed: 1.0, grip: 0.95, accel: 1.0, offroad: 0.15 }
  },
  {
    id: 'suv', name: 'SUV', tag: 'Tall · Tippy',
    desc: 'Three-row family hauler. Mid-range everything, but the centre of gravity is high — push it through a fast sweeper and it will go up on two wheels.',
    color: 0x3c4a55, mass: 2150, a: 1.44, b: 1.52, track: 1.62, cgH: 0.88, izz: 3600,
    power: 158000, topSpeed: 56, brake: 15000, drive: 'awd',
    gripF: 1.00, gripR: 1.04, steerMax: 0.56, drag: 1.05, roll: 24,
    offroad: 0.74, wetPenalty: 0.82, tyre: { B: 8.4, C: 1.50, D: 0.98 },
    gears: [3.7, 2.2, 1.5, 1.1, 0.86, 0.70], finalDrive: 3.8, redline: 5800,
    size: { w: 1.96, l: 4.92, h: 1.20, roof: 1.62, wheel: 0.39 },
    stats: { speed: 0.5, grip: 0.6, accel: 0.5, offroad: 0.7 }
  }
];

// --------------------------------------------------------------- vehicle mesh
var CAR_MATS = null;
function carMaterials() {
  if (CAR_MATS) return CAR_MATS;
  CAR_MATS = {
    body: new T.MeshPhysicalMaterial({
      color: 0xffffff, roughness: 0.28, metalness: 0.55, clearcoat: 0.85,
      clearcoatRoughness: 0.12, vertexColors: true, envMapIntensity: 1.4
    }),
    trim: new T.MeshStandardMaterial({ color: 0x22262b, roughness: 0.55, metalness: 0.3 }),
    glass: new T.MeshPhysicalMaterial({
      color: 0x0d1620, roughness: 0.06, metalness: 0.1, transparent: true, opacity: 0.62,
      envMapIntensity: 2.0
    }),
    tyre: new T.MeshStandardMaterial({ color: 0x14171a, roughness: 0.92, metalness: 0 }),
    rim: new T.MeshStandardMaterial({ color: 0xb9bec4, roughness: 0.3, metalness: 0.9 }),
    lightF: new T.MeshStandardMaterial({ color: 0xf2f4f8, emissive: 0xfff2d0, emissiveIntensity: 0, roughness: 0.2 }),
    lightR: new T.MeshStandardMaterial({ color: 0x5a1a16, emissive: 0xff2a12, emissiveIntensity: 0.2, roughness: 0.3 }),
    plate: new T.MeshStandardMaterial({ color: 0xdfe3e6, roughness: 0.7 })
  };
  return CAR_MATS;
}

function buildVehicleMesh(spec, colorHex, simple) {
  var M = carMaterials();
  var g = new T.Group();
  var s = spec.size, hw = s.w / 2, hl = s.l / 2;
  var bodyGeos = [], trimGeos = [], glassGeos = [];
  var ride = s.wheel + 0.12;

  function box(w, h, d, x, y, z, rot) { return boxGeo(w, h, d, x, y, z, rot || 0); }

  if (spec.id === 'pickup') {
    bodyGeos.push(box(s.w, s.h, s.l * 0.98, 0, ride + s.h / 2, 0));
    bodyGeos.push(box(s.w * 0.94, s.roof - s.h + 0.1, s.l * 0.36, 0, ride + s.h + (s.roof - s.h) / 2, hl * 0.16));
    glassGeos.push(box(s.w * 0.90, (s.roof - s.h) * 0.66, s.l * 0.33, 0, ride + s.h + (s.roof - s.h) * 0.55, hl * 0.16));
    // Bed walls.
    trimGeos.push(box(s.w * 0.96, 0.52, 0.12, 0, ride + s.h + 0.2, -hl * 0.94));
    trimGeos.push(box(0.12, 0.52, s.l * 0.42, -hw * 0.95, ride + s.h + 0.2, -hl * 0.52));
    trimGeos.push(box(0.12, 0.52, s.l * 0.42, hw * 0.95, ride + s.h + 0.2, -hl * 0.52));
  } else if (spec.id === 'sports') {
    bodyGeos.push(box(s.w, s.h, s.l, 0, ride + s.h / 2, 0));
    var nose = box(s.w * 0.86, s.h * 0.62, s.l * 0.3, 0, ride + s.h * 0.42, hl * 0.76);
    bodyGeos.push(nose);
    bodyGeos.push(box(s.w * 0.82, s.roof - s.h, s.l * 0.36, 0, ride + s.h + (s.roof - s.h) / 2, -hl * 0.06));
    glassGeos.push(box(s.w * 0.78, (s.roof - s.h) * 0.8, s.l * 0.34, 0, ride + s.h + (s.roof - s.h) * 0.52, -hl * 0.06));
    trimGeos.push(box(s.w * 0.9, 0.06, 0.34, 0, ride + s.h + 0.42, -hl * 0.94));  // wing
    trimGeos.push(box(0.08, 0.3, 0.3, -s.w * 0.38, ride + s.h + 0.26, -hl * 0.94));
    trimGeos.push(box(0.08, 0.3, 0.3, s.w * 0.38, ride + s.h + 0.26, -hl * 0.94));
  } else if (spec.id === 'suv') {
    bodyGeos.push(box(s.w, s.h, s.l, 0, ride + s.h / 2, 0));
    bodyGeos.push(box(s.w * 0.95, s.roof - s.h, s.l * 0.62, 0, ride + s.h + (s.roof - s.h) / 2, -hl * 0.08));
    glassGeos.push(box(s.w * 0.92, (s.roof - s.h) * 0.72, s.l * 0.60, 0, ride + s.h + (s.roof - s.h) * 0.55, -hl * 0.08));
    trimGeos.push(box(0.1, 0.08, s.l * 0.5, -s.w * 0.34, ride + s.roof + 0.04, -hl * 0.08));   // roof rails
    trimGeos.push(box(0.1, 0.08, s.l * 0.5, s.w * 0.34, ride + s.roof + 0.04, -hl * 0.08));
  } else {
    bodyGeos.push(box(s.w, s.h, s.l, 0, ride + s.h / 2, 0));
    bodyGeos.push(box(s.w * 0.9, s.roof - s.h, s.l * 0.48, 0, ride + s.h + (s.roof - s.h) / 2, -hl * 0.08));
    glassGeos.push(box(s.w * 0.87, (s.roof - s.h) * 0.74, s.l * 0.46, 0, ride + s.h + (s.roof - s.h) * 0.54, -hl * 0.08));
  }
  // Bumpers and mirrors.
  trimGeos.push(box(s.w * 1.01, 0.26, 0.22, 0, ride + 0.28, hl - 0.05));
  trimGeos.push(box(s.w * 1.01, 0.26, 0.22, 0, ride + 0.28, -hl + 0.05));
  if (!simple) {
    trimGeos.push(box(0.22, 0.11, 0.1, -hw - 0.08, ride + s.h + 0.16, hl * 0.28));
    trimGeos.push(box(0.22, 0.11, 0.1, hw + 0.08, ride + s.h + 0.16, hl * 0.28));
  }

  var bodyGeo = mergeGeos(bodyGeos);
  paintGeo(bodyGeo, colorHex === undefined ? spec.color : colorHex);
  var bodyMesh = new T.Mesh(bodyGeo, M.body);
  bodyMesh.castShadow = true; bodyMesh.receiveShadow = true;
  g.add(bodyMesh);
  var trimMesh = new T.Mesh(mergeGeos(trimGeos), M.trim);
  trimMesh.castShadow = !simple;
  g.add(trimMesh);
  var glassMesh = new T.Mesh(mergeGeos(glassGeos), M.glass);
  g.add(glassMesh);

  // Lights.
  var headGeos = [], tailGeos = [];
  [-1, 1].forEach(function (sd) {
    headGeos.push(box(0.34, 0.16, 0.08, sd * s.w * 0.33, ride + s.h * 0.72, hl + 0.01));
    tailGeos.push(box(0.32, 0.14, 0.08, sd * s.w * 0.34, ride + s.h * 0.74, -hl - 0.01));
  });
  // Each car owns its light materials so one driver braking does not light up
  // the whole city.
  var headMat = M.lightF.clone(), tailMat = M.lightR.clone();
  var head = new T.Mesh(mergeGeos(headGeos), headMat);
  var tail = new T.Mesh(mergeGeos(tailGeos), tailMat);
  g.add(head); g.add(tail);

  // Wheels.
  var wheels = [];
  var wr = s.wheel, ww = spec.id === 'sports' ? 0.30 : 0.26;
  var tyreG = new T.CylinderGeometry(wr, wr, ww, simple ? 8 : 14);
  tyreG.rotateZ(PI / 2);
  var rimG = new T.CylinderGeometry(wr * 0.58, wr * 0.58, ww + 0.02, simple ? 6 : 10);
  rimG.rotateZ(PI / 2);
  var spokeG = new T.BoxGeometry(ww * 0.4, wr * 1.05, 0.06);
  var positions = [
    [-s.w / 2 + ww * 0.35, spec.a], [s.w / 2 - ww * 0.35, spec.a],
    [-s.w / 2 + ww * 0.35, -spec.b], [s.w / 2 - ww * 0.35, -spec.b]
  ];
  for (var i = 0; i < 4; i++) {
    var wg = new T.Group();
    var tm = new T.Mesh(tyreG, M.tyre); tm.castShadow = !simple;
    var rm = new T.Mesh(rimG, M.rim);
    wg.add(tm); wg.add(rm);
    if (!simple) { var sp = new T.Mesh(spokeG, M.rim); wg.add(sp); }
    wg.position.set(positions[i][0], wr, positions[i][1]);
    g.add(wg);
    wheels.push(wg);
  }

  return {
    group: g, wheels: wheels, body: bodyMesh, head: head, tail: tail,
    headMat: headMat, tailMat: tailMat, ride: ride
  };
}

// ------------------------------------------------------------------- surfaces
var SURFACE_GRIP = { asphalt: 1.0, shoulder: 0.74, grass: 0.52, water: 0.30 };

// ------------------------------------------------------------------- the car
function Vehicle(spec, x, z, heading) {
  this.spec = spec;
  this.x = x; this.z = z; this.y = 0;
  this.yaw = heading || 0;
  this.vx = 0; this.vy = 0; this.r = 0;      // body-frame velocities, yaw rate
  this.speed = 0;
  this.steer = 0; this.steerCmd = 0;
  this.throttle = 0; this.brake = 0; this.handbrake = 0;
  this.gear = 1; this.rpm = 800; this.shiftTimer = 0;
  this.roll = 0; this.rollVel = 0; this.pitch = 0;
  this.rolledOver = 0;
  this.tipTimer = 0;
  this.latG = 0;
  this.wheelSpin = 0;
  this.slipFront = 0; this.slipRear = 0; this.skid = 0;
  this.surface = 'asphalt';
  this.grip = 1;
  this.impact = 0;
  this.airborne = 0;
  this.odometer = 0;
  this.headlights = false;
  this.build();
}

Vehicle.prototype.build = function () {
  if (this.mesh) {
    SCENE_ROOT.remove(this.mesh.group);
  }
  this.mesh = buildVehicleMesh(this.spec, this.color === undefined ? this.spec.color : this.color, false);
  SCENE_ROOT.add(this.mesh.group);
};

Vehicle.prototype.setType = function (spec) {
  this.spec = spec;
  this.vx = Math.min(this.vx, 10); this.vy = 0; this.r = 0;
  this.roll = 0; this.rolledOver = 0;
  this.build();
};

Vehicle.prototype.respawn = function (x, z, heading) {
  this.x = x; this.z = z; this.yaw = heading;
  this.vx = 0; this.vy = 0; this.r = 0; this.roll = 0; this.rollVel = 0;
  this.rolledOver = 0; this.pitch = 0; this.y = roadHeightAt(x, z);
  this.mesh.group.position.set(x, this.y, z);
  this.mesh.group.rotation.set(0, this.yaw, 0, 'YXZ');
  if (typeof CAMERA_STATE !== 'undefined') CAMERA_STATE.snap = true;
};

// Tyre lateral force (simplified Pacejka magic formula).
function tyreForce(slip, load, mu, tyre) {
  return -mu * load * tyre.D * Math.sin(tyre.C * Math.atan(tyre.B * slip));
}

Vehicle.prototype.update = function (dt, input) {
  var S = this.spec, L = S.a + S.b;

  // ---- driver inputs ------------------------------------------------------
  var speedAbs = Math.abs(this.vx);
  // Steering slows down with speed so the car does not become undriveable.
  var steerLimit = S.steerMax / (1 + speedAbs * (S.id === 'sports' ? 0.055 : 0.075));
  var steerRate = 3.4 + 4.0 / (1 + speedAbs * 0.12);
  this.steerCmd = input.steer * steerLimit;
  this.steer = damp(this.steer, this.steerCmd, steerRate, dt);
  this.throttle = input.throttle;
  this.brake = input.brake;
  this.handbrake = input.handbrake ? 1 : 0;

  // ---- what are we driving on? -------------------------------------------
  var surf = surfaceAt(this.x, this.z);
  this.surface = surf.type;
  var surfaceGrip = SURFACE_GRIP[surf.type] === undefined ? 0.6 : SURFACE_GRIP[surf.type];
  if (surf.type !== 'asphalt') surfaceGrip = lerp(surfaceGrip, surfaceGrip + (1 - surfaceGrip) * S.offroad, 1);
  var wxGrip = weatherGrip();
  // Wet roads punish soft summer tyres far more than truck tyres.
  var wet = WX.wetness;
  var tyreWet = lerp(1, S.wetPenalty, wet) * lerp(1, S.wetPenalty * 0.85, WX.snowCover);
  var mu = surfaceGrip * wxGrip * tyreWet;
  this.grip = mu;

  // ---- longitudinal forces ------------------------------------------------
  var v = Math.max(1.2, speedAbs);
  var driveForce = 0;
  if (this.throttle > 0 && !this.rolledOver) {
    var fMax = S.power / v;
    driveForce = Math.min(fMax, S.power / 6) * this.throttle;
    // Taper as we approach terminal velocity.
    driveForce *= clamp01(1 - speedAbs / S.topSpeed);
  }
  var reversing = this.vx < -0.3;
  if (this.brake > 0) {
    if (this.vx > 0.6) driveForce -= S.brake * this.brake;
    else if (this.vx > -S.topSpeed * 0.32) driveForce -= S.brake * 0.36 * this.brake;  // reverse gear
  }
  var dragF = -0.5 * 1.225 * S.drag * this.vx * speedAbs;
  var rollF = -S.roll * this.vx - (surf.type === 'grass' ? 260 : 0) * sign(this.vx);
  var Fx = driveForce + dragF + rollF;

  // ---- weight transfer ----------------------------------------------------
  var axEst = Fx / S.mass;
  var Fz = S.mass * G;
  var FzF = Math.max(60, Fz * S.b / L - S.mass * axEst * S.cgH / L);
  var FzR = Math.max(60, Fz * S.a / L + S.mass * axEst * S.cgH / L);

  // ---- slip angles and lateral forces ------------------------------------
  var vxs = Math.max(2.0, speedAbs);
  var slipF = Math.atan((this.vy + S.a * this.r) / vxs) - this.steer * sign(this.vx || 1);
  var slipR = Math.atan((this.vy - S.b * this.r) / vxs);
  this.slipFront = slipF; this.slipRear = slipR;

  var muF = mu * S.gripF, muR = mu * S.gripR;
  if (this.handbrake) muR *= 0.34;
  var FyF = tyreForce(slipF, FzF, muF, S.tyre);
  var FyR = tyreForce(slipR, FzR, muR, S.tyre);

  // Longitudinal load eats into the lateral budget (friction circle).
  var axleFx = { f: 0, r: 0 };
  if (S.drive === 'fwd') axleFx.f = driveForce; else if (S.drive === 'rwd') axleFx.r = driveForce;
  else { axleFx.f = driveForce * 0.45; axleFx.r = driveForce * 0.55; }
  if (this.brake > 0) { axleFx.f += (Fx - driveForce) * 0.6; axleFx.r += (Fx - driveForce) * 0.4; }
  if (this.handbrake && this.vx > 0.5) axleFx.r -= S.brake * 0.45;

  function limit(Fy, Fx2, load, m2) {
    var maxF = load * m2;
    var mag = Math.hypot(Fy, Fx2);
    return mag > maxF && mag > 1 ? Fy * (maxF / mag) : Fy;
  }
  FyF = limit(FyF, axleFx.f, FzF, muF);
  FyR = limit(FyR, axleFx.r, FzR, muR);

  // ---- rigid body integration --------------------------------------------
  var cosD = Math.cos(this.steer), sinD = Math.sin(this.steer);
  // Specific forces (what the driver and the tyres actually feel). The body
  // frame accelerations below add the centripetal terms on top of these; roll,
  // pitch and the rollover check must use the specific forces, otherwise they
  // vanish in steady-state cornering.
  var latAccel = (FyF * cosD + FyR) / S.mass;
  var longAccel = (Fx - FyF * sinD) / S.mass;
  var ax = longAccel + this.vy * this.r;
  var ay = latAccel - this.vx * this.r;
  var torque = S.a * (FyF * cosD) - S.b * FyR;
  var dr = torque / S.izz;

  // Below walking pace the tyre model is meaningless: blend to a kinematic
  // steering model so parking and creeping feel right.
  var kin = clamp01(1 - speedAbs / 3.2);
  if (kin > 0) {
    var kinR = (this.vx / L) * Math.tan(this.steer);
    this.r = lerp(this.r + dr * dt, kinR, kin);
    this.vy = lerp(this.vy + ay * dt, 0, kin);
  } else {
    this.r += dr * dt;
    this.vy += ay * dt;
  }
  this.vx += ax * dt;

  if (this.rolledOver > 0) {   // on its roof: scrub off speed fast
    this.vx *= Math.pow(0.25, dt); this.vy *= Math.pow(0.25, dt); this.r *= Math.pow(0.4, dt);
  }

  // Stop cleanly instead of jittering around zero.
  if (Math.abs(this.vx) < 0.14 && this.throttle < 0.02 && !reversing) this.vx *= 0.55;
  if (Math.abs(this.vy) < 0.02) this.vy = 0;

  this.yaw += this.r * dt;
  var fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
  var rx = Math.cos(this.yaw), rz = -Math.sin(this.yaw);
  var nx = this.x + (fx * this.vx + rx * this.vy) * dt;
  var nz = this.z + (fz * this.vx + rz * this.vy) * dt;
  this.x = nx; this.z = nz;
  this.speed = Math.hypot(this.vx, this.vy);
  this.odometer += this.speed * dt;

  // ---- vertical: bridges and kerbs ---------------------------------------
  var targetY = roadHeightAt(this.x, this.z);
  this.y = damp(this.y, targetY, 9, dt);

  // ---- body roll, pitch and the rollover check ---------------------------
  var latG = latAccel / G;
  var ssf = (S.track / 2) / S.cgH;          // static stability factor
  this.latG = latG;
  var rollTarget = clamp(-latG / Math.max(ssf, 0.6) * 0.30, -0.42, 0.42);
  this.rollVel += (rollTarget - this.roll) * 46 * dt;
  this.rollVel *= Math.pow(0.02, dt);
  this.roll += this.rollVel * dt;
  this.pitch = damp(this.pitch, clamp(-longAccel / G * 0.10, -0.10, 0.10), 8, dt);

  if (this.rolledOver > 0) {
    this.rolledOver -= dt;
    this.roll = damp(this.roll, sign(this.roll || 1) * 1.9, 3, dt);
    if (this.rolledOver <= 0) {
      this.roll = 0; this.rollVel = 0;
      this.pitch = 0;
      if (typeof toast === 'function') toast('Back on your wheels — take it easier through there');
    }
  } else {
    // Past the static stability factor the inside wheels unload; hold that for
    // a third of a second and the vehicle goes over. A low sports car can pull
    // more grip than it can tip with; a tall SUV cannot.
    if (Math.abs(latG) > ssf * 0.90 && this.speed > 11) this.tipTimer += dt;
    else this.tipTimer = Math.max(0, this.tipTimer - dt * 2.5);
    if (this.tipTimer > 0.3) {
      this.tipTimer = 0;
      this.rolledOver = 3.2;
      this.rollVel = sign(-latG) * 3.4;
      if (typeof toast === 'function') toast('Rollover! The ' + S.name + ' went over on its side');
      if (typeof playCrash === 'function') playCrash(0.8);
    }
  }

  // ---- gearbox (for the HUD and engine note) ------------------------------
  var wheelR = S.size.wheel;
  var ratios = S.gears;
  this.shiftTimer = Math.max(0, this.shiftTimer - dt);
  var wheelRPM = (speedAbs / (TAU * wheelR)) * 60;
  var idx = clamp(this.gear - 1, 0, ratios.length - 1);
  var rpm = wheelRPM * ratios[idx] * S.finalDrive;
  if (this.vx < -0.5) { this.gear = -1; rpm = wheelRPM * ratios[0] * S.finalDrive; }
  else {
    if (this.gear < 1) this.gear = 1;
    if (!this.shiftTimer) {
      if (rpm > S.redline * 0.92 && this.gear < ratios.length) { this.gear++; this.shiftTimer = 0.45; }
      else if (rpm < S.redline * 0.34 && this.gear > 1) { this.gear--; this.shiftTimer = 0.35; }
    }
  }
  this.rpm = damp(this.rpm, clamp(Math.max(rpm, 750) + this.throttle * 700, 700, S.redline * 1.02), 10, dt);

  // ---- skid / tyre squeal metric -----------------------------------------
  var slipMag = Math.max(Math.abs(slipF), Math.abs(slipR));
  var skidTarget = clamp01((slipMag - 0.13) * 3.4) * clamp01(this.speed / 6);
  if (this.handbrake && this.speed > 3) skidTarget = Math.max(skidTarget, 0.7);
  this.skid = damp(this.skid, skidTarget, 8, dt);

  // ---- visual transform ---------------------------------------------------
  var m = this.mesh;
  m.group.position.set(this.x, this.y, this.z);
  m.group.rotation.set(this.pitch, this.yaw, this.roll, 'YXZ');
  this.wheelSpin += (this.vx / wheelR) * dt;
  for (var i = 0; i < 4; i++) {
    var w = m.wheels[i];
    w.rotation.set(0, 0, 0);
    if (i < 2) w.rotation.y = -this.steer;
    w.rotation.x = this.wheelSpin;
    // Suspension travel: lean into the corner, squat under power.
    var sideSign = (i % 2 === 0) ? -1 : 1;
    var frontSign = (i < 2) ? 1 : -1;
    w.position.y = S.size.wheel + clamp(this.roll * sideSign * 0.22 + this.pitch * frontSign * 0.2, -0.09, 0.09);
  }
  m.tailMat.emissiveIntensity = this.brake > 0.05 ? 1.8 : (this.headlights ? 0.6 : 0.12);
  m.headMat.emissiveIntensity = this.headlights ? 2.4 : 0.0;
  this.impact = Math.max(0, this.impact - dt * 2.2);
};

// ------------------------------------------------------------------ collision
// 2D oriented-box overlap (separating axis) returning the smallest push-out.
var _axes = [];
function obbOverlap(ax, az, ahw, ahd, arot, bx, bz, bhw, bhd, brot) {
  var ac = Math.cos(arot), as = Math.sin(arot), bc = Math.cos(brot), bs = Math.sin(brot);
  var A = [[ac, -as], [as, ac]];            // a's axes in world (x-axis, z-axis)
  var B = [[bc, -bs], [bs, bc]];
  var dx = bx - ax, dz = bz - az;
  var minOverlap = 1e9, mtvX = 0, mtvZ = 0;
  var axesList = [A[0], A[1], B[0], B[1]];
  for (var i = 0; i < 4; i++) {
    var axx = axesList[i][0], axz = axesList[i][1];
    var ra = ahw * Math.abs(axx * A[0][0] + axz * A[0][1]) + ahd * Math.abs(axx * A[1][0] + axz * A[1][1]);
    var rb = bhw * Math.abs(axx * B[0][0] + axz * B[0][1]) + bhd * Math.abs(axx * B[1][0] + axz * B[1][1]);
    var d = dx * axx + dz * axz;
    var overlap = ra + rb - Math.abs(d);
    if (overlap <= 0) return null;
    if (overlap < minOverlap) {
      minOverlap = overlap;
      var sgn = d < 0 ? 1 : -1;
      mtvX = axx * sgn; mtvZ = axz * sgn;
    }
  }
  return { depth: minOverlap, nx: mtvX, nz: mtvZ };
}

var _colList = [];
Vehicle.prototype.collideWorld = function () {
  var S = this.spec, hw = S.size.w / 2, hl = S.size.l / 2;
  collidersNear(this.x, this.z, _colList);
  var hit = null;
  for (var i = 0; i < _colList.length; i++) {
    var c = _colList[i];
    if (this.y > c.h + 0.6) continue;                    // driving over it (bridge deck)
    var res = obbOverlap(this.x, this.z, hw, hl, this.yaw, c.x, c.z, c.hw, c.hd, c.rot);
    if (!res) continue;
    // Push out and bounce.
    this.x += res.nx * res.depth * 1.02;
    this.z += res.nz * res.depth * 1.02;
    var fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
    var rx = Math.cos(this.yaw), rz = -Math.sin(this.yaw);
    var vwx = fx * this.vx + rx * this.vy, vwz = fz * this.vx + rz * this.vy;
    var vn = vwx * res.nx + vwz * res.nz;
    if (vn < 0) {
      var e = 0.28;
      vwx -= (1 + e) * vn * res.nx;
      vwz -= (1 + e) * vn * res.nz;
      vwx *= 0.72; vwz *= 0.72;
      this.vx = vwx * fx + vwz * fz;
      this.vy = vwx * rx + vwz * rz;
      this.r *= 0.5;
      var force = Math.min(1, Math.abs(vn) / 16);
      if (force > this.impact) this.impact = force;
      hit = force;
    }
  }
  return hit;
};

// Vehicle-vs-vehicle: exchange a little momentum and shove them apart.
function collideVehicles(A, B) {
  var as = A.spec.size, bs = B.spec.size;
  var res = obbOverlap(A.x, A.z, as.w / 2, as.l / 2, A.yaw, B.x, B.z, bs.w / 2, bs.l / 2, B.yaw);
  if (!res) return 0;
  var ma = A.spec.mass, mb = B.mass || (B.spec ? B.spec.mass : 1500);
  var total = ma + mb;
  A.x += res.nx * res.depth * (mb / total);
  A.z += res.nz * res.depth * (mb / total);
  if (B.x !== undefined) {
    B.x -= res.nx * res.depth * (ma / total);
    B.z -= res.nz * res.depth * (ma / total);
  }
  var fx = Math.sin(A.yaw), fz = Math.cos(A.yaw);
  var rx = Math.cos(A.yaw), rz = -Math.sin(A.yaw);
  var vwx = fx * A.vx + rx * A.vy, vwz = fz * A.vx + rz * A.vy;
  var bvx = B.wvx || 0, bvz = B.wvz || 0;
  var relN = (vwx - bvx) * res.nx + (vwz - bvz) * res.nz;
  if (relN < 0) {
    var j = -(1.25) * relN * (mb / total);
    vwx += j * res.nx; vwz += j * res.nz;
    A.vx = vwx * fx + vwz * fz;
    A.vy = vwx * rx + vwz * rz;
    A.r += (Math.random() - 0.5) * 0.6;
    if (B.push) B.push(-j * res.nx * (ma / mb), -j * res.nz * (ma / mb));
    var f = Math.min(1, Math.abs(relN) / 14);
    if (f > A.impact) A.impact = f;
    return f;
  }
  return 0;
}
