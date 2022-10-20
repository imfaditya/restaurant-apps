class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event){
    this._event = event;
    this.render();
  }

  render() {
    this.innerHTML = `
      <img class="header__logo" src="./images/icon/logo-on-white.svg" alt="logo">
      <div class="header__hamburger-wrapper" aria-label="toggle navigation bar"><button class="hamburger-link">☰</button></div>
      <nav class="nav">
        <ul class="nav__list">
          <li><a class="nav__item home" href="#">Home</a></li>
          <li><a class="nav__item favorite" href="#">Favorite</a></li>
          <li><a class="nav__item about-us" href="https://www.linkedin.com/in/imfaditya/">About Us</a></li>
        </ul>
      </nav>
    `;

    this.querySelector('.hamburger-link').addEventListener('click', event => {
      this.querySelector('.nav').classList.toggle('active');
      event.stopPropagation();
    })

    document.querySelector('main').addEventListener('click', event => {
      this.querySelector('.nav').classList.remove('active');
      event.stopPropagation();
    });
  }
}

customElements.define('app-bar', AppBar);