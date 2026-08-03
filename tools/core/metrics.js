// metrics.js — readability, language ID and text statistics for a news app.
// Plain script-scope JS: no modules, no IIFE, no dependencies. Paste as-is into a
// single-file HTML app. Every top-level binding is prefixed `mc` to keep the global
// namespace collision-free.
//
// Design rule followed throughout: never throw and never emit NaN/Infinity. These
// functions run on user-pasted junk, empty inputs and three-word headlines, so every
// division is guarded at the source rather than patched at the call site.

/* ------------------------------------------------------------------ *
 * Small shared helpers
 * ------------------------------------------------------------------ */

// Coerce anything to a safe string. null/undefined/numbers/objects all become
// something we can tokenize instead of a TypeError three frames down.
function mcStr(value) {
  if (typeof value === "string") return value;
  if (value === null || value === undefined) return "";
  return String(value);
}

// Round for display. Also acts as the last NaN/Infinity backstop: anything
// non-finite collapses to 0 so callers can trust Number.isFinite on every field.
function mcRound(n, places) {
  if (typeof n !== "number" || !Number.isFinite(n)) return 0;
  const f = Math.pow(10, places === undefined ? 2 : places);
  return Math.round(n * f) / f;
}

// Safe division: the single place where "0 sentences" stops being a bug.
function mcDiv(a, b) {
  if (!b || !Number.isFinite(a) || !Number.isFinite(b)) return 0;
  const r = a / b;
  return Number.isFinite(r) ? r : 0;
}

function mcClamp(n, lo, hi) {
  if (!Number.isFinite(n)) return lo;
  return n < lo ? lo : n > hi ? hi : n;
}

// Median, not mean. Used for the composite grade because one outlier formula
// (SMOG in particular) should not drag the answer around on short text.
function mcMedian(nums) {
  const xs = nums.filter(function (n) {
    return Number.isFinite(n);
  });
  if (!xs.length) return 0;
  xs.sort(function (a, b) {
    return a - b;
  });
  const mid = xs.length >> 1;
  return xs.length % 2 ? xs[mid] : (xs[mid - 1] + xs[mid]) / 2;
}

/* ------------------------------------------------------------------ *
 * Tokenization
 * ------------------------------------------------------------------ */

// A "word" is a run of letters/digits, optionally glued by an internal
// apostrophe, hyphen, dot or comma ("won't", "e-mail", "4.5", "1,200").
// Unicode-aware so this is not silently English-only.
const mcWordRe = /[\p{L}\p{N}]+(?:['’.,\-][\p{L}\p{N}]+)*/gu;

function mcWords(text) {
  const s = mcStr(text);
  if (!s) return [];
  return s.match(mcWordRe) || [];
}

// Sentence splitter. Hand-rolled rather than regex-with-lookbehind so it works on
// older Safari, and so "4.5%" and "U.S." do not each become a sentence: a
// terminator only closes a sentence when whitespace or end-of-input follows it.
// Known limitation: "Dr. Smith said..." still splits. Abbreviation lists are a
// rabbit hole and the error is a rounding error at paragraph scale.
function mcSentences(text) {
  const s = mcStr(text).trim();
  if (!s) return [];
  const out = [];
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "\n" || c === "\r") {
      // A hard line break ends a sentence even without punctuation — headlines,
      // bullet lists and pasted decks rely on this.
      if (s.slice(start, i).trim()) out.push(s.slice(start, i).trim());
      start = i + 1;
      continue;
    }
    if (c !== "." && c !== "!" && c !== "?" && c !== "…") continue;
    let j = i + 1;
    while (j < s.length && ".!?…\"'”’)]».".indexOf(s[j]) !== -1) j++;
    if (j >= s.length || /\s/.test(s[j])) {
      if (s.slice(start, j).trim()) out.push(s.slice(start, j).trim());
      start = j;
      i = j - 1;
    }
  }
  if (s.slice(start).trim()) out.push(s.slice(start).trim());
  return out;
}

/* ------------------------------------------------------------------ *
 * Syllables
 * ------------------------------------------------------------------ */

