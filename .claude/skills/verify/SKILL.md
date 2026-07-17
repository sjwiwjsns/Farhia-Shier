---
name: verify
description: Build/launch/drive recipe for verifying static pages in this repo (currently musagpt/index.html) in headless Chromium.
---

# Verifying this repo's static apps

This repo is a static GitHub Pages site (deployed by `.github/workflows/static.yml`, whole repo root). Apps are self-contained HTML files — no build step.

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

## MusaGPT flows worth driving

- Welcome message streams on load — wait for `.msg.ai .bubble` text > 100 chars AND no `.cursor` child AND not `.classList.contains("typing")`. **Gotcha:** the typing-dots bubble appears first with empty innerText; a naive "bubble exists" wait resolves too early.
- Ticker: `#ticker .titem` count > 0 (items are duplicated 2x for seamless loop); feed: `#feedList .fitem` ≥ 5.
- Chat: fill `#input`, press Enter. Local-core replies stream ~1–3s. Good probes: "what's breaking?" (rundown with bullets), `(1200*7)/3` (expect 2800), "my name is X" (memory), empty submit (blocked), `<script>` injection (must render escaped).
- Live mode: Settings → save a bogus `sk-ant-…` key → send a message → must show "Live mode faceplanted … falling back" and answer from local core. The blocked fetch to api.anthropic.com logs one console error — expected in that probe only.
- Mobile (390×844): `#feedToggle` opens the `#rail` drawer (`rail.classList.contains("open")`).

Collect `page.on("pageerror")` and `console` type=error throughout; both must be empty (except the deliberate live-mode probe noise).
