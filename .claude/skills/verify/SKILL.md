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

## Guardrail posture (deliberate, do not "restore")

Investment-advice refusals and boilerplate disclaimers were **removed on request** — this is a private single-user tool. `drive-crypto.js` now asserts the *inverse*: the prompt invites a real read, the portfolio informs reasoning, the safety section reads "private terminal, not a published product". What stayed, and is still asserted: never quote a price from memory, never invent a headline, and the whole simulated-story failsafe system.

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
