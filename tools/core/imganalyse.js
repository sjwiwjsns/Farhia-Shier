/* ===========================================================================
   mcImg — purely local image analysis.

   Everything here runs on bytes and pixels you already have: magic-byte
   sniffing, a hand-rolled JPEG/APP1 + TIFF/IFD EXIF reader, and a pile of
   classical image statistics (luma moments, Sobel, Laplacian, k-means palette,
   DCT perceptual hash). No network calls, no ML model, no dependencies.

   Every top-level name is prefixed `mcImg` so this file can be pasted into a
   single-file app that already owns the `mc*` namespace without collisions.

   Design rule followed throughout: hostile input is normal input. A truncated
   JPEG, a zero-byte file, a 1x1 GIF, a text file renamed to .png — none of
   these throw. They return null or a zeroed result, because an image tool that
   explodes on one bad file in a batch of 500 is worse than useless.
   =========================================================================== */

/* ---------------------------------------------------------------------------
   0. Constants and tiny helpers
   --------------------------------------------------------------------------- */

// Deliberately far above the 64-bit maximum distance so a caller can never
// mistake "these hashes are not comparable" for "these images differ a lot".
const mcImgHammingSentinel = 9999;

// Sizes in bytes per TIFF field type, indexed by the type code itself.
// Index 0 is unused; unknown/oversized codes fall off the end as undefined.
const mcImgTypeSizes = [0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8];

// The tags we bother naming. Anything else is surfaced as `Tag0x____` in
// `raw` so a UI can still show it without us pretending to understand it.
const mcImgTagNames = {
  0x0100: "ImageWidth", 0x0101: "ImageLength", 0x0102: "BitsPerSample",
  0x0106: "PhotometricInterpretation", 0x010e: "ImageDescription",
  0x010f: "Make", 0x0110: "Model", 0x0112: "Orientation",
  0x011a: "XResolution", 0x011b: "YResolution", 0x0128: "ResolutionUnit",
  0x0131: "Software", 0x0132: "DateTime", 0x013b: "Artist",
  0x8298: "Copyright", 0x8769: "ExifIFDPointer", 0x8825: "GPSInfoIFDPointer",
  0x829a: "ExposureTime", 0x829d: "FNumber", 0x8822: "ExposureProgram",
  0x8827: "ISOSpeedRatings", 0x9000: "ExifVersion",
  0x9003: "DateTimeOriginal", 0x9004: "DateTimeDigitized",
  0x9201: "ShutterSpeedValue", 0x9202: "ApertureValue",
  0x9204: "ExposureBiasValue", 0x9207: "MeteringMode", 0x9209: "Flash",
  0x920a: "FocalLength", 0x927c: "MakerNote", 0x9286: "UserComment",
  0xa002: "PixelXDimension", 0xa003: "PixelYDimension",
  0xa402: "ExposureMode", 0xa403: "WhiteBalance",
  0xa405: "FocalLengthIn35mmFilm", 0xa406: "SceneCaptureType",
  0xa432: "LensSpecification", 0xa433: "LensMake", 0xa434: "LensModel"
};

const mcImgGpsTagNames = {
  0x0000: "GPSVersionID", 0x0001: "GPSLatitudeRef", 0x0002: "GPSLatitude",
  0x0003: "GPSLongitudeRef", 0x0004: "GPSLongitude", 0x0005: "GPSAltitudeRef",
  0x0006: "GPSAltitude", 0x0007: "GPSTimeStamp", 0x0012: "GPSMapDatum",
  0x001d: "GPSDateStamp"
};

