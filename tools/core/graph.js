// mcGr* — entity co-occurrence graph engine for the news app.
// "Who appears alongside whom": nodes are entities, edges are co-mentions.
// Plain script scope, ES2020, zero dependencies, no DOM. Every top-level name
// is prefixed mcGr so it cannot collide with the other core modules.
//
// Scale target: a few thousand nodes / tens of thousands of edges, fast enough
// to run on the UI thread. That target drives most of the design decisions
// below — notably the index snapshot (typed-array CSR) that every algorithm
// runs against instead of walking Maps, and the bounded-iteration layout.
//
// Conventions that are easy to get wrong, fixed once here:
//   * Node ids are STRINGS. addNode(1) and addNode("1") are the same node.
//     Silent coercion is the lesser evil: the alternative is two invisible
//     nodes for the same entity when one call site passes an index.
//   * addEdge ACCUMULATES weight. Co-occurrence is a counting process, so
//     calling addEdge(a,b) twice means "seen together twice". setEdge replaces.
//   * An undirected self-loop contributes 2 to degree and 2*w to weighted
//     degree (the networkx / Louvain convention). It contributes 0 triangles
//     and is excluded from clustering-coefficient degrees.
//   * Edge weights must be finite and > 0. Non-finite weight falls back to the
//     default 1; <= 0 is rejected (returns false). Negative weights would break
//     Dijkstra and make modularity meaningless, so there is no "best effort".
//   * No public function throws. Bad input degrades to a documented empty
//     result (false / null / {} / an empty report object).

// ---------------------------------------------------------------------------
// Small shared helpers
// ---------------------------------------------------------------------------

const mcGrEps = 1e-12;

// Cap on all-pairs work. n=400 is 160k doubles (1.3MB) and ~400 BFS runs; past
// that the caller almost certainly wants a sampled or per-source query instead
// of a matrix, so we refuse rather than freeze the tab.
const mcGrAllPairsMax = 400;

// PageRank: with damping d the error contracts by at least d per iteration, so
// 200 iterations bounds the residual at 0.85^200 ~ 8e-15 — the cap is never the
// binding constraint at default damping, only for pathological d -> 1.
const mcGrPageRankMaxIter = 200;
const mcGrPageRankTol = 1e-11;

// Eigenvector centrality has no such guarantee: the convergence rate is set by
// the spectral gap, which can be arbitrarily small. Hence a much larger cap and
// an explicit `converged` flag in the result.
const mcGrEigenMaxIter = 1000;
const mcGrEigenTol = 1e-10;

function mcGrIsNum(x) {
  return typeof x === "number" && isFinite(x);
}

function mcGrNum(x, dflt) {
  return mcGrIsNum(x) ? x : dflt;
}

function mcGrPosNum(x, dflt) {
  return mcGrIsNum(x) && x > 0 ? x : dflt;
}

function mcGrClamp(x, lo, hi) {
  if (!mcGrIsNum(x)) return lo;
  return x < lo ? lo : x > hi ? hi : x;
}

// Node ids are strings. Numbers and booleans are coerced (a call site that
// passes an array index should not silently create a second node); everything
// else — null, undefined, NaN, objects, symbols — is rejected as null, and the
// caller's operation becomes a documented no-op.
function mcGrNodeKey(x) {
  const t = typeof x;
  if (t === "string") return x.length > 0 && x.length <= 512 ? x : null;
  if (t === "number") return isFinite(x) ? String(x) : null;
  if (t === "boolean") return String(x);
  return null;
}

// mulberry32. Deterministic, 32-bit state, good enough for shuffling a visit
// order and jittering a layout. Not cryptographic and not claimed to be.
function mcGrRng(seed) {
  let a = (mcGrIsNum(seed) ? Math.floor(seed) : 1) >>> 0;
  if (a === 0) a = 0x9e3779b9; // seed 0 would make mulberry32 degenerate
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Fisher-Yates against a seeded rng. In place, returns the same array.
function mcGrShuffle(arr, rnd) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
  return arr;
}

// Labels come from wire copy and go into a renderer. We emit no markup here,
// but we do strip the bytes that would break a downstream SVG/DOM text node
// (control chars, BOM) and clamp the length so one absurd label cannot blow up
// the layout. Escaping angle brackets is the RENDERER's job — we deliberately
// do not do it, because escaping here and again there would double-encode.
function mcGrSafeLabel(s, maxLen) {
  if (s === null || s === undefined) return "";
  let out = String(s).replace(/[\x00-\x1f\x7f\uFEFF]/g, " ");
  out = out.replace(/\s+/g, " ").trim();
  const lim = mcGrPosNum(maxLen, 64);
  if (out.length > lim) out = out.slice(0, Math.max(1, lim - 1)) + "…";
  return out;
}

// Binary min-heap over (priority: number, payload: int). Parallel plain arrays
// rather than an array of pairs: Dijkstra pushes O(m) entries and the pair
// objects were measurably the dominant allocation cost at 20k edges.
function mcGrHeap() {
  if (!(this instanceof mcGrHeap)) return new mcGrHeap();
  this.k = [];
  this.v = [];
  this.n = 0;
}

mcGrHeap.prototype.push = function (key, val) {
  let i = this.n++;
  this.k[i] = key;
  this.v[i] = val;
  while (i > 0) {
    const p = (i - 1) >> 1;
    if (this.k[p] <= this.k[i]) break;
    const tk = this.k[p]; this.k[p] = this.k[i]; this.k[i] = tk;
    const tv = this.v[p]; this.v[p] = this.v[i]; this.v[i] = tv;
    i = p;
  }
};

// Returns the payload of the minimum entry, or -1 when empty. The popped
// priority is left on `this.top` for callers that need it (lazy deletion).
mcGrHeap.prototype.pop = function () {
  if (this.n === 0) return -1;
  const best = this.v[0];
  this.top = this.k[0];
  this.n--;
  if (this.n > 0) {
    this.k[0] = this.k[this.n];
    this.v[0] = this.v[this.n];
    let i = 0;
    for (;;) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < this.n && this.k[l] < this.k[s]) s = l;
      if (r < this.n && this.k[r] < this.k[s]) s = r;
      if (s === i) break;
      const tk = this.k[s]; this.k[s] = this.k[i]; this.k[i] = tk;
      const tv = this.v[s]; this.v[s] = this.v[i]; this.v[i] = tv;
      i = s;
    }
  }
  this.k.length = this.n;
  this.v.length = this.n;
  return best;
};

// ---------------------------------------------------------------------------
// Graph
// ---------------------------------------------------------------------------

// Constructor form (not `class`) on purpose: the build step that merges these
// modules detects top-level names with /^(function|const|let|var)\s+(\w+)/, and
// a `class` declaration would slip past its collision check.
function mcGrGraph(options) {
  if (!(this instanceof mcGrGraph)) return new mcGrGraph(options);
  const o = options && typeof options === "object" ? options : {};
  this.directed = o.directed === true;
  this._nodes = new Map();   // id -> { id, label, data }
  this._out = new Map();     // id -> Map(nbrId -> weight)
  this._in = new Map();      // id -> Map(nbrId -> weight); === _out when undirected
  this._m = 0;               // unique edges (a self-loop is one edge)
  this._w = 0;               // total weight over unique edges
  this._ver = 0;             // bumped on every mutation; invalidates snapshots
  this._snapD = null;
  this._snapU = null;
}

mcGrGraph.prototype.order = function () { return this._nodes.size; };
mcGrGraph.prototype.size = function () { return this._m; };
mcGrGraph.prototype.totalWeight = function () { return this._w; };

mcGrGraph.prototype._touch = function () {
  this._ver++;
  this._snapD = null;
  this._snapU = null;
};

// Returns the canonical id on success, null if the id was unusable.
mcGrGraph.prototype.addNode = function (id, attrs) {
  const k = mcGrNodeKey(id);
  if (k === null) return null;
  let rec = this._nodes.get(k);
  if (!rec) {
    rec = { id: k, label: k, data: null };
    this._nodes.set(k, rec);
    this._out.set(k, new Map());
    this._in.set(k, this.directed ? new Map() : this._out.get(k));
    this._touch();
  }
  if (attrs && typeof attrs === "object") {
    if (attrs.label !== undefined) rec.label = mcGrSafeLabel(attrs.label, 120) || k;
    if (attrs.data !== undefined) rec.data = attrs.data;
  }
  return k;
};

mcGrGraph.prototype.hasNode = function (id) {
  const k = mcGrNodeKey(id);
  return k !== null && this._nodes.has(k);
};

mcGrGraph.prototype.node = function (id) {
  const k = mcGrNodeKey(id);
  if (k === null) return null;
  return this._nodes.get(k) || null;
};

mcGrGraph.prototype.nodes = function () {
  return Array.from(this._nodes.keys());
};

mcGrGraph.prototype.removeNode = function (id) {
  const k = mcGrNodeKey(id);
  if (k === null || !this._nodes.has(k)) return false;
  const out = this._out.get(k);
  const inn = this._in.get(k);
  // Count the incident edges before unlinking. In the undirected case out and
  // inn are the SAME Map, so iterating both would double-decrement _m.
  const seen = new Set();
  out.forEach(function (w, v) { seen.add(v); });
  if (this.directed) inn.forEach(function (w, v) { seen.add(v); });
  const self = this;
  seen.forEach(function (v) {
    const wOut = out.has(v) ? out.get(v) : 0;
    const wIn = self.directed && inn.has(v) ? inn.get(v) : 0;
    if (self.directed) {
      if (out.has(v)) { self._m--; self._w -= wOut; self._in.get(v).delete(k); }
      if (v !== k && inn.has(v)) { self._m--; self._w -= wIn; self._out.get(v).delete(k); }
      if (v === k && inn.has(v)) { /* self-loop already counted once above */ }
    } else {
      self._m--;
      self._w -= wOut;
      if (v !== k) self._out.get(v).delete(k);
    }
  });
  this._nodes.delete(k);
  this._out.delete(k);
  this._in.delete(k);
  if (this._m < 0) this._m = 0;
  if (this._w < 0) this._w = 0;
  this._touch();
  return true;
};

// Weight semantics: `weight` defaults to 1; a non-finite weight also falls back
// to 1 (a NaN slipping out of a count is a bug upstream, not a reason to lose
// the edge); a weight <= 0 is rejected outright.
mcGrGraph.prototype.addEdge = function (u, v, weight) {
  return this._edge(u, v, weight, true);
};

mcGrGraph.prototype.setEdge = function (u, v, weight) {
  return this._edge(u, v, weight, false);
};

mcGrGraph.prototype._edge = function (u, v, weight, accumulate) {
  const a = mcGrNodeKey(u), b = mcGrNodeKey(v);
  if (a === null || b === null) return false;
  let w = weight === undefined || weight === null ? 1 : weight;
  if (!mcGrIsNum(w)) w = 1;
  if (w <= 0) return false;
  this.addNode(a);
  this.addNode(b);
  const oa = this._out.get(a);
  const had = oa.has(b);
  const prev = had ? oa.get(b) : 0;
  const next = accumulate ? prev + w : w;
  oa.set(b, next);
  if (this.directed) {
    this._in.get(b).set(a, next);
  } else if (a !== b) {
    this._out.get(b).set(a, next);
  }
  if (!had) this._m++;
  this._w += next - prev;
  this._touch();
  return true;
};

mcGrGraph.prototype.hasEdge = function (u, v) {
  const a = mcGrNodeKey(u), b = mcGrNodeKey(v);
  if (a === null || b === null) return false;
  const oa = this._out.get(a);
  return !!oa && oa.has(b);
};

// Weight of (u,v), or 0 when the edge does not exist. 0 is safe as a sentinel
// precisely because a stored weight is always > 0.
mcGrGraph.prototype.edgeWeight = function (u, v) {
  const a = mcGrNodeKey(u), b = mcGrNodeKey(v);
  if (a === null || b === null) return 0;
  const oa = this._out.get(a);
  if (!oa || !oa.has(b)) return 0;
  return oa.get(b);
};

mcGrGraph.prototype.removeEdge = function (u, v) {
  const a = mcGrNodeKey(u), b = mcGrNodeKey(v);
  if (a === null || b === null) return false;
  const oa = this._out.get(a);
  if (!oa || !oa.has(b)) return false;
  const w = oa.get(b);
  oa.delete(b);
  if (this.directed) this._in.get(b).delete(a);
  else if (a !== b) this._out.get(b).delete(a);
  this._m--;
  this._w -= w;
  this._touch();
  return true;
};

// Each undirected edge is emitted once. The tie-break is insertion order, so
// the output is stable across runs for the same construction sequence.
mcGrGraph.prototype.edges = function () {
  const out = [];
  const rank = new Map();
  let i = 0;
  this._nodes.forEach(function (rec, k) { rank.set(k, i++); });
  const directed = this.directed;
  this._out.forEach(function (nbrs, a) {
    nbrs.forEach(function (w, b) {
      if (directed || rank.get(a) <= rank.get(b)) out.push({ source: a, target: b, weight: w });
    });
  });
  return out;
};

mcGrGraph.prototype.neighbors = function (id) {
  const k = mcGrNodeKey(id);
  if (k === null || !this._out.has(k)) return [];
  return Array.from(this._out.get(k).keys());
};

mcGrGraph.prototype.inNeighbors = function (id) {
  const k = mcGrNodeKey(id);
  if (k === null || !this._in.has(k)) return [];
  return Array.from(this._in.get(k).keys());
};

// fn(neighborId, weight). Iterating the Map directly avoids the array that
// neighbors() has to allocate — the difference matters inside hot loops.
mcGrGraph.prototype.forEachNeighbor = function (id, fn) {
  const k = mcGrNodeKey(id);
  if (k === null || typeof fn !== "function") return;
  const nb = this._out.get(k);
  if (nb) nb.forEach(function (w, v) { fn(v, w); });
};

