/* musa core — hashing, encoding, compression and content-addressing primitives.
 *
 * Plain script scope on purpose: this file is pasted verbatim into a single-file
 * HTML app, so no modules, no wrapper, no globals that aren't `mcHx`-prefixed.
 *
 * READ THIS BEFORE USING ANYTHING HERE FOR SECURITY
 * -------------------------------------------------
 * CRYPTOGRAPHIC (collision/preimage resistant, safe to use as a digest):
 *     mcHxSha256, mcHxSha256Bytes, mcHxSha256Stream, mcHxHmacSha256
 * LEGACY, BROKEN FOR SECURITY, compatibility only:
 *     mcHxSha1, mcHxSha1Bytes   — SHA-1 collisions are public since SHAttered
 *                                 (2017). Use it to talk to something that
 *                                 already speaks SHA-1. Never to prove anything.
 * NOT HASHES IN THE SECURITY SENSE AT ALL — trivially invertible, trivially
 * collidable, for bucketing/sharding/cache-keys only:
 *     mcHxFnv1a32, mcHxMurmur32, mcHxCrc32
 * NOT RANDOM IN THE SECURITY SENSE:
 *     mcHxSeededRng and any id derived from it. mcHxUuidV4 uses the platform
 *     CSPRNG when one is present and says so via mcHxUuidV4Secure().
 *
 * That three-way split is the whole reason the naming is verbose. The usual way
 * this goes wrong is someone reaching for the fast one because it is fast.
 *
 * Every public function is total: hostile input (null, undefined, NaN, wrong
 * type, lone surrogates, 100MB strings) returns a documented sentinel — `null`
 * for "could not produce a value" — rather than throwing. The single exception
 * is mcHxStableStringifyStrict, whose entire contract is to throw; see there.
 */

/* ================================================================== *
 * Bytes and UTF-8
 * ================================================================== */

// Lone surrogates are the recurring trap: they are legal in a JS string and
// illegal in UTF-8. TextEncoder replaces them with U+FFFD, so we do too —
// silently dropping them would make two different strings hash the same, and
// throwing would violate the never-throw rule. Replacement is lossy but at
// least it is lossy in the same way everywhere.
function mcHxUtf8Encode(str) {
  if (typeof str !== "string") return null;
  const n = str.length;
  // Worst case is 3 bytes per BMP code unit; surrogate pairs are 4 bytes for
  // 2 units, which is less, so 3n is a safe upper bound.
  const out = new Uint8Array(n * 3);
  let o = 0;
  for (let i = 0; i < n; i++) {
    let cp = str.charCodeAt(i);
    if (cp >= 0xd800 && cp <= 0xdbff) {
      const lo = i + 1 < n ? str.charCodeAt(i + 1) : 0;
      if (lo >= 0xdc00 && lo <= 0xdfff) {
        cp = 0x10000 + ((cp - 0xd800) << 10) + (lo - 0xdc00);
        i++;
      } else {
        cp = 0xfffd; // unpaired high surrogate
      }
    } else if (cp >= 0xdc00 && cp <= 0xdfff) {
      cp = 0xfffd; // stray low surrogate
    }
    if (cp < 0x80) {
      out[o++] = cp;
    } else if (cp < 0x800) {
      out[o++] = 0xc0 | (cp >> 6);
      out[o++] = 0x80 | (cp & 63);
    } else if (cp < 0x10000) {
      out[o++] = 0xe0 | (cp >> 12);
      out[o++] = 0x80 | ((cp >> 6) & 63);
      out[o++] = 0x80 | (cp & 63);
    } else {
      out[o++] = 0xf0 | (cp >> 18);
      out[o++] = 0x80 | ((cp >> 12) & 63);
      out[o++] = 0x80 | ((cp >> 6) & 63);
      out[o++] = 0x80 | (cp & 63);
    }
  }
  return out.subarray(0, o);
}

// Strict decoder: overlong forms, surrogate code points and anything above
// U+10FFFF become U+FFFD, one replacement per maximal invalid subpart (the
// WHATWG rule). Lenient decoders that accept overlongs are a classic filter
// bypass, which is why we do not.
function mcHxUtf8Decode(bytes) {
  const b = mcHxToBytes(bytes);
  if (b === null) return null;
  const parts = [];
  let chunk = [];
  for (let i = 0; i < b.length; ) {
    const c = b[i];
    let cp = -1;
    let need = 0;
    let min = 0;
    if (c < 0x80) { cp = c; need = 0; min = 0; }
    else if (c >= 0xc2 && c <= 0xdf) { cp = c & 31; need = 1; min = 0x80; }
    else if (c >= 0xe0 && c <= 0xef) { cp = c & 15; need = 2; min = 0x800; }
    else if (c >= 0xf0 && c <= 0xf4) { cp = c & 7; need = 3; min = 0x10000; }
    else { chunk.push(0xfffd); i++; continue; }
    let ok = true;
    let j = 1;
    for (; j <= need; j++) {
      const cc = i + j < b.length ? b[i + j] : -1;
      if (cc < 0x80 || cc > 0xbf) { ok = false; break; }
      cp = (cp << 6) | (cc & 63);
    }
    if (!ok) {
      chunk.push(0xfffd);
      i += j; // consume the bytes we did accept, per maximal-subpart
      continue;
    }
    if (cp < min || cp > 0x10ffff || (cp >= 0xd800 && cp <= 0xdfff)) {
      chunk.push(0xfffd);
      i += need + 1;
      continue;
    }
    if (cp < 0x10000) {
      chunk.push(cp);
    } else {
      cp -= 0x10000;
      chunk.push(0xd800 + (cp >> 10), 0xdc00 + (cp & 1023));
    }
    i += need + 1;
    if (chunk.length >= 4096) { parts.push(String.fromCharCode.apply(null, chunk)); chunk = []; }
  }
  if (chunk.length) parts.push(String.fromCharCode.apply(null, chunk));
  return parts.join("");
}

// The single input funnel: strings are UTF-8 encoded, byte containers pass
// through. Returns null (not an empty array) for anything else, so that
// mcHxSha256(null) is distinguishable from mcHxSha256("").
function mcHxToBytes(input) {
  if (input === null || input === undefined) return null;
  if (typeof input === "string") return mcHxUtf8Encode(input);
  if (input instanceof Uint8Array) return input;
  if (typeof ArrayBuffer !== "undefined" && input instanceof ArrayBuffer) return new Uint8Array(input);
  if (ArrayBuffer.isView(input)) return new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
  if (Array.isArray(input)) {
    const out = new Uint8Array(input.length);
    for (let i = 0; i < input.length; i++) {
      const v = input[i];
      // Reject rather than coerce: `[256]` and `[-1]` and `[NaN]` are bugs at
      // the call site, and & 255 would hide them.
      if (typeof v !== "number" || !Number.isInteger(v) || v < 0 || v > 255) return null;
      out[i] = v;
    }
    return out;
  }
  return null;
}

// Best-effort constant-time compare, for verifying HMACs. "Best effort" is not
// a hedge: a JIT can short-circuit, and there is no way to stop it from JS. It
// removes the trivially exploitable early-return, nothing more.
function mcHxTimingSafeEqual(a, b) {
  const x = mcHxToBytes(a);
  const y = mcHxToBytes(b);
  if (x === null || y === null) return false;
  if (x.length !== y.length) return false;
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}

/* ================================================================== *
 * Encodings — hex, base64/base64url, base32, percent
 * All decoders return null on malformed input; none throw.
 * ================================================================== */

const mcHxHexChars = "0123456789abcdef";

function mcHxToHex(input) {
  const b = mcHxToBytes(input);
  if (b === null) return null;
  let s = "";
  for (let i = 0; i < b.length; i++) {
    s += mcHxHexChars.charAt(b[i] >> 4) + mcHxHexChars.charAt(b[i] & 15);
  }
  return s;
}

function mcHxFromHex(str) {
  if (typeof str !== "string") return null;
  if (str.length % 2 !== 0) return null;
  const out = new Uint8Array(str.length >> 1);
  for (let i = 0; i < out.length; i++) {
    const hi = mcHxHexVal(str.charCodeAt(i * 2));
    const lo = mcHxHexVal(str.charCodeAt(i * 2 + 1));
    if (hi < 0 || lo < 0) return null;
    out[i] = (hi << 4) | lo;
  }
  return out;
}

function mcHxHexVal(c) {
  if (c >= 48 && c <= 57) return c - 48;
  if (c >= 97 && c <= 102) return c - 87;
  if (c >= 65 && c <= 70) return c - 55;
  return -1;
}

const mcHxB64Std = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const mcHxB64Url = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

// One reverse table for both alphabets. Decoding is deliberately lenient about
// which of `+/` vs `-_` it sees: callers routinely lose track of which variant
// produced a token, and mixing them cannot create an ambiguity because the two
// alphabets agree on the first 62 symbols.
const mcHxB64Rev = (function () {
  const t = new Int8Array(256).fill(-1);
  for (let i = 0; i < 64; i++) t[mcHxB64Std.charCodeAt(i)] = i;
  t[45] = 62; // '-'
  t[95] = 63; // '_'
  return t;
})();

function mcHxToBase64(input, opts) {
  return mcHxB64Encode(input, mcHxB64Std, !(opts && opts.pad === false));
}

// Padding defaults to OFF for base64url: that is what JWT/URL fragments expect,
// and `=` needs percent-escaping in a query string anyway.
function mcHxToBase64Url(input, opts) {
  return mcHxB64Encode(input, mcHxB64Url, !!(opts && opts.pad === true));
}

function mcHxB64Encode(input, alpha, pad) {
  const b = mcHxToBytes(input);
  if (b === null) return null;
  const n = b.length;
  const parts = [];
  let s = "";
  let i = 0;
  for (; i + 2 < n; i += 3) {
    const v = (b[i] << 16) | (b[i + 1] << 8) | b[i + 2];
    s += alpha.charAt((v >> 18) & 63) + alpha.charAt((v >> 12) & 63) +
         alpha.charAt((v >> 6) & 63) + alpha.charAt(v & 63);
    if (s.length >= 8192) { parts.push(s); s = ""; }
  }
  const rem = n - i;
  if (rem === 1) {
    const v = b[i] << 16;
    s += alpha.charAt((v >> 18) & 63) + alpha.charAt((v >> 12) & 63) + (pad ? "==" : "");
  } else if (rem === 2) {
    const v = (b[i] << 16) | (b[i + 1] << 8);
    s += alpha.charAt((v >> 18) & 63) + alpha.charAt((v >> 12) & 63) +
         alpha.charAt((v >> 6) & 63) + (pad ? "=" : "");
  }
  parts.push(s);
  return parts.join("");
}

// Accepts padded or unpadded, standard or url alphabet, and ASCII whitespace
// (base64 in the wild arrives line-wrapped). Anything else is null.
function mcHxFromBase64(str) {
  if (typeof str !== "string") return null;
  const codes = [];
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (c === 32 || c === 9 || c === 10 || c === 13) continue;
    if (c === 61) { // '=' — only legal in the final group
      // Everything from the first '=' on must be '=' or whitespace.
      for (let j = i + 1; j < str.length; j++) {
        const d = str.charCodeAt(j);
        if (d === 61 || d === 32 || d === 9 || d === 10 || d === 13) continue;
        return null;
      }
      break;
    }
    const v = c < 256 ? mcHxB64Rev[c] : -1;
    if (v < 0) return null;
    codes.push(v);
  }
  const rem = codes.length % 4;
  if (rem === 1) return null; // a lone trailing symbol carries 6 bits: impossible
  const outLen = ((codes.length / 4) | 0) * 3 + (rem === 2 ? 1 : rem === 3 ? 2 : 0);
  const out = new Uint8Array(outLen);
  let o = 0;
  let i = 0;
  for (; i + 3 < codes.length; i += 4) {
    const v = (codes[i] << 18) | (codes[i + 1] << 12) | (codes[i + 2] << 6) | codes[i + 3];
    out[o++] = (v >> 16) & 255;
    out[o++] = (v >> 8) & 255;
    out[o++] = v & 255;
  }
  if (rem === 2) {
    out[o++] = ((codes[i] << 2) | (codes[i + 1] >> 4)) & 255;
  } else if (rem === 3) {
    out[o++] = ((codes[i] << 2) | (codes[i + 1] >> 4)) & 255;
    out[o++] = ((codes[i + 1] << 4) | (codes[i + 2] >> 2)) & 255;
  }
  return out;
}

