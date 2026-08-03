/* ============================================================================
 * mcSentiment — lexicon-based sentiment analysis tuned for NEWS HEADLINES.
 *
 * Why a bespoke lexicon instead of stock AFINN: general-purpose lexicons are
 * built from tweets and product reviews, so they rate "killed" around -3 and
 * miss newswire staples entirely ("casualties", "indicted", "ceasefire",
 * "layoffs", "outage"). Headlines are also terse — six to twelve tokens with no
 * subject pronouns — so every scored term carries a lot of weight and a single
 * mis-signed word visibly flips a story. The valences below are set for the
 * *event*, not the word's conversational tone: a death is -4 regardless of how
 * neutrally it is phrased.
 *
 * Deliberately NOT in the lexicon: "shares", "report", "official", "earnings",
 * "rates", "steady", "market", "statement". Their newswire sense is neutral;
 * including them adds a constant bias to every finance/politics headline.
 *
 * KNOWN LIMITATION — direction verbs. "Unemployment falls to record low" scores
 * negative and "Growth slows" scores positive, because a bag-of-words model
 * reads the noun and cannot apply the verb to it. The obvious fix (let "falls"
 * invert the preceding term) is a trap: it only reaches the nearest token, so
 * "Peace talks collapse" flips "talks" and strands "peace" at +3, landing on
 * neutral — trading one error class for another. Doing this properly needs a
 * dependency parse, which is out of scope for a zero-dependency module. Treat
 * scores on macro-indicator headlines (unemployment, inflation, deficit) as
 * topic charge rather than direction.
 * ==========================================================================*/

/* word -> valence on the AFINN-style integer scale [-4, 4].
 * Grouped by newsroom desk so the values can be sanity-checked against each
 * other rather than in isolation — relative ordering matters more than the
 * absolute numbers once the score is squashed. */