// Undirected: self-loop counts 2. Directed: out + in, and a self-loop appears
// in both, so it also counts 2. Consistent either way.
mcGrGraph.prototype.degree = function (id) {
  const k = mcGrNodeKey(id);
  if (k === null || !this._out.has(k)) return 0;
  const o = this._out.get(k);
  if (!this.directed) return o.size + (o.has(k) ? 1 : 0);
  return o.size + this._in.get(k).size;
};

mcGrGraph.prototype.outDegree = function (id) {
  const k = mcGrNodeKey(id);
  if (k === null || !this._out.has(k)) return 0;
  return this._out.get(k).size;
};

mcGrGraph.prototype.inDegree = function (id) {
  const k = mcGrNodeKey(id);
  if (k === null || !this._in.has(k)) return 0;
  return this._in.get(k).size;
};

mcGrGraph.prototype.weightedDegree = function (id) {
  const k = mcGrNodeKey(id);
  if (k === null || !this._out.has(k)) return 0;
  let s = 0;
  const o = this._out.get(k);
  o.forEach(function (w) { s += w; });
  if (!this.directed) { if (o.has(k)) s += o.get(k); return s; }
  this._in.get(k).forEach(function (w) { s += w; });
  return s;
};

mcGrGraph.prototype.clone = function () {
  const g = new mcGrGraph({ directed: this.directed });
  this._nodes.forEach(function (rec, k) { g.addNode(k, { label: rec.label, data: rec.data }); });
  const directed = this.directed;
  const rank = new Map();
  let i = 0;
  this._nodes.forEach(function (rec, k) { rank.set(k, i++); });
  this._out.forEach(function (nbrs, a) {
    nbrs.forEach(function (w, b) {
      if (directed || rank.get(a) <= rank.get(b)) g.setEdge(a, b, w);
    });
  });
  return g;
};

// ---------------------------------------------------------------------------
// Index snapshot — the structure every algorithm actually runs on
// ---------------------------------------------------------------------------
//
// Walking Map-of-Maps is roughly 5x slower than walking typed arrays and, worse,
// gives no stable integer id to index scratch arrays by. Every algorithm below
// takes a snapshot instead. Snapshots are cached per (graph version, direction
// view), so a page that computes PageRank + betweenness + Louvain over the same
// graph builds it once.
//
// Fields:
//   ids[i]        node id for index i (graph insertion order)
//   index         Map id -> i
//   out[i]        Int32Array of out-neighbour indices, ascending
//   outW[i]       Float64Array of matching weights
//   inn[i]/innW[i] same for in-edges; identical arrays when undirected
//   selfW[i]      weight of i's self-loop (0 if none)
//   degOutC/degInC unweighted out/in degree (self-loop counted once each)
//   degW[i]       Louvain/modularity degree: sum of incident weight with the
//                 self-loop counted TWICE (undirected view only)
//   m2            sum of degW == 2m for the undirected view
function mcGrSnapshot(g, undirected) {
  if (!(g instanceof mcGrGraph)) {
    return {
      n: 0, ids: [], index: new Map(), out: [], outW: [], inn: [], innW: [],
      selfW: new Float64Array(0), degOutC: new Int32Array(0),
      degInC: new Int32Array(0), degW: new Float64Array(0), m2: 0, undirected: true
    };
  }
  const view = undirected !== false;
  const key = view ? "_snapU" : "_snapD";
  const cached = g[key];
  if (cached && cached.ver === g._ver) return cached;

  const n = g._nodes.size;
  const ids = new Array(n);
  const index = new Map();
  let i = 0;
  g._nodes.forEach(function (rec, k) { ids[i] = k; index.set(k, i); i++; });

  const out = new Array(n), outW = new Array(n);
  const selfW = new Float64Array(n);
  const degOutC = new Int32Array(n), degInC = new Int32Array(n);
  const degW = new Float64Array(n);
  let inn, innW;

  const symmetrise = view && g.directed;

  for (let a = 0; a < n; a++) {
    const id = ids[a];
    const src = g._out.get(id);
    let pairs;
    if (symmetrise) {
      // Undirected view of a directed graph: w(u,v) = w(u->v) + w(v->u).
      // Summing (rather than max, or "either") keeps total weight invariant,
      // which is what modularity and weighted degree both assume.
      const merged = new Map();
      src.forEach(function (w, b) { merged.set(b, (merged.get(b) || 0) + w); });
      g._in.get(id).forEach(function (w, b) {
        if (b === id) return; // the self-loop is already in src; do not double it
        merged.set(b, (merged.get(b) || 0) + w);
      });
      pairs = merged;
    } else {
      pairs = src;
    }
    const idxs = [];
    pairs.forEach(function (w, b) {
      const j = index.get(b);
      if (j !== undefined) idxs.push(j);
    });
    idxs.sort(function (x, y) { return x - y; });
    const arr = new Int32Array(idxs.length);
    const warr = new Float64Array(idxs.length);
    for (let t = 0; t < idxs.length; t++) {
      arr[t] = idxs[t];
      warr[t] = pairs.get(ids[idxs[t]]);
      if (idxs[t] === a) selfW[a] = warr[t];
    }
    out[a] = arr;
    outW[a] = warr;
    degOutC[a] = arr.length;
  }

  if (view || !g.directed) {
    inn = out; innW = outW;
    for (let a = 0; a < n; a++) {
      degInC[a] = degOutC[a];
      let s = 0;
      const w = outW[a];
      for (let t = 0; t < w.length; t++) s += w[t];
      degW[a] = s + selfW[a]; // self-loop counted twice
    }
  } else {
    inn = new Array(n); innW = new Array(n);
    for (let a = 0; a < n; a++) {
      const id = ids[a];
      const pairs = g._in.get(id);
      const idxs = [];
      pairs.forEach(function (w, b) {
        const j = index.get(b);
        if (j !== undefined) idxs.push(j);
      });
      idxs.sort(function (x, y) { return x - y; });
      const arr = new Int32Array(idxs.length);
      const warr = new Float64Array(idxs.length);
      for (let t = 0; t < idxs.length; t++) {
        arr[t] = idxs[t];
        warr[t] = pairs.get(ids[idxs[t]]);
      }
      inn[a] = arr; innW[a] = warr;
      degInC[a] = arr.length;
      let s = 0;
      for (let t = 0; t < outW[a].length; t++) s += outW[a][t];
      for (let t = 0; t < warr.length; t++) s += warr[t];
      degW[a] = s;
    }
  }

  let m2 = 0;
  for (let a = 0; a < n; a++) m2 += degW[a];

  const snap = {
    ver: g._ver, n: n, ids: ids, index: index, out: out, outW: outW,
    inn: inn, innW: innW, selfW: selfW, degOutC: degOutC, degInC: degInC,
    degW: degW, m2: m2, undirected: view || !g.directed
  };
  g[key] = snap;
  return snap;
}

// Turn an index-keyed Float64Array back into { nodeId: value }.
function mcGrByIdObj(snap, vals) {
  const out = {};
  for (let i = 0; i < snap.n; i++) out[snap.ids[i]] = vals[i];
  return out;
}

// ---------------------------------------------------------------------------
// Construction from data
// ---------------------------------------------------------------------------

// Edge list entries may be [u, v], [u, v, w], or { source, target, weight }.
// Anything else in the array is skipped rather than aborting the build — a
// single malformed row in a wire payload must not cost us the whole graph.
function mcGrFromEdgeList(list, options) {
  const g = new mcGrGraph(options);
  if (!Array.isArray(list)) return g;
  for (let i = 0; i < list.length; i++) {
    const e = list[i];
    if (!e) continue;
    if (Array.isArray(e)) {
      if (e.length >= 2) g.addEdge(e[0], e[1], e.length >= 3 ? e[2] : 1);
    } else if (typeof e === "object") {
      const s = e.source !== undefined ? e.source : e.from;
      const t = e.target !== undefined ? e.target : e.to;
      g.addEdge(s, t, e.weight);
    }
  }
  return g;
}

// Pull entity strings out of one document. Accepts an array of strings, an
// array of {name|text|label|entity} objects, or an object with an `entities`
// (or `ents`) field holding either of those.
function mcGrDocEntities(doc) {
  let raw = null;
  if (Array.isArray(doc)) raw = doc;
  else if (doc && typeof doc === "object") {
    raw = Array.isArray(doc.entities) ? doc.entities
      : Array.isArray(doc.ents) ? doc.ents
        : Array.isArray(doc.names) ? doc.names : null;
  }
  if (!raw) return [];
  const out = [];
  for (let i = 0; i < raw.length; i++) {
    const it = raw[i];
    let name = null;
    if (typeof it === "string") name = it;
    else if (typeof it === "number" && isFinite(it)) name = String(it);
    else if (it && typeof it === "object") {
      name = it.name || it.text || it.label || it.entity || null;
      if (typeof name !== "string") name = null;
    }
    if (name === null) continue;
    const clean = mcGrSafeLabel(name, 120);
    if (clean.length > 0) out.push(clean);
  }
  return out;
}

// Build a co-occurrence graph: two entities in the same document get an edge,
// weighted by the number of documents they share.
//
// options:
//   directed        false (co-occurrence is symmetric by definition)
//   minWeight       1 — prune pairs seen fewer than this many times
//   maxPerDoc       32 — a document with k entities yields k*(k-1)/2 pairs. One
//                   pathological doc listing 400 names would add 80k edges on
//                   its own and dominate the graph, so we keep the first
//                   maxPerDoc entities of a document and drop the rest. Chose a
//                   hard cap over a per-doc weight discount because the latter
//                   still pays the quadratic construction cost.
//   caseInsensitive true — "Biden" and "biden" are the same entity
//   selfLoops       false — an entity co-occurring with itself is not a link
function mcGrFromDocuments(docs, options) {
  const o = options && typeof options === "object" ? options : {};
  const g = new mcGrGraph({ directed: o.directed === true });
  if (!Array.isArray(docs)) return g;
  const maxPerDoc = Math.floor(mcGrPosNum(o.maxPerDoc, 32));
  const minWeight = mcGrPosNum(o.minWeight, 1);
  const ci = o.caseInsensitive !== false;
  const allowSelf = o.selfLoops === true;
  const docCount = new Map();
  const canon = new Map(); // canonical key -> display label (first spelling wins)

  for (let d = 0; d < docs.length; d++) {
    const names = mcGrDocEntities(docs[d]);
    if (names.length === 0) continue;
    // Dedupe within the document: a name mentioned three times in one headline
    // is still one co-occurrence.
    const seen = new Map();
    for (let i = 0; i < names.length && seen.size < maxPerDoc; i++) {
      const key = ci ? names[i].toLowerCase() : names[i];
      if (!seen.has(key)) {
        seen.set(key, names[i]);
        if (!canon.has(key)) canon.set(key, names[i]);
      }
    }
    const keys = Array.from(seen.keys());
    for (let i = 0; i < keys.length; i++) {
      docCount.set(keys[i], (docCount.get(keys[i]) || 0) + 1);
      g.addNode(keys[i], { label: canon.get(keys[i]) });
    }
    for (let i = 0; i < keys.length; i++) {
      for (let j = i + 1; j < keys.length; j++) {
        g.addEdge(keys[i], keys[j], 1);
        if (g.directed) g.addEdge(keys[j], keys[i], 1);
      }
    }
    if (allowSelf) for (let i = 0; i < keys.length; i++) g.addEdge(keys[i], keys[i], 1);
  }

  docCount.forEach(function (c, k) {
    const rec = g.node(k);
    if (rec) rec.data = { docs: c };
  });

  if (minWeight > 1) {
    const drop = g.edges().filter(function (e) { return e.weight < minWeight; });
    for (let i = 0; i < drop.length; i++) g.removeEdge(drop[i].source, drop[i].target);
  }
  return g;
}

// ---------------------------------------------------------------------------
// Centrality
// ---------------------------------------------------------------------------

// options: { normalized: true, weighted: false, mode: "all"|"out"|"in" }
// Normalisation divides by n-1 (the maximum possible degree in a simple graph),
// so a value of 1 means "adjacent to everything else". With weights or
// self-loops present the normalised value can exceed 1; that is not a bug, it
// is what "normalised by the simple-graph maximum" means, and rescaling by the
// observed maximum instead would make values incomparable between graphs.
function mcGrDegreeCentrality(g, options) {
  const o = options && typeof options === "object" ? options : {};
  const mode = o.mode === "out" || o.mode === "in" ? o.mode : "all";
  const directed = (g instanceof mcGrGraph) && g.directed;
  const snap = mcGrSnapshot(g, !(directed && mode !== "all"));
  const n = snap.n;
  const res = new Float64Array(n);
  const weighted = o.weighted === true;
  for (let i = 0; i < n; i++) {
    let v;
    if (mode === "all") {
      v = weighted ? snap.degW[i] : (snap.undirected
        ? snap.degOutC[i] + (snap.selfW[i] > 0 ? 1 : 0)
        : snap.degOutC[i] + snap.degInC[i]);
    } else if (mode === "out") {
      v = weighted ? mcGrSumArr(snap.outW[i]) : snap.degOutC[i];
    } else {
      v = weighted ? mcGrSumArr(snap.innW[i]) : snap.degInC[i];
    }
    res[i] = v;
  }
  if (o.normalized !== false && n > 1) {
    for (let i = 0; i < n; i++) res[i] /= (n - 1);
  }
  return mcGrByIdObj(snap, res);
}

function mcGrSumArr(a) {
  let s = 0;
  for (let i = 0; i < a.length; i++) s += a[i];
  return s;
}

