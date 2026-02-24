# 👁️ GodView Wiki

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
