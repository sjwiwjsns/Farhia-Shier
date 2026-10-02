# Handoff

Pacific Afterglow is plain JavaScript on Three.js 0.180, bundled with esbuild. There is
no backend. `npm ci && npm run build && npm start`, then open http://localhost:4173.
Rebuild `dist/game.js` after editing anything in `src/`; never edit the bundle.

## Source map

| File | What it does |
| --- | --- |
| `src/main.js` | Boot, loading steps, UI wiring, game state, checkpoints, effects emission, the frame loop, and the `window.__pacific` test hooks. |
| `src/core/pipeline.js` | Renderer, quality tiers, EffectComposer chain (render → GTAO → bloom → output → grade), lens flare and dynamic resolution. |
| `src/core/glsl.js` | Shared GLSL: noise, anti-aliased band helpers, and the sky model (Preetham + clouds + stars) used by the sky, the lighting probe and the ocean. |
| `src/core/materials.js` | `proceduralMaterial()` injects fragment code into MeshStandardMaterial at fixed points (colour, roughness, metalness, normal, emissive) and adds world-space varyings. |
| `src/core/rng.js` | Seeded random numbers, so the city is the same on every visit. |
| `src/world/layout.js` | The city plan: road grid, lanes, blocks, pier, bounds, route, surface and height queries, district and street names. |
| `src/world/atmosphere.js` | Time of day, sun and moon, light colours, fog (it replaces three's fog chunks), exposure, sky dome and the image-based lighting probe. |
| `src/world/ground.js` | Road shader, sidewalks and lots, beach sand, terrain heightfield, edge barriers. |
| `src/world/buildings.js` | Block layout, building massing, the facade shader, tile roofs, rooftop details, tower crowns, beacons, hill houses, neon signs. |
| `src/world/coast.js` | Ocean shader on a three `Reflector`, the pier, Ferris wheel, lifeguard towers and umbrellas. |
| `src/world/vegetation.js` | Palms (alpha-tested fronds with wind sway and back-light) and leaf-card trees. |
| `src/world/props.js` | Street lamps, light pools and cones, traffic signals (`signalState`), street furniture, billboards, hillside sign. |
| `src/vehicles/carModel.js` | Lofted car bodies for five types, wheels, lights, shared materials. |
| `src/vehicles/player.js` | Player handling, gearbox, collisions, suspension, headlights. |
| `src/vehicles/traffic.js` | Instanced AI traffic: lanes, signals, turns, following, player collisions. |
| `src/fx/particles.js` | Smoke, dust, sparks and flames, and skid marks. |
| `src/camera.js`, `src/hud.js`, `src/audio.js`, `src/input.js` | Cameras, HUD and radar, synthesized audio, keyboard/touch/gamepad input. |

## Conventions and gotchas

- Cars face local −Z. Heading 0 drives north (−Z); positive heading turns left.
  Traffic keeps right; lane offsets are in `LANES`.
- Any new lit material is patched automatically by `patchSceneMaterials()` so it gets the
  atmospheric fog uniforms. Give materials with a custom `onBeforeCompile` a unique
  `customProgramCacheKey`, or three may reuse the wrong shader program.
- In procedural shaders, take every `fwidth()` before any branch or early return, and pass
  per-instance values as `flat` varyings. Interpolated "constants" pick up per-pixel
  rounding error that the hash functions amplify into speckle.
- The lighting probe sky leaves out the sun disc and clamps the glow around it. The sun is
  already a shadow-casting light; baking it into the probe would wash every shadow out.
- Objects with `userData.noAO` are skipped by the ambient occlusion pass. Objects on
  layer 1 (particles, light pools, small props) are skipped by ocean reflections.

## Test hooks

`window.__pacific` exposes `getState()`, `step(seconds, controls)` to advance the
simulation without rendering, `teleport(x, z, heading)`, `setTime(hours)`,
`setQuality(name)`, `camera(index)`, `traffic()` and `debug` (scene, renderer, atmosphere,
pipeline, camera rig).

## Validation performed

Build, plus headless Chromium (SwiftShader) runs covering: startup on every quality tier;
screenshots at golden hour, blue hour, midnight, dawn and noon; acceleration, gear
changes, top speed, nitro, braking, steering, handbrake drift, building collisions,
driving onto and along the pier, the sea boundary, reset to road, traffic movement and
collisions, a complete time trial with the result dialog, the pause menu, time-of-day and
quality switches, and no runtime errors. Frame rate could not be measured in that
software renderer; check it on real hardware.
