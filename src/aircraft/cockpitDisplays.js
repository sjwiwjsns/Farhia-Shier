// Live cockpit instrument displays.
//
// Each screen is a canvas texture redrawn from real flight-model state at a
// throttled rate (the panels are only visible in cockpit view, and 12 Hz is
// indistinguishable from 60 on a instrument face). Six-screen glass decks
// (PFD/ND/EICAS per side) or classic round-dial faces, plus the two FMC/CDU
// screens on the pedestal and the integrated standby instrument.
import * as THREE from 'three';

const GREEN = '#41e05a', AMBER = '#f0a52a', RED = '#ff3a2f', WHITE = '#eef2f6';
const MAGENTA = '#e46ce0', CYAN = '#4fd8ea', SKY = '#2c7fc4', GROUND = '#8a6134';

function txt(g, s, x, y, size, col, align = 'center', bold = true) {
  g.fillStyle = col;
  g.font = `${bold ? 'bold ' : ''}${size}px "Lucida Console", Consolas, monospace`;
  g.textAlign = align;
  g.fillText(s, x, y);
}

// ------------------------------------------------------------------- PFD
function drawPFD(g, W, H, fm, style) {
  const airbus = style === 'airbus-fbw';
  g.fillStyle = '#0a0d11';
  g.fillRect(0, 0, W, H);

  // ---- attitude ball (rotates with bank, translates with pitch)
  const bx = W * 0.5, by = H * 0.44, bw = W * 0.62, bh = H * 0.52;
  g.save();
  g.beginPath();
  g.rect(bx - bw / 2, by - bh / 2, bw, bh);
  g.clip();
  g.translate(bx, by);
  g.rotate(-fm.bankDeg * Math.PI / 180);
  const ppd = H * 0.0125;                       // pixels per degree of pitch
  g.translate(0, fm.pitchDeg * ppd);
  g.fillStyle = SKY;
  g.fillRect(-W, -H * 1.6, W * 2, H * 1.6);
  g.fillStyle = GROUND;
  g.fillRect(-W, 0, W * 2, H * 1.6);
  g.strokeStyle = WHITE; g.lineWidth = 2.5;
  g.beginPath(); g.moveTo(-W, 0); g.lineTo(W, 0); g.stroke();
  // pitch ladder
  g.lineWidth = 2;
  for (let p = -80; p <= 80; p += 5) {
    if (!p) continue;
    const y = -p * ppd, half = (p % 10 === 0) ? bw * 0.17 : bw * 0.08;
    g.beginPath(); g.moveTo(-half, y); g.lineTo(half, y); g.stroke();
    if (p % 10 === 0) {
      txt(g, String(Math.abs(p)), -half - 16, y + 6, 15, WHITE, 'right');
      txt(g, String(Math.abs(p)), half + 16, y + 6, 15, WHITE, 'left');
    }
  }
  g.restore();

  // ---- bank scale + sky pointer
  g.save();
  g.translate(bx, by);
  g.strokeStyle = WHITE; g.lineWidth = 2;
  for (const a of [-60, -45, -30, -20, -10, 0, 10, 20, 30, 45, 60]) {
    const r0 = bh * 0.46, r1 = r0 + (a % 30 === 0 ? 14 : 8);
    const rad = (a - 90) * Math.PI / 180;
    g.beginPath();
    g.moveTo(Math.cos(rad) * r0, Math.sin(rad) * r0);
    g.lineTo(Math.cos(rad) * r1, Math.sin(rad) * r1);
    g.stroke();
  }
  g.rotate(-fm.bankDeg * Math.PI / 180);
  g.fillStyle = Math.abs(fm.bankDeg) > 33 ? AMBER : WHITE;
  g.beginPath();
  g.moveTo(0, -bh * 0.44); g.lineTo(-11, -bh * 0.44 + 18); g.lineTo(11, -bh * 0.44 + 18);
  g.closePath(); g.fill();
  g.restore();

  // ---- fixed aircraft symbol
  g.strokeStyle = '#111'; g.lineWidth = 7;
  g.beginPath();
  g.moveTo(bx - 78, by); g.lineTo(bx - 26, by); g.moveTo(bx + 26, by); g.lineTo(bx + 78, by);
  g.stroke();
  g.strokeStyle = airbus ? '#f2c400' : '#f2c400'; g.lineWidth = 4;
  g.beginPath();
  g.moveTo(bx - 78, by); g.lineTo(bx - 26, by); g.lineTo(bx - 26, by + 13);
  g.moveTo(bx + 78, by); g.lineTo(bx + 26, by); g.lineTo(bx + 26, by + 13);
  g.stroke();
  g.fillStyle = '#f2c400';
  g.fillRect(bx - 4, by - 4, 8, 8);

  // ---- flight director bars (follow trim + roll demand)
  if (!fm.onGround) {
    g.strokeStyle = MAGENTA; g.lineWidth = 3.5;
    const fdy = by - Math.max(-1, Math.min(1, fm.vsFpm / 2500)) * 44;
    const fdx = bx + Math.max(-1, Math.min(1, fm.bankDeg / -25)) * 40;
    g.beginPath(); g.moveTo(bx - 70, fdy); g.lineTo(bx + 70, fdy); g.stroke();
    g.beginPath(); g.moveTo(fdx, by - 60); g.lineTo(fdx, by + 60); g.stroke();
  }

  // ---- speed tape
  const tw = W * 0.15, tx = W * 0.075;
  g.fillStyle = 'rgba(20,24,30,0.82)';
  g.fillRect(tx - tw / 2, H * 0.14, tw, H * 0.62);
  const ias = fm.iasKts, pxk = H * 0.0135;
  g.save();
  g.beginPath(); g.rect(tx - tw / 2, H * 0.14, tw, H * 0.62); g.clip();
  g.strokeStyle = WHITE; g.lineWidth = 2;
  for (let s = Math.floor((ias - 60) / 10) * 10; s <= ias + 60; s += 10) {
    if (s < 0) continue;
    const y = by + (ias - s) * pxk;
    g.beginPath(); g.moveTo(tx + tw / 2 - 12, y); g.lineTo(tx + tw / 2, y); g.stroke();
    if (s % 20 === 0) txt(g, String(s), tx + tw / 2 - 18, y + 6, 17, WHITE, 'right');
  }
  // Vref / stall band
  const vs = fm.vs1 || fm.vref * 0.9;
  const yS = by + (ias - vs) * pxk;
  g.fillStyle = RED;
  g.fillRect(tx + tw / 2 - 7, yS, 7, H * 0.62);
  if (fm.vref) {
    const yR = by + (ias - fm.vref) * pxk;
    g.strokeStyle = MAGENTA; g.lineWidth = 3;
    g.beginPath(); g.moveTo(tx - tw / 2, yR); g.lineTo(tx + tw / 2, yR); g.stroke();
  }
  g.restore();
  g.fillStyle = '#000';
  g.fillRect(tx - tw / 2 - 4, by - 19, tw + 8, 38);
  g.strokeStyle = WHITE; g.lineWidth = 2;
  g.strokeRect(tx - tw / 2 - 4, by - 19, tw + 8, 38);
  txt(g, String(Math.round(ias)).padStart(3, ' '), tx + tw / 2 - 6, by + 9, 26, WHITE, 'right');
  txt(g, 'M' + fm.mach.toFixed(3).slice(1), tx, H * 0.80, 16, WHITE);

  // ---- altitude tape
  const ax = W * 0.855;
  g.fillStyle = 'rgba(20,24,30,0.82)';
  g.fillRect(ax - tw / 2, H * 0.14, tw, H * 0.62);
  g.save();
  g.beginPath(); g.rect(ax - tw / 2, H * 0.14, tw, H * 0.62); g.clip();
  const alt = fm.altFt, pxf = H * 0.00055;
  g.strokeStyle = WHITE; g.lineWidth = 2;
  for (let a = Math.floor((alt - 900) / 100) * 100; a <= alt + 900; a += 100) {
    const y = by + (alt - a) * pxf;
    g.beginPath(); g.moveTo(ax - tw / 2, y); g.lineTo(ax - tw / 2 + 12, y); g.stroke();
    if (a % 500 === 0) txt(g, String(a), ax - tw / 2 + 18, y + 6, 16, WHITE, 'left');
  }
  g.restore();
  g.fillStyle = '#000';
  g.fillRect(ax - tw / 2 - 4, by - 19, tw + 8, 38);
  g.strokeStyle = WHITE; g.lineWidth = 2;
  g.strokeRect(ax - tw / 2 - 4, by - 19, tw + 8, 38);
  txt(g, String(Math.round(alt)), ax + tw / 2 - 8, by + 9, 22, WHITE, 'right');

  // ---- vertical speed
  const vx = W * 0.965;
  g.strokeStyle = '#556'; g.lineWidth = 2;
  g.beginPath(); g.moveTo(vx, H * 0.18); g.lineTo(vx, H * 0.72); g.stroke();
  const vsN = Math.max(-1, Math.min(1, fm.vsFpm / 4000));
  g.strokeStyle = Math.abs(fm.vsFpm) > 2000 ? AMBER : GREEN; g.lineWidth = 4;
  g.beginPath(); g.moveTo(vx, by); g.lineTo(vx - 22, by - vsN * H * 0.26); g.stroke();
  txt(g, Math.abs(fm.vsFpm) > 100 ? String(Math.round(fm.vsFpm / 50) * 50) : '', vx - 12, H * 0.14, 15, WHITE, 'right');

  // ---- heading strip
  const hy = H * 0.86;
  g.fillStyle = 'rgba(20,24,30,0.82)';
  g.fillRect(W * 0.16, hy - 22, W * 0.68, 44);
  g.save();
  g.beginPath(); g.rect(W * 0.16, hy - 22, W * 0.68, 44); g.clip();
  const hdg = fm.hdgDeg, pxd = W * 0.0125;
  for (let d = Math.floor((hdg - 30) / 5) * 5; d <= hdg + 30; d += 5) {
    const x = bx + (d - hdg) * pxd, dd = ((d % 360) + 360) % 360;
    g.strokeStyle = WHITE; g.lineWidth = 2;
    g.beginPath(); g.moveTo(x, hy - 22); g.lineTo(x, hy - (dd % 10 === 0 ? 10 : 16)); g.stroke();
    if (dd % 10 === 0) txt(g, String(dd / 10).padStart(2, '0'), x, hy + 12, 17, WHITE);
  }
  g.restore();
  g.fillStyle = WHITE;
  g.beginPath(); g.moveTo(bx, hy - 24); g.lineTo(bx - 9, hy - 36); g.lineTo(bx + 9, hy - 36); g.closePath(); g.fill();

  // ---- FMA / mode annunciations
  g.fillStyle = 'rgba(16,20,26,0.9)';
  g.fillRect(W * 0.12, 4, W * 0.76, 30);
  const thrMode = fm.throttle > 0.85 ? (airbus ? 'MAN TOGA' : 'THR REF') : fm.throttle < 0.05 ? 'IDLE' : (airbus ? 'THR CLB' : 'THR');
  txt(g, thrMode, W * 0.24, 25, 17, GREEN);
  txt(g, fm.onGround ? 'ROLLOUT' : (airbus ? 'NAV' : 'LNAV'), W * 0.50, 25, 17, GREEN);
  txt(g, fm.onGround ? '' : (fm.vsFpm > 300 ? (airbus ? 'CLB' : 'VNAV SPD') : fm.vsFpm < -300 ? 'DES' : 'ALT HLD'), W * 0.76, 25, 17, GREEN);

  // ---- radio altitude + warnings
  if (fm.aglM < 800) txt(g, String(Math.round(fm.aglM * 3.281)), bx, by + bh * 0.42, 26, GREEN);
  if (fm.stallWarn) txt(g, 'STALL', bx, by - bh * 0.30, 30, RED);
  if (fm.flameout) txt(g, 'ENG FAIL', bx, by - bh * 0.18, 26, RED);
}