const mcHxFromBase64Url = mcHxFromBase64; // same decoder; the alphabets are disjoint where it matters

const mcHxB32Alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"; // RFC 4648 §6

// RFC 4648 base32. Padded by default because the RFC requires it and because
// concatenated unpadded groups silently corrupt.
function mcHxToBase32(input, opts) {
  const b = mcHxToBytes(input);
  if (b === null) return null;
  const pad = !(opts && opts.pad === false);
  let s = "";
  let acc = 0;
  let bits = 0;
  for (let i = 0; i < b.length; i++) {
    acc = (acc << 8) | b[i];
    bits += 8;
    while (bits >= 5) {
      bits -= 5;
      s += mcHxB32Alpha.charAt((acc >> bits) & 31);
    }
  }
  if (bits > 0) s += mcHxB32Alpha.charAt((acc << (5 - bits)) & 31);
  if (pad) while (s.length % 8 !== 0) s += "=";
  return s;
}

function mcHxFromBase32(str) {
  if (typeof str !== "string") return null;
  const vals = [];
  let sawPad = false;
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (c === 32 || c === 9 || c === 10 || c === 13) continue;
    if (c === 61) { sawPad = true; continue; }
    if (sawPad) return null; // data after padding
    let v = -1;
    if (c >= 65 && c <= 90) v = c - 65;
    else if (c >= 97 && c <= 122) v = c - 97; // lowercase accepted on input
    else if (c >= 50 && c <= 55) v = c - 24;  // '2'..'7' -> 26..31
    if (v < 0) return null;
    vals.push(v);
  }
  const rem = vals.length % 8;
  // 8 symbols = 5 bytes. Only these remainders can occur; 1/3/6 would mean a
  // partial byte was encoded, which no encoder produces.
  if (rem === 1 || rem === 3 || rem === 6) return null;
  const out = new Uint8Array(((vals.length * 5) / 8) | 0);
  let acc = 0;
  let bits = 0;
  let o = 0;
  for (let i = 0; i < vals.length; i++) {
    acc = (acc << 5) | vals[i];
    bits += 5;
    if (bits >= 8) {
      bits -= 8;
      out[o++] = (acc >> bits) & 255;
    }
  }
  // Leftover bits must be zero, otherwise the token is non-canonical. We accept
  // it (many encoders in the wild are sloppy) but drop the bits, matching how
  // every mainstream decoder behaves.
  return out;
}

// RFC 3986 unreserved set. Note this is percent-encoding, NOT form encoding:
// `+` is a literal plus here, never a space. Getting those two confused is the
// standard source of "why is my search query full of plus signs".
const mcHxPctSafe = (function () {
  const t = new Uint8Array(256);
  const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  for (let i = 0; i < s.length; i++) t[s.charCodeAt(i)] = 1;
  return t;
})();

function mcHxPercentEncode(input, opts) {
  const b = mcHxToBytes(input);
  if (b === null) return null;
  const extra = opts && typeof opts.safe === "string" ? opts.safe : "";
  const extraSet = new Uint8Array(256);
  for (let i = 0; i < extra.length; i++) {
    const c = extra.charCodeAt(i);
    if (c < 256) extraSet[c] = 1;
  }
  const parts = [];
  let s = "";
  for (let i = 0; i < b.length; i++) {
    const c = b[i];
    if (mcHxPctSafe[c] || extraSet[c]) {
      s += String.fromCharCode(c);
    } else {
      s += "%" + mcHxHexChars.charAt(c >> 4).toUpperCase() + mcHxHexChars.charAt(c & 15).toUpperCase();
    }
    if (s.length >= 8192) { parts.push(s); s = ""; }
  }
  parts.push(s);
  return parts.join("");
}

function mcHxPercentDecodeBytes(str) {
  if (typeof str !== "string") return null;
  const out = new Uint8Array(str.length);
  let o = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (c === 37) {
      const hi = mcHxHexVal(str.charCodeAt(i + 1));
      const lo = mcHxHexVal(str.charCodeAt(i + 2));
      if (hi < 0 || lo < 0) return null; // truncated or non-hex escape
      out[o++] = (hi << 4) | lo;
      i += 2;
    } else if (c < 128) {
      out[o++] = c;
    } else {
      // A non-ASCII literal in a percent-encoded string is already a protocol
      // violation; encode it as UTF-8 rather than dropping information.
      const enc = mcHxUtf8Encode(str.charAt(i));
      for (let k = 0; k < enc.length; k++) out[o++] = enc[k];
    }
  }
  return out.subarray(0, o);
}

// Strict UTF-8 well-formedness. Rejects truncated sequences, stray
// continuation bytes, overlong encodings (the classic "%C0%AF is a slash"
// filter bypass), surrogate halves, and anything past U+10FFFF.
function mcHxUtf8WellFormed(b) {
  if (!b) return false;
  for (let i = 0; i < b.length; ) {
    const c = b[i];
    let need, cp, min;
    if (c < 0x80) { i++; continue; }
    else if (c >= 0xC2 && c <= 0xDF) { need = 1; cp = c & 0x1F; min = 0x80; }
    else if (c >= 0xE0 && c <= 0xEF) { need = 2; cp = c & 0x0F; min = 0x800; }
    else if (c >= 0xF0 && c <= 0xF4) { need = 3; cp = c & 0x07; min = 0x10000; }
    else return false;                       // 0x80-0xC1 and 0xF5-0xFF: never a lead
    for (let k = 1; k <= need; k++) {
      const cc = b[i + k];
      if (cc === undefined || (cc & 0xC0) !== 0x80) return false;
      cp = (cp << 6) | (cc & 0x3F);
    }
    if (cp < min) return false;              // overlong
    if (cp >= 0xD800 && cp <= 0xDFFF) return false;   // surrogate half
    if (cp > 0x10FFFF) return false;
    i += need + 1;
  }
  return true;
}

// Percent-decoding is strict on purpose, unlike mcHxUtf8Decode. A URL whose
// bytes are not valid UTF-8 is corrupt, and returning a string containing
// U+FFFD would make the corruption look like successfully decoded content —
// the caller cannot then tell "the user typed a replacement character" from
// "these bytes were garbage". null is the same sentinel %ZZ already returns.
function mcHxPercentDecode(str) {
  const b = mcHxPercentDecodeBytes(str);
  if (b === null) return null;
  if (!mcHxUtf8WellFormed(b)) return null;
  return mcHxUtf8Decode(b);
}

/* ================================================================== *
 * NON-CRYPTOGRAPHIC hashes. Bucketing, sharding, cache keys, dedupe
 * hints. An attacker who can choose inputs can collide all of these in
 * microseconds. Do not authenticate anything with them.
 * ================================================================== */

