/* mcDialog — conversational state tracking + reference resolution for a news chat app.
 *
 * Design stance: this is a *cheap* discourse model, not a parser. It only needs to be
 * right often enough that "tell me more about that" lands on the thing the user meant,
 * and quiet enough that it never invents a wrong antecedent. Every rule below trades
 * recall for precision, because a confidently wrong rewrite ("what did Ukraine say" for
 * "what did he say") is worse for the user than leaving the pronoun alone and letting
 * the downstream model cope with the raw text.
 *
 * Plain script scope: no modules, no IIFE, no deps. Every top-level name starts with "mc".
 */

/* ------------------------------------------------------------------ tuning knobs */

/* Recency decay per turn. 0.6 is deliberate: after 1 turn a mention keeps 60% of its
 * weight, after 3 turns ~22%, after 5 turns ~8%. That means a single fresh mention beats
 * a single stale one immediately (0.6 > 0.078), but a subject the user has raised four
 * times still outranks a one-off from last turn (4*0.6^3 = 0.864 > 0.6). Slower decay
 * (0.9) makes old entities sticky and the bot answers about yesterday's topic; faster
 * decay (0.3) throws away context the moment the user asks a clarifying question. 0.6 is
 * the point where "repeated three or four times" and "mentioned just now" are comparable,
 * which matches how people actually re-raise a news subject. */
const mcDecay = 0.6;

/* Hard cap on the mention list. A long chat would otherwise accumulate every proper noun
 * ever seen; 24 is well past the practical attention window and keeps every scan O(1)-ish. */
const mcMentionCap = 24;

/* Type vocabulary. Kept tiny on purpose — agreement only needs to answer "is this a human,
 * a place, or a collective?". OTHER is the honest "capitalised thing I can't classify". */
const mcTypePerson = "PERSON";
const mcTypePlace = "PLACE";
const mcTypeOrg = "ORG";
const mcTypePlural = "PLURAL";
const mcTypeOther = "OTHER";

/* ------------------------------------------------------------------ small lexicons */

/* Honorifics/roles. Their presence is the single strongest PERSON signal in news copy,
 * and we strip them so "President Zelensky" and a later bare "Zelensky" are one mention. */
const mcPersonTitles = [
  "president", "vice", "prime", "minister", "pm", "mr", "mrs", "ms", "miss", "dr",
  "sen", "senator", "rep", "representative", "gov", "governor", "mayor", "king",
  "queen", "prince", "princess", "pope", "chancellor", "secretary", "gen", "general",
  "col", "colonel", "capt", "captain", "lt", "sgt", "judge", "justice", "prof",
  "professor", "sir", "lord", "dame", "chairman", "chairwoman", "ceo", "cfo",
  "ambassador", "sheikh", "imam", "rabbi", "archbishop", "bishop", "cardinal",
  "officer", "detective", "coach", "director", "commissioner", "envoy", "spokesman",
  "spokeswoman"
];

/* Places we care about in a news feed. A gazetteer is unglamorous but it is the only
 * reliable way to stop "he" resolving to a country: "Ukraine" must be typed PLACE at
 * ingest time, not guessed at resolution time. */
const mcPlaceNames = [
  "ukraine", "russia", "gaza", "israel", "palestine", "kyiv", "kiev", "moscow",
  "washington", "beijing", "china", "taiwan", "iran", "iraq", "syria", "lebanon",
  "yemen", "egypt", "turkey", "india", "pakistan", "japan", "korea", "north korea",
  "south korea", "france", "germany", "britain", "england", "scotland", "wales",
  "ireland", "london", "paris", "berlin", "brussels", "poland", "sudan", "ethiopia",
  "nigeria", "mexico", "canada", "brazil", "argentina", "australia", "afghanistan",
  "venezuela", "cuba", "haiti", "somalia", "libya", "tel aviv", "jerusalem", "rafah",
  "khan younis", "west bank", "crimea", "donetsk", "mariupol", "kharkiv", "odesa",
  "new york", "california", "texas", "florida", "chicago", "los angeles", "europe",
  "africa", "asia", "americas", "middle east", "united states", "us", "usa", "u.s.",
  "uk", "united kingdom", "spain", "italy", "greece", "sweden", "norway", "finland",
  "denmark", "netherlands", "switzerland", "austria", "hungary", "romania", "serbia",
  "georgia", "armenia", "azerbaijan", "kazakhstan", "saudi arabia", "uae", "qatar",
  "kuwait", "bahrain", "oman", "jordan", "tunisia", "algeria", "morocco", "kenya",
  "uganda", "ghana", "senegal", "south africa", "zimbabwe", "congo", "chad", "mali",
  "niger", "myanmar", "thailand", "vietnam", "philippines", "indonesia", "malaysia",
  "singapore", "bangladesh", "sri lanka", "nepal", "doha", "dubai", "geneva", "davos"
];

/* Trailing/leading tokens that make a capitalised run an organisation. */
const mcOrgMarkers = [
  "inc", "inc.", "corp", "corp.", "corporation", "ltd", "ltd.", "llc", "plc", "co",
  "co.", "company", "group", "holdings", "bank", "party", "ministry", "department",
  "agency", "authority", "university", "college", "school", "hospital", "committee",
  "council", "commission", "union", "association", "federation", "airlines", "airways",
  "motors", "technologies", "systems", "labs", "laboratories", "foundation",
  "institute", "times", "post", "journal", "news", "network", "studios", "energy",
  "pharma", "partners", "capital", "ventures"
];

const mcOrgNames = [
  "apple", "google", "alphabet", "microsoft", "amazon", "meta", "facebook", "tesla",
  "openai", "anthropic", "nvidia", "intel", "reuters", "bbc", "cnn", "nato", "un",
  "eu", "who", "imf", "opec", "fbi", "cia", "nasa", "hamas", "hezbollah", "kremlin",
  "pentagon", "congress", "parliament", "senate", "fed", "federal reserve", "boeing",
  "ford", "toyota", "samsung", "sony", "netflix", "spacex", "twitter", "tiktok"
];

