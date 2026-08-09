// table.js — a tabular data engine: CSV/TSV parsing, type inference, query,
// aggregation and export. Plain script-scope JS, no dependencies, no DOM.
// Every top-level binding is prefixed `mcTb`.
//
// ===================================================================
// NULL / EMPTY / MISSING — the three-state contract (read this first)
// ===================================================================
// Three different things that other libraries flatten into one:
//
//   MISSING   value === undefined   The column did not exist for this row.
//                                   Produced by a ragged row that is SHORT of
//                                   the header, by mcTbConcat when one side
//                                   lacks the column, and by a left join miss.
//   NULL      value === null        The cell was present and explicitly said
//                                   "no value": its text matched a null token
//                                   ("NULL", "NA", "N/A", "None", "nil",
//                                   "#N/A", "NaN" — case-insensitive, trimmed).
//                                   The raw text is preserved, so export puts
//                                   the user's own token back.
//   EMPTY     value === ""          The cell was present and blank (`a,,b`).
//                                   A known value that happens to have no
//                                   characters. Distinct from NULL: "the field
//                                   was left blank" is not "the field is not
//                                   applicable".
//
// `-` and `--` are deliberately NOT null tokens. In real pasted data a lone
// dash is far more often a literal value (a ticker, a placeholder the user
// means to keep, a minus) than a null marker, and misreading it silently
// deletes data. Callers who want it can pass `nullTokens`.
//
// AGGREGATION DECISION: all three states are SKIPPED, never poisoned and never
// coerced to zero. mean/sum/median/stddev/min/max ignore them; `count` counts
// values that are present and non-null; `size` counts rows; `nulls` counts the
// skipped ones. If a group has zero usable values every numeric aggregate
// returns null — not 0, not NaN. Returning 0 for "sum of nothing" asserts a
// fact that is not in the data, so we follow SQL and return null. The skipped
// states stay distinguishable everywhere else: mcTbDescribe reports `nulls`,
// `empties` and `missing` separately.
//
// OTHER STANDING DECISIONS
//   * Raw text is kept beside every parsed value. A cell that does not match
//     its column's inferred type keeps its raw string AS the value — inference
//     never destroys data, it only annotates it.
//   * All operations return new tables. Nothing mutates its input.
//   * Dates are interpreted as UTC unless the text carries an explicit offset,
//     so a file parses identically on every machine.
//   * Nulls sort LAST in both directions, so "top 10 by revenue" is never a
//     list of blanks.
//   * No public function throws. Bad input degrades to an empty table, null,
//     or "" — the documented sentinel for that function.
//   * Non-finite numbers (NaN, Infinity) are treated as null on export; CSV
//     has no spelling for them and "NaN" in a cell is worse than blank.

var mcTbVERSION = "1.0.0";

/* ================================================================== *
 * Section 1 — primitives
 * ================================================================== */

var mcTbHTML_ENTITIES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "`": "&#96;"
};

// Escape for HTML text AND attribute contexts. The backtick is included
// because old IE treats it as an attribute delimiter; the cost is one more
// character in a regex class and it removes a whole class of surprise.
function mcTbEscapeHtml(value) {
  var s = mcTbStr(value);
  if (s === "") return "";
  return s.replace(/[&<>"'`]/g, function (ch) {
    return mcTbHTML_ENTITIES[ch];
  });
}

// Coerce anything to a string without throwing. Objects go through a guarded
// JSON.stringify because a table cell holding an object is a caller mistake we
// should render, not crash on.
function mcTbStr(value) {
  if (typeof value === "string") return value;
  if (value === null || value === undefined) return "";
  if (typeof value === "number") return Number.isFinite(value) ? String(value) : "";
  if (typeof value === "boolean") return value ? "true" : "false";
  if (value instanceof Date) return mcTbFormatDate(value);
  try {
    var s = JSON.stringify(value);
    return typeof s === "string" ? s : String(value);
  } catch (e) {
    return "[object]";
  }
}

function mcTbIsNull(v) {
  return v === null || v === undefined;
}

// "Blank" = nothing usable. The union of MISSING, NULL and EMPTY, and the
// exact set that aggregation skips.
function mcTbIsBlank(v) {
  return v === null || v === undefined || v === "";
}

function mcTbIsNum(v) {
  return typeof v === "number" && Number.isFinite(v);
}

// Round for display; also the last non-finite backstop. Returns null (not NaN)
// so a bad number can never reach an output string.
function mcTbRound(n, places) {
  if (typeof n !== "number" || !Number.isFinite(n)) return null;
  var f = Math.pow(10, places === undefined ? 6 : places);
  var r = Math.round(n * f) / f;
  return Number.isFinite(r) ? r : null;
}

// Numeric view of a value for sum/mean/stddev. Dates become epoch ms. Booleans
// are deliberately NOT numeric: silently summing true as 1 is the kind of
// coercion this module exists to avoid. Filter and count instead.
function mcTbNumericOf(v) {
  if (typeof v === "number") return Number.isFinite(v) ? v : null;
  if (v instanceof Date) {
    var t = v.getTime();
    return Number.isFinite(t) ? t : null;
  }
  return null;
}

function mcTbTypeRank(v) {
  if (typeof v === "number") return 0;
  if (v instanceof Date) return 1;
  if (typeof v === "boolean") return 2;
  if (typeof v === "string") return 3;
  return 4;
}

// Total order across heterogeneous values. Cross-type comparison falls back to
// a fixed type rank so sorting a mixed column is deterministic rather than
// engine-defined. Strings compare with localeCompare-free codepoint order:
// localeCompare is locale-dependent and would make results machine-specific.
function mcTbCompareValues(a, b) {
  var ra = mcTbTypeRank(a);
  var rb = mcTbTypeRank(b);
  if (ra !== rb) return ra < rb ? -1 : 1;
  if (ra === 0) return a < b ? -1 : a > b ? 1 : 0;
  if (ra === 1) {
    var ta = a.getTime();
    var tb = b.getTime();
    if (!Number.isFinite(ta) && !Number.isFinite(tb)) return 0;
    if (!Number.isFinite(ta)) return 1;
    if (!Number.isFinite(tb)) return -1;
    return ta < tb ? -1 : ta > tb ? 1 : 0;
  }
  if (ra === 2) return a === b ? 0 : a ? 1 : -1;
  if (ra === 3) return a < b ? -1 : a > b ? 1 : 0;
  var sa = mcTbStr(a);
  var sb = mcTbStr(b);
  return sa < sb ? -1 : sa > sb ? 1 : 0;
}

// Public comparator: blanks last, ascending.
function mcTbCompare(a, b) {
  return mcTbCompareDir(a, b, false);
}

// Blanks are pinned last regardless of direction. Postgres-style NULLS LAST in
// ASC is conventional, but flipping them to first in DESC (which SQL does)
// makes "worst 10" return blanks, which is never what a UI wants.
function mcTbCompareDir(a, b, desc) {
  var ab = mcTbIsBlank(a);
  var bb = mcTbIsBlank(b);
  if (ab && bb) return 0;
  if (ab) return 1;
  if (bb) return -1;
  var c = mcTbCompareValues(a, b);
  return desc ? -c : c;
}

// Unambiguous string key for grouping/joining. Length-prefixing each part means
// no separator can be forged by cell content, and the leading tag keeps the
// three blank states apart (a group of MISSING is not a group of EMPTY).
function mcTbKeyString(v) {
  if (v === undefined) return "\x00u";
  if (v === null) return "\x00n";
  if (typeof v === "string") return "s" + v.length + ":" + v;
  if (typeof v === "number") return Number.isFinite(v) ? "n" + String(v) : "\x00x";
  if (typeof v === "boolean") return v ? "b1" : "b0";
  if (v instanceof Date) {
    var t = v.getTime();
    return Number.isFinite(t) ? "d" + t : "\x00x";
  }
  var s = mcTbStr(v);
  return "o" + s.length + ":" + s;
}

function mcTbKeyOf(values) {
  var out = "";
  for (var i = 0; i < values.length; i++) out += mcTbKeyString(values[i]) + "|";
  return out;
}

/* ================================================================== *
 * Section 2 — value classification and parsing
 * ================================================================== */

var mcTbNULL_TOKENS = ["null", "na", "n/a", "#n/a", "nan", "none", "nil"];

var mcTbBOOL_TRUE = { "true": 1, "yes": 1, "y": 1, "t": 1 };
var mcTbBOOL_FALSE = { "false": 1, "no": 1, "n": 1, "f": 1 };

// 0/1 are excluded from boolean detection on purpose: they are integers far
// more often than flags, and typing a quantity column as boolean is a much
// worse error than failing to spot a 0/1 flag.

var mcTbRE_INT = /^[+-]?\d+$/;
var mcTbRE_INT_GROUPED = /^[+-]?\d{1,3}(?:,\d{3})+$/;
var mcTbRE_FLOAT = /^[+-]?(?:\d+\.\d*|\.\d+|\d+)(?:[eE][+-]?\d+)?$/;
var mcTbRE_FLOAT_GROUPED = /^[+-]?\d{1,3}(?:,\d{3})+\.\d+$/;
var mcTbCURRENCY_SYMBOLS = ["$", "£", "€", "¥", "₹", "₩", "₽"];
var mcTbCURRENCY_CODES = ["usd", "eur", "gbp", "jpy", "cad", "aud", "chf", "inr", "cny", "sek"];

var mcTbMONTHS = {
  jan: 1, january: 1, feb: 2, february: 2, mar: 3, march: 3, apr: 4, april: 4,
  may: 5, jun: 6, june: 6, jul: 7, july: 7, aug: 8, august: 8, sep: 9, sept: 9,
  september: 9, oct: 10, october: 10, nov: 11, november: 11, dec: 12, december: 12
};

// Digit grouping is only accepted when it is well-formed ("1,234,567").
// "1,23" is rejected rather than read as 123 — a malformed group is much more
// likely a European decimal comma or a busted export than a real number, and
// guessing there loses a factor of 100.
function mcTbStripGrouping(s) {
  if (s.indexOf(",") < 0) return s;
  if (mcTbRE_INT_GROUPED.test(s) || mcTbRE_FLOAT_GROUPED.test(s)) return s.replace(/,/g, "");
  return null;
}

// Numeric family parser. Handles sign, accounting parentheses, currency symbol
// or ISO code on either side, trailing percent, and digit grouping.
// Returns { ok, value, kind } with kind in integer|float|currency|percentage.
// Percentages keep their written magnitude ("85%" -> 85), not the fraction.
// Normalizing to 0.85 would make the stored number disagree with the cell the
// user is looking at, and every downstream mean would need a second decision
// about how to render it. Type + raw carry the "this is a percent" fact.
function mcTbParseNumberish(text) {
  var s = mcTbStr(text).trim();
  if (s === "") return { ok: false, value: null, kind: "" };
  var neg = false;
  var isCurrency = false;
  var isPercent = false;

  if (s.charAt(0) === "(" && s.charAt(s.length - 1) === ")") {
    neg = true;
    s = s.slice(1, -1).trim();
    isCurrency = true; // parenthesised negatives only occur in accounting output
  }
  if (s.charAt(s.length - 1) === "%") {
    isPercent = true;
    s = s.slice(0, -1).trim();
  }

  var i;
  for (i = 0; i < mcTbCURRENCY_SYMBOLS.length; i++) {
    var sym = mcTbCURRENCY_SYMBOLS[i];
    if (s.indexOf(sym) === 0) {
      s = s.slice(sym.length).trim();
      isCurrency = true;
      break;
    }
    if (s.length > sym.length && s.lastIndexOf(sym) === s.length - sym.length) {
      s = s.slice(0, -sym.length).trim();
      isCurrency = true;
      break;
    }
  }
  if (!isCurrency) {
    var low = s.toLowerCase();
    for (i = 0; i < mcTbCURRENCY_CODES.length; i++) {
      var code = mcTbCURRENCY_CODES[i];
      if (low.indexOf(code + " ") === 0) {
        s = s.slice(code.length).trim();
        isCurrency = true;
        break;
      }
      if (low.length > code.length && low.lastIndexOf(" " + code) === low.length - code.length - 1) {
        s = s.slice(0, s.length - code.length - 1).trim();
        isCurrency = true;
        break;
      }
    }
  }

  if (s.charAt(0) === "-") {
    neg = !neg;
    s = s.slice(1).trim();
  } else if (s.charAt(0) === "+") {
    s = s.slice(1).trim();
  }
  if (s === "") return { ok: false, value: null, kind: "" };

  var stripped = mcTbStripGrouping(s);
  if (stripped === null) return { ok: false, value: null, kind: "" };

  var kind;
  if (mcTbRE_INT.test(stripped)) kind = "integer";
  else if (mcTbRE_FLOAT.test(stripped)) kind = "float";
  else return { ok: false, value: null, kind: "" };

  var n = Number(stripped);
  if (!Number.isFinite(n)) return { ok: false, value: null, kind: "" };
  if (neg) n = -n;

  if (isPercent && isCurrency) return { ok: false, value: null, kind: "" };
  if (isPercent) kind = "percentage";
  else if (isCurrency) kind = "currency";
  return { ok: true, value: n, kind: kind };
}

function mcTbDaysInMonth(y, m) {
  var d = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (m === 2 && ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0)) return 29;
  return d[m - 1];
}

function mcTbMakeUtc(y, mo, d, h, mi, se, ms, offsetMin) {
  if (!(mo >= 1 && mo <= 12)) return null;
  if (!(d >= 1 && d <= mcTbDaysInMonth(y, mo))) return null;
  if (h > 24 || mi > 59 || se > 60) return null;
  var t = Date.UTC(y, mo - 1, d, h, mi, se, ms);
  if (!Number.isFinite(t)) return null;
  if (offsetMin) t -= offsetMin * 60000;
  return t;
}

// Two-digit years pivot at 69: 00-69 -> 2000s, 70-99 -> 1900s. That is the
// POSIX/strptime convention; picking a different pivot would silently disagree
// with every other tool the user's data passes through.
function mcTbExpandYear(y) {
  if (y >= 100) return y;
  return y <= 69 ? 2000 + y : 1900 + y;
}

var mcTbRE_ISO =
  /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d{1,6}))?)?\s*(Z|[+-]\d{2}:?\d{2})?)?$/;
var mcTbRE_YMD_SLASH = /^(\d{4})[/.](\d{1,2})[/.](\d{1,2})$/;
var mcTbRE_NUM_DATE = /^(\d{1,4})[/.-](\d{1,2})[/.-](\d{1,4})$/;
var mcTbRE_DMY_NAME = /^(\d{1,2})[ -]([A-Za-z]{3,9})\.?[ -](\d{2,4})$/;
var mcTbRE_MDY_NAME = /^([A-Za-z]{3,9})\.?[ -](\d{1,2})(?:st|nd|rd|th)?,?[ -](\d{2,4})$/;

// Returns { ok, ms, ambiguous }. `ambiguous` marks a numeric d/m/y form whose
// components cannot settle the order on their own — the column-level resolver
// uses that to pick an order for the whole column instead of per-cell.
function mcTbParseDate(text, order) {
  var s = mcTbStr(text).trim();
  var fail = { ok: false, ms: null, ambiguous: false };
  if (s === "" || s.length > 64) return fail;
  var m, y, mo, d, t;

  m = mcTbRE_ISO.exec(s);
  if (m) {
    var offMin = 0;
    if (m[8] && m[8] !== "Z") {
      var os = m[8].replace(":", "");
      var sign = os.charAt(0) === "-" ? -1 : 1;
      offMin = sign * (parseInt(os.substr(1, 2), 10) * 60 + parseInt(os.substr(3, 2), 10));
    }
    var frac = m[7] ? Number(("0." + m[7]).slice(0, 8)) * 1000 : 0;
    t = mcTbMakeUtc(
      +m[1], +m[2], +m[3], m[4] ? +m[4] : 0, m[5] ? +m[5] : 0, m[6] ? +m[6] : 0,
      Math.round(frac), offMin
    );
    return t === null ? fail : { ok: true, ms: t, ambiguous: false };
  }

  m = mcTbRE_YMD_SLASH.exec(s);
  if (m) {
    t = mcTbMakeUtc(+m[1], +m[2], +m[3], 0, 0, 0, 0, 0);
    return t === null ? fail : { ok: true, ms: t, ambiguous: false };
  }

  m = mcTbRE_DMY_NAME.exec(s);
  if (m) {
    mo = mcTbMONTHS[m[2].toLowerCase()];
    if (!mo) return fail;
    t = mcTbMakeUtc(mcTbExpandYear(+m[3]), mo, +m[1], 0, 0, 0, 0, 0);
    return t === null ? fail : { ok: true, ms: t, ambiguous: false };
  }

  m = mcTbRE_MDY_NAME.exec(s);
  if (m) {
    mo = mcTbMONTHS[m[1].toLowerCase()];
    if (!mo) return fail;
    t = mcTbMakeUtc(mcTbExpandYear(+m[3]), mo, +m[2], 0, 0, 0, 0, 0);
    return t === null ? fail : { ok: true, ms: t, ambiguous: false };
  }

  m = mcTbRE_NUM_DATE.exec(s);
  if (m) {
    var a = +m[1];
    var b = +m[2];
    var c = +m[3];
    if (m[1].length === 4) {
      t = mcTbMakeUtc(a, b, c, 0, 0, 0, 0, 0);
      return t === null ? fail : { ok: true, ms: t, ambiguous: false };
    }
    if (m[3].length !== 4 && m[3].length !== 2) return fail;
    y = mcTbExpandYear(c);
    var ambiguous = a <= 12 && b <= 12;
    var useDmy = order === "dmy" ? true : order === "mdy" ? false : a > 12;
    if (a > 12) useDmy = true;
    else if (b > 12) useDmy = false;
    t = useDmy ? mcTbMakeUtc(y, b, a, 0, 0, 0, 0, 0) : mcTbMakeUtc(y, a, b, 0, 0, 0, 0, 0);
    return t === null ? fail : { ok: true, ms: t, ambiguous: ambiguous };
  }

  return fail;
}

