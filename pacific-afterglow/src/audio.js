// Everything you hear is synthesized live with the Web Audio API: engines, tires, nitro,
// crashes, the city around you, police sirens and three radio stations. Nothing loads from
// files. The audio context is created on the first click or key press.

// --- Engine voices -------------------------------------------------------------
// pulses: firing pulses per crank revolution (cylinders / 2). lump: how uneven the firing
// sounds. tone: low-pass opening. intake: how much bright induction noise joins in.
const ENGINES = {
  v8: { pulses: 4, lump: 0.32, tone: 1, intake: 0.5, sub: 0.6, rasp: 0.35, redline: 7400 },
  bigblock: { pulses: 4, lump: 0.55, tone: 0.72, intake: 0.35, sub: 0.9, rasp: 0.5, redline: 6400 },
  v10: { pulses: 5, lump: 0.14, tone: 1.45, intake: 0.85, sub: 0.35, rasp: 0.25, redline: 8800 },
};

// --- Radio -----------------------------------------------------------------------
// Three original stations, each a small procedural band. Chords are MIDI note lists.
export const STATIONS = [
  { id: 'wave', name: 'PACIFIC WAVE 101.4', genre: 'Synthwave', bpm: 100, swing: 0,
    chords: [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]] },
  { id: 'tide', name: 'LOW TIDE 94.7', genre: 'Lo-fi beats', bpm: 82, swing: 0.16,
    chords: [[50, 53, 57, 60, 64], [55, 59, 62, 65, 69], [48, 52, 55, 59, 62], [57, 61, 64, 67, 70]] },
  { id: 'funk', name: 'KZRO 88.1 COAST FUNK', genre: 'Funk', bpm: 112, swing: 0.08,
    chords: [[52, 55, 59, 62], [52, 55, 59, 62], [57, 61, 64, 67], [55, 59, 62, 65]] },
];
const hz = n => 440 * Math.pow(2, (n - 69) / 12);

export class Audio {
  constructor() {
    this.ctx = null;
    this.enabled = false;
    this.engineDef = ENGINES.v8;
    this.station = -1; // -1 = radio off
    this.wasBoosting = false;
    this.scrapeLevel = 0;
    this.nextAmbient = { horn: 6, bird: 2, gull: 4, cricket: 1, siren: 30 };
    this.sirenLevel = 0;
  }

  // Create the context on the first user gesture; sound stays silent until enabled.
  unlock() {
    if (!this.ctx) this.start();
    else if (this.ctx.state === 'suspended') this.ctx.resume();
  }

  start() {
    if (this.ctx) {
      this.ctx.resume();
      return;
    }
    let ctx;
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch {
      return;
    }
    this.ctx = ctx;
    const master = (this.master = ctx.createGain());
    master.gain.value = 0;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.ratio.value = 4;
    master.connect(comp).connect(ctx.destination);

    // Shared noise buffers: white and brown (integrated) noise.
    const len = ctx.sampleRate * 2;
    const white = ctx.createBuffer(1, len, ctx.sampleRate);
    const brown = ctx.createBuffer(1, len, ctx.sampleRate);
    const w = white.getChannelData(0), b = brown.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      w[i] = Math.random() * 2 - 1;
      last = (last + 0.02 * w[i]) / 1.02;
      b[i] = last * 3.5;
    }
    this.noiseBuffer = white;
    const noise = (buffer = white) => {
      const src = ctx.createBufferSource();
      src.buffer = buffer;
      src.loop = true;
      src.start(0, Math.random() * 1.5);
      return src;
    };

    // A small generated room reverb for the radio and distant city sounds.
    this.reverb = ctx.createConvolver();
    const irLen = Math.floor(ctx.sampleRate * 1.8);
    const ir = ctx.createBuffer(2, irLen, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = ir.getChannelData(ch);
      for (let i = 0; i < irLen; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / irLen, 3.2);
    }
    this.reverb.buffer = ir;
    this.reverbOut = ctx.createGain();
    this.reverbOut.gain.value = 0.32;
    this.reverb.connect(this.reverbOut).connect(master);