// "1.4 MB" style. Base 1024 because that is what file managers show.
function mcImgFmtBytes(n) {
  const v0 = typeof n === "number" ? n : Number(n);
  if (!isFinite(v0) || v0 <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  let v = v0;
  let i = 0;
  while (v >= 1024 && i < units.length - 1) { v /= 1024; i++; }
  // Whole bytes never get a fake decimal; everything above does, so that
  // sizes line up visually in a column.
  return i === 0 ? Math.round(v) + " B" : v.toFixed(1) + " " + units[i];
}

// mulberry32. A seeded PRNG is not a nicety here: k-means with random seeding
// would hand the user a different palette every time they re-opened the same
// photo, which reads as a bug even though it is "correct".
function mcImgRng(seed) {
  let a = (seed >>> 0) || 1;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function mcImgClamp(v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); }

function mcImgHex2(v) {
  const s = Math.round(mcImgClamp(v, 0, 255)).toString(16);
  return s.length === 1 ? "0" + s : s;
}

function mcImgRgbHex(r, g, b) { return "#" + mcImgHex2(r) + mcImgHex2(g) + mcImgHex2(b); }

function mcImgRound(v, places) {
  const p = Math.pow(10, places);
  return Math.round(v * p) / p;
}

// Accepts ArrayBuffer, any TypedArray, DataView, Node Buffer or plain array.
// Returns a Uint8Array view or null — never throws on junk.
function mcImgToBytes(input) {
  try {
    if (!input) return null;
    if (input instanceof Uint8Array) return input;
    if (typeof ArrayBuffer !== "undefined" && input instanceof ArrayBuffer) return new Uint8Array(input);
    if (ArrayBuffer.isView(input)) return new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
    if (Array.isArray(input)) return new Uint8Array(input);
    if (typeof input.byteLength === "number" && input.buffer) {
      return new Uint8Array(input.buffer, input.byteOffset || 0, input.byteLength);
    }
    return null;
  } catch (e) { return null; }
}

// ASCII compare against a byte array without allocating a string per call.
function mcImgAsciiAt(bytes, off, text) {
  if (!bytes || off < 0 || off + text.length > bytes.length) return false;
  for (let i = 0; i < text.length; i++) if (bytes[off + i] !== text.charCodeAt(i)) return false;
  return true;
}

/* ---------------------------------------------------------------------------
   1. Format sniffing from magic bytes
   --------------------------------------------------------------------------- */

/**
 * mcImgSniff(bytes) -> { mime, ext, ok }
 *
 * WHY we never trust `File.type` / the filename extension: in the browser the
 * declared MIME type is derived from the OS extension→type table, so it is
 * whatever the user's filesystem last guessed. It is trivially wrong (a PNG
 * saved as `photo.jpg`), trivially spoofed (an upload form is client-side),
 * and simply absent for files dragged from some sources. The first handful of
 * bytes is the only thing the decoder itself will actually act on, so that is
 * what we look at.
 */
function mcImgSniff(input) {
  const miss = { mime: "", ext: "", ok: false };
  const b = mcImgToBytes(input);
  if (!b || b.length < 2) return miss;

  // JPEG: SOI marker followed by any marker start.
  if (b[0] === 0xff && b[1] === 0xd8 && (b.length < 3 || b[2] === 0xff)) {
    return { mime: "image/jpeg", ext: "jpg", ok: true };
  }
  // PNG: the 8-byte signature is designed to also catch CR/LF mangling.
  if (b.length >= 8 && b[0] === 0x89 && mcImgAsciiAt(b, 1, "PNG") &&
      b[4] === 0x0d && b[5] === 0x0a && b[6] === 0x1a && b[7] === 0x0a) {
    return { mime: "image/png", ext: "png", ok: true };
  }
  if (mcImgAsciiAt(b, 0, "GIF87a") || mcImgAsciiAt(b, 0, "GIF89a")) {
    return { mime: "image/gif", ext: "gif", ok: true };
  }
  // WebP is a RIFF container; the form type at offset 8 is what makes it WebP.
  if (mcImgAsciiAt(b, 0, "RIFF") && mcImgAsciiAt(b, 8, "WEBP")) {
    return { mime: "image/webp", ext: "webp", ok: true };
  }
  if (b[0] === 0x42 && b[1] === 0x4d) {
    return { mime: "image/bmp", ext: "bmp", ok: true };
  }
  // ISO-BMFF (`ftyp` box at offset 4). AVIF and HEIC share the container, so
  // we read the major brand *and* the compatible-brand list; `mif1` alone is
  // ambiguous and shows up in both, hence checking avif brands first.
  if (b.length >= 12 && mcImgAsciiAt(b, 4, "ftyp")) {
    const boxLen = Math.min(b.length, (b[0] << 24 | b[1] << 16 | b[2] << 8 | b[3]) >>> 0 || 16);
    const brands = [];
    for (let o = 8; o + 4 <= Math.max(12, boxLen) && o + 4 <= b.length; o += 4) {
      if (o === 12) continue; // minor_version, not a brand
      brands.push(String.fromCharCode(b[o], b[o + 1], b[o + 2], b[o + 3]));
    }
    if (brands.indexOf("avif") >= 0 || brands.indexOf("avis") >= 0) {
      return { mime: "image/avif", ext: "avif", ok: true };
    }
    const heicBrands = ["heic", "heix", "hevc", "hevx", "heim", "heis", "hevm", "hevs", "mif1", "msf1"];
    for (let i = 0; i < brands.length; i++) {
      if (heicBrands.indexOf(brands[i]) >= 0) return { mime: "image/heic", ext: "heic", ok: true };
    }
  }
  // SVG has no magic number — it is just XML. Scan a bounded prefix for the
  // root element so we do not read a whole multi-megabyte file to say "no".
  const probe = Math.min(b.length, 1024);
  let text = "";
  for (let i = 0; i < probe; i++) text += String.fromCharCode(b[i]);
  const head = text.replace(/^\uFEFF/, "").slice(0, 1024);
  if (/<svg[\s>]/i.test(head) || (/^\s*<\?xml/i.test(head) && /<svg/i.test(head))) {
    return { mime: "image/svg+xml", ext: "svg", ok: true };
  }
  return miss;
}

/* ---------------------------------------------------------------------------
   2. EXIF: JPEG APP1 -> TIFF header -> IFD walk
   --------------------------------------------------------------------------- */

// Read one 12-byte IFD entry. `base` is the TIFF header offset, which every
// internal pointer in the block is relative to (not the file, not the segment).
function mcImgTiffEntry(dv, base, le, entryOff) {
  try {
    if (entryOff + 12 > dv.byteLength) return null;
    const tag = dv.getUint16(entryOff, le);
    const type = dv.getUint16(entryOff + 2, le);
    const count = dv.getUint32(entryOff + 4, le);
    const size = mcImgTypeSizes[type];
    if (!size || count === 0 || count > 0x10000) return { tag: tag, type: type, count: count, value: null };
    const byteLen = size * count;
    // Values of 4 bytes or fewer live inline in the value field, left-aligned.
    const dataOff = byteLen <= 4 ? entryOff + 8 : base + dv.getUint32(entryOff + 8, le);
    if (dataOff < 0 || dataOff + byteLen > dv.byteLength) return { tag: tag, type: type, count: count, value: null };

    let value = null;
    if (type === 2) {
      // ASCII, NUL-terminated. Trailing junk after the first NUL is padding.
      let s = "";
      for (let i = 0; i < count; i++) {
        const c = dv.getUint8(dataOff + i);
        if (c === 0) break;
        s += String.fromCharCode(c);
      }
      value = s.replace(/\s+$/, "");
    } else if (type === 5 || type === 10) {
      const out = [];
      for (let i = 0; i < count; i++) {
        const o = dataOff + i * 8;
        const num = type === 5 ? dv.getUint32(o, le) : dv.getInt32(o, le);
        const den = type === 5 ? dv.getUint32(o + 4, le) : dv.getInt32(o + 4, le);
        out.push(den === 0 ? 0 : num / den);
      }
      value = count === 1 ? out[0] : out;
    } else {
      const out = [];
      for (let i = 0; i < count; i++) {
        const o = dataOff + i * size;
        if (type === 1 || type === 7) out.push(dv.getUint8(o));
        else if (type === 6) out.push(dv.getInt8(o));
        else if (type === 3) out.push(dv.getUint16(o, le));
        else if (type === 8) out.push(dv.getInt16(o, le));
        else if (type === 4) out.push(dv.getUint32(o, le));
        else if (type === 9) out.push(dv.getInt32(o, le));
        else if (type === 11) out.push(dv.getFloat32(o, le));
        else if (type === 12) out.push(dv.getFloat64(o, le));
      }
      value = count === 1 ? out[0] : out;
    }
    return { tag: tag, type: type, count: count, value: value };
  } catch (e) { return null; }
}

// Walk one IFD and hand each decoded entry to `sink`. Returns nothing useful;
// the caller keeps whatever it cares about. Entry counts are sanity-capped
// because a corrupt count field is the classic way to make a parser spin.
function mcImgTiffIfd(dv, base, le, ifdOff, sink) {
  try {
    if (ifdOff < 0 || ifdOff + 2 > dv.byteLength) return;
    const n = dv.getUint16(ifdOff, le);
    if (n === 0 || n > 512) return;
    for (let i = 0; i < n; i++) {
      const e = mcImgTiffEntry(dv, base, le, ifdOff + 2 + i * 12);
      if (e) sink(e);
    }
  } catch (e) { /* truncated IFD — keep whatever we already read */ }
}

// [deg, min, sec] rationals + "N"/"S"/"E"/"W" -> signed decimal degrees.
function mcImgGpsToDecimal(parts, ref) {
  if (!parts) return null;
  const a = Array.isArray(parts) ? parts : [parts];
  const d = Number(a[0]) || 0;
  const m = Number(a[1]) || 0;
  const s = Number(a[2]) || 0;
  let v = d + m / 60 + s / 3600;
  if (!isFinite(v)) return null;
  const r = String(ref || "").trim().toUpperCase();
  if (r === "S" || r === "W") v = -v;
  return v;
}

/**
 * mcImgExif(arrayBuffer) -> {...} | null
 *
 * Only JPEG carries EXIF in the APP1 form we parse. PNG, GIF, BMP and plain
 * garbage all return null rather than a half-populated object, so callers can
 * branch on truthiness instead of checking eight fields.
 */
function mcImgExif(input) {
  const b = mcImgToBytes(input);
  if (!b || b.length < 4) return null;
  if (b[0] !== 0xff || b[1] !== 0xd8) return null; // not a JPEG at all

  try {
    // --- locate the APP1/Exif segment ---------------------------------------
    let pos = 2;
    let tiffStart = -1;
    let tiffLen = 0;
    while (pos + 4 <= b.length) {
      if (b[pos] !== 0xff) { pos++; continue; }          // resync over padding
      let marker = b[pos + 1];
      while (marker === 0xff && pos + 2 < b.length) { pos++; marker = b[pos + 1]; }
      if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) { pos += 2; continue; }
      if (marker === 0xda || marker === 0xd9) break;      // start of scan / EOI
      if (pos + 4 > b.length) break;
      const segLen = (b[pos + 2] << 8) | b[pos + 3];
      if (segLen < 2) break;
      if (marker === 0xe1 && mcImgAsciiAt(b, pos + 4, "Exif") && b[pos + 8] === 0 && b[pos + 9] === 0) {
        tiffStart = pos + 10;
        tiffLen = segLen - 8;
        break;
      }
      pos += 2 + segLen;
    }
    if (tiffStart < 0 || tiffStart + 8 > b.length) return null;

    // --- TIFF header --------------------------------------------------------
    const end = Math.min(b.length, tiffStart + Math.max(8, tiffLen));
    const dv = new DataView(b.buffer, b.byteOffset + tiffStart, end - tiffStart);
    const bom = dv.getUint16(0, false);
    // "II" = Intel = little-endian, "MM" = Motorola = big-endian. Both are in
    // the wild (Canon writes II, plenty of scanners write MM), so we honour
    // whichever the file declares rather than assuming.
    let le;
    if (bom === 0x4949) le = true;
    else if (bom === 0x4d4d) le = false;
    else return null;
    if (dv.getUint16(2, le) !== 42) return null;         // TIFF magic
    const ifd0Off = dv.getUint32(4, le);
    if (ifd0Off < 8 || ifd0Off >= dv.byteLength) return null;

    const raw = {};
    let exifPtr = 0;
    let gpsPtr = 0;
    const put = function (names, e) {
      const name = names[e.tag] || ("Tag0x" + e.tag.toString(16));
      if (e.value !== null && e.value !== undefined) raw[name] = e.value;
    };

    const ifd0 = {};
    mcImgTiffIfd(dv, 0, le, ifd0Off, function (e) {
      ifd0[e.tag] = e.value;
      if (e.tag === 0x8769) exifPtr = Number(e.value) || 0;
      else if (e.tag === 0x8825) gpsPtr = Number(e.value) || 0;
      else put(mcImgTagNames, e);
    });

    const ex = {};
    if (exifPtr > 0 && exifPtr < dv.byteLength) {
      mcImgTiffIfd(dv, 0, le, exifPtr, function (e) { ex[e.tag] = e.value; put(mcImgTagNames, e); });
    }
    const gp = {};
    if (gpsPtr > 0 && gpsPtr < dv.byteLength) {
      mcImgTiffIfd(dv, 0, le, gpsPtr, function (e) { gp[e.tag] = e.value; put(mcImgGpsTagNames, e); });
    }

    let gps = null;
    if (gp[0x0002] !== undefined && gp[0x0004] !== undefined) {
      const lat = mcImgGpsToDecimal(gp[0x0002], gp[0x0001]);
      const lon = mcImgGpsToDecimal(gp[0x0004], gp[0x0003]);
      if (lat !== null && lon !== null && Math.abs(lat) <= 90 && Math.abs(lon) <= 180) {
        let alt = null;
        if (gp[0x0006] !== undefined) {
          alt = Number(Array.isArray(gp[0x0006]) ? gp[0x0006][0] : gp[0x0006]);
          if (!isFinite(alt)) alt = null;
          else if (Number(gp[0x0005]) === 1 && alt !== null) alt = -alt; // ref 1 = below sea level
        }
        gps = { lat: lat, lon: lon, altitude: alt };
      }
    }

    const scalar = function (v) { return Array.isArray(v) ? v[0] : v; };
    const num = function (v) { const n = Number(scalar(v)); return isFinite(n) ? n : null; };

    // Nothing at all recognisable? Report null rather than an empty husk.
    const anything = ifd0[0x010f] || ifd0[0x0110] || ifd0[0x0132] || ifd0[0x0112] ||
      ifd0[0x0131] || exifPtr || gpsPtr || Object.keys(raw).length;
    if (!anything) return null;

    return {
      make: ifd0[0x010f] || null,
      model: ifd0[0x0110] || null,
      // DateTimeOriginal is when the shutter fired; DateTime is when the file
      // was last written. The former is what a human means by "when".
      dateTime: ex[0x9003] || ex[0x9004] || ifd0[0x0132] || null,
      orientation: num(ifd0[0x0112]) || 1,
      gps: gps,
      iso: num(ex[0x8827]),
      fNumber: num(ex[0x829d]),
      exposure: num(ex[0x829a]),
      focalLength: num(ex[0x920a]),
      software: ifd0[0x0131] || null,
      raw: raw
    };
  } catch (e) {
    return null; // any surprise in a hostile file is just "no EXIF"
  }
}

/* ---------------------------------------------------------------------------
   3. The canvas seam
   --------------------------------------------------------------------------- */

/*  THE SEAM THAT MAKES THIS TESTABLE
    ---------------------------------
    Every pixel function below reaches its data through exactly one door:
    an object exposing `{ width, height, getContext("2d") }` where the returned
    context exposes `getImageData(x, y, w, h) -> { width, height, data }`.

    That is a subset of HTMLCanvasElement/OffscreenCanvas, so real canvases
    satisfy it for free — and a ~20 line pure-JS fake backed by a
    Uint8ClampedArray also satisfies it. Without this, none of the statistics,
    palette or hashing code could be exercised in headless Node, and the only
    way to check a perceptual hash would be to eyeball a browser. Sources that
    are *not* canvas-like (ImageBitmap, <img>, <video>) get drawn onto a real
    scratch canvas first, which is the only branch that needs a browser.        */

function mcImgMakeCanvas(w, h) {
  try {
    if (typeof OffscreenCanvas !== "undefined") return new OffscreenCanvas(w, h);
    if (typeof document !== "undefined" && document.createElement) {
      const c = document.createElement("canvas");
      c.width = w; c.height = h;
      return c;
    }
  } catch (e) { /* fall through */ }
  return null;
}

