# 🏗️ Architecture

GodView is a single ES6 class. No framework, no reactive system, no virtual DOM. Just a class that knows how to build a dashboard inside a div. Let's take it apart.

---

<div align="center">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 740 480" width="740" height="480">
  <defs>
    <radialGradient id="archBg" cx="50%" cy="0%" r="90%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#09090b"/>
    </radialGradient>
    <marker id="arr" markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 9 3.5, 0 7" fill="#52525b"/>
    </marker>
    <marker id="arrAmber" markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 9 3.5, 0 7" fill="#F59E0B"/>
    </marker>
    <marker id="arrRose" markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 9 3.5, 0 7" fill="#f43f5e"/>
    </marker>
    <marker id="arrGreen" markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 9 3.5, 0 7" fill="#10B981"/>
    </marker>
  </defs>
  <rect width="740" height="480" rx="14" fill="url(#archBg)"/>
  <text x="370" y="28" font-family="system-ui" font-size="12" fill="#52525b" text-anchor="middle" font-weight="600" letter-spacing="2">GODVIEW — MODULE INTERNALS</text>

  <!-- Row 1: Host Page -->
  <rect x="270" y="42" width="200" height="44" rx="8" fill="rgba(37,99,235,0.15)" stroke="#2563EB" stroke-width="1.5"/>
  <text x="370" y="60" font-family="system-ui" font-size="12" fill="#60a5fa" text-anchor="middle" font-weight="600">Host Page</text>
  <text x="370" y="77" font-family="monospace" font-size="10" fill="#52525b" text-anchor="middle">index.html + &lt;div id="..."&gt;</text>

  <!-- Arrow: Host → GodView -->
  <line x1="370" y1="86" x2="370" y2="112" stroke="#52525b" stroke-width="1.5" marker-end="url(#arr)"/>

  <!-- Row 2: GodView Class -->
  <rect x="235" y="114" width="270" height="50" rx="8" fill="rgba(244,63,94,0.15)" stroke="#f43f5e" stroke-width="2"/>
  <text x="370" y="135" font-family="system-ui" font-size="13" fill="#fb7185" text-anchor="middle" font-weight="700">GodView Class</text>
  <text x="370" y="153" font-family="monospace" font-size="10" fill="#52525b" text-anchor="middle">new GodView(config).init()</text>

  <!-- Arrows: GodView → 3 layers -->
  <line x1="310" y1="164" x2="160" y2="218" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrAmber)"/>
  <line x1="370" y1="164" x2="370" y2="218" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrRose)"/>
  <line x1="430" y1="164" x2="580" y2="218" stroke="#10B981" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrGreen)"/>

  <!-- Row 3: Three Layers -->
  <!-- Auth Layer -->
  <rect x="50" y="220" width="170" height="52" rx="8" fill="rgba(245,158,11,0.12)" stroke="#F59E0B" stroke-width="1.5"/>
  <text x="135" y="242" font-family="system-ui" font-size="12" fill="#fbbf24" text-anchor="middle" font-weight="600">Auth Layer</text>
  <text x="135" y="260" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">sessionStorage token</text>

  <!-- Render Engine -->
  <rect x="285" y="220" width="170" height="52" rx="8" fill="rgba(244,63,94,0.12)" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="370" y="242" font-family="system-ui" font-size="12" fill="#fb7185" text-anchor="middle" font-weight="600">Render Engine</text>
  <text x="370" y="260" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">innerHTML + DOM</text>

  <!-- Data Layer -->
  <rect x="520" y="220" width="170" height="52" rx="8" fill="rgba(16,185,129,0.12)" stroke="#10B981" stroke-width="1.5"/>
  <text x="605" y="242" font-family="system-ui" font-size="12" fill="#34d399" text-anchor="middle" font-weight="600">Data Layer</text>
  <text x="605" y="260" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">fetchDataFn / mock</text>

  <!-- Arrows: Render → sub-parts -->
  <line x1="330" y1="272" x2="190" y2="334" stroke="#52525b" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arr)"/>
  <line x1="355" y1="272" x2="300" y2="334" stroke="#52525b" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arr)"/>
  <line x1="385" y1="272" x2="415" y2="334" stroke="#52525b" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arr)"/>
  <line x1="410" y1="272" x2="520" y2="334" stroke="#52525b" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arr)"/>

  <!-- Row 4: Render sub-parts -->
  <rect x="100" y="336" width="108" height="44" rx="6" fill="rgba(37,99,235,0.1)" stroke="#2563EB" stroke-width="1"/>
  <text x="154" y="354" font-family="system-ui" font-size="10" fill="#60a5fa" text-anchor="middle">Map</text>
  <text x="154" y="371" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">Leaflet.js</text>

  <rect x="222" y="336" width="108" height="44" rx="6" fill="rgba(244,63,94,0.1)" stroke="#f43f5e" stroke-width="1"/>
  <text x="276" y="354" font-family="system-ui" font-size="10" fill="#fb7185" text-anchor="middle">Stat Cards</text>
  <text x="276" y="371" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">fn(data) → value</text>

  <rect x="344" y="336" width="108" height="44" rx="6" fill="rgba(245,158,11,0.1)" stroke="#F59E0B" stroke-width="1"/>
  <text x="398" y="354" font-family="system-ui" font-size="10" fill="#fbbf24" text-anchor="middle">Data Cards</text>
  <text x="398" y="371" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">schema + filter</text>

  <rect x="466" y="336" width="108" height="44" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10B981" stroke-width="1"/>
  <text x="520" y="354" font-family="system-ui" font-size="10" fill="#34d399" text-anchor="middle">CSV Export</text>
  <text x="520" y="371" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">Blob + anchor</text>

  <!-- godview.css note -->
  <rect x="594" y="336" width="120" height="44" rx="6" fill="rgba(161,161,170,0.07)" stroke="rgba(161,161,170,0.2)" stroke-width="1"/>
  <text x="654" y="354" font-family="system-ui" font-size="10" fill="#a1a1aa" text-anchor="middle">godview.css</text>
  <text x="654" y="371" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">scoped styles</text>

  <!-- CSS: from GodView class to godview.css -->
  <line x1="505" y1="164" x2="654" y2="336" stroke="rgba(161,161,170,0.25)" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- Legend -->
  <rect x="20" y="430" width="12" height="12" rx="2" fill="#F59E0B"/>
  <text x="38" y="441" font-family="system-ui" font-size="10" fill="#71717a">Auth</text>
  <rect x="82" y="430" width="12" height="12" rx="2" fill="#f43f5e"/>
  <text x="100" y="441" font-family="system-ui" font-size="10" fill="#71717a">Render</text>
  <rect x="152" y="430" width="12" height="12" rx="2" fill="#10B981"/>
  <text x="170" y="441" font-family="system-ui" font-size="10" fill="#71717a">Data</text>
  <rect x="210" y="430" width="12" height="12" rx="2" fill="#2563EB"/>
  <text x="228" y="441" font-family="system-ui" font-size="10" fill="#71717a">External / Host</text>
