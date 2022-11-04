import RestaurantsSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import PostReview from '../../utils/post-review';
import {
  createErrorGetDataTemplate,
  createLoadScreenTemplate,
  createRestaurantDetailItemTemplate,
  createReviewRestaurantTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class="load__container"></div>
      <div class="detail"></div>
      <div class="likeBtnContainer"></div>
    `;
  },

  async afterRender() {
    const loadContainer = document.querySelector('.load__container');
    loadContainer.innerHTML = createLoadScreenTemplate();

    const detailContainer = document.querySelector('.detail');
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    try {
      const restaurant = await RestaurantsSource.detailRestaurant(url.id);
      loadContainer.style.display = 'none';
      detailContainer.innerHTML = createRestaurantDetailItemTemplate(restaurant);
      const reviewContainer = document.querySelector('.detail__review');
      restaurant.customerReviews.forEach((review) => {
        reviewContainer.innerHTML += createReviewRestaurantTemplate(review);
      });

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('.likeBtnContainer'),
        restaurant: {
          id: restaurant.id,
          pictureId: restaurant.pictureId,
          name: restaurant.name,
          address: restaurant.address,
          city: restaurant.city,
          rating: restaurant.rating,
          description: restaurant.description,
        },
      });

      const inputName = document.querySelector('.input__name');
      const inputReview = document.querySelector('.input__review');
      const submitButton = document.querySelector('.input__submit');
      PostReview.init({
        id: restaurant.id,
        inputName,
        inputReview,
        submitButton,
        reviewContainer,
      });
    } catch (error) {
      detailContainer.innerHTML = createErrorGetDataTemplate();
    }
  },
};

export default Detail;
