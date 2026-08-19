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
