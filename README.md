# Orbital Ascent — Sales Inquiry Experience

## Overview
A mobile-first responsive web app for Orbital Ascent, a space tourism company. It helps a wealthy, self-funded adventure-seeker turn a moment of excitement — scrolling social media, waiting around, or leaving a space-tourism expo — into a completed inquiry to a sales agent, in under a minute, one-handed.

## How It Works
- A 3-step guided questionnaire (interest area → timeline → contact info) replaces a static contact form
- A confirmation screen closes the loop, setting expectations for follow-up and reinforcing the fantasy visually
- All flight/package and agent-matching data is mocked — no real backend or payment processing
- Built mobile-first: large tap targets, minimal typing, outdoor-readable contrast

## Tech Stack
- **Vanilla JavaScript + Vite** — lightweight, no framework overhead
- **CSS custom properties** — design tokens, cinematic dark-space aesthetic
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
│   ├── pages/               — screen-level views (questionnaire steps, confirmation)
│   ├── data/                 — mock data (flight packages, timelines, etc.)
│   └── styles/               — global styles / design tokens
├── public/                  — static assets (images, icons)
└── docs/                     — supplementary design notes, references
```

## Status
MVP complete — 3-step inquiry flow (interest → timeline → contact) + confirmation screen.
