import { proceduralMaterial } from '../core/materials.js';
import { atmoUniforms } from './atmosphere.js';
import { lightUniforms } from '../core/lighting.js';

// The facade material. Every building part is one instance of a box (or a cylinder, for
// round towers) and this shader draws everything on it from the instance's size and a few
// numbers: floors, recessed windows with their frames and reveals, the wall's material,
// shop fronts, lobbies and front doors at street level, the roof, and the lights at night.
// Nothing is a texture, so nothing stretches and nothing blurs up close.

export const STYLE = {
  CURTAIN: 0, PUNCHED: 1, RIBBON: 2, BRICK: 3, STUCCO: 4, PANEL: 5, BLANK: 6,
  DECO: 7, GARAGE: 8, METAL: 9, MOTEL: 10, CONDO: 11, LOUVRE: 12,
};
export const GROUND = { PLINTH: 0, SHOPS: 1, LOBBY: 2 };
export const ROOF = { MEMBRANE: 0, HELIPAD: 1, TERRACE: 2, SKYLIGHTS: 3, GRAVEL: 4 };
export const LIGHT = { NONE: 0, BASE: 1, CROWN: 2, BOTH: 3 };
// Which faces have a front door: one bit per face.
export const DOOR = { px: 1, nx: 2, pz: 4, nz: 8 };

// Small whole-number options travel together in one float.
export const facadeCode = ({ ground = 0, round = false, roof = 0, light = 0, doors = 0 }) => ground + (round ? 4 : 0) + roof * 8 + light * 64 + doors * 256;

