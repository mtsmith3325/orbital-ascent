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

## Success Criteria (Protogen P303 Rubric)
- **Does it work?** Live URL, brochure scrolls cleanly and the contact funnel works start to finish on mobile, matches this brief
- **Is the repo set up right?** Scaffolding organized (see below), README/LICENSE present, real commit history with descriptive messages
- **Does it look right & show the thinking?** Cinematic/aerospace design a first-time visitor could navigate with no instructions; this BRIEF.md reflects real planning, not a write-up after the fact
