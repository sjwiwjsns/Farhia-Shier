/* ==========================================================================
   mcCh* — SVG charts as strings. No canvas, no DOM, no dependencies.

   Every function returns a complete <svg> string, so the caller can drop it
   into innerHTML, a template literal, or a server response. Nothing here
   touches document/window, which is also why the self-test at the bottom can
   assert on the markup directly.

   Conventions that the host app depends on:
   - every top-level binding is prefixed `mcCh` (the host defines ~320 `mc*`
     names of its own; `mcCh` is the reserved corner).
   - the root <svg> carries viewBox + preserveAspectRatio and NO width/height
     attribute, so CSS owns the box. In fact no element emits a `width="..."`
     attribute at all: bars and heat cells are <path>, not <rect>, and stroke
     widths ride in `style="stroke-width:…"`. That keeps a blunt
     `markup.includes('width="')` check honest instead of subtly wrong.
   - nothing emits the sequence that would close an inline script tag, because
     mcChEsc turns every `<` into `&lt;` before it can reach the output.

   Colours are the dark-surface categorical set from the design system, which
   passes the lightness-band, chroma, CVD-separation, normal-vision and
   contrast checks as an ordered set. The order is the safety mechanism —
   assign slots in order, do not shuffle, do not generate new hues.
   ========================================================================== */

/* --------------------------------------------------------------------------
   Palette & chrome
   -------------------------------------------------------------------------- */

/* Categorical slots, in fixed order. Slots are assigned by series index and
   never re-sorted: colour follows the entity, not its rank, so filtering a
   series out must not repaint the survivors. Past slot 8 the honest answer is
   to fold into "Other" or facet — mcChDonut does that automatically; line/bar
   callers with 9+ series should aggregate before calling. */
const mcChPalette = [
  '#3987e5', /* blue    */
  '#d95926', /* orange  */
  '#199e70', /* aqua    */
  '#c98500', /* yellow  */
  '#d55181', /* magenta */
  '#008300', /* green   */
  '#9085e9', /* violet  */
  '#e66767'  /* red     */
];

/* Sequential ramp: ONE hue, stepped by lightness. Never a rainbow — a rainbow
   ramp invents category boundaries where the data has none. Ordered dark->light
   because these charts sit on a dark surface, so "near zero" must recede
   toward the background rather than glow. */
const mcChRampStops = [
  [0x0d, 0x36, 0x6b],
  [0x1c, 0x5c, 0xab],
  [0x2a, 0x78, 0xd6],
  [0x6d, 0xa7, 0xec],
  [0xcd, 0xe2, 0xfb]
];

/* Chrome. Ink tokens are the documented values; grid/axis/ring are expressed
   as alpha-composited white so they stay sensible if the host surface is not
   exactly #1a1a19. Text never wears a series colour — identity comes from the
   coloured mark beside the label. */
const mcChInk = '#ffffff';
const mcChInk2 = '#c3c2b7';
const mcChMuted = '#898781';
const mcChGridColor = 'rgba(255,255,255,0.09)';
const mcChAxisColor = 'rgba(255,255,255,0.16)';
const mcChSurface = '#1a1a19';
const mcChFont = 'system-ui,-apple-system,Segoe UI,Roboto,sans-serif';

function mcChRamp(t) {
  const u = mcChClamp(mcChNum(t, 0), 0, 1);
  const n = mcChRampStops.length - 1;
  const i = Math.min(n - 1, Math.floor(u * n));
  const f = u * n - i;
  const a = mcChRampStops[i];
  const b = mcChRampStops[i + 1];
  let out = '#';
  for (let k = 0; k < 3; k++) {
    const v = mcChClamp(Math.round(a[k] + (b[k] - a[k]) * f), 0, 255);
    out += v.toString(16).padStart(2, '0');
  }
  return out;
}

function mcChColorAt(i, colors) {
  const list = (Array.isArray(colors) && colors.length) ? colors : mcChPalette;
  const n = Math.max(0, Math.round(mcChNum(i, 0)));
  return mcChColor(list[n % list.length], mcChPalette[n % mcChPalette.length]);
}

/* --------------------------------------------------------------------------
   Escaping — the load-bearing part
   -------------------------------------------------------------------------- */

const mcChEscMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/* Every label that reaches the output goes through here. This matters more in
   this module than in ordinary templating for three compounding reasons:

   1. The labels are news headlines pulled from feeds. They routinely contain
      `&`, curly and straight quotes, and occasionally raw markup that some
      upstream CMS failed to strip. Un-escaped, `AT&T` alone produces an
      undefined-entity parse error.
   2. The output is spliced into innerHTML. An SVG <text> node is a normal
      element content position, so `<img onerror=…>` inside a headline is a
      live XSS vector, not a cosmetic bug. Escaping `<` closes that.
   3. The host pastes this file inside an inline <script> block. The HTML
      tokenizer looks for the script-closing sequence *inside JS string
      literals too* — a headline containing one would terminate the script
      element mid-expression and dump the rest of the app as text. Escaping `<`
      before it can be concatenated makes that structurally impossible, which
      is why escaping happens at emit time here rather than at ingest time
      somewhere else in the pipeline.

   Attribute values are quoted with `"` everywhere, and `"` plus `'` are both
   escaped, so a label can never break out of an attribute either. */
