/* eslint-disable no-alert */
import RestaurantsSource from '../data/restaurant-source';
import { createReviewRestaurantTemplate } from '../views/templates/template-creator';

const PostReview = {
  async init({
    id,
    inputName,
    inputReview,
    submitButton,
    reviewContainer,
  }) {
    this._inputName = inputName;
    this._inputReview = inputReview;
    this._submitButton = submitButton;
    this._reviewContainer = reviewContainer;
    this._idRestaurant = id;

    this._addEvent();
  },

  _addEvent() {
    this._submitButton.addEventListener('click', async () => {
      const response = await RestaurantsSource.postReview({
        id: this._idRestaurant,
        name: this._inputName.value,
        review: this._inputReview.value,
      });

      if (response.error) {
        alert('Failed Add Review :(');
      } else {
        this._showNewData(response.customerReviews);
        this._clearInput();
      }
    });
  },

  _clearInput() {
    this._inputName.value = '';
    this._inputReview.value = '';
  },

  _showNewData(reviews) {
    this._reviewContainer.innerHTML = '<h2 class="review__title" tabindex="0">Honest Review</h2>';
    reviews.forEach((review) => {
      this._reviewContainer.innerHTML += createReviewRestaurantTemplate(review);
    });
  },
};

export default PostReview;
