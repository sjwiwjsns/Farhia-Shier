// ---------------------------------------------------------------------------
// Rule-based named entity recognition for news headlines.
// No model, no training data: orthography + gazetteers + a handful of hard-won
// heuristics about how headlines are actually written.
//
// The whole design exists to fight two headline-specific problems:
//   (a) headlines are often Title Case, so "is this capitalised?" carries much
//       less signal than it does in body text;
//   (b) the first word is always capitalised, so position 0 is orthographic
//       noise, not evidence.
// Everything below is downstream of those two facts.
//
// Plain script scope on purpose: this file is pasted into a single-file HTML
// app, so no modules, no IIFE, no strict-mode pragma. ES2020, zero deps.
// ---------------------------------------------------------------------------

// Lowercase words allowed *inside* a capitalised run when flanked by capitals.
// "Bank of England" and "Department of Justice" must survive as one span; the
// price is that "South Korea and North Korea" also merges into one run, which
// the gazetteer pass later splits back apart (see mcNerScanRun).
const mcNerConn = new Set([
  "of", "the", "and", "for", "de", "del", "della", "da", "di", "du",
  "van", "von", "der", "den", "bin", "al", "y", "&", "am", "auf"
]);

// The subset of connectors that can never sit inside a personal name. Splitting
// a name candidate on these keeps "Trump and Biden" from becoming one PERSON,
// while leaving the nobiliary/patronymic particles ("bin", "van", "de") glued
// so "Mohammed bin Zayed" and "Ursula von der Leyen" stay intact.
const mcNerNameBreak = new Set(["and", "&", "of", "the", "for"]);

// A run ending in one of these is an organisation, near-certainly. These are
// legal/institutional heads — they are never surnames, so they are the single
// cheapest high-precision signal available.
const mcNerOrgCue = new Set([
  "inc", "corp", "corporation", "co", "ltd", "limited", "llc", "plc", "ag",
  "sa", "nv", "gmbh", "group", "holdings", "holding", "bank", "airlines",
  "airways", "motors", "systems", "labs", "laboratories", "university",
  "college", "institute", "ministry", "agency", "commission", "committee",
  "council", "court", "department", "association", "federation", "union",
  "party", "foundation", "society", "authority", "bureau", "board", "office",
  "fund", "trust", "partners", "capital", "technologies", "industries",
  "pharmaceuticals", "media", "networks", "network", "studios", "energy",
  "telecom", "bancorp", "insurance", "league", "club", "academy", "alliance",
  "organization", "organisation", "consortium", "cooperative", "guild"
]);

// Titles. Multi-word entries are matched longest-first so "Prime Minister"
// never degrades into ROLE "Prime" + PERSON "Minister Modi".
const mcNerRole = new Set([
  "prime minister", "deputy prime minister", "vice president", "foreign minister",
  "defence minister", "defense minister", "finance minister", "interior minister",
  "health minister", "chief executive officer", "chief executive", "chief justice",
  "attorney general", "secretary of state", "secretary general",
  "un secretary general", "national security adviser", "supreme leader",
  "crown prince", "first lady", "police chief", "chief of staff",
  "president", "senator", "governor", "minister", "chancellor", "ceo", "cfo",
  "cto", "coo", "chief", "judge", "dr", "sir", "dame", "sheikh", "king",
  "queen", "prince", "princess", "pope", "general", "colonel", "captain",
  "admiral", "lieutenant", "sergeant", "ambassador", "secretary", "mayor",
  "rep", "sen", "gov", "premier", "emir", "sultan", "archbishop", "cardinal",
  "bishop", "imam", "rabbi", "chairman", "chairwoman", "chairperson",
  "commissioner", "speaker", "envoy", "spokesman", "spokeswoman", "coach",
  "professor", "prof", "mr", "mrs", "ms", "lord", "baron", "duke", "duchess"
]);
const mcNerRoleMax = 4;

// Verbs that attribute speech. A capitalised run immediately followed by one of
// these is overwhelmingly a person (or an org acting as a speaker), so it is a
// clean confidence booster rather than a standalone trigger.
const mcNerSayVerb = new Set([
  "said", "says", "told", "tells", "added", "adds", "warned", "warns",
  "announced", "announces", "denied", "denies", "claimed", "claims",
  "insisted", "insists", "argued", "argues", "confirmed", "confirms",
  "declared", "declares", "urged", "urges", "wrote", "writes"
]);

