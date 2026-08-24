---
name: Vercel SPA routing
description: Client-side route handling for the Studio 1801 Vite site on Vercel.
---

Vercel needs a root rewrite to `index.html` for this client-side Vite app so direct visits and refreshes on routes such as `/preview/...` do not return a platform 404.

**Why:** Vercel serves the static homepage successfully but does not automatically hand unknown client routes back to the React router.

**How to apply:** Preserve the root `vercel.json` rewrite whenever adding or deploying client-side routes.