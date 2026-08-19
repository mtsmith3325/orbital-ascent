# Prompt: Sync P303 Planning Scaffolding Into This Repo

Paste everything below into Claude Code / Copilot in VS Code, at the root of your actual project repo.

---

Create the following files in this repository at the exact paths given, with the exact content given. If a file already exists at that path, overwrite it entirely with this content — do not merge, do not ask, do not summarize. Create any parent directories that don't exist (`.claude/`, `.claude/memory/`, `docs/`, `docs/features/`, `docs/prompts/`, `docs/implementation/`). After creating all files, run `git add` on all of them and commit with the message: "Sync AI scaffolding and planning docs into repo".

## File: `BRIEF.md`

```
# Orbital Ascent — Sales Inquiry Mobile Experience (P303)

## Summary
A mobile-first responsive web app for **Orbital Ascent**, a space tourism company. The primary experience is big, bold, visionary digital brochureware — informative, cinematic content that sells the dream of space travel to a wealthy, self-funded adventure-seeker. A secondary, always-available contact funnel lets someone who's already sold quickly get connected to a real sales agent, without losing momentum to a clunky form.

## User
**Persona:** Wealthy adventure-seeker. Already travels extensively, self-funds their trips, doesn't need convincing that experiences are worth paying for — just needs a fast, frictionless way to act on impulse.

**Context triggers (any of these):**
- Scrolling social media, sees a launch video or ad
- Killing time — commuting, waiting in line
- Just left a space-tourism event or expo, still riding the high

## The Task
The primary experience is **digital brochureware** — a big, bold, visionary, informative scroll experience that sells the dream of space travel. A secondary, always-available path lets someone who's already sold jump into a short contact funnel that ends with **an agent having their info and reaching out**.

## How It Works

### Primary: Brochureware (the main experience)
A scroll-driven, visual-first mobile site, not a form. Structure:
1. **Hero** — big, cinematic launch/orbital imagery or video, minimal copy, immediate emotional hook
2. **Experience sections** — one per offering (Orbital Flight / Lunar Flyby / Space Station Stay), each genuinely informative: what it is, what it feels like, duration, what's included — not just marketing fluff
3. **Trust/credibility content** — e.g. safety record, past flights, testimonials (can be invented/mocked)
4. Throughout: a persistent, low-key entry point (sticky bottom bar or floating button — "Talk to an Advisor") that never interrupts the scroll but is always reachable

### Secondary: Contact funnel (triggered from the brochure, not the default landing)
A short, tap-through quiz-style flow — appropriate *here* because the user has already self-selected into "I want to talk to someone":
1. What draws you? (orbital flight / lunar flyby / space station stay / not sure — surprise me)
2. Rough timeline (this year / next 1-2 years / just exploring)
3. Contact info (name, phone, best time to reach)
4. Confirmation screen — sets expectation ("An Orbital Ascent advisor will reach out within X hours") and reinforces the fantasy (e.g. a striking visual, not just a "thanks")

## Design Direction
- Premium, cinematic feel — think luxury travel meets aerospace, not sterile SaaS
- Brochure sections should feel like a high-end travel site: large imagery, generous whitespace, confident typography, real informative content — not a landing page stub
- Contact funnel keeps its own pace once triggered: large tap targets, minimal typing, fast forward motion (no dead-end screens)
- Should work convincingly one-handed, on the go, in bright daylight (outdoor-readable contrast)

## Data
- Mock/fake agent-matching and confirmation logic — no real backend needed
- Data can be invented (flight packages, timelines, etc.)

## Out of Scope
- No actual payment or booking checkout — this is a lead-gen/inquiry flow only
- No native app — mobile-responsive web only

## Success Criteria (Protogen P303 Review — actual rubric)
Reviewed on three dimensions, each Approve/Redo:
1. **Does it work?** Site must be live and accessible; core flows (brochure scroll + contact funnel) work end to end; build matches this BRIEF.md. *(Go further: edge cases/empty states handled, works across screen sizes.)*
2. **Is the repo set up right?** AI scaffolding organized (`.claude/`), README.md + LICENSE in repo root, sensible folder structure, commit history shows real progress over time with descriptive messages. *(Go further: context docs updated across multiple sessions, specs match what's actually built.)*
3. **Does it look right and show your thinking?** Visual design fits the space-tourism industry and target persona; a first-time user could orient themselves without help; BRIEF.md reads like a plan, not a write-up after the fact. *(Go further: visual hierarchy/spacing/typography feel considered, BRIEF.md shows a real call that's visible in the build.)*

Note: dimensions 1 and 3 both require a **live, deployed site** — no live build means an automatic Redo on both, regardless of documentation quality.
```

---

## File: `README.md`

```
# Orbital Ascent — Sales Inquiry Experience

## Overview
A mobile-first responsive web app for Orbital Ascent, a space tourism company. The **primary experience is digital brochureware** — a big, bold, visionary scroll experience that sells the dream of space travel to a wealthy, self-funded adventure-seeker. A **secondary contact funnel**, reachable at any point via a persistent CTA, lets someone who's already sold quickly get connected to a real sales agent.

## How It Works

**Primary — Brochureware (the main experience):**
- Cinematic hero (launch/orbital imagery or video, minimal copy)
- Informative sections per offering — Orbital Flight, Lunar Flyby, Space Station Stay — each explaining what it is, what it feels like, duration, and what's included
- Trust/credibility content (safety record, past flights, testimonials — mocked)
- A persistent, low-key "Talk to an Advisor" entry point (sticky bottom bar or floating button) available throughout the scroll, never interrupting it

**Secondary — Contact funnel (triggered from the brochure, not the default landing):**
- A 3-step tap-through flow (interest area → timeline → contact info) — appropriate here because the user has already self-selected into "I want to talk to someone"
- A confirmation screen closes the loop, setting expectations for follow-up and reinforcing the fantasy visually
- All flight/package and agent-matching data is mocked — no real backend or payment processing
- Built mobile-first: large tap targets, minimal typing, outdoor-readable contrast

**Why this order matters:** the brochure does the persuading; the quiz-style funnel is just a well-designed off-ramp for someone already sold. It is not the default landing experience.

## Tech Stack
- [Framework — e.g. React + Vite / Vue] — *update once selected*
- [Styling — e.g. Tailwind CSS] — *update once selected*
- Deployed via [Vercel / Netlify] — *update once selected*

## Getting Started
```bash
# install dependencies
npm install

