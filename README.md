<div align="center">

<!-- 1. SVG HERO BANNER -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 220" width="900" height="220">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#09090b"/>
    </radialGradient>
    <radialGradient id="glowRed" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#f43f5e" stop-opacity="0"/>
    </radialGradient>
    <filter id="glow" x="-15%" y="-30%" width="130%" height="160%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f43f5e"/>
      <stop offset="50%" stop-color="#fb7185"/>
      <stop offset="100%" stop-color="#a5b4fc"/>
    </linearGradient>
  </defs>
  <!-- Background -->
  <rect width="900" height="220" rx="16" fill="url(#bgGrad)"/>
  <!-- Glow blob -->
  <ellipse cx="450" cy="110" rx="260" ry="120" fill="url(#glowRed)" opacity="0.6"/>
  <!-- Grid lines -->
  <g stroke="rgba(255,255,255,0.04)" stroke-width="1">
    <line x1="0" y1="44" x2="900" y2="44"/>
    <line x1="0" y1="88" x2="900" y2="88"/>
    <line x1="0" y1="132" x2="900" y2="132"/>
    <line x1="0" y1="176" x2="900" y2="176"/>
    <line x1="180" y1="0" x2="180" y2="220"/>
    <line x1="360" y1="0" x2="360" y2="220"/>
    <line x1="540" y1="0" x2="540" y2="220"/>
    <line x1="720" y1="0" x2="720" y2="220"/>
  </g>
  <!-- Eye icon -->
  <g transform="translate(320, 68)" filter="url(#glow)">
    <ellipse cx="0" cy="0" rx="38" ry="22" fill="none" stroke="#f43f5e" stroke-width="2.5"/>
    <circle cx="0" cy="0" r="12" fill="#f43f5e" opacity="0.9"/>
    <circle cx="4" cy="-4" r="4" fill="white" opacity="0.6"/>
  </g>
  <!-- Title -->
  <text x="380" y="80" font-family="'Outfit', system-ui, sans-serif" font-size="52" font-weight="700" fill="url(#titleGrad)" letter-spacing="-1" filter="url(#glow)">GodView</text>
  <!-- Subtitle -->
  <text x="380" y="115" font-family="system-ui, sans-serif" font-size="15" fill="#a1a1aa" letter-spacing="3">THE OMNISCIENT DASHBOARD MODULE</text>
  <!-- Tag pills -->
  <rect x="380" y="135" width="80" height="24" rx="12" fill="rgba(244,63,94,0.15)" stroke="rgba(244,63,94,0.3)" stroke-width="1"/>
  <text x="420" y="152" font-family="system-ui" font-size="11" fill="#fb7185" text-anchor="middle" font-weight="600">VANILLA JS</text>
  <rect x="472" y="135" width="75" height="24" rx="12" fill="rgba(96,165,250,0.15)" stroke="rgba(96,165,250,0.3)" stroke-width="1"/>
  <text x="509" y="152" font-family="system-ui" font-size="11" fill="#60a5fa" text-anchor="middle" font-weight="600">LEAFLET.JS</text>
  <rect x="559" y="135" width="68" height="24" rx="12" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.3)" stroke-width="1"/>
  <text x="593" y="152" font-family="system-ui" font-size="11" fill="#34d399" text-anchor="middle" font-weight="600">BROWSER</text>
  <!-- Bottom tagline -->
  <text x="450" y="198" font-family="system-ui" font-size="13" fill="rgba(161,161,170,0.7)" text-anchor="middle" font-style="italic">"I see everything. Even that console.log you forgot to remove."</text>
</svg>

</div>

---

<!-- 2. FUNNY BUT ACCURATE INTRO -->

Alright, so you found **GodView**. Congratulations on your promotion to *Assistant Regional Deity*.

GodView is a **zero-dependency\*, drop-in JavaScript dashboard module** that turns any div into a fully-equipped control center: glassmorphic UI, live world map, stat cards, search-filtered data stream, and CSV export. You bring the data (or don't — it'll hallucinate some for you). It handles the rest.

