// =============================================================================
// 10-city — the map of Blaine, Minnesota.
//
// Coordinate frame: X = east (metres), Z = south (metres), so north is -Z and a
// top-down view with -Z up matches a normal north-up map. The origin sits on
// I-35W at 85th Ave NE, the city's south-west corner.
//
// Blaine's grid is the real one: numbered avenues run east-west and climb
// northward (85th at the south line through 133rd at the Ham Lake border), one
// eighth of a mile apart; the arterials are placed in their true west-to-east
// order — I-35W on the west edge, University Ave, Ulysses St hugging the west
// side of Highway 65 / Central Ave, then Lexington Ave, the National Sports
// Center campus, Radisson Rd and Sunset Rd on the east side. Distances are
// scaled to the real spacings within a few percent.
// =============================================================================

var BLK = 201.17;                      // 1/8 mile — one Blaine block
function avZ(n) { return -(n - 85) * BLK; }   // avenue number -> world Z

var WORLD = { minX: -500, maxX: 6300, minZ: -10300, maxZ: 500 };
var LANE_W = 3.65;

// Road classes drive width, speed, markings, lighting and traffic density.
var ROAD_CLASS = {
  freeway:   { lanes: 3, speed: 30.0, median: 14, shoulder: 3.0, walk: false, lit: true,  minor: false },
  highway:   { lanes: 3, speed: 24.5, median: 7,  shoulder: 1.8, walk: true,  lit: true,  minor: false },
  arterial:  { lanes: 2, speed: 20.0, median: 3.5, shoulder: 1.2, walk: true, lit: true,  minor: false },
  collector: { lanes: 1, speed: 15.5, median: 0,  shoulder: 1.0, walk: true,  lit: true,  minor: false },
  local:     { lanes: 1, speed: 11.0, median: 0,  shoulder: 0.6, walk: true,  lit: false, minor: true },
  rural:     { lanes: 1, speed: 17.5, median: 0,  shoulder: 1.2, walk: false, lit: false, minor: true },
  ramp:      { lanes: 1, speed: 16.0, median: 0,  shoulder: 1.2, walk: false, lit: true,  minor: true },
  lot:       { lanes: 1, speed: 7.0,  median: 0,  shoulder: 0,   walk: false, lit: false, minor: true }
};

var CITY = {
  roads: [],       // {id,name,cls,pts,w,speed,...}
  lakes: [],       // {x,z,rx,rz,rot,name}
  zones: [],       // {x0,z0,x1,z1,type,density,name}
  lots: [],        // {x,z,w,d,rot} paved parking
  landmarks: [],   // {x,z,name,kind,r}
  places: [],      // {x,z,r,name} for the "you are here" HUD readout
  bridges: [],     // {x,z,w,d,axis,h} elevated deck over I-35W / Rice Creek
  creek: []        // polyline of Rice Creek
};

function road(name, cls, pts, opts) {
  var c = ROAD_CLASS[cls];
  var o = opts || {};
  var lanes = o.lanes || c.lanes;
  var median = o.median !== undefined ? o.median : c.median;
  var r = {
    id: CITY.roads.length,
    name: name,
    cls: cls,
    pts: pts,
    lanes: lanes,
    median: median,
    speed: o.speed || c.speed,
    walk: o.walk !== undefined ? o.walk : c.walk,
    lit: o.lit !== undefined ? o.lit : c.lit,
    minor: o.minor !== undefined ? o.minor : c.minor,
    shoulder: c.shoulder,
    w: lanes * 2 * LANE_W + median + c.shoulder * 2,
    noTraffic: !!o.noTraffic
  };
  CITY.roads.push(r);
  return r;
}
function ns(name, cls, x, z0, z1, opts) { return road(name, cls, [[x, z0], [x, z1]], opts); }
function ew(name, cls, z, x0, x1, opts) { return road(name, cls, [[x0, z], [x1, z]], opts); }

// --------------------------------------------------------------- arterial net
var X_I35W = 60, X_UNIV = 950, X_JEFF = 1620, X_LINC = 1990, X_ULYSSES = 2255,
    X_H65 = 2470, X_NAPLES = 2930, X_LEX = 3560, X_DAVEN = 4280, X_RADISSON = 4950,
    X_SUNSET = 5750;

