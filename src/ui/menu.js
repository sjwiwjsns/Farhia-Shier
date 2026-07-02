// Pre-flight menu + in-game pause/crash overlays. Pure DOM (no framework).
// Airline choice filters the aircraft list through airlineOperates() so a
// carrier only offers aircraft it historically/currently operates.
import { airlineOperates } from '../aircraft/liveries.js';

const SETTINGS_KEY = 'openskies-settings-v1';

export const DEFAULT_SETTINGS = {
  graphics: 'medium',
  difficulty: 'arcade',
  crashPhysics: true,
  hud: 'full',
  muted: false
};

export function loadSettings() {
  try {
    return { ...DEFAULT_SETTINGS, ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}') };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export function saveSettings(s) {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); } catch { /* private mode */ }
}

export class Menu {
  constructor(data, onStart) {
    this.data = data;
    this.onStart = onStart;
    this.settings = loadSettings();
    this.el = document.getElementById('menu');
    this.$ = (id) => document.getElementById(id);
    this.buildAirlines();
    this.buildAirports();
    this.buildSettings();
    this.refreshAircraft();

    this.$('sel-airline').addEventListener('change', () => this.refreshAircraft());
    this.$('sel-aircraft').addEventListener('change', () => this.refreshNotes());
    this.$('sel-airport').addEventListener('change', () => this.refreshRunways());
    this.$('btn-fly').addEventListener('click', () => this.start());
  }

  variantById(id) { return this.data.aircraft.variants.find((v) => v.id === id); }
  airlineById(id) { return this.data.airlines.airlines.find((a) => a.id === id); }
  airportByIata(i) { return this.data.airports.airports.find((a) => a.iata === i); }

  buildAirlines() {
    const sel = this.$('sel-airline');
    sel.innerHTML = '';
    for (const al of this.data.airlines.airlines) {
      const opt = document.createElement('option');
      opt.value = al.id;
      const tags = [];
      if (al.cargo) tags.push('cargo');
      if (al.retro) tags.push('retro');
      opt.textContent = al.name + (tags.length ? ` [${tags.join(', ')}]` : '');
      sel.appendChild(opt);
    }
    sel.value = 'sunliner';
  }

  refreshAircraft() {
    const airline = this.airlineById(this.$('sel-airline').value);
    const sel = this.$('sel-aircraft');
    const prev = sel.value;
    sel.innerHTML = '';
    const groups = new Map();
    for (const v of this.data.aircraft.variants) {
      const fam = this.data.aircraft.families[v.family];
      if (!airlineOperates(airline, v)) continue;
      const key = fam.manufacturer;
      if (!groups.has(key)) {
        const og = document.createElement('optgroup');
        og.label = key;
        groups.set(key, og);
        sel.appendChild(og);
      }
      const opt = document.createElement('option');
      opt.value = v.id;
      const flags = v.flags || [];
      const tags = [];
      if (flags.includes('concept')) tags.push('CONCEPT — never built');
      if (flags.includes('freighter')) tags.push('freighter');
      if (flags.includes('supersonic')) tags.push('supersonic');
      if (flags.includes('in-development')) tags.push('in development');
      opt.textContent = v.name + (tags.length ? `  (${tags.join(', ')})` : '');
      groups.get(key).appendChild(opt);
    }
    if ([...sel.options].some((o) => o.value === prev)) sel.value = prev;
    if (!sel.value && sel.options.length) sel.selectedIndex = 0;
    this.refreshNotes();
  }

  refreshNotes() {
    const v = this.variantById(this.$('sel-aircraft').value);
    const box = this.$('aircraft-notes');
    if (!v) { box.textContent = 'No aircraft available for this airline (era/fleet mismatch). Pick another airline.'; return; }
    const fam = this.data.aircraft.families[v.family];
    const p = v.perf;
    const lines = [
      `${fam.manufacturer} ${v.name} — ${fam.label} family`,
      `Cruise ${p.cruiseKts} kt (M${p.mmo})   Ceiling ${p.ceilingFt.toLocaleString()} ft   MTOW ${(p.mtowKg / 1000).toFixed(1)} t`,
      `Stall (landing) ${p.stallKts} kt   Takeoff ${p.takeoffM} m   Landing ${p.landingM} m   Engines ×${{ wing2: 2, tail2: 2, wing4: 4, trijet727: 3, trijetdc10: 3, sst4: 4, sst4paired: 4 }[(v.geoMergedLayout) || fam.geometry.engines.layout]}`
    ];
    if (v.notes) lines.push(v.notes);
    box.innerHTML = lines.map((l) => `<div>${l}</div>`).join('');
  }

  buildAirports() {
    const sel = this.$('sel-airport');
    sel.innerHTML = '';
    for (const ap of this.data.airports.airports) {
      const opt = document.createElement('option');
      opt.value = ap.iata;
      opt.textContent = `${ap.iata} — ${ap.name} (${ap.city})`;
      sel.appendChild(opt);
    }
    sel.value = 'JFK';
    this.refreshRunways();
  }

  refreshRunways() {
    const ap = this.airportByIata(this.$('sel-airport').value);
    const sel = this.$('sel-runway');
    sel.innerHTML = '';
    for (const rw of ap.runways) {
      const [a, b] = rw.id.split('/');
      for (const [end, hdg] of [[a, rw.hdg], [b, (rw.hdg + 180) % 360]]) {
        const opt = document.createElement('option');
        opt.value = `${rw.id}|${end}`;
        opt.textContent = `RWY ${end} — hdg ${String(Math.round(hdg)).padStart(3, '0')}°, ${rw.lenM} m`;
        sel.appendChild(opt);
      }
    }
  }

  buildSettings() {
    const s = this.settings;
    this.$('sel-graphics').value = s.graphics;
    this.$('sel-difficulty').value = s.difficulty;
    this.$('chk-crash').checked = s.crashPhysics;
    this.$('sel-hud').value = s.hud;
    this.$('chk-mute').checked = s.muted;
  }

  readSettings() {
    this.settings = {
      graphics: this.$('sel-graphics').value,
      difficulty: this.$('sel-difficulty').value,
      crashPhysics: this.$('chk-crash').checked,
      hud: this.$('sel-hud').value,
      muted: this.$('chk-mute').checked
    };
    saveSettings(this.settings);
    return this.settings;
  }

  start() {
    const v = this.variantById(this.$('sel-aircraft').value);
    if (!v) return;
    const [runwayId, runwayEnd] = this.$('sel-runway').value.split('|');
    const config = {
      variant: v,
      family: this.data.aircraft.families[v.family],
      airline: this.airlineById(this.$('sel-airline').value),
      airport: this.airportByIata(this.$('sel-airport').value),
      runwayId, runwayEnd,
      spawn: this.$('sel-spawn').value, // 'runway' | 'final'
      settings: this.readSettings()
    };
    this.hide();
    this.onStart(config);
  }

  show() { this.el.classList.remove('hidden'); }
  hide() { this.el.classList.add('hidden'); }
}
