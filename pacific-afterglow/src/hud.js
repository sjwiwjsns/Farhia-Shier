import {
  roadsX, roadsZ, ROAD_HALF, SHORE_X, BEACH_START, PROMENADE, PIERS, BLOCK_SIZE, districtAt, streetName, BOUNDS, WEST, EAST, NORTH, SOUTH,
  DISTRICTS, districtKey,
} from './world/layout.js';
import { allBlocks } from './world/plan.js';
import { routeBetween, routeLength } from './gps.js';

const $ = id => document.getElementById(id);
const MAP = { x0: -760, x1: EAST + 140, z0: BOUNDS.minZ - 90, z1: BOUNDS.maxZ + 90 };
const MAP_SCALE = 0.6; // pixels per metre of the pre-drawn city image

// The static city map is drawn once; the radar rotates it under the car every frame.
function drawStaticMap(colliders) {
  const c = document.createElement('canvas');
  c.width = Math.round((MAP.x1 - MAP.x0) * MAP_SCALE);
  c.height = Math.round((MAP.z1 - MAP.z0) * MAP_SCALE);
  const g = c.getContext('2d');
  g.scale(MAP_SCALE, MAP_SCALE);
  g.translate(-MAP.x0, -MAP.z0);
  const W = MAP.x1 - MAP.x0, H = MAP.z1 - MAP.z0;
  g.fillStyle = '#16343f';
  g.fillRect(MAP.x0, MAP.z0, W, H);
  // Hills beyond the city limits.
  g.fillStyle = '#243229';
  g.fillRect(SHORE_X, MAP.z0, MAP.x1 - SHORE_X, H);
  g.fillStyle = '#1e2a2e';
  g.fillRect(SHORE_X, BOUNDS.minZ, BOUNDS.maxX - SHORE_X, BOUNDS.maxZ - BOUNDS.minZ);
  g.fillStyle = '#6d6047';
  g.fillRect(SHORE_X, MAP.z0, BEACH_START - SHORE_X, H);
  g.fillStyle = '#2d4433';
  g.fillRect(BEACH_START, MAP.z0, PROMENADE.to - BEACH_START, H);
  for (const [x, z, plan] of allBlocks()) {
    g.fillStyle = '#29353a';
    g.fillRect(x - BLOCK_SIZE / 2, z - BLOCK_SIZE / 2, BLOCK_SIZE, BLOCK_SIZE);
    if (plan.kind === 'park') { g.fillStyle = '#2f4a35'; g.fillRect(x - 55, z - 55, 110, 110); }
    if (plan.kind === 'parking') { g.fillStyle = '#323b40'; g.fillRect(x - 45, z - 45, 104, 104); }
  }
  g.fillStyle = '#3e4f56';
  for (const b of colliders) g.fillRect(b.x - b.w, b.z - b.d, b.w * 2, b.d * 2);
  g.fillStyle = '#5b6b6e';
  for (const x of roadsX) g.fillRect(x - ROAD_HALF, NORTH - ROAD_HALF, ROAD_HALF * 2, SOUTH - NORTH + ROAD_HALF * 2);
  for (const z of roadsZ) g.fillRect(WEST - ROAD_HALF, z - ROAD_HALF, EAST - WEST + ROAD_HALF * 2, ROAD_HALF * 2);
  g.fillStyle = '#7d6a52';
  for (const P of PIERS) g.fillRect(P.x1, P.z - P.halfWidth, P.rampStart - P.x1, P.halfWidth * 2);
  return c;
}

// Where to print each district's name on the big map: the middle of its blocks.
function districtLabels() {
  const sums = {};
  for (const [x, z] of allBlocks()) {
    const k = districtKey(x, z);
    const s = sums[k] || (sums[k] = [0, 0, 0]);
    s[0] += x; s[1] += z; s[2]++;
  }
  const out = Object.entries(sums).map(([k, [x, z, n]]) => [DISTRICTS[k][0], x / n, z / n]);
  out.push([DISTRICTS.ocean[0], -385, 0]);
  return out;
}

export class Hud {
  constructor(colliders) {
    this.canvas = $('minimap');
    this.ctx = this.canvas.getContext('2d');
    this.mapImage = drawStaticMap(colliders);
    this.expanded = false;
    this.labels = districtLabels();
    this.view = { zoom: 1, x: (MAP.x0 + MAP.x1) / 2, z: (MAP.z0 + MAP.z1) / 2 };
    this.raceKey = '';
    this.route = null; // GPS polyline to the current target
    this.routeKey = '';
    this.routeAt = [0, 0];
    this.raceRoute = null; // the rest of the Sunset Run, road by road
    this.els = {};
    for (const id of ['speed', 'gear', 'tach-fill', 'boost-fill', 'district', 'road-name', 'heading', 'race-time', 'checkpoint-distance', 'clock', 'rpm-readout']) this.els[id] = $(id);
    this.last = {};
  }

