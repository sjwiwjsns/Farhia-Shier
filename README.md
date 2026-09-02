# OpenSkies ✈️

A browser-playable **civil aviation flight simulator**: 70 airliner variants, 25 airline
tribute liveries, 30 real U.S. airports with distinct layouts, a force-based flight model
with stall/ground-effect/crosswind, toggleable crash-breakup physics, four graphics tiers,
and a fixed always-day VFR world — targeting GTA IV-era stylized-realistic fidelity at a
smooth frame rate. Built on Three.js with **no build step**.

The airfield itself is alive: **up to 40 MILLION individual grass blades** (chunked,
frustum-culled clipmap with three-ring density LOD — 400x the v1 system) sway with a
**live wind field** whose
gusts you can watch sweep across the grass, rock your wings, swing the windsocks and
show up in ATC's wind calls; **dust physics** drifts with that same wind, gets blasted
downstream by engine exhaust, sprays from the wheels on turf, and erupts on off-runway
touchdowns. **Realistic dirt** runs through it all: bare-earth patches and graded soil
margins along every runway and taxiway show through scruffy, stunted, browned grass —
and kick up extra dust when you roll over them. Fuel burns in flight — the jet gets
lighter and livelier, and running dry means a real flameout.

## Quick start

```bash
node tools/server.js          # or: python3 -m http.server 8080
# open http://localhost:8080
```