# run locally
npm run dev
```
*(Commands will be finalized once the tech stack is locked in — see .claude/context.md)*

## Project Structure
```
orbital-ascent-p303/
├── README.md              — this file
├── LICENSE                — MIT license
├── BRIEF.md                — project plan / brief (read this first)
├── .claude/                — AI scaffolding & context for this project
│   ├── context.md          — persistent context for AI coding sessions
│   └── memory/
│       └── decisions.md    — running log of key decisions over time
├── src/
│   ├── components/         — reusable UI components
│   ├── pages/               — screen-level views (brochure sections + contact funnel steps + confirmation)
│   ├── data/                 — mock data (flight packages, timelines, etc.)
│   └── styles/               — global styles / design tokens
├── public/                  — static assets (images, icons)
└── docs/                     — supplementary design notes, references
```

## Status
Scaffolding stage — see `.claude/memory/decisions.md` for progress log.
```

---

## File: `LICENSE`

```
MIT License

Copyright (c) 2026 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## File: `.claude/context.md`

```
# Project Context — Orbital Ascent P303

Read `BRIEF.md` at the repo root first — this file supplements it with working context for AI-assisted coding sessions.

## What this project is
P303 (Protogen curriculum) — a mobile-first responsive web app. NOT a native app.

**⚠️ This is brochureware first, contact funnel second.** The primary experience a user lands on is a scroll-driven, informative brochure selling the Orbital Ascent offerings. The 3-step quiz-style contact flow is a *secondary* feature, only entered when the user taps a persistent "Talk to an Advisor" CTA. Do not build the quiz as the landing page or default screen — that was an earlier direction and has been superseded (see decisions log, Session 2).

