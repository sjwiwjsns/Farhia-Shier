# Pacific Afterglow

An original open-world driving game for the browser: a coastal city at sunset with a
reflective ocean, a drivable pier, traffic, pedestrians, police and a full day/night cycle.
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
| M | Back | Full-screen map (click it to set a waypoint) |
| R | RB | Reset and repair the car (restarts the run in time trial) |
| Esc / P | Start | Pause and settings |
| ← → on the title screen | | Choose a car |

**Phones and tablets:** steer with the ◀ ▶ buttons on the left; hold GAS and BRAKE on the
right, with NOS and DRIFT beside them. Speed sits in a small strip at the top of the screen. CAM,
FM (radio) and ↺ (reset) sit at the top right, and the Ⅱ button pauses and opens settings. The game goes full
screen in landscape where the browser allows it, and plays in portrait too. Phones start
on the Performance graphics setting.

**Handling:** Easy (the default) adds stability control, extra grip, calmer steering at
speed, a gentle pull that keeps the car parallel to the street when you let go of the
wheel, and glancing off walls instead of stopping dead. Sport in settings is the raw car.

## What is in it

**Cars**
- Easy handling by default (see above), or Sport for the unassisted car.
- Three cars with their own engines, gearboxes and handling: the Caldera GT grand tourer
  (balanced), the Vanta SS muscle car (big torque, a tail that steps out under power) and
  the Ventus R mid-engine supercar (220 km/h, the most grip). Pick one on the title screen
  or in settings; six paint colours.
- Body roll, dive under braking, squat under power and springy suspension, tuned per car.
- Crashes dent the body where you hit (panels crumple, lamps smash) and throw sparks; a
  scrape along a wall leaves a trail of them. Reset repairs everything.
- Tire smoke and skid marks in drifts, blue-cored nitro flames, and backfires when you lift
  off at high revs.

**City**
- Eleven building types, among them glass towers, offices, art deco blocks, brick walk-ups
  with fire escapes, condos with balconies, hotels with canopies and blade signs, parking
  garages, motels and warehouses. Heights, setbacks and widths vary block by block.
- Lit shop fronts with signs and awnings, rooftop AC units, water tanks and antennas, and
  windows that are on or off at random after dark.
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
- The Sunset Run: an eight-checkpoint time trial with a 3-2-1 countdown, a GPS route along
  the streets, a finish screen with top and average speed, and a saved personal best.
- A minimap with the GPS route, traffic, police and checkpoints, and a full-screen map (M)
  where a click sets a waypoint.
- Wanted level: police who see you speeding, running red lights, crashing into people or
  cars, wrecking street furniture or ramming a cruiser give chase. Each star brings more
  units. Break their line of sight until the stars stop flashing to escape; stop next to a
  cruiser and you are busted.

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
| Ultra | 2× | 4096 shadow map, ambient occlusion, ¾-resolution reflections |
| High | 1.5× | 2048 shadows, half-resolution reflections and wet streets |
| Balanced | 1.2× | 2048 shadows, sky-only ocean reflections |
| Performance | 1× | 1024 shadows, no bloom or grading |

Desktop defaults to High and touch devices to Balanced. Dynamic resolution lowers the
render scale when the frame rate drops. Settings also cover handling, time of day, wet
roads, radio, car, camera and an FPS counter (frame time, draw calls, triangles, render scale). Choices
and the best time are stored in the current browser only.

Performance work: everything repeated is instanced; the city is split into chunks whose
small details are hidden with distance and whose facades switch to a cheaper shader far
away; traffic, parked cars and pedestrians stream around the player; static props are
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
