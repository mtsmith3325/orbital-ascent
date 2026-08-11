# Feature — Lunar Trajectory Tracker

## What it is
A compact, believable "live" flight-tracker widget embedded mid-scroll on the homepage. It shows a mock active shuttle mission en route to the Moon — a small orbital visualization plus a handful of live-feeling telemetry stats. It is a **secondary, surprise moment**, not a full feature or dashboard — it should feel like something the user stumbled into, not something they navigated to.

## Why it exists
Reinforces the brand thesis from `docs/art-direction.md` — "space as an emerging infrastructure, not a fantasy." A tracker that feels real (even though it's mock data) does more to sell that idea than another paragraph of marketing copy. It also gives the brochure scroll a moment of surprise/delight between informational sections, per the brief's request for "big, bold, visionary, informative" — this is the *bold surprise* beat.

## Placement
**Embedded mid-scroll, between two brochure sections** (e.g. between the Orbital Flight section and the Lunar Flyby section) — not the hero, not a persistent sidebar, not gated behind a scroll-depth reveal. It should read as one more thing you encounter while scrolling, consistent with the rest of the brochure's pacing.

## Content & Behavior

**Header row**
- Small label: mission name (e.g. "ACTIVE MISSION · ARTEMIS CHARTER 04")
- Live indicator (e.g. "● LIVE") in accent amber

**Visual**
- Simple orbital path: Earth (left) → dashed trajectory arc → Moon (right)
- A marker positioned along the arc showing current mock progress
- Kept intentionally minimal — this is a mission-instrument sketch, not a realistic space render (per art direction: schematic over illustration)

**Telemetry row (4 stats)**
- Distance remaining (km)
- Velocity (km/h)
- Mission elapsed time (h/m)
- Current phase (e.g. "Coast," "Trans-lunar injection," "Mid-course correction") — shown in accent amber

**Believability mechanic**
- Numbers tick on an interval (~every 2-3 seconds) with small, semi-random deltas — not a smooth countdown. Slight randomness is what sells "live" over "scripted."
- Marker position can drift very slowly along the path, consistent with the "slow, deliberate motion" principle in the art direction doc — never fast or game-like.

**Optional CTA**
- A single low-key text button/link (e.g. "VIEW FULL TELEMETRY →") that can route into the contact funnel or a future full tracker page — not required for v1, can be omitted if it competes with the brochure's own CTAs.

## Design constraints (per `docs/art-direction.md`)
- Dark panel treatment (Space Black / Deep Graphite), warm white text, muted gray labels, Signal Amber accent only for the live indicator and current phase
- Squared corners, 2–4px radius max, thin (1px or less) borders
- Uppercase, letter-spaced micro-labels for stat headers — mission-signage voice, not SaaS dashboard labels
- No charts, gauges, or dense data viz — this is a milestone/telemetry read, consistent with "How close are we?" over "Look how much data we have"

## Data
All values are mocked client-side — no real backend, no real spacecraft feed. Should be easy to swap for a real data source later if the product ever needs one, but v1 is fully self-contained.

## Out of scope (v1)
- Real orbital mechanics or accurate physics
- Multiple simultaneous missions/trackers
- User interaction beyond the optional CTA (no zoom, no drag, no mission switching)
- Persistent/sticky behavior — this is a single embedded moment, not a widget that follows scroll

## Status
Concept previewed and approved. Not yet implemented as production component code — see `.claude/memory/decisions.md` (Session 4) for next steps.
