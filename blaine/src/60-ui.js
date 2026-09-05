// =============================================================================
// 60-ui — input (keyboard and touch), the HUD, the minimap, menus and audio.
//
// Touch devices get a different control scheme automatically: a draggable
// steering wheel under the left thumb, big gas/brake pads under the right, and
// camera/handbrake/horn buttons sized for thumbs in landscape.
// =============================================================================

var $ = function (id) { return document.getElementById(id); };
var UI = {};

var INPUT = {
  steer: 0, throttle: 0, brake: 0, handbrake: false, lookBack: false,
  keySteer: 0, touchSteer: 0, touchGas: 0, touchBrake: 0, touchHand: false,
  usingTouch: false
};
var KEYS = {};

// ------------------------------------------------------------------ keyboard
function initKeyboard() {
  window.addEventListener('keydown', function (e) {
    if (e.repeat) { return; }
    KEYS[e.code] = true;
    switch (e.code) {
      case 'KeyC': cycleCamera(); break;
      case 'KeyL': PLAYER.lightsManual = !PLAYER.lightsManual; toast('Headlights ' + (PLAYER.lightsManual ? 'forced on' : 'automatic')); break;
      case 'KeyH': playHorn(); break;
      case 'KeyR': respawnPlayer(); break;
      case 'KeyM': toggleMenu(); break;
      case 'KeyP': GAME.paused = !GAME.paused; toast(GAME.paused ? 'Paused' : 'Resumed'); break;
      case 'Escape': toggleMenu(); break;
      case 'Digit1': selectVehicle(0); break;
      case 'Digit2': selectVehicle(1); break;
      case 'Digit3': selectVehicle(2); break;
      case 'Digit4': selectVehicle(3); break;
      case 'BracketLeft': GAME.mapZoom = clamp(GAME.mapZoom * 1.5, 0.35, 14); break;
      case 'BracketRight': GAME.mapZoom = clamp(GAME.mapZoom / 1.5, 0.35, 14); break;
    }
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].indexOf(e.code) >= 0) e.preventDefault();
  });
  window.addEventListener('keyup', function (e) { KEYS[e.code] = false; });
  window.addEventListener('blur', function () { for (var k in KEYS) KEYS[k] = false; });
}

function readKeyboard(dt) {
  var left = KEYS.KeyA || KEYS.ArrowLeft, right = KEYS.KeyD || KEYS.ArrowRight;
  var target = (left ? -1 : 0) + (right ? 1 : 0);
  // Analogue-feeling steering from digital keys: quick to apply, quick to centre.
  var rate = target === 0 ? 7.5 : 4.2;
  INPUT.keySteer = damp(INPUT.keySteer, target, rate, dt);
  var up = KEYS.KeyW || KEYS.ArrowUp, down = KEYS.KeyS || KEYS.ArrowDown;
  return {
    steer: INPUT.keySteer,
    throttle: up ? 1 : 0,
    brake: down ? 1 : 0,
    handbrake: !!KEYS.Space,
    lookBack: !!(KEYS.ShiftLeft || KEYS.ShiftRight)
  };
}

