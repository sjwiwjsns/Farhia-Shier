/* ------------------------------------------------------------------
 * summarize.js — extractive summarisation (TextRank) + keyphrase
 * extraction (RAKE), plain script scope, zero dependencies.
 *
 * Everything is prefixed `mc` so this can be pasted into a host page
 * that already has its own tokeniser/stopwords without colliding. We
 * deliberately define our OWN private tokeniser and stopword set
 * rather than reaching for host globals: if the host later renames or
 * tunes theirs, our scores would silently drift.
 * ------------------------------------------------------------------ */

/* Sentinel that stands in for a "not a sentence end" period while we
 * scan. U+0001 never occurs in real prose, so round-tripping is safe. */
const mcDotSentinel = "\u0001";

/* Abbreviations whose trailing period is part of the token, not a
 * sentence boundary. Split into case-sensitive buckets on purpose:
 * matching "No." case-insensitively would swallow the genuine full
 * stop in "...said no." */
const mcAbbrevUpper = [
  "Dr", "Mr", "Mrs", "Ms", "Prof", "Rev", "Hon", "St", "Jr", "Sr",
  "Inc", "Corp", "Ltd", "Co", "Univ", "Dept", "Est", "Fig", "No", "Vol",
  "Sen", "Rep", "Gov", "Gen", "Col", "Lt", "Sgt", "Capt", "Cmdr", "Det",
  "Ave", "Rd", "Blvd", "Mt", "Ft", "Pl", "Sq",
  "Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Sept", "Oct", "Nov", "Dec",
  "Mon", "Tue", "Tues", "Wed", "Thu", "Thur", "Thurs", "Fri", "Sat", "Sun"
];
const mcAbbrevLower = ["vs", "etc", "al", "approx", "cf", "ca", "esp", "min", "max", "pp", "ed", "eds"];

/* Our own stopword list. Tuned for news copy: includes reporting
 * scaffolding ("said", "according") because those words otherwise
 * dominate RAKE phrase boundaries in the wrong direction. */
const mcStopwords = new Set([
  "a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any",
  "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between",
  "both", "but", "by", "can", "cannot", "could", "couldn't", "did", "didn't", "do", "does",
  "doesn't", "doing", "don't", "down", "during", "each", "either", "few", "for", "from",
  "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "her", "here",
  "hers", "herself", "him", "himself", "his", "how", "however", "i", "if", "in", "into", "is",
  "isn't", "it", "its", "itself", "just", "let", "let's", "like", "may", "me", "might", "more",
  "most", "much", "must", "my", "myself", "neither", "no", "nor", "not", "now", "of", "off",
  "on", "once", "one", "only", "or", "other", "ought", "our", "ours", "ourselves", "out",
  "over", "own", "per", "same", "shall", "shan't", "she", "should", "shouldn't", "since", "so",
  "some", "still", "such", "than", "that", "that's", "the", "their", "theirs", "them",
  "themselves", "then", "there", "these", "they", "this", "those", "though", "through", "to",
  "too", "under", "until", "up", "upon", "us", "very", "was", "wasn't", "we", "were", "weren't",
  "what", "when", "where", "whether", "which", "while", "who", "whom", "whose", "why", "will",
  "with", "within", "without", "won't", "would", "wouldn't", "yet", "you", "your", "yours",
  "yourself", "yourselves",
  /* reporting verbs / discourse glue — high frequency, near-zero topical value */
  "said", "says", "say", "according", "told", "added", "reported", "including", "amid"
]);

/* ------------------------------------------------------------------
 * Tokenisation
 * ------------------------------------------------------------------ */

/* Word characters we accept. Latin-1/Latin-Extended ranges are folded
 * in so "café" or "Zürich" survive as single tokens instead of being
 * chopped at the accent. */
