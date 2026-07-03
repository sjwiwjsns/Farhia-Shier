// A380-800 — bespoke dimensional specification.
// All values in meters, close public approximations of the real airframe.
// Body frame: forward = -Z, right = +X, up = +Y; fuselage runs z = -L/2 (nose)
// to +L/2 (tail); x (station) below is measured from the NOSE for readability
// and converted by the builders.
export const A380 = {
  length: 72.72,
  span: 79.75,
  height: 24.09,

  // ---------------------------------------------------------------- fuselage
  // Lofted from ovoid double-bubble sections: halfW = half width,
  // up/lo = upper/lower half-heights (up > lo gives the deep two-deck crown),
  // yC = section centreline offset from the datum.
  // t = station / length (0 = nose tip, 1 = tail end).
  fuselage: {
    halfW: 3.57,
    up: 4.42,
    lo: 4.10,
    sections: [
      { t: 0.000, w: 0.06, up: 0.06, lo: 0.06, yC: -1.35 },  // nose tip (low — cockpit sits at main deck)
      { t: 0.008, w: 0.55, up: 0.50, lo: 0.52, yC: -1.30 },
      { t: 0.020, w: 1.25, up: 1.05, lo: 1.10, yC: -1.15 },
      { t: 0.035, w: 1.90, up: 1.68, lo: 1.70, yC: -0.94 },  // cockpit windows band
      { t: 0.045, w: 2.22, up: 2.10, lo: 2.00, yC: -0.78 },  // brow rise begins (eased)
      { t: 0.058, w: 2.58, up: 2.62, lo: 2.32, yC: -0.60 },
      { t: 0.075, w: 2.92, up: 3.18, lo: 2.72, yC: -0.38 },
      { t: 0.095, w: 3.20, up: 3.68, lo: 3.15, yC: -0.16 },
      { t: 0.120, w: 3.40, up: 4.08, lo: 3.55, yC: -0.04 },
      { t: 0.150, w: 3.53, up: 4.32, lo: 3.90, yC: 0.00 },
      { t: 0.200, w: 3.57, up: 4.42, lo: 4.10, yC: 0.00 },   // full constant section
      { t: 0.300, w: 3.57, up: 4.42, lo: 4.10, yC: 0.00 },
      { t: 0.400, w: 3.57, up: 4.42, lo: 4.10, yC: 0.00 },
      { t: 0.500, w: 3.57, up: 4.42, lo: 4.10, yC: 0.00 },
      { t: 0.580, w: 3.57, up: 4.42, lo: 4.10, yC: 0.00 },
      { t: 0.640, w: 3.52, up: 4.38, lo: 3.98, yC: 0.05 },   // rear taper begins
      { t: 0.700, w: 3.38, up: 4.20, lo: 3.60, yC: 0.22 },
      { t: 0.760, w: 3.05, up: 3.82, lo: 3.02, yC: 0.55 },
      { t: 0.820, w: 2.55, up: 3.25, lo: 2.30, yC: 1.02 },
      { t: 0.875, w: 1.95, up: 2.55, lo: 1.60, yC: 1.58 },
      { t: 0.920, w: 1.38, up: 1.85, lo: 1.02, yC: 2.10 },
      { t: 0.958, w: 0.85, up: 1.15, lo: 0.58, yC: 2.50 },
      { t: 0.985, w: 0.42, up: 0.55, lo: 0.28, yC: 2.76 },
      { t: 1.000, w: 0.10, up: 0.12, lo: 0.08, yC: 2.88 }    // tail cone / APU
    ],
    radialSegments: 46,
    satcomDome: { t: 0.555, length: 3.4, width: 1.7, height: 0.55 },
    // Belly fairing (wing-to-body): big blended bulge under the centre section.
    bellyFairing: { tStart: 0.30, tEnd: 0.70, halfW: 3.9, depth: 1.35, yTop: -2.6 }
  },

  // ------------------------------------------------------------------ decks
  // Window bands (texture v-coordinates handled by the livery painter) and
  // 3D door cutouts. Doors: x from nose, deck 'main' | 'upper'.
  doors: {
    mainDeckY: -1.45,   // door centre height relative to datum
    upperDeckY: 2.35,
    width: 1.10,
    height: 1.95,
    stations: [
      { x: 8.2, deck: 'main', id: 'M1' },
      { x: 15.8, deck: 'main', id: 'M2' },
      { x: 26.5, deck: 'main', id: 'M3' },
      { x: 44.5, deck: 'main', id: 'M4' },
      { x: 58.8, deck: 'main', id: 'M5' },
      { x: 12.4, deck: 'upper', id: 'U1' },
      { x: 27.8, deck: 'upper', id: 'U2' },
      { x: 47.5, deck: 'upper', id: 'U3' }
    ]
  },

  // Cockpit: six front panes, low on the nose (the A380's trademark brow).
  cockpit: {
    x: 3.4,             // window band centre from nose
    y: -0.55,           // relative to datum
    paneW: 0.62, paneH: 0.78,
    eyePoint: { x: 3.6, y: -0.30 } // camera position (z from nose)
  },

  // ------------------------------------------------------------------- wing
  // Three-segment cranked planform per side. Chords along flight (z) axis;
  // 'eta' = fraction of semi-span at each break.
  wing: {
    rootX: 25.4,        // leading-edge root station from nose
    rootY: -2.35,       // low wing, blended into the belly fairing
    semiSpan: 39.875,
    area: 845,
    segments: [
      { eta0: 0.000, eta1: 0.112, chord0: 17.70, chord1: 14.60, sweepLE: 41.0, dihedral: 3.6 },  // root / yehudi
      { eta0: 0.112, eta1: 0.370, chord0: 14.60, chord1: 9.60, sweepLE: 36.5, dihedral: 5.0 },
      { eta0: 0.370, eta1: 0.720, chord0: 9.60, chord1: 5.30, sweepLE: 34.0, dihedral: 5.8 },
      { eta0: 0.720, eta1: 1.000, chord0: 5.30, chord1: 2.55, sweepLE: 33.0, dihedral: 6.6 }
    ],
    thickness: 0.11,    // root t/c visual factor
    // High-lift & control surfaces (eta ranges per side)
    slats: [
      [0.055, 0.105], [0.125, 0.215], [0.225, 0.315], [0.325, 0.415],
      [0.430, 0.535], [0.545, 0.650], [0.660, 0.775], [0.785, 0.920]
    ],
    flaps: [
      { eta0: 0.085, eta1: 0.355, chordFrac: 0.30 },   // inboard flap
      { eta0: 0.375, eta1: 0.640, chordFrac: 0.27 }    // outboard flap
    ],
    flapTrackFairings: [0.14, 0.24, 0.44, 0.56],       // eta positions
    aileron: { eta0: 0.665, eta1: 0.940, chordFrac: 0.24 },
    spoilers: { eta0: 0.10, eta1: 0.62, count: 8, chordFrac: 0.16 },
    tipFence: { height: 2.45, depth: 1.9 }             // signature up+down fence
  },

  // ---------------------------------------------------------------- engines
  // GP7200/Trent 900 class. Thrust reversers on the INBOARD pair only
  // (authentic A380 quirk). Positions = fraction of semi-span.
  engines: {
    fanRadius: 1.48,
    nacelleRadius: 1.72,
    nacelleLength: 7.4,
    fanBlades: 24,
    positions: [
      { eta: 0.380, reverser: true },
      { eta: 0.640, reverser: false }
    ],
    dropBelowWing: 1.55, // nacelle centre below local wing surface
    forwardOfLE: 2.6     // intake ahead of local leading edge
  },

  // ------------------------------------------------------------------- gear
  // 22 wheels: nose 2, two 4-wheel wing bogies, two 6-wheel body bogies.
  gear: {
    height: 6.25,           // fuselage datum above ground, gear extended
    wheelRadius: 0.70,
    wheelWidth: 0.52,
    nose: { x: 6.9, wheels: 2 },
    wing: { x: 33.4, track: 7.20, wheels: 4 },   // 2 axles x 2
    body: { x: 36.6, track: 2.60, wheels: 6 }    // 3 axles x 2
  },

  // ------------------------------------------------------------------- tail
  tail: {
    finRootX: 57.5,        // leading edge root from nose
    finRootChord: 11.6,
    finTipChord: 4.4,
    finHeight: 14.6,       // above fuselage crown
    finSweepLE: 42,
    dorsalLength: 6.5,     // dorsal fillet ahead of the fin
    hstabX: 62.0,
    hstabSemiSpan: 15.2,
    hstabRootChord: 7.6,
    hstabTipChord: 2.7,
    hstabSweepLE: 38,
    hstabDihedral: 6,
    hstabY: 1.2            // mounted on the tail cone rise
  },

  // ------------------------------------------------------------- small stuff
  details: {
    antennasTop: [10.5, 24.0, 41.0],   // x stations, blade antennas on the crown
    antennasBottom: [18.0, 50.5],
    beaconX: 30.0,
    pitotX: 2.2,
    apuExhaustRadius: 0.55
  }
};