// -------------------------------------------------------------------- ND
function drawND(g, W, H, fm, style, wpts) {
  g.fillStyle = '#0a0d11';
  g.fillRect(0, 0, W, H);
  const cx = W * 0.5, cy = H * 0.72, R = H * 0.56;

  g.save();
  g.translate(cx, cy);
  g.rotate(-fm.hdgDeg * Math.PI / 180);
  // range rings
  g.strokeStyle = '#41506a'; g.lineWidth = 1.6;
  for (const f of [0.34, 0.67, 1]) {
    g.beginPath(); g.arc(0, 0, R * f, 0, Math.PI * 2); g.stroke();
  }
  // compass card
  for (let d = 0; d < 360; d += 5) {
    const rad = (d - 90) * Math.PI / 180;
    const r1 = R, r0 = R - (d % 10 === 0 ? 16 : 9);
    g.strokeStyle = WHITE; g.lineWidth = 2;
    g.beginPath();
    g.moveTo(Math.cos(rad) * r0, Math.sin(rad) * r0);
    g.lineTo(Math.cos(rad) * r1, Math.sin(rad) * r1);
    g.stroke();
    if (d % 30 === 0) {
      g.save();
      g.translate(Math.cos(rad) * (R - 34), Math.sin(rad) * (R - 34));
      g.rotate((d) * Math.PI / 180);
      txt(g, d === 0 ? 'N' : d === 90 ? 'E' : d === 180 ? 'S' : d === 270 ? 'W' : String(d / 10), 0, 7, 18, WHITE);
      g.restore();
    }
  }
  // waypoints / route (from the field's runways — a real-ish procedure line)
  if (wpts && wpts.length) {
    g.strokeStyle = MAGENTA; g.lineWidth = 2.5;
    g.beginPath();
    wpts.forEach((w, i) => {
      const x = w.x * R, y = w.y * R;
      i ? g.lineTo(x, y) : g.moveTo(x, y);
    });
    g.stroke();
    g.fillStyle = MAGENTA;
    for (const w of wpts) {
      const x = w.x * R, y = w.y * R;
      g.beginPath();
      g.moveTo(x, y - 7); g.lineTo(x + 7, y); g.lineTo(x, y + 7); g.lineTo(x - 7, y);
      g.closePath(); g.fill();
    }
  }
  g.restore();

  // track line + aircraft symbol
  g.strokeStyle = WHITE; g.lineWidth = 2.5;
  g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx, cy - R); g.stroke();
  g.fillStyle = WHITE;
  g.beginPath();
  g.moveTo(cx, cy - 14); g.lineTo(cx - 12, cy + 12); g.lineTo(cx, cy + 5); g.lineTo(cx + 12, cy + 12);
  g.closePath(); g.fill();

  // heading box + data block
  g.fillStyle = '#000';
  g.fillRect(cx - 46, 6, 92, 30);
  g.strokeStyle = WHITE; g.lineWidth = 2;
  g.strokeRect(cx - 46, 6, 92, 30);
  txt(g, String(Math.round(fm.hdgDeg)).padStart(3, '0'), cx, 29, 22, WHITE);
  txt(g, 'GS ' + Math.round(fm.tasKts), W * 0.06, 26, 17, WHITE, 'left');
  txt(g, 'TAS ' + Math.round(fm.tasKts), W * 0.06, 48, 15, WHITE, 'left');
  txt(g, style === 'airbus-fbw' ? 'ARC' : 'MAP', W * 0.94, 26, 16, CYAN, 'right');
  txt(g, '40 NM', W * 0.94, 48, 15, WHITE, 'right');
  if (fm.windKts) txt(g, `${String(Math.round(fm.windDir)).padStart(3, '0')}/${Math.round(fm.windKts)}`, W * 0.06, H * 0.95, 16, GREEN, 'left');
}

