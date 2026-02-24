# 🏗️ Architecture

GodView is a single ES6 class. No framework, no reactive system, no virtual DOM. Just a class that knows how to build a dashboard inside a div. Let's take it apart.

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

All styles live in `godview.css` and are scoped to `#godview-container` (the default container ID, or whatever you pass as `containerId`). Wait — actually they're scoped to class selectors prefixed with `gv-`, not the container ID. The container-level CSS variables are set on `#godview-container`.

**If you use a different `containerId`**, the CSS variables won't inherit correctly from the default `#godview-container` selector. You'd need to add a matching CSS rule for your container ID. This is a known limitation.

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
