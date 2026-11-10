import * as THREE from 'three';

// A live reflection probe that rides with the player's car: a small cube map of the
// street around it, so the paint, glass and chrome mirror the buildings, palms and
// traffic actually going past instead of only the sky.
//
// One face is drawn per frame (six frames for a full turn); the renderer then filters the
// finished cube by roughness. Faces see layer 0 only, like the ocean mirror, so small
// props never enter it.
export class CarProbe {
  constructor(renderer, scene) {
    this.renderer = renderer;
    this.scene = scene;
    this.size = 0;
    this.target = null;
    this.camera = null;
    this.face = 0;
    this.ready = false;
    this.materials = [];
  }

  // Materials that should reflect the probe (they fall back to the sky when it is off).
  attach(materials) {
    this.materials = materials;
    this.apply();
  }

  setSize(size) {
    if (size === this.size) return;
    this.size = size;
    this.target?.dispose();
    this.target = null;
    this.camera = null;
    this.ready = false;
    this.face = 0;
    if (size > 0) {
      this.target = new THREE.WebGLCubeRenderTarget(size, { type: THREE.HalfFloatType, generateMipmaps: false });
      this.camera = new THREE.CubeCamera(0.6, 1400, this.target);
      this.camera.coordinateSystem = this.renderer.coordinateSystem;
      this.camera.updateCoordinateSystem();
      for (const c of this.camera.children) c.layers.set(0);
    }
    this.apply();
  }

  apply() {
    const map = this.ready && this.target ? this.target.texture : null;
    for (const m of this.materials) {
      if (m.envMap !== map) { m.envMap = map; m.needsUpdate = true; }
    }
  }

  // Draw the next face from `position`. `hide` are objects left out (the car itself);
  // `around(fn)` lets the caller wrap the render (to pause the ocean mirror, drop the sun disc).
  update(position, hide, intensity, around) {
    if (!this.target) return;
    const r = this.renderer;
    // A full cube is taken from one spot, so the six faces line up.
    if (this.face === 0) this.camera.position.copy(position);
    this.camera.updateMatrixWorld();
    const cam = this.camera.children[this.face];
    const prevTarget = r.getRenderTarget(), prevFace = r.getActiveCubeFace(), prevMip = r.getActiveMipmapLevel(), xr = r.xr.enabled;
    r.xr.enabled = false;
    for (const o of hide) o.visible = false;
    around(() => {
      r.setRenderTarget(this.target, this.face);
      r.render(this.scene, cam);
    });
    for (const o of hide) o.visible = true;
    r.setRenderTarget(prevTarget, prevFace, prevMip);
    r.xr.enabled = xr;
    this.face = (this.face + 1) % 6;
    if (this.face === 0) {
      this.target.texture.needsPMREMUpdate = true;
      if (!this.ready) { this.ready = true; this.apply(); }
    }
    for (const m of this.materials) m.envMapIntensity = intensity * (m.userData.envBoost || 1);
  }
}
