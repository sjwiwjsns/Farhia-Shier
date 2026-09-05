// =============================================================================
// 30-sky — sun position, the procedural sky dome, and the weather engine.
//
// Weather is a Markov chain over six Minnesota-appropriate states. Nothing
// snaps: the chain only ever changes the *targets*, and every visible quantity
// (cloud cover, precipitation rate, fog, wind, how wet the tarmac is) eases
// toward them over tens of seconds, so a clear afternoon clouds over, spits
// rain, and turns into a thunderstorm without a single hard cut.
// =============================================================================

var ENV = {
  time: 9.4,             // hours, 0-24
  day: 288,              // day of year (mid-October: proper Minnesota weather)
  timeScale: 60,         // game-seconds per real second (1 day ~ 24 real min)
  lat: 45.16 * DEG,      // Blaine's latitude
  sunDir: new T.Vector3(0.4, 0.7, 0.3),
  moonDir: new T.Vector3(-0.4, -0.7, -0.3),
  sunElev: 0.6,
  night: 0,              // 0 day .. 1 night
  dusk: 0,
  headlights: false,
  flash: 0
};

// Continuous, always-blending weather parameters.
var WX = {
  state: 'clear', next: 'clear', label: 'Clear', icon: '☀️',
  hold: 45, blend: 1,
  cloud: 0.12, rain: 0, snow: 0, fog: 0.0, wind: 3, gust: 0,
  wetness: 0, snowCover: 0, temperature: 8,
  target: null, thunderTimer: 6
};

var WEATHER_STATES = {
  clear:        { label: 'Clear',        icon: '☀️', cloud: 0.10, rain: 0,    snow: 0,   fog: 0.00, wind: 3,  temp: 9 },
  fair:         { label: 'Partly Cloudy',icon: '🌤️', cloud: 0.38, rain: 0,    snow: 0,   fog: 0.02, wind: 5,  temp: 8 },
  overcast:     { label: 'Overcast',     icon: '☁️', cloud: 0.82, rain: 0,    snow: 0,   fog: 0.06, wind: 6,  temp: 6 },
  rain:         { label: 'Rain',         icon: '🌧️', cloud: 0.92, rain: 0.62, snow: 0,   fog: 0.18, wind: 8,  temp: 5 },
  thunderstorm: { label: 'Thunderstorm', icon: '⛈️', cloud: 1.00, rain: 1.00, snow: 0,   fog: 0.26, wind: 14, temp: 7 },
  snow:         { label: 'Snow',         icon: '🌨️', cloud: 0.95, rain: 0,    snow: 0.75, fog: 0.30, wind: 7,  temp: -4 },
  flurries:     { label: 'Flurries',     icon: '🌬️', cloud: 0.7,  rain: 0,    snow: 0.3,  fog: 0.12, wind: 9,  temp: -2 },
  fog:          { label: 'Fog',          icon: '🌫️', cloud: 0.6,  rain: 0,    snow: 0,   fog: 0.85, wind: 1,  temp: 2 }
};

// Transition weights. Cold states lead to cold states; storms blow themselves
// out into rain and then overcast, the way a Minnesota front actually behaves.
var WEATHER_CHAIN = {
  clear:        { clear: 3, fair: 5, overcast: 2, fog: 0.6 },
  fair:         { clear: 4, fair: 2, overcast: 4, rain: 1.4, flurries: 0.7 },
  overcast:     { fair: 3, overcast: 2, rain: 3.2, snow: 1.6, fog: 1.2, flurries: 1.4 },
  rain:         { rain: 2, thunderstorm: 1.6, overcast: 3.4, fog: 1.0, snow: 0.5 },
  thunderstorm: { rain: 4, overcast: 2.4, fair: 0.8 },
  snow:         { snow: 2.4, flurries: 3, overcast: 2.4, fog: 1.0 },
  flurries:     { snow: 2.4, flurries: 1.5, overcast: 3, fair: 1.6 },
  fog:          { fog: 1.6, overcast: 3, fair: 2.4, clear: 1.2, rain: 1.0 }
};

