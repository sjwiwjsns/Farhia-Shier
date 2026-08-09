/* =====================================================================
 * mcQy — search + alerting engine for the live news wire.
 *
 * Script-scope only: no modules, no bundler. Every top-level name carries
 * the `mcQy` prefix because the host app already owns ~320 `mc*` globals.
 *
 * Five layers, each usable on its own:
 *   1. mcQyParse      query text -> AST + a list of problems with offsets
 *   2. mcQyExplain    AST -> plain English, so the user can confirm we
 *                     understood them before they save the search
 *   3. mcQyEvaluate   AST + item -> {match, score, highlights}
 *   4. mcQyFacets     result set -> sidebar counts
 *   5. mcQyRunRules   rules + batch + state -> fired alerts (+ new state)
 *
 * Feed item shape (all fields optional, all hostile until proven otherwise):
 *   { id, t, text, url, src, cat, sev, sources[], sim, translated }
 *
 * Design rule that drives everything below: **the parser never throws and
 * never gives up**. A half-typed query is the normal case — the user is
 * still typing — so every error path yields the best AST we can build plus
 * a problem record the UI can underline. Refusing to search is not an
 * option we ever take.
 *
 * Pure functions over plain data. No DOM, no timers, no HTML, no clocks
 * except an explicit `opts.now` (with a documented fallback).
 * ===================================================================== */


/* ---------------------------------------------------------------------
 * 0. Caps and tuning
 * ------------------------------------------------------------------- */

/* Caps exist to bound pathological input, not to reject users. A pasted
 * 10 KB query must still work; a fuzzer pasting 10 MB must not wedge the
 * tab. Past a cap we truncate and record a problem. */
const mcQyMaxQueryChars = 65536;
const mcQyMaxTokens = 8192;
const mcQyMaxDepth = 48;        // 8-level nesting is the requirement; 48 is far
                                // past any human query and far under the stack.
const mcQyMaxTextChars = 200000;
const mcQyMaxTextTokens = 20000;
const mcQyMaxFuzzyLen = 64;     // Levenshtein is O(n*m); refuse silly-long fuzz.

const mcQyMsPer = { s: 1000, m: 60000, h: 3600000, d: 86400000, w: 604800000 };

/* Ranking knobs. These are editorial judgements, not physics:
 *  - halfLife 6h: a wire item is stale fast, but "stale" is not "worthless",
 *    hence minRecency — a perfect match from yesterday still outranks a
 *    weak match from a minute ago.
 *  - phrases outweigh loose terms 2:1 because a phrase is an explicit,
 *    expensive thing for the user to type; it is a strong intent signal.
 *  - field clauses score low (0.5) on purpose: they are filters. If they
 *    scored like terms, `src:reuters foo` would rank every Reuters item
 *    above a strong `foo` match from anyone else. */
const mcQyDefaults = {
  now: null,               // caller should pass it; see mcQyNow()
  halfLifeMs: 6 * 3600000,
  minRecency: 0.05,
  breakingSev: 4,          // is:breaking == sev >= 4 AND younger than an hour.
  breakingAgeMs: 3600000,  // Both are tunable because desks disagree.
  phraseBoost: 2.0,
  wildcardWeight: 0.6,     // a glob hit is weaker evidence than the word itself
  fuzzyPenalty: 0.25,      // per edit of distance
  fieldWeight: 0.5,
  negWeight: 0.1,          // a satisfied NOT is worth a token amount, not zero,
                           // so a pure-negation query still ranks by recency
  sevWeight: 0.06,
  sourcesWeight: 0.04,
  maxHighlights: 200,
  defaultOp: "and",
  /* Presentation options. These MUST be declared here even though nothing in
     the matcher reads them: mcQyOpts() copies only keys it already knows, so
     an option missing from this table is silently discarded rather than
     rejected. limit/offset/sort/facetTop were all being dropped that way, and
     a caller asking for page two got page one with no indication why. */
  limit: 0,                // 0 == no limit
  offset: 0,
  sort: "score",           // "score" | "time"
  facetTop: 0              // 0 == no roll-up into "(other)"
};

/* Stopwords: only used for story de-duplication signatures, never for
 * matching. Removing them from a *search* would break `is:"the one"`. */
const mcQyStop = (function () {
  const w = ("a an and are as at be been by for from has have he in is it its of on " +
    "or that the to was were will with after over into out up down new says said " +
    "amid than then this these those his her their they we you not but").split(" ");
  const m = Object.create(null);
  for (let i = 0; i < w.length; i++) m[w[i]] = 1;
  return m;
})();


/* ---------------------------------------------------------------------
 * 1. Small safe utilities
 * ------------------------------------------------------------------- */

/* String() can throw (null-prototype objects, throwing toString, Symbols in
 * some paths). Every string that reaches an output goes through here. */
function mcQyStr(v) {
  if (v === null || v === undefined) return "";
  if (typeof v === "string") return v;
  if (typeof v === "number") return Number.isFinite(v) ? String(v) : "";
  if (typeof v === "boolean") return v ? "true" : "false";
  try {
    const str = String(v);
    /* A plain object has no meaningful string form, and "[object Object]"
       would lex into two real search terms — a query the user never typed,
       silently returning results. Arrays and anything with a real toString
       still stringify, because ["kyiv","gaza"] genuinely is a query. */
    return str === "[object Object]" ? "" : str;
  } catch (e) { return ""; }
}

function mcQyNum(v, dflt) {
  if (typeof v === "number") return Number.isFinite(v) ? v : dflt;
  if (typeof v === "string" && v.length && v.length < 40) {
    const n = Number(v);
    if (Number.isFinite(n)) return n;
  }
  return dflt;
}

function mcQyInt(v, dflt) {
  const n = mcQyNum(v, null);
  return n === null ? dflt : Math.round(n);
}

function mcQyClamp(n, lo, hi) {
  if (!Number.isFinite(n)) return lo;
  return n < lo ? lo : (n > hi ? hi : n);
}

/* Unicode word regex, built once with a graceful fallback: if the engine
 * lacks \p{...} the whole merged bundle would fail to *parse* without this
 * guard, taking every other module down with it. */
const mcQyRe = (function () {
  try {
    const src = "[\\p{L}\\p{N}]+(?:['’][\\p{L}\\p{N}]+)*";
    new RegExp(src, "gu");
    return { word: src, chr: "[\\p{L}\\p{N}]", u: "u" };
  } catch (e) {
    const src = "[A-Za-z0-9\\u00c0-\\u024f\\u0370-\\u04ff\\u0590-\\u06ff\\u4e00-\\u9fff]+";
    return { word: src, chr: "[A-Za-z0-9\\u00c0-\\u024f\\u0370-\\u04ff\\u0590-\\u06ff\\u4e00-\\u9fff]", u: "" };
  }
})();
const mcQyCharRe = new RegExp("^" + mcQyRe.chr + "$", mcQyRe.u);

function mcQyIsWordChar(ch) {
  if (typeof ch !== "string" || ch.length === 0) return false;
  try { return mcQyCharRe.test(ch); } catch (e) { return false; }
}

/* Case-fold + strip combining marks so "Zelensky" finds "Želensky" and
 * "resume" finds "résumé". ASCII fast path because this runs per token per
 * item, and normalize() on a hot loop is measurable. */
function mcQyFold(s) {
  let x = mcQyStr(s);
  if (x.length === 0) return x;
  x = x.toLowerCase();
  let ascii = true;
  for (let i = 0; i < x.length; i++) { if (x.charCodeAt(i) > 127) { ascii = false; break; } }
  if (ascii) return x;
  if (typeof x.normalize === "function") {
    try { x = x.normalize("NFD").replace(/[̀-ͯ]/g, ""); } catch (e) { /* keep unfolded */ }
  }
  return x;
}

/* Word tokeniser with offsets — offsets are what make highlighting possible. */
function mcQyTokenizeText(text) {
  const s0 = mcQyStr(text);
  if (!s0) return [];
  const s = s0.length > mcQyMaxTextChars ? s0.slice(0, mcQyMaxTextChars) : s0;
  const re = new RegExp(mcQyRe.word, "g" + mcQyRe.u);
  const out = [];
  let m;
  while ((m = re.exec(s)) !== null) {
    if (m[0].length === 0) { re.lastIndex++; continue; }  // zero-width would spin forever
    out.push({ w: mcQyFold(m[0]), s: m.index, e: m.index + m[0].length });
    if (out.length >= mcQyMaxTextTokens) break;
  }
  return out;
}

/* Iterative glob. Deliberately NOT a RegExp: user patterns like `a*a*a*a*b`
 * compile to a regex that backtracks exponentially, and the query box is
 * exactly where a hostile pattern arrives. This is O(n*m) worst case. */
function mcQyGlob(pat, s) {
  if (typeof pat !== "string" || typeof s !== "string") return false;
  let p = 0, i = 0, star = -1, mark = 0;
  const pn = pat.length, sn = s.length;
  while (i < sn) {
    if (p < pn && (pat[p] === "?" || pat[p] === s[i])) { p++; i++; }
    else if (p < pn && pat[p] === "*") { star = p++; mark = i; }
    else if (star >= 0) { p = star + 1; i = ++mark; }
    else return false;
  }
  while (p < pn && pat[p] === "*") p++;
  return p === pn;
}

/* Bounded Levenshtein with early abandonment. Returns max+1 when it blows
 * the budget, so callers compare `<= max` and never see a huge number. */
function mcQyEditDistance(a, b, max) {
  if (typeof a !== "string" || typeof b !== "string") return max + 1;
  if (a === b) return 0;
  const la = a.length, lb = b.length;
  if (Math.abs(la - lb) > max) return max + 1;
  if (la > mcQyMaxFuzzyLen || lb > mcQyMaxFuzzyLen) return max + 1;
  let prev = new Array(lb + 1), cur = new Array(lb + 1);
  for (let j = 0; j <= lb; j++) prev[j] = j;
  for (let i = 1; i <= la; i++) {
    cur[0] = i;
    let best = cur[0];
    const ca = a.charCodeAt(i - 1);
    for (let j = 1; j <= lb; j++) {
      const cost = ca === b.charCodeAt(j - 1) ? 0 : 1;
      let v = prev[j - 1] + cost;
      const del = prev[j] + 1, ins = cur[j - 1] + 1;
      if (del < v) v = del;
      if (ins < v) v = ins;
      cur[j] = v;
      if (v < best) best = v;
    }
    if (best > max) return max + 1;
    const tmp = prev; prev = cur; cur = tmp;
  }
  return prev[lb] > max ? max + 1 : prev[lb];
}

function mcQyMergeRanges(list) {
  if (!Array.isArray(list) || list.length === 0) return [];
  const ok = [];
  for (let i = 0; i < list.length; i++) {
    const r = list[i];
    if (!r) continue;
    const s = mcQyInt(r.s, -1), e = mcQyInt(r.e, -1);
    if (s < 0 || e <= s) continue;
    ok.push({ s: s, e: e });
  }
  ok.sort(function (a, b) { return a.s - b.s || a.e - b.e; });
  const out = [];
  for (let i = 0; i < ok.length; i++) {
    const last = out[out.length - 1];
    if (last && ok[i].s <= last.e) { if (ok[i].e > last.e) last.e = ok[i].e; }
    else out.push(ok[i]);
  }
  return out;
}

function mcQyProblem(list, severity, code, message, start, end) {
  if (!Array.isArray(list)) return;
  if (list.length > 200) return;   // a fuzzer must not produce a 10k-entry list
  const s = Math.max(0, mcQyInt(start, 0));
  const e = Math.max(s, mcQyInt(end, s));
  list.push({ severity: severity, code: code, message: mcQyStr(message), start: s, end: e });
}

/* Quote a user value for display. Truncated so one 10 KB term cannot make
 * explain() unreadable, and never emits a bare undefined/NaN. */
