---
name: verify
description: Build/launch/drive recipe for verifying static pages in this repo (currently musagpt/index.html) in headless Chromium.
---

# Verifying this repo's static apps

Static site, no build step. MusaGPT (v5) is a Grok-style shell: left sidebar (chat history), centered hero on empty chats, breaking ticker, slide-over wire panel.

## Launch

```bash
python3 -m http.server 8931 --bind 127.0.0.1 --directory /home/user/Farhia-Shier &
# app: http://127.0.0.1:8931/musagpt/
```
Servers/background jobs are reaped between Bash invocations here — start the server and run the driver **in the same command**, or re-check with curl first.

## Drive (headless Chromium)

`playwright-core` is installed in the scratchpad (not the repo); launch with `executablePath: "/opt/pw-browsers/chromium"`. Never name a harness variable `URL` (shadows the global constructor the app uses).

## News feed

Three live sources fetched **in parallel** and merged: GDELT + Reddit + Hacker News → labeled simulated fallback only if all fail. `#srcTag` shows `LIVE · GDELT + REDDIT + HN` (whichever answered) or `SIMULATED FALLBACK`. Sandbox blocks the real feeds — stub all three:
- `**/api.gdeltproject.org/**` → `{articles:[{title,seendate:"YYYYMMDDTHHMMSSZ",url,domain,language}]}`
- `**/www.reddit.com/**` → `{data:{children:[{data:{title,created_utc,url_overridden_by_dest,domain,subreddit,permalink}}]}}`
- `**/hacker-news.firebaseio.com/v0/newstories.json*` → `[901,902]`, then `**/v0/item/901.json*` → `{id,title,time,url}`

**Clustering:** identical/similar titles from different outlets collapse into ONE feed row via `sigOf()` (sorted top-5 long tokens); `item.sources[]` accumulates and renders as a `◈ N` badge. To test, feed the same headline through two stubs with different domains.

**Urgency → BREAKING:** `urgencyScore()` = urgent wording (+3) + big numbers (+1) + 2×(sources−1) + freshness (+1); `sevFor()` returns BREAKING at ≥4 within 25 min, else JUST IN / DEVELOPING / UPDATE. BREAKING sorts to the top of ticker and feed (`wireOrder`). Feed URLs pass `safeUrl()` (http/https only).

## Simulated-fallback failsafes (drive with all three feeds aborted)

Route all three feeds to `r.abort("failed")`, wait for `srcMode === "sim"`, then assert the fiction can't pass for news. `scratchpad/drive-sim.js` covers all of it (67 assertions); the invariants:

- `sevFor()` returns **`"DEMO"`** for anything `isSim()` — never BREAKING/JUST IN. `isHot()` and `breakingNow()` exclude sim; `wireOrder` sorts sim *below* everything real.
- `catClass(it)` is the **single** source of the severity-chip class — both the full render and the cheap in-place repaint call it, so labels can't drift. Always re-assert after `onFeedChanged()`.
- Cluster keys are namespaced `sim::` so a real story can never merge into a simulated one.
- Banner: `#brkBanner.simmode`, `#brkWord` reads SIMULATED, `#srcTag.sim`, `document.title` prefixed, `#wireHeading` reads DEMO WIRE, `#wirePanel.simmode`.
- Every feed row gets `.simtag` + `.simrow` and drops its source/◈/👁 badges; `headlineLine()` prefixes `⚠ SIMULATED · CAT`.
- `fireNotification()` returns early for sim — nothing simulated ever reaches the OS.
- "what's breaking?" in sim mode returns a **refusal-style answer** ("Nothing — and I want to be very clear about why"), not a rundown. Briefings get a top-of-message warning.
- `personaPrompt()` tags **every** wire line `[SIMULATED — NOT REAL…]` and swaps `## The wire you are working from` for the CRITICAL block (forbids elaboration, orders correction).
- Export prepends the ⚠ header when `srcMode==="sim" || sawSimThisSession` (sticky — set once, never cleared, since the transcript keeps demo lines after recovery). `copyPayload()` appends a disclaimer when text matches `SIM_TEXT_RE`.
- `#simToggle` sets `noSim` (persisted `musagpt_nosim`): purges sim items, empties the wire honestly, survives reload, and reseeds when toggled back. `simSpawnLoop(fromTimer)` re-checks `noSim`/`srcMode` every tick and `simLoopArmed` prevents double loops.
- Recovery: one live feed answering purges all sim items and restores the red banner/LIVE WIRE heading/clean title.

