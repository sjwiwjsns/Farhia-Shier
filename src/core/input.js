// Unified input: keyboard, mouse-look and gamepad/joystick.
// Continuous axes are exposed on `input.axes`; discrete actions are queued
// and consumed once per physics step via consumeActions().
import { clamp, moveToward } from './math.js';

const KEYMAP = {
  pitchUp: ['KeyS', 'ArrowDown'],
  pitchDown: ['KeyW', 'ArrowUp'],
  rollLeft: ['KeyA', 'ArrowLeft'],
  rollRight: ['KeyD', 'ArrowRight'],
  yawLeft: ['KeyQ'],
  yawRight: ['KeyE'],
  throttleUp: ['ShiftLeft', 'ShiftRight', 'Equal'],
  throttleDown: ['ControlLeft', 'ControlRight', 'Minus'],
  brakes: ['KeyB'],
  trimUp: ['BracketRight'],
  trimDown: ['BracketLeft']
};

const ACTION_KEYS = {
  KeyG: 'gear',
  KeyF: 'flapsDown',
  KeyV: 'flapsUp',
  Space: 'spoilers',
  KeyZ: 'reversers',
  KeyC: 'camera',
  KeyH: 'hud',
  KeyP: 'pause',
  Escape: 'pause',
  KeyM: 'mute',
  KeyT: 'atc'
};

export class Input {
  constructor(domElement) {
    this.dom = domElement;
    this.keys = new Set();
    this.actions = [];
    this.axes = { pitch: 0, roll: 0, yaw: 0, throttleDelta: 0, brakes: 0, trim: 0 };
    // Absolute overrides (null = keyboard in control)
    this.gamepadThrottle = null;
    this.touchThrottle = null;
    this.touch = null; // TouchControls registers itself here on touch devices
    this.look = { x: 0, y: 0, zoom: 0, dragging: false };
    this.hasGamepad = false;

    window.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) return;
      this.keys.add(e.code);
      const action = ACTION_KEYS[e.code];
      if (action) {
        this.actions.push(action);
        if (e.code === 'Space') e.preventDefault();
      }
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());

    let lastX = 0, lastY = 0;
    domElement.addEventListener('mousedown', (e) => {
      this.look.dragging = true;
      lastX = e.clientX; lastY = e.clientY;
    });
    window.addEventListener('mouseup', () => (this.look.dragging = false));
    window.addEventListener('mousemove', (e) => {
      if (!this.look.dragging) return;
      this.look.x += (e.clientX - lastX) * 0.005;
      this.look.y = clamp(this.look.y + (e.clientY - lastY) * 0.005, -1.2, 1.2);
      lastX = e.clientX; lastY = e.clientY;
    });
    domElement.addEventListener('wheel', (e) => {
      this.look.zoom = clamp(this.look.zoom + Math.sign(e.deltaY) * 0.1, -1, 2);
    }, { passive: true });
    domElement.addEventListener('dblclick', () => { this.look.x = 0; this.look.y = 0; });
  }

  down(name) {
    return KEYMAP[name].some((code) => this.keys.has(code));
  }

  consumeActions() {
    const a = this.actions;
    this.actions = [];
    return a;
  }

  update(dt) {
    const ax = this.axes;
    // Keyboard: ramp toward held direction, spring back to center.
    const kbAxis = (cur, neg, pos, rate = 2.6, recenter = 3.5) => {
      const t = (this.down(pos) ? 1 : 0) - (this.down(neg) ? 1 : 0);
      return t !== 0 ? moveToward(cur, t, rate, dt) : moveToward(cur, 0, recenter, dt);
    };
    ax.pitch = kbAxis(ax.pitch, 'pitchDown', 'pitchUp');
    ax.roll = kbAxis(ax.roll, 'rollLeft', 'rollRight');
    ax.yaw = kbAxis(ax.yaw, 'yawLeft', 'yawRight', 2.2, 2.8);
    ax.throttleDelta = (this.down('throttleUp') ? 1 : 0) - (this.down('throttleDown') ? 1 : 0);
    ax.brakes = this.down('brakes') ? 1 : 0;
    ax.trim = (this.down('trimUp') ? 1 : 0) - (this.down('trimDown') ? 1 : 0);

    this.pollGamepad(ax);
    // touch overlay last: a finger on a control wins over everything
    if (this.touch) this.touch.apply(ax, this);
    else this.touchThrottle = null;
  }

  pollGamepad(ax) {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    const pad = [...pads].find((p) => p && p.connected);
    this.hasGamepad = !!pad;
    if (!pad) { this.gamepadThrottle = null; return; }

    const dz = (v) => (Math.abs(v) < 0.12 ? 0 : v);
    const roll = dz(pad.axes[0] || 0);
    const pitch = dz(pad.axes[1] || 0);
    // Rudder pedals / twist axis: prefer axis 5 (pedals), else right-stick X.
    const yaw = dz(pad.axes[5] !== undefined && Math.abs(pad.axes[5]) > 0.02 ? pad.axes[5] : (pad.axes[2] || 0));
    if (roll !== 0) ax.roll = roll;
    if (pitch !== 0) ax.pitch = pitch;
    if (yaw !== 0) ax.yaw = yaw;

    // Throttle: axis 3 (inverted lever, common on joysticks) or triggers 6/7.
    if (pad.axes[3] !== undefined && Math.abs(pad.axes[3]) > 0.02) {
      this.gamepadThrottle = clamp((1 - pad.axes[3]) / 2, 0, 1);
    } else if (pad.buttons[7] || pad.buttons[6]) {
      const up = pad.buttons[7] ? pad.buttons[7].value : 0;
      const down = pad.buttons[6] ? pad.buttons[6].value : 0;
      ax.throttleDelta = up - down;
      this.gamepadThrottle = null;
    }

    // Edge-detect buttons for discrete actions.
    if (!this._padPrev) this._padPrev = [];
    const map = { 0: 'gear', 2: 'flapsDown', 3: 'flapsUp', 1: 'spoilers', 4: 'camera', 5: 'reversers', 9: 'pause', 8: 'hud' };
    for (const [idx, action] of Object.entries(map)) {
      const pressed = pad.buttons[idx] && pad.buttons[idx].pressed;
      if (pressed && !this._padPrev[idx]) this.actions.push(action);
      this._padPrev[idx] = pressed;
    }
    if (pad.buttons[10] && pad.buttons[10].pressed) ax.brakes = 1;
  }
}
