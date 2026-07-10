# OpenSkies ✈️

A browser-playable **civil aviation flight simulator**: 70 airliner variants, 25 airline
tribute liveries, 30 real U.S. airports with distinct layouts, a force-based flight model
with stall/ground-effect/crosswind, toggleable crash-breakup physics, four graphics tiers,
and a fixed always-day VFR world — targeting GTA IV-era stylized-realistic fidelity at a
smooth frame rate. Built on Three.js with **no build step**.

The airfield itself is alive: **up to 20 MILLION individual grass blades** (chunked,
frustum-culled clipmap with density LOD — 200x the v1 system) sway with a **live wind
field** whose
gusts you can watch sweep across the grass, rock your wings, swing the windsocks and
show up in ATC's wind calls; **dust physics** drifts with that same wind, gets blasted
downstream by engine exhaust, sprays from the wheels on turf, and erupts on off-runway
touchdowns. Fuel burns in flight — the jet gets lighter and livelier, and running dry
means a real flameout.

## Quick start

```bash
node tools/server.js          # or: python3 -m http.server 8080
# open http://localhost:8080
```

Any static file server works — there is no bundler, no framework, no install.
(ES modules can't load from `file://`, so a server is required.)

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
desert, the Vegas Strip, the Gateway Arch, DC monuments, Diamond Head…

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