// ---------------------------------------------------------------- EICAS
function drawEICAS(g, W, H, fm, nEng, style) {
  const airbus = style === 'airbus-fbw';
  g.fillStyle = '#0a0d11';
  g.fillRect(0, 0, W, H);
  txt(g, airbus ? 'E/WD' : 'EICAS', W * 0.5, 26, 18, WHITE);

  const cols = Math.max(nEng, 1);
  const dw = W / (cols + 0.4), r = Math.min(dw * 0.36, H * 0.15);
  for (let i = 0; i < cols; i++) {
    const x = dw * (i + 0.7), y = H * 0.30;
    // N1 dial
    g.strokeStyle = '#48566e'; g.lineWidth = 8;
    g.beginPath(); g.arc(x, y, r, Math.PI * 0.75, Math.PI * 2.25); g.stroke();
    const n1 = Math.max(0, Math.min(1, fm.n1 * (fm.flameout ? 0.1 : 1)));
    g.strokeStyle = n1 > 0.98 ? AMBER : GREEN; g.lineWidth = 8;
    g.beginPath(); g.arc(x, y, r, Math.PI * 0.75, Math.PI * 0.75 + n1 * Math.PI * 1.5); g.stroke();
    txt(g, (n1 * 100).toFixed(1), x, y + 8, 21, WHITE);
    txt(g, 'N1', x, y + r + 22, 14, CYAN);
    // EGT bar
    const egt = 320 + n1 * 560;
    const by2 = H * 0.60;
    g.fillStyle = '#1a2230';
    g.fillRect(x - r, by2, r * 2, 16);
    g.fillStyle = egt > 800 ? AMBER : GREEN;
    g.fillRect(x - r, by2, r * 2 * Math.min(1, egt / 950), 16);
    txt(g, Math.round(egt) + '°', x, by2 + 34, 15, WHITE);
    txt(g, 'EGT', x, by2 - 6, 13, CYAN);
  }

  // fuel + config block
  const ly = H * 0.78;
  txt(g, 'FUEL ' + Math.round(fm.fuelKg).toLocaleString() + ' KG', W * 0.05, ly, 17, WHITE, 'left');
  txt(g, 'GW ' + Math.round(fm.mass / 100) / 10 + ' T', W * 0.05, ly + 24, 17, WHITE, 'left');
  txt(g, 'FLAP ' + fm.flapDeg, W * 0.60, ly, 17, GREEN, 'left');
  txt(g, fm.gearAnim > 0.97 ? 'GEAR DN' : fm.gearAnim < 0.03 ? 'GEAR UP' : 'GEAR ...',
    W * 0.60, ly + 24, 17, fm.gearAnim > 0.97 ? GREEN : AMBER, 'left');
  if (fm.spoilers) txt(g, 'SPEEDBRAKE', W * 0.60, ly + 48, 16, AMBER, 'left');
  if (fm.reversers) txt(g, 'REV', W * 0.05, ly + 48, 16, AMBER, 'left');

  // warning stack
  let wy = H * 0.92;
  if (fm.stallWarn) { txt(g, 'STALL', W * 0.05, wy, 18, RED, 'left'); wy += 22; }
  if (fm.flameout) { txt(g, 'ENG FLAMEOUT', W * 0.05, wy, 18, RED, 'left'); wy += 22; }
  if (fm.fuelKg < 1200) txt(g, 'FUEL LOW', W * 0.05, wy, 18, AMBER, 'left');
}