// Decide d/m/y vs m/d/y for a whole column from evidence, not per cell. A
// column where any first component exceeds 12 is dmy; where any second does,
// mdy. Both -> conflict, and we fall back to the caller's default rather than
// producing a column whose rows disagree about what "03/04" means.
function mcTbResolveDateOrder(samples, fallback) {
  var dmy = 0;
  var mdy = 0;
  for (var i = 0; i < samples.length; i++) {
    var m = mcTbRE_NUM_DATE.exec(mcTbStr(samples[i]).trim());
    if (!m || m[1].length === 4) continue;
    var a = +m[1];
    var b = +m[2];
    if (a > 12 && b <= 12) dmy++;
    else if (b > 12 && a <= 12) mdy++;
  }
  if (dmy && !mdy) return "dmy";
  if (mdy && !dmy) return "mdy";
  return fallback || "mdy";
}

// Classify one raw string into an atom family. Called only on non-blank,
// non-null text. `ctx` supplies the resolved date order.
function mcTbClassifyAtom(text, ctx) {
  var s = mcTbStr(text).trim();
  if (s === "") return "empty";
  var low = s.toLowerCase();
  if (mcTbBOOL_TRUE[low] === 1 || mcTbBOOL_FALSE[low] === 1) return "boolean";
  var num = mcTbParseNumberish(s);
  if (num.ok) return num.kind;
  if (mcTbParseDate(s, ctx && ctx.dateOrder).ok) return "date";
  return "string";
}

// Parse a raw string as a specific column type. Returns { ok, value }.
// ok === false means "this cell does not conform" and the caller keeps the raw
// string as the value — inference annotates, it never deletes.
function mcTbParseValue(text, type, ctx) {
  var s = mcTbStr(text).trim();
  if (s === "") return { ok: false, value: "" };
  var num;
  switch (type) {
    case "boolean": {
      var low = s.toLowerCase();
      if (mcTbBOOL_TRUE[low] === 1) return { ok: true, value: true };
      if (mcTbBOOL_FALSE[low] === 1) return { ok: true, value: false };
      return { ok: false, value: null };
    }
    case "integer":
      num = mcTbParseNumberish(s);
      if (num.ok && num.kind === "integer") return { ok: true, value: num.value };
      return { ok: false, value: null };
    case "float":
      num = mcTbParseNumberish(s);
      if (num.ok && (num.kind === "integer" || num.kind === "float")) {
        return { ok: true, value: num.value };
      }
      return { ok: false, value: null };
    case "currency":
      num = mcTbParseNumberish(s);
      if (num.ok && num.kind !== "percentage") return { ok: true, value: num.value };
      return { ok: false, value: null };
    case "percentage":
      num = mcTbParseNumberish(s);
      if (num.ok && num.kind !== "currency") return { ok: true, value: num.value };
      return { ok: false, value: null };
    case "date": {
      var d = mcTbParseDate(s, ctx && ctx.dateOrder);
      return d.ok ? { ok: true, value: new Date(d.ms) } : { ok: false, value: null };
    }
    default:
      return { ok: true, value: mcTbStr(text) };
  }
}

/* ------------------------------------------------------------------ *
 * Column type inference
 * ------------------------------------------------------------------ */

// Threshold for "this column is type T despite some rows disagreeing".
// 1.0 was rejected: one stray "N/A" typo would turn a 50k-row numeric column
// into strings and break every chart. 0.5 was rejected as too aggressive —
// it would type a half-junk column as numeric and hide the junk.
var mcTbTYPE_THRESHOLD = 0.9;

// Infer a column type from a sample of raw strings.
// Returns { type, confidence, mixed, counts, sampled, dateOrder }.
function mcTbInferType(samples, options) {
  var opts = options || {};
  var counts = {
    boolean: 0, integer: 0, float: 0, currency: 0, percentage: 0, date: 0, string: 0
  };
  var nullTokens = opts.nullTokenSet || mcTbNullTokenSet(mcTbNULL_TOKENS);
  var dateOrder = mcTbResolveDateOrder(samples, opts.dateOrder);
  var ctx = { dateOrder: dateOrder };
  var total = 0;
  for (var i = 0; i < samples.length; i++) {
    var raw = samples[i];
    if (raw === undefined || raw === null) continue;
    var s = mcTbStr(raw).trim();
    if (s === "") continue;
    if (nullTokens[s.toLowerCase()] === 1) continue;
    var atom = mcTbClassifyAtom(s, ctx);
    if (counts[atom] === undefined) counts[atom] = 0;
    counts[atom]++;
    total++;
  }
  if (total === 0) {
    return { type: "empty", confidence: 0, mixed: false, counts: counts, sampled: 0, dateOrder: dateOrder };
  }

  var families = 0;
  for (var k in counts) {
    if (Object.prototype.hasOwnProperty.call(counts, k) && counts[k] > 0) families++;
  }

  var numeric = counts.integer + counts.float;
  var shares = [];
  // Order matters. `date` outranks the numeric families because a date literal
  // never parses as a number anyway, while checking numbers first would let a
  // column of "20240101" style ints win — which is what we want. `currency`
  // and `percentage` may absorb plain numbers but only if at least one cell
  // actually carries the marker, otherwise a pure integer column would be
  // typed currency.
  shares.push(["boolean", counts.boolean / total, counts.boolean > 0]);
  shares.push(["date", counts.date / total, counts.date > 0]);
  shares.push([
    "percentage",
    (counts.percentage + numeric) / total,
    counts.percentage > 0 && counts.currency === 0
  ]);
  shares.push([
    "currency",
    (counts.currency + numeric) / total,
    counts.currency > 0 && counts.percentage === 0
  ]);
  shares.push(["integer", counts.integer / total, counts.integer > 0]);
  shares.push(["float", numeric / total, numeric > 0]);
  shares.push(["string", counts.string / total, counts.string > 0]);

  var best = null;
  for (var j = 0; j < shares.length; j++) {
    if (!shares[j][2]) continue;
    if (shares[j][1] >= mcTbTYPE_THRESHOLD) {
      best = shares[j];
      break;
    }
    if (!best || shares[j][1] > best[1]) best = shares[j];
  }
  if (!best) best = ["string", 1, true];

  if (best[1] < mcTbTYPE_THRESHOLD) {
    return {
      type: "mixed", confidence: mcTbRound(best[1], 4), mixed: true,
      counts: counts, sampled: total, dateOrder: dateOrder, plurality: best[0]
    };
  }
  return {
    type: best[0], confidence: mcTbRound(best[1], 4), mixed: families > 1,
    counts: counts, sampled: total, dateOrder: dateOrder
  };
}

// Infer a type from already-typed JS values (derived columns, mcTbFromObjects).
// Strings are NOT re-sniffed here: a function that returned strings meant
// strings, and quietly turning them into dates would be the exact silent
// coercion this module bans. Pass { infer: true } to opt in.
function mcTbTypeOfValues(values, options) {
  var opts = options || {};
  var n = 0;
  var nums = 0;
  var ints = 0;
  var dates = 0;
  var bools = 0;
  var strs = 0;
  for (var i = 0; i < values.length; i++) {
    var v = values[i];
    if (mcTbIsBlank(v)) continue;
    n++;
    if (typeof v === "number") {
      if (!Number.isFinite(v)) continue;
      nums++;
      if (Number.isInteger(v)) ints++;
    } else if (v instanceof Date) dates++;
    else if (typeof v === "boolean") bools++;
    else if (typeof v === "string") strs++;
  }
  if (n === 0) return { type: "empty", confidence: 0, mixed: false };
  if (strs === n && opts.infer) {
    return mcTbInferType(values, opts);
  }
  var families = (nums > 0 ? 1 : 0) + (dates > 0 ? 1 : 0) + (bools > 0 ? 1 : 0) + (strs > 0 ? 1 : 0);
  var pick = [
    ["integer", ints / n],
    ["float", nums / n],
    ["date", dates / n],
    ["boolean", bools / n],
    ["string", strs / n]
  ];
  var best = pick[0];
  for (var j = 0; j < pick.length; j++) {
    if (pick[j][1] >= mcTbTYPE_THRESHOLD) {
      best = pick[j];
      break;
    }
    if (pick[j][1] > best[1]) best = pick[j];
  }
  if (best[1] < mcTbTYPE_THRESHOLD) {
    return { type: "mixed", confidence: mcTbRound(best[1], 4), mixed: true };
  }
  return { type: best[0], confidence: mcTbRound(best[1], 4), mixed: families > 1 };
}

/* ================================================================== *
 * Section 3 — the CSV/TSV state machine
 * ================================================================== */

var mcTbDELIMITERS = [",", "\t", ";", "|"];

var mcTbDEFAULTS = {
  delimiter: "auto",
  quoteChar: '"',
  header: true,
  skipEmptyLines: true,
  nullTokens: mcTbNULL_TOKENS,
  dateOrder: "mdy",
  inferSample: 5000,
  maxWarnings: 40,
  maxRecords: Infinity
};

function mcTbNullTokenSet(list) {
  var set = {};
  var arr = Array.isArray(list) ? list : mcTbNULL_TOKENS;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") set[arr[i].toLowerCase()] = 1;
  }
  return set;
}

function mcTbParseOptions(options) {
  var o = options || {};
  var qc = typeof o.quoteChar === "string" && o.quoteChar.length === 1 ? o.quoteChar : '"';
  var d = o.delimiter;
  if (typeof d !== "string" || d.length !== 1) d = "auto";
  var maxRecords = mcTbIsNum(o.maxRecords) && o.maxRecords > 0 ? o.maxRecords : Infinity;
  return {
    delimiter: d,
    quoteChar: qc,
    header: o.header === undefined ? true : !!o.header,
    skipEmptyLines: o.skipEmptyLines === undefined ? true : !!o.skipEmptyLines,
    nullTokens: Array.isArray(o.nullTokens) ? o.nullTokens : mcTbNULL_TOKENS,
    dateOrder: o.dateOrder === "dmy" ? "dmy" : "mdy",
    inferSample: mcTbIsNum(o.inferSample) && o.inferSample > 0 ? Math.floor(o.inferSample) : 5000,
    maxWarnings: mcTbIsNum(o.maxWarnings) && o.maxWarnings >= 0 ? Math.floor(o.maxWarnings) : 40,
    maxRecords: maxRecords,
    delimiters: Array.isArray(o.delimiters) ? o.delimiters : mcTbDELIMITERS
  };
}

// Quote-aware delimiter detection. Counting raw delimiter characters is the
// usual approach and it is wrong: one quoted field holding "Smith, John" beats
// a semicolon file. So we run the real parser once per candidate on a sample
// and score on RECORD SHAPE CONSISTENCY, which is the property a correct
// delimiter actually has.
function mcTbDetectDelimiter(text, options) {
  var opts = mcTbParseOptions(options);
  var s = mcTbStr(text);
  if (s.charCodeAt(0) === 0xfeff) s = s.slice(1);
  var fallback = { delimiter: ",", confidence: 0, scores: {} };
  if (s === "") return fallback;

  var sample = s;
  if (sample.length > 65536) {
    sample = sample.slice(0, 65536);
    var cut = sample.lastIndexOf("\n");
    // Cutting at the last newline can land inside a quoted field. That only
    // costs one malformed sample record, which the consistency score absorbs.
    if (cut > 0) sample = sample.slice(0, cut);
  }

  var best = null;
  var scores = {};
  for (var i = 0; i < opts.delimiters.length; i++) {
    var cand = opts.delimiters[i];
    if (typeof cand !== "string" || cand.length !== 1) continue;
    var res = mcTbParseRecords(sample, {
      delimiter: cand,
      quoteChar: opts.quoteChar,
      skipEmptyLines: true,
      maxRecords: 20,
      maxWarnings: 0
    });
    var recs = res.records;
    if (!recs.length) {
      scores[cand] = 0;
      continue;
    }
    var hist = {};
    var mode = 0;
    var modeN = 0;
    for (var r = 0; r < recs.length; r++) {
      var w = recs[r].length;
      hist[w] = (hist[w] || 0) + 1;
      if (hist[w] > modeN || (hist[w] === modeN && w > mode)) {
        modeN = hist[w];
        mode = w;
      }
    }
    var share = modeN / recs.length;
    var score = mode >= 2 ? share * 100 + Math.min(mode, 30) : 0;
    scores[cand] = mcTbRound(score, 4);
    // Strict `>` keeps the earlier (more conventional) delimiter on ties.
    if (!best || score > best.score) best = { delimiter: cand, score: score, share: share, mode: mode };
  }
  if (!best || best.score === 0) {
    fallback.scores = scores;
    return fallback;
  }
  return { delimiter: best.delimiter, confidence: mcTbRound(best.share, 4), scores: scores, fields: best.mode };
}

// The state machine. Returns { records, warnings, delimiter, bom, truncated }.
// Never throws; malformed input produces warnings and the most plausible
// records rather than an exception, because this runs on pasted text.
function mcTbParseRecords(text, options) {
  var opts = mcTbParseOptions(options);
  var out = {
    records: [], warnings: [], delimiter: opts.delimiter, bom: false,
    truncated: false, stopped: false, delimiterConfidence: 1
  };
  var s;
  try {
    s = mcTbStr(text);
  } catch (e) {
    return out;
  }
  if (s.charCodeAt(0) === 0xfeff) {
    s = s.slice(1);
    out.bom = true;
  }
  if (s === "") return out;

  var delim = opts.delimiter;
  if (delim === "auto") {
    var det = mcTbDetectDelimiter(s, opts);
    delim = det.delimiter;
    out.delimiterConfidence = det.confidence;
  }
  out.delimiter = delim;

  var QUOTE = opts.quoteChar.charCodeAt(0);
  var DELIM = delim.charCodeAt(0);
  var CR = 13;
  var LF = 10;
  var i = 0;
  var n = s.length;
  var record = [];
  var hadQuote = false;
  var recNo = 1;
  var records = out.records;
  var warnCap = opts.maxWarnings;

  function warn(msg) {
    if (out.warnings.length < warnCap) out.warnings.push("record " + recNo + ": " + msg);
    else out.truncated = true;
  }

  for (;;) {
    var value;
    if (i < n && s.charCodeAt(i) === QUOTE) {
      // --- quoted field ---
      hadQuote = true;
      i++;
      var start = i;
      var buf = null;
      var closed = false;
      for (;;) {
        if (i >= n) {
          buf = (buf === null ? "" : buf) + s.slice(start, n);
          warn("unterminated quoted field at end of input");
          break;
        }
        var c = s.charCodeAt(i);
        if (c === QUOTE) {
          if (i + 1 < n && s.charCodeAt(i + 1) === QUOTE) {
            // Escaped quote: keep one of the pair by slicing through it.
            buf = (buf === null ? "" : buf) + s.slice(start, i + 1);
            i += 2;
            start = i;
            continue;
          }
          buf = (buf === null ? "" : buf) + s.slice(start, i);
          i++;
          closed = true;
          break;
        }
        i++;
      }
      value = buf === null ? "" : buf;
      // Line endings inside a quoted field are normalized to LF. RFC 4180 says
      // preserve, but a Windows-authored file then leaks a stray CR into cell
      // values and every equality check against "a\nb" fails. Byte fidelity
      // inside a cell is worth less than predictable cell content.
      if (value.indexOf("\r") >= 0) value = value.replace(/\r\n?/g, "\n");
      if (closed && i < n) {
        var c2 = s.charCodeAt(i);
        if (c2 !== DELIM && c2 !== LF && c2 !== CR) {
          // `"ab"cd` — Excel keeps the tail literally. Dropping it would lose
          // data; erroring out would reject a file the user can see is fine.
          var t0 = i;
          while (i < n) {
            var c3 = s.charCodeAt(i);
            if (c3 === DELIM || c3 === LF || c3 === CR) break;
            i++;
          }
          value += s.slice(t0, i);
          warn("characters after a closing quote were kept literally");
        }
      }
    } else {
      // --- unquoted field ---
      var st = i;
      while (i < n) {
        var cc = s.charCodeAt(i);
        if (cc === DELIM || cc === LF || cc === CR) break;
        i++;
      }
      value = s.slice(st, i);
      if (out.warnings.length < warnCap && value.indexOf(opts.quoteChar) >= 0) {
        warn("bare quote inside an unquoted field kept literally");
      }
    }
    record.push(value);

    if (i < n && s.charCodeAt(i) === DELIM) {
      i++;
      continue;
    }

    var atEnd = i >= n;
    if (!atEnd) {
      if (s.charCodeAt(i) === CR) {
        i++;
        if (i < n && s.charCodeAt(i) === LF) i++;
      } else {
        i++;
      }
    }
    // A line is "empty" only if it produced one unquoted zero-length field.
    // A line consisting of `""` is a real record holding one empty string.
    var isEmptyLine = record.length === 1 && record[0] === "" && !hadQuote;
    if (!(isEmptyLine && opts.skipEmptyLines)) {
      records.push(record);
      if (records.length >= opts.maxRecords) {
        out.stopped = true;
        break;
      }
    }
    record = [];
    hadQuote = false;
    recNo++;
    if (atEnd) break;
    if (i >= n) break; // a trailing newline must not produce a phantom record
  }
  return out;
}

