// City plan shared by world generation, physics, traffic and the map.
//
// The city is a street grid on a 160 m pitch: 13 north-south avenues by 21 east-west
// streets, which is 240 blocks over 1.9 km x 3.2 km (ten times the original 24 blocks).
// The original town keeps its coordinates and sits on the west coast of the larger city.
// West is the ocean; hills ring the north, east and south.

export const GRID = 160;
const span = (from, to) => { const out = []; for (let v = from; v <= to; v += GRID) out.push(v); return out; };

export const roadsX = span(-320, 1600); // north-south avenues (constant x)
export const roadsZ = span(-1600, 1600); // east-west streets (constant z)
export const WEST = roadsX[0], EAST = roadsX[roadsX.length - 1];
export const NORTH = roadsZ[0], SOUTH = roadsZ[roadsZ.length - 1];
export const ROAD_HALF = 13; // curb line from the road center line
export const SIDEWALK = 6;
export const LANES = [3.4, 9.2]; // lane center offsets from the center line
export const SLAB_H = 0.16; // sidewalk/block height above asphalt

export const SHORE_X = -418; // where sand meets water
export const WATER_Y = -0.62;
export const PROMENADE = { from: -333, to: -342 };
export const BEACH_START = -357;

export const BOUNDS = { minX: -412, maxX: EAST + 32, minZ: NORTH - 76, maxZ: SOUTH + 76 };

export const blockCentersX = roadsX.slice(0, -1).map(x => x + GRID / 2);
export const blockCentersZ = roadsZ.slice(0, -1).map(z => z + GRID / 2);
export const BLOCK_SIZE = GRID - ROAD_HALF * 2; // slab including sidewalk ring

// Two piers: the original funfair pier, and a longer fishing pier up the coast.
export const PIER = { rampStart: -342, x0: -374, x1: -556, z: -160, halfWidth: 9, deckY: 2.6 };
export const PIERS = [PIER, { rampStart: -342, x0: -374, x1: -640, z: 1120, halfWidth: 7, deckY: 2.6, plain: true }];

// The pier a point is over (within its width and length), or null.
export function pierAt(x, z) {
  for (const p of PIERS) if (Math.abs(z - p.z) <= p.halfWidth && x <= p.rampStart && x >= p.x1) return p;
  return null;
}

// Height of the pier surface (ramp or deck) at x, or null when not over one.
export function pierHeight(x, z) {
  const p = pierAt(x, z);
  if (!p) return null;
  if (x > p.x0) return SLAB_H + (p.deckY - SLAB_H) * (p.rampStart - x) / (p.rampStart - p.x0);
  return p.deckY;
}

// Time trials. Checkpoints sit on road center lines; you pass within CHECKPOINT_RADIUS.
export const RACES = {
  sunset: {
    name: 'SUNSET RUN', blurb: 'The classic loop round the old town.',
    route: [[-320, 40], [-320, -300], [-170, -320], [-6, -320], [150, -320], [160, -10], [10, 160], [-300, 160]],
  },
  downtown: {
    name: 'DOWNTOWN DASH', blurb: 'A loop through the towers and back to the pier.',
    route: [
      [-320, -300], [10, -320], [330, -320], [630, -320], [640, -470], [640, -790], [950, -800],
      [960, -490], [960, -170], [650, -160], [330, -160], [10, -160], [-300, -160],
    ],
    start: { x: -320 + 3.4, z: 30, heading: 0 },
  },
  grand: {
    name: 'GRAND TOUR', blurb: 'The whole city, coast to foothills.',
    route: [
      [-320, 40], [-320, -620], [-320, -1270], [-310, -1600], [470, -1600], [1270, -1600], [1600, -1590], [1600, -810], [1600, -10],
      [1600, 790], [1600, 1590], [810, 1600], [10, 1600], [-320, 1590], [-320, 970], [-320, 420],
    ],
  },
};
export const route = RACES.sunset.route;
export const CHECKPOINT_RADIUS = 15;

