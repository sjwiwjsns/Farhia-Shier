# OpenSkies — Architecture

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Rendering | **Three.js r160** (vendored, WebGL2, logarithmic depth buffer) | mid-poly GTA IV-era fidelity at 30–60 fps; log depth because the world spans cm (runway paint) to 40 km (draw distance) |
| Language | Vanilla ES modules, no build step | repo is directly servable; an import map aliases `three` → `vendor/three.module.js` |
| Audio | WebAudio, fully synthesized | zero assets; per-era engine sound sets from filtered noise + oscillators |
| Data | JSON under `data/` | aircraft/airlines/airports are content, not code |
| Tests | Node (`node --check`, headless physics harness via a `three` resolver hook) | physics regressions caught without a browser |

## Folder layout

```
index.html, styles.css      shell + menu/pause/crash overlays
vendor/three.module.js      vendored renderer (only dependency)
data/
  aircraft.json             27 families (geometry/cockpit/sound) + 70 variants (dims/perf/era/flags)
  airlines.json             25 carriers: colors, tail motif, callsign, era, fleet list
  airports.json             30 airports: runways, terminals, tower, scenery tags
src/
  core/    math.js loop.js input.js         helpers, fixed-120Hz loop, kb/mouse/gamepad
  physics/ flightModel.js damage.js         rigid-body-lite FDM, crash state machine
  aircraft/ aircraftFactory.js liveries.js entity.js   procedural meshes, canvas liveries, view+breakup
  aircraft/a380/  spec.js fuselage.js wing.js engines.js gear.js tail.js index.js
                                       bespoke from-scratch A380-800 (see below)
  world/   airportBuilder.js grass.js       runways/terminals/scenery/collidables from JSON; instanced grass
  render/  graphics.js sky.js cameras.js effects.js    tiers, always-day sky, camera rig, particles
  ui/      menu.js hud.js atc.js            selection UI, glass HUD + cockpit panels, ATC-lite
  audio/   engineSound.js                   synthesized engines/warnings/impacts
  main.js                                   Sim orchestration (spawn, respawn, wiring)
tools/   server.js validate-data.js check-syntax.js test-flight.js three-loader.mjs
```

Everything a session needs is created from data at flight start and disposed on exit;
adding an airport or aircraft is a JSON edit, no code.

## Data schemas

### aircraft.json
```jsonc
"families": {
  "b737ng": {
    "manufacturer": "Boeing", "label": "737 Next Generation",
    "cockpit": "boeing-ng",          // boeing-classic | boeing-ng | airbus-fbw | mddc | supersonic
    "sound": "hbpr",                 // turbojet | lbpr | hbpr-classic | hbpr | hbpr-modern | hbpr-heavy
    "geometry": {
      "fusR": 1.88,                  // fuselage radius (m)
      "deck": "single",              // single | hump (747) | double (A380/MD-12)
      "tail": "conv",                // conv | ttail | delta
      "wing": { "sweep": 25.5, "dihedral": 6, "rootChord": 6.9, "taper": 0.26, "posFrac": 0.40 },
      "finH": 7.2,
      "engines": { "layout": "wing2", "type": "hbpr", "nacR": 1.05, "nacL": 3.9 },
      // layouts: wing2 | wing4 | tail2 | trijet727 | trijetdc10 | sst4 | sst4paired
      "winglets": "blended"          // none|blended|sharklet|split|fence|canted|raked|folding
    }
  }
},
"variants": [{
  "id": "b737-800", "family": "b737ng", "name": "737-800",
  "era": [1998, 2100],               // used for era-appropriate livery pairing
  "flags": [],                       // freighter | concept | supersonic | in-development | center-gear
  "geo": { "winglets": "split" },    // optional per-variant geometry override (deep-merged)
  "dims": { "len": 39.47, "span": 34.32, "h": 12.55 },
  "perf": { "mtowKg": 79016, "emptyKg": 41413, "thrustKN": 116, "cruiseKts": 453,
             "mmo": 0.82, "ceilingFt": 41000, "stallKts": 112,
             "takeoffM": 2316, "landingM": 1634, "wingAreaM2": 124.6 }
}]
```