/* ================================================================== *
 * Section 4 — table construction
 * ================================================================== */

// Columnar storage: data[c] and raws[c] are parallel arrays of length nrows.
// Column-major was chosen over row-major because every heavy operation here
// (type inference, group-by, column stats) walks one column at a time, and a
// 50k x 8 table costs 8 array walks instead of 50k object property lookups.
function mcTbMake(cols, data, raws, nrows, meta) {
  return {
    _mcTb: 1,
    cols: cols,
    data: data,
    raws: raws,
    nrows: nrows,
    meta: meta || { warnings: [], delimiter: "", source: "" }
  };
}

function mcTbEmpty() {
  return mcTbMake([], [], [], 0, { warnings: [], delimiter: "", source: "empty" });
}

function mcTbIsTable(x) {
  return !!x && x._mcTb === 1 && Array.isArray(x.cols) && Array.isArray(x.data);
}

// Header names must be unique — every lookup, join and row object depends on
// it. Duplicates get _2, _3; blanks become col{N} (1-based, matching what a
// spreadsheet shows).
function mcTbUniqueNames(names, width) {
  var out = [];
  var seen = {};
  for (var i = 0; i < width; i++) {
    var base = i < names.length ? mcTbStr(names[i]).trim() : "";
    if (base === "") base = "col" + (i + 1);
    var name = base;
    var k = 2;
    while (Object.prototype.hasOwnProperty.call(seen, name)) {
      name = base + "_" + k;
      k++;
    }
    seen[name] = 1;
    out.push(name);
  }
  return out;
}

// Sample indices for type inference: the first 1000 rows plus a strided sweep
// of the rest. Head-only sampling is the common shortcut and it misses columns
// that only go mixed near the bottom of an export.
function mcTbSampleIndices(nrows, limit) {
  if (nrows <= limit) {
    var all = new Array(nrows);
    for (var i = 0; i < nrows; i++) all[i] = i;
    return all;
  }
  var head = Math.min(1000, limit >> 1);
  var idx = [];
  for (var h = 0; h < head; h++) idx.push(h);
  var remaining = limit - head;
  var stride = Math.max(1, Math.floor((nrows - head) / remaining));
  for (var j = head; j < nrows && idx.length < limit; j += stride) idx.push(j);
  return idx;
}

// Build a table from parsed records.
// Ragged rows: width = max(header width, widest data row). Extra cells get
// generated column names rather than being dropped — truncating to the header
// silently deletes user data, which is the one thing we never do. Short rows
// yield MISSING (undefined), not EMPTY.
function mcTbFromRecords(records, options) {
  var opts = mcTbParseOptions(options);
  if (!Array.isArray(records) || records.length === 0) return mcTbEmpty();
  var warnings = [];
  var headerRow = opts.header ? records[0] : null;
  var body = opts.header ? records.slice(1) : records;

  var width = headerRow ? headerRow.length : 0;
  var maxWidth = width;
  for (var r = 0; r < body.length; r++) {
    if (body[r].length > maxWidth) maxWidth = body[r].length;
  }
  if (maxWidth === 0) return mcTbEmpty();
  if (headerRow && maxWidth > width) {
    warnings.push(
      "some rows have more cells than the header (" + maxWidth + " vs " + width +
        "); extra columns were named col" + (width + 1) + "..."
    );
  }
  var names = mcTbUniqueNames(headerRow ? headerRow : [], maxWidth);

  var nrows = body.length;
  var ncols = maxWidth;
  var raws = new Array(ncols);
  var c, i;
  for (c = 0; c < ncols; c++) raws[c] = new Array(nrows);
  var short = 0;
  for (i = 0; i < nrows; i++) {
    var row = body[i];
    if (row.length < ncols) short++;
    for (c = 0; c < ncols; c++) {
      raws[c][i] = c < row.length ? row[c] : undefined;
    }
  }
  if (short) {
    warnings.push(short + " row(s) had fewer cells than the header; missing cells are MISSING, not empty");
  }

  var nullSet = mcTbNullTokenSet(opts.nullTokens);
  var sampleIdx = mcTbSampleIndices(nrows, opts.inferSample);
  var cols = new Array(ncols);
  var data = new Array(ncols);

  for (c = 0; c < ncols; c++) {
    var col = raws[c];
    var sample = new Array(sampleIdx.length);
    for (i = 0; i < sampleIdx.length; i++) sample[i] = col[sampleIdx[i]];
    var inf = mcTbInferType(sample, {
      nullTokenSet: nullSet,
      dateOrder: opts.dateOrder
    });
    var ctx = { dateOrder: inf.dateOrder };
    var values = new Array(nrows);
    var nonBlank = 0;
    var conforming = 0;
    var nulls = 0;
    var empties = 0;
    var missing = 0;
    var isStringish = inf.type === "string" || inf.type === "mixed" || inf.type === "empty";

    for (i = 0; i < nrows; i++) {
      var raw = col[i];
      if (raw === undefined) {
        values[i] = undefined;
        missing++;
        continue;
      }
      var t = mcTbStr(raw).trim();
      if (t === "") {
        values[i] = "";
        empties++;
        continue;
      }
      if (nullSet[t.toLowerCase()] === 1) {
        values[i] = null;
        nulls++;
        continue;
      }
      nonBlank++;
      if (isStringish) {
        values[i] = raw;
        conforming++;
      } else {
        var pv = mcTbParseValue(raw, inf.type, ctx);
        if (pv.ok) {
          values[i] = pv.value;
          conforming++;
        } else {
          // Non-conforming cell: keep the raw string as the value.
          values[i] = raw;
        }
      }
    }

    // Exact confidence from the full pass for concrete types; sample-derived
    // for string/mixed, where "conforms" is vacuous (every value is a string).
    var confidence = isStringish
      ? inf.confidence
      : nonBlank > 0
        ? mcTbRound(conforming / nonBlank, 4)
        : 0;

    cols[c] = {
      name: names[c],
      type: inf.type,
      confidence: confidence === null ? 0 : confidence,
      mixed: inf.mixed || (!isStringish && conforming < nonBlank),
      types: inf.counts,
      sampled: inf.sampled,
      dateOrder: inf.type === "date" ? inf.dateOrder : "",
      stats: {
        rows: nrows, nonNull: nonBlank, nulls: nulls, empties: empties,
        missing: missing, nonConforming: isStringish ? 0 : nonBlank - conforming
      }
    };
    data[c] = values;
  }

  return mcTbMake(cols, data, raws, nrows, {
    warnings: warnings,
    delimiter: opts.delimiter,
    source: "records"
  });
}

// Full pipeline: text -> table. Parse warnings land on table.meta.warnings.
function mcTbParse(text, options) {
  var res = mcTbParseRecords(text, options);
  var t = mcTbFromRecords(res.records, options);
  t.meta.delimiter = res.delimiter;
  t.meta.bom = res.bom;
  t.meta.delimiterConfidence = res.delimiterConfidence;
  t.meta.source = "parse";
  t.meta.warnings = res.warnings.concat(t.meta.warnings);
  if (res.truncated) t.meta.warnings.push("further parse warnings were suppressed");
  return t;
}

// Build from an array of plain objects. Column order is first-seen key order.
// A key absent from an object is MISSING, not empty — same three-state rule.
function mcTbFromObjects(rows, options) {
  var opts = options || {};
  if (!Array.isArray(rows) || rows.length === 0) return mcTbEmpty();
  var names = [];
  var seen = {};
  var i, k, c;
  for (i = 0; i < rows.length; i++) {
    var o = rows[i];
    if (!o || typeof o !== "object") continue;
    for (k in o) {
      if (Object.prototype.hasOwnProperty.call(o, k) && seen[k] !== 1) {
        seen[k] = 1;
        names.push(k);
      }
    }
  }
  if (!names.length) return mcTbEmpty();
  var nrows = rows.length;
  var data = new Array(names.length);
  var cols = new Array(names.length);
  for (c = 0; c < names.length; c++) {
    var vals = new Array(nrows);
    for (i = 0; i < nrows; i++) {
      var row = rows[i];
      vals[i] = row && typeof row === "object" && Object.prototype.hasOwnProperty.call(row, names[c])
        ? row[names[c]]
        : undefined;
    }
    var inf = mcTbTypeOfValues(vals, opts);
    cols[c] = mcTbColMeta(names[c], inf, vals);
    data[c] = vals;
  }
  return mcTbMake(cols, data, new Array(names.length), nrows, {
    warnings: [], delimiter: "", source: "objects"
  });
}

function mcTbColMeta(name, inf, values) {
  var nulls = 0;
  var empties = 0;
  var missing = 0;
  var nonNull = 0;
  for (var i = 0; i < values.length; i++) {
    var v = values[i];
    if (v === undefined) missing++;
    else if (v === null) nulls++;
    else if (v === "") empties++;
    else nonNull++;
  }
  return {
    name: name,
    type: inf.type,
    confidence: inf.confidence === null ? 0 : inf.confidence,
    mixed: !!inf.mixed,
    types: inf.counts || {},
    sampled: inf.sampled || nonNull,
    dateOrder: "",
    stats: {
      rows: values.length, nonNull: nonNull, nulls: nulls, empties: empties,
      missing: missing, nonConforming: 0
    }
  };
}

/* ================================================================== *
 * Section 5 — access
 * ================================================================== */

function mcTbNrows(t) {
  return mcTbIsTable(t) ? t.nrows : 0;
}

function mcTbNcols(t) {
  return mcTbIsTable(t) ? t.cols.length : 0;
}

function mcTbColumnNames(t) {
  if (!mcTbIsTable(t)) return [];
  var out = new Array(t.cols.length);
  for (var i = 0; i < t.cols.length; i++) out[i] = t.cols[i].name;
  return out;
}

// -1 for an unknown column. Callers distinguish "missing column" from "null
// value" by checking this first; that distinction is the whole point.
function mcTbColIndex(t, name) {
  if (!mcTbIsTable(t)) return -1;
  var n = mcTbStr(name);
  for (var i = 0; i < t.cols.length; i++) {
    if (t.cols[i].name === n) return i;
  }
  return -1;
}

// undefined for out-of-range row or unknown column — i.e. MISSING, which is
// exactly what "there is no such cell" means.
function mcTbGet(t, row, col) {
  var c = typeof col === "number" ? col : mcTbColIndex(t, col);
  if (c < 0 || !mcTbIsTable(t) || c >= t.cols.length) return undefined;
  if (!(row >= 0 && row < t.nrows)) return undefined;
  return t.data[c][row];
}

function mcTbGetRaw(t, row, col) {
  var c = typeof col === "number" ? col : mcTbColIndex(t, col);
  if (c < 0 || !mcTbIsTable(t) || c >= t.cols.length) return undefined;
  if (!(row >= 0 && row < t.nrows)) return undefined;
  var ra = t.raws[c];
  if (!ra) return undefined;
  return ra[row];
}

function mcTbColumn(t, col) {
  var c = typeof col === "number" ? col : mcTbColIndex(t, col);
  if (c < 0 || !mcTbIsTable(t) || c >= t.cols.length) return [];
  return t.data[c].slice();
}

function mcTbRow(t, i) {
  var o = {};
  if (!mcTbIsTable(t) || !(i >= 0 && i < t.nrows)) return o;
  for (var c = 0; c < t.cols.length; c++) o[t.cols[c].name] = t.data[c][i];
  return o;
}

function mcTbRows(t) {
  if (!mcTbIsTable(t)) return [];
  var out = new Array(t.nrows);
  for (var i = 0; i < t.nrows; i++) out[i] = mcTbRow(t, i);
  return out;
}

// Rebuild a table from a permutation/subset of row indices. Every query
// operation funnels through here, so ordering and raw preservation are handled
// in exactly one place.
function mcTbTake(t, indices, colIdx) {
  if (!mcTbIsTable(t)) return mcTbEmpty();
  var cIdx = colIdx || null;
  var ncols = cIdx ? cIdx.length : t.cols.length;
  var n = indices.length;
  var cols = new Array(ncols);
  var data = new Array(ncols);
  var raws = new Array(ncols);
  for (var c = 0; c < ncols; c++) {
    var src = cIdx ? cIdx[c] : c;
    var sv = t.data[src];
    var sr = t.raws[src];
    var vals = new Array(n);
    var rr = sr ? new Array(n) : null;
    for (var i = 0; i < n; i++) {
      var k = indices[i];
      vals[i] = sv[k];
      if (rr) rr[i] = sr[k];
    }
    data[c] = vals;
    raws[c] = rr;
    var meta = t.cols[src];
    cols[c] = mcTbRecount(meta, vals);
  }
  return mcTbMake(cols, data, raws, n, {
    warnings: [], delimiter: t.meta.delimiter, source: t.meta.source
  });
}

// Column metadata carries per-column null counts, so a subset must recount
// them or describe() would report the parent's numbers.
function mcTbRecount(meta, values) {
  var nulls = 0;
  var empties = 0;
  var missing = 0;
  var nonNull = 0;
  for (var i = 0; i < values.length; i++) {
    var v = values[i];
    if (v === undefined) missing++;
    else if (v === null) nulls++;
    else if (v === "") empties++;
    else nonNull++;
  }
  return {
    name: meta.name,
    type: meta.type,
    confidence: meta.confidence,
    mixed: meta.mixed,
    types: meta.types,
    sampled: meta.sampled,
    dateOrder: meta.dateOrder,
    stats: {
      rows: values.length, nonNull: nonNull, nulls: nulls, empties: empties,
      missing: missing, nonConforming: meta.stats ? meta.stats.nonConforming : 0
    }
  };
}

/* ================================================================== *
 * Section 6 — query operations (all return new tables)
 * ================================================================== */

function mcTbAllIndices(n) {
  var idx = new Array(n);
  for (var i = 0; i < n; i++) idx[i] = i;
  return idx;
}

// Unknown names are skipped with a warning, not thrown. A UI that lets the
// user pick columns will hand us stale names constantly.
function mcTbSelect(t, names) {
  if (!mcTbIsTable(t)) return mcTbEmpty();
  var list = Array.isArray(names) ? names : [names];
  var cIdx = [];
  var missing = [];
  for (var i = 0; i < list.length; i++) {
    var c = mcTbColIndex(t, list[i]);
    if (c < 0) missing.push(mcTbStr(list[i]));
    else cIdx.push(c);
  }
  var out = mcTbTake(t, mcTbAllIndices(t.nrows), cIdx);
  if (missing.length) out.meta.warnings.push("unknown column(s) ignored: " + missing.join(", "));
  return out;
}

function mcTbDrop(t, names) {
  if (!mcTbIsTable(t)) return mcTbEmpty();
  var list = Array.isArray(names) ? names : [names];
  var kill = {};
  for (var i = 0; i < list.length; i++) kill[mcTbStr(list[i])] = 1;
  var cIdx = [];
  for (var c = 0; c < t.cols.length; c++) {
    if (kill[t.cols[c].name] !== 1) cIdx.push(c);
  }
  return mcTbTake(t, mcTbAllIndices(t.nrows), cIdx);
}