// ------------------------------------------------------------------- sky dome
var SKY = { mesh: null, mat: null, scene: null, envRT: null, pmrem: null, envDirty: 0 };

var SKY_VERT = [
  'varying vec3 vDir;',
  'void main(){',
  '  vDir = normalize(position);',
  '  vec4 mv = modelViewMatrix * vec4(position, 1.0);',
  '  gl_Position = projectionMatrix * mv;',
  '  gl_Position.z = gl_Position.w;',   // always at the far plane
  '}'
].join('\n');

var SKY_FRAG = [
  'varying vec3 vDir;',
  'uniform vec3 uSun; uniform vec3 uSunCol; uniform vec3 uZenith; uniform vec3 uHorizon;',
  'uniform vec3 uGround; uniform float uCloud; uniform float uTime; uniform float uNight;',
  'uniform float uFog; uniform float uFlash; uniform float uWind; uniform vec3 uMoon;',

  'float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }',
  'float noise(vec2 p){',
  '  vec2 i = floor(p), f = fract(p);',
  '  vec2 u = f*f*(3.0-2.0*f);',
  '  return mix(mix(h21(i), h21(i+vec2(1,0)), u.x), mix(h21(i+vec2(0,1)), h21(i+vec2(1,1)), u.x), u.y);',
  '}',
  'float fbm(vec2 p){',
  '  float s = 0.0, a = 0.5;',
  '  for(int i=0;i<5;i++){ s += a*noise(p); p *= 2.03; a *= 0.5; }',
  '  return s;',
  '}',

  'void main(){',
  '  vec3 d = normalize(vDir);',
  '  float h = clamp(d.y, -1.0, 1.0);',
  '  float t = pow(clamp(h, 0.0, 1.0), 0.45);',
  '  vec3 col = mix(uHorizon, uZenith, t);',
  '  if (h < 0.0) col = mix(uHorizon, uGround, clamp(-h*3.0, 0.0, 1.0));',

  // stars
  '  if (uNight > 0.01 && h > -0.02) {',
  '    vec2 sp = d.xz / max(0.08, abs(d.y) + 0.25) * 34.0;',
  '    float st = h21(floor(sp));',
  '    float twinkle = 0.6 + 0.4 * sin(uTime * 2.4 + st * 90.0);',
  '    float star = smoothstep(0.9965, 1.0, st) * twinkle;',
  '    col += vec3(star) * uNight * (1.0 - uCloud * 0.9) * clamp(h * 3.0, 0.0, 1.0);',
  '  }',

  // moon
  '  float md = max(dot(d, normalize(uMoon)), 0.0);',
  '  col += vec3(0.85, 0.88, 1.0) * pow(md, 2400.0) * 2.2 * uNight;',
  '  col += vec3(0.30, 0.34, 0.45) * pow(md, 26.0) * 0.35 * uNight * (1.0 - uCloud);',

  // sun disk + halo
  '  float sd = max(dot(d, normalize(uSun)), 0.0);',
  '  float disk = smoothstep(0.99955, 0.99985, sd);',
  '  float halo = pow(sd, 220.0) * 0.55 + pow(sd, 12.0) * 0.16;',
  '  float sunVis = (1.0 - uCloud * 0.86) * clamp(uSun.y * 6.0 + 0.35, 0.0, 1.0);',
  '  col += uSunCol * (disk * 12.0 + halo) * sunVis;',

  // clouds: two scrolling fbm layers flattened onto the dome
  '  if (h > -0.06) {',
  '    vec2 cp = d.xz / max(0.10, h + 0.16);',
  '    float drift = uTime * (0.004 + uWind * 0.0016);',
  '    float base = fbm(cp * 0.85 + vec2(drift, drift * 0.4));',
  '    float detail = fbm(cp * 2.6 - vec2(drift * 1.8, drift * 0.7));',
  '    float f = base * 0.72 + detail * 0.28;',
  '    float cover = smoothstep(0.62 - uCloud * 0.52, 0.86 - uCloud * 0.34, f);',
  '    cover *= smoothstep(-0.04, 0.16, h);',
  '    float shade = 0.55 + 0.45 * smoothstep(0.35, 0.85, f);',
  '    vec3 lit = mix(vec3(0.40, 0.43, 0.50), vec3(1.05, 1.02, 0.99), shade);',
  '    lit *= mix(vec3(0.25, 0.28, 0.36), vec3(1.0), clamp(uSun.y * 2.2 + 0.42, 0.0, 1.0));',
  '    lit += uSunCol * pow(sd, 9.0) * 0.30 * (1.0 - uNight);',
  '    col = mix(col, lit, cover * (0.35 + uCloud * 0.65));',
  '  }',

  // haze / fog toward the horizon, then the lightning flash
  '  float haze = exp(-max(h, 0.0) * (5.0 - uFog * 3.6));',
  '  vec3 fogCol = mix(uHorizon, vec3(0.72, 0.75, 0.80), uFog * 0.6);',
  '  col = mix(col, fogCol, clamp(haze * (0.30 + uFog * 0.66), 0.0, 0.97));',
  '  col += vec3(0.85, 0.90, 1.05) * uFlash;',
  '  gl_FragColor = vec4(max(col, 0.0), 1.0);',
  '}'
].join('\n');

