// ============================================================================================
// 70 ENVIRONMENT — calendar, NOAA sun position at Blaine, MN climate + weather, road state,
// sky, lights, fog, precipitation particles, creek fog, heat shimmer, windshield overlay
// ============================================================================================
var LAT = 45.1608, LON = -93.2349;
// Minneapolis-St Paul 1991-2020 monthly normals (deg F): [high, low]; precip days; snowfall share
var NORMALS = [[23, 7], [28, 11], [41, 24], [57, 36], [69, 48], [79, 58], [83, 63], [81, 61], [73, 52], [58, 39], [42, 26], [27, 12]];
var WEATHER = {
  year: 2026, month: 9, day: 22, doy: 265, minutes: 8 * 60, gameMin: 0, hour: 8, weekday: true, timeScale: 1,
  season: 'fall', fallP: 0, tempF: 60, anomaly: 0, state: 'clear', mode: 'auto', stateT: 0,
  cloud: 0.2, precip: 'none', intensity: 0, fog: 0, wind: { dir: 1.2, spd: 4 }, groundSnow: 0, roadSnowHwy: 0,
  cls: [], blackIce: 0, leaves: 0, frozen: false, water: 0, heat: 0, snowRate: 0, sunEl: 0, sunAz: 0, visibility: 1600, localFog: 0, lastPlow: []
};
for (var ci0 = 0; ci0 < 9; ci0++) { WEATHER.cls.push({ snow: 0, ice: 0, wet: 0, slush: false, fresh: false }); WEATHER.lastPlow.push(-1e9); }
var WSTATES = {
  clear:     { cloud: 0.08, fog: 0, p: 0, wind: 3, label: 'Clear' },
  partly:    { cloud: 0.4, fog: 0, p: 0, wind: 5, label: 'Partly cloudy' },
  overcast:  { cloud: 0.9, fog: 0, p: 0, wind: 5, label: 'Overcast' },
  lightsnow: { cloud: 0.95, fog: 0.15, p: 0.35, wind: 5, label: 'Light snow', type: 'snow' },
  heavysnow: { cloud: 1, fog: 0.35, p: 0.8, wind: 8, label: 'Heavy snow', type: 'snow' },
  blizzard:  { cloud: 1, fog: 0.75, p: 1, wind: 17, label: 'Blizzard', type: 'snow' },
  rain:      { cloud: 0.95, fog: 0.1, p: 0.5, wind: 6, label: 'Rain', type: 'rain' },
  storm:     { cloud: 1, fog: 0.25, p: 1, wind: 12, label: 'Thunderstorm', type: 'rain' },
  drizzle:   { cloud: 0.95, fog: 0.25, p: 0.2, wind: 3, label: 'Drizzle', type: 'rain' },
  fog:       { cloud: 0.7, fog: 0.85, p: 0, wind: 1, label: 'Fog' }
};
function isLeap(y) { return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0; }
var MDAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function doyOf(y, m, d) { var n = d; for (var i = 0; i < m - 1; i++) n += MDAYS[i] + (i === 1 && isLeap(y) ? 1 : 0); return n; }
function mdOf(y, doy) { var m = 0; while (m < 12) { var dm = MDAYS[m] + (m === 1 && isLeap(y) ? 1 : 0); if (doy <= dm) break; doy -= dm; m++; } return [m + 1, doy]; }
function dowOf(y, m, d) { return new Date(Date.UTC(y, m - 1, d)).getUTCDay(); }
// US DST: second Sunday of March to first Sunday of November
function isDST(y, m, d, h) {
  var mar = 14 - ((dowOf(y, 3, 1) + 6) % 7 + 1 - 1 + 7) % 7; var s = 8; while (dowOf(y, 3, s) !== 0) s++; var e = 1; while (dowOf(y, 11, e) !== 0) e++;
  var t = doyOf(y, m, d) + h / 24, ts = doyOf(y, 3, s) + 2 / 24, te = doyOf(y, 11, e) + 2 / 24;
  return t >= ts && t < te;
}
function seasonOf(m, d) {
  var x = m + d / 31;
  if (x < 3.6 || x >= 12.0) return 'winter';
  if (x < 5.9) return 'spring';
  if (x < 9.25) return 'summer';
  return 'fall';
}
// NOAA general solar position (fractional-year method)
function sunPosition(y, doy, minutesLocal, dst) {
  var tz = dst ? -5 : -6, hr = minutesLocal / 60;
  var g = 2 * Math.PI / (isLeap(y) ? 366 : 365) * (doy - 1 + (hr - 12) / 24);
  var eqt = 229.18 * (0.000075 + 0.001868 * Math.cos(g) - 0.032077 * Math.sin(g) - 0.014615 * Math.cos(2 * g) - 0.040849 * Math.sin(2 * g));
  var decl = 0.006918 - 0.399912 * Math.cos(g) + 0.070257 * Math.sin(g) - 0.006758 * Math.cos(2 * g) + 0.000907 * Math.sin(2 * g) - 0.002697 * Math.cos(3 * g) + 0.00148 * Math.sin(3 * g);
  var tst = minutesLocal + eqt + 4 * LON - 60 * tz, ha = (tst / 4 - 180) * Math.PI / 180, lat = LAT * Math.PI / 180;
  var cz = Math.sin(lat) * Math.sin(decl) + Math.cos(lat) * Math.cos(decl) * Math.cos(ha), zen = Math.acos(clamp(cz, -1, 1));
  var az = Math.acos(clamp((Math.sin(lat) * Math.cos(zen) - Math.sin(decl)) / (Math.cos(lat) * Math.sin(zen)), -1, 1));
  az = ha > 0 ? (az + Math.PI) % (2 * Math.PI) : (3 * Math.PI - az) % (2 * Math.PI);   // clockwise from north
  return { el: Math.PI / 2 - zen, az: az, decl: decl, eqt: eqt, tz: tz };
}
function sunTimes(y, doy, dst) {   // sunrise/sunset in local minutes (zenith 90.833 deg)
  var r = null, res = {};
  [['rise', 1], ['set', -1]].forEach(function (k) {
    var p = sunPosition(y, doy, 720, dst), lat = LAT * Math.PI / 180;
    var ha = Math.acos(clamp(Math.cos(90.833 * Math.PI / 180) / (Math.cos(lat) * Math.cos(p.decl)) - Math.tan(lat) * Math.tan(p.decl), -1, 1)) * 180 / Math.PI;
    res[k[0]] = 720 - 4 * (LON + k[1] * ha) - p.eqt + p.tz * 60;
  });
  return res;
}
function normalTemp(doy, hour) {
  // interpolate monthly normals at mid-month anchors
  var f = (doy - 15) / 30.44, i0 = Math.floor(f), t = f - i0, a = NORMALS[(i0 + 12) % 12], b = NORMALS[(i0 + 13) % 12];
  var hi = lerp(a[0], b[0], t), lo = lerp(a[1], b[1], t);
  var s = 0.5 + 0.5 * Math.sin(2 * Math.PI * (hour - 9.5) / 24);
  return { hi: hi, lo: lo, t: lo + (hi - lo) * s };
}
function monthStateWeights(m) {
  if (m === 12 || m <= 2) return { clear: 30, partly: 18, overcast: 24, lightsnow: 18, heavysnow: 7, blizzard: 2, fog: 1 };
  if (m === 3) return { clear: 30, partly: 22, overcast: 20, lightsnow: 10, heavysnow: 3, rain: 8, fog: 4, drizzle: 3 };
  if (m <= 5) return { clear: 36, partly: 24, overcast: 14, rain: 16, storm: 4, fog: 3, drizzle: 3 };
  if (m <= 8) return { clear: 48, partly: 26, overcast: 6, rain: 8, storm: 10, fog: 2 };
  if (m <= 10) return { clear: 38, partly: 24, overcast: 16, rain: 13, fog: 5, drizzle: 4 };
  return { clear: 26, partly: 18, overcast: 30, lightsnow: 12, heavysnow: 3, rain: 6, fog: 3, drizzle: 2 };
}
function setDate(y, m, d, minutes) {
  var W = WEATHER; W.year = y; W.month = m; W.day = d; W.doy = doyOf(y, m, d); W.minutes = minutes;
  W.weekday = [1, 2, 3, 4, 5].indexOf(dowOf(y, m, d)) >= 0;
  W.season = seasonOf(m, d);
  var x = W.doy; W.fallP = W.season === 'fall' ? clamp((x - doyOf(y, 9, 18)) / 45, 0, 1) : (W.season === 'spring' ? clamp((x - doyOf(y, 4, 10)) / 40, 0, 1) : 0);
  W.leaves = W.season === 'fall' ? smooth(doyOf(y, 9, 28), doyOf(y, 10, 20), x) * (1 - smooth(doyOf(y, 11, 8), doyOf(y, 11, 25), x)) : 0;
  W.frozen = (m === 12 && d >= 6) || m === 1 || m === 2 || (m === 3 && d <= 28) || (m === 11 && d >= 28 && W.tempF < 30);
  var ev = currentEvents(); AI.events.usacup = ev.usacup; AI.events.open3m = ev.open3m;
}
var EVENT_MODE = 'auto';
function currentEvents() {
  var W = WEATHER, r = { usacup: false, open3m: false };
  if (EVENT_MODE === 'none') return r; if (EVENT_MODE === 'usacup') { r.usacup = true; return r; } if (EVENT_MODE === 'open3m') { r.open3m = true; return r; }
  function inWin(ev) { var a = doyOf(W.year, ev.start[0], ev.start[1]), b = doyOf(W.year, ev.end[0], ev.end[1]); return W.doy >= a && W.doy <= b && W.hour > 6 && W.hour < 22; }
  r.usacup = inWin(EVENTS.usacup); r.open3m = inWin(EVENTS.open3m);
  return r;
}
function setWeatherState(key, instant) {
  var W = WEATHER; W.state = key; W.stateT = rr(40, 140);
  var s = WSTATES[key];
  W.tgt = { cloud: s.cloud, fog: s.fog, p: s.p, wind: s.wind };
  if (instant) { W.cloud = s.cloud; W.fog = s.fog; W.intensity = s.p; W.wind.spd = s.wind; }
}
// initialise road/ground state so a preset starts mid-storm, mid-thaw, etc.
function primeConditions() {
  var W = WEATHER, m = W.month, s = WSTATES[W.state], T = W.tempF;
  var base = W.season === 'winter' ? (m === 1 || m === 2 ? 0.95 : 0.7) : (m === 3 && W.day < 20 ? 0.5 : (m === 11 && W.day > 15 ? 0.25 : 0));
  W.groundSnow = base;
  for (var i = 0; i < 9; i++) {
    var c = W.cls[i], pri = [0.1, 0.12, 0.12, 0.2, 0.3, 0.45, 0.4, 0.55, 0.5][i];
    W.lastPlow[i] = W.gameMin - rand() * CLS_BY_I[i].plow * 0.9;   // plow crews are part-way through their routes
    c.snow = 0; c.ice = 0; c.wet = 0; c.slush = false; c.fresh = false;
    if (s.type === 'snow' && T < 34) { c.snow = clamp(s.p * (0.35 + pri) + (i >= 4 ? 0.3 : 0), 0, 1); c.fresh = s.p > 0.5; }
    else if (W.season === 'winter') { c.snow = i >= 4 ? 0.55 + 0.3 * pri : (T < 12 ? 0.25 : 0); c.slush = T > 15 && i < 4 && c.snow > 0; if (c.slush) c.wet = 0.5; }
    if (s.type === 'rain') c.wet = s.p > 0.3 ? 1 : 0.7;
    if (W.state === 'drizzle' && T < 32) { c.ice = 0.45 + 0.4 * s.p; }
  }
  W.blackIce = (T > 18 && T < 34 && (W.season === 'winter' || W.season === 'fall' || W.season === 'spring') && (W.state === 'fog' || W.state === 'drizzle' || W.cls[3].wet > 0.2 || W.hour < 9)) ? 1 : 0;
  W.water = s.type === 'rain' ? 0.6 + 2.6 * s.p : 0;
}
function updateWeather(dtReal) {
  var W = WEATHER, gdt = dtReal * W.timeScale;          // game minutes
  W.minutes += gdt; W.gameMin += gdt;
  if (W.minutes >= 1440) { W.minutes -= 1440; var nd = W.doy + 1, days = isLeap(W.year) ? 366 : 365; if (nd > days) { W.year++; nd = 1; } var md = mdOf(W.year, nd); setDate(W.year, md[0], md[1], W.minutes); }
  if (W.minutes < 0) { W.minutes += 1440; }
  W.hour = W.minutes / 60;
  var dst = isDST(W.year, W.month, W.day, W.hour);
  var sp = sunPosition(W.year, W.doy, W.minutes, dst); W.sunEl = sp.el; W.sunAz = sp.az; W.dst = dst;
  // temperature: climate normal + synoptic anomaly, damped diurnal range under cloud
  var nt = normalTemp(W.doy, W.hour), mean = (nt.hi + nt.lo) / 2;
  W.anomaly += (rr(-1, 1) * 0.35 - W.anomaly * 0.002) * gdt / 10;
  W.anomaly = clamp(W.anomaly, -14, 14);
  var target = mean + (nt.t - mean) * (1 - 0.55 * W.cloud) + W.anomaly + (W.forceTemp !== undefined ? W.forceTemp - mean : 0);
  if (W.forceTemp !== undefined) target = W.forceTemp + (nt.t - mean) * 0.4;
  W.tempF += (target - W.tempF) * clamp(gdt / 45, 0, 1);
  // weather state machine
  if (W.mode === 'auto') { W.stateT -= gdt; if (W.stateT <= 0) { var wts = monthStateWeights(W.month), sum = 0, k; for (k in wts) sum += wts[k]; var r = rand() * sum; for (k in wts) { r -= wts[k]; if (r <= 0) break; } setWeatherState(k); } }
  var st = WSTATES[W.state], tg = W.tgt || st, a = clamp(gdt / 25, 0, 1);
  W.cloud += (tg.cloud - W.cloud) * a; W.fog += (tg.fog - W.fog) * a; W.intensity += (tg.p - W.intensity) * a; W.wind.spd += (tg.wind - W.wind.spd) * a;
  W.wind.dir += rr(-0.01, 0.01) * gdt;
  // precip type from temperature
  if (W.intensity > 0.03 && st.type) { W.precip = W.tempF <= 31.5 ? 'snow' : (W.tempF < 34.5 ? (st.type === 'snow' ? 'snow' : 'freezing') : 'rain'); if (st.type === 'snow' && W.tempF > 36) W.precip = 'rain'; }
  else W.precip = 'none';
  var T = W.tempF, p = W.intensity, snowing = W.precip === 'snow', raining = W.precip === 'rain', frz = W.precip === 'freezing';
  var sunF = Math.max(0, Math.sin(W.sunEl)) * (1 - W.cloud * 0.7);
  W.snowRate = snowing ? p * 0.011 : 0.00005;
  // ground snow
  if (snowing) W.groundSnow = Math.min(1, W.groundSnow + p * 0.01 * gdt);
  if (T > 33) W.groundSnow = Math.max(0, W.groundSnow - (T - 32) * 0.00022 * gdt * (1 + 2 * sunF));
  // road classes: accumulation, plow + salt cycles, melt, refreeze, drying
  for (var i = 0; i < 9; i++) {
    var c = W.cls[i], cl = CLS_BY_I[i];
    if (snowing) { c.snow = Math.min(1, c.snow + p * 0.0105 * gdt); c.fresh = true; if (T > 28) c.slush = true; } else c.fresh = c.fresh && c.snow > 0.6 && W.gameMin - W.lastPlow[i] > 30;
    if (frz) c.ice = Math.min(1, c.ice + p * 0.02 * gdt);
    if (raining) { c.wet = Math.min(1, c.wet + p * 0.06 * gdt); c.snow = Math.max(0, c.snow - 0.004 * gdt); }
    if (c.snow > 0.12 && W.gameMin - W.lastPlow[i] > cl.plow) {
      W.lastPlow[i] = W.gameMin; c.snow *= 0.22;
      if (T > 18 && i <= 6) { c.slush = true; c.wet = Math.max(c.wet, 0.6); } else c.snow = Math.max(c.snow, 0.3);   // rock salt loses effect below ~15-20 F
    }
    if (c.slush && T > 18) { var mm = 0.0035 * gdt * (1 + sunF); c.snow = Math.max(0, c.snow - mm); if (c.snow > 0) c.wet = Math.max(c.wet, 0.5); }
    if (T > 34) { var ml = (T - 32) * 0.0006 * gdt * (1 + 2 * sunF); c.snow = Math.max(0, c.snow - ml); c.ice = Math.max(0, c.ice - ml * 3); if (c.snow > 0.05) c.wet = Math.max(c.wet, 0.6); }
    if (c.wet > 0.25 && T < 30 && !(c.slush && T > 15)) { var fz = 0.006 * gdt; c.ice = Math.min(0.9, c.ice + fz); c.wet = Math.max(0, c.wet - fz); }
    if (!raining && !snowing) c.wet = Math.max(0, c.wet - (0.0012 + 0.004 * sunF) * gdt * clamp((T - 20) / 50, 0.1, 1.4));
    if (c.snow < 0.02) c.slush = false;
  }
  W.roadSnowHwy = W.cls[2].snow;
  // black ice: bridges freeze first near the freezing point after moisture (fog, melt, drizzle)
  var riskT = T > 16 && T < 34, moist = W.cls[3].wet > 0.15 || W.fog > 0.3 || frz || W.cls[3].ice > 0.1;
  W.blackIce = clamp(W.blackIce + ((riskT && moist) ? 0.02 : -0.01) * gdt, 0, 1);
  W.water = raining ? 0.4 + 2.8 * p : Math.max(0, W.water - 0.02 * gdt);
  W.heat = (W.season === 'summer' && W.precip === 'none') ? clamp((T - 76) / 12, 0, 1) * clamp(sunF * 1.6, 0, 1) : 0;
  W.frozen = W.frozen && T < 45;
  var ev = currentEvents(); AI.events.usacup = ev.usacup; AI.events.open3m = ev.open3m;
}
// ---------------- sky + lights ----------------
var ENV = { sky: null, skyU: null, sun: null, hemi: null, amb: null, moon: null, stars: null, snow: null, rain: null, creekFog: null, post: null };
var LIGHT_STATE = { headlights: true, high: false, mode: 'auto', aiLights: false };
function buildSky(scene, quality) {
  var u = { uSunDir: { value: new T3.Vector3(0, 1, 0) }, uZen: { value: new T3.Color() }, uHor: { value: new T3.Color() }, uSunCol: { value: new T3.Color() }, uCloud: { value: 0 }, uTime: UNI.uTime, uNight: { value: 0 }, uGray: { value: new T3.Color() } };
  var m = new T3.ShaderMaterial({
    uniforms: u, side: T3.BackSide, depthWrite: false, depthTest: false, fog: false,
    vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }',
    fragmentShader: [GLSL_NOISE,
      'uniform vec3 uSunDir; uniform vec3 uZen; uniform vec3 uHor; uniform vec3 uSunCol; uniform float uCloud; uniform float uTime; uniform float uNight; uniform vec3 uGray; varying vec3 vD;',
      'float fbm3(vec2 p){ float s=0.0, a=0.5; for(int i=0;i<4;i++){ s += a*bdNoise(p); p*=2.03; a*=0.5; } return s; }',
      'void main(){ vec3 d = normalize(vD); float h = clamp(d.y, -0.2, 1.0);',
      ' vec3 col = mix(uHor, uZen, pow(max(h, 0.0), 0.55));',
      ' float sd = max(dot(d, uSunDir), 0.0);',
      ' col += uSunCol * (pow(sd, 900.0) * 18.0 + pow(sd, 18.0) * 0.35 + pow(sd, 4.0) * 0.12) * (1.0 - uCloud * 0.85);',
      ' if (d.y > 0.0) { vec2 cp = d.xz / (d.y + 0.08) * 1.4 + vec2(uTime * 0.006, uTime * 0.002);',
      '   float c = smoothstep(1.0 - uCloud * 1.05 - 0.12, 1.15 - uCloud * 0.6, fbm3(cp));',
      '   vec3 cc = mix(uGray, uGray * 1.25 + uSunCol * 0.25 * pow(sd, 3.0), 0.5);',
      '   col = mix(col, cc, c * smoothstep(0.0, 0.12, d.y) * 0.95); }',
      ' col = mix(col, uGray, uCloud * uCloud * 0.55);',
      ' if (d.y < 0.0) col = mix(uHor, uHor * 0.75, clamp(-d.y * 5.0, 0.0, 1.0));',
      ' gl_FragColor = vec4(col, 1.0); }'].join('\n')
  });
  ENV.sky = new T3.Mesh(new T3.SphereGeometry(800, 32, 16), m); ENV.sky.renderOrder = -10; ENV.sky.frustumCulled = false; scene.add(ENV.sky); ENV.skyU = u;
  // stars
  var n = 1400, pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
  for (var i = 0; i < n; i++) { var th = rand() * Math.PI * 2, ph = Math.acos(rand() * 0.95), r = 780; pos.set([Math.sin(ph) * Math.cos(th) * r, Math.cos(ph) * r, Math.sin(ph) * Math.sin(th) * r], i * 3); var b = 0.4 + rand() * 0.6; col.set([b, b, b * 1.05], i * 3); }
  var sg = new T3.BufferGeometry(); sg.setAttribute('position', new T3.BufferAttribute(pos, 3)); sg.setAttribute('color', new T3.BufferAttribute(col, 3));
  ENV.starMat = new T3.PointsMaterial({ size: 1.6, sizeAttenuation: false, vertexColors: true, transparent: true, opacity: 0, depthWrite: false, fog: false });
  ENV.stars = new T3.Points(sg, ENV.starMat); ENV.stars.renderOrder = -9; ENV.stars.frustumCulled = false; scene.add(ENV.stars);
  // lights
  ENV.sun = new T3.DirectionalLight(0xffffff, 1); scene.add(ENV.sun); scene.add(ENV.sun.target);
  if (quality.shadows) { ENV.sun.castShadow = true; ENV.sun.shadow.mapSize.set(2048, 2048); var sc = ENV.sun.shadow.camera; sc.left = -70; sc.right = 70; sc.top = 70; sc.bottom = -70; sc.near = 10; sc.far = 500; ENV.sun.shadow.bias = -0.0006; ENV.sun.shadow.normalBias = 0.03; }
  ENV.hemi = new T3.HemisphereLight(0xbfd4ff, 0x506040, 0.5); scene.add(ENV.hemi);
  ENV.amb = new T3.AmbientLight(0xffffff, 0.1); scene.add(ENV.amb);
  UNI.uHorizon.value = new T3.Color(0.7, 0.75, 0.8);
}
function buildPrecip(scene, quality) {
  var N = quality.particles;
  function makeField(n, streak) {
    var base = new Float32Array(n * 3 * (streak ? 2 : 1)), rnd = new Float32Array(n * (streak ? 2 : 1)), end = new Float32Array(n * (streak ? 2 : 1));
    for (var i = 0; i < n; i++) {
      var x = rand() * 90, y = rand() * 45, z = rand() * 90, r = rand();
      for (var k = 0; k < (streak ? 2 : 1); k++) { var q = i * (streak ? 2 : 1) + k; base.set([x, y, z], q * 3); rnd[q] = r; end[q] = k; }
    }
    var g = new T3.BufferGeometry(); g.setAttribute('position', new T3.BufferAttribute(base, 3)); g.setAttribute('aRnd', new T3.BufferAttribute(rnd, 1)); g.setAttribute('aEnd', new T3.BufferAttribute(end, 1));
    g.boundingSphere = new T3.Sphere(new T3.Vector3(), 1e6);
    return g;
  }
  var u = { uT: { value: 0 }, uCam: { value: new T3.Vector3() }, uWind: { value: new T3.Vector2() }, uFall: { value: 1.2 }, uAmb: { value: 1 }, uHeadP: { value: new T3.Vector3() }, uHeadD: { value: new T3.Vector3(1, 0, 0) }, uHeadOn: { value: 0 }, uPx: GLOW.uni.uPx, uAlpha: { value: 1 }, uCount: { value: 1 } };
  var vs = ['uniform float uT; uniform vec3 uCam; uniform vec2 uWind; uniform float uFall; uniform vec3 uHeadP; uniform vec3 uHeadD; uniform float uHeadOn; uniform float uPx; uniform float uCount; uniform float uAmb;',
    'attribute float aRnd; attribute float aEnd; varying float vLit; varying float vA;',
    'void main(){ vec3 box = vec3(90.0, 45.0, 90.0);',
    ' vec3 off = vec3(uWind.x * uT + sin(uT * 0.9 + aRnd * 40.0) * 0.6 * STREAK0, -uFall * uT * (0.8 + 0.4 * aRnd), uWind.y * uT + cos(uT * 0.7 + aRnd * 30.0) * 0.6 * STREAK0);',
    ' vec3 p = mod(position + off - uCam + box * 0.5, box) - box * 0.5 + uCam;',
    ' p += aEnd * vec3(uWind.x, -uFall, uWind.y) * 0.035;',
    ' vec3 tp = p - uHeadP; float dl = length(tp); float along = dot(tp, uHeadD);',
    ' vLit = uHeadOn * smoothstep(0.86, 0.97, along / max(dl, 0.1)) * (1.0 - smoothstep(8.0, 70.0, dl)) * step(0.0, along);',
    ' vA = step(aRnd, uCount);',
    ' vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;',
    ' gl_PointSize = clamp(SIZE * uPx * 300.0 / max(0.3, -mv.z), 1.0, 9.0); }'].join('\n');
  var fs = ['uniform float uAmb; uniform float uAlpha; varying float vLit; varying float vA;',
    'void main(){ if (vA < 0.5) discard; ROUND vec3 c = COLOR * (uAmb + vLit * 2.2); gl_FragColor = vec4(c, (ALPHA + vLit * 0.4) * uAlpha); }'].join('\n');
  var snowMat = new T3.ShaderMaterial({ uniforms: u, transparent: true, depthWrite: false, vertexShader: vs.replace(/STREAK0/g, '1.0').replace('SIZE', '0.085'), fragmentShader: fs.replace('ROUND', 'vec2 q = gl_PointCoord - 0.5; if (dot(q,q) > 0.25) discard;').replace('COLOR', 'vec3(0.96, 0.97, 1.0)').replace('ALPHA', '0.85') });
  ENV.snow = new T3.Points(makeField(N, false), snowMat); ENV.snow.frustumCulled = false; ENV.snow.renderOrder = 7; scene.add(ENV.snow);
  var u2 = Object.assign({}, u); u2.uFall = { value: 9 }; u2.uAlpha = { value: 1 }; u2.uCount = { value: 1 };
  var rainMat = new T3.ShaderMaterial({ uniforms: u2, transparent: true, depthWrite: false, vertexShader: vs.replace(/STREAK0/g, '0.0').replace('SIZE', '0.05'), fragmentShader: fs.replace('ROUND', '').replace('COLOR', 'vec3(0.72, 0.76, 0.82)').replace('ALPHA', '0.38') });
  ENV.rain = new T3.LineSegments(makeField(Math.floor(N * 0.8), true), rainMat); ENV.rain.frustumCulled = false; ENV.rain.renderOrder = 7; scene.add(ENV.rain);
  ENV.precipU = u; ENV.rainU = u2;
  // low fog banks along Rice Creek (dawn, spring/fall)
  var cr = resample(Ms(RICE_CREEK), 26), fp = new Float32Array(cr.length * 3 * 2), fc = new Float32Array(cr.length * 3 * 2);
  cr.forEach(function (p, i) { for (var k = 0; k < 2; k++) { fp.set([p[0] + rr(-25, 25), 1.5 + rand() * 2, p[1] + rr(-25, 25)], (i * 2 + k) * 3); fc.set([0.85, 0.87, 0.9], (i * 2 + k) * 3); } });
  ENV.creekFog = makeGlowPoints(fp, fc, 55); ENV.creekFog.material.blending = T3.NormalBlending; ENV.creekFog.frustumCulled = false; scene.add(ENV.creekFog);
}
var CREEK_R = null;
function creekProximity(x, z) {
  if (!CREEK_R) { CREEK_R = new Raster(10); var c = Ms(RICE_CREEK); CREEK_R.strokePoly(c, 800, 1); CREEK_R.strokePoly(c, 420, 2); CREEK_R.strokePoly(c, 160, 3); }
  return [0, 0.35, 0.7, 1][CREEK_R.get(x, z)];
}
var _c1, _c2, _c3;
function updateEnvironment(dt, camera, scene, px, pz, quality) {
  var W = WEATHER, el = W.sunEl, az = W.sunAz, U = ENV.skyU;
  if (!_c1) { _c1 = new T3.Color(); _c2 = new T3.Color(); _c3 = new T3.Color(); }
  var sd = new T3.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), -Math.cos(az) * Math.cos(el));
  U.uSunDir.value.copy(sd);
  var day = smooth(-0.14, 0.12, el), golden = 1 - smooth(0.02, 0.35, el), cloud = W.cloud;
  // horizon/zenith palette: night -> civil twilight -> golden hour -> day
  var zen = _c1.setRGB(lerp(0.015, 0.22, day), lerp(0.02, 0.45, day), lerp(0.05, 0.82, day));
  var hor = _c2.setRGB(lerp(0.04, 0.72, day), lerp(0.05, 0.8, day), lerp(0.09, 0.9, day));
  var tw = clamp(1 - Math.abs(el + 0.02) / 0.16, 0, 1) * (1 - cloud * 0.7);
  hor.r = lerp(hor.r, 0.98, tw * 0.75); hor.g = lerp(hor.g, 0.55, tw * 0.6); hor.b = lerp(hor.b, 0.32, tw * 0.7);
  zen.r = lerp(zen.r, 0.25, tw * 0.25); zen.b = lerp(zen.b, 0.45, tw * 0.25);
  var gray = _c3.setRGB(lerp(0.05, 0.62, day), lerp(0.055, 0.64, day), lerp(0.065, 0.68, day));
  if (W.precip === 'snow') gray.multiplyScalar(1.08);
  U.uZen.value.copy(zen); U.uHor.value.copy(hor); U.uGray.value.copy(gray); U.uCloud.value = cloud;
  U.uSunCol.value.setRGB(1, lerp(0.95, 0.55, golden), lerp(0.85, 0.3, golden)).multiplyScalar(smooth(-0.1, 0.02, el));
  ENV.sky.position.copy(camera.position); ENV.stars.position.copy(camera.position);
  ENV.starMat.opacity = (1 - smooth(-0.2, -0.06, el)) * clamp(1 - cloud * 1.3, 0, 1) * 0.9;
  // sun / moon light
  var sunI = day * lerp(0.82, 0.24, cloud) * (0.35 + 0.65 * smooth(0, 0.3, el));
  ENV.sun.intensity = Math.max(sunI, 0.05);
  ENV.sun.color.setRGB(1, lerp(0.97, 0.68, golden), lerp(0.93, 0.45, golden));
  if (el < 0) { ENV.sun.color.setRGB(0.55, 0.62, 0.85); ENV.sun.intensity = 0.07 * (1 - cloud * 0.6); sd.set(-sd.x, Math.max(0.3, -sd.y), -sd.z); }
  ENV.sun.position.set(px + sd.x * 200, sd.y * 200, pz + sd.z * 200); ENV.sun.target.position.set(px, 0, pz); ENV.sun.target.updateMatrixWorld();
  var snowG = W.groundSnow;
  ENV.hemi.color.setRGB(lerp(0.2, 0.75, day), lerp(0.22, 0.8, day), lerp(0.3, 0.9, day));
  ENV.hemi.groundColor.setRGB(lerp(0.08, 0.35, day) + snowG * 0.25 * day, lerp(0.08, 0.36, day) + snowG * 0.25 * day, lerp(0.07, 0.28, day) + snowG * 0.3 * day);
  ENV.hemi.intensity = lerp(0.16, 0.42, day) + cloud * 0.2 * day;
  ENV.amb.intensity = lerp(0.1, 0.08, day) + (day < 0.3 ? 0.04 : 0);
  // fog / visibility
  var fogK = Math.max(W.fog, W.precip === 'snow' ? W.intensity * 0.8 : (W.precip === 'rain' ? W.intensity * 0.35 : 0));
  var dawn = (W.hour > 4.8 && W.hour < 9.8) ? Math.sin((W.hour - 4.8) / 5 * Math.PI) : 0;
  var creekF = (W.season === 'spring' || W.season === 'fall' || (W.season === 'summer' && W.month === 9)) && W.precip !== 'snow' ? dawn * creekProximity(px, pz) * (W.cloud < 0.95 ? 1 : 0.6) : 0;
  W.localFog += (creekF - W.localFog) * clamp(dt * 0.8, 0, 1);
  var far = quality.far * (1 - 0.55 * cloud * (W.precip !== 'none' ? 1 : 0.2));
  far = lerp(far, 60, clamp(fogK, 0, 1) * (W.state === 'blizzard' ? 1 : 0.9));
  far = lerp(far, 55, W.localFog);
  if (W.state === 'blizzard' && W.groundSnow > 0.3 && miOf(px) > -1) far *= 0.8;
  W.visibility = far;
  scene.fog.near = Math.min(far * 0.15, 60); scene.fog.far = far;
  var fc = new T3.Color().copy(hor).lerp(gray, clamp(cloud * 0.8 + fogK * 0.6, 0, 1));
  if (W.localFog > 0.1) fc.lerp(new T3.Color(0.78, 0.8, 0.82).multiplyScalar(0.3 + 0.7 * day), W.localFog);
  scene.fog.color.copy(fc); UNI.uHorizon.value.copy(fc);
  camera.far = Math.min(quality.far + 200, far * 1.1 + 150);
  camera.near = CAM.mode === 2 ? 0.1 : 0.35; camera.updateProjectionMatrix();
  ENV.creekFog.material.uniforms.uNightG.value = W.localFog * 0.55 * (0.4 + 0.6 * day);
  ENV.creekFog.material.uniforms.fogColor.value.copy(fc); ENV.creekFog.material.uniforms.fogFar.value = 4000;
  // glow uniforms (headlight halos scatter in snow/fog/rain)
  var night = 1 - smooth(-0.1, 0.08, el);
  var dim = clamp(night + cloud * 0.35 * (W.precip !== 'none' ? 1 : 0) + fogK * 0.5, 0, 1);
  LIGHT_STATE.aiLights = dim > 0.35 || W.precip !== 'none';
  GLOW.uni.uNightG.value = clamp(dim * 1.1, 0, 1);
  GLOW.uni.uScatter.value = clamp(fogK * 1.3 + (W.precip === 'snow' ? W.intensity : W.intensity * 0.4) + W.localFog, 0, 1.6);
  UNI.uNight.value = clamp(night * 1.2, 0, 1);
  if (LIGHT_STATE.mode === 'auto') LIGHT_STATE.headlights = dim > 0.25 || W.precip !== 'none' || fogK > 0.2;
  if (OBJ.poolMat) OBJ.poolMat.opacity = night * 0.55;
  // precipitation
  var pu = ENV.precipU;
  pu.uT.value += dt; pu.uCam.value.copy(camera.position);
  var wv = [Math.cos(W.wind.dir) * W.wind.spd * 0.3, Math.sin(W.wind.dir) * W.wind.spd * 0.3];
  pu.uWind.value.set(wv[0] * (W.state === 'blizzard' ? 2.2 : 1), wv[1] * (W.state === 'blizzard' ? 2.2 : 1));
  pu.uAmb.value = 0.18 + 0.82 * lerp(0.15, 1, day);
  pu.uCount.value = W.precip === 'snow' ? clamp(0.12 + W.intensity * 0.9, 0, 1) : 0;
  ENV.snow.visible = W.precip === 'snow' && W.intensity > 0.03;
  var ru = ENV.rainU; ru.uT.value = pu.uT.value; ru.uCam.value.copy(camera.position); ru.uWind.value.copy(pu.uWind.value); ru.uAmb.value = pu.uAmb.value;
  ru.uCount.value = (W.precip === 'rain' || W.precip === 'freezing') ? clamp(0.15 + W.intensity * 0.85, 0, 1) : 0;
  ENV.rain.visible = ru.uCount.value > 0.01;
  if (PLAYER) {
    var c = PLAYER.car, hx = Math.cos(c.psi), hz = -Math.sin(c.psi);
    pu.uHeadP.value.set(c.x + hx * 2.4, PLAYER.y + 0.8, -c.y + hz * 2.4); pu.uHeadD.value.set(hx, -0.03, hz); pu.uHeadOn.value = LIGHT_STATE.headlights ? night * 0.9 + 0.1 : 0;
    ru.uHeadP.value.copy(pu.uHeadP.value); ru.uHeadD.value.copy(pu.uHeadD.value); ru.uHeadOn.value = pu.uHeadOn.value;
  }
  // shared material uniforms
  UNI.uTime.value += dt; UNI.uGameMin.value = W.gameMin; UNI.uSnowRate.value = W.snowRate;
  for (var i = 0; i < 9; i++) UNI.uRoadSnow.value[i] = W.cls[i].snow;
  UNI.uSnow.value = W.groundSnow; UNI.uWet.value = clamp(W.cls[3].wet, 0, 1); UNI.uIce.value = W.cls[3].ice; UNI.uSlush.value = W.cls[3].slush ? 1 : 0;
  UNI.uHeat.value = W.heat; UNI.uLeaves.value = W.leaves; UNI.uFrozen.value = W.frozen ? 1 : 0;
  // seasonal dressing
  if (OBJ.iceGroup) OBJ.iceGroup.visible = W.frozen && W.groundSnow > 0.05;
  if (OBJ.workGroup) OBJ.workGroup.visible = W.season !== 'winter' && W.hour > 7 && W.hour < 19 && W.weekday;
  OBJ.eventGroups.usacup.visible = AI.events.usacup; OBJ.eventGroups.open3m.visible = AI.events.open3m;
  MATS.sign3m.visible = AI.events.open3m; MATS.signcup.visible = AI.events.usacup;
  if (GROUND.season !== W.season) { buildGroundTexture(W.season); if (MINIMAP) MINIMAP.dirty = true; }
  updateTreeSeason(W.season, W.fallP);
}
// ---------------- heat-shimmer post pass (quality: high) ----------------
function buildPost(renderer) {
  var sz = renderer.getDrawingBufferSize(new T3.Vector2());
  var rt = new T3.WebGLRenderTarget(sz.x, sz.y, { depthBuffer: true });
  var cam = new T3.OrthographicCamera(-1, 1, 1, -1, 0, 1), sc = new T3.Scene();
  var mat = new T3.ShaderMaterial({ uniforms: { tDiffuse: { value: rt.texture }, uT: { value: 0 }, uHeat: { value: 0 }, uHorizonY: { value: 0.5 } }, depthTest: false, depthWrite: false,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
    fragmentShader: GLSL_NOISE + '\nuniform sampler2D tDiffuse; uniform float uT; uniform float uHeat; uniform float uHorizonY; varying vec2 vUv;\nvoid main(){ float band = smoothstep(0.22, 0.0, abs(vUv.y - uHorizonY + 0.06)) * uHeat; vec2 o = vec2(bdNoise(vec2(vUv.x * 40.0, vUv.y * 90.0 - uT * 3.0)) - 0.5, bdNoise(vec2(vUv.x * 30.0 + uT, vUv.y * 70.0)) - 0.5) * 0.006 * band; vec3 c = texture2D(tDiffuse, vUv + o).rgb; vec2 q = vUv - 0.5; c *= 1.0 - dot(q, q) * 0.35; gl_FragColor = vec4(c, 1.0); }' });
  sc.add(new T3.Mesh(new T3.PlaneGeometry(2, 2), mat));
  ENV.post = { rt: rt, cam: cam, scene: sc, mat: mat };
}
function renderFrame(renderer, scene, camera, quality, dt) {
  var W = WEATHER;
  if (ENV.post && quality.post && W.heat > 0.05 && CAM.mode !== 2) {
    var sz = renderer.getDrawingBufferSize(new T3.Vector2());
    if (ENV.post.rt.width !== sz.x || ENV.post.rt.height !== sz.y) ENV.post.rt.setSize(sz.x, sz.y);
    ENV.post.mat.uniforms.uT.value += dt; ENV.post.mat.uniforms.uHeat.value = W.heat;
    var v = new T3.Vector3(camera.position.x + Math.cos(PLAYER.car.psi) * 500, PLAYER.y, camera.position.z - Math.sin(PLAYER.car.psi) * 500).project(camera);
    ENV.post.mat.uniforms.uHorizonY.value = clamp(v.y * 0.5 + 0.5, 0, 1);
    renderer.setRenderTarget(ENV.post.rt); renderer.render(scene, camera); renderer.setRenderTarget(null); renderer.render(ENV.post.scene, ENV.post.cam);
  } else renderer.render(scene, camera);
}
// ---------------- windshield (cockpit camera): breath fog, defrost, drops, wipers, frost ----------------
var WS = { cv: null, g: null, fog: 0, defrost: 0, heat: 0, drops: [], wiper: 0, wiperOn: false, wiperT: 0, maxDefrost: false, frost: null };
function initWindshield(cv) { WS.cv = cv; WS.g = cv.getContext('2d'); }
function updateWindshield(dt, active) {
  var cv = WS.cv; if (!cv) return;
  if (!active) { if (cv.style.display !== 'none') cv.style.display = 'none'; return; }
  cv.style.display = 'block';
  var W = WEATHER, w = cv.width = Math.round(cv.clientWidth / 2), h = cv.height = Math.round(cv.clientHeight / 2), g = WS.g, car = PLAYER.car;
  var cold = clamp((42 - W.tempF) / 40, 0, 1), beater = PLAYER.specId === 'beater';
  WS.heat = Math.min(1, WS.heat + dt / (beater ? 90 : 35) * (WS.maxDefrost ? 2 : 1));        // heater core warming up
  var breath = cold * (car.speed() < 3 ? 0.012 : 0.004) * (beater ? 1.6 : 1);
  WS.fog = clamp(WS.fog + breath * dt * 60 / 60 - WS.heat * (WS.maxDefrost ? 0.05 : 0.018) * dt, 0, 1);
  // drops
  var pr = W.precip !== 'none' ? W.intensity : 0, rate = pr * (W.precip === 'snow' ? 18 : 40) * (1 + car.speed() / 20);
  for (var k = 0; k < rate * dt && WS.drops.length < 380; k++) WS.drops.push({ x: Math.random(), y: Math.random() * 0.85, r: (W.precip === 'snow' ? 1.6 : 1.1) + Math.random() * 1.6, s: W.precip === 'snow', life: W.precip === 'snow' ? 5 + Math.random() * 4 : 99 });
  WS.wiperOn = pr > 0.05 || WS.forceWiper;
  if (WS.wiperOn) { WS.wiperT += dt / (pr > 0.6 ? 0.9 : (pr > 0.25 ? 1.5 : 3.2)); } else WS.wiperT = Math.ceil(WS.wiperT);
  var ph = WS.wiperT % 1, sweep = ph < 0.55 ? Math.sin(ph / 0.55 * Math.PI) : 0, ang = -1.25 + sweep * 2.3;
  g.clearRect(0, 0, w, h);
  // breath fog with defrost clearing up from the dashboard vents
  if (WS.fog > 0.01) {
    g.fillStyle = 'rgba(220,226,232,' + (WS.fog * 0.6).toFixed(3) + ')'; g.fillRect(0, 0, w, h);
    g.save(); g.globalCompositeOperation = 'destination-out';
    var rr2 = WS.heat * h * 1.3, gr = g.createRadialGradient(w / 2, h * 1.05, rr2 * 0.4, w / 2, h * 1.05, rr2 + 1);
    gr.addColorStop(0, 'rgba(0,0,0,1)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(0, 0, w, h); g.restore();
  }
  if (W.tempF < 15) { if (!WS.frost) WS.frost = frostCanvas(); g.globalAlpha = clamp((15 - W.tempF) / 20, 0, 0.8) * (1 - WS.heat * 0.8); g.drawImage(WS.frost, 0, 0, w, h); g.globalAlpha = 1; }
  // wiper arcs clear drops
  var pivots = [[w * 0.28, h * 1.02], [w * 0.7, h * 1.02]], L = h * 0.95;
  for (var i = WS.drops.length - 1; i >= 0; i--) {
    var d = WS.drops[i]; d.life -= dt * (WS.heat > 0.5 ? 2 : 1);
    var px = d.x * w, py = d.y * h, wiped = false;
    if (WS.wiperOn && sweep > 0.02) pivots.forEach(function (pv) { var a = Math.atan2(px - pv[0], pv[1] - py), dd = Math.hypot(px - pv[0], py - pv[1]); if (Math.abs(a - ang) < 0.12 && dd < L) wiped = true; });
    if (wiped || d.life <= 0) { WS.drops.splice(i, 1); continue; }
    if (!d.s) d.y += dt * 0.004 * (1 + car.speed() * 0.02);
    g.beginPath(); g.arc(px, py, d.r, 0, 6.3); g.fillStyle = d.s ? 'rgba(255,255,255,0.85)' : 'rgba(200,215,230,0.35)'; g.fill();
    if (!d.s) { g.beginPath(); g.arc(px - d.r * 0.3, py - d.r * 0.3, d.r * 0.35, 0, 6.3); g.fillStyle = 'rgba(255,255,255,0.5)'; g.fill(); }
  }
  if (WS.wiperOn && sweep > 0.01) { g.strokeStyle = 'rgba(12,12,14,0.9)'; g.lineWidth = 3; pivots.forEach(function (pv) { g.beginPath(); g.moveTo(pv[0], pv[1]); g.lineTo(pv[0] + Math.sin(ang) * L, pv[1] - Math.cos(ang) * L); g.stroke(); }); }
}
function frostCanvas() {
  var c = document.createElement('canvas'); c.width = 320; c.height = 180; var g = c.getContext('2d');
  for (var i = 0; i < 900; i++) {
    var e = Math.random(), x, y; if (e < 0.25) { x = Math.random() * 320; y = Math.random() * 30; } else if (e < 0.5) { x = Math.random() * 320; y = 150 + Math.random() * 30; } else if (e < 0.75) { x = Math.random() * 45; y = Math.random() * 180; } else { x = 275 + Math.random() * 45; y = Math.random() * 180; }
    g.strokeStyle = 'rgba(235,242,255,' + (0.15 + Math.random() * 0.35) + ')'; g.lineWidth = 0.6; g.beginPath(); g.moveTo(x, y); var a = Math.random() * 6.3; for (var k = 0; k < 3; k++) { a += (Math.random() - 0.5) * 1.2; x += Math.cos(a) * 6; y += Math.sin(a) * 6; g.lineTo(x, y); } g.stroke();
  }
  return c;
}
