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

## Session log
See `.claude/memory/decisions.md` for a running log of decisions and progress across sessions. Update it at the end of each working session — this is part of the P303 grading criteria (scaffolding should show real progress over time, not be written once and abandoned).