function mcQyQuote(v) {
  let s = mcQyStr(v);
  if (s.length > 48) s = s.slice(0, 45) + "...";
  return '"' + s.replace(/"/g, "'") + '"';
}

function mcQyHumanMs(ms) {
  let n = mcQyNum(ms, 0);
  if (!Number.isFinite(n) || n < 0) n = 0;
  n = Math.round(n);
  if (n === 0) return "0 seconds";
  const units = [["day", 86400000], ["hour", 3600000], ["minute", 60000], ["second", 1000]];
  const parts = [];
  for (let i = 0; i < units.length && parts.length < 2; i++) {
    const q = Math.floor(n / units[i][1]);
    if (q > 0) { parts.push(q + " " + units[i][0] + (q === 1 ? "" : "s")); n -= q * units[i][1]; }
  }
  return parts.length ? parts.join(" ") : "under a second";
}

/* Parse `30m`, `2h`, `1h30m`, `3d`, `45s`, `2w`.
 * Judgement call: a bare number (`age:<30`) is accepted as MINUTES with an
 * info-level problem. Rejecting it is technically cleaner but in a newsroom
 * "under 30" always means minutes, and a rejected filter means the user
 * silently gets the wrong result set. We tell them what we assumed. */
function mcQyParseDuration(v) {
  const raw = mcQyStr(v).trim().toLowerCase();
  if (!raw) return { ok: false, ms: 0, assumed: false, text: "" };
  if (/^[0-9]+(\.[0-9]+)?$/.test(raw)) {
    const n = Number(raw);
    if (!Number.isFinite(n)) return { ok: false, ms: 0, assumed: false, text: raw };
    return { ok: true, ms: n * mcQyMsPer.m, assumed: true, text: raw };
  }
  const re = /([0-9]+(?:\.[0-9]+)?)\s*(ms|s|m|h|d|w)/g;
  let m, total = 0, seen = 0, consumed = 0;
  while ((m = re.exec(raw)) !== null) {
    const n = Number(m[1]);
    if (!Number.isFinite(n)) return { ok: false, ms: 0, assumed: false, text: raw };
    total += m[2] === "ms" ? n : n * mcQyMsPer[m[2]];
    seen++; consumed += m[0].replace(/\s+/g, "").length;
  }
  if (!seen || consumed !== raw.replace(/\s+/g, "").length) {
    return { ok: false, ms: 0, assumed: false, text: raw };
  }
  return { ok: true, ms: total, assumed: false, text: raw };
}


/* ---------------------------------------------------------------------
 * 2. Field registry
 *
 * `kind` drives value validation, comparison and explain(). Adding a field
 * is a one-line change here plus a getter — nothing in the parser knows
 * any field name.
 * ------------------------------------------------------------------- */

function mcQySourceCount(item) {
  if (!item || typeof item !== "object") return 0;
  if (Array.isArray(item.sources)) return item.sources.length;
  const n = mcQyNum(item.sources, null);
  if (n !== null && n >= 0) return Math.floor(n);
  return mcQyStr(item.src) ? 1 : 0;   // one named source is one source
}

function mcQyBool(v) {
  if (v === true) return true;
  if (typeof v === "string") { const f = v.toLowerCase(); return f === "true" || f === "yes" || f === "1"; }
  if (typeof v === "number") return v === 1;
  return false;
}

const mcQyFields = {
  src: { kind: "keyword", label: "source", get: function (it) { return mcQyStr(it && it.src); } },
  cat: { kind: "keyword", label: "category", get: function (it) { return mcQyStr(it && it.cat); } },
  id: { kind: "keyword", label: "id", get: function (it) { return mcQyStr(it && it.id); } },
  url: { kind: "keyword", label: "url", get: function (it) { return mcQyStr(it && it.url); } },
  sev: { kind: "number", label: "severity", get: function (it) { return mcQyNum(it && it.sev, null); } },
  sources: { kind: "number", label: "source count", get: function (it) { return mcQySourceCount(it); } },
  age: { kind: "duration", label: "age", get: function (it, ctx) { return ctx.ageMs; } },
  text: { kind: "text", label: "text", get: function (it) { return mcQyStr(it && it.text); } },
  is: { kind: "flag", label: "flag", get: null }
};

const mcQyFieldAlias = {
  source: "src", from: "src", feed: "src",
  category: "cat", topic: "cat", section: "cat",
  severity: "sev", sev: "sev", priority: "sev",
  nsources: "sources", srccount: "sources", corroboration: "sources",
  older: "age", newer: "age", since: "age",
  body: "text", headline: "text", title: "text",
  has: "is", flag: "is"
};

function mcQyResolveField(name) {
  const n = mcQyStr(name).toLowerCase();
  if (Object.prototype.hasOwnProperty.call(mcQyFields, n)) return n;
  if (Object.prototype.hasOwnProperty.call(mcQyFieldAlias, n)) return mcQyFieldAlias[n];
  return null;
}

/* is:/has: flag predicates. Each returns a strict boolean. */
const mcQyFlagDefs = {
  translated: { label: "translated", fn: function (it) { return mcQyBool(it && it.translated); } },
  original: { label: "not translated", fn: function (it) { return !mcQyBool(it && it.translated); } },
  simulated: { label: "simulated", fn: function (it) { return mcQyBool(it && it.sim); } },
  real: { label: "not simulated", fn: function (it) { return !mcQyBool(it && it.sim); } },
  breaking: {
    label: "breaking",
    fn: function (it, ctx) {
      const sev = mcQyNum(it && it.sev, null);
      return sev !== null && sev >= ctx.opts.breakingSev && ctx.ageMs <= ctx.opts.breakingAgeMs;
    }
  },
  corroborated: { label: "corroborated by 2+ sources", fn: function (it) { return mcQySourceCount(it) >= 2; } },
  single: { label: "from a single source", fn: function (it) { return mcQySourceCount(it) <= 1; } },
  url: { label: "has a link", fn: function (it) { return mcQyStr(it && it.url).length > 0; } }
};
const mcQyFlagAlias = { sim: "simulated", fake: "simulated", live: "breaking", link: "url", multi: "corroborated", solo: "single" };

function mcQyResolveFlag(name) {
  const n = mcQyStr(name).toLowerCase();
  if (Object.prototype.hasOwnProperty.call(mcQyFlagDefs, n)) return n;
  if (Object.prototype.hasOwnProperty.call(mcQyFlagAlias, n)) return mcQyFlagAlias[n];
  return null;
}

function mcQyFieldNames() {
  const out = [];
  for (const k in mcQyFields) if (Object.prototype.hasOwnProperty.call(mcQyFields, k)) out.push(k);
  out.sort();
  return out;
}


/* ---------------------------------------------------------------------
 * 3. Tokeniser
 *
 * Emits: term | phrase | field | and | or | not | plus | minus | lparen |
 *        rparen. Every token carries [start,end) offsets into the query so
 *        the UI can underline exactly the characters at fault.
 * ------------------------------------------------------------------- */

function mcQyIsSpace(c) {
  return c === " " || c === "\t" || c === "\n" || c === "\r" || c === "\f" || c === "\x0b" || c === " ";
}

function mcQyReadQuoted(src, i) {
  let j = i + 1, buf = "";
  while (j < src.length) {
    const c = src[j];
    if (c === "\\" && j + 1 < src.length && (src[j + 1] === '"' || src[j + 1] === "\\")) { buf += src[j + 1]; j += 2; continue; }
    if (c === '"') return { value: buf, end: j + 1, closed: true };
    buf += c; j++;
  }
  return { value: buf, end: j, closed: false };
}

/* Field head = `name:`, `name:>`, `name>=` ... Returns null when this is not
 * a field, which is the common case (`http://x` must stay a term). */
function mcQyFieldHead(src, i) {
  let j = i;
  while (j < src.length && /[A-Za-z_]/.test(src[j])) j++;
  if (j === i || j - i > 24) return null;
  const name = src.slice(i, j).toLowerCase();
  let op = null, k = j;
  if (src[k] === ":") {
    k++;
    const two = src.slice(k, k + 2);
    if (two === ">=" || two === "<=" || two === "!=") { op = two; k += 2; }
    else if (src[k] === ">" || src[k] === "<" || src[k] === "=") { op = src[k]; k += 1; }
    else op = ":";
  } else {
    const two = src.slice(k, k + 2);
    if (two === ">=" || two === "<=" || two === "!=") { op = two; k += 2; }
    else if (src[k] === ">" || src[k] === "<") { op = src[k]; k += 1; }
    else return null;   // a bare `=` without a colon is far more often a URL
  }                     // fragment or an equation than a filter.
  return { name: name, op: op, valueAt: k, nameEnd: j };
}

function mcQyIsWordStop(c) {
  return mcQyIsSpace(c) || c === "(" || c === ")" || c === '"';
}

function mcQyReadValue(src, k) {
  if (src[k] === '"') {
    const q = mcQyReadQuoted(src, k);
    return { value: q.value, end: q.end, quoted: true, closed: q.closed };
  }
  let j = k;
  while (j < src.length && !mcQyIsWordStop(src[j])) j++;
  return { value: src.slice(k, j), end: j, quoted: false, closed: true };
}

function mcQyLex(query, problems) {
  const raw = mcQyStr(query);
  let src = raw;
  if (src.length > mcQyMaxQueryChars) {
    src = src.slice(0, mcQyMaxQueryChars);
    mcQyProblem(problems, "warning", "query_truncated",
      "Query is longer than " + mcQyMaxQueryChars + " characters; only the first part was used.",
      mcQyMaxQueryChars, mcQyMaxQueryChars);
  }
  const toks = [];
  const n = src.length;
  let i = 0;

  const operandPos = function () {
    const last = toks[toks.length - 1];
    if (!last) return true;
    return last.type === "and" || last.type === "or" || last.type === "not" ||
      last.type === "lparen" || last.type === "plus" || last.type === "minus";
  };
  /* Where a +/-/! may act as a prefix operator. operandPos() alone is too
     strict: it only fires after an explicit operator, so in "kyiv -drone" the
     minus fell through to the term lexer, which stripped it into `raw` and
     kept a *positive* term — the exclusion silently became an inclusion, and
     "a -b" is far and away the most common way people write exclusion.
     Whitespace is the discriminator every real search engine uses: " -drone"
     negates, "covid-19" is one hyphenated word. */
  const prefixPos = function (at) {
    return operandPos() || at === 0 || mcQyIsSpace(src[at - 1]);
  };

  while (i < n) {
    const c = src[i];
    if (mcQyIsSpace(c)) { i++; continue; }
    if (toks.length >= mcQyMaxTokens) {
      mcQyProblem(problems, "warning", "too_many_terms",
        "Query has more than " + mcQyMaxTokens + " terms; the rest was ignored.", i, n);
      break;
    }
    if (c === "(") { toks.push({ type: "lparen", start: i, end: i + 1 }); i++; continue; }
    if (c === ")") { toks.push({ type: "rparen", start: i, end: i + 1 }); i++; continue; }
    if (c === '"') {
      const q = mcQyReadQuoted(src, i);
      if (!q.closed) {
        mcQyProblem(problems, "warning", "unclosed_quote",
          "Unclosed quote — searched for " + mcQyQuote(q.value) + " as a phrase to the end of the query.", i, q.end);
      }
      if (q.value.length === 0) {
        mcQyProblem(problems, "info", "empty_phrase", "Empty quotes ignored.", i, q.end);
      } else {
        toks.push({ type: "phrase", value: q.value, start: i, end: q.end, closed: q.closed });
      }
      i = q.end; continue;
    }
    if ((c === "+" || c === "-") && prefixPos(i) && i + 1 < n && !mcQyIsWordStop(src[i + 1])) {
      toks.push({ type: c === "+" ? "plus" : "minus", start: i, end: i + 1 }); i++; continue;
    }
    if (c === "&" && src[i + 1] === "&") { toks.push({ type: "and", start: i, end: i + 2 }); i += 2; continue; }
    if (c === "|" && src[i + 1] === "|") { toks.push({ type: "or", start: i, end: i + 2 }); i += 2; continue; }
    if (c === "!" && prefixPos(i) && i + 1 < n && !mcQyIsWordStop(src[i + 1])) {
      toks.push({ type: "not", start: i, end: i + 1 }); i++; continue;
    }

    const head = mcQyFieldHead(src, i);
    if (head) {
      const canon = mcQyResolveField(head.name);
      const v = mcQyReadValue(src, head.valueAt);
      if (canon) {
        if (v.quoted && !v.closed) {
          mcQyProblem(problems, "warning", "unclosed_quote",
            "Unclosed quote after " + head.name + ":", head.valueAt, v.end);
        }
        toks.push({
          type: "field", field: canon, name: head.name, op: head.op,
          value: v.value, quoted: v.quoted, start: i, end: v.end
        });
        i = v.end; continue;
      }
      /* Unknown field. Two rejected options: (a) drop the clause — silently
       * wrong results; (b) search the literal text "foo:bar" — matches
       * nothing, also silently wrong. We search the *value* and say so, so
       * the user still gets results and can see why. URL schemes are exempt
       * because `http://x` is a term, not a mistake. */
      const isUrlish = src.slice(head.valueAt, head.valueAt + 2) === "//";
      if (!isUrlish && v.value.length) {
        mcQyProblem(problems, "warning", "unknown_field",
          "Unknown field " + mcQyQuote(head.name) + " — searched for " + mcQyQuote(v.value) +
          " as text instead. Known fields: " + mcQyFieldNames().join(", ") + ".",
          i, v.end);
        toks.push(mcQyMakeTermTok(v.value, i, v.end));
        i = v.end; continue;
      }
    }

    let j = i;
    while (j < n && !mcQyIsWordStop(src[j])) j++;
    const word = src.slice(i, j);
    if (word === "AND" || word === "OR" || word === "NOT") {
      toks.push({ type: word.toLowerCase(), start: i, end: j });
    } else {
      const lower = word.toLowerCase();
      if (lower === "and" || lower === "or" || lower === "not") {
        /* Lucene's rule: operators are uppercase. Lowercasing them would
         * turn "does not compute" into a negation, which is worse than
         * treating a stray "not" as a word — but we say so out loud. */
        mcQyProblem(problems, "info", "lowercase_operator",
          "Treated " + mcQyQuote(word) + " as a search word. Write it in capitals (" +
          lower.toUpperCase() + ") to use it as an operator.", i, j);
      }
      toks.push(mcQyMakeTermTok(word, i, j));
    }
    i = j;
  }
  return toks;
}

function mcQyMakeTermTok(word, start, end) {
  let value = word, fuzzy = 0;
  const fm = /~([0-9]?)$/.exec(value);
  if (fm && fm.index > 0) {
    fuzzy = fm[1] === "" ? 1 : Math.min(2, parseInt(fm[1], 10) || 0);
    value = value.slice(0, fm.index);
  }
  const wild = value.indexOf("*") >= 0 || value.indexOf("?") >= 0;
  return { type: "term", value: value, raw: word, fuzzy: fuzzy, wild: wild, start: start, end: end };
}


/* ---------------------------------------------------------------------
 * 4. Parser (recursive descent)
 *
 *   or    := and ( OR and )*
 *   and   := unary ( [AND] unary )*          // juxtaposition = defaultOp
 *   unary := (NOT | '-' | '+')* primary
 *   primary := '(' or ')' | field | phrase | term
 *
 * Precedence NOT > AND > OR, which is what every user expects and what
 * Lucene/GitHub/Gmail all do.
 *
 * Recovery contract: every loop is guarded on index progress, so no input
 * can spin the parser; every failed production yields {type:"all"} (the
 * neutral element of AND) rather than {type:"none"}, because a dropped
 * clause that widens the result set is visible to the user, while one that
 * empties it looks like "there is no news".
 * ------------------------------------------------------------------- */

function mcQyNodeAll() { return { type: "all" }; }

function mcQyJoin(parts, op) {
  const kept = [];
  for (let i = 0; i < parts.length; i++) if (parts[i]) kept.push(parts[i]);
  /* `all` is the neutral element of AND and the absorbing element of OR.
     Without this, a query that parses to nothing twice — ")))(((" produces
     one `all` per fragment — becomes {and:[all,all]}, which behaves
     identically but reports itself as a real query the user did not write. */
  if (op !== "or") {
    const solid = [];
    for (let i = 0; i < kept.length; i++) if (kept[i].type !== "all") solid.push(kept[i]);
    if (solid.length === 0) return mcQyNodeAll();
    kept.length = 0;
    for (let i = 0; i < solid.length; i++) kept.push(solid[i]);
  } else {
    for (let i = 0; i < kept.length; i++) if (kept[i].type === "all") return mcQyNodeAll();
  }
  if (kept.length === 0) return mcQyNodeAll();
  if (kept.length === 1) return kept[0];
  if (op !== "or") return { type: "and", kids: kept };
  /* Default-OR mode: `+x` is a hard requirement and `-x` a hard exclusion
   * (Lucene semantics). Optional clauses become score-only `boost` nodes so
   * `+ukraine kyiv` means "must mention ukraine, rank kyiv higher". */
  const must = [], should = [];
  for (let i = 0; i < kept.length; i++) {
    if (kept[i].req || kept[i].type === "not") must.push(kept[i]); else should.push(kept[i]);
  }
  if (must.length === 0) return { type: "or", kids: should };
  const all = must.slice();
  if (should.length) all.push({ type: "boost", kid: should.length === 1 ? should[0] : { type: "or", kids: should } });
  return all.length === 1 ? all[0] : { type: "and", kids: all };
}

function mcQyStartsOperand(st) {
  const tk = st.t[st.i];
  if (!tk) return false;
  return tk.type === "term" || tk.type === "phrase" || tk.type === "field" ||
    tk.type === "lparen" || tk.type === "not" || tk.type === "plus" || tk.type === "minus";
}

function mcQySkipToClose(st) {
  let bal = 1;
  while (st.i < st.t.length) {
    const tk = st.t[st.i++];
    if (tk.type === "lparen") bal++;
    else if (tk.type === "rparen") { bal--; if (bal === 0) return; }
  }
}

function mcQyParseOr(st) {
  const parts = [mcQyParseAnd(st)];
  for (;;) {
    const tk = st.t[st.i];
    if (!tk || tk.type !== "or") break;
    st.i++;
    while (st.i < st.t.length && (st.t[st.i].type === "or" || st.t[st.i].type === "and")) {
      mcQyProblem(st.p, "warning", "double_operator",
        "Two operators in a row — the extra one was ignored.", st.t[st.i].start, st.t[st.i].end);
      st.i++;
    }
    if (!mcQyStartsOperand(st)) {
      mcQyProblem(st.p, "warning", "dangling_operator",
        "OR has nothing after it — it was ignored.", tk.start, tk.end);
      break;
    }
    const before = st.i;
    parts.push(mcQyParseAnd(st));
    if (st.i === before) { st.i++; }   // progress guard
  }
  return parts.length === 1 ? parts[0] : { type: "or", kids: parts };
}

function mcQyParseAnd(st) {
  while (st.i < st.t.length && (st.t[st.i].type === "and" || st.t[st.i].type === "or")) {
    mcQyProblem(st.p, "warning", "leading_operator",
      "Query starts with " + st.t[st.i].type.toUpperCase() + " — it was ignored.",
      st.t[st.i].start, st.t[st.i].end);
    st.i++;
  }
  const parts = [];
  const first = mcQyParseUnary(st);
  if (first) parts.push(first);
  for (;;) {
    const tk = st.t[st.i];
    if (!tk || tk.type === "rparen" || tk.type === "or") break;
    const before = st.i;
    if (tk.type === "and") {
      st.i++;
      while (st.i < st.t.length && st.t[st.i].type === "and") {
        mcQyProblem(st.p, "warning", "double_operator",
          "Two operators in a row — the extra one was ignored.", st.t[st.i].start, st.t[st.i].end);
        st.i++;
      }
      if (!mcQyStartsOperand(st)) {
        mcQyProblem(st.p, "warning", "dangling_operator",
          "AND has nothing after it — it was ignored.", tk.start, tk.end);
        break;
      }
      const p = mcQyParseUnary(st);
      if (p) parts.push(p);
    } else if (mcQyStartsOperand(st)) {
      const p = mcQyParseUnary(st);          // juxtaposition
      if (p) parts.push(p);
    } else break;
    if (st.i === before) { st.i++; }         // progress guard
  }
  return mcQyJoin(parts, st.defaultOp);
}

function mcQyParseUnary(st) {
  let neg = 0, req = false, firstTok = null;
  for (;;) {
    const tk = st.t[st.i];
    if (!tk) break;
    if (tk.type === "not" || tk.type === "minus") { neg++; if (!firstTok) firstTok = tk; st.i++; continue; }
    if (tk.type === "plus") { req = true; if (!firstTok) firstTok = tk; st.i++; continue; }
    break;
  }
  if (st.i >= st.t.length) {
    if (firstTok) {
      mcQyProblem(st.p, "warning", "dangling_not",
        "Nothing to negate after this — it was ignored.", firstTok.start, firstTok.end);
    }
    return null;
  }
  const node = mcQyParsePrimary(st);
  if (!node) {
    if (firstTok) {
      mcQyProblem(st.p, "warning", "dangling_not",
        "Nothing to negate after this — it was ignored.", firstTok.start, firstTok.end);
    }
    return null;
  }
  let out = node;
  if (neg >= 2) {
    /* NOT NOT x is legal and means x. We fold it here rather than in the
     * evaluator so nothing downstream ever walks a stack of negations. */
    mcQyProblem(st.p, "info", "double_negation",
      (neg === 2 ? "Double negative" : neg + " negations") + " cancel out.", firstTok.start, node.__end || firstTok.end);
  }
  if (neg % 2 === 1) out = { type: "not", kid: out };
  if (req) out.req = true;
  return out;
}

function mcQyParsePrimary(st) {
  const tk = st.t[st.i];
  if (!tk) return null;
  if (tk.type === "lparen") {
    st.i++;
    if (st.depth >= mcQyMaxDepth) {
      mcQyProblem(st.p, "warning", "too_deep",
        "Query is nested more than " + mcQyMaxDepth + " levels deep; this group was ignored.", tk.start, tk.end);
      mcQySkipToClose(st);
      return mcQyNodeAll();
    }
    st.depth++;
    let inner;
    if (st.t[st.i] && st.t[st.i].type === "rparen") {
      mcQyProblem(st.p, "info", "empty_group", "Empty () ignored.", tk.start, st.t[st.i].end);
      inner = mcQyNodeAll();
    } else {
      inner = mcQyParseOr(st);
    }
    st.depth--;
    if (st.t[st.i] && st.t[st.i].type === "rparen") { st.i++; }
    else {
      mcQyProblem(st.p, "warning", "unclosed_paren",
        "This '(' is never closed — the group was closed at the end of the query.", tk.start, tk.end);
    }
    return inner;
  }
  if (tk.type === "rparen") return null;
  if (tk.type === "term") { st.i++; return mcQyTermNode(tk, st); }
  if (tk.type === "phrase") { st.i++; return mcQyPhraseNode(tk, st); }
  if (tk.type === "field") { st.i++; return mcQyFieldNode(tk, st); }
  return null;
}

/* A query term is matched against *tokenised* text, so a term that the text
 * tokeniser would split (covid-19, u.s., foo:bar) can never match as one
 * word. Rather than fail silently we promote it to a phrase — which is what
 * the user meant by typing it as one word. */
function mcQyTermNode(tk, st) {
  const folded = mcQyFold(tk.value);
  if (tk.wild) {
    let pat = "";
    for (let i = 0; i < folded.length; i++) {
      const c = folded[i];
      if (c === "*" || c === "?" || mcQyIsWordChar(c)) pat += c;
    }
    const bare = pat.replace(/[*?]/g, "");
    if (!pat.length || (!bare.length && pat.indexOf("*") >= 0 && pat.length <= 2)) {
      mcQyProblem(st.p, "warning", "bare_wildcard",
        "A wildcard on its own matches everything — " + mcQyQuote(tk.raw) + " was ignored.", tk.start, tk.end);
      return mcQyNodeAll();
    }
    if (bare.length < 2) {
      mcQyProblem(st.p, "info", "short_wildcard",
        "Wildcard " + mcQyQuote(tk.raw) + " has very little to match on; results will be broad.", tk.start, tk.end);
    }
    return { type: "term", value: pat, wild: true, fuzzy: 0, raw: tk.raw, start: tk.start, end: tk.end };
  }
  const parts = mcQyTokenizeText(folded);
  if (parts.length === 0) {
    mcQyProblem(st.p, "info", "unsearchable_term",
      mcQyQuote(tk.raw) + " has no letters or digits to search for; it was ignored.", tk.start, tk.end);
    return mcQyNodeAll();
  }
  if (parts.length > 1) {
    const words = parts.map(function (p) { return p.w; });
    return { type: "phrase", value: tk.value, words: words, raw: tk.raw, implicit: true, start: tk.start, end: tk.end };
  }
  if (tk.fuzzy > 0 && parts[0].w.length > mcQyMaxFuzzyLen) {
    mcQyProblem(st.p, "info", "fuzzy_too_long",
      "Fuzzy matching is skipped for words longer than " + mcQyMaxFuzzyLen + " characters.", tk.start, tk.end);
  }
  return {
    type: "term", value: parts[0].w, wild: false,
    fuzzy: parts[0].w.length <= mcQyMaxFuzzyLen ? tk.fuzzy : 0,
    raw: tk.raw, start: tk.start, end: tk.end
  };
}

function mcQyPhraseNode(tk, st) {
  const parts = mcQyTokenizeText(mcQyFold(tk.value));
  if (parts.length === 0) {
    mcQyProblem(st.p, "info", "unsearchable_phrase",
      "Phrase " + mcQyQuote(tk.value) + " has no searchable words; it was ignored.", tk.start, tk.end);
    return mcQyNodeAll();
  }
  const words = parts.map(function (p) { return p.w; });
  if (words.length === 1) {
    return { type: "term", value: words[0], wild: false, fuzzy: 0, raw: tk.value, quoted: true, start: tk.start, end: tk.end };
  }
  return { type: "phrase", value: tk.value, words: words, raw: tk.value, start: tk.start, end: tk.end };
}

function mcQyFieldNode(tk, st) {
  const def = mcQyFields[tk.field];
  const label = def ? def.label : tk.field;
  const raw = mcQyStr(tk.value);
  const kill = function (sev, code, msg) {
    /* A broken filter degrades to the neutral element, never to "match
     * nothing": the user keeps a usable result set and sees the problem. */
    mcQyProblem(st.p, sev, code, msg, tk.start, tk.end);
    return mcQyNodeAll();
  };
  if (!raw.length) return kill("warning", "empty_value", tk.name + ": has no value after it — the filter was ignored.");

  if (def.kind === "flag") {
    const flag = mcQyResolveFlag(raw);
    if (!flag) {
      const known = Object.keys(mcQyFlagDefs).sort().join(", ");
      return kill("warning", "unknown_flag",
        "Unknown flag " + mcQyQuote(raw) + " — the filter was ignored. Try: " + known + ".");
    }
    if (tk.op !== ":" && tk.op !== "=" && tk.op !== "!=") {
      mcQyProblem(st.p, "info", "bad_operator",
        "'" + tk.op + "' means nothing for is: — read as is:" + flag + ".", tk.start, tk.end);
    }
    return { type: "flag", flag: flag, neg: tk.op === "!=", start: tk.start, end: tk.end };
  }

  if (def.kind === "number") {
    const nums = [];
    const bits = raw.split(",");
    for (let i = 0; i < bits.length; i++) {
      const n = mcQyNum(bits[i].trim(), null);
      if (n === null) {
        return kill("error", "bad_number",
          label + " needs a number, but " + mcQyQuote(bits[i].trim() || raw) + " is not one — the filter was ignored.");
      }
      nums.push(n);
    }
    if (nums.length > 1 && tk.op !== ":" && tk.op !== "=" && tk.op !== "!=") {
      return kill("warning", "bad_operator", "A list of numbers cannot be used with '" + tk.op + "' — the filter was ignored.");
    }
    return { type: "num", field: tk.field, label: label, op: tk.op === ":" ? "=" : tk.op, values: nums, start: tk.start, end: tk.end };
  }

  if (def.kind === "duration") {
    const d = mcQyParseDuration(raw);
    if (!d.ok) {
      return kill("error", "bad_duration",
        label + " needs a duration like 30m, 2h or 3d, but " + mcQyQuote(raw) + " is not one — the filter was ignored.");
    }
    if (d.assumed) {
      mcQyProblem(st.p, "info", "assumed_minutes",
        "Read " + mcQyQuote(raw) + " as " + mcQyHumanMs(d.ms) + ". Write 30m / 2h / 3d to be explicit.", tk.start, tk.end);
    }
    let op = tk.op;
    if (op === ":" || op === "=") {
      /* `age:30m` is never a request for items exactly 30 minutes old. */
      mcQyProblem(st.p, "info", "duration_lte",
        "Read " + tk.name + ":" + raw + " as " + tk.name + ":<=" + raw + " (within " + mcQyHumanMs(d.ms) + ").", tk.start, tk.end);
      op = "<=";
    }
    return { type: "num", field: tk.field, label: label, op: op, values: [d.ms], duration: true, start: tk.start, end: tk.end };
  }

  /* keyword / text */
  const vals = [];
  const bits = tk.quoted ? [raw] : raw.split(",");
  for (let i = 0; i < bits.length; i++) {
    const v = mcQyFold(bits[i].trim());
    if (v.length) vals.push(v);
  }
  if (!vals.length) return kill("warning", "empty_value", tk.name + ": has no value after it — the filter was ignored.");
  if (tk.op === ">" || tk.op === "<" || tk.op === ">=" || tk.op === "<=") {
    mcQyProblem(st.p, "warning", "bad_operator",
      label + " is text, so '" + tk.op + "' makes no sense — read as " + tk.name + ":" + bits[0].trim() + ".", tk.start, tk.end);
  }
  if (def.kind === "text") {
    const words = mcQyTokenizeText(vals.join(" ")).map(function (p) { return p.w; });
    if (!words.length) return kill("info", "unsearchable_term", "Nothing searchable in " + tk.name + ":" + mcQyQuote(raw) + ".");
    if (words.length === 1) return { type: "term", value: words[0], wild: false, fuzzy: 0, raw: raw, start: tk.start, end: tk.end };
    return { type: "phrase", value: raw, words: words, raw: raw, start: tk.start, end: tk.end };
  }
  return {
    type: "kw", field: tk.field, label: label, values: vals,
    neg: tk.op === "!=", start: tk.start, end: tk.end
  };
}

/* Public entry point. Never throws — the outermost try/catch is the last
 * line of defence, and returns a query that matches everything plus an
 * error the UI can show. */
function mcQyParse(query, opts) {
  const o = opts || {};
  const problems = [];
  const qs = mcQyStr(query);
  let ast = mcQyNodeAll();
  try {
    const toks = mcQyLex(qs, problems);
    if (toks.length === 0) {
      if (qs.trim().length === 0) {
        mcQyProblem(problems, "info", "empty_query", "Empty query — everything matches.", 0, 0);
      } else {
        mcQyProblem(problems, "warning", "nothing_searchable",
          "Nothing searchable in this query — everything matches.", 0, qs.length);
      }
      return mcQyParseResult(qs, ast, problems, o);
    }
    const st = {
      t: toks, i: 0, p: problems, depth: 0,
      defaultOp: mcQyStr(o.defaultOp).toLowerCase() === "or" ? "or" : "and"
    };
    ast = mcQyParseOr(st);
    while (st.i < st.t.length) {
      const before = st.i;
      const tk = st.t[st.i];
      if (tk.type === "rparen") {
        mcQyProblem(problems, "warning", "unbalanced_paren", "Unmatched ')' — ignored.", tk.start, tk.end);
        st.i++;
      } else {
        mcQyProblem(problems, "warning", "unexpected_token",
          "Unexpected " + tk.type + " here; the rest of the query was still searched.", tk.start, tk.end);
        const more = mcQyParseOr(st);
        ast = mcQyJoin([ast, more], "and");
      }
      if (st.i === before) st.i++;
    }
    if (ast && ast.type === "all") {
      let has = false;
      for (let i = 0; i < problems.length; i++) if (problems[i].severity !== "info") has = true;
      if (!has) mcQyProblem(problems, "info", "matches_everything", "This query matches everything.", 0, qs.length);
    }
  } catch (e) {
    /* Should be unreachable. If it ever fires, the user still gets a search. */
    ast = mcQyNodeAll();
    mcQyProblem(problems, "error", "internal",
      "The query could not be parsed (" + mcQyStr(e && e.message) + "); everything is shown instead.", 0, qs.length);
  }
  return mcQyParseResult(qs, ast, problems, o);
}

function mcQyParseResult(qs, ast, problems, o) {
  let worst = "ok";
  for (let i = 0; i < problems.length; i++) {
    const s = problems[i].severity;
    if (s === "error") worst = "error";
    else if (s === "warning" && worst !== "error") worst = "warning";
    else if (s === "info" && worst === "ok") worst = "info";
  }
  return {
    query: qs,
    ast: ast || mcQyNodeAll(),
    problems: problems,
    severity: worst,
    ok: worst !== "error",
    defaultOp: mcQyStr(o && o.defaultOp).toLowerCase() === "or" ? "or" : "and"
  };
}


/* ---------------------------------------------------------------------
 * 5. explain() and stringify()
 *
 * explain() is shown to the user before they save an alert rule. It has to
 * be readable by someone who does not know the DSL, so it says "newer than
 * 30 minutes", not "age < 1800000".
 * ------------------------------------------------------------------- */

const mcQyExplainMaxKids = 6;

function mcQyExplainNum(node) {
  const label = mcQyStr(node.label) || mcQyStr(node.field);
  const fmt = node.duration
    ? function (v) { return mcQyHumanMs(v); }
    : function (v) { return mcQyStr(Math.round(v * 1000) / 1000); };
  const v = node.values && node.values.length ? node.values[0] : 0;
  if (node.field === "age") {
    switch (node.op) {
      case "<": return "newer than " + fmt(v);
      case "<=": return "no older than " + fmt(v);
      case ">": return "older than " + fmt(v);
      case ">=": return "at least " + fmt(v) + " old";
      case "!=": return "not exactly " + fmt(v) + " old";
      default: return "exactly " + fmt(v) + " old";
    }
  }
  if (node.values && node.values.length > 1) {
    const list = node.values.map(fmt).join(" or ");
    return (node.op === "!=" ? label + " is neither " : label + " is ") + list;
  }
  switch (node.op) {
    case ">": return label + " above " + fmt(v);
    case ">=": return label + " of at least " + fmt(v);
    case "<": return label + " below " + fmt(v);
    case "<=": return label + " of at most " + fmt(v);
    case "!=": return label + " is not " + fmt(v);
    default: return label + " is exactly " + fmt(v);
  }
}

function mcQyExplainNode(node, depth) {
  if (!node || typeof node !== "object") return "anything";
  if (depth > mcQyMaxDepth) return "(a very deeply nested condition)";
  switch (node.type) {
    case "all": return "anything";
    case "none": return "nothing";
    case "term":
      if (node.wild) return "a word matching the pattern " + mcQyQuote(node.value);
      if (node.fuzzy > 0) {
        return "the word " + mcQyQuote(node.value) + " (or a spelling up to " +
          node.fuzzy + " character" + (node.fuzzy === 1 ? "" : "s") + " different)";
      }
      return "the word " + mcQyQuote(node.value);
    case "phrase":
      return (node.implicit ? "the words " : "the exact phrase ") +
        mcQyQuote(node.words ? node.words.join(" ") : node.value) +
        (node.implicit ? " next to each other" : "");
    case "kw": {
      const label = mcQyStr(node.label) || mcQyStr(node.field);
      const wild = node.values.some(function (v) { return v.indexOf("*") >= 0 || v.indexOf("?") >= 0; });
      const list = node.values.map(mcQyQuote).join(" or ");
      const verb = node.neg ? " is not " : (wild ? " matches " : " is ");
      return label + verb + (node.values.length > 1 ? "one of " : "") + list;
    }
    case "num": return mcQyExplainNum(node);
    case "flag": {
      const def = mcQyFlagDefs[node.flag];
      const l = def ? def.label : node.flag;
      return node.neg ? "the item is not " + l : "the item is " + l;
    }
    case "not": return "NOT " + mcQyExplainNode(node.kid, depth + 1);
    case "boost": return "(preferably " + mcQyExplainNode(node.kid, depth + 1) + ", used only for ranking)";
    case "and":
    case "or": {
      const kids = Array.isArray(node.kids) ? node.kids : [];
      if (kids.length === 0) return "anything";
      if (kids.length === 1) return mcQyExplainNode(kids[0], depth + 1);
      const shown = kids.slice(0, mcQyExplainMaxKids)
        .map(function (k) { return mcQyExplainNode(k, depth + 1); });
      const extra = kids.length - shown.length;
      if (extra > 0) shown.push("and " + extra + " more condition" + (extra === 1 ? "" : "s"));
      const joiner = node.type === "and" ? "; and " : "; or ";
      if (kids.length === 2 && extra === 0) {
        return shown[0] + (node.type === "and" ? " and " : " or ") + shown[1];
      }
      return (node.type === "and" ? "all of: " : "any of: ") + shown.join(joiner);
    }
    default: return "an unrecognised condition";
  }
}

function mcQyExplain(astOrParsed, opts) {
  try {
    const ast = astOrParsed && astOrParsed.ast ? astOrParsed.ast : astOrParsed;
    if (!ast || typeof ast !== "object") return "Matches everything.";
    if (ast.type === "all") return "Matches everything (no filter).";
    if (ast.type === "none") return "Matches nothing.";
    let s = mcQyExplainNode(ast, 0);
    s = "Matches items with " + s;
    if (opts && opts.now) { /* reserved: relative-time rendering hook */ }
    return s.charAt(0).toUpperCase() + s.slice(1) + ".";
  } catch (e) {
    return "Matches everything (this query could not be described).";
  }
}

/* Canonical round-trippable form. Used for saved-search normalisation and
 * as the compile cache key. */
function mcQyStringify(node, depth) {
  const d = depth || 0;
  if (!node || typeof node !== "object" || d > mcQyMaxDepth) return "*";
  switch (node.type) {
    case "all": return "*";
    case "none": return "NOT *";
    case "term": return node.value + (node.fuzzy > 0 ? "~" + node.fuzzy : "");
    case "phrase": return '"' + mcQyStr(node.words ? node.words.join(" ") : node.value).replace(/"/g, "") + '"';
    case "kw": return node.field + (node.neg ? ":!=" : ":") + node.values.join(",");
    case "num": return node.field + ":" + node.op + (node.duration ? node.values[0] + "ms" : node.values.join(","));
    case "flag": return (node.neg ? "-" : "") + "is:" + node.flag;
    case "not": return "NOT " + mcQyStringify(node.kid, d + 1);
    case "boost": return mcQyStringify(node.kid, d + 1);
    case "and":
    case "or": {
      const kids = Array.isArray(node.kids) ? node.kids : [];
      const parts = kids.map(function (k) { return mcQyStringify(k, d + 1); });
      const joined = parts.join(node.type === "and" ? " AND " : " OR ");
      return d === 0 ? joined : "(" + joined + ")";
    }
    default: return "*";
  }
}


/* ---------------------------------------------------------------------
 * 6. Evaluation, scoring, highlighting
 * ------------------------------------------------------------------- */

function mcQyOpts(o) {
  const out = {};
  for (const k in mcQyDefaults) if (Object.prototype.hasOwnProperty.call(mcQyDefaults, k)) out[k] = mcQyDefaults[k];
  if (o && typeof o === "object") {
    for (const k in out) {
      if (Object.prototype.hasOwnProperty.call(o, k) && o[k] !== undefined && o[k] !== null) {
        out[k] = typeof out[k] === "number" ? mcQyNum(o[k], out[k]) : o[k];
      }
    }
  }
  return out;
}

/* `now` is a parameter, not a clock read, so every result is reproducible.
 * Fallback order: explicit -> newest item in the batch -> Date.now(). The
 * last one is documented, not hidden: callers that care pass opts.now. */
function mcQyNow(opts, items) {
  const n = mcQyNum(opts && opts.now, null);
  if (n !== null) return n;
  let max = null;
  if (Array.isArray(items)) {
    for (let i = 0; i < items.length; i++) {
      const t = mcQyNum(items[i] && items[i].t, null);
      if (t !== null && (max === null || t > max)) max = t;
    }
  }
  if (max !== null) return max;
  return Date.now();
}

function mcQyItemCtx(item, opts, now) {
  const o = opts && opts.__norm ? opts : mcQyOpts(opts);
  o.__norm = true;
  const t = mcQyNum(item && item.t, null);
  const nw = Number.isFinite(now) ? now : mcQyNow(o, [item]);
  const tokens = mcQyTokenizeText(item && item.text);
  const index = new Map();
  for (let i = 0; i < tokens.length; i++) {
    const w = tokens[i].w;
    const a = index.get(w);
    if (a) a.push(i); else index.set(w, [i]);
  }
  return {
    item: item, opts: o, now: nw,
    ageMs: t === null ? Infinity : Math.max(0, nw - t),
    hasTime: t !== null,
    tokens: tokens, index: index,
    hl: [], neg: 0
  };
}

function mcQyCmp(op, a, b) {
  switch (op) {
    case ">": return a > b;
    case ">=": return a >= b;
    case "<": return a < b;
    case "<=": return a <= b;
    case "!=": return a !== b;
    default: return a === b;
  }
}

function mcQyPushHl(ctx, s, e) {
  if (ctx.neg !== 0) return;
  if (ctx.hl.length >= ctx.opts.maxHighlights) return;
  ctx.hl.push({ s: s, e: e });
}

/* Returns {m, s}: matched, and a score contribution. Score is only ever
 * consumed when the whole tree matched, so a partial score from a failed
 * OR branch is harmless. */
function mcQyEvalNode(node, ctx, depth) {
  if (!node || typeof node !== "object") return { m: true, s: 0 };
  if (depth > mcQyMaxDepth + 4) return { m: true, s: 0 };
  const o = ctx.opts;
  switch (node.type) {
    case "all": return { m: true, s: 0 };
    case "none": return { m: false, s: 0 };

    case "term": {
      let tf = 0, weight = 1;
      if (node.wild) {
        weight = o.wildcardWeight;
        ctx.index.forEach(function (positions, w) {
          if (mcQyGlob(node.value, w)) {
            tf += positions.length;
            for (let i = 0; i < positions.length; i++) {
              const tk = ctx.tokens[positions[i]];
              mcQyPushHl(ctx, tk.s, tk.e);
            }
          }
        });
      } else {
        const hit = ctx.index.get(node.value);
        if (hit) {
          tf = hit.length;
          for (let i = 0; i < hit.length; i++) mcQyPushHl(ctx, ctx.tokens[hit[i]].s, ctx.tokens[hit[i]].e);
        }
        if (tf === 0 && node.fuzzy > 0) {
          let best = node.fuzzy + 1;
          const target = node.value;
          ctx.index.forEach(function (positions, w) {
            if (Math.abs(w.length - target.length) > node.fuzzy) return;
            const d = mcQyEditDistance(target, w, node.fuzzy);
            if (d <= node.fuzzy) {
              if (d < best) best = d;
              tf += positions.length;
              for (let i = 0; i < positions.length; i++) mcQyPushHl(ctx, ctx.tokens[positions[i]].s, ctx.tokens[positions[i]].e);
            }
          });
          if (tf > 0) weight = Math.max(0.1, 1 - o.fuzzyPenalty * Math.max(1, best));
        }
      }
      if (tf === 0) return { m: false, s: 0 };
      return { m: true, s: weight * (1 + Math.log(1 + tf)) };
    }

    case "phrase": {
      const words = Array.isArray(node.words) ? node.words : [];
      if (words.length === 0) return { m: true, s: 0 };
      const starts = ctx.index.get(words[0]);
      if (!starts) return { m: false, s: 0 };
      let count = 0;
      for (let i = 0; i < starts.length; i++) {
        const p = starts[i];
        if (p + words.length > ctx.tokens.length) break;
        let ok = true;
        for (let k = 1; k < words.length; k++) {
          if (ctx.tokens[p + k].w !== words[k]) { ok = false; break; }
        }
        if (ok) {
          count++;
          mcQyPushHl(ctx, ctx.tokens[p].s, ctx.tokens[p + words.length - 1].e);
        }
      }
      if (count === 0) return { m: false, s: 0 };
      return { m: true, s: o.phraseBoost * (1 + Math.log(1 + count)) };
    }

    case "kw": {
      const def = mcQyFields[node.field];
      const val = def ? mcQyFold(def.get(ctx.item, ctx)) : "";
      if (!val.length) {
        /* Missing value: every comparison is false except `!=`, which is
         * true — an item with no source genuinely is not src:reuters. */
        return { m: !!node.neg, s: node.neg ? o.fieldWeight : 0 };
      }
      let hit = false;
      for (let i = 0; i < node.values.length; i++) {
        const v = node.values[i];
        if (v.indexOf("*") >= 0 || v.indexOf("?") >= 0) { if (mcQyGlob(v, val)) { hit = true; break; } }
        else if (v === val) { hit = true; break; }
      }
      const m = node.neg ? !hit : hit;
      return { m: m, s: m ? o.fieldWeight : 0 };
    }

    case "num": {
      const def = mcQyFields[node.field];
      const val = def ? def.get(ctx.item, ctx) : null;
      if (val === null || !Number.isFinite(val)) {
        if (node.field === "age" && !ctx.hasTime) return { m: false, s: 0 };
        return { m: node.op === "!=", s: 0 };
      }
      let hit = false;
      for (let i = 0; i < node.values.length; i++) {
        if (mcQyCmp(node.op, val, node.values[i])) { hit = true; if (node.op !== "!=") break; }
        else if (node.op === "!=") { hit = false; break; }
      }
      return { m: hit, s: hit ? o.fieldWeight : 0 };
    }

    case "flag": {
      const def = mcQyFlagDefs[node.flag];
      let v = false;
      try { v = def ? !!def.fn(ctx.item, ctx) : false; } catch (e) { v = false; }
      const m = node.neg ? !v : v;
      return { m: m, s: m ? o.fieldWeight : 0 };
    }

    case "not": {
      ctx.neg++;
      const r = mcQyEvalNode(node.kid, ctx, depth + 1);
      ctx.neg--;
      return { m: !r.m, s: r.m ? 0 : o.negWeight };
    }

    case "boost": {
      const r = mcQyEvalNode(node.kid, ctx, depth + 1);
      return { m: true, s: r.m ? r.s : 0 };
    }

    case "and": {
      const kids = Array.isArray(node.kids) ? node.kids : [];
      let s = 0;
      for (let i = 0; i < kids.length; i++) {
        const r = mcQyEvalNode(kids[i], ctx, depth + 1);
        if (!r.m) return { m: false, s: 0 };
        s += r.s;
      }
      return { m: true, s: s };
    }

    case "or": {
      const kids = Array.isArray(node.kids) ? node.kids : [];
      let s = 0, m = false;
      for (let i = 0; i < kids.length; i++) {
        const r = mcQyEvalNode(kids[i], ctx, depth + 1);
        if (r.m) { m = true; s += r.s; }
      }
      return { m: m, s: s };
    }

    default: return { m: true, s: 0 };
  }
}

function mcQyRecency(ageMs, o) {
  if (!Number.isFinite(ageMs) || ageMs < 0) return o.minRecency;
  const half = o.halfLifeMs > 0 ? o.halfLifeMs : 1;
  const r = Math.pow(0.5, ageMs / half);
  return mcQyClamp(r, o.minRecency, 1);
}

/* Full evaluation of one item. Never throws; on an internal failure it
 * reports "no match" rather than corrupting the result list. */
function mcQyEvaluate(ast, item, opts, now) {
  const empty = { match: false, score: 0, highlights: [], ageMs: 0 };
  if (!item || typeof item !== "object") return empty;
  try {
    const ctx = mcQyItemCtx(item, opts, now);
    const node = ast && ast.ast ? ast.ast : ast;
    const r = mcQyEvalNode(node, ctx, 0);
    if (!r.m) return { match: false, score: 0, highlights: [], ageMs: ctx.ageMs === Infinity ? 0 : ctx.ageMs };
    const o = ctx.opts;
    const sev = mcQyNum(item.sev, 0);
    const base = r.s + 1;   // +1 so a pure-filter query still ranks by recency
    let score = base *
      mcQyRecency(ctx.ageMs, o) *
      (1 + o.sevWeight * mcQyClamp(sev, 0, 5)) *
      (1 + o.sourcesWeight * Math.min(6, mcQySourceCount(item)));
    if (!Number.isFinite(score)) score = 0;
    return {
      match: true,
      score: Math.round(score * 1e6) / 1e6,
      highlights: mcQyMergeRanges(ctx.hl),
      ageMs: ctx.ageMs === Infinity ? 0 : ctx.ageMs
    };
  } catch (e) {
    return empty;
  }
}

function mcQyMatch(ast, item, opts, now) {
  return mcQyEvaluate(ast, item, opts, now).match;
}

/* Plain-text snippet around the first highlight, with the ranges rebased.
 * No HTML is produced anywhere in this module — the caller owns escaping. */
function mcQySnippet(text, ranges, width) {
  const s = mcQyStr(text);
  const w = mcQyClamp(mcQyInt(width, 180), 40, 2000);
  const rs = Array.isArray(ranges) ? ranges : [];
  if (s.length <= w) return { text: s, ranges: mcQyMergeRanges(rs), truncatedStart: false, truncatedEnd: false };
  const first = rs.length ? mcQyInt(rs[0].s, 0) : 0;
  let start = Math.max(0, first - Math.floor(w / 3));
  if (start > 0) { const sp = s.indexOf(" ", start); if (sp >= 0 && sp - start < 20) start = sp + 1; }
  let end = Math.min(s.length, start + w);
  if (end < s.length) { const sp = s.lastIndexOf(" ", end); if (sp > start + w / 2) end = sp; }
  const out = [];
  for (let i = 0; i < rs.length; i++) {
    const a = mcQyInt(rs[i].s, -1), b = mcQyInt(rs[i].e, -1);
    if (a < 0 || b <= a) continue;
    if (b <= start || a >= end) continue;
    out.push({ s: Math.max(a, start) - start, e: Math.min(b, end) - start });
  }
  return {
    text: s.slice(start, end),
    ranges: mcQyMergeRanges(out),
    truncatedStart: start > 0,
    truncatedEnd: end < s.length
  };
}


/* ---------------------------------------------------------------------
 * 7. Compile + search
 * ------------------------------------------------------------------- */

function mcQyCompile(query, opts) {
  const parsed = (query && typeof query === "object" && query.ast)
    ? query
    : mcQyParse(query, opts);
  const o = mcQyOpts(opts);
  o.__norm = true;
  return {
    query: parsed.query,
    ast: parsed.ast,
    problems: parsed.problems,
    severity: parsed.severity,
    explain: mcQyExplain(parsed.ast),
    canonical: mcQyStringify(parsed.ast, 0),
    opts: o,
    test: function (item, now) { return mcQyEvaluate(parsed.ast, item, o, now).match; },
    evaluate: function (item, now) { return mcQyEvaluate(parsed.ast, item, o, now); }
  };
}

function mcQySearch(items, query, opts) {
  const o = mcQyOpts(opts);
  o.__norm = true;
  const list = Array.isArray(items) ? items : [];
  const compiled = mcQyCompile(query, o);
  const problems = compiled.problems.slice();
  if (!Array.isArray(items)) {
    mcQyProblem(problems, "error", "bad_items", "No items to search.", 0, 0);
  }
  const now = mcQyNow(o, list);
  const hits = [];
  for (let i = 0; i < list.length; i++) {
    const it = list[i];
    if (!it || typeof it !== "object") continue;
    const r = mcQyEvaluate(compiled.ast, it, o, now);
    if (!r.match) continue;
    hits.push({ item: it, score: r.score, highlights: r.highlights, ageMs: r.ageMs, i: i });
  }
  /* Deterministic ordering: score, then newest, then id, then input order.
   * Without the last two tie-breaks the list flickers between renders. */
  const byTime = mcQyStr(o.sort) === "time";
  hits.sort(function (a, b) {
    if (!byTime && b.score !== a.score) return b.score - a.score;
    const ta = mcQyNum(a.item.t, -Infinity), tb = mcQyNum(b.item.t, -Infinity);
    if (tb !== ta) return tb - ta;
    const ia = mcQyStr(a.item.id), ib = mcQyStr(b.item.id);
    if (ia !== ib) return ia < ib ? -1 : 1;
    return a.i - b.i;
  });
  const total = hits.length;
  const offset = Math.max(0, mcQyInt(o.offset, 0));
  const limit = mcQyInt(o.limit, 0);
  const page = limit > 0 ? hits.slice(offset, offset + limit) : hits.slice(offset);
  for (let i = 0; i < page.length; i++) delete page[i].i;
  return {
    hits: page, total: total, scanned: list.length, now: now,
    query: compiled.query, ast: compiled.ast, problems: problems,
    severity: compiled.severity, explain: compiled.explain
  };
}


/* ---------------------------------------------------------------------
 * 8. Faceting
 *
 * Age buckets are relative and always present (even at zero) because a
 * sidebar whose rows appear and vanish as items arrive is unusable — the
 * row you were about to click moves. Severity is ordered by value, not by
 * count, for the same reason. Only src/cat are count-ordered.
 * ------------------------------------------------------------------- */

const mcQyAgeBuckets = [
  { key: "1h", label: "Last hour", max: 3600000 },
  { key: "6h", label: "1-6 hours", max: 6 * 3600000 },
  { key: "24h", label: "6-24 hours", max: 86400000 },
  { key: "7d", label: "1-7 days", max: 7 * 86400000 },
  { key: "older", label: "Older", max: Infinity }
];

function mcQyCountSort(map, topN) {
  const out = [];
  map.forEach(function (count, value) { out.push({ value: value, count: count }); });
  out.sort(function (a, b) { return b.count - a.count || (a.value < b.value ? -1 : (a.value > b.value ? 1 : 0)); });
  const n = mcQyInt(topN, 12);
  if (n > 0 && out.length > n) {
    let other = 0;
    for (let i = n; i < out.length; i++) other += out[i].count;
    const head = out.slice(0, n);
    head.push({ value: "(other)", count: other, other: true });
    return head;
  }
  return out;
}

function mcQyFacets(input, opts) {
  const o = mcQyOpts(opts);
  const rows = Array.isArray(input) ? input : [];
  const now = mcQyNow(o, rows.map(function (r) { return r && r.item ? r.item : r; }));
  const srcMap = new Map(), catMap = new Map(), sevMap = new Map();
  const ageCounts = mcQyAgeBuckets.map(function () { return 0; });
  const flags = { breaking: 0, translated: 0, simulated: 0, corroborated: 0, withUrl: 0 };
  let total = 0, undated = 0;

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const it = row && typeof row === "object" && row.item ? row.item : row;
    if (!it || typeof it !== "object") continue;
    total++;

    const src = mcQyStr(it.src).trim() || "(unknown)";
    srcMap.set(src, (srcMap.get(src) || 0) + 1);
    const cat = mcQyStr(it.cat).trim() || "(uncategorised)";
    catMap.set(cat, (catMap.get(cat) || 0) + 1);

    const sevN = mcQyNum(it.sev, null);
    const sevKey = sevN === null ? "(none)" : mcQyStr(Math.round(mcQyClamp(sevN, 0, 5)));
    sevMap.set(sevKey, (sevMap.get(sevKey) || 0) + 1);

    const t = mcQyNum(it.t, null);
    if (t === null) undated++;
    else {
      const age = Math.max(0, now - t);
      for (let b = 0; b < mcQyAgeBuckets.length; b++) {
        if (age < mcQyAgeBuckets[b].max) { ageCounts[b]++; break; }
      }
    }

    const ctx = { opts: o, ageMs: t === null ? Infinity : Math.max(0, now - t) };
    if (mcQyFlagDefs.breaking.fn(it, ctx)) flags.breaking++;
    if (mcQyBool(it.translated)) flags.translated++;
    if (mcQyBool(it.sim)) flags.simulated++;
    if (mcQySourceCount(it) >= 2) flags.corroborated++;
    if (mcQyStr(it.url)) flags.withUrl++;
  }

  const sev = [];
  sevMap.forEach(function (count, value) { sev.push({ value: value, count: count }); });
  sev.sort(function (a, b) {
    const na = a.value === "(none)" ? 99 : Number(a.value);
    const nb = b.value === "(none)" ? 99 : Number(b.value);
    return na - nb;
  });

  return {
    total: total,
    now: now,
    src: mcQyCountSort(srcMap, o.facetTop),
    cat: mcQyCountSort(catMap, o.facetTop),
    sev: sev,
    age: mcQyAgeBuckets.map(function (b, i) {
      return { value: b.key, label: b.label, count: ageCounts[i] };
    }),
    undated: undated,
    flags: flags
  };
}


/* ---------------------------------------------------------------------
 * 9. Saved searches
 * ------------------------------------------------------------------- */

function mcQySavedCounts(searches, items, opts) {
  const o = mcQyOpts(opts);
  const list = Array.isArray(searches) ? searches : [];
  const rows = Array.isArray(items) ? items : [];
  const now = mcQyNow(o, rows);
  const out = [];
  for (let i = 0; i < list.length; i++) {
    const s = list[i];
    if (!s || typeof s !== "object") continue;
    const compiled = mcQyCompile(s.query, o);
    const since = mcQyNum(s.lastSeenAt, null);
    let count = 0, fresh = 0, top = 0, newestT = null;
    for (let k = 0; k < rows.length; k++) {
      const it = rows[k];
      if (!it || typeof it !== "object") continue;
      const r = mcQyEvaluate(compiled.ast, it, o, now);
      if (!r.match) continue;
      count++;
      if (r.score > top) top = r.score;
      const t = mcQyNum(it.t, null);
      if (t !== null && (newestT === null || t > newestT)) newestT = t;
      if (since !== null && t !== null && t > since) fresh++;
    }
    out.push({
      id: mcQyStr(s.id) || "saved-" + i,
      name: mcQyStr(s.name) || mcQyStr(s.query) || "(untitled)",
      query: compiled.query,
      count: count,
      newCount: since === null ? 0 : fresh,
      topScore: top,
      newestT: newestT,
      explain: compiled.explain,
      problems: compiled.problems,
      severity: compiled.severity
    });
  }
  return out;
}


/* ---------------------------------------------------------------------
 * 10. Alert rules
 *
 * The hard part of alerting is not detection, it is *suppression*. A rule
 * that fires forty times for one story trains the user to ignore it, which
 * costs more than not having the rule. So four independent brakes, in this
 * order, each reported separately so the UI can say why nothing fired:
 *
 *   1. cooldown   — rule-level rate limit, measured against the last fire
 *                   AS OF THE START OF THE BATCH. Deliberate: it lets one
 *                   batch surface up to maxPerBatch genuinely distinct
 *                   stories, then goes quiet. Checking it after every fire
 *                   instead would make maxPerBatch dead code and would mean
 *                   a batch containing two unrelated wars reports one.
 *   2. duplicate  — this exact dedupe key fired within dedupeWindowMs.
 *   3. similar    — a *different* key whose story signature overlaps a
 *                   recent fire by >= dedupeSim (Jaccard). This is what
 *                   actually kills the forty-alert cascade: forty rewrites
 *                   of one story have different ids and different exact
 *                   keys but ~the same content words.
 *   4. max_per_batch — hard ceiling on alerts per rule per batch.
 *
 * State is plain JSON and is returned, never mutated in place.
 * ------------------------------------------------------------------- */

const mcQyRuleDefaults = {
  cooldownMs: 900000,        // 15 min
  dedupe: "story",
  dedupeWindowMs: 3600000,   // 1 h
  dedupeSim: 0.6,
  maxPerBatch: 3,
  minScore: 0,
  enabled: true
};

function mcQyStemLite(w) {
  if (w.length <= 4) return w;
  if (/ies$/.test(w)) return w.slice(0, -3) + "y";
  if (/(sses|shes|ches|xes)$/.test(w)) return w.slice(0, -2);
  if (/ing$/.test(w) && w.length > 6) return w.slice(0, -3);
  if (/ed$/.test(w) && w.length > 5) return w.slice(0, -2);
  if (/s$/.test(w) && !/ss$/.test(w)) return w.slice(0, -1);
  return w;
}

/* Story signature: stemmed content words, deduped and sorted. Sorting is
 * what makes it order-insensitive, so "Russia strikes Kyiv" and "Kyiv hit
 * in Russian strikes" land on overlapping signatures. The exact key uses
 * the 8 longest words (long words are the specific ones); the token set is
 * kept for the Jaccard test, which is the real workhorse. */
function mcQyStorySignature(text) {
  const toks = mcQyTokenizeText(text);
  const seen = Object.create(null);
  const words = [];
  for (let i = 0; i < toks.length && words.length < 40; i++) {
    const w = mcQyStemLite(toks[i].w);
    if (w.length < 3 || mcQyStop[w] || seen[w]) continue;
    seen[w] = 1;
    words.push(w);
  }
  const byLen = words.slice().sort(function (a, b) { return b.length - a.length || (a < b ? -1 : 1); });
  const key = byLen.slice(0, 8).sort().join("-");
  return { key: key, toks: words.slice(0, 24).sort() };
}

function mcQyJaccard(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length === 0 || b.length === 0) return 0;
  const set = Object.create(null);
  for (let i = 0; i < a.length; i++) set[a[i]] = 1;
  let inter = 0;
  const seen = Object.create(null);
  for (let i = 0; i < b.length; i++) {
    if (seen[b[i]]) continue;
    seen[b[i]] = 1;
    if (set[b[i]]) inter++;
  }
  const union = a.length + b.length - inter;
  return union > 0 ? inter / union : 0;
}

