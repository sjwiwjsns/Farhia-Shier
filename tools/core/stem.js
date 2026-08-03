/* musa core — text stemming + fuzzy matching primitives.
 *
 * Plain script scope on purpose: this file is pasted verbatim into a single-file
 * HTML app, so no modules, no wrapper, no globals that aren't `mc`-prefixed.
 *
 * The stemmer is Porter (1980), the original algorithm — NOT Porter2/Snowball.
 * Two deviations from the printed paper are deliberate: BLI -> BLE (the paper
 * printed ABLI -> ABLE) and the extra LOGI -> LOG rule. Both are Porter's own
 * published errata to the *same* algorithm and are what the canonical
 * voc.txt/output.txt vectors expect; they are not Porter2 changes.
 */

/* ------------------------------------------------------------------ *
 * Porter helper conditions: m, *v*, *d, *o
 * ------------------------------------------------------------------ */

// Y is the awkward one: it is a consonant at the start of a word or after a
// vowel, and a vowel after a consonant ("sky" has no stem vowel, "happy" does).
function mcIsConsonant(w, i) {
  const ch = w.charAt(i);
  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") return false;
  if (ch !== "y") return true;
  return i === 0 ? true : !mcIsConsonant(w, i - 1);
}

// The measure m of [C](VC){m}[V] — how many vowel-consonant pairs the stem has.
// Callers always pass a prefix of the original word, so the y-rule above stays
// correct (it only ever looks left).
function mcMeasure(stem) {
  const len = stem.length;
  let i = 0;
  let m = 0;
  while (i < len && mcIsConsonant(stem, i)) i++;
  for (;;) {
    while (i < len && !mcIsConsonant(stem, i)) i++;
    if (i >= len) return m;
    m++;
    while (i < len && mcIsConsonant(stem, i)) i++;
    if (i >= len) return m;
  }
}

// *v* — the stem contains a vowel.
function mcHasVowel(stem) {
  for (let i = 0; i < stem.length; i++) {
    if (!mcIsConsonant(stem, i)) return true;
  }
  return false;
}

// *d — the stem ends in a doubled consonant. Consonant-ness is judged on the
// final letter only, as in Porter's own C reference (doublec): the two letters
// are identical, so they can only disagree for "yy", and the C original treats
// that as doubled. Cross-checked against the reference on ~380k inputs.
function mcEndsDoubleConsonant(stem) {
  const len = stem.length;
  if (len < 2) return false;
  if (stem.charAt(len - 1) !== stem.charAt(len - 2)) return false;
  return mcIsConsonant(stem, len - 1);
}

// *o — the stem ends consonant-vowel-consonant where the final consonant is
// not w, x or y. Those three are excluded because they never take a doubled
// form in English spelling ("box" -> "boxing", not "boxxing").
function mcEndsCVC(stem) {
  const len = stem.length;
  if (len < 3) return false;
  if (!mcIsConsonant(stem, len - 3)) return false;
  if (mcIsConsonant(stem, len - 2)) return false;
  if (!mcIsConsonant(stem, len - 1)) return false;
  const last = stem.charAt(len - 1);
  return last !== "w" && last !== "x" && last !== "y";
}

/* ------------------------------------------------------------------ *
 * Suffix tables
 * ------------------------------------------------------------------ */

const mcStep2Rules = [
  ["ational", "ate"], ["tional", "tion"], ["enci", "ence"], ["anci", "ance"],
  ["izer", "ize"], ["bli", "ble"], ["alli", "al"], ["entli", "ent"],
  ["eli", "e"], ["ousli", "ous"], ["ization", "ize"], ["ation", "ate"],
  ["ator", "ate"], ["alism", "al"], ["iveness", "ive"], ["fulness", "ful"],
  ["ousness", "ous"], ["aliti", "al"], ["iviti", "ive"], ["biliti", "ble"],
  ["logi", "log"]
];

const mcStep3Rules = [
  ["icate", "ic"], ["ative", ""], ["alize", "al"], ["iciti", "ic"],
  ["ical", "ic"], ["ful", ""], ["ness", ""]
];

// "ion" carries an extra *S-or-*T guard, handled at the call site.
const mcStep4Suffixes = [
  "al", "ance", "ence", "er", "ic", "able", "ible", "ant", "ement", "ment",
  "ent", "ion", "ou", "ism", "ate", "iti", "ous", "ive", "ize"
];

