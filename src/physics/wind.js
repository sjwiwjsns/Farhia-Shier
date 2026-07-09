// Dynamic wind field: steady base wind + multi-octave gusts + low-altitude
// turbulence, sampled anywhere in space/time. One instance drives everything
// that feels air: the flight model, grass sway, dust advection, windsocks,
// ATC wind reports and the HUD readout — so a gust you see in the grass is
// the same gust that rocks your wings a moment later.
import * as THREE from 'three';
import { DEG2RAD, KTS2MS, MS2KTS, wrap360, mulberry32, clamp } from '../core/math.js';

export class WindField {
  /**
   * @param {object} opts
   *  seed        deterministic per-flight seed
   *  baseDirDeg  meteorological direction the wind blows FROM
   *  baseKts     mean speed at reference height
   *  gustKts     additional gust amplitude on top of the mean
   *  turbulence  0..1 low-altitude turbulence intensity
   */
  constructor({ seed = 1, baseDirDeg = 240, baseKts = 7, gustKts = 6, turbulence = 0.5 } = {}) {
    const rng = mulberry32(seed);
    this.baseDirDeg = wrap360(baseDirDeg + (rng() - 0.5) * 40);
    this.baseKts = Math.max(1, baseKts + (rng() - 0.5) * 4);
    this.gustKts = Math.max(0, gustKts + (rng() - 0.5) * 3);
    this.turbulence = clamp(turbulence + (rng() - 0.5) * 0.3, 0.1, 1);

    // Gust spectrum: a handful of incommensurate sines approximates a Dryden-ish
    // low-frequency spectrum without any per-frame noise-table cost.
    this.oct = [];
    for (let i = 0; i < 5; i++) {
      this.oct.push({
        // periods from ~4 s (flurries) to ~45 s (long surges)
        w: (Math.PI * 2) / (4 + Math.pow(2.2, i) * 4 * (0.8 + rng() * 0.4)),
        phase: rng() * Math.PI * 2,
        // spatial phase so gusts sweep across the field rather than pulsing globally
        kx: (rng() - 0.5) * 0.004,
        kz: (rng() - 0.5) * 0.004,
        ampSpeed: this.gustKts * KTS2MS * [0.45, 0.30, 0.15, 0.20, 0.10][i],
        ampDir: [10, 7, 4, 3, 2][i] * DEG2RAD // direction meander per octave
      });
    }

    this._dir = new THREE.Vector3();
    this._out = new THREE.Vector3();
  }

  // Wind VELOCITY vector (m/s, world frame) at a position and time.
  // Remember: a wind FROM 240° blows TOWARD 060°.
  sample(pos, time, out = this._out) {
    let speed = this.baseKts * KTS2MS;
    let dir = this.baseDirDeg * DEG2RAD;
    for (const o of this.oct) {
      const s = Math.sin(o.w * time + o.phase + pos.x * o.kx + pos.z * o.kz);
      speed += o.ampSpeed * s;
      dir += o.ampDir * Math.sin(o.w * 0.7 * time + o.phase * 1.7 + pos.z * o.kx - pos.x * o.kz);
    }
    speed = Math.max(0, speed);
    // wind speed grows slightly with altitude (crude boundary-layer profile)
    const altFactor = 1 + clamp(pos.y / 600, 0, 1) * 0.35;
    speed *= altFactor;
    out.set(-Math.sin(dir), 0, Math.cos(dir)).multiplyScalar(speed);
    return out;
  }

  // Current conditions at a point, for HUD/ATC ("wind 240 at 7 gusting 12").
  report(pos, time) {
    const v = this.sample(pos, time);
    const kts = v.length() * MS2KTS;
    const dir = wrap360(Math.atan2(-v.x, v.z) / DEG2RAD);
    return {
      dirDeg: Math.round(dir / 10) * 10,
      kts: Math.round(kts),
      meanKts: Math.round(this.baseKts),
      gustKts: Math.round(this.baseKts + this.gustKts)
    };
  }

  // Turbulence intensity 0..1 at altitude: strongest in the boundary layer,
  // fading out by ~900 m AGL. The flight model turns this into rate jolts.
  turbulenceAt(aglM) {
    return this.turbulence * clamp(1 - aglM / 900, 0, 1);
  }
}

// Difficulty presets: arcade halves the weather, realistic gets the real thing.
export function makeWindForFlight(seed, arcade) {
  return new WindField({
    seed,
    baseDirDeg: 240,
    baseKts: arcade ? 5 : 8,
    gustKts: arcade ? 3 : 7,
    turbulence: arcade ? 0.25 : 0.55
  });
}
