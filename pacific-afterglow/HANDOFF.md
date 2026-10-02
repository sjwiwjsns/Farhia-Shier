# Handoff

Pacific Afterglow is plain JavaScript on Three.js 0.180, bundled with esbuild. There is
no backend. `npm ci && npm run build && npm start`, then open http://localhost:4173.
Rebuild `dist/game.js` after editing anything in `src/`; never edit the bundle.

## Source map

| File | What it does |
| --- | --- |
| `src/main.js` | Boot, loading steps, UI wiring (cars, radio, settings, map), game state, countdown and checkpoints, crime reporting, effects emission, the frame loop, and the `window.__pacific` test hooks. |
| `src/core/pipeline.js` | Renderer, quality tiers, EffectComposer chain (render → GTAO → sun shafts → bloom → output → grade), lens flare, motion blur, dynamic resolution. |
| `src/core/glsl.js` | Shared GLSL: noise, anti-aliased band helpers, and the sky model (Preetham + clouds + stars) used by the sky, the lighting probe and the ocean. |
| `src/core/materials.js` | `proceduralMaterial()` injects fragment code into MeshStandardMaterial at fixed points (colour, roughness, metalness, normal, emissive) and adds world-space varyings. |
| `src/core/batch.js` | `batchStatic()`: merges static meshes under a group by material to save draw calls. |
| `src/core/rng.js` | Seeded random numbers, so the city is the same on every visit. |
| `src/world/layout.js` | The city plan: road grid, lanes, blocks, pier, bounds, route, bus stops, surface and height queries, district and street names. |
| `src/world/atmosphere.js` | Time of day and the live cycle, sun and moon, light colours, fog (it replaces three's fog chunks), exposure, sky dome and the image-based lighting probe. |
| `src/world/ground.js` | Road shader (markings, cracks, patches, manholes, skid marks, wet puddles that sample the ocean mirror), sidewalks and lots, sand, terrain, barriers. `roadUniforms` holds the wetness and mirror inputs. |
| `src/world/buildings.js` | Block layout, eleven building types, the facade shader (with a cheap `FACADE_LOW` variant for distance), roofs, storefronts, balconies, fire escapes, rooftop kit, hotel/garage/motel signs, neon. Meshes are split into chunks with distance LOD. |
| `src/world/coast.js` | Ocean shader on a three `Reflector` (also feeds the wet roads), the pier, Ferris wheel, lifeguard towers and umbrellas. |
| `src/world/vegetation.js` | Palms (alpha-tested fronds with wind sway and back-light) and branching trees built from leaf-card lobes. |
| `src/world/props.js` | Street lamps, light pools and cones, traffic signals (`signalState`), billboards, hillside sign. Lamps register as knockable. |
| `src/world/furniture.js` | Hydrants, bins, benches, mailboxes, news boxes, parking meters, street name signs, bus shelters, power lines. |
| `src/world/knockables.js` | Physics for street furniture the car hits: small props fly and tumble, posts topple, everything respawns once you have left. |
| `src/world/pedestrians.js` | Instanced pedestrians animated in the vertex shader: walking, waiting, crossing at the lights, dodging and getting knocked down. |
| `src/vehicles/carModel.js` | Lofted car bodies for eight types (three player cars), wheels (with a cheap variant for traffic), lights, shared materials. |
| `src/vehicles/player.js` | `CARS` roster and handling, gearbox, collisions, suspension, dents and broken lamps, headlights. |
| `src/vehicles/traffic.js` | Instanced AI traffic: lanes, signals, turns, following, parked cars, police pursuit, player collisions. |
| `src/wanted.js` | Wanted level: witnesses, crimes, units, evading and busted. |
| `src/gps.js` | Shortest route along the road grid, for the minimap and map. |
| `src/fx/particles.js` | Smoke, dust, sparks, flames, water, and skid marks. |
| `src/camera.js`, `src/hud.js`, `src/audio.js`, `src/input.js` | Cameras (FOV, rumble, shake), HUD with minimap, full map, GPS and stars, all synthesized audio including the radio, keyboard/touch/gamepad input. |

## Conventions and gotchas

- Cars face local −Z. Heading 0 drives north (−Z); positive heading turns left.
  Traffic keeps right; lane offsets are in `LANES`.
- Any new lit material is patched automatically by `patchSceneMaterials()` so it gets the
  atmospheric fog uniforms. Give materials with a custom `onBeforeCompile` a unique
  `customProgramCacheKey`, set before patching, or three may reuse the wrong program.
- In procedural shaders, take every `fwidth()` before any branch or early return, and pass
  per-instance values as `flat` varyings. Interpolated "constants" pick up per-pixel
  rounding error that the hash functions amplify into speckle.
- When a material needs extra `defines`, merge them into the existing object; replacing it
  drops three's own (such as `STANDARD`).
- The lighting probe sky leaves out the sun disc and clamps the glow around it. The sun is
  already a shadow-casting light; baking it into the probe would wash every shadow out.
- Layers: the camera sees layers 0 and 1; the ocean mirror sees layer 0 only. Put anything
  that can't be seen in a reflection (roof details, wheels, small props, particles) on
  layer 1. Shadows are unaffected by layers. Objects with `userData.noAO` skip the AO pass.
- The road shader samples the mirror's render target, so the mirror swaps in a blank
  texture while it renders (otherwise WebGL reports a feedback loop). The mirror is skipped
  while roads are dry and the sea is out of view.
- The player car's body parts are its own geometry copies so dents never touch the cached
  geometry that traffic shares.

## Test hooks

`window.__pacific` exposes `getState()`, `step(seconds, controls)` to advance the
simulation without rendering, `teleport(x, z, heading)`, `setTime(hours)`,
`setQuality(name)`, `selectCar(key)`, `camera(index)`, `traffic()`, `parked()` and `debug`
(scene, renderer, atmosphere, pipeline, camera rig, traffic, pedestrians, player,
knockables, world, audio, wanted, hud, game). `debug.traffic.frozen = true` stops traffic.

## Validation performed

Build, plus headless Chromium (SwiftShader) runs covering: startup on every quality tier;
screenshots at golden hour, blue hour, midnight, dawn and noon, wet streets at night and sun
shafts at golden hour; acceleration, gear changes, top speed, nitro, braking, steering,
handbrake drift, building collisions, the pier, the sea boundary, reset to road; traffic
movement and collisions, parked cars, pedestrians crossing and dodging; the three cars'
different speeds and handling; dents and repair; knocking over hydrants, bins, signs and
lamp posts; the countdown, GPS route and a complete time trial with the result screen;
speeding past police, ramming a cruiser, evading and getting busted; waypoints on the full
map; audio start on input, radio stations and engine voices; the pause menu, time-of-day and
quality switches; and no runtime errors.

Frame rate could not be measured in that software renderer. On High the scene draws about
480 to 620 calls and 3.2 million triangles per frame across the camera, shadow and
reflection passes (Performance: about 310 to 390 calls). Check frame rate on real hardware
with the FPS counter in settings.
