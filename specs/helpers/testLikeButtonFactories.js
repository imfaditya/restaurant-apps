import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenter = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('.likeBtnContainer'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant: (restaurant),
  });
}

export default createLikeButtonPresenter;