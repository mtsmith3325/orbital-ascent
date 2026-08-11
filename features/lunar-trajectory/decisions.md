# Decisions Log

A running log of key decisions and progress, updated each session. Keeping this alive across multiple sessions (not written once and abandoned) is part of the P303 "go further" criteria.

---

## Session 1 — [date]
**Status:** Brief finalized, repo scaffolded.

**Decisions made:**
- Industry: space tourism
- Product: P303 mobile sales-inquiry experience
- Persona: wealthy, self-funded adventure-seeker, impulsive/excited mindset
- Core flow: 3-step guided questionnaire → confirmation screen → sales agent hand-off
- Explicitly out of scope: payment/checkout, native app

**Open questions carried to next session:**
- Framework/styling/deployment stack
- Visual direction (imagery, palette, type)
- Copy/tone for questionnaire steps and confirmation screen

**Next session should:**
- Lock tech stack in `.claude/context.md`
- Start building questionnaire step 1 (interest area selection)

---

## Session 2 — [date]
**Status:** Core experience direction pivoted. BRIEF.md, README.md, and `.claude/context.md` updated.

**Decision made:**
- Reframed the primary experience from "quiz-first contact flow" to **digital brochureware**. The main experience is now a big, bold, visionary, informative scroll site (hero + per-offering sections + trust content).
- The 3-step quiz-style questionnaire from Session 1 is **retained but demoted** — it's now a secondary feature, only entered when a user taps a persistent "Talk to an Advisor" CTA, not the default landing experience.

**Why:** The quiz format is good for someone already in a contact/sales funnel, but as a *primary* landing experience it undersold the product — the brief needs to be visionary and informative first, transactional second.

**Impact on scope:**
- Adds real content-writing work: each offering (Orbital Flight / Lunar Flyby / Space Station Stay) now needs genuine informative copy, not just quiz-option labels
- `src/pages/` will need both brochure section views and the (unchanged) 3-step funnel views
- No change to what the funnel itself does once triggered

**Next session should:**
- Lock tech stack in `.claude/context.md`
- Draft brochure section content (copy + imagery direction) for the three offerings
- Decide sticky-bar vs. floating-button treatment for the "Talk to an Advisor" CTA

---

## Session 3 — [date]
**Status:** Art direction locked. `docs/art-direction.md` added; `.claude/context.md` updated to reference it.

**Decision made:**
- Adopted a full visual design system: "THE FUTURE, DOCUMENTED" — cinematic/institutional/optimistic/tactile/restrained, editorial-aerospace direction (closer to *For All Mankind* production design than a typical space-tech startup site).
- Locked color palette (space black, warm white, muted amber accent), typography approach (condensed uppercase display vs. neutral small body), photography treatment (documentary, desaturated, grainy — not polished CGI), UI language (industrial button copy, 2-4px radius max), data-as-milestones (not charts), and slow/deliberate motion principles.

**Why:** Needed a concrete, opinionated system before building brochure sections — otherwise implementation would default to generic "AI space startup" styling (gradients, glassmorphism, SaaS cards), which the brief explicitly wants to avoid.

**Impact on scope:**
- `src/styles/` will implement this system as design tokens (colors, type scale, radius, spacing)
- All button/CTA copy across both the brochure and the contact funnel needs to follow the industrial voice (e.g. "EXPLORE THE PROGRAM →")
- Photography sourcing/treatment becomes a real task — need real or well-styled placeholder imagery, not generic stock

**Next session should:**
- Lock tech stack (framework/styling library that can express this system cleanly)
- Select specific display/body fonts from the candidates listed
- Begin translating `docs/art-direction.md` into actual design tokens in `src/styles/`

---

## Session 4 — [date]
**Status:** New secondary feature specced: Lunar Trajectory Tracker. `docs/features/lunar-trajectory-tracker.md` added; `.claude/context.md` updated to reference it.

**Decision made:**
- Added a mock "live" flight-tracker widget as a surprise moment embedded mid-scroll on the homepage, between two brochure sections (not the hero, not persistent, not scroll-gated).
- Previewed as an interactive concept first before committing to build — approved direction: dark instrument-panel treatment, Earth→Moon arc with a drifting marker, 4-stat telemetry row (distance, velocity, elapsed time, phase), values tick with small semi-random deltas to read as "live" rather than scripted.

**Why:** Reinforces the "space as infrastructure, not fantasy" thesis from the art direction doc with a moment of surprise/delight, without breaking the brochure's editorial pacing or turning into a full dashboard feature.

**Impact on scope:**
- New file/spec only — no component code written yet
- Adds one new open decision: build this into `src/components/` (see context.md)
- Placement decided: mid-scroll between brochure sections (likely between Orbital Flight and Lunar Flyby sections, exact spot TBD when brochure content is drafted)

**Next session should:**
- Lock tech stack (still outstanding from Session 3)
- Draft brochure section content — needed before final placement of the tracker can be confirmed
- When ready, implement the tracker as a real component per its spec