> \*Zero runtime dependencies. Leaflet.js is a peer dependency because drawing maps from scratch is a skill reserved for cartographers and the truly unhinged.

---

<!-- 3. BADGES -->

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-199900?logo=leaflet)](https://leafletjs.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![No Framework](https://img.shields.io/badge/Framework-None%20(freedom)-blueviolet)](https://vanilla-js.com/)

</div>

---

<!-- 4. HUMOR GIF SECTION -->

<div align="center">

![Humor](https://media.giphy.com/media/077i6AULCXc0FKTj9s/giphy.gif)

</div>

---

<!-- 5. SYSTEM OVERVIEW -->

## 👁️ What Is This Thing

GodView is a **reusable, embeddable browser dashboard module** written in pure ES6 JavaScript with scoped CSS. You initialize it on a `div`, hand it a config object, and it assembles a complete monitoring interface — no build step, no bundler, no React, no tears (well, maybe a few).

**The core loop:**
1. User hits a password wall
2. Wrong password? The button shakes in judgment
3. Correct password? Welcome to the control room
4. Data loads from your source (or mock data if you're just exploring)
5. Map plots geo-coordinates with glowing markers
6. Stats update live from configurable aggregation functions
7. Cards render with search/filter
8. Export to CSV when spreadsheet people come asking

It's completely stateless server-side — all auth is session-scoped via `sessionStorage`. There's no backend. It's just vibes and CSS gradients.

---

<!-- 6. FEATURES -->

## ✨ Features

| Feature | What it actually does |
|---|---|
| 🔒 **Password Login** | Glassmorphic login screen. Wrong password = shake animation. Correct = `sessionStorage` token |
| 🗺️ **Interactive World Map** | Leaflet.js on CartoDB dark tiles. Drops glowing circular markers at lat/lng coordinates |
| 📊 **Configurable Stat Cards** | Define your own stats with aggregation functions. Ships with 4 color themes (pink/purple/blue/green) |
| 🔍 **Live Search/Filter** | Debounced 300ms search across title, subtitle, detail, meta, and location fields |
| 📥 **CSV Export** | One-click export of the full dataset. Dynamic headers from schema mapping |
| 🔄 **Refresh** | Re-runs your `fetchDataFn` (or regenerates mock data) on demand |
| 🍞 **Toast Notifications** | Floating pill notifications for sync confirmations and export events |
| 🗃️ **Flexible Schema** | Field mapping layer — works with any data shape via string key or function mapper |
| 🎭 **Mock Data** | Built-in mock data generator (50 events, 5 global cities) for prototyping |
| 🔐 **Multi-instance Safe** | Auth tokens are namespaced by `containerId` — run multiple GodViews on one page |

---

<!-- 7. CAPABILITY VISUALIZATION SVG -->

## 📡 Capability Radar

<div align="center">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="600" height="360">
  <defs>
    <radialGradient id="capBg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#09090b"/>
    </radialGradient>
    <linearGradient id="barAmber" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
    <linearGradient id="barBlue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#60a5fa"/>
    </linearGradient>
    <linearGradient id="barGreen" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#34d399"/>
    </linearGradient>
    <linearGradient id="barRose" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f43f5e"/>
      <stop offset="100%" stop-color="#fb7185"/>
    </linearGradient>
  </defs>
  <rect width="600" height="360" rx="12" fill="url(#capBg)"/>
  <!-- Title -->
  <text x="300" y="35" font-family="system-ui" font-size="14" fill="#a1a1aa" text-anchor="middle" font-weight="600" letter-spacing="2">CAPABILITY OVERVIEW</text>
  <!-- Bar chart rows -->
  <!-- Row labels and bars -->
  <g font-family="system-ui" font-size="12" fill="#a1a1aa">
    <!-- Map Rendering -->
    <text x="20" y="80" fill="#fafafa">Map Rendering</text>
    <rect x="180" y="64" width="370" height="20" rx="4" fill="rgba(255,255,255,0.05)"/>
    <rect x="180" y="64" width="352" height="20" rx="4" fill="url(#barBlue)" opacity="0.85"/>
    <text x="558" y="80" fill="#60a5fa" text-anchor="end">95%</text>

    <!-- Data Visualization -->
    <text x="20" y="122" fill="#fafafa">Data Visualization</text>
    <rect x="180" y="106" width="370" height="20" rx="4" fill="rgba(255,255,255,0.05)"/>
    <rect x="180" y="106" width="315" height="20" rx="4" fill="url(#barAmber)" opacity="0.85"/>
    <text x="558" y="122" fill="#fbbf24" text-anchor="end">85%</text>

    <!-- Search & Filter -->
    <text x="20" y="164" fill="#fafafa">Search &amp; Filter</text>
    <rect x="180" y="148" width="370" height="20" rx="4" fill="rgba(255,255,255,0.05)"/>
    <rect x="180" y="148" width="352" height="20" rx="4" fill="url(#barGreen)" opacity="0.85"/>
    <text x="558" y="164" fill="#34d399" text-anchor="end">95%</text>

    <!-- Auth Layer -->
    <text x="20" y="206" fill="#fafafa">Auth Layer</text>
    <rect x="180" y="190" width="370" height="20" rx="4" fill="rgba(255,255,255,0.05)"/>
    <rect x="180" y="190" width="259" height="20" rx="4" fill="url(#barRose)" opacity="0.85"/>
    <text x="558" y="206" fill="#fb7185" text-anchor="end">70%</text>

    <!-- Customizability -->
    <text x="20" y="248" fill="#fafafa">Customizability</text>
    <rect x="180" y="232" width="370" height="20" rx="4" fill="rgba(255,255,255,0.05)"/>
    <rect x="180" y="232" width="333" height="20" rx="4" fill="url(#barAmber)" opacity="0.85"/>
    <text x="558" y="248" fill="#fbbf24" text-anchor="end">90%</text>

    <!-- CSV Export -->
    <text x="20" y="290" fill="#fafafa">CSV Export</text>
    <rect x="180" y="274" width="370" height="20" rx="4" fill="rgba(255,255,255,0.05)"/>
    <rect x="180" y="274" width="370" height="20" rx="4" fill="url(#barGreen)" opacity="0.85"/>
    <text x="558" y="290" fill="#34d399" text-anchor="end">100%</text>

    <!-- Ease of Setup -->
    <text x="20" y="332" fill="#fafafa">Ease of Setup</text>
    <rect x="180" y="316" width="370" height="20" rx="4" fill="rgba(255,255,255,0.05)"/>
    <rect x="180" y="316" width="333" height="20" rx="4" fill="url(#barBlue)" opacity="0.85"/>
    <text x="558" y="332" fill="#60a5fa" text-anchor="end">90%</text>
  </g>
</svg>

</div>

---

<!-- 8. ARCHITECTURE DIAGRAM SVG -->

## 🏗️ Architecture

<div align="center">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 460" width="760" height="460">
  <defs>
    <radialGradient id="archBg" cx="50%" cy="0%" r="80%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#09090b"/>
    </radialGradient>
    <marker id="arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#52525b"/>
    </marker>
    <marker id="arrowAmber" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#F59E0B"/>
    </marker>
  </defs>
  <rect width="760" height="460" rx="14" fill="url(#archBg)"/>
  <text x="380" y="30" font-family="system-ui" font-size="13" fill="#52525b" text-anchor="middle" font-weight="600" letter-spacing="2">GODVIEW ARCHITECTURE</text>

  <!-- index.html / Host Page box -->
  <rect x="290" y="45" width="180" height="44" rx="8" fill="rgba(37,99,235,0.15)" stroke="#2563EB" stroke-width="1.5"/>
  <text x="380" y="63" font-family="system-ui" font-size="12" fill="#60a5fa" text-anchor="middle" font-weight="600">Host Page</text>
  <text x="380" y="79" font-family="monospace" font-size="10" fill="#52525b" text-anchor="middle">index.html + &lt;div id&gt;</text>

  <!-- Arrow down -->
  <line x1="380" y1="89" x2="380" y2="118" stroke="#52525b" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- GodView Class box -->
  <rect x="255" y="120" width="250" height="50" rx="8" fill="rgba(244,63,94,0.15)" stroke="#f43f5e" stroke-width="2"/>
  <text x="380" y="141" font-family="system-ui" font-size="13" fill="#fb7185" text-anchor="middle" font-weight="700">GodView Class</text>
  <text x="380" y="160" font-family="monospace" font-size="10" fill="#52525b" text-anchor="middle">new GodView(config).init()</text>

  <!-- Three sub-components -->
  <!-- Auth Layer -->
  <rect x="60" y="230" width="160" height="52" rx="8" fill="rgba(245,158,11,0.12)" stroke="#F59E0B" stroke-width="1.5"/>
  <text x="140" y="252" font-family="system-ui" font-size="12" fill="#fbbf24" text-anchor="middle" font-weight="600">Auth Layer</text>
  <text x="140" y="270" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">sessionStorage</text>

  <!-- Render Engine -->
  <rect x="300" y="230" width="160" height="52" rx="8" fill="rgba(244,63,94,0.12)" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="380" y="252" font-family="system-ui" font-size="12" fill="#fb7185" text-anchor="middle" font-weight="600">Render Engine</text>
  <text x="380" y="270" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">innerHTML + DOM</text>

  <!-- Data Layer -->
  <rect x="540" y="230" width="160" height="52" rx="8" fill="rgba(16,185,129,0.12)" stroke="#10B981" stroke-width="1.5"/>
  <text x="620" y="252" font-family="system-ui" font-size="12" fill="#34d399" text-anchor="middle" font-weight="600">Data Layer</text>
  <text x="620" y="270" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">fetchDataFn / mock</text>

  <!-- Arrows from GodView to sub-components -->
  <line x1="310" y1="170" x2="180" y2="230" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrowAmber)"/>
  <line x1="380" y1="170" x2="380" y2="230" stroke="#52525b" stroke-width="1.5" marker-end="url(#arrow)"/>
  <line x1="450" y1="170" x2="580" y2="230" stroke="#52525b" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Render sub-parts -->
  <rect x="100" y="345" width="110" height="42" rx="6" fill="rgba(37,99,235,0.1)" stroke="#2563EB" stroke-width="1"/>
  <text x="155" y="361" font-family="system-ui" font-size="10" fill="#60a5fa" text-anchor="middle">Map</text>
  <text x="155" y="378" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">Leaflet.js</text>

  <rect x="230" y="345" width="110" height="42" rx="6" fill="rgba(244,63,94,0.1)" stroke="#f43f5e" stroke-width="1"/>
  <text x="285" y="361" font-family="system-ui" font-size="10" fill="#fb7185" text-anchor="middle">Stat Cards</text>
  <text x="285" y="378" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">fn(data) → value</text>

  <rect x="360" y="345" width="110" height="42" rx="6" fill="rgba(245,158,11,0.1)" stroke="#F59E0B" stroke-width="1"/>
  <text x="415" y="361" font-family="system-ui" font-size="10" fill="#fbbf24" text-anchor="middle">Data Cards</text>
  <text x="415" y="378" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">schema + filter</text>

  <rect x="490" y="345" width="110" height="42" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10B981" stroke-width="1"/>
  <text x="545" y="361" font-family="system-ui" font-size="10" fill="#34d399" text-anchor="middle">CSV Export</text>
  <text x="545" y="378" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">Blob + URL</text>

  <!-- Arrows from Render to sub-parts -->
  <line x1="345" y1="282" x2="200" y2="345" stroke="#52525b" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arrow)"/>
  <line x1="365" y1="282" x2="310" y2="345" stroke="#52525b" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arrow)"/>
  <line x1="395" y1="282" x2="415" y2="345" stroke="#52525b" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arrow)"/>
  <line x1="415" y1="282" x2="510" y2="345" stroke="#52525b" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arrow)"/>

  <!-- CSS Module note -->
  <rect x="620" y="345" width="120" height="42" rx="6" fill="rgba(161,161,170,0.07)" stroke="rgba(161,161,170,0.2)" stroke-width="1"/>
  <text x="680" y="361" font-family="system-ui" font-size="10" fill="#a1a1aa" text-anchor="middle">godview.css</text>
  <text x="680" y="378" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">scoped styles</text>

  <!-- CSS connection -->
  <line x1="620" y1="282" x2="680" y2="345" stroke="rgba(161,161,170,0.3)" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- Legend -->
  <rect x="20" y="415" width="12" height="12" rx="2" fill="#F59E0B"/>
  <text x="38" y="426" font-family="system-ui" font-size="10" fill="#a1a1aa">Auth</text>
  <rect x="90" y="415" width="12" height="12" rx="2" fill="#f43f5e"/>
  <text x="108" y="426" font-family="system-ui" font-size="10" fill="#a1a1aa">Render</text>
  <rect x="165" y="415" width="12" height="12" rx="2" fill="#10B981"/>
  <text x="183" y="426" font-family="system-ui" font-size="10" fill="#a1a1aa">Data</text>
  <rect x="225" y="415" width="12" height="12" rx="2" fill="#2563EB"/>
  <text x="243" y="426" font-family="system-ui" font-size="10" fill="#a1a1aa">External</text>
