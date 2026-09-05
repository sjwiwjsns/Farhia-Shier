# Blaine, Minnesota — open-world driving simulation

An explorable 3D recreation of Blaine, MN that runs in a browser on desktop and
mobile. One self-contained HTML file, no network requests, no downloaded models
or textures — every road, building, tree, car and cloud is generated in code at
load time.

**Play it:** open [`blaine/index.html`](index.html) in any modern browser, or
serve the repo and visit `/blaine/`.

```bash
python3 -m http.server 8000
# then http://127.0.0.1:8000/blaine/
```

---

## The map

Blaine's real street grid: numbered avenues run east–west and climb northward
one eighth of a mile apart (85th Ave NE on the south city line through 133rd at
the Ham Lake border), crossed by the arterials in their true west-to-east order.

| Corridor | In the sim |
|---|---|
| **I-35W** | Freeway along the western city line, with diamond interchanges and overpasses at 85th, 95th, 105th and 125th |
| **University Ave NE** | North–south arterial on the west side; Northtown at its south end, Blaine High School at 125th |
| **Ulysses St NE** | The commercial frontage street hugging the west side of Highway 65, running roughly 99th to 121st |
| **Central Ave NE / Highway 65** | Six-lane divided spine of the city with frontage roads and strip retail its whole length |
| **Lexington Ave NE** | North–south arterial east of Highway 65, with the retail cluster at 125th |
| **Radisson Rd NE** | East-side arterial past the sports campus and up into the Lakes |
| **109th Ave NE** | The main east–west arterial, running the full width of the city past the civic centre |

Landmarks you can drive to (menu → Teleport, or `BLAINE.teleport('velodrome')`
in the console):

- **National Sports Center** — the Super Rink, TCO Stadium's seating bowl, the
  banked velodrome, and forty soccer pitches north of 105th Ave
- **Blaine High School** at 125th & University, with its stadium and track
- **Northtown Mall** at 85th & University, plus the big-box aprons around it
- **Blaine City Hall** off 109th on Town Square Dr
- **Aquatore Park**, **Laddie Lake Park**, the **1918 Blaine Depot** on the rail
  corridor, and **Anoka County–Blaine Airport** with its runways and hangars
- **The Lakes** in the north-east — Sunrise Lake, Lakes of Radisson and the
  curving shoreline subdivisions, plus Rice Creek winding across the north

Housing density follows the real city: tight post-war blocks in the south,
1990s subdivisions through the middle, looping cul-de-sacs and then farm fields
and silos toward the rural northern edge.

## Driving

Four vehicles, each on the same single-track physics model but with genuinely
different numbers — measured from the running sim:

| | 0–60 mph | Top speed | Grip (dry / wet / snow) | Notes |
|---|---|---|---|---|
| Sedan | 8.1 s | 78 mph | 1.00 / 0.59 / 0.29 | Front drive, forgiving |
| Pickup Truck | 10.8 s | 71 mph | 1.00 / 0.63 / 0.31 | Heaviest, best traction off the tarmac |
| Sports Car | 2.2 s | 121 mph | 1.00 / 0.41 / 0.17 | Huge in the dry, treacherous in the wet |
| SUV | 9.2 s | 74 mph | 1.00 / 0.57 / 0.27 | High centre of gravity — **it will roll over** |

The model is a bicycle model with longitudinal load transfer, a simplified
Pacejka tyre curve, a friction circle limiting cornering under power or braking,
and body roll and pitch driven by the lateral and longitudinal specific forces.
Exceed a vehicle's static stability factor — `(track/2) / cg height` — for a
third of a second and it goes over; the SUV's 0.92 is reachable in a fast
sweeper, the sports car's 2.08 is not.

Grip is the product of the tyre's peak, the surface under the wheels (asphalt,
shoulder, grass, water) and the weather. Collisions use oriented-box separating
axis tests against buildings, guardrails and other traffic.

## The world simulating itself

- **Weather** is a Markov chain over clear, partly cloudy, overcast, rain,
  thunderstorm, snow, flurries and fog, re-rolled every 55–155 seconds and
  seasonally weighted (snow needs the cold). Nothing ever cuts: the chain only
  moves the *targets*, and cloud cover, precipitation, fog, wind, road wetness
  and snow cover all ease toward them over tens of seconds. Each state changes
  the lighting, the reflectivity and grip of the road, and how far you can see.
  Storms flash and rumble.
- **Day/night** uses a real solar position for Blaine's latitude, offset from
  the displayed clock by the central-time/longitude difference so sunset lands
  where it should. Streetlights, window lights, signage and headlights come on
  with the dark — or early, if the weather is bad enough.
- **Traffic** follows lane centrelines through a graph of 2,956 directed edges
  and 1,926 nodes, keeps a gap to the vehicle ahead, yields to the player, and
  stops at 31 signalised intersections and at stop signs on minor approaches.
- **Pedestrians** walk the sidewalks in the commercial and residential zones,
  head for shelter when it starts to rain, and mostly stay indoors in snow and
  in the small hours.

## Controls

**Desktop:** `WASD`/arrows to drive · `Space` handbrake · `C` camera (chase /
hood / cinematic) · `Shift` look behind · `L` headlights · `H` horn · `R`
respawn on the nearest road · `1`–`4` switch vehicle · `Esc` menu.

**Touch:** detected automatically. A draggable, self-centring steering wheel
under the left thumb, gas and brake pads under the right, handbrake/horn/camera/
menu as large buttons, and a compact speed readout between them. Portrait shows
a rotate prompt (dismissable). The HUD relayouts so nothing sits under a thumb.

## Performance

Four quality tiers set pixel ratio, shadow map size, draw distance, chunk
radius, particle counts, traffic and pedestrian population, and whether the
bloom/grade pass runs. Mobile starts at Medium (Low on low-core devices), and
the game drops a tier by itself if the real frame time stays bad for a few
seconds. The world streams in 520 m chunks around the car; roads, water and the
landmark structures are built once as merged meshes.

## Console API

`window.BLAINE` is exposed for poking at the running sim:

```js
BLAINE.state()                       // position, weather, fps, draw calls…
BLAINE.setWeather('thunderstorm')    // or 'snow', 'fog', 'clear', …
BLAINE.setTime(21.5)                 // 24-hour clock
BLAINE.setTimeScale(600)             // game-seconds per real second
BLAINE.teleport('velodrome')         // fuzzy landmark match
BLAINE.vehicle(2)                    // 0 sedan, 1 pickup, 2 sports, 3 SUV
BLAINE.setQuality('ultra')
```

## Building

`blaine/index.html` is generated — edit the sources, not the bundle:

```
blaine/src/index.template.html   markup + CSS shell
blaine/src/00-core.js            config, device tiers, math, procedural textures
blaine/src/10-city.js            the map of Blaine and the road-network graph
blaine/src/20-world.js           roads, landmarks, chunked building generation
blaine/src/30-sky.js             sun, sky shader, weather engine, precipitation
blaine/src/40-vehicle.js         vehicle dynamics and the four cars
blaine/src/50-traffic.js         AI traffic, signals, pedestrians
blaine/src/60-ui.js              input, HUD, minimap, menus, audio
blaine/src/70-main.js            renderer, cameras, post chain, game loop
blaine/vendor/three.min.js       three.js r160 (MIT), inlined into the bundle

python3 tools/build-blaine.py    # -> blaine/index.html
```

Rendering is three.js r160, vendored so the build needs no network access and
the deliverable makes no external requests.
