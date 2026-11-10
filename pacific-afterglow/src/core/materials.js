import * as THREE from 'three';
import { NOISE } from './glsl.js';

// Small helpers for building materials with procedural shading injected into
// three's standard PBR shader, so they keep shadows, fog and image based light.

export function std(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.8, ...opts });
}

// Adds a world-position varying and lets callers inject fragment code at
// well-known points of MeshStandardMaterial:
//   color     – after <color_fragment>  (edit diffuseColor)
//   roughness – after <roughnessmap_fragment> (edit roughnessFactor)
//   metalness – after <metalnessmap_fragment> (edit metalnessFactor)
//   normal    – after <normal_fragment_maps> (edit normal, view space)
//   emissive  – after <emissivemap_fragment> (edit totalEmissiveRadiance)
export function proceduralMaterial(key, params, inject) {
  const mat = params.isMaterial ? params : new THREE.MeshStandardMaterial(params);
  mat.onBeforeCompile = shader => {
    Object.assign(shader.uniforms, inject.uniforms || {});
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>\nvarying vec3 vPaWorld;\nvarying vec3 vPaNormalW;\n${inject.vertexPars || ''}`)
      .replace('#include <worldpos_vertex>', `#include <worldpos_vertex>
        {
          vec4 paW = vec4(transformed, 1.0);
          vec3 paN = objectNormal;
          #ifdef USE_INSTANCING
            paW = instanceMatrix * paW;
            paN = mat3(instanceMatrix) * paN;
          #endif
          paW = modelMatrix * paW;
          vPaWorld = paW.xyz;
          vPaNormalW = normalize(mat3(modelMatrix) * paN);
        }
        ${inject.vertex || ''}`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\nvarying vec3 vPaWorld;\nvarying vec3 vPaNormalW;\n${NOISE}\n${inject.fragmentPars || ''}`)
      .replace('#include <color_fragment>', `#include <color_fragment>\n${inject.color || ''}`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>\n${inject.roughness || ''}`)
      .replace('#include <metalnessmap_fragment>', `#include <metalnessmap_fragment>\n${inject.metalness || ''}`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>\n${inject.normal || ''}`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>\n${inject.emissive || ''}`);
  };
  mat.customProgramCacheKey = () => 'pa-' + key;
  return mat;
}

export function canvasTexture(renderer, w, h, draw, { srgb = true, repeat = false } = {}) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