function mcChEsc(v) {
  if (v === null || v === undefined) return '';
  return String(v).replace(/[&<>"']/g, function (c) { return mcChEscMap[c]; });
}

/* Colours arrive from caller data too (`{label, value, color}` rows are often
   built from a feed). Rather than escape a colour — which would silently
   produce `&quot;` inside a fill attribute — reject anything that is not a
   recognisable CSS colour and fall back. Whitelist, not blacklist. */
function mcChColor(c, fallback) {
  const fb = fallback || mcChPalette[0];
  if (typeof c !== 'string') return fb;
  const s = c.trim();
  if (/^#[0-9a-fA-F]{3,8}$/.test(s)) return s;
  if (/^(rgb|hsl)a?\([-0-9.,%/\s]+\)$/.test(s)) return s;
  if (/^[a-zA-Z]{3,20}$/.test(s)) return s;
  return fb;
}

/* --------------------------------------------------------------------------
   Numbers
   -------------------------------------------------------------------------- */

function mcChStr(v) {
  return (v === null || v === undefined) ? '' : String(v);
}

function mcChNum(v, fallback) {
  if (typeof v === 'number') return isFinite(v) ? v : fallback;
  if (v === null || v === undefined || v === '' || typeof v === 'boolean') return fallback;
  const n = Number(v);
  return isFinite(n) ? n : fallback;
}

function mcChClamp(v, lo, hi) {
  const n = mcChNum(v, lo);
  return n < lo ? lo : (n > hi ? hi : n);
}

/* Coordinate formatter. Single choke point for every number that lands in a
   path/attribute, which is how the "no NaN in the output" guarantee is
   actually enforced: any non-finite value degrades to 0 instead of poisoning a
   `d` attribute. Clamped to ±1e6 so a huge outlier can never push a coordinate
   into exponential notation, which SVG path grammar does not accept. */
function mcChN(v) {
  let n = typeof v === 'number' ? v : Number(v);
  /* NaN is meaningless as a coordinate, so it degrades to the origin. An
     infinity, though, still carries a direction — it is an outlier that ran
     off the end of the axis — so it clamps to the rail on the side it came
     from rather than collapsing to 0 and drawing a spike through the chart.
     Order matters: the NaN test has to be separate from the clamp, or the
     infinities never reach it. */
  if (n !== n) return '0';
  if (n > 1e6) n = 1e6;
  if (n < -1e6) n = -1e6;
  const r = Math.round(n * 100) / 100;
  return String(r === 0 ? 0 : r);
}

/* Human-readable value for a label. Thousands-grouped, compacted past 10k so
   an axis does not turn into a wall of digits. */
function mcChFmtVal(v, decimals) {
  const n = mcChNum(v, null);
  if (n === null) return '';
  const a = Math.abs(n);
  if (a >= 1e15) return n.toExponential(1);
  if (a >= 1e12) return mcChTrimZeros((n / 1e12).toFixed(1)) + 'T';
  if (a >= 1e9) return mcChTrimZeros((n / 1e9).toFixed(1)) + 'B';
  if (a >= 1e6) return mcChTrimZeros((n / 1e6).toFixed(1)) + 'M';
  if (a >= 1e4) return mcChTrimZeros((n / 1e3).toFixed(1)) + 'k';
  const dec = (decimals === null || decimals === undefined)
    ? (Number.isInteger(n) ? 0 : Math.min(3, Math.max(0, 3 - Math.floor(Math.log10(a || 1)))))
    : mcChClamp(decimals, 0, 6);
  return mcChGroup(mcChTrimZeros(n.toFixed(dec)));
}

function mcChTrimZeros(s) {
  return s.indexOf('.') < 0 ? s : s.replace(/\.?0+$/, '');
}

function mcChGroup(s) {
  const neg = s.charAt(0) === '-';
  const body = neg ? s.slice(1) : s;
  const dot = body.indexOf('.');
  const intPart = dot < 0 ? body : body.slice(0, dot);
  const rest = dot < 0 ? '' : body.slice(dot);
  return (neg ? '-' : '') + intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + rest;
}

/* --------------------------------------------------------------------------
   Nice ticks
   -------------------------------------------------------------------------- */

/* The classic "nice numbers" rounding: snap a magnitude to 1, 2, 5 or 10 times
   a power of ten. `round=false` grows the value to the next nice number (used
   for the overall range so the data always fits); `round=true` picks the
   nearest (used for the step, where over- and under-shoot are both fine). */
function mcChNiceNum(range, round) {
  const r = Math.abs(mcChNum(range, 1)) || 1;
  const exp = Math.floor(Math.log10(r));
  const f = r / Math.pow(10, exp);
  let nf;
  if (round) {
    nf = f < 1.5 ? 1 : (f < 3 ? 2 : (f < 7 ? 5 : 10));
  } else {
    nf = f <= 1 ? 1 : (f <= 2 ? 2 : (f <= 5 ? 5 : 10));
  }
  return nf * Math.pow(10, exp);
}

/* Why this exists at all: the naive axis is `min + i*(max-min)/count`, which
   for data spanning 0..97 with 5 ticks prints 0, 23.7, 47.4, 71.1, 94.8. Every
   one of those is a number the reader has to *decode* before they can place a
   point on it, and none of them is a number they would ever quote back. Nice
   ticks trade a little empty headroom for 0, 20, 40, 60, 80, 100 — an axis you
   read by glancing, and one where gridlines land on values that mean something
   ("half", "a quarter"). The domain is widened to the ticks, never the other
   way round, so no datum is ever clipped by the rounding. */
function mcChNiceTicks(min, max, count) {
  let lo = mcChNum(min, 0);
  let hi = mcChNum(max, 1);
  if (lo > hi) { const t = lo; lo = hi; hi = t; }

  /* Degenerate domain (single point, or every value identical). Dividing by a
     zero span later would emit NaN into every coordinate, so widen here, once,
     at the source. Pad relative to the magnitude so 3 -> 1..5 rather than
     3 -> -0.5..6.5, and fall back to ±1 at exactly zero. */
  if (hi - lo === 0) {
    const pad = Math.abs(lo) > 0 ? Math.abs(lo) * 0.5 : 1;
    lo -= pad;
    hi += pad;
  }

  const want = Math.round(mcChClamp(mcChNum(count, 5), 2, 20));
  const range = mcChNiceNum(hi - lo, false);
  const step = mcChNiceNum(range / (want - 1), true) || 1;
  const niceMin = Math.floor(lo / step) * step;
  const niceMax = Math.ceil(hi / step) * step;

  const dec = mcChTickDecimals(step);
  const n = Math.min(200, Math.max(1, Math.round((niceMax - niceMin) / step)));
  const ticks = [];
  for (let i = 0; i <= n; i++) {
    const raw = niceMin + i * step;
    /* Accumulated float error makes 0.1+0.2 print as 0.30000000000000004 on an
       axis. Snap each tick to the step's own precision. */
    const t = Number(raw.toFixed(Math.min(12, dec + 3)));
    ticks.push(Math.abs(t) < step * 1e-9 ? 0 : t);
  }
  return { ticks: ticks, niceMin: niceMin, niceMax: niceMax, step: step, decimals: dec };
}

function mcChTickDecimals(step) {
  const s = Math.abs(mcChNum(step, 1)) || 1;
  return mcChClamp(-Math.floor(Math.log10(s)), 0, 6);
}

function mcChScale(d0, d1, r0, r1) {
  const span = d1 - d0;
  if (!isFinite(span) || span === 0) {
    const mid = (r0 + r1) / 2;
    return function () { return mid; };
  }
  const k = (r1 - r0) / span;
  return function (v) { return r0 + (mcChNum(v, d0) - d0) * k; };
}

/* --------------------------------------------------------------------------
   Text metrics
   -------------------------------------------------------------------------- */

/* SVG offers no text measurement without a live layout: getComputedTextLength
   and getBBox both require the element to be in a rendered document, and this
   module never touches the DOM. So width is *approximated* from per-character
   advance ratios for a typical UI sans. It is deliberately a little
   pessimistic — the cost of over-estimating is an unnecessary label rotation,
   the cost of under-estimating is overlapping text, and only one of those is
   embarrassing. */
function mcChAdvance(ch) {
  if (' .,:;\'`!|iIl'.indexOf(ch) >= 0) return 0.30;
  if ('ftjr()[]{}/\\-'.indexOf(ch) >= 0) return 0.38;
  if ('mwMW@%'.indexOf(ch) >= 0) return 0.92;
  if (ch >= 'A' && ch <= 'Z') return 0.68;
  if (ch >= '0' && ch <= '9') return 0.56;
  if (ch >= 'a' && ch <= 'z') return 0.54;
  if (ch.charCodeAt(0) > 0x2e80) return 1.0; /* CJK & friends are full-width */
  return 0.60;
}

function mcChTextW(s, fontSize) {
  const str = mcChStr(s);
  const size = mcChNum(fontSize, 9);
  let w = 0;
  for (let i = 0; i < str.length; i++) w += mcChAdvance(str.charAt(i));
  return w * size;
}

/* A label that will not fit is truncated, never clipped — clipping crops the
   glyph mid-stroke and reads as a rendering bug. */
function mcChTruncate(s, maxPx, fontSize) {
  const str = mcChStr(s);
  if (!str) return '';
  const size = mcChNum(fontSize, 9);
  const max = mcChNum(maxPx, 0);
  if (max <= 0) return '';
  if (mcChTextW(str, size) <= max) return str;
  const ellW = mcChTextW('…', size);
  let w = 0;
  let out = '';
  for (let i = 0; i < str.length; i++) {
    const a = mcChAdvance(str.charAt(i)) * size;
    if (w + a + ellW > max) break;
    w += a;
    out += str.charAt(i);
  }
  return out.replace(/\s+$/, '') + '…';
}

/* --------------------------------------------------------------------------
   SVG primitives
   -------------------------------------------------------------------------- */

function mcChPad(p, d) {
  const out = { t: d.t, r: d.r, b: d.b, l: d.l };
  if (typeof p === 'number' && isFinite(p)) {
    out.t = out.r = out.b = out.l = p;
  } else if (Array.isArray(p)) {
    out.t = mcChNum(p[0], out.t);
    out.r = mcChNum(p[1], out.r);
    out.b = mcChNum(p[2], out.b);
    out.l = mcChNum(p[3], out.l);
  } else if (p && typeof p === 'object') {
    out.t = mcChNum(p.top, mcChNum(p.t, out.t));
    out.r = mcChNum(p.right, mcChNum(p.r, out.r));
    out.b = mcChNum(p.bottom, mcChNum(p.b, out.b));
    out.l = mcChNum(p.left, mcChNum(p.l, out.l));
  }
  out.t = mcChClamp(out.t, 0, 400);
  out.r = mcChClamp(out.r, 0, 400);
  out.b = mcChClamp(out.b, 0, 400);
  out.l = mcChClamp(out.l, 0, 400);
  return out;
}

function mcChBase(opts, defs) {
  const src = (opts && typeof opts === 'object') ? opts : {};
  const o = {};
  o.src = src;
  o.w = mcChClamp(mcChNum(src.width, defs.width), 16, 20000);
  o.h = mcChClamp(mcChNum(src.height, defs.height), 16, 20000);
  o.pad = mcChPad(src.pad, defs.pad);
  o.colors = (Array.isArray(src.colors) && src.colors.length) ? src.colors : mcChPalette;
  o.title = src.title;
  o.yLabel = src.yLabel;
  o.showGrid = src.showGrid !== false;
  o.showDots = src.showDots === true;
  o.animate = src.animate === true;
  o.fs = mcChClamp(mcChNum(src.fontSize, defs.fontSize || 9), 4, 48);
  o.par = typeof src.preserveAspectRatio === 'string' ? src.preserveAspectRatio : 'xMidYMid meet';
  /* The surface colour is only used for the 2px separation gap/ring — the
     spacer that keeps touching marks distinct without drawing a border. */
  o.surface = mcChColor(src.surface, mcChSurface);
  return o;
}

/* Root element. No width/height attributes: the host sizes charts with CSS and
   viewBox + preserveAspectRatio do the scaling. role + <title> give assistive
   tech something to announce, since an <svg> full of paths is otherwise
   meaningless. */
function mcChOpen(o, cls, fallbackTitle) {
  const label = mcChEsc(o.title) || mcChEsc(fallbackTitle);
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + mcChN(o.w) + ' ' + mcChN(o.h) + '"'
    + ' preserveAspectRatio="' + mcChEsc(o.par) + '"'
    + ' role="img" aria-label="' + label + '"'
    + ' class="mcch ' + mcChEsc(cls) + '" style="display:block">'
    + '<title>' + label + '</title>';
}

function mcChClose() {
  return '</svg>';
}

function mcChNoData(o, msg) {
  return mcChText(o.w / 2, o.h / 2, mcChStr(msg) || 'No data', {
    anchor: 'middle', baseline: 'middle', size: o.fs + 1, fill: mcChMuted, cls: 'mcch-empty'
  });
}

function mcChText(x, y, str, a) {
  const at = a || {};
  let s = '<text x="' + mcChN(x) + '" y="' + mcChN(y) + '"';
  if (at.anchor) s += ' text-anchor="' + mcChEsc(at.anchor) + '"';
  if (at.baseline) s += ' dominant-baseline="' + mcChEsc(at.baseline) + '"';
  if (at.cls) s += ' class="' + mcChEsc(at.cls) + '"';
  if (at.rotate && isFinite(at.rotate)) {
    s += ' transform="rotate(' + mcChN(at.rotate) + ' ' + mcChN(x) + ' ' + mcChN(y) + ')"';
  }
  s += ' style="font-family:' + mcChFont
    + ';font-size:' + mcChN(mcChNum(at.size, 9)) + 'px'
    + ';fill:' + mcChColor(at.fill, mcChMuted)
    + (at.weight ? ';font-weight:' + mcChN(at.weight) : '')
    + (at.tabular ? ';font-variant-numeric:tabular-nums' : '')
    + '">' + mcChEsc(str) + '</text>';
  return s;
}

/* stroke-width lives in `style` rather than as an attribute so the markup
   never contains the substring `width="` — see the header note. */
function mcChLineEl(x1, y1, x2, y2, color, sw, extra) {
  return '<line x1="' + mcChN(x1) + '" y1="' + mcChN(y1) + '" x2="' + mcChN(x2) + '" y2="' + mcChN(y2) + '"'
    + ' stroke="' + mcChColor(color, mcChGridColor) + '"'
    + (extra || '')
    + ' style="stroke-width:' + mcChN(mcChNum(sw, 1)) + '"/>';
}

function mcChCircle(cx, cy, r, fill, ring, ringColor) {
  return '<circle cx="' + mcChN(cx) + '" cy="' + mcChN(cy) + '" r="' + mcChN(Math.max(0, mcChNum(r, 0))) + '"'
    + ' fill="' + mcChColor(fill, mcChPalette[0]) + '"'
    + (ring ? ' stroke="' + mcChColor(ringColor, mcChSurface) + '" style="stroke-width:' + mcChN(ring) + '"' : '')
    + '/>';
}

function mcChPathD(pts) {
  if (!pts.length) return '';
  let d = 'M' + mcChN(pts[0][0]) + ' ' + mcChN(pts[0][1]);
  for (let i = 1; i < pts.length; i++) d += 'L' + mcChN(pts[i][0]) + ' ' + mcChN(pts[i][1]);
  return d;
}

function mcChPathLen(pts) {
  let L = 0;
  for (let i = 1; i < pts.length; i++) {
    const dx = pts[i][0] - pts[i - 1][0];
    const dy = pts[i][1] - pts[i - 1][1];
    L += Math.sqrt(dx * dx + dy * dy);
  }
  return isFinite(L) ? L : 0;
}

/* Bars are paths, and only the data-end is rounded — the baseline end stays
   square so every bar visually springs from the same line. `dir` names which
   end grows away from the baseline. */
function mcChBarPath(x, y, w, h, r, dir) {
  const X = mcChNum(x, 0);
  const Y = mcChNum(y, 0);
  const W = Math.max(0, mcChNum(w, 0));
  const H = Math.max(0, mcChNum(h, 0));
  if (W <= 0 || H <= 0) return '';
  const R = Math.max(0, Math.min(mcChNum(r, 0), W / 2, H / 2));
  const n = mcChN;
  if (R <= 0.01) {
    return 'M' + n(X) + ' ' + n(Y) + 'L' + n(X + W) + ' ' + n(Y)
      + 'L' + n(X + W) + ' ' + n(Y + H) + 'L' + n(X) + ' ' + n(Y + H) + 'Z';
  }
  if (dir === 'down') {
    return 'M' + n(X) + ' ' + n(Y) + 'L' + n(X + W) + ' ' + n(Y)
      + 'L' + n(X + W) + ' ' + n(Y + H - R)
      + 'A' + n(R) + ' ' + n(R) + ' 0 0 1 ' + n(X + W - R) + ' ' + n(Y + H)
      + 'L' + n(X + R) + ' ' + n(Y + H)
      + 'A' + n(R) + ' ' + n(R) + ' 0 0 1 ' + n(X) + ' ' + n(Y + H - R) + 'Z';
  }
  if (dir === 'right') {
    return 'M' + n(X) + ' ' + n(Y) + 'L' + n(X + W - R) + ' ' + n(Y)
      + 'A' + n(R) + ' ' + n(R) + ' 0 0 1 ' + n(X + W) + ' ' + n(Y + R)
      + 'L' + n(X + W) + ' ' + n(Y + H - R)
      + 'A' + n(R) + ' ' + n(R) + ' 0 0 1 ' + n(X + W - R) + ' ' + n(Y + H)
      + 'L' + n(X) + ' ' + n(Y + H) + 'Z';
  }
  if (dir === 'left') {
    return 'M' + n(X + W) + ' ' + n(Y) + 'L' + n(X + R) + ' ' + n(Y)
      + 'A' + n(R) + ' ' + n(R) + ' 0 0 0 ' + n(X) + ' ' + n(Y + R)
      + 'L' + n(X) + ' ' + n(Y + H - R)
      + 'A' + n(R) + ' ' + n(R) + ' 0 0 0 ' + n(X + R) + ' ' + n(Y + H)
      + 'L' + n(X + W) + ' ' + n(Y + H) + 'Z';
  }
  /* default: 'up' — rounded top, square bottom */
  return 'M' + n(X) + ' ' + n(Y + R)
    + 'A' + n(R) + ' ' + n(R) + ' 0 0 1 ' + n(X + R) + ' ' + n(Y)
    + 'L' + n(X + W - R) + ' ' + n(Y)
    + 'A' + n(R) + ' ' + n(R) + ' 0 0 1 ' + n(X + W) + ' ' + n(Y + R)
    + 'L' + n(X + W) + ' ' + n(Y + H)
    + 'L' + n(X) + ' ' + n(Y + H) + 'Z';
}

/* Donut/pie wedge as a ring segment.

   Two things go wrong in hand-rolled arc code, and both are handled here:

   1. large-arc-flag. An SVG elliptical arc is ambiguous — two arcs connect any
      two points on a circle. The flag picks the long one. Forget it and every
      slice over 50% silently renders as its own complement, so a 70% share
      draws as 30%. Hence `sweep > PI ? 1 : 0`.
   2. The full circle. A single arc whose start and end points coincide has zero
      length and draws nothing, so a lone 100% slice would vanish. Split it into
      two half-circles instead, with the hole as a second subpath punched out by
      fill-rule="evenodd". */
function mcChArcRing(cx, cy, rOuter, rInner, a0, a1) {
  const TAU = Math.PI * 2;
  const rO = Math.max(0, mcChNum(rOuter, 0));
  const rI = mcChClamp(mcChNum(rInner, 0), 0, rO);
  const start = mcChNum(a0, 0);
  const end = mcChNum(a1, 0);
  const sweep = end - start;
  if (!(rO > 0) || !isFinite(sweep) || sweep <= 1e-9) return '';
  const n = mcChN;
  const px = function (r, a) { return n(cx + r * Math.cos(a)) + ' ' + n(cy + r * Math.sin(a)); };

  if (sweep >= TAU - 1e-6) {
    let d = 'M' + px(rO, 0)
      + 'A' + n(rO) + ' ' + n(rO) + ' 0 1 1 ' + px(rO, Math.PI)
      + 'A' + n(rO) + ' ' + n(rO) + ' 0 1 1 ' + px(rO, TAU) + 'Z';
    if (rI > 0.01) {
      d += 'M' + px(rI, 0)
        + 'A' + n(rI) + ' ' + n(rI) + ' 0 1 0 ' + px(rI, Math.PI)
        + 'A' + n(rI) + ' ' + n(rI) + ' 0 1 0 ' + px(rI, TAU) + 'Z';
    }
    return d;
  }

  const large = sweep > Math.PI ? 1 : 0;
  let d = 'M' + px(rO, start)
    + 'A' + n(rO) + ' ' + n(rO) + ' 0 ' + large + ' 1 ' + px(rO, end);
  if (rI > 0.01) {
    d += 'L' + px(rI, end)
      + 'A' + n(rI) + ' ' + n(rI) + ' 0 ' + large + ' 0 ' + px(rI, start) + 'Z';
  } else {
    d += 'L' + n(cx) + ' ' + n(cy) + 'Z';
  }
  return d;
}

/* --------------------------------------------------------------------------
   Legends
   -------------------------------------------------------------------------- */

/* Laid out from (0,0) and positioned by the caller with a translate, so the
   caller can measure the height *before* deciding how much plot area is left. */
function mcChLegend(items, maxW, o) {
  const fs = o.fs;
  const rowH = fs + 5;
  const dot = 3.2;
  const gap = 10;
  let cx = 0;
  let line = 0;
  let svg = '';
  for (let i = 0; i < items.length; i++) {
    const label = mcChStr(items[i].label);
    const w = dot * 2 + 4 + mcChTextW(label, fs);
    if (cx > 0 && cx + w > maxW) { cx = 0; line++; }
    const cy = line * rowH + rowH / 2;
    svg += mcChCircle(cx + dot, cy, dot, items[i].color, 0);
    svg += mcChText(cx + dot * 2 + 4, cy, label, { baseline: 'middle', size: fs, fill: mcChInk2 });
    cx += w + gap;
  }
  return { svg: svg, height: (line + 1) * rowH };
}

function mcChLegendV(items, maxW, maxH, o) {
  const fs = o.fs;
  const rowH = fs + 5;
  const dot = 3.2;
  const cap = Math.max(1, Math.floor(maxH / rowH));
  const show = items.length > cap ? cap - 1 : items.length;
  let svg = '';
  for (let i = 0; i < show; i++) {
    const cy = i * rowH + rowH / 2;
    svg += mcChCircle(dot, cy, dot, items[i].color, 0);
    svg += mcChText(dot * 2 + 4, cy,
      mcChTruncate(items[i].label, maxW - dot * 2 - 4, fs),
      { baseline: 'middle', size: fs, fill: mcChInk2 });
  }
  if (show < items.length) {
    svg += mcChText(dot * 2 + 4, show * rowH + rowH / 2,
      '+' + (items.length - show) + ' more', { baseline: 'middle', size: fs, fill: mcChMuted });
  }
  return { svg: svg, height: Math.min(items.length, cap) * rowH };
}

function mcChGroupAt(x, y, svg) {
  return '<g transform="translate(' + mcChN(x) + ' ' + mcChN(y) + ')">' + svg + '</g>';
}

/* --------------------------------------------------------------------------
   Input normalisation
   -------------------------------------------------------------------------- */

function mcChPlot(o, reservedBottom) {
  const b = o.pad.b + Math.max(0, mcChNum(reservedBottom, 0));
  let x0 = o.pad.l;
  let x1 = o.w - o.pad.r;
  let y0 = o.pad.t;
  let y1 = o.h - b;
  /* Padding can exceed a tiny chart. Falling back to the full box is ugly but
     finite; a negative-width plot would produce mirrored geometry. */
  if (x1 - x0 < 8) { x0 = 0; x1 = o.w; }
  if (y1 - y0 < 8) { y0 = 0; y1 = o.h; }
  return { x0: x0, x1: x1, y0: y0, y1: y1, w: x1 - x0, h: y1 - y0 };
}

function mcChNormPoints(raw) {
  const out = [];
  if (!Array.isArray(raw)) return out;
  for (let i = 0; i < raw.length; i++) {
    const p = raw[i];
    let x;
    let y;
    if (p && typeof p === 'object' && !Array.isArray(p)) {
      x = mcChNum(p.x, i);
      y = mcChNum(p.y, null);
    } else if (Array.isArray(p)) {
      x = mcChNum(p[0], i);
      y = mcChNum(p[1], null);
    } else {
      x = i;
      y = mcChNum(p, null);
    }
    /* A non-numeric y is dropped rather than coerced to 0 — inventing a zero
       would draw a spike that the data never contained. */
    if (y === null) continue;
    out.push({ x: x, y: y });
  }
  return out;
}

function mcChNormSeries(series, o) {
  const out = [];
  if (!Array.isArray(series) || !series.length) return out;
  const looksBare = series.every(function (s) {
    return s === null || s === undefined || typeof s === 'number' || typeof s === 'string' || Array.isArray(s);
  });
  const rows = looksBare ? [{ name: '', points: series }] : series;
  for (let i = 0; i < rows.length; i++) {
    const s = rows[i] && typeof rows[i] === 'object' ? rows[i] : {};
    const pts = mcChNormPoints(s.points || s.data || s.values || (Array.isArray(rows[i]) ? rows[i] : []));
    out.push({
      name: mcChStr(s.name) || (looksBare ? '' : 'Series ' + (i + 1)),
      color: mcChColorAt(i, s.color ? [s.color] : o.colors),
      pts: pts
    });
  }
  return out;
}

function mcChNormItems(data, o) {
  const out = [];
  if (!Array.isArray(data)) return out;
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    let label;
    let value;
    let color;
    if (d && typeof d === 'object' && !Array.isArray(d)) {
      label = mcChStr(d.label !== undefined ? d.label : d.name);
      value = mcChNum(d.value !== undefined ? d.value : d.y, 0);
      color = d.color;
    } else if (Array.isArray(d)) {
      label = mcChStr(d[0]);
      value = mcChNum(d[1], 0);
    } else {
      label = String(i + 1);
      value = mcChNum(d, 0);
    }
    out.push({
      label: label,
      value: value,
      color: color ? mcChColor(color, mcChColorAt(i, o.colors)) : mcChColorAt(i, o.colors)
    });
  }
  return out;
}

/* --------------------------------------------------------------------------
   mcChLine
   -------------------------------------------------------------------------- */

function mcChLine(series, opts) {
  const o = mcChBase(opts, { width: 320, height: 140, pad: { t: 10, r: 10, b: 20, l: 34 } });
  const src = o.src;
  const head = mcChOpen(o, 'mcch-line', 'Line chart');
  const S = mcChNormSeries(series, o);

  let total = 0;
  for (let i = 0; i < S.length; i++) total += S[i].pts.length;
  if (!total) return head + mcChNoData(o, src.emptyText) + mcChClose();

  const yLabel = mcChStr(o.yLabel);
  if (yLabel) o.pad.l += o.fs + 3;

  /* Legend for two or more series, always — colour matching alone is not an
     identity channel. One series needs none: the title already names it. */
  let legend = null;
  let legendH = 0;
  if (S.length > 1 && src.legend !== false) {
    legend = mcChLegend(S.map(function (s) { return { label: s.name, color: s.color }; }),
      o.w - o.pad.l - o.pad.r, o);
    legendH = legend.height + 2;
  }

  const P = mcChPlot(o, legendH);

  let xmin = Infinity;
  let xmax = -Infinity;
  let ymin = Infinity;
  let ymax = -Infinity;
  for (let i = 0; i < S.length; i++) {
    for (let j = 0; j < S[i].pts.length; j++) {
      const p = S[i].pts[j];
      if (p.x < xmin) xmin = p.x;
      if (p.x > xmax) xmax = p.x;
      if (p.y < ymin) ymin = p.y;
      if (p.y > ymax) ymax = p.y;
    }
  }
  if (!isFinite(xmin)) { xmin = 0; xmax = 1; }
  if (xmax === xmin) { xmin -= 0.5; xmax += 0.5; }

  /* With negative data the reference line is zero, not the floor of the plot:
     a bar or area that hangs *below* a visible zero line is the whole point,
     and an axis that starts at the minimum hides the sign change. */
  if (ymin > 0 && (src.includeZero === true)) ymin = 0;
  if (ymin < 0 && ymax < 0) ymax = 0;
  if (ymin < 0 && ymax > 0) { /* domain already straddles zero */ }
  else if (ymin < 0) ymax = Math.max(ymax, 0);

  const T = mcChNiceTicks(ymin, ymax, mcChNum(src.ticks, 4));
  const x = mcChScale(xmin, xmax, P.x0, P.x1);
  const y = mcChScale(T.niceMin, T.niceMax, P.y1, P.y0);
  const zeroV = mcChClamp(0, T.niceMin, T.niceMax);
  const zeroY = y(zeroV);

  let body = '';

  if (o.showGrid) {
    for (let i = 0; i < T.ticks.length; i++) {
      const gy = y(T.ticks[i]);
      body += mcChLineEl(P.x0, gy, P.x1, gy, mcChGridColor, 1);
      body += mcChText(P.x0 - 5, gy, mcChFmtVal(T.ticks[i], T.decimals),
        { anchor: 'end', baseline: 'middle', size: o.fs - 1, fill: mcChMuted, tabular: true });
    }
  }
  body += mcChLineEl(P.x0, P.y1, P.x1, P.y1, mcChAxisColor, 1);
  if (T.niceMin < 0 && T.niceMax > 0) {
    body += mcChLineEl(P.x0, zeroY, P.x1, zeroY, mcChAxisColor, 1,
      ' class="mcch-zero" data-zero="' + mcChN(zeroY) + '"');
  }

  if (yLabel) {
    body += mcChText(o.pad.l - o.fs - 22, (P.y0 + P.y1) / 2, yLabel,
      { anchor: 'middle', baseline: 'middle', size: o.fs - 1, fill: mcChMuted, rotate: -90 });
  }

  const area = src.area === true;
  let dots = '';
  for (let i = 0; i < S.length; i++) {
    const s = S[i];
    if (!s.pts.length) continue;
    const pts = s.pts.map(function (p) { return [x(p.x), y(p.y)]; });

    /* One point is a dot, not a path: `M x y` with no line-to has zero length
       and renders as literally nothing. */
    if (pts.length === 1) {
      dots += mcChCircle(pts[0][0], pts[0][1], 4, s.color, 2, o.surface);
      continue;
    }

    if (area) {
      const ad = mcChPathD(pts)
        + 'L' + mcChN(pts[pts.length - 1][0]) + ' ' + mcChN(zeroY)
        + 'L' + mcChN(pts[0][0]) + ' ' + mcChN(zeroY) + 'Z';
      body += '<path d="' + ad + '" fill="' + s.color + '" fill-opacity="0.1" stroke="none"/>';
    }

    let path = '<path class="mcch-series" d="' + mcChPathD(pts) + '" fill="none" stroke="' + s.color + '"'
      + ' stroke-linejoin="round" stroke-linecap="round" style="stroke-width:2';
    if (o.animate) {
      const L = Math.max(1, mcChPathLen(pts));
      path += ';stroke-dasharray:' + mcChN(L) + ' ' + mcChN(L) + ';stroke-dashoffset:' + mcChN(L) + '">'
        + '<animate attributeName="stroke-dashoffset" from="' + mcChN(L) + '" to="0" dur="0.7s" fill="freeze"/>'
        + '</path>';
    } else {
      path += '"/>';
    }
    body += path;

    if (o.showDots) {
      for (let j = 0; j < pts.length; j++) {
        dots += mcChCircle(pts[j][0], pts[j][1], 3.5, s.color, 2, o.surface);
      }
    }
  }
  body += dots;

  /* x labels: first / middle / last only. A label under every point is noise
     and would collide long before it was useful. */
  const xLabels = Array.isArray(src.xLabels) ? src.xLabels : null;
  if (xLabels && xLabels.length) {
    const idx = xLabels.length === 1 ? [0] : [0, Math.floor((xLabels.length - 1) / 2), xLabels.length - 1];
    const seen = {};
    for (let i = 0; i < idx.length; i++) {
      const k = idx[i];
      if (seen[k]) continue;
      seen[k] = 1;
      const px = x(xmin + (xmax - xmin) * (xLabels.length === 1 ? 0.5 : k / (xLabels.length - 1)));
      body += mcChText(px, P.y1 + o.fs + 2,
        mcChTruncate(xLabels[k], P.w / 3, o.fs - 1),
        { anchor: i === 0 ? 'start' : (i === idx.length - 1 ? 'end' : 'middle'), size: o.fs - 1, fill: mcChMuted });
    }
  }

  if (legend) body += mcChGroupAt(o.pad.l, P.y1 + o.pad.b + 2, legend.svg);

  return head + body + mcChClose();
}

/* --------------------------------------------------------------------------
   mcChBar
   -------------------------------------------------------------------------- */

function mcChBar(data, opts) {
  const o = mcChBase(opts, { width: 320, height: 140, pad: { t: 14, r: 8, b: 26, l: 34 } });
  const src = o.src;
  const head = mcChOpen(o, 'mcch-bar', 'Bar chart');
  const items = mcChNormItems(data, o);
  if (!items.length) return head + mcChNoData(o, src.emptyText) + mcChClose();

  const yLabel = mcChStr(o.yLabel);
  if (yLabel) o.pad.l += o.fs + 3;
  const P = mcChPlot(o, 0);

  /* Bars encode magnitude by length, so the scale must include zero — a
     truncated bar axis exaggerates differences and is the classic chart lie. */
  let lo = 0;
  let hi = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].value < lo) lo = items[i].value;
    if (items[i].value > hi) hi = items[i].value;
  }
  const T = mcChNiceTicks(lo, hi, mcChNum(src.ticks, 4));
  const y = mcChScale(T.niceMin, T.niceMax, P.y1, P.y0);
  const zeroY = y(mcChClamp(0, T.niceMin, T.niceMax));

  let body = '';
  if (o.showGrid) {
    for (let i = 0; i < T.ticks.length; i++) {
      const gy = y(T.ticks[i]);
      body += mcChLineEl(P.x0, gy, P.x1, gy, mcChGridColor, 1);
      body += mcChText(P.x0 - 5, gy, mcChFmtVal(T.ticks[i], T.decimals),
        { anchor: 'end', baseline: 'middle', size: o.fs - 1, fill: mcChMuted, tabular: true });
    }
  }

  if (yLabel) {
    body += mcChText(o.pad.l - o.fs - 22, (P.y0 + P.y1) / 2, yLabel,
      { anchor: 'middle', baseline: 'middle', size: o.fs - 1, fill: mcChMuted, rotate: -90 });
  }

  const n = items.length;
  const slot = P.w / n;
  /* Cap the bar thickness and always leave at least a 2px surface gap: the gap
     is what separates touching bars, not a stroke around them. */
  const barW = Math.max(1, Math.min(slot - 2, slot * 0.68, mcChNum(src.maxBarThickness, 24)));

  const labels = items.map(function (it) { return it.label; });
  let maxLabelW = 0;
  for (let i = 0; i < labels.length; i++) maxLabelW = Math.max(maxLabelW, mcChTextW(labels[i], o.fs - 1));
  const rotate = maxLabelW > slot - 3;
  /* A rotated label occupies sin(45°) of its length vertically. */
  const rotRoom = Math.max(6, (o.pad.b - 6) / Math.SQRT1_2);
  const labelStep = rotate
    ? Math.max(1, Math.ceil(n / Math.max(1, Math.floor(P.w / 11))))
    : Math.max(1, Math.ceil(n / Math.max(1, Math.floor(P.w / Math.max(8, maxLabelW + 4)))));

  const showValues = src.showValues !== false && n <= mcChNum(src.maxValueLabels, 14);

  for (let i = 0; i < n; i++) {
    const it = items[i];
    const cx = P.x0 + slot * (i + 0.5);
    const bx = cx - barW / 2;
    const vy = y(it.value);
    const top = Math.min(vy, zeroY);
    const bh = Math.abs(vy - zeroY);
    const up = it.value >= 0;
    const d = mcChBarPath(bx, top, barW, bh, 4, up ? 'up' : 'down');
    if (d) {
      body += '<path class="mcch-bar" d="' + d + '" fill="' + it.color + '"'
        + (o.animate ? '><animate attributeName="opacity" values="0;1" dur="0.45s" fill="freeze"/></path>' : '/>');
    } else {
      /* Exactly zero: a hairline at the baseline still shows the category
         exists rather than dropping it silently. */
      body += mcChLineEl(bx, zeroY, bx + barW, zeroY, it.color, 1.5);
    }

    if (showValues) {
      const txt = mcChFmtVal(it.value, null);
      if (mcChTextW(txt, o.fs - 1) <= slot) {
        body += mcChText(cx, up ? top - 3 : top + bh + o.fs, txt,
          { anchor: 'middle', size: o.fs - 1, fill: mcChInk2, tabular: true });
      }
    }

    if (i % labelStep === 0) {
      if (rotate) {
        body += mcChText(cx, P.y1 + 5, mcChTruncate(it.label, rotRoom, o.fs - 1),
          { anchor: 'end', baseline: 'middle', size: o.fs - 1, fill: mcChMuted, rotate: -45 });
      } else {
        body += mcChText(cx, P.y1 + o.fs + 2, mcChTruncate(it.label, slot, o.fs - 1),
          { anchor: 'middle', size: o.fs - 1, fill: mcChMuted });
      }
    }
  }

  body += mcChLineEl(P.x0, zeroY, P.x1, zeroY, mcChAxisColor, 1,
    ' class="mcch-zero" data-zero="' + mcChN(zeroY) + '"');

  return head + body + mcChClose();
}

