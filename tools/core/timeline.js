// mcTl* — text diffing + event-timeline construction for the news app.
// Plain script scope: paste straight into the single-file host. Every top-level
// name is prefixed mcTl so it cannot collide with the ~320 existing mc* globals.
// ES2020, zero dependencies, no module system.

// ---------------------------------------------------------------------------
// Shared constants
// ---------------------------------------------------------------------------

const mcTlUnitMs = { second: 1000, minute: 60000, hour: 3600000, day: 86400000 };

// Step ladders per unit. We only ever pick a "round" multiple so the axis reads
// like something a human would draw (5/10/15/30 min, 1/2/3/6 h, 1/2/7 d).
const mcTlUnitSteps = {
  second: [1, 5, 10, 15, 30],
  minute: [1, 2, 5, 10, 15, 30],
  hour: [1, 2, 3, 6, 12],
  day: [1, 2, 7, 14, 30]
};

// Myers is O(ND); D is the edit distance. Two genuinely unrelated articles have
// D ~ N+M, and the edit-script trace we keep is O(D^2) ints. Cap it: past this
// point a token-level diff is unreadable anyway, so we degrade to a wholesale
// "replace" instead of burning hundreds of MB proving the obvious.
const mcTlDiffMaxD = 1600;

// ---------------------------------------------------------------------------
// Part 1 — diff
// ---------------------------------------------------------------------------

// Wire copy is not trusted. Agency feeds carry raw ampersands, angle brackets in
// quoted markup, smart-quote mojibake, and occasionally somebody's HTML snippet.
// If we interpolate that into innerHTML we get script injection at best and a
// silently broken layout at worst — so everything is escaped BEFORE we add our
// own <ins>/<del> wrappers, never after.
function mcTlEscapeHtml(s) {
  if (s === null || s === undefined) return "";
  return String(s).replace(/[&<>"']/g, function (ch) {
    if (ch === "&") return "&amp;";
    if (ch === "<") return "&lt;";
    if (ch === ">") return "&gt;";
    if (ch === '"') return "&quot;";
    return "&#39;";
  });
}

// Lossless word tokenizer: each token is a run of non-whitespace plus the
// whitespace that follows it, and any leading whitespace is glued to the first
// token. tokens.join("") === input, which is what makes the diff reconstructible
// (same+del must rebuild `a` byte for byte). Punctuation stays attached to the
// word on purpose: "rates." and "rates" are a real editorial change and the
// reader must see it.
function mcTlTokenizeWords(s) {
  if (typeof s !== "string" || s.length === 0) return [];
  const out = [];
  const re = /\S+\s*/g;
  let m;
  while ((m = re.exec(s)) !== null) out.push(m[0]);
  const lead = /^\s+/.exec(s);
  if (lead) {
    if (out.length) out[0] = lead[0] + out[0];
    else out.push(lead[0]);
  }
  return out;
}

// Array.from, not split(""), so an emoji or an accented pair is one token rather
// than two broken halves rendered as garbage inside a <del>.
function mcTlTokenizeChars(s) {
  if (typeof s !== "string" || s.length === 0) return [];
  return Array.from(s);
}

// Myers' O(ND) greedy diff (the 1986 paper's algorithm 1) with an edit-script
// trace and backtrack.
//
// Why O(ND) and not the textbook LCS matrix: the matrix is O(N*M) time AND
// space. Two 4000-token articles is 16M cells — ~64MB and hundreds of ms, for a
// pair of documents that typically differ in a couple of dozen tokens. Myers
// costs O((N+M)*D), so the *actual* edit distance sets the price: a corrections
// update to a wire story diffs in a millisecond, and only genuinely unrelated
// texts approach the matrix's cost (where the budget above cuts us off).
function mcTlMyers(A, B) {
  const N = A.length;
  const M = B.length;
  if (N === 0 && M === 0) return [];
  if (N === 0) return B.map(function (t) { return { type: "add", text: t }; });
  if (M === 0) return A.map(function (t) { return { type: "del", text: t }; });

  const max = N + M;
  const limit = Math.min(max, mcTlDiffMaxD);
  const off = max + 1; // +1 so the trace window below never slices at a negative index
  const V = new Int32Array(2 * max + 4);
  const trace = [];
  V[off + 1] = 0;
  let found = -1;

  for (let d = 0; d <= limit; d++) {
    // Snapshot the frontier as it stood *before* round d, keeping only the
    // k-window the backtrack can read. Full copies would be O(D*(N+M)).
    trace.push(V.slice(off - d - 1, off + d + 2));
    for (let k = -d; k <= d; k += 2) {
      let x;
      // Short-circuit order matters: at k === d the k+1 slot is unwritten, at
      // k === -d the k-1 slot is. Neither is read.
      if (k === -d || (k !== d && V[off + k - 1] < V[off + k + 1])) x = V[off + k + 1];
      else x = V[off + k - 1] + 1;
      let y = x - k;
      while (x < N && y < M && A[x] === B[y]) { x++; y++; } // follow the snake
      V[off + k] = x;
      if (x >= N && y >= M) { found = d; break; }
    }
    if (found >= 0) break;
  }

  if (found < 0) {
    // Budget blown: the texts share almost nothing. Report it as a replace.
    const out = [];
    for (let i = 0; i < N; i++) out.push({ type: "del", text: A[i] });
    for (let j = 0; j < M; j++) out.push({ type: "add", text: B[j] });
    return out;
  }

  const rev = [];
  let x = N;
  let y = M;
  for (let d = trace.length - 1; d >= 0; d--) {
    const v = trace[d];
    const base = d + 1; // index of k in the stored window is k + base
    const k = x - y;
    let prevK;
    if (k === -d || (k !== d && v[k - 1 + base] < v[k + 1 + base])) prevK = k + 1;
    else prevK = k - 1;
    const prevX = v[prevK + base];
    const prevY = prevX - prevK;
    while (x > prevX && y > prevY) { rev.push({ type: "same", text: A[x - 1] }); x--; y--; }
    if (d > 0) {
      if (x === prevX) rev.push({ type: "add", text: B[prevY] });
      else rev.push({ type: "del", text: A[prevX] });
    }
    x = prevX;
    y = prevY;
  }
  rev.reverse();
  return rev;
}