function buildSky(renderer) {
  var geo = new T.SphereGeometry(1, 32, 20);
  SKY.mat = new T.ShaderMaterial({
    vertexShader: SKY_VERT, fragmentShader: SKY_FRAG,
    side: T.BackSide, depthWrite: false, depthTest: false, fog: false,
    uniforms: {
      uSun: { value: new T.Vector3(0.4, 0.7, 0.3) },
      uMoon: { value: new T.Vector3(-0.4, 0.7, -0.3) },
      uSunCol: { value: new T.Color(1.0, 0.92, 0.78) },
      uZenith: { value: new T.Color(0.16, 0.34, 0.64) },
      uHorizon: { value: new T.Color(0.62, 0.72, 0.86) },
      uGround: { value: new T.Color(0.16, 0.17, 0.16) },
      uCloud: { value: 0.12 }, uTime: { value: 0 }, uNight: { value: 0 },
      uFog: { value: 0 }, uFlash: { value: 0 }, uWind: { value: 3 }
    }
  });
  SKY.mesh = new T.Mesh(geo, SKY.mat);
  SKY.mesh.frustumCulled = false;
  SKY.mesh.renderOrder = -1000;
  SKY.mesh.scale.setScalar(1);

  SKY.scene = new T.Scene();
  var probe = new T.Mesh(geo, SKY.mat);
  probe.frustumCulled = false;
  probe.scale.setScalar(50);
  SKY.scene.add(probe);
  SKY.pmrem = new T.PMREMGenerator(renderer);
  SKY.pmrem.compileEquirectangularShader();
}

// Regenerating the environment probe means rendering and convolving a cubemap,
// so it only happens when the sky has actually drifted far enough to matter.
SKY.lastProbe = { sun: -99, cloud: -99, fog: -99, flash: 0 };
function refreshEnv(renderer, scene, force) {
  if (!SKY.pmrem) return false;
  var p = SKY.lastProbe;
  var moved = Math.abs(ENV.sunDir.y - p.sun) + Math.abs(WX.cloud - p.cloud) * 0.5 +
              Math.abs(WX.fog - p.fog) * 0.5;
  if (!force && moved < 0.02) return false;
  p.sun = ENV.sunDir.y; p.cloud = WX.cloud; p.fog = WX.fog;
  var target = SKY.pmrem.fromScene(SKY.scene, 0, 1, 200);
  if (SKY.envRT) SKY.envRT.dispose();
  SKY.envRT = target;
  scene.environment = target.texture;
  return true;
}

