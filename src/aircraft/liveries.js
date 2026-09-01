// Procedural livery painter. Every scheme here is a simplified colour
// "tribute" generated at runtime — clearly NOT an airline's exact trademarked
// artwork (see docs/ARCHITECTURE.md). Fuselage texture mapping:
// u = 0 (nose) -> 1 (tail); v = 0 bottom -> 0.25 right -> 0.5 top -> 0.75 left -> 1 bottom.
import * as THREE from 'three';
import { hashString } from '../core/math.js';

export function airlineOperates(airline, variant) {
  const flags = variant.flags || [];
  if (flags.includes('concept') && !airline.allowConcept) return false;
  if (airline.cargo && !flags.includes('freighter') && !airline.fleet.includes(variant.id) && !airline.fleet.includes(variant.family)) return false;
  const inFleet = airline.fleet.includes('*') || airline.fleet.includes(variant.id) || airline.fleet.includes(variant.family);
  if (!inFleet) return false;
  const [v0, v1] = variant.era || [1900, 2200];
  const [a0, a1] = airline.era || [1900, 2200];
  return v0 <= a1 && v1 >= a0;
}

function shade(hex, f) {
  const c = new THREE.Color(hex);
  c.multiplyScalar(f);
  return '#' + c.getHexString();
}

export function generateLivery(airline, variant, texScale = 1) {
  const isFreighter = (variant.flags || []).includes('freighter');
  const W = Math.round(2048 * texScale), H = Math.round(512 * texScale);
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  const col = airline.colors;
  const cleanHull = airline.id === 'emirates'; // real scheme: white hull, NO cheatline

  // Base + belly shading (canvas top AND bottom rows are the fuselage belly).
  g.fillStyle = cleanHull ? '#f7f8f9' : col.fuselage;
  g.fillRect(0, 0, W, H);
  const belly = cleanHull ? '#b9bec4' : shade(col.fuselage, 0.72);
  // soft belly gradient instead of a hard band
  for (const [y0, y1] of [[0, H * 0.12], [H * 0.88, H]]) {
    const gr = g.createLinearGradient(0, y0, 0, y1);
    if (y0 === 0) { gr.addColorStop(0, belly); gr.addColorStop(1, 'rgba(0,0,0,0)'); }
    else { gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, belly); }
    g.fillStyle = gr;
    g.fillRect(0, y0, W, y1 - y0);
  }
  // Smooth crown highlight (canvas middle rows = top of fuselage)
  const crown = g.createLinearGradient(0, H * 0.36, 0, H * 0.64);
  const hi = cleanHull ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.18)';
  crown.addColorStop(0, 'rgba(255,255,255,0)');
  crown.addColorStop(0.5, hi);
  crown.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = crown;
  g.fillRect(0, H * 0.36, W, H * 0.28);

  // Cheatlines at window level: right side v≈0.28 (cy 0.72H), left v≈0.72 (cy 0.28H).
  if (!cleanHull) {
    const cheatY = [0.715, 0.275];
    for (const fy of cheatY) {
      g.fillStyle = col.cheat1;
      g.fillRect(W * 0.02, H * (fy - 0.015), W * 0.97, H * 0.035);
      g.fillStyle = col.cheat2;
      g.fillRect(W * 0.02, H * (fy + 0.024), W * 0.97, H * 0.016);
    }
  }

  // Passenger windows (skip on freighters). Double-deck types get a second
  // full-length window row per side (A380) — the MD-12 concept shares it.
  if (!isFreighter) {
    g.fillStyle = '#1c232b';
    const step = W * 0.0088;
    const doubleDeck = variant.family === 'a380' || variant.family === 'md12';
    const rows = doubleDeck ? [0.775, 0.685, 0.215, 0.305] : [0.745, 0.245];
    for (const fy of rows) {
      const upperRow = doubleDeck && (fy === 0.685 || fy === 0.305);
      const x0 = upperRow ? W * 0.15 : W * 0.10;
      const x1 = upperRow ? W * 0.80 : W * 0.88;
      for (let x = x0; x < x1; x += step) {
        g.fillRect(x, H * fy - H * 0.009, step * 0.42, H * 0.018);
      }
    }
  } else {
    // Cargo door outline + no windows
    g.strokeStyle = 'rgba(30,36,44,0.55)';
    g.lineWidth = Math.max(1, H * 0.004);
    g.strokeRect(W * 0.16, H * 0.62, W * 0.10, H * 0.16);
  }

  // Cockpit windscreen band near the nose, both sides + crown.
  g.fillStyle = '#141a21';
  for (const fy of [0.66, 0.34]) {
    g.beginPath();
    g.moveTo(W * 0.028, H * (fy - 0.02));
    g.lineTo(W * 0.062, H * (fy - 0.045));
    g.lineTo(W * 0.062, H * (fy + 0.01));
    g.lineTo(W * 0.028, H * (fy + 0.02));
    g.closePath();
    g.fill();
  }

  // ---- skin detail: frames, stringers, rivet rows (all subtle — they read
  // as panel structure up close and vanish at distance)
  const lw = Math.max(1, W / 2048);
  g.strokeStyle = 'rgba(40,46,54,0.16)';
  g.lineWidth = lw;
  for (let x = W * 0.06; x < W * 0.975; x += W * 0.0176) {
    g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke();
  }
  g.strokeStyle = 'rgba(40,46,54,0.10)';
  for (const fy of [0.08, 0.16, 0.33, 0.42, 0.58, 0.67, 0.84, 0.92]) {
    g.beginPath(); g.moveTo(W * 0.04, H * fy); g.lineTo(W * 0.985, H * fy); g.stroke();
  }
  g.fillStyle = 'rgba(30,34,40,0.20)';
  for (const fy of [0.12, 0.37, 0.63, 0.88]) {
    for (let x = W * 0.06; x < W * 0.975; x += W * 0.0044) g.fillRect(x, H * fy, lw * 1.5, lw * 1.5);
  }
  // ---- door outlines at the same stations the exterior layer frames
  const len = variant.dims.len;
  const doorT = len > 60 ? [0.09, 0.28, 0.55, 0.86] : len > 40 ? [0.09, 0.62, 0.86] : [0.09, 0.86];
  const outline = (u, y0, y1, wM, r = 3) => {
    const x0 = W * u - (W * wM / len) / 2, x1 = W * u + (W * wM / len) / 2;
    g.beginPath();
    g.roundRect ? g.roundRect(x0, y0, x1 - x0, y1 - y0, r) : g.rect(x0, y0, x1 - x0, y1 - y0);
    g.stroke();
  };
  g.strokeStyle = 'rgba(22,26,32,0.62)';
  g.lineWidth = lw * 1.6;
  if (!isFreighter) {
    for (const t of doorT) {
      outline(t, H * 0.585, H * 0.800, 1.07);   // right flank (higher = smaller y)
      outline(t, H * 0.200, H * 0.415, 1.07);   // left flank (inverted band)
    }
    if (len < 45) for (const t of [0.46, 0.51]) { outline(t, H * 0.655, H * 0.745, 0.5); outline(t, H * 0.255, H * 0.345, 0.5); }
  }
  for (const t of [0.20, 0.72]) outline(t, H * 0.80, H * 0.93, 2.6);   // cargo doors, lower right
  // ---- radome and APU cone in unpainted tones, with seams
  g.fillStyle = 'rgba(118,124,131,0.38)';
  g.fillRect(0, 0, W * 0.036, H);
  g.fillStyle = 'rgba(88,93,99,0.55)';
  g.fillRect(W * 0.978, 0, W * 0.022, H);
  g.strokeStyle = 'rgba(30,34,40,0.55)';
  g.lineWidth = lw * 1.4;
  for (const u of [0.036, 0.978]) { g.beginPath(); g.moveTo(W * u, 0); g.lineTo(W * u, H); g.stroke(); }

  // Flank text mapping, established empirically with four-orientation marker
  // words after the hull winding fix (outward-facing loft triangles):
  //   RIGHT flank <- canvas ~0.615H band, drawn pre-mirrored horizontally;
  //                  aircraft-up = smaller canvas y there.
  //   LEFT flank  <- canvas ~0.415H band, drawn pre-flipped vertically;
  //                  aircraft-up = LARGER canvas y there (v runs inverted).
  // dy < 0 places text higher on the aircraft on both flanks.
  const drawFlankText = (str, u, dy, font, color) => {
    g.font = font;
    g.fillStyle = color;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.save(); // right flank (pre-mirrored)
    g.translate(W * u, H * 0.615 + dy);
    g.scale(-1, 1);
    g.fillText(str, 0, 0);
    g.restore();
    g.save(); // left flank (pre-flipped vertically)
    g.translate(W * u, H * 0.415 - dy);
    g.scale(1, -1);
    g.fillText(str, 0, 0);
    g.restore();
    g.textBaseline = 'alphabetic';
  };


  const titles = airline.titles || airline.name;
  if (cleanHull) {
    // Emirates: gold serif wordmark forward on the upper deck, with the
    // Arabic wordmark above it — no cheatline on the real scheme.
    const fs = H * 0.078;
    const gold = '#b98d3e';
    drawFlankText('Emirates', 0.175, -fs * 0.30, `italic bold ${fs}px Georgia, "Times New Roman", serif`, gold);
    drawFlankText('طيران الإمارات', 0.175, -fs * 1.15, `bold ${fs * 0.55}px "Noto Naskh Arabic", "Arial", sans-serif`, gold);
  } else {
    const fs = H * 0.085;
    drawFlankText(titles, 0.30, -fs * 0.35, `bold ${fs}px Arial, Helvetica, sans-serif`, col.text);
  }

  // ---- registration on the rear fuselage (deterministic per airline/type)
  {
    const h = hashString(airline.id + ':' + variant.id) >>> 0;
    const reg = 'N' + (100 + (h % 900)) + String.fromCharCode(65 + (h >> 10) % 26) + String.fromCharCode(65 + (h >> 15) % 26);
    const fs = H * 0.046;
    drawFlankText(reg, 0.835, -fs * 0.15, `bold ${fs}px Arial, Helvetica, sans-serif`, cleanHull ? '#3a3f46' : col.text);
  }

  const fuselageMap = new THREE.CanvasTexture(cv);
  fuselageMap.anisotropy = 8;
  fuselageMap.colorSpace = THREE.SRGBColorSpace;

  // ---- roughness map: glossy paint, matte radome, duller belly + APU
  const rc = document.createElement('canvas');
  rc.width = W >> 1; rc.height = H >> 1;
  const rg = rc.getContext('2d');
  rg.fillStyle = '#5a5a5a'; rg.fillRect(0, 0, rc.width, rc.height);              // paint ~0.35
  rg.fillStyle = '#7c7c7c'; rg.fillRect(0, 0, rc.width, rc.height * 0.10);        // belly
  rg.fillRect(0, rc.height * 0.90, rc.width, rc.height * 0.10);
  rg.fillStyle = '#b4b4b4'; rg.fillRect(0, 0, rc.width * 0.036, rc.height);       // radome (matte)
  rg.fillStyle = '#9a9a9a'; rg.fillRect(rc.width * 0.978, 0, rc.width * 0.022, rc.height);
  const roughnessMap = new THREE.CanvasTexture(rc);

  return {
    fuselageMap,
    roughnessMap,
    wingMap: generateWingTexture(texScale),
    tailMap: generateTailTexture(airline, texScale),
    engineColor: new THREE.Color(col.engine || col.fuselage),
    wingColor: new THREE.Color('#b7bbc0'),
    tailColor: new THREE.Color(col.tail || col.fuselage),
    bellyColor: new THREE.Color(belly),
    label: `${airline.name} (tribute livery)`
  };
}

