import '/src/styles/main.css';
import { interestOptions, timelineOptions, bestTimeOptions, packages, agents } from './data/packages.js';

// ─── Starfield ──────────────────────────────────────────────────────────────
(function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const count = Math.floor((canvas.width * canvas.height) / 8000);
    for (let i = 0; i < count; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const r = Math.random() * 1.1 + 0.1;
      const alpha = 0.25 + Math.random() * 0.65;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 215, 245, ${alpha})`;
      ctx.fill();
    }
  }

  draw();
  window.addEventListener('resize', draw);
})();

// ─── State ───────────────────────────────────────────────────────────────────
let state = {
  step: 1,              // 1 | 2 | 3 | 'confirm'
  interest: null,
  timeline: null,
  contact: { name: '', phone: '', bestTime: 'Anytime' }
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
function progress() {
  if (state.step === 'confirm') return 100;
  return Math.round((state.step / 3) * 100);
}

function stepHeader() {
  const stepNum = state.step;
  const label = stepNum === 3 ? 'Last step' : `Step ${stepNum} of 3`;
  return `
    <div class="step-header">
      <div class="progress-track">
        <div class="progress-fill" style="width:${progress()}%"></div>
      </div>
      <span class="step-label">${label}</span>
    </div>
  `;
}

// ─── Step 1 — interest ────────────────────────────────────────────────────────
function renderStep1() {
  return `
    <div class="screen">
      ${stepHeader()}
      <div class="screen-content">
        <div class="screen-heading">
          <p class="eyebrow">Your Mission</p>
          <h1>Where do you<br>want to go?</h1>
        </div>
        <div class="option-grid">
          ${interestOptions.map((opt) => `
            <button type="button" class="option-card${state.interest === opt.id ? ' is-selected' : ''}" data-interest="${opt.id}">
              <span class="option-symbol">${opt.symbol}</span>
              <span class="option-label">${opt.label}</span>
              <span class="option-tagline">${opt.tagline}</span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// ─── Step 2 — timeline ────────────────────────────────────────────────────────
function renderStep2() {
  return `
    <div class="screen">
      ${stepHeader()}
      <div class="screen-content">
        <div class="screen-heading">
          <p class="eyebrow">Your Timeline</p>
          <h1>When are you<br>thinking?</h1>
        </div>
        <div class="option-list">
          ${timelineOptions.map((opt) => `
            <button type="button" class="timeline-card${state.timeline === opt.id ? ' is-selected' : ''}" data-timeline="${opt.id}">
              <span class="timeline-label">${opt.label}</span>
              <span class="timeline-sub">${opt.sub}</span>
            </button>
          `).join('')}
        </div>
        <button type="button" class="back-button" id="stepBack">← Back</button>
      </div>
    </div>
  `;
}

// ─── Step 3 — contact ─────────────────────────────────────────────────────────
function renderStep3() {
  const timeOptions = bestTimeOptions.map((t) =>
    `<option value="${t}"${state.contact.bestTime === t ? ' selected' : ''}>${t}</option>`
  ).join('');

  return `
    <div class="screen">
      ${stepHeader()}
      <div class="screen-content">
        <div class="screen-heading">
          <p class="eyebrow">Your Details</p>
          <h1>We'll have an<br>advisor reach out.</h1>
        </div>
        <form id="contactForm" class="contact-form" novalidate>
          <div class="field-group">
            <label for="contactName">Name</label>
            <input type="text" id="contactName" autocomplete="name"
              placeholder="Your name" value="${state.contact.name}" />
          </div>
          <div class="field-group">
            <label for="contactPhone">Phone</label>
            <input type="tel" id="contactPhone" autocomplete="tel"
              placeholder="+1 (555) 000-0000" value="${state.contact.phone}" />
          </div>
          <div class="field-group">
            <label for="contactTime">Best time to reach you</label>
            <select id="contactTime">${timeOptions}</select>
          </div>
          <button type="submit" class="cta-button">Connect Me →</button>
        </form>
        <button type="button" class="back-button" id="stepBack">← Back</button>
      </div>
    </div>
  `;
}

// ─── Confirmation ─────────────────────────────────────────────────────────────
function renderConfirm() {
  const pkg = packages[state.interest] || packages.surprise;
  const agent = agents[state.interest] || agents.surprise;
  const firstName = state.contact.name.split(' ')[0].trim() || 'Explorer';
  const timeLabel = state.contact.bestTime === 'Anytime'
    ? 'at your convenience'
    : `${state.contact.bestTime.split('(')[0].trim().toLowerCase()}`;

  return `
    <div class="screen screen-confirm">
      <div class="confirm-atmosphere"></div>
      <div class="screen-content confirm-content">
        <span class="confirm-emblem">✦</span>
        <h1 class="confirm-headline">${firstName},<br>you're on our radar.</h1>
        <div class="confirm-package">
          <p class="confirm-package-name">${pkg.name}</p>
          <p class="confirm-package-tagline">${pkg.tagline}</p>
        </div>
        <div class="confirm-agent">
          <p class="confirm-agent-label">Your advisor</p>
          <p class="confirm-agent-name">${agent.name}</p>
          <p class="confirm-agent-title">${agent.title}</p>
        </div>
        <p class="confirm-eta">
          Expect a call within <strong>${agent.responseTime}</strong> — ${timeLabel}.
        </p>
        <p class="confirm-tagline">The countdown starts now.</p>
      </div>
    </div>
  `;
}

// ─── Render ───────────────────────────────────────────────────────────────────
function render() {
  const app = document.getElementById('app');
  if (state.step === 1)         app.innerHTML = renderStep1();
  else if (state.step === 2)    app.innerHTML = renderStep2();
  else if (state.step === 3)    app.innerHTML = renderStep3();
  else                          app.innerHTML = renderConfirm();
  bindEvents();
}

// ─── Events ───────────────────────────────────────────────────────────────────
function bindEvents() {
  // Step 1: interest selection — tap immediately advances
  document.querySelectorAll('[data-interest]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.interest = btn.dataset.interest;
      state.step = 2;
      render();
    });
  });

  // Step 2: timeline selection — tap immediately advances
  document.querySelectorAll('[data-timeline]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.timeline = btn.dataset.timeline;
      state.step = 3;
      render();
    });
  });

  // Step 3: contact form submit
  document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    if (!name || !phone) return;
    state.contact.name = name;
    state.contact.phone = phone;
    state.contact.bestTime = document.getElementById('contactTime').value;
    state.step = 'confirm';
    render();
  });

  // Back
  document.getElementById('stepBack')?.addEventListener('click', () => {
    if (state.step === 2) state.step = 1;
    else if (state.step === 3) state.step = 2;
    render();
  });
}

render();