const mcSentLex = {
  // --- Death & casualties -------------------------------------------------
  killed: -4, kills: -4, kill: -4, killing: -4, killings: -4, dead: -4,
  death: -4, deaths: -4, died: -4, dies: -4, dying: -3, fatal: -4,
  fatalities: -4, fatality: -4, massacre: -4, massacred: -4, genocide: -4,
  murder: -4, murdered: -4, murders: -4, slain: -4, assassinated: -4,
  assassination: -4, execution: -3, casualties: -3, casualty: -3,
  wounded: -3, injured: -3, injuries: -3, injury: -2, maimed: -4,
  deadly: -3, lethal: -3, perished: -4, victims: -3, victim: -3,
  bereaved: -3, funeral: -2, toll: -2, morgue: -3, corpses: -3,

  // --- Violence, war & unrest --------------------------------------------
  attack: -3, attacks: -3, attacked: -3, assault: -3, bomb: -3, bombs: -3,
  bombing: -4, bombed: -4, explosion: -3, explosions: -3, exploded: -3,
  blast: -3, airstrike: -3, airstrikes: -3, shelling: -3, shooting: -3,
  shootings: -3, gunman: -3, gunfire: -3, stabbing: -3, terror: -4,
  terrorist: -4, terrorism: -4, insurgency: -3, militants: -2, war: -3,
  warfare: -3, invasion: -3, invaded: -3, clashes: -2, clash: -2,
  fighting: -2, combat: -2, hostilities: -3, siege: -3, hostage: -3,
  hostages: -3, kidnapped: -3, abducted: -3, abduction: -3, torture: -4,
  atrocity: -4, atrocities: -4, ambush: -3, raid: -2, coup: -3,
  insurrection: -3, riot: -3, riots: -3, unrest: -2, uprising: -2,
  violence: -3, violent: -3, brutal: -3, brutality: -3, crackdown: -2,
  repression: -3, oppression: -3, persecution: -3, militia: -2,
  conflict: -2, mutiny: -2, shelled: -3,

  // --- Disaster, accident & infrastructure -------------------------------
  disaster: -3, catastrophe: -4, catastrophic: -4, earthquake: -3, quake: -3,
  tsunami: -4, hurricane: -3, cyclone: -3, typhoon: -3, tornado: -3,
  flood: -3, floods: -3, flooding: -3, flooded: -3, wildfire: -3,
  wildfires: -3, blaze: -2, fire: -2, fires: -2, inferno: -3, drought: -3,
  famine: -4, starvation: -4, landslide: -3, avalanche: -3, eruption: -2,
  derailment: -3, crash: -3, crashed: -3, collision: -2, capsized: -3,
  wreckage: -3, evacuated: -2, evacuation: -2, evacuate: -2, stranded: -2,
  trapped: -3, rubble: -2, devastation: -4, devastated: -4, destroyed: -3,
  destruction: -3, damage: -2, damaged: -2, ruined: -3, wrecked: -3,
  hazard: -2, spill: -2, contamination: -3, toxic: -3, meltdown: -3,
  outage: -2, outages: -2, blackout: -2, breakdown: -2, sinkhole: -2,
  collapse: -3, collapsed: -3, submerged: -2,

  // --- Public health ------------------------------------------------------
  outbreak: -3, epidemic: -3, pandemic: -3, infection: -2, infected: -2,
  disease: -2, illness: -2, hospitalised: -2, hospitalized: -2,
  quarantine: -2, contagion: -3, overdose: -3, poisoning: -3,
  malnutrition: -3, cholera: -3, ebola: -3, measles: -2, sepsis: -3,

  // --- Markets & macro-economics (negative) ------------------------------
  crisis: -3, recession: -3, downturn: -2, slump: -3, slumped: -3,
  plunge: -3, plunged: -3, plummet: -3, plummeted: -3, tumble: -2,
  tumbled: -2, sank: -2, bankruptcy: -3, bankrupt: -3, insolvency: -3,
  default: -3, defaulted: -3, deficit: -2, inflation: -2, stagflation: -3,
  layoffs: -3, layoff: -3, redundancies: -3, unemployment: -3, jobless: -3,
  fired: -2, sacked: -2, downsizing: -2, austerity: -2, shortfall: -2,
  losses: -2, loss: -2, misses: -2, weak: -2, weakness: -2, sluggish: -2,
  stagnation: -2, slowdown: -2, decline: -2, declined: -2, declines: -2,
  dropped: -2, fell: -2, falling: -2, shrank: -2, contraction: -2,
  downgrade: -2, downgraded: -2, selloff: -2, rout: -3, turmoil: -3,
  correction: -1, volatility: -1, debt: -1, glut: -1, arrears: -2,

  // --- Law, crime & politics (negative) ----------------------------------
  indicted: -3, indictment: -3, charged: -2, arrested: -2, arrest: -2,
  convicted: -3, conviction: -3, guilty: -3, sentenced: -2, jailed: -3,
  imprisoned: -3, prison: -2, fraud: -3, corruption: -3, corrupt: -3,
  bribery: -3, embezzlement: -3, scandal: -3, allegations: -2, alleged: -1,
  lawsuit: -2, sued: -2, fined: -2, penalty: -2, sanctions: -2,
  sanctioned: -2, embargo: -2, tariffs: -1, ban: -2, banned: -2,
  blocked: -2, censured: -2, impeached: -3, impeachment: -3, ousted: -3,
  resigned: -2, resignation: -2, resigns: -2, dismissed: -2, expelled: -2,
  suspended: -2, recall: -2, recalled: -2, boycott: -2, protest: -2,
  protests: -2, protesters: -1, strike: -2, strikes: -2, walkout: -2,
  dispute: -2, feud: -2, standoff: -2, deadlock: -2, stalemate: -2,
  gridlock: -2, impasse: -2, veto: -1, backlash: -2, criticism: -2,
  criticised: -2, criticized: -2, condemned: -3, condemns: -3,
  denounced: -3, slammed: -2, accused: -2, blame: -2, blamed: -2,
  probe: -1, investigation: -1, whistleblower: -1, breach: -2, leaked: -2,
  hacked: -3, ransomware: -3, censorship: -2, expulsion: -2, purge: -3,

  // --- General negative affect -------------------------------------------
  bad: -2, worse: -3, worst: -4, terrible: -3, horrific: -4, horrible: -3,
  awful: -3, tragic: -4, tragedy: -4, grim: -2, bleak: -2, dire: -3,
  fear: -2, fears: -2, panic: -3, alarm: -2, anxiety: -2, distress: -2,
  suffering: -3, suffer: -3, grief: -3, mourning: -3, mourns: -2,
  outrage: -3, anger: -2, angry: -2, furious: -3, hatred: -3, hostile: -2,
  chaos: -3, chaotic: -3, failure: -3, failed: -3, setback: -2, blow: -2,
  struggle: -2, struggling: -2, crippled: -3, doomed: -3, danger: -3,
  dangerous: -3, unsafe: -2, risk: -1, risky: -2, threat: -3, threats: -3,
  threatened: -3, threatens: -3, warn: -2, warns: -2, warned: -2,
  warning: -2, controversy: -2, controversial: -2, delay: -1, delays: -1,
  delayed: -1, shortage: -2, backlog: -1, complaint: -1, scrutiny: -1,

  // --- Rescue, relief & recovery (positive) ------------------------------
  // "rescued" is +4, the mirror image of "killed": in a rescue story the
  // peril ("trapped", "collapse") is always named too, and at +3 it merely
  // cancels out. The outcome is the news, so it has to outweigh the setup.
  rescued: 4, rescue: 3, rescues: 3, saved: 3, survivor: 2, survivors: 2,
  survived: 3, recovered: 2, recovery: 2, relief: 2, aid: 2,
  humanitarian: 2, donated: 2, donation: 2, charity: 2, volunteers: 1,
  healed: 2, cured: 3, cure: 3, vaccine: 2, remedy: 2, safe: 2, safety: 1,
  secure: 2, stability: 2, calm: 1, freed: 3, released: 2, liberated: 3,
  reunited: 3, sheltered: 1, restored: 2, reopened: 2, repaired: 2,

  // --- Peace & diplomacy --------------------------------------------------
  ceasefire: 3, truce: 3, peace: 3, peaceful: 3, agreement: 2, agreed: 2,
  agrees: 2, deal: 2, accord: 2, treaty: 2, pact: 2, settlement: 2,
  settled: 2, resolution: 2, resolved: 2, reconciliation: 3, talks: 1,
  negotiations: 1, diplomacy: 2, cooperation: 2, alliance: 2,
  partnership: 2, unity: 2, compromise: 1, pardon: 2, amnesty: 2,
  disarmament: 2,

  // --- Markets & macro-economics (positive) ------------------------------
  surge: 3, surged: 3, surges: 3, soar: 3, soars: 3, soared: 3, rally: 2,
  rallied: 2, jump: 2, jumped: 2, climb: 2, climbed: 2, rise: 2, rose: 2,
  rising: 2, gains: 2, gained: 2, rebound: 3, rebounded: 3, boom: 3,
  booming: 3, growth: 2, grew: 2, expansion: 2, expanding: 2, profit: 2,
  profits: 2, profitable: 3, beat: 2, beats: 2, outperformed: 3,
  upgrade: 2, upgraded: 2, stimulus: 2, investment: 2, funding: 2,
  hiring: 2, hires: 2, employment: 2, dividend: 1, windfall: 3,
  bailout: 1, subsidy: 1, surplus: 2, boost: 2, boosted: 2, boosts: 2,
  strong: 2, strength: 2, robust: 3, resilient: 3, thriving: 3,
  prosperity: 3, bullish: 2, optimism: 2, optimistic: 2, confidence: 2,
  rebounding: 3,

  // --- Achievement, approval & progress ----------------------------------
  breakthrough: 3, milestone: 2, historic: 2, landmark: 2, triumph: 3,
  victory: 3, win: 3, wins: 3, won: 3, winner: 2, champion: 2, success: 3,
  successful: 3, achievement: 3, achieved: 2, award: 2, awarded: 2,
  honoured: 2, honored: 2, praised: 2, praise: 2, hailed: 2,
  celebrated: 3, celebration: 2, applauded: 2, acclaimed: 3, approved: 2,
  approval: 2, endorsed: 2, cleared: 2, innovation: 2, innovative: 2,
  pioneering: 3, advance: 2, advances: 2, progress: 2, improvement: 2,
  improved: 2, improves: 2, reform: 1, elected: 2, reelected: 2,
  appointed: 1, promoted: 2, upheld: 1, ratified: 2,

  // --- General positive affect -------------------------------------------
  good: 2, great: 3, excellent: 4, outstanding: 4, best: 3, better: 2,
  wonderful: 4, amazing: 4, remarkable: 3, impressive: 3, positive: 2,
  hope: 2, hopeful: 2, hopes: 1, joy: 3, happy: 3, delight: 3, proud: 2,
  pride: 2, encouraging: 2, promising: 2, welcomed: 2, welcome: 2,
  support: 1, grateful: 2, generous: 2, brave: 3, heroic: 3, hero: 3,
  courage: 3, inspiring: 3, beloved: 3, popular: 2, favourable: 2,
  favorable: 2, benefit: 2, benefits: 2, opportunity: 2
};