// ------------------------------------------------------------- standby
function drawStandby(g, W, H, fm) {
  g.fillStyle = '#05070a';
  g.fillRect(0, 0, W, H);
  const cx = W / 2, cy = H * 0.5, r = Math.min(W, H) * 0.34;
  g.save();
  g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2); g.clip();
  g.translate(cx, cy);
  g.rotate(-fm.bankDeg * Math.PI / 180);
  g.translate(0, fm.pitchDeg * r * 0.045);
  g.fillStyle = SKY; g.fillRect(-r * 2, -r * 3, r * 4, r * 3);
  g.fillStyle = GROUND; g.fillRect(-r * 2, 0, r * 4, r * 3);
  g.strokeStyle = WHITE; g.lineWidth = 2;
  g.beginPath(); g.moveTo(-r * 2, 0); g.lineTo(r * 2, 0); g.stroke();
  g.restore();
  g.strokeStyle = '#f2c400'; g.lineWidth = 3;
  g.beginPath(); g.moveTo(cx - r * 0.6, cy); g.lineTo(cx - r * 0.2, cy); g.moveTo(cx + r * 0.2, cy); g.lineTo(cx + r * 0.6, cy); g.stroke();
  txt(g, String(Math.round(fm.iasKts)), W * 0.14, cy + 6, 17, GREEN, 'center');
  txt(g, String(Math.round(fm.altFt)), W * 0.86, cy + 6, 17, GREEN, 'center');
  txt(g, 'STBY', cx, H * 0.94, 13, WHITE);
}