// Count vowel groups, then apply the usual English orthography corrections.
//
// THIS IS A HEURISTIC AND IT IS WRONG ON INDIVIDUAL WORDS. Known failures:
// "business" -> 3 (really 2), "queue" -> 1 (really 1-2 depending who you ask),
// "ratio" -> 3 (really 2), "sacred" -> 1 (really 2), "rhythm" -> 1 (really 2).
// It is only sound in aggregate: over a paragraph the over- and under-counts
// cancel well enough for Flesch/SMOG to be stable. Do not surface a per-word
// syllable count to users off the back of this.
function mcSyllables(word) {
  const w = mcStr(word).toLowerCase().replace(/[^a-z]/g, "");
  if (!w) return 0; // "" and "4.5" have no syllables; callers floor this at 1.
  if (w.length <= 2) return 1;

  // Vowel groups, with `y` treated as a vowel except word-initially ("yellow" = 2).
  const body = w[0] + w.slice(1).replace(/y/g, "Y");
  const groups = body.match(/[aeiouY]+/g) || [];
  let n = groups.length;

  // Silent trailing "e": "make" -> 1. Exempt the "-le" ending after a consonant,
  // which is a real syllable ("table" = 2, "people" = 2, but "whale" = 1).
  if (/e$/.test(w) && n > 1) {
    const isConsonantLe = /[^aeiou]le$/.test(w);
    // A "-ue" ending after a plain consonant is pronounced, not silent:
    // val-ue, is-sue, rev-en-ue. After g or q it IS silent — league, tongue,
    // unique — which is the whole distinction. Monosyllables like "true" and
    // "blue" never reach here because they have only one vowel group.
    const isVoicedUe = /[^gqaeiou]ue$/.test(w);
    if (!isConsonantLe && !isVoicedUe) n--;
  }

  // Silent "-ed": "walked" = 1, but "wanted"/"needed" keep the extra beat.
  if (/[^aeiou]ed$/.test(w) && !/[td]ed$/.test(w) && n > 1) n--;

  // Silent "-es": "makes" = 1, but sibilants keep it ("houses", "changes").
  if (/[^aeiou]es$/.test(w) && !/[sxzcgh]es$/.test(w) && n > 1) n--;

  // Hiatus: a word-final vowel cluster that is NOT the first cluster and does not
  // end in a silent "e" is two beats, not one — "area"/"idea" = 3, "video" = 3,
  // "radio" = 3. Guarded so "sea"/"tea" = 1 and "value" = 2.
  if (groups.length > 1 && /[aeiou]{2,}$/.test(w) && !/e$/.test(w)) n++;

  return n < 1 ? 1 : n; // Every pronounceable token is at least one beat.
}

/* ------------------------------------------------------------------ *
 * Readability
 * ------------------------------------------------------------------ */

// Gunning Fog counts "complex" words as 3+ syllables, but explicitly excludes
// proper nouns and words that only cross the threshold via a common inflection.
// Skipping those exclusions inflates Fog badly on news copy, which is wall-to-wall
// place names and past-tense verbs.
function mcIsComplexWord(word, isSentenceStart) {
  const w = mcStr(word);
  if (!/[a-zA-Z]/.test(w)) return false;
  if (mcSyllables(w) < 3) return false;
  // Capitalized mid-sentence => almost certainly a proper noun.
  if (!isSentenceStart && /^[A-Z]/.test(w)) return false;
  // "-es"/"-ed"/"-ing" inflections don't make a word hard.
  const stem = w.toLowerCase().replace(/(es|ed|ing)$/, "");
  if (stem !== w.toLowerCase() && mcSyllables(stem) < 3) return false;
  return true;
}

// Flesch Reading Ease -> plain-English band.
function mcFleschLabel(flesch) {
  if (!Number.isFinite(flesch)) return "unknown";
  if (flesch >= 90) return "very easy";
  if (flesch >= 75) return "easy";
  if (flesch >= 60) return "plain";
  if (flesch >= 45) return "fairly difficult";
  if (flesch >= 30) return "difficult";
  return "very difficult";
}

function mcReadability(text) {
  const zero = {
    flesch: 0,
    fleschKincaid: 0,
    gunningFog: 0,
    smog: 0,
    ari: 0,
    colemanLiau: 0,
    words: 0,
    sentences: 0,
    syllables: 0,
    complexWords: 0,
    grade: 0,
    label: "unknown"
  };

  const src = mcStr(text);
  if (!src.trim()) return zero;

  const sentenceList = mcSentences(src);
  let words = 0;
  let syllables = 0;
  let polysyllables = 0;
  let complexWords = 0;
  let letters = 0;

  for (let si = 0; si < sentenceList.length; si++) {
    const toks = mcWords(sentenceList[si]);
    for (let wi = 0; wi < toks.length; wi++) {
      const t = toks[wi];
      words++;
      letters += (t.match(/[\p{L}\p{N}]/gu) || []).length;
      // Floor at 1: a numeral still takes a beat when read aloud, and a 0 here
      // would drag syllables-per-word toward nonsense on number-heavy copy.
      const syl = Math.max(1, mcSyllables(t));
      syllables += syl;
      if (syl >= 3) polysyllables++;
      if (mcIsComplexWord(t, wi === 0)) complexWords++;
    }
  }

  if (!words) return zero;
  // A headline has no terminator but is still one sentence. Without this the
  // words/sentences ratio divides by zero — the exact failure this module exists
  // to prevent.
  const sentences = sentenceList.length || 1;

  const wps = mcDiv(words, sentences); // words per sentence
  const spw = mcDiv(syllables, words); // syllables per word
  const lpw = mcDiv(letters, words); // letters per word

  const flesch = 206.835 - 1.015 * wps - 84.6 * spw;
  const fleschKincaid = 0.39 * wps + 11.8 * spw - 15.59;
  const gunningFog = 0.4 * (wps + 100 * mcDiv(complexWords, words));
  // SMOG is calibrated on 30-sentence samples; on shorter text it is the noisiest
  // of the six, which is exactly why `grade` is a median and not a mean.
  const smog = 1.043 * Math.sqrt(polysyllables * mcDiv(30, sentences)) + 3.1291;
  const ari = 4.71 * lpw + 0.5 * wps - 21.43;
  const colemanLiau =
    0.0588 * (lpw * 100) - 0.296 * (mcDiv(sentences, words) * 100) - 15.8;

  // Median of the five US-grade-level formulas. Any single one can go badly wrong
  // on short text (ARI and Coleman-Liau both go sharply negative on one short
  // sentence; SMOG floors at ~3.1 regardless). The median is the robust estimator.
  const grade = mcClamp(
    mcMedian([fleschKincaid, gunningFog, smog, ari, colemanLiau]),
    0,
    20
  );

  return {
    flesch: mcRound(flesch, 1),
    fleschKincaid: mcRound(fleschKincaid, 1),
    gunningFog: mcRound(gunningFog, 1),
    smog: mcRound(smog, 1),
    ari: mcRound(ari, 1),
    colemanLiau: mcRound(colemanLiau, 1),
    words: words,
    sentences: sentences,
    syllables: syllables,
    complexWords: complexWords,
    grade: mcRound(grade, 1),
    label: mcFleschLabel(flesch)
  };
}