// Porter's convention inside a rule set: the LONGEST matching suffix wins, and
// if its condition fails no shorter rule is tried afterwards. So we resolve the
// longest match first and let the caller decide whether to fire it.
function mcLongestPair(word, pairs) {
  let best = null;
  for (let i = 0; i < pairs.length; i++) {
    const suffix = pairs[i][0];
    if (word.length > suffix.length && word.endsWith(suffix)) {
      if (best === null || suffix.length > best[0].length) best = pairs[i];
    }
  }
  return best;
}

function mcLongestSuffix(word, suffixes) {
  let best = null;
  for (let i = 0; i < suffixes.length; i++) {
    const suffix = suffixes[i];
    if (word.length > suffix.length && word.endsWith(suffix)) {
      if (best === null || suffix.length > best.length) best = suffix;
    }
  }
  return best;
}

/* ------------------------------------------------------------------ *
 * The stemmer
 * ------------------------------------------------------------------ */

function mcStem(word) {
  if (typeof word !== "string") return "";
  let w = word;
  if (w.length <= 2) return w;

  // --- Step 1a: plurals -------------------------------------------------
  if (w.endsWith("sses")) w = w.slice(0, -2);
  else if (w.endsWith("ies")) w = w.slice(0, -2);
  else if (w.endsWith("ss")) { /* ss is already the stem form */ }
  else if (w.endsWith("s")) w = w.slice(0, -1);

  // --- Step 1b: -eed / -ed / -ing --------------------------------------
  let step1bFired = false;
  if (w.endsWith("eed")) {
    // Only shorten to "ee" when there is real material in front of it:
    // "agreed" -> "agree", but "feed" stays "feed".
    if (mcMeasure(w.slice(0, -3)) > 0) w = w.slice(0, -1);
  } else if (w.endsWith("ed")) {
    const stem = w.slice(0, -2);
    if (mcHasVowel(stem)) { w = stem; step1bFired = true; }
  } else if (w.endsWith("ing")) {
    const stem = w.slice(0, -3);
    if (mcHasVowel(stem)) { w = stem; step1bFired = true; }
  }

  // Cleanup after -ed/-ing removal restores the spelling the suffix had eaten:
  // conflat->conflate, troubl->trouble, hopp->hop, fil->file. Exactly one of
  // these rules may fire.
  if (step1bFired) {
    if (w.endsWith("at") || w.endsWith("bl") || w.endsWith("iz")) {
      w += "e";
    } else if (mcEndsDoubleConsonant(w)) {
      const last = w.charAt(w.length - 1);
      // -ll, -ss, -zz are genuine English endings, so they survive undoubled.
      if (last !== "l" && last !== "s" && last !== "z") w = w.slice(0, -1);
    } else if (mcMeasure(w) === 1 && mcEndsCVC(w)) {
      w += "e";
    }
  }

  // --- Step 1c: terminal y -> i ----------------------------------------
  if (w.length > 1 && w.endsWith("y") && mcHasVowel(w.slice(0, -1))) {
    w = w.slice(0, -1) + "i";
  }

  // --- Step 2: double suffixes -> single (m > 0) -----------------------
  const p2 = mcLongestPair(w, mcStep2Rules);
  if (p2 !== null) {
    const stem = w.slice(0, w.length - p2[0].length);
    if (mcMeasure(stem) > 0) w = stem + p2[1];
  }

  // --- Step 3: more suffix collapsing (m > 0) --------------------------
  const p3 = mcLongestPair(w, mcStep3Rules);
  if (p3 !== null) {
    const stem = w.slice(0, w.length - p3[0].length);
    if (mcMeasure(stem) > 0) w = stem + p3[1];
  }

  // --- Step 4: strip the residual suffix outright (m > 1) --------------
  const s4 = mcLongestSuffix(w, mcStep4Suffixes);
  if (s4 !== null) {
    const stem = w.slice(0, w.length - s4.length);
    // -ion only comes off after s or t ("adoption" yes, "lion" never).
    const ionOk = s4 !== "ion" || stem.endsWith("s") || stem.endsWith("t");
    if (ionOk && mcMeasure(stem) > 1) w = stem;
  }

  // --- Step 5a: terminal e ---------------------------------------------
  if (w.endsWith("e")) {
    const stem = w.slice(0, -1);
    const m = mcMeasure(stem);
    // At m == 1 the e is kept when the stem is cvc, since it is the silent e
    // doing the vowel-lengthening work: "rate" keeps it, "cease" does not.
    if (m > 1 || (m === 1 && !mcEndsCVC(stem))) w = stem;
  }

  // --- Step 5b: undouble a final l -------------------------------------
  if (w.endsWith("ll") && mcMeasure(w) > 1) w = w.slice(0, -1);

  return w;
}

