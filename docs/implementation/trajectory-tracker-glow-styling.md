# Trajectory Tracker — Glow/Gradient Styling (workable code)

Scoped strictly to the tracker's hero portion (Earth/Moon scene, dashed arc, active point, center status text). Drop this in place of the existing markup/styles for that portion only — the telemetry panel beneath it is untouched.

**Before you paste this in:** swap the four `--tt-*` custom properties at the top of the CSS to reference your site's existing design tokens from `docs/art-direction.md` (e.g. `var(--signal-amber)`) if those are already defined globally. They're set to literal hex values here so this file works standalone, but you don't want two sources of truth for the same colors.

**Assets:** reuses `earth.jpg`/`moon.jpg` if they already exist in the project — update the two `background-image` paths in the CSS to match wherever those actually live. If they don't exist yet, any reasonably high-res, dark/desaturated Earth-from-space and Moon photo will work — the mask layers do the work of blending them into the background, so the source images don't need pre-existing transparency or cropping.

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
  isolation: isolate;

  background: linear-gradient(180deg, #07080c 0%, #030304 100%);
}

.trajectory-tracker .tt-earth {
  position: absolute;
  left: -18%;
  bottom: -55%;
  width: 55%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-image: url("/assets/earth.jpg");
  background-size: cover;
  background-position: 60% 30%;
  filter: brightness(0.75) saturate(0.9);
  -webkit-mask-image: radial-gradient(circle at 60% 35%, black 55%, transparent 78%);
  mask-image: radial-gradient(circle at 60% 35%, black 55%, transparent 78%);
  z-index: 1;
}

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

.trajectory-tracker .tt-moon {
  position: absolute;
  right: -12%;
  top: -25%;
  width: 26%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-image: url("/assets/moon.jpg");
  background-size: cover;
  background-position: 40% 60%;
  filter: brightness(0.65) saturate(0.85);
  -webkit-mask-image: radial-gradient(circle at 35% 65%, black 55%, transparent 78%);
  mask-image: radial-gradient(circle at 35% 65%, black 55%, transparent 78%);
  z-index: 1;
}

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
