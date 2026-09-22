# Blaine Drive

An open-world driving simulator set in Blaine, Minnesota. It is one deployable file
(`index.html`, ~375 KB, Three.js r128 from a CDN) and runs on desktop and on phones.

Open `index.html` over HTTP (any static host; on this repo's GitHub Pages it is served at
`/blaine-drive/`). No build step is needed to play it.

## What is in it

**Road network.** The map sits on the Anoka County address grid, where numbered avenues are
1/8 mile apart. It is compressed to about half scale (1 mile = 800 m). Topology and intersection
angles are kept.

- **MN-65 (Central Ave NE):** a divided 6-lane highway, dropping to 4 lanes north of 112th.
  Signals at 99th, 105th, 109th, 117th/Cloud Dr and 125th/Main St.
- **The 2026 reconstruction zone,** 101.5th–108.5th Ave. The right lane is closed with drums,
  lanes shift toward the median, and the limit is 45 mph. It has frontage roads, bridge piers
  and a crane at 105th, plus crews on summer weekdays.
- **Freeways:** US-10 through the south-west, with diamond interchanges at University Ave and
  MN-65. I-35W runs through the south-east, with diamond interchanges at 95th Ave and
  Lexington Ave. MN-610 merges into US-10 on the west edge, with a flyover ramp. Freeways rise
  onto overpasses automatically wherever they cross a surface road.
- **Arterials:** University Ave (CR 51), Radisson Rd (CR 52), Lexington Ave (CR 17),
  Hamline Ave and Lincoln St, plus 85th through 133rd Ave.
- **Local streets** are procedural, following each district's character:
  - an older 1960s–70s grid in the south-west;
  - loops, cul-de-sacs and townhomes in the north;
  - mobile-home parks along MN-65;
  - farm fields, gravel roads and farmsteads at the north and east edges.

**Landmarks.**

- **National Sports Center:** the Schwan Super Rink with four barrel vaults, the stadium, a
  banked 250 m velodrome and 50+ soccer fields.
- **Four Seasons Curling Club,** with a giant curling-stone sculpture.
- **TPC Twin Cities:** 18 wooded holes, a clubhouse, and 3M Open grandstands and tents.
- **Blaine City Hall,** with its glass atrium.
- **Laddie Lake,** with a shoreline road on 87th Ave. In winter it freezes and ice houses appear.
- **Rice Creek,** with its creek bridges.
- **Also:** Anoka County–Blaine Airport, Northtown Mall and Blaine High School.

**Physics** (`src/physics.js`) runs at a fixed 480 Hz step:

- a 3-DOF body with four spinning wheels (linearly-implicit spin update);
- Magic-Formula tyres with combined slip, load sensitivity and tyre compounds (all-season,
  winter, summer, worn, all-terrain);
- second-order weight transfer and body roll;
- torque-curve engines, a torque converter or clutch launch, and automatic or manual gearboxes
  with shift hysteresis;
- open or limited-slip diffs; FWD, RWD and a locked-centre 4H;
- ABS, traction control, stability control and EBD;
- aero drag, rolling drag, road grade and hydroplaning.

There are four archetypes:

| | drivetrain | character |
|---|---|---|
| Mid-size sedan | FWD, 8AT | understeer-biased and forgiving; has ABS, TC and ESC |
| Full-size pickup | RWD with 4H, 10AT | high centre of gravity, soft roll, heavy |
| RWD sports coupe | RWD with LSD, 6-speed | can oversteer; summer tyres |
| Winter beater | FWD, 4AT | worn tyres, tired dampers, no driver aids |

**Minnesota weather.**

- **Temperature** follows MSP 1991–2020 monthly normals, with a daily cycle and random swings.
- **The sun** uses the NOAA solar-position equations at 45.16° N and US daylight saving, so
  summer dusk is long and winter days are short.
- **Road snow** builds up per road class. Plows and salt follow class schedules, and salt stops
  working below about 15–20 °F.
- **Plow trucks** on MN-65 work in tandem and clear the lanes they pass, both visually and
  for grip.
- **Black ice** forms on bridge decks and overpass approaches near freezing. The HUD grip
  estimate deliberately does not show it.
- **Other hazards:** a water film that causes hydroplaning above about 55 mph, wet fallen
  leaves on residential streets, and dawn fog along Rice Creek in spring and fall.
- **Summer** brings heat shimmer and road mirages.
- **Visual effects:** snow and rain particles scatter in the headlights. In the cockpit view
  the windshield fogs from your breath, the defroster warms up (slowly in the beater), frost
  forms below 15 °F, and the wipers run.
- **Events:** during USA Cup weekend and 3M Open week (approximate annual windows in July),
  traffic, parking-lot fill and shuttle buses increase around each venue.

**Traffic.**

- **Following:** cars use the Intelligent Driver Model on a lane graph, with turn-aware lane
  choice.
- **Intersections:** signals are coordinated as a northbound green wave on MN-65. Minor
  approaches get stop signs with gap acceptance; local–local crossings are all-way.
- **Behaviour:** drivers turn right on red, obey the work-zone lane closure, and react to
  crashes.
- **Density** varies with time of day, weather and events.

## Physics validation (runs before any rendering)

On load, the suite in `src/validate.js` runs in a Web Worker. Driving is unlocked only when it
finishes, and nothing is rendered before then. The same suite runs headless in CI:

