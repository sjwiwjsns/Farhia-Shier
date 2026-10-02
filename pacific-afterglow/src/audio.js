// Everything you hear is synthesized live with Web Audio: engine, turbo,
// tires, wind, surf, impacts, horns and the checkpoint chime.

export class Audio {
  constructor() {
    this.ctx = null;
    this.enabled = false;
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
    comp.threshold.value = -16;
    comp.ratio.value = 4;
    master.connect(comp).connect(ctx.destination);

    // White noise source shared by several voices.
    const len = ctx.sampleRate * 2;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    this.noiseBuffer = buf;
    const noise = () => {
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.loop = true;
      src.start();
      return src;
    };

    // Engine: detuned saw + square an octave down + sub sine, soft clipped and filtered.
    const engineGain = (this.engineGain = ctx.createGain());
    engineGain.gain.value = 0;
    const filter = (this.engineFilter = ctx.createBiquadFilter());
    filter.type = 'lowpass';
    filter.Q.value = 2.5;
    const shaper = ctx.createWaveShaper();
    const curve = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) {
      const x = (i / 1023) * 2 - 1;
      curve[i] = Math.tanh(x * 2.4);
    }
    shaper.curve = curve;
    this.oscs = [];
    for (const [type, mult, gain] of [['sawtooth', 1, 0.5], ['sawtooth', 1.007, 0.35], ['square', 0.5, 0.3], ['sine', 0.25, 0.6]]) {
      const o = ctx.createOscillator();
      o.type = type;
      const g = ctx.createGain();
      g.gain.value = gain;
      o.connect(g).connect(shaper);
      o.start();
      this.oscs.push([o, mult]);
    }
    // Firing-order rumble: amplitude wobble at a fraction of engine speed.
    const am = ctx.createGain();
    am.gain.value = 1;
    this.rumble = ctx.createOscillator();
    this.rumble.type = 'triangle';
    const rumbleDepth = ctx.createGain();
    rumbleDepth.gain.value = 0.35;
    this.rumble.connect(rumbleDepth).connect(am.gain);
    this.rumble.start();
    shaper.connect(am).connect(filter).connect(engineGain).connect(master);

    // Turbo whistle.
    this.turbo = ctx.createOscillator();
    this.turbo.type = 'sine';
    this.turboGain = ctx.createGain();
    this.turboGain.gain.value = 0;
    this.turbo.connect(this.turboGain).connect(master);
    this.turbo.start();

    // Tire screech: band-passed noise.
    const screechFilter = ctx.createBiquadFilter();
    screechFilter.type = 'bandpass';
    screechFilter.frequency.value = 1350;
    screechFilter.Q.value = 6;
    this.screechGain = ctx.createGain();
    this.screechGain.gain.value = 0;
    noise().connect(screechFilter).connect(this.screechGain).connect(master);
    this.screechFilter = screechFilter;

    // Wind and road noise.
    const windFilter = ctx.createBiquadFilter();
    windFilter.type = 'lowpass';
    windFilter.frequency.value = 700;
    this.windGain = ctx.createGain();
    this.windGain.gain.value = 0;
    noise().connect(windFilter).connect(this.windGain).connect(master);
    this.windFilter = windFilter;

    // Surf: low rumble that swells like waves.
    const surfFilter = ctx.createBiquadFilter();
    surfFilter.type = 'lowpass';
    surfFilter.frequency.value = 520;
    this.surfGain = ctx.createGain();
    this.surfGain.gain.value = 0;
    noise().connect(surfFilter).connect(this.surfGain).connect(master);

    // Nitro hiss.
    const nitroFilter = ctx.createBiquadFilter();
    nitroFilter.type = 'highpass';
    nitroFilter.frequency.value = 2500;
    this.nitroGain = ctx.createGain();
    this.nitroGain.gain.value = 0;
    noise().connect(nitroFilter).connect(this.nitroGain).connect(master);
  }

  setEnabled(on) {
    this.enabled = on;
    if (on) this.start();
    if (this.ctx) this.master.gain.setTargetAtTime(on ? 0.9 : 0, this.ctx.currentTime, 0.1);
  }

  update(state) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const { rpm, throttle, speed, slip, boosting, active, shoreDistance, time } = state;
    const on = active ? 1 : 0;
    const f = (rpm / 60) * 4; // V8: four firing pulses per revolution
    for (const [o, mult] of this.oscs) o.frequency.setTargetAtTime(f * mult * 0.5, t, 0.03);
    this.rumble.frequency.setTargetAtTime(f * 0.125, t, 0.05);
    this.engineFilter.frequency.setTargetAtTime(240 + rpm * 0.16 + throttle * rpm * 0.28, t, 0.05);
    this.engineGain.gain.setTargetAtTime(on * (0.07 + throttle * 0.09 + (rpm / 7400) * 0.05), t, 0.05);
    this.turbo.frequency.setTargetAtTime(1400 + rpm * 0.55, t, 0.1);
    this.turboGain.gain.setTargetAtTime(on * throttle * (rpm / 7400) ** 2 * 0.012, t, 0.1);
    const screech = on * Math.min(Math.max(slip - 3, 0) / 10, 1);
    this.screechGain.gain.setTargetAtTime(screech * 0.09, t, 0.06);
    this.screechFilter.frequency.setTargetAtTime(1100 + Math.min(slip, 20) * 25, t, 0.1);
    const v = Math.abs(speed);
    this.windGain.gain.setTargetAtTime(on * Math.min((v / 60) ** 2, 1) * 0.1, t, 0.2);
    this.windFilter.frequency.setTargetAtTime(400 + v * 18, t, 0.2);
    const surfNear = Math.max(0, 1 - shoreDistance / 140);
    const swell = 0.55 + 0.45 * Math.sin(time * 0.7) * Math.sin(time * 0.23 + 1);
    this.surfGain.gain.setTargetAtTime(surfNear * swell * 0.11, t, 0.3);
    this.nitroGain.gain.setTargetAtTime(on * (boosting ? 0.05 : 0), t, 0.05);
  }

  burst(duration, filterType, freq, gain, q = 1) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const f = ctx.createBiquadFilter();
    f.type = filterType;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    src.connect(f).connect(g).connect(this.master);
    src.start(t, Math.random());
    src.stop(t + duration + 0.05);
  }

  impact(strength) {
    const s = Math.min(strength / 20, 1);
    this.burst(0.35 + s * 0.3, 'lowpass', 300 + s * 900, 0.25 + s * 0.6);
    if (s > 0.35) this.burst(0.25, 'bandpass', 3200, 0.12 * s, 2); // glass and metal
  }

  shift(up) {
    if (up) this.burst(0.18, 'highpass', 1800, 0.08); // blow-off
  }

  horn(distance) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const vol = Math.min(0.12, 6 / Math.max(distance, 6) * 0.12);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.02);
    g.gain.setValueAtTime(vol, t + 0.45);
    g.gain.linearRampToValueAtTime(0, t + 0.55);
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 1800;
    for (const hz of [349, 440]) {
      const o = ctx.createOscillator();
      o.type = 'square';
      o.frequency.value = hz;
      o.connect(f);
      o.start(t);
      o.stop(t + 0.6);
    }
    f.connect(g).connect(this.master);
  }

  chime(final = false) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const notes = final ? [523.25, 659.25, 783.99, 1046.5] : [659.25, 987.77];
    notes.forEach((hz, i) => {
      const o = ctx.createOscillator();
      o.type = 'triangle';
      o.frequency.value = hz;
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
}