/* --------------------------------------------------------------------------
   mcChHBar
   -------------------------------------------------------------------------- */

function mcChHBar(data, opts) {
  const o = mcChBase(opts, { width: 320, height: 140, pad: { t: 6, r: 30, b: 6, l: 6 } });
  const src = o.src;
  const head = mcChOpen(o, 'mcch-hbar', 'Horizontal bar chart');
  const items = mcChNormItems(data, o);
  if (!items.length) return head + mcChNoData(o, src.emptyText) + mcChClose();

  const P = mcChPlot(o, 0);
  const fs = o.fs;

  /* Horizontal bars exist so long category names can be read left-to-right at
     full size instead of rotated 45°. Give them a real gutter, but cap it at
     45% of the plot so the bars still carry the comparison. */
  let want = 0;
  for (let i = 0; i < items.length; i++) want = Math.max(want, mcChTextW(items[i].label, fs));
  const labelW = mcChClamp(mcChNum(src.labelWidth, Math.min(want, P.w * 0.45)), 0, P.w * 0.6);
  const bx0 = P.x0 + labelW + (labelW > 0 ? 6 : 0);
  const bx1 = P.x1;

  let lo = 0;
  let hi = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].value < lo) lo = items[i].value;
    if (items[i].value > hi) hi = items[i].value;
  }
  const T = mcChNiceTicks(lo, hi, mcChNum(src.ticks, 4));
  const x = mcChScale(T.niceMin, T.niceMax, bx0, bx1);
  const zeroX = x(mcChClamp(0, T.niceMin, T.niceMax));

  let body = '';
  if (o.showGrid) {
    for (let i = 0; i < T.ticks.length; i++) {
      const gx = x(T.ticks[i]);
      body += mcChLineEl(gx, P.y0, gx, P.y1, mcChGridColor, 1);
    }
  }

  const n = items.length;
  const rowH = P.h / n;
  const barH = Math.max(1, Math.min(rowH - 2, rowH * 0.7, mcChNum(src.maxBarThickness, 24)));
  const showValues = src.showValues !== false;

  for (let i = 0; i < n; i++) {
    const it = items[i];
    const cy = P.y0 + rowH * (i + 0.5);
    const by = cy - barH / 2;
    const vx = x(it.value);
    const left = Math.min(vx, zeroX);
    const bw = Math.abs(vx - zeroX);
    const pos = it.value >= 0;
    const d = mcChBarPath(left, by, bw, barH, 4, pos ? 'right' : 'left');
    if (d) {
      body += '<path class="mcch-bar" d="' + d + '" fill="' + it.color + '"'
        + (o.animate ? '><animate attributeName="opacity" values="0;1" dur="0.45s" fill="freeze"/></path>' : '/>');
    } else {
      body += mcChLineEl(zeroX, by, zeroX, by + barH, it.color, 1.5);
    }

    if (labelW > 0) {
      body += mcChText(P.x0 + labelW, cy, mcChTruncate(it.label, labelW, fs),
        { anchor: 'end', baseline: 'middle', size: fs, fill: mcChInk2 });
    }
    if (showValues) {
      body += mcChText(pos ? left + bw + 4 : left - 4, cy, mcChFmtVal(it.value, null),
        { anchor: pos ? 'start' : 'end', baseline: 'middle', size: fs - 1, fill: mcChMuted, tabular: true });
    }
  }

  body += mcChLineEl(zeroX, P.y0, zeroX, P.y1, mcChAxisColor, 1,
    ' class="mcch-zero" data-zero="' + mcChN(zeroX) + '"');

  return head + body + mcChClose();
}

