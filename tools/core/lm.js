/* musa core — trigram language model with interpolated absolute-discount
 * (Kneser-Ney style) smoothing, temperature + top-k sampling, and perplexity.
 *
 * Plain script scope on purpose: this file is pasted verbatim into a single-file
 * HTML app, so no modules, no wrapper, no globals that aren't `mc`-prefixed.
 *
 * Replaces the old order-2 Markov chain. The two things the chain got wrong:
 *   1. It had no backoff, so an unseen bigram context was a dead end and the
 *      generator either threw or restarted mid-headline.
 *   2. It had no probability model at all, so there was no honest way to answer
 *      "does this thing actually know the newswire domain?". mcLmPerplexity is
 *      that answer, and it is only meaningful if the distribution is proper —
 *      hence the care taken below to make every conditional sum to exactly 1.
 *
 * Smoothing: interpolated absolute discounting at the trigram and bigram level
 * over a Kneser-Ney continuation unigram. See mcLmProb for the derivation of
 * the interpolation weights — they fall out of the observed counts, there is no
 * hand-tuned lambda anywhere in this file.
 */

/* ------------------------------------------------------------------ *
 * Constants
 * ------------------------------------------------------------------ */

// Sentinels. The tokenizer can never emit "<" or ">", so these cannot collide
// with a real token. BOS is a context-only symbol: it is never predicted and
// never enters `uni`, which keeps the vocabulary honest.
const mcLmBOS = "<s>";
const mcLmEOS = "</s>";

// Context key separator. \u0001 cannot appear in a token, so "a\u0001b" is an
// unambiguous encoding of the pair (a, b) — cheaper than nested Maps.
const mcLmSep = "\u0001";

// Absolute-discount constants. MUST stay in the open interval (0, 1): the
// sum-to-one identity in mcLmProb relies on (count - D) > 0 for every observed
// count, and observed counts are integers >= 1. 0.75 is the standard Ney et al.
// value and is close to the D = n1/(n1 + 2*n2) estimate on newswire text.
const mcLmDiscountTri = 0.75;
const mcLmDiscountBi = 0.75;

// The anti-regurgitation guard needs the training documents, but this model is
// fed every incoming headline forever, so the set is bounded and evicts oldest
// first. 20k headlines is a few MB and several months of a busy feed.
const mcLmMaxDocs = 20000;

// When the context is a total miss we sample from the head of the unigram
// distribution rather than the whole vocabulary — the tail contributes
// negligible mass and enumerating it on every step is what made the old
// generator janky on long feeds.
const mcLmUniFallbackK = 64;

// Generation attempts: 1 draw + up to 3 resamples if we produced a verbatim
// training headline.
const mcLmMaxAttempts = 4;

/* ------------------------------------------------------------------ *
 * PRNG
 * ------------------------------------------------------------------ */