// THE FIRST-WORD TRAP, part one.
// A headline's first token is capitalised because it starts a sentence, not
// because it names anything. Left unguarded this is by far the largest source
// of false PERSON/ORG hits — "Explosion rocks Beirut" yields PERSON "Explosion",
// "Markets slide" yields PERSON "Markets", and so on for every headline ever
// written. Two defences: (1) an outright reject list of words that are common
// headline verbs/nouns, applied at any position because Title Case headlines
// capitalise them mid-string too; (2) a confidence penalty for spans anchored
// at token 0 (applied in mcNerFlushPerson).
const mcNerStop = new Set([
  // function words that can head a run in Title Case
  "the", "a", "an", "and", "or", "but", "of", "in", "on", "at", "to", "for",
  "with", "from", "by", "as", "is", "are", "was", "were", "be", "been", "not",
  "no", "new", "old", "top", "best", "worst", "more", "most", "how", "why",
  "what", "when", "where", "who", "which", "after", "before", "amid", "over",
  "under", "into", "out", "up", "down", "off", "than", "then", "this", "that",
  // headline nouns
  "explosion", "blast", "fire", "flood", "storm", "quake", "earthquake",
  "strike", "strikes", "attack", "attacks", "crash", "police", "protest",
  "protests", "report", "reports", "study", "deal", "talks", "markets",
  "market", "stocks", "shares", "oil", "gold", "death", "deaths", "war",
  "peace", "vote", "votes", "election", "poll", "polls", "budget", "rates",
  "rate", "prices", "price", "profit", "profits", "losses", "loss", "jobs",
  "growth", "inflation", "economy", "record", "crisis", "chaos", "row",
  "probe", "inquiry", "trial", "verdict", "ruling", "plan", "plans", "bill",
  "law", "laws", "ban", "curbs", "sanctions", "troops", "forces", "rebels",
  "militants", "hostages", "victims", "survivors", "residents", "workers",
  "students", "officials", "leaders", "experts", "analysts", "sources",
  "breaking", "exclusive", "update", "live", "video", "photos", "opinion",
  "editorial", "review", "analysis", "latest", "watch", "recap", "dozens",
  "hundreds", "thousands", "millions", "scores", "half", "two", "three",
  // headline verbs (third person singular dominates)
  "says", "said", "wins", "loses", "hits", "slams", "urges", "warns", "calls",
  "sets", "seeks", "faces", "backs", "bans", "blames", "boosts", "cuts",
  "drops", "ends", "eyes", "fears", "files", "finds", "gets", "gives",
  "halts", "holds", "keeps", "kills", "lands", "leads", "lifts", "makes",
  "meets", "moves", "names", "opens", "picks", "plots", "posts", "pulls",
  "pushes", "quits", "raises", "rejects", "rules", "sees", "sells", "sends",
  "shows", "signs", "sinks", "slides", "soars", "spurs", "stalls", "starts",
  "stops", "takes", "tells", "tops", "turns", "vows", "wants", "weighs",
  "rocks", "hikes", "surges", "slumps", "jumps", "climbs", "falls", "rises",
  "adds", "denies", "unveils", "launches", "resumes", "delays", "extends"
]);

// Months and weekdays are capitalised but are DATEs, never names.
const mcNerCal = new Set([
  "january", "february", "march", "april", "may", "june", "july", "august",
  "september", "october", "november", "december", "jan", "feb", "mar", "apr",
  "jun", "jul", "aug", "sep", "sept", "oct", "nov", "dec",
  "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"
]);

// Place gazetteer: countries, capitals, major cities, US states, regions and
// current conflict zones. Keys are normalised (lowercase, dots stripped) at
// build time so "U.S." and "US" collapse to the same entry.
const mcNerGazList = [
  // --- countries -----------------------------------------------------------
  "Afghanistan", "Albania", "Algeria", "Angola", "Argentina", "Armenia",
  "Australia", "Austria", "Azerbaijan", "Bahrain", "Bangladesh", "Belarus",
  "Belgium", "Bolivia", "Bosnia", "Bosnia and Herzegovina", "Botswana",
  "Brazil", "Bulgaria", "Burkina Faso", "Cambodia", "Cameroon", "Canada",
  "Chad", "Chile", "China", "Colombia", "Congo", "Costa Rica", "Croatia",
  "Cuba", "Cyprus", "Czech Republic", "Czechia", "Denmark",
  "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Estonia",
  "Eswatini", "Ethiopia", "Finland", "France", "Gabon", "Georgia", "Germany",
  "Ghana", "Greece", "Guatemala", "Guinea", "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
  "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
  "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Liberia",
  "Libya", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
  "Mali", "Malta", "Mauritania", "Mexico", "Moldova", "Mongolia",
  "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
  "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palestine",
  "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
  "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saudi Arabia",
  "Senegal", "Serbia", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
  "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
  "Sri Lanka", "Sudan", "Sweden", "Switzerland", "Syria", "Taiwan",
  "Tajikistan", "Tanzania", "Thailand", "Trinidad and Tobago", "Tunisia",
  "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates",
  "United Kingdom", "United States", "United States of America", "Uruguay",
  "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
  // --- country short forms -------------------------------------------------
  "US", "USA", "U.S.", "U.S.A.", "UK", "U.K.", "UAE", "Britain",
  "Great Britain", "England", "Scotland", "Wales", "Northern Ireland",
  "Holland", "Korea", "Macedonia",
  // --- capitals and major cities ------------------------------------------
  "Kyiv", "Kiev", "Moscow", "St Petersburg", "Beijing", "Shanghai",
  "Hong Kong", "Tokyo", "Osaka", "Seoul", "Pyongyang", "Delhi", "New Delhi",
  "Mumbai", "Bengaluru", "Kolkata", "Islamabad", "Karachi", "Lahore", "Dhaka",
  "Bangkok", "Hanoi", "Jakarta", "Manila", "Kuala Lumpur", "Canberra",
  "Sydney", "Melbourne", "Wellington", "Auckland", "London", "Manchester",
  "Birmingham", "Glasgow", "Edinburgh", "Belfast", "Dublin", "Paris",
  "Marseille", "Lyon", "Berlin", "Munich", "Frankfurt", "Hamburg", "Rome",
  "Milan", "Naples", "Madrid", "Barcelona", "Lisbon", "Amsterdam",
  "Rotterdam", "Brussels", "Vienna", "Zurich", "Geneva", "Bern", "Stockholm",
  "Oslo", "Copenhagen", "Helsinki", "Warsaw", "Prague", "Budapest",
  "Bucharest", "Sofia", "Athens", "Ankara", "Istanbul", "Tehran", "Baghdad",
  "Basra", "Damascus", "Aleppo", "Idlib", "Beirut", "Amman", "Jerusalem",
  "Tel Aviv", "Gaza", "Gaza City", "Rafah", "Khan Younis", "Ramallah",
  "Cairo", "Alexandria", "Tripoli", "Benghazi", "Khartoum", "Addis Ababa",
  "Nairobi", "Mogadishu", "Kampala", "Kinshasa", "Lagos", "Abuja", "Accra",
  "Dakar", "Algiers", "Tunis", "Rabat", "Casablanca", "Johannesburg",
  "Cape Town", "Pretoria", "Riyadh", "Jeddah", "Doha", "Dubai", "Abu Dhabi",
  "Kabul", "Kandahar", "Tashkent", "Astana", "Almaty", "Tbilisi", "Yerevan",
  "Baku", "Minsk", "Vilnius", "Riga", "Tallinn", "Kharkiv", "Odesa",
  "Odessa", "Lviv", "Mariupol", "Bakhmut", "Sevastopol", "Ottawa", "Toronto",
  "Montreal", "Vancouver", "Mexico City", "Havana", "Caracas", "Bogota",
  "Lima", "Santiago", "Buenos Aires", "Brasilia", "Sao Paulo",
  "Rio de Janeiro",
  // --- US cities and landmarks --------------------------------------------
  "Washington", "Washington DC", "New York", "New York City", "Los Angeles",
  "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego",
  "Dallas", "Austin", "San Francisco", "Seattle", "Denver", "Boston",
  "Detroit", "Atlanta", "Miami", "Las Vegas", "Portland", "New Orleans",
  "Baltimore", "Minneapolis", "Cleveland", "Pittsburgh", "Silicon Valley",
  "Wall Street", "Capitol Hill",
  // --- US states -----------------------------------------------------------
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Hawaii", "Idaho", "Illinois",
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
  "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
  "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "West Virginia",
  "Wisconsin", "Wyoming",
  // --- conflict regions and disputed territories ---------------------------
  "Gaza Strip", "West Bank", "Golan Heights", "Sinai", "Donbas", "Donetsk",
  "Luhansk", "Zaporizhzhia", "Kherson", "Crimea", "Kashmir",
  "Nagorno-Karabakh", "Tigray", "Darfur", "Sahel", "Xinjiang", "Tibet",
  "Kurdistan", "Rakhine", "Chechnya", "Transnistria", "Abkhazia",
  "Taiwan Strait", "South China Sea", "Red Sea", "Strait of Hormuz",
  // --- macro regions -------------------------------------------------------
  "Europe", "Asia", "Africa", "Middle East", "Latin America", "North America",
  "South America", "Caribbean", "Balkans", "Scandinavia", "Horn of Africa",
  "Arctic", "Antarctica", "Mediterranean", "Persian Gulf", "Baltic",
  "Central Asia", "Southeast Asia", "Eurasia", "Amazon", "Himalayas"
];