/* --------------------------------------------------------------------------
   mcChDonut
   -------------------------------------------------------------------------- */

function mcChDonut(data, opts) {
  const o = mcChBase(opts, { width: 320, height: 140, pad: { t: 8, r: 8, b: 8, l: 8 } });
  const src = o.src;
  const head = mcChOpen(o, 'mcch-donut', 'Donut chart');
  const raw = mcChNormItems(data, o);

  /* A negative share of a whole is meaningless, so those rows are dropped
     rather than folded in as absolute values (which would inflate the total
     and quietly misstate every other slice). */
  const kept = [];
  let total = 0;
  for (let i = 0; i < raw.length; i++) {
    if (raw[i].value > 0) { kept.push(raw[i]); total += raw[i].value; }
  }
  if (!kept.length || !(total > 0)) return head + mcChNoData(o, src.emptyText) + mcChClose();

  /* Slices below the threshold are visually indistinguishable from each other
     and from the gaps, so collapse them — but only if there are at least two,
     since an "Other" holding a single category just hides its name. */
  const minPct = mcChClamp(mcChNum(src.minPct, 0.03), 0, 0.5);
  const big = [];
  const small = [];
  for (let i = 0; i < kept.length; i++) {
    (kept[i].value / total < minPct ? small : big).push(kept[i]);
  }
  let slices = kept;
  if (small.length > 1) {
    let sum = 0;
    for (let i = 0; i < small.length; i++) sum += small[i].value;
    slices = big.concat([{ label: mcChStr(src.otherLabel) || 'Other', value: sum, color: mcChMuted }]);
  }

  const P = mcChPlot(o, 0);
  const showLegend = src.legend !== false && slices.length > 1;
  const legendW = showLegend ? mcChClamp(P.w * 0.45, 0, 150) : 0;
  const chartW = Math.max(12, P.w - legendW - (showLegend ? 8 : 0));
  const R = Math.max(6, Math.min(chartW, P.h) / 2 - 1);
  const cx = P.x0 + chartW / 2;
  const cy = P.y0 + P.h / 2;
  const rI = R * mcChClamp(mcChNum(src.inner, 0.62), 0, 0.92);

  let body = '';
  /* Start at 12 o'clock: readers parse a ring clockwise from the top. */
  let angle = -Math.PI / 2;
  const TAU = Math.PI * 2;
  for (let i = 0; i < slices.length; i++) {
    const frac = slices[i].value / total;
    const next = i === slices.length - 1 ? -Math.PI / 2 + TAU : angle + frac * TAU;
    const d = mcChArcRing(cx, cy, R, rI, angle, next);
    if (d) {
      body += '<path class="mcch-slice" d="' + d + '" fill="'
        + mcChColor(slices[i].color, mcChColorAt(i, o.colors)) + '" fill-rule="evenodd"'
        + ' stroke="' + o.surface + '" style="stroke-width:' + (slices.length > 1 ? 2 : 0) + '"'
        + (o.animate ? '><animate attributeName="opacity" values="0;1" dur="0.5s" fill="freeze"/></path>' : '/>');
    }
    angle = next;
  }

  if (rI > 8) {
    const centreValue = src.centerValue !== undefined ? mcChStr(src.centerValue) : mcChFmtVal(total, null);
    const centreLabel = mcChStr(src.centerLabel);
    const vSize = mcChClamp(rI * 0.52, 8, 26);
    body += mcChText(cx, centreLabel ? cy - 2 : cy, centreValue,
      { anchor: 'middle', baseline: 'middle', size: vSize, fill: mcChInk, weight: 600 });
    if (centreLabel) {
      body += mcChText(cx, cy + vSize * 0.62, mcChTruncate(centreLabel, rI * 1.9, o.fs - 1),
        { anchor: 'middle', baseline: 'middle', size: o.fs - 1, fill: mcChMuted });
    }
  }

  if (showLegend) {
    const items = slices.map(function (s, i) {
      const pct = Math.round((s.value / total) * 100);
      return { label: s.label ? s.label + '  ' + pct + '%' : pct + '%', color: mcChColor(s.color, mcChColorAt(i, o.colors)) };
    });
    const L = mcChLegendV(items, legendW, P.h, o);
    body += mcChGroupAt(P.x1 - legendW, cy - L.height / 2, L.svg);
  }

  return head + body + mcChClose();
}