### airlines.json
```jsonc
{ "id": "united", "name": "United Airlines", "callsign": "UNITED",
  "era": [1926, 2200], "cargo": false, "retro": false,
  "fictional": false, "allowConcept": false,   // MD-12 only offered when allowConcept
  "colors": { "fuselage": "#f4f5f7", "cheat1": "#005daa", "cheat2": "#4d4f53",
              "tail": "#005daa", "engine": "#005daa", "text": "#0f2049" },
  "tailMotif": "globe",              // ~18 procedural motifs (widget, heart, mosaic, split…)
  "titles": "UNITED",
  "fleet": ["b737ng", "b747-400", "b777", …] }   // family ids and/or variant ids; "*" = all
```
Compatibility rule (`airlineOperates`): fleet membership (family or variant id) AND era
overlap AND concept-gating AND cargo carriers restricted to freighters.

### airports.json
```jsonc
{ "iata": "JFK", "icao": "KJFK", "name": "John F. Kennedy Intl", "city": "New York, NY",
  "elevFt": 13,
  "scenery": ["coastal", "skyline", "urban"],   // tags drive procedural surroundings
  "skyline": { "dirDeg": 315, "distM": 17000, "size": "xl" },   // m|l|xl|strip
  "water":   { "dirDeg": 170, "distM": 2600 },
  "mountains": { "dirDeg": 260, "distM": 35000, "big": true },  // optional
  "runways": [{ "id": "13R/31L", "hdg": 130, "lenM": 4423, "widM": 61, "x": -950, "z": 150 }],
  "terminals": [{ "kind": "horseshoe", "x": 0, "z": 0, "rotDeg": 10,
                   "lenM": 480, "widM": 70, "gates": 8 }],
  // kinds: main (styles: tent/swoop/domes) | pier | satellite | round | horseshoe | curve
  "tower": { "x": 120, "z": -90, "hM": 97 } }
```
World frame: +x = east, +z = south, y = up; runway `hdg` ≈ number × 10.

## Core loop

`core/loop.js` runs physics at a fixed **120 Hz** (accumulator, 12-step cap) and renders
every rAF:

```
fixed(dt):   input.update → discrete actions (gear/flaps/camera/pause…)
             → FlightModel.step(dt, {groundY, wind, arcade, fieldElevM})
             → DamageSystem.update (touchdowns, strikes, building AABBs)
             → ATC phase machine → audio parameter update
frame(dt):   entity.syncVisual (surfaces/gear/fans/debris) → effects → airport movers
             → camera rig → sky follow → shadow frustum follow → render → HUD canvas
```

## Flight model (`physics/flightModel.js`)

Rigid-body-lite: body frame forward = −Z, right = +X, up = +Y; quaternion attitude,
body rates p/q/r integrated from moment coefficients.

- **Derived from data, not hand-tuned per aircraft**: CLmax from published stall speed,
  induced drag from aspect ratio, thrust from engine count × rating, inertia from
  mass + dimensions — so a 747 *feels* heavy and a DC-9 feels darty.
- Lift curve with stall break (flap-dependent α_stall, arcade adds margin), buffet,
  and realistic-mode wing drop; ground effect via image-vortex factor; constant
  crosswind (halved in arcade); ISA density/thrust lapse; Mach with transonic drag
  rise (and a wave-drag hump + auto-reheat for the SSTs).
- Control authority normalized by dynamic pressure (feel-system approximation) so
  handling stays sane from approach to cruise; deep-stall pitch damping prevents
  full-elevator backflips.
- Gear: spring/damper at three (or four) contact points — torques come from the
  vertical strut forces only; tire behavior (caster alignment toward the velocity
  vector + speed-scheduled nosewheel steering) is applied as yaw-rate dynamics,
  which avoids the classic shopping-cart divergence of naive per-tire side friction.
- Hull strike probes (nose/tail/belly/wingtips) follow the upswept rear fuselage so
  tail strikes occur at realistic pitch angles and behave as scrapes, not walls.

