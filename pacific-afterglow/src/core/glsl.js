// Shared GLSL helpers. Everything procedural in the world is built from these.

export const NOISE = /* glsl */`
float pa_hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * .1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec2 pa_hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
float pa_hash13(vec3 p3) {
  p3 = fract(p3 * .1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}
float pa_noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(pa_hash12(i), pa_hash12(i + vec2(1, 0)), u.x),
             mix(pa_hash12(i + vec2(0, 1)), pa_hash12(i + vec2(1, 1)), u.x), u.y);
}
float pa_fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * pa_noise(p); p = p * 2.03 + 17.1; a *= 0.5; }
  return v;
}
float pa_fbm3(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 3; i++) { v += a * pa_noise(p); p = p * 2.07 + 11.3; a *= 0.5; }
  return v;
}
// Anti-aliased box/stripe helpers. w is the filter width from fwidth().
float pa_aastep(float edge, float x, float w) {
  w = max(w, 1e-5); // smoothstep is undefined when its edges are equal
  return smoothstep(edge - w, edge + w, x);
}
float pa_band(float x, float lo, float hi, float w) {
  return pa_aastep(lo, x, w) - pa_aastep(hi, x, w);
}
`;

// Physically based (Preetham) daylight. Used by the sky bake (world/sky.js), which paints
// it and the clouds into the panorama everything else reads.
export const ATMOSPHERE = /* glsl */`
uniform vec3 skySunDir;
uniform float skyTurbidity;
uniform float skyRayleigh;
uniform float skyMie;
uniform float skyMieG;
uniform float skyCloudCover;
uniform float skyNight;
uniform vec3 skyMoonDir;
uniform vec3 skyCloudLit;
uniform vec3 skyCloudShade;

const float PA_PI = 3.141592653589793;
const vec3 PA_TOTAL_RAYLEIGH = vec3(5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5);
const vec3 PA_MIE_CONST = vec3(1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14);

float pa_sunIntensity(float zenithAngleCos) {
  zenithAngleCos = clamp(zenithAngleCos, -1.0, 1.0);
  return 1000.0 * max(0.0, 1.0 - pow(2.718281828, -((1.6110731556870734 - acos(zenithAngleCos)) / 1.5)));
}

vec3 pa_atmosphere(vec3 dir) {
  vec3 up = vec3(0.0, 1.0, 0.0);
  vec3 sunDir = skySunDir;
  float sunE = pa_sunIntensity(dot(sunDir, up));
  float sunfade = 1.0 - clamp(1.0 - exp(sunDir.y * 2.2), 0.0, 1.0);
  float rayleighCoefficient = skyRayleigh - (1.0 - sunfade);
  vec3 betaR = PA_TOTAL_RAYLEIGH * rayleighCoefficient;
  vec3 betaM = 0.434 * (0.2 * skyTurbidity * 10E-18) * PA_MIE_CONST * skyMie;

  // Treat directions slightly below the horizon as horizon, so the haze wraps under it.
  vec3 d = normalize(vec3(dir.x, max(dir.y, 0.0) + 0.0001, dir.z));
  float zenithAngle = acos(max(0.0, dot(up, d)));
  float inverse = 1.0 / (cos(zenithAngle) + 0.15 * pow(93.885 - (zenithAngle * 180.0) / PA_PI, -1.253));
  float sR = 8.4E3 * inverse;
  float sM = 1.25E3 * inverse;
  vec3 Fex = exp(-(betaR * sR + betaM * sM));
  float cosTheta = dot(d, sunDir);
  float rPhase = 0.05968310365946075 * (1.0 + pow(cosTheta * 0.5 + 0.5, 2.0));
  float g2 = skyMieG * skyMieG;
  float mPhase = 0.07957747154594767 * ((1.0 - g2) / pow(1.0 - 2.0 * skyMieG * cosTheta + g2, 1.5));
  vec3 betaRTheta = betaR * rPhase;
  vec3 betaMTheta = betaM * mPhase;
  vec3 Lin = pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * (1.0 - Fex), vec3(1.5));
  Lin *= mix(vec3(1.0), pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * Fex, vec3(0.5)),
             clamp(pow(1.0 - dot(up, sunDir), 5.0), 0.0, 1.0));
  vec3 col = (Lin + vec3(0.1) * Fex) * 0.04 + vec3(0.0, 0.0003, 0.00075);
  return pow(col, vec3(1.0 / (1.2 + 1.2 * sunfade)));
}
`;

// The sky as everything else sees it: a lookup into the baked panorama (two of them,
// cross-faded), with the things too sharp to bake drawn on top: the sun's disc, the moon
// and the stars, each dimmed by the cloud in front of it.
export const SKY = /* glsl */`
uniform vec3 skySunDir;
uniform vec3 skyMoonDir;
uniform float skyIntensity;
uniform float skyTime;
uniform float skyNight;
uniform sampler2D skyPanoA;
uniform sampler2D skyPanoB;
uniform float skyPanoBlend;
uniform vec3 skySunColor;

vec2 pa_panoUv(vec3 dir) {
  float e = clamp((asin(clamp(dir.y, -1.0, 1.0)) + 0.035) / 1.6057963, 0.0, 1.0);
  return vec2(atan(dir.z, dir.x) / 6.2831853 + 0.5, sqrt(e));
}
// rgb: sky and clouds. a: how clear the view is to what lies beyond the clouds.
vec4 pa_skyPano(vec3 dir) {
  vec2 uv = pa_panoUv(dir);
  return mix(texture2D(skyPanoA, uv), texture2D(skyPanoB, uv), skyPanoBlend);
}

// Returns the sky radiance (pre-exposure, linear) for a world direction.
vec3 pa_sky(vec3 dir, bool withDisc, bool withClouds) {
  dir = normalize(dir);
  vec4 s = pa_skyPano(dir);
  vec3 col = s.rgb;
  if (skyNight > 0.01 && dir.y > 0.0) {
    vec3 beyond = vec3(0.55, 0.62, 0.75) * smoothstep(0.9993, 0.9996, dot(dir, skyMoonDir)) * 2.0;
    vec3 sd = dir * 380.0;
    float h = pa_hash13(floor(sd));
    float star = smoothstep(0.996, 1.0, h) * smoothstep(0.42, 0.0, length(fract(sd) - 0.5));
    star *= 0.6 + 0.4 * sin(skyTime * 3.0 + h * 80.0);
    beyond += vec3(0.9, 0.92, 1.0) * star * smoothstep(0.0, 0.25, dir.y) * 1.4;
    col += beyond * skyNight * s.a;
  }
  if (withDisc) col += skySunColor * smoothstep(0.99990, 0.99996, dot(dir, skySunDir)) * step(-0.01, dir.y) * s.a * s.a;
  return col * skyIntensity;
}
`;