// Trim the shared head and tail before calling Myers. A wire correction usually
// touches one clause in paragraph six; this drops D and the working set to the
// changed region and costs a single linear scan.
function mcTlDiffCore(A, B) {
  const ops = [];
  let lo = 0;
  while (lo < A.length && lo < B.length && A[lo] === B[lo]) lo++;
  let hiA = A.length;
  let hiB = B.length;
  while (hiA > lo && hiB > lo && A[hiA - 1] === B[hiB - 1]) { hiA--; hiB--; }
  for (let i = 0; i < lo; i++) ops.push({ type: "same", text: A[i] });
  const mid = mcTlMyers(A.slice(lo, hiA), B.slice(lo, hiB));
  for (let i = 0; i < mid.length; i++) ops.push(mid[i]);
  for (let i = hiA; i < A.length; i++) ops.push({ type: "same", text: A[i] });
  return ops;
}

// One entry per run, not per token — the renderer wants a single <del> around a
// deleted sentence, not forty of them.
function mcTlCoalesce(ops) {
  const out = [];
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    if (out.length && out[out.length - 1].type === op.type) out[out.length - 1].text += op.text;
    else out.push({ type: op.type, text: op.text });
  }
  return out;
}

function mcTlDiffWords(a, b) {
  const sa = typeof a === "string" ? a : (a === null || a === undefined ? "" : String(a));
  const sb = typeof b === "string" ? b : (b === null || b === undefined ? "" : String(b));
  return mcTlCoalesce(mcTlDiffCore(mcTlTokenizeWords(sa), mcTlTokenizeWords(sb)));
}

// Character granularity: same shape, for headlines and short fields where word
// granularity would flag a whole word for a one-letter typo fix.
function mcTlDiffChars(a, b) {
  const sa = typeof a === "string" ? a : (a === null || a === undefined ? "" : String(a));
  const sb = typeof b === "string" ? b : (b === null || b === undefined ? "" : String(b));
  return mcTlCoalesce(mcTlDiffCore(mcTlTokenizeChars(sa), mcTlTokenizeChars(sb)));
}

// Counts are in characters of op text so the number means the same thing whether
// the ops came from mcTlDiffWords or mcTlDiffChars. similarity is the Dice
// coefficient over the two reconstructed strings: 2*same / (len(a) + len(b)).
function mcTlDiffStats(ops) {
  let added = 0;
  let removed = 0;
  let same = 0;
  if (Array.isArray(ops)) {
    for (let i = 0; i < ops.length; i++) {
      const op = ops[i];
      if (!op || typeof op.text !== "string") continue;
      if (op.type === "add") added += op.text.length;
      else if (op.type === "del") removed += op.text.length;
      else same += op.text.length;
    }
  }
  const total = 2 * same + added + removed;
  // Two empty strings are identical, not undefined.
  const similarity = total === 0 ? 1 : (2 * same) / total;
  return { added: added, removed: removed, same: same, similarity: similarity };
}

function mcTlDiffHtml(ops) {
  if (!Array.isArray(ops)) return "";
  const parts = [];
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    if (!op || typeof op.text !== "string") continue;
    const safe = mcTlEscapeHtml(op.text);
    if (op.type === "add") parts.push('<ins class="mcTlAdd">' + safe + "</ins>");
    else if (op.type === "del") parts.push('<del class="mcTlDel">' + safe + "</del>");
    else parts.push('<span class="mcTlSame">' + safe + "</span>");
  }
  return parts.join("");
}

// Lowercased, whitespace-stripped word k-grams. Short inputs fall back to plain
// token sets so a three-word headline still produces something to compare.
function mcTlShingles(s, k) {
  const size = typeof k === "number" && k > 0 ? k : 3;
  const toks = mcTlTokenizeWords(String(s === null || s === undefined ? "" : s))
    .map(function (t) { return t.trim().toLowerCase(); })
    .filter(function (t) { return t.length > 0; });
  const set = new Set();
  if (toks.length === 0) return set;
  if (toks.length < size) { for (let i = 0; i < toks.length; i++) set.add(toks[i]); return set; }
  for (let i = 0; i + size <= toks.length; i++) set.add(toks.slice(i, i + size).join(" "));
  return set;
}