// --------------------------------------------------------------------- touch
function initTouch() {
  var wheelC = $('wheelC'), wheelBox = $('wheel');
  var wctx = wheelC.getContext('2d');
  var wheelAngle = 0, dragging = false, dragId = null, dragStart = 0, angleStart = 0;

  function drawWheel() {
    var w = wheelC.width, h = wheelC.height, cx = w / 2, cy = h / 2, R = w * 0.44;
    wctx.clearRect(0, 0, w, h);
    wctx.save();
    wctx.translate(cx, cy);
    wctx.rotate(wheelAngle);
    // rim
    wctx.lineWidth = R * 0.20;
    wctx.strokeStyle = 'rgba(12,18,26,0.82)';
    wctx.beginPath(); wctx.arc(0, 0, R, 0, TAU); wctx.stroke();
    wctx.lineWidth = R * 0.12;
    wctx.strokeStyle = dragging ? 'rgba(87,208,255,0.95)' : 'rgba(200,216,232,0.75)';
    wctx.beginPath(); wctx.arc(0, 0, R, 0, TAU); wctx.stroke();
    // spokes
    wctx.strokeStyle = dragging ? 'rgba(87,208,255,0.9)' : 'rgba(190,206,222,0.7)';
    wctx.lineWidth = R * 0.13;
    [-PI * 0.72, -PI * 0.28, PI * 0.5].forEach(function (a) {
      wctx.beginPath(); wctx.moveTo(0, 0);
      wctx.lineTo(Math.cos(a) * R * 0.92, Math.sin(a) * R * 0.92);
      wctx.stroke();
    });
    wctx.fillStyle = 'rgba(16,24,34,0.92)';
    wctx.beginPath(); wctx.arc(0, 0, R * 0.26, 0, TAU); wctx.fill();
    wctx.strokeStyle = 'rgba(87,208,255,0.85)'; wctx.lineWidth = 3;
    wctx.beginPath(); wctx.moveTo(0, -R * 0.26); wctx.lineTo(0, -R * 0.02); wctx.stroke();
    wctx.restore();
  }

  function pointerAngle(ev) {
    var r = wheelBox.getBoundingClientRect();
    return Math.atan2(ev.clientY - (r.top + r.height / 2), ev.clientX - (r.left + r.width / 2));
  }
  wheelBox.addEventListener('pointerdown', function (e) {
    dragging = true; dragId = e.pointerId;
    dragStart = pointerAngle(e); angleStart = wheelAngle;
    wheelBox.setPointerCapture(e.pointerId);
    INPUT.usingTouch = true;
    e.preventDefault();
  });
  wheelBox.addEventListener('pointermove', function (e) {
    if (!dragging || e.pointerId !== dragId) return;
    var d = wrapAngle(pointerAngle(e) - dragStart);
    wheelAngle = clamp(angleStart + d, -2.2, 2.2);
    INPUT.touchSteer = clamp(wheelAngle / 2.0, -1, 1);
    drawWheel();
    e.preventDefault();
  });
  function release(e) {
    if (e.pointerId !== dragId) return;
    dragging = false; dragId = null;
  }
  wheelBox.addEventListener('pointerup', release);
  wheelBox.addEventListener('pointercancel', release);

  UI.wheelTick = function (dt) {
    if (!dragging) {
      // Self-centring, like a real wheel.
      wheelAngle = damp(wheelAngle, 0, 7, dt);
      INPUT.touchSteer = clamp(wheelAngle / 2.0, -1, 1);
      if (Math.abs(wheelAngle) > 0.001) drawWheel();
    }
  };
  drawWheel();

  function pad(el, onDown, onUp) {
    el.addEventListener('pointerdown', function (e) {
      el.classList.add('down'); onDown(); INPUT.usingTouch = true;
      el.setPointerCapture(e.pointerId); e.preventDefault();
    });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (t) {
      el.addEventListener(t, function () { el.classList.remove('down'); onUp(); });
    });
  }
  pad($('pGas'), function () { INPUT.touchGas = 1; }, function () { INPUT.touchGas = 0; });
  pad($('pBrake'), function () { INPUT.touchBrake = 1; }, function () { INPUT.touchBrake = 0; });
  pad($('tHand'), function () { INPUT.touchHand = true; }, function () { INPUT.touchHand = false; });
  $('tHorn').addEventListener('pointerdown', function (e) { playHorn(); e.preventDefault(); });
  $('tCam').addEventListener('click', cycleCamera);
  $('tMenu').addEventListener('click', toggleMenu);
}

function readTouch() {
  return {
    steer: INPUT.touchSteer,
    throttle: INPUT.touchGas,
    brake: INPUT.touchBrake,
    handbrake: INPUT.touchHand,
    lookBack: false
  };
}

// ---------------------------------------------------------------------- HUD
var _hudT = 0, _mapT = 0;
function initHUD() {
  UI.speedoCtx = $('speedoC').getContext('2d');
  UI.mphBig = $('mphbig').firstElementChild;
  UI.mapCtx = $('mapC').getContext('2d');
  $('btnCam').addEventListener('click', cycleCamera);
  $('btnMenu').addEventListener('click', toggleMenu);
  $('btnClose').addEventListener('click', function () { toggleMenu(false); });
  $('mapIn').addEventListener('click', function () { GAME.mapZoom = clamp(GAME.mapZoom * 1.6, 0.35, 14); drawMinimap(true); });
  $('mapOut').addEventListener('click', function () { GAME.mapZoom = clamp(GAME.mapZoom / 1.6, 0.35, 14); drawMinimap(true); });
  buildMinimapIndex();
}

