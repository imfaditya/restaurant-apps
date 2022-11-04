import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.GET_RESTAURANT);
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.GET_DETAIL_RESTAURANT(id));
    const responseJSON = await response.json();
    return responseJSON.restaurant;
  }

  static async postReview(review) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW_RESTAURANT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    const responseJSON = await response.json();
    return responseJSON;
  }
}

export default RestaurantsSource;
