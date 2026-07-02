// ATC-lite: radio-style clearances and pilot/GPWS callouts driven by a simple
// flight-phase machine. Text only (rendered into the radio log box).
import { wrap360 } from '../core/math.js';

export class ATC {
  constructor(airport, airline, runwayEnd, onMessage) {
    this.airport = airport;
    this.callsign = airline.callsign;
    this.flightNo = 100 + Math.floor(Math.random() * 899);
    this.runwayEnd = runwayEnd;
    this.onMessage = onMessage;
    this.phase = 'ready';
    this.timer = 0;
    this.gpwsLast = 1000;
    this.saidV1 = false;
    this.saidRotate = false;
    this.saidPositive = false;
  }

  say(from, text) {
    this.onMessage?.({ from, text });
  }

  get cs() { return `${this.callsign} ${this.flightNo}`; }

  begin(spawnMode) {
    if (spawnMode === 'final') {
      this.phase = 'approach';
      this.say('TWR', `${this.cs}, ${this.airport.iata} tower, continue approach runway ${this.runwayEnd}, wind 240 at 7, cleared to land.`);
      this.say('YOU', `Cleared to land runway ${this.runwayEnd}, ${this.cs}.`);
    } else {
      this.say('TWR', `${this.cs}, ${this.airport.iata} tower, wind 240 at 7, runway ${this.runwayEnd}, cleared for takeoff.`);
      this.say('YOU', `Cleared for takeoff runway ${this.runwayEnd}, ${this.cs}.`);
      this.phase = 'takeoff';
    }
  }

  update(dt, fm) {
    this.timer += dt;
    const aglFt = fm.aglM * 3.28084;

    if (this.phase === 'takeoff') {
      if (!this.saidV1 && fm.onGround && fm.iasKts > fm.vr - 8 && fm.iasKts < fm.vr) {
        this.saidV1 = true; this.say('PM', 'V1.');
      }
      if (!this.saidRotate && fm.iasKts >= fm.vr) {
        this.saidRotate = true; this.say('PM', 'Rotate.');
      }
      if (!this.saidPositive && !fm.onGround && fm.vsFpm > 400) {
        this.saidPositive = true; this.say('PM', 'Positive rate.');
      }
      if (aglFt > 900) {
        this.phase = 'enroute';
        this.say('TWR', `${this.cs}, contact departure. Good day.`);
      }
    } else if (this.phase === 'enroute') {
      const distM = Math.hypot(fm.pos.x, fm.pos.z);
      if (distM < 14000 && aglFt < 4500 && fm.vsFpm < -200) {
        this.phase = 'approach';
        this.say('TWR', `${this.cs}, ${this.airport.iata} tower, wind 240 at 7, runway ${this.runwayEnd}, cleared to land.`);
        this.say('YOU', `Cleared to land runway ${this.runwayEnd}, ${this.cs}.`);
      }
    } else if (this.phase === 'approach') {
      // GPWS altitude callouts
      for (const cb of [500, 100, 50, 40, 30, 20, 10]) {
        if (this.gpwsLast > cb && aglFt <= cb && fm.vsFpm < 0 && !fm.onGround) {
          this.say('GPWS', `${cb}.`);
          break;
        }
      }
      if (fm.onGround && fm.iasKts < 35) {
        this.phase = 'rollout';
        this.say('TWR', `${this.cs}, exit when able, taxi to the gate. Welcome to ${this.airport.city}.`);
      }
      // go-around → back to enroute logic
      if (aglFt > 3000 && fm.vsFpm > 500) this.phase = 'enroute';
    }
    this.gpwsLast = aglFt;
  }
}
