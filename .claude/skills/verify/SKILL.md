---
name: verify
description: Build/launch/drive recipe for verifying static pages in this repo (currently musagpt/index.html) in headless Chromium.
---

# Verifying this repo's static apps

This repo is a static GitHub Pages site. Apps are self-contained HTML files — no build step.

## Launch

```bash
# serve repo root
python3 -m http.server 8931 --bind 127.0.0.1 &
# app URL: http://127.0.0.1:8931/musagpt/
```

## Drive (headless Chromium)

Playwright browsers are pre-installed; the npm module is not. Install `playwright-core` in the scratchpad (NOT the repo) and launch with the explicit binary:

```js
const { chromium } = require("playwright-core");
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", headless: true });
```
Do NOT name a test-harness `const URL` — it shadows the global `URL` constructor the app relies on and throws "URL is not a constructor".

## MusaGPT flows worth driving

- **Real news feed.** On load the app fetches live headlines: GDELT (`api.gdeltproject.org`) primary → Reddit news JSON fallback → a clearly-labeled simulated feed only when both are unreachable. `#srcTag` reports the state: `LIVE · GDELT`, `LIVE · REDDIT`, or `SIMULATED FALLBACK` (`.live` class only on the two real modes). In a sandbox that blocks outbound, it lands on `SIMULATED FALLBACK` — to test the real path, `page.route("**/api.gdeltproject.org/**", ...)` and fulfill with a stub `{articles:[{title,seendate:"YYYYMMDDTHHMMSSZ",url,domain,language}]}`.
- Untrusted feed data: titles are `esc()`-escaped; URLs pass `safeUrl()` (http/https only — a `javascript:` url renders the item as an unlinked `<div>`). Categorization is keyword-based (`CAT_RULES`).
- Welcome message streams on load — wait for `.msg.ai .bubble` text > 120 chars AND no `.cursor` child AND not `.typing`. (The typing-dots bubble appears first with empty text; a naive "bubble exists" wait resolves too early.)
- Ticker/feed render **incrementally**: same story set patches ages in place (guarded by `tickerSig`/`feedSig`), only a changed set rebuilds innerHTML — so the marquee doesn't restart every 20s.
- Chat: fill `#input`, press Enter. Local-core replies stream ~1–3s. Probes: "what is breaking right now" (rundown), `(1200*7)/3` → 2800, "my name is X" (memory), "is this news real?" (honest source answer), empty submit (blocked), `<script>` input (escaped). Persona is **playfully sarcastic but warm** ("favorite coworker", not bully) — light teasing, never demeaning.
- **Model picker** (`#modelSel`): paste an Anthropic key (`sk-ant-…`) → Claude Haiku 4.5, Claude Fable 5. Paste an OpenAI key → GPT-4o-mini, GPT-5, GPT-5.2, GPT-5.5, GPT-5.6. Provider auto-detected from key prefix; `#modelChip` + the message `.mode` badge reflect the choice. Request shapes: GPT-5* send `max_completion_tokens`, gpt-4o-mini sends `max_tokens`; claude-fable-5 sends `output_config.effort:"low"` + no `thinking` param.
- Live mode failure → message shows "Live mode hiccuped (`…`). Falling back to my trusty **local core**…" and answers locally; the error banner is kept OUT of `mem.history` so it isn't replayed to the model. Capture request bodies with `page.route(... r.request().postData())` then `r.abort()`.
- Mobile (390×844): `#feedToggle` opens the `#rail` drawer.

Collect `page.on("pageerror")` and `console` type=error; both must be empty except the deliberate live-mode probe network error.
