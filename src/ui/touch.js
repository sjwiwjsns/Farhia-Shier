// Touch controls for phones/tablets: a virtual stick (pitch/roll), a rudder
// bar, a persistent throttle slider, action buttons, and one-finger camera
// look with pinch zoom on the bare canvas. The overlay feeds the SAME Input
// axes/actions the keyboard and gamepad use — the sim doesn't know or care.
// Nothing here is created on non-touch devices.

export function isTouchDevice() {
  return (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) ||
    'ontouchstart' in window;
}

export class TouchControls {
  constructor(input, canvas) {
    this.input = input;
    this.stick = { active: false, x: 0, y: 0 };
    this.rudder = { active: false, x: 0 };
    this.throttle = null;   // null until first touched, then 0..1 (absolute)
    this.brake = false;

    const root = document.createElement('div');
    root.id = 'touch-ui';
    root.className = 'hidden';
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    document.body.appendChild(root);
    this.root = root;

    this.buildStick(root);
    this.buildRudder(root);
    this.buildThrottle(root);
    this.buildButtons(root);
    this.bindCanvasLook(canvas);

    input.touch = this; // Input.update() calls apply() after gamepad polling
  }

  // Called once per input update, after keyboard/gamepad — touch wins while
  // the player's finger is on a control, and the throttle slider stays
  // authoritative once it has been used.
  apply(ax, input) {
    if (this.stick.active) {
      ax.roll = this.stick.x;
      ax.pitch = this.stick.y;
    }
    if (this.rudder.active) ax.yaw = this.rudder.x;
    if (this.brake) ax.brakes = 1;
    input.touchThrottle = this.throttle;
  }

  show() { this.root.classList.remove('hidden'); }
  hide() { this.root.classList.add('hidden'); }

  // ------------------------------------------------------------ left stick
  buildStick(root) {
    const base = document.createElement('div');
    base.className = 'tc-stick';
    const nub = document.createElement('div');
    nub.className = 'tc-nub';
    base.appendChild(nub);
    root.appendChild(base);

    let pid = null;
    const setFromEvent = (e) => {
      const r = base.getBoundingClientRect();
      const radius = r.width / 2;
      let dx = (e.clientX - (r.left + radius)) / (radius * 0.78);
      let dy = (e.clientY - (r.top + radius)) / (radius * 0.78);
      const m = Math.hypot(dx, dy);
      if (m > 1) { dx /= m; dy /= m; }
      this.stick.x = dx;
      this.stick.y = dy; // drag DOWN = pull back = pitch up (matches S key)
      nub.style.transform = `translate(${dx * radius * 0.55}px, ${dy * radius * 0.55}px)`;
    };
    base.addEventListener('pointerdown', (e) => {
      pid = e.pointerId;
      try { base.setPointerCapture(pid); } catch { /* synthetic pointers can't be captured */ }
      this.stick.active = true;
      setFromEvent(e);
      e.preventDefault();
    });
    base.addEventListener('pointermove', (e) => {
      if (e.pointerId === pid && this.stick.active) setFromEvent(e);
    });
    const end = (e) => {
      if (e.pointerId !== pid) return;
      pid = null;
      this.stick.active = false;
      this.stick.x = this.stick.y = 0;
      nub.style.transform = '';
    };
    base.addEventListener('pointerup', end);
    base.addEventListener('pointercancel', end);
  }

  // ------------------------------------------------------------ rudder bar
  buildRudder(root) {
    const bar = document.createElement('div');
    bar.className = 'tc-rudder';
    const handle = document.createElement('div');
    handle.className = 'tc-handle';
    bar.appendChild(handle);
    root.appendChild(bar);

    let pid = null;
    const setFromEvent = (e) => {
      const r = bar.getBoundingClientRect();
      let x = ((e.clientX - r.left) / r.width) * 2 - 1;
      x = Math.max(-1, Math.min(1, x * 1.15));
      this.rudder.x = x;
      handle.style.left = `${50 + x * 36}%`;
    };
    bar.addEventListener('pointerdown', (e) => {
      pid = e.pointerId;
      try { bar.setPointerCapture(pid); } catch { /* ditto */ }
      this.rudder.active = true;
      setFromEvent(e);
      e.preventDefault();
    });
    bar.addEventListener('pointermove', (e) => {
      if (e.pointerId === pid && this.rudder.active) setFromEvent(e);
    });
    const end = (e) => {
      if (e.pointerId !== pid) return;
      pid = null;
      this.rudder.active = false;
      this.rudder.x = 0;
      handle.style.left = '50%';
    };
    bar.addEventListener('pointerup', end);
    bar.addEventListener('pointercancel', end);
  }