/* ------------------------------------------------------------------ *
 * Text statistics
 * ------------------------------------------------------------------ */

function mcTextStats(text) {
  const src = mcStr(text);
  const trimmed = src.trim();
  const out = {
    chars: trimmed.length,
    words: 0,
    sentences: 0,
    avgWordLen: 0,
    avgSentLen: 0,
    uniqueRatio: 0,
    longestWord: "",
    capsRatio: 0,
    punctRatio: 0
  };
  if (!trimmed) return out;

  const words = mcWords(trimmed);
  const sentences = mcSentences(trimmed);
  out.words = words.length;
  out.sentences = sentences.length || (words.length ? 1 : 0);

  let letterTotal = 0;
  let letterUpper = 0;
  for (let i = 0; i < trimmed.length; i++) {
    const c = trimmed[i];
    if (!/\p{L}/u.test(c)) continue;
    letterTotal++;
    // toLowerCase differing from the char is the script-agnostic "is uppercase"
    // test; it correctly abstains for scripts without case (Arabic, Han, kana).
    if (c !== c.toLowerCase() && c === c.toUpperCase()) letterUpper++;
  }
  const punct = (trimmed.match(/[.,;:!?'"()\[\]{}\-–—…«»„“”‘’]/g) || []).length;

  let charSum = 0;
  const seen = Object.create(null);
  let unique = 0;
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    charSum += w.length;
    if (w.length > out.longestWord.length) out.longestWord = w;
    const key = w.toLowerCase();
    if (!seen[key]) {
      seen[key] = true;
      unique++;
    }
  }

  out.avgWordLen = mcRound(mcDiv(charSum, words.length), 2);
  out.avgSentLen = mcRound(mcDiv(words.length, out.sentences), 2);
  out.uniqueRatio = mcRound(mcDiv(unique, words.length), 3);
  out.capsRatio = mcRound(mcDiv(letterUpper, letterTotal), 3);
  out.punctRatio = mcRound(mcDiv(punct, trimmed.length), 3);
  return out;
}

/* ------------------------------------------------------------------ *
 * Language identification
 * ------------------------------------------------------------------ */

const mcLangNames = {
  en: "English",
  es: "Spanish",
  fr: "French",
  de: "German",
  it: "Italian",
  pt: "Portuguese",
  nl: "Dutch",
  tr: "Turkish",
  ar: "Arabic",
  ru: "Russian",
  zh: "Chinese",
  ja: "Japanese",
  ko: "Korean",
  el: "Greek",
  he: "Hebrew",
  th: "Thai",
  hi: "Hindi",
  und: "Unknown"
};

// Script blocks. Script is checked FIRST and short-circuits everything else,
// because when a non-Latin script is present it is decisive: no amount of
// trigram evidence should ever out-vote the fact that the text is in Hangul.
// Running trigrams first and script as a tiebreaker gets Arabic and Russian
// wrong on mixed-content pages (a Latin byline attached to an Arabic body).
const mcScriptRanges = [
  { key: "kana", re: /[぀-ゟ゠-ヿㇰ-ㇿ]/g, lang: "ja" },
  { key: "hangul", re: /[가-힯ᄀ-ᇿ㄰-㆏]/g, lang: "ko" },
  { key: "han", re: /[一-鿿㐀-䶿豈-﫿]/g, lang: "zh" },
  {
    key: "arabic",
    re: /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/g,
    lang: "ar"
  },
  { key: "cyrillic", re: /[Ѐ-ԯ]/g, lang: "ru" },
  { key: "greek", re: /[Ͱ-Ͽἀ-῿]/g, lang: "el" },
  { key: "hebrew", re: /[֐-׿]/g, lang: "he" },
  { key: "thai", re: /[฀-๿]/g, lang: "th" },
  { key: "devanagari", re: /[ऀ-ॿ]/g, lang: "hi" }
];

// Top-40 character trigrams per Latin-script language, ranked by frequency over a
// small news corpus. "_" marks a word boundary. Rank position is the signal, so
// order matters — do not re-sort these lists.
const mcTrigramProfiles = {
  en: "_th the he_ _in d_t er_ tha at_ ed_ _a_ and ent hat in_ nd_ _an on_ ts_ _co e_t es_ _be _of _to e_c ld_ t_t _ha _pr _st a_s as_ d_a est n_t nt_ of_ res s_s to_",
  es: "_de os_ el_ ue_ _qu de_ que _la ent _el es_ _lo as_ s_d _un e_l la_ los _co _en nte e_e _se _y_ a_e en_ on_ res s_s tra _pa _pr cio con del ien ión s_p to_ un_",
  fr: "es_ _de _le nt_ ent e_l _qu le_ les e_d que ue_ de_ _la e_p la_ s_d sse _po ion ont re_ se_ _a_ _et _un e_a est et_ on_ tio _co _pa _se _tr men s_l _in ans ati",
  de: "en_ er_ ie_ die _di _de _un n_d der ich ten r_d ver _da _in in_ nd_ _ve das den ein n_w sen sse und ch_ nte sch te_ ter _ei _ge _ha _we ass che cht e_e es_ ine",
  it: "_de to_ no_ _ch che he_ del ti_ ent ell _ha _il ann il_ _in _un e_c e_i le_ o_c o_d _pe i_s ion nno o_i per _co _e_ _i_ ati ato er_ la_ ne_ re_ zio _pr el_ est",
  pt: "as_ os_ _qu que ue_ _de _do ara ão_ ent _o_ do_ s_a s_d _co de_ es_ _pa is_ ra_ _e_ _ma _os e_o o_d _a_ _an _se _um a_a am_ e_p e_q nte o_e ram to_ tra _po _pr",
  nl: "en_ de_ _de n_d _he et_ _da at_ er_ dat het an_ der een ing ten ver _en ie_ t_d _ee _ge _va est nde van _be _ve den n_v n_w ng_ oor ste t_h _in _vo _we erd ers",
  tr: "ını _bi _ve arı lar nı_ ın_ ler rın ve_ bir ir_ ni_ _ya _ye da_ di_ eni eri in_ nın onu ğın _ba _ge adı alı anı dı_ en_ i_y ile ini ki_ lan nda ğin _ar _da _gö"
};

// rank -> weight, computed once. Highest-ranked trigram is worth 1.0, the 40th
// roughly 0.025, so a match on "_th" says far more than a match on "res".
const mcTrigramWeights = (function mcBuildTrigramWeights() {
  const out = {};
  const langs = Object.keys(mcTrigramProfiles);
  for (let i = 0; i < langs.length; i++) {
    const list = mcTrigramProfiles[langs[i]].split(" ");
    const map = Object.create(null);
    for (let r = 0; r < list.length; r++) map[list[r]] = (list.length - r) / list.length;
    out[langs[i]] = map;
  }
  return out;
})();

// Characters that are strong (not conclusive) evidence for one language. Used as a
// small additive nudge only — with 40-trigram profiles, Spanish/Portuguese and
// French/Italian can land within noise of each other, and "ñ" or "ğ" breaks the tie
// cheaply. Weighted low on purpose so a single stray diacritic can't flip a verdict.
const mcLangHints = {
  es: "ñáíóúü¿¡",
  fr: "çœèêëàâîïûùœ",
  de: "äöüß",
  it: "àèéìòù",
  pt: "ãõçáâêó",
  nl: "ĳ",
  tr: "ığşİıçöü",
  en: ""
};

// Normalize to the same shape used when the profiles were built: lowercase,
// non-letters collapsed to a single "_" boundary marker, padded at both ends.
function mcTrigramsOf(text) {
  const s = ("_" + mcStr(text).toLowerCase().replace(/[^\p{L}]+/gu, "_") + "_").replace(
    /_+/g,
    "_"
  );
  const counts = Object.create(null);
  let total = 0;
  for (let i = 0; i + 3 <= s.length; i++) {
    const t = s.slice(i, i + 3);
    if (t === "___") continue;
    counts[t] = (counts[t] || 0) + 1;
    total++;
  }
  return { counts: counts, total: total };
}

// Returns the dominant non-Latin script, or null if the text is Latin/empty.
function mcDetectScript(text) {
  const s = mcStr(text);
  const letters = (s.match(/\p{L}/gu) || []).length;
  if (!letters) return null;
  let best = null;
  for (let i = 0; i < mcScriptRanges.length; i++) {
    const spec = mcScriptRanges[i];
    spec.re.lastIndex = 0;
    const hits = (s.match(spec.re) || []).length;
    if (!hits) continue;
    const share = mcDiv(hits, letters);
    // Kana and Hangul win outright even at low share: a single kana character in
    // a Han-heavy string means Japanese, not Chinese. For the rest, require a
    // real presence so one stray Cyrillic glyph doesn't hijack an English string.
    const decisive = spec.key === "kana" || spec.key === "hangul";
    if (decisive) return { lang: spec.lang, share: Math.max(share, 0.6), key: spec.key };
    if (share < 0.2) continue;
    if (!best || share > best.share) best = { lang: spec.lang, share: share, key: spec.key };
  }
  return best;
}

function mcDetectLang(text) {
  const src = mcStr(text);
  const cleaned = src.replace(/\s+/g, " ").trim();
  const scores = {};

  if (!cleaned) {
    return { lang: "und", name: mcLangNames.und, confidence: 0, scores: scores };
  }

  // --- Stage 1: script. Decisive when present, so it runs first. ---
  const script = mcDetectScript(cleaned);
  if (script) {
    scores[script.lang] = 1;
    let conf = 0.6 + 0.39 * mcClamp(script.share, 0, 1);
    // Han without kana is genuinely ambiguous (Chinese, or Japanese written
    // without kana), so shade confidence down rather than claiming certainty.
    if (script.key === "han") conf = Math.min(conf, 0.85);
    if (cleaned.length < 12) conf = Math.min(conf, 0.35);
    return {
      lang: script.lang,
      name: mcLangNames[script.lang] || script.lang,
      confidence: mcRound(conf, 3),
      scores: scores
    };
  }

  // --- Stage 2: trigram profiles for the Latin-script languages. ---
  const grams = mcTrigramsOf(cleaned);
  const langs = Object.keys(mcTrigramProfiles);
  const letters = (cleaned.match(/\p{L}/gu) || []).length;
  const raw = {};
  let sum = 0;

  for (let i = 0; i < langs.length; i++) {
    const lang = langs[i];
    const weights = mcTrigramWeights[lang];
    let score = 0;
    for (const t in grams.counts) {
      const w = weights[t];
      if (w) score += grams.counts[t] * w;
    }
    score = mcDiv(score, grams.total);

    // Diacritic nudge (see mcLangHints): small, additive, share-based.
    const hints = mcLangHints[lang] || "";
    if (hints && letters) {
      let hits = 0;
      for (let c = 0; c < cleaned.length; c++) {
        if (hints.indexOf(cleaned[c].toLowerCase()) !== -1) hits++;
      }
      score += 0.9 * mcDiv(hits, letters);
    }
    raw[lang] = score;
    sum += score;
  }

  // Sharpen before normalizing. Raw coverage scores sit close together (they share
  // an alphabet); squaring pulls the winner clear so `confidence` means something.
  let sharpSum = 0;
  for (let i = 0; i < langs.length; i++) sharpSum += raw[langs[i]] * raw[langs[i]];
  let best = "und";
  let bestP = 0;
  let secondP = 0;
  for (let i = 0; i < langs.length; i++) {
    const p = sharpSum ? (raw[langs[i]] * raw[langs[i]]) / sharpSum : 0;
    scores[langs[i]] = mcRound(p, 4);
    if (p > bestP) {
      secondP = bestP;
      bestP = p;
      best = langs[i];
    } else if (p > secondP) {
      secondP = p;
    }
  }

  if (!sum || best === "und") {
    return { lang: "und", name: mcLangNames.und, confidence: 0, scores: scores };
  }

  // Confidence blends "how dominant is the winner" with "how far clear of the
  // runner-up is it". A 0.30/0.29 split is a coin flip and should read as one.
  let conf = 0.55 * bestP + 0.45 * (bestP - secondP);

  // Short input: there is simply not enough evidence. Two- or three-word strings
  // hit a handful of trigrams and can score arbitrarily high by luck, so cap hard
  // rather than let the UI print "French, 91%" for the word "ok".
  if (cleaned.length < 12) conf = Math.min(conf, 0.3);
  else if (cleaned.length < 30) conf = Math.min(conf, 0.75);

  return {
    lang: best,
    name: mcLangNames[best] || best,
    confidence: mcRound(mcClamp(conf, 0, 1), 3),
    scores: scores
  };
}

/* ------------------------------------------------------------------ *
 * Headline scoring
 * ------------------------------------------------------------------ */

// Curated news verbs. A stem list beats a POS tagger here: headlines are short,
// verbs are drawn from a small conventional set, and we only need a yes/no.
const mcStrongVerbs = ("hold keep raise lift cut slash ban block halt stop end win lose beat " +
  "sign seal kill wound urge warn back seek face hit open close launch rise fall drop climb " +
  "agree reject approve vote resign quit plan name set push probe sue meet reach delay boost " +
  "defend arrest charge unveil expand freeze accuse deny admit claim confirm report reveal " +
  "announce say tell ask call demand refuse order rule find leave return join buy sell fund " +
  "pay owe grow shrink surge plunge miss break fix build shut fire hire elect oust flee " +
  "strike protest march clash vow pledge target ease tighten steady").split(" ");

// Patterns that mark engagement-bait rather than reporting.
const mcClickbaitPatterns = [
  { re: /\byou\s+won'?t\s+believe\b/i, why: "clickbait phrasing: \"you won't believe\"" },
  { re: /\bthis\s+one\s+(weird\s+|simple\s+|crazy\s+)?(trick|thing|tip|secret)\b/i, why: "clickbait phrasing: \"this one trick\"" },
  { re: /\bshock(ing|ed)?\b/i, why: "clickbait phrasing: \"shocking\"" },
  { re: /\bhere'?s\s+why\b/i, why: "clickbait phrasing: \"here's why\"" },
  { re: /\b(what\s+happened\s+next|the\s+reason\s+why|will\s+blow\s+your\s+mind)\b/i, why: "clickbait phrasing: withheld payoff" },
  { re: /^\s*(top\s+)?\d+\s+\p{L}/iu, why: "listicle framing: opens with a number" },
  { re: /\b\d+\s+(things|reasons|ways|facts|signs|tips|tricks|secrets|times)\b/i, why: "listicle framing: numbered list" },
  { re: /\b(doctors|experts|scientists)\s+hate\b/i, why: "clickbait phrasing: manufactured authority" },
  { re: /\bgoes?\s+viral\b/i, why: "clickbait phrasing: \"goes viral\"" }
];

function mcHeadlineScore(text) {
  const src = mcStr(text).trim();
  const notes = [];
  if (!src) return { score: 0, notes: ["empty headline"] };

  const words = mcWords(src);
  const n = words.length;
  if (!n) return { score: 0, notes: ["no words found"] };

  // --- length: 6-14 words is the band that survives truncation in most feeds ---
  let lengthScore = 1;
  if (n < 6) {
    lengthScore = mcClamp(1 - (6 - n) * 0.15, 0, 1);
    notes.push("too short (" + n + " words; aim for 6-14)");
  } else if (n > 14) {
    lengthScore = mcClamp(1 - (n - 14) * 0.12, 0, 1);
    notes.push("too long (" + n + " words; aim for 6-14)");
  }

  // --- strong verb: a headline without a verb is a label, not a headline ---
  let hasVerb = false;
  for (let i = 0; i < n && !hasVerb; i++) {
    const w = words[i].toLowerCase().replace(/[^a-z]/g, "");
    if (!w) continue;
    const stems = [w, w.replace(/s$/, ""), w.replace(/es$/, ""), w.replace(/ed$/, ""), w.replace(/ing$/, "")];
    for (let s = 0; s < stems.length; s++) {
      if (stems[s] && mcStrongVerbs.indexOf(stems[s]) !== -1) {
        hasVerb = true;
        break;
      }
    }
  }
  // 0.35 rather than 0 when absent: noun-phrase headlines are a legitimate style,
  // just a weaker default.
  const verbScore = hasVerb ? 1 : 0.35;
  if (!hasVerb) notes.push("no strong verb detected");

  // --- shouting ---
  let shouty = 0;
  for (let i = 0; i < n; i++) {
    const letters = words[i].replace(/[^\p{L}]/gu, "");
    if (letters.length >= 3 && letters === letters.toUpperCase() && letters !== letters.toLowerCase()) shouty++;
  }
  const shoutRatio = mcDiv(shouty, n);
  const capsScore = mcClamp(1 - shoutRatio * 1.6, 0, 1);
  if (shoutRatio > 0.3) {
    notes.push("ALL-CAPS shouting (" + Math.round(shoutRatio * 100) + "% of words in caps)");
  }

  // --- clickbait ---
  let baitHits = 0;
  for (let i = 0; i < mcClickbaitPatterns.length; i++) {
    if (mcClickbaitPatterns[i].re.test(src)) {
      baitHits++;
      notes.push(mcClickbaitPatterns[i].why);
    }
  }
  const baitScore = mcClamp(1 - baitHits * 0.5, 0, 1);

  // --- readability: grades 5-12 read cleanly in a feed ---
  const r = mcReadability(src);
  let readScore = 1;
  if (r.grade > 12) {
    readScore = mcClamp(1 - (r.grade - 12) * 0.1, 0, 1);
    notes.push("dense for a headline (grade " + r.grade + ")");
  } else if (r.grade < 3 && n >= 6) {
    readScore = 0.85; // Not a real problem, just unusually plain.
  }

  let score =
    0.3 * lengthScore + 0.2 * verbScore + 0.2 * capsScore + 0.2 * baitScore + 0.1 * readScore;

  // Multiplicative penalty on top of the weighted sum. Without it a headline can
  // bank the length/verb/readability points and still clear 0.5 while being pure
  // bait — the component average is too forgiving of a disqualifying flaw.
  const penalty = mcClamp(1 - 0.25 * baitHits - (shoutRatio > 0.5 ? 0.3 : 0), 0.1, 1);
  score = mcClamp(score * penalty, 0, 1);

  if (!notes.length) notes.push("no issues detected");
  return { score: mcRound(score, 3), notes: notes };
}

/* ------------------------------------------------------------------ *
 * Self-test (Node only; inert in the browser)
 * ------------------------------------------------------------------ */

function mcSelfTest() {
  let passed = 0;
  const failures = [];

  function ok(name, cond, detail) {
    if (cond) {
      passed++;
    } else {
      failures.push(name + (detail === undefined ? "" : " -> " + detail));
    }
  }

  // --- mcSyllables -------------------------------------------------
  ok("syllables cat=1", mcSyllables("cat") === 1, mcSyllables("cat"));
  ok("syllables table=2", mcSyllables("table") === 2, mcSyllables("table"));
  // We accept 3 for "business" (the heuristic cannot know the medial "i" is silent).
  ok("syllables business in {2,3}", [2, 3].indexOf(mcSyllables("business")) !== -1, mcSyllables("business"));
  ok("syllables business===3 (our answer)", mcSyllables("business") === 3, mcSyllables("business"));
  ok("syllables beautiful=3", mcSyllables("beautiful") === 3, mcSyllables("beautiful"));
  // We accept 1 for "queue": one vowel cluster, silent-e floor holds it at 1.
  ok("syllables queue in {1,2}", [1, 2].indexOf(mcSyllables("queue")) !== -1, mcSyllables("queue"));
  ok("syllables queue===1 (our answer)", mcSyllables("queue") === 1, mcSyllables("queue"));
  ok("syllables strength=1", mcSyllables("strength") === 1, mcSyllables("strength"));
  ok("syllables area=3", mcSyllables("area") === 3, mcSyllables("area"));
  ok("syllables the=1", mcSyllables("the") === 1, mcSyllables("the"));
  ok("syllables '' in {0,1}", [0, 1].indexOf(mcSyllables("")) !== -1, mcSyllables(""));
  ok("syllables null safe", Number.isFinite(mcSyllables(null)), mcSyllables(null));
  ok("syllables people=2", mcSyllables("people") === 2, mcSyllables("people"));
  ok("syllables walked=1", mcSyllables("walked") === 1, mcSyllables("walked"));
  ok("syllables wanted=2", mcSyllables("wanted") === 2, mcSyllables("wanted"));

  // --- mcReadability -----------------------------------------------
  const simple = "The cat sat on the mat. The dog ran fast. Birds sing in the tree.";
  const dense =
    "Notwithstanding the aforementioned regulatory determinations, the interdepartmental " +
    "committee concluded that the implementation of supplementary administrative procedures " +
    "necessitates a comprehensive reconsideration of the existing methodological framework " +
    "governing institutional accountability and organisational transparency requirements.";
  const rSimple = mcReadability(simple);
  const rDense = mcReadability(dense);
  ok("readability simple grade < dense grade", rSimple.grade < rDense.grade, rSimple.grade + " vs " + rDense.grade);
  ok("readability simple flesch > dense flesch", rSimple.flesch > rDense.flesch, rSimple.flesch + " vs " + rDense.flesch);
  ok("readability simple label easier", rSimple.label !== rDense.label, rSimple.label + " / " + rDense.label);
  ok("readability simple sentences=3", rSimple.sentences === 3, rSimple.sentences);

  const rEmpty = mcReadability("");
  const numericFields = ["flesch", "fleschKincaid", "gunningFog", "smog", "ari", "colemanLiau", "words", "sentences", "syllables", "complexWords", "grade"];
  let allZero = true;
  let allFinite = true;
  for (let i = 0; i < numericFields.length; i++) {
    const v = rEmpty[numericFields[i]];
    if (!Number.isFinite(v)) allFinite = false;
    if (v !== 0) allZero = false;
  }
  ok("readability('') all finite", allFinite);
  ok("readability('') all zero", allZero, JSON.stringify(rEmpty));
  ok("readability('') label is string", typeof rEmpty.label === "string", rEmpty.label);

  const rHead = mcReadability("Rates held steady");
  let headFinite = true;
  for (let i = 0; i < numericFields.length; i++) {
    if (!Number.isFinite(rHead[numericFields[i]])) headFinite = false;
  }
  ok("readability 3-word headline all finite", headFinite, JSON.stringify(rHead));
  ok("readability 3-word headline sentences=1", rHead.sentences === 1, rHead.sentences);
  ok("readability 3-word headline words=3", rHead.words === 3, rHead.words);

  let readabilityNullSafe = true;
  try {
    const a = mcReadability(null);
    const b = mcReadability(undefined);
    readabilityNullSafe = a.words === 0 && b.words === 0 && Number.isFinite(a.grade) && Number.isFinite(b.grade);
  } catch (e) {
    readabilityNullSafe = false;
  }
  ok("readability null/undefined safe", readabilityNullSafe);

  // --- mcDetectLang -------------------------------------------------
  // Deliberately NOT the sentences the profiles were built from.
  const samples = {
    en: "The judge ruled that the evidence was not enough to keep him in custody, and his lawyers said they expected the case to be dropped before the end of the month.",
    es: "El juez resolvió que las pruebas no eran suficientes para mantenerlo detenido, y sus abogados dijeron que esperaban que el caso se archivara antes de final de mes.",
    fr: "Le juge a estimé que les preuves n'étaient pas suffisantes pour le maintenir en détention, et ses avocats ont déclaré qu'ils attendaient l'abandon des poursuites.",
    de: "Der Richter entschied, dass die Beweise nicht ausreichten, um ihn in Haft zu halten, und seine Anwälte sagten, sie rechneten mit einer Einstellung des Verfahrens.",
    tr: "Hakim delillerin onu tutuklu tutmaya yetmediğine karar verdi ve avukatları davanın ay sonundan önce düşürülmesini beklediklerini söyledi.",
    it: "Il giudice ha stabilito che le prove non erano sufficienti per tenerlo in custodia e i suoi avvocati hanno detto che si aspettavano l'archiviazione del caso.",
    pt: "O juiz decidiu que as provas não eram suficientes para o manter detido, e os seus advogados disseram que esperavam o arquivamento do caso antes do fim do mês.",
    nl: "De rechter oordeelde dat het bewijs niet voldoende was om hem vast te houden, en zijn advocaten zeiden dat zij verwachtten dat de zaak zou worden geseponeerd."
  };
  const langKeys = Object.keys(samples);
  for (let i = 0; i < langKeys.length; i++) {
    const k = langKeys[i];
    const d = mcDetectLang(samples[k]);
    ok("detect " + k, d.lang === k, d.lang + " @" + d.confidence + " " + JSON.stringify(d.scores));
  }

  const ar = mcDetectLang("غارات على غزة ومحادثات وقف إطلاق النار");
  ok("detect ar", ar.lang === "ar", ar.lang);
  ok("detect ar high confidence", ar.confidence > 0.8, ar.confidence);
  ok("detect ar name", ar.name === "Arabic", ar.name);

  const ru = mcDetectLang("Центральный банк заявил, что процентные ставки останутся без изменений до конца года.");
  ok("detect ru", ru.lang === "ru", ru.lang);
  ok("detect ru confident", ru.confidence > 0.8, ru.confidence);

  const ja = mcDetectLang("中央銀行は火曜日、金利を年末まで据え置くと発表しました。");
  ok("detect ja (kana wins over han)", ja.lang === "ja", ja.lang);

  const ko = mcDetectLang("중앙은행은 화요일 금리를 연말까지 동결하겠다고 발표했다.");
  ok("detect ko", ko.lang === "ko", ko.lang);

  const zh = mcDetectLang("中央银行周二表示，将在今年余下时间维持利率不变，并警告通胀仍高于目标水平。");
  ok("detect zh (han, no kana)", zh.lang === "zh", zh.lang);

  const short = mcDetectLang("ok");
  ok("detect 'ok' low confidence", short.confidence < 0.5, short.confidence);
  ok("detect 'ok' returns scores object", short.scores && typeof short.scores === "object");

  const empty = mcDetectLang("");
  ok("detect('') -> und", empty.lang === "und" && empty.confidence === 0, JSON.stringify(empty));
  let detectNullSafe = true;
  try {
    detectNullSafe = mcDetectLang(null).lang === "und" && mcDetectLang(undefined).lang === "und";
  } catch (e) {
    detectNullSafe = false;
  }
  ok("detect null/undefined safe", detectNullSafe);

  const en2 = mcDetectLang(samples.en);
  ok("detect exposes runner-up", Object.keys(en2.scores).length >= 2, Object.keys(en2.scores).length);
  ok("detect confidence in [0,1]", en2.confidence >= 0 && en2.confidence <= 1, en2.confidence);

  // --- mcTextStats ---------------------------------------------------
  const caps = mcTextStats("BREAKING NEWS FROM THE CAPITAL");
  const lower = mcTextStats("breaking news from the capital");
  ok("stats capsRatio ~1 for ALL CAPS", caps.capsRatio > 0.95, caps.capsRatio);
  ok("stats capsRatio ~0 for lowercase", lower.capsRatio < 0.05, lower.capsRatio);
  const st = mcTextStats("The bank cut rates. The bank cut rates again, sharply.");
  ok("stats words counted", st.words === 10, st.words);
  ok("stats sentences counted", st.sentences === 2, st.sentences);
  ok("stats uniqueRatio < 1 with repeats", st.uniqueRatio < 1 && st.uniqueRatio > 0, st.uniqueRatio);
  ok("stats longestWord", st.longestWord === "sharply", st.longestWord);
  ok("stats all finite", ["chars", "words", "sentences", "avgWordLen", "avgSentLen", "uniqueRatio", "capsRatio", "punctRatio"].every(function (k) {
    return Number.isFinite(st[k]);
  }));
  const stEmpty = mcTextStats("");
  ok("stats('') zeroed, no NaN", stEmpty.words === 0 && Number.isFinite(stEmpty.avgWordLen) && stEmpty.avgWordLen === 0);
  let statsNullSafe = true;
  try {
    statsNullSafe = mcTextStats(null).words === 0 && mcTextStats(undefined).words === 0;
  } catch (e) {
    statsNullSafe = false;
  }
  ok("stats null/undefined safe", statsNullSafe);

  // --- mcHeadlineScore -----------------------------------------------
  const good = mcHeadlineScore("Central bank holds interest rates steady at 4.5%");
  const bad = mcHeadlineScore("YOU WON'T BELIEVE THIS ONE SHOCKING TRICK");
  ok("headline good > bad", good.score > bad.score, good.score + " vs " + bad.score);
  ok("headline good scores well", good.score > 0.7, good.score + " " + JSON.stringify(good.notes));
  ok("headline bad scores poorly", bad.score < 0.35, bad.score);
  ok("headline bad notes mention caps/clickbait", /caps|clickbait|shout/i.test(bad.notes.join(" ")), bad.notes.join(" | "));
  ok("headline scores in [0,1]", good.score >= 0 && good.score <= 1 && bad.score >= 0 && bad.score <= 1);
  const terse = mcHeadlineScore("Rates held");
  ok("headline too-short is noted", /too short/i.test(terse.notes.join(" ")), terse.notes.join(" | "));
  ok("headline terse finite", Number.isFinite(terse.score), terse.score);
  const listicle = mcHeadlineScore("7 things about the budget you need to know");
  ok("headline listicle penalised", listicle.score < good.score, listicle.score + " vs " + good.score);
  const hEmpty = mcHeadlineScore("");
  ok("headline('') -> 0 with note", hEmpty.score === 0 && hEmpty.notes.length > 0);
  let headlineNullSafe = true;
  try {
    headlineNullSafe = mcHeadlineScore(null).score === 0 && mcHeadlineScore(undefined).score === 0;
  } catch (e) {
    headlineNullSafe = false;
  }
  ok("headline null/undefined safe", headlineNullSafe);

  // --- cross-cutting: nothing throws on hostile input ------------------
  let hostileSafe = true;
  const hostile = ["", "   ", "\n\n", "!!!", "123", "…", "🙂🙂🙂", "a", null, undefined, 42, {}];
  try {
    for (let i = 0; i < hostile.length; i++) {
      mcReadability(hostile[i]);
      mcTextStats(hostile[i]);
      mcDetectLang(hostile[i]);
      mcHeadlineScore(hostile[i]);
      mcSyllables(hostile[i]);
    }
  } catch (e) {
    hostileSafe = false;
    failures.push("hostile input threw: " + e.message);
  }
  ok("hostile input never throws", hostileSafe);

  const total = passed + failures.length;
  for (let i = 0; i < failures.length; i++) console.log("FAIL: " + failures[i]);
  console.log(
    (failures.length ? "FAIL" : "PASS") + " — " + passed + "/" + total + " assertions passed"
  );
  return failures.length === 0;
}

if (typeof module !== "undefined" && require.main === module) {
  if (!mcSelfTest()) process.exit(1);
}
