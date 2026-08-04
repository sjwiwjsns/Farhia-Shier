/* =====================================================================
 * mcPal — fuzzy command-palette matcher + chat-history search index.
 *
 * Script-scope only: no modules, no IIFE, no bundler. Every top-level
 * name carries the `mcPal` prefix because the host app already owns
 * ~320 `mc*` identifiers in the same global scope; the extra three
 * letters are the whole collision-avoidance strategy.
 *
 * Two independent engines live here:
 *   1. mcPalScore / mcPalFilter / mcPalHighlight — interactive subsequence
 *      matching for a command palette (small N, must feel instant).
 *   2. mcPalIndex / mcPalSearch / mcPalRecent — an inverted index + BM25
 *      over chat history (large N, built once, queried often).
 * They share only the HTML escaper, deliberately: one escaping code path
 * means one place an injection could ever slip in.
 * ===================================================================== */


/* ---------------------------------------------------------------------
 * Tuning constants.
 *
 * These are ranking knobs, not physics. They were chosen so that the
 * relationships we actually care about hold with comfortable margins:
 *   start-of-string > word-boundary > interior character
 *   consecutive run > scattered characters
 *   short target    > long target (same match quality)
 * Anything that changes them should be re-checked against the self-test
 * at the bottom, which pins those relationships as assertions.
 * ------------------------------------------------------------------- */
const mcPalTuning = {
  startBonus: 45,        // match at index 0 — the strongest signal a user can give
  boundaryBonus: 30,     // match right after a separator, or on a camelCase hump
  consecBonus: 25,       // match immediately after the previous match
  caseBonus: 4,          // exact-case match: a nudge, never a decision
  strayPenalty: 14,      // matched an interior character: cheap-looking match
  gapPenalty: 2,         // per skipped character between two matches
  gapPenaltyMax: 20,     // capped, so one huge gap can't dwarf everything else
  leadPenalty: 3,        // per character before the first match
  leadPenaltyMax: 9,     // also capped: "matched late" is bad, not fatal
  lenWeight: 200,        // shorter-target reward: lenWeight / (len + lenBase)
  lenBase: 8,
  maxAnchors: 24,        // restart budget (see mcPalScore's trade-off note)
  maxTargetLen: 512,     // palette labels are short; refuse to scan essays
  snippetWidth: 140,     // visible characters in a search-result snippet
  snippetSnap: 24        // how far we'll shrink a snippet to avoid cutting a word
};

/* BM25 parameters. k1/b are the textbook defaults the spec asks for.
 * idfFloor is the negative-IDF guard: the classic Robertson IDF goes
 * negative once a term appears in more than ~half the corpus, which
 * would make a *more* frequent term subtract score. We clamp instead. */
const mcPalBM25 = {
  k1: 1.5,
  b: 0.75,
  idfFloor: 1e-3,
  phraseWeight: 1.6,     // terms that participated in a satisfied phrase count for more
  phraseBonus: 2.0       // flat-ish bonus per doc for matching the phrase at all
};

/* Characters that start a new "word" for boundary-bonus purposes. */
const mcPalSeparatorRe = /[\s\-_./\\:,;|()[\]{}<>@#+*~'"!?=&$]/;

/* One definition of "what a token is", shared by the tokenizer and the
 * index builder so the two can never drift apart. It lives here as a
 * source string, not a RegExp, because every use has to compile its own
 * object: a /g/ regex carries lastIndex between uses, and sharing one
 * across calls is a nasty, intermittent bug to chase. */
const mcPalTokenPattern = "[\\p{L}\\p{N}][\\p{L}\\p{N}_'’]*";

/* A deliberately small stoplist (classic English core). Small on purpose:
 * an aggressive stoplist destroys phrase queries and short questions,
 * which are exactly what people type into a chat-history search. */
const mcPalStopwords = new Set([
  "a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in",
  "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the",
  "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"
]);

/* The full escape map. `&` must be first in intent (the regex handles
 * ordering for us) or we'd double-escape our own entities. */
const mcPalEscapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "`": "&#96;"
};


/* =====================================================================
 * HTML escaping
 * ===================================================================== */

/**
 * mcPalEscape(text) -> string
 *
 * Our own escaper — no innerHTML, no DOM, no library. Backtick and
 * single-quote are included even though this output lands in element
 * text, because callers have a habit of eventually splicing it into an
 * attribute, and an escaper that is only correct in one context is a
 * trap waiting to be sprung.
 */
function mcPalEscape(text) {
  if (text === null || text === undefined) return "";
  return String(text).replace(/[&<>"'`]/g, function (ch) {
    return mcPalEscapeMap[ch];
  });
}


/* =====================================================================
 * Fuzzy subsequence matching
 * ===================================================================== */

/**
 * mcPalIsBoundaryAt(text, i) -> boolean
 *
 * True when index `i` begins a word: start of string, first character
 * after a separator, or a camelCase / snake-to-caps hump.
 */
function mcPalIsBoundaryAt(text, i) {
  if (i <= 0) return true;
  const prev = text.charAt(i - 1);
  const cur = text.charAt(i);
  if (mcPalSeparatorRe.test(prev)) return true;
  // camelCase hump: a lowercase-capable character followed by an
  // uppercase-capable one. Comparing against toUpper/toLower is a cheap
  // unicode-aware "has case, and it is this one" test.
  if (prev !== prev.toUpperCase() && cur !== cur.toLowerCase()) return true;
  // digit -> letter also reads as a new word ("v2Beta", "step3Run")
  if (prev >= "0" && prev <= "9" && !(cur >= "0" && cur <= "9") && cur.toLowerCase() !== cur.toUpperCase()) return true;
  return false;
}

/**
 * mcPalScoreRun — score one already-established alignment.
 * Split out so the anchor loop stays readable and so every bonus in the
 * spec has exactly one line you can point at.
 */
function mcPalScoreRun(query, target, positions) {
  let score = 0;

  // (a) PENALTY: how much junk we had to skip before matching anything.
  score -= Math.min(positions[0] * mcPalTuning.leadPenalty, mcPalTuning.leadPenaltyMax);

  for (let k = 0; k < positions.length; k++) {
    const i = positions[k];
    let consecutive = false;

    if (k > 0) {
      const gap = i - positions[k - 1] - 1;
      if (gap === 0) {
        // (b) BONUS: consecutive run of matched characters.
        score += mcPalTuning.consecBonus;
        consecutive = true;
      } else {
        // (c) PENALTY: long unmatched gap, capped.
        score -= Math.min(gap * mcPalTuning.gapPenalty, mcPalTuning.gapPenaltyMax);
      }
    }

    if (i === 0) {
      // (d) BONUS: match at the very start of the target.
      score += mcPalTuning.startBonus;
    } else if (mcPalIsBoundaryAt(target, i)) {
      // (e) BONUS: word boundary (after space/-/_/./ or camelCase hump).
      score += mcPalTuning.boundaryBonus;
    } else if (!consecutive) {
      // Interior character that isn't continuing a run: this is the
      // "cow matches crypto wire" case, and it is what makes a tighter
      // query out-rank a longer sloppier one.
      score -= mcPalTuning.strayPenalty;
    }

    // (f) BONUS: exact-case agreement. Small, so it only breaks ties.
    if (target.charAt(i) === query.charAt(k)) score += mcPalTuning.caseBonus;
  }

  // (g) BONUS: shorter target. Hyperbolic rather than linear so the
  // difference between 8 and 20 characters matters and the difference
  // between 200 and 400 does not.
  score += Math.round(mcPalTuning.lenWeight / (target.length + mcPalTuning.lenBase));

  return score;
}