function drawSpeedo() {
  var ctx = UI.speedoCtx, C = $('speedoC'), w = C.width, h = C.height;
  var cx = w / 2, cy = h / 2, R = w * 0.42;
  var spec = PLAYER.spec;
  var mph = Math.abs(PLAYER.vx) * 2.23694;
  var maxMph = Math.ceil((spec.topSpeed * 2.23694) / 20) * 20;
  ctx.clearRect(0, 0, w, h);

  // dial
  ctx.save();
  ctx.translate(cx, cy);
  var start = PI * 0.75, sweep = PI * 1.5;
  ctx.lineWidth = R * 0.10;
  ctx.strokeStyle = 'rgba(255,255,255,0.10)';
  ctx.beginPath(); ctx.arc(0, 0, R, start, start + sweep); ctx.stroke();

  var frac = clamp01(mph / maxMph);
  var grd = ctx.createLinearGradient(-R, 0, R, 0);
  grd.addColorStop(0, '#57d0ff'); grd.addColorStop(0.65, '#7ee5b0'); grd.addColorStop(1, '#ff6b6b');
  ctx.strokeStyle = grd;
  ctx.beginPath(); ctx.arc(0, 0, R, start, start + sweep * frac); ctx.stroke();

  // ticks
  ctx.strokeStyle = 'rgba(255,255,255,0.45)';
  ctx.fillStyle = 'rgba(220,232,244,0.75)';
  ctx.font = '600 ' + (R * 0.14) + 'px ui-sans-serif,system-ui,sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  for (var i = 0; i <= maxMph; i += 20) {
    var a = start + sweep * (i / maxMph);
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a) * R * 0.83, Math.sin(a) * R * 0.83);
    ctx.lineTo(Math.cos(a) * R * 0.72, Math.sin(a) * R * 0.72);
    ctx.stroke();
    ctx.fillText(String(i), Math.cos(a) * R * 0.58, Math.sin(a) * R * 0.58);
  }

  // needle
  var na = start + sweep * frac;
  ctx.strokeStyle = '#ff7a5c'; ctx.lineWidth = R * 0.055; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(-Math.cos(na) * R * 0.12, -Math.sin(na) * R * 0.12);
  ctx.lineTo(Math.cos(na) * R * 0.80, Math.sin(na) * R * 0.80); ctx.stroke();
  ctx.fillStyle = '#0d1219'; ctx.beginPath(); ctx.arc(0, 0, R * 0.11, 0, TAU); ctx.fill();

  // readout
  ctx.fillStyle = '#e8eef7';
  ctx.font = '800 ' + (R * 0.42) + 'px ui-sans-serif,system-ui,sans-serif';
  ctx.fillText(String(Math.round(mph)), 0, R * 0.34);
  ctx.font = '600 ' + (R * 0.13) + 'px ui-sans-serif,system-ui,sans-serif';
  ctx.fillStyle = '#9fb0c4';
  ctx.fillText('MPH', 0, R * 0.60);

  // rev strip
  var rf = clamp01(PLAYER.rpm / spec.redline);
  ctx.strokeStyle = rf > 0.9 ? '#ff6b6b' : 'rgba(87,208,255,0.85)';
  ctx.lineWidth = R * 0.045;
  ctx.beginPath(); ctx.arc(0, 0, R * 0.88, start, start + sweep * rf); ctx.stroke();
  ctx.restore();
}

// ------------------------------------------------------------------- minimap
var MMAP = { grid: {}, cell: 700, segs: [] };
function buildMinimapIndex() {
  CITY.roads.forEach(function (r) {
    var rank = r.cls === 'freeway' ? 3 : (r.cls === 'highway' || r.cls === 'arterial') ? 2 : (r.cls === 'collector' ? 1 : 0);
    for (var i = 0; i < r.pts.length - 1; i++) {
      var s = { ax: r.pts[i][0], az: r.pts[i][1], bx: r.pts[i + 1][0], bz: r.pts[i + 1][1], rank: rank, name: r.name };
      MMAP.segs.push(s);
      var x0 = Math.min(s.ax, s.bx), x1 = Math.max(s.ax, s.bx);
      var z0 = Math.min(s.az, s.bz), z1 = Math.max(s.az, s.bz);
      for (var cx = Math.floor(x0 / MMAP.cell); cx <= Math.floor(x1 / MMAP.cell); cx++)
        for (var cz = Math.floor(z0 / MMAP.cell); cz <= Math.floor(z1 / MMAP.cell); cz++) {
          var k = cx + ',' + cz;
          (MMAP.grid[k] || (MMAP.grid[k] = [])).push(s);
        }
    }
  });
}