/* Negators that appear BEFORE the sentiment word.
 * This is not optional polish: "no casualties" and "averted disaster" are
 * everywhere in breaking news, and without sign-flipping they score as the
 * *worst* possible headlines when they actually report a good outcome.
 * Note these tokens are never scored themselves — see mcSentAssertDisjoint
 * in the self-test, which enforces that they stay out of mcSentLex. */
const mcSentNegators = {
  no: 1, not: 1, never: 1, none: 1, nor: 1, neither: 1, without: 1,
  lacks: 1, lacking: 1, cannot: 1, cant: 1, dont: 1, doesnt: 1, didnt: 1,
  isnt: 1, wasnt: 1, arent: 1, werent: 1, wont: 1, hasnt: 1, havent: 1,
  couldnt: 1, wouldnt: 1, shouldnt: 1,
  denies: 1, denied: 1, deny: 1, denying: 1, denial: 1,
  rejects: 1, rejected: 1, reject: 1, rejecting: 1,
  refuses: 1, refused: 1, refuse: 1, refusing: 1,
  halts: 1, halt: 1, halted: 1, halting: 1,
  avoids: 1, avoid: 1, avoided: 1, avoiding: 1,
  prevents: 1, prevent: 1, prevented: 1, preventing: 1,
  averts: 1, avert: 1, averted: 1, averting: 1,
  foils: 1, foiled: 1, thwarts: 1, thwarted: 1,
  cancels: 1, cancelled: 1, canceled: 1, spared: 1, scrapped: 1
};