function buildArterials() {
  // --- north-south -----------------------------------------------------------
  ns('I-35W', 'freeway', X_I35W, 500, -10300);
  ns('University Ave NE', 'arterial', X_UNIV, 300, -9900, { lanes: 2 });
  ns('Jefferson St NE', 'collector', X_JEFF, 200, -6600);
  ns('Lincoln St NE', 'collector', X_LINC, 200, -3300);
  ns('Ulysses St NE', 'collector', X_ULYSSES, -2750, -7450);   // Hwy 65 frontage
  ns('Central Ave NE / Hwy 65', 'highway', X_H65, 500, -10300);
  ns('Naples St NE', 'collector', X_NAPLES, -160, -5300);
  ns('Lexington Ave NE', 'arterial', X_LEX, 300, -9950, { lanes: 2 });
  ns('Davenport St NE', 'collector', X_DAVEN, -3020, -4900);   // NSC main entrance
  ns('Radisson Rd NE', 'arterial', X_RADISSON, -600, -9950);
  ns('Sunset Rd NE', 'collector', X_SUNSET, -1200, -9750);

  // --- east-west numbered avenues -------------------------------------------
  ew('85th Ave NE', 'arterial', avZ(85), -300, 4300, { lanes: 2 });
  ew('89th Ave NE', 'collector', avZ(89), 620, 3500);
  ew('93rd Ave NE', 'arterial', avZ(93), -300, 5300);
  ew('95th Ave NE', 'collector', avZ(95), 380, 3500);
  ew('99th Ave NE', 'arterial', avZ(99), -300, 5500);
  ew('101st Ave NE', 'collector', avZ(101), 620, 3500);
  ew('105th Ave NE', 'arterial', avZ(105), -300, 5700);        // National Sports Center
  ew('109th Ave NE', 'arterial', avZ(109), -300, 6050, { lanes: 2 });
  ew('113th Ave NE', 'collector', avZ(113), 620, 5300);
  ew('117th Ave NE', 'arterial', avZ(117), -300, 6050);
  ew('121st Ave NE / Paul Pkwy', 'collector', avZ(121), 620, 5300);
  ew('125th Ave NE', 'arterial', avZ(125), -300, 6050);
  ew('129th Ave NE', 'collector', avZ(129), 620, 5300);
  ew('133rd Ave NE', 'arterial', avZ(133), 200, 6050);

  // Highway 65 frontage road on the east side (the real one runs the same way)
  ns('Hwy 65 Frontage', 'local', X_H65 + 78, -2750, -7450, { lit: true });

  // --- I-35W diamond interchanges -------------------------------------------
  [85, 95, 105, 125].forEach(function (av) {
    var z = avZ(av), d = 210;
    // Loop/diagonal ramps either side of the freeway.
    road('Ramp', 'ramp', [[X_I35W - 26, z - d], [X_I35W - 60, z - d * 0.45], [X_I35W - 62, z + 40]]);
    road('Ramp', 'ramp', [[X_I35W - 62, z - 40], [X_I35W - 60, z + d * 0.45], [X_I35W - 26, z + d]]);
    road('Ramp', 'ramp', [[X_I35W + 26, z + d], [X_I35W + 60, z + d * 0.45], [X_I35W + 62, z - 40]]);
    road('Ramp', 'ramp', [[X_I35W + 62, z + 40], [X_I35W + 60, z - d * 0.45], [X_I35W + 26, z - d]]);
    CITY.bridges.push({ x: X_I35W, z: z, halfLen: 190, halfWid: 26, axis: 'x', h: 7.2 });
  });

  // --- civic / landmark service roads ---------------------------------------
  road('Town Square Dr NE', 'local', [[X_H65 + 150, avZ(109) - 30], [X_H65 + 150, avZ(109) - 240],
                                      [X_H65 + 560, avZ(109) - 240], [X_H65 + 560, avZ(109) - 30]], { lit: true });
  road('Northtown Dr NE', 'local', [[X_UNIV + 90, avZ(85) - 90], [X_UNIV + 700, avZ(85) - 90],
                                    [X_UNIV + 700, avZ(85) - 430], [X_UNIV + 90, avZ(85) - 430],
                                    [X_UNIV + 90, avZ(85) - 90]], { lit: true });
  road('NSC Campus Dr', 'local', [[X_DAVEN, avZ(105) + 40], [X_DAVEN + 380, avZ(105) + 40],
                                  [X_DAVEN + 380, avZ(103)], [X_LEX + 240, avZ(103)]], { lit: true });
  road('Aquatore Park Dr', 'local', [[X_LINC - 30, avZ(92)], [X_LINC + 330, avZ(92)],
                                     [X_LINC + 330, avZ(93) + 60]], { lit: true });
  road('Depot Rd NE', 'local', [[X_JEFF - 120, avZ(95)], [X_JEFF - 120, avZ(96) - 40]], { lit: true });
  road('Blaine HS Dr', 'local', [[X_UNIV + 70, avZ(125) - 60], [X_UNIV + 520, avZ(125) - 60],
                                 [X_UNIV + 520, avZ(126) - 90]], { lit: true });
  road('Airport Rd NE', 'local', [[X_NAPLES + 40, avZ(96)], [X_NAPLES + 620, avZ(96)]], { lit: true });
}

