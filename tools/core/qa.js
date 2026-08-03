/* ============================================================================
 * mc-qa — extractive question answering over short news headlines.
 *
 * Two stages, both deterministic and inspectable:
 *   1. retrieval   — BM25 over the headline corpus
 *   2. span pick   — pull a substring whose *type* matches the question type
 *
 * No model, no dependencies. The design bias throughout is "rather say nothing
 * than say something wrong": a news answer box that invents a death toll or
 * attributes a quote to the wrong head of state does more damage than one that
 * shrugs, because a shrug costs the reader ten seconds while a plausible-looking
 * wrong answer gets screenshotted and shared. Every knob below (span-type
 * gating, focus-coverage penalty, threshold) exists to make refusal easy.
 * ========================================================================== */

/* --- BM25 constants. Standard Robertson/Sparck-Jones defaults; b=0.75 matters
   here because headlines vary 8-14 tokens and we don't want the short ones to
   automatically win. --------------------------------------------------------- */
const MC_K1 = 1.5;
const MC_B = 0.75;

/* Classic idf goes negative for terms present in more than half the corpus,
   which would make a doc score *worse* for containing a query word. Floor it. */
const MC_IDF_FLOOR = 0.05;

/* Below this normalised score we refuse. Tuned so a single-term query matching
   exactly one headline clears it comfortably, while a query whose focus noun is
   absent from the corpus does not. */
const MC_THRESHOLD = 0.35;

/* Weight of the "does this doc even cover the question's words" factor. A doc
   can win BM25 on one rare term while ignoring the rest of the question. */
const MC_COVER_FLOOR = 0.35;

/* Multiplier for a doc that lacks a span of the required type. Kept as a score
   penalty (not a hard drop) so `alternatives` still ranks sensibly, but such a
   doc can never be *returned* as the answer — see mcAnswer. */
const MC_NO_SPAN_PENALTY = 0.25;

/* Multiplier when the question's focus noun appears nowhere in the doc. Kept as
   a nudge rather than a veto: the idf-reference normalisation already punishes a
   query term the corpus has never seen, and a hard focus veto misfires whenever
   the head-noun guess is wrong (focus extraction has no parser behind it). */
const MC_NO_FOCUS_PENALTY = 0.6;

/* Question types we can act on. WHO/WHERE/WHEN/HOWMANY are "hard": they demand
   a span of a specific shape and we return null when the doc has none. */
const MC_HARD_TYPES = new Set(["WHO", "WHERE", "WHEN", "HOWMANY"]);

const MC_STOP = new Set([
  "a", "an", "the", "and", "or", "but", "if", "of", "in", "on", "at", "to", "for",
  "from", "with", "by", "as", "about", "into", "onto", "over", "under", "after",
  "before", "during", "since", "until", "than", "then", "there", "here", "so",
  "is", "are", "was", "were", "be", "been", "being", "am", "do", "does", "did",
  "done", "has", "have", "had", "will", "would", "shall", "should", "can",
  "could", "may", "might", "must", "that", "this", "these", "those", "it", "its",
  "he", "she", "him", "her", "his", "hers", "they", "them", "their", "we", "us",
  "our", "you", "your", "i", "my", "me", "who", "whom", "whose", "what", "which",
  "where", "when", "why", "how", "many", "much", "more", "most", "some", "any",
  "all", "no", "not", "yes", "there's", "it's", "s", "t",
]);

/* Question-framing verbs carry no retrieval signal — "what happened in Greece"
   is a query for "Greece", and letting "happened" contribute idf mass would
   drag the coverage score down for every doc, since no headline says "happened". */
const MC_QFRAME = new Set([
  "happen", "happens", "happened", "happening", "occur", "occurs", "occurred",
  "going", "goes", "went", "latest", "news", "update", "updates", "story",
  "tell", "know", "know's", "say", "says",
]);

/* ~130-entry gazetteer: countries, capitals, big cities, a few regions and US
   states. Deliberately small and hand-checked — a huge list would start eating
   surnames ("Jordan", "Georgia") and poison the WHO detector. Multi-word entries
   are matched as phrases; single tokens via direct lookup. */
const MC_PLACES = new Set([
  "ukraine", "russia", "greece", "france", "germany", "italy", "spain", "portugal",
  "poland", "sweden", "norway", "finland", "denmark", "netherlands", "belgium",
  "austria", "switzerland", "ireland", "iceland", "turkey", "syria", "lebanon",
  "israel", "gaza", "iran", "iraq", "egypt", "libya", "sudan", "somalia", "kenya",
  "nigeria", "ghana", "ethiopia", "morocco", "algeria", "tunisia", "china",
  "japan", "india", "pakistan", "bangladesh", "afghanistan", "vietnam",
  "thailand", "indonesia", "philippines", "malaysia", "singapore", "australia",
  "canada", "mexico", "brazil", "argentina", "chile", "colombia", "peru",
  "venezuela", "cuba", "haiti", "nepal", "myanmar", "taiwan", "qatar", "kuwait",
  "yemen", "romania", "hungary", "bulgaria", "croatia", "serbia", "slovakia",
  "slovenia", "czechia", "estonia", "latvia", "lithuania", "belarus", "moldova",
  "cyprus", "malta", "mali", "chad", "senegal", "uganda", "tanzania", "zambia",
  "zimbabwe", "angola", "mozambique", "cameroon", "rwanda",
  "united states", "united kingdom", "saudi arabia", "south africa",
  "new zealand", "south korea", "north korea", "sri lanka", "costa rica",
  "hong kong", "new york", "los angeles", "san francisco", "buenos aires",
  "cape town", "tel aviv", "las vegas", "sao paulo", "new delhi",
  "england", "scotland", "wales", "britain", "europe", "africa", "asia",
  "america", "siberia", "crimea", "donbas", "kashmir", "catalonia", "antarctica",
  "london", "paris", "berlin", "madrid", "rome", "athens", "lisbon", "dublin",
  "vienna", "prague", "warsaw", "moscow", "kyiv", "istanbul", "ankara", "beirut",
  "damascus", "baghdad", "tehran", "riyadh", "dubai", "doha", "cairo", "nairobi",
  "lagos", "johannesburg", "tokyo", "osaka", "beijing", "shanghai", "seoul",
  "delhi", "mumbai", "karachi", "dhaka", "bangkok", "jakarta", "manila",
  "sydney", "melbourne", "toronto", "vancouver", "chicago", "boston", "miami",
  "seattle", "houston", "dallas", "atlanta", "denver", "geneva", "zurich",
  "brussels", "amsterdam", "copenhagen", "stockholm", "oslo", "helsinki",
  "munich", "hamburg", "milan", "naples", "barcelona", "glasgow", "edinburgh",
  "manchester", "liverpool", "birmingham", "leeds", "bristol", "cardiff",
  "belfast", "florida", "california", "texas", "alaska", "hawaii", "nevada",
  "oregon", "arizona", "michigan", "ohio", "virginia", "colorado", "montana",
  "utah", "kansas", "iowa", "maine", "vermont", "alabama", "louisiana",
  "kentucky", "tennessee", "indiana", "illinois", "missouri", "oklahoma",
  "arkansas", "nebraska", "minnesota", "wisconsin",
]);

