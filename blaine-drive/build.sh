#!/bin/sh
# Assemble the single deployable file blaine-drive/index.html from src/.
# Usage: sh blaine-drive/build.sh [output]   (default: blaine-drive/index.html)
set -e
D=$(cd "$(dirname "$0")" && pwd)
S="$D/src"
OUT=${1:-$D/index.html}
{
  cat "$S/00_head.html"
  printf '<script id="bd-physics">\n'; cat "$S/physics.js"; printf '</script>\n'
  printf '<script id="bd-validate">\n'; cat "$S/validate.js"; printf '</script>\n'
  cat <<'LOADER'
<script>
// Three.js r128 from cdnjs, falling back to jsDelivr
(function () {
  var srcs = ['https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js', 'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js'];
  function load(i) {
    if (i >= srcs.length) { window.__bdThreeFailed = true; if (window.__bdThreeFail) window.__bdThreeFail(); return; }
    var s = document.createElement('script'); s.src = srcs[i]; s.async = true; s.crossOrigin = 'anonymous';
    s.onload = function () { if (window.__bdThreeReady) window.__bdThreeReady(); };
    s.onerror = function () { s.parentNode && s.parentNode.removeChild(s); load(i + 1); };
    document.head.appendChild(s);
  }
  load(0);
})();
</script>
LOADER
  printf '<script id="bd-main">\n(function () {\nvar BD = window.BD = window.BD || {};\n'
  for f in 10_core 20_net 30_gen 40_mesh 45_objects 50_veh 60_ai 70_env 80_ui; do cat "$S/$f.js"; printf '\n'; done
  printf '})();\n</script>\n</body>\n</html>\n'
} > "$OUT"
echo "built $OUT ($(wc -c < "$OUT") bytes)"
