class FavoriteFood extends HTMLElement {
  set food(food) {
    this._food = food[0];
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="fav-food__image-wrapper">
        <img src="${this._food.strMealThumb}" alt="favorite food image">
      </section>
      <section class="fav-food__content-wrapper">
        <div>
          <h3 tabindex="0">${this._food.strMeal}</h3>
          <p tabindex="0" class="food__type">${this._food.strCategory}</p>
          <p tabindex="0">From ${this._food.strArea}</p>
        </div>
      </section>
    `;
  }
}


customElements.define('favorite-food', FavoriteFood);