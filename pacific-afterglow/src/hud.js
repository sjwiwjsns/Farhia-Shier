import { roadsX, roadsZ, ROAD_HALF, SHORE_X, BEACH_START, PROMENADE, PIER, blockCentersX, blockCentersZ, BLOCK_SIZE, districtAt, streetName } from './world/layout.js';

const $ = id => document.getElementById(id);
const MAP = { x0: -760, x1: 420, z0: -640, z1: 640 };

// The static city map is drawn once; the radar rotates it under the car every frame.
function drawStaticMap(colliders) {
  const c = document.createElement('canvas');
  c.width = MAP.x1 - MAP.x0;
  c.height = MAP.z1 - MAP.z0;
  const g = c.getContext('2d');
  g.translate(-MAP.x0, -MAP.z0);
  g.fillStyle = '#16343f';
  g.fillRect(MAP.x0, MAP.z0, c.width, c.height);
  g.fillStyle = '#1e2a2e';
  g.fillRect(SHORE_X, MAP.z0, MAP.x1 - SHORE_X, c.height);
  g.fillStyle = '#6d6047';
  g.fillRect(SHORE_X, MAP.z0, BEACH_START - SHORE_X, c.height);
  g.fillStyle = '#2d4433';
  g.fillRect(BEACH_START, MAP.z0, PROMENADE.to - BEACH_START, c.height);
  g.fillStyle = '#29353a';
  for (const x of blockCentersX) for (const z of blockCentersZ) g.fillRect(x - BLOCK_SIZE / 2, z - BLOCK_SIZE / 2, BLOCK_SIZE, BLOCK_SIZE);
  g.fillStyle = '#2f4a35';
  for (const [x, z] of [[-80, 80], [240, 400]]) g.fillRect(x - 55, z - 55, 110, 110);
  g.fillStyle = '#3e4f56';
  for (const b of colliders) g.fillRect(b.x - b.w, b.z - b.d, b.w * 2, b.d * 2);
  g.fillStyle = '#5b6b6e';
  for (const x of roadsX) g.fillRect(x - ROAD_HALF, roadsZ[0] - ROAD_HALF, ROAD_HALF * 2, roadsZ[roadsZ.length - 1] - roadsZ[0] + ROAD_HALF * 2);
  for (const z of roadsZ) g.fillRect(roadsX[0] - ROAD_HALF, z - ROAD_HALF, roadsX[roadsX.length - 1] - roadsX[0] + ROAD_HALF * 2, ROAD_HALF * 2);
  g.fillStyle = '#7d6a52';
  g.fillRect(PIER.x1, PIER.z - PIER.halfWidth, PIER.rampStart - PIER.x1, PIER.halfWidth * 2);
  return c;
}

export class Hud {
  constructor(colliders) {
    this.canvas = $('minimap');
    this.ctx = this.canvas.getContext('2d');
    this.mapImage = drawStaticMap(colliders);
    this.expanded = false;
    this.els = {};
    for (const id of ['speed', 'gear', 'tach-fill', 'boost-fill', 'district', 'road-name', 'heading', 'race-time', 'checkpoint-distance', 'clock', 'rpm-readout']) this.els[id] = $(id);
    this.last = {};
  }

  set(id, value) {
    if (this.last[id] === value) return;
    this.last[id] = value;
    if (this.els[id]) this.els[id].textContent = value;
  }

  update(car, game, traffic, atmosphere) {
    const kph = Math.round(car.kmh);
    this.set('speed', String(kph).padStart(3, '0'));
    this.set('gear', car.gear < 0 ? 'R' : kph < 1 && !car.throttle ? 'N' : String(car.gear));
    this.els['tach-fill'].style.width = Math.min(100, (car.rpm / 7400) * 100).toFixed(1) + '%';
    this.els['tach-fill'].classList.toggle('redline', car.rpm > 6600);
    this.els['boost-fill'].style.width = car.nitro.toFixed(1) + '%';
    this.els['boost-fill'].classList.toggle('active', car.boosting);
    this.set('rpm-readout', (car.rpm / 1000).toFixed(1));
    const [district] = districtAt(car.x, car.z);
    this.set('district', district);
    this.set('road-name', streetName(car.x, car.z));
    const dirs = ['N', 'NW', 'W', 'SW', 'S', 'SE', 'E', 'NE'];
    this.set('heading', dirs[((Math.round(car.heading / (Math.PI / 4)) % 8) + 8) % 8]);
    this.set('clock', atmosphere.clockLabel);
    if (game.mode === 'race') {
      this.set('race-time', formatTime(game.raceTime));
      const cp = game.route[game.checkpoint];
      if (cp) this.set('checkpoint-distance', Math.round(Math.hypot(cp[0] - car.x, cp[1] - car.z)) + ' M');
    }
    this.drawMap(car, game, traffic);
  }

  drawMap(car, game, traffic) {
    const { canvas: cv, ctx } = this;
    const w = cv.width, h = cv.height;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#16343f';
    ctx.fillRect(0, 0, w, h);
    ctx.save();
    if (this.expanded) {
      const scale = Math.min(w / (MAP.x1 - MAP.x0), h / (MAP.z1 - MAP.z0));
      ctx.translate(w / 2, h / 2);
      ctx.scale(scale, scale);
      ctx.translate(-(MAP.x0 + MAP.x1) / 2, -(MAP.z0 + MAP.z1) / 2);
    } else {
      ctx.translate(w / 2, h * 0.62);
      ctx.scale(0.85, 0.85);
      ctx.rotate(car.heading);
      ctx.translate(-car.x, -car.z);
    }
    ctx.drawImage(this.mapImage, MAP.x0, MAP.z0);
    // Traffic.
    ctx.fillStyle = '#c9d3d6';
    for (const t of traffic.cars) ctx.fillRect(t.x - 2, t.z - 2, 4, 4);
    if (game.mode === 'race' && game.checkpoint < game.route.length) {
      const [gx, gz] = game.route[game.checkpoint];
      ctx.strokeStyle = '#ffc686cc';
      ctx.lineWidth = this.expanded ? 4 : 3;
      ctx.setLineDash([7, 6]);
      ctx.beginPath();
      ctx.moveTo(car.x, car.z);
      ctx.lineTo(gx, gz);
      ctx.stroke();
      ctx.setLineDash([]);
      game.route.forEach(([x, z], i) => {
        if (i < game.checkpoint) return;
        ctx.beginPath();
        ctx.arc(x, z, i === game.checkpoint ? 11 : 6, 0, Math.PI * 2);
        ctx.fillStyle = i === game.checkpoint ? '#ffc686' : '#ffc68666';
        ctx.fill();
      });
    }
    // Player arrow.
    ctx.translate(car.x, car.z);
    ctx.rotate(-car.heading);
    const s = this.expanded ? 2.4 : 1;
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

  setExpanded(on) {
    this.expanded = on;
    this.canvas.width = on ? 1100 : 480;
    this.canvas.height = on ? 1100 : 360;
  }
}

export function formatTime(t) {
  const min = Math.floor(t / 60), sec = Math.floor(t % 60), cs = Math.floor((t * 100) % 100);
  return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
}