function mcImgSourceSize(source) {
  if (!source || typeof source !== "object") return null;
  const w = Number(source.naturalWidth || source.videoWidth || source.width || 0);
  const h = Number(source.naturalHeight || source.videoHeight || source.height || 0);
  if (!isFinite(w) || !isFinite(h)) return null;
  return { w: Math.floor(w), h: Math.floor(h) };
}

function mcImgReadPixels(source, w, h) {
  try {
    if (typeof source.getContext !== "function") return null;
    const ctx = source.getContext("2d");
    if (!ctx || typeof ctx.getImageData !== "function") return null;
    const id = ctx.getImageData(0, 0, w, h);
    return id && id.data && id.data.length >= w * h * 4 ? id : null;
  } catch (e) { return null; }
}

// Area-average (box) downsample. Doing this in JS rather than leaning on
// drawImage keeps results bit-identical across browsers and in Node, which
// matters because a perceptual hash that changes with the platform's
// resampling filter is not a hash.
function mcImgBoxDownsample(src, sw, sh, tw, th) {
  const out = new Uint8ClampedArray(tw * th * 4);
  for (let ty = 0; ty < th; ty++) {
    const y0 = Math.floor((ty * sh) / th);
    const y1 = Math.min(sh, Math.max(y0 + 1, Math.floor(((ty + 1) * sh) / th)));
    for (let tx = 0; tx < tw; tx++) {
      const x0 = Math.floor((tx * sw) / tw);
      const x1 = Math.min(sw, Math.max(x0 + 1, Math.floor(((tx + 1) * sw) / tw)));
      let r = 0, g = 0, bl = 0, a = 0, n = 0;
      for (let y = y0; y < y1; y++) {
        let i = (y * sw + x0) * 4;
        for (let x = x0; x < x1; x++, i += 4) {
          r += src[i]; g += src[i + 1]; bl += src[i + 2]; a += src[i + 3]; n++;
        }
      }
      const o = (ty * tw + tx) * 4;
      if (n === 0) { out[o] = out[o + 1] = out[o + 2] = 0; out[o + 3] = 255; continue; }
      out[o] = r / n; out[o + 1] = g / n; out[o + 2] = bl / n; out[o + 3] = a / n;
    }
  }
  return out;
}

/**
 * Produce the working-resolution pixel buffer.
 *
 * WHY we downsample first: analysing a 48-megapixel photo pixel-by-pixel costs
 * ~200 MB of RGBA and hundreds of milliseconds, and it buys nothing. Every
 * statistic here — mean luma, histogram shape, palette, Sobel density,
 * variance of Laplacian, the 32x32 DCT hash — is a summary that converges long
 * before 256px on the long edge. Full-resolution analysis is slow and pointless
 * in equal measure; the only thing it changes is which frame drops.
 */
function mcImgWorkingPixels(source, maxDim) {
  if (!source || typeof source !== "object") return null;
  const sz = mcImgSourceSize(source);
  if (!sz || sz.w < 1 || sz.h < 1) return null;

  const limit = Math.max(8, Math.floor(maxDim) || 256);
  const scale = Math.min(1, limit / Math.max(sz.w, sz.h));
  const tw = Math.max(1, Math.round(sz.w * scale));
  const th = Math.max(1, Math.round(sz.h * scale));

  // Canvas-like sources: read once, resample deterministically in JS.
  // (For a genuinely huge canvas this reads the full RGBA buffer, which is the
  // price of platform-independent results; images arrive as ImageBitmap in
  // practice and take the drawImage path below.)
  if (typeof source.getContext === "function") {
    const id = mcImgReadPixels(source, sz.w, sz.h);
    if (id) {
      const data = (tw === sz.w && th === sz.h)
        ? id.data
        : mcImgBoxDownsample(id.data, sz.w, sz.h, tw, th);
      return { data: data, width: tw, height: th, srcW: sz.w, srcH: sz.h };
    }
  }

  // Everything else needs the browser to decode it for us.
  const cv = mcImgMakeCanvas(tw, th);
  if (!cv) return null;
  try {
    const ctx = cv.getContext("2d");
    if (!ctx || typeof ctx.drawImage !== "function") return null;
    if ("imageSmoothingQuality" in ctx) ctx.imageSmoothingQuality = "high";
    ctx.drawImage(source, 0, 0, tw, th);
    const id = ctx.getImageData(0, 0, tw, th);
    if (!id || !id.data) return null;
    return { data: id.data, width: tw, height: th, srcW: sz.w, srcH: sz.h };
  } catch (e) { return null; }
}

/* ---------------------------------------------------------------------------
   4. Pixel statistics
   --------------------------------------------------------------------------- */

// Rec.709 luma. Rec.601 would weight green less; 709 matches sRGB primaries,
// which is what browser-sourced pixels actually are.
function mcImgLuma(r, g, b) { return 0.2126 * r + 0.7152 * g + 0.0722 * b; }

function mcImgEmptyHistogram() {
  return {
    r: new Array(256).fill(0), g: new Array(256).fill(0),
    b: new Array(256).fill(0), luma: new Array(256).fill(0)
  };
}

// One pass for histograms, luma moments, HSV saturation and the two
// Hasler-Süsstrunk opponent channels — they all want the same pixels, and
// touching the buffer four times would be four times the cache pressure.
function mcImgColorStats(px, w, h) {
  const n = w * h;
  const hist = mcImgEmptyHistogram();
  const luma = new Float64Array(n);
  let sumL = 0, sumL2 = 0, sumS = 0;
  let sumRg = 0, sumRg2 = 0, sumYb = 0, sumYb2 = 0;
  let grayish = 0;

  for (let i = 0, p = 0; p < n; p++, i += 4) {
    const r = px[i], g = px[i + 1], b = px[i + 2];
    hist.r[r]++; hist.g[g]++; hist.b[b]++;

    const l = mcImgLuma(r, g, b);
    luma[p] = l;
    const lb = mcImgClamp(Math.round(l), 0, 255) | 0;
    hist.luma[lb]++;
    const ln = l / 255;
    sumL += ln; sumL2 += ln * ln;

    const mx = r > g ? (r > b ? r : b) : (g > b ? g : b);
    const mn = r < g ? (r < b ? r : b) : (g < b ? g : b);
    sumS += mx === 0 ? 0 : (mx - mn) / mx;   // HSV S
    if (mx - mn <= 8) grayish++;             // channel spread within noise

    const rg = r - g;
    const yb = 0.5 * (r + g) - b;
    sumRg += rg; sumRg2 += rg * rg;
    sumYb += yb; sumYb2 += yb * yb;
  }

  const meanL = sumL / n;
  const varL = Math.max(0, sumL2 / n - meanL * meanL);
  const meanRg = sumRg / n, meanYb = sumYb / n;
  const varRg = Math.max(0, sumRg2 / n - meanRg * meanRg);
  const varYb = Math.max(0, sumYb2 / n - meanYb * meanYb);

  return {
    hist: hist,
    luma: luma,
    brightness: meanL,
    contrast: Math.sqrt(varL),
    saturation: sumS / n,
    // Hasler & Süsstrunk (2003) "Measuring colourfulness in natural images":
    // sigma of the opponent channels plus 0.3x their mean magnitude. Roughly
    // 0 = monochrome, >60 = extremely colourful. Note pure grey gives exactly
    // 0 because rg and yb both vanish when R=G=B.
    colorfulness: Math.sqrt(varRg + varYb) + 0.3 * Math.sqrt(meanRg * meanRg + meanYb * meanYb),
    grayFraction: grayish / n
  };
}

// Shannon entropy of the luma histogram, in bits. 0 = one flat tone,
// 8 = perfectly uniform tonal spread. Photographs typically land 6.5–7.8.
function mcImgEntropy(lumaHist, total) {
  if (!total) return 0;
  let e = 0;
  for (let i = 0; i < 256; i++) {
    const c = lumaHist[i];
    if (!c) continue;
    const p = c / total;
    e -= p * Math.log2(p);
  }
  return e;
}

// Sobel edge density + variance of the Laplacian, sharing one neighbourhood walk.
function mcImgEdgeStats(luma, w, h, threshold) {
  if (w < 3 || h < 3) return { edgeDensity: 0, sharpness: 0 };
  let edges = 0, count = 0;
  let sum = 0, sum2 = 0;

  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const i = y * w + x;
      const tl = luma[i - w - 1], t = luma[i - w], tr = luma[i - w + 1];
      const l = luma[i - 1], c = luma[i], r = luma[i + 1];
      const bl = luma[i + w - 1], bo = luma[i + w], br = luma[i + w + 1];

      // Sobel, on luma normalised to [0,1] and divided by the kernel weight so
      // a hard black/white step yields exactly 1.0 — that makes `threshold`
      // mean something ("edges at least this much of full contrast").
      const gx = ((tr + 2 * r + br) - (tl + 2 * l + bl)) / 255 / 4;
      const gy = ((bl + 2 * bo + br) - (tl + 2 * t + tr)) / 255 / 4;
      if (Math.sqrt(gx * gx + gy * gy) >= threshold) edges++;

      // 4-neighbour Laplacian, kept on the 0..255 scale so the variance is
      // comparable to the OpenCV figures people quote.
      const lap = t + bo + l + r - 4 * c;
      sum += lap; sum2 += lap * lap;
      count++;
    }
  }
  const mean = sum / count;
  return {
    edgeDensity: edges / count,
    // Variance of the Laplacian is the standard blur detector: a sharp image
    // has lots of strong second-derivative response, a blurred one has almost
    // none. LOW VARIANCE MEANS BLURRY. There is no absolute cutoff — it scales
    // with content and resolution — but at our 256px working size, single
    // digits are mush, hundreds are crisp.
    sharpness: Math.max(0, sum2 / count - mean * mean)
  };
}

/* ---------------------------------------------------------------------------
   5. Palette (k-means++ in RGB, seeded)
   --------------------------------------------------------------------------- */