// PageRank by power iteration.
//
// Convergence criterion: L1 distance between successive iterates, ||x' - x||_1
// < tol (default 1e-11). L1 rather than L-inf because the vector sums to 1, so
// the L1 residual is directly "how much probability mass is still moving" —
// scale-free and comparable across graph sizes. Iteration cap 200: the power
// iteration for the Google matrix contracts by a factor of d each step, so the
// residual after 200 steps is bounded by 0.85^200 ~ 8e-15. The cap therefore
// only binds for damping very close to 1, and the result reports `converged`
// so a caller can tell.
//
// Dangling nodes (no out-edges — common in a directed mention graph) would leak
// probability mass. Their mass is redistributed uniformly, which is the
// standard Page/Brin patch and keeps sum(x) == 1 exactly.
//
// options: { damping: 0.85, tol, maxIter, weighted: true, personalization }
function mcGrPageRank(g, options) {
  const o = options && typeof options === "object" ? options : {};
  const directed = (g instanceof mcGrGraph) && g.directed;
  const snap = mcGrSnapshot(g, !directed);
  const n = snap.n;
  if (n === 0) return { scores: {}, iterations: 0, converged: true, damping: 0.85 };
  const d = mcGrClamp(mcGrNum(o.damping, 0.85), 0, 0.999999);
  const tol = mcGrPosNum(o.tol, mcGrPageRankTol);
  const maxIter = Math.floor(mcGrPosNum(o.maxIter, mcGrPageRankMaxIter));
  const weighted = o.weighted !== false;

  // Teleport distribution. A personalization vector lets the caller bias the
  // walk toward a query entity; invalid entries are ignored rather than fatal.
  const tele = new Float64Array(n);
  let teleSum = 0;
  if (o.personalization && typeof o.personalization === "object") {
    const p = o.personalization;
    const keys = p instanceof Map ? Array.from(p.keys()) : Object.keys(p);
    for (let t = 0; t < keys.length; t++) {
      const i = snap.index.get(String(keys[t]));
      if (i === undefined) continue;
      const v = p instanceof Map ? p.get(keys[t]) : p[keys[t]];
      if (mcGrIsNum(v) && v > 0) { tele[i] = v; teleSum += v; }
    }
  }
  if (teleSum <= 0) { tele.fill(1 / n); teleSum = 1; }
  else for (let i = 0; i < n; i++) tele[i] /= teleSum;

  // Out-strength per node (weighted or plain count).
  const strength = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    strength[i] = weighted ? mcGrSumArr(snap.outW[i]) : snap.out[i].length;
  }

  let x = new Float64Array(n);
  for (let i = 0; i < n; i++) x[i] = tele[i];
  let next = new Float64Array(n);
  let iter = 0, converged = false;

  for (; iter < maxIter; iter++) {
    let dangling = 0;
    for (let i = 0; i < n; i++) if (strength[i] <= 0) dangling += x[i];
    for (let i = 0; i < n; i++) next[i] = (1 - d) * tele[i] + d * dangling * tele[i];
    for (let i = 0; i < n; i++) {
      const s = strength[i];
      if (s <= 0 || x[i] === 0) continue;
      const nb = snap.out[i], nw = snap.outW[i];
      const share = d * x[i] / s;
      for (let t = 0; t < nb.length; t++) {
        next[nb[t]] += share * (weighted ? nw[t] : 1);
      }
    }
    let err = 0;
    for (let i = 0; i < n; i++) err += Math.abs(next[i] - x[i]);
    const tmp = x; x = next; next = tmp;
    if (err < tol) { converged = true; iter++; break; }
  }
  // Renormalise: 200 multiply-adds accumulate a little float drift, and a
  // downstream "share of attention" readout should sum to 1 exactly enough.
  let sum = 0;
  for (let i = 0; i < n; i++) sum += x[i];
  if (sum > 0) for (let i = 0; i < n; i++) x[i] /= sum;

  return { scores: mcGrByIdObj(snap, x), iterations: iter, converged: converged, damping: d };
}

// Brandes (2001) betweenness centrality.
//
// Unweighted (BFS) by default: on a co-occurrence graph the weight is a
// co-mention COUNT, i.e. an affinity, and feeding an affinity to a
// shortest-path algorithm that treats it as a length inverts the meaning. Set
// weighted:true only if your weights really are distances (or pass
// invertWeights to turn affinities into distances as 1/w).
//
// options: { normalized: true, weighted: false, invertWeights: false }
function mcGrBetweenness(g, options) {
  const o = options && typeof options === "object" ? options : {};
  const directed = (g instanceof mcGrGraph) && g.directed;
  const snap = mcGrSnapshot(g, !directed);
  const n = snap.n;
  if (n === 0) return {};
  const bc = new Float64Array(n);
  const weighted = o.weighted === true;
  const invert = o.invertWeights === true;

  const sigma = new Float64Array(n);
  const dist = new Float64Array(n);
  const delta = new Float64Array(n);
  const done = new Uint8Array(n);
  const preds = new Array(n);
  const stack = new Int32Array(n);
  const queue = new Int32Array(n);

  for (let s = 0; s < n; s++) {
    for (let i = 0; i < n; i++) { sigma[i] = 0; delta[i] = 0; preds[i] = null; }
    sigma[s] = 1;
    let sp = 0;

    if (!weighted) {
      dist.fill(-1);
      dist[s] = 0;
      let head = 0, tail = 0;
      queue[tail++] = s;
      while (head < tail) {
        const v = queue[head++];
        stack[sp++] = v;
        const nb = snap.out[v];
        for (let t = 0; t < nb.length; t++) {
          const w = nb[t];
          if (w === v) continue; // self-loop is never on a shortest path
          if (dist[w] < 0) { dist[w] = dist[v] + 1; queue[tail++] = w; }
          if (dist[w] === dist[v] + 1) {
            sigma[w] += sigma[v];
            if (preds[w] === null) preds[w] = [v]; else preds[w].push(v);
          }
        }
      }
    } else {
      dist.fill(Infinity);
      done.fill(0);
      dist[s] = 0;
      const heap = new mcGrHeap();
      heap.push(0, s);
      while (heap.n > 0) {
        const v = heap.pop();
        if (done[v]) continue;
        done[v] = 1;
        stack[sp++] = v;
        const nb = snap.out[v], nw = snap.outW[v];
        for (let t = 0; t < nb.length; t++) {
          const w = nb[t];
          if (w === v) continue;
          let len = nw[t];
          if (invert) len = 1 / len;
          const nd = dist[v] + len;
          // Tie detection on floats needs a tolerance, otherwise two genuinely
          // equal-length paths differing in the last bit are counted as one and
          // sigma is wrong. Relative epsilon, scaled by the distance magnitude.
          const tolEq = 1e-9 * (1 + Math.abs(nd));
          if (nd < dist[w] - tolEq) {
            dist[w] = nd;
            sigma[w] = sigma[v];
            preds[w] = [v];
            heap.push(nd, w);
          } else if (nd <= dist[w] + tolEq && !done[w]) {
            sigma[w] += sigma[v];
            if (preds[w] === null) preds[w] = [v]; else preds[w].push(v);
          }
        }
      }
    }

    for (let i = sp - 1; i >= 0; i--) {
      const w = stack[i];
      const pw = preds[w];
      if (pw) {
        const coeff = (1 + delta[w]) / sigma[w];
        for (let t = 0; t < pw.length; t++) {
          const v = pw[t];
          delta[v] += sigma[v] * coeff;
        }
      }
      if (w !== s) bc[w] += delta[w];
    }
  }

  // Rescaling follows the standard convention: unnormalised undirected halves
  // the ordered-pair sum; normalised divides by (n-1)(n-2), which folds the
  // halving in for the undirected case.
  const norm = o.normalized !== false;
  let scale = 1;
  if (norm) scale = n > 2 ? 1 / ((n - 1) * (n - 2)) : 0;
  else if (snap.undirected) scale = 0.5;
  for (let i = 0; i < n; i++) bc[i] *= scale;
  return mcGrByIdObj(snap, bc);
}

// Closeness centrality.
//
// DISCONNECTED GRAPHS: closeness is undefined across components (the distance
// is infinite). Three options were on the table:
//   (a) return 0 for anything not reachable from everything — throws away all
//       information about small components;
//   (b) compute within the component only — well defined, but a node in a
//       2-node component scores 1.0 and outranks the hub of a 500-node
//       component, which is actively misleading in a ranked list;
//   (c) Wasserman-Faust: scale the within-component value by the fraction of
//       the graph that is reachable, C(u) = ((r-1)/sum d) * ((r-1)/(n-1)).
// We default to (c) because this module's output feeds a ranking. It reduces
// exactly to the textbook (n-1)/sum(d) on a connected graph. An isolated node
// (r == 1) gets 0. Pass { wf: false } for the raw within-component value, and
// use mcGrHarmonic if you want a measure that is defined everywhere without
// any correction at all.
//
// options: { wf: true, weighted: false, invertWeights: false }
function mcGrCloseness(g, options) {
  const o = options && typeof options === "object" ? options : {};
  const directed = (g instanceof mcGrGraph) && g.directed;
  const snap = mcGrSnapshot(g, !directed);
  const n = snap.n;
  if (n === 0) return {};
  const res = new Float64Array(n);
  const wf = o.wf !== false;
  // For directed graphs closeness is conventionally measured on INCOMING
  // distance (how easily the rest of the graph reaches u), so we traverse the
  // reverse adjacency.
  const adj = snap.undirected ? snap.out : snap.inn;
  const adjW = snap.undirected ? snap.outW : snap.innW;
  for (let s = 0; s < n; s++) {
    const r = mcGrSssp(snap, s, adj, adjW, o.weighted === true, o.invertWeights === true);
    if (r.reach <= 1) { res[s] = 0; continue; }
    let raw = (r.reach - 1) / r.total;
    if (wf && n > 1) raw *= (r.reach - 1) / (n - 1);
    res[s] = raw;
  }
  return mcGrByIdObj(snap, res);
}

// Harmonic centrality: sum of 1/d over all other nodes, with 1/inf = 0. Needs
// no correction on disconnected graphs, which is exactly why it exists.
function mcGrHarmonic(g, options) {
  const o = options && typeof options === "object" ? options : {};
  const directed = (g instanceof mcGrGraph) && g.directed;
  const snap = mcGrSnapshot(g, !directed);
  const n = snap.n;
  if (n === 0) return {};
  const res = new Float64Array(n);
  const adj = snap.undirected ? snap.out : snap.inn;
  const adjW = snap.undirected ? snap.outW : snap.innW;
  for (let s = 0; s < n; s++) {
    const r = mcGrSssp(snap, s, adj, adjW, o.weighted === true, o.invertWeights === true, true);
    res[s] = o.normalized !== false && n > 1 ? r.harm / (n - 1) : r.harm;
  }
  return mcGrByIdObj(snap, res);
}

// Single-source shortest paths; returns reach count, distance sum and harmonic
// sum. Shared by closeness and harmonic so the two can never disagree.
function mcGrSssp(snap, s, adj, adjW, weighted, invert, wantHarm) {
  const n = snap.n;
  let reach = 1, total = 0, harm = 0;
  if (!weighted) {
    const dist = new Int32Array(n).fill(-1);
    const q = new Int32Array(n);
    let head = 0, tail = 0;
    dist[s] = 0; q[tail++] = s;
    while (head < tail) {
      const v = q[head++];
      const nb = adj[v];
      for (let t = 0; t < nb.length; t++) {
        const w = nb[t];
        if (dist[w] < 0) {
          dist[w] = dist[v] + 1;
          reach++; total += dist[w];
          if (wantHarm) harm += 1 / dist[w];
          q[tail++] = w;
        }
      }
    }
  } else {
    const dist = new Float64Array(n).fill(Infinity);
    const done = new Uint8Array(n);
    dist[s] = 0;
    const heap = new mcGrHeap();
    heap.push(0, s);
    while (heap.n > 0) {
      const v = heap.pop();
      if (done[v]) continue;
      done[v] = 1;
      if (v !== s) { reach++; total += dist[v]; if (wantHarm) harm += 1 / dist[v]; }
      const nb = adj[v], nw = adjW[v];
      for (let t = 0; t < nb.length; t++) {
        const w = nb[t];
        if (done[w]) continue;
        let len = nw[t];
        if (invert) len = 1 / len;
        const nd = dist[v] + len;
        if (nd < dist[w]) { dist[w] = nd; heap.push(nd, w); }
      }
    }
  }
  return { reach: reach, total: total, harm: harm };
}

// Eigenvector centrality by power iteration on (A + I).
//
// The shift is the whole point. Plain power iteration on A fails to converge on
// any bipartite graph — a star, a path, a grid — because the spectrum is
// symmetric (+L and -L) and the iterate oscillates forever between two vectors.
// (A + I) has eigenvalues L+1 with the SAME eigenvectors, and for L_max > 0 the
// shift makes L_max+1 strictly dominant, so the iteration converges to the
// correct eigenvector. Cost: nothing but one extra add per node.
//
// Non-convergence is still possible (tiny spectral gap, e.g. two near-identical
// components). We do NOT throw and we do NOT silently return garbage: the
// result carries converged:false plus the last iterate, and the caller can
// decide to fall back to degree centrality.
//
// On an edgeless graph (A + I) = I, so every node gets the same value 1/sqrt(n)
// rather than NaN. Documented as "uniform when there is no structure".
function mcGrEigenvector(g, options) {
  const o = options && typeof options === "object" ? options : {};
  const snap = mcGrSnapshot(g, true); // symmetrised; the directed variant is a
  // different measure (Katz / hub-authority) and is deliberately out of scope
  const n = snap.n;
  if (n === 0) return { scores: {}, iterations: 0, converged: true, eigenvalue: 0 };
  const tol = mcGrPosNum(o.tol, mcGrEigenTol);
  const maxIter = Math.floor(mcGrPosNum(o.maxIter, mcGrEigenMaxIter));
  const weighted = o.weighted !== false;

  let x = new Float64Array(n).fill(1 / Math.sqrt(n));
  let y = new Float64Array(n);
  let iter = 0, converged = false, lambda = 0;

  for (; iter < maxIter; iter++) {
    y.fill(0);
    for (let i = 0; i < n; i++) {
      const nb = snap.out[i], nw = snap.outW[i];
      let acc = x[i]; // the +I shift
      for (let t = 0; t < nb.length; t++) acc += (weighted ? nw[t] : 1) * x[nb[t]];
      y[i] = acc;
    }
    let norm = 0;
    for (let i = 0; i < n; i++) norm += y[i] * y[i];
    norm = Math.sqrt(norm);
    if (!(norm > mcGrEps)) { converged = true; iter++; break; }
    lambda = norm;
    let err = 0;
    for (let i = 0; i < n; i++) {
      y[i] /= norm;
      err += Math.abs(y[i] - x[i]);
    }
    const tmp = x; x = y; y = tmp;
    if (err < tol) { converged = true; iter++; break; }
  }
  // Sign convention: the leading eigenvector of a non-negative matrix is
  // non-negative (Perron-Frobenius); flip if the iteration landed on -v.
  let neg = 0;
  for (let i = 0; i < n; i++) if (x[i] < 0) neg++;
  if (neg > n / 2) for (let i = 0; i < n; i++) x[i] = -x[i];
  for (let i = 0; i < n; i++) if (x[i] < 0) x[i] = 0;

  return {
    scores: mcGrByIdObj(snap, x),
    iterations: iter,
    converged: converged,
    eigenvalue: lambda - 1 // undo the shift to report A's eigenvalue
  };
}