// A predicate that throws is treated as "false" for that row and reported once
// on the result. One bad row must not lose the other 49,999.
function mcTbFilter(t, predicate) {
  if (!mcTbIsTable(t)) return mcTbEmpty();
  if (typeof predicate !== "function") return mcTbTake(t, mcTbAllIndices(t.nrows));
  var keep = [];
  var errors = 0;
  var firstError = "";
  for (var i = 0; i < t.nrows; i++) {
    var ok = false;
    try {
      ok = !!predicate(mcTbRow(t, i), i, t);
    } catch (e) {
      errors++;
      if (!firstError) firstError = e && e.message ? mcTbStr(e.message) : "error";
    }
    if (ok) keep.push(i);
  }
  var out = mcTbTake(t, keep);
  if (errors) out.meta.warnings.push("predicate threw on " + errors + " row(s): " + firstError);
  return out;
}

// Multi-key sort. Keys: "name", "-name" (descending), or
// {col, dir:"asc"|"desc", key: fn}. Stability is guaranteed by the explicit
// index tie-break rather than by trusting the engine's sort to be stable.
function mcTbSort(t, keys) {
  if (!mcTbIsTable(t)) return mcTbEmpty();
  var list = Array.isArray(keys) ? keys : [keys];
  var specs = [];
  for (var i = 0; i < list.length; i++) {
    var k = list[i];
    var name;
    var desc = false;
    var keyFn = null;
    if (typeof k === "string") {
      name = k;
      if (name.charAt(0) === "-") {
        desc = true;
        name = name.slice(1);
      } else if (name.charAt(0) === "+") {
        name = name.slice(1);
      }
    } else if (k && typeof k === "object") {
      name = mcTbStr(k.col);
      desc = k.dir === "desc" || k.dir === "descending" || k.desc === true;
      if (typeof k.key === "function") keyFn = k.key;
    } else {
      continue;
    }
    var c = mcTbColIndex(t, name);
    if (c < 0) continue;
    specs.push({ c: c, desc: desc, key: keyFn });
  }
  var idx = mcTbAllIndices(t.nrows);
  if (!specs.length) return mcTbTake(t, idx);

  var data = t.data;
  idx.sort(function (a, b) {
    for (var s = 0; s < specs.length; s++) {
      var sp = specs[s];
      var va = data[sp.c][a];
      var vb = data[sp.c][b];
      if (sp.key) {
        try {
          va = sp.key(va);
          vb = sp.key(vb);
        } catch (e) {
          va = null;
          vb = null;
        }
      }
      var cmp = mcTbCompareDir(va, vb, sp.desc);
      if (cmp !== 0) return cmp;
    }
    return a - b;
  });
  return mcTbTake(t, idx);
}

// offset/limit. Negative or non-numeric inputs clamp rather than throw.
function mcTbSlice(t, offset, limit) {
  if (!mcTbIsTable(t)) return mcTbEmpty();
  var off = mcTbIsNum(offset) ? Math.max(0, Math.floor(offset)) : 0;
  var lim = mcTbIsNum(limit) ? Math.max(0, Math.floor(limit)) : t.nrows;
  var end = Math.min(t.nrows, off + lim);
  var idx = [];
  for (var i = off; i < end; i++) idx.push(i);
  return mcTbTake(t, idx);
}

function mcTbLimit(t, n) {
  return mcTbSlice(t, 0, n);
}

// Keeps the FIRST occurrence of each key, preserving input order. Sorting the
// output would be free here but would silently reorder a table the caller
// already sorted.
function mcTbDistinct(t, cols) {
  if (!mcTbIsTable(t)) return mcTbEmpty();
  var names = Array.isArray(cols) && cols.length ? cols : mcTbColumnNames(t);
  var cIdx = [];
  for (var i = 0; i < names.length; i++) {
    var c = mcTbColIndex(t, names[i]);
    if (c >= 0) cIdx.push(c);
  }
  if (!cIdx.length) return mcTbTake(t, mcTbAllIndices(t.nrows));
  var seen = Object.create(null);
  var keep = [];
  for (var r = 0; r < t.nrows; r++) {
    var key = "";
    for (var j = 0; j < cIdx.length; j++) key += mcTbKeyString(t.data[cIdx[j]][r]) + "|";
    if (seen[key] === 1) continue;
    seen[key] = 1;
    keep.push(r);
  }
  return mcTbTake(t, keep);
}

// Inner and left join on one key column per side.
// Null/missing/empty keys NEVER match, on either side — SQL semantics, and the
// alternative (blank joins to blank) produces a cartesian explosion on exactly
// the dirtiest data.
// Duplicate column names on the right get `suffix` appended; the right key
// column is dropped when it shares its name with the left key, since for an
// inner join it is identical by construction.
function mcTbJoin(left, right, options) {
  if (!mcTbIsTable(left) || !mcTbIsTable(right)) return mcTbEmpty();
  var o = options || {};
  var type = o.type === "left" ? "left" : "inner";
  var lname = mcTbStr(o.leftKey || o.on);
  var rname = mcTbStr(o.rightKey || o.on);
  var suffix = typeof o.suffix === "string" && o.suffix ? o.suffix : "_r";
  var lc = mcTbColIndex(left, lname);
  var rc = mcTbColIndex(right, rname);
  if (lc < 0 || rc < 0) {
    var bad = mcTbEmpty();
    bad.meta.warnings.push("join key not found: " + (lc < 0 ? lname : rname));
    return bad;
  }

  var buckets = Object.create(null);
  var i;
  for (i = 0; i < right.nrows; i++) {
    var rv = right.data[rc][i];
    if (mcTbIsBlank(rv)) continue;
    var k = mcTbKeyString(rv);
    if (buckets[k]) buckets[k].push(i);
    else buckets[k] = [i];
  }

  var lIdx = [];
  var rIdx = [];
  for (i = 0; i < left.nrows; i++) {
    var lv = left.data[lc][i];
    var hits = mcTbIsBlank(lv) ? null : buckets[mcTbKeyString(lv)];
    if (hits && hits.length) {
      for (var h = 0; h < hits.length; h++) {
        lIdx.push(i);
        rIdx.push(hits[h]);
      }
    } else if (type === "left") {
      lIdx.push(i);
      rIdx.push(-1); // -1 means "no right row": every right cell becomes MISSING
    }
  }

  var dropRightKey = lname === rname;
  var rightCols = [];
  for (var c = 0; c < right.cols.length; c++) {
    if (dropRightKey && c === rc) continue;
    rightCols.push(c);
  }

  var leftNames = mcTbColumnNames(left);
  var used = {};
  for (i = 0; i < leftNames.length; i++) used[leftNames[i]] = 1;

  var outCols = [];
  var outData = [];
  var outRaws = [];
  var n = lIdx.length;

  for (c = 0; c < left.cols.length; c++) {
    var lv2 = new Array(n);
    var lr2 = left.raws[c] ? new Array(n) : null;
    for (i = 0; i < n; i++) {
      lv2[i] = left.data[c][lIdx[i]];
      if (lr2) lr2[i] = left.raws[c][lIdx[i]];
    }
    outCols.push(mcTbRecount(left.cols[c], lv2));
    outData.push(lv2);
    outRaws.push(lr2);
  }
  for (var q = 0; q < rightCols.length; q++) {
    var rcI = rightCols[q];
    var nm = right.cols[rcI].name;
    if (used[nm] === 1) {
      var cand = nm + suffix;
      var k2 = 2;
      while (used[cand] === 1) {
        cand = nm + suffix + k2;
        k2++;
      }
      nm = cand;
    }
    used[nm] = 1;
    var rv2 = new Array(n);
    var rr2 = right.raws[rcI] ? new Array(n) : null;
    for (i = 0; i < n; i++) {
      var ri = rIdx[i];
      rv2[i] = ri < 0 ? undefined : right.data[rcI][ri];
      if (rr2) rr2[i] = ri < 0 ? undefined : right.raws[rcI][ri];
    }
    var meta = mcTbRecount(right.cols[rcI], rv2);
    meta.name = nm;
    outCols.push(meta);
    outData.push(rv2);
    outRaws.push(rr2);
  }

  return mcTbMake(outCols, outData, outRaws, n, {
    warnings: [], delimiter: left.meta.delimiter, source: "join:" + type
  });
}

// Vertical concatenation on the union of column names. A column present in
// only one side is MISSING for the other's rows — which is a true statement
// about that data, unlike filling with "".
function mcTbConcat(a, b) {
  if (!mcTbIsTable(a)) return mcTbIsTable(b) ? mcTbTake(b, mcTbAllIndices(b.nrows)) : mcTbEmpty();
  if (!mcTbIsTable(b)) return mcTbTake(a, mcTbAllIndices(a.nrows));
  var names = mcTbColumnNames(a);
  var bn = mcTbColumnNames(b);
  var i, c;
  for (i = 0; i < bn.length; i++) {
    if (names.indexOf(bn[i]) < 0) names.push(bn[i]);
  }
  var n = a.nrows + b.nrows;
  var cols = [];
  var data = [];
  var raws = [];
  for (c = 0; c < names.length; c++) {
    var ai = mcTbColIndex(a, names[c]);
    var bi = mcTbColIndex(b, names[c]);
    var vals = new Array(n);
    var rr = new Array(n);
    for (i = 0; i < a.nrows; i++) {
      vals[i] = ai < 0 ? undefined : a.data[ai][i];
      rr[i] = ai < 0 || !a.raws[ai] ? undefined : a.raws[ai][i];
    }
    for (i = 0; i < b.nrows; i++) {
      vals[a.nrows + i] = bi < 0 ? undefined : b.data[bi][i];
      rr[a.nrows + i] = bi < 0 || !b.raws[bi] ? undefined : b.raws[bi][i];
    }
    var src = ai >= 0 ? a.cols[ai] : b.cols[bi];
    var inf = ai >= 0 && bi >= 0 && a.cols[ai].type !== b.cols[bi].type
      ? mcTbTypeOfValues(vals)
      : { type: src.type, confidence: src.confidence, mixed: src.mixed };
    var meta = mcTbRecount(src, vals);
    meta.type = inf.type;
    meta.confidence = inf.confidence === null ? 0 : inf.confidence;
    meta.mixed = !!inf.mixed;
    cols.push(meta);
    data.push(vals);
    raws.push(rr);
  }
  return mcTbMake(cols, data, raws, n, { warnings: [], delimiter: "", source: "concat" });
}

// Derived column. An existing name is REPLACED in place (keeping its position)
// rather than duplicated, because a table with two columns of the same name is
// unusable and silently renaming would surprise the caller more.
// The derived column has no raw text; export formats its value instead.
function mcTbDerive(t, name, fn, options) {
  if (!mcTbIsTable(t)) return mcTbEmpty();
  var opts = options || {};
  var nm = mcTbStr(name).trim();
  if (nm === "" || typeof fn !== "function") return mcTbTake(t, mcTbAllIndices(t.nrows));
  var vals = new Array(t.nrows);
  var errors = 0;
  for (var i = 0; i < t.nrows; i++) {
    try {
      var v = fn(mcTbRow(t, i), i, t);
      // Non-finite results become null so nothing downstream has to guard.
      vals[i] = typeof v === "number" && !Number.isFinite(v) ? null : v;
    } catch (e) {
      vals[i] = null;
      errors++;
    }
  }
  var inf = opts.type
    ? { type: opts.type, confidence: 1, mixed: false }
    : mcTbTypeOfValues(vals, opts);
  var meta = mcTbColMeta(nm, inf, vals);

  var out = mcTbTake(t, mcTbAllIndices(t.nrows));
  var at = mcTbColIndex(out, nm);
  if (at >= 0) {
    out.cols[at] = meta;
    out.data[at] = vals;
    out.raws[at] = null;
  } else {
    out.cols.push(meta);
    out.data.push(vals);
    out.raws.push(null);
  }
  if (errors) out.meta.warnings.push("derive('" + nm + "') threw on " + errors + " row(s); those cells are NULL");
  return out;
}

function mcTbRename(t, mapping) {
  if (!mcTbIsTable(t)) return mcTbEmpty();
  var out = mcTbTake(t, mcTbAllIndices(t.nrows));
  if (!mapping || typeof mapping !== "object") return out;
  var proposed = [];
  var c;
  for (c = 0; c < out.cols.length; c++) {
    var old = out.cols[c].name;
    var nn = Object.prototype.hasOwnProperty.call(mapping, old) ? mcTbStr(mapping[old]).trim() : old;
    proposed.push(nn === "" ? old : nn);
  }
  var unique = mcTbUniqueNames(proposed, proposed.length);
  for (c = 0; c < out.cols.length; c++) out.cols[c].name = unique[c];
  return out;
}

// Listed columns come first in the given order; unlisted ones keep their
// relative order at the end. Dropping unlisted columns is what `select` is
// for — reorder should never lose a column by omission.
function mcTbReorder(t, names) {
  if (!mcTbIsTable(t)) return mcTbEmpty();
  var list = Array.isArray(names) ? names : [names];
  var order = [];
  var taken = {};
  var i, c;
  for (i = 0; i < list.length; i++) {
    c = mcTbColIndex(t, list[i]);
    if (c >= 0 && taken[c] !== 1) {
      taken[c] = 1;
      order.push(c);
    }
  }
  for (c = 0; c < t.cols.length; c++) {
    if (taken[c] !== 1) order.push(c);
  }
  return mcTbTake(t, mcTbAllIndices(t.nrows), order);
}

/* ================================================================== *
 * Section 7 — aggregation
 * ================================================================== */

var mcTbOPS = {
  count: 1, size: 1, nulls: 1, sum: 1, mean: 1, median: 1, min: 1, max: 1,
  stddev: 1, variance: 1, first: 1, last: 1, distinct: 1
};

// Aggregate a raw array of values. Blanks (MISSING/NULL/EMPTY) are dropped
// first — see the header contract. Returns null when there is nothing to
// aggregate; never NaN.
function mcTbAggregateValues(values, op, rowCount) {
  var vals = Array.isArray(values) ? values : [];
  var n = vals.length;
  var i, v;

  if (op === "size") return mcTbIsNum(rowCount) ? rowCount : n;
  if (op === "nulls") {
    var nl = 0;
    for (i = 0; i < n; i++) {
      if (mcTbIsBlank(vals[i])) nl++;
    }
    return nl;
  }

  var kept = [];
  for (i = 0; i < n; i++) {
    v = vals[i];
    if (!mcTbIsBlank(v)) kept.push(v);
  }
  var m = kept.length;
  if (op === "count") return m;
  if (op === "distinct") {
    var seen = Object.create(null);
    var d = 0;
    for (i = 0; i < m; i++) {
      var k = mcTbKeyString(kept[i]);
      if (seen[k] !== 1) {
        seen[k] = 1;
        d++;
      }
    }
    return d;
  }
  if (m === 0) return null;
  if (op === "first") return kept[0];
  if (op === "last") return kept[m - 1];

  if (op === "min" || op === "max") {
    var best = kept[0];
    for (i = 1; i < m; i++) {
      var cmp = mcTbCompareValues(kept[i], best);
      if (op === "min" ? cmp < 0 : cmp > 0) best = kept[i];
    }
    return best;
  }

  if (op === "median") {
    var sorted = kept.slice().sort(mcTbCompareValues);
    var mid = sorted.length >> 1;
    if (sorted.length % 2) return sorted[mid];
    var a = mcTbNumericOf(sorted[mid - 1]);
    var b = mcTbNumericOf(sorted[mid]);
    // Only average when both middles are numeric. For strings the lower
    // middle is the honest answer: there is no midpoint between "ant" and
    // "bee", and inventing one would be worse than an order statistic.
    if (a === null || b === null) return sorted[mid - 1];
    var avg = (a + b) / 2;
    return sorted[mid] instanceof Date ? new Date(Math.round(avg)) : avg;
  }

  var nums = [];
  for (i = 0; i < m; i++) {
    var num = mcTbNumericOf(kept[i]);
    if (num !== null) nums.push(num);
  }
  var nn = nums.length;
  if (nn === 0) return null;

  var sum = 0;
  for (i = 0; i < nn; i++) sum += nums[i];
  if (!Number.isFinite(sum)) return null;
  if (op === "sum") return sum;
  if (op === "mean") return sum / nn;
  if (op === "stddev" || op === "variance") {
    // Sample (n-1). A single observation has no spread — null, not 0, because
    // 0 would claim the data is perfectly consistent.
    if (nn < 2) return null;
    var mu = sum / nn;
    var acc = 0;
    for (i = 0; i < nn; i++) {
      var dd = nums[i] - mu;
      acc += dd * dd;
    }
    var varr = acc / (nn - 1);
    if (!Number.isFinite(varr)) return null;
    return op === "variance" ? varr : Math.sqrt(varr);
  }
  return null;
}

// Normalize an aggregation spec entry.
function mcTbAggSpec(spec) {
  if (typeof spec === "string") {
    var bits = spec.split(":");
    return { col: bits.length > 1 ? bits[0] : "", op: bits.length > 1 ? bits[1] : bits[0], as: spec };
  }
  if (!spec || typeof spec !== "object") return null;
  var op = mcTbStr(spec.op).toLowerCase();
  if (mcTbOPS[op] !== 1) return null;
  var col = mcTbStr(spec.col);
  var as = mcTbStr(spec.as) || (col ? col + "_" + op : op);
  return { col: col, op: op, as: as };
}

