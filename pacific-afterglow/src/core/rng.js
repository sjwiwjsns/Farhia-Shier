// Deterministic random numbers so the city is identical on every visit.

let seed = 8294;

export function reseed(value) {
  seed = value >>> 0;
}

export function rand() {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 4294967296;
}

export const range = (a, b) => a + rand() * (b - a);
export const pick = list => list[Math.floor(rand() * list.length)];
export const chance = p => rand() < p;

// Stateless hash for values that must not depend on generation order.
export function hash2(x, z) {
  let h = Math.imul(Math.floor(x) | 0, 374761393) + Math.imul(Math.floor(z) | 0, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