/* Collectives. "they" needs somewhere safe to land that is not a single human. */
const mcPluralNames = [
  "democrats", "republicans", "tories", "israelis", "palestinians", "ukrainians",
  "russians", "americans", "europeans", "houthis", "taliban", "senators", "lawmakers",
  "regulators", "investors", "protesters", "strikers", "residents", "officials"
];

/* Verbs that make the preceding capitalised run a speaker, i.e. almost certainly human. */
const mcSpeechVerbs = [
  "said", "says", "told", "wrote", "added", "warned", "denied", "announced", "argued",
  "claimed", "urged", "called", "spoke", "met", "visited", "insisted", "replied",
  "confirmed", "admitted", "asked", "accused", "pledged", "vowed"
];

/* Verbs whose direct object is an *utterance*, not an entity. Kept separate from
 * mcSpeechVerbs (which is a name-typing signal and only needs inflected news forms)
 * because this one needs the bare infinitive too: "did he say it". */
const mcUtteranceVerbs = [
  "say", "says", "said", "saying", "tell", "tells", "told", "mention", "mentions",
  "mentioned", "state", "stated", "repeat", "repeats", "repeated", "phrase", "word",
  "mean", "means", "meant", "put", "write", "writes", "wrote"
];

/* Words whose capitalisation carries no information at the start of a sentence, plus
 * calendar noise that would otherwise become permanent "entities". */
const mcNonEntityWords = [
  "what", "when", "where", "who", "whom", "whose", "why", "how", "which", "the", "a",
  "an", "and", "but", "or", "so", "if", "is", "are", "was", "were", "do", "does",
  "did", "can", "could", "will", "would", "should", "shall", "may", "might", "must",
  "has", "have", "had", "tell", "give", "show", "find", "get", "let", "please",
  "there", "then", "this", "that", "these", "those", "it", "he", "she", "they",
  "them", "his", "her", "their", "i", "we", "you", "my", "our", "your", "me", "us",
  "no", "not", "yes", "ok", "okay", "also", "more", "most", "some", "any", "all",
  "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday",
  "january", "february", "march", "april", "may", "june", "july", "august",
  "september", "october", "november", "december", "today", "tomorrow", "yesterday",
  "breaking", "update", "live", "exclusive", "analysis", "opinion"
];

/* Lowercase tokens allowed *inside* a capitalised run ("Bank of England"). */
const mcNameConnectors = ["of", "the", "and", "de", "van", "von", "der", "al", "bin", "da", "du"];

/* Function words used by the follow-up detector to decide "is there any content here?". */
const mcFunctionWords = [
  "a", "an", "the", "and", "but", "or", "so", "if", "of", "on", "in", "at", "to",
  "for", "from", "with", "about", "as", "by", "is", "are", "was", "were", "be",
  "been", "am", "do", "does", "did", "can", "could", "will", "would", "should",
  "shall", "may", "might", "must", "has", "have", "had", "not", "no", "yes", "ok",
  "okay", "i", "me", "my", "we", "us", "our", "you", "your", "he", "him", "his",
  "she", "her", "hers", "it", "its", "they", "them", "their", "this", "that",
  "these", "those", "there", "here", "what", "when", "where", "who", "whom",
  "whose", "why", "how", "which", "then", "else", "more", "most", "again", "also",
  "same", "other", "one", "ones", "please", "tell", "say", "go", "get", "give"
];

/* Multi-word and single-word triggers that mark a turn as continuing the last one. */
const mcFollowUpPhrases = [
  "tell me more", "more on", "more about", "what about", "how about", "and then",
  "and now", "go on", "keep going", "carry on", "what else", "who else", "where else",
  "when else", "how so", "then what", "same for", "same with", "same question",
  "any more", "anything else", "elaborate on", "expand on", "dig into", "and you"
];

const mcFollowUpWords = [
  "why", "continue", "elaborate", "more", "next", "again", "go", "and", "source",
  "sources", "really", "when", "where", "who", "how", "details", "context",
  "background", "seriously", "meaning"
];

/* ------------------------------------------------------------------ tiny utilities */

function mcIsString(v) {
  return typeof v === "string";
}

function mcClean(text) {
  return mcIsString(text) ? text : "";
}

function mcLower(s) {
  return mcClean(s).toLowerCase();
}

/* Strip surrounding punctuation but keep internal apostrophes/hyphens. */
function mcStripPunct(token) {
  return mcClean(token).replace(/^[^A-Za-z0-9']+/, "").replace(/[^A-Za-z0-9']+$/, "");
}

function mcHas(list, value) {
  return list.indexOf(value) !== -1;
}

/* Normalised key for mention identity: lowercase, drop a leading article, squash spaces. */
function mcKey(text) {
  return mcLower(text).replace(/^(the|a|an)\s+/, "").replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim();
}

/* Whole-word containment, used to fold "Zelensky" into "President Zelensky" etc.
 * Substring matching alone would merge "Ukraine" with "Ukrainians", so we require
 * token boundaries on both sides. */
function mcCoversKey(longKey, shortKey) {
  if (!longKey || !shortKey || longKey === shortKey) return false;
  const parts = longKey.split(" ");
  const needle = shortKey.split(" ");
  for (let i = 0; i + needle.length <= parts.length; i++) {
    let ok = true;
    for (let j = 0; j < needle.length; j++) {
      if (parts[i + j] !== needle[j]) { ok = false; break; }
    }
    if (ok) return true;
  }
  return false;
}

/* ------------------------------------------------------------------ typing */

