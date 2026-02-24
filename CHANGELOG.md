# 📋 Changelog

All notable changes to GodView are documented here.

Format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).  
Versioning follows [Semantic Versioning](https://semver.org/).

> **Unreleased changes** live at the top. When things ship, they get a version and a date.

---

## [Unreleased]

### Planned
- Dark/light theme toggle (for people who live in daylight, allegedly)
- WebSocket support for live data streams
- Marker clustering for when your data has opinions about geography
- `localStorage` auth option so the dashboard survives a page refresh

---

## [1.1.0] — Unreleased

### Added
- Flexible schema mapping — field mappers can now be functions, not just string keys
- Configurable stat cards via the `stats` config array with custom aggregation functions
- Multi-instance support — `containerId`-namespaced session tokens so two GodViews can coexist on one page without an identity crisis
- Toast notification system for sync and export confirmations
- Debounced search (300ms) so the filter doesn't fire on every keystroke like it's having a panic attack
- `logo` config option to customize the emoji/icon in the header

### Changed
- Mock data generator now produces generic system events (service names, process IDs, operations) instead of domain-specific fake data
- Map markers now apply a tiny coordinate jitter to prevent perfect pile-ups

### Fixed
- Map `invalidateSize()` called after render to handle container dimensions correctly
- Login error message now correctly hides after 3 seconds

---

## [1.0.0] — 2026-02-10

### Added
- Initial release of GodView module 🎉
- Password-protected login screen with glassmorphic design
- Shake animation on failed login attempt (the button judges you)
- Session-based authentication via `sessionStorage`
- Interactive world map using Leaflet.js on CartoDB dark tiles
- Glowing circular map markers with popup tooltips
- Four stat cards (Total Events, Active Users, Locations, Interactions)
- Card list view with title, subtitle, detail, meta, date, and location fields
- Live search/filter across all card fields
- CSV export with dynamic headers from schema mapping
- Refresh button to re-fetch data
- Mock data generator with 5 global locations (Kochi, San Francisco, London, Berlin, Tokyo)
- Scoped CSS using CSS custom properties (`--gv-*` prefix)
- Outfit font via Google Fonts
- `gv-fade-in` animation on cards and dashboard
- Logout clears session and returns to login screen
- Zero runtime dependencies (Leaflet is a peer dep)

---

## Format Reference

- **Added** — new features
- **Changed** — changes to existing functionality
- **Deprecated** — soon-to-be removed features
- **Removed** — removed features
- **Fixed** — bug fixes
- **Security** — vulnerability patches
