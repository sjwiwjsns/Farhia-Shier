// ============================================================================================
// 80 UI — boot (validation gate), garage & scenarios, input, HUD, minimap/navigation, audio, loop
// ============================================================================================
var $ = function (id) { return document.getElementById(id); };
var IS_TOUCH = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
var IS_MOBILE = IS_TOUCH && Math.min(screen.width, screen.height) < 820;
var QUAL = null, RENDERER = null, CAMERA = null, RUNNING = false, PAUSED = false, VALID = null, GARAGE = { veh: 'sedan', scen: 'live' }, UNITS = 'mph';
var QUALITY_PRESETS = {
  low: { pr: 0.85, prMax: 1.25, shadows: false, particles: 2200, far: 720, trees: 0.45, houses: 0.6, post: false, aa: false },
  medium: { pr: 1, prMax: 1.5, shadows: false, particles: 4500, far: 1150, trees: 0.8, houses: 0.9, post: false, aa: true },
  high: { pr: 1, prMax: 2, shadows: true, particles: 7000, far: 1600, trees: 1, houses: 1, post: true, aa: true }
};
var SCENARIOS = [
  { id: 'live', name: 'Live · today', desc: 'Today in Blaine, climatological weather' },
  { id: 'whiteout', name: 'Whiteout on 65', date: [2026, 1, 20], time: '07:15', wx: 'heavysnow', temp: 14, start: 'hwy65n' },
  { id: 'blackice', name: 'Black-ice morning', date: [2026, 12, 3], time: '06:40', wx: 'fog', temp: 29, start: 'i35w' },
  { id: 'blizzard', name: 'Blizzard, rural edge', date: [2026, 2, 9], time: '17:20', wx: 'blizzard', temp: 7, start: 'a133' },
  { id: 'thaw', name: 'Spring thaw · creek fog', date: [2026, 4, 16], time: '06:25', wx: 'partly', temp: 38, start: 'rice' },
  { id: 'work', name: 'Hwy 65 construction', date: [2026, 6, 10], time: '10:00', wx: 'clear', temp: 76, start: 'hwy65s' },
  { id: 'usacup', name: 'USA Cup weekend', date: [2026, 7, 17], time: '17:20', wx: 'clear', temp: 86, start: 'nsc', ev: 'usacup' },
  { id: 'open3m', name: '3M Open week', date: [2026, 7, 25], time: '13:30', wx: 'clear', temp: 90, start: 'tpc', ev: 'open3m' },
  { id: 'dusk', name: 'Solstice dusk', date: [2026, 6, 21], time: '20:50', wx: 'clear', temp: 74, start: 'laddie' },
  { id: 'storm', name: 'Summer storm', date: [2026, 8, 6], time: '16:40', wx: 'storm', temp: 79, start: 'us10' },
  { id: 'leaves', name: 'Wet fall leaves', date: [2026, 10, 17], time: '16:30', wx: 'drizzle', temp: 49, start: 'sw' },
  { id: 'curling', name: 'Curling night', date: [2026, 1, 9], time: '19:45', wx: 'lightsnow', temp: 5, start: 'curling' }
];
var STARTS = {
  hwy65s: { name: 'Hwy 65 NB approaching the 105th Ave work zone', x: X(1.6) + 14, z: Z(98.4), road: 'mn65', dir: 'NB' },
  hwy65n: { name: 'Hwy 65 SB at 117th Ave', x: X(1.6) - 14, z: Z(118.5), road: 'mn65', dir: 'SB' },
  nsc: { name: 'National Sports Center · 105th Ave NE', x: X(2.25), z: Z(105) },
  cityhall: { name: 'Blaine City Hall · Town Square Dr', x: X(1.67), z: Z(106.4) },
  tpc: { name: 'TPC Twin Cities · Radisson Rd', x: X(3.37), z: Z(112.3) },
  laddie: { name: 'Laddie Lake · 87th Ave NE', x: X(1.15), z: Z(87.05) },
  rice: { name: 'Rice Creek · Radisson Rd bridge', x: X(3.35), z: Z(89.4) },
  i35w: { name: 'I-35W SB near the Rice Creek bridge', x: X(3.9), z: Z(97.8), road: 'i35w', dir: 'SB' },
  curling: { name: 'Four Seasons Curling Club · Lincoln St', x: X(2.0), z: Z(91.4) },
  us10: { name: 'US-10 EB near Northtown', x: X(-0.55), z: Z(89.5), road: 'us10', dir: 'EB' },
  airport: { name: 'Airport Rd (89th Ave)', x: X(1.85), z: Z(89.05) },
  school: { name: 'University Ave · Blaine High School', x: X(0), z: Z(124) },
  a133: { name: '133rd Ave NE · rural north edge', x: X(2.4), z: Z(133) },
  sw: { name: 'Southwest Blaine neighbourhood', x: X(0.8), z: Z(95) },
  northtown: { name: 'Northtown Mall', x: X(0.4), z: Z(93.0) }
};
function toast(msg, secs) { var t = $('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('show'); }, (secs || 2.5) * 1000); }
function nextFrame() { return new Promise(function (r) { requestAnimationFrame(function () { setTimeout(r, 0); }); }); }
function stepDone(id) { var e = $(id); if (e) e.classList.add('done'); }

// ---------------- validation worker ----------------
function startValidation() {
  var src = $('bd-physics').textContent + '\n' + $('bd-validate').textContent + '\nonmessage=function(){var r=BDValidate.suite({onResult:function(x){postMessage({t:"r",r:x});},onVehicle:function(id,st){postMessage({t:"v",id:id,st:st});}});postMessage({t:"done",passed:r.passed,total:r.total,stats:r.stats});};';
  VALID = { rows: [], stats: {}, done: false, passed: 0, total: 0, t0: performance.now() };
  function onMsg(m) {
    if (m.t === 'r') { VALID.rows.push(m.r); addValRow(m.r); }
    else if (m.t === 'v') { VALID.stats[m.id] = m.st; renderVehicles(); }
    else if (m.t === 'done') { VALID.done = true; VALID.passed = m.passed; VALID.total = m.total; VALID.ms = performance.now() - VALID.t0; $('vsum').innerHTML = '<b class="' + (m.passed === m.total ? 'pass' : 'fail') + '">' + m.passed + '/' + m.total + ' passed</b> in ' + (VALID.ms / 1000).toFixed(1) + ' s'; checkReady(); }
  }
  try {
    var w = new Worker(URL.createObjectURL(new Blob([src], { type: 'text/javascript' })));
    w.onmessage = function (e) { onMsg(e.data); };
    w.onerror = function () { runInline(); };
    w.postMessage(1);
  } catch (err) { runInline(); }
  function runInline() {   // fallback: same suite on the main thread
    setTimeout(function () { var r = BDValidate.suite({ onResult: function (x) { onMsg({ t: 'r', r: x }); }, onVehicle: function (id, st) { onMsg({ t: 'v', id: id, st: st }); } }); onMsg({ t: 'done', passed: r.passed, total: r.total }); }, 30);
  }
  $('vsum').textContent = 'running…';
}
function fmtNum(v) { return v === null || v === undefined ? '—' : (Math.abs(v) >= 100 ? v.toFixed(0) : (Math.abs(v) >= 10 ? v.toFixed(1) : v.toFixed(2))); }
function addValRow(r) {
  var tr = document.createElement('tr');
  tr.innerHTML = '<td>' + r.vehicle + '</td><td>' + r.test + (r.note ? ' <span style="color:#6f819b">· ' + r.note + '</span>' : '') + '</td><td class="v">' + fmtNum(r.value) + ' ' + r.unit + '</td><td class="v" style="color:#8fa3bd">' + fmtNum(r.lo) + '–' + fmtNum(r.hi) + '</td><td class="' + (r.pass ? 'pass' : 'fail') + '">' + (r.pass ? '✓' : '✗') + '</td>';
  $('vrows').appendChild(tr); $('vtable').scrollTop = 1e6;
  $('vsum').textContent = VALID.rows.filter(function (x) { return x.pass; }).length + '/' + VALID.rows.length + ' so far…';
}
function renderVehicles() {
  var box = $('vehs'); box.innerHTML = '';
  ['sedan', 'truck', 'coupe', 'beater'].forEach(function (id) {
    var v = P.VEHICLES[id], st = VALID && VALID.stats[id], b = document.createElement('button');
    b.className = 'veh' + (GARAGE.veh === id ? ' sel' : '');
    b.innerHTML = '<b>' + v.name + '</b><small>' + v.blurb + '</small><div class="st">' +
      '<span>0–60</span><b>' + (st && st.z60 ? st.z60.toFixed(1) + ' s' : '…') + '</b><span>Top</span><b>' + (st && st.top ? Math.round(st.top) + ' mph' : '…') + '</b>' +
      '<span>60–0</span><b>' + (st && st.b60 ? Math.round(st.b60) + ' ft' : '…') + '</b><span>Skid-pad</span><b>' + (st && st.skid ? st.skid.toFixed(2) + ' g' : '…') + '</b>' +
      '<span>Drive</span><b>' + v.drive + (v.awdCapable ? '/4H' : '') + '</b><span>Aids</span><b>' + (v.aids.abs ? 'ABS ' : '') + (v.aids.tc ? 'TC ' : '') + (v.aids.esc ? 'ESC' : '') + (!v.aids.abs ? 'none' : '') + '</b></div>';
    b.onclick = function () { GARAGE.veh = id; renderVehicles(); };
    box.appendChild(b);
  });
}
function renderScenarios() {
  var box = $('scen'); box.innerHTML = '';
  SCENARIOS.forEach(function (s) {
    var c = document.createElement('button'); c.className = 'chip' + (GARAGE.scen === s.id ? ' sel' : ''); c.textContent = s.name;
    c.onclick = function () { GARAGE.scen = s.id; renderScenarios(); if (s.start) $('start').value = s.start; if (s.date) { $('cdate').value = s.date[0] + '-' + pad2(s.date[1]) + '-' + pad2(s.date[2]); $('ctime').value = s.time; $('cwx').value = s.wx; } $('cev').value = s.ev || 'auto'; };
    box.appendChild(c);
  });
}
function pad2(n) { return (n < 10 ? '0' : '') + n; }
function liveDate() {
  // current Blaine (America/Chicago) wall-clock time
  try {
    var f = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date()), o = {};
    f.forEach(function (p) { o[p.type] = p.value; });
    return { y: +o.year, m: +o.month, d: +o.day, min: (+o.hour % 24) * 60 + (+o.minute) };
  } catch (e) { var d = new Date(); return { y: d.getFullYear(), m: d.getMonth() + 1, d: d.getDate(), min: d.getHours() * 60 + d.getMinutes() }; }
}
var WORLD_READY = false;
function checkReady() {
  var go = $('go');
  if (!WORLD_READY) { go.disabled = true; go.textContent = 'BUILDING BLAINE…'; return; }
  if (!VALID.done) { go.disabled = true; go.textContent = 'VALIDATING PHYSICS…'; return; }
  go.disabled = false;
  go.textContent = VALID.passed === VALID.total ? 'DRIVE' : 'DRIVE (' + (VALID.total - VALID.passed) + ' checks out of tolerance)';
}

// ---------------- boot ----------------
function boot() {
  var lv = liveDate();
  $('cdate').value = lv.y + '-' + pad2(lv.m) + '-' + pad2(lv.d); $('ctime').value = pad2(Math.floor(lv.min / 60)) + ':' + pad2(lv.min % 60);
  var sel = $('start');
  for (var k in STARTS) { var o = document.createElement('option'); o.value = k; o.textContent = STARTS[k].name; sel.appendChild(o); }
  sel.value = 'hwy65s';
  renderVehicles(); renderScenarios();
  if (IS_MOBILE) $('cq').value = 'auto';
  startValidation();
  checkReady();
  whenThree(function () { buildAll().catch(function (err) { console.error(err); $('go').textContent = 'FAILED TO BUILD'; $('bootnote').innerHTML = '<span class="fail">World build failed: ' + (err && err.message || err) + '</span>'; }); });
  $('go').onclick = startDrive;
}
function whenThree(cb) {
  if (window.THREE) return cb();
  if (window.__bdThreeFailed) { setTimeout(function () { window.__bdThreeFail && window.__bdThreeFail(); }, 0); }
  window.__bdThreeReady = cb;
  window.__bdThreeFail = function () { $('bootnote').innerHTML = '<span class="fail">Could not load Three.js r128 from cdnjs or jsDelivr. Check your connection and reload.</span>'; };
}
async function buildAll() {
  T3 = window.THREE; stepDone('s-three');
  var qk = $('cq').value; if (qk === 'auto') qk = IS_MOBILE ? 'low' : 'high';
  QUAL = Object.assign({ key: qk }, QUALITY_PRESETS[qk]);
  QUALITY.houses = QUAL.houses; QUALITY.trees = QUAL.trees;
  var t0 = performance.now();
  await nextFrame(); buildNetwork(); stepDone('s-net');
  await nextFrame(); OCC = new Raster(4); buildTPC(); buildLandUse(); placeLandmarks(); placeWorkZone(); stepDone('s-land');
  await nextFrame(); placeParcels(); placeHouses(); placeTrees(); placeStreetFurniture(); buildHeightfield(16); stepDone('s-bld');
  await nextFrame();
  // renderer + scene (nothing is rendered until the player presses DRIVE, after validation)
  try { RENDERER = new T3.WebGLRenderer({ canvas: $('gl'), antialias: QUAL.aa, powerPreference: 'high-performance' }); }
  catch (err) { $('go').textContent = 'WEBGL UNAVAILABLE'; $('bootnote').innerHTML = '<span class="fail">This browser could not create a WebGL context (' + (err && err.message || err) + '). Enable hardware acceleration or try another browser. The physics validation above still ran.</span>'; return; }
  RENDERER.setPixelRatio(Math.min(window.devicePixelRatio * QUAL.pr, QUAL.prMax));
  RENDERER.setSize(window.innerWidth, window.innerHeight);
  RENDERER.shadowMap.enabled = QUAL.shadows; RENDERER.shadowMap.type = T3.PCFSoftShadowMap;
  GLOW.uni.uPx.value = RENDERER.getPixelRatio() * window.innerHeight / 900;
  SCENE = new T3.Scene(); SCENE.fog = new T3.Fog(0xaabbcc, 60, QUAL.far);
  CAMERA = new T3.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.35, QUAL.far + 200);
  makeMaterials();
  var world = new T3.Group(); world.matrixAutoUpdate = false; SCENE.add(world);
  initTiles(world);
  buildGroundTexture('summer'); buildGround(world); buildWater(world);
  await nextFrame(); buildRoads(world); stepDone('s-mesh');
  await nextFrame(); buildObjects(world); flushBatches(MATS, world); flushSigns(); buildColliders(); stepDone('s-obj');
  // tile groups hold the batched meshes: re-home batches by tile for distance culling
  world.children.slice().forEach(function (m) { if (m.isMesh && m.geometry && m.geometry.boundingSphere && m !== GROUND.skirt && !m.isInstancedMesh && !m.isPoints && m.geometry.boundingSphere.radius < TILE * 1.2) { var c = m.geometry.boundingSphere.center; world.remove(m); TILES[tileIdx(c.x, c.z)].g.add(m); } });
  TRAILS.init(SCENE); PARTS.init(SCENE);
  initAI(SCENE, QUAL.key === 'low');
  stepDone('s-ai');
  await nextFrame(); buildSky(SCENE, QUAL); buildPrecip(SCENE, QUAL); if (QUAL.post) buildPost(RENDERER); stepDone('s-env');
  initWindshield($('windshield'));
  buildMinimap();
  WORLD_READY = true;
  $('bootnote').textContent = 'World built in ' + ((performance.now() - t0) / 1000).toFixed(1) + ' s · ' + NET.edges.length + ' road segments, ' + BLD.length + ' buildings, ' + TREES.length + ' trees, ' + NET.signals.length + ' signal groups.';
  BD.ready = true;
  checkReady();
  window.addEventListener('resize', onResize);
}
function onResize() {
  if (!RENDERER) return;
  RENDERER.setSize(window.innerWidth, window.innerHeight); CAMERA.aspect = window.innerWidth / window.innerHeight; CAMERA.updateProjectionMatrix();
  GLOW.uni.uPx.value = RENDERER.getPixelRatio() * window.innerHeight / 900;
}
function applyScenario(s, custom) {
  var d, t, wx, temp;
  if (s.id === 'live' && !custom) { var lv = liveDate(); d = [lv.y, lv.m, lv.d]; t = lv.min; wx = 'auto'; }
  else if (custom) { var cd = $('cdate').value.split('-').map(Number), ct = $('ctime').value.split(':').map(Number); d = cd; t = ct[0] * 60 + ct[1]; wx = $('cwx').value; }
  else { d = s.date; var tt = s.time.split(':').map(Number); t = tt[0] * 60 + tt[1]; wx = s.wx; temp = s.temp; }
  if (d[0] < 2026) d[0] = 2026;
  WEATHER.forceTemp = temp;
  setDate(d[0], d[1], d[2], t); WEATHER.hour = t / 60;
  var nt = normalTemp(WEATHER.doy, WEATHER.hour); WEATHER.tempF = temp !== undefined ? temp : nt.t; WEATHER.anomaly = 0;
  if (wx === 'auto') { WEATHER.mode = 'auto'; var wts = monthStateWeights(d[1]), best = 'clear', r = rand() * 100, sum = 0; for (var k in wts) sum += wts[k]; r = rand() * sum; for (k in wts) { r -= wts[k]; if (r <= 0) { best = k; break; } } setWeatherState(best, true); }
  else { WEATHER.mode = 'fixed'; setWeatherState(wx, true); }
  if (WEATHER.mode === 'fixed' && temp === undefined && (wx === 'lightsnow' || wx === 'heavysnow' || wx === 'blizzard') && WEATHER.tempF > 30) WEATHER.tempF = WEATHER.forceTemp = 24;
  WEATHER.gameMin = 1000;
  primeConditions();
  NET.edges.forEach(function (e) { e.plow.fill(-1e9); });
  var ev = currentEvents(); AI.events.usacup = ev.usacup; AI.events.open3m = ev.open3m;
}
var START_KEY = 'hwy65s';
function startDrive() {
  AUDIO.init();
  var custom = !!document.querySelector('details[open]');
  var scen = SCENARIOS.filter(function (s) { return s.id === GARAGE.scen; })[0] || SCENARIOS[0];
  EVENT_MODE = $('cev').value;
  WEATHER.timeScale = +$('cts').value; AI.density = +$('ctr').value; UNITS = $('cu').value;
  applyScenario(scen, custom);   // the custom panel (pre-filled by the preset chip) wins when it is open
  START_KEY = $('start').value;
  spawnPlayerAt(START_KEY);
  $('boot').classList.add('hidden'); $('hud').classList.remove('hidden');
  if (IS_TOUCH) { $('touch').classList.remove('hidden'); document.body.classList.add('touch'); }
  refillParking(true);
  toast(STARTS[START_KEY].name, 3);
  if (!RUNNING) { RUNNING = true; LAST = performance.now(); requestAnimationFrame(loop); }
}
function spawnPlayerAt(key) {
  var tyres = $('tyres').value, aidsOn = $('caids').checked, id = GARAGE.veh;
  var opts = { manual: $('cman').checked };
  if (tyres !== 'default') opts.compound = tyres;
  if (!aidsOn) opts.aids = { abs: false, tc: false, esc: false };
  disposePlayer(); makePlayer(id, opts);
  var st = STARTS[key];
  var filt = st.road ? function (e) { return e.pl.road && e.pl.road.indexOf(st.road) === 0 && e.dir === st.dir && !e.lanesB; } : function (e) { return e.cls !== 'lot' && e.cls !== 'gravel' && e.cls !== 'ramp'; };
  var n = nearestEdge(st.x, st.z, 400, filt);
  if (n) {
    var at = pointAt(n.e.pts, n.e.cum, clamp(n.s, 5, n.e.len - 5)), lane = n.e.lanesB ? 0 : Math.min(1, Math.max(0, openLanes(n.e, true) - 1)), off = laneOffset(n.e, true, lane);
    var x = at.x - at.dz * off, z = at.z + at.dx * off, h = n.e.h[Math.min(n.e.h.length - 1, at.i)];
    PLAYER.car.reset(x, -z, yawOf(at.dx, at.dz), 0); PLAYER.y = h;
  } else playerSpawn(st.x, st.z);
  PLAYER.drv = new P.DriverInput();
  AI.clear(); TRAILS.clear(); CAM.init = false; CAM.pos = null; AI.nearT = 0;
  syncIndicators();
}