function mcImgKMeans(samples, n, k, seed) {
  const rand = mcImgRng(seed);
  const cent = new Float64Array(k * 3);

  // --- k-means++ seeding: first centre uniform, each subsequent centre chosen
  // with probability proportional to squared distance from the nearest centre
  // already chosen. Plain random seeding routinely collapses two centres onto
  // the same dominant colour and wastes a palette slot.
  const i0 = Math.min(n - 1, Math.floor(rand() * n));
  cent[0] = samples[i0 * 3]; cent[1] = samples[i0 * 3 + 1]; cent[2] = samples[i0 * 3 + 2];
  const d2 = new Float64Array(n);
  for (let i = 0; i < n; i++) d2[i] = Infinity;
  for (let c = 1; c < k; c++) {
    let total = 0;
    for (let i = 0; i < n; i++) {
      const dr = samples[i * 3] - cent[(c - 1) * 3];
      const dg = samples[i * 3 + 1] - cent[(c - 1) * 3 + 1];
      const db = samples[i * 3 + 2] - cent[(c - 1) * 3 + 2];
      const d = dr * dr + dg * dg + db * db;
      if (d < d2[i]) d2[i] = d;
      total += d2[i];
    }
    let pick = n - 1;
    if (total > 0) {
      let target = rand() * total, acc = 0;
      for (let i = 0; i < n; i++) { acc += d2[i]; if (acc >= target) { pick = i; break; } }
    } else {
      pick = Math.min(n - 1, Math.floor(rand() * n));
    }
    cent[c * 3] = samples[pick * 3];
    cent[c * 3 + 1] = samples[pick * 3 + 1];
    cent[c * 3 + 2] = samples[pick * 3 + 2];
  }

  // --- Lloyd iterations. 24 is well past the point of visible change.
  const assign = new Int32Array(n).fill(-1);
  const cnt = new Float64Array(k);
  const acc = new Float64Array(k * 3);
  for (let iter = 0; iter < 24; iter++) {
    let moved = 0;
    cnt.fill(0); acc.fill(0);
    for (let i = 0; i < n; i++) {
      const r = samples[i * 3], g = samples[i * 3 + 1], b = samples[i * 3 + 2];
      let best = 0, bestD = Infinity;
      for (let c = 0; c < k; c++) {
        const dr = r - cent[c * 3], dg = g - cent[c * 3 + 1], db = b - cent[c * 3 + 2];
        const d = dr * dr + dg * dg + db * db;
        if (d < bestD) { bestD = d; best = c; }
      }
      if (assign[i] !== best) { assign[i] = best; moved++; }
      cnt[best]++;
      acc[best * 3] += r; acc[best * 3 + 1] += g; acc[best * 3 + 2] += b;
    }
    for (let c = 0; c < k; c++) {
      if (cnt[c] === 0) continue; // empty cluster: leave it, the merge pass drops it
      cent[c * 3] = acc[c * 3] / cnt[c];
      cent[c * 3 + 1] = acc[c * 3 + 1] / cnt[c];
      cent[c * 3 + 2] = acc[c * 3 + 2] / cnt[c];
    }
    if (moved === 0) break;
  }

  const out = [];
  for (let c = 0; c < k; c++) {
    if (cnt[c] === 0) continue;
    out.push({ r: cent[c * 3], g: cent[c * 3 + 1], b: cent[c * 3 + 2], w: cnt[c] / n });
  }
  return out;
}

// Merge centroids that a human would call the same colour, and fold negligible
// clusters into their nearest neighbour (dropping them would make the shares
// stop summing to 1, which looks broken in a UI).
function mcImgMergeClusters(list, minDist, minShare) {
  let cl = list.slice();
  let changed = true;
  while (changed && cl.length > 1) {
    changed = false;
    let bi = -1, bj = -1, bd = minDist * minDist;
    for (let i = 0; i < cl.length; i++) {
      for (let j = i + 1; j < cl.length; j++) {
        const dr = cl[i].r - cl[j].r, dg = cl[i].g - cl[j].g, db = cl[i].b - cl[j].b;
        const d = dr * dr + dg * dg + db * db;
        if (d < bd) { bd = d; bi = i; bj = j; }
      }
    }
    if (bi >= 0) {
      const a = cl[bi], b = cl[bj], tw = a.w + b.w;
      cl[bi] = {
        r: (a.r * a.w + b.r * b.w) / tw,
        g: (a.g * a.w + b.g * b.w) / tw,
        b: (a.b * a.w + b.b * b.w) / tw,
        w: tw
      };
      cl.splice(bj, 1);
      changed = true;
    }
  }
  // fold tiny survivors into whoever is closest
  let guard = 0;
  while (cl.length > 1 && guard++ < 16) {
    let smallest = -1;
    for (let i = 0; i < cl.length; i++) if (cl[i].w < minShare && (smallest < 0 || cl[i].w < cl[smallest].w)) smallest = i;
    if (smallest < 0) break;
    let near = -1, nd = Infinity;
    for (let j = 0; j < cl.length; j++) {
      if (j === smallest) continue;
      const dr = cl[smallest].r - cl[j].r, dg = cl[smallest].g - cl[j].g, db = cl[smallest].b - cl[j].b;
      const d = dr * dr + dg * dg + db * db;
      if (d < nd) { nd = d; near = j; }
    }
    if (near < 0) break;
    const a = cl[near], b = cl[smallest], tw = a.w + b.w;
    cl[near] = { r: (a.r * a.w + b.r * b.w) / tw, g: (a.g * a.w + b.g * b.w) / tw, b: (a.b * a.w + b.b * b.w) / tw, w: tw };
    cl.splice(smallest, 1);
  }
  cl.sort(function (a, b) { return b.w - a.w; });
  return cl;
}

function mcImgPalette(px, w, h, k, seed) {
  const n = w * h;
  const bins = new Int32Array(4096);   // 4 bits per channel
  const exact = new Map();
  let capped = false;
  let maxBin = 0;

  for (let i = 0, p = 0; p < n; p++, i += 4) {
    const r = px[i], g = px[i + 1], b = px[i + 2];
    const bi = ((r >> 4) << 8) | ((g >> 4) << 4) | (b >> 4);
    const c = ++bins[bi];
    if (c > maxBin) maxBin = c;
    if (!capped) {
      const key = (r << 16) | (g << 8) | b;
      const prev = exact.get(key);
      if (prev === undefined) {
        if (exact.size >= 4096) capped = true; else exact.set(key, 1);
      } else exact.set(key, prev + 1);
    }
  }

  const uniqueColors = capped ? 4096 : exact.size;
  // "share of near-identical pixels": how much of the frame is one quantised
  // colour. Photographs are rarely above ~0.15; UI and documents are dominated
  // by a single flat background.
  const flatShare = n ? maxBin / n : 0;

  let clusters;
  if (!capped && exact.size <= k) {
    // Fewer distinct colours than requested clusters — k-means would only
    // invent fictional in-between shades. Report the truth instead.
    clusters = [];
    exact.forEach(function (count, key) {
      clusters.push({ r: (key >> 16) & 255, g: (key >> 8) & 255, b: key & 255, w: count / n });
    });
    clusters.sort(function (a, b) { return b.w - a.w; });
  } else {
    const stride = Math.max(1, Math.ceil(n / 16384)); // cap the k-means workload
    const cnt = Math.floor((n + stride - 1) / stride);
    const samples = new Float64Array(cnt * 3);
    let s = 0;
    for (let p = 0; p < n; p += stride) {
      const i = p * 4;
      samples[s * 3] = px[i]; samples[s * 3 + 1] = px[i + 1]; samples[s * 3 + 2] = px[i + 2];
      s++;
    }
    clusters = mcImgKMeans(samples, s, Math.min(k, Math.max(1, uniqueColors)), seed);
    clusters = mcImgMergeClusters(clusters, 18, 0.012);
  }

  const palette = clusters.slice(0, k).map(function (c) {
    const r = Math.round(mcImgClamp(c.r, 0, 255));
    const g = Math.round(mcImgClamp(c.g, 0, 255));
    const b = Math.round(mcImgClamp(c.b, 0, 255));
    return { hex: mcImgRgbHex(r, g, b), rgb: [r, g, b], share: mcImgRound(c.w, 4) };
  });

  return { palette: palette, uniqueColors: uniqueColors, flatShare: flatShare };
}

/* ---------------------------------------------------------------------------
   6. Perceptual hash (32x32 -> DCT-II -> 8x8 -> median)
   --------------------------------------------------------------------------- */

// Box-downsample the working RGBA to an n x n grayscale grid.
function mcImgLumaGrid(px, w, h, n) {
  const g = new Float64Array(n * n);
  for (let gy = 0; gy < n; gy++) {
    const y0 = Math.floor((gy * h) / n);
    const y1 = Math.min(h, Math.max(y0 + 1, Math.floor(((gy + 1) * h) / n)));
    for (let gx = 0; gx < n; gx++) {
      const x0 = Math.floor((gx * w) / n);
      const x1 = Math.min(w, Math.max(x0 + 1, Math.floor(((gx + 1) * w) / n)));
      let s = 0, c = 0;
      for (let y = y0; y < y1; y++) {
        let i = (y * w + x0) * 4;
        for (let x = x0; x < x1; x++, i += 4) { s += mcImgLuma(px[i], px[i + 1], px[i + 2]); c++; }
      }
      g[gy * n + gx] = c ? s / c : 0;
    }
  }
  return g;
}

/**
 * 64-bit pHash as 16 hex chars.
 *
 * Separable DCT-II, hand-rolled (no FFT — at 32x32 with only 8 output
 * frequencies the naive form is a few thousand multiplies and is easier to
 * verify than a butterfly). We keep the top-left 8x8 low-frequency block,
 * throw away the DC term (it encodes overall brightness, and a hash that moves
 * when you brighten a photo is not perceptual), threshold the remaining 63
 * coefficients at their median, and pack MSB-first. The DC bit position is
 * fixed at 0 so the string stays a clean 64 bits.
 *
 * KNOWN LIMIT, inherent to DCT pHash and not specific to this code: the median
 * is only a meaningful threshold when more than half of the 63 AC coefficients
 * carry actual signal. Source pixels are 8-bit, so every coefficient has a
 * quantisation noise floor under it (~0.1 luma levels at this grid size). An
 * image with a nearly empty spectrum — a pure sinusoid, a linear ramp, a
 * grid-aligned checkerboard — puts only a handful of coefficients above that
 * floor, the median then falls inside the noise, and the bits it decides are
 * rounding artefacts that flip under any perturbation. Photographs, and
 * anything with edges or grain, fill 60+ of the 63 and hash rock-steadily.
 * Nothing can be done about it here: an image with fourteen stable
 * coefficients does not contain 64 stable bits, so hardening the threshold
 * only trades the instability for a loss of discrimination. Treat a pHash of a
 * near-featureless image as low-confidence rather than trying to repair it.
 */
