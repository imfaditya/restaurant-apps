import '../components/hero';
import '../components/favorite-food';
import '../components/restaurant';
import RestaurantsSource from '../../data/restaurant-source';
import {
  createErrorGetDataTemplate,
  createFavoriteFoodItemTemplate,
  createLoadScreenTemplate,
  createRestaurantItemTemplate,
} from '../templates/template-creator';
import FavoriteFood from '../../data/favorite-food-source';

const Home = {
  async render() {
    return `
      <hero-section></hero-section>
      <div class="load__container"></div>
      <restaurant-section></restaurant-section>
      <favorite-food></favorite-food>
    `;
  },

  async afterRender() {
    const loadContainer = document.querySelector('.load__container');
    loadContainer.innerHTML = createLoadScreenTemplate();

    const title = document.querySelector('.restaurant-list-title');
    const titleFavoriteFood = document.querySelector('.favorite-food-title');
    const restaurantsContainer = document.querySelector('.restaurant-list');
    const favoriteFoodContainer = document.querySelector('.favorite-food-item');

    try {
      const restaurants = await RestaurantsSource.listRestaurants();
      const food = await FavoriteFood.itemFavoriteFood();
      loadContainer.style.display = 'none';
      title.innerText = 'Explore Restaurant';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      titleFavoriteFood.innerText = 'Favorite Food';
      favoriteFoodContainer.innerHTML += createFavoriteFoodItemTemplate(food);
    } catch (error) {
      restaurantsContainer.innerHTML = createErrorGetDataTemplate();
    }
  },
};

export default Home;