const mcHxCrc32Table = (function () {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

// CRC-32/ISO-HDLC (the zip/png one). Returns an unsigned 32-bit number, or -1
// on bad input — -1 is impossible as a real result because the return is
// unsigned, which is why it can double as the sentinel.
function mcHxCrc32(input) {
  const b = mcHxToBytes(input);
  if (b === null) return -1;
  let c = -1;
  for (let i = 0; i < b.length; i++) c = mcHxCrc32Table[(c ^ b[i]) & 255] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

// FNV-1a 32-bit. Math.imul is essential: the FNV prime is 16777619 and a plain
// `*` loses the low bits to float rounding once the product passes 2^53.
function mcHxFnv1a32(input) {
  const b = mcHxToBytes(input);
  if (b === null) return -1;
  let h = 0x811c9dc5;
  for (let i = 0; i < b.length; i++) {
    h ^= b[i];
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

// MurmurHash3 x86_32. Chosen over xxHash32 because its published SMHasher
// vectors are the ones every other implementation is checked against, so a
// mismatch here is unambiguous. Also NOT cryptographic.
function mcHxMurmur32(input, seed) {
  const b = mcHxToBytes(input);
  if (b === null) return -1;
  const s = typeof seed === "number" && Number.isFinite(seed) ? seed >>> 0 : 0;
  const c1 = 0xcc9e2d51;
  const c2 = 0x1b873593;
  let h = s;
  const n = b.length;
  const blocks = n - (n % 4);
  for (let i = 0; i < blocks; i += 4) {
    let k = (b[i] | (b[i + 1] << 8) | (b[i + 2] << 16) | (b[i + 3] << 24)) >>> 0;
    k = Math.imul(k, c1);
    k = (k << 15) | (k >>> 17);
    k = Math.imul(k, c2);
    h ^= k;
    h = (h << 13) | (h >>> 19);
    h = (Math.imul(h, 5) + 0xe6546b64) | 0;
  }
  let k1 = 0;
  const tail = n & 3;
  if (tail === 3) k1 ^= b[blocks + 2] << 16;
  if (tail >= 2) k1 ^= b[blocks + 1] << 8;
  if (tail >= 1) {
    k1 ^= b[blocks];
    k1 = Math.imul(k1, c1);
    k1 = (k1 << 15) | (k1 >>> 17);
    k1 = Math.imul(k1, c2);
    h ^= k1;
  }
  h ^= n;
  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  h = Math.imul(h, 0xc2b2ae35);
  h ^= h >>> 16;
  return h >>> 0;
}

// Convenience for the actual use case: pick one of `buckets` shards. Kept
// separate so nobody has to remember that `% buckets` on a signed int is a bug.
function mcHxBucket(input, buckets) {
  const n = typeof buckets === "number" && Number.isFinite(buckets) && buckets >= 1
    ? Math.floor(buckets) : 0;
  if (n < 1) return -1;
  const h = mcHxMurmur32(input, 0);
  if (h < 0) return -1;
  return h % n;
}

/* ================================================================== *
 * SHA-256 — CRYPTOGRAPHIC. FIPS 180-4.
 * ================================================================== */

const mcHxSha256K = new Int32Array([
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
]);

// Shared scratch. Safe because JS is single-threaded and every one of the 64
// slots is written before it is read within a single block; allocating a fresh
// Int32Array per block cost ~25% of throughput on the 1MB benchmark.
const mcHxSha256W = new Int32Array(64);

function mcHxSha256Block(h, p, off) {
  const w = mcHxSha256W;
  for (let i = 0; i < 16; i++) {
    w[i] = (p[off] << 24) | (p[off + 1] << 16) | (p[off + 2] << 8) | p[off + 3];
    off += 4;
  }
  for (let i = 16; i < 64; i++) {
    const x = w[i - 15];
    const y = w[i - 2];
    const s0 = ((x >>> 7) | (x << 25)) ^ ((x >>> 18) | (x << 14)) ^ (x >>> 3);
    const s1 = ((y >>> 17) | (y << 15)) ^ ((y >>> 19) | (y << 13)) ^ (y >>> 10);
    w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
  }
  let a = h[0], b = h[1], c = h[2], d = h[3], e = h[4], f = h[5], g = h[6], hh = h[7];
  for (let i = 0; i < 64; i++) {
    const S1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
    const ch = (e & f) ^ (~e & g);
    // Five int32 addends max out around 2^34.3, well inside the exact-integer
    // range of a double, so the single |0 at the end is the only truncation.
    const t1 = (hh + S1 + ch + mcHxSha256K[i] + w[i]) | 0;
    const S0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
    const maj = (a & b) ^ (a & c) ^ (b & c);
    const t2 = (S0 + maj) | 0;
    hh = g; g = f; f = e; e = (d + t1) | 0;
    d = c; c = b; b = a; a = (t1 + t2) | 0;
  }
  h[0] = (h[0] + a) | 0; h[1] = (h[1] + b) | 0; h[2] = (h[2] + c) | 0; h[3] = (h[3] + d) | 0;
  h[4] = (h[4] + e) | 0; h[5] = (h[5] + f) | 0; h[6] = (h[6] + g) | 0; h[7] = (h[7] + hh) | 0;
}

// Streaming interface. The one-shot functions are thin wrappers over it, so the
// million-a NIST vector exercises exactly the code path a caller streaming a
// large localStorage blob would take — that is the point of testing it.
function mcHxSha256Stream() {
  return {
    h: new Int32Array([
      0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
    ]),
    buf: new Uint8Array(64),
    bufLen: 0,
    bytes: 0,
    done: false,
    bad: false
  };
}

function mcHxSha256Push(st, input) {
  if (!st || st.done) return false;
  const b = mcHxToBytes(input);
  if (b === null) { st.bad = true; return false; }
  const n = b.length;
  st.bytes += n;
  let i = 0;
  if (st.bufLen > 0) {
    while (st.bufLen < 64 && i < n) st.buf[st.bufLen++] = b[i++];
    if (st.bufLen === 64) { mcHxSha256Block(st.h, st.buf, 0); st.bufLen = 0; }
  }
  while (i + 64 <= n) { mcHxSha256Block(st.h, b, i); i += 64; }
  while (i < n) st.buf[st.bufLen++] = b[i++];
  return true;
}

function mcHxSha256Digest(st) {
  if (!st || st.bad) return null;
  if (!st.done) {
    const total = st.bytes;
    st.buf[st.bufLen++] = 0x80;
    if (st.bufLen > 56) {
      while (st.bufLen < 64) st.buf[st.bufLen++] = 0;
      mcHxSha256Block(st.h, st.buf, 0);
      st.bufLen = 0;
    }
    while (st.bufLen < 56) st.buf[st.bufLen++] = 0;
    // 64-bit big-endian bit length. total is a double; total*8 stays exact well
    // past any plausible input (2^53 bits is a petabyte), and ToUint32 of an
    // exact integer is a true modulo, so the split is safe.
    const hi = Math.floor(total / 536870912) >>> 0; // total*8 / 2^32
    const lo = (total * 8) >>> 0;
    st.buf[56] = (hi >>> 24) & 255; st.buf[57] = (hi >>> 16) & 255;
    st.buf[58] = (hi >>> 8) & 255;  st.buf[59] = hi & 255;
    st.buf[60] = (lo >>> 24) & 255; st.buf[61] = (lo >>> 16) & 255;
    st.buf[62] = (lo >>> 8) & 255;  st.buf[63] = lo & 255;
    mcHxSha256Block(st.h, st.buf, 0);
    st.done = true;
    const out = new Uint8Array(32);
    for (let i = 0; i < 8; i++) {
      out[i * 4] = (st.h[i] >>> 24) & 255;
      out[i * 4 + 1] = (st.h[i] >>> 16) & 255;
      out[i * 4 + 2] = (st.h[i] >>> 8) & 255;
      out[i * 4 + 3] = st.h[i] & 255;
    }
    st.out = out;
  }
  return st.out;
}

function mcHxSha256Bytes(input) {
  const st = mcHxSha256Stream();
  if (!mcHxSha256Push(st, input)) return null;
  return mcHxSha256Digest(st);
}

function mcHxSha256(input) {
  const b = mcHxSha256Bytes(input);
  return b === null ? null : mcHxToHex(b);
}

/* ================================================================== *
 * SHA-1 — LEGACY. Collisions are public and cheap. Present only so the
 * app can read git-style ids and old cache keys. Never use it to decide
 * whether two things are "the same" when an adversary picks either one.
 * ================================================================== */

function mcHxSha1Block(h, p, off) {
  const w = mcHxSha256W; // same scratch: SHA-1 needs 80 words, so use a slice + locals
  for (let i = 0; i < 16; i++) {
    w[i] = (p[off] << 24) | (p[off + 1] << 16) | (p[off + 2] << 8) | p[off + 3];
    off += 4;
  }
  let a = h[0], b = h[1], c = h[2], d = h[3], e = h[4];
  for (let i = 0; i < 80; i++) {
    let t;
    if (i >= 16) {
      // SHA-1's schedule only ever reaches back 16 words, so a 16-word ring
      // buffer is enough and avoids a second 80-word array.
      const x = w[i & 15] ^ w[(i - 14) & 15] ^ w[(i - 8) & 15] ^ w[(i - 3) & 15];
      w[i & 15] = (x << 1) | (x >>> 31);
    }
    if (i < 20) t = (((b & c) | (~b & d)) + 0x5a827999) | 0;
    else if (i < 40) t = ((b ^ c ^ d) + 0x6ed9eba1) | 0;
    else if (i < 60) t = (((b & c) | (b & d) | (c & d)) + 0x8f1bbcdc) | 0;
    else t = ((b ^ c ^ d) + 0xca62c1d6) | 0;
    t = (t + (((a << 5) | (a >>> 27)) + e + w[i & 15])) | 0;
    e = d; d = c; c = (b << 30) | (b >>> 2); b = a; a = t;
  }
  h[0] = (h[0] + a) | 0; h[1] = (h[1] + b) | 0; h[2] = (h[2] + c) | 0;
  h[3] = (h[3] + d) | 0; h[4] = (h[4] + e) | 0;
}

function mcHxSha1Bytes(input) {
  const b = mcHxToBytes(input);
  if (b === null) return null;
  const h = new Int32Array([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
  const n = b.length;
  let i = 0;
  for (; i + 64 <= n; i += 64) mcHxSha1Block(h, b, i);
  const tail = new Uint8Array(n - i > 55 ? 128 : 64);
  let t = 0;
  while (i < n) tail[t++] = b[i++];
  tail[t] = 0x80;
  const hi = Math.floor(n / 536870912) >>> 0;
  const lo = (n * 8) >>> 0;
  const base = tail.length - 8;
  tail[base] = (hi >>> 24) & 255; tail[base + 1] = (hi >>> 16) & 255;
  tail[base + 2] = (hi >>> 8) & 255; tail[base + 3] = hi & 255;
  tail[base + 4] = (lo >>> 24) & 255; tail[base + 5] = (lo >>> 16) & 255;
  tail[base + 6] = (lo >>> 8) & 255; tail[base + 7] = lo & 255;
  for (let k = 0; k < tail.length; k += 64) mcHxSha1Block(h, tail, k);
  const out = new Uint8Array(20);
  for (let k = 0; k < 5; k++) {
    out[k * 4] = (h[k] >>> 24) & 255;
    out[k * 4 + 1] = (h[k] >>> 16) & 255;
    out[k * 4 + 2] = (h[k] >>> 8) & 255;
    out[k * 4 + 3] = h[k] & 255;
  }
  return out;
}

function mcHxSha1(input) {
  const b = mcHxSha1Bytes(input);
  return b === null ? null : mcHxToHex(b);
}

/* ================================================================== *
 * HMAC-SHA256 — CRYPTOGRAPHIC. RFC 2104.
 * ================================================================== */

function mcHxHmacSha256Bytes(key, msg) {
  let k = mcHxToBytes(key);
  const m = mcHxToBytes(msg);
  if (k === null || m === null) return null;
  // Keys longer than the block are hashed first; shorter ones are zero-padded.
  // Note this means a 64-byte key and its SHA-256 preimage are NOT distinct
  // keys if the preimage is over 64 bytes — an RFC 2104 quirk, not a bug here.
  if (k.length > 64) k = mcHxSha256Bytes(k);
  const ipad = new Uint8Array(64);
  const opad = new Uint8Array(64);
  for (let i = 0; i < 64; i++) {
    const kb = i < k.length ? k[i] : 0;
    ipad[i] = kb ^ 0x36;
    opad[i] = kb ^ 0x5c;
  }
  const inner = mcHxSha256Stream();
  mcHxSha256Push(inner, ipad);
  mcHxSha256Push(inner, m);
  const innerDigest = mcHxSha256Digest(inner);
  const outer = mcHxSha256Stream();
  mcHxSha256Push(outer, opad);
  mcHxSha256Push(outer, innerDigest);
  return mcHxSha256Digest(outer);
}

function mcHxHmacSha256(key, msg) {
  const b = mcHxHmacSha256Bytes(key, msg);
  return b === null ? null : mcHxToHex(b);
}

// Verify a hex tag without leaking its position through timing. Returns false
// for anything malformed rather than throwing.
function mcHxHmacVerify(key, msg, tagHex) {
  const want = mcHxHmacSha256Bytes(key, msg);
  const got = typeof tagHex === "string" ? mcHxFromHex(tagHex.toLowerCase()) : mcHxToBytes(tagHex);
  if (want === null || got === null) return false;
  return mcHxTimingSafeEqual(want, got);
}

/* ================================================================== *
 * Deterministic randomness and ids
 * ================================================================== */

// mulberry32: 32 bits of state, passes the usual smoke tests for id generation,
// and — the reason it is here — is exactly reproducible from a seed so tests
// can assert on generated ids. NOT a CSPRNG.
function mcHxSeededRng(seed) {
  let a = (typeof seed === "number" && Number.isFinite(seed) ? seed : 0) >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0);
  };
}

// True when the platform CSPRNG is available, i.e. when an unseeded
// mcHxUuidV4() is actually unpredictable. Exposed so callers can refuse to
// generate a security-relevant token on a platform where it is not.
function mcHxUuidV4Secure() {
  return typeof globalThis !== "undefined" &&
    globalThis.crypto && typeof globalThis.crypto.getRandomValues === "function";
}

// Fallback entropy for platforms with no CSPRNG. Time plus a counter is enough
// to avoid collisions inside one tab; it is not enough to stop anyone guessing.
let mcHxIdCounter = 0;

function mcHxRandomBytes(n, source) {
  const out = new Uint8Array(n);
  if (typeof source === "function") {
    for (let i = 0; i < n; i += 4) {
      const v = source() >>> 0;
      out[i] = v & 255;
      if (i + 1 < n) out[i + 1] = (v >>> 8) & 255;
      if (i + 2 < n) out[i + 2] = (v >>> 16) & 255;
      if (i + 3 < n) out[i + 3] = (v >>> 24) & 255;
    }
    return out;
  }
  if (mcHxUuidV4Secure()) {
    globalThis.crypto.getRandomValues(out);
    return out;
  }
  const rng = mcHxSeededRng((Date.now() ^ (mcHxIdCounter++ * 2654435761)) >>> 0);
  return mcHxRandomBytes(n, rng);
}

// Resolve the `seed` argument shared by the id generators: a number seeds a
// reproducible stream, a function is used as-is, anything else means "use the
// best entropy available".
function mcHxRngFrom(seed) {
  if (typeof seed === "function") return seed;
  if (typeof seed === "number" && Number.isFinite(seed)) return mcHxSeededRng(seed);
  return null;
}

// RFC 4122 v4. Pass a number or an rng function for reproducible output.
function mcHxUuidV4(seed) {
  const b = mcHxRandomBytes(16, mcHxRngFrom(seed));
  b[6] = (b[6] & 0x0f) | 0x40; // version 4
  b[8] = (b[8] & 0x3f) | 0x80; // variant 10xx
  const h = mcHxToHex(b);
  return h.slice(0, 8) + "-" + h.slice(8, 12) + "-" + h.slice(12, 16) + "-" +
         h.slice(16, 20) + "-" + h.slice(20);
}

// Crockford base32: no I, L, O or U, so the alphabet survives being read aloud
// and retyped. Case-insensitive on decode by construction (we only emit upper).
const mcHxCrockford = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

// ULID: 48-bit millisecond timestamp then 80 random bits, base32, 26 chars.
// Lexicographic order equals time order, which is the entire reason to prefer
// it over a UUID for a feed keyed by insertion time.
function mcHxUlid(timeMs, seed) {
  let t = typeof timeMs === "number" && Number.isFinite(timeMs) ? Math.floor(timeMs) : Date.now();
  if (t < 0) t = 0;
  if (t > 281474976710655) t = 281474976710655; // 2^48-1, year 10889
  let s = "";
  for (let i = 0; i < 10; i++) {
    s = mcHxCrockford.charAt(t % 32) + s;
    t = Math.floor(t / 32);
  }
  const r = mcHxRandomBytes(10, mcHxRngFrom(seed));
  let acc = 0;
  let bits = 0;
  let tail = "";
  for (let i = 0; i < 10; i++) {
    acc = (acc << 8) | r[i];
    bits += 8;
    while (bits >= 5) {
      bits -= 5;
      tail += mcHxCrockford.charAt((acc >> bits) & 31);
    }
  }
  return s + tail; // 10 + 16 = 26
}

// Monotonic factory. Two ULIDs minted in the same millisecond are only ordered
// by luck; the spec's fix is to increment the random field instead of redrawing
// it. On the (astronomically unlikely) all-0xFF overflow we advance the clock
// by 1ms rather than wrapping, because wrapping would break sort order — the
// one property the whole id exists to provide.
function mcHxUlidFactory(seed) {
  const rng = mcHxRngFrom(seed);
  let lastTime = -1;
  let last = null;
  return function (timeMs) {
    let t = typeof timeMs === "number" && Number.isFinite(timeMs) ? Math.floor(timeMs) : Date.now();
    if (t < 0) t = 0;
    if (t === lastTime && last !== null) {
      let i = 9;
      for (; i >= 0; i--) {
        if (last[i] === 255) { last[i] = 0; continue; }
        last[i]++;
        break;
      }
      if (i < 0) { lastTime = t + 1; t = lastTime; last = mcHxRandomBytes(10, rng); }
    } else {
      if (t < lastTime) t = lastTime; // clock went backwards; do not emit an out-of-order id
      lastTime = t;
      last = mcHxRandomBytes(10, rng);
    }
    let ts = t;
    let s = "";
    for (let i = 0; i < 10; i++) {
      s = mcHxCrockford.charAt(ts % 32) + s;
      ts = Math.floor(ts / 32);
    }
    let acc = 0;
    let bits = 0;
    let tail = "";
    for (let i = 0; i < 10; i++) {
      acc = (acc << 8) | last[i];
      bits += 8;
      while (bits >= 5) {
        bits -= 5;
        tail += mcHxCrockford.charAt((acc >> bits) & 31);
      }
    }
    return s + tail;
  };
}

/* ================================================================== *
 * LZW compression for localStorage
 *
 * The output is a JS string of code units in [32, 32799] plus one magic
 * char. That range matters: localStorage, structuredClone, JSON and
 * encodeURIComponent all round-trip well-formed UTF-16 and all mangle or
 * reject lone surrogates. Implementations that pack 16 bits per char (the
 * obvious thing to do) emit code units in 0xD800-0xDFFF and appear to work
 * until a payload happens to land there — which is why the tests below feed
 * it a payload covering every byte value.
 *
 * 15 bits per 16-bit char costs 6.25% versus raw bits. That is the price of
 * never having to think about surrogates again, and localStorage charges per
 * UTF-16 unit anyway, so the meaningful comparison is chars-in vs chars-out.
 * ================================================================== */

const mcHxLzMagic = 33000;  // outside [32,32799], and far from 0xD800
const mcHxLzStop = 256;     // end-of-stream code; 0..255 are the byte literals
const mcHxLzMaxCode = 65535;

function mcHxCompress(str) {
  if (typeof str !== "string") return null;
  const bytes = mcHxUtf8Encode(str);
  if (bytes === null) return null;
  const dict = new Map();
  let next = 257;
  let width = 9;
  const chars = [mcHxLzMagic];
  let acc = 0;
  let nbits = 0;
  const emit = function (code) {
    acc = (acc * (1 << width)) + code; // may exceed 32 bits; stay in float land
    nbits += width;
    while (nbits >= 15) {
      nbits -= 15;
      const div = Math.pow(2, nbits);
      const v = Math.floor(acc / div);
      acc -= v * div;
      chars.push(32 + v);
    }
  };
  let w = -1;
  for (let i = 0; i < bytes.length; i++) {
    const c = bytes[i];
    if (w < 0) { w = c; continue; }
    const key = w * 256 + c;
    const found = dict.get(key);
    if (found !== undefined) {
      w = found;
      continue;
    }
    emit(w);
    if (next <= mcHxLzMaxCode) {
      dict.set(key, next++);
      // Encoder bumps at next >= 2^width; the decoder, which lags one entry,
      // bumps at next+1 >= 2^width. Those two conditions fire at the same point
      // in the bit stream. Getting this pair wrong is the classic LZW desync.
      if (next >= (1 << width) && width < 16) width++;
    }
    w = c;
  }
  if (w >= 0) emit(w);
  emit(mcHxLzStop);
  if (nbits > 0) chars.push(32 + Math.floor(acc * Math.pow(2, 15 - nbits)));
  const parts = [];
  for (let i = 0; i < chars.length; i += 8192) {
    parts.push(String.fromCharCode.apply(null, chars.slice(i, i + 8192)));
  }
  return parts.join("");
}

function mcHxDecompress(str) {
  if (typeof str !== "string") return null;
  if (str.length < 1 || str.charCodeAt(0) !== mcHxLzMagic) return null;
  const pre = new Int32Array(65536);
  const suf = new Uint8Array(65536);
  const len = new Int32Array(65536);
  const first = new Uint8Array(65536);
  for (let i = 0; i < 256; i++) { len[i] = 1; first[i] = i; pre[i] = -1; suf[i] = i; }
  let next = 257;
  let width = 9;
  let out = new Uint8Array(1024);
  let olen = 0;
  const grow = function (need) {
    if (olen + need <= out.length) return;
    let cap = out.length;
    while (cap < olen + need) cap *= 2;
    const bigger = new Uint8Array(cap);
    bigger.set(out.subarray(0, olen));
    out = bigger;
  };
  let pos = 1;
  let acc = 0;
  let nbits = 0;
  const read = function () {
    while (nbits < width) {
      if (pos >= str.length) return -1;
      const cu = str.charCodeAt(pos++);
      const v = cu - 32;
      if (v < 0 || v > 32767) return -2; // corrupted: not a payload char
      acc = acc * 32768 + v;
      nbits += 15;
    }
    nbits -= width;
    const div = Math.pow(2, nbits);
    const code = Math.floor(acc / div);
    acc -= code * div;
    return code;
  };
  let prev = -1;
  for (;;) {
    const code = read();
    if (code < 0) return null;          // truncated or corrupt before STOP
    if (code === mcHxLzStop) break;
    let fb;
    if (code < next && (code < 256 || code >= 257)) {
      grow(len[code]);
      let c = code;
      let o = olen + len[code];
      olen = o;
      while (c >= 0) { out[--o] = suf[c]; c = pre[c]; }
      fb = first[code];
    } else if (code === next && prev >= 0) {
      // KwKwK: the encoder emitted an entry it had only just created, so we
      // reconstruct it as prev + first(prev).
      fb = first[prev];
      grow(len[prev] + 1);
      let c = prev;
      let o = olen + len[prev];
      out[o] = fb;
      olen = o + 1;
      while (c >= 0) { out[--o] = suf[c]; c = pre[c]; }
    } else {
      return null; // code out of range: not our stream, or bit-rotted
    }
    if (prev >= 0 && next <= mcHxLzMaxCode) {
      pre[next] = prev;
      suf[next] = fb;
      len[next] = len[prev] + 1;
      first[next] = first[prev];
      next++;
      if (next + 1 >= (1 << width) && width < 16) width++;
    }
    prev = code;
  }
  return mcHxUtf8Decode(out.subarray(0, olen));
}

// How well did it do? Reported in UTF-16 code units, because that is what
// localStorage actually bills for. Returns null rather than a fake ratio if the
// input is not compressible input at all.
function mcHxCompressStats(str) {
  if (typeof str !== "string") return null;
  const packed = mcHxCompress(str);
  if (packed === null) return null;
  const bytes = mcHxUtf8Encode(str).length;
  return {
    chars: str.length,
    utf8Bytes: bytes,
    packedChars: packed.length,
    // 1.0 means no saving, 4.0 means a quarter of the original localStorage cost
    ratio: str.length === 0 ? 1 : str.length / packed.length,
    savedPercent: str.length === 0 ? 0 : Math.round((1 - packed.length / str.length) * 1000) / 10
  };
}

/* ================================================================== *
 * stableStringify — deterministic JSON for content addressing
 * ================================================================== */

let mcHxErrMsg = "";

// Why the last failure happened. Cleared at the start of every
// mcHxStableStringify call; meaningless after a success.
function mcHxLastError() { return mcHxErrMsg; }

const mcHxMaxDepth = 512;

function mcHxCycleError(path) {
  const e = new Error("mcHxStableStringify: cycle at " + path);
  e.name = "mcHxCycleError";
  e.mcHxPath = path;
  return e;
}

/* Deterministic JSON with keys sorted by UTF-16 code unit. Differences from
 * JSON.stringify, all deliberate:
 *   - top-level undefined/function/symbol yields "null", not undefined, because
 *     a non-string return would put the literal text "undefined" into whatever
 *     the caller concatenates it into
 *   - cycles yield null + mcHxLastError() instead of throwing
 *   - BigInt yields its decimal digits as a JSON string instead of throwing
 *   - depth beyond mcHxMaxDepth yields null, so a pathological structure cannot
 *     blow the stack
 * Same as JSON.stringify, also deliberately:
 *   - NaN/Infinity/-Infinity become null (see the nonFinite option below)
 *   - Map/Set/WeakMap serialise as {}; they carry no enumerable own properties.
 *     This is a real footgun for content addressing — two different Maps hash
 *     identically — but inventing an encoding would make our hashes disagree
 *     with every other tool that sees the same object, which is worse.
 *   - -0 becomes 0, Date becomes its ISO string via toJSON
 *
 * opts.nonFinite === "tag" emits "@NaN"/"@Infinity"/"@-Infinity" as strings so
 * that NaN and null stop colliding. It is off by default because it makes the
 * output no longer round-trip through JSON.parse into the same value.
 */
function mcHxStableStringify(value, opts) {
  mcHxErrMsg = "";
  const tag = !!(opts && opts.nonFinite === "tag");
  const stack = [];
  const r = mcHxStableWalk(value, stack, 0, tag, "$", false);
  if (r === null) return null;
  return r === undefined ? "null" : r;
}

// Throws mcHxCycleError on a cycle. This is the ONE public function here that
// throws, and it does so on purpose: content-addressed writes should fail loud
// rather than silently store a null. Everything else degrades to a sentinel.
function mcHxStableStringifyStrict(value, opts) {
  const tag = !!(opts && opts.nonFinite === "tag");
  const r = mcHxStableWalk(value, [], 0, tag, "$", true);
  return r === undefined ? "null" : r;
}

function mcHxStableWalk(v, stack, depth, tag, path, strict) {
  if (depth > mcHxMaxDepth) {
    mcHxErrMsg = "max depth " + mcHxMaxDepth + " exceeded at " + path;
    if (strict) throw new Error("mcHxStableStringify: " + mcHxErrMsg);
    return null;
  }
  const t = typeof v;
  if (v === null) return "null";
  if (t === "boolean") return v ? "true" : "false";
  if (t === "number") {
    if (Number.isFinite(v)) return v === 0 ? "0" : String(v); // folds -0 to 0
    if (!tag) return "null";
    return v !== v ? "\"@NaN\"" : v > 0 ? "\"@Infinity\"" : "\"@-Infinity\"";
  }
  if (t === "string") return JSON.stringify(v);
  if (t === "bigint") return "\"" + v.toString() + "\"";
  if (t === "undefined" || t === "function" || t === "symbol") return undefined;
  if (t !== "object") return "null";

  // toJSON first, matching JSON.stringify. Date is the case that matters; an
  // invalid Date throws from toISOString, and JSON.stringify answers null for
  // it, so we do too.
  if (typeof v.toJSON === "function") {
    let j;
    try {
      j = v.toJSON(path);
    } catch (e) {
      if (v instanceof Date) return "null";
      mcHxErrMsg = "toJSON threw at " + path + ": " + (e && e.message);
      if (strict) throw e;
      return null;
    }
    if (j !== v) return mcHxStableWalk(j, stack, depth + 1, tag, path, strict);
  }

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === v) {
      mcHxErrMsg = "cycle at " + path;
      if (strict) throw mcHxCycleError(path);
      return null;
    }
  }
  // Ancestors only, not everything ever seen: a DAG where one object appears in
  // two branches is legal JSON and must not be reported as a cycle.
  stack.push(v);

  let out;
  if (Array.isArray(v)) {
    const parts = [];
    for (let i = 0; i < v.length; i++) {
      const s = mcHxStableWalk(v[i], stack, depth + 1, tag, path + "[" + i + "]", strict);
      if (s === null) { stack.pop(); return null; }
      parts.push(s === undefined ? "null" : s); // holes and undefined -> null, as JSON does
    }
    out = "[" + parts.join(",") + "]";
  } else {
    let keys;
    try {
      keys = Object.keys(v);
    } catch (e) {
      stack.pop();
      mcHxErrMsg = "Object.keys threw at " + path;
      if (strict) throw e;
      return null;
    }
    // Code-unit sort, matching JSON key order semantics everywhere else. Not
    // localeCompare: that is locale-dependent, which would make the hash
    // depend on the user's language settings.
    keys.sort();
    const parts = [];
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      const s = mcHxStableWalk(v[k], stack, depth + 1, tag, path + "." + k, strict);
      if (s === null) { stack.pop(); return null; }
      if (s === undefined) continue; // undefined-valued keys vanish, as JSON does
      parts.push(JSON.stringify(k) + ":" + s);
    }
    out = "{" + parts.join(",") + "}";
  }
  stack.pop();
  return out;
}

// The content address of a value: sha256 of its stable serialisation. null if
// the value could not be serialised (cycle, depth) — never a hash of "null",
// because silently addressing a broken object as if it were fine is how a feed
// ends up deduping two different stories together.
function mcHxHashObject(value, opts) {
  const s = mcHxStableStringify(value, opts);
  if (s === null) return null;
  return mcHxSha256(s);
}

// Short, URL-safe content id. 12 base64url chars = 72 bits, enough that a feed
// holding 10^6 items has a ~10^-10 chance of any collision. Cropped from
// SHA-256, which is the standard construction (and is why truncation is safe).
function mcHxContentId(value, chars) {
  const b = typeof value === "string" ? mcHxSha256Bytes(value) : null;
  const digest = b !== null ? b : (function () {
    const s = mcHxStableStringify(value);
    return s === null ? null : mcHxSha256Bytes(s);
  })();
  if (digest === null) return null;
  const n = typeof chars === "number" && Number.isFinite(chars)
    ? Math.max(4, Math.min(43, Math.floor(chars))) : 12;
  return mcHxToBase64Url(digest).slice(0, n);
}

if (typeof module !== "undefined" && require.main === module) {
  let mcHxPassed = 0;
  const mcHxFails = [];

  function mcHxOk(name, cond, detail) {
    if (cond) mcHxPassed++;
    else mcHxFails.push(name + (detail === undefined ? "" : " (got: " + detail + ")"));
  }
  function mcHxEq(name, got, want) {
    mcHxOk(name, got === want, JSON.stringify(got) + " want " + JSON.stringify(want));
  }
  function mcHxRepeat(byteVal, n) {
    const a = new Uint8Array(n);
    a.fill(byteVal);
    return a;
  }
  // Every byte value, in a byte array — the round-trip torture input.
  const mcHxAllBytes = new Uint8Array(256);
  for (let i = 0; i < 256; i++) mcHxAllBytes[i] = i;

  /* ---------- UTF-8 ---------- */
  mcHxEq("utf8 ascii len", mcHxUtf8Encode("abc").length, 3);
  mcHxEq("utf8 2-byte", mcHxToHex(mcHxUtf8Encode("é")), "c3a9");
  mcHxEq("utf8 3-byte", mcHxToHex(mcHxUtf8Encode("€")), "e282ac");
  mcHxEq("utf8 astral (surrogate pair)", mcHxToHex(mcHxUtf8Encode("😀")), "f09f9880");
  mcHxEq("utf8 astral round-trip", mcHxUtf8Decode(mcHxUtf8Encode("😀")), "😀");
  mcHxEq("utf8 lone high surrogate -> U+FFFD", mcHxToHex(mcHxUtf8Encode("\uD800")), "efbfbd");
  mcHxEq("utf8 lone low surrogate -> U+FFFD", mcHxToHex(mcHxUtf8Encode("\uDC00")), "efbfbd");
  mcHxEq("utf8 high surrogate then ascii", mcHxToHex(mcHxUtf8Encode("\uD800a")), "efbfbd61");
  mcHxEq("utf8 nul byte", mcHxToHex(mcHxUtf8Encode("\x00")), "00");
  mcHxEq("utf8 empty", mcHxUtf8Encode("").length, 0);
  mcHxEq("utf8 non-string", mcHxUtf8Encode(42), null);
  mcHxEq("utf8 decode overlong rejected", mcHxUtf8Decode([0xc0, 0xaf]), "��");
  mcHxEq("utf8 decode surrogate rejected", mcHxUtf8Decode([0xed, 0xa0, 0x80]), "�");
  mcHxEq("utf8 decode truncated", mcHxUtf8Decode([0xe2, 0x82]), "�");
  mcHxEq("utf8 decode 5-byte lead", mcHxUtf8Decode([0xf8, 0x88, 0x80, 0x80, 0x80]), "�����");
  mcHxEq("utf8 decode > U+10FFFF", mcHxUtf8Decode([0xf5, 0x80, 0x80, 0x80]), "����");
  const mcHxBigStr = "aé€😀\x00z".repeat(3000);
  mcHxEq("utf8 large round-trip", mcHxUtf8Decode(mcHxUtf8Encode(mcHxBigStr)), mcHxBigStr);

  /* ---------- mcHxToBytes ---------- */
  mcHxEq("toBytes null", mcHxToBytes(null), null);
  mcHxEq("toBytes undefined", mcHxToBytes(undefined), null);
  mcHxEq("toBytes object", mcHxToBytes({}), null);
  mcHxEq("toBytes bad array (256)", mcHxToBytes([1, 256]), null);
  mcHxEq("toBytes bad array (-1)", mcHxToBytes([-1]), null);
  mcHxEq("toBytes bad array (NaN)", mcHxToBytes([NaN]), null);
  mcHxEq("toBytes bad array (1.5)", mcHxToBytes([1.5]), null);
  mcHxEq("toBytes good array", mcHxToHex(mcHxToBytes([0, 255])), "00ff");
  mcHxEq("toBytes passthrough Uint8Array", mcHxToBytes(mcHxAllBytes).length, 256);

  /* ---------- hex ---------- */
  mcHxEq("hex round-trip all bytes", mcHxToHex(mcHxFromHex(mcHxToHex(mcHxAllBytes))), mcHxToHex(mcHxAllBytes));
  mcHxEq("hex empty", mcHxToHex([]), "");
  mcHxEq("hex uppercase in", mcHxToHex(mcHxFromHex("DEADbeef")), "deadbeef");
  mcHxEq("hex odd length", mcHxFromHex("abc"), null);
  mcHxEq("hex non-hex", mcHxFromHex("zz"), null);
  mcHxEq("hex non-string", mcHxFromHex(12), null);
  mcHxEq("hex null input", mcHxToHex(null), null);

  /* ---------- base64 (RFC 4648 §10) ---------- */
  const mcHxB64Vec = [["", ""], ["f", "Zg=="], ["fo", "Zm8="], ["foo", "Zm9v"],
                      ["foob", "Zm9vYg=="], ["fooba", "Zm9vYmE="], ["foobar", "Zm9vYmFy"]];
  for (let i = 0; i < mcHxB64Vec.length; i++) {
    mcHxEq("base64(" + JSON.stringify(mcHxB64Vec[i][0]) + ")", mcHxToBase64(mcHxB64Vec[i][0]), mcHxB64Vec[i][1]);
    mcHxEq("base64 decode " + mcHxB64Vec[i][1],
      mcHxUtf8Decode(mcHxFromBase64(mcHxB64Vec[i][1])), mcHxB64Vec[i][0]);
  }
  mcHxEq("base64 unpadded", mcHxToBase64("foob", { pad: false }), "Zm9vYg");
  mcHxEq("base64 decode unpadded", mcHxUtf8Decode(mcHxFromBase64("Zm9vYg")), "foob");
  mcHxEq("base64 round-trip all bytes",
    mcHxToHex(mcHxFromBase64(mcHxToBase64(mcHxAllBytes))), mcHxToHex(mcHxAllBytes));
  mcHxEq("base64url has no + or /",
    /[+/]/.test(mcHxToBase64Url(mcHxAllBytes)), false);
  mcHxEq("base64url unpadded by default", /=/.test(mcHxToBase64Url("foob")), false);
  mcHxEq("base64url padded on request", mcHxToBase64Url("foob", { pad: true }), "Zm9vYg==");
  mcHxEq("base64url round-trip all bytes",
    mcHxToHex(mcHxFromBase64Url(mcHxToBase64Url(mcHxAllBytes))), mcHxToHex(mcHxAllBytes));
  mcHxEq("base64 std/url differ on 62/63", mcHxToBase64([255, 255, 255]), "////");
  mcHxEq("base64url 62/63", mcHxToBase64Url([255, 255, 255]), "____");
  mcHxEq("base64 whitespace tolerated", mcHxUtf8Decode(mcHxFromBase64("Zm9v\nYmFy")), "foobar");
  mcHxEq("base64 bad char", mcHxFromBase64("Zm9v!"), null);
  mcHxEq("base64 lone symbol", mcHxFromBase64("Z"), null);
  mcHxEq("base64 data after pad", mcHxFromBase64("Zg==Zg=="), null);
  mcHxEq("base64 non-string", mcHxFromBase64(null), null);
  mcHxEq("base64 null input", mcHxToBase64(undefined), null);

  /* ---------- base32 (RFC 4648 §10) ---------- */
  const mcHxB32Vec = [["", ""], ["f", "MY======"], ["fo", "MZXQ===="], ["foo", "MZXW6==="],
                      ["foob", "MZXW6YQ="], ["fooba", "MZXW6YTB"], ["foobar", "MZXW6YTBOI======"]];
  for (let i = 0; i < mcHxB32Vec.length; i++) {
    mcHxEq("base32(" + JSON.stringify(mcHxB32Vec[i][0]) + ")", mcHxToBase32(mcHxB32Vec[i][0]), mcHxB32Vec[i][1]);
    mcHxEq("base32 decode " + mcHxB32Vec[i][1],
      mcHxUtf8Decode(mcHxFromBase32(mcHxB32Vec[i][1])), mcHxB32Vec[i][0]);
  }
  mcHxEq("base32 round-trip all bytes",
    mcHxToHex(mcHxFromBase32(mcHxToBase32(mcHxAllBytes))), mcHxToHex(mcHxAllBytes));
  mcHxEq("base32 lowercase accepted", mcHxUtf8Decode(mcHxFromBase32("mzxw6ytb")), "fooba");
  mcHxEq("base32 unpadded", mcHxToBase32("f", { pad: false }), "MY");
  mcHxEq("base32 bad char", mcHxFromBase32("MZXW0"), null);
  mcHxEq("base32 impossible length", mcHxFromBase32("MZX"), null);
  mcHxEq("base32 data after pad", mcHxFromBase32("MY======MY"), null);
  mcHxEq("base32 null input", mcHxToBase32(null), null);

  /* ---------- percent-encoding ---------- */
  mcHxEq("pct space", mcHxPercentEncode("a b"), "a%20b");
  mcHxEq("pct unreserved untouched", mcHxPercentEncode("aZ0-._~"), "aZ0-._~");
  mcHxEq("pct utf8", mcHxPercentEncode("héllo"), "h%C3%A9llo");
  mcHxEq("pct astral", mcHxPercentEncode("😀"), "%F0%9F%98%80");
  mcHxEq("pct nul", mcHxPercentEncode("\x00"), "%00");
  mcHxEq("pct plus is literal", mcHxPercentEncode("a+b"), "a%2Bb");
  mcHxEq("pct markup is escaped", mcHxPercentEncode("<b onload=x>"), "%3Cb%20onload%3Dx%3E");
  mcHxEq("pct safe option", mcHxPercentEncode("a/b", { safe: "/" }), "a/b");
  mcHxEq("pct decode", mcHxPercentDecode("h%C3%A9llo"), "héllo");
  mcHxEq("pct decode lowercase hex", mcHxPercentDecode("%c3%a9"), "é");
  mcHxEq("pct decode plus stays plus", mcHxPercentDecode("a+b"), "a+b");
  mcHxEq("pct decode truncated", mcHxPercentDecode("%C3"), null);
  mcHxEq("pct decode non-hex", mcHxPercentDecode("%ZZ"), null);
  mcHxEq("pct decode non-string", mcHxPercentDecode(7), null);
  mcHxEq("pct round-trip all bytes",
    mcHxToHex(mcHxPercentDecodeBytes(mcHxPercentEncode(mcHxAllBytes))), mcHxToHex(mcHxAllBytes));
  mcHxEq("pct agrees with encodeURIComponent", mcHxPercentEncode("aé /?#&=+~-_.!*'()"),
    encodeURIComponent("aé /?#&=+~-_.!*'()").replace(/[!*'()]/g, function (c) {
      return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    }));

  /* ---------- CRC32 ---------- */
  mcHxEq("crc32 empty", mcHxCrc32(""), 0);
  mcHxEq("crc32 'a'", mcHxCrc32("a"), 0xe8b7be43);
  mcHxEq("crc32 'abc'", mcHxCrc32("abc"), 0x352441c2);
  mcHxEq("crc32 check value '123456789'", mcHxCrc32("123456789"), 0xcbf43926);
  mcHxEq("crc32 null -> -1", mcHxCrc32(null), -1);
  mcHxOk("crc32 is unsigned", mcHxCrc32(mcHxAllBytes) >= 0, mcHxCrc32(mcHxAllBytes));

  /* ---------- FNV-1a (reference vectors) ---------- */
  mcHxEq("fnv1a32 empty", mcHxFnv1a32(""), 0x811c9dc5);
  mcHxEq("fnv1a32 'a'", mcHxFnv1a32("a"), 0xe40c292c);
  mcHxEq("fnv1a32 'foobar'", mcHxFnv1a32("foobar"), 0xbf9cf968);
  mcHxEq("fnv1a32 null -> -1", mcHxFnv1a32(null), -1);

  /* ---------- MurmurHash3 x86_32 (SMHasher vectors) ---------- */
  mcHxEq("murmur3 empty seed 0", mcHxMurmur32("", 0), 0);
  mcHxEq("murmur3 empty seed 1", mcHxMurmur32("", 1), 0x514e28b7);
  mcHxEq("murmur3 empty seed -1", mcHxMurmur32("", 0xffffffff), 0x81f16f39);
  mcHxEq("murmur3 four 0xff", mcHxMurmur32([0xff, 0xff, 0xff, 0xff], 0), 0x76293b50);
  mcHxEq("murmur3 four 0x00", mcHxMurmur32([0, 0, 0, 0], 0), 0x2362f9de);
  mcHxEq("murmur3 'aaaa'", mcHxMurmur32("aaaa", 0x9747b28c), 0x5a97808a);
  mcHxEq("murmur3 'aaa'", mcHxMurmur32("aaa", 0x9747b28c), 0x283e0130);
  mcHxEq("murmur3 'aa'", mcHxMurmur32("aa", 0x9747b28c), 0x5d211726);
  mcHxEq("murmur3 'a'", mcHxMurmur32("a", 0x9747b28c), 0x7fa09ea6);
  mcHxEq("murmur3 'abcd'", mcHxMurmur32("abcd", 0x9747b28c), 0xf0478627);
  mcHxEq("murmur3 'abc'", mcHxMurmur32("abc", 0x9747b28c), 0xc84a62dd);
  mcHxEq("murmur3 'ab'", mcHxMurmur32("ab", 0x9747b28c), 0x74875592);
  mcHxEq("murmur3 'Hello, world!'", mcHxMurmur32("Hello, world!", 0x9747b28c), 0x24884cba);
  // 0xea9cc330 verified against an independent implementation that reproduces
  // all five published vectors above. There is no canonical vector for a
  // non-ASCII string, so the earlier 0xd58063c1 was not sourced from anywhere;
  // this hashes the UTF-8 bytes c3bc6ec3af63c3b664c3a9.
  mcHxEq("murmur3 unicode", mcHxMurmur32("ünïcödé", 0x9747b28c), 0xea9cc330);
  mcHxEq("murmur3 pangram", mcHxMurmur32("The quick brown fox jumps over the lazy dog", 0x9747b28c), 0x2fa826cd);
  mcHxEq("murmur3 null -> -1", mcHxMurmur32(null, 0), -1);
  mcHxEq("murmur3 NaN seed treated as 0", mcHxMurmur32("abc", NaN), mcHxMurmur32("abc", 0));
  mcHxEq("bucket range", mcHxBucket("story-42", 8) < 8 && mcHxBucket("story-42", 8) >= 0, true);
  mcHxEq("bucket stable", mcHxBucket("story-42", 8), mcHxBucket("story-42", 8));
  mcHxEq("bucket zero buckets", mcHxBucket("x", 0), -1);
  mcHxEq("bucket bad input", mcHxBucket(null, 8), -1);

  /* ---------- SHA-256 (FIPS 180-4 / NIST published vectors) ---------- */
  mcHxEq("sha256('')", mcHxSha256(""),
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
  mcHxEq("sha256('abc')", mcHxSha256("abc"),
    "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
  mcHxEq("sha256 448-bit message", mcHxSha256("abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq"),
    "248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1");
  mcHxEq("sha256 896-bit message",
    mcHxSha256("abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmno" +
               "ijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu"),
    "cf5b16a778af8380036ce59e7b0492370b249b11e8f07a51afac45037afee9d1");
  // The million-a case, fed in awkward chunk sizes so the buffering logic is
  // what is actually under test, not just the compression function.
  const mcHxMillion = mcHxSha256Stream();
  for (let i = 0; i < 1000; i++) mcHxSha256Push(mcHxMillion, "a".repeat(1000));
  mcHxEq("sha256 one million a's (streamed 1000x1000)", mcHxToHex(mcHxSha256Digest(mcHxMillion)),
    "cdc76e5c9914fb9281a1c7e284d73e67f1809a48a497200e046d39ccc7112cd0");
  const mcHxRagged = mcHxSha256Stream();
  let mcHxWritten = 0;
  let mcHxChunk = 1;
  while (mcHxWritten < 1000000) {
    const take = Math.min(mcHxChunk, 1000000 - mcHxWritten);
    mcHxSha256Push(mcHxRagged, "a".repeat(take));
    mcHxWritten += take;
    mcHxChunk = (mcHxChunk * 7 + 1) % 137 + 1; // never aligns to 64
  }
  mcHxEq("sha256 one million a's (ragged chunks)", mcHxToHex(mcHxSha256Digest(mcHxRagged)),
    "cdc76e5c9914fb9281a1c7e284d73e67f1809a48a497200e046d39ccc7112cd0");
  // Every length that straddles a block/padding boundary.
  for (let n = 54; n <= 66; n++) {
    const s = "a".repeat(n);
    const chunked = mcHxSha256Stream();
    mcHxSha256Push(chunked, s.slice(0, 1));
    mcHxSha256Push(chunked, s.slice(1));
    mcHxEq("sha256 boundary len " + n + " streamed == one-shot",
      mcHxToHex(mcHxSha256Digest(chunked)), mcHxSha256(s));
  }
  mcHxEq("sha256 bytes length", mcHxSha256Bytes("abc").length, 32);
  mcHxEq("sha256 null", mcHxSha256(null), null);
  mcHxEq("sha256 undefined", mcHxSha256(undefined), null);
  mcHxEq("sha256 object", mcHxSha256({}), null);
  mcHxEq("sha256 of bytes == of string", mcHxSha256([97, 98, 99]), mcHxSha256("abc"));
  mcHxEq("sha256 astral is utf8", mcHxSha256("😀"), mcHxSha256([0xf0, 0x9f, 0x98, 0x80]));
  mcHxEq("sha256 digest is idempotent",
    mcHxToHex(mcHxSha256Digest(mcHxMillion)),
    "cdc76e5c9914fb9281a1c7e284d73e67f1809a48a497200e046d39ccc7112cd0");
  const mcHxAfterDone = mcHxSha256Stream();
  mcHxSha256Push(mcHxAfterDone, "abc");
  mcHxSha256Digest(mcHxAfterDone);
  mcHxEq("sha256 push after digest refused", mcHxSha256Push(mcHxAfterDone, "x"), false);
  const mcHxPoisoned = mcHxSha256Stream();
  mcHxSha256Push(mcHxPoisoned, {});
  mcHxEq("sha256 stream poisoned by bad chunk", mcHxSha256Digest(mcHxPoisoned), null);

  /* ---------- SHA-1 (legacy) ---------- */
  mcHxEq("sha1('')", mcHxSha1(""), "da39a3ee5e6b4b0d3255bfef95601890afd80709");
  mcHxEq("sha1('abc')", mcHxSha1("abc"), "a9993e364706816aba3e25717850c26c9cd0d89d");
  mcHxEq("sha1 448-bit", mcHxSha1("abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq"),
    "84983e441c3bd26ebaae4aa1f95129e5e54670f1");
  mcHxEq("sha1 one million a's", mcHxSha1("a".repeat(1000000)),
    "34aa973cd4c4daa4f61eeb2bdbad27316534016f");
  mcHxEq("sha1 bytes length", mcHxSha1Bytes("abc").length, 20);
  mcHxEq("sha1 null", mcHxSha1(null), null);
  for (let n = 54; n <= 66; n++) {
    mcHxOk("sha1 boundary len " + n + " is 40 hex chars", mcHxSha1("a".repeat(n)).length === 40);
  }

  /* ---------- HMAC-SHA256 (RFC 4231) ---------- */
  mcHxEq("hmac rfc4231 case 1", mcHxHmacSha256(mcHxRepeat(0x0b, 20), "Hi There"),
    "b0344c61d8db38535ca8afceaf0bf12b881dc200c9833da726e9376c2e32cff7");
  mcHxEq("hmac rfc4231 case 2", mcHxHmacSha256("Jefe", "what do ya want for nothing?"),
    "5bdcc146bf60754e6a042426089575c75a003f089d2739839dec58b964ec3843");
  mcHxEq("hmac rfc4231 case 3", mcHxHmacSha256(mcHxRepeat(0xaa, 20), mcHxRepeat(0xdd, 50)),
    "773ea91e36800e46854db8ebd09181a72959098b3ef8c122d9635514ced565fe");
  const mcHxKey4 = new Uint8Array(25);
  for (let i = 0; i < 25; i++) mcHxKey4[i] = i + 1;
  mcHxEq("hmac rfc4231 case 4", mcHxHmacSha256(mcHxKey4, mcHxRepeat(0xcd, 50)),
    "82558a389a443c0ea4cc819899f2083a85f0faa3e578f8077a2e3ff46729665b");
  mcHxEq("hmac rfc4231 case 5 (truncated to 128 bits)",
    mcHxHmacSha256(mcHxRepeat(0x0c, 20), "Test With Truncation").slice(0, 32),
    "a3b6167473100ee06e0c796c2955552b");
  mcHxEq("hmac rfc4231 case 6 (131-byte key)",
    mcHxHmacSha256(mcHxRepeat(0xaa, 131), "Test Using Larger Than Block-Size Key - Hash Key First"),
    "60e431591ee0b67f0d8a26aacbf5b77f8e0bc6213728c5140546040f0ee37f54");
  mcHxEq("hmac rfc4231 case 7 (131-byte key, long data)",
    mcHxHmacSha256(mcHxRepeat(0xaa, 131),
      "This is a test using a larger than block-size key and a larger than block-size data. " +
      "The key needs to be hashed before being used by the HMAC algorithm."),
    "9b09ffa71b942fcb27635fbcd5b0e944bfdc63644f0713938a7f51535c3a35e2");
  mcHxEq("hmac empty key and message", mcHxHmacSha256("", ""),
    "b613679a0814d9ec772f95d778c35fc5ff1697c493715653c6c712144292c5ad");
  mcHxEq("hmac null key", mcHxHmacSha256(null, "x"), null);
  mcHxEq("hmac null msg", mcHxHmacSha256("k", null), null);
  mcHxEq("hmac verify good", mcHxHmacVerify("k", "m", mcHxHmacSha256("k", "m")), true);
  mcHxEq("hmac verify uppercase tag", mcHxHmacVerify("k", "m", mcHxHmacSha256("k", "m").toUpperCase()), true);
  mcHxEq("hmac verify wrong key", mcHxHmacVerify("k2", "m", mcHxHmacSha256("k", "m")), false);
  mcHxEq("hmac verify truncated tag", mcHxHmacVerify("k", "m", mcHxHmacSha256("k", "m").slice(0, 60)), false);
  mcHxEq("hmac verify garbage tag", mcHxHmacVerify("k", "m", "zzz"), false);
  mcHxEq("hmac verify null tag", mcHxHmacVerify("k", "m", null), false);
  mcHxEq("timingSafeEqual same", mcHxTimingSafeEqual([1, 2, 3], [1, 2, 3]), true);
  mcHxEq("timingSafeEqual diff", mcHxTimingSafeEqual([1, 2, 3], [1, 2, 4]), false);
  mcHxEq("timingSafeEqual length", mcHxTimingSafeEqual([1, 2], [1, 2, 3]), false);
  mcHxEq("timingSafeEqual null", mcHxTimingSafeEqual(null, [1]), false);

  /* ---------- ids ---------- */
  const mcHxRng1 = mcHxSeededRng(12345);
  const mcHxRng2 = mcHxSeededRng(12345);
  mcHxEq("seeded rng reproducible", mcHxRng1(), mcHxRng2());
  mcHxEq("seeded rng advances", mcHxRng1() !== mcHxRng2(), false);
  mcHxOk("seeded rng is uint32", (function () {
    const r = mcHxSeededRng(7);
    for (let i = 0; i < 500; i++) { const v = r(); if (v < 0 || v > 4294967295 || v !== (v >>> 0)) return false; }
    return true;
  })());
  mcHxEq("uuid seeded reproducible", mcHxUuidV4(42), mcHxUuidV4(42));
  mcHxEq("uuid different seeds differ", mcHxUuidV4(42) === mcHxUuidV4(43), false);
  mcHxOk("uuid format", /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(mcHxUuidV4(1)),
    mcHxUuidV4(1));
  mcHxOk("uuid unseeded format", /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(mcHxUuidV4()));
  mcHxOk("uuid variant/version across many seeds", (function () {
    for (let s = 0; s < 300; s++) {
      const u = mcHxUuidV4(s);
      if (u.charAt(14) !== "4") return false;
      if ("89ab".indexOf(u.charAt(19)) < 0) return false;
    }
    return true;
  })());
  mcHxOk("uuid unseeded values differ", mcHxUuidV4() !== mcHxUuidV4());
  mcHxEq("ulid length", mcHxUlid(0, 1).length, 26);
  mcHxEq("ulid seeded reproducible", mcHxUlid(1700000000000, 9), mcHxUlid(1700000000000, 9));
  mcHxOk("ulid alphabet is Crockford", /^[0-9ABCDEFGHJKMNPQRSTVWXYZ]{26}$/.test(mcHxUlid(1700000000000, 9)),
    mcHxUlid(1700000000000, 9));
  mcHxOk("ulid sorts by time", (function () {
    let prev = "";
    for (let i = 0; i < 200; i++) {
      const u = mcHxUlid(1700000000000 + i * 1000, i);
      if (u <= prev) return false;
      prev = u;
    }
    return true;
  })());
  mcHxEq("ulid clamps negative time", mcHxUlid(-5, 1).slice(0, 10), mcHxUlid(0, 1).slice(0, 10));
  mcHxEq("ulid clamps NaN time to now-ish length", mcHxUlid(NaN, 1).length, 26);
  mcHxEq("ulid clamps overflow time", mcHxUlid(1e30, 1).slice(0, 10), "7ZZZZZZZZZ");
  const mcHxMono = mcHxUlidFactory(4242);
  mcHxOk("ulid factory monotonic within one ms", (function () {
    let prev = "";
    for (let i = 0; i < 500; i++) {
      const u = mcHxMono(1700000000000);
      if (u <= prev) return false;
      prev = u;
    }
    return true;
  })());
  mcHxOk("ulid factory refuses to go backwards", (function () {
    const f = mcHxUlidFactory(7);
    const a = f(1700000000000);
    const b = f(1600000000000); // clock jumped backwards
    return b > a;
  })());

  /* ---------- LZ compression ---------- */
  function mcHxHasLoneSurrogate(s) {
    for (let i = 0; i < s.length; i++) {
      const c = s.charCodeAt(i);
      if (c >= 0xd800 && c <= 0xdbff) {
        const n = i + 1 < s.length ? s.charCodeAt(i + 1) : 0;
        if (n < 0xdc00 || n > 0xdfff) return true;
        i++;
      } else if (c >= 0xdc00 && c <= 0xdfff) {
        return true;
      }
    }
    return false;
  }
  // Stand-in for a localStorage round-trip: JSON is what the app actually uses
  // to get objects in and out, and encodeURIComponent throws URIError on a lone
  // surrogate, which makes it a sharp detector for the exact failure mode.
  function mcHxStorageRoundTrip(s) {
    const viaJson = JSON.parse(JSON.stringify({ v: s })).v;
    let viaUri = null;
    try {
      viaUri = decodeURIComponent(encodeURIComponent(s));
    } catch (e) {
      return null; // lone surrogate
    }
    return viaJson === s && viaUri === s ? s : null;
  }

  const mcHxLzCases = [
    "",
    "a",
    "aa",
    "aaaaaaaaaa",
    "abcabcabcabcabcabcabc",
    "the quick brown fox jumps over the lazy dog",
    "\x00\x01\x02\x03",
    "héllo wörld — ünïcödé",
    "😀🎉 emoji 😀",
    "<img src=x onerror=alert(1)>",
    "{\"a\":1,\"b\":[1,2,3],\"c\":null}",
    "a".repeat(70000),
    "\x00".repeat(5000)
  ];
  for (let i = 0; i < mcHxLzCases.length; i++) {
    const s = mcHxLzCases[i];
    const packed = mcHxCompress(s);
    const label = "lz case " + i + " (len " + s.length + ")";
    mcHxOk(label + " packs", typeof packed === "string");
    mcHxEq(label + " round-trips", mcHxDecompress(packed), s);
    mcHxOk(label + " no lone surrogate", !mcHxHasLoneSurrogate(packed));
    mcHxOk(label + " survives storage", mcHxStorageRoundTrip(packed) !== null);
  }
  // The byte-range-covering payload the header comment promises: every code
  // unit 0..255 plus astral pairs, shuffled so LZW cannot just run-length it.
  let mcHxByteSoup = "";
  for (let round = 0; round < 40; round++) {
    for (let i = 0; i < 256; i++) mcHxByteSoup += String.fromCharCode((i * 7 + round * 13) & 255);
    mcHxByteSoup += "😀";
  }
  const mcHxSoupPacked = mcHxCompress(mcHxByteSoup);
  mcHxEq("lz byte-soup round-trips", mcHxDecompress(mcHxSoupPacked), mcHxByteSoup);
  mcHxOk("lz byte-soup output has no lone surrogate", !mcHxHasLoneSurrogate(mcHxSoupPacked));
  mcHxOk("lz byte-soup survives storage round-trip", mcHxStorageRoundTrip(mcHxSoupPacked) !== null);
  mcHxOk("lz all output chars are in [32,32799] or magic", (function () {
    for (let i = 1; i < mcHxSoupPacked.length; i++) {
      const c = mcHxSoupPacked.charCodeAt(i);
      if (c < 32 || c > 32799) return false;
    }
    return mcHxSoupPacked.charCodeAt(0) === mcHxLzMagic;
  })());
  // Large + high-entropy: forces the dictionary past the 9->16 bit widths, which
  // is where a desynchronised decoder would show up.
  const mcHxWide = mcHxSeededRng(99);
  let mcHxRandomish = "";
  for (let i = 0; i < 120000; i++) mcHxRandomish += String.fromCharCode(32 + (mcHxWide() % 90));
  mcHxEq("lz 120k pseudo-random round-trips", mcHxDecompress(mcHxCompress(mcHxRandomish)), mcHxRandomish);
  // Crossing the 65535-code dictionary cap.
  let mcHxHuge = "";
  const mcHxHugeRng = mcHxSeededRng(5150);
  for (let i = 0; i < 400000; i++) mcHxHuge += String.fromCharCode(97 + (mcHxHugeRng() % 26));
  mcHxEq("lz 400k round-trips (dictionary cap crossed)", mcHxDecompress(mcHxCompress(mcHxHuge)), mcHxHuge);
  mcHxEq("lz compress non-string", mcHxCompress(42), null);
  mcHxEq("lz compress null", mcHxCompress(null), null);
  mcHxEq("lz decompress non-string", mcHxDecompress(42), null);
  mcHxEq("lz decompress empty", mcHxDecompress(""), null);
  mcHxEq("lz decompress plain text (no magic)", mcHxDecompress("hello"), null);
  mcHxEq("lz decompress truncated", mcHxDecompress(mcHxCompress("hello world hello world").slice(0, 3)), null);
  mcHxEq("lz decompress corrupted char", mcHxDecompress(String.fromCharCode(mcHxLzMagic) + "\uD800"), null);
  mcHxOk("lz decompress of magic-only is empty or null", (function () {
    const r = mcHxDecompress(String.fromCharCode(mcHxLzMagic));
    return r === null || r === "";
  })());
  mcHxEq("lz stats non-string", mcHxCompressStats(null), null);
  mcHxEq("lz stats empty ratio", mcHxCompressStats("").ratio, 1);

  /* ---------- stableStringify ---------- */
  mcHxEq("stable sorts keys", mcHxStableStringify({ b: 1, a: 2 }), "{\"a\":2,\"b\":1}");
  mcHxEq("stable sorts nested keys",
    mcHxStableStringify({ z: { d: 1, c: 2 }, a: 3 }), "{\"a\":3,\"z\":{\"c\":2,\"d\":1}}");
  mcHxEq("stable key order independent of insertion",
    mcHxStableStringify({ a: 1, b: 2 }), mcHxStableStringify({ b: 2, a: 1 }));
  mcHxEq("stable array order preserved", mcHxStableStringify([3, 1, 2]), "[3,1,2]");
  mcHxEq("stable undefined value dropped", mcHxStableStringify({ a: undefined, b: 1 }), "{\"b\":1}");
  mcHxEq("stable function value dropped", mcHxStableStringify({ a: function () {}, b: 1 }), "{\"b\":1}");
  mcHxEq("stable symbol value dropped", mcHxStableStringify({ a: Symbol("s"), b: 1 }), "{\"b\":1}");
  mcHxEq("stable undefined in array -> null", mcHxStableStringify([1, undefined, 2]), "[1,null,2]");
  mcHxEq("stable hole in array -> null", mcHxStableStringify([1, , 2]), "[1,null,2]");
  mcHxEq("stable top-level undefined -> 'null'", mcHxStableStringify(undefined), "null");
  mcHxEq("stable top-level function -> 'null'", mcHxStableStringify(function () {}), "null");
  mcHxEq("stable NaN -> null", mcHxStableStringify({ a: NaN }), "{\"a\":null}");
  mcHxEq("stable Infinity -> null", mcHxStableStringify({ a: Infinity }), "{\"a\":null}");
  mcHxEq("stable -Infinity -> null", mcHxStableStringify({ a: -Infinity }), "{\"a\":null}");
  mcHxEq("stable nonFinite tag mode",
    mcHxStableStringify({ a: NaN, b: Infinity, c: -Infinity }, { nonFinite: "tag" }),
    "{\"a\":\"@NaN\",\"b\":\"@Infinity\",\"c\":\"@-Infinity\"}");
  mcHxEq("stable -0 folds to 0", mcHxStableStringify(-0), "0");
  mcHxEq("stable bigint -> decimal string", mcHxStableStringify({ a: BigInt("90071992547409919") }),
    "{\"a\":\"90071992547409919\"}");
  mcHxEq("stable Date -> ISO", mcHxStableStringify(new Date(0)), "\"1970-01-01T00:00:00.000Z\"");
  mcHxEq("stable invalid Date -> null", mcHxStableStringify(new Date(NaN)), "null");
  mcHxEq("stable Date matches JSON.stringify", mcHxStableStringify({ d: new Date(86400000) }),
    JSON.stringify({ d: new Date(86400000) }));
  mcHxEq("stable Map -> {} (documented footgun)", mcHxStableStringify(new Map([["a", 1]])), "{}");
  mcHxEq("stable Set -> {}", mcHxStableStringify(new Set([1, 2])), "{}");
  mcHxEq("stable null", mcHxStableStringify(null), "null");
  mcHxEq("stable booleans", mcHxStableStringify([true, false]), "[true,false]");
  mcHxEq("stable string escaping", mcHxStableStringify("a\"b\\c\nd"), JSON.stringify("a\"b\\c\nd"));
  mcHxEq("stable markup string escaped as data", mcHxStableStringify("<b onload=x>"), "\"<b onload=x>\"");
  mcHxEq("stable lone surrogate escaped", mcHxStableStringify("\uD800"), JSON.stringify("\uD800"));
  mcHxEq("stable unicode keys sorted by code unit",
    mcHxStableStringify({ "é": 1, "a": 2, "Z": 3 }), "{\"Z\":3,\"a\":2,\"é\":1}");
  mcHxEq("stable nested empty containers", mcHxStableStringify({ a: {}, b: [] }), "{\"a\":{},\"b\":[]}");
  const mcHxShared = { x: 1 };
  mcHxEq("stable DAG (shared ref) is not a cycle",
    mcHxStableStringify({ a: mcHxShared, b: mcHxShared }), "{\"a\":{\"x\":1},\"b\":{\"x\":1}}");
  const mcHxCyc = { name: "loop" };
  mcHxCyc.self = mcHxCyc;
  mcHxEq("stable cycle -> null sentinel", mcHxStableStringify(mcHxCyc), null);
  mcHxOk("stable cycle sets lastError", /cycle at \$\.self/.test(mcHxLastError()), mcHxLastError());
  mcHxEq("stable lastError cleared on success",
    (function () { mcHxStableStringify({ a: 1 }); return mcHxLastError(); })(), "");
  const mcHxArrCyc = [1];
  mcHxArrCyc.push(mcHxArrCyc);
  mcHxEq("stable array cycle -> null", mcHxStableStringify(mcHxArrCyc), null);
  let mcHxThrew = "";
  try {
    mcHxStableStringifyStrict(mcHxCyc);
  } catch (e) {
    mcHxThrew = e.name + ":" + e.mcHxPath;
  }
  mcHxEq("strict variant throws mcHxCycleError", mcHxThrew, "mcHxCycleError:$.self");
  mcHxEq("strict variant returns normally when acyclic",
    mcHxStableStringifyStrict({ b: 1, a: 2 }), "{\"a\":2,\"b\":1}");
  // Deep-but-finite structure: must not blow the stack, must report cleanly.
  let mcHxDeep = 0;
  for (let i = 0; i < 2000; i++) mcHxDeep = { n: mcHxDeep };
  mcHxEq("stable over-deep -> null", mcHxStableStringify(mcHxDeep), null);
  mcHxOk("stable over-deep sets lastError", /max depth/.test(mcHxLastError()), mcHxLastError());
  let mcHxShallow = 0;
  for (let i = 0; i < 100; i++) mcHxShallow = { n: mcHxShallow };
  mcHxOk("stable deep-but-ok works", typeof mcHxStableStringify(mcHxShallow) === "string");
  const mcHxBadJson = { toJSON: function () { throw new Error("nope"); } };
  mcHxEq("stable toJSON that throws -> null", mcHxStableStringify(mcHxBadJson), null);
  mcHxOk("stable never throws on hostile input", (function () {
    const hostile = [null, undefined, NaN, Infinity, -0, "", [], {}, new Date(NaN), mcHxCyc,
                     Symbol("x"), function () {}, new Map(), 1e308 * 10, "\uD800", mcHxDeep];
    for (let i = 0; i < hostile.length; i++) {
      try { mcHxStableStringify(hostile[i]); } catch (e) { return false; }
      try { mcHxHashObject(hostile[i]); } catch (e) { return false; }
    }
    return true;
  })());
  mcHxOk("stable output is always parseable JSON or null", (function () {
    const inputs = [{ b: 1, a: [1, { z: null }] }, [1, 2], "s", 5, true, null, undefined,
                    new Date(0), new Date(NaN), { a: NaN }];
    for (let i = 0; i < inputs.length; i++) {
      const s = mcHxStableStringify(inputs[i]);
      if (s === null) continue;
      try { JSON.parse(s); } catch (e) { return false; }
    }
    return true;
  })());
  mcHxOk("stable output never contains the token undefined", (function () {
    const s = mcHxStableStringify({ a: undefined, b: [undefined], c: NaN, d: function () {} });
    return s.indexOf("undefined") < 0 && s.indexOf("NaN") < 0;
  })());

  /* ---------- content addressing ---------- */
  mcHxEq("hashObject stable across key order",
    mcHxHashObject({ a: 1, b: 2 }), mcHxHashObject({ b: 2, a: 1 }));
  mcHxEq("hashObject differs on value change",
    mcHxHashObject({ a: 1 }) === mcHxHashObject({ a: 2 }), false);
  mcHxEq("hashObject cycle -> null", mcHxHashObject(mcHxCyc), null);
  mcHxEq("hashObject is sha256 of the stable string",
    mcHxHashObject({ a: 1 }), mcHxSha256("{\"a\":1}"));
  mcHxEq("contentId default length", mcHxContentId("hello").length, 12);
  mcHxEq("contentId is url-safe", /^[A-Za-z0-9_-]+$/.test(mcHxContentId(mcHxByteSoup)), true);
  mcHxEq("contentId stable", mcHxContentId({ a: 1, b: 2 }), mcHxContentId({ b: 2, a: 1 }));
  mcHxEq("contentId custom length clamped low", mcHxContentId("x", 1).length, 4);
  mcHxEq("contentId custom length clamped high", mcHxContentId("x", 999).length, 43);
  mcHxEq("contentId cycle -> null", mcHxContentId(mcHxCyc), null);
  mcHxOk("contentId collision-free over 20k feed-ish items", (function () {
    const seen = new Set();
    for (let i = 0; i < 20000; i++) {
      const id = mcHxContentId({ url: "https://example.invalid/story/" + i, t: i });
      if (seen.has(id)) return false;
      seen.add(id);
    }
    return true;
  })());

  /* ---------- cross-cutting: nothing throws ---------- */
  mcHxOk("no public function throws on hostile input", (function () {
    const hostile = [null, undefined, NaN, Infinity, -1, 0, "", "   ", "\x00", "\uD800",
                     [], {}, [1, 2, 3], [999], true, function () {}, new Date(NaN)];
    const fns = [mcHxSha256, mcHxSha256Bytes, mcHxSha1, mcHxSha1Bytes, mcHxToHex, mcHxFromHex,
                 mcHxToBase64, mcHxToBase64Url, mcHxFromBase64, mcHxToBase32, mcHxFromBase32,
                 mcHxPercentEncode, mcHxPercentDecode, mcHxPercentDecodeBytes, mcHxCrc32,
                 mcHxFnv1a32, mcHxMurmur32, mcHxCompress, mcHxDecompress, mcHxCompressStats,
                 mcHxUtf8Encode, mcHxUtf8Decode, mcHxToBytes, mcHxHashObject, mcHxContentId];
    for (let i = 0; i < fns.length; i++) {
      for (let j = 0; j < hostile.length; j++) {
        try { fns[i](hostile[j]); } catch (e) { mcHxFails.push("threw: fn#" + i + " on " + String(hostile[j]) + " " + e.message); return false; }
        try { fns[i](hostile[j], hostile[(j + 1) % hostile.length]); } catch (e) { mcHxFails.push("threw(2 args): fn#" + i + " " + e.message); return false; }
      }
    }
    return true;
  })());
  mcHxOk("no output string contains NaN or undefined", (function () {
    const probes = [mcHxSha256("x"), mcHxSha1("x"), mcHxToBase64([1]), mcHxToBase32([1]),
                    mcHxPercentEncode("x"), mcHxUuidV4(1), mcHxUlid(0, 1), mcHxContentId("x"),
                    mcHxStableStringify({ a: NaN })];
    for (let i = 0; i < probes.length; i++) {
      const s = String(probes[i]);
      if (s.indexOf("NaN") >= 0 || s.indexOf("undefined") >= 0) return false;
    }
    return true;
  })());

  /* ---------- measurements (reported, not asserted) ---------- */
  // A realistic localStorage payload: a page of feed items with the repetitive
  // key names and shared vocabulary that JSON always has.
  const mcHxFeed = [];
  const mcHxFeedRng = mcHxSeededRng(2024);
  const mcHxWords = ["market", "rates", "policy", "vote", "report", "growth", "energy", "talks",
                     "budget", "court", "storm", "launch", "deal", "strike", "survey"];
  for (let i = 0; i < 300; i++) {
    const w = function () { return mcHxWords[mcHxFeedRng() % mcHxWords.length]; };
    mcHxFeed.push({
      id: mcHxUlid(1700000000000 + i * 60000, i),
      url: "https://news.example.invalid/2026/08/" + w() + "-" + w() + "-" + i,
      title: w() + " " + w() + " as " + w() + " " + w() + " in " + w(),
      summary: (w() + " " + w() + " " + w() + " " + w() + ". ").repeat(4),
      source: "Example Wire",
      publishedAt: new Date(1700000000000 + i * 60000).toISOString(),
      tags: [w(), w(), w()],
      score: (mcHxFeedRng() % 1000) / 1000,
      seen: false
    });
  }
  const mcHxFeedJson = mcHxStableStringify(mcHxFeed);
  const mcHxFeedStats = mcHxCompressStats(mcHxFeedJson);
  mcHxOk("feed payload round-trips through compression",
    mcHxDecompress(mcHxCompress(mcHxFeedJson)) === mcHxFeedJson);
  mcHxOk("feed payload actually compresses", mcHxFeedStats.ratio > 1.5, mcHxFeedStats.ratio);

  const mcHxOneMb = "a".repeat(1048576);
  const mcHxT0 = Date.now();
  mcHxSha256(mcHxOneMb);
  const mcHxT1 = Date.now();
  const mcHxMbMs = mcHxT1 - mcHxT0;
  // Deliberately not asserting a tight bound: this runs on unknown hardware in
  // an unknown browser. The only thing worth failing on is an accidental
  // quadratic, which a 30s ceiling catches without flaking on a slow machine.
  mcHxOk("sha256 1MB completes well inside a browser frame budget * many",
    mcHxMbMs < 30000, mcHxMbMs + "ms");

  const mcHxT2 = Date.now();
  const mcHxMbPacked = mcHxCompress(mcHxFeedJson);
  const mcHxT3 = Date.now();
  mcHxDecompress(mcHxMbPacked);
  const mcHxT4 = Date.now();

  console.log("measurements (informational, machine-dependent):");
  console.log("  sha256 1MB:            " + mcHxMbMs + " ms  (~" +
    (mcHxMbMs > 0 ? Math.round(1000 / mcHxMbMs) : 1000) + " MB/s)");
  console.log("  feed JSON:             " + mcHxFeedStats.chars + " UTF-16 chars, " +
    mcHxFeedStats.utf8Bytes + " UTF-8 bytes");
  console.log("  compressed:            " + mcHxFeedStats.packedChars + " chars  (ratio " +
    Math.round(mcHxFeedStats.ratio * 100) / 100 + "x, " + mcHxFeedStats.savedPercent +
    "% less localStorage)");
  console.log("  compress/decompress:   " + (mcHxT3 - mcHxT2) + " ms / " + (mcHxT4 - mcHxT3) + " ms");
  console.log("  platform CSPRNG:       " + (mcHxUuidV4Secure() ? "yes" : "no (ids are seeded, not secret)"));

  const mcHxTotal = mcHxPassed + mcHxFails.length;
  for (let i = 0; i < mcHxFails.length; i++) console.log("FAIL: " + mcHxFails[i]);
  console.log((mcHxFails.length ? "FAIL" : "PASS") + " — " + mcHxPassed + "/" + mcHxTotal +
    " assertions passed");
  if (mcHxFails.length) process.exit(1);
}
