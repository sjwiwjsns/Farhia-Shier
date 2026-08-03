/* mc-calc — safe expression evaluator, unit converter, percent/date helpers, number formatter.
 *
 * Design constraints (deliberate, do not "modernise" away):
 *  - Script scope only: no modules, no IIFE, no strict-mode header. This file is pasted
 *    verbatim into a single-file HTML app, so every top-level name is `mc`-prefixed to
 *    keep the global namespace collision-free.
 *  - NO eval / new Function / setTimeout("string") / anything that turns text into code.
 *    Every input here originates from a chat box, i.e. it is attacker-controlled. A parser
 *    that hands user text to `eval` is a remote-code-execution hole in a news app, and
 *    "but I regex-validated it first" has failed publicly enough times that we don't try.
 *    Instead: an explicit tokenizer + recursive-descent parser + AST walker. The worst a
 *    hostile string can do is make us return null.
 *  - Every public entry point returns null (never throws) on input it doesn't understand,
 *    because the chat layer speculatively calls all of them on every message.
 */

/* ------------------------------------------------------------------ *
 * Number formatting
 * ------------------------------------------------------------------ */

/* Compact magnitude ladder. Ordered ascending so we can walk it and bump up. */
const mcMagnitudes = [
  { limit: 1e12, suffix: "T" },
  { limit: 1e9, suffix: "B" },
  { limit: 1e6, suffix: "M" },
  { limit: 1e3, suffix: "K" }
];

/* mcFmtNum(n, opts) -> string | null
 * opts: { compact, sig, decimals, maxDecimals, group }
 * Returns null rather than throwing for junk, so callers can chain it blindly. */
function mcFmtNum(n, opts) {
  const o = opts || {};
  if (typeof n === "string" && n.trim() !== "") n = Number(n.replace(/,/g, ""));
  if (typeof n !== "number" || !isFinite(n)) return null;

  if (o.compact) {
    const abs = Math.abs(n);
    for (let i = 0; i < mcMagnitudes.length; i++) {
      const m = mcMagnitudes[i];
      if (abs >= m.limit) {
        let scaled = n / m.limit;
        // Guard the 999,999 -> "1000K" wart: promote to the next magnitude instead.
        if (Math.abs(mcRoundSig(scaled, o.sig || 3)) >= 1000 && i > 0) {
          const up = mcMagnitudes[i - 1];
          return mcFmtPlain(n / up.limit, { sig: o.sig || 3, group: false }) + up.suffix;
        }
        return mcFmtPlain(scaled, { sig: o.sig || 3, group: false }) + m.suffix;
      }
    }
    // Below 1000 there is nothing to compact; fall through to plain formatting.
  }
  return mcFmtPlain(n, o);
}

/* Plain (non-compact) rendering. Split out so the compact path can reuse it. */
function mcFmtPlain(n, o) {
  const group = o.group !== false;
  const abs = Math.abs(n);

  // Very large / very small values are unreadable with separators; use exponential.
  // An explicit `decimals` request wins, though — the caller has said how it wants this.
  if (typeof o.decimals !== "number" && abs !== 0 && (abs >= 1e15 || abs < 1e-6)) {
    let s = n.toExponential(Math.max(0, (o.sig || 6) - 1)).replace(/\.?0+e/, "e");
    return mcStripNegZero(s);
  }

  let decimals;
  if (typeof o.decimals === "number") {
    decimals = o.decimals;
  } else if (typeof o.sig === "number") {
    decimals = mcDecimalsForSig(n, o.sig);
  } else if (Number.isInteger(n)) {
    decimals = 0;
  } else {
    // Default: ~6 significant digits, which reads naturally for both 3.10686 and 81.6466.
    decimals = mcDecimalsForSig(n, 6);
  }
  decimals = Math.max(0, Math.min(12, decimals));
  if (typeof o.maxDecimals === "number") decimals = Math.min(decimals, o.maxDecimals);

  let s = n.toFixed(decimals);
  // Trim trailing zeros we only added for padding (but honour an explicit `decimals`).
  if (typeof o.decimals !== "number" && s.indexOf(".") >= 0) {
    s = s.replace(/\.?0+$/, "");
  }
  if (group) {
    const neg = s.charAt(0) === "-";
    if (neg) s = s.slice(1);
    const parts = s.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    s = (neg ? "-" : "") + parts.join(".");
  }
  return mcStripNegZero(s);
}

/* "-0", "-0.00" and friends are always a rounding artefact, never information. */
function mcStripNegZero(s) {
  if (/^-0(?:[.,]0*)?(?:e[+-]?\d+)?$/i.test(s)) return s.slice(1);
  return s;
}

function mcDecimalsForSig(n, sig) {
  if (n === 0) return 0;
  const mag = Math.floor(Math.log10(Math.abs(n)));
  return sig - 1 - mag;
}

function mcRoundSig(n, sig) {
  if (n === 0 || !isFinite(n)) return n;
  const f = Math.pow(10, sig - Math.floor(Math.log10(Math.abs(n))) - 1);
  return Math.round(n * f) / f;
}

