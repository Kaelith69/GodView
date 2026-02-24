# 🔧 Troubleshooting

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