// ---------------- input ----------------
var KEYS = {}, INPUT = { gas: 0, brake: 0, steer: 0, hand: 0 }, STEER_IN = 0, TOUCH = { steer: 0, gas: 0, brake: 0, hand: 0, active: false, tilt: false, tiltV: 0 }, GP = null;
window.addEventListener('keydown', function (e) {
  if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) return;
  KEYS[e.code] = true;
  if (!RUNNING) return;
  var c = e.code;
  if (c === 'KeyC') cycleCamera();
  else if (c === 'Digit1' || c === 'Digit2' || c === 'Digit3' || c === 'Digit4') { CAM.mode = +c.slice(5) - 1; CAM.init = false; }
  else if (c === 'KeyM') toggleMap();
  else if (c === 'KeyR') { resetPlayerToRoad(); toast('Reset to nearest road', 1.5); }
  else if (c === 'KeyH') cycleLights();
  else if (c === 'KeyF') { WS.maxDefrost = !WS.maxDefrost; toast('Defrost ' + (WS.maxDefrost ? 'MAX' : 'auto'), 1.2); syncIndicators(); }
  else if (c === 'KeyG') { WS.forceWiper = !WS.forceWiper; toast('Wipers ' + (WS.forceWiper ? 'on' : 'auto'), 1.2); }
  else if (c === 'KeyT') { var ts = [0, 0.25, 1, 4, 15], i = ts.indexOf(WEATHER.timeScale); WEATHER.timeScale = ts[(i + 1) % ts.length]; toast('Time: ' + (WEATHER.timeScale ? WEATHER.timeScale + ' game min per second' : 'paused'), 1.5); }
  else if (c === 'BracketLeft' || c === 'BracketRight') { WEATHER.minutes = (WEATHER.minutes + (c === 'BracketRight' ? 30 : -30) + 1440) % 1440; toast(fmtClock(WEATHER.minutes), 1); }
  else if (c === 'KeyQ') shift(-1); else if (c === 'KeyE') shift(1);
  else if (c === 'KeyX') toggle4H();
  else if (c === 'Escape' || c === 'KeyP') toggleMenu();
  else if (c === 'KeyN') navCycle();
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].indexOf(c) >= 0) e.preventDefault();
});
window.addEventListener('keyup', function (e) { KEYS[e.code] = false; });
window.addEventListener('blur', function () { KEYS = {}; });
function shift(d) { var c = PLAYER.car; if (!c.manual) { c.manual = true; toast('Manual shifting (Q/E)', 1.2); } if (d > 0) c.shiftUp(); else c.shiftDown(); syncIndicators(); }
function toggle4H() { if (!PLAYER.spec.awdCapable) return; var c = PLAYER.car; c.drive = c.drive === 'AWD' ? 'RWD' : 'AWD'; toast(c.drive === 'AWD' ? '4H engaged (locked centre)' : '2H (rear-wheel drive)', 1.8); syncIndicators(); }
function cycleCamera() { CAM.mode = (CAM.mode + 1) % CAM_MODES.length; CAM.init = false; toast('Camera: ' + CAM_MODES[CAM.mode], 1); }
function cycleLights() { var m = ['auto', 'on', 'high'], i = m.indexOf(LIGHT_STATE.mode); LIGHT_STATE.mode = m[(i + 1) % 3]; LIGHT_STATE.headlights = LIGHT_STATE.mode !== 'auto' || LIGHT_STATE.headlights; LIGHT_STATE.high = LIGHT_STATE.mode === 'high'; toast('Headlights: ' + LIGHT_STATE.mode, 1.2); }
function readInput(dt) {
  var car = PLAYER.car, v = Math.abs(car.u);
  var kg = (KEYS.KeyW || KEYS.ArrowUp) ? 1 : 0, kb = (KEYS.KeyS || KEYS.ArrowDown) ? 1 : 0, kl = (KEYS.KeyA || KEYS.ArrowLeft) ? 1 : 0, kr = (KEYS.KeyD || KEYS.ArrowRight) ? 1 : 0;
  var target = kl - kr, analog = false;
  // gamepad
  var pads = navigator.getGamepads ? navigator.getGamepads() : [], gp = null;
  for (var i = 0; i < pads.length; i++) if (pads[i] && pads[i].connected) { gp = pads[i]; break; }
  var gas = kg, brk = kb, hand = KEYS.Space ? 1 : 0;
  if (gp) {
    var ax = gp.axes[0] || 0; if (Math.abs(ax) > 0.08) { target = -ax; analog = true; }
    var rt = gp.buttons[7] ? gp.buttons[7].value : 0, lt = gp.buttons[6] ? gp.buttons[6].value : 0;
    gas = Math.max(gas, rt); brk = Math.max(brk, lt); if (gp.buttons[0] && gp.buttons[0].pressed) hand = 1;
    padEdge(gp, 3, cycleCamera); padEdge(gp, 9, toggleMenu); padEdge(gp, 4, function () { shift(-1); }); padEdge(gp, 5, function () { shift(1); }); padEdge(gp, 8, toggleMap); padEdge(gp, 1, function () { resetPlayerToRoad(); });
  }
  if (TOUCH.active || TOUCH.tilt) {
    if (TOUCH.tilt) { target = clamp(-TOUCH.tiltV / 28, -1, 1); analog = true; } else if (TOUCH.steering) { target = TOUCH.steer; analog = true; }
    gas = Math.max(gas, TOUCH.gas); brk = Math.max(brk, TOUCH.brake); hand = Math.max(hand, TOUCH.hand);
  }
  // keyboard steering is rate-limited; analog passes through
  if (analog) STEER_IN = target; else { var rate = target === 0 ? 5 : (Math.sign(target) !== Math.sign(STEER_IN) ? 6 : 2.6); STEER_IN += clamp(target - STEER_IN, -rate * dt, rate * dt); }
  // speed-sensitive steering range (an input mapping, not a change to the tyre physics)
  var L = PLAYER.spec.wheelbase, lock = PLAYER.spec.steer.lock, beta = Math.abs(car.beta());
  var lim = Math.min(lock, L * (analog ? 2.0 : 1.3) * 9.81 / Math.max(v * v, 1) + beta * 1.2 + 0.035);
  INPUT.steer = STEER_IN * lim; INPUT.gas = gas; INPUT.brake = brk; INPUT.hand = hand;
  return INPUT;
}
var PAD_PREV = {};
function padEdge(gp, b, fn) { var p = gp.buttons[b] && gp.buttons[b].pressed; if (p && !PAD_PREV[b]) fn(); PAD_PREV[b] = p; }
function initTouch() {
  var zone = $('tsteer'), base = $('knobBase'), knob = $('knob'), sid = null, x0 = 0;
  function tpos(t) { return t.clientX; }
  zone.addEventListener('touchstart', function (e) { var t = e.changedTouches[0]; sid = t.identifier; x0 = tpos(t); TOUCH.steering = true; TOUCH.active = true; e.preventDefault(); }, { passive: false });
  zone.addEventListener('touchmove', function (e) { for (var i = 0; i < e.changedTouches.length; i++) { var t = e.changedTouches[i]; if (t.identifier !== sid) continue; var dx = tpos(t) - x0; TOUCH.steer = clamp(-dx / 70, -1, 1); knob.style.transform = 'translateX(' + clamp(dx, -52, 52) + 'px)'; } e.preventDefault(); }, { passive: false });
  function end(e) { for (var i = 0; i < e.changedTouches.length; i++) if (e.changedTouches[i].identifier === sid) { sid = null; TOUCH.steer = 0; TOUCH.steering = false; knob.style.transform = ''; } }
  zone.addEventListener('touchend', end); zone.addEventListener('touchcancel', end);
  function pedal(id, key) {
    var el = $(id);
    function set(e, on) { TOUCH.active = true; var r = el.getBoundingClientRect(), t = e.changedTouches ? e.changedTouches[0] : e; var f = on ? clamp(1.15 - (t.clientY - r.top) / r.height * 0.6, 0.45, 1) : 0; TOUCH[key] = key === 'hand' ? (on ? 1 : 0) : f; el.classList.toggle('on', on); }
    el.addEventListener('touchstart', function (e) { set(e, true); e.preventDefault(); }, { passive: false });
    el.addEventListener('touchmove', function (e) { set(e, true); e.preventDefault(); }, { passive: false });
    el.addEventListener('touchend', function (e) { set(e, false); e.preventDefault(); }, { passive: false });
    el.addEventListener('touchcancel', function (e) { set(e, false); });
  }
  pedal('tgas', 'gas'); pedal('tbrake', 'brake'); pedal('thand', 'hand');
  $('tUp').onclick = function () { shift(1); }; $('tDn').onclick = function () { shift(-1); }; $('t4h').onclick = toggle4H;
}
function enableTilt(on) {
  TOUCH.tilt = false;
  if (!on) return;
  function go() { window.addEventListener('deviceorientation', function (e) { var land = Math.abs(window.orientation || (screen.orientation && screen.orientation.angle) || 0) === 90; var a = land ? e.beta : e.gamma; if ((window.orientation || (screen.orientation && screen.orientation.angle)) === -90 || (screen.orientation && screen.orientation.angle === 270)) a = -a; TOUCH.tiltV = a || 0; }); TOUCH.tilt = true; toast('Tilt steering on', 1.5); }
  if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function') DeviceOrientationEvent.requestPermission().then(function (s) { if (s === 'granted') go(); else toast('Tilt permission denied', 2); }).catch(function () { toast('Tilt unavailable', 2); });
  else if (window.DeviceOrientationEvent) go(); else toast('Tilt unavailable on this device', 2);
}

