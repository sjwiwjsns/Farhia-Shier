// Canvas HUD. Three modes: full (glass instruments), minimal, off.
// In cockpit camera an additional family-branded panel is drawn along the
// bottom (Boeing classic dials / Boeing NG CRTs / Airbus FBW / MD-DC / SST).
import { clamp, wrap360 } from '../core/math.js';

const PANEL_STYLES = {
  'boeing-classic': { bg: '#6e6656', face: '#20211f', accent: '#d8d2c0', name: 'BOEING CLASSIC PANEL', screens: false },
  'boeing-ng': { bg: '#3d434a', face: '#0c1013', accent: '#8fd0e8', name: 'BOEING NG FLIGHT DECK', screens: true },
  'airbus-fbw': { bg: '#4a5058', face: '#0a0e12', accent: '#9fe0a8', name: 'AIRBUS FBW FLIGHT DECK', screens: true },
  'mddc': { bg: '#5c5f63', face: '#1b1c1a', accent: '#e0dcc8', name: 'MD / DC PANEL', screens: false },
  'supersonic': { bg: '#33373c', face: '#101214', accent: '#f0c060', name: 'SST PANEL', screens: false }
};

export class HUD {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.mode = 'full'; // full | minimal | off
    this.fps = 0;
    this.blink = 0;
  }

  cycle() {
    this.mode = { full: 'minimal', minimal: 'off', off: 'full' }[this.mode];
    return this.mode;
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  draw(dt, fm, entity, camMode, extra = {}) {
    const g = this.ctx;
    const W = this.canvas.width, H = this.canvas.height;
    g.clearRect(0, 0, W, H);
    this.blink += dt;
    if (camMode === 'cabin') { this.drawWarnings(fm, W, H); this.drawFps(extra.fps); return; }
    if (this.mode === 'off' && camMode !== 'cockpit') { this.drawFps(extra.fps); return; }

    if (camMode === 'cockpit') this.drawPanel(fm, entity, W, H);
    if (this.mode === 'off') { this.drawFps(extra.fps); return; }

    g.font = '13px "Lucida Console", monospace';
    if (this.mode === 'minimal') {
      this.drawMinimal(fm, W, H);
      this.drawWarnings(fm, W, H);
      this.drawFps(extra.fps);
      return;
    }

    const cx = W / 2, cy = H * 0.42;
    const green = 'rgba(140,255,160,0.92)';
    g.strokeStyle = green;
    g.fillStyle = green;
    g.lineWidth = 1.6;

    // ---- attitude (pitch ladder + horizon) ----
    if (camMode !== 'cockpit') {
      g.save();
      g.translate(cx, cy);
      g.rotate(-fm.bankDeg * Math.PI / 180);
      const pxPerDeg = H * 0.012;
      g.translate(0, fm.pitchDeg * pxPerDeg);
      g.beginPath(); g.moveTo(-W * 0.14, 0); g.lineTo(-W * 0.03, 0); g.moveTo(W * 0.03, 0); g.lineTo(W * 0.14, 0); g.stroke();
      for (let p = -30; p <= 30; p += 10) {
        if (!p) continue;
        const y = -p * pxPerDeg;
        g.beginPath(); g.moveTo(-60, y); g.lineTo(-20, y); g.moveTo(20, y); g.lineTo(60, y); g.stroke();
        g.fillText(String(Math.abs(p)), 66, y + 4);
      }
      g.restore();
      // aircraft symbol
      g.beginPath();
      g.moveTo(cx - 40, cy); g.lineTo(cx - 12, cy); g.lineTo(cx, cy + 9); g.lineTo(cx + 12, cy); g.lineTo(cx + 40, cy);
      g.stroke();
    }

    // ---- speed tape (left) ----
    const tapeH = H * 0.34, tapeY = cy - tapeH / 2, spX = W * 0.16;
    g.strokeRect(spX - 44, tapeY, 62, tapeH);
    g.save();
    g.beginPath(); g.rect(spX - 44, tapeY, 62, tapeH); g.clip();
    const ias = fm.iasKts;
    for (let s = Math.floor((ias - 60) / 20) * 20; s <= ias + 60; s += 20) {
      if (s < 0) continue;
      const y = cy + (ias - s) * (tapeH / 120);
      g.beginPath(); g.moveTo(spX + 8, y); g.lineTo(spX + 18, y); g.stroke();
      g.fillText(String(s), spX - 36, y + 4);
    }
    // stall band
    const vs = fm.variant.perf.stallKts * (1 - 0.25 * fm.flap);
    const vsY = cy + (ias - vs) * (tapeH / 120);
    g.fillStyle = 'rgba(255,70,70,0.55)';
    g.fillRect(spX + 10, vsY, 8, Math.max(tapeY + tapeH - vsY, 0));
    g.fillStyle = green;
    g.restore();
    g.fillStyle = '#08130a';
    g.fillRect(spX - 44, cy - 12, 62, 24);
    g.strokeRect(spX - 44, cy - 12, 62, 24);
    g.fillStyle = green;
    g.font = 'bold 16px "Lucida Console", monospace';
    g.fillText(String(Math.round(ias)), spX - 34, cy + 6);
    g.font = '13px "Lucida Console", monospace';
    g.fillText('IAS KT', spX - 40, tapeY - 8);
    if (fm.mach > 0.45) g.fillText('M ' + fm.mach.toFixed(2), spX - 40, tapeY + tapeH + 18);

    // ---- altitude tape (right) ----
    const alX = W * 0.84;
    g.strokeRect(alX - 18, tapeY, 74, tapeH);
    g.save();
    g.beginPath(); g.rect(alX - 18, tapeY, 74, tapeH); g.clip();
    const alt = fm.altFt;
    for (let a = Math.floor((alt - 600) / 200) * 200; a <= alt + 600; a += 200) {
      const y = cy + (alt - a) * (tapeH / 1200);
      g.beginPath(); g.moveTo(alX - 16, y); g.lineTo(alX - 6, y); g.stroke();
      g.fillText(String(Math.max(a, -1000)), alX - 2, y + 4);
    }
    g.restore();
    g.fillStyle = '#08130a';
    g.fillRect(alX - 18, cy - 12, 74, 24);
    g.strokeRect(alX - 18, cy - 12, 74, 24);
    g.fillStyle = green;
    g.font = 'bold 16px "Lucida Console", monospace';
    g.fillText(String(Math.round(alt)), alX - 10, cy + 6);
    g.font = '13px "Lucida Console", monospace';
    g.fillText('ALT FT', alX - 12, tapeY - 8);
    // VSI
    const vsi = clamp(fm.vsFpm / 3000, -1, 1);
    g.strokeRect(alX + 62, tapeY, 10, tapeH);
    g.fillRect(alX + 63, cy, 8, -vsi * tapeH * 0.48);
    g.fillText((fm.vsFpm >= 0 ? '+' : '') + Math.round(fm.vsFpm / 10) * 10, alX + 40, tapeY + tapeH + 18);

    // ---- heading tape (top) ----
    const hdgY = H * 0.09;
    g.save();
    g.beginPath(); g.rect(cx - W * 0.16, hdgY - 18, W * 0.32, 36); g.clip();
    for (let d = -50; d <= 50; d += 10) {
      const hdg = wrap360(Math.round(fm.hdgDeg / 10) * 10 + d);
      const diff = ((hdg - fm.hdgDeg + 540) % 360) - 180;
      const xx = cx + diff * (W * 0.16 / 50);
      g.beginPath(); g.moveTo(xx, hdgY + 8); g.lineTo(xx, hdgY + 16); g.stroke();
      g.fillText(String(Math.round(hdg / 10)).padStart(2, '0'), xx - 8, hdgY + 4);
    }
    g.restore();
    g.beginPath(); g.moveTo(cx, hdgY + 18); g.lineTo(cx - 6, hdgY + 28); g.lineTo(cx + 6, hdgY + 28); g.closePath(); g.fill();
    g.fillText('HDG ' + String(Math.round(fm.hdgDeg)).padStart(3, '0'), cx - 30, hdgY - 24);

    // ---- engine + config block (bottom left) ----
    // (skipped in cockpit view — the panel below shows the same data)
    if (camMode === 'cockpit') { this.drawWarnings(fm, W, H); this.drawFps(extra.fps); return; }
    const ex = W * 0.05, ey = H * 0.78;
    const n = fm.engineCount;
    g.fillText(`N1 ${(fm.n1 * 100).toFixed(0)}%${fm.reversers ? '  REV' : ''}`, ex, ey - 46);
    for (let i = 0; i < n; i++) {
      const bx = ex + i * 26;
      g.strokeRect(bx, ey - 36, 16, 34);
      g.fillRect(bx + 1, ey - 2, 14, -32 * fm.n1);
    }
    g.fillText(`THR ${(fm.throttle * 100).toFixed(0)}%`, ex, ey + 16);
    g.fillText(`FLAPS ${fm.flapDeg}°`, ex, ey + 34);
    g.fillText(fm.spoilers ? 'SPOILERS OUT' : '', ex, ey + 52);
    g.fillText(`TRIM ${(fm.trim >= 0 ? '+' : '')}${(fm.trim * 100).toFixed(0)}`, ex + 110, ey + 34);
    const lowFuel = fm.fuelKg < fm.fuelCapacityKg * 0.08;
    g.fillStyle = fm.flameout ? '#ff5050' : lowFuel ? '#ffce54' : g.fillStyle;
    g.fillText(`FUEL ${Math.round(fm.fuelKg).toLocaleString()} kg${fm.burnKgS > 0 ? '  (' + Math.round(fm.burnKgS * 3600).toLocaleString() + ' kg/h)' : ''}`, ex, ey + 70);
    g.fillStyle = 'rgba(140,255,160,0.92)';
    // gear lights
    const gearTxt = fm.collapsed ? 'GEAR FAIL' : fm.gearAnim > 0.97 ? 'GEAR DOWN' : fm.gearAnim < 0.03 ? 'GEAR UP' : 'GEAR ...';
    g.fillStyle = fm.collapsed ? '#ff5050' : fm.gearAnim > 0.97 ? green : '#ffce54';
    g.fillText(gearTxt, ex + 110, ey + 16);
    g.fillStyle = green;

    // ---- flight data (bottom right) ----
    const fx = W * 0.80, fy = H * 0.80;
    g.fillText(`GS  ${Math.round(fm.tasKts)} KT`, fx, fy);
    g.fillText(`AOA ${(fm.iasKts > 40 ? fm.alphaDeg : 0).toFixed(1)}°`, fx, fy + 18);
    g.fillText(`G   ${fm.gForce.toFixed(1)}`, fx, fy + 36);
    if (extra.windKts !== undefined) {
      const gust = extra.gustKts && extra.gustKts > extra.windKts + 2 ? ` G${extra.gustKts}` : '';
      g.fillText(`WIND ${String(extra.windDir).padStart(3, '0')}°/${extra.windKts}KT${gust}`, fx, fy + 54);
    }

    this.drawWarnings(fm, W, H);
    this.drawFps(extra.fps);
  }

  drawMinimal(fm, W, H) {
    const g = this.ctx;
    g.fillStyle = 'rgba(10,14,10,0.55)';
    g.fillRect(0, H - 34, W, 34);
    g.fillStyle = 'rgba(140,255,160,0.95)';
    g.font = '14px "Lucida Console", monospace';
    const gearTxt = fm.collapsed ? 'FAIL' : fm.gearAnim > 0.97 ? 'DN' : fm.gearAnim < 0.03 ? 'UP' : '...';
    g.fillText(
      `IAS ${Math.round(fm.iasKts)}kt   ALT ${Math.round(fm.altFt)}ft   VS ${Math.round(fm.vsFpm)}fpm   HDG ${String(Math.round(fm.hdgDeg)).padStart(3, '0')}   THR ${(fm.throttle * 100).toFixed(0)}%   GEAR ${gearTxt}   FLAPS ${fm.flapDeg}°${fm.spoilers ? '   SPLRS' : ''}${fm.reversers ? '   REV' : ''}`,
      12, H - 12);
  }

  drawWarnings(fm, W, H) {
    const g = this.ctx;
    const flash = Math.sin(this.blink * 10) > 0;
    g.font = 'bold 26px "Lucida Console", monospace';
    g.textAlign = 'center';
    let y = H * 0.24;
    const warn = (txt, color) => {
      g.fillStyle = color;
      g.fillText(txt, W / 2, y);
      y += 32;
    };
    if (fm.stallWarn && flash) warn('STALL', '#ff4040');
    if (fm.flameout && flash) warn('FUEL EXHAUSTED — FLAMEOUT', '#ff4040');
    else if (fm.fuelKg < fm.fuelCapacityKg * 0.08) warn('LOW FUEL', '#ffce54');
    if (fm.iasKts > fm.vmo && flash) warn('OVERSPEED', '#ff4040');
    if (fm.vsFpm < -1400 && fm.aglM < 500 && fm.aglM > 5) warn('SINK RATE', '#ffb030');
    if (!fm.onGround && fm.aglM < 250 && fm.gearAnim < 0.9 && fm.vsFpm < 0 && flash) warn('GEAR', '#ff7030');
    if (fm.collapsed) warn('GEAR COLLAPSED', '#ff4040');
    g.textAlign = 'left';
  }

  drawFps(fps) {
    if (!fps) return;
    const g = this.ctx;
    g.font = '11px "Lucida Console", monospace';
    g.fillStyle = 'rgba(255,255,255,0.5)';
    g.fillText(`${Math.round(fps)} FPS`, this.canvas.width - 52, 16);
  }

  // ------------------------------------------------ cockpit panel (bottom)
  drawPanel(fm, entity, W, H) {
    const style = PANEL_STYLES[entity.family.cockpit] || PANEL_STYLES['boeing-ng'];
    const g = this.ctx;
    const ph = H * 0.30, py = H - ph;
    g.fillStyle = style.bg;
    g.fillRect(0, py, W, ph);
    g.fillStyle = 'rgba(0,0,0,0.25)';
    g.fillRect(0, py, W, 6);
    g.fillStyle = style.accent;
    g.font = '11px "Lucida Console", monospace';
    g.fillText(`${style.name} — ${entity.variant.name}`, 14, py + 18);

    const cyP = py + ph * 0.56;
    const r = Math.min(ph * 0.30, W * 0.055);
    const dial = (x, label, frac, text) => {
      g.fillStyle = style.face;
      g.beginPath(); g.arc(x, cyP, r, 0, Math.PI * 2); g.fill();
      g.strokeStyle = style.accent; g.lineWidth = 2;
      g.beginPath(); g.arc(x, cyP, r, 0, Math.PI * 2); g.stroke();
      const a = -Math.PI * 0.75 + clamp(frac, 0, 1) * Math.PI * 1.5;
      g.beginPath(); g.moveTo(x, cyP);
      g.lineTo(x + Math.cos(a) * r * 0.78, cyP + Math.sin(a) * r * 0.78);
      g.stroke();
      g.fillStyle = style.accent;
      g.font = '10px "Lucida Console", monospace';
      g.textAlign = 'center';
      g.fillText(label, x, cyP + r + 14);
      g.fillText(text, x, cyP + r * 0.55);
      g.textAlign = 'left';
    };
    const screen = (x, label, lines) => {
      const sw = r * 2.4, sh = r * 1.9;
      g.fillStyle = style.face;
      g.fillRect(x - sw / 2, cyP - sh / 2, sw, sh);
      g.strokeStyle = '#666';
      g.strokeRect(x - sw / 2, cyP - sh / 2, sw, sh);
      g.fillStyle = style.accent;
      g.font = '11px "Lucida Console", monospace';
      g.textAlign = 'center';
      lines.forEach((ln, i) => g.fillText(ln, x, cyP - sh / 2 + 18 + i * 15));
      g.fillText(label, x, cyP + sh / 2 + 14);
      g.textAlign = 'left';
    };

    const step = Math.min(W / 7.2, r * 3.2);
    const x0 = W / 2 - step * 2.5;
    if (style.screens) {
      screen(x0, 'PFD', [`IAS ${Math.round(fm.iasKts)}`, `ALT ${Math.round(fm.altFt)}`, `VS ${Math.round(fm.vsFpm)}`]);
      screen(x0 + step, 'ND', [`HDG ${String(Math.round(fm.hdgDeg)).padStart(3, '0')}`, `GS ${Math.round(fm.tasKts)}`]);
      screen(x0 + step * 2, entity.family.cockpit === 'airbus-fbw' ? 'ECAM' : 'EICAS',
        [`N1 ${(fm.n1 * 100).toFixed(0)}%`, `FLAP ${fm.flapDeg}`, fm.gearAnim > 0.97 ? 'GEAR DN' : fm.gearAnim < 0.03 ? 'GEAR UP' : 'GEAR ..']);
      const aoaShown = fm.iasKts > 40 ? fm.alphaDeg : 0;
      dial(x0 + step * 3, 'AOA', (aoaShown + 5) / 25, aoaShown.toFixed(0));
      dial(x0 + step * 4, 'TRIM', fm.trim + 0.5, '');
      if (entity.family.cockpit === 'airbus-fbw') {
        g.fillStyle = style.accent;
        g.fillText('FLY-BY-WIRE NORMAL LAW', 14, py + 34);
      }
    } else {
      dial(x0, 'AIRSPEED', fm.iasKts / 500, `${Math.round(fm.iasKts)}`);
      dial(x0 + step, 'ATTITUDE', (fm.pitchDeg + 30) / 60, `${fm.bankDeg.toFixed(0)}°`);
      dial(x0 + step * 2, 'ALTITUDE', (fm.altFt % 10000) / 10000, `${Math.round(fm.altFt)}`);
      dial(x0 + step * 3, 'VSI', (clamp(fm.vsFpm, -3000, 3000) + 3000) / 6000, `${Math.round(fm.vsFpm / 100)}`);
      dial(x0 + step * 4, 'HEADING', fm.hdgDeg / 360, String(Math.round(fm.hdgDeg)).padStart(3, '0'));
      dial(x0 + step * 5, entity.family.cockpit === 'supersonic' ? 'MACH' : 'N1', entity.family.cockpit === 'supersonic' ? fm.mach / 2.2 : fm.n1, entity.family.cockpit === 'supersonic' ? fm.mach.toFixed(2) : `${(fm.n1 * 100).toFixed(0)}%`);
    }
  }
}