// ------------------------------------------------------------- solar position
function updateSun(dt) {
  ENV.time += (dt * ENV.timeScale) / 3600;
  while (ENV.time >= 24) { ENV.time -= 24; ENV.day = (ENV.day + 1) % 365; }

  // The clock shows local time; the sun runs on solar time. For Blaine that is
  // roughly an hour and a quarter apart (central time zone offset from the
  // 93.2°W meridian, plus daylight saving and the equation of time), which is
  // why sunset lands around 6:30 in the evening rather than 5:15.
  var decl = 23.44 * DEG * Math.sin(TAU * (ENV.day - 81) / 365);
  var H = (ENV.time - 1.25 - 12) * 15 * DEG;
  var sinEl = Math.sin(ENV.lat) * Math.sin(decl) + Math.cos(ENV.lat) * Math.cos(decl) * Math.cos(H);
  var el = Math.asin(clamp(sinEl, -1, 1));
  var cosAz = (Math.sin(decl) - Math.sin(el) * Math.sin(ENV.lat)) / (Math.cos(el) * Math.cos(ENV.lat) + 1e-6);
  var az = Math.acos(clamp(cosAz, -1, 1));
  if (H > 0) az = TAU - az;                 // afternoon sun swings west

  ENV.sunElev = el;
  // Azimuth is measured from north, clockwise; north is -Z, east is +X.
  ENV.sunDir.set(Math.sin(az) * Math.cos(el), Math.sin(el), -Math.cos(az) * Math.cos(el)).normalize();
  ENV.moonDir.set(-ENV.sunDir.x, -ENV.sunDir.y + 0.35, -ENV.sunDir.z).normalize();

  ENV.night = 1 - smoothstep(-0.12, 0.10, ENV.sunDir.y);
  ENV.dusk = Math.max(0, 1 - Math.abs(ENV.sunDir.y) * 7) * (1 - ENV.night * 0.3);
  ENV.headlights = ENV.night > 0.25 || WX.fog > 0.35 || WX.rain > 0.4 || WX.snow > 0.3;
}

// --------------------------------------------------------------- weather step
function pickNextWeather() {
  var chain = WEATHER_CHAIN[WX.state] || WEATHER_CHAIN.fair;
  // Seasonal bias: snow only makes sense when it is cold enough.
  var winter = smoothstep(70, 20, ENV.day) + smoothstep(300, 350, ENV.day);
  var total = 0, weights = [];
  for (var k in chain) {
    var w = chain[k];
    if (k === 'snow' || k === 'flurries') w *= 0.25 + winter * 2.4;
    if (k === 'thunderstorm') w *= 1.4 - winter;
    if (w <= 0) continue;
    weights.push([k, w]); total += w;
  }
  var r = Math.random() * total;
  for (var i = 0; i < weights.length; i++) { r -= weights[i][1]; if (r <= 0) return weights[i][0]; }
  return 'fair';
}

function setWeather(name, instant) {
  if (!WEATHER_STATES[name]) return;
  WX.state = name;
  WX.target = WEATHER_STATES[name];
  WX.label = WX.target.label;
  WX.icon = WX.target.icon;
  WX.hold = rrange(55, 155);
  WX.blend = instant ? 1 : 0;
  if (instant) {
    WX.cloud = WX.target.cloud; WX.rain = WX.target.rain; WX.snow = WX.target.snow;
    WX.fog = WX.target.fog; WX.wind = WX.target.wind; WX.temperature = WX.target.temp;
  }
}