// ---------------- HUD ----------------
var HUDT = 0, LAST_ROAD = null;
function fmtClock(min) { var h = Math.floor(min / 60) % 24, m = Math.floor(min % 60), ap = h >= 12 ? 'PM' : 'AM', hh = h % 12 || 12; return hh + ':' + pad2(m) + ' ' + ap; }
var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], DOWS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
function ordinal(n) { var s = ['th', 'st', 'nd', 'rd'], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); }
function syncIndicators() {
  if (!PLAYER) return; var c = PLAYER.car;
  $('i4H').classList.toggle('hidden', !PLAYER.spec.awdCapable); $('i4H').classList.toggle('lit', c.drive === 'AWD');
  $('t4h').classList.toggle('hidden', !PLAYER.spec.awdCapable);
  $('iMAN').classList.toggle('hidden', !c.manual); $('iMAN').classList.toggle('lit', c.manual);
  $('iDEF').classList.toggle('lit', WS.maxDefrost);
}
var RED_WATCH = { node: null, st: 'G' };
function updateHUD(dt) {
  HUDT -= dt; if (HUDT > 0) return; HUDT = 0.1;
  var pl = PLAYER, c = pl.car, W = WEATHER, v = c.speed(), kmh = UNITS === 'kmh';
  $('spd').textContent = Math.round(kmh ? v * 3.6 : v / MPH); $('spdu').textContent = kmh ? 'KM/H' : 'MPH';
  var g = c.gear; $('gear').textContent = g === -1 ? 'R' : (g === 0 ? 'N' : (c.manual ? 'M' + g : 'D' + g));
  $('rpm').style.width = clamp(c.rpm() / pl.spec.engine.limiter * 100, 0, 100) + '%';
  var abs = c.w.some(function (w) { return w.absScale < 0.9; }), tc = c.tcCut < 0.95, esc = c.escBrake.some(function (b) { return b > 50; });
  $('iABS').className = !c.aids.abs ? '' : (abs ? 'on' : 'lit'); $('iTC').className = !c.aids.tc ? '' : (tc ? 'on' : 'lit'); $('iESC').className = !c.aids.esc ? '' : (esc ? 'on' : 'lit');
  $('iLT').className = LIGHT_STATE.headlights ? 'lit' : '';
  // road + limit
  var s0 = pl.surf[0], e = s0.e;
  if (e && s0.onRoad) {
    var dirTxt = e.dir ? ' ' + e.dir : '', nm = e.name + dirTxt;
    var ave = Math.round(aveOf(-c.y)), cross = (ave >= 85 && ave <= 135) ? 'near ' + ordinal(ave) + ' Ave NE' : '';
    if (e.cls !== 'hwy' && e.cls !== 'fwy' && Math.abs(Math.cos(angWrap(c.psi - Math.PI / 2))) > 0.7) cross = '≈ ' + miOf(c.x).toFixed(2) + ' mi east of University Ave';
    $('road').innerHTML = nm + '<small>' + (e.alt ? e.alt + ' · ' : '') + cross + '</small>';
    var lim = Math.round(e.speed / MPH / 5) * 5;
    $('limit').innerHTML = '<small>' + (e.pl.construction ? 'WORK ZONE' : 'SPEED LIMIT') + '</small><b>' + (kmh ? Math.round(lim * 1.609) : lim) + '</b>'; $('limit').classList.toggle('wz', e.pl.construction);
    if (e.pl.construction && v / MPH > 52 && c.t - (pl.wzT || -99) > 12) { pl.wzT = c.t; pl.stats.wzSpeeding++; toast('Work zone: ' + Math.round(v / MPH) + ' in a 45 — fines double in Minnesota work zones', 3); }
  } else { $('road').innerHTML = (s0.label || 'Off road') + '<small>' + (AREA_NAME(c.x, -c.y) || '') + '</small>'; }
  // clock / weather
  $('clock').textContent = fmtClock(W.minutes);
  $('date').textContent = DOWS[dowOf(W.year, W.month, W.day)] + ' ' + MONTHS[W.month - 1] + ' ' + W.day + ', ' + W.year + ' · ' + (W.dst ? 'CDT' : 'CST') + ' · ' + W.season;
  var tf = W.tempF, tt = kmh ? Math.round((tf - 32) / 1.8) + '°C' : Math.round(tf) + '°F';
  var wlabel = W.precip === 'freezing' ? 'Freezing drizzle' : (W.precip === 'snow' && W.state === 'rain' ? 'Snow' : (W.precip === 'rain' && WSTATES[W.state].type === 'snow' ? 'Rain' : WSTATES[W.state].label));
  var vis = W.visibility < 400 ? ' · vis ' + (kmh ? Math.round(W.visibility / 1000 * 2) / 2 + ' km' : (W.visibility / 804).toFixed(1) + ' mi (scaled)') : '';
  $('wx').textContent = tt + ' · ' + wlabel + (W.localFog > 0.3 ? ' · creek fog' : '') + vis;
  var sL = s0.onRoad ? s0.label : s0.label;
  if (pl.blackIce) sL = s0.onRoad ? (ROADSTATE.cls[3].wet > 0.15 ? 'Wet' : 'Dry') + ' (looks)' : sL;
  var shown = s0.blackIce ? P.clamp(0.8, 0, 1) : s0.mu;
  $('surf').textContent = 'Road: ' + sL + (s0.bridge ? ' · bridge deck' : '') + (c.hydro > 0.25 ? ' · HYDROPLANING' : '') + ' · est. grip ' + Math.round(shown * 100) + '%';
  var ev = AI.events.usacup ? 'USA Cup weekend · NSC traffic' : (AI.events.open3m ? '3M Open week · TPC traffic' : '');
  $('event').classList.toggle('hidden', !ev); $('event').textContent = ev;
  // red-light detection
  var node = s0.node;
  if (node && node.sig && s0.e) { if (RED_WATCH.node !== node) { RED_WATCH.node = node; RED_WATCH.e = LAST_ROAD; RED_WATCH.done = false; } }
  if (RED_WATCH.node && !RED_WATCH.done && RED_WATCH.e && node === RED_WATCH.node) { var st = signalState(node, RED_WATCH.e, SIM_T); if (st === 'R' && v > 4) { RED_WATCH.done = true; pl.stats.redLights++; toast('Ran a red light', 2); } else RED_WATCH.done = true; }
  if (!node) RED_WATCH.node = null;
  if (s0.e && !node) LAST_ROAD = s0.e;
  updateNavText();
}
function AREA_NAME(x, z) {
  for (var k in AREAS) { var a = AREAS[k]; if (x > a.x0 && x < a.x1 && z > a.z0 && z < a.z1) return a.name; }
  for (var i = 0; i < DISTRICTS.length; i++) { var d = DISTRICTS[i]; if (x > X(d.r[0]) && x < X(d.r[1]) && z < Z(d.r[2]) && z > Z(d.r[3])) return d.label; }
  return 'Blaine, MN';
}

