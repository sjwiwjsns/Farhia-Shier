---
name: verify
description: Build/launch/drive recipe for verifying static pages in this repo (currently musagpt/index.html) in headless Chromium.
---

# Verifying this repo's static apps

Static site, no build step. MusaGPT (v3) is a Grok-style shell: left sidebar (chat history), centered hero on empty chats, breaking ticker, slide-over wire panel.

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

## v3 flows worth driving

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