/**
 * mcPalScore(query, target) -> { score, positions } | null
 *
 * Case-insensitive subsequence match. Returns null when `query` is not a
 * subsequence of `target`. `positions` are UTF-16 code-unit indices into
 * the ORIGINAL target, strictly ascending, so mcPalHighlight can bold them.
 *
 * GREEDY vs OPTIMAL — the trade-off, stated plainly:
 *   The optimal alignment needs Needleman–Wunsch-style DP, O(|q|·|t|) time
 *   *and* O(|q|·|t|) memory, because a locally worse match can enable a
 *   better run later. We don't do that. We take every occurrence of the
 *   first query character as an anchor (capped at maxAnchors), run a
 *   plain forward-greedy match from each, and keep the best-scoring one.
 *   That fixes the failure mode people actually notice — "war" preferring
 *   the middle of "software" over the start of "warranty" — at a cost of
 *   O(anchors · |t|) with a tiny constant and zero allocation per anchor.
 *   It can still miss an exotic optimum (a better run reachable only by
 *   delaying a *middle* character). At palette scale — a few hundred
 *   items, labels under ~60 characters, re-run on every keystroke — that
 *   miss is invisible and the DP's allocation churn is not. If this ever
 *   feeds a large corpus instead of a palette, revisit.
 */
function mcPalScore(query, target) {
  if (query === null || query === undefined) return null;
  if (target === null || target === undefined) return null;

  const q = String(query);
  const rawTarget = String(target);
  // The empty query is a subsequence of everything — say so honestly
  // rather than returning null, which callers would read as "no match".
  if (q.length === 0) return { score: 0, positions: [] };

  // Long targets are truncated for the *search*, not for the result:
  // any position we return is still valid in the original string.
  const t = rawTarget.length > mcPalTuning.maxTargetLen
    ? rawTarget.slice(0, mcPalTuning.maxTargetLen)
    : rawTarget;
  if (t.length < q.length) return null;

  // toLowerCase is locale-independent here (no toLocaleLowerCase) so a
  // Turkish locale can't change which items match. Deliberate.
  const lq = q.toLowerCase();
  const lt = t.toLowerCase();
  const first = lq.charAt(0);

  let best = null;
  let anchors = 0;

  for (let start = 0; start <= t.length - q.length; start++) {
    if (lt.charAt(start) !== first) continue;
    if (++anchors > mcPalTuning.maxAnchors) break;

    // Forward-greedy from this anchor: take the nearest occurrence of
    // each subsequent query character.
    const positions = [start];
    let cursor = start + 1;
    let ok = true;
    for (let k = 1; k < lq.length; k++) {
      const want = lq.charAt(k);
      let found = -1;
      for (let i = cursor; i < lt.length; i++) {
        if (lt.charAt(i) === want) { found = i; break; }
      }
      if (found < 0) { ok = false; break; }
      positions.push(found);
      cursor = found + 1;
    }
    if (!ok) {
      // If greedy failed from the earliest anchor it will fail from every
      // later one too (later anchors can only see a suffix of what this
      // one saw), so there is nothing left to try.
      break;
    }

    const score = mcPalScoreRun(q, t, positions);
    if (best === null || score > best.score) best = { score: score, positions: positions };
  }

  return best;
}

/**
 * mcPalNormalizeKeys — accept ["title"] or [{name,weight}] or nothing.
 * With nothing, fall back to every string-valued own property of the
 * first usable item, so the function is useful before opts are wired up.
 */
function mcPalNormalizeKeys(keys, items) {
  const out = [];
  if (Array.isArray(keys)) {
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      if (typeof k === "string") {
        out.push({ name: k, weight: 1 });
      } else if (k && typeof k.name === "string") {
        const w = (typeof k.weight === "number" && isFinite(k.weight) && k.weight > 0) ? k.weight : 1;
        out.push({ name: k.name, weight: w });
      }
    }
  }
  if (out.length) return out;

  if (Array.isArray(items)) {
    for (let i = 0; i < items.length; i++) {
      const probe = items[i];
      if (!probe || typeof probe !== "object") continue;
      for (const name in probe) {
        if (!Object.prototype.hasOwnProperty.call(probe, name)) continue;
        const v = probe[name];
        if (typeof v === "string" || typeof v === "number") out.push({ name: name, weight: 1 });
      }
      break;
    }
  }
  return out;
}

/**
 * mcPalFilter(query, items, opts) -> [{ item, score, positions, field }]
 *
 * opts.keys : ["title"] or [{name:"title",weight:2}, {name:"hint",weight:1}]
 * opts.limit: optional cap on results
 *
 * An empty (or whitespace-only) query returns every item in its original
 * order — a palette should show its full menu before you type.
 *
 * Weighting note: raw scores can legitimately be negative (a genuinely
 * bad-but-valid match). Multiplying a negative by 2 would make a weighted
 * field *worse*, so we multiply positives and divide negatives. Both
 * branches are monotonically increasing in weight, which is the only
 * property "weight" needs to mean what people expect.
 */
function mcPalFilter(query, items, opts) {
  if (!Array.isArray(items)) return [];
  const o = opts || {};
  const keys = mcPalNormalizeKeys(o.keys, items);
  const q = (query === null || query === undefined) ? "" : String(query);
  const limit = (typeof o.limit === "number" && o.limit > 0) ? Math.floor(o.limit) : Infinity;

  if (q.trim() === "") {
    const all = [];
    const field = keys.length ? keys[0].name : null;
    for (let i = 0; i < items.length && i < limit; i++) {
      all.push({ item: items[i], score: 0, positions: [], field: field });
    }
    return all;
  }

  const scored = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item === null || item === undefined) continue;

    let bestScore = -Infinity;
    let bestPositions = null;
    let bestField = null;

    for (let k = 0; k < keys.length; k++) {
      const key = keys[k];
      const raw = (typeof item === "object") ? item[key.name] : item;
      if (typeof raw !== "string" && typeof raw !== "number") continue;

      const hit = mcPalScore(q, String(raw));
      if (!hit) continue;

      const weighted = hit.score >= 0 ? hit.score * key.weight : hit.score / key.weight;
      if (weighted > bestScore) {
        bestScore = weighted;
        bestPositions = hit.positions;
        bestField = key.name;
      }
    }

    if (bestPositions) {
      scored.push({ item: item, score: bestScore, positions: bestPositions, field: bestField, _i: i });
    }
  }

  // Explicit index tiebreak rather than trusting sort stability — it is
  // one subtraction and it makes the ordering contract testable.
  scored.sort(function (a, b) {
    return (b.score - a.score) || (a._i - b._i);
  });

  const out = [];
  for (let i = 0; i < scored.length && i < limit; i++) {
    out.push({
      item: scored[i].item,
      score: scored[i].score,
      positions: scored[i].positions,
      field: scored[i].field
    });
  }
  return out;
}

/**
 * mcPalHighlight(text, positions) -> HTML string
 *
 * SECURITY: this is the one function in the file whose output is meant to
 * be handed to innerHTML, so it is the one place an injection could slip
 * in. The rule it enforces is: escape FIRST, per character, then insert
 * our own <mark> tags between already-escaped characters. We never build
 * a raw string and escape it afterwards, and we never let caller data
 * reach the output un-escaped — `positions` are only ever used as
 * integer indices, never interpolated. Anything a caller puts in `text`
 * comes out as text.
 */
