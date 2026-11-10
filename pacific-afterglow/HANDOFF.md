# Handoff

Pacific Afterglow is plain JavaScript on Three.js 0.180, bundled with esbuild. There is
no backend. `npm ci && npm run build && npm start`, then open http://localhost:4173.
Rebuild `dist/game.js` after editing anything in `src/`; never edit the bundle.

## Source map

| File | What it does |
| --- | --- |
| `src/main.js` | Boot, loading steps, UI wiring (cars, races, radio, settings, map zoom), game state, countdown and checkpoints, crime reporting, effects emission, the frame loop, and the `window.__pacific` test hooks. |
| `src/core/pipeline.js` | Renderer, quality tiers and the frame: scene (colour + depth texture) → ambient occlusion from depth at half resolution → light pass (occlusion applied, sun shafts) → bloom → lens pass (depth of field, motion blur, ACES tone mapping, sharpening, flare, grade, grain). No EffectComposer. `beginFrame()` makes the shadow map render once per frame; `debugView = 'ao' | 'depth'` shows those buffers. |
| `src/core/lighting.js` | Lighting added to every lit material through three's shared shader chunks: the far shadow cascade (`FarShadow` draws it, depth only, and redraws only when the view has moved or the light turned), cloud shadows, and analytic street lamps. `lightUniforms` drives them. |
| `src/core/grid.js` | `BoxGrid` and `PointGrid` (spatial hashes for colliders, sight lines, trunks, parked cars), `instancedChunks()` (one InstancedMesh per 320 m chunk, returning a `{ mesh, index }` ref per item) and the LOD registry (`registerLod`, `updateLod`). |
| `src/core/probe.js` | `CarProbe`: the cube-map reflection probe that follows the player's car, one face per frame. |
| `src/core/glsl.js` | Shared GLSL: noise, anti-aliased band helpers, the Preetham atmosphere (`ATMOSPHERE`, used by the sky bake) and the sky lookup (`SKY`: the baked panorama plus sun disc, moon and stars) used by the dome, the lighting probe and the ocean. |
| `src/core/materials.js` | `proceduralMaterial()` injects fragment code into MeshStandardMaterial at fixed points (colour, roughness, metalness, normal, emissive) and adds world-space varyings. |
| `src/core/batch.js` | `batchStatic()`: merges static meshes under a group by material to save draw calls. |
| `src/core/rng.js` | Seeded random numbers, so the city is the same on every visit. |
| `src/world/layout.js` | The city plan: the 13 × 21 road grid, lanes, blocks, both piers, bounds, the three time-trial routes, bus stops, surface and height queries, districts and street names. Everything else derives its extents from here. |
| `src/world/plan.js` | What stands on each block: the old town's hand-made plan, district mixes for the rest, and parks, plazas and car parks placed by a position hash. Shared by the ground, buildings, trees, billboards and the map. |
| `src/world/atmosphere.js` | Time of day and the live cycle, sun and moon, light colours, fog (it replaces three's fog chunks and takes its colour from the sky panorama), exposure, sky dome and the image-based lighting probe. |
| `src/world/sky.js` | `SkyBaker`: paints the atmosphere, ray-marched cumulus and cirrus into a panorama, one strip of 64 per frame, and cross-fades from the last finished panorama to the new one. A jump in time repaints it whole. |
| `src/world/ground.js` | Road shader (markings, cracks, patches, manholes, skid marks, wet puddles that sample the ocean mirror), sidewalks and lots, sand, terrain, barriers. `roadUniforms` holds the wetness and mirror inputs. |
| `src/world/buildings.js` | Block layout, eleven building types, the facade shader (interior-mapped rooms up close, a cheap `FACADE_LOW` variant for distance), roofs, storefronts, balconies, fire escapes, rooftop kit, hotel/garage/motel signs, neon. Meshes are split into chunks with distance LOD; sign textures are cached by name. |
| `src/world/coast.js` | Ocean shader on a three `Reflector` (also feeds the wet roads), the pier, Ferris wheel, lifeguard towers and umbrellas. |
| `src/world/vegetation.js` | Palms (alpha-tested fronds with wind sway and back-light) and branching trees built from leaf-card lobes. |
| `src/world/props.js` | Street lamps, light pools and cones, traffic signals (`signalState`), billboards, hillside sign. Lamps register as knockable. |
| `src/world/furniture.js` | Hydrants, bins, benches, mailboxes, news boxes, parking meters, street name signs, bus shelters, power lines. |
| `src/world/knockables.js` | Physics for street furniture the car hits: small props fly and tumble, posts topple, everything respawns once you have left. |
| `src/world/pedestrians.js` | Instanced pedestrians animated in the vertex shader: walking, waiting, crossing at the lights, dodging and getting knocked down. |
| `src/vehicles/carModel.js` | Lofted car bodies for eight types (three player cars); the cabin is one loft split into glass and painted frame (`splitLoft`); interiors for the player's cars; lamps; wheels (with a cheap variant for traffic); the paint shader (shut lines, flake, grime) and tyre shader. |
| `src/vehicles/player.js` | `CARS` spec sheets, `HANDLING` modes, the vehicle simulation (`update`), gearbox, collisions, suspension, dents and broken lamps, headlights and signals. |
| `src/vehicles/traffic.js` | Instanced AI traffic: lanes, signals, turns, following, parked cars, police pursuit (scaled by `policePace`), player collisions. |
| `src/wanted.js` | Wanted level: witnesses, crimes, units, evading and busted. |
| `src/gps.js` | Shortest route along the road grid, for the minimap and map. |
| `src/fx/particles.js` | Smoke, dust, sparks, flames, water, and skid marks. |
| `src/camera.js`, `src/hud.js`, `src/audio.js`, `src/input.js` | Cameras (FOV, rumble, shake), HUD with minimap, full map, GPS and stars, all synthesized audio including the radio, keyboard/touch/gamepad input. |

## Conventions and gotchas

- The simulation in `player.update` works in the car's frame: `u` forward, `v` to the left,
  `r` yaw rate (positive turns left). It integrates twice per call (240 Hz at the default
  120 Hz step) because the tyre model is stiff, and below about 5 m/s it blends into a
  kinematic bicycle model, where slip angles stop meaning anything. `ax`/`ay` are the
  filtered body accelerations that drive weight transfer and the body's pitch and roll.
- To add a car, give it a spec in `CARS` and a body in `CAR_TYPES`; nothing else is tuned
  by hand. Check it with the numbers in "Validation performed".
- The city's size comes from `roadsX`/`roadsZ` in `layout.js`. World builders must take
  extents from there (`WEST`, `EAST`, `NORTH`, `SOUTH`, `BOUNDS`) and place repeated things
  with `instancedChunks()` so they are culled and LOD-ed; a single city-wide InstancedMesh
  is never culled. Knockable props keep the `{ mesh, index }` refs it returns.
- Anything that searches colliders must go through `world.boxGrid`, `world.circleGrid` or
  `city.topsGrid`, never the flat arrays.
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
- The paint material's cache key is shared; per-car shut lines are uniforms in
  `material.userData.seamUniforms`.
- Layers: the camera sees layers 0 and 1; the ocean mirror, the car's reflection probe and the far shadow cascade see layer 0 only. Put anything
  that can't be seen in a reflection (roof details, wheels, small props, particles) on
  layer 1. The near shadow map is unaffected by layers. `userData.noAO` is left over from the
  old occlusion pass and no longer does anything (occlusion now comes from depth, which
  transparent overlays do not write).
- Every lit material must go through `patchAtmosphere()` (the scene is patched once at
  startup; patch by hand anything swapped in later, as `facadeLow` is). The lighting chunk
  declares a shadow sampler and the fog chunk two panorama samplers; a material that never
  receives those uniforms leaves them on texture unit 0 and the draw call fails with a
  sampler type error. For the same reason the far shadow sampler always has a real depth
  texture bound, a blank one when the cascade is off.
- Street lamps are lit analytically: `paLampNear()` in `lighting.js` mirrors the placement
  loops in `props.js`. If the lamp layout changes, change both.
- The cloud field (`paCloudField`) is shared by the sky bake and the ground shadows, which
  is why shadows sit under their clouds. Keep the two in step.
- Interior-mapped rooms and shops are skipped while the ocean mirror renders
  (`atmoUniforms.mirrorPass`): from under the street a shop is all ceiling lights.
- The depth texture is at full resolution and the occlusion pass at half, so that pass
  snaps every depth lookup to a texel centre. Without it the lower rows band.
- The road shader samples the mirror's render target, so the mirror swaps in a blank
  texture while it renders (otherwise WebGL reports a feedback loop). The mirror is skipped
  while roads are dry and the sea is out of view, and paused (`coast.mirror.paused`) while
  the reflection probe renders.
- Touch: the ◀ ▶ steering buttons, pedals and NOS/DRIFT are ordinary `data-key` buttons
  (each captures its own pointer), so they multi-touch.
  All touch layout lives in the `(pointer:coarse)` blocks at the end of `style.css`.
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
lamp posts; the countdown, GPS route and all three time trials driven to the result screen
by a script following the GPS line; police pursuit speed (about 115 km/h on Relaxed),
evading and getting busted; waypoints, zoom and pan on the full map; audio start on input, radio stations and engine voices; the pause menu, time-of-day and
quality switches; Easy against Sport handling; an emulated phone in landscape and portrait
with two-thumb multi-touch (a steering button plus GAS), the touch buttons and the pause menu; and no
runtime errors.

Measured in the simulation, Easy / Sport handling: Caldera GT 0-100 km/h 4.6 s / 5.3 s,
299 km/h within 2.9 km, 100-0 km/h in 33 m / 37 m (43 m with locked wheels in Simulation),
1.0 g of cornering; Vanta SS 5.1 s / 5.9 s, 272 km/h; Ventus R 3.4 s / 4.0 s, 335 km/h and
still pulling, 28 m / 33 m. A double lane change at 150 km/h settles in every mode; full
throttle and full lock from 40 km/h is tidy in Easy, a drift in Sport and a spin in Simulation.

After the graphics revamp: every tier booted and screenshotted by day and night with no GL
errors; sky at noon, golden hour, dusk and midnight; far shadows from above downtown;
lamp light on road, cars and shop fronts; occlusion and depth buffers through the debug
views; the title screen's depth of field; and the gameplay tests above run again.

Frame rate could not be measured in that software renderer. On High the scene draws about
950 to 1,300 calls and 3.5 to 4.3 million triangles per frame across the camera, shadow,
ocean-mirror and car-probe passes (Balanced about 650, Performance about 560 to 630); the
original 24-block city drew about 630 on High. The far cascade adds a depth-only pass of
the district a couple of times a second, not every frame. Lit pixels now do more work
(far shadow lookup, cloud noise, two lamps at night), so on a fill-limited GPU Balanced
or Performance is the lever. Check frame rate on real hardware with the
FPS counter in settings, and drop to Balanced if the CPU is the limit.