/* Normalise host-supplied type labels (NER tag sets vary: GPE/LOC/ORG/PER/...). */
function mcNormaliseType(raw) {
  const t = mcLower(raw);
  if (!t) return null;
  if (t.indexOf("per") === 0 || t === "human" || t === "people") return mcTypePerson;
  if (t.indexOf("org") === 0 || t === "company" || t === "corp") return mcTypeOrg;
  if (t === "gpe" || t.indexOf("loc") === 0 || t.indexOf("pla") === 0 || t === "geo" || t === "country" || t === "city") return mcTypePlace;
  if (t.indexOf("plu") === 0 || t === "group" || t === "collective") return mcTypePlural;
  if (t === "person") return mcTypePerson;
  return mcTypeOther;
}

/* Classify a capitalised run. Order matters: explicit markers beat gazetteers, gazetteers
 * beat guesswork, and the "two capitalised words are probably a name" fallback is last. */
function mcClassify(tokens, nextWord, prevWord) {
  const lowered = tokens.map(mcLower);
  const key = lowered.join(" ");

  if (mcHas(mcPersonTitles, lowered[0])) return mcTypePerson;
  for (let i = 0; i < lowered.length; i++) {
    if (mcHas(mcOrgMarkers, lowered[i])) return mcTypeOrg;
  }
  if (mcHas(mcPlaceNames, key)) return mcTypePlace;
  if (mcHas(mcOrgNames, key)) return mcTypeOrg;
  if (mcHas(mcPluralNames, key)) return mcTypePlural;

  const last = lowered[lowered.length - 1];
  if (/(city|county|province|valley|river|island|islands|bay|beach|strait|sea|desert|mountains|district|region|border|coast)$/.test(last)) {
    return mcTypePlace;
  }
  /* Demonym-ish collectives: only for a single long token, so surnames like "Harris"
   * (which also ends in -s) are never swept up. */
  if (lowered.length === 1 && last.length >= 6 && /(ians|ans|ists|crats)$/.test(last)) {
    return mcTypePlural;
  }
  if (mcHas(mcSpeechVerbs, mcLower(nextWord))) return mcTypePerson;
  if (mcHas(mcSpeechVerbs, mcLower(prevWord))) return mcTypePerson;
  if (tokens.length >= 2) return mcTypePerson; /* multi-word capitalised run in news prose */
  return mcTypeOther;
}

/* Drop leading honorifics so titles never fragment one human into several mentions. */
function mcStripTitles(tokens) {
  let start = 0;
  while (start < tokens.length && mcHas(mcPersonTitles, mcLower(tokens[start]))) start++;
  return start >= tokens.length ? tokens.slice() : tokens.slice(start);
}

/* ------------------------------------------------------------------ extraction */

/* Fallback NER: runs of capitalised tokens. Deliberately conservative at sentence
 * starts, where capitalisation says nothing — a lone capitalised first word is only
 * kept if a gazetteer or marker vouches for it. */
function mcExtractEntities(text) {
  const src = mcClean(text);
  if (!src) return [];

  const raw = src.split(/\s+/);
  const words = [];
  for (let i = 0; i < raw.length; i++) {
    const w = mcStripPunct(raw[i]);
    /* A sentence boundary is "previous raw token ended in . ! ? :" */
    const prevRaw = i > 0 ? raw[i - 1] : "";
    const startsSentence = i === 0 || /[.!?:;]$/.test(prevRaw);
    if (w) words.push({ w: w, sentenceStart: startsSentence });
  }

  const out = [];
  let i = 0;
  while (i < words.length) {
    if (!/^[A-Z]/.test(words[i].w)) { i++; continue; }

    const startIdx = i;
    const run = [];
    while (i < words.length) {
      const w = words[i].w;
      if (/^[A-Z]/.test(w)) {
        run.push(w);
        i++;
      } else if (run.length > 0 && mcHas(mcNameConnectors, mcLower(w)) &&
                 i + 1 < words.length && /^[A-Z]/.test(words[i + 1].w)) {
        run.push(w); /* connector only survives if a capitalised token follows */
        i++;
      } else {
        break;
      }
    }
    if (!run.length) { i++; continue; }

    let tokens = run;
    /* At a sentence start the first word's capital is free, so discard it unless it is
     * itself evidence-bearing. */
    if (words[startIdx].sentenceStart && mcHas(mcNonEntityWords, mcLower(tokens[0]))) {
      tokens = tokens.slice(1);
    }
    while (tokens.length && mcHas(mcNonEntityWords, mcLower(tokens[tokens.length - 1]))) {
      tokens = tokens.slice(0, -1);
    }
    while (tokens.length && mcHas(mcNameConnectors, mcLower(tokens[0]))) {
      tokens = tokens.slice(1);
    }
    if (!tokens.length) continue;

    const nextWord = i < words.length ? words[i].w : "";
    const prevWord = startIdx > 0 ? words[startIdx - 1].w : "";
    const type = mcClassify(tokens, nextWord, prevWord);
    const named = mcStripTitles(tokens);
    if (!named.length) continue;

    const key = mcKey(named.join(" "));
    if (!key) continue;
    if (mcHas(mcNonEntityWords, key)) continue;

    /* Lone capitalised word at a sentence start with no supporting evidence: skip it.
     * Headlines start with ordinary nouns far too often ("Aid convoys reach ..."). */
    const vouched = type !== mcTypeOther ||
      mcHas(mcPlaceNames, key) || mcHas(mcOrgNames, key) || mcHas(mcPluralNames, key);
    if (named.length === 1 && words[startIdx].sentenceStart && !vouched) continue;

    out.push({ text: named.join(" "), type: type });
  }
  return out;
}