// ---------------------------------------------------------------- water & park
function buildWater() {
  // "The Lakes" — the master-planned north-east corner around Radisson Rd, plus
  // Laddie Lake (Blaine's only natural lake) and a spread of storm ponds.
  CITY.lakes.push({ x: 5180, z: avZ(126) - 90, rx: 470, rz: 330, rot: 0.22, name: 'Sunrise Lake' });
  CITY.lakes.push({ x: 4460, z: avZ(129) + 40, rx: 300, rz: 210, rot: -0.4, name: 'Lakes of Radisson' });
  CITY.lakes.push({ x: 3050, z: avZ(99) + 120, rx: 250, rz: 175, rot: 0.15, name: 'Laddie Lake' });
  CITY.lakes.push({ x: 2050, z: avZ(92) - 60, rx: 150, rz: 105, rot: 0, name: 'Aquatore Pond' });
  CITY.lakes.push({ x: 1290, z: avZ(115) + 80, rx: 190, rz: 130, rot: 0.5, name: 'Harvest Pond' });
  CITY.lakes.push({ x: 5450, z: avZ(112), rx: 210, rz: 150, rot: -0.2, name: 'Club West Lake' });
  CITY.lakes.push({ x: 900, z: avZ(103) - 70, rx: 130, rz: 95, rot: 0.3, name: 'Cloverleaf Pond' });

  // Shoreline roads + curvilinear subdivision loops around the Lakes area.
  road('Lakes Pkwy NE', 'collector', [
    [X_RADISSON + 60, avZ(127)], [4900, avZ(127) + 60], [5000, avZ(126) - 260],
    [5300, avZ(125) - 210], [5620, avZ(125) - 120], [5740, avZ(125) - 40]
  ], { lit: true });
  road('Lakeshore Dr NE', 'local', [
    [4720, avZ(126) - 90], [4790, avZ(127) + 30], [5100, avZ(127) - 40],
    [5480, avZ(127) - 10], [5640, avZ(126) - 60], [5590, avZ(125) - 250], [5210, avZ(125) - 300]
  ], { lit: true });
  road('Radisson Shores', 'local', [
    [4260, avZ(129) + 200], [4300, avZ(130)], [4620, avZ(130) - 40], [4820, avZ(129) - 30], [4790, avZ(128) - 60]
  ]);

  // Rice Creek — winds west-to-east across the north side, crossed by bridges.
  var creek = [];
  for (var x = -300; x <= 6100; x += 160) {
    var z = avZ(131) + Math.sin(x * 0.0016) * 165 + Math.cos(x * 0.0007) * 95;
    creek.push([x, z]);
  }
  CITY.creek = creek;
}

// ------------------------------------------------------------------- land use
function zone(x0, z0, x1, z1, type, density, name) {
  CITY.zones.push({
    x0: Math.min(x0, x1), z0: Math.min(z0, z1), x1: Math.max(x0, x1), z1: Math.max(z0, z1),
    type: type, density: density === undefined ? 1 : density, name: name || ''
  });
}
function lot(x, z, w, d, rot) { CITY.lots.push({ x: x, z: z, w: w, d: d, rot: rot || 0 }); }
function landmark(x, z, name, kind, r) { CITY.landmarks.push({ x: x, z: z, name: name, kind: kind, r: r || 120 }); }
function place(x, z, r, name) { CITY.places.push({ x: x, z: z, r: r, name: name }); }