  // ------------------------------------------------------- throttle slider
  buildThrottle(root) {
    const track = document.createElement('div');
    track.className = 'tc-thr';
    const fill = document.createElement('div');
    fill.className = 'tc-fill';
    const pct = document.createElement('div');
    pct.className = 'tc-pct';
    pct.textContent = 'THR';
    track.appendChild(fill);
    track.appendChild(pct);
    root.appendChild(track);
    this._thrFill = fill;
    this._thrPct = pct;

    let pid = null;
    const setFromEvent = (e) => {
      const r = track.getBoundingClientRect();
      const v = Math.max(0, Math.min(1, 1 - (e.clientY - r.top) / r.height));
      this.setThrottle(v);
    };
    track.addEventListener('pointerdown', (e) => {
      pid = e.pointerId;
      try { track.setPointerCapture(pid); } catch { /* ditto */ }
      setFromEvent(e);
      e.preventDefault();
    });
    track.addEventListener('pointermove', (e) => {
      if (e.pointerId === pid) setFromEvent(e);
    });
    const end = (e) => { if (e.pointerId === pid) pid = null; };
    track.addEventListener('pointerup', end);
    track.addEventListener('pointercancel', end);
  }

  setThrottle(v) {
    this.throttle = v;
    this._thrFill.style.height = `${Math.round(v * 100)}%`;
    this._thrPct.textContent = `${Math.round(v * 100)}%`;
  }

  resetForFlight() {
    // new flight starts at idle; keep the slider honest
    this.throttle = null;
    this._thrFill.style.height = '0%';
    this._thrPct.textContent = 'THR';
  }

  // ---------------------------------------------------------------- buttons
  buildButtons(root) {
    const mk = (label, action, { hold = false } = {}) => {
      const b = document.createElement('div');
      b.className = 'tc-btn';
      b.textContent = label;
      b.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        b.classList.add('on');
        if (hold) this.brake = true;
        else this.input.actions.push(action);
      });
      const off = () => {
        b.classList.remove('on');
        if (hold) this.brake = false;
      };
      b.addEventListener('pointerup', off);
      b.addEventListener('pointercancel', off);
      b.addEventListener('pointerleave', off);
      return b;
    };

    const cluster = document.createElement('div');
    cluster.className = 'tc-btns';
    cluster.appendChild(mk('GEAR', 'gear'));
    cluster.appendChild(mk('BRK', null, { hold: true }));
    cluster.appendChild(mk('FLAP−', 'flapsUp'));
    cluster.appendChild(mk('FLAP+', 'flapsDown'));
    cluster.appendChild(mk('SPLR', 'spoilers'));
    cluster.appendChild(mk('REV', 'reversers'));
    root.appendChild(cluster);

    const top = document.createElement('div');
    top.className = 'tc-top';
    top.appendChild(mk('CAM', 'camera'));
    top.appendChild(mk('HUD', 'hud'));
    top.appendChild(mk('ATC', 'atc'));
    top.appendChild(mk('❚❚', 'pause'));
    root.appendChild(top);
  }

  // -------------------------------------------- canvas: look + pinch zoom
  bindCanvasLook(canvas) {
    const look = this.input.look;
    const touches = new Map();
    let lastPinch = 0;
    let lastTap = 0;

    canvas.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'touch') return; // mouse path already handled
      touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (touches.size === 2) {
        const [a, b] = [...touches.values()];
        lastPinch = Math.hypot(a.x - b.x, a.y - b.y);
      }
      const now = performance.now();
      if (now - lastTap < 300) { look.x = 0; look.y = 0; } // double-tap recenters
      lastTap = now;
    });
    canvas.addEventListener('pointermove', (e) => {
      if (!touches.has(e.pointerId)) return;
      const t = touches.get(e.pointerId);
      const dx = e.clientX - t.x, dy = e.clientY - t.y;
      t.x = e.clientX; t.y = e.clientY;
      if (touches.size === 1) {
        look.x += dx * 0.006;
        look.y = Math.max(-1.2, Math.min(1.2, look.y + dy * 0.006));
      } else if (touches.size === 2) {
        const [a, b] = [...touches.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        look.zoom = Math.max(-1, Math.min(2, look.zoom - (d - lastPinch) * 0.008));
        lastPinch = d;
      }
    });
    const end = (e) => touches.delete(e.pointerId);
    canvas.addEventListener('pointerup', end);
    canvas.addEventListener('pointercancel', end);
  }
}