// Per-instance values travel as flat varyings: interpolating a constant still
// adds per-pixel rounding error, and the hashes below amplify it into speckle.
const FACADE_GLSL = /* glsl */`
varying vec3 vFacLocal;
flat varying vec4 vFacBox;    // size in metres, world height of the top
flat varying vec4 vFacStyle;  // style, storey height, bay width, seed
flat varying vec4 vFacGlass;  // glass tint, packed options
flat varying vec4 vFacAccent; // accent colour, variant 0..1
uniform float nightFactor;
uniform float worldTime;
uniform float mirrorPass;
uniform vec3 facSun;
float fGlass; float fRough; float fMetal; vec3 fEmit; vec3 fTilt;
#define FAC_IS(k) (1.0 - step(0.5, abs(style - k)))
// Edges are filtered with a straight ramp just over a pixel wide: the facade draws dozens of
// them per pixel, and this is both cheaper and crisper than the smoothstep the ground uses.
float fa_step(float edge, float x, float w) {
  return clamp((x - edge) / max(w * 1.2, 1e-5) + 0.5, 0.0, 1.0);
}
float fa_band(float x, float lo, float hi, float w) {
  float k = 1.0 / max(w * 1.2, 1e-5);
  return clamp((x - lo) * k + 0.5, 0.0, 1.0) - clamp((x - hi) * k + 0.5, 0.0, 1.0);
}

#ifndef FACADE_LOW
// Interior mapping: every window looks into its own room. The view ray is followed from
// the glass to whichever of the room's surfaces it meets first (back wall, side walls,
// floor or ceiling), so the rooms shift in parallax as you drive past, with no geometry.
//   cell: position inside the window's bay in metres; size: bay width and storey height
//   seed: per-room random; office: 0 homes, 1 open-plan floors
vec3 paRoom(vec2 cell, vec2 size, vec3 V, vec3 T, vec3 N, float seed, float office, out float ceiling) {
  vec3 r = vec3(dot(V, T), V.y, max(-dot(V, N), 0.03));
  float depth = mix(4.2, 9.0, office);
  float tx = abs(r.x) > 1e-4 ? (r.x > 0.0 ? size.x - cell.x : -cell.x) / r.x : 1e5;
  float ty = abs(r.y) > 1e-4 ? (r.y > 0.0 ? size.y - cell.y : -cell.y) / r.y : 1e5;
  float tz = depth / r.z;
  float t = min(tx, min(ty, tz));
  vec3 hit = vec3(cell, 0.0) + r * t;
  vec3 paintCol = mix(mix(vec3(0.78, 0.72, 0.6), vec3(0.6, 0.66, 0.7), step(0.4, seed)), vec3(0.72, 0.58, 0.5), step(0.75, seed));
  paintCol = mix(paintCol, vec3(0.74, 0.75, 0.76), office);
  vec3 col;
  ceiling = 0.0;
  if (t == tz) {
    // Back wall, with a doorway, a shelf or a picture on it.
    vec2 w = hit.xy / size;
    col = paintCol * (0.8 + 0.2 * w.y);
    float thing = step(0.3, seed) * step(abs(w.x - 0.3 - seed * 0.4), 0.14) * step(w.y, 0.72);
    col = mix(col, paintCol * mix(0.35, 0.6, fract(seed * 7.0)), thing * (1.0 - office));
    col = mix(col, vec3(0.2, 0.22, 0.25), office * step(abs(fract(w.x * 2.0 + seed) - 0.5), 0.08));
  } else if (t == ty) {
    if (r.y > 0.0) {
      // Ceiling with its light fitting (a strip in offices, a lamp at home).
      vec2 c = vec2(hit.x / size.x, hit.z / depth);
      float fitting = mix(1.0 - smoothstep(0.1, 0.22, length((c - vec2(0.5, 0.45)) * vec2(1.0, 1.6))), step(abs(fract(c.y * 3.0) - 0.5), 0.12), office);
      col = vec3(0.86, 0.85, 0.82);
      ceiling = fitting;
    } else col = mix(vec3(0.3, 0.2, 0.13), vec3(0.22, 0.24, 0.27), office) * (0.8 + 0.2 * step(0.5, fract(hit.x * 1.5)));
  } else col = paintCol * 0.82;
  // Light falls off toward the back of the room.
  return col * (1.0 - 0.45 * hit.z / depth);
}

// The same trick at street level. A shop has a sales floor behind the glass, with shelves
// of goods on the walls, a tiled floor and strip lights overhead; a lobby has a stone
// floor, panelled walls, a reception desk and downlights. glow is how brightly the
// surface hit is lit when the lights are on.
vec3 paShop(vec2 cell, vec2 size, vec3 V, vec3 T, vec3 N, float seed, float lobby, out float glow) {
  vec3 r = vec3(dot(V, T), V.y, max(-dot(V, N), 0.03));
  float depth = mix(6.5, 10.0, lobby);
  float tx = abs(r.x) > 1e-4 ? (r.x > 0.0 ? size.x - cell.x : -cell.x) / r.x : 1e5;
  float ty = abs(r.y) > 1e-4 ? (r.y > 0.0 ? size.y - cell.y : -cell.y) / r.y : 1e5;
  float tz = depth / r.z;
  float t = min(tx, min(ty, tz));
  vec3 hit = vec3(cell, 0.0) + r * t;
  vec3 col;
  glow = 0.4;
  if (t == ty) {
    if (r.y > 0.0) {
      float strip = step(abs(fract(hit.z / 2.2) - 0.5), 0.1);
      float spot = 1.0 - smoothstep(0.1, 0.24, length(fract(hit.xz / 1.9) - 0.5));
      float lamp = mix(strip, spot, lobby);
      col = mix(vec3(0.62), vec3(1.0), lamp);
      glow = mix(0.5, 2.2, lamp);
    } else {
      float tileW = mix(0.6, 1.2, lobby);
      vec2 tile = floor(hit.xz / tileW);
      col = mix(vec3(0.44, 0.42, 0.38), vec3(0.6, 0.57, 0.52), lobby) * (0.84 + 0.16 * mod(tile.x + tile.y, 2.0));
    }
  } else if (lobby > 0.5) {
    // Panelled walls in timber or stone, and a lit reception desk against the back wall.
    vec2 w = t == tz ? hit.xy : hit.zy;
    vec3 panelCol = mix(vec3(0.4, 0.27, 0.17), vec3(0.6, 0.58, 0.54), step(0.5, fract(seed * 0.37)));
    col = panelCol * (0.86 + 0.14 * step(0.06, fract(w.x / 1.3)));
    // (One bay in three has the desk; the rest are seating and bare wall.)
    float desk = t == tz ? step(abs(w.x - size.x * 0.5), 1.7) * step(w.y, 1.1) * step(0.66, fract(seed * 0.618)) : 0.0;
    col = mix(col, vec3(0.8, 0.74, 0.62), desk);
    glow = mix(0.45, 1.1, desk);
    if (t == tx) col *= 0.8;
  } else {
    // Shelving: boards with rows of goods in assorted packaging, plain wall above.
    vec2 w = t == tz ? hit.xy : hit.zy;
    vec2 item = floor(w / vec2(0.24, 0.42)), f = fract(w / vec2(0.24, 0.42));
    vec3 goods = 0.3 + 0.5 * vec3(pa_hash12(item + seed), pa_hash12(item + seed + 7.7), pa_hash12(item + seed + 13.3));
    goods = mix(vec3(dot(goods, vec3(0.3333))), goods, 0.6); // packaging is mostly muted, with the odd bright one
    float onShelf = step(0.17, f.y) * step(0.1, f.x) * step(f.x, 0.9) * step(0.22, pa_hash12(item * 1.7 + seed));
    col = mix(mix(vec3(0.24, 0.21, 0.18), goods, onShelf), vec3(0.72, 0.68, 0.62), step(2.5, w.y));
    if (t == tx) col *= 0.78;
  }
  return col * (1.0 - 0.35 * hit.z / depth);
}
#endif

void paFacade(inout vec3 albedo) {
  fGlass = 0.0; fRough = 0.86; fMetal = 0.0; fEmit = vec3(0.0); fTilt = vec3(0.0);
  float style = vFacStyle.x, floorH = vFacStyle.y, cellW = vFacStyle.z, seed = vFacStyle.w;
  vec3 size = vFacBox.xyz;
  float top = vFacBox.w;
  float code = vFacGlass.w + 0.5;
  float ground = floor(mod(code, 4.0));
  bool isRound = mod(floor(code / 4.0), 2.0) > 0.5;
  float roofT = mod(floor(code / 8.0), 8.0);
  float lightT = mod(floor(code / 64.0), 4.0);
  float doorBits = floor(code / 256.0);
  vec3 tint = vFacGlass.rgb;
  vec3 accent = vFacAccent.rgb;
  float variant = vFacAccent.w;
  vec3 wall = albedo;
  vec3 an = abs(vPaNormalW);
  float y = vPaWorld.y;
  // Height above this part's own base, so the storeys of a setback start at the setback.
  float yb = y - (top - size.y) + 0.16;
  float onGround = step(top - size.y, 1.0);

  // The coordinate along the wall, the wall's width, and its tangent and normal.
  float u, faceW, faceId;
  vec3 Tw, Nw;
  if (isRound) {
    vec2 rd = normalize(vFacLocal.xz + vec2(1e-5, 0.0));
    float radius = size.x * 0.5;
    Nw = vec3(rd.x, 0.0, rd.y); Tw = vec3(-rd.y, 0.0, rd.x);
    u = atan(rd.y, rd.x) * radius; faceW = 6.2831853 * radius; faceId = 5.0;
  } else if (an.x > 0.5) {
    u = vFacLocal.z; faceW = size.z; faceId = vPaNormalW.x > 0.0 ? 1.0 : 2.0;
    Tw = vec3(0.0, 0.0, 1.0); Nw = vec3(sign(vPaNormalW.x), 0.0, 0.0);
  } else {
    u = vFacLocal.x; faceW = size.x; faceId = vPaNormalW.z > 0.0 ? 3.0 : 4.0;
    Tw = vec3(1.0, 0.0, 0.0); Nw = vec3(0.0, 0.0, sign(vPaNormalW.z));
  }
  // Screen-space derivatives are all taken here, before any branch or return:
  // GLSL leaves them undefined in non-uniform control flow, where they can come
  // back as zero and turn the anti-aliasing below into speckled garbage.
  // (Taken from the position, not from u, which jumps where a round wall wraps.)
  float du = max(length(dFdx(vFacLocal.xz)) + length(dFdy(vFacLocal.xz)), 1e-4);
  float dy = max(fwidth(y), 1e-4);
  float groundH = ground > 0.5 ? 4.8 : 0.9;
  float nCols = isRound ? max(floor(faceW / cellW), 3.0) : max(floor((faceW - 1.0) / cellW), 1.0);
  if (isRound) cellW = faceW / nCols;
  float wu = max(du / cellW, 0.0015), wv = max(dy / floorH, 0.0015);
  float hasDoor = mod(floor(doorBits / exp2(faceId - 1.0)), 2.0);
  #ifdef FACADE_LOW
    float grime = 0.5; // distant chunks skip the noise
    float fine = 0.0;
  #else
    float grime = pa_fbm3(vPaWorld.xz * 0.15 + vec2(0.0, y * 0.4));
    float fine = 1.0 - smoothstep(0.04, 0.16, max(du, dy)); // small detail fades before it can shimmer
  #endif

  if (an.y > 0.5) {
    // --- Roof -----------------------------------------------------------------
    float edge = isRound ? size.x * 0.5 - length(vFacLocal.xz) : min(size.x * 0.5 - abs(vFacLocal.x), size.z * 0.5 - abs(vFacLocal.z));
    vec2 rl = vFacLocal.xz;
    vec3 roof = vec3(0.36, 0.36, 0.35);
    fRough = 0.9;
    if (roofT > 3.5) {
      // Gravel ballast.
      roof = vec3(0.47, 0.44, 0.39);
      #ifndef FACADE_LOW
        roof *= 0.82 + 0.36 * pa_noise(vPaWorld.xz * 9.0) * fine + 0.18 * (1.0 - fine);
      #endif
    } else if (roofT > 2.5) {
      // Standing-seam metal with rows of skylights.
      bool longX = size.x > size.z;
      float along = longX ? rl.x : rl.y, across = longX ? rl.y : rl.x, halfW = (longX ? size.z : size.x) * 0.5;
      float rib = 1.0 - pa_band(fract(across / 0.6), 0.08, 0.92, du / 0.6);
      roof = vec3(0.5, 0.52, 0.53) * (1.0 - rib * 0.22 * fine);
      float sky = pa_band(fract(along / 9.0), 0.15, 0.85, du / 9.0) * pa_band(abs(across), halfW * 0.34, halfW * 0.34 + 1.7, du) * step(3.0, edge);
      roof = mix(roof, tint * 0.5, sky);
      fEmit = vec3(1.0, 0.9, 0.7) * sky * nightFactor * 0.5 * step(0.4, pa_hash12(vec2(seed, 1.0)));
      fRough = mix(0.5, 0.1, sky); fMetal = mix(0.6, 0.3, sky); fGlass = sky;
    } else if (roofT > 1.5) {
      // Terrace: pavers, with planting round the edge.
      vec2 ft = fract(rl / 0.8);
      float joint = 1.0 - pa_band(ft.x, 0.03, 0.97, du / 0.8) * pa_band(ft.y, 0.03, 0.97, du / 0.8);
      roof = vec3(0.56, 0.53, 0.48) * (1.0 - joint * 0.3 * fine);
      float planted = pa_band(edge, 1.0, 3.4, du) * step(0.42, pa_noise(vPaWorld.xz * 0.13 + seed));
      roof = mix(roof, vec3(0.16, 0.3, 0.12) * (0.6 + 0.8 * pa_noise(vPaWorld.xz * 1.9)), planted);
    } else {
      // Membrane, laid in strips.
      #ifndef FACADE_LOW
        roof *= 0.9 + pa_noise(vPaWorld.xz * 4.0) * 0.2;
      #endif
      float seam = 1.0 - pa_band(fract(rl.x / 3.0), 0.015, 0.985, du / 3.0);
      roof *= 1.0 - seam * 0.3 * fine;
      if (roofT > 0.5 && min(size.x, size.z) > 20.0) {
        // Helipad.
        float hr = length(rl);
        vec2 hp = abs(rl);
        float ring = pa_band(hr, 6.6, 7.2, du);
        float bars = pa_band(hp.x, 1.3, 1.9, du) * (1.0 - pa_aastep(2.6, hp.y, du));
        float cross = (1.0 - pa_aastep(1.9, hp.x, du)) * (1.0 - pa_aastep(0.3, hp.y, du));
        roof = mix(roof, vec3(0.2, 0.25, 0.24), (1.0 - pa_aastep(7.2, hr, du)) * 0.75);
        roof = mix(roof, vec3(0.86, 0.83, 0.7), clamp(ring + bars + cross, 0.0, 1.0));
      }
    }
    roof *= 0.8 + grime * 0.4;
    // The parapet throws a shadow on the roof inside it; its coping is the wall's stone.
    roof *= mix(0.6, 1.0, smoothstep(0.5, 1.8, edge));
    albedo = mix(wall * 0.9, roof, pa_aastep(0.5, edge, du));
    return;
  }

  // Base dirt and vertical rain streaks.
  #ifndef FACADE_LOW
    float streak = pa_noise(vec2(u * 1.3 + faceId * 31.0, y * 0.05)) * pa_noise(vec2(u * 0.4, y * 0.3 + seed));
    wall *= 1.0 - smoothstep(0.35, 0.8, streak) * 0.18;
  #endif
  wall *= 0.88 + grime * 0.24;
  wall *= mix(0.72, 1.0, smoothstep(0.0, 2.5, y));

  if (FAC_IS(6.0) > 0.5) { albedo = wall; return; }

  if (FAC_IS(12.0) > 0.5) {
    // Plant screen: louvre blades, each shading the one below.
    float blade = fract(yb / 0.24);
    float bladeFade = 1.0 - smoothstep(0.25, 0.7, dy / 0.24);
    albedo = wall * mix(0.74, 0.5 + 0.55 * smoothstep(0.0, 0.85, blade), bladeFade);
    fRough = 0.5; fMetal = 0.55;
    return;
  }

  float isBrick = FAC_IS(3.0), isDeco = FAC_IS(7.0);
  if (isBrick > 0.5) {
    // Brick: running bond, faded out with distance.
    vec2 b = vec2(u / 0.24, yb / 0.085);
    b.x += step(1.0, mod(floor(b.y), 2.0)) * 0.5;
    float fw = max(du / 0.24, dy / 0.085);
    vec2 f = fract(b);
    float mortar = (1.0 - pa_band(f.x, 0.06, 1.0, fw)) + (1.0 - pa_band(f.y, 0.12, 1.0, fw));
    mortar = clamp(mortar, 0.0, 1.0) * (1.0 - smoothstep(0.25, 0.6, fw));
    wall *= 0.88 + pa_hash12(floor(b)) * 0.22 * (1.0 - smoothstep(0.3, 0.8, fw));
    wall = mix(wall, vec3(0.52, 0.5, 0.46), mortar * 0.55);
  }
  #ifndef FACADE_LOW
    if (isDeco > 0.5) {
      // Dressed stone: coursed blocks with fine joints.
      vec2 b = vec2(u / 1.15, yb / 0.52);
      b.x += step(1.0, mod(floor(b.y), 2.0)) * 0.5;
      vec2 f = fract(b);
      float joint = 1.0 - pa_band(f.x, 0.012, 0.988, du / 1.15) * pa_band(f.y, 0.025, 0.975, dy / 0.52);
      wall *= 1.0 + (pa_hash12(floor(b) + seed) - 0.5) * 0.1 * fine;
      wall *= 1.0 - joint * 0.3 * fine;
    }
    if (style > 3.5 && style < 4.5 || style > 9.5 && style < 10.5) wall *= 0.95 + 0.1 * pa_noise(vec2(u, y) * 7.0) * fine + 0.05 * (1.0 - fine);
  #endif

  // --- Street level: shop fronts or a lobby -----------------------------------
  if (ground > 0.5 && yb < 4.8) {
    bool lobby = ground > 1.5;
    float nBay = max(floor(faceW / (lobby ? 4.6 : 6.0)), 1.0);
    float bayW = faceW / nBay;
    float su = (u + faceW * 0.5) / bayW;
    float sid = floor(su), sf = fract(su);
    float m = sf * bayW; // metres from the bay's left edge
    float h = pa_hash12(vec2(sid + faceId * 17.0, seed * 3.1));
    float hB = pa_hash12(vec2(sid * 2.3 + faceId * 5.0, seed * 1.7 + 4.0));
    float pierW = lobby ? 0.42 : 0.3;
    float pier = 1.0 - pa_band(m, pierW, bayW - pierW, du);
    float cornice = pa_aastep(4.5, yb, dy);
    vec3 pierCol = wall * 0.94;
    float glass, lit, glowAmt;
    vec3 warm;
    if (!lobby) {
      // Each bay is one shop: tiled stall riser, display window in panes, a glazed door
      // with a light over it, then the fascia that carries the sign.
      float span = bayW - 2.0 * pierW;
      float nPane = max(floor(span / 1.5), 2.0);
      float paneW = span / nPane;
      float pf = (m - pierW) / paneW;
      float mull = 1.0 - pa_band(fract(pf), 0.028, 0.972, du / paneW);
      float doorPane = step(0.5, fract(h * 7.0)) * (nPane - 1.0);
      float isDoor = (1.0 - pier) * (1.0 - step(0.5, abs(floor(pf) - doorPane)));
      float dm = abs(fract(pf) - 0.5) * paneW; // metres from the middle of the pane
      float leaf = 1.0 - pa_aastep(paneW * 0.5 - 0.1, dm, du);
      float riser = 1.0 - pa_aastep(0.55, yb, dy);
      float display = (1.0 - mull) * pa_band(yb, 0.55, 3.5, dy);
      float doorGlass = max(leaf * pa_band(yb, 0.42, 2.2, dy), (1.0 - mull) * pa_band(yb, 2.42, 3.5, dy));
      glass = (1.0 - pier) * mix(display, doorGlass, isDoor);
      vec3 frameCol = mix(vec3(0.07, 0.065, 0.06), vec3(0.8, 0.78, 0.73), step(0.7, h));
      frameCol = mix(frameCol, vec3(0.1, 0.2, 0.15), step(0.86, h));
      vec3 riserCol = mix(mix(vec3(0.1, 0.11, 0.12), vec3(0.3, 0.1, 0.08), step(0.3, hB)), mix(vec3(0.12, 0.25, 0.24), vec3(0.7, 0.66, 0.58), step(0.8, hB)), step(0.55, hB));
      float tile = (1.0 - pa_band(fract(m / 0.15), 0.07, 0.93, du / 0.15)) + (1.0 - pa_band(fract(yb / 0.15), 0.07, 0.93, dy / 0.15));
      riserCol *= 1.0 - clamp(tile, 0.0, 1.0) * 0.35 * fine;
      float fascia = pa_band(yb, 3.7, 4.5, dy) * (1.0 - pier);
      // Palette picks use step/mix rather than nested ternaries, which some
      // shader compilers evaluate inconsistently across a pixel quad.
      vec3 fasciaCol = mix(vec3(0.08, 0.09, 0.1), vec3(0.5, 0.12, 0.08), step(0.33, h));
      fasciaCol = mix(fasciaCol, vec3(0.12, 0.25, 0.3), step(0.55, h));
      fasciaCol = mix(fasciaCol, vec3(0.75, 0.68, 0.55), step(0.75, h));
      albedo = mix(frameCol, riserCol, riser * (1.0 - isDoor));
      albedo = mix(albedo, frameCol * 1.5 + 0.03, isDoor * leaf * (1.0 - pa_aastep(0.42, yb, dy))); // kick plate
      albedo = mix(albedo, wall * 0.86, pa_aastep(3.56, yb, dy));
      albedo = mix(albedo, fasciaCol, fascia);
      albedo = mix(albedo, pierCol * (0.8 + 0.2 * pa_aastep(0.5, yb, dy)), pier);
      float pull = isDoor * pa_band(dm, paneW * 0.5 - 0.24, paneW * 0.5 - 0.19, du) * pa_band(yb, 0.95, 1.45, dy);
      albedo = mix(albedo, vec3(0.7, 0.7, 0.68), pull * (1.0 - pier));
      glass *= 1.0 - pull;
      lit = step(0.15, pa_hash12(vec2(sid * 3.7, faceId + seed)));
      warm = mix(vec3(1.0, 0.75, 0.45), vec3(0.95, 0.95, 0.85), step(0.6, h));
      glowAmt = 0.25 + 0.75 * pa_hash12(vec2(sid * 1.3 + 7.0, faceId * 3.0 + seed));
      fEmit = fasciaCol * fascia * step(0.5, h) * nightFactor * 0.9;
      fRough = 0.75;
    } else {
      // Lobby: tall glazing between stone piers, with the doors in the middle bay of a
      // street front and a band of light under the stone above.
      float entry = hasDoor * (1.0 - step(0.5, abs(sid - floor(nBay * 0.5))));
      float em = abs(m - bayW * 0.5);
      float inDoor = entry * (1.0 - pa_aastep(2.62, yb, dy));
      float stiles = inDoor * (pa_band(em, 0.9, 0.98, du) + (1.0 - pa_aastep(0.03, em, du)));
      float bars = pa_band(yb, 2.62, 2.7, dy) + (1.0 - pa_aastep(0.035, em, du)) * (1.0 - entry) + stiles;
      float pull = inDoor * pa_band(em, 0.1, 0.14, du) * pa_band(yb, 0.85, 1.5, dy);
      glass = (1.0 - pier) * pa_band(yb, 0.14, 4.1, dy) * (1.0 - clamp(bars, 0.0, 1.0)) * (1.0 - pull);
      float steel = step(0.6, fract(seed * 5.3));
      vec3 frameCol = mix(vec3(0.075, 0.07, 0.065), vec3(0.6, 0.61, 0.62), steel);
      float dark = step(0.55, fract(seed * 3.7));
      pierCol = mix(wall * 0.96, vec3(0.13, 0.13, 0.14) * (0.8 + grime * 0.4), dark);
      float header = pa_aastep(4.1, yb, dy);
      albedo = frameCol;
      albedo = mix(albedo, mix(wall * 0.9, accent, 0.55), header);
      albedo = mix(albedo, pierCol, pier);
      albedo = mix(albedo, vec3(0.74, 0.74, 0.72), pull);
      // A line of light along the head of the glazing.
      float led = pa_band(yb, 4.1, 4.18, dy) * (1.0 - pier);
      fEmit = vec3(1.0, 0.86, 0.66) * led * nightFactor * 2.2;
      lit = 1.0;
      warm = mix(vec3(1.0, 0.8, 0.55), vec3(0.95, 0.93, 0.86), step(0.5, fract(seed * 0.37)));
      glowAmt = 0.36;
      fRough = mix(0.5, mix(0.55, 0.28, dark), pier);
      fMetal = (1.0 - pier) * (1.0 - header) * mix(0.3, 0.8, steel);
    }
    // Moulding over the ground floor, with the shadow it casts.
    albedo = mix(albedo, wall * 1.06, cornice);
    albedo *= 1.0 - pa_band(yb, 4.42, 4.52, dy) * 0.4;
    albedo = mix(albedo, vec3(0.03, 0.035, 0.04), glass);
    fGlass = glass;
    fRough = mix(fRough, 0.04, glass);
    fMetal = mix(fMetal, 0.2, glass);
    fEmit += warm * glass * lit * glowAmt * (0.45 + 0.55 * smoothstep(0.45, 3.5, yb)) * mix(0.05, 0.62, nightFactor);
    #ifndef FACADE_LOW
      // Up close the glass shows the room behind it.
      vec3 toShop = vPaWorld - cameraPosition;
      // (Not in the mirror: seen from under the street a shop is all ceiling lights.)
      float nearShop = (1.0 - smoothstep(55.0, 110.0, length(toShop))) * glass * (1.0 - mirrorPass);
      if (nearShop > 0.01) {
        float shopLight;
        vec3 shopRoom = paShop(vec2(m, yb), vec2(bayW, lobby ? 4.2 : 3.7), normalize(toShop), Tw, Nw, sid * 3.7 + seed, lobby ? 1.0 : 0.0, shopLight);
        albedo = mix(albedo, shopRoom * 0.26, nearShop * 0.6 * (1.0 - nightFactor * 0.7));
        fEmit = mix(fEmit, warm * shopRoom * shopLight * lit * (0.5 + 0.5 * glowAmt) * mix(0.04, lobby ? 0.5 : 0.85, nightFactor), nearShop);
      }
    #endif
    fTilt = vec3(h - 0.5, 0.0, 0.0) * 0.02 * glass;
    return;
  }

  if (FAC_IS(8.0) > 0.5) {
    // Parking garage: a concrete spandrel per deck, the open deck above it
    // dark inside, with parked cars and strip lights under each slab.
    float cv8 = (yb - 0.3) / floorH;
    float fv8 = fract(cv8), row8 = floor(cv8);
    float wv8 = max(dy / floorH, 0.0015);
    float pu = (u + faceW * 0.5) / 2.7;
    float wb = max(du / 2.7, 0.0015);
    float top8 = 1.0 - pa_aastep(top - 1.1, y, dy);
    float spand = 1.0 - pa_aastep(0.34, fv8, wv8);
    float column = pa_band(fract(pu / 3.0), 0.0, 0.06, wb / 3.0);
    float open = (1.0 - spand) * (1.0 - column) * top8 * step(0.0, cv8);
    float carId = floor(pu / 2.0);
    float ch = pa_hash12(vec2(carId + faceId * 41.0, row8 + seed));
    float cf = fract(pu / 2.0);
    // Only a parked car's roof and windows show over the wall of its deck.
    float lean = (fv8 - 0.34) * 1.1;
    float cabin = pa_band(cf, 0.24 + lean, 0.76 - lean, wb * 0.5) * pa_band(fv8, 0.34, 0.5, wv8);
    float carGlass = pa_band(cf, 0.28 + lean, 0.72 - lean, wb * 0.5) * pa_band(fv8, 0.345, 0.468, wv8) * (1.0 - pa_band(cf, 0.488, 0.512, wb * 0.5));
    float car = cabin * step(0.35, ch) * open;
    vec3 carCol = mix(mix(vec3(0.62), vec3(0.05), step(0.5, ch)), vec3(0.4, 0.08, 0.06), step(0.82, ch));
    carCol = mix(mix(carCol, vec3(0.16, 0.26, 0.4), step(0.92, ch)), vec3(0.03, 0.04, 0.05), carGlass);
    // Board marks on the concrete, and a painted band along each spandrel.
    float band8 = pa_band(fv8, 0.12, 0.22, wv8) * spand * step(0.5, variant);
    albedo = mix(wall, accent, band8 * 0.85);
    albedo = mix(albedo, vec3(0.025, 0.027, 0.03), open);
    albedo = mix(albedo, carCol, car);
    float strip = pa_band(fv8, 0.9, 0.95, wv8) * pa_band(cf, 0.3, 0.7, wb * 0.5) * open;
    fEmit = vec3(0.85, 0.95, 1.0) * strip * mix(0.35, 2.2, nightFactor) + vec3(0.6, 0.7, 0.8) * open * (1.0 - car) * nightFactor * 0.05;
    fRough = mix(0.9, 0.45, car);
    fMetal = car * 0.45;
    return;
  }

  if (FAC_IS(9.0) > 0.5) {
    // Warehouse: corrugated metal on a block base, clerestory windows and roll-up doors.
    float corrFade = 1.0 - smoothstep(0.08, 0.25, du / 0.2);
    float corr = 0.5 + 0.5 * sin(u * 6.2832 / 0.2);
    albedo = wall * (0.86 + 0.14 * mix(0.5, corr, corrFade));
    float base9 = 1.0 - pa_aastep(1.2, yb, dy);
    albedo = mix(albedo, vec3(0.5, 0.49, 0.46) * (0.85 + grime * 0.3), base9);
    float pu9 = (u + faceW * 0.5) / 3.0;
    float clere = pa_band(y, top - 3.2, top - 1.7, dy) * pa_band(fract(pu9), 0.08, 0.92, du / 3.0);
    float dp = (u + faceW * 0.5) / 6.0;
    float doorId = floor(dp);
    float hasRoll = step(0.45, pa_hash12(vec2(doorId + faceId * 13.0, seed)));
    float door = pa_band(fract(dp), 0.15, 0.85, du / 6.0) * pa_band(yb, 0.0, 4.6, dy) * hasRoll;
    float slatFade = 1.0 - smoothstep(0.05, 0.15, dy / 0.25);
    float slats = mix(0.92, 0.84 + 0.16 * step(0.5, fract(yb / 0.25)), slatFade);
    vec3 doorCol = mix(vec3(0.55, 0.56, 0.55), vec3(0.62, 0.36, 0.18), step(0.75, pa_hash12(vec2(doorId, seed * 2.0))));
    // A painted stripe along the eaves in the company colour.
    albedo = mix(albedo, accent, pa_band(y, top - 1.25, top - 0.55, dy) * 0.9);
    albedo = mix(albedo, doorCol * slats, door);
    albedo = mix(albedo, tint * 0.3, clere);
    fGlass = clere;
    fMetal = mix(mix(mix(0.55, 0.0, base9), 0.3, door), 0.2, clere);
    fRough = mix(mix(mix(0.5, 0.9, base9), 0.6, door), 0.08, clere);
    fEmit = vec3(1.0, 0.85, 0.6) * clere * nightFactor * 0.55 * step(0.5, pa_hash12(vec2(floor(pu9), seed)));
    return;
  }

  // --- Upper floors: the window grid ------------------------------------------
  float cu = u / cellW + nCols * 0.5;
  float cv = (yb - groundH) / floorH;
  float nRows = max(floor((size.y + 0.16 - 1.3 - groundH) / floorH + 0.02), 0.0);
  float colId = floor(cu), rowId = floor(cv);
  float fu = fract(cu), fv = fract(cv);
  float inU = isRound ? 1.0 : pa_band(cu, 0.0, nCols, wu);
  float inGrid = inU * pa_band(cv, 0.0, nRows, wv);
  float isCurtain = 1.0 - step(0.5, style);
  float isPunched = FAC_IS(1.0), isRibbon = FAC_IS(2.0), isStucco = FAC_IS(4.0), isPanel = FAC_IS(5.0);
  float isMotel = FAC_IS(10.0), isCondo = FAC_IS(11.0);

  // The opening in each bay (as fractions of the bay) and how far the glass sits back.
  float u0 = 0.2, u1 = 0.8, v0 = 0.26, v1 = 0.86, inset = 0.3;
  if (style < 0.5) { u0 = 0.03; u1 = 0.97; v0 = 0.24; v1 = 0.985; inset = 0.05; }
  else if (style < 1.5) { u0 = 0.2; u1 = 0.8; v0 = 0.26; v1 = 0.86; inset = 0.3; }
  else if (style < 2.5) { u0 = -0.5; u1 = 1.5; v0 = 0.34; v1 = 0.9; inset = 0.2; }
  else if (style < 3.5) { u0 = 0.24; u1 = 0.76; v0 = 0.24; v1 = 0.84; inset = 0.24; }
  else if (style < 4.5) { u0 = 0.32; u1 = 0.68; v0 = 0.24; v1 = 0.8; inset = 0.32; }
  else if (style < 5.5) { u0 = 0.14; u1 = 0.86; v0 = 0.07; v1 = 0.93; inset = 0.22; }
  else if (style < 7.5) { u0 = 0.3; u1 = 0.7; v0 = 0.1; v1 = 0.92; inset = 0.36; }
  else if (style < 10.5) { u0 = 0.52; u1 = 0.88; v0 = 0.3; v1 = 0.75; inset = 0.18; }
  else { u0 = 0.05; u1 = 0.95; v0 = 0.06; v1 = 0.96; inset = 0.12; }
  vec2 lo = vec2(u0, v0), hi = vec2(u1, v1);
  vec2 cellSz = vec2(cellW, floorH);
  vec2 pcell = vec2(fu, fv);
  vec2 ww = vec2(wu, wv);

  float h1 = pa_hash12(vec2(colId + faceId * 97.0 + seed * 13.0, rowId + seed * 7.0));
  float h2 = pa_hash12(vec2(rowId * 1.7 + seed, colId * 3.1 + faceId));
  float h3 = pa_hash12(vec2(colId * 5.3 + seed, rowId * 2.3));

  // Recess: the glass sits behind the wall face, so the ray is followed that far in. Where
  // it lands on glass you see the window; where it runs into the side of the opening you
  // see the reveal: the jamb on the far side, the head from below, the sill from above.
  vec2 pg = pcell;
  vec3 revealTone = vec3(0.55);
  float shade = 0.0;
  #ifndef FACADE_LOW
    vec3 toPix = vPaWorld - cameraPosition;
    float dist = length(toPix);
    vec3 Vw = toPix / dist;
    float day = 1.0 - nightFactor;
    float depth = inset * (1.0 - smoothstep(120.0, 300.0, dist));
    vec2 shift = clamp(vec2(dot(Vw, Tw), Vw.y) / max(-dot(Vw, Nw), 0.06) * depth, -cellSz * 0.9, cellSz * 0.9);
    pg = pcell + shift / cellSz;
    vec2 room = mix(pcell - lo, hi - pcell, step(0.0, shift)) * cellSz;
    vec2 tExit = room / max(abs(shift), 1e-5);
    float sideHit = step(tExit.x, tExit.y);
    vec3 sunF = vec3(dot(facSun, Tw), facSun.y, dot(facSun, Nw));
    float sunny = smoothstep(0.02, 0.2, sunF.z) * day;
    float jamb = mix(0.62, mix(0.5, 1.12, smoothstep(-0.05, 0.35, -sign(shift.x) * sunF.x)), sunny);
    float headSill = shift.y > 0.0 ? 0.42 : mix(0.8, 1.1, sunny);
    revealTone = vec3(mix(headSill, jamb, sideHit));
    // The head and jambs shade the top and one side of the glass when the sun is on the wall.
    vec2 sp = pg + sunF.xy / max(sunF.z, 0.08) * depth / cellSz;
    shade = sunny * (1.0 - pa_band(sp.x, u0, u1, wu) * pa_band(sp.y, v0, v1, wv));
  #endif

  float open = pa_band(fu, u0, u1, wu) * pa_band(fv, v0, v1, wv) * inGrid;
  float onGlass = pa_band(pg.x, u0, u1, wu) * pa_band(pg.y, v0, v1, wv);
  // Rainscreen cladding leaves about a third of its bays as solid panels.
  float solid = isPanel * step(h3, 0.34);
  open *= 1.0 - solid;
  #ifndef FACADE_LOW
    if (isStucco > 0.5 && fract(seed * 1.7) > 0.5) {
      // Round-headed windows.
      float rw = (u1 - u0) * cellW * 0.5;
      float springY = v1 * floorH - rw;
      vec2 a0 = vec2((fu - 0.5) * cellW, fv * floorH - springY);
      vec2 a1 = vec2((pg.x - 0.5) * cellW, pg.y * floorH - springY);
      float aw = max(du, dy);
      open *= a0.y > 0.0 ? 1.0 - pa_aastep(rw, length(a0), aw) : 1.0;
      onGlass *= a1.y > 0.0 ? 1.0 - pa_aastep(rw, length(a1), aw) : 1.0;
    }
  #endif
  // The front door: in the middle bay, replacing the window above the plinth.
  float doorCol = floor(nCols * 0.5);
  float isDoorFace = hasDoor * (1.0 - step(0.5, ground)) * onGround * (1.0 - isMotel);
  float dmx = (cu - doorCol - 0.5) * cellW;
  float doorCell = isDoorFace * (1.0 - step(0.5, abs(colId - doorCol))) * (1.0 - step(0.5, abs(rowId)));
  open *= 1.0 - doorCell;

  float win = open * onGlass;
  float reveal = open - win;

  // Glazing: the frame round the glass and the bars that divide it, drawn at the depth of
  // the glass so they move behind the opening as you pass.
  vec2 gs = (hi - lo) * cellSz;             // size of the glazing, metres
  vec2 g = (pg - lo) / (hi - lo);           // position across it, 0..1
  vec2 gw = ww / (hi - lo);
  float sashT = mix(0.055, 0.07, isBrick + isStucco);
  float sash = 1.0 - pa_band(g.y, sashT / gs.y, 1.0 - sashT / gs.y, gw.y) * mix(pa_band(g.x, sashT / gs.x, 1.0 - sashT / gs.x, gw.x), 1.0, isRibbon);
  float midBar = (isPunched + isCondo + isBrick * step(0.5, variant)) * (1.0 - pa_band(abs(g.x - 0.5), 0.022 / gs.x, 2.0, gw.x));
  float rail = (isBrick + isStucco + isMotel) * (1.0 - pa_band(abs(g.y - 0.5), 0.028 / gs.y, 2.0, gw.y));
  float bayBar = isRibbon * (1.0 - pa_band(fract(pg.x), 0.016, 0.984, wu));
  float bars = clamp(sash + midBar + rail + bayBar, 0.0, 1.0);
  #ifdef FACADE_LOW
    bars *= 0.5; // too fine to resolve at this distance: only their average tone is kept
  #endif
  float pane = win * (1.0 - bars);

  float painted = max(max(isStucco, isMotel), isBrick * step(0.4, fract(seed * 2.3)));
  vec3 frameCol = mix(vec3(0.07, 0.075, 0.08), vec3(0.93, 0.91, 0.85), painted);
  frameCol = mix(frameCol, wall, isCurtain);
  frameCol = mix(frameCol, vec3(0.32, 0.24, 0.15), isDeco);
  frameCol = mix(frameCol, vec3(0.78, 0.79, 0.8), isCondo);

  // Office floors tend to be lit in whole runs, homes window by window.
  float floorLit = pa_hash12(vec2(rowId + seed * 5.0, faceId));
  float office = max(max(1.0 - step(2.5, style), isDeco), isPanel);
  float litP = mix(mix(0.04, 0.48, nightFactor), mix(0.05, 0.62, nightFactor) * (0.6 + floorLit * 0.8), office);
  // Windows smaller than a pixel take the average, so a distant skyline holds still.
  float tiny = smoothstep(0.3, 0.75, max(wu, wv));
  float lit = mix(step(h1, litP), litP, tiny);

  // Glass by day: the tint, with blinds pulled to different heights and curtains at the sides.
  vec3 glassCol = tint * (mix(0.32, 0.42, isCurtain) + mix(h2, 0.5, tiny) * 0.3);
  float gy = clamp(g.y, 0.0, 1.0);
  float drop = step(0.48, h3) * (0.12 + 0.7 * fract(h3 * 9.7)) * (1.0 - isCurtain * 0.5);
  float blind = pa_aastep(1.0 - drop, gy, gw.y) * step(0.01, drop) * (1.0 - tiny);
  float slats = mix(1.0, 0.82 + 0.18 * step(0.5, fract(gy * gs.y / 0.06)), step(0.7, h2) * (1.0 - smoothstep(0.1, 0.3, dy / 0.06)));
  vec3 blindCol = mix(vec3(0.6, 0.58, 0.54), vec3(0.42, 0.4, 0.37), step(0.75, h2)) * slats;
  float drape = (1.0 - office) * step(0.55, fract(h3 * 3.3)) * (1.0 - pa_band(g.x, 0.08 + 0.2 * h2, 0.92 - 0.2 * h2, gw.x)) * (1.0 - tiny);
  vec3 drapeCol = mix(vec3(0.62, 0.58, 0.5), vec3(0.5, 0.42, 0.4), step(0.6, h1));
  glassCol = mix(glassCol, blindCol * (tint * 0.6 + 0.4), blind * 0.72);
  glassCol = mix(glassCol, drapeCol * (tint * 0.5 + 0.45), drape * (1.0 - blind) * 0.7);

  // Curtain wall: the band at each floor is opaque glass, a metal panel, or nothing at all.
  float spandrel = 0.0;
  vec3 spandrelCol = tint * 0.16;
  float metalBand = 0.0;
  if (style < 0.5) {
    spandrel = inU * (1.0 - pa_band(fv, v0, 1.0, wv)) * inGrid * pa_band(fu, u0, u1, wu);
    metalBand = step(0.4, variant) * (1.0 - step(0.7, variant));
    spandrelCol = mix(spandrelCol, accent, metalBand);
    spandrelCol = mix(spandrelCol, tint * 0.42, step(0.7, variant));
  }

  // The wall itself: panel joints on precast and metal cladding, tone from panel to panel.
  albedo = wall;
  #ifndef FACADE_LOW
    float clad = max(max(isPunched, isRibbon), max(isPanel, isCondo));
    if (clad > 0.5) {
      float joint = (1.0 - pa_band(fu, 0.012 / cellW, 1.0 - 0.012 / cellW, wu)) + (1.0 - pa_band(fv, 0.012 / floorH, 1.0 - 0.012 / floorH, wv));
      albedo *= 1.0 + (h2 - 0.5) * 0.07 * fine * inGrid;
      albedo *= 1.0 - clamp(joint, 0.0, 1.0) * 0.3 * fine * inGrid;
    }
  #endif
  albedo = mix(albedo, mix(wall * 0.55, accent, 0.75), solid * step(h3, 0.1) * inGrid);

  // Casings on the wall face: sills, lintels, shutters, piers and panels.
  vec3 stone = vec3(0.74, 0.7, 0.62) * (0.9 + grime * 0.2);
  if (isBrick + isStucco + isPunched > 0.5) {
    float across = pa_band(fu, u0 - 0.03, u1 + 0.03, wu) * inGrid * (1.0 - doorCell);
    float sill = across * pa_band(fv, v0 - 0.13 / floorH, v0, wv) * (1.0 - solid);
    float lintel = pa_band(fu, u0 - 0.045, u1 + 0.045, wu) * pa_band(fv, v1, v1 + 0.24 / floorH, wv) * inGrid * (1.0 - doorCell);
    albedo = mix(albedo, stone, sill * max(isBrick, max(isStucco, isPunched * 0.7)));
    albedo = mix(albedo, stone, lintel * isBrick);
    // The sill's shadow on the wall under it.
    albedo *= 1.0 - across * pa_band(fv, v0 - 0.2 / floorH, v0 - 0.13 / floorH, wv) * 0.3 * max(isBrick, isStucco);
  }
  if (isDeco > 0.5) {
    // Art deco: raised piers between windows, bronze spandrel panels with a chevron,
    // a cornice every six floors.
    float pier = (pa_band(fu, 0.0, 0.13, wu) + pa_band(fu, 0.87, 1.0, wu)) * inGrid;
    float panel = pa_band(fu, u0, u1, wu) * (1.0 - pa_band(fv, v0, v1, wv)) * inGrid;
    float corn = pa_band(fract(cv / 6.0), 0.0, 0.025, wv / 6.0) * inGrid;
    float pv = fract(fv + 1.0 - v1) / (1.0 - v1 + v0);
    float zig = abs(fract(pv * 2.5 + abs(fu - 0.5) * 5.0) - 0.5) * 2.0;
    float chevron = (1.0 - pa_aastep(0.32, zig, wv * 14.0 + 0.02)) * fine;
    albedo = mix(albedo, wall * 1.16, pier * (1.0 - open));
    albedo = mix(albedo, mix(wall * 0.42 + vec3(0.02), accent * 0.8, chevron * 0.85), panel);
    albedo = mix(albedo, wall * 1.25, corn);
  }
  if (isMotel > 0.5) {
    // Motel rooms: a painted door beside each window.
    float door = pa_band(fu, 0.1, 0.36, wu) * pa_band(fv, 0.0, 0.8, wv) * inGrid;
    vec3 doorPaint = mix(vec3(0.1, 0.42, 0.45), vec3(0.72, 0.28, 0.2), step(0.5, pa_hash12(vec2(seed, 3.0))));
    albedo = mix(albedo, doorPaint * (0.9 + 0.1 * h2), door);
    albedo = mix(albedo, vec3(0.85, 0.78, 0.5), door * pa_band(fu, 0.31, 0.33, wu) * pa_band(fv, 0.38, 0.42, wv));
  }
  if (isStucco > 0.5) {
    // Painted shutters beside stucco windows.
    float shutter = (pa_band(fu, u0 - 0.15, u0 - 0.035, wu) + pa_band(fu, u1 + 0.035, u1 + 0.15, wu)) * pa_band(fv, v0, v1, wv) * inGrid * (1.0 - doorCell) * step(fract(seed * 1.7), 0.5);
    vec3 shutterCol = mix(mix(vec3(0.12, 0.3, 0.26), vec3(0.15, 0.25, 0.42), step(0.33, h2)), vec3(0.45, 0.2, 0.12), step(0.66, h2));
    float louvre = 0.85 + 0.15 * step(0.5, fract(fv * floorH / 0.09)) * fine;
    albedo = mix(albedo, shutterCol * louvre, shutter);
  }
  if (isBrick > 0.5 && variant > 0.5) {
    // Stone quoins up the corners.
    float quoin = (1.0 - pa_aastep(faceW * 0.5 - 0.02, abs(u), du)) * pa_aastep(faceW * 0.5 - mix(0.42, 0.62, step(0.5, fract(yb / 0.7))), abs(u), du);
    albedo = mix(albedo, stone, quoin * step(groundH, yb) * (1.0 - smoothstep(0.2, 0.5, dy / 0.35)));
  }

  // Plinth: a darker base course, painted on stucco.
  float plinth = (1.0 - pa_aastep(0.9, yb, dy)) * (1.0 - step(0.5, ground)) * onGround;
  vec3 plinthCol = mix(wall * 0.74, mix(wall * 0.7, accent, 0.6), max(isStucco, isMotel));
  plinthCol = mix(plinthCol, vec3(0.46, 0.44, 0.41) * (0.8 + grime * 0.4), isBrick);
  albedo = mix(albedo, plinthCol, plinth);
  albedo *= 1.0 - pa_band(yb, 0.9, 0.96, dy) * 0.25 * plinth;
  // Coping along the top.
  float coping = pa_aastep(top - 0.24, y, dy);
  albedo = mix(albedo, mix(wall * 1.1, stone, isBrick), coping * (1.0 - isCurtain));

  if (isDoorFace > 0.5 && abs(dmx) < 3.2 && yb < 5.4) {
    // Steps, a painted door in its frame with a small light in it, and a lamp above.
    float dh = pa_hash12(vec2(seed * 2.9, faceId));
    float frame = pa_band(dmx, -0.66, 0.66, du) * pa_band(yb, 0.18, 2.52, dy);
    float leafD = pa_band(dmx, -0.54, 0.54, du) * pa_band(yb, 0.22, 2.4, dy);
    float lite = pa_band(dmx, -0.3, 0.3, du) * pa_band(yb, 1.55, 2.15, dy);
    float knob = (1.0 - pa_aastep(0.05, length(vec2(dmx - 0.4, yb - 1.15)), max(du, dy)));
    float steps = pa_band(dmx, -1.0, 1.0, du) * (1.0 - pa_aastep(0.2, yb, dy));
    vec3 paint = mix(mix(vec3(0.1, 0.3, 0.33), vec3(0.5, 0.12, 0.1), step(0.25, dh)), mix(vec3(0.12, 0.16, 0.3), vec3(0.2, 0.13, 0.08), step(0.75, dh)), step(0.5, dh));
    paint = mix(paint, vec3(0.06), step(0.9, dh));
    albedo = mix(albedo, vec3(0.6, 0.59, 0.56), steps);
    albedo = mix(albedo, mix(vec3(0.9, 0.88, 0.82), stone, isBrick), frame);
    albedo = mix(albedo, paint * (0.85 + 0.15 * pa_band(abs(dmx), 0.1, 0.44, du) * pa_band(yb, 0.4, 1.4, dy)), leafD);
    albedo = mix(albedo, tint * 0.3, lite);
    albedo = mix(albedo, vec3(0.8, 0.7, 0.4), knob * leafD);
    float lamp = 1.0 - smoothstep(0.06, 0.16, length(vec2(dmx, yb - 2.78)));
    albedo = mix(albedo, vec3(0.1), lamp);
    fEmit += vec3(1.0, 0.78, 0.5) * (lamp * 5.0 + lite * 0.35 * step(0.4, dh)) * nightFactor;
    // The lamp's pool of light on the wall and the door.
    fEmit += albedo * vec3(1.0, 0.75, 0.45) * exp(-length(vec2(dmx, (yb - 2.6) * 0.8)) * 1.3) * nightFactor * 0.55 * (1.0 - lamp);
    fRough = mix(fRough, 0.45, leafD);
  }

  // Reveal, frame and glass, in that order.
  albedo = mix(albedo, mix(wall, frameCol, isCurtain) * revealTone, reveal);
  vec3 glazing = mix(glassCol, frameCol, bars);
  albedo = mix(albedo, glazing * (1.0 - shade * 0.5), win);
  albedo = mix(albedo, spandrelCol, spandrel);
  // Above the last full storey a curtain wall carries on as a band of plant-room louvres.
  float crownBand = isCurtain * inU * pa_aastep(nRows, cv, wv) * (1.0 - coping);
  albedo = mix(albedo, mix(wall * 0.6, tint * 0.2, 0.5) * (0.8 + 0.2 * step(0.5, fract(yb / 0.3)) * fine), crownBand * pa_band(fu, u0, u1, wu));

  float glassAll = clamp(pane + spandrel * (1.0 - metalBand), 0.0, 1.0);
  fGlass = glassAll;
  float glassMetal = mix(mix(0.2, 0.45, max(1.0 - step(2.5, style), max(isCondo, isPanel))), 0.75, isCurtain);
  fMetal = mix(max(isCurtain * 0.35, isPanel * 0.3), glassMetal, glassAll);
  fMetal = mix(fMetal, 0.6, spandrel * metalBand);
  fMetal = mix(fMetal, 0.5, win * bars * (1.0 - painted));
  fRough = mix(style > 2.5 && style < 4.5 ? 0.92 : 0.78, 0.035 + h3 * 0.06, glassAll);
  fRough = mix(fRough, 0.4, max(win * bars, spandrel * metalBand));
  fRough = mix(fRough, 0.35, isCurtain * (1.0 - glassAll) * inGrid);
  fRough = mix(fRough, 0.5, glassAll * blind * 0.8);

  // Interior light: ceiling glow near the top of the window, softened by any blind.
  float interior = 0.55 + 0.45 * smoothstep(0.2, 1.0, gy);
  vec3 roomCol = vec3(interior);
  #ifndef FACADE_LOW
    // Close up, the flat glow gives way to a real room behind the glass.
    float roomFade = (1.0 - smoothstep(70.0, 150.0, dist)) * (1.0 - step(0.5, spandrel)) * (1.0 - mirrorPass);
    if (roomFade > 0.01) {
      float ceilGlow;
      vec3 roomIn = paRoom(pg * cellSz, cellSz, Vw, Tw, Nw, h1, office, ceilGlow);
      // Lit rooms glow from the ceiling fitting; dark ones only show by day.
      vec3 litRoom = roomIn * (0.55 + ceilGlow * 2.0) * 1.35;
      roomCol = mix(roomCol, litRoom, roomFade);
      albedo = mix(albedo, mix(glassCol, roomIn * 0.34, 0.6) * (1.0 - shade * 0.4), pane * roomFade * (1.0 - max(blind, drape) * 0.8) * (1.0 - nightFactor * 0.8));
    }
  #endif
  roomCol = mix(roomCol, vec3(0.5, 0.47, 0.42) * slats, blind * 0.85);
  roomCol = mix(roomCol, drapeCol * 1.1, drape * (1.0 - blind) * 0.8);
  vec3 lightCol = mix(mix(vec3(1.0, 0.7, 0.4), vec3(1.0, 0.88, 0.7), step(0.45, h2)), vec3(0.72, 0.85, 1.0), step(0.8, h2));
  // TVs flicker in a few homes late at night.
  float tv = step(0.94, h3) * step(2.5, style) * (1.0 - office) * (0.6 + 0.4 * sin(worldTime * 7.0 + h1 * 50.0));
  lightCol = mix(lightCol, vec3(0.55, 0.65, 1.0) * (0.6 + tv), step(0.94, h3) * step(2.5, style) * (1.0 - office) * (1.0 - tiny));
  fEmit += lightCol * roomCol * pane * lit * (0.5 + mix(h2, 0.5, tiny) * 0.9) * nightFactor * 0.68;

  // Floodlighting: washed up the wall from the ground floor, or down from the crown.
  if (lightT > 0.5) {
    float up = mod(lightT, 2.0) > 0.5 ? exp(-max(yb - groundH, 0.0) / 9.0) * step(groundH - 0.3, yb) : 0.0;
    float down = lightT > 1.5 ? smoothstep(top - 16.0, top - 0.5, y) : 0.0;
    fEmit += albedo * mix(vec3(1.0, 0.8, 0.55), accent + 0.25, 0.35) * (up + down) * (1.0 - glassAll) * nightFactor * 0.55;
  }
  fTilt = vec3(h1 - 0.5, 0.0, h2 - 0.5) * 0.045 * glassAll * (1.0 - tiny);
}
`;

