/* Beylikdüzü 3D — every OpenStreetMap building footprint in Beylikdüzü turned into
 * a lit 3D building (floors, windows, balconies, shopfronts, tiled roofs, mosque
 * domes and minarets) drawn by a MapLibre custom WebGL layer, plus street trees.
 *
 * Data: data/beylikduzu.json (baked from OpenFreeMap z14 tiles, © OpenStreetMap
 * contributors) and data/trees.json (generated along real streets/parks).
 */
(function () {
  'use strict';

  const KIND = { APT: 0, HOUSE: 1, COMM: 2, MALL: 3, IND: 4, MOSQUE: 5, CIVIC: 6, SHED: 7, TOWER: 8, CANOPY: 9 };
  const KIND_NAME = ['Apartment building', 'House', 'Commercial building', 'Shopping mall', 'Industrial / warehouse', 'Mosque', 'School / public building', 'Small structure', 'High-rise tower', 'Canopy / open roof'];
  const F = { ROOF: 1, TILED: 2, SHOP: 4, SMOOTH: 8, METAL: 16, PANEL: 32, LANDMARK: 64, PLAIN: 128 };
  const CIRC = 40075016.68557849;
  const mercX = (lon) => (lon + 180) / 360;
  const mercY = (lat) => { const s = Math.sin(lat * Math.PI / 180); return 0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI); };

  // deterministic per-building randomness
  function hash(a, b) {
    let h = Math.imul(a ^ 0x9e3779b9, 0x85ebca6b) ^ Math.imul(b + 0x632be5ab, 0xc2b2ae35);
    h ^= h >>> 15; h = Math.imul(h, 0x2c1b3c6d); h ^= h >>> 12; h = Math.imul(h, 0x297a2d39); h ^= h >>> 15;
    return (h >>> 0) / 4294967296;
  }

  // Istanbul apartment palette (sRGB 0..255) — mostly whites, creams and warm pastels
  const WALLS = [
    [236, 232, 222], [240, 236, 228], [232, 222, 196], [226, 211, 180], [236, 220, 170], [222, 200, 160],
    [214, 186, 150], [220, 170, 140], [200, 150, 120], [205, 205, 198], [190, 192, 188], [176, 190, 200],
    [190, 204, 186], [228, 196, 150], [244, 240, 232], [210, 120, 90], [168, 176, 182], [232, 214, 200],
  ];
  const WALL_W = [10, 9, 8, 7, 5, 6, 4, 3, 2, 5, 3, 2, 2, 3, 6, 1, 2, 3];
  const WALL_CUM = WALL_W.reduce((a, w, i) => (a.push((a[i - 1] || 0) + w), a), []);
  const pickWall = (r) => { const t = r * WALL_CUM[WALL_CUM.length - 1]; for (let i = 0; i < WALL_CUM.length; i++) if (t < WALL_CUM[i]) return WALLS[i]; return WALLS[0]; };

  // ------------------------------------------------------------------ shaders
  const BUILDING_VS = `
attribute vec2 a_pos; attribute vec2 a_hb; attribute vec2 a_wall; attribute vec2 a_nrm;
attribute vec2 a_meta; attribute vec4 a_col; attribute vec4 a_info; attribute float a_bid;
uniform mat4 u_matrix; uniform float u_q; uniform float u_exag; uniform float u_sel;
varying vec3 v_pos; varying vec3 v_n; varying vec2 v_wall; varying float v_h;
varying vec4 v_col; varying vec4 v_info; varying vec2 v_meta; varying float v_sel;
void main() {
  float h = a_hb.x * 0.1;
  float base = a_hb.y * 0.1;
  float z = base * u_exag + (h < 0.0 ? h * u_exag : h);
  vec3 p = vec3(a_pos * u_q, z);
  v_pos = p; v_h = h; v_wall = a_wall * 0.1; v_col = a_col; v_info = a_info; v_meta = a_meta;
  v_n = vec3(a_nrm, sqrt(max(0.0, 1.0 - dot(a_nrm, a_nrm))));
  v_sel = abs(a_bid - u_sel) < 0.5 ? 1.0 : 0.0;
  gl_Position = u_matrix * vec4(p, 1.0);
}`;

  const COMMON_FS = `
precision highp float;
uniform vec3 u_sun; uniform vec3 u_sunCol; uniform vec3 u_skyCol; uniform vec3 u_gndCol;
uniform vec3 u_fogCol; uniform vec2 u_fog; uniform float u_night; uniform vec3 u_cam;
uniform float u_pxk; uniform float u_mono;
float hash1(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float bit(float flags, float b) { return mod(floor(flags / b + 0.001), 2.0); }
float box(float x, float a, float b, float w) { return smoothstep(a - w, a + w, x) - smoothstep(b - w, b + w, x); }
vec3 fogIt(vec3 c, float dist) { return mix(c, u_fogCol, smoothstep(u_fog.x, u_fog.y, dist) * 0.9); }
`;

  const BUILDING_FS = COMMON_FS + `
varying vec3 v_pos; varying vec3 v_n; varying vec2 v_wall; varying float v_h;
varying vec4 v_col; varying vec4 v_info; varying vec2 v_meta; varying float v_sel;
void main() {
  float kind = floor(v_meta.x + 0.5);
  float flags = floor(v_meta.y + 0.5);
  vec3 n = normalize(v_n);
  vec3 toCam = u_cam - v_pos;
  float dist = length(toCam);
  vec3 V = toCam / max(dist, 0.001);
  float px = dist * u_pxk;               // metres covered by one pixel here
  float seed = floor(v_col.a * 255.0 + 0.5) / 255.0;   // exact per building: hashing a raw varying sparkles
  vec3 albedo = v_col.rgb;
  float glass = 0.0;                     // 0..1 glass coverage
  float lit = 0.0;                       // night lighting amount (0..1) for glass
  float curtain = 0.0;                   // daytime: curtains/blinds behind the glass
  vec3 litCol = vec3(1.0, 0.78, 0.48);
  float shininess = 0.0;
  float isRoof = max(bit(flags, 1.0), bit(flags, 2.0));

  if (bit(flags, 8.0) > 0.5) {
    // domes, minarets
    if (bit(flags, 16.0) > 0.5) { albedo = vec3(0.47, 0.53, 0.57); shininess = 0.35; }
  } else if (bit(flags, 32.0) > 0.5) {
    // rooftop solar water heaters
    albedo = n.z > 0.5 ? vec3(0.10, 0.16, 0.28) : vec3(0.75, 0.75, 0.73);
    glass = n.z > 0.5 ? 0.8 : 0.0;
  } else if (isRoof > 0.5) {
    if (bit(flags, 2.0) > 0.5) {
      // terracotta tiles in rows up the slope
      vec3 tc = mix(vec3(0.62, 0.29, 0.19), vec3(0.74, 0.42, 0.28), seed);
      float rows = fract(v_h * 3.2);
      float w = clamp(px * 3.2, 0.0, 1.0);
      float stripe = mix(smoothstep(0.0, 0.25, rows) * 0.25 + 0.75, 0.87, w);
      float age = hash1(floor(v_pos.xy * 1.3)) * 0.12;
      albedo = tc * (stripe - age);
    } else {
      // flat concrete roof with membrane patches
      float g = hash1(floor(v_pos.xy * 0.7));
      float patch = step(0.82, hash1(floor(v_pos.xy * 0.18) + seed * 17.0));
      albedo = mix(vec3(0.60, 0.60, 0.58), vec3(0.70, 0.69, 0.66), g * 0.6);
      albedo = mix(albedo, vec3(0.36, 0.37, 0.39), patch * 0.7);
      if (bit(flags, 64.0) > 0.5) albedo = vec3(0.95, 0.72, 0.25);
    }
  } else if (bit(flags, 128.0) > 0.5 || kind == 7.0) {
    albedo *= 0.92;
  } else if (v_h < 0.0) {
    albedo = albedo * 0.62 + vec3(0.10, 0.10, 0.09);   // stone plinth on sloping ground
  } else {
    // ---- facade
    vec4 info = floor(v_info + 0.5);
    float fh = info.x / 20.0;
    float floors = info.y;
    float topH = info.z;
    float gx = info.w / 20.0;          // extra height of the ground floor
    float u = v_wall.x, L = max(v_wall.y, 0.5);
    float sp = 2.7 + seed * 0.9;
    if (kind == 1.0) sp = 3.6;
    else if (kind == 8.0) sp = 1.5;
    else if (kind == 3.0 || kind == 2.0) sp = 4.5;
    else if (kind == 4.0) sp = 7.0;
    else if (kind == 6.0) sp = 3.1;
    else if (kind == 5.0) sp = 3.4;
    float ncol = max(1.0, floor(L / sp));
    float s = L / ncol;
    float cu = u / s;
    float col = floor(cu);
    float fu = fract(cu);
    float gH = fh + gx;
    bool ground = v_h < gH;
    float hz = ground ? v_h / gH : (v_h - gH) / fh;
    float fl = ground ? 0.0 : floor(hz) + 1.0;
    float fv = fract(hz);
    float cell = min(s, ground ? gH : fh);
    float lod = smoothstep(0.10, 0.32, px / cell);    // 0 = full detail, 1 = averaged
    float wu = px / s, wv = px / (ground ? gH : fh);
    float rnd = hash1(vec2(col, fl) + seed * 37.0);
    float mask = 0.0, avg = 0.0, litRatio = 0.42;
    float slab = 0.0;

    if (kind == 8.0) {
      // curtain-wall tower
      mask = 1.0 - max(1.0 - box(fu, 0.06, 0.94, wu), 1.0 - box(fv, 0.10, 0.96, wv)) ; avg = 0.78;
      mask = mix(mask, avg, lod); litRatio = 0.45;
    } else if (kind == 3.0 || kind == 2.0) {
      // malls / commercial: glass ground floor, ribbon windows above, panel seams
      if (ground) { mask = box(fu, 0.03, 0.97, wu) * box(fv, 0.06, 0.82, wv); avg = 0.72; litRatio = 0.95; litCol = vec3(1.0, 0.95, 0.85); }
      else if (kind == 2.0 || fl >= floors - 1.0) { mask = box(fv, 0.32, 0.80, wv) * (1.0 - box(fract(u / 1.5), 0.0, 0.06, px / 1.5)); avg = 0.45; litRatio = 0.6; }
      else { float seam = box(fract(u / 2.5), 0.0, 0.03, px / 2.5) + box(fv, 0.0, 0.04, wv); albedo *= 1.0 - 0.10 * clamp(seam, 0.0, 1.0) * (1.0 - lod); }
      mask = mix(mask, avg, lod);
    } else if (kind == 4.0) {
      // industrial: corrugated cladding + high clerestory band
      float corr = 0.5 + 0.5 * sin(u * 6.2831 * 3.0);
      albedo *= mix(0.88 + 0.12 * corr, 0.94, clamp(px * 6.0, 0.0, 1.0));
      float hb = v_h / max(topH, 1.0);
      mask = box(hb, 0.72, 0.84, px / max(topH, 1.0)) * box(fu, 0.1, 0.9, wu); avg = 0.1;
      mask = mix(mask, avg, lod); litRatio = 0.2;
    } else if (kind == 5.0) {
      // mosque: two rows of arched windows
      float hb = v_h / max(topH, 1.0);
      float row1 = box(hb, 0.18, 0.40, px / topH), row2 = box(hb, 0.52, 0.80, px / topH);
      float a1 = 1.0 - smoothstep(0.0, 0.02, length(vec2((fu - 0.5) * 2.4, (hb - 0.40) * 9.0)) - 1.0) * step(0.40, hb);
      float a2 = 1.0 - smoothstep(0.0, 0.02, length(vec2((fu - 0.5) * 2.4, (hb - 0.80) * 9.0)) - 1.0) * step(0.80, hb);
      mask = box(fu, 0.30, 0.70, wu) * max(row1 * (hb < 0.40 ? 1.0 : a1), row2 * (hb < 0.80 ? 1.0 : a2));
      mask = mix(mask, 0.12, lod); litRatio = 0.9; litCol = vec3(1.0, 0.86, 0.6);
    } else {
      // apartments, houses, schools
      bool balcony = kind == 0.0 && !ground && rnd < 0.34 && ncol > 1.0;
      float wl = kind == 6.0 ? 0.12 : 0.20, wr = kind == 6.0 ? 0.88 : 0.80;
      if (ground && bit(flags, 4.0) > 0.5) {
        // shop fronts with awnings
        mask = box(fu, 0.05, 0.95, wu) * box(fv, 0.06, 0.70, wv);
        float aw = box(fv, 0.72, 0.80, wv) * box(fu, 0.02, 0.98, wu);
        vec3 awc = hash1(vec2(col, seed)) < 0.5 ? vec3(0.62, 0.16, 0.14) : (hash1(vec2(seed, col)) < 0.5 ? vec3(0.13, 0.33, 0.22) : vec3(0.15, 0.22, 0.45));
        albedo = mix(albedo, awc, aw * (1.0 - lod));
        avg = 0.62; litRatio = 0.92; litCol = vec3(1.0, 0.93, 0.80);
      } else if (ground && abs(col - floor(ncol * 0.5)) < 0.5 && kind != 6.0) {
        mask = box(fu, 0.28, 0.72, wu) * box(fv, 0.0, 0.78, wv); avg = 0.3; litRatio = 0.7; // entrance
      } else if (balcony) {
        float door = box(fu, 0.12, 0.88, wu) * box(fv, 0.06, 0.86, wv);
        float rail = box(fv, 0.06, 0.36, wv) * box(fu, 0.04, 0.96, wu);
        mask = door * (1.0 - rail * 0.85);
        albedo = mix(albedo, albedo * 1.06 + 0.03, rail * (1.0 - lod));
        slab = box(fv, 0.0, 0.07, wv) * 1.4;
        avg = 0.42;
      } else {
        mask = box(fu, wl, wr, wu) * box(fv, 0.30, 0.84, wv);
        float frame = box(fu, wl - 0.035, wr + 0.035, wu) * box(fv, 0.27, 0.87, wv) - mask;
        float sill = box(fu, wl - 0.06, wr + 0.06, wu) * box(fv, 0.245, 0.285, wv);
        albedo = mix(albedo, vec3(0.92, 0.92, 0.9), clamp(frame + sill, 0.0, 1.0) * (1.0 - lod));
        avg = (wr - wl) * 0.54;
      }
      slab = max(slab, box(fv, 0.0, 0.05, wv));
      albedo *= 1.0 - 0.10 * slab * (1.0 - lod);
      // weathering streaks below windows
      albedo *= 1.0 - 0.05 * box(fu, wl, wr, wu) * box(fv, 0.08, 0.30, wv) * (1.0 - lod);
      mask = mix(mask, avg, lod);
      if (kind == 1.0) litRatio = 0.4;
    }
    // top parapet band
    albedo = mix(albedo, albedo * 1.08 + 0.02, box(v_h, topH - 0.6, topH + 1.0, px) * (1.0 - lod));
    glass = clamp(mask, 0.0, 1.0);
    float rc = hash1(vec2(col * 1.7 + 0.3, fl * 3.1) + seed * 11.0);
    curtain = mix(step(0.45, rc) * (0.35 + 0.5 * fract(rc * 7.3)), 0.3, lod);
    float on = step(rnd, litRatio);
    lit = mix(on, litRatio, lod);
    float warm = hash1(vec2(fl, col) + 3.1);
    litCol = mix(litCol, vec3(0.85, 0.92, 1.0), step(0.8, warm) * 0.7);
    shininess = 1.0;
  }

  if (u_mono > 0.5) { albedo = vec3(0.93, 0.93, 0.91) * (isRoof > 0.5 ? 0.97 : 1.0); glass *= 0.25; }

  // ---- lighting
  float diff = max(dot(n, u_sun), 0.0);
  vec3 amb = mix(u_gndCol, u_skyCol, n.z * 0.5 + 0.5);
  float ao = 0.62 + 0.38 * smoothstep(-1.0, 7.0, v_h);
  vec3 wall = albedo * (u_sunCol * diff + amb) * ao;

  vec3 R = reflect(-V, n);
  float fres = 0.04 + 0.96 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
  vec3 sky = mix(mix(u_gndCol, u_skyCol, 0.55) * 0.95, u_skyCol * 1.3 + u_sunCol * 0.1, smoothstep(-0.25, 0.5, R.z));
  vec3 gc = mix(vec3(0.11, 0.14, 0.17), sky, 0.28 + 0.62 * fres);
  float spec = pow(max(dot(R, u_sun), 0.0), 80.0) * 2.0;
  gc += u_sunCol * spec * shininess;
  gc = mix(gc, vec3(0.80, 0.76, 0.68) * (u_sunCol * 0.5 + amb) * 0.9, curtain * 0.5 * (1.0 - u_night));
  gc = mix(gc, gc * (1.0 - u_night * 0.85) + litCol * 1.15 * lit * u_night, 1.0);
  vec3 color = mix(wall, gc, glass);
  if (bit(flags, 8.0) > 0.5 && bit(flags, 16.0) > 0.5) color += u_sunCol * pow(max(dot(R, u_sun), 0.0), 20.0) * 0.5;
  // street lighting washing the lower floors at night
  if (isRoof < 0.5 && n.z < 0.5) color += vec3(1.0, 0.62, 0.32) * 0.16 * u_night * (1.0 - smoothstep(0.0, 9.0, v_h)) * (u_mono > 0.5 ? 0.0 : 1.0);
  if (v_sel > 0.5) color = mix(color, vec3(0.20, 0.75, 1.0), 0.35);
  gl_FragColor = vec4(fogIt(color, dist), 1.0);
}`;

  const TREE_VS = `
attribute vec3 a_vpos; attribute vec3 a_vnrm; attribute float a_part; attribute vec4 a_inst;
uniform mat4 u_matrix; uniform float u_exag;
varying vec3 v_pos; varying vec3 v_n; varying float v_part; varying float v_var; varying float v_sp; varying float v_rel;
void main() {
  float sp = floor(a_inst.w / 100.0);
  float r = mod(a_inst.w, 100.0) / 99.0;
  float H, R, cz, sx, sz, th;
  if (sp == 1.0) { H = 9.0 + r * 8.0; R = 0.9 + r * 0.5; sx = R; sz = H * 0.46; cz = H * 0.54; th = 1.2; }
  else if (sp == 2.0) { H = 9.0 + r * 6.0; R = 3.2 + r * 1.8; sx = R; sz = R * 0.42; cz = H - sz; th = H - sz; }
  else { H = 6.0 + r * 7.0; R = 2.0 + r * 2.2; sx = R; sz = R * 0.92; cz = H - sz; th = H - sz * 1.4; }
  float ang = r * 37.0;
  mat2 rot = mat2(cos(ang), sin(ang), -sin(ang), cos(ang));
  vec3 lp; vec3 n;
  if (a_part < 0.5) { lp = vec3(a_vpos.xy * (0.18 + R * 0.04), a_vpos.z * th); n = vec3(a_vnrm.xy, 0.0); }
  else { lp = a_vpos * vec3(sx, sx, sz) + vec3(0.0, 0.0, cz); n = normalize(a_vnrm / vec3(sx, sx, sz)); }
  lp.xy = rot * lp.xy; n.xy = rot * n.xy;
  vec3 p = vec3(a_inst.xy, a_inst.z * u_exag - 0.6) + lp;
  v_pos = p; v_n = n; v_part = a_part; v_var = fract(r * 7.13); v_sp = sp; v_rel = a_vpos.z;
  gl_Position = u_matrix * vec4(p, 1.0);
}`;

  const TREE_FS = COMMON_FS + `
varying vec3 v_pos; varying vec3 v_n; varying float v_part; varying float v_var; varying float v_sp; varying float v_rel;
void main() {
  vec3 n = normalize(v_n);
  vec3 c;
  if (v_part < 0.5) c = vec3(0.30, 0.22, 0.16);
  else if (v_sp == 1.0) c = mix(vec3(0.09, 0.18, 0.09), vec3(0.13, 0.24, 0.11), v_var);
  else if (v_sp == 2.0) c = mix(vec3(0.15, 0.25, 0.11), vec3(0.20, 0.31, 0.13), v_var);
  else c = mix(vec3(0.20, 0.32, 0.12), vec3(0.34, 0.43, 0.15), v_var);
  float leaf = hash1(floor(v_pos.xy * 2.5 + v_pos.z * 1.7));
  if (v_part > 0.5) c *= 0.86 + 0.24 * leaf;
  if (u_mono > 0.5) c = mix(c, vec3(0.55, 0.62, 0.5), 0.6);
  float diff = max(dot(n, u_sun) * 0.75 + 0.25, 0.0);
  vec3 amb = mix(u_gndCol, u_skyCol, n.z * 0.5 + 0.5);
  float ao = v_part > 0.5 ? 0.55 + 0.45 * smoothstep(-1.0, 1.0, v_rel) : 0.7;
  vec3 color = c * (u_sunCol * diff + amb) * ao;
  float dist = length(u_cam - v_pos);
  gl_FragColor = vec4(fogIt(color, dist), 1.0);
}`;

  // ------------------------------------------------------------------ geometry builder
  class Builder {
    constructor(cap) { this.buf = new ArrayBuffer(cap * 28); this.dv = new DataView(this.buf); this.n = 0; this.idx = []; }
    grow() { const nb = new ArrayBuffer(this.buf.byteLength * 2); new Uint8Array(nb).set(new Uint8Array(this.buf)); this.buf = nb; this.dv = new DataView(nb); }
    // x,y local metres; h metres (negative = below ground, scaled with terrain); base dm; u,L metres; nx,ny; kind; flags; col[r,g,b,seed]; info[fh*20, floors, topH, gx*20]; bid
    v(x, y, h, base, u, L, nx, ny, kind, flags, col, info, bid, q) {
      if ((this.n + 1) * 28 > this.buf.byteLength) this.grow();
      const d = this.dv, o = this.n * 28;
      d.setInt16(o, Math.round(x / q), true); d.setInt16(o + 2, Math.round(y / q), true);
      d.setInt16(o + 4, Math.max(-32768, Math.min(32767, Math.round(h * 10))), true); d.setInt16(o + 6, base, true);
      d.setUint16(o + 8, Math.min(65535, Math.max(0, Math.round(u * 10))), true); d.setUint16(o + 10, Math.min(65535, Math.round(L * 10)), true);
      d.setInt8(o + 12, Math.round(nx * 127)); d.setInt8(o + 13, Math.round(ny * 127));
      d.setUint8(o + 14, kind); d.setUint8(o + 15, flags);
      d.setUint8(o + 16, col[0]); d.setUint8(o + 17, col[1]); d.setUint8(o + 18, col[2]); d.setUint8(o + 19, col[3]);
      d.setUint8(o + 20, info[0]); d.setUint8(o + 21, info[1]); d.setUint8(o + 22, info[2]); d.setUint8(o + 23, info[3]);
      d.setUint16(o + 24, bid, true);
      return this.n++;
    }
  }

  function decodeBuildings(d) {
    const out = [];
    let ri = 0, ci = 0, px = 0, py = 0;
    const q = d.q;
    for (let i = 0; i < d.h.length; i++) {
      const nr = d.r[ri++]; const rings = [];
      for (let k = 0; k < nr; k++) {
        const c = d.r[ri++]; const ring = new Array(c);
        for (let j = 0; j < c; j++) { px += d.c[ci++]; py += d.c[ci++]; ring[j] = [px * q, py * q]; }
        rings.push(ring);
      }
      out.push({
        i, rings, h: d.h[i] / 10, mh: (d.mh[i] || 0) / 10, e: d.e[i] / 10, eb: d.eb[i] / 10, kind: d.k[i], est: d.est[i],
        floors: d.fl[i], shop: d.shop[i], ml: d.ml ? d.ml[i] : 0, name: d.names[d.nm[i] || 0] || '', hn: d.hn[i] || '',
      });
    }
    return out;
  }

  function ringArea(r) { let s = 0; for (let i = 0, j = r.length - 1; i < r.length; j = i++) s += (r[j][0] - r[i][0]) * (r[j][1] + r[i][1]); return s / 2; }
  function centroid(r) { let a = 0, cx = 0, cy = 0; for (let i = 0, j = r.length - 1; i < r.length; j = i++) { const f = r[j][0] * r[i][1] - r[i][0] * r[j][1]; a += f; cx += (r[j][0] + r[i][0]) * f; cy += (r[j][1] + r[i][1]) * f; } return Math.abs(a) < 1e-9 ? r[0].slice() : [cx / (3 * a), cy / (3 * a)]; }
  function pip(x, y, rings) { let inside = false; for (const r of rings) for (let i = 0, j = r.length - 1; i < r.length; j = i++) { const xi = r[i][0], yi = r[i][1], xj = r[j][0], yj = r[j][1]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside; } return inside; }

  function buildGeometry(bs, opts) {
    const q = opts.q;
    const B = new Builder(1400000);
    const earcut = (window.earcut && (window.earcut.default || window.earcut.earcut)) || window.earcut;
    const inZone = opts.inZone;
    const landmarks = opts.landmarks || new Set();
    for (const b of bs) {
      const r1 = hash(b.i, 11), r2 = hash(b.i, 23), r3 = hash(b.i, 37);
      const kind = b.kind;
      let wc = pickWall(r1);
      if (kind === KIND.CIVIC) wc = r2 < 0.5 ? [232, 190, 140] : [224, 214, 170];
      else if (kind === KIND.MOSQUE) wc = [232, 226, 212];
      else if (kind === KIND.MALL || kind === KIND.COMM) wc = r2 < 0.5 ? [200, 204, 208] : [222, 214, 200];
      else if (kind === KIND.IND) wc = r2 < 0.5 ? [186, 190, 192] : [176, 186, 196];
      else if (kind === KIND.TOWER) wc = [150, 170, 185];
      const seed = Math.floor(r3 * 255);
      const col = [wc[0], wc[1], wc[2], seed];
      const fh = ({ 0: 2.95, 1: 2.9, 2: 3.8, 3: 5.2, 4: 7, 5: 4, 6: 3.6, 7: 2.8, 8: 3.4, 9: 4.5 })[kind];
      const top = b.h;
      const gx = (kind === KIND.APT && b.shop) ? 1.2 : (kind === KIND.APT ? 0.4 : 0);
      const info = [Math.min(255, Math.round(fh * 20)), Math.min(255, b.floors), Math.min(255, Math.round(top)), Math.round(gx * 20)];
      const base = Math.round(b.e * 10);
      const canopy = kind === KIND.CANOPY;
      const bottom = canopy ? Math.max(0.5, top - 0.7) : b.mh > 0 ? b.mh : Math.min(-0.5, b.eb);
      let flags = b.shop ? F.SHOP : 0;
      if (canopy) flags |= F.PLAIN;
      if (landmarks.has(b.i)) flags |= F.LANDMARK;
      const outer = b.rings[0];
      const area = Math.abs(ringArea(outer));
      // hipped roof for small quads (houses, older apartment blocks)
      let hip = null;
      if (b.rings.length === 1 && outer.length === 4 && (kind === KIND.HOUSE || (kind === KIND.APT && b.floors <= 6 && r2 < 0.45))) hip = hipRoof(outer, top);

      // walls
      for (const ring of b.rings) {
        for (let k = 0; k < ring.length; k++) {
          const a = ring[k], c = ring[(k + 1) % ring.length];
          const dx = c[0] - a[0], dy = c[1] - a[1]; const L = Math.hypot(dx, dy); if (L < 0.05) continue;
          const nx = dy / L, ny = -dx / L;
          const v0 = B.v(a[0], a[1], bottom, base, 0, L, nx, ny, kind, flags, col, info, b.i, q);
          B.v(c[0], c[1], bottom, base, L, L, nx, ny, kind, flags, col, info, b.i, q);
          B.v(c[0], c[1], top, base, L, L, nx, ny, kind, flags, col, info, b.i, q);
          B.v(a[0], a[1], top, base, 0, L, nx, ny, kind, flags, col, info, b.i, q);
          B.idx.push(v0, v0 + 1, v0 + 2, v0, v0 + 2, v0 + 3);
        }
      }
      // roof
      if (hip) {
        for (const f of hip) {
          const [p0, p1, p2] = f;
          const ux = p1[0] - p0[0], uy = p1[1] - p0[1], uz = p1[2] - p0[2], vx = p2[0] - p0[0], vy = p2[1] - p0[1], vz = p2[2] - p0[2];
          let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx; const nl = Math.hypot(nx, ny, nz) || 1; nx /= nl; ny /= nl; nz /= nl;
          if (nz < 0) { nx = -nx; ny = -ny; }
          const s = B.n;
          for (const p of f) B.v(p[0], p[1], p[2], base, 0, 0, nx, ny, kind, flags | F.TILED, col, info, b.i, q);
          for (let t = 1; t + 1 < f.length; t++) B.idx.push(s, s + t, s + t + 1);
        }
      } else {
        const flat = []; const holes = [];
        for (let k = 0; k < b.rings.length; k++) { if (k) holes.push(flat.length / 2); for (const p of b.rings[k]) flat.push(p[0], p[1]); }
        const tri = earcut(flat, holes.length ? holes : null, 2);
        const s = B.n;
        for (let k = 0; k < flat.length; k += 2) B.v(flat[k], flat[k + 1], top, base, 0, 0, 0, 0, kind, flags | F.ROOF, col, info, b.i, q);
        for (const t of tri) B.idx.push(s + t);
      }
      const cen = centroid(outer);
      if (canopy && outer.length <= 12) for (const p of outer) { const dx = cen[0] - p[0], dy = cen[1] - p[1], dl = Math.hypot(dx, dy) || 1; obox(B, p[0] + dx / dl * 0.6, p[1] + dy / dl * 0.6, 1, 0, 0.14, 0.14, Math.min(-0.5, b.eb), bottom, base, kind, F.PLAIN, [150, 152, 156, 0], info, b.i, q); }
      // mosque dome + minaret(s)
      if (kind === KIND.MOSQUE && area >= 70) {
        const R = Math.max(3, Math.min(13, Math.sqrt(area) * 0.36));
        if (pip(cen[0], cen[1], b.rings)) dome(B, cen[0], cen[1], top, R, base, b.i, q);
        let far = outer[0], fd = -1; for (const p of outer) { const dd = Math.hypot(p[0] - cen[0], p[1] - cen[1]); if (dd > fd) { fd = dd; far = p; } }
        const ux = (cen[0] - far[0]) / (fd || 1), uy = (cen[1] - far[1]) / (fd || 1);
        const mh = top + Math.max(16, R * 2.4 + 14);
        minaret(B, far[0] + ux * 2.4, far[1] + uy * 2.4, mh, base, b.i, q);
        if (area > 900) { let opp = outer[0], od = -1; for (const p of outer) { const dd = Math.hypot(p[0] - far[0], p[1] - far[1]); if (dd > od) { od = dd; opp = p; } } const vx = (cen[0] - opp[0]) / (od || 1), vy = (cen[1] - opp[1]) / (od || 1); minaret(B, opp[0] + vx * 2.4, opp[1] + vy * 2.4, mh, base, b.i, q); }
      }
      // rooftop clutter inside the detail zone
      if (!hip && inZone(cen[0], cen[1]) && b.floors >= 3 && area > 90 && (kind === KIND.APT || kind === KIND.CIVIC || kind === KIND.COMM)) {
        // orientation from the longest edge
        let bx = 1, by = 0, bl = 0; for (let k = 0; k < outer.length; k++) { const a = outer[k], c = outer[(k + 1) % outer.length]; const l = Math.hypot(c[0] - a[0], c[1] - a[1]); if (l > bl) { bl = l; bx = (c[0] - a[0]) / l; by = (c[1] - a[1]) / l; } }
        if (pip(cen[0], cen[1], b.rings) && b.floors >= 5) obox(B, cen[0], cen[1], bx, by, 2.2, 1.7, top, top + 2.7, base, kind, F.PLAIN, [col[0] * 0.95 | 0, col[1] * 0.95 | 0, col[2] * 0.95 | 0, seed], info, b.i, q);
        const nPanels = Math.floor(hash(b.i, 51) * 4);
        for (let k = 0; k < nPanels; k++) {
          const ox = (hash(b.i, 60 + k) - 0.5) * Math.sqrt(area) * 0.6, oy = (hash(b.i, 70 + k) - 0.5) * Math.sqrt(area) * 0.6;
          const x = cen[0] + bx * ox - by * oy, y = cen[1] + by * ox + bx * oy;
          if (!pip(x, y, b.rings)) continue;
          obox(B, x, y, bx, by, 0.9, 0.55, top, top + 1.1, base, kind, F.PANEL | F.PLAIN, col, info, b.i, q);
        }
      }
    }
    return { vbuf: B.buf.slice(0, B.n * 28), count: B.n, idx: new Uint32Array(B.idx) };
  }

  // hipped roof over a quad: two trapezoids + two triangles (falls back to pyramid)
  function hipRoof(r, top) {
    const e = [0, 1, 2, 3].map((k) => Math.hypot(r[(k + 1) % 4][0] - r[k][0], r[(k + 1) % 4][1] - r[k][1]));
    const long0 = e[0] + e[2] >= e[1] + e[3]; // edges 0 and 2 are the long ones
    const shortLen = long0 ? (e[1] + e[3]) / 2 : (e[0] + e[2]) / 2;
    const longLen = long0 ? (e[0] + e[2]) / 2 : (e[1] + e[3]) / 2;
    const rise = Math.min(3.2, Math.max(1.0, shortLen * 0.32));
    const c = [(r[0][0] + r[1][0] + r[2][0] + r[3][0]) / 4, (r[0][1] + r[1][1] + r[2][1] + r[3][1]) / 4];
    const R = r.map((p) => [p[0], p[1], top]);
    if (longLen - shortLen < 0.8) { const apex = [c[0], c[1], top + rise]; return [[R[0], R[1], apex], [R[1], R[2], apex], [R[2], R[3], apex], [R[3], R[0], apex]]; }
    // ridge runs between the midpoints of the short edges, inset by half the short length
    const sA = long0 ? 1 : 0, sB = long0 ? 3 : 2;
    const mA = [(r[sA][0] + r[(sA + 1) % 4][0]) / 2, (r[sA][1] + r[(sA + 1) % 4][1]) / 2];
    const mB = [(r[sB][0] + r[(sB + 1) % 4][0]) / 2, (r[sB][1] + r[(sB + 1) % 4][1]) / 2];
    const dx = mB[0] - mA[0], dy = mB[1] - mA[1], dl = Math.hypot(dx, dy) || 1; const ins = shortLen / 2;
    const P = [mA[0] + dx / dl * ins, mA[1] + dy / dl * ins, top + rise], Qp = [mB[0] - dx / dl * ins, mB[1] - dy / dl * ins, top + rise];
    // short edge sA (r[sA]→r[sA+1]) gets triangle to P; sB gets triangle to Q; long edges get trapezoids
    const a = sA, b = (sA + 1) % 4, c2 = sB, d2 = (sB + 1) % 4;
    return [[R[a], R[b], P], [R[c2], R[d2], Qp], [R[b], R[c2], Qp, P], [R[d2], R[a], P, Qp]];
  }

  function dome(B, cx, cy, top, R, base, bid, q) {
    const SEG = 18, RINGS = 7, col = [120, 136, 146, 128], info = [60, 1, 0, 0];
    const drum = Math.max(0.8, R * 0.18);
    const s0 = B.n;
    // drum (short cylinder)
    for (let k = 0; k <= SEG; k++) { const a = k / SEG * Math.PI * 2, nx = Math.cos(a), ny = Math.sin(a); B.v(cx + nx * R, cy + ny * R, top - 0.3, base, 0, 0, nx, ny, KIND.MOSQUE, F.SMOOTH, [236, 230, 216, 128], info, bid, q); B.v(cx + nx * R, cy + ny * R, top + drum, base, 0, 0, nx, ny, KIND.MOSQUE, F.SMOOTH, [236, 230, 216, 128], info, bid, q); }
    for (let k = 0; k < SEG; k++) { const v = s0 + k * 2; B.idx.push(v, v + 2, v + 3, v, v + 3, v + 1); }
    const s1 = B.n;
    for (let j = 0; j <= RINGS; j++) {
      const phi = j / RINGS * Math.PI / 2, cr = Math.cos(phi), z = Math.sin(phi);
      for (let k = 0; k <= SEG; k++) { const a = k / SEG * Math.PI * 2; const nx = Math.cos(a) * cr, ny = Math.sin(a) * cr; B.v(cx + nx * R, cy + ny * R, top + drum + z * R * 0.92, base, 0, 0, nx, ny, KIND.MOSQUE, F.SMOOTH | F.METAL, col, info, bid, q); }
    }
    for (let j = 0; j < RINGS; j++) for (let k = 0; k < SEG; k++) { const a = s1 + j * (SEG + 1) + k, b = a + SEG + 1; B.idx.push(a, a + 1, b + 1, a, b + 1, b); }
    // finial
    cylinder(B, cx, cy, 0.18, top + drum + R * 0.92, top + drum + R * 0.92 + 2.2, 6, base, [200, 170, 90, 128], F.SMOOTH | F.METAL, bid, q);
  }

  function cylinder(B, cx, cy, r, z0, z1, seg, base, col, flags, bid, q) {
    const s = B.n, info = [60, 1, 0, 0];
    for (let k = 0; k <= seg; k++) { const a = k / seg * Math.PI * 2, nx = Math.cos(a), ny = Math.sin(a); B.v(cx + nx * r, cy + ny * r, z0, base, 0, 0, nx, ny, KIND.MOSQUE, flags, col, info, bid, q); B.v(cx + nx * r, cy + ny * r, z1, base, 0, 0, nx, ny, KIND.MOSQUE, flags, col, info, bid, q); }
    for (let k = 0; k < seg; k++) { const v = s + k * 2; B.idx.push(v, v + 2, v + 3, v, v + 3, v + 1); }
    const c = B.v(cx, cy, z1, base, 0, 0, 0, 0, KIND.MOSQUE, flags, col, info, bid, q);
    for (let k = 0; k < seg; k++) B.idx.push(s + k * 2 + 1, s + k * 2 + 3, c);
  }

  function cone(B, cx, cy, r, z0, z1, seg, base, col, flags, bid, q) {
    const s = B.n, info = [60, 1, 0, 0]; const slope = r / (z1 - z0); const nzf = 1 / Math.sqrt(1 + slope * slope);
    for (let k = 0; k <= seg; k++) { const a = k / seg * Math.PI * 2, nx = Math.cos(a) * nzf, ny = Math.sin(a) * nzf; B.v(cx + Math.cos(a) * r, cy + Math.sin(a) * r, z0, base, 0, 0, nx, ny, KIND.MOSQUE, flags, col, info, bid, q); B.v(cx, cy, z1, base, 0, 0, nx, ny, KIND.MOSQUE, flags, col, info, bid, q); }
    for (let k = 0; k < seg; k++) { const v = s + k * 2; B.idx.push(v, v + 2, v + 1); }
  }

  function minaret(B, x, y, h, base, bid, q) {
    const white = [240, 237, 230, 128];
    const lead = [120, 136, 146, 128];
    cylinder(B, x, y, 1.7, -2, 4, 8, base, white, F.SMOOTH, bid, q);
    cylinder(B, x, y, 1.25, 4, h - 6, 10, base, white, F.SMOOTH, bid, q);
    cylinder(B, x, y, 1.95, h - 11.5, h - 10.6, 12, base, white, F.SMOOTH, bid, q); // balcony (şerefe)
    cylinder(B, x, y, 1.05, h - 6, h - 4.6, 10, base, white, F.SMOOTH, bid, q);
    cone(B, x, y, 1.15, h - 4.6, h + 3.2, 10, base, lead, F.SMOOTH | F.METAL, bid, q);
    cylinder(B, x, y, 0.08, h + 3.2, h + 4.6, 4, base, [200, 170, 90, 128], F.SMOOTH | F.METAL, bid, q);
  }

  function obox(B, cx, cy, ux, uy, hx, hy, z0, z1, base, kind, flags, col, info, bid, q) {
    const vx = -uy, vy = ux;
    const P = [[-hx, -hy], [hx, -hy], [hx, hy], [-hx, hy]].map(([a, b]) => [cx + ux * a + vx * b, cy + uy * a + vy * b]);
    for (let k = 0; k < 4; k++) {
      const a = P[k], c = P[(k + 1) % 4]; const dx = c[0] - a[0], dy = c[1] - a[1], L = Math.hypot(dx, dy); const nx = dy / L, ny = -dx / L;
      const s = B.n;
      B.v(a[0], a[1], z0, base, 0, L, nx, ny, kind, flags, col, info, bid, q); B.v(c[0], c[1], z0, base, L, L, nx, ny, kind, flags, col, info, bid, q);
      B.v(c[0], c[1], z1, base, L, L, nx, ny, kind, flags, col, info, bid, q); B.v(a[0], a[1], z1, base, 0, L, nx, ny, kind, flags, col, info, bid, q);
      B.idx.push(s, s + 1, s + 2, s, s + 2, s + 3);
    }
    const s = B.n; for (const p of P) B.v(p[0], p[1], z1, base, 0, 0, 0, 0, kind, flags | F.ROOF, col, info, bid, q);
    B.idx.push(s, s + 1, s + 2, s, s + 2, s + 3);
  }

  function treeMesh() {
    // low-poly lumpy icosphere crown + hexagonal trunk
    const t = (1 + Math.sqrt(5)) / 2;
    let verts = [[-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0], [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t], [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]].map((v) => { const l = Math.hypot(...v); return v.map((c) => c / l); });
    let faces = [[0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11], [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8], [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9], [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]];
    const mid = new Map();
    const midpoint = (a, b) => { const k = a < b ? a + '_' + b : b + '_' + a; if (mid.has(k)) return mid.get(k); const v = verts[a].map((c, i) => c + verts[b][i]); const l = Math.hypot(...v); verts.push(v.map((c) => c / l)); mid.set(k, verts.length - 1); return verts.length - 1; };
    const nf = []; for (const [a, b, c] of faces) { const ab = midpoint(a, b), bc = midpoint(b, c), ca = midpoint(c, a); nf.push([a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca]); } faces = nf;
    const pos = [], nrm = [], part = [], idx = [];
    // flat-shaded crown with jitter
    const jit = verts.map((v, i) => 0.82 + 0.3 * hash(i, 5));
    for (const f of faces) {
      const p = f.map((i) => verts[i].map((c) => c * jit[i]));
      const u = [p[1][0] - p[0][0], p[1][1] - p[0][1], p[1][2] - p[0][2]], w = [p[2][0] - p[0][0], p[2][1] - p[0][1], p[2][2] - p[0][2]];
      let n = [u[1] * w[2] - u[2] * w[1], u[2] * w[0] - u[0] * w[2], u[0] * w[1] - u[1] * w[0]]; const l = Math.hypot(...n); n = n.map((c) => c / l);
      const c0 = [(p[0][0] + p[1][0] + p[2][0]) / 3, (p[0][1] + p[1][1] + p[2][1]) / 3, (p[0][2] + p[1][2] + p[2][2]) / 3]; if (n[0] * c0[0] + n[1] * c0[1] + n[2] * c0[2] < 0) n = n.map((c) => -c);
      const s = pos.length / 3; for (const v of p) { pos.push(...v); nrm.push(...n); part.push(1); } idx.push(s, s + 1, s + 2);
    }
    const SEG = 6, s = pos.length / 3;
    for (let k = 0; k <= SEG; k++) { const a = k / SEG * Math.PI * 2, c = Math.cos(a), si = Math.sin(a); pos.push(c, si, 0, c * 0.8, si * 0.8, 1.05); nrm.push(c, si, 0, c, si, 0); part.push(0, 0); }
    for (let k = 0; k < SEG; k++) { const v = s + k * 2; idx.push(v, v + 2, v + 3, v, v + 3, v + 1); }
    return { pos: new Float32Array(pos), nrm: new Float32Array(nrm), part: new Float32Array(part), idx: new Uint16Array(idx) };
  }

  // ------------------------------------------------------------------ GL helpers
  function compile(gl, vs, fs) {
    const mk = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) + '\n' + src.split('\n').map((l, i) => (i + 1) + ': ' + l).join('\n')); return s; };
    const p = gl.createProgram(); gl.attachShader(p, mk(gl.VERTEX_SHADER, vs)); gl.attachShader(p, mk(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
    const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS), u = {}; for (let i = 0; i < n; i++) { const info = gl.getActiveUniform(p, i); u[info.name] = gl.getUniformLocation(p, info.name); }
    const na = gl.getProgramParameter(p, gl.ACTIVE_ATTRIBUTES), a = {}; for (let i = 0; i < na; i++) { const info = gl.getActiveAttrib(p, i); a[info.name] = gl.getAttribLocation(p, info.name); }
    return { p, u, a };
  }

  function invert(m) {
    const a = m, o = new Float64Array(16);
    const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3], a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7], a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11], a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    const b00 = a00 * a11 - a01 * a10, b01 = a00 * a12 - a02 * a10, b02 = a00 * a13 - a03 * a10, b03 = a01 * a12 - a02 * a11, b04 = a01 * a13 - a03 * a11, b05 = a02 * a13 - a03 * a12, b06 = a20 * a31 - a21 * a30, b07 = a20 * a32 - a22 * a30, b08 = a20 * a33 - a23 * a30, b09 = a21 * a32 - a22 * a31, b10 = a21 * a33 - a23 * a31, b11 = a22 * a33 - a23 * a32;
    let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06; if (!det) return null; det = 1 / det;
    o[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det; o[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det; o[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det; o[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    o[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det; o[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det; o[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det; o[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    o[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det; o[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det; o[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det; o[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    o[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det; o[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det; o[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det; o[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return o;
  }
  function mul(a, b) { const o = new Float64Array(16); for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) { let s = 0; for (let k = 0; k < 4; k++) s += a[k * 4 + r] * b[c * 4 + k]; o[c * 4 + r] = s; } return o; }
  function xform(m, x, y, z, w) { return [m[0] * x + m[4] * y + m[8] * z + m[12] * w, m[1] * x + m[5] * y + m[9] * z + m[13] * w, m[2] * x + m[6] * y + m[10] * z + m[14] * w, m[3] * x + m[7] * y + m[11] * z + m[15] * w]; }

  // ------------------------------------------------------------------ the layer
  class City3D {
    constructor(opts) {
      this.id = opts.id || 'beylikduzu-3d';
      this.type = 'custom';
      this.renderingMode = '3d';
      this.opts = opts;
      this.ready = false;
      this.visible = true;
      this.treesOn = true;
      this.mono = 0;
      this.sel = -1;
      this.light = { sun: [0.4, -0.5, 0.75], sunCol: [1, 0.96, 0.9], sky: [0.42, 0.47, 0.55], gnd: [0.25, 0.23, 0.2], fog: [0.75, 0.82, 0.9], night: 0 };
      this.onProgress = opts.onProgress || (() => {});
    }

    async load() {
      this.onProgress('Loading Beylikdüzü buildings…');
      const [bj, tj] = await Promise.all([
        fetch(this.opts.buildingsUrl).then((r) => { if (!r.ok) throw new Error('buildings ' + r.status); return r.json(); }),
        fetch(this.opts.treesUrl).then((r) => (r.ok ? r.json() : null)).catch(() => null),
      ]);
      this.meta = bj;
      this.q = bj.q;
      const [lon0, lat0] = bj.origin;
      this.mx0 = mercX(lon0); this.my0 = mercY(lat0);
      this.s0 = 1 / (CIRC * Math.cos(lat0 * Math.PI / 180));
      this.onProgress(`Building ${bj.h.length.toLocaleString()} buildings in 3D…`);
      await new Promise((r) => setTimeout(r, 30));
      this.buildings = decodeBuildings(bj);
      const zones = (tj && tj.zones) || [];
      const inZone = (x, y) => zones.some((z) => Math.hypot(x - z.x, y - z.y) < z.r);
      const landmarks = new Set((this.opts.landmarkNames || []).flatMap((re) => this.buildings.filter((b) => re.test(b.name)).map((b) => b.i)));
      const t0 = performance.now();
      this.geom = buildGeometry(this.buildings, { q: this.q, inZone, landmarks });
      // spatial index for picking
      this.grid = new Map(); this.cell = 60;
      for (const b of this.buildings) {
        let a = Infinity, c = Infinity, d = -Infinity, e = -Infinity; for (const [x, y] of b.rings[0]) { a = Math.min(a, x); c = Math.min(c, y); d = Math.max(d, x); e = Math.max(e, y); }
        b.bb = [a, c, d, e];
        for (let gx = Math.floor(a / this.cell); gx <= Math.floor(d / this.cell); gx++) for (let gy = Math.floor(c / this.cell); gy <= Math.floor(e / this.cell); gy++) { const k = gx + ':' + gy; if (!this.grid.has(k)) this.grid.set(k, []); this.grid.get(k).push(b.i); }
      }
      if (tj) {
        const t = tj.t, n = t.length / tj.stride, inst = new Float32Array(n * 4); let px = 0, py = 0;
        for (let i = 0; i < n; i++) { const o = i * tj.stride; px += t[o]; py += t[o + 1]; inst[i * 4] = px * tj.q; inst[i * 4 + 1] = py * tj.q; inst[i * 4 + 2] = t[o + 2] / 10; inst[i * 4 + 3] = t[o + 3] * 100 + t[o + 4]; }
        this.trees = { inst, n, note: tj.note };
      }
      this.stats = { buildings: this.buildings.length, estimated: this.buildings.filter((b) => b.est === 1).length, aiFootprints: this.buildings.filter((b) => b.ml).length, vertices: this.geom.count, triangles: this.geom.idx.length / 3, trees: this.trees ? this.trees.n : 0, buildMs: Math.round(performance.now() - t0) };
      this.ready = true;
      if (this.gl) this.upload(this.gl);
      if (this.map) this.map.triggerRepaint();
      this.onProgress(null);
      return this.stats;
    }

    onAdd(map, gl) {
      this.map = map; this.gl = gl;
      this.isGL2 = typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext;
      if (!this.isGL2) { this.extUint = gl.getExtension('OES_element_index_uint'); this.extInst = gl.getExtension('ANGLE_instanced_arrays'); }
      this.prog = compile(gl, BUILDING_VS, BUILDING_FS);
      this.tprog = compile(gl, TREE_VS, TREE_FS);
      if (this.ready) this.upload(gl);
    }

    upload(gl) {
      if (this.uploaded) return;
      this.vbo = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo); gl.bufferData(gl.ARRAY_BUFFER, this.geom.vbuf, gl.STATIC_DRAW);
      this.ibo = gl.createBuffer(); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibo); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.geom.idx, gl.STATIC_DRAW);
      this.nIdx = this.geom.idx.length;
      if (this.trees) {
        const m = treeMesh();
        this.tm = { n: m.idx.length };
        this.tPos = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, this.tPos); gl.bufferData(gl.ARRAY_BUFFER, m.pos, gl.STATIC_DRAW);
        this.tNrm = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, this.tNrm); gl.bufferData(gl.ARRAY_BUFFER, m.nrm, gl.STATIC_DRAW);
        this.tPart = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, this.tPart); gl.bufferData(gl.ARRAY_BUFFER, m.part, gl.STATIC_DRAW);
        this.tIdx = gl.createBuffer(); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.tIdx); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, m.idx, gl.STATIC_DRAW);
        this.tInst = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, this.tInst); gl.bufferData(gl.ARRAY_BUFFER, this.trees.inst, gl.STATIC_DRAW);
      }
      this.geom.vbuf = null; // free CPU copy
      this.uploaded = true;
    }

    matrices(args) {
      const main = args.defaultProjectionData.mainMatrix;
      const c = this.map.getCenter();
      const sz = maplibregl.MercatorCoordinate.fromLngLat(c, 1).z; // mercator units per metre at the centre (matches terrain)
      const local = new Float64Array([this.s0, 0, 0, 0, 0, -this.s0, 0, 0, 0, 0, sz, 0, this.mx0, this.my0, 0, 1]);
      const M = mul(main, local);
      this.M = M; this.sz = sz;
      return M;
    }

    cameraLocal() {
      // the eye is where clip-space w vanishes: inverse(M) · (0, 0, 1, 0)
      const inv = this.M && invert(this.M);
      if (!inv) return [0, 0, 1000];
      const w = inv[11];
      if (Math.abs(w) < 1e-12) return [0, 0, 1000];
      return [inv[8] / w, inv[9] / w, inv[10] / w];
    }

    render(gl, args) {
      if (!this.ready || !this.uploaded || !this.visible) return;
      const z = this.map.getZoom(); if (z < 12) return;
      const M = this.matrices(args);
      const M32 = new Float32Array(M);
      const terrain = this.map.getTerrain && this.map.getTerrain();
      const exag = terrain ? (terrain.exaggeration ?? 1) : 0;
      const cam = this.cameraLocal();
      const canvas = this.map.getCanvas();
      const pxk = 2 * Math.tan(args.fov / 2) / Math.max(1, canvas.height);
      const L = this.light;
      const fogStart = 2500 + 900 * Math.max(0, 16 - z), fogEnd = fogStart * 3.2;
      const setCommon = (pr) => {
        const u = pr.u;
        gl.uniformMatrix4fv(u.u_matrix, false, M32);
        gl.uniform1f(u.u_exag, exag);
        if (u.u_sun) gl.uniform3fv(u.u_sun, L.sun);
        gl.uniform3fv(u.u_sunCol, L.sunCol); gl.uniform3fv(u.u_skyCol, L.sky); gl.uniform3fv(u.u_gndCol, L.gnd);
        gl.uniform3fv(u.u_fogCol, L.fog); gl.uniform2f(u.u_fog, fogStart, fogEnd);
        if (u.u_night) gl.uniform1f(u.u_night, L.night);
        gl.uniform3fv(u.u_cam, cam);
        if (u.u_pxk) gl.uniform1f(u.u_pxk, pxk);
        gl.uniform1f(u.u_mono, this.mono);
      };
      gl.disable(gl.CULL_FACE);
      // ---- buildings
      const P = this.prog; gl.useProgram(P.p); setCommon(P);
      gl.uniform1f(P.u.u_q, this.q); gl.uniform1f(P.u.u_sel, this.sel);
      let vao = null;
      if (this.isGL2) { if (!this.vao) this.vao = gl.createVertexArray(); gl.bindVertexArray(this.vao); }
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
      const A = P.a, S = 28;
      const attr = (loc, size, type, norm, off) => { if (loc < 0 || loc === undefined) return; gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, size, type, norm, S, off); };
      attr(A.a_pos, 2, gl.SHORT, false, 0); attr(A.a_hb, 2, gl.SHORT, false, 4); attr(A.a_wall, 2, gl.UNSIGNED_SHORT, false, 8);
      attr(A.a_nrm, 2, gl.BYTE, true, 12); attr(A.a_meta, 2, gl.UNSIGNED_BYTE, false, 14); attr(A.a_col, 4, gl.UNSIGNED_BYTE, true, 16);
      attr(A.a_info, 4, gl.UNSIGNED_BYTE, false, 20); attr(A.a_bid, 1, gl.UNSIGNED_SHORT, false, 24);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibo);
      gl.drawElements(gl.TRIANGLES, this.nIdx, gl.UNSIGNED_INT, 0);
      if (!this.isGL2) for (const k in A) if (A[k] >= 0) gl.disableVertexAttribArray(A[k]);
      // ---- trees
      if (this.trees && this.treesOn && z >= 13.5) {
        const T = this.tprog; gl.useProgram(T.p); setCommon(T);
        if (this.isGL2) { if (!this.tvao) this.tvao = gl.createVertexArray(); gl.bindVertexArray(this.tvao); }
        const ta = T.a;
        const bind = (buf, loc, size) => { if (loc < 0) return; gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 0, 0); };
        bind(this.tPos, ta.a_vpos, 3); bind(this.tNrm, ta.a_vnrm, 3); bind(this.tPart, ta.a_part, 1); bind(this.tInst, ta.a_inst, 4);
        const div = (loc, d) => { if (loc < 0) return; if (this.isGL2) gl.vertexAttribDivisor(loc, d); else this.extInst.vertexAttribDivisorANGLE(loc, d); };
        div(ta.a_inst, 1);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.tIdx);
        if (this.isGL2) gl.drawElementsInstanced(gl.TRIANGLES, this.tm.n, gl.UNSIGNED_SHORT, 0, this.trees.n);
        else if (this.extInst) this.extInst.drawElementsInstancedANGLE(gl.TRIANGLES, this.tm.n, gl.UNSIGNED_SHORT, 0, this.trees.n);
        div(ta.a_inst, 0);
        if (!this.isGL2) for (const k in ta) if (ta[k] >= 0) gl.disableVertexAttribArray(ta[k]);
      }
      if (this.isGL2) gl.bindVertexArray(null);
    }

    // ---- picking: march the camera ray through the building grid
    pick(point) {
      if (!this.ready || !this.M) return null;
      const inv = invert(this.M); if (!inv) return null;
      const c = this.map.getCanvas(); const w = c.clientWidth, h = c.clientHeight;
      const nx = (point.x / w) * 2 - 1, ny = 1 - (point.y / h) * 2;
      const a = xform(inv, nx, ny, -1, 1), b = xform(inv, nx, ny, 1, 1);
      const p0 = [a[0] / a[3], a[1] / a[3], a[2] / a[3]], p1 = [b[0] / b[3], b[1] / b[3], b[2] / b[3]];
      const dir = [p1[0] - p0[0], p1[1] - p0[1], p1[2] - p0[2]]; const len = Math.hypot(...dir); dir[0] /= len; dir[1] /= len; dir[2] /= len;
      const start = p0;
      const terrain = this.map.getTerrain && this.map.getTerrain();
      const exag = terrain ? (terrain.exaggeration ?? 1) : 0;
      // ground hit from MapLibre bounds the search
      let maxT = 9000;
      try { const ll = this.map.unproject(point); const gx = (mercX(ll.lng) - this.mx0) / this.s0, gy = -(mercY(ll.lat) - this.my0) / this.s0; maxT = Math.min(maxT, Math.hypot(gx - start[0], gy - start[1]) / Math.max(1e-6, Math.hypot(dir[0], dir[1])) + 30); } catch (e) { /* ignore */ }
      let lastKey = '';
      let cand = [];
      for (let t = 0; t < maxT; t += 1.0) {
        const x = start[0] + dir[0] * t, y = start[1] + dir[1] * t, zz = start[2] + dir[2] * t;
        const key = Math.floor(x / this.cell) + ':' + Math.floor(y / this.cell);
        if (key !== lastKey) { cand = this.grid.get(key) || []; lastKey = key; }
        for (const id of cand) {
          const bd = this.buildings[id];
          if (x < bd.bb[0] || x > bd.bb[2] || y < bd.bb[1] || y > bd.bb[3]) continue;
          const zb = bd.e * exag + (bd.mh > 0 ? bd.mh : -3), zt = bd.e * exag + bd.h + (bd.kind === KIND.MOSQUE ? 20 : 3);
          if (zz < zb || zz > zt) continue;
          if (pip(x, y, bd.rings)) return bd;
        }
      }
      return null;
    }

    describe(b) {
      const area = Math.abs(ringArea(b.rings[0])) - b.rings.slice(1).reduce((s, r) => s + Math.abs(ringArea(r)), 0);
      const c = centroid(b.rings[0]);
      const lng = ((this.mx0 + c[0] * this.s0) * 360) - 180;
      const my = this.my0 - c[1] * this.s0; const lat = (360 / Math.PI) * Math.atan(Math.exp((180 - my * 360) * Math.PI / 180)) - 90;
      return { id: b.i, name: b.name, housenumber: b.hn, type: KIND_NAME[b.kind], floors: b.floors, height: b.h, est: b.est, estimated: b.est === 1, footprint: b.ml ? 'Microsoft ML Buildings (via Overture Maps)' : 'OpenStreetMap', ground: b.e, area: Math.round(area), lngLat: [lng, lat] };
    }

    setLight(l) { Object.assign(this.light, l); if (this.map) this.map.triggerRepaint(); }
    setSelected(id) { this.sel = id == null ? -1 : id; if (this.map) this.map.triggerRepaint(); }
    setVisible(v) { this.visible = v; if (this.map) this.map.triggerRepaint(); }
    setTrees(v) { this.treesOn = v; if (this.map) this.map.triggerRepaint(); }
    setMono(v) { this.mono = v ? 1 : 0; if (this.map) this.map.triggerRepaint(); }

    onRemove(map, gl) {
      for (const b of [this.vbo, this.ibo, this.tPos, this.tNrm, this.tPart, this.tIdx, this.tInst]) if (b) gl.deleteBuffer(b);
      if (this.vao) gl.deleteVertexArray(this.vao); if (this.tvao) gl.deleteVertexArray(this.tvao);
      this.uploaded = false;
    }
  }

  window.City3D = City3D;
})();