```sh
node blaine-drive/validate.mjs             # 65 checks, ~2 s; exits 1 if anything is out of tolerance
node blaine-drive/validate.mjs --json
node blaine-drive/validate.mjs --vehicle beater
```

The checks for each vehicle are:

- 0–60 mph, top speed, and 60–0 braking (the beater, which has no ABS, uses threshold braking
  and must lose distance when the wheels lock);
- 200 ft skid-pad grip and understeer gradient;
- coast-down from 60 to 50 mph and standstill drift;
- idle creep with the torque converter;
- the FMVSS 126-style sine-with-dwell test and a high-speed open-loop steering pulse;
- a lap-time regression (±3 %).

Other checks cover:

- coupe power-on oversteer versus sedan power-on understeer;
- surface calibration: wet/dry ratio, snow 20–0 and glare-ice 10–0 on all-season and on
  winter tyres, and hydroplaning at 40 and 72 mph;
- snow traction order (4H beats FWD, FWD beats RWD on summer tyres);
- deterministic replay.

Current results with 480 Hz steps:

| | 0–60 | top | 60–0 | skid-pad | understeer |
|---|---|---|---|---|---|
| Sedan | 7.7 s | 130 mph (governed) | 126 ft | 0.86 g | 1.4°/g |
| Pickup | 7.2 s | 107 mph (governed) | 136 ft | 0.75 g | 1.8°/g |
| Coupe | 5.0 s | 156 mph (governed) | 114 ft | 0.98 g | 0.8°/g |
| Beater | 11.0 s | 109 mph (governed) | 149 ft | 0.75 g | 1.7°/g |

## Controls

| | |
|---|---|
| W/↑ S/↓ | throttle / brake. Holding brake at a stop engages reverse. |
| A D / ← → | steer. Keyboard steering range is reduced with speed; this is an input mapping only and does not change the tyres. |
| Space | handbrake |
| C, 1–4 | camera: chase, far, hood/cockpit, overhead |
| M | map. Click a landmark or a spot to navigate there, or teleport. |
| R | reset to road |
| H / F / G | headlights / max defrost / wipers |
| Q / E | shift down / up (switches to manual) |
| X | 4H (pickup) |
| T, [ ] | time speed, ±30 min |
| Esc | menu: conditions, trip stats, physics report |

**Gamepad:** RT/LT are the pedals, the left stick steers, A is the handbrake, Y changes camera,
LB/RB shift, and Start opens the menu.

**Touch:** drag on the left half of the screen to steer; the pedals are on the right. Tilt
steering is in the menu.

## Source layout

`index.html` is generated. Edit `src/` and rebuild:

```sh
sh blaine-drive/build.sh      # concatenates src/ into index.html
```

| file | contents |
|---|---|
| `src/physics.js` | vehicle model + archetypes (no DOM, no Three.js) |
| `src/validate.js` | validation suite (depends only on physics) |
| `src/10_core.js` | projection, geography definitions (roads, landmarks, districts), rasteriser |
| `src/20_net.js` | carriageways, interchanges, planarised road graph, overpass heights, signals, surface query |
| `src/30_gen.js` | land use, terrain, houses/commercial/farmsteads, landmarks, trees, work zone |
| `src/40_mesh.js`, `src/45_objects.js` | terrain/road/marking/bridge meshes and shaders, buildings, trees, landmarks, signs |
| `src/50_veh.js` | vehicle models, player rig (wheel-by-wheel surface sampling), collisions, camera, tracks, particles |
| `src/60_ai.js` | traffic, plows, parking |
| `src/70_env.js` | calendar, sun, climate/weather, road state, sky, precipitation, windshield |
| `src/80_ui.js` | boot/validation gate, garage, input, HUD, minimap and navigation, audio, loop |

CI (`.github/workflows/blaine-drive.yml`) checks that `index.html` matches a fresh build of
`src/`, then runs the validation suite.

## Where it departs from the real map

- **Scale:** the map is compressed about 2:1, and the HUD marks distances as "scaled". Lanes,
  vehicles and buildings are full size.
- **Local streets** are generated per district. They are not the real street layout, and
  unnamed ones show as "Local street".
- **MN-610** actually ends about 3 miles west of Blaine in Coon Rapids. Its junction with US-10
  is pulled onto the west edge of the map.
- **I-35W** is placed through Blaine's south-east, where its 95th Ave and Lexington Ave
  interchanges really are.
- **Event windows** for USA Cup and the 3M Open are approximate, and both can be forced on from
  the menu.

## References used for placement

- MnDOT, *Hwy 65 in Blaine* project (2026–2029): signals at 99th, 105th, 109th and 117th/Cloud
  Dr are being converted to interchanges, and frontage roads are being built between 99th and
  109th. <https://www.dot.state.mn.us/metro/projects/hwy65blaine/>
- Laddie Lake Park, 1051 87th Ave NE. Four Seasons Curling Club / Fogerty Arena, 9250 Lincoln
  St NE. TPC Twin Cities, 11444 Tournament Players Pkwy (off Radisson Rd). Blaine City Hall,
  10801 Town Square Dr NE. National Sports Center, 1700 105th Ave NE.
- Anoka County–Blaine Airport (ANE): runways 9/27 and 18/36, reached from US-10, MN-65 and
  CR 52.
