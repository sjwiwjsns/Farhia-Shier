// =============================================================================
// 25-buildings — the building kit.
//
// Buildings are solid, closed volumes: plinths, walls, pitched or flat roofs
// with real overhangs, fascia and soffits, doors, stoops, porches, garages,
// balconies, parapets, rooftop plant, recessed shopfronts with lit interiors,
// loading docks — and the driveways and parked cars around them.
//
// Geometry is written straight into per-material vertex batches instead of
// building and merging thousands of little three.js geometries: a chunk of
// suburb generates several times faster and allocates far less. Every face is
// emitted against an explicit "outward" direction and re-wound to match it, so
// a wall can never again end up facing into its own building.
//
// Facade textures are neutral in colour and carry the detail — window frames,
// sills, shutters, laps of siding, brick courses — in a matching normal map,
// plus a roughness/metalness map that makes glass reflect the sky while the
// walls stay matte. The hue comes from per-vertex colour, so one material can
// paint a whole street of differently coloured houses.
// =============================================================================

var FACADES = {};
var FAC_SIZE = IS_MOBILE ? 256 : 512;

// ------------------------------------------------------------------ colours
var _rgbCache = {};
function rgb(hex) {
  var c = _rgbCache[hex];
  if (c) return c;
  var col = new T.Color(hex);
  if (T.ColorManagement && T.ColorManagement.enabled) col.convertSRGBToLinear();
  c = _rgbCache[hex] = [col.r, col.g, col.b];
  return c;
}
function shade(c, k) { return [c[0] * k, c[1] * k, c[2] * k]; }
function pickCol(list, rng) { return rgb(list[(rng() * list.length) | 0]); }

var HOUSE_COLS = [0xebe8e1, 0xdfd5c1, 0xc2c7ca, 0xa9b9c7, 0xb3bfa5, 0xcfb898, 0xe6d6a2,
                  0x98a3ad, 0xd9c7b5, 0x8fa39a, 0xf0ede6, 0xb9a48e];
var ROOF_COLS = [0x4c4e53, 0x6a5b4c, 0x7d7f83, 0x3d3e42, 0x5e6a5c, 0x6f5f55, 0x55575c];
var DOOR_COLS = [0x7a1f1f, 0x1f3a5f, 0x2d4a33, 0xefeee8, 0x3a2a20, 0xb8952b, 0x222326, 0x6b7b86];
var CAR_COLS = [0xd8dde2, 0x2c3238, 0x8d949b, 0x8b1f22, 0x1f3f77, 0x2d5b3a, 0xb9bcc0,
                0x5a4632, 0xe4e7ea, 0x6a1b2a, 0x3b4b5c, 0xc8b28a];
var AWNING_COLS = [0x2f5d8f, 0x8f3f3a, 0x2f6d4a, 0x5b3f78, 0xb07a2a, 0x3a3f46];
var TRIM = 0xf1efe9;

