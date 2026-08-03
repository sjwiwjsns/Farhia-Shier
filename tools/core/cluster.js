/* ------------------------------------------------------------------------- *
 * mcCluster — unsupervised topic clustering for short news headlines.
 *
 * Plain script-scope JS (ES2020), zero dependencies, no module system.
 * Everything top-level is prefixed `mc` so this can be pasted straight into a
 * single-file HTML app without colliding with the host page.
 *
 * Design in one paragraph: headlines are 6-12 tokens, so every vector is
 * extremely sparse and the "document" gives us almost no redundancy to average
 * over. We therefore lean on IDF to suppress newsroom filler, and on
 * agglomerative average linkage to discover the topic count instead of being
 * told it.
 * ------------------------------------------------------------------------- */

/* Headline-specific stopwords. Beyond the usual function words we drop the
 * verbs/adverbs that appear in *every* newsroom headline ("says", "after",
 * "amid", "reveals"): they have high term frequency, are spread across all
 * topics, and would otherwise show up as the label of several clusters at
 * once. IDF alone doesn't kill them reliably on corpora of ~20 documents. */
const mcSTOPWORDS = new Set(
  ("a an the and or but if while of to in on at by for from with without into onto over under " +
   "as is are was were be been being am do does did done have has had having " +
   "it its this that these those there here he she they them his her their our your my we you i " +
   "not no nor so than then too very can could would should will shall may might must " +
   "up down out off again further once about against between through during before after above below " +
   "who whom which what when where why how all any both each few more most other some such only own same " +
   "s t don now say says said said saying report reports reported reveal reveals revealed " +
   "new news latest breaking live update updates amid ahead set sets setting get gets got " +
   "make makes made making take takes took taken give gives gave given see sees saw seen " +
   "one two three four five six seven eight nine ten first second third last next year years " +
   "day days week weeks month months today yesterday tomorrow night time times " +
   "back way still just also even much many since per via vs").split(" ")
);

/* Deterministic PRNG (mulberry32). Everything stochastic in this file routes
 * through here so a given seed always reproduces the same output — required
 * for k-means++ seeding and for the synthetic benchmark fixture. */