// mulberry32 — 32 bits of state, one multiply-xorshift round. Not
// cryptographic, but it has a full 2^32 period and passes gjrand's basic
// suite, which is well past what sampling headlines needs. Deterministic seed
// means tests can assert on exact output.
function mcRng(seed) {
  let a = (seed >>> 0) || 0x9e3779b9;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ------------------------------------------------------------------ *
 * Tokenisation
 * ------------------------------------------------------------------ */

// Lowercased word-ish tokens. Internal periods survive ("u.s"), trailing ones
// do not; "$1.2bn", "3.5%" and "risk-off" stay single tokens because splitting
// them destroys exactly the collocations a newswire model wants to learn.
function mcLmTokenize(chunk) {
  const m = String(chunk == null ? "" : chunk)
    .toLowerCase()
    .match(/[a-z0-9$%](?:[a-z0-9$%.'’-]*[a-z0-9$%])?/g);
  return m || [];
}

// One document can be several sentences; each is an independent sequence so we
// never learn a trigram that straddles a full stop.
// Deliberately no lookbehind — Safari < 16.4 does not have it and this file
// ships to browsers. The lookahead form is ES3 and universal.
function mcLmSentences(text) {
  const raw = String(text == null ? "" : text);
  const parts = raw.replace(/([!?]|\.(?=\s|$))/g, "\u0001").split("\u0001");
  const out = [];
  for (let i = 0; i < parts.length; i++) {
    const toks = mcLmTokenize(parts[i]);
    if (toks.length) out.push(toks);
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Model
 * ------------------------------------------------------------------ */

// The documented shape is { uni, bi, tri, starts, tokens, types }. Everything
// after that is a derived index maintained incrementally so that training stays
// O(len(doc)) and mcLmStats stays O(1) — both are called on the render path.
function mcLmNew() {
  return {
    uni: new Map(),        // token -> count (includes </s>, never <s>)
    bi: new Map(),         // "v" -> Map(w -> count)
    tri: new Map(),        // "u\u0001v" -> Map(w -> count)
    starts: new Map(),     // first token of a sentence -> count
    tokens: 0,             // real words seen (excludes both sentinels)
    types: 0,              // distinct real words (excludes both sentinels)

    biTot: new Map(),      // "v" -> sum of its continuation counts
    triTot: new Map(),     // "u\u0001v" -> sum of its continuation counts
    cont: new Map(),       // w -> # distinct left neighbours (KN continuation)
    contTot: 0,            // total distinct bigram types = sum of cont values
    biTypes: 0,            // distinct bigram types
    triTypes: 0,           // distinct trigram types
    docs: new Set(),       // normalised training sentences, for the copy guard
    rev: 0,                // bumped on every train, invalidates caches
    uniTop: null           // { rev, list } memo of the head of the unigram dist
  };
}

// Trains on one document in place. Everything here is a handful of Map lookups
// per token, so calling it on every inbound headline is fine.
function mcLmTrain(model, text) {
  if (!model) return model;
  const sents = mcLmSentences(text);

  for (let s = 0; s < sents.length; s++) {
    const toks = sents[s];

    // Remember the surface form for the anti-regurgitation check, oldest out
    // first so a long-running tab does not grow without bound.
    const docKey = toks.join(" ");
    if (!model.docs.has(docKey)) {
      if (model.docs.size >= mcLmMaxDocs) {
        const oldest = model.docs.values().next();
        if (!oldest.done) model.docs.delete(oldest.value);
      }
      model.docs.add(docKey);
    }

    model.starts.set(toks[0], (model.starts.get(toks[0]) || 0) + 1);

    // One BOS, one EOS. One BOS (not two) because generation seeds its first
    // word from `starts` and then has a real trigram context (<s>, w1)
    // available immediately; padding with two would waste an order.
    const seq = [mcLmBOS];
    for (let i = 0; i < toks.length; i++) seq.push(toks[i]);
    seq.push(mcLmEOS);

    for (let i = 1; i < seq.length; i++) {
      const w = seq[i];

      // Unigram / vocabulary. </s> counts (it is a prediction target), <s> does
      // not (it is only ever a context).
      const prev = model.uni.get(w) || 0;
      model.uni.set(w, prev + 1);
      if (prev === 0 && w !== mcLmEOS) model.types++;
      if (w !== mcLmEOS) model.tokens++;

      // Bigram v -> w, plus the KN continuation count of w. cont[w] is
      // incremented only when the bigram type is new, which is the whole point:
      // it counts *contexts* w appears in, not occurrences.
      const v = seq[i - 1];
      let bm = model.bi.get(v);
      if (!bm) { bm = new Map(); model.bi.set(v, bm); }
      const bc = bm.get(w) || 0;
      bm.set(w, bc + 1);
      model.biTot.set(v, (model.biTot.get(v) || 0) + 1);
      if (bc === 0) {
        model.biTypes++;
        model.cont.set(w, (model.cont.get(w) || 0) + 1);
        model.contTot++;
      }

      // Trigram (u, v) -> w.
      if (i >= 2) {
        const key = seq[i - 2] + mcLmSep + v;
        let tm = model.tri.get(key);
        if (!tm) { tm = new Map(); model.tri.set(key, tm); }
        const tc = tm.get(w) || 0;
        tm.set(w, tc + 1);
        model.triTot.set(key, (model.triTot.get(key) || 0) + 1);
        if (tc === 0) model.triTypes++;
      }
    }
  }

  model.rev++;
  model.uniTop = null;
  return model;
}

/* ------------------------------------------------------------------ *
 * Probability
 * ------------------------------------------------------------------ */

// Kneser-Ney continuation unigram: how likely is w to appear as a *novel*
// continuation, i.e. in how many distinct contexts has it been seen? This is
// what stops "francisco" from getting a big unigram probability just because
// "san francisco" is frequent — it only ever follows one word.
//
// The +1 / +1 is an add-one floor over the vocabulary plus one <unk> slot. It
// is what guarantees mcLmPerplexity can never return Infinity on an unseen
// token, and it keeps the distribution proper: the numerators over
// (vocabulary + <unk>) sum to exactly contTot + |V| + 1.
function mcLmProbBase(model, w) {
  const c = model.cont.get(w) || 0;
  return (c + 1) / (model.contTot + model.uni.size + 1);
}

// Interpolated absolute discounting, bigram order.
//
//   P(w|v) = max(C(v,w) - D, 0) / C(v)  +  gamma(v) * Pcont(w)
//   gamma(v) = D * T(v) / C(v)
//
// gamma is the mass the discount removed from the T(v) observed continuations,
// handed to the lower order. That makes the weight a pure function of the
// observed counts — a context seen 200 times keeps ~99% of its own mass, one
// seen twice gives most of it away — which is the same intent as the usual
// lambda = C / (C + D) heuristic but conserves mass exactly instead of
// approximately. Exactness matters here because mcLmPerplexity is a reported
// metric, and a distribution that sums to 0.98 quietly flatters it.
function mcLmProbBi(model, v, w) {
  const m = model.bi.get(v);
  const tot = model.biTot.get(v) || 0;
  const base = mcLmProbBase(model, w);
  if (!m || tot <= 0) return base;            // unseen context: gamma is 1
  const c = m.get(w) || 0;
  const gamma = (mcLmDiscountBi * m.size) / tot;
  return Math.max(c - mcLmDiscountBi, 0) / tot + gamma * base;
}

// Same shape one order up. Note there is no "was the context seen enough"
// threshold: the trigram is used exactly to the degree its context was
// observed, because gamma -> 1 as C(u,v) -> 0 and gamma -> 0 as C(u,v) grows.
// A hard count cutoff would be a second magic number doing the job this one
// already does continuously.
function mcLmProb(model, w, u, v) {
  const key = u + mcLmSep + v;
  const m = model.tri.get(key);
  const tot = model.triTot.get(key) || 0;
  const lower = mcLmProbBi(model, v, w);
  if (!m || tot <= 0) return lower;
  const c = m.get(w) || 0;
  const gamma = (mcLmDiscountTri * m.size) / tot;
  return Math.max(c - mcLmDiscountTri, 0) / tot + gamma * lower;
}

/* ------------------------------------------------------------------ *
 * Sampling
 * ------------------------------------------------------------------ */

// Head of the unigram distribution, memoised against model.rev. Only used when
// the context misses at every order (a seed word we have never seen), so the
// sort cost is paid approximately never.
function mcLmTopUnigrams(model) {
  if (model.uniTop && model.uniTop.rev === model.rev) return model.uniTop.list;
  const arr = [];
  model.uni.forEach(function (c, w) { arr.push([w, c]); });
  arr.sort(function (a, b) { return b[1] - a[1] || (a[0] < b[0] ? -1 : 1); });
  const list = arr.slice(0, mcLmUniFallbackK).map(function (p) { return p[0]; });
  model.uniTop = { rev: model.rev, list: list };
  return list;
}

// Candidate set for one step. We score the union of the trigram and bigram
// continuations rather than the full vocabulary: every other token's mass comes
// only from the smoothing floor, and enumerating |V| per step turns generation
// into an O(maxWords * |V|) operation on a model that grows all day.
function mcLmCandidates(model, u, v) {
  const seen = new Set();
  const tm = model.tri.get(u + mcLmSep + v);
  if (tm) tm.forEach(function (_c, w) { seen.add(w); });
  const bm = model.bi.get(v);
  if (bm) bm.forEach(function (_c, w) { seen.add(w); });
  if (seen.size === 0) {
    const top = mcLmTopUnigrams(model);
    for (let i = 0; i < top.length; i++) seen.add(top[i]);
  }
  const out = [];
  seen.forEach(function (w) { out.push(w); });
  return out;
}

// Temperature, then top-k, then renormalise, then draw.
//
// On the order: temperature is a monotone transform, so it cannot change *which*
// k items survive the cut — the surviving set is identical either way. What the
// order does decide is where the normalisation lands, and the invariant that
// matters is that renormalisation happens LAST, after both. Truncating a
// distribution and then re-tempering it would renormalise twice and quietly
// change the effective temperature. Doing it in this order also means the low-
// temperature path is computed in log space before anything is thrown away,
// which is what keeps T = 0.1 from underflowing every candidate to zero.
function mcLmSample(items, temperature, topK, rng) {
  if (!items.length) return null;

  let mass = 0;
  for (let i = 0; i < items.length; i++) mass += items[i].p;
  if (!(mass > 0)) return null;                 // distribution collapsed

  const t = typeof temperature === "number" && temperature > 0 ? temperature : 0;
  const scored = new Array(items.length);
  for (let i = 0; i < items.length; i++) {
    const p = items[i].p / mass;
    // log space: p^(1/T) overflows/underflows badly for T outside ~[0.3, 3].
    scored[i] = { w: items[i].w, logit: t > 0 ? Math.log(p) / t : Math.log(p), p: p };
  }

  // Rank by probability (monotone in logit), tie-broken on the token so the
  // cut is reproducible regardless of Map iteration order.
  scored.sort(function (a, b) { return b.p - a.p || (a.w < b.w ? -1 : 1); });

  const k = typeof topK === "number" && topK > 0 ? Math.min(topK | 0, scored.length) : scored.length;
  const kept = scored.slice(0, k);
  if (t === 0 || kept.length === 1) return kept[0].w;   // greedy

  let maxLogit = -Infinity;
  for (let i = 0; i < kept.length; i++) if (kept[i].logit > maxLogit) maxLogit = kept[i].logit;

  let sum = 0;
  const weights = new Array(kept.length);
  for (let i = 0; i < kept.length; i++) {
    const e = Math.exp(kept[i].logit - maxLogit);   // max-subtraction: no overflow
    weights[i] = e;
    sum += e;
  }
  if (!(sum > 0) || !isFinite(sum)) return kept[0].w;

  let r = rng() * sum;
  for (let i = 0; i < kept.length; i++) {
    r -= weights[i];
    if (r <= 0) return kept[i].w;
  }
  return kept[kept.length - 1].w;                 // float slop guard
}

/* ------------------------------------------------------------------ *
 * Generation
 * ------------------------------------------------------------------ */

// Returns a generated string. opts:
//   maxWords    hard ceiling, also the termination guarantee
//   temperature > 0; <= 0 means greedy
//   topK        truncation after tempering; <= 0 means no truncation
//   seedText    primes the context so the output continues a prompt
//   minWords    below this we suppress </s> rather than stop short
//   rng         () -> [0,1), defaults to Math.random
//
// Termination: the loop is bounded by maxWords, and every iteration either
// emits a token or breaks. There is no path that loops without consuming a
// slot, so it cannot hang even on a pathological model.
function mcLmGenerate(model, opts) {
  opts = opts || {};
  const maxWords = typeof opts.maxWords === "number" ? Math.max(1, opts.maxWords | 0) : 14;
  const temperature = typeof opts.temperature === "number" ? opts.temperature : 0.85;
  const topK = typeof opts.topK === "number" ? opts.topK : 8;
  const seedText = typeof opts.seedText === "string" ? opts.seedText : "";
  const minWords = typeof opts.minWords === "number" ? Math.max(0, opts.minWords | 0) : 5;
  const rng = typeof opts.rng === "function" ? opts.rng : Math.random;

  if (!model || model.tokens === 0) {
    // Untrained: a safe fallback beats a thrown error on a cold feed.
    return seedText ? seedText.trim() : "";
  }

  const seedTokens = mcLmTokenize(seedText);
  const seedPrefix = seedText.trim();
  let best = null;

  // Up to 3 resamples if we reproduced a training headline verbatim. A
  // trigram model over a small corpus WILL walk a whole sentence sometimes;
  // shipping that as "generated" is plagiarism with extra steps. The </s>
  // suppression below makes it rare, this makes it (practically) impossible.
  for (let attempt = 0; attempt < mcLmMaxAttempts; attempt++) {
    const out = seedTokens.slice(0, maxWords);
    let u = out.length >= 2 ? out[out.length - 2] : mcLmBOS;
    let v = out.length >= 1 ? out[out.length - 1] : null;

    if (v === null) {
      // No seed: draw the opening word from the sentence-start distribution.
      // Using `starts` rather than the chain keeps openings on-distribution —
      // the app also wants to bias this independently later.
      const startItems = [];
      let stot = 0;
      model.starts.forEach(function (c) { stot += c; });
      model.starts.forEach(function (c, w) { startItems.push({ w: w, p: c / stot }); });
      const first = mcLmSample(startItems, temperature, topK, rng);
      if (first === null) break;
      out.push(first);
      u = mcLmBOS;
      v = first;
    }

    while (out.length < maxWords) {
      // Suppress </s> while short, and suppress it when stopping here would
      // hand back an exact training sentence. Both are filters on the candidate
      // list, never a retry loop, so the step still terminates.
      const canStop = out.length >= minWords && !model.docs.has(out.join(" "));
      const collect = function (cands) {
        const acc = [];
        for (let i = 0; i < cands.length; i++) {
          const w = cands[i];
          if (w === mcLmEOS && !canStop) continue;
          acc.push({ w: w, p: mcLmProb(model, w, u, v) });
        }
        return acc;
      };

      let items = collect(mcLmCandidates(model, u, v));
      if (!items.length) {
        // Dead end: every observed continuation got filtered out. In practice
        // this is a word that has only ever ended a headline ("...meetings")
        // reached before minWords. The smoothed model is NOT out of mass here —
        // it all sits in the backoff tail — so widen to the head of the
        // continuation-unigram distribution instead of truncating the headline.
        // Without this the generator silently returns three words.
        items = collect(mcLmTopUnigrams(model));
      }
      if (!items.length) break;                    // genuinely nothing to say

      const next = mcLmSample(items, temperature, topK, rng);
      if (next === null || next === mcLmEOS) break;
      out.push(next);
      u = v;
      v = next;
    }

    const key = out.join(" ");
    const isCopy = model.docs.has(key);
    if (!best || (best.isCopy && !isCopy) || (best.isCopy === isCopy && out.length > best.out.length)) {
      best = { out: out, isCopy: isCopy };
    }
    if (!isCopy && out.length >= Math.min(minWords, maxWords)) break;
  }

  if (!best || !best.out.length) return seedPrefix;

  // Last-ditch: if every attempt came back verbatim, drop the final token. A
  // strict prefix of a headline is not a copy of it, and it still reads.
  let toks = best.out;
  if (best.isCopy && toks.length > Math.min(minWords, maxWords)) toks = toks.slice(0, -1);

  if (seedPrefix) {
    const tail = toks.slice(seedTokens.length).join(" ");
    return tail ? seedPrefix + " " + tail : seedPrefix;
  }
  const s = toks.join(" ");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ------------------------------------------------------------------ *
 * Perplexity
 * ------------------------------------------------------------------ */

// Perplexity of held-out text: 2 ^ ( -(1/N) * sum log2 P(w_i | w_i-2, w_i-1) ).
//
// Log base 2, normalised by token count, </s> included as a predicted token so
// the model is scored on knowing where a headline ends (a model that never
// stops should be punished). Unseen tokens land on the smoothed unigram floor
// in mcLmProbBase, so no term is ever 0 and the result is never Infinity or
// NaN. Empty input is 1 (zero tokens, zero surprise) rather than a throw.
function mcLmPerplexity(model, text) {
  if (!model) return 1;
  const sents = mcLmSentences(text);
  let logsum = 0;
  let n = 0;

  for (let s = 0; s < sents.length; s++) {
    const toks = sents[s];
    // Two BOS so the first word is scored with a real trigram context. The
    // (<s>, <s>) context never occurs in training, so it backs straight off to
    // the bigram <s> -> w, which is exactly the sentence-start distribution.
    const seq = [mcLmBOS, mcLmBOS];
    for (let i = 0; i < toks.length; i++) seq.push(toks[i]);
    seq.push(mcLmEOS);

    for (let i = 2; i < seq.length; i++) {
      const p = mcLmProb(model, seq[i], seq[i - 2], seq[i - 1]);
      if (!(p > 0) || !isFinite(p)) continue;   // unreachable by construction
      logsum += Math.log(p) / Math.LN2;
      n++;
    }
  }

  if (n === 0) return 1;                        // no division by zero, ever
  // Clamp the exponent: 2^60 is already "the model has no idea", and returning
  // Infinity from a metric function poisons every average downstream.
  const exponent = Math.min(-logsum / n, 60);
  const ppl = Math.pow(2, exponent);
  return isFinite(ppl) && ppl > 0 ? ppl : 1;
}

/* ------------------------------------------------------------------ *
 * Stats
 * ------------------------------------------------------------------ */

// O(1) — all four counters are maintained during training because this is
// called on every render of the debug panel.
function mcLmStats(model) {
  if (!model) return { tokens: 0, types: 0, trigrams: 0, bigrams: 0, avgBranching: 0 };
  return {
    tokens: model.tokens,
    types: model.types,
    trigrams: model.triTypes,
    bigrams: model.biTypes,
    // Mean number of distinct continuations per trigram context. Near 1 means
    // the model has memorised the corpus and will only ever recite it.
    avgBranching: model.tri.size ? model.triTypes / model.tri.size : 0
  };
}

// Convenience namespace for the app; the free functions stay the real API.
const mcLM = {
  create: mcLmNew,
  train: mcLmTrain,
  generate: mcLmGenerate,
  perplexity: mcLmPerplexity,
  stats: mcLmStats,
  rng: mcRng
};

/* ------------------------------------------------------------------ *
 * Self-test
 * ------------------------------------------------------------------ */

if (typeof module !== "undefined" && require.main === module) {
  const mcLmFailures = [];
  let mcLmPassCount = 0;

  function mcLmCheck(name, ok, detail) {
    if (ok) { mcLmPassCount++; return; }
    mcLmFailures.push(name + (detail === undefined ? "" : " — " + detail));
  }
  function mcLmCheckEq(name, actual, expected) {
    mcLmCheck(name, actual === expected, "got " + JSON.stringify(actual) + ", want " + JSON.stringify(expected));
  }

  const mcLmCorpus = [
    "Central bank holds rates steady as inflation cools",
    "Central bank signals further tightening amid stubborn inflation",
    "Central bank chief warns of slower growth ahead",
    "Central bank cuts growth forecast for the second quarter",
    "Shares rally as investors weigh rate cut hopes",
    "Shares slip in early trade after weak factory data",
    "Shares close higher on strong earnings from lenders",
    "Asian shares track Wall Street gains on tech rally",
    "European shares open lower as energy stocks retreat",
    "Wall Street closes mixed ahead of jobs report",
    "Oil prices climb on supply worries in the gulf",
    "Oil prices fall as demand outlook dims",
    "Gold steadies near record high on rate cut bets",
    "Dollar firms against the euro after hawkish minutes",
    "Euro slides to a three month low against the dollar",
    "Bond yields rise as traders trim rate cut bets",
    "Treasury yields ease after softer inflation print",
    "Inflation slows to a two year low in June",
    "Inflation ticks higher on food and energy costs",
    "Factory output shrinks for a third straight month",
    "Retail sales beat forecasts in a sign of resilience",
    "Jobless claims fall to the lowest level since March",
    "Unemployment rate holds steady at four percent",
    "Consumer confidence slides to a six month low",
    "Housing starts rebound as mortgage rates ease",
    "Regulators approve merger of two regional lenders",
    "Regulators open probe into trading at a major bank",
    "Lawmakers press regulators over bank capital rules",
    "Finance ministers meet to discuss debt relief plan",
    "Talks stall over the terms of the trade deal",
    "Trade talks resume after a week of tension",
    "Exports rise for a fourth straight month on strong demand",
    "Imports fall as the currency weakens further",
    "Government unveils package to support small business",
    "Government borrowing overshoots the annual target",
    "Budget deficit widens on higher defence spending",
    "Tech firms lead a broad rally in afternoon trade",
    "Chipmaker lifts forecast on strong data centre demand",
    "Carmaker cuts jobs as electric vehicle demand cools",
    "Airline lifts profit outlook on strong summer bookings",
    "Miner halts output at a flagship copper site",
    "Utility raises prices as wholesale energy costs climb",
    "Lender sets aside more cash for bad loans",
    "Insurer reports a jump in claims after the storms",
    "Retailer warns on profit as shoppers cut back",
    "Startup raises funding at a lower valuation",
    "Investors weigh the risk of a wider conflict",
    "Analysts trim forecasts for the third quarter",
    "Markets steady after a volatile week of trade",
    "Traders brace for a busy week of central bank meetings",
    "Emerging markets draw record inflows in July",
    "Currency falls to a record low against the dollar",
    "Debt talks with creditors enter a critical phase",
    "Ratings agency lifts the outlook to stable",
    "Ratings agency cuts the sovereign rating one notch",
    "Growth slows in the second quarter as spending cools",
    "Economy grows faster than expected in the first quarter",
    "Manufacturing survey points to a mild recovery",
    "Services activity expands at the fastest pace this year",
    "Wage growth cools in a relief for policymakers"
  ];

  const mcLmModel = mcLmNew();
  for (let i = 0; i < mcLmCorpus.length; i++) mcLmTrain(mcLmModel, mcLmCorpus[i]);

  const mcLmDocSet = new Set(mcLmCorpus.map(function (h) { return mcLmTokenize(h).join(" "); }));
  const mcLmNorm = function (s) { return mcLmTokenize(s).join(" "); };

  /* --- 1-4: shape and stats ------------------------------------------ */
  const mcLmFresh = mcLmNew();
  mcLmCheck("1 mcLmNew shape", ["uni", "bi", "tri", "starts", "tokens", "types"].every(function (k) {
    return Object.prototype.hasOwnProperty.call(mcLmFresh, k);
  }));
  const mcLmSt = mcLmStats(mcLmModel);
  mcLmCheck("2 stats.tokens non-zero", mcLmSt.tokens > 0, mcLmSt.tokens);
  mcLmCheck("3 stats.types non-zero", mcLmSt.types > 0, mcLmSt.types);
  mcLmCheck("4 stats trigrams/bigrams/branching sane",
    mcLmSt.trigrams > 0 && mcLmSt.bigrams > 0 && mcLmSt.avgBranching >= 1,
    JSON.stringify(mcLmSt));

  /* --- 5-7: basic generation ------------------------------------------ */
  const mcLmG1 = mcLmGenerate(mcLmModel, { rng: mcRng(1) });
  mcLmCheck("5 generate returns a string", typeof mcLmG1 === "string", typeof mcLmG1);
  mcLmCheck("6 generate >= minWords words", mcLmG1.split(/\s+/).filter(Boolean).length >= 5, mcLmG1);
  mcLmCheck("7 generate <= maxWords words",
    mcLmGenerate(mcLmModel, { rng: mcRng(2), maxWords: 8 }).split(/\s+/).filter(Boolean).length <= 8);

  /* --- 8-9: determinism ------------------------------------------------ */
  mcLmCheckEq("8 seeded rng deterministic",
    mcLmGenerate(mcLmModel, { rng: mcRng(1234) }),
    mcLmGenerate(mcLmModel, { rng: mcRng(1234) }));
  mcLmCheck("9 different seeds differ somewhere", (function () {
    const set = new Set();
    for (let i = 0; i < 20; i++) set.add(mcLmGenerate(mcLmModel, { rng: mcRng(i + 100), temperature: 1.0 }));
    return set.size > 1;
  })());

  /* --- 10-11: temperature diversity ------------------------------------ */
  const mcLmDiversity = function (temp) {
    const set = new Set();
    for (let i = 0; i < 20; i++) set.add(mcLmGenerate(mcLmModel, { rng: mcRng(i + 7), temperature: temp }));
    return set.size;
  };
  const mcLmLowT = mcLmDiversity(0.1);
  const mcLmHighT = mcLmDiversity(1.5);
  mcLmCheck("10 low temperature yields fewer distinct outputs",
    mcLmLowT < mcLmHighT, "T=0.1 -> " + mcLmLowT + " distinct, T=1.5 -> " + mcLmHighT + " distinct");
  mcLmCheck("11 high temperature is genuinely diverse", mcLmHighT >= 10, mcLmHighT);

  /* --- 12-13: top-k ---------------------------------------------------- */
  mcLmCheckEq("12 topK=1 reproducible",
    mcLmGenerate(mcLmModel, { rng: mcRng(55), topK: 1 }),
    mcLmGenerate(mcLmModel, { rng: mcRng(55), topK: 1 }));
  // topK=1 is fully greedy: the rng cannot change the argmax at any step, so
  // 20 different seeds must collapse to one output.
  mcLmCheck("13 topK=1 collapses diversity to a single output", (function () {
    const set = new Set();
    for (let i = 0; i < 20; i++) set.add(mcLmGenerate(mcLmModel, { rng: mcRng(i + 7), topK: 1, temperature: 1.5 }));
    return set.size === 1;
  })());

  /* --- 14-15: seeding --------------------------------------------------- */
  const mcLmSeeded = mcLmGenerate(mcLmModel, { seedText: "Central bank", rng: mcRng(9) });
  mcLmCheck("14 seedText prefixes the output", mcLmSeeded.indexOf("Central bank") === 0, mcLmSeeded);
  mcLmCheck("15 seedText continues past the prompt",
    mcLmSeeded.split(/\s+/).filter(Boolean).length > 2, mcLmSeeded);

  /* --- 16: no verbatim regurgitation ----------------------------------- */
  mcLmCheck("16 never an exact copy of a training headline", (function () {
    for (let i = 0; i < 30; i++) {
      const g = mcLmGenerate(mcLmModel, { rng: mcRng(i * 31 + 3), temperature: 0.85 });
      if (mcLmDocSet.has(mcLmNorm(g))) return false;
    }
    return true;
  })());
  mcLmCheck("17 no verbatim copy at low temperature either", (function () {
    for (let i = 0; i < 30; i++) {
      const g = mcLmGenerate(mcLmModel, { rng: mcRng(i * 17 + 5), temperature: 0.1 });
      if (mcLmDocSet.has(mcLmNorm(g))) return false;
    }
    return true;
  })());

  /* --- 18-21: perplexity ------------------------------------------------ */
  const mcLmInDomain = "Shares rally as investors weigh rate cut bets";
  const mcLmOutDomain = "Fold the whisked egg whites into the melted chocolate and chill overnight";
  const mcLmPplIn = mcLmPerplexity(mcLmModel, mcLmInDomain);
  const mcLmPplOut = mcLmPerplexity(mcLmModel, mcLmOutDomain);
  mcLmCheck("18 in-domain perplexity < out-of-domain",
    mcLmPplIn < mcLmPplOut, "in=" + mcLmPplIn.toFixed(2) + " out=" + mcLmPplOut.toFixed(2));
  mcLmCheck("19 in-domain perplexity finite and > 1",
    isFinite(mcLmPplIn) && mcLmPplIn > 1, mcLmPplIn);
  mcLmCheck("20 out-of-domain perplexity finite and > 1",
    isFinite(mcLmPplOut) && mcLmPplOut > 1, mcLmPplOut);
  mcLmCheck("21 perplexity never NaN", !isNaN(mcLmPplIn) && !isNaN(mcLmPplOut));
  mcLmCheck("22 perplexity on empty string does not throw", (function () {
    try {
      const p = mcLmPerplexity(mcLmModel, "");
      return isFinite(p) && !isNaN(p);
    } catch (e) { return false; }
  })());
  mcLmCheck("23 perplexity on whitespace/punctuation only", (function () {
    try {
      const p = mcLmPerplexity(mcLmModel, "   ...  ");
      return isFinite(p) && !isNaN(p);
    } catch (e) { return false; }
  })());
  mcLmCheck("24 perplexity handles unseen tokens without Infinity", (function () {
    const p = mcLmPerplexity(mcLmModel, "zzqx wibble frobnicate quuxly");
    return isFinite(p) && p > 1;
  })());

  /* --- 25-27: untrained model ------------------------------------------ */
  const mcLmEmpty = mcLmNew();
  mcLmCheck("25 untrained generate returns a safe string", (function () {
    try {
      const g = mcLmGenerate(mcLmEmpty, { rng: mcRng(1) });
      return typeof g === "string" && g.length < 40;
    } catch (e) { return false; }
  })());
  mcLmCheck("26 untrained perplexity does not divide by zero", (function () {
    try {
      const p = mcLmPerplexity(mcLmEmpty, "anything at all");
      return isFinite(p) && !isNaN(p) && p > 0;
    } catch (e) { return false; }
  })());
  mcLmCheck("27 untrained stats are zeroed", (function () {
    const s = mcLmStats(mcLmEmpty);
    return s.tokens === 0 && s.types === 0 && s.trigrams === 0 && s.bigrams === 0 && s.avgBranching === 0;
  })());

  /* --- 28-30: repeated training keeps the distribution proper ---------- */
  const mcLmSumCtx = function (model, u, v) {
    // Sum P(w | u, v) over the whole vocabulary plus the <unk> slot. "\u0000x"
    // is unreachable from the tokenizer, so it is a clean probe for the
    // reserved out-of-vocabulary mass.
    let sum = mcLmProb(model, "\u0001x", u, v);
    model.uni.forEach(function (_c, w) { sum += mcLmProb(model, w, u, v); });
    return sum;
  };
  const mcLmDup = mcLmNew();
  for (let i = 0; i < mcLmCorpus.length; i++) mcLmTrain(mcLmDup, mcLmCorpus[i]);
  const mcLmBefore = mcLmStats(mcLmDup).tokens;
  const mcLmSumBefore = mcLmSumCtx(mcLmDup, "central", "bank");
  mcLmTrain(mcLmDup, mcLmCorpus[0]);
  const mcLmAfter = mcLmStats(mcLmDup).tokens;
  const mcLmSumAfter = mcLmSumCtx(mcLmDup, "central", "bank");
  mcLmCheck("28 retraining the same document increases counts",
    mcLmAfter > mcLmBefore, mcLmBefore + " -> " + mcLmAfter);
  mcLmCheck("29 conditional sums to 1 before retraining",
    Math.abs(mcLmSumBefore - 1) < 1e-6, mcLmSumBefore);
  mcLmCheck("30 conditional sums to 1 after retraining",
    Math.abs(mcLmSumAfter - 1) < 1e-6, mcLmSumAfter);
  mcLmCheck("31 unseen context also sums to 1",
    Math.abs(mcLmSumCtx(mcLmModel, "zzqx", "wibble") - 1) < 1e-6,
    mcLmSumCtx(mcLmModel, "zzqx", "wibble"));

  /* --- 32-35: PRNG and misc -------------------------------------------- */
  mcLmCheck("32 mcRng is in [0,1)", (function () {
    const r = mcRng(42);
    for (let i = 0; i < 1000; i++) { const v = r(); if (!(v >= 0 && v < 1)) return false; }
    return true;
  })());
  mcLmCheck("33 mcRng is seed-deterministic", (function () {
    const a = mcRng(7), b = mcRng(7);
    for (let i = 0; i < 50; i++) if (a() !== b()) return false;
    return true;
  })());
  mcLmCheck("34 mcRng differs across seeds", mcRng(1)() !== mcRng(2)());
  mcLmCheck("35 tokenizer keeps compounds intact",
    mcLmTokenize("Risk-off: U.S. GDP up 3.5% to $1.2bn!").join("|") === "risk-off|u.s|gdp|up|3.5%|to|$1.2bn",
    mcLmTokenize("Risk-off: U.S. GDP up 3.5% to $1.2bn!").join("|"));
  mcLmCheck("36 training is incremental, not batch", (function () {
    const m = mcLmNew();
    mcLmTrain(m, "oil prices climb on supply worries");
    const t1 = mcLmStats(m).tokens;
    mcLmTrain(m, "oil prices fall on demand worries");
    return mcLmStats(m).tokens > t1 && t1 > 0;
  })());
  mcLmCheck("37 multi-sentence document trains as separate sequences", (function () {
    const m = mcLmNew();
    mcLmTrain(m, "Rates hold steady. Shares rally.");
    // "steady shares" must NOT be a bigram — the sentence boundary blocks it.
    const bm = m.bi.get("steady");
    return !!bm && !bm.has("shares") && bm.has(mcLmEOS);
  })());
  mcLmCheck("38 generate terminates on a degenerate single-token model", (function () {
    const m = mcLmNew();
    mcLmTrain(m, "wire");
    const g = mcLmGenerate(m, { rng: mcRng(3), maxWords: 14 });
    return typeof g === "string" && g.split(/\s+/).filter(Boolean).length <= 14;
  })());
  // Own model: garbage input must not pollute the corpus the other checks and
  // the printed numbers below are measured against.
  mcLmCheck("39 null/garbage input does not throw", (function () {
    try {
      const m = mcLmNew();
      for (let i = 0; i < mcLmCorpus.length; i++) mcLmTrain(m, mcLmCorpus[i]);
      mcLmTrain(m, null);
      mcLmTrain(m, undefined);
      mcLmTrain(m, 12345);
      mcLmTrain(m, { toString: function () { return "oil prices climb"; } });
      return mcLmPerplexity(m, null) >= 1 && typeof mcLmGenerate(m, {}) === "string";
    } catch (e) { return false; }
  })());

  // minWords is a guarantee, not a hint: a chain that walks into a token which
  // has only ever ended a headline must widen its candidates rather than hand
  // back a three-word stub. Swept because a single seed will not catch it.
  mcLmCheck("40 minWords holds across a temperature/seed sweep", (function () {
    const temps = [0.1, 0.5, 0.85, 1.5, 2.5];
    for (let t = 0; t < temps.length; t++) {
      for (let i = 0; i < 300; i++) {
        const g = mcLmGenerate(mcLmModel, { rng: mcRng(i * 7919 + 1), temperature: temps[t] });
        if (g.split(/\s+/).filter(Boolean).length < 5) return false;
      }
    }
    return true;
  })());
  mcLmCheck("41 custom minWords/maxWords window is respected", (function () {
    for (let i = 0; i < 300; i++) {
      const n = mcLmGenerate(mcLmModel, { rng: mcRng(i), minWords: 7, maxWords: 10, temperature: 0.9 })
        .split(/\s+/).filter(Boolean).length;
      if (n < 7 || n > 10) return false;
    }
    return true;
  })());
  mcLmCheck("42 no verbatim copy over a wide sweep", (function () {
    const temps = [0.1, 0.5, 0.85, 1.5];
    for (let t = 0; t < temps.length; t++) {
      for (let i = 0; i < 250; i++) {
        const g = mcLmGenerate(mcLmModel, { rng: mcRng(i * 7919 + 1), temperature: temps[t] });
        if (mcLmDocSet.has(mcLmNorm(g))) return false;
      }
    }
    return true;
  })());

  console.log("example headline:      " + mcLmGenerate(mcLmModel, { rng: mcRng(2026) }));
  console.log("example (seeded):      " + mcLmGenerate(mcLmModel, { seedText: "Central bank", rng: mcRng(11) }));
  console.log("perplexity in-domain:  " + mcLmPplIn.toFixed(3) + "  (" + mcLmInDomain + ")");
  console.log("perplexity out-domain: " + mcLmPplOut.toFixed(3) + "  (" + mcLmOutDomain + ")");
  console.log("stats:                 " + JSON.stringify(mcLmStats(mcLmModel)));

  if (mcLmFailures.length > 0) {
    for (let i = 0; i < mcLmFailures.length; i++) console.error("FAIL " + mcLmFailures[i]);
    console.error("FAIL: " + mcLmPassCount + " passed, " + mcLmFailures.length + " failed");
    process.exit(1);
  }
  console.log("PASS: " + mcLmPassCount + "/" + mcLmPassCount + " assertions passed");
}