// ------------------------------------------------------------------ CDU
function drawCDU(g, W, H, fm, ap) {
  g.fillStyle = '#04120a';
  g.fillRect(0, 0, W, H);
  const L = (i) => 30 + i * (H - 46) / 13;
  txt(g, 'ACT RTE 1', W / 2, L(0), 20, WHITE);
  const rows = [
    ['ORIGIN', ap ? ap.icao : '----', 'DEST', ap ? ap.icao : '----'],
    ['RUNWAY', ap ? ap.rw : '--', 'FLT NO', ap ? ap.flt : '-----'],
    ['CRZ ALT', String(Math.round(fm.altFt / 100) * 100), 'CRZ SPD', Math.round(fm.tasKts) + 'KT'],
    ['GW', (fm.mass / 1000).toFixed(1) + 'T', 'FUEL', (fm.fuelKg / 1000).toFixed(1) + 'T'],
    ['HDG', String(Math.round(fm.hdgDeg)).padStart(3, '0'), 'V/S', String(Math.round(fm.vsFpm))]
  ];
  rows.forEach((r, i) => {
    txt(g, r[0], 14, L(1 + i * 2), 15, CYAN, 'left');
    txt(g, r[2], W - 14, L(1 + i * 2), 15, CYAN, 'right');
    txt(g, r[1], 14, L(2 + i * 2), 19, GREEN, 'left');
    txt(g, r[3], W - 14, L(2 + i * 2), 19, GREEN, 'right');
  });
  txt(g, '<INDEX', 14, L(12), 17, WHITE, 'left');
  txt(g, 'PERF>', W - 14, L(12), 17, WHITE, 'right');
}