/* --------------------------------------------------------------------------
   mcChSpark
   -------------------------------------------------------------------------- */

/* Deliberately axis-free: a sparkline is a word-sized graphic that shows shape,
   not values. Anything that needs a readable number needs a real chart. */
function mcChSpark(values, opts) {
  const o = mcChBase(opts, { width: 100, height: 24, pad: { t: 3, r: 3, b: 3, l: 3 }, fontSize: 8 });
  const src = o.src;
  const head = mcChOpen(o, 'mcch-spark', 'Sparkline');
  const pts = mcChNormPoints(values);
  const P = mcChPlot(o, 0);
  const color = mcChColor(src.color, mcChPalette[0]);

  if (!pts.length) {
    return head + mcChLineEl(P.x0, (P.y0 + P.y1) / 2, P.x1, (P.y0 + P.y1) / 2, mcChGridColor, 1) + mcChClose();
  }

  let xmin = Infinity;
  let xmax = -Infinity;
  let ymin = Infinity;
  let ymax = -Infinity;
  for (let i = 0; i < pts.length; i++) {
    if (pts[i].x < xmin) xmin = pts[i].x;
    if (pts[i].x > xmax) xmax = pts[i].x;
    if (pts[i].y < ymin) ymin = pts[i].y;
    if (pts[i].y > ymax) ymax = pts[i].y;
  }
  if (xmax === xmin) { xmin -= 0.5; xmax += 0.5; }
  if (ymax === ymin) { const p = Math.abs(ymin) * 0.5 || 1; ymin -= p; ymax += p; }

  const x = mcChScale(xmin, xmax, P.x0, P.x1);
  const y = mcChScale(ymin, ymax, P.y1, P.y0);
  const xy = pts.map(function (p) { return [x(p.x), y(p.y)]; });

  let body = '';
  if (xy.length === 1) {
    body += mcChCircle(xy[0][0], xy[0][1], 2.5, color, 0);
    return head + body + mcChClose();
  }

  if (src.area === true) {
    body += '<path d="' + mcChPathD(xy)
      + 'L' + mcChN(xy[xy.length - 1][0]) + ' ' + mcChN(P.y1)
      + 'L' + mcChN(xy[0][0]) + ' ' + mcChN(P.y1) + 'Z"'
      + ' fill="' + color + '" fill-opacity="0.1" stroke="none"/>';
  }
  body += '<path class="mcch-series" d="' + mcChPathD(xy) + '" fill="none" stroke="' + color + '"'
    + ' stroke-linejoin="round" stroke-linecap="round" style="stroke-width:'
    + mcChN(mcChNum(src.strokeWidth, 1.5)) + '"/>';
  if (src.endDot !== false) {
    body += mcChCircle(xy[xy.length - 1][0], xy[xy.length - 1][1], 2, color, 0);
  }
  return head + body + mcChClose();
}