function drawMinimap() {
  var ctx = UI.mapCtx, C = $('mapC'), w = C.width, h = C.height;
  var zoom = GAME.mapZoom;                 // pixels per metre
  var range = (w / 2) / zoom;
  var px = PLAYER.x, pz = PLAYER.z;

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#0b1119'; ctx.fillRect(0, 0, w, h);

  function toX(x) { return w / 2 + (x - px) * zoom; }
  function toY(z) { return h / 2 + (z - pz) * zoom; }

  // water first
  ctx.fillStyle = '#12314a';
  CITY.lakes.forEach(function (lk) {
    if (Math.abs(lk.x - px) > range + lk.rx || Math.abs(lk.z - pz) > range + lk.rz) return;
    ctx.save();
    ctx.translate(toX(lk.x), toY(lk.z));
    ctx.rotate(lk.rot);
    ctx.beginPath(); ctx.ellipse(0, 0, lk.rx * zoom, lk.rz * zoom, 0, 0, TAU); ctx.fill();
    ctx.restore();
  });

  // roads, thickest class last
  var seen = {}, list = [];
  var c0x = Math.floor((px - range) / MMAP.cell), c1x = Math.floor((px + range) / MMAP.cell);
  var c0z = Math.floor((pz - range) / MMAP.cell), c1z = Math.floor((pz + range) / MMAP.cell);
  for (var cx = c0x; cx <= c1x; cx++) for (var cz = c0z; cz <= c1z; cz++) {
    var cell = MMAP.grid[cx + ',' + cz];
    if (!cell) continue;
    for (var i = 0; i < cell.length; i++) {
      var s = cell[i];
      if (seen[s.ax + ',' + s.az + ',' + s.bx]) continue;
      seen[s.ax + ',' + s.az + ',' + s.bx] = 1;
      list.push(s);
    }
  }
  list.sort(function (a, b) { return a.rank - b.rank; });
  var styles = [
    { c: '#3d4854', w: 1.1 },
    { c: '#6d7c8c', w: 1.8 },
    { c: '#ffcb57', w: 3.0 },
    { c: '#ff9a3c', w: 4.0 }
  ];
  for (i = 0; i < list.length; i++) {
    var sg = list[i], st = styles[sg.rank];
    if (zoom < 0.06 && sg.rank === 0) continue;
    ctx.strokeStyle = st.c; ctx.lineWidth = st.w;
    ctx.beginPath(); ctx.moveTo(toX(sg.ax), toY(sg.az)); ctx.lineTo(toX(sg.bx), toY(sg.bz)); ctx.stroke();
  }

  // landmarks
  ctx.font = '600 11px ui-sans-serif,system-ui,sans-serif';
  ctx.textAlign = 'center';
  CITY.landmarks.forEach(function (L) {
    var lx = toX(L.x), ly = toY(L.z);
    if (lx < -40 || lx > w + 40 || ly < -20 || ly > h + 20) return;
    ctx.fillStyle = '#6ee7a0';
    ctx.beginPath(); ctx.arc(lx, ly, 3, 0, TAU); ctx.fill();
    if (zoom > 0.055) {
      ctx.fillStyle = 'rgba(210,240,220,0.85)';
      ctx.fillText(L.name, lx, ly - 6);
    }
  });

  // traffic
  ctx.fillStyle = '#ff6b6b';
  for (i = 0; i < TRAFFIC.cars.length; i++) {
    var t = TRAFFIC.cars[i];
    if (!t.active) continue;
    var tx = toX(t.x), ty = toY(t.z);
    if (tx < 0 || tx > w || ty < 0 || ty > h) continue;
    ctx.fillRect(tx - 1.5, ty - 1.5, 3, 3);
  }

  // player arrow
  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.rotate(-PLAYER.yaw + PI);
  ctx.fillStyle = '#57d0ff';
  ctx.beginPath();
  ctx.moveTo(0, -9); ctx.lineTo(6, 7); ctx.lineTo(0, 3.5); ctx.lineTo(-6, 7);
  ctx.closePath(); ctx.fill();
  ctx.restore();

  // frame
  ctx.strokeStyle = 'rgba(255,255,255,0.16)';
  ctx.lineWidth = 2; ctx.strokeRect(1, 1, w - 2, h - 2);
}