const mcWordRe = /[a-z0-9À-ɏ][a-z0-9À-ɏ'’-]*/g;

function mcTokens(text) {
  if (typeof text !== "string") return [];
  const out = [];
  const matches = text.toLowerCase().match(mcWordRe);
  if (!matches) return out;
  for (let i = 0; i < matches.length; i++) {
    /* Trim trailing apostrophes/hyphens left over from "readers'" or
     * an em-dash-joined "plate—readers"; they carry no signal but do
     * split otherwise-identical tokens into separate vocabulary entries. */
    const t = matches[i].replace(/['’-]+$/, "");
    if (t) out.push(t);
  }
  return out;
}

/* Deliberately NOT Porter. Porter over-stems news vocabulary ("policy"
 * -> "polici") and the extra recall buys us nothing at sentence-graph
 * scale. This just collapses the plural/tense variants that would
 * otherwise make two paraphrases look unrelated. */
function mcStem(word) {
  const w = String(word);
  const n = w.length;
  if (n > 4 && w.slice(-3) === "ies") return w.slice(0, -3) + "y";
  if (n > 5 && w.slice(-3) === "ing") return w.slice(0, -3);
  if (n > 4 && w.slice(-2) === "ed" && w.slice(-3) !== "eed") return w.slice(0, -2);
  if (n > 4 && w.slice(-3) === "ses") return w.slice(0, -2);
  if (n > 3 && w.slice(-1) === "s" && w.slice(-2) !== "ss" && w.slice(-2) !== "us") return w.slice(0, -1);
  return w;
}

function mcIsStopword(word) {
  return mcStopwords.has(String(word).toLowerCase());
}

/* Lowercase, stemmed, stopword-free tokens — the representation every
 * scorer in this file agrees on. */
function mcContentTokens(text) {
  const toks = mcTokens(text);
  const out = [];
  for (let i = 0; i < toks.length; i++) {
    const t = toks[i];
    if (t.length < 2) continue;      // single letters are noise
    if (mcIsStopword(t)) continue;
    out.push(mcStem(t));
  }
  return out;
}

/* ------------------------------------------------------------------
 * Sentence splitting
 * ------------------------------------------------------------------ */

/* Why a naive /[.!?]/ split is wrong:
 *   - "The U.S. Fed"       -> 2 fragments, both meaningless
 *   - "Dr. Smith"          -> title torn off its name
 *   - "Acme Inc. disagreed"-> company suffix becomes a sentence end
 *   - "rose 3.5 percent"   -> a decimal point read as a full stop
 *   - 'He said "Stop!" and left.' -> terminator inside a quote
 * A period is only a boundary when it is *followed* by whitespace (or
 * end of text) AND is not part of a known abbreviation or number. So
 * we mask the non-boundary periods first, scan, then unmask. */
function mcProtectAbbreviations(text) {
  let s = text;

  /* Dotted acronyms/initialisms in one shot: U.S., e.g., i.e., a.m.,
   * Ph.D. — any run of letter+period pairs. Cheaper and broader than
   * enumerating them. */
  s = s.replace(/\b(?:[A-Za-z]\.){2,}/g, function (m) {
    return m.split(".").join(mcDotSentinel);
  });

  /* Word abbreviations. \b + explicit case so "No." (number) is
   * protected but "...answered no." is not. */
  s = s.replace(new RegExp("\\b(" + mcAbbrevUpper.join("|") + ")\\.", "g"), "$1" + mcDotSentinel);
  s = s.replace(new RegExp("\\b(" + mcAbbrevLower.join("|") + ")\\.", "gi"), "$1" + mcDotSentinel);

  /* Single-initial names: "J. R. Ewing". Only when the next non-space
   * char is another capital, which is what distinguishes an initial
   * from a one-letter sentence ending. */
  s = s.replace(/\b([A-Z])\.(?=\s+[A-Z])/g, "$1" + mcDotSentinel);

  /* Decimals and version-ish numbers: 3.5, 1.2.3 */
  s = s.replace(/(\d)\.(?=\d)/g, "$1" + mcDotSentinel);

  return s;
}

const mcTerminators = ".!?…";
const mcClosers = "\"')]”’»";

function mcSentences(text) {
  if (typeof text !== "string" || !text.trim()) return [];
  const src = mcProtectAbbreviations(text);
  const raw = [];
  let start = 0;

  for (let i = 0; i < src.length; i++) {
    const ch = src[i];

    if (mcTerminators.indexOf(ch) !== -1) {
      let j = i + 1;
      while (j < src.length && mcTerminators.indexOf(src[j]) !== -1) j++;   // "?!" / "..."
      while (j < src.length && mcClosers.indexOf(src[j]) !== -1) j++;       // trailing quote/bracket
      /* Boundary only if what follows is whitespace or nothing. This
       * is what keeps "3<sentinel>5" style leftovers and "foo.bar" intact. */
      if (j >= src.length || /\s/.test(src[j])) {
        raw.push(src.slice(start, j));
        start = j;
      }
      i = j - 1;
      continue;
    }

    if (ch === "\n") {
      /* A blank line is a hard boundary even with no punctuation —
       * headlines, bullet lists and pasted text rely on it. A single
       * newline is treated as ordinary whitespace (soft wrap). */
      let j = i, breaks = 0;
      while (j < src.length && /\s/.test(src[j])) {
        if (src[j] === "\n") breaks++;
        j++;
      }
      if (breaks >= 2) {
        raw.push(src.slice(start, i));
        start = j;
      }
      i = j - 1;
    }
  }
  if (start < src.length) raw.push(src.slice(start));

  const out = [];
  for (let k = 0; k < raw.length; k++) {
    const s = raw[k].split(mcDotSentinel).join(".").trim();
    /* Drop fragments with no alphanumeric content ("--", "   ") — they
     * would become zero-token graph nodes later. */
    if (s && /[A-Za-z0-9À-ɏ]/.test(s)) out.push(s);
  }
  return out;
}

/* ------------------------------------------------------------------
 * TF-IDF vectors (exported: the host app reuses these)
 * ------------------------------------------------------------------ */

/* df: Map token -> number of documents containing it. N: corpus size.
 * Returns Map token -> weight (unnormalised; mcCosine normalises). */
function mcTfidfVec(tokens, df, N) {
  const vec = new Map();
  if (!tokens || !tokens.length) return vec;
  const total = tokens.length;
  const tf = new Map();
  for (let i = 0; i < tokens.length; i++) {
    tf.set(tokens[i], (tf.get(tokens[i]) || 0) + 1);
  }
  const docCount = (typeof N === "number" && N > 0) ? N : 1;
  tf.forEach(function (count, token) {
    let d = 0;
    if (df instanceof Map) d = df.get(token) || 0;
    else if (df && typeof df === "object") d = df[token] || 0;
    /* Smoothed idf with the +1 floor: a token present in every
     * document still gets a small positive weight instead of 0, so a
     * single-document corpus doesn't collapse to the zero vector. */
    const idf = Math.log((docCount + 1) / (d + 1)) + 1;
    vec.set(token, (count / total) * idf);
  });
  return vec;
}

/* Accepts a Map or a plain object so host code can pass either. */
function mcVecEntries(v) {
  if (v instanceof Map) return v;
  const m = new Map();
  if (v && typeof v === "object") {
    const keys = Object.keys(v);
    for (let i = 0; i < keys.length; i++) m.set(keys[i], v[keys[i]]);
  }
  return m;
}

function mcCosine(a, b) {
  const va = mcVecEntries(a);
  const vb = mcVecEntries(b);
  if (!va.size || !vb.size) return 0;
  let dot = 0, na = 0, nb = 0;
  va.forEach(function (wa, token) {
    na += wa * wa;
    const wb = vb.get(token);
    if (wb !== undefined) dot += wa * wb;
  });
  vb.forEach(function (wb) { nb += wb * wb; });
  /* Zero-norm guard: an all-zero vector is legal input (a document of
   * pure stopwords) and must yield 0, not NaN. */
  if (na <= 0 || nb <= 0) return 0;
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

/* df over an array of token arrays. */
function mcDocFreq(docTokens) {
  const df = new Map();
  for (let i = 0; i < docTokens.length; i++) {
    const seen = new Set(docTokens[i]);
    seen.forEach(function (t) { df.set(t, (df.get(t) || 0) + 1); });
  }
  return df;
}

/* ------------------------------------------------------------------
 * TextRank
 * ------------------------------------------------------------------ */

/* Classic TextRank similarity: shared tokens normalised by
 * log|A| + log|B|, which discounts long sentences that overlap with
 * everything simply by being long.
 *
 * Two divide-by-zero traps live here, and both fire on real input:
 *   1. |A| or |B| == 0 (a sentence of nothing but stopwords)
 *   2. |A| == |B| == 1 -> log(1) + log(1) == 0
 * Naive implementations return Infinity/NaN and poison the whole
 * PageRank vector, because one NaN propagates to every node. */
function mcSentenceSimilarity(a, b) {
  if (!a.size || !b.size) return 0;
  const small = a.size <= b.size ? a : b;
  const large = small === a ? b : a;
  let shared = 0;
  small.forEach(function (t) { if (large.has(t)) shared++; });
  if (!shared) return 0;
  const denom = Math.log(a.size) + Math.log(b.size);
  /* Fall back to plain Jaccard-ish scaling when the log denominator
   * degenerates to <= 0 (one-token sentences). Keeps the value finite
   * and on a comparable scale. */
  if (!(denom > 0)) return shared / (a.size + b.size);
  return shared / denom;
}

/* Weighted PageRank by power iteration.
 * `w` is an n x n symmetric matrix of similarities. */
function mcPageRank(w, n, damping, maxIter, epsilon) {
  const d = typeof damping === "number" ? damping : 0.85;
  const iterations = typeof maxIter === "number" ? maxIter : 40;
  const eps = typeof epsilon === "number" ? epsilon : 1e-5;
  let scores = new Array(n).fill(1 / n);

  /* Row sums precomputed once. A row summing to 0 is a "dangling"
   * sentence that shares no vocabulary with anything; its rank must be
   * redistributed uniformly rather than divided by its (zero) degree. */
  const rowSum = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let s = 0;
    for (let j = 0; j < n; j++) s += w[i][j];
    rowSum[i] = s;
  }

  for (let it = 0; it < iterations; it++) {
    const next = new Array(n).fill((1 - d) / n);
    let dangling = 0;
    for (let j = 0; j < n; j++) {
      if (rowSum[j] > 0) {
        const share = scores[j] / rowSum[j];
        for (let i = 0; i < n; i++) {
          if (w[j][i] > 0) next[i] += d * share * w[j][i];
        }
      } else {
        dangling += scores[j];
      }
    }
    if (dangling > 0) {
      const spread = (d * dangling) / n;
      for (let i = 0; i < n; i++) next[i] += spread;
    }
    let delta = 0;
    for (let i = 0; i < n; i++) delta += Math.abs(next[i] - scores[i]);
    scores = next;
    if (delta < eps) break;
  }

  /* Belt and braces: never hand a NaN back to the caller. */
  for (let i = 0; i < n; i++) {
    if (!isFinite(scores[i])) scores[i] = 1 / n;
  }
  return scores;
}

/* Returns the top `n` sentences in ORIGINAL DOCUMENT ORDER. Ranking
 * decides *which* sentences survive; it must not decide the order they
 * are read in — a summary that jumps from the aftermath back to the
 * cause reads as though the events happened that way. */
function mcTextRank(text, n) {
  const sentences = mcSentences(text);
  const want = Math.max(0, Math.floor(typeof n === "number" ? n : 3));
  if (!sentences.length || want === 0) return [];
  if (sentences.length === 1) {
    return [{ sentence: sentences[0], score: 1, index: 0 }];
  }

  const sets = sentences.map(function (s) { return new Set(mcContentTokens(s)); });
  const len = sentences.length;

  const w = new Array(len);
  for (let i = 0; i < len; i++) w[i] = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const sim = mcSentenceSimilarity(sets[i], sets[j]);
      const safe = isFinite(sim) && sim > 0 ? sim : 0;
      w[i][j] = safe;
      w[j][i] = safe;
    }
  }

  const scores = mcPageRank(w, len, 0.85, 40, 1e-5);

  const ranked = sentences.map(function (s, i) {
    return { sentence: s, score: scores[i], index: i };
  });
  /* Stable tie-break on index: with N identical sentences every score
   * is exactly 1/N, and we want the leading ones — arbitrary sort
   * order would make the output non-deterministic across engines. */
  ranked.sort(function (a, b) {
    if (b.score !== a.score) return b.score - a.score;
    return a.index - b.index;
  });

  const picked = ranked.slice(0, Math.min(want, len));
  picked.sort(function (a, b) { return a.index - b.index; });
  return picked;
}

/* ------------------------------------------------------------------
 * Centroid summary (story clusters)
 * ------------------------------------------------------------------ */

/* Given N short documents (e.g. headlines from one story cluster),
 * return the `n` most central by cosine to the TF-IDF centroid. Unlike
 * mcTextRank this returns MOST-CENTRAL-FIRST: the inputs are separate
 * documents with no inherent narrative order, so centrality is the
 * only meaningful ordering. `index` is carried so callers can map back. */
function mcCentroidSummary(texts, n) {
  if (!Array.isArray(texts) || !texts.length) return [];
  const want = Math.max(0, Math.floor(typeof n === "number" ? n : 3));
  if (want === 0) return [];

  const docTokens = texts.map(function (t) { return mcContentTokens(t); });
  const df = mcDocFreq(docTokens);
  const N = texts.length;
  const vecs = docTokens.map(function (toks) { return mcTfidfVec(toks, df, N); });

  /* L2-normalise before averaging so a long document cannot drag the
   * centroid toward itself purely on magnitude. */
  const centroid = new Map();
  for (let i = 0; i < vecs.length; i++) {
    let norm = 0;
    vecs[i].forEach(function (v) { norm += v * v; });
    norm = Math.sqrt(norm);
    if (!(norm > 0)) continue;
    vecs[i].forEach(function (v, t) {
      centroid.set(t, (centroid.get(t) || 0) + v / norm / N);
    });
  }

  const scored = texts.map(function (t, i) {
    return { text: t, score: mcCosine(vecs[i], centroid), index: i };
  });
  scored.sort(function (a, b) {
    if (b.score !== a.score) return b.score - a.score;
    return a.index - b.index;
  });
  return scored.slice(0, Math.min(want, scored.length));
}

/* ------------------------------------------------------------------
 * RAKE
 * ------------------------------------------------------------------ */

const mcMaxPhraseWords = 4;
const mcMaxMergedWords = 8;

/* Punctuation that terminates a candidate phrase. Split on runs of
 * anything that is not a word char, whitespace, or intra-word
 * apostrophe/hyphen — so "state-of-the-art" survives but "x, y" does not. */
const mcPhraseBreakRe = /[^a-z0-9À-ɏ'’\-\s]+/;

/* Turn text into per-chunk streams of {stop:boolean, tokens:[...]}
 * runs. Keeping the stopword runs (rather than discarding them) is
 * what makes the adjoining-phrase merge step possible later. */
function mcRakeStreams(text) {
  const streams = [];
  const chunks = String(text).toLowerCase().split(mcPhraseBreakRe);
  for (let c = 0; c < chunks.length; c++) {
    const toks = mcTokens(chunks[c]);
    if (!toks.length) continue;
    const runs = [];
    let cur = null;
    for (let i = 0; i < toks.length; i++) {
      const isStop = mcIsStopword(toks[i]) || toks[i].length < 2;
      if (!cur || cur.stop !== isStop) {
        cur = { stop: isStop, tokens: [] };
        runs.push(cur);
      }
      cur.tokens.push(toks[i]);
    }
    streams.push(runs);
  }
  return streams;
}

/* A candidate is rejected when it is longer than mcMaxPhraseWords (RAKE
 * degrades into whole-clause extraction otherwise) or when it is a
 * single weak word — a stopword that slipped through, a bare number, or
 * a two-letter fragment. Those inflate the degree table without ever
 * being useful output. */
function mcAcceptCandidate(tokens) {
  if (!tokens.length || tokens.length > mcMaxPhraseWords) return false;
  let contentful = false;
  for (let i = 0; i < tokens.length; i++) {
    if (!mcIsStopword(tokens[i])) contentful = true;
  }
  if (!contentful) return false;
  if (tokens.length === 1) {
    const t = tokens[0];
    if (t.length < 3) return false;
    if (/^\d+$/.test(t)) return false;
    if (mcIsStopword(t)) return false;
  }
  return true;
}

function mcRake(text, n) {
  const want = Math.max(0, Math.floor(typeof n === "number" ? n : 5));
  if (typeof text !== "string" || !text.trim() || want === 0) return [];

  const streams = mcRakeStreams(text);

  /* Pass 1 — collect accepted candidates. */
  const candidates = [];
  for (let s = 0; s < streams.length; s++) {
    const runs = streams[s];
    for (let r = 0; r < runs.length; r++) {
      if (runs[r].stop) continue;
      if (mcAcceptCandidate(runs[r].tokens)) candidates.push(runs[r].tokens);
    }
  }
  if (!candidates.length) return [];

  /* Pass 2 — word scores = degree / frequency, computed only over the
   * accepted candidate set (rejected clauses must not skew degrees).
   * degree(w) += phrase length for every phrase occurrence containing
   * w, which is the row sum of the RAKE co-occurrence matrix. */
  const freq = new Map();
  const degree = new Map();
  for (let i = 0; i < candidates.length; i++) {
    const toks = candidates[i];
    for (let j = 0; j < toks.length; j++) {
      const t = toks[j];
      freq.set(t, (freq.get(t) || 0) + 1);
      degree.set(t, (degree.get(t) || 0) + toks.length);
    }
  }
  const wordScore = new Map();
  freq.forEach(function (f, t) {
    wordScore.set(t, f > 0 ? (degree.get(t) || 0) / f : 0);
  });

  const scoreOf = function (toks) {
    let sum = 0;
    for (let i = 0; i < toks.length; i++) sum += wordScore.get(toks[i]) || 0;
    return sum;
  };

  const results = new Map();
  for (let i = 0; i < candidates.length; i++) {
    const phrase = candidates[i].join(" ");
    if (!results.has(phrase)) results.set(phrase, scoreOf(candidates[i]));
  }

  /* Pass 3 — adjoining keyphrases. Two candidates bridged by a short
   * stopword run ("department of motor vehicles") are really one
   * concept, but only if the pairing is repeated; a single occurrence
   * is far more likely to be incidental phrasing. */
  const pairCounts = new Map();
  const pairTokens = new Map();
  for (let s = 0; s < streams.length; s++) {
    const runs = streams[s];
    for (let r = 0; r + 2 < runs.length; r++) {
      const left = runs[r], mid = runs[r + 1], right = runs[r + 2];
      if (left.stop || !mid.stop || right.stop) continue;
      if (mid.tokens.length > 2) continue;                 // long gaps aren't one concept
      if (!mcAcceptCandidate(left.tokens) || !mcAcceptCandidate(right.tokens)) continue;
      const merged = left.tokens.concat(mid.tokens, right.tokens);
      if (merged.length > mcMaxMergedWords) continue;
      const key = merged.join(" ");
      pairCounts.set(key, (pairCounts.get(key) || 0) + 1);
      if (!pairTokens.has(key)) pairTokens.set(key, merged);
    }
  }
  pairCounts.forEach(function (count, key) {
    if (count < 2) return;                                  // "at least twice"
    /* Bridging stopwords score 0, so the merged score is exactly the
     * sum of the two member phrases — monotone, as RAKE intends. */
    results.set(key, scoreOf(pairTokens.get(key)));
  });

  const out = [];
  results.forEach(function (score, phrase) { out.push({ phrase: phrase, score: score }); });
  out.sort(function (a, b) {
    if (b.score !== a.score) return b.score - a.score;
    if (b.phrase.length !== a.phrase.length) return b.phrase.length - a.phrase.length;
    return a.phrase < b.phrase ? -1 : (a.phrase > b.phrase ? 1 : 0);
  });
  return out.slice(0, Math.min(want, out.length));
}

/* ------------------------------------------------------------------
 * Self-test (Node only; inert in the browser because `module` is
 * undefined there and && short-circuits before `require` is touched).
 * ------------------------------------------------------------------ */
if (typeof module !== "undefined" && require.main === module) {
  let mcPassCount = 0;
  const mcFailures = [];

  const mcCheck = function (name, cond, detail) {
    if (cond) {
      mcPassCount++;
      console.log("  PASS  " + name);
    } else {
      mcFailures.push(name + (detail ? " -> " + detail : ""));
      console.log("  FAIL  " + name + (detail ? " -> " + detail : ""));
    }
  };
  const mcNoNaN = function (arr) {
    return arr.every(function (r) { return typeof r.score === "number" && isFinite(r.score); });
  };

  console.log("mcSentences");
  const s1 = mcSentences("The U.S. Fed held rates. Dr. Smith of Acme Inc. disagreed. Prices rose 3.5 percent.");
  mcCheck("abbreviations + decimals -> exactly 3 sentences", s1.length === 3, JSON.stringify(s1));
  mcCheck("sentence 1 keeps U.S. intact", s1[0] === "The U.S. Fed held rates.", s1[0]);
  mcCheck("sentence 2 keeps Dr. and Inc. intact", s1[1] === "Dr. Smith of Acme Inc. disagreed.", s1[1]);
  mcCheck("sentence 3 keeps the decimal intact", s1[2] === "Prices rose 3.5 percent.", s1[2]);
  mcCheck("empty string -> []", mcSentences("").length === 0);
  mcCheck("whitespace only -> []", mcSentences("   \n\t  \n ").length === 0);
  mcCheck("non-string -> []", mcSentences(null).length === 0);
  const s2 = mcSentences("Filings were due Jan. 5, e.g. before the vote. It slipped, i.e. missed. Ford vs. GM resumes Dec. 1.");
  mcCheck("e.g./i.e./vs./Jan./Dec. -> 3 sentences", s2.length === 3, JSON.stringify(s2));
  mcCheck("no-terminator headline -> 1 sentence", mcSentences("Plant explosion rocks Baytown").length === 1);
  mcCheck("blank line separates unpunctuated lines", mcSentences("First line\n\nSecond line").length === 2);

  console.log("mcTextRank");
  const para = [
    "The chemical plant on the east bank exploded shortly after midnight.",
    "Emergency crews evacuated four nearby neighbourhoods within an hour.",
    "The company said the blast originated in a storage tank.",
    "Regulators had cited the same storage tank twice in the past year.",
    "Residents described a shockwave that shattered windows a mile away.",
    "Air monitoring teams found no elevated readings by morning."
  ].join(" ");
  const tr = mcTextRank(para, 3);
  mcCheck("6-sentence paragraph -> 3 results", tr.length === 3, JSON.stringify(tr.map(function (r) { return r.index; })));
  let ascending = true;
  for (let i = 1; i < tr.length; i++) if (tr[i].index <= tr[i - 1].index) ascending = false;
  mcCheck("results are in document order (indices ascending)", ascending, JSON.stringify(tr.map(function (r) { return r.index; })));
  mcCheck("result shape is {sentence, score, index}", tr.every(function (r) {
    return typeof r.sentence === "string" && typeof r.score === "number" && typeof r.index === "number";
  }));
  mcCheck("no NaN scores on normal input", mcNoNaN(tr));
  const trBig = mcTextRank(para, 99);
  mcCheck("n larger than sentence count -> all sentences, no crash", trBig.length === 6, String(trBig.length));
  mcCheck("oversized n still in document order", trBig.every(function (r, i) { return r.index === i; }));
  const trOne = mcTextRank("Only one sentence here.", 3);
  mcCheck("single sentence -> 1 result, finite score", trOne.length === 1 && mcNoNaN(trOne), JSON.stringify(trOne));
  mcCheck("zero sentences -> []", mcTextRank("   ", 3).length === 0);
  mcCheck("n = 0 -> []", mcTextRank(para, 0).length === 0);
  const ident = "Rates held steady today. Rates held steady today. Rates held steady today. Rates held steady today. Rates held steady today.";
  const trIdent = mcTextRank(ident, 3);
  mcCheck("5 identical sentences -> 3 results, no NaN", trIdent.length === 3 && mcNoNaN(trIdent), JSON.stringify(trIdent));
  mcCheck("5 identical sentences -> equal scores (no divide-by-zero drift)",
    Math.abs(trIdent[0].score - trIdent[2].score) < 1e-9, JSON.stringify(trIdent.map(function (r) { return r.score; })));
  const trShort = mcTextRank("Yes. No. Maybe. Yes. Fine.", 2);
  mcCheck("one-token sentences (log(1)=0 trap) -> no NaN", mcNoNaN(trShort), JSON.stringify(trShort));
  const trDisjoint = mcTextRank("Alpha beetles migrate. Quantum tunnelling persists. Bakery ovens overheat.", 2);
  mcCheck("fully disjoint sentences (dangling nodes) -> no NaN", mcNoNaN(trDisjoint) && trDisjoint.length === 2, JSON.stringify(trDisjoint));

  console.log("mcCentroidSummary");
  const cluster = [
    "Chemical plant explosion in Baytown injures nine workers",
    "Nine injured as blast rips through Baytown chemical plant",
    "Baytown chemical plant blast prompts evacuation of nearby homes",
    "Investigators comb Baytown plant for cause of chemical explosion",
    "Teenage qualifier stuns top seed in five-set tennis thriller"
  ];
  const cent = mcCentroidSummary(cluster, 2);
  mcCheck("centroid summary returns n items", cent.length === 2, String(cent.length));
  mcCheck("off-topic tennis headline is NOT in the top 2",
    cent.every(function (r) { return r.text.indexOf("tennis") === -1; }),
    JSON.stringify(cent.map(function (r) { return r.text; })));
  mcCheck("centroid scores are finite and sorted descending",
    mcNoNaN(cent) && cent[0].score >= cent[1].score, JSON.stringify(cent.map(function (r) { return r.score; })));
  mcCheck("empty cluster -> []", mcCentroidSummary([], 3).length === 0);
  mcCheck("n larger than cluster size -> all items", mcCentroidSummary(cluster, 50).length === 5);

  console.log("mcRake");
  const rakeText = [
    "Across the county, automated licence plate readers now scan every vehicle that passes.",
    "Privacy advocates warn that automated licence plate readers create a permanent location record.",
    "The sheriff defended the automated licence plate readers, calling them routine police equipment.",
    "Council members asked whether the readers were ever audited."
  ].join(" ");
  const rk = mcRake(rakeText, 8);
  const top3 = rk.slice(0, 3).map(function (r) { return r.phrase; });
  mcCheck("multi-word target phrase surfaces in the top 3",
    top3.indexOf("automated licence plate readers") !== -1, JSON.stringify(top3));
  mcCheck("rake results have {phrase, score} shape and finite scores",
    rk.every(function (r) { return typeof r.phrase === "string" && isFinite(r.score); }));
  mcCheck("pure-stopword text yields no keyphrases",
    mcRake("the of and but it is on at to for with", 5).length === 0,
    JSON.stringify(mcRake("the of and but it is on at to for with", 5)));
  mcCheck("no returned candidate is a bare stopword",
    rk.every(function (r) { return !(r.phrase.split(" ").length === 1 && mcIsStopword(r.phrase)); }));
  const longRun = mcRake("Giant purple mechanical elephant statue parade thrilled crowds.", 5);
  mcCheck("candidates longer than 4 words are rejected",
    longRun.every(function (r) { return r.phrase.indexOf("giant purple mechanical elephant statue parade") === -1; }),
    JSON.stringify(longRun.map(function (r) { return r.phrase; })));
  const merged = mcRake("He works at the department of motor vehicles. She later left the department of motor vehicles.", 6);
  mcCheck("adjacent phrases co-occurring twice are merged",
    merged.some(function (r) { return r.phrase === "department of motor vehicles"; }),
    JSON.stringify(merged.map(function (r) { return r.phrase; })));
  mcCheck("empty text -> []", mcRake("", 5).length === 0);

  console.log("mcTfidfVec / mcCosine");
  const docs = ["storage tank blast", "storage tank inspection", "tennis final upset"];
  const dTok = docs.map(function (d) { return mcContentTokens(d); });
  const dfMap = mcDocFreq(dTok);
  const v0 = mcTfidfVec(dTok[0], dfMap, docs.length);
  const v2 = mcTfidfVec(dTok[2], dfMap, docs.length);
  mcCheck("mcTfidfVec returns a Map of positive weights",
    v0 instanceof Map && v0.size > 0 && Array.from(v0.values()).every(function (x) { return x > 0 && isFinite(x); }));
  mcCheck("mcCosine(v, v) === 1 within 1e-9", Math.abs(mcCosine(v0, v0) - 1) < 1e-9, String(mcCosine(v0, v0)));
  mcCheck("mcCosine of disjoint vectors === 0", mcCosine(v0, v2) === 0, String(mcCosine(v0, v2)));
  mcCheck("mcCosine with an empty vector === 0", mcCosine(v0, new Map()) === 0);
  mcCheck("related docs score above unrelated docs",
    mcCosine(v0, mcTfidfVec(dTok[1], dfMap, docs.length)) > mcCosine(v0, v2));
  mcCheck("mcCosine accepts plain objects too",
    Math.abs(mcCosine({ a: 1, b: 2 }, { a: 1, b: 2 }) - 1) < 1e-9);

  const total = mcPassCount + mcFailures.length;
  console.log("\n" + (mcFailures.length ? "FAIL" : "PASS") + ": " + mcPassCount + "/" + total + " assertions passed");
  if (mcFailures.length) {
    console.log("Failures:");
    mcFailures.forEach(function (f) { console.log("  - " + f); });
    process.exit(1);
  }
}