    this.buildEngine(noise);
    this.buildTires(noise);
    this.buildWorld(noise, brown);
    this.buildRadio();
  }

  // --- Engine -------------------------------------------------------------------
  buildEngine(noise) {
    const ctx = this.ctx;
    this.engineGain = ctx.createGain();
    this.engineGain.gain.value = 0;
    this.engineFilter = ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.Q.value = 2.2;
    this.engineDrive = ctx.createWaveShaper();
    const curve = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) curve[i] = Math.tanh(((i / 1023) * 2 - 1) * 2.6);
    this.engineDrive.curve = curve;
    // Exhaust note: a pulse-train wave at the firing frequency, a sub an octave down.
    const real = new Float32Array(24), imag = new Float32Array(24);
    for (let n = 1; n < 24; n++) imag[n] = (1 / n) * (n % 2 ? 1 : 0.6) * Math.exp(-n * 0.08);
    const wave = ctx.createPeriodicWave(real, imag);
    this.oscs = [];
    this.subGain = ctx.createGain();
    for (const [mult, gain, type] of [[1, 0.55, 'wave'], [1.006, 0.3, 'sawtooth'], [0.5, 1, 'sine']]) {
      const o = ctx.createOscillator();
      if (type === 'wave') o.setPeriodicWave(wave); else o.type = type;
      const g = ctx.createGain();
      g.gain.value = gain;
      o.connect(g).connect(mult === 0.5 ? this.subGain : this.engineDrive);
      o.start();
      this.oscs.push([o, mult]);
    }
    this.subGain.connect(this.engineDrive);
    // Uneven firing: amplitude wobble at half crank speed.
    const am = ctx.createGain();
    this.lumpOsc = ctx.createOscillator();
    this.lumpOsc.type = 'triangle';
    this.lumpDepth = ctx.createGain();
    this.lumpOsc.connect(this.lumpDepth).connect(am.gain);
    this.lumpOsc.start();
    this.engineDrive.connect(am).connect(this.engineFilter).connect(this.engineGain).connect(this.master);
    // Exhaust rasp: noise shaped by the same firing wobble.
    this.raspFilter = ctx.createBiquadFilter();
    this.raspFilter.type = 'bandpass';
    this.raspFilter.Q.value = 1.4;
    this.raspGain = ctx.createGain();
    this.raspGain.gain.value = 0;
    noise().connect(this.raspFilter).connect(this.raspGain).connect(am);
    // Intake howl: a brighter square two octaves up, opening with the throttle.
    this.intake = ctx.createOscillator();
    this.intake.type = 'square';
    this.intakeFilter = ctx.createBiquadFilter();
    this.intakeFilter.type = 'bandpass';
    this.intakeFilter.Q.value = 3;
    this.intakeGain = ctx.createGain();
    this.intakeGain.gain.value = 0;
    this.intake.connect(this.intakeFilter).connect(this.intakeGain).connect(this.engineGain);
    this.intake.start();
    // Gearbox whine, strongest in the low gears.
    this.whine = ctx.createOscillator();
    this.whine.type = 'sine';
    this.whineGain = ctx.createGain();
    this.whineGain.gain.value = 0;
    this.whine.connect(this.whineGain).connect(this.master);
    this.whine.start();
    // Turbo whistle.
    this.turbo = ctx.createOscillator();
    this.turbo.type = 'sine';
    this.turboGain = ctx.createGain();
    this.turboGain.gain.value = 0;
    this.turbo.connect(this.turboGain).connect(this.master);
    this.turbo.start();
    this.applyEngine();
  }

  setEngine(name) {
    this.engineDef = ENGINES[name] || ENGINES.v8;
    this.applyEngine();
  }

  applyEngine() {
    if (!this.ctx) return;
    const e = this.engineDef, t = this.ctx.currentTime;
    this.lumpDepth.gain.setTargetAtTime(e.lump, t, 0.05);
    this.subGain.gain.setTargetAtTime(e.sub, t, 0.05);
  }

  // --- Tires, wind, nitro, scrapes -----------------------------------------------
  buildTires(noise) {
    const ctx = this.ctx;
    // Squeal: band-passed noise plus a wavering tone, which is what makes rubber shriek.
    this.screechFilter = ctx.createBiquadFilter();
    this.screechFilter.type = 'bandpass';
    this.screechFilter.frequency.value = 1350;
    this.screechFilter.Q.value = 5;
    this.screechGain = ctx.createGain();
    this.screechGain.gain.value = 0;
    noise().connect(this.screechFilter).connect(this.screechGain).connect(this.master);
    this.squeal = ctx.createOscillator();
    this.squeal.type = 'sawtooth';
    const squealFilter = ctx.createBiquadFilter();
    squealFilter.type = 'bandpass';
    squealFilter.frequency.value = 1100;
    squealFilter.Q.value = 8;
    this.squealGain = ctx.createGain();
    this.squealGain.gain.value = 0;
    const vib = ctx.createOscillator();
    vib.frequency.value = 9;
    const vibDepth = ctx.createGain();
    vibDepth.gain.value = 22;
    vib.connect(vibDepth).connect(this.squeal.frequency);
    vib.start();
    this.squeal.connect(squealFilter).connect(this.squealGain).connect(this.master);
    this.squeal.start();
    // Wind and road roar.
    this.windFilter = ctx.createBiquadFilter();
    this.windFilter.type = 'lowpass';
    this.windGain = ctx.createGain();
    this.windGain.gain.value = 0;
    noise().connect(this.windFilter).connect(this.windGain).connect(this.master);
    // Nitro: a sustained hiss with a low roar under it.
    const nitroFilter = ctx.createBiquadFilter();
    nitroFilter.type = 'highpass';
    nitroFilter.frequency.value = 2200;
    this.nitroGain = ctx.createGain();
    this.nitroGain.gain.value = 0;
    noise().connect(nitroFilter).connect(this.nitroGain).connect(this.master);
    const roarFilter = ctx.createBiquadFilter();
    roarFilter.type = 'lowpass';
    roarFilter.frequency.value = 220;
    this.roarGain = ctx.createGain();
    this.roarGain.gain.value = 0;
    noise().connect(roarFilter).connect(this.roarGain).connect(this.master);
    // Metal scraping along a wall.
    this.scrapeFilter = ctx.createBiquadFilter();
    this.scrapeFilter.type = 'bandpass';
    this.scrapeFilter.frequency.value = 2400;
    this.scrapeFilter.Q.value = 2.5;
    this.scrapeGain = ctx.createGain();
    this.scrapeGain.gain.value = 0;
    noise().connect(this.scrapeFilter).connect(this.scrapeGain).connect(this.master);
  }

  // --- City ambience and sirens --------------------------------------------------
  buildWorld(noise, brown) {
    const ctx = this.ctx;
    // Surf: a low rumble that swells like waves.
    const surfFilter = ctx.createBiquadFilter();
    surfFilter.type = 'lowpass';
    surfFilter.frequency.value = 520;
    this.surfGain = ctx.createGain();
    this.surfGain.gain.value = 0;
    noise().connect(surfFilter).connect(this.surfGain).connect(this.master);
    // Distant traffic: brown noise under a gentle low-pass, busier downtown and by day.
    const humFilter = ctx.createBiquadFilter();
    humFilter.type = 'lowpass';
    humFilter.frequency.value = 380;
    this.humGain = ctx.createGain();
    this.humGain.gain.value = 0;
    noise(brown).connect(humFilter).connect(this.humGain).connect(this.master);
    // Police siren: a wailing saw through a horn-like band-pass.
    this.siren = ctx.createOscillator();
    this.siren.type = 'sawtooth';
    this.siren.frequency.value = 900;
    const wail = ctx.createOscillator();
    wail.frequency.value = 0.32;
    const wailDepth = ctx.createGain();
    wailDepth.gain.value = 380;
    wail.connect(wailDepth).connect(this.siren.frequency);
    wail.start();
    const sirenFilter = ctx.createBiquadFilter();
    sirenFilter.type = 'bandpass';
    sirenFilter.frequency.value = 1100;
    sirenFilter.Q.value = 1.2;
    this.sirenGain = ctx.createGain();
    this.sirenGain.gain.value = 0;
    this.siren.connect(sirenFilter).connect(this.sirenGain).connect(this.master);
    this.siren.start();
    this.ambientBus = ctx.createGain();
    this.ambientBus.gain.value = 0;
    this.ambientBus.connect(this.master);
    this.ambientBus.connect(this.reverb);
  }

  setEnabled(on) {
    this.enabled = on;
    if (on) this.start();
    if (this.ctx) this.master.gain.setTargetAtTime(on ? 0.9 : 0, this.ctx.currentTime, 0.1);
  }

  // Called every frame with the car and world state.
  update(state) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const { rpm, throttle, speed, slip, boosting, active, shoreDistance, time, gear = 1, ratio = 3, city = 0.5, night = 0, nearTrees = 0 } = state;
    const on = active ? 1 : 0;
    const e = this.engineDef;
    // Engine: pitch follows rpm; load (throttle in a tall gear) fattens and opens the note.
    const f = (rpm / 60) * e.pulses;
    for (const [o, mult] of this.oscs) o.frequency.setTargetAtTime(f * mult * 0.5, t, 0.025);
    this.lumpOsc.frequency.setTargetAtTime(rpm / 120, t, 0.05);
    const r01 = rpm / e.redline;
    const load = throttle * (0.75 + Math.min(Math.max(gear, 1), 6) * 0.05);
    this.engineFilter.frequency.setTargetAtTime((220 + rpm * 0.14 + load * rpm * 0.3) * e.tone, t, 0.04);
    this.engineGain.gain.setTargetAtTime(on * (0.065 + load * 0.085 + r01 * 0.05), t, 0.04);
    this.raspFilter.frequency.setTargetAtTime(f * 3, t, 0.05);
    this.raspGain.gain.setTargetAtTime(on * e.rasp * (0.15 + throttle * 0.6) * 0.5, t, 0.05);
    this.intake.frequency.setTargetAtTime(f * 2, t, 0.03);
    this.intakeFilter.frequency.setTargetAtTime(900 + rpm * 0.35, t, 0.05);
    this.intakeGain.gain.setTargetAtTime(on * e.intake * throttle * r01 * r01 * 0.035, t, 0.05);
    const v = Math.abs(speed);
    this.whine.frequency.setTargetAtTime(Math.max(40, v * ratio * 14), t, 0.05);
    this.whineGain.gain.setTargetAtTime(on * (gear > 0 && gear <= 2 ? 1 : 0.25) * Math.min(v / 20, 1) * 0.006, t, 0.1);
    this.turbo.frequency.setTargetAtTime(1400 + rpm * 0.55, t, 0.1);
    this.turboGain.gain.setTargetAtTime(on * throttle * r01 * r01 * 0.01, t, 0.1);
    // Tires.
    const screech = on * Math.min(Math.max(slip - 3, 0) / 10, 1);
    this.screechGain.gain.setTargetAtTime(screech * 0.075, t, 0.06);
    this.screechFilter.frequency.setTargetAtTime(1100 + Math.min(slip, 20) * 25, t, 0.1);
    this.squeal.frequency.setTargetAtTime(820 + Math.min(slip, 20) * 18, t, 0.08);
    this.squealGain.gain.setTargetAtTime(screech * screech * 0.05, t, 0.05);
    this.windGain.gain.setTargetAtTime(on * Math.min((v / 60) ** 2, 1) * 0.1, t, 0.2);
    this.windFilter.frequency.setTargetAtTime(400 + v * 18, t, 0.2);
    // Nitro: a whoosh as it kicks in, then hiss and roar while it lasts.
    if (boosting && !this.wasBoosting && on) this.whoosh();
    this.wasBoosting = boosting;
    this.nitroGain.gain.setTargetAtTime(on * (boosting ? 0.045 : 0), t, 0.06);
    this.roarGain.gain.setTargetAtTime(on * (boosting ? 0.12 : 0), t, 0.1);
    // Scraping decays unless refreshed this frame.
    this.scrapeGain.gain.setTargetAtTime(on * this.scrapeLevel * 0.09, t, 0.04);
    this.scrapeLevel *= 0.6;
    // World.
    const surfNear = Math.max(0, 1 - shoreDistance / 140);
    const swell = 0.55 + 0.45 * Math.sin(time * 0.7) * Math.sin(time * 0.23 + 1);
    this.surfGain.gain.setTargetAtTime(surfNear * swell * 0.11, t, 0.3);
    this.humGain.gain.setTargetAtTime(on * (0.025 + city * 0.05) * (1 - night * 0.55), t, 0.6);
    this.ambientBus.gain.setTargetAtTime(on, t, 0.4);
    this.sirenGain.gain.setTargetAtTime(on * this.sirenLevel * 0.05, t, 0.15);
    if (on) this.ambient(time, { city, night, surfNear, nearTrees });
    this.radioActive = active;
    this.radioTick(active);
  }

  // Random one-shots that make the city feel inhabited.
  ambient(time, { city, night, surfNear, nearTrees }) {
    const n = this.nextAmbient;
    if (time > n.horn) {
      n.horn = time + 7 + Math.random() * 16 / (0.4 + city);
      this.horn(60 + Math.random() * 140, true);
    }
    if (night < 0.5 && time > n.bird) {
      n.bird = time + 2 + Math.random() * 6;
      if (nearTrees > 0.2 || Math.random() < 0.3) this.chirp();
    }
    if (night < 0.5 && surfNear > 0.3 && time > n.gull) {
      n.gull = time + 5 + Math.random() * 9;
      this.gull();
    }
    if (night > 0.5 && time > n.cricket) {
      n.cricket = time + 0.7 + Math.random() * 1.6;
      this.cricket(city);
    }
    if (time > n.siren) {
      n.siren = time + 40 + Math.random() * 60;
      if (city > 0.4) this.distantSiren();
    }
  }

  burst(duration, filterType, freq, gain, q = 1, dest = this.master, when = 0) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx, t = ctx.currentTime + when;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const f = ctx.createBiquadFilter();
    f.type = filterType;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    src.connect(f).connect(g).connect(dest);
    src.start(t, Math.random());
    src.stop(t + duration + 0.05);
  }

  tone(type, freq, duration, gain, { dest = this.master, when = 0, attack = 0.005, slideTo = 0, q = 0, filter = 0 } = {}) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx, t = ctx.currentTime + when;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + duration);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    let node = o;
    if (filter) {
      const f = ctx.createBiquadFilter();
      f.type = 'bandpass';
      f.frequency.value = filter;
      f.Q.value = q || 2;
      node = o.connect(f);
    }
    node.connect(g).connect(dest);
    o.start(t);
    o.stop(t + duration + 0.05);
  }

  // Crash: a thud, a metallic ring at inharmonic partials, and glass on hard hits.
  impact(strength) {
    if (!this.ctx || !this.enabled) return;
    const now = this.ctx.currentTime;
    if (now - (this.lastImpact || 0) < 0.07) return;
    this.lastImpact = now;
    const s = Math.min(strength / 20, 1);
    this.burst(0.35 + s * 0.3, 'lowpass', 300 + s * 900, 0.25 + s * 0.6);
    this.tone('sine', 70 + s * 30, 0.25, 0.25 * s + 0.08, { slideTo: 40 });
    for (const p of [1, 2.76, 5.4]) this.tone('triangle', 420 * p * (0.9 + Math.random() * 0.2), 0.18 + s * 0.4, 0.04 * s / p + 0.01, { filter: 420 * p, q: 12 });
    if (s > 0.4) for (let k = 0; k < 6; k++) this.tone('sine', 3000 + Math.random() * 4000, 0.08 + Math.random() * 0.1, 0.02 * s, { when: 0.02 + Math.random() * 0.2 });
  }

  scrape(speed) {
    this.scrapeLevel = Math.max(this.scrapeLevel, Math.min(speed / 25, 1));
    if (this.ctx) this.scrapeFilter.frequency.setTargetAtTime(1800 + Math.random() * 1600, this.ctx.currentTime, 0.02);
  }

  whoosh() {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.Q.value = 1.6;
    f.frequency.setValueAtTime(300, t);
    f.frequency.exponentialRampToValueAtTime(3800, t + 0.45);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.32, t + 0.08);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
    src.connect(f).connect(g).connect(this.master);
    src.start(t, Math.random());
    src.stop(t + 1);
  }

  backfire() {
    if (!this.ctx || !this.enabled) return;
    this.burst(0.09, 'lowpass', 900, 0.35);
    this.tone('square', 60, 0.08, 0.08);
  }

  shift(up) {
    if (up) this.burst(0.18, 'highpass', 1800, 0.07); // blow-off
  }

  horn(distance, far = false) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const vol = Math.min(0.12, 6 / Math.max(distance, 6) * 0.12) * (far ? 0.6 : 1);
    const len = far ? 0.3 + Math.random() * 0.5 : 0.45;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.02);
    g.gain.setValueAtTime(vol, t + len);
    g.gain.linearRampToValueAtTime(0, t + len + 0.1);
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = far ? 900 : 1800;
    const base = far ? 300 + Math.random() * 120 : 349;
    for (const h of [base, base * 1.26]) {
      const o = ctx.createOscillator();
      o.type = 'square';
      o.frequency.value = h;
      o.connect(f);
      o.start(t);
      o.stop(t + len + 0.15);
    }
    f.connect(g).connect(far ? this.ambientBus : this.master);
  }

  chirp() {
    const base = 2600 + Math.random() * 2200, n = 2 + Math.floor(Math.random() * 4);
    for (let i = 0; i < n; i++) this.tone('sine', base * (1 + Math.random() * 0.1), 0.07, 0.012, { dest: this.ambientBus, when: i * 0.11, slideTo: base * 1.35 });
  }

  gull() {
    for (let i = 0; i < 2 + Math.floor(Math.random() * 2); i++) {
      this.tone('sawtooth', 1500, 0.32, 0.01, { dest: this.ambientBus, when: i * 0.38, slideTo: 900, filter: 1400, q: 3 });
    }
  }

  cricket(city) {
    const f = 4300 + Math.random() * 500, vol = 0.006 * (1.2 - city * 0.8);
    for (let i = 0; i < 3; i++) this.tone('sine', f, 0.035, vol, { dest: this.ambientBus, when: i * 0.06 });
  }

  distantSiren() {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator();
    o.type = 'triangle';
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.35;
    const depth = ctx.createGain();
    depth.gain.value = 220;
    o.frequency.value = 780;
    lfo.connect(depth).connect(o.frequency);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.012, t + 2);
    g.gain.linearRampToValueAtTime(0, t + 8);
    o.connect(g).connect(this.ambientBus);
    o.start(t); lfo.start(t);
    o.stop(t + 8.2); lfo.stop(t + 8.2);
  }

  // 0..1: how loud the chasing police sirens are (by distance).
  setSiren(level) {
    this.sirenLevel = level;
  }

  chime(final = false) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const notes = final ? [523.25, 659.25, 783.99, 1046.5] : [659.25, 987.77];
    notes.forEach((f, i) => {
      const o = ctx.createOscillator();
      o.type = 'triangle';
      o.frequency.value = f;
      const g = ctx.createGain();
      const start = t + i * 0.09;
      g.gain.setValueAtTime(0, start);
      g.gain.linearRampToValueAtTime(0.12, start + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, start + 0.6);
      o.connect(g).connect(this.master);
      o.start(start);
      o.stop(start + 0.65);
    });
  }

  countBeep(go = false) {
    this.tone('square', go ? 880 : 440, go ? 0.5 : 0.18, 0.06, { filter: go ? 1800 : 900, q: 1 });
  }

  // --- Radio -----------------------------------------------------------------------
  buildRadio() {
    const ctx = this.ctx;
    this.radioGain = ctx.createGain();
    this.radioGain.gain.value = 0;
    // A touch of car-speaker colour: less deep bass, slightly rolled-off top.
    const low = ctx.createBiquadFilter();
    low.type = 'highpass';
    low.frequency.value = 55;
    const high = ctx.createBiquadFilter();
    high.type = 'highshelf';
    high.frequency.value = 7000;
    high.gain.value = -5;
    this.radioIn = ctx.createGain();
    this.radioIn.connect(low).connect(high).connect(this.radioGain).connect(this.master);
    this.radioSend = ctx.createGain();
    this.radioSend.gain.value = 0.5;
    this.radioSend.connect(this.reverb);
    this.radioStep = 0;
    this.radioNext = 0;
    this.radioActive = false;
    // Its own timer, so a slow frame never starves the sequencer.
    setInterval(() => this.radioTick(this.radioActive), 40);
  }

  get stationName() {
    return this.station < 0 ? 'RADIO OFF' : STATIONS[this.station].name;
  }

  setStation(index) {
    this.station = index;
    if (!this.ctx) return;
    this.radioStep = 0;
    this.radioNext = this.ctx.currentTime + 0.25;
    // Tuning static between stations.
    this.burst(0.28, 'bandpass', 2200, 0.08, 0.7);
  }

  nextStation() {
    this.setStation(this.station + 1 >= STATIONS.length ? -1 : this.station + 1);
    return this.stationName;
  }

  // Lookahead scheduler: queue the next 16th notes slightly ahead of the audio clock.
  radioTick(active) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const playing = active && this.station >= 0 && this.enabled;
    this.radioGain.gain.setTargetAtTime(playing ? 0.75 : 0, t, 0.15);
    if (!playing) { this.radioNext = 0; return; }
    const st = STATIONS[this.station];
    const sixteenth = 60 / st.bpm / 4;
    if (this.radioNext < t) this.radioNext = t + 0.05;
    while (this.radioNext < t + 0.3) {
      const step = this.radioStep;
      const swing = step % 2 ? st.swing * sixteenth : 0;
      this.playStep(st, step, this.radioNext + swing, sixteenth);
      this.radioNext += sixteenth;
      this.radioStep++;
    }
  }

  playStep(st, step, at, sx) {
    const when = Math.max(0, at - this.ctx.currentTime);
    const bar = Math.floor(step / 16), beat = step % 16;
    const chord = st.chords[bar % st.chords.length];
    const root = chord[0];
    const rnd = (k) => { const s = Math.sin((step + k * 31.7) * 12.9898 + this.station * 7.1) * 43758.5453; return s - Math.floor(s); };
    const R = this.radioIn, S = this.radioSend;
    if (st.id === 'wave') {
      // Synthwave: four-on-the-floor, gated snare, rolling 8th bass, arpeggio and pad.
      if (beat % 4 === 0) this.kick(when, 0.5);
      if (beat === 4 || beat === 12) this.snare(when, 0.28, true);
      if (beat % 2 === 0) this.hat(when, 0.05, false);
      if (beat % 2 === 0) this.synth('sawtooth', hz(root - 24), sx * 1.8, 0.11, when, { cutoff: 700, env: 900 });
      const arp = [0, 1, 2, 1, 0, 2, 1, 2];
      this.synth('square', hz(chord[arp[beat % 8]] + 12), sx * 0.9, 0.03, when, { cutoff: 2400, env: 1200, send: 0.6 });
      if (beat === 0) for (const n of chord) this.synth('sawtooth', hz(n), sx * 15, 0.022, when, { cutoff: 1300, attack: 0.4, detune: 9, send: 1 });
      // A lead phrase every other bar pair.
      if (bar % 4 >= 2 && [0, 3, 6, 10, 12].includes(beat)) {
        const scale = [0, 3, 5, 7, 10, 12];
        this.synth('sawtooth', hz(root + 12 + scale[Math.floor(rnd(1) * scale.length)]), sx * 2.6, 0.035, when, { cutoff: 3000, env: 0, send: 0.8, detune: 6 });
      }
    } else if (st.id === 'tide') {
      // Lo-fi: lazy boom-bap, swung hats, soft keys and a round bass, with vinyl crackle.
      if (beat === 0 || beat === 7 || beat === 10) this.kick(when, 0.42);
      if (beat === 4 || beat === 12) this.snare(when, 0.16, false);
      if (beat % 2 === 0) this.hat(when, 0.025 + rnd(2) * 0.015, false);
      if (beat === 0 || beat === 6) for (const n of chord) this.synth('sine', hz(n), sx * 7, 0.03, when + rnd(3) * 0.02, { cutoff: 1800, attack: 0.01, trem: true, send: 0.7 });
      if (beat === 0 || beat === 10) this.synth('sine', hz(root - 12), sx * 5, 0.16, when, { cutoff: 400 });
      if (rnd(4) < 0.35) this.burst(0.01, 'highpass', 3000, 0.02 + rnd(5) * 0.03, 1, R, when);
      if (beat === 0) this.burst(sx * 16, 'bandpass', 1200, 0.004, 0.4, R, when);
    } else {
      // Funk: tight kick and snare, 16th hats, a syncopated octave bass and clav stabs.
      if (beat === 0 || beat === 6 || beat === 8 || beat === 11) this.kick(when, 0.45);
      if (beat === 4 || beat === 12) this.snare(when, 0.24, false);
      this.hat(when, beat % 4 === 2 ? 0.06 : 0.03, beat % 4 === 2);
      const bassLine = [0, null, 12, 0, null, 0, 10, null, 0, null, 12, 7, null, 0, 10, 12];
      const bn = bassLine[beat];
      if (bn !== null) this.synth('square', hz(root - 24 + bn), sx * 0.8, 0.09, when, { cutoff: 500, env: 1400 });
      if ([2, 7, 10, 14].includes(beat)) for (const n of chord.slice(1)) this.synth('square', hz(n + 12), sx * 0.5, 0.018, when, { cutoff: 2600, env: 2000, q: 6 });
      if (bar % 8 === 7 && (beat === 0 || beat === 3)) for (const n of chord) this.synth('sawtooth', hz(n + 12), sx * 2, 0.025, when, { cutoff: 2200, send: 0.6, detune: 12 });
    }
  }

  synth(type, freq, dur, gain, when, { cutoff = 2000, env = 0, attack = 0.005, detune = 0, send = 0, trem = false, q = 1 } = {}) {
    const ctx = this.ctx, t = ctx.currentTime + when;
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.Q.value = q;
    f.frequency.setValueAtTime(cutoff + env, t);
    if (env) f.frequency.exponentialRampToValueAtTime(Math.max(cutoff, 60), t + Math.min(dur, 0.3));
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + attack);
    g.gain.setValueAtTime(gain, t + Math.max(attack, dur * 0.6));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.08);
    for (const d of detune ? [-detune, detune] : [0]) {
      const o = ctx.createOscillator();
      o.type = type;
      o.frequency.value = freq;
      o.detune.value = d;
      o.connect(f);
      o.start(t);
      o.stop(t + dur + 0.12);
    }
    let out = f.connect(g);
    if (trem) {
      const amp = ctx.createGain();
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 4.5;
      const depth = ctx.createGain();
      depth.gain.value = 0.25;
      lfo.connect(depth).connect(amp.gain);
      lfo.start(t);
      lfo.stop(t + dur + 0.12);
      out = out.connect(amp);
    }
    out.connect(this.radioIn);
    if (send) {
      const sg = ctx.createGain();
      sg.gain.value = send;
      out.connect(sg).connect(this.radioSend);
    }
  }

  kick(when, gain) {
    const ctx = this.ctx, t = ctx.currentTime + when;
    const o = ctx.createOscillator();
    o.frequency.setValueAtTime(140, t);
    o.frequency.exponentialRampToValueAtTime(42, t + 0.12);
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.38);
    o.connect(g).connect(this.radioIn);
    o.start(t);
    o.stop(t + 0.4);
  }

  snare(when, gain, big) {
    const ctx = this.ctx, t = ctx.currentTime + when;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const f = ctx.createBiquadFilter();
    f.type = 'highpass';
    f.frequency.value = 1400;
    const g = ctx.createGain();
    const len = big ? 0.32 : 0.16;
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    src.connect(f).connect(g);
    g.connect(this.radioIn);
    if (big) g.connect(this.radioSend);
    src.start(t, Math.random());
    src.stop(t + len + 0.05);
    const o = ctx.createOscillator();
    o.type = 'triangle';
    o.frequency.setValueAtTime(220, t);
    o.frequency.exponentialRampToValueAtTime(150, t + 0.08);
    const og = ctx.createGain();
    og.gain.setValueAtTime(gain * 0.6, t);
    og.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
    o.connect(og).connect(this.radioIn);
    o.start(t);
    o.stop(t + 0.12);
  }

  hat(when, gain, open) {
    const ctx = this.ctx, t = ctx.currentTime + when;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const f = ctx.createBiquadFilter();
    f.type = 'highpass';
    f.frequency.value = 7500;
    const g = ctx.createGain();
    const len = open ? 0.22 : 0.045;
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    src.connect(f).connect(g).connect(this.radioIn);
    src.start(t, Math.random());
    src.stop(t + len + 0.05);
  }
}
