// =============================================================================
// 70-main — renderer, cameras, the post chain and the game loop.
// =============================================================================

var GAME = {
  paused: false, started: false, camMode: 0, mapZoom: 0.11, vehicleIndex: 0,
  post: Q.post, shadows: Q.shadows, trafficOn: true, fps: 60, frameAvg: 16
};
var RENDER = {};
var PLAYER = null;
var CAM_MODES = ['Chase', 'Hood', 'Cinematic'];

// ------------------------------------------------------------------ renderer
function initRenderer() {
  var canvas = $('gl');
  var renderer = new T.WebGLRenderer({
    canvas: canvas, antialias: !IS_MOBILE, powerPreference: 'high-performance',
    stencil: false, alpha: false
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, Q.pixelRatio));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = Q.shadows;
  renderer.shadowMap.type = IS_MOBILE ? T.PCFShadowMap : T.PCFSoftShadowMap;
  RENDER.renderer = renderer;

  var scene = new T.Scene();
  scene.add(SCENE_ROOT);
  RENDER.scene = scene;

  var camera = new T.PerspectiveCamera(64, window.innerWidth / window.innerHeight, 0.35, Q.drawDistance * 2.2);
  camera.position.set(0, 12, 30);
  RENDER.camera = camera;

  var sun = new T.DirectionalLight(0xffffff, 2.6);
  sun.castShadow = Q.shadows;
  sun.shadow.mapSize.set(Q.shadowSize, Q.shadowSize);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 620;
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.7;
  var sd = Q.shadowDist;
  sun.shadow.camera.left = -sd; sun.shadow.camera.right = sd;
  sun.shadow.camera.top = sd; sun.shadow.camera.bottom = -sd;
  scene.add(sun);
  scene.add(sun.target);
  RENDER.sun = sun;

  var hemi = new T.HemisphereLight(0x9fc0e8, 0x2a2a26, 0.6);
  scene.add(hemi); RENDER.hemi = hemi;
  var amb = new T.AmbientLight(0xffffff, 0.22);
  scene.add(amb); RENDER.ambient = amb;

  // Player headlights. three uses physical light units, so a spot needs an
  // intensity in the thousands of candela to actually light the road ahead.
  var head = new T.SpotLight(0xfff0d8, 0, 90, 0.60, 0.6, 1.7);
  head.castShadow = false;
  scene.add(head); scene.add(head.target);
  RENDER.headlight = head;

  window.addEventListener('resize', onResize);
  onResize();
}

function applyQualityToRenderer() {
  var r = RENDER.renderer;
  r.setPixelRatio(Math.min(window.devicePixelRatio || 1, Q.pixelRatio));
  r.shadowMap.enabled = GAME.shadows && Q.shadows;
  RENDER.sun.castShadow = GAME.shadows && Q.shadows;
  RENDER.sun.shadow.mapSize.set(Q.shadowSize, Q.shadowSize);
  if (RENDER.sun.shadow.map) { RENDER.sun.shadow.map.dispose(); RENDER.sun.shadow.map = null; }
  var sd = Q.shadowDist;
  RENDER.sun.shadow.camera.left = -sd; RENDER.sun.shadow.camera.right = sd;
  RENDER.sun.shadow.camera.top = sd; RENDER.sun.shadow.camera.bottom = -sd;
  RENDER.sun.shadow.camera.updateProjectionMatrix();
  RENDER.camera.far = Q.drawDistance * 2.2;
  RENDER.camera.updateProjectionMatrix();
  GAME.post = Q.post;
  onResize();
}

function onResize() {
  var w = window.innerWidth, h = window.innerHeight;
  RENDER.renderer.setSize(w, h, false);
  RENDER.camera.aspect = w / h;
  RENDER.camera.updateProjectionMatrix();
  if (RENDER.post) resizePost(w, h);
}

// ------------------------------------------------------------- post chain
// Threshold -> separable blur -> composite with vignette and a touch of grain.
var FS_VERT = [
  'varying vec2 vUv;',
  'void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }'
].join('\n');

