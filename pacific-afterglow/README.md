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
| F | | Show or hide the FPS counter (on by default) |
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
- Twelve building types: glass towers, offices, art deco blocks, brick walk-ups with fire
  escapes, condos with balconies, hotels with canopies and blade signs, shops, parking
  garages, coastal stucco houses, motels, warehouses and civic halls with columns, a
  pediment and sometimes a dome. Heights, setbacks and widths vary block by block, and on
  most blocks the buildings stand wall to wall along the street.
- Buildings with depth: windows are set back into the wall, with frames, glazing bars,
  sills and lintels, and reveals that the sun lights on one side and shades on the other;
  blinds are pulled to different heights and curtains hang at the sides. Fins, sunshades,
  piers, cornices, canopies, balconies and party walls are real pieces that throw shadows.
  Walls are brick, dressed stone, precast panels with joints, stucco, metal cladding or
  curtain wall, each drawn at any distance without a texture to blur.
- A skyline with shapes in it: stepped towers, round towers, twin slabs either side of a
  core, glass shafts inside a concrete frame with an open crown, pyramid roofs in copper
  and slate, plant rooms behind louvres, helipads and roof terraces, and names in lights
  on some of the tallest. One landmark stands over all of it: a 300 m round tower with a
  flared lookout and a mast, on its own plaza on Centro Blvd.
- Street level is built up too: each shop has a tiled stall riser, a display window in
  panes, a glazed door, a fascia with its sign and stone piers either side; offices,
  condos and hotels have double-height lobbies behind glass with their doors under a
  canopy; houses and walk-ups have a painted front door with steps and a lamp over it.
- After dark, windows light floor by floor in offices and one by one in homes, shops and
  lobbies glow, the old stone towers are floodlit, crowns carry bands of light, and the
  landmark's rings drift between coral and amber. Up close every window looks into its
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
- A sky that is painted, not faked: a physical atmosphere, a deck of ray-marched cumulus
  that shade themselves and glow at their edges, high cirrus, and an afterglow band along
  the horizon either side of sunset. Fog takes its colour from the sky behind whatever it
  hides, so the skyline melts into the actual sunset.
- Shadows across the whole city: a sharp cascade round the car and a far one covering more
  than a kilometre, so towers throw their evening shadows over whole districts. Clouds
  cast drifting shadows too, each under the cloud you can see.
- After dark the street lamps are real lights: every one lights the road, the cars passing
  under it and the building fronts beside it (thousands of lamps, worked out in the shader).
  Plus headlights and tail lights, lit windows and shops you can see into, neon, and wet
  roads that reflect the city in long streaks and puddles (switchable in settings).
- Ambient occlusion from the depth buffer on every tier but the lowest: cars sit on the
  road, walls darken at their feet, gaps between buildings read as gaps.
- Sun shafts cut by buildings and palms, bloom, a lens flare hidden by anything in front of
  the sun, filmic tone mapping with a grade that follows the hour, and depth of field on
  the title screen and the cinematic camera.
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

| Setting | Extras | Full facade detail out to |
| --- | --- | --- |
| Ultra | 4096 shadows plus a far cascade, 16-sample occlusion, ¾-resolution reflections, 256 px live car reflections, finest clouds | 520 m |
| High | 2048 shadows plus a far cascade, 10-sample occlusion, half-resolution reflections and wet streets, 128 px live car reflections | 360 m |
| Balanced | 2048 shadows, a smaller far cascade, 6-sample occlusion, real street lamps, sky-only ocean reflections | 240 m |
| Performance | 1024 shadows, no far cascade, occlusion, bloom, grading or lamp lighting (lamps keep their painted pools) | 130 m |

Desktop defaults to High, tablets to Balanced and phones to Performance.

**Resolution** is its own setting, and it is fixed unless you choose Auto:

| Resolution | Renders |
| --- | --- |
| 1080p (the default) | 1920 × 1080 pixels' worth, whatever the shape of the window, or every pixel the screen has if that is fewer |
| 1440p | 2560 × 1440 pixels' worth, on the same terms |
| Native (sharpest) | one rendered pixel per screen pixel, however dense the screen |
| 720p (faster) | 1280 × 720 pixels' worth |
| Auto | follows the graphics setting (1× to 2× the window) and lowers the scale when the frame rate drops |

The settings panel shows the size actually being rendered, and so does the FPS counter. If
a fixed resolution runs below 24 frames a second the game says so once and points at Auto.

**Film effects** sets how much the lens adds: Subtle (the default) keeps a trace of grain,
colour fringing and motion blur; Clean turns all three off; Cinematic is the heavier look
the game used to have. A sharpening pass runs on every tier, and the haze is thinner than
it was, so the far end of an avenue reads clearly.

Settings also cover handling, police, time trial, time of day, wet roads, radio, car,
camera and an FPS counter (frame time, draw calls, triangles, render size). Choices and
the best time are stored in the current browser only.

Performance work: everything repeated is instanced; the city is split into 320 m chunks
whose small details are hidden with distance and whose facades switch to a cheaper shader
far away (how far depends on the graphics setting); every piece of trim on every building
is one of two instanced shapes sharing one material; collisions, line of sight and parking go through spatial grids, so the bigger
city costs no more per frame to simulate; the shadow map is drawn once per frame however
many passes use it; the sky is repainted a sliver at a time into a panorama instead of
being computed for every pixel; occlusion, shafts and depth of field read the depth buffer
rather than drawing the city again; traffic, parked cars and pedestrians stream around the player; static props are
merged by material; and details that can't show up in reflections are kept out of the
reflection pass.

## Requirements

WebGL 2 and a current browser. A discrete or recent integrated GPU is recommended for
High and Ultra.

## Project layout

`src/` is the source; `dist/game.js` is the bundle built from it. `dist/index.html`,
`dist/style.css` and `dist/favicon.svg` are authored directly. The loading screen shows the photos in
`dist/loading/` (twelve pictures, each with a tiny pre-blurred backdrop), starting from a random
one and changing every five seconds; the cycle is pure CSS, so it keeps turning while the city is
built. Once the city is ready the photos keep cycling until you click, tap or press a key. See `HANDOFF.md` for a map
of the code. Three.js is MIT licensed (see `dist/THIRD_PARTY_LICENSES.txt`). The Barlow
typefaces load from Google Fonts, with system fonts as fallback.
