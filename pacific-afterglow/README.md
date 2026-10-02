# Pacific Afterglow

An original open-world driving game for the browser: a sunset coastal city with a
reflective ocean, a drivable pier, living traffic and a full day/night cycle. Everything
you see is generated in code. There are no downloaded models or photo textures.

It is inspired by the feel of West Coast open-world games. It is not GTA V and contains
none of its assets, map, story or characters.

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
| T | | Cycle time of day |
| H | | Horn |
| M | Back | Expand the city map |
| R | RB | Reset car (restarts the run in time trial) |
| Esc / P | Start | Pause and settings |

Touch controls appear on phones and tablets.

## What is in it

**Rendering**
- Physically based sky (Preetham scattering) with a procedural cloud deck, stars and moon.
- Time of day from first light to midnight, or a live 18-minute day cycle. The sun,
  moonlight, sky light, fog, exposure and every light in the city follow it.
- Image-based lighting regenerated from the sky. Soft sun shadows that follow the car and
  snap to whole texels so their edges don't shimmer.
- Atmospheric fog that glows toward the sun and thins with altitude.
- Ocean with Gerstner-style swell, Fresnel reflection, real planar reflections of the city
  (High and Ultra), sun glitter, shallow-water colour and breaking-wave foam.
- Buildings drawn by one facade shader: floors, window frames, reflective glass with
  slight per-pane distortion, curtain walls, brick, stucco with shutters, balconies, shop
  fronts, and offices and homes that light up at night (with the odd flickering TV).
- Asphalt with wear tracks, patches and cracks; lane markings, crosswalks and stop lines
  painted analytically so they stay sharp at any distance.
- Post-processing: MSAA, ground-truth ambient occlusion (Ultra), bloom, ACES tone mapping,
  colour grading, lens flare that is hidden when buildings or hills block the sun, speed
  blur, chromatic aberration, vignette and film grain.
- Dynamic resolution keeps the frame rate up on slower GPUs.

**World**
- A 700 × 1100 m city: a stucco coastal quarter with tile roofs and neon shop signs,
  midtown, a downtown of glass towers with glowing crowns and aircraft beacons, parks and
  parking lots.
- Beach with lifeguard towers and umbrellas, a promenade lined with tall palms, and a
  pier you can drive onto, with a Ferris wheel whose lights chase colours after dark.
- Hills ringed with chaparral, trees, houses and a hillside sign.
- Street lamps with light pools and soft light cones, working traffic signals, billboards,
  hydrants, benches and bins.

**Driving**
- Six-speed automatic gearbox with a torque curve, launch revs and shift cuts.
- Grip-limited cornering, handbrake drifts with counter-steer, nitro, weight transfer and
  suspension, sand and grass that slow you down.
- Smooth lofted car bodies with clearcoat paint, alloy wheels, brake calipers, working
  headlights (real spotlights at night), brake lights and exhaust flames on nitro.
- Tire smoke, sand dust, sparks on impact and skid marks.
- AI traffic of five vehicle types that stays in lane, stops at red lights, turns at
  intersections, keeps its distance, honks if you block it, and gets shoved when you hit it.
- Free roam and an eight-checkpoint time trial with a saved personal best.

**Sound**: a synthesized V8 with turbo whistle and blow-off, tire squeal, wind, surf near
the coast, impacts, horns and checkpoint chimes. All generated live with Web Audio.

## Graphics settings

| Setting | Resolution cap | Extras |
| --- | --- | --- |
| Ultra | 2× | 4096 shadow map, ambient occlusion, ¾-resolution reflections |
| High | 1.5× | 2048 shadows, half-resolution ocean reflections |
| Balanced | 1.2× | 2048 shadows, sky-only ocean reflections |
| Performance | 1× | 1024 shadows, no bloom or grading |

Desktop defaults to High and touch devices to Balanced. Settings, paint colour, time of
day and best time are stored in the current browser only.

## Requirements

WebGL 2 and a current browser. A discrete or recent integrated GPU is recommended for
High and Ultra.

## Project layout

`src/` is the source; `dist/game.js` is the bundle built from it. `dist/index.html`,
`dist/style.css` and `dist/favicon.svg` are authored directly. See `HANDOFF.md` for a map
of the code. Three.js is MIT licensed (see `dist/THIRD_PARTY_LICENSES.txt`). The Barlow
typefaces load from Google Fonts, with system fonts as fallback.