// =============================================================== facade maps
// Height field helpers (the height map becomes the normal map).
function hRect(h, S, x0, y0, x1, y1, v) {
  x0 = Math.max(0, Math.floor(x0)); y0 = Math.max(0, Math.floor(y0));
  x1 = Math.min(S, Math.ceil(x1)); y1 = Math.min(S, Math.ceil(y1));
  for (var y = y0; y < y1; y++) for (var x = x0; x < x1; x++) h[y * S + x] = v;
}
function heightToNormal(h, S, strength) {
  var c = makeCanvas(S), ctx = c.getContext('2d');
  var img = ctx.createImageData(S, S), d = img.data;
  for (var y = 0; y < S; y++) {
    var yu = y > 0 ? y - 1 : y, yd = y < S - 1 ? y + 1 : y;
    for (var x = 0; x < S; x++) {
      var xl = x > 0 ? x - 1 : x, xr = x < S - 1 ? x + 1 : x;
      // Canvas y runs down while texture v runs up, hence the sign on ny.
      var nx = -(h[y * S + xr] - h[y * S + xl]) * strength;
      var ny = (h[yd * S + x] - h[yu * S + x]) * strength;
      var len = Math.sqrt(nx * nx + ny * ny + 1);
      var p = (y * S + x) * 4;
      d[p] = (nx / len * 0.5 + 0.5) * 255;
      d[p + 1] = (ny / len * 0.5 + 0.5) * 255;
      d[p + 2] = (1 / len * 0.5 + 0.5) * 255;
      d[p + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return c;
}

// Surface patterns: each paints albedo, roughness and height together.
function paintBase(kind, ac, oc, h, S, o) {
  var i, j, y, x;
  var tone = o.tone || 225;
  ac.fillStyle = 'rgb(' + tone + ',' + tone + ',' + tone + ')'; ac.fillRect(0, 0, S, S);
  oc.fillStyle = 'rgb(0,' + (o.rough || 215) + ',0)'; oc.fillRect(0, 0, S, S);
  h.fill(0.5);

  if (kind === 'siding') {
    // Lapped siding: each board tucks under the one above.
    var laps = o.laps || 24, lp = S / laps;
    for (i = 0; i < laps; i++) {
      var top = i * lp;
      for (y = Math.floor(top); y < Math.floor(top + lp) && y < S; y++) {
        var t = (y - top) / lp;
        var v = 0.40 + t * 0.2;
        for (x = 0; x < S; x++) h[y * S + x] = v;
      }
      ac.fillStyle = 'rgba(0,0,0,0.13)'; ac.fillRect(0, top + lp - Math.max(1, lp * 0.14), S, Math.max(1, lp * 0.14));
      ac.fillStyle = 'rgba(255,255,255,0.10)'; ac.fillRect(0, top, S, Math.max(1, lp * 0.18));
    }
    speckle(ac, S, S * 2, ['rgba(0,0,0,0.5)', 'rgba(255,255,255,0.6)'], 0.4, 1.1, 0.06);
  } else if (kind === 'brick') {
    var courses = o.courses || 40, cp = S / courses, perRow = o.perRow || 18, bwp = S / perRow;
    for (j = 0; j < courses; j++) {
      var off = (j % 2) * bwp * 0.5;
      for (i = -1; i <= perRow; i++) {
        var bx0 = i * bwp + off + 1, by0 = j * cp + 1, bx1 = bx0 + bwp - 2, by1 = by0 + cp - 2;
        var k = 0.82 + Math.random() * 0.3;
        var cr = Math.min(255, tone * k) | 0, cg = Math.min(255, tone * k * 0.97) | 0, cb = Math.min(255, tone * k * 0.94) | 0;
        ac.fillStyle = 'rgb(' + cr + ',' + cg + ',' + cb + ')';
        ac.fillRect(bx0, by0, bx1 - bx0, by1 - by0);
        hRect(h, S, bx0, by0, bx1, by1, 0.56 + Math.random() * 0.04);
      }
    }
    // Mortar: lighter, recessed.
    for (j = 0; j <= courses; j++) {
      hRect(h, S, 0, j * cp - 1, S, j * cp + 1, 0.38);
      ac.fillStyle = 'rgba(245,242,236,0.55)'; ac.fillRect(0, j * cp - 1, S, 2);
    }
  } else if (kind === 'stucco') {
    for (i = 0; i < S * S / 60; i++) {
      var sx = Math.random() * S, sy = Math.random() * S;
      hRect(h, S, sx, sy, sx + 1 + Math.random() * 2, sy + 1 + Math.random() * 2, 0.5 + (Math.random() - 0.5) * 0.12);
    }
    speckle(ac, S, S * 3, ['rgba(0,0,0,0.5)', 'rgba(255,255,255,0.5)'], 0.4, 1.4, 0.08);
    if (o.joints) {                       // control joints between panels
      var jn = o.joints;
      for (i = 0; i <= jn; i++) {
        hRect(h, S, i * S / jn - 1, 0, i * S / jn + 1, S, 0.36);
        hRect(h, S, 0, i * S / jn - 1, S, i * S / jn + 1, 0.36);
        ac.fillStyle = 'rgba(0,0,0,0.16)';
        ac.fillRect(i * S / jn - 1, 0, 2, S); ac.fillRect(0, i * S / jn - 1, S, 2);
      }
    }
  } else if (kind === 'panel') {
    // Metal/stone spandrel cladding.
    speckle(ac, S, S, ['rgba(0,0,0,0.4)', 'rgba(255,255,255,0.4)'], 0.4, 1.2, 0.06);
  } else if (kind === 'ribbed') {
    // Corrugated metal cladding: vertical ribs every few centimetres.
    var ribs = o.ribs || 48, rw = S / ribs;
    for (i = 0; i < ribs; i++) {
      for (x = Math.floor(i * rw); x < Math.floor((i + 1) * rw) && x < S; x++) {
        var tt = (x - i * rw) / rw;
        var hv = 0.5 + Math.sin(tt * TAU) * 0.12;
        for (y = 0; y < S; y++) h[y * S + x] = hv;
      }
      ac.fillStyle = 'rgba(0,0,0,0.07)'; ac.fillRect(i * rw, 0, Math.max(1, rw * 0.3), S);
    }
    for (i = 1; i < 3; i++) { hRect(h, S, 0, i * S / 3 - 1, S, i * S / 3 + 1, 0.4); }
  } else if (kind === 'shingle') {
    var rows = o.rows || 14, rp = S / rows, tabs = o.tabs || 10, tp = S / tabs;
    for (j = 0; j < rows; j++) {
      var shift = (j % 2) * tp * 0.5;
      for (i = -1; i <= tabs; i++) {
        var g = (tone * (0.78 + Math.random() * 0.34)) | 0;
        ac.fillStyle = 'rgb(' + g + ',' + g + ',' + g + ')';
        ac.fillRect(i * tp + shift + 1, j * rp, tp - 2, rp);
      }
      for (y = Math.floor(j * rp); y < Math.floor((j + 1) * rp) && y < S; y++) {
        var tv = (y - j * rp) / rp;
        for (x = 0; x < S; x++) h[y * S + x] = 0.42 + tv * 0.18;
      }
      ac.fillStyle = 'rgba(0,0,0,0.25)'; ac.fillRect(0, (j + 1) * rp - 2, S, 2);
    }
    speckle(ac, S, S * 4, ['rgba(0,0,0,0.6)', 'rgba(255,255,255,0.5)'], 0.4, 1.0, 0.1);
  } else if (kind === 'membrane') {
    // Flat-roof membrane with seams and a scatter of gravel.
    for (i = 0; i <= 4; i++) {
      hRect(h, S, 0, i * S / 4 - 1, S, i * S / 4 + 2, 0.58);
      ac.fillStyle = 'rgba(0,0,0,0.12)'; ac.fillRect(0, i * S / 4 - 1, S, 3);
    }
    speckle(ac, S, S * 5, ['rgba(0,0,0,0.5)', 'rgba(255,255,255,0.5)'], 0.4, 1.3, 0.1);
  }
}

// Glass: a sky-ish gradient in the albedo, smooth and partly metallic so the
// environment probe paints real reflections into every window.
function paintGlass(ac, oc, h, x0, y0, x1, y1, style, S) {
  var g = ac.createLinearGradient(0, y0, 0, y1);
  if (style === 'office') { g.addColorStop(0, '#9cb2c6'); g.addColorStop(1, '#4e6274'); }
  else { g.addColorStop(0, '#8ea2b3'); g.addColorStop(1, '#3f4d5a'); }
  ac.fillStyle = g; ac.fillRect(x0, y0, x1 - x0, y1 - y0);
  // A soft diagonal reflection streak.
  ac.save();
  ac.beginPath(); ac.rect(x0, y0, x1 - x0, y1 - y0); ac.clip();
  ac.fillStyle = 'rgba(255,255,255,0.12)';
  ac.beginPath();
  var w = x1 - x0;
  ac.moveTo(x0 + w * 0.15, y0); ac.lineTo(x0 + w * 0.45, y0); ac.lineTo(x0 + w * 0.05, y1); ac.lineTo(x0 - w * 0.25, y1);
  ac.fill();
  ac.restore();
  oc.fillStyle = style === 'office' ? 'rgb(0,12,170)' : 'rgb(0,16,130)';   // G rough, B metal
  oc.fillRect(x0, y0, x1 - x0, y1 - y0);
  hRect(h, S, x0, y0, x1, y1, 0.18);
}

function paintLit(ec, x0, y0, x1, y1, style) {
  var warm = style === 'office' ? Math.random() < 0.35 : Math.random() < 0.8;
  var base = warm ? [255, 200 + Math.random() * 30, 130 + Math.random() * 50]
                  : [205 + Math.random() * 30, 222, 255];
  var gr = ec.createLinearGradient(0, y0, 0, y1);
  gr.addColorStop(0, 'rgba(' + (base[0] | 0) + ',' + (base[1] | 0) + ',' + (base[2] | 0) + ',0.95)');
  gr.addColorStop(1, 'rgba(' + ((base[0] * 0.7) | 0) + ',' + ((base[1] * 0.6) | 0) + ',' + ((base[2] * 0.5) | 0) + ',0.85)');
  ec.fillStyle = gr; ec.fillRect(x0, y0, x1 - x0, y1 - y0);
  var w = x1 - x0;
  if (style !== 'office' && Math.random() < 0.6) {            // curtains drawn at the sides
    ec.fillStyle = 'rgba(40,24,12,0.55)';
    ec.fillRect(x0, y0, w * (0.12 + Math.random() * 0.18), y1 - y0);
    ec.fillRect(x1 - w * (0.12 + Math.random() * 0.18), y0, w * 0.3, y1 - y0);
  } else if (Math.random() < 0.5) {                           // blinds
    ec.fillStyle = 'rgba(0,0,0,0.25)';
    for (var yy = y0; yy < y1; yy += 3) ec.fillRect(x0, yy, w, 1);
  }
}

// A windowed facade: bays x floors cells, each with a framed window.
function makeFacade(o) {
  var S = FAC_SIZE;
  var alb = makeCanvas(S), ac = alb.getContext('2d');
  var emi = makeCanvas(S), ec = emi.getContext('2d');
  var orm = makeCanvas(S), oc = orm.getContext('2d');
  var h = new Float32Array(S * S);
  paintBase(o.base, ac, oc, h, S, o);
  ec.fillStyle = '#000'; ec.fillRect(0, 0, S, S);

  var cw = S / o.bays, ch = S / o.floors;
  var fr = Math.max(2, o.frame * S / o.bays * 4);
  var ft = o.frameTone || 245;
  for (var j = 0; j < o.floors; j++) {
    for (var i = 0; i < o.bays; i++) {
      var win = o.win;
      if (o.door && o.door(i, j)) win = o.doorWin;
      var x0 = i * cw + win[0] * cw, x1 = i * cw + win[1] * cw;
      var yb = S - (j * ch + win[2] * ch), yt = S - (j * ch + win[3] * ch);   // canvas y

      if (o.spandrel) {                         // curtain wall: dark spandrel bands
        ac.fillStyle = 'rgba(40,46,54,0.55)';
        ac.fillRect(i * cw, S - (j + 1) * ch, cw, yt - (S - (j + 1) * ch));
        ac.fillRect(i * cw, yb, cw, S - j * ch - yb);
      }
      if (o.shutters) {
        var sw = (x1 - x0) * 0.36;
        ac.fillStyle = 'rgb(70,74,78)';
        ac.fillRect(x0 - fr - sw, yt, sw, yb - yt); ac.fillRect(x1 + fr, yt, sw, yb - yt);
        hRect(h, S, x0 - fr - sw, yt, x0 - fr, yb, 0.64);
        hRect(h, S, x1 + fr, yt, x1 + fr + sw, yb, 0.64);
        ac.fillStyle = 'rgba(0,0,0,0.25)';
        for (var ly = yt + 3; ly < yb; ly += 5) { ac.fillRect(x0 - fr - sw, ly, sw, 1); ac.fillRect(x1 + fr, ly, sw, 1); }
      }
      if (o.lintel) {                           // stone lintel above the opening
        ac.fillStyle = 'rgb(232,226,214)';
        ac.fillRect(x0 - fr * 2, yt - fr * 2.4, x1 - x0 + fr * 4, fr * 1.8);
        hRect(h, S, x0 - fr * 2, yt - fr * 2.4, x1 + fr * 2, yt - fr * 0.6, 0.7);
      }
      // frame
      ac.fillStyle = 'rgb(' + ft + ',' + ft + ',' + ft + ')';
      ac.fillRect(x0 - fr, yt - fr, x1 - x0 + fr * 2, yb - yt + fr * 2);
      oc.fillStyle = 'rgb(0,120,0)'; oc.fillRect(x0 - fr, yt - fr, x1 - x0 + fr * 2, yb - yt + fr * 2);
      hRect(h, S, x0 - fr, yt - fr, x1 + fr, yb + fr, 0.78);
      // sill
      if (!o.spandrel) {
        ac.fillStyle = 'rgb(' + (ft - 18) + ',' + (ft - 18) + ',' + (ft - 20) + ')';
        ac.fillRect(x0 - fr * 1.8, yb + fr, x1 - x0 + fr * 3.6, fr * 1.5);
        hRect(h, S, x0 - fr * 1.8, yb + fr, x1 + fr * 1.8, yb + fr * 2.5, 0.88);
      }
      // glass
      paintGlass(ac, oc, h, x0, yt, x1, yb, o.glass, S);
      // muntins / mullions
      var mt = Math.max(1, fr * 0.45);
      ac.fillStyle = 'rgb(' + ft + ',' + ft + ',' + ft + ')';
      if (o.muntin === 'cross' || o.muntin === 'grid') {
        ac.fillRect((x0 + x1) / 2 - mt / 2, yt, mt, yb - yt);
        ac.fillRect(x0, (yt + yb) / 2 - mt / 2, x1 - x0, mt);
        hRect(h, S, (x0 + x1) / 2 - mt / 2, yt, (x0 + x1) / 2 + mt / 2, yb, 0.5);
        hRect(h, S, x0, (yt + yb) / 2 - mt / 2, x1, (yt + yb) / 2 + mt / 2, 0.5);
      }
      if (o.muntin === 'grid') {
        ac.fillRect(x0 + (x1 - x0) * 0.25 - mt / 2, yt, mt, yb - yt);
        ac.fillRect(x0 + (x1 - x0) * 0.75 - mt / 2, yt, mt, yb - yt);
      }
      if (o.muntin === 'vertical') {
        ac.fillRect((x0 + x1) / 2 - mt / 2, yt, mt, yb - yt);
        hRect(h, S, (x0 + x1) / 2 - mt / 2, yt, (x0 + x1) / 2 + mt / 2, yb, 0.5);
      }
      // lit at night?
      if (Math.random() < o.lit) paintLit(ec, x0, yt, x1, yb, o.glass);
    }
  }
  if (o.spandrel) {                              // vertical mullions between bays
    for (var m = 0; m <= o.bays; m++) {
      ac.fillStyle = 'rgb(' + ft + ',' + ft + ',' + ft + ')';
      ac.fillRect(m * cw - fr, 0, fr * 2, S);
      hRect(h, S, m * cw - fr, 0, m * cw + fr, S, 0.8);
    }
  }
  return finishFacade(o, alb, emi, orm, h, S);
}

function makePlain(o) {
  var S = Math.min(FAC_SIZE, 256);
  var alb = makeCanvas(S), ac = alb.getContext('2d');
  var orm = makeCanvas(S), oc = orm.getContext('2d');
  var h = new Float32Array(S * S);
  paintBase(o.base, ac, oc, h, S, o);
  return finishFacade(o, alb, null, orm, h, S);
}

function finishFacade(o, alb, emi, orm, h, S) {
  var f = {
    bw: o.bw || 0, fh: o.fh || 0, bays: o.bays || 1, floors: o.floors || 1,
    tile: o.tile || [(o.bw || 4) * (o.bays || 1), (o.fh || 4) * (o.floors || 1)],
    map: finishTex(alb, 0, true, 8),
    emissive: emi ? finishTex(emi, 0, true, 4) : null,
    normal: finishTex(heightToNormal(h, S, (o.bump || 2.4) * S / 256), 0, false, 8),
    orm: finishTex(orm, 0, false, 4)
  };
  return f;
}

// ----------------------------------------------------------- materials
function facadeMaterial(f, opts) {
  opts = opts || {};
  var m = new T.MeshStandardMaterial({
    map: f.map, normalMap: f.normal, roughnessMap: f.orm, metalnessMap: f.orm,
    roughness: 1, metalness: opts.metal === undefined ? 1 : opts.metal,
    normalScale: new T.Vector2(opts.bump || 1, opts.bump || 1),
    emissiveMap: f.emissive, emissive: f.emissive ? 0xffffff : 0x000000, emissiveIntensity: 0,
    vertexColors: true, envMapIntensity: opts.env || 1.0
  });
  if (f.emissive) NIGHT_MATS.push(m);
  return m;
}

function buildBuildingMaterials() {
  FACADES.house = makeFacade({
    base: 'siding', tone: 236, laps: 30, bays: 4, floors: 2, bw: 2.7, fh: 3.0,
    win: [0.31, 0.69, 0.29, 0.75], frame: 0.05, frameTone: 250, glass: 'res', muntin: 'cross',
    shutters: true, lit: 0.42
  });
  FACADES.apartment = makeFacade({
    base: 'brick', tone: 214, courses: 56, perRow: 22, bays: 4, floors: 4, bw: 3.3, fh: 3.1,
    win: [0.25, 0.75, 0.30, 0.80], doorWin: [0.22, 0.78, 0.03, 0.80],
    door: function (i) { return i % 2 === 1; },
    frame: 0.03, frameTone: 236, glass: 'res', muntin: 'vertical', lintel: true, lit: 0.46
  });
  FACADES.office = makeFacade({
    base: 'panel', tone: 150, bays: 6, floors: 4, bw: 1.7, fh: 3.7,
    win: [0.03, 0.97, 0.25, 0.92], frame: 0.018, frameTone: 118, glass: 'office', muntin: 'none',
    spandrel: true, lit: 0.5, bump: 1.8
  });
  FACADES.brick = makeFacade({
    base: 'brick', tone: 216, courses: 44, perRow: 20, bays: 4, floors: 2, bw: 3.6, fh: 4.0,
    win: [0.14, 0.86, 0.25, 0.78], frame: 0.025, frameTone: 232, glass: 'res', muntin: 'grid',
    lintel: true, lit: 0.5
  });
  FACADES.siding = makePlain({ base: 'siding', tone: 236, laps: 20, tile: [4, 4] });
  FACADES.stucco = makePlain({ base: 'stucco', tone: 230, joints: 2, tile: [6, 6], rough: 225 });
  FACADES.metal = makePlain({ base: 'ribbed', tone: 222, ribs: 40, tile: [6, 6], rough: 120, bump: 3 });
  FACADES.shingle = makePlain({ base: 'shingle', tone: 205, rows: 16, tabs: 9, tile: [3.2, 3.2], rough: 235, bump: 3 });
  FACADES.deck = makePlain({ base: 'membrane', tone: 200, tile: [10, 10], rough: 225 });
  // Plain maps carry no metal: the B channel of their ORM texture is zero.

  MATS.house = facadeMaterial(FACADES.house);
  MATS.apartment = facadeMaterial(FACADES.apartment);
  MATS.office = facadeMaterial(FACADES.office, { env: 1.3 });
  MATS.brick = facadeMaterial(FACADES.brick);
  MATS.siding = facadeMaterial(FACADES.siding, { metal: 0 });
  MATS.stucco = facadeMaterial(FACADES.stucco, { metal: 0 });
  MATS.metalClad = facadeMaterial(FACADES.metal, { metal: 0.35, env: 1.2 });
  MATS.shingle = facadeMaterial(FACADES.shingle, { metal: 0, bump: 1.2 });
  MATS.roofdeck = facadeMaterial(FACADES.deck, { metal: 0 });
  MATS.trim = new T.MeshStandardMaterial({ color: 0xffffff, roughness: 0.62, metalness: 0.02, vertexColors: true, envMapIntensity: 0.6 });
  // Shop and lobby interiors glow after dark behind the glass.
  MATS.interior = new T.MeshStandardMaterial({
    color: 0xffffff, roughness: 0.9, metalness: 0, vertexColors: true,
    emissive: 0xb58d5e, emissiveIntensity: 0
  });
  NIGHT_MATS.push(MATS.interior);
  MATS.storefront = new T.MeshPhysicalMaterial({
    color: 0x9fb3c2, roughness: 0.04, metalness: 0.2, transparent: true, opacity: 0.38,
    envMapIntensity: 1.8, depthWrite: false
  });
}

// ================================================================== batches
// A growable triangle soup for one material.
function Batch() { this.p = []; this.n = []; this.t = []; this.c = []; }

Batch.prototype.vert = function (x, y, z, nx, ny, nz, u, v, c) {
  this.p.push(x, y, z); this.n.push(nx, ny, nz); this.t.push(u, v); this.c.push(c[0], c[1], c[2]);
};

// Four corners (each [x,y,z]) with UVs; re-wound if needed so the front face
// points along `out`. cols is one colour or an array of four.
Batch.prototype.quad = function (P, UV, cols, out) {
  var a = P[0], b = P[1], c = P[2], d = P[3];
  var e1x = b[0] - a[0], e1y = b[1] - a[1], e1z = b[2] - a[2];
  var e2x = c[0] - a[0], e2y = c[1] - a[1], e2z = c[2] - a[2];
  var nx = e1y * e2z - e1z * e2y, ny = e1z * e2x - e1x * e2z, nz = e1x * e2y - e1y * e2x;
  var len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
  nx /= len; ny /= len; nz /= len;
  var multi = cols.length === 4 && cols[0].length === 3;
  var ca = multi ? cols[0] : cols, cb = multi ? cols[1] : cols, cc = multi ? cols[2] : cols, cd = multi ? cols[3] : cols;
  var ua = UV[0], ub = UV[1], uc = UV[2], ud = UV[3];
  if (nx * out[0] + ny * out[1] + nz * out[2] < 0) {
    // Reverse: a, d, c, b.
    nx = -nx; ny = -ny; nz = -nz;
    var t = b; b = d; d = t; t = ub; ub = ud; ud = t; t = cb; cb = cd; cd = t;
  }
  this.vert(a[0], a[1], a[2], nx, ny, nz, ua[0], ua[1], ca);
  this.vert(b[0], b[1], b[2], nx, ny, nz, ub[0], ub[1], cb);
  this.vert(c[0], c[1], c[2], nx, ny, nz, uc[0], uc[1], cc);
  this.vert(a[0], a[1], a[2], nx, ny, nz, ua[0], ua[1], ca);
  this.vert(c[0], c[1], c[2], nx, ny, nz, uc[0], uc[1], cc);
  this.vert(d[0], d[1], d[2], nx, ny, nz, ud[0], ud[1], cd);
};

Batch.prototype.tri = function (a, b, c, ua, ub, uc, col, out) {
  var e1x = b[0] - a[0], e1y = b[1] - a[1], e1z = b[2] - a[2];
  var e2x = c[0] - a[0], e2y = c[1] - a[1], e2z = c[2] - a[2];
  var nx = e1y * e2z - e1z * e2y, ny = e1z * e2x - e1x * e2z, nz = e1x * e2y - e1y * e2x;
  var len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
  nx /= len; ny /= len; nz /= len;
  if (nx * out[0] + ny * out[1] + nz * out[2] < 0) {
    nx = -nx; ny = -ny; nz = -nz;
    var t = b; b = c; c = t; t = ub; ub = uc; uc = t;
  }
  this.vert(a[0], a[1], a[2], nx, ny, nz, ua[0], ua[1], col);
  this.vert(b[0], b[1], b[2], nx, ny, nz, ub[0], ub[1], col);
  this.vert(c[0], c[1], c[2], nx, ny, nz, uc[0], uc[1], col);
};

Batch.prototype.geometry = function () {
  if (!this.p.length) return null;
  var g = new T.BufferGeometry();
  g.setAttribute('position', new T.BufferAttribute(new Float32Array(this.p), 3));
  g.setAttribute('normal', new T.BufferAttribute(new Float32Array(this.n), 3));
  g.setAttribute('uv', new T.BufferAttribute(new Float32Array(this.t), 2));
  g.setAttribute('color', new T.BufferAttribute(new Float32Array(this.c), 3));
  g.computeBoundingSphere();
  return g;
};

// A building's local frame: X along the street, Z toward/away from it.
// Uses the same rotateY convention as the rest of the world code.
function Frame(x, z, rot) {
  this.x = x; this.z = z; this.rot = rot;
  this.c = Math.cos(rot); this.s = Math.sin(rot);
}
Frame.prototype.wx = function (lx, lz) { return this.x + lx * this.c + lz * this.s; };
Frame.prototype.wz = function (lx, lz) { return this.z - lx * this.s + lz * this.c; };
Frame.prototype.p = function (lx, y, lz) { return [this.wx(lx, lz), y, this.wz(lx, lz)]; };
Frame.prototype.dir = function (lx, ly, lz) {
  return [lx * this.c + lz * this.s, ly, -lx * this.s + lz * this.c];
};


var _Z2 = [0, 0];
// Face bits for Batch.box(): skip faces that can never be seen (against a
// wall, inside the building, under a soffit) to keep the triangle count honest.
var SKIP_PX = 1, SKIP_NX = 2, SKIP_PZ = 4, SKIP_NZ = 8, SKIP_TOP = 16;
function backOf(face) { return face > 0 ? SKIP_NZ : SKIP_PZ; }

// Box in a frame's local coordinates. Bottom face only when asked for (most
// boxes sit on the ground or against a wall).
Batch.prototype.box = function (F, lx, y0, lz, w, h, d, col, bottom, tile, skip) {
  var hw = w / 2, hd = d / 2, y1 = y0 + h, sk = skip || 0;
  var P = function (x, y, z) { return F.p(lx + x, y, lz + z); };
  var tu = tile || 0;
  function uv(a, b) { return tu ? [a / tu, b / tu] : _Z2; }
  if (!(sk & SKIP_PX)) this.quad([P(hw, y0, -hd), P(hw, y0, hd), P(hw, y1, hd), P(hw, y1, -hd)],
    [uv(0, 0), uv(d, 0), uv(d, h), uv(0, h)], col, F.dir(1, 0, 0));
  if (!(sk & SKIP_NX)) this.quad([P(-hw, y0, hd), P(-hw, y0, -hd), P(-hw, y1, -hd), P(-hw, y1, hd)],
    [uv(0, 0), uv(d, 0), uv(d, h), uv(0, h)], col, F.dir(-1, 0, 0));
  if (!(sk & SKIP_PZ)) this.quad([P(hw, y0, hd), P(-hw, y0, hd), P(-hw, y1, hd), P(hw, y1, hd)],
    [uv(0, 0), uv(w, 0), uv(w, h), uv(0, h)], col, F.dir(0, 0, 1));
  if (!(sk & SKIP_NZ)) this.quad([P(-hw, y0, -hd), P(hw, y0, -hd), P(hw, y1, -hd), P(-hw, y1, -hd)],
    [uv(0, 0), uv(w, 0), uv(w, h), uv(0, h)], col, F.dir(0, 0, -1));
  if (!(sk & SKIP_TOP)) this.quad([P(-hw, y1, -hd), P(hw, y1, -hd), P(hw, y1, hd), P(-hw, y1, hd)],
    [uv(0, 0), uv(w, 0), uv(w, d), uv(0, d)], col, [0, 1, 0]);
  if (bottom) this.quad([P(-hw, y0, -hd), P(hw, y0, -hd), P(hw, y0, hd), P(-hw, y0, hd)],
    [uv(0, 0), uv(w, 0), uv(w, d), uv(0, d)], shade(col, 0.7), [0, -1, 0]);
};

// Wall from local (ax,az) to (bx,bz); the outward side is to the right of the
// a->b direction. Windowed facades snap to a whole number of bays so windows
// are never sliced at a corner; the bottom band is darkened to ground it.
Batch.prototype.wall = function (F, ax, az, bx, bz, y0, y1, fac, col, uvOff) {
  var A = F.p(ax, 0, az), B = F.p(bx, 0, bz);
  var dx = B[0] - A[0], dz = B[2] - A[2];
  var len = Math.sqrt(dx * dx + dz * dz) || 1;
  var out = [dz / len, 0, -dx / len];
  var u0 = uvOff ? uvOff[0] : 0, v0 = uvOff ? uvOff[1] : 0;
  var u1 = u0 + (fac.bw ? Math.max(1, Math.round(len / fac.bw)) / fac.bays : len / fac.tile[0]);
  function v(y) { return v0 + (y - y0) / fac.tile[1]; }
  var aoH = Math.min(1.6, (y1 - y0) * 0.45);
  var dark = shade(col, 0.66), mid = col;
  var ym = y0 + aoH;
  this.quad([[A[0], y0, A[2]], [B[0], y0, B[2]], [B[0], ym, B[2]], [A[0], ym, A[2]]],
    [[u0, v(y0)], [u1, v(y0)], [u1, v(ym)], [u0, v(ym)]], [dark, dark, mid, mid], out);
  this.quad([[A[0], ym, A[2]], [B[0], ym, B[2]], [B[0], y1, B[2]], [A[0], y1, A[2]]],
    [[u0, v(ym)], [u1, v(ym)], [u1, v(y1)], [u0, v(y1)]], mid, out);
};

// Closed rectangle of walls around a local centre.
Batch.prototype.shell = function (F, cx, cz, w, d, y0, y1, fac, col, uvOff) {
  var hw = w / 2, hd = d / 2;
  this.wall(F, cx - hw, cz - hd, cx + hw, cz - hd, y0, y1, fac, col, uvOff);
  this.wall(F, cx + hw, cz - hd, cx + hw, cz + hd, y0, y1, fac, col, uvOff);
  this.wall(F, cx + hw, cz + hd, cx - hw, cz + hd, y0, y1, fac, col, uvOff);
  this.wall(F, cx - hw, cz + hd, cx - hw, cz - hd, y0, y1, fac, col, uvOff);
};

// Flat horizontal quad (roof decks, soffits, driveways) in local coords.
Batch.prototype.flat = function (F, cx, y, cz, w, d, col, up, tile) {
  var hw = w / 2, hd = d / 2, t = tile || 0;
  var uv = function (a, b) { return t ? [a / t, b / t] : _Z2; };
  this.quad([F.p(cx - hw, y, cz - hd), F.p(cx + hw, y, cz - hd), F.p(cx + hw, y, cz + hd), F.p(cx - hw, y, cz + hd)],
    [uv(0, 0), uv(w, 0), uv(w, d), uv(0, d)], col, [0, up === false ? -1 : 1, 0]);
};

// Low vertical cylinder (silos, water tanks, columns).
Batch.prototype.cylinder = function (F, lx, y0, lz, r, h, seg, col, cap) {
  var cx = F.wx(lx, lz), cz = F.wz(lx, lz);
  for (var i = 0; i < seg; i++) {
    var a0 = (i / seg) * TAU, a1 = ((i + 1) / seg) * TAU;
    var x0 = cx + Math.cos(a0) * r, z0 = cz + Math.sin(a0) * r;
    var x1 = cx + Math.cos(a1) * r, z1 = cz + Math.sin(a1) * r;
    var am = (a0 + a1) / 2;
    this.quad([[x0, y0, z0], [x1, y0, z1], [x1, y0 + h, z1], [x0, y0 + h, z0]],
      [[i / seg * 4, 0], [(i + 1) / seg * 4, 0], [(i + 1) / seg * 4, h / 4], [i / seg * 4, h / 4]],
      col, [Math.cos(am), 0, Math.sin(am)]);
    if (cap) this.tri([cx, y0 + h + cap, cz], [x0, y0 + h, z0], [x1, y0 + h, z1], _Z2, _Z2, _Z2, shade(col, 0.92), [0, 1, 0]);
  }
};

// ===================================================================== roofs
// K.lod is 0 for chunks near the player and 1 for distant ones. Distant chunks
// keep every building, roof and silhouette but skip trim you cannot resolve
// from half a kilometre: soffits, rake and fascia boards, ridge caps, door
// surrounds, railings, parked cars. Nothing that consumes randomness is ever
// gated, so a chunk rebuilt at full detail comes back identical.

// Gable roof over a w x d rectangle (ridge along local X). The slope passes
// exactly through the wall tops, so the gable triangles close the ends flush;
// the overhang gets a soffit underneath and a fascia board along the eave.
function gableRoofB(K, F, cx, cz, w, d, yWall, rise, over, roofCol, wallCol, trimCol) {
  var hw = w / 2, hd = d / 2, pitch = rise / hd;
  var xr = hw + 0.35, ez = hd + over, yE = yWall - pitch * over, yR = yWall + rise;
  var sl = Math.hypot(ez, yR - yE), t = FACADES.shingle.tile[0];
  var P = function (x, y, z) { return F.p(cx + x, y, cz + z); };
  K.shingle.quad([P(-xr, yE, -ez), P(xr, yE, -ez), P(xr, yR, 0), P(-xr, yR, 0)],
    [[0, 0], [2 * xr / t, 0], [2 * xr / t, sl / t], [0, sl / t]], roofCol, F.dir(0, 1, -0.6));
  K.shingle.quad([P(xr, yE, ez), P(-xr, yE, ez), P(-xr, yR, 0), P(xr, yR, 0)],
    [[0, 0], [2 * xr / t, 0], [2 * xr / t, sl / t], [0, sl / t]], roofCol, F.dir(0, 1, 0.6));
  var st = FACADES.siding.tile[0];
  [1, -1].forEach(function (sx) {
    K.siding.tri(P(sx * hw, yWall, -hd), P(sx * hw, yWall, hd), P(sx * hw, yR - 0.02, 0),
      [0, 0], [d / st, 0], [d / 2 / st, rise / st], wallCol, F.dir(sx, 0, 0));
  });
  if (K.lod) return;
  // soffits (the underside of each slope)
  var dy = -0.09;
  K.trim.quad([P(-xr, yE + dy, -ez), P(xr, yE + dy, -ez), P(xr, yR + dy, 0), P(-xr, yR + dy, 0)],
    [_Z2, _Z2, _Z2, _Z2], trimCol, F.dir(0, -1, 0.6));
  K.trim.quad([P(xr, yE + dy, ez), P(-xr, yE + dy, ez), P(-xr, yR + dy, 0), P(xr, yR + dy, 0)],
    [_Z2, _Z2, _Z2, _Z2], trimCol, F.dir(0, -1, -0.6));
  // rake boards along the sloped edges
  [1, -1].forEach(function (sx) {
    K.trim.quad([P(sx * xr, yE, -ez), P(sx * xr, yR, 0), P(sx * xr, yR - 0.24, 0), P(sx * xr, yE - 0.24, -ez)],
      [_Z2, _Z2, _Z2, _Z2], trimCol, F.dir(sx, 0, 0));
    K.trim.quad([P(sx * xr, yE, ez), P(sx * xr, yR, 0), P(sx * xr, yR - 0.24, 0), P(sx * xr, yE - 0.24, ez)],
      [_Z2, _Z2, _Z2, _Z2], trimCol, F.dir(sx, 0, 0));
  });
  // fascia boards and ridge cap
  K.trim.box(F, cx, yE - 0.24, cz - ez, 2 * xr, 0.26, 0.07, trimCol, true, 0, SKIP_TOP);
  K.trim.box(F, cx, yE - 0.24, cz + ez, 2 * xr, 0.26, 0.07, trimCol, true, 0, SKIP_TOP);
  K.shingle.box(F, cx, yR - 0.06, cz, 2 * xr, 0.14, 0.34, shade(roofCol, 0.8), false);
}

// Hip roof: slopes on all four sides meeting at a short ridge.
function hipRoofB(K, F, cx, cz, w, d, yWall, rise, over, roofCol, trimCol) {
  var hw = w / 2, hd = d / 2, pitch = rise / hd;
  var ex = hw + over, ez = hd + over, yE = yWall - pitch * over, yR = yWall + rise;
  var rx = Math.max(0.01, hw - hd);
  var t = FACADES.shingle.tile[0];
  var P = function (x, y, z) { return F.p(cx + x, y, cz + z); };
  var sl = Math.hypot(ez, yR - yE) / t;
  K.shingle.quad([P(-ex, yE, -ez), P(ex, yE, -ez), P(rx, yR, 0), P(-rx, yR, 0)],
    [[0, 0], [2 * ex / t, 0], [(ex + rx) / t, sl], [(ex - rx) / t, sl]], roofCol, F.dir(0, 1, -0.6));
  K.shingle.quad([P(ex, yE, ez), P(-ex, yE, ez), P(-rx, yR, 0), P(rx, yR, 0)],
    [[0, 0], [2 * ex / t, 0], [(ex + rx) / t, sl], [(ex - rx) / t, sl]], roofCol, F.dir(0, 1, 0.6));
  K.shingle.tri(P(ex, yE, -ez), P(ex, yE, ez), P(rx, yR, 0), [0, 0], [2 * ez / t, 0], [ez / t, sl], roofCol, F.dir(0.6, 1, 0));
  K.shingle.tri(P(-ex, yE, ez), P(-ex, yE, -ez), P(-rx, yR, 0), [0, 0], [2 * ez / t, 0], [ez / t, sl], roofCol, F.dir(-0.6, 1, 0));
  if (K.lod) return;
  // Soffit: one flat panel under the whole overhang ring, fascia around it.
  K.trim.flat(F, cx, yE - 0.02, cz, 2 * ex, 2 * ez, trimCol, false);
  K.trim.box(F, cx, yE - 0.26, cz - ez, 2 * ex, 0.26, 0.07, trimCol, true, 0, SKIP_TOP);
  K.trim.box(F, cx, yE - 0.26, cz + ez, 2 * ex, 0.26, 0.07, trimCol, true, 0, SKIP_TOP);
  K.trim.box(F, cx - ex, yE - 0.26, cz, 0.07, 0.26, 2 * ez, trimCol, true, 0, SKIP_TOP);
  K.trim.box(F, cx + ex, yE - 0.26, cz, 0.07, 0.26, 2 * ez, trimCol, true, 0, SKIP_TOP);
  if (rx > 0.2) K.shingle.box(F, cx, yR - 0.06, cz, 2 * rx, 0.14, 0.34, shade(roofCol, 0.8), false);
}

// Parapet ring around a flat roof (front edge can be taller: a false front).
function parapetB(K, F, cx, cz, w, d, yTop, h, thick, col, face, frontExtra) {
  var hw = w / 2, hd = d / 2;
  var fh = h + (frontExtra || 0), bh = h;
  K.trim.box(F, cx, yTop, cz + hd - thick / 2, w, face > 0 ? fh : bh, thick, col, false);
  K.trim.box(F, cx, yTop, cz - hd + thick / 2, w, face < 0 ? fh : bh, thick, col, false);
  K.trim.box(F, cx - hw + thick / 2, yTop, cz, thick, bh, d - thick * 2, col, false);
  K.trim.box(F, cx + hw - thick / 2, yTop, cz, thick, bh, d - thick * 2, col, false);
  if (K.lod) return;
  // coping cap
  K.trim.box(F, cx, yTop + (face > 0 ? fh : bh), cz + hd - thick / 2, w + 0.1, 0.1, thick + 0.12, shade(col, 1.08), false);
  K.trim.box(F, cx, yTop + (face < 0 ? fh : bh), cz - hd + thick / 2, w + 0.1, 0.1, thick + 0.12, shade(col, 1.08), false);
}

function rooftopUnits(K, F, cx, cz, w, d, yTop, rng, n) {
  for (var i = 0; i < n; i++) {
    var uw = 1.6 + rng() * 2.4, ud = 1.4 + rng() * 2, uh = 0.9 + rng() * 1.1;
    var ux = cx + (rng() - 0.5) * (w - uw - 2), uz = cz + (rng() - 0.5) * (d - ud - 2);
    var c = rgb([0xa9aeb3, 0xbfc3c7, 0x8e9499][(rng() * 3) | 0]);
    K.trim.box(F, ux, yTop, uz, uw, uh, ud, c, false);
    if (!K.lod) K.trim.box(F, ux, yTop + uh, uz, uw * 0.5, 0.25, ud * 0.5, shade(c, 0.7), false);   // fan housing
  }
}

// Colliders are queued on the batch set and only registered once the chunk
// builder accepts the building (a rejected footprint is rolled back). Detail
// colliders (parked cars, trailers) belong to full-detail chunks only.
function queueCol(K, x, z, hw, hd, rot, h, detail) { K.col.push([x, z, hw, hd, rot, h, !!detail]); }

// =============================================================== parked cars
function parkedCar(K, wx, wz, rot, rng) {
  // All randomness first, so distant chunks consume exactly the same numbers.
  var col = pickCol(CAR_COLS, rng);
  var tall = rng() < 0.3;                         // SUV / pickup silhouettes
  var L = tall ? 4.9 : 4.5, W = tall ? 1.95 : 1.82;
  queueCol(K, wx, wz, W / 2, L / 2, rot, 1.6, true);
  if (K.lod) return;
  var F = new Frame(wx, wz, rot);
  var bodyH = tall ? 0.95 : 0.72, y0 = 0.32;
  var glass = rgb(0x1e2730), tyre = rgb(0x151719), bumper = rgb(0x2a2d31);
  var cabH = tall ? 0.78 : 0.6, cabL = L * (tall ? 0.62 : 0.5);
  K.car.box(F, 0, y0, 0, W, bodyH, L, col, false);
  K.car.box(F, 0, y0 + bodyH, -L * 0.06, W * 0.9, cabH, cabL, glass, false, 0, SKIP_TOP);
  K.car.box(F, 0, y0 + bodyH + cabH, -L * 0.06, W * 0.86, 0.06, cabL * 0.94, col, false);
  K.car.box(F, 0, y0, L / 2, W * 1.01, 0.26, 0.12, bumper, false);
  K.car.box(F, 0, y0, -L / 2, W * 1.01, 0.26, 0.12, bumper, false);
  for (var sx = -1; sx <= 1; sx += 2) for (var sz = -1; sz <= 1; sz += 2) {
    K.car.box(F, sx * (W / 2 - 0.1), 0, sz * L * 0.32, 0.26, 0.62, 0.64, tyre, false, 0,
      SKIP_TOP | (sx > 0 ? SKIP_NX : SKIP_PX));
  }
}

// ================================================================= the kit
// Every generator takes: K (batches), x/z/rot (world placement, local X along
// the street), rng, face (+1 if the street is on local +Z, else -1) and
// setback (metres from the building centre to the road edge). It returns the
// footprint {hw, hd, cx} the chunk builder uses to reject overlaps.

function genHouse(K, x, z, rot, rng, face, setback) {
  var F = new Frame(x, z, rot);
  var two = rng() < 0.38;
  var w = 10.5 + rng() * 4.5, d = 8.2 + rng() * 3.4;
  var plH = 0.5, wallTop = plH + (two ? 6.0 : 3.0);
  var wallC = pickCol(HOUSE_COLS, rng), roofC = pickCol(ROOF_COLS, rng), trimC = rgb(TRIM);
  var fac = FACADES.house;
  var uvOff = [((rng() * fac.bays) | 0) / fac.bays, two ? 0 : ((rng() * 2) | 0) / 2];
  var hd = d / 2, fz = face * hd, back = backOf(face);

  // Garage on one side decides where the house body sits.
  var hasGarage = rng() < 0.78, gSide = rng() < 0.5 ? 1 : -1;
  var gw = 6.4, gd = 7.0;

  K.trim.box(F, 0, 0, 0, w + 0.35, plH, d + 0.35, rgb(0x8d8983), false);          // foundation
  K.house.shell(F, 0, 0, w, d, plH, wallTop, fac, wallC, uvOff);
  var rise = (two ? 2.4 : 2.1) + rng() * 1.2;
  var hip = rng() < 0.4;
  if (hip) hipRoofB(K, F, 0, 0, w, d, wallTop, rise, 0.55, roofC, trimC);
  else gableRoofB(K, F, 0, 0, w, d, wallTop, rise, 0.55, roofC, wallC, trimC);

  if (!K.lod) {
    // Corner boards and, on two-storey houses, a belly band between floors.
    [-1, 1].forEach(function (sx) {
      [-1, 1].forEach(function (sz) {
        K.trim.box(F, sx * (w / 2 - 0.02), plH, sz * (hd - 0.02), 0.2, wallTop - plH, 0.2, trimC, false, 0,
          SKIP_TOP | (sx > 0 ? SKIP_NX : SKIP_PX) | (sz > 0 ? SKIP_NZ : SKIP_PZ));
      });
    });
    if (two) K.trim.box(F, 0, plH + 2.95, 0, w + 0.1, 0.18, d + 0.1, trimC, true);
  }

  // Front door, surround and stoop.
  var doorX = (rng() - 0.5) * w * 0.35 - gSide * w * 0.12;
  var doorC = pickCol(DOOR_COLS, rng);
  K.trim.box(F, doorX, plH + 0.05, fz + face * 0.1, 1.05, 2.2, 0.08, doorC, false, 0, back);
  if (!K.lod) {
    K.trim.box(F, doorX, plH, fz + face * 0.05, 1.5, 2.55, 0.1, trimC, false, 0, back);
    K.trim.box(F, doorX + 0.36, plH + 1.05, fz + face * 0.16, 0.08, 0.08, 0.08, rgb(0xc9a24a), false, 0, back);
    K.trim.box(F, doorX, 0, fz + face * 0.85, 2.0, plH - 0.02, 1.5, rgb(0xa8a49c), false, 0, back);
    K.trim.box(F, doorX, 0, fz + face * 1.75, 1.6, plH * 0.55, 0.4, rgb(0xa8a49c), false);
  }

  // Front porch with posts and its own little roof.
  if (rng() < 0.34) {
    var pw = Math.min(w * 0.55, 5.2), pz = fz + face * 1.3;
    K.trim.box(F, doorX, 0, pz, pw, plH, 2.6, rgb(0xa39f97), false, 0, back);
    [-1, 1].forEach(function (sx) {
      K.trim.box(F, doorX + sx * (pw / 2 - 0.2), plH, pz + face * 1.1, 0.2, 2.55, 0.2, trimC, false, 0, SKIP_TOP);
    });
    K.trim.box(F, doorX, plH + 2.55, pz, pw + 0.4, 0.2, 2.9, trimC, true, 0, back);
    K.shingle.box(F, doorX, plH + 2.75, pz, pw + 0.5, 0.14, 3.0, roofC, false, 0, back);
  }

  // Chimney, standing on the ridge so it clears the roof by a believable metre.
  if (rng() < 0.55) {
    var cSide = rng() < 0.5 ? -1 : 1, cz0 = rng();          // (second draw kept for layout stability)
    var rx = hip ? Math.max(0, w / 2 - hd) : w / 2 - 1.2;
    if (!hip || rx > 1.4) {
      var cxh = cSide * (hip ? rx * 0.6 : rx);
      var cTop = wallTop + rise + 0.8;
      K.trim.box(F, cxh, wallTop - 0.5, 0, 1.0, cTop - (wallTop - 0.5), 1.0, rgb(0x8e5a47), false);
      if (!K.lod) K.trim.box(F, cxh, cTop, 0, 1.18, 0.16, 1.18, rgb(0x6f6a64), false);
    }
  }

  var gx = gSide * (w / 2 + gw / 2 - 0.25);
  if (hasGarage) {
    var gTop = plH * 0.3 + 3.0;
    K.trim.box(F, gx, 0, 0, gw + 0.3, plH * 0.3, gd + 0.3, rgb(0x8d8983), false);
    K.siding.shell(F, gx, 0, gw, gd, plH * 0.3, gTop, FACADES.siding, wallC, null);
    gableRoofB(K, F, gx, 0, gw, gd, gTop, 1.4, 0.4, roofC, wallC, trimC);
    // Sectional garage door with panel lines.
    var gdz = face * (gd / 2 + 0.04);
    K.trim.box(F, gx, plH * 0.3, gdz + face * 0.05, gw * 0.76, 2.2, 0.06, rgb(0xe2e0da), false, 0, back);
    if (!K.lod) {
      K.trim.box(F, gx, plH * 0.3, gdz, gw * 0.84, 2.4, 0.1, trimC, false, 0, back);
      for (var gl = 1; gl < 4; gl++) {
        K.trim.box(F, gx, plH * 0.3 + gl * 0.55, gdz + face * 0.09, gw * 0.76, 0.04, 0.03, rgb(0xb9b6ae), false, 0, back);
      }
    }
    // Driveway out to the street, and often a car on it.
    var drvLen = Math.max(3, setback - gd / 2 - 0.05);
    var drvZ = face * (gd / 2 + drvLen / 2);
    K.trim.flat(F, gx, 0.035, drvZ, gw * 0.9, drvLen, rgb(0x9c9a95), true);
    queueCol(K, F.wx(gx, 0), F.wz(gx, 0), gw / 2, gd / 2, rot, gTop);
    if (Q.detailProps && rng() < 0.5) {
      var carZ = face * (gd / 2 + 3.4 + rng() * Math.max(0, drvLen - 7));
      parkedCar(K, F.wx(gx, carZ), F.wz(gx, carZ), rot + (rng() < 0.5 ? 0 : PI), rng);
    }
  }
  if (!K.lod) {
    // Front walk from the stoop to the sidewalk.
    var walkLen = Math.max(1, setback - hd - 2.0);
    K.trim.flat(F, doorX, 0.03, fz + face * (2.0 + walkLen / 2), 1.2, walkLen, rgb(0xa19e98), true);
  }

  queueCol(K, x, z, w / 2, hd, rot, wallTop + rise);
  return { hw: w / 2 + (hasGarage ? gw : 0), hd: hd, cx: hasGarage ? gSide * gw / 2 : 0 };
}

function genTownhome(K, x, z, rot, rng, face, setback) {
  var F = new Frame(x, z, rot);
  var units = 3 + ((rng() * 3) | 0), uw = 6.8, d = 11.5, plH = 0.5, top = plH + 6.0;
  var w = units * uw, hd = d / 2, fz = face * hd, back = backOf(face);
  var fac = FACADES.house, trimC = rgb(TRIM), roofC = pickCol(ROOF_COLS, rng);
  var baseC = pickCol(HOUSE_COLS, rng);
  K.trim.box(F, 0, 0, 0, w + 0.35, plH, d + 0.35, rgb(0x8d8983), false);
  // Each unit gets its own colour on the street face; sides and back match.
  for (var u = 0; u < units; u++) {
    var ux0 = -w / 2 + u * uw, ux1 = ux0 + uw, ucx = (ux0 + ux1) / 2;
    var uc = u % 2 ? shade(baseC, 0.86) : baseC;
    if (face > 0) K.house.wall(F, ux1, hd, ux0, hd, plH, top, fac, uc, [u / fac.bays, 0]);
    else K.house.wall(F, ux0, -hd, ux1, -hd, plH, top, fac, uc, [u / fac.bays, 0]);
    var dx = ucx + (u % 2 ? 1.4 : -1.4), doorC = pickCol(DOOR_COLS, rng);
    K.trim.box(F, dx, plH + 0.05, fz + face * 0.1, 1.0, 2.2, 0.08, doorC, false, 0, back);
    K.trim.box(F, dx, plH + 2.6, fz + face * 0.55, 1.8, 0.14, 1.2, trimC, true, 0, back);     // door hood
    if (u > 0) K.trim.box(F, ux0, plH, fz, 0.35, top - plH + 0.3, 0.3, trimC, false, 0, back); // party-wall pilaster
    if (u % 2 === 0) K.trim.box(F, ucx, top - 1, 0, 0.9, 3.6, 0.9, rgb(0x8e5a47), false);
    if (!K.lod) {
      K.trim.box(F, dx, plH, fz + face * 0.05, 1.4, 2.5, 0.1, trimC, false, 0, back);
      K.trim.box(F, dx, 0, fz + face * 0.85, 1.8, plH - 0.02, 1.5, rgb(0xa8a49c), false, 0, back);
      var walk = Math.max(1, setback - hd - 2);
      K.trim.flat(F, dx, 0.03, fz + face * (1.6 + walk / 2), 1.1, walk, rgb(0xa19e98), true);
    }
    if (Q.detailProps && setback - hd > 7 && rng() < 0.4) {
      var pz = face * (hd + 3.6);
      K.trim.flat(F, ucx + 1.6, 0.034, pz, 2.8, 5.6, rgb(0x9c9a95), true);
      parkedCar(K, F.wx(ucx + 1.6, pz), F.wz(ucx + 1.6, pz), rot + (rng() < 0.5 ? 0 : PI), rng);
    }
  }
  if (face > 0) K.house.wall(F, -w / 2, -hd, w / 2, -hd, plH, top, fac, baseC, null);
  else K.house.wall(F, w / 2, hd, -w / 2, hd, plH, top, fac, baseC, null);
  K.house.wall(F, w / 2, -hd, w / 2, hd, plH, top, fac, baseC, null);
  K.house.wall(F, -w / 2, hd, -w / 2, -hd, plH, top, fac, baseC, null);
  gableRoofB(K, F, 0, 0, w, d, top, 2.6, 0.5, roofC, baseC, trimC);
  queueCol(K, x, z, w / 2, hd, rot, top + 2.6);
  return { hw: w / 2, hd: hd, cx: 0 };
}

function genApartment(K, x, z, rot, rng, face, setback) {
  var F = new Frame(x, z, rot);
  var fac = FACADES.apartment;
  var floors = 3 + ((rng() * 3) | 0), plH = 0.6, top = plH + floors * fac.fh;
  var bays = 8 + ((rng() * 7) | 0), w = bays * fac.bw, d = 15 + rng() * 7, hd = d / 2, fz = face * hd;
  var wallC = pickCol([0xd8cfc4, 0xc9b39b, 0xb89b83, 0xe0d8cc, 0xa98c78, 0xcfc8bd], rng);
  var trimC = rgb(0xe9e6de), railC = rgb(0x3b3f44), back = backOf(face);
  var uvOff = [((rng() * fac.bays) | 0) / fac.bays, ((rng() * fac.floors) | 0) / fac.floors];
  K.trim.box(F, 0, 0, 0, w + 0.4, plH, d + 0.4, rgb(0x98948c), false);
  K.apartment.shell(F, 0, 0, w, d, plH, top, fac, wallC, uvOff);
  // Floor bands.
  for (var f = 1; f < floors; f++) K.trim.box(F, 0, plH + f * fac.fh - 0.12, 0, w + 0.24, 0.24, d + 0.24, trimC, true);
  // Balconies on the doors (every other bay, from the first floor up).
  for (f = 1; f < floors; f++) {
    for (var b = 0; b < bays; b++) {
      if ((b + Math.round(uvOff[0] * fac.bays)) % 2 !== 1) continue;
      var bx = -w / 2 + (b + 0.5) * fac.bw, by = plH + f * fac.fh;
      var bz = fz + face * 0.75;
      K.trim.box(F, bx, by - 0.2, bz, fac.bw * 0.86, 0.2, 1.5, trimC, true, 0, back);
      if (K.lod) continue;
      K.trim.box(F, bx, by, fz + face * 1.47, fac.bw * 0.86, 1.0, 0.05, railC, false);
      K.trim.box(F, bx - fac.bw * 0.42, by, bz, 0.05, 1.0, 1.5, railC, false, 0, back);
      K.trim.box(F, bx + fac.bw * 0.42, by, bz, 0.05, 1.0, 1.5, railC, false, 0, back);
    }
  }
  // Flat roof, parapet, plant, stair penthouse.
  K.roofdeck.flat(F, 0, top, 0, w, d, rgb(0x9a9ca0), true, FACADES.deck.tile[0]);
  parapetB(K, F, 0, 0, w, d, top, 0.9, 0.35, trimC, face, 0);
  rooftopUnits(K, F, 0, 0, w, d, top, rng, 2 + ((rng() * 3) | 0));
  K.stucco.shell(F, w * 0.2, 0, 4, 4, top, top + 2.8, FACADES.stucco, wallC, null);
  K.roofdeck.flat(F, w * 0.2, top + 2.8, 0, 4, 4, rgb(0x8a8c90), true, 4);
  // Entrance canopy and doors.
  K.trim.box(F, 0, plH + 2.9, fz + face * 1.3, 4.8, 0.3, 2.6, trimC, true, 0, back);
  K.trim.box(F, 0, plH, fz + face * 0.06, 2.8, 2.6, 0.12, rgb(0x2d343c), false, 0, back);
  if (!K.lod) {
    [-1, 1].forEach(function (sx) { K.trim.box(F, sx * 2.1, 0, fz + face * 2.4, 0.22, plH + 2.9, 0.22, railC, false, 0, SKIP_TOP); });
    K.trim.box(F, 0, 0, fz + face * 1.6, 5.2, plH - 0.02, 3.2, rgb(0xa8a49c), false, 0, back);
  }
  // Residents' parking between the building and the street.
  var lotD = setback - hd - 7;
  if (lotD > 6) {
    K.lot.flat(F, 0, 0.036, fz + face * (4 + lotD / 2), w, lotD, [1, 1, 1], true, 1);
    if (Q.detailProps) {
      var n = Math.floor(w / 2.9);
      for (var c = 0; c < n; c++) {
        var cx = -w / 2 + 1.45 + c * 2.9;
        if (rng() > 0.5 || Math.abs(cx) < 3.2) continue;
        var cz = fz + face * (4 + 2.8);
        parkedCar(K, F.wx(cx, cz), F.wz(cx, cz), rot + (rng() < 0.5 ? 0 : PI), rng);
      }
    }
  }
  queueCol(K, x, z, w / 2, hd, rot, top);
  return { hw: w / 2, hd: hd, cx: 0 };
}

// Strip retail: recessed glass shopfronts between pilasters, lit interiors,
// awnings and signs on a false-front parapet, with parking out front.
function genStrip(K, x, z, rot, rng, face, setback) {
  var F = new Frame(x, z, rot);
  var stores = 3 + ((rng() * 5) | 0), sw = 7 + rng() * 3.5, w = stores * sw;
  var d = 17 + rng() * 7, hd = d / 2, fz = face * hd;
  var h = 5.4 + rng() * 1.8, sh = 4.0, rec = 1.1;          // storefront height, recess depth
  var wallC = pickCol([0xd8cfbc, 0xc6ccd0, 0xd4c0aa, 0xbfc9bd, 0xe3dccf, 0xb9aa98], rng);
  var trimC = rgb(0xe8e4db), darkC = rgb(0x2f343a);
  var fac = FACADES.stucco, back = backOf(face);
  // Back and side walls full height; the street wall only above the shopfronts.
  var hw = w / 2;
  if (face > 0) {
    K.stucco.wall(F, -hw, -hd, hw, -hd, 0.15, h, fac, wallC, null);
    K.stucco.wall(F, hw, hd, -hw, hd, sh, h, fac, wallC, null);
  } else {
    K.stucco.wall(F, hw, hd, -hw, hd, 0.15, h, fac, wallC, null);
    K.stucco.wall(F, -hw, -hd, hw, -hd, sh, h, fac, wallC, null);
  }
  K.stucco.wall(F, hw, -hd, hw, hd, 0.15, h, fac, wallC, null);
  K.stucco.wall(F, -hw, hd, -hw, -hd, 0.15, h, fac, wallC, null);
  K.trim.box(F, 0, 0, 0, w + 0.3, 0.15, d + 0.3, rgb(0x9a968e), false);
  // Recessed shopfront: glass line, soffit above it, and the shop interior.
  var gz = fz - face * rec;
  var gA = face > 0 ? [hw, gz] : [-hw, gz], gB = face > 0 ? [-hw, gz] : [hw, gz];
  K.glass.wall(F, gA[0], gA[1], gB[0], gB[1], 0.15, sh, { tile: [4, 4] }, [1, 1, 1], null);
  K.trim.flat(F, 0, sh - 0.02, fz - face * rec / 2, w, rec, shade(trimC, 0.85), false);
  var iz = gz - face * 3.2;
  var iA = face > 0 ? [hw, iz] : [-hw, iz], iB = face > 0 ? [-hw, iz] : [hw, iz];
  K.interior.wall(F, iA[0], iA[1], iB[0], iB[1], 0.15, sh, { tile: [4, 4] }, rgb(0x5b5047), null);
  K.interior.flat(F, 0, sh - 0.05, (gz + iz) / 2, w, 3.2, rgb(0x6b645c), false);
  // Store divisions: pilasters, doors, mullions, awnings, signs.
  for (var s = 0; s < stores; s++) {
    var s0 = -hw + s * sw, scx = s0 + sw / 2;
    var awC = pickCol(AWNING_COLS, rng), sign = signUV((rng() * SIGN_ATLAS.stores) | 0);
    K.trim.box(F, s0 + 0.3, 0.15, fz - face * rec / 2, 0.6, sh - 0.15, rec, wallC, false, 0, SKIP_TOP);
    if (s === stores - 1) K.trim.box(F, hw - 0.3, 0.15, fz - face * rec / 2, 0.6, sh - 0.15, rec, wallC, false, 0, SKIP_TOP);
    K.trim.box(F, scx, sh - 0.55, fz + face * 0.7, sw * 0.82, 0.22, 1.5, awC, true, 0, back);
    if (!K.lod) {
      var inner = [s0 + 1.2, s0 + sw / 2, s0 + sw - 1.2];
      for (var m = 0; m < inner.length; m++) K.trim.box(F, inner[m], 0.15, gz + face * 0.03, 0.09, sh - 0.15, 0.08, darkC, false, 0, back);
      K.trim.box(F, scx - sw * 0.2, 0.15, gz + face * 0.05, 1.9, 2.4, 0.07, darkC, false, 0, back);   // door frame
      K.trim.box(F, scx, sh - 0.85, fz + face * 1.42, sw * 0.82, 0.32, 0.06, awC, true);             // valance
    }
    // Sign panel on the upper band, one row of the signage sheet per store.
    var sy0 = sh + 0.35, sy1 = Math.min(h - 0.3, sh + 1.45);
    var sx0 = scx - sw * 0.33, sx1 = scx + sw * 0.33, sz = fz + face * 0.06;
    var SA = F.p(face > 0 ? sx1 : sx0, sy0, sz), SB = F.p(face > 0 ? sx0 : sx1, sy0, sz);
    var SC = F.p(face > 0 ? sx0 : sx1, sy1, sz), SD = F.p(face > 0 ? sx1 : sx0, sy1, sz);
    // SA sits on the viewer's right when facing the shop, so it takes the
    // right-hand edge of the lettering.
    K.sign.quad([SA, SB, SC, SD], [[sign[1], sign[2]], [sign[0], sign[2]], [sign[0], sign[3]], [sign[1], sign[3]]],
      [1, 1, 1], F.dir(0, 0, face));
  }
  // Roof, false-front parapet, plant.
  K.roofdeck.flat(F, 0, h, 0, w, d, rgb(0x96989c), true, FACADES.deck.tile[0]);
  parapetB(K, F, 0, 0, w, d, h, 0.8, 0.3, wallC, face, 1.1);
  rooftopUnits(K, F, 0, 0, w, d, h, rng, Math.min(6, 1 + stores));
  // Walkway and a row of parking in front.
  K.trim.box(F, 0, 0, fz + face * 1.5, w, 0.16, 3.0, rgb(0xa9a59d), false, 0, back);
  var lotD = Math.max(0, setback - hd - 6.4);
  if (lotD > 6) {
    K.lot.flat(F, 0, 0.036, fz + face * (3.0 + lotD / 2), w, lotD, [1, 1, 1], true, 1);
    if (Q.detailProps) {
      var stalls = Math.floor(w / 2.9);
      for (var c = 0; c < stalls; c++) {
        if (rng() > 0.55) continue;
        var cx = -hw + 1.45 + c * 2.9, cz = fz + face * (3.0 + 2.8);
        parkedCar(K, F.wx(cx, cz), F.wz(cx, cz), rot + (rng() < 0.5 ? 0 : PI), rng);
      }
    }
  }
  queueCol(K, x, z, hw, hd, rot, h);
  return { hw: hw, hd: hd, cx: 0 };
}

function genOffice(K, x, z, rot, rng, face, setback) {
  var F = new Frame(x, z, rot);
  var fac = FACADES.office;
  var floors = 2 + ((rng() * 4) | 0), plH = 0.5, top = plH + floors * fac.fh;
  var w = (12 + ((rng() * 10) | 0)) * fac.bw, d = 18 + rng() * 10, hd = d / 2, fz = face * hd;
  var tint = pickCol([0xb7c3cd, 0xa8b4bf, 0xc9ccc8, 0x9aa7b3, 0xbcc6c2], rng);
  var trimC = rgb(0xcfd3d6), back = backOf(face);
  K.trim.box(F, 0, 0, 0, w + 0.5, plH, d + 0.5, rgb(0x8f8c86), false);
  K.office.shell(F, 0, 0, w, d, plH, top, fac, tint, [((rng() * 6) | 0) / 6, 0]);
  // Vertical fins on the street face and a heavy cornice.
  for (var fx = -w / 2 + fac.bw * 2; fx < w / 2 - 0.1; fx += fac.bw * 2) {
    K.trim.box(F, fx, plH, fz + face * 0.25, 0.16, top - plH, 0.5, trimC, false, 0, back | SKIP_TOP);
  }
  K.trim.box(F, 0, top, 0, w + 0.6, 0.5, d + 0.6, trimC, true);
  K.roofdeck.flat(F, 0, top + 0.5, 0, w, d, rgb(0x8c8e92), true, FACADES.deck.tile[0]);
  parapetB(K, F, 0, 0, w + 0.2, d + 0.2, top + 0.5, 0.7, 0.3, trimC, face, 0);
  // Mechanical penthouse.
  K.metalClad.shell(F, -w * 0.15, 0, w * 0.3, d * 0.4, top + 0.5, top + 3.6, FACADES.metal, rgb(0xb7bcc1), null);
  K.roofdeck.flat(F, -w * 0.15, top + 3.6, 0, w * 0.3, d * 0.4, rgb(0x7f8185), true, 6);
  rooftopUnits(K, F, w * 0.25, 0, w * 0.4, d * 0.8, top + 0.5, rng, 2);
  // Entrance canopy over a dark glazed door.
  K.trim.box(F, 0, plH + 3.2, fz + face * 1.8, 7, 0.35, 3.6, trimC, true, 0, back);
  K.trim.box(F, 0, plH, fz + face * 0.08, 4.2, 3.0, 0.14, rgb(0x2b3540), false, 0, back);
  if (!K.lod) {
    [-1, 1].forEach(function (sx) { K.trim.box(F, sx * 3.2, 0, fz + face * 3.4, 0.3, plH + 3.2, 0.3, trimC, false, 0, SKIP_TOP); });
    K.trim.box(F, 0, 0, fz + face * 2.2, 7.4, plH - 0.02, 4.4, rgb(0xa8a49c), false, 0, back);
  }
  var lotD = setback - hd - 9;
  if (lotD > 6) {
    K.lot.flat(F, 0, 0.036, fz + face * (6 + lotD / 2), w, lotD, [1, 1, 1], true, 1);
    if (Q.detailProps) {
      var n = Math.floor(w / 2.9);
      for (var c = 0; c < n; c++) {
        var cx = -w / 2 + 1.45 + c * 2.9;
        if (rng() > 0.5 || Math.abs(cx) < 4.5) continue;
        var cz = fz + face * (6 + 2.8);
        parkedCar(K, F.wx(cx, cz), F.wz(cx, cz), rot + (rng() < 0.5 ? 0 : PI), rng);
      }
    }
  }
  queueCol(K, x, z, w / 2, hd, rot, top);
  return { hw: w / 2, hd: hd + 3.5, cx: 0 };
}

function genWarehouse(K, x, z, rot, rng, face, setback) {
  var F = new Frame(x, z, rot);
  var w = 50 + rng() * 60, d = 32 + rng() * 26, h = 8.5 + rng() * 3, hd = d / 2, fz = face * hd;
  var col = pickCol([0xc4c8cb, 0xb6bcc0, 0xd2d0c8, 0x9fa9b0, 0xc9c0ae], rng);
  var trimC = rgb(0x5c6570);
  K.trim.box(F, 0, 0, 0, w + 0.3, 0.9, d + 0.3, rgb(0x96928a), false);            // tilt-up base
  K.metalClad.shell(F, 0, 0, w, d, 0.9, h, FACADES.metal, col, null);
  K.trim.box(F, 0, h, 0, w + 0.3, 0.4, d + 0.3, trimC, true);
  K.roofdeck.flat(F, 0, h + 0.4, 0, w, d, rgb(0xa2a4a7), true, FACADES.deck.tile[0]);
  // Skylights.
  for (var s = -2; s <= 2; s++) K.trim.box(F, s * w * 0.16, h + 0.4, 0, 2.4, 0.5, d * 0.5, rgb(0xcfe0ea), false);
  // Loading docks on the back, the office on the street end.
  var back = -face * hd, backSkip = backOf(-face);
  var docks = Math.max(3, Math.floor(w / 9));
  K.trim.flat(F, 0, 0.034, back - face * 13, w, 26, rgb(0x46494e), true);           // truck court
  for (var i = 0; i < docks; i++) {
    var dx = -w / 2 + 6 + i * ((w - 12) / Math.max(1, docks - 1));
    K.trim.box(F, dx, 0.9, back - face * 0.06, 3.4, 3.6, 0.12, rgb(0x3a4046), false, 0, backSkip);
    K.trim.box(F, dx, 0, back - face * 1.4, 4.2, 1.2, 2.6, rgb(0x8f8c86), false, 0, backSkip);      // dock apron
    if (Q.detailProps && rng() < 0.4) {                                                // parked trailer
      queueCol(K, F.wx(dx, back - face * 9), F.wz(dx, back - face * 9), 1.3, 7, rot, 4, true);
      if (!K.lod) {
        var tyre = rgb(0x1c1e21);
        K.trim.box(F, dx, 1.1, back - face * 9, 2.6, 2.9, 14, rgb(0xeceae4), true);
        K.trim.box(F, dx, 0, back - face * 4.5, 2.2, 1.1, 0.4, rgb(0x2a2c2f), false);    // landing gear
        for (var ax = 0; ax < 2; ax++) {
          K.trim.box(F, dx, 0, back - face * (13.2 + ax * 1.3), 2.5, 1.0, 1.0, tyre, false, 0, SKIP_TOP);
        }
      }
    }
  }
  var ow = Math.min(22, w * 0.3);
  K.office.shell(F, -w / 2 + ow / 2 + 1, fz + face * 3.2, ow, 6.2, 0, 7.4, FACADES.office, rgb(0xb4bfc8), null);
  K.roofdeck.flat(F, -w / 2 + ow / 2 + 1, 7.4, fz + face * 3.2, ow, 6.2, rgb(0x8c8e92), true, 6);
  K.trim.box(F, -w / 2 + ow / 2 + 1, 7.4, fz + face * 3.2, ow + 0.3, 0.5, 6.5, trimC, false);
  queueCol(K, x, z, w / 2, hd, rot, h);
  queueCol(K, F.wx(-w / 2 + ow / 2 + 1, fz + face * 3.2), F.wz(-w / 2 + ow / 2 + 1, fz + face * 3.2), ow / 2, 3.1, rot, 7.4);
  return { hw: w / 2, hd: hd + 6.5, cx: 0 };
}

function genFarm(K, x, z, rot, rng, face, setback) {
  if (rng() >= 0.45) return genHouse(K, x, z, rot, rng, face, setback);
  var F = new Frame(x, z, rot);
  var w = 18 + rng() * 10, d = 12 + rng() * 5, h = 5.2, hd = d / 2, fz = face * hd;
  var red = pickCol([0x8a3b30, 0x9b4032, 0x7b3a33, 0xa9a49a], rng), white = rgb(0xefece4);
  K.trim.box(F, 0, 0, 0, w + 0.3, 0.5, d + 0.3, rgb(0x8d8983), false);
  K.siding.shell(F, 0, 0, w, d, 0.5, h, FACADES.siding, red, null);
  gableRoofB(K, F, 0, 0, w, d, h, 4.2, 0.6, rgb(0x5d6166), red, white);
  [-1, 1].forEach(function (sx) {
    [-1, 1].forEach(function (sz) {
      K.trim.box(F, sx * (w / 2 - 0.05), 0.5, sz * (hd - 0.05), 0.3, h - 0.5, 0.3, white, false, 0,
        SKIP_TOP | (sx > 0 ? SKIP_NX : SKIP_PX) | (sz > 0 ? SKIP_NZ : SKIP_PZ));
    });
  });
  // Big sliding barn door and a hay loft door.
  var bdz = fz + face * 0.06, back = backOf(face);
  K.trim.box(F, 0, 0.5, bdz, 4.6, 3.8, 0.1, white, false, 0, back);
  K.trim.box(F, 0, 0.6, bdz + face * 0.05, 4.2, 3.6, 0.06, shade(red, 0.9), false, 0, back);
  K.trim.box(F, 0, 4.9, bdz, 2.0, 1.6, 0.1, white, false, 0, back);
  queueCol(K, x, z, w / 2, hd, rot, h + 4);
  if (rng() < 0.7) {
    var sx = w / 2 + 4.5;
    K.metalClad.cylinder(F, sx, 0, 0, 3.1, 14, K.lod ? 10 : 16, rgb(0xc8ccd0), 2.2);
    K.metalClad.cylinder(F, sx + 7, 0, 1.5, 2.4, 10, K.lod ? 8 : 14, rgb(0xb9bec3), 1.6);
    queueCol(K, F.wx(sx, 0), F.wz(sx, 0), 3.1, 3.1, 0, 16);
    queueCol(K, F.wx(sx + 7, 1.5), F.wz(sx + 7, 1.5), 2.4, 2.4, 0, 12);
    return { hw: w / 2 + 12, hd: hd, cx: 6 };
  }
  return { hw: w / 2, hd: hd, cx: 0 };
}

// A sign panel centred at (x, y, z) in world space, facing (fx, fz).
function signPanel(K, x, y, z, w, h, fx, fz, cell) {
  var uv = signUV(cell), rx = -fz, rz = fx;         // panel's left-to-right axis
  var hw = w / 2, hh = h / 2;
  var A = [x - rx * hw, y - hh, z - rz * hw], B = [x + rx * hw, y - hh, z + rz * hw];
  var C = [x + rx * hw, y + hh, z + rz * hw], D = [x - rx * hw, y + hh, z - rz * hw];
  // Seen from the front, +r must run left to right; flip u if it does not.
  var flip = (rx * fz - rz * fx) < 0;
  var u0 = flip ? uv[1] : uv[0], u1 = flip ? uv[0] : uv[1];
  K.sign.quad([A, B, C, D], [[u0, uv[2]], [u1, uv[2]], [u1, uv[3]], [u0, uv[3]]], [1, 1, 1], [fx, 0, fz]);
}

// ------------------------------------------------------ chunk batch plumbing
var BATCH_KEYS = ['house', 'siding', 'apartment', 'office', 'brick', 'stucco', 'metalClad',
                  'shingle', 'roofdeck', 'trim', 'interior', 'glass', 'sign', 'lot', 'car'];

function newBatches(lod) {
  var K = { col: [], lod: lod ? 1 : 0 };
  for (var i = 0; i < BATCH_KEYS.length; i++) K[BATCH_KEYS[i]] = new Batch();
  return K;
}
function markBatches(K) {
  var m = {};
  for (var i = 0; i < BATCH_KEYS.length; i++) {
    var b = K[BATCH_KEYS[i]];
    m[BATCH_KEYS[i]] = [b.p.length, b.n.length, b.t.length, b.c.length];
  }
  m.col = K.col.length;
  return m;
}
function rollbackBatches(K, m) {
  for (var i = 0; i < BATCH_KEYS.length; i++) {
    var b = K[BATCH_KEYS[i]], s = m[BATCH_KEYS[i]];
    b.p.length = s[0]; b.n.length = s[1]; b.t.length = s[2]; b.c.length = s[3];
  }
  K.col.length = m.col;
}
// Register the colliders queued since `from`: building masses when `base`,
// parked cars and trailers when `detail`.
function commitColliders(K, from, base, detail, owner) {
  for (var i = from; i < K.col.length; i++) {
    var c = K.col[i];
    if (c[6] ? !detail : !base) continue;
    addColliderBox(c[0], c[1], c[2], c[3], c[4], c[5]).owner = owner;
  }
}

function batchMaterial(key) {
  switch (key) {
    case 'glass': return MATS.storefront;
    case 'lot': return MATS.lot;
    case 'car': return carMaterials().body;
    default: return MATS[key];
  }
}

function emitBatches(K, group) {
  for (var i = 0; i < BATCH_KEYS.length; i++) {
    var key = BATCH_KEYS[i], geo = K[key].geometry();
    if (!geo) continue;
    var mesh = new T.Mesh(geo, batchMaterial(key));
    var transparent = key === 'glass';
    mesh.castShadow = !transparent && key !== 'lot' && key !== 'interior';
    mesh.receiveShadow = !transparent;
    mesh.matrixAutoUpdate = false;
    if (transparent) mesh.renderOrder = 2;
    group.add(mesh);
  }
}
