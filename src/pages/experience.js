import { renderNav } from '../lib/nav.js';

export function renderExperience() {
  return `
    ${renderNav('experience')}

    <section class="page-hero page-hero--has-bg">
      <img class="page-hero-bg" src="/images/journey/journey-hero.png" alt="" aria-hidden="true">
      <div class="page-hero-bg-overlay"></div>
      <p class="page-hero-eyebrow">The Program</p>
      <h1 class="page-hero-headline">What Spaceflight<br>Actually Feels Like.</h1>
      <p class="page-hero-sub">Not what you've imagined from films. Not the simulation. The real thing — reported here by the people who've done it.</p>
    </section>

    <section class="page-editorial">
      <div class="editorial-block reveal">
        <div class="editorial-content">
          <p class="editorial-num">01</p>
          <h2 class="editorial-headline">The Launch</h2>
          <p class="editorial-body">Three hours before lift-off, the vehicle is fully fuelled. You can hear it from the access tower — a low metallic settling, the structure responding to the cold. By the time you are strapped in, the cockpit is quiet. The countdown is not dramatic in the way you expect. It is precise. At T-0, the vibration is total. There is no conversation. The g-force presses you flat, and for approximately ninety seconds the only reference point you have is the rate at which the sky changes colour — blue to indigo to black.</p>
        </div>
        <div class="editorial-media">
          <img src="/images/journey/01-launch.jpg" alt="" />
        </div>
      </div>

      <div class="editorial-block reveal stagger-1">
        <div class="editorial-content">
          <p class="editorial-num">02</p>
          <h2 class="editorial-headline">Weightlessness</h2>
          <p class="editorial-body">The moment main engine cutoff occurs is unmistakable. The vibration stops, and your body — every part of it — continues upward on its own. Your arms lift without instruction. Objects you were holding continue to move. Most guests describe the first thirty seconds of true weightlessness as cognitively confusing — your inner ear has no frame of reference, and your mind searches for something to anchor to. It finds the window. It always finds the window.</p>
        </div>
        <div class="editorial-media">
          <img src="/images/journey/02-weightlessness.jpg" alt="" />
        </div>
      </div>

      <div class="editorial-block reveal stagger-2">
        <div class="editorial-content">
          <p class="editorial-num">03</p>
          <h2 class="editorial-headline">The View</h2>
          <p class="editorial-body">At 400 kilometres altitude, the atmosphere is a thin line. You can see it — a pale blue thread, astonishingly fragile-looking, between the surface and the void. Below it: the planet. Every ocean you've crossed, every mountain range you've flown over — visible simultaneously. No borders. No scale that makes any country look large. What astronauts have called the Overview Effect is not a metaphor. It is a perceptual event. The cognitive shift that comes from seeing the whole system at once is involuntary, and it is permanent.</p>
        </div>
        <div class="editorial-media">
          <img src="/images/journey/03-view.png" alt="" />
        </div>
      </div>

      <div class="editorial-block reveal stagger-3">
        <div class="editorial-content">
          <p class="editorial-num">04</p>
          <h2 class="editorial-headline">The Return</h2>
          <p class="editorial-body">Re-entry is the mirror image of launch — heat, vibration, the sky shifting from black to indigo to blue again. When the hatch opens and you step out, gravity is immediate and heavy. The air smells different. Most guests stand still for a moment before moving. What they are doing — though few name it this way — is comparing two versions of themselves: the one who got in the vehicle, and the one who just got out. They are not the same.</p>
        </div>
        <div class="editorial-media">
          <img src="/images/journey/04-reentry.png" alt="" />
        </div>
      </div>
    </section>

    <section class="page-cta-section page-cta-section--has-bg">
      <video class="page-cta-bg" src="/videos/journey-fooeter-video.mov" autoplay muted loop playsinline></video>
      <div class="page-cta-bg-overlay"></div>
      <h2 class="page-cta-headline reveal">Ready to<br>Experience It?</h2>
      <p class="page-cta-sub reveal stagger-1">Speak with an Orbital Ascent advisor. No commitment — just a conversation about what's right for you.</p>
      <button type="button" class="close-cta-button reveal stagger-2" id="pageCtaBtn">Talk to an Advisor →</button>
    </section>

    <footer class="site-footer">© 2026 Orbital Ascent. All missions are fictional — for demonstration purposes only.</footer>

    <div class="sticky-bar" id="stickyBar">
      <div class="sticky-bar-copy">
        <strong>Stay Informed</strong>
        Reach an advisor in under a minute.
      </div>
      <button type="button" class="sticky-bar-btn" id="stickyBarBtn">Join the List →</button>
    </div>
  `;
}