// =================================================================== API
export class CockpitDisplays {
  constructor(style, nEng, airportInfo) {
    this.style = style;
    this.nEng = nEng;
    this.ap = airportInfo || null;
    this.screens = [];
    this._acc = 0;
    this.wpts = [];
    for (let i = 0; i < 5; i++) {
      const a = -0.5 + i * 0.32, d = 0.18 + i * 0.19;
      this.wpts.push({ x: Math.sin(a) * d, y: -Math.cos(a) * d });
    }
  }

  // kind: pfd | nd | eicas | eicas2 | standby | cdu
  make(kind, px = 512) {
    const canvas = document.createElement('canvas');
    canvas.width = px;
    canvas.height = kind === 'cdu' ? px : Math.round(px * 0.86);
    const ctx = canvas.getContext('2d');
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    const s = { kind, canvas, ctx, tex };
    this.screens.push(s);
    return s;
  }

  update(fm, dt, force = false) {
    this._acc += dt;
    if (!force && this._acc < 1 / 12) return;
    this._acc = 0;
    for (const s of this.screens) {
      const g = s.ctx, W = s.canvas.width, H = s.canvas.height;
      if (s.kind === 'pfd') drawPFD(g, W, H, fm, this.style);
      else if (s.kind === 'nd') drawND(g, W, H, fm, this.style, this.wpts);
      else if (s.kind === 'eicas') drawEICAS(g, W, H, fm, this.nEng, this.style);
      else if (s.kind === 'eicas2') drawEICAS(g, W, H, fm, this.nEng, this.style);
      else if (s.kind === 'standby') drawStandby(g, W, H, fm);
      else if (s.kind === 'cdu') drawCDU(g, W, H, fm, this.ap);
      s.tex.needsUpdate = true;
    }
  }

  dispose() {
    for (const s of this.screens) s.tex.dispose();
    this.screens.length = 0;
  }
}