Any static file server works — there is no bundler, no framework, no install.
(ES modules can't load from `file://`, so a server is required.)

### Deploy (Netlify)

The repo ships a `netlify.toml`, so deploying is zero-config: connect the repo in
the Netlify UI (build command *empty*, publish directory `.`) — or from the CLI:

```bash
netlify deploy --prod --dir=.
```

Everything is static files with relative paths; any similar host (GitHub Pages,
Cloudflare Pages, S3) works the same way.

## What's in the hangar

| Family | Variants |
|---|---|
| Boeing | 707-320, 717, 727-100/200, 737 (-200, Classic, NG, MAX — 13 variants), 747-100/200/400/8I/8F, 757-200/300, 767-200/300ER/400ER, 777-200/200ER/300/300ER, 777-8/9, 787-8/9/10 |
| Airbus | A300-600, A310, A318/319/320/321 (ceo + neo), A330-200/300/900neo, A340-200/300/500/600, A350-900/1000, **A380-800 (bespoke from-scratch build: lofted double-deck hull, 22-wheel gear, per-blade fans, inboard-only reversers — see docs)** |
| McDonnell Douglas | DC-9-10/30/50, MD-81/82/83/88, MD-90, DC-10-10/30/40, MD-11 (+ freighter), **MD-12 (concept — never built, house colors only)** |
| Supersonic | Concorde, Boom Overture (in development) |

Aircraft are built procedurally from `data/aircraft.json` — correct engine count and
placement (wing pods, tail-mounted, 727 S-duct, DC-10 banjo, SST boxes), T-tails,
747 hump, A380/MD-12 double deck, winglet styles per variant, era-appropriate
engine sound synthesis (turbojet / low-bypass / high-bypass).

**Every airframe is built from roughly 5 000 individually modelled pieces**
(5 010–5 522 across the fleet, counted live on the flight-start toast) — about
600 outside and the rest inside a **fully modelled flight deck** you fly from.
Press `C` for the cockpit and you get six live glass displays (PFD with speed
and altitude tapes, pitch ladder, flight director and FMA; ND with compass rose,
range rings and route; EICAS/ECAM with per-engine N1 and EGT, fuel, flaps and
gear), an integrated standby instrument, two FMC/CDUs with full 69-key boards
and live route pages, the MCP/FCU with its digital windows, a fifteen-panel
overhead of guarded switches and annunciators, P6/P18 circuit-breaker stacks
running to ~550 breakers, a throttle quadrant whose levers track your throttle,
flap and speedbrake levers that move with the surfaces, spinning trim wheels,
yokes (or sidesticks) that follow your inputs, rudder pedals, and both pilot
seats. The deck is hidden outside cockpit view, so it costs nothing in the
other cameras.

Outside, the same airframe carries: six-segment
leading-edge slats that translate and droop with the flaps, double-slotted flaps
with vanes and end ribs, six spoiler panels with actuators, ailerons with horns
and tabs, flap-track canoes, rows of vortex generators, static wicks, fuel panels,
landing lights, nav/strobe lights; door frames with handles, cargo doors, VHF /
satcom / GPS / TCAS antennas, pitots, AoA vanes, static ports, beacons, APU, belly
fairing, windscreen posts and wipers; 22-blade spinning fan discs, cowl seams and
latches, nacelle strakes, exhaust plugs, nozzle chevrons on modern types, reverser
cascades that translate with the sleeve, pylon fairings; split rudders and
elevators with horns, tabs and wicks; torque links, brake discs, hubcaps and gear
doors. Deltas get three elevon segments per side and petalled reheat nozzles.
Skins carry frame and stringer lines, rivet rows, door outlines, a bare radome and
APU cone, a registration, and a roughness map; the Maximum tier renders the paint
with a physically-based clearcoat. Static pieces are batched per material, so a
600-piece airframe costs ~150 draw calls.

**Liveries are simplified color tributes generated at runtime — not exact airline
artwork.** The airline picker only offers aircraft that carrier historically or
currently operated (era + fleet checked), cargo carriers get freighters, and the
MD-12 concept is restricted to fictional/house liveries.

## Airports (30)

JFK · LGA · EWR · BOS · MSP · ORD · MDW · LAX · SFO · SEA · DEN · DFW · IAH · ATL ·
MIA · FLL · MCO · TPA · CLT · PHL · DCA · IAD · BWI · DTW · PHX · LAS · SAN · SLC ·
STL · HNL — each with close-approximation runway numbers/orientation, terminal
arrangement (piers, satellites, horseshoes, DEN's tent roof, IAD's swoop, TPA's
round airsides), field elevation, and region scenery: skylines, mountains, coasts,
desert, the Vegas Strip, the Gateway Arch, DC monuments, Diamond Head… Buildings
are **detailed and windowed**: terminals wear continuous ribbon-glass bands with
mullions and rooftop AC clutter, and skyline towers get procedural window grids,
per-tower facade tints, glass lobbies, stepped crowns and antenna spires — all
computed in-shader at fixed real-world scale, so the whole skyline stays one
draw call. Cities stand on real ground — a tiling street grid of blocks,
parks and arterials under both the downtown cluster and the surrounding town —
and the ramp is cast concrete with expansion joints, sealed cracks, oil stains,
yellow gate lead-in lines and flood-light masts. Overhead, shaded cumulus
drift on the live wind across a sky that warms toward the sun.

## Controls

| Input | Action |
|---|---|
| `W/S` `A/D` `Q/E` | pitch / roll / rudder |
| `Shift` / `Ctrl` | throttle up / down |
| `G` `F` `V` `Space` `Z` `B` | gear, flaps down/up, spoilers, reversers, brakes |
| `[` `]` | pitch trim |
| `C` `H` `T` `M` `P` | camera (incl. walkable A380 cabin), HUD mode, radio log, mute, pause |
| Mouse drag / wheel | look / zoom · Free cam: `I J K L U O` |
| Gamepad/joystick | sticks = pitch/roll, pedals or right stick = rudder, lever/triggers = throttle |
| **Touch (phone/tablet)** | virtual stick = pitch/roll, rudder bar, throttle slider, GEAR/FLAP/SPLR/REV/BRK buttons, drag = look, pinch = zoom, double-tap = recenter |

**Mobile:** the game detects touch devices and shows on-screen controls
automatically — first run defaults to the Low tier and the lean HUD, flights
open fullscreen in landscape, and the menu reflows for small screens. Runs in
mobile Safari and Chrome from the same URL; no app install.

Difficulty: **Arcade** (auto-trim, auto-coordination, forgiving stall/gear limits) or
**Realistic** (full manual, wing drop at the stall, real sink-rate limits).
Crash physics **On** = wing/engine/tail separation, fire, smoke, debris and a respawn
prompt; **Off** = soft position reset for casual flying.

## Tests

```bash
npm test   # data validation + syntax check + headless flight-physics suite
```

The flight suite takes a 737-800, a 747-400 and Concorde through scripted takeoff,
climb, cruise, idle descent and deep-stall scenarios in Node (no browser needed).

## Docs

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — module layout, data schemas, physics model
- [`docs/PERFORMANCE.md`](docs/PERFORMANCE.md) — per-tier budgets and what each tier toggles
- [`docs/ROADMAP.md`](docs/ROADMAP.md) — MVP → full feature set

## Legal

Fan-made simulator for entertainment. Aircraft performance figures are public
approximations, airline names are used nominatively with procedurally generated
placeholder liveries, and the MD-12 is clearly labeled as a concept aircraft that
never entered production. Three.js is © its contributors (MIT, `vendor/THREE_LICENSE`).
