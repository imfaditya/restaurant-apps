import CONFIG from './config';

const API_ENDPOINT = {
  GET_RESTAURANT: `${CONFIG.BASE_URL}list`,
  GET_DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  POST_REVIEW_RESTAURANT: `${CONFIG.BASE_URL}review`,
  GET_FAVORITE_FOOD: `${CONFIG.BASE_URL_FAVORITE_FOOD}random.php`,
};

export default API_ENDPOINT;
