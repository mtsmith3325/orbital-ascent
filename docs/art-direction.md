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