function mcTlJaccard(setA, setB) {
  if (!setA.size && !setB.size) return 1;
  if (!setA.size || !setB.size) return 0;
  let inter = 0;
  const small = setA.size <= setB.size ? setA : setB;
  const large = small === setA ? setB : setA;
  small.forEach(function (v) { if (large.has(v)) inter++; });
  return inter / (setA.size + setB.size - inter);
}

// De-duping a feed is an O(n^2) pairwise problem, so the per-pair cost is what
// matters. Two cheap rejects run first:
//   1. length ratio — Dice similarity can never exceed 2*min/(min+max), so if
//      that bound is already under the threshold we stop without tokenising much.
//   2. shingle Jaccard — Dice S and Jaccard J relate as S = 2J/(1+J), so a target
//      S needs J >= S/(2-S). Shingles are coarser than tokens (one changed word
//      kills k shingles), so we apply that bound with 0.5 slack: it must only
//      reject pairs that *cannot* pass, never borderline ones.
// Only survivors pay for Myers.
function mcTlNearDuplicate(a, b, threshold) {
  const t = typeof threshold === "number" && isFinite(threshold) ? threshold : 0.8;
  const A = a === null || a === undefined ? "" : String(a);
  const B = b === null || b === undefined ? "" : String(b);
  if (A === B) return true;
  if (!A.length || !B.length) return false;

  const lo = Math.min(A.length, B.length);
  const hi = Math.max(A.length, B.length);
  if ((2 * lo) / (lo + hi) < t) return false;

  const needJ = t / (2 - t);
  if (mcTlJaccard(mcTlShingles(A, 3), mcTlShingles(B, 3)) < needJ * 0.5) return false;

  return mcTlDiffStats(mcTlDiffWords(A, B)).similarity >= t;
}

// ---------------------------------------------------------------------------
// Part 2 — timeline
// ---------------------------------------------------------------------------

// Two components max — a timeline label has no room for "1d 4h 12m 6s".
function mcTlHuman(ms) {
  const n = typeof ms === "number" && isFinite(ms) ? ms : 0;
  if (n < 0) return "-" + mcTlHuman(-n);
  const s = Math.floor(n / 1000);
  if (s < 60) return s + "s";
  const m = Math.floor(s / 60);
  if (m < 60) { const rs = s % 60; return rs ? m + "m " + rs + "s" : m + "m"; }
  const h = Math.floor(m / 60);
  if (h < 24) { const rm = m % 60; return rm ? h + "h " + rm + "m" : h + "h"; }
  const d = Math.floor(h / 24);
  const rh = h % 24;
  return rh ? d + "d " + rh + "h" : d + "d";
}

// Feeds hand us epoch millis, Date objects, or ISO strings depending on the
// ingest path. Anything we cannot turn into a finite number is NaN and gets
// dropped upstream rather than poisoning the span arithmetic.
function mcTlCoerceTime(v) {
  if (v === null || v === undefined) return NaN;
  if (typeof v === "number") return isFinite(v) ? v : NaN;
  if (v instanceof Date) { const n = v.getTime(); return isFinite(n) ? n : NaN; }
  if (typeof v === "string") { const n = Date.parse(v); return isFinite(n) ? n : NaN; }
  return NaN;
}

// Drop unusable docs, sort ascending, keep the original index as a stable
// tie-break so identical timestamps come back in ingest order.
function mcTlNormalizeDocs(docs) {
  if (!Array.isArray(docs)) return [];
  const out = [];
  for (let i = 0; i < docs.length; i++) {
    const d = docs[i];
    if (!d || typeof d !== "object") continue;
    const t = mcTlCoerceTime(d.t);
    if (!isFinite(t)) continue; // null/NaN/garbage timestamps: silently skipped
    const rec = {
      text: typeof d.text === "string" ? d.text : (d.text === null || d.text === undefined ? "" : String(d.text)),
      t: t,
      src: d.src === undefined ? null : d.src,
      _i: i
    };
    if (d.lane !== undefined) rec.lane = d.lane;
    out.push(rec);
  }
  out.sort(function (p, q) { return p.t - q.t || p._i - q._i; });
  return out;
}