// Result type of an aggregate, so downstream formatting stays sane.
function mcTbAggType(op, srcType) {
  if (op === "count" || op === "size" || op === "nulls" || op === "distinct") return "integer";
  if (op === "sum" || op === "mean" || op === "stddev" || op === "variance") {
    return srcType === "integer" && op === "sum" ? "integer" : "float";
  }
  return srcType || "string";
}

// Group-by with multi-level keys.
// Group order is FIRST APPEARANCE, not sorted. It is deterministic, it costs
// nothing, and it lets a caller who already sorted the table keep that order.
// Anyone wanting alphabetical can mcTbSort the result.
function mcTbGroupBy(t, keys, aggs) {
  if (!mcTbIsTable(t)) return mcTbEmpty();
  var keyList = Array.isArray(keys) ? keys : keys === undefined || keys === null ? [] : [keys];
  var kIdx = [];
  var i, j;
  for (i = 0; i < keyList.length; i++) {
    var c = mcTbColIndex(t, keyList[i]);
    if (c >= 0) kIdx.push(c);
  }
  var specs = [];
  var aggList = Array.isArray(aggs) ? aggs : aggs ? [aggs] : [];
  for (i = 0; i < aggList.length; i++) {
    var sp = mcTbAggSpec(aggList[i]);
    if (sp) specs.push(sp);
  }
  if (!specs.length) specs.push({ col: "", op: "size", as: "n" });

  var order = [];
  var map = Object.create(null);
  var groups = [];
  for (i = 0; i < t.nrows; i++) {
    var key = "";
    for (j = 0; j < kIdx.length; j++) key += mcTbKeyString(t.data[kIdx[j]][i]) + "|";
    var gi = map[key];
    if (gi === undefined) {
      gi = groups.length;
      map[key] = gi;
      groups.push([]);
      order.push(i);
    }
    groups[gi].push(i);
  }
  if (!t.nrows) {
    // An empty input still produces a well-formed empty result with the right
    // shape, so a UI can render headers without a special case.
    groups = [];
    order = [];
  }

  var ng = groups.length;
  var cols = [];
  var data = [];
  var raws = [];
  for (j = 0; j < kIdx.length; j++) {
    var kc = kIdx[j];
    var kv = new Array(ng);
    var kr = t.raws[kc] ? new Array(ng) : null;
    for (i = 0; i < ng; i++) {
      kv[i] = t.data[kc][order[i]];
      if (kr) kr[i] = t.raws[kc][order[i]];
    }
    cols.push(mcTbRecount(t.cols[kc], kv));
    data.push(kv);
    raws.push(kr);
  }

  var used = {};
  for (j = 0; j < cols.length; j++) used[cols[j].name] = 1;

  for (var s = 0; s < specs.length; s++) {
    var spec = specs[s];
    var srcC = spec.col ? mcTbColIndex(t, spec.col) : -1;
    var srcType = srcC >= 0 ? t.cols[srcC].type : "";
    var vals = new Array(ng);
    for (i = 0; i < ng; i++) {
      var rowsIn = groups[i];
      var slice;
      if (srcC >= 0) {
        slice = new Array(rowsIn.length);
        for (j = 0; j < rowsIn.length; j++) slice[j] = t.data[srcC][rowsIn[j]];
      } else {
        slice = [];
      }
      var op = spec.op;
      // `count` with no column means row count; with a column it means
      // non-null count. Both are wanted often enough to deserve one name.
      if (srcC < 0 && (op === "count" || op === "size")) vals[i] = rowsIn.length;
      else vals[i] = mcTbAggregateValues(slice, op, rowsIn.length);
    }
    var name = spec.as;
    var k2 = 2;
    while (used[name] === 1) {
      name = spec.as + "_" + k2;
      k2++;
    }
    used[name] = 1;
    var at = mcTbAggType(spec.op, srcType);
    var meta = mcTbColMeta(name, { type: at, confidence: 1, mixed: false }, vals);
    cols.push(meta);
    data.push(vals);
    raws.push(null);
  }

  return mcTbMake(cols, data, raws, ng, {
    warnings: [], delimiter: t.meta.delimiter, source: "groupBy"
  });
}

// Pivot: rows x cols x aggregated value.
// Pivot column order IS sorted (unlike group order above) because those values
// become a header axis that a human reads left to right; arbitrary order there
// is unreadable. The inconsistency is deliberate.
function mcTbPivot(t, spec) {
  if (!mcTbIsTable(t)) return mcTbEmpty();
  var o = spec || {};
  var rowNames = Array.isArray(o.rows) ? o.rows : o.rows ? [o.rows] : [];
  var colName = mcTbStr(o.cols || o.col);
  var valName = mcTbStr(o.value);
  var op = mcTbStr(o.op || "sum").toLowerCase();
  if (mcTbOPS[op] !== 1) op = "sum";
  var fill = Object.prototype.hasOwnProperty.call(o, "fill") ? o.fill : null;

  var cc = mcTbColIndex(t, colName);
  var vc = valName ? mcTbColIndex(t, valName) : -1;
  if (cc < 0) {
    var bad = mcTbEmpty();
    bad.meta.warnings.push("pivot: column axis '" + colName + "' not found");
    return bad;
  }
  var rIdx = [];
  var i, j;
  for (i = 0; i < rowNames.length; i++) {
    var c = mcTbColIndex(t, rowNames[i]);
    if (c >= 0) rIdx.push(c);
  }

  var rowMap = Object.create(null);
  var rowKeys = [];
  var rowFirst = [];
  var colMap = Object.create(null);
  var colVals = [];
  var cells = [];

  for (i = 0; i < t.nrows; i++) {
    var rk = "";
    for (j = 0; j < rIdx.length; j++) rk += mcTbKeyString(t.data[rIdx[j]][i]) + "|";
    var ri = rowMap[rk];
    if (ri === undefined) {
      ri = rowKeys.length;
      rowMap[rk] = ri;
      rowKeys.push(rk);
      rowFirst.push(i);
      cells.push(Object.create(null));
    }
    var cv = t.data[cc][i];
    var ck = mcTbKeyString(cv);
    if (colMap[ck] === undefined) {
      colMap[ck] = colVals.length;
      colVals.push(cv);
    }
    var bucket = cells[ri];
    if (!bucket[ck]) bucket[ck] = [];
    bucket[ck].push(vc >= 0 ? t.data[vc][i] : 1);
  }

  colVals.sort(mcTbCompare);

  var ng = rowKeys.length;
  var cols = [];
  var data = [];
  var raws = [];
  for (j = 0; j < rIdx.length; j++) {
    var kc = rIdx[j];
    var kv = new Array(ng);
    var kr = t.raws[kc] ? new Array(ng) : null;
    for (i = 0; i < ng; i++) {
      kv[i] = t.data[kc][rowFirst[i]];
      if (kr) kr[i] = t.raws[kc][rowFirst[i]];
    }
    cols.push(mcTbRecount(t.cols[kc], kv));
    data.push(kv);
    raws.push(kr);
  }

  var used = {};
  for (j = 0; j < cols.length; j++) used[cols[j].name] = 1;
  var srcType = vc >= 0 ? t.cols[vc].type : "integer";

  for (var q = 0; q < colVals.length; q++) {
    var label = mcTbFormatValue(colVals[q]);
    if (label === "") label = "(blank)";
    var nm = label;
    var k2 = 2;
    while (used[nm] === 1) {
      nm = label + "_" + k2;
      k2++;
    }
    used[nm] = 1;
    var ck2 = mcTbKeyString(colVals[q]);
    var vals = new Array(ng);
    for (i = 0; i < ng; i++) {
      var list = cells[i][ck2];
      // No observation for this cell is not the same as an observation of
      // zero. `fill` defaults to null so the difference survives to the view.
      vals[i] = list ? mcTbAggregateValues(list, op, list.length) : fill;
    }
    cols.push(mcTbColMeta(nm, { type: mcTbAggType(op, srcType), confidence: 1, mixed: false }, vals));
    data.push(vals);
    raws.push(null);
  }

  return mcTbMake(cols, data, raws, ng, {
    warnings: [], delimiter: t.meta.delimiter, source: "pivot"
  });
}

/* ------------------------------------------------------------------ *
 * Describe / column statistics
 * ------------------------------------------------------------------ */

function mcTbQuantile(sortedNums, q) {
  var n = sortedNums.length;
  if (!n) return null;
  if (n === 1) return sortedNums[0];
  var pos = (n - 1) * q;
  var lo = Math.floor(pos);
  var hi = Math.ceil(pos);
  if (lo === hi) return sortedNums[lo];
  return sortedNums[lo] + (sortedNums[hi] - sortedNums[lo]) * (pos - lo);
}

function mcTbColumnStats(t, col) {
  var c = typeof col === "number" ? col : mcTbColIndex(t, col);
  var blank = {
    name: mcTbStr(col), type: "empty", confidence: 0, mixed: false, rows: 0,
    nonNull: 0, nulls: 0, empties: 0, missing: 0, nonConforming: 0, distinct: 0,
    min: null, max: null, mean: null, median: null, stddev: null, sum: null,
    p25: null, p75: null, minLength: null, maxLength: null, top: null, topCount: 0
  };
  if (!mcTbIsTable(t) || c < 0 || c >= t.cols.length) return blank;
  var meta = t.cols[c];
  var vals = t.data[c];
  var n = t.nrows;
  var nulls = 0;
  var empties = 0;
  var missing = 0;
  var seen = Object.create(null);
  var distinct = 0;
  var nums = [];
  var minLen = null;
  var maxLen = null;
  var freq = Object.create(null);
  var topKey = null;
  var topCount = 0;
  var topVal = null;
  var kept = [];
  var i;

  for (i = 0; i < n; i++) {
    var v = vals[i];
    if (v === undefined) {
      missing++;
      continue;
    }
    if (v === null) {
      nulls++;
      continue;
    }
    if (v === "") {
      empties++;
      continue;
    }
    kept.push(v);
    var k = mcTbKeyString(v);
    if (seen[k] !== 1) {
      seen[k] = 1;
      distinct++;
    }
    var f = (freq[k] || 0) + 1;
    freq[k] = f;
    if (f > topCount) {
      topCount = f;
      topKey = k;
      topVal = v;
    }
    var num = mcTbNumericOf(v);
    if (num !== null) nums.push(num);
    var s = mcTbStr(v);
    if (minLen === null || s.length < minLen) minLen = s.length;
    if (maxLen === null || s.length > maxLen) maxLen = s.length;
  }

  nums.sort(function (a, b) {
    return a - b;
  });
  var isNumeric = nums.length > 0;

  return {
    name: meta.name,
    type: meta.type,
    confidence: meta.confidence,
    mixed: !!meta.mixed,
    rows: n,
    nonNull: kept.length,
    nulls: nulls,
    empties: empties,
    missing: missing,
    nonConforming: meta.stats ? meta.stats.nonConforming : 0,
    distinct: distinct,
    min: mcTbAggregateValues(kept, "min", n),
    max: mcTbAggregateValues(kept, "max", n),
    mean: isNumeric ? mcTbRound(mcTbAggregateValues(kept, "mean", n), 6) : null,
    median: isNumeric ? mcTbRound(mcTbAggregateValues(kept, "median", n), 6) : null,
    stddev: isNumeric ? mcTbRound(mcTbAggregateValues(kept, "stddev", n), 6) : null,
    sum: isNumeric ? mcTbRound(mcTbAggregateValues(kept, "sum", n), 6) : null,
    p25: isNumeric ? mcTbRound(mcTbQuantile(nums, 0.25), 6) : null,
    p75: isNumeric ? mcTbRound(mcTbQuantile(nums, 0.75), 6) : null,
    minLength: minLen,
    maxLength: maxLen,
    top: topKey === null ? null : topVal,
    topCount: topCount
  };
}

function mcTbDescribe(t) {
  if (!mcTbIsTable(t)) return [];
  var out = new Array(t.cols.length);
  for (var c = 0; c < t.cols.length; c++) out[c] = mcTbColumnStats(t, c);
  return out;
}

// The same thing as a table, for rendering straight through toHtml/toMarkdown.
function mcTbDescribeTable(t) {
  return mcTbFromObjects(mcTbDescribe(t));
}

/* ================================================================== *
 * Section 8 — formatting and export
 * ================================================================== */

// UTC ISO. Midnight-UTC dates render date-only, because a column of birthdays
// should not be 24 characters wide.
function mcTbFormatDate(d) {
  var t = d instanceof Date ? d.getTime() : NaN;
  if (!Number.isFinite(t)) return "";
  var iso;
  try {
    iso = d.toISOString();
  } catch (e) {
    return "";
  }
  if (iso.indexOf("T00:00:00.000Z") === 10) return iso.slice(0, 10);
  return iso;
}

// The single value -> text function. NaN, Infinity, undefined and null all
// become "" so no output string can ever contain them.
function mcTbFormatValue(v) {
  if (v === null || v === undefined) return "";
  if (typeof v === "string") return v;
  if (typeof v === "number") return Number.isFinite(v) ? String(v) : "";
  if (typeof v === "boolean") return v ? "true" : "false";
  if (v instanceof Date) return mcTbFormatDate(v);
  return mcTbStr(v);
}

// Cell text for export: the user's own raw text when we have it, so a
// round-trip reproduces "$1,234.00" rather than "1234". Derived columns have
// no raw and fall back to the formatted value.
function mcTbFormatCell(t, row, col) {
  var c = typeof col === "number" ? col : mcTbColIndex(t, col);
  if (!mcTbIsTable(t) || c < 0 || c >= t.cols.length) return "";
  if (!(row >= 0 && row < t.nrows)) return "";
  var ra = t.raws[c];
  if (ra) {
    var r = ra[row];
    if (r !== undefined && r !== null) return mcTbStr(r);
    if (r === undefined) return ""; // MISSING has no text at all
  }
  return mcTbFormatValue(t.data[c][row]);
}

// Quote per RFC 4180. Padded fields are quoted too: this parser does not trim,
// but plenty of others do, and losing " 007" to trimming breaks round-trips
// through the rest of the user's toolchain.
function mcTbQuoteField(text, delimiter, quoteChar, options) {
  var o = options || {};
  var q = typeof quoteChar === "string" && quoteChar.length === 1 ? quoteChar : '"';
  var d = typeof delimiter === "string" && delimiter.length === 1 ? delimiter : ",";
  var s = mcTbStr(text);
  if (o.sanitizeFormulas) {
    // Excel/Sheets execute a leading =,+,-,@ as a formula. Off by default
    // because it alters the data; worth turning on for untrusted export.
    var c0 = s.charAt(0);
    if (c0 === "=" || c0 === "+" || c0 === "@" || (c0 === "-" && !mcTbRE_FLOAT.test(s))) {
      s = "'" + s;
    }
  }
  if (o.quoteAll) return q + s.split(q).join(q + q) + q;
  var needs =
    s.indexOf(d) >= 0 ||
    s.indexOf(q) >= 0 ||
    s.indexOf("\n") >= 0 ||
    s.indexOf("\r") >= 0;
  if (!needs && o.quotePadded !== false && s !== "") {
    var first = s.charAt(0);
    var last = s.charAt(s.length - 1);
    if (first === " " || first === "\t" || last === " " || last === "\t") needs = true;
  }
  if (!needs) return s;
  return q + s.split(q).join(q + q) + q;
}

function mcTbDelimitedOptions(options, defaultDelim) {
  var o = options || {};
  return {
    delimiter: typeof o.delimiter === "string" && o.delimiter.length === 1 ? o.delimiter : defaultDelim,
    quoteChar: typeof o.quoteChar === "string" && o.quoteChar.length === 1 ? o.quoteChar : '"',
    newline: o.newline === "\n" ? "\n" : "\r\n",
    header: o.header === undefined ? true : !!o.header,
    quoteAll: !!o.quoteAll,
    quotePadded: o.quotePadded !== false,
    sanitizeFormulas: !!o.sanitizeFormulas,
    nullToken: typeof o.nullToken === "string" ? o.nullToken : null
  };
}

// CSV export. Round-trip is lossless at the VALUE level for rectangular input:
// parse -> toCsv -> parse yields identical values. It is NOT byte-lossless —
// a quoted-but-unnecessary field comes back unquoted, and CRLF inside a quoted
// cell comes back as LF. Ragged input is normalized (short rows gain empty
// cells), which is the documented cost of having a rectangular table at all.
function mcTbToCsv(t, options) {
  if (!mcTbIsTable(t)) return "";
  var o = mcTbDelimitedOptions(options, ",");
  var parts = [];
  var c, i;
  if (o.header) {
    var head = new Array(t.cols.length);
    for (c = 0; c < t.cols.length; c++) {
      head[c] = mcTbQuoteField(t.cols[c].name, o.delimiter, o.quoteChar, o);
    }
    parts.push(head.join(o.delimiter));
  }
  for (i = 0; i < t.nrows; i++) {
    var row = new Array(t.cols.length);
    for (c = 0; c < t.cols.length; c++) {
      var text = mcTbFormatCell(t, i, c);
      if (text === "" && o.nullToken !== null && mcTbIsNull(t.data[c][i])) text = o.nullToken;
      row[c] = mcTbQuoteField(text, o.delimiter, o.quoteChar, o);
    }
    parts.push(row.join(o.delimiter));
  }
  return parts.join(o.newline);
}