function mcRng(seed) {
  let a = (seed >>> 0) || 0x9e3779b9;
  return function mcRandom() {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Plural-only stemming. We deliberately do NOT strip -ing/-ed: without a
 * dictionary those rules mangle real headline nouns ("sterling" -> "sterl",
 * "seed" -> "se") and manufacture false merges, which is far more damaging
 * than missing a merge. Requiring >= 4 chars after stripping protects short
 * words that legitimately end in s ("gas", "bus", "us"). */
function mcStem(w) {
  if (w.length > 4 && w.endsWith("ies")) return w.slice(0, -3) + "y";
  if (w.length > 4 && w.endsWith("sses")) return w.slice(0, -2);
  if (w.length > 4 && w.endsWith("es") && !w.endsWith("ses")) return w.slice(0, -1);
  if (w.length > 4 && w.endsWith("s") && !w.endsWith("ss") && !w.endsWith("us")) return w.slice(0, -1);
  return w;
}

/* Tokeniser: lowercase, split on anything that isn't a letter/digit, drop
 * stopwords, drop 1-char tokens, drop bare numerals (a headline's "12" or
 * "2026" is almost never the topic), then stem. Apostrophes are stripped
 * rather than split on so "bank's" -> "banks" -> "bank". */
function mcTokenize(text) {
  const raw = String(text == null ? "" : text)
    .toLowerCase()
    .replace(/['’]/g, "")
    .split(/[^a-z0-9]+/);
  const out = [];
  for (let i = 0; i < raw.length; i++) {
    const w = raw[i];
    if (w.length < 2) continue;
    if (/^\d+$/.test(w)) continue;
    if (mcSTOPWORDS.has(w)) continue;
    const s = mcStem(w);
    if (s.length < 2 || mcSTOPWORDS.has(s)) continue;
    out.push(s);
  }
  return out;
}

/* Model cache keyed on the docs array identity, so mcTopTerms/mcCluster called
 * repeatedly on the same array pay for tokenisation + TF-IDF exactly once.
 * WeakMap so we never pin a caller's array alive. */
const mcMODEL_CACHE = typeof WeakMap === "function" ? new WeakMap() : null;

/* Build the TF-IDF model once and reuse it everywhere.
 *
 * Two choices worth defending:
 *  - sublinear TF (1 + log tf). Headlines repeat a word twice at most; linear
 *    TF would let that one repeat dominate the vector.
 *  - smoothed IDF, log((N+1)/(df+1)) + 1. The trailing +1 matters: with plain
 *    log(N/df), a term present in every document gets weight 0, so a corpus of
 *    identical headlines collapses to all-zero vectors and cosine is 0/0. The
 *    +1 keeps such a corpus at similarity 1, which is the correct answer. */
function mcBuildModel(docs) {
  const list = Array.isArray(docs) ? docs : [];
  if (mcMODEL_CACHE) {
    const hit = mcMODEL_CACHE.get(list);
    if (hit && hit.n === list.length) return hit;
  }
  const n = list.length;
  const vocab = new Map();
  const terms = [];
  const df = [];
  const docTerms = new Array(n);

  for (let i = 0; i < n; i++) {
    const toks = mcTokenize(list[i]);
    const counts = new Map();
    for (let j = 0; j < toks.length; j++) {
      counts.set(toks[j], (counts.get(toks[j]) || 0) + 1);
    }
    docTerms[i] = counts;
    counts.forEach(function (_c, t) {
      let id = vocab.get(t);
      if (id === undefined) {
        id = terms.length;
        vocab.set(t, id);
        terms.push(t);
        df.push(0);
      }
      df[id] += 1;
    });
  }

  const V = terms.length;
  const idf = new Float64Array(V);
  for (let t = 0; t < V; t++) idf[t] = Math.log((n + 1) / (df[t] + 1)) + 1;

  const vecs = new Array(n);
  const massByTerm = new Float64Array(V); // total weight per term, for label scoring
  for (let i = 0; i < n; i++) {
    const counts = docTerms[i];
    const idx = new Int32Array(counts.size);
    const val = new Float64Array(counts.size);
    let k = 0;
    counts.forEach(function (c, t) {
      idx[k] = vocab.get(t);
      val[k] = (1 + Math.log(c)) * idf[idx[k]];
      k++;
    });
    // Sort by term id so cosine can be a linear merge-walk instead of a hash lookup.
    const order = Array.from({ length: idx.length }, function (_v, q) { return q; })
      .sort(function (x, y) { return idx[x] - idx[y]; });
    const sIdx = new Int32Array(idx.length);
    const sVal = new Float64Array(idx.length);
    let norm = 0;
    for (let q = 0; q < order.length; q++) {
      sIdx[q] = idx[order[q]];
      sVal[q] = val[order[q]];
      norm += sVal[q] * sVal[q];
    }
    norm = Math.sqrt(norm);
    if (norm > 0) for (let q = 0; q < sVal.length; q++) sVal[q] /= norm;
    for (let q = 0; q < sVal.length; q++) massByTerm[sIdx[q]] += sVal[q];
    vecs[i] = { idx: sIdx, val: sVal };
  }

  const model = { n: n, docs: list, vocab: vocab, terms: terms, df: df, idf: idf, vecs: vecs, mass: massByTerm };
  if (mcMODEL_CACHE) mcMODEL_CACHE.set(list, model);
  return model;
}

/* Accept either our sparse {idx,val} form or a plain dense number array, and
 * always return a unit-length sparse vector — so cosine is a plain dot product
 * everywhere downstream. */
function mcToSparse(v) {
  if (v && v.idx && v.val) return v;
  const dense = Array.isArray(v) || ArrayBuffer.isView(v) ? v : [];
  const idxArr = [];
  const valArr = [];
  let norm = 0;
  for (let i = 0; i < dense.length; i++) {
    const x = Number(dense[i]) || 0;
    if (x !== 0) { idxArr.push(i); valArr.push(x); norm += x * x; }
  }
  norm = Math.sqrt(norm);
  const idx = Int32Array.from(idxArr);
  const val = Float64Array.from(valArr);
  if (norm > 0) for (let i = 0; i < val.length; i++) val[i] /= norm;
  return { idx: idx, val: val };
}

/* Cosine between two unit-length sparse vectors: merge-walk over sorted ids.
 * O(nnz(a) + nnz(b)) — for headlines that is ~12 + ~12 operations. */
function mcCosine(a, b) {
  const ai = a.idx, av = a.val, bi = b.idx, bv = b.val;
  let p = 0, q = 0, dot = 0;
  while (p < ai.length && q < bi.length) {
    const x = ai[p], y = bi[q];
    if (x === y) { dot += av[p] * bv[q]; p++; q++; }
    else if (x < y) p++;
    else q++;
  }
  return dot < -1 ? -1 : dot > 1 ? 1 : dot;
}

/* Cosine against a Map-based centroid (used by k-means, where centroids are
 * dense-ish sums that would be wasteful to keep as typed arrays). */
function mcCosineMap(a, centroid) {
  const ai = a.idx, av = a.val;
  let dot = 0;
  for (let p = 0; p < ai.length; p++) {
    const c = centroid.get(ai[p]);
    if (c !== undefined) dot += av[p] * c;
  }
  return dot < -1 ? -1 : dot > 1 ? 1 : dot;
}

/* ------------------------------------------------------------------------- *
 * Distinguishing terms
 * ------------------------------------------------------------------------- */

/* Why not "highest mean TF-IDF in the cluster"? Because on a news corpus the
 * top TF-IDF terms of several clusters are the same mid-frequency newsroom
 * words, and you end up with three clusters all labelled "police / report".
 * A term earns a label slot only if its weight INSIDE the cluster is large
 * *relative to its weight outside*:
 *
 *     score = inMean * log((inMean + eps) / (outMean + eps)) * sqrt(dfIn/size)
 *
 *  - the first factor keeps the term substantive (rare junk stays low),
 *  - the log-ratio is the discriminative part: a term that is equally common
 *    outside scores ~0 no matter how heavy it is,
 *  - the sqrt coverage factor stops one member's idiosyncratic rare word from
 *    labelling a six-headline cluster; the label should describe the majority.
 */
function mcScoreTerms(model, memberIdx) {
  const size = memberIdx.length;
  if (size === 0 || model.n === 0) return [];
  const inSum = new Map();
  const inDf = new Map();
  for (let m = 0; m < size; m++) {
    const v = model.vecs[memberIdx[m]];
    if (!v) continue;
    for (let p = 0; p < v.idx.length; p++) {
      const t = v.idx[p];
      inSum.set(t, (inSum.get(t) || 0) + v.val[p]);
      inDf.set(t, (inDf.get(t) || 0) + 1);
    }
  }
  const outCount = model.n - size;
  const EPS = 1e-3;
  const scored = [];
  inSum.forEach(function (sum, t) {
    const inMean = sum / size;
    const outMean = outCount > 0 ? Math.max(0, model.mass[t] - sum) / outCount : 0;
    const coverage = Math.sqrt((inDf.get(t) || 0) / size);
    const score = inMean * Math.log((inMean + EPS) / (outMean + EPS)) * coverage;
    scored.push({ term: model.terms[t], score: score, inMean: inMean });
  });
  // Deterministic ordering: score desc, then in-cluster weight desc, then
  // alphabetical, so ties never depend on Map iteration order.
  scored.sort(function (x, y) {
    if (y.score !== x.score) return y.score - x.score;
    if (y.inMean !== x.inMean) return y.inMean - x.inMean;
    return x.term < y.term ? -1 : x.term > y.term ? 1 : 0;
  });
  return scored;
}

/* Public: distinguishing terms for an arbitrary subset of docs. */
function mcTopTerms(docs, memberIdx, n) {
  const model = mcBuildModel(docs);
  const want = n == null ? 3 : Math.max(0, n | 0);
  const scored = mcScoreTerms(model, Array.isArray(memberIdx) ? memberIdx : []);
  const out = [];
  for (let i = 0; i < scored.length && out.length < want; i++) out.push(scored[i].term);
  return out;
}

/* ------------------------------------------------------------------------- *
 * Agglomerative hierarchical clustering (average linkage / UPGMA)
 * ------------------------------------------------------------------------- */

/* WHY AGGLOMERATIVE AND NOT K-MEANS (the default path):
 *  1. k is unknown. The whole point is to discover how many stories are in the
 *     feed; k-means demands that number up front and we would only be able to
 *     guess it by running k-means many times anyway.
 *  2. n is small and variable (a feed is 10-300 headlines). The O(n^2) cost
 *     that rules agglomerative out on large corpora is irrelevant here, and we
 *     get the whole dendrogram for the price of one pass.
 *  3. Short sparse text breaks k-means' assumptions. Centroids of 8-token
 *     vectors are near-degenerate, the objective is riddled with local minima,
 *     and results swing wildly with the seed. Average linkage makes no
 *     centroid assumption and is fully deterministic.
 *  4. Average linkage specifically (not single/complete): single linkage
 *     chains two topics together through one ambiguous headline; complete
 *     linkage shatters legitimate topics whose members share only a couple of
 *     terms. Average sits between and is *reducible*, which we exploit below.
 *
 * Cost control: the similarity matrix is computed ONCE, and merges update it
 * in place via Lance-Williams — for average linkage
 *     sim(k, i∪j) = (|i|*sim(k,i) + |j|*sim(k,j)) / (|i| + |j|)
 * which is exact, so no cosine is ever recomputed inside the merge loop.
 *
 * Each row also caches its nearest neighbour among higher indices. That cache
 * is safe precisely because average linkage is reducible: the merged
 * similarity is a convex combination of the two originals, so it can never
 * exceed either, and therefore a row's best can only change if its best *was*
 * one of the merged pair. In practice this takes the loop from O(n^3) to
 * ~O(n^2).
 */
function mcLinkage(vecs) {
  const n = vecs.length;
  const base = new Float64Array(n * n);   // untouched pairwise cosines (silhouette, cohesion)
  const sim = new Float64Array(n * n);    // working matrix, mutated by merges
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const s = mcCosine(vecs[i], vecs[j]);
      base[i * n + j] = s; base[j * n + i] = s;
      sim[i * n + j] = s; sim[j * n + i] = s;
    }
  }

  const active = new Uint8Array(n).fill(1);
  const size = new Int32Array(n).fill(1);
  const nnIdx = new Int32Array(n).fill(-1);
  const nnSim = new Float64Array(n).fill(-Infinity);

  function refresh(i) {
    let bj = -1, bs = -Infinity;
    for (let j = i + 1; j < n; j++) {
      if (!active[j]) continue;
      const s = sim[i * n + j];
      if (s > bs) { bs = s; bj = j; }
    }
    nnIdx[i] = bj;
    nnSim[i] = bj === -1 ? -Infinity : bs;
  }
  for (let i = 0; i < n; i++) if (active[i]) refresh(i);

  // Merge history, ordered by decreasing similarity (guaranteed: UPGMA has no
  // inversions), which lets any threshold be applied later as a prefix.
  const merges = [];
  for (let step = 0; step < n - 1; step++) {
    let a = -1, bs = -Infinity;
    for (let i = 0; i < n; i++) {
      if (!active[i] || nnIdx[i] === -1) continue;
      if (nnSim[i] > bs) { bs = nnSim[i]; a = i; }
    }
    // Similarity 0 means no shared vocabulary at all — merging there would be
    // arbitrary, so all-disjoint corpora correctly stay as singletons.
    if (a === -1 || !(bs > 0)) break;
    const b = nnIdx[a];
    merges.push([a, b, bs]);

    const sa = size[a], sb = size[b];
    for (let k = 0; k < n; k++) {
      if (!active[k] || k === a || k === b) continue;
      const s = (sa * sim[k * n + a] + sb * sim[k * n + b]) / (sa + sb);
      sim[k * n + a] = s; sim[a * n + k] = s;
    }
    active[b] = 0;
    size[a] = sa + sb;
    refresh(a);
    for (let k = 0; k < n; k++) {
      if (!active[k] || k === a) continue;
      if (nnIdx[k] === a || nnIdx[k] === b) refresh(k);
    }
  }
  return { base: base, merges: merges, n: n };
}

/* Apply the first merges whose similarity >= threshold; optionally keep going
 * (relaxing the threshold) until the cluster count fits maxClusters. Returns a
 * label array in [0, k). */
function mcCutTree(merges, n, threshold, maxClusters) {
  const parent = new Int32Array(n);
  for (let i = 0; i < n; i++) parent[i] = i;
  function find(x) { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
  let count = n;
  for (let m = 0; m < merges.length; m++) {
    const overThreshold = merges[m][2] >= threshold;
    const forced = count > maxClusters; // maxClusters overrides minSim when both bind
    if (!overThreshold && !forced) break;
    const ra = find(merges[m][0]), rb = find(merges[m][1]);
    if (ra === rb) continue;
    parent[rb] = ra;
    count--;
  }
  const remap = new Map();
  const labels = new Int32Array(n);
  for (let i = 0; i < n; i++) {
    const r = find(i);
    let id = remap.get(r);
    if (id === undefined) { id = remap.size; remap.set(r, id); }
    labels[i] = id;
  }
  return { labels: labels, k: remap.size };
}

/* Silhouette from a precomputed similarity matrix (cosine distance = 1 - cos).
 * Kept separate from the public mcSilhouette so the auto-cut search reuses the
 * matrix we already built instead of re-doing O(n^2) cosines per candidate. */
function mcSilhouetteFromSim(base, labels, n) {
  if (n < 2) return 0;
  const groups = new Map();
  for (let i = 0; i < n; i++) {
    const g = groups.get(labels[i]);
    if (g) g.push(i); else groups.set(labels[i], [i]);
  }
  if (groups.size < 2) return 0; // silhouette is undefined for a single cluster
  let total = 0;
  for (let i = 0; i < n; i++) {
    let a = 0, b = Infinity;
    groups.forEach(function (members, gid) {
      let sum = 0, cnt = 0;
      for (let m = 0; m < members.length; m++) {
        const j = members[m];
        if (j === i) continue;
        sum += 1 - base[i * n + j];
        cnt++;
      }
      if (gid === labels[i]) { a = cnt > 0 ? sum / cnt : 0; }
      else if (cnt > 0) { const d = sum / cnt; if (d < b) b = d; }
    });
    if (!isFinite(b)) { total += 0; continue; }        // no other cluster
    if (groups.get(labels[i]).length === 1) { total += 0; continue; } // singleton: 0 by convention
    const denom = Math.max(a, b);
    total += denom > 0 ? (b - a) / denom : 0;
  }
  return total / n;
}

/* Public silhouette over raw vectors (sparse or dense). O(n^2). */
function mcSilhouette(vectors, assignments) {
  const vs = (Array.isArray(vectors) ? vectors : []).map(mcToSparse);
  const n = vs.length;
  if (n < 2 || !assignments || assignments.length !== n) return 0;
  const base = new Float64Array(n * n);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const s = mcCosine(vs[i], vs[j]);
      base[i * n + j] = s; base[j * n + i] = s;
    }
  }
  const labels = new Int32Array(n);
  const remap = new Map();
  for (let i = 0; i < n; i++) {
    const key = String(assignments[i]);
    let id = remap.get(key);
    if (id === undefined) { id = remap.size; remap.set(key, id); }
    labels[i] = id;
  }
  const s = mcSilhouetteFromSim(base, labels, n);
  return s < -1 ? -1 : s > 1 ? 1 : s;
}

const mcDEFAULT_MIN_SIM = 0.18;
/* Candidate cuts for the automatic threshold search. Below ~0.10 a single
 * shared mid-frequency word fuses unrelated stories; above ~0.45 real topics
 * fragment into pairs. */
const mcCUT_CANDIDATES = [0.10, 0.14, 0.18, 0.22, 0.26, 0.32, 0.38, 0.45];

/* Main entry point. */
function mcCluster(docs, opts) {
  const o = opts || {};
  const list = Array.isArray(docs) ? docs : [];
  const n = list.length;
  if (n === 0) return [];

  const minSize = Math.max(1, (o.minSize == null ? 1 : o.minSize) | 0);
  const maxClusters = o.maxClusters == null || o.maxClusters <= 0 ? Infinity : o.maxClusters | 0;

  const model = mcBuildModel(list);

  if (n === 1) {
    // Degenerate but common: one headline is one cluster, cohesion 1 by
    // convention (a thing is perfectly similar to itself).
    const terms = mcTopTerms(list, [0], 2);
    const single = [{ id: 0, members: [0], label: terms.join(" / "), terms: terms, size: 1, cohesion: 1 }];
    return minSize > 1 ? [] : single;
  }

  const tree = mcLinkage(model.vecs);

  // Threshold: explicit if given, otherwise pick the cut with the best
  // silhouette. Degenerate cuts (everything in one cluster, or everything a
  // singleton) are skipped because silhouette can't rank them meaningfully.
  let threshold = o.minSim == null ? null : Number(o.minSim);
  if (threshold == null) {
    let bestScore = -Infinity;
    threshold = mcDEFAULT_MIN_SIM;
    for (let c = 0; c < mcCUT_CANDIDATES.length; c++) {
      const t = mcCUT_CANDIDATES[c];
      const cut = mcCutTree(tree.merges, n, t, Infinity);
      if (cut.k <= 1 || cut.k >= n) continue;
      const s = mcSilhouetteFromSim(tree.base, cut.labels, n);
      if (s > bestScore) { bestScore = s; threshold = t; }
    }
  }

  const cut = mcCutTree(tree.merges, n, threshold, maxClusters);
  const buckets = new Array(cut.k);
  for (let i = 0; i < cut.k; i++) buckets[i] = [];
  for (let i = 0; i < n; i++) buckets[cut.labels[i]].push(i);

  const clusters = [];
  for (let c = 0; c < buckets.length; c++) {
    const members = buckets[c];
    if (members.length < minSize) continue;
    const scored = mcScoreTerms(model, members);
    // 3 terms for a real cluster, 2 for a pair/singleton — three words on a
    // one-headline "cluster" is just the headline again.
    const want = members.length >= 3 ? 3 : 2;
    const terms = [];
    for (let i = 0; i < scored.length && terms.length < want; i++) terms.push(scored[i].term);
    clusters.push({
      id: 0,
      members: members,
      label: terms.join(" / "),
      terms: terms,
      size: members.length,
      cohesion: mcCohesion(tree.base, members, n)
    });
  }

  // size desc, then cohesion desc, then first member asc — total order, so the
  // output is byte-identical across runs.
  clusters.sort(function (a, b) {
    if (b.size !== a.size) return b.size - a.size;
    if (b.cohesion !== a.cohesion) return b.cohesion - a.cohesion;
    return a.members[0] - b.members[0];
  });
  for (let i = 0; i < clusters.length; i++) clusters[i].id = i;
  return clusters;
}

/* Mean pairwise cosine inside a cluster, clamped to [0,1]. Singletons report 1
 * (no pairs to average) so a lone headline never looks "incoherent". */
function mcCohesion(base, members, n) {
  const m = members.length;
  if (m < 2) return 1;
  let sum = 0, cnt = 0;
  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j < m; j++) { sum += base[members[i] * n + members[j]]; cnt++; }
  }
  const v = cnt > 0 ? sum / cnt : 1;
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

