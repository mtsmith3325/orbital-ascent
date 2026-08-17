import '/src/styles/main.css';
import { offerings, stats, testimonials, interestOptions, timelineOptions, bestTimeOptions, packages, agents } from './data/packages.js';
import { renderNav } from './lib/nav.js';
import { renderExperience } from './pages/experience.js';
import { renderJourney } from './pages/journey.js';

// ─── Starfield ──────────────────────────────────────────────────────────────
(function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const n = Math.floor((canvas.width * canvas.height) / 7500);
    for (let i = 0; i < n; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const r = Math.random() * 1.1 + 0.1;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,215,245,${0.2 + Math.random() * 0.65})`;
      ctx.fill();
    }
  }
  draw();
  window.addEventListener('resize', draw);
})();

// ─── Funnel State ─────────────────────────────────────────────────────────────
let funnel = {
  open: false,
  step: 1,
  interest: null,
  timeline: null,
  contact: { name: '', phone: '', bestTime: 'Anytime' }
};

// ─── Brochure HTML ─────────────────────────────────────────────────────────────
function renderBrochure() {
  const dotsHTML = offerings.map((_, i) =>
    `<button type="button" class="carousel-dot${i === 0 ? ' is-active' : ''}" data-slide="${i}" aria-label="Slide ${i + 1}"></button>`
  ).join('');

  const controlsHTML = `
    <div class="carousel-controls">
      <button type="button" class="carousel-arrow carousel-prev" aria-label="Previous">←</button>
      <div class="carousel-dots">${dotsHTML}</div>
      <button type="button" class="carousel-arrow carousel-next" aria-label="Next">→</button>
    </div>
  `;

  const offeringsHTML = offerings.map((o, i) => `
    <div class="offering" id="offering-${o.id}" data-index="${i}">
      <div class="offering-inner">
        <p class="offering-num">0${i + 1}</p>
        <div class="offering-photo" data-label="${o.name}">
          ${o.video ? `<video src="${o.video}" autoplay muted loop playsinline></video>` : o.image ? `<img src="${o.image}" alt="" />` : ''}
        </div>
        ${controlsHTML}
        <h2 class="offering-name">${o.name}</h2>
        <p class="offering-tagline">${o.tagline}</p>
        <p class="offering-feel">${o.feel}</p>
        <div class="offering-meta">
          <div class="meta-item">
            <span class="meta-label">Duration</span>
            <span class="meta-value">${o.duration}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Altitude</span>
            <span class="meta-value">${o.altitude}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Price</span>
            <span class="meta-value">${o.price}</span>
          </div>
        </div>
        <ul class="offering-includes">
          ${o.included.map((item) => `<li>${item}</li>`).join('')}
        </ul>
        <button type="button" class="offering-cta" data-interest="${o.id}">Talk to an Advisor →</button>
      </div>
    </div>
  `).join('');

  const statsHTML = stats.map((s, i) => {
    const match  = s.value.match(/^([\d.]+)(.*)$/);
    const num    = match ? match[1] : s.value;
    const suffix = match ? match[2] : '';
    return `
    <div class="stat-cell reveal stagger-${i + 1}" data-count="${num}" data-suffix="${suffix}">
      <div class="stat-value">0${suffix}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `;
  }).join('');

  return `
    ${renderNav('home')}

    <section class="hero">
      <video class="hero-video" id="heroVideo" src="/videos/hero-video-seq.mp4" autoplay muted loop playsinline></video>
      <div class="hero-overlay"></div>
      <h1 class="hero-headline">The Overview<br>Effect.<br>Live It.</h1>
      <p class="hero-sub">Orbital flights, lunar flybys, and extended station residencies for the world's most adventurous travellers.</p>
      <button type="button" class="hero-cta" id="heroCta">Explore the Program →</button>
      <button type="button" class="hero-video-toggle" id="heroVideoToggle" aria-label="Pause video">
        <svg class="icon-pause" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="3.5" height="12" rx="1" stroke="white" stroke-width="2"/>
          <rect x="9.5" y="2" width="3.5" height="12" rx="1" stroke="white" stroke-width="2"/>
        </svg>
        <svg class="icon-play" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:none">
          <path d="M4 2.5L13 8L4 13.5V2.5Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
        </svg>
      </button>
    </section>

    <section class="section" id="missions-heading">
      <p class="section-eyebrow reveal">Our Missions</p>
      <h2 class="section-heading reveal stagger-1">Three ways to leave the planet.</h2>
    </section>

    <section class="carousel-section" id="offeringsCarousel">
      <div class="carousel-track" id="carouselTrack">
        ${offeringsHTML}
      </div>
    </section>

    <section class="stats-section">
      <p class="stats-eyebrow reveal">By the Numbers</p>
      <div class="stats-grid">${statsHTML}</div>
    </section>

    <section class="tracker-section reveal">
      <div class="tracker-header">
        <span class="tracker-mission-label">ACTIVE MISSION · ARTEMIS CHARTER 04</span>
        <span class="tracker-live">● LIVE</span>
      </div>

      <div class="tracker-scene">
        <img class="tracker-scene-bg" src="/src/images/lunar-tracker/lunartracker-bg.jpg" alt="" aria-hidden="true">

        <svg class="tracker-arc-svg" viewBox="0 0 1672 941" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path id="trackerArcPath" d="M 560,470 Q 1010,80 1460,290" fill="none" stroke="#B7B7AC" stroke-width="3" stroke-dasharray="14 11" opacity="0.7"/>
          <circle id="trackerMarker" r="10" fill="#C8A96B"/>
        </svg>

        <div class="tracker-waypoint" id="trackerWaypoint">
          <span class="tracker-waypoint-leg" id="trackerWaypointLeg">TRAJECTORY: COAST</span>
          <span class="tracker-waypoint-status">ON COURSE</span>
        </div>

        <div class="tracker-endpoint tracker-endpoint--earth">
          <span class="tracker-marker tracker-marker--earth"></span>
          <span class="tracker-body-label">EARTH</span>
          <span class="tracker-coords">34.05°N<br>118.24°W</span>
        </div>
        <div class="tracker-endpoint tracker-endpoint--moon">
          <span class="tracker-marker tracker-marker--moon"></span>
          <span class="tracker-body-label">MOON</span>
          <span class="tracker-coords">0.67°N<br>23.47°E</span>
        </div>
      </div>

      <div class="tracker-panel">
        <div class="tracker-main-row">
          <div class="tracker-stats">
          <div class="tracker-stat">
            <span class="tracker-stat-label">DISTANCE REMAINING</span>
            <span class="tracker-stat-value" id="trackerDistance">—</span>
            <span class="tracker-stat-unit">KM</span>
            <div class="tracker-bar"><span class="tracker-bar-fill" id="trackerDistanceBar"></span></div>
            <span class="tracker-bar-max">TOTAL 372,000 KM</span>
          </div>
          <div class="tracker-stat">
            <span class="tracker-stat-label">VELOCITY</span>
            <span class="tracker-stat-value" id="trackerVelocity">—</span>
            <span class="tracker-stat-unit">KM/H</span>
            <div class="tracker-bar"><span class="tracker-bar-fill" id="trackerVelocityBar"></span></div>
            <span class="tracker-bar-max">MAX 4,400 KM/H</span>
          </div>
          <div class="tracker-stat">
            <span class="tracker-stat-label">ELAPSED TIME</span>
            <span class="tracker-stat-value" id="trackerElapsed">—</span>
            <span class="tracker-stat-unit">H:MM</span>
            <div class="tracker-bar"><span class="tracker-bar-fill" id="trackerElapsedBar"></span></div>
            <span class="tracker-bar-max">EST. 72:00</span>
          </div>
          <div class="tracker-stat tracker-stat--phase">
            <span class="tracker-stat-label">CURRENT PHASE</span>
            <span class="tracker-stat-value tracker-stat-value--phase" id="trackerPhase">—</span>
            <div class="tracker-stepper" id="trackerStepper">
              ${['Launch', 'Ascent', 'TLI', 'Coast', 'Approach', 'Landing'].map((label) => `
                <span class="tracker-step" data-phase="${label}">
                  <span class="tracker-step-dot"></span>
                  <span class="tracker-step-label">${label}</span>
                </span>
              `).join('')}
            </div>
          </div>
          </div>

          <img class="tracker-rocket" src="/src/images/lunar-tracker/spaceship.png" alt="" aria-hidden="true">
        </div>

        <div class="tracker-footer">
          <div class="tracker-footer-item"><span class="tracker-footer-label">VECTOR</span><span class="tracker-footer-value">062.4° AZ</span></div>
          <div class="tracker-footer-item"><span class="tracker-footer-label">ALTITUDE</span><span class="tracker-footer-value">1,204 KM</span></div>
          <div class="tracker-footer-item"><span class="tracker-footer-label">SYSTEMS</span><span class="tracker-footer-value">NOMINAL</span></div>
          <div class="tracker-footer-item"><span class="tracker-footer-label">CREW</span><span class="tracker-footer-value">4</span></div>
          <div class="tracker-footer-item"><span class="tracker-footer-label">VESSEL</span><span class="tracker-footer-value">ARTEMIS IV</span></div>
        </div>
      </div>
    </section>

    <section class="close-cta-section">
      <img class="close-cta-bg" src="/src/images/moon-footer.png" alt="" aria-hidden="true">
      <div class="close-cta-bg-overlay"></div>
      <h2 class="close-cta-headline reveal">Where Will<br>You Be<br>In It?</h2>
      <p class="close-cta-sub reveal stagger-1">An Orbital Ascent advisor will walk you through options, answer every question, and get you on the path to launch.</p>
      <button type="button" class="close-cta-button reveal stagger-2" id="closeCta">Join the Mission →</button>
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

// ─── Funnel HTML ──────────────────────────────────────────────────────────────
function progressPct() {
  if (funnel.step === 'confirm') return 100;
  return Math.round((funnel.step / 3) * 100);
}

function funnelHeader() {
  const label = funnel.step === 3 ? 'Last step' : funnel.step === 'confirm' ? 'Complete' : `Step ${funnel.step} of 3`;
  return `
    <div class="funnel-progress-track">
      <div class="funnel-progress-fill" style="width:${progressPct()}%"></div>
    </div>
    <p class="funnel-step-label">${label}</p>
  `;
}

function renderFunnelStep() {
  if (funnel.step === 1) {
    const cards = interestOptions.map((o) => `
      <button type="button" class="option-card${funnel.interest === o.id ? ' is-selected' : ''}" data-interest="${o.id}">
        <span class="option-symbol">${o.symbol}</span>
        <span class="option-label">${o.label}</span>
        <span class="option-tagline">${o.tagline}</span>
      </button>
    `).join('');
    return `
      ${funnelHeader()}
      <div class="funnel-heading">
        <p class="funnel-eyebrow">Your Mission</p>
        <h2 class="funnel-h1">Where do you<br>want to go?</h2>
      </div>
      <div class="option-grid">${cards}</div>
    `;
  }
  if (funnel.step === 2) {
    const cards = timelineOptions.map((o) => `
      <button type="button" class="timeline-card${funnel.timeline === o.id ? ' is-selected' : ''}" data-timeline="${o.id}">
        <span class="timeline-label">${o.label}</span>
        <span class="timeline-sub">${o.sub}</span>
      </button>
    `).join('');
    return `
      ${funnelHeader()}
      <div class="funnel-heading">
        <p class="funnel-eyebrow">Your Timeline</p>
        <h2 class="funnel-h1">When are you<br>thinking?</h2>
      </div>
      <div class="option-list">${cards}</div>
      <button type="button" class="funnel-back" id="funnelBack">← Back</button>
    `;
  }
  if (funnel.step === 3) {
    const timeOpts = bestTimeOptions.map((t) =>
      `<option value="${t}"${funnel.contact.bestTime === t ? ' selected' : ''}>${t}</option>`
    ).join('');
    return `
      ${funnelHeader()}
      <div class="funnel-heading">
        <p class="funnel-eyebrow">Your Details</p>
        <h2 class="funnel-h1">We'll have an<br>advisor reach out.</h2>
      </div>
      <form id="funnelForm" class="contact-form" novalidate>
        <div class="field-group">
          <label for="cName">Name</label>
          <input type="text" id="cName" autocomplete="name" placeholder="Your name" value="${funnel.contact.name}" />
        </div>
        <div class="field-group">
          <label for="cPhone">Phone</label>
          <input type="tel" id="cPhone" autocomplete="tel" placeholder="+1 (555) 000-0000" value="${funnel.contact.phone}" />
        </div>
        <div class="field-group">
          <label for="cTime">Best time to reach you</label>
          <select id="cTime">${timeOpts}</select>
        </div>
        <button type="submit" class="funnel-submit">Connect Me →</button>
      </form>
      <button type="button" class="funnel-back" id="funnelBack">← Back</button>
    `;
  }
  if (funnel.step === 'confirm') {
    const pkg   = packages[funnel.interest]  || packages.surprise;
    const agent = agents[funnel.interest]    || agents.surprise;
    const first = (funnel.contact.name.split(' ')[0] || 'Explorer').trim();
    const time  = funnel.contact.bestTime === 'Anytime'
      ? 'at your convenience'
      : funnel.contact.bestTime.split('(')[0].trim().toLowerCase();
    return `
      <div class="confirm-inner">
        <span class="confirm-emblem">✦</span>
        <h2 class="confirm-headline">${first},<br>you're on our radar.</h2>
        <div class="confirm-pkg">
          <p class="confirm-pkg-name">${pkg.name}</p>
          <p class="confirm-pkg-tagline">${pkg.tagline}</p>
        </div>
        <div class="confirm-agent">
          <p class="confirm-agent-label">Your advisor</p>
          <p class="confirm-agent-name">${agent.name}</p>
          <p class="confirm-agent-title">${agent.title}</p>
        </div>
        <p class="confirm-eta">Expect a call within <strong>${agent.responseTime}</strong> — ${time}.</p>
        <p class="confirm-tagline">The countdown starts now.</p>
        <button type="button" class="confirm-done" id="confirmDone">← Back to site</button>
      </div>
    `;
  }
}

function renderFunnelOverlay() {
  return `
    <div class="funnel-overlay${funnel.open ? ' open' : ''}" id="funnelOverlay">
      <div class="funnel-sheet" id="funnelSheet">
        <div class="funnel-handle"></div>
        <button type="button" class="funnel-close" id="funnelClose" aria-label="Close">×</button>
        <div class="funnel-inner" id="funnelInner">
          ${renderFunnelStep()}
        </div>
      </div>
    </div>
  `;
}

// ─── Render ───────────────────────────────────────────────────────────────────
function renderApp() {
  const route = window.location.hash.replace('#', '') || 'home';
  const app   = document.getElementById('app');

  if (route === 'experience') {
    app.innerHTML = renderExperience() + renderFunnelOverlay();
    bindPageEvents();
    bindFunnelEvents();
    initScrollBehavior();
  } else if (route === 'journey') {
    app.innerHTML = renderJourney() + renderFunnelOverlay();
    bindPageEvents();
    bindFunnelEvents();
    initScrollBehavior();
  } else {
    app.innerHTML = renderBrochure() + renderFunnelOverlay();
    bindBrochureEvents();
    bindFunnelEvents();
    initScrollBehavior();
  }
  window.scrollTo(0, 0);
}

// ─── Inner-page events ────────────────────────────────────────────────────────
function bindPageEvents() {
  document.getElementById('navCta')?.addEventListener('click', () => openFunnel());
  document.getElementById('pageCtaBtn')?.addEventListener('click', () => openFunnel());
  document.getElementById('stickyBarBtn')?.addEventListener('click', () => openFunnel());
  document.getElementById('funnelOverlay')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('funnelOverlay')) closeFunnel();
  });
  initHamburger();
}