/* Negators that trail the noun they cancel — headline-ese puts the verb last:
 * "Disaster averted", "Strike called off", "Attack foiled", "Charges dropped".
 * A strictly backward-looking window would miss every one of these, so we also
 * look 1-2 tokens AHEAD for this narrower set. */
const mcSentPostNegators = {
  averted: 1, avoided: 1, prevented: 1, foiled: 1, thwarted: 1, halted: 1,
  denied: 1, rejected: 1, cancelled: 1, canceled: 1, spared: 1, scrapped: 1
};

/* Intensifiers (1.5x) and diminishers (0.5x) in one table — they play the same
 * structural role and differ only in the multiplier. "record" and "major" are
 * here rather than in the lexicon because on their own they are directionless:
 * a "record" can be a record profit or a record death toll. */
const mcSentBoosters = {
  very: 1.5, extremely: 1.5, massive: 1.5, massively: 1.5, severe: 1.5,
  severely: 1.5, major: 1.5, record: 1.5, huge: 1.5, hugely: 1.5,
  sharp: 1.5, sharply: 1.5, deeply: 1.5, highly: 1.5, widespread: 1.5,
  dramatic: 1.5, dramatically: 1.5, unprecedented: 1.5, utterly: 1.5,
  completely: 1.5, totally: 1.5,
  slight: 0.5, slightly: 0.5, somewhat: 0.5, minor: 0.5, modest: 0.5,
  modestly: 0.5, partial: 0.5, partially: 0.5, marginal: 0.5,
  marginally: 0.5, mild: 0.5, mildly: 0.5, limited: 0.5, brief: 0.5,
  briefly: 0.5, small: 0.5, little: 0.5
};

/* After a contrast marker the writer is telling you what actually matters —
 * "Markets rally BUT analysts warn". Weighting the tail clause 1.3x lets it
 * outvote the lede without erasing it. */
const mcSentContrast = {
  but: 1, however: 1, though: 1, although: 1, yet: 1, nevertheless: 1,
  nonetheless: 1
};

/* Multi-token negators. Checked as bigrams before single-token lookup so that
 * "fails" in "fails to" is consumed as grammar rather than scored as -3. */
const mcSentPhraseNegators = {
  "fails to": 1, "fail to": 1, "failed to": 1, "unable to": 1,
  "declines to": 1, "declined to": 1, "stops short": 1, "falls short": 1
};

const mcSentNegWindow = 3;      // tokens to look back for a negator
const mcSentPostWindow = 2;     // tokens to look ahead for a trailing negator
const mcSentBoostWindow = 2;    // "record earnings beat" needs 2, not 1
const mcSentContrastWeight = 1.3;

