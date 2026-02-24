# ⚙️ Installation

GodView is distributed as source files — two of them. No npm registry, no bundler, no package.json. Copy files, add Leaflet, initialize. That's the whole install process.

---

## Requirements

| Requirement | Notes |
|---|---|
| Modern browser | Chrome, Firefox, Edge, Safari — anything with ES6 module support |
| Leaflet.js 1.9.4 | Peer dependency. Must be loaded before `godview.js` |
| A `<div>` | The container for the dashboard |

---

## Step 1: Get the Files

Copy these two files from the repo into your project:

```
src/godview.js
src/godview.css
```

Put them wherever makes sense for your project. The paths below are just examples.

---

## Step 2: Add Leaflet

Leaflet must be loaded **before** the GodView script. The easiest way is via CDN in your HTML `<head>`:

```html
<!-- Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
```

And before the closing `</body>` tag (or in `<head>` with `defer`):

```html
<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
```

**Self-hosting Leaflet:** Download Leaflet from [leafletjs.com](https://leafletjs.com/download.html) and serve it from your own server. Swap the CDN URLs above for your local paths.

---

## Step 3: Add GodView CSS

```html
<link rel="stylesheet" href="./path/to/godview.css">
```

---

## Step 4: Add a Container

```html
<div id="my-dashboard"></div>
```

The `id` value here is your `containerId` — you'll use it in the next step.

---

## Step 5: Initialize

```html
<script type="module">
    import { GodView } from './path/to/godview.js';

    const app = new GodView({
        containerId: 'my-dashboard',
        password: 'your-password-here',
        title: 'My Dashboard'
    });

    app.init();
</script>
```

> **Note:** `type="module"` is required because GodView uses ES6 `export`. If your setup doesn't support ES modules, you'll need to bundle it first.

---

## Complete Minimal Example

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
    <div id="app"></div>

    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script type="module">
        import { GodView } from './src/godview.js';
        new GodView({ containerId: 'app', password: 'demo' }).init();
    </script>
</body>
</html>
```

Open in a browser. Enter `demo` as the password. You should see the dashboard with mock data.

---

## CSS Variables Note

The default GodView CSS variables are scoped to `#godview-container`. If you use a different `containerId` (like `app` above), add this to your CSS to ensure variables cascade correctly:

```css
#app {
    --gv-bg-1: #09090b;
    --gv-bg-2: #18181b;
    --gv-bg-card: rgba(24, 24, 27, 0.6);
    --gv-bg-glass: rgba(255, 255, 255, 0.03);
    --gv-border: rgba(255, 255, 255, 0.08);
    --gv-border-hover: rgba(255, 255, 255, 0.15);
    --gv-primary: #f43f5e;
    --gv-primary-glow: rgba(244, 63, 94, 0.3);
    --gv-text: #fafafa;
    --gv-text-secondary: #a1a1aa;
    --gv-text-muted: #52525b;
    --gv-radius-lg: 16px;
    --gv-radius-md: 12px;
    --gv-radius-sm: 8px;
}
```

Or just update `godview.css` to use your container ID instead of `#godview-container`.

---

## Troubleshooting Install

- **Blank page / nothing renders:** Check the browser console. Most likely `containerId` doesn't match an existing element, or Leaflet isn't loaded.
- **Map doesn't show:** Leaflet JS must load before GodView initializes. Check load order.
- **Styles look broken:** Make sure `godview.css` is linked before the `<div>` is rendered.

See [Troubleshooting](./Troubleshooting.md) for more.
