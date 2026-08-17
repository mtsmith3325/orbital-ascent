# Feature — Lunar Trajectory Tracker

## What it is
A believable "live" mission-console widget embedded mid-scroll on the homepage. It shows a mock active shuttle mission en route to the Moon — a full hero-style orbital scene (Earth/Moon photographic background, trajectory arc with waypoint status) plus a detailed telemetry readout (primary stats with progress bars, a 6-stage mission phase stepper, a rocket render, and a secondary footer row of supplementary telemetry). It is a **secondary, surprise moment in the scroll** — not a page of its own — but it is a full, rich console treatment where it appears, not a minimized teaser.

**Revision note (Session 6):** this supersedes the original "compact, minimal" version of this spec (Session 4). The richer mission-console design — hero imagery, waypoint label, coordinate readouts, progress bars, phase stepper, rocket render, telemetry footer row — is now the tracker, full size, wherever it's placed. There is no separate compact/teaser version.

## Why it exists
Reinforces the brand thesis from `docs/art-direction.md` — "space as an emerging infrastructure, not a fantasy." A tracker that feels real (even though it's mock data) does more to sell that idea than another paragraph of marketing copy. It also gives the brochure scroll a moment of surprise/delight between informational sections, per the brief's request for "big, bold, visionary, informative" — this is the *bold surprise* beat, delivered at full richness rather than a diminished preview.

## Placement
**Embedded mid-scroll, between two brochure sections** (e.g. between the Orbital Flight section and the Lunar Flyby section) — not the hero, not a persistent sidebar, not gated behind a scroll-depth reveal. It should read as one more thing you encounter while scrolling, consistent with the rest of the brochure's pacing — it simply commands more visual space than a typical section when you reach it.

## Content & Behavior

**Header row**
- Mission label (e.g. "ACTIVE MISSION · ARTEMIS CHARTER 04")
- Live indicator (e.g. "● LIVE") in accent amber

**Hero orbital scene**
- Full-bleed photographic-style background: Earth (city lights, atmospheric glow) anchoring left, Moon (cratered) anchoring right, scattered stars, soft vignette top/bottom
- Dashed trajectory arc between Earth and Moon
- Glowing waypoint marker at the arc's midpoint with a two-line label beneath: small "TRAJECTORY: [current leg]" and larger "ON COURSE" status, underlined with a short amber rule
- Earth/Moon markers: small dot with outer ring, plus coordinate readout beneath each label (mock lat/long)

**Telemetry panel (overlaid on the lower portion of the scene)**
- Semi-transparent dark panel, thin border, scene visible faintly behind it
- 4 primary stat columns + rocket render:
  - Distance Remaining (value + unit + progress bar + max label)
  - Velocity (value + unit + progress bar + max label)
  - Elapsed Time (value + unit + progress bar + est. label)
  - Current Phase (value in accent amber + 6-stage mission stepper: Launch / Ascent / TLI / Coast / Approach / Landing, current stage highlighted)
  - A photographic-style rocket/shuttle render anchored to the panel's right edge
- Secondary footer row beneath a subtle divider: Vector, Altitude, Systems, Crew, Vessel — small label/value pairs, visually quiet, static (don't need to tick)

**Believability mechanic**
- Primary stat numbers (distance, velocity, elapsed time) tick on an interval (~every 2-3 seconds) with small, semi-random deltas — not a smooth countdown. Slight randomness is what sells "live" over "scripted."
- Progress bars and the mission stepper update to stay consistent with the ticking values (e.g. distance bar fills as distance decreases).
- No fast motion — consistent with the "slow, deliberate motion" principle in the art direction doc.

**Optional CTA**
- Not required for v1. If added later, a single low-key text button/link (e.g. "VIEW FULL TELEMETRY →") — should not compete with the panel's own information density.

## Design constraints (per `docs/art-direction.md`)
- Dark panel treatment (Space Black / Deep Graphite), warm white primary text, muted gray secondary/label text, Signal Amber accent for the live indicator, "On Course" status, progress bar fills, and current mission phase
- Squared corners, 2–4px radius max, thin (1px or less) borders/dividers
- Uppercase, letter-spaced micro-labels for all field labels — mission-signage voice, not SaaS dashboard labels
- Data reads as milestones/telemetry, not charts — no gauges, donuts, or dense analytics styling

## Implementation reference
See `docs/prompts/rocket-tracker-visual-upgrade-prompt.md` for the exact, ready-to-use implementation prompt (built against reference screenshots) covering every visual element above in implementation detail.

## Data
All values are mocked client-side — no real backend, no real spacecraft feed. Should be easy to swap for a real data source later if the product ever needs one, but v1 is fully self-contained.

## Responsiveness
This is a mobile-first site. The full console treatment must adapt gracefully to narrow viewports:
- Stack the 4 primary stat columns instead of a forced row
- The rocket render can shrink, reposition, or hide below a breakpoint if needed
- The secondary telemetry footer row can wrap or drop least-essential fields (Vector, Systems) on the smallest screens — Distance/Velocity/Phase stay visible at all sizes

## Out of scope (v1)
- Real orbital mechanics or accurate physics
- Multiple simultaneous missions/trackers
- User interaction beyond an optional CTA (no zoom, no drag, no mission switching)
- Persistent/sticky behavior — this is a single embedded moment, not a widget that follows scroll

## Status
Full-console design approved and superseding the earlier compact version (see `.claude/memory/decisions.md`, Sessions 4–6). Implementation prompt written; not yet confirmed as merged into the live site.