function mcQyDedupeKey(item, mode) {
  const it = item && typeof item === "object" ? item : {};
  const m = mcQyStr(mode) || "story";
  if (m === "item") return { key: "i:" + (mcQyStr(it.id) || mcQyStr(it.t) + ":" + mcQyStr(it.text).slice(0, 40)), toks: [] };
  if (m === "source") return { key: "src:" + (mcQyFold(it.src) || "(unknown)"), toks: [] };
  if (m === "none") return { key: "n:" + mcQyStr(it.id) + ":" + mcQyStr(it.t) + ":" + Math.random().toString(36).slice(2), toks: [] };
  const sig = mcQyStorySignature(it.text);
  if (!sig.key) return { key: "i:" + (mcQyStr(it.id) || mcQyStr(it.t)), toks: [] };
  return { key: "s:" + sig.key, toks: sig.toks };
}

function mcQyNewAlertState() { return { v: 1, rules: {} }; }

function mcQyCloneState(state) {
  const out = mcQyNewAlertState();
  if (!state || typeof state !== "object" || !state.rules || typeof state.rules !== "object") return out;
  for (const id in state.rules) {
    if (!Object.prototype.hasOwnProperty.call(state.rules, id)) continue;
    const r = state.rules[id];
    if (!r || typeof r !== "object") continue;
    const fired = [];
    if (Array.isArray(r.fired)) {
      for (let i = 0; i < r.fired.length && i < 500; i++) {
        const f = r.fired[i];
        if (!f || typeof f !== "object") continue;
        fired.push({ k: mcQyStr(f.k), at: mcQyNum(f.at, 0), toks: Array.isArray(f.toks) ? f.toks.slice(0, 24) : [] });
      }
    }
    const buckets = {};
    if (r.buckets && typeof r.buckets === "object") {
      for (const b in r.buckets) if (Object.prototype.hasOwnProperty.call(r.buckets, b)) buckets[b] = mcQyNum(r.buckets[b], 0);
    }
    const sources = {};
    if (r.sources && typeof r.sources === "object") {
      for (const s in r.sources) if (Object.prototype.hasOwnProperty.call(r.sources, s)) sources[s] = mcQyNum(r.sources[s], 0);
    }
    out.rules[id] = {
      lastFireAt: mcQyNum(r.lastFireAt, 0),
      firedCount: mcQyNum(r.firedCount, 0),
      fired: fired,
      matchTimes: Array.isArray(r.matchTimes) ? r.matchTimes.filter(Number.isFinite).slice(0, 5000) : [],
      buckets: buckets,
      sources: sources,
      init: !!r.init
    };
  }
  return out;
}

