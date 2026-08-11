export function renderNav(active = 'home') {
  return `
    <nav class="site-nav" id="siteNav">
      <a href="#" class="nav-logo">Orbital<span> Ascent</span></a>
      <div class="nav-links">
        <a href="#experience" class="nav-link${active === 'experience' ? ' is-active' : ''}">The Experience</a>
        <a href="#journey" class="nav-link${active === 'journey' ? ' is-active' : ''}">The Journey</a>
      </div>
      <button type="button" class="nav-cta" id="navCta">Join the List</button>
    </nav>
  `;
}