// Bus stops sit mid-block on the sidewalk. side is which side of the road (+/-).
// The first twelve are the old town's; the rest follow the main avenues and streets.
export const BUS_STOPS = [
  { axis: 'ns', road: -160, s: -240, side: 1 }, { axis: 'ns', road: 0, s: -80, side: -1 }, { axis: 'ns', road: 160, s: 80, side: 1 },
  { axis: 'ns', road: 0, s: 400, side: 1 }, { axis: 'ns', road: -320, s: -400, side: 1 }, { axis: 'ns', road: 320, s: -240, side: -1 },
  { axis: 'ew', road: -320, s: -80, side: 1 }, { axis: 'ew', road: 0, s: 80, side: -1 }, { axis: 'ew', road: 160, s: -240, side: 1 },
  { axis: 'ew', road: 320, s: 240, side: -1 }, { axis: 'ew', road: -160, s: 240, side: 1 }, { axis: 'ew', road: 480, s: -80, side: -1 },
];
for (const road of [-320, 0, 640, 960, 1280, 1600]) {
  for (let k = 0, s = NORTH + 80 + (road === 0 ? 160 : 0); s < SOUTH; s += 480, k++) {
    if (Math.abs(s) < 520 && road <= 320) continue; // the old town has its own
    BUS_STOPS.push({ axis: 'ns', road, s, side: k % 2 ? 1 : -1 });
  }
}
for (const road of [-1280, -800, -480, 800, 1280]) {
  for (let k = 0, s = WEST + 240; s < EAST; s += 480, k++) {
    if (Math.abs(road) < 520 && s <= 320) continue;
    BUS_STOPS.push({ axis: 'ew', road, s, side: k % 2 ? -1 : 1 });
  }
}
export function busStopPos(b, offset = 15.4) {
  return b.axis === 'ns' ? [b.road + b.side * offset, b.s] : [b.s, b.road + b.side * offset];
}
export const spawn = { x: -320 + LANES[0], z: 246, heading: 0 };

const snapRoad = (v, first, last) => Math.min(Math.max(Math.round((v - first) / GRID) * GRID + first, first), last);
export const nearestRoadX = x => snapRoad(x, WEST, EAST);
export const nearestRoadZ = z => snapRoad(z, NORTH, SOUTH);
export function nearestRoad(list, v) {
  return list === roadsX ? nearestRoadX(v) : list === roadsZ ? nearestRoadZ(v) : list.reduce((a, b) => (Math.abs(b - v) < Math.abs(a - v) ? b : a));
}
// Center of the block a point is in (clamped to the grid).
export const blockCenterX = x => Math.min(Math.max(Math.floor((x - WEST) / GRID), 0), blockCentersX.length - 1) * GRID + WEST + GRID / 2;
export const blockCenterZ = z => Math.min(Math.max(Math.floor((z - NORTH) / GRID), 0), blockCentersZ.length - 1) * GRID + NORTH + GRID / 2;

// Ground surface the car is on, used for grip and height.
export function surfaceAt(x, z) {
  if (x < BEACH_START) return 'sand';
  if (x < PROMENADE.to) return 'grass';
  if (x < PROMENADE.from || x > EAST + ROAD_HALF || z < NORTH - ROAD_HALF || z > SOUTH + ROAD_HALF) return 'curb';
  if (Math.abs(x - nearestRoadX(x)) < ROAD_HALF || Math.abs(z - nearestRoadZ(z)) < ROAD_HALF) return 'road';
  return 'curb';
}

export function groundHeight(x) {
  if (x >= BEACH_START) return 0;
  // Sand slopes gently down to the waterline.
  return Math.max(-0.02 - (BEACH_START - x) * 0.0105, WATER_Y - 0.3);
}

