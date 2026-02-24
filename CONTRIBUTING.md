# 🤝 Contributing to GodView

First off: thanks for being here. You're already better than 90% of the internet, which mostly just files bug reports without reproducing them.

This doc covers everything you need to know to contribute without making the maintainers cry.

---

## 🚀 Quick Start

1. **Fork** the repo (that button in the top-right, yes that one)
2. **Clone** your fork
3. **Make a branch** with a sensible name (see below)
4. **Make your changes**
5. **Test them** by opening `index.html` in a browser — there's no build step
6. **Open a PR**

That's the whole process. GodView is a browser module with no build step, no test runner, and no bundler. If `index.html` opens and doesn't scream errors at you, you're probably good.

---

## 🌿 Branching Model

We use a simple trunk-based-ish model:

| Branch | Purpose |
|---|---|
| `main` | Stable. Deployable. Don't break this. |
| `feature/<name>` | New features. E.g. `feature/websocket-support` |
| `fix/<name>` | Bug fixes. E.g. `fix/map-marker-jitter` |
| `docs/<name>` | Documentation only. E.g. `docs/update-wiki` |
| `refactor/<name>` | Code cleanup without behavior change |

Branch names should be kebab-case and actually describe what you're doing. `my-changes` is not a branch name, it's a cry for help.

---

## 💬 Commit Style

We follow [Conventional Commits](https://www.conventionalcommits.org/). Your future self will thank you.

```
<type>(<scope>): <short description>
```

**Types:**
- `feat` — new feature
- `fix` — bug fix
- `docs` — documentation changes
- `style` — CSS/formatting, no logic change
- `refactor` — code restructure, no behavior change
- `chore` — dependency updates, tooling, etc.

**Examples:**

```
feat(map): add marker clustering for dense datasets
fix(auth): clear error message after 3 seconds not 300
docs(readme): add full config reference
style(css): align stat card grid gap to 1.5rem
```

Keep the subject line under 72 characters. Use the body for *why*, not *what*. The diff shows *what*.

---

## 🐛 Reporting Bugs

Before filing a bug:
1. Make sure you're using a modern browser (Chrome/Firefox/Edge — no IE, we don't do that here)
2. Check the browser console for actual error messages
3. Make sure Leaflet is loaded before `godview.js`
4. Confirm you didn't mistype your `containerId`

When filing, include:
- What you expected to happen
- What actually happened (bonus: console output)
- Browser + OS
- A minimal reproduction (even a quick code snippet helps)

---

## ✨ Feature Requests

Open an issue with the `enhancement` label. Describe:
- What you're trying to do
- Why the current module doesn't let you do it
- What an API for this might look like (even rough pseudocode)

We're generally open to ideas that keep the module simple and dependency-free. We're less open to ideas that require shipping a 200KB charting library.

---

## 🧑‍💻 Code Style

No linter (yet), but here's the vibe:

- ES6+ class syntax (already established in the codebase)
- `camelCase` for variables and methods
- Descriptive names — `renderDashboard` not `rd`
- Keep methods focused — if it's doing three things, maybe it's three methods
- New CSS should use the existing CSS variables (`--gv-*`) from `godview.css`
- Avoid adding new external dependencies — the zero-dep nature is a feature

---

## 🔒 Security

Found something that looks like a security issue? Please don't open a public issue for it. See [SECURITY.md](./SECURITY.md) instead.

---

## 💌 Thanks

Seriously — PRs, issues, and even just star bumps are appreciated. Every contribution makes this module slightly less embarrassing to ship.

Go build something.