// ---------------- minimap, full map, navigation ----------------
var MINIMAP = null;
function buildMinimap() {
  var S = 1600, cv = document.createElement('canvas'); cv.width = S; cv.height = Math.round(S * WORLD.d / WORLD.w);
  MINIMAP = { cv: cv, S: S, k: S / WORLD.w, dirty: true, route: null };
  drawMapBase();
}
function drawMapBase() {
  var M = MINIMAP, cv = M.cv, g = cv.getContext('2d'), k = M.k, W = WEATHER, img = g.createImageData(cv.width, cv.height), d = img.data;
  var pal = {}; for (var t = 0; t < 16; t++) { var lc = luColor(t, W.season || 'summer'), c = new T3.Color(lc.hex); if (W.groundSnow > 0.4 && t !== 2 && t !== 8 && t !== 3) c.lerp(new T3.Color(0.85, 0.87, 0.9), 0.7); pal[t] = [c.r * 200, c.g * 200, c.b * 200]; }
  pal[3] = W.frozen ? [180, 195, 210] : [40, 90, 140];
  for (var j = 0; j < cv.height; j++) for (var i = 0; i < cv.width; i++) { var x = WORLD.x0 + i / k, z = WORLD.z0 + j / k, p = pal[LUR.get(x, z)], q = (j * cv.width + i) * 4; d[q] = p[0]; d[q + 1] = p[1]; d[q + 2] = p[2]; d[q + 3] = 255; }
  g.putImageData(img, 0, 0);
  g.lineCap = 'round'; g.lineJoin = 'round';
  var order = ['lot', 'gravel', 'local', 'col', 'rural', 'art', 'ramp', 'hwy', 'fwy'], col = { lot: '#6b7280', gravel: '#b59f7b', local: '#e5e7eb', col: '#f3f4f6', rural: '#e7dcc4', art: '#fcd34d', ramp: '#fb923c', hwy: '#ef4444', fwy: '#f97316' };
  order.forEach(function (cl) {
    g.strokeStyle = col[cl]; g.lineWidth = Math.max(1.2, { lot: 1, gravel: 1.2, local: 1.4, col: 1.8, rural: 1.8, art: 2.6, ramp: 1.8, hwy: 3.2, fwy: 3.6 }[cl] * k * 3.2);
    g.beginPath();
    NET.edges.forEach(function (e) { if (e.cls !== cl) return; e.pts.forEach(function (p, i) { var x = (p[0] - WORLD.x0) * k, y = (p[1] - WORLD.z0) * k; if (i) g.lineTo(x, y); else g.moveTo(x, y); }); });
    g.stroke();
  });
  BLD.forEach(function (b) { if (b.w * b.d < 800) return; g.fillStyle = '#8b7d6b'; g.fillRect((b.x - b.w / 2 - WORLD.x0) * k, (b.z - b.d / 2 - WORLD.z0) * k, b.w * k, b.d * k); });
  M.dirty = false;
}
var NAV = { target: null, route: null, pts: null, t: 0, idx: 0, t0: 0 };
function navTo(lm) { NAV.target = lm; NAV.route = null; NAV.t = 0; NAV.t0 = WEATHER.gameMin; NAV.rt0 = PLAYER.car.t; $('nav').classList.remove('hidden'); toast('Navigating to ' + lm.name, 2); }
function navCycle() { var i = NAV.target ? LANDMARKS.indexOf(NAV.target) : -1; navTo(LANDMARKS[(i + 1) % LANDMARKS.length]); }
function astar(fromNode, toNode) {
  var N = NET.nodes, open = [fromNode], g = {}, f = {}, came = {}, closed = {};
  g[fromNode] = 0; f[fromNode] = 0;
  var goal = N[toNode], it = 0;
  while (open.length && it++ < 60000) {
    var bi = 0; for (var i = 1; i < open.length; i++) if (f[open[i]] < f[open[bi]]) bi = i;
    var cur = open.splice(bi, 1)[0]; if (cur === toNode) break; closed[cur] = 1;
    var n = N[cur];
    n.edges.forEach(function (id) {
      var e = NET.edges[id], fwd = e.a === cur, nb = fwd ? e.b : e.a;
      if (!fwd && e.lanesB === 0) return; if (e.a === e.b) return; if (closed[nb]) return;
      var cost = g[cur] + e.len / Math.max(e.speed, 5) + (N[nb].sig ? 12 : (N[nb].deg >= 3 ? 3 : 0)) + (e.cls === 'lot' ? 60 : 0);
      if (g[nb] === undefined || cost < g[nb]) { g[nb] = cost; came[nb] = { n: cur, e: e }; f[nb] = cost + Math.hypot(N[nb].x - goal.x, N[nb].z - goal.z) / 30; if (open.indexOf(nb) < 0) open.push(nb); }
    });
  }
  if (g[toNode] === undefined) return null;
  var path = [], c = toNode; while (c !== fromNode) { var s = came[c]; path.unshift({ e: s.e, from: s.n, to: c }); c = s.n; }
  return path;
}
function updateNav(dt) {
  if (!NAV.target || !PLAYER) return;
  var c = PLAYER.car, px = c.x, pz = -c.y, T = NAV.target;
  var dT = Math.hypot(T.x - px, T.z - pz);
  if (dT < 70) { var secs = PLAYER.car.t - NAV.rt0; toast('Arrived: ' + T.name + ' · ' + Math.floor(secs / 60) + ':' + pad2(Math.floor(secs % 60)), 4); NAV.target = null; NAV.route = null; $('nav').classList.add('hidden'); return; }
  NAV.t -= dt;
  var off = NAV.pts ? minDistToPts(NAV.pts, px, pz) : 999;
  if (NAV.t <= 0 || off > 45) {
    NAV.t = 3;
    var ne = nearestEdge(px, pz, 120, function (e) { return e.cls !== 'lot'; });
    var te = nearestEdge(T.x, T.z, 400, function (e) { return e.cls !== 'lot' && e.cls !== 'ramp'; });
    if (!ne || !te) return;
    var hx = Math.cos(c.psi), hz = -Math.sin(c.psi), at = pointAt(ne.e.pts, ne.e.cum, ne.s), fwd = (at.dx * hx + at.dz * hz) > 0;
    if (!ne.e.lanesB) fwd = true;
    var from = fwd ? ne.e.b : ne.e.a, to = Math.hypot(NET.nodes[te.e.a].x - T.x, NET.nodes[te.e.a].z - T.z) < Math.hypot(NET.nodes[te.e.b].x - T.x, NET.nodes[te.e.b].z - T.z) ? te.e.a : te.e.b;
    var path = astar(from, to);
    if (path) { NAV.route = path; var pts = [[px, pz]]; path.forEach(function (s) { var p = s.e.pts.slice(); if (s.e.b === s.from) p.reverse(); pts = pts.concat(p); }); pts.push([T.x, T.z]); NAV.pts = pts; }
  }
}
function minDistToPts(pts, x, z) { var b = 1e9; for (var i = 0; i < pts.length - 1; i += 1) b = Math.min(b, segDist(x, z, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1])); return b; }
function updateNavText() {
  if (!NAV.target || !PLAYER) return;
  var c = PLAYER.car, px = c.x, pz = -c.y, T = NAV.target, dist = 0, txt = '';
  if (NAV.route) {
    // remaining distance + next turn
    var prev = null, acc = Math.hypot(NET.nodes[NAV.route[0].from].x - px, NET.nodes[NAV.route[0].from].z - pz), found = false;
    for (var i = 0; i < NAV.route.length; i++) {
      var s = NAV.route[i];
      if (prev && !found && NET.nodes[s.from].deg >= 3) {
        var din = edgeDirAtNode(prev.e, s.from, false), dout = edgeDirAtNode(s.e, s.from, true), a = turnAngle(din, dout);
        if (Math.abs(a) > 0.5 || prev.e.name !== s.e.name) { txt = (Math.abs(a) < 0.5 ? 'Continue onto ' : (a > 0 ? 'Turn right onto ' : 'Turn left onto ')) + s.e.name + ' in ' + fmtDist(acc); found = true; }
      }
      if (i > 0 || true) acc += s.e.len; prev = s;
    }
    dist = acc;
  } else dist = Math.hypot(T.x - px, T.z - pz);
  $('nav').innerHTML = '➤ <b>' + T.name + '</b> · ' + fmtDist(dist) + '<br>' + (txt || 'Follow the route on the map');
}
function fmtDist(m) { if (UNITS === 'kmh') return m < 1000 ? Math.round(m / 10) * 10 + ' m' : (m / 1000).toFixed(1) + ' km'; var mi = m / MI; return mi < 0.2 ? Math.round(mi * 5280 / 50) * 50 + ' ft (scaled)' : mi.toFixed(1) + ' mi (scaled)'; }
function drawMinimap() {
  var cv = $('mini'), g = cv.getContext('2d'), M = MINIMAP, c = PLAYER.car, S = cv.width;
  if (M.dirty) drawMapBase();
  var px = (c.x - WORLD.x0) * M.k, pz = (-c.y - WORLD.z0) * M.k, zoom = 2.2 + clamp(c.speed() / 40, 0, 1) * 0.8;
  g.save(); g.clearRect(0, 0, S, S); g.beginPath(); g.arc(S / 2, S / 2, S / 2, 0, 6.3); g.clip();
  g.fillStyle = '#0d1522'; g.fillRect(0, 0, S, S);
  g.translate(S / 2, S / 2); g.rotate(c.psi - Math.PI / 2); g.scale(zoom, zoom); g.translate(-px, -pz);
  g.drawImage(M.cv, 0, 0);
  if (NAV.pts) { g.strokeStyle = 'rgba(217,70,239,0.9)'; g.lineWidth = 3 / zoom * 1.5; g.beginPath(); NAV.pts.forEach(function (p, i) { var x = (p[0] - WORLD.x0) * M.k, y = (p[1] - WORLD.z0) * M.k; if (i) g.lineTo(x, y); else g.moveTo(x, y); }); g.stroke(); }
  g.fillStyle = '#93c5fd'; AI.cars.forEach(function (a) { g.fillRect((a.x - WORLD.x0) * M.k - 0.9, (a.z - WORLD.z0) * M.k - 0.9, 1.8, 1.8); });
  if (NAV.target) { g.fillStyle = '#d946ef'; g.beginPath(); g.arc((NAV.target.x - WORLD.x0) * M.k, (NAV.target.z - WORLD.z0) * M.k, 4 / zoom * 2, 0, 6.3); g.fill(); }
  g.restore();
  g.fillStyle = '#f2b705'; g.beginPath(); g.moveTo(S / 2, S / 2 - 11); g.lineTo(S / 2 - 7, S / 2 + 8); g.lineTo(S / 2, S / 2 + 4); g.lineTo(S / 2 + 7, S / 2 + 8); g.closePath(); g.fill();
  var na = -(c.psi - Math.PI / 2); g.fillStyle = '#fff'; g.font = 'bold 18px system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('N', S / 2 + Math.sin(na) * (S / 2 - 16), S / 2 - Math.cos(na) * (S / 2 - 16));
}
function toggleMap() {
  var ov = $('mapov'), open = ov.classList.contains('hidden');
  ov.classList.toggle('hidden', !open); PAUSED = open || !$('menu').classList.contains('hidden');
  if (open) drawBigMap();
}
function drawBigMap() {
  var cv = $('bigmap'), g = cv.getContext('2d'), M = MINIMAP, sx = cv.width / M.cv.width, sy = cv.height / M.cv.height;
  g.drawImage(M.cv, 0, 0, cv.width, cv.height);
  if (NAV.pts) { g.strokeStyle = '#d946ef'; g.lineWidth = 3; g.beginPath(); NAV.pts.forEach(function (p, i) { var x = (p[0] - WORLD.x0) * M.k * sx, y = (p[1] - WORLD.z0) * M.k * sy; if (i) g.lineTo(x, y); else g.moveTo(x, y); }); g.stroke(); }
  g.font = 'bold 13px system-ui'; g.textBaseline = 'middle';
  LANDMARKS.forEach(function (l) { var x = (l.x - WORLD.x0) * M.k * sx, y = (l.z - WORLD.z0) * M.k * sy; g.fillStyle = '#d946ef'; g.beginPath(); g.arc(x, y, 5, 0, 6.3); g.fill(); g.fillStyle = 'rgba(0,0,0,.65)'; var w = g.measureText(l.name).width; g.fillRect(x + 7, y - 9, w + 8, 18); g.fillStyle = '#fff'; g.fillText(l.name, x + 11, y); });
  [['US-10', -0.5, 89.1], ['MN-610', -0.85, 87.2], ['I-35W', 3.62, 93.8], ['MN-65', 1.62, 120], ['University Ave', 0.02, 112], ['Lexington Ave', 4.52, 116], ['Radisson Rd', 3.37, 99], ['Main St / 125th', 2.2, 125.25], ['109th Ave', 0.6, 109.25], ['105th Ave', 0.6, 105.25], ['99th Ave', 0.6, 99.25]].forEach(function (r) { var x = (X(r[1]) - WORLD.x0) * M.k * sx, y = (Z(r[2]) - WORLD.z0) * M.k * sy; g.fillStyle = '#111'; g.font = 'bold 12px system-ui'; g.fillText(r[0], x + 3, y); });
  var c = PLAYER.car, px = (c.x - WORLD.x0) * M.k * sx, py = (-c.y - WORLD.z0) * M.k * sy;
  g.save(); g.translate(px, py); g.rotate(-c.psi + Math.PI / 2); g.fillStyle = '#f2b705'; g.beginPath(); g.moveTo(0, -12); g.lineTo(-8, 9); g.lineTo(8, 9); g.closePath(); g.fill(); g.restore();
  var list = $('maplist'); list.innerHTML = '';
  LANDMARKS.forEach(function (l) {
    var b = document.createElement('button'); b.className = 'chip'; b.textContent = '➤ ' + l.name; b.title = l.sub; b.onclick = function () { navTo(l); toggleMap(); }; list.appendChild(b);
    var t = document.createElement('button'); t.className = 'chip'; t.textContent = '⤴ teleport'; t.onclick = function () { var n = nearestEdge(l.x, l.z, 500, function (e) { return e.cls !== 'lot' && e.cls !== 'ramp' && e.cls !== 'fwy'; }); if (n) { var at = pointAt(n.e.pts, n.e.cum, n.s); PLAYER.car.reset(at.x, -at.z, yawOf(at.dx, at.dz), 0); PLAYER.y = n.e.h[n.k]; AI.clear(); AI.nearT = 0; CAM.init = false; CAM.pos = null; TRAILS.clear(); } toggleMap(); toast(l.name + ' — ' + l.sub, 3); }; list.appendChild(t);
  });
}
$('bigmap').addEventListener('click', function (e) {
  var r = this.getBoundingClientRect(), x = (e.clientX - r.left) / r.width * WORLD.w + WORLD.x0, z = (e.clientY - r.top) / r.height * WORLD.d + WORLD.z0;
  navTo({ name: AREA_NAME(x, z) + ' (pin)', sub: '', x: x, z: z }); toggleMap();
});