## THE DESK (`#deckBtn` / sidebar / Ctrl-D / Escape closes; `scratchpad/drive-desk.js`, 120 assertions)

Five boards in `#deck`, tabs in `#dkTabs[data-b]`, panels `#b-<name>`. Shared rule: **chrome never depends on the network, data always does.** Both maps are drawn from run-length-encoded land masks compiled into the file (`WORLD_MASK` 160×74, `US_MASK` 132×62 — regenerate with `scratchpad/mkmask.py` / `mkus.py`), so there is no tile server to stub and no "map failed to load" state.

- **Marker clicks use nearest-marker picking** (`installMapPicker`), not DOM hit-testing: Gaza and Beirut are ~2.7 units apart on a 320-unit map, so hit circles overlapped and whichever painted last won. `.mk{pointer-events:none}` — Playwright `.click()` on a marker will NOT work; click the computed pixel coords (see `clickMarker()` in the driver).
- **War map**: `warPoints()` = wire stories that are conflict-shaped (`WAR_KIND`) AND placeable (`placeOf`). Geocoder ranking is **specific-locality > earliest-in-headline > longest-name**; bare "Georgia" resolves to nothing on purpose. Unplaceable stories are counted, never guessed onto the map. Labels de-conflict greedily.
  - **Regex plural trap** (bit us twice): `\bair ?strike\b` does not match "air strikes" — the `\b` fails against the following `s`. Every noun in `WAR_KIND` needs `s?` or `\w*`.
- **Flock cams**: live Overpass query (3 mirrors) for `man_made=surveillance` + `surveillance:type~ALPR`. **No seeded dataset** — if all mirrors fail the map is empty and says "empty on purpose". State attribution prefers OSM's `addr:state`; geometric fallback is bbox-then-centroid (centroid alone puts Chicago in Indiana) and untagged rows are labelled "inferred" — Memphis is a genuine AR/TN coin-flip.
- **Prayer**: `prayerTimes()` from solar geometry, Diyanet (Fajr 18°, Isha 17°), Tema İstanbul/Başakşehir, fixed UTC+3 via `istanbulNow()`. **Verified against an independent NOAA implementation** (`scratchpad/sun.py`) on 5 dates — max drift 1 min. Don't "fix" these against remembered clock times: Istanbul is at 28.8°E on the 45°E meridian, so everything runs ~65 min later than solar noon. Reminders never `await` `Notification.requestPermission()` (a stalled prompt used to wedge the toggle).
- **Al Jazeera Arabic**: RSS via the `CORS_RELAYS` chain → translation ladder MyMemory → user's model (`oneShot`) → local glossary. The glossary result is labelled **"not a translation"**, never presented as one.
- **Senate 2026**: `SENATE_2026` = 33 Class II + 2 specials, 13D/22R, 8 open. Structure is drawn; **no poll numbers anywhere** and the board states why (X.com has no keyless CORS-open API). Live signal is wire coverage + Reddit chatter — assert it never renders a margin/probability.
- `deskSummary()` feeds live board state into `personaPrompt()` (now ~7.5k chars); chat intents cover prayer/qibla/war map/flock/AJ/senate/desk.
- **Sim-mode carryover**: `drive-sim.js` §6b asserts the desk can't launder demo stories — war markers amber, no BREAKING, rows badged.

## Crypto mode + projections (`scratchpad/drive-crypto.js`, 112 assertions)