// ---------------------------------------------------------------------------
// Community detection
// ---------------------------------------------------------------------------

// Normalise a partition (object, Map, or array-of-arrays) into an Int32Array of
// community indices over the snapshot's node order. Unassigned nodes become
// singletons — the alternative (dropping them) would silently change n and make
// the modularity incomparable.
function mcGrPartitionArray(snap, communities) {
  const n = snap.n;
  const comm = new Int32Array(n).fill(-1);
  const labelIdx = new Map();
  function idOf(label) {
    const key = typeof label === "number" ? "n" + label : "s" + String(label);
    let v = labelIdx.get(key);
    if (v === undefined) { v = labelIdx.size; labelIdx.set(key, v); }
    return v;
  }
  if (Array.isArray(communities)) {
    for (let c = 0; c < communities.length; c++) {
      const grp = communities[c];
      if (!Array.isArray(grp)) continue;
      for (let t = 0; t < grp.length; t++) {
        const i = snap.index.get(mcGrNodeKey(grp[t]));
        if (i !== undefined && comm[i] < 0) comm[i] = idOf(c);
      }
    }
  } else if (communities instanceof Map) {
    communities.forEach(function (label, key) {
      const i = snap.index.get(mcGrNodeKey(key));
      if (i !== undefined) comm[i] = idOf(label);
    });
  } else if (communities && typeof communities === "object") {
    const keys = Object.keys(communities);
    for (let t = 0; t < keys.length; t++) {
      const i = snap.index.get(keys[t]);
      if (i !== undefined) comm[i] = idOf(communities[keys[t]]);
    }
  }
  let nextFree = labelIdx.size;
  for (let i = 0; i < n; i++) if (comm[i] < 0) comm[i] = nextFree++;
  return comm;
}

// Newman-Girvan modularity with a resolution parameter gamma:
//   Q = sum_c [ in_c/(2m) - gamma * (tot_c/(2m))^2 ]
// where in_c sums A_ij over ORDERED pairs inside c (so a self-loop of weight w
// contributes 2w, matching the degree convention) and tot_c sums degW.
// Directed graphs are symmetrised first: the directed modularity of
// Leicht-Newman is a different quantity and mixing the two silently would be
// worse than declaring the choice.
function mcGrModularity(g, communities, options) {
  const o = options && typeof options === "object" ? options : {};
  const snap = mcGrSnapshot(g, true);
  const n = snap.n;
  if (n === 0 || snap.m2 <= 0) return 0;
  const gamma = mcGrPosNum(o.resolution, 1);
  const comm = mcGrPartitionArray(snap, communities);
  let k = 0;
  for (let i = 0; i < n; i++) if (comm[i] + 1 > k) k = comm[i] + 1;
  const inW = new Float64Array(k);
  const tot = new Float64Array(k);
  for (let i = 0; i < n; i++) {
    tot[comm[i]] += snap.degW[i];
    const nb = snap.out[i], nw = snap.outW[i];
    for (let t = 0; t < nb.length; t++) {
      const j = nb[t];
      if (comm[j] !== comm[i]) continue;
      // Ordered-pair sum: an off-diagonal edge is visited from both ends, and a
      // self-loop is visited once but counts twice.
      inW[comm[i]] += j === i ? 2 * nw[t] : nw[t];
    }
  }
  const m2 = snap.m2;
  let q = 0;
  for (let c = 0; c < k; c++) q += inW[c] / m2 - gamma * (tot[c] / m2) * (tot[c] / m2);
  return q;
}

// Louvain, both phases.
//
// Phase 1 moves each node to the neighbouring community with the greatest
// modularity gain, repeating until no move helps. Phase 2 collapses each
// community to a single node (community-internal weight becomes a self-loop)
// and recurses. Passes stop when a whole pass buys less than `tol` modularity.
//
// Randomised: the node visit order in phase 1 changes the result, so the seed
// is an explicit option and defaults to a fixed value. Same seed + same graph
// construction order => byte-identical output. Ties in the gain comparison are
// broken toward the LOWEST community index (not randomly) so that the only
// source of nondeterminism is the seeded shuffle.
//
// options: { seed: 1, resolution: 1, tol: 1e-7, maxPasses: 20 }
function mcGrLouvain(g, options) {
  const o = options && typeof options === "object" ? options : {};
  const snap = mcGrSnapshot(g, true);
  const n0 = snap.n;
  const empty = { communities: {}, groups: [], modularity: 0, levels: 0, seed: 0 };
  if (n0 === 0) return empty;
  const seed = Math.floor(mcGrNum(o.seed, 1));
  const gamma = mcGrPosNum(o.resolution, 1);
  const tol = mcGrPosNum(o.tol, 1e-7);
  const maxPasses = Math.floor(mcGrPosNum(o.maxPasses, 20));
  const m2 = snap.m2;
  if (!(m2 > 0)) {
    // No edges: every node is its own community and Q is 0 by definition.
    const comms = {};
    const groups = [];
    for (let i = 0; i < n0; i++) { comms[snap.ids[i]] = i; groups.push([snap.ids[i]]); }
    return { communities: comms, groups: groups, modularity: 0, levels: 1, seed: seed };
  }
  const rnd = mcGrRng(seed);

  // Working level: plain arrays so phase 2 can rebuild them cheaply.
  let lvlN = n0;
  let lvlAdj = new Array(lvlN);
  let lvlW = new Array(lvlN);
  let lvlSelf = new Float64Array(lvlN);
  for (let i = 0; i < lvlN; i++) {
    const nb = snap.out[i], nw = snap.outW[i];
    const a = [], w = [];
    for (let t = 0; t < nb.length; t++) {
      if (nb[t] === i) continue; // self-loops live in lvlSelf, not the adjacency
      a.push(nb[t]); w.push(nw[t]);
    }
    lvlAdj[i] = a; lvlW[i] = w; lvlSelf[i] = snap.selfW[i];
  }
  // membership[i] maps ORIGINAL node i to its current level node.
  let membership = new Int32Array(n0);
  for (let i = 0; i < n0; i++) membership[i] = i;

  let levels = 0;
  let qBest = mcGrModularityFromArrays(lvlAdj, lvlW, lvlSelf, mcGrIdentity(lvlN), m2, gamma);

  for (let pass = 0; pass < maxPasses; pass++) {
    const nn = lvlN;
    const deg = new Float64Array(nn);
    for (let i = 0; i < nn; i++) {
      let s = 2 * lvlSelf[i];
      const w = lvlW[i];
      for (let t = 0; t < w.length; t++) s += w[t];
      deg[i] = s;
    }
    const comm = new Int32Array(nn);
    const tot = new Float64Array(nn);
    for (let i = 0; i < nn; i++) { comm[i] = i; tot[i] = deg[i]; }

    const order = new Array(nn);
    for (let i = 0; i < nn; i++) order[i] = i;
    mcGrShuffle(order, rnd);

    // Scratch reused across nodes: weight into each candidate community.
    const linkW = new Float64Array(nn);
    const touched = new Int32Array(nn);
    let moved = true, sweeps = 0;
    while (moved && sweeps < 64) {
      moved = false; sweeps++;
      for (let oi = 0; oi < nn; oi++) {
        const i = order[oi];
        const ci = comm[i];
        const adj = lvlAdj[i], aw = lvlW[i];
        let nt = 0;
        for (let t = 0; t < adj.length; t++) {
          const j = adj[t];
          const cj = comm[j];
          if (linkW[cj] === 0) touched[nt++] = cj;
          linkW[cj] += aw[t];
        }
        if (linkW[ci] === 0 && nt < nn) { touched[nt++] = ci; } // allow "stay"
        tot[ci] -= deg[i];
        const base = linkW[ci] - gamma * tot[ci] * deg[i] / m2;
        let bestC = ci, bestGain = base;
        for (let t = 0; t < nt; t++) {
          const c = touched[t];
          if (c === ci) continue;
          const gain = linkW[c] - gamma * tot[c] * deg[i] / m2;
          // Strict > plus lower-index tie-break: with >= the node would drift
          // between equal-gain communities forever and the sweep never settles.
          if (gain > bestGain + mcGrEps || (Math.abs(gain - bestGain) <= mcGrEps && c < bestC)) {
            bestGain = gain; bestC = c;
          }
        }
        tot[bestC] += deg[i];
        if (bestC !== ci) { comm[i] = bestC; moved = true; }
        for (let t = 0; t < nt; t++) linkW[touched[t]] = 0;
      }
    }

    // Renumber communities 0..k-1 by first appearance, so output is stable.
    const remap = new Int32Array(nn).fill(-1);
    let k = 0;
    for (let i = 0; i < nn; i++) {
      if (remap[comm[i]] < 0) remap[comm[i]] = k++;
    }
    const newComm = new Int32Array(nn);
    for (let i = 0; i < nn; i++) newComm[i] = remap[comm[i]];

    const nextMembership = new Int32Array(n0);
    for (let i = 0; i < n0; i++) nextMembership[i] = newComm[membership[i]];
    const q = mcGrModularityFromArrays(
      // Evaluate on the ORIGINAL graph, not the collapsed one: the collapsed
      // graph's Q is algebraically equal, but computing it on the original is
      // the honest check and costs one pass over the edges.
      mcGrSnapAdj(snap), mcGrSnapW(snap), snap.selfW, nextMembership, m2, gamma);

    levels++;
    if (k === nn || q <= qBest + tol) {
      // No further improvement. Keep the better of (this pass, previous state).
      if (q > qBest) { membership = nextMembership; qBest = q; }
      break;
    }
    membership = nextMembership;
    qBest = q;

    // Phase 2: collapse.
    const agAdj = new Array(k), agW = new Array(k), agSelf = new Float64Array(k);
    const acc = new Array(k);
    for (let c = 0; c < k; c++) { agAdj[c] = []; agW[c] = []; acc[c] = new Map(); }
    for (let i = 0; i < nn; i++) {
      const ci = newComm[i];
      agSelf[ci] += lvlSelf[i];
      const adj = lvlAdj[i], aw = lvlW[i];
      for (let t = 0; t < adj.length; t++) {
        const cj = newComm[adj[t]];
        if (cj === ci) agSelf[ci] += aw[t] / 2; // each internal edge seen twice
        else acc[ci].set(cj, (acc[ci].get(cj) || 0) + aw[t]);
      }
    }
    for (let c = 0; c < k; c++) {
      const keys = Array.from(acc[c].keys()).sort(function (a, b) { return a - b; });
      for (let t = 0; t < keys.length; t++) { agAdj[c].push(keys[t]); agW[c].push(acc[c].get(keys[t])); }
    }
    lvlN = k; lvlAdj = agAdj; lvlW = agW; lvlSelf = agSelf;
    if (k <= 1) break;
  }

  return mcGrPartitionResult(snap, membership, qBest, levels, seed);
}

function mcGrIdentity(n) {
  const a = new Int32Array(n);
  for (let i = 0; i < n; i++) a[i] = i;
  return a;
}

// snapshot adjacency without self-loops, memoised on the snapshot.
function mcGrSnapAdj(snap) {
  if (!snap._adjNS) mcGrBuildNoSelf(snap);
  return snap._adjNS;
}
function mcGrSnapW(snap) {
  if (!snap._adjNS) mcGrBuildNoSelf(snap);
  return snap._wNS;
}
function mcGrBuildNoSelf(snap) {
  const n = snap.n;
  const a = new Array(n), w = new Array(n);
  for (let i = 0; i < n; i++) {
    const nb = snap.out[i], nw = snap.outW[i];
    const aa = [], ww = [];
    for (let t = 0; t < nb.length; t++) {
      if (nb[t] === i) continue;
      aa.push(nb[t]); ww.push(nw[t]);
    }
    a[i] = aa; w[i] = ww;
  }
  snap._adjNS = a; snap._wNS = w;
}

// Modularity from raw arrays (used inside Louvain to avoid rebuilding objects).
function mcGrModularityFromArrays(adj, wts, self, comm, m2, gamma) {
  const n = adj.length;
  let k = 0;
  for (let i = 0; i < n; i++) if (comm[i] + 1 > k) k = comm[i] + 1;
  const inW = new Float64Array(k), tot = new Float64Array(k);
  for (let i = 0; i < n; i++) {
    const c = comm[i];
    let d = 2 * self[i];
    const a = adj[i], w = wts[i];
    for (let t = 0; t < a.length; t++) {
      d += w[t];
      if (comm[a[t]] === c) inW[c] += w[t];
    }
    inW[c] += 2 * self[i];
    tot[c] += d;
  }
  let q = 0;
  for (let c = 0; c < k; c++) q += inW[c] / m2 - gamma * (tot[c] / m2) * (tot[c] / m2);
  return q;
}