function mcPalHighlight(text, positions) {
  if (text === null || text === undefined) return "";
  const s = String(text);
  if (!Array.isArray(positions) || positions.length === 0) return mcPalEscape(s);

  const marked = new Uint8Array(s.length);
  for (let i = 0; i < positions.length; i++) {
    const p = positions[i];
    if (typeof p !== "number" || !isFinite(p)) continue;
    const idx = Math.floor(p);
    if (idx < 0 || idx >= s.length) continue;
    marked[idx] = 1;
  }

  // Never let a <mark> boundary land between the halves of a surrogate
  // pair — that would split an astral character across two elements.
  for (let i = 0; i < s.length - 1; i++) {
    const c = s.charCodeAt(i);
    if (c >= 0xd800 && c <= 0xdbff) {
      const n = s.charCodeAt(i + 1);
      if (n >= 0xdc00 && n <= 0xdfff && (marked[i] || marked[i + 1])) {
        marked[i] = 1;
        marked[i + 1] = 1;
      }
    }
  }

  let out = "";
  let open = false;
  for (let i = 0; i < s.length; i++) {
    if (marked[i] && !open) { out += "<mark>"; open = true; }
    else if (!marked[i] && open) { out += "</" + "mark>"; open = false; }
    const ch = s.charAt(i);
    const esc = mcPalEscapeMap[ch];
    out += (esc === undefined) ? ch : esc;
  }
  if (open) out += "</" + "mark>";
  return out;
}


/* =====================================================================
 * Chat-history search: tokenizer, inverted index, BM25
 * ===================================================================== */

/**
 * mcPalTokenize(text) -> [{ t, i, s, e }]
 *   t = lowercased term
 *   i = token ordinal within the document (counts EVERY token, including
 *       stopwords — phrase adjacency depends on that being unbroken)
 *   s,e = character offsets into the ORIGINAL text (for snippets)
 *
 * Unicode-aware via \p{L}\p{N}: "café", "münchen" and "日本語" all
 * tokenize sensibly. Lowercasing can change a string's length for some
 * scripts, which is exactly why offsets come from the pre-lowercase match.
 */
function mcPalTokenize(text) {
  const out = [];
  if (text === null || text === undefined) return out;
  const s = String(text);
  if (!s) return out;

  // Fresh regex per call: a shared /g/ regex carries lastIndex between
  // calls and that is a nasty, intermittent bug to chase.
  const re = new RegExp(mcPalTokenPattern, "gu");
  let m;
  let ordinal = 0;
  while ((m = re.exec(s)) !== null) {
    out.push({ t: m[0].toLowerCase(), i: ordinal++, s: m.index, e: m.index + m[0].length });
    if (re.lastIndex === m.index) re.lastIndex++; // paranoia against zero-width matches
  }
  return out;
}

/**
 * mcPalIndex(messages) -> inverted index
 *
 * messages: [{ id, role, content, ts }]
 * Shape:
 *   { N, avgdl, totalLen, docs: [{id, role, ts, content, len, ntok}],
 *     postings: Map<term, Map<docIndex, {tf, occ[]}>> }
 *
 * Map-of-Maps rather than array postings: phrase matching needs a
 * (term, doc) lookup, and a linear scan of a posting list there is what
 * turns a 5000-message search from "instant" into "noticeable".
 * Map also sidesteps the __proto__ / constructor key hazards of a plain
 * object used as a dictionary of user-supplied strings.
 *
 * `occ` is one flat array of (ordinal, startOffset, endOffset) triples in
 * ascending ordinal order: occ[3k] is the k-th occurrence's token ordinal
 * within the document, occ[3k+1] and occ[3k+2] its character offsets into
 * the original content. It holds exactly what three parallel pos/off/end
 * arrays used to hold, in one object instead of three, for one blunt
 * reason: a 5000-message index carries ~120k postings entries, so three
 * arrays apiece meant ~360k array objects — 79 MB retained and enough GC
 * churn to more than double the build time. One array apiece measured
 * 36 MB and roughly 2.4x faster with identical numbers in it.
 * mcPalHasPos indexes this array by triple, not by slot.
 *
 * The tokenizer is inlined into this loop rather than calling
 * mcPalTokenize, which is the other half of the same problem: 5000
 * messages materialised ~150k throwaway {t,i,s,e} objects, ~80ms of pure
 * allocation for data consumed immediately and never referenced again.
 * mcPalTokenize stays the readable entry point for the query path, where
 * N is a handful of terms and clarity is worth more than allocations.
 */
function mcPalIndex(messages) {
  const idx = {
    N: 0,
    avgdl: 0,
    totalLen: 0,
    docs: [],
    postings: new Map()
  };
  if (!Array.isArray(messages)) return idx;

  // One regex for the whole build. It never escapes this call, so the
  // cross-call lastIndex hazard mcPalTokenize guards against cannot arise;
  // we still reset per document because we drive it document by document.
  const re = new RegExp(mcPalTokenPattern, "gu");

  for (let m = 0; m < messages.length; m++) {
    const msg = messages[m];
    if (msg === null || msg === undefined) continue;

    const content = (msg.content === null || msg.content === undefined) ? "" : String(msg.content);
    const d = idx.docs.length;

    // One pass: scan, drop stopwords, post straight into the index. No
    // intermediate token list and no per-document staging Map — the
    // (term, doc) entry is the only thing that outlives the iteration.
    let indexed = 0;
    let ordinal = 0;
    let tok;
    re.lastIndex = 0;
    while ((tok = re.exec(content)) !== null) {
      const raw = tok[0];
      const start = tok.index;
      if (re.lastIndex === start) re.lastIndex++; // paranoia against zero-width matches
      const term = raw.toLowerCase();
      const at = ordinal++;                   // counts EVERY token, stopwords included,
      if (mcPalStopwords.has(term)) continue; // so phrase adjacency stays unbroken
      indexed++;

      let pl = idx.postings.get(term);
      if (pl === undefined) { pl = new Map(); idx.postings.set(term, pl); }
      let e = pl.get(d);
      if (e === undefined) { e = { tf: 0, occ: [] }; pl.set(d, e); }
      e.tf++;
      e.occ.push(at, start, start + raw.length);
    }

    idx.docs.push({
      id: (msg.id === null || msg.id === undefined) ? d : msg.id,
      role: (msg.role === null || msg.role === undefined) ? "" : String(msg.role),
      ts: msg.ts,
      content: content,
      len: indexed,
      ntok: ordinal
    });
    idx.totalLen += indexed;
  }

  idx.N = idx.docs.length;
  idx.avgdl = idx.N ? (idx.totalLen / idx.N) : 0;
  return idx;
}

/**
 * mcPalParseQuery(query) -> { terms, phrases, excluded, excludedPhrases }
 *
 * Hand-rolled because the grammar is three rules wide:
 *   "exact phrase"   all terms adjacent, in order (AND constraint)
 *   -excluded        drop any doc containing it
 *   bare terms       OR, scored by BM25
 * A `-"quoted phrase"` excludes on the phrase. Unterminated quotes
 * degrade to bare terms rather than swallowing the rest of the line.
 *
 * Phrase terms keep their slot index from BEFORE stopword removal, so
 * `"state of the art"` still matches: we require the surviving terms to
 * sit at exactly the relative offsets they had in the query, and the
 * document's token ordinals also count stopwords. The two line up.
 */