function refreshFunnel() {
  const inner = document.getElementById('funnelInner');
  if (inner) inner.innerHTML = renderFunnelStep();
  const fill = document.querySelector('.funnel-progress-fill');
  if (fill) fill.style.width = progressPct() + '%';
  bindFunnelEvents();
}

function openFunnel(interestId) {
  if (interestId) funnel.interest = interestId;
  funnel.open = true;
  const overlay = document.getElementById('funnelOverlay');
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeFunnel() {
  funnel.open = false;
  const overlay = document.getElementById('funnelOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  if (funnel.step === 'confirm') {
    funnel.step = 1;
    funnel.interest = null;
    funnel.timeline = null;
    funnel.contact = { name: '', phone: '', bestTime: 'Anytime' };
    refreshFunnel();
  }
}

// ─── Hamburger nav ────────────────────────────────────────────────────────────
function initHamburger() {
  const btn      = document.getElementById('navHamburger');
  const drawer   = document.getElementById('navDrawer');
  const backdrop = document.getElementById('navDrawerBackdrop');
  if (!btn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('is-open');
    backdrop?.classList.add('is-open');
    btn.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    backdrop?.classList.remove('is-open');
    btn.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
  }

  btn.addEventListener('click', () =>
    drawer.classList.contains('is-open') ? closeDrawer() : openDrawer()
  );
  backdrop?.addEventListener('click', closeDrawer);

  // Close drawer on any link click (handles hash navigation)
  drawer.querySelectorAll('.drawer-link').forEach((link) =>
    link.addEventListener('click', closeDrawer)
  );
}

// ─── Brochure events ──────────────────────────────────────────────────────────
function bindBrochureEvents() {
  document.getElementById('navCta')?.addEventListener('click', () => openFunnel());
  document.getElementById('heroCta')?.addEventListener('click', () => {
    document.getElementById('missions-heading')?.scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('closeCta')?.addEventListener('click', () => openFunnel());
  document.getElementById('stickyBarBtn')?.addEventListener('click', () => openFunnel());

  document.querySelectorAll('.offering-cta[data-interest]').forEach((btn) => {
    btn.addEventListener('click', () => {
      funnel.step = 2;
      openFunnel(btn.dataset.interest);
      refreshFunnel();
    });
  });

  document.getElementById('funnelOverlay')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('funnelOverlay')) closeFunnel();
  });

  initCarousel();
  initTracker();
  initHamburger();

  const video  = document.getElementById('heroVideo');
  const toggle = document.getElementById('heroVideoToggle');
  if (video && toggle) {
    toggle.addEventListener('click', () => {
      const paused = video.paused;
      paused ? video.play() : video.pause();
      toggle.setAttribute('aria-label', paused ? 'Pause video' : 'Play video');
      toggle.querySelector('.icon-pause').style.display = paused ? '' : 'none';
      toggle.querySelector('.icon-play').style.display  = paused ? 'none' : '';
    });
  }
}