function mcGrPartitionResult(snap, comm, q, levels, seed) {
  const n = snap.n;
  // Renumber by first appearance in node order for a stable, human-readable id.
  const remap = new Map();
  const communities = {};
  const groups = [];
  for (let i = 0; i < n; i++) {
    let c = remap.get(comm[i]);
    if (c === undefined) { c = remap.size; remap.set(comm[i], c); groups.push([]); }
    communities[snap.ids[i]] = c;
    groups[c].push(snap.ids[i]);
  }
  return { communities: communities, groups: groups, modularity: q, levels: levels, seed: seed };
}

// Asynchronous label propagation (Raghavan et al.). O(m) per sweep, no
// modularity optimisation at all — much cheaper than Louvain and usually a bit
// worse. Ties are broken with the seeded rng (the paper requires a random
// choice among maximal labels; a deterministic tie-break collapses the whole
// graph to one label on regular graphs).
//
// options: { seed: 1, maxIter: 100 }
function mcGrLabelPropagation(g, options) {
  const o = options && typeof options === "object" ? options : {};
  const snap = mcGrSnapshot(g, true);
  const n = snap.n;
  if (n === 0) return { communities: {}, groups: [], modularity: 0, iterations: 0, seed: 0 };
  const seed = Math.floor(mcGrNum(o.seed, 1));
  const maxIter = Math.floor(mcGrPosNum(o.maxIter, 100));
  const rnd = mcGrRng(seed);
  const label = new Int32Array(n);
  for (let i = 0; i < n; i++) label[i] = i;
  const order = new Array(n);
  for (let i = 0; i < n; i++) order[i] = i;

  const acc = new Float64Array(n);
  const touched = new Int32Array(n);
  let iter = 0;
  for (; iter < maxIter; iter++) {
    mcGrShuffle(order, rnd);
    let changed = 0;
    for (let oi = 0; oi < n; oi++) {
      const i = order[oi];
      const nb = snap.out[i], nw = snap.outW[i];
      let nt = 0, best = -1, bestW = 0, ties = 0;
      for (let t = 0; t < nb.length; t++) {
        const j = nb[t];
        if (j === i) continue;
        const l = label[j];
        if (acc[l] === 0) touched[nt++] = l;
        acc[l] += nw[t];
      }
      for (let t = 0; t < nt; t++) {
        const l = touched[t], w = acc[l];
        if (w > bestW + mcGrEps) { bestW = w; best = l; ties = 1; }
        else if (Math.abs(w - bestW) <= mcGrEps) {
          ties++;
          // Reservoir sample among the tied labels: uniform without needing to
          // collect them into an array first.
          if (rnd() < 1 / ties) best = l;
        }
      }
      for (let t = 0; t < nt; t++) acc[touched[t]] = 0;
      if (best >= 0 && best !== label[i]) { label[i] = best; changed++; }
    }
    if (changed === 0) { iter++; break; }
  }
  const q = mcGrModularityFromArrays(mcGrSnapAdj(snap), mcGrSnapW(snap), snap.selfW, label, snap.m2 || 1, 1);
  const res = mcGrPartitionResult(snap, label, snap.m2 > 0 ? q : 0, 0, seed);
  return {
    communities: res.communities, groups: res.groups,
    modularity: res.modularity, iterations: iter, seed: seed
  };
}

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

// Unweighted shortest path. Returns { found, path: [ids], length } —
// { found:false, path: [], length: Infinity } when unreachable or the endpoints
// do not exist. Infinity (not -1, not null) so that arithmetic on the result
// stays meaningful.
function mcGrBfsPath(g, source, target) {
  const snap = mcGrSnapshot(g, !((g instanceof mcGrGraph) && g.directed));
  const miss = { found: false, path: [], length: Infinity };
  const s = snap.index.get(mcGrNodeKey(source));
  const t = snap.index.get(mcGrNodeKey(target));
  if (s === undefined || t === undefined) return miss;
  if (s === t) return { found: true, path: [snap.ids[s]], length: 0 };
  const n = snap.n;
  const prev = new Int32Array(n).fill(-1);
  const seen = new Uint8Array(n);
  const q = new Int32Array(n);
  let head = 0, tail = 0;
  seen[s] = 1; q[tail++] = s;
  while (head < tail) {
    const v = q[head++];
    const nb = snap.out[v];
    for (let i = 0; i < nb.length; i++) {
      const w = nb[i];
      if (seen[w]) continue;
      seen[w] = 1; prev[w] = v;
      if (w === t) return mcGrTrace(snap, prev, s, t);
      q[tail++] = w;
    }
  }
  return miss;
}

function mcGrTrace(snap, prev, s, t) {
  const path = [];
  let cur = t;
  while (cur !== -1) { path.push(snap.ids[cur]); if (cur === s) break; cur = prev[cur]; }
  path.reverse();
  return { found: true, path: path, length: path.length - 1 };
}

// Dijkstra.
//
// IMPORTANT semantic choice: an edge weight in this module is a co-occurrence
// COUNT — an affinity, where bigger means closer. Dijkstra needs a LENGTH,
// where bigger means further. Passing affinities straight in gives you the
// path that avoids strong links, which is almost never what a caller wants.
// So `invertWeights` defaults to TRUE here (cost = 1/w) and you must opt out
// with { invertWeights: false } if your weights really are distances. This is
// the opposite default from a generic graph library, and deliberately so.
//
// Target may be omitted, in which case the full distance map is returned.
function mcGrDijkstra(g, source, target, options) {
  const o = options && typeof options === "object" ? options : {};
  const snap = mcGrSnapshot(g, !((g instanceof mcGrGraph) && g.directed));
  const miss = { found: false, path: [], cost: Infinity, distances: {} };
  const s = snap.index.get(mcGrNodeKey(source));
  if (s === undefined) return miss;
  const t = target === undefined || target === null ? -1
    : (snap.index.get(mcGrNodeKey(target)) === undefined ? -2 : snap.index.get(mcGrNodeKey(target)));
  if (t === -2) return miss;
  const invert = o.invertWeights !== false;
  const n = snap.n;
  const dist = new Float64Array(n).fill(Infinity);
  const prev = new Int32Array(n).fill(-1);
  const done = new Uint8Array(n);
  dist[s] = 0;
  const heap = new mcGrHeap();
  heap.push(0, s);
  while (heap.n > 0) {
    const v = heap.pop();
    if (done[v]) continue;
    done[v] = 1;
    if (v === t) break;
    const nb = snap.out[v], nw = snap.outW[v];
    for (let i = 0; i < nb.length; i++) {
      const w = nb[i];
      if (w === v || done[w]) continue;
      const len = invert ? 1 / nw[i] : nw[i];
      const nd = dist[v] + len;
      if (nd < dist[w]) { dist[w] = nd; prev[w] = v; heap.push(nd, w); }
    }
  }
  const distances = {};
  for (let i = 0; i < n; i++) if (dist[i] < Infinity) distances[snap.ids[i]] = dist[i];
  if (t < 0) return { found: true, path: [], cost: 0, distances: distances };
  if (dist[t] === Infinity) return { found: false, path: [], cost: Infinity, distances: distances };
  const tr = mcGrTrace(snap, prev, s, t);
  return { found: true, path: tr.path, cost: dist[t], distances: distances };
}

// All-pairs unweighted distances via repeated BFS (O(nm), which beats
// Floyd-Warshall's O(n^3) on the sparse graphs we actually have). Refuses above
// mcGrAllPairsMax nodes and says so instead of allocating gigabytes.
// Unreachable pairs are Infinity.
function mcGrAllPairs(g, options) {
  const o = options && typeof options === "object" ? options : {};
  const snap = mcGrSnapshot(g, !((g instanceof mcGrGraph) && g.directed));
  const n = snap.n;
  const limit = Math.floor(mcGrPosNum(o.maxNodes, mcGrAllPairsMax));
  if (n > limit) {
    return { ok: false, reason: "too-large", n: n, limit: limit, ids: [], dist: null, diameter: Infinity };
  }
  const dist = new Float64Array(n * n).fill(Infinity);
  const q = new Int32Array(n);
  let diameter = 0, anyUnreachable = false;
  for (let s = 0; s < n; s++) {
    const base = s * n;
    dist[base + s] = 0;
    let head = 0, tail = 0;
    q[tail++] = s;
    while (head < tail) {
      const v = q[head++];
      const d = dist[base + v] + 1;
      const nb = snap.out[v];
      for (let i = 0; i < nb.length; i++) {
        const w = nb[i];
        if (dist[base + w] === Infinity) { dist[base + w] = d; q[tail++] = w; }
      }
    }
    for (let tI = 0; tI < n; tI++) {
      const d = dist[base + tI];
      if (d === Infinity) anyUnreachable = true;
      else if (d > diameter) diameter = d;
    }
  }
  return {
    ok: true, n: n, ids: snap.ids.slice(), dist: dist,
    // Diameter of a disconnected graph is infinite by definition; we report the
    // largest FINITE distance separately so the caller has something usable.
    diameter: anyUnreachable ? Infinity : diameter,
    eccentricityMax: diameter,
    connected: !anyUnreachable
  };
}

// Connected components (weakly connected for a directed graph — see
// mcGrTarjanScc for the strong version). Components are returned largest first;
// equal sizes keep node insertion order.
function mcGrComponents(g) {
  const snap = mcGrSnapshot(g, true);
  const n = snap.n;
  const comp = new Int32Array(n).fill(-1);
  const groups = [];
  const q = new Int32Array(n);
  for (let s = 0; s < n; s++) {
    if (comp[s] >= 0) continue;
    const c = groups.length;
    const members = [];
    let head = 0, tail = 0;
    comp[s] = c; q[tail++] = s;
    while (head < tail) {
      const v = q[head++];
      members.push(snap.ids[v]);
      const nb = snap.out[v];
      for (let i = 0; i < nb.length; i++) {
        const w = nb[i];
        if (comp[w] < 0) { comp[w] = c; q[tail++] = w; }
      }
    }
    groups.push(members);
  }
  const order = groups.map(function (m, i) { return i; });
  order.sort(function (a, b) { return groups[b].length - groups[a].length || a - b; });
  const sorted = order.map(function (i) { return groups[i]; });
  const byNode = {};
  for (let c = 0; c < sorted.length; c++) {
    for (let t = 0; t < sorted[c].length; t++) byNode[sorted[c][t]] = c;
  }
  return {
    count: sorted.length, groups: sorted, byNode: byNode,
    largest: sorted.length ? sorted[0].length : 0
  };
}

// Tarjan strongly-connected components, ITERATIVE.
// Recursion is not an option: a 3000-node path graph would blow the JS stack,
// and a co-occurrence graph built from a chronological feed genuinely does
// produce long chains. The explicit frame stack costs a little clarity and buys
// a hard guarantee.
// On an undirected graph every component is strongly connected, so the result
// equals mcGrComponents — still correct, just redundant.
function mcGrTarjanScc(g) {
  const snap = mcGrSnapshot(g, false);
  const n = snap.n;
  const num = new Int32Array(n).fill(-1);
  const low = new Int32Array(n);
  const onStack = new Uint8Array(n);
  const stack = [];
  const frameV = new Int32Array(n);
  const frameE = new Int32Array(n);
  const groups = [];
  let counter = 0;

  for (let root = 0; root < n; root++) {
    if (num[root] >= 0) continue;
    let fp = 0;
    frameV[0] = root; frameE[0] = 0; fp = 1;
    num[root] = low[root] = counter++;
    stack.push(root); onStack[root] = 1;
    while (fp > 0) {
      const v = frameV[fp - 1];
      const nb = snap.out[v];
      if (frameE[fp - 1] < nb.length) {
        const w = nb[frameE[fp - 1]++];
        if (w === v) continue; // a self-loop tells us nothing about strong connectivity
        if (num[w] < 0) {
          num[w] = low[w] = counter++;
          stack.push(w); onStack[w] = 1;
          frameV[fp] = w; frameE[fp] = 0; fp++;
        } else if (onStack[w]) {
          if (num[w] < low[v]) low[v] = num[w];
        }
      } else {
        fp--;
        if (fp > 0) {
          const p = frameV[fp - 1];
          if (low[v] < low[p]) low[p] = low[v];
        }
        if (low[v] === num[v]) {
          const members = [];
          for (;;) {
            const w = stack.pop();
            onStack[w] = 0;
            members.push(snap.ids[w]);
            if (w === v) break;
          }
          members.sort();
          groups.push(members);
        }
      }
    }
  }
  groups.sort(function (a, b) { return b.length - a.length || (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0); });
  const byNode = {};
  for (let c = 0; c < groups.length; c++) {
    for (let t = 0; t < groups[c].length; t++) byNode[groups[c][t]] = c;
  }
  return { count: groups.length, groups: groups, byNode: byNode, largest: groups.length ? groups[0].length : 0 };
}

// ---------------------------------------------------------------------------
// Structure
// ---------------------------------------------------------------------------