// ---------------- menu ----------------
function toggleMenu() {
  var m = $('menu'), open = m.classList.contains('hidden');
  m.classList.toggle('hidden', !open); PAUSED = open || !$('mapov').classList.contains('hidden');
  if (open) fillMenu();
}
function fillMenu() {
  var W = WEATHER;
  $('mdate').value = W.year + '-' + pad2(W.month) + '-' + pad2(W.day); $('mtime').value = pad2(Math.floor(W.minutes / 60)) + ':' + pad2(Math.floor(W.minutes % 60));
  $('mts').value = String(W.timeScale); $('mev').value = EVENT_MODE; $('mtr').value = String(AI.density);
  var mw = $('mwx'); if (!mw.options.length) { mw.innerHTML = '<option value="auto">Auto (climatology)</option>'; for (var k in WSTATES) { var o = document.createElement('option'); o.value = k; o.textContent = WSTATES[k].label; mw.appendChild(o); } }
  mw.value = W.mode === 'auto' ? 'auto' : W.state;
  var mc = $('mcam'); if (!mc.options.length) CAM_MODES.forEach(function (n, i) { var o = document.createElement('option'); o.value = i; o.textContent = n; mc.appendChild(o); }); mc.value = CAM.mode;
  var c = PLAYER.car; $('mabs').checked = c.aids.abs; $('mtc').checked = c.aids.tc; $('mesc').checked = c.aids.esc; $('mman').checked = c.manual; $('msnd').checked = AUDIO.on;
  $('mty').value = c.compound === PLAYER.spec.tire.compound ? 'default' : c.compound;
  var s = PLAYER.stats;
  $('statGrid').innerHTML = [['Distance', fmtDist(s.dist)], ['Top speed', Math.round(s.maxSpeed / MPH) + ' mph'], ['Collisions', s.crashes], ['Red lights run', s.redLights], ['Work-zone speeding', s.wzSpeeding], ['Vehicle', PLAYER.spec.name], ['Tyres', P.COMPOUNDS[c.compound].name], ['Drive', c.drive], ['Traffic nearby', AI.cars.length]].map(function (a) { return '<div>' + a[0] + '<b>' + a[1] + '</b></div>'; }).join('');
  var rows = VALID.rows.map(function (r) { return '<tr><td>' + r.vehicle + '</td><td>' + r.test + '</td><td style="text-align:right">' + fmtNum(r.value) + ' ' + r.unit + '</td><td style="text-align:right;color:#8fa3bd">' + fmtNum(r.lo) + '–' + fmtNum(r.hi) + '</td><td class="' + (r.pass ? 'pass' : 'fail') + '">' + (r.pass ? '✓' : '✗') + '</td></tr>'; }).join('');
  $('valReport').innerHTML = '<p>' + VALID.passed + '/' + VALID.total + ' checks passed (run in ' + ((VALID.ms || 0) / 1000).toFixed(1) + ' s at ' + Math.round(1 / P.DT) + ' Hz).</p><div style="max-height:52vh;overflow:auto"><table style="width:100%;border-collapse:collapse">' + rows + '</table></div>';
  $('about').innerHTML = ABOUT_HTML;
}
var ABOUT_HTML = '<p><b>Geography.</b> Blaine is rebuilt on the Anoka County address grid: numbered avenues sit 1/8 mile apart and the whole map is compressed to about half scale (1 mile → 800 m) so topology and intersection angles are kept. The real arterial skeleton is placed by address: MN-65 (Central Ave NE), University Ave (CR 51), Radisson Rd (CR 52), Lexington Ave (CR 17), 85th–133rd Ave, US-10 through the south-west, and I-35W through the south-east with diamond interchanges at 95th Ave and Lexington Ave. MN-610 actually ends ~3 miles west in Coon Rapids; its junction with US-10 is pulled onto the west edge of the map. Local streets inside each district are procedural (older grid in the south-west, loops and cul-de-sacs in the north, mobile-home parks along Hwy 65).</p>' +
  '<p><b>2026 Hwy 65 project.</b> MnDOT is converting the at-grade signals at 99th, 105th, 109th and 117th/Cloud Dr into interchanges (2026–2029). The simulated work zone runs 101.5–108.5 Ave: right lane closed, lanes shifted toward the median, 45 mph, frontage roads and bridge piers at 105th, crews on summer weekdays.</p>' +
  '<p><b>Physics.</b> 3-DOF body + four spinning wheels at 480 Hz, Magic-Formula tyres with combined slip, load sensitivity, second-order weight transfer, torque-curve engines, torque converter / clutch launch, open or limited-slip diffs, FWD/RWD/4H, ABS/TC/ESC, EBD, aero and rolling drag, hydroplaning. Grip per surface is calibrated against published snow/ice/wet braking figures and checked by the validation suite.</p>' +
  '<p><b>Weather.</b> Temperatures follow MSP 1991–2020 monthly normals with a diurnal cycle and synoptic anomaly; the sun uses the NOAA solar-position equations at 45.16° N with US daylight saving. Roads accumulate snow by class, get plowed and salted on class schedules (salt stops working below ~12 °F), refreeze, and bridge decks glaze with black ice near freezing — which the HUD grip estimate does not show.</p>' +
  '<p><b>Events.</b> USA Cup (National Sports Center, mid-July) and the 3M Open (TPC Twin Cities, late July) use approximate annual windows; demand, parking fill and shuttle traffic scale up around each venue.</p>';
