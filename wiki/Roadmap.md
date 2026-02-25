# 🗺️ Roadmap

<div align="center">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 100" width="700" height="100">
  <defs>
    <radialGradient id="roadmapBg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#09090b"/>
    </radialGradient>
    <linearGradient id="roadmapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f43f5e"/>
      <stop offset="50%" stop-color="#fb7185"/>
      <stop offset="100%" stop-color="#a5b4fc"/>
    </linearGradient>
    <filter id="roadmapGlow" x="-20%" y="-30%" width="140%" height="160%">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="700" height="100" rx="10" fill="url(#roadmapBg)"/>
  <g stroke="rgba(255,255,255,0.04)" stroke-width="1">
    <line x1="0" y1="33" x2="700" y2="33"/>
    <line x1="0" y1="66" x2="700" y2="66"/>
    <line x1="175" y1="0" x2="175" y2="100"/>
    <line x1="350" y1="0" x2="350" y2="100"/>
    <line x1="525" y1="0" x2="525" y2="100"/>
  </g>
  <!-- Map pin icon -->
  <g transform="translate(290, 50)" filter="url(#roadmapGlow)">
    <circle cx="0" cy="-6" r="9" fill="none" stroke="#f43f5e" stroke-width="2"/>
    <circle cx="0" cy="-6" r="3.5" fill="#f43f5e" opacity="0.9"/>
    <line x1="0" y1="3" x2="0" y2="13" stroke="#f43f5e" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="0" cy="14" rx="5" ry="2" fill="#f43f5e" opacity="0.3"/>
  </g>
  <!-- Title -->
  <text x="324" y="44" font-family="'Outfit', system-ui, sans-serif" font-size="28" font-weight="700" fill="url(#roadmapGrad)" letter-spacing="-0.5" filter="url(#roadmapGlow)">Roadmap</text>
  <text x="324" y="64" font-family="system-ui, sans-serif" font-size="11" fill="#71717a" letter-spacing="3">THE FUTURE IS (PROBABLY) BRIGHT</text>
</svg>

</div>

Things that are planned, being considered, or living rent-free in the maintainer's head. No ETAs because this is open source and life is unpredictable.

---

## Status Legend

| Status | Meaning |
|---|---|
| 🧠 Thinking | Not started, just an idea. May or may not happen. |
| 🔨 In Progress | Someone is actively working on it |
| ✅ Done | Shipped in a release |
| ❌ Won't Do | Considered and declined (with reasoning) |

---

## v1.x — Quality of Life

| Feature | Status | Notes |
|---|---|---|
| Pagination for large datasets | 🧠 Thinking | `render()` currently rebuilds the entire card list. For >500 items this becomes sluggish. Virtual scroll or pagination would help. |
| Date range filter | 🧠 Thinking | Filter data by a date window. Would require a date picker component or at least a start/end input. |
| `localStorage` auth option | 🧠 Thinking | Currently auth dies with the browser tab (`sessionStorage`). An opt-in `persist: true` config for `localStorage` would be nice. |
| Dark/light theme toggle | 🧠 Thinking | Would require a parallel light-theme CSS variable set. Not hard, just needs doing. |
| Better loading states | 🧠 Thinking | The current "Syncing..." message is functional but unexciting. A skeleton loader would look better. |

---

## v2.x — Feature Expansion

| Feature | Status | Notes |
|---|---|---|
| Pluggable chart widgets | 🧠 Thinking | Line charts, bar charts, and pie charts beyond the simple stat cards. Likely requires a small charting library — would need to evaluate options that don't balloon the bundle. |
| WebSocket support | 🧠 Thinking | A `websocketUrl` config option that feeds a live stream into the dashboard. The render loop can already handle data updates — the data source is the missing piece. |
| Multiple map marker styles | 🧠 Thinking | Currently all markers look the same. Configurable shapes/colors/sizes based on item properties would be useful. |
| Marker clustering | 🧠 Thinking | When many markers are near each other, cluster them. Leaflet has a plugin for this (`leaflet.markercluster`). |
| Column sort on card list | 🧠 Thinking | Click a header to sort cards by date, meta, location, etc. |

---

## Distribution

| Feature | Status | Notes |
|---|---|---|
| npm package | 🧠 Thinking | Publishing to npm would make GodView easier to install via package managers. The module would need to decide on a build target (ESM, CJS, or both). |
| CDN distribution | 🧠 Thinking | A hosted version on unpkg/jsDelivr so you can `<script src>` without copying files manually. |

---

## Won't Do

| Feature | Status | Notes |
|---|---|---|
| React/Vue/Svelte versions | ❌ Won't Do | The point of GodView is zero framework dependency. Framework-specific wrappers would be separate projects, not this one. |
| Backend / server component | ❌ Won't Do | GodView is intentionally client-only. Your `fetchDataFn` can call any backend you want. We're not building one. |
| IE11 support | ❌ Won't Do | It's 2024. We use `class`, `async/await`, and CSS custom properties. IE11 can rest in peace. |

---

## Contributing

If you want to work on anything in the "Thinking" column, open an issue first to discuss the approach before building. PRs without prior discussion have a higher chance of being declined if the design doesn't fit.

See [CONTRIBUTING.md](../CONTRIBUTING.md) for the full contribution guide.
