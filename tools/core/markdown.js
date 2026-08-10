/* ====================================================================
   mcMd — Markdown parser and safe HTML renderer.

   This renders MODEL OUTPUT into a chat bubble. That single fact drives
   the design: the input is not authored by the site, it is generated
   text that may contain anything, so the security requirement is not a
   feature of this module — it is the module.

   Two stages on purpose. mcMdParse produces an AST; mcMdRender turns it
   into HTML and mcMdToText flattens it for speech. One parse, two
   consumers, and the escaping lives in exactly one place.

   Subset implemented (deliberately NOT full CommonMark, and it does not
   claim to be): ATX headings, paragraphs, bold/italic/bold-italic,
   strikethrough, inline code, fenced and indented code, blockquotes
   (nested), ordered/unordered lists (nested, task items), tables with
   alignment, horizontal rules, links, autolinks, images, hard breaks.

   Deliberate deviations:
   - Raw HTML in the source is ESCAPED, never passed through, and there
     is no option to change that. A chat bubble is not a document.
   - Setext headings are not supported; they are rare in model output and
     ambiguous against tables.
   - Reference links are not supported.
   ==================================================================== */

var mcMdMAX_DEPTH = 8;          /* nesting cap: deeper input is flattened, not recursed */
var mcMdMAX_INPUT = 1 << 20;    /* 1 MB; beyond that we truncate rather than stall a tab */

