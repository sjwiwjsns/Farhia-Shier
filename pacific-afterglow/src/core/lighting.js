import * as THREE from 'three';
import { WEST, EAST, NORTH, SOUTH, GRID, ROAD_HALF, SLAB_H, roadsX, roadsZ, PROMENADE, BOUNDS, PIERS } from '../world/layout.js';

// Lighting that three.js does not have, added to every lit material at once by extending
// the shader chunks they all share:
//
//   - a far shadow cascade, so buildings a kilometre away still throw their shadows
//   - cloud shadows drifting over the city, under the same clouds the sky shows
//   - street lamps as real lights. They stand on a regular plan, so the nearest ones to any
//     point are worked out in the shader instead of being passed in: thousands of lamps
//     light the road, the cars and the building fronts for the price of two.
//
// Everything is driven by the uniforms below; a strength of zero skips the work.
export const lightUniforms = {
  paFarShadowMap: { value: null },
  paFarShadowMatrix: { value: new THREE.Matrix4() },
  paFarShadow: { value: new THREE.Vector4(0, 1 / 2048, 0.7, 0) }, // on, texel (uv), normal offset (m), -
  paLamp: { value: new THREE.Vector4(0, 1, 0.71, 0.42) }, // power, colour
  paCloud: { value: new THREE.Vector4(0, 0.42, 0, 0) }, // shadow strength, cover, wind offset (m)
  paSunDirW: { value: new THREE.Vector3(0, 1, 0) }, // toward the sun or moon, world space
};

// The cloud "weather" field: where clouds are, seen from above. The sky and the shadows on
// the ground both read it, which is why a shadow sits under the cloud that casts it.
export const CLOUD_FIELD_GLSL = /* glsl */`
float paHashC(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * .1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float paNoiseC(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(paHashC(i), paHashC(i + vec2(1, 0)), u.x), mix(paHashC(i + vec2(0, 1)), paHashC(i + vec2(1, 1)), u.x), u.y);
}
// xz in metres (wind already added). Returns 0..1.
float paCloudField(vec2 xz, int octaves) {
  vec2 p = xz * 0.00034;
  float v = 0.0, a = 0.5, n = 0.0;
  mat2 r = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 5; i++) {
    if (i >= octaves) break;
    v += a * paNoiseC(p); n += a;
    p = r * p * 2.03 + 17.1; a *= 0.5;
  }
  return v / n;
}
`;

const lampY = (SLAB_H + 8.7).toFixed(2);
const f1 = v => v.toFixed(1);
const promZ0 = BOUNDS.minZ + 16;
const pierGaps = PIERS.map(P => `abs(pz - ${f1(P.z)}) > 12.0`).join(' && ');

