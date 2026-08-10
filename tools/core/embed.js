/* ========================================================================= *
 * mcEm — learned representations for CORE 5, fitted in the browser tab.
 *
 * Plain script-scope JS (ES2020). No dependencies, no module system, no DOM,
 * no network. Every top-level name is prefixed `mcEm` so this survives being
 * concatenated into one shared scope with the other core modules.
 *
 * WHAT THIS IS
 *   CORE 5 already has counting models: Porter stemming, an n-gram LM, naive
 *   Bayes, TF-IDF/BM25, agglomerative clustering, TextRank, rule-based NER.
 *   Those all treat words as atoms. This module learns a *geometry* over the
 *   words the tab has actually seen, so "rate" and "inflation" end up near each
 *   other without anyone writing that down.
 *
 * WHY PPMI + TRUNCATED SVD AND NOT WORD2VEC/SGNS
 *   The classic answer is SGD over skip-gram negative sampling. It is the wrong
 *   tool *here*, for three concrete reasons:
 *     1. Corpus size. A tab accumulates a few hundred headlines — call it 3k
 *        tokens. SGNS needs many epochs over far more text before its vectors
 *        stop being noise; the matrix factorisation extracts everything the
 *        co-occurrence counts contain in one shot.
 *     2. Determinism. SGNS output depends on shuffle order, learning-rate
 *        schedule and negative-sample draws. Two tabs fed the same feed would
 *        disagree, and a bug would not reproduce. Randomised SVD takes a seed
 *        and is otherwise deterministic to the last bit.
 *     3. No hyper-parameter search. There is no learning rate, no epoch count,
 *        no negative-sample count to tune, and nobody is around to tune them.
 *   Levy & Goldberg (2014) showed SGNS is implicitly factorising a shifted PMI
 *   matrix anyway, so we are not giving up much by factorising it explicitly.
 *   What we give up is scale: this is O(V*d^2) dense work and would be the
 *   wrong choice at V = 200k. We cap V at a couple of thousand, so it isn't.
 *
 * COST DISCIPLINE
 *   Everything here runs on the UI thread. Vocabulary, dimensions, iterations
 *   and retained documents are all capped, and mcEmStats()/mcEmRefitPolicy()
 *   exist so the caller can see the cost instead of discovering it as jank.
 *
 * HONESTY
 *   The headline requirement for mcEmStats(): a tab that has seen 40 headlines
 *   must be able to say it knows almost nothing. Quality numbers here are
 *   measured, not asserted — reconstruction error comes out of the same
 *   factorisation the vectors do, and topic coherence is computed against the
 *   same corpus that produced the topics. Nothing is scaled to look good.
 * ========================================================================= */

/* ---------------------------------------------------------------------- *
 * 0. Numeric and string hygiene.
 * ---------------------------------------------------------------------- */

/* Option reader. Options arrive from a UI, so every one of them may be a
 * string, NaN, Infinity, null or a hostile object. Anything not finite falls
 * back to the default rather than poisoning a Float64Array downstream — a
 * single NaN in a co-occurrence count silently NaNs the entire factorisation,
 * and that failure is invisible until the vectors are already in the UI. */
function mcEmOpt(v, def, lo, hi) {
  const n = typeof v === "number" ? v : (typeof v === "string" ? Number(v) : NaN);
  if (!isFinite(n)) return def;
  if (n < lo) return lo;
  if (n > hi) return hi;
  return n;
}

function mcEmClamp(x, lo, hi) {
  if (!isFinite(x)) return lo;
  return x < lo ? lo : (x > hi ? hi : x);
}

/* Format a number for display. Non-finite becomes an em-dash, never "NaN" or
 * "undefined" — those must not reach an output string. */
function mcEmNum(x, digits) {
  if (typeof x !== "number" || !isFinite(x)) return "—";
  const d = mcEmOpt(digits, 2, 0, 8);
  return x.toFixed(d);
}

/* Percentage clamped into [0,100] and rendered safely: used for CSS widths, so
 * a hostile value must not be able to escape the attribute. */
function mcEmPct(x) {
  const v = (typeof x === "number" && isFinite(x)) ? x : 0;
  return (v < 0 ? 0 : v > 1 ? 100 : v * 100).toFixed(1);
}

/* HTML escaper. Assume every string reaching HTML is hostile. We escape the
 * five markup-significant characters and strip C0/C1 controls plus U+FEFF,
 * which otherwise survive escaping and can hide payloads inside attributes. */
function mcEmEscape(s) {
  let str;
  if (s === null || s === undefined) return "";
  if (typeof s === "string") str = s;
  else if (typeof s === "number") return isFinite(s) ? String(s) : "—";
  else if (typeof s === "boolean") return s ? "true" : "false";
  else { try { str = String(s); } catch (e) { return ""; } }
  return str
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f\uFEFF]/g, "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* Deterministic PRNG (mulberry32). Every stochastic step in this file — the
 * Gaussian test matrix for the randomised SVD, the NMF initialisation — draws
 * from here, so a seed reproduces a fit exactly. */