function mcImgPHashFromLuma(g, n) {
  const K = 8;
  const cosT = new Float64Array(n * K);
  for (let x = 0; x < n; x++) {
    for (let u = 0; u < K; u++) cosT[x * K + u] = Math.cos(((2 * x + 1) * u * Math.PI) / (2 * n));
  }
  const c0 = Math.sqrt(1 / n), c1 = Math.sqrt(2 / n);

  const tmp = new Float64Array(n * K);          // rows -> horizontal frequencies
  for (let y = 0; y < n; y++) {
    for (let u = 0; u < K; u++) {
      let s = 0;
      for (let x = 0; x < n; x++) s += g[y * n + x] * cosT[x * K + u];
      tmp[y * K + u] = s * (u === 0 ? c0 : c1);
    }
  }
  const coef = new Float64Array(K * K);          // columns -> vertical frequencies
  for (let u = 0; u < K; u++) {
    for (let v = 0; v < K; v++) {
      let s = 0;
      for (let y = 0; y < n; y++) s += tmp[y * K + u] * cosT[y * K + v];
      coef[v * K + u] = s * (v === 0 ? c0 : c1);
    }
  }

  const ac = [];
  for (let i = 1; i < K * K; i++) ac.push(coef[i]);
  ac.sort(function (a, b) { return a - b; });
  const median = ac[(ac.length - 1) >> 1];       // 63 values -> a true middle

  let hex = "";
  for (let byte = 0; byte < 8; byte++) {
    let v = 0;
    for (let bit = 0; bit < 8; bit++) {
      const idx = byte * 8 + bit;
      const on = idx !== 0 && coef[idx] > median;
      v = (v << 1) | (on ? 1 : 0);
    }
    hex += mcImgHex2(v);
  }
  return hex;
}

async function mcImgPHash(source, opts) {
  const o = opts || {};
  const work = mcImgWorkingPixels(source, o.maxDim || 256);
  if (!work) return null;
  return mcImgPHashFromLuma(mcImgLumaGrid(work.data, work.width, work.height, 32), 32);
}

const mcImgBitCounts = (function () {
  const t = new Uint8Array(256);
  for (let i = 0; i < 256; i++) t[i] = (i & 1) + t[i >> 1];
  return t;
})();

// Bit distance between two pHash hex strings. Anything malformed — wrong type,
// odd length, mismatched length, non-hex — yields the sentinel instead of a
// number that would silently pollute a "most similar" ranking.
function mcImgHamming(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return mcImgHammingSentinel;
  if (a.length === 0 || a.length !== b.length || a.length % 2 !== 0) return mcImgHammingSentinel;
  if (!/^[0-9a-fA-F]+$/.test(a) || !/^[0-9a-fA-F]+$/.test(b)) return mcImgHammingSentinel;
  let d = 0;
  for (let i = 0; i < a.length; i += 2) {
    const x = parseInt(a.substr(i, 2), 16) ^ parseInt(b.substr(i, 2), 16);
    d += mcImgBitCounts[x & 255];
  }
  return d;
}

// 10/64 bits is the conventional "same picture" cutoff: it tolerates re-encode,
// resize, mild crop and exposure shifts without gathering unrelated images.
function mcImgSimilar(a, b) {
  const d = mcImgHamming(a, b);
  return d !== mcImgHammingSentinel && d <= 10;
}

/* ---------------------------------------------------------------------------
   7. Content-type heuristic
   --------------------------------------------------------------------------- */

/**
 * A HEURISTIC, NOT RECOGNITION. Nothing here looks at *what* is in the picture.
 * It reads five cheap statistics and picks the label they most resemble; a
 * photograph of a whiteboard will read as a document and a photorealistic
 * render will read as a photograph, and both are the correct behaviour for
 * what this actually measures. Treat the output as a hint for sorting, never
 * as a fact to assert to the user.
 *
 * The signals:
 *   entropy       — tonal richness. Sensor noise and continuous gradients fill
 *                   the luma histogram (photos ~6.5–7.9 bits); flat fills and
 *                   quantised UI colours leave it sparse.
 *   flatShare     — largest share of near-identical pixels. Screenshots and
 *                   documents are mostly one background colour; photographs
 *                   essentially never are.
 *   uniqueColors  — distinct colours present. Vector art, charts and icons are
 *                   built from a handful; a camera produces thousands.
 *   edgeDensity   — fraction of pixels on a strong gradient. Text and UI chrome
 *                   are made of hard thin lines and score high for their low
 *                   entropy; photos have soft edges spread over more pixels.
 *   colorfulness  — separates scanned/text pages (near-monochrome) from charts
 *                   and illustrations (saturated accents on a flat ground).
 */
function mcImgClassify(s) {
  const flat = s.flatShare, ent = s.entropy, edges = s.edgeDensity;
  const colors = s.uniqueColors, colorful = s.colorfulness;

  // Very few distinct colours can only be synthetic — no sensor produces that.
  if (colors <= 24 && ent < 5.0) return "graphic/illustration";

  // Near-monochrome, dominated by one paper-white/black background, and busy
  // with thin high-contrast strokes: that is text on a page.
  if (colorful < 14 && flat > 0.35 && edges > 0.03 && ent < 6.4) return "text document";

  // Flat ground + limited palette + coloured accents + moderate structure.
  if (flat > 0.30 && colors <= 2048 && ent < 6.6 && colorful >= 8 && edges < 0.30) return "chart/diagram";

  // Large uniform regions with crisp compositing edges, but richer than a chart.
  if (flat > 0.16 && ent < 7.4 && edges > 0.02) return "screenshot";

  // Continuous tone, no dominant flat region.
  if (ent >= 6.2 && flat < 0.30) return "photograph";

  return flat > 0.25 ? "graphic/illustration" : "photograph";
}

/* ---------------------------------------------------------------------------
   8. mcImgAnalyse
   --------------------------------------------------------------------------- */

// A zeroed result, returned instead of throwing for null / 0x0 / unreadable
// input. Callers get a stable shape and can render "—" everywhere.
function mcImgEmptyResult() {
  return {
    width: 0, height: 0, aspect: 0, orientation: "square", megapixels: 0,
    brightness: 0, contrast: 0, saturation: 0, colorfulness: 0, entropy: 0,
    edgeDensity: 0, sharpness: 0,
    palette: [], dominant: null,
    isGrayscale: false, isDark: false, likely: "graphic/illustration",
    phash: "0000000000000000", histogram: mcImgEmptyHistogram()
  };
}

/**
 * mcImgAnalyse(source, opts) -> Promise<result>
 *
 * `source` may be an ImageBitmap, <img>, <canvas>, OffscreenCanvas, <video>, or
 * any object satisfying the seam described in section 3.
 */
async function mcImgAnalyse(source, opts) {
  const o = opts || {};
  const maxDim = o.maxDim || 256;
  const k = Math.max(1, Math.min(6, o.k || 6));
  const seed = (o.seed === undefined ? 0x9e3779b9 : o.seed) >>> 0;
  const edgeThreshold = o.edgeThreshold === undefined ? 0.12 : o.edgeThreshold;

  const sz = mcImgSourceSize(source);
  const work = mcImgWorkingPixels(source, maxDim);
  if (!work || work.width < 1 || work.height < 1) {
    const empty = mcImgEmptyResult();
    if (sz && sz.w > 0 && sz.h > 0) {
      // We know the geometry even though we could not read pixels — report it.
      empty.width = sz.w; empty.height = sz.h;
      empty.aspect = mcImgRound(sz.w / sz.h, 4);
      empty.orientation = sz.w > sz.h ? "landscape" : (sz.w < sz.h ? "portrait" : "square");
      empty.megapixels = mcImgRound((sz.w * sz.h) / 1e6, 3);
    }
    return empty;
  }

  const px = work.data, w = work.width, h = work.height;
  const total = w * h;

  const stats = mcImgColorStats(px, w, h);
  const entropy = mcImgEntropy(stats.hist.luma, total);
  const edge = mcImgEdgeStats(stats.luma, w, h, edgeThreshold);
  const pal = mcImgPalette(px, w, h, k, seed);
  const phash = mcImgPHashFromLuma(mcImgLumaGrid(px, w, h, 32), 32);

  const outW = work.srcW, outH = work.srcH;
  const classifyInput = {
    entropy: entropy,
    edgeDensity: edge.edgeDensity,
    flatShare: pal.flatShare,
    uniqueColors: pal.uniqueColors,
    colorfulness: stats.colorfulness
  };

  return {
    width: outW,
    height: outH,
    aspect: outH ? mcImgRound(outW / outH, 4) : 0,
    orientation: outW > outH ? "landscape" : (outW < outH ? "portrait" : "square"),
    megapixels: mcImgRound((outW * outH) / 1e6, 3),

    brightness: mcImgRound(stats.brightness, 4),
    contrast: mcImgRound(stats.contrast, 4),
    saturation: mcImgRound(stats.saturation, 4),
    colorfulness: mcImgRound(stats.colorfulness, 3),
    entropy: mcImgRound(entropy, 4),
    edgeDensity: mcImgRound(edge.edgeDensity, 5),
    sharpness: mcImgRound(edge.sharpness, 3),

    palette: pal.palette,
    dominant: pal.palette.length ? pal.palette[0] : null,

    // "Grayscale" as a user means it: near-zero channel spread almost
    // everywhere. A single stray coloured pixel should not flip this.
    isGrayscale: stats.grayFraction >= 0.985,
    isDark: stats.brightness < 0.35,
    likely: mcImgClassify(classifyInput),

    phash: phash,
    histogram: stats.hist
  };
}

/* ---------------------------------------------------------------------------
   9. Thumbnail
   --------------------------------------------------------------------------- */