// Triangle counts. Self-loops and edge weights are ignored (a triangle is a
// structural fact about which nodes are adjacent).
//
// Algorithm: order nodes by (degree, index) and only look "forward" along that
// order. Each triangle is discovered exactly once, and the total work is
// O(m^1.5) instead of the O(sum d^2) of the naive neighbour-pair scan — the
// difference is everything on a co-occurrence graph, where one hub entity can
// easily have degree 800 (800^2/2 = 320k pair checks for that node alone).
function mcGrTriangles(g) {
  const snap = mcGrSnapshot(g, true);
  const n = snap.n;
  const per = new Float64Array(n);
  if (n === 0) return { total: 0, perNode: {}, triples: 0 };
  const rank = new Int32Array(n);
  const order = new Array(n);
  for (let i = 0; i < n; i++) order[i] = i;
  order.sort(function (a, b) {
    const da = snap.out[a].length, db = snap.out[b].length;
    return da - db || a - b;
  });
  for (let t = 0; t < n; t++) rank[order[t]] = t;

  // Forward adjacency: neighbours with strictly higher rank, sorted by rank.
  const fwd = new Array(n);
  for (let i = 0; i < n; i++) {
    const nb = snap.out[i];
    const f = [];
    for (let t = 0; t < nb.length; t++) {
      const j = nb[t];
      if (j !== i && rank[j] > rank[i]) f.push(j);
    }
    f.sort(function (a, b) { return rank[a] - rank[b]; });
    fwd[i] = f;
  }
  const mark = new Int32Array(n).fill(-1);
  let total = 0;
  for (let u = 0; u < n; u++) {
    const fu = fwd[u];
    for (let t = 0; t < fu.length; t++) mark[fu[t]] = u;
    for (let t = 0; t < fu.length; t++) {
      const v = fu[t];
      const fv = fwd[v];
      for (let s = 0; s < fv.length; s++) {
        const w = fv[s];
        if (mark[w] === u) { total++; per[u]++; per[v]++; per[w]++; }
      }
    }
  }
  let triples = 0;
  for (let i = 0; i < n; i++) {
    const d = snap.out[i].length - (snap.selfW[i] > 0 ? 1 : 0);
    triples += d * (d - 1) / 2;
  }
  return { total: total, perNode: mcGrByIdObj(snap, per), triples: triples };
}

// Clustering coefficients.
//   local[u]  = 2*T(u) / (d(u)*(d(u)-1)), 0 when d(u) < 2 (the usual
//               convention: "undefined" would poison every average)
//   global    = 3*triangles / triples  (transitivity)
//   average   = mean of local
// Degrees here EXCLUDE self-loops: a node linked to itself is not more
// clustered, and including it would push local values above 1.
function mcGrClustering(g) {
  const snap = mcGrSnapshot(g, true);
  const n = snap.n;
  const tri = mcGrTriangles(g);
  const local = new Float64Array(n);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const d = snap.out[i].length - (snap.selfW[i] > 0 ? 1 : 0);
    const t = tri.perNode[snap.ids[i]] || 0;
    local[i] = d < 2 ? 0 : (2 * t) / (d * (d - 1));
    sum += local[i];
  }
  return {
    local: mcGrByIdObj(snap, local),
    average: n > 0 ? sum / n : 0,
    global: tri.triples > 0 ? (3 * tri.total) / tri.triples : 0,
    triangles: tri.total
  };
}

// k-core decomposition (Batagelj-Zaversnik bucket peeling, O(n+m)).
// core[u] = the largest k such that u survives in the k-core. The maximum over
// all nodes is the graph's degeneracy. Self-loops are ignored — they cannot
// help a node stay in a core.
function mcGrKCore(g) {
  const snap = mcGrSnapshot(g, true);
  const n = snap.n;
  if (n === 0) return { core: {}, degeneracy: 0, shells: {} };
  const deg = new Int32Array(n);
  let maxDeg = 0;
  for (let i = 0; i < n; i++) {
    const nb = snap.out[i];
    let d = 0;
    for (let t = 0; t < nb.length; t++) if (nb[t] !== i) d++;
    deg[i] = d;
    if (d > maxDeg) maxDeg = d;
  }
  // Bucket sort by degree.
  const binStart = new Int32Array(maxDeg + 2);
  for (let i = 0; i < n; i++) binStart[deg[i]]++;
  let start = 0;
  for (let d = 0; d <= maxDeg; d++) { const c = binStart[d]; binStart[d] = start; start += c; }
  const pos = new Int32Array(n);
  const vert = new Int32Array(n);
  const cursor = binStart.slice();
  for (let i = 0; i < n; i++) { pos[i] = cursor[deg[i]]; vert[pos[i]] = i; cursor[deg[i]]++; }

  const core = new Int32Array(n);
  for (let idx = 0; idx < n; idx++) {
    const v = vert[idx];
    core[v] = deg[v];
    const nb = snap.out[v];
    for (let t = 0; t < nb.length; t++) {
      const u = nb[t];
      if (u === v) continue;
      if (deg[u] > deg[v]) {
        // Move u one bucket down by swapping with the first element of its bin.
        const du = deg[u], pu = pos[u], pw = binStart[du], w = vert[pw];
        if (u !== w) {
          pos[u] = pw; vert[pw] = u;
          pos[w] = pu; vert[pu] = w;
        }
        binStart[du]++;
        deg[u]--;
      }
    }
  }
  let degeneracy = 0;
  for (let i = 0; i < n; i++) if (core[i] > degeneracy) degeneracy = core[i];
  const shells = {};
  for (let i = 0; i < n; i++) {
    const k = core[i];
    if (!shells[k]) shells[k] = [];
    shells[k].push(snap.ids[i]);
  }
  return { core: mcGrByIdObj(snap, core), degeneracy: degeneracy, shells: shells };
}

// Bridges and articulation points in one iterative DFS (they share the whole
// disc/low computation; running two passes would be pure waste).
// Undirected view. Self-loops are skipped; the graph has no parallel edges by
// construction (addEdge merges weights), which is what lets us identify the
// tree edge by parent NODE rather than parent EDGE.
function mcGrBridgesAndCuts(g) {
  const snap = mcGrSnapshot(g, true);
  const n = snap.n;
  const disc = new Int32Array(n).fill(-1);
  const low = new Int32Array(n);
  const parent = new Int32Array(n).fill(-1);
  const frameV = new Int32Array(n + 1);
  const frameE = new Int32Array(n + 1);
  const children = new Int32Array(n);
  const isCut = new Uint8Array(n);
  const bridges = [];
  let timer = 0;

  for (let root = 0; root < n; root++) {
    if (disc[root] >= 0) continue;
    let fp = 0;
    frameV[0] = root; frameE[0] = 0; fp = 1;
    disc[root] = low[root] = timer++;
    while (fp > 0) {
      const v = frameV[fp - 1];
      const nb = snap.out[v];
      if (frameE[fp - 1] < nb.length) {
        const w = nb[frameE[fp - 1]++];
        if (w === v) continue;
        if (disc[w] < 0) {
          parent[w] = v;
          children[v]++;
          disc[w] = low[w] = timer++;
          frameV[fp] = w; frameE[fp] = 0; fp++;
        } else if (w !== parent[v]) {
          if (disc[w] < low[v]) low[v] = disc[w];
        }
      } else {
        fp--;
        if (fp > 0) {
          const p = frameV[fp - 1];
          if (low[v] < low[p]) low[p] = low[v];
          if (low[v] > disc[p]) bridges.push([snap.ids[p], snap.ids[v]]);
          // A non-root is a cut vertex iff some child cannot reach above it.
          if (parent[p] !== -1 && low[v] >= disc[p]) isCut[p] = 1;
        }
      }
    }
    // The root is a cut vertex iff it has more than one DFS child.
    if (children[root] > 1) isCut[root] = 1;
  }
  const cuts = [];
  for (let i = 0; i < n; i++) if (isCut[i]) cuts.push(snap.ids[i]);
  bridges.sort(function (a, b) {
    return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
  });
  return { bridges: bridges, articulationPoints: cuts };
}

function mcGrBridges(g) { return mcGrBridgesAndCuts(g).bridges; }
function mcGrArticulationPoints(g) { return mcGrBridgesAndCuts(g).articulationPoints; }

// ---------------------------------------------------------------------------
// Layout
// ---------------------------------------------------------------------------

// Fruchterman-Reingold, seeded and bounded.
//
// Three deviations from the 1991 paper, each deliberate:
//  1. GRID-BUCKETED REPULSION. Vanilla FR is O(n^2) per iteration; at n=3000
//     that is 4.5M pair computations per iteration and the UI thread is gone.
//     The paper's own section 4 suggests a grid variant: bucket nodes into
//     cells of side 2k and only compute repulsion within the 3x3 cell
//     neighbourhood, since the repulsive force beyond 2k is negligible. That is
//     what we do. Rejected Barnes-Hut: better asymptotics but a quadtree
//     rebuild per iteration and far more code for no gain at this scale.
//  2. MILD GRAVITY toward the centre. Vanilla FR keeps nodes in frame purely by
//     clamping to the box, so disconnected components (which co-occurrence
//     graphs always have — a dozen orphan pairs) drift apart and pile up on the
//     walls. A weak centre-seeking term keeps them in view.
//  3. PHYLLOTAXIS INITIAL PLACEMENT plus seeded jitter, rather than uniform
//     random. Uniform random in the box wastes the first ~50 iterations
//     untangling an initial blob; a spread-out start converges visibly better
//     within the iteration budget. The jitter is what makes `seed` matter.
//
// Bounded work: iterations are capped (default 300, dropping to 150 above 2000
// nodes) and the loop also exits early once the largest single-node
// displacement falls below 0.1px. Both are reported in the result.
//
// options: { width, height, iterations, seed, gravity, k, padding, useWeights }
function mcGrLayoutForce(g, options) {
  const o = options && typeof options === "object" ? options : {};
  const snap = mcGrSnapshot(g, true);
  const n = snap.n;
  const W = mcGrPosNum(o.width, 800);
  const H = mcGrPosNum(o.height, 600);
  const pad = mcGrClamp(mcGrNum(o.padding, 20), 0, Math.min(W, H) / 2 - 1);
  const base = { positions: {}, iterations: 0, converged: true, width: W, height: H, seed: 0 };
  if (n === 0) return base;
  const seed = Math.floor(mcGrNum(o.seed, 1));
  base.seed = seed;
  if (n === 1) {
    base.positions[snap.ids[0]] = { x: W / 2, y: H / 2 };
    return base;
  }
  const defIters = n > 2000 ? 150 : 300;
  const iterations = Math.floor(mcGrClamp(mcGrPosNum(o.iterations, defIters), 1, 1000));
  const rnd = mcGrRng(seed);
  const innerW = W - 2 * pad, innerH = H - 2 * pad;
  const area = Math.max(1, innerW * innerH);
  const k = mcGrPosNum(o.k, 0.9) * Math.sqrt(area / n);
  const gravity = mcGrClamp(mcGrNum(o.gravity, 0.03), 0, 1);
  const useWeights = o.useWeights !== false;

  const x = new Float64Array(n), y = new Float64Array(n);
  const dx = new Float64Array(n), dy = new Float64Array(n);
  const cx = W / 2, cy = H / 2;
  const R = Math.min(innerW, innerH) / 2;
  const golden = Math.PI * (3 - Math.sqrt(5)); // 2.39996 rad
  for (let i = 0; i < n; i++) {
    const rr = R * Math.sqrt((i + 0.5) / n);
    const th = i * golden;
    x[i] = cx + rr * Math.cos(th) + (rnd() - 0.5) * R * 0.06;
    y[i] = cy + rr * Math.sin(th) + (rnd() - 0.5) * R * 0.06;
  }

  // Weight -> attraction multiplier in [1, 2] via log scaling. Linear scaling
  // lets one runaway weight (an entity pair co-mentioned 900 times) collapse
  // the rest of the graph into a dot.
  let maxW = 1;
  for (let i = 0; i < n; i++) {
    const w = snap.outW[i];
    for (let t = 0; t < w.length; t++) if (w[t] > maxW) maxW = w[t];
  }
  const logMax = Math.log(1 + maxW);

  const cell = 2 * k;
  const cols = Math.max(1, Math.min(512, Math.ceil(W / cell)));
  const rows = Math.max(1, Math.min(512, Math.ceil(H / cell)));
  const cellW = W / cols, cellH = H / rows;
  const buckets = new Array(cols * rows);
  for (let i = 0; i < buckets.length; i++) buckets[i] = [];

  const t0 = Math.min(innerW, innerH) * 0.1;
  let iter = 0, converged = false;
  for (; iter < iterations; iter++) {
    const temp = t0 * (1 - iter / iterations);
    dx.fill(0); dy.fill(0);
    for (let i = 0; i < buckets.length; i++) buckets[i].length = 0;
    for (let i = 0; i < n; i++) {
      const c = mcGrClamp(Math.floor(x[i] / cellW), 0, cols - 1);
      const r = mcGrClamp(Math.floor(y[i] / cellH), 0, rows - 1);
      buckets[r * cols + c].push(i);
    }
    // Repulsion, 3x3 cell neighbourhood, each pair handled once (v > u).
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const here = buckets[r * cols + c];
        if (here.length === 0) continue;
        for (let rr = r; rr <= r + 1 && rr < rows; rr++) {
          const c0 = rr === r ? c : Math.max(0, c - 1);
          const c1 = Math.min(cols - 1, c + 1);
          for (let cc = c0; cc <= c1; cc++) {
            const other = buckets[rr * cols + cc];
            for (let a = 0; a < here.length; a++) {
              const u = here[a];
              for (let b = 0; b < other.length; b++) {
                const v = other[b];
                if (v <= u) continue;
                let ddx = x[u] - x[v], ddy = y[u] - y[v];
                let d2 = ddx * ddx + ddy * ddy;
                if (d2 > cell * cell) continue;
                if (d2 < 1e-9) {
                  // Coincident nodes: deterministic nudge from the index pair,
                  // NOT the rng — the rng stream must stay tied to the seed
                  // alone, or the layout stops being reproducible.
                  ddx = ((u * 7 + v * 13) % 17) / 17 - 0.5;
                  ddy = ((u * 11 + v * 5) % 19) / 19 - 0.5;
                  d2 = ddx * ddx + ddy * ddy + 1e-9;
                }
                const d = Math.sqrt(d2);
                const f = (k * k) / d;
                const fx = (ddx / d) * f, fy = (ddy / d) * f;
                dx[u] += fx; dy[u] += fy;
                dx[v] -= fx; dy[v] -= fy;
              }
            }
          }
        }
      }
    }
    // Attraction along edges.
    for (let u = 0; u < n; u++) {
      const nb = snap.out[u], nw = snap.outW[u];
      for (let t = 0; t < nb.length; t++) {
        const v = nb[t];
        if (v <= u) continue;
        let ddx = x[u] - x[v], ddy = y[u] - y[v];
        let d = Math.sqrt(ddx * ddx + ddy * ddy);
        if (d < 1e-9) { ddx = 1e-4; ddy = 0; d = 1e-4; }
        const wf = useWeights && logMax > 0 ? 1 + Math.log(1 + nw[t]) / logMax : 1;
        const f = (d * d / k) * wf;
        const fx = (ddx / d) * f, fy = (ddy / d) * f;
        dx[u] -= fx; dy[u] -= fy;
        dx[v] += fx; dy[v] += fy;
      }
    }
    // Gravity + displacement.
    let maxMove = 0;
    for (let i = 0; i < n; i++) {
      dx[i] += (cx - x[i]) * gravity * k * 0.5;
      dy[i] += (cy - y[i]) * gravity * k * 0.5;
      const len = Math.sqrt(dx[i] * dx[i] + dy[i] * dy[i]);
      if (len > 1e-12) {
        const s = Math.min(len, temp) / len;
        x[i] += dx[i] * s;
        y[i] += dy[i] * s;
        const mv = len * s;
        if (mv > maxMove) maxMove = mv;
      }
      x[i] = mcGrClamp(x[i], pad, W - pad);
      y[i] = mcGrClamp(y[i], pad, H - pad);
    }
    if (maxMove < 0.1) { converged = true; iter++; break; }
  }

  const positions = {};
  for (let i = 0; i < n; i++) {
    positions[snap.ids[i]] = {
      x: Math.round(x[i] * 100) / 100,
      y: Math.round(y[i] * 100) / 100
    };
  }
  return { positions: positions, iterations: iter, converged: converged, width: W, height: H, seed: seed, k: k };
}