// Declarations and helpers, appended to the fog parameters chunk (every lit material has it).
export const LIGHT_PARS_GLSL = /* glsl */`
#ifdef USE_FOG
  uniform highp sampler2DShadow paFarShadowMap;
  uniform mat4 paFarShadowMatrix;
  uniform vec4 paFarShadow;
  uniform vec4 paLamp;
  uniform vec4 paCloud;
  uniform vec3 paSunDirW;
  ${CLOUD_FIELD_GLSL}

  float paCloudShade(vec3 wp) {
    if (paCloud.x < 0.01) return 1.0;
    // Follow the sun's ray up from here to the cloud base.
    vec2 xz = wp.xz + paSunDirW.xz * ((1400.0 - wp.y) / max(paSunDirW.y, 0.1)) + paCloud.zw;
    float c = smoothstep(1.0 - paCloud.y, 1.0 - paCloud.y + 0.3, paCloudField(xz, 3));
    return 1.0 - c * paCloud.x;
  }

  float paFarShadowAt(vec3 wp, vec3 wn) {
    if (paFarShadow.x < 0.5) return 1.0;
    vec4 sc = paFarShadowMatrix * vec4(wp + wn * paFarShadow.z, 1.0);
    vec2 e = abs(sc.xy - 0.5) * 2.0;
    float edge = max(e.x, e.y);
    if (edge >= 1.0 || sc.z >= 1.0) return 1.0;
    float t = paFarShadow.y * 0.7, z = sc.z - 0.00018;
    float s = texture(paFarShadowMap, vec3(sc.xy + vec2(-t, -t), z)) + texture(paFarShadowMap, vec3(sc.xy + vec2(t, -t), z))
      + texture(paFarShadowMap, vec3(sc.xy + vec2(-t, t), z)) + texture(paFarShadowMap, vec3(sc.xy + vec2(t, t), z));
    return mix(s * 0.25, 1.0, smoothstep(0.88, 1.0, edge));
  }

  float paRoadX(float x) { return clamp(floor((x - ${f1(WEST)}) / ${f1(GRID)} + 0.5), 0.0, ${f1(roadsX.length - 1)}) * ${f1(GRID)} + ${f1(WEST)}; }
  float paRoadZ(float z) { return clamp(floor((z - ${f1(NORTH)}) / ${f1(GRID)} + 0.5), 0.0, ${f1(roadsZ.length - 1)}) * ${f1(GRID)} + ${f1(NORTH)}; }

  // The street lamp nearest to wp on one side of its road (see the layout in props.js).
  // Returns its position, or y < 0 where no lamp stands.
  vec3 paLampNear(vec3 wp, float side, bool avenue) {
    float off = side > 0.0 ? 19.0 : 0.0;
    if (avenue) {
      float rx = paRoadX(wp.x);
      float z0 = ${f1(NORTH - 40)};
      float zb = z0 + floor((wp.z - z0 - off) / 38.0 + 0.5) * 38.0;
      bool ok = zb > z0 - 0.5 && zb < ${f1(SOUTH + 40.5)} && abs(zb - paRoadZ(zb)) >= ${f1(ROAD_HALF + 7)} && !(rx < ${f1(WEST + 1)} && side < 0.0);
      return vec3(rx + side * ${f1(ROAD_HALF - 1.6)}, ok ? ${lampY} : -1.0, zb + off);
    }
    float rz = paRoadZ(wp.z);
    float x0 = ${f1(WEST + 20)};
    float xb = x0 + floor((wp.x - x0 - off) / 38.0 + 0.5) * 38.0;
    bool ok = xb > x0 - 0.5 && xb < ${f1(EAST + 0.5)} && abs(xb - paRoadX(xb)) >= ${f1(ROAD_HALF + 7)};
    return vec3(xb + off, ok ? ${lampY} : -1.0, rz + side * ${f1(ROAD_HALF - 1.6)});
  }

  // Light arriving at wp from a lamp: its colour and strength, and the direction to it.
  // Street heads throw their light downward; the promenade's globes shine all round.
  vec3 paLampLight(vec3 wp, vec3 lamp, float downward, out vec3 dir) {
    vec3 d = lamp - wp;
    float l2 = dot(d, d), l = sqrt(l2);
    dir = d / l;
    float cone = mix(1.0, smoothstep(0.08, 0.7, dir.y), downward);
    return paLamp.yzw * (paLamp.x * cone * (1.0 - smoothstep(24.0, 40.0, l)) / (l2 + 8.0));
  }
#endif
`;