</svg>

</div>

---

<!-- 9. DATA FLOW SVG -->

## 🌊 Data Flow

<div align="center">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 160" width="800" height="160">
  <defs>
    <radialGradient id="flowBg" cx="50%" cy="50%" r="80%">
      <stop offset="0%" stop-color="#18181b"/>
      <stop offset="100%" stop-color="#09090b"/>
    </radialGradient>
    <marker id="flowArrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#52525b"/>
    </marker>
  </defs>
  <rect width="800" height="160" rx="12" fill="url(#flowBg)"/>

  <!-- Step boxes -->
  <!-- 1. User -->
  <rect x="20" y="55" width="90" height="50" rx="8" fill="rgba(245,158,11,0.15)" stroke="#F59E0B" stroke-width="1.5"/>
  <text x="65" y="77" font-family="system-ui" font-size="11" fill="#fbbf24" text-anchor="middle" font-weight="600">User</text>
  <text x="65" y="93" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">enters pw</text>

  <!-- Arrow -->
  <line x1="111" y1="80" x2="139" y2="80" stroke="#52525b" stroke-width="1.5" marker-end="url(#flowArrow)"/>

  <!-- 2. Auth -->
  <rect x="140" y="55" width="90" height="50" rx="8" fill="rgba(244,63,94,0.12)" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="185" y="77" font-family="system-ui" font-size="11" fill="#fb7185" text-anchor="middle" font-weight="600">Auth Check</text>
  <text x="185" y="93" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">sessionStorage</text>

  <!-- Arrow -->
  <line x1="231" y1="80" x2="259" y2="80" stroke="#52525b" stroke-width="1.5" marker-end="url(#flowArrow)"/>

  <!-- 3. Dashboard -->
  <rect x="260" y="55" width="100" height="50" rx="8" fill="rgba(37,99,235,0.12)" stroke="#2563EB" stroke-width="1.5"/>
  <text x="310" y="77" font-family="system-ui" font-size="11" fill="#60a5fa" text-anchor="middle" font-weight="600">Dashboard</text>
  <text x="310" y="93" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">renderDashboard()</text>

  <!-- Arrow -->
  <line x1="361" y1="80" x2="389" y2="80" stroke="#52525b" stroke-width="1.5" marker-end="url(#flowArrow)"/>

  <!-- 4. Fetch -->
  <rect x="390" y="55" width="100" height="50" rx="8" fill="rgba(16,185,129,0.12)" stroke="#10B981" stroke-width="1.5"/>
  <text x="440" y="77" font-family="system-ui" font-size="11" fill="#34d399" text-anchor="middle" font-weight="600">Data Fetch</text>
  <text x="440" y="93" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">fetchDataFn()</text>

  <!-- Arrow -->
  <line x1="491" y1="80" x2="519" y2="80" stroke="#52525b" stroke-width="1.5" marker-end="url(#flowArrow)"/>

  <!-- 5. Render -->
  <rect x="520" y="55" width="100" height="50" rx="8" fill="rgba(167,139,250,0.12)" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="570" y="77" font-family="system-ui" font-size="11" fill="#a78bfa" text-anchor="middle" font-weight="600">Render</text>
  <text x="570" y="93" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">map + stats + cards</text>

  <!-- Arrow -->
  <line x1="621" y1="80" x2="649" y2="80" stroke="#52525b" stroke-width="1.5" marker-end="url(#flowArrow)"/>

  <!-- 6. Output -->
  <rect x="650" y="55" width="120" height="50" rx="8" fill="rgba(245,158,11,0.15)" stroke="#F59E0B" stroke-width="1.5"/>
  <text x="710" y="77" font-family="system-ui" font-size="11" fill="#fbbf24" text-anchor="middle" font-weight="600">Interactive UI</text>
  <text x="710" y="93" font-family="monospace" font-size="9" fill="#52525b" text-anchor="middle">search / export / refresh</text>

  <!-- Step numbers -->
  <circle cx="65" cy="55" r="10" fill="#09090b" stroke="#F59E0B" stroke-width="1.5"/>
  <text x="65" y="59" font-family="system-ui" font-size="10" fill="#fbbf24" text-anchor="middle" font-weight="700">1</text>
  <circle cx="185" cy="55" r="10" fill="#09090b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="185" y="59" font-family="system-ui" font-size="10" fill="#fb7185" text-anchor="middle" font-weight="700">2</text>
  <circle cx="310" cy="55" r="10" fill="#09090b" stroke="#2563EB" stroke-width="1.5"/>
  <text x="310" y="59" font-family="system-ui" font-size="10" fill="#60a5fa" text-anchor="middle" font-weight="700">3</text>
  <circle cx="440" cy="55" r="10" fill="#09090b" stroke="#10B981" stroke-width="1.5"/>
  <text x="440" y="59" font-family="system-ui" font-size="10" fill="#34d399" text-anchor="middle" font-weight="700">4</text>
  <circle cx="570" cy="55" r="10" fill="#09090b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="570" y="59" font-family="system-ui" font-size="10" fill="#a78bfa" text-anchor="middle" font-weight="700">5</text>
  <circle cx="710" cy="55" r="10" fill="#09090b" stroke="#F59E0B" stroke-width="1.5"/>
  <text x="710" y="59" font-family="system-ui" font-size="10" fill="#fbbf24" text-anchor="middle" font-weight="700">6</text>

  <!-- Refresh loop note -->
  <text x="440" y="140" font-family="system-ui" font-size="10" fill="#52525b" text-anchor="middle" font-style="italic">↺ Refresh button re-triggers steps 4 → 6</text>
