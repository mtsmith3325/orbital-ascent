import '/src/styles/main.css';
import { offerings, stats, testimonials, interestOptions, timelineOptions, bestTimeOptions, packages, agents } from './data/packages.js';

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
  const offeringsHTML = offerings.map((o, i) => `
    <div class="offering" id="offering-${o.id}" data-index="${i}">
      <div class="offering-inner">
        <p class="offering-num">0${i + 1}</p>
        <div class="offering-photo" data-label="${o.name}">
          ${o.video ? `<video src="${o.video}" autoplay muted loop playsinline></video>` : ''}
        </div>
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

  const dotsHTML = offerings.map((_, i) =>
    `<button type="button" class="carousel-dot${i === 0 ? ' is-active' : ''}" data-slide="${i}" aria-label="Slide ${i + 1}"></button>`
  ).join('');

  const statsHTML = stats.map((s) => `
    <div class="stat-cell">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');

  const testimonialsHTML = testimonials.map((t) => `
    <div class="testimonial fade-up">
      <p class="testimonial-quote">"${t.quote}"</p>
      <p class="testimonial-meta">${t.name}<span>${t.mission}</span></p>
    </div>
  `).join('');

  return `
    <nav class="site-nav" id="siteNav">
      <a href="#" class="nav-logo">Orbital<span> Ascent</span></a>
      <button type="button" class="nav-cta" id="navCta">Join the List</button>
    </nav>

    <section class="hero">
      <p class="hero-eyebrow">The Future, Documented</p>
      <h1 class="hero-headline">The Overview<br>Effect.<br>Live It.</h1>
      <p class="hero-sub">Orbital flights, lunar flybys, and extended station residencies for the world's most adventurous travellers.</p>
      <button type="button" class="hero-cta" id="heroCta">Explore the Program →</button>
      <div class="scroll-hint">Scroll</div>
    </section>

    <section class="section fade-up" id="missions-heading">
      <p class="section-eyebrow">Our Missions</p>
      <h2 class="section-heading">Three ways to leave the planet.</h2>
    </section>

    <section class="carousel-section fade-up" id="offeringsCarousel">
      <div class="carousel-track" id="carouselTrack">
        ${offeringsHTML}
      </div>
      <div class="carousel-controls">
        <button type="button" class="carousel-arrow" id="carouselPrev" aria-label="Previous">←</button>
        <div class="carousel-dots" id="carouselDots">${dotsHTML}</div>
        <button type="button" class="carousel-arrow" id="carouselNext" aria-label="Next">→</button>
      </div>
    </section>

    <section class="stats-section fade-up">
      <p class="stats-eyebrow">By the Numbers</p>
      <div class="stats-grid">${statsHTML}</div>
    </section>

    <section class="section fade-up">
      <p class="section-eyebrow">Mission Alumni</p>
      <h2 class="section-heading">In their own words.</h2>
    </section>

    <section class="testimonials-section">
      <div class="testimonials-inner">
        ${testimonialsHTML}
      </div>
    </section>

    <section class="close-cta-section fade-up">
      <h2 class="close-cta-headline">Where Will<br>You Be<br>In It?</h2>
      <p class="close-cta-sub">An Orbital Ascent advisor will walk you through options, answer every question, and get you on the path to launch.</p>
      <button type="button" class="close-cta-button" id="closeCta">Join the Mission →</button>
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
  document.getElementById('app').innerHTML = renderBrochure() + renderFunnelOverlay();
  bindBrochureEvents();
  bindFunnelEvents();
  initScrollBehavior();
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
  const prev  = document.getElementById('carouselPrev');
  const next  = document.getElementById('carouselNext');
  const dots  = document.querySelectorAll('.carousel-dot');
  if (!track) return;

  let current = 0;
  const count = offerings.length;

  function goTo(index) {
    current = Math.max(0, Math.min(count - 1, index));
    track.scrollTo({ left: track.offsetWidth * current, behavior: 'smooth' });
    dots.forEach((d, i) => d.classList.toggle('is-active', i === current));
    if (prev) prev.classList.toggle('is-disabled', current === 0);
    if (next) next.classList.toggle('is-disabled', current === count - 1);
  }

  prev?.addEventListener('click', () => goTo(current - 1));
  next?.addEventListener('click', () => goTo(current + 1));
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
    { threshold: 0.12 }
  );
  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
}

renderApp();
