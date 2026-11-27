/* Marmara 3D — a 3D map of the Marmara region, from the Bulgarian border to
 * Bursa and Sapanca. Satellite / street map / topography modes on real terrain,
 * with every Beylikdüzü building modelled in 3D (see city3d.js).
 */
(function () {
  'use strict';

  const $ = (s) => document.querySelector(s);
  const OFM_STYLE = 'https://tiles.openfreemap.org/styles/liberty';
  const ESRI = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
  const DEM = 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png';
  const REGION_FIT = [[25.95, 39.92], [30.5, 42.12]];
  const MAX_BOUNDS = [[23.5, 37.8], [33.0, 44.2]];
  // z14 tiles covered by the baked Beylikdüzü model (OSM's own flat buildings are removed there)
  const BAKED = { x0: 9492, x1: 9499, y0: 6140, y1: 6145 };

  const PLACES = [
    { group: 'Beylikdüzü 3D', items: [
      { id: 'beylikduzu', name: 'Beylikdüzü overview', sub: 'Every building in 3D', c: [28.638, 41.0], z: 14.7, p: 62, b: -25 },
      { id: 'paradise', name: 'Paradise AVM', sub: 'Gülyalı Cd., Yeşilkent', c: [28.62532, 41.00403], z: 17.6, p: 66, b: 35, star: true },
      { id: 'sb-yesilkent', name: 'Starbucks — Yeşilkent', sub: 'Anadolu Cd., ~1 km south of Paradise AVM', c: [28.62599, 40.99529], z: 17.8, p: 66, b: -30, star: true },
      { id: 'sb-teras', name: 'Starbucks — Park Teras', sub: 'Adnan Kahveci, ~1 km east of Paradise AVM', c: [28.63764, 41.00325], z: 17.8, p: 66, b: 20 },
      { id: 'perlavista', name: 'Perlavista AVM', sub: 'Cumhuriyet', c: [28.62748, 41.01601], z: 17, p: 64, b: 10 },
      { id: 'beylicium', name: 'Beylicium AVM', sub: 'Barış', c: [28.64921, 41.01155], z: 17, p: 64, b: -15 },
      { id: 'marmarapark', name: 'Marmara Park', sub: 'Esenyurt border', c: [28.65933, 41.00968], z: 16.8, p: 64, b: 25 },
      { id: 'torium', name: 'Torium AVM', sub: 'Haramidere', c: [28.68824, 41.00389], z: 17, p: 64, b: 0 },
    ] },
    { group: 'Istanbul', items: [
      { id: 'sultanahmet', name: 'Historic Peninsula', sub: 'Sultanahmet · Hagia Sophia', c: [28.977, 41.0075], z: 15.2, p: 62, b: -30 },
      { id: 'bosphorus', name: 'Bosphorus', sub: 'Europe ↔ Asia', c: [29.045, 41.075], z: 12.6, p: 66, b: 20 },
      { id: 'levent', name: 'Levent skyline', sub: 'Business district', c: [29.0105, 41.0805], z: 15.4, p: 66, b: -20 },
      { id: 'adalar', name: 'Princes’ Islands', sub: 'Büyükada', c: [29.12, 40.86], z: 13, p: 60, b: -10 },
    ] },
    { group: 'Thrace & the border', items: [
      { id: 'kapikule', name: 'Kapıkule — Bulgaria border', sub: 'Edirne', c: [26.665, 41.718], z: 13.4, p: 58, b: -40 },
      { id: 'edirne', name: 'Edirne — Selimiye', sub: 'Old capital', c: [26.5594, 41.6781], z: 15.2, p: 62, b: 30 },
      { id: 'istranca', name: 'Istranca mountains', sub: 'Strandzha, Black Sea coast', c: [27.75, 41.82], z: 10.2, p: 68, b: 160 },
      { id: 'tekirdag', name: 'Tekirdağ', sub: 'Sea of Marmara', c: [27.51, 40.975], z: 12.2, p: 60, b: 0 },
    ] },
    { group: 'South & east', items: [
      { id: 'bursa', name: 'Bursa', sub: 'City at the foot of Uludağ', c: [29.06, 40.19], z: 12.4, p: 64, b: 160 },
      { id: 'uludag', name: 'Uludağ — 2,543 m', sub: 'Highest point of the region', c: [29.17, 40.115], z: 11.6, p: 72, b: 150 },
      { id: 'sapanca', name: 'Sapanca Lake', sub: 'Sakarya', c: [30.22, 40.705], z: 12, p: 64, b: -70 },
      { id: 'izmit', name: 'İzmit Bay', sub: 'Kocaeli', c: [29.8, 40.73], z: 11.4, p: 64, b: 80 },
    ] },
  ];

  const LANDMARKS = [
    { name: 'Paradise AVM', kind: 'mall', c: [28.62532, 41.00403], hero: 1 },
    { name: 'Starbucks', kind: 'coffee', c: [28.62599, 40.99529], hero: 1 },
    { name: 'Starbucks', kind: 'coffee', c: [28.63764, 41.00325], hero: 0 },
    { name: 'Starbucks', kind: 'coffee', c: [28.59261, 41.01605], hero: 0 },
    { name: 'Starbucks', kind: 'coffee', c: [28.65711, 41.00675], hero: 0 },
    { name: 'Starbucks', kind: 'coffee', c: [28.65378, 41.00487], hero: 0 },
    { name: 'Starbucks', kind: 'coffee', c: [28.65763, 40.98415], hero: 0 },
    { name: 'Starbucks', kind: 'coffee', c: [28.68815, 41.00354], hero: 0 },
    { name: 'Perlavista AVM', kind: 'mall', c: [28.62748, 41.01601], hero: 0 },
    { name: 'Beylicium AVM', kind: 'mall', c: [28.64921, 41.01155], hero: 0 },
    { name: 'Marmara Park', kind: 'mall', c: [28.65933, 41.00968], hero: 0 },
    { name: 'Torium AVM', kind: 'mall', c: [28.68824, 41.00389], hero: 0 },
    { name: 'Park Teras AVM', kind: 'mall', c: [28.63786, 41.00308], hero: 0 },
  ];

  const state = {
    mode: 'satellite', terrain: true, exag: { satellite: 1.2, map: 1.2, topo: 1.8 }, labels: true, buildings: true, trees: true,
    hour: 15.5,
  };

  // ------------------------------------------------------------ protocols
  // OpenFreeMap vector tiles, minus the flat OSM buildings where the 3D model replaces them
  function readVarint(b, p) { let v = 0, s = 0, c; do { c = b[p.i++]; v += (c & 0x7f) * Math.pow(2, s); s += 7; } while (c & 0x80); return v; }
  function stripLayer(buf, drop) {
    const b = new Uint8Array(buf); const keep = []; const p = { i: 0 };
    while (p.i < b.length) {
      const start = p.i; const tag = readVarint(b, p); const wire = tag & 7;
      if (wire === 2) {
        const len = readVarint(b, p); const bodyStart = p.i; p.i += len;
        if ((tag >> 3) === 3) {
          // find the layer name (field 1)
          const q = { i: bodyStart }; let name = '';
          while (q.i < bodyStart + len) { const t = readVarint(b, q); const w = t & 7; if (w === 2) { const l = readVarint(b, q); if ((t >> 3) === 1) { name = new TextDecoder().decode(b.subarray(q.i, q.i + l)); break; } q.i += l; } else if (w === 0) readVarint(b, q); else if (w === 5) q.i += 4; else if (w === 1) q.i += 8; else break; }
          if (name === drop) continue;
        }
        keep.push(b.subarray(start, p.i));
      } else if (wire === 0) { readVarint(b, p); keep.push(b.subarray(start, p.i)); }
      else if (wire === 5) { p.i += 4; keep.push(b.subarray(start, p.i)); }
      else if (wire === 1) { p.i += 8; keep.push(b.subarray(start, p.i)); }
      else return buf;
    }
    const total = keep.reduce((s, k) => s + k.length, 0); const out = new Uint8Array(total); let o = 0; for (const k of keep) { out.set(k, o); o += k.length; }
    return out.buffer;
  }
  function insideBaked(z, x, y) {
    if (z < 13) return false;
    const s = Math.pow(2, 14 - z); // z13 → 2, z14 → 1
    return x * s >= BAKED.x0 && (x + 1) * s - 1 <= BAKED.x1 && y * s >= BAKED.y0 && (y + 1) * s - 1 <= BAKED.y1;
  }
  maplibregl.addProtocol('ofm', async (params, abort) => {
    const url = params.url.replace('ofm://', 'https://');
    const res = await fetch(url, { signal: abort.signal });
    if (!res.ok) throw new Error(`tile ${res.status}`);
    let data = await res.arrayBuffer();
    const m = url.match(/\/(\d+)\/(\d+)\/(\d+)\.pbf/);
    if (m && insideBaked(+m[1], +m[2], +m[3])) data = stripLayer(data, 'building');
    return { data };
  });
  // terrain DEM with the sea floor flattened to sea level (the source includes bathymetry)
  maplibregl.addProtocol('demc', async (params, abort) => {
    const url = params.url.replace('demc://', 'https://');
    const res = await fetch(url, { signal: abort.signal });
    if (!res.ok) throw new Error(`dem ${res.status}`);
    const bmp = await createImageBitmap(await res.blob(), { premultiplyAlpha: 'none', colorSpaceConversion: 'none' });
    const cv = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(bmp.width, bmp.height) : Object.assign(document.createElement('canvas'), { width: bmp.width, height: bmp.height });
    const ctx = cv.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(bmp, 0, 0);
    const img = ctx.getImageData(0, 0, bmp.width, bmp.height); const d = img.data;
    for (let i = 0; i < d.length; i += 4) if (d[i] < 128) { d[i] = 128; d[i + 1] = 0; d[i + 2] = 0; }
    return { data: await createImageBitmap(img, { premultiplyAlpha: 'none', colorSpaceConversion: 'none' }) };
  });

  // ------------------------------------------------------------ sun
  function sunPosition(hour, date = new Date(), lat = 41.0, lon = 28.98, tz = 3) {
    const start = Date.UTC(date.getUTCFullYear(), 0, 0); const doy = Math.floor((date - start) / 864e5);
    const g = 2 * Math.PI / 365 * (doy - 1 + (hour - 12) / 24);
    const eqt = 229.18 * (0.000075 + 0.001868 * Math.cos(g) - 0.032077 * Math.sin(g) - 0.014615 * Math.cos(2 * g) - 0.040849 * Math.sin(2 * g));
    const decl = 0.006918 - 0.399912 * Math.cos(g) + 0.070257 * Math.sin(g) - 0.006758 * Math.cos(2 * g) + 0.000907 * Math.sin(2 * g) - 0.002697 * Math.cos(3 * g) + 0.00148 * Math.sin(3 * g);
    const tst = hour * 60 + eqt + 4 * lon - 60 * tz;
    const ha = (tst / 4 - 180) * Math.PI / 180, la = lat * Math.PI / 180;
    const cz = Math.max(-1, Math.min(1, Math.sin(la) * Math.sin(decl) + Math.cos(la) * Math.cos(decl) * Math.cos(ha)));
    const alt = 90 - Math.acos(cz) * 180 / Math.PI;
    const az = (Math.atan2(Math.sin(ha), Math.cos(ha) * Math.sin(la) - Math.tan(decl) * Math.cos(la)) * 180 / Math.PI + 180) % 360;
    return { alt, az };
  }
  const lerp = (a, b, t) => a + (b - a) * t;
  const mix3 = (a, b, t) => a.map((v, i) => lerp(v, b[i], t));
  const sstep = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const hex = (c) => '#' + c.map((v) => Math.round(Math.max(0, Math.min(1, v)) * 255).toString(16).padStart(2, '0')).join('');
  function lighting(hour) {
    const { alt, az } = sunPosition(hour);
    const day = sstep(-4, 12, alt);        // 0 night → 1 day
    const golden = sstep(-3, 4, alt) * (1 - sstep(8, 22, alt));
    const night = 1 - sstep(-9, 1, alt);
    const a = alt * Math.PI / 180, zr = az * Math.PI / 180;
    let sun = [Math.sin(zr) * Math.cos(a), Math.cos(zr) * Math.cos(a), Math.sin(a)];
    if (alt < 2) { // light from a high moon at night
      const m = [0.35, -0.45, 0.82]; const l = Math.hypot(...m); sun = mix3(sun.map((v, i) => (i === 2 ? Math.max(v, 0.05) : v)), m.map((v) => v / l), sstep(2, -6, alt));
      const l2 = Math.hypot(...sun); sun = sun.map((v) => v / l2);
    }
    let sunCol = mix3([0.10, 0.12, 0.18], [0.74, 0.71, 0.64], day);
    sunCol = mix3(sunCol, [0.95, 0.58, 0.32], golden * 0.85);
    const sky = mix3([0.06, 0.08, 0.14], [0.46, 0.51, 0.58], day);
    const gnd = mix3([0.03, 0.035, 0.05], [0.32, 0.30, 0.26], day);
    let fog = mix3([0.05, 0.07, 0.12], [0.78, 0.84, 0.92], day); fog = mix3(fog, [0.93, 0.70, 0.52], golden * 0.6);
    let skyTop = mix3([0.02, 0.04, 0.10], [0.36, 0.60, 0.92], day); skyTop = mix3(skyTop, [0.32, 0.38, 0.62], golden * 0.5);
    let horizon = mix3([0.08, 0.10, 0.18], [0.86, 0.91, 0.97], day); horizon = mix3(horizon, [1.0, 0.66, 0.42], golden * 0.85);
    return { alt, az, day, golden, night, sun, sunCol, sky, gnd, fog, skyTop, horizon };
  }

  // ------------------------------------------------------------ boot
  const status = (t) => { const el = $('#status'); if (!t) { el.hidden = true; return; } el.hidden = false; $('#statusText').textContent = t; };

  async function boot() {
    if (matchMedia('(max-width: 760px)').matches) document.body.classList.remove('panel-open');
    // start in clear afternoon light: 1.5 h after today's solar noon
    { let noon = 12, best = -90; for (let h = 9; h <= 15; h += 0.05) { const a = sunPosition(h).alt; if (a > best) { best = a; noon = h; } } state.hour = Math.round((noon + 1.5) * 20) / 20; $('#time').value = state.hour; }
    let base;
    try {
      base = await (await fetch(OFM_STYLE)).json();
      const tj = await (await fetch(base.sources.openmaptiles.url)).json();
      base.sources.openmaptiles = { type: 'vector', tiles: tj.tiles.map((t) => t.replace(/^https:\/\//, 'ofm://')), minzoom: tj.minzoom || 0, maxzoom: Math.min(14, tj.maxzoom || 14), attribution: '<a href="https://openfreemap.org" target="_blank">OpenFreeMap</a> <a href="https://www.openmaptiles.org/" target="_blank">© OpenMapTiles</a> Data from <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>' };
    } catch (e) {
      $('#boot').classList.add('failed');
      $('#bootText').textContent = 'Could not reach the map servers (OpenFreeMap). Check your connection and reload.';
      throw e;
    }
    const style = buildStyle(base);
    const map = new maplibregl.Map({
      container: 'map', style, bounds: REGION_FIT, fitBoundsOptions: { padding: regionPadding() }, maxBounds: MAX_BOUNDS, minZoom: 6, maxZoom: 19.4, maxPitch: 82,
      hash: 'view', attributionControl: false, canvasContextAttributes: { antialias: true }, fadeDuration: 200,
    });
    window.marmara = { map, state };
    map.addControl(new maplibregl.NavigationControl({ visualizePitch: true, showZoom: true }), 'bottom-right');
    map.addControl(new maplibregl.AttributionControl({ compact: true, customAttribution: 'Beylikdüzü 3D: <a href="https://overturemaps.org" target="_blank">Overture Maps</a> (OSM + Microsoft ML Buildings)' }), 'bottom-right');
    map.addControl(new maplibregl.FullscreenControl(), 'bottom-right');

    const city = new City3D({
      id: 'beylikduzu-3d', buildingsUrl: 'data/beylikduzu.json', treesUrl: 'data/trees.json',
      landmarkNames: [/Paradise AVM/, /^Starbucks/],
      onProgress: (t) => status(t),
    });
    window.marmara.city = city;

    map.on('load', () => {
      $('#boot').classList.add('done');
      const attrib = document.querySelector('.maplibregl-ctrl-attrib'); if (attrib) attrib.classList.remove('maplibregl-compact-show');
      // drawn after the map's own labels so buildings hide the street names behind them; landmark markers stay on top
      map.addLayer(city, 'landmark-halo');
      applyMode(map, city);
      applyTime(map, city);
      city.load().then((s) => {
        $('#statBuildings').textContent = s.buildings.toLocaleString();
        $('#statTrees').textContent = s.trees.toLocaleString();
        $('#cityStats').hidden = false;
      }).catch((e) => { console.error(e); status('Beylikdüzü 3D model failed to load: ' + e.message); });
      wireUI(map, city);
    });
    // the OpenFreeMap sprite lacks a few POI icons: give them an empty image instead of warnings
    map.on('styleimagemissing', (e) => { if (!map.hasImage(e.id)) map.addImage(e.id, { width: 1, height: 1, data: new Uint8Array(4) }); });
    map.on('error', (e) => { if (e && e.error && !/abort/i.test(String(e.error.message))) console.warn('map error', e.error.message || e.error); });
  }

  function regionPadding() {
    const panel = document.body.classList.contains('panel-open') && !matchMedia('(max-width: 760px)').matches;
    return { top: 30, bottom: 30, right: 30, left: panel ? 350 : 30 };
  }

  function firstSymbolLayer(map) { const l = map.getStyle().layers.find((x) => x.type === 'symbol'); return l && l.id; }

  function buildStyle(base) {
    const s = base;
    s.projection = { type: 'mercator' };
    s.sources.satellite = { type: 'raster', tiles: [ESRI], tileSize: 256, maxzoom: 19, attribution: 'Imagery © <a href="https://www.esri.com" target="_blank">Esri</a>, Maxar, Earthstar Geographics' };
    s.sources['dem-terrain'] = { type: 'raster-dem', tiles: [DEM.replace('https://', 'demc://')], encoding: 'terrarium', tileSize: 256, maxzoom: 14, attribution: 'Terrain © <a href="https://registry.opendata.aws/terrain-tiles/" target="_blank">AWS Terrain Tiles</a>' };
    let contourUrl = null, shadeTiles = [DEM];
    try {
      const dem = new mlcontour.DemSource({ url: DEM, encoding: 'terrarium', maxzoom: 13, worker: true, cacheSize: 200 });
      dem.setupMaplibre(maplibregl);
      shadeTiles = [dem.sharedDemProtocolUrl];
      contourUrl = dem.contourProtocolUrl({ thresholds: { 7: [500, 1000], 8: [200, 1000], 9: [100, 500], 10: [100, 500], 11: [50, 250], 12: [50, 250], 13: [20, 100], 14: [10, 50], 15: [10, 50] }, contourLayer: 'contours', elevationKey: 'ele', levelKey: 'level', extent: 4096, buffer: 1 });
    } catch (e) { console.warn('contours unavailable', e); }
    s.sources['dem-shade'] = { type: 'raster-dem', tiles: shadeTiles, encoding: 'terrarium', tileSize: 256, maxzoom: 13 };
    if (contourUrl) s.sources.contours = { type: 'vector', tiles: [contourUrl], maxzoom: 15 };
    s.sources.landmarks = { type: 'geojson', data: { type: 'FeatureCollection', features: LANDMARKS.map((l) => ({ type: 'Feature', properties: { name: l.name, kind: l.kind, hero: l.hero }, geometry: { type: 'Point', coordinates: l.c } })) } };

    const L = s.layers;
    const at = (id) => { const i = L.findIndex((l) => l.id === id); return i < 0 ? L.length : i; };
    const insertBefore = (id, ...layers) => L.splice(at(id), 0, ...layers);
    const afterBg = at('background') + 1;
    L.splice(afterBg, 0,
      { id: 'satellite', type: 'raster', source: 'satellite', paint: { 'raster-fade-duration': 150, 'raster-resampling': 'linear' } },
      { id: 'color-relief', type: 'color-relief', source: 'dem-shade', layout: { visibility: 'none' }, paint: { 'color-relief-opacity': 1, 'color-relief-color': ['interpolate', ['linear'], ['elevation'],
        -1300, '#081f3a', -900, '#0e3560', -500, '#174c80', -200, '#22659c', -60, '#3d84b8', -15, '#6ea9d2', -1, '#a8d0e8', 0, '#86b872', 40, '#9cc47c', 120, '#bcd18a', 250, '#dcdc9c', 450, '#e8d49a', 700, '#d9b37e', 1000, '#c49468', 1400, '#a87957', 1800, '#94705e', 2150, '#a99a92', 2400, '#e9e6e2', 2600, '#ffffff'] } },
    );
    insertBefore('waterway_tunnel',
      { id: 'hillshade', type: 'hillshade', source: 'dem-shade', paint: { 'hillshade-method': 'multidirectional', 'hillshade-exaggeration': 0.35, 'hillshade-shadow-color': ['#473B24', '#473B24', '#473B24', '#473B24'], 'hillshade-highlight-color': ['#ffffff', '#ffffff', '#ffffff', '#ffffff'], 'hillshade-illumination-direction': [270, 315, 0, 45], 'hillshade-illumination-altitude': [30, 30, 30, 30] } },
    );
    if (contourUrl) {
      insertBefore(L.find((l) => l.id.startsWith('tunnel_')).id,
        { id: 'contour-lines', type: 'line', source: 'contours', 'source-layer': 'contours', layout: { visibility: 'none' }, paint: {
          'line-color': ['case', ['<', ['get', 'ele'], 0], 'rgba(20,60,110,0.35)', 'rgba(95,60,30,0.55)'],
          'line-width': ['match', ['get', 'level'], 1, 1.1, 0.5] } },
      );
    }
    insertBefore('building',
      { id: 'night-glow', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', minzoom: 8, filter: ['match', ['get', 'class'], ['motorway', 'trunk', 'primary', 'secondary', 'tertiary', 'minor'], true, false],
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': ['match', ['get', 'class'], ['motorway', 'trunk'], '#ffc46b', '#ffab55'], 'line-width': ['interpolate', ['exponential', 1.6], ['zoom'], 8, ['match', ['get', 'class'], ['motorway', 'trunk', 'primary'], 1.2, 0.3], 12, ['match', ['get', 'class'], ['motorway', 'trunk', 'primary'], 3, 1.2], 16, ['match', ['get', 'class'], ['motorway', 'trunk', 'primary'], 14, 6]],
          'line-blur': ['interpolate', ['linear'], ['zoom'], 8, 1, 16, 8], 'line-opacity': 0 } },
    );
    if (contourUrl) {
      L.push({ id: 'contour-labels', type: 'symbol', source: 'contours', 'source-layer': 'contours', filter: ['all', ['>', ['get', 'level'], 0], ['>=', ['get', 'ele'], 0]], layout: { visibility: 'none', 'symbol-placement': 'line', 'text-size': 10, 'text-field': ['concat', ['number-format', ['get', 'ele'], {}], ' m'], 'text-font': ['Noto Sans Regular'], 'text-max-angle': 25, 'symbol-spacing': 320 }, paint: { 'text-color': '#5a3a1c', 'text-halo-color': 'rgba(255,255,240,0.85)', 'text-halo-width': 1.2 } });
    }
    L.push(
      { id: 'peaks', type: 'symbol', source: 'openmaptiles', 'source-layer': 'mountain_peak', filter: ['has', 'ele'], layout: { visibility: 'none', 'text-field': ['concat', '▲ ', ['coalesce', ['get', 'name:latin'], ['get', 'name']], '\n', ['to-string', ['get', 'ele']], ' m'], 'text-font': ['Noto Sans Bold'], 'text-size': ['interpolate', ['linear'], ['zoom'], 8, 10, 13, 13], 'text-anchor': 'bottom', 'symbol-sort-key': ['-', 0, ['get', 'ele']] }, paint: { 'text-color': '#3b2a14', 'text-halo-color': 'rgba(255,250,235,0.9)', 'text-halo-width': 1.5 } },
      { id: 'landmark-halo', type: 'circle', source: 'landmarks', minzoom: 11, paint: { 'circle-radius': ['interpolate', ['linear'], ['zoom'], 11, ['case', ['==', ['get', 'hero'], 1], 5, 3], 17, ['case', ['==', ['get', 'hero'], 1], 11, 7]], 'circle-color': ['match', ['get', 'kind'], 'coffee', '#00704a', '#e8a33a'], 'circle-stroke-color': '#ffffff', 'circle-stroke-width': ['case', ['==', ['get', 'hero'], 1], 3, 1.5], 'circle-pitch-alignment': 'viewport' } },
      { id: 'landmark-labels', type: 'symbol', source: 'landmarks', minzoom: 13.5, filter: ['!=', ['get', 'hero'], 1], layout: { 'text-field': ['get', 'name'], 'text-font': ['Noto Sans Bold'], 'text-size': 12, 'text-offset': [0, 1.0], 'text-anchor': 'top' }, paint: { 'text-color': '#ffffff', 'text-halo-color': ['match', ['get', 'kind'], 'coffee', '#00563a', '#5a3a0a'], 'text-halo-width': 2 } },
      { id: 'landmark-labels-hero', type: 'symbol', source: 'landmarks', minzoom: 12, filter: ['==', ['get', 'hero'], 1], layout: { 'text-field': ['get', 'name'], 'text-font': ['Noto Sans Bold'], 'text-size': 15, 'text-offset': [0, 1.1], 'text-anchor': 'top', 'text-allow-overlap': true, 'text-ignore-placement': true }, paint: { 'text-color': '#ffffff', 'text-halo-color': ['match', ['get', 'kind'], 'coffee', '#00563a', '#5a3a0a'], 'text-halo-width': 2.2 } },
    );
    // calmer, realistic colours for OSM 3D buildings outside Beylikdüzü
    for (const l of L) if (l.type === 'symbol' && l.layout && l.layout['symbol-placement'] === 'line' && /highway-name|waterway_line_label|water_name_line/.test(l.id)) { l.layout['text-pitch-alignment'] = 'viewport'; }
    const b3 = L.find((l) => l.id === 'building-3d');
    if (b3) {
      b3.minzoom = 13.5;
      b3.paint = { 'fill-extrusion-color': ['interpolate', ['linear'], ['coalesce', ['get', 'render_height'], 5], 0, '#e2dccf', 30, '#dcd8d0', 80, '#c9d0d6', 200, '#b5c3d0'],
        'fill-extrusion-height': ['interpolate', ['linear'], ['zoom'], 13.5, 0, 14.5, ['coalesce', ['get', 'render_height'], 5]], 'fill-extrusion-base': ['coalesce', ['get', 'render_min_height'], 0], 'fill-extrusion-opacity': 0.96, 'fill-extrusion-vertical-gradient': true };
    }
    s.light = { anchor: 'map', position: [1.15, 210, 30], color: '#ffffff', intensity: 0.4 };
    return s;
  }

  // ------------------------------------------------------------ modes
  const FILLS = ['park', 'park_outline', 'landuse_residential', 'landcover_wood', 'landcover_grass', 'landcover_ice', 'landcover_wetland', 'landuse_pitch', 'landuse_track', 'landuse_cemetery', 'landuse_hospital', 'landuse_school', 'landcover_sand', 'aeroway_fill', 'building', 'natural_earth'];
  const isRoad = (id) => /^(tunnel_|road_|bridge_|aeroway_runway|aeroway_taxiway)/.test(id);
  const isWaterway = (id) => /^waterway_/.test(id) && !/label/.test(id);
  const setVis = (map, id, on) => { if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', on ? 'visible' : 'none'); };

  function applyMode(map, city) {
    const m = state.mode;
    const layers = map.getStyle().layers;
    const sat = m === 'satellite', topo = m === 'topo', street = m === 'map';
    setVis(map, 'satellite', sat);
    if (map.getLayer('background')) { if (!state.bgColor) state.bgColor = map.getPaintProperty('background', 'background-color'); map.setPaintProperty('background', 'background-color', sat ? '#3b3f37' : state.bgColor); }
    setVis(map, 'color-relief', topo);
    setVis(map, 'hillshade', !sat);
    if (map.getLayer('hillshade')) {
      map.setPaintProperty('hillshade', 'hillshade-exaggeration', topo ? 0.75 : 0.32);
      map.setPaintProperty('hillshade', 'hillshade-shadow-color', topo ? ['#2b2416', '#2b2416', '#2b2416', '#2b2416'] : ['#473B24', '#473B24', '#473B24', '#473B24']);
    }
    setVis(map, 'contour-lines', topo); setVis(map, 'contour-labels', topo && state.labels); setVis(map, 'peaks', topo && state.labels);
    for (const id of FILLS) setVis(map, id, street);
    setVis(map, 'water', !sat);
    if (map.getLayer('water')) { map.setPaintProperty('water', 'fill-opacity', topo ? 0.35 : 1); }
    for (const l of layers) {
      if (isRoad(l.id) || isWaterway(l.id)) {
        setVis(map, l.id, !sat);
        if (l.type === 'line') map.setPaintProperty(l.id, 'line-opacity', topo ? 0.5 : 1);
      }
      if (l.type === 'symbol' && !['peaks', 'contour-labels', 'landmark-labels', 'landmark-labels-hero'].includes(l.id)) setVis(map, l.id, state.labels);
    }
    if (map.getLayer('road_area_pattern')) setVis(map, 'road_area_pattern', street);
    // keep satellite views clean: province lines and minor POI icons only on the other maps
    setVis(map, 'boundary_3', !sat);
    setVis(map, 'poi_r20', state.labels && !sat);
    setVis(map, 'building-3d', state.buildings && !topo);
    setVis(map, 'landmark-labels', state.labels); setVis(map, 'landmark-labels-hero', state.labels);
    city.setVisible(state.buildings);
    city.setMono(topo);
    if (state.terrain) map.setTerrain({ source: 'dem-terrain', exaggeration: state.exag[m] }); else map.setTerrain(null);
    $('#exag').value = state.exag[m]; $('#exagVal').textContent = state.exag[m].toFixed(1) + '×';
    $('#legend').hidden = !topo;
    document.body.dataset.mode = m;
    for (const b of document.querySelectorAll('[data-mode-btn]')) b.setAttribute('aria-pressed', String(b.dataset.modeBtn === m));
    applyTime(map, city);
  }

  function applyTime(map, city) {
    const L = lighting(state.hour);
    city.setLight({ sun: L.sun, sunCol: L.sunCol, sky: L.sky, gnd: L.gnd, fog: L.fog, night: L.night });
    map.setSky({
      'sky-color': hex(L.skyTop), 'horizon-color': hex(L.horizon), 'fog-color': hex(L.fog),
      'fog-ground-blend': 0.55, 'horizon-fog-blend': 0.6, 'sky-horizon-blend': 0.55,
      'atmosphere-blend': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 1, 12, 0.4, 15, 0.1],
    });
    const polar = Math.max(5, Math.min(85, 90 - Math.max(L.alt, 8)));
    map.setLight({ anchor: 'map', position: [1.3, (L.az + 180) % 360, polar], color: hex(mix3([0.55, 0.6, 0.8], [1, 0.95, 0.85], L.day)), intensity: lerp(0.15, 0.42, L.day) });
    if (map.getLayer('satellite')) {
      map.setPaintProperty('satellite', 'raster-brightness-max', lerp(1, 0.2, L.night));
      map.setPaintProperty('satellite', 'raster-saturation', lerp(0.05, -0.55, L.night) + 0.12 * L.golden);
      map.setPaintProperty('satellite', 'raster-contrast', 0.06 + 0.1 * L.night);
    }
    if (map.getLayer('color-relief')) map.setPaintProperty('color-relief', 'color-relief-opacity', lerp(1, 0.45, L.night));
    if (map.getLayer('night-glow')) map.setPaintProperty('night-glow', 'line-opacity', state.mode === 'topo' ? 0 : sstep(0.25, 0.85, L.night) * 0.85);
    const hh = Math.floor(state.hour), mm = Math.round((state.hour - hh) * 60);
    $('#timeVal').textContent = `${String(hh).padStart(2, '0')}:${String(mm % 60).padStart(2, '0')}`;
    $('#sunInfo').textContent = L.alt > 0 ? `Sun ${L.alt.toFixed(0)}° up, ${compass(L.az)}` : L.alt > -6 ? 'Twilight' : 'Night — lights on';
  }
  const compass = (az) => ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'][Math.round(az / 45) % 8];

  // ------------------------------------------------------------ UI
  function wireUI(map, city) {
    // modes
    for (const b of document.querySelectorAll('[data-mode-btn]')) b.addEventListener('click', () => { state.mode = b.dataset.modeBtn; applyMode(map, city); });
    // toggles
    $('#tTerrain').addEventListener('change', (e) => { state.terrain = e.target.checked; applyMode(map, city); });
    $('#tBuildings').addEventListener('change', (e) => { state.buildings = e.target.checked; applyMode(map, city); });
    $('#tTrees').addEventListener('change', (e) => { state.trees = e.target.checked; city.setTrees(state.trees); });
    $('#tLabels').addEventListener('change', (e) => { state.labels = e.target.checked; applyMode(map, city); });
    $('#exag').addEventListener('input', (e) => {
      state.exag[state.mode] = +e.target.value; $('#exagVal').textContent = (+e.target.value).toFixed(1) + '×';
      if (state.terrain) map.setTerrain({ source: 'dem-terrain', exaggeration: +e.target.value });
    });
    $('#time').addEventListener('input', (e) => { state.hour = +e.target.value; applyTime(map, city); });
    for (const b of document.querySelectorAll('[data-hour]')) b.addEventListener('click', () => { state.hour = +b.dataset.hour; $('#time').value = state.hour; applyTime(map, city); });
    // presets follow today's sun in Istanbul
    const scan = (from, to, pred) => { for (let h = from; h <= to; h += 0.05) if (pred(sunPosition(h).alt)) return h; return null; };
    let noon = 12, best = -90; for (let h = 9; h <= 15; h += 0.05) { const a = sunPosition(h).alt; if (a > best) { best = a; noon = h; } }
    const presets = { Morning: scan(4, noon, (a) => a > 12), Noon: noon, 'Golden hour': scan(noon, 22, (a) => a < 7), Night: (scan(noon, 23.5, (a) => a < -10) || 21) + 0.5 };
    for (const b of document.querySelectorAll('[data-hour]')) { const h = presets[b.textContent.trim()]; if (h != null) b.dataset.hour = h.toFixed(2); }
    $('#nowBtn').addEventListener('click', () => {
      const ist = new Date(Date.now() + 3 * 3600e3); state.hour = ist.getUTCHours() + ist.getUTCMinutes() / 60; $('#time').value = state.hour; applyTime(map, city);
    });

    // places
    const list = $('#places');
    for (const g of PLACES) {
      const h = document.createElement('div'); h.className = 'pgroup'; h.textContent = g.group; list.appendChild(h);
      for (const p of g.items) {
        const b = document.createElement('button'); b.className = 'place' + (p.star ? ' star' : ''); b.type = 'button';
        b.innerHTML = `<span class="pn"></span><span class="ps"></span>`; b.querySelector('.pn').textContent = p.name; b.querySelector('.ps').textContent = p.sub;
        b.addEventListener('click', () => { flyTo(map, p); if (matchMedia('(max-width: 760px)').matches) document.body.classList.remove('panel-open'); });
        list.appendChild(b);
      }
    }
    $('#overview').addEventListener('click', () => map.fitBounds(REGION_FIT, { padding: regionPadding(), pitch: 30, bearing: 0, duration: 2500 }));
    $('#heroBtn').addEventListener('click', () => flyTo(map, PLACES[0].items[1]));
    $('#panelToggle').addEventListener('click', () => document.body.classList.toggle('panel-open'));

    // orbit
    let orbiting = false, orbitRaf = 0;
    const orbit = () => { if (!orbiting) return; map.setBearing(map.getBearing() + 0.08); orbitRaf = requestAnimationFrame(orbit); };
    $('#orbitBtn').addEventListener('click', () => { orbiting = !orbiting; $('#orbitBtn').setAttribute('aria-pressed', String(orbiting)); if (orbiting) orbit(); else cancelAnimationFrame(orbitRaf); });
    map.on('mousedown', () => { if (orbiting) $('#orbitBtn').click(); });
    map.on('touchstart', () => { if (orbiting) $('#orbitBtn').click(); });

    // cursor readout
    const readout = $('#readout');
    map.on('mousemove', (e) => {
      const { lng, lat } = e.lngLat;
      const ex = map.getTerrain() ? map.getTerrain().exaggeration || 1 : 1;
      const el = map.queryTerrainElevation(e.lngLat);
      readout.textContent = `${lat.toFixed(5)}°N  ${lng.toFixed(5)}°E` + (el != null ? `  ·  ${Math.round(el / ex)} m` : '');
    });

    // building info
    map.on('click', (e) => {
      const b = city.visible && map.getZoom() >= 12 ? city.pick(e.point) : null;
      if (b) { const d = city.describe(b); city.setSelected(d.id); showInfo(d); return; }
      const f = map.getLayer('building-3d') && map.getLayoutProperty('building-3d', 'visibility') !== 'none' ? map.queryRenderedFeatures(e.point, { layers: ['building-3d'] })[0] : null;
      if (f) { city.setSelected(null); showInfo({ name: '', type: 'Building (OpenStreetMap)', height: f.properties.render_height, estimated: f.properties.render_height === 5, osmOnly: true, lngLat: [e.lngLat.lng, e.lngLat.lat] }); return; }
      city.setSelected(null); $('#info').hidden = true;
    });
    $('#infoClose').addEventListener('click', () => { $('#info').hidden = true; city.setSelected(null); });

    // keyboard: 1/2/3 modes, O orbit
    window.addEventListener('keydown', (e) => {
      if (e.target instanceof Element && e.target.closest('input, textarea, select')) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === '1' || e.key === '2' || e.key === '3') { state.mode = ['satellite', 'map', 'topo'][+e.key - 1]; applyMode(map, city); }
      if (e.key === 'o' || e.key === 'O') $('#orbitBtn').click();
    });
  }

  function flyTo(map, p) {
    const panel = document.body.classList.contains('panel-open') && !matchMedia('(max-width: 760px)').matches;
    map.flyTo({ center: p.c, zoom: p.z, pitch: p.p, bearing: p.b, duration: 4200, curve: 1.5, essential: true, padding: { left: panel ? 330 : 0, top: 0, right: 0, bottom: 0 } });
  }

  function showInfo(d) {
    const el = $('#info'); el.hidden = false;
    $('#infoName').textContent = d.name || d.type;
    $('#infoType').textContent = d.name ? d.type : (d.osmOnly ? '' : 'No name on record');
    const rows = [];
    if (d.housenumber) rows.push(['House no.', d.housenumber]);
    if (d.floors) rows.push(['Floors', String(d.floors)]);
    if (d.height != null) rows.push(['Height', `${Math.round(d.height)} m`]);
    rows.push(['Height source', d.osmOnly ? (d.estimated ? 'Not in OpenStreetMap (shown at 5 m)' : 'OpenStreetMap') : d.est === 0 ? 'OpenStreetMap height' : d.est === 2 ? 'OpenStreetMap floor count' : 'Estimated from the footprint (no height mapped)']);
    if (d.footprint) rows.push(['Footprint source', d.footprint]);
    if (d.area) rows.push(['Footprint', `${d.area.toLocaleString()} m²`]);
    if (d.ground != null) rows.push(['Ground level', `${Math.round(d.ground)} m above sea`]);
    rows.push(['Location', `${d.lngLat[1].toFixed(5)}, ${d.lngLat[0].toFixed(5)}`]);
    const tb = $('#infoRows'); tb.innerHTML = '';
    for (const [k, v] of rows) { const tr = document.createElement('div'); tr.className = 'row'; const a = document.createElement('span'); a.textContent = k; const b = document.createElement('span'); b.textContent = v; tr.append(a, b); tb.appendChild(tr); }
  }

  boot();
})();