// Real TSV (IANA) forbids tabs in fields rather than quoting them. We quote,
// because every spreadsheet that consumes clipboard TSV expects quoting and
// silently dropping a tab would lose data.
function mcTbToTsv(t, options) {
  var o = options || {};
  return mcTbToCsv(t, {
    delimiter: "\t",
    quoteChar: o.quoteChar,
    newline: o.newline,
    header: o.header,
    quoteAll: o.quoteAll,
    quotePadded: o.quotePadded,
    sanitizeFormulas: o.sanitizeFormulas,
    nullToken: o.nullToken
  });
}

// Array of plain row objects. Non-finite numbers become null (JSON has no
// spelling for them); Dates become ISO strings when `iso` is set, otherwise
// they stay Date objects for callers doing further work in JS.
function mcTbToObjects(t, options) {
  var o = options || {};
  if (!mcTbIsTable(t)) return [];
  var out = new Array(t.nrows);
  for (var i = 0; i < t.nrows; i++) {
    var row = {};
    for (var c = 0; c < t.cols.length; c++) {
      var v = t.data[c][i];
      if (typeof v === "number" && !Number.isFinite(v)) v = null;
      else if (v instanceof Date && o.iso) v = mcTbFormatDate(v);
      else if (v === undefined && o.missingAsNull) v = null;
      row[t.cols[c].name] = v;
    }
    out[i] = row;
  }
  return out;
}

// JSON text. shape "rows" (default) = array of objects; "table" = an object
// carrying column metadata too, for a lossless handoff to another instance.
function mcTbToJson(t, options) {
  var o = options || {};
  var indent = mcTbIsNum(o.indent) ? Math.max(0, Math.min(8, Math.floor(o.indent))) : 0;
  try {
    if (o.shape === "table") {
      var cols = [];
      for (var c = 0; c < mcTbNcols(t); c++) {
        cols.push({
          name: t.cols[c].name,
          type: t.cols[c].type,
          confidence: t.cols[c].confidence,
          mixed: !!t.cols[c].mixed
        });
      }
      return JSON.stringify(
        { version: mcTbVERSION, columns: cols, rows: mcTbToObjects(t, { iso: true, missingAsNull: false }) },
        null,
        indent
      );
    }
    var s = JSON.stringify(mcTbToObjects(t, { iso: true }), null, indent);
    return typeof s === "string" ? s : "[]";
  } catch (e) {
    return "[]";
  }
}

// Markdown pipe table. Cell text is escaped for pipes and backslashes, and
// newlines collapse to a space — deliberately NOT to a <br>, because injecting
// HTML into markdown is exactly the hostile-data path we are trying to close.
function mcTbToMarkdown(t, options) {
  if (!mcTbIsTable(t)) return "";
  var o = options || {};
  var maxRows = mcTbIsNum(o.maxRows) ? Math.max(0, Math.floor(o.maxRows)) : t.nrows;
  var n = Math.min(t.nrows, maxRows);
  var lines = [];
  var c, i;

  function cell(text) {
    var s = mcTbStr(text).replace(/\\/g, "\\\\").replace(/\|/g, "\\|");
    s = s.replace(/[\r\n]+/g, " ").trim();
    return s === "" ? " " : s;
  }

  var head = [];
  var rule = [];
  for (c = 0; c < t.cols.length; c++) {
    head.push(cell(t.cols[c].name));
    var ty = t.cols[c].type;
    var numeric = ty === "integer" || ty === "float" || ty === "currency" || ty === "percentage";
    rule.push(numeric ? "---:" : ":---");
  }
  lines.push("| " + head.join(" | ") + " |");
  lines.push("| " + rule.join(" | ") + " |");
  for (i = 0; i < n; i++) {
    var row = [];
    for (c = 0; c < t.cols.length; c++) row.push(cell(mcTbFormatCell(t, i, c)));
    lines.push("| " + row.join(" | ") + " |");
  }
  if (n < t.nrows) lines.push("| " + new Array(t.cols.length + 1).join(" ... |"));
  return lines.join("\n");
}

// HTML table. EVERY cell, column name, caption and class name goes through
// mcTbEscapeHtml. Assume the data is hostile: it was pasted.
function mcTbToHtml(t, options) {
  if (!mcTbIsTable(t)) return "<table></table>";
  var o = options || {};
  var cls = o.className ? ' class="' + mcTbEscapeHtml(o.className) + '"' : "";
  var maxRows = mcTbIsNum(o.maxRows) ? Math.max(0, Math.floor(o.maxRows)) : t.nrows;
  var n = Math.min(t.nrows, maxRows);
  var nullText = typeof o.nullText === "string" ? o.nullText : null;
  var out = ["<table" + cls + ">"];
  var c, i;
  if (o.caption) out.push("<caption>" + mcTbEscapeHtml(o.caption) + "</caption>");
  out.push("<thead><tr>");
  for (c = 0; c < t.cols.length; c++) {
    out.push(
      '<th scope="col" data-type="' + mcTbEscapeHtml(t.cols[c].type) + '">' +
        mcTbEscapeHtml(t.cols[c].name) +
        "</th>"
    );
  }
  out.push("</tr></thead><tbody>");
  for (i = 0; i < n; i++) {
    out.push("<tr>");
    for (c = 0; c < t.cols.length; c++) {
      var v = t.data[c][i];
      var text = nullText !== null && mcTbIsBlank(v) ? nullText : mcTbFormatCell(t, i, c);
      var attr = "";
      if (v === undefined) attr = ' class="mcTb-missing"';
      else if (v === null) attr = ' class="mcTb-null"';
      else if (v === "") attr = ' class="mcTb-empty"';
      out.push("<td" + attr + ">" + mcTbEscapeHtml(text) + "</td>");
    }
    out.push("</tr>");
  }
  out.push("</tbody>");
  if (n < t.nrows) {
    out.push(
      '<tfoot><tr><td colspan="' + t.cols.length + '">' +
        mcTbEscapeHtml(t.nrows - n + " more row(s)") +
        "</td></tr></tfoot>"
    );
  }
  out.push("</table>");
  return out.join("");
}

/* ================================================================== *
 * Self test
 * ================================================================== */

