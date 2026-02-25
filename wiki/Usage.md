# 🎮 Usage

<div align="center">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 100" width="700" height="100">
  <defs>
    <radialGradient id="usageBg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#09090b"/>
    </radialGradient>
    <linearGradient id="usageGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f43f5e"/>
      <stop offset="50%" stop-color="#fb7185"/>
      <stop offset="100%" stop-color="#a5b4fc"/>
    </linearGradient>
    <filter id="usageGlow" x="-20%" y="-30%" width="140%" height="160%">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="700" height="100" rx="10" fill="url(#usageBg)"/>
  <g stroke="rgba(255,255,255,0.04)" stroke-width="1">
    <line x1="0" y1="33" x2="700" y2="33"/>
    <line x1="0" y1="66" x2="700" y2="66"/>
    <line x1="175" y1="0" x2="175" y2="100"/>
    <line x1="350" y1="0" x2="350" y2="100"/>
    <line x1="525" y1="0" x2="525" y2="100"/>
  </g>
  <!-- Gamepad icon shape -->
  <g transform="translate(290, 50)" filter="url(#usageGlow)">
    <rect x="-18" y="-11" width="36" height="22" rx="8" fill="none" stroke="#f43f5e" stroke-width="2"/>
    <line x1="-10" y1="0" x2="-6" y2="0" stroke="#f43f5e" stroke-width="2"/>
    <line x1="-8" y1="-2" x2="-8" y2="2" stroke="#f43f5e" stroke-width="2"/>
    <circle cx="8" cy="-2" r="2" fill="#f43f5e" opacity="0.9"/>
    <circle cx="12" cy="2" r="2" fill="#fb7185" opacity="0.7"/>
  </g>
  <!-- Title -->
  <text x="324" y="44" font-family="'Outfit', system-ui, sans-serif" font-size="28" font-weight="700" fill="url(#usageGrad)" letter-spacing="-0.5" filter="url(#usageGlow)">Usage</text>
  <text x="324" y="64" font-family="system-ui, sans-serif" font-size="11" fill="#71717a" letter-spacing="3">CONFIG REFERENCE &amp; EXAMPLES</text>
</svg>

</div>

This page covers the full config API, all the knobs you can turn, and some examples of GodView being used in the wild (well, in code at least).

---

## Constructor

```javascript
const app = new GodView(config);
app.init();
```

`init()` checks session auth and routes to either the login screen or the dashboard.

---

## Config Reference

### Required

| Option | Type | Description |
|---|---|---|
| `containerId` | `string` | ID of the HTML element GodView will render into |
| `password` | `string` | The password for the login screen |

### Optional — Appearance

| Option | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | `'System Overwatch'` | Text shown in the dashboard header |
| `logo` | `string` | `'👁️'` | Emoji or text shown before the title |

### Optional — Data

| Option | Type | Default | Description |
|---|---|---|---|
| `fetchDataFn` | `async function` | Built-in mock data generator | Called when data loads or refreshes. Must return an array of objects. |

### Optional — Schema

Maps logical field roles to keys in your data objects. Values can be string keys or functions.

```javascript
schema: {
    id:       'id',
    title:    'username',
    subtitle: 'action',
    detail:   'description',
    meta:     'status',
    date:     'timestamp',
    location: 'city',
    lat:      'latitude',
    lng:      'longitude',
    clicks:   'interaction_count'
}
```

**String key:** `title: 'username'` → reads `item.username`  
**Function:** `meta: (item) => item.code >= 400 ? 'ERROR' : 'OK'` → computed value

All schema fields are optional. If a field is missing/undefined, GodView renders a fallback gracefully.

### Optional — Stats

Array of stat card definitions. Each stat card shows one computed value.

```javascript
stats: [
    {
        id:    'total',   // unique identifier (used for DOM targeting)
        label: 'Total',   // display label below the value
        color: 'pink',    // pink | purple | blue | green
        icon:  '📊',      // emoji shown above the value
        fn:    (data) => data.length  // function receiving full dataset, returns display value
    }
]
```

---

## Full Config Example

```javascript
const app = new GodView({
    containerId: 'app',
    password: 'letmein',
    title: 'Event Monitor',
    logo: '🛡️',

    fetchDataFn: async () => {
        const response = await fetch('/api/events?limit=100');
        return response.json();
    },

    schema: {
        id:       'event_id',
        title:    'service_name',
        subtitle: 'operation',
        detail:   'message',
        meta:     'level',           // INFO, WARN, ERROR, SUCCESS
        date:     'timestamp',
        location: 'datacenter',
        lat:      'geo_lat',
        lng:      'geo_lng',
        clicks:   'retry_count'
    },

    stats: [
        { id: 'total',  label: 'Total Events', color: 'pink',   icon: '📊', fn: (d) => d.length },
        { id: 'errors', label: 'Errors',        color: 'purple', icon: '🔥', fn: (d) => d.filter(i => i.level === 'ERROR').length },
        { id: 'dcs',    label: 'Datacenters',   color: 'blue',   icon: '🌍', fn: (d) => new Set(d.map(i => i.datacenter)).size },
        { id: 'svcs',   label: 'Services',      color: 'green',  icon: '⚙️',  fn: (d) => new Set(d.map(i => i.service_name)).size }
    ]
});

app.init();
```

---

## Running Multiple Instances

Multiple GodView dashboards can coexist on the same page. Auth tokens are namespaced by `containerId`:

```html
<div id="dashboard-a"></div>
<div id="dashboard-b"></div>

<script type="module">
    import { GodView } from './src/godview.js';

    new GodView({ containerId: 'dashboard-a', password: 'alpha', title: 'Alpha' }).init();
    new GodView({ containerId: 'dashboard-b', password: 'beta',  title: 'Beta'  }).init();
</script>
```

Logging in on one doesn't affect the other.

---

## Custom Data Source

Your `fetchDataFn` can call any async source:

```javascript
// REST API
fetchDataFn: async () => {
    const res = await fetch('/api/logs');
    return res.json();
}

// Mock with delay (for testing)
fetchDataFn: async () => {
    await new Promise(r => setTimeout(r, 800));
    return [{ id: 1, title: 'Test Event', ... }];
}

// Static data (for demos)
fetchDataFn: async () => myStaticArray
```

---

## User Interactions

| Interaction | What happens |
|---|---|
| **Enter password + Enter/Click** | Auth check → dashboard |
| **Wrong password** | Shake animation, error message for 3s |
| **Refresh button** | Re-calls `fetchDataFn`, updates map and cards |
| **Type in search box** | Filters cards after 300ms debounce |
| **Click Export CSV** | Downloads `godview_export_<timestamp>.csv` |
| **Click Logout** | Clears session token, returns to login |
| **Click map marker** | Shows popup with item title, meta, and detail excerpt |

---

## Search Behavior

Search filters by substring match (case-insensitive) across:
- `title`
- `subtitle`
- `detail`
- `meta`
- `location`

It does **not** filter the map markers — those always show all items with valid coordinates, regardless of the current search query.

---

## CSV Export

The CSV is generated from the **full (unfiltered) dataset** using the schema keys as column headers. Values are double-quote wrapped and internal quotes are escaped.

File format: `godview_export_<unix_timestamp>.csv`
