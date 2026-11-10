// Wanted level: police who see you break the law come after you.
//
// Crimes only count when a police car witnesses them (close enough, with no building in
// between). Each star brings more units. Break line of sight long enough and the stars
// flash, then clear; stop next to a cruiser while wanted and you are busted.

const MAX_STARS = 5;

// Does the segment a-b cross any building footprint? (2D slab test per box, looking only
// at the boxes in the grid cells the segment passes through.)
function blockedBy(grid, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az;
  return grid.segment(ax, az, bx, bz, c => {
    if (Math.max(ax, bx) < c.x - c.w || Math.min(ax, bx) > c.x + c.w || Math.max(az, bz) < c.z - c.d || Math.min(az, bz) > c.z + c.d) return false;
    let t0 = 0, t1 = 1;
    for (let k = 0; k < 2; k++) {
      const o = k ? az : ax, d = k ? dz : dx, lo = k ? c.z - c.d : c.x - c.w, hi = k ? c.z + c.d : c.x + c.w;
      if (Math.abs(d) < 1e-6) { if (o < lo || o > hi) return false; continue; }
      let u0 = (lo - o) / d, u1 = (hi - o) / d;
      if (u0 > u1) { const t = u0; u0 = u1; u1 = t; }
      t0 = Math.max(t0, u0);
      t1 = Math.min(t1, u1);
      if (t0 > t1) return false;
    }
    return true;
  });
}

export class Wanted {
  // grid: a BoxGrid of building footprints.
  constructor(traffic, grid) {
    this.traffic = traffic;
    this.colliders = grid;
    this.reset();
  }

  reset() {
    this.level = 0;
    this.evade = 0; // seconds out of sight
    this.speeding = 0;
    this.bustTimer = 0;
    this.lastCrime = -99;
    this.seen = false;
    this.events = this.events || []; // kept: an 'evaded' or 'busted' event may be waiting
    for (const car of this.traffic.police) this.traffic.endChase(car);
  }

  get evading() {
    return this.level > 0 && !this.seen;
  }

  // How long the cops need to lose you before giving up.
  get evadeTime() {
    return 7 + this.level * 3;
  }

  sightRange() {
    return 70 + this.level * 25;
  }

  // Nearest police car that can see the point, within range.
  witness(x, z, range) {
    let best = null, bd = range;
    for (const car of this.traffic.police) {
      const d = Math.hypot(car.x - x, car.z - z);
      if (d > bd) continue;
      if (blockedBy(this.colliders, car.x, car.z, x, z)) continue;
      best = car;
      bd = d;
    }
    return best;
  }

  // A crime near (x, z). severity in stars. Returns true if a cop saw it.
  crime(kind, x, z, severity, time, needWitness = true) {
    if (time - this.lastCrime < 2.5 && kind !== 'police') return false;
    const cop = needWitness ? this.witness(x, z, 75 + this.level * 15) : null;
    if (needWitness && !cop && this.level === 0) return false;
    if (needWitness && !cop && !this.seen) return false;
    this.lastCrime = time;
    const before = this.level;
    this.level = Math.min(MAX_STARS, Math.max(this.level + severity, kind === 'police' ? 2 : 1));
    this.evade = 0;
    if (this.level > before) this.events.push({ type: 'up', level: this.level, kind });
    if (cop) this.traffic.startChase(cop);
    return true;
  }

  update(dt, player, time, camera, enabled) {
    this.events.length = 0;
    if (!enabled) {
      if (this.level) this.reset();
      return;
    }
    // Speeding past a patrol car.
    const kmh = player.kmh;
    if (kmh > 125 && this.witness(player.x, player.z, 55)) {
      this.speeding += dt;
      if (this.speeding > 1.2) { this.crime('speeding', player.x, player.z, 1, time); this.speeding = 0; }
    } else this.speeding = Math.max(0, this.speeding - dt);
    if (!this.level) { this.seen = false; return; }

    // Keep enough units on you for the current level.
    const wantUnits = Math.min(this.traffic.police.length, [0, 1, 2, 3, 4, 5][this.level]);
    const chasing = this.traffic.police.filter(c => c.mode === 'chase');
    if (chasing.length < wantUnits) {
      const spare = this.traffic.police.filter(c => c.mode !== 'chase')
        .sort((a, b) => Math.hypot(a.x - player.x, a.z - player.z) - Math.hypot(b.x - player.x, b.z - player.z))[0];
      if (spare) {
        if (Math.hypot(spare.x - player.x, spare.z - player.z) > 260) this.traffic.dispatch(spare, player, camera);
        else this.traffic.startChase(spare);
      }
    }
    // Line of sight decides between hunting and searching.
    const range = this.sightRange();
    this.seen = chasing.some(c => Math.hypot(c.x - player.x, c.z - player.z) < range && !blockedBy(this.colliders, c.x, c.z, player.x, player.z));
    if (this.seen) this.evade = 0;
    else {
      this.evade += dt;
      if (this.evade > this.evadeTime) {
        this.events.push({ type: 'evaded' });
        this.reset();
        return;
      }
    }
    // Busted: stopped with a cruiser alongside.
    const close = chasing.some(c => Math.hypot(c.x - player.x, c.z - player.z) < 8);
    if (close && player.kmh < 6) {
      this.bustTimer += dt;
      if (this.bustTimer > 2.5) {
        this.events.push({ type: 'busted' });
        this.reset();
      }
    } else this.bustTimer = Math.max(0, this.bustTimer - dt * 2);
  }

  // 0..1 siren loudness from the nearest unit on your tail.
  sirenLevel(player) {
    let d = Infinity;
    for (const c of this.traffic.police) if (c.mode === 'chase') d = Math.min(d, Math.hypot(c.x - player.x, c.z - player.z));
    return Math.max(0, 1 - d / 260);
  }
}