// --- Districts ----------------------------------------------------------------
// key -> [name, neighbourhood, city noise 0..1, tree cover 0..1]
export const DISTRICTS = {
  ocean: ['OCEAN DRIVE', 'Vista Pacífica Beach', 0.3, 0.2],
  seaview: ['SEAVIEW', 'Coastal Quarter', 0.5, 0.2],
  downtown: ['DOWNTOWN', 'Financial District', 1, 0.2],
  palm: ['PALM DISTRICT', 'San Aurelio', 0.65, 0.6],
  southbank: ['SOUTHBANK', 'Harbor Heights', 0.4, 0.6],
  northshore: ['NORTHSHORE', 'Lighthouse Point', 0.35, 0.5],
  midtown: ['MIDTOWN', 'Alta Vista', 0.8, 0.3],
  laurel: ['LAUREL PARK', 'The Gardens', 0.35, 0.9],
  arts: ['ARTS DISTRICT', 'Cannery Row', 0.6, 0.3],
  port: ['PORT DISTRICT', 'Bayfront Docks', 0.55, 0.1],
  marina: ['MARINA', 'South Beach', 0.4, 0.3],
  eastside: ['EASTSIDE', 'Jacaranda Heights', 0.35, 0.8],
  foothills: ['FOOTHILLS', 'Ridgeline', 0.25, 0.8],
};

// District of the block centred on (cx, cz). The old town keeps its original names.
export function districtKey(cx, cz) {
  if (cx <= 320 && Math.abs(cz) <= 480) {
    if (cx < -170) return 'seaview';
    if (cx > 0 && cz < -20) return 'downtown';
    if (cz > 250) return 'southbank';
    return 'palm';
  }
  if (cx < -170) return cz < -480 ? 'northshore' : 'marina';
  if (cx > 1440) return 'foothills';
  if (cz < -1120) return 'northshore';
  if (cz > 1120) return 'port';
  if (cx > 1120) return 'eastside';
  if (cz <= -800) return 'midtown';
  if (cz < 0 && cx > 0) return 'downtown';
  if (cz > 640) return 'arts';
  if (cx > 480) return 'laurel'; // the garden quarter around Laurel Park
  return cz > 160 ? 'southbank' : 'palm';
}

export function districtAt(x, z) {
  if (x < -330) return DISTRICTS.ocean;
  return DISTRICTS[districtKey(blockCenterX(x), blockCenterZ(z))];
}

export const AVENUES = {
  '-320': 'Ocean Drive', '-160': 'Seaview Ave', '0': 'Aurelio Blvd', '160': 'Grand Ave', '320': 'Hillcrest Ave',
  '480': 'Mission Ave', '640': 'Centro Blvd', '800': 'Laurel Ave', '960': 'Vista Ave', '1120': 'Jacaranda Ave',
  '1280': 'Canyon Ave', '1440': 'Foothill Blvd', '1600': 'Ridgeline Dr',
};
export const STREETS = {
  '-1600': 'Northshore Rd', '-1440': 'Lighthouse St', '-1280': 'Coral St', '-1120': 'Mariposa St', '-960': 'Alta St',
  '-800': 'Dolores St', '-640': 'Cabrillo St', '-480': 'Marina St', '-320': 'Sunset Blvd', '-160': 'Pier Ave', '0': 'Palm St',
  '160': 'Harbor St', '320': 'Rosa St', '480': 'Southbank Rd', '640': 'Cannery St', '800': 'Dock St', '960': 'Foundry St',
  '1120': 'Depot St', '1280': 'Terminal St', '1440': 'Breakwater St', '1600': 'Bayfront Rd',
};

export function streetName(x, z) {
  const rx = nearestRoadX(x), rz = nearestRoadZ(z);
  if (Math.abs(x - rx) < ROAD_HALF + 3) return AVENUES[String(rx)];
  if (Math.abs(z - rz) < ROAD_HALF + 3) return STREETS[String(rz)];
  if (x < -330) return 'Beachfront';
  return 'Off road';
}