- **Header toggle** `#cryptoModeTop` is the largest control in the topbar by design and doubles as a live BTC ticker (`#btcBtnLabel` / `#btcBtnPx`) once the mode is on — it shows `no price` rather than a remembered one. Below 400px `#wireBtn`/`#deckBtn` drop their `.lbl` text to icons so it keeps its size; assert the topbar does not overflow at 320px.
- **Price chain**: CoinGecko → CoinCap → Binance, normalised to `{id,sym,name,price,mcap,vol,ch1,ch24,ch7,spark[],rank}`. Stub each and abort the one above to walk the chain. Total failure must show "All three price sources failed" and **zero rows** — there is no cached or seeded price, ever.
- Auxiliary panels (global / Fear&Greed / mempool fees / hashrate / block height / DefiLlama TVL) each fail independently; every one has its own honest empty state.
- **Crypto mode** (`#cryptoModeBtn`, `#cryptoModeTop`, persisted `musagpt_cmode`): weaves a price strip into the ticker *after* the news (BREAKING outranks a price), pulls CoinDesk/Cointelegraph/Decrypt onto the wire via the relay chain, arms alerts. The ticker renders the strip **twice** for a seamless marquee — only inspect the first half when asserting order.
- `tickerSig` includes the price digest, or the cheap in-place path skips the repaint and prices freeze.
- **Portfolio / alerts**: localStorage only. Portfolio 24h change is **value-weighted** (each holding's own 24h move implies yesterday's value) — not the mean of the percentages; 0.5 BTC +2.31% and 10 ETH −1.42% gives **+0.41%**, not +0.45%. A user-armed alert fires even on an empty chat (unlike unsolicited news reactions, which stay suppressed).
- **Projections**: `projVolume` (least-squares over six 10-min buckets, ±1 SE band), `projMomentum` (outlets ÷ minutes), `projDesks` (half-hour share shift), `projVol` (log-return σ, √t scaled), `projCryptoNews`. Every panel prints `Method:` — assert all five. The cone must stay **symmetric around spot** (`hi/spot × lo/spot === 1`) and the 7d band ≈ √7× the 24h band.
- **Test fixture trap**: headlines built from a shared template all collapse into one row via `sigOf()`. Volume/momentum fixtures need genuinely distinct vocabulary.
- **Prompt** (~10.7k chars) forbids: investment advice of any kind, prices from memory, ranking by "potential", volunteering the portfolio, and "will" instead of "projected".

### Two CSS traps this board exposed
- **Inline `style="grid-template-columns:…"` beats a media query.** Use classes (`.bgrid.twocol`, `.bcard.wide`) or the board never stacks on mobile.
- **Grid children default to `min-width:auto`**, so `.ctable{min-width:440px}` blew its card to 486px inside a 390px viewport — clipped invisibly by `body{overflow:hidden}`. `.bgrid > *{min-width:0}` is what lets `overflow-x:auto` actually scroll. Always assert card width ≤ viewport, not just "no page scroll".

## Text to speech (`scratchpad/drive-tts.js`, 75 assertions)

Browser `SpeechSynthesis` — local, keyless, offline. Headless Chromium has **no real synthesiser**, so the driver installs a recording shim via `addInitScript` before app code runs and asserts on what was *asked* to be spoken. Reuse `SHIM` in that file rather than trying to hear anything.

- `speakable(md)` strips markdown, bullets, emoji, code fences and bare URLs. **The `⚠ SIMULATED` marker is converted to the spoken words "Warning: simulated"** before emoji stripping — audio has no badges, so the warning has to be said. Assert this whenever the sanitiser changes.
- `chunkSpeech()` splits to ≤180 chars because **Chrome silently truncates an utterance after ~15s**; long briefings would lose their second half. Chunks are packed to sentence boundaries and re-joined losslessly.
- Voices arrive **asynchronously** — `getVoices()` is empty on first call, the list comes on `voiceschanged`. The picker renders twice; the shim's `__tts.releaseVoices()` simulates the event. `pickVoice()` prefers a `localService` (offline) voice.
- `tts.gen` invalidates in-flight `onend` callbacks so a cancelled queue can't resurrect itself; `speechSynthesis.cancel()` raises `interrupted`/`canceled` on `onerror`, which are **not** failures.
- Stop paths that must all work: the `speak`/`stop` button per message, `#ttsBtn` while speaking (stops without disabling voice), sending a new message, `beforeunload`/`pagehide`, and the chat intent "stop talking".
- `personaPrompt()` gains a speech-formatting paragraph **only while `tts.on`** — assert it disappears when off.
- Unsupported browser: `#ttsBtn` disabled, `.speakbtn` removed entirely, picker says "not supported", `speak()` returns `false`, `stopSpeaking()` is a no-op. `syncTtsUi()` calls `renderVoicePicker()` because `loadVoices()` bails before it.
- **Trap:** the bubble for the reply being generated is already in the DOM and empty, so "read that again" must filter to bubbles with real text or it reads nothing.

## musa-core-3 (`scratchpad/drive-core3.js`, 48 assertions)

The local model is now ten classical-NLP modules living in `tools/core/*.js`, merged into the app by `tools/merge-core.py`. **Fix bugs in `tools/core/`, never in the merged copy inside index.html** — the next merge reverts anything edited in place. Each module has its own node self-test (`node tools/core/qa.js`); those tests are the spec.

