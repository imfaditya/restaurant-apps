import '../components/hero';
import '../components/favorite-food';
import '../components/restaurant';
import RestaurantsSource from '../../data/restaurant-source';
import {
  createErrorGetDataTemplate,
  createFavoriteFoodItemSkeletonTemplate,
  createFavoriteFoodItemTemplate,
  createRestaurantItemSkeletonTemplate,
  createRestaurantItemTemplate,
} from '../templates/template-creator';
import FavoriteFood from '../../data/favorite-food-source';

const Home = {
  async render() {
    return `
      <hero-section></hero-section>
      <restaurant-section></restaurant-section>
      <favorite-food></favorite-food>
    `;
  },

  async afterRender() {
    const title = document.querySelector('.restaurant-list-title');
    title.innerText = 'Explore Restaurant';
    const titleFavoriteFood = document.querySelector('.favorite-food-title');
    titleFavoriteFood.innerText = 'Favorite Food';

    try {
      const restaurantsContainer = document.querySelector('.restaurant-list');
      restaurantsContainer.innerHTML = createRestaurantItemSkeletonTemplate(20);
      const restaurants = await RestaurantsSource.listRestaurants();
      restaurantsContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      const favoriteFoodContainer = document.querySelector('.favorite-food-item');
      favoriteFoodContainer.innerHTML = createFavoriteFoodItemSkeletonTemplate();
      const food = await FavoriteFood.itemFavoriteFood();
      favoriteFoodContainer.innerHTML = createFavoriteFoodItemTemplate(food);
    } catch (error) {
      const restaurantsContainer = document.querySelector('.restaurant-list');
      restaurantsContainer.innerHTML = createErrorGetDataTemplate();
    }
  },
};

export default Home;