// The lighting loop: three's own, with the sun masked by clouds and the far cascade, and
// the lamps added after it.
export function installLighting() {
  let chunk = THREE.ShaderChunk.lights_fragment_begin;
  const sunLine = 'directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif';
  if (!chunk.includes(sunLine) || !chunk.includes('IncidentLight directLight;')) throw new Error('lighting: three.js chunk layout changed');
  chunk = chunk.replace('IncidentLight directLight;', /* glsl */`IncidentLight directLight;
#if defined( USE_FOG ) && defined( RE_Direct )
  vec3 paNormalW = inverseTransformDirection( geometryNormal, viewMatrix );
  float paSunMask = paCloudShade( vFogWorld );
  if ( receiveShadow ) paSunMask *= paFarShadowAt( vFogWorld, paNormalW );
#else
  float paSunMask = 1.0;
#endif`);
  chunk = chunk.replace(sunLine, `${sunLine}\n\t\tdirectLight.color *= paSunMask;`);
  chunk += /* glsl */`
#if defined( USE_FOG ) && defined( RE_Direct )
  if ( paLamp.x > 0.01 && vFogWorld.y < 34.0 && vFogDepth < 440.0 ) {
    float paLampFade = 1.0 - smoothstep( 320.0, 440.0, vFogDepth );
    vec3 paDir;
    // Avenues, then streets. Each lamp lights its own patch, about 19 m either way along the
    // road and fading out behind the building line, so no patch ends at a hard edge and
    // most pixels work out two lamps or none.
    for ( int paAxis = 0; paAxis < 2; paAxis ++ ) {
      bool paAvenue = paAxis == 0;
      float paAcross = paAvenue ? abs( vFogWorld.x - paRoadX( vFogWorld.x ) ) : abs( vFogWorld.z - paRoadZ( vFogWorld.z ) );
      if ( paAcross < 36.0 ) {
        for ( int paSide = 0; paSide < 2; paSide ++ ) {
          vec3 paPos = paLampNear( vFogWorld, paSide == 0 ? -1.0 : 1.0, paAvenue );
          float paAlong = paAvenue ? abs( paPos.z - vFogWorld.z ) : abs( paPos.x - vFogWorld.x );
          float paPatch = ( 1.0 - smoothstep( 12.0, 19.0, paAlong ) ) * ( 1.0 - smoothstep( 26.0, 36.0, paAcross ) ) * paLampFade;
          if ( paPos.y > 0.0 && paPatch > 0.001 ) {
            directLight.color = paLampLight( vFogWorld, paPos, 1.0, paDir ) * paPatch;
            directLight.direction = normalize( mat3( viewMatrix ) * paDir );
            directLight.visible = true;
            RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          }
        }
      }
    }
    // The beach promenade has its own row of globe lamps.
    float paProm = abs( vFogWorld.x - ${f1((PROMENADE.from + PROMENADE.to) / 2)} );
    if ( paProm < 20.0 ) {
      float pz = ${f1(promZ0)} + floor( ( vFogWorld.z - ${f1(promZ0)} ) / 24.0 + 0.5 ) * 24.0;
      float paPatch = ( 1.0 - smoothstep( 7.0, 12.0, abs( pz - vFogWorld.z ) ) ) * ( 1.0 - smoothstep( 12.0, 20.0, paProm ) ) * paLampFade;
      if ( ${pierGaps} && paPatch > 0.001 ) {
        directLight.color = paLampLight( vFogWorld, vec3( ${f1((PROMENADE.from + PROMENADE.to) / 2)}, ${(SLAB_H + 4.4).toFixed(2)}, pz ), 0.0, paDir ) * paPatch * 0.5;
        directLight.direction = normalize( mat3( viewMatrix ) * paDir );
        directLight.visible = true;
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
      }
    }
  }
#endif
`;
  THREE.ShaderChunk.lights_fragment_begin = chunk;
}

// --- Far shadow cascade -----------------------------------------------------------
// One large, coarse shadow map of the district ahead of the camera, drawn from the sun (or
// moon) with a depth-only material. The city does not move, so it is redrawn only when the
// view has travelled or the light has turned, a couple of times a second at most.
const _right = new THREE.Vector3(), _up = new THREE.Vector3(), _c = new THREE.Vector3(), _bias = new THREE.Matrix4().set(
  0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);

