// City plan shared by world generation, physics, traffic and the map.

export const roadsX = [-320, -160, 0, 160, 320]; // north-south avenues (constant x)
export const roadsZ = [-480, -320, -160, 0, 160, 320, 480]; // east-west streets (constant z)
export const ROAD_HALF = 13; // curb line from the road center line
export const SIDEWALK = 6;
export const LANES = [3.4, 9.2]; // lane center offsets from the center line
export const SLAB_H = 0.16; // sidewalk/block height above asphalt

export const SHORE_X = -418; // where sand meets water
export const WATER_Y = -0.62;
export const PROMENADE = { from: -333, to: -342 };
export const BEACH_START = -357;

export const BOUNDS = { minX: -412, maxX: 352, minZ: -556, maxZ: 556 };

export const blockCentersX = [-240, -80, 80, 240];
export const blockCentersZ = [-400, -240, -80, 80, 240, 400];
export const BLOCK_SIZE = 160 - ROAD_HALF * 2; // slab including sidewalk ring

export const PIER = { rampStart: -342, x0: -374, x1: -556, z: -160, halfWidth: 9, deckY: 2.6 };

// Height of the pier surface (ramp or deck) at x, or null when not over it.
export function pierHeight(x, z) {
  if (Math.abs(z - PIER.z) > PIER.halfWidth || x > PIER.rampStart || x < PIER.x1) return null;
  if (x > PIER.x0) return SLAB_H + (PIER.deckY - SLAB_H) * (PIER.rampStart - x) / (PIER.rampStart - PIER.x0);
  return PIER.deckY;
}

// Checkpoints sit on road center lines; you pass within CHECKPOINT_RADIUS.
export const route = [
  [-320, 40], [-320, -300], [-170, -320], [-6, -320], [150, -320],
  [160, -10], [10, 160], [-300, 160],
];
export const CHECKPOINT_RADIUS = 15;

// Bus stops sit mid-block on the sidewalk. side is which side of the road (+/-).
export const BUS_STOPS = [
  { axis: 'ns', road: -160, s: -240, side: 1 }, { axis: 'ns', road: 0, s: -80, side: -1 }, { axis: 'ns', road: 160, s: 80, side: 1 },
  { axis: 'ns', road: 0, s: 400, side: 1 }, { axis: 'ns', road: -320, s: -400, side: 1 }, { axis: 'ns', road: 320, s: -240, side: -1 },
  { axis: 'ew', road: -320, s: -80, side: 1 }, { axis: 'ew', road: 0, s: 80, side: -1 }, { axis: 'ew', road: 160, s: -240, side: 1 },
  { axis: 'ew', road: 320, s: 240, side: -1 }, { axis: 'ew', road: -160, s: 240, side: 1 }, { axis: 'ew', road: 480, s: -80, side: -1 },
];
export function busStopPos(b, offset = 15.4) {
  return b.axis === 'ns' ? [b.road + b.side * offset, b.s] : [b.s, b.road + b.side * offset];
}
export const spawn = { x: -320 + LANES[0], z: 246, heading: 0 };

export function nearestRoad(list, v) {
  let best = list[0];
  for (const r of list) if (Math.abs(r - v) < Math.abs(best - v)) best = r;
  return best;
}

// Ground surface the car is on, used for grip and height.
export function surfaceAt(x, z) {
  if (x < BEACH_START) return 'sand';
  if (x < PROMENADE.to) return 'grass';
  if (x < PROMENADE.from || x > roadsX[roadsX.length - 1] + ROAD_HALF || Math.abs(z) > roadsZ[roadsZ.length - 1] + ROAD_HALF) return 'curb';
  const onRoadX = Math.abs(x - nearestRoad(roadsX, x)) < ROAD_HALF;
  const onRoadZ = Math.abs(z - nearestRoad(roadsZ, z)) < ROAD_HALF;
  if (onRoadX || onRoadZ) return 'road';
  return 'curb';
}

export function groundHeight(x) {
  if (x >= BEACH_START) return 0;
  // Sand slopes gently down to the waterline.
  return Math.max(-0.02 - (BEACH_START - x) * 0.0105, WATER_Y - 0.3);
}

export function districtAt(x, z) {
  if (x < -330) return ['OCEAN DRIVE', 'Vista Pacífica Beach'];
  if (x < -170) return ['SEAVIEW', 'Coastal Quarter'];
  if (x > 0 && z < -20) return ['DOWNTOWN', 'Financial District'];
  if (z > 250) return ['SOUTHBANK', 'Harbor Heights'];
  return ['PALM DISTRICT', 'San Aurelio'];
}

export function streetName(x, z) {
  const onX = Math.abs(x - nearestRoad(roadsX, x)) < ROAD_HALF + 3;
  const onZ = Math.abs(z - nearestRoad(roadsZ, z)) < ROAD_HALF + 3;
  const avenues = { '-320': 'Ocean Drive', '-160': 'Seaview Ave', '0': 'Aurelio Blvd', '160': 'Grand Ave', '320': 'Hillcrest Ave' };
  const streets = { '-480': 'Marina St', '-320': 'Sunset Blvd', '-160': 'Pier Ave', '0': 'Palm St', '160': 'Harbor St', '320': 'Rosa St', '480': 'Southbank Rd' };
  if (onX) return avenues[String(nearestRoad(roadsX, x))];
  if (onZ) return streets[String(nearestRoad(roadsZ, z))];
  if (x < -330) return 'Beachfront';
  return 'Off road';
}
