# 🔧 Troubleshooting

<div align="center">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 100" width="700" height="100">
  <defs>
    <radialGradient id="troubleBg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#09090b"/>
    </radialGradient>
    <linearGradient id="troubleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f43f5e"/>
      <stop offset="50%" stop-color="#fb7185"/>
      <stop offset="100%" stop-color="#a5b4fc"/>
    </linearGradient>
    <filter id="troubleGlow" x="-20%" y="-30%" width="140%" height="160%">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="700" height="100" rx="10" fill="url(#troubleBg)"/>
  <g stroke="rgba(255,255,255,0.04)" stroke-width="1">
    <line x1="0" y1="33" x2="700" y2="33"/>
    <line x1="0" y1="66" x2="700" y2="66"/>
    <line x1="175" y1="0" x2="175" y2="100"/>
    <line x1="350" y1="0" x2="350" y2="100"/>
    <line x1="525" y1="0" x2="525" y2="100"/>
  </g>
  <!-- Wrench icon shape -->
  <g transform="translate(290, 50)" filter="url(#troubleGlow)">
    <line x1="-12" y1="12" x2="8" y2="-8" stroke="#f43f5e" stroke-width="3" stroke-linecap="round"/>
    <circle cx="10" cy="-10" r="6" fill="none" stroke="#f43f5e" stroke-width="2"/>
    <circle cx="10" cy="-10" r="2.5" fill="#f43f5e" opacity="0.8"/>
    <circle cx="-13" cy="13" r="3" fill="none" stroke="#fb7185" stroke-width="1.5"/>
  </g>
  <!-- Title -->
  <text x="324" y="44" font-family="'Outfit', system-ui, sans-serif" font-size="24" font-weight="700" fill="url(#troubleGrad)" letter-spacing="-0.5" filter="url(#troubleGlow)">Troubleshooting</text>
  <text x="324" y="64" font-family="system-ui, sans-serif" font-size="11" fill="#71717a" letter-spacing="3">WHEN THINGS GO SIDEWAYS</text>
</svg>

</div>

Something's broken? Let's fix it. This page covers the most common issues and their fixes. If you've ended up here, take a breath — it's probably something small.

---

## The page is blank / nothing renders

**Check:** Is there a `GodView: Container #<id> not found` error in the browser console?

This means the `containerId` you passed doesn't match any element in the DOM.

**Fix:** Make sure the `<div>` exists and the ID matches exactly:

```html
<div id="my-dashboard"></div>  ← this ID

<script type="module">
    new GodView({ containerId: 'my-dashboard', ... }).init();  ← must match
</script>
```

Also make sure the `<div>` exists **before** the script runs. Put your `<script>` after the `<div>` in the HTML.

---

## The map doesn't show / shows a grey box

**Most likely cause:** Leaflet JS isn't loaded.

GodView checks `typeof L === 'undefined'` and shows a "Map modules offline" message if Leaflet isn't available. Check the browser console for a 404 on the Leaflet script URL.

**Fix:** Ensure Leaflet loads **before** GodView initializes:

```html
<!-- This BEFORE your GodView script -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script type="module">
    import { GodView } from './src/godview.js';
    ...
</script>
```

**Also check:** The Leaflet CSS must be loaded too, or the map tiles will render incorrectly:

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
```

---

## The map renders but has no markers

**Check:** Does your data include `lat` and `lng` fields (or whatever you've mapped them to in the schema)?

`updateMapMarkers()` filters for items where both lat and lng are truthy:

```javascript
const valid = this.state.data.filter(d => this.getVal(d, S.lat) && this.getVal(d, S.lng));
```

If your data has coordinates at different field names, update the schema:

```javascript
schema: {
    lat: 'latitude',  // or 'geo_lat', or whatever your field is called
    lng: 'longitude'
}
```

---

## Styles look completely unstyled

**Check:** Is `godview.css` being loaded?

Look for a 404 in the Network tab. Make sure the path to `godview.css` is correct relative to your HTML file.

**Also check:** Are you using a different `containerId`? The CSS variables in `godview.css` are scoped to `#godview-container`. If you use a different ID, you need to add matching CSS variable declarations. See [Installation](./Installation.md) for the variable list.

---

## "SyntaxError: Cannot use import statement" in the console

GodView uses ES6 `export`. Your `<script>` tag needs `type="module"`:

```html
<script type="module">
    import { GodView } from './src/godview.js';
    ...
</script>
```

---

## The login screen shakes but I entered the right password

**Check:** Are you sure the password matches? It's case-sensitive and whitespace-sensitive.

Look at how you initialized GodView:

```javascript
new GodView({ password: 'MyPassword' })
```

Entering `mypassword` (lowercase) won't work.

---

## Dashboard shows but data never loads / spinner is stuck

**Check:** Is your `fetchDataFn` throwing an error?

Open the browser console. If your `fetchDataFn` throws, `refreshData()` will catch it (the `finally` block re-enables the button), but `render()` won't be called. The loading message will remain.

**Fix:** Add error handling inside your `fetchDataFn`:

```javascript
fetchDataFn: async () => {
    try {
        const res = await fetch('/api/data');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
    } catch (err) {
        console.error('GodView: data fetch failed', err);
        return [];  // return empty array to unblock render
    }
}
```

---

## CORS error when fetching data

Your API and your HTML must share an origin, or your API must send the appropriate CORS headers. This is a server-side configuration — GodView can't fix it for you.

For development, consider running a local server instead of opening `index.html` as a `file://` URL. A quick option:

```bash
# Python
python3 -m http.server 8080

# Node.js (with npx)
npx serve .
```

---

## CSV export is blank or malformed

**Check:** Does `this.state.data` have items? If the data array is empty, `downloadCSV()` shows a toast ("No data") and stops.

**Check:** Are your schema keys correct? The CSV headers come from `Object.keys(schema)`, and the values come from `getVal(item, schema[key])`. If a schema key maps to a field that doesn't exist in your data, the column will be empty.

---

## Multiple GodView instances interfere with each other

This shouldn't happen if each instance has a unique `containerId`. The session storage key is `godview_auth_<containerId>`, so they're namespaced.

If instances share the same `containerId`, they will conflict. Use different IDs.

---

## Something else

Open an issue on GitHub and include:
- What you expected
- What happened instead
- Browser and OS
- Relevant console errors
- A minimal code snippet that reproduces the problem

The more specific you are, the faster it gets fixed.