function mcTbSelfTest() {
  var passed = 0;
  var failures = [];

  function ok(name, cond, detail) {
    if (cond) passed++;
    else failures.push(name + (detail === undefined ? "" : " -> " + detail));
  }
  function eq(name, actual, expected) {
    ok(name, actual === expected, JSON.stringify(actual) + " != " + JSON.stringify(expected));
  }
  function deep(name, actual, expected) {
    var a = JSON.stringify(actual);
    var b = JSON.stringify(expected);
    ok(name, a === b, a + " != " + b);
  }

  // ---------------- state machine: the cases everyone gets wrong ----------
  var r;

  r = mcTbParseRecords("a,b,c\n1,2,3", { delimiter: "," });
  deep("plain csv", r.records, [["a", "b", "c"], ["1", "2", "3"]]);

  r = mcTbParseRecords('a,"b,c",d', { delimiter: "," });
  deep("embedded delimiter in quotes", r.records, [["a", "b,c", "d"]]);

  r = mcTbParseRecords('a,"line1\nline2",c', { delimiter: "," });
  deep("embedded newline in quotes", r.records, [["a", "line1\nline2", "c"]]);

  r = mcTbParseRecords('a,"say ""hi""",c', { delimiter: "," });
  deep("escaped quotes", r.records, [["a", 'say "hi"', "c"]]);

  r = mcTbParseRecords('"""",x', { delimiter: "," });
  deep("field that is just an escaped quote", r.records, [['"', "x"]]);

  r = mcTbParseRecords('"a""""b"', { delimiter: "," });
  deep("two escaped quotes in a row", r.records, [['a""b']]);

  r = mcTbParseRecords("a,b\r\n1,2\r\n", { delimiter: "," });
  deep("CRLF line endings", r.records, [["a", "b"], ["1", "2"]]);

  r = mcTbParseRecords("a,b\r1,2", { delimiter: "," });
  deep("lone CR as record separator", r.records, [["a", "b"], ["1", "2"]]);

  r = mcTbParseRecords('x,"a\r\nb"', { delimiter: "," });
  deep("CRLF inside quotes normalized to LF", r.records, [["x", "a\nb"]]);

  r = mcTbParseRecords("\uFEFFa,b\n1,2", { delimiter: "," });
  ok("BOM detected", r.bom === true);
  deep("BOM stripped from first header", r.records, [["a", "b"], ["1", "2"]]);

  r = mcTbParseRecords("a,b\n1,2\n", { delimiter: "," });
  eq("trailing newline makes no phantom record", r.records.length, 2);

  r = mcTbParseRecords("a,b\n\n1,2", { delimiter: "," });
  eq("blank line skipped by default", r.records.length, 2);

  r = mcTbParseRecords("a,b\n\n1,2", { delimiter: ",", skipEmptyLines: false });
  eq("blank line kept when asked", r.records.length, 3);

  r = mcTbParseRecords('""', { delimiter: "," });
  deep("a lone quoted empty field is a real record", r.records, [[""]]);

  r = mcTbParseRecords("a,,b", { delimiter: "," });
  deep("empty middle field", r.records, [["a", "", "b"]]);

  r = mcTbParseRecords("a,b,", { delimiter: "," });
  deep("trailing empty field survives", r.records, [["a", "b", ""]]);

  r = mcTbParseRecords('"unterminated,x', { delimiter: "," });
  deep("unterminated quote recovers", r.records, [["unterminated,x"]]);
  ok("unterminated quote warns", r.warnings.length > 0, JSON.stringify(r.warnings));

  r = mcTbParseRecords('"ab"cd,e', { delimiter: "," });
  deep("junk after closing quote kept literally", r.records, [["abcd", "e"]]);
  ok("junk after quote warns", r.warnings.length > 0);

  r = mcTbParseRecords('a"b,c', { delimiter: "," });
  deep("bare quote in unquoted field is literal", r.records, [['a"b', "c"]]);

  r = mcTbParseRecords("a\tb\tc", { delimiter: "\t" });
  deep("tab delimiter", r.records, [["a", "b", "c"]]);

  r = mcTbParseRecords("a;b;c", { delimiter: ";" });
  deep("semicolon delimiter", r.records, [["a", "b", "c"]]);

  r = mcTbParseRecords("", { delimiter: "," });
  eq("empty input yields no records", r.records.length, 0);

  r = mcTbParseRecords(null, { delimiter: "," });
  eq("null input yields no records", r.records.length, 0);

  r = mcTbParseRecords(undefined, { delimiter: "," });
  eq("undefined input yields no records", r.records.length, 0);

  r = mcTbParseRecords(12345, { delimiter: "," });
  deep("number input is stringified", r.records, [["12345"]]);

  r = mcTbParseRecords("a,b\n1,2,3\n4", { delimiter: "," });
  deep("ragged records preserved verbatim", r.records, [["a", "b"], ["1", "2", "3"], ["4"]]);

  r = mcTbParseRecords("'a,b',c", { delimiter: ",", quoteChar: "'" });
  deep("custom quote char", r.records, [["a,b", "c"]]);

  r = mcTbParseRecords("a,b\n1,2\n3,4", { delimiter: ",", maxRecords: 2 });
  eq("maxRecords stops early", r.records.length, 2);
  ok("maxRecords flags stopped", r.stopped === true);

  // ---------------- delimiter detection ----------------------------------
  eq("detect comma", mcTbDetectDelimiter("a,b,c\n1,2,3").delimiter, ",");
  eq("detect semicolon", mcTbDetectDelimiter("a;b;c\n1;2;3").delimiter, ";");
  eq("detect tab", mcTbDetectDelimiter("a\tb\tc\n1\t2\t3").delimiter, "\t");
  eq("detect pipe", mcTbDetectDelimiter("a|b|c\n1|2|3").delimiter, "|");
  // The case a naive character count gets wrong: more commas than semicolons,
  // but the commas are all inside quoted fields.
  eq(
    "detect semicolon despite quoted commas",
    mcTbDetectDelimiter('name;note\n"Smith, John";"a, b, c"\n"Doe, Jane";"d, e, f"').delimiter,
    ";"
  );
  eq("single column falls back to comma", mcTbDetectDelimiter("alpha\nbeta\ngamma").delimiter, ",");
  eq("single column has zero confidence", mcTbDetectDelimiter("alpha\nbeta").confidence, 0);
  eq("empty text detection is safe", mcTbDetectDelimiter("").delimiter, ",");
  eq("null text detection is safe", mcTbDetectDelimiter(null).delimiter, ",");

  // ---------------- number / date classification -------------------------
  ok("int", mcTbParseNumberish("42").kind === "integer" && mcTbParseNumberish("42").value === 42);
  ok("negative int", mcTbParseNumberish("-7").value === -7);
  ok("float", mcTbParseNumberish("3.5").kind === "float" && mcTbParseNumberish("3.5").value === 3.5);
  ok("exponent", mcTbParseNumberish("1.5e3").value === 1500);
  ok("grouped int", mcTbParseNumberish("1,234,567").value === 1234567);
  ok("malformed grouping rejected", mcTbParseNumberish("1,23").ok === false);
  ok("currency symbol", mcTbParseNumberish("$1,234.50").kind === "currency");
  ok("currency value", mcTbParseNumberish("$1,234.50").value === 1234.5);
  ok("trailing currency", mcTbParseNumberish("1234 EUR").kind === "currency");
  ok("accounting negative", mcTbParseNumberish("(1,200)").value === -1200);
  ok("percent keeps magnitude", mcTbParseNumberish("85%").value === 85);
  ok("percent kind", mcTbParseNumberish("85%").kind === "percentage");
  ok("currency+percent rejected", mcTbParseNumberish("$5%").ok === false);
  ok("empty is not a number", mcTbParseNumberish("").ok === false);
  ok("word is not a number", mcTbParseNumberish("hello").ok === false);
  ok("lone sign is not a number", mcTbParseNumberish("-").ok === false);
  ok("lone dot is not a number", mcTbParseNumberish(".").ok === false);
  ok("null is not a number", mcTbParseNumberish(null).ok === false);

  ok("iso date", mcTbParseDate("2024-03-15").ok);
  eq("iso date is UTC midnight", new Date(mcTbParseDate("2024-03-15").ms).toISOString(), "2024-03-15T00:00:00.000Z");
  ok("iso datetime", mcTbParseDate("2024-03-15T08:30:00Z").ok);
  eq(
    "iso offset applied",
    new Date(mcTbParseDate("2024-03-15T08:30:00+02:00").ms).toISOString(),
    "2024-03-15T06:30:00.000Z"
  );
  ok("feb 30 rejected", mcTbParseDate("2024-02-30").ok === false);
  ok("month 13 rejected", mcTbParseDate("2024-13-01").ok === false);
  ok("leap day accepted", mcTbParseDate("2024-02-29").ok === true);
  ok("non leap day rejected", mcTbParseDate("2023-02-29").ok === false);
  ok("named date dmy", mcTbParseDate("15 Mar 2024").ok);
  ok("named date mdy", mcTbParseDate("Mar 15, 2024").ok);
  ok("ymd slash", mcTbParseDate("2024/03/15").ok);
  ok("ambiguous flagged", mcTbParseDate("03/04/2024", "mdy").ambiguous === true);
  ok("unambiguous not flagged", mcTbParseDate("25/04/2024", "dmy").ambiguous === false);
  eq(
    "dmy order respected",
    new Date(mcTbParseDate("03/04/2024", "dmy").ms).toISOString().slice(0, 10),
    "2024-04-03"
  );
  eq(
    "mdy order respected",
    new Date(mcTbParseDate("03/04/2024", "mdy").ms).toISOString().slice(0, 10),
    "2024-03-04"
  );
  ok("junk date rejected", mcTbParseDate("not a date").ok === false);
  ok("empty date rejected", mcTbParseDate("").ok === false);
  eq("column resolves dmy from evidence", mcTbResolveDateOrder(["01/02/2024", "25/03/2024"], "mdy"), "dmy");
  eq("column resolves mdy from evidence", mcTbResolveDateOrder(["01/02/2024", "03/25/2024"], "dmy"), "mdy");
  eq("conflicting evidence uses fallback", mcTbResolveDateOrder(["25/01/2024", "01/25/2024"], "mdy"), "mdy");

  // ---------------- type inference ---------------------------------------
  eq("all ints -> integer", mcTbInferType(["1", "2", "3"]).type, "integer");
  eq("ints+floats -> float", mcTbInferType(["1", "2.5", "3"]).type, "float");
  eq("currency column", mcTbInferType(["$1", "$2", "3"]).type, "currency");
  eq("percentage column", mcTbInferType(["1%", "2%", "3%"]).type, "percentage");
  eq("boolean column", mcTbInferType(["true", "false", "yes"]).type, "boolean");
  eq("date column", mcTbInferType(["2024-01-01", "2024-01-02"]).type, "date");
  eq("string column", mcTbInferType(["a", "b", "c"]).type, "string");
  eq("empty column", mcTbInferType(["", "", ""]).type, "empty");
  eq("all nulls -> empty", mcTbInferType(["NULL", "N/A", ""]).type, "empty");
  eq("half and half -> mixed", mcTbInferType(["1", "2", "a", "b"]).type, "mixed");
  eq(
    "one bad value in ten stays integer",
    mcTbInferType(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "oops"]).type,
    "integer"
  );
  ok(
    "confidence reflects the outlier",
    Math.abs(mcTbInferType(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "oops"]).confidence - 0.9091) < 0.001
  );
  ok("0/1 is not boolean", mcTbInferType(["0", "1", "0", "1"]).type === "integer");
  eq("empty sample list", mcTbInferType([]).type, "empty");

  // ---------------- table construction and the three blank states --------
  var t1 = mcTbParse("name,qty,price\nWidget,3,$4.50\nGadget,,NULL\nBolt,7,$1.00");
  eq("parsed rows", mcTbNrows(t1), 3);
  eq("parsed cols", mcTbNcols(t1), 3);
  deep("column names", mcTbColumnNames(t1), ["name", "qty", "price"]);
  eq("qty type", t1.cols[1].type, "integer");
  eq("price type", t1.cols[2].type, "currency");
  eq("empty cell is EMPTY", mcTbGet(t1, 1, "qty"), "");
  eq("NULL token is NULL", mcTbGet(t1, 1, "price"), null);
  eq("missing column is undefined", mcTbGet(t1, 0, "nope"), undefined);
  eq("out of range row is undefined", mcTbGet(t1, 99, "qty"), undefined);
  eq("raw preserved for currency", mcTbGetRaw(t1, 0, "price"), "$4.50");
  eq("value parsed for currency", mcTbGet(t1, 0, "price"), 4.5);
  eq("raw preserved for the null token", mcTbGetRaw(t1, 1, "price"), "NULL");
  eq("EMPTY is not NULL", mcTbIsNull(mcTbGet(t1, 1, "qty")), false);
  eq("EMPTY is blank", mcTbIsBlank(mcTbGet(t1, 1, "qty")), true);
  eq("MISSING is null-ish", mcTbIsNull(mcTbGet(t1, 0, "nope")), true);

  var tRag = mcTbParse("a,b,c\n1,2\n4,5,6,7");
  eq("ragged widens to the widest row", mcTbNcols(tRag), 4);
  eq("extra column auto-named", tRag.cols[3].name, "col4");
  eq("short row cell is MISSING", mcTbGet(tRag, 0, "c"), undefined);
  eq("short row is not EMPTY", mcTbGet(tRag, 0, "c") === "", false);
  eq("extra cell preserved", mcTbGet(tRag, 1, "col4"), 7);
  ok("ragged warns", tRag.meta.warnings.length >= 2, JSON.stringify(tRag.meta.warnings));

  var tDup = mcTbParse("a,a,\n1,2,3");
  deep("duplicate and blank headers disambiguated", mcTbColumnNames(tDup), ["a", "a_2", "col3"]);

  var tNoHead = mcTbParse("1,2\n3,4", { header: false });
  deep("headerless names", mcTbColumnNames(tNoHead), ["col1", "col2"]);
  eq("headerless keeps first row", mcTbNrows(tNoHead), 2);

  var tMixed = mcTbParse("v\n1\n2\nnope\n4\n5\n6\n7\n8\n9\n10");
  eq("mostly-int column typed integer", tMixed.cols[0].type, "integer");
  eq("non-conforming cell keeps its raw string", mcTbGet(tMixed, 2, "v"), "nope");
  ok("mixed flag set", tMixed.cols[0].mixed === true);

  // ---------------- query -------------------------------------------------
  var q = mcTbParse(
    "region,rep,amount,when\n" +
      "West,Ann,100,2024-01-05\n" +
      "East,Bob,250,2024-01-06\n" +
      "West,Cid,,2024-02-01\n" +
      "East,Ann,50,2024-02-02\n" +
      "West,Bob,300,2024-03-03\n" +
      "North,Dee,NULL,2024-03-04"
  );
  eq("query table rows", mcTbNrows(q), 6);
  eq("amount type", q.cols[2].type, "integer");
  eq("when type", q.cols[3].type, "date");

  var sel = mcTbSelect(q, ["rep", "amount"]);
  deep("select projects", mcTbColumnNames(sel), ["rep", "amount"]);
  eq("select keeps rows", mcTbNrows(sel), 6);
  var selBad = mcTbSelect(q, ["rep", "ghost"]);
  deep("select ignores unknown", mcTbColumnNames(selBad), ["rep"]);
  ok("select warns about unknown", selBad.meta.warnings.length === 1);
  deep("drop removes", mcTbColumnNames(mcTbDrop(q, ["when", "rep"])), ["region", "amount"]);

  var filt = mcTbFilter(q, function (row) {
    return row.region === "West";
  });
  eq("filter rows", mcTbNrows(filt), 3);
  ok("filter is non-mutating", mcTbNrows(q) === 6);
  var filtThrow = mcTbFilter(q, function (row) {
    if (row.rep === "Bob") throw new Error("boom");
    return true;
  });
  eq("throwing predicate drops only its rows", mcTbNrows(filtThrow), 4);
  ok("throwing predicate warns", filtThrow.meta.warnings.length === 1);
  eq("non-function predicate is identity", mcTbNrows(mcTbFilter(q, null)), 6);

  var sorted = mcTbSort(q, [{ col: "region", dir: "asc" }, { col: "amount", dir: "desc" }]);
  deep("multi-key sort regions", mcTbColumn(sorted, "region"), [
    "East", "East", "North", "West", "West", "West"
  ]);
  deep("multi-key sort amounts, nulls last", mcTbColumn(sorted, "amount"), [
    250, 50, null, 300, 100, ""
  ]);
  var sortedDesc = mcTbSort(q, "-amount");
  eq("desc sort top", mcTbGet(sortedDesc, 0, "amount"), 300);
  ok(
    "nulls stay last when descending",
    mcTbIsBlank(mcTbGet(sortedDesc, 4, "amount")) && mcTbIsBlank(mcTbGet(sortedDesc, 5, "amount"))
  );
  // Stability: sorting only by region must keep the original rep order.
  deep("sort is stable", mcTbColumn(mcTbSort(q, "region"), "rep"), [
    "Bob", "Ann", "Dee", "Ann", "Cid", "Bob"
  ]);
  eq("sort with unknown key is identity", mcTbGet(mcTbSort(q, "ghost"), 0, "rep"), "Ann");

  deep("limit", mcTbColumn(mcTbLimit(q, 2), "rep"), ["Ann", "Bob"]);
  deep("offset+limit", mcTbColumn(mcTbSlice(q, 2, 2), "rep"), ["Cid", "Ann"]);
  eq("offset past the end is empty", mcTbNrows(mcTbSlice(q, 99, 5)), 0);
  eq("negative offset clamps", mcTbNrows(mcTbSlice(q, -5, 2)), 2);
  eq("garbage limit means all rows", mcTbNrows(mcTbSlice(q, 0, "x")), 6);

  deep("distinct on one column", mcTbColumn(mcTbDistinct(q, ["region"]), "region"), ["West", "East", "North"]);
  eq("distinct keeps first occurrence", mcTbGet(mcTbDistinct(q, ["region"]), 0, "rep"), "Ann");
  eq("distinct on all columns", mcTbNrows(mcTbDistinct(q)), 6);

  // ---------------- join --------------------------------------------------
  var reps = mcTbParse("rep,team\nAnn,Alpha\nBob,Beta\nAnn,Gamma");
  var inner = mcTbJoin(q, reps, { on: "rep", type: "inner" });
  eq("inner join row count (Ann x2 twice, Bob x2)", mcTbNrows(inner), 6);
  deep("join column names", mcTbColumnNames(inner), ["region", "rep", "amount", "when", "team"]);
  var lj = mcTbJoin(q, reps, { on: "rep", type: "left" });
  eq("left join keeps unmatched", mcTbNrows(lj), 8);
  eq("unmatched right cell is MISSING", mcTbGet(lj, mcTbNrows(lj) - 1, "team"), undefined);
  eq("unmatched right cell is not EMPTY", mcTbGet(lj, mcTbNrows(lj) - 1, "team") === "", false);

  var nullKeyL = mcTbFromObjects([{ k: null, v: 1 }, { k: "a", v: 2 }]);
  var nullKeyR = mcTbFromObjects([{ k: null, w: 9 }, { k: "a", w: 8 }]);
  eq("null keys never match (inner)", mcTbNrows(mcTbJoin(nullKeyL, nullKeyR, { on: "k" })), 1);
  eq("null key row survives a left join", mcTbNrows(mcTbJoin(nullKeyL, nullKeyR, { on: "k", type: "left" })), 2);

  var collide = mcTbFromObjects([{ rep: "Ann", amount: 1 }]);
  var joined2 = mcTbJoin(q, collide, { on: "rep" });
  ok("colliding right column suffixed", mcTbColIndex(joined2, "amount_r") >= 0, mcTbColumnNames(joined2).join(","));
  eq("bad join key returns empty table", mcTbNrows(mcTbJoin(q, reps, { on: "ghost" })), 0);
  eq("join with a non-table is empty", mcTbNrows(mcTbJoin(q, null, { on: "rep" })), 0);

  // ---------------- aggregation ------------------------------------------
  eq("mean skips blanks", mcTbAggregateValues([1, null, "", undefined, 3], "mean"), 2);
  eq("sum skips blanks", mcTbAggregateValues([1, null, "", 3], "sum"), 4);
  eq("count counts values only", mcTbAggregateValues([1, null, "", 3], "count"), 2);
  eq("size counts rows", mcTbAggregateValues([1, null, "", 3], "size"), 4);
  eq("nulls counts blanks", mcTbAggregateValues([1, null, "", 3], "nulls"), 2);
  eq("sum of nothing is null not zero", mcTbAggregateValues([null, "", undefined], "sum"), null);
  eq("mean of nothing is null not NaN", mcTbAggregateValues([null, ""], "mean"), null);
  eq("count of nothing is zero", mcTbAggregateValues([null, ""], "count"), 0);
  eq("median odd", mcTbAggregateValues([3, 1, 2], "median"), 2);
  eq("median even averages", mcTbAggregateValues([1, 2, 3, 4], "median"), 2.5);
  eq("median of strings is the lower middle", mcTbAggregateValues(["ant", "bee", "cow", "dog"], "median"), "bee");
  eq("min", mcTbAggregateValues([3, 1, 2], "min"), 1);
  eq("max", mcTbAggregateValues([3, 1, 2], "max"), 3);
  eq("min on strings", mcTbAggregateValues(["pear", "apple"], "min"), "apple");
  eq("stddev of 2,4,4,4,5,5,7,9", mcTbRound(mcTbAggregateValues([2, 4, 4, 4, 5, 5, 7, 9], "stddev"), 4), 2.1381);
  eq("stddev of one value is null", mcTbAggregateValues([5], "stddev"), null);
  eq("variance", mcTbRound(mcTbAggregateValues([2, 4, 6], "variance"), 6), 4);
  eq("first skips leading blanks", mcTbAggregateValues([null, "", 7, 8], "first"), 7);
  eq("last skips trailing blanks", mcTbAggregateValues([7, 8, null, ""], "last"), 8);
  eq("distinct count", mcTbAggregateValues([1, 1, 2, null, 2, 3], "distinct"), 3);
  eq("booleans are not summed", mcTbAggregateValues([true, true, false], "sum"), null);
  eq("Infinity is skipped", mcTbAggregateValues([1, Infinity, 3], "sum"), 4);
  eq("NaN is skipped", mcTbAggregateValues([1, NaN, 3], "mean"), 2);
  eq("aggregate of a non-array is safe", mcTbAggregateValues(null, "mean"), null);
  ok("min of dates returns a Date", mcTbAggregateValues([new Date(2000), new Date(1000)], "min") instanceof Date);
  eq("mean of dates is epoch ms", mcTbAggregateValues([new Date(1000), new Date(3000)], "mean"), 2000);

  var g = mcTbGroupBy(q, ["region"], [
    { col: "amount", op: "sum", as: "total" },
    { col: "amount", op: "count", as: "n" },
    { op: "size", as: "rows" },
    { col: "amount", op: "mean", as: "avg" }
  ]);
  deep("group order is first appearance", mcTbColumn(g, "region"), ["West", "East", "North"]);
  deep("group sums", mcTbColumn(g, "total"), [400, 300, null]);
  deep("count is non-null count", mcTbColumn(g, "n"), [2, 2, 0]);
  deep("size is row count", mcTbColumn(g, "rows"), [3, 2, 1]);
  deep("mean skips the blank rows", mcTbColumn(g, "avg"), [200, 150, null]);
  eq("all-null group sums to null, not 0", mcTbGet(g, 2, "total"), null);

  var g2 = mcTbGroupBy(q, ["region", "rep"], [{ col: "amount", op: "sum", as: "total" }]);
  eq("two-level grouping", mcTbNrows(g2), 6);
  eq("two-level keeps both keys", mcTbColIndex(g2, "rep") >= 0, true);
  var gNone = mcTbGroupBy(q, [], [{ col: "amount", op: "sum", as: "total" }]);
  eq("grouping with no keys gives one row", mcTbNrows(gNone), 1);
  eq("grand total", mcTbGet(gNone, 0, "total"), 700);
  eq("groupBy on an empty table is empty", mcTbNrows(mcTbGroupBy(mcTbEmpty(), ["x"], [])), 0);
  eq("groupBy with no aggs still counts", mcTbColIndex(mcTbGroupBy(q, ["region"], []), "n") >= 0, true);

  var piv = mcTbPivot(q, { rows: ["region"], cols: "rep", value: "amount", op: "sum" });
  deep("pivot columns sorted", mcTbColumnNames(piv), ["region", "Ann", "Bob", "Cid", "Dee"]);
  eq("pivot rows", mcTbNrows(piv), 3);
  eq("pivot cell", mcTbGet(piv, 0, "Ann"), 100);
  eq("pivot absent cell is null not zero", mcTbGet(piv, 0, "Dee"), null);
  eq("pivot fill honoured", mcTbGet(mcTbPivot(q, { rows: ["region"], cols: "rep", value: "amount", fill: 0 }), 0, "Dee"), 0);
  eq("pivot with a bad axis is empty", mcTbNrows(mcTbPivot(q, { rows: ["region"], cols: "ghost" })), 0);

  // ---------------- derive / rename / reorder ----------------------------
  var d1 = mcTbDerive(q, "double", function (row) {
    return typeof row.amount === "number" ? row.amount * 2 : null;
  });
  eq("derive adds a column", mcTbNcols(d1), 5);
  eq("derive computes", mcTbGet(d1, 0, "double"), 200);
  eq("derive nulls the blanks", mcTbGet(d1, 2, "double"), null);
  eq("derive does not mutate", mcTbNcols(q), 4);
  var dBoom = mcTbDerive(q, "boom", function () {
    throw new Error("nope");
  });
  eq("throwing derive yields nulls", mcTbGet(dBoom, 0, "boom"), null);
  ok("throwing derive warns", dBoom.meta.warnings.length === 1);
  var dInf = mcTbDerive(q, "inf", function () {
    return 1 / 0;
  });
  eq("non-finite derive becomes null", mcTbGet(dInf, 0, "inf"), null);
  var dRep = mcTbDerive(q, "amount", function () {
    return 1;
  });
  eq("derive over an existing name replaces in place", mcTbNcols(dRep), 4);
  eq("replaced column keeps its position", mcTbColIndex(dRep, "amount"), 2);

  deep("rename", mcTbColumnNames(mcTbRename(q, { rep: "person" })), ["region", "person", "amount", "when"]);
  deep(
    "rename collision disambiguated",
    mcTbColumnNames(mcTbRename(q, { rep: "region" })),
    ["region", "region_2", "amount", "when"]
  );
  deep("reorder", mcTbColumnNames(mcTbReorder(q, ["amount", "rep"])), ["amount", "rep", "region", "when"]);
  deep("reorder never drops", mcTbColumnNames(mcTbReorder(q, ["ghost"])), ["region", "rep", "amount", "when"]);

  var cat = mcTbConcat(mcTbSelect(q, ["region", "amount"]), mcTbFromObjects([{ region: "South", extra: 1 }]));
  eq("concat rows", mcTbNrows(cat), 7);
  eq("concat unions columns", mcTbColIndex(cat, "extra") >= 0, true);
  eq("column absent on one side is MISSING", mcTbGet(cat, 0, "extra"), undefined);

  // ---------------- describe ---------------------------------------------
  var desc = mcTbDescribe(q);
  eq("describe covers every column", desc.length, 4);
  var amountStats = desc[2];
  eq("describe nonNull", amountStats.nonNull, 4);
  eq("describe empties", amountStats.empties, 1);
  eq("describe nulls", amountStats.nulls, 1);
  eq("describe missing", amountStats.missing, 0);
  eq("describe distinct", amountStats.distinct, 4);
  eq("describe mean", amountStats.mean, 175);
  eq("describe min", amountStats.min, 50);
  eq("describe max", amountStats.max, 300);
  eq("describe sum", amountStats.sum, 700);
  ok("describe p25/p75 present", amountStats.p25 !== null && amountStats.p75 !== null);
  eq("string column has no mean", desc[1].mean, null);
  eq("string column cardinality", desc[1].distinct, 4);
  eq("string column top", desc[1].top, "Ann");
  eq("string column top count", desc[1].topCount, 2);
  eq("describe of a non-table is empty", mcTbDescribe(null).length, 0);
  eq("describeTable is a table", mcTbIsTable(mcTbDescribeTable(q)), true);
  eq("stats for an unknown column are safe", mcTbColumnStats(q, "ghost").rows, 0);

  // ---------------- export ------------------------------------------------
  var evil =
    'name,note\n' +
    '"Smith, John","He said ""hi"" then left"\n' +
    '"Multi\nline","tab\there"\n' +
    'plain,"trailing space "\n';
  var tEvil = mcTbParse(evil, { delimiter: "," });
  eq("hostile parse rows", mcTbNrows(tEvil), 3);
  eq("comma in quotes survives", mcTbGet(tEvil, 0, "name"), "Smith, John");
  eq("escaped quotes survive", mcTbGet(tEvil, 0, "note"), 'He said "hi" then left');
  eq("newline in quotes survives", mcTbGet(tEvil, 1, "name"), "Multi\nline");

  var csvOut = mcTbToCsv(tEvil);
  var tRound = mcTbParse(csvOut, { delimiter: "," });
  eq("round-trip row count", mcTbNrows(tRound), mcTbNrows(tEvil));
  eq("round-trip col count", mcTbNcols(tRound), mcTbNcols(tEvil));
  var rtOk = true;
  var rtDetail = "";
  for (var rr = 0; rr < mcTbNrows(tEvil); rr++) {
    for (var cc2 = 0; cc2 < mcTbNcols(tEvil); cc2++) {
      var a1 = mcTbGet(tEvil, rr, cc2);
      var b1 = mcTbGet(tRound, rr, cc2);
      if (a1 !== b1) {
        rtOk = false;
        rtDetail = "[" + rr + "," + cc2 + "] " + JSON.stringify(a1) + " != " + JSON.stringify(b1);
      }
    }
  }
  ok("CSV round-trip is lossless", rtOk, rtDetail);
  deep("round-trip preserves headers", mcTbColumnNames(tRound), mcTbColumnNames(tEvil));

  // Round-trip the typed table too: raw text must come back intact.
  var t1Round = mcTbParse(mcTbToCsv(t1), { delimiter: "," });
  eq("round-trip keeps the null token", mcTbGetRaw(t1Round, 1, "price"), "NULL");
  eq("round-trip keeps NULL as null", mcTbGet(t1Round, 1, "price"), null);
  eq("round-trip keeps EMPTY as empty", mcTbGet(t1Round, 1, "qty"), "");
  eq("round-trip keeps currency raw", mcTbGetRaw(t1Round, 0, "price"), "$4.50");

  eq("quote only when needed", mcTbQuoteField("plain", ",", '"'), "plain");
  eq("quote a delimiter", mcTbQuoteField("a,b", ",", '"'), '"a,b"');
  eq("quote a quote", mcTbQuoteField('a"b', ",", '"'), '"a""b"');
  eq("quote a newline", mcTbQuoteField("a\nb", ",", '"'), '"a\nb"');
  eq("quote padded fields", mcTbQuoteField(" a ", ",", '"'), '" a "');
  eq("quotePadded off", mcTbQuoteField(" a ", ",", '"', { quotePadded: false }), " a ");
  eq("quoteAll", mcTbQuoteField("a", ",", '"', { quoteAll: true }), '"a"');
  eq("tab needs no quoting under comma", mcTbQuoteField("a\tb", ",", '"'), "a\tb");
  eq("tab needs quoting under tab", mcTbQuoteField("a\tb", "\t", '"'), '"a\tb"');
  eq("formula neutralized when asked", mcTbQuoteField("=1+1", ",", '"', { sanitizeFormulas: true }), "'=1+1");
  eq("negative number not treated as a formula", mcTbQuoteField("-5", ",", '"', { sanitizeFormulas: true }), "-5");
  eq("quoteField on null is empty", mcTbQuoteField(null, ",", '"'), "");

  var tsv = mcTbToTsv(tEvil);
  ok("tsv uses tabs", tsv.indexOf("\t") >= 0);
  var tsvRound = mcTbParse(tsv, { delimiter: "\t" });
  eq("tsv round-trips the tab cell", mcTbGet(tsvRound, 1, "note"), "tab\there");
  eq("tsv round-trip rows", mcTbNrows(tsvRound), 3);

  var objs = mcTbToObjects(t1);
  eq("toObjects length", objs.length, 3);
  eq("toObjects value", objs[0].price, 4.5);
  eq("toObjects keeps null", objs[1].price, null);
  eq("toObjects keeps empty string", objs[1].qty, "");
  var jsonText = mcTbToJson(t1);
  ok("toJson parses", (function () {
    try {
      return JSON.parse(jsonText).length === 3;
    } catch (e) {
      return false;
    }
  })());
  ok("toJson has no NaN text", jsonText.indexOf("NaN") < 0);
  ok("toJson has no undefined text", jsonText.indexOf("undefined") < 0);
  ok("toJson table shape", mcTbToJson(t1, { shape: "table" }).indexOf('"columns"') > 0);
  eq("toJson of a non-table is an empty array", mcTbToJson(null), "[]");

  var md = mcTbToMarkdown(t1);
  ok("markdown has a header rule", md.indexOf("| ---:") >= 0 || md.indexOf("| :---") >= 0);
  eq("markdown line count", md.split("\n").length, 5);
  var mdPipe = mcTbToMarkdown(mcTbFromObjects([{ a: "x|y", b: "line\nbreak" }]));
  ok("markdown escapes pipes", mdPipe.indexOf("x\\|y") > 0, mdPipe);
  ok("markdown flattens newlines", mdPipe.indexOf("line break") > 0, mdPipe);
  ok("markdown never emits a bare newline inside a row", mdPipe.split("\n").length === 3, mdPipe);

  // ---------------- HTML escaping: assume the data is hostile ------------
  eq("escape ampersand", mcTbEscapeHtml("a&b"), "a&amp;b");
  eq("escape angles", mcTbEscapeHtml("<b>"), "&lt;b&gt;");
  eq("escape quotes", mcTbEscapeHtml("\"'"), "&quot;&#39;");
  eq("escape backtick", mcTbEscapeHtml("`"), "&#96;");
  eq("escape null", mcTbEscapeHtml(null), "");
  eq("escape undefined", mcTbEscapeHtml(undefined), "");
  eq("escape number", mcTbEscapeHtml(5), "5");
  eq("escape ordering (& first)", mcTbEscapeHtml("&lt;"), "&amp;lt;");

  var closer = "<" + "/script>";
  var hostileTable = mcTbFromObjects([
    { "<img src=x onerror=alert(1)>": closer, "b": '"><b>bold</b>' },
    { "<img src=x onerror=alert(1)>": "&amp;", "b": "</table><tr>" }
  ]);
  var html = mcTbToHtml(hostileTable, { className: '"><b>x</b>', caption: "<i>cap</i>" });
  ok("html has no raw open angle from data", html.indexOf("<img") < 0, html.slice(0, 200));
  ok("html has no raw closer sequence", html.toLowerCase().indexOf(closer.toLowerCase()) < 0);
  ok("html has no raw </table> from data", html.indexOf("</table><tr>") < 0);
  ok("html escapes the class attribute", html.indexOf('class="&quot;&gt;') > 0, html.slice(0, 120));
  ok("html escapes the caption", html.indexOf("&lt;i&gt;cap&lt;/i&gt;") > 0);
  ok("html double-escapes an entity from data", html.indexOf("&amp;amp;") > 0);
  ok("html has a real table wrapper", html.indexOf("<table") === 0 && html.lastIndexOf("</table>") === html.length - 8);
  ok("html never emits undefined", html.indexOf("undefined") < 0);
  ok("html never emits NaN", html.indexOf("NaN") < 0);
  var htmlNull = mcTbToHtml(q);
  ok("html marks null cells", htmlNull.indexOf('class="mcTb-null"') > 0);
  ok("html marks empty cells", htmlNull.indexOf('class="mcTb-empty"') > 0);
  ok("html marks missing cells", mcTbToHtml(lj).indexOf('class="mcTb-missing"') > 0);
  eq("html of a non-table is an empty table", mcTbToHtml(null), "<table></table>");
  ok("html truncation adds a footer", mcTbToHtml(q, { maxRows: 2 }).indexOf("<tfoot>") > 0);

  // Every quote-worthy character survives an HTML escape then a CSV round-trip.
  eq("formatValue of NaN is empty", mcTbFormatValue(NaN), "");
  eq("formatValue of Infinity is empty", mcTbFormatValue(Infinity), "");
  eq("formatValue of undefined is empty", mcTbFormatValue(undefined), "");
  eq("formatValue of null is empty", mcTbFormatValue(null), "");
  eq("formatValue of a bool", mcTbFormatValue(false), "false");
  eq("formatValue of a midnight date", mcTbFormatValue(new Date(Date.UTC(2024, 0, 5))), "2024-01-05");
  eq("formatValue of an invalid date", mcTbFormatValue(new Date(NaN)), "");
  eq("formatValue of an object", mcTbFormatValue({ a: 1 }), '{"a":1}');

  // ---------------- hostile / degenerate input ---------------------------
  var hostile = [null, undefined, "", "   ", "\n", ",", "\"", 0, 1, NaN, Infinity, {}, [], true];
  var hostileSafe = true;
  var hostileErr = "";
  try {
    for (var hi = 0; hi < hostile.length; hi++) {
      var ht = mcTbParse(hostile[hi]);
      mcTbToCsv(ht);
      mcTbToTsv(ht);
      mcTbToJson(ht);
      mcTbToHtml(ht);
      mcTbToMarkdown(ht);
      mcTbDescribe(ht);
      mcTbSort(ht, ["a"]);
      mcTbFilter(ht, function () {
        return true;
      });
      mcTbGroupBy(ht, ["a"], [{ col: "a", op: "sum", as: "s" }]);
      mcTbPivot(ht, { rows: ["a"], cols: "b", value: "c" });
      mcTbJoin(ht, ht, { on: "a" });
      mcTbDistinct(ht);
      mcTbDerive(ht, "x", function () {
        return 1;
      });
      mcTbSelect(ht, ["a"]);
      mcTbRename(ht, { a: "b" });
      mcTbReorder(ht, ["a"]);
      mcTbConcat(ht, ht);
      mcTbDetectDelimiter(hostile[hi]);
    }
  } catch (e) {
    hostileSafe = false;
    hostileErr = e && e.message ? e.message : "unknown";
  }
  ok("hostile input never throws", hostileSafe, hostileErr);

  var nonTables = [null, undefined, 0, "", {}, [], { _mcTb: 1 }];
  var nonTableSafe = true;
  try {
    for (var ni = 0; ni < nonTables.length; ni++) {
      mcTbNrows(nonTables[ni]);
      mcTbNcols(nonTables[ni]);
      mcTbColumnNames(nonTables[ni]);
      mcTbGet(nonTables[ni], 0, "a");
      mcTbRow(nonTables[ni], 0);
      mcTbToCsv(nonTables[ni]);
      mcTbToHtml(nonTables[ni]);
      mcTbDescribe(nonTables[ni]);
      mcTbGroupBy(nonTables[ni], ["a"], []);
    }
  } catch (e2) {
    nonTableSafe = false;
  }
  ok("non-table input never throws", nonTableSafe);
  eq("isTable rejects a fake", mcTbIsTable({ _mcTb: 1 }), false);
  eq("isTable accepts a real one", mcTbIsTable(q), true);
  eq("empty table has no rows", mcTbNrows(mcTbEmpty()), 0);
  eq("csv of an empty table", mcTbToCsv(mcTbEmpty()), "");

  // Cell content that looks like our own group-key separator must not be able
  // to forge a group boundary.
  var forge = mcTbFromObjects([
    { a: "x", b: "y" },
    { a: "x|s1:y", b: "" }
  ]);
  eq("group keys cannot be forged by cell content", mcTbNrows(mcTbGroupBy(forge, ["a", "b"], [])), 2);

  // ---------------- scale: 50k rows --------------------------------------
  var BIG = 50000;
  var lines = ["id,region,rep,amount,note"];
  var regions = ["West", "East", "North", "South"];
  for (var bi = 0; bi < BIG; bi++) {
    var amt = bi % 97 === 0 ? "" : bi % 89 === 0 ? "NULL" : String((bi * 7) % 1000);
    var note = bi % 10 === 0 ? '"a, b ""q"" c"' : "plain" + (bi % 13);
    lines.push(bi + "," + regions[bi % 4] + ",rep" + (bi % 250) + "," + amt + "," + note);
  }
  var bigText = lines.join("\n");
  var t0 = Date.now();
  var big = mcTbParse(bigText, { delimiter: "," });
  var parseMs = Date.now() - t0;
  eq("50k rows parsed", mcTbNrows(big), BIG);
  eq("50k cols", mcTbNcols(big), 5);
  eq("50k amount type", big.cols[3].type, "integer");
  eq("50k quoted cell intact", mcTbGet(big, 0, "note"), 'a, b "q" c');
  ok("50k parse finishes in a sane time", parseMs < 8000, parseMs + "ms");

  var t2 = Date.now();
  var bigG = mcTbGroupBy(big, ["region", "rep"], [
    { col: "amount", op: "sum", as: "total" },
    { col: "amount", op: "mean", as: "avg" },
    { col: "amount", op: "count", as: "n" },
    { op: "size", as: "rows" }
  ]);
  var groupMs = Date.now() - t2;
  // 500, not 250: the key is (bi%4, bi%250), and since gcd(4,250)=2 the
  // Chinese remainder theorem makes exactly 4*250/2 = 500 pairs reachable.
  // bi runs 0..49999 so every one of them is hit. The earlier expectation of
  // 250 was reading the rep count and forgetting region varies independently.
  eq("50k group cardinality", mcTbNrows(bigG), 500);
  ok("50k group-by finishes in a sane time", groupMs < 8000, groupMs + "ms");

  var t3 = Date.now();
  var bigSorted = mcTbSort(big, [{ col: "amount", dir: "desc" }, "id"]);
  var sortMs = Date.now() - t3;
  eq("50k sort keeps every row", mcTbNrows(bigSorted), BIG);
  ok("50k sort finishes in a sane time", sortMs < 8000, sortMs + "ms");

  var t4 = Date.now();
  var bigCsv = mcTbToCsv(big);
  var csvMs = Date.now() - t4;
  ok("50k csv export produced output", bigCsv.length > 1000000, String(bigCsv.length));
  ok("50k csv export finishes in a sane time", csvMs < 8000, csvMs + "ms");

  // Totals must survive the whole pipeline unchanged.
  var directSum = 0;
  for (var si = 0; si < BIG; si++) {
    var v2 = big.data[3][si];
    if (typeof v2 === "number") directSum += v2;
  }
  var groupSum = 0;
  for (var gi2 = 0; gi2 < mcTbNrows(bigG); gi2++) {
    var gv = mcTbGet(bigG, gi2, "total");
    if (typeof gv === "number") groupSum += gv;
  }
  eq("group sums reconstruct the column total", groupSum, directSum);

  console.log(
    "timing: parse " + parseMs + "ms, groupBy " + groupMs + "ms, sort " +
      sortMs + "ms, toCsv " + csvMs + "ms (" + BIG + " rows)"
  );

  var total = passed + failures.length;
  for (var fi = 0; fi < failures.length; fi++) console.log("FAIL: " + failures[fi]);
  console.log(
    (failures.length ? "FAIL" : "PASS") + " — " + passed + "/" + total + " assertions passed"
  );
  return failures.length === 0;
}

if (typeof module !== "undefined" && require.main === module) {
  if (!mcTbSelfTest()) process.exit(1);
}
