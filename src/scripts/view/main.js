import '../components/appbar';
import '../components/restaurant-list';
import '../components/footerbar';
import '../components/favorite-food';
import data from '../../DATA.json';

const main = () => {
  const restaurantList = document.querySelector('restaurant-list');
  const favoriteFood = document.querySelector('favorite-food');
  
  const setRestaurant = () => {
    restaurantList.restaurants = data.restaurants;
  }

  const setFavoriteFood = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php?');
    const responseJSON = await response.json();
    favoriteFood.food = responseJSON.meals;
  }

  setFavoriteFood();
  setRestaurant();
}

export default main;