const FACADE_SHADER = FACADE_GLSL.replaceAll('pa_band(', 'fa_band(').replaceAll('pa_aastep(', 'fa_step(');

export function makeFacadeMaterial(low = false) {
  const mat = proceduralMaterial(low ? 'facade-low' : 'facade', { color: 0xffffff, roughness: 0.85, metalness: 0.0 }, {
    uniforms: { nightFactor: atmoUniforms.nightFactor, worldTime: atmoUniforms.worldTime, mirrorPass: atmoUniforms.mirrorPass, facSun: lightUniforms.paSunDirW },
    vertexPars: `
      attribute vec4 aStyle; attribute vec4 aGlass; attribute vec4 aAccent;
      varying vec3 vFacLocal; flat varying vec4 vFacBox; flat varying vec4 vFacStyle;
      flat varying vec4 vFacGlass; flat varying vec4 vFacAccent;`,
    vertex: `
      vec3 facScale = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
      vFacLocal = position * facScale;
      vFacBox = vec4(facScale, (modelMatrix * instanceMatrix * vec4(0.0, 0.5, 0.0, 1.0)).y);
      vFacStyle = aStyle;
      vFacGlass = aGlass;
      vFacAccent = aAccent;`,
    fragmentPars: FACADE_SHADER,
    color: `
      {
        vec3 albedo = diffuseColor.rgb;
        paFacade(albedo);
        diffuseColor.rgb = albedo;
      }`,
    roughness: 'roughnessFactor = fRough;',
    metalness: 'metalnessFactor = fMetal;',
    normal: 'normal = normalize(normal + (viewMatrix * vec4(fTilt, 0.0)).xyz);',
    emissive: 'totalEmissiveRadiance += fEmit;',
  });
  // Merge, don't replace: MeshStandardMaterial relies on its own STANDARD define.
  if (low) mat.defines = { ...mat.defines, FACADE_LOW: '' };
  return mat;
}