## Damage & crash (`physics/damage.js`)

State machine over flight-model contact events + building AABBs:
hard landing (> ~700 fpm) → gear collapse (> ~1150 fpm) → crash (> ~1900 fpm,
wing/nose strikes, structures). Arcade thresholds are ~1.6× more forgiving.
Crash physics ON: `entity.breakup()` detaches wings/engines/tail as ballistic debris,
ignites fire/smoke emitters, crumples the fuselage, then shows the respawn overlay.
OFF: soft "landing reset" back to the spawn point.

## Bespoke A380 (`aircraft/a380/`)

The flagship is NOT built by the generic family factory: `buildAircraft()` delegates
`a380-800` at player detail to a dedicated module that returns the same
`{ group, parts, info }` contract (so physics, surface/gear animation and crash
breakup work unchanged; parked/ambient A380s still use the cheap generic path).

- **`spec.js`** — a structured dimensional dossier: 22 fuselage cross-section
  stations, 4 wing planform segments, 8 slat + 2 flap + 8 spoiler + aileron
  spans, 8 door stations across two decks, all 22 wheels, engine and tail data.
- **`fuselage.js`** — a true double-bubble loft (per-station width + separate
  upper/lower half-heights blends the deep two-deck crown into the low cockpit
  brow), wing-to-body belly fairing loft, 6-pane cockpit glazing with frame
  posts, 16 recessed cabin doors, blade antennas, beacon, pitots, APU exhaust.
- **`wing.js`** — cranked four-panel wing with per-segment sweep/dihedral/taper,
  8 leading-edge slats, two flap bodies on swept hinge lines, flap-track
  fairing pods, 8 spoiler panels, outboard aileron and the up/down tip fence.
- **`engines.js`** — lathe-profiled cowls, 24 individually placed fan blades per
  engine, spinner, core + plug, shaped pylons — and reverser sleeves on the
  INBOARD pair only, matching the real aircraft.
- **`gear.js`** — twin steerable nose gear with scissor links and landing
  lights, two 4-wheel wing bogies, two 6-wheel body bogies (22 wheels total),
  with bogie tilt, struts and braces; retraction uses the standard channels.
- **`cabin.js`** — full two-deck interior in the real Emirates arrangement:
  14 First Class suites (1-2-1) with gold trim + two shower-spa rooms, 76
  Business pods (1-2-1) and the rear lounge/bar with backlit shelf and sofas
  on the upper deck; 56 Premium Economy (2-4-2) and ~330 Economy (3-4-3,
  narrowing in the tail) on the main deck — plus galleys, bulkheads, bins,
  both staircases and an inward-wound BackSide-free liner that encloses it
  all. Seats are one InstancedMesh per class. A walkable **cabin camera**
  (C to cycle; I/J/K/L walk, U/O switch decks) tours it, even in flight.
  Skipped on the Low tier.
- Dual-deck window rows come from the livery painter (`deck: double` families).

## Wind & atmosphere (`physics/wind.js`)