/* ------------------------------------------------------------------------- *
 * Spherical k-means — secondary path
 *
 * Useful when the caller genuinely knows k (e.g. "give me exactly 5 sections")
 * or when n is large enough that O(n^2) starts to hurt. Cosine assignment on
 * L2-normalised vectors, k-means++ seeding, and a seeded PRNG so two runs with
 * the same seed produce identical assignments.
 * ------------------------------------------------------------------------- */
function mcKMeans(vectors, k, iters, seed) {
  const vs = (Array.isArray(vectors) ? vectors : []).map(mcToSparse);
  const n = vs.length;
  const maxIters = iters == null ? 25 : Math.max(1, iters | 0);
  if (n === 0) return { assignments: [], centroids: [], inertia: 0 };
  const K = Math.max(1, Math.min(n, k == null ? 1 : k | 0));
  const rng = mcRng(seed == null ? 1337 : seed);

  function centroidOf(memberIdx) {
    const acc = new Map();
    for (let m = 0; m < memberIdx.length; m++) {
      const v = vs[memberIdx[m]];
      for (let p = 0; p < v.idx.length; p++) acc.set(v.idx[p], (acc.get(v.idx[p]) || 0) + v.val[p]);
    }
    let norm = 0;
    acc.forEach(function (x) { norm += x * x; });
    norm = Math.sqrt(norm);
    if (norm > 0) acc.forEach(function (x, t) { acc.set(t, x / norm); });
    return acc;
  }

  // --- k-means++ seeding, cosine distance d = 1 - cos, D^2 sampling ---------
  const centroids = [];
  centroids.push(centroidOf([Math.floor(rng() * n) % n]));
  const dist = new Float64Array(n).fill(Infinity);
  while (centroids.length < K) {
    let total = 0;
    const last = centroids[centroids.length - 1];
    for (let i = 0; i < n; i++) {
      const d = 1 - mcCosineMap(vs[i], last);
      if (d < dist[i]) dist[i] = d;
      total += dist[i] * dist[i];
    }
    let pick = n - 1;
    if (total > 0) {
      let r = rng() * total;
      for (let i = 0; i < n; i++) { r -= dist[i] * dist[i]; if (r <= 0) { pick = i; break; } }
    } else {
      pick = Math.floor(rng() * n) % n; // all points identical — any pick is equivalent
    }
    centroids.push(centroidOf([pick]));
  }

  // --- Lloyd iterations ----------------------------------------------------
  const assignments = new Array(n).fill(0);
  let inertia = 0;
  for (let it = 0; it < maxIters; it++) {
    let changed = false;
    inertia = 0;
    for (let i = 0; i < n; i++) {
      let best = 0, bestSim = -Infinity;
      for (let c = 0; c < centroids.length; c++) {
        const s = mcCosineMap(vs[i], centroids[c]);
        if (s > bestSim) { bestSim = s; best = c; } // ties -> lowest index, deterministic
      }
      if (assignments[i] !== best) { assignments[i] = best; changed = true; }
      inertia += 1 - bestSim;
    }
    const groups = new Array(K);
    for (let c = 0; c < K; c++) groups[c] = [];
    for (let i = 0; i < n; i++) groups[assignments[i]].push(i);
    for (let c = 0; c < K; c++) {
      if (groups[c].length > 0) { centroids[c] = centroidOf(groups[c]); continue; }
      // Empty cluster: re-seed on the worst-fit point rather than at random,
      // which keeps the run deterministic and monotonically improving.
      let worst = 0, worstSim = Infinity;
      for (let i = 0; i < n; i++) {
        const s = mcCosineMap(vs[i], centroids[assignments[i]]);
        if (s < worstSim) { worstSim = s; worst = i; }
      }
      centroids[c] = centroidOf([worst]);
      assignments[worst] = c;
      changed = true;
    }
    if (!changed && it > 0) break;
  }

  const outCentroids = centroids.map(function (m) {
    const ids = Array.from(m.keys()).sort(function (a, b) { return a - b; });
    const idx = Int32Array.from(ids);
    const val = Float64Array.from(ids.map(function (t) { return m.get(t); }));
    return { idx: idx, val: val };
  });
  return { assignments: assignments, centroids: outCentroids, inertia: inertia };
}

