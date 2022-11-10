import '../components/restaurant';
import '../components/hero';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createErrorGetDataTemplate, createLoadScreenTemplate, createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <hero-section></hero-section>
      <div class="load__container"></div>
      <restaurant-section></restaurant-section>
    `;
  },

  async afterRender() {
    const loadContainer = document.querySelector('.load__container');
    loadContainer.innerHTML = createLoadScreenTemplate();
    const title = document.querySelector('.restaurant-list-title');
    const restaurantsContainer = document.querySelector('.restaurant-list');

    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      loadContainer.style.display = 'none';
      title.innerText = 'Your Favorite Restaurant';
      if (restaurants.length) {
        restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      } else {
        restaurantsContainer.innerHTML = '<div></div><p style="margin: auto" tabindex="0" class="empty-data">Your Data Empty</p>';
      }
    } catch (error) {
      restaurantsContainer.innerHTML = createErrorGetDataTemplate();
    }
  },
};

export default Favorite;
