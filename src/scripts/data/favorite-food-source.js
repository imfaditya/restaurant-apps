import API_ENDPOINT from '../globals/api-endpoint';

class FavoriteFood {
  static async itemFavoriteFood() {
    const response = await fetch(API_ENDPOINT.GET_FAVORITE_FOOD);
    const responseJSON = await response.json();
    return responseJSON.meals[0];
  }
}

export default FavoriteFood;
