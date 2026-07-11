// Fixed-timestep game loop: physics at 120 Hz, render every rAF.
export class GameLoop {
  constructor(fixedStep = 1 / 120) {
    this.fixedStep = fixedStep;
    this.running = false;
    this.fps = 60;
    this._acc = 0;
    this._last = 0;
  }

  start({ fixed, frame }) {
    this.running = true;
    this._last = performance.now();
    const tick = (now) => {
      if (!this.running) return;
      let dt = (now - this._last) / 1000;
      this._last = now;
      dt = Math.min(dt, 0.1); // spiral-of-death guard
      this.fps += (1 / Math.max(dt, 1e-4) - this.fps) * 0.05;
      this._acc += dt;
      let steps = 0;
      while (this._acc >= this.fixedStep && steps < 12) {
        fixed(this.fixedStep);
        this._acc -= this.fixedStep;
        steps++;
      }
      frame(dt);
      this._raf = requestAnimationFrame(tick);
    };
    this._raf = requestAnimationFrame(tick);
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this._raf);
  }
}
