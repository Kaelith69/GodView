# 👁️ GodView

<div align="center">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 160" width="760" height="160" role="img" aria-label="GodView banner">
  <defs>
    <radialGradient id="gvBg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#09090b"/>
    </radialGradient>
    <linearGradient id="gvTitle" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f43f5e"/>
      <stop offset="50%" stop-color="#fb7185"/>
      <stop offset="100%" stop-color="#a5b4fc"/>
    </linearGradient>
  </defs>
  <rect width="760" height="160" rx="14" fill="url(#gvBg)"/>
  <g transform="translate(305,80)">
    <ellipse cx="0" cy="0" rx="30" ry="18" fill="none" stroke="#f43f5e" stroke-width="2.5"/>
    <circle cx="0" cy="0" r="9" fill="#f43f5e"/>
    <circle cx="3" cy="-3" r="3" fill="white" opacity="0.55"/>
  </g>
  <text x="345" y="73" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="34" font-weight="700" fill="url(#gvTitle)">GodView</text>
  <text x="345" y="97" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="12" letter-spacing="2.2" fill="#a1a1aa">OMNISCIENT DASHBOARD MODULE</text>
</svg>

</div>

GodView is a **zero-build, drop-in JavaScript dashboard module**.
It turns any container `<div>` into a secure, glassmorphic monitoring interface with:

- 🔒 Password-gated session access (`sessionStorage`)
- 🗺️ Leaflet-powered geospatial overview
- 📊 Configurable stat cards (`fn(data)`-based)
- 🔎 Searchable event/data stream cards
- 📥 CSV export of mapped schema fields

---

## Quick Start

1. Include Leaflet + GodView CSS/JS in your page
2. Add a container div
3. Instantiate and initialize `GodView`

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<link rel="stylesheet" href="./src/godview.css" />

<div id="godview-app"></div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script type="module">
  import { GodView } from './src/godview.js';

  const app = new GodView({
    containerId: 'godview-app',
    password: 'demo',
    title: 'System Overwatch',
    logo: '🛡️'
  });

  app.init();
</script>
```

For a full runnable sample, see [`/index.html`](./index.html).

---

## Documentation Suite

The full production documentation is organized in the wiki:

- 📘 [Wiki Home](./wiki/Home.md)
- 🏗️ [Architecture](./wiki/Architecture.md)
- ⚙️ [Installation](./wiki/Installation.md)
- 🧭 [Usage](./wiki/Usage.md)
- 🔐 [Privacy](./wiki/Privacy.md)
- 🛠️ [Troubleshooting](./wiki/Troubleshooting.md)
- 🗺️ [Roadmap](./wiki/Roadmap.md)

---

## Project Structure

```text
src/
├── godview.js   # module logic
└── godview.css  # scoped UI styles

wiki/            # complete documentation suite
assets/          # docs assets (e.g. demo gif)
index.html       # runnable demo page
```