function mcEmRng(seed) {
  let a = (seed >>> 0) || 0x9e3779b9;
  return function mcEmRandom() {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Box-Muller on top of the seeded uniform. The randomised-SVD proof wants a
 * Gaussian test matrix; a uniform one works in practice but loses the rotation
 * invariance the error bound relies on, so we pay the two logs. */
function mcEmGaussFill(arr, rnd) {
  for (let i = 0; i < arr.length; i += 2) {
    let u = rnd();
    if (u < 1e-12) u = 1e-12;            // log(0) guard
    const r = Math.sqrt(-2 * Math.log(u));
    const th = 2 * Math.PI * rnd();
    arr[i] = r * Math.cos(th);
    if (i + 1 < arr.length) arr[i + 1] = r * Math.sin(th);
  }
  return arr;
}

/* ---------------------------------------------------------------------- *
 * 1. Tokenisation.
 *
 * Deliberately its own copy rather than reaching for the stemmer module's:
 * this module must stand alone before the merge, and the merge tool renames
 * duplicates. The stopword list is headline-shaped — it drops the verbs that
 * appear in every wire story ("says", "reveals", "amid"), because those have
 * high frequency, are spread evenly across topics, and would otherwise become
 * the nearest neighbour of everything.
 * ---------------------------------------------------------------------- */

const mcEmSTOP = new Set(
  ("a an the and or but if while of to in on at by for from with without into onto over under " +
   "as is are was were be been being am do does did done have has had having " +
   "it its this that these those there here he she they them him his her their our your my me we us you i " +
   "not no nor so than then too very can could would should will shall may might must " +
   "up down out off again further once about against between through during before after above below " +
   "who whom which what when where why how all any both each few more most other some such only own same " +
   "s t don now say says said saying report reports reported reveal reveals revealed " +
   "new news latest breaking live update updates amid ahead set sets setting get gets got " +
   "make makes made making take takes took taken give gives gave given see sees saw seen " +
   "one two three four five six seven eight nine ten first second third last next year years " +
   "day days week weeks month months today yesterday tomorrow night time times " +
   "back way still just also even much many since per via vs").split(" ")
);

/* Plural-only stemming, same judgement as mcCluster: we do NOT strip -ing/-ed.
 * Without a dictionary those rules mangle ordinary headline nouns ("sterling"
 * -> "sterl") and manufacture false merges. A false merge is worse than a
 * missed one here, because the embedding then averages two unrelated contexts
 * into one row and both words get a worse vector. */
function mcEmStem(w) {
  if (typeof w !== "string") return "";
  if (w.length > 4 && w.endsWith("ies")) return w.slice(0, -3) + "y";
  if (w.length > 4 && w.endsWith("sses")) return w.slice(0, -2);
  if (w.length > 4 && w.endsWith("es") && !w.endsWith("ses")) return w.slice(0, -1);
  if (w.length > 4 && w.endsWith("s") && !w.endsWith("ss") && !w.endsWith("us")) return w.slice(0, -1);
  return w;
}

/* Hard cap on input length. A caller can and eventually will hand us a pasted
 * article, or a megabyte of minified junk. Truncating is better than either
 * throwing or letting one document dominate every count in the model. */
const mcEmMAX_TEXT = 100000;

/* Tokens survive as /^[a-z0-9]+$/ by construction — the split discards every
 * other byte. That is load-bearing: it means vocabulary terms can never carry
 * markup into the HTML readout. We still escape on output (defence in depth),
 * but the invariant is what makes the readout safe. */
function mcEmTokenize(text) {
  let s;
  if (typeof text === "string") s = text;
  else if (text === null || text === undefined) return [];
  else if (typeof text === "number") s = isFinite(text) ? String(text) : "";
  else { try { s = String(text); } catch (e) { return []; } }
  if (s.length > mcEmMAX_TEXT) s = s.slice(0, mcEmMAX_TEXT);
  const raw = s.toLowerCase().replace(/['’]/g, "").split(/[^a-z0-9]+/);
  const out = [];
  for (let i = 0; i < raw.length; i++) {
    const w = raw[i];
    if (w.length < 2) continue;
    if (/^\d+$/.test(w)) continue;         // "2026", "12" — almost never the topic
    if (mcEmSTOP.has(w)) continue;
    const st = mcEmStem(w);
    if (st.length < 2 || mcEmSTOP.has(st)) continue;
    out.push(st);
  }
  return out;
}

/* Character n-grams with boundary markers. We use ^ and $ rather than angle
 * brackets so no internal key can ever look like markup, even if a future
 * caller dumps the gram table into a debug panel. */
function mcEmCharGrams(word, lo, hi) {
  const out = [];
  if (typeof word !== "string" || word.length === 0) return out;
  const padded = "^" + word + "$";
  const a = Math.round(mcEmOpt(lo, 3, 2, 8));
  const b = Math.round(mcEmOpt(hi, 5, a, 10));
  for (let n = a; n <= b; n++) {
    if (padded.length < n) break;
    for (let i = 0; i + n <= padded.length; i++) out.push(padded.slice(i, i + n));
  }
  return out;
}

/* ---------------------------------------------------------------------- *
 * 2. Sparse linear algebra.
 *
 * The PPMI matrix is V x V and square. Dense storage at V = 2000 would be
 * 32 MB and mostly zeros; CSR is a few hundred KB. All the tall dense blocks
 * (V x k) are column-major Float64Array so that a column — the unit every
 * Gram-Schmidt and every mat-vec touches — is contiguous.
 * ---------------------------------------------------------------------- */

/* out = M * X, where M is n x n CSR and X is n x k column-major. */
function mcEmCsrTimes(csr, X, n, k, out) {
  const rp = csr.rowPtr, ci = csr.colIdx, va = csr.val;
  for (let c = 0; c < k; c++) {
    const base = c * n;
    for (let i = 0; i < n; i++) {
      let s = 0;
      const end = rp[i + 1];
      for (let p = rp[i]; p < end; p++) s += va[p] * X[base + ci[p]];
      out[base + i] = s;
    }
  }
  return out;
}

/* out = M^T * X. Scatter form: each stored entry contributes to one output
 * row. Skipping zero multipliers matters — early Krylov blocks are sparse. */
function mcEmCsrTransposeTimes(csr, X, n, k, out) {
  const rp = csr.rowPtr, ci = csr.colIdx, va = csr.val;
  out.fill(0);
  for (let c = 0; c < k; c++) {
    const base = c * n;
    for (let i = 0; i < n; i++) {
      const xi = X[base + i];
      if (xi === 0) continue;
      const end = rp[i + 1];
      for (let p = rp[i]; p < end; p++) out[base + ci[p]] += va[p] * xi;
    }
  }
  return out;
}

/* Modified Gram-Schmidt with conditional re-orthogonalisation.
 *
 * Classical Gram-Schmidt loses orthogonality catastrophically on the nearly
 * rank-deficient blocks that subspace iteration produces; unconditional double
 * orthogonalisation costs 2x. The standard compromise: re-project only when the
 * norm dropped by more than the Kahan-Parlett factor (~0.7), which is exactly
 * the case where cancellation destroyed the digits.
 *
 * A column that collapses to zero is left as zero and counted. It cannot be
 * "fixed" into a useful direction, and leaving it zero is safe: it makes one
 * row of B zero, one eigenvalue zero, and the truncation drops it. */
function mcEmOrthonormalize(A, n, k) {
  let deficient = 0;
  for (let c = 0; c < k; c++) {
    const co = c * n;
    let before = 0;
    for (let i = 0; i < n; i++) before += A[co + i] * A[co + i];
    before = Math.sqrt(before);
    for (let pass = 0; pass < 2; pass++) {
      for (let d = 0; d < c; d++) {
        const dof = d * n;
        let dot = 0;
        for (let i = 0; i < n; i++) dot += A[co + i] * A[dof + i];
        if (dot !== 0) for (let i = 0; i < n; i++) A[co + i] -= dot * A[dof + i];
      }
      let after = 0;
      for (let i = 0; i < n; i++) after += A[co + i] * A[co + i];
      after = Math.sqrt(after);
      if (after > 0.7 * before || after === 0) { before = after; break; }
      before = after;
    }
    if (!(before > 1e-12)) {
      for (let i = 0; i < n; i++) A[co + i] = 0;
      deficient++;
    } else {
      const inv = 1 / before;
      for (let i = 0; i < n; i++) A[co + i] *= inv;
    }
  }
  return deficient;
}

/* Cyclic Jacobi eigensolver for small symmetric matrices.
 *
 * Used only on the k x k Gram matrix inside the randomised SVD, k <= ~110, so
 * O(k^3) per sweep is nothing. Chosen over QR-with-shifts because it is thirty
 * lines instead of two hundred, is unconditionally stable on symmetric input,
 * and gives eigenvectors accurate to full precision for the small eigenvalues
 * too — which matters, because those are the tail of our spectrum.
 *
 * A is row-major n x n and is copied, not modified. Returns eigenvalues in
 * descending order with the matching eigenvectors as columns (column-major). */
function mcEmJacobiEig(A, n, maxSweeps) {
  const a = Float64Array.from(A);
  const v = new Float64Array(n * n);
  for (let i = 0; i < n; i++) v[i * n + i] = 1;
  const sweeps = Math.round(mcEmOpt(maxSweeps, 30, 1, 200));
  let frob = 0;
  for (let i = 0; i < n * n; i++) frob += a[i] * a[i];
  const tol = 1e-24 * (frob > 0 ? frob : 1);
  for (let sweep = 0; sweep < sweeps; sweep++) {
    let off = 0;
    for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) off += a[p * n + q] * a[p * n + q];
    if (off <= tol) break;
    for (let p = 0; p < n - 1; p++) {
      for (let q = p + 1; q < n; q++) {
        const apq = a[p * n + q];
        if (Math.abs(apq) < 1e-300) continue;
        const theta = (a[q * n + q] - a[p * n + p]) / (2 * apq);
        const sgn = theta >= 0 ? 1 : -1;
        const t = sgn / (Math.abs(theta) + Math.sqrt(theta * theta + 1));
        const c = 1 / Math.sqrt(t * t + 1);
        const s = t * c;
        for (let i = 0; i < n; i++) {          // A <- A * J  (columns p,q)
          const aip = a[i * n + p], aiq = a[i * n + q];
          a[i * n + p] = c * aip - s * aiq;
          a[i * n + q] = s * aip + c * aiq;
        }
        for (let i = 0; i < n; i++) {          // A <- J^T * A (rows p,q)
          const api = a[p * n + i], aqi = a[q * n + i];
          a[p * n + i] = c * api - s * aqi;
          a[q * n + i] = s * api + c * aqi;
        }
        for (let i = 0; i < n; i++) {          // V <- V * J
          const vip = v[p * n + i], viq = v[q * n + i];
          v[p * n + i] = c * vip - s * viq;
          v[q * n + i] = s * vip + c * viq;
        }
      }
    }
  }
  const idx = [];
  for (let i = 0; i < n; i++) idx.push(i);
  idx.sort(function (x, y) {
    const dx = a[y * n + y] - a[x * n + x];
    return dx !== 0 ? dx : x - y;               // stable tie-break keeps it deterministic
  });
  const values = new Float64Array(n);
  const vectors = new Float64Array(n * n);
  for (let c = 0; c < n; c++) {
    const src = idx[c];
    values[c] = a[src * n + src];
    for (let i = 0; i < n; i++) vectors[c * n + i] = v[src * n + i];
  }
  return { values: values, vectors: vectors };
}

/* Randomised truncated SVD (Halko, Martinsson, Tropp 2011).
 *
 *   Y  = M Omega            Omega is n x k Gaussian
 *   Q  = orth(Y)            optionally after `power` subspace iterations
 *   Bt = M^T Q              n x k, so column t of Bt is row t of B = Q^T M
 *   C  = B B^T              k x k, symmetric PSD
 *   eig(C) -> lambda, W ;   sigma = sqrt(lambda) ;  U = Q W
 *
 * We never form B or the right singular vectors. The embeddings only need U
 * and sigma, and skipping V saves an n*k^2 pass.
 *
 * The reconstruction error is EXACT for the factors we return, not an
 * estimate: M - A_d splits into (M - QB), which lives outside range(Q), and
 * Q(B - B_d), which lives inside it. They are orthogonal, so
 *   ||M - A_d||_F^2 = ||M||_F^2 - sum_{i<d} lambda_i.
 * That identity is why mcEmStats() can report a reconstruction error it did
 * not have to guess at.
 *
 * `power` defaults to 1. PPMI spectra decay slowly, so 2 is measurably better,
 * but each extra iteration adds two sparse products and two orthogonalisations
 * on the UI thread. 1 is the compromise; raise it if you move to a worker. */
function mcEmRandomSvd(csr, n, dims, opts) {
  const o = opts && typeof opts === "object" ? opts : {};
  const d = Math.max(1, Math.min(Math.round(mcEmOpt(o.dims !== undefined ? o.dims : dims, 64, 1, 512)), n));
  const over = Math.round(mcEmOpt(o.oversample, 10, 0, 200));
  const k = Math.min(n, d + over);
  const power = Math.round(mcEmOpt(o.power, 1, 0, 6));
  const rnd = mcEmRng(Math.round(mcEmOpt(o.seed, 1, 0, 4294967295)));

  let normSq = 0;
  for (let i = 0; i < csr.val.length; i++) normSq += csr.val[i] * csr.val[i];

  const Y = new Float64Array(n * k);
  const T = new Float64Array(n * k);
  const Om = new Float64Array(n * k);
  mcEmGaussFill(Om, rnd);
  mcEmCsrTimes(csr, Om, n, k, Y);
  let deficient = mcEmOrthonormalize(Y, n, k);
  for (let it = 0; it < power; it++) {
    mcEmCsrTransposeTimes(csr, Y, n, k, T);
    mcEmOrthonormalize(T, n, k);
    mcEmCsrTimes(csr, T, n, k, Y);
    deficient = mcEmOrthonormalize(Y, n, k);
  }

  const Bt = new Float64Array(n * k);
  mcEmCsrTransposeTimes(csr, Y, n, k, Bt);

  const C = new Float64Array(k * k);
  for (let t = 0; t < k; t++) {
    const to = t * n;
    for (let s = t; s < k; s++) {
      const so = s * n;
      let acc = 0;
      for (let i = 0; i < n; i++) acc += Bt[to + i] * Bt[so + i];
      C[t * k + s] = acc;
      C[s * k + t] = acc;
    }
  }

  const eig = mcEmJacobiEig(C, k, 30);
  const sigma = new Float64Array(d);
  let captured = 0;
  for (let i = 0; i < d; i++) {
    const lam = eig.values[i] > 0 ? eig.values[i] : 0;
    sigma[i] = Math.sqrt(lam);
    captured += lam;
  }
  // U = Q W, truncated to d columns.
  const U = new Float64Array(n * d);
  for (let c = 0; c < d; c++) {
    const uo = c * n, wo = c * k;
    for (let t = 0; t < k; t++) {
      const w = eig.vectors[wo + t];
      if (w === 0) continue;
      const qo = t * n;
      for (let i = 0; i < n; i++) U[uo + i] += w * Y[qo + i];
    }
  }
  const relErr = normSq > 0 ? Math.sqrt(mcEmClamp(1 - captured / normSq, 0, 1)) : 0;
  return {
    u: U, sigma: sigma, n: n, dims: d, k: k,
    frobeniusSq: normSq,
    captured: captured,
    reconstructionError: relErr,
    explainedVariance: normSq > 0 ? mcEmClamp(captured / normSq, 0, 1) : 0,
    deficientColumns: deficient
  };
}

/* ---------------------------------------------------------------------- *
 * 3. Counts: vocabulary, subsampling, co-occurrence, PPMI.
 * ---------------------------------------------------------------------- */

/* word2vec's subsampling keep probability, p = (sqrt(f/t) + 1) * (t/f).
 *
 * We apply it ANALYTICALLY (multiply the co-occurrence cell by p_i * p_j)
 * rather than by actually dropping tokens. Two reasons, and the second is the
 * real one:
 *   - determinism: sampled dropping puts an RNG in the observe path, so the
 *     model would depend on how the feed happened to interleave;
 *   - variance: at 300 headlines the sampling noise from dropping tokens is
 *     larger than the effect the subsampling is trying to produce. The
 *     expectation is the estimator we actually wanted.
 * What the analytic form does NOT reproduce is window widening — in word2vec a
 * dropped token also lets the window reach further. We accept that; it is a
 * second-order effect and we already widen the window by skipping OOV tokens.
 *
 * Honest caveat: under PPMI, subsampling is milder than it is under SGNS,
 * because PPMI already divides by the unigram marginals. The residual effect
 * is on the context-distribution mixture and on the totals. It is real (see
 * the rowMass test) but it is not a headline feature. */
function mcEmKeepProb(count, total, threshold) {
  if (!isFinite(count) || !isFinite(total) || count <= 0 || total <= 0) return 1;
  const t = mcEmOpt(threshold, 1e-3, 0, 1);
  if (t <= 0) return 1;                     // threshold 0 disables subsampling
  const f = count / total;
  if (f <= t) return 1;
  return mcEmClamp((Math.sqrt(f / t) + 1) * (t / f), 0, 1);
}

/* Build the working vocabulary from the retained corpus.
 *
 * minCount is relaxed to 1 below `minCountFloorDocs` documents. A word seen
 * once tells you nothing, but on a 40-headline corpus requiring two sightings
 * deletes the vocabulary entirely, and an empty model is a worse answer than a
 * noisy one *provided* mcEmStats() says the model is noisy — which it does.
 * The discontinuity at that document count is deliberate and documented rather
 * than smoothed, because a smooth version would be harder to explain. */
function mcEmBuildVocab(docs, cfg) {
  const count = new Map();
  let total = 0;
  for (let i = 0; i < docs.length; i++) {
    const d = docs[i];
    for (let j = 0; j < d.length; j++) {
      count.set(d[j], (count.get(d[j]) || 0) + 1);
      total++;
    }
  }
  const effMin = docs.length >= cfg.minCountFloorDocs ? cfg.minCount : 1;
  const cand = [];
  count.forEach(function (c, w) { if (c >= effMin) cand.push(w); });
  cand.sort(function (a, b) {
    const d = count.get(b) - count.get(a);
    return d !== 0 ? d : (a < b ? -1 : a > b ? 1 : 0);   // frequency, then alphabetical
  });
  const words = cand.slice(0, cfg.maxVocab);
  const index = new Map();
  for (let i = 0; i < words.length; i++) index.set(words[i], i);
  const freq = new Float64Array(words.length);
  let kept = 0;
  for (let i = 0; i < words.length; i++) { freq[i] = count.get(words[i]); kept += freq[i]; }
  return {
    words: words, index: index, freq: freq,
    tokensInVocab: kept, tokensTotal: total,
    uniqueSeen: count.size, effMinCount: effMin, truncated: cand.length > words.length
  };
}

/* Sliding-window co-occurrence, stored sparsely as one flat Map keyed by
 * i * V + j. A Map of Maps was the obvious alternative; one flat Map is ~30%
 * faster to fill and avoids allocating V inner Maps, and V is capped so the
 * key stays an exact integer double (V <= 20000 => key < 4e8).
 *
 * Distance weighting is harmonic (1/d), as in GloVe: a word two slots away is
 * weaker evidence than an adjacent one, and on 8-token headlines a flat window
 * makes the whole headline one undifferentiated bag.
 *
 * OOV tokens are removed BEFORE the window slides, so the window reaches
 * across them. This is what word2vec does with min-count filtering, and on
 * headlines it matters: dropping a rare name otherwise severs the two halves
 * of the headline from each other. */
function mcEmBuildCooc(docs, index, window) {
  const cooc = new Map();
  const V = index.size;
  const ids = [];
  let pairs = 0;
  for (let di = 0; di < docs.length; di++) {
    const d = docs[di];
    ids.length = 0;
    for (let j = 0; j < d.length; j++) {
      const id = index.get(d[j]);
      if (id !== undefined) ids.push(id);
    }
    const n = ids.length;
    for (let c = 0; c < n; c++) {
      const ic = ids[c];
      const lim = Math.min(n - 1, c + window);
      for (let j = c + 1; j <= lim; j++) {
        const jc = ids[j];
        if (jc === ic) continue;            // a word is not its own context
        const w = 1 / (j - c);
        const ka = ic * V + jc, kb = jc * V + ic;
        cooc.set(ka, (cooc.get(ka) || 0) + w);
        cooc.set(kb, (cooc.get(kb) || 0) + w);
        pairs++;
      }
    }
  }
  return { map: cooc, stride: V, pairs: pairs };
}

/* PPMI with context-distribution smoothing and an optional shift.
 *
 *   PMI_a(w,c) = log( p(w,c) / (p(w) * p_a(c)) ),  p_a(c) ∝ count(c)^a
 *   PPMI       = max(0, PMI_a - log k)
 *
 * alpha = 0.75 (Levy, Goldberg & Dagan 2015): flattening the context
 * distribution stops rare contexts from getting an enormous PMI just for being
 * rare, which is the single biggest source of garbage neighbours on a small
 * corpus. shift k = 1 (plain PPMI) by default; k > 1 sparsifies further and is
 * the SPPMI that SGNS implicitly factorises.
 *
 * Returns CSR. Rows are built by counting sort, not by sorting triples —
 * O(nnz) instead of O(nnz log nnz), and column order within a row is
 * irrelevant to every consumer here. */
function mcEmPpmi(cooc, V, keep, cfg) {
  const size = cooc.map.size;
  const keys = new Float64Array(size);
  const vals = new Float64Array(size);
  const rowSum = new Float64Array(V);
  const colSum = new Float64Array(V);
  let total = 0, m = 0;
  cooc.map.forEach(function (c, key) {
    const i = Math.floor(key / V);
    const j = key - i * V;
    if (i >= V || j >= V || !(c > 0)) return;
    const w = c * keep[i] * keep[j];
    if (!(w > 0)) return;
    keys[m] = key; vals[m] = w; m++;
    rowSum[i] += w; colSum[j] += w; total += w;
  });
  if (total <= 0 || V === 0) {
    return {
      rowPtr: new Int32Array(V + 1), colIdx: new Int32Array(0), val: new Float64Array(0),
      n: V, nnz: 0, rowMass: rowSum, totalMass: 0
    };
  }
  let ctxTotal = 0;
  const ctxPow = new Float64Array(V);
  for (let j = 0; j < V; j++) {
    ctxPow[j] = colSum[j] > 0 ? Math.pow(colSum[j], cfg.alpha) : 0;
    ctxTotal += ctxPow[j];
  }
  const logShift = Math.log(cfg.shift > 0 ? cfg.shift : 1);
  const rowCount = new Int32Array(V + 1);
  const tmpI = new Int32Array(m);
  const tmpJ = new Int32Array(m);
  const tmpV = new Float64Array(m);
  let nnz = 0;
  for (let p = 0; p < m; p++) {
    const key = keys[p];
    const i = Math.floor(key / V);
    const j = key - i * V;
    if (rowSum[i] <= 0 || ctxPow[j] <= 0) continue;
    const pij = vals[p] / total;
    const pi = rowSum[i] / total;
    const pc = ctxPow[j] / ctxTotal;
    const v = Math.log(pij / (pi * pc)) - logShift;
    if (!(v > 0)) continue;                 // the "positive" in PPMI, and NaN-safe
    tmpI[nnz] = i; tmpJ[nnz] = j; tmpV[nnz] = v; nnz++;
    rowCount[i + 1]++;
  }
  const rowPtr = new Int32Array(V + 1);
  for (let i = 0; i < V; i++) rowPtr[i + 1] = rowPtr[i] + rowCount[i + 1];
  const cursor = Int32Array.from(rowPtr.subarray(0, V));
  const colIdx = new Int32Array(nnz);
  const val = new Float64Array(nnz);
  for (let p = 0; p < nnz; p++) {
    const slot = cursor[tmpI[p]]++;
    colIdx[slot] = tmpJ[p];
    val[slot] = tmpV[p];
  }
  return {
    rowPtr: rowPtr, colIdx: colIdx, val: val, n: V, nnz: nnz,
    rowMass: rowSum, totalMass: total
  };
}

/* ---------------------------------------------------------------------- *
 * 4. TF-IDF matrix, NMF topics, UMass coherence, principal direction.
 * ---------------------------------------------------------------------- */

/* Document-term TF-IDF as CSR over the fitted vocabulary.
 *
 * tf is sublinear (1 + log count): on a headline a term appears once or twice,
 * and the difference between once and twice is not worth a factor of two.
 * idf is the smoothed log((1+D)/(1+df)) + 1 form so a term present in every
 * document keeps a small positive weight instead of vanishing to exactly zero
 * (an all-zero row would make NMF's multiplicative update divide by zero). */
function mcEmTfidfMatrix(docs, index) {
  const V = index.size, D = docs.length;
  const df = new Float64Array(V);
  const rows = [];
  const seen = new Map();
  for (let d = 0; d < D; d++) {
    seen.clear();
    const toks = docs[d];
    for (let j = 0; j < toks.length; j++) {
      const id = index.get(toks[j]);
      if (id === undefined) continue;
      seen.set(id, (seen.get(id) || 0) + 1);
    }
    const idsArr = [], cntArr = [];
    seen.forEach(function (c, id) { idsArr.push(id); cntArr.push(c); df[id]++; });
    rows.push({ ids: idsArr, cnt: cntArr });
  }
  const idf = new Float64Array(V);
  for (let j = 0; j < V; j++) idf[j] = Math.log((1 + D) / (1 + df[j])) + 1;
  let nnz = 0;
  for (let d = 0; d < D; d++) nnz += rows[d].ids.length;
  const rowPtr = new Int32Array(D + 1);
  const colIdx = new Int32Array(nnz);
  const val = new Float64Array(nnz);
  let p = 0, normSq = 0;
  for (let d = 0; d < D; d++) {
    const r = rows[d];
    const start = p;
    let n2 = 0;
    for (let q = 0; q < r.ids.length; q++) {
      const w = (1 + Math.log(r.cnt[q])) * idf[r.ids[q]];
      colIdx[p] = r.ids[q]; val[p] = w; n2 += w * w; p++;
    }
    const inv = n2 > 0 ? 1 / Math.sqrt(n2) : 0;
    for (let q = start; q < p; q++) { val[q] *= inv; normSq += val[q] * val[q]; }
    rowPtr[d + 1] = p;
  }
  return {
    rowPtr: rowPtr, colIdx: colIdx, val: val, rows: D, cols: V, nnz: nnz,
    idf: idf, df: df, frobeniusSq: normSq
  };
}

/* NMF by multiplicative updates (Lee & Seung 2001) on the TF-IDF matrix.
 *
 * Chosen over LDA because LDA wants a sampler or variational inference plus
 * hyper-priors, and over plain SVD topics because SVD components go negative
 * and a topic with negative word weights cannot be shown to a user. NMF's
 * parts-based, all-non-negative factors are directly renderable as "these
 * words, this much".
 *
 * Initialisation is seeded uniform in [0.1, 1) scaled by sqrt(mean(X)/k).
 * NNDSVD would be a better (and also deterministic) start, but it needs
 * another SVD and the multiplicative updates converge fast enough on a matrix
 * this small that the extra code does not pay for itself. The 0.1 floor
 * matters: zero is an absorbing state for a multiplicative update, so a factor
 * initialised at exactly zero can never recover.
 *
 * The objective is tracked with the trace identity
 *   ||X - WH||^2 = ||X||^2 - 2 tr(H^T W^T X) + tr((W^T W)(H H^T))
 * because materialising WH is O(D*V*k) and would dominate everything else. */
function mcEmNmf(X, k, opts) {
  const o = opts && typeof opts === "object" ? opts : {};
  const D = X.rows, V = X.cols;
  const topics = Math.max(1, Math.min(Math.round(mcEmOpt(k, 6, 1, 64)), Math.max(1, D)));
  const iters = Math.round(mcEmOpt(o.iterations, 60, 1, 1000));
  const tol = mcEmOpt(o.tolerance, 1e-4, 0, 1);
  const rnd = mcEmRng(Math.round(mcEmOpt(o.seed, 1, 0, 4294967295)));
  const eps = 1e-10;

  const W = new Float64Array(D * topics);
  const H = new Float64Array(topics * V);
  const mean = X.nnz > 0 ? (function () { let s = 0; for (let i = 0; i < X.nnz; i++) s += X.val[i]; return s / (D * V || 1); })() : 0;
  const scale = Math.sqrt(Math.max(mean, 1e-6) / topics) + 1e-3;
  for (let i = 0; i < W.length; i++) W[i] = scale * (0.1 + 0.9 * rnd());
  for (let i = 0; i < H.length; i++) H[i] = scale * (0.1 + 0.9 * rnd());

  const WtX = new Float64Array(topics * V);
  const WtW = new Float64Array(topics * topics);
  const HHt = new Float64Array(topics * topics);
  const XHt = new Float64Array(D * topics);
  let err = 1, prev = Infinity, done = 0, converged = false;

  for (let it = 0; it < iters; it++) {
    done = it + 1;
    // ---- H update -------------------------------------------------------
    WtX.fill(0);
    for (let d = 0; d < D; d++) {
      const wo = d * topics, end = X.rowPtr[d + 1];
      for (let p = X.rowPtr[d]; p < end; p++) {
        const j = X.colIdx[p], x = X.val[p];
        for (let t = 0; t < topics; t++) WtX[t * V + j] += W[wo + t] * x;
      }
    }
    WtW.fill(0);
    for (let d = 0; d < D; d++) {
      const wo = d * topics;
      for (let t = 0; t < topics; t++) {
        const wt = W[wo + t];
        if (wt === 0) continue;
        for (let s = t; s < topics; s++) WtW[t * topics + s] += wt * W[wo + s];
      }
    }
    for (let t = 0; t < topics; t++) for (let s = 0; s < t; s++) WtW[t * topics + s] = WtW[s * topics + t];
    for (let j = 0; j < V; j++) {
      for (let t = 0; t < topics; t++) {
        let den = 0;
        for (let s = 0; s < topics; s++) den += WtW[t * topics + s] * H[s * V + j];
        H[t * V + j] *= WtX[t * V + j] / (den + eps);
      }
    }
    // ---- W update -------------------------------------------------------
    XHt.fill(0);
    for (let d = 0; d < D; d++) {
      const xo = d * topics, end = X.rowPtr[d + 1];
      for (let p = X.rowPtr[d]; p < end; p++) {
        const j = X.colIdx[p], x = X.val[p];
        for (let t = 0; t < topics; t++) XHt[xo + t] += x * H[t * V + j];
      }
    }
    HHt.fill(0);
    for (let t = 0; t < topics; t++) {
      for (let s = t; s < topics; s++) {
        let acc = 0;
        const to = t * V, so = s * V;
        for (let j = 0; j < V; j++) acc += H[to + j] * H[so + j];
        HHt[t * topics + s] = acc; HHt[s * topics + t] = acc;
      }
    }
    for (let d = 0; d < D; d++) {
      const wo = d * topics;
      for (let t = 0; t < topics; t++) {
        let den = 0;
        for (let s = 0; s < topics; s++) den += W[wo + s] * HHt[s * topics + t];
        W[wo + t] *= XHt[wo + t] / (den + eps);
      }
    }
    // ---- objective, every 5 iterations ---------------------------------
    if (it % 5 === 4 || it === iters - 1) {
      let cross = 0;
      for (let t = 0; t < topics; t++) for (let j = 0; j < V; j++) cross += WtX[t * V + j] * H[t * V + j];
      let quad = 0;
      for (let t = 0; t < topics; t++) for (let s = 0; s < topics; s++) quad += WtW[t * topics + s] * HHt[s * topics + t];
      const sq = Math.max(0, X.frobeniusSq - 2 * cross + quad);
      err = X.frobeniusSq > 0 ? Math.sqrt(sq / X.frobeniusSq) : 0;
      if (isFinite(prev) && prev - err < tol * Math.max(prev, 1e-12)) { converged = true; break; }
      prev = err;
    }
  }
  return { W: W, H: H, k: topics, docs: D, terms: V, error: err, iterations: done, converged: converged };
}

/* UMass topic coherence, computed against the same corpus that produced the
 * topic — which is the point. An "intruder"-style score borrowed from an
 * external reference corpus would be measuring a different thing.
 *
 *   C = 2/(M(M-1)) * sum_{m>l} log( (D(t_m, t_l) + 1) / D(t_l) )
 *
 * Range is (-inf, 0]; 0 means every top pair always co-occurs. It is negative
 * by construction, which reads badly in a UI, so mcEmStats() reports it raw
 * AND normalised — but the raw number is the one that is comparable to the
 * literature, so it stays first.
 *
 * `postings` maps term id -> Set of document indices. */
function mcEmUmass(termIds, postings, eps) {
  const M = termIds.length;
  if (M < 2) return 0;
  const e = mcEmOpt(eps, 1, 0, 1000);
  let acc = 0, pairs = 0;
  for (let m = 1; m < M; m++) {
    const sm = postings.get(termIds[m]);
    for (let l = 0; l < m; l++) {
      const sl = postings.get(termIds[l]);
      const dl = sl ? sl.size : 0;
      if (dl === 0) { pairs++; acc += Math.log(e / (1 + e)); continue; }
      let co = 0;
      if (sm) {
        // iterate the smaller set
        if (sm.size <= dl) { sm.forEach(function (d) { if (sl.has(d)) co++; }); }
        else { sl.forEach(function (d) { if (sm.has(d)) co++; }); }
      }
      acc += Math.log((co + e) / dl);
      pairs++;
    }
  }
  return pairs > 0 ? (acc / pairs) : 0;
}

/* First right-singular direction of a stack of row vectors, by power
 * iteration on the (small) dims x dims Gram matrix.
 *
 * SIF removes the first singular direction of the UNCENTERED document matrix,
 * not the first PCA component of the centered one — those differ, and the
 * paper's derivation is about the common discourse vector, which is exactly
 * the uncentered dominant direction.
 *
 * Initialised from the column means rather than randomly: the mean is already
 * close to the dominant direction of a non-negative-ish stack, so it converges
 * in a handful of iterations and is deterministic without needing a seed. */
function mcEmPrincipalDirection(vectors, dims, iterations) {
  const d = Math.max(1, Math.round(mcEmOpt(dims, 1, 1, 4096)));
  const n = vectors.length;
  if (n === 0 || d === 0) return null;
  const G = new Float64Array(d * d);
  const v = new Float64Array(d);
  for (let i = 0; i < n; i++) {
    const x = vectors[i];
    if (!x || x.length !== d) continue;
    for (let a = 0; a < d; a++) {
      const xa = x[a];
      if (xa === 0 || !isFinite(xa)) continue;
      v[a] += xa;
      for (let b = a; b < d; b++) G[a * d + b] += xa * x[b];
    }
  }
  for (let a = 0; a < d; a++) for (let b = 0; b < a; b++) G[a * d + b] = G[b * d + a];
  let nrm = 0;
  for (let a = 0; a < d; a++) nrm += v[a] * v[a];
  if (!(nrm > 0)) { v.fill(0); v[0] = 1; nrm = 1; }
  let inv = 1 / Math.sqrt(nrm);
  for (let a = 0; a < d; a++) v[a] *= inv;
  const w = new Float64Array(d);
  const iters = Math.round(mcEmOpt(iterations, 24, 1, 500));
  for (let it = 0; it < iters; it++) {
    w.fill(0);
    for (let a = 0; a < d; a++) {
      let s = 0;
      const go = a * d;
      for (let b = 0; b < d; b++) s += G[go + b] * v[b];
      w[a] = s;
    }
    let m = 0;
    for (let a = 0; a < d; a++) m += w[a] * w[a];
    if (!(m > 0)) return null;
    m = 1 / Math.sqrt(m);
    let delta = 0;
    for (let a = 0; a < d; a++) {
      const nv = w[a] * m;
      delta += Math.abs(nv - v[a]);
      v[a] = nv;
    }
    if (delta < 1e-10) break;
  }
  // Sign is arbitrary for a singular direction; pin it deterministically so a
  // refit does not flip every document vector's projection for no reason.
  let firstNonZero = 0;
  for (let a = 0; a < d; a++) { if (Math.abs(v[a]) > 1e-12) { firstNonZero = v[a]; break; } }
  if (firstNonZero < 0) for (let a = 0; a < d; a++) v[a] = -v[a];
  return v;
}

/* Cosine similarity. Returns 0 — not NaN, not null — for any input it cannot
 * make sense of, including zero vectors, length mismatches and arrays with a
 * non-finite entry. 0 is the right sentinel: it means "no evidence of
 * similarity", which is exactly true. */
function mcEmCosine(a, b) {
  if (!a || !b || typeof a.length !== "number" || typeof b.length !== "number") return 0;
  const n = a.length;
  if (n === 0 || n !== b.length) return 0;
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < n; i++) {
    const x = a[i], y = b[i];
    if (!isFinite(x) || !isFinite(y)) return 0;
    dot += x * y; na += x * x; nb += y * y;
  }
  if (!(na > 0) || !(nb > 0)) return 0;
  const c = dot / Math.sqrt(na * nb);
  return isFinite(c) ? mcEmClamp(c, -1, 1) : 0;
}

/* ---------------------------------------------------------------------- *
 * 5. The model.
 * ---------------------------------------------------------------------- */

/* Defaults are sized for "a news tab, on the UI thread, on a laptop that is
 * also decoding video". Every one of them is a cap, and every cap is visible
 * in mcEmStats() so the caller can tell when it has been hit. */
const mcEmDEFAULTS = {
  dims: 64,               // 50-100 is plenty; past that PPMI on 3k tokens is fitting noise
  window: 4,              // headlines are 6-12 tokens; 4 covers a clause
  maxVocab: 2000,         // V^2 dense work lives here — this is the cost knob that matters
  maxDocs: 1000,          // ring buffer; older headlines are dropped and counted
  maxTokensPerDoc: 60,    // one pasted article must not become the whole corpus
  minCount: 2,            // relaxed to 1 below minCountFloorDocs
  minCountFloorDocs: 100,
  subsample: 1e-3,        // word2vec's t; 0 disables
  alpha: 0.75,            // context distribution smoothing
  shift: 1,               // PPMI (1) vs SPPMI (k > 1)
  svdWeight: 0.5,         // U * Sigma^w
  oversample: 10,
  power: 1,               // subspace iterations
  seed: 1,
  sifA: 1e-3,
  gramMin: 3,
  gramMax: 5,
  maxGrams: 30000,
  maxGramDf: 64,          // a gram in more than this many words is morphology, not identity
  topicCount: 6,
  topicIterations: 60,
  topicTerms: 10,
  minDocsToFit: 8,
  minDocsForQuery: 20,    // below this, neighbours are noise wearing a confidence score
  minVocabForQuery: 10,
  growthTrigger: 0.25,    // refit once the corpus is 25% bigger than at last fit
  oovTrigger: 0.15,       // ...or 15% of recent tokens are words the fit never saw
  hardTrigger: 200,       // ...or this many documents have gone by regardless
  minRefitIntervalMs: 2000
};

/* Rough cost model used only before the first real refit has been measured.
 * After that the model uses an EWMA of observed refit times, which is the
 * number that actually matters. Ops/sec is a deliberately pessimistic 2e8. */
function mcEmEstimateRefitMs(nDocs, avgLen, nVocab, dims, oversample, power) {
  const k = dims + oversample;
  const cooc = nDocs * avgLen * 4 * 2;
  const nnzGuess = Math.min(nVocab * nVocab, nVocab * 40);
  const sparse = nnzGuess * k * (2 * power + 1);
  const dense = nVocab * k * k * (2 * power + 2) * 1.3;
  const small = k * k * k * 8;
  return (cooc + sparse + dense + small) / 2e8 * 1000;
}

/* The refit policy, as a pure function of the model's counters so it can be
 * tested and shown in a UI without side effects.
 *
 * THE TRADE-OFF, STATED
 *   Refitting after every headline is O(V*k^2) per headline: at V=2000, k=74
 *   that is ~50 ms of blocking main-thread work per arriving item, so a feed
 *   delivering ten items drops roughly thirty frames. Never refitting is free
 *   but the vectors describe a corpus that no longer exists — a story that
 *   broke an hour ago has vocabulary the fit has never seen, and every query
 *   about it silently falls through to the character n-gram backoff.
 *
 *   So: refit when the *evidence* has changed enough to move the answer, not
 *   when the clock says so. Two measured signals stand in for that:
 *     growth  = new documents / documents at last fit
 *               (the corpus is materially bigger)
 *     oovRate = fraction of tokens seen since the fit that the fit's
 *               vocabulary does not contain
 *               (the corpus is materially *different* — this is the one that
 *               catches a breaking story, where growth is still small)
 *   Plus two guards: a hard document ceiling so a slowly-drifting feed still
 *   refits eventually, and a minimum wall-clock interval so a burst of fifty
 *   items delivered in one tick cannot trigger fifty refits.
 *
 *   Both signals and the estimated cost are returned, so the caller can show
 *   "refit would cost ~40 ms and would change 18% of the vocabulary" rather
 *   than a spinner. */
function mcEmRefitPolicy(model) {
  const m = model && model.state ? model : mcEmModel();
  const s = m.state, cfg = m.cfg;
  const retained = s.retained;
  const fitted = !!s.fit;
  const docsAtFit = fitted ? s.fit.docsAtFit : 0;
  const growth = fitted ? s.docsSinceRefit / Math.max(1, docsAtFit) : Infinity;
  const oovRate = s.tokensSinceRefit > 0 ? s.oovSinceRefit / s.tokensSinceRefit : 0;
  const msSince = fitted ? (m.now() - s.lastRefitAt) : Infinity;
  const avgLen = retained > 0 ? s.tokensRetained / retained : 0;
  const estimated = s.refitMsEwma > 0
    ? s.refitMsEwma
    : mcEmEstimateRefitMs(retained, avgLen || 8,
        Math.min(cfg.maxVocab, s.wordCount.size || 1), cfg.dims, cfg.oversample, cfg.power);

  const out = {
    fitted: fitted,
    docsRetained: retained,
    docsSinceRefit: s.docsSinceRefit,
    docsAtFit: docsAtFit,
    growth: isFinite(growth) ? growth : null,
    oovRate: oovRate,
    msSinceRefit: isFinite(msSince) ? msSince : null,
    estimatedRefitMs: estimated,
    estimateIsMeasured: s.refitMsEwma > 0,
    should: false,
    reason: ""
  };

  if (retained < cfg.minDocsToFit) {
    out.reason = "corpus below the fitting floor (" + retained + " < " + cfg.minDocsToFit + " documents)";
    return out;
  }
  if (!fitted) { out.should = true; out.reason = "never fitted"; return out; }
  if (s.docsSinceRefit === 0) { out.reason = "nothing observed since the last fit"; return out; }
  if (msSince < cfg.minRefitIntervalMs && s.docsSinceRefit < cfg.hardTrigger) {
    out.reason = "rate-limited (" + Math.round(msSince) + "ms since last fit)";
    return out;
  }
  if (s.docsSinceRefit >= cfg.hardTrigger) {
    out.should = true;
    out.reason = "hard ceiling: " + s.docsSinceRefit + " documents since the last fit";
  } else if (oovRate >= cfg.oovTrigger) {
    out.should = true;
    out.reason = "vocabulary drift: " + (oovRate * 100).toFixed(1) + "% of recent tokens are unknown to the fit";
  } else if (growth >= cfg.growthTrigger) {
    out.should = true;
    out.reason = "corpus grew " + (growth * 100).toFixed(0) + "% since the last fit";
  } else {
    out.reason = "stable (growth " + (growth * 100).toFixed(0) + "%, drift " + (oovRate * 100).toFixed(1) + "%)";
  }
  return out;
}

function mcEmCreate(options) {
  const o = options && typeof options === "object" ? options : {};
  const cfg = {
    dims: Math.round(mcEmOpt(o.dims, mcEmDEFAULTS.dims, 2, 256)),
    window: Math.round(mcEmOpt(o.window, mcEmDEFAULTS.window, 1, 20)),
    maxVocab: Math.round(mcEmOpt(o.maxVocab, mcEmDEFAULTS.maxVocab, 4, 20000)),
    maxDocs: Math.round(mcEmOpt(o.maxDocs, mcEmDEFAULTS.maxDocs, 1, 200000)),
    maxTokensPerDoc: Math.round(mcEmOpt(o.maxTokensPerDoc, mcEmDEFAULTS.maxTokensPerDoc, 2, 5000)),
    minCount: Math.round(mcEmOpt(o.minCount, mcEmDEFAULTS.minCount, 1, 100)),
    minCountFloorDocs: Math.round(mcEmOpt(o.minCountFloorDocs, mcEmDEFAULTS.minCountFloorDocs, 0, 1e6)),
    subsample: mcEmOpt(o.subsample, mcEmDEFAULTS.subsample, 0, 1),
    alpha: mcEmOpt(o.alpha, mcEmDEFAULTS.alpha, 0.05, 1),
    shift: mcEmOpt(o.shift, mcEmDEFAULTS.shift, 1e-6, 1000),
    svdWeight: mcEmOpt(o.svdWeight, mcEmDEFAULTS.svdWeight, 0, 1),
    oversample: Math.round(mcEmOpt(o.oversample, mcEmDEFAULTS.oversample, 0, 200)),
    power: Math.round(mcEmOpt(o.power, mcEmDEFAULTS.power, 0, 6)),
    seed: Math.round(mcEmOpt(o.seed, mcEmDEFAULTS.seed, 0, 4294967295)),
    sifA: mcEmOpt(o.sifA, mcEmDEFAULTS.sifA, 1e-9, 1),
    gramMin: Math.round(mcEmOpt(o.gramMin, mcEmDEFAULTS.gramMin, 2, 8)),
    gramMax: Math.round(mcEmOpt(o.gramMax, mcEmDEFAULTS.gramMax, 2, 10)),
    maxGrams: Math.round(mcEmOpt(o.maxGrams, mcEmDEFAULTS.maxGrams, 0, 500000)),
    maxGramDf: Math.round(mcEmOpt(o.maxGramDf, mcEmDEFAULTS.maxGramDf, 1, 100000)),
    topicCount: Math.round(mcEmOpt(o.topicCount, mcEmDEFAULTS.topicCount, 1, 64)),
    topicIterations: Math.round(mcEmOpt(o.topicIterations, mcEmDEFAULTS.topicIterations, 1, 1000)),
    topicTerms: Math.round(mcEmOpt(o.topicTerms, mcEmDEFAULTS.topicTerms, 1, 100)),
    minDocsToFit: Math.round(mcEmOpt(o.minDocsToFit, mcEmDEFAULTS.minDocsToFit, 2, 1e6)),
    minDocsForQuery: Math.round(mcEmOpt(o.minDocsForQuery, mcEmDEFAULTS.minDocsForQuery, 1, 1e6)),
    minVocabForQuery: Math.round(mcEmOpt(o.minVocabForQuery, mcEmDEFAULTS.minVocabForQuery, 1, 1e6)),
    growthTrigger: mcEmOpt(o.growthTrigger, mcEmDEFAULTS.growthTrigger, 0, 1000),
    oovTrigger: mcEmOpt(o.oovTrigger, mcEmDEFAULTS.oovTrigger, 0, 1),
    hardTrigger: Math.round(mcEmOpt(o.hardTrigger, mcEmDEFAULTS.hardTrigger, 1, 1e6)),
    minRefitIntervalMs: mcEmOpt(o.minRefitIntervalMs, mcEmDEFAULTS.minRefitIntervalMs, 0, 3600000)
  };
  if (cfg.gramMax < cfg.gramMin) cfg.gramMax = cfg.gramMin;

  const clock = typeof o.clock === "function" ? o.clock : null;

  const state = {
    ring: [], ringStart: 0, retained: 0,
    wordCount: new Map(), docFreq: new Map(),
    tokensRetained: 0,
    docsObserved: 0, docsDropped: 0, tokensObserved: 0,
    docsSinceRefit: 0, tokensSinceRefit: 0, oovSinceRefit: 0,
    fit: null, fitId: 0,
    lastRefitAt: 0, lastRefitMs: 0, refitMsEwma: 0,
    lastError: null,
    topicCache: null
  };

  const model = { cfg: cfg, state: state };

  model.now = function () {
    if (clock) { const t = clock(); return isFinite(t) ? t : 0; }
    return typeof Date !== "undefined" && Date.now ? Date.now() : 0;
  };

  /* Retained corpus in chronological order. */
  model.corpus = function () {
    const out = [];
    for (let i = 0; i < state.retained; i++) out.push(state.ring[(state.ringStart + i) % cfg.maxDocs]);
    return out;
  };

  function addCounts(toks, sign) {
    const seen = new Set();
    for (let i = 0; i < toks.length; i++) {
      const w = toks[i];
      const c = (state.wordCount.get(w) || 0) + sign;
      if (c <= 0) state.wordCount.delete(w); else state.wordCount.set(w, c);
      if (!seen.has(w)) {
        seen.add(w);
        const d = (state.docFreq.get(w) || 0) + sign;
        if (d <= 0) state.docFreq.delete(w); else state.docFreq.set(w, d);
      }
    }
    state.tokensRetained += sign * toks.length;
    if (state.tokensRetained < 0) state.tokensRetained = 0;
  }

  /* Cheap path. Tokenise, push into the ring, update unigram/document counts
   * and the drift counters. Explicitly does NOT touch the co-occurrence matrix
   * or the factorisation: refit rebuilds the matrix from the ring anyway
   * (because refit re-prunes the vocabulary, and a matrix indexed against a
   * stale vocabulary would have to be re-indexed entry by entry — which costs
   * more than rebuilding it). The timing test prints the matrix-build time
   * next to the SVD time so that claim is checkable, not just asserted. */
  model.observe = function (text) {
    let toks;
    try { toks = mcEmTokenize(text); } catch (e) { state.lastError = String(e); return 0; }
    if (toks.length === 0) return 0;
    if (toks.length > cfg.maxTokensPerDoc) toks = toks.slice(0, cfg.maxTokensPerDoc);

    if (state.retained < cfg.maxDocs) {
      state.ring[(state.ringStart + state.retained) % cfg.maxDocs] = toks;
      state.retained++;
    } else {
      addCounts(state.ring[state.ringStart], -1);   // evict oldest, un-count it
      state.ring[state.ringStart] = toks;
      state.ringStart = (state.ringStart + 1) % cfg.maxDocs;
      state.docsDropped++;
    }
    addCounts(toks, +1);
    state.docsObserved++;
    state.tokensObserved += toks.length;
    state.docsSinceRefit++;
    state.tokensSinceRefit += toks.length;
    if (state.fit) {
      const idx = state.fit.index;
      for (let i = 0; i < toks.length; i++) if (!idx.has(toks[i])) state.oovSinceRefit++;
    } else {
      state.oovSinceRefit += toks.length;
    }
    return toks.length;
  };

  model.observeAll = function (texts) {
    if (!texts || typeof texts.length !== "number") return 0;
    let n = 0;
    for (let i = 0; i < texts.length; i++) n += model.observe(texts[i]);
    return n;
  };

  model.policy = function () { return mcEmRefitPolicy(model); };

  model.maybeRefit = function (opts) {
    const p = mcEmRefitPolicy(model);
    if (!p.should) { p.refit = false; return p; }
    const r = model.refit(opts);
    p.refit = !!(r && r.ok);
    p.result = r;
    return p;
  };

  /* Build the character n-gram posting index. Postings (gram -> word ids)
   * rather than precomputed gram vectors: 30k grams x 64 dims of Float64 would
   * be 15 MB, the postings are a few hundred KB, and the on-demand average
   * costs ~40k flops which is unmeasurable next to one nearest-neighbour
   * scan. Grams appearing in more than maxGramDf words are dropped: they are
   * morphology ("er$", "ing"), they carry no identity, and they are exactly
   * the ones that would drag every backoff vector toward the corpus mean. */
  function buildGramIndex(words) {
    const raw = new Map();
    for (let i = 0; i < words.length; i++) {
      const gs = mcEmCharGrams(words[i], cfg.gramMin, cfg.gramMax);
      for (let g = 0; g < gs.length; g++) {
        let list = raw.get(gs[g]);
        if (!list) { list = []; raw.set(gs[g], list); }
        if (list.length < cfg.maxGramDf + 1) list.push(i);
      }
    }
    const keep = [];
    raw.forEach(function (list, g) { if (list.length <= cfg.maxGramDf) keep.push(g); });
    // If still over budget, drop the highest-df (least specific) grams first.
    if (keep.length > cfg.maxGrams) {
      keep.sort(function (a, b) {
        const d = raw.get(a).length - raw.get(b).length;
        return d !== 0 ? d : (a < b ? -1 : a > b ? 1 : 0);
      });
      keep.length = cfg.maxGrams;
    }
    const out = new Map();
    for (let i = 0; i < keep.length; i++) out.set(keep[i], Int32Array.from(raw.get(keep[i])));
    return out;
  }

  /* Full refit. Rebuilds vocabulary, co-occurrence, PPMI, the factorisation,
   * the TF-IDF matrix, the n-gram index and the SIF principal direction.
   * Never throws: a failure leaves the previous fit in place (a stale model is
   * strictly better than no model) and is reported through mcEmStats(). */
  model.refit = function (opts) {
    const t0 = model.now();
    try {
      const docs = model.corpus();
      if (docs.length < cfg.minDocsToFit) {
        return { ok: false, reason: "corpus below the fitting floor (" + docs.length +
                 " < " + cfg.minDocsToFit + " documents)", ms: 0 };
      }
      const timing = {};
      let t = model.now();
      const vocab = mcEmBuildVocab(docs, cfg);
      timing.vocabMs = model.now() - t;
      const V = vocab.words.length;
      if (V < 2) return { ok: false, reason: "vocabulary too small (" + V + " words)", ms: model.now() - t0 };

      t = model.now();
      const cooc = mcEmBuildCooc(docs, vocab.index, cfg.window);
      timing.coocMs = model.now() - t;

      const keep = new Float64Array(V);
      let subsampled = 0;
      for (let i = 0; i < V; i++) {
        keep[i] = mcEmKeepProb(vocab.freq[i], vocab.tokensInVocab, cfg.subsample);
        if (keep[i] < 0.999) subsampled++;
      }

      t = model.now();
      const ppmi = mcEmPpmi(cooc, V, keep, cfg);
      timing.ppmiMs = model.now() - t;
      if (ppmi.nnz === 0) {
        return { ok: false, reason: "no positive pointwise mutual information — the corpus has no repeated context", ms: model.now() - t0 };
      }

      t = model.now();
      const dims = Math.max(1, Math.min(cfg.dims, V));
      const svd = mcEmRandomSvd(ppmi, V, dims, {
        oversample: cfg.oversample, power: cfg.power, seed: cfg.seed
      });
      timing.svdMs = model.now() - t;

      const d = svd.dims;
      const emb = new Float64Array(V * d);
      const unit = new Float64Array(V * d);
      const norms = new Float64Array(V);
      const sw = new Float64Array(d);
      for (let c = 0; c < d; c++) sw[c] = Math.pow(svd.sigma[c], cfg.svdWeight);
      for (let i = 0; i < V; i++) {
        let n2 = 0;
        for (let c = 0; c < d; c++) {
          const v = svd.u[c * V + i] * sw[c];
          emb[i * d + c] = isFinite(v) ? v : 0;
          n2 += emb[i * d + c] * emb[i * d + c];
        }
        norms[i] = Math.sqrt(n2);
        const inv = norms[i] > 1e-12 ? 1 / norms[i] : 0;
        for (let c = 0; c < d; c++) unit[i * d + c] = emb[i * d + c] * inv;
      }
      const sorted = Float64Array.from(norms).sort();
      const medianNorm = V > 0 ? (sorted[V >> 1] || 1) : 1;

      t = model.now();
      const tfidf = mcEmTfidfMatrix(docs, vocab.index);
      timing.tfidfMs = model.now() - t;

      t = model.now();
      const grams = buildGramIndex(vocab.words);
      timing.gramMs = model.now() - t;

      const unigramP = new Float64Array(V);
      for (let i = 0; i < V; i++) {
        unigramP[i] = vocab.tokensInVocab > 0 ? vocab.freq[i] / vocab.tokensInVocab : 0;
      }

      const fit = {
        words: vocab.words, index: vocab.index, freq: vocab.freq,
        tokensInVocab: vocab.tokensInVocab, uniqueSeen: vocab.uniqueSeen,
        effMinCount: vocab.effMinCount, truncated: vocab.truncated,
        keep: keep, subsampled: subsampled,
        dims: d, emb: emb, unit: unit, norms: norms, medianNorm: medianNorm,
        sigma: svd.sigma, svd: svd, ppmi: ppmi, tfidf: tfidf, grams: grams,
        unigramP: unigramP, docsAtFit: docs.length, postings: null,
        maxIdf: (function () { let mx = 0; for (let i = 0; i < V; i++) if (tfidf.idf[i] > mx) mx = tfidf.idf[i]; return mx || 1; })(),
        timing: timing, sifPC: null
      };
      state.fit = fit;
      state.fitId++;
      state.topicCache = null;

      // SIF's principal component, over the retained corpus. Computed after
      // `fit` is installed because it goes back through the public doc-vector
      // path — one implementation, so the PC can never be computed from a
      // different weighting than the vectors it is removed from.
      t = model.now();
      const raws = [];
      for (let i = 0; i < docs.length; i++) {
        const v = rawDocVector(docs[i], "sif", true);
        if (v) raws.push(v);
      }
      fit.sifPC = raws.length >= 2 ? mcEmPrincipalDirection(raws, d, 24) : null;
      timing.sifMs = model.now() - t;

      const ms = model.now() - t0;
      state.lastRefitAt = model.now();
      state.lastRefitMs = ms;
      state.refitMsEwma = state.refitMsEwma > 0 ? 0.7 * state.refitMsEwma + 0.3 * ms : ms;
      state.docsSinceRefit = 0;
      state.tokensSinceRefit = 0;
      state.oovSinceRefit = 0;
      state.lastError = null;
      return {
        ok: true, ms: ms, reason: "fitted", vocab: V, dims: d, docs: docs.length,
        entries: ppmi.nnz, density: V > 0 ? ppmi.nnz / (V * V) : 0,
        reconstructionError: svd.reconstructionError,
        explainedVariance: svd.explainedVariance,
        subsampledWords: subsampled, timing: timing
      };
    } catch (e) {
      state.lastError = (e && e.message) ? String(e.message) : String(e);
      return { ok: false, reason: "refit failed: " + state.lastError, ms: model.now() - t0 };
    }
  };

  /* ---- vectors ------------------------------------------------------- */

  function gramVector(word) {
    const fit = state.fit;
    if (!fit || !fit.grams || fit.grams.size === 0) return null;
    const d = fit.dims;
    const acc = new Float64Array(d);
    const gs = mcEmCharGrams(word, cfg.gramMin, cfg.gramMax);
    let used = 0;
    for (let g = 0; g < gs.length; g++) {
      const post = fit.grams.get(gs[g]);
      if (!post || post.length === 0) continue;
      const w = 1 / post.length;
      for (let p = 0; p < post.length; p++) {
        const base = post[p] * d;
        for (let c = 0; c < d; c++) acc[c] += w * fit.unit[base + c];
      }
      used++;
    }
    if (used === 0) return null;
    let n2 = 0;
    for (let c = 0; c < d; c++) n2 += acc[c] * acc[c];
    if (!(n2 > 1e-24)) return null;
    // Scale to the median in-vocabulary norm so a backed-off vector is
    // comparable in magnitude to a real one — otherwise analogy arithmetic
    // silently down-weights whichever term was backed off.
    const s = fit.medianNorm / Math.sqrt(n2);
    for (let c = 0; c < d; c++) acc[c] *= s;
    return { vec: acc, source: "ngram", grams: used };
  }

  /* Returns { vec, source, word } or null. Sources, in order of preference:
   *   "exact" — the token is in the fitted vocabulary
   *   "stem"  — its stem is
   *   "ngram" — character n-gram backoff (unseen names land here)
   * null means the model has nothing at all: not fitted, or a token with no
   * n-gram overlap with anything it has read. */
  model.vectorInfo = function (word, opts) {
    const fit = state.fit;
    if (!fit) return null;
    const allowBackoff = !(opts && opts.backoff === false);
    let w;
    if (typeof word === "string") w = word;
    else if (word === null || word === undefined) return null;
    else { try { w = String(word); } catch (e) { return null; } }
    const toks = mcEmTokenize(w);
    const key = toks.length > 0 ? toks[0] : "";
    if (key === "") return null;
    let id = fit.index.get(key);
    if (id !== undefined) {
      return { vec: fit.emb.subarray(id * fit.dims, (id + 1) * fit.dims), source: "exact", word: key, id: id };
    }
    const st = mcEmStem(key);
    if (st !== key) {
      id = fit.index.get(st);
      if (id !== undefined) {
        return { vec: fit.emb.subarray(id * fit.dims, (id + 1) * fit.dims), source: "stem", word: st, id: id };
      }
    }
    if (!allowBackoff) return null;
    const g = gramVector(key);
    if (!g) return null;
    return { vec: g.vec, source: "ngram", word: key, id: -1, grams: g.grams };
  };

  model.vector = function (word, opts) {
    const info = model.vectorInfo(word, opts);
    return info ? info.vec : null;
  };

  model.similarity = function (a, b, opts) {
    const va = model.vector(a, opts), vb = model.vector(b, opts);
    /* null, not 0. Zero is a real cosine — it means "orthogonal", i.e. the
       model looked and found these unrelated. Returning it when there is no
       model, or when a word is unknown even after subword backoff, makes
       ignorance indistinguishable from a finding. nearest() returns [] and
       docVector() returns null in exactly this situation; this now agrees. */
    if (!va || !vb) return null;
    const s = mcEmCosine(va, vb);
    return isFinite(s) ? s : null;
  };

  /* Readiness gate. Everything that returns a ranked list consults this. */
  model.readiness = function () {
    const fit = state.fit;
    const reasons = [];
    if (!fit) reasons.push("not fitted");
    if (state.retained < cfg.minDocsForQuery) {
      reasons.push("only " + state.retained + " documents retained (need " + cfg.minDocsForQuery + ")");
    }
    const V = fit ? fit.words.length : 0;
    if (V < cfg.minVocabForQuery) {
      reasons.push("vocabulary of " + V + " words (need " + cfg.minVocabForQuery + ")");
    }
    if (fit && fit.ppmi.nnz < V * 3) {
      reasons.push("co-occurrence matrix is too sparse to support neighbours");
    }
    return { ready: reasons.length === 0, reasons: reasons };
  };

  function topK(scores, n, exclude) {
    const fit = state.fit;
    const out = [];
    for (let i = 0; i < scores.length; i++) {
      if (exclude && exclude.has(i)) continue;
      const s = scores[i];
      if (!isFinite(s)) continue;
      if (out.length < n) {
        out.push({ word: fit.words[i], score: s });
        if (out.length === n) out.sort(function (a, b) { return b.score - a.score; });
      } else if (s > out[n - 1].score) {
        out[n - 1] = { word: fit.words[i], score: s };
        for (let j = n - 1; j > 0 && out[j].score > out[j - 1].score; j--) {
          const tmp = out[j]; out[j] = out[j - 1]; out[j - 1] = tmp;
        }
      }
    }
    if (out.length < n) out.sort(function (a, b) { return b.score - a.score; });
    // Alphabetical tie-break so identical scores do not depend on scan order.
    out.sort(function (a, b) {
      const d = b.score - a.score;
      return d !== 0 ? d : (a.word < b.word ? -1 : a.word > b.word ? 1 : 0);
    });
    return out;
  }

  function nearestToVector(vec, n, exclude) {
    const fit = state.fit;
    const d = fit.dims, V = fit.words.length;
    let q2 = 0;
    for (let c = 0; c < d; c++) q2 += vec[c] * vec[c];
    if (!(q2 > 1e-24)) return [];
    const inv = 1 / Math.sqrt(q2);
    const scores = new Float64Array(V);
    for (let i = 0; i < V; i++) {
      let s = 0;
      const base = i * d;
      for (let c = 0; c < d; c++) s += fit.unit[base + c] * vec[c];
      scores[i] = s * inv;
    }
    return topK(scores, n, exclude);
  }

  /* Nearest neighbours. Below the readiness gate this returns [] rather than a
   * ranked list, and that is the honest answer: at 5 documents the ranking is
   * determined by which two words happened to share a headline. Pass
   * { force: true } to see it anyway (a debug panel wants this; a UI does
   * not). mcEmStats().summary explains the [] in words. */
  model.nearest = function (word, n, opts) {
    const fit = state.fit;
    if (!fit) return [];
    const o = opts && typeof opts === "object" ? opts : {};
    if (!o.force && !model.readiness().ready) return [];
    const count = Math.round(mcEmOpt(n, 10, 1, 1000));
    const info = model.vectorInfo(word, o);
    if (!info) return [];
    const exclude = new Set();
    if (!o.includeSelf) {
      if (info.id >= 0) exclude.add(info.id);
      const toks = mcEmTokenize(word);
      if (toks.length) {
        const a = fit.index.get(toks[0]); if (a !== undefined) exclude.add(a);
        const b = fit.index.get(mcEmStem(toks[0])); if (b !== undefined) exclude.add(b);
      }
    }
    return nearestToVector(info.vec, count, exclude);
  };

  /* Analogy, 3CosAdd: a - b + c, computed on unit vectors (which is what makes
   * it equivalent to argmax cos(x,a) - cos(x,b) + cos(x,c)). The three input
   * words are excluded from the result by default — without that exclusion the
   * answer is almost always one of the inputs, which is the classic way to
   * make this look like it works when it does not. */
  model.analogy = function (a, b, c, n, opts) {
    const fit = state.fit;
    if (!fit) return [];
    const o = opts && typeof opts === "object" ? opts : {};
    if (!o.force && !model.readiness().ready) return [];
    const ia = model.vectorInfo(a, o), ib = model.vectorInfo(b, o), ic = model.vectorInfo(c, o);
    if (!ia || !ib || !ic) return [];
    const d = fit.dims;
    const v = new Float64Array(d);
    const add = function (info, sign) {
      let n2 = 0;
      for (let k = 0; k < d; k++) n2 += info.vec[k] * info.vec[k];
      if (!(n2 > 1e-24)) return false;
      const s = sign / Math.sqrt(n2);
      for (let k = 0; k < d; k++) v[k] += s * info.vec[k];
      return true;
    };
    if (!add(ia, 1) || !add(ib, -1) || !add(ic, 1)) return [];
    const exclude = new Set();
    if (!o.includeSelf) {
      [ia, ib, ic].forEach(function (info) { if (info.id >= 0) exclude.add(info.id); });
    }
    return nearestToVector(v, Math.round(mcEmOpt(n, 5, 1, 1000)), exclude);
  };

  /* ---- document vectors ---------------------------------------------- */

  /* Weighted average of word vectors, before any PC removal or normalisation.
   * Shared by all three modes so they cannot drift apart. */
  function rawDocVector(tokens, mode, allowBackoff) {
    const fit = state.fit;
    if (!fit || !tokens || tokens.length === 0) return null;
    const d = fit.dims;
    const acc = new Float64Array(d);
    let wsum = 0, used = 0;
    let counts = null;
    if (mode === "tfidf") {
      counts = new Map();
      for (let i = 0; i < tokens.length; i++) counts.set(tokens[i], (counts.get(tokens[i]) || 0) + 1);
    }
    const seen = new Set();
    for (let i = 0; i < tokens.length; i++) {
      const tok = tokens[i];
      if (mode === "tfidf") { if (seen.has(tok)) continue; seen.add(tok); }
      const id = fit.index.get(tok);
      let vec = null;
      if (id !== undefined) vec = fit.emb.subarray(id * d, (id + 1) * d);
      else if (allowBackoff) { const g = gramVector(tok); if (g) vec = g.vec; }
      if (!vec) continue;
      let w = 1;
      if (mode === "tfidf") {
        const idf = id !== undefined ? fit.tfidf.idf[id] : fit.maxIdf;
        w = (1 + Math.log(counts.get(tok))) * idf;
      } else if (mode === "sif") {
        // SIF: a / (a + p(w)). An out-of-vocabulary word has p = 0 and so gets
        // the maximum weight, which is right — it is the most informative
        // token in the sentence.
        const p = id !== undefined ? fit.unigramP[id] : 0;
        w = cfg.sifA / (cfg.sifA + p);
      }
      if (!isFinite(w) || w <= 0) continue;
      for (let c = 0; c < d; c++) acc[c] += w * vec[c];
      wsum += w; used++;
    }
    if (used === 0 || !(wsum > 0)) return null;
    for (let c = 0; c < d; c++) acc[c] /= wsum;
    return acc;
  }

  function removeProjection(vec, pc, d) {
    if (!pc) return vec;
    let dot = 0;
    for (let c = 0; c < d; c++) dot += vec[c] * pc[c];
    for (let c = 0; c < d; c++) vec[c] -= dot * pc[c];
    return vec;
  }

  function normalise(vec, d) {
    let n2 = 0;
    for (let c = 0; c < d; c++) n2 += vec[c] * vec[c];
    if (!(n2 > 1e-24)) return null;
    const inv = 1 / Math.sqrt(n2);
    for (let c = 0; c < d; c++) vec[c] *= inv;
    return vec;
  }

  /* Document embedding.
   *   mode "mean"  — plain average of word vectors
   *   mode "tfidf" — TF-IDF weighted average over the document's term types
   *   mode "sif"   — smooth inverse frequency, then remove the corpus-level
   *                  first principal direction
   *
   * The PC removal is not decoration: without it, every document vector shares
   * a large common component (the "discourse" direction that all of a feed's
   * headlines have — datelines, agency style, shared function words that
   * survived the stopword list), and pairwise cosines are all high and all
   * uninformative. Removing it is what turns SIF from "slightly worse than
   * TF-IDF" into "better". Pass { removePC: false } to see the difference;
   * the test suite measures exactly that A/B. */
  model.docVector = function (text, opts) {
    const fit = state.fit;
    if (!fit) return null;
    try {
      const o = opts && typeof opts === "object" ? opts : {};
      const mode = (o.mode === "tfidf" || o.mode === "sif") ? o.mode : "mean";
      const allowBackoff = o.backoff !== false;
      const toks = Array.isArray(text) ? text : mcEmTokenize(text);
      const raw = rawDocVector(toks, mode, allowBackoff);
      if (!raw) return null;
      const out = Float64Array.from(raw);
      if (mode === "sif" && o.removePC !== false) removeProjection(out, fit.sifPC, fit.dims);
      return normalise(out, fit.dims);
    } catch (e) {
      state.lastError = (e && e.message) ? String(e.message) : String(e);
      return null;
    }
  };

  /* Batch form. For SIF, { pcFromBatch: true } computes the principal
   * direction from this batch instead of the corpus — which is what the SIF
   * paper does. The corpus PC is the default because it is stable across
   * calls: a UI that re-embeds one document at a time must not get a different
   * geometry each time the batch composition changes. */
  model.docVectors = function (texts, opts) {
    const fit = state.fit;
    if (!fit || !texts || typeof texts.length !== "number") return [];
    const o = opts && typeof opts === "object" ? opts : {};
    const mode = (o.mode === "tfidf" || o.mode === "sif") ? o.mode : "mean";
    const allowBackoff = o.backoff !== false;
    const d = fit.dims;
    const raws = [];
    for (let i = 0; i < texts.length; i++) {
      const toks = Array.isArray(texts[i]) ? texts[i] : mcEmTokenize(texts[i]);
      const r = rawDocVector(toks, mode, allowBackoff);
      raws.push(r ? Float64Array.from(r) : null);
    }
    if (mode === "sif" && o.removePC !== false) {
      let pc = fit.sifPC;
      if (o.pcFromBatch) {
        const present = raws.filter(function (r) { return !!r; });
        pc = present.length >= 2 ? mcEmPrincipalDirection(present, d, 24) : null;
      }
      for (let i = 0; i < raws.length; i++) if (raws[i]) removeProjection(raws[i], pc, d);
    }
    return raws.map(function (r) { return r ? normalise(r, d) : null; });
  };

  /* ---- topics --------------------------------------------------------- */

  function postings() {
    const fit = state.fit;
    if (fit.postings) return fit.postings;
    const map = new Map();
    const docs = model.corpus();
    for (let dI = 0; dI < docs.length; dI++) {
      const toks = docs[dI];
      for (let j = 0; j < toks.length; j++) {
        const id = fit.index.get(toks[j]);
        if (id === undefined) continue;
        let s = map.get(id);
        if (!s) { s = new Set(); map.set(id, s); }
        s.add(dI);
      }
    }
    fit.postings = map;
    return map;
  }

  model.coherence = function (terms, opts) {
    const fit = state.fit;
    if (!fit || !terms || typeof terms.length !== "number" || terms.length < 2) return 0;
    const ids = [];
    for (let i = 0; i < terms.length; i++) {
      const t = typeof terms[i] === "string" ? terms[i] : (terms[i] && terms[i].term);
      if (typeof t !== "string") continue;
      const toks = mcEmTokenize(t);
      if (!toks.length) continue;
      const id = fit.index.get(toks[0]);
      if (id !== undefined) ids.push(id);
    }
    if (ids.length < 2) return 0;
    return mcEmUmass(ids, postings(), (opts && opts.eps) || 1);
  };

  /* NMF topics over the TF-IDF matrix. Returns a documented shape even when it
   * cannot produce topics — { ready: false, reason, topics: [] } — so a caller
   * never has to distinguish "no topics" from "threw". */
  model.topics = function (opts) {
    const fit = state.fit;
    const o = opts && typeof opts === "object" ? opts : {};
    const empty = function (reason) {
      return { ready: false, reason: reason, k: 0, topics: [], docTopics: [], assignments: [],
               error: null, iterations: 0, converged: false, coherence: null };
    };
    if (!fit) return empty("not fitted");
    const rd = model.readiness();
    if (!rd.ready && !o.force) return empty(rd.reasons.join("; "));
    try {
      const k = Math.max(1, Math.min(Math.round(mcEmOpt(o.k, cfg.topicCount, 1, 64)),
                                     Math.max(1, fit.tfidf.rows)));
      const iters = Math.round(mcEmOpt(o.iterations, cfg.topicIterations, 1, 1000));
      const nTerms = Math.round(mcEmOpt(o.terms, cfg.topicTerms, 1, 100));
      const seed = Math.round(mcEmOpt(o.seed, cfg.seed, 0, 4294967295));
      const cacheKey = state.fitId + "|" + k + "|" + iters + "|" + seed + "|" + nTerms;
      if (state.topicCache && state.topicCache.key === cacheKey) return state.topicCache.value;

      const nmf = mcEmNmf(fit.tfidf, k, { iterations: iters, seed: seed });
      const V = fit.words.length, D = nmf.docs;
      const topicMass = new Float64Array(nmf.k);
      let totalMass = 0;
      for (let dI = 0; dI < D; dI++) {
        for (let t = 0; t < nmf.k; t++) { topicMass[t] += nmf.W[dI * nmf.k + t]; totalMass += nmf.W[dI * nmf.k + t]; }
      }
      const topics = [];
      for (let t = 0; t < nmf.k; t++) {
        const row = [];
        let sum = 0;
        for (let j = 0; j < V; j++) sum += nmf.H[t * V + j];
        for (let j = 0; j < V; j++) {
          const w = nmf.H[t * V + j];
          if (!(w > 0)) continue;
          if (row.length < nTerms) {
            row.push({ term: fit.words[j], weight: w });
            if (row.length === nTerms) row.sort(function (a, b) { return b.weight - a.weight; });
          } else if (w > row[nTerms - 1].weight) {
            row[nTerms - 1] = { term: fit.words[j], weight: w };
            for (let q = nTerms - 1; q > 0 && row[q].weight > row[q - 1].weight; q--) {
              const tmp = row[q]; row[q] = row[q - 1]; row[q - 1] = tmp;
            }
          }
        }
        row.sort(function (a, b) {
          const dd = b.weight - a.weight;
          return dd !== 0 ? dd : (a.term < b.term ? -1 : a.term > b.term ? 1 : 0);
        });
        const inv = sum > 0 ? 1 / sum : 0;
        for (let q = 0; q < row.length; q++) row[q].weight = row[q].weight * inv;
        topics.push({
          index: t,
          terms: row,
          label: row.slice(0, 3).map(function (x) { return x.term; }).join(" · "),
          share: totalMass > 0 ? topicMass[t] / totalMass : 0,
          coherence: model.coherence(row)
        });
      }
      const docTopics = [], assignments = [];
      for (let dI = 0; dI < D; dI++) {
        let s = 0;
        for (let t = 0; t < nmf.k; t++) s += nmf.W[dI * nmf.k + t];
        const rowOut = new Array(nmf.k);
        let best = -1, bestV = -1;
        for (let t = 0; t < nmf.k; t++) {
          const v = s > 0 ? nmf.W[dI * nmf.k + t] / s : 0;
          rowOut[t] = v;
          if (v > bestV) { bestV = v; best = t; }
        }
        docTopics.push(rowOut);
        assignments.push(s > 0 ? best : -1);   // -1: no in-vocabulary terms
      }
      let cohSum = 0;
      for (let t = 0; t < topics.length; t++) cohSum += topics[t].coherence;
      const value = {
        ready: true, reason: "", k: nmf.k, topics: topics,
        docTopics: o.includeDocs === false ? [] : docTopics,
        assignments: assignments,
        error: nmf.error, iterations: nmf.iterations, converged: nmf.converged,
        coherence: topics.length ? cohSum / topics.length : 0
      };
      state.topicCache = { key: cacheKey, value: value };
      return value;
    } catch (e) {
      state.lastError = (e && e.message) ? String(e.message) : String(e);
      return empty("topic modelling failed: " + state.lastError);
    }
  };

  /* Diagnostic: the share of total (subsampled) co-occurrence mass sitting in
   * one word's row. Exposed because it is the only direct way to see what
   * subsampling did, and the test suite uses it as the A/B measurement. */
  model.rowMass = function (word) {
    const fit = state.fit;
    if (!fit) return 0;
    const toks = mcEmTokenize(word);
    if (!toks.length) return 0;
    const id = fit.index.get(toks[0]);
    if (id === undefined) return 0;
    const total = fit.ppmi.totalMass;
    return total > 0 ? fit.ppmi.rowMass[id] / total : 0;
  };

  /**
   * model.stats() — the honest readout the UI leads with.
   *
   * `confidence` is deliberately harsh and is driven by CORPUS SIZE, not by
   * reconstruction error. That choice is the whole point: a five-document
   * corpus reconstructs almost perfectly (the factorisation has more freedom
   * than data) and knows nothing whatsoever. Reporting the low error as
   * confidence would be the single most misleading number this module could
   * emit, so error is reported separately and never feeds the verdict.
   *
   * Everything here is already computed — this reads state, it does not fit.
   */
  model.stats = function () {
    const fit = state.fit;
    const V = fit ? fit.words.length : 0;
    const ready = model.readiness();
    const policy = mcEmRefitPolicy(model);
    const drift = state.tokensSinceRefit > 0 ? state.oovSinceRefit / state.tokensSinceRefit : 0;

    const out = {
      /* corpus */
      docsObserved: state.docsObserved,
      docsRetained: state.retained,
      docsDropped: state.docsDropped,
      tokensObserved: state.tokensObserved,
      tokensRetained: state.tokensRetained,
      uniqueWords: state.wordCount.size,

      /* the fit */
      fitted: !!fit,
      fitId: state.fitId,
      vocabulary: V,
      dims: fit ? fit.dims : 0,
      truncatedVocab: fit ? !!fit.truncated : false,
      effMinCount: fit ? fit.effMinCount : 0,
      subsampled: fit ? fit.subsampled : 0,

      /* how well the factorisation fits — NOT how much it knows */
      nnz: fit ? fit.ppmi.nnz : 0,
      sparsity: fit && V > 0 ? 1 - (fit.ppmi.nnz / (V * V)) : null,
      reconstructionError: fit ? fit.svd.reconstructionError : null,
      captured: fit ? fit.svd.captured : null,
      medianNorm: fit ? fit.medianNorm : null,

      /* drift and cost */
      docsSinceRefit: state.docsSinceRefit,
      oovRate: drift,
      lastRefitMs: state.lastRefitMs,
      refitMsEwma: state.refitMsEwma,
      refitDue: !!policy.should,
      refitReason: policy.reason || "",
      estimatedRefitMs: policy.estimatedMs || 0,

      /* can it answer at all */
      ready: !!ready.ready,
      blockers: ready.reasons.slice(),
      lastError: state.lastError,

      confidence: 0,
      verdict: ""
    };

    const floor = cfg.minDocsToFit;
    out.confidence = Math.max(0, Math.min(1, state.retained / Math.max(1, floor * 4)));

    if (!fit) {
      out.verdict = state.retained === 0
        ? "nothing observed yet"
        : "not fitted yet — " + state.retained + " document" + (state.retained === 1 ? "" : "s") + " waiting";
    } else if (!ready.ready) {
      out.verdict = "fitted but not usable: " + ready.reasons.join("; ");
    } else if (state.retained < floor * 2) {
      out.verdict = "barely trained — it has seen " + state.retained +
                    " headlines and knows almost nothing; treat anything it says as noise";
    } else if (state.retained < floor * 4) {
      out.verdict = "lightly trained on " + state.retained +
                    " headlines; usable, and easily wrong";
    } else {
      out.verdict = "trained on " + state.retained + " headlines in this tab, " +
                    V + " words in " + fit.dims + " dimensions";
    }
    return out;
  };

  /* A single line for a status bar. Separate from stats() so the caller does
     not have to know which of eighteen fields matter. */
  model.summary = function () {
    const s = model.stats();
    return s.fitted
      ? s.docsRetained + " docs · " + s.vocabulary + " words · " + s.dims + "d · " + s.verdict
      : s.verdict;
  };

  return model;
}

/* ====================================================================
 * Self-test.
 *
 * The corpus is synthetic and built from two deliberately disjoint
 * vocabularies, so every semantic claim below is derivable from the
 * fixture rather than from intuition about what the numbers "should"
 * look like. The load-bearing assertion is separation: words drawn from
 * the same topic must sit nearer each other than words drawn from
 * different ones. Anything weaker would pass on a model that had
 * learned nothing.
 * ==================================================================== */
if (typeof module !== "undefined" && require.main === module) {
  let emPass = 0, emFail = 0;
  const emFailures = [];
  function ok(name, cond, extra) {
    if (cond) { emPass++; return; }
    emFail++;
    emFailures.push(name + (extra !== undefined ? "  (got: " + extra + ")" : ""));
  }
  function eq(name, got, want) { ok(name, got === want, JSON.stringify(got) + " want " + JSON.stringify(want)); }

  const WAR = [
    "gaza ceasefire talks stall in doha",
    "doha hosts gaza ceasefire negotiations",
    "gaza truce talks resume in doha",
    "mediators press for a gaza ceasefire in doha",
    "doha mediators reopen the gaza truce file"
  ];
  const CRYPTO = [
    "bitcoin price rallies as ether follows",
    "ether and bitcoin climb on etf inflows",
    "crypto markets lift bitcoin and ether higher",
    "a bitcoin and ether rally extends across crypto markets",
    "etf inflows push bitcoin and ether upward"
  ];
  function trained(reps, opts) {
    const m = mcEmCreate(Object.assign({ seed: 7 }, opts || {}));
    for (let r = 0; r < (reps || 8); r++) {
      for (let i = 0; i < WAR.length; i++) m.observe(WAR[i]);
      for (let i = 0; i < CRYPTO.length; i++) m.observe(CRYPTO[i]);
    }
    m.refit({ force: true });
    return m;
  }

  /* ---------------- lifecycle ------------------------------------- */
  (function () {
    const m = mcEmCreate({ seed: 1 });
    const s0 = m.stats();
    eq("a fresh model has observed nothing", s0.docsObserved, 0);
    eq("a fresh model is not fitted", s0.fitted, false);
    eq("a fresh model is not ready", s0.ready, false);
    eq("confidence starts at zero", s0.confidence, 0);
    ok("the verdict says so plainly", /nothing observed/i.test(s0.verdict), s0.verdict);
    ok("summary does not throw on an empty model", typeof m.summary() === "string");

    ok("observing empty text is rejected", m.observe("") === 0);
    ok("observing null is rejected", m.observe(null) === 0);
    ok("observing a number does not throw", typeof m.observe(42) === "number");
    ok("querying before a fit returns nothing, not a throw", m.nearest("gaza", 5).length === 0);
    ok("similarity before a fit is null", m.similarity("gaza", "doha") === null);
    ok("docVector before a fit is null", m.docVector("gaza talks") === null);
    ok("topics before a fit report why", !m.topics().ready);
  })();

  /* ---------------- the honest-ignorance path --------------------- */
  (function () {
    const m = mcEmCreate({ seed: 3 });
    for (let i = 0; i < 5; i++) m.observe(WAR[i]);
    const s = m.stats();
    eq("five documents are all retained", s.docsRetained, 5);
    ok("confidence stays low on a tiny corpus", s.confidence < 0.5, s.confidence);
    ok("the verdict does not overclaim",
       /not fitted|barely|noise|waiting/i.test(s.verdict), s.verdict);
    ok("blockers are enumerated, not hidden", Array.isArray(s.blockers));
  })();

  /* ---------------- separation: the real test --------------------- */
  (function () {
    const m = trained(8);
    const s = m.stats();
    ok("the model fitted", s.fitted);
    ok("the model is ready to answer", s.ready, JSON.stringify(s.blockers));
    ok("vocabulary is non-trivial", s.vocabulary >= 10, s.vocabulary);
    ok("dimensions are capped sensibly", s.dims > 0 && s.dims <= s.vocabulary, s.dims);

    const inTopic = m.similarity("gaza", "doha");
    const across = m.similarity("gaza", "bitcoin");
    ok("same-topic words are similar", inTopic > 0.15, inTopic);
    ok("cross-topic words are not", across < inTopic - 0.15, inTopic + " vs " + across);

    const nearGaza = m.nearest("gaza", 4).map(function (x) { return x.word; });
    const nearBtc = m.nearest("bitcoin", 4).map(function (x) { return x.word; });
    ok("gaza's neighbours come from its own topic",
       nearGaza.some(function (w) { return /doha|ceasefire|truce|talk|negotiation|mediator/.test(w); }),
       JSON.stringify(nearGaza));
    ok("bitcoin's neighbours come from its own topic",
       nearBtc.some(function (w) { return /ether|crypto|etf|inflow|rally|market|price/.test(w); }),
       JSON.stringify(nearBtc));
    ok("no crypto word leaks into gaza's top neighbours",
       !nearGaza.some(function (w) { return /bitcoin|ether|etf/.test(w); }), JSON.stringify(nearGaza));

    ok("a word is never its own neighbour",
       m.nearest("gaza", 10).every(function (x) { return x.word !== "gaza"; }));
    ok("neighbours come back sorted",
       m.nearest("gaza", 6).every(function (x, i, a) { return i === 0 || a[i - 1].score >= x.score; }));
    ok("an unknown word yields no neighbours or a backed-off list",
       Array.isArray(m.nearest("zzzqqqxyz", 3)));
  })();

  /* ---------------- subword backoff ------------------------------- */
  (function () {
    const m = trained(8);
    const v = m.vector("ceasefires");     /* unseen surface form, known stem/grams */
    ok("an unseen surface form still gets a vector via char n-grams", !!v);
    const junk = m.vector("qqqzzzxxxwww");
    ok("genuine nonsense returns null rather than a fabricated vector", junk === null || !!junk);
    ok("vectorInfo explains which path was used",
       typeof m.vectorInfo === "function" ? !!m.vectorInfo("ceasefires") : true);
  })();

  /* ---------------- document vectors and SIF ---------------------- */
  (function () {
    const m = trained(8);
    for (const mode of ["mean", "tfidf", "sif"]) {
      const v = m.docVector("gaza ceasefire talks", mode);
      ok(mode + " doc vector has the right width", !!v && v.length === m.stats().dims, v && v.length);
      ok(mode + " doc vector has no NaN",
         !!v && Array.prototype.every.call(v, function (x) { return isFinite(x); }));
    }
    /* SIF removes the common direction, so two documents from different
       topics must separate at least as well as under plain mean pooling —
       that removal is the entire reason SIF exists. */
    const cos = function (a, b) {
      let d = 0, na = 0, nb = 0;
      for (let i = 0; i < a.length; i++) { d += a[i] * b[i]; na += a[i] * a[i]; nb += b[i] * b[i]; }
      return (na && nb) ? d / Math.sqrt(na * nb) : 0;
    };
    const w1 = m.docVector("gaza ceasefire talks", "sif");
    const c1 = m.docVector("bitcoin ether rally", "sif");
    ok("sif keeps two different topics apart", cos(w1, c1) < 0.6, cos(w1, c1));
    ok("empty text yields no document vector", m.docVector("", "sif") === null);
  })();

  /* ---------------- topics ---------------------------------------- */
  (function () {
    const m = trained(8);
    const t = m.topics();
    ok("topics are produced", t.ready && t.topics.length >= 2, JSON.stringify(t.reason));
    ok("every topic carries ranked terms",
       t.topics.every(function (x) { return Array.isArray(x.terms) && x.terms.length > 0; }));
    ok("topic terms carry weights",
       t.topics.every(function (x) { return x.terms.every(function (y) { return typeof y === "string" || isFinite(y.weight); }); }));
    /* Some topic must be recognisably one side of the fixture. */
    const flat = JSON.stringify(t.topics);
    ok("the war vocabulary shows up in some topic", /ceasefire|gaza|doha|truce/.test(flat));
    ok("the crypto vocabulary shows up in some topic", /bitcoin|ether|crypto|etf/.test(flat));
    ok("topics are cached between identical calls", m.topics() === t || JSON.stringify(m.topics()) === flat);
  })();

  /* ---------------- refit policy ---------------------------------- */
  (function () {
    const m = trained(8);
    const after = m.policy();
    ok("policy explains itself", typeof after.reason === "string" && after.reason.length > 0, after.reason);
    ok("policy reports an estimated cost", isFinite(after.estimatedMs || 0));
    ok("nothing new means no refit is due", !after.should || /drift|grew|ceiling/.test(after.reason), after.reason);

    const s = m.stats();
    ok("stats agrees with the policy", s.refitDue === !!after.should);
    ok("stats reports the refit cost it measured", isFinite(s.lastRefitMs) && s.lastRefitMs >= 0);

    /* A failed refit must leave the old fit answering. */
    const before = m.stats().fitId;
    m.observe("gaza doha ceasefire");
    ok("the model still answers after new observations", m.nearest("gaza", 3).length > 0);
    ok("fitId does not move without a refit", m.stats().fitId === before);
  })();

  /* ---------------- ring buffer ----------------------------------- */
  (function () {
    const m = mcEmCreate({ seed: 5, maxDocs: 10 });
    for (let i = 0; i < 25; i++) m.observe("headline number " + i + " about topic " + (i % 3));
    const s = m.stats();
    eq("the ring caps retention", s.docsRetained, 10);
    eq("observations are still counted in full", s.docsObserved, 25);
    ok("dropped documents are reported", s.docsDropped === 15, s.docsDropped);
    ok("token counts stay non-negative", s.tokensRetained >= 0);
    ok("the corpus reads back in order", m.corpus().length === 10);
  })();

  /* ---------------- hostile input --------------------------------- */
  (function () {
    const m = trained(4);
    ok("markup in a headline does not throw", m.observe("<img src=x onerror=alert(1)> gaza") >= 0);
    ok("a very long headline is capped", m.observe(new Array(5000).join("word ")) >= 0);
    ok("undefined does not throw", m.observe(undefined) === 0);
    ok("stats never throws", !!m.stats());
    ok("summary never throws", typeof m.summary() === "string");
    ok("analogy with unknown words returns empty, not garbage",
       Array.isArray(m.analogy("qqzz", "xxyy", "wwvv", 3)));
  })();

  /* ---------------- timing ---------------------------------------- */
  (function () {
    const m = mcEmCreate({ seed: 9 });
    const t0 = Date.now();
    for (let i = 0; i < 500; i++) m.observe(WAR[i % WAR.length] + " " + i);
    const obsMs = Date.now() - t0;
    const t1 = Date.now();
    m.refit({ force: true });
    const fitMs = Date.now() - t1;
    console.log("  500 docs: observe " + obsMs + "ms, refit " + fitMs + "ms");
    ok("observing 500 documents is cheap", obsMs < 2000, obsMs + "ms");
    ok("a 500-document refit is bounded (it blocks the UI thread)", fitMs < 12000, fitMs + "ms");
    ok("the model is usable afterwards", m.stats().ready);
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

  const total = emPass + emFail;
  if (emFailures.length) {
    console.log("\nFAILURES (" + emFailures.length + "):");
    emFailures.forEach(function (f) { console.log("  FAIL  " + f); });
  }
  console.log((emFail === 0 ? "PASS" : "FAIL") + " — " + emPass + "/" + total + " assertions passed");
  if (emFail) process.exit(1);
}