// -------------------------------------------------------------------- status
var _lastWx = '';
function updateStatus() {
  $('clock').textContent = fmtClock(ENV.time);
  $('wxicon').textContent = WX.icon;
  $('wxname').textContent = WX.label;
  var tempF = Math.round(WX.temperature * 9 / 5 + 32);
  var vis = visibilityMeters();
  var visTxt = vis > 1400 ? 'clear' : (vis > 700 ? 'moderate' : (vis > 320 ? 'poor' : 'very poor'));
  $('wxsub').textContent = tempF + '°F · wind ' + Math.round(WX.wind * 2.237) + ' mph · vis ' + visTxt +
    (WX.wetness > 0.12 ? ' · wet road' : '') + (WX.snowCover > 0.12 ? ' · snow cover' : '');
  $('place').textContent = placeNameAt(PLAYER.x, PLAYER.z);
  var gearTxt = PLAYER.vx < -0.5 ? 'R' : (Math.abs(PLAYER.vx) < 0.4 ? 'N' : String(PLAYER.gear));
  $('gear').textContent = gearTxt;
  if (UI.mphBig) UI.mphBig.textContent = String(Math.round(Math.abs(PLAYER.vx) * 2.23694));
  var surfName = PLAYER.surface === 'asphalt' ? 'ASPHALT' : PLAYER.surface === 'shoulder' ? 'SHOULDER' :
                 PLAYER.surface === 'water' ? 'WATER' : 'OFF-ROAD';
  var cond = WX.snowCover > 0.25 ? 'SNOW' : (WX.wetness > 0.25 ? 'WET' : 'DRY');
  $('surface').textContent = surfName + ' · ' + cond + ' · ' + Math.round(PLAYER.grip * 100) + '% GRIP';
  if (_lastWx !== WX.state) {
    _lastWx = WX.state;
    toast(WX.icon + '  Weather turning to ' + WX.label.toLowerCase());
  }
}