// ─── Funnel events ────────────────────────────────────────────────────────────
function bindFunnelEvents() {
  document.getElementById('funnelClose')?.addEventListener('click', closeFunnel);

  document.querySelectorAll('[data-interest]').forEach((btn) => {
    if (btn.classList.contains('offering-cta')) return;
    btn.addEventListener('click', () => {
      funnel.interest = btn.dataset.interest;
      funnel.step = 2;
      refreshFunnel();
    });
  });

  document.querySelectorAll('[data-timeline]').forEach((btn) => {
    btn.addEventListener('click', () => {
      funnel.timeline = btn.dataset.timeline;
      funnel.step = 3;
      refreshFunnel();
    });
  });

  document.getElementById('funnelForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name  = document.getElementById('cName')?.value.trim();
    const phone = document.getElementById('cPhone')?.value.trim();
    if (!name || !phone) return;
    funnel.contact.name     = name;
    funnel.contact.phone    = phone;
    funnel.contact.bestTime = document.getElementById('cTime')?.value || 'Anytime';
    funnel.step = 'confirm';
    refreshFunnel();
  });

  document.getElementById('funnelBack')?.addEventListener('click', () => {
    if (funnel.step === 2) funnel.step = 1;
    else if (funnel.step === 3) funnel.step = 2;
    refreshFunnel();
  });

  document.getElementById('confirmDone')?.addEventListener('click', closeFunnel);
}