## Design tone
Full art direction spec lives in `docs/art-direction.md` — read it before writing any UI. Short version: cinematic/institutional/optimistic/tactile/restrained, "NASA field manual from the future." Dark palette (space black + warm white + muted amber accent), condensed-uppercase display type against small neutral body type, documentary-style photography, industrial button language, milestone-style data (not charts), slow/deliberate motion. Do not default to generic "AI space" gradients, glassmorphism, or SaaS card-grid layouts.
- Do not build payment/checkout — out of scope per BRIEF.md
- Do not build a native app shell — this is responsive web only
- **The landing/default experience is the brochure, not the quiz.** The quiz only appears after the user taps the persistent CTA.
- Brochure sections must be genuinely informative (what the offering is, what it feels like, duration, what's included) — not just marketing copy or a stub
- Keep the contact funnel itself to 3 steps + 1 confirmation screen once triggered — resist scope creep into a full booking system
- Follow `docs/art-direction.md` exactly for color, type, imagery treatment, button copy, and motion — do not improvise a different visual system

## Persona to design for
Wealthy, self-funded adventure-seeker, already convinced experiences are worth paying for. Mindset when opening the app: excited, impulsive, browsing. Needs speed and minimal friction, not persuasion.

## Open decisions (update as they're made)
- [ ] Framework choice (React/Vite vs. Vue)
- [ ] Styling approach (Tailwind vs. custom CSS) — must be able to express art-direction spec (condensed display type, tight color palette, minimal border radius)
- [ ] Deployment target (Vercel vs. Netlify)
- [ ] Specific display/body font selection (see candidates in `docs/art-direction.md`)
- [ ] Brochure section content — copy and imagery direction for Orbital Flight / Lunar Flyby / Space Station Stay
- [ ] Exact placement/behavior of the persistent "Talk to an Advisor" CTA (sticky bottom bar vs. floating button)
- [ ] Implement the Lunar Trajectory Tracker as real component code (see `docs/features/lunar-trajectory-tracker.md`) — spec approved, not yet built

## Known secondary features
- **Lunar Trajectory Tracker** — full mission-console widget (hero orbital scene, telemetry panel with progress bars, mission stepper, rocket render, telemetry footer row), embedded mid-scroll between brochure sections at full size — not a minimized teaser. Full spec: `docs/features/lunar-trajectory-tracker.md`. Implementation prompt: `docs/prompts/rocket-tracker-visual-upgrade-prompt.md`.
  **Status as of Session 8:** hero/arc portion is now live in `src/main.js` + `src/styles/main.css` (real code, not just spec). Earth/Moon are currently CSS gradient placeholders, not real photography — swap when assets are sourced. Telemetry panel below is still the older simpler layout and needs the progress-bar/stepper/rocket-render/footer-row upgrade to match spec.

## Session log
See `.claude/memory/decisions.md` for a running log of decisions and progress across sessions. Update it at the end of each working session — this is part of the P303 grading criteria (scaffolding should show real progress over time, not be written once and abandoned).
```

---

## File: `.claude/memory/decisions.md`

```
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
**Status:** First real code landed in the actual site repo (via Copilot/agent in VS Code). Trajectory arc/hero portion implemented in `main.js` + `main.css` and pushed. This is the project's first genuine implementation milestone — everything before this session was planning/specs only.

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
```

---

## File: `docs/art-direction.md`

```
# Art Direction — Orbital Ascent

**Thesis: THE FUTURE, DOCUMENTED.**

This is the styling foundation for the brochureware primary experience (see `BRIEF.md`). Reference direction: editorial / cinematic / aerospace-institutional — closer to *For All Mankind* production design and concept art (Bryce Wymer, Glen Hall) than a typical "space startup" site.

The mockup is built around three ideas:
- Space as an emerging infrastructure, not a fantasy
- Editorial storytelling over dashboard UX
- Premium aerospace artifact rather than glossy sci-fi

---

## 01 — Visual Character

**Cinematic · institutional · optimistic · tactile · restrained**

Aim for something that feels like a **NASA field manual from the future.**

**Avoid:**
- Generic "AI space" gradients
- Neon blue/purple
- Excessive glassmorphism
- Typical SaaS card grids
- Hyper-realistic sci-fi UI

---

## 02 — Color

| Token | Value | Direction |
|---|---|---|
| Space Black | `#080A09` | Primary background |
| Deep Graphite | `#111412` | Secondary surface |
| Warm White | `#E8E4D8` | Primary text/foreground |
| Muted Gray | `#858782` | Secondary text |
| Moon Silver | `#B7B7AC` | Tertiary/borders |
| Signal Amber | `#C8A96B` | Accent — use sparingly |

**Distribution:** roughly 75% black / 15% warm white / 8% gray / 2% accent.

The warm white is important — pure `#FFFFFF` pushes the design toward modern tech. The warmer tone reads as archival, aerospace, editorial.

---

## 03 — Typography

Two-typeface system. The contrast between monumental display type and quiet technical information is the point — not the exact fonts chosen.

**Display**
- Condensed grotesk
- Uppercase
- Tight leading, slightly expanded tracking
- Large type should feel like mission signage (e.g. "STEP FOOT / ON THE MOON")
- Candidates: Archivo Narrow, DIN Condensed, Bebas Neue

**Body / UI**
- Neutral grotesk
- Small, highly legible, generous line height
- Candidates: Inter, Helvetica Now, Neue Haas Grotesk

---

## 04 — Photography

Photography carries most of the emotional weight of the experience.

**Use:** lunar landscapes, astronaut silhouettes, Earth from orbit, launch photography, spacecraft hardware, training environments, infrastructure, human-scale moments.

**Treatment:** dark → desaturated → slightly grainy → high contrast. Avoid overly polished CGI wherever possible.

Should read as: *documentary photography from a future that hasn't happened yet.*

---

## 05 — Layout

**Fundamental principle: BIG IMAGE → BIG IDEA → SMALL DATA**

Not: `Nav → hero → cards → cards → cards`

Instead, a section reads like:
```
STEP FOOT
ON THE MOON

[image]

Humanity is building the infrastructure.

2028
Lunar landing infrastructure
72% complete

WHAT'S HAPPENING NOW
[small, highly editorial timeline]
```

The experience should feel like a brochure / exhibition / museum publication — never a product dashboard. This governs how brochure sections (Orbital Flight / Lunar Flyby / Space Station Stay) should be built.

---

## 06 — UI Language

Buttons and CTAs feel industrial and precise, not casual SaaS.

| Instead of | Use |
|---|---|
| Explore Now | EXPLORE THE PROGRAM → |
| Learn More | VIEW PROGRESS → |
| Sign Up | JOIN THE LIST → |

This applies to the "Talk to an Advisor" CTA and contact-funnel labels too — keep the industrial voice consistent even inside the secondary quiz flow.

**Form:** thin borders, squared corners, minimal radius — 2–4px corner radius maximum.

---

## 07 — Data Visualization

Data should feel like **mission telemetry**, not business analytics. It should answer *"How close are we?"* — not *"Look how much data we have."*

**Good:**
```
72%             Q2 2028          09              05
INFRASTRUCTURE  NEXT TARGET      PROGRAMS ACTIVE DESTINATIONS
COMPLETE
```

**Avoid:** pie charts, donuts, gauges, rainbow charts, dense analytics dashboards.

Milestones over metrics.

---

## 08 — Motion

Very slow, deliberate movement — museum installation + aerospace control room, not Star Wars HUD. Nothing should feel "gamey."

- Earth slowly rotating
- Subtle image parallax
- Timeline nodes illuminating
- Numbers incrementing
- Grain moving imperceptibly
- Crosshair / targeting marks
- Horizontal scanning transitions

---

## Summary Table

| Dimension | Direction |
|---|---|
| Visual | Dark, cinematic, tactile |
| Typographic | Monumental headlines + technical microcopy |
| Color | Black / warm white / muted metal / restrained amber |
| Imagery | Documentary over CGI |
| UI | Industrial, precise, minimal |
| Data | Milestones over metrics |
| Motion | Slow, intentional, physical |
| Voice | Confident, optimistic, factual |
| Experience | Editorial storytelling → evidence → action |

---

## Notes for implementation
- This governs the **brochureware primary experience** end to end (hero, offering sections, trust content).
- The secondary contact-funnel (quiz + confirmation) should stay visually consistent with this system — same type, color, button language — but can be slightly more compact/functional since it's a shorter, task-focused detour, not the main editorial experience.
- See `.claude/context.md` for how this connects to open implementation decisions (font/library choices, deployment).
```

---

## File: `docs/protogen-rubric.md`

```
**Case Study Ideas & Instructions**

**Before you get started**

These three case study guides are for designers who\'ve completed P100
and P200 and are working toward Protogen Certification. Each one
describes what you\'re building and why, and gives you a table of
industry examples to help you get oriented. They are suggestions, not
requirements.

Think of these as your chance to show what you know, in an industry that
matters to your work.

**You choose the industry**\
There\'s no required list. Work in financial services? Build something
for that world. More curious about healthcare or retail? Go there. The
examples in each guide cover Slalom\'s practice areas, but they\'re just
a starting point. Mix, adapt, or ignore them entirely.

**How to use the examples**\
Each guide includes a table of example users, scenarios, and industry
example data. If you\'re not sure where to start, pick a row that feels
close to your practice and run with it. None of them quite fit? That's
fine. Define your own and go. You are not required to stick to these
examples. The provided examples are suggestions because getting started
is often the hardest step.

**How you\'ll be reviewed**\
All three case studies are reviewed the same way: three dimensions and a
simple Pass or Redo outcome. The next section walks you through exactly
what reviewers look for in each one.

***Need More Support?** Join Protogen Office Hours on Wednesdays at 3 pm
ET / 12 pm PT. [Click
here](https://twodegrees1.sharepoint.com/:u:/r/teams/SlalomCX236/Shared%20Documents/General/02.%20Sub-Capabilities/02.%20Experience%20Strategy%20and%20Design/Design%20Innovation/Protogen/Learner%20Materials/Office%20Hours/Protogen%20Office%20Hours.ics?csf=1&web=1&e=vpGVca)
to download the calendar invite if you don't have it already.*

**How you\'ll be reviewed --- Case Studies (P301, P302, P303)**

Every case study is reviewed across three areas. You\'ll get an Approve
or a Redo on each one. A Redo always comes with specific feedback so you
know exactly what to fix.

**Does it work?**

*Open the site. Does it do what it was supposed to do?*

Your reviewer will open your deployed site and test it against the
Project Brief you chose. This one\'s the most concrete --- either the
key flows work, or they don\'t. Remember, it's recommended that you
password-protect the site you create.

+-------------+--------------------------------------------------------+
| **Approve** | 1.  The site is live and accessible                    |
|             |                                                        |
|             | 2.  Core flows work end to end                         |
|             |                                                        |
|             | 3.  The build reflects the industry and user you       |
|             |     > described in your BRIEF.md                       |
+=============+========================================================+
| **Redo**    | 4.  The site doesn\'t load or can\'t be reviewed       |
|             |                                                        |
|             | 5.  Key flows are broken or incomplete                 |
|             |                                                        |
|             | 6.  The build doesn\'t match the Project Brief you     |
|             |     > submitted                                        |
+-------------+--------------------------------------------------------+
| **Go        | 7.  Edge cases and empty states are handled            |
| further**   |     > gracefully, not just the happy path              |
|             |                                                        |
|             | 8.  The experience works well across screen sizes      |
+-------------+--------------------------------------------------------+

**Is the repo set up right?**

*Open GitHub. Is the AI scaffolding in place and does the history show
real work?*

Your reviewer isn\'t grading your code line by line --- they\'re
checking that your repo is organized, your AI scaffolding is in place,
and your commit history shows real work happening over time. Think of
this as your working environment, not just your code.

AI scaffolding is the set of files and folders that help your AI tools
understand your project --- your memory bank, context docs, BRIEF.md, or
your .claude or .copilot config directory. Everything you learned to set
up in P100 and P200 should be here.

+-------------+--------------------------------------------------------+
| **Approve** | 9.  Your AI scaffolding is present and organized ---   |
|             |     > context docs in a logical place, not scattered   |
|             |                                                        |
|             | 10. README.md and LICENSE are in the root of your repo |
|             |                                                        |
|             | 11. Folder structure makes sense --- someone else      |
|             |     > could find their way around                      |
|             |                                                        |
|             | 12. Commit history shows real progress over time, not  |
|             |     > one big push at the end                          |
|             |                                                        |
|             | 13. Commit messages are descriptive, not just          |
|             |     > \'update\' or \'fix\'                            |
+=============+========================================================+
| **Redo**    | 14. No AI scaffolding, no context docs, no config      |
|             |     > directory --- nothing                            |
|             |                                                        |
|             | 15. No README, or it\'s empty                          |
|             |                                                        |
|             | 16. Repo is a mess --- no structure, unrelated files,  |
|             |     > no way to tell what\'s what                      |
|             |                                                        |
|             | 17. One commit, or commit messages that tell you       |
|             |     > nothing                                          |
+-------------+--------------------------------------------------------+
| **Go        | 18. Context docs show they were updated across         |
| further**   |     > multiple sessions, not just written once and     |
|             |     > left                                             |
|             |                                                        |
|             | 19. Your BRIEF.md and additional specs are in the repo |
|             |     > and actually match what you built                |
+-------------+--------------------------------------------------------+

**Does it look right and show your thinking?**

*Does the design fit the industry? Does your BRIEF.md show you planned
it?*

Your reviewer will look at your site and your BRIEF.md and ask: does
this feel like it was designed for a specific person in a specific
industry, or does it feel generic? And does the BRIEF.md show that the
design was planned, not just described after the fact?

+-------------+--------------------------------------------------------+
| **Approve** | 20. The visual design fits the industry --- layout,    |
|             |     > color, and tone match the context you chose      |
|             |                                                        |
|             | 21. A first-time user in your target industry could    |
|             |     > orient themselves without help                   |
|             |                                                        |
|             | 22. Your BRIEF.md is present and connects to what you  |
|             |     > actually built --- it reads like a plan, not a   |
|             |     > description                                      |
+=============+========================================================+
| **Redo**    | 23. The design doesn\'t reflect the industry --- it    |
|             |     > looks like a generic template                    |
|             |                                                        |
|             | 24. The site is confusing or hard to navigate          |
|             |                                                        |
|             | 25. No BRIEF.md, or the BRIEF.md has nothing to do     |
|             |     > with what you built                              |
+-------------+--------------------------------------------------------+
| **Go        | 26. Design decisions are evident and intentional ---   |
| further**   |     > visual hierarchy, spacing, and typography all    |
|             |     > feel considered                                  |
|             |                                                        |
|             | 27. Your BRIEF.md shows genuine planning: you made a   |
|             |     > call, and you can see it in the build            |
+-------------+--------------------------------------------------------+

***Need More Support?** Join Protogen Office Hours on Wednesdays at 3 pm
ET / 12 pm PT. [Click
here](https://twodegrees1.sharepoint.com/:u:/r/teams/SlalomCX236/Shared%20Documents/General/02.%20Sub-Capabilities/02.%20Experience%20Strategy%20and%20Design/Design%20Innovation/Protogen/Learner%20Materials/Office%20Hours/Protogen%20Office%20Hours.ics?csf=1&web=1&e=vpGVca)
to download the calendar invite if you don't already have it.*

+-----------------------------------------------------------------------+
| **P301 --- Operational dashboard**                                    |
|                                                                       |
| *Build a dashboard that gives the right person the right              |
| information.*                                                         |
+-----------------------------------------------------------------------+

**What you\'re building\
**A good dashboard doesn\'t just show data \-- it helps someone act
without digging through a spreadsheet. Think about who\'s looking at it
and what they need to know right now. What would make their morning
easier? What would tell them something\'s off before it becomes a
problem?

Pick any industry and any role. If you\'re not sure where to start, the
table below has examples across Slalom\'s industries.

**Industry examples\
**Not sure where to start? Pick a row that\'s close to your work and run
with it. These are here to spark ideas. You don\'t have to stick to them
exactly.

  -----------------------------------------------------------------------
  **Industry**            **Example user**        **Example data**
  ----------------------- ----------------------- -----------------------
  Financial Services      Portfolio analyst or    Account balances,
                          branch operations       transaction volume,
                          manager                 risk flags, regulatory
                                                  alerts

  Healthcare              Clinical operations     Patient volume, bed
                          lead or department      occupancy, wait times,
                          director                staffing levels

  Life Sciences           Supply chain or MedTech Inventory levels,
                          operations manager      shipment status, device
                                                  field events, quality
                                                  holds

  Public & Social Impact  Program officer or case Case load, outcome
                          management supervisor   metrics, grant
                                                  disbursements, service
                                                  utilization

  Manufacturing           Plant manager or        Line throughput,
                          operations director     downtime events, defect
                                                  rates, shift
                                                  utilization

  Retail & Consumer Goods Category manager or     Sales by SKU, foot
                          store operations lead   traffic, promo lift,
                                                  inventory turn

  Energy & Natural        Field operations or     Asset uptime, energy
  Resources               sustainability manager  output, emissions data,
                                                  harvest yield

  Media & Communications  Content strategy or     Content views,
                          audience insights       subscriber churn, ad
                          manager                 revenue, engagement
                                                  rate
  -----------------------------------------------------------------------

+-----------------------------------------------------------------------+
| **P302 --- Interactive data story**                                   |
|                                                                       |
| *Pick an industry, find something interesting in the data, and help   |
| someone understand it.*                                               |
+-----------------------------------------------------------------------+

**What you\'re building\
**Data gets ignored all the time \-- not because it isn\'t useful, but
because no one took the time to make it mean something. An interactive
data story changes that. You\'re not just displaying numbers; you\'re
building a narrative around them. What\'s the trend? What\'s surprising?
What should someone walk away understanding that they didn\'t before?

The story is the thing. Interaction \-- filters, toggles, animations \--
is just icing. Start with a point of view, then figure out how to show
it.

Use invented or simplified data. You\'re a designer, not a data engineer
\-- the goal is the story and how it\'s told, not the dataset behind it.

**Industry examples\
**Not sure where to start? Pick a row that\'s close to your work and
look for the angle \-- the trend that\'s worth explaining, the gap
that\'s worth surfacing, the pattern that would surprise someone.

  -----------------------------------------------------------------------
  **Industry**            **Example audience**    **Example data angles**
  ----------------------- ----------------------- -----------------------
  Financial Services      Retail banking customer Loan approval rates by
                          or investor             demographic, portfolio
                                                  performance over time,
                                                  fraud patterns

  Healthcare              Patient, caregiver, or  Readmission rates by
                          health system           condition, staffing
                          administrator           versus patient
                                                  outcomes, cost of care
                                                  trends

  Life Sciences           Supply chain manager or Device recall
                          clinical researcher     timelines, trial
                                                  enrollment trends,
                                                  distribution
                                                  bottlenecks

  Public & Social Impact  Community member,       Service utilization
                          program officer, or     gaps, recidivism
                          policy advocate         trends, grant impact
                                                  over time

  Manufacturing           Operations lead or      Defect rates by shift,
                          plant manager           downtime patterns,
                                                  energy use versus
                                                  output

  Retail & Consumer Goods Category buyer or store Seasonal sales
                          operations lead         patterns, promo lift by
                                                  SKU, foot traffic
                                                  versus conversion

  Energy & Natural        Sustainability manager  Emissions trends,
  Resources               or field operations     energy output by asset,
                          lead                    harvest yield versus
                                                  weather

  Media & Communications  Content strategist or   Subscriber growth and
                          audience insights       churn, content
                          manager                 performance by format,
                                                  ad revenue trends
  -----------------------------------------------------------------------

+-----------------------------------------------------------------------+
| **P303 --- Mobile experience**                                        |
|                                                                       |
| *Build a mobile-first web experience for someone doing a specific     |
| task on their phone*                                                  |
|                                                                       |
| ***Note**: This is a responsive web app, not a native mobile app.     |
| React Native, Flutter, Kotlin, and Swift are out of scope, although   |
| you're welcome to attempt a native app.*                              |
+-----------------------------------------------------------------------+

**What you\'re building\
**Designing for mobile isn\'t just about making things smaller. It\'s a
completely different context. One hand. Glancing at a screen between
tasks. Maybe outside, maybe on a job site. Your build should do one
thing well for someone who\'s probably not sitting at a desk.

Pick any industry and any mobile scenario. The table below includes
examples across Slalom\'s industries as a starting point.

**Industry examples\
**Not sure where to start? Pick a row that feels relevant to your work.
The more specific the task, the better.

  -----------------------------------------------------------------------
  **Industry**            **Example user**        **Example task**
  ----------------------- ----------------------- -----------------------
  Financial Services      Retail banking customer Account summary,
                          or independent advisor  transaction history,
                                                  alerts, appointment
                                                  scheduling

  Healthcare              Patient or caregiver    Appointment scheduling,
                                                  care instructions,
                                                  symptom check-in,
                                                  provider messaging

  Life Sciences           Field service           Device status,
                          technician or clinical  maintenance schedule,
                          study coordinator       protocol reminders,
                                                  incident logging

  Public & Social Impact  Benefits recipient or   Eligibility check,
                          community services      service locator, case
                          client                  status, document upload

  Manufacturing           Shift worker or floor   Work order status,
                          supervisor              safety checklist,
                                                  downtime logging, shift
                                                  handoff notes

  Retail & Consumer Goods Retail associate or     Loyalty points,
                          loyalty member          personalized offers,
                                                  store locator, purchase
                                                  history

  Energy & Natural        Field crew member or    Asset check-in,
  Resources               sustainability          incident report, route
                          coordinator             map, compliance task
                                                  list

  Media & Communications  Subscriber or content   Content feed,
                          creator                 subscription
                                                  management, upload
                                                  queue, engagement
                                                  summary
  -----------------------------------------------------------------------
```

---

## File: `docs/features/lunar-trajectory-tracker.md`

```
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
```

---

## File: `docs/prompts/rocket-tracker-visual-upgrade-prompt.md`

```
# Prompt: Rocket Locator Visual Upgrade

Paste everything below into Claude Sonnet 5 in VS Code, with `current.png` and `desired.png` attached.

---

Find the rocket/mission tracker component currently on the homepage (it renders a dashed Earth-to-Moon trajectory line, a distance/velocity/elapsed-time/phase readout, and ticks values on an interval). I've attached two screenshots: `current.png` (what's live now) and `desired.png` (the target design). Update the component's markup and styles so it matches `desired.png` exactly. Do not change the underlying data/tick logic — this is a visual and layout upgrade only.

## What needs to change, area by area

**1. Background — hero imagery, not flat black**
Replace the flat black background with a full-bleed photographic-style hero: Earth (with visible city lights and blue atmospheric glow) anchoring the left edge, the Moon (cratered, lit from the upper-left) anchoring the right edge, a scattering of small stars across the black space between them, and a soft vignette darkening the top and bottom edges of the frame. If a real photographic asset isn't available, use a high-quality placeholder/gradient treatment that reads as Earth/Moon at this stage — flag this as a placeholder needing a real asset later, don't block on sourcing final imagery now.

**2. Waypoint label on the trajectory arc**
The dashed arc's midpoint currently has just an amber dot. Add a small glowing ring treatment around that dot (radial glow, amber), and below it add two lines of centered text:
- Small letter-spaced label: `TRAJECTORY: TRANSLUNAR INJECTION`
- Larger letter-spaced status: `ON COURSE`
- A short thin amber underline beneath `ON COURSE`

**3. Earth/Moon markers**
Currently plain filled dots. Change to a small dot with a thin outer ring (concentric circle treatment), and add coordinate readout text beneath each label:
```
EARTH                          MOON
0°0'0" N                       0°0'0" N
0°0'0" E                       0°0'0" E
```
Keep these small, muted-gray, letter-spaced — secondary information, not competing with the main labels.

**4. Stats panel container**
Currently the stats sit in the same flat surface as the orbit diagram with just a horizontal divider above them. Change this to a distinct panel: a semi-transparent dark card (allowing the hero background to show through slightly) with a thin border, sitting over the lower portion of the frame — like an instrument panel overlaid on the scene, not a separate section below it.

**5. Primary stat columns — add progress bars and restructure to 4 columns + rocket render**
Currently: 2x2 stacked grid (Distance/Velocity, then Elapsed Time/Phase), no progress indicators.
Change to: a single row of 4 columns — **Distance Remaining, Velocity, Elapsed Time, Current Phase** — followed by a large photographic-style rocket/shuttle render anchored to the right edge of the panel (angled, engines lit, as in the reference).

For the first three columns (Distance Remaining, Velocity, Elapsed Time), add:
- The label (small, uppercase, muted gray)
- The large value (as now)
- The unit (small, muted gray)
- A thin horizontal progress bar beneath, filled proportionally in amber, with a small right-aligned max/target label next to it (e.g. `227,048` for distance at 100%, `MAX 11,186` for velocity, `EST 72:00` for elapsed time) — use sensible values derived from the existing mock data, don't hardcode these as unrelated to the live-ticking numbers.

For **Current Phase**, instead of a progress bar, add a horizontal 6-stage mission stepper beneath the value:
```
LAUNCH — ASCENT — TLI — COAST — APPROACH — LANDING
```
Rendered as small dots connected by a thin line, with the current stage's dot and label highlighted in amber (matching whatever phase value the component currently tracks — likely "Coast" in the mock data). Update the stepper's highlighted stage dynamically if/when the phase value changes.

**6. Secondary telemetry footer row**
Add a new thin row beneath the primary stats row (still inside the panel, below a subtle divider), with 5 small label/value pairs separated by vertical dividers:
```
VECTOR          ALTITUDE         SYSTEMS         CREW         VESSEL
0.712 AU        218,392 KM       NOMINAL         4            ORBITAL ASCENT
```
Keep this row visually quiet — smaller text, muted labels — it's supplementary detail, not a primary readout. These can be static mock values; they don't need to tick like the primary stats.

## Typography & color
Follow the project's existing design tokens if `docs/art-direction.md` or a design-tokens file exists in this repo — use those exact color/type values rather than inventing new ones. If none exist, match what's visible in `desired.png`: near-black background, warm off-white primary text, muted gray secondary/label text, and a warm amber accent (used for the live indicator, "On Course" status, progress bar fills, and the current mission phase). Uppercase, letter-spaced micro-labels throughout for anything functioning as a field label. Minimal border radius (2–4px), thin 1px borders/dividers.

## Responsiveness
This site is mobile-first — the current component likely already has mobile behavior; preserve it. On narrow viewports:
- Stack the 4 primary stat columns instead of forcing them into a row
- The rocket render can shrink, move below the stats, or be hidden below a certain breakpoint if it doesn't fit gracefully — use your judgment, but don't let it cause horizontal overflow
- The secondary telemetry footer row can wrap to two lines or hide the least-essential fields (Vector, Systems) on the smallest screens if needed — Distance/Velocity/Phase are the priority fields to always keep visible

## What NOT to change
- Don't touch the interval/tick logic that updates the mock numbers
- Don't change where this component is placed on the homepage
- Don't add new interactive behavior beyond what's described above (no new click handlers, no new CTA, unless one already exists in the current implementation)
```

---

## File: `docs/implementation/trajectory-tracker-glow-styling.md`

```
# Trajectory Tracker — Glow/Gradient Styling (workable code)

Scoped strictly to the tracker's hero portion (Earth/Moon scene, dashed arc, active point, center status text). Drop this in place of the existing markup/styles for that portion only — the telemetry panel beneath it is untouched.

**Before you paste this in:** swap the four `--tt-*` custom properties at the top of the CSS to reference your site's existing design tokens from `docs/art-direction.md` (e.g. `var(--signal-amber)`) if those are already defined globally. They're set to literal hex values here so this file works standalone, but you don't want two sources of truth for the same colors.

**Assets:** reuses `earth.jpg`/`moon.jpg` if they already exist in the project (per your note) — update the two `background-image` paths in the CSS to match wherever those actually live. If they don't exist yet, any reasonably high-res, dark/desaturated Earth-from-space and Moon photo will work — the mask layers do the work of blending them into the background, so the source images don't need pre-existing transparency or cropping.

---

## HTML

```html
<div class="trajectory-tracker">
  <!-- Layer 2: Earth -->
  <div class="tt-earth"></div>
  <!-- Layer 2b: Earth atmospheric glow -->
  <div class="tt-earth-glow"></div>

  <!-- Layer 3: Moon -->
  <div class="tt-moon"></div>

  <!-- Layer 4: Starfield -->
  <div class="tt-stars"></div>

  <!-- Layer 6: Trajectory line + active point -->
  <svg class="tt-path" viewBox="0 0 1000 260" preserveAspectRatio="none" aria-hidden="true">
    <path d="M 40 210 Q 500 20 960 130" class="tt-dash" />
    <!-- Layer 5: gold bloom sits behind the point, drawn first -->
    <circle cx="500" cy="50" r="34" class="tt-bloom" />
    <circle cx="500" cy="50" r="11" class="tt-ring-outer" />
    <circle cx="500" cy="50" r="6.5" class="tt-ring-inner" />
    <circle cx="500" cy="50" r="3" class="tt-point-core" />
  </svg>

  <!-- Layer 8: Center status typography -->
  <div class="tt-status">
    <div class="tt-eyebrow">Trajectory: Translunar Injection</div>
    <div class="tt-primary">On Course</div>
    <div class="tt-divider"></div>
  </div>

  <!-- Layer 7: Edge vignette (sits on top, pointer-events none) -->
  <div class="tt-vignette"></div>
</div>
```

## CSS

```css
.trajectory-tracker {
  /* Swap these to existing site tokens if already defined globally */
  --tt-gold: #C8A96B;
  --tt-warm-white: #E8E4D8;
  --tt-muted-gray: #9A9C96;
  --tt-space-black: #05060a;

  position: relative;
  width: 100%;
  aspect-ratio: 3 / 1;
  min-height: 220px;
  overflow: hidden;
  isolation: isolate; /* keeps blend modes contained to this component */

  /* Layer 1: deep-space base */
  background: linear-gradient(180deg, #07080c 0%, #030304 100%);
}

/* Layer 2: Earth, bleeding off the left edge, faded to black — no hard rectangle */
.trajectory-tracker .tt-earth {
  position: absolute;
  left: -18%;
  bottom: -55%;
  width: 55%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-image: url("/assets/earth.jpg"); /* reuse existing asset path */
  background-size: cover;
  background-position: 60% 30%;
  filter: brightness(0.75) saturate(0.9);
  -webkit-mask-image: radial-gradient(circle at 60% 35%, black 55%, transparent 78%);
  mask-image: radial-gradient(circle at 60% 35%, black 55%, transparent 78%);
  z-index: 1;
}

/* Layer 2b: subtle blue atmospheric glow around Earth's limb */
.trajectory-tracker .tt-earth-glow {
  position: absolute;
  left: -10%;
  bottom: -45%;
  width: 45%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: radial-gradient(circle at 65% 35%,
    rgba(120, 170, 220, 0.22) 0%,
    rgba(120, 170, 220, 0.10) 35%,
    transparent 65%);
  mix-blend-mode: screen;
  z-index: 2;
  pointer-events: none;
}

/* Layer 3: Moon, bleeding off the right edge */
.trajectory-tracker .tt-moon {
  position: absolute;
  right: -12%;
  top: -25%;
  width: 26%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-image: url("/assets/moon.jpg"); /* reuse existing asset path */
  background-size: cover;
  background-position: 40% 60%;
  filter: brightness(0.65) saturate(0.85);
  -webkit-mask-image: radial-gradient(circle at 35% 65%, black 55%, transparent 78%);
  mask-image: radial-gradient(circle at 35% 65%, black 55%, transparent 78%);
  z-index: 1;
}

/* Layer 4: subtle starfield — tiled dot pattern, kept faint */
.trajectory-tracker .tt-stars {
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: 0.5;
  background-image:
    radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.8) 0, transparent 100%),
    radial-gradient(1px 1px at 27% 42%, rgba(255,255,255,0.6) 0, transparent 100%),
    radial-gradient(1.5px 1.5px at 41% 12%, rgba(255,255,255,0.7) 0, transparent 100%),
    radial-gradient(1px 1px at 58% 28%, rgba(255,255,255,0.5) 0, transparent 100%),
    radial-gradient(1px 1px at 73% 8%, rgba(255,255,255,0.7) 0, transparent 100%),
    radial-gradient(1.5px 1.5px at 84% 22%, rgba(255,255,255,0.6) 0, transparent 100%),
    radial-gradient(1px 1px at 91% 45%, rgba(255,255,255,0.5) 0, transparent 100%),
    radial-gradient(1px 1px at 65% 55%, rgba(255,255,255,0.4) 0, transparent 100%),
    radial-gradient(1px 1px at 35% 60%, rgba(255,255,255,0.4) 0, transparent 100%);
  background-repeat: no-repeat;
}

/* Layer 6: trajectory arc */
.trajectory-tracker .tt-path {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}

.tt-dash {
  fill: none;
  stroke: var(--tt-gold);
  stroke-width: 1;
  stroke-dasharray: 3 6;
  opacity: 0.55;
}

/* Layer 5: soft radial gold bloom behind the active point */
.tt-bloom {
  fill: var(--tt-gold);
  opacity: 0.18;
  filter: blur(6px);
}

.tt-ring-outer {
  fill: none;
  stroke: var(--tt-gold);
  stroke-width: 0.75;
  opacity: 0.45;
}

.tt-ring-inner {
  fill: none;
  stroke: var(--tt-gold);
  stroke-width: 1;
  opacity: 0.8;
}

.tt-point-core {
  fill: var(--tt-warm-white);
}

/* Layer 8: center status typography */
.trajectory-tracker .tt-status {
  position: absolute;
  left: 50%;
  top: 62%;
  transform: translate(-50%, -50%);
  z-index: 4;
  text-align: center;
  pointer-events: none;
}

.tt-eyebrow {
  font-size: 11px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--tt-muted-gray);
  opacity: 0.75;
  margin-bottom: 6px;
}

.tt-primary {
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: var(--tt-gold);
}

.tt-divider {
  width: 28px;
  height: 1px;
  background: var(--tt-gold);
  opacity: 0.6;
  margin: 10px auto 0;
}

/* Layer 7: edge vignette — sits on top, never blocks interaction */
.trajectory-tracker .tt-vignette {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  background:
    radial-gradient(ellipse at center, transparent 55%, rgba(3,3,4,0.55) 100%),
    linear-gradient(180deg, rgba(3,3,4,0.35) 0%, transparent 15%, transparent 85%, rgba(3,3,4,0.45) 100%);
}
```

## Notes

- **Arc position:** the path's control point (`Q 500 20`) and the active point's coordinates (`cx="500" cy="50"`) are set to match the reference image — the point sits just above and left-of-center on the arc. Adjust both together if you want the point elsewhere along the path; keep the circle's `cx`/`cy` sitting exactly on the path's curve or it'll look detached.
- **Mask fades, not hard crops:** Earth and Moon use `mask-image: radial-gradient(...)` rather than clipping — that's what avoids the "obvious rectangular image boundary" you flagged. If a browser you need to support doesn't handle `mask-image` well, the fallback is a `box-shadow: 0 0 60px 60px #05060a inset` trick on the image element, but modern mask support should be fine for a 2026 build.
- **Nothing here reads or writes the live-ticking mock data** — this is purely the visual layer behind/around the existing arc, exactly as scoped.
```

---

## After creating the files

Confirm back to me:
1. That all 10 files above now exist at those exact paths
2. Whether `src/` in this repo already has real component code for the brochure sections and contact funnel, or is still empty/placeholder — I need to know the actual current state to reconcile against what these docs describe
3. The current file paths for the tracker component (likely `src/main.js` and `src/styles/main.css` per prior work) so future scaffolding updates can reference them directly instead of guessing
