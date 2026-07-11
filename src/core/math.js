// Small math helpers shared across systems.
export const DEG2RAD = Math.PI / 180;
export const RAD2DEG = 180 / Math.PI;
export const KTS2MS = 0.514444;
export const MS2KTS = 1 / KTS2MS;
export const FT2M = 0.3048;
export const M2FT = 1 / FT2M;
export const G = 9.80665;

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const clamp01 = (v) => clamp(v, 0, 1);
export const lerp = (a, b, t) => a + (b - a) * t;

// Frame-rate independent exponential approach: moves `current` toward `target`.
export const damp = (current, target, rate, dt) =>
  lerp(current, target, 1 - Math.exp(-rate * dt));

// Move toward target at a fixed rate (units/second).
export function moveToward(current, target, rate, dt) {
  const d = target - current;
  const step = rate * dt;
  return Math.abs(d) <= step ? target : current + Math.sign(d) * step;
}

export const wrap360 = (deg) => ((deg % 360) + 360) % 360;

// ISA-ish atmosphere. altM = meters MSL.
export function airDensity(altM) {
  return 1.225 * Math.exp(-Math.max(0, altM) / 8500);
}
export function speedOfSound(altM) {
  const T = Math.max(216.65, 288.15 - 0.0065 * Math.max(0, altM));
  return Math.sqrt(1.4 * 287.05 * T);
}

// Deterministic small PRNG for repeatable scenery.
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hashString(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