- Merge resolves collisions: three modules independently defined `mcStem`, two defined `mcCosine`/`mcSentences`. Canonical owners keep the bare name; everyone else gets a module prefix (`mcQaTokenize`, `mcClStem`…). **The app's copy uses the renamed identifiers**, so a patch anchored on module source won't match the app.
- `core3*` bridge functions in index.html adapt the `mc*` primitives to FEED; `core3Analyse()` caches on a feed signature because clustering is O(n²).
- **Intent-ordering trap:** the factoid-QA intent fires on `^(who|where|when|how many…)`, which swallowed "when is the next prayer". `CORE_QA_NOT` excludes vocabulary owned by the board intents — extend it when adding a board.
- **Follow-up trap:** pronoun resolution rewrote "read **that** again" into an entity name and broke the voice intent. `APP_CMD` skips resolution for commands aimed at the app.
- `\bsummar\b` never matches "summarize" — the word continues past the boundary. Use `\w*`.
- Driver `ask()` helpers must not require a minimum reply length: calculator answers are 2 characters ("12").

## Timeline board + command palette (`scratchpad/drive-tl.js`)

Four more modules joined the core: `imganalyse.js`, `charts.js`, `palette.js`, `timeline.js`. All four kept strict prefixes (`mcImg` / `mcCh` / `mcPal` / `mcTl`) and collide with nothing, so they need no `RENAME` entry — just an `ORDER` line.

- **`topnames()` in merge-core.py used to miss `async function` and `class`.** That was a live hole: the collision check is the only thing between two modules defining the same async name and a silent shadowing bug in the tab. It now matches both.
- **⌘K was already taken** by `newChat` since v2. The palette is ⌘⇧P / ⌘/ . A driver must assert *both* that the palette opens on its own chord and that Ctrl-K still starts a new chat — taking a bound key is the easy regression here.
- **Simulated stories are filtered at the top of `renderTimeline()`, not near the renderer.** A chart is exactly the thing that launders a fake headline into a fact, so the failsafe sits before any pixel is computed. `drive-tl.js` pushes a `sim:true` item onto FEED and asserts it reaches neither the charts nor the board HTML.
- **Fixture trap (again):** headlines built from one template collapse into a single cluster via `sigOf()` and the whole board renders one row. `drive-tl.js` uses ten genuinely distinct headlines, with a deliberate 20-minute hole for the gap detector and one deliberate near-copy pair for the diff.
- `mcChLine` takes **`xLabels`** (an array, of which it draws first/middle/last) — there is no `xFormat` callback. Charts are `viewBox`-only with no width/height attributes; the host sizes them with CSS (`.chartbox svg{width:100%;height:auto}`).
- `mcTlEntityTimeline` matches on word boundaries via `\p{L}\p{N}`, so **"Gaza" deliberately does not match "Gazan"** — demonyms swamp an entity timeline otherwise. Assert the negative.
- Every chart is checked for `NaN`/`undefined`/exponential notation in its emitted SVG. `mcChN` is the single choke point that guarantees it: NaN degrades to `0`, but **an infinity clamps to ±1e6** rather than collapsing to the origin, because it still carries a direction. Those two cases need separate tests — a combined `isFinite` guard silently swallows the second.
- **`mcPalSearch` returns `{id, score, snippet, hits}`** — it builds the snippet itself, already escaped and `<mark>`ed via the same path as `mcPalHighlight`. There is no `doc`/`ranges` field; don't re-derive the snippet.
- **Near-duplicate fixtures must survive `sigOf()` first.** It clusters on the 5 alphabetically-first content words, so two rewrites of one headline usually merge into a single item with two sources — and the panel correctly finds nothing. To exercise the diff, the differing word has to land *inside* that alphabetical window ("Ceasefire talks in Doha…" vs "Negotiations in Doha…"). This panel exists to catch what clustering missed, not to re-find what it caught.
- **`sharpness` is variance of Laplacian — unbounded and hugely skewed** (flat 0, smooth gradient ~5, 6px-blurred checkerboard ~65, crisp checkerboard ~29000, noise ~56000). The original `< 40` cutoff sat so close to zero it labelled a visibly blurred picture "sharp". `imgSharpLabel()` now bands it. Any threshold on this statistic needs fixtures rendered through a real canvas, not intuition.
- The BM25 chat index is rebuilt only when `mem.history` grows (`cmdkState.idxAt`); it runs on every keystroke otherwise.
- Chat snippets in the palette are hostile text — assert `<img src=x onerror=...>` is escaped, no live `img` lands in the list, and nothing executes.