// Data-URL JPEG thumbnail. Requires a real canvas (toDataURL / convertToBlob),
// so in a non-browser host this resolves to null rather than throwing.
async function mcImgThumb(source, maxDim) {
  try {
    const sz = mcImgSourceSize(source);
    if (!sz || sz.w < 1 || sz.h < 1) return null;
    const limit = Math.max(8, Math.floor(maxDim) || 256);
    const scale = Math.min(1, limit / Math.max(sz.w, sz.h));
    const tw = Math.max(1, Math.round(sz.w * scale));
    const th = Math.max(1, Math.round(sz.h * scale));

    const cv = mcImgMakeCanvas(tw, th);
    if (!cv) return null;
    const ctx = cv.getContext("2d");
    if (!ctx || typeof ctx.drawImage !== "function") return null;
    if ("imageSmoothingQuality" in ctx) ctx.imageSmoothingQuality = "high";
    // JPEG has no alpha, so paint a white ground first or transparency turns black.
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, tw, th);
    ctx.drawImage(source, 0, 0, tw, th);

    if (typeof cv.toDataURL === "function") return cv.toDataURL("image/jpeg", 0.82);
    if (typeof cv.convertToBlob === "function") {
      const blob = await cv.convertToBlob({ type: "image/jpeg", quality: 0.82 });
      return await new Promise(function (resolve) {
        const fr = new FileReader();
        fr.onload = function () { resolve(String(fr.result)); };
        fr.onerror = function () { resolve(null); };
        fr.readAsDataURL(blob);
      });
    }
    return null;
  } catch (e) { return null; }
}

/* ===========================================================================
   SELF-TEST — node core/imganalyse.js
   Not shipped behaviour; the guard keeps it inert in the browser.
   =========================================================================== */

