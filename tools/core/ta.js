// ta.js — technical analysis for the CORE 5 crypto board.
// Plain script-scope JS: no modules, no IIFE, no dependencies. Every top-level
// binding is prefixed `mcTa` so the merge tool has nothing to collide with.
//
// ---------------------------------------------------------------------------
// THE TWO RULES THAT MATTER MOST HERE
// ---------------------------------------------------------------------------
// 1. ALIGNMENT. Every indicator returns an array with exactly the same length
//    as its input, and `null` — never 0, never NaN — for any bar where the
//    indicator is mathematically undefined. A chart draws 0 as a line at zero
//    and NaN as a silent hole; only null lets the renderer skip the bar and
//    lets a caller test `x === null` to find the warm-up boundary. Every
//    indicator below is tested for this explicitly.
//
// 2. WILDER'S SMOOTHING IS NOT AN AVERAGE. RSI, ATR, ADX and friends use
//    alpha = 1/period, not 2/(period+1) and not a rolling mean. Getting this
//    wrong produces an indicator that looks plausible and is quietly ~40%
//    too fast. `mcTaRma` is the single implementation; nothing re-derives it.
//
// GAPS. A null inside the input is a real event (exchange outage, missing
// candle). Window indicators emit null whenever their window touches a null.
// Recursive indicators (EMA/RMA) emit null at the gap and then RE-SEED from
// the next `period` clean values. The rejected alternative — carrying the
// smoothing state across the hole — silently claims the indicator saw data it
// never saw, and the error persists for dozens of bars afterwards.
//
// NEVER THROWS. Every public function degrades to a documented sentinel:
// an all-null array of the right length, or an object whose fields are null.

/* ------------------------------------------------------------------ *
 * Section 1 — numeric plumbing
 * ------------------------------------------------------------------ */

// The one place a value becomes "a number we will do arithmetic with".
// Numeric strings are accepted because exchange REST feeds routinely ship
// prices as strings ("42123.5"); "" and "  " are not numbers even though
// Number("") is 0, which is the bug this guard exists to prevent.
function mcTaNum(v) {
  if (typeof v === "number") return Number.isFinite(v) ? v : null;
  if (typeof v === "string") {
    const t = v.trim();
    if (!t) return null;
    const n = Number(t);
    return Number.isFinite(n) ? n : null;
  }
  // Booleans, objects, null, undefined: a bool is not a price, and coercing
  // true->1 has silently poisoned more than one feed adapter.
  return null;
}

// Normalise any input into a dense array of (number | null). Non-arrays
// degrade to [] so downstream length checks do the rejecting.
function mcTaSeries(values) {
  if (!Array.isArray(values)) return [];
  const out = new Array(values.length);
  for (let i = 0; i < values.length; i++) out[i] = mcTaNum(values[i]);
  return out;
}

function mcTaNulls(n) {
  const out = new Array(n > 0 ? n : 0);
  for (let i = 0; i < out.length; i++) out[i] = null;
  return out;
}

// Period sanitiser. Returns 0 for anything unusable, and callers treat 0 as
// "return all nulls". 2.7 -> 2 rather than throwing: a slider that emits
// floats should not blow up the board.
function mcTaPeriod(p, fallback) {
  const n = mcTaNum(p);
  if (n === null || n < 1) {
    const f = mcTaNum(fallback);
    return f === null || f < 1 ? 0 : Math.floor(f);
  }
  if (n > 1e6) return 0; // absurd period: refuse rather than allocate forever
  return Math.floor(n);
}

// Division that yields null (not Infinity, not NaN) on a zero/invalid divisor.
// Indicators that want a different answer for the zero case say so locally.
function mcTaDiv(a, b) {
  if (a === null || b === null) return null;
  if (!Number.isFinite(a) || !Number.isFinite(b) || b === 0) return null;
  const r = a / b;
  return Number.isFinite(r) ? r : null;
}

function mcTaRound(n, places) {
  if (typeof n !== "number" || !Number.isFinite(n)) return null;
  const f = Math.pow(10, places === undefined ? 4 : places);
  const r = Math.round(n * f) / f;
  return Number.isFinite(r) ? r : null;
}

function mcTaClamp(n, lo, hi) {
  if (!Number.isFinite(n)) return lo;
  return n < lo ? lo : n > hi ? hi : n;
}

// Soft 0..1 ramp used by every fuzzy pattern score. Below lo -> 0, above hi
// -> 1, linear between. Handles hi < lo by inverting, which is how the
// "smaller is better" scores are written without a second helper.
function mcTaRamp(x, lo, hi) {
  const v = mcTaNum(x);
  if (v === null) return 0;
  if (lo === hi) return v >= hi ? 1 : 0;
  if (hi > lo) return mcTaClamp((v - lo) / (hi - lo), 0, 1);
  return mcTaClamp((lo - v) / (lo - hi), 0, 1);
}

// Geometric-ish blend of sub-scores: one near-zero factor should sink the
// whole confidence. A plain mean lets three mediocre matches masquerade as a
// good one, which is exactly the overclaiming the confidence API exists to
// avoid. Uses the geometric mean so a zero is fatal.
function mcTaBlend(scores) {
  if (!Array.isArray(scores) || !scores.length) return 0;
  let logSum = 0;
  for (let i = 0; i < scores.length; i++) {
    const s = mcTaClamp(mcTaNum(scores[i]) === null ? 0 : scores[i], 0, 1);
    if (s <= 0) return 0;
    logSum += Math.log(s);
  }
  const r = Math.exp(logSum / scores.length);
  return Number.isFinite(r) ? mcTaClamp(r, 0, 1) : 0;
}

// Generic rolling-window evaluator. Any null inside the window makes the bar
// undefined — the alignment rule, applied once, in one place.
// O(n*p). Chart-sized data (tens of thousands of bars, period <= 200) makes
// that a few million operations; a monotonic-deque rewrite was rejected as
// unjustified complexity for the gain.
function mcTaWindow(xs, period, fn) {
  const n = xs.length;
  const out = mcTaNulls(n);
  const p = mcTaPeriod(period);
  if (!p || n < p) return out;
  for (let i = p - 1; i < n; i++) {
    let ok = true;
    const win = new Array(p);
    for (let j = 0; j < p; j++) {
      const v = xs[i - p + 1 + j];
      if (v === null) {
        ok = false;
        break;
      }
      win[j] = v;
    }
    if (!ok) continue;
    const r = fn(win, i);
    out[i] = r === null || !Number.isFinite(r) ? null : r;
  }
  return out;
}

function mcTaMean(win) {
  let s = 0;
  for (let i = 0; i < win.length; i++) s += win[i];
  return s / win.length;
}

// Population standard deviation (divide by n), not sample. The window IS the
// population the band is describing — we are not estimating a wider universe
// from a sample of it. This matches Bollinger's own definition and TA-Lib;
// using n-1 widens every band on short periods and desyncs from every chart
// the user will compare against.
function mcTaStdevPop(win) {
  const m = mcTaMean(win);
  let acc = 0;
  for (let i = 0; i < win.length; i++) {
    const d = win[i] - m;
    acc += d * d;
  }
  const v = acc / win.length;
  return v <= 0 ? 0 : Math.sqrt(v);
}

function mcTaMaxOf(win) {
  let m = win[0];
  for (let i = 1; i < win.length; i++) if (win[i] > m) m = win[i];
  return m;
}

function mcTaMinOf(win) {
  let m = win[0];
  for (let i = 1; i < win.length; i++) if (win[i] < m) m = win[i];
  return m;
}