// Normalised lookup set + the longest key length, so the matcher knows how wide
// a window to try. Longest match wins: "South Korea" must never split, and
// "New York" must beat "York".
const mcNerGaz = new Set();
let mcNerGazMax = 1;
for (const mcNerGazEntry of mcNerGazList) {
  const mcNerGazKey = mcNerNorm(mcNerGazEntry);
  mcNerGaz.add(mcNerGazKey);
  const mcNerGazLen = mcNerGazKey.split(" ").length;
  if (mcNerGazLen > mcNerGazMax) mcNerGazMax = mcNerGazLen;
}

// Currency, quantity and date surface patterns. Kept as source strings so the
// alternation order (longest first) is visible and auditable.
const mcNerMoneyRx = new RegExp(
  "(?:[$€£¥₹]|\\b(?:USD|EUR|GBP|JPY|CHF|CAD|AUD|INR|CNY|RMB)\\b)" +
  "\\s?\\d[\\d,]*(?:\\.\\d+)?" +
  "(?:\\s?(?:trillion|billion|million|thousand|bln|bn|mn|tn|k|m|b)\\b)?" +
  "|\\b\\d[\\d,]*(?:\\.\\d+)?" +
  "(?:\\s?(?:trillion|billion|million|thousand|bn|mn|tn|k))?" +
  "\\s?(?:dollars|euros|pounds|yen|rupees|USD|EUR|GBP)\\b",
  "gi"
);

const mcNerNumRx = new RegExp(
  "\\b(?:dozens|dozen|scores|hundreds|thousands|millions|billions)\\b" +
  "|\\b\\d[\\d,]*(?:\\.\\d+)?" +
  "(?:\\s?(?:trillion|billion|million|thousand|hundred|bn|mn|tn|k))?\\b",
  "gi"
);

const mcNerMonth =
  "Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?" +
  "|Aug(?:ust)?|Sep(?:t|tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?";
// "May", "March" and "August" are also a modal, a verb and an adjective, so a
// bare occurrence is not enough — they only count as DATE with a day or year.
const mcNerMonthSafe =
  "January|February|April|June|July|September|October|November|December";
const mcNerWeekday =
  "Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday";

const mcNerDateRx = new RegExp([
  "\\b\\d{4}-\\d{2}-\\d{2}\\b",
  "\\b\\d{1,2}/\\d{1,2}/\\d{2,4}\\b",
  "\\bQ[1-4]\\s+\\d{4}\\b",
  "\\bQ[1-4]\\b",
  "\\b(?:" + mcNerMonth + ")\\s+\\d{1,2}(?:st|nd|rd|th)?(?:,?\\s+\\d{4})?\\b",
  "\\b\\d{1,2}(?:st|nd|rd|th)?\\s+(?:" + mcNerMonth + ")(?:,?\\s+\\d{4})?\\b",
  "\\b(?:" + mcNerMonthSafe + ")\\b",
  "\\b(?:this|last|next|late|early)\\s+(?:week|month|year|quarter|weekend|night|morning|evening|" +
    mcNerWeekday + "|" + mcNerMonth + ")\\b",
  "\\b(?:" + mcNerWeekday + ")\\b",
  "\\b(?:today|yesterday|tomorrow|tonight|overnight)\\b"
].join("|"), "gi");

