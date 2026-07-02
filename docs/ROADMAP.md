# Roadmap — MVP → full feature set

## ✅ Shipped in v0.1 (this repo)

**M0 — Engine skeleton**
- Fixed-timestep loop, input (keyboard/mouse/gamepad + rudder axis), camera rig
  (chase/cockpit/tower/free), always-day sky + haze, four graphics tiers.

**M1 — Flight**
- Data-derived force model (lift/drag/thrust/weight per airframe), stall + buffet +
  wing drop, ground effect, crosswind, ISA atmosphere, Mach/transonic drag, SST reheat,
  gear contact with caster-stable ground handling, arcade/realistic presets.

**M2 — Content**
- 27 families / 70 variants procedurally modeled (engine layouts, T-tails, hump,
  double-deck, deltas, winglets, animated gear/flaps/spoilers/reversers/fans).
- 25 airlines with procedural tribute liveries + fleet/era compatibility rules.
- 30 airports with approximated runway/terminal layouts + regional scenery,
  parked traffic, jet bridges, ground vehicles.

**M3 — Systems & polish**
- Crash-physics toggle with breakup/fire/smoke/debris + respawn; gear collapse;
  soft-reset mode. Glass HUD / minimal / off + per-family cockpit panels.
  ATC-lite clearances with GPWS and V-speed callouts. Synthesized engine sound sets
  per powerplant era. Data validation + headless physics test harness.

## Next (prioritized)

**P1 — Feel & fidelity**
1. Landing analysis screen (touchdown fpm, distance, centreline deviation, grade).
2. Autopilot basics: heading/altitude/speed hold, ILS-style approach guidance to the
   selected runway.
3. True 3D cockpit interiors per family (modeled panel + yoke/sidestick, mouse-look
   already supported).
4. Flap/slat aero stages with per-detent placards and trim wheel audio.

**P2 — World**
5. AI traffic pattern: aircraft taxiing, departing and on approach with ATC calls.
6. Taxiway signage/markings from a real taxiway graph per airport; pushback.
7. Airport ground textures (blast pads, displaced thresholds, holding points).
8. More scenery set-pieces (bay bridges, downtown clusters per city identity).

**P3 — Modes & content**
9. Career/challenge mode: scored landings at the 30 airports, gusty-day unlocks.
10. Free-flight save/load and shareable spawn links (aircraft+airport+settings in URL).
11. Remaining fleet gaps: 747SP, 767-200ER, A220, regional jets (CRJ/E-Jet).
12. Photo mode (free cam + DoF-ish blur + livery showcase turntable).

**P4 — Platform**
13. Optional quality autoscaler (drop tier when frame time exceeds budget).
14. WebGPU renderer path when Three.js WebGPU matures.
15. Multiplayer shared-skies (see other players' aircraft + callsigns).

## Explicit non-goals for v1
Night/weather cycle (design pillar: always-day), photoreal scenery streaming,
study-level systems simulation, VR.