$('mClose').onclick = toggleMenu;
document.querySelectorAll('#menu .tabs .chip').forEach(function (b) { b.onclick = function () { document.querySelectorAll('#menu .tabs .chip').forEach(function (x) { x.classList.toggle('sel', x === b); }); ['tSet', 'tStats', 'tVal', 'tAbout'].forEach(function (t) { $(t).classList.toggle('hidden', t !== b.dataset.tab); }); }; });
$('mApply').onclick = function () {
  var d = $('mdate').value.split('-').map(Number), t = $('mtime').value.split(':').map(Number);
  EVENT_MODE = $('mev').value; WEATHER.timeScale = +$('mts').value; AI.density = +$('mtr').value;
  var wx = $('mwx').value;
  WEATHER.forceTemp = undefined;
  setDate(Math.max(2026, d[0]), d[1], d[2], t[0] * 60 + t[1]); WEATHER.hour = WEATHER.minutes / 60;
  WEATHER.tempF = normalTemp(WEATHER.doy, WEATHER.hour).t;
  if (wx === 'auto') WEATHER.mode = 'auto'; else { WEATHER.mode = 'fixed'; setWeatherState(wx, true); if ((wx === 'lightsnow' || wx === 'heavysnow' || wx === 'blizzard') && WEATHER.tempF > 30) WEATHER.tempF = WEATHER.forceTemp = 24; }
  primeConditions(); refillParking(true);
  var c = PLAYER.car; c.aids.abs = $('mabs').checked; c.aids.tc = $('mtc').checked; c.aids.esc = $('mesc').checked; c.manual = $('mman').checked; AUDIO.setOn($('msnd').checked);
  var ty = $('mty').value; c.compound = ty === 'default' ? PLAYER.spec.tire.compound : ty;
  CAM.mode = +$('mcam').value; enableTilt($('mtilt').value === 'tilt');
  syncIndicators(); toggleMenu(); toast('Conditions applied', 1.5);
};
$('mGarage').onclick = function () { toggleMenu(); RUNNING = false; $('hud').classList.add('hidden'); $('touch').classList.add('hidden'); $('boot').classList.remove('hidden'); renderVehicles(); AUDIO.setOn(false); };
$('mFull').onclick = function () { var d = document.documentElement; if (!document.fullscreenElement) { var fp = (d.requestFullscreen || d.webkitRequestFullscreen || function () { }).call(d); if (fp && fp.catch) fp.catch(function () { toast('Fullscreen unavailable here', 2); }); if (screen.orientation && screen.orientation.lock) screen.orientation.lock('landscape').catch(function () { }); } else document.exitFullscreen(); };
$('bMenu').onclick = toggleMenu; $('bCam').onclick = cycleCamera; $('bMap').onclick = toggleMap; $('bReset').onclick = function () { resetPlayerToRoad(); }; $('bLights').onclick = cycleLights;
$('mapClose').onclick = toggleMap; $('mapClear').onclick = function () { NAV.target = null; NAV.route = null; NAV.pts = null; $('nav').classList.add('hidden'); toggleMap(); };