// Terracotta tile roofs for the coastal low-rise buildings.
export function makeTileRoofMaterial() {
  return proceduralMaterial('tiles', { color: 0xffffff, roughness: 0.7 }, {
    color: `
      {
        float along = dot(vPaWorld.xz, normalize(vec2(1.0 - abs(vPaNormalW.x), 1.0 - abs(vPaNormalW.z)) + 1e-4));
        vec2 t = vec2(along / 0.32, vPaWorld.y / 0.26);
        t.x += step(1.0, mod(floor(t.y), 2.0)) * 0.5;
        float fw = max(fwidth(t.x), fwidth(t.y));
        vec2 f = fract(t);
        float ridge = mix(1.0, 0.55 + 0.45 * sin(f.x * 3.14159), 1.0 - smoothstep(0.2, 0.6, fw));
        float lap = mix(1.0, smoothstep(0.0, 0.35, f.y) * 0.4 + 0.6, 1.0 - smoothstep(0.2, 0.6, fw));
        float var = pa_hash12(floor(t));
        vec3 col = mix(vec3(0.55, 0.2, 0.1), vec3(0.68, 0.32, 0.16), var);
        col = mix(col, vec3(0.3, 0.26, 0.2), smoothstep(0.6, 0.9, pa_noise(vPaWorld.xz * 0.5)) * 0.4);
        diffuseColor.rgb = col * ridge * lap;
      }`,
  });
}
