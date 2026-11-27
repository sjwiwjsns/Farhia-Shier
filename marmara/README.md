# Marmara 3D

A 3D map of the Marmara region of Turkey — from the Bulgarian border at Kapıkule and the
Istranca mountains, through Istanbul, down to Bursa and Uludağ and east to Sapanca Lake —
with every building in Beylikdüzü modelled in 3D.

Open `index.html` through any static web server (GitHub Pages serves it at `/marmara/`).
Everything is static: no build step, no API keys.

## Modes

| Mode | What you see |
|---|---|
| **Satellite** | Esri World Imagery draped over real terrain, with sky, haze and sun. |
| **Map** | OpenFreeMap "Liberty" street map on the same terrain, with hillshading. |
| **Topography** | Elevation colours (including the Sea of Marmara's 1,200 m deep basins), multi-directional hillshade, contour lines with heights, summit labels, 1.8× terrain. |

Controls: terrain on/off and height, 3D buildings, trees, labels, and a time-of-day slider
that moves the sun for today's date (night turns on window lights, shop fronts and street
lights). Keys: `1` `2` `3` switch modes, `O` orbits. Click any Beylikdüzü building for its
floors, height and where that number came from. The URL keeps the current view, so it can
be shared.

## Beylikdüzü in 3D

`city3d.js` is a MapLibre custom WebGL layer that turns 61,642 real footprints into
buildings: floors and windows with frames, balconies, shop fronts with awnings, parapets,
rooftop stair housings and solar water heaters, hipped terracotta roofs on small houses,
domes and minarets on the 150 mosques, and 13,941 trees.

How honest is it?

- **Footprints are real**: 44,830 from OpenStreetMap and 16,812 detected from imagery by
  Microsoft (ML Buildings), both via Overture Maps. Some buildings visible in the
  satellite photo are in neither dataset and are not drawn.
- **Heights are mostly estimated.** Only 2,772 buildings have a height (124) or floor count
  (2,648) in OpenStreetMap. The rest get a floor count estimated from footprint size and shape,
  type (house, apartment, mall, school, mosque, industrial) and the shops inside. The info
  card says which is which.
- **Names and addresses** come from OpenStreetMap POIs and house numbers inside each footprint.
- **Trees** are placed along real streets and in real parks near Paradise AVM and the two
  nearest Starbucks; they are not individually surveyed trees.
- Windows, colours and rooftop details are generated, not photographed.

## Data sources

- Basemap, labels, roads: © OpenStreetMap contributors, tiles by [OpenFreeMap](https://openfreemap.org) (OpenMapTiles schema).
- Satellite: Esri World Imagery (© Esri, Maxar, Earthstar Geographics).
- Terrain: [AWS Terrain Tiles](https://registry.opendata.aws/terrain-tiles/) (SRTM, GMTED, ETOPO1 bathymetry). The 3D terrain uses a copy with the sea floor flattened to sea level; the topography colours keep the bathymetry.
- Contours: generated in the browser by [maplibre-contour](https://github.com/onthegomap/maplibre-contour).
- Beylikdüzü footprints: [Overture Maps](https://overturemaps.org) buildings, release 2026-11-18.0 (OpenStreetMap + Microsoft ML Buildings, ODbL).
- Libraries (in `vendor/`): MapLibre GL JS 5.24.1 (BSD-3), maplibre-contour 0.1.0 (BSD-3), earcut 3.0.2 (ISC).

## Rebuilding the Beylikdüzü data

The area is the block of zoom-14 tiles x 9492–9499, y 6140–6145. With Node 18+ and Python 3:

```bash
cd marmara/tools && npm install
node fetch-tiles.mjs /tmp/ofm 14 28.57 40.955 28.72 41.045     # names, addresses, roads, parks
node fetch-dem.mjs /tmp/dem 14 9492 9499 6140 6145              # ground heights
pip install pyarrow shapely && python fetch-overture.py 2026-11-18.0 /tmp/overture.json
node bake-beylikduzu.mjs /tmp/ofm /tmp/dem /tmp/overture.json ../data/beylikduzu.json
node bake-trees.mjs /tmp/ofm /tmp/dem ../data/beylikduzu.json ../data/trees.json
```