/* Accept either ["Gaza"] or [{text:"Gaza", type:"PLACE"}] from the host. */
function mcNormaliseMeta(meta, text) {
  if (!meta || typeof meta !== "object" || !meta.entities || !meta.entities.length) {
    return mcExtractEntities(text);
  }
  const out = [];
  for (let i = 0; i < meta.entities.length; i++) {
    const e = meta.entities[i];
    if (!e) continue;
    if (mcIsString(e)) {
      const guessed = mcExtractEntities(e);
      /* Trust the host that this *is* an entity; only borrow our typing. */
      out.push({ text: e, type: guessed.length ? guessed[0].type : mcClassify(e.split(/\s+/), "", "") });
    } else if (mcIsString(e.text) && e.text.trim()) {
      const t = mcNormaliseType(e.type);
      out.push({ text: e.text.trim(), type: t || mcClassify(e.text.split(/\s+/), "", "") });
    }
  }
  return out;
}

/* ------------------------------------------------------------------ state */

function mcDialogNew() {
  return { mentions: [], lastTopic: null, lastIntent: null, turn: 0, slots: {} };
}

function mcIsState(state) {
  return !!state && typeof state === "object" && Object.prototype.hasOwnProperty.call(state, "mentions");
}

/* Recompute every salience against the current turn. Storing a stale number would make
 * the ranking depend on *when* it was last written, which is a nasty source of drift;
 * with a 24-entry cap the full recompute is free. */
function mcRescore(state) {
  for (let i = 0; i < state.mentions.length; i++) {
    const m = state.mentions[i];
    const dist = Math.max(0, state.turn - m.turn);
    m.salience = m.mentions * Math.pow(mcDecay, dist);
  }
  state.mentions.sort(function (a, b) {
    if (b.salience !== a.salience) return b.salience - a.salience;
    return b.turn - a.turn;
  });
  if (state.mentions.length > mcMentionCap) state.mentions.length = mcMentionCap;
}

function mcFindMention(state, key, type) {
  for (let i = 0; i < state.mentions.length; i++) {
    if (state.mentions[i].key === key) return state.mentions[i];
  }
  /* Partial-name coreference, but only within a compatible type: "Zelensky" folds into
   * "President Zelensky", while "Ukraine" must not fold into "Ukraine Ministry". */
  for (let i = 0; i < state.mentions.length; i++) {
    const m = state.mentions[i];
    if (m.type !== type) continue;
    if (mcCoversKey(m.key, key) || mcCoversKey(key, m.key)) return m;
  }
  return null;
}

function mcNoteEntity(state, text, type) {
  const label = mcClean(text).trim();
  if (!label) return;
  const key = mcKey(label);
  if (!key) return;

  const existing = mcFindMention(state, key, type);
  if (existing) {
    existing.mentions += 1;
    existing.turn = state.turn;
    /* Prefer the longer surface form and any concrete type over OTHER. */
    if (label.length > existing.text.length) existing.text = label;
    if (existing.type === mcTypeOther && type !== mcTypeOther) existing.type = type;
    existing.key = mcKey(existing.text);
    return;
  }
  state.mentions.push({
    text: label,
    type: type || mcTypeOther,
    turn: state.turn,
    mentions: 1,
    salience: 1,
    key: key
  });
}

function mcClassifyIntent(text) {
  const t = mcLower(text).trim();
  if (!t) return "empty";
  if (mcIsFollowUp(t)) return "follow_up";
  if (/\?\s*$/.test(t) || /^(what|when|where|who|why|how|which|is|are|do|does|did|can|could|will|would|should)\b/.test(t)) {
    return "question";
  }
  if (/^(tell|give|show|find|get|summari[sz]e|list|explain|brief)\b/.test(t)) return "request";
  return "statement";
}

function mcDialogObserve(state, role, text, meta) {
  if (!mcIsState(state)) return state; /* never throw on a malformed caller */
  if (!Array.isArray(state.mentions)) state.mentions = [];
  if (!state.slots || typeof state.slots !== "object") state.slots = {};

  const body = mcClean(text);
  state.turn = (typeof state.turn === "number" ? state.turn : 0) + 1;

  const entities = mcNormaliseMeta(meta, body);
  for (let i = 0; i < entities.length; i++) {
    mcNoteEntity(state, entities[i].text, entities[i].type);
  }
  mcRescore(state);

  /* Intent describes what the *user* wants; an assistant turn shouldn't overwrite it,
   * otherwise the next follow-up check reads the bot's own phrasing. */
  if (mcLower(role) === "user" && body) state.lastIntent = mcClassifyIntent(body);

  state.lastTopic = mcDialogTopic(state);
  state.slots.person = mcTopOfType(state, [mcTypePerson]);
  state.slots.place = mcTopOfType(state, [mcTypePlace]);
  state.slots.org = mcTopOfType(state, [mcTypeOrg, mcTypePlural]);
  return state;
}

/* ------------------------------------------------------------------ ranking */

function mcCandidates(state, types, personPenalty) {
  if (!mcIsState(state) || !Array.isArray(state.mentions)) return [];
  const out = [];
  for (let i = 0; i < state.mentions.length; i++) {
    const m = state.mentions[i];
    if (types && !mcHas(types, m.type)) continue;
    /* "it"/"that" can point at anything, but pointing at a human is the least likely
     * reading, so humans are demoted rather than excluded. */
    const score = m.salience * (personPenalty && m.type === mcTypePerson ? 0.5 : 1);
    out.push({ m: m, score: score });
  }
  out.sort(function (a, b) {
    if (b.score !== a.score) return b.score - a.score;
    return b.m.turn - a.m.turn;
  });
  return out;
}

function mcTopOfType(state, types) {
  const c = mcCandidates(state, types, false);
  return c.length ? c[0].m.text : null;
}

function mcDialogTopic(state) {
  const c = mcCandidates(state, null, false);
  return c.length ? c[0].m.text : null;
}