function updateWeather(dt) {
  WX.hold -= dt;
  if (WX.hold <= 0) setWeather(pickNextWeather(), false);
  var tgt = WX.target || WEATHER_STATES.clear;

  // Everything eases; nothing jumps. Precipitation ramps faster than cloud
  // cover so you see the sky darken before the first drops land.
  WX.cloud = damp(WX.cloud, tgt.cloud, 0.09, dt);
  WX.rain = damp(WX.rain, tgt.rain, 0.16, dt);
  WX.snow = damp(WX.snow, tgt.snow, 0.11, dt);
  WX.fog = damp(WX.fog, tgt.fog, 0.08, dt);
  WX.wind = damp(WX.wind, tgt.wind, 0.12, dt);
  WX.temperature = damp(WX.temperature, tgt.temp, 0.05, dt);
  WX.gust = damp(WX.gust, Math.sin(performance.now() * 0.00035) * WX.wind * 0.4, 0.5, dt);

  // Standing water builds while it rains and dries out slowly afterwards.
  var wetTarget = clamp01(WX.rain * 1.25 + WX.snow * 0.25 + WX.fog * 0.20);
  WX.wetness = damp(WX.wetness, wetTarget, WX.rain > 0.05 ? 0.075 : 0.022, dt);
  var snowTarget = clamp01(WX.snow * 1.4);
  WX.snowCover = damp(WX.snowCover, WX.temperature < 1 ? snowTarget : 0, WX.snow > 0.05 ? 0.03 : 0.012, dt);

  // Lightning during storms: a double flash, then thunder after the delay.
  ENV.flash = Math.max(0, ENV.flash - dt * 4.5);
  if (WX.rain > 0.75 && WX.state === 'thunderstorm') {
    WX.thunderTimer -= dt;
    if (WX.thunderTimer <= 0) {
      WX.thunderTimer = rrange(4, 16);
      ENV.flash = 0.75 + Math.random() * 0.5;
      var delay = rrange(0.6, 4.2);
      setTimeout(function () { if (typeof playThunder === 'function') playThunder(); }, delay * 1000);
      setTimeout(function () { ENV.flash = Math.max(ENV.flash, 0.5); }, 90);
    }
  }
}

// Sky/ambient colours for the current time of day and cloud cover.
var _c1 = new T.Color(), _c2 = new T.Color(), _c3 = new T.Color();
function applySkyColors(scene, sun, hemi, ambient) {
  var y = ENV.sunDir.y;
  var dayT = smoothstep(-0.18, 0.28, y);
  var duskT = Math.max(0, 1 - Math.abs(y + 0.02) * 5.5);

  // zenith: deep blue by day, near-black at night, warm at the horizon at dusk
  _c1.setRGB(0.055, 0.09, 0.20).lerp(_c2.setRGB(0.14, 0.32, 0.62), dayT);
  _c1.lerp(_c3.setRGB(0.16, 0.14, 0.30), duskT * 0.55);
  var desat = WX.cloud * 0.72;
  _c1.lerp(_c3.setRGB(0.20, 0.22, 0.26), desat);
  SKY.mat.uniforms.uZenith.value.copy(_c1);

  _c1.setRGB(0.07, 0.09, 0.14).lerp(_c2.setRGB(0.62, 0.73, 0.88), dayT);
  _c1.lerp(_c3.setRGB(0.92, 0.48, 0.24), duskT * 0.8);
  _c1.lerp(_c3.setRGB(0.55, 0.57, 0.60), desat * 0.85);
  if (WX.snow > 0.2) _c1.lerp(_c3.setRGB(0.78, 0.80, 0.84), WX.snow * 0.5);
  SKY.mat.uniforms.uHorizon.value.copy(_c1);
  var horizon = _c1.clone();

  _c1.setRGB(0.05, 0.06, 0.06).lerp(_c2.setRGB(0.20, 0.21, 0.19), dayT);
  SKY.mat.uniforms.uGround.value.copy(_c1);

  // Sun colour reddens as it drops.
  _c1.setRGB(1.0, 0.42, 0.16).lerp(_c2.setRGB(1.0, 0.96, 0.90), smoothstep(0.0, 0.35, y));
  SKY.mat.uniforms.uSunCol.value.copy(_c1);
  SKY.mat.uniforms.uSun.value.copy(ENV.sunDir);
  SKY.mat.uniforms.uMoon.value.copy(ENV.moonDir);
  SKY.mat.uniforms.uCloud.value = WX.cloud;
  SKY.mat.uniforms.uNight.value = ENV.night;
  SKY.mat.uniforms.uFog.value = clamp01(WX.fog + WX.rain * 0.25 + WX.snow * 0.3);
  SKY.mat.uniforms.uFlash.value = ENV.flash * 0.75;
  SKY.mat.uniforms.uWind.value = WX.wind;

  // Key light.
  var sunStrength = clamp01(smoothstep(-0.06, 0.16, y)) * (1 - WX.cloud * 0.82) * (1 - WX.fog * 0.55);
  sun.intensity = sunStrength * 3.1 + ENV.flash * 2.2;
  sun.color.copy(_c1);
  sun.position.copy(ENV.sunDir).multiplyScalar(220);

  // Sky fill: bluish by day, sodium-tinted at night from the city glow.
  hemi.intensity = lerp(0.16, 0.95, dayT) * (1 - WX.fog * 0.3) + WX.cloud * 0.22 + ENV.flash * 0.9;
  hemi.color.copy(horizon).lerp(_c2.setRGB(0.30, 0.36, 0.52), 0.3);
  hemi.groundColor.setRGB(0.12, 0.12, 0.11).lerp(_c2.setRGB(0.55, 0.57, 0.60), WX.snowCover * 0.8);
  ambient.intensity = lerp(0.16, 0.30, dayT) + WX.cloud * 0.13 + WX.snowCover * 0.1;
  ambient.color.copy(horizon);

  // Distance fog: visibility is the headline effect of every weather state.
  var density = 0.00016 + WX.fog * 0.0075 + WX.rain * 0.0011 + WX.snow * 0.0021 + WX.cloud * 0.00022;
  if (!scene.fog) scene.fog = new T.FogExp2(0x9aa8b8, density);
  scene.fog.density = density;
  _c1.copy(horizon).lerp(_c2.setRGB(0.04, 0.05, 0.07), ENV.night * 0.72);
  scene.fog.color.copy(_c1);
}

