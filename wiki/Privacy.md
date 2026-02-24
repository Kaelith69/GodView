# 🔐 Privacy

GodView is a client-side JavaScript module. Let's talk about exactly what it touches, what it doesn't, and what you're responsible for.

---

## What GodView Does With Your Data

**Short answer: nothing beyond your screen.**

GodView renders data into your browser's DOM. It doesn't log data, transmit data, or persist data to any server. When the tab closes, everything in memory is gone.

The only "storage" GodView uses is `sessionStorage`:

```
Key:   godview_auth_<containerId>
Value: '1'
```

This token is written on successful login and cleared on logout. It disappears automatically when the browser tab closes. It contains no user data — it's just a flag that says "this tab has been authenticated."

---

## External Services

At runtime, GodView communicates with these external services:

### Leaflet.js CDN (`unpkg.com`)

If you're loading Leaflet via the default CDN URL:
```
https://unpkg.com/leaflet@1.9.4/dist/leaflet.js
```

Your browser makes a request to `unpkg.com` to download the script. This is a one-time load and follows normal CDN privacy behavior (unpkg may log IP addresses, like any CDN).

**To avoid this:** Self-host Leaflet. Download it from [leafletjs.com](https://leafletjs.com/download.html) and serve from your own domain.

### Google Fonts (`fonts.googleapis.com`)

`godview.css` imports the Outfit font:
```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
```

Your browser makes a request to Google's font servers. [Google's privacy policy](https://policies.google.com/privacy) applies.

**To avoid this:** Remove the `@import` from `godview.css` and either use a self-hosted font or fall back to the system font stack (`system-ui, -apple-system, sans-serif` — already in the CSS as a fallback).

### CartoDB Map Tiles (`basemaps.cartocdn.com`)

The map fetches dark tile images from CartoDB's tile CDN:
```
https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png
```

Each tile request includes the tile coordinates and is subject to CartoDB's terms of service.

**To switch tile providers:** Update the tile URL in `initMap()` inside `godview.js`:

```javascript
L.tileLayer('https://your-tile-provider/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(this.map);
```

---

## Your Data

GodView renders whatever you provide via `fetchDataFn`. You are responsible for:

- Ensuring you have the right to display that data in a browser context
- Not passing sensitive credentials through the config (like the password field) if that config object is logged or serialized
- CORS headers if your `fetchDataFn` calls a different origin

GodView doesn't add any telemetry, analytics, or beacons of its own.

---

## The Password

The `password` value you pass in the config object sits in memory as a JavaScript property. It's visible in DevTools to anyone who has access to the page. This is a light access gate — it's not meant to protect genuinely sensitive data from determined users.

Use it to:
- Gate an internal tool from casual access
- Add a lightweight auth layer to a prototype

Don't use it to:
- Protect personally identifiable information
- Gate access to medical, financial, or otherwise regulated data
- Replace a real auth system

---

## Summary Table

| External Contact | When | Self-hostable? |
|---|---|---|
| `unpkg.com` (Leaflet) | Page load | ✅ Yes |
| `fonts.googleapis.com` (Outfit) | Page load | ✅ Yes (remove import) |
| `basemaps.cartocdn.com` (Map tiles) | Map interaction | ✅ Yes (swap tile URL) |
| Any server you specify | On refresh (via `fetchDataFn`) | You control this |

Everything else: stays local.