// ─── Carousel ─────────────────────────────────────────────────────────────────
function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const prevButtons = document.querySelectorAll('.carousel-prev');
  const nextButtons = document.querySelectorAll('.carousel-next');
  const dots = document.querySelectorAll('.carousel-dot');
  if (!track) return;

  let current = 0;
  const count = offerings.length;

  function goTo(index) {
    current = Math.max(0, Math.min(count - 1, index));
    track.scrollTo({ left: track.offsetWidth * current, behavior: 'smooth' });
    dots.forEach((d) => d.classList.toggle('is-active', Number(d.dataset.slide) === current));
    prevButtons.forEach((b) => b.classList.toggle('is-disabled', current === 0));
    nextButtons.forEach((b) => b.classList.toggle('is-disabled', current === count - 1));
  }

  prevButtons.forEach((b) => b.addEventListener('click', () => goTo(current - 1)));
  nextButtons.forEach((b) => b.addEventListener('click', () => goTo(current + 1)));
  dots.forEach((d) => d.addEventListener('click', () => goTo(Number(d.dataset.slide))));

  // Sync dots when user drag-scrolls
  let scrollTimer;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      const idx = Math.round(track.scrollLeft / track.offsetWidth);
      if (idx !== current) goTo(idx);
    }, 80);
  }, { passive: true });

  goTo(0);
}

