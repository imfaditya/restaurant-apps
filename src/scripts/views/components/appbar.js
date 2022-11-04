class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <img class="header__logo" src="./images/icon/logo-on-white.svg" alt="eat-yuk company">
      <div class="header__hamburger-wrapper" aria-label="toggle navigation bar"><button class="hamburger-link">☰</button></div>
      <nav class="nav">
        <ul class="nav__list">
          <li><a class="nav__item home" href="#/">Home</a></li>
          <li><a class="nav__item favorite" href="#/favorite">Favorite</a></li>
          <li><a class="nav__item about-us" href="https://www.linkedin.com/in/imfaditya/" target="_blank" rel="noopener">About Us</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