</svg>

</div>

---

## Module Structure

```
GodView (class)
├── constructor(config)       — Merges defaults with user config, grabs the container element
├── init()                    — Entry point: checks auth, routes to login or dashboard
├── checkAuth()               — Reads sessionStorage for auth token
│
├── renderLogin()             — Builds the login screen HTML
├── handleLogin()             — Validates password, sets token, transitions to dashboard
├── handleLogout()            — Clears token, destroys map, returns to login
│
├── renderDashboard()         — Builds the full dashboard HTML, wires up events
├── refreshData()             — Re-fetches data, calls render() + updateMapMarkers()
├── fetchData()               — Calls config.fetchDataFn() or falls back to mock data
├── generateMockData(count)   — Produces N generic system events across 5 cities
│
├── initMap()                 — Initializes the Leaflet map (deferred 100ms for DOM)
├── updateMapMarkers()        — Clears and re-plots all markers with lat/lng data
│
├── render()                  — Updates stat cards, filters data, re-renders card list
│
├── downloadCSV()             — Generates a CSV Blob from current data and triggers download
├── showToast(msg)            — Displays a toast notification for 3 seconds
│
├── getVal(item, mapper)      — Resolves a schema mapper (string key or function) against an item
├── setText(selector, value)  — Helper: sets textContent of a querySelector result
└── esc(str)                  — Escapes &, <, > for safe HTML injection
```

