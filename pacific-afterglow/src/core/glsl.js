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

// Physically based (Preetham) daylight with a procedural cloud deck and stars.
// Shared by the sky dome, the reflection probe and the ocean fallback reflection.
export const SKY = /* glsl */`
uniform vec3 skySunDir;
uniform float skyTurbidity;
uniform float skyRayleigh;
uniform float skyMie;
uniform float skyMieG;
uniform float skyIntensity;
uniform float skyCloudCover;
uniform float skyTime;
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

vec3 pa_atmosphere(vec3 dir, bool withDisc) {
  vec3 up = vec3(0.0, 1.0, 0.0);
  vec3 sunDir = skySunDir;
  float sunE = pa_sunIntensity(dot(sunDir, up));
  float sunfade = 1.0 - clamp(1.0 - exp(sunDir.y * 450000.0 / 450000.0 * 2.2), 0.0, 1.0);
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
  vec3 L0 = vec3(0.1) * Fex;
  if (withDisc) {
    float cosSun = dot(normalize(dir), sunDir);
    float disc = smoothstep(0.99990, 0.99996, cosSun);
    L0 += sunE * 19000.0 * Fex * disc * step(-0.01, dir.y);
  }
  vec3 col = (Lin + L0) * 0.04 + vec3(0.0, 0.0003, 0.00075);
  col = pow(col, vec3(1.0 / (1.2 + 1.2 * sunfade)));
  return col;
}

float pa_cloudNoise(vec2 p) {
  float v = 0.0, a = 0.5;
  mat2 r = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 6; i++) { v += a * pa_noise(p); p = r * p * 2.02 + 3.7; a *= 0.5; }
  return v;
}

// Returns the sky radiance (pre-exposure, linear-ish) for a world direction.
vec3 pa_sky(vec3 dir, bool withDisc, bool withClouds) {
  dir = normalize(dir);
  vec3 col = pa_atmosphere(dir, withDisc);
  float day = smoothstep(-0.12, 0.08, skySunDir.y);

  // Night sky: deep blue gradient, moon glow and stars.
  vec3 night = mix(vec3(0.010, 0.016, 0.034), vec3(0.002, 0.004, 0.012), clamp(dir.y * 1.6, 0.0, 1.0));
  night += vec3(0.05, 0.035, 0.03) * exp(-max(dir.y, 0.0) * 9.0) * 0.6; // city light pollution
  float moonCos = dot(dir, skyMoonDir);
  night += vec3(0.55, 0.62, 0.75) * smoothstep(0.9993, 0.9996, moonCos) * 2.0;
  night += vec3(0.05, 0.07, 0.11) * pow(max(moonCos, 0.0), 40.0);
  if (dir.y > 0.0) {
    vec3 sd = dir * 380.0;
    float s = pa_hash13(floor(sd));
    vec3 cellPos = fract(sd) - 0.5;
    float star = smoothstep(0.996, 1.0, s) * smoothstep(0.42, 0.0, length(cellPos));
    star *= 0.6 + 0.4 * sin(skyTime * 3.0 + s * 80.0);
    night += vec3(0.9, 0.92, 1.0) * star * smoothstep(0.0, 0.25, dir.y) * 1.4;
  }
  col = col * day + night * skyNight;

  if (withClouds && dir.y > 0.0) {
    // Project onto a flat cloud deck. Two layers: puffy low cumulus and high wispy cirrus.
    vec2 uv = dir.xz / (dir.y + 0.08);
    vec2 wind = vec2(skyTime * 0.004, skyTime * 0.0015);
    float n = pa_cloudNoise(uv * 1.4 + wind);
    float cover = skyCloudCover;
    float dens = smoothstep(1.0 - cover, 1.0 - cover + 0.32, n);
    float cirrus = pa_fbm(vec2(uv.x * 0.6, uv.y * 3.5) + wind * 2.0);
    cirrus = smoothstep(0.55, 0.95, cirrus) * 0.45;
    // Fake self shadowing: sample toward the sun.
    vec2 toSun = normalize(skySunDir.xz + 1e-4) * 0.06;
    float nShadow = pa_cloudNoise(uv * 1.4 + wind + toSun);
    float lit = clamp(0.5 + (n - nShadow) * 6.0, 0.0, 1.0);
    float sunCos = max(dot(dir, skySunDir), 0.0);
    float silver = pow(sunCos, 12.0) * 2.5 + pow(sunCos, 3.0) * 0.6;
    vec3 cloudCol = mix(skyCloudShade, skyCloudLit, lit) * (1.0 + silver);
    float horizonFade = smoothstep(0.0, 0.12, dir.y);
    float alpha = clamp(dens * 0.92 + cirrus, 0.0, 1.0) * horizonFade;
    // Clouds dissolve into the haze near the horizon.
    cloudCol = mix(cloudCol, col, 1.0 - smoothstep(0.0, 0.35, dir.y) * 0.85);
    col = mix(col, cloudCol, alpha);
  }
  return col * skyIntensity;
}
`;