function buildZones() {
  // ---- south Blaine: the oldest, densest housing (post-war starter homes) ---
  zone(180, avZ(85), 2380, avZ(93), 'res-dense', 1.0, 'South Blaine');
  zone(180, avZ(93), 2380, avZ(99), 'res-dense', 0.92, 'Central Blaine');
  zone(2560, avZ(85), 3400, avZ(93), 'res-med', 0.8, 'Eastside');
  zone(180, avZ(99), 2150, avZ(105), 'res-med', 0.85, 'Blaine');
  zone(2600, avZ(99), 3400, avZ(103), 'res-med', 0.7, 'Blaine');

  // ---- middle: 1990s-2000s subdivisions, looser lots ------------------------
  zone(180, avZ(105), 2150, avZ(113), 'res-med', 0.78, 'North Blaine');
  zone(2620, avZ(105), 3450, avZ(113), 'res-med', 0.68, 'Blaine');
  zone(3700, avZ(109), 4850, avZ(115), 'res-med', 0.6, 'Blaine');
  zone(180, avZ(113), 2150, avZ(121), 'res-sparse', 0.62, 'Northwest Blaine');
  zone(2620, avZ(113), 3450, avZ(121), 'res-sparse', 0.55, 'Blaine');
  zone(3700, avZ(115), 5600, avZ(123), 'res-sparse', 0.5, 'Blaine');

  // ---- north / north-east: newest subdivisions and rural edge ---------------
  zone(180, avZ(121), 2150, avZ(127), 'res-sparse', 0.42, 'North Blaine');
  zone(3800, avZ(123), 5700, avZ(129), 'res-sparse', 0.55, 'The Lakes');
  zone(2620, avZ(121), 3450, avZ(129), 'rural', 0.3, 'North Blaine');
  zone(180, avZ(127), 2150, avZ(133), 'rural', 0.22, 'Blaine — rural edge');
  zone(3800, avZ(129), 5900, avZ(133), 'rural', 0.22, 'Blaine — rural edge');
  zone(5100, avZ(105), 5900, avZ(117), 'rural', 0.3, 'East Blaine');

  // ---- commercial strips along the big avenues ------------------------------
  zone(X_H65 - 260, avZ(85), X_H65 + 260, avZ(133), 'strip', 1.0, 'Highway 65');
  zone(X_ULYSSES - 150, avZ(99), X_ULYSSES + 90, avZ(121), 'strip', 0.9, 'Ulysses St');
  zone(X_UNIV - 190, avZ(85), X_UNIV + 190, avZ(99), 'strip', 0.85, 'University Ave');
  zone(X_UNIV - 170, avZ(117), X_UNIV + 170, avZ(127), 'strip', 0.6, 'University Ave');
  zone(-260, avZ(109) - 150, 6050, avZ(109) + 150, 'strip', 0.55, '109th Ave');
  zone(X_LEX - 200, avZ(117), X_LEX + 200, avZ(127), 'strip', 0.7, 'Lexington Ave');
  zone(X_LEX - 180, avZ(93), X_LEX + 180, avZ(105), 'strip', 0.45, 'Lexington Ave');
  zone(X_RADISSON - 170, avZ(105), X_RADISSON + 170, avZ(117), 'strip', 0.45, 'Radisson Rd');

  // ---- big-box retail clusters ---------------------------------------------
  zone(X_H65 + 120, avZ(108) - 30, X_H65 + 780, avZ(111), 'bigbox', 1, 'Blaine Marketplace');
  zone(X_H65 - 800, avZ(124), X_H65 - 130, avZ(127), 'bigbox', 1, 'Village at Blaine');
  zone(X_LEX + 120, avZ(124) + 40, X_LEX + 820, avZ(127), 'bigbox', 1, 'Lexington Crossing');
  zone(X_UNIV + 60, avZ(85) - 40, X_UNIV + 760, avZ(88), 'mall', 1, 'Northtown');

  // ---- industrial / business park ------------------------------------------
  zone(1150, avZ(97), 1900, avZ(101), 'industrial', 1, 'Blaine Industrial Park');
  zone(X_LEX + 200, avZ(109) + 40, X_LEX + 900, avZ(112), 'industrial', 0.8, 'Business Park');
  zone(4300, avZ(85), 5400, avZ(91), 'industrial', 0.6, 'South Industrial');

  // ---- civic, schools, parks, the sports campus, the airport ---------------
  zone(X_H65 + 120, avZ(109) - 60, X_H65 + 620, avZ(111) - 40, 'civic', 1, 'Blaine City Hall');
  zone(X_UNIV + 60, avZ(125) - 40, X_UNIV + 640, avZ(128), 'school', 1, 'Blaine High School');
  zone(3660, avZ(101), 4900, avZ(109), 'sports', 1, 'National Sports Center');
  zone(2960, avZ(95), 4200, avZ(103), 'airport', 1, 'Anoka County–Blaine Airport');
  zone(1830, avZ(91), 2340, avZ(94), 'park', 1, 'Aquatore Park');
  zone(2820, avZ(98), 3300, avZ(101), 'park', 1, 'Laddie Lake Park');
  zone(1250, avZ(94) + 20, 1700, avZ(97), 'depot', 1, 'Blaine Depot');
  zone(4700, avZ(123), 5750, avZ(129), 'park', 0.6, 'The Lakes');
  zone(700, avZ(112), 1500, avZ(117), 'park', 0.7, 'Happy Acres Park');
  zone(4980, avZ(93), 5700, avZ(99), 'park', 0.5, 'Lochness Park');

  // ---- landmark markers (minimap labels + teleport targets) ----------------
  landmark(4280, avZ(104), 'National Sports Center', 'sports', 620);
  landmark(4180, avZ(103) - 90, 'NSC Velodrome', 'velodrome', 90);
  landmark(3980, avZ(103) + 60, 'TCO Stadium', 'stadium', 130);
  landmark(4560, avZ(102) - 60, 'Super Rink', 'rink', 150);
  landmark(X_UNIV + 330, avZ(126), 'Blaine High School', 'school', 260);
  landmark(X_UNIV + 400, avZ(86) - 90, 'Northtown Mall', 'mall', 300);
  landmark(X_H65 + 350, avZ(110), 'Blaine City Hall', 'civic', 190);
  landmark(2060, avZ(92) - 40, 'Aquatore Park', 'park', 220);
  landmark(1450, avZ(95) - 60, 'Blaine Depot', 'depot', 110);
  landmark(5180, avZ(126) - 90, 'Sunrise Lake', 'lake', 400);
  landmark(3050, avZ(99) + 120, 'Laddie Lake', 'lake', 240);
  landmark(3560, avZ(99), 'Anoka County–Blaine Airport', 'airport', 500);
  landmark(X_H65 + 420, avZ(109) + 60, 'Blaine Marketplace', 'shop', 260);
  landmark(X_LEX + 460, avZ(125) - 60, 'Lexington Crossing', 'shop', 260);

  // ---- HUD "you are here" regions -----------------------------------------
  place(1200, avZ(88), 1500, 'South Blaine');
  place(X_UNIV + 400, avZ(86), 700, 'Northtown');
  place(1500, avZ(96), 1200, 'Central Blaine');
  place(X_H65, avZ(105), 900, 'Highway 65 Corridor');
  place(X_H65 + 350, avZ(110), 800, 'Blaine Town Square');
  place(4280, avZ(105), 1000, 'National Sports Center');
  place(3560, avZ(99), 900, 'Anoka County Airport');
  place(X_UNIV + 300, avZ(126), 900, 'Blaine High School');
  place(5100, avZ(126), 1200, 'The Lakes');
  place(1200, avZ(124), 1400, 'North Blaine');
  place(X_LEX, avZ(120), 900, 'Lexington Ave');
  place(X_RADISSON, avZ(112), 900, 'Radisson Rd');
  place(300, avZ(105), 900, 'I-35W');
  place(3000, avZ(130), 2000, 'Rural Blaine');
}

