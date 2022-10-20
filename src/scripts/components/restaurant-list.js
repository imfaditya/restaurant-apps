import './restaurant-item';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = ``;
    this._restaurants.forEach(restaurant => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.setAttribute('aria-label', "restaurant item");
      restaurantItem.setAttribute('tabindex', 0)
      restaurantItem.restaurant = restaurant;
      this.appendChild(restaurantItem);
    })
  }
}

customElements.define('restaurant-list', RestaurantList);