---

## Auth Layer

Authentication is implemented using `sessionStorage`. When a user enters the correct password:

```javascript
sessionStorage.setItem('godview_auth_' + this.config.containerId, '1');
```

The key is namespaced by `containerId`, so multiple GodView instances on the same page have independent auth states. The token lives until the browser tab is closed.

**On init**, `checkAuth()` reads this key. If it's `'1'`, the dashboard renders directly without showing the login screen.

The password itself lives in `this.config.password` in memory. This is a client-side module — the password is a light access gate, not cryptographic security. Don't use it to guard genuinely sensitive data.

---

## Render Engine

Rendering is entirely through `innerHTML` assignment. There's no virtual DOM, no reactive signals, no diffing algorithm. When data changes:

1. `render()` recalculates stats via `stat.fn(data)` for each configured stat
2. It filters the dataset by `state.searchQuery`
3. It rebuilds the entire card list as an HTML string and assigns it to `listEl.innerHTML`

This approach is fine for hundreds of records. For truly massive datasets (thousands of items), you'd want to paginate — which is on the roadmap.

Cards include a staggered `animation-delay` for a cascade effect on first load:

```javascript
style="animation: gv-fade-in 0.5s ease-out ${i * 0.05}s backwards"
```

---

## Map Layer

The map uses [Leaflet.js](https://leafletjs.com/) on CartoDB's dark tile layer:

```
https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png
```

Leaflet is checked at runtime via `typeof L === 'undefined'`. If it's not loaded, the map area shows a friendly "Map modules offline" message instead of exploding.

Markers are created as `L.divIcon` instances (custom HTML/CSS markers, not the default Leaflet pins). Each marker uses the `.gv-marker-custom` class — a small glowing red circle.

A tiny coordinate jitter (`±0.005°`) is applied to each marker to prevent exact pile-ups when multiple items share the same location.

---

## Schema System

GodView doesn't assume your data shape. The `schema` config maps logical field roles to your actual data keys:

```javascript
schema: {
    title:    'username',           // string key
    meta:     (item) => item.status // function mapper
}
```

The `getVal(item, mapper)` method handles both cases:

```javascript
getVal(item, mapper) {
    if (typeof mapper === 'function') return mapper(item);
    return item[mapper];
}
```

This means you can normalize, compute, or transform any field on-the-fly without preprocessing your data.

---

## Stat Cards

Stats are defined as an array of objects with:

```javascript
{ id: 'errors', label: 'Errors', color: 'pink', icon: '🔥', fn: (data) => data.filter(...).length }
```

The `fn` receives the full (unfiltered) dataset and returns any value. The rendered value is just `textContent`, so it can be a number, string, or emoji. Whatever `fn` returns gets displayed.

---

## CSS Architecture

All styles live in `godview.css`. Scoped CSS classes are prefixed with `gv-`, while container-level CSS variables are set on the element with `containerId` (default: `#godview-container`).

**If you use a different `containerId`**, ensure the same CSS variables are declared for your custom container selector.

CSS custom properties used throughout:

```css
--gv-bg-1, --gv-bg-2        /* Background layers */
--gv-bg-card, --gv-bg-glass /* Card and glass surfaces */
--gv-border, --gv-border-hover
--gv-primary, --gv-primary-glow
--gv-text, --gv-text-secondary, --gv-text-muted
--gv-radius-lg, --gv-radius-md, --gv-radius-sm
--gv-shadow-sm, --gv-shadow-lg, --gv-shadow-glow
```