function mcMdEscape(s) {
  if (s === null || s === undefined) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* --------------------------------------------------------------------
   URL safety.

   The allowlist is the whole defence, and it is applied to a normalised
   copy: lowercased, with whitespace, control characters and HTML entities
   resolved first. Every one of those is a real bypass —
   "java\tscript:", "JaVaScRiPt:", "&#106;avascript:" and
   "%6Aavascript:" all reach the same handler if you only check the raw
   prefix.
   -------------------------------------------------------------------- */
function mcMdDecodeEntities(s) {
  return String(s).replace(/&#(x?)([0-9a-fA-F]+);?/g, function (m, hex, num) {
    var code = parseInt(num, hex ? 16 : 10);
    if (!isFinite(code) || code < 0 || code > 0x10FFFF) return "";
    try { return String.fromCodePoint(code); } catch (e) { return ""; }
  }).replace(/&(amp|lt|gt|quot|apos);/g, function (m, n) {
    return { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" }[n] || "";
  });
}

function mcMdSafeUrl(raw) {
  if (raw === null || raw === undefined) return null;
  var url = String(raw).trim();
  if (!url) return null;

  /* Normalise for INSPECTION only — the original is what gets emitted,
     so a legitimate URL is never mangled by the check. */
  var probe = url;
  for (var pass = 0; pass < 3; pass++) {
    var next = mcMdDecodeEntities(probe);
    try { next = decodeURIComponent(next); } catch (e) { /* malformed % — keep going */ }
    if (next === probe) break;
    probe = next;
  }
  probe = probe.replace(/[\x00-\x20\x7f\u00a0\u2028\u2029\uFEFF]/g, "").toLowerCase();

  /* A scheme is everything before the first colon, if that colon comes
     before any /, ? or #. No colon in that position means relative. */
  var colon = probe.indexOf(":");
  if (colon > -1) {
    var head = probe.slice(0, colon);
    var slash = probe.search(/[\/?#]/);
    if (slash === -1 || colon < slash) {
      if (!/^[a-z][a-z0-9+.-]*$/.test(head)) return null;          /* junk scheme */
      if (["http", "https", "mailto", "tel"].indexOf(head) < 0) return null;
    }
  }
  /* Protocol-relative //evil.example is fine (inherits https) but a
     backslash variant is a known IE-era smuggle; reject it. */
  if (/^\\\\/.test(probe)) return null;
  return url;
}

/* --------------------------------------------------------------------
   Inline parsing -> nodes
   -------------------------------------------------------------------- */
function mcMdInline(src, depth) {
  var d = depth || 0;
  var out = [];
  var s = String(src === null || src === undefined ? "" : src);
  if (d > mcMdMAX_DEPTH) return [{ type: "text", value: s }];

  var i = 0, buf = "";
  function flush() { if (buf) { out.push({ type: "text", value: buf }); buf = ""; } }

  while (i < s.length) {
    var c = s.charAt(i);

    /* inline code — highest precedence, contents are never parsed */
    if (c === "`") {
      var run = /^`+/.exec(s.slice(i))[0];
      var close = s.indexOf(run, i + run.length);
      if (close > -1) {
        flush();
        out.push({ type: "code", value: s.slice(i + run.length, close) });
        i = close + run.length;
        continue;
      }
    }

    /* images and links */
    if (c === "!" && s.charAt(i + 1) === "[") {
      var img = mcMdLinkAt(s, i + 1);
      if (img) { flush(); out.push({ type: "image", alt: img.label, url: img.url, title: img.title }); i = img.end; continue; }
    }
    if (c === "[") {
      var lk = mcMdLinkAt(s, i);
      if (lk) {
        flush();
        out.push({ type: "link", url: lk.url, title: lk.title, kids: mcMdInline(lk.label, d + 1) });
        i = lk.end;
        continue;
      }
    }

    /* autolink */
    if (c === "<") {
      var auto = /^<((?:https?|mailto):[^\s<>]+)>/.exec(s.slice(i));
      if (auto) {
        flush();
        out.push({ type: "link", url: auto[1], kids: [{ type: "text", value: auto[1] }] });
        i += auto[0].length;
        continue;
      }
    }

    /* emphasis: *** ** * and ___ __ _ and ~~ */
    var em = mcMdEmphasisAt(s, i);
    if (em) {
      flush();
      out.push({ type: em.tag, kids: mcMdInline(em.inner, d + 1) });
      i = em.end;
      continue;
    }

    /* hard break: two spaces then newline, or a backslash then newline */
    if ((c === " " && /^ {2,}\n/.test(s.slice(i))) || (c === "\\" && s.charAt(i + 1) === "\n")) {
      flush();
      out.push({ type: "break" });
      i = s.indexOf("\n", i) + 1;
      continue;
    }

    /* backslash escape */
    if (c === "\\" && /[\\`*_{}\[\]()#+\-.!~>|]/.test(s.charAt(i + 1))) {
      buf += s.charAt(i + 1); i += 2; continue;
    }

    buf += c; i++;
  }
  flush();
  return out;
}

/* [label](url "title") — returns null unless it closes cleanly, so an
   unbalanced bracket degrades to literal text instead of eating the rest
   of the message. */
function mcMdLinkAt(s, start) {
  if (s.charAt(start) !== "[") return null;
  var depth = 0, i = start, close = -1;
  for (; i < s.length; i++) {
    var ch = s.charAt(i);
    if (ch === "\\") { i++; continue; }
    if (ch === "[") depth++;
    else if (ch === "]") { depth--; if (depth === 0) { close = i; break; } }
  }
  if (close === -1 || s.charAt(close + 1) !== "(") return null;
  var j = close + 2, par = 1, end = -1;
  for (; j < s.length; j++) {
    var c2 = s.charAt(j);
    if (c2 === "\\") { j++; continue; }
    if (c2 === "(") par++;
    else if (c2 === ")") { par--; if (par === 0) { end = j; break; } }
  }
  if (end === -1) return null;
  var inner = s.slice(close + 2, end).trim();
  var title = null;
  var tm = /\s+"([^"]*)"$|\s+'([^']*)'$/.exec(inner);
  if (tm) { title = tm[1] !== undefined ? tm[1] : tm[2]; inner = inner.slice(0, tm.index).trim(); }
  if (/^<.*>$/.test(inner)) inner = inner.slice(1, -1);
  return { label: s.slice(start + 1, close), url: inner, title: title, end: end + 1 };
}

function mcMdEmphasisAt(s, i) {
  var rest = s.slice(i);
  var rules = [
    [/^\*\*\*([\s\S]+?)\*\*\*/, "strongem"],
    [/^___([\s\S]+?)___/, "strongem"],
    [/^\*\*([\s\S]+?)\*\*/, "strong"],
    [/^__([\s\S]+?)__/, "strong"],
    [/^~~([\s\S]+?)~~/, "strike"],
    [/^\*([^\s*][\s\S]*?)\*/, "em"],
    [/^_([^\s_][\s\S]*?)_(?![A-Za-z0-9])/, "em"]
  ];
  for (var r = 0; r < rules.length; r++) {
    var m = rules[r][0].exec(rest);
    if (m) return { tag: rules[r][1], inner: m[1], end: i + m[0].length };
  }
  return null;
}

/* --------------------------------------------------------------------
   Block parsing
   -------------------------------------------------------------------- */
function mcMdParse(src) {
  var text = src === null || src === undefined ? "" : String(src);
  var truncated = false;
  if (text.length > mcMdMAX_INPUT) { text = text.slice(0, mcMdMAX_INPUT); truncated = true; }
  text = text.replace(/\r\n?/g, "\n").replace(/\t/g, "    ");
  var lines = text.split("\n");
  return { type: "doc", truncated: truncated, kids: mcMdBlocks(lines, 0) };
}

function mcMdBlocks(lines, depth) {
  var out = [], i = 0;
  if (depth > mcMdMAX_DEPTH) {
    return [{ type: "para", kids: [{ type: "text", value: lines.join("\n") }] }];
  }

  while (i < lines.length) {
    var line = lines[i];

    if (!line.trim()) { i++; continue; }

    /* fenced code */
    var fence = /^\s{0,3}(`{3,}|~{3,})\s*([^`\s]*)/.exec(line);
    if (fence) {
      var mark = fence[1].charAt(0), min = fence[1].length;
      var body = [], j = i + 1, closed = false;
      for (; j < lines.length; j++) {
        var cl = new RegExp("^\\s{0,3}" + (mark === "`" ? "`" : "~") + "{" + min + ",}\\s*$");
        if (cl.test(lines[j])) { closed = true; break; }
        body.push(lines[j]);
      }
      /* An unclosed fence runs to the end rather than swallowing the
         document into a parse error — model output truncates mid-block
         more often than it is malformed. */
      out.push({ type: "codeblock", lang: fence[2] || "", value: body.join("\n"), closed: closed });
      i = closed ? j + 1 : lines.length;
      continue;
    }

    /* ATX heading */
    var h = /^\s{0,3}(#{1,6})\s+(.*?)\s*#*\s*$/.exec(line);
    if (h) { out.push({ type: "heading", level: h[1].length, kids: mcMdInline(h[2], depth) }); i++; continue; }

    /* horizontal rule */
    if (/^\s{0,3}([-*_])\s*(\1\s*){2,}$/.test(line)) { out.push({ type: "hr" }); i++; continue; }

    /* blockquote */
    if (/^\s{0,3}>/.test(line)) {
      var q = [];
      while (i < lines.length && (/^\s{0,3}>/.test(lines[i]) || (q.length && lines[i].trim()))) {
        q.push(lines[i].replace(/^\s{0,3}>\s?/, ""));
        i++;
      }
      out.push({ type: "quote", kids: mcMdBlocks(q, depth + 1) });
      continue;
    }

    /* table: a header row followed by a delimiter row */
    if (line.indexOf("|") > -1 && i + 1 < lines.length && /^[\s|:-]+$/.test(lines[i + 1]) && lines[i + 1].indexOf("-") > -1) {
      var head = mcMdRow(line);
      var align = mcMdRow(lines[i + 1]).map(function (c) {
        var l = /^:/.test(c.trim()), r = /:$/.test(c.trim());
        return l && r ? "center" : r ? "right" : l ? "left" : null;
      });
      var rows = [], k = i + 2;
      for (; k < lines.length && lines[k].indexOf("|") > -1 && lines[k].trim(); k++) rows.push(mcMdRow(lines[k]));
      out.push({ type: "table", head: head, align: align, rows: rows, depth: depth });
      i = k;
      continue;
    }

    /* list */
    var li = /^(\s*)([-*+]|\d{1,9}[.)])\s+(.*)$/.exec(line);
    if (li) {
      var ordered = /\d/.test(li[2]);
      var startNo = ordered ? parseInt(li[2], 10) : 1;
      var items = [], baseIndent = li[1].length;
      while (i < lines.length) {
        var m2 = /^(\s*)([-*+]|\d{1,9}[.)])\s+(.*)$/.exec(lines[i]);
        if (!m2 || m2[1].length < baseIndent) break;
        if (m2[1].length > baseIndent) {
          /* deeper item belongs to the previous entry */
          var sub = [];
          while (i < lines.length) {
            var m3 = /^(\s*)([-*+]|\d{1,9}[.)])\s+/.exec(lines[i]);
            if (!m3 || m3[1].length <= baseIndent) {
              if (lines[i].trim() && !/^(\s*)([-*+]|\d{1,9}[.)])\s+/.test(lines[i]) &&
                  /^\s{2,}/.test(lines[i])) { sub.push(lines[i].replace(/^\s{2}/, "")); i++; continue; }
              break;
            }
            sub.push(lines[i].replace(new RegExp("^\\s{" + (baseIndent + 1) + "}"), ""));
            i++;
          }
          if (items.length) items[items.length - 1].kids = items[items.length - 1].kids.concat(mcMdBlocks(sub, depth + 1));
          continue;
        }
        var content = m2[3];
        var task = /^\[([ xX])\]\s+(.*)$/.exec(content);
        var item = { type: "item", checked: task ? /[xX]/.test(task[1]) : null, kids: [] };
        item.kids.push({ type: "para", tight: true, kids: mcMdInline(task ? task[2] : content, depth) });
        items.push(item);
        i++;
        /* lazy continuation lines */
        while (i < lines.length && lines[i].trim() &&
               !/^(\s*)([-*+]|\d{1,9}[.)])\s+/.test(lines[i]) && !/^\s{2,}/.test(lines[i]) &&
               !/^\s{0,3}(#{1,6}\s|>|```|~~~)/.test(lines[i])) {
          item.kids[0].kids = item.kids[0].kids.concat(
            [{ type: "text", value: " " }], mcMdInline(lines[i].trim(), depth));
          i++;
        }
      }
      out.push({ type: "list", ordered: ordered, start: startNo, kids: items });
      continue;
    }

    /* indented code */
    if (/^ {4}\S/.test(line)) {
      var code = [];
      while (i < lines.length && (/^ {4}/.test(lines[i]) || !lines[i].trim())) {
        code.push(lines[i].replace(/^ {4}/, "")); i++;
      }
      while (code.length && !code[code.length - 1].trim()) code.pop();
      out.push({ type: "codeblock", lang: "", value: code.join("\n"), closed: true });
      continue;
    }

    /* paragraph */
    var para = [];
    while (i < lines.length && lines[i].trim() &&
           !/^\s{0,3}(#{1,6}\s|>|```|~~~|([-*_])\s*\2\s*\2)/.test(lines[i]) &&
           !/^(\s*)([-*+]|\d{1,9}[.)])\s+/.test(lines[i])) {
      para.push(lines[i]); i++;
    }
    /* FORCED PROGRESS. The paragraph guard above rejects anything that
       merely *looks* like the start of another block, but the real block
       rules are stricter — "***x" trips the horizontal-rule lookahead yet
       is not a rule, because that rule requires end-of-line. Such a line
       is consumed by no branch, para comes back empty, i never advances,
       and the outer loop spins forever: a hung tab from ordinary model
       output. Any line that reaches here belongs to a paragraph, full
       stop. This loop must never be able to make zero progress. */
    if (!para.length) { para.push(lines[i]); i++; }
    out.push({ type: "para", kids: mcMdInline(para.join("\n"), depth) });
  }
  return out;
}