// ----------------------------------------------------- local street generation
// Residential Blaine is a mix of the old rectilinear grid in the south and the
// looping, cul-de-sac subdivisions built north of 109th. Both are generated
// here so the neighbourhoods are drivable rather than scenery.
function buildLocalStreets() {
  var rng = mulberry32(99117);
  CITY.zones.forEach(function (z) {
    var grid = z.type === 'res-dense' ? 150 : z.type === 'res-med' ? 185 : z.type === 'res-sparse' ? 240 : 0;
    if (!grid) return;
    var w = z.x1 - z.x0, d = z.z1 - z.z0;
    if (w < 240 || d < 240) return;
    var loops = z.type === 'res-sparse' || (z.type === 'res-med' && rng() < 0.4);

    var nx = Math.max(1, Math.round(w / grid)), nz = Math.max(1, Math.round(d / grid));
    var i, j, x, zz;
    for (i = 1; i < nx; i++) {
      x = z.x0 + (w * i) / nx;
      if (loops && rng() < 0.45) continue;
      road('', 'local', [[x, z.z0 + 14], [x, z.z1 - 14]], { noTraffic: rng() < 0.35 });
    }
    for (j = 1; j < nz; j++) {
      zz = z.z0 + (d * j) / nz;
      if (loops && rng() < 0.3) continue;
      road('', 'local', [[z.x0 + 14, zz], [z.x1 - 14, zz]], { noTraffic: rng() < 0.35 });
    }
    // Curved loop streets and cul-de-sac stubs for the newer subdivisions.
    if (loops) {
      var loopCount = Math.max(1, Math.round((w * d) / 420000));
      for (i = 0; i < loopCount; i++) {
        var cx = z.x0 + 90 + rng() * (w - 180), cz = z.z0 + 90 + rng() * (d - 180);
        var rx = 60 + rng() * 90, rz = 55 + rng() * 80, pts = [];
        for (j = 0; j <= 12; j++) {
          var a = (j / 12) * TAU;
          pts.push([cx + Math.cos(a) * rx, cz + Math.sin(a) * rz]);
        }
        road('', 'local', pts, { noTraffic: true });
      }
      for (i = 0; i < loopCount * 2; i++) {
        var sx = z.x0 + 40 + rng() * (w - 80), sz = z.z0 + 40 + rng() * (d - 80);
        var ang = rng() * TAU, len = 60 + rng() * 70;
        road('', 'local', [[sx, sz], [sx + Math.cos(ang) * len, sz + Math.sin(ang) * len]], { noTraffic: true });
      }
    }
  });
}