/* Lowercase, strip punctuation, drop apostrophes so "doesn't" -> "doesnt"
 * and matches the negator table. Hyphens split ("record-breaking" -> two
 * tokens) which is what we want: the booster still lands on the next term. */
function mcSentTokenize(text) {
  if (typeof text !== "string" || text.length === 0) return [];
  return text
    .toLowerCase()
    .replace(/[‘’ʼ']/g, "")
    .split(/[^a-z0-9]+/)
    .filter(function (t) { return t.length > 0; });
}

/* Smooth squashing: score = sum / sqrt(sum^2 + alpha).
 * A hard clamp to [-1, 1] destroys information exactly where headlines are most
 * interesting — once two strong terms fire, every worse headline also reads
 * -1.0 and ranking becomes impossible. This curve is strictly monotonic and
 * only approaches the asymptote, so "killed" (-0.72) still sorts above
 * "killed dead massacre" (-0.94). alpha=15 puts the knee around a raw sum of
 * ~4, i.e. one strong term, which is where headline scores actually live. */
function mcSentSquash(sum) {
  return sum / Math.sqrt(sum * sum + 15);
}

function mcSentLabel(score) {
  if (score <= -0.65) return "very negative";
  if (score <= -0.2) return "negative";
  if (score < 0.2) return "neutral";
  if (score < 0.65) return "positive";
  return "very positive";
}

function mcSentRound(n) {
  return Math.round(n * 1000) / 1000;
}

/**
 * Analyse a headline (or any short text).
 * @param {string} text
 * @returns {{score:number, label:string, magnitude:number, hits:Array}}
 *   score     — squashed to (-1, 1), sign = polarity
 *   magnitude — sum of |weighted valence| BEFORE negation flips anything. A
 *               negated term is still emotionally loaded: "no casualties" is
 *               about casualties. Magnitude answers "how charged is this
 *               story", score answers "which way".
 *   hits[].valence is the EFFECTIVE contribution (boosted, contrast-weighted
 *               and sign-flipped). The raw dictionary value is in mcSentLex.
 */
function mcSentiment(text) {
  const tokens = mcSentTokenize(text);
  const hits = [];
  let sum = 0;
  let magnitude = 0;

  if (tokens.length === 0) {
    return { score: 0, label: "neutral", magnitude: 0, hits: hits };
  }

  // Pass 1: mark which positions act as negators (single or phrase) so the
  // scoring pass can do cheap window lookups instead of re-parsing.
  const isNegator = new Array(tokens.length).fill(false);
  const consumed = new Array(tokens.length).fill(false);
  for (let i = 0; i < tokens.length; i++) {
    if (i + 1 < tokens.length &&
        mcSentPhraseNegators[tokens[i] + " " + tokens[i + 1]] === 1) {
      isNegator[i] = true;
      consumed[i] = true;
      consumed[i + 1] = true;
      i++; // skip the particle
      continue;
    }
    if (mcSentNegators[tokens[i]] === 1) {
      isNegator[i] = true;
      consumed[i] = true;
    }
  }

  let contrastActive = false;

  for (let i = 0; i < tokens.length; i++) {
    const word = tokens[i];

    if (mcSentContrast[word] === 1) {
      contrastActive = true;
      continue;
    }
    if (consumed[i]) continue;                       // negator: grammar, not affect
    if (mcSentBoosters[word] !== undefined) continue; // modifier: no valence of its own
    if (!Object.prototype.hasOwnProperty.call(mcSentLex, word)) continue;

    const base = mcSentLex[word];

    // Boosters/diminishers stack multiplicatively within the window, so
    // "very severe" compounds — rare in headlines but harmless when it happens.
    let mult = 1;
    let boosted = false;
    for (let b = Math.max(0, i - mcSentBoostWindow); b < i; b++) {
      const m = mcSentBoosters[tokens[b]];
      if (m !== undefined) {
        mult *= m;
        boosted = true;
      }
    }

    let negated = false;
    for (let n = Math.max(0, i - mcSentNegWindow); n < i; n++) {
      if (isNegator[n]) { negated = true; break; }
    }
    if (!negated) {
      const end = Math.min(tokens.length - 1, i + mcSentPostWindow);
      for (let p = i + 1; p <= end; p++) {
        if (mcSentPostNegators[tokens[p]] === 1) { negated = true; break; }
      }
    }

    if (contrastActive) mult *= mcSentContrastWeight;

    const weighted = base * mult;
    magnitude += Math.abs(weighted);
    const contribution = negated ? -weighted : weighted;
    sum += contribution;

    hits.push({
      word: word,
      valence: mcSentRound(contribution),
      negated: negated,
      boosted: boosted
    });
  }

  const score = mcSentSquash(sum);
  return {
    score: mcSentRound(score),
    label: mcSentLabel(score),
    magnitude: mcSentRound(magnitude),
    hits: hits
  };
}

/* ==========================================================================
 * Self-test. Node-only; the guard short-circuits in the browser because
 * `module` is undefined there.
 * ========================================================================*/
if (typeof module !== "undefined" && require.main === module) {
  let passed = 0;
  const failures = [];

  function mcAssert(cond, msg) {
    if (cond) { passed++; } else { failures.push(msg); }
  }

  const s = function (t) { return mcSentiment(t).score; };
  const L = function (t) { return mcSentiment(t).label; };

  // 1-2: catastrophic event headline
  const explosion = mcSentiment("Explosion at chemical plant kills three");
  mcAssert(explosion.score < -0.6, "explosion headline should be strongly negative, got " + explosion.score);
  mcAssert(explosion.label === "very negative", "explosion label, got " + explosion.label);

  // 3-4: negation ordering — the whole reason negation handling exists
  const noCas = mcSentiment("No casualties reported after factory fire");
  const cas = mcSentiment("Casualties reported after factory fire");
  mcAssert(noCas.score > cas.score, "'No casualties' must be less negative than 'Casualties': " + noCas.score + " vs " + cas.score);
  mcAssert(noCas.hits.some(function (h) { return h.word === "casualties" && h.negated; }), "'casualties' should be flagged negated");

  // 5: trailing negator
  const averted = mcSentiment("Disaster averted as crews contain the blaze");
  mcAssert(averted.score > -0.4, "'Disaster averted' should not be strongly negative, got " + averted.score);

  // 6-7: strong positive
  const soar = mcSentiment("Shares soar on record earnings beat");
  mcAssert(soar.score > 0.6, "'Shares soar on record earnings beat' should be strongly positive, got " + soar.score);
  mcAssert(soar.label === "very positive", "soar label, got " + soar.label);

  // 8: contrast clause pulls the score down
  const rallyPlain = s("Markets rally");
  const rallyBut = s("Markets rally but analysts warn of a correction");
  mcAssert(rallyBut < rallyPlain, "contrast clause must pull score down: " + rallyBut + " vs " + rallyPlain);

  // 9-10: genuinely neutral central-bank boilerplate
  const rates = mcSentiment("Central bank holds rates steady");
  mcAssert(Math.abs(rates.score) < 0.25, "'holds rates steady' should be near neutral, got " + rates.score);
  mcAssert(rates.label === "neutral", "rates label, got " + rates.label);

  // 11: positive despite a negative token in the sentence
  mcAssert(s("Ceasefire agreed after months of fighting") > 0, "ceasefire headline should be positive");

  // 12-15: degenerate input
  const empty = mcSentiment("");
  mcAssert(empty.score === 0 && empty.label === "neutral", "empty string -> neutral");
  mcAssert(empty.magnitude === 0 && empty.hits.length === 0, "empty string -> no hits, zero magnitude");
  const punct = mcSentiment("!!! ... ??? --- ,,,");
  mcAssert(punct.score === 0 && punct.label === "neutral", "punctuation-only -> neutral");
  mcAssert(mcSentiment(undefined).label === "neutral" && mcSentiment(null).score === 0, "non-string input must not crash");

  // 16-17: magnitude semantics
  const loaded = mcSentiment("brutal deadly catastrophic attack");
  const dull = mcSentiment("minor delay");
  mcAssert(loaded.magnitude > dull.magnitude, "loaded magnitude " + loaded.magnitude + " must exceed " + dull.magnitude);
  mcAssert(mcSentiment("No casualties").magnitude > 0, "negated terms still count toward magnitude");

  // 18: case and punctuation insensitivity
  mcAssert(s("KILLED") === s("killed") && s("Killed!") === s("killed"), "case/punctuation insensitive");

  // 19-20: squashing does not saturate and stays in range
  const pile = s("killed dead massacre genocide slaughter murdered terror atrocity war famine");
  mcAssert(pile > -1 && pile < -0.9, "many negatives approach but never reach -1, got " + pile);
  mcAssert(s("killed dead massacre") < s("killed"), "more negative terms must rank lower");
  mcAssert(Math.abs(s("victory triumph breakthrough win success celebrated")) <= 1, "score stays within [-1, 1]");

  // 21-23: negation, boosting, diminishing on the same base word
  mcAssert(s("not guilty") > s("guilty"), "negation flips 'guilty'");
  mcAssert(s("no injuries") > 0, "'no injuries' should read positive");
  mcAssert(s("massive fire") < s("fire"), "intensifier deepens negativity");
  mcAssert(s("minor fire") > s("fire"), "diminisher softens negativity");

  // 24-25: news-tuned valences
  mcAssert(mcSentLex.killed === -4, "'killed' must be -4, not a mild -1");
  mcAssert(mcSentLex.casualties <= -3 && mcSentLex.ceasefire >= 3, "casualty/ceasefire valences");

  // 26: boosted flag surfaces in hits, including across an intervening noun
  const rb = mcSentiment("record-breaking growth");
  mcAssert(rb.hits.some(function (h) { return h.word === "growth" && h.boosted; }), "'record' should boost 'growth' across a hyphen");

  // 27-28: denial and rescue
  mcAssert(s("Company denies fraud allegations") > s("Company confirms fraud allegations"), "'denies' must soften the fraud claim");
  mcAssert(s("Rescued after 12 hours trapped in mine") > 0, "rescue headline should be positive");

  // 29: lexicon integrity
  const lexKeys = Object.keys(mcSentLex);
  mcAssert(lexKeys.length >= 320, "lexicon must have >= 320 entries, has " + lexKeys.length);
  mcAssert(lexKeys.every(function (k) {
    const v = mcSentLex[k];
    return Number.isInteger(v) && v >= -4 && v <= 4 && v !== 0;
  }), "every valence is a non-zero integer in [-4, 4]");

  // 30: modifier tables must not overlap the lexicon, or a word would both
  // carry valence and modify its neighbour.
  const overlap = lexKeys.filter(function (k) {
    return mcSentNegators[k] === 1 || mcSentBoosters[k] !== undefined ||
           mcSentContrast[k] === 1 || mcSentPostNegators[k] === 1;
  });
  mcAssert(overlap.length === 0, "lexicon overlaps modifier tables: " + overlap.join(", "));

  // 31: deliberately-excluded neutral newswire nouns
  mcAssert(["shares", "report", "official", "earnings", "rates", "steady"]
    .every(function (w) { return mcSentLex[w] === undefined; }), "neutral newswire nouns must stay out of the lexicon");

  // 32: hits are consistent with the reported score
  const chk = mcSentiment("Ceasefire agreed after months of fighting");
  const chkSum = chk.hits.reduce(function (a, h) { return a + h.valence; }, 0);
  mcAssert(Math.abs(chk.score - mcSentSquash(chkSum)) < 0.01, "score must be the squash of the summed hit valences");
  mcAssert(chk.hits.every(function (h) { return mcSentLex[h.word] !== undefined; }), "every hit word comes from the lexicon");

  // 33-35: assorted realistic headlines
  mcAssert(L("Wildfire forces evacuation of 5,000 homes") === "very negative" || s("Wildfire forces evacuation of 5,000 homes") < -0.6, "wildfire headline strongly negative");
  mcAssert(s("Breakthrough treatment approved by regulators") > 0.6, "breakthrough headline strongly positive");
  mcAssert(s("CEO resigns amid corruption probe") < -0.5, "resignation/corruption headline negative");
  mcAssert(s("Truce holds after ceasefire agreement") > 0.6, "truce headline strongly positive");
  mcAssert(s("Talks fail to end hostage standoff") > s("Hostage standoff continues"), "'fail to' phrase negator applies");

  const total = passed + failures.length;
  failures.forEach(function (f) { console.log("FAIL: " + f); });
  console.log((failures.length === 0 ? "PASS" : "FAIL") +
    " — " + passed + "/" + total + " assertions passed; lexicon " +
    Object.keys(mcSentLex).length + " entries");
  if (failures.length > 0) process.exit(1);
}