/* Honorifics and role words that mark a capitalised run as a person. */
const MC_TITLES = new Set([
  "president", "vice", "prime", "minister", "chancellor", "senator", "governor",
  "mayor", "dr", "doctor", "professor", "prof", "sir", "dame", "king", "queen",
  "prince", "princess", "pope", "general", "colonel", "captain", "coach", "ceo",
  "cfo", "cto", "chief", "executive", "chairman", "chairwoman", "chair",
  "director", "secretary", "judge", "justice", "officer", "mr", "mrs", "ms",
  "miss", "lord", "lady", "sheikh", "imam", "rabbi", "ambassador",
  "commissioner", "premier", "sen", "rep", "gov", "spokesman", "spokeswoman",
]);

/* Tokens that mark a capitalised run as an organisation. */
const MC_ORG_SUFFIX = new Set([
  "inc", "corp", "corporation", "ltd", "limited", "plc", "llc", "gmbh", "group",
  "holdings", "company", "co", "bank", "university", "college", "institute",
  "agency", "ministry", "department", "commission", "committee", "council",
  "association", "federation", "union", "party", "club", "fc", "united",
  "nations", "city", "airlines", "motors", "systems", "technologies", "labs",
  "laboratory", "foundation", "organisation", "organization", "authority",
  "board", "office", "service", "services", "network", "media", "press",
]);

/* Lowercase words joining parts of a name: "Bank of England", "Ministry for
   Defence". "and"/"the" are deliberately excluded — they merge two distinct
   entities ("Apple and Google") into one bogus span. */
const MC_CONNECTORS = new Set([
  "of", "for", "de", "del", "della", "da", "di", "van", "von", "der", "den",
  "bin", "al", "la", "le", "&",
]);

/* Common nouns that get capitalised only because they open a headline. Without
   this list, "Explosion at Beirut port..." answers "who" with "Explosion". */
const MC_COMMON = new Set([
  "explosion", "explosions", "blast", "fire", "fires", "wildfire", "wildfires",
  "flood", "floods", "flooding", "earthquake", "quake", "storm", "storms",
  "snow", "rain", "heavy", "hurricane", "typhoon", "drought", "heat", "cold",
  "talks", "officials", "police", "scientists", "researchers", "doctors",
  "nurses", "students", "workers", "protesters", "residents", "families",
  "troops", "forces", "rebels", "militants", "gunmen", "hundreds", "thousands",
  "millions", "dozens", "two", "three", "four", "five", "six", "seven", "eight",
  "nine", "ten", "several", "new", "more", "most", "first", "second", "third",
  "report", "reports", "study", "studies", "survey", "government", "authorities",
  "deaths", "death", "oil", "gas", "food", "water", "power", "markets", "shares",
  "stocks", "prices", "inflation", "unemployment", "crash", "attack", "strike",
  "strikes", "protest", "protests", "election", "vote", "votes", "court", "war",
  "peace", "aid", "jobs", "growth", "sales", "profits", "losses", "one", "record",
]);

const MC_MONTHS = new Set([
  "january", "february", "march", "april", "may", "june", "july", "august",
  "september", "october", "november", "december", "jan", "feb", "mar", "apr",
  "jun", "jul", "aug", "sep", "sept", "oct", "nov", "dec",
]);

const MC_DAYS = new Set([
  "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday",
  "today", "yesterday", "tomorrow", "tonight", "overnight",
]);

/* Units/magnitudes that belong to the number in front of them. "$94.9" alone is
   off by a factor of a billion, so the span has to swallow the magnitude word. */
const MC_MAGNITUDE = new Set([
  "billion", "million", "trillion", "thousand", "hundred", "percent", "percentage",
  "points", "point", "basis", "mph", "kph", "km", "kilometres", "kilometers",
  "miles", "metres", "meters", "feet", "tonnes", "tons", "degrees", "celsius",
  "fahrenheit", "people", "vehicles", "homes", "schools", "jobs", "seats",
  "cases", "deaths", "goals", "medals", "years", "days", "hours", "minutes",
  "dollars", "euros", "pounds",
]);

/* Fuzzy quantities, used only when a doc has no digits at all. */
const MC_WORD_QUANTS = new Set([
  "dozens", "hundreds", "thousands", "millions", "billions", "scores", "several",
  "handful", "few", "many", "most", "half", "double", "triple",
]);

const MC_DIRECTIONS = new Set([
  "northern", "southern", "eastern", "western", "central", "north", "south",
  "east", "west", "northeast", "northwest", "southeast", "southwest", "upper",
  "lower", "coastal", "downtown",
]);

const MC_LOCATIVE = new Set([
  "at", "in", "from", "near", "across", "outside", "inside", "toward", "towards",
  "around", "through", "into", "on", "off", "over", "along", "beside",
]);

const MC_REPORTING = new Set([
  "said", "says", "say", "told", "announced", "announces", "reported", "reports",
  "warned", "warns", "confirmed", "confirms", "denied", "denies", "claimed",
  "claims", "added", "adds", "insisted", "stated", "urged", "urges",
]);

/* --- tokenisation ---------------------------------------------------------- */

/* Numbers come first in the alternation so "$94.9" and "30,000" survive as one
   token; splitting them would make the HOWMANY span meaningless. */