// ------------------------------------------------------------ precipitation
var PRECIP = { rain: null, snow: null, box: 130, rainMat: null, snowMat: null };

function buildPrecip(scene) {
  var box = PRECIP.box;
  // --- rain: line segments stretched along the fall direction ---------------
  var n = Q.rain;
  var pos = new Float32Array(n * 2 * 3), seed = new Float32Array(n * 2), end = new Float32Array(n * 2);
  for (var i = 0; i < n; i++) {
    var x = (Math.random() - 0.5) * box, y = Math.random() * box * 0.75, z = (Math.random() - 0.5) * box;
    for (var k = 0; k < 2; k++) {
      pos[(i * 2 + k) * 3] = x; pos[(i * 2 + k) * 3 + 1] = y; pos[(i * 2 + k) * 3 + 2] = z;
      seed[i * 2 + k] = Math.random();
      end[i * 2 + k] = k;
    }
  }
  var g = new T.BufferGeometry();
  g.setAttribute('position', new T.BufferAttribute(pos, 3));
  g.setAttribute('aSeed', new T.BufferAttribute(seed, 1));
  g.setAttribute('aEnd', new T.BufferAttribute(end, 1));
  g.boundingSphere = new T.Sphere(new T.Vector3(), box * 2);

  PRECIP.rainMat = new T.ShaderMaterial({
    transparent: true, depthWrite: false, blending: T.AdditiveBlending, fog: false,
    uniforms: {
      uTime: { value: 0 }, uCam: { value: new T.Vector3() }, uBox: { value: box },
      uWind: { value: new T.Vector3() }, uOpacity: { value: 0 }, uLen: { value: 1.6 },
      uColor: { value: new T.Color(0.62, 0.72, 0.88) }
    },
    vertexShader: [
      'attribute float aSeed; attribute float aEnd;',
      'uniform float uTime; uniform vec3 uCam; uniform float uBox; uniform vec3 uWind; uniform float uLen;',
      'varying float vFade;',
      'void main(){',
      '  float speed = 26.0 + aSeed * 16.0;',
      '  vec3 p = position;',
      '  p.y -= uTime * speed;',
      '  p += uWind * uTime;',
      '  p += uCam;',
      '  vec3 rel = p - uCam;',
      '  rel = mod(rel + uBox * 0.5, uBox) - uBox * 0.5;',
      '  rel.y = mod(rel.y + uBox * 0.5, uBox) - uBox * 0.5;',
      '  vec3 vel = normalize(vec3(uWind.x, -speed, uWind.z));',
      '  rel += vel * aEnd * uLen * (0.6 + aSeed);',
      '  vFade = 1.0 - clamp(length(rel) / (uBox * 0.55), 0.0, 1.0);',
      '  gl_Position = projectionMatrix * modelViewMatrix * vec4(rel + uCam, 1.0);',
      '}'
    ].join('\n'),
    fragmentShader: [
      'uniform float uOpacity; uniform vec3 uColor; varying float vFade;',
      'void main(){ gl_FragColor = vec4(uColor, uOpacity * vFade * 0.75); }'
    ].join('\n')
  });
  PRECIP.rain = new T.LineSegments(g, PRECIP.rainMat);
  PRECIP.rain.frustumCulled = false;
  PRECIP.rain.visible = false;
  scene.add(PRECIP.rain);

  // --- snow: drifting points -----------------------------------------------
  var ns = Q.snow;
  var sp = new Float32Array(ns * 3), ss = new Float32Array(ns);
  for (var j = 0; j < ns; j++) {
    sp[j * 3] = (Math.random() - 0.5) * box;
    sp[j * 3 + 1] = Math.random() * box * 0.8;
    sp[j * 3 + 2] = (Math.random() - 0.5) * box;
    ss[j] = Math.random();
  }
  var sg = new T.BufferGeometry();
  sg.setAttribute('position', new T.BufferAttribute(sp, 3));
  sg.setAttribute('aSeed', new T.BufferAttribute(ss, 1));
  sg.boundingSphere = new T.Sphere(new T.Vector3(), box * 2);
  PRECIP.snowMat = new T.ShaderMaterial({
    transparent: true, depthWrite: false, fog: false,
    uniforms: {
      uTime: { value: 0 }, uCam: { value: new T.Vector3() }, uBox: { value: box },
      uWind: { value: new T.Vector3() }, uOpacity: { value: 0 },
      uMap: { value: TEX.snowFlake }, uSize: { value: 1 }
    },
    vertexShader: [
      'attribute float aSeed;',
      'uniform float uTime; uniform vec3 uCam; uniform float uBox; uniform vec3 uWind; uniform float uSize;',
      'varying float vFade;',
      'void main(){',
      '  float speed = 1.6 + aSeed * 2.2;',
      '  vec3 p = position;',
      '  p.y -= uTime * speed;',
      '  p.x += sin(uTime * (0.5 + aSeed) + aSeed * 12.0) * 2.6 + uWind.x * uTime * 0.8;',
      '  p.z += cos(uTime * (0.4 + aSeed) + aSeed * 9.0) * 2.6 + uWind.z * uTime * 0.8;',
      '  vec3 rel = mod(p - uCam + uBox * 0.5, uBox) - uBox * 0.5;',
      '  vFade = 1.0 - clamp(length(rel) / (uBox * 0.55), 0.0, 1.0);',
      '  vec4 mv = modelViewMatrix * vec4(rel + uCam, 1.0);',
      '  gl_PointSize = (16.0 + aSeed * 22.0) * uSize / max(1.0, -mv.z) * 8.0;',
      '  gl_Position = projectionMatrix * mv;',
      '}'
    ].join('\n'),
    fragmentShader: [
      'uniform sampler2D uMap; uniform float uOpacity; varying float vFade;',
      'void main(){',
      '  vec4 t = texture2D(uMap, gl_PointCoord);',
      '  gl_FragColor = vec4(vec3(1.0), t.a * uOpacity * vFade);',
      '}'
    ].join('\n')
  });
  PRECIP.snow = new T.Points(sg, PRECIP.snowMat);
  PRECIP.snow.frustumCulled = false;
  PRECIP.snow.visible = false;
  scene.add(PRECIP.snow);
}