// ---------------------------------------------------------- parking lot layout
function buildLots() {
  lot(X_UNIV + 400, avZ(86) - 90, 620, 320, 0);              // Northtown
  lot(X_UNIV + 400, avZ(87) - 70, 600, 180, 0);
  lot(X_H65 + 430, avZ(109) + 30, 560, 190, 0);              // Blaine Marketplace
  lot(X_H65 - 460, avZ(125) + 30, 520, 190, 0);              // Village at Blaine
  lot(X_LEX + 470, avZ(125) + 40, 540, 180, 0);              // Lexington Crossing
  lot(X_UNIV + 340, avZ(127) + 10, 420, 190, 0);             // Blaine High School
  lot(X_H65 + 360, avZ(110) - 90, 330, 120, 0);              // City Hall
  lot(4300, avZ(104) + 80, 620, 230, 0);                     // NSC main lots
  lot(4680, avZ(102) - 40, 380, 190, 0);
  lot(3900, avZ(102) + 60, 300, 170, 0);
  lot(2070, avZ(92) - 130, 200, 110, 0);                     // Aquatore Park
  lot(3400, avZ(97), 340, 150, 0);                           // airport apron
  lot(1450, avZ(95) - 110, 180, 100, 0);                     // depot / park & ride
}

// =============================================================================
// Road network graph — nodes at every intersection, directed edges with lanes,
// signals on the big crossings and stop signs where a minor street meets a
// major one. Traffic drives this graph.
// =============================================================================
var NET = { nodes: [], edges: [], signals: [], segIndex: null, segCell: 90 };

function segIntersect(ax, az, bx, bz, cx, cz, dx, dz) {
  var r1x = bx - ax, r1z = bz - az, r2x = dx - cx, r2z = dz - cz;
  var den = r1x * r2z - r1z * r2x;
  if (Math.abs(den) < 1e-9) return null;
  var t = ((cx - ax) * r2z - (cz - az) * r2x) / den;
  var u = ((cx - ax) * r1z - (cz - az) * r1x) / den;
  if (t < -0.001 || t > 1.001 || u < -0.001 || u > 1.001) return null;
  return { t: clamp01(t), u: clamp01(u), x: ax + r1x * t, z: az + r1z * t };
}

function nodeKey(x, z) { return (Math.round(x / 3) | 0) + '_' + (Math.round(z / 3) | 0); }

function buildNetwork() {
  var nodeMap = {};
  function getNode(x, z) {
    var k = nodeKey(x, z);
    var n = nodeMap[k];
    if (!n) {
      n = { id: NET.nodes.length, x: x, z: z, out: [], inc: [], signal: -1, major: 0 };
      nodeMap[k] = n; NET.nodes.push(n);
    }
    return n;
  }

  // Bucket every road segment for a cheap broad phase.
  var cells = {}, cs = 240;
  var segs = [];
  CITY.roads.forEach(function (r) {
    r._segs = [];
    for (var i = 0; i < r.pts.length - 1; i++) {
      var s = { r: r, i: i, idx: segs.length, ax: r.pts[i][0], az: r.pts[i][1], bx: r.pts[i + 1][0], bz: r.pts[i + 1][1], cuts: [] };
      segs.push(s); r._segs.push(s);
      var x0 = Math.min(s.ax, s.bx), x1 = Math.max(s.ax, s.bx);
      var z0 = Math.min(s.az, s.bz), z1 = Math.max(s.az, s.bz);
      for (var cx = Math.floor(x0 / cs); cx <= Math.floor(x1 / cs); cx++) {
        for (var cz = Math.floor(z0 / cs); cz <= Math.floor(z1 / cs); cz++) {
          var k = cx + ',' + cz;
          (cells[k] || (cells[k] = [])).push(s);
        }
      }
    }
  });

  // Pairwise intersections within each bucket.
  var seen = {};
  for (var key in cells) {
    var list = cells[key];
    for (var a = 0; a < list.length; a++) {
      for (var b = a + 1; b < list.length; b++) {
        var s1 = list[a], s2 = list[b];
        if (s1.r === s2.r) continue;
        var pk = Math.min(s1.idx, s2.idx) + ':' + Math.max(s1.idx, s2.idx);
        if (seen[pk]) continue; seen[pk] = 1;
        // Freeways only connect through ramps.
        if ((s1.r.cls === 'freeway') !== (s2.r.cls === 'freeway')) {
          if (s1.r.cls !== 'ramp' && s2.r.cls !== 'ramp') continue;
        }
        var hit = segIntersect(s1.ax, s1.az, s1.bx, s1.bz, s2.ax, s2.az, s2.bx, s2.bz);
        if (!hit) continue;
        s1.cuts.push({ t: hit.t, x: hit.x, z: hit.z });
        s2.cuts.push({ t: hit.u, x: hit.x, z: hit.z });
      }
    }
  }

  // Split each road into edges between consecutive nodes.
  CITY.roads.forEach(function (r) {
    var chain = [];
    for (var i = 0; i < r.pts.length - 1; i++) {
      var s = r._segs[i];
      chain.push({ x: r.pts[i][0], z: r.pts[i][1] });
      if (s && s.cuts.length) {
        s.cuts.sort(function (p, q) { return p.t - q.t; });
        for (var c = 0; c < s.cuts.length; c++) {
          var cut = s.cuts[c];
          if (dist(cut.x, cut.z, chain[chain.length - 1].x, chain[chain.length - 1].z) > 6) chain.push({ x: cut.x, z: cut.z });
        }
      }
    }
    chain.push({ x: r.pts[r.pts.length - 1][0], z: r.pts[r.pts.length - 1][1] });

    var prev = null;
    for (var j = 0; j < chain.length; j++) {
      var n = getNode(chain[j].x, chain[j].z);
      n.major = Math.max(n.major, r.minor ? 1 : (r.cls === 'freeway' ? 4 : (r.cls === 'highway' || r.cls === 'arterial' ? 3 : 2)));
      if (prev && prev !== n) {
        var len = dist(prev.x, prev.z, n.x, n.z);
        if (len > 8) addEdgePair(prev, n, r, len);
      }
      prev = n;
    }
  });

  function addEdgePair(n1, n2, r, len) {
    if (r.noTraffic) return;
    mk(n1, n2); mk(n2, n1);
    function mk(from, to) {
      var e = {
        id: NET.edges.length, from: from.id, to: to.id, road: r, len: len,
        dx: (to.x - from.x) / len, dz: (to.z - from.z) / len,
        lanes: r.lanes, speed: r.speed, cls: r.cls
      };
      NET.edges.push(e);
      from.out.push(e.id); to.inc.push(e.id);
    }
  }

  // Signals where two significant roads cross; stop control otherwise.
  NET.nodes.forEach(function (n) {
    if (n.out.length < 3) return;
    var majors = 0, hasArterial = false;
    for (var i = 0; i < n.out.length; i++) {
      var e = NET.edges[n.out[i]];
      if (e.cls === 'arterial' || e.cls === 'highway') { majors++; hasArterial = true; }
    }
    if (hasArterial && majors >= 3 && n.out.length >= 4) {
      n.signal = NET.signals.length;
      NET.signals.push({ node: n.id, phase: 0, t: rrange(0, 18), x: n.x, z: n.z });
    }
  });
}