function mcPalParseQuery(query) {
  const out = { terms: [], phrases: [], excluded: [], excludedPhrases: [] };
  if (query === null || query === undefined) return out;
  const s = String(query);
  if (!s.trim()) return out;

  const re = /(-?)"([^"]*)"|(-?)([^\s"]+)/g;
  let m;
  while ((m = re.exec(s)) !== null) {
    const quoted = m[2] !== undefined;
    const negated = (quoted ? m[1] : m[3]) === "-";
    const body = quoted ? m[2] : m[4];
    if (!body) continue;

    const tokens = mcPalTokenize(body);
    if (!tokens.length) continue;

    if (quoted) {
      const phraseTerms = [];
      for (let i = 0; i < tokens.length; i++) {
        if (mcPalStopwords.has(tokens[i].t)) continue;
        phraseTerms.push({ t: tokens[i].t, i: tokens[i].i });
      }
      if (!phraseTerms.length) continue;
      const phrase = { raw: body, terms: phraseTerms };
      if (negated) out.excludedPhrases.push(phrase);
      else if (phraseTerms.length === 1) {
        // A one-word "phrase" is just a term; don't pay for adjacency logic.
        out.terms.push(phraseTerms[0].t);
      } else {
        out.phrases.push(phrase);
      }
    } else {
      for (let i = 0; i < tokens.length; i++) {
        const t = tokens[i].t;
        if (mcPalStopwords.has(t)) continue; // stopwords aren't in the index; asking for them is a no-op
        if (negated) out.excluded.push(t);
        else out.terms.push(t);
      }
    }
  }

  // De-dupe: repeating a term shouldn't double its weight.
  out.terms = Array.from(new Set(out.terms));
  out.excluded = Array.from(new Set(out.excluded));
  return out;
}

/**
 * Binary search for a token ordinal in an `occ` triple array (see
 * mcPalIndex). Returns the TRIPLE index k — so the offsets that go with
 * the hit are occ[k*3+1] and occ[k*3+2] — or -1. Ordinals live at every
 * third slot and ascend, so this is the same search as over a plain
 * position array, just striding.
 */
function mcPalHasPos(occ, want) {
  let lo = 0;
  let hi = (occ.length / 3) - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const v = occ[mid * 3];
    if (v === want) return mid;
    if (v < want) lo = mid + 1; else hi = mid - 1;
  }
  return -1;
}

/**
 * mcPalPhraseHits(index, phrase) -> Map<docIndex, [{s,e}]>
 *
 * Drives from the rarest term's posting list so we touch as few documents
 * as possible, then verifies that every other term sits at exactly the
 * ordinal offset the query demands.
 */
function mcPalPhraseHits(index, phrase) {
  const res = new Map();
  const terms = phrase.terms;
  if (!terms.length) return res;

  let driver = 0;
  let smallest = Infinity;
  for (let i = 0; i < terms.length; i++) {
    const pl = index.postings.get(terms[i].t);
    if (!pl) return res; // a missing term can never form the phrase
    if (pl.size < smallest) { smallest = pl.size; driver = i; }
  }

  const driverPl = index.postings.get(terms[driver].t);
  const lists = [];
  for (let i = 0; i < terms.length; i++) lists.push(index.postings.get(terms[i].t));

  driverPl.forEach(function (driverEntry, d) {
    const entries = [];
    for (let k = 0; k < terms.length; k++) {
      const e = (k === driver) ? driverEntry : lists[k].get(d);
      if (!e) return; // this doc lacks one of the terms entirely
      entries.push(e);
    }

    const found = [];
    for (let pi = 0; pi < driverEntry.occ.length; pi += 3) {
      const base = driverEntry.occ[pi] - terms[driver].i; // implied ordinal of phrase slot 0
      let ok = true;
      let startOff = -1;
      let endOff = -1;
      for (let k = 0; k < terms.length; k++) {
        const at = mcPalHasPos(entries[k].occ, base + terms[k].i);
        if (at < 0) { ok = false; break; }
        if (k === 0) startOff = entries[k].occ[at * 3 + 1];
        if (k === terms.length - 1) endOff = entries[k].occ[at * 3 + 2];
      }
      if (ok && startOff >= 0) found.push({ s: startOff, e: endOff });
    }
    if (found.length) res.set(d, found);
  });

  return res;
}

/**
 * mcPalIdf(N, df) — Robertson/Sparck-Jones IDF with +0.5 smoothing.
 * Goes negative once df > (N-1)/2; we clamp to a small positive floor so
 * an over-common term contributes ~nothing instead of actively subtracting
 * (which would rank a doc that *lacks* your word above one that has it).
 */
function mcPalIdf(N, df) {
  const idf = Math.log((N - df + 0.5) / (df + 0.5));
  return (isFinite(idf) && idf > mcPalBM25.idfFloor) ? idf : mcPalBM25.idfFloor;
}

/** BM25 term-frequency saturation with document-length normalization. */
function mcPalTfNorm(tf, dl, avgdl) {
  const k1 = mcPalBM25.k1;
  const b = mcPalBM25.b;
  return (tf * (k1 + 1)) / (tf + k1 * (1 - b + b * (dl / avgdl)));
}

/**
 * mcPalSnippet(text, ranges, width) -> escaped HTML with <mark>
 *
 * Picks the densest cluster of hit ranges that fits in `width`, centres a
 * window on it, shrinks the edges inward to whitespace so we don't cut a
 * word in half, and adds a real ellipsis where truncated.
 *
 * Edges only ever move INWARD, so the visible window is <= width and the
 * whole snippet is <= width + 2 (the two ellipsis characters). Escaping
 * and marking both go through mcPalHighlight — same single safe path.
 */
function mcPalSnippet(text, ranges, width) {
  if (text === null || text === undefined) return "";
  const s = String(text);
  const w = (typeof width === "number" && width > 0) ? Math.floor(width) : mcPalTuning.snippetWidth;

  if (!Array.isArray(ranges) || ranges.length === 0) {
    if (s.length <= w) return mcPalEscape(s);
    return mcPalEscape(s.slice(0, w)) + "…";
  }

  const rs = ranges.slice().sort(function (a, b) { return a.s - b.s; });

  // Sliding window over hit ranges: maximise hits inside `w` characters,
  // break ties toward the tighter cluster.
  let bestI = 0;
  let bestJ = 0;
  let bestCount = 0;
  let bestSpan = Infinity;
  let j = 0;
  for (let i = 0; i < rs.length; i++) {
    if (j < i) j = i;
    while (j + 1 < rs.length && rs[j + 1].e - rs[i].s <= w) j++;
    const count = j - i + 1;
    const span = rs[j].e - rs[i].s;
    if (count > bestCount || (count === bestCount && span < bestSpan)) {
      bestCount = count; bestSpan = span; bestI = i; bestJ = j;
    }
  }

  const centre = (rs[bestI].s + rs[bestJ].e) / 2;
  let start = Math.round(centre - w / 2);
  if (start + w > s.length) start = s.length - w;
  if (start < 0) start = 0;
  let end = Math.min(s.length, start + w);

  // Shrink inward to whitespace, but never past the hit we're showing.
  if (start > 0) {
    const limit = Math.min(start + mcPalTuning.snippetSnap, rs[bestI].s);
    let k = start;
    while (k < limit && !/\s/.test(s.charAt(k - 1))) k++;
    if (k < limit || (k === limit && k > start && /\s/.test(s.charAt(k - 1)))) start = k;
  }
  if (end < s.length) {
    const limit = Math.max(end - mcPalTuning.snippetSnap, rs[bestJ].e);
    let k = end;
    while (k > limit && !/\s/.test(s.charAt(k))) k--;
    if (k > limit) end = k;
  }
  if (end <= start) end = Math.min(s.length, start + w); // degenerate guard

  const win = s.slice(start, end);
  const positions = [];
  for (let i = 0; i < rs.length; i++) {
    const a = Math.max(rs[i].s, start);
    const bnd = Math.min(rs[i].e, end);
    for (let k = a; k < bnd; k++) positions.push(k - start);
  }

  return (start > 0 ? "…" : "") + mcPalHighlight(win, positions) + (end < s.length ? "…" : "");
}