// ---------------- audio (WebAudio synthesis) ----------------
var AUDIO = {
  ctx: null, on: true,
  init: function () {
    if (this.ctx) { this.setOn(this.on); return; }
    try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { this.on = false; return; }
    var a = this.ctx, master = a.createGain(); master.gain.value = 0.55; master.connect(a.destination); this.master = master;
    var noise = a.createBuffer(1, a.sampleRate * 2, a.sampleRate), d = noise.getChannelData(0); for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    function nsrc() { var s = a.createBufferSource(); s.buffer = noise; s.loop = true; s.start(); return s; }
    this.o1 = a.createOscillator(); this.o1.type = 'sawtooth'; this.o2 = a.createOscillator(); this.o2.type = 'square';
    this.lp = a.createBiquadFilter(); this.lp.type = 'lowpass'; this.lp.Q.value = 2; this.eg = a.createGain(); this.eg.gain.value = 0;
    this.o1.connect(this.lp); var g2 = a.createGain(); g2.gain.value = 0.4; this.o2.connect(g2); g2.connect(this.lp); this.lp.connect(this.eg); this.eg.connect(master); this.o1.start(); this.o2.start();
    var road = nsrc(); this.rf = a.createBiquadFilter(); this.rf.type = 'bandpass'; this.rf.Q.value = 0.7; this.rg = a.createGain(); this.rg.gain.value = 0; road.connect(this.rf); this.rf.connect(this.rg); this.rg.connect(master);
    var sq = nsrc(); this.sf = a.createBiquadFilter(); this.sf.type = 'bandpass'; this.sf.frequency.value = 1900; this.sf.Q.value = 9; this.sg = a.createGain(); this.sg.gain.value = 0; sq.connect(this.sf); this.sf.connect(this.sg); this.sg.connect(master);
    var rn = nsrc(); this.pf = a.createBiquadFilter(); this.pf.type = 'highpass'; this.pf.frequency.value = 2500; this.pg = a.createGain(); this.pg.gain.value = 0; rn.connect(this.pf); this.pf.connect(this.pg); this.pg.connect(master);
    this.noise = noise;
  },
  setOn: function (v) { this.on = v; if (this.ctx) { if (v) this.ctx.resume(); else this.ctx.suspend(); } },
  thump: function (k) {
    if (!this.ctx || !this.on) return; var a = this.ctx, s = a.createBufferSource(), g = a.createGain(), f = a.createBiquadFilter();
    s.buffer = this.noise; f.type = 'lowpass'; f.frequency.value = 260; g.gain.setValueAtTime(0.9 * k, a.currentTime); g.gain.exponentialRampToValueAtTime(0.001, a.currentTime + 0.35);
    s.connect(f); f.connect(g); g.connect(this.master); s.start(); s.stop(a.currentTime + 0.4);
  },
  update: function () {
    if (!this.ctx || !this.on || !PLAYER) return;
    var c = PLAYER.car, sp = PLAYER.spec, t = this.ctx.currentTime, rpm = c.rpm(), cyl = sp.id === 'sedan' ? 4 : (sp.id === 'beater' ? 6 : 8), f = rpm / 60 * cyl / 2;
    this.o1.frequency.setTargetAtTime(f, t, 0.03); this.o2.frequency.setTargetAtTime(f / 2, t, 0.03);
    var th = c.input.throttle; this.lp.frequency.setTargetAtTime(220 + th * 1800 + rpm * 0.12, t, 0.05);
    this.eg.gain.setTargetAtTime((0.05 + th * 0.12 + rpm / sp.engine.redline * 0.05) * (PAUSED ? 0 : 1), t, 0.05);
    var v = c.speed(), snowy = PLAYER.surf[0].kind === 'snow';
    this.rf.frequency.setTargetAtTime(snowy ? 500 : 280 + v * 12, t, 0.1); this.rg.gain.setTargetAtTime(Math.min(0.28, v * v * 0.00018 + (snowy ? v * 0.004 : 0)) * (PAUSED ? 0 : 1), t, 0.1);
    var slip = 0; c.w.forEach(function (w, i) { if (PLAYER.surf[i].kind === 'dry') slip = Math.max(slip, w.slipVel); });
    this.sg.gain.setTargetAtTime(clamp((slip - 3) * 0.05, 0, 0.22) * (PAUSED ? 0 : 1), t, 0.05);
    var rain = (WEATHER.precip === 'rain' || WEATHER.precip === 'freezing') ? WEATHER.intensity : 0; this.pg.gain.setTargetAtTime(rain * 0.12 * (PAUSED ? 0 : 1), t, 0.3);
  }
};

