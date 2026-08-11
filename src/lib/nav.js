export function renderNav(active = 'home') {
  return `
    <nav class="site-nav" id="siteNav">
      <a href="#" class="nav-logo">Orbital<span> Ascent</span></a>
      <div class="nav-right">
        <button type="button" class="nav-cta" id="navCta">Join the List</button>
        <button type="button" class="nav-hamburger" id="navHamburger" aria-label="Open menu" aria-expanded="false">
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
        </button>
      </div>
    </nav>
    <div class="nav-drawer" id="navDrawer" aria-hidden="true">
      <a href="#" class="drawer-link${active === 'home' ? ' is-active' : ''}" id="drawerHome">Home</a>
      <a href="#experience" class="drawer-link${active === 'experience' ? ' is-active' : ''}">The Experience</a>
      <a href="#journey" class="drawer-link${active === 'journey' ? ' is-active' : ''}">The Journey</a>
    </div>
    <div class="nav-drawer-backdrop" id="navDrawerBackdrop"></div>
  `;
}
