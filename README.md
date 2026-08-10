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
- **Vanilla JavaScript + Vite** — lightweight, no framework overhead
- **CSS custom properties** — cinematic dark-space design tokens, scroll animations
- **Google Fonts** — Cormorant Garamond (display) + Space Grotesk (UI)
- Deployed via Vercel / Netlify

## Getting Started
```bash
# install dependencies
npm install

# run locally
npm run dev

# build for production
npm run build
```

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
MVP complete — cinematic brochure scroll + contact funnel overlay, full end-to-end flow working.