// Circular layout — cheap, always sensible, and the right fallback when the
// force layout has no time budget. Optionally ordered by a score map (put the
// hubs adjacent) or grouped by community so each community occupies an arc.
function mcGrLayoutCircle(g, options) {
  const o = options && typeof options === "object" ? options : {};
  const snap = mcGrSnapshot(g, true);
  const n = snap.n;
  const W = mcGrPosNum(o.width, 800), H = mcGrPosNum(o.height, 600);
  const pad = mcGrClamp(mcGrNum(o.padding, 40), 0, Math.min(W, H) / 2 - 1);
  const positions = {};
  if (n === 0) return { positions: positions, width: W, height: H };
  if (n === 1) { positions[snap.ids[0]] = { x: W / 2, y: H / 2 }; return { positions: positions, width: W, height: H }; }
  const order = new Array(n);
  for (let i = 0; i < n; i++) order[i] = i;
  const groups = o.groupBy;
  if (groups && typeof groups === "object") {
    const gv = function (i) {
      const v = groups instanceof Map ? groups.get(snap.ids[i]) : groups[snap.ids[i]];
      return mcGrIsNum(v) ? v : 1e9;
    };
    order.sort(function (a, b) { return gv(a) - gv(b) || a - b; });
  }
  const R = Math.min(W, H) / 2 - pad;
  const cx = W / 2, cy = H / 2;
  for (let t = 0; t < n; t++) {
    const th = (2 * Math.PI * t) / n - Math.PI / 2;
    positions[snap.ids[order[t]]] = {
      x: Math.round((cx + R * Math.cos(th)) * 100) / 100,
      y: Math.round((cy + R * Math.sin(th)) * 100) / 100
    };
  }
  return { positions: positions, width: W, height: H };
}

// Grid layout. The dumbest possible fallback, and the only one whose cost is
// genuinely O(n) — useful as a "still loading" placeholder.
function mcGrLayoutGrid(g, options) {
  const o = options && typeof options === "object" ? options : {};
  const snap = mcGrSnapshot(g, true);
  const n = snap.n;
  const W = mcGrPosNum(o.width, 800), H = mcGrPosNum(o.height, 600);
  const pad = mcGrClamp(mcGrNum(o.padding, 40), 0, Math.min(W, H) / 2 - 1);
  const positions = {};
  if (n === 0) return { positions: positions, width: W, height: H, cols: 0 };
  const cols = Math.max(1, Math.ceil(Math.sqrt(n * (W / Math.max(1, H)))));
  const rows = Math.ceil(n / cols);
  const stepX = cols > 1 ? (W - 2 * pad) / (cols - 1) : 0;
  const stepY = rows > 1 ? (H - 2 * pad) / (rows - 1) : 0;
  for (let i = 0; i < n; i++) {
    const c = i % cols, r = Math.floor(i / cols);
    positions[snap.ids[i]] = {
      x: Math.round((cols > 1 ? pad + c * stepX : W / 2) * 100) / 100,
      y: Math.round((rows > 1 ? pad + r * stepY : H / 2) * 100) / 100
    };
  }
  return { positions: positions, width: W, height: H, cols: cols, rows: rows };
}

// ---------------------------------------------------------------------------
// Export for a renderer
// ---------------------------------------------------------------------------

// A plain data structure, NOT markup. The renderer owns SVG/HTML generation and
// therefore owns escaping — emitting markup here would mean two escape layers
// and a guaranteed double-encoding bug. What we DO guarantee:
//   * every numeric field is finite (never NaN, never undefined, never null)
//   * every label is a non-empty string with control bytes stripped
//   * edge endpoints always reference a node present in `nodes`
//
// options:
//   layout       positions map from one of the mcGrLayout* functions, or the
//                layout result object itself. Missing -> circular layout.
//   communities  id -> group index; becomes node.group (default 0)
//   scores       id -> number driving radius (default: degree)
//   minRadius/maxRadius, minWidth/maxWidth
//   labelLength  max characters in a label (default 32)
function mcGrRenderModel(g, options) {
  const o = options && typeof options === "object" ? options : {};
  const snap = mcGrSnapshot(g, !((g instanceof mcGrGraph) && g.directed));
  const n = snap.n;
  const W = mcGrPosNum(o.width, 800), H = mcGrPosNum(o.height, 600);
  const out = {
    nodes: [], edges: [], width: W, height: H,
    directed: (g instanceof mcGrGraph) && g.directed,
    bounds: { minX: 0, minY: 0, maxX: W, maxY: H }
  };
  if (n === 0) return out;

  let posMap = null;
  if (o.layout && typeof o.layout === "object") {
    posMap = o.layout.positions && typeof o.layout.positions === "object" ? o.layout.positions : o.layout;
  }
  if (!posMap) posMap = mcGrLayoutCircle(g, { width: W, height: H }).positions;

  const rMin = mcGrPosNum(o.minRadius, 3);
  const rMax = Math.max(rMin, mcGrPosNum(o.maxRadius, 18));
  const wMin = mcGrPosNum(o.minWidth, 0.5);
  const wMax = Math.max(wMin, mcGrPosNum(o.maxWidth, 6));
  const labLen = Math.floor(mcGrClamp(mcGrPosNum(o.labelLength, 32), 1, 200));

  const score = new Float64Array(n);
  const src = o.scores && typeof o.scores === "object" ? o.scores : null;
  let sMax = 0;
  for (let i = 0; i < n; i++) {
    let v;
    if (src) {
      const raw = src instanceof Map ? src.get(snap.ids[i]) : src[snap.ids[i]];
      v = mcGrIsNum(raw) && raw >= 0 ? raw : 0;
    } else {
      v = snap.out[i].length;
    }
    score[i] = v;
    if (v > sMax) sMax = v;
  }

  const comm = o.communities;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  const placed = new Array(n);
  for (let i = 0; i < n; i++) {
    const id = snap.ids[i];
    const p = posMap[id];
    const px = p && mcGrIsNum(p.x) ? p.x : W / 2;
    const py = p && mcGrIsNum(p.y) ? p.y : H / 2;
    placed[i] = { x: px, y: py };
    if (px < minX) minX = px;
    if (px > maxX) maxX = px;
    if (py < minY) minY = py;
    if (py > maxY) maxY = py;
    // sqrt so radius maps to AREA proportional to score; linear radius makes a
    // degree-40 hub look 40x more important than a degree-1 leaf, which it is
    // not.
    const norm = sMax > 0 ? Math.sqrt(score[i] / sMax) : 0;
    let group = 0;
    if (comm && typeof comm === "object") {
      const raw = comm instanceof Map ? comm.get(id) : comm[id];
      group = mcGrIsNum(raw) ? Math.floor(raw) : 0;
    }
    const rec = g.node(id);
    const label = mcGrSafeLabel(rec && rec.label ? rec.label : id, labLen) || id;
    out.nodes.push({
      id: id,
      label: label,
      x: Math.round(px * 100) / 100,
      y: Math.round(py * 100) / 100,
      r: Math.round((rMin + (rMax - rMin) * norm) * 100) / 100,
      group: group,
      degree: snap.out[i].length,
      weight: Math.round(snap.degW[i] * 1000) / 1000,
      score: Math.round(score[i] * 100000) / 100000
    });
  }

  let eMax = 1;
  const edges = g.edges();
  for (let t = 0; t < edges.length; t++) if (edges[t].weight > eMax) eMax = edges[t].weight;
  const logMax = Math.log(1 + eMax);
  for (let t = 0; t < edges.length; t++) {
    const e = edges[t];
    const i = snap.index.get(e.source), j = snap.index.get(e.target);
    if (i === undefined || j === undefined) continue;
    const norm = logMax > 0 ? Math.log(1 + e.weight) / logMax : 0;
    out.edges.push({
      source: e.source,
      target: e.target,
      x1: Math.round(placed[i].x * 100) / 100,
      y1: Math.round(placed[i].y * 100) / 100,
      x2: Math.round(placed[j].x * 100) / 100,
      y2: Math.round(placed[j].y * 100) / 100,
      weight: e.weight,
      width: Math.round((wMin + (wMax - wMin) * norm) * 100) / 100,
      selfLoop: e.source === e.target
    });
  }
  out.bounds = {
    minX: isFinite(minX) ? minX : 0, minY: isFinite(minY) ? minY : 0,
    maxX: isFinite(maxX) ? maxX : W, maxY: isFinite(maxY) ? maxY : H
  };
  return out;
}

/* ==================================================================== *
 * Self-test. Every expected value below is derived by hand from a graph
 * small enough to check on paper, or from a structural invariant that
 * must hold for any correct implementation. Nothing here asserts a
 * number that was read off this implementation's own output.
 * ==================================================================== */

/* ==================================================================== *
 * Self-test. Every expected value is derived by hand from a graph small
 * enough to check on paper, or is a structural invariant that must hold
 * for any correct implementation. Nothing asserts a number that was
 * merely read back off this implementation's own output.
 * ==================================================================== */
