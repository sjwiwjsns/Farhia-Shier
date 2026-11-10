// Keyboard, touch and gamepad merged into one analog input state.

export class Input {
  constructor() {
    this.keys = new Set();
    this.state = { throttle: 0, brake: 0, steer: 0, handbrake: false, nitro: false };
    this.padButtons = new Set();
    this.onPadPress = null;
  }

  clear() {
    this.keys.clear();
  }

  poll() {
    const k = this.keys;
    let throttle = k.has('KeyW') || k.has('ArrowUp') ? 1 : 0;
    let brake = k.has('KeyS') || k.has('ArrowDown') ? 1 : 0;
    let steer = (k.has('KeyA') || k.has('ArrowLeft') ? 1 : 0) - (k.has('KeyD') || k.has('ArrowRight') ? 1 : 0);
    let handbrake = k.has('Space');
    let nitro = k.has('ShiftLeft') || k.has('ShiftRight');

    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const pad of pads) {
      if (!pad || !pad.connected) continue;
      const axis = pad.axes[0] || 0;
      if (Math.abs(axis) > 0.12) steer = -Math.sign(axis) * ((Math.abs(axis) - 0.12) / 0.88) ** 1.4;
      const rt = pad.buttons[7]?.value || 0, lt = pad.buttons[6]?.value || 0;
      throttle = Math.max(throttle, rt);
      brake = Math.max(brake, lt);
      handbrake = handbrake || !!pad.buttons[0]?.pressed;
      nitro = nitro || !!pad.buttons[1]?.pressed || !!pad.buttons[2]?.pressed;
      // Edge-triggered buttons: Y camera, Start pause, Back map, RB reset.
      for (const [index, name] of [[3, 'camera'], [9, 'pause'], [8, 'map'], [5, 'reset']]) {
        const down = !!pad.buttons[index]?.pressed;
        const key = pad.index + ':' + index;
        if (down && !this.padButtons.has(key)) this.onPadPress?.(name);
        if (down) this.padButtons.add(key); else this.padButtons.delete(key);
      }
    }
    Object.assign(this.state, { throttle, brake, steer, handbrake, nitro });
    return this.state;
  }
}