function mcDialogSummary(state) {
  if (!mcIsState(state) || !state.mentions || !state.mentions.length) {
    return "no topic yet (turn " + (mcIsState(state) && state.turn ? state.turn : 0) + ")";
  }
  const top = state.mentions[0];
  const others = [];
  for (let i = 1; i < state.mentions.length && others.length < 2; i++) {
    others.push(state.mentions[i].text);
  }
  let line = "turn " + state.turn + " — about " + top.text + " (" + top.type +
    ", salience " + top.salience.toFixed(2) + ", seen " + top.mentions + "x)";
  if (others.length) line += "; also tracking " + others.join(", ");
  if (state.lastIntent) line += "; last user intent: " + state.lastIntent;
  return line;
}

/* ------------------------------------------------------------------ referring expressions */

/* Each entry: the surface form, the types it may bind to, and how it is realised.
 * "wants" is the agreement filter and it is non-negotiable — see mcResolve. */
const mcRefTable = {
  "he": { wants: [mcTypePerson], form: "plain" },
  "him": { wants: [mcTypePerson], form: "plain" },
  "his": { wants: [mcTypePerson], form: "possessive" },
  "she": { wants: [mcTypePerson], form: "plain" },
  "hers": { wants: [mcTypePerson], form: "possessive" },
  "her": { wants: [mcTypePerson], form: "auto" },
  "they": { wants: [mcTypeOrg, mcTypePlural], form: "plain" },
  "them": { wants: [mcTypeOrg, mcTypePlural], form: "plain" },
  "their": { wants: [mcTypeOrg, mcTypePlural], form: "possessive" },
  "those": { wants: [mcTypePlural, mcTypeOrg], form: "plain" },
  "there": { wants: [mcTypePlace], form: "locative" },
  "it": { wants: null, form: "plain", demoteperson: true },
  "its": { wants: null, form: "possessive", demoteperson: true },
  "that": { wants: null, form: "plain", demoteperson: true },
  "this": { wants: null, form: "plain", demoteperson: true },
  "the story": { wants: null, form: "plain", demoteperson: true },
  "that story": { wants: null, form: "plain", demoteperson: true },
  "this story": { wants: null, form: "plain", demoteperson: true },
  "the article": { wants: null, form: "plain", demoteperson: true },
  "the report": { wants: null, form: "plain", demoteperson: true },
  "the same": { wants: null, form: "plain", demoteperson: true }
};

/* Words that, following "that", mark it as a clause marker ("said that the ...") or a
 * determiner ("that country") rather than a pronoun. Rewriting either produces garbage. */
const mcClauseFollowers = [
  "the", "a", "an", "he", "she", "it", "they", "we", "i", "you", "there", "this",
  "these", "those", "his", "her", "their", "my", "our", "your", "is", "was", "were",
  "are", "has", "have", "had", "will", "would", "can", "could", "should", "did",
  "does", "do", "said", "says"
];

/* Verbs/particles that can follow object "her"; anything else and "her" is possessive. */
const mcAfterObjectPronoun = [
  "", "and", "or", "but", "to", "about", "in", "on", "at", "for", "with", "from",
  "then", "now", "too", "also", "again", "yet", "since", "before", "after", "today",
  "yesterday", "instead"
];