/**
 * mcPalSearch(index, query, opts) -> [{ id, score, snippet, hits }]
 *
 * opts.limit — cap on returned rows.
 *
 * Semantics: phrases are AND constraints (they define the candidate set),
 * bare terms are OR and contribute BM25, `-term` removes documents
 * outright. A query that parses to nothing returns [] rather than the
 * whole corpus — "search for nothing" should not mean "match everything".
 */
function mcPalSearch(index, query, opts) {
  const out = [];
  if (!index || !index.postings || typeof index.postings.get !== "function") return out;
  if (!index.N || !Array.isArray(index.docs)) return out;

  const parsed = mcPalParseQuery(query);
  if (!parsed.terms.length && !parsed.phrases.length) return out;

  const o = opts || {};
  const limit = (typeof o.limit === "number" && o.limit > 0) ? Math.floor(o.limit) : Infinity;
  const N = index.N;
  const avgdl = index.avgdl > 0 ? index.avgdl : 1;

  // --- 1. Phrases are AND constraints, so resolve them first. -----------
  let allowed = null; // null == unconstrained
  const phraseHits = [];
  for (let p = 0; p < parsed.phrases.length; p++) {
    const hits = mcPalPhraseHits(index, parsed.phrases[p]);
    phraseHits.push(hits);
    const next = new Set();
    const prev = allowed;
    hits.forEach(function (v, d) {
      if (prev === null || prev.has(d)) next.add(d);
    });
    allowed = next;
    if (allowed.size === 0) return out; // no doc satisfies every phrase
  }

  const scores = new Map();
  const hitsByDoc = new Map();

  function mcPalAddScore(d, delta) {
    scores.set(d, (scores.get(d) || 0) + delta);
  }
  function mcPalAddHits(d, term, count, offsets) {
    let list = hitsByDoc.get(d);
    if (!list) { list = []; hitsByDoc.set(d, list); }
    list.push({ term: term, count: count, offsets: offsets });
  }
  function mcPalOffsetsOf(entry) {
    const occ = entry.occ;
    const offs = [];
    for (let i = 0; i < occ.length; i += 3) offs.push({ s: occ[i + 1], e: occ[i + 2] });
    return offs;
  }

  // --- 2. Bare terms: OR, plain BM25. ----------------------------------
  for (let i = 0; i < parsed.terms.length; i++) {
    const term = parsed.terms[i];
    const pl = index.postings.get(term);
    if (!pl) continue;
    const idf = mcPalIdf(N, pl.size);
    pl.forEach(function (entry, d) {
      if (allowed !== null && !allowed.has(d)) return;
      mcPalAddScore(d, idf * mcPalTfNorm(entry.tf, index.docs[d].len, avgdl));
      mcPalAddHits(d, term, entry.tf, mcPalOffsetsOf(entry));
    });
  }

  // --- 3. Phrase contributions, only for docs that satisfy the phrase. --
  for (let p = 0; p < parsed.phrases.length; p++) {
    const phrase = parsed.phrases[p];
    const hits = phraseHits[p];
    for (let ti = 0; ti < phrase.terms.length; ti++) {
      const pl = index.postings.get(phrase.terms[ti].t);
      if (!pl) continue;
      const idf = mcPalIdf(N, pl.size);
      hits.forEach(function (ranges, d) {
        if (!allowed.has(d)) return;
        const entry = pl.get(d);
        if (!entry) return;
        mcPalAddScore(d, idf * mcPalTfNorm(entry.tf, index.docs[d].len, avgdl) * mcPalBM25.phraseWeight);
      });
    }
    hits.forEach(function (ranges, d) {
      if (!allowed.has(d)) return;
      // Diminishing returns on repeat occurrences, same spirit as BM25's k1.
      mcPalAddScore(d, mcPalBM25.phraseBonus * Math.log(1 + ranges.length));
      mcPalAddHits(d, phrase.raw, ranges.length, ranges);
    });
  }

  // --- 4. Exclusions. --------------------------------------------------
  const banned = new Set();
  for (let i = 0; i < parsed.excluded.length; i++) {
    const pl = index.postings.get(parsed.excluded[i]);
    if (!pl) continue;
    pl.forEach(function (entry, d) { banned.add(d); });
  }
  for (let i = 0; i < parsed.excludedPhrases.length; i++) {
    mcPalPhraseHits(index, parsed.excludedPhrases[i]).forEach(function (v, d) { banned.add(d); });
  }

  // --- 5. Materialise, rank, snippet. ----------------------------------
  const rows = [];
  scores.forEach(function (score, d) {
    if (banned.has(d)) return;
    const doc = index.docs[d];
    const hits = hitsByDoc.get(d) || [];
    let ranges = [];
    for (let i = 0; i < hits.length; i++) ranges = ranges.concat(hits[i].offsets);
    rows.push({ d: d, id: doc.id, score: score, hits: hits, ranges: ranges });
  });

  rows.sort(function (a, b) { return (b.score - a.score) || (a.d - b.d); });

  for (let i = 0; i < rows.length && i < limit; i++) {
    const r = rows[i];
    out.push({
      id: r.id,
      score: r.score,
      snippet: mcPalSnippet(index.docs[r.d].content, r.ranges, mcPalTuning.snippetWidth),
      hits: r.hits
    });
  }
  return out;
}

/** Coerce a ts (number | Date | ISO string) to a comparable number. */
function mcPalTsOf(item) {
  if (!item || typeof item !== "object") return NaN;
  const ts = item.ts;
  if (typeof ts === "number") return isFinite(ts) ? ts : NaN;
  if (ts instanceof Date) return ts.getTime();
  if (typeof ts === "string") {
    const parsed = Date.parse(ts);
    return isNaN(parsed) ? NaN : parsed;
  }
  return NaN;
}

/**
 * mcPalRecent(items, n) -> most-recent-first slice.
 *
 * Stable for equal timestamps (explicit index tiebreak, not a trusted
 * sort). Items with a missing or unparseable ts sink to the bottom rather
 * than poisoning comparisons with NaN — NaN in a comparator silently
 * corrupts the whole ordering, which is a miserable bug to find.
 */
function mcPalRecent(items, n) {
  if (!Array.isArray(items)) return [];
  const count = (typeof n === "number" && isFinite(n)) ? Math.floor(n) : items.length;
  if (count <= 0) return [];

  const decorated = [];
  for (let i = 0; i < items.length; i++) {
    decorated.push({ item: items[i], i: i, ts: mcPalTsOf(items[i]) });
  }
  decorated.sort(function (a, b) {
    const av = a.ts;
    const bv = b.ts;
    const aBad = isNaN(av);
    const bBad = isNaN(bv);
    if (aBad !== bBad) return aBad ? 1 : -1;
    if (!aBad) {
      if (av > bv) return -1;
      if (av < bv) return 1;
    }
    return a.i - b.i;
  });

  const out = [];
  for (let i = 0; i < decorated.length && i < count; i++) out.push(decorated[i].item);
  return out;
}