function mcMdRow(line) {
  var t = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  var cells = [], buf = "";
  for (var i = 0; i < t.length; i++) {
    var c = t.charAt(i);
    if (c === "\\") { buf += t.charAt(i + 1) || ""; i++; continue; }
    if (c === "|") { cells.push(buf); buf = ""; continue; }
    buf += c;
  }
  cells.push(buf);
  return cells.map(function (x) { return x.trim(); });
}

/* --------------------------------------------------------------------
   Rendering
   -------------------------------------------------------------------- */
function mcMdRenderInline(nodes) {
  var out = "";
  for (var i = 0; i < (nodes || []).length; i++) {
    var n = nodes[i];
    if (n.type === "text") out += mcMdEscape(n.value);
    else if (n.type === "code") out += "<code>" + mcMdEscape(n.value) + "</code>";
    else if (n.type === "break") out += "<br>";
    else if (n.type === "strong") out += "<strong>" + mcMdRenderInline(n.kids) + "</strong>";
    else if (n.type === "em") out += "<em>" + mcMdRenderInline(n.kids) + "</em>";
    else if (n.type === "strongem") out += "<strong><em>" + mcMdRenderInline(n.kids) + "</em></strong>";
    else if (n.type === "strike") out += "<del>" + mcMdRenderInline(n.kids) + "</del>";
    else if (n.type === "link") {
      var u = mcMdSafeUrl(n.url);
      var inner = mcMdRenderInline(n.kids);
      /* A rejected URL keeps its text but loses the anchor. Dropping the
         text too would silently delete content the model wrote. */
      out += u
        ? '<a href="' + mcMdEscape(u) + '" rel="noopener noreferrer nofollow" target="_blank"' +
          (n.title ? ' title="' + mcMdEscape(n.title) + '"' : "") + ">" + inner + "</a>"
        : inner;
    } else if (n.type === "image") {
      var iu = mcMdSafeUrl(n.url);
      out += iu
        ? '<img src="' + mcMdEscape(iu) + '" alt="' + mcMdEscape(n.alt) + '" loading="lazy">'
        : mcMdEscape(n.alt || "");
    }
  }
  return out;
}

