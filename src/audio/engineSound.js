// Fully synthesized audio (no samples): engine sound sets per powerplant era,
// wind noise, warning tones and impact effects, all via WebAudio.
// Profiles: turbojet | lbpr (low-bypass: 707/727/DC-9/MD-80) |
//           hbpr-classic | hbpr | hbpr-modern | hbpr-heavy
const PROFILES = {
  'turbojet': { rumble: 420, whine: 2100, fan: 640, buzz: 0.5, gain: 1.1 },
  'lbpr': { rumble: 320, whine: 1500, fan: 470, buzz: 0.45, gain: 1.0 },
  'hbpr-classic': { rumble: 220, whine: 1000, fan: 360, buzz: 0.3, gain: 0.95 },
  'hbpr': { rumble: 180, whine: 780, fan: 320, buzz: 0.22, gain: 0.9 },
  'hbpr-modern': { rumble: 150, whine: 640, fan: 290, buzz: 0.16, gain: 0.85 },
  'hbpr-heavy': { rumble: 120, whine: 560, fan: 250, buzz: 0.2, gain: 1.05 }
};

export class AudioSystem {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.started = false;
  }

  ensureContext() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.5;
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }

  noiseBuffer() {
    if (this._noise) return this._noise;
    const len = this.ctx.sampleRate * 2;
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      last = (last + 0.04 * w) / 1.04; // brown-ish
      d[i] = (w * 0.4 + last * 2.4) * 0.5;
    }
    this._noise = buf;
    return buf;
  }

  start(profileName) {
    this.ensureContext();
    this.stopEngine();
    const p = PROFILES[profileName] || PROFILES['hbpr'];
    this.profile = p;
    const ctx = this.ctx;

    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer();
    src.loop = true;

    // rumble
    this.rumbleFilter = ctx.createBiquadFilter();
    this.rumbleFilter.type = 'lowpass';
    this.rumbleFilter.frequency.value = p.rumble;
    this.rumbleGain = ctx.createGain(); this.rumbleGain.gain.value = 0;
    src.connect(this.rumbleFilter).connect(this.rumbleGain).connect(this.master);

    // whine (compressor-noise band)
    this.whineFilter = ctx.createBiquadFilter();
    this.whineFilter.type = 'bandpass';
    this.whineFilter.frequency.value = p.whine;
    this.whineFilter.Q.value = 6;
    this.whineGain = ctx.createGain(); this.whineGain.gain.value = 0;
    src.connect(this.whineFilter).connect(this.whineGain).connect(this.master);

    // fan/buzz tones
    this.fanOsc = ctx.createOscillator();
    this.fanOsc.type = 'sawtooth';
    this.fanOsc.frequency.value = 60;
    this.fanGain = ctx.createGain(); this.fanGain.gain.value = 0;
    this.fanOsc.connect(this.fanGain).connect(this.master);
    this.fanOsc2 = ctx.createOscillator();
    this.fanOsc2.type = 'sawtooth';
    this.fanOsc2.frequency.value = 61.7;
    this.fanOsc2.connect(this.fanGain);
    this.fanOsc.start(); this.fanOsc2.start();

    // wind
    this.windFilter = ctx.createBiquadFilter();
    this.windFilter.type = 'highpass';
    this.windFilter.frequency.value = 500;
    this.windGain = ctx.createGain(); this.windGain.gain.value = 0;
    src.connect(this.windFilter).connect(this.windGain).connect(this.master);

    src.start();
    this.engineSrc = src;
    this.started = true;
  }

  stopEngine() {
    try {
      this.engineSrc?.stop();
      this.fanOsc?.stop();
      this.fanOsc2?.stop();
    } catch { /* already stopped */ }
    this.engineSrc = null;
  }

  update(dt, fm) {
    if (!this.started || !this.ctx || this.muted) return;
    const p = this.profile;
    const n1 = fm.n1;
    const t = this.ctx.currentTime;
    const rev = fm.reversers ? 1.9 : 1;
    this.rumbleGain.gain.setTargetAtTime(Math.pow(n1, 1.7) * 0.42 * p.gain * rev, t, 0.08);
    this.whineGain.gain.setTargetAtTime(Math.pow(n1, 1.3) * 0.05 * p.gain * (1 + p.buzz), t, 0.08);
    this.whineFilter.frequency.setTargetAtTime(p.whine * (0.5 + n1 * 0.9), t, 0.1);
    this.fanGain.gain.setTargetAtTime(Math.pow(n1, 1.2) * 0.035 * p.gain, t, 0.08);
    const ff = 50 + n1 * p.fan;
    this.fanOsc.frequency.setTargetAtTime(ff, t, 0.15);
    this.fanOsc2.frequency.setTargetAtTime(ff * 1.011 + 1, t, 0.15);
    this.windGain.gain.setTargetAtTime(Math.pow(Math.min(fm.iasKts / 380, 1.4), 2) * 0.16 + fm.buffet * 0.12, t, 0.1);
    // stall clacker
    if (fm.stallWarn && !this._stallInt) {
      this._stallInt = setInterval(() => this.beep(650, 0.06, 0.12, 'square'), 180);
    } else if (!fm.stallWarn && this._stallInt) {
      clearInterval(this._stallInt);
      this._stallInt = null;
    }
  }

  beep(freq, dur, gain = 0.1, type = 'sine') {
    if (!this.ctx || this.muted) return;
    const o = this.ctx.createOscillator();
    o.type = type; o.frequency.value = freq;
    const g = this.ctx.createGain();
    g.gain.value = gain;
    g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
    o.connect(g).connect(this.master);
    o.start();
    o.stop(this.ctx.currentTime + dur);
  }

  event(name, mag = 1) {
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    if (name === 'touchdown') {
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuffer();
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass'; f.frequency.value = 200;
      const g = ctx.createGain();
      g.gain.value = Math.min(0.15 * mag, 0.6);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      src.connect(f).connect(g).connect(this.master);
      src.start();
      src.stop(ctx.currentTime + 0.6);
    } else if (name === 'crash') {
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuffer();
      const g = ctx.createGain();
      g.gain.value = 0.9;
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.8);
      src.connect(g).connect(this.master);
      src.start();
      src.stop(ctx.currentTime + 3);
      this.beep(60, 1.6, 0.5, 'sine');
    } else if (name === 'gearWarn') {
      this.beep(420, 0.4, 0.14, 'square');
    } else if (name === 'click') {
      this.beep(1200, 0.03, 0.05, 'square');
    }
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.value = m ? 0 : 0.5;
    if (m && this._stallInt) { clearInterval(this._stallInt); this._stallInt = null; }
  }

  dispose() {
    this.stopEngine();
    if (this._stallInt) clearInterval(this._stallInt);
  }
}
