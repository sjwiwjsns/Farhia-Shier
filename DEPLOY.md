# Deploying MusaGPT to Netlify

The app is one static file (`musagpt/index.html`) plus an optional serverless
function (`netlify/functions/chat.js`). `netlify.toml` publishes `musagpt/` as
the site root, so your site serves the app at `/`.

## Option 1 — drag & drop (fastest, no GitHub needed)

1. Sign up / log in at https://app.netlify.com (email works; no GitHub required).
2. Go to https://app.netlify.com/drop and drag the `musagpt` folder onto the page.
3. Done — your site is live at `https://<something>.netlify.app`.

This deploys the app only (no serverless function): visitors use the free
local core, or paste their own API key in ⚙ Settings.

## Option 2 — Git-linked deploy (auto-deploys on push, enables the key proxy)

1. In Netlify: **Add new site → Import an existing project → GitHub** and pick
   `sjwiwjsns/Farhia-Shier`. The build settings come from `netlify.toml`
   automatically (publish `musagpt`, no build command).
2. (Optional, recommended) **Site configuration → Environment variables**, add
   any of these — each unlocks its models for all visitors, no key pasting:
   - `ANTHROPIC_API_KEY` — Claude Haiku 4.5 / Fable 5
   - `OPENAI_API_KEY` — GPT-4o-mini / GPT-5 family
   - `DEEPSEEK_API_KEY` — DeepSeek V3 / R1
   - `GOOGLE_API_KEY` (or `GEMINI_API_KEY`) — Gemini 2.5 Flash/Pro, 2.0 Flash
3. Deploy. The app auto-detects the function at `/api/chat` and shows
   "site key" models in ⚙ Settings — visitors never see or paste a key.

## Option 3 — Netlify CLI (no GitHub, but full function support)

```bash
npm i -g netlify-cli
netlify login                # opens a browser
netlify deploy --prod        # run from the repo root; uses netlify.toml
netlify env:set OPENAI_API_KEY sk-...   # optional, enables site-key mode
```

## Notes

- **Never put an API key in the code or repo** — the settings screen and this
  proxy exist precisely so keys stay out of the published site.
- With env vars set, **visitors spend your credits**. Keep a spend limit on
  the provider account, and consider adding auth/rate limiting to
  `netlify/functions/chat.js` before sharing the link widely. The function
  already enforces a model allowlist and message/token caps.
- Model priority in the app: your own pasted key → site key (proxy) → free
  local core. GitHub Pages deploys keep working unchanged (they just have no
  `/api/chat`, so the proxy mode never activates there).