// Wing skin (u = chord LE->TE, v = root->tip, shared by top and bottom faces):
// bare-metal leading-edge strip, spanwise panel lines, rib lines, the dark
// walkway corridor at the root, fuel caps, hinge covers and a little grime.
let _wingMapCache = null;
export function generateWingTexture(texScale = 1) {
  if (_wingMapCache && _wingMapCache.userData.texScale === texScale) return _wingMapCache;
  const W = Math.round(1024 * texScale), H = Math.round(512 * texScale);
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  g.fillStyle = '#b7bbc0';
  g.fillRect(0, 0, W, H);
  // root-to-tip grime gradient + subtle mottling
  const gr = g.createLinearGradient(0, 0, 0, H);
  gr.addColorStop(0, 'rgba(60,64,70,0.10)');
  gr.addColorStop(1, 'rgba(60,64,70,0)');
  g.fillStyle = gr; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 400; i++) {
    g.fillStyle = `rgba(${Math.random() < 0.5 ? '255,255,255' : '40,44,50'},0.04)`;
    g.fillRect(Math.random() * W, Math.random() * H, 2 + Math.random() * 20, 1 + Math.random() * 3);
  }
  // leading-edge strip (bare alloy) and darker trailing edge
  g.fillStyle = '#d3d7db'; g.fillRect(0, 0, W * 0.05, H);
  g.fillStyle = '#a4a8ad'; g.fillRect(W * 0.955, 0, W * 0.045, H);
  // walkway corridor near the root
  g.fillStyle = 'rgba(70,74,80,0.36)'; g.fillRect(W * 0.12, 0, W * 0.56, H * 0.15);
  g.setLineDash([6, 5]); g.strokeStyle = 'rgba(30,34,40,0.55)'; g.lineWidth = 2;
  g.strokeRect(W * 0.12, 2, W * 0.56, H * 0.15 - 2);
  g.setLineDash([]);
  // spanwise panel lines (chord stations) + rib lines
  g.strokeStyle = 'rgba(40,46,54,0.24)'; g.lineWidth = Math.max(1, W / 1024);
  for (const u of [0.05, 0.14, 0.28, 0.45, 0.62, 0.72, 0.955]) { g.beginPath(); g.moveTo(W * u, 0); g.lineTo(W * u, H); g.stroke(); }
  g.strokeStyle = 'rgba(40,46,54,0.12)';
  for (let k = 1; k < 14; k++) { g.beginPath(); g.moveTo(0, H * k / 14); g.lineTo(W, H * k / 14); g.stroke(); }
  // fuel caps and hinge covers
  g.strokeStyle = 'rgba(30,34,40,0.6)'; g.lineWidth = 2;
  for (const v of [0.30, 0.48, 0.66, 0.84]) { g.beginPath(); g.arc(W * 0.40, H * v, H * 0.02, 0, Math.PI * 2); g.stroke(); }
  g.fillStyle = 'rgba(90,94,100,0.5)';
  for (const v of [0.22, 0.40, 0.58, 0.76]) g.fillRect(W * 0.69, H * v - H * 0.012, W * 0.05, H * 0.024);
  const tex = new THREE.CanvasTexture(cv);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.userData.texScale = texScale;
  _wingMapCache = tex;
  return tex;
}

