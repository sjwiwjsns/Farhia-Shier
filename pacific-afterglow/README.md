# Pacific Afterglow

An original browser driving prototype inspired by the freedom of coastal open-world games. It is not a full GTA V recreation.

## Play

Serve `dist/` with any static web server. For local development:

```sh
npm install
npm run build
npm start
```

Visit http://localhost:4173.

- WASD / arrow keys: accelerate, steer, brake and reverse
- Space: handbrake
- Shift: nitro
- C: cycle chase, wide chase and hood cameras
- R: recover car (restarts the run in time trial)
- M: expand the city map
- Escape / P: pause
- Touch controls appear on touch devices

The game includes a procedural coastal city, traffic, collision handling, eight-checkpoint time trial, local personal best, three paint colors, optional synthesized engine sound, and graphics settings. All geometry, materials and city layouts are original procedural assets. Three.js is MIT licensed. Barlow typefaces are served by Google Fonts with system font fallbacks.

## Scope and requirements

Requires WebGL 2 and a current browser. Cinematic mode uses shadows and bloom; Performance mode reduces graphics costs. This prototype does not contain GTA V's assets, map, story, missions, characters, on-foot gameplay, multiplayer or photorealistic AAA graphics. Save data stays in the current browser.

`main.js` is the source; `dist/game.js` is its bundled output. `dist/index.html`, `dist/style.css` and `dist/favicon.svg` are authored static files.