function makeFsQuad(mat) {
  var g = new T.BufferGeometry();
  g.setAttribute('position', new T.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
  g.setAttribute('uv', new T.BufferAttribute(new Float32Array([0, 0, 2, 0, 0, 2]), 2));
  var m = new T.Mesh(g, mat);
  m.frustumCulled = false;
  var sc = new T.Scene();
  sc.add(m);
  return { scene: sc, mesh: m, camera: new T.OrthographicCamera(-1, 1, 1, -1, 0, 1) };
}

function initPost() {
  var w = window.innerWidth, h = window.innerHeight;
  var opts = { type: T.HalfFloatType, depthBuffer: true, stencilBuffer: false };
  var P = {};
  P.sceneRT = new T.WebGLRenderTarget(w, h, opts);
  P.sceneRT.samples = IS_MOBILE ? 0 : 4;
  P.bloomA = new T.WebGLRenderTarget(Math.max(2, w >> 2), Math.max(2, h >> 2), { type: T.HalfFloatType, depthBuffer: false });
  P.bloomB = new T.WebGLRenderTarget(Math.max(2, w >> 2), Math.max(2, h >> 2), { type: T.HalfFloatType, depthBuffer: false });

  P.brightMat = new T.ShaderMaterial({
    uniforms: { tDiffuse: { value: null }, uThreshold: { value: 0.72 }, uSoft: { value: 0.35 } },
    vertexShader: FS_VERT,
    fragmentShader: [
      'uniform sampler2D tDiffuse; uniform float uThreshold; uniform float uSoft; varying vec2 vUv;',
      'void main(){',
      '  vec3 c = texture2D(tDiffuse, vUv).rgb;',
      '  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));',
      '  float k = smoothstep(uThreshold, uThreshold + uSoft, l);',
      '  gl_FragColor = vec4(c * k, 1.0);',
      '}'
    ].join('\n')
  });
  P.blurMat = new T.ShaderMaterial({
    uniforms: { tDiffuse: { value: null }, uDir: { value: new T.Vector2(1, 0) }, uTexel: { value: new T.Vector2() } },
    vertexShader: FS_VERT,
    fragmentShader: [
      'uniform sampler2D tDiffuse; uniform vec2 uDir; uniform vec2 uTexel; varying vec2 vUv;',
      'void main(){',
      '  vec3 s = texture2D(tDiffuse, vUv).rgb * 0.227;',
      '  vec2 o1 = uDir * uTexel * 1.3846, o2 = uDir * uTexel * 3.2308;',
      '  s += (texture2D(tDiffuse, vUv + o1).rgb + texture2D(tDiffuse, vUv - o1).rgb) * 0.316;',
      '  s += (texture2D(tDiffuse, vUv + o2).rgb + texture2D(tDiffuse, vUv - o2).rgb) * 0.070;',
      '  gl_FragColor = vec4(s, 1.0);',
      '}'
    ].join('\n')
  });
  P.compMat = new T.ShaderMaterial({
    uniforms: {
      tDiffuse: { value: null }, tBloom: { value: null }, uBloom: { value: 0.5 },
      uVignette: { value: 0.9 }, uGrain: { value: 0.0 }, uTime: { value: 0 },
      uWet: { value: 0 }, uFlash: { value: 0 }, uSat: { value: 1.0 }
    },
    vertexShader: FS_VERT,
    fragmentShader: [
      'uniform sampler2D tDiffuse; uniform sampler2D tBloom;',
      'uniform float uBloom; uniform float uVignette; uniform float uGrain; uniform float uTime;',
      'uniform float uFlash; uniform float uSat;',
      'varying vec2 vUv;',
      'void main(){',
      '  vec3 c = texture2D(tDiffuse, vUv).rgb;',
      '  vec3 b = texture2D(tBloom, vUv).rgb;',
      '  c += b * uBloom;',
      '  c += vec3(0.9, 0.94, 1.0) * uFlash * 0.14;',
      '  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));',
      '  c = mix(vec3(l), c, uSat);',
      '  vec2 q = vUv - 0.5;',
      '  float vig = 1.0 - dot(q, q) * uVignette;',
      '  c *= clamp(vig, 0.0, 1.0);',
      '  if (uGrain > 0.001) {',
      '    float n = fract(sin(dot(vUv * vec2(1301.0, 977.0) + uTime, vec2(12.9898, 78.233))) * 43758.5453);',
      '    c += (n - 0.5) * uGrain;',
      '  }',
      '  gl_FragColor = vec4(max(c, 0.0), 1.0);',
      '  #include <colorspace_fragment>',
      '}'
    ].join('\n')
  });
  P.bright = makeFsQuad(P.brightMat);
  P.blur = makeFsQuad(P.blurMat);
  P.comp = makeFsQuad(P.compMat);
  RENDER.post = P;
  resizePost(w, h);
}

function resizePost(w, h) {
  var P = RENDER.post;
  if (!P) return;
  P.sceneRT.setSize(w, h);
  P.bloomA.setSize(Math.max(2, w >> 2), Math.max(2, h >> 2));
  P.bloomB.setSize(Math.max(2, w >> 2), Math.max(2, h >> 2));
}

function renderWithPost(t) {
  var P = RENDER.post, r = RENDER.renderer;
  r.setRenderTarget(P.sceneRT);
  r.clear();
  r.render(RENDER.scene, RENDER.camera);

  P.brightMat.uniforms.tDiffuse.value = P.sceneRT.texture;
  r.setRenderTarget(P.bloomA);
  r.render(P.bright.scene, P.bright.camera);

  var bw = P.bloomA.width, bh = P.bloomA.height;
  P.blurMat.uniforms.uTexel.value.set(1 / bw, 1 / bh);
  P.blurMat.uniforms.tDiffuse.value = P.bloomA.texture;
  P.blurMat.uniforms.uDir.value.set(1, 0);
  r.setRenderTarget(P.bloomB);
  r.render(P.blur.scene, P.blur.camera);
  P.blurMat.uniforms.tDiffuse.value = P.bloomB.texture;
  P.blurMat.uniforms.uDir.value.set(0, 1);
  r.setRenderTarget(P.bloomA);
  r.render(P.blur.scene, P.blur.camera);

  var u = P.compMat.uniforms;
  u.tDiffuse.value = P.sceneRT.texture;
  u.tBloom.value = P.bloomA.texture;
  u.uBloom.value = 0.34 + ENV.night * 0.42 + WX.wetness * 0.22;
  u.uGrain.value = ENV.night * 0.045;
  u.uTime.value = t;
  u.uFlash.value = ENV.flash;
  u.uSat.value = 1.0 - WX.fog * 0.25 - ENV.night * 0.12;
  r.setRenderTarget(null);
  r.render(P.comp.scene, P.comp.camera);
}

// -------------------------------------------------------------------- camera
var _camPos = new T.Vector3(), _camLook = new T.Vector3(), _tmpV = new T.Vector3();
var CAMERA_STATE = { pos: new T.Vector3(0, 10, 20), look: new T.Vector3(), shake: 0, fov: 64, orbit: 0, snap: true };

function cycleCamera() {
  GAME.camMode = (GAME.camMode + 1) % CAM_MODES.length;
  toast('Camera: ' + CAM_MODES[GAME.camMode]);
  $('btnCam').classList.toggle('on', GAME.camMode !== 0);
}

function updateCamera(dt, lookBack) {
  var p = PLAYER, cam = RENDER.camera;
  var fx = Math.sin(p.yaw), fz = Math.cos(p.yaw);
  var speed = Math.abs(p.vx);
  var back = lookBack ? -1 : 1;
  // After a spawn or teleport the camera jumps rather than flying across town.
  var snap = CAMERA_STATE.snap;
  CAMERA_STATE.snap = false;

  if (GAME.camMode === 1) {
    // Hood/first-person: sits on the bonnet, rolls slightly with the body.
    var s = p.spec.size;
    _camPos.set(p.x + fx * (s.l * 0.14), p.y + s.wheel + s.h + 0.42, p.z + fz * (s.l * 0.14));
    _camLook.set(p.x + fx * back * 24, p.y + s.wheel + s.h + 0.30, p.z + fz * back * 24);
    CAMERA_STATE.pos.lerp(_camPos, 1);
    CAMERA_STATE.look.lerp(_camLook, Math.min(1, dt * 18));
    cam.up.set(Math.sin(p.roll) * Math.cos(p.yaw), Math.cos(p.roll), -Math.sin(p.roll) * Math.sin(p.yaw));
  } else if (GAME.camMode === 2) {
    // Cinematic: slow orbit, useful for looking at the city.
    CAMERA_STATE.orbit += dt * 0.22;
    var rad = 12 + speed * 0.25;
    _camPos.set(p.x + Math.cos(CAMERA_STATE.orbit) * rad, p.y + 5.5 + Math.sin(CAMERA_STATE.orbit * 0.7) * 1.6,
      p.z + Math.sin(CAMERA_STATE.orbit) * rad);
    _camLook.set(p.x, p.y + 1.1, p.z);
    CAMERA_STATE.pos.lerp(_camPos, snap ? 1 : Math.min(1, dt * 2.4));
    CAMERA_STATE.look.lerp(_camLook, snap ? 1 : Math.min(1, dt * 4));
    cam.up.set(0, 1, 0);
  } else {
    // Chase: springs back as speed rises, lifts over the roof of tall vehicles.
    var dist = 6.4 + p.spec.size.l * 0.32 + speed * 0.10;
    var high = 2.35 + p.spec.size.roof * 0.35 + speed * 0.012;
    _camPos.set(p.x - fx * dist * back, p.y + high, p.z - fz * dist * back);
    // Slide the camera out of the corner a touch: reads the slip angle.
    var lateral = clamp(-p.vy * 0.16, -1.5, 1.5);
    _camPos.x += Math.cos(p.yaw) * lateral;
    _camPos.z += -Math.sin(p.yaw) * lateral;
    _camLook.set(p.x + fx * back * (7 + speed * 0.16), p.y + 1.3, p.z + fz * back * (7 + speed * 0.16));
    var follow = lookBack ? 14 : (3.4 + speed * 0.08);
    CAMERA_STATE.pos.lerp(_camPos, snap ? 1 : Math.min(1, dt * follow));
    CAMERA_STATE.look.lerp(_camLook, snap ? 1 : Math.min(1, dt * 6));
    cam.up.set(0, 1, 0);
  }

  // Impact and rough-surface shake.
  CAMERA_STATE.shake = Math.max(CAMERA_STATE.shake * Math.pow(0.02, dt),
    p.impact * 0.5 + (p.surface === 'grass' ? clamp01(speed / 30) * 0.05 : 0));
  var sh = CAMERA_STATE.shake;
  cam.position.copy(CAMERA_STATE.pos);
  if (sh > 0.001) {
    cam.position.x += (Math.random() - 0.5) * sh;
    cam.position.y += (Math.random() - 0.5) * sh;
    cam.position.z += (Math.random() - 0.5) * sh;
  }
  // Keep the camera above the ground / bridge deck.
  var minY = roadHeightAt(cam.position.x, cam.position.z) + 0.6;
  if (cam.position.y < minY) cam.position.y = minY;
  cam.lookAt(CAMERA_STATE.look);

  var wantFov = (GAME.camMode === 1 ? 70 : 62) + clamp(speed * 0.36, 0, 22);
  CAMERA_STATE.fov = damp(CAMERA_STATE.fov, wantFov, 3, dt);
  if (Math.abs(cam.fov - CAMERA_STATE.fov) > 0.05) {
    cam.fov = CAMERA_STATE.fov;
    cam.updateProjectionMatrix();
  }
}

// --------------------------------------------------------------- player utils
function selectVehicle(i) {
  if (i < 0 || i >= VEHICLE_TYPES.length) return;
  GAME.vehicleIndex = i;
  var spec = VEHICLE_TYPES[i];
  PLAYER.setType(spec);
  $('vname').innerHTML = 'Driving <b>' + spec.name + '</b> · ' + spec.tag;
  toast('Now driving the ' + spec.name);
}

function respawnPlayer() {
  var pose = nearestRoadPose(PLAYER.x, PLAYER.z, true);
  if (!pose) pose = { x: X_H65 + 20, z: avZ(109), heading: 0 };
  PLAYER.respawn(pose.x, pose.z, pose.heading);
  toast('Back on ' + (pose.edge ? (pose.edge.road.name || 'the street') : 'the road'));
}

function teleportTo(x, z) {
  var pose = nearestRoadPose(x, z, true);
  if (!pose) return;
  PLAYER.respawn(pose.x, pose.z, pose.heading);
  updateChunks(PLAYER.x, PLAYER.z, true);
  toast('Arrived at ' + placeNameAt(PLAYER.x, PLAYER.z));
}

// ------------------------------------------------------------------ headlight
function updateHeadlights(dt) {
  var on = PLAYER.lightsManual || ENV.headlights;
  PLAYER.headlights = on;
  var hl = RENDER.headlight;
  var p = PLAYER, s = p.spec.size;
  var fx = Math.sin(p.yaw), fz = Math.cos(p.yaw);
  hl.position.set(p.x + fx * s.l * 0.45, p.y + s.wheel + s.h * 0.7, p.z + fz * s.l * 0.45);
  hl.target.position.set(p.x + fx * 42, p.y + 0.2, p.z + fz * 42);
  hl.target.updateMatrixWorld();
  var want = on ? (1600 + WX.fog * 900 + ENV.night * 1400) : 0;
  hl.intensity = damp(hl.intensity, want, 6, dt);
  hl.distance = 75 + ENV.night * 45;
  // AI headlights follow the same rule.
  carMaterials().lightF.emissiveIntensity = ENV.headlights ? 2.2 : 0;
}

// ------------------------------------------------------------------ game loop
var _lastT = 0, _envTimer = 0, _fpsAcc = 0, _fpsN = 0, _lowFpsTime = 0, _statusT = 0;

function frame(now) {
  requestAnimationFrame(frame);
  var t = now * 0.001;
  var raw = t - _lastT || 0.016;
  // Clamped so a stall cannot blow up the physics, but generous enough that a
  // 12 fps phone still plays at close to real time rather than in slow motion.
  var dt = Math.min(0.1, raw);
  _lastT = t;
  if (!GAME.started) return;

  // --- frame timing / adaptive quality -------------------------------------
  // Measured on the real frame time, not the clamped one, so a slideshow is
  // actually detected as a slideshow.
  _fpsAcc += Math.min(1, raw); _fpsN++;
  if (_fpsAcc > 0.5) {
    GAME.fps = _fpsN / _fpsAcc;
    _fpsAcc = 0; _fpsN = 0;
    if (GAME.fps < 26) { _lowFpsTime += 0.5; } else { _lowFpsTime = Math.max(0, _lowFpsTime - 0.5); }
    if (_lowFpsTime > 3.5) {
      _lowFpsTime = 0;
      var order = ['ultra', 'high', 'medium', 'low'];
      var idx = order.indexOf(QUALITY_NAME);
      if (idx >= 0 && idx < order.length - 1) {
        applyQuality(order[idx + 1]);
        applyQualityToRenderer();
        toast('Dropping graphics to ' + QUALITY_PRESETS[QUALITY_NAME].name + ' to keep it smooth');
      }
    }
  }

  var simDt = GAME.paused ? 0 : dt;

  // --- input ---------------------------------------------------------------
  var kb = readKeyboard(dt);
  var input = kb;
  if (IS_TOUCH) {
    var tc = readTouch();
    input = {
      steer: Math.abs(tc.steer) > Math.abs(kb.steer) ? tc.steer : kb.steer,
      throttle: Math.max(tc.throttle, kb.throttle),
      brake: Math.max(tc.brake, kb.brake),
      handbrake: tc.handbrake || kb.handbrake,
      lookBack: kb.lookBack
    };
    if (UI.wheelTick) UI.wheelTick(dt);
  }
  if (GAME.paused) input = { steer: 0, throttle: 0, brake: 0, handbrake: false, lookBack: false };

  // --- simulation ----------------------------------------------------------
  if (simDt > 0) {
    updateSun(simDt);
    updateWeather(simDt);

    // Physics runs in fixed sub-steps for stability at high speed.
    var steps = Math.min(8, Math.max(1, Math.ceil(simDt / 0.012)));
    var sub = simDt / steps;
    for (var i = 0; i < steps; i++) {
      PLAYER.update(sub, input);
      var hit = PLAYER.collideWorld();
      if (hit && hit > 0.14) playCrash(hit);
    }
    if (GAME.trafficOn) updateTraffic(simDt, PLAYER);
    updatePeds(simDt, PLAYER.x, PLAYER.z);

    // Fell in a lake or drove off the map: put the car back on tarmac.
    if (PLAYER.surface === 'water' && PLAYER.speed < 3) respawnPlayer();
    if (PLAYER.x < WORLD.minX - 400 || PLAYER.x > WORLD.maxX + 400 ||
        PLAYER.z < WORLD.minZ - 400 || PLAYER.z > WORLD.maxZ + 400) respawnPlayer();
  }

  updateCamera(dt, input.lookBack);
  updateHeadlights(dt);
  applySkyColors(RENDER.scene, RENDER.sun, RENDER.hemi, RENDER.ambient);
  applyWeatherToWorld();
  updatePrecip(RENDER.camera.position, t);
  SKY.mat.uniforms.uTime.value = t;

  // Sky dome and shadow frustum ride along with the camera.
  SKY.mesh.position.copy(RENDER.camera.position);
  SKY.mesh.scale.setScalar(RENDER.camera.far * 0.85);
  var sunT = RENDER.sun.target;
  sunT.position.set(PLAYER.x, 0, PLAYER.z);
  sunT.updateMatrixWorld();
  RENDER.sun.position.set(PLAYER.x + ENV.sunDir.x * 260, ENV.sunDir.y * 260 + 30, PLAYER.z + ENV.sunDir.z * 260);

  // Animate the water surface.
  if (MATS.water.normalMap) {
    MATS.water.normalMap.offset.x = (t * 0.012 + WX.wind * 0.0005) % 1;
    MATS.water.normalMap.offset.y = (t * 0.0075) % 1;
  }
  // Rain ripples crawl across wet tarmac.
  if (TEX.rippleNormal) {
    TEX.rippleNormal.offset.y = (t * 0.6) % 1;
    TEX.rippleNormal.offset.x = (Math.sin(t * 0.2) * 0.1) % 1;
  }

  updateChunks(PLAYER.x, PLAYER.z, false);

  // Environment probe: refresh a couple of times a second as the sky drifts.
  _envTimer -= dt;
  if (_envTimer <= 0) {
    _envTimer = IS_MOBILE ? 6.0 : 2.5;
    refreshEnv(RENDER.renderer, RENDER.scene);
  }

  // --- HUD -----------------------------------------------------------------
  _statusT -= dt;
  if (_statusT <= 0) {
    _statusT = 0.12;
    updateStatus();
    drawSpeedo();
    drawMinimap();
  }
  updateAudio(dt);

  // --- draw ----------------------------------------------------------------
  if (GAME.post && RENDER.post) renderWithPost(t);
  else {
    RENDER.renderer.setRenderTarget(null);
    RENDER.renderer.render(RENDER.scene, RENDER.camera);
  }
}

// -------------------------------------------------------------------- bootstrap
function bootstrap() {
  var bar = $('bootbar').firstElementChild;
  var tip = $('boottip');
  var steps = [
    ['Drawing road surfaces and signage…', function () { buildTextures(); }],
    ['Laying out Blaine: arterials, avenues, subdivisions…', function () { buildCity(); }],
    ['Setting up the renderer…', function () { initRenderer(); }],
    ['Paving Highway 65, Lexington, Radisson and the numbered avenues…', function () { buildWorld(); }],
    ['Raising the National Sports Center, Northtown and the high school…', function () { /* done in buildWorld */ }],
    ['Rolling in the weather…', function () {
      buildSky(RENDER.renderer);
      RENDER.scene.add(SKY.mesh);
      buildPrecip(RENDER.scene);
      setWeather('fair', true);
      updateSun(0);
      applySkyColors(RENDER.scene, RENDER.sun, RENDER.hemi, RENDER.ambient);
      refreshEnv(RENDER.renderer, RENDER.scene, true);
    }],
    ['Starting traffic and putting people on the sidewalks…', function () {
      initTraffic();
      initPeds();
    }],
    ['Handing you the keys…', function () {
      var spec = VEHICLE_TYPES[0];
      var start = nearestRoadPose(X_H65 + 40, avZ(109) - 30, true) || { x: X_H65 + 20, z: avZ(109), heading: 0 };
      PLAYER = new Vehicle(spec, start.x, start.z, start.heading);
      PLAYER.lightsManual = false;
      if (Q.post) initPost();
      initKeyboard();
      initHUD();
      initOrientation();
      if (IS_TOUCH) {
        initTouch();
        $('touch').classList.add('on');
        document.body.classList.add('touchui');
      }
      $('vname').innerHTML = 'Driving <b>' + spec.name + '</b> · ' + spec.tag;
      for (var i = 0; i < TRAFFIC.cars.length; i++) {
        spawnTrafficNear(TRAFFIC.cars[i], PLAYER.x, PLAYER.z, 60, 900);
      }
      updateChunks(PLAYER.x, PLAYER.z, true);
    }]
  ];

  var idx = 0;
  function next() {
    if (idx >= steps.length) { ready(); return; }
    tip.textContent = steps[idx][0];
    bar.style.width = Math.round((idx / steps.length) * 100) + '%';
    requestAnimationFrame(function () {
      try {
        steps[idx][1]();
      } catch (err) {
        tip.textContent = 'Error during "' + steps[idx][0] + '": ' + err.message;
        console.error(err);
        throw err;
      }
      idx++;
      setTimeout(next, 0);
    });
  }

  function ready() {
    bar.style.width = '100%';
    tip.innerHTML = IS_TOUCH
      ? 'Steer with the wheel, gas and brake on the right. Weather changes on its own — keep an eye on the road.'
      : '<b>WASD</b> or arrows to drive · <b>C</b> camera · <b>Space</b> handbrake · <b>Esc</b> menu.<br>Weather changes on its own. It is Minnesota.';
    $('bootgo').style.display = 'inline-flex';
    $('bootgo').addEventListener('click', function () {
      $('boot').classList.add('gone');
      $('hud').hidden = false;
      GAME.started = true;
      initAudio();
      setTimeout(function () { $('boot').style.display = 'none'; }, 700);
    }, { once: true });
  }

  requestAnimationFrame(frame);
  next();
}

// A small handle on the simulation for the browser console (and for the
// headless smoke test): window.BLAINE.setWeather('thunderstorm'), .teleport(),
// .state() and so on.
window.BLAINE = {
  get GAME() { return GAME; },
  get PLAYER() { return PLAYER; },
  get WX() { return WX; },
  get ENV() { return ENV; },
  get CITY() { return CITY; },
  get NET() { return NET; },
  get TRAFFIC() { return TRAFFIC; },
  get PEDS() { return PEDS; },
  get CHUNKS() { return CHUNKS; },
  get RENDER() { return RENDER; },
  get QUALITY() { return QUALITY_NAME; },
  setWeather: function (n, instant) { setWeather(n, instant !== false); },
  setTime: function (h) { ENV.time = h % 24; },
  setTimeScale: function (s) { ENV.timeScale = s; },
  setQuality: function (n) { applyQuality(n); applyQualityToRenderer(); },
  vehicle: function (i) { selectVehicle(i); },
  teleport: function (nameOrX, z) {
    if (typeof nameOrX === 'string') {
      var L = CITY.landmarks.filter(function (l) { return l.name.toLowerCase().indexOf(nameOrX.toLowerCase()) >= 0; })[0];
      if (L) teleportTo(L.x, L.z);
      return L ? L.name : null;
    }
    teleportTo(nameOrX, z);
    return null;
  },
  landmarks: function () { return CITY.landmarks.map(function (l) { return l.name; }); },
  // Test hooks: advance the traffic sim without rendering, and ask a signal
  // whether a given approach may proceed.
  stepTraffic: function (dt, n) { for (var i = 0; i < (n || 1); i++) updateTraffic(dt, PLAYER); },
  signalAllows: function (node, edge) { return signalAllows(node, edge); },
  state: function () {
    return {
      fps: Math.round(GAME.fps), quality: QUALITY_NAME,
      x: Math.round(PLAYER.x), z: Math.round(PLAYER.z), place: placeNameAt(PLAYER.x, PLAYER.z),
      mph: +(Math.abs(PLAYER.vx) * 2.23694).toFixed(1), gear: PLAYER.gear,
      vehicle: PLAYER.spec.name, surface: PLAYER.surface, grip: +PLAYER.grip.toFixed(2),
      weather: WX.state, cloud: +WX.cloud.toFixed(2), rain: +WX.rain.toFixed(2),
      snow: +WX.snow.toFixed(2), wet: +WX.wetness.toFixed(2), fog: +WX.fog.toFixed(2),
      time: +ENV.time.toFixed(2), night: +ENV.night.toFixed(2),
      traffic: TRAFFIC.cars.filter(function (c) { return c.active; }).length,
      peds: PEDS.count, chunks: Object.keys(CHUNKS).length,
      calls: RENDER.renderer.info.render.calls, tris: RENDER.renderer.info.render.triangles,
      roads: CITY.roads.length, nodes: NET.nodes.length, edges: NET.edges.length, signals: NET.signals.length
    };
  }
};

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bootstrap);
else bootstrap();