var _toastTimer = null;
function toast(msg) {
  var el = $('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(function () { el.classList.remove('show'); }, 3200);
}

// --------------------------------------------------------------------- menus
function buildMenu() {
  var vg = $('vehGrid');
  vg.innerHTML = '';
  VEHICLE_TYPES.forEach(function (spec, i) {
    var card = document.createElement('button');
    card.className = 'card' + (i === GAME.vehicleIndex ? ' sel' : '');
    card.innerHTML =
      '<h3><span class="swatch" style="background:#' + spec.color.toString(16).padStart(6, '0') + '"></span>' +
      spec.name + '</h3><p>' + spec.desc + '</p>' +
      statBar('Speed', spec.stats.speed) + statBar('Grip', spec.stats.grip) +
      statBar('Accel', spec.stats.accel) + statBar('Off-road', spec.stats.offroad);
    card.addEventListener('click', function () { selectVehicle(i); buildMenu(); });
    vg.appendChild(card);
  });

  var sg = $('spotGrid');
  sg.innerHTML = '';
  CITY.landmarks.filter(function (L) { return L.r >= 150; }).forEach(function (L) {
    var b = document.createElement('button');
    b.className = 'card';
    b.innerHTML = '<h3>📍 ' + L.name + '</h3><p>Drop the car on the nearest road.</p>';
    b.addEventListener('click', function () { teleportTo(L.x, L.z); toggleMenu(false); });
    sg.appendChild(b);
  });

  var og = $('optGrid');
  og.innerHTML = '';
  function opt(label, valueFn, onClick) {
    var b = document.createElement('button');
    b.className = 'opt';
    b.innerHTML = '<span>' + label + '</span><em>' + valueFn() + '</em>';
    b.addEventListener('click', function () { onClick(); b.innerHTML = '<span>' + label + '</span><em>' + valueFn() + '</em>'; });
    og.appendChild(b);
    return b;
  }
  var qNames = ['low', 'medium', 'high', 'ultra'];
  opt('Graphics', function () { return QUALITY_PRESETS[QUALITY_NAME].name; }, function () {
    var i = (qNames.indexOf(QUALITY_NAME) + 1) % qNames.length;
    applyQuality(qNames[i]);
    applyQualityToRenderer();
    toast('Graphics: ' + QUALITY_PRESETS[QUALITY_NAME].name);
  });
  opt('Bloom & grade', function () { return GAME.post ? 'On' : 'Off'; }, function () {
    GAME.post = !GAME.post;
  });
  opt('Shadows', function () { return GAME.shadows ? 'On' : 'Off'; }, function () {
    GAME.shadows = !GAME.shadows;
    RENDER.renderer.shadowMap.enabled = GAME.shadows;
    RENDER.sun.castShadow = GAME.shadows;
    SCENE_ROOT.traverse(function (o) { if (o.isMesh) o.material.needsUpdate = true; });
  });
  opt('Audio', function () { return AUDIO.enabled ? 'On' : 'Off'; }, function () { toggleAudio(); });
  opt('Time speed', function () { return ENV.timeScale + '×'; }, function () {
    var opts = [0, 15, 60, 180, 600];
    var i = (opts.indexOf(ENV.timeScale) + 1) % opts.length;
    ENV.timeScale = opts[i];
  });
  opt('Time of day', function () { return fmtClock(ENV.time); }, function () {
    ENV.time = (ENV.time + 3) % 24;
  });
  opt('Weather', function () { return WX.label; }, function () {
    var names = Object.keys(WEATHER_STATES);
    var i = (names.indexOf(WX.state) + 1) % names.length;
    setWeather(names[i], false);
    toast('Weather shifting to ' + WEATHER_STATES[names[i]].label.toLowerCase());
  });
  opt('Traffic', function () { return GAME.trafficOn ? 'On' : 'Off'; }, function () {
    GAME.trafficOn = !GAME.trafficOn;
    for (var i = 0; i < TRAFFIC.cars.length; i++) {
      TRAFFIC.cars[i].group.visible = GAME.trafficOn && TRAFFIC.cars[i].active;
    }
  });
}

function statBar(label, v) {
  return '<div class="stat"><span>' + label + '</span><div class="bar"><i style="width:' +
    Math.round(clamp01(v) * 100) + '%"></i></div></div>';
}

function toggleMenu(force) {
  var el = $('menu');
  var show = force === undefined ? !el.classList.contains('show') : force;
  el.classList.toggle('show', show);
  GAME.paused = show;
  if (show) buildMenu();
}

// -------------------------------------------------------------------- audio
var AUDIO = { ctx: null, enabled: true, started: false, nodes: {} };

function initAudio() {
  if (AUDIO.started) return;
  var AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) { AUDIO.enabled = false; return; }
  try { AUDIO.ctx = new AC(); } catch (e) { AUDIO.enabled = false; return; }
  var ctx = AUDIO.ctx;
  AUDIO.started = true;

  var master = ctx.createGain();
  master.gain.value = 0.55;
  master.connect(ctx.destination);
  AUDIO.master = master;

  // Engine: two detuned saws through a lowpass, plus intake noise.
  function osc(type, freq) { var o = ctx.createOscillator(); o.type = type; o.frequency.value = freq; o.start(); return o; }
  var eGain = ctx.createGain(); eGain.gain.value = 0;
  var eFilt = ctx.createBiquadFilter(); eFilt.type = 'lowpass'; eFilt.frequency.value = 900;
  var o1 = osc('sawtooth', 60), o2 = osc('sawtooth', 61.5), o3 = osc('square', 30);
  var g3 = ctx.createGain(); g3.gain.value = 0.35;
  o1.connect(eFilt); o2.connect(eFilt); o3.connect(g3); g3.connect(eFilt);
  eFilt.connect(eGain); eGain.connect(master);
  AUDIO.nodes.engine = { o1: o1, o2: o2, o3: o3, gain: eGain, filt: eFilt };

  // Reusable noise buffer for tyres, rain and wind.
  var len = ctx.sampleRate * 2;
  var buf = ctx.createBuffer(1, len, ctx.sampleRate);
  var data = buf.getChannelData(0);
  for (var i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  AUDIO.noiseBuf = buf;

  function noiseChain(type, freq, q, gain) {
    var src = ctx.createBufferSource();
    src.buffer = buf; src.loop = true; src.start();
    var f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; if (q) f.Q.value = q;
    var g = ctx.createGain(); g.gain.value = gain || 0;
    src.connect(f); f.connect(g); g.connect(master);
    return { src: src, filt: f, gain: g };
  }
  AUDIO.nodes.tyre = noiseChain('bandpass', 1800, 3, 0);
  AUDIO.nodes.rain = noiseChain('lowpass', 2400, 0.7, 0);
  AUDIO.nodes.wind = noiseChain('bandpass', 420, 0.8, 0);
}

function toggleAudio() {
  AUDIO.enabled = !AUDIO.enabled;
  if (AUDIO.enabled && !AUDIO.started) initAudio();
  if (AUDIO.master) AUDIO.master.gain.value = AUDIO.enabled ? 0.55 : 0;
  toast('Audio ' + (AUDIO.enabled ? 'on' : 'off'));
}

function updateAudio(dt) {
  if (!AUDIO.started || !AUDIO.enabled) return;
  var n = AUDIO.nodes, ctx = AUDIO.ctx;
  var t = ctx.currentTime;
  var rpmFrac = clamp01(PLAYER.rpm / PLAYER.spec.redline);
  var base = 32 + rpmFrac * 128;
  n.engine.o1.frequency.setTargetAtTime(base, t, 0.05);
  n.engine.o2.frequency.setTargetAtTime(base * 1.008, t, 0.05);
  n.engine.o3.frequency.setTargetAtTime(base * 0.5, t, 0.05);
  n.engine.filt.frequency.setTargetAtTime(500 + rpmFrac * 2600 + PLAYER.throttle * 900, t, 0.08);
  var load = 0.06 + PLAYER.throttle * 0.16 + rpmFrac * 0.10;
  n.engine.gain.gain.setTargetAtTime(load, t, 0.08);

  n.tyre.gain.gain.setTargetAtTime(PLAYER.skid * 0.16 * clamp01(PLAYER.speed / 8), t, 0.05);
  n.tyre.filt.frequency.setTargetAtTime(1300 + PLAYER.skid * 1500, t, 0.1);
  n.rain.gain.gain.setTargetAtTime(clamp01(WX.rain) * 0.10 + clamp01(WX.snow) * 0.02, t, 0.6);
  n.wind.gain.gain.setTargetAtTime(clamp01(PLAYER.speed / 42) * 0.09 + WX.wind * 0.0026, t, 0.3);
}

function playHorn() {
  if (!AUDIO.started || !AUDIO.enabled) return;
  var ctx = AUDIO.ctx, t = ctx.currentTime;
  [440, 554].forEach(function (f) {
    var o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f;
    var g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.12, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.42);
    o.connect(g); g.connect(AUDIO.master); o.start(t); o.stop(t + 0.45);
  });
}