function mcTlMedian(nums) {
  if (!nums.length) return 0;
  const s = nums.slice().sort(function (a, b) { return a - b; });
  const mid = s.length >> 1;
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

// Pick the bucket unit from the span's magnitude first, then a step inside that
// unit that lands in [minB, maxB] buckets. Unit before count is deliberate: a
// five-day story wants day columns even though that is only ~6 of them, and
// nobody reads a 12-hour column. Within a unit we take the finest step that fits
// the band; if none fits we take the finest step available and accept fewer
// buckets rather than mislabelling the axis.
// Thresholds are set so each unit's finest step normally clears the low end
// (8 min -> minute, 8 h -> hour, 4 d -> day).
function mcTlPickBucket(fromT, toT, opts) {
  const o = opts || {};
  const minB = typeof o.minBuckets === "number" ? o.minBuckets : 8;
  const maxB = typeof o.maxBuckets === "number" ? o.maxBuckets : 20;
  const span = Math.max(0, (isFinite(toT) ? toT : 0) - (isFinite(fromT) ? fromT : 0));

  let unit;
  if (o.unit && mcTlUnitSteps[o.unit]) unit = o.unit;
  else if (span >= 4 * mcTlUnitMs.day) unit = "day";
  else if (span >= 8 * mcTlUnitMs.hour) unit = "hour";
  else if (span >= 8 * mcTlUnitMs.minute) unit = "minute";
  else unit = "second"; // includes the zero-span case: one bucket, no division

  const base = mcTlUnitMs[unit];
  const steps = mcTlUnitSteps[unit];
  // Count with the epoch alignment we will actually use, so the chosen step
  // really does respect the cap once boundaries are snapped.
  const countFor = function (size) {
    const start0 = Math.floor(fromT / size) * size;
    return Math.floor((toT - start0) / size) + 1;
  };

  let size = steps[0] * base;
  let count = countFor(size);
  let fallback = -1;
  for (let i = 0; i < steps.length; i++) {
    const cand = steps[i] * base;
    const n = countFor(cand);
    if (n <= maxB && fallback < 0) { fallback = cand; }
    if (n >= minB && n <= maxB) { size = cand; count = n; return { unit: unit, size: size, count: count }; }
    if (n < minB) break; // steps only get coarser; nothing later will fit
  }
  if (fallback > 0) { size = fallback; count = countFor(size); }
  else {
    // Span is huge relative to the coarsest step (e.g. years of archive):
    // stretch the last step so we never allocate an unbounded bin array.
    size = steps[steps.length - 1] * base;
    let n = countFor(size);
    while (n > maxB) { size *= 2; n = countFor(size); }
    count = n;
  }
  return { unit: unit, size: size, count: count };
}

function mcTlBuild(docs, opts) {
  const o = opts || {};
  const norm = mcTlNormalizeDocs(docs);
  const n = norm.length;

  const events = [];
  for (let i = 0; i < n; i++) {
    const d = norm[i];
    const ev = {
      text: d.text,
      t: d.t,
      src: d.src,
      gapBefore: i === 0 ? 0 : d.t - norm[i - 1].t, // 0, not null: callers do arithmetic on it
      isFirst: i === 0,
      isLast: i === n - 1
    };
    if (d.lane !== undefined) ev.lane = d.lane;
    events.push(ev);
  }

  if (n === 0) {
    return {
      events: [],
      span: { from: null, to: null, ms: 0, human: mcTlHuman(0) },
      buckets: [],
      bucketUnit: null,
      bucketMs: 0,
      gaps: []
    };
  }

  const fromT = norm[0].t;
  const toT = norm[n - 1].t;
  const span = { from: fromT, to: toT, ms: toT - fromT, human: mcTlHuman(toT - fromT) };

  const pick = mcTlPickBucket(fromT, toT, o);
  const size = pick.size;
  const start0 = Math.floor(fromT / size) * size;
  const bins = [];
  const nBins = Math.max(1, pick.count);
  for (let i = 0; i < nBins; i++) {
    const s = start0 + i * size;
    bins.push({
      start: s,
      end: s + size,
      count: 0,
      unit: pick.unit,
      size: size,
      label: new Date(s).toISOString()
    });
  }
  for (let i = 0; i < n; i++) {
    let idx = Math.floor((norm[i].t - start0) / size);
    if (idx < 0) idx = 0;
    if (idx >= nBins) idx = nBins - 1;
    bins[idx].count++;
  }

  // "The story went quiet, then restarted." Median x factor, not mean: one
  // overnight pause would drag a mean up far enough to hide every other lull.
  const gapFactor = typeof o.gapFactor === "number" && o.gapFactor > 0 ? o.gapFactor : 3;
  const gapList = [];
  for (let i = 1; i < n; i++) gapList.push(events[i].gapBefore);
  const gaps = [];
  if (gapList.length >= 2) {
    let ref = mcTlMedian(gapList);
    if (ref <= 0) {
      // Burst-heavy series (many docs on the same second): fall back to the mean
      // so we do not flag literally every non-zero gap.
      let sum = 0;
      for (let i = 0; i < gapList.length; i++) sum += gapList[i];
      ref = sum / gapList.length;
    }
    if (ref > 0) {
      const threshold = ref * gapFactor;
      for (let i = 1; i < n; i++) {
        const g = events[i].gapBefore;
        if (g > threshold) {
          gaps.push({
            index: i, // index of the event that *ends* the quiet period
            afterIndex: i - 1,
            from: events[i - 1].t,
            to: events[i].t,
            ms: g,
            human: mcTlHuman(g),
            ratio: g / ref
          });
        }
      }
    }
  }

  return {
    events: events,
    span: span,
    buckets: bins,
    bucketUnit: pick.unit,
    bucketMs: size,
    gaps: gaps
  };
}

// Word-boundary, case-insensitive. Deliberate choice: "Gaza" does NOT match
// "Gazan" — a demonym is a different entity for tagging purposes and the false
// positives ("Israel"/"Israeli", "China"/"Chinese") swamp an entity timeline.
// Punctuation and quotes still count as boundaries, so "Gaza." matches.
// \p{L}\p{N} rather than \b because \b is ASCII-only and half the names in a
// foreign desk feed are not.
function mcTlEntityRegex(entity) {
  const raw = entity === null || entity === undefined ? "" : String(entity).trim();
  if (!raw) return null;
  const esc = raw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  try {
    return new RegExp("(?:^|[^\\p{L}\\p{N}_])" + esc + "(?![\\p{L}\\p{N}_])", "iu");
  } catch (e) {
    return new RegExp("(?:^|[^A-Za-z0-9_])" + esc + "(?![A-Za-z0-9_])", "i");
  }
}

function mcTlEntityTimeline(docs, entity, opts) {
  const re = mcTlEntityRegex(entity);
  if (!re || !Array.isArray(docs)) return mcTlBuild([], opts);
  const hit = [];
  for (let i = 0; i < docs.length; i++) {
    const d = docs[i];
    if (!d || typeof d !== "object") continue;
    const text = typeof d.text === "string" ? d.text : String(d.text === null || d.text === undefined ? "" : d.text);
    if (re.test(text)) hit.push(d);
  }
  return mcTlBuild(hit, opts);
}

// Sliding-window arrival rate sampled at each document's own timestamp. This is
// the honest acceleration curve: no smoothing, no interpolation between beats,
// just "how many stories landed in the trailing window when this one landed".
// rate is normalised to items/hour so windows of different sizes compare.
function mcTlVelocity(docs, windowMs) {
  const w = typeof windowMs === "number" && isFinite(windowMs) && windowMs > 0 ? windowMs : mcTlUnitMs.hour;
  const norm = mcTlNormalizeDocs(docs);
  const out = [];
  let lo = 0;
  for (let i = 0; i < norm.length; i++) {
    const t = norm[i].t;
    while (lo < i && norm[lo].t <= t - w) lo++; // half-open window (t-w, t]
    const count = i - lo + 1;
    out.push({ t: t, count: count, rate: count / (w / mcTlUnitMs.hour) });
  }
  return out;
}

// Two stories on one axis. lane is "a"/"b" so the renderer can stack or colour
// them; everything else is a normal build, gaps and buckets included.
function mcTlMerge(docsA, docsB, opts) {
  const tag = function (list, lane) {
    if (!Array.isArray(list)) return [];
    const out = [];
    for (let i = 0; i < list.length; i++) {
      const d = list[i];
      if (!d || typeof d !== "object") continue;
      out.push({ text: d.text, t: d.t, src: d.src, lane: lane });
    }
    return out;
  };
  const merged = tag(docsA, "a").concat(tag(docsB, "b"));
  const res = mcTlBuild(merged, opts);
  let na = 0;
  let nb = 0;
  for (let i = 0; i < res.events.length; i++) {
    if (res.events[i].lane === "a") na++;
    else nb++;
  }
  res.lanes = { a: na, b: nb };
  return res;
}

// ---------------------------------------------------------------------------
// Self-test (node only; the browser never sees this branch)
// ---------------------------------------------------------------------------

if (typeof module !== "undefined" && require.main === module) {
  let pass = 0;
  let fail = 0;
  const ok = function (name, cond) {
    if (cond) pass++;
    else { fail++; console.log("FAIL: " + name); }
  };
  const eq = function (name, got, want) {
    const good = Object.is(got, want);
    if (!good) console.log("  got=" + JSON.stringify(got) + " want=" + JSON.stringify(want));
    ok(name, good);
  };
  const rebuild = function (ops, keep) {
    return ops.filter(function (o) { return keep.indexOf(o.type) >= 0; })
      .map(function (o) { return o.text; }).join("");
  };
  const countType = function (ops, type) {
    return ops.filter(function (o) { return o.type === type; }).length;
  };

  // --- diff basics
  const idA = "Bank of England holds rates at 4.5%";
  const opsId = mcTlDiffWords(idA, idA);
  ok("identical: every op is same", opsId.every(function (o) { return o.type === "same"; }));
  eq("identical: coalesced to one op", opsId.length, 1);
  eq("identical: similarity 1", mcTlDiffStats(opsId).similarity, 1);

  const opsDiff = mcTlDiffWords("alpha beta gamma", "delta epsilon zeta");
  const sDiff = mcTlDiffStats(opsDiff);
  ok("disjoint: similarity near 0", sDiff.similarity < 0.05);
  eq("disjoint: no same ops", countType(opsDiff, "same"), 0);
  ok("disjoint: added and removed both > 0", sDiff.added > 0 && sDiff.removed > 0);

  // --- the rates case
  const rA = "Bank holds rates at 4.5%";
  const rB = "Bank holds rates at 4.75%";
  const rOps = mcTlDiffWords(rA, rB);
  eq("rates: exactly one add", countType(rOps, "add"), 1);
  eq("rates: exactly one del", countType(rOps, "del"), 1);
  eq("rates: three ops total", rOps.length, 3);
  eq("rates: add text", rOps.filter(function (o) { return o.type === "add"; })[0].text.trim(), "4.75%");
  eq("rates: del text", rOps.filter(function (o) { return o.type === "del"; })[0].text.trim(), "4.5%");
  eq("rates: unchanged prefix", rebuild(rOps, ["same"]), "Bank holds rates at ");
  eq("rates: rebuild a", rebuild(rOps, ["same", "del"]), rA);
  eq("rates: rebuild b", rebuild(rOps, ["same", "add"]), rB);

  // punctuation must be visible
  const pOps = mcTlDiffWords("markets fell on rates", "markets fell on rates.");
  eq("punctuation counts as a change", countType(pOps, "add") + countType(pOps, "del"), 2);

  // --- coalescing
  const cOps = mcTlDiffWords("aa bb cc dd ee", "xx yy cc dd ee");
  eq("coalesced run count", cOps.length, 3);
  eq("coalesced del is one op", countType(cOps, "del"), 1);
  eq("coalesced add is one op", countType(cOps, "add"), 1);

  // --- reconstruction on a longer pair
  const longA = "The Bank of England held interest rates at 4.5% on Thursday, citing sticky services inflation and a cooling labour market.";
  const longB = "The Bank of England held interest rates at 4.75% on Thursday, citing sticky services inflation, weak growth and a cooling labour market.";
  const lOps = mcTlDiffWords(longA, longB);
  eq("long: rebuild a exactly", rebuild(lOps, ["same", "del"]), longA);
  eq("long: rebuild b exactly", rebuild(lOps, ["same", "add"]), longB);
  ok("long: similarity high", mcTlDiffStats(lOps).similarity > 0.8);
  // Two edits in the paragraph => two add/del pairs and nothing else: proves
  // Myers found the minimal script rather than a lazy tail replacement.
  eq("long: minimal script (7 runs)", lOps.length, 7);

  // --- char diff
  const chOps = mcTlDiffChars("kitten", "sitting");
  eq("chars: rebuild a", rebuild(chOps, ["same", "del"]), "kitten");
  eq("chars: rebuild b", rebuild(chOps, ["same", "add"]), "sitting");
  ok("chars: some same survives", countType(chOps, "same") > 0);
  eq("chars: identical is one same op", mcTlDiffChars("4.5%", "4.5%").length, 1);
  eq("chars: empty vs empty", mcTlDiffChars("", "").length, 0);

  // --- escaping
  const evil = "<script>alert(1)<" + "/script> & \"quoted\"";
  const hOps = mcTlDiffWords(evil, evil + " tail");
  const html = mcTlDiffHtml(hOps);
  ok("html: escapes angle brackets", html.indexOf("&lt;script&gt;") >= 0);
  ok("html: no raw script tag", html.indexOf("<script") < 0);
  ok("html: escapes ampersand", html.indexOf("&amp;") >= 0);
  ok("html: escapes quotes", html.indexOf("&quot;") >= 0);
  ok("html: emits ins", mcTlDiffHtml([{ type: "add", text: "x" }]).indexOf("<ins") >= 0);
  ok("html: emits del", mcTlDiffHtml([{ type: "del", text: "x" }]).indexOf("<del") >= 0);
  ok("html: same becomes a span", html.indexOf("<span") >= 0);
  eq("html: null-safe", mcTlDiffHtml(null), "");

  // --- Myers performance
  const bigA = [];
  for (let i = 0; i < 2000; i++) bigA.push("tok" + i);
  const bigB = bigA.slice();
  for (let i = 0; i < 20; i++) bigB[i * 97] = "CHANGED" + i;
  const strA = bigA.join(" ");
  const strB = bigB.join(" ");
  const t0 = Date.now();
  const perfOps = mcTlDiffWords(strA, strB);
  const dt = Date.now() - t0;
  console.log("  myers 2000x2000 tokens, 20 edits: " + dt + "ms, " + perfOps.length + " ops");
  ok("perf: under 400ms (" + dt + "ms)", dt < 400);
  eq("perf: rebuild a", rebuild(perfOps, ["same", "del"]), strA);
  eq("perf: rebuild b", rebuild(perfOps, ["same", "add"]), strB);
  eq("perf: 20 adds", countType(perfOps, "add"), 20);

  // --- near duplicate
  const h1 = "Bank of England holds rates at 4.5% amid inflation worries";
  const h2 = "Bank of England holds rates at 4.75% amid inflation worries";
  const h3 = "Storm Bella closes schools across north Wales";
  ok("nearDup: one-word difference is a duplicate", mcTlNearDuplicate(h1, h2, 0.8) === true);
  ok("nearDup: unrelated headlines are not", mcTlNearDuplicate(h1, h3, 0.8) === false);
  ok("nearDup: identical is a duplicate", mcTlNearDuplicate(h1, h1, 0.8) === true);
  ok("nearDup: empty vs text is not", mcTlNearDuplicate("", h1, 0.8) === false);
  ok("nearDup: both empty is", mcTlNearDuplicate("", "", 0.8) === true);
  ok("nearDup: null-safe", mcTlNearDuplicate(null, null, 0.8) === true);

  // --- timeline: 12 docs over 3 hours
  const base = Date.UTC(2026, 0, 5, 6, 0, 0);
  const mk = function (n, stepMs, from, prefix) {
    const out = [];
    for (let i = 0; i < n; i++) out.push({ text: (prefix || "story ") + i, t: from + i * stepMs, src: "wire" });
    return out;
  };
  const t3h = mcTlBuild(mk(12, (3 * mcTlUnitMs.hour) / 11, base));
  ok("3h: 8..20 buckets (" + t3h.buckets.length + ")", t3h.buckets.length >= 8 && t3h.buckets.length <= 20);
  ok("3h: unit hour or minute (" + t3h.bucketUnit + ")", t3h.bucketUnit === "hour" || t3h.bucketUnit === "minute");
  eq("3h: span human", t3h.span.human, "3h");
  eq("3h: bucket counts sum to doc count", t3h.buckets.reduce(function (a, b) { return a + b.count; }, 0), 12);

  const t5d = mcTlBuild(mk(12, (5 * mcTlUnitMs.day) / 11, base));
  eq("5d: unit is day", t5d.bucketUnit, "day");
  ok("5d: at least one bucket", t5d.buckets.length >= 1);
  eq("5d: unit exposed on the bins too", t5d.buckets[0].unit, "day");

  const t20m = mcTlBuild(mk(12, (20 * mcTlUnitMs.minute) / 11, base));
  ok("20m: 8..20 buckets (" + t20m.buckets.length + ")", t20m.buckets.length >= 8 && t20m.buckets.length <= 20);
  ok("20m: unit minute (" + t20m.bucketUnit + ")", t20m.bucketUnit === "minute");

  // --- zero span
  const tSame = mcTlBuild(mk(6, 0, base));
  eq("zero span: ms is 0", tSame.span.ms, 0);
  ok("zero span: at least one bucket", tSame.buckets.length >= 1);
  eq("zero span: keeps every event", tSame.events.length, 6);
  eq("zero span: no gaps", tSame.gaps.length, 0);

  // --- gaps
  const gapDocs = [];
  const gapMins = [0, 10, 20, 30, 330, 340, 350]; // one deliberate 5h pause before index 4
  for (let i = 0; i < gapMins.length; i++) gapDocs.push({ text: "beat " + i, t: base + gapMins[i] * mcTlUnitMs.minute, src: "wire" });
  const tGap = mcTlBuild(gapDocs);
  eq("gaps: exactly one", tGap.gaps.length, 1);
  eq("gaps: at index 4", tGap.gaps.length === 1 ? tGap.gaps[0].index : -1, 4);
  eq("gaps: duration", tGap.gaps.length === 1 ? tGap.gaps[0].ms : -1, 300 * mcTlUnitMs.minute);
  eq("gaps: human", tGap.gaps.length === 1 ? tGap.gaps[0].human : "", "5h");
  eq("gaps: evenly spaced series has none", mcTlBuild(mk(10, mcTlUnitMs.minute * 5, base)).gaps.length, 0);

  // --- velocity
  const accel = [];
  let at = base;
  let step = 60 * mcTlUnitMs.minute;
  for (let i = 0; i < 14; i++) { accel.push({ text: "u" + i, t: at, src: "wire" }); at += step; step = Math.max(mcTlUnitMs.minute, step * 0.65); }
  const vel = mcTlVelocity(accel, 2 * mcTlUnitMs.hour);
  eq("velocity: one sample per doc", vel.length, accel.length);
  ok("velocity: rises as the story accelerates", vel[vel.length - 1].rate > vel[0].rate);
  ok("velocity: first sample counts itself", vel[0].count === 1);
  eq("velocity: empty input", mcTlVelocity([], 1000).length, 0);
  eq("velocity: bad window falls back to 1h", mcTlVelocity([{ text: "x", t: base }], 0)[0].rate, 1);

  // --- entity timeline
  const entDocs = [
    { text: "Aid convoy enters Gaza on Tuesday", t: base + 1 * mcTlUnitMs.hour, src: "reuters" },
    { text: "Gazan families describe the queue", t: base + 2 * mcTlUnitMs.hour, src: "afp" },
    { text: "Ceasefire talks resume over Gaza.", t: base + 3 * mcTlUnitMs.hour, src: "ap" },
    { text: "gaza aid trucks turned back", t: base + 4 * mcTlUnitMs.hour, src: "pa" },
    { text: "Markets steady in London", t: base + 5 * mcTlUnitMs.hour, src: "wire" }
  ];
  const ent = mcTlEntityTimeline(entDocs, "Gaza");
  eq("entity: word boundary excludes Gazan", ent.events.length, 3);
  ok("entity: trailing punctuation still matches", ent.events.some(function (e) { return e.text.indexOf("Ceasefire") === 0; }));
  ok("entity: case-insensitive", ent.events.some(function (e) { return e.text.indexOf("gaza aid") === 0; }));
  ok("entity: Gazan itself is excluded", !ent.events.some(function (e) { return e.text.indexOf("Gazan") === 0; }));
  eq("entity: unknown entity yields nothing", mcTlEntityTimeline(entDocs, "Reykjavik").events.length, 0);
  eq("entity: empty entity yields nothing", mcTlEntityTimeline(entDocs, "").events.length, 0);
  eq("entity: regex metacharacters are escaped", mcTlEntityTimeline([{ text: "a.c here", t: base }], "a.c").events.length, 1);
  eq("entity: metacharacter does not match wildcard", mcTlEntityTimeline([{ text: "abc here", t: base }], "a.c").events.length, 0);

  // --- dirty input
  const dirty = [
    { text: "third", t: base + 3000, src: "x" },
    { text: "bad", t: NaN, src: "x" },
    { text: "first", t: base + 1000, src: "x" },
    { text: "null t", t: null, src: "x" },
    { text: "second", t: base + 2000, src: "x" },
    { text: "undef t", src: "x" },
    null,
    { text: "iso", t: new Date(base + 4000).toISOString(), src: "x" }
  ];
  const tDirty = mcTlBuild(dirty);
  eq("dirty: unusable rows dropped", tDirty.events.length, 4);
  eq("dirty: sorted ascending", tDirty.events.map(function (e) { return e.text; }).join(","), "first,second,third,iso");
  ok("dirty: monotonic timestamps", tDirty.events.every(function (e, i, a) { return i === 0 || a[i - 1].t <= e.t; }));
  ok("dirty: first/last flags", tDirty.events[0].isFirst && tDirty.events[3].isLast);
  eq("dirty: first gapBefore is 0", tDirty.events[0].gapBefore, 0);

  // --- empty and single
  const tEmpty = mcTlBuild([]);
  eq("empty: no events", tEmpty.events.length, 0);
  eq("empty: no buckets", tEmpty.buckets.length, 0);
  eq("empty: span ms 0", tEmpty.span.ms, 0);
  eq("empty: null input tolerated", mcTlBuild(null).events.length, 0);
  const tOne = mcTlBuild([{ text: "only", t: base, src: "w" }]);
  ok("single: isFirst and isLast", tOne.events[0].isFirst && tOne.events[0].isLast);
  eq("single: span ms 0", tOne.span.ms, 0);
  ok("single: one bucket at least", tOne.buckets.length >= 1);

  // --- merge
  const merged = mcTlMerge(mk(5, mcTlUnitMs.hour, base, "A"), mk(5, mcTlUnitMs.hour, base + 30 * mcTlUnitMs.minute, "B"));
  eq("merge: all events present", merged.events.length, 10);
  eq("merge: lane tallies", merged.lanes.a + "/" + merged.lanes.b, "5/5");
  ok("merge: interleaved", merged.events[0].lane === "a" && merged.events[1].lane === "b");
  ok("merge: sorted", merged.events.every(function (e, i, a) { return i === 0 || a[i - 1].t <= e.t; }));
  eq("merge: empty lanes tolerated", mcTlMerge(null, null).events.length, 0);

  // --- human
  eq("human: 3m", mcTlHuman(3 * 60000), "3m");
  eq("human: 2h 14m", mcTlHuman(2 * 3600000 + 14 * 60000), "2h 14m");
  eq("human: 1d 4h", mcTlHuman(86400000 + 4 * 3600000), "1d 4h");
  eq("human: 0s", mcTlHuman(0), "0s");
  eq("human: 45s", mcTlHuman(45000), "45s");
  eq("human: NaN-safe", mcTlHuman(NaN), "0s");

  // --- scale
  const many = [];
  for (let i = 0; i < 5000; i++) many.push({ text: "doc " + i, t: base + Math.floor(Math.random() * 3 * mcTlUnitMs.day), src: "wire" });
  const t1 = Date.now();
  const tMany = mcTlBuild(many);
  const dtMany = Date.now() - t1;
  console.log("  build 5000 docs: " + dtMany + "ms, " + tMany.buckets.length + " buckets (" + tMany.bucketUnit + ")");
  eq("5000: every doc kept", tMany.events.length, 5000);
  ok("5000: bucket count stays sane", tMany.buckets.length >= 1 && tMany.buckets.length <= 25);
  eq("5000: counts sum", tMany.buckets.reduce(function (a, b) { return a + b.count; }, 0), 5000);
  ok("5000: fast (" + dtMany + "ms)", dtMany < 500);

  // --- misc null safety
  eq("diffWords: null inputs", mcTlDiffWords(null, null).length, 0);
  eq("diffStats: no ops means identical", mcTlDiffStats([]).similarity, 1);
  eq("diffStats: garbage ops", mcTlDiffStats(null).added, 0);
  eq("tokenizer: lossless", mcTlTokenizeWords("  a  b c ").join(""), "  a  b c ");

  console.log((fail === 0 ? "PASS" : "FAIL") + ": " + pass + " passed, " + fail + " failed, " + (pass + fail) + " assertions");
  if (fail > 0) process.exit(1);
}