  set(id, value) {
    if (this.last[id] === value) return;
    this.last[id] = value;
    if (this.els[id]) this.els[id].textContent = value;
  }

  // Recompute the GPS line when the target changes or the car has moved on.
  updateRoute(car, game) {
    let target = null;
    if (game.mode === 'race' && game.checkpoint < game.route.length) target = game.route[game.checkpoint];
    else if (game.waypoint) target = game.waypoint;
    if (!target) { this.route = null; this.routeKey = ''; return; }
    const key = target.join(',') + (game.mode === 'race' ? ':' + game.checkpoint : '');
    const moved = Math.hypot(car.x - this.routeAt[0], car.z - this.routeAt[1]);
    if (key !== this.routeKey || moved > 12) {
      this.route = routeBetween(car.x, car.z, target[0], target[1]);
      this.routeKey = key;
      this.routeAt = [car.x, car.z];
      // The rest of the run only changes when a checkpoint is passed.
      const raceKey = game.mode === 'race' ? `${game.raceId}:${game.checkpoint}` : '';
      if (raceKey !== this.raceKey) {
        this.raceKey = raceKey;
        this.raceRoute = null;
        if (raceKey) {
          this.raceRoute = [];
          for (let i = game.checkpoint; i < game.route.length - 1; i++) this.raceRoute.push(routeBetween(...game.route[i], ...game.route[i + 1]));
        }
      }
    }
  }

  get routeDistance() {
    return this.route ? routeLength(this.route) : 0;
  }

  // Wanted stars: lit up to the level, flashing while the police search for you.
  setWanted(level, evading) {
    const key = level + (evading ? 'e' : '');
    if (this.last.wanted === key) return;
    this.last.wanted = key;
    const el = $('wanted');
    el.classList.toggle('hidden', level === 0);
    el.classList.toggle('evading', evading);
    el.querySelectorAll('i').forEach((star, i) => star.classList.toggle('on', i < level));
  }

  update(car, game, traffic, atmosphere, wanted) {
    const kph = Math.round(car.kmh);
    this.set('speed', String(kph).padStart(3, '0'));
    this.set('gear', car.gear < 0 ? 'R' : kph < 1 && !car.throttle ? 'N' : String(car.gear));
    const redline = car.def?.redline ?? 7400;
    this.els['tach-fill'].style.width = Math.min(100, (car.rpm / redline) * 100).toFixed(1) + '%';
    this.els['tach-fill'].classList.toggle('redline', car.rpm > redline - 800);
    this.els['boost-fill'].style.width = car.nitro.toFixed(1) + '%';
    this.els['boost-fill'].classList.toggle('active', car.boosting);
    this.set('rpm-readout', (car.rpm / 1000).toFixed(1));
    const [district] = districtAt(car.x, car.z);
    this.set('district', district);
    this.set('road-name', streetName(car.x, car.z));
    const dirs = ['N', 'NW', 'W', 'SW', 'S', 'SE', 'E', 'NE'];
    this.set('heading', dirs[((Math.round(car.heading / (Math.PI / 4)) % 8) + 8) % 8]);
    this.set('clock', atmosphere.clockLabel);
    this.updateRoute(car, game);
    if (game.mode === 'race') {
      this.set('race-time', formatTime(game.raceTime));
      if (game.route[game.checkpoint]) this.set('checkpoint-distance', Math.round(this.routeDistance) + ' M');
    }
    if (wanted) this.setWanted(wanted.level, wanted.evading);
    this.drawMap(car, game, traffic, wanted);
  }

  // Scale of the big map in canvas pixels per metre, at the current zoom.
  mapScale() {
    return Math.min(this.canvas.width / (MAP.x1 - MAP.x0), this.canvas.height / (MAP.z1 - MAP.z0)) * this.view.zoom;
  }

  // Canvas pixel -> world position on the big map.
  mapPoint(clientX, clientY) {
    const r = this.canvas.getBoundingClientRect();
    const px = ((clientX - r.left) / r.width) * this.canvas.width, py = ((clientY - r.top) / r.height) * this.canvas.height;
    const scale = this.mapScale();
    return [(px - this.canvas.width / 2) / scale + this.view.x, (py - this.canvas.height / 2) / scale + this.view.z];
  }