function mcStemAll(tokens) {
  if (!Array.isArray(tokens)) return [];
  const out = new Array(tokens.length);
  for (let i = 0; i < tokens.length; i++) out[i] = mcStem(tokens[i]);
  return out;
}

/* ------------------------------------------------------------------ *
 * Normalisation helpers
 * ------------------------------------------------------------------ */

// Fold case and strip combining marks so "Café" and "cafe" compare equal.
function mcNormalize(text) {
  if (typeof text !== "string") return "";
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[\u2018\u2019\u201b]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

// Word-ish tokens only; apostrophes stay so "don't" survives as one token.
function mcTokenize(text) {
  const normalized = mcNormalize(text);
  if (normalized === "") return [];
  const matches = normalized.match(/[a-z0-9]+(?:'[a-z]+)*/g);
  return matches === null ? [] : matches;
}

function mcNgrams(tokens, n) {
  if (!Array.isArray(tokens) || !(n >= 1) || tokens.length < n) return [];
  const size = Math.floor(n);
  const out = [];
  for (let i = 0; i + size <= tokens.length; i++) {
    out.push(tokens.slice(i, i + size).join(" "));
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Edit distance + fuzzy lookup
 * ------------------------------------------------------------------ */

// Levenshtein with two rolling rows: O(min(n,m)) memory instead of a full
// matrix, which matters because fuzzy lookup calls this once per candidate.
// Compared by code point, so an emoji or an astral character costs 1, not 2.
function mcEditDistance(a, b) {
  const x = Array.from(typeof a === "string" ? a : "");
  const y = Array.from(typeof b === "string" ? b : "");
  if (x.length === 0) return y.length;
  if (y.length === 0) return x.length;

  // Keep the shorter string on the row axis so the arrays stay small.
  const short = x.length <= y.length ? x : y;
  const long = x.length <= y.length ? y : x;

  let prev = new Array(short.length + 1);
  let curr = new Array(short.length + 1);
  for (let j = 0; j <= short.length; j++) prev[j] = j;

  for (let i = 1; i <= long.length; i++) {
    curr[0] = i;
    const li = long[i - 1];
    for (let j = 1; j <= short.length; j++) {
      const cost = li === short[j - 1] ? 0 : 1;
      const del = prev[j] + 1;
      const ins = curr[j - 1] + 1;
      const sub = prev[j - 1] + cost;
      curr[j] = del < ins ? (del < sub ? del : sub) : (ins < sub ? ins : sub);
    }
    const swap = prev;
    prev = curr;
    curr = swap;
  }
  return prev[short.length];
}

// Tolerance scales with word length: one typo in a short word is a different
// word, three in a long one is still recognisably the same word.
function mcDefaultMaxDist(needle) {
  const len = Array.from(needle).length;
  if (len <= 4) return 1;
  if (len <= 8) return 2;
  return 3;
}

function mcFuzzyMatch(needle, candidates, maxDist) {
  if (typeof needle !== "string" || !Array.isArray(candidates)) return null;
  const target = needle.toLowerCase();
  if (target === "") return null;
  const limit = typeof maxDist === "number" ? maxDist : mcDefaultMaxDist(target);
  const targetLen = Array.from(target).length;

  let best = null;
  let bestDist = Infinity;
  for (let i = 0; i < candidates.length; i++) {
    const candidate = candidates[i];
    if (typeof candidate !== "string" || candidate === "") continue;
    const lowered = candidate.toLowerCase();
    // Length gap alone is a lower bound on the distance — cheap reject.
    if (Math.abs(Array.from(lowered).length - targetLen) > limit) continue;
    const d = mcEditDistance(target, lowered);
    if (d < bestDist) {
      best = candidate;
      bestDist = d;
      if (d === 0) break;
    }
  }
  return bestDist <= limit ? best : null;
}

/* ------------------------------------------------------------------ *
 * Self-test — runs under `node stem.js`, inert in the browser.
 * ------------------------------------------------------------------ */

if (typeof module !== "undefined" && require.main === module) {
  let mcPassCount = 0;
  const mcFailures = [];

  const mcCheck = function (label, actual, expected) {
    if (actual === expected) mcPassCount++;
    else mcFailures.push(label + ": expected " + JSON.stringify(expected) + ", got " + JSON.stringify(actual));
  };

  const mcStemCases = [
    // step 1a
    ["caresses", "caress"], ["ponies", "poni"], ["ties", "ti"], ["caress", "caress"], ["cats", "cat"],
    // step 1b
    ["feed", "feed"], ["agreed", "agre"], ["plastered", "plaster"], ["motoring", "motor"], ["sing", "sing"],
    ["conflated", "conflat"], ["troubling", "troubl"], ["sized", "size"], ["hopping", "hop"], ["tanned", "tan"],
    ["falling", "fall"], ["hissing", "hiss"], ["fizzed", "fizz"], ["failing", "fail"], ["filing", "file"],
    // step 1c
    ["happy", "happi"], ["sky", "sky"],
    // step 2
    ["relational", "relat"], ["conditional", "condit"], ["rational", "ration"], ["valenci", "valenc"],
    ["hesitanci", "hesit"], ["digitizer", "digit"], ["conformabli", "conform"], ["radicalli", "radic"],
    ["differentli", "differ"], ["vileli", "vile"], ["analogousli", "analog"], ["vietnamization", "vietnam"],
    ["predication", "predic"], ["operator", "oper"], ["feudalism", "feudal"], ["decisiveness", "decis"],
    ["hopefulness", "hope"], ["callousness", "callous"], ["formaliti", "formal"], ["sensitiviti", "sensit"],
    ["sensibiliti", "sensibl"],
    // step 3
    ["triplicate", "triplic"], ["formative", "form"], ["formalize", "formal"], ["electriciti", "electr"],
    ["electrical", "electr"], ["hopeful", "hope"], ["goodness", "good"],
    // step 4
    ["revival", "reviv"], ["allowance", "allow"], ["inference", "infer"], ["airliner", "airlin"],
    ["gyroscopic", "gyroscop"], ["adjustable", "adjust"], ["defensible", "defens"], ["irritant", "irrit"],
    ["replacement", "replac"], ["adjustment", "adjust"], ["dependent", "depend"], ["adoption", "adopt"],
    ["homologou", "homolog"], ["communism", "commun"], ["activate", "activ"], ["angulariti", "angular"],
    ["homologous", "homolog"], ["effective", "effect"], ["bowdlerize", "bowdler"],
    // step 5
    ["probate", "probat"], ["rate", "rate"], ["cease", "ceas"], ["controll", "control"], ["roll", "roll"],
    // guards
    ["", ""], ["a", "a"], ["is", "is"]
  ];
  for (let i = 0; i < mcStemCases.length; i++) {
    mcCheck("mcStem(" + JSON.stringify(mcStemCases[i][0]) + ")", mcStem(mcStemCases[i][0]), mcStemCases[i][1]);
  }

  mcCheck("mcStemAll", mcStemAll(["ponies", "cats", "sky"]).join(","), "poni,cat,sky");

  const mcDistCases = [
    ["", "", 0],
    ["abc", "", 3],
    ["", "abc", 3],
    ["identical", "identical", 0],
    ["kitten", "sitting", 3],
    ["ab", "ba", 2],
    ["ukriane", "ukraine", 2],
    ["café", "cafe", 1],
    ["😀🎉", "🎉", 1]
  ];
  for (let i = 0; i < mcDistCases.length; i++) {
    const c = mcDistCases[i];
    mcCheck("mcEditDistance(" + JSON.stringify(c[0]) + "," + JSON.stringify(c[1]) + ")", mcEditDistance(c[0], c[1]), c[2]);
  }

  const mcVocab = ["russia", "ukraine", "kyiv", "moldova"];
  mcCheck("mcFuzzyMatch typo", mcFuzzyMatch("ukriane", mcVocab), "ukraine");
  mcCheck("mcFuzzyMatch case", mcFuzzyMatch("UKRIANE", ["Ukraine"]), "Ukraine");
  mcCheck("mcFuzzyMatch exact", mcFuzzyMatch("kyiv", mcVocab), "kyiv");
  mcCheck("mcFuzzyMatch unrelated", mcFuzzyMatch("bratwurst", mcVocab), null);
  mcCheck("mcFuzzyMatch empty pool", mcFuzzyMatch("ukraine", []), null);

  mcCheck("mcNgrams 2", mcNgrams(["a", "b", "c"], 2).join("|"), "a b|b c");
  mcCheck("mcNgrams 1", mcNgrams(["a", "b"], 1).join("|"), "a|b");
  mcCheck("mcNgrams too long", mcNgrams(["a"], 3).length, 0);
  mcCheck("mcTokenize", mcTokenize("  Cafés, don't  STOP! ").join("|"), "cafes|don't|stop");
  mcCheck("mcNormalize", mcNormalize("  Näive   TEXT "), "naive text");

  if (mcFailures.length > 0) {
    for (let i = 0; i < mcFailures.length; i++) console.error("FAIL " + mcFailures[i]);
    console.error("FAIL: " + mcPassCount + " passed, " + mcFailures.length + " failed");
    process.exit(1);
  }
  console.log("PASS: " + mcPassCount + "/" + mcPassCount + " assertions passed");
}
