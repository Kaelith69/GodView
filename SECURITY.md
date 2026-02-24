# 🔐 Security Policy

## Supported Versions

| Version | Supported |
|---|---|
| Latest (`main`) | ✅ Yes |
| Older releases | ⚠️ Best effort |

GodView is a client-side JavaScript module. There's no server component, no database, and no centralized infrastructure to compromise. That said, client-side security is still real security.

---

## Scope

Things in scope for vulnerability reports:

- **XSS vulnerabilities** — GodView renders user-supplied data into the DOM. The `esc()` helper handles basic escaping, but if you find a bypass, that's a real issue
- **Auth bypass** — The `sessionStorage` auth mechanism is intentionally lightweight, but obvious bypasses in the module logic are worth reporting
- **Dependency vulnerabilities** — Issues in Leaflet.js (the peer dependency) that are exploitable through GodView's usage

Things **not** in scope:
- "The password is stored in plaintext in the config object" — yes, intentionally, it's a client-side module. Don't configure it with your banking password.
- "Someone can open DevTools and see the sessionStorage token" — also yes, and we appreciate the enthusiasm, but this is expected behavior
- Issues in your own application's backend that happen to use GodView on the frontend

---

## Reporting a Vulnerability

**Please do not open a public GitHub issue for security vulnerabilities.** That just gives attackers a head start.

Instead, report it via one of these channels:

1. **GitHub Security Advisories** — use the "Report a vulnerability" button on the Security tab of this repository
2. **Email** — if you can locate the maintainer's contact info from their GitHub profile

When reporting, include:

- A clear description of the vulnerability
- Steps to reproduce (a minimal proof-of-concept is gold)
- The potential impact
- Any suggested fix if you have one

---

## Response Timeline

This is an open-source project maintained by humans with day jobs. Realistic expectations:

| Milestone | Target |
|---|---|
| Acknowledgement | Within 72 hours |
| Initial assessment | Within 1 week |
| Fix or mitigation | Depends on severity — critical issues get fast-tracked |
| Public disclosure | Coordinated after fix is available |

If you don't hear back within a week, a polite follow-up is totally fine.

---

## Thanks

Responsible disclosure is genuinely appreciated. If you find something real and report it properly, you'll get credit in the changelog and a sincere thank you from a developer who suddenly has more work to do.