/* ------------------------------------------------------------------------- *
 * Self-test (Node only; the guard is inert in a browser because `module` is
 * undefined there and && short-circuits before `require` is touched).
 * ------------------------------------------------------------------------- */
if (typeof module !== "undefined" && require.main === module) {
  let mcPassed = 0;
  let mcFailed = 0;
  const mcFailures = [];
  function mcOk(name, cond, extra) {
    if (cond) { mcPassed++; console.log("  ok   " + name); }
    else {
      mcFailed++;
      mcFailures.push(name + (extra ? "  [" + extra + "]" : ""));
      console.log("  FAIL " + name + (extra ? "  [" + extra + "]" : ""));
    }
  }

  const mcFixture = [
    // 0-5 chemical plant explosion
    "Explosion at chemical plant injures twelve workers in Houston",
    "Chemical plant explosion sparks huge fire near Houston port",
    "Investigators probe cause of deadly chemical plant explosion",
    "Residents evacuated after explosion at Texas chemical plant",
    "Chemical plant fire burns for a second day after explosion",
    "Death toll rises in Houston chemical plant explosion",
    // 6-11 central bank rate decision
    "Central bank holds interest rates steady as inflation cools",
    "Federal Reserve signals one more interest rate hike",
    "Interest rate decision: central bank warns on inflation risks",
    "Bank of England raises interest rates to tame inflation",
    "Markets rally after central bank leaves interest rates unchanged",
    "Inflation data may force central bank to lift interest rates",
    // 12-17 football transfer saga
    "Striker completes record transfer to Premier League club",
    "Transfer saga ends as club agrees fee for star striker",
    "Premier League club opens talks over striker transfer",
    "Manager confirms striker will not leave club in transfer window",
    "Record transfer fee agreed for Premier League striker",
    "Club rejects a second transfer bid for star striker",
    // 18-23 Mars rover mission
    "Mars rover drills into ancient rock in search for life",
    "NASA Mars rover sends back images from a crater",
    "Rover finds evidence of ancient water on Mars",
    "Mars mission: rover begins climb up crater rim",
    "NASA extends Mars rover mission for two more years",
    "Rover samples Mars rock that may hold signs of life"
  ];
  const mcTOPIC_OF = mcFixture.map(function (_d, i) { return Math.floor(i / 6); });

  console.log("mcCluster self-test\n-------------------");
  const clusters = mcCluster(mcFixture);
  clusters.forEach(function (c) {
    console.log("  #" + c.id + " size=" + c.size + " coh=" + c.cohesion.toFixed(3) +
      " label=\"" + c.label + "\" members=[" + c.members.join(",") + "]");
  });
  console.log("");

  // --- 1-4: topic recovery -------------------------------------------------
  const real = clusters.filter(function (c) { return c.size >= 2; });
  mcOk("4 topics -> 3..5 multi-member clusters", real.length >= 3 && real.length <= 5, "got " + real.length);
  mcOk("total clusters within 4 +/- 1 (singletons allowed)",
    clusters.length >= 4 && clusters.length <= 6, "got " + clusters.length);

  const clusterOf = new Array(mcFixture.length).fill(-1);
  clusters.forEach(function (c) { c.members.forEach(function (m) { clusterOf[m] = c.id; }); });
  mcOk("every doc assigned to exactly one cluster", clusterOf.every(function (x) { return x >= 0; }));

  // Purity: no cluster mixes two ground-truth topics.
  let mixed = 0;
  real.forEach(function (c) {
    const topics = new Set(c.members.map(function (m) { return mcTOPIC_OF[m]; }));
    if (topics.size > 1) mixed++;
  });
  mcOk("no multi-member cluster mixes two topics", mixed === 0, "mixed=" + mixed);

  // --- 5-6: explosion headlines co-cluster ---------------------------------
  const boom = [0, 1, 2, 3, 5];
  mcOk("explosion headlines share one cluster",
    boom.every(function (i) { return clusterOf[i] === clusterOf[boom[0]]; }),
    boom.map(function (i) { return clusterOf[i]; }).join(","));
  const boomCluster = clusters.find(function (c) { return c.id === clusterOf[0]; });
  mcOk("explosion cluster label mentions explosion/chemical/plant",
    /explosion|chemical|plant|houston/.test(boomCluster.label), boomCluster.label);

  // --- 7-9: label quality --------------------------------------------------
  const rateIdx = clusterOf[6];
  const rateCluster = clusters.find(function (c) { return c.id === rateIdx; });
  mcOk("rate-decision cluster label has a rates/bank/inflation term",
    /rate|bank|inflation|interest|central|reserve/.test(rateCluster.label), rateCluster.label);
  mcOk("rate-decision cluster holds >= 5 of the 6 rate headlines",
    rateCluster.members.filter(function (m) { return mcTOPIC_OF[m] === 1; }).length >= 5,
    "n=" + rateCluster.members.length);

  let stopwordLabel = null;
  clusters.forEach(function (c) {
    c.terms.forEach(function (t) { if (mcSTOPWORDS.has(t)) stopwordLabel = c.id + ":" + t; });
  });
  mcOk("no cluster label term is a stopword", stopwordLabel === null, String(stopwordLabel));

  // --- 10-11: labels are distinguishing, not shared -------------------------
  const allLabelTerms = [];
  real.forEach(function (c) { c.terms.forEach(function (t) { allLabelTerms.push(t); }); });
  mcOk("label terms are unique across multi-member clusters",
    new Set(allLabelTerms).size === allLabelTerms.length, allLabelTerms.join(","));
  mcOk("every multi-member cluster has 2-3 label terms",
    real.every(function (c) { return c.terms.length >= 2 && c.terms.length <= 3; }));

  // --- 12-13: cohesion ordering --------------------------------------------
  const tightLoose = [
    "interest rate decision expected", "interest rate decision expected", "interest rate decision expected",
    "rover mars rock sample", "rover comet ice sample", "rover moon dust sample"
  ];
  const tl = mcCluster(tightLoose, { minSim: 0.1 });
  const tight = tl.find(function (c) { return c.members.every(function (m) { return m < 3; }); });
  const loose = tl.find(function (c) { return c.members.every(function (m) { return m >= 3; }); });
  mcOk("tight/loose fixture yields two clusters", !!tight && !!loose && tl.length === 2,
    JSON.stringify(tl.map(function (c) { return c.members; })));
  mcOk("cohesion(tight) > cohesion(loose)",
    !!tight && !!loose && tight.cohesion > loose.cohesion,
    tight && loose ? tight.cohesion.toFixed(3) + " vs " + loose.cohesion.toFixed(3) : "n/a");
  mcOk("all cohesions are within [0,1]",
    clusters.every(function (c) { return c.cohesion >= 0 && c.cohesion <= 1; }));

  // --- 15-19: degenerate inputs --------------------------------------------
  mcOk("0 docs -> []", JSON.stringify(mcCluster([])) === "[]");
  mcOk("non-array docs -> []", JSON.stringify(mcCluster(null)) === "[]");
  const one = mcCluster(["Central bank raises interest rates"]);
  mcOk("1 doc -> one cluster of size 1",
    one.length === 1 && one[0].size === 1 && one[0].members[0] === 0 && one[0].cohesion === 1);
  const same = mcCluster(["Mars rover finds ancient water", "Mars rover finds ancient water",
    "Mars rover finds ancient water", "Mars rover finds ancient water", "Mars rover finds ancient water"]);
  mcOk("5 identical docs -> single cluster of size 5",
    same.length === 1 && same[0].size === 5, JSON.stringify(same.map(function (c) { return c.size; })));
  mcOk("identical docs cohesion ~ 1", same.length === 1 && Math.abs(same[0].cohesion - 1) < 1e-9,
    same.length ? String(same[0].cohesion) : "n/a");
  const disjoint = mcCluster(["alpha", "bravo", "charlie", "delta", "echo"]);
  mcOk("all-disjoint docs -> all singletons",
    disjoint.length === 5 && disjoint.every(function (c) { return c.size === 1; }),
    "k=" + disjoint.length);
  const empties = mcCluster(["", "   ", "the and of"]);
  mcOk("empty / stopword-only docs survive as singletons",
    empties.length === 3 && empties.every(function (c) { return c.size === 1; }),
    "k=" + empties.length);

  // --- 22-24: options ------------------------------------------------------
  const capped = mcCluster(mcFixture, { maxClusters: 2 });
  mcOk("maxClusters caps the cluster count", capped.length <= 2, "k=" + capped.length);
  const filtered = mcCluster(mcFixture, { minSize: 3 });
  mcOk("minSize drops small clusters",
    filtered.every(function (c) { return c.size >= 3; }) && filtered.length > 0);
  const strict = mcCluster(mcFixture, { minSim: 0.9 });
  mcOk("a very high minSim yields only singletons",
    strict.every(function (c) { return c.size === 1; }), "k=" + strict.length);

  // --- 25-26: ordering + determinism ---------------------------------------
  let sortedDesc = true;
  for (let i = 1; i < clusters.length; i++) if (clusters[i].size > clusters[i - 1].size) sortedDesc = false;
  mcOk("clusters sorted by size desc", sortedDesc);
  mcOk("mcCluster is deterministic across runs",
    JSON.stringify(mcCluster(mcFixture.slice())) === JSON.stringify(mcCluster(mcFixture.slice())));

  // --- 27-30: k-means, silhouette, top terms --------------------------------
  const model = mcBuildModel(mcFixture);
  const kmA = mcKMeans(model.vecs, 4, 30, 42);
  const kmB = mcKMeans(model.vecs, 4, 30, 42);
  mcOk("mcKMeans deterministic for a fixed seed",
    JSON.stringify(kmA.assignments) === JSON.stringify(kmB.assignments));
  mcOk("mcKMeans returns k centroids and finite inertia",
    kmA.centroids.length === 4 && isFinite(kmA.inertia) && kmA.inertia >= 0, String(kmA.inertia));
  const kmGroups = new Map();
  kmA.assignments.forEach(function (a, i) {
    const l = kmGroups.get(a) || [];
    l.push(mcTOPIC_OF[i]);
    kmGroups.set(a, l);
  });
  let kmCorrect = 0;
  kmGroups.forEach(function (topics) {
    const counts = new Map();
    topics.forEach(function (t) { counts.set(t, (counts.get(t) || 0) + 1); });
    kmCorrect += Math.max.apply(null, Array.from(counts.values()));
  });
  const kmPurity = kmCorrect / mcFixture.length;
  mcOk("mcKMeans purity >= 0.75 on the fixture", kmPurity >= 0.75, kmPurity.toFixed(3));

  const sil = mcSilhouette(model.vecs, kmA.assignments);
  mcOk("mcSilhouette returns a number in [-1,1]",
    typeof sil === "number" && isFinite(sil) && sil >= -1 && sil <= 1, String(sil));
  mcOk("mcSilhouette handles degenerate input", mcSilhouette([], []) === 0 &&
    mcSilhouette(model.vecs.slice(0, 1), [0]) === 0);
  mcOk("mcSilhouette accepts dense vectors",
    Math.abs(mcSilhouette([[1, 0], [0.99, 0.1], [0, 1], [0.1, 0.99]], [0, 0, 1, 1]) - 1) < 0.2,
    String(mcSilhouette([[1, 0], [0.99, 0.1], [0, 1], [0.1, 0.99]], [0, 0, 1, 1])));

  const tt = mcTopTerms(mcFixture, [18, 19, 20, 21, 22, 23], 3);
  mcOk("mcTopTerms surfaces Mars-mission terms",
    tt.length === 3 && tt.some(function (t) { return /rover|mars|crater|nasa/.test(t); }), tt.join(","));
  mcOk("mcTopTerms on an empty subset -> []", mcTopTerms(mcFixture, [], 3).length === 0);

  const rngA = mcRng(7), rngB = mcRng(7);
  let rngOk = true;
  for (let i = 0; i < 50; i++) {
    const x = rngA(), y = rngB();
    if (x !== y || x < 0 || x >= 1) rngOk = false;
  }
  mcOk("mcRng is reproducible and in [0,1)", rngOk);

  // --- 34: performance ------------------------------------------------------
  const perfRng = mcRng(20260803);
  const pools = [
    ["chemical", "plant", "explosion", "fire", "houston", "workers", "evacuated", "blast"],
    ["central", "bank", "interest", "rates", "inflation", "decision", "markets", "hike"],
    ["striker", "transfer", "club", "premier", "league", "fee", "saga", "manager"],
    ["mars", "rover", "nasa", "crater", "rock", "mission", "ancient", "samples"],
    ["election", "voters", "ballot", "campaign", "senate", "poll", "candidate", "turnout"],
    ["hurricane", "storm", "flooding", "coast", "landfall", "warning", "evacuation", "winds"],
    ["chip", "semiconductor", "export", "factory", "supply", "shortage", "tariff", "orders"],
    ["vaccine", "hospital", "outbreak", "patients", "trial", "virus", "doctors", "clinic"]
  ];
  const big = [];
  for (let i = 0; i < 200; i++) {
    const pool = pools[i % pools.length];
    const words = [];
    for (let w = 0; w < 7; w++) words.push(pool[Math.floor(perfRng() * pool.length)]);
    big.push(words.join(" "));
  }
  const t0 = Date.now();
  const bigClusters = mcCluster(big);
  const elapsed = Date.now() - t0;
  console.log("\n  200-headline mcCluster: " + elapsed + "ms, k=" + bigClusters.length);
  mcOk("200 headlines cluster in < 200ms", elapsed < 200, elapsed + "ms");
  mcOk("200-headline run covers every doc",
    bigClusters.reduce(function (a, c) { return a + c.size; }, 0) === 200);

  console.log("\n-------------------");
  console.log((mcFailed === 0 ? "PASS" : "FAIL") + " — " + mcPassed + "/" + (mcPassed + mcFailed) + " assertions passed");
  if (mcFailed > 0) {
    mcFailures.forEach(function (f) { console.log("  - " + f); });
    process.exit(1);
  }
}