// The lane centre offset for a given edge/lane index: traffic keeps right.
function laneOffset(edge, lane) {
  var r = edge.road;
  return r.median / 2 + LANE_W * (lane + 0.5);
}
function lanePoint(edge, lane, s, out) {
  var n = NET.nodes[edge.from], m = NET.nodes[edge.to];
  var px = -edge.dz, pz = edge.dx;          // right-hand normal
  var off = laneOffset(edge, lane);
  out.x = lerp(n.x, m.x, s) + px * off;
  out.z = lerp(n.z, m.z, s) + pz * off;
  return out;
}

// -------------------------------------------------- surface & position queries
// A coarse grid of road segments powers "what am I driving on?", respawns and
// pedestrian sidewalk placement.
function buildSurfaceIndex() {
  var cs = NET.segCell, idx = {};
  function add(k, item) { (idx[k] || (idx[k] = [])).push(item); }
  CITY.roads.forEach(function (r) {
    for (var i = 0; i < r.pts.length - 1; i++) {
      var ax = r.pts[i][0], az = r.pts[i][1], bx = r.pts[i + 1][0], bz = r.pts[i + 1][1];
      var seg = { ax: ax, az: az, bx: bx, bz: bz, hw: r.w / 2, r: r };
      var x0 = Math.min(ax, bx) - r.w, x1 = Math.max(ax, bx) + r.w;
      var z0 = Math.min(az, bz) - r.w, z1 = Math.max(az, bz) + r.w;
      for (var cx = Math.floor(x0 / cs); cx <= Math.floor(x1 / cs); cx++)
        for (var cz = Math.floor(z0 / cs); cz <= Math.floor(z1 / cs); cz++) add(cx + ',' + cz, seg);
    }
  });
  CITY.lots.forEach(function (L) {
    var seg = { lot: L, hw: 0 };
    for (var cx = Math.floor((L.x - L.w / 2) / cs); cx <= Math.floor((L.x + L.w / 2) / cs); cx++)
      for (var cz = Math.floor((L.z - L.d / 2) / cs); cz <= Math.floor((L.z + L.d / 2) / cs); cz++) add(cx + ',' + cz, seg);
  });
  NET.segIndex = idx;
}