/**
 * mcPalVisibleLength(html) -> number of characters a reader actually sees.
 * Used by the self-test to size-check snippets: markup and entities are
 * bytes on the wire, not characters on the screen.
 */
function mcPalVisibleLength(html) {
  if (html === null || html === undefined) return 0;
  let s = String(html).replace(/<\/?mark>/g, "");
  s = s.replace(/&(?:amp|lt|gt|quot|#39|#96);/g, "x");
  return s.length;
}


/* =====================================================================
 * Self-test. Node only — `typeof module` is undefined in the browser, so
 * this block is dead code once pasted into the host page.
 * ===================================================================== */
if (typeof module !== "undefined" && require.main === module) {
  let mcPalPass = 0;
  let mcPalFail = 0;
  const mcPalFailures = [];

  const mcPalOk = function (name, cond, detail) {
    if (cond) {
      mcPalPass++;
    } else {
      mcPalFail++;
      mcPalFailures.push(name + (detail === undefined ? "" : "  [" + detail + "]"));
    }
  };

  /* ---- fuzzy matching ---------------------------------------------- */
  const mcPalWmp = mcPalScore("wmp", "war map");
  mcPalOk("1  wmp matches 'war map'", mcPalWmp !== null);
  mcPalOk("2  wmp positions are [0,4,6]", mcPalWmp && mcPalWmp.positions.join(",") === "0,4,6", mcPalWmp && mcPalWmp.positions.join(","));
  mcPalOk("3  zzz does not match 'war map'", mcPalScore("zzz", "war map") === null);

  const mcPalWarStart = mcPalScore("war", "war map");
  const mcPalWarMid = mcPalScore("war", "software warranty");
  mcPalOk("4  both 'war' targets match", mcPalWarStart !== null && mcPalWarMid !== null);
  mcPalOk("5  start-of-string beats mid-word",
    mcPalWarStart.score > mcPalWarMid.score,
    mcPalWarStart.score + " vs " + mcPalWarMid.score);

  const mcPalCw = mcPalScore("cw", "crypto wire");
  const mcPalCow = mcPalScore("cow", "crypto wire");
  mcPalOk("6  'cw' matches 'crypto wire'", mcPalCw !== null);
  mcPalOk("7  'cow' matches 'crypto wire'", mcPalCow !== null);
  mcPalOk("8  word-boundary bonus: cw > cow",
    mcPalCw.score > mcPalCow.score,
    mcPalCw.score + " vs " + mcPalCow.score);

  const mcPalCry = mcPalScore("cry", "crypto");
  const mcPalCyo = mcPalScore("cyo", "crypto");
  mcPalOk("9  consecutive-run bonus: cry > cyo",
    mcPalCry.score > mcPalCyo.score,
    mcPalCry.score + " vs " + mcPalCyo.score);

  const mcPalAsc = function (positions) {
    for (let i = 1; i < positions.length; i++) if (positions[i] <= positions[i - 1]) return false;
    return true;
  };
  mcPalOk("10 positions strictly ascending (wmp)", mcPalAsc(mcPalWmp.positions));
  mcPalOk("11 positions strictly ascending (cow)", mcPalAsc(mcPalCow.positions));
  mcPalOk("12 positions index the right characters", (function () {
    const t = "war map";
    for (let i = 0; i < mcPalWmp.positions.length; i++) {
      if (t.charAt(mcPalWmp.positions[i]).toLowerCase() !== "wmp".charAt(i)) return false;
    }
    return true;
  })());

  mcPalOk("13 exact case scores higher than mismatched case",
    mcPalScore("War", "War map").score > mcPalScore("war", "War map").score);
  mcPalOk("14 shorter target scores higher",
    mcPalScore("map", "map").score > mcPalScore("map", "map of the world").score);
  mcPalOk("15 camelCase hump is a boundary",
    mcPalScore("ob", "openBrowser").score > mcPalScore("oe", "openBrowser").score,
    mcPalScore("ob", "openBrowser").score + " vs " + mcPalScore("oe", "openBrowser").score);
  mcPalOk("16 anchor restart finds the later, better word",
    mcPalScore("war", "software warranty").positions[0] === 9,
    JSON.stringify(mcPalScore("war", "software warranty").positions));

  const mcPalEmptyQ = mcPalScore("", "abc");
  mcPalOk("17 empty query is a subsequence (score 0, no positions)",
    mcPalEmptyQ !== null && mcPalEmptyQ.score === 0 && mcPalEmptyQ.positions.length === 0);
  mcPalOk("18 empty target rejects a real query", mcPalScore("abc", "") === null);
  mcPalOk("19 mcPalScore(null, null) is null", mcPalScore(null, null) === null);
  mcPalOk("20 mcPalScore('a', null) is null", mcPalScore("a", null) === null);
  mcPalOk("21 mcPalScore(undefined, 'abc') is null", mcPalScore(undefined, "abc") === null);
  mcPalOk("22 unicode target matches", mcPalScore("cf", "café münchen") !== null);

  /* ---- mcPalFilter -------------------------------------------------- */
  const mcPalItems = [
    { title: "War Map", hint: "open the theatre map" },
    { title: "nothing here", hint: "War Map" },
    { title: "Crypto Wire", hint: "market feed" },
    { title: "Software Warranty", hint: "legal" }
  ];
  const mcPalKeys = [{ name: "title", weight: 2 }, { name: "hint", weight: 1 }];

  const mcPalRanked = mcPalFilter("war", mcPalItems, { keys: mcPalKeys });
  mcPalOk("23 filter returns matches", mcPalRanked.length >= 2);
  mcPalOk("24 title hit outranks equal hint hit",
    mcPalRanked[0].item === mcPalItems[0] && mcPalRanked[0].field === "title",
    mcPalRanked.map(function (r) { return r.field + ":" + Math.round(r.score); }).join(" "));
  mcPalOk("25 the hint-only item is ranked below the title item",
    mcPalRanked.findIndex(function (r) { return r.item === mcPalItems[1]; }) >
    mcPalRanked.findIndex(function (r) { return r.item === mcPalItems[0]; }));
  mcPalOk("26 filter rows carry usable positions",
    Array.isArray(mcPalRanked[0].positions) && mcPalRanked[0].positions.length === 3);

  const mcPalAll = mcPalFilter("", mcPalItems, { keys: mcPalKeys });
  mcPalOk("27 empty query returns everything", mcPalAll.length === mcPalItems.length);
  mcPalOk("28 empty query preserves original order", (function () {
    for (let i = 0; i < mcPalItems.length; i++) if (mcPalAll[i].item !== mcPalItems[i]) return false;
    return true;
  })());
  mcPalOk("29 no-match query returns []", mcPalFilter("qqqqqq", mcPalItems, { keys: mcPalKeys }).length === 0);
  mcPalOk("30 filter honours opts.limit", mcPalFilter("war", mcPalItems, { keys: mcPalKeys, limit: 1 }).length === 1);
  mcPalOk("31 filter(null, null) returns []", mcPalFilter(null, null).length === 0);
  mcPalOk("32 filter with no opts infers string keys", mcPalFilter("war", mcPalItems).length >= 2);
  mcPalOk("33 filter tolerates null items in the array",
    mcPalFilter("war", [null, undefined, mcPalItems[0]], { keys: mcPalKeys }).length === 1);

  /* ---- mcPalHighlight / mcPalEscape --------------------------------- */
  const mcPalDanger = "<" + "script>alert(1)<" + "/script> war";
  const mcPalMarked = mcPalHighlight(mcPalDanger, mcPalScore("war", mcPalDanger).positions);
  mcPalOk("34 highlight leaves no raw script tag", mcPalMarked.indexOf("<" + "script") === -1, mcPalMarked);
  mcPalOk("35 highlight escapes angle brackets", mcPalMarked.indexOf("&lt;") !== -1);
  mcPalOk("36 highlight emits <mark>", mcPalMarked.indexOf("<mark>") !== -1);
  mcPalOk("37 highlight marks the right run", mcPalMarked.indexOf("<mark>war</" + "mark>") !== -1, mcPalMarked);
  mcPalOk("38 highlight(null) is ''", mcPalHighlight(null, [0]) === "");
  mcPalOk("39 highlight with no positions just escapes",
    mcPalHighlight("a<b", []) === "a&lt;b");
  mcPalOk("40 highlight ignores out-of-range positions",
    mcPalHighlight("abc", [-3, 99, 1]) === "a<mark>b</" + "mark>c",
    mcPalHighlight("abc", [-3, 99, 1]));
  mcPalOk("41 escape covers quotes and ampersand",
    mcPalEscape("a&b\"c'd`e") === "a&amp;b&quot;c&#39;d&#96;e", mcPalEscape("a&b\"c'd`e"));
  mcPalOk("42 escape(null) is ''", mcPalEscape(null) === "");

  /* ---- tokenizer / index -------------------------------------------- */
  mcPalOk("43 tokenize(null) is []", mcPalTokenize(null).length === 0);
  mcPalOk("44 tokenize handles unicode", (function () {
    const toks = mcPalTokenize("café münchen 日本語");
    return toks.length === 3 && toks[0].t === "café" && toks[1].t === "münchen";
  })(), JSON.stringify(mcPalTokenize("café münchen 日本語").map(function (t) { return t.t; })));
  mcPalOk("45 tokenize offsets point into the original text", (function () {
    const src = "Alpha BETA";
    const toks = mcPalTokenize(src);
    return src.slice(toks[1].s, toks[1].e) === "BETA";
  })());
  mcPalOk("46 index(null) is empty but well-formed",
    mcPalIndex(null).N === 0 && mcPalIndex(null).postings instanceof Map);
  mcPalOk("47 index([]) is empty", mcPalIndex([]).N === 0);
  mcPalOk("48 index tolerates null messages and null content",
    mcPalIndex([null, { id: 1 }, { id: 2, content: null }]).N === 2);

  /* ---- BM25 --------------------------------------------------------- */
  const mcPalCorpus = [
    { id: "m1", role: "user", content: "alpha beta gamma delta epsilon", ts: 1000 },
    { id: "m2", role: "user", content: "alpha alpha gamma delta epsilon", ts: 2000 },
    { id: "m3", role: "assistant", content: "zeta eta theta iota kappa", ts: 3000 },
    { id: "m4", role: "assistant", content: "lambda mu nu xi omicron", ts: 4000 },
    { id: "m5", role: "user", content: "the interest rates rose sharply today", ts: 5000 },
    { id: "m6", role: "user", content: "interest in mortgage rates is falling", ts: 6000 },
    { id: "m7", role: "assistant", content: "pi rho sigma tau upsilon phi", ts: 7000 }
  ];
  const mcPalIdxA = mcPalIndex(mcPalCorpus);
  mcPalOk("49 index builds all docs", mcPalIdxA.N === 7);
  mcPalOk("50 stopwords are dropped from the index", !mcPalIdxA.postings.has("the"));

  const mcPalTf = mcPalSearch(mcPalIdxA, "alpha");
  mcPalOk("51 tf: doc with the term twice ranks first",
    mcPalTf.length === 2 && mcPalTf[0].id === "m2",
    JSON.stringify(mcPalTf.map(function (r) { return r.id + ":" + r.score.toFixed(3); })));
  mcPalOk("52 tf: strictly higher score, not a tie",
    mcPalTf[0].score > mcPalTf[1].score);

  const mcPalPhrase = mcPalSearch(mcPalIdxA, '"interest rates"');
  mcPalOk("53 phrase matches only the adjacent doc",
    mcPalPhrase.length === 1 && mcPalPhrase[0].id === "m5",
    JSON.stringify(mcPalPhrase.map(function (r) { return r.id; })));
  mcPalOk("54 phrase excludes the far-apart doc",
    mcPalPhrase.every(function (r) { return r.id !== "m6"; }));
  mcPalOk("55 the same words unquoted match both docs",
    mcPalSearch(mcPalIdxA, "interest rates").length === 2);

  const mcPalExcl = mcPalSearch(mcPalIdxA, "rates -mortgage");
  mcPalOk("56 -word excludes docs containing it",
    mcPalExcl.length === 1 && mcPalExcl[0].id === "m5",
    JSON.stringify(mcPalExcl.map(function (r) { return r.id; })));
  mcPalOk("57 -word keeps the other doc", mcPalExcl[0].id === "m5");
  mcPalOk("58 -\"phrase\" excludes on adjacency",
    mcPalSearch(mcPalIdxA, 'rates -"interest rates"').map(function (r) { return r.id; }).join() === "m6");

  mcPalOk("59 hits carry term, count and offsets", (function () {
    const h = mcPalTf[0].hits[0];
    return h && h.term === "alpha" && h.count === 2 && h.offsets.length === 2;
  })());

  mcPalOk("60 IDF guard keeps an all-docs term non-negative", (function () {
    const common = mcPalIndex([
      { id: "a", content: "widget one" },
      { id: "b", content: "widget two" },
      { id: "c", content: "widget three" }
    ]);
    const res = mcPalSearch(common, "widget");
    return res.length === 3 && res.every(function (r) { return isFinite(r.score) && r.score > 0; });
  })(), JSON.stringify(mcPalSearch(mcPalIndex([{ id: "a", content: "widget one" }, { id: "b", content: "widget two" }, { id: "c", content: "widget three" }]), "widget").map(function (r) { return r.score; })));

  /* ---- snippets ----------------------------------------------------- */
  const mcPalLead = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ";
  const mcPalTail = " Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure";
  const mcPalLongIdx = mcPalIndex([
    { id: "long", content: mcPalLead + "quixotic <b>marker</b> here" + mcPalTail, ts: 1 }
  ]);
  const mcPalSnipRes = mcPalSearch(mcPalLongIdx, "quixotic");
  const mcPalSnip = mcPalSnipRes[0].snippet;
  mcPalOk("61 snippet contains <mark>", mcPalSnip.indexOf("<mark>") !== -1, mcPalSnip);
  mcPalOk("62 snippet marks the query term", mcPalSnip.indexOf("<mark>quixotic</" + "mark>") !== -1, mcPalSnip);
  mcPalOk("63 snippet visible length <= 180",
    mcPalVisibleLength(mcPalSnip) <= 180, "visible=" + mcPalVisibleLength(mcPalSnip));
  mcPalOk("64 snippet is HTML-escaped (no raw <b>)",
    mcPalSnip.indexOf("<b>") === -1 && mcPalSnip.indexOf("&lt;b&gt;") !== -1, mcPalSnip);
  mcPalOk("65 snippet is centred on the hit", (function () {
    const at = mcPalSnip.indexOf("<mark>");
    return at > 20 && at < mcPalSnip.length - 26;
  })(), "markAt=" + mcPalSnip.indexOf("<mark>") + " len=" + mcPalSnip.length);
  mcPalOk("66 snippet ellipsises both truncated ends",
    mcPalSnip.charAt(0) === "…" && mcPalSnip.charAt(mcPalSnip.length - 1) === "…", mcPalSnip);
  mcPalOk("67 short doc snippet has no ellipsis",
    mcPalSearch(mcPalIdxA, "kappa")[0].snippet.indexOf("…") === -1);

  /* ---- unicode search ------------------------------------------------ */
  const mcPalUniIdx = mcPalIndex([
    { id: "u1", content: "Reisen nach München im Café — 日本語 のテスト", ts: 1 },
    { id: "u2", content: "nothing relevant at all", ts: 2 }
  ]);
  const mcPalUni = mcPalSearch(mcPalUniIdx, "münchen");
  mcPalOk("68 unicode search hits the right doc", mcPalUni.length === 1 && mcPalUni[0].id === "u1",
    JSON.stringify(mcPalUni.map(function (r) { return r.id; })));
  mcPalOk("69 unicode search is case-insensitive",
    mcPalSearch(mcPalUniIdx, "MÜNCHEN").length === 1);
  mcPalOk("70 CJK token is searchable",
    mcPalSearch(mcPalUniIdx, "日本語").length === 1);

  /* ---- search robustness -------------------------------------------- */
  mcPalOk("71 search(null, 'x') is []", mcPalSearch(null, "x").length === 0);
  mcPalOk("72 search(index, '') is []", mcPalSearch(mcPalIdxA, "").length === 0);
  mcPalOk("73 search(index, null) is []", mcPalSearch(mcPalIdxA, null).length === 0);
  mcPalOk("74 search on an empty index is []", mcPalSearch(mcPalIndex([]), "alpha").length === 0);
  mcPalOk("75 no-match query is []", mcPalSearch(mcPalIdxA, "zzzznotthere").length === 0);
  mcPalOk("76 stopword-only query is []", mcPalSearch(mcPalIdxA, "the of and").length === 0);
  mcPalOk("77 unterminated quote degrades gracefully",
    mcPalSearch(mcPalIdxA, '"alpha').length === 2);
  mcPalOk("78 search honours opts.limit", mcPalSearch(mcPalIdxA, "alpha", { limit: 1 }).length === 1);
  mcPalOk("79 parseQuery(null) is empty", (function () {
    const p = mcPalParseQuery(null);
    return p.terms.length === 0 && p.phrases.length === 0 && p.excluded.length === 0;
  })());
  mcPalOk("80 parseQuery splits all three forms", (function () {
    const p = mcPalParseQuery('"interest rates" mortgage -zombie');
    return p.phrases.length === 1 && p.terms.join() === "mortgage" && p.excluded.join() === "zombie";
  })(), JSON.stringify(mcPalParseQuery('"interest rates" mortgage -zombie')));

  /* ---- mcPalRecent --------------------------------------------------- */
  const mcPalTimed = [
    { id: "a", ts: 10 }, { id: "b", ts: 30 }, { id: "c", ts: 20 },
    { id: "d", ts: 30 }, { id: "e" }
  ];
  const mcPalRec = mcPalRecent(mcPalTimed, 4);
  mcPalOk("81 recent is newest-first", mcPalRec.map(function (x) { return x.id; }).join() === "b,d,c,a",
    mcPalRec.map(function (x) { return x.id; }).join());
  mcPalOk("82 recent is stable for equal timestamps",
    mcPalRec[0].id === "b" && mcPalRec[1].id === "d");
  mcPalOk("83 recent sinks items with no timestamp",
    mcPalRecent(mcPalTimed, 5)[4].id === "e");
  mcPalOk("84 recent clamps n above length", mcPalRecent(mcPalTimed, 99).length === 5);
  mcPalOk("85 recent(items, 0) is []", mcPalRecent(mcPalTimed, 0).length === 0);
  mcPalOk("86 recent(null, 5) is []", mcPalRecent(null, 5).length === 0);
  mcPalOk("87 recent accepts ISO string timestamps",
    mcPalRecent([{ id: "x", ts: "2020-01-01T00:00:00Z" }, { id: "y", ts: "2024-01-01T00:00:00Z" }], 1)[0].id === "y");

  /* ---- scale --------------------------------------------------------- */
  const mcPalWords = ["alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta",
    "iota", "kappa", "lambda", "mu", "nu", "xi", "omicron", "interest", "rates", "mortgage",
    "quixotic", "widget", "ledger", "invoice", "settlement", "custody"];
  const mcPalBig = [];
  for (let i = 0; i < 5000; i++) {
    const parts = [];
    for (let w = 0; w < 30; w++) parts.push(mcPalWords[(i * 7 + w * 13) % mcPalWords.length]);
    mcPalBig.push({ id: "big-" + i, role: (i % 2) ? "user" : "assistant", content: parts.join(" "), ts: i });
  }

  const mcPalT0 = Date.now();
  const mcPalBigIdx = mcPalIndex(mcPalBig);
  const mcPalT1 = Date.now();
  const mcPalBigRes = mcPalSearch(mcPalBigIdx, '"interest rates" ledger -custody', { limit: 20 });
  const mcPalBigRes2 = mcPalSearch(mcPalBigIdx, "quixotic widget", { limit: 20 });
  const mcPalT2 = Date.now();
  const mcPalBuildMs = mcPalT1 - mcPalT0;
  const mcPalSearchMs = mcPalT2 - mcPalT1;

  mcPalOk("88 5000-message index builds", mcPalBigIdx.N === 5000);
  mcPalOk("89 5000-message search returns results", mcPalBigRes2.length > 0);
  mcPalOk("90 5000-message build+search under 300ms",
    (mcPalBuildMs + mcPalSearchMs) < 300, mcPalBuildMs + "ms build + " + mcPalSearchMs + "ms search");
  mcPalOk("91 large-corpus snippets stay bounded",
    mcPalBigRes2.every(function (r) { return mcPalVisibleLength(r.snippet) <= 180; }));
  mcPalOk("92 large-corpus results are sorted descending", (function () {
    for (let i = 1; i < mcPalBigRes2.length; i++) {
      if (mcPalBigRes2[i - 1].score < mcPalBigRes2[i].score) return false;
    }
    return true;
  })());
  mcPalOk("93 exclusion holds at scale",
    mcPalBigRes.every(function (r) { return r.snippet.indexOf("custody") === -1; }));

  /* ---- summary ------------------------------------------------------- */
  console.log("");
  console.log("mcPal self-test");
  console.log("  index build (5000 msgs): " + mcPalBuildMs + " ms");
  console.log("  two searches over it   : " + mcPalSearchMs + " ms");
  console.log("  total                  : " + (mcPalBuildMs + mcPalSearchMs) + " ms");
  console.log("");
  if (mcPalFail) {
    console.log("FAILURES:");
    for (let i = 0; i < mcPalFailures.length; i++) console.log("  x " + mcPalFailures[i]);
    console.log("");
  }
  console.log((mcPalFail ? "FAIL" : "PASS") + " — " + mcPalPass + " passed, " + mcPalFail + " failed, " +
    (mcPalPass + mcPalFail) + " assertions total");
  if (mcPalFail) process.exit(1);
}
