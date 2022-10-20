class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="footer__description">
        <img src="./images/icon/logo-on-white.svg" alt="company logo">
        <p>Find The Best Restaurant Recommendation In Town</p>
        <p></p>
      </section>
      <section class="footer__social-media">
        <a href="#"><img src="./images/icon/email.png" alt="email icon"></a>
        <a href="#"><img src="./images/icon/instagram.png" alt="instagram icon"></a>
        <a href="#"><img src="./images/icon/tik-tok.png" alt="tik-tok icon"></a>
      </section>
    `;
  }
}

customElements.define('footer-bar', FooterBar);