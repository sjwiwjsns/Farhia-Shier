#!/usr/bin/env python3
"""Bundle the Blaine driving sim into one self-contained HTML file.

Reads:
  blaine/src/index.template.html   shell (markup + CSS, with placeholders)
  blaine/vendor/three.min.js       vendored renderer (MIT, r160)
  blaine/src/[0-9]*-*.js           game sources, concatenated in filename order

Writes:
  blaine/index.html                single file, no external requests

Usage: python3 tools/build-blaine.py
"""

import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "blaine" / "src"
OUT = ROOT / "blaine" / "index.html"

# The r160 UMD build opens with a deprecation notice; drop just that call so
# the console stays clean for real warnings. Anchored on both ends because the
# minified payload is one enormous line.
THREE_DEPRECATION_WARN = re.compile(
    r"console\.warn\('Scripts \"build/three\.js\"[^']*'\),"
)


def read(path):
    return path.read_text(encoding="utf-8")


def main():
    template = read(SRC / "index.template.html")

    three = read(ROOT / "blaine" / "vendor" / "three.min.js")
    # r160 still ships the UMD build but logs a deprecation notice on load;
    # drop it so the console stays clean for actual game warnings.
    # It sits inside a comma expression that wraps the UMD factory, so it has
    # to be replaced with a harmless operand rather than deleted outright.
    three, n = THREE_DEPRECATION_WARN.subn("0,", three, count=1)
    if n == 0:
        print("note: three.js deprecation warning not found (harmless)")

    modules = sorted(SRC.glob("[0-9]*-*.js"))
    if not modules:
        sys.exit("no game sources found in blaine/src")

    parts = []
    for m in modules:
        body = read(m)
        parts.append("/* ===== %s ===== */\n%s" % (m.name, body))
    game = "\n\n".join(parts)

    # The whole game shares one function scope; sources are plain statements.
    game = "(function(){\n'use strict';\n" + game + "\n})();\n"

    for blob, label in ((three, "three.js"), (game, "game")):
        if "</script" in blob.lower():
            sys.exit("%s contains a closing script tag; cannot inline" % label)

    # Split/join rather than str.replace so nothing in the payload is treated
    # as a pattern, and assert both placeholders were actually present.
    def inject(doc, marker, payload):
        head, sep, tail = doc.partition(marker)
        if not sep:
            sys.exit("template is missing %s" % marker)
        return head + payload + tail

    html = inject(template, "/*__THREE__*/", three)
    html = inject(html, "/*__GAME__*/", game)
    OUT.write_text(html, encoding="utf-8")
    kb = OUT.stat().st_size / 1024
    print("wrote %s (%.0f KB, %d game modules)" % (OUT.relative_to(ROOT), kb, len(modules)))


if __name__ == "__main__":
    main()
