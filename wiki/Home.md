# 👁️ GodView Wiki

<div align="center">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 100" width="700" height="100">
  <defs>
    <radialGradient id="homeBg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#09090b"/>
    </radialGradient>
    <linearGradient id="homeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f43f5e"/>
      <stop offset="50%" stop-color="#fb7185"/>
      <stop offset="100%" stop-color="#a5b4fc"/>
    </linearGradient>
    <filter id="homeGlow" x="-20%" y="-30%" width="140%" height="160%">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="700" height="100" rx="10" fill="url(#homeBg)"/>
  <g stroke="rgba(255,255,255,0.04)" stroke-width="1">
    <line x1="0" y1="33" x2="700" y2="33"/>
    <line x1="0" y1="66" x2="700" y2="66"/>
    <line x1="175" y1="0" x2="175" y2="100"/>
    <line x1="350" y1="0" x2="350" y2="100"/>
    <line x1="525" y1="0" x2="525" y2="100"/>
  </g>
  <!-- Eye -->
  <g transform="translate(290, 50)" filter="url(#homeGlow)">
    <ellipse cx="0" cy="0" rx="22" ry="13" fill="none" stroke="#f43f5e" stroke-width="2"/>
    <circle cx="0" cy="0" r="7" fill="#f43f5e" opacity="0.9"/>
    <circle cx="2.5" cy="-2.5" r="2.5" fill="white" opacity="0.5"/>
  </g>
  <!-- Title -->
  <text x="324" y="44" font-family="'Outfit', system-ui, sans-serif" font-size="28" font-weight="700" fill="url(#homeGrad)" letter-spacing="-0.5" filter="url(#homeGlow)">GodView</text>
  <text x="324" y="64" font-family="system-ui, sans-serif" font-size="11" fill="#71717a" letter-spacing="3">DOCUMENTATION HUB</text>
</svg>

</div>

Welcome to the GodView wiki — the place where documentation lives when it outgrows the README.

---


## What Is GodView?

GodView is a **zero-dependency, drop-in JavaScript dashboard module** that turns any `<div>` into a fully-equipped monitoring interface. Glassmorphic UI, Leaflet.js world map, configurable stat cards, searchable data cards, and CSV export — all shipped in two files (`godview.js` + `godview.css`) with no build step.

It was built to be generic. You define the schema, the stats, and the data source. GodView handles the rest.

---

## Quick Links

| Page | Description |
|---|---|
| [Architecture](./Architecture.md) | How the module is structured internally |
| [Installation](./Installation.md) | How to get it running |
| [Usage](./Usage.md) | Full config reference and examples |
| [Privacy](./Privacy.md) | What data goes where (spoiler: mostly nowhere) |
| [Troubleshooting](./Troubleshooting.md) | When things go wrong and you need answers |
| [Roadmap](./Roadmap.md) | What's coming (eventually, probably) |

---

## At A Glance

```
src/
├── godview.js     (~420 lines, ES6 class, the whole show)
└── godview.css    (scoped styles, CSS variables, glassmorphism)

Peer dependency: Leaflet.js 1.9.4
Runtime dependencies: 0
Build step: none
Framework: none
```

---

## The Core Idea

GodView is designed to be embedded anywhere — internal tools, prototypes, dashboards, monitoring setups. You initialize it on a container div, hand it a config, and it assembles itself.

The architecture is intentionally flat:
- One class (`GodView`) handles everything
- Auth is session-scoped via `sessionStorage`
- Data comes from your `fetchDataFn` (or built-in mock data if you don't provide one)
- Rendering is pure DOM manipulation — no virtual DOM, no diffing, no magic

If you want to understand the full internals, start with [Architecture](./Architecture.md).