function mcQyRuleState(state, id) {
  if (!state.rules[id]) {
    state.rules[id] = { lastFireAt: 0, firedCount: 0, fired: [], matchTimes: [], buckets: {}, sources: {}, init: false };
  }
  return state.rules[id];
}

function mcQyNormRule(rule, i) {
  const r = rule && typeof rule === "object" ? rule : {};
  const t = r.trigger && typeof r.trigger === "object" ? r.trigger : { type: mcQyStr(r.trigger) || "on_match" };
  const type = mcQyStr(t.type) || "on_match";
  const known = { on_match: 1, on_count_over: 1, on_rate_spike: 1, on_new_source: 1 };
  const problems = [];
  let useType = type;
  if (!known[type]) {
    mcQyProblem(problems, "warning", "unknown_trigger",
      "Unknown trigger " + mcQyQuote(type) + " — treated as on_match.", 0, 0);
    useType = "on_match";
  }
  const dedupe = mcQyStr(r.dedupe) || mcQyRuleDefaults.dedupe;
  if (["story", "item", "source", "none"].indexOf(dedupe) < 0) {
    mcQyProblem(problems, "warning", "unknown_dedupe",
      "Unknown dedupe mode " + mcQyQuote(dedupe) + " — using 'story'.", 0, 0);
  }
  return {
    id: mcQyStr(r.id) || "rule-" + i,
    name: mcQyStr(r.name) || mcQyStr(r.query) || "rule-" + i,
    query: r.query,
    enabled: r.enabled === undefined ? true : !!r.enabled,
    dedupe: ["story", "item", "source", "none"].indexOf(dedupe) >= 0 ? dedupe : "story",
    dedupeWindowMs: Math.max(0, mcQyNum(r.dedupeWindowMs, mcQyRuleDefaults.dedupeWindowMs)),
    dedupeSim: mcQyClamp(mcQyNum(r.dedupeSim, mcQyRuleDefaults.dedupeSim), 0, 1),
    cooldownMs: Math.max(0, mcQyNum(r.cooldownMs, mcQyRuleDefaults.cooldownMs)),
    maxPerBatch: Math.max(1, mcQyInt(r.maxPerBatch, mcQyRuleDefaults.maxPerBatch)),
    minScore: mcQyNum(r.minScore, 0),
    trigger: {
      type: useType,
      n: Math.max(1, mcQyInt(t.n, 5)),
      windowMs: Math.max(1000, mcQyNum(t.windowMs, 900000)),
      factor: Math.max(1, mcQyNum(t.factor, 3)),
      minCount: Math.max(1, mcQyInt(t.minCount, 5)),
      baselineWindows: Math.max(1, mcQyInt(t.baselineWindows, 4))
    },
    problems: problems
  };
}

function mcQyPruneRuleState(rs, rule, now) {
  const keepFired = Math.max(rule.dedupeWindowMs, rule.cooldownMs, 3600000) * 2;
  const fired = [];
  for (let i = 0; i < rs.fired.length; i++) {
    if (now - rs.fired[i].at <= keepFired) fired.push(rs.fired[i]);
  }
  /* Newest first, hard cap: an unbounded fire log is a memory leak in a
   * tab that stays open for a week. 200 recent stories is plenty of
   * context for de-duplication. */
  fired.sort(function (a, b) { return b.at - a.at; });
  rs.fired = fired.slice(0, 200);

  const keepMatch = rule.trigger.windowMs * 4;
  const mt = [];
  for (let i = 0; i < rs.matchTimes.length; i++) if (now - rs.matchTimes[i] <= keepMatch) mt.push(rs.matchTimes[i]);
  mt.sort(function (a, b) { return a - b; });
  rs.matchTimes = mt.slice(-5000);

  const curIdx = Math.floor(now / rule.trigger.windowMs);
  const minIdx = curIdx - (rule.trigger.baselineWindows + 2);
  for (const k in rs.buckets) {
    if (!Object.prototype.hasOwnProperty.call(rs.buckets, k)) continue;
    if (Number(k) < minIdx) delete rs.buckets[k];
  }
  const srcKeys = Object.keys(rs.sources);
  if (srcKeys.length > 500) {
    srcKeys.sort(function (a, b) { return rs.sources[a] - rs.sources[b]; });
    for (let i = 0; i < srcKeys.length - 500; i++) delete rs.sources[srcKeys[i]];
  }
}

function mcQyAlertTitle(rule, type, items, count) {
  const first = items && items.length ? items[0] : null;
  const head = first ? mcQyStr(first.text).replace(/\s+/g, " ").trim().slice(0, 120) : "";
  if (type === "on_count_over") return rule.name + ": " + count + " matching items";
  if (type === "on_rate_spike") return rule.name + ": activity spike (" + count + " items)";
  if (type === "on_new_source") return rule.name + ": new source " + (first ? mcQyQuote(first.src) : "");
  return rule.name + (head ? ": " + head : "");
}