One `WindField` per flight (seeded) = steady base wind + five incommensurate
gust octaves (Dryden-flavoured, with spatial phase so gusts sweep across the
field) + a boundary-layer altitude profile + low-altitude turbulence intensity.
Everything that feels air samples the SAME field: the flight model (wind vector
per step + band-limited turbulence jolts), grass sway/gust waves, dust
advection, windsocks (yaw + droop + flutter), ATC wind calls ("wind 240 at 8
gusting 14") and the HUD readout. Fuel burn (TSFC-flavoured, thrust-scaled)
reduces mass live; exhaustion causes a genuine flameout.

## Grass, dirt & dust physics (`world/grass.js`, `world/airportBuilder.js`, `render/effects.js`)

Grass (v2) is a **chunked clipmap**: an N×N grid of chunk meshes sharing one
`InstancedBufferGeometry` tuft template and one material, snapping to the grid cells
around the camera each frame — so a dense carpet follows the player across the 45 km
world with zero buffer re-uploads. Each instance is a whole 8–25-blade tuft and each
chunk carries a real bounding sphere, so three.js frustum-culls off-screen chunks
(typically only ~35–45 % of blades are vertex-processed); chunks whose nearest point
lies beyond the distance-fade radius are skipped outright. Tiers may declare
concentric **density rings** (by chebyshev chunk distance): Maximum runs three —
full 3×3 core, mid ring, light outer ring — reaching **40.8 million blades**
(302 k on Low). The airport's **pavement registry** (every runway shoulder, taxiway,
connector, apron and terminal slab records its footprint) is rasterized once into
the red channel of a 1024² field-mask texture; each tuft samples it and zero-scales
itself over pavement. The same registry backs a CPU `isPavement(x, z)` query used by
gameplay. Blade animation is all vertex-shader: two-octave wind sway biased along
the ambient wind, a travelling gust wave fed by the live `WindField`, plus a
jet-blast cone behind the player's engines that flattens blades outward/downstream
with a flutter term.

**Dirt** is one seeded dataset with three consumers. `airportBuilder` scatters
bare-earth blobs across the infield and derives graded soil margins from the
pavement registry, exposing `world.dirt = { blobs, at(x, z) }`. Consumers: (a) a
single 7.2×7.2 km **infield ground quad** whose baked canvas shows turf mottling,
dirt patches and packed-earth margins hugging every slab (rim-faded into the base
terrain disc; sRGB-tagged — untagged canvas textures render washed-out under the
sRGB output pipeline); (b) the field mask's **green channel** — tufts over dirt are
die-rolled away, stunted and tinted toward soil in-shader, so the sward goes scruffy
exactly where the ground shows earth; (c) **dust intensity** — wheels and jet blast
kick up more dust over bare dirt (`dirt.at`).

Dust (and smoke) particles integrate real forces: gravity and drag, **advection toward
the ambient wind vector**, and **jet-blast acceleration cones** fed from the same blast
model the grass uses. Dust sources: main-gear spray when rolling on turf, exhaust
scouring loose dirt behind the engines (both gated by `isPavement`), and touchdown
bursts on off-pavement landings. Note for custom shaders: the renderer uses a
logarithmic depth buffer, so every `ShaderMaterial` must include the `logdepthbuf_*`
chunks or it will lose the depth test (and reversed-argument `smoothstep()` is
undefined behavior in GLSL — both bit us during development).

## Building facades (`world/airportBuilder.js` — `patchFacadeShader`)

Every rectangular building gets **procedural windows in the fragment shader**,
computed from *world position* with a fixed real-world floor height — so one
material puts correct facades on instanced boxes of any scale and the whole
skyline stays a single draw call. Two looks: **office** (punched-window grid with
per-cell tint variation, taller glass lobby, the odd lit interior, street-grime
gradient, speckled roof deck) for city skylines and urban clutter; **ribbon**
(continuous glass bands + mullions, clean membrane roof) for terminals — including
the round satellites, where the Y-driven bands wrap cylinders cleanly. Skyline
towers add per-instance facade tints (`instanceColor`), stepped crowns on ~1/3 of
towers and antenna spires on the tallest; terminal roofs carry instanced AC/vent
clutter. Two hard-won notes: three.js keys its program cache on
`onBeforeCompile` *source text*, so facade variants must set
`customProgramCacheKey` or they silently share one shader; and fp32 `sin()`
hashes break down at world-scale inputs (neighbouring cells correlate into giant
blotches) — wrap cells with `mod()` and use a sin-free hash.

## Graphics tiers (`render/graphics.js`)

One `TIERS` table drives everything; see `docs/PERFORMANCE.md`. The GTA IV-ish look
comes from ACES tone mapping, a warm high sun (always-day: elevation 55°, azimuth 135°),
hemisphere fill, desaturated palette, distance haze fog, and a strong additive sun
bloom sprite. Reflections use a PMREM environment of a tiny gradient scene (cheap,
no per-frame cubemap) applied at High (glass/water) and Maximum (+ fuselage).
