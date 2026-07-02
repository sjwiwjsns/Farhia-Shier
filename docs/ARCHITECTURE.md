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

## Grass & dust physics (`world/grass.js`, `render/effects.js`)

Grass is a single `InstancedBufferGeometry` draw call of 12k–100k five-vertex blades
(per tier). Blades live in a **wrap-around tile that follows the camera** — a toroidal
modulo in the vertex shader — so the full budget always forms a dense carpet around the
player instead of thinning out over the 45 km world. The airport's **pavement registry**
(every runway shoulder, taxiway, connector, apron and terminal slab records its
footprint) is rasterized once into a 1024² mask texture; each blade samples it and
zero-scales itself over pavement. The same registry backs a CPU `isPavement(x, z)`
query used by gameplay. Blade animation is all vertex-shader: two-octave wind sway
biased along the ambient wind, plus a jet-blast cone behind the player's engines that
flattens blades outward/downstream with a flutter term.

Dust (and smoke) particles integrate real forces: gravity and drag, **advection toward
the ambient wind vector**, and **jet-blast acceleration cones** fed from the same blast
model the grass uses. Dust sources: main-gear spray when rolling on turf, exhaust
scouring loose dirt behind the engines (both gated by `isPavement`), and touchdown
bursts on off-pavement landings. Note for custom shaders: the renderer uses a
logarithmic depth buffer, so every `ShaderMaterial` must include the `logdepthbuf_*`
chunks or it will lose the depth test (and reversed-argument `smoothstep()` is
undefined behavior in GLSL — both bit us during development).

## Graphics tiers (`render/graphics.js`)

One `TIERS` table drives everything; see `docs/PERFORMANCE.md`. The GTA IV-ish look
comes from ACES tone mapping, a warm high sun (always-day: elevation 55°, azimuth 135°),
hemisphere fill, desaturated palette, distance haze fog, and a strong additive sun
bloom sprite. Reflections use a PMREM environment of a tiny gradient scene (cheap,
no per-frame cubemap) applied at High (glass/water) and Maximum (+ fuselage).