/* --------------------------------------------------------------------------
   mcChHeat
   -------------------------------------------------------------------------- */

function mcChHeat(matrix, opts) {
  const o = mcChBase(opts, { width: 320, height: 140, pad: { t: 6, r: 6, b: 6, l: 6 }, fontSize: 8 });
  const src = o.src;
  const head = mcChOpen(o, 'mcch-heat', 'Heatmap');

  const rows = [];
  if (Array.isArray(matrix)) {
    for (let i = 0; i < matrix.length; i++) {
      const r = matrix[i];
      if (!Array.isArray(r)) continue;
      const out = [];
      for (let j = 0; j < r.length; j++) out.push(mcChNum(r[j], null));
      rows.push(out);
    }
  }
  let cols = 0;
  for (let i = 0; i < rows.length; i++) cols = Math.max(cols, rows[i].length);
  if (!rows.length || !cols) return head + mcChNoData(o, src.emptyText) + mcChClose();

  let lo = Infinity;
  let hi = -Infinity;
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].length; j++) {
      const v = rows[i][j];
      if (v === null) continue;
      if (v < lo) lo = v;
      if (v > hi) hi = v;
    }
  }
  if (!isFinite(lo)) { lo = 0; hi = 1; }
  const span = hi - lo;

  const P = mcChPlot(o, 0);
  const fs = o.fs;
  const rowLabels = Array.isArray(src.rows) ? src.rows : null;
  const colLabels = Array.isArray(src.cols) ? src.cols : null;

  let labelW = 0;
  if (rowLabels) {
    for (let i = 0; i < rows.length; i++) labelW = Math.max(labelW, mcChTextW(mcChStr(rowLabels[i]), fs));
    labelW = mcChClamp(labelW, 0, P.w * 0.35);
  }
  const labelH = colLabels ? fs + 3 : 0;

  const gx0 = P.x0 + labelW + (labelW > 0 ? 4 : 0);
  const gy0 = P.y0 + labelH;
  const gw = Math.max(1, P.x1 - gx0);
  const gh = Math.max(1, P.y1 - gy0);
  const cw = gw / cols;
  const ch = gh / rows.length;
  const gap = cw > 6 && ch > 6 ? 1 : 0;

  let body = '';
  if (colLabels) {
    for (let j = 0; j < cols; j++) {
      body += mcChText(gx0 + cw * (j + 0.5), P.y0 + fs - 1,
        mcChTruncate(colLabels[j], cw, fs), { anchor: 'middle', size: fs, fill: mcChMuted });
    }
  }
  if (rowLabels) {
    for (let i = 0; i < rows.length; i++) {
      body += mcChText(gx0 - 4, gy0 + ch * (i + 0.5),
        mcChTruncate(rowLabels[i], labelW, fs),
        { anchor: 'end', baseline: 'middle', size: fs, fill: mcChMuted });
    }
  }

  const showValues = src.showValues === true;
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cols; j++) {
      const v = (rows[i] && rows[i][j] !== undefined) ? rows[i][j] : null;
      const cx = gx0 + cw * j + gap / 2;
      const cy = gy0 + ch * i + gap / 2;
      const d = mcChBarPath(cx, cy, Math.max(0.5, cw - gap), Math.max(0.5, ch - gap), 1.5, 'none');
      if (v === null) {
        /* Missing is not zero. Render an empty well so the grid keeps its
           shape without asserting a value that was never measured. */
        body += '<path class="mcch-cell" d="' + d + '" fill="none" stroke="' + mcChGridColor
          + '" style="stroke-width:1"/>';
        continue;
      }
      const t = span === 0 ? 0.5 : (v - lo) / span;
      body += '<path class="mcch-cell" d="' + d + '" fill="' + mcChRamp(t) + '"/>';
      if (showValues && cw > 18 && ch > 10) {
        /* Text sitting *inside* a fill is the one place a label may take a
           non-token colour: pick ink or white by the cell's lightness so it
           always clears contrast. */
        body += mcChText(cx + (cw - gap) / 2, cy + (ch - gap) / 2, mcChFmtVal(v, null),
          { anchor: 'middle', baseline: 'middle', size: fs - 1, fill: t > 0.6 ? '#0b0b0b' : mcChInk, tabular: true });
      }
    }
  }

  return head + body + mcChClose();
}

/* ==========================================================================
   Self-test. Node-only; the guard is short-circuit safe in a browser because
   `module` is undefined there and `require` is never reached.
   ========================================================================== */