  clampView() {
    const v = this.view;
    v.zoom = Math.min(Math.max(v.zoom, 1), 8);
    const halfW = (MAP.x1 - MAP.x0) / 2 * (1 - 1 / v.zoom), halfH = (MAP.z1 - MAP.z0) / 2 * (1 - 1 / v.zoom);
    v.x = Math.min(Math.max(v.x, (MAP.x0 + MAP.x1) / 2 - halfW), (MAP.x0 + MAP.x1) / 2 + halfW);
    v.z = Math.min(Math.max(v.z, (MAP.z0 + MAP.z1) / 2 - halfH), (MAP.z0 + MAP.z1) / 2 + halfH);
  }

  // Zoom the big map about a point on screen (mouse wheel, pinch or the +/- keys).
  zoomAt(factor, clientX, clientY) {
    if (!this.expanded) return;
    const r = this.canvas.getBoundingClientRect();
    const [wx, wz] = this.mapPoint(clientX ?? r.left + r.width / 2, clientY ?? r.top + r.height / 2);
    const before = this.view.zoom;
    this.view.zoom = Math.min(Math.max(before * factor, 1), 8);
    const k = before / this.view.zoom;
    this.view.x = wx + (this.view.x - wx) * k;
    this.view.z = wz + (this.view.z - wz) * k;
    this.clampView();
  }

  // Drag the big map by a distance in CSS pixels.
  panBy(dx, dy) {
    if (!this.expanded) return;
    const r = this.canvas.getBoundingClientRect();
    const scale = this.mapScale() * (r.width / this.canvas.width);
    this.view.x -= dx / scale;
    this.view.z -= dy / scale;
    this.clampView();
  }

  // Click on the full-screen map: set (or clear) a waypoint.
  pick(clientX, clientY, game) {
    if (!this.expanded) return;
    const [x, z] = this.mapPoint(clientX, clientY);
    if (game.waypoint && Math.hypot(game.waypoint[0] - x, game.waypoint[1] - z) < 40 / this.view.zoom + 12) game.waypoint = null;
    else game.waypoint = [Math.min(Math.max(x, WEST), EAST), Math.min(Math.max(z, NORTH), SOUTH)];
    this.routeKey = '';
  }

  polyline(ctx, pts) {
    ctx.beginPath();
    pts.forEach(([x, z], i) => (i ? ctx.lineTo(x, z) : ctx.moveTo(x, z)));
    ctx.stroke();
  }

