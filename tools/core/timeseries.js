/* ====================================================================
   mcTs — time-series analysis for a live news wire and price series.

   Two things drive almost every design decision in here.

   1. A news wire does not arrive on a clock. Stories land in bursts with
      long quiet stretches between them, so every function either handles
      irregular timestamps or refuses them out loud. Nothing silently
      pretends the spacing is uniform, because that assumption turns a
      quiet night into a trend.

   2. An empty bucket is a GAP, not a zero. "No stories arrived between
      3am and 4am" and "zero is the measured value" are different facts,
      and collapsing them is how a forecaster learns that the wire dies
      every night. Resampling therefore emits null for an empty bucket
      and every downstream function knows what null means.

   Companion to ta.js (prefix mcTa), which owns trading indicators. This
   module owns forecasting, decomposition and anomaly detection, and
   deliberately does not re-implement moving averages that ta.js has.
   ==================================================================== */

var mcTsMIN_SEASONS = 2;      /* below two full periods, seasonality is a guess */
var mcTsMIN_POINTS = 4;       /* below this, "forecast" means "repeat the last value" */

function mcTsNum(v, dflt) {
  if (typeof v === "number" && isFinite(v)) return v;
  if (typeof v === "string" && v.trim() !== "") {
    var n = Number(v);
    if (isFinite(n)) return n;
  }
  return dflt === undefined ? null : dflt;
}

function mcTsIsGap(v) { return v === null || v === undefined || (typeof v === "number" && !isFinite(v)); }

/* Strip to a clean numeric array, preserving gaps as null. */
function mcTsSeries(input) {
  if (!Array.isArray(input)) return [];
  var out = new Array(input.length);
  for (var i = 0; i < input.length; i++) {
    var v = input[i];
    if (v && typeof v === "object") v = v.value !== undefined ? v.value : v.y;
    var n = mcTsNum(v, null);
    out[i] = n === null ? null : n;
  }
  return out;
}

/* Values only, gaps dropped. For statistics where a gap contributes nothing. */
function mcTsDense(series) {
  var out = [];
  for (var i = 0; i < series.length; i++) if (!mcTsIsGap(series[i])) out.push(series[i]);
  return out;
}

function mcTsMean(a) {
  if (!a.length) return null;
  var s = 0;
  for (var i = 0; i < a.length; i++) s += a[i];
  return s / a.length;
}

function mcTsStdev(a, sample) {
  var n = a.length;
  if (n < (sample ? 2 : 1)) return null;
  var m = mcTsMean(a), s = 0;
  for (var i = 0; i < n; i++) { var d = a[i] - m; s += d * d; }
  return Math.sqrt(s / (sample ? n - 1 : n));
}