function mcQyRunRules(rules, batch, state, opts) {
  const o = mcQyOpts(opts);
  o.__norm = true;
  const list = Array.isArray(rules) ? rules : [];
  const items = Array.isArray(batch) ? batch : [];
  const now = mcQyNow(o, items);
  const next = mcQyCloneState(state);
  const alerts = [], suppressed = [], stats = [];
  const cache = new Map();

  for (let ri = 0; ri < list.length; ri++) {
    const rule = mcQyNormRule(list[ri], ri);
    if (!rule.enabled) { stats.push({ ruleId: rule.id, enabled: false, matched: 0, fired: 0 }); continue; }

    let compiled = cache.get(mcQyStr(rule.query));
    if (!compiled) { compiled = mcQyCompile(rule.query, o); cache.set(mcQyStr(rule.query), compiled); }

    const rs = mcQyRuleState(next, rule.id);
    const firstRun = !rs.init;
    rs.init = true;

    /* --- match the batch ------------------------------------------- */
    const matched = [];
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      if (!it || typeof it !== "object") continue;
      const r = mcQyEvaluate(compiled.ast, it, o, now);
      if (!r.match || r.score < rule.minScore) continue;
      matched.push({ item: it, score: r.score, t: mcQyNum(it.t, now) });
    }
    matched.sort(function (a, b) { return b.score - a.score || b.t - a.t; });

    for (let i = 0; i < matched.length; i++) rs.matchTimes.push(matched[i].t);
    const wIdx = Math.floor(now / rule.trigger.windowMs);
    if (matched.length) rs.buckets[wIdx] = (rs.buckets[wIdx] || 0) + matched.length;
    else if (rs.buckets[wIdx] === undefined) rs.buckets[wIdx] = 0;

    /* --- build candidates ------------------------------------------ */
    const cands = [];
    const T = rule.trigger.type;
    if (T === "on_match") {
      for (let i = 0; i < matched.length; i++) {
        const dk = mcQyDedupeKey(matched[i].item, rule.dedupe);
        cands.push({ key: dk.key, toks: dk.toks, items: [matched[i].item], count: 1, score: matched[i].score });
      }
    } else if (T === "on_count_over") {
      const from = now - rule.trigger.windowMs;
      let c = 0;
      for (let i = 0; i < rs.matchTimes.length; i++) if (rs.matchTimes[i] >= from && rs.matchTimes[i] <= now) c++;
      if (c >= rule.trigger.n) {
        /* Keyed on the window index: a running story keeps the count over
         * the threshold on every batch, and without this key it would fire
         * on every batch forever. */
        cands.push({
          key: "count:" + wIdx, toks: [], count: c, score: matched.length ? matched[0].score : 1,
          items: matched.slice(0, 5).map(function (m) { return m.item; }),
          detail: { count: c, threshold: rule.trigger.n, windowMs: rule.trigger.windowMs }
        });
      }
    } else if (T === "on_rate_spike") {
      const cur = rs.buckets[wIdx] || 0;
      let sum = 0, n = 0;
      for (let k = 1; k <= rule.trigger.baselineWindows; k++) {
        const b = rs.buckets[wIdx - k];
        if (b === undefined) continue;
        sum += b; n++;
      }
      /* Refuse to fire without a baseline. Cold start is the single biggest
       * source of false "spikes" — everything is a spike compared to no
       * history at all. */
      if (n >= 2 && cur >= rule.trigger.minCount) {
        const mean = sum / n;
        const floor = 0.5;                 // stops divide-by-zero euphoria
        if (cur >= rule.trigger.factor * Math.max(mean, floor)) {
          cands.push({
            key: "spike:" + wIdx, toks: [], count: cur, score: matched.length ? matched[0].score : 1,
            items: matched.slice(0, 5).map(function (m) { return m.item; }),
            detail: { count: cur, baseline: Math.round(mean * 100) / 100, factor: rule.trigger.factor }
          });
        }
      }
    } else if (T === "on_new_source") {
      const seenNow = Object.create(null);
      for (let i = 0; i < matched.length; i++) {
        const s = mcQyFold(matched[i].item.src);
        if (!s || seenNow[s]) continue;
        seenNow[s] = 1;
        const known = Object.prototype.hasOwnProperty.call(rs.sources, s);
        rs.sources[s] = now;
        /* First run learns silently. Otherwise the very first batch alerts
         * once per source in the feed, which is pure noise. */
        if (!known && !firstRun) {
          cands.push({
            key: "newsrc:" + s, toks: [], count: 1, score: matched[i].score,
            items: [matched[i].item], detail: { src: mcQyStr(matched[i].item.src) }
          });
        }
      }
    }

    /* --- collapse rewrites of one story, within the batch ----------
     *
     * This has to happen BEFORE the fire loop, not inside it. Similarity is
     * not transitive: every rewrite of a running story resembles the original
     * ("Drone strike near Kyiv overnight" vs "...amid air raid alerts" = 0.63)
     * while resembling each other far less (0.50). Suppressing incrementally
     * against already-fired alerts therefore made the outcome depend on which
     * rewrite sorted first — the long outliers fired, each too distant from
     * the next to suppress it, and forty updates of one story produced three
     * alerts instead of one.
     *
     * Single-link agglomeration over the whole batch is order-independent:
     * two candidates share a cluster if a chain of >= dedupeSim links joins
     * them, whichever order they arrived in. The representative is the
     * highest-scoring member, and the rest fold their items into it so the
     * alert still reports every outlet that carried the story.
     *
     * Deliberately greedy: over-merging two genuinely distinct stories costs
     * one missed alert, under-merging costs forty notifications for one
     * event. The asymmetry is the whole reason this panel exists. */
    if (rule.dedupeSim > 0 && cands.length > 1) {
      const parent = [];
      for (let i = 0; i < cands.length; i++) parent.push(i);
      const find = function (x) { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };
      for (let i = 0; i < cands.length; i++) {
        for (let j = i + 1; j < cands.length; j++) {
          if (find(i) === find(j)) continue;
          if (!cands[i].toks || !cands[j].toks || !cands[i].toks.length || !cands[j].toks.length) continue;
          if (mcQyJaccard(cands[i].toks, cands[j].toks) >= rule.dedupeSim) parent[find(i)] = find(j);
        }
      }
      const groups = Object.create(null);
      for (let i = 0; i < cands.length; i++) {
        const r = find(i);
        if (!groups[r]) groups[r] = [];
        groups[r].push(cands[i]);
      }
      const merged = [];
      for (const g in groups) {
        const members = groups[g];
        if (members.length === 1) { merged.push(members[0]); continue; }
        let best = members[0];
        for (let i = 1; i < members.length; i++) if (members[i].score > best.score) best = members[i];
        const items = [], seenId = Object.create(null);
        let count = 0;
        for (let i = 0; i < members.length; i++) {
          count += members[i].count || 0;
          for (let k = 0; k < members[i].items.length; k++) {
            const id = mcQyStr(members[i].items[k].id);
            if (id && seenId[id]) continue;
            if (id) seenId[id] = 1;
            items.push(members[i].items[k]);
          }
        }
        /* The folded-away rewrites still have to be reported. Collapsing them
           silently would leave the user with one alert and no way to see that
           thirty-nine others were judged the same story — the suppression log
           IS the explanation, so it has to survive the merge. Similarity is
           reported as the strongest link that pulled the member into the
           cluster, not its distance to the representative, because under
           single-link chaining those are not the same number. */
        for (let i = 0; i < members.length; i++) {
          if (members[i] === best) continue;
          let link = 0;
          const probe = Math.min(members.length, 24);
          for (let j = 0; j < probe; j++) {
            if (members[j] === members[i]) continue;
            const jv = mcQyJaccard(members[i].toks, members[j].toks);
            if (jv > link) link = jv;
          }
          suppressed.push({
            ruleId: rule.id, key: members[i].key,
            reason: members[i].key === best.key ? "duplicate" : "similar",
            similarTo: best.key, similarity: Math.round(link * 100) / 100,
            lastFiredAt: now,
            itemId: members[i].items[0] ? mcQyStr(members[i].items[0].id) : ""
          });
        }
        merged.push({ key: best.key, toks: best.toks, items: items, count: count, score: best.score,
                      rewrites: members.length });
      }
      merged.sort(function (x, y) { return y.score - x.score; });
      cands.length = 0;
      for (let i = 0; i < merged.length; i++) cands.push(merged[i]);
    }

    /* --- suppression pipeline -------------------------------------- */
    const cooldownFrom = rs.lastFireAt;            // frozen at batch start
    const inCooldown = rule.cooldownMs > 0 && cooldownFrom > 0 && (now - cooldownFrom) < rule.cooldownMs;
    let firedThisBatch = 0;
    const localFired = [];

    for (let ci = 0; ci < cands.length; ci++) {
      const c = cands[ci];
      if (inCooldown) {
        suppressed.push({
          ruleId: rule.id, key: c.key, reason: "cooldown",
          until: cooldownFrom + rule.cooldownMs, itemId: c.items[0] ? mcQyStr(c.items[0].id) : ""
        });
        continue;
      }
      let dup = null;
      for (let i = 0; i < rs.fired.length; i++) {
        if (rs.fired[i].k === c.key && (now - rs.fired[i].at) <= rule.dedupeWindowMs) { dup = rs.fired[i]; break; }
      }
      if (dup) {
        suppressed.push({
          ruleId: rule.id, key: c.key, reason: "duplicate", lastFiredAt: dup.at,
          itemId: c.items[0] ? mcQyStr(c.items[0].id) : ""
        });
        continue;
      }
      if (c.toks.length && rule.dedupeSim > 0) {
        /* Single-link clustering, not nearest-representative.
         *
         * Similarity is not transitive, and a running story is a chain: every
         * rewrite resembles the original, but "X -- updated" and "X amid air
         * raid alerts" resemble each other only 0.56. Comparing a candidate
         * against just the fired headline therefore leaks — whichever rewrite
         * happened to fire first decided how many others escaped, so the same
         * forty updates produced one alert or four depending on sort order.
         *
         * A suppressed rewrite joins the cluster it matched, and later
         * candidates are tested against every member. Chaining is what makes
         * "one story, one alert" hold regardless of arrival order. It is the
         * deliberately greedy direction: over-merging a genuinely separate
         * story costs one missed alert, while under-merging costs forty. */
        let sim = null;
        for (let i = 0; i < rs.fired.length; i++) {
          const f = rs.fired[i];
          if ((now - f.at) > rule.dedupeWindowMs) continue;
          const members = f.members && f.members.length ? f.members : (f.toks ? [f.toks] : []);
          for (let m = 0; m < members.length; m++) {
            if (!members[m] || !members[m].length) continue;
            const j = mcQyJaccard(members[m], c.toks);
            if (j >= rule.dedupeSim && (!sim || j > sim.j)) sim = { j: j, k: f.k, at: f.at, ref: f };
          }
        }
        if (sim) {
          /* Cap the cluster so a long-running story cannot grow an unbounded
             comparison list — 24 members is far past the point of new signal. */
          if (sim.ref) {
            if (!sim.ref.members) sim.ref.members = [sim.ref.toks];
            if (sim.ref.members.length < 24) sim.ref.members.push(c.toks);
          }
          suppressed.push({
            ruleId: rule.id, key: c.key, reason: "similar", similarTo: sim.k,
            similarity: Math.round(sim.j * 100) / 100, lastFiredAt: sim.at,
            itemId: c.items[0] ? mcQyStr(c.items[0].id) : ""
          });
          continue;
        }
      }
      if (firedThisBatch >= rule.maxPerBatch) {
        suppressed.push({
          ruleId: rule.id, key: c.key, reason: "max_per_batch", limit: rule.maxPerBatch,
          itemId: c.items[0] ? mcQyStr(c.items[0].id) : ""
        });
        continue;
      }

      firedThisBatch++;
      rs.fired.push({ k: c.key, at: now, toks: c.toks, members: [c.toks] });
      localFired.push(c.key);
      rs.lastFireAt = now;
      rs.firedCount++;
      alerts.push({
        ruleId: rule.id,
        ruleName: rule.name,
        trigger: T,
        at: now,
        key: c.key,
        title: mcQyAlertTitle(rule, T, c.items, c.count),
        count: c.count,
        score: c.score,
        itemIds: c.items.map(function (x) { return mcQyStr(x && x.id); }),
        items: c.items,
        detail: c.detail || null,
        explain: compiled.explain
      });
    }

    mcQyPruneRuleState(rs, rule, now);
    stats.push({
      ruleId: rule.id, enabled: true, matched: matched.length,
      candidates: cands.length, fired: firedThisBatch,
      suppressed: cands.length - firedThisBatch, inCooldown: inCooldown,
      problems: rule.problems.concat(compiled.problems)
    });
  }

  return { alerts: alerts, suppressed: suppressed, state: next, stats: stats, now: now };
}


/* ===================================================================== */
/* Self-test. Node only; the merge tool strips from the guard line down.  */
/* ===================================================================== */