function playCrash(force) {
  if (!AUDIO.started || !AUDIO.enabled) return;
  var ctx = AUDIO.ctx, t = ctx.currentTime;
  var src = ctx.createBufferSource(); src.buffer = AUDIO.noiseBuf;
  var f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 900 + force * 2200;
  var g = ctx.createGain();
  g.gain.setValueAtTime(Math.min(0.5, 0.14 + force * 0.34), t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.34 + force * 0.3);
  src.connect(f); f.connect(g); g.connect(AUDIO.master);
  src.start(t); src.stop(t + 0.8);
}

function playThunder() {
  if (!AUDIO.started || !AUDIO.enabled) return;
  var ctx = AUDIO.ctx, t = ctx.currentTime;
  var src = ctx.createBufferSource(); src.buffer = AUDIO.noiseBuf; src.loop = true;
  var f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 260;
  var g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.30, t + 0.12);
  g.gain.exponentialRampToValueAtTime(0.09, t + 0.9);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 2.6);
  src.connect(f); f.connect(g); g.connect(AUDIO.master);
  src.start(t); src.stop(t + 2.8);
}

// -------------------------------------------------------- orientation prompt
function initOrientation() {
  var el = $('rotate');
  var dismissed = false;
  $('rotateAnyway').addEventListener('click', function () { dismissed = true; el.classList.remove('show'); });
  function check() {
    if (!IS_TOUCH || dismissed) { el.classList.remove('show'); return; }
    var portrait = window.innerHeight > window.innerWidth;
    el.classList.toggle('show', portrait);
  }
  window.addEventListener('resize', check);
  window.addEventListener('orientationchange', function () { setTimeout(check, 250); });
  check();
}