## MusaGPT ULTRA / CORE 5 (renamed from MusaGPT v5 / musa-core-3)

The brand is **MusaGPT ULTRA**, the local model is **CORE 5**, and every `core3*` bridge symbol is now `core5*`. Three driver assertions were genuinely coupled to the old names and had to move with it — `drive-core3` called `core3Stats` through `page.evaluate` and matched `/musa-core-3/` in prompt text; `drive-crypto` asserted on both the document title and the `.hero-mark .herover` badge. Grep drivers for the old strings before assuming a rename is cosmetic.

`inject-core.py`'s end marker is the bridge banner, which the rename also moved — it silently failed to find the core block until updated. Renaming a marker string breaks the tool that depends on it.

### Sixteen boards, gated on `ultraHas()`

Six ULTRA boards (SEARCH, GRAPH, ALERTS, SIGNALS, DATA, MODEL) are wired ahead of their CORE 5 modules. `ultraHas("mcFoo",…)` checks `typeof window[name] === "function"`; a missing module renders `ultraPending()` — "isn't in this build yet" — rather than a panel that looks stuck loading. **A `<form>` with no submit handler navigates on Enter**, which in a single-file app is a full reload that drops the conversation and the wire; every new board form must `preventDefault`.

Currently live: **DATA** (table.js), **SEARCH**/**ALERTS** (query.js), **GRAPH** (graph.js), **SIGNALS** indicators (ta.js). Still gated: the SIGNALS forecast half (timeseries.js undelivered) and MODEL (embed.js undelivered).

### ta.js semantics
- **Every indicator nulls its warm-up** rather than returning 0. The board strips leading nulls before charting so a line starts where the indicator does; feeding zeros would draw a run-up from the axis that never happened.
- RSI uses **Wilder's smoothing (RMA)**, not a plain SMA of gains — the single most mis-implemented indicator. The expected values in the suite were reproduced from an independent implementation of Wilder's recurrence, not read off this one.
- **Backtest costs default to non-zero** (`feeBps` 6 + `slippageBps` 4). There is no `cost` option; a costless run has to be asked for explicitly with `{feeBps:0, slippageBps:0}`.
- `mcTaIchimoku(...).future` is `{senkouA, senkouB}` — the cloud beyond the last bar, deliberately kept out of the in-sample arrays so it cannot imply knowledge of unseen prices.
- `mcTaPatterns` returns **one entry per bar**, each a list of hits carrying a `confidence`.

**Every `ultraHas()` gate so far has named a function that does not exist** — `mcQyEval` (real: `mcQyEvaluate`), `mcGrBuild` (real: `mcGrFromDocuments`), `mcGrShortestPath` (real: `mcGrBfsPath`). A wrong name fails closed and looks exactly like "module not merged yet", so it is invisible. Check gates with `grep '^function <name>'` before believing a board is still pending.

### graph.js semantics that are easy to get backwards
- `g.nodes()`/`g.edges()` are **methods**, not properties. Results are wrapped: `mcGrPageRank(...).scores`, `mcGrLouvain(...).groups` + `.communities` + `.modularity`.
- **`mcGrDijkstra` inverts weights by default** (`invertWeights !== false`). Edge weight is *affinity* — two names co-occurring ten times are **closer** — so a weight-10 edge is distance 0.1 and the direct route wins. Pass `{invertWeights:false}` for raw cost. Reading one as the other silently returns the wrong path.
- **`mcGrFromDocuments` takes pre-extracted entities** (`doc.entities`/`.ents`/`.names`), never raw text — NER stays the host's job, and the app feeds it `mcEntities()` output filtered at conf >= 0.6.
- Node ids are **case-folded**; the first spelling survives as `node(id).label`. Address nodes by the folded id.
- `mcGrRenderModel` deliberately emits **unescaped** labels so the renderer escapes exactly once. The board's SVG builder calls `esc()` on every label — do not "fix" the model to escape too, or labels double-encode.

**`ultraHas()` names must be real exports.** The SEARCH gate asked for `mcQyEval`, which does not exist — the module exports `mcQyEvaluate` — so the board would have stayed gated forever with the module present and nothing would have looked wrong. Check every gate name against `grep '^function <name>'`.

**Two field-shape mismatches between the app and query.js**, both silent:
- the wire's `sev` is a tier *label* (`"BREAKING"`, `"JUST IN"`), while the engine's `sev` field is numeric — `sev:>=3` matched nothing until `qySearchView()` mapped the tiers onto their ordering. Alerts run through the same view, or a `sev:` rule silently never fires.
- `src` holds the full domain (`reuters.com`), so `src:reuters` returns zero; `src:reuters*` is the form that works. The board placeholder advertised the broken one.

### CORE 5 third wave — delivery state

`table.js` (325 assertions) and `hash.js` (342) are merged and green. Held back as `.wip`: `graph.js` (no self-test block written, plus raw control bytes and a BOM inside a regex literal), `ta.js` (truncated mid-write at a `// __PART_THREE__` marker), `query.js` (23 failing assertions). Not delivered at all: stats, timeseries, geo, fuzzy, markdown, datetime, embed.

Traps these surfaced, all worth remembering:
- **Fabricated test vectors.** `hash.js` asserted a murmur3 value for a non-ASCII string that no published vector covers. The module was right and the expectation invented. Settled with an independent implementation validated against the five real vectors — build the oracle, don't pick a side.
- **Arithmetic in a fixture.** `table.js` grouped on `(bi%4, bi%250)` and expected 250 groups; `gcd(4,250)=2` makes 500 reachable by CRT. The code was right.
- **The template trap again.** `query.js` built ten "distinct stories" from one skeleton; the alert engine's near-duplicate filter collapsed nine of them, so a test claiming to exercise `maxPerBatch` was exercising similarity suppression instead. Feed fixtures need genuinely different sentences — this is now the third time this has bitten.
- **A self-defeating test.** `query.js` checks `src.indexOf("\uFEFF") < 0` using a *literal* BOM as the needle, so the needle guarantees the failure. Hygiene assertions about a file's own bytes must escape what they search for.
- `table.js` keeps its tests in a body function (like `calc.js`) rather than inside the guard, so fixture bytes there **do** reach index.html and must be escaped.

## Guardrail posture (deliberate, do not "restore")

Investment-advice refusals and boilerplate disclaimers were **removed on request** — this is a private single-user tool. `drive-crypto.js` now asserts the *inverse*: the prompt invites a real read, the portfolio informs reasoning, the safety section reads "private terminal, not a published product". What stayed, and is still asserted: never quote a price from memory, never invent a headline, and the whole simulated-story failsafe system.

## Images (`scratchpad/drive-img.js`, 29 assertions)

Three layers, all real: feed thumbnails, local canvas analysis, and provider vision.
- **Vision routing** — `modelSeesImages()` gates it. Claude / GPT-4o+5 / Gemini get the picture in their own shape (`source.base64` / `image_url` / `inline_data`); DeepSeek and the local core get an honest "text-only, I answered from the local read" instead of a silent text-only send. The site-key proxy forwards text only and says so.
- `mcImgAnalyse`/`mcImgExif`/`mcImgFmtBytes` are **optional** — guarded shims at the top of the image block mean a missing module degrades to "picture without measurements", never a ReferenceError. `imganalyse.js` now ships in the merged core, so the shims no longer fire; keep them anyway, and assert the real module is live (`phash` is 16 hex chars and *not* the `0000000000000000` empty-result sentinel) rather than assuming it.
- Attach paths: button, clipboard paste, drag-drop anywhere. Images are downscaled to 1568px and re-encoded (PNG if smaller than JPEG — a screenshot must not be JPEG'd) before upload.
- Feed art is parsed from `media:thumbnail`, `media:content`, `enclosure`, then an `<img>` inside `description`, in that order.

## Al Jazeera Arabic on the wire (`scratchpad/drive-aj.js`, 22 assertions)

Translated AJ headlines join the **main wire and the war map**, not just their own board.
- **Retention is per item**: `maxAgeFor(it)` gives translated copy `AJ_WINDOW` (5h) and everything else `HOUR`. Both `addItems` and `pruneFeed` must use it — a global HOUR drops translations before they land, because translating takes a pass per headline.
- **Only a real MT goes on the wire.** A key-term gloss is not a sentence; it stays on the board.
- **Dedupe precedence:** a `translated` item *replaces* an untranslated one with the same key rather than losing to it. AJ publishes the same URL on its Arabic and English feeds and whichever arrived first would otherwise win by accident.
- Fixture trap: stub the Arabic feed for `aljazeera.net` only — matching `/aljazeera/` also catches the English feed in `RSS_WIRES` and Arabic titles land on the wire raw.
- `WAR_KIND` needed `arm(y|ies)`, `seiz*`, `captur*` etc. — translated copy uses different vocabulary than English-desk copy, and "Sudanese army seized positions" was not conflict-shaped without them.

## Extra news fallbacks

`fetchWires()` pulls 6 newsroom RSS feeds (BBC/AJE/NPR/DW/France24/Sky) through `viaRelay()` — allorigins → codetabs → corsproxy, reordered by `relayHealth`. Stub `**/api.allorigins.win/**` and abort the others to exercise the chain; `liveSources` gains `"Newsrooms"`.

## Core flows worth driving

- **Hero/empty state**: `#chatarea.empty` on boot; hero + `#wireStrip` (`#wsSrc`, `#wsCount`) visible; first send removes `.empty`. No chat is saved until the first message (`localStorage.musagpt_chats` stays empty on boot).
- **History**: send → chat auto-titles in `#chatList`; Ctrl/Cmd+K = new chat; clicking an item restores its messages; hover ✕ deletes; `#clearHistory` wipes (confirm() dialog); chats survive reload.
- **Temporary chat**: `#tempChat` → `.tempnote` visible, messages never written to localStorage, chat absent from sidebar.
- **Chat**: probes — "What's breaking right now?" (rundown cites stubbed headline), `(1200*7)/3` → 2800, "my name is X", "is this news real?" (honest per srcMode), `<script>` input escaped. AI messages get a hover `copy` button. Wait for reply: last `.msg.ai .bubble` length > 30, no `.cursor`, not `.typing`.
- **Model pill** (`#modelPill` in composer): menu lists Musa Core always; live models when a key is pasted (Anthropic → Claude, OpenAI → GPT list) or a site proxy exists; picking `musa-core-1` forces local even with live available. `#modelPillName` short names: core / haiku 4.5 / fable 5 / 4o-mini / gpt-5.x.
- **Netlify proxy**: app probes GET `/api/chat` on boot; with a deploy-side key, `#modelChip` gains "site key" and POSTs go to `/api/chat {model,system,messages}` → `{text}`. Verify with a node server routing `/api/chat` through the real `netlify/functions/chat.js` handler with `global.fetch` mocked (scratchpad `proxy-dev.js` pattern). Request shapes: gpt-5* → `max_completion_tokens`; gpt-4o-mini → `max_tokens`; claude-fable-5 → `max_tokens:4096` + `output_config.effort:"low"`, no `thinking` param.
- **Wire panel controls** (`#wireBtn` opens `#wirePanel`): `#wireSearch` filters by text, `#fchips` category chips (ALL / BREAKING / desks) set `wireFilter.cat`, `#pauseWire` toggles `wirePaused` (stops polling + ticker animation), `#notifyBtn` requests Notification permission, `#watchInput`/`#watchAdd` manage `watchList` (persisted, renders `👁` badges on matching stories). Counter reads "N of M" while filtering.
  - **Regression trap:** these handlers re-render their own container, so the clicked node is detached by the time the document-level click handler runs. The handler guards with `if(!e.target.isConnected) return;` — without it, clicking a filter chip closes the whole panel. Always assert the panel is *still open* after chip/watch-tag clicks, and that a backdrop click (`mouse.click(400,400)`) still closes it.
- **Chat features**: `#briefBtn` / Ctrl-B / "give me a briefing" → structured digest (BREAKING section, per-desk lines, watchlist section); `#exportBtn` or "export this chat" → Markdown download (assert via `page.waitForEvent("download")`); `#regenBtn` re-runs the last user message replacing the previous reply (message count stays stable); chat commands `watch X` / `stop watching X` / `what am I watching`.
- **Panels**: `#sbToggle` opens `#sidebar` on ≤900px; Escape closes modal → model menu → wire panel → sidebar in that order.
- Live-mode failure shows "Live mode hiccuped … local core" and the error banner stays OUT of replayed history.

Collect `pageerror` + console errors — must be empty except deliberate live-mode probe network noise.