// ---------------- main loop ----------------
var LAST = 0, FPS = { acc: 0, n: 0, v: 60 }, SIM_T = 0;
function loop(now) {
  if (!RUNNING) return;
  requestAnimationFrame(loop);
  var dt = Math.min(0.05, Math.max(0.001, (now - LAST) / 1000)); LAST = now;
  FPS.acc += dt; FPS.n++; if (FPS.acc > 1) { FPS.v = FPS.n / FPS.acc; FPS.acc = 0; FPS.n = 0; BD.fps = FPS.v; }
  if (PAUSED) { AUDIO.update(); RENDERER.render(SCENE, CAMERA); return; }
  update(dt);
  present(dt);
}
function update(dt) {
  var inp = readInput(dt);
  ROADSTATE = WEATHER;
  updateWeather(dt);
  updatePlayer(dt, inp);
  collideParked(PLAYER);
  var WK = { speed: 1, headway: 1, accel: 1, brake: 1, density: 1 }, W = WEATHER;
  var slick = Math.max(W.cls[3].snow, W.cls[2].snow * 0.8, W.cls[3].ice * 1.2, W.blackIce * 0.3);
  WK.speed = 1 - 0.38 * clamp(slick, 0, 1) - 0.1 * (W.precip === 'rain' ? W.intensity : 0) - 0.25 * clamp((200 - W.visibility) / 150, 0, 1);
  WK.headway = 1 + 1.2 * clamp(slick, 0, 1) + (W.precip !== 'none' ? 0.2 : 0); WK.accel = 1 - 0.5 * clamp(slick, 0, 1); WK.brake = 1 - 0.45 * clamp(slick, 0, 1);
  WK.density = W.state === 'blizzard' ? 0.35 : (W.state === 'heavysnow' ? 0.6 : 1);
  ensurePlows(W.season === 'winter' && (W.precip === 'snow' || W.cls[2].snow > 0.08 || W.groundSnow > 0.5) || (W.precip === 'freezing'));
  CAM_FWD = [Math.cos(CAM.yaw || 0), -Math.sin(CAM.yaw || 0)];
  SIM_T += dt;
  updateAI(dt, SIM_T, WK);
  updateDrums(dt);
  PARTS.update(dt, [Math.cos(W.wind.dir) * W.wind.spd * 0.3, Math.sin(W.wind.dir) * W.wind.spd * 0.3]);
  updateCamera(CAMERA, dt);
  updateEnvironment(dt, CAMERA, SCENE, PLAYER.car.x, -PLAYER.car.y, QUAL);
  refillParking(false);
  updateNav(dt);
}
function present(dt) {
  updateSignalHeads(SIM_T);
  var cx = CAMERA.position.x, cz = CAMERA.position.z, far = CAMERA.far + TILE * 0.75;
  for (var i = 0; i < TILES.length; i++) { var T = TILES[i], d = Math.hypot(T.x - cx, T.z - cz); T.g.visible = d < far; }
  updateTreeLOD(cx, cz, QUAL.key === 'low' ? 380 : 560);
  updateWindshield(dt, CAM.mode === 2);
  updateHUD(dt);
  MMT = (MMT || 0) - dt; if (MMT <= 0) { MMT = 1 / 15; drawMinimap(); }
  AUDIO.update();
  renderFrame(RENDERER, SCENE, CAMERA, QUAL, dt);
}
// fixed-step fast-forward for automated tests (no rendering between steps)
BD.sim = function (secs, h) { h = h || 1 / 60; for (var t = 0; t < secs; t += h) update(h); HUDT = 0; present(h); return BD.state(); };
var MMT = 0;
BD.state = function () { return { player: PLAYER && { x: PLAYER.car.x, z: -PLAYER.car.y, y: PLAYER.y, v: PLAYER.car.speed(), gear: PLAYER.car.gear, surf: PLAYER.surf[0].label, mu: PLAYER.surf[0].mu }, ai: AI.cars.length, plows: AI.plows.length, fps: BD.fps, weather: { t: WEATHER.tempF, state: WEATHER.state, precip: WEATHER.precip, snow: WEATHER.cls.map(function (c) { return +c.snow.toFixed(2); }), blackIce: WEATHER.blackIce, sunEl: WEATHER.sunEl * 180 / Math.PI, vis: WEATHER.visibility }, events: AI.events, calls: RENDERER && RENDERER.info.render.calls, tris: RENDERER && RENDERER.info.render.triangles }; };
BD.drive = function (inp) { BD.forced = inp; };
BD.dbg = function () { return { near: AI.near.length, sum: AI.nearSum, tgt: AI.target, dens: AI.density, ttf: trafficTimeFactor(), cars: AI.cars.length, free: Object.keys(AI.free).map(function (k) { return k + ':' + AI.free[k].length; }).join(','), simT: SIM_T }; };
BD.setCam = function (m) { CAM.mode = m; CAM.init = false; };
BD.teleport = function (x, z, yaw, v) { PLAYER.car.reset(x, -z, yaw, v || 0); PLAYER.y = surfaceAt(x, z, 0, {}).h || 0; CAM.init = false; CAM.pos = null; };
BD.nearestHouse = function (x, z) { var b = null, bd = 1e9; BLD.forEach(function (q) { if (q.kind !== 'house') return; var d = Math.hypot(q.x - x, q.z - z); if (d < bd) { bd = d; b = q; } }); return b && { x: b.x, z: b.z, w: b.w, d: b.d, rot: b.rot }; };
BD.lake = function () { return { x: LADDIE.x, z: LADDIE.z, rz: LADDIE.rz }; };
BD.start = function (opts) { opts = opts || {}; if (opts.veh) GARAGE.veh = opts.veh; if (opts.scen) { GARAGE.scen = opts.scen; var sc = SCENARIOS.filter(function (s) { return s.id === opts.scen; })[0]; if (sc && sc.start) $('start').value = sc.start; $('cev').value = (sc && sc.ev) || 'auto'; } if (opts.start) $('start').value = opts.start; if (opts.quality) $('cq').value = opts.quality; startDrive(); };
var _readInput = readInput;
readInput = function (dt) { var r = _readInput(dt); if (BD.forced) { r.gas = BD.forced.gas || 0; r.brake = BD.forced.brake || 0; r.steer = (BD.forced.steer || 0) * PLAYER.spec.steer.lock; r.hand = BD.forced.hand || 0; } return r; };
initTouch();
boot();