</svg>

</div>

---

<!-- 10. INSTALLATION -->

## ⚙️ Installation

GodView has no npm package. It's a module file you drop into your project. Old school. Glorious.

**Step 1:** Copy `src/godview.js` and `src/godview.css` into your project.

**Step 2:** Add Leaflet (in `<head>`) and GodView (anywhere before your script):

```html
<!-- In <head> -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<link rel="stylesheet" href="./src/godview.css">
```

**Step 3:** Add a container div and initialize (Leaflet JS must load before the module):

```html
<div id="my-dashboard"></div>

<!-- Before closing </body> -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script type="module">
    import { GodView } from './src/godview.js';

    const dashboard = new GodView({
        containerId: 'my-dashboard',
        password: 'hunter2',
        title: 'Mission Control'
    });

    dashboard.init();
</script>
```

**Complete working example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Dashboard</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <link rel="stylesheet" href="./src/godview.css">
    <style>body { margin: 0; background: #000; }</style>
</head>
<body>
    <div id="my-dashboard"></div>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script type="module">
        import { GodView } from './src/godview.js';
        new GodView({
            containerId: 'my-dashboard',
            password: 'hunter2',
            title: 'Mission Control'
        }).init();
    </script>
</body>
</html>
```

That's it. You're done. Go touch grass.

---

<!-- 11. USAGE -->

## 🎮 Usage

### Minimal Config

```javascript
new GodView({
    containerId: 'app',   // Required: ID of your container div
    password: 'secret',   // Required: password for the login screen
    title: 'My Dashboard' // Optional: header title (default: 'System Overwatch')
}).init();
```

### Full Config Reference

```javascript
new GodView({
    containerId: 'app',
    password: 'letmein',
    title: 'My Dashboard',
    logo: '🛡️',               // emoji or text logo beside title

    // Custom data source
    fetchDataFn: async () => {
        const res = await fetch('/api/events');
        return res.json();
    },

    // Schema: map your data fields
    schema: {
        id:       'id',
        title:    'username',       // bold heading on card
        subtitle: 'action',         // secondary line
        detail:   'description',    // body text
        meta:     'status',         // top-right tag (INFO/WARN/ERROR/etc)
        date:     'timestamp',
        location: 'city',
        lat:      'latitude',
        lng:      'longitude',
        clicks:   'interaction_count'
    },

    // Custom stat cards
    stats: [
        { id: 'total',  label: 'Total Events', color: 'pink',   icon: '📊', fn: (d) => d.length },
        { id: 'errors', label: 'Errors',        color: 'purple', icon: '🔥', fn: (d) => d.filter(i => i.status === 'ERROR').length },
        { id: 'cities', label: 'Cities',         color: 'blue',   icon: '🌍', fn: (d) => new Set(d.map(i => i.city)).size },
        { id: 'users',  label: 'Users',          color: 'green',  icon: '👥', fn: (d) => new Set(d.map(i => i.username)).size }
    ]
}).init();
```

### Schema Field Mappers

Mapper values can be either a **string key** or a **function**:

```javascript
schema: {
    title: 'username',                         // string key
    meta:  (item) => item.code >= 400 ? 'ERROR' : 'OK'  // function
}
```

### Stat Colors

Available color classes: `pink` | `purple` | `blue` | `green`

---

<!-- 12. PROJECT STRUCTURE -->

## 🗂️ Project Structure

```
GodView/
├── index.html          # Demo page showing GodView in action
├── src/
│   ├── godview.js      # The whole module (ES6 class, ~420 lines)
│   └── godview.css     # Scoped styles (CSS variables, glassmorphism, animations)
├── assets/
│   └── README.md       # instructions for adding a demo GIF
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── SECURITY.md
└── wiki/
    ├── Home.md
    ├── Architecture.md
    ├── Installation.md
    ├── Usage.md
    ├── Privacy.md
    ├── Troubleshooting.md
    └── Roadmap.md
```

The module is intentionally a single file. Copy `godview.js` + `godview.css`, add Leaflet, call `.init()`. Done. No webpack, no babel, no vibes tax.

---

<!-- 13. PERFORMANCE STATS SVG -->

## 📈 By The Numbers

<div align="center">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 140" width="700" height="140">
  <defs>
    <radialGradient id="statsBg" cx="50%" cy="0%" r="100%">
      <stop offset="0%" stop-color="#18181b"/>
      <stop offset="100%" stop-color="#09090b"/>
    </radialGradient>
  </defs>
  <rect width="700" height="140" rx="12" fill="url(#statsBg)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

  <!-- Stat 1 -->
  <text x="87" y="60" font-family="system-ui" font-size="36" font-weight="700" fill="#f43f5e" text-anchor="middle">~420</text>
  <text x="87" y="82" font-family="system-ui" font-size="11" fill="#a1a1aa" text-anchor="middle">lines of JS</text>
  <line x1="174" y1="25" x2="174" y2="115" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

  <!-- Stat 2 -->
  <text x="262" y="60" font-family="system-ui" font-size="36" font-weight="700" fill="#fbbf24" text-anchor="middle">0</text>
  <text x="262" y="82" font-family="system-ui" font-size="11" fill="#a1a1aa" text-anchor="middle">runtime dependencies</text>
  <line x1="349" y1="25" x2="349" y2="115" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

  <!-- Stat 3 -->
  <text x="437" y="60" font-family="system-ui" font-size="36" font-weight="700" fill="#34d399" text-anchor="middle">1</text>
  <text x="437" y="82" font-family="system-ui" font-size="11" fill="#a1a1aa" text-anchor="middle">peer dep (Leaflet)</text>
  <line x1="524" y1="25" x2="524" y2="115" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

  <!-- Stat 4 -->
  <text x="612" y="60" font-family="system-ui" font-size="36" font-weight="700" fill="#60a5fa" text-anchor="middle">∞</text>
  <text x="612" y="82" font-family="system-ui" font-size="11" fill="#a1a1aa" text-anchor="middle">simultaneous instances</text>
</svg>

</div>

---

<!-- 14. PRIVACY SECTION -->

## 🔐 Privacy

GodView is a **client-side-only module**. Here's the full list of external services it touches at runtime:

| Service | Why | Can you disable it? |
|---|---|---|
| `unpkg.com/leaflet` | Leaflet.js CDN | Yes — self-host Leaflet |
| `fonts.googleapis.com` | Outfit font | Yes — remove the `@import` from `godview.css` |
| `basemaps.cartocdn.com` | Dark map tiles | Yes — swap the tile URL in `initMap()` |

**Authentication** is session-scoped. The password is stored in memory inside the module config. The session token (`godview_auth_<containerId>`) lives in `sessionStorage` and dies when the browser tab closes. Nothing is sent to a server.

**Data** is whatever you feed it via `fetchDataFn`. GodView doesn't log, transmit, or persist anything on its own.

> See [SECURITY.md](./SECURITY.md) for the full security policy and vulnerability reporting.

---

<!-- 15. FUTURE ROADMAP -->

## 🗺️ Future Roadmap

Things that would be cool but haven't shipped yet (contributions welcome 👀):

- [ ] Dark/light theme toggle
- [ ] Pluggable chart widgets (line, bar, pie — beyond the stat cards)
- [ ] WebSocket support for truly live data streams
- [ ] npm package distribution
- [ ] Multiple map marker styles and clustering
- [ ] Date range filter
- [ ] Pagination for large datasets
- [ ] `localStorage` auth option (survive page refresh)
- [ ] Customizable color themes via CSS variables

> Check the full roadmap in [wiki/Roadmap.md](./wiki/Roadmap.md)

---

<!-- 16. LICENSE REFERENCE -->

## 📜 License

MIT — see [LICENSE](./LICENSE).

Go build something cool. Just don't use it to track your ex. We both know that's not the move.

---

<div align="center">

*Built with ❤️, ☕, and a dangerous amount of CSS `box-shadow`.*

*If this saved you time, consider starring the repo. The algorithm feeds on stars and the tears of developers who don't.*

</div>
