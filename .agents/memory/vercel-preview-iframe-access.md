---
name: Vercel preview iframe access
description: Constraints when using Vercel deployment URLs as embedded project previews
---

Vercel Preview deployment URLs may be protected by workspace authentication and return a Vercel sign-in redirect instead of the deployed site. They are not suitable as public iframe sources, even when the deployment itself reports Ready.

**Why:** A preview URL can be reachable to an authenticated owner but still be unusable for Studio visitors and embedded browsers.

**How to apply:** Use a public Production deployment or public custom domain for portfolio iframes. Separately verify the target app permits cross-origin framing; Vercel authentication and `X-Frame-Options` restrictions are independent blockers.