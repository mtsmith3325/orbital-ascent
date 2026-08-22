import { renderNav } from '../lib/nav.js';

const steps = [
  {
    num: '01',
    title: 'THE ADVISORY CALL',
    body: 'Every mission begins with a conversation. Your assigned advisor — a former mission specialist or senior operations lead — will walk you through the three program options, answer questions about physical requirements, and help you assess which mission is right for where you are now. There is no commitment at this stage. The call typically runs 45–60 minutes.',
    timeline: 'WITHIN 48 HOURS OF INQUIRY',
    image: '/src/images/journey/03-view.png'
  },
  {
    num: '02',
    title: 'MEDICAL & FITNESS ASSESSMENT',
    body: 'Spaceflight is physically demanding. Before a mission is assigned, all passengers complete a standard aerospace medical clearance: cardiovascular evaluation, inner-ear vestibular testing, and a structured fitness baseline. Our medical partners are located in three cities and offer full confidentiality. The vast majority of applicants clear without issue. The process takes one to two days.',
    timeline: '2–4 WEEKS POST-CALL',
    image: '/src/images/journey/04-reentry.png'
  },
  {
    num: '03',
    title: 'MISSION TRAINING',
    body: 'Pre-flight training is conducted at our facility and runs three to five days for orbital missions, or seven days for lunar and station programs. You will cover emergency protocols, vehicle systems orientation, zero-g adaptation exercises, and suit operations. This is not a simulation of the experience — it is the operational grounding that makes the experience possible. Most guests describe it as the second-most extraordinary week of their lives.',
    timeline: '6–10 WEEKS BEFORE LAUNCH',
    image: '/src/images/journey/02-weightlessness.jpg'
  },
  {
    num: '04',
    title: 'LAUNCH DAY',
    body: 'You arrive at the launch facility the night before. The morning is structured and calm — suit-up, medical check, vehicle walkthrough with the flight crew. There are no surprises at this point. By the time the countdown starts, every system has been verified, every contingency rehearsed. What remains is the launch itself — and nothing in your preparation will fully prepare you for it. That is the point.',
    timeline: 'T-MINUS ZERO',
    image: '/src/images/journey/01-launch.jpg'
  }
];

export function renderJourney() {
  const cardsHTML = steps.map((s, i) => `
    <div class="pcard${i === 0 ? ' is-active' : ''}" data-index="${i}">
      <div class="pcard-img">
        <img src="${s.image}" alt="">
        <div class="pcard-tint"></div>
        <span class="pcard-num">${s.num}</span>
        <span class="pcard-label">${s.title}</span>
      </div>
      <p class="pcard-body">${s.body}</p>
      <div class="pcard-footer">
        <svg class="pcard-clock-icon" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" stroke-width="1"/>
          <path d="M6.5 3.5V7L8.5 8.5" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="pcard-timeline">TYPICAL TIMELINE: ${s.timeline}</span>
      </div>
    </div>
  `).join('');

  const dotsHTML = steps.map((_, i) =>
    `<button type="button" class="pdot${i === 0 ? ' is-active' : ''}" data-index="${i}" aria-label="Step ${i + 1}"></button>`
  ).join('');

  return `
    ${renderNav('journey')}

    <section class="process-section">
      <div class="process-header">
        <div class="process-header-left">
          <p class="process-eyebrow">02</p>
          <h1 class="process-heading">THE PROCESS</h1>
          <p class="process-subheading"># Your Path to Launch.</p>
          <p class="process-desc">From the first conversation to lift-off — a clear, honest account of what the process involves and what to expect at every stage.</p>
        </div>
        <div class="process-nav">
          <button type="button" class="process-nav-btn" id="processPrev" aria-label="Previous step">←</button>
          <span class="process-nav-counter"><span id="processCounter">01</span> / 04</span>
          <button type="button" class="process-nav-btn" id="processNext" aria-label="Next step">→</button>
        </div>
      </div>

      <div class="process-cards teaser-carousel" id="processCards">
        ${cardsHTML}
      </div>

      <div class="process-dots">
        ${dotsHTML}
      </div>
    </section>

    <section class="process-cta-strip">
      <div class="process-cta-strip-img">
        <img src="/src/images/journey/joureny-hero.png" alt="">
        <div class="process-cta-strip-img-overlay"></div>
      </div>
      <div class="process-cta-strip-content">
        <h2 class="process-cta-strip-heading">START THE<br>CONVERSATION.</h2>
        <p class="process-cta-strip-sub">Your advisory call is the first step. It costs nothing and commits you to nothing — except a better understanding of what's possible.</p>
        <button type="button" class="process-cta-strip-btn" id="pageCtaBtn">REQUEST YOUR ADVISORY CALL →</button>
      </div>
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
