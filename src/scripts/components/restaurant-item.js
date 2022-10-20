class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render () {
    this.innerHTML = `
    <div class="restaurant__image-wrapper" tabindex="-1">
      <img class="restaurant__image" src="${this._restaurant.pictureId}" alt="photo ${this._restaurant.name} restaurant">
    </div>
    <div class="restaurant__content">
      <p class="content__location" tabindex="0" aria-label="location ${this._restaurant.city}">${this._restaurant.city}</p>
      <h3 class="content__name" tabindex="0">${this._restaurant.name}</h3>
      <p class="content__rating" tabindex="0">Rating ${this._restaurant.rating}</p>
      <p class="content__description" tabindex="0">${this._restaurant.description}</p>
    </div>
    `
  }
}

customElements.define('restaurant-item', RestaurantItem);