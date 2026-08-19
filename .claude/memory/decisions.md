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

---

## Session 5 — [date]
**Status:** Tracker visual spec significantly expanded based on a new reference mockup. `docs/prompts/rocket-tracker-visual-upgrade-prompt.md` added.

**Decision made:**
- The Lunar Trajectory Tracker is growing beyond the original "compact, small footprint" spec from Session 4. New reference design ("desired.png") calls for: full hero background imagery (Earth/Moon photographic scene), a waypoint/trajectory-status label on the arc, coordinate readouts under Earth/Moon markers, progress bars under primary stats, a 6-stage mission phase stepper, a rocket render, and a secondary telemetry footer row (vector, altitude, systems, crew, vessel).
- Wrote a detailed implementation prompt (for use in VS Code / Claude Sonnet 5) to bring the live component in line with this new reference.

**⚠️ Open tension flagged, not yet resolved:** This is now a much richer "mission console" than the original "surprise moment, not a full feature" framing in `docs/features/lunar-trajectory-tracker.md`. Need to decide: does this become the new spec (replacing "compact"), or should a smaller version persist for the homepage while this richer version lives elsewhere (e.g. its own page)? `docs/features/lunar-trajectory-tracker.md` has NOT been updated yet to reflect this — it still describes the smaller version. Do not treat that file as current without reconciling it against this session's decision first.

**Next session should:**
- Resolve the tension above — decide if the compact spec is superseded or if there are now two tracker treatments
- Update `docs/features/lunar-trajectory-tracker.md` to match whichever direction is chosen
- Confirm responsive/mobile behavior once implemented, since the reference design is desktop-proportioned and this is a mobile-first site

---

## Session 6 — [date]
**Status:** Scope tension from Session 5 resolved. `docs/features/lunar-trajectory-tracker.md` rewritten to match the full mission-console design; `.claude/context.md` updated to remove the outdated warning.

**Decision made:**
- The full mission-console tracker design (hero imagery, waypoint label, coordinate readouts, progress bars, phase stepper, rocket render, telemetry footer row) **replaces** the original compact spec entirely. There is one tracker, at full size, wherever it appears in the scroll — not a compact version plus a separate full version.

**Why:** Simpler to build and maintain one canonical version; the richness of the console design is what makes it a strong "surprise moment" in the first place, so shrinking it would undercut the feature's own reason for existing.

**Impact on scope:**
- `docs/features/lunar-trajectory-tracker.md` is now fully aligned with `docs/prompts/rocket-tracker-visual-upgrade-prompt.md` — no more conflicting specs in the repo
- Responsiveness work is now a real, non-trivial task (stacking 4 stat columns, handling the rocket render and footer row on small screens) since the full console is desktop-proportioned by nature

**Next session should:**
- Lock tech stack (still outstanding from Session 3)
- Draft brochure section content — needed before final placement of the tracker can be confirmed
- Implement the tracker component per the now-unified spec, running the implementation prompt in VS Code

---

## Session 7 — [date]
**Status:** Trajectory arc glow/gradient styling implemented as workable code. `docs/implementation/trajectory-tracker-glow-styling.md` added.

**Decision made:**
- Built exact HTML/CSS for the tracker's hero portion only (Earth/Moon scene, dashed arc, active point glow, center status text) matching a specific reference screenshot — layered per an 8-layer structure (base, Earth+glow, Moon, starfield, gold bloom, trajectory line, vignette, typography).
- Explicitly scoped to not touch the telemetry panel, global tokens, or any other component — this was a styling-only request, not a redesign.

**Why:** This reference image was more specific/refined than what was previously built ad hoc — worth capturing as reusable code rather than a one-off chat visual, since it'll be pasted directly into the real codebase.

**Impact on scope:**
- No spec changes — this implements the "hero orbital scene" portion of `docs/features/lunar-trajectory-tracker.md`, it doesn't change what that spec describes
- Introduces local CSS custom properties (`--tt-*`) as a placeholder; flagged in the doc that these should be swapped for real site tokens once the styling system is locked, to avoid duplicate color sources

**Next session should:**
- Lock tech stack (still outstanding — now blocking actual integration of this CSS into a real component)
- Once stack is locked, wire this code into the real tracker component and swap `--tt-*` placeholders for actual design tokens
- Confirm Earth/Moon asset paths against whatever actually exists in the project

---

## Session 8 — [date]
**Status:** First real code landed in the actual site repo (via Copilot/agent in VS Code). Trajectory arc/hero portion implemented in `src/main.js` + `src/styles/main.css` and pushed. This is the project's first genuine implementation milestone — everything before this session was planning/specs only.

**What was built:**
- Mission header band (mission label + amber "● LIVE" badge)
- Trajectory visual panel using `lunartracker-bg.jpg` as the background photo, with Earth and Moon rendered as **CSS radial gradients** (not photographic assets — see gap below), CSS starfield, dashed amber arc, and the 4-layer animated marker (bloom → outer ring → inner ring → core point)
- Status overlay ("TRAJECTORY: [live phase]" eyebrow + "ON COURSE" primary status + amber divider), eyebrow now updates dynamically with the live phase value instead of being static
- Edge vignette
- Telemetry row below — **left unchanged from the prior version** (see gap below)

**⚠️ Known gaps, not yet resolved:**
1. **Earth/Moon are CSS gradients, not real photography.** `earth.jpg`/`moon.jpg` don't exist in the project yet, so the agent substituted radial gradients. This works structurally but doesn't meet the "documentary photography over CGI" bar in `docs/art-direction.md`. Needs real photographic assets sourced and swapped in later — tracked as an open task, not resolved by this session.
2. **Telemetry panel still doesn't match the approved full spec.** `docs/features/lunar-trajectory-tracker.md` calls for a single row of 4 stats + progress bars + 6-stage mission stepper + rocket render + secondary telemetry footer row. What's live is still the older simpler stat grid. This session was scoped to the hero/arc portion only — the panel upgrade is a separate, not-yet-started task.

**Why this matters for the P303 review:** this is the first evidence of dimension 1 ("Does it work?") actually being addresseable — there's now real code live in a real repo, not just documentation. Still far from a full deployed brochure site, but the tracker feature specifically has moved from spec to implementation.

**Next session should:**
- Source or generate real Earth/Moon photographic assets and swap out the CSS gradients
- Implement the telemetry panel upgrade (progress bars, stepper, rocket render, footer row) to close gap #2
- Take a fresh screenshot of the live result to confirm the arc/hero fix actually resolved the oversized-planet issue from the last review
- Still outstanding from earlier sessions: lock remaining tech-stack decisions, draft brochure section content, deploy the site somewhere live
