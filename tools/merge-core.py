#!/usr/bin/env python3
"""Merge the agent-built core modules into one browser-ready block.

Each module was written independently, so three things have to happen:
  1. strip the node-only self-test block (everything from the guard line down)
  2. rename cross-module name collisions — several agents independently wrote
     their own mcStem/mcTokenize/mcCosine, which is correct for a standalone
     module and fatal when they share one script scope
  3. concatenate in dependency order

The canonical owner of each shared name is chosen deliberately: the stemmer
module owns mcStem/mcTokenize (it is the one cross-validated against Porter's
reference), summarize owns mcCosine/mcTfidfVec (documented as the reusable
pair). Everyone else's copy gets a module-private prefix.
"""
import re, sys, pathlib

CORE = pathlib.Path("/tmp/claude-0/-home-user-Farhia-Shier/0ac99f8a-12c0-5ceb-800c-e365afb69f73/scratchpad/core")
GUARD = 'if (typeof module !== "undefined" && require.main === module)'

# order matters: earlier files own the canonical names
ORDER = ["stem.js", "metrics.js", "sentiment.js", "ner.js", "summarize.js",
         "cluster.js", "lm.js", "qa.js", "dialog.js", "calc.js",
         # second wave. These four kept strict module prefixes (mcImg/mcCh/
         # mcPal/mcTl) and collide with nothing, so they need no RENAME entry.
         "imganalyse.js", "charts.js", "palette.js", "timeline.js",
         # third wave (CORE 5). Same discipline: one prefix per module, no
         # shared names, so RENAME stays empty for all of them. embed.js goes
         # last because it is the only one that reads the others' output.
         "stats.js", "timeseries.js", "geo.js", "graph.js", "ta.js",
         "fuzzy.js", "markdown.js", "datetime.js", "table.js", "hash.js",
         "query.js", "embed.js"]

# per-file renames, applied only inside that file
RENAME = {
    "summarize.js": {"mcStem": "mcSumStem", "mcTokens": "mcSumTokens"},
    "cluster.js":   {"mcStem": "mcClStem", "mcTokenize": "mcClTokenize",
                     "mcCosine": "mcClCosine", "mcTfidfVec": "mcClTfidfVec"},
    "qa.js":        {"mcStem": "mcQaStem", "mcTokenize": "mcQaTokenize",
                     "mcCosine": "mcQaCosine", "mcClamp": "mcQaClamp"},
    "dialog.js":    {"mcTokenize": "mcDlgTokenize", "mcStem": "mcDlgStem"},
    "ner.js":       {"mcStem": "mcNerStem"},
    # summarize.js owns the documented mcSentences/mcTfidfVec pair; metrics
    # wrote its own for standalone use, so its copies get a module prefix
    "metrics.js":   {"mcTokenize": "mcMtTokenize", "mcStem": "mcMtStem",
                     "mcSentences": "mcMtSentences", "mcWordRe": "mcMtWordRe",
                     "mcStopwords": "mcMtStopwords", "mcClean": "mcMtClean"},
    "lm.js":        {"mcTokenize": "mcLmTokenize", "mcRng": "mcLmRng"},
    "calc.js":      {"mcTokenize": "mcCalcTokenize", "mcClean": "mcCalcClean",
                     "mcParse": "mcCalcParse", "mcPeek": "mcCalcPeek", "mcStep": "mcCalcStep",
                     "mcSelfTest": "mcCalcSelfTest"},
    "sentiment.js": {},
}

def topnames(src):
    # `async function` and `class` count too. Missing them was a live hole:
    # the collision check is the only thing standing between two modules that
    # both define e.g. an async mcHash and a silent shadowing bug in the tab,
    # and it would have waved them straight through.
    return set(re.findall(r'^(?:async\s+)?(?:function|const|let|var|class)\s+(\w+)',
                          src, re.M))

def strip_tests(src):
    i = src.find(GUARD)
    return src if i < 0 else src[:i].rstrip() + "\n"

def main():
    out, seen, report = [], {}, []
    for name in ORDER:
        f = CORE / name
        if not f.exists():
            report.append(f"  SKIP {name} (not delivered)")
            continue
        src = strip_tests(f.read_text())
        for old, new in RENAME.get(name, {}).items():
            if re.search(r'\b%s\b' % re.escape(old), src):
                src = re.sub(r'\b%s\b' % re.escape(old), new, src)
        names = topnames(src)
        clash = names & set(seen)
        if clash:
            print(f"UNRESOLVED COLLISION in {name}: {sorted(clash)} "
                  f"(already from {[seen[c] for c in sorted(clash)]})", file=sys.stderr)
            sys.exit(1)
        for n in names:
            seen[n] = name
        # guard against a stray </script> in any agent output
        if "</script" in src.lower():
            print(f"FATAL: {name} contains a script-closing sequence", file=sys.stderr)
            sys.exit(1)
        out.append(f"/* ---------- core module: {name} ---------- */\n{src}")
        report.append(f"  {name:<14} {len(names):>3} names, {len(src.splitlines()):>4} lines")

    merged = "\n".join(out)
    (CORE / "_merged.js").write_text(merged)
    print("merged modules:")
    print("\n".join(report))
    print(f"\ntotal: {len(seen)} top-level names, {len(merged.splitlines())} lines, {len(merged)} bytes")
    print("\npublic API surface:")
    api = sorted(n for n in seen if re.match(r'^mc[A-Z]', n))
    for i in range(0, len(api), 6):
        print("  " + "  ".join(f"{x:<20}" for x in api[i:i+6]))

main()
