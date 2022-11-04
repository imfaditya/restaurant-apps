class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="heros-image">
      <h1 class="heros-text" tabindex="0">Eat Yuk, Everything About Food is Here.</h1>
    </div>
    `;
  }
}

customElements.define('hero-section', Hero);