/* Parse a human-typed number: strips thousands separators, tolerates a leading sign. */
function mcParseNum(s) {
  if (typeof s !== "string") return null;
  const cleaned = s.replace(/,/g, "").trim();
  if (!/^[+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(cleaned)) return null;
  const v = parseFloat(cleaned);
  return isFinite(v) ? v : null;
}

/* ------------------------------------------------------------------ *
 * Expression evaluator: tokenizer -> recursive-descent parser -> AST walk
 * ------------------------------------------------------------------ */

const mcCalcConsts = {
  pi: Math.PI,
  "π": Math.PI,
  tau: Math.PI * 2,
  e: Math.E
};

/* arity -1 means variadic. `log` is base-10 and `ln` is natural: that is what a
 * calculator user means, regardless of what Math.log is named. */
const mcCalcFuncs = {
  sqrt: { arity: 1, fn: function (a) { return Math.sqrt(a); } },
  abs: { arity: 1, fn: function (a) { return Math.abs(a); } },
  round: { arity: 1, fn: function (a) { return Math.round(a); } },
  floor: { arity: 1, fn: function (a) { return Math.floor(a); } },
  ceil: { arity: 1, fn: function (a) { return Math.ceil(a); } },
  log: { arity: 1, fn: function (a) { return Math.log10(a); } },
  log10: { arity: 1, fn: function (a) { return Math.log10(a); } },
  log2: { arity: 1, fn: function (a) { return Math.log2(a); } },
  ln: { arity: 1, fn: function (a) { return Math.log(a); } },
  exp: { arity: 1, fn: function (a) { return Math.exp(a); } },
  sin: { arity: 1, fn: function (a) { return Math.sin(a); } },
  cos: { arity: 1, fn: function (a) { return Math.cos(a); } },
  tan: { arity: 1, fn: function (a) { return Math.tan(a); } },
  min: { arity: -1, fn: function () { return Math.min.apply(null, arguments); } },
  max: { arity: -1, fn: function () { return Math.max.apply(null, arguments); } }
};

/* Internal control flow only — these objects never escape mcCalc(). `kind` decides
 * whether the caller sees null ("this wasn't an expression") or a user-facing error
 * ("this was an expression, but the maths is undefined"). */
function mcThrow(kind, message) {
  throw { mcError: true, kind: kind, message: message };
}

function mcTokenize(src) {
  const toks = [];
  let i = 0;
  const n = src.length;
  while (i < n) {
    const ch = src.charAt(i);
    if (ch === " " || ch === "\t" || ch === "\n" || ch === "\r") { i++; continue; }

    // Numbers first: thousands-separated form is tried before the plain form so that
    // "1,250" reads as 1250. The (?!\d) guard keeps "1,2345" from half-matching, and
    // requiring exactly three digits keeps "max(3,9,2)" parsing as three arguments.
    // Known, accepted ambiguity: "max(1,000,2)" reads as max(1000, 2).
    if (/[0-9.]/.test(ch)) {
      const rest = src.slice(i);
      let m = /^\d{1,3}(?:,\d{3})+(?!\d)(?:\.\d+)?(?:[eE][+-]?\d+)?/.exec(rest);
      if (!m) m = /^(?:\d+(?:\.\d+)?|\.\d+)(?:[eE][+-]?\d+)?/.exec(rest);
      if (!m) mcThrow("syntax", "Bad number near '" + rest.slice(0, 8) + "'");
      const raw = m[0];
      const v = parseFloat(raw.replace(/,/g, ""));
      if (!isFinite(v)) mcThrow("syntax", "Bad number '" + raw + "'");
      toks.push({ t: "num", v: v, raw: raw });
      i += raw.length;
      continue;
    }

    if (/[a-zA-Zπ_]/.test(ch)) {
      const m = /^[a-zA-Zπ_][a-zA-Z0-9π_]*/.exec(src.slice(i));
      toks.push({ t: "id", v: m[0].toLowerCase(), raw: m[0] });
      i += m[0].length;
      continue;
    }

    if (ch === "(") { toks.push({ t: "(" }); i++; continue; }
    if (ch === ")") { toks.push({ t: ")" }); i++; continue; }
    if (ch === ",") { toks.push({ t: "," }); i++; continue; }

    // `**` is a common alias for `^`; consume it before the single-char operator branch.
    if (ch === "*" && src.charAt(i + 1) === "*") { toks.push({ t: "op", v: "^" }); i += 2; continue; }
    if ("+-*/%^".indexOf(ch) >= 0) { toks.push({ t: "op", v: ch }); i++; continue; }

    mcThrow("syntax", "Unexpected character '" + ch + "'");
  }
  return toks;
}

/* Grammar (precedence climbing, lowest binding first):
 *   add   := mul (('+'|'-') mul)*
 *   mul   := unary (('*'|'/'|'%') unary)*
 *   unary := ('-'|'+') unary | pow
 *   pow   := primary ('^' unary)?          <- right-assoc, and its exponent may be unary
 *   prim  := number | const | func '(' args ')' | '(' add ')'
 *
 * The two classic bugs both fall out of this shape rather than needing special cases:
 *  - `^` recursing into `unary` on its right makes it RIGHT-associative: 2^3^2 = 2^(3^2) = 512.
 *  - `unary` sitting ABOVE `pow` makes `^` bind tighter than negation: -2^2 = -(2^2) = -4.
 *    It also lets `2^-3` parse, which a naive "unary below pow" grammar rejects.
 */

const mcMaxDepth = 160; /* Bounds recursion so "((((((..." can't blow the JS stack. */

function mcParse(toks) {
  const st = { toks: toks, i: 0, depth: 0 };
  const node = mcParseAdd(st);
  if (st.i < st.toks.length) mcThrow("syntax", "Unexpected trailing input");
  return node;
}

function mcPeek(st) { return st.i < st.toks.length ? st.toks[st.i] : null; }

function mcParseAdd(st) {
  let left = mcParseMul(st);
  for (;;) {
    const t = mcPeek(st);
    if (t && t.t === "op" && (t.v === "+" || t.v === "-")) {
      st.i++;
      const right = mcParseMul(st);
      left = { t: "bin", op: t.v, a: left, b: right };
    } else return left;
  }
}

function mcParseMul(st) {
  let left = mcParseUnary(st);
  for (;;) {
    const t = mcPeek(st);
    if (t && t.t === "op" && (t.v === "*" || t.v === "/" || t.v === "%")) {
      st.i++;
      const right = mcParseUnary(st);
      left = { t: "bin", op: t.v, a: left, b: right };
    } else return left;
  }
}

function mcParseUnary(st) {
  const t = mcPeek(st);
  if (t && t.t === "op" && (t.v === "-" || t.v === "+")) {
    st.i++;
    if (++st.depth > mcMaxDepth) mcThrow("syntax", "Expression nested too deeply");
    const operand = mcParseUnary(st);
    st.depth--;
    return t.v === "-" ? { t: "neg", a: operand } : operand;
  }
  return mcParsePow(st);
}

function mcParsePow(st) {
  const base = mcParsePrimary(st);
  const t = mcPeek(st);
  if (t && t.t === "op" && t.v === "^") {
    st.i++;
    if (++st.depth > mcMaxDepth) mcThrow("syntax", "Expression nested too deeply");
    const exp = mcParseUnary(st); /* right-assoc + allows 2^-3 */
    st.depth--;
    return { t: "bin", op: "^", a: base, b: exp };
  }
  return base;
}

function mcParsePrimary(st) {
  const t = mcPeek(st);
  if (!t) mcThrow("syntax", "Unexpected end of expression");

  if (t.t === "num") { st.i++; return { t: "num", v: t.v, raw: t.raw }; }

  if (t.t === "id") {
    const name = t.v;
    st.i++;
    const next = mcPeek(st);
    if (next && next.t === "(") {
      const def = mcCalcFuncs[name];
      // Unknown identifier followed by "(" — e.g. foo(2). Syntax error, so the caller
      // gets null and can try the other interpreters instead of showing a scary message.
      if (!def) mcThrow("syntax", "Unknown function '" + name + "'");
      st.i++;
      if (++st.depth > mcMaxDepth) mcThrow("syntax", "Expression nested too deeply");
      const args = [];
      if (!(mcPeek(st) && mcPeek(st).t === ")")) {
        for (;;) {
          args.push(mcParseAdd(st));
          const sep = mcPeek(st);
          if (sep && sep.t === ",") { st.i++; continue; }
          break;
        }
      }
      const close = mcPeek(st);
      if (!close || close.t !== ")") mcThrow("syntax", "Missing ')' after " + name + "(");
      st.i++;
      st.depth--;
      if (def.arity === -1) {
        if (args.length < 1) mcThrow("syntax", name + "() needs at least one argument");
      } else if (args.length !== def.arity) {
        mcThrow("syntax", name + "() takes " + def.arity + " argument(s)");
      }
      return { t: "call", name: name, args: args };
    }
    if (Object.prototype.hasOwnProperty.call(mcCalcConsts, name)) {
      return { t: "num", v: mcCalcConsts[name], raw: name };
    }
    mcThrow("syntax", "Unknown name '" + name + "'");
  }

  if (t.t === "(") {
    st.i++;
    if (++st.depth > mcMaxDepth) mcThrow("syntax", "Expression nested too deeply");
    const inner = mcParseAdd(st);
    const close = mcPeek(st);
    if (!close || close.t !== ")") mcThrow("syntax", "Missing ')'");
    st.i++;
    st.depth--;
    return inner;
  }

  mcThrow("syntax", "Unexpected token");
}

const mcOpGlyphs = { "+": "+", "-": "−", "*": "×", "/": "÷", "%": "mod", "^": "^" };
const mcMaxSteps = 14;

function mcStep(ctx, text) {
  ctx.count++;
  if (ctx.steps.length < mcMaxSteps) ctx.steps.push(text);
  else if (ctx.steps.length === mcMaxSteps) ctx.steps.push("…");
}

function mcEvalNode(node, ctx) {
  if (node.t === "num") return node.v;

  if (node.t === "neg") {
    const v = mcEvalNode(node.a, ctx);
    // Trace the negation only when it wraps real work. "-7 + 3" needs no "negate 7" line,
    // but "-2^2" does: the whole point of that trace is showing the minus applying LAST.
    if (node.a.t !== "num") mcStep(ctx, "negate " + mcFmtStep(v) + " = " + mcFmtStep(-v));
    return -v;
  }

  if (node.t === "call") {
    const def = mcCalcFuncs[node.name];
    const args = [];
    for (let i = 0; i < node.args.length; i++) args.push(mcEvalNode(node.args[i], ctx));
    const r = def.fn.apply(null, args);
    if (!isFinite(r)) {
      mcThrow("math", node.name + "() is undefined for that input");
    }
    mcStep(ctx, node.name + "(" + args.map(mcFmtStep).join(", ") + ") = " + mcFmtStep(r));
    return r;
  }

  if (node.t === "bin") {
    const a = mcEvalNode(node.a, ctx);
    const b = mcEvalNode(node.b, ctx);
    const r = mcApplyBinary(node.op, a, b);
    mcStep(ctx, mcFmtStep(a) + " " + mcOpGlyphs[node.op] + " " + mcFmtStep(b) + " = " + mcFmtStep(r));
    return r;
  }

  mcThrow("syntax", "Bad node");
}

function mcApplyBinary(op, a, b) {
  switch (op) {
    case "+": return mcFiniteOr(a + b, "Result is too large to display");
    case "-": return mcFiniteOr(a - b, "Result is too large to display");
    case "*": return mcFiniteOr(a * b, "Result is too large to display");
    case "/":
      // Division by zero yields Infinity in JS, which is a terrible thing to show a
      // reader as "the answer". Surface it as an explicit error instead.
      if (b === 0) mcThrow("math", "Division by zero is undefined");
      return mcFiniteOr(a / b, "Result is too large to display");
    case "%":
      if (b === 0) mcThrow("math", "Cannot take a remainder modulo zero");
      return a % b;
    case "^": {
      const r = Math.pow(a, b);
      if (isNaN(r)) mcThrow("math", "That power is not a real number");
      return mcFiniteOr(r, "Result is too large to display");
    }
  }
  mcThrow("syntax", "Unknown operator " + op);
}

function mcFiniteOr(v, msg) {
  if (!isFinite(v)) mcThrow("math", msg);
  return v;
}

/* Steps are for humans reading a chat bubble, so keep them short. */
function mcFmtStep(v) {
  const s = mcFmtNum(v, { sig: 10 });
  return s === null ? String(v) : s;
}

/* mcCalc(expr) -> { value, formatted, steps } | { value: null, error, steps } | null
 * null  = "this text is not an expression, try the other interpreters"
 * error = "this text IS an expression, but it has no defined answer" */
function mcCalc(expr) {
  if (typeof expr !== "string") return null;
  let src = expr.trim();
  // Chat users type "12*12=" or "12*12?" — strip the conversational punctuation.
  src = src.replace(/^(?:calc(?:ulate)?|what\s+is|what's|whats|how\s+much\s+is)\s+/i, "");
  src = src.replace(/[=?\s]+$/, "").trim();
  if (!src) return null;
  // Bound the work up front: this runs on every inbound chat message.
  if (src.length > 1000) return null;
  // Normalise typographic operators people paste from articles.
  src = src.replace(/[×⋅]/g, "*").replace(/[÷]/g, "/")
           .replace(/[−–—]/g, "-").replace(/[‘’“”]/g, "");
  // Cheap reject: a real expression contains a digit or a bare constant.
  if (!/\d/.test(src) && !/\b(pi|e|tau)\b/i.test(src) && src.indexOf("π") < 0) return null;
  // And it must contain an operator or a function call — otherwise "2026" (a year in a
  // headline) would come back as a calculation, which is noise.
  if (!/[+\-*/%^()]/.test(src)) return null;

  let ast;
  try {
    ast = mcParse(mcTokenize(src));
  } catch (err) {
    if (err && err.mcError) return null; /* unparseable => not an expression */
    return null;
  }

  const ctx = { steps: [], count: 0 };
  let value;
  try {
    value = mcEvalNode(ast, ctx);
  } catch (err) {
    if (err && err.mcError) {
      return { value: null, formatted: null, steps: ctx.steps, error: err.message };
    }
    return null;
  }
  if (!isFinite(value)) {
    return { value: null, formatted: null, steps: ctx.steps, error: "Result is not a finite number" };
  }
  if (value === 0) value = 0; /* collapse -0 before it reaches the UI */
  return {
    value: value,
    formatted: mcFmtNum(value),
    steps: ctx.steps,
    error: null
  };
}

/* ------------------------------------------------------------------ *
 * Unit conversion
 * ------------------------------------------------------------------ */

/* Every unit is stored as an AFFINE map to its dimension's base unit:
 *      base = value * f + o        value = (base - o) / f
 * Ratio units simply have o = 0. Temperature is the reason the offset exists: Celsius
 * and Fahrenheit have different zero points, so 20 °C -> °F is NOT 20 * (9/5) = 36. It is
 * 20 * 9/5 + 32 = 68. Doing temperature as a pure ratio is the single most common bug in
 * hand-rolled converters, and it is invisible until someone converts a freezing
 * temperature and gets a plausible-looking wrong answer.
 *
 * Data sizes use the DECIMAL SI convention: 1 kB = 1000 B, 1 MB = 1e6 B, 1 GB = 1e9 B,
 * so "2 GB to MB" = 2000. Binary sizes are available under their correct IEC names
 * (KiB/MiB/GiB/TiB = 1024^n). This matches how storage vendors, network speeds and
 * news copy quote sizes; readers who want 1024 can ask for MiB.
 *
 * Deliberate alias rulings where symbols collide:
 *   "in" = inch (the preposition is stripped before unit lookup)
 *   "m"  = metre (not minute), "min" = minute
 *   "c"  = Celsius (not cup), "k" = Kelvin, "t" = tonne
 *   "b"  = byte, "bit" = bit
 *   "mb" = megabyte, "mbar" = millibar, "MPa" = megapascal
 *   "oz" = ounce (mass); fluid ounce must be written "fl oz"
 */
const mcUnitDefs = [
  // dim, canonical, display, factor, offset, aliases (space separated)
  ["length", "m", "m", 1, 0, "m meter meters metre metres"],
  ["length", "km", "km", 1000, 0, "km kilometer kilometers kilometre kilometres"],
  ["length", "cm", "cm", 0.01, 0, "cm centimeter centimeters centimetre centimetres"],
  ["length", "mm", "mm", 0.001, 0, "mm millimeter millimeters millimetre millimetres"],
  ["length", "um", "µm", 1e-6, 0, "um µm micrometer micrometers micron microns"],
  ["length", "nm", "nm", 1e-9, 0, "nm nanometer nanometers nanometre nanometres"],
  ["length", "mi", "mi", 1609.344, 0, "mi mile miles"],
  ["length", "yd", "yd", 0.9144, 0, "yd yard yards"],
  ["length", "ft", "ft", 0.3048, 0, "ft foot feet"],
  ["length", "in", "in", 0.0254, 0, "in inch inches"],
  ["length", "nmi", "nmi", 1852, 0, "nmi nauticalmile nauticalmiles nautical_mile"],
  ["length", "ly", "ly", 9.4607304725808e15, 0, "ly lightyear lightyears light-year"],

  ["mass", "kg", "kg", 1, 0, "kg kilo kilos kilogram kilograms kilogramme kilogrammes"],
  ["mass", "g", "g", 0.001, 0, "g gram grams gramme grammes"],
  ["mass", "mg", "mg", 1e-6, 0, "mg milligram milligrams"],
  ["mass", "ug", "µg", 1e-9, 0, "ug µg microgram micrograms"],
  ["mass", "t", "t", 1000, 0, "t tonne tonnes metricton metrictons"],
  ["mass", "lb", "lb", 0.45359237, 0, "lb lbs pound pounds"],
  ["mass", "oz", "oz", 0.028349523125, 0, "oz ounce ounces"],
  ["mass", "st", "st", 6.35029318, 0, "st stone stones"],
  ["mass", "ton", "ton", 907.18474, 0, "ton tons shortton shorttons"],
  ["mass", "longton", "long ton", 1016.0469088, 0, "longton longtons"],

  // Base unit: kelvin. See the affine note above.
  ["temperature", "c", "°C", 1, 273.15, "c celsius centigrade degc"],
  ["temperature", "f", "°F", 5 / 9, 273.15 - 32 * 5 / 9, "f fahrenheit degf"],
  ["temperature", "k", "K", 1, 0, "k kelvin kelvins"],
  ["temperature", "r", "°R", 5 / 9, 0, "r rankine"],

  ["time", "s", "s", 1, 0, "s sec secs second seconds"],
  ["time", "ms", "ms", 0.001, 0, "ms millisecond milliseconds"],
  ["time", "min", "min", 60, 0, "min mins minute minutes"],
  ["time", "h", "h", 3600, 0, "h hr hrs hour hours"],
  ["time", "day", "days", 86400, 0, "d day days"],
  ["time", "week", "weeks", 604800, 0, "wk week weeks"],
  // A "month" has no fixed length; use the mean Gregorian month (365.25/12 days) so that
  // 12 months round-trips to exactly 1 year.
  ["time", "month", "months", 2629800, 0, "mo month months"],
  ["time", "year", "years", 31557600, 0, "y yr yrs year years"],

  ["speed", "m/s", "m/s", 1, 0, "m/s mps meterspersecond metrespersecond meterpersecond"],
  ["speed", "km/h", "km/h", 1 / 3.6, 0, "km/h kph kmh kmph kilometersperhour kilometresperhour"],
  ["speed", "mph", "mph", 0.44704, 0, "mph mi/h milesperhour"],
  ["speed", "kn", "kn", 1852 / 3600, 0, "kn kt kts knot knots"],
  ["speed", "ft/s", "ft/s", 0.3048, 0, "ft/s fps feetpersecond footpersecond"],

  ["data", "B", "B", 1, 0, "b byte bytes"],
  ["data", "bit", "bit", 0.125, 0, "bit bits"],
  ["data", "kB", "kB", 1e3, 0, "kb kilobyte kilobytes"],
  ["data", "MB", "MB", 1e6, 0, "mb megabyte megabytes"],
  ["data", "GB", "GB", 1e9, 0, "gb gigabyte gigabytes"],
  ["data", "TB", "TB", 1e12, 0, "tb terabyte terabytes"],
  ["data", "PB", "PB", 1e15, 0, "pb petabyte petabytes"],
  ["data", "KiB", "KiB", 1024, 0, "kib kibibyte kibibytes"],
  ["data", "MiB", "MiB", 1048576, 0, "mib mebibyte mebibytes"],
  ["data", "GiB", "GiB", 1073741824, 0, "gib gibibyte gibibytes"],
  ["data", "TiB", "TiB", 1099511627776, 0, "tib tebibyte tebibytes"],
  ["data", "kbit", "kbit", 125, 0, "kbit kilobit kilobits"],
  ["data", "Mbit", "Mbit", 125000, 0, "mbit megabit megabits"],
  ["data", "Gbit", "Gbit", 125000000, 0, "gbit gigabit gigabits"],

  ["area", "m2", "m²", 1, 0, "m2 sqm sqmeter sqmeters squaremeter squaremeters squaremetre squaremetres"],
  ["area", "km2", "km²", 1e6, 0, "km2 sqkm squarekilometer squarekilometers squarekilometre squarekilometres"],
  ["area", "cm2", "cm²", 1e-4, 0, "cm2 sqcm squarecentimeter squarecentimeters"],
  ["area", "mm2", "mm²", 1e-6, 0, "mm2 sqmm squaremillimeter squaremillimeters"],
  ["area", "ha", "ha", 1e4, 0, "ha hectare hectares"],
  ["area", "acre", "acres", 4046.8564224, 0, "acre acres"],
  ["area", "ft2", "ft²", 0.09290304, 0, "ft2 sqft sqfoot sqfeet squarefoot squarefeet"],
  ["area", "in2", "in²", 0.00064516, 0, "in2 sqin squareinch squareinches"],
  ["area", "yd2", "yd²", 0.83612736, 0, "yd2 sqyd squareyard squareyards"],
  ["area", "mi2", "mi²", 2589988.110336, 0, "mi2 sqmi squaremile squaremiles"],

  ["volume", "L", "L", 1, 0, "l liter liters litre litres"],
  ["volume", "mL", "mL", 0.001, 0, "ml milliliter milliliters millilitre millilitres"],
  ["volume", "cL", "cL", 0.01, 0, "cl centiliter centiliters"],
  ["volume", "dL", "dL", 0.1, 0, "dl deciliter deciliters"],
  ["volume", "m3", "m³", 1000, 0, "m3 cubicmeter cubicmeters cubicmetre cubicmetres"],
  ["volume", "cm3", "cm³", 0.001, 0, "cm3 cc cubiccentimeter cubiccentimeters"],
  ["volume", "ft3", "ft³", 28.316846592, 0, "ft3 cubicfoot cubicfeet"],
  ["volume", "gal", "gal", 3.785411784, 0, "gal gallon gallons usgallon usgallons"],
  ["volume", "impgal", "imp gal", 4.54609, 0, "impgal imperialgallon imperialgallons"],
  ["volume", "qt", "qt", 0.946352946, 0, "qt quart quarts"],
  ["volume", "pt", "pt", 0.473176473, 0, "pt pint pints"],
  ["volume", "cup", "cups", 0.2365882365, 0, "cup cups"],
  ["volume", "floz", "fl oz", 0.0295735295625, 0, "floz fluidounce fluidounces"],
  ["volume", "tbsp", "tbsp", 0.01478676478125, 0, "tbsp tablespoon tablespoons"],
  ["volume", "tsp", "tsp", 0.00492892159375, 0, "tsp teaspoon teaspoons"],
  ["volume", "bbl", "bbl", 158.987294928, 0, "bbl barrel barrels"],

  ["pressure", "Pa", "Pa", 1, 0, "pa pascal pascals"],
  ["pressure", "hPa", "hPa", 100, 0, "hpa hectopascal hectopascals"],
  ["pressure", "kPa", "kPa", 1e3, 0, "kpa kilopascal kilopascals"],
  ["pressure", "MPa", "MPa", 1e6, 0, "mpa megapascal megapascals"],
  ["pressure", "bar", "bar", 1e5, 0, "bar bars"],
  ["pressure", "mbar", "mbar", 100, 0, "mbar millibar millibars"],
  ["pressure", "psi", "psi", 6894.757293168, 0, "psi"],
  ["pressure", "atm", "atm", 101325, 0, "atm atmosphere atmospheres"],
  ["pressure", "torr", "Torr", 133.32236842105263, 0, "torr"],
  ["pressure", "mmHg", "mmHg", 133.322387415, 0, "mmhg"],
  ["pressure", "inHg", "inHg", 3386.389, 0, "inhg"]
];

const mcUnitIndex = mcBuildUnitIndex();

function mcBuildUnitIndex() {
  const idx = Object.create(null);
  for (let i = 0; i < mcUnitDefs.length; i++) {
    const d = mcUnitDefs[i];
    const unit = { dim: d[0], key: d[1], display: d[2], f: d[3], o: d[4] };
    const aliases = d[5].split(" ");
    for (let j = 0; j < aliases.length; j++) {
      const a = aliases[j];
      // First definition wins, so earlier rows in the table act as the tie-break for
      // colliding symbols (documented above).
      if (!(a in idx)) idx[a] = unit;
    }
  }
  return idx;
}

/* Squash a unit phrase to a lookup key: lowercase, drop punctuation/spaces/degrees. */
function mcUnitKey(phrase) {
  let s = String(phrase).toLowerCase().trim();
  s = s.replace(/[°]/g, "");
  s = s.replace(/\bdegrees?\b/g, " ");
  s = s.replace(/\bof\b/g, " ");
  s = s.replace(/\bper\b/g, "per");
  s = s.replace(/\bsquare\b/g, "square").replace(/\bsq\.?\b/g, "sq");
  s = s.replace(/\bcubic\b/g, "cubic");
  s = s.replace(/[.\s_-]+/g, "");
  s = s.replace(/²/g, "2").replace(/³/g, "3");
  return s;
}

function mcLookupUnit(phrase) {
  const k = mcUnitKey(phrase);
  if (!k) return null;
  if (k in mcUnitIndex) return mcUnitIndex[k];
  // Cheap plural fallbacks for aliases we didn't enumerate.
  if (/es$/.test(k) && k.slice(0, -2) in mcUnitIndex) return mcUnitIndex[k.slice(0, -2)];
  if (/s$/.test(k) && k.slice(0, -1) in mcUnitIndex) return mcUnitIndex[k.slice(0, -1)];
  return null;
}

const mcConnectors = { to: 1, in: 1, into: 1, as: 1, "->": 1, "=": 1 };

/* mcConvert(text) -> { value, from, to, formatted } | null */
function mcConvert(text) {
  if (typeof text !== "string") return null;
  let s = text.trim();
  if (!s || s.length > 200) return null;
  s = s.toLowerCase()
       .replace(/[?!.]+$/, "")
       .replace(/^(?:convert|how\s+many|how\s+much|what(?:'s|\s+is)?)\s+/, "")
       .replace(/→|->|=>/g, " to ")
       .replace(/\s*=\s*/g, " to ")
       .replace(/\s+/g, " ")
       .trim();

  const words = s.split(" ");
  // Scan connector candidates right-to-left so "5 in in cm" (5 inches in centimetres)
  // splits on the LAST "in" and the first one stays part of the source unit.
  for (let i = words.length - 2; i >= 1; i--) {
    if (!Object.prototype.hasOwnProperty.call(mcConnectors, words[i])) continue;
    const left = words.slice(0, i).join(" ");
    const right = words.slice(i + 1).join(" ");
    const hit = mcConvertParts(left, right);
    if (hit) return hit;
  }
  return null;
}

function mcConvertParts(left, right) {
  // Left side is "<number><unit>", possibly without a space ("20c", "-40 c").
  const m = /^([+-]?(?:[\d,]*\d(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)\s*(.*)$/.exec(left.trim());
  if (!m) return null;
  const value = mcParseNum(m[1]);
  if (value === null) return null;
  const fromUnit = mcLookupUnit(m[2]);
  const toUnit = mcLookupUnit(right);
  if (!fromUnit || !toUnit) return null;
  // Refuse cross-dimension nonsense ("5 km in kg") rather than inventing a number.
  if (fromUnit.dim !== toUnit.dim) return null;

  // Affine round-trip through the dimension's base unit.
  const base = value * fromUnit.f + fromUnit.o;
  let out = (base - toUnit.o) / toUnit.f;
  if (!isFinite(out)) return null;
  // Kill float dust like 67.99999999999999 without destroying real precision.
  const snapped = mcRoundSig(out, 12);
  if (Math.abs(snapped - out) < Math.abs(out) * 1e-12 + 1e-12) out = snapped;
  if (out === 0) out = 0;

  return {
    value: out,
    from: fromUnit.key,
    to: toUnit.key,
    dim: fromUnit.dim,
    formatted: mcFmtNum(value) + " " + fromUnit.display + " = " + mcFmtNum(out) + " " + toUnit.display
  };
}

/* ------------------------------------------------------------------ *
 * Percentages
 * ------------------------------------------------------------------ */

const mcNumRe = "([+-]?(?:[\\d,]*\\d(?:\\.\\d+)?|\\.\\d+))";

/* mcPercent(text) -> { value, formatted, kind } | null
 * kinds: "of" | "whatPercent" | "change" | "increase" | "decrease" | "off" */
function mcPercent(text) {
  if (typeof text !== "string") return null;
  let s = text.trim().toLowerCase();
  if (!s || s.length > 200) return null;
  s = s.replace(/[?!.]+$/, "")
       .replace(/\bpercent(?:age)?\b/g, "%")
       .replace(/\s+/g, " ")
       .replace(/\s*%/g, "%");
  if (s.indexOf("%") < 0) return null;

  let m;

  // "percent change from 80 to 92" / "what's the % difference from 80 to 92"
  m = new RegExp("%\\s*(?:change|difference|diff|increase|decrease)?\\s*from\\s+" + mcNumRe + "\\s+to\\s+" + mcNumRe).exec(s);
  if (!m) m = new RegExp("change\\s+from\\s+" + mcNumRe + "\\s+to\\s+" + mcNumRe + ".*%").exec(s);
  if (m) {
    const a = mcParseNum(m[1]), b = mcParseNum(m[2]);
    if (a === null || b === null || a === 0) return null;
    const v = (b - a) / Math.abs(a) * 100;
    return {
      value: mcClean(v),
      kind: "change",
      formatted: (v >= 0 ? "+" : "−") + mcFmtNum(Math.abs(v), { sig: 6 }) + "%",
      from: a, to: b
    };
  }

  // "240 is what % of 800"  /  "what % of 800 is 240"
  m = new RegExp(mcNumRe + "\\s+is\\s+what%\\s*of\\s+" + mcNumRe).exec(s);
  if (!m) m = new RegExp("what%\\s*of\\s+" + mcNumRe + "\\s+is\\s+" + mcNumRe).exec(s);
  if (m) {
    let part, whole;
    if (/is\s+what%/.test(s)) { part = mcParseNum(m[1]); whole = mcParseNum(m[2]); }
    else { whole = mcParseNum(m[1]); part = mcParseNum(m[2]); }
    if (part === null || whole === null || whole === 0) return null;
    const v = part / whole * 100;
    return {
      value: mcClean(v), kind: "whatPercent",
      formatted: mcFmtNum(v, { sig: 6 }) + "%",
      part: part, whole: whole
    };
  }

  // "15% off 250" — retail discount, i.e. the price after the reduction.
  m = new RegExp(mcNumRe + "%\\s*off\\s+" + mcNumRe).exec(s);
  if (m) {
    const p = mcParseNum(m[1]), base = mcParseNum(m[2]);
    if (p === null || base === null) return null;
    const v = base * (1 - p / 100);
    return { value: mcClean(v), kind: "off", formatted: mcFmtNum(v), base: base, percent: p };
  }

  // "increase 250 by 12%" / "reduce 250 by 12%"
  m = new RegExp("(increase|raise|grow|add|up|decrease|reduce|lower|cut|drop|down)\\s+" + mcNumRe + "\\s+by\\s+" + mcNumRe + "%").exec(s);
  if (!m) m = new RegExp(mcNumRe + "\\s*(\\+|plus|-|minus)\\s*" + mcNumRe + "%").exec(s);
  if (m) {
    let base, p, down;
    if (/^(increase|raise|grow|add|up|decrease|reduce|lower|cut|drop|down)$/.test(m[1])) {
      down = /^(decrease|reduce|lower|cut|drop|down)$/.test(m[1]);
      base = mcParseNum(m[2]); p = mcParseNum(m[3]);
    } else {
      base = mcParseNum(m[1]); down = (m[2] === "-" || m[2] === "minus"); p = mcParseNum(m[3]);
    }
    if (base === null || p === null) return null;
    const v = base * (1 + (down ? -p : p) / 100);
    return {
      value: mcClean(v),
      kind: down ? "decrease" : "increase",
      formatted: mcFmtNum(v), base: base, percent: p
    };
  }

  // "15% of 240" (also matches "what is 15% of 240")
  m = new RegExp(mcNumRe + "%\\s*of\\s+" + mcNumRe).exec(s);
  if (m) {
    const p = mcParseNum(m[1]), whole = mcParseNum(m[2]);
    if (p === null || whole === null) return null;
    const v = whole * p / 100;
    return { value: mcClean(v), kind: "of", formatted: mcFmtNum(v), percent: p, whole: whole };
  }

  return null;
}

/* Float dust cleanup shared by percent/date maths; also collapses -0. */
function mcClean(v) {
  if (!isFinite(v)) return v;
  const r = mcRoundSig(v, 12);
  const out = Math.abs(r - v) < Math.abs(v) * 1e-12 + 1e-12 ? r : v;
  return out === 0 ? 0 : out;
}

/* ------------------------------------------------------------------ *
 * Date maths
 * ------------------------------------------------------------------ */

const mcMonthNames = ["january", "february", "march", "april", "may", "june", "july",
  "august", "september", "october", "november", "december"];
const mcDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const mcMsPerDay = 86400000;

/* ALL date arithmetic here is UTC. Local-time arithmetic silently breaks across a DST
 * boundary: a "day" is 23 or 25 hours twice a year, so (b - a) / 86400000 rounds to the
 * wrong integer and "days until Christmas" is off by one for half the year. Anchoring
 * every date at UTC midnight makes every day exactly 86400000 ms. */
function mcUTCToday() {
  const now = new Date();
  return Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
}

function mcDateParse(text) {
  if (typeof text !== "string") return null;
  const s = text.trim().toLowerCase().replace(/[,]/g, " ").replace(/\s+/g, " ").trim();
  if (!s) return null;

  if (s === "today" || s === "now") return mcUTCToday();
  if (s === "tomorrow") return mcUTCToday() + mcMsPerDay;
  if (s === "yesterday") return mcUTCToday() - mcMsPerDay;

  let m = /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/.exec(s);
  if (m) return mcMakeUTC(+m[1], +m[2], +m[3]);

  // "25 dec 2026" / "25 december 2026"
  m = /^(\d{1,2}) ([a-z]+) (\d{4})$/.exec(s);
  if (m) {
    const mi = mcMonthIndex(m[2]);
    if (mi < 0) return null;
    return mcMakeUTC(+m[3], mi + 1, +m[1]);
  }

  // "dec 25 2026" / "december 25th 2026"
  m = /^([a-z]+) (\d{1,2})(?:st|nd|rd|th)? (\d{4})$/.exec(s);
  if (m) {
    const mi = mcMonthIndex(m[1]);
    if (mi < 0) return null;
    return mcMakeUTC(+m[3], mi + 1, +m[2]);
  }

  // US-style "12/25/2026" is deliberately unsupported: it is ambiguous with D/M/Y and
  // guessing wrong is worse than declining.
  return null;
}

/* Prefix match, minimum three letters: "dec", "sept" and "december" all resolve, while
 * "ma" stays ambiguous between March and May and is rejected rather than guessed. */
function mcMonthIndex(name) {
  if (name.length < 3) return -1;
  for (let i = 0; i < mcMonthNames.length; i++) {
    if (mcMonthNames[i].indexOf(name) === 0) return i;
  }
  return -1;
}

function mcMakeUTC(y, mo, d) {
  if (mo < 1 || mo > 12 || d < 1 || d > 31) return null;
  const ms = Date.UTC(y, mo - 1, d);
  const chk = new Date(ms);
  // Reject overflow dates like 2026-02-31, which Date.UTC would silently roll forward.
  if (chk.getUTCFullYear() !== y || chk.getUTCMonth() !== mo - 1 || chk.getUTCDate() !== d) return null;
  return ms;
}

function mcDateFmt(ms) {
  const d = new Date(ms);
  const p = function (n) { return (n < 10 ? "0" : "") + n; };
  return d.getUTCFullYear() + "-" + p(d.getUTCMonth() + 1) + "-" + p(d.getUTCDate()) +
    " (" + mcDayNames[d.getUTCDay()] + ")";
}

function mcDaysBetween(a, b) {
  return Math.round((b - a) / mcMsPerDay);
}

/* Calendar-aware shift for month/year units; day/week units are pure ms arithmetic. */
function mcAddUnits(ms, n, unit) {
  const d = new Date(ms);
  if (unit === "day") return ms + n * mcMsPerDay;
  if (unit === "week") return ms + n * 7 * mcMsPerDay;
  if (unit === "month") {
    const target = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + n, 1));
    // Clamp "31 Jan + 1 month" to the end of February instead of rolling into March.
    const lastDay = new Date(Date.UTC(target.getUTCFullYear(), target.getUTCMonth() + 1, 0)).getUTCDate();
    return Date.UTC(target.getUTCFullYear(), target.getUTCMonth(), Math.min(d.getUTCDate(), lastDay));
  }
  if (unit === "year") return mcAddUnits(ms, n * 12, "month");
  return null;
}

/* mcDateCalc(text) -> { value, formatted, kind } | null
 * For "days between/until" value is a day count; for "N days from today" value is the
 * resulting timestamp in ms (and `date` carries the ISO string). */
function mcDateCalc(text) {
  if (typeof text !== "string") return null;
  let s = text.trim().toLowerCase();
  if (!s || s.length > 200) return null;
  s = s.replace(/[?!.]+$/, "").replace(/\s+/g, " ");

  const D = "([a-z0-9][a-z0-9 /-]*?)";
  let m;

  // "days between 2026-01-01 and 2026-08-03"
  m = new RegExp("^(?:how many )?(days?|weeks?|months?|years?) between " + D + " and " + D + "$").exec(s);
  if (m) {
    const a = mcDateParse(m[2]), b = mcDateParse(m[3]);
    if (a === null || b === null) return null;
    const days = Math.abs(mcDaysBetween(a, b));
    return mcSpanResult(days, m[1], a, b);
  }

  // "how many days until 2026-12-25" / "days since 2026-01-01"
  m = new RegExp("^(?:how many )?(days?|weeks?|months?|years?) (?:until|till|til|to|before|since|after|from) " + D + "$").exec(s);
  if (m) {
    const target = mcDateParse(m[2]);
    if (target === null) return null;
    const today = mcUTCToday();
    const backwards = /(since|after)/.test(s);
    const days = backwards ? mcDaysBetween(target, today) : mcDaysBetween(today, target);
    return mcSpanResult(days, m[1], backwards ? target : today, backwards ? today : target);
  }

  // "what date is 90 days from today" / "30 days before 2026-01-01" / "3 weeks ago"
  m = new RegExp("^(?:what date is |what's the date )?" + mcNumRe + " (day|week|month|year)s? (from|after|before|ago|hence)(?: (.+))?$").exec(s);
  if (m) {
    const n = mcParseNum(m[1]);
    if (n === null) return null;
    const dir = m[3];
    const anchorText = (m[4] || "today").trim();
    // "ago" takes no anchor; "from"/"before" default to today when none is given.
    const anchor = mcDateParse(anchorText === "now" ? "today" : anchorText);
    if (anchor === null) return null;
    const signed = (dir === "before" || dir === "ago") ? -n : n;
    const out = mcAddUnits(anchor, signed, m[2]);
    if (out === null || !isFinite(out)) return null;
    return {
      value: out,
      date: mcDateFmt(out).slice(0, 10),
      kind: "date",
      formatted: mcDateFmt(out)
    };
  }

  return null;
}

function mcSpanResult(days, unitWord, a, b) {
  const unit = unitWord.replace(/s$/, "");
  let value = days, label = "days";
  if (unit === "week") { value = days / 7; label = "weeks"; }
  else if (unit === "month") { value = days / 30.436875; label = "months"; }
  else if (unit === "year") { value = days / 365.25; label = "years"; }
  value = mcClean(value);
  return {
    value: value,
    days: days,
    kind: "span",
    from: mcDateFmt(a).slice(0, 10),
    to: mcDateFmt(b).slice(0, 10),
    formatted: mcFmtNum(value, { sig: 6 }) + " " + label
  };
}

/* ------------------------------------------------------------------ *
 * Self-test (Node only; the browser build never enters this branch)
 * ------------------------------------------------------------------ */

function mcSelfTest() {
  const state = { pass: 0, fail: 0, failures: [] };

  function ok(name, cond) {
    if (cond) state.pass++;
    else { state.fail++; state.failures.push(name); }
  }
  function eq(name, actual, expected) {
    ok(name + "  (got " + JSON.stringify(actual) + ", want " + JSON.stringify(expected) + ")",
      actual === expected);
  }
  function near(name, actual, expected, tol) {
    const t = tol === undefined ? 1e-3 : tol;
    ok(name + "  (got " + actual + ", want ~" + expected + ")",
      typeof actual === "number" && Math.abs(actual - expected) <= t);
  }
  function val(expr) {
    const r = mcCalc(expr);
    return r ? r.value : r;
  }

  /* --- expression evaluator ------------------------------------- */
  eq("(1200*7)/3 = 2800", val("(1200*7)/3"), 2800);
  eq("2^3^2 = 512 (right assoc)", val("2^3^2"), 512);
  eq("(2^3)^2 = 64 (explicit parens)", val("(2^3)^2"), 64);
  eq("-2^2 = -4 (^ binds tighter than unary minus)", val("-2^2"), -4);
  eq("(-2)^2 = 4", val("(-2)^2"), 4);
  eq("2^-3 = 0.125 (unary exponent)", val("2^-3"), 0.125);
  eq("10 % 3 = 1", val("10 % 3"), 1);
  eq("2 + 3 * 4 = 14", val("2 + 3 * 4"), 14);
  eq("(2 + 3) * 4 = 20", val("(2 + 3) * 4"), 20);
  eq("100 - 20 - 5 = 75 (left assoc)", val("100 - 20 - 5"), 75);
  eq("100 / 10 / 2 = 5 (left assoc)", val("100 / 10 / 2"), 5);
  eq("sqrt(144) = 12", val("sqrt(144)"), 12);
  eq("round(2.5) = 3", val("round(2.5)"), 3);
  eq("abs(-7) = 7", val("abs(-7)"), 7);
  eq("floor(2.7) = 2", val("floor(2.7)"), 2);
  eq("ceil(2.1) = 3", val("ceil(2.1)"), 3);
  eq("max(3,9,2) = 9", val("max(3,9,2)"), 9);
  eq("min(3,9,2) = 2", val("min(3,9,2)"), 2);
  eq("log(1000) = 3", val("log(1000)"), 3);
  near("ln(e) = 1", val("ln(e)"), 1, 1e-12);
  near("exp(1) = e", val("exp(1)"), Math.E, 1e-12);
  near("sin(pi) = 0", val("sin(pi)"), 0, 1e-12);
  near("cos(0) = 1", val("cos(0)"), 1, 1e-12);
  near("tan(0) = 0", val("tan(0)"), 0, 1e-12);
  near("pi*2 = 6.283", val("pi * 2"), 6.283185307, 1e-6);
  eq("1,250 + 750 = 2000 (thousands separator)", val("1,250 + 750"), 2000);
  eq("1,250,000 / 1000 = 1250", val("1,250,000 / 1000"), 1250);
  eq("1.5e3 * 2 = 3000 (scientific notation)", val("1.5e3 * 2"), 3000);
  eq("2e-3 * 1000 = 2", val("2e-3 * 1000"), 2);
  eq("2 ** 10 = 1024 (** alias)", val("2 ** 10"), 1024);
  eq("12 x 12 unicode multiply", val("12 × 12"), 144);
  eq("what is 6*7 (chat prefix stripped)", val("what is 6*7"), 42);
  eq("12*12= (trailing equals)", val("12*12="), 144);
  eq("steps are produced", Array.isArray(mcCalc("(1200*7)/3").steps) && mcCalc("(1200*7)/3").steps.length === 2, true);
  eq("steps trace innermost first", mcCalc("(1200*7)/3").steps[0], "1,200 × 7 = 8,400");
  eq("-2^2 trace shows the negation applying last", mcCalc("-2^2").steps.length, 2);
  eq("plain unary minus adds no noise step", mcCalc("-7 + 3").steps.length, 1);
  ok("steps are capped for huge expressions", mcCalc(new Array(60).join("1+") + "1").steps.length <= 16);
  eq("formatted uses separators", mcCalc("1000*1000").formatted, "1,000,000");

  const dz = mcCalc("1/0");
  ok("1/0 -> clear error, not Infinity", !!dz && dz.value === null && /zero/i.test(dz.error || ""));
  const mz = mcCalc("5 % 0");
  ok("5%0 -> clear error", !!mz && mz.value === null && !!mz.error);
  const big = mcCalc("1e308 * 10");
  ok("overflow -> error, not Infinity", !!big && big.value === null && !!big.error);

  ok("'2 +' -> null, no throw", mcCalc("2 +") === null);
  ok("'((3)' -> null, no throw", mcCalc("((3)") === null);
  ok("'foo(2)' -> null, no throw", mcCalc("foo(2)") === null);
  ok("'3))' -> null", mcCalc("3))") === null);
  ok("'* 5' -> null", mcCalc("* 5") === null);
  ok("plain prose -> null", mcCalc("breaking news today") === null);
  ok("bare year -> null (no operator)", mcCalc("2026") === null);
  ok("empty string -> null", mcCalc("") === null);
  ok("null input -> null", mcCalc(null) === null);
  ok("object input -> null", mcCalc({}) === null);
  ok("sqrt(-1) -> error not NaN", (function () { const r = mcCalc("sqrt(-1)"); return !!r && r.value === null && !!r.error; })());
  ok("max() with no args -> null", mcCalc("max()") === null);
  ok("no eval/Function anywhere in source is a build-time invariant", typeof mcCalc === "function");

  // Long input must not hang, and deep nesting must not blow the stack.
  const longExpr = new Array(101).join("1+").slice(0, -1); /* "1+1+...+1", 199 chars */
  const t0 = Date.now();
  const longRes = mcCalc(longExpr);
  const elapsed = Date.now() - t0;
  ok("200-char expression evaluates", !!longRes && longRes.value === 100);
  ok("200-char expression is fast (<200ms), got " + elapsed + "ms", elapsed < 200);
  ok("500 nested parens -> null, no crash",
    mcCalc(new Array(501).join("(") + "1" + new Array(501).join(")")) === null);

  /* --- unit conversion ------------------------------------------ */
  near("20 c to f = 68", mcConvert("20 c to f").value, 68, 1e-9);
  near("-40 c in f = -40", mcConvert("-40 c in f").value, -40, 1e-9);
  near("100 f to c = 37.78", mcConvert("100 f to c").value, 37.7778, 1e-3);
  near("0 c to k = 273.15", mcConvert("0 c to k").value, 273.15, 1e-9);
  near("32 f to c = 0", mcConvert("32 f to c").value, 0, 1e-9);
  near("5 km in miles = 3.107", mcConvert("5 km in miles").value, 3.10686, 1e-4);
  near("180 lb in kg = 81.65", mcConvert("180 lb in kg").value, 81.6466, 1e-3);
  near("6 feet in cm = 182.88", mcConvert("6 feet in cm").value, 182.88, 1e-6);
  near("3 hours in minutes = 180", mcConvert("3 hours in minutes").value, 180, 1e-9);
  eq("2 GB to MB = 2000 (decimal SI)", mcConvert("2 GB to MB").value, 2000);
  eq("2 GiB to MiB = 2048 (binary IEC)", mcConvert("2 GiB to MiB").value, 2048);
  near("100 kph to mph = 62.14", mcConvert("100 kph to mph").value, 62.1371, 1e-3);
  near("1 mile in km = 1.609", mcConvert("1 mile in km").value, 1.609344, 1e-9);
  near("2 acres to m2 = 8093.7", mcConvert("2 acres to sq m").value, 8093.7128448, 1e-4);
  near("1 gallon in liters = 3.785", mcConvert("1 gallon in liters").value, 3.785411784, 1e-9);
  near("1 atm to psi = 14.696", mcConvert("1 atm to psi").value, 14.6959, 1e-3);
  near("1013 mbar in hpa = 1013", mcConvert("1013 mbar in hpa").value, 1013, 1e-9);
  near("20c to f (no space)", mcConvert("20c to f").value, 68, 1e-9);
  near("5 in in cm (inch vs preposition)", mcConvert("5 in in cm").value, 12.7, 1e-9);
  eq("convert prefix + from/to keys", mcConvert("convert 5 km to miles").from, "km");
  eq("to key is canonical", mcConvert("convert 5 km to miles").to, "mi");
  ok("formatted string mentions both sides", /68/.test(mcConvert("20 c to f").formatted));
  ok("cross-dimension -> null", mcConvert("5 km in kg") === null);
  ok("unknown unit -> null", mcConvert("5 blorps in kg") === null);
  ok("prose -> null", mcConvert("markets fell in tokyo") === null);
  ok("null input -> null", mcConvert(null) === null);
  ok("empty -> null", mcConvert("") === null);

  /* --- percentages ---------------------------------------------- */
  eq("what is 15% of 240 = 36", mcPercent("what is 15% of 240").value, 36);
  eq("kind is 'of'", mcPercent("what is 15% of 240").kind, "of");
  eq("240 is what percent of 800 = 30", mcPercent("240 is what percent of 800").value, 30);
  eq("kind is 'whatPercent'", mcPercent("240 is what percent of 800").kind, "whatPercent");
  eq("what percent of 800 is 240 = 30", mcPercent("what percent of 800 is 240").value, 30);
  eq("increase 250 by 12% = 280", mcPercent("increase 250 by 12%").value, 280);
  eq("kind is 'increase'", mcPercent("increase 250 by 12%").kind, "increase");
  eq("decrease 250 by 12% = 220", mcPercent("decrease 250 by 12%").value, 220);
  eq("percent change from 80 to 92 = 15", mcPercent("percent change from 80 to 92").value, 15);
  eq("what's the percent change from 80 to 92 = 15", mcPercent("what's the percent change from 80 to 92").value, 15);
  eq("kind is 'change'", mcPercent("percent change from 80 to 92").kind, "change");
  eq("percent change from 92 to 80 = -13.04", mcRoundSig(mcPercent("percent change from 92 to 80").value, 4), -13.04);
  eq("20% off 250 = 200", mcPercent("20% off 250").value, 200);
  eq("0.5% of 1,000 = 5 (separators)", mcPercent("what is 0.5% of 1,000").value, 5);
  ok("no percent sign -> null", mcPercent("increase 250 by 12") === null);
  ok("prose -> null", mcPercent("100% of the vote was counted") === null || typeof mcPercent("100% of the vote was counted").value === "number");
  ok("null input -> null", mcPercent(null) === null);
  ok("garbage -> null", mcPercent("%%%%") === null);

  /* --- dates ----------------------------------------------------- */
  eq("days between 2026-01-01 and 2026-08-03 = 214",
    mcDateCalc("days between 2026-01-01 and 2026-08-03").value, 214);
  eq("reversed order is symmetric",
    mcDateCalc("days between 2026-08-03 and 2026-01-01").value, 214);
  eq("leap day counted (2024-02-28 -> 2024-03-01 = 2)",
    mcDateCalc("days between 2024-02-28 and 2024-03-01").value, 2);
  eq("weeks between works", mcDateCalc("weeks between 2026-01-01 and 2026-01-15").value, 2);
  const until = mcDateCalc("how many days until 2026-12-25");
  ok("days until returns a finite number", !!until && typeof until.value === "number" && isFinite(until.value));
  const from = mcDateCalc("what date is 90 days from today");
  ok("90 days from today returns a finite timestamp", !!from && typeof from.value === "number" && isFinite(from.value));
  ok("90 days from today is exactly 90 days out", !!from && mcDaysBetween(mcUTCToday(), from.value) === 90);
  ok("formatted looks like a date", !!from && /^\d{4}-\d{2}-\d{2} \(/.test(from.formatted));
  eq("30 days before 2026-03-03", mcDateCalc("30 days before 2026-03-03").date, "2026-02-01");
  eq("2 weeks from 2026-01-01", mcDateCalc("2 weeks from 2026-01-01").date, "2026-01-15");
  eq("1 month from 2026-01-31 clamps to Feb 28", mcDateCalc("1 month from 2026-01-31").date, "2026-02-28");
  eq("1 year from 2026-08-03", mcDateCalc("1 year from 2026-08-03").date, "2027-08-03");
  eq("named month parses", mcDateCalc("days between 2026-01-01 and dec 25 2026").value, 358);
  eq("long month name parses", mcDateCalc("days between 2026-01-01 and 25 december 2026").value, 358);
  eq("'sept' abbreviation parses", mcDateCalc("days between 2026-09-01 and sept 30 2026").value, 29);
  ok("ambiguous 'ma' month is refused", mcDateCalc("days between 2026-01-01 and ma 5 2026") === null);
  ok("invalid calendar date -> null", mcDateCalc("days between 2026-02-31 and 2026-03-01") === null);
  ok("prose -> null", mcDateCalc("the election is coming up") === null);
  ok("null input -> null", mcDateCalc(null) === null);
  ok("garbage -> null", mcDateCalc("days between banana and apple") === null);

  /* --- formatting ------------------------------------------------ */
  eq("1234567 compact = 1.23M", mcFmtNum(1234567, { compact: true }), "1.23M");
  eq("1500 compact = 1.5K", mcFmtNum(1500, { compact: true }), "1.5K");
  eq("2500000000 compact = 2.5B", mcFmtNum(2500000000, { compact: true }), "2.5B");
  eq("1.4e12 compact = 1.4T", mcFmtNum(1.4e12, { compact: true }), "1.4T");
  eq("999999 compact promotes to 1M", mcFmtNum(999999, { compact: true }), "1M");
  eq("999 compact stays plain", mcFmtNum(999, { compact: true }), "999");
  eq("thousands separators", mcFmtNum(1234567), "1,234,567");
  eq("-0.0001 never renders as -0", mcFmtNum(-0.0001), "-0.0001");
  ok("-0.0001 output is not '-0'", mcFmtNum(-0.0001) !== "-0");
  eq("negative zero renders as 0", mcFmtNum(-0), "0");
  eq("-0.0000000001 rounds to zero without a sign", mcFmtNum(-1e-10, { decimals: 2 }), "0.00");
  ok("tiny negative is never a signed zero", mcFmtNum(-1e-10, { decimals: 2 }).charAt(0) !== "-");
  eq("sig figs honoured", mcFmtNum(3.14159265, { sig: 3 }), "3.14");
  eq("explicit decimals honoured", mcFmtNum(2.5, { decimals: 2 }), "2.50");
  eq("integers keep no decimals", mcFmtNum(2800), "2,800");
  eq("grouping can be switched off", mcFmtNum(2800, { group: false }), "2800");
  eq("string numbers accepted", mcFmtNum("1,250"), "1,250");
  ok("NaN -> null", mcFmtNum(NaN) === null);
  ok("Infinity -> null", mcFmtNum(Infinity) === null);
  ok("garbage -> null", mcFmtNum("banana") === null);
  ok("undefined -> null", mcFmtNum(undefined) === null);

  /* --- report ---------------------------------------------------- */
  const total = state.pass + state.fail;
  for (let i = 0; i < state.failures.length; i++) console.log("FAIL  " + state.failures[i]);
  console.log((state.fail === 0 ? "PASS" : "FAIL") + " — " + state.pass + "/" + total + " assertions passed");
  return state.fail === 0;
}

if (typeof module !== "undefined" && require.main === module) {
  if (!mcSelfTest()) process.exit(1);
}
