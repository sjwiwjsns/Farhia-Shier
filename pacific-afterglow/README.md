# Pacific Afterglow

An original open-world driving game for the browser: a coastal city of 240 blocks at sunset
with a reflective ocean, two drivable piers, traffic, pedestrians, police and a full
day/night cycle. The cars are simulated, not scripted: engine, gearbox, tyres and weight
transfer.
Everything you see and hear is generated in code. There are no downloaded models, photo
textures or audio files.

It is inspired by the feel of West Coast open-world games. It is not GTA V and contains
none of its assets, map, story or characters. All brand names in the city are invented.

## Play

Serve `dist/` with any static web server. For local development:

```sh
npm ci
npm run build
npm start          # python -m http.server 4173 --directory dist
```

Then open http://localhost:4173. Opening `index.html` straight from disk will not work.

| Keyboard | Gamepad | Action |
| --- | --- | --- |
| W / ↑ | RT | Accelerate |
| S / ↓ | LT | Brake, then reverse |
| A D / ← → | Left stick | Steer |
| Space | A | Handbrake (drift) |
| Shift | B / X | Nitro |
| C | Y | Cycle chase, far chase, hood and cinematic cameras |
| Q | | Next radio station (or off) |
| T | | Cycle time of day |
| H | | Horn |
| M | Back | Full-screen map: click to set a waypoint, scroll or pinch to zoom, drag to move, + and − keys |
| R | RB | Reset and repair the car (restarts the run in time trial) |
| Esc / P | Start | Pause and settings |
| ← → on the title screen | | Choose a car |

**Phones and tablets:** steer with the ◀ ▶ buttons on the left; hold GAS and BRAKE on the
right, with NOS and DRIFT beside them. Speed sits in a small strip at the top of the screen. CAM,
FM (radio) and ↺ (reset) sit at the top right, and the Ⅱ button pauses and opens settings. The game goes full
screen in landscape where the browser allows it, and plays in portrait too. Phones start
on the Performance graphics setting.

**Handling** (settings): three levels over the same simulation.
- **Easy** (the default): ABS, traction control and stability control, a little extra
  grip, strong counter-steer help, a gentle pull that keeps the car parallel to the street
  when you let go of the wheel, and glancing off walls instead of stopping dead.
- **Sport**: ABS and a loose traction control that lets the tail move under power.
- **Simulation**: no aids. Brakes lock, the rear tyres spin, and a heavy foot will turn you round.

**Police** (settings): Relaxed (the default) cruisers pursue at about 110 km/h; Standard is
the original 180 km/h pursuit; Off removes the wanted level.

## What is in it

**Cars**
- A physical driving model. Each car is a spec sheet (mass, weight distribution, a torque
  curve in N·m, real gear ratios, drag and downforce, tyre grip) and the simulation works
  out the rest: slip angles on a magic-formula tyre, a friction circle shared between
  cornering and traction, weight transfer under braking, power and cornering, load-sensitive
  grip, engine braking, an automatic gearbox that kicks down, and brakes that can lock. Wet
  roads have less grip; sand and grass bog the car down.
- Three cars: the Caldera GT grand tourer (450 hp, 0-100 km/h in about 4.5 s, 300 km/h),
  the Vanta SS muscle car (465 hp, big torque, a tail that steps out under power) and the
  Ventus R mid-engine supercar (640 hp, 0-100 in about 3.4 s, 340 km/h, downforce). Pick
  one on the title screen or in settings; six paint colours.
- Modelled like cars: painted roof and pillars around tinted glass you can see through, a
  cabin with seats, dashboard, steering wheel and a driver, panel shut lines, door handles,
  mirrors, wipers, projector headlamps, brake, reverse and turn lamps (the indicators come
  on in a turn; a heavy crash sets the hazards flashing), treaded tyres and five-nut wheels.
- Paint with metallic flake under a clearcoat that reflects the actual street around the
  car (High and Ultra), not just the sky.
- Body roll, dive under braking, squat under power and springy suspension, tuned per car.
- Crashes dent the body where you hit (panels crumple, lamps smash) and throw sparks; a
  scrape along a wall leaves a trail of them. Reset repairs everything.
- Tire smoke and skid marks in drifts, blue-cored nitro flames, and backfires when you lift
  off at high revs.

**City**
- 240 blocks (1.9 km by 3.2 km, ten times the original) in thirteen districts: the old
  town on the coast (Ocean Drive, Seaview, Palm District, Southbank), a much larger Downtown
  with towers past 250 m, Midtown, Northshore, Laurel Park and its four-block park, the
  Arts District, the Port, the Marina, Eastside and the Foothills. Hills ring the city.
- A second, longer fishing pier at the Marina alongside the funfair pier.
- Eleven building types, among them glass towers, offices, art deco blocks, brick walk-ups
  with fire escapes, condos with balconies, hotels with canopies and blade signs, parking
  garages, motels and warehouses. Heights, setbacks and widths vary block by block.
