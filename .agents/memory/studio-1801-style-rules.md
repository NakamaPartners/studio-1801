---
name: Studio 1801 style rules
description: User-confirmed visual rules for the Studio 1801 site that override details in reference screenshots
---

The user iterates by attaching reference screenshots, but these house rules override anything in a reference:

- **No all-caps text anywhere** (nav, meta rows, labels, CTAs, headings). Even when a reference image shows uppercase (e.g. "DESIGN PROCESS"), render it sentence case. Acronyms like "SEO" are fine.
- **All images share consistent rounded corners** (14px radius on the wrapper with overflow hidden), site-wide.
- **Every section panel is rounded** (16px radius, matching the hero frame) against the charcoal page background — the user loves the "rounded thingy"; never leave a section panel square.
- The About statement is REGULAR weight (400, user later reversed the earlier semibold), roomy line-height (~1.3), centered, with a small grey "( Studio 1801 ® )" label above and the black "• Let's chat" pill below; no heavy panel borders — minimal.
- Editorial, quiet, studio-like feel: cream panels in a charcoal frame, sentence case, generous whitespace, no gray hairline-divider clutter on light sections.
- Second section (About) = centered statement + black "• Let's chat" pill only; no columns, no image.
- Selected works = uniform wide landscape crops in a clean two-column grid (odd cards left, even right, first pair top-aligned); intro = big title left, small summary upper-right. User rejected the earlier staggered/negative-margin collage as "not organized".
- Hero = left headline block (~45% col, TWO-line lockup "See Your New Website. / Before You Pay." must hold; description wraps in 2 lines) vs right column (~50%)
- Closing contact section is cream/editorial like every other panel (left-aligned three-line headline, small labeled Email/Studio/Availability columns, big signoff) — the old dark charcoal centered closer was explicitly replaced; every panel is now cream, only the outer frame stays charcoal.
- Big display headlines use Inter Tight (a Helvetica-style grotesque the user picked from a reference); everything else stays Instrument Sans. Strategy-section headline stays semibold 600; the hero h1 was later unbolded to regular 400 at a slightly larger size, per user — don't re-bold it.
- Hero right column: "Make a better first impression.", copy, then full-width image; nav, meta, content, and footer all share the SAME horizontal inset so left/right edges align exactly — the user checks this "to every last detail".
- Strategy / "Revenue leaks" section is MINIMAL on off-white like every other panel (arrow glyph + bold headline left; faint labels Diagnosis/Outcome/The leaks/Description with plain text right). The old dark charcoal panel with numbered 01–04 articles was explicitly replaced — do not reintroduce a dark panel or the numbered-article list.
- Same section: revenue framing lives ONLY as two small quiet lines in the left column under the headline (terracotta "≈ $32,700 a year back on the table…" + bottom-pinned gray "≈ $630 walks past the door" urgency line), then the two editorial photos (full room / walked-past cup, time-stamped captions) close the section. User removed both the per-leak priced breakdown AND the standalone big-figure opportunity block — keep money talk short and subtle here; terracotta accent reserved for the opportunity figure.
- Mobile: single-column, no transforms, hero image below hero copy.
- **Desktop type must be EXACTLY proportional to viewport width — no per-element floors or caps.** The user is highly sensitive to any text that reads bigger or smaller relative to the layout as the window resizes ("ruins everything"); the subtle editorial feel depends on it. Implementation: a single `html { font-size: clamp(9px, 1.111vw, 21.5px) }` in a `min-width: 769px` media query (16px at the 1440 design width) drives all desktop type; every desktop font-size and text-column max-width is in rem, overriding base px/clamp rules in a desktop typography block near the end of the stylesheet. Mobile (≤768px) keeps root 16px and its own fixed sizes.
  **How to apply:** any NEW desktop text or text column must use rem (value at 1440 ÷ 16), never px or vw clamps. Late-in-file base rules beat the early hero media block at equal specificity — put desktop text overrides in the LATE typography block.

**Why:** User corrected all-caps and divider treatments multiple times after redesigns reintroduced them; matching a reference too literally caused rework.

**How to apply:** When implementing any new reference screenshot for this site, first strip uppercase/dividers from the interpretation and keep the rounded-image + sentence-case system intact.