// ─── Lunar Trajectory Tracker ─────────────────────────────────────────────────
function initTracker() {
  const distEl     = document.getElementById('trackerDistance');
  const velEl      = document.getElementById('trackerVelocity');
  const elapsedEl  = document.getElementById('trackerElapsed');
  const phaseEl    = document.getElementById('trackerPhase');
  const marker     = document.getElementById('trackerMarker');
  const arcPath    = document.getElementById('trackerArcPath');
  const distBar    = document.getElementById('trackerDistanceBar');
  const velBar     = document.getElementById('trackerVelocityBar');
  const elapsedBar = document.getElementById('trackerElapsedBar');
  const waypointLeg = document.getElementById('trackerWaypointLeg');
  const steps      = document.querySelectorAll('#trackerStepper .tracker-step');

  if (!distEl) return;

  // Mock state — ~38% through a trans-lunar coast
  const TOTAL_KM   = 372000;
  const MAX_KMH    = 4400;
  const EST_MIN    = 72 * 60;
  let progress     = 0.38;
  let distance     = Math.round(TOTAL_KM * (1 - progress));
  let velocity     = 3840;
  let elapsed      = 62 * 60 + 18; // minutes

  const phases = ['Launch', 'Ascent', 'TLI', 'Coast', 'Approach', 'Landing'];
  let phaseIdx = 3; // "Coast"

  function positionMarker() {
    if (!arcPath || !marker) return;
    const len = arcPath.getTotalLength();
    const pt  = arcPath.getPointAtLength(len * progress);
    marker.setAttribute('cx', pt.x);
    marker.setAttribute('cy', pt.y);
  }

  function render() {
    if (distEl)    distEl.textContent  = distance.toLocaleString();
    if (velEl)     velEl.textContent   = velocity.toLocaleString();
    if (phaseEl)   phaseEl.textContent = phases[phaseIdx];
    if (waypointLeg) waypointLeg.textContent = `TRAJECTORY: ${phases[phaseIdx].toUpperCase()}`;
    if (elapsedEl) {
      const h = Math.floor(elapsed / 60);
      const m = elapsed % 60;
      elapsedEl.textContent = `${h}:${String(m).padStart(2, '0')}`;
    }
    if (distBar)    distBar.style.width    = `${Math.round(progress * 100)}%`;
    if (velBar)     velBar.style.width     = `${Math.round((velocity / MAX_KMH) * 100)}%`;
    if (elapsedBar) elapsedBar.style.width = `${Math.min(100, Math.round((elapsed / EST_MIN) * 100))}%`;
    steps.forEach((step, i) => step.classList.toggle('is-active', i === phaseIdx));
    positionMarker();
  }

  function tick() {
    // distance decrements 80–220 km per tick
    distance = Math.max(0, distance - (Math.floor(Math.random() * 140) + 80));
    // velocity drifts ±15 km/h
    velocity = Math.max(3200, Math.min(4400, velocity + Math.round(Math.random() * 30 - 15)));
    // elapsed advances ~1 min every other tick
    if (Math.random() > 0.45) elapsed += 1;
    // marker drifts slowly forward along arc
    progress = Math.min(0.97, progress + 0.0004 + Math.random() * 0.0003);
    render();
  }

  render(); // initial display

  // Jittered tick interval (2.0 – 3.2 s) simulates a real data feed
  (function schedule() {
    const delay = 2000 + Math.random() * 1200;
    setTimeout(() => { tick(); schedule(); }, delay);
  })();
}