export class FarShadow {
  constructor(renderer, scene) {
    this.renderer = renderer;
    this.scene = scene;
    this.size = 0;
    this.range = 560; // half the width of the square it covers, in metres
    this.target = null;
    this.camera = new THREE.OrthographicCamera(-this.range, this.range, this.range, -this.range, 1, 2700);
    this.camera.layers.set(0); // big things only: the same set the ocean mirror sees
    this.depthMaterial = new THREE.MeshBasicMaterial({ colorWrite: false, side: THREE.DoubleSide });
    this.center = new THREE.Vector3(1e9, 0, 0);
    this.dir = new THREE.Vector3();
    this.timer = 0;
    this.dirty = true;
    // The shader's shadow sampler must always have a real depth texture bound, even when
    // the cascade is switched off (a plain texture there is a GL error and nothing draws).
    this.blank = this.makeTarget(2);
    const prev = renderer.getRenderTarget();
    renderer.setRenderTarget(this.blank);
    renderer.clear();
    renderer.setRenderTarget(prev);
    lightUniforms.paFarShadowMap.value = this.blank.depthTexture;
  }

  makeTarget(size) {
    const depth = new THREE.DepthTexture(size, size);
    depth.compareFunction = THREE.LessEqualCompare; // sampled as a shadow: the GPU filters the comparison
    depth.minFilter = depth.magFilter = THREE.LinearFilter;
    return new THREE.WebGLRenderTarget(size, size, { depthTexture: depth });
  }

  setSize(size) {
    if (size === this.size) return;
    this.size = size;
    this.target?.depthTexture.dispose();
    this.target?.dispose();
    this.target = null;
    if (size > 0) {
      this.target = this.makeTarget(size);
      lightUniforms.paFarShadow.value.y = 1 / size;
    }
    // Until the first redraw fills the new map (and whenever the cascade is off) the blank one stands in.
    lightUniforms.paFarShadowMap.value = this.blank.depthTexture;
    lightUniforms.paFarShadow.value.x = 0;
    this.dirty = true;
  }

  // focus: the point the map is centred on; lightDir: toward the light.
  // around(draw): lets the caller hide what must not cast (the sky dome) and pause mirrors.
  update(dt, focus, lightDir, around) {
    if (!this.target) return;
    this.timer -= dt;
    const moved = Math.hypot(focus.x - this.center.x, focus.z - this.center.z);
    const turned = this.dir.dot(lightDir) < 0.99998; // about a third of a degree
    if (!this.dirty && !turned && (moved < 30 || this.timer > 0) && moved < 140) return;
    this.dirty = false;
    this.timer = 0.4;
    this.dir.copy(lightDir);
    this.center.copy(focus);
    // Snap the centre to whole texels in light space, so edges do not crawl between redraws.
    const texel = (this.range * 2) / this.size;
    _right.crossVectors(_up.set(0, 1, 0), lightDir).normalize();
    _up.crossVectors(lightDir, _right);
    _c.copy(_right).multiplyScalar(Math.round(focus.dot(_right) / texel) * texel)
      .addScaledVector(_up, Math.round(focus.dot(_up) / texel) * texel)
      .addScaledVector(lightDir, focus.dot(lightDir));
    const cam = this.camera;
    cam.position.copy(_c).addScaledVector(lightDir, 1500);
    cam.up.set(0, 1, 0);
    cam.lookAt(_c);
    cam.updateMatrixWorld();
    const r = this.renderer;
    const prevTarget = r.getRenderTarget(), prevOverride = this.scene.overrideMaterial;
    this.scene.overrideMaterial = this.depthMaterial;
    around(() => {
      r.setRenderTarget(this.target);
      r.clear();
      r.render(this.scene, cam);
    });
    this.scene.overrideMaterial = prevOverride;
    r.setRenderTarget(prevTarget);
    lightUniforms.paFarShadowMatrix.value.copy(_bias).multiply(cam.projectionMatrix).multiply(cam.matrixWorldInverse);
    lightUniforms.paFarShadowMap.value = this.target.depthTexture;
    lightUniforms.paFarShadow.value.x = 1;
  }
}
