# Performance budgets per graphics tier

Target machine classes and budgets. The aesthetic goal at *every* tier is the same
(GTA IV-era stylized realism, smooth motion first); tiers trade reach and richness,
never the art direction.

| | **Low** | **Medium** | **High** | **Maximum** |
|---|---|---|---|---|
| Target hardware | integrated GPU / old laptop | mainstream laptop | gaming laptop / desktop | modern discrete GPU |
| Target FPS | 30+ | 40+ | 50+ | 60 |
| Render scale (pixel ratio) | 0.75 | 1.0 | 1.0 | native (≤2.0) |
| Draw distance / far plane | 9 km | 16 km | 26 km | 40 km |
| Shadows | off | 1024² PCF, 220 m frustum | 2048² PCF, 420 m | 4096² PCF, 420 m |
| Materials | Lambert (cheap flat-ish) | Standard PBR | Standard PBR | Standard PBR + fuselage env reflections |
| Reflections | none | none | env-map on glass & water | + aircraft fuselage (metalness 0.3) |
| Ambient occlusion | — | — | — | approximated via hemisphere/contact tuning (no SSAO pass — perf first) |
| Ground clutter density | 0 | 0.4 | 0.7 | 1.0 |
| Grass blades (instanced, 1 draw call) | 12 000 | 30 000 | 60 000 | 100 000 |
| Grass carpet radius (camera-following) | 150 m | 190 m | 230 m | 265 m |
| Parked aircraft at gates | 0 | ≤ ~8 (detail 0.4) | ≤ ~11 | ≤ 14 |
| Moving ground vehicles | – | – | 6 | 6 |
| Texture ceiling | liveries 1024×256, runways ≤1700px | 1536×384, ≤2550px | 2048×512, ≤3400px | 2048×512, ≤3400px, anisotropy 8 |
| Anti-aliasing | MSAA (at 0.75 scale) | MSAA | MSAA | MSAA at native DPR |

## Poly-count ceilings (approx)

| Asset | Budget |
|---|---|
| Player aircraft | 8–15 k tris (fuselage 24×26 grid, per-part control surfaces, gear) |
| Parked/AI aircraft | 2–4 k tris (detail 0.4: fewer segments, no control surfaces) |
| Terminal cluster | 1–3 k tris (boxes/cylinders/arcs + glass bands) |
| Full airport + scenery | ~120 k tris High / ~60 k Medium / ~35 k Low |
| Instancing | trees, palms, city blocks, skylines are `InstancedMesh` — 1 draw call per species |

## Where the frame time goes

- **1 draw call per particle type** (smoke/fire/sparks/dust are single `THREE.Points`
  pools with shader-attenuated sprites). Dust and smoke integrate wind advection and
  jet-blast acceleration cones on the CPU (≤ ~2 300 live particles, trivial cost).
- **1 draw call for all grass** — an `InstancedBufferGeometry` of 5-vertex blades whose
  wrap-around tile follows the camera (toroidal modulo in the vertex shader), so the
  entire blade budget always forms a dense carpet around the player. A 1024² pavement
  mask texture (rasterized once from the airport's pavement registry) is sampled per
  blade to zero-scale anything over runways/taxiways/aprons. Wind sway and jet-blast
  bending are pure vertex-shader work.
- Runway/taxiway markings are baked into canvas textures — zero marking geometry.
- Liveries are canvas textures generated once per (airline, tier) and cached for
  parked traffic.
- Shadow camera is a tight box that follows the player; scenery beyond it never
  renders into the shadow map.
- Logarithmic depth buffer avoids splitting the scene into near/far passes.

## Runtime behaviour

Tier changes from the pause menu apply renderer-level settings (pixel ratio, shadow
map) immediately; world density/draw-distance changes take effect on the next flight
(the airport is rebuilt from JSON at flight start, which keeps the switch simple and
leak-free). Physics always runs at a fixed 120 Hz regardless of render rate.