  drawMap(car, game, traffic, wanted) {
    const { canvas: cv, ctx } = this;
    if (this.expanded) {
      // Match the canvas to its on-screen box so the big map is never stretched.
      const r = cv.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2);
      const W = Math.round(r.width * dpr), H = Math.round(r.height * dpr);
      if (W > 0 && H > 0 && (cv.width !== W || cv.height !== H)) { cv.width = W; cv.height = H; }
    }
    const w = cv.width, h = cv.height;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#16343f';
    ctx.fillRect(0, 0, w, h);
    ctx.save();
    if (this.expanded) {
      const scale = this.mapScale();
      ctx.translate(w / 2, h / 2);
      ctx.scale(scale, scale);
      ctx.translate(-this.view.x, -this.view.z);
    } else {
      ctx.translate(w / 2, h * 0.62);
      ctx.scale(0.85, 0.85);
      ctx.rotate(car.heading);
      ctx.translate(-car.x, -car.z);
    }
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(this.mapImage, MAP.x0, MAP.z0, MAP.x1 - MAP.x0, MAP.z1 - MAP.z0);
    // Marker and line sizes are in metres; on the big map they are sized to stay readable.
    const z = this.expanded ? 3.4 / Math.sqrt(this.view.zoom) : 1;
    if (this.expanded) {
      ctx.fillStyle = '#fff4dc66';
      ctx.font = `700 ${Math.round(46 / Math.sqrt(this.view.zoom))}px "Barlow Condensed", Barlow, Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (const [name, lx, lz] of this.labels) {
        if (name === 'OCEAN DRIVE') { ctx.save(); ctx.translate(lx, lz); ctx.rotate(-Math.PI / 2); ctx.fillText(name, 0, 0); ctx.restore(); } else ctx.fillText(name, lx, lz);
      }
    }
    ctx.lineJoin = ctx.lineCap = 'round';
    // The rest of the Sunset Run, faint, then the GPS line to the next target on top.
    if (this.raceRoute) {
      ctx.strokeStyle = '#ffc68650';
      ctx.lineWidth = 5 * z;
      for (const leg of this.raceRoute) this.polyline(ctx, leg);
    }
    if (this.route) {
      const color = game.mode === 'race' ? '#ffb46b' : '#c690ff';
      ctx.strokeStyle = '#0b141acc';
      ctx.lineWidth = 11 * z;
      this.polyline(ctx, this.route);
      ctx.strokeStyle = color;
      ctx.lineWidth = 7 * z;
      this.polyline(ctx, this.route);
    }
    // Traffic, then police with their search rings while you are wanted.
    ctx.fillStyle = '#c9d3d6';
    for (const t of traffic.cars) if (!t.police) ctx.fillRect(t.x - 2.5 * z, t.z - 2.5 * z, 5 * z, 5 * z);
    const flash = Math.floor(performance.now() / 180) % 2;
    for (const t of traffic.police) {
      const chasing = t.mode === 'chase';
      if (chasing && wanted) {
        ctx.fillStyle = wanted.evading ? '#3a6cff14' : '#ff3a4a12';
        ctx.beginPath();
        ctx.arc(t.x, t.z, wanted.sightRange(), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = chasing ? (flash ? '#ff4458' : '#4a7dff') : '#5f8dff';
      ctx.beginPath();
      ctx.arc(t.x, t.z, (chasing ? 6 : 4) * z, 0, Math.PI * 2);
      ctx.fill();
    }
    if (game.mode === 'race' && game.checkpoint < game.route.length) {
      game.route.forEach(([x, cz], i) => {
        if (i < game.checkpoint) return;
        ctx.beginPath();
        ctx.arc(x, cz, (i === game.checkpoint ? 11 : 6) * z, 0, Math.PI * 2);
        ctx.fillStyle = i === game.checkpoint ? '#ffc686' : '#ffc68677';
        ctx.fill();
        if (this.expanded) {
          ctx.fillStyle = '#17212a';
          ctx.font = `700 ${Math.round(9 * z)}px Barlow, Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(String(i + 1), x, cz + 1);
        }
      });
    }
    if (game.waypoint && game.mode !== 'race') {
      const [wx, wz] = game.waypoint;
      ctx.fillStyle = '#c690ff';
      ctx.beginPath();
      ctx.arc(wx, wz - 14 * z, 9 * z, Math.PI, 0);
      ctx.lineTo(wx, wz);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(wx, wz - 14 * z, 3.5 * z, 0, Math.PI * 2);
      ctx.fill();
    }
    // Player arrow.
    ctx.translate(car.x, car.z);
    ctx.rotate(-car.heading);
    const s = this.expanded ? 1.5 * z : 1;
    ctx.shadowColor = '#000';
    ctx.shadowBlur = 8;
    ctx.fillStyle = '#ff8a52';
    ctx.beginPath();
    ctx.moveTo(0, -13 * s);
    ctx.lineTo(8 * s, 9 * s);
    ctx.lineTo(0, 4 * s);
    ctx.lineTo(-8 * s, 9 * s);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    if (this.expanded) {
      ctx.fillStyle = '#fff4dccc';
      ctx.font = '600 20px Barlow, Arial';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillText(game.mode === 'race' ? `${game.raceName} · FOLLOW THE ORANGE LINE` : 'CLICK TO SET A WAYPOINT · SCROLL OR PINCH TO ZOOM · DRAG TO MOVE', 24, 22);
      ctx.fillStyle = '#5f8dff'; ctx.fillRect(24, h - 44, 14, 14);
      ctx.fillStyle = '#c9d3d6'; ctx.fillRect(170, h - 44, 14, 14);
      ctx.fillStyle = '#fff4dccc';
      ctx.fillText('POLICE', 46, h - 46);
      ctx.fillText('TRAFFIC', 192, h - 46);
    }
    // North marker on the radar edge.
    if (!this.expanded) {
      const a = car.heading;
      const nx = w / 2 + Math.sin(-a) * -(h * 0.42), ny = h * 0.62 - Math.cos(a) * (h * 0.42);
      ctx.fillStyle = '#fff4dc';
      ctx.font = '600 22px Barlow, Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('N', Math.min(w - 16, Math.max(16, nx)), Math.min(h - 16, Math.max(16, ny)));
    }
  }

  setExpanded(on, car = null) {
    this.expanded = on;
    // Open on the whole city; zooming in from there keeps the car in view.
    this.view.zoom = 1;
    if (car) { this.view.x = car.x; this.view.z = car.z; }
    this.clampView();
    this.canvas.width = on ? 1100 : 480;
    this.canvas.height = on ? 1100 : 360;
  }
}

export function formatTime(t) {
  const min = Math.floor(t / 60), sec = Math.floor(t % 60), cs = Math.floor((t * 100) % 100);
  return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
}
