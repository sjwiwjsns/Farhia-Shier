import { hash2 } from '../core/rng.js';
import { districtKey, blockCentersX, blockCentersZ } from './layout.js';

// What stands on each block. The old town's 24 blocks keep their hand-made plan; every
// other block draws from its district's mix, with parks, plazas and parking lots scattered
// by a position hash so the ground, the buildings, the trees and the map all agree without
// sharing any state.

const OLD_TOWN = {
  '-240,-400': 'parking', '-240,-240': { stucco: 3, motel: 2, shops: 2 }, '-240,-80': { hotel: 3, shops: 2, stucco: 1 },
  '-240,80': { stucco: 3, shops: 2, motel: 1 }, '-240,240': { motel: 2, stucco: 3, shops: 1 }, '-240,400': { stucco: 3, shops: 2 },
  '-80,-400': { brick: 3, shops: 2, garage: 1 }, '-80,-240': { office: 2, garage: 1, deco: 1, shops: 1 }, '-80,-80': { shops: 2, condo: 2, deco: 1, brick: 1 },
  '-80,80': 'park', '-80,240': { brick: 3, garage: 1, shops: 1 }, '-80,400': { warehouse: 4, garage: 1 },
  '80,-400': { tower: 3, office: 2, deco: 1 }, '80,-240': { tower: 2, deco: 2, office: 1 }, '80,-80': 'plaza',
  '80,80': { hotel: 2, shops: 1, condo: 2 }, '80,240': 'parking', '80,400': { warehouse: 3, shops: 1, brick: 1 },
  '240,-400': { office: 2, tower: 2, garage: 1 }, '240,-240': 'plaza-tall', '240,-80': { deco: 2, tower: 2, hotel: 1 },
  '240,80': { condo: 2, brick: 2, shops: 1 }, '240,240': { condo: 3, shops: 2 }, '240,400': 'park',
};

// District mixes: building type -> weight. [park, parking, plaza] are chances per block.
const MIX = {
  seaview: [{ stucco: 3, motel: 2, shops: 2, hotel: 1 }, [0.05, 0.06, 0]],
  northshore: [{ condo: 3, hotel: 2, stucco: 2, shops: 2, brick: 1 }, [0.12, 0.03, 0]],
  marina: [{ stucco: 2, shops: 2, warehouse: 2, motel: 1, condo: 1 }, [0.06, 0.1, 0]],
  midtown: [{ office: 2, condo: 2, brick: 2, shops: 2, deco: 1, garage: 1, hotel: 1, civic: 0.7 }, [0.06, 0.04, 0.05]],
  palm: [{ shops: 2, condo: 2, brick: 2, stucco: 1, deco: 1, civic: 0.5 }, [0.1, 0.04, 0]],
  southbank: [{ brick: 3, shops: 2, garage: 1, warehouse: 1, condo: 1 }, [0.07, 0.06, 0]],
  arts: [{ brick: 3, warehouse: 2, shops: 2, garage: 1 }, [0.05, 0.06, 0]],
  port: [{ warehouse: 5, garage: 1, shops: 1 }, [0.02, 0.14, 0]],
  eastside: [{ stucco: 4, shops: 2, brick: 1, condo: 1 }, [0.16, 0.03, 0]],
  foothills: [{ stucco: 5, shops: 1, motel: 1 }, [0.18, 0.03, 0]],
  laurel: [{ condo: 2, stucco: 2, shops: 2, brick: 1, hotel: 1, civic: 0.6 }, [0.1, 0.03, 0.04]],
};
const DOWNTOWN = [
  [0.75, { tower: 4, office: 2, deco: 1 }],
  [0.45, { tower: 2, deco: 2, office: 2, hotel: 1, garage: 1, civic: 0.6 }],
  [0, { office: 2, condo: 2, deco: 1, shops: 1, garage: 1, brick: 1, civic: 0.6 }],
];

// The block the city's tallest tower stands on: a plaza in the heart of the new downtown,
// beside Centro Blvd where the Downtown Dash runs past it.
export const LANDMARK = '720,-400';

// How tall things grow here: 0 at the edges, above 1 in the heart of the new downtown.
export function towerWeight(cx, cz) {
  const old = Math.max(0, 1 - Math.hypot(cx - 150, cz + 200) / 380);
  const core = 1.3 * Math.max(0, 1 - Math.hypot(cx - 640, cz + 480) / 640);
  return Math.max(old, core);
}

const cache = new Map();
// -> { kind: 'mix' | 'park' | 'parking' | 'plaza' | 'plaza-tall', weights, district, dw, coastal, lot }
// lot is the ground material for the block's interior: 0 paving, 1 grass, 2 car park, 4 plaza stone.
export function blockPlan(cx, cz) {
  const key = `${cx},${cz}`;
  if (cache.has(key)) return cache.get(key);
  const district = districtKey(cx, cz);
  const old = OLD_TOWN[key];
  // The old town keeps the skyline it always had.
  const dw = old ? Math.max(0, 1 - Math.hypot(cx - 150, cz + 200) / 380) : towerWeight(cx, cz);
  let kind = 'mix', weights = null;
  if (old) {
    if (typeof old === 'string') kind = old; else weights = old;
  } else if (key === LANDMARK) {
    kind = 'plaza-tall';
  } else if (district === 'laurel' && cx > 560 && cx < 1040 && cz > 160 && cz < 480) {
    kind = 'park'; // Laurel Park itself: four blocks of lawn and trees
  } else if (district === 'downtown') {
    const h = hash2(cx * 0.37 + 11, cz * 0.53 + 5);
    if (h < 0.1) kind = dw > 0.7 ? 'plaza-tall' : 'plaza';
    else if (h < 0.13) kind = 'park';
    else if (h < 0.16) kind = 'parking';
    else weights = DOWNTOWN.find(([min]) => dw >= min)[1];
  } else {
    const [mix, [park, parking, plaza]] = MIX[district];
    const h = hash2(cx * 0.37 + 11, cz * 0.53 + 5);
    if (h < park) kind = 'park';
    else if (h < park + parking) kind = 'parking';
    else if (h < park + parking + plaza) kind = 'plaza';
    else weights = mix;
  }
  const plan = {
    kind, weights, district, dw, coastal: cx < -170, landmark: key === LANDMARK,
    lot: kind === 'park' ? 1 : kind === 'parking' ? 2 : kind.startsWith('plaza') ? 4 : 0,
  };
  cache.set(key, plan);
  return plan;
}

// Old town first and in its original order, so it is generated exactly as it always was.
export function allBlocks() {
  const all = blockCentersX.flatMap(cx => blockCentersZ.map(cz => [cx, cz, blockPlan(cx, cz)]));
  const isOld = ([cx, cz]) => `${cx},${cz}` in OLD_TOWN;
  return [...all.filter(isOld), ...all.filter(b => !isOld(b))];
}
export const parkBlocks = () => allBlocks().filter(([, , p]) => p.kind === 'park');