if (typeof module !== "undefined" && require.main === module) {
  let mcImgPassN = 0;
  let mcImgFailN = 0;
  const mcImgFails = [];

  const mcImgOk = function (name, cond, detail) {
    if (cond) { mcImgPassN++; return true; }
    mcImgFailN++;
    mcImgFails.push(name + (detail === undefined ? "" : "  (got: " + detail + ")"));
    return false;
  };
  const mcImgEq = function (name, got, want) {
    return mcImgOk(name, got === want, JSON.stringify(got) + " want " + JSON.stringify(want));
  };
  const mcImgNear = function (name, got, want, eps) {
    return mcImgOk(name, typeof got === "number" && Math.abs(got - want) <= eps, got + " want ~" + want);
  };

  // ---- the fake canvas: the whole reason the pixel code is testable --------
  const mcImgFake = function (w, h, fill) {
    const data = new Uint8ClampedArray(Math.max(0, w * h * 4));
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        const c = fill ? fill(x, y) : [0, 0, 0];
        data[i] = c[0]; data[i + 1] = c[1]; data[i + 2] = c[2]; data[i + 3] = c.length > 3 ? c[3] : 255;
      }
    }
    return {
      width: w, height: h, data: data,
      getContext: function (kind) {
        if (kind !== "2d") return null;
        return {
          getImageData: function (sx, sy, sw, sh) {
            const out = new Uint8ClampedArray(sw * sh * 4);
            for (let y = 0; y < sh; y++) {
              for (let x = 0; x < sw; x++) {
                const src = ((y + sy) * w + (x + sx)) * 4;
                const dst = (y * sw + x) * 4;
                out[dst] = data[src]; out[dst + 1] = data[src + 1];
                out[dst + 2] = data[src + 2]; out[dst + 3] = data[src + 3];
              }
            }
            return { width: sw, height: sh, data: out };
          }
        };
      }
    };
  };

  // ---- minimal TIFF/JPEG builders for the EXIF tests ----------------------
  const mcImgTPayload = function (type, values, le) {
    if (type === 2) {
      const s = String(values);
      const out = new Uint8Array(s.length + 1);
      for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
      return out;
    }
    const size = mcImgTypeSizes[type];
    const out = new Uint8Array(size * values.length);
    const dv = new DataView(out.buffer);
    values.forEach(function (v, i) {
      const o = i * size;
      if (type === 1) out[o] = v & 255;
      else if (type === 3) dv.setUint16(o, v, le);
      else if (type === 4) dv.setUint32(o, v, le);
      else if (type === 5) { dv.setUint32(o, v[0], le); dv.setUint32(o + 4, v[1], le); }
    });
    return out;
  };

  const mcImgTIfd = function (entries, le, heapBase, heap) {
    const buf = new Uint8Array(2 + 12 * entries.length + 4);
    const dv = new DataView(buf.buffer);
    dv.setUint16(0, entries.length, le);
    entries.forEach(function (e, i) {
      const off = 2 + i * 12;
      const pay = mcImgTPayload(e.type, e.values, le);
      const count = e.type === 2 ? pay.length : e.values.length;
      dv.setUint16(off, e.tag, le);
      dv.setUint16(off + 2, e.type, le);
      dv.setUint32(off + 4, count, le);
      if (pay.length <= 4) {
        for (let j = 0; j < pay.length; j++) buf[off + 8 + j] = pay[j];
      } else {
        dv.setUint32(off + 8, heapBase + heap.length, le);
        for (let j = 0; j < pay.length; j++) heap.push(pay[j]);
      }
    });
    return buf; // trailing 4 bytes already zero = "no next IFD"
  };

  const mcImgTTiff = function (le, ifd0, exifEntries, gpsEntries) {
    const n0 = ifd0.length + (exifEntries ? 1 : 0) + (gpsEntries ? 1 : 0);
    const ifd0Len = 2 + 12 * n0 + 4;
    const exifLen = exifEntries ? 2 + 12 * exifEntries.length + 4 : 0;
    const gpsLen = gpsEntries ? 2 + 12 * gpsEntries.length + 4 : 0;
    const ifd0Off = 8;
    const exifOff = ifd0Off + ifd0Len;
    const gpsOff = exifOff + exifLen;
    const heapBase = gpsOff + gpsLen;

    const full0 = ifd0.slice();
    if (exifEntries) full0.push({ tag: 0x8769, type: 4, values: [exifOff] });
    if (gpsEntries) full0.push({ tag: 0x8825, type: 4, values: [gpsOff] });

    const heap = [];
    const b0 = mcImgTIfd(full0, le, heapBase, heap);
    const bE = exifEntries ? mcImgTIfd(exifEntries, le, heapBase, heap) : new Uint8Array(0);
    const bG = gpsEntries ? mcImgTIfd(gpsEntries, le, heapBase, heap) : new Uint8Array(0);

    const head = new Uint8Array(8);
    const hdv = new DataView(head.buffer);
    hdv.setUint16(0, le ? 0x4949 : 0x4d4d, false);
    hdv.setUint16(2, 42, le);
    hdv.setUint32(4, ifd0Off, le);

    const out = new Uint8Array(8 + b0.length + bE.length + bG.length + heap.length);
    let p = 0;
    out.set(head, p); p += 8;
    out.set(b0, p); p += b0.length;
    out.set(bE, p); p += bE.length;
    out.set(bG, p); p += bG.length;
    out.set(new Uint8Array(heap), p);
    return out;
  };

  const mcImgTJpeg = function (tiff) {
    const segLen = 2 + 6 + tiff.length;
    const out = new Uint8Array(4 + segLen + 2);
    out[0] = 0xff; out[1] = 0xd8; out[2] = 0xff; out[3] = 0xe1;
    out[4] = (segLen >> 8) & 255; out[5] = segLen & 255;
    const exif = "Exif\0\0";
    for (let i = 0; i < 6; i++) out[6 + i] = exif.charCodeAt(i);
    out.set(tiff, 12);
    out[4 + segLen] = 0xff; out[5 + segLen] = 0xd9;
    return out;
  };

  const mcImgBytes = function (arr) { return new Uint8Array(arr); };
  const mcImgAscii = function (s) {
    const o = new Uint8Array(s.length);
    for (let i = 0; i < s.length; i++) o[i] = s.charCodeAt(i);
    return o;
  };

  (async function () {
    /* ---------------------- 1. sniff ------------------------------------ */
    const jpg = mcImgSniff(mcImgBytes([0xff, 0xd8, 0xff, 0xe0, 0, 16]));
    mcImgEq("sniff jpeg mime", jpg.mime, "image/jpeg");
    mcImgEq("sniff jpeg ext", jpg.ext, "jpg");
    mcImgEq("sniff jpeg ok", jpg.ok, true);

    const png = mcImgSniff(mcImgBytes([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 13]));
    mcImgEq("sniff png mime", png.mime, "image/png");
    mcImgEq("sniff png ext", png.ext, "png");

    mcImgEq("sniff gif87a", mcImgSniff(mcImgAscii("GIF87a\x01\x00")).mime, "image/gif");
    mcImgEq("sniff gif89a ext", mcImgSniff(mcImgAscii("GIF89a\x01\x00")).ext, "gif");

    const webpBytes = mcImgAscii("RIFF\x00\x00\x00\x00WEBPVP8 ");
    mcImgEq("sniff webp", mcImgSniff(webpBytes).mime, "image/webp");
    mcImgEq("sniff riff-but-not-webp rejected", mcImgSniff(mcImgAscii("RIFF\x00\x00\x00\x00WAVEfmt ")).ok, false);

    mcImgEq("sniff bmp", mcImgSniff(mcImgAscii("BM\x00\x00")).mime, "image/bmp");
    mcImgEq("sniff bmp ext", mcImgSniff(mcImgAscii("BM\x00\x00")).ext, "bmp");

    mcImgEq("sniff svg", mcImgSniff(mcImgAscii('<svg xmlns="http://www.w3.org/2000/svg"></svg>')).mime, "image/svg+xml");
    mcImgEq("sniff svg with xml decl", mcImgSniff(mcImgAscii('<?xml version="1.0"?>\n<svg width="10"></svg>')).ok, true);

    const avifBytes = mcImgAscii("\x00\x00\x00 ftypavif\x00\x00\x00\x00avifmif1miaf");
    mcImgEq("sniff avif", mcImgSniff(avifBytes).mime, "image/avif");
    const heicBytes = mcImgAscii("\x00\x00\x00\x18ftypheic\x00\x00\x00\x00heicmif1");
    mcImgEq("sniff heic", mcImgSniff(heicBytes).mime, "image/heic");

    mcImgEq("sniff rejects plain text", mcImgSniff(mcImgAscii("hello world, this is not an image at all")).ok, false);
    mcImgEq("sniff rejects text mime empty", mcImgSniff(mcImgAscii("hello world")).mime, "");
    mcImgEq("sniff empty buffer", mcImgSniff(new Uint8Array(0)).ok, false);
    mcImgEq("sniff zero-byte ArrayBuffer", mcImgSniff(new ArrayBuffer(0)).ok, false);
    mcImgEq("sniff null", mcImgSniff(null).ok, false);
    mcImgEq("sniff undefined", mcImgSniff(undefined).ok, false);
    mcImgEq("sniff accepts ArrayBuffer input", mcImgSniff(mcImgBytes([0xff, 0xd8, 0xff, 0xe1]).buffer).ext, "jpg");

    /* ---------------------- 2. EXIF little-endian ----------------------- */
    const leIfd0 = [
      { tag: 0x010f, type: 2, values: "FujiFilm" },
      { tag: 0x0110, type: 2, values: "X-T30 II" },
      { tag: 0x0112, type: 3, values: [6] },
      { tag: 0x0131, type: 2, values: "Darktable 4.6" },
      { tag: 0x0132, type: 2, values: "2024:03:11 09:14:02" }
    ];
    const leExif = [
      { tag: 0x829a, type: 5, values: [[1, 200]] },
      { tag: 0x829d, type: 5, values: [[28, 10]] },
      { tag: 0x8827, type: 3, values: [400] },
      { tag: 0x9003, type: 2, values: "2024:03:11 09:13:58" },
      { tag: 0x920a, type: 5, values: [[350, 10]] }
    ];
    // 37 deg 25' 19.08" S, 122 deg 08' 28.98" W
    const leGps = [
      { tag: 0x0001, type: 2, values: "S" },
      { tag: 0x0002, type: 5, values: [[37, 1], [25, 1], [1908, 100]] },
      { tag: 0x0003, type: 2, values: "W" },
      { tag: 0x0004, type: 5, values: [[122, 1], [8, 1], [2898, 100]] },
      { tag: 0x0005, type: 1, values: [0] },
      { tag: 0x0006, type: 5, values: [[1234, 10]] }
    ];
    const leJpeg = mcImgTJpeg(mcImgTTiff(true, leIfd0, leExif, leGps));
    const exLE = mcImgExif(leJpeg);

    mcImgOk("exif LE parses", exLE !== null);
    mcImgEq("exif LE make", exLE && exLE.make, "FujiFilm");
    mcImgEq("exif LE model", exLE && exLE.model, "X-T30 II");
    mcImgEq("exif LE orientation", exLE && exLE.orientation, 6);
    mcImgEq("exif LE software", exLE && exLE.software, "Darktable 4.6");
    mcImgEq("exif LE dateTime prefers DateTimeOriginal", exLE && exLE.dateTime, "2024:03:11 09:13:58");
    mcImgEq("exif LE iso", exLE && exLE.iso, 400);
    mcImgNear("exif LE fNumber", exLE && exLE.fNumber, 2.8, 1e-9);
    mcImgNear("exif LE exposure", exLE && exLE.exposure, 1 / 200, 1e-9);
    mcImgNear("exif LE focalLength", exLE && exLE.focalLength, 35, 1e-9);
    mcImgOk("exif LE raw is populated", exLE && exLE.raw && Object.keys(exLE.raw).length >= 8,
      exLE && exLE.raw && Object.keys(exLE.raw).length);
    mcImgEq("exif LE raw carries Make", exLE && exLE.raw && exLE.raw.Make, "FujiFilm");

    /* ---------------------- 3. GPS -------------------------------------- */
    mcImgOk("exif LE gps present", exLE && exLE.gps !== null);
    mcImgNear("gps lat S is negative decimal", exLE && exLE.gps && exLE.gps.lat, -(37 + 25 / 60 + 19.08 / 3600), 1e-9);
    mcImgNear("gps lon W is negative decimal", exLE && exLE.gps && exLE.gps.lon, -(122 + 8 / 60 + 28.98 / 3600), 1e-9);
    mcImgOk("gps lat sign is negative", exLE && exLE.gps && exLE.gps.lat < 0, exLE && exLE.gps && exLE.gps.lat);
    mcImgNear("gps altitude", exLE && exLE.gps && exLE.gps.altitude, 123.4, 1e-9);

    /* ---------------------- 4. EXIF big-endian -------------------------- */
    const beIfd0 = [
      { tag: 0x010f, type: 2, values: "NIKON CORPORATION" },
      { tag: 0x0110, type: 2, values: "NIKON Z 6" },
      { tag: 0x0112, type: 3, values: [8] },
      { tag: 0x0132, type: 2, values: "2021:12:01 18:00:00" }
    ];
    const beGps = [
      { tag: 0x0001, type: 2, values: "N" },
      { tag: 0x0002, type: 5, values: [[51, 1], [30, 1], [2600, 100]] },
      { tag: 0x0003, type: 2, values: "E" },
      { tag: 0x0004, type: 5, values: [[0, 1], [7, 1], [3900, 100]] }
    ];
    const beJpeg = mcImgTJpeg(mcImgTTiff(false, beIfd0, [{ tag: 0x8827, type: 3, values: [64] }], beGps));
    const exBE = mcImgExif(beJpeg);

    mcImgOk("exif BE parses", exBE !== null);
    mcImgEq("exif BE make", exBE && exBE.make, "NIKON CORPORATION");
    mcImgEq("exif BE model", exBE && exBE.model, "NIKON Z 6");
    mcImgEq("exif BE orientation", exBE && exBE.orientation, 8);
    mcImgEq("exif BE iso from sub-IFD", exBE && exBE.iso, 64);
    mcImgEq("exif BE dateTime falls back to IFD0", exBE && exBE.dateTime, "2021:12:01 18:00:00");
    mcImgNear("exif BE gps lat N positive", exBE && exBE.gps && exBE.gps.lat, 51 + 30 / 60 + 26 / 3600, 1e-9);
    mcImgNear("exif BE gps lon E positive", exBE && exBE.gps && exBE.gps.lon, 0 + 7 / 60 + 39 / 3600, 1e-9);
    mcImgEq("exif BE gps altitude absent", exBE && exBE.gps && exBE.gps.altitude, null);

    /* ---------------------- 5. EXIF null paths -------------------------- */
    mcImgEq("exif null for PNG header", mcImgExif(mcImgBytes([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 1, 2, 3, 4])), null);
    mcImgEq("exif null for empty buffer", mcImgExif(new Uint8Array(0)), null);
    mcImgEq("exif null for zero-byte ArrayBuffer", mcImgExif(new ArrayBuffer(0)), null);
    mcImgEq("exif null for truncated jpeg (SOI only)", mcImgExif(mcImgBytes([0xff, 0xd8])), null);
    mcImgEq("exif null for jpeg without APP1", mcImgExif(mcImgBytes([0xff, 0xd8, 0xff, 0xdb, 0x00, 0x04, 0x00, 0x00, 0xff, 0xd9])), null);
    mcImgEq("exif null for garbage text", mcImgExif(mcImgAscii("this is definitely not a jpeg file")), null);
    mcImgEq("exif null for null input", mcImgExif(null), null);
    // Chop the APP1 payload in half: the header is valid, the IFD data is not.
    const chopped = leJpeg.slice(0, 12 + 24);
    mcImgOk("exif survives truncated APP1", (function () {
      try { mcImgExif(chopped); return true; } catch (e) { return false; }
    })());

    /* ---------------------- 6. analyse: solid red ----------------------- */
    const red = mcImgFake(64, 64, function () { return [255, 0, 0]; });
    const aRed = await mcImgAnalyse(red);
    mcImgEq("red width", aRed.width, 64);
    mcImgEq("red height", aRed.height, 64);
    mcImgEq("red orientation", aRed.orientation, "square");
    mcImgNear("red aspect", aRed.aspect, 1, 1e-9);
    mcImgNear("red megapixels", aRed.megapixels, 0.004, 1e-3);
    mcImgOk("red saturation high", aRed.saturation > 0.95, aRed.saturation);
    mcImgOk("red entropy ~0", aRed.entropy < 0.01, aRed.entropy);
    mcImgOk("red edgeDensity ~0", aRed.edgeDensity < 0.001, aRed.edgeDensity);
    mcImgOk("red sharpness ~0", aRed.sharpness < 0.001, aRed.sharpness);
    mcImgEq("red palette length 1", aRed.palette.length, 1);
    mcImgEq("red dominant hex", aRed.dominant && aRed.dominant.hex, "#ff0000");
    mcImgNear("red dominant share", aRed.dominant && aRed.dominant.share, 1, 1e-6);
    mcImgEq("red isGrayscale false", aRed.isGrayscale, false);
    mcImgNear("red brightness = Rec709 red weight", aRed.brightness, 0.2126, 1e-3);
    mcImgEq("red isDark", aRed.isDark, true);
    mcImgOk("red colorfulness high", aRed.colorfulness > 50, aRed.colorfulness);
    mcImgEq("red histogram r bin 255 full", aRed.histogram.r[255], 4096);
    mcImgEq("red histogram b bin 0 full", aRed.histogram.b[0], 4096);
    mcImgOk("red luma histogram sums to pixel count",
      aRed.histogram.luma.reduce(function (a, b) { return a + b; }, 0) === 4096);

    /* ---------------------- 7. analyse: 50/50 black-white --------------- */
    const bw = mcImgFake(64, 64, function (x) { return x < 32 ? [0, 0, 0] : [255, 255, 255]; });
    const aBw = await mcImgAnalyse(bw);
    mcImgOk("bw contrast high", aBw.contrast > 0.4, aBw.contrast);
    mcImgOk("bw edgeDensity > 0", aBw.edgeDensity > 0, aBw.edgeDensity);
    mcImgEq("bw isGrayscale true", aBw.isGrayscale, true);
    mcImgEq("bw palette length 2", aBw.palette.length, 2);
    mcImgNear("bw brightness ~0.5", aBw.brightness, 0.5, 0.01);
    mcImgNear("bw entropy ~1 bit", aBw.entropy, 1, 0.01);
    mcImgNear("bw colorfulness ~0 (grey has no opponent signal)", aBw.colorfulness, 0, 1e-6);
    mcImgOk("bw sharpness > 0 (a hard edge is not blur)", aBw.sharpness > 0, aBw.sharpness);
    mcImgEq("bw isDark false", aBw.isDark, false);

    /* ---------------------- 8. analyse: noise --------------------------- */
    const rnd = mcImgRng(12345);
    const noise = mcImgFake(64, 64, function () {
      return [Math.floor(rnd() * 256), Math.floor(rnd() * 256), Math.floor(rnd() * 256)];
    });
    const aNoise = await mcImgAnalyse(noise);
    mcImgOk("noise entropy high", aNoise.entropy > 6, aNoise.entropy);
    mcImgOk("noise edgeDensity high", aNoise.edgeDensity > 0.3, aNoise.edgeDensity);
    mcImgOk("noise sharpness high", aNoise.sharpness > 1000, aNoise.sharpness);
    mcImgOk("noise not grayscale", aNoise.isGrayscale === false);
    mcImgOk("noise palette non-empty", aNoise.palette.length >= 2, aNoise.palette.length);

    /* ---------------------- 9. determinism ------------------------------ */
    const aNoise2 = await mcImgAnalyse(noise);
    mcImgEq("palette is stable across runs (seeded k-means)",
      aNoise.palette.map(function (p) { return p.hex; }).join(","),
      aNoise2.palette.map(function (p) { return p.hex; }).join(","));
    mcImgEq("phash stable across runs", aNoise.phash, aNoise2.phash);

    /* ---------------------- 10. pHash ----------------------------------- */
    // The subject has to be BROADBAND for this section to measure anything. A
    // two-sinusoid wave puts just 14 of the 63 AC coefficients above the 8-bit
    // quantisation floor, so the median lands in the noise and ~24 of the 64
    // bits are decided by rounding — the hash then moves by 26 bits under a
    // gain the eye cannot see. That is the documented limit of DCT pHash (see
    // mcImgPHashFromLuma), not a defect to test for, and it cannot be hardened
    // away: fourteen stable coefficients are not 64 stable bits, and every
    // threshold that quietens the noise bits also collapses unrelated images
    // onto each other. So the fixture carries a real spectrum instead —
    // six incommensurate sinusoids plus deterministic grain fill 62 of the 63
    // coefficients, the way a photograph does.
    const mcImgGrain = function (x, y) {
      // Value noise standing in for sensor grain. Must be a pure function of
      // (x, y): base and brighter are filled by two independent passes.
      let h = (Math.imul(x + 1, 73856093) ^ Math.imul(y + 1, 19349663)) >>> 0;
      h = Math.imul(h ^ (h >>> 13), 1274126177) >>> 0;
      return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
    };
    const photo = function (x, y) {
      const v = 146
        + 40 * Math.sin(x * 0.23 + 0.7) + 30 * Math.sin(y * 0.14)
        + 19 * Math.sin((x + y) * 0.41) + 13 * Math.sin((x - 2 * y) * 0.67)
        + 10 * Math.sin(x * 1.07 + y * 0.49) + 7 * Math.sin(y * 1.43)
        + 24 * (mcImgGrain(x, y) - 0.5);
      return [v, v * 0.94, v * 0.86];
    };
    const base = mcImgFake(64, 64, photo);
    // Deliberately harsher than the wave it replaces. That one peaked at luma
    // 218, so min(255, c * 1.1) never once clipped and the assertion below was
    // only ever testing a pure gain. This one peaks at ~254, so the +10% drives
    // 83 channel samples into the ceiling and the highlight detail there is
    // genuinely destroyed — gain, clipping and 8-bit requantisation at once.
    const brighter = mcImgFake(64, 64, function (x, y) {
      const c = photo(x, y);
      return [Math.min(255, c[0] * 1.1), Math.min(255, c[1] * 1.1), Math.min(255, c[2] * 1.1)];
    });
    const checker = mcImgFake(64, 64, function (x, y) {
      const on = (((x >> 3) + (y >> 3)) & 1) === 1;
      return on ? [235, 235, 235] : [20, 20, 20];
    });

    const hBase = (await mcImgAnalyse(base)).phash;
    const hBase2 = await mcImgPHash(base);
    const hBright = (await mcImgAnalyse(brighter)).phash;
    const hCheck = (await mcImgAnalyse(checker)).phash;

    mcImgEq("phash length 16", hBase.length, 16);
    mcImgOk("phash is hex", /^[0-9a-f]{16}$/.test(hBase), hBase);
    mcImgEq("mcImgPHash agrees with mcImgAnalyse", hBase2, hBase);
    mcImgEq("phash of itself is distance 0", mcImgHamming(hBase, hBase), 0);
    mcImgOk("phash survives +10% exposure (<=6)", mcImgHamming(hBase, hBright) <= 6, mcImgHamming(hBase, hBright));
    mcImgOk("phash of a different pattern is far (>15)", mcImgHamming(hBase, hCheck) > 15, mcImgHamming(hBase, hCheck));
    mcImgEq("similar() true for exposure variant", mcImgSimilar(hBase, hBright), true);
    mcImgEq("similar() false for different pattern", mcImgSimilar(hBase, hCheck), false);

    /* ---------------------- 11. hamming robustness ---------------------- */
    mcImgEq("hamming ff vs 00", mcImgHamming("ff", "00"), 8);
    mcImgEq("hamming identical", mcImgHamming("ffffffffffffffff", "ffffffffffffffff"), 0);
    mcImgEq("hamming one bit", mcImgHamming("0000000000000001", "0000000000000000"), 1);
    mcImgEq("hamming odd-length hex -> sentinel", mcImgHamming("abc", "abc"), mcImgHammingSentinel);
    mcImgEq("hamming mismatched length -> sentinel", mcImgHamming("abcd", "abcdef"), mcImgHammingSentinel);
    mcImgEq("hamming non-hex -> sentinel", mcImgHamming("zzzzzzzzzzzzzzzz", "0000000000000000"), mcImgHammingSentinel);
    mcImgEq("hamming null -> sentinel", mcImgHamming(null, "0000000000000000"), mcImgHammingSentinel);
    mcImgEq("hamming empty -> sentinel", mcImgHamming("", ""), mcImgHammingSentinel);
    mcImgOk("hamming sentinel is far above 64", mcImgHammingSentinel > 64);
    mcImgEq("similar() false on sentinel", mcImgSimilar("abc", "abc"), false);

    /* ---------------------- 12. degenerate sources ---------------------- */
    const one = mcImgFake(1, 1, function () { return [10, 200, 30]; });
    const a1 = await mcImgAnalyse(one);
    mcImgEq("1x1 width", a1.width, 1);
    mcImgEq("1x1 edgeDensity 0 (no interior)", a1.edgeDensity, 0);
    mcImgEq("1x1 sharpness 0", a1.sharpness, 0);
    mcImgEq("1x1 palette length 1", a1.palette.length, 1);
    mcImgEq("1x1 phash is 16 chars", a1.phash.length, 16);

    const zero = mcImgFake(0, 0, null);
    const a0 = await mcImgAnalyse(zero);
    mcImgEq("0x0 width 0", a0.width, 0);
    mcImgEq("0x0 palette empty", a0.palette.length, 0);
    mcImgEq("0x0 dominant null", a0.dominant, null);
    mcImgEq("0x0 histogram present", a0.histogram.luma.length, 256);

    const aNull = await mcImgAnalyse(null);
    mcImgEq("null source width 0", aNull.width, 0);
    mcImgEq("null source phash zeroed", aNull.phash, "0000000000000000");
    const aJunk = await mcImgAnalyse({ width: 10, height: 10 });   // no getContext, no canvas host
    mcImgEq("source without getContext returns geometry", aJunk.width, 10);
    mcImgEq("source without getContext has empty palette", aJunk.palette.length, 0);
    mcImgEq("string source does not throw", (await mcImgAnalyse("nope")).width, 0);

    mcImgEq("thumb null source", await mcImgThumb(null, 128), null);
    mcImgEq("thumb without a real canvas returns null", await mcImgThumb(base, 128), null);
    mcImgEq("phash of null source", await mcImgPHash(null), null);

    /* ---------------------- 13. fmtBytes -------------------------------- */
    mcImgEq("fmtBytes 0", mcImgFmtBytes(0), "0 B");
    mcImgEq("fmtBytes 1", mcImgFmtBytes(1), "1 B");
    mcImgEq("fmtBytes 1023", mcImgFmtBytes(1023), "1023 B");
    mcImgEq("fmtBytes 1024", mcImgFmtBytes(1024), "1.0 KB");
    mcImgEq("fmtBytes 1536", mcImgFmtBytes(1536), "1.5 KB");
    mcImgEq("fmtBytes 1048575", mcImgFmtBytes(1048575), "1024.0 KB");
    mcImgEq("fmtBytes 1048576", mcImgFmtBytes(1048576), "1.0 MB");
    mcImgEq("fmtBytes 1468006", mcImgFmtBytes(1468006), "1.4 MB");
    mcImgEq("fmtBytes 1GiB", mcImgFmtBytes(1073741824), "1.0 GB");
    mcImgEq("fmtBytes negative", mcImgFmtBytes(-5), "0 B");
    mcImgEq("fmtBytes NaN", mcImgFmtBytes(NaN), "0 B");
    mcImgEq("fmtBytes null", mcImgFmtBytes(null), "0 B");
    mcImgEq("fmtBytes Infinity", mcImgFmtBytes(Infinity), "0 B");

    /* ---------------------- 14. classifier sanity ----------------------- */
    mcImgEq("solid fill classifies as graphic", aRed.likely, "graphic/illustration");
    mcImgEq("noise classifies as photograph", aNoise.likely, "photograph");
    mcImgOk("likely is one of the five labels",
      ["photograph", "screenshot", "graphic/illustration", "chart/diagram", "text document"].indexOf(aBw.likely) >= 0,
      aBw.likely);

    /* ---------------------- summary ------------------------------------- */
    const total = mcImgPassN + mcImgFailN;
    if (mcImgFailN) {
      console.log("\nFAILURES:");
      mcImgFails.forEach(function (f) { console.log("  FAIL  " + f); });
    }
    console.log("\n" + (mcImgFailN ? "FAIL" : "PASS") +
      " — " + mcImgPassN + "/" + total + " assertions passed" +
      (mcImgFailN ? ", " + mcImgFailN + " failed" : ""));
    if (mcImgFailN) process.exit(1);
  })().catch(function (e) {
    console.log("FAIL — self-test threw: " + (e && e.stack ? e.stack : e));
    process.exit(1);
  });
}