export function generateTailTexture(airline, texScale = 1) {
  const S = Math.round(512 * texScale);
  const cv = document.createElement('canvas');
  cv.width = cv.height = S;
  const g = cv.getContext('2d');
  const col = airline.colors;
  g.fillStyle = col.tail;
  g.fillRect(0, 0, S, S);
  const c1 = col.cheat1, c2 = col.cheat2, fus = col.fuselage;
  const cx = S / 2, cy = S / 2;

  switch (airline.tailMotif) {
    case 'stripes': case 'stripes-fr': {
      const cols = airline.tailMotif === 'stripes-fr' ? ['#002157', '#ffffff', '#ed1c24'] : [c1, fus, c1];
      let x = S * 0.25;
      for (const c of cols) { g.fillStyle = c; g.save(); g.transform(1, 0, -0.35, 1, 0, 0); g.fillRect(x + S * 0.18, 0, S * 0.13, S); g.restore(); x += S * 0.15; }
      break;
    }
    case 'dualslash':
      g.save(); g.transform(1, 0, -0.4, 1, 0, 0);
      g.fillStyle = c1; g.fillRect(S * 0.45, 0, S * 0.14, S);
      g.fillStyle = c2; g.fillRect(S * 0.63, 0, S * 0.14, S);
      g.restore();
      break;
    case 'widget':
      g.fillStyle = c1;
      g.beginPath(); g.moveTo(cx, S * 0.16); g.lineTo(cx + S * 0.24, S * 0.62); g.lineTo(cx - S * 0.24, S * 0.62); g.closePath(); g.fill();
      g.fillStyle = shade(c1, 0.62);
      g.beginPath(); g.moveTo(cx, S * 0.34); g.lineTo(cx + S * 0.24, S * 0.66); g.lineTo(cx - S * 0.24, S * 0.66); g.closePath(); g.fill();
      break;
    case 'globe': case 'globe-blue': case 'globe-gold': {
      const gc = airline.tailMotif === 'globe-gold' ? c2 : (airline.tailMotif === 'globe-blue' ? c1 : fus);
      if (airline.tailMotif === 'globe-blue') { g.fillStyle = fus; g.fillRect(0, 0, S, S); }
      g.strokeStyle = gc; g.lineWidth = S * 0.022;
      g.beginPath(); g.arc(cx, cy, S * 0.26, 0, Math.PI * 2); g.stroke();
      for (let i = -2; i <= 2; i++) {
        g.beginPath(); g.ellipse(cx, cy, Math.abs(S * 0.26 * Math.cos(i * 0.5)), S * 0.26, 0, 0, Math.PI * 2); g.stroke();
      }
      g.beginPath(); g.moveTo(cx - S * 0.26, cy); g.lineTo(cx + S * 0.26, cy); g.stroke();
      break;
    }
    case 'heart':
      g.fillStyle = fus;
      g.beginPath();
      g.moveTo(cx, cy + S * 0.2);
      g.bezierCurveTo(cx - S * 0.3, cy - S * 0.05, cx - S * 0.14, cy - S * 0.26, cx, cy - S * 0.1);
      g.bezierCurveTo(cx + S * 0.14, cy - S * 0.26, cx + S * 0.3, cy - S * 0.05, cx, cy + S * 0.2);
      g.fill();
      break;
    case 'sun':
      g.fillStyle = '#f4a81d';
      g.beginPath(); g.arc(cx, cy, S * 0.18, 0, Math.PI * 2); g.fill();
      g.strokeStyle = '#f4a81d'; g.lineWidth = S * 0.03;
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        g.beginPath();
        g.moveTo(cx + Math.cos(a) * S * 0.24, cy + Math.sin(a) * S * 0.24);
        g.lineTo(cx + Math.cos(a) * S * 0.34, cy + Math.sin(a) * S * 0.34);
        g.stroke();
      }
      break;
    case 'mosaic':
      for (let i = 0; i < 40; i++) {
        g.fillStyle = [c1, c2, fus, shade(c1, 1.4)][i % 4];
        g.fillRect((i * 73) % S, ((i * 137) % S), S * 0.09, S * 0.09);
      }
      break;
    case 'split':
      g.fillStyle = c1; g.fillRect(0, 0, S, S);
      g.fillStyle = c2;
      g.beginPath(); g.moveTo(S, 0); g.lineTo(S, S); g.lineTo(S * 0.25, S); g.closePath(); g.fill();
      break;
    case 'shield':
      g.fillStyle = c1;
      g.beginPath();
      g.moveTo(cx, cy - S * 0.28);
      g.lineTo(cx + S * 0.22, cy - S * 0.18);
      g.lineTo(cx + S * 0.22, cy + S * 0.08);
      g.quadraticCurveTo(cx + S * 0.2, cy + S * 0.3, cx, cy + S * 0.36);
      g.quadraticCurveTo(cx - S * 0.2, cy + S * 0.3, cx - S * 0.22, cy + S * 0.08);
      g.lineTo(cx - S * 0.22, cy - S * 0.18);
      g.closePath(); g.fill();
      break;
    case 'bird':
      g.fillStyle = c1;
      g.beginPath();
      g.moveTo(S * 0.2, cy);
      g.quadraticCurveTo(cx, cy - S * 0.3, S * 0.82, cy - S * 0.06);
      g.quadraticCurveTo(cx, cy - S * 0.02, S * 0.2, cy);
      g.fill();
      break;
    case 'compass':
      g.fillStyle = fus; g.beginPath(); g.arc(cx, cy, S * 0.24, 0, Math.PI * 2); g.fill();
      g.fillStyle = c1;
      g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx - S * 0.05, cy - S * 0.08); g.lineTo(cx - S * 0.2, cy - S * 0.2); g.closePath(); g.fill();
      break;
    case 'circle':
      g.fillStyle = c2; g.beginPath(); g.arc(cx, cy, S * 0.22, 0, Math.PI * 2); g.fill();
      g.strokeStyle = fus; g.lineWidth = S * 0.02;
      g.beginPath(); g.arc(cx, cy, S * 0.22, 0, Math.PI * 2); g.stroke();
      break;
    case 'ribbon':
      g.fillStyle = '#eb2226';
      g.beginPath(); g.moveTo(0, S * 0.62); g.quadraticCurveTo(cx, S * 0.4, S, S * 0.55); g.lineTo(S, S * 0.68); g.quadraticCurveTo(cx, S * 0.52, 0, S * 0.74); g.closePath(); g.fill();
      g.fillStyle = '#ffffff';
      g.beginPath(); g.moveTo(0, S * 0.72); g.quadraticCurveTo(cx, S * 0.5, S, S * 0.66); g.lineTo(S, S * 0.72); g.quadraticCurveTo(cx, S * 0.58, 0, S * 0.8); g.closePath(); g.fill();
      break;
    case 'tricolor': // UAE flag (public domain): red hoist + green/white/black
      g.fillStyle = '#00843d'; g.fillRect(0, 0, S, S * 0.334);
      g.fillStyle = '#ffffff'; g.fillRect(0, S * 0.334, S, S * 0.333);
      g.fillStyle = '#0b0b0b'; g.fillRect(0, S * 0.667, S, S * 0.333);
      g.fillStyle = '#ce1126'; g.fillRect(0, 0, S * 0.27, S);
      break;
    case 'kangaroo':
      g.fillStyle = fus;
      g.beginPath();
      g.moveTo(S * 0.3, S * 0.72);
      g.quadraticCurveTo(S * 0.35, S * 0.4, S * 0.55, S * 0.38);
      g.lineTo(S * 0.62, S * 0.25);
      g.lineTo(S * 0.66, S * 0.4);
      g.quadraticCurveTo(S * 0.75, S * 0.5, S * 0.6, S * 0.56);
      g.quadraticCurveTo(S * 0.5, S * 0.6, S * 0.46, S * 0.72);
      g.closePath(); g.fill();
      break;
    case 'flower':
      g.fillStyle = fus;
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
        g.beginPath();
        g.ellipse(cx + Math.cos(a) * S * 0.13, cy + Math.sin(a) * S * 0.13, S * 0.1, S * 0.16, a + Math.PI / 2, 0, Math.PI * 2);
        g.fill();
      }
      g.fillStyle = c2; g.beginPath(); g.arc(cx, cy, S * 0.07, 0, Math.PI * 2); g.fill();
      break;
    // 'solid' and default: plain tail colour
  }

  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