// ─── Scroll behaviour ─────────────────────────────────────────────────────────
function initScrollBehavior() {
  const nav = document.getElementById('siteNav');
  const bar = document.getElementById('stickyBar');
  const hero = document.querySelector('.hero');
  const heroBottom = hero ? hero.offsetHeight : 0;

  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 60);
    if (bar) bar.classList.toggle('visible', y > heroBottom * 0.6);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in-view'); }),
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.fade-up, .reveal').forEach((el) => observer.observe(el));

  // Count-up observer — fires once per stat cell
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        counterObserver.unobserve(e.target);
        const target  = parseFloat(e.target.dataset.count);
        const suffix  = e.target.dataset.suffix || '';
        const el      = e.target.querySelector('.stat-value');
        if (!el || isNaN(target)) return;
        const isDecimal = String(target).includes('.');
        const duration  = 1400;
        const start     = performance.now();
        function tick(now) {
          const t = Math.min((now - start) / duration, 1);
          // ease-out expo
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          const current = isDecimal
            ? (eased * target).toFixed(1)
            : Math.round(eased * target);
          el.textContent = current + suffix;
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.3 }
  );
  document.querySelectorAll('.stat-cell[data-count]').forEach((el) => counterObserver.observe(el));
}

window.addEventListener('hashchange', renderApp);
renderApp();