if (typeof module !== "undefined" && require.main === module) {
  let mcQyPass = 0;
  const mcQyFails = [];
  const mcQyOk = function (name, cond) {
    if (cond) mcQyPass++; else mcQyFails.push(name);
  };
  const mcQyEq = function (name, got, want) {
    const g = typeof got === "object" ? JSON.stringify(got) : got;
    const w = typeof want === "object" ? JSON.stringify(want) : want;
    if (g === w) mcQyPass++; else mcQyFails.push(name + " (got " + g + ", want " + w + ")");
  };
  const mcQyNoThrow = function (name, fn) {
    try { const r = fn(); mcQyPass++; return r; }
    catch (e) { mcQyFails.push(name + " threw: " + (e && e.message)); return null; }
  };
  const mcQyCodes = function (p) { return p.map(function (x) { return x.code; }); };
  const mcQyHas = function (p, code) { return mcQyCodes(p).indexOf(code) >= 0; };

  const T0 = 1700000000000;
  const mcQyItem = function (o) {
    return {
      id: o.id || "x", t: o.t === undefined ? T0 : o.t, text: o.text || "",
      url: o.url || "", src: o.src || "reuters", cat: o.cat || "World",
      sev: o.sev === undefined ? 2 : o.sev, sources: o.sources || ["a"],
      sim: !!o.sim, translated: !!o.translated
    };
  };
  const OPT = { now: T0 };

  /* ---------- 1. utilities ---------- */
  mcQyEq("str(null)", mcQyStr(null), "");
  mcQyEq("str(NaN)", mcQyStr(NaN), "");
  mcQyEq("str(Infinity)", mcQyStr(Infinity), "");
  mcQyEq("str(false)", mcQyStr(false), "false");
  mcQyNoThrow("str(null-proto obj)", function () { return mcQyStr(Object.create(null)); });
  mcQyEq("str(throwing toString)", mcQyStr({ toString: function () { throw new Error("no"); } }), "");
  mcQyEq("fold ascii", mcQyFold("HeLLo"), "hello");
  mcQyEq("fold diacritics", mcQyFold("Zelenský"), "zelensky");
  mcQyEq("fold null", mcQyFold(null), "");
  mcQyEq("num garbage", mcQyNum("abc", -1), -1);
  mcQyEq("num infinity", mcQyNum(Infinity, -1), -1);
  mcQyEq("clamp NaN", mcQyClamp(NaN, 1, 5), 1);

  mcQyOk("glob prefix", mcQyGlob("ukrain*", "ukrainian"));
  mcQyOk("glob no match", !mcQyGlob("ukrain*", "russia"));
  mcQyOk("glob question", mcQyGlob("k?iv", "kyiv"));
  mcQyOk("glob middle", mcQyGlob("a*b", "axxxb"));
  mcQyOk("glob exact via stars", mcQyGlob("*", "anything"));
  mcQyOk("glob non-string", !mcQyGlob(null, "x"));
  (function () {
    // The pattern that makes a naive regex explode. Must return fast.
    const t = Date.now();
    const r = mcQyGlob("a*a*a*a*a*a*a*a*b", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    mcQyOk("glob pathological is false", r === false);
    mcQyOk("glob pathological is fast (" + (Date.now() - t) + "ms)", Date.now() - t < 200);
  })();

  mcQyEq("edit identical", mcQyEditDistance("kyiv", "kyiv", 2), 0);
  mcQyEq("edit one", mcQyEditDistance("kyiv", "kiev", 2), 2);
  mcQyEq("edit budget", mcQyEditDistance("kyiv", "moscow", 1), 2);
  mcQyEq("edit non-string", mcQyEditDistance(null, "a", 2), 3);

  mcQyEq("duration 30m", mcQyParseDuration("30m").ms, 1800000);
  mcQyEq("duration 2h", mcQyParseDuration("2h").ms, 7200000);
  mcQyEq("duration 3d", mcQyParseDuration("3d").ms, 259200000);
  mcQyEq("duration 1h30m", mcQyParseDuration("1h30m").ms, 5400000);
  mcQyOk("duration bare is assumed minutes", mcQyParseDuration("30").assumed && mcQyParseDuration("30").ms === 1800000);
  mcQyOk("duration garbage", !mcQyParseDuration("banana").ok);
  mcQyOk("duration half-garbage", !mcQyParseDuration("30x").ok);
  mcQyOk("duration empty", !mcQyParseDuration("").ok);
  mcQyEq("human 30m", mcQyHumanMs(1800000), "30 minutes");
  mcQyEq("human 1h30m", mcQyHumanMs(5400000), "1 hour 30 minutes");
  mcQyEq("human NaN", mcQyHumanMs(NaN), "0 seconds");
  mcQyEq("human negative", mcQyHumanMs(-5), "0 seconds");

  /* ---------- 2. parser: the happy path ---------- */
  (function () {
    const p = mcQyParse("kyiv drone", OPT);
    mcQyEq("bare terms -> and", p.ast.type, "and");
    mcQyEq("bare terms kids", p.ast.kids.length, 2);
    mcQyEq("term value folded", p.ast.kids[0].value, "kyiv");
  })();
  (function () {
    const p = mcQyParse("a OR b AND c", OPT);
    mcQyEq("precedence: OR at top", p.ast.type, "or");
    mcQyEq("precedence: AND nested", p.ast.kids[1].type, "and");
  })();
  (function () {
    const p = mcQyParse("(a OR b) c", OPT);
    mcQyEq("parens: AND at top", p.ast.type, "and");
    mcQyEq("parens: OR nested", p.ast.kids[0].type, "or");
  })();
  (function () {
    const p = mcQyParse('"gaza ceasefire"', OPT);
    mcQyEq("phrase type", p.ast.type, "phrase");
    mcQyEq("phrase words", p.ast.words.join("|"), "gaza|ceasefire");
  })();
  (function () {
    const p = mcQyParse("-russia kyiv", OPT);
    mcQyEq("minus is NOT", p.ast.kids[0].type, "not");
    mcQyEq("minus negates the right term", p.ast.kids[0].kid.value, "russia");
  })();
  (function () {
    const p = mcQyParse("+kyiv", OPT);
    mcQyOk("plus marks required", p.ast.req === true);
    mcQyEq("plus keeps the term", p.ast.value, "kyiv");
  })();
  (function () {
    const p = mcQyParse("NOT NOT kyiv", OPT);
    mcQyEq("NOT NOT collapses", p.ast.type, "term");
    mcQyEq("NOT NOT keeps value", p.ast.value, "kyiv");
    mcQyOk("NOT NOT is reported", mcQyHas(p.problems, "double_negation"));
    mcQyOk("NOT NOT is not an error", p.severity !== "error");
  })();
  (function () {
    const p = mcQyParse("NOT NOT NOT kyiv", OPT);
    mcQyEq("triple NOT stays negated", p.ast.type, "not");
  })();
  (function () {
    const p = mcQyParse("covid-19", OPT);
    mcQyEq("hyphenated term becomes a phrase", p.ast.type, "phrase");
    mcQyEq("hyphenated words", p.ast.words.join("|"), "covid|19");
  })();
  (function () {
    const p = mcQyParse("a && b || c", OPT);
    mcQyEq("symbol operators", p.ast.type, "or");
  })();
  (function () {
    const p = mcQyParse("http://example.com/a", OPT);
    mcQyOk("url is not read as a field", !mcQyHas(p.problems, "unknown_field"));
  })();

  /* ---------- 3. parser: fields ---------- */
  (function () {
    const p = mcQyParse("src:reuters", OPT);
    mcQyEq("kw node", p.ast.type, "kw");
    mcQyEq("kw field", p.ast.field, "src");
    mcQyEq("kw value folded", p.ast.values[0], "reuters");
  })();
  (function () {
    const p = mcQyParse("source:AP,AFP", OPT);
    mcQyEq("alias resolves", p.ast.field, "src");
    mcQyEq("comma list", p.ast.values.join("|"), "ap|afp");
  })();
  (function () {
    const p = mcQyParse("sev:>3", OPT);
    mcQyEq("num op", p.ast.op, ">");
    mcQyEq("num value", p.ast.values[0], 3);
  })();
  (function () {
    const p = mcQyParse("sev>=4", OPT);
    mcQyEq("colonless operator", p.ast.op, ">=");
    mcQyEq("colonless value", p.ast.values[0], 4);
  })();
  (function () {
    const p = mcQyParse("age:<30m", OPT);
    mcQyEq("duration op", p.ast.op, "<");
    mcQyEq("duration ms", p.ast.values[0], 1800000);
    mcQyOk("duration flagged", p.ast.duration === true);
  })();
  (function () {
    const p = mcQyParse("age:30m", OPT);
    mcQyEq("bare duration reads as <=", p.ast.op, "<=");
    mcQyOk("bare duration explained", mcQyHas(p.problems, "duration_lte"));
  })();
  (function () {
    const p = mcQyParse("sources:>2", OPT);
    mcQyEq("sources field", p.ast.field, "sources");
  })();
  (function () {
    const p = mcQyParse("is:translated is:breaking is:simulated", OPT);
    mcQyEq("three flags", p.ast.kids.length, 3);
    mcQyEq("flag names", p.ast.kids.map(function (k) { return k.flag; }).join("|"), "translated|breaking|simulated");
  })();
  (function () {
    const p = mcQyParse("is:sim", OPT);
    mcQyEq("flag alias", p.ast.flag, "simulated");
  })();
  (function () {
    const p = mcQyParse('src:"BBC News"', OPT);
    mcQyEq("quoted field value keeps the space", p.ast.values[0], "bbc news");
  })();

  /* ---------- 4. parser: adversarial ---------- */
  (function () {
    const p = mcQyNoThrow("empty query does not throw", function () { return mcQyParse("", OPT); });
    mcQyEq("empty -> all", p.ast.type, "all");
    mcQyOk("empty is reported", mcQyHas(p.problems, "empty_query"));
    mcQyEq("empty severity", p.severity, "info");
    mcQyOk("empty is not an error", p.ok);
  })();
  (function () {
    mcQyEq("null query", mcQyParse(null, OPT).ast.type, "all");
    mcQyEq("undefined query", mcQyParse(undefined, OPT).ast.type, "all");
    mcQyEq("number query", mcQyParse(42, OPT).ast.type, "term");
    mcQyEq("object query", mcQyParse({}, OPT).ast.type, "all");
    mcQyEq("array query", mcQyParse([1, 2], OPT).ast.type, "phrase");
    mcQyOk("whitespace query", mcQyParse("   \t\n  ", OPT).ast.type === "all");
  })();
  (function () {
    const p = mcQyNoThrow("only operators does not throw", function () { return mcQyParse("AND OR NOT", OPT); });
    mcQyEq("only operators -> all", p.ast.type, "all");
    mcQyOk("only operators reported", p.problems.length > 0);
    mcQyOk("leading operator noted", mcQyHas(p.problems, "leading_operator"));
    mcQyOk("dangling NOT noted", mcQyHas(p.problems, "dangling_not"));
  })();
  (function () {
    const p = mcQyParse("kyiv AND", OPT);
    mcQyEq("dangling AND keeps the left side", p.ast.type, "term");
    mcQyEq("dangling AND value", p.ast.value, "kyiv");
    mcQyOk("dangling AND reported", mcQyHas(p.problems, "dangling_operator"));
  })();
  (function () {
    const p = mcQyParse("kyiv OR", OPT);
    mcQyEq("dangling OR keeps the left side", p.ast.value, "kyiv");
    mcQyOk("dangling OR reported", mcQyHas(p.problems, "dangling_operator"));
  })();
  (function () {
    const p = mcQyParse("kyiv AND AND drone", OPT);
    mcQyEq("double AND still parses both", p.ast.kids.length, 2);
    mcQyOk("double AND reported", mcQyHas(p.problems, "double_operator"));
  })();
  (function () {
    const p = mcQyNoThrow("unbalanced open paren", function () { return mcQyParse("(a AND (b OR c", OPT); });
    mcQyOk("unclosed paren reported", mcQyHas(p.problems, "unclosed_paren"));
    mcQyEq("unclosed paren still yields a tree", p.ast.type, "and");
    mcQyOk("unclosed paren kept both terms", JSON.stringify(p.ast).indexOf('"b"') > 0);
  })();
  (function () {
    const p = mcQyNoThrow("unbalanced close paren", function () { return mcQyParse("a) b)", OPT); });
    mcQyOk("unmatched ) reported", mcQyHas(p.problems, "unbalanced_paren"));
    mcQyOk("unmatched ) keeps both terms", JSON.stringify(p.ast).indexOf('"b"') > 0);
  })();
  (function () {
    const p = mcQyParse(")))(((", OPT);
    mcQyOk("paren soup does not throw", !!p.ast);
    mcQyEq("paren soup -> all", p.ast.type, "all");
  })();
  (function () {
    const p = mcQyNoThrow("unclosed quote", function () { return mcQyParse('"gaza ceasefire', OPT); });
    mcQyOk("unclosed quote reported", mcQyHas(p.problems, "unclosed_quote"));
    mcQyEq("unclosed quote still a phrase", p.ast.type, "phrase");
    mcQyEq("unclosed quote words", p.ast.words.join("|"), "gaza|ceasefire");
    const pr = p.problems.filter(function (x) { return x.code === "unclosed_quote"; })[0];
    mcQyEq("unclosed quote offset", pr.start, 0);
    mcQyOk("unclosed quote end offset", pr.end === 15);
  })();
  (function () {
    const p = mcQyParse('kyiv "', OPT);
    mcQyOk("lone quote at end does not throw", !!p.ast);
    mcQyEq("lone quote leaves the term", p.ast.type, "term");
  })();
  (function () {
    const p = mcQyParse('""""""', OPT);
    mcQyOk("quote soup does not throw", !!p.ast);
    mcQyEq("quote soup -> all", p.ast.type, "all");
  })();
  (function () {
    // 8-level nesting: the stated requirement.
    let q = "kyiv";
    for (let i = 0; i < 8; i++) q = "(" + q + " OR t" + i + ")";
    const p = mcQyNoThrow("8-level nesting does not throw", function () { return mcQyParse(q, OPT); });
    let d = 0, n = p.ast;
    while (n && n.type === "or") { d++; n = n.kids[0]; }
    mcQyEq("8-level nesting depth preserved", d, 8);
    mcQyOk("8-level nesting has no errors", p.severity !== "error");
    const it = mcQyItem({ text: "kyiv under fire" });
    mcQyOk("8-level nesting evaluates", mcQyMatch(p.ast, it, OPT));
  })();
  (function () {
    // 200 levels: past the guard. Must degrade, not blow the stack.
    let q = "x";
    for (let i = 0; i < 200; i++) q = "(" + q + ")";
    const p = mcQyNoThrow("200-level nesting does not throw", function () { return mcQyParse(q, OPT); });
    mcQyOk("200-level nesting reported", mcQyHas(p.problems, "too_deep"));
    mcQyOk("200-level nesting still yields an ast", !!p.ast && typeof p.ast.type === "string");
  })();
  (function () {
    // 10 KB query.
    const words = [];
    for (let i = 0; i < 1400; i++) words.push("term" + i);
    const q = words.join(" ");
    mcQyOk("10KB query is actually ~10KB (" + q.length + ")", q.length > 9000 && q.length < 13000);
    const t = Date.now();
    const p = mcQyNoThrow("10KB query does not throw", function () { return mcQyParse(q, OPT); });
    const dt = Date.now() - t;
    mcQyEq("10KB query kids", p.ast.kids.length, 1400);
    mcQyOk("10KB query is fast (" + dt + "ms)", dt < 1500);
    const ex = mcQyExplain(p.ast);
    mcQyOk("10KB explain is bounded (" + ex.length + " chars)", ex.length < 500);
    mcQyOk("10KB explain mentions the remainder", ex.indexOf("more condition") > 0);
    mcQyOk("10KB explain has no undefined", ex.indexOf("undefined") < 0 && ex.indexOf("NaN") < 0);
  })();
  (function () {
    // A 10KB single token, and a 200KB query (past the cap).
    const big = "a".repeat(10000);
    const p1 = mcQyNoThrow("10KB single token", function () { return mcQyParse(big, OPT); });
    mcQyEq("10KB token is one term", p1.ast.type, "term");
    const huge = "b ".repeat(60000);
    const p2 = mcQyNoThrow("120KB query does not throw", function () { return mcQyParse(huge, OPT); });
    mcQyOk("oversize query truncated or capped",
      mcQyHas(p2.problems, "query_truncated") || mcQyHas(p2.problems, "too_many_terms"));
  })();
  (function () {
    const p = mcQyNoThrow("garbage numeric field", function () { return mcQyParse("sev:>abc", OPT); });
    mcQyEq("garbage number degrades to all", p.ast.type, "all");
    mcQyOk("garbage number reported", mcQyHas(p.problems, "bad_number"));
    mcQyEq("garbage number severity", p.severity, "error");
    const pr = p.problems.filter(function (x) { return x.code === "bad_number"; })[0];
    mcQyOk("garbage number message names the value", pr.message.indexOf("abc") > 0);
    mcQyOk("garbage number has offsets", pr.start === 0 && pr.end === 8);
  })();
  (function () {
    const p = mcQyParse("kyiv sev:>abc", OPT);
    /* "term", not "and": the broken sev filter degrades to `all`, and `all`
       is the neutral element of AND, so the tree collapses to just the kyiv
       term. Same result set either way — but the simpler tree keeps explain()
       from announcing "kyiv AND everything", and the dropped filter is still
       reported through problems at error severity, which is the channel the
       UI actually renders. */
    mcQyEq("broken filter leaves a usable search", p.ast.type, "term");
    const it = mcQyItem({ text: "kyiv hit", sev: 1 });
    mcQyOk("broken filter does not empty the results", mcQyMatch(p.ast, it, OPT));
  })();
  (function () {
    const p = mcQyParse("age:<banana", OPT);
    mcQyEq("garbage duration degrades", p.ast.type, "all");
    mcQyOk("garbage duration reported", mcQyHas(p.problems, "bad_duration"));
    mcQyOk("garbage duration suggests a format", p.problems[0].message.indexOf("30m") > 0);
  })();
  (function () {
    const p = mcQyParse("is:purple", OPT);
    mcQyEq("unknown flag degrades", p.ast.type, "all");
    mcQyOk("unknown flag reported", mcQyHas(p.problems, "unknown_flag"));
    mcQyOk("unknown flag lists the real ones", p.problems[0].message.indexOf("breaking") > 0);
  })();
  (function () {
    const p = mcQyParse("src:", OPT);
    mcQyEq("empty field value degrades", p.ast.type, "all");
    mcQyOk("empty field value reported", mcQyHas(p.problems, "empty_value"));
  })();
  (function () {
    const p = mcQyParse("src:>reuters", OPT);
    mcQyOk("comparison on text reported", mcQyHas(p.problems, "bad_operator"));
    mcQyEq("comparison on text still filters", p.ast.type, "kw");
  })();
  (function () {
    const p = mcQyParse("flavour:vanilla", OPT);
    mcQyOk("unknown field reported", mcQyHas(p.problems, "unknown_field"));
    mcQyEq("unknown field searches the value", p.ast.type, "term");
    mcQyEq("unknown field value", p.ast.value, "vanilla");
    mcQyOk("unknown field lists known ones", p.problems[0].message.indexOf("src") > 0);
  })();
  (function () {
    const p = mcQyParse("*", OPT);
    mcQyEq("bare wildcard degrades", p.ast.type, "all");
    mcQyOk("bare wildcard reported", mcQyHas(p.problems, "bare_wildcard"));
  })();
  (function () {
    const p = mcQyParse("--- +++ ...", OPT);
    mcQyOk("punctuation soup does not throw", !!p.ast);
    mcQyOk("punctuation soup yields no matcher", p.ast.type === "all" || p.ast.type === "term");
  })();
  (function () {
    const p = mcQyParse("black and white", OPT);
    mcQyOk("lowercase 'and' is a word", mcQyHas(p.problems, "lowercase_operator"));
    mcQyEq("lowercase 'and' keeps three terms", p.ast.kids.length, 3);
    mcQyEq("lowercase 'and' term survives", p.ast.kids[1].value, "and");
  })();
  (function () {
    // Markup-looking input must be data, never structure.
    const nasty = '<img src=x onerror=alert(1)> "quoted';
    const p = mcQyNoThrow("markup-ish query does not throw", function () { return mcQyParse(nasty, OPT); });
    mcQyOk("markup-ish query yields an ast", !!p.ast);
    const ex = mcQyExplain(p.ast);
    mcQyOk("explain does not emit undefined", ex.indexOf("undefined") < 0 && ex.indexOf("NaN") < 0);
  })();
  (function () {
    // Prototype-pollution shaped input.
    const p = mcQyParse("__proto__ constructor prototype", OPT);
    mcQyEq("proto words are just words", p.ast.kids.length, 3);
    const it = mcQyItem({ text: "the constructor and the prototype and __proto__" });
    mcQyOk("proto words match normally", mcQyMatch(p.ast, it, OPT));
    const it2 = mcQyItem({ text: "unrelated" });
    mcQyOk("proto words do not match everything", !mcQyMatch(p.ast, it2, OPT));
  })();
  (function () {
    // Seeded fuzz: no input may throw and every result must be well formed.
    let seed = 20240613;
    const rnd = function () { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
    const alphabet = 'abc()"\':<>=~*+- \tANDORNOTsrccatsevageis,|&!0123456789.';
    let bad = 0;
    for (let i = 0; i < 400; i++) {
      let q = "";
      const len = 1 + Math.floor(rnd() * 40);
      for (let k = 0; k < len; k++) q += alphabet[Math.floor(rnd() * alphabet.length)];
      try {
        const p = mcQyParse(q, OPT);
        if (!p || !p.ast || typeof p.ast.type !== "string" || !Array.isArray(p.problems)) { bad++; continue; }
        const e = mcQyExplain(p.ast);
        if (typeof e !== "string" || e.indexOf("undefined") >= 0 || e.indexOf("NaN") >= 0) { bad++; continue; }
        const r = mcQyEvaluate(p.ast, mcQyItem({ text: "kyiv drone strike over kharkiv" }), OPT);
        if (typeof r.match !== "boolean" || !Number.isFinite(r.score)) bad++;
        for (let z = 0; z < p.problems.length; z++) {
          const pr = p.problems[z];
          if (!Number.isFinite(pr.start) || !Number.isFinite(pr.end) || pr.end < pr.start) { bad++; break; }
        }
      } catch (e) { bad++; }
    }
    mcQyEq("400 fuzz queries all survive", bad, 0);
  })();

  /* ---------- 5. problem offsets ---------- */
  (function () {
    const q = "kyiv sev:>abc drone";
    const p = mcQyParse(q, OPT);
    const pr = p.problems.filter(function (x) { return x.code === "bad_number"; })[0];
    mcQyEq("offset start points at the field", pr.start, 5);
    mcQyEq("offset end points past the value", pr.end, 13);
    mcQyEq("underlined text is the clause", q.slice(pr.start, pr.end), "sev:>abc");
  })();

  /* ---------- 6. explain ---------- */
  mcQyEq("explain empty", mcQyExplain(mcQyParse("", OPT).ast), "Matches everything (no filter).");
  mcQyOk("explain term", mcQyExplain(mcQyParse("kyiv", OPT).ast).indexOf('the word "kyiv"') > 0);
  mcQyOk("explain phrase", mcQyExplain(mcQyParse('"gaza ceasefire"', OPT).ast).indexOf("exact phrase") > 0);
  mcQyOk("explain wildcard", mcQyExplain(mcQyParse("ukrain*", OPT).ast).indexOf("pattern") > 0);
  mcQyOk("explain fuzzy", mcQyExplain(mcQyParse("kyiv~", OPT).ast).indexOf("1 character different") > 0);
  mcQyOk("explain src", mcQyExplain(mcQyParse("src:reuters", OPT).ast).indexOf('source is "reuters"') > 0);
  mcQyOk("explain src list", mcQyExplain(mcQyParse("src:ap,afp", OPT).ast).indexOf("one of") > 0);
  mcQyOk("explain sev", mcQyExplain(mcQyParse("sev:>3", OPT).ast).indexOf("severity above 3") > 0);
  mcQyOk("explain sev gte", mcQyExplain(mcQyParse("sev:>=3", OPT).ast).indexOf("at least 3") > 0);
  mcQyOk("explain age lt", mcQyExplain(mcQyParse("age:<30m", OPT).ast).indexOf("newer than 30 minutes") > 0);
  mcQyOk("explain age gt", mcQyExplain(mcQyParse("age:>2h", OPT).ast).indexOf("older than 2 hours") > 0);
  mcQyOk("explain sources", mcQyExplain(mcQyParse("sources:>2", OPT).ast).indexOf("source count above 2") > 0);
  mcQyOk("explain is:breaking", mcQyExplain(mcQyParse("is:breaking", OPT).ast).indexOf("is breaking") > 0);
  mcQyOk("explain NOT", mcQyExplain(mcQyParse("-russia", OPT).ast).indexOf("NOT") > 0);
  mcQyOk("explain AND", mcQyExplain(mcQyParse("a b", OPT).ast).indexOf(" and ") > 0);
  mcQyOk("explain OR", mcQyExplain(mcQyParse("a OR b", OPT).ast).indexOf(" or ") > 0);
  mcQyOk("explain nested lists", mcQyExplain(mcQyParse("a b c", OPT).ast).indexOf("all of:") >= 0);
  mcQyOk("explain ends with a period", /\.$/.test(mcQyExplain(mcQyParse("kyiv src:ap", OPT).ast)));
  mcQyOk("explain starts capitalised", /^[A-Z]/.test(mcQyExplain(mcQyParse("kyiv", OPT).ast)));
  mcQyEq("explain null", mcQyExplain(null), "Matches everything.");
  mcQyEq("explain garbage", mcQyExplain({ type: "wat" }), "Matches items with an unrecognised condition.");
  mcQyOk("explain accepts a parse result", mcQyExplain(mcQyParse("kyiv", OPT)).indexOf("kyiv") > 0);
  (function () {
    // No user string, however hostile, may break the description.
    const ex = mcQyExplain(mcQyParse('src:"a\\"b<c>" ' + "z".repeat(100), OPT).ast);
    mcQyOk("explain truncates long values", ex.indexOf("...") > 0);
    mcQyOk("explain has no stray undefined", ex.indexOf("undefined") < 0);
  })();

  /* ---------- 7. stringify round-trip ---------- */
  (function () {
    const q = "kyiv AND src:reuters AND sev:>3";
    const s = mcQyStringify(mcQyParse(q, OPT).ast, 0);
    const again = mcQyStringify(mcQyParse(s, OPT).ast, 0);
    mcQyEq("stringify is stable under re-parse", again, s);
    mcQyOk("stringify keeps the field", s.indexOf("src:reuters") >= 0);
  })();

  /* ---------- 8. matching and scoring ---------- */
  (function () {
    const it = mcQyItem({ text: "Drone strike reported near Kyiv overnight", sev: 3, src: "reuters", cat: "World" });
    mcQyOk("term match", mcQyMatch(mcQyParse("kyiv", OPT).ast, it, OPT));
    mcQyOk("term match is case-insensitive", mcQyMatch(mcQyParse("KYIV", OPT).ast, it, OPT));
    mcQyOk("term miss", !mcQyMatch(mcQyParse("moscow", OPT).ast, it, OPT));
    mcQyOk("and needs both", !mcQyMatch(mcQyParse("kyiv moscow", OPT).ast, it, OPT));
    mcQyOk("or needs one", mcQyMatch(mcQyParse("kyiv OR moscow", OPT).ast, it, OPT));
    mcQyOk("not excludes", !mcQyMatch(mcQyParse("kyiv -drone", OPT).ast, it, OPT));
    mcQyOk("not passes when absent", mcQyMatch(mcQyParse("kyiv -moscow", OPT).ast, it, OPT));
    mcQyOk("phrase match", mcQyMatch(mcQyParse('"drone strike"', OPT).ast, it, OPT));
    mcQyOk("phrase order matters", !mcQyMatch(mcQyParse('"strike drone"', OPT).ast, it, OPT));
    mcQyOk("wildcard match", mcQyMatch(mcQyParse("overnigh*", OPT).ast, it, OPT));
    mcQyOk("wildcard miss", !mcQyMatch(mcQyParse("zzz*", OPT).ast, it, OPT));
    mcQyOk("fuzzy match", mcQyMatch(mcQyParse("kyev~", OPT).ast, it, OPT));
    mcQyOk("fuzzy respects the budget", !mcQyMatch(mcQyParse("moscow~", OPT).ast, it, OPT));
    mcQyOk("fuzzy off by default", !mcQyMatch(mcQyParse("kyev", OPT).ast, it, OPT));
    mcQyOk("src filter", mcQyMatch(mcQyParse("src:reuters", OPT).ast, it, OPT));
    mcQyOk("src filter negative", !mcQyMatch(mcQyParse("src:ap", OPT).ast, it, OPT));
    mcQyOk("src wildcard", mcQyMatch(mcQyParse("src:reu*", OPT).ast, it, OPT));
    mcQyOk("src != ", mcQyMatch(mcQyParse("src:!=ap", OPT).ast, it, OPT));
    mcQyOk("cat filter", mcQyMatch(mcQyParse("cat:world", OPT).ast, it, OPT));
    mcQyOk("sev >", mcQyMatch(mcQyParse("sev:>2", OPT).ast, it, OPT));
    mcQyOk("sev > false", !mcQyMatch(mcQyParse("sev:>3", OPT).ast, it, OPT));
    mcQyOk("sev >=", mcQyMatch(mcQyParse("sev:>=3", OPT).ast, it, OPT));
    mcQyOk("sev =", mcQyMatch(mcQyParse("sev:3", OPT).ast, it, OPT));
  })();
  (function () {
    const fresh = mcQyItem({ t: T0 - 10 * 60000, text: "alpha", sev: 5 });
    const old = mcQyItem({ t: T0 - 5 * 86400000, text: "alpha", sev: 5 });
    mcQyOk("age:<30m keeps the fresh item", mcQyMatch(mcQyParse("age:<30m", OPT).ast, fresh, OPT));
    mcQyOk("age:<30m drops the old item", !mcQyMatch(mcQyParse("age:<30m", OPT).ast, old, OPT));
    mcQyOk("age:>2h keeps the old item", mcQyMatch(mcQyParse("age:>2h", OPT).ast, old, OPT));
    mcQyOk("age:>2h drops the fresh item", !mcQyMatch(mcQyParse("age:>2h", OPT).ast, fresh, OPT));
    mcQyOk("age:<3d boundary", mcQyMatch(mcQyParse("age:<7d", OPT).ast, old, OPT));
    const undated = { text: "alpha" };
    mcQyOk("age filter drops undated items", !mcQyMatch(mcQyParse("age:<30m", OPT).ast, undated, OPT));
  })();
  (function () {
    const it = mcQyItem({ text: "x", sources: ["a", "b", "c"], translated: true, sim: true, sev: 5, t: T0 - 60000 });
    mcQyOk("sources:>2", mcQyMatch(mcQyParse("sources:>2", OPT).ast, it, OPT));
    mcQyOk("sources:>3 false", !mcQyMatch(mcQyParse("sources:>3", OPT).ast, it, OPT));
    mcQyOk("is:translated", mcQyMatch(mcQyParse("is:translated", OPT).ast, it, OPT));
    mcQyOk("is:simulated", mcQyMatch(mcQyParse("is:simulated", OPT).ast, it, OPT));
    mcQyOk("is:breaking", mcQyMatch(mcQyParse("is:breaking", OPT).ast, it, OPT));
    mcQyOk("is:corroborated", mcQyMatch(mcQyParse("is:corroborated", OPT).ast, it, OPT));
    mcQyOk("is:original is false", !mcQyMatch(mcQyParse("is:original", OPT).ast, it, OPT));
    const stale = mcQyItem({ text: "x", sev: 5, t: T0 - 5 * 3600000 });
    mcQyOk("is:breaking needs recency", !mcQyMatch(mcQyParse("is:breaking", OPT).ast, stale, OPT));
    const mild = mcQyItem({ text: "x", sev: 1, t: T0 - 60000 });
    mcQyOk("is:breaking needs severity", !mcQyMatch(mcQyParse("is:breaking", OPT).ast, mild, OPT));
  })();
  (function () {
    // Hostile items must never throw and never match by accident.
    const ast = mcQyParse("kyiv src:reuters sev:>1", OPT).ast;
    const junk = [null, undefined, 0, "", "kyiv", [], {}, { text: null }, { text: 42 },
      { text: {}, sev: NaN, t: Infinity }, { text: "kyiv", sev: "high", sources: "many" }];
    let threw = 0, matchedJunk = 0;
    for (let i = 0; i < junk.length; i++) {
      try { if (mcQyMatch(ast, junk[i], OPT)) matchedJunk++; } catch (e) { threw++; }
    }
    mcQyEq("hostile items never throw", threw, 0);
    mcQyEq("hostile items never match", matchedJunk, 0);
    mcQyOk("evaluate of null is well formed", mcQyEvaluate(ast, null, OPT).score === 0);
    mcQyOk("evaluate of a cyclic item survives", (function () {
      const c = { text: "kyiv", src: "reuters", sev: 3, t: T0 }; c.self = c;
      return mcQyEvaluate(ast, c, OPT).match === true;
    })());
  })();
  (function () {
    const many = mcQyItem({ text: "kyiv kyiv kyiv kyiv", t: T0 });
    const one = mcQyItem({ text: "kyiv once only here", t: T0 });
    const a = mcQyEvaluate(mcQyParse("kyiv", OPT).ast, many, OPT);
    const b = mcQyEvaluate(mcQyParse("kyiv", OPT).ast, one, OPT);
    mcQyOk("term frequency raises the score", a.score > b.score);
    mcQyOk("term frequency saturates", a.score < b.score * 3);
  })();
  (function () {
    const fresh = mcQyItem({ text: "kyiv", t: T0 });
    const day = mcQyItem({ text: "kyiv", t: T0 - 86400000 });
    const q = mcQyParse("kyiv", OPT).ast;
    mcQyOk("recency raises the score", mcQyEvaluate(q, fresh, OPT).score > mcQyEvaluate(q, day, OPT).score);
    const ancient = mcQyItem({ text: "kyiv", t: T0 - 400 * 86400000 });
    mcQyOk("recency has a floor", mcQyEvaluate(q, ancient, OPT).score > 0);
    mcQyOk("recency floor is honoured", mcQyEvaluate(q, ancient, OPT).score >= 0.05);
  })();
  (function () {
    const it = mcQyItem({ text: "gaza ceasefire talks in gaza", t: T0 });
    const ph = mcQyEvaluate(mcQyParse('"gaza ceasefire"', OPT).ast, it, OPT).score;
    const tm = mcQyEvaluate(mcQyParse("ceasefire", OPT).ast, it, OPT).score;
    mcQyOk("a phrase outscores a loose term", ph > tm);
    const wild = mcQyEvaluate(mcQyParse("ceasefir*", OPT).ast, it, OPT).score;
    mcQyOk("a wildcard scores below an exact term", wild < tm);
  })();
  (function () {
    const strong = mcQyItem({ text: "kyiv", sev: 5, t: T0 });
    const weak = mcQyItem({ text: "kyiv", sev: 0, t: T0 });
    const q = mcQyParse("kyiv", OPT).ast;
    mcQyOk("severity nudges the score", mcQyEvaluate(q, strong, OPT).score > mcQyEvaluate(q, weak, OPT).score);
    mcQyOk("severity nudge is small", mcQyEvaluate(q, strong, OPT).score < mcQyEvaluate(q, weak, OPT).score * 1.5);
  })();
  (function () {
    const q = mcQyParse("src:reuters", OPT).ast;
    const it = mcQyItem({ text: "anything", t: T0 });
    const r = mcQyEvaluate(q, it, OPT);
    mcQyOk("a pure filter still scores above zero", r.score > 0);
    mcQyEq("a pure filter highlights nothing", r.highlights.length, 0);
  })();

  /* ---------- 9. highlights ---------- */
  (function () {
    const text = "Drone strike near Kyiv; Kyiv responded";
    const it = mcQyItem({ text: text, t: T0 });
    const r = mcQyEvaluate(mcQyParse("kyiv", OPT).ast, it, OPT);
    mcQyEq("two highlights", r.highlights.length, 2);
    mcQyEq("first highlight text", text.slice(r.highlights[0].s, r.highlights[0].e), "Kyiv");
    mcQyEq("second highlight text", text.slice(r.highlights[1].s, r.highlights[1].e), "Kyiv");
    mcQyOk("highlights are sorted", r.highlights[0].s < r.highlights[1].s);
  })();
  (function () {
    const text = "the drone strike happened";
    const r = mcQyEvaluate(mcQyParse('"drone strike"', OPT).ast, mcQyItem({ text: text, t: T0 }), OPT);
    mcQyEq("phrase highlight spans both words", text.slice(r.highlights[0].s, r.highlights[0].e), "drone strike");
  })();
  (function () {
    const text = "ukraine ukrainian ukrainians";
    const r = mcQyEvaluate(mcQyParse("ukrain*", OPT).ast, mcQyItem({ text: text, t: T0 }), OPT);
    mcQyEq("wildcard highlights every hit", r.highlights.length, 3);
  })();
  (function () {
    const text = "kyiv drone";
    const r = mcQyEvaluate(mcQyParse("kyiv drone", OPT).ast, mcQyItem({ text: text, t: T0 }), OPT);
    mcQyEq("two terms, two ranges", r.highlights.length, 2);
    const r2 = mcQyEvaluate(mcQyParse("kyiv -moscow", OPT).ast, mcQyItem({ text: text, t: T0 }), OPT);
    mcQyEq("a satisfied NOT adds no highlight", r2.highlights.length, 1);
  })();
  (function () {
    const overlapping = mcQyMergeRanges([{ s: 0, e: 5 }, { s: 3, e: 8 }, { s: 20, e: 22 }]);
    mcQyEq("overlapping ranges merge", JSON.stringify(overlapping), '[{"s":0,"e":8},{"s":20,"e":22}]');
    mcQyEq("garbage ranges dropped", mcQyMergeRanges([null, { s: 5, e: 1 }, { s: NaN, e: 2 }]).length, 0);
    mcQyEq("non-array ranges", mcQyMergeRanges(null).length, 0);
  })();
  (function () {
    const long = "lead ".repeat(60) + "KYIV struck " + "tail ".repeat(60);
    const it = mcQyItem({ text: long, t: T0 });
    const r = mcQyEvaluate(mcQyParse("kyiv", OPT).ast, it, OPT);
    const sn = mcQySnippet(long, r.highlights, 120);
    mcQyOk("snippet is bounded", sn.text.length <= 130);
    mcQyOk("snippet contains the hit", sn.text.indexOf("KYIV") >= 0);
    mcQyEq("snippet range points at the hit", sn.text.slice(sn.ranges[0].s, sn.ranges[0].e), "KYIV");
    mcQyOk("snippet marks truncation", sn.truncatedStart && sn.truncatedEnd);
    mcQyEq("snippet of short text is whole", mcQySnippet("short", [], 120).text, "short");
    mcQyEq("snippet of null", mcQySnippet(null, null, 120).text, "");
  })();

  /* ---------- 10. search ---------- */
  const mcQyFeed = [
    mcQyItem({ id: "a", t: T0 - 5 * 60000, text: "Drone strike near Kyiv overnight", src: "reuters", cat: "World", sev: 4, sources: ["reuters", "ap"] }),
    mcQyItem({ id: "b", t: T0 - 90 * 60000, text: "Kyiv power grid restored", src: "ap", cat: "World", sev: 2 }),
    mcQyItem({ id: "c", t: T0 - 3 * 3600000, text: "Markets slip on energy prices", src: "bloomberg", cat: "Business", sev: 1 }),
    mcQyItem({ id: "d", t: T0 - 26 * 3600000, text: "Gaza ceasefire talks resume", src: "afp", cat: "World", sev: 3, translated: true }),
    mcQyItem({ id: "e", t: T0 - 10 * 86400000, text: "Retrospective: the Kyiv winter", src: "reuters", cat: "Opinion", sev: 0 }),
    mcQyItem({ id: "f", t: T0 - 2 * 60000, text: "SIMULATED: Kyiv drone drill", src: "drill", cat: "World", sev: 5, sim: true })
  ];
  (function () {
    const r = mcQySearch(mcQyFeed, "kyiv", OPT);
    mcQyEq("search finds four", r.total, 4);
    mcQyEq("search ranks the freshest strong match first", r.hits[0].item.id, "f");
    mcQyOk("search scores descend", r.hits.every(function (h, i, a) { return i === 0 || a[i - 1].score >= h.score; }));
    mcQyOk("search carries highlights", r.hits[0].highlights.length > 0);
    mcQyOk("search reports the explanation", r.explain.indexOf("kyiv") > 0);
  })();
  (function () {
    const r = mcQySearch(mcQyFeed, "kyiv -is:simulated", OPT);
    mcQyEq("negating the drill", r.total, 3);
    mcQyOk("drill excluded", r.hits.every(function (h) { return h.item.id !== "f"; }));
  })();
  (function () {
    mcQyEq("src filter", mcQySearch(mcQyFeed, "src:reuters", OPT).total, 2);
    mcQyEq("src list", mcQySearch(mcQyFeed, "src:reuters,ap", OPT).total, 3);
    mcQyEq("cat filter", mcQySearch(mcQyFeed, "cat:World", OPT).total, 4);
    mcQyEq("sev filter", mcQySearch(mcQyFeed, "sev:>=3", OPT).total, 3);
    mcQyEq("age filter", mcQySearch(mcQyFeed, "age:<1h", OPT).total, 2);
    mcQyEq("sources filter", mcQySearch(mcQyFeed, "sources:>1", OPT).total, 1);
    mcQyEq("is:translated", mcQySearch(mcQyFeed, "is:translated", OPT).total, 1);
    mcQyEq("compound", mcQySearch(mcQyFeed, "kyiv src:reuters age:<1d", OPT).total, 1);
    mcQyEq("or of fields", mcQySearch(mcQyFeed, "cat:Business OR cat:Opinion", OPT).total, 2);
    mcQyEq("empty query matches all", mcQySearch(mcQyFeed, "", OPT).total, 6);
  })();
  (function () {
    const r = mcQySearch(mcQyFeed, "kyiv", { now: T0, limit: 2 });
    mcQyEq("limit applies to the page", r.hits.length, 2);
    mcQyEq("limit keeps the true total", r.total, 4);
    const r2 = mcQySearch(mcQyFeed, "kyiv", { now: T0, limit: 2, offset: 2 });
    mcQyEq("offset pages", r2.hits.length, 2);
    mcQyOk("offset does not repeat", r2.hits[0].item.id !== r.hits[0].item.id);
  })();
  (function () {
    const r = mcQySearch(mcQyFeed, "kyiv", { now: T0, sort: "time" });
    mcQyOk("time sort is by t desc", r.hits.every(function (h, i, a) { return i === 0 || a[i - 1].item.t >= h.item.t; }));
  })();
  (function () {
    mcQyEq("search of null items", mcQySearch(null, "kyiv", OPT).total, 0);
    mcQyOk("search of null items reports it", mcQyHas(mcQySearch(null, "kyiv", OPT).problems, "bad_items"));
    mcQyEq("search of junk rows", mcQySearch([null, 1, "x", {}], "kyiv", OPT).total, 0);
    mcQyOk("search with a broken query still returns rows", mcQySearch(mcQyFeed, "sev:>abc", OPT).total === 6);
  })();
  (function () {
    // Determinism: identical scores must not reorder between runs.
    const twins = [
      mcQyItem({ id: "t2", t: T0, text: "same same" }),
      mcQyItem({ id: "t1", t: T0, text: "same same" })
    ];
    const a = mcQySearch(twins, "same", OPT).hits.map(function (h) { return h.item.id; }).join(",");
    const b = mcQySearch(twins.slice().reverse(), "same", OPT).hits.map(function (h) { return h.item.id; }).join(",");
    mcQyEq("tie-break is stable", a, b);
    mcQyEq("tie-break is by id", a, "t1,t2");
  })();
  (function () {
    const big = [];
    for (let i = 0; i < 5000; i++) {
      big.push(mcQyItem({
        id: "n" + i, t: T0 - (i * 17000) % (7 * 86400000),
        text: "wire item " + i + " about " + (i % 7 === 0 ? "kyiv drone strike" : "markets and trade"),
        src: ["reuters", "ap", "afp", "bloomberg"][i % 4], cat: ["World", "Business"][i % 2], sev: i % 6
      }));
    }
    const t = Date.now();
    const r = mcQySearch(big, "kyiv OR (markets AND trade) src:reuters,ap sev:>1", OPT);
    const dt = Date.now() - t;
    mcQyOk("5000-item search is fast (" + dt + "ms, " + r.total + " hits)", dt < 1500);
    mcQyOk("5000-item search found something", r.total > 100);
    mcQyOk("5000-item scores are finite", r.hits.every(function (h) { return Number.isFinite(h.score); }));
  })();

  /* ---------- 11. facets ---------- */
  (function () {
    const f = mcQyFacets(mcQyFeed, OPT);
    mcQyEq("facet total", f.total, 6);
    mcQyEq("facet src top", f.src[0].value, "reuters");
    mcQyEq("facet src top count", f.src[0].count, 2);
    mcQyEq("facet src buckets", f.src.length, 5);
    mcQyEq("facet cat top", f.cat[0].value, "World");
    mcQyEq("facet cat top count", f.cat[0].count, 4);
    mcQyEq("facet sev is ordered by value", f.sev.map(function (s) { return s.value; }).join(","), "0,1,2,3,4,5");
    mcQyEq("facet age buckets are always present", f.age.length, 5);
    mcQyEq("facet age last hour", f.age[0].count, 2);
    mcQyEq("facet age older", f.age[4].count, 1);
    mcQyEq("facet age sums to total", f.age.reduce(function (a, b) { return a + b.count; }, 0), 6);
    mcQyEq("facet flags breaking", f.flags.breaking, 2);
    mcQyEq("facet flags translated", f.flags.translated, 1);
    mcQyEq("facet flags simulated", f.flags.simulated, 1);
    mcQyEq("facet flags corroborated", f.flags.corroborated, 1);
  })();
  (function () {
    const f = mcQyFacets(mcQySearch(mcQyFeed, "kyiv", OPT).hits, OPT);
    mcQyEq("facets accept search hits", f.total, 4);
    mcQyEq("facets of hits count sources", f.src[0].count, 2);
  })();
  (function () {
    const f = mcQyFacets([null, 1, "x", { text: "a" }, {}], OPT);
    mcQyEq("facets ignore junk rows", f.total, 2);
    mcQyEq("facets label missing source", f.src[0].value, "(unknown)");
    mcQyEq("facets count undated", f.undated, 2);
    mcQyEq("facets of null", mcQyFacets(null, OPT).total, 0);
    mcQyEq("facets of null still lists age buckets", mcQyFacets(null, OPT).age.length, 5);
  })();
  (function () {
    const many = [];
    for (let i = 0; i < 40; i++) many.push(mcQyItem({ id: "m" + i, src: "src" + i, t: T0 }));
    const f = mcQyFacets(many, { now: T0, facetTop: 5 });
    mcQyEq("facet top-N", f.src.length, 6);
    mcQyEq("facet rollup label", f.src[5].value, "(other)");
    mcQyEq("facet rollup count", f.src[5].count, 35);
  })();

  /* ---------- 12. saved searches ---------- */
  (function () {
    const saved = [
      { id: "s1", name: "Ukraine", query: "kyiv OR ukraine", lastSeenAt: T0 - 30 * 60000 },
      { id: "s2", name: "Broken", query: "sev:>abc" },
      { id: "s3", query: "" }
    ];
    const c = mcQySavedCounts(saved, mcQyFeed, OPT);
    mcQyEq("saved count", c[0].count, 4);
    mcQyEq("saved new count", c[0].newCount, 2);
    mcQyOk("saved carries the explanation", c[0].explain.indexOf("kyiv") > 0);
    mcQyEq("saved surfaces problems", c[1].severity, "error");
    mcQyOk("saved with a broken query still counts", c[1].count === 6);
    mcQyEq("saved falls back to a name", c[2].name, "(untitled)");
    mcQyEq("saved of junk", mcQySavedCounts(null, null, OPT).length, 0);
  })();

  /* ---------- 13. story signatures ---------- */
  (function () {
    const a = mcQyStorySignature("Russia strikes Kyiv with drones overnight");
    const b = mcQyStorySignature("Kyiv hit by Russian drone strike overnight");
    const c = mcQyStorySignature("Bank of Japan holds interest rates steady");
    mcQyOk("reworded story overlaps", mcQyJaccard(a.toks, b.toks) >= 0.5);
    mcQyOk("different story does not overlap", mcQyJaccard(a.toks, c.toks) < 0.2);
    mcQyEq("identical text -> identical key", mcQyStorySignature("Kyiv drone strike").key, mcQyStorySignature("Kyiv drone strike").key);
    mcQyEq("word order does not change the key",
      mcQyStorySignature("drone strike kyiv").key, mcQyStorySignature("kyiv strike drone").key);
    mcQyEq("signature of junk", mcQyStorySignature(null).key, "");
    mcQyEq("jaccard of empties", mcQyJaccard([], []), 0);
    mcQyEq("jaccard of identical", mcQyJaccard(["a", "b"], ["a", "b"]), 1);
  })();
  (function () {
    mcQyOk("dedupe key by item", mcQyDedupeKey({ id: "z" }, "item").key === "i:z");
    mcQyOk("dedupe key by source", mcQyDedupeKey({ src: "Reuters" }, "source").key === "src:reuters");
    mcQyOk("dedupe key by story", mcQyDedupeKey({ text: "kyiv drone strike" }, "story").key.indexOf("s:") === 0);
    mcQyOk("dedupe key of junk", typeof mcQyDedupeKey(null, "story").key === "string");
    mcQyOk("dedupe 'none' is unique per call", mcQyDedupeKey({ id: "z" }, "none").key !== mcQyDedupeKey({ id: "z" }, "none").key);
  })();

  /* ---------- 14. alert rules ---------- */
  const mcQyRule = function (o) {
    const r = { id: o.id || "r1", name: o.name || "Rule", query: o.query || "kyiv", trigger: o.trigger || { type: "on_match" } };
    for (const k in o) if (k !== "trigger") r[k] = o[k];
    return r;
  };
  (function () {
    const st = mcQyNewAlertState();
    mcQyEq("fresh state is empty", JSON.stringify(st), '{"v":1,"rules":{}}');
    const out = mcQyRunRules([mcQyRule({ query: "kyiv", cooldownMs: 0 })], [mcQyFeed[0]], st, OPT);
    mcQyEq("on_match fires once", out.alerts.length, 1);
    mcQyEq("alert carries the rule", out.alerts[0].ruleId, "r1");
    mcQyEq("alert carries the item", out.alerts[0].itemIds[0], "a");
    mcQyOk("alert has a title", out.alerts[0].title.indexOf("Drone strike") > 0);
    mcQyEq("input state is not mutated", JSON.stringify(st), '{"v":1,"rules":{}}');
    mcQyOk("returned state records the fire", out.state.rules.r1.firedCount === 1);
    mcQyOk("state is JSON-round-trippable", JSON.stringify(JSON.parse(JSON.stringify(out.state))) === JSON.stringify(out.state));
  })();
  (function () {
    const out = mcQyRunRules([mcQyRule({ query: "moscow" })], [mcQyFeed[0]], mcQyNewAlertState(), OPT);
    mcQyEq("no match, no alert", out.alerts.length, 0);
    mcQyEq("stats record the miss", out.stats[0].matched, 0);
  })();
  (function () {
    const rule = mcQyRule({ query: "kyiv", enabled: false });
    const out = mcQyRunRules([rule], mcQyFeed, mcQyNewAlertState(), OPT);
    mcQyEq("disabled rules never fire", out.alerts.length, 0);
    mcQyEq("disabled is reported", out.stats[0].enabled, false);
  })();
  (function () {
    // THE test: one running story, forty rewrites, one alert.
    const dupes = [];
    const tails = ["", " -- updated", " (2nd update)", " as officials confirm", " amid air raid alerts"];
    for (let i = 0; i < 40; i++) {
      dupes.push(mcQyItem({
        id: "d" + i, t: T0 - (40 - i) * 1000,
        text: "Drone strike near Kyiv overnight" + tails[i % tails.length],
        src: ["reuters", "ap", "afp", "dpa"][i % 4], sev: 4
      }));
    }
    const rule = mcQyRule({ query: "kyiv", cooldownMs: 0, dedupe: "story", maxPerBatch: 3 });
    const out = mcQyRunRules([rule], dupes, mcQyNewAlertState(), OPT);
    mcQyEq("40 rewrites of one story fire once", out.alerts.length, 1);
    mcQyEq("stats agree on the match count", out.stats[0].matched, 40);
    mcQyEq("stats agree on the fire count", out.stats[0].fired, 1);
    const reasons = {};
    out.suppressed.forEach(function (s) { reasons[s.reason] = (reasons[s.reason] || 0) + 1; });
    mcQyOk("suppression is attributed", (reasons.similar || 0) + (reasons.duplicate || 0) === 39);
    mcQyOk("similarity is reported", out.suppressed.some(function (s) { return s.reason === "similar" && s.similarity >= 0.6; }));

    // A genuinely different story in the same batch must still get through.
    const mixed = dupes.concat([mcQyItem({ id: "z", t: T0, text: "Kyiv stock exchange to reopen after twelve years", sev: 2 })]);
    const out2 = mcQyRunRules([rule], mixed, mcQyNewAlertState(), OPT);
    mcQyEq("a distinct story still fires", out2.alerts.length, 2);
    mcQyOk("the distinct story is one of them", out2.alerts.some(function (a) { return a.itemIds[0] === "z"; }));

    // Second batch of the same story: nothing.
    const out3 = mcQyRunRules([rule], dupes, out.state, { now: T0 + 60000 });
    mcQyEq("the same story does not re-fire", out3.alerts.length, 0);
    mcQyOk("re-fire suppression is explained", out3.suppressed.length > 0);

    // After the dedupe window it may fire again — a story still running an
    // hour later is news again, and that is a deliberate choice.
    const out4 = mcQyRunRules([rule], dupes, out.state, { now: T0 + 3600000 + 60000 });
    mcQyEq("after the dedupe window it fires again", out4.alerts.length, 1);
  })();
  (function () {
    // Cooldown, isolated from de-duplication (dedupe:"none").
    const rule = mcQyRule({ query: "kyiv", cooldownMs: 600000, dedupe: "none", maxPerBatch: 1 });
    const a = mcQyRunRules([rule], [mcQyFeed[0]], mcQyNewAlertState(), { now: T0 });
    mcQyEq("first fire passes", a.alerts.length, 1);
    const b = mcQyRunRules([rule], [mcQyFeed[1]], a.state, { now: T0 + 60000 });
    mcQyEq("cooldown suppresses", b.alerts.length, 0);
    mcQyEq("cooldown is the reason", b.suppressed[0].reason, "cooldown");
    mcQyEq("cooldown reports when it lifts", b.suppressed[0].until, T0 + 600000);
    const c = mcQyRunRules([rule], [mcQyFeed[1]], a.state, { now: T0 + 600001 });
    mcQyEq("after cooldown it fires again", c.alerts.length, 1);
  })();
  (function () {
    // maxPerBatch: distinct stories, no cooldown.
    // These have to be genuinely different sentences, not one skeleton with a
    // swapped word. The engine dedups near-duplicates before maxPerBatch ever
    // runs, so a templated fixture collapses to a single alert and tests the
    // similarity filter instead of the cap it claims to test.
    const heads = [
      "Kyiv reports an overnight drone attack on eastern suburbs",
      "Power is restored across Kyiv after grid repairs finish",
      "The Kyiv metro extends its hours as commuters return downtown",
      "Ukraine's central bank meets in Kyiv to weigh a rate cut",
      "A Kyiv museum reopens with a wartime photography exhibit",
      "Diplomats arrive in Kyiv ahead of next week's security summit",
      "Schools in Kyiv shift to hybrid lessons for the winter term",
      "Rail service between Kyiv and Lviv doubles its capacity",
      "Kyiv air defence intercepted six missiles, officials say",
      "A new bridge over the Dnipro opens just north of Kyiv"
    ];
    const items = [];
    for (let i = 0; i < 10; i++) {
      items.push(mcQyItem({ id: "u" + i, t: T0 - i * 1000, text: heads[i] }));
    }
    const out = mcQyRunRules([mcQyRule({ query: "kyiv", cooldownMs: 0, maxPerBatch: 3 })], items, mcQyNewAlertState(), OPT);
    mcQyEq("maxPerBatch caps the burst", out.alerts.length, 3);
    mcQyOk("the overflow is attributed", out.suppressed.filter(function (s) { return s.reason === "max_per_batch"; }).length === 7);
    mcQyOk("the highest-scoring items win", out.alerts[0].score >= out.alerts[1].score);
  })();
  (function () {
    // on_count_over
    const rule = mcQyRule({ query: "kyiv", cooldownMs: 0, trigger: { type: "on_count_over", n: 3, windowMs: 900000 } });
    const few = [mcQyFeed[0], mcQyFeed[1]];
    const st1 = mcQyRunRules([rule], few, mcQyNewAlertState(), { now: T0 });
    mcQyEq("under the threshold, silence", st1.alerts.length, 0);
    const more = [mcQyItem({ id: "p1", t: T0, text: "kyiv one" }), mcQyItem({ id: "p2", t: T0, text: "kyiv two" })];
    const st2 = mcQyRunRules([rule], more, st1.state, { now: T0 + 1000 });
    mcQyEq("crossing the threshold fires", st2.alerts.length, 1);
    /* 3, not 4. The window is 15 minutes and matchTimes records each item's
       OWN timestamp, not when it was ingested — so feed[1] ("Kyiv power grid
       restored", 90 minutes old) is correctly outside it. Only feed[0] and the
       two fresh items count. Expecting 4 quietly assumed the window covered
       every item the rule had ever matched, which would make windowMs
       meaningless. */
    mcQyEq("count alert reports the count", st2.alerts[0].detail.count, 3);
    mcQyOk("count alert names the threshold", st2.alerts[0].detail.threshold === 3);
    const st3 = mcQyRunRules([rule], more, st2.state, { now: T0 + 2000 });
    mcQyEq("still over the threshold: no repeat", st3.alerts.length, 0);
    mcQyEq("repeat is a duplicate", st3.suppressed[0].reason, "duplicate");
    const st4 = mcQyRunRules([rule], more, st2.state, { now: T0 + 900000 * 3 });
    mcQyOk("a new window may fire again", st4.alerts.length <= 1);
  })();
  (function () {
    // on_rate_spike
    const rule = mcQyRule({ query: "kyiv", cooldownMs: 0, trigger: { type: "on_rate_spike", windowMs: 600000, factor: 3, minCount: 5, baselineWindows: 4 } });
    const quiet = function (n, t) {
      const a = [];
      for (let i = 0; i < n; i++) a.push(mcQyItem({ id: "q" + t + i, t: t, text: "kyiv quiet " + i }));
      return a;
    };
    let st = mcQyNewAlertState();
    let cold = mcQyRunRules([rule], quiet(9, T0), st, { now: T0 });
    mcQyEq("cold start never spikes", cold.alerts.length, 0);
    st = cold.state;
    for (let w = 1; w <= 3; w++) {
      st = mcQyRunRules([rule], quiet(2, T0 + w * 600000), st, { now: T0 + w * 600000 }).state;
    }
    const spike = mcQyRunRules([rule], quiet(20, T0 + 4 * 600000), st, { now: T0 + 4 * 600000 });
    mcQyEq("a real spike fires", spike.alerts.length, 1);
    mcQyOk("spike reports the baseline", spike.alerts[0].detail.baseline > 0);
    mcQyOk("spike reports the count", spike.alerts[0].detail.count === 20);
    const noSpike = mcQyRunRules([rule], quiet(2, T0 + 5 * 600000), spike.state, { now: T0 + 5 * 600000 });
    mcQyEq("normal volume does not spike", noSpike.alerts.length, 0);
  })();
  (function () {
    // on_new_source
    const rule = mcQyRule({ query: "kyiv", cooldownMs: 0, trigger: { type: "on_new_source" }, maxPerBatch: 10 });
    const first = mcQyRunRules([rule], [
      mcQyItem({ id: "s1", text: "kyiv a", src: "reuters" }),
      mcQyItem({ id: "s2", text: "kyiv b", src: "ap" })
    ], mcQyNewAlertState(), OPT);
    mcQyEq("the first batch only learns", first.alerts.length, 0);
    mcQyOk("the first batch remembers", Object.keys(first.state.rules.r1.sources).length === 2);
    const second = mcQyRunRules([rule], [
      mcQyItem({ id: "s3", text: "kyiv c", src: "reuters" }),
      mcQyItem({ id: "s4", text: "kyiv d", src: "tass" })
    ], first.state, { now: T0 + 1000 });
    mcQyEq("only the new source fires", second.alerts.length, 1);
    mcQyEq("the new source is named", second.alerts[0].detail.src, "tass");
    const third = mcQyRunRules([rule], [mcQyItem({ id: "s5", text: "kyiv e", src: "tass" })], second.state, { now: T0 + 2000 });
    mcQyEq("a known source does not re-fire", third.alerts.length, 0);
  })();
  (function () {
    // Hostile rule input.
    const out = mcQyNoThrow("junk rules do not throw", function () {
      return mcQyRunRules([null, 1, "x", {}, { query: null }, { query: "kyiv", trigger: { type: "on_wat" } },
        { query: "kyiv", cooldownMs: NaN, maxPerBatch: -5, dedupe: "wat" }],
        mcQyFeed, mcQyNewAlertState(), OPT);
    });
    mcQyOk("junk rules still produce stats", out.stats.length === 7);
    mcQyOk("unknown trigger degrades to on_match", out.stats.some(function (s) { return s.fired > 0; }));
    mcQyOk("junk rules never emit NaN", out.alerts.every(function (a) { return Number.isFinite(a.score) && Number.isFinite(a.at); }));
    mcQyOk("junk batch tolerated", mcQyRunRules([mcQyRule({})], [null, 1, "x"], mcQyNewAlertState(), OPT).alerts.length === 0);
    mcQyOk("junk state tolerated", mcQyRunRules([mcQyRule({})], mcQyFeed, { rules: { r1: { fired: "no", buckets: 5 } } }, OPT).alerts.length >= 0);
    mcQyOk("null state tolerated", mcQyRunRules([mcQyRule({})], mcQyFeed, null, OPT).alerts.length >= 0);
    mcQyOk("null rules tolerated", mcQyRunRules(null, mcQyFeed, null, OPT).alerts.length === 0);
  })();
  (function () {
    // State must not grow without bound over a long session.
    const rule = mcQyRule({ query: "kyiv", cooldownMs: 0, dedupe: "item", dedupeWindowMs: 60000, maxPerBatch: 50 });
    let st = mcQyNewAlertState();
    for (let batch = 0; batch < 60; batch++) {
      const items = [];
      for (let i = 0; i < 20; i++) {
        items.push(mcQyItem({ id: "b" + batch + "i" + i, t: T0 + batch * 60000, text: "kyiv report " + batch + " " + i }));
      }
      st = mcQyRunRules([rule], items, st, { now: T0 + batch * 60000 }).state;
    }
    const rs = st.rules.r1;
    mcQyOk("fire log is capped (" + rs.fired.length + ")", rs.fired.length <= 200);
    mcQyOk("match log is capped (" + rs.matchTimes.length + ")", rs.matchTimes.length <= 5000);
    mcQyOk("bucket log is capped (" + Object.keys(rs.buckets).length + ")", Object.keys(rs.buckets).length <= 10);
    mcQyOk("state stays small (" + JSON.stringify(st).length + " bytes)", JSON.stringify(st).length < 60000);
  })();
  (function () {
    // Multiple rules share one pass and stay independent.
    const rules = [
      mcQyRule({ id: "ukr", query: "kyiv", cooldownMs: 0 }),
      mcQyRule({ id: "biz", query: "cat:Business", cooldownMs: 0 }),
      mcQyRule({ id: "sev", query: "sev:>=4 -is:simulated", cooldownMs: 0 })
    ];
    const out = mcQyRunRules(rules, mcQyFeed, mcQyNewAlertState(), OPT);
    mcQyEq("three rules, three states", Object.keys(out.state.rules).length, 3);
    mcQyOk("each rule fires on its own", out.stats.every(function (s) { return s.fired >= 1; }));
    mcQyOk("severity rule excludes the drill", out.alerts.filter(function (a) { return a.ruleId === "sev"; })
      .every(function (a) { return a.itemIds.indexOf("f") < 0; }));
  })();
  (function () {
    // minScore gates weak matches.
    const strong = mcQyItem({ id: "st", t: T0, text: "kyiv kyiv kyiv kyiv kyiv" });
    const weak = mcQyItem({ id: "wk", t: T0 - 10 * 86400000, text: "kyiv mentioned once" });
    const out = mcQyRunRules([mcQyRule({ query: "kyiv", cooldownMs: 0, minScore: 1.0, maxPerBatch: 5 })], [strong, weak], mcQyNewAlertState(), OPT);
    mcQyEq("minScore drops the weak match", out.alerts.length, 1);
    mcQyEq("minScore keeps the strong one", out.alerts[0].itemIds[0], "st");
  })();

  /* ---------- 15. default-OR mode ---------- */
  (function () {
    const p = mcQyParse("kyiv moscow", { defaultOp: "or" });
    mcQyEq("defaultOp or", p.ast.type, "or");
    const it = mcQyItem({ text: "moscow only", t: T0 });
    mcQyOk("defaultOp or matches either", mcQyMatch(p.ast, it, OPT));
    const p2 = mcQyParse("+kyiv moscow", { defaultOp: "or" });
    mcQyEq("required clause forces AND", p2.ast.type, "and");
    mcQyOk("required clause is enforced", !mcQyMatch(p2.ast, it, OPT));
    const it2 = mcQyItem({ text: "kyiv only", t: T0 });
    mcQyOk("optional clause does not exclude", mcQyMatch(p2.ast, it2, OPT));
    const it3 = mcQyItem({ text: "kyiv and moscow", t: T0 });
    mcQyOk("optional clause raises the score",
      mcQyEvaluate(p2.ast, it3, OPT).score > mcQyEvaluate(p2.ast, it2, OPT).score);
  })();

  /* ---------- 16. contract self-checks ---------- */
  (function () {
    const fs = require("fs");
    const src = fs.readFileSync(__filename, "utf8");
    const guard = 'if (typeof module !== "undefined" && require.main === module) {';
    mcQyOk("self-test guard is exact", src.indexOf(guard) > 0);
    mcQyOk("no script-closing sequence", src.toLowerCase().indexOf("</scr" + "ipt") < 0);
    mcQyOk("no raw control bytes", !/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(src));
    mcQyOk("no BOM", src.indexOf("\uFEFF") < 0);
    const body = src.slice(0, src.indexOf(guard));
    const names = (body.match(/^(?:function|const|let|var)\s+(\w+)/gm) || [])
      .map(function (m) { return m.replace(/^(?:function|const|let|var)\s+/, ""); });
    const wrong = names.filter(function (n) { return n.indexOf("mcQy") !== 0; });
    mcQyEq("every top-level name is prefixed" + (wrong.length ? " (" + wrong.join(",") + ")" : ""), wrong.length, 0);
    mcQyOk("module body has no require", !/^\s*(?:const|let|var).*\brequire\s*\(/m.test(body));
    mcQyOk("module body has no module.exports", body.indexOf("module.exports") < 0);
    mcQyOk("module body has no document/window", !/\bdocument\.|window\./.test(body));
    mcQyOk("public surface is non-trivial (" + names.length + " names)", names.length > 40);
  })();

  const mcQyTotal = mcQyPass + mcQyFails.length;
  if (mcQyFails.length) {
    console.log("FAILURES (" + mcQyFails.length + "):");
    for (let i = 0; i < mcQyFails.length; i++) console.log("  FAIL  " + mcQyFails[i]);
    console.log("");
  }
  console.log((mcQyFails.length ? "FAIL" : "PASS") + " — " + mcQyPass + "/" + mcQyTotal + " assertions passed");
  if (mcQyFails.length) process.exit(1);
}