function mcMdRenderBlocks(nodes, opts) {
  var o = opts || {};
  var out = "";
  for (var i = 0; i < (nodes || []).length; i++) {
    var n = nodes[i];
    switch (n.type) {
      case "para":
        out += n.tight ? mcMdRenderInline(n.kids) : "<p>" + mcMdRenderInline(n.kids) + "</p>";
        break;
      case "heading":
        var lv = Math.min(6, Math.max(1, n.level));
        out += "<h" + lv + ">" + mcMdRenderInline(n.kids) + "</h" + lv + ">";
        break;
      case "hr": out += "<hr>"; break;
      case "codeblock":
        out += '<pre><code' + (n.lang ? ' class="lang-' + mcMdEscape(n.lang) + '"' : "") + ">" +
               mcMdEscape(n.value) + "</code></pre>";
        break;
      case "quote": out += "<blockquote>" + mcMdRenderBlocks(n.kids, o) + "</blockquote>"; break;
      case "list":
        var tag = n.ordered ? "ol" : "ul";
        out += "<" + tag + (n.ordered && n.start !== 1 ? ' start="' + mcMdEscape(String(n.start)) + '"' : "") + ">";
        for (var k = 0; k < n.kids.length; k++) {
          var it = n.kids[k];
          out += "<li" + (it.checked !== null && it.checked !== undefined ? ' class="task"' : "") + ">";
          if (it.checked !== null && it.checked !== undefined) {
            out += '<input type="checkbox" disabled' + (it.checked ? " checked" : "") + "> ";
          }
          out += mcMdRenderBlocks(it.kids, o) + "</li>";
        }
        out += "</" + tag + ">";
        break;
      case "table":
        out += '<table class="mcmd"><thead><tr>';
        for (var h = 0; h < n.head.length; h++) {
          out += "<th" + (n.align[h] ? ' style="text-align:' + n.align[h] + '"' : "") + ">" +
                 mcMdRenderInline(mcMdInline(n.head[h], 0)) + "</th>";
        }
        out += "</tr></thead><tbody>";
        for (var r = 0; r < n.rows.length; r++) {
          out += "<tr>";
          /* Ragged rows are padded/clipped to the header width rather than
             producing a broken table. */
          for (var c = 0; c < n.head.length; c++) {
            out += "<td" + (n.align[c] ? ' style="text-align:' + n.align[c] + '"' : "") + ">" +
                   mcMdRenderInline(mcMdInline(n.rows[r][c] === undefined ? "" : n.rows[r][c], 0)) + "</td>";
          }
          out += "</tr>";
        }
        out += "</tbody></table>";
        break;
    }
  }
  return out;
}