function mcIsWordPiece(piece) {
  return /^[A-Za-z0-9'’]+$/.test(piece);
}

function mcSplitPieces(text) {
  return mcClean(text).match(/[A-Za-z0-9'’]+|[^A-Za-z0-9'’]+/g) || [];
}

function mcPossessive(name) {
  return /s$/i.test(name) ? name + "'" : name + "'s";
}

function mcRealise(name, form, nextWord) {
  if (form === "possessive") return mcPossessive(name);
  if (form === "locative") return "in " + name;
  if (form === "auto") {
    /* "her" is object or possessive depending on what follows; guess possessive only
     * when a plain noun-ish word comes next. */
    return mcHas(mcAfterObjectPronoun, mcLower(nextWord)) ? name : mcPossessive(name);
  }
  return name;
}

/* Preserve the writer's capitalisation of the sentence start. */
function mcMatchCase(original, replacement) {
  if (/^[A-Z]/.test(original) && /^[a-z]/.test(replacement)) {
    return replacement.charAt(0).toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

function mcResolve(state, text) {
  const src = mcClean(text);
  const result = { text: src, resolved: src, substitutions: [] };
  if (!src || !mcIsState(state) || !Array.isArray(state.mentions) || !state.mentions.length) {
    return result;
  }

  const pieces = mcSplitPieces(src);
  const out = [];
  let i = 0;

  while (i < pieces.length) {
    const piece = pieces[i];
    if (!mcIsWordPiece(piece)) { out.push(piece); i++; continue; }

    /* Two-word expressions first ("that story" must win over bare "that"). */
    let matchedLen = 0;
    let entry = null;
    let surface = "";
    if (i + 2 < pieces.length && /^\s+$/.test(pieces[i + 1]) && mcIsWordPiece(pieces[i + 2])) {
      const two = mcLower(piece) + " " + mcLower(pieces[i + 2]);
      if (Object.prototype.hasOwnProperty.call(mcRefTable, two)) {
        entry = mcRefTable[two];
        matchedLen = 3;
        surface = piece + pieces[i + 1] + pieces[i + 2];
      }
    }
    if (!entry) {
      const one = mcLower(piece);
      if (Object.prototype.hasOwnProperty.call(mcRefTable, one)) {
        entry = mcRefTable[one];
        matchedLen = 1;
        surface = piece;
      }
    }
    if (!entry) { out.push(piece); i++; continue; }

    /* Look ahead one word for the syntactic guards below. */
    let nextWord = "";
    for (let k = i + matchedLen; k < pieces.length; k++) {
      if (mcIsWordPiece(pieces[k])) { nextWord = pieces[k]; break; }
      if (!/^\s+$/.test(pieces[k])) break; /* punctuation ends the lookahead */
    }
    let prevWord = "";
    for (let k = i - 1; k >= 0; k--) {
      if (mcIsWordPiece(pieces[k])) { prevWord = pieces[k]; break; }
      if (!/^\s+$/.test(pieces[k])) break;
    }

    const lowerSurface = mcLower(surface);
    if ((lowerSurface === "it" || lowerSurface === "that" || lowerSurface === "this") &&
        mcHas(mcUtteranceVerbs, mcLower(prevWord))) {
      /* "when did he say it" — the antecedent is the utterance itself, which is not an
       * entity we track. Substituting the topic here ("say Ukraine") is actively wrong. */
      out.push(piece); i++; continue;
    }
    if ((lowerSurface === "that" || lowerSurface === "this" || lowerSurface === "those") &&
        nextWord && mcHas(mcClauseFollowers, mcLower(nextWord))) {
      out.push(piece); i++; continue; /* complementiser / determiner, not a reference */
    }
    if ((lowerSurface === "that" || lowerSurface === "this" || lowerSurface === "those") &&
        nextWord && /^[a-z]/.test(nextWord) && !mcHas(mcFunctionWords, mcLower(nextWord))) {
      out.push(piece); i++; continue; /* "that country", "this week" — determiner use */
    }

    /* Agreement filter. This is the whole point of the module: type agreement outranks
     * raw recency because a type violation is a *category error* the user can spot
     * instantly ("he" -> "Ukraine"), while picking the second-most-recent person is a
     * mild miss they can correct in one turn. So we search only within the agreeing
     * types and rank by salience inside that set — never the reverse. */
    const ranked = mcCandidates(state, entry.wants, !!entry.demoteperson);
    if (!ranked.length) {
      /* Nothing suitable is in scope. Leave the surface form exactly as written and
       * record nothing: an unresolved pronoun degrades gracefully downstream, whereas a
       * wrong antecedent silently changes the meaning of the user's question. */
      out.push(piece); i++; continue;
    }

    const chosen = ranked[0].m;
    const replacement = mcMatchCase(surface, mcRealise(chosen.text, entry.form, nextWord));
    out.push(replacement);
    result.substitutions.push({
      from: surface,
      to: replacement,
      reason: "'" + lowerSurface + "' -> " + chosen.type + " '" + chosen.text +
        "' (salience " + chosen.salience.toFixed(2) + ", last seen turn " + chosen.turn + ")"
    });
    i += matchedLen;
  }

  result.resolved = out.join("");
  return result;
}

/* ------------------------------------------------------------------ follow-up detection */

function mcTokens(text) {
  const words = mcClean(text).toLowerCase().split(/[^a-z0-9']+/);
  const out = [];
  for (let i = 0; i < words.length; i++) if (words[i]) out.push(words[i]);
  return out;
}

function mcIsFollowUp(text) {
  const t = mcLower(text).trim();
  if (!t) return false;
  const flat = t.replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim();
  if (!flat) return false;

  for (let i = 0; i < mcFollowUpPhrases.length; i++) {
    if (flat.indexOf(mcFollowUpPhrases[i]) !== -1) return true;
  }

  const toks = mcTokens(flat);
  if (toks.length === 1 && mcHas(mcFollowUpWords, toks[0])) return true;

  /* A bare pronoun ("him?", "those") is only ever a continuation. */
  if (toks.length === 1 && Object.prototype.hasOwnProperty.call(mcRefTable, toks[0])) return true;

  /* Short fragments with no content word are continuations too. Four tokens is the
   * cutoff because "give me a briefing" (4) is a standalone request, while "and then
   * what" (3) cannot stand alone. */
  if (toks.length < 4) {
    let contentful = false;
    for (let i = 0; i < toks.length; i++) {
      if (!mcHas(mcFunctionWords, toks[i]) && !Object.prototype.hasOwnProperty.call(mcRefTable, toks[i])) {
        contentful = true;
        break;
      }
    }
    if (!contentful) return true;
  }
  return false;
}

/* ------------------------------------------------------------------ self-test */

if (typeof module !== "undefined" && require.main === module) {
  let mcPass = 0;
  let mcFail = 0;
  const mcFailures = [];

  const mcAssert = function (label, cond) {
    if (cond) { mcPass++; } else { mcFail++; mcFailures.push(label); }
  };
  const mcNear = function (a, b) { return Math.abs(a - b) < 1e-9; };
  const mcFind = function (state, name) {
    for (let i = 0; i < state.mentions.length; i++) {
      if (state.mentions[i].text.toLowerCase().indexOf(name.toLowerCase()) !== -1) return state.mentions[i];
    }
    return null;
  };

  /* 1-4: PERSON wins over PLACE for "he". */
  const s1 = mcDialogNew();
  mcDialogObserve(s1, "user", "What did President Zelensky say about Ukraine?", null);
  const z = mcFind(s1, "Zelensky");
  const uk = mcFind(s1, "Ukraine");
  mcAssert("1 Zelensky extracted", !!z);
  mcAssert("2 Zelensky typed PERSON", !!z && z.type === "PERSON");
  mcAssert("3 Ukraine typed PLACE", !!uk && uk.type === "PLACE");
  const r1 = mcResolve(s1, "what else did he say");
  mcAssert("4 he -> Zelensky", r1.resolved.indexOf("Zelensky") !== -1);
  mcAssert("5 he not -> Ukraine", r1.resolved.indexOf("Ukraine") === -1);
  mcAssert("6 one substitution recorded", r1.substitutions.length === 1 && r1.substitutions[0].from === "he");
  mcAssert("7 substitution reason mentions PERSON", r1.substitutions[0].reason.indexOf("PERSON") !== -1);

  /* 8-10: PLACE for "there". */
  const s2 = mcDialogNew();
  mcDialogObserve(s2, "ai", "Aid convoys crossed into Gaza as ceasefire talks stalled.", null);
  const gz = mcFind(s2, "Gaza");
  mcAssert("8 Gaza extracted as PLACE", !!gz && gz.type === "PLACE");
  const r2 = mcResolve(s2, "what's happening there");
  mcAssert("9 there -> Gaza", r2.resolved.indexOf("Gaza") !== -1);
  mcAssert("10 there substitution recorded", r2.substitutions.length === 1 && r2.substitutions[0].from === "there");

  /* 11-13: ORG for "they". */
  const s3 = mcDialogNew();
  mcDialogObserve(s3, "ai", "Apple Inc reported record quarterly earnings.", null);
  const ap = mcFind(s3, "Apple");
  mcAssert("11 Apple Inc typed ORG", !!ap && ap.type === "ORG");
  const r3 = mcResolve(s3, "how did they do");
  mcAssert("12 they -> Apple Inc", r3.resolved.indexOf("Apple Inc") !== -1);
  mcAssert("13 they substitution recorded", r3.substitutions.length === 1);

  /* 14-15: no PERSON in scope -> untouched. */
  const s4 = mcDialogNew();
  mcDialogObserve(s4, "ai", "Flooding worsened across Bangladesh this week.", null);
  const r4 = mcResolve(s4, "what did he say about it");
  mcAssert("14 he left unresolved but 'it' still resolves to the PLACE",
    r4.resolved.split(/\s+/).indexOf("he") !== -1 && r4.resolved.indexOf("Bangladesh") !== -1);
  mcAssert("15 no PERSON substitution", (function () {
    for (let i = 0; i < r4.substitutions.length; i++) if (r4.substitutions[i].from === "he") return false;
    return true;
  })());
  const s4b = mcDialogNew();
  mcDialogObserve(s4b, "ai", "Rain is expected.", null);
  const r4b = mcResolve(s4b, "what did he say");
  mcAssert("16 empty-scope resolve returns text unchanged", r4b.resolved === "what did he say");
  mcAssert("17 empty-scope substitutions empty", r4b.substitutions.length === 0);

  /* 18-20: salience recency — distance 1 beats distance 5. */
  const s5 = mcDialogNew();
  mcDialogObserve(s5, "ai", "", { entities: [{ text: "Old Subject", type: "ORG" }] });   // turn 1
  mcDialogObserve(s5, "ai", "", null);                                                    // turn 2
  mcDialogObserve(s5, "ai", "", null);                                                    // turn 3
  mcDialogObserve(s5, "ai", "", null);                                                    // turn 4
  mcDialogObserve(s5, "ai", "", { entities: [{ text: "New Subject", type: "ORG" }] });    // turn 5
  mcDialogObserve(s5, "ai", "", null);                                                    // turn 6
  const oldM = mcFind(s5, "Old Subject");
  const newM = mcFind(s5, "New Subject");
  mcAssert("18 stale mention salience = 0.6^5", mcNear(oldM.salience, Math.pow(0.6, 5)));
  mcAssert("19 fresh mention salience = 0.6^1", mcNear(newM.salience, 0.6));
  mcAssert("20 recency: 1 turn ago beats 5 turns ago", newM.salience > oldM.salience);

  /* 21-24: frequency — 4 mentions at distance 3 beats 1 mention at distance 1. */
  const s6 = mcDialogNew();
  for (let k = 0; k < 4; k++) {
    mcDialogObserve(s6, "ai", "", { entities: [{ text: "Repeat Corp", type: "ORG" }] }); // turns 1-4
  }
  mcDialogObserve(s6, "ai", "", null);                                                    // turn 5
  mcDialogObserve(s6, "ai", "", { entities: [{ text: "Once Corp", type: "ORG" }] });      // turn 6
  mcDialogObserve(s6, "ai", "", null);                                                    // turn 7
  const rep = mcFind(s6, "Repeat Corp");
  const once = mcFind(s6, "Once Corp");
  mcAssert("21 repeated mention counted 4x", rep.mentions === 4);
  mcAssert("22 repeated salience = 4*0.6^3", mcNear(rep.salience, 4 * Math.pow(0.6, 3)));
  mcAssert("23 single salience = 0.6", mcNear(once.salience, 0.6));
  mcAssert("24 frequency beats recency here", rep.salience > once.salience);
  mcAssert("25 topic is the repeated subject", mcDialogTopic(s6) === "Repeat Corp");

  /* 26-27: cap. */
  const s7 = mcDialogNew();
  for (let k = 0; k < 60; k++) {
    mcDialogObserve(s7, "ai", "", { entities: [{ text: "Entity" + k, type: "ORG" }] });
  }
  mcAssert("26 mention list capped at 24", s7.mentions.length <= 24);
  mcAssert("27 turn counter still accurate", s7.turn === 60);

  /* 28-36: follow-up detection. */
  mcAssert("28 follow-up: tell me more", mcIsFollowUp("tell me more") === true);
  mcAssert("29 follow-up: why", mcIsFollowUp("why") === true);
  mcAssert("30 follow-up: go on", mcIsFollowUp("go on") === true);
  mcAssert("31 follow-up: what about him", mcIsFollowUp("what about him") === true);
  mcAssert("32 follow-up: and?", mcIsFollowUp("and?") === true);
  mcAssert("33 follow-up: and then?", mcIsFollowUp("and then?") === true);
  mcAssert("34 follow-up: more on that", mcIsFollowUp("more on that") === true);
  mcAssert("35 follow-up: same for X", mcIsFollowUp("same for Japan") === true);
  mcAssert("36 follow-up: continue", mcIsFollowUp("continue") === true);
  mcAssert("37 follow-up: bare pronoun", mcIsFollowUp("them") === true);
  mcAssert("38 not follow-up: bitcoin price", mcIsFollowUp("what is the bitcoin price") === false);
  mcAssert("39 not follow-up: give me a briefing", mcIsFollowUp("give me a briefing") === false);
  mcAssert("40 not follow-up: empty", mcIsFollowUp("") === false);

  /* 41-42: topic after several turns on one subject. */
  const s8 = mcDialogNew();
  mcDialogObserve(s8, "user", "What is happening in Ukraine?", null);
  mcDialogObserve(s8, "ai", "Ukraine reported new strikes overnight.", null);
  mcDialogObserve(s8, "user", "Any reaction from Poland?", null);
  mcDialogObserve(s8, "ai", "Ukraine asked allies for more air defence.", null);
  mcAssert("41 dominant topic is Ukraine", mcDialogTopic(s8) === "Ukraine");
  mcAssert("42 lastTopic mirrors topic", s8.lastTopic === "Ukraine");

  /* 43-44: no pronouns -> unchanged. */
  const r5 = mcResolve(s8, "give me the latest headlines");
  mcAssert("43 pronoun-free text unchanged", r5.resolved === "give me the latest headlines");
  mcAssert("44 pronoun-free substitutions empty", r5.substitutions.length === 0);

  /* 45-50: robustness. */
  const s9 = mcDialogNew();
  mcAssert("45 fresh state shape", s9.turn === 0 && s9.mentions.length === 0 && s9.lastTopic === null &&
    s9.lastIntent === null && typeof s9.slots === "object");
  mcAssert("46 topic of empty state is null", mcDialogTopic(s9) === null);
  let mcThrew = false;
  try {
    mcDialogObserve(s9, "user", "", null);
    mcDialogObserve(s9, "user", null, null);
    mcDialogObserve(s9, "user", undefined, undefined);
    mcDialogObserve(s9, "ai", "Gaza update.", { entities: [] });
    mcResolve(s9, "");
    mcResolve(null, "he said it");
    mcResolve(s9, null);
    mcDialogSummary(mcDialogNew());
    mcIsFollowUp(null);
  } catch (e) {
    mcThrew = true;
  }
  mcAssert("47 null/empty inputs do not throw", mcThrew === false);
  mcAssert("48 empty resolve returns empty strings", mcResolve(s9, "").resolved === "");
  mcAssert("49 summary of empty state is readable", mcDialogSummary(mcDialogNew()).indexOf("no topic") === 0);
  mcAssert("50 summary of live state names the topic", mcDialogSummary(s8).indexOf("Ukraine") !== -1);

  /* 51-54: two conversations stay isolated. */
  const sA = mcDialogNew();
  const sB = mcDialogNew();
  mcDialogObserve(sA, "user", "What did President Zelensky say?", null);
  mcDialogObserve(sB, "user", "How is Apple Inc performing?", null);
  mcAssert("51 conversation A topic", mcDialogTopic(sA) === "Zelensky");
  mcAssert("52 conversation B topic", mcDialogTopic(sB) === "Apple Inc");
  mcAssert("53 A has no B entities", mcFind(sA, "Apple") === null);
  mcAssert("54 B has no A entities", mcFind(sB, "Zelensky") === null);
  const rB = mcResolve(sB, "what did he say");
  mcAssert("55 B leaves 'he' alone (no PERSON in B)", rB.substitutions.length === 0);

  /* 56-60: agreement details and possessives. */
  const s10 = mcDialogNew();
  mcDialogObserve(s10, "ai", "", { entities: [
    { text: "Angela Merkel", type: "PERSON" },
    { text: "Germany", type: "PLACE" },
    { text: "Siemens AG", type: "ORG" }
  ] });
  const r6 = mcResolve(s10, "what about his statement");
  mcAssert("56 possessive his -> Name's", r6.resolved.indexOf("Angela Merkel's") !== -1);
  const r7 = mcResolve(s10, "what happened there");
  mcAssert("57 there -> in Germany", r7.resolved.indexOf("in Germany") !== -1);
  const r8 = mcResolve(s10, "how are they doing");
  mcAssert("58 they -> ORG not PERSON", r8.resolved.indexOf("Siemens AG") !== -1);
  const r9 = mcResolve(s10, "he said that the deal was signed");
  mcAssert("59 complementiser 'that' untouched", r9.resolved.indexOf("that the deal") !== -1);
  const r10 = mcResolve(s10, "tell me more about that");
  mcAssert("60 'that' resolves to a non-person when available",
    r10.substitutions.length === 1 && r10.substitutions[0].to.indexOf("Merkel") === -1);

  /* 61-63: utterance "it" after a speech verb is left alone. */
  const r11 = mcResolve(s1, "when did he say it");
  mcAssert("61 speech-verb 'it' untouched", /\bit\b/.test(r11.resolved));
  mcAssert("62 but 'he' in the same turn still resolves", r11.resolved.indexOf("Zelensky") !== -1);
  mcAssert("63 exactly one substitution for that turn", r11.substitutions.length === 1);

  /* 64-65: intent + slots. */
  mcAssert("64 lastIntent classified", s8.lastIntent === "question" || s8.lastIntent === "follow_up");
  mcAssert("65 slots populated by type", s10.slots.person === "Angela Merkel" &&
    s10.slots.place === "Germany" && s10.slots.org === "Siemens AG");

  const mcTotal = mcPass + mcFail;
  if (mcFail) {
    console.log("FAIL — " + mcFail + " of " + mcTotal + " assertions failed:");
    for (let i = 0; i < mcFailures.length; i++) console.log("  x " + mcFailures[i]);
    process.exit(1);
  } else {
    console.log("PASS — " + mcPass + "/" + mcTotal + " assertions passed.");
  }
}