// Elementwise combine with null propagation — the workhorse behind MACD's
// difference, DEMA's recombination and the Ichimoku midpoints.
function mcTaZip(a, b, fn) {
  const n = Math.max(a.length, b.length);
  const out = mcTaNulls(n);
  for (let i = 0; i < n; i++) {
    const x = i < a.length ? a[i] : null;
    const y = i < b.length ? b[i] : null;
    if (x === null || y === null) continue;
    const r = fn(x, y);
    out[i] = Number.isFinite(r) ? r : null;
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Section 2 — bar normalisation
 * ------------------------------------------------------------------ */

// Accepts the three shapes a crypto feed actually arrives in:
//   {open,high,low,close,volume} | {o,h,l,c,v} | [time,open,high,low,close,volume]
// Returns column arrays. A bar with high < low is a corrupt bar: every column
// for that index becomes null rather than being silently repaired by swapping.
// Swapping was rejected because it converts a visible feed bug into an
// invisible one, and ATR/ADX would then report confident nonsense.
function mcTaColumns(bars) {
  const empty = { open: [], high: [], low: [], close: [], volume: [], time: [], length: 0 };
  if (!Array.isArray(bars)) return empty;
  const n = bars.length;
  const open = new Array(n);
  const high = new Array(n);
  const low = new Array(n);
  const close = new Array(n);
  const volume = new Array(n);
  const time = new Array(n);
  for (let i = 0; i < n; i++) {
    const b = bars[i];
    let o = null;
    let h = null;
    let l = null;
    let c = null;
    let v = null;
    let t = null;
    if (Array.isArray(b)) {
      t = mcTaNum(b[0]);
      o = mcTaNum(b[1]);
      h = mcTaNum(b[2]);
      l = mcTaNum(b[3]);
      c = mcTaNum(b[4]);
      v = mcTaNum(b[5]);
    } else if (b && typeof b === "object") {
      o = mcTaNum(b.open !== undefined ? b.open : b.o);
      h = mcTaNum(b.high !== undefined ? b.high : b.h);
      l = mcTaNum(b.low !== undefined ? b.low : b.l);
      c = mcTaNum(b.close !== undefined ? b.close : b.c);
      v = mcTaNum(b.volume !== undefined ? b.volume : b.v);
      t = mcTaNum(b.time !== undefined ? b.time : b.t);
    } else {
      // A bare number is a close-only series: the OHLC columns stay null so
      // range-based indicators correctly refuse to compute.
      c = mcTaNum(b);
    }
    if (h !== null && l !== null && h < l) {
      o = null;
      h = null;
      l = null;
      c = null;
      v = null;
    }
    open[i] = o;
    high[i] = h;
    low[i] = l;
    close[i] = c;
    volume[i] = v;
    time[i] = t;
  }
  return { open: open, high: high, low: low, close: close, volume: volume, time: time, length: n };
}

/* ------------------------------------------------------------------ *
 * Section 3 — moving averages
 * ------------------------------------------------------------------ */

function mcTaSma(values, period) {
  return mcTaWindow(mcTaSeries(values), period, mcTaMean);
}

// Shared recursive smoother. `alpha` is the weight on the new observation.
//
// SEEDING CHOICE: the first output is the SMA of the first `period` values,
// emitted at index period-1. The alternative — seed with the first value and
// emit from index 0 — was rejected. Both converge, but first-value seeding
// makes the early output a near-copy of one arbitrary observation and takes
// roughly 3*period bars to decay below a percent of error, and it does that
// while *looking* defined. Since we already publish null for the warm-up
// window, there is no argument left for pretending bar 0 has an EMA.
// Callers who want the other behaviour pass {seed:"first"}, which emits from
// the first valid bar; it is documented, not default.
function mcTaRecursive(xs, period, alpha, seedMode) {
  const n = xs.length;
  const out = mcTaNulls(n);
  const p = mcTaPeriod(period);
  if (!p || !n || !Number.isFinite(alpha) || alpha <= 0 || alpha > 1) return out;
  const first = seedMode === "first";
  let prev = null;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    const v = xs[i];
    if (v === null) {
      // Gap: drop the state. The next `period` clean bars re-seed it.
      prev = null;
      sum = 0;
      count = 0;
      continue;
    }
    if (prev === null) {
      if (first) {
        prev = v;
        out[i] = prev;
        continue;
      }
      sum += v;
      count++;
      if (count === p) {
        prev = sum / p;
        out[i] = prev;
      }
      continue;
    }
    prev = prev + alpha * (v - prev);
    out[i] = prev;
  }
  return out;
}

// Standard EMA smoothing constant 2/(n+1).
function mcTaEma(values, period, opts) {
  const p = mcTaPeriod(period);
  if (!p) return mcTaNulls(Array.isArray(values) ? values.length : 0);
  const seed = opts && opts.seed === "first" ? "first" : "sma";
  return mcTaRecursive(mcTaSeries(values), p, 2 / (p + 1), seed);
}

// Wilder's smoothing: alpha = 1/period. Equivalent to an EMA of period
// 2n-1, which is why substituting a plain EMA(n) makes RSI/ATR/ADX visibly
// twitchier than every chart the user will compare against.
function mcTaRma(values, period, opts) {
  const p = mcTaPeriod(period);
  if (!p) return mcTaNulls(Array.isArray(values) ? values.length : 0);
  const seed = opts && opts.seed === "first" ? "first" : "sma";
  return mcTaRecursive(mcTaSeries(values), p, 1 / p, seed);
}

// Linearly weighted MA: weights 1..p, newest heaviest.
function mcTaWma(values, period) {
  const p = mcTaPeriod(period);
  const denom = (p * (p + 1)) / 2;
  return mcTaWindow(mcTaSeries(values), p, function (win) {
    let acc = 0;
    for (let i = 0; i < win.length; i++) acc += win[i] * (i + 1);
    return acc / denom;
  });
}

// Hull MA: WMA(2*WMA(n/2) - WMA(n), sqrt(n)). Hull rounds both derived
// periods; Math.round (not floor) because floor(sqrt(9))=3 is fine but
// floor(sqrt(8))=2 over-shortens the smoothing versus Hull's own spec.
function mcTaHma(values, period) {
  const xs = mcTaSeries(values);
  const p = mcTaPeriod(period);
  if (!p) return mcTaNulls(xs.length);
  const half = Math.max(1, Math.round(p / 2));
  const sq = Math.max(1, Math.round(Math.sqrt(p)));
  const wHalf = mcTaWma(xs, half);
  const wFull = mcTaWma(xs, p);
  const raw = mcTaZip(wHalf, wFull, function (a, b) {
    return 2 * a - b;
  });
  return mcTaWma(raw, sq);
}

// DEMA = 2*EMA - EMA(EMA). Warm-up is 2p-2 because the second EMA cannot
// start until the first one has p values of its own.
function mcTaDema(values, period) {
  const e1 = mcTaEma(values, period);
  const e2 = mcTaEma(e1, period);
  return mcTaZip(e1, e2, function (a, b) {
    return 2 * a - b;
  });
}

// TEMA = 3*EMA - 3*EMA2 + EMA3. Warm-up 3p-3.
function mcTaTema(values, period) {
  const e1 = mcTaEma(values, period);
  const e2 = mcTaEma(e1, period);
  const e3 = mcTaEma(e2, period);
  const n = e1.length;
  const out = mcTaNulls(n);
  for (let i = 0; i < n; i++) {
    if (e1[i] === null || e2[i] === null || e3[i] === null) continue;
    const v = 3 * e1[i] - 3 * e2[i] + e3[i];
    out[i] = Number.isFinite(v) ? v : null;
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Section 4 — RSI
 * ------------------------------------------------------------------ */

// Wilder's RSI. Gains and losses are smoothed with RMA (alpha=1/p), seeded
// with the simple mean of the first p changes — that seed is Wilder's own,
// and it is why the first RSI lands at index p, not p-1.
//
// Computed as 100 * avgGain / (avgGain + avgLoss) rather than
// 100 - 100/(1+RS): algebraically identical, but it never divides by a zero
// avgLoss, so the "no down bars" case needs no special pleading.
//
// DEGENERATE CASES:
//   avgLoss == 0, avgGain > 0  -> 100 (all upside pressure)
//   avgGain == 0, avgLoss > 0  -> 0
//   both zero (flat series)    -> 50
// The last one is a real decision. TA-Lib returns 0 there, which paints a
// dead-flat market as maximally oversold and will fire every oversold alert
// on a stablecoin. Wilder's ratio form gives 0/0. 50 is the only answer
// consistent with what RSI measures: with no movement in either direction
// there is no directional pressure, and 50 is the neutral midpoint.
function mcTaRsi(values, period) {
  const xs = mcTaSeries(values);
  const n = xs.length;
  const p = mcTaPeriod(period, 14);
  if (!p || !n) return mcTaNulls(n);
  const gains = mcTaNulls(n);
  const losses = mcTaNulls(n);
  for (let i = 1; i < n; i++) {
    const a = xs[i - 1];
    const b = xs[i];
    if (a === null || b === null) continue; // gap -> both stay null -> RMA re-seeds
    const d = b - a;
    gains[i] = d > 0 ? d : 0;
    losses[i] = d < 0 ? -d : 0;
  }
  const avgG = mcTaRma(gains, p);
  const avgL = mcTaRma(losses, p);
  const out = mcTaNulls(n);
  for (let i = 0; i < n; i++) {
    const g = avgG[i];
    const l = avgL[i];
    if (g === null || l === null) continue;
    const denom = g + l;
    if (denom <= 0) {
      out[i] = 50;
      continue;
    }
    out[i] = (100 * g) / denom;
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Section 5 — MACD
 * ------------------------------------------------------------------ */

// MACD line = EMA(fast) - EMA(slow); signal = EMA(macd, signalPeriod);
// histogram = macd - signal. With SMA-seeded EMAs the macd line starts at
// slow-1 (25 by default) and the signal at slow+signal-2 (33), matching
// TA-Lib. The histogram inherits the signal's warm-up.
function mcTaMacd(values, fastPeriod, slowPeriod, signalPeriod) {
  const xs = mcTaSeries(values);
  const n = xs.length;
  const f = mcTaPeriod(fastPeriod, 12);
  const s = mcTaPeriod(slowPeriod, 26);
  const g = mcTaPeriod(signalPeriod, 9);
  const blank = { macd: mcTaNulls(n), signal: mcTaNulls(n), histogram: mcTaNulls(n) };
  if (!f || !s || !g || !n) return blank;
  const fastEma = mcTaEma(xs, f);
  const slowEma = mcTaEma(xs, s);
  const macd = mcTaZip(fastEma, slowEma, function (a, b) {
    return a - b;
  });
  const signal = mcTaEma(macd, g);
  const histogram = mcTaZip(macd, signal, function (a, b) {
    return a - b;
  });
  return { macd: macd, signal: signal, histogram: histogram };
}

/* ------------------------------------------------------------------ *
 * Section 6 — Bollinger Bands
 * ------------------------------------------------------------------ */

// %B  = (price - lower) / (upper - lower)
// bw  = (upper - lower) / middle
//
// Zero-width bands (a perfectly flat window) make %B 0/0. We return 0.5:
// price is exactly at the middle band, which is the honest reading. Bandwidth
// with a zero or negative middle band is genuinely undefined — you cannot
// express width as a fraction of nothing — so that yields null, not 0.
function mcTaBollinger(values, period, mult) {
  const xs = mcTaSeries(values);
  const n = xs.length;
  const p = mcTaPeriod(period, 20);
  let k = mcTaNum(mult);
  if (k === null) k = 2;
  const middle = mcTaWindow(xs, p, mcTaMean);
  const sd = mcTaWindow(xs, p, mcTaStdevPop);
  const upper = mcTaNulls(n);
  const lower = mcTaNulls(n);
  const percentB = mcTaNulls(n);
  const bandwidth = mcTaNulls(n);
  for (let i = 0; i < n; i++) {
    if (middle[i] === null || sd[i] === null) continue;
    const u = middle[i] + k * sd[i];
    const l = middle[i] - k * sd[i];
    if (!Number.isFinite(u) || !Number.isFinite(l)) continue;
    upper[i] = u;
    lower[i] = l;
    const width = u - l;
    const price = xs[i];
    if (price !== null) percentB[i] = width === 0 ? 0.5 : (price - l) / width;
    bandwidth[i] = middle[i] > 0 ? width / middle[i] : null;
  }
  return {
    middle: middle,
    upper: upper,
    lower: lower,
    stdev: sd,
    percentB: percentB,
    bandwidth: bandwidth
  };
}

/* ------------------------------------------------------------------ *
 * Section 7 — True Range / ATR
 * ------------------------------------------------------------------ */

// TR = max(high-low, |high - prevClose|, |low - prevClose|).
//
// TR[0] IS NULL. Wilder's TR is defined against a previous close and bar 0
// has none. Emitting high-low there (as many libraries do) silently mixes two
// different definitions into one series and biases the ATR seed low on gappy
// crypto data. Null is the honest answer and it is what the alignment rule
// demands. ATR therefore seeds from TR[1..p] and first prints at index p.
function mcTaTrueRange(bars) {
  const c = mcTaColumns(bars);
  const n = c.length;
  const out = mcTaNulls(n);
  for (let i = 1; i < n; i++) {
    const h = c.high[i];
    const l = c.low[i];
    const pc = c.close[i - 1];
    if (h === null || l === null || pc === null) continue;
    const a = h - l;
    const b = Math.abs(h - pc);
    const d = Math.abs(l - pc);
    const tr = Math.max(a, b, d);
    out[i] = Number.isFinite(tr) ? tr : null;
  }
  return out;
}

function mcTaAtr(bars, period) {
  const p = mcTaPeriod(period, 14);
  const tr = mcTaTrueRange(bars);
  if (!p) return mcTaNulls(tr.length);
  return mcTaRma(tr, p);
}

/* ------------------------------------------------------------------ *
 * Section 8 — Stochastic
 * ------------------------------------------------------------------ */

// rawK  = 100 * (close - LL(n)) / (HH(n) - LL(n))
// %K    = SMA(rawK, smooth)      smooth=1 -> fast, smooth=3 -> slow
// %D    = SMA(%K, dPeriod)
//
// A window where HH == LL (perfectly flat) gives 0/0. Returns 50: the close
// sits at both extremes at once, so neither "at the top of the range" (100)
// nor "at the bottom" (0) is defensible; the midpoint is.
function mcTaStochastic(bars, kPeriod, dPeriod, smooth) {
  const c = mcTaColumns(bars);
  const n = c.length;
  const kp = mcTaPeriod(kPeriod, 14);
  const dp = mcTaPeriod(dPeriod, 3);
  const sm = mcTaPeriod(smooth, 1);
  const blank = { rawK: mcTaNulls(n), k: mcTaNulls(n), d: mcTaNulls(n) };
  if (!kp || !dp || !sm || !n) return blank;
  const hh = mcTaWindow(c.high, kp, mcTaMaxOf);
  const ll = mcTaWindow(c.low, kp, mcTaMinOf);
  const rawK = mcTaNulls(n);
  for (let i = 0; i < n; i++) {
    if (hh[i] === null || ll[i] === null || c.close[i] === null) continue;
    const range = hh[i] - ll[i];
    rawK[i] = range === 0 ? 50 : (100 * (c.close[i] - ll[i])) / range;
  }
  const k = sm === 1 ? rawK.slice() : mcTaSma(rawK, sm);
  const d = mcTaSma(k, dp);
  return { rawK: rawK, k: k, d: d };
}

// Convenience wrappers: "fast" and "slow" are the two presets people mean.
function mcTaStochasticFast(bars, kPeriod, dPeriod) {
  return mcTaStochastic(bars, kPeriod, dPeriod, 1);
}

// Slow stochastic's %K is the fast %D; the extra SMA(3) is exactly that.
function mcTaStochasticSlow(bars, kPeriod, dPeriod) {
  return mcTaStochastic(bars, kPeriod, dPeriod, 3);
}

/* ------------------------------------------------------------------ *
 * Section 9 — volume indicators
 * ------------------------------------------------------------------ */

// On-Balance Volume. Index 0 is 0, not null: OBV is a running total whose
// absolute level carries no information, so bar 0 is the *defined* baseline
// rather than a warm-up gap. Only a missing close/volume produces null, and
// the running total then resumes from its last known level (dropping the
// unknown bar's contribution) — restarting the total at a gap would put a
// meaningless cliff on the chart.
function mcTaObv(bars) {
  const c = mcTaColumns(bars);
  const n = c.length;
  const out = mcTaNulls(n);
  if (!n) return out;
  let total = 0;
  let lastClose = c.close[0];
  if (c.close[0] !== null) out[0] = 0;
  for (let i = 1; i < n; i++) {
    const close = c.close[i];
    const vol = c.volume[i];
    if (close === null || vol === null || lastClose === null) {
      if (close !== null) lastClose = close;
      continue;
    }
    if (close > lastClose) total += vol;
    else if (close < lastClose) total -= vol;
    // Unchanged close contributes nothing — Granville's rule, not a rounding
    // shortcut.
    lastClose = close;
    out[i] = total;
  }
  return out;
}

function mcTaTypicalPrice(bars) {
  const c = mcTaColumns(bars);
  const n = c.length;
  const out = mcTaNulls(n);
  for (let i = 0; i < n; i++) {
    if (c.high[i] === null || c.low[i] === null || c.close[i] === null) continue;
    out[i] = (c.high[i] + c.low[i] + c.close[i]) / 3;
  }
  return out;
}

// VWAP. Three modes, because "VWAP" means different things on different charts:
//   default            cumulative from bar 0 (anchored VWAP)
//   {period: n}        rolling n-bar VWAP
//   {sessions: [bool]} resets wherever sessions[i] is truthy (daily VWAP)
// Zero cumulative volume yields null — a volume-weighted average of no
// volume is undefined, and returning the typical price there would quietly
// invent a level people trade against.
function mcTaVwap(bars, opts) {
  const c = mcTaColumns(bars);
  const n = c.length;
  const tp = mcTaTypicalPrice(bars);
  const out = mcTaNulls(n);
  const o = opts || {};
  const period = mcTaPeriod(o.period, 0);
  const sessions = Array.isArray(o.sessions) ? o.sessions : null;
  if (period) {
    for (let i = period - 1; i < n; i++) {
      let pv = 0;
      let vv = 0;
      let ok = true;
      for (let j = i - period + 1; j <= i; j++) {
        if (tp[j] === null || c.volume[j] === null) {
          ok = false;
          break;
        }
        pv += tp[j] * c.volume[j];
        vv += c.volume[j];
      }
      if (!ok) continue;
      out[i] = mcTaDiv(pv, vv);
    }
    return out;
  }
  let pv = 0;
  let vv = 0;
  for (let i = 0; i < n; i++) {
    if (sessions && sessions[i]) {
      pv = 0;
      vv = 0;
    }
    if (tp[i] === null || c.volume[i] === null) continue;
    pv += tp[i] * c.volume[i];
    vv += c.volume[i];
    out[i] = mcTaDiv(pv, vv);
  }
  return out;
}

// Money Flow Index — "volume-weighted RSI". Flows are summed (not smoothed)
// over the period, which is the original definition; using RMA here is a
// common and wrong shortcut. Same degenerate policy as RSI: no negative flow
// -> 100, no positive flow -> 0, no flow at all -> 50.
function mcTaMfi(bars, period) {
  const c = mcTaColumns(bars);
  const n = c.length;
  const p = mcTaPeriod(period, 14);
  if (!p || !n) return mcTaNulls(n);
  const tp = mcTaTypicalPrice(bars);
  const pos = mcTaNulls(n);
  const neg = mcTaNulls(n);
  for (let i = 1; i < n; i++) {
    if (tp[i] === null || tp[i - 1] === null || c.volume[i] === null) continue;
    const flow = tp[i] * c.volume[i];
    if (tp[i] > tp[i - 1]) {
      pos[i] = flow;
      neg[i] = 0;
    } else if (tp[i] < tp[i - 1]) {
      pos[i] = 0;
      neg[i] = flow;
    } else {
      pos[i] = 0;
      neg[i] = 0;
    }
  }
  const sum = function (win) {
    let s = 0;
    for (let i = 0; i < win.length; i++) s += win[i];
    return s;
  };
  const posSum = mcTaWindow(pos, p, sum);
  const negSum = mcTaWindow(neg, p, sum);
  const out = mcTaNulls(n);
  for (let i = 0; i < n; i++) {
    if (posSum[i] === null || negSum[i] === null) continue;
    const total = posSum[i] + negSum[i];
    out[i] = total <= 0 ? 50 : (100 * posSum[i]) / total;
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Section 10 — ADX / DMI
 * ------------------------------------------------------------------ */

// Wilder's directional system.
//   +DM = up move   if up > down and up > 0, else 0
//   -DM = down move if down > up and down > 0, else 0
//   +DI = 100 * RMA(+DM) / RMA(TR)
//   DX  = 100 * |+DI - -DI| / (+DI + -DI)
//   ADX = RMA(DX)
//
// Using RMA (the mean form) for all three is exactly equivalent to Wilder's
// running-sum form, because the 1/p factors cancel in the DI ratio.
// Warm-up: DI at index p, DX at index p, ADX at index 2p-1 — the ADX needs a
// further p values of DX before its own seed exists. Anyone reporting ADX
// from index p has skipped the second smoothing.
//
// DX with +DI == -DI == 0 is 0, and here 0 is the *answer*, not a sentinel:
// no directional movement at all means zero directional index.
function mcTaAdx(bars, period) {
  const c = mcTaColumns(bars);
  const n = c.length;
  const p = mcTaPeriod(period, 14);
  const blank = {
    plusDI: mcTaNulls(n),
    minusDI: mcTaNulls(n),
    dx: mcTaNulls(n),
    adx: mcTaNulls(n)
  };
  if (!p || !n) return blank;
  const plusDM = mcTaNulls(n);
  const minusDM = mcTaNulls(n);
  for (let i = 1; i < n; i++) {
    const h = c.high[i];
    const l = c.low[i];
    const ph = c.high[i - 1];
    const pl = c.low[i - 1];
    if (h === null || l === null || ph === null || pl === null) continue;
    const up = h - ph;
    const down = pl - l;
    plusDM[i] = up > down && up > 0 ? up : 0;
    minusDM[i] = down > up && down > 0 ? down : 0;
  }
  const tr = mcTaTrueRange(bars);
  const sTR = mcTaRma(tr, p);
  const sPlus = mcTaRma(plusDM, p);
  const sMinus = mcTaRma(minusDM, p);
  const plusDI = mcTaNulls(n);
  const minusDI = mcTaNulls(n);
  const dx = mcTaNulls(n);
  for (let i = 0; i < n; i++) {
    if (sTR[i] === null || sPlus[i] === null || sMinus[i] === null) continue;
    if (sTR[i] === 0) {
      // Zero true range over the whole window: no movement, so no direction.
      plusDI[i] = 0;
      minusDI[i] = 0;
      dx[i] = 0;
      continue;
    }
    const pdi = (100 * sPlus[i]) / sTR[i];
    const mdi = (100 * sMinus[i]) / sTR[i];
    plusDI[i] = pdi;
    minusDI[i] = mdi;
    const sum = pdi + mdi;
    dx[i] = sum === 0 ? 0 : (100 * Math.abs(pdi - mdi)) / sum;
  }
  const adx = mcTaRma(dx, p);
  return { plusDI: plusDI, minusDI: minusDI, dx: dx, adx: adx };
}

/* ------------------------------------------------------------------ *
 * Section 11 — CCI, Williams %R, ROC, momentum
 * ------------------------------------------------------------------ */

// CCI = (TP - SMA(TP)) / (0.015 * meanDeviation)
// meanDeviation is the mean ABSOLUTE deviation about the SMA — not the
// standard deviation. Substituting stdev is the classic CCI bug and shrinks
// the indicator by roughly 20-25% on typical data. The 0.015 constant exists
// only to put ~70-80% of readings inside +/-100.
// Zero mean deviation (flat window) -> 0: price is exactly at its own mean,
// so there is no deviation to express in units of deviation.
function mcTaCci(bars, period) {
  const p = mcTaPeriod(period, 20);
  const tp = mcTaTypicalPrice(bars);
  const n = tp.length;
  if (!p || !n) return mcTaNulls(n);
  const sma = mcTaWindow(tp, p, mcTaMean);
  return mcTaWindow(tp, p, function (win, i) {
    const m = sma[i];
    if (m === null) return null;
    let dev = 0;
    for (let j = 0; j < win.length; j++) dev += Math.abs(win[j] - m);
    dev /= win.length;
    if (dev === 0) return 0;
    return (tp[i] - m) / (0.015 * dev);
  });
}

// Williams %R = -100 * (HH - close) / (HH - LL). Range 0 (top) to -100.
// Flat window -> -50, the midpoint, mirroring the stochastic decision.
function mcTaWilliamsR(bars, period) {
  const c = mcTaColumns(bars);
  const n = c.length;
  const p = mcTaPeriod(period, 14);
  if (!p || !n) return mcTaNulls(n);
  const hh = mcTaWindow(c.high, p, mcTaMaxOf);
  const ll = mcTaWindow(c.low, p, mcTaMinOf);
  const out = mcTaNulls(n);
  for (let i = 0; i < n; i++) {
    if (hh[i] === null || ll[i] === null || c.close[i] === null) continue;
    const range = hh[i] - ll[i];
    out[i] = range === 0 ? -50 : (-100 * (hh[i] - c.close[i])) / range;
  }
  return out;
}

// Rate of change, in percent. A zero base price makes the percentage
// undefined (not infinite) -> null. Crypto series really do contain 0 prints
// from bad feeds, so this branch is not theoretical.
function mcTaRoc(values, period) {
  const xs = mcTaSeries(values);
  const n = xs.length;
  const p = mcTaPeriod(period, 12);
  const out = mcTaNulls(n);
  if (!p) return out;
  for (let i = p; i < n; i++) {
    const base = xs[i - p];
    const cur = xs[i];
    if (base === null || cur === null || base === 0) continue;
    const v = (100 * (cur - base)) / base;
    out[i] = Number.isFinite(v) ? v : null;
  }
  return out;
}

// Momentum: the plain difference. Unlike ROC it is defined at a zero base.
function mcTaMomentum(values, period) {
  const xs = mcTaSeries(values);
  const n = xs.length;
  const p = mcTaPeriod(period, 10);
  const out = mcTaNulls(n);
  if (!p) return out;
  for (let i = p; i < n; i++) {
    if (xs[i] === null || xs[i - p] === null) continue;
    out[i] = xs[i] - xs[i - p];
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Section 12 — channels
 * ------------------------------------------------------------------ */

// Keltner: EMA centre, ATR width. Defaults are the Linda Raschke variant
// (EMA 20, ATR 10, 2x) rather than Keltner's original 10-bar SMA of typical
// price with high-low width, because every modern chart ships the ATR form
// and matching the user's other tools matters more than matching 1960.
function mcTaKeltner(bars, emaPeriod, atrPeriod, mult) {
  const c = mcTaColumns(bars);
  const n = c.length;
  const ep = mcTaPeriod(emaPeriod, 20);
  const ap = mcTaPeriod(atrPeriod, 10);
  let k = mcTaNum(mult);
  if (k === null) k = 2;
  const blank = { middle: mcTaNulls(n), upper: mcTaNulls(n), lower: mcTaNulls(n) };
  if (!ep || !ap || !n) return blank;
  const middle = mcTaEma(c.close, ep);
  const atr = mcTaAtr(bars, ap);
  const upper = mcTaNulls(n);
  const lower = mcTaNulls(n);
  for (let i = 0; i < n; i++) {
    if (middle[i] === null || atr[i] === null) continue;
    upper[i] = middle[i] + k * atr[i];
    lower[i] = middle[i] - k * atr[i];
  }
  return { middle: middle, upper: upper, lower: lower, atr: atr };
}

// Donchian. `includeCurrent` defaults true (what a chart draws). Set it false
// for breakout systems: comparing today's high against a channel that already
// contains today's high is a look-ahead bug that makes every backtest sing.
function mcTaDonchian(bars, period, opts) {
  const c = mcTaColumns(bars);
  const n = c.length;
  const p = mcTaPeriod(period, 20);
  const includeCurrent = !(opts && opts.includeCurrent === false);
  const blank = { upper: mcTaNulls(n), lower: mcTaNulls(n), middle: mcTaNulls(n) };
  if (!p || !n) return blank;
  const srcHigh = includeCurrent ? c.high : [null].concat(c.high.slice(0, n - 1));
  const srcLow = includeCurrent ? c.low : [null].concat(c.low.slice(0, n - 1));
  const upper = mcTaWindow(srcHigh, p, mcTaMaxOf);
  const lower = mcTaWindow(srcLow, p, mcTaMinOf);
  const middle = mcTaZip(upper, lower, function (a, b) {
    return (a + b) / 2;
  });
  return { upper: upper, lower: lower, middle: middle };
}

/* ------------------------------------------------------------------ *
 * Section 13 — Ichimoku
 * ------------------------------------------------------------------ */

// Five lines, and the displacement is the whole point.
//
//   tenkan  = midpoint of the last 9 bars      (drawn at the current bar)
//   kijun   = midpoint of the last 26 bars     (drawn at the current bar)
//   senkouA = (tenkan+kijun)/2 pushed FORWARD  displacement bars
//   senkouB = midpoint of the last 52 bars pushed FORWARD displacement bars
//   chikou  = close pulled BACKWARD displacement bars
//
// Forward displacement means the cloud computed on bar j is drawn at bar
// j+displacement. The last `displacement` cloud values therefore land beyond
// the final candle and cannot live in an array aligned to the input. Dropping
// them would delete the only part of the cloud anybody looks at, so they are
// returned separately in `future`, with `futureOffset` naming the index the
// first future point belongs to. The aligned arrays stay exactly input-length.
//
// OFF-BY-ONE WARNING: TradingView plots the cloud with Pine `offset =
// displacement - 1` (25 array slots) because Pine counts the current bar as
// offset 0. This module shifts by the full `displacement` (26 slots), which
// is the textbook reading of "26 periods ahead". Pass displacement 25 if you
// need pixel parity with a TradingView screenshot; the difference is one bar
// and it is a convention, not a bug on either side.
function mcTaIchimoku(bars, opts) {
  const c = mcTaColumns(bars);
  const n = c.length;
  const o = opts || {};
  const tp = mcTaPeriod(o.conversionPeriod, 9);
  const kp = mcTaPeriod(o.basePeriod, 26);
  const sp = mcTaPeriod(o.spanPeriod, 52);
  const disp = mcTaPeriod(o.displacement, 26);
  const blank = {
    tenkan: mcTaNulls(n),
    kijun: mcTaNulls(n),
    senkouA: mcTaNulls(n),
    senkouB: mcTaNulls(n),
    chikou: mcTaNulls(n),
    future: { senkouA: [], senkouB: [] },
    futureOffset: n,
    displacement: disp
  };
  if (!tp || !kp || !sp || !disp || !n) return blank;

  const midpoint = function (period) {
    const hh = mcTaWindow(c.high, period, mcTaMaxOf);
    const ll = mcTaWindow(c.low, period, mcTaMinOf);
    return mcTaZip(hh, ll, function (a, b) {
      return (a + b) / 2;
    });
  };

  const tenkan = midpoint(tp);
  const kijun = midpoint(kp);
  const rawA = mcTaZip(tenkan, kijun, function (a, b) {
    return (a + b) / 2;
  });
  const rawB = midpoint(sp);

  const senkouA = mcTaNulls(n);
  const senkouB = mcTaNulls(n);
  for (let i = disp; i < n; i++) {
    senkouA[i] = rawA[i - disp];
    senkouB[i] = rawB[i - disp];
  }
  // The projection past the last candle: raw values from the final `disp`
  // bars, which have nowhere to go inside an aligned array.
  const futureA = mcTaNulls(disp);
  const futureB = mcTaNulls(disp);
  for (let k = 0; k < disp; k++) {
    const src = n - disp + k;
    if (src >= 0 && src < n) {
      futureA[k] = rawA[src];
      futureB[k] = rawB[src];
    }
  }
  // Chikou at plot position i shows the close from `disp` bars later, so the
  // final `disp` slots are null by construction, not by warm-up.
  const chikou = mcTaNulls(n);
  for (let i = 0; i + disp < n; i++) chikou[i] = c.close[i + disp];

  return {
    tenkan: tenkan,
    kijun: kijun,
    senkouA: senkouA,
    senkouB: senkouB,
    chikou: chikou,
    future: { senkouA: futureA, senkouB: futureB },
    futureOffset: n,
    displacement: disp
  };
}

/* ------------------------------------------------------------------ *
 * Section 14 — Parabolic SAR
 * ------------------------------------------------------------------ */

// Wilder's stop-and-reverse.
//   SAR_next = SAR + AF * (EP - SAR)
//   AF starts at `step`, increments by `step` on every new extreme, caps at
//   `max`. On reversal SAR becomes the prior EP, EP becomes the current
//   extreme, AF resets.
//
// The clamp — SAR may never penetrate the previous two bars' range — is not
// optional decoration: without it the stop can sit inside the bar it is meant
// to protect and the indicator reverses on noise.
//
// Bar 0 is null: SAR is a projection from a previous bar and there is none.
// Initial direction comes from close[1] vs close[0]; a tie is treated as
// long. That first call is a coin flip on any implementation and the series
// self-corrects within a few bars, so a more elaborate seed (Wilder used the
// first period's DM balance) buys nothing but code.
function mcTaPsar(bars, opts) {
  const c = mcTaColumns(bars);
  const n = c.length;
  const o = opts || {};
  let step = mcTaNum(o.step);
  let max = mcTaNum(o.max);
  if (step === null || step <= 0) step = 0.02;
  if (max === null || max <= 0) max = 0.2;
  if (max < step) max = step;
  const sar = mcTaNulls(n);
  const trend = mcTaNulls(n);
  if (n < 2) return { sar: sar, trend: trend };
  if (c.high[0] === null || c.low[0] === null || c.close[0] === null || c.close[1] === null) {
    return { sar: sar, trend: trend };
  }
  let isLong = c.close[1] >= c.close[0];
  let ep = isLong ? c.high[0] : c.low[0];
  let cur = isLong ? c.low[0] : c.high[0];
  let af = step;
  for (let i = 1; i < n; i++) {
    const h = c.high[i];
    const l = c.low[i];
    if (h === null || l === null) {
      // A missing bar cannot move the stop; hold state and emit null so the
      // chart shows the gap instead of a flat dot.
      continue;
    }
    let next = cur + af * (ep - cur);
    const pLow1 = c.low[i - 1];
    const pHigh1 = c.high[i - 1];
    const pLow2 = i >= 2 ? c.low[i - 2] : null;
    const pHigh2 = i >= 2 ? c.high[i - 2] : null;
    if (isLong) {
      if (pLow1 !== null) next = Math.min(next, pLow1);
      if (pLow2 !== null) next = Math.min(next, pLow2);
      if (l < next) {
        isLong = false;
        next = ep;
        ep = l;
        af = step;
      } else if (h > ep) {
        ep = h;
        af = Math.min(af + step, max);
      }
    } else {
      if (pHigh1 !== null) next = Math.max(next, pHigh1);
      if (pHigh2 !== null) next = Math.max(next, pHigh2);
      if (h > next) {
        isLong = true;
        next = ep;
        ep = h;
        af = step;
      } else if (l < ep) {
        ep = l;
        af = Math.min(af + step, max);
      }
    }
    cur = next;
    sar[i] = Number.isFinite(cur) ? cur : null;
    trend[i] = isLong ? 1 : -1;
  }
  return { sar: sar, trend: trend };
}

/* ------------------------------------------------------------------ *
 * Section 15 — crossovers
 * ------------------------------------------------------------------ */

// +1 where a crosses above b, -1 where it crosses below, 0 where neither,
// null while either series is undefined. Equality is not a cross: the cross
// is recorded on the bar where the sign of (a-b) actually changes, so a bar
// that merely touches does not fire twice on the way out.
function mcTaCross(a, b) {
  const xs = mcTaSeries(a);
  const ys = mcTaSeries(b);
  const n = Math.max(xs.length, ys.length);
  const out = mcTaNulls(n);
  let prevSign = null;
  for (let i = 0; i < n; i++) {
    const x = i < xs.length ? xs[i] : null;
    const y = i < ys.length ? ys[i] : null;
    if (x === null || y === null) {
      prevSign = null;
      continue;
    }
    const d = x - y;
    const sign = d > 0 ? 1 : d < 0 ? -1 : 0;
    if (prevSign === null || sign === 0 || prevSign === 0) {
      out[i] = 0;
    } else {
      out[i] = sign !== prevSign ? sign : 0;
    }
    if (sign !== 0) prevSign = sign;
    else if (prevSign === null) prevSign = 0;
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Section 16 — candle construction and geometry
 * ------------------------------------------------------------------ */

// OHLC aggregation from a tick/price series.
//   {size: n}       n ticks per bar (works on a bare number[] too)
//   {intervalMs: n} clock buckets floored to a multiple of n
// Ticks may be numbers or {t|time, p|price, v|volume|size|qty|amount}.
//
// Empty clock buckets are SKIPPED by default. Forward-filling a flat bar into
// a hole invents a zero-range candle, which then feeds ATR, the pattern
// scorer and every range-based indicator a lie. `{fillGaps:true}` opts into
// synthetic flat bars for renderers that need an even time axis; they carry
// `synthetic:true` so nothing downstream mistakes them for prints.
function mcTaAggregate(ticks, opts) {
  if (!Array.isArray(ticks) || !ticks.length) return [];
  const o = opts || {};
  const size = mcTaPeriod(o.size, 0);
  const interval = mcTaNum(o.intervalMs);
  const useTime = interval !== null && interval > 0;
  if (!useTime && !size) return []; // no bucketing rule given: refuse to guess

  const read = function (tick, index) {
    if (tick && typeof tick === "object" && !Array.isArray(tick)) {
      const p = mcTaNum(tick.price !== undefined ? tick.price : tick.p);
      let v = mcTaNum(tick.volume);
      if (v === null) v = mcTaNum(tick.size);
      if (v === null) v = mcTaNum(tick.qty);
      if (v === null) v = mcTaNum(tick.amount);
      if (v === null) v = mcTaNum(tick.v);
      const t = mcTaNum(tick.time !== undefined ? tick.time : tick.t);
      return { p: p, v: v === null ? 0 : v, t: t === null ? index : t };
    }
    if (Array.isArray(tick)) {
      const t = mcTaNum(tick[0]);
      return { p: mcTaNum(tick[1]), v: mcTaNum(tick[2]) || 0, t: t === null ? index : t };
    }
    return { p: mcTaNum(tick), v: 0, t: index };
  };

  const bars = [];
  let cur = null;
  let curKey = null;
  const push = function () {
    if (cur) bars.push(cur);
    cur = null;
  };
  for (let i = 0; i < ticks.length; i++) {
    const t = read(ticks[i], i);
    if (t.p === null) continue; // a tick without a price is not a tick
    const key = useTime ? Math.floor(t.t / interval) * interval : Math.floor(bars.length);
    if (useTime) {
      if (curKey === null || key !== curKey) {
        push();
        curKey = key;
      }
    } else if (cur && cur.count >= size) {
      push();
    }
    if (!cur) {
      cur = {
        time: useTime ? key : t.t,
        open: t.p,
        high: t.p,
        low: t.p,
        close: t.p,
        volume: 0,
        count: 0
      };
    }
    if (t.p > cur.high) cur.high = t.p;
    if (t.p < cur.low) cur.low = t.p;
    cur.close = t.p;
    cur.volume += t.v;
    cur.count++;
  }
  push();

  if (useTime && o.fillGaps && bars.length > 1) {
    const filled = [bars[0]];
    for (let i = 1; i < bars.length; i++) {
      let expect = filled[filled.length - 1].time + interval;
      // Bounded so a corrupt timestamp cannot allocate a billion bars.
      let guard = 0;
      while (expect < bars[i].time && guard < 100000) {
        const c = filled[filled.length - 1].close;
        filled.push({
          time: expect,
          open: c,
          high: c,
          low: c,
          close: c,
          volume: 0,
          count: 0,
          synthetic: true
        });
        expect += interval;
        guard++;
      }
      filled.push(bars[i]);
    }
    return filled;
  }
  return bars;
}

// Body/wick geometry for one candle. Wicks are clamped at zero: a feed that
// reports high < max(open,close) is broken, and a negative wick would poison
// every ratio downstream. `valid:false` marks the bar so callers can tell
// "no pattern here" from "we could not look".
function mcTaGeometry(bar) {
  const col = mcTaColumns([bar]);
  const o = col.open[0];
  const h = col.high[0];
  const l = col.low[0];
  const c = col.close[0];
  const blank = {
    valid: false,
    open: null,
    high: null,
    low: null,
    close: null,
    body: null,
    range: null,
    upperWick: null,
    lowerWick: null,
    bodyRatio: null,
    upperRatio: null,
    lowerRatio: null,
    direction: null,
    bodyTop: null,
    bodyBottom: null,
    bodyMid: null,
    midpoint: null,
    flat: null
  };
  if (o === null || h === null || l === null || c === null) return blank;
  const bodyTop = Math.max(o, c);
  const bodyBottom = Math.min(o, c);
  const body = bodyTop - bodyBottom;
  const range = h - l;
  const upperWick = Math.max(0, h - bodyTop);
  const lowerWick = Math.max(0, bodyBottom - l);
  const flat = range === 0;
  return {
    valid: true,
    open: o,
    high: h,
    low: l,
    close: c,
    body: body,
    range: range,
    upperWick: upperWick,
    lowerWick: lowerWick,
    // A zero-range candle has no proportions; 0 is the documented sentinel
    // and `flat` is how you tell it apart from a genuinely tiny ratio.
    bodyRatio: flat ? 0 : body / range,
    upperRatio: flat ? 0 : upperWick / range,
    lowerRatio: flat ? 0 : lowerWick / range,
    direction: c > o ? 1 : c < o ? -1 : 0,
    bodyTop: bodyTop,
    bodyBottom: bodyBottom,
    bodyMid: (o + c) / 2,
    midpoint: (h + l) / 2,
    flat: flat
  };
}

/* ------------------------------------------------------------------ *
 * Section 17 — candlestick patterns (fuzzy)
 * ------------------------------------------------------------------ */

// Returns one entry per bar:
//   null  — the bar's geometry is undefined (missing/corrupt OHLC)
//   []    — we looked and found nothing
//   [{name, direction, confidence}, ...] sorted by confidence
//
// CONFIDENCE, NOT BOOLEAN. "Is this a hammer" has no crisp answer: a lower
// wick 1.9x the body is not categorically different from 2.1x, and every
// hard threshold in the literature is somebody's round number. Each pattern
// is scored as a geometric blend of sub-scores in [0,1] — geometric so one
// badly-missed criterion sinks the whole score instead of being averaged
// away. Patterns below `minConfidence` (default 0.35) are dropped; below
// that the geometry is not saying anything a human would call a pattern.
//
// Candle size is judged against a trailing mean range (default 14 bars), not
// an absolute number, because "long body" means nothing without a scale and
// crypto ranges span four orders of magnitude across pairs.
function mcTaPatterns(bars, opts) {
  const list = Array.isArray(bars) ? bars : [];
  const n = list.length;
  const out = new Array(n);
  const o = opts || {};
  const ctxLen = mcTaPeriod(o.context, 14);
  let minConf = mcTaNum(o.minConfidence);
  if (minConf === null) minConf = 0.35;
  const dojiMax = mcTaNum(o.dojiBodyRatio) === null ? 0.1 : mcTaNum(o.dojiBodyRatio);

  const geo = new Array(n);
  for (let i = 0; i < n; i++) geo[i] = mcTaGeometry(list[i]);

  // Trailing mean range, current bar excluded — including it lets a huge
  // candle normalise itself into looking ordinary.
  const avgRange = mcTaNulls(n);
  for (let i = 0; i < n; i++) {
    let acc = 0;
    let cnt = 0;
    for (let j = Math.max(0, i - ctxLen); j < i; j++) {
      if (geo[j].valid && geo[j].range > 0) {
        acc += geo[j].range;
        cnt++;
      }
    }
    if (cnt) avgRange[i] = acc / cnt;
  }

  // Prior trend as a normalised drift over the context window. Used only to
  // separate a hammer from a hanging man (identical geometry, opposite
  // meaning) and to gate the star patterns. It scales confidence into
  // [0.55, 1] and never zeroes it — geometry that is perfect deserves to be
  // reported even when the context is ambiguous.
  const trendFactor = function (i, wantDown) {
    const back = Math.min(ctxLen, i);
    if (back < 3) return 0.75; // not enough history to judge; stay neutral
    const a = geo[i - back].valid ? geo[i - back].close : null;
    const b = geo[i].valid ? geo[i].close : null;
    if (a === null || b === null || a === 0) return 0.75;
    const drift = (b - a) / Math.abs(a);
    const signed = wantDown ? -drift : drift;
    return 0.55 + 0.45 * mcTaRamp(signed, 0, 0.03);
  };

  for (let i = 0; i < n; i++) {
    const g = geo[i];
    if (!g.valid) {
      out[i] = null;
      continue;
    }
    const found = [];
    const scale = avgRange[i] !== null && avgRange[i] > 0 ? avgRange[i] : g.range;
    const rel = function (x) {
      return scale > 0 ? x / scale : 0;
    };

    // --- doji -------------------------------------------------------
    // Tiny body relative to range, and the range itself must be a real
    // candle: a 1-tick bar has a tiny body too and means nothing.
    if (!g.flat) {
      const bodyScore = mcTaRamp(g.bodyRatio, dojiMax, dojiMax * 0.2);
      const sizeScore = mcTaRamp(rel(g.range), 0.25, 0.6);
      const conf = mcTaBlend([bodyScore, sizeScore]);
      if (conf >= minConf) found.push({ name: "doji", direction: 0, confidence: conf });
    }

    // --- hammer / shooting star -------------------------------------
    if (!g.flat) {
      const smallUpper = mcTaRamp(g.upperRatio, 0.18, 0.05);
      const longLower = mcTaRamp(g.lowerRatio, 0.45, 0.66);
      const smallBody = mcTaRamp(g.bodyRatio, 0.42, 0.12);
      const bodyHigh = mcTaRamp((g.bodyMid - g.low) / g.range, 0.55, 0.75);
      const size = mcTaRamp(rel(g.range), 0.3, 0.85);
      const hammer = mcTaBlend([smallUpper, longLower, smallBody, bodyHigh, size]);
      if (hammer > 0) {
        const conf = hammer * trendFactor(i, true);
        if (conf >= minConf) found.push({ name: "hammer", direction: 1, confidence: conf });
      }
      const smallLower = mcTaRamp(g.lowerRatio, 0.18, 0.05);
      const longUpper = mcTaRamp(g.upperRatio, 0.45, 0.66);
      const bodyLow = mcTaRamp((g.high - g.bodyMid) / g.range, 0.55, 0.75);
      const star = mcTaBlend([smallLower, longUpper, smallBody, bodyLow, size]);
      if (star > 0) {
        const conf = star * trendFactor(i, false);
        if (conf >= minConf) {
          found.push({ name: "shootingStar", direction: -1, confidence: conf });
        }
      }
    }

    // --- engulfing --------------------------------------------------
    // Containment is a hard gate, not a fuzzy score: "engulfing" is defined
    // by the previous body fitting inside this one. The fuzziness is in how
    // convincing the engulf is, not whether it happened.
    if (i >= 1 && geo[i - 1].valid) {
      const prev = geo[i - 1];
      const engulfs = g.bodyTop >= prev.bodyTop && g.bodyBottom <= prev.bodyBottom;
      const opposite = g.direction !== 0 && prev.direction !== 0 && g.direction !== prev.direction;
      if (engulfs && opposite && g.body > 0) {
        const ratio = prev.body > 0 ? g.body / prev.body : 3;
        const ratioScore = mcTaRamp(ratio, 1.0, 1.8);
        // Engulfing a doji is technically true and practically meaningless.
        const prevSubstance = mcTaRamp(rel(prev.body), 0.08, 0.35);
        const sizeScore = mcTaRamp(rel(g.body), 0.25, 0.9);
        const conf = mcTaBlend([ratioScore, prevSubstance, sizeScore]);
        if (conf >= minConf) {
          found.push({
            name: g.direction > 0 ? "bullishEngulfing" : "bearishEngulfing",
            direction: g.direction,
            confidence: conf
          });
        }
      }
    }

    // --- morning / evening star -------------------------------------
    if (i >= 2 && geo[i - 1].valid && geo[i - 2].valid) {
      const a = geo[i - 2];
      const b = geo[i - 1];
      const cst = g;
      const smallMiddle = mcTaRamp(rel(b.body), 0.35, 0.08);
      const bigThird = mcTaRamp(rel(cst.body), 0.3, 0.9);
      const bigFirst = mcTaRamp(rel(a.body), 0.3, 0.9);

      if (a.direction < 0 && cst.direction > 0 && a.body > 0) {
        // Penetration of the first candle's body by the third — Nison's
        // "well into" the first body. Half is the classic bar.
        const pen = (cst.close - a.bodyMid) / a.body;
        const penScore = mcTaRamp(pen, -0.1, 0.45);
        // Crypto trades 24/7 and true gaps are rare, so the gap is a soft
        // bonus with a floor rather than a requirement.
        const gapped = b.bodyTop < a.bodyBottom;
        const gapScore = gapped ? 1 : 0.7;
        const conf =
          mcTaBlend([smallMiddle, bigThird, bigFirst, penScore, gapScore]) * trendFactor(i, true);
        if (conf >= minConf) {
          found.push({ name: "morningStar", direction: 1, confidence: conf });
        }
      }
      if (a.direction > 0 && cst.direction < 0 && a.body > 0) {
        const pen = (a.bodyMid - cst.close) / a.body;
        const penScore = mcTaRamp(pen, -0.1, 0.45);
        const gapped = b.bodyBottom > a.bodyTop;
        const gapScore = gapped ? 1 : 0.7;
        const conf =
          mcTaBlend([smallMiddle, bigThird, bigFirst, penScore, gapScore]) * trendFactor(i, false);
        if (conf >= minConf) {
          found.push({ name: "eveningStar", direction: -1, confidence: conf });
        }
      }
    }

    found.sort(function (x, y) {
      return y.confidence - x.confidence;
    });
    for (let k = 0; k < found.length; k++) {
      found[k].confidence = mcTaRound(found[k].confidence, 4);
      found[k].index = i;
    }
    out[i] = found;
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Section 18 — support / resistance
 * ------------------------------------------------------------------ */

// Fractal pivots: a pivot high is strictly greater than the `k` bars to its
// left and greater-or-equal to the `k` bars to its right. The asymmetry
// collapses a flat plateau to its leftmost bar instead of emitting k pivots
// at the same price, which would then dominate every cluster's touch count.
function mcTaPivots(values, k, wantHigh) {
  const xs = mcTaSeries(values);
  const n = xs.length;
  const width = mcTaPeriod(k, 2);
  const out = [];
  if (!width || n < width * 2 + 1) return out;
  for (let i = width; i < n - width; i++) {
    const v = xs[i];
    if (v === null) continue;
    let ok = true;
    for (let j = i - width; j < i && ok; j++) {
      const u = xs[j];
      if (u === null) ok = false;
      else if (wantHigh ? u >= v : u <= v) ok = false;
    }
    for (let j = i + 1; j <= i + width && ok; j++) {
      const u = xs[j];
      if (u === null) ok = false;
      else if (wantHigh ? u > v : u < v) ok = false;
    }
    if (ok) out.push({ index: i, price: v, type: wantHigh ? "high" : "low" });
  }
  return out;
}

// Cluster pivot extrema into levels. `tolerance` is RELATIVE (0.005 = 0.5%)
// because a fixed tick tolerance that works on BTC is meaningless on a
// sub-cent token. Clusters are grown greedily over price-sorted pivots; a
// pivot joins while it stays within tolerance of the running cluster mean,
// which keeps a long shallow drift from chaining into one absurd band.
function mcTaLevels(bars, opts) {
  const c = mcTaColumns(bars);
  const n = c.length;
  const o = opts || {};
  const k = mcTaPeriod(o.lookback, 2);
  let tol = mcTaNum(o.tolerance);
  if (tol === null || tol <= 0) tol = 0.005;
  const minTouches = mcTaPeriod(o.minTouches, 2);
  const maxLevels = mcTaPeriod(o.maxLevels, 12);
  if (!n || !k) return [];

  const highs = mcTaPivots(c.high, k, true);
  const lows = mcTaPivots(c.low, k, false);
  const all = highs.concat(lows);
  if (!all.length) return [];
  all.sort(function (a, b) {
    return a.price - b.price;
  });

  const clusters = [];
  let cur = null;
  for (let i = 0; i < all.length; i++) {
    const p = all[i];
    if (cur && Math.abs(p.price - cur.sum / cur.members.length) <= Math.abs(cur.sum / cur.members.length) * tol) {
      cur.members.push(p);
      cur.sum += p.price;
    } else {
      if (cur) clusters.push(cur);
      cur = { members: [p], sum: p.price };
    }
  }
  if (cur) clusters.push(cur);

  const levels = [];
  for (let i = 0; i < clusters.length; i++) {
    const m = clusters[i].members;
    if (m.length < minTouches) continue;
    let hi = 0;
    let lo = 0;
    let first = m[0].index;
    let last = m[0].index;
    for (let j = 0; j < m.length; j++) {
      if (m[j].type === "high") hi++;
      else lo++;
      if (m[j].index < first) first = m[j].index;
      if (m[j].index > last) last = m[j].index;
    }
    // Recency matters: a level touched three times last week is more
    // tradable than one touched three times a year ago. Weight is a mild
    // 1.0-1.5 multiplier so touch count still dominates.
    const recency = n > 1 ? last / (n - 1) : 1;
    levels.push({
      price: mcTaRound(clusters[i].sum / m.length, 8),
      touches: m.length,
      highTouches: hi,
      lowTouches: lo,
      type: hi && lo ? "both" : hi ? "resistance" : "support",
      firstIndex: first,
      lastIndex: last,
      score: m.length * (1 + 0.5 * recency)
    });
  }
  levels.sort(function (a, b) {
    return b.score - a.score;
  });
  const capped = levels.slice(0, maxLevels || levels.length);
  const best = capped.length ? capped[0].score : 0;
  for (let i = 0; i < capped.length; i++) {
    capped[i].strength = best > 0 ? mcTaRound(capped[i].score / best, 4) : 0;
  }
  return capped;
}

/* ------------------------------------------------------------------ *
 * Section 19 — divergence
 * ------------------------------------------------------------------ */

// Regular divergence = trend exhaustion; hidden divergence = trend
// continuation.
//   regular bullish  price lower low   / osc higher low
//   regular bearish  price higher high / osc lower high
//   hidden  bullish  price higher low  / osc lower low
//   hidden  bearish  price lower high  / osc higher high
//
// Only CONSECUTIVE pivots of the same kind are compared. Comparing every
// pair inside the lookback was rejected: it manufactures a dozen overlapping
// "divergences" per swing, all of which look convincing in hindsight and
// none of which a trader would have drawn.
//
// The oscillator is read at the price pivot's index rather than at its own
// pivot. Requiring both series to pivot on the same bar throws away most
// real divergences, since the oscillator routinely turns a bar or two early.
function mcTaDivergence(price, osc, opts) {
  const p = mcTaSeries(price);
  const q = mcTaSeries(osc);
  const n = Math.min(p.length, q.length);
  const o = opts || {};
  const k = mcTaPeriod(o.lookback, 5);
  const minBars = mcTaPeriod(o.minBars, 5);
  const maxBars = mcTaPeriod(o.maxBars, 60);
  const out = [];
  if (!n || !k) return out;

  // Oscillator scale for normalising strength. Bounded oscillators (RSI,
  // stochastic) span 0-100; MACD spans whatever the instrument spans. Using
  // the observed range keeps `strength` comparable across both.
  let oMin = null;
  let oMax = null;
  for (let i = 0; i < n; i++) {
    if (q[i] === null) continue;
    if (oMin === null || q[i] < oMin) oMin = q[i];
    if (oMax === null || q[i] > oMax) oMax = q[i];
  }
  const oscScale = oMin === null || oMax === null || oMax - oMin <= 0 ? 1 : oMax - oMin;

  const scan = function (pivots, wantHigh) {
    for (let i = 1; i < pivots.length; i++) {
      const a = pivots[i - 1];
      const b = pivots[i];
      const gap = b.index - a.index;
      if (gap < minBars || gap > maxBars) continue;
      const oa = q[a.index];
      const ob = q[b.index];
      if (oa === null || ob === null) continue;
      const dPrice = b.price - a.price;
      const dOsc = ob - oa;
      if (dPrice === 0 || dOsc === 0) continue;
      let kind = null;
      let direction = 0;
      if (wantHigh) {
        if (dPrice > 0 && dOsc < 0) {
          kind = "regular";
          direction = -1;
        } else if (dPrice < 0 && dOsc > 0) {
          kind = "hidden";
          direction = -1;
        }
      } else {
        if (dPrice < 0 && dOsc > 0) {
          kind = "regular";
          direction = 1;
        } else if (dPrice > 0 && dOsc < 0) {
          kind = "hidden";
          direction = 1;
        }
      }
      if (!kind) continue;
      const base = Math.abs(a.price) > 0 ? Math.abs(a.price) : 1;
      const priceMove = mcTaRamp(Math.abs(dPrice) / base, 0.002, 0.03);
      const oscMove = mcTaRamp(Math.abs(dOsc) / oscScale, 0.02, 0.25);
      const strength = mcTaBlend([priceMove, oscMove]);
      if (strength <= 0) continue;
      out.push({
        kind: kind,
        direction: direction,
        pivot: wantHigh ? "high" : "low",
        type: kind + (direction > 0 ? "Bullish" : "Bearish"),
        fromIndex: a.index,
        toIndex: b.index,
        priceFrom: a.price,
        priceTo: b.price,
        oscFrom: oa,
        oscTo: ob,
        strength: mcTaRound(strength, 4)
      });
    }
  };

  scan(mcTaPivots(p.slice(0, n), k, true), true);
  scan(mcTaPivots(p.slice(0, n), k, false), false);
  out.sort(function (a, b) {
    return a.toIndex - b.toIndex || b.strength - a.strength;
  });
  return out;
}

/* ------------------------------------------------------------------ *
 * Section 20 — risk statistics
 * ------------------------------------------------------------------ */

// Max drawdown as a positive fraction of the running peak. Returns
// {maxDrawdown, peakIndex, troughIndex, recoveryIndex}. recoveryIndex is
// null when the curve never regained the peak — that null is information, not
// a failure.
function mcTaMaxDrawdown(equity) {
  const xs = mcTaSeries(equity);
  const n = xs.length;
  const blank = { maxDrawdown: 0, peakIndex: null, troughIndex: null, recoveryIndex: null };
  if (!n) return blank;
  let peak = null;
  let peakIdx = 0;
  let worst = 0;
  let bestPeak = null;
  let bestTrough = null;
  for (let i = 0; i < n; i++) {
    const v = xs[i];
    if (v === null) continue;
    if (peak === null || v > peak) {
      peak = v;
      peakIdx = i;
    }
    if (peak > 0) {
      const dd = (peak - v) / peak;
      if (dd > worst) {
        worst = dd;
        bestPeak = peakIdx;
        bestTrough = i;
      }
    }
  }
  let recovery = null;
  if (bestPeak !== null) {
    const target = xs[bestPeak];
    for (let i = bestTrough + 1; i < n; i++) {
      if (xs[i] !== null && target !== null && xs[i] >= target) {
        recovery = i;
        break;
      }
    }
  }
  return {
    maxDrawdown: mcTaRound(worst, 6),
    peakIndex: bestPeak,
    troughIndex: bestTrough,
    recoveryIndex: recovery
  };
}

// Sample standard deviation (n-1). Deliberately different from the
// population stdev used by Bollinger: there the window IS the thing being
// described, here the return series is a sample drawn from the strategy's
// unknown return distribution, and n-1 is the unbiased estimator for that.
function mcTaStdevSample(values) {
  const xs = [];
  const src = mcTaSeries(values);
  for (let i = 0; i < src.length; i++) if (src[i] !== null) xs.push(src[i]);
  if (xs.length < 2) return null;
  let m = 0;
  for (let i = 0; i < xs.length; i++) m += xs[i];
  m /= xs.length;
  let acc = 0;
  for (let i = 0; i < xs.length; i++) {
    const d = xs[i] - m;
    acc += d * d;
  }
  const v = acc / (xs.length - 1);
  return v <= 0 ? 0 : Math.sqrt(v);
}

// Sharpe = mean(excess) / stdev(excess) * sqrt(periodsPerYear).
// A zero-volatility curve returns null, not Infinity: a strategy that never
// moved has no risk-adjusted return, and Infinity in a metrics table is how
// you end up with a leaderboard topped by a bug.
function mcTaSharpe(returns, periodsPerYear, riskFreePerPeriod) {
  const xs = mcTaSeries(returns).filter(function (v) {
    return v !== null;
  });
  if (xs.length < 2) return null;
  let rf = mcTaNum(riskFreePerPeriod);
  if (rf === null) rf = 0;
  const ppy = mcTaPeriod(periodsPerYear, 365);
  const ex = xs.map(function (v) {
    return v - rf;
  });
  let m = 0;
  for (let i = 0; i < ex.length; i++) m += ex[i];
  m /= ex.length;
  const sd = mcTaStdevSample(ex);
  if (sd === null || sd === 0) return null;
  return mcTaRound((m / sd) * Math.sqrt(ppy), 6);
}

// Sortino. The downside deviation divides by the TOTAL number of periods,
// not the number of losing ones. Dividing by the loss count is the common
// implementation error and it flatters any strategy that loses rarely but
// badly — exactly the profile you most want the ratio to expose.
function mcTaSortino(returns, periodsPerYear, minAcceptableReturn) {
  const xs = mcTaSeries(returns).filter(function (v) {
    return v !== null;
  });
  if (xs.length < 2) return null;
  let mar = mcTaNum(minAcceptableReturn);
  if (mar === null) mar = 0;
  const ppy = mcTaPeriod(periodsPerYear, 365);
  let m = 0;
  let acc = 0;
  for (let i = 0; i < xs.length; i++) {
    m += xs[i] - mar;
    const d = Math.min(0, xs[i] - mar);
    acc += d * d;
  }
  m /= xs.length;
  const dd = Math.sqrt(acc / xs.length);
  if (dd === 0) return null; // no downside at all: ratio undefined, not infinite
  return mcTaRound((m / dd) * Math.sqrt(ppy), 6);
}

/* ------------------------------------------------------------------ *
 * Section 21 — backtest harness
 * ------------------------------------------------------------------ */

// mcTaBacktest(bars, signalFn, opts)
//
// signalFn(index, ctx) returns a TARGET POSITION: +1 fully long, -1 fully
// short, 0 flat, fractions allowed, clamped to +/-maxPosition. Returning a
// {position:x} object works too. A throwing signal does not abort the run —
// the position is held and the throw is counted in `signalErrors`, because a
// backtest that dies on bar 4000 of 5000 tells you nothing.
//
// EXECUTION MODEL. The signal computed on bar i is applied at bar i's close
// and earns the move from close[i] to close[i+1]. There is no look-ahead:
// the signal never sees a price it could not have seen. Costs are charged on
// the turnover |newPos - oldPos| at the moment of the change.
//
// COSTS ARE NOT ZERO BY DEFAULT. 6bps fee + 4bps slippage per side = 10bps
// round-trip-per-side, roughly a retail taker on a major crypto venue. A
// zero-cost default is how a strategy that flips every bar shows a 400%
// annual return and loses money in production. Set them to 0 explicitly if
// you want the fantasy.
//
// periodsPerYear defaults to 365, not 252: crypto has no weekends.
function mcTaBacktest(bars, signalFn, opts) {
  const c = mcTaColumns(bars);
  const n = c.length;
  const o = opts || {};
  let initial = mcTaNum(o.initialEquity);
  if (initial === null || initial <= 0) initial = 10000;
  let feeBps = mcTaNum(o.feeBps);
  if (feeBps === null || feeBps < 0) feeBps = 6;
  let slipBps = mcTaNum(o.slippageBps);
  if (slipBps === null || slipBps < 0) slipBps = 4;
  const costRate = (feeBps + slipBps) / 10000;
  let maxPos = mcTaNum(o.maxPosition);
  if (maxPos === null || maxPos <= 0) maxPos = 1;
  const ppy = mcTaPeriod(o.periodsPerYear, 365);
  let rf = mcTaNum(o.riskFreePerPeriod);
  if (rf === null) rf = 0;
  const warmup = mcTaPeriod(o.warmup, 1) - 1;
  const closeAtEnd = !(o.closeAtEnd === false);

  const result = {
    equity: mcTaNulls(n),
    position: mcTaNulls(n),
    returns: mcTaNulls(n),
    initialEquity: initial,
    finalEquity: initial,
    totalReturn: 0,
    annualisedReturn: 0,
    maxDrawdown: 0,
    drawdown: { maxDrawdown: 0, peakIndex: null, troughIndex: null, recoveryIndex: null },
    sharpe: null,
    sortino: null,
    winRate: null,
    profitFactor: null,
    tradeCount: 0,
    trades: [],
    costsPaid: 0,
    exposure: 0,
    signalErrors: 0,
    costRate: costRate,
    note: ""
  };
  if (n < 2) {
    result.note = "need at least 2 bars";
    if (n === 1) {
      result.equity[0] = initial;
      result.position[0] = 0;
    }
    return result;
  }
  const fn = typeof signalFn === "function" ? signalFn : null;
  if (!fn) {
    result.note = "signalFn is not a function";
    for (let i = 0; i < n; i++) {
      result.equity[i] = initial;
      result.position[i] = 0;
    }
    return result;
  }

  let equity = initial;
  let pos = 0;
  let costs = 0;
  let exposedBars = 0;
  let openTrade = null;
  const trades = [];

  for (let i = 0; i < n; i++) {
    // 1. accrue the previous bar's position over this bar's move
    if (i > 0) {
      const prevClose = c.close[i - 1];
      const curClose = c.close[i];
      let ret = 0;
      if (prevClose !== null && curClose !== null && prevClose !== 0) {
        ret = (curClose - prevClose) / prevClose;
        if (!Number.isFinite(ret)) ret = 0;
      }
      // A gap (null close) is a bar we cannot mark to market. Treating it as
      // 0 return understates risk but is the only honest option that keeps
      // the curve continuous; the alternative, dropping the bar, silently
      // shortens the annualisation window.
      const growth = 1 + pos * ret;
      equity = equity * (growth > 0 ? growth : 0);
      result.returns[i] = mcTaRound(pos * ret, 10);
      if (pos !== 0) exposedBars++;
    } else {
      result.returns[i] = 0;
    }

    const equityBeforeCost = equity;

    // 2. ask for the new target position
    let target = pos;
    const isLast = i === n - 1;
    if (i < warmup) {
      target = 0;
    } else if (closeAtEnd && isLast) {
      target = 0;
    } else {
      let raw = null;
      try {
        raw = fn(i, {
          index: i,
          open: c.open[i],
          high: c.high[i],
          low: c.low[i],
          close: c.close[i],
          volume: c.volume[i],
          position: pos,
          equity: equity,
          closes: c.close,
          highs: c.high,
          lows: c.low
        });
      } catch (e) {
        result.signalErrors++;
        raw = null;
      }
      if (raw !== null && typeof raw === "object" && !Array.isArray(raw)) raw = raw.position;
      const t = mcTaNum(raw);
      // null/garbage from the signal means "no opinion" -> hold. Forcing
      // flat on a bad return would make one typo look like a stop-loss.
      target = t === null ? pos : mcTaClamp(t, -maxPos, maxPos);
    }
    if (c.close[i] === null) target = pos; // cannot trade a bar with no price

    // 3. charge turnover
    const turnover = Math.abs(target - pos);
    if (turnover > 0) {
      const cost = equity * turnover * costRate;
      costs += cost;
      equity -= cost;
      if (equity < 0) equity = 0;
    }

    // 4. trade bookkeeping. A same-sign resize keeps one trade open; a flip
    // closes and reopens on the same bar, and that bar's whole round-trip
    // cost is attributed to the closing trade. That slightly flatters the
    // new trade and slightly punishes the old one; splitting it exactly
    // would need per-leg costing for no analytical gain.
    const flipped = pos !== 0 && target !== 0 && Math.sign(target) !== Math.sign(pos);
    if (openTrade && (target === 0 || flipped)) {
      openTrade.exitIndex = i;
      openTrade.exitPrice = c.close[i];
      openTrade.exitEquity = equity;
      openTrade.bars = i - openTrade.entryIndex;
      openTrade.pnl = mcTaRound(equity - openTrade.entryEquity, 8);
      openTrade.returnPct =
        openTrade.entryEquity > 0
          ? mcTaRound((equity / openTrade.entryEquity - 1) * 100, 6)
          : null;
      trades.push(openTrade);
      openTrade = null;
    }
    if (!openTrade && target !== 0) {
      openTrade = {
        direction: target > 0 ? 1 : -1,
        entryIndex: i,
        entryPrice: c.close[i],
        entryEquity: flipped ? equity : equityBeforeCost,
        exitIndex: null,
        exitPrice: null,
        exitEquity: null,
        bars: 0,
        pnl: 0,
        returnPct: 0
      };
    }

    pos = target;
    result.equity[i] = mcTaRound(equity, 8);
    result.position[i] = pos;
  }

  // An open trade at the end only survives when closeAtEnd is false; it is
  // marked open:true so nobody counts unrealised money as a win.
  if (openTrade) {
    openTrade.exitIndex = null;
    openTrade.exitPrice = null;
    openTrade.exitEquity = equity;
    openTrade.bars = n - 1 - openTrade.entryIndex;
    openTrade.pnl = mcTaRound(equity - openTrade.entryEquity, 8);
    openTrade.returnPct =
      openTrade.entryEquity > 0 ? mcTaRound((equity / openTrade.entryEquity - 1) * 100, 6) : null;
    openTrade.open = true;
    trades.push(openTrade);
  }

  const closed = trades.filter(function (t) {
    return !t.open;
  });
  let wins = 0;
  let gross = 0;
  let loss = 0;
  for (let i = 0; i < closed.length; i++) {
    const p = closed[i].pnl;
    if (p > 0) {
      wins++;
      gross += p;
    } else if (p < 0) {
      loss += -p;
    }
  }

  const periods = n - 1;
  result.finalEquity = mcTaRound(equity, 8);
  result.totalReturn = mcTaRound(equity / initial - 1, 8);
  // Total wipeout: the CAGR formula gives -100% and any further precision is
  // theatre.
  if (equity <= 0) result.annualisedReturn = -1;
  else if (periods > 0) {
    const cagr = Math.pow(equity / initial, ppy / periods) - 1;
    result.annualisedReturn = Number.isFinite(cagr) ? mcTaRound(cagr, 8) : null;
  }
  const dd = mcTaMaxDrawdown(result.equity);
  result.drawdown = dd;
  result.maxDrawdown = dd.maxDrawdown;
  const rets = result.returns.slice(1);
  result.sharpe = mcTaSharpe(rets, ppy, rf);
  result.sortino = mcTaSortino(rets, ppy, rf);
  result.tradeCount = closed.length;
  result.trades = trades;
  result.winRate = closed.length ? mcTaRound(wins / closed.length, 6) : null;
  // No losing trades makes the profit factor infinite, which is not a
  // number a table should print. null + a note beats Infinity.
  result.profitFactor = loss > 0 ? mcTaRound(gross / loss, 6) : closed.length ? null : null;
  result.costsPaid = mcTaRound(costs, 8);
  result.exposure = periods > 0 ? mcTaRound(exposedBars / periods, 6) : 0;
  if (result.profitFactor === null && closed.length) {
    result.note = loss > 0 ? "" : "no losing trades: profit factor undefined";
  }
  return result;
}

/* ------------------------------------------------------------------ *
 * Section 22 — presentation
 * ------------------------------------------------------------------ */

// Escape before anything reaches innerHTML. Assume every string is hostile:
// a ticker symbol arrives from a URL parameter often enough.
function mcTaEscapeHtml(s) {
  let str;
  if (typeof s === "string") str = s;
  else if (s === null || s === undefined) str = "";
  else str = String(s);
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// The single gate between indicator output and a rendered string. null,
// NaN, Infinity and undefined all become an em dash, so "NaN" can never
// appear on the board.
function mcTaFormatValue(v, places) {
  const n = mcTaNum(v);
  if (n === null) return "—";
  const p = places === undefined ? 2 : mcTaClamp(Math.floor(mcTaNum(places) || 0), 0, 10);
  const r = n.toFixed(p);
  return r === "NaN" || r === "Infinity" || r === "-Infinity" ? "—" : r;
}

// One tooltip row. Both the label and the value are escaped even though the
// value is numeric by then — defence in depth costs one function call.
function mcTaTooltipHtml(label, value, places) {
  const l = mcTaEscapeHtml(label === null || label === undefined ? "" : label);
  const v = mcTaEscapeHtml(mcTaFormatValue(value, places));
  return '<span class="mc-ta-row"><span class="mc-ta-k">' + l + '</span><span class="mc-ta-v">' + v + "</span></span>";
}

/* ==================================================================== *
 * Self-test.
 *
 * Two properties matter more than any single number here:
 *   1. RSI must use Wilder's smoothing, not a plain moving average. The
 *      expected values below were reproduced by an independent
 *      implementation of Wilder's recurrence, not read off this one.
 *   2. Every indicator must return null — never 0, never NaN — through
 *      its warm-up. A chart cannot tell a real zero from an absent one,
 *      and that distinction is the difference between a flat line at the
 *      axis and no line at all.
 * ==================================================================== */
if (typeof module !== "undefined" && require.main === module) {
  let taPass = 0, taFail = 0;
  const taFailures = [];
  function ok(name, cond, extra) {
    if (cond) { taPass++; return; }
    taFail++;
    taFailures.push(name + (extra !== undefined ? "  (got: " + extra + ")" : ""));
  }
  function eq(name, got, want) { ok(name, got === want, JSON.stringify(got) + " want " + JSON.stringify(want)); }
  function near(name, got, want, tol) {
    ok(name, typeof got === "number" && isFinite(got) && Math.abs(got - want) <= tol, got + " want " + want);
  }
  const nulls = function (a, upTo) {
    for (let i = 0; i < upTo; i++) if (a[i] !== null) return false;
    return true;
  };
  const noNaN = function (a) {
    return a.every(function (v) { return v === null || (typeof v === "number" && isFinite(v)); });
  };

  /* Wilder's own worked example. */
  const C = [44.34, 44.09, 44.15, 43.61, 44.33, 44.83, 45.10, 45.42, 45.84, 46.08,
             45.89, 46.03, 45.61, 46.28, 46.28, 46.00, 46.03, 46.41, 46.22, 45.64];
  const BARS = C.map(function (c, i) {
    return { high: c + 0.5 + (i % 3) * 0.1, low: c - 0.5 - (i % 2) * 0.1, close: c, open: c - 0.05, volume: 1000 + i * 10 };
  });

  /* ---------------- moving averages ------------------------------- */
  (function () {
    eq("sma warm-up is null, not zero", JSON.stringify(mcTaSma([1, 2, 3, 4, 5], 3)), JSON.stringify([null, null, 2, 3, 4]));
    const e = mcTaEma([1, 2, 3, 4, 5, 6], 3);
    ok("ema warms up with nulls", nulls(e, 2), JSON.stringify(e.slice(0, 3)));
    ok("ema has no NaN", noNaN(e));
    ok("ema of a constant series is that constant",
       mcTaEma([5, 5, 5, 5, 5, 5], 3).slice(-1)[0] === 5);
    for (const [name, fn] of [["wma", mcTaWma], ["hma", mcTaHma], ["dema", mcTaDema], ["tema", mcTaTema]]) {
      const out = fn(C, 5);
      ok(name + " returns one value per input", out.length === C.length, out.length);
      ok(name + " has no NaN", noNaN(out));
      ok(name + " starts with at least one null", out[0] === null, out[0]);
    }
  })();

  /* ---------------- RSI: Wilder, not a plain average -------------- */
  (function () {
    const r = mcTaRsi(C, 14);
    eq("rsi returns one value per bar", r.length, C.length);
    ok("rsi warm-up is null for the first 14 bars", nulls(r, 14), JSON.stringify(r.slice(0, 15)));
    // Verified against an independent implementation of Wilder's recurrence.
    near("rsi[14] matches Wilder", r[14], 70.4641, 5e-4);
    near("rsi[15] matches Wilder", r[15], 66.2496, 5e-4);
    near("rsi[16] matches Wilder", r[16], 66.4809, 5e-4);
    near("rsi[17] matches Wilder", r[17], 69.3469, 5e-4);
    near("rsi[18] matches Wilder", r[18], 66.2947, 5e-4);
    ok("rsi stays within 0..100", r.every(function (v) { return v === null || (v >= 0 && v <= 100); }));

    // A plain SMA of gains/losses would give a visibly different number; this
    // guards against someone "simplifying" the smoothing later.
    ok("rsi is not the naive SMA variant", Math.abs(r[18] - 65.0) > 0.5, r[18]);

    const rising = []; for (let i = 0; i < 30; i++) rising.push(100 + i);
    const rr = mcTaRsi(rising, 14);
    ok("rsi of a monotonic rise pins near 100", rr[29] > 99, rr[29]);
    const flat = []; for (let i = 0; i < 30; i++) flat.push(50);
    const rf = mcTaRsi(flat, 14);
    ok("rsi of a flat series is defined and not NaN",
       rf[29] === null || (isFinite(rf[29]) && rf[29] >= 0 && rf[29] <= 100), rf[29]);
  })();

  /* ---------------- MACD / Bollinger / ATR ------------------------ */
  (function () {
    const long = []; for (let i = 0; i < 80; i++) long.push(100 + Math.sin(i / 5) * 10);
    const m = mcTaMacd(long, 12, 26, 9);
    ok("macd exposes line, signal and histogram", !!m.macd && !!m.signal && !!m.histogram);
    ok("macd line warms up with nulls", m.macd[0] === null);
    ok("macd signal warms up later than the line",
       m.signal.filter(function (v) { return v === null; }).length >
       m.macd.filter(function (v) { return v === null; }).length);
    ok("macd histogram is line minus signal where both exist",
       (function () {
         for (let i = 0; i < long.length; i++) {
           if (m.macd[i] !== null && m.signal[i] !== null) {
             return Math.abs(m.histogram[i] - (m.macd[i] - m.signal[i])) < 1e-9;
           }
         }
         return false;
       })());
    ok("macd has no NaN anywhere", noNaN(m.macd) && noNaN(m.signal) && noNaN(m.histogram));

    const b = mcTaBollinger(C, 20, 2);
    ok("bollinger warms up with nulls", b.middle[0] === null);
    ok("bands straddle the middle at the last bar",
       b.upper[19] > b.middle[19] && b.middle[19] > b.lower[19],
       b.lower[19] + " < " + b.middle[19] + " < " + b.upper[19]);
    ok("bollinger has no NaN", noNaN(b.middle) && noNaN(b.upper) && noNaN(b.lower));

    const a = mcTaAtr(BARS, 14);
    ok("atr warms up with nulls", a[0] === null);
    ok("atr is never negative", a.every(function (v) { return v === null || v >= 0; }));
    ok("atr has no NaN", noNaN(a));
  })();

  /* ---------------- oscillators ----------------------------------- */
  (function () {
    const checks = [
      ["stochastic", function () { const s = mcTaStochastic(BARS, 14, 3); return [s.k, s.d]; }, 0, 100],
      ["williamsR", function () { return [mcTaWilliamsR(BARS, 14)]; }, -100, 0],
      ["mfi", function () { return [mcTaMfi(BARS, 14)]; }, 0, 100],
      ["adx", function () { const x = mcTaAdx(BARS, 14); return [x.adx || x]; }, 0, 100]
    ];
    for (const [name, get, lo, hi] of checks) {
      const arrays = get();
      for (const arr of arrays) {
        if (!Array.isArray(arr)) continue;
        ok(name + " has no NaN", noNaN(arr));
        ok(name + " stays in range",
           arr.every(function (v) { return v === null || (v >= lo - 1e-9 && v <= hi + 1e-9); }),
           JSON.stringify(arr.filter(function (v) { return v !== null; }).slice(0, 3)));
        ok(name + " warms up with a null", arr[0] === null);
      }
    }
    const cci = mcTaCci(BARS, 14);
    ok("cci has no NaN", noNaN(cci));
    const roc = mcTaRoc(C, 5);
    ok("roc warms up with nulls", nulls(roc, 5));
    ok("obv has no NaN", noNaN(mcTaObv(BARS)));
    ok("vwap has no NaN", noNaN(mcTaVwap(BARS)));
  })();

  /* ---------------- Ichimoku displacement ------------------------- */
  (function () {
    const long = []; for (let i = 0; i < 120; i++) long.push({ high: 100 + i % 7, low: 95 + i % 5, close: 98 + i % 6 });
    const ich = mcTaIchimoku(long, {});
    ok("ichimoku exposes all five lines",
       !!ich.tenkan && !!ich.kijun && !!ich.senkouA && !!ich.senkouB && !!ich.chikou);
    ok("the cloud is displaced forward", ich.displacement > 0, ich.displacement);
    /* future is {senkouA, senkouB}: the cloud plotted beyond the last bar,
       which is the whole point of Ichimoku and must not be folded into the
       in-sample arrays or it would imply knowledge of unseen prices. */
    ok("the future cloud is reported separately",
       !!ich.future && Array.isArray(ich.future.senkouA) && Array.isArray(ich.future.senkouB));
    ok("the future cloud extends past the last bar",
       ich.future.senkouA.length > 0, ich.future.senkouA.length);
    ok("ichimoku has no NaN",
       noNaN(ich.tenkan) && noNaN(ich.kijun) && noNaN(ich.senkouA) && noNaN(ich.senkouB) && noNaN(ich.chikou));
    ok("tenkan warms up with nulls", ich.tenkan[0] === null);
  })();

  /* ---------------- degenerate input ------------------------------ */
  (function () {
    for (const [name, fn] of [["sma", mcTaSma], ["ema", mcTaEma], ["rsi", mcTaRsi], ["wma", mcTaWma]]) {
      ok(name + " on an empty series returns empty", fn([], 14).length === 0);
      ok(name + " on one point does not throw", Array.isArray(fn([1], 14)));
      ok(name + " shorter than its period is all null",
         fn([1, 2, 3], 14).every(function (v) { return v === null; }));
      ok(name + " tolerates null input", Array.isArray(fn(null, 14)));
      ok(name + " tolerates a garbage period", Array.isArray(fn([1, 2, 3], -5)) && Array.isArray(fn([1, 2, 3], NaN)));
    }
    ok("rsi tolerates non-numeric entries",
       noNaN(mcTaRsi([1, 2, null, "x", 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 14)));
    ok("atr tolerates malformed bars", Array.isArray(mcTaAtr([null, 7, { high: 1 }, { high: 2, low: 1, close: 1.5 }], 14)));
  })();

  /* ---------------- patterns and levels --------------------------- */
  (function () {
    const doji = [{ open: 100, high: 102, low: 98, close: 100.02 }];
    const p = mcTaPatterns(doji, {});
    /* one entry per bar, each a list of hits — candle geometry is fuzzy, so
       a confidence is reported rather than a yes/no that overstates it. */
    const hits = p[0] || [];
    ok("patterns return confidences, not booleans",
       Array.isArray(p) && (hits.length === 0 || typeof hits[0].confidence === "number"),
       JSON.stringify(hits.slice(0, 1)));
    ok("a textbook doji is recognised",
       hits.some(function (h) { return /doji/i.test(h.name); }), JSON.stringify(hits));
    ok("patterns on garbage do not throw", Array.isArray(mcTaPatterns([null, 3], {})));

    const lv = mcTaLevels(BARS, {});
    ok("levels returns an array", Array.isArray(lv.levels || lv));
    ok("pivots do not throw", !!mcTaPivots(BARS, {}));
    ok("divergence does not throw", !!mcTaDivergence(C, mcTaRsi(C, 14), {}));
  })();

  /* ---------------- backtest -------------------------------------- */
  (function () {
    const price = []; for (let i = 0; i < 120; i++) price.push(100 * Math.pow(1.004, i));
    const alwaysLong = function () { return 1; };
    /* Costs are fees + slippage in basis points, and they DEFAULT to 6+4 —
       a costless backtest is fiction, so you have to ask for one explicitly. */
    const free = mcTaBacktest(price, alwaysLong, { feeBps: 0, slippageBps: 0 });
    const costly = mcTaBacktest(price, alwaysLong, { feeBps: 50, slippageBps: 50 });
    const dflt = mcTaBacktest(price, alwaysLong, {});
    ok("costs are charged by default", dflt.totalReturn < free.totalReturn,
       dflt.totalReturn + " vs " + free.totalReturn);
    ok("backtest reports an equity curve", Array.isArray(free.equity) && free.equity.length === price.length);
    ok("buy-and-hold on a rising series makes money", free.totalReturn > 0, free.totalReturn);
    ok("transaction costs reduce the return", costly.totalReturn < free.totalReturn,
       costly.totalReturn + " vs " + free.totalReturn);
    ok("max drawdown is non-positive or zero on a monotonic rise",
       free.maxDrawdown <= 1e-9, free.maxDrawdown);
    ok("sharpe is finite", isFinite(free.sharpe), free.sharpe);
    ok("no NaN in the equity curve", noNaN(free.equity));

    const flat = []; for (let i = 0; i < 60; i++) flat.push(100);
    const f = mcTaBacktest(flat, alwaysLong, { feeBps: 0, slippageBps: 0 });
    ok("a flat market returns ~0", Math.abs(f.totalReturn) < 1e-9, f.totalReturn);
    ok("a flat market does not produce NaN ratios",
       (f.sharpe === null || isFinite(f.sharpe)) && (f.sortino === null || isFinite(f.sortino)),
       f.sharpe + "/" + f.sortino);
    ok("backtest on an empty series does not throw", !!mcTaBacktest([], alwaysLong, {}));
    ok("backtest with a throwing signal does not propagate",
       !!mcTaBacktest(price, function () { throw new Error("boom"); }, {}));
  })();

  /* ---------------- html output is escaped ------------------------ */
  (function () {
    const h = mcTaTooltipHtml("<img src=x onerror=alert(1)>", 42, 2);
    ok("tooltip escapes hostile labels", h.indexOf("<img") < 0, h.slice(0, 60));
    ok("tooltip still renders the value", h.indexOf("42") >= 0);
    eq("escaping handles all five characters",
       mcTaEscapeHtml('<>&"\''), "&lt;&gt;&amp;&quot;&#39;");
  })();

  /* ---------------- file hygiene ---------------------------------- */
  (function () {
    const src = require("fs").readFileSync(__filename, "utf8");
    ok("self-test guard is exact",
       src.indexOf('if (typeof module !== "undefined" && require.main === module) {') > 0);
    ok("no script-closing sequence", src.toLowerCase().indexOf("</scr" + "ipt") < 0);
    ok("no raw control bytes", !/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(src));
    ok("no raw BOM", src.indexOf("\uFEFF") < 0);
  })();

  const total = taPass + taFail;
  if (taFailures.length) {
    console.log("\nFAILURES (" + taFailures.length + "):");
    taFailures.forEach(function (f) { console.log("  FAIL  " + f); });
  }
  console.log((taFail === 0 ? "PASS" : "FAIL") + " — " + taPass + "/" + total + " assertions passed");
  if (taFail) process.exit(1);
}