function mcMdRender(astOrSrc, opts) {
  var ast = astOrSrc && astOrSrc.type === "doc" ? astOrSrc : mcMdParse(astOrSrc);
  return mcMdRenderBlocks(ast.kids, opts);
}

/* Plain text, for speech. Same AST, so the two can never drift. */
function mcMdToText(astOrSrc) {
  var ast = astOrSrc && astOrSrc.type === "doc" ? astOrSrc : mcMdParse(astOrSrc);
  function inl(nodes) {
    var s = "";
    for (var i = 0; i < (nodes || []).length; i++) {
      var n = nodes[i];
      if (n.type === "text" || n.type === "code") s += n.value;
      else if (n.type === "break") s += " ";
      else if (n.type === "image") s += n.alt ? n.alt : "";
      else if (n.kids) s += inl(n.kids);
    }
    return s;
  }
  function blk(nodes) {
    var parts = [];
    for (var i = 0; i < (nodes || []).length; i++) {
      var n = nodes[i];
      if (n.type === "para" || n.type === "heading") parts.push(inl(n.kids));
      else if (n.type === "codeblock") parts.push(n.value);
      else if (n.type === "hr") parts.push("");
      else if (n.type === "quote") parts.push(blk(n.kids));
      else if (n.type === "list") {
        for (var k = 0; k < n.kids.length; k++) parts.push(blk(n.kids[k].kids));
      } else if (n.type === "table") {
        parts.push(n.head.join(", "));
        for (var r = 0; r < n.rows.length; r++) parts.push(n.rows[r].join(", "));
      }
    }
    return parts.filter(function (x) { return x && x.trim(); }).join("\n");
  }
  return blk(ast.kids);
}