// Ordering used only to break exact ties in overlap resolution: a span that is
// both a plausible MONEY and a plausible NUMBER should surface as MONEY.
const mcNerRank = {
  MONEY: 6, PLACE: 5, ORG: 4, PERSON: 3, DATE: 2, ROLE: 1, NUMBER: 0
};

// --- helpers ---------------------------------------------------------------

// Canonical key: lowercase, dots dropped, whitespace collapsed. Dropping dots
// is what makes "U.S." and "US" the same gazetteer entry.
function mcNerNorm(s) {
  return String(s).toLowerCase().replace(/[.’']/g, "").replace(/\s+/g, " ").trim();
}

function mcNerClamp(x) {
  if (!(x > 0)) return 0;
  return x > 1 ? 1 : Math.round(x * 100) / 100;
}

// Words and numbers with offsets. Tokens must both start and end on a letter,
// so trailing punctuation ("Inc.", "Beirut,") never leaks into a span, while
// internal dots, hyphens, ampersands and apostrophes are kept ("U.S", "AT&T",
// "Trump-Putin", "Zelensky's").
function mcNerTokenize(text) {
  const rx = /[A-Za-z](?:[A-Za-z.&'’-]*[A-Za-z])?|\d[\d,]*(?:\.\d+)?|&/g;
  const toks = [];
  let m;
  while ((m = rx.exec(text)) !== null) {
    const raw = m[0];
    const poss = /['’]s$/.test(raw);
    const core = poss ? raw.slice(0, -2) : raw;
    toks.push({
      raw: raw,
      core: core,
      key: mcNerNorm(core),
      start: m.index,
      end: m.index + (poss ? raw.length - 2 : raw.length),
      poss: poss,
      cap: /^[A-Z]/.test(raw),
      allCaps: raw.length > 1 && raw === raw.toUpperCase() && /[A-Z]/.test(raw),
      idx: toks.length
    });
  }
  return toks;
}

// Two tokens belong to the same run only if nothing but whitespace separates
// them. A comma, dash or colon ends the run — otherwise "Ukraine, Russia meet"
// fuses into one bogus entity.
function mcNerAdjacent(text, a, b) {
  return /^\s*$/.test(text.slice(a.end, b.start));
}

// ALL-CAPS HEADLINES.
// When a wire desk shouts ("MARKETS SLIDE AS FED HOLDS RATES") every token is
// capitalised, so capitalisation carries exactly zero information — the run
// detector would happily return the entire headline as one PERSON. Above a 60%
// all-caps ratio we therefore stop trusting orthography completely and emit
// only lexically-grounded hits (gazetteer places, known titles, explicit org
// cues, and the regex types), with confidence discounted because we have lost
// our main disambiguating signal.
function mcNerIsShouty(toks) {
  let words = 0;
  let shouty = 0;
  for (const t of toks) {
    if (!/[A-Za-z]/.test(t.raw)) continue;
    words++;
    if (t.allCaps) shouty++;
  }
  return words >= 3 && shouty / words > 0.6;
}

// Maximal runs of capitalised tokens, hopping over connectors that are flanked
// by capitals on both sides. Returns arrays of token indices.
function mcNerRuns(text, toks) {
  const runs = [];
  let cur = [];
  const flush = function () {
    while (cur.length && mcNerConn.has(toks[cur[cur.length - 1]].key)) cur.pop();
    if (cur.length) runs.push(cur);
    cur = [];
  };
  for (let i = 0; i < toks.length; i++) {
    const t = toks[i];
    if (cur.length && !mcNerAdjacent(text, toks[i - 1], t)) flush();
    if (t.cap && /[A-Za-z]/.test(t.raw)) {
      cur.push(i);
    } else if (
      cur.length && mcNerConn.has(t.key) && i + 1 < toks.length &&
      toks[i + 1].cap && mcNerAdjacent(text, t, toks[i + 1])
    ) {
      cur.push(i); // connector kept only because a capital follows it
    } else {
      flush();
    }
  }
  flush();
  return runs;
}

function mcNerSpan(text, toks, from, to) {
  return { start: toks[from].start, end: toks[to].end };
}

function mcNerPush(out, text, toks, from, to, type, conf) {
  const s = mcNerSpan(text, toks, from, to);
  out.push({
    text: text.slice(s.start, s.end),
    type: type,
    start: s.start,
    end: s.end,
    conf: mcNerClamp(conf)
  });
}

// Longest gazetteer match starting at run position p. Returns match length in
// tokens, or 0.
function mcNerGazAt(toks, run, p) {
  const room = Math.min(mcNerGazMax, run.length - p);
  for (let n = room; n >= 1; n--) {
    const parts = [];
    for (let k = 0; k < n; k++) parts.push(toks[run[p + k]].key);
    if (mcNerGaz.has(parts.join(" "))) return n;
  }
  return 0;
}

function mcNerRoleAt(toks, run, p) {
  const room = Math.min(mcNerRoleMax, run.length - p);
  for (let n = room; n >= 1; n--) {
    const parts = [];
    for (let k = 0; k < n; k++) parts.push(toks[run[p + k]].key);
    if (mcNerRole.has(parts.join(" "))) return n;
  }
  return 0;
}

// --- extractors ------------------------------------------------------------

function mcNerScanMoney(text, out) {
  mcNerMoneyRx.lastIndex = 0;
  let m;
  while ((m = mcNerMoneyRx.exec(text)) !== null) {
    if (!m[0].trim()) { mcNerMoneyRx.lastIndex++; continue; }
    out.push({
      text: m[0], type: "MONEY", start: m.index,
      end: m.index + m[0].length, conf: 0.95
    });
  }
}

// Numbers already covered by a MONEY span are suppressed here rather than left
// to overlap resolution, so "$94.9 billion" never also reports NUMBER "94.9".
function mcNerScanNumber(text, out, money) {
  mcNerNumRx.lastIndex = 0;
  let m;
  while ((m = mcNerNumRx.exec(text)) !== null) {
    const s = m.index;
    const e = s + m[0].length;
    let inside = false;
    for (const mo of money) {
      if (s < mo.end && mo.start < e) { inside = true; break; }
    }
    if (inside) continue;
    out.push({ text: m[0], type: "NUMBER", start: s, end: e, conf: 0.7 });
  }
}

function mcNerScanDate(text, out) {
  mcNerDateRx.lastIndex = 0;
  let m;
  while ((m = mcNerDateRx.exec(text)) !== null) {
    out.push({
      text: m[0], type: "DATE", start: m.index,
      end: m.index + m[0].length, conf: 0.85
    });
  }
}

// Decide whether a buffer of leftover capitalised tokens is a person name.
// `primed` means a ROLE title sat immediately in front of it, which is the one
// piece of evidence strong enough to carry a single-token name on its own.
function mcNerFlushPerson(out, text, toks, run, buf, primed, shouty, damp) {
  if (shouty || !buf.length) return;

  // Split on coordinating connectors only: "Trump and Biden" is two people,
  // but "Mohammed bin Zayed" is one.
  const parts = [];
  let cur = [];
  for (const p of buf) {
    if (mcNerNameBreak.has(toks[run[p]].key)) {
      if (cur.length) parts.push(cur);
      cur = [];
    } else {
      cur.push(p);
    }
  }
  if (cur.length) parts.push(cur);

  for (let i = 0; i < parts.length; i++) {
    const seg = parts[i];
    const primedHere = primed && i === 0;
    const first = toks[run[seg[0]]];
    const last = toks[run[seg[seg.length - 1]]];

    // Reject anything containing a calendar word or a stock headline word.
    // Without the ROLE anchor this list is doing most of the precision work.
    let dirty = false;
    for (const p of seg) {
      const k = toks[run[p]].key;
      if (mcNerCal.has(k) || (!primedHere && mcNerStop.has(k))) dirty = true;
      if (mcNerOrgCue.has(k)) dirty = true;
    }
    if (dirty) continue;
    if (seg.length > 4) continue; // runaway Title Case, not a name

    const after = toks[last.idx + 1];
    const saysNext = !!(after && mcNerSayVerb.has(after.key));
    let conf;

    if (primedHere) {
      conf = seg.length >= 2 ? 0.92 : 0.88;
    } else if (seg.length >= 2) {
      conf = 0.6; // two capitalised tokens, no gazetteer, no org suffix
    } else if (last.poss || saysNext) {
      conf = 0.5; // a lone name needs its own evidence
    } else {
      continue;
    }

    if (last.poss) conf += 0.12;
    if (saysNext) conf += 0.12;

    // THE FIRST-WORD TRAP, part two: a span anchored at token 0 has one fewer
    // piece of evidence than the same span mid-headline, because its capital
    // is forced by sentence position. Downweight rather than reject, so
    // "Zelensky said..." still lands while "Explosion rocks..." (already killed
    // by the stop list above) cannot.
    if (first.idx === 0 && !primedHere) conf -= 0.2;

    if (conf < 0.35) continue;
    if (conf > 0.88) conf = 0.88; // never outrank a gazetteer PLACE
    mcNerPush(out, text, toks, run[seg[0]], run[seg[seg.length - 1]], "PERSON", conf * damp);
  }
}

function mcNerScanRun(text, toks, run, shouty, out) {
  const damp = shouty ? 0.7 : 1;
  const keys = run.map(function (i) { return toks[i].key; });

  // Whole-run gazetteer hit short-circuits everything. Without this, "West
  // Bank" is stolen by the ORG suffix rule below because "Bank" is an org cue;
  // a known toponym must always win over a keyword that merely looks corporate.
  if (mcNerGaz.has(keys.join(" "))) {
    mcNerPush(out, text, toks, run[0], run[run.length - 1], "PLACE", 0.92 * damp);
    return;
  }

  // ORG rule 1 — the run ends in a legal/institutional head ("Apple Inc",
  // "Goldman Sachs Group"). Needs at least one token in front of the cue.
  if (run.length >= 2 && mcNerOrgCue.has(keys[keys.length - 1])) {
    mcNerPush(out, text, toks, run[0], run[run.length - 1], "ORG", 0.9 * damp);
    return;
  }

  // ORG rule 2 — the "X of Y" institution frame: "Bank of England",
  // "Department of Justice", "University of Chicago". This must run BEFORE the
  // gazetteer, otherwise "England" is claimed as a PLACE and the org is
  // shredded into "Bank of" + PLACE.
  for (let i = 0; i + 2 < run.length; i++) {
    const nxt = keys[i + 1];
    if (mcNerOrgCue.has(keys[i]) && (nxt === "of" || nxt === "for")) {
      mcNerPush(out, text, toks, run[0], run[run.length - 1], "ORG", 0.9 * damp);
      return;
    }
  }

  // Left-to-right walk: gazetteer first (rule 6 — a gazetteer hit outranks the
  // person heuristic), then titles, then whatever is left is a name candidate.
  let buf = [];
  let primed = false;
  let p = 0;
  while (p < run.length) {
    const g = mcNerGazAt(toks, run, p);
    if (g) {
      mcNerFlushPerson(out, text, toks, run, buf, primed, shouty, damp);
      buf = [];
      primed = false;
      mcNerPush(out, text, toks, run[p], run[p + g - 1], "PLACE", 0.92 * damp);
      p += g;
      continue;
    }
    const r = mcNerRoleAt(toks, run, p);
    if (r) {
      mcNerFlushPerson(out, text, toks, run, buf, primed, shouty, damp);
      buf = [];
      mcNerPush(out, text, toks, run[p], run[p + r - 1], "ROLE", 0.9 * damp);
      primed = true; // the next name segment is a person, high confidence
      p += r;
      continue;
    }
    buf.push(p);
    p++;
  }
  mcNerFlushPerson(out, text, toks, run, buf, primed, shouty, damp);
}

// Longest span wins; ties go to the higher confidence, then to the type rank.
// Greedy acceptance over that ordering guarantees the output never overlaps.
function mcNerResolve(cands) {
  cands.sort(function (a, b) {
    return (b.end - b.start) - (a.end - a.start) ||
      b.conf - a.conf ||
      mcNerRank[b.type] - mcNerRank[a.type] ||
      a.start - b.start;
  });
  const kept = [];
  for (const c of cands) {
    let clash = false;
    for (const k of kept) {
      if (c.start < k.end && k.start < c.end) { clash = true; break; }
    }
    if (!clash) kept.push(c);
  }
  kept.sort(function (a, b) { return a.start - b.start || a.end - b.end; });
  return kept;
}

// --- public API ------------------------------------------------------------

function mcEntities(text) {
  if (typeof text !== "string" || !text.trim()) return [];
  const toks = mcNerTokenize(text);
  if (!toks.length) return [];

  const shouty = mcNerIsShouty(toks);
  const money = [];
  mcNerScanMoney(text, money);

  const cands = money.slice();
  mcNerScanNumber(text, cands, money);
  mcNerScanDate(text, cands);

  const runs = mcNerRuns(text, toks);
  for (const run of runs) mcNerScanRun(text, toks, run, shouty, cands);

  return mcNerResolve(cands).map(function (e) {
    return {
      text: e.text, type: e.type, start: e.start, end: e.end,
      conf: mcNerClamp(e.conf)
    };
  });
}

// Leaderboard across a corpus of headlines. Surface forms are folded on a
// normalised key so "Zelensky's" and "Zelensky" count once, but the most
// frequent original spelling is what gets reported back.
function mcEntityCounts(texts) {
  const want = ["PERSON", "ORG", "PLACE"];
  const tally = {};
  for (const t of want) tally[t] = new Map();
  const list = Array.isArray(texts) ? texts : [texts];

  for (const raw of list) {
    for (const e of mcEntities(raw)) {
      if (!tally[e.type]) continue;
      const key = mcNerNorm(e.text);
      if (!key) continue;
      const bucket = tally[e.type];
      const hit = bucket.get(key) || { n: 0, forms: new Map() };
      hit.n++;
      hit.forms.set(e.text, (hit.forms.get(e.text) || 0) + 1);
      bucket.set(key, hit);
    }
  }

  const out = {};
  for (const t of want) {
    const rows = [];
    tally[t].forEach(function (hit) {
      let best = null;
      let bestN = -1;
      hit.forms.forEach(function (n, form) {
        if (n > bestN) { bestN = n; best = form; }
      });
      rows.push([best, hit.n]);
    });
    rows.sort(function (a, b) { return b[1] - a[1] || a[0].localeCompare(b[0]); });
    out[t] = rows;
  }
  return out;
}

// ---------------------------------------------------------------------------
// Self-test. Node-only guard; `module` is undefined in the browser so the
// whole condition short-circuits before `require` is ever touched.
// ---------------------------------------------------------------------------
if (typeof module !== "undefined" && require.main === module) {
  let mcPass = 0;
  let mcFail = 0;
  const mcFails = [];

  const mcOk = function (label, cond) {
    if (cond) { mcPass++; } else { mcFail++; mcFails.push(label); }
  };
  const mcHas = function (ents, type, txt) {
    return ents.some(function (e) { return e.type === type && e.text === txt; });
  };
  const mcHasType = function (ents, type) {
    return ents.some(function (e) { return e.type === type; });
  };
  const mcHasText = function (ents, txt) {
    return ents.some(function (e) { return e.text === txt; });
  };
  const mcOverlaps = function (ents) {
    for (let i = 1; i < ents.length; i++) {
      if (ents[i].start < ents[i - 1].end) return true;
    }
    return false;
  };

  // 1. degenerate input
  mcOk("empty string -> []", JSON.stringify(mcEntities("")) === "[]");
  mcOk("whitespace -> []", JSON.stringify(mcEntities("   ")) === "[]");
  mcOk("null -> []", JSON.stringify(mcEntities(null)) === "[]");
  mcOk("undefined -> []", JSON.stringify(mcEntities(undefined)) === "[]");
  mcOk("punctuation only -> []", JSON.stringify(mcEntities("!!! ---")) === "[]");

  // 2. role + person + place, and the place must not become a person
  const mcA = mcEntities("President Zelensky said Ukraine will hold the line");
  mcOk("A: ROLE President", mcHas(mcA, "ROLE", "President"));
  mcOk("A: PERSON Zelensky", mcHas(mcA, "PERSON", "Zelensky"));
  mcOk("A: PLACE Ukraine", mcHas(mcA, "PLACE", "Ukraine"));
  mcOk("A: Ukraine NOT PERSON", !mcHas(mcA, "PERSON", "Ukraine"));
  mcOk("A: no overlaps", !mcOverlaps(mcA));

  // 3. "X of Y" institution survives whole
  const mcB = mcEntities("Bank of England holds rates at 4.5%");
  mcOk("B: ORG Bank of England", mcHas(mcB, "ORG", "Bank of England"));
  mcOk("B: England not separate", !mcHasText(mcB, "England"));
  mcOk("B: exactly one ORG",
    mcB.filter(function (e) { return e.type === "ORG"; }).length === 1);

  // 4. longest gazetteer match, twice, across a connector
  const mcC = mcEntities("South Korea and North Korea resume talks");
  mcOk("C: PLACE South Korea", mcHas(mcC, "PLACE", "South Korea"));
  mcOk("C: PLACE North Korea", mcHas(mcC, "PLACE", "North Korea"));
  mcOk("C: no bare Korea", !mcHasText(mcC, "Korea"));
  mcOk("C: exactly two PLACEs",
    mcC.filter(function (e) { return e.type === "PLACE"; }).length === 2);

  // 5. org suffix + money, and no duplicate number inside the money span
  const mcD = mcEntities("Apple Inc reports $94.9 billion in quarterly revenue");
  mcOk("D: ORG Apple Inc", mcHas(mcD, "ORG", "Apple Inc"));
  mcOk("D: MONEY $94.9 billion", mcHas(mcD, "MONEY", "$94.9 billion"));
  mcOk("D: no NUMBER 94.9", !mcHas(mcD, "NUMBER", "94.9"));
  mcOk("D: no overlaps", !mcOverlaps(mcD));

  // 6. the first-word trap
  const mcE = mcEntities("Explosion rocks Beirut port");
  mcOk("E: PLACE Beirut", mcHas(mcE, "PLACE", "Beirut"));
  mcOk("E: no PERSON", !mcHasType(mcE, "PERSON"));
  mcOk("E: Explosion not an entity", !mcHasText(mcE, "Explosion"));
  const mcE2 = mcEntities("Markets slide as traders flee");
  mcOk("E2: no PERSON from first word", !mcHasType(mcE2, "PERSON"));

  // 7. all-caps fallback
  const mcF = mcEntities("MARKETS SLIDE AS FED HOLDS RATES");
  mcOk("F: no PERSON in ALL CAPS", !mcHasType(mcF, "PERSON"));
  mcOk("F: no ORG in ALL CAPS", !mcHasType(mcF, "ORG"));
  const mcF2 = mcEntities("ISRAEL AND LEBANON AGREE CEASEFIRE TERMS TODAY");
  mcOk("F2: gazetteer still fires when shouting",
    mcHas(mcF2, "PLACE", "ISRAEL") && mcHas(mcF2, "PLACE", "LEBANON"));
  mcOk("F2: shouty confidence is damped",
    mcF2.filter(function (e) { return e.type === "PLACE"; })
      .every(function (e) { return e.conf < 0.92; }));
  mcOk("F2: no PERSON in ALL CAPS", !mcHasType(mcF2, "PERSON"));

  // 8. number + place + date
  const mcG = mcEntities("Dozens killed in Gaza strike on Tuesday");
  mcOk("G: NUMBER Dozens", mcHas(mcG, "NUMBER", "Dozens"));
  mcOk("G: PLACE Gaza", mcHas(mcG, "PLACE", "Gaza"));
  mcOk("G: DATE Tuesday", mcHas(mcG, "DATE", "Tuesday"));
  mcOk("G: Dozens not PERSON", !mcHas(mcG, "PERSON", "Dozens"));

  // 9. place + role + person inside one contiguous capitalised run
  const mcH = mcEntities("New York Governor Kathy Hochul announced");
  mcOk("H: PLACE New York", mcHas(mcH, "PLACE", "New York"));
  mcOk("H: ROLE Governor", mcHas(mcH, "ROLE", "Governor"));
  mcOk("H: PERSON Kathy Hochul", mcHas(mcH, "PERSON", "Kathy Hochul"));
  mcOk("H: sorted by start", mcH.every(function (e, i) {
    return i === 0 || e.start >= mcH[i - 1].start;
  }));

  // 10. longest-match / overlap proofs
  const mcI = mcEntities("New York police arrest suspect");
  mcOk("I: New York beats York", mcHas(mcI, "PLACE", "New York") && !mcHasText(mcI, "York"));
  const mcJ = mcEntities("Washington DC mayor briefs reporters");
  mcOk("J: Washington DC beats Washington", mcHas(mcJ, "PLACE", "Washington DC"));
  const mcK = mcEntities(
    "President Macron met Prime Minister Starmer in Paris on Monday to discuss $2.5bn aid"
  );
  mcOk("K: no overlapping spans", !mcOverlaps(mcK));
  mcOk("K: ROLE Prime Minister", mcHas(mcK, "ROLE", "Prime Minister"));
  mcOk("K: PERSON Starmer", mcHas(mcK, "PERSON", "Starmer"));
  mcOk("K: PLACE Paris", mcHas(mcK, "PLACE", "Paris"));
  mcOk("K: DATE Monday", mcHas(mcK, "DATE", "Monday"));
  mcOk("K: MONEY $2.5bn", mcHas(mcK, "MONEY", "$2.5bn"));

  // 11. money surface forms
  mcOk("M1: $1.2bn", mcHas(mcEntities("Fund raises $1.2bn for chips"), "MONEY", "$1.2bn"));
  mcOk("M2: $4,500", mcHas(mcEntities("Fine set at $4,500 per breach"), "MONEY", "$4,500"));
  mcOk("M3: euro millions",
    mcHas(mcEntities("Club pays €3 million for striker"), "MONEY", "€3 million"));
  mcOk("M4: £20m", mcHas(mcEntities("Council loses £20m in deal"), "MONEY", "£20m"));
  mcOk("M5: USD 50", mcHas(mcEntities("Oil steadies near USD 50 a barrel"), "MONEY", "USD 50"));
  mcOk("M6: 1.5 billion dollars",
    mcHas(mcEntities("Programme costs 1.5 billion dollars a year"), "MONEY", "1.5 billion dollars"));

  // 12. date surface forms
  mcOk("D1: ISO", mcHas(mcEntities("Filing dated 2026-08-03 shows losses"), "DATE", "2026-08-03"));
  mcOk("D2: quarter", mcHas(mcEntities("Chip demand cools in Q1 2026"), "DATE", "Q1 2026"));
  mcOk("D3: overnight", mcHas(mcEntities("Shelling resumed overnight"), "DATE", "overnight"));
  mcOk("D4: last month", mcHas(mcEntities("Inflation eased last month"), "DATE", "last month"));
  mcOk("D5: month day year",
    mcHas(mcEntities("Court sets hearing for January 5, 2026"), "DATE", "January 5, 2026"));
  mcOk("D6: today", mcHas(mcEntities("Talks resume today"), "DATE", "today"));

  // 13. more org / person coverage
  mcOk("O1: Department of Justice",
    mcHas(mcEntities("Department of Justice sues Google over ads"), "ORG", "Department of Justice"));
  mcOk("O2: Goldman Sachs Group",
    mcHas(mcEntities("Goldman Sachs Group cuts 200 jobs"), "ORG", "Goldman Sachs Group"));
  mcOk("O3: Toyota Motors ORG not PERSON",
    mcHas(mcEntities("Regulators fine Toyota Motors over recalls"), "ORG", "Toyota Motors"));
  mcOk("P1: two-token PERSON",
    mcHas(mcEntities("Investors back Vladimir Putin critic"), "PERSON", "Vladimir Putin"));
  const mcConfOf = function (ents, type, txt) {
    const hit = ents.filter(function (e) { return e.type === type && e.text === txt; })[0];
    return hit ? hit.conf : -1;
  };
  mcOk("P2a: possessive found", mcHas(
    mcEntities("Angela Merkel's memoir tops charts"), "PERSON", "Angela Merkel"));
  mcOk("P2b: possessive raises confidence",
    mcConfOf(mcEntities("Angela Merkel's memoir tops charts"), "PERSON", "Angela Merkel") >
    mcConfOf(mcEntities("Angela Merkel memoir tops charts"), "PERSON", "Angela Merkel"));
  mcOk("P2c: first-word position lowers confidence",
    mcConfOf(mcEntities("Angela Merkel memoir tops charts"), "PERSON", "Angela Merkel") <
    mcConfOf(mcEntities("Berlin backs Angela Merkel plan"), "PERSON", "Angela Merkel"));
  mcOk("P3: reporting verb carries a lone surname",
    mcHas(mcEntities("Sources say Hochul said nothing"), "PERSON", "Hochul"));
  mcOk("P4: connector splits people",
    !mcHasText(mcEntities("Trump and Biden trade barbs"), "Trump and Biden"));
  mcOk("P5: Dr title", (function () {
    const r = mcEntities("Dr Anthony Fauci warned lawmakers");
    return mcHas(r, "ROLE", "Dr") && mcHas(r, "PERSON", "Anthony Fauci");
  })());
  mcOk("P6: name particles stay inside the name", (function () {
    const r = mcEntities("Sheikh Mohammed bin Zayed lands in Abu Dhabi");
    return mcHas(r, "ROLE", "Sheikh") && mcHas(r, "PERSON", "Mohammed bin Zayed") &&
      mcHas(r, "PLACE", "Abu Dhabi");
  })());

  // gazetteer must outrank an org cue that happens to sit inside a toponym
  const mcW = mcEntities("West Bank raid kills two");
  mcOk("W: West Bank is a PLACE", mcHas(mcW, "PLACE", "West Bank"));
  mcOk("W: West Bank is not an ORG", !mcHasType(mcW, "ORG"));

  // 14. confidence contract
  const mcL = mcEntities("Senator Marco Rubio met King Salman in Riyadh on Friday");
  mcOk("L: conf within [0,1]",
    mcL.every(function (e) { return e.conf >= 0 && e.conf <= 1; }));
  mcOk("L: spans slice back to text", mcL.every(function (e) {
    return "Senator Marco Rubio met King Salman in Riyadh on Friday"
      .slice(e.start, e.end) === e.text;
  }));
  mcOk("L: PLACE Riyadh", mcHas(mcL, "PLACE", "Riyadh"));
  mcOk("L: types are legal", mcL.every(function (e) {
    return ["PERSON", "ORG", "PLACE", "MONEY", "NUMBER", "DATE", "ROLE"].indexOf(e.type) >= 0;
  }));

  // 15. leaderboard
  const mcCounts = mcEntityCounts([
    "President Zelensky said Ukraine will hold the line",
    "Ukraine and Russia resume talks in Istanbul",
    "Apple Inc reports record revenue",
    "Apple Inc names new chief",
    "Explosion rocks Beirut port"
  ]);
  mcOk("N: Ukraine tops PLACE",
    mcCounts.PLACE.length > 0 && mcCounts.PLACE[0][0] === "Ukraine" && mcCounts.PLACE[0][1] === 2);
  mcOk("N: Apple Inc tops ORG",
    mcCounts.ORG.length > 0 && mcCounts.ORG[0][0] === "Apple Inc" && mcCounts.ORG[0][1] === 2);
  mcOk("N: PERSON bucket exists", Array.isArray(mcCounts.PERSON));
  mcOk("N: counts sorted desc", mcCounts.PLACE.every(function (r, i) {
    return i === 0 || r[1] <= mcCounts.PLACE[i - 1][1];
  }));
  mcOk("N: single string accepted",
    mcEntityCounts("Explosion rocks Beirut port").PLACE[0][0] === "Beirut");
  mcOk("N: empty corpus safe", (function () {
    const c = mcEntityCounts([]);
    return c.PERSON.length === 0 && c.ORG.length === 0 && c.PLACE.length === 0;
  })());

  // 16. gazetteer sanity
  mcOk("Z: gazetteer >= 180 entries", mcNerGaz.size >= 180);

  console.log("assertions: " + (mcPass + mcFail) + "  pass: " + mcPass + "  fail: " + mcFail);
  if (mcFail) {
    for (const f of mcFails) console.log("  FAIL " + f);
    console.log("RESULT: FAIL");
    process.exit(1);
  }
  console.log("gazetteer entries: " + mcNerGaz.size);
  console.log("RESULT: PASS");
}