function mcTsMedian(a) {
  if (!a.length) return null;
  var s = a.slice().sort(function (x, y) { return x - y; });
  var m = s.length >> 1;
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

/* --------------------------------------------------------------------
   Resampling: irregular timestamps -> fixed buckets.

   Returns { points:[{t, value, count}], gaps, unit, size, covered }.
   `value` is null for an empty bucket. That is the whole point: a caller
   that wants zeros can map them, but it has to say so.
   -------------------------------------------------------------------- */
function mcTsResample(docs, opts) {
  var o = opts || {};
  var agg = o.agg || "count";
  var rows = [];
  if (Array.isArray(docs)) {
    for (var i = 0; i < docs.length; i++) {
      var d = docs[i];
      if (!d) continue;
      var t = typeof d === "object" ? mcTsNum(d.t !== undefined ? d.t : d.time, null) : null;
      if (t === null) continue;
      var v = typeof d === "object" && d.value !== undefined ? mcTsNum(d.value, null) : 1;
      rows.push({ t: t, v: v });
    }
  }
  var empty = { points: [], gaps: 0, unit: "none", size: 0, covered: 0, n: 0 };
  if (!rows.length) return empty;
  rows.sort(function (a, b) { return a.t - b.t; });

  var from = mcTsNum(o.from, rows[0].t);
  var to = mcTsNum(o.to, rows[rows.length - 1].t);
  var size = mcTsNum(o.size, null);
  if (size === null || size <= 0) {
    var span = Math.max(1, to - from);
    var want = Math.max(4, Math.min(60, Math.round(mcTsNum(o.buckets, 24))));
    size = Math.max(1000, Math.round(span / want));
  }
  var nB = Math.max(1, Math.ceil((to - from + 1) / size));
  if (nB > 5000) { size = Math.ceil((to - from + 1) / 5000); nB = 5000; }

  var acc = [];
  for (var b = 0; b < nB; b++) acc.push([]);
  for (var r = 0; r < rows.length; r++) {
    var idx = Math.floor((rows[r].t - from) / size);
    if (idx < 0) idx = 0;
    if (idx >= nB) idx = nB - 1;
    acc[idx].push(rows[r].v);
  }

  var pts = [], gaps = 0;
  for (var k = 0; k < nB; k++) {
    var vals = acc[k];
    var value = null;
    if (vals.length === 0) {
      gaps++;                     /* stays null — a gap is not a zero */
      if (agg === "count") value = 0;   /* except for counts, where zero IS measured */
    } else if (agg === "count") value = vals.length;
    else if (agg === "sum") { value = 0; for (var q = 0; q < vals.length; q++) value += vals[q]; }
    else if (agg === "mean") value = mcTsMean(vals);
    else if (agg === "max") value = Math.max.apply(null, vals);
    else if (agg === "min") value = Math.min.apply(null, vals);
    else value = vals[vals.length - 1];
    pts.push({ t: from + k * size, value: value, count: vals.length });
  }
  return {
    points: pts, gaps: gaps, size: size, n: rows.length,
    covered: nB ? (nB - gaps) / nB : 0,
    unit: size >= 86400000 ? "day" : size >= 3600000 ? "hour" : size >= 60000 ? "minute" : "second"
  };
}

/* Arrival rate over a trailing window, sampled at each arrival. Honest on
   irregular data because it never assumes a step. */
function mcTsVelocity(times, windowMs) {
  var w = mcTsNum(windowMs, 3600000);
  var t = [];
  for (var i = 0; i < (times || []).length; i++) {
    var v = mcTsNum(typeof times[i] === "object" ? times[i].t : times[i], null);
    if (v !== null) t.push(v);
  }
  t.sort(function (a, b) { return a - b; });
  var out = [], lo = 0;
  for (var j = 0; j < t.length; j++) {
    while (lo < j && t[lo] <= t[j] - w) lo++;
    out.push({ t: t[j], count: j - lo + 1, rate: (j - lo + 1) / (w / 3600000) });
  }
  return out;
}

/* --------------------------------------------------------------------
   Smoothing and decomposition
   -------------------------------------------------------------------- */
function mcTsSma(series, period) {
  var s = mcTsSeries(series), p = Math.max(1, Math.round(mcTsNum(period, 3)));
  var out = new Array(s.length), win = [], sum = 0;
  for (var i = 0; i < s.length; i++) {
    if (!mcTsIsGap(s[i])) { win.push(s[i]); sum += s[i]; }
    while (win.length > p) sum -= win.shift();
    out[i] = win.length === p ? sum / p : null;
  }
  return out;
}

/* Centred moving average — the trend estimate classical decomposition needs.
   Even periods get the half-weight endpoints, which is what makes the window
   symmetric about the point instead of lagging it by half a period. */
function mcTsCentredMa(s, period) {
  var p = Math.max(2, Math.round(period));
  var out = new Array(s.length);
  var half = Math.floor(p / 2);
  for (var i = 0; i < s.length; i++) {
    out[i] = null;
    if (i - half < 0 || i + half >= s.length) continue;
    var sum = 0, w = 0, ok = true;
    for (var k = -half; k <= half; k++) {
      var v = s[i + k];
      if (mcTsIsGap(v)) { ok = false; break; }
      var weight = (p % 2 === 0 && (k === -half || k === half)) ? 0.5 : 1;
      sum += v * weight; w += weight;
    }
    out[i] = ok && w > 0 ? sum / w : null;
  }
  return out;
}

/**
 * mcTsDecompose(series, period, opts) -> { trend, seasonal, residual, ok, reason }
 * Classical additive (default) or multiplicative decomposition.
 */
function mcTsDecompose(series, period, opts) {
  var o = opts || {};
  var s = mcTsSeries(series);
  var p = Math.max(2, Math.round(mcTsNum(period, 0) || 0));
  var out = { trend: [], seasonal: [], residual: [], ok: false, reason: "", period: p,
              mode: o.mode === "multiplicative" ? "multiplicative" : "additive" };
  if (!p || s.length < p * mcTsMIN_SEASONS) {
    out.reason = "need at least " + mcTsMIN_SEASONS + " full periods (" + (p * mcTsMIN_SEASONS) +
                 " points) to separate season from trend; have " + s.length;
    return out;
  }
  var trend = mcTsCentredMa(s, p);
  var detr = new Array(s.length);
  for (var i = 0; i < s.length; i++) {
    detr[i] = (mcTsIsGap(s[i]) || mcTsIsGap(trend[i])) ? null
            : (out.mode === "multiplicative" ? (trend[i] === 0 ? null : s[i] / trend[i]) : s[i] - trend[i]);
  }
  /* Average each phase across periods, then centre so the seasonal
     component adds (or multiplies) to nothing overall — otherwise it
     absorbs part of the level and the trend is biased. */
  var phase = [];
  for (var k = 0; k < p; k++) phase.push([]);
  for (var j = 0; j < detr.length; j++) if (!mcTsIsGap(detr[j])) phase[j % p].push(detr[j]);
  var means = [];
  for (var m = 0; m < p; m++) means.push(phase[m].length ? mcTsMean(phase[m]) : (out.mode === "multiplicative" ? 1 : 0));
  var centre = out.mode === "multiplicative" ? mcTsMean(means) || 1 : mcTsMean(means) || 0;
  for (var c = 0; c < p; c++) means[c] = out.mode === "multiplicative" ? means[c] / centre : means[c] - centre;

  var seasonal = new Array(s.length), resid = new Array(s.length);
  for (var q = 0; q < s.length; q++) {
    seasonal[q] = means[q % p];
    resid[q] = (mcTsIsGap(s[q]) || mcTsIsGap(trend[q])) ? null
             : (out.mode === "multiplicative"
                 ? (trend[q] * seasonal[q] === 0 ? null : s[q] / (trend[q] * seasonal[q]))
                 : s[q] - trend[q] - seasonal[q]);
  }
  out.trend = trend; out.seasonal = seasonal; out.residual = resid; out.ok = true;
  return out;
}

/* --------------------------------------------------------------------
   Autocorrelation and period detection
   -------------------------------------------------------------------- */
function mcTsAcf(series, maxLag) {
  var d = mcTsDense(mcTsSeries(series));
  var n = d.length;
  var lags = Math.max(1, Math.min(Math.round(mcTsNum(maxLag, Math.floor(n / 2))), n - 1));
  if (n < 3) return [];
  var m = mcTsMean(d), denom = 0;
  for (var i = 0; i < n; i++) denom += (d[i] - m) * (d[i] - m);
  if (denom === 0) return [];             /* constant series has no structure */
  var out = [];
  for (var L = 1; L <= lags; L++) {
    var s = 0;
    for (var j = L; j < n; j++) s += (d[j] - m) * (d[j - L] - m);
    out.push({ lag: L, acf: s / denom });
  }
  return out;
}

/**
 * mcTsDetectPeriod(series) -> { period, strength, ok, reason }
 * The first ACF peak that beats its neighbours and clears a noise floor.
 */
function mcTsDetectPeriod(series, opts) {
  var o = opts || {};
  var d = mcTsDense(mcTsSeries(series));
  var res = { period: null, strength: 0, ok: false, reason: "" };
  if (d.length < 8) { res.reason = "only " + d.length + " points; a period needs at least 8"; return res; }
  var acf = mcTsAcf(d, Math.floor(d.length / 2));
  if (!acf.length) { res.reason = "series is constant — nothing to find a period in"; return res; }
  var floor = mcTsNum(o.minStrength, 0.2);
  var best = null;
  for (var i = 1; i < acf.length - 1; i++) {
    var a = acf[i].acf;
    if (a > acf[i - 1].acf && a > acf[i + 1].acf && a >= floor) { best = acf[i]; break; }
  }
  if (!best) { res.reason = "no autocorrelation peak clears " + floor + " — the series looks aperiodic"; return res; }
  res.period = best.lag; res.strength = best.acf; res.ok = true;
  return res;
}

/* --------------------------------------------------------------------
   Forecasting
   -------------------------------------------------------------------- */
function mcTsHolt(d, alpha, beta, h) {
  var level = d[0], trend = d.length > 1 ? d[1] - d[0] : 0;
  var fitted = [null];
  for (var i = 1; i < d.length; i++) {
    var prev = level + trend;
    fitted.push(prev);
    var newLevel = alpha * d[i] + (1 - alpha) * prev;
    trend = beta * (newLevel - level) + (1 - beta) * trend;
    level = newLevel;
  }
  var fc = [];
  for (var k = 1; k <= h; k++) fc.push(level + k * trend);
  return { fitted: fitted, forecast: fc, level: level, trend: trend };
}

function mcTsHoltWinters(d, period, alpha, beta, gamma, h) {
  var p = period;
  var seasons = Math.floor(d.length / p);
  var level = 0, trend = 0;
  for (var i = 0; i < p; i++) level += d[i];
  level /= p;
  for (var j = 0; j < p; j++) trend += (d[p + j] - d[j]) / p;
  trend /= p;
  var seas = [];
  for (var s = 0; s < p; s++) {
    var acc = 0, cnt = 0;
    for (var q = 0; q < seasons; q++) { acc += d[q * p + s]; cnt++; }
    seas.push(cnt ? (acc / cnt) - level : 0);
  }
  var fitted = [];
  for (var k = 0; k < d.length; k++) {
    var idx = k % p;
    var pred = level + trend + seas[idx];
    fitted.push(k < p ? null : pred);
    var newLevel = alpha * (d[k] - seas[idx]) + (1 - alpha) * (level + trend);
    trend = beta * (newLevel - level) + (1 - beta) * trend;
    seas[idx] = gamma * (d[k] - newLevel) + (1 - gamma) * seas[idx];
    level = newLevel;
  }
  var fc = [];
  for (var f = 1; f <= h; f++) fc.push(level + f * trend + seas[(d.length + f - 1) % p]);
  return { fitted: fitted, forecast: fc };
}

/**
 * mcTsForecast(series, opts) -> forecast with prediction intervals AND a
 * skill score against seasonal-naive.
 *
 * The skill score is not decoration. A forecaster that cannot beat "repeat
 * the last season" has learned nothing, and on a short or noisy wire that
 * is the common case. skill <= 0 means the naive baseline was at least as
 * good, and the caller is expected to say so rather than draw a confident
 * line.
 */
function mcTsForecast(series, opts) {
  var o = opts || {};
  var s = mcTsSeries(series);
  var d = mcTsDense(s);
  var h = Math.max(1, Math.min(200, Math.round(mcTsNum(o.horizon, 6))));
  var out = {
    ok: false, reason: "", method: "none", forecast: [], lower: [], upper: [],
    fitted: [], skill: null, baseline: null, rmse: null, period: null, horizon: h
  };

  if (d.length < mcTsMIN_POINTS) {
    out.reason = "only " + d.length + " usable points; below " + mcTsMIN_POINTS +
                 " there is nothing to fit and a forecast would be an invention";
    return out;
  }

  var period = mcTsNum(o.period, null);
  if (period === null) {
    var det = mcTsDetectPeriod(d, {});
    period = det.ok ? det.period : null;
  }
  var seasonal = period !== null && d.length >= period * mcTsMIN_SEASONS && period >= 2;
  out.period = seasonal ? period : null;

  var alpha = mcTsNum(o.alpha, 0.4), beta = mcTsNum(o.beta, 0.15), gamma = mcTsNum(o.gamma, 0.3);
  var model = seasonal ? mcTsHoltWinters(d, period, alpha, beta, gamma, h)
                       : mcTsHolt(d, alpha, beta, h);
  out.method = seasonal ? "holt-winters (additive, period " + period + ")" : "holt (level + trend)";
  out.forecast = model.forecast;
  out.fitted = model.fitted;

  /* In-sample error of the model, and of the baseline it must beat. */
  function rmseOf(fit) {
    var se = 0, n = 0;
    for (var i = 0; i < d.length; i++) {
      if (fit[i] === null || fit[i] === undefined || !isFinite(fit[i])) continue;
      var e = d[i] - fit[i]; se += e * e; n++;
    }
    return n ? Math.sqrt(se / n) : null;
  }
  var naiveFit = [];
  var lag = seasonal ? period : 1;
  for (var i = 0; i < d.length; i++) naiveFit.push(i >= lag ? d[i - lag] : null);

  out.rmse = rmseOf(model.fitted);
  out.baseline = rmseOf(naiveFit);
  if (out.rmse !== null && out.baseline !== null && out.baseline > 0) {
    out.skill = 1 - (out.rmse / out.baseline);
  } else if (out.rmse !== null && out.baseline === 0) {
    out.skill = out.rmse === 0 ? 0 : -1;   /* baseline was perfect; we cannot beat it */
  }

  /* Prediction interval widens with the square root of the horizon — the
     random-walk assumption. Honest for a level+trend model and deliberately
     not narrowed by pretending the residuals are smaller than they are. */
  var sd = out.rmse === null ? 0 : out.rmse;
  var z = mcTsNum(o.z, 1.96);
  for (var k = 0; k < out.forecast.length; k++) {
    var w = z * sd * Math.sqrt(k + 1);
    out.lower.push(out.forecast[k] - w);
    out.upper.push(out.forecast[k] + w);
  }
  out.ok = true;
  out.verdict = out.skill === null ? "no baseline to compare against"
              : out.skill > 0.1 ? "beats seasonal-naive by " + (out.skill * 100).toFixed(0) + "%"
              : out.skill > 0 ? "barely beats the naive baseline — treat it loosely"
              : "does NOT beat repeating the last value; the naive baseline is as good or better";
  return out;
}

/* --------------------------------------------------------------------
   Changepoints and anomalies
   -------------------------------------------------------------------- */

/** CUSUM mean-shift detection. Returns indices with a confidence. */
function mcTsChangepoints(series, opts) {
  var o = opts || {};
  var d = mcTsDense(mcTsSeries(series));
  if (d.length < 8) return [];
  var m = mcTsMean(d), sd = mcTsStdev(d, true);
  if (!sd) return [];                       /* constant series never shifts */
  var k = mcTsNum(o.drift, 0.5) * sd;
  var thresh = mcTsNum(o.threshold, 4) * sd;
  var pos = 0, neg = 0, out = [], last = -Infinity;
  var minGap = Math.max(2, Math.round(mcTsNum(o.minGap, Math.max(3, d.length / 12))));

  /* Self-starting: the reference is the running mean of the CURRENT segment,
     reset at every detection — not the mean of the whole series.
     Against a global mean, any series containing a shift has its first half
     sitting below that mean by construction, so the detector fires "down"
     three times before it ever reaches the real step, and reports the step
     itself late. That is not a sensitivity problem to be tuned away; it is
     the wrong reference. A changepoint is a departure from where the series
     has been *lately*, which is what a segment-local mean measures. */
  var segSum = 0, segN = 0;
  for (var i = 0; i < d.length; i++) {
    var ref = segN > 0 ? segSum / segN : d[i];
    var dev = d[i] - ref;
    pos = Math.max(0, pos + dev - k);
    neg = Math.max(0, neg - dev - k);
    segSum += d[i]; segN++;
    var stat = Math.max(pos, neg);
    if (stat > thresh && i - last >= minGap) {
      out.push({ index: i, direction: pos >= neg ? "up" : "down",
                 magnitude: stat / sd, confidence: Math.min(1, stat / (thresh * 2)) });
      last = i; pos = 0; neg = 0;
      segSum = d[i]; segN = 1;          /* the new level starts here */
    }
  }
  return out;
}

/**
 * mcTsAnomalies(series, opts) -> [{ index, value, score, expected }]
 * Residual-based, using the decomposition when a period exists and a robust
 * modified z-score otherwise. Scores, not booleans: "how unusual" is the
 * useful output, and a hard threshold discards it.
 */
function mcTsAnomalies(series, opts) {
  var o = opts || {};
  var s = mcTsSeries(series);
  var d = mcTsDense(s);
  if (d.length < 6) return [];
  var resid = null, expected = null;
  var det = mcTsDetectPeriod(d, {});
  if (det.ok && d.length >= det.period * mcTsMIN_SEASONS) {
    var dec = mcTsDecompose(d, det.period, {});
    if (dec.ok) {
      resid = dec.residual;
      expected = dec.trend.map(function (t, i) {
        return (mcTsIsGap(t) || mcTsIsGap(dec.seasonal[i])) ? null : t + dec.seasonal[i];
      });
    }
  }
  if (!resid) {
    var med = mcTsMedian(d);
    resid = d.map(function (v) { return v - med; });
    expected = d.map(function () { return med; });
  }
  var clean = mcTsDense(resid);
  if (clean.length < 4) return [];
  /* MAD, not standard deviation: the outliers we are hunting inflate sd and
     then hide inside their own inflated threshold. */
  var rm = mcTsMedian(clean);
  var devs = clean.map(function (v) { return Math.abs(v - rm); });
  var mad = mcTsMedian(devs) || 0;
  var scale = mad > 0 ? mad * 1.4826 : (mcTsStdev(clean, true) || 0);
  if (!scale) return [];
  var min = mcTsNum(o.minScore, 3);
  var out = [];
  for (var i = 0; i < resid.length; i++) {
    if (mcTsIsGap(resid[i])) continue;
    var score = Math.abs(resid[i] - rm) / scale;
    if (score >= min) {
      out.push({ index: i, value: d[i], expected: expected && expected[i] != null ? expected[i] : null,
                 score: score, direction: resid[i] >= rm ? "high" : "low" });
    }
  }
  out.sort(function (a, b) { return b.score - a.score; });
  return out;
}

function mcTsDiff(series, lag) {
  var s = mcTsSeries(series), L = Math.max(1, Math.round(mcTsNum(lag, 1)));
  var out = new Array(s.length);
  for (var i = 0; i < s.length; i++) {
    out[i] = (i < L || mcTsIsGap(s[i]) || mcTsIsGap(s[i - L])) ? null : s[i] - s[i - L];
  }
  return out;
}

function mcTsReturns(series, log) {
  var s = mcTsSeries(series);
  var out = new Array(s.length);
  for (var i = 0; i < s.length; i++) {
    if (i === 0 || mcTsIsGap(s[i]) || mcTsIsGap(s[i - 1]) || s[i - 1] === 0) { out[i] = null; continue; }
    out[i] = log ? Math.log(s[i] / s[i - 1]) : (s[i] - s[i - 1]) / s[i - 1];
  }
  return out;
}

function mcTsVolatility(series, window) {
  var r = mcTsReturns(series, true);
  var w = Math.max(2, Math.round(mcTsNum(window, 20)));
  var out = new Array(r.length), buf = [];
  for (var i = 0; i < r.length; i++) {
    if (!mcTsIsGap(r[i])) buf.push(r[i]);
    while (buf.length > w) buf.shift();
    out[i] = buf.length === w ? mcTsStdev(buf, true) : null;
  }
  return out;
}

/* ====================================================================
 * Self-test. Fixtures with answers that are true by construction: a
 * linear ramp, a pure sine of known period, a series with an injected
 * step at a known index, and a constant series that must yield nothing.
 * ==================================================================== */
if (typeof module !== "undefined" && require.main === module) {
  var tsPass = 0, tsFail = 0, tsF = [];
  function ok(n, c, x) { if (c) { tsPass++; return; } tsFail++; tsF.push(n + (x !== undefined ? "  (got: " + x + ")" : "")); }
  function eq(n, g, w) { ok(n, g === w, JSON.stringify(g) + " want " + JSON.stringify(w)); }

  var RAMP = [], SINE = [], STEP = [], FLAT = [];
  for (var i = 0; i < 60; i++) {
    RAMP.push(100 + i * 2);
    SINE.push(50 + 10 * Math.sin(2 * Math.PI * i / 12));
    STEP.push(i < 30 ? 20 : 60);
    FLAT.push(7);
  }

  /* -------- resampling: a gap is not a zero -------- */
  (function () {
    var base = 1700000000000;
    var docs = [{ t: base }, { t: base + 1000 }, { t: base + 2000 },
                /* deliberate hole */ { t: base + 60000 }];
    var r = mcTsResample(docs, { size: 10000, agg: "count" });
    ok("resample produces buckets", r.points.length >= 6, r.points.length);
    ok("counts are counted", r.points[0].value === 3, r.points[0].value);
    ok("an empty count bucket is a measured zero", r.points[1].value === 0, r.points[1].value);
    var m = mcTsResample([{ t: base, value: 5 }, { t: base + 60000, value: 9 }],
                         { size: 10000, agg: "mean" });
    ok("an empty MEAN bucket is null, not zero", m.points[1].value === null, m.points[1].value);
    ok("gaps are reported", m.gaps >= 1, m.gaps);
    ok("coverage is reported", m.covered > 0 && m.covered <= 1, m.covered);
    ok("empty input is tolerated", mcTsResample([], {}).points.length === 0);
    ok("garbage rows are skipped", mcTsResample([null, 7, { t: "x" }], {}).points.length === 0);
    ok("irregular arrivals do not throw", !!mcTsResample(docs, {}));
  })();

  /* -------- velocity on irregular arrivals -------- */
  (function () {
    var base = 1700000000000, t = [];
    for (var i = 0; i < 10; i++) t.push(base + i * i * 60000);   /* accelerating gaps */
    var v = mcTsVelocity(t, 3600000);
    eq("velocity has one sample per arrival", v.length, 10);
    ok("rates are finite", v.every(function (x) { return isFinite(x.rate); }));
    ok("velocity handles an empty list", mcTsVelocity([], 1000).length === 0);
  })();

  /* -------- decomposition -------- */
  (function () {
    var d = mcTsDecompose(SINE, 12, {});
    ok("a sine of period 12 decomposes", d.ok, d.reason);
    ok("the seasonal component is centred",
       Math.abs(mcTsMean(d.seasonal.slice(0, 12))) < 1e-6, mcTsMean(d.seasonal.slice(0, 12)));
    var resid = mcTsDense(d.residual);
    ok("a pure sine leaves almost no residual",
       Math.max.apply(null, resid.map(Math.abs)) < 1.5, Math.max.apply(null, resid.map(Math.abs)));
    var short = mcTsDecompose([1, 2, 3, 4], 12, {});
    ok("too few periods refuses rather than fits", !short.ok);
    ok("and says why", /full periods/.test(short.reason), short.reason);
  })();

  /* -------- period detection -------- */
  (function () {
    var p = mcTsDetectPeriod(SINE, {});
    ok("the sine's period is found", p.ok, p.reason);
    ok("and it is 12", p.period === 12, p.period);
    ok("strength is reported", p.strength > 0.2, p.strength);
    var f = mcTsDetectPeriod(FLAT, {});
    ok("a constant series has no period", !f.ok);
    ok("and says so honestly", /constant/.test(f.reason), f.reason);
    ok("a short series refuses", !mcTsDetectPeriod([1, 2, 3], {}).ok);
    ok("acf of a constant series is empty", mcTsAcf(FLAT, 5).length === 0);
  })();

  /* -------- forecasting and the skill score -------- */
  (function () {
    var f = mcTsForecast(RAMP, { horizon: 5 });
    ok("a ramp forecasts", f.ok, f.reason);
    eq("horizon is honoured", f.forecast.length, 5);
    ok("the ramp continues upward", f.forecast[4] > f.forecast[0], JSON.stringify(f.forecast));
    ok("a linear ramp is extrapolated closely",
       Math.abs(f.forecast[0] - (100 + 60 * 2)) < 8, f.forecast[0]);
    ok("intervals bracket the point forecast",
       f.lower[0] <= f.forecast[0] && f.upper[0] >= f.forecast[0]);
    /* Checked on a noisy series, not the ramp: a noiseless fixture has
       rmse ~ 0, so every interval is zero-width and "wider" is vacuous. */
    var wob = [];
    for (var w = 0; w < 60; w++) wob.push(100 + w * 2 + ((w * 37) % 11) - 5);
    var wf = mcTsForecast(wob, { horizon: 5 });
    ok("intervals have real width when the fit has real error",
       (wf.upper[0] - wf.lower[0]) > 0, wf.upper[0] - wf.lower[0]);
    ok("intervals widen with the horizon",
       (wf.upper[4] - wf.lower[4]) > (wf.upper[0] - wf.lower[0]));
    ok("a skill score is reported", f.skill !== null, f.skill);
    ok("a verdict is reported", typeof f.verdict === "string" && f.verdict.length > 0, f.verdict);
    ok("no NaN in the forecast", f.forecast.every(function (v) { return isFinite(v); }));

    var sf = mcTsForecast(SINE, { horizon: 6 });
    ok("a seasonal series uses holt-winters", /winters/.test(sf.method), sf.method);
    ok("and reports the period it used", sf.period === 12, sf.period);

    var tiny = mcTsForecast([1, 2], { horizon: 3 });
    ok("too few points refuses to forecast", !tiny.ok);
    ok("and calls it an invention", /invention|nothing to fit/.test(tiny.reason), tiny.reason);
    ok("empty input refuses", !mcTsForecast([], {}).ok);
    ok("null input refuses", !mcTsForecast(null, {}).ok);

    /* On pure noise the model must NOT claim to beat the baseline. */
    var noise = [], seed = 42;
    for (var i = 0; i < 60; i++) { seed = (seed * 1103515245 + 12345) & 0x7fffffff; noise.push(seed % 100); }
    var nf = mcTsForecast(noise, { horizon: 4 });
    ok("noise still produces a forecast", nf.ok);
    ok("but the skill score is honest about it", nf.skill < 0.5, nf.skill);
  })();

  /* -------- changepoints -------- */
  (function () {
    var cp = mcTsChangepoints(STEP, {});
    ok("the injected step is detected", cp.length >= 1, cp.length);
    ok("and located near index 30",
       cp.some(function (c) { return Math.abs(c.index - 30) <= 6; }), JSON.stringify(cp.map(function (c) { return c.index; })));
    ok("direction is reported", cp[0] && cp[0].direction === "up", cp[0] && cp[0].direction);
    ok("confidence is reported", cp[0] && cp[0].confidence > 0);
    eq("a constant series has no changepoints", mcTsChangepoints(FLAT, {}).length, 0);
    eq("a short series has none", mcTsChangepoints([1, 2, 3], {}).length, 0);
    /* A linear ramp IS a continuously moving level, so a mean-shift detector
       flagging it once is correct, not a false positive. What would be wrong
       is flagging it repeatedly — that was the global-mean bug. */
    ok("a clean ramp fires at most once", mcTsChangepoints(RAMP, {}).length <= 1,
       mcTsChangepoints(RAMP, {}).length);
  })();

  /* -------- anomalies -------- */
  (function () {
    var spiky = SINE.slice();
    spiky[25] = 500;                       /* unmistakable outlier */
    var a = mcTsAnomalies(spiky, {});
    ok("the spike is found", a.length >= 1, a.length);
    ok("and it is the top-scoring point", a[0] && a[0].index === 25, a[0] && a[0].index);
    ok("scores are returned, not booleans", a[0] && isFinite(a[0].score) && a[0].score > 3, a[0] && a[0].score);
    ok("direction is reported", a[0] && a[0].direction === "high");
    eq("a clean sine has no anomalies", mcTsAnomalies(SINE, {}).length, 0);
    eq("a constant series has none", mcTsAnomalies(FLAT, {}).length, 0);
    eq("a short series has none", mcTsAnomalies([1, 2, 3], {}).length, 0);
    /* Two spikes must not mask each other — the MAD scale is why. */
    var two = SINE.slice(); two[10] = 400; two[40] = 420;
    ok("two spikes are both found", mcTsAnomalies(two, {}).length >= 2, mcTsAnomalies(two, {}).length);
  })();

  /* -------- transforms -------- */
  (function () {
    var d = mcTsDiff([1, 3, 6, 10], 1);
    ok("diff warms up with null", d[0] === null);
    eq("diff is correct", JSON.stringify(d.slice(1)), JSON.stringify([2, 3, 4]));
    var r = mcTsReturns([100, 110, 99], false);
    ok("returns warm up with null", r[0] === null);
    ok("simple return is correct", Math.abs(r[1] - 0.1) < 1e-12, r[1]);
    ok("a zero denominator yields null", mcTsReturns([0, 5], false)[1] === null);
    var v = mcTsVolatility(RAMP, 10);
    ok("volatility has no NaN", v.every(function (x) { return x === null || isFinite(x); }));
    ok("gaps propagate as null, never as zero", mcTsDiff([1, null, 3], 1)[2] === null);
  })();

  /* -------- hygiene -------- */
  (function () {
    var src = require("fs").readFileSync(__filename, "utf8");
    ok("self-test guard is exact",
       src.indexOf('if (typeof module !== "undefined" && require.main === module) {') > 0);
    ok("no script-closing sequence", src.toLowerCase().indexOf("</scr" + "ipt") < 0);
    ok("no raw control bytes", !/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(src));
    ok("no raw BOM", src.indexOf("\uFEFF") < 0);
  })();

  if (tsF.length) { console.log("\nFAILURES (" + tsF.length + "):"); tsF.forEach(function (f) { console.log("  FAIL  " + f); }); }
  console.log((tsFail === 0 ? "PASS" : "FAIL") + " — " + tsPass + "/" + (tsPass + tsFail) + " assertions passed");
  if (tsFail) process.exit(1);
}