if (typeof module !== "undefined" && require.main === module) {
  let mcGrPass = 0, mcGrFail = 0;
  const mcGrFailures = [];
  function ok(name, cond, extra) {
    if (cond) { mcGrPass++; return; }
    mcGrFail++;
    mcGrFailures.push(name + (extra !== undefined ? "  (got: " + extra + ")" : ""));
  }
  function eq(name, got, want) { ok(name, got === want, JSON.stringify(got) + " want " + JSON.stringify(want)); }
  function near(name, got, want, tol) {
    ok(name, typeof got === "number" && isFinite(got) && Math.abs(got - want) <= tol, got + " want " + want);
  }
  const sum = function (o) { let t = 0; for (const k in o) t += o[k]; return t; };

  /* Fixtures whose answers are checkable on paper. */
  const TRI = [["a", "b"], ["b", "c"], ["c", "a"]];
  const STAR = [["h", "l1"], ["h", "l2"], ["h", "l3"], ["h", "l4"]];
  const PATH = [["a", "b"], ["b", "c"], ["c", "d"], ["d", "e"]];
  // two triangles joined by the single edge c-d
  const TWOCLIQ = [["a", "b"], ["b", "c"], ["c", "a"], ["d", "e"], ["e", "f"], ["f", "d"], ["c", "d"]];
  const doc = function (names) { return { entities: names }; };

  /* ---------------- construction ---------------------------------- */
  (function () {
    const g = mcGrFromEdgeList(TRI, {});
    eq("triangle order", g.order(), 3);
    eq("triangle size", g.size(), 3);
    ok("every triangle node has degree 2", g.nodes().every(function (n) { return g.degree(n) === 2; }));
    const d = mcGrDegreeCentrality(g);
    ok("degree centrality is symmetric on a triangle", Math.abs(d.a - d.b) < 1e-12 && Math.abs(d.b - d.c) < 1e-12);

    const s = mcGrFromEdgeList(STAR, {});
    eq("star order", s.order(), 5);
    eq("star hub degree", s.degree("h"), 4);
    eq("star leaf degree", s.degree("l1"), 1);
    ok("hasEdge finds a real edge", s.hasEdge("h", "l1"));
    ok("hasEdge is undirected here", s.hasEdge("l1", "h"));
    ok("hasEdge rejects a missing edge", !s.hasEdge("l1", "l2"));
  })();

  /* ---------------- degenerate input ------------------------------ */
  (function () {
    const empty = mcGrFromEdgeList([], {});
    eq("empty graph order", empty.order(), 0);
    ok("pagerank of empty graph does not throw", !!mcGrPageRank(empty, {}));
    ok("louvain of empty graph does not throw", !!mcGrLouvain(empty, {}));
    ok("betweenness of empty graph does not throw", !!mcGrBetweenness(empty, {}));
    ok("force layout of empty graph does not throw", !!mcGrLayoutForce(empty, {}));
    ok("render model of empty graph does not throw", !!mcGrRenderModel(empty, {}));

    eq("null edge list is tolerated", mcGrFromEdgeList(null, {}).order(), 0);
    ok("garbage edges are skipped", mcGrFromEdgeList([null, 7, ["a"], ["a", "b"]], {}).size() <= 1);

    const dup = mcGrFromEdgeList([["a", "b"], ["a", "b"], ["b", "a"]], {});
    eq("duplicate undirected edges collapse to one", dup.size(), 1);
    ok("the collapsed edge accumulated weight", dup.edges()[0].weight >= 3 - 1e-9, dup.edges()[0].weight);

    const loop = mcGrFromEdgeList([["solo", "solo"]], {});
    eq("a self-loop makes exactly one node", loop.order(), 1);
    ok("clustering stays finite with a self-loop", isFinite(mcGrClustering(loop).global));
  })();

  /* ---------------- PageRank -------------------------------------- */
  (function () {
    const tri = mcGrPageRank(mcGrFromEdgeList(TRI, {}), {}).scores;
    near("pagerank sums to 1 (triangle)", sum(tri), 1, 1e-6);
    near("pagerank is uniform on a symmetric triangle", tri.a, 1 / 3, 1e-4);

    const st = mcGrPageRank(mcGrFromEdgeList(STAR, {}), {});
    const s = st.scores;
    near("pagerank sums to 1 (star)", sum(s), 1, 1e-6);
    ok("the hub outranks every leaf", [s.l1, s.l2, s.l3, s.l4].every(function (v) { return s.h > v; }),
       s.h + " vs " + s.l1);
    ok("leaves are equal by symmetry",
       Math.max(s.l1, s.l2, s.l3, s.l4) - Math.min(s.l1, s.l2, s.l3, s.l4) < 1e-6);
    ok("pagerank reports convergence honestly", typeof st.converged === "boolean");
    ok("pagerank reports its iteration count", st.iterations >= 1);
  })();

  /* ---------------- betweenness / closeness ----------------------- */
  (function () {
    const g = mcGrFromEdgeList(PATH, {});
    const b = mcGrBetweenness(g, {});
    ok("path endpoints lie on no shortest path", b.a === 0 && b.e === 0, b.a + "," + b.e);
    ok("the middle of a path is the most between", b.c > b.b && b.c > b.d, b.b + "," + b.c + "," + b.d);
    near("betweenness is symmetric about the centre", b.b - b.d, 0, 1e-9);

    const c = mcGrCloseness(g, {});
    ok("closeness peaks at the centre of a path", c.c > c.b && c.b > c.a, c.a + "," + c.b + "," + c.c);
    const dc = mcGrCloseness(mcGrFromEdgeList([["a", "b"], ["x", "y"]], {}), {});
    ok("closeness stays finite across components",
       Object.keys(dc).every(function (k) { return isFinite(dc[k]); }));

    const ev = mcGrEigenvector(mcGrFromEdgeList(STAR, {}), {});
    const evs = ev.scores || ev;
    ok("eigenvector centrality favours the hub", evs.h >= evs.l1, evs.h + " vs " + evs.l1);
  })();

  /* ---------------- communities ----------------------------------- */
  (function () {
    const g = mcGrFromEdgeList(TWOCLIQ, {});
    const lv = mcGrLouvain(g, { seed: 7 });
    eq("louvain finds exactly two groups", lv.groups.length, 2);
    ok("modularity of a two-clique split is clearly positive", lv.modularity > 0.2, lv.modularity);
    const sizes = lv.groups.map(function (c) { return c.length; }).sort();
    ok("the split is 3/3", sizes[0] === 3 && sizes[1] === 3, JSON.stringify(sizes));
    const m = lv.communities;
    ok("triangle abc stays together", m.a === m.b && m.b === m.c);
    ok("triangle def stays together", m.d === m.e && m.e === m.f);
    ok("the two triangles are separated", m.a !== m.d);
    eq("louvain is deterministic under a seed",
       JSON.stringify(mcGrLouvain(g, { seed: 7 }).groups), JSON.stringify(lv.groups));

    const lp = mcGrLabelPropagation(g, { seed: 3 });
    ok("label propagation partitions every node",
       lp.groups.reduce(function (a, c) { return a + c.length; }, 0) === g.order(),
       JSON.stringify(lp.groups));

    // A single clique has no meaningful split: modularity must not be positive.
    ok("one clique is not split into fake communities",
       mcGrLouvain(mcGrFromEdgeList(TRI, {}), { seed: 1 }).modularity <= 1e-9);
  })();

  /* ---------------- paths ----------------------------------------- */
  (function () {
    const g = mcGrFromEdgeList(PATH, {});
    const p = mcGrBfsPath(g, "a", "e");
    ok("bfs finds the path", p.found);
    eq("bfs path is the whole chain", p.path.join(">"), "a>b>c>d>e");
    eq("bfs length counts hops, not nodes", p.length, 4);
    ok("no path between components is reported as not found",
       !mcGrBfsPath(mcGrFromEdgeList([["a", "b"], ["x", "y"]], {}), "a", "y").found);
    ok("a path to an unknown node is not found", !mcGrBfsPath(g, "a", "nope").found);

    /* Edge weight here is AFFINITY, not length — two names that co-occur ten
       times are closer, not further apart. So dijkstra inverts by default
       (1/w) and the direct a-c edge of weight 10 is the SHORT route at 0.1.
       Both semantics are supported and both are tested, because reading one
       as the other silently returns the wrong path. */
    const w = mcGrFromEdgeList([["a", "b", 1], ["b", "c", 1], ["a", "c", 10]], {});
    const d = mcGrDijkstra(w, "a", "c", {});
    ok("dijkstra finds a route", d.found);
    near("affinity mode: the strong direct link is nearest", d.cost, 0.1, 1e-9);
    eq("affinity mode takes the heavy edge", d.path.join(">"), "a>c");
    const dc = mcGrDijkstra(w, "a", "c", { invertWeights: false });
    near("cost mode: two cheap hops beat one dear edge", dc.cost, 2, 1e-9);
    eq("cost mode routes through b", dc.path.join(">"), "a>b>c");

    const comp = mcGrComponents(mcGrFromEdgeList([["a", "b"], ["x", "y"], ["z", "z"]], {}));
    eq("components counts the disjoint pieces", comp.count, 3);
    eq("components reports the largest", comp.largest, 2);
  })();

  /* ---------------- structure ------------------------------------- */
  (function () {
    eq("a triangle contains one triangle", mcGrTriangles(mcGrFromEdgeList(TRI, {})).total, 1);
    near("clustering coefficient of a triangle is 1",
         mcGrClustering(mcGrFromEdgeList(TRI, {})).global, 1, 1e-9);
    eq("a star contains no triangles", mcGrTriangles(mcGrFromEdgeList(STAR, {})).total, 0);
    eq("two joined triangles contain two", mcGrTriangles(mcGrFromEdgeList(TWOCLIQ, {})).total, 2);

    const g = mcGrFromEdgeList(TWOCLIQ, {});
    const br = mcGrBridges(g);
    eq("the joining edge is the only bridge", br.length, 1);
    eq("and it is c-d", br[0].slice().sort().join("-"), "c-d");
    eq("c and d are the articulation points", mcGrArticulationPoints(g).slice().sort().join(","), "c,d");
    ok("a triangle has no bridges", mcGrBridges(mcGrFromEdgeList(TRI, {})).length === 0);

    const kc = mcGrKCore(g);
    eq("two joined triangles have degeneracy 2", kc.degeneracy, 2);
    ok("a star is entirely 1-core",
       (function () { const c = mcGrKCore(mcGrFromEdgeList(STAR, {})).core;
                      return Object.keys(c).every(function (k) { return c[k] <= 1; }); })());
  })();

  /* ---------------- documents -> graph ---------------------------- */
  (function () {
    // mcGrFromDocuments takes PRE-EXTRACTED entities, not raw text — NER is a
    // separate concern and the host already has one.
    const docs = [
      doc(["Gaza", "Doha"]), doc(["Doha", "Gaza"]), doc(["Gaza", "Rafah"]),
      doc(["Markets", "Energy"])
    ];
    const g = mcGrFromDocuments(docs, {});
    /* Node ids are case-folded so "Gaza"/"GAZA"/"gaza" are one entity, while
       the first spelling survives as the display label. Callers therefore
       address nodes by the folded id, not by whatever case the wire used. */
    ok("co-occurring names are linked", g.hasEdge("gaza", "doha"));
    ok("names never seen together are not linked", !g.hasEdge("gaza", "markets"));
    ok("the repeated pair carries the most weight",
       g.edgeWeight("gaza", "doha") > g.edgeWeight("gaza", "rafah"),
       g.edgeWeight("gaza", "doha") + " vs " + g.edgeWeight("gaza", "rafah"));
    eq("the human spelling survives as the label", g.node("gaza").label, "Gaza");
    ok("a name repeated inside one document is still one co-occurrence",
       mcGrFromDocuments([doc(["Gaza", "Gaza", "Doha"])], {}).edgeWeight("gaza", "doha") === 1);
    eq("case folding merges spellings", mcGrFromDocuments([doc(["gaza", "Doha"]), doc(["GAZA", "Doha"])], {}).order(), 2);
    eq("case sensitivity can be kept when it matters",
       mcGrFromDocuments([doc(["Gaza", "Doha"])], { caseInsensitive: false }).nodes().join(","), "Gaza,Doha");
    eq("documents with no entities are skipped", mcGrFromDocuments([doc([]), doc(null)], {}).order(), 0);
    eq("a non-array is tolerated", mcGrFromDocuments(null, {}).order(), 0);
    ok("hostile entity text does not throw",
       !!mcGrFromDocuments([doc(["<img src=x onerror=alert(1)>", "Doha"])], {}));
  })();

  /* ---------------- layout ---------------------------------------- */
  (function () {
    const g = mcGrFromEdgeList(TWOCLIQ, {});
    const box = { width: 400, height: 300, seed: 11 };
    const pos = mcGrLayoutForce(g, box).positions;
    ok("every node gets a finite position",
       g.nodes().every(function (n) { return pos[n] && isFinite(pos[n].x) && isFinite(pos[n].y); }));
    ok("positions stay inside the box",
       g.nodes().every(function (n) { return pos[n].x >= -1 && pos[n].x <= 401 && pos[n].y >= -1 && pos[n].y <= 301; }),
       JSON.stringify(pos.a));
    const pos2 = mcGrLayoutForce(g, box).positions;
    ok("force layout is deterministic under a seed",
       g.nodes().every(function (n) { return Math.abs(pos2[n].x - pos[n].x) < 1e-9; }));
    ok("two nodes never land on the exact same point",
       (function () { const s = {}; return g.nodes().every(function (n) {
         const k = pos[n].x.toFixed(3) + "," + pos[n].y.toFixed(3);
         if (s[k]) return false; s[k] = 1; return true; }); })());

    const cp = mcGrLayoutCircle(g, box).positions;
    ok("circle layout places every node", g.nodes().every(function (n) { return cp[n] && isFinite(cp[n].x); }));
    const gp = mcGrLayoutGrid(g, box).positions;
    ok("grid layout places every node", g.nodes().every(function (n) { return gp[n] && isFinite(gp[n].x); }));
  })();

  /* ---------------- render model is data, never markup ------------ */
  (function () {
    const g = mcGrFromDocuments([doc(["Gaza", "Doha"]), doc(["Doha", "Gaza"])], {});
    const m = mcGrRenderModel(g, { width: 300, height: 200, seed: 5 });
    ok("render model lists nodes", Array.isArray(m.nodes) && m.nodes.length === 2);
    ok("render model lists edges", Array.isArray(m.edges) && m.edges.length === 1);
    ok("no NaN in any coordinate or radius",
       m.nodes.every(function (n) { return isFinite(n.x) && isFinite(n.y) && isFinite(n.r) && n.r > 0; }));
    ok("render model emits no markup", JSON.stringify(m).indexOf("<") < 0);

    const hostile = mcGrRenderModel(mcGrFromDocuments([doc(["<script>x", "Doha"])], {}), { width: 200, height: 200 });
    ok("a hostile label survives as data, unescaped, for the renderer to handle",
       JSON.stringify(hostile.nodes.map(function (n) { return n.label; })).indexOf("script") >= 0);

    // Labels are stripped of control characters but NOT html-escaped: escaping
    // here and again in the renderer would double-encode.
    const lab = mcGrSafeLabel("a\x01bc\uFEFFd");
    ok("control characters are stripped from labels", !/[\x00-\x1f\x7f\uFEFF]/.test(lab), JSON.stringify(lab));
    ok("long labels are clamped", mcGrSafeLabel(new Array(400).join("x"), 20).length <= 20);
    eq("a null label is empty", mcGrSafeLabel(null), "");
  })();

  /* ---------------- scale ----------------------------------------- */
  (function () {
    const edges = [];
    for (let i = 0; i < 2000; i++) edges.push(["n" + i, "n" + ((i * 7 + 3) % 2000)]);
    const g = mcGrFromEdgeList(edges, {});
    let t = Date.now(); const pr = mcGrPageRank(g, {}); const prMs = Date.now() - t;
    t = Date.now(); const lv = mcGrLouvain(g, { seed: 1 }); const lvMs = Date.now() - t;
    t = Date.now(); const lay = mcGrLayoutForce(g, { width: 800, height: 600, seed: 2 }); const layMs = Date.now() - t;
    t = Date.now(); mcGrBetweenness(g, {}); const btMs = Date.now() - t;
    console.log("  2000 nodes: pagerank " + prMs + "ms, louvain " + lvMs +
                "ms, betweenness " + btMs + "ms, layout " + layMs + "ms");
    near("pagerank still sums to 1 at scale", sum(pr.scores), 1, 1e-5);
    ok("louvain partitions every node at scale",
       lv.groups.reduce(function (a, c) { return a + c.length; }, 0) === g.order());
    ok("layout stays bounded in time (it runs on the UI thread)", layMs < 8000, layMs + "ms");
    ok("no NaN positions at scale",
       g.nodes().every(function (n) { return isFinite(lay.positions[n].x); }));
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

  const total = mcGrPass + mcGrFail;
  if (mcGrFailures.length) {
    console.log("\nFAILURES (" + mcGrFailures.length + "):");
    mcGrFailures.forEach(function (f) { console.log("  FAIL  " + f); });
  }
  console.log((mcGrFail === 0 ? "PASS" : "FAIL") + " — " + mcGrPass + "/" + total + " assertions passed");
  if (mcGrFail) process.exit(1);
}