var _wind = new T.Vector3();
function updatePrecip(camPos, t) {
  var windX = Math.cos(ENV.day * 0.7) * (WX.wind + WX.gust);
  var windZ = Math.sin(ENV.day * 0.7) * (WX.wind + WX.gust);
  _wind.set(windX * 0.35, 0, windZ * 0.35);

  var rainOn = WX.rain > 0.02;
  PRECIP.rain.visible = rainOn;
  if (rainOn) {
    var u = PRECIP.rainMat.uniforms;
    u.uTime.value = t; u.uCam.value.copy(camPos); u.uWind.value.copy(_wind);
    u.uOpacity.value = clamp01(WX.rain * 1.1) * (0.55 + 0.45 * (1 - ENV.night * 0.4));
    u.uLen.value = 1.2 + WX.rain * 2.6;
  }
  var snowOn = WX.snow > 0.02;
  PRECIP.snow.visible = snowOn;
  if (snowOn) {
    var s = PRECIP.snowMat.uniforms;
    s.uTime.value = t; s.uCam.value.copy(camPos); s.uWind.value.copy(_wind);
    s.uOpacity.value = clamp01(WX.snow * 1.2) * 0.9;
    s.uSize.value = IS_MOBILE ? 0.7 : 1;
  }
}

// ------------------------------------------- push weather onto world materials
function applyWeatherToWorld() {
  var wet = WX.wetness;
  for (var i = 0; i < WET_ROAD_MATS.length; i++) {
    var m = WET_ROAD_MATS[i];
    var dry = m.userData.dryRough || 0.9;
    m.roughness = lerp(dry, 0.075, wet);
    m.envMapIntensity = lerp(0.32, 1.5, wet);
    if (m.normalScale) {
      var rip = WX.rain * wet;
      m.normalScale.set(rip * 0.9, rip * 0.9);
    }
    // Snow lightens and dulls the surface.
    m.color.setRGB(1, 1, 1).lerp(_c2.setRGB(2.2, 2.3, 2.45), WX.snowCover * 0.32);
  }
  MATS.ground.color.setRGB(1, 1, 1).lerp(_c2.setRGB(1.9, 1.95, 2.1), WX.snowCover * 0.55);
  MATS.grass.color.setRGB(1, 1, 1).lerp(_c2.setRGB(1.9, 1.95, 2.1), WX.snowCover * 0.5);
  MATS.field.color.setRGB(1, 1, 1).lerp(_c2.setRGB(1.9, 1.95, 2.1), WX.snowCover * 0.45);
  MATS.shingle.color.setRGB(1, 1, 1).lerp(_c2.setRGB(1.8, 1.85, 2.0), WX.snowCover * 0.5);
  MATS.water.roughness = lerp(0.06, 0.22, WX.rain);
  MATS.water.normalScale.set(0.4 + WX.wind * 0.07, 0.4 + WX.wind * 0.07);

  // Windows, streetlights and signs come on with the dark and with bad weather.
  var lit = clamp01(ENV.night * 1.25 + WX.fog * 0.5 + WX.rain * 0.35 + ENV.dusk * 0.4);
  for (var n = 0; n < NIGHT_MATS.length; n++) {
    var mm = NIGHT_MATS[n];
    mm.emissiveIntensity = mm === MATS.lamp ? lit * 1.5 : (mm === MATS.sign ? 0.1 + lit * 1.1 : lit * 0.95);
  }
  for (var g = 0; g < GLOW_MATS.length; g++) {
    GLOW_MATS[g].opacity = lit * (0.30 + WX.wetness * 0.30) * (1 - WX.fog * 0.3);
  }
}

// Tyre grip multiplier for the current weather — the number the physics reads.
function weatherGrip() {
  var g = 1.0;
  g -= WX.wetness * 0.30;
  g -= WX.snowCover * 0.42;
  return clamp(g, 0.28, 1.0);
}
function visibilityMeters() {
  var d = Q.drawDistance;
  var density = 0.00016 + WX.fog * 0.0075 + WX.rain * 0.0011 + WX.snow * 0.0021;
  return Math.min(d, 3.0 / density);
}
