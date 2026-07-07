// Procedural livery painter. Every scheme here is a simplified colour
// "tribute" generated at runtime — clearly NOT an airline's exact trademarked
// artwork (see docs/ARCHITECTURE.md). Fuselage texture mapping:
// u = 0 (nose) -> 1 (tail); v = 0 bottom -> 0.25 right -> 0.5 top -> 0.75 left -> 1 bottom.
import * as THREE from 'three';

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

  const fuselageMap = new THREE.CanvasTexture(cv);
  fuselageMap.anisotropy = 4;
  fuselageMap.colorSpace = THREE.SRGBColorSpace;

  return {
    fuselageMap,
    tailMap: generateTailTexture(airline, texScale),
    engineColor: new THREE.Color(col.engine || col.fuselage),
    wingColor: new THREE.Color('#b7bbc0'),
    bellyColor: new THREE.Color(belly),
    label: `${airline.name} (tribute livery)`
  };
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
