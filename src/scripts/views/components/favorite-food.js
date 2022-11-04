class FavoriteFood extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2 class="favorite-food-title" tabindex="0"></h2>
      <section class="favorite-food-item"></section>
    `;
  }
}

customElements.define('favorite-food', FavoriteFood);
