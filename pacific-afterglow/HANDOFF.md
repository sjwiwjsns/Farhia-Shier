# Handoff for Claude

This is the complete source of Pacific Afterglow, a browser driving prototype using plain JavaScript and Three.js. Continue developing this project from these files.

## Files
- `main.js`: city generation, lighting, vehicles, driving physics, traffic, collisions, cameras, checkpoints, audio, input and HUD updates.
- `dist/index.html`: game interface and menus.
- `dist/style.css`: desktop and mobile interface styling.
- `dist/favicon.svg`: icon.
- `dist/game.js`: compiled bundle; regenerate it rather than editing it.
- `package.json` and `package-lock.json`: exact build dependencies.

## Run
Requires Node.js/npm and Python 3 available as `python`. Run `npm ci`, `npm run build`, then `npm start`. Open http://localhost:4173. Alternatively serve `dist/` using any static web server. Do not open index.html directly with a file URL.

When reconstructing from the plain-text export, create each file at its labeled path, then run `npm install` to generate the lockfile and install dependencies, followed by `npm run build` and `npm start`.

## Current scope
Includes a procedural coastal city, arcade car handling, AI traffic, nitro, drifting, simple collision response, three camera views, free roam, an eight-checkpoint time trial, minimap, touch controls and optional synthesized engine sound. Best times and graphics preferences are device-local. It is an original prototype, not GTA V or a complete AAA game.

## Dependencies and hosting
The game is static and has no backend, API keys, account requirement or platform-specific runtime dependency. Three.js 0.180.0 and esbuild 0.25.10 are pinned. Google Fonts is optional; system fonts are fallbacks. The original hosting identity and Git history are deliberately omitted for portability.

## Validation already performed
JavaScript build and syntax checks; browser checks for startup, keyboard acceleration, steering, pause/resume, camera switching, map expansion, checkpoint progress, race completion, and mobile layout. Race completion was also exercised using temporary test-only simulation hooks; those hooks are not in this project.