function mcTokenize(text) {
  const src = typeof text === "string" ? text : "";
  const re = /\$?\d[\d,]*(?:\.\d+)?(?:-\d+)?%?|[A-Za-z][A-Za-z'’-]*/g;
  const out = [];
  let m;
  while ((m = re.exec(src)) !== null) {
    const raw = m[0];
    const isNum = /\d/.test(raw.charAt(0)) || raw.charAt(0) === "$";
    /* Sentence-initial matters: capitalisation there is grammar, not a name. */
    let sentStart = true;
    for (let i = m.index - 1; i >= 0; i--) {
      const c = src.charAt(i);
      if (c === " " || c === "\t" || c === "\n" || c === '"' || c === "'") continue;
      sentStart = c === "." || c === "!" || c === "?" || c === ":" || c === ";";
      break;
    }
    out.push({
      raw: raw,
      lo: raw.toLowerCase(),
      stem: isNum ? mcNumKey(raw) : mcStem(raw),
      start: m.index,
      end: m.index + raw.length,
      cap: /^[A-Z]/.test(raw),
      num: isNum,
      sentStart: sentStart,
    });
  }
  return out;
}

/* Strip currency/grouping so "30,000" in a doc matches "30000" in a query. */
function mcNumKey(raw) {
  return raw.toLowerCase().replace(/[$,%]/g, "");
}

/* Deliberately crude suffix stripper. It only has to be *consistent* between
   query and doc — "evacuated"/"evacuate" and "kills"/"killed" must collide.
   Stripping a trailing "e" last is what makes evacuat(e|ed) agree. */
function mcStem(word) {
  let s = String(word).toLowerCase();
  if (s.length > 4 && s.slice(-3) === "ies") s = s.slice(0, -3) + "y";
  else if (s.length > 5 && s.slice(-3) === "ing") s = s.slice(0, -3);
  else if (s.length > 3 && s.slice(-2) === "ed") s = s.slice(0, -2);
  else if (s.length > 3 && s.slice(-2) === "es" && s.slice(-3) !== "ses") s = s.slice(0, -2);
  else if (s.length > 3 && s.slice(-1) === "s" && s.slice(-2) !== "ss" && s.slice(-2) !== "us") s = s.slice(0, -1);
  if (s.length > 3 && s.slice(-1) === "e") s = s.slice(0, -1);
  return s;
}

function mcIsStop(lo) {
  return MC_STOP.has(lo) || MC_QFRAME.has(lo);
}

/* Distinct content stems of a question — the retrieval vocabulary. */
function mcTerms(question) {
  const seen = new Set();
  const out = [];
  const toks = mcTokenize(question);
  for (let i = 0; i < toks.length; i++) {
    const t = toks[i];
    if (!t.num && mcIsStop(t.lo)) continue;
    if (t.stem.length < 2 && !t.num) continue;
    if (seen.has(t.stem)) continue;
    seen.add(t.stem);
    out.push(t.stem);
  }
  return out;
}

function mcStemSet(text) {
  const s = new Set();
  const toks = mcTokenize(text);
  for (let i = 0; i < toks.length; i++) s.add(toks[i].stem);
  return s;
}

function mcDocText(doc) {
  if (typeof doc === "string") return doc;
  if (doc && typeof doc.text === "string") return doc.text;
  return "";
}

function mcClamp(x, lo, hi) {
  if (!(x === x)) return lo; // NaN guard: a NaN score would sort unpredictably
  return x < lo ? lo : x > hi ? hi : x;
}

/* --- question classification ----------------------------------------------- */

/* Returns { type, focus }. `focus` is the thing the question is *about*; it is
   the presence test that stops us answering about entities the corpus never
   mentions. Prefer the object of the last "of" ("ceo of acme" -> acme), else the
   final content word, which for headline-style questions is nearly always the
   topic ("where was the explosion" -> explosion). */
function mcQType(question) {
  const q = typeof question === "string" ? question : "";
  const norm = " " + q.toLowerCase().replace(/[^a-z0-9%$.,'’ -]/g, " ").replace(/\s+/g, " ").trim() + " ";
  const focus = mcFocus(q);

  if (!norm.trim()) return { type: "UNKNOWN", focus: "" };

  /* Ordered most-specific first: "what caused" is a WHY wearing a WHAT costume,
     and "how many" must beat the bare-"how" rule. */
  if (/\bhow (?:many|much|old|far|long|high|fast|tall|deep|big|often)\b/.test(norm)) {
    return { type: "HOWMANY", focus: focus };
  }
  if (/\b(?:what|who) (?:caused|triggered|led to)\b/.test(norm) || /\bwhy\b/.test(norm) ||
      /\bfor what reason\b/.test(norm) || /\bwhat.{0,12}\breason\b/.test(norm)) {
    return { type: "WHY", focus: focus };
  }
  if (/\b(?:who|whom|whose)\b/.test(norm)) return { type: "WHO", focus: focus };
  if (/\bwhere\b/.test(norm)) return { type: "WHERE", focus: focus };
  if (/\bwhen\b/.test(norm) || /\bwhat (?:time|date|year|day|month)\b/.test(norm) ||
      /\bwhat.{0,6}\b(?:time|date)\b/.test(norm)) {
    return { type: "WHEN", focus: focus };
  }
  if (/\bwhich\b/.test(norm)) return { type: "WHICH", focus: focus };
  if (/\b(?:what|whats|what's)\b/.test(norm)) return { type: "WHATHAPPENED", focus: focus };
  if (/^ (?:did|does|do|is|are|was|were|will|has|have|had|can|could|should|would|must|may|might)\b/.test(norm)) {
    return { type: "YESNO", focus: focus };
  }
  /* No interrogative at all — a bare keyword query. Treat it as "tell me about
     this", which is exactly WHATHAPPENED. */
  return { type: "WHATHAPPENED", focus: focus };
}

function mcFocus(question) {
  const toks = mcTokenize(question);
  if (!toks.length) return "";
  /* If the question names something capitalised, that is what it is about.
     Token 0 is skipped — every question starts capitalised regardless. */
  const mcRawWords = String(question || "").split(/\s+/);
  for (let mcI = 1; mcI < mcRawWords.length; mcI++) {
    const mcW = mcRawWords[mcI].replace(/[^A-Za-z'-]/g, "");
    if (mcW.length > 2 && mcW[0] === mcW[0].toUpperCase() && mcW[0] !== mcW[0].toLowerCase()) {
      const mcLo = mcW.toLowerCase();
      if (!mcIsStop(mcLo)) return mcLo;
    }
  }
  let lastOf = -1;
  for (let i = 0; i < toks.length - 1; i++) if (toks[i].lo === "of") lastOf = i;
  if (lastOf >= 0) {
    for (let i = toks.length - 1; i > lastOf; i--) {
      if (!mcIsStop(toks[i].lo)) return toks[i].lo;
    }
  }
  /* A trailing bare verb after an auxiliary is not what the question is about.
     "when did Serena Williams retire" was yielding focus "retire", which then
     vetoed every doc lacking that exact verb and refused a question the corpus
     plainly answered. Skip it and fall back to the next content word. */
  /* Only do-support takes a bare infinitive, so only it signals a trailing
     verb. Widening this to "was/is/has" broke "where was the explosion",
     which ends in a perfectly good noun. */
  const mcAuxRe = /^(did|does|do)$/;
  let mcSkipTail = toks.some(function (t) { return mcAuxRe.test(t.lo); }) && toks.length > 3;
  for (let i = toks.length - 1; i >= 0; i--) {
    if (toks[i].num || mcIsStop(toks[i].lo)) continue;
    if (mcSkipTail && i === toks.length - 1) { mcSkipTail = false; continue; }
    return toks[i].lo;
  }
  return "";
}

/* --- retrieval -------------------------------------------------------------- */

/* Full BM25 pass. Returns enriched records (doc, raw score, normalised score) so
   the caller can reuse the corpus statistics instead of recomputing them. */
function mcBm25Rank(question, docs, n) {
  const list = Array.isArray(docs) ? docs : [];
  const prepared = [];
  for (let i = 0; i < list.length; i++) {
    const text = mcDocText(list[i]);
    if (!text.trim()) continue; // an empty doc is evidence of nothing
    const toks = mcTokenize(text);
    const stems = [];
    for (let j = 0; j < toks.length; j++) stems.push(toks[j].stem);
    prepared.push({ doc: list[i], text: text, stems: stems, set: new Set(stems), len: stems.length });
  }
  const N = prepared.length;
  if (!N) return [];

  let total = 0;
  for (let i = 0; i < N; i++) total += prepared[i].len;
  const avgdl = total / N || 1; // all-punctuation corpus would divide by zero

  const terms = mcTerms(question);
  const idf = Object.create(null);
  let ref = 0;
  for (let i = 0; i < terms.length; i++) {
    const t = terms[i];
    let df = 0;
    for (let j = 0; j < N; j++) if (prepared[j].set.has(t)) df++;
    let v = Math.log((N - df + 0.5) / (df + 0.5));
    if (v < MC_IDF_FLOOR) v = MC_IDF_FLOOR; // negative-idf guard
    idf[t] = v;
    /* Reference score = every query term hit once in an average-length doc. This
       is what makes the normalised score comparable across queries: a term the
       corpus has never seen ("Mars") still adds its large idf to the reference,
       so no doc can reach 1.0 while ignoring it. */
    ref += v;
  }

  const out = [];
  for (let i = 0; i < N; i++) {
    const p = prepared[i];
    let s = 0;
    for (let k = 0; k < terms.length; k++) {
      const t = terms[k];
      let tf = 0;
      for (let j = 0; j < p.stems.length; j++) if (p.stems[j] === t) tf++;
      if (!tf) continue;
      s += idf[t] * (tf * (MC_K1 + 1)) / (tf + MC_K1 * (1 - MC_B + MC_B * (p.len / avgdl)));
    }
    out.push({
      doc: p.doc,
      text: p.text,
      set: p.set,
      bm25: s,
      bm25n: ref > 0 ? mcClamp(s / ref, 0, 1) : 0,
    });
  }
  out.sort(function (a, b) { return b.bm25 - a.bm25; }); // stable: ties keep corpus order
  const lim = typeof n === "number" && n > 0 ? n : out.length;
  return out.slice(0, lim);
}

function mcRetrieve(question, docs, n) {
  const ranked = mcBm25Rank(question, docs, typeof n === "number" ? n : 5);
  const out = [];
  for (let i = 0; i < ranked.length; i++) out.push(ranked[i].doc);
  return out;
}

/* --- span extraction -------------------------------------------------------- */

/* Longest gazetteer match (3 tokens, then 2, then 1) starting at token i. */
function mcPlaceAt(toks, i) {
  for (let w = 3; w >= 1; w--) {
    if (i + w > toks.length) continue;
    const parts = [];
    for (let k = i; k < i + w; k++) {
      if (toks[k].num) { parts.length = 0; break; }
      parts.push(toks[k].lo);
    }
    if (!parts.length) continue;
    if (MC_PLACES.has(parts.join(" "))) return w;
  }
  return 0;
}

function mcIsDateWord(lo) {
  return MC_DAYS.has(lo) || MC_MONTHS.has(lo);
}

/* Capitalised runs, joined across name connectors. Returns raw candidates; the
   type-specific filtering happens in mcSpanWho. */
function mcCapRuns(toks) {
  const runs = [];
  let i = 0;
  while (i < toks.length) {
    if (toks[i].cap && !toks[i].num) {
      let last = i;
      let j = i + 1;
      while (j < toks.length) {
        if (toks[j].cap && !toks[j].num) { last = j; j++; continue; }
        if (MC_CONNECTORS.has(toks[j].lo) && j + 1 < toks.length &&
            toks[j + 1].cap && !toks[j + 1].num) { j++; continue; }
        break;
      }
      runs.push({ from: i, to: last });
      i = last + 1;
    } else i++;
  }
  return runs;
}

function mcSpanWho(text, toks, qterms) {
  const runs = mcCapRuns(toks);
  let best = null;
  let bestScore = 0;
  for (let r = 0; r < runs.length; r++) {
    const run = runs[r];
    const members = [];
    for (let k = run.from; k <= run.to; k++) if (!toks[k].num) members.push(toks[k]);
    if (!members.length) continue;

    const phrase = text.slice(toks[run.from].start, toks[run.to].end);
    const words = [];
    for (let k = 0; k < members.length; k++) words.push(members[k].lo);

    /* A run that is purely a place answers WHERE, not WHO. Reject rather than
       penalise: "Beirut" is never the answer to "who did this". */
    let allPlace = true;
    for (let k = 0; k < words.length; k++) if (!MC_PLACES.has(words[k])) { allPlace = false; break; }
    if (allPlace || MC_PLACES.has(words.join(" "))) continue;

    /* Dates capitalise too ("...on Tuesday"). Never a person. */
    let allDate = true;
    for (let k = 0; k < words.length; k++) if (!mcIsDateWord(words[k])) { allDate = false; break; }
    if (allDate) continue;

    /* Headline-initial common noun: capitalisation is grammar, not a name. */
    if (members.length === 1 && members[0].sentStart &&
        (MC_COMMON.has(words[0]) || MC_STOP.has(words[0]))) continue;

    /* Echoing the question is not an answer. */
    let allInQ = true;
    for (let k = 0; k < members.length; k++) {
      if (qterms.indexOf(members[k].stem) === -1) { allInQ = false; break; }
    }
    if (allInQ) continue;

    let score = 1;
    for (let k = 0; k < words.length; k++) {
      if (MC_TITLES.has(words[k])) { score += 2; break; }
    }
    for (let k = 0; k < words.length; k++) {
      if (MC_ORG_SUFFIX.has(words[k])) { score += 1.5; break; }
    }
    if (members.length > 1) score += 1;
    /* Adjacency to a reporting verb is the strongest attribution signal we have
       without a parser: "<Name> said ..." / "... , said <Name>". */
    const before = run.from > 0 ? toks[run.from - 1].lo : "";
    const after = run.to + 1 < toks.length ? toks[run.to + 1].lo : "";
    if (MC_REPORTING.has(before) || MC_REPORTING.has(after)) score += 0.8;
    if (run.from === 0) score += 0.5; // headline subject slot
    for (let k = 0; k < members.length; k++) {
      if (qterms.indexOf(members[k].stem) !== -1) score -= 0.5;
    }

    if (score > bestScore) { bestScore = score; best = phrase; }
  }
  return best;
}

function mcSpanWhere(text, toks, qterms) {
  let best = null;
  let bestScore = -Infinity;
  for (let i = 0; i < toks.length; i++) {
    const w = mcPlaceAt(toks, i);
    if (!w) continue;
    let from = i;
    /* "northern Greece" is a better answer than "Greece" when the headline
       bothered to say northern. */
    if (i > 0 && MC_DIRECTIONS.has(toks[i - 1].lo)) from = i - 1;
    const to = i + w - 1;
    let score = 1 + (w - 1) * 0.5;
    const prep = from > 0 ? toks[from - 1].lo : "";
    if (MC_LOCATIVE.has(prep)) score += 1;
    /* Repeating a place the asker already named is weak, but still better than
       nothing, so penalise instead of rejecting. */
    for (let k = i; k <= to; k++) if (qterms.indexOf(toks[k].stem) !== -1) score -= 1.5;
    if (score > bestScore) {
      bestScore = score;
      best = text.slice(toks[from].start, toks[to].end);
    }
    i = to;
  }
  return best;
}

/* Date/time surface patterns. Bare "may" is excluded from the month-only rule —
   in headlines it is almost always the modal verb. */
const MC_DATE_PATTERNS = [
  /\b(?:january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{1,2}(?:,\s*(?:19|20)\d{2})?\b/gi,
  /\b\d{1,2}\s+(?:january|february|march|april|may|june|july|august|september|october|november|december)(?:\s+(?:19|20)\d{2})?\b/gi,
  /\b(?:last|next|this|early|late|mid)\s+(?:night|week|month|year|weekend|monday|tuesday|wednesday|thursday|friday|saturday|sunday|january|february|march|april|may|june|july|august|september|october|november|december|summer|winter|spring|autumn|fall)\b/gi,
  /\b(?:january|february|march|april|june|july|august|september|october|november|december)(?:\s+(?:19|20)\d{2})?\b/gi,
  /\b(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/gi,
  /\b(?:today|yesterday|tomorrow|tonight|overnight)\b/gi,
  /\b(?:19|20)\d{2}\b/g,
  /\b\d{1,2}(?::\d{2})?\s?(?:am|pm)\b/gi,
  /\b\d{1,2}:\d{2}\b/g,
];

function mcSpanWhen(text, toks, qterms) {
  const hits = [];
  for (let p = 0; p < MC_DATE_PATTERNS.length; p++) {
    const re = MC_DATE_PATTERNS[p];
    re.lastIndex = 0; // shared regex objects carry state; reset before every use
    let m;
    while ((m = re.exec(text)) !== null) {
      if (!m[0]) { re.lastIndex++; continue; }
      hits.push({ text: m[0], start: m.index, end: m.index + m[0].length });
    }
  }
  if (!hits.length) return null;

  /* Drop matches contained inside a longer one ("June" inside "June 3, 2024"). */
  const kept = [];
  for (let i = 0; i < hits.length; i++) {
    let covered = false;
    for (let j = 0; j < hits.length; j++) {
      if (i === j) continue;
      if (hits[j].start <= hits[i].start && hits[j].end >= hits[i].end &&
          (hits[j].end - hits[j].start) > (hits[i].end - hits[i].start)) { covered = true; break; }
    }
    if (!covered) kept.push(hits[i]);
  }

  const lowerQ = " " + String(qterms.join(" ")) + " ";
  let best = null;
  let bestScore = -Infinity;
  for (let i = 0; i < kept.length; i++) {
    const h = kept[i];
    let score = 1 + (h.end - h.start) * 0.02; // mild preference for specificity
    const pre = text.slice(Math.max(0, h.start - 12), h.start).toLowerCase();
    if (/\b(?:on|in|at|since|until|by|during|after|before)\s*$/.test(pre)) score += 1;
    if (lowerQ.indexOf(" " + mcStem(h.text.toLowerCase()) + " ") !== -1) score -= 2;
    if (score > bestScore) { bestScore = score; best = h.text; }
  }
  return best;
}

function mcSpanHowMany(text, toks, qterms) {
  let best = null;
  let bestScore = -Infinity;
  for (let i = 0; i < toks.length; i++) {
    if (!toks[i].num) continue;
    let to = i;
    /* Absorb up to two trailing unit words: "1.2 million vehicles". */
    for (let k = 0; k < 2 && to + 1 < toks.length; k++) {
      if (MC_MAGNITUDE.has(toks[to + 1].lo)) to++;
      else break;
    }
    let score = 1 + (to - i) * 0.6;
    if (toks[i].raw.charAt(0) === "$" || toks[i].raw.slice(-1) === "%") score += 0.5;
    /* Numbers sitting next to a question word are usually the asked-for one:
       "how many killed" -> "kills 12". */
    for (let k = Math.max(0, i - 3); k <= Math.min(toks.length - 1, to + 3); k++) {
      if (k >= i && k <= to) continue;
      if (qterms.indexOf(toks[k].stem) !== -1) { score += 1; break; }
    }
    if (qterms.indexOf(toks[i].stem) !== -1) score -= 2; // echoing the question
    if (score > bestScore) { bestScore = score; best = text.slice(toks[i].start, toks[to].end); }
  }
  if (best) return best;

  /* No digits: fall back to a vague quantity word, which is at least honest. */
  for (let i = 0; i < toks.length; i++) {
    if (MC_WORD_QUANTS.has(toks[i].lo) && qterms.indexOf(toks[i].stem) === -1) {
      return text.slice(toks[i].start, toks[i].end);
    }
  }
  return null;
}

/* Clause splitter used by the soft types. Dashes need surrounding spaces so we
   don't shred "3-1". */
function mcClauses(text) {
  const re = /,\s+|;\s+|:\s+|\s+[—–]+\s+|\s+-\s+|\s+(?:and|but|while|because|after|amid|following)\s+/gi;
  const out = [];
  let last = 0;
  let m;
  re.lastIndex = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push({ text: text.slice(last, m.index), start: last });
    last = m.index + m[0].length;
    if (re.lastIndex === m.index) re.lastIndex++;
  }
  if (last < text.length) out.push({ text: text.slice(last), start: last });
  if (!out.length) out.push({ text: text, start: 0 });
  return out;
}

function mcSpanClause(text, qterms) {
  const clauses = mcClauses(text);
  if (clauses.length === 1) return clauses[0].text.trim() || null;
  let best = null;
  let bestScore = -Infinity;
  for (let i = 0; i < clauses.length; i++) {
    const stems = mcStemSet(clauses[i].text);
    let hits = 0;
    for (let k = 0; k < qterms.length; k++) if (stems.has(qterms[k])) hits++;
    /* Length-normalised so a long clause can't win on volume alone. */
    const score = hits / Math.sqrt(Math.max(1, stems.size));
    if (score > bestScore) { bestScore = score; best = clauses[i].text.trim(); }
  }
  return best || null;
}

function mcSpanWhy(text, qterms) {
  const m = /\b(?:because of|because|due to|after|over|amid|following|as a result of|blamed on)\b\s+\S.*$/i.exec(text);
  if (m) return m[0].trim();
  return mcSpanClause(text, qterms);
}

/* Public span picker. Returns a substring of docText, or null when the doc has
   nothing of the required shape — the WHO case must never degrade to "here is
   the whole headline", because a headline is not a name and returning one
   pretends to an answer we do not have. */
function mcSpan(question, docText, qtype) {
  const text = typeof docText === "string" ? docText : "";
  if (!text.trim()) return null;
  const type = qtype || mcQType(question).type;
  const toks = mcTokenize(text);
  if (!toks.length) return null;
  const qterms = mcTerms(question);

  switch (type) {
    case "WHO": return mcSpanWho(text, toks, qterms);
    case "WHERE": return mcSpanWhere(text, toks, qterms);
    case "WHEN": return mcSpanWhen(text, toks, qterms);
    case "HOWMANY": return mcSpanHowMany(text, toks, qterms);
    case "WHY": return mcSpanWhy(text, qterms);
    case "WHICH": {
      /* "which club signed him" usually wants a name; fall back to a clause
         because WHICH also ranges over non-entities ("which route reopened"). */
      const who = mcSpanWho(text, toks, qterms);
      return who || mcSpanClause(text, qterms);
    }
    default: return mcSpanClause(text, qterms);
  }
}

/* --- answering -------------------------------------------------------------- */

function mcCoverage(qterms, docSet) {
  if (!qterms.length) return 0;
  let hit = 0;
  for (let i = 0; i < qterms.length; i++) if (docSet.has(qterms[i])) hit++;
  return hit / qterms.length;
}

function mcNoAnswer(reason, type) {
  return { answer: null, reason: reason, type: type, score: 0, support: null, alternatives: [] };
}

/* mcAnswer(question, docs, opts) ->
 *   { answer, support, score, type, alternatives }  on success
 *   { answer: null, reason, ... }                   on refusal
 *
 * Refusal is a first-class result, not an error path. For a news product the
 * asymmetry is stark: an admitted miss ("no headline covers that") costs the
 * reader one extra search, while a confident wrong answer — the wrong death
 * toll, the wrong city, a quote pinned to the wrong leader — is repeated as
 * fact, screenshotted, and outlives the correction. So we refuse whenever the
 * evidence is thin: no doc carries a span of the required type, or the best
 * combined score sits under the threshold.
 */
function mcAnswer(question, docs, opts) {
  const o = opts || {};
  const threshold = typeof o.threshold === "number" ? o.threshold : MC_THRESHOLD;
  const pool = typeof o.pool === "number" && o.pool > 0 ? o.pool : 8;
  const q = typeof question === "string" ? question : "";
  const qt = mcQType(q);

  if (!q.trim()) return mcNoAnswer("empty question: nothing to look up", qt.type);
  if (!Array.isArray(docs) || !docs.length) return mcNoAnswer("empty corpus: no documents to search", qt.type);

  const ranked = mcBm25Rank(q, docs, pool);
  if (!ranked.length) return mcNoAnswer("no usable documents: every candidate had empty text", qt.type);

  const qterms = mcTerms(q);
  const focusStem = qt.focus ? mcStem(qt.focus) : "";

  const scored = [];
  for (let i = 0; i < ranked.length; i++) {
    const r = ranked[i];
    const span = mcSpan(q, r.text, qt.type);
    const cover = mcCoverage(qterms, r.set);
    const focusHit = !focusStem || r.set.has(focusStem);

    let s = r.bm25n * (MC_COVER_FLOOR + (1 - MC_COVER_FLOOR) * cover);
    s *= span ? 1 : MC_NO_SPAN_PENALTY;   // wrong-shaped evidence is weak evidence
    s *= focusHit ? 1 : MC_NO_FOCUS_PENALTY; // doc never mentions what was asked about
    scored.push({ doc: r.doc, text: r.text, span: span, score: mcClamp(s, 0, 1) });
  }
  scored.sort(function (a, b) { return b.score - a.score; });

  /* Only a doc that actually yielded a span can be the answer; a higher-scoring
     doc without one stays in `alternatives` for the reader to judge. */
  let best = null;
  for (let i = 0; i < scored.length; i++) if (scored[i].span) { best = scored[i]; break; }

  if (!best) {
    return mcNoAnswer(
      "no retrieved headline contains a " + qt.type + "-type answer span" +
      (MC_HARD_TYPES.has(qt.type) ? " (refusing rather than returning an off-type guess)" : ""),
      qt.type);
  }
  if (best.score < threshold) {
    return mcNoAnswer(
      "best candidate scored " + best.score.toFixed(3) + ", below threshold " +
      threshold.toFixed(2) + (focusStem ? "; focus \"" + qt.focus + "\" is weakly supported" : ""),
      qt.type);
  }

  const alternatives = [];
  for (let i = 0; i < scored.length && alternatives.length < 3; i++) {
    if (scored[i] === best) continue;
    alternatives.push(scored[i].doc);
  }
  return {
    answer: best.span,
    support: best.doc,
    score: best.score,
    type: qt.type,
    alternatives: alternatives,
  };
}

/* ============================================================================
 * Self-test. Node-only; the guard short-circuits in a browser because `module`
 * is undefined there and `&&` never evaluates `require`.
 * ========================================================================== */
if (typeof module !== "undefined" && require.main === module) {
  const mcFixture = [
    { id: 1, text: "Explosion at Beirut port kills 12 and injures dozens on Tuesday" },
    { id: 2, text: "President Zelensky said Ukraine will hold the eastern line" },
    { id: 3, text: "Bank of England holds interest rates at 4.5% for a third meeting" },
    { id: 4, text: "Apple Inc reports $94.9 billion in quarterly revenue" },
    { id: 5, text: "Wildfires force 30,000 to evacuate across northern Greece" },
    { id: 6, text: "Manchester City beat Arsenal 3-1 at the Etihad on Sunday" },
    { id: 7, text: "Serena Williams announced her retirement from tennis in September" },
    { id: 8, text: "NASA launched the Artemis II mission from Florida on Monday" },
    { id: 9, text: "Researchers in Tokyo published a study on lithium battery safety" },
    { id: 10, text: "Hurricane Helena made landfall in Florida with 130 mph winds" },
    { id: 11, text: "Heavy snow closed 200 schools across northern Scotland on Friday" },
    { id: 12, text: "Toyota recalls 1.2 million vehicles over faulty airbags" },
    { id: 13, text: "United Nations warns of famine risk in Sudan" },
    { id: 14, text: "Scientists in Geneva confirmed a new particle at CERN last month" },
  ];

  let mcPass = 0;
  const mcFails = [];
  const mcCheck = function (name, cond, detail) {
    if (cond) { mcPass++; return; }
    mcFails.push(name + (detail === undefined ? "" : "  [got: " + JSON.stringify(detail) + "]"));
  };
  const mcSafe = function (name, fn) {
    try { const v = fn(); mcCheck(name, true); return v; }
    catch (e) { mcFails.push(name + "  [threw: " + e.message + "]"); return undefined; }
  };
  const mcHas = function (s, sub) {
    return typeof s === "string" && s.toLowerCase().indexOf(sub.toLowerCase()) !== -1;
  };

  /* --- question classification (11) --- */
  mcCheck("qtype WHO", mcQType("who said Ukraine will hold the line").type === "WHO",
    mcQType("who said Ukraine will hold the line").type);
  mcCheck("qtype WHERE", mcQType("where was the explosion").type === "WHERE",
    mcQType("where was the explosion").type);
  mcCheck("qtype WHEN", mcQType("when was the explosion").type === "WHEN",
    mcQType("when was the explosion").type);
  mcCheck("qtype HOWMANY (how many)", mcQType("how many were killed in Beirut").type === "HOWMANY",
    mcQType("how many were killed in Beirut").type);
  mcCheck("qtype HOWMANY (how much)", mcQType("how much revenue did Apple report").type === "HOWMANY",
    mcQType("how much revenue did Apple report").type);
  mcCheck("qtype WHATHAPPENED", mcQType("what happened in Greece").type === "WHATHAPPENED",
    mcQType("what happened in Greece").type);
  mcCheck("qtype WHY", mcQType("why did the bank hold rates").type === "WHY",
    mcQType("why did the bank hold rates").type);
  mcCheck("qtype WHY via 'what caused'", mcQType("what caused the explosion").type === "WHY",
    mcQType("what caused the explosion").type);
  mcCheck("qtype WHICH", mcQType("which team beat Arsenal").type === "WHICH",
    mcQType("which team beat Arsenal").type);
  mcCheck("qtype YESNO", mcQType("did Apple report record revenue").type === "YESNO",
    mcQType("did Apple report record revenue").type);
  mcCheck("qtype bare keywords -> WHATHAPPENED",
    mcQType("Beirut port explosion").type === "WHATHAPPENED",
    mcQType("Beirut port explosion").type);
  mcCheck("qtype empty -> UNKNOWN", mcQType("").type === "UNKNOWN", mcQType("").type);

  /* --- focus extraction (3) --- */
  mcCheck("focus 'of' object", mcQType("who is the ceo of acme").focus === "acme",
    mcQType("who is the ceo of acme").focus);
  mcCheck("focus head noun", mcQType("where was the explosion").focus === "explosion",
    mcQType("where was the explosion").focus);
  mcCheck("focus of Mars question", mcQType("who is the president of Mars").focus === "mars",
    mcQType("who is the president of Mars").focus);

  /* --- end-to-end answers (10) --- */
  const mcA1 = mcAnswer("who said Ukraine will hold the line", mcFixture);
  mcCheck("WHO -> Zelensky", mcHas(mcA1.answer, "Zelensky"), mcA1.answer);
  mcCheck("WHO -> support is headline 2", mcA1.support && mcA1.support.id === 2,
    mcA1.support && mcA1.support.id);
  mcCheck("WHO -> type reported", mcA1.type === "WHO", mcA1.type);

  const mcA2 = mcAnswer("where was the explosion", mcFixture);
  mcCheck("WHERE -> Beirut", mcHas(mcA2.answer, "Beirut"), mcA2.answer);

  const mcA3 = mcAnswer("when was the explosion", mcFixture);
  mcCheck("WHEN -> Tuesday", mcHas(mcA3.answer, "Tuesday"), mcA3.answer);

  const mcA4 = mcAnswer("how many were killed in Beirut", mcFixture);
  mcCheck("HOWMANY -> 12", mcHas(mcA4.answer, "12"), mcA4.answer);

  const mcA5 = mcAnswer("how much revenue did Apple report", mcFixture);
  mcCheck("HOWMANY -> 94.9", mcHas(mcA5.answer, "94.9"), mcA5.answer);

  const mcA6 = mcAnswer("how many evacuated in Greece", mcFixture);
  mcCheck("HOWMANY -> 30,000", mcHas(mcA6.answer, "30,000"), mcA6.answer);

  const mcA7 = mcAnswer("who warned about famine in Sudan", mcFixture);
  mcCheck("WHO -> United Nations", mcHas(mcA7.answer, "United Nations"), mcA7.answer);

  const mcA8 = mcAnswer("what happened in Greece", mcFixture);
  mcCheck("WHATHAPPENED -> wildfire headline supports", mcA8.support && mcA8.support.id === 5,
    mcA8.support && mcA8.support.id);
  mcCheck("WHATHAPPENED -> answer non-empty", typeof mcA8.answer === "string" && mcA8.answer.length > 0,
    mcA8.answer);

  /* --- refusal (5) --- */
  const mcR1 = mcAnswer("who is the president of Mars", mcFixture);
  mcCheck("refuses unsupported WHO", mcR1.answer === null, mcR1.answer);
  mcCheck("refusal carries a reason string",
    typeof mcR1.reason === "string" && mcR1.reason.length > 0, mcR1.reason);

  const mcNoDates = [
    { id: "a", text: "Talks between the two sides continue in the capital" },
    { id: "b", text: "Officials met to discuss the budget in a closed session" },
  ];
  const mcR2 = mcAnswer("when did the talks continue", mcNoDates);
  mcCheck("WHEN with no dates in corpus -> null", mcR2.answer === null, mcR2.answer);
  mcCheck("WHEN refusal blames the missing span", /span/i.test(String(mcR2.reason)), mcR2.reason);
  mcCheck("WHO span is null when doc has no person",
    mcSpan("who caused it", mcFixture[0].text, "WHO") === null,
    mcSpan("who caused it", mcFixture[0].text, "WHO"));

  /* --- BM25 ranking (4) --- */
  const mcT1 = mcRetrieve("Beirut port explosion", mcFixture, 3);
  mcCheck("BM25 ranks Beirut headline first", mcT1[0] && mcT1[0].id === 1, mcT1[0] && mcT1[0].id);
  const mcT2 = mcRetrieve("Apple quarterly revenue", mcFixture, 3);
  mcCheck("BM25 ranks Apple headline first", mcT2[0] && mcT2[0].id === 4, mcT2[0] && mcT2[0].id);
  const mcT3 = mcRetrieve("interest rates Bank of England", mcFixture, 3);
  mcCheck("BM25 ranks BoE headline first", mcT3[0] && mcT3[0].id === 3, mcT3[0] && mcT3[0].id);
  mcCheck("mcRetrieve honours n", mcRetrieve("Florida", mcFixture, 2).length === 2,
    mcRetrieve("Florida", mcFixture, 2).length);

  /* --- robustness (6) --- */
  const mcE1 = mcSafe("empty question does not throw", function () { return mcAnswer("", mcFixture); });
  mcCheck("empty question refuses", mcE1 && mcE1.answer === null, mcE1 && mcE1.answer);
  const mcE2 = mcSafe("empty docs does not throw", function () { return mcAnswer("where was the explosion", []); });
  mcCheck("empty docs refuses", mcE2 && mcE2.answer === null, mcE2 && mcE2.answer);
  mcSafe("empty-text docs do not throw", function () {
    return mcAnswer("where was the explosion", [{ id: "x", text: "" }, { id: "y", text: "   " }]);
  });
  mcSafe("null/garbage docs do not throw", function () {
    return mcAnswer("who did it", [null, undefined, { id: 1 }, "Toyota recalls cars", 42]);
  });
  mcCheck("mcSpan on empty text -> null", mcSpan("who", "", "WHO") === null);

  /* --- score & alternatives contract (3) --- */
  mcCheck("score normalised into [0,1]", mcA1.score >= 0 && mcA1.score <= 1, mcA1.score);
  mcCheck("alternatives capped at 3", Array.isArray(mcA1.alternatives) && mcA1.alternatives.length <= 3,
    mcA1.alternatives && mcA1.alternatives.length);
  mcCheck("alternatives exclude the winner",
    mcA1.alternatives.indexOf(mcA1.support) === -1);

  /* --- span-type gating (2) --- */
  mcCheck("WHEN question loses against a date-free doc",
    mcSpan("when did Toyota recall cars", mcFixture[11].text, "WHEN") === null,
    mcSpan("when did Toyota recall cars", mcFixture[11].text, "WHEN"));
  mcCheck("WHY span picks the causal clause",
    mcHas(mcSpan("why did Toyota recall vehicles", mcFixture[11].text, "WHY"), "faulty airbags"),
    mcSpan("why did Toyota recall vehicles", mcFixture[11].text, "WHY"));

  const mcTotal = mcPass + mcFails.length;
  for (let i = 0; i < mcFails.length; i++) console.log("FAIL  " + mcFails[i]);
  console.log("\n" + (mcFails.length ? "FAIL" : "PASS") + ": " + mcPass + "/" + mcTotal + " assertions passed");
  if (mcFails.length) process.exit(1);
}