/* ====================================================================
 * Self-test. The security block is the reason this module exists, so it
 * is tested against every evasion I could construct, not just the naive
 * "javascript:" prefix.
 * ==================================================================== */
if (typeof module !== "undefined" && require.main === module) {
  var mdPass = 0, mdFail = 0, mdF = [];
  function ok(n, c, x) { if (c) { mdPass++; return; } mdFail++; mdF.push(n + (x !== undefined ? "  (got: " + x + ")" : "")); }
  function has(n, src, frag) { var h = mcMdRender(src); ok(n, h.indexOf(frag) > -1, h.slice(0, 110)); }
  function lacks(n, src, frag) { var h = mcMdRender(src); ok(n, h.indexOf(frag) < 0, h.slice(0, 110)); }

  /* ---------------- security: the point of the module -------------- */
  (function () {
    var evasions = [
      "javascript:alert(1)",
      "JaVaScRiPt:alert(1)",
      "   javascript:alert(1)",
      "java\tscript:alert(1)",
      "java\nscript:alert(1)",
      "&#106;avascript:alert(1)",
      "&#x6A;avascript:alert(1)",
      "%6Aavascript:alert(1)",
      "vbscript:msgbox(1)",
      "data:text/html;base64,PHNjcmlwdD4=",
      "DATA:text/html,x",
      "java\u00a0script:alert(1)",
      "\x01javascript:alert(1)",
      "file:///etc/passwd"
    ];
    for (var i = 0; i < evasions.length; i++) {
      var label = JSON.stringify(evasions[i]).slice(0, 32);
      ok("rejects " + label, mcMdSafeUrl(evasions[i]) === null, String(mcMdSafeUrl(evasions[i])));
      var h = mcMdRender("[click](" + evasions[i] + ")");
      ok("no href survives " + label, h.indexOf("href") < 0, h.slice(0, 90));
      ok("but the link text survives " + label, h.indexOf("click") > -1, h.slice(0, 80));
    }
    var good = ["https://example.com/a?b=1#c", "http://x.test", "mailto:a@b.co", "/rel/path", "#anchor", "?q=1"];
    for (var g = 0; g < good.length; g++) {
      ok("allows " + good[g], mcMdSafeUrl(good[g]) !== null, String(mcMdSafeUrl(good[g])));
    }
    ok("a legitimate URL is not mangled",
       mcMdSafeUrl("https://x.test/a%20b?q=1&r=2") === "https://x.test/a%20b?q=1&r=2");
    ok("an image with a hostile src loses the tag but keeps the alt",
       (function () { var r = mcMdRender("![shown](javascript:alert(1))");
                      return r.indexOf("<img") < 0 && r.indexOf("shown") > -1; })(),
       mcMdRender("![shown](javascript:alert(1))"));
  })();

  /* ---------------- raw HTML never passes through ------------------ */
  (function () {
    var hostile = '<img src=x onerror="alert(1)"> <b onclick="x">hi</b> <scr' + 'ipt>alert(2)</scr' + 'ipt>';
    var h = mcMdRender(hostile);
    ok("no live img", h.indexOf("<img src=x") < 0, h.slice(0, 90));
    ok("no script tag", h.toLowerCase().indexOf("<scr" + "ipt") < 0);
    /* The property is "no REAL element carries a handler", not "the string
       never contains on*=". Escaped text legitimately reads
       `&lt;img onerror=&quot;...&quot;&gt;` — that is inert text, and a
       naive string search flags it while missing an actual attribute. So:
       pull out the real tags and check those. */
    var tagsOf = function (html) { return html.match(/<[^>]*>/g) || []; };
    ok("no real element carries an event handler",
       tagsOf(h).every(function (t) { return !/\son\w+\s*=/i.test(t); }),
       JSON.stringify(tagsOf(h)).slice(0, 110));
    ok("angle brackets were escaped", h.indexOf("&lt;") > -1);
    lacks("html in a code fence stays inert", "```\n<img src=x onerror=alert(1)>\n```", "<img src=x");
    has("and is visible as text", "```\n<b>hi</b>\n```", "&lt;b&gt;hi&lt;/b&gt;");
    var t = mcMdRender("| a | b |\n| --- | --- |\n| <b>x</b> | ok |");
    ok("table cells are escaped", t.indexOf("<b>x</b>") < 0, t.slice(0, 120));
    var img = mcMdRender('![alt" onload=x](https://x.test/i.png)');
    /* The quote inside the alt text must be entity-escaped so it cannot
       terminate the attribute. Checking the RAW output is the point —
       un-escaping first would manufacture the very breakout being tested. */
    ok("image alt escapes the quote that would end the attribute",
       img.indexOf("&quot;") > -1 && /alt="[^"]*"/.test(img), img);
    /* An on* sequence INSIDE a quoted value is inert — that is precisely
       what escaping the quote buys. So strip quoted values first; what
       remains is the attribute-name space, and that is where a handler
       would have to appear to do anything. */
    var namesOnly = function (tag) { return tag.replace(/"[^"]*"/g, '""').replace(/'[^']*'/g, "''"); };
    ok("no handler appears in the img tag's attribute names",
       namesOnly((img.match(/<img[^>]*>/) || [""])[0]).search(/\son\w+\s*=/i) < 0,
       namesOnly((img.match(/<img[^>]*>/) || [""])[0]));
    var quoted = mcMdRender('[t](https://x.test "ti\\"tle")');
    ok("link title cannot break out either", !/title="[^"]*"[^>]*=/.test(quoted), quoted);
  })();

  /* ---------------- blocks ----------------------------------------- */
  (function () {
    has("heading", "# Title", "<h1>Title</h1>");
    has("h3", "### Three", "<h3>Three</h3>");
    has("paragraph", "hello there", "<p>hello there</p>");
    has("bold", "**bold**", "<strong>bold</strong>");
    has("italic", "*it*", "<em>it</em>");
    has("bold italic", "***both***", "<strong><em>both</em></strong>");
    has("strikethrough", "~~gone~~", "<del>gone</del>");
    has("inline code", "`x=1`", "<code>x=1</code>");
    has("hr", "---", "<hr>");
    has("blockquote", "> quoted", "<blockquote>");
    has("fenced code", "```js\nlet x=1\n```", "<pre><code");
    has("fence language", "```js\nx\n```", 'class="lang-js"');
    has("indented code", "    literal\n", "<pre><code>");
    has("unordered list", "- one\n- two", "<ul>");
    has("ordered list", "1. one\n2. two", "<ol>");
    has("ordered start", "5. five", 'start="5"');
    has("task list checked", "- [x] done", "checked");
    has("task list unchecked", "- [ ] todo", "<input");
    has("link", "[t](https://x.test)", '<a href="https://x.test"');
    has("link is rel-protected", "[t](https://x.test)", 'rel="noopener noreferrer nofollow"');
    has("autolink", "<https://x.test>", '<a href="https://x.test"');
    has("image", "![a](https://x.test/i.png)", "<img src=");
    has("table", "| a | b |\n| --- | --- |\n| 1 | 2 |", "<table");
    has("table alignment", "| a |\n| ---: |\n| 1 |", "text-align:right");
    has("hard break", "a  \nb", "<br>");
    has("nested quote", "> > deep", "<blockquote><blockquote>");
    has("backslash escape", "\\*not italic\\*", "*not italic*");
    lacks("escaped asterisk makes no em", "\\*x\\*", "<em>");
    has("underscore emphasis", "_it_", "<em>it</em>");
    lacks("intra-word underscore is not emphasis", "snake_case_name", "<em>");
  })();

  /* ---------------- robustness ------------------------------------- */
  (function () {
    ok("null does not throw", mcMdRender(null) === "");
    ok("undefined does not throw", mcMdRender(undefined) === "");
    ok("a number does not throw", typeof mcMdRender(42) === "string");
    ok("an object does not throw", typeof mcMdRender({}) === "string");
    ok("unclosed fence still renders", mcMdRender("```\nx").indexOf("<pre>") > -1);
    ok("unclosed fence is flagged in the ast", mcMdParse("```\nx").kids[0].closed === false);
    ok("unbalanced emphasis degrades to text", mcMdRender("**bold").indexOf("<strong>") < 0);
    ok("unbalanced bracket degrades to text", mcMdRender("[label(x").indexOf("<a ") < 0);
    ok("ragged table row is padded", mcMdRender("| a | b |\n|---|---|\n| 1 |").indexOf("<td></td>") > -1);
    ok("extra table cells are clipped",
       (mcMdRender("| a |\n|---|\n| 1 | 2 | 3 |").match(/<td/g) || []).length === 1);
    ok("CRLF is handled", mcMdRender("# A\r\n\r\ntext").indexOf("<h1>A</h1>") > -1);
    var deep = "";
    for (var d = 0; d < 40; d++) deep += "> ";
    ok("deep nesting is capped, not stack-overflowed", typeof mcMdRender(deep + "x") === "string");
    var wide = [];
    for (var w = 0; w < 2000; w++) wide.push("- item " + w);
    ok("a 2000-item list renders", mcMdRender(wide.join("\n")).indexOf("<ul>") === 0);
    ok("a huge input is truncated, not hung", mcMdParse(new Array(1200000).join("a")).truncated === true);
  })();

  /* ---------------- toText, for speech ----------------------------- */
  (function () {
    var src = "# Title\n\nSome **bold** text and a [link](https://x.test).\n\n- one\n- two\n\n```\ncode\n```";
    var t = mcMdToText(src);
    ok("toText drops markup", t.indexOf("**") < 0 && t.indexOf("<") < 0, t.slice(0, 70));
    ok("toText keeps the words", /Title/.test(t) && /bold/.test(t) && /link/.test(t), t.slice(0, 70));
    ok("toText keeps list items", /one/.test(t) && /two/.test(t));
    ok("toText is empty for empty input", mcMdToText("") === "");
    ok("parse once, render twice", (function () {
      var ast = mcMdParse("**x**");
      return mcMdRender(ast).indexOf("<strong>") > -1 && mcMdToText(ast) === "x";
    })());
  })();

  /* ---------------- performance ------------------------------------ */
  (function () {
    var doc = [];
    for (var i = 0; i < 2000; i++) {
      doc.push("## Section " + i, "", "Some **bold** text with `code` and a [link](https://x.test/" + i + ").", "",
               "- point one", "- point two", "");
    }
    var big = doc.join("\n");
    var t0 = Date.now(); var out = mcMdRender(big); var ms = Date.now() - t0;
    console.log("  " + Math.round(big.length / 1024) + "KB markdown rendered in " + ms + "ms");
    ok("a large document renders in reasonable time", ms < 4000, ms + "ms");
    ok("and produces output", out.length > big.length / 2);
    var t1 = Date.now(); mcMdRender(new Array(600).join("*") + "x"); var ms1 = Date.now() - t1;
    ok("a wall of asterisks does not backtrack forever", ms1 < 3000, ms1 + "ms");
  })();

  /* ---------------- hygiene ---------------------------------------- */
  (function () {
    var src = require("fs").readFileSync(__filename, "utf8");
    ok("self-test guard is exact",
       src.indexOf('if (typeof module !== "undefined" && require.main === module) {') > 0);
    ok("no script-closing sequence", src.toLowerCase().indexOf("</scr" + "ipt") < 0);
    ok("no raw control bytes", !/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(src));
    ok("no raw BOM", src.indexOf("\uFEFF") < 0);
  })();

  if (mdF.length) { console.log("\nFAILURES (" + mdF.length + "):"); mdF.forEach(function (f) { console.log("  FAIL  " + f); }); }
  console.log((mdFail === 0 ? "PASS" : "FAIL") + " — " + mdPass + "/" + (mdPass + mdFail) + " assertions passed");
  if (mdFail) process.exit(1);
}