- Lit shop fronts with signs and awnings, rooftop AC units, water tanks and antennas, and
  windows that are on or off at random after dark. Up close every window looks into its
  own room (walls, floor, ceiling light) that shifts in parallax as you pass.
- AI traffic in six vehicle types (taxis and police among them) that keeps to its lane,
  stops at red lights, turns at intersections and reacts when you hit it. Hundreds of
  parked cars line the curbs.
- Pedestrians walk the sidewalks, wait for the lights, use the crosswalks and jump out of
  the way of your car.
- Street furniture you can send flying: hydrants (they geyser), trash cans, benches,
  mailboxes, news boxes, parking meters, street name signs and lamp posts, which fold over
  and go dark. Bus shelters, billboards and power lines on wooden poles line the streets.
- Roads with cracks, patches, manhole covers, old skid marks and worn paint.
- Palms along the beach and the main avenues, and branching broadleaf trees, jacarandas and
  cypresses in the parks, streets and hills.

**Light and atmosphere**
- A live day cycle tied to the HUD clock (48 minutes per day), or fixed times from first
  light to midnight. Sun, moon, sky light, fog, exposure and every light follow it.
- After dark: street lamps, headlights and tail lights, lit windows, neon, and wet roads
  that reflect the whole city in long streaks and puddles (switchable in settings).
- Sun shafts through gaps between buildings, bloom, a lens flare hidden by anything in front
  of the sun, height fog that glows toward the sun, and soft shadows that follow the car.
- Ocean with swell, Fresnel reflection, planar reflections of the city, glitter and foam.

**Camera and effects**: wider field of view with speed, motion blur (radial at speed and
directional when the camera swings round, keeping the car sharp), road rumble, impact shake.

**Game**
- Three time trials, each with a 3-2-1 countdown, a GPS route along the streets, a finish
  screen with top and average speed, and its own saved best: the Sunset Run (eight
  checkpoints round the old town), the Downtown Dash (thirteen, through the towers) and the
  Grand Tour (sixteen, the whole city limits, about 10 km). Pick one on the title screen.
- A minimap with the GPS route, traffic, police and checkpoints, and a full-screen map (M)
  with district names that zooms and pans; a click sets a waypoint.
- Wanted level: police who see you speeding, running red lights, crashing into people or
  cars, wrecking street furniture or ramming a cruiser give chase. Each star brings more
  units. Break their line of sight until the stars stop flashing to escape; stop next to a
  cruiser and you are busted (you are released where you stand, car repaired).

**Sound** (Web Audio, starts on your first click or key press)
- An engine voice per car (V8, lumpy big-block, high-revving V10) that follows rpm, load
  and gear, with intake howl, exhaust rasp and gearbox whine.
- Tire squeal, a nitro whoosh, crash and scrape sounds, police sirens.
- City ambience that changes by district and time: traffic hum, distant horns and sirens,
  birds and gulls by day, crickets at night, surf by the beach.
- A radio with three stations, each played live by a small procedural band: Pacific Wave
  101.4 (synthwave), Low Tide 94.7 (lo-fi) and KZRO 88.1 Coast Funk.

## Graphics settings

| Setting | Resolution cap | Extras |
| --- | --- | --- |
| Ultra | 2× | 4096 shadow map, ambient occlusion, ¾-resolution reflections, 256 px live car reflections |
| High | 1.5× | 2048 shadows, half-resolution reflections and wet streets, 128 px live car reflections |
| Balanced | 1.2× | 2048 shadows, sky-only ocean reflections |
| Performance | 1× | 1024 shadows, no bloom or grading |

Desktop defaults to High and touch devices to Balanced. Dynamic resolution lowers the
render scale when the frame rate drops, and a sharpening pass keeps the picture crisp.
Settings also cover handling, police, time trial, time of day, wet
roads, radio, car, camera and an FPS counter (frame time, draw calls, triangles, render scale). Choices
and the best time are stored in the current browser only.

Performance work: everything repeated is instanced; the city is split into 320 m chunks
whose small details are hidden with distance and whose facades switch to a cheaper shader
far away; collisions, line of sight and parking go through spatial grids, so the bigger
city costs no more per frame to simulate; the shadow map is drawn once per frame however
many passes use it; traffic, parked cars and pedestrians stream around the player; static props are
merged by material; and details that can't show up in reflections are kept out of the
reflection pass.

## Requirements

WebGL 2 and a current browser. A discrete or recent integrated GPU is recommended for
High and Ultra.

## Project layout

`src/` is the source; `dist/game.js` is the bundle built from it. `dist/index.html`,
`dist/style.css` and `dist/favicon.svg` are authored directly. See `HANDOFF.md` for a map
of the code. Three.js is MIT licensed (see `dist/THIRD_PARTY_LICENSES.txt`). The Barlow
typefaces load from Google Fonts, with system fonts as fallback.
