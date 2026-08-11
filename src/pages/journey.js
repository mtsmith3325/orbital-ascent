import { renderNav } from '../lib/nav.js';

export function renderJourney() {
  return `
    ${renderNav('journey')}

    <section class="page-hero">
      <p class="page-hero-eyebrow">The Process</p>
      <h1 class="page-hero-headline">Your Path<br>to Launch.</h1>
      <p class="page-hero-sub">From the first conversation to lift-off — a clear, honest account of what the process involves and what to expect at every stage.</p>
    </section>

    <section class="page-journey-steps">
      <div class="journey-step reveal">
        <div class="journey-step-num">01</div>
        <div class="journey-step-content">
          <h2 class="journey-step-title">The Advisory Call</h2>
          <p class="journey-step-body">Every mission begins with a conversation. Your assigned advisor — a former mission specialist or senior operations lead — will walk you through the three program options, answer questions about physical requirements, and help you assess which mission is right for where you are now. There is no commitment at this stage. The call typically runs 45–60 minutes.</p>
          <p class="journey-step-meta">Typical timeline: within 48 hours of inquiry</p>
        </div>
      </div>

      <div class="journey-step reveal stagger-1">
        <div class="journey-step-num">02</div>
        <div class="journey-step-content">
          <h2 class="journey-step-title">Medical & Fitness Assessment</h2>
          <p class="journey-step-body">Spaceflight is physically demanding. Before a mission is assigned, all passengers complete a standard aerospace medical clearance: cardiovascular evaluation, inner-ear vestibular testing, and a structured fitness baseline. Our medical partners are located in three cities and offer full confidentiality. The vast majority of applicants clear without issue. The process takes one to two days.</p>
          <p class="journey-step-meta">Typical timeline: 2–4 weeks post-call</p>
        </div>
      </div>

      <div class="journey-step reveal stagger-2">
        <div class="journey-step-num">03</div>
        <div class="journey-step-content">
          <h2 class="journey-step-title">Mission Training</h2>
          <p class="journey-step-body">Pre-flight training is conducted at our facility and runs three to five days for orbital missions, or seven days for lunar and station programs. You will cover emergency protocols, vehicle systems orientation, zero-g adaptation exercises, and suit operations. This is not a simulation of the experience — it is the operational grounding that makes the experience possible. Most guests describe it as the second-most extraordinary week of their lives.</p>
          <p class="journey-step-meta">Typical timeline: 6–10 weeks before launch</p>
        </div>
      </div>

      <div class="journey-step reveal stagger-3">
        <div class="journey-step-num">04</div>
        <div class="journey-step-content">
          <h2 class="journey-step-title">Launch Day</h2>
          <p class="journey-step-body">You arrive at the launch facility the night before. The morning is structured and calm — suit-up, medical check, vehicle walkthrough with the flight crew. There are no surprises at this point. By the time the countdown starts, every system has been verified, every contingency rehearsed. What remains is the launch itself — and nothing in your preparation will fully prepare you for it. That is the point.</p>
          <p class="journey-step-meta">T-minus zero</p>
        </div>
      </div>
    </section>

    <section class="page-cta-section">
      <h2 class="page-cta-headline reveal">Start the<br>Conversation.</h2>
      <p class="page-cta-sub reveal stagger-1">Your advisory call is the first step. It costs nothing and commits you to nothing — except a better understanding of what's possible.</p>
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