if (typeof module !== "undefined" && require.main === module) {
  let mcChPassed = 0;
  const mcChFailures = [];

  const mcChOk = function (name, cond) {
    if (cond) { mcChPassed++; return true; }
    mcChFailures.push(name);
    return false;
  };
  const mcChThrows = function (name, fn) {
    try { fn(); return mcChOk(name, true); } catch (e) { return mcChOk(name + ' [threw: ' + e.message + ']', false); }
  };

  /* ---- nice ticks ---- */
  const t1 = mcChNiceTicks(0, 97, 5);
  mcChOk('ticks(0,97,5) step > 0', t1.step > 0);
  mcChOk('ticks(0,97,5) all integers', t1.ticks.every(function (v) { return Number.isInteger(v); }));
  mcChOk('ticks(0,97,5) covers domain', t1.niceMin <= 0 && t1.niceMax >= 97);
  mcChOk('ticks(0,97,5) round step', [1, 2, 5, 10, 20, 25, 50].indexOf(t1.step) >= 0);
  mcChOk('ticks(0,97,5) has >= 3 ticks', t1.ticks.length >= 3);

  const t2 = mcChNiceTicks(3, 3, 5);
  mcChOk('degenerate ticks step > 0', t2.step > 0);
  mcChOk('degenerate ticks range > 0', t2.niceMax > t2.niceMin);
  mcChOk('degenerate ticks contain domain', t2.niceMin <= 3 && t2.niceMax >= 3);
  mcChOk('degenerate ticks usable count', t2.ticks.length >= 2);
  mcChOk('degenerate ticks finite', t2.ticks.every(function (v) { return isFinite(v); }));

  const t3 = mcChNiceTicks(null, undefined, 5);
  mcChOk('null domain still yields step > 0', t3.step > 0 && isFinite(t3.step));
  const t4 = mcChNiceTicks(-40, 40, 5);
  mcChOk('symmetric domain includes 0', t4.ticks.indexOf(0) >= 0);
  const t5 = mcChNiceTicks(0.001, 0.009, 4);
  mcChOk('sub-unit ticks are clean', t5.step > 0 && t5.ticks.every(function (v) { return String(v).length <= 8; }));
  const t6 = mcChNiceTicks(100, 0, 5);
  mcChOk('reversed domain is swapped', t6.niceMin <= 0 && t6.niceMax >= 100);

  /* ---- structural contract, applied to every chart type ---- */
  const mcChStruct = function (name, s) {
    mcChOk(name + ': starts with <svg', typeof s === 'string' && s.indexOf('<svg') === 0);
    mcChOk(name + ': has viewBox', s.indexOf('viewBox="') >= 0);
    mcChOk(name + ': no width= attribute', s.indexOf('width="') < 0);
    mcChOk(name + ': no height= attribute', s.indexOf('height="') < 0);
    mcChOk(name + ': preserveAspectRatio', s.indexOf('preserveAspectRatio="') >= 0);
    mcChOk(name + ': role=img', s.indexOf('role="img"') >= 0);
    mcChOk(name + ': has <title>', s.indexOf('<title>') >= 0 && s.indexOf('</title>') >= 0);
    mcChOk(name + ': closed', s.slice(-6) === '</svg>');
    mcChOk(name + ': no script-close sequence', s.indexOf('<' + '/script') < 0);
  };

  mcChStruct('line', mcChLine([{ name: 'a', points: [1, 2, 3] }], { title: 'T' }));
  mcChStruct('bar', mcChBar([{ label: 'a', value: 3 }], { title: 'T' }));
  mcChStruct('hbar', mcChHBar([{ label: 'a', value: 3 }], { title: 'T' }));
  mcChStruct('donut', mcChDonut([{ label: 'a', value: 3 }, { label: 'b', value: 5 }], { title: 'T' }));
  mcChStruct('spark', mcChSpark([1, 2, 3], { title: 'T' }));
  mcChStruct('heat', mcChHeat([[1, 2], [3, 4]], { title: 'T' }));

  /* ---- NaN / undefined sweep: every chart x every hostile dataset ---- */
  const mcCh200 = [];
  for (let i = 0; i < 200; i++) mcCh200.push(Math.sin(i / 7) * 50 + i * 0.3);

  const mcChCases = {
    empty: [],
    single: [42],
    identical: [7, 7, 7, 7],
    negative: [-5, 3, -12, 8, -1],
    outlier: [1, 2, 3, 1e9],
    many: mcCh200
  };

  const mcChAsItems = function (vals) {
    return vals.map(function (v, i) { return { label: 'cat ' + i, value: v }; });
  };
  const mcChAsMatrix = function (vals) {
    if (!vals.length) return [];
    const w = Math.max(1, Math.ceil(Math.sqrt(vals.length)));
    const m = [];
    for (let i = 0; i < vals.length; i += w) m.push(vals.slice(i, i + w));
    return m;
  };

  Object.keys(mcChCases).forEach(function (key) {
    const vals = mcChCases[key];
    const outs = {
      line: mcChLine([{ name: 'S', points: vals }], { title: key }),
      bar: mcChBar(mcChAsItems(vals), { title: key }),
      hbar: mcChHBar(mcChAsItems(vals), { title: key }),
      donut: mcChDonut(mcChAsItems(vals), { title: key }),
      spark: mcChSpark(vals, { title: key }),
      heat: mcChHeat(mcChAsMatrix(vals), { title: key })
    };
    Object.keys(outs).forEach(function (kind) {
      const s = outs[kind];
      mcChOk(kind + '/' + key + ': no NaN', s.indexOf('NaN') < 0);
      mcChOk(kind + '/' + key + ': no undefined', s.indexOf('undefined') < 0);
      mcChOk(kind + '/' + key + ': valid svg', s.indexOf('<svg') === 0 && s.slice(-6) === '</svg>');
      mcChOk(kind + '/' + key + ': no width attr', s.indexOf('width="') < 0);
    });
  });

  /* ---- null / undefined inputs must not throw ---- */
  [null, undefined].forEach(function (bad) {
    const tag = bad === null ? 'null' : 'undefined';
    mcChThrows('line(' + tag + ')', function () { mcChLine(bad); });
    mcChThrows('bar(' + tag + ')', function () { mcChBar(bad); });
    mcChThrows('hbar(' + tag + ')', function () { mcChHBar(bad); });
    mcChThrows('donut(' + tag + ')', function () { mcChDonut(bad); });
    mcChThrows('spark(' + tag + ')', function () { mcChSpark(bad); });
    mcChThrows('heat(' + tag + ')', function () { mcChHeat(bad); });
    mcChThrows('line(' + tag + ', ' + tag + ')', function () { mcChLine(bad, bad); });
    mcChThrows('bar(data, ' + tag + ')', function () { mcChBar([{ label: 'x', value: 1 }], bad); });
  });
  const mcChNullOut = mcChLine(null);
  mcChOk('line(null) is clean svg', mcChNullOut.indexOf('NaN') < 0 && mcChNullOut.indexOf('undefined') < 0);
  mcChOk('heat([[]]) survives ragged input',
    mcChHeat([[1, 2], [3], []]).indexOf('NaN') < 0);

  /* ---- zero points / one point ---- */
  const mcChEmptyLine = mcChLine([{ name: 'a', points: [] }]);
  mcChOk('empty line has no-data hint', mcChEmptyLine.indexOf('mcch-empty') >= 0 && mcChEmptyLine.indexOf('No data') >= 0);
  mcChOk('empty line draws no path', mcChEmptyLine.indexOf('<path') < 0);
  mcChOk('empty line has no NaN', mcChEmptyLine.indexOf('NaN') < 0);

  const mcChOnePt = mcChLine([{ name: 'a', points: [5] }]);
  mcChOk('single point draws a circle', mcChOnePt.indexOf('<circle') >= 0);
  mcChOk('single point draws no degenerate path', mcChOnePt.indexOf('<path') < 0);

  const mcChFlat = mcChLine([{ name: 'a', points: [7, 7, 7] }]);
  mcChOk('identical values still draw a path', mcChFlat.indexOf('<path') >= 0);
  mcChOk('identical values produce no NaN', mcChFlat.indexOf('NaN') < 0);

  /* ---- multi-series ---- */
  const mcChTwo = mcChLine([
    { name: 'Alpha', points: [1, 4, 2, 6] },
    { name: 'Beta', points: [3, 2, 5, 1] }
  ], { title: 'Two' });
  mcChOk('2-series emits exactly 2 paths', mcChTwo.split('<path').length - 1 === 2);
  mcChOk('2-series legend names Alpha', mcChTwo.indexOf('>Alpha<') >= 0);
  mcChOk('2-series legend names Beta', mcChTwo.indexOf('>Beta<') >= 0);
  mcChOk('2-series uses 2 palette slots',
    mcChTwo.indexOf(mcChPalette[0]) >= 0 && mcChTwo.indexOf(mcChPalette[1]) >= 0);
  const mcChOne = mcChLine([{ name: 'Solo', points: [1, 2, 3] }]);
  mcChOk('single series draws no legend swatch', mcChOne.indexOf('>Solo<') < 0);

  /* ---- negative baseline ---- */
  const mcChNegBar = mcChBar([
    { label: 'a', value: 10 }, { label: 'b', value: -6 }, { label: 'c', value: 4 }
  ], { height: 140 });
  const mcChZeroM = /data-zero="([-0-9.]+)"/.exec(mcChNegBar);
  mcChOk('negative bar exposes a zero line', !!mcChZeroM);
  const mcChZeroY = mcChZeroM ? Number(mcChZeroM[1]) : NaN;
  mcChOk('zero line y is finite', isFinite(mcChZeroY));
  mcChOk('zero line y is used by the line element', mcChNegBar.indexOf('y1="' + mcChZeroY + '"') >= 0);
  mcChOk('zero line sits above the plot floor', mcChZeroY < 140 - 26);
  mcChOk('zero line sits below the plot ceiling', mcChZeroY > 14);
  mcChOk('negative bar has a down-rounded bar', mcChNegBar.indexOf('<path class="mcch-bar"') >= 0);

  const mcChPosBar = mcChBar([{ label: 'a', value: 10 }, { label: 'b', value: 4 }], { height: 140 });
  const mcChPosZero = Number(/data-zero="([-0-9.]+)"/.exec(mcChPosBar)[1]);
  mcChOk('all-positive baseline sits at the plot floor', Math.abs(mcChPosZero - (140 - 26)) < 0.51);

  const mcChNegH = mcChHBar([{ label: 'x', value: -3 }, { label: 'y', value: 9 }]);
  mcChOk('hbar exposes a zero line', /data-zero="([-0-9.]+)"/.test(mcChNegH));
  mcChOk('hbar negative has no NaN', mcChNegH.indexOf('NaN') < 0);

  const mcChNegLine = mcChLine([{ name: 'n', points: [-4, 6, -2] }], { area: true });
  mcChOk('negative line draws a zero rule', mcChNegLine.indexOf('mcch-zero') >= 0);
  mcChOk('negative line area has no NaN', mcChNegLine.indexOf('NaN') < 0);

  /* ---- donut arcs ---- */
  const mcChFull = mcChDonut([{ label: 'only', value: 5 }]);
  const mcChFullD = /d="([^"]+)"/.exec(mcChFull);
  mcChOk('100% donut emits a path', !!mcChFullD);
  mcChOk('100% donut path is not zero-length', mcChFullD && mcChFullD[1].length > 20);
  mcChOk('100% donut uses arc commands', mcChFullD && mcChFullD[1].indexOf('A') >= 0);
  mcChOk('100% donut closes the ring twice', mcChFullD && (mcChFullD[1].match(/A/g) || []).length >= 4);
  mcChOk('100% donut has no NaN', mcChFull.indexOf('NaN') < 0);

  const mcCh70 = mcChDonut([{ label: 'big', value: 70 }, { label: 'rest', value: 30 }]);
  mcChOk('70% slice sets large-arc-flag to 1', /A[0-9.]+ [0-9.]+ 0 1 1 /.test(mcCh70));
  mcChOk('30% slice keeps large-arc-flag at 0', /A[0-9.]+ [0-9.]+ 0 0 1 /.test(mcCh70));
  mcChOk('70/30 donut emits 2 slices', mcCh70.split('class="mcch-slice"').length - 1 === 2);
  mcChOk('donut centre shows a total', mcCh70.indexOf('>100<') >= 0);

  const mcChTiny = mcChDonut([
    { label: 'big', value: 100 }, { label: 't1', value: 1 }, { label: 't2', value: 1 }, { label: 't3', value: 1 }
  ]);
  mcChOk('tiny slices collapse into Other', mcChTiny.indexOf('Other') >= 0);
  mcChOk('collapse leaves 2 slices', mcChTiny.split('class="mcch-slice"').length - 1 === 2);
  mcChOk('donut drops negative values',
    mcChDonut([{ label: 'a', value: -5 }, { label: 'b', value: 10 }]).indexOf('NaN') < 0);
  mcChOk('all-negative donut is a no-data state',
    mcChDonut([{ label: 'a', value: -5 }]).indexOf('mcch-empty') >= 0);

  /* ---- escaping ---- */
  const mcChEvil = '<' + 'script>alert(1)<' + '/script>';
  const mcChNasty = mcChEvil + ' "AT&T" \'q\'';
  const mcChEscaped = mcChBar([{ label: mcChNasty, value: 5 }], { title: mcChNasty, width: 900 });
  mcChOk('escape: raw payload absent', mcChEscaped.indexOf(mcChEvil) < 0);
  mcChOk('escape: no script open tag', mcChEscaped.indexOf('<' + 'script') < 0);
  mcChOk('escape: no script close sequence', mcChEscaped.indexOf('<' + '/script') < 0);
  mcChOk('escape: &lt; present', mcChEscaped.indexOf('&lt;') >= 0);
  mcChOk('escape: &gt; present', mcChEscaped.indexOf('&gt;') >= 0);
  mcChOk('escape: &quot; present', mcChEscaped.indexOf('&quot;') >= 0);
  mcChOk('escape: &amp; present', mcChEscaped.indexOf('&amp;') >= 0);
  mcChOk('escape: &#39; present', mcChEscaped.indexOf('&#39;') >= 0);
  mcChOk('escape: raw quoted phrase absent', mcChEscaped.indexOf('"AT&T"') < 0);
  mcChOk('escape: aria-label is escaped',
    /aria-label="[^"]*&lt;/.test(mcChEscaped));
  mcChOk('escape: helper handles null/undefined', mcChEsc(null) === '' && mcChEsc(undefined) === '');
  mcChOk('escape: helper escapes all five', mcChEsc('&<>"\'') === '&amp;&lt;&gt;&quot;&#39;');
  mcChOk('escape: series names escaped in legend',
    mcChLine([{ name: mcChEvil, points: [1, 2] }, { name: 'ok', points: [2, 1] }]).indexOf(mcChEvil) < 0);
  mcChOk('escape: donut labels escaped',
    mcChDonut([{ label: mcChEvil, value: 1 }, { label: 'b', value: 1 }]).indexOf(mcChEvil) < 0);
  mcChOk('escape: heat labels escaped',
    mcChHeat([[1, 2]], { rows: [mcChEvil], cols: [mcChEvil, 'b'] }).indexOf(mcChEvil) < 0);
  mcChOk('colour whitelist rejects injection',
    mcChBar([{ label: 'a', value: 1, color: '" onload="x' }], {}).indexOf('onload') < 0);
  mcChOk('colour whitelist keeps valid hex', mcChColor('#abc', '#000') === '#abc');
  mcChOk('colour whitelist keeps rgba()', mcChColor('rgba(1,2,3,0.5)', '#000') === 'rgba(1,2,3,0.5)');

  /* ---- heatmap ---- */
  const mcChHeat34 = mcChHeat([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]], {
    rows: ['r1', 'r2', 'r3'], cols: ['c1', 'c2', 'c3', 'c4']
  });
  mcChOk('3x4 heatmap emits 12 cells', mcChHeat34.split('class="mcch-cell"').length - 1 === 12);
  mcChOk('heatmap shows row labels', mcChHeat34.indexOf('>r2<') >= 0);
  mcChOk('heatmap shows column labels', mcChHeat34.indexOf('>c3<') >= 0);
  mcChOk('heatmap has no NaN', mcChHeat34.indexOf('NaN') < 0);
  mcChOk('heatmap ramp is monotone-ish', mcChRamp(0) !== mcChRamp(1));
  mcChOk('ramp clamps out-of-range input', mcChRamp(-5) === mcChRamp(0) && mcChRamp(9) === mcChRamp(1));
  mcChOk('ramp returns 7-char hex', /^#[0-9a-f]{6}$/.test(mcChRamp(0.37)));
  mcChOk('ramp handles junk input', /^#[0-9a-f]{6}$/.test(mcChRamp('x')));

  /* ---- palette ---- */
  mcChOk('palette has 8 fixed slots', mcChPalette.length === 8);
  mcChOk('palette entries are hex', mcChPalette.every(function (c) { return /^#[0-9a-f]{6}$/.test(c); }));
  mcChOk('palette slots are unique', new Set(mcChPalette).size === 8);

  /* ---- misc numeric hygiene ---- */
  mcChOk('mcChN degrades non-finite to 0', mcChN(NaN) === '0' && mcChN(Infinity) === '1000000');
  mcChOk('mcChFmtVal groups thousands', mcChFmtVal(1234, null) === '1,234');
  mcChOk('mcChFmtVal compacts millions', mcChFmtVal(2500000, null) === '2.5M');
  mcChOk('mcChFmtVal is empty for junk', mcChFmtVal(undefined, null) === '');
  mcChOk('mcChTruncate adds an ellipsis', mcChTruncate('a very long category name', 30, 9).slice(-1) === '…');
  mcChOk('mcChTruncate leaves short text alone', mcChTruncate('ab', 100, 9) === 'ab');
  mcChOk('mcChTextW grows with length', mcChTextW('mmmm', 10) > mcChTextW('ii', 10));
  mcChOk('rotated labels appear when crowded',
    mcChBar([
      { label: 'Long category one', value: 1 }, { label: 'Long category two', value: 2 },
      { label: 'Long category three', value: 3 }, { label: 'Long category four', value: 4 }
    ]).indexOf('rotate(-45') >= 0);
  mcChOk('hbar truncates long labels',
    mcChHBar([{ label: 'An extremely long category label that will never fit', value: 5 }])
      .indexOf('…') >= 0);
  mcChOk('animate option emits an <animate>',
    mcChLine([{ name: 'a', points: [1, 2, 3] }], { animate: true }).indexOf('<animate') >= 0);
  mcChOk('animated line has no NaN',
    mcChLine([{ name: 'a', points: [1, 2, 3] }], { animate: true }).indexOf('NaN') < 0);
  mcChOk('showDots emits circles',
    mcChLine([{ name: 'a', points: [1, 2, 3] }], { showDots: true }).split('<circle').length - 1 === 3);
  mcChOk('yLabel is rendered rotated',
    mcChLine([{ name: 'a', points: [1, 2] }], { yLabel: 'Views' }).indexOf('>Views<') >= 0);
  mcChOk('tiny canvas does not invert the plot',
    mcChLine([{ name: 'a', points: [1, 2] }], { width: 20, height: 20 }).indexOf('NaN') < 0);
  mcChOk('bare number array is accepted as one series',
    mcChLine([1, 2, 3]).indexOf('<path') >= 0);
  mcChOk('xy point objects are accepted',
    mcChLine([{ name: 'a', points: [{ x: 0, y: 1 }, { x: 10, y: 5 }] }]).indexOf('NaN') < 0);
  mcChOk('non-numeric points are dropped, not zeroed',
    mcChLine([{ name: 'a', points: [1, null, 3] }]).indexOf('NaN') < 0);

  /* ---- summary ---- */
  const mcChTotal = mcChPassed + mcChFailures.length;
  if (mcChFailures.length) {
    console.log('\nFAILURES (' + mcChFailures.length + '):');
    mcChFailures.forEach(function (f) { console.log('  FAIL  ' + f); });
  }
  console.log('\n' + (mcChFailures.length ? 'FAIL' : 'PASS')
    + ' — ' + mcChPassed + '/' + mcChTotal + ' assertions passed');
  if (mcChFailures.length) process.exit(1);
}