function segDist(px, pz, ax, az, bx, bz) {
  var vx = bx - ax, vz = bz - az, wx = px - ax, wz = pz - az;
  var L = vx * vx + vz * vz;
  var t = L > 0 ? clamp01((wx * vx + wz * vz) / L) : 0;
  var qx = ax + vx * t, qz = az + vz * t;
  return { d: Math.hypot(px - qx, pz - qz), t: t, x: qx, z: qz };
}

// Returns {type:'asphalt'|'shoulder'|'grass'|'water', road, edgeDist}
var _surfRes = { type: 'grass', road: null, d: 999, onRoad: false };
function surfaceAt(px, pz) {
  var cs = NET.segCell;
  var best = 1e9, bestRoad = null, bestSeg = null;
  var cx = Math.floor(px / cs), cz = Math.floor(pz / cs);
  for (var i = -1; i <= 1; i++) {
    for (var j = -1; j <= 1; j++) {
      var list = NET.segIndex[(cx + i) + ',' + (cz + j)];
      if (!list) continue;
      for (var k = 0; k < list.length; k++) {
        var s = list[k];
        if (s.lot) {
          var L = s.lot;
          var dxl = Math.abs(px - L.x) - L.w / 2, dzl = Math.abs(pz - L.z) - L.d / 2;
          var dl = Math.max(dxl, dzl);
          if (dl < best) { best = dl; bestRoad = null; bestSeg = s; }
        } else {
          var r = segDist(px, pz, s.ax, s.az, s.bx, s.bz);
          var d = r.d - s.hw;
          if (d < best) { best = d; bestRoad = s.r; bestSeg = s; }
        }
      }
    }
  }
  _surfRes.d = best; _surfRes.road = bestRoad; _surfRes.onRoad = best <= 0;
  _surfRes.type = best <= 0 ? 'asphalt' : (best < 2.2 ? 'shoulder' : 'grass');
  // Open water is its own surface (you do not want to be here).
  for (var w = 0; w < CITY.lakes.length; w++) {
    var lk = CITY.lakes[w];
    var ca = Math.cos(-lk.rot), sa = Math.sin(-lk.rot);
    var lx = (px - lk.x) * ca - (pz - lk.z) * sa, lz = (px - lk.x) * sa + (pz - lk.z) * ca;
    if ((lx * lx) / (lk.rx * lk.rx) + (lz * lz) / (lk.rz * lk.rz) < 1) { _surfRes.type = 'water'; break; }
  }
  return _surfRes;
}

// Nearest drivable point + heading, used by respawn and traffic spawning.
function nearestRoadPose(px, pz, majorOnly) {
  var best = null, bestD = 1e9;
  for (var i = 0; i < NET.edges.length; i++) {
    var e = NET.edges[i];
    if (majorOnly && (e.road.minor || e.cls === 'freeway')) continue;
    var n = NET.nodes[e.from], m = NET.nodes[e.to];
    var r = segDist(px, pz, n.x, n.z, m.x, m.z);
    if (r.d < bestD) { bestD = r.d; best = { edge: e, t: r.t, x: r.x, z: r.z }; }
  }
  if (!best) return null;
  // Drop into the outside (kerb) lane — the natural place to be cruising.
  var e2 = best.edge, off = laneOffset(e2, e2.lanes - 1);
  var nx = -e2.dz, nz = e2.dx;
  // Vehicle meshes point along their local +Z, so a heading of atan2(dx, dz)
  // faces the direction the lane runs.
  return {
    x: best.x + nx * off, z: best.z + nz * off,
    heading: Math.atan2(e2.dx, e2.dz), edge: e2, t: best.t, dist: bestD
  };
}

function placeNameAt(px, pz) {
  var best = 'Blaine, MN', bestD = 1e9;
  for (var i = 0; i < CITY.places.length; i++) {
    var p = CITY.places[i], d = dist(px, pz, p.x, p.z);
    if (d < p.r && d < bestD) { bestD = d; best = p.name; }
  }
  return best;
}

// Bridge deck height (I-35W overpasses) — the only vertical relief in flat Blaine.
function roadHeightAt(px, pz) {
  for (var i = 0; i < CITY.bridges.length; i++) {
    var b = CITY.bridges[i];
    var dz = Math.abs(pz - b.z), dx = Math.abs(px - b.x);
    if (b.axis === 'x' && dz <= b.halfWid + 4 && dx <= b.halfLen) {
      var t = 1 - clamp01((dx - b.halfWid) / (b.halfLen - b.halfWid));
      return b.h * smoothstep(0, 1, t);
    }
  }
  return 0;
}

function buildCity() {
  buildArterials();
  buildWater();
  buildZones();
  buildLots();
  buildLocalStreets();
  buildNetwork();
  buildSurfaceIndex();
}
