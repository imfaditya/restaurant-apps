class Restaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h2 class="restaurant-list-title" tabindex="0"></h2>
    <section class="restaurant-list"></section>
    `;
  }
}

customElements.define('restaurant-section', Restaurant);
