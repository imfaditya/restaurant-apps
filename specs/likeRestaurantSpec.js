import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import createLikeButtonPresenter from './helpers/testLikeButtonFactories';

describe('Liking a Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="likeBtnContainer"></div>';
  };

  const getLikeButton = () => {
    return document.querySelector('#like__button');
  }

  beforeEach(() => {
    addLikeButtonContainer();
  });

  afterEach(() => {
    FavoriteRestaurantIdb.deleteRestaurant(1);
  })

  it('Should show like button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenter({ id: 1 });

    expect(getLikeButton())
      .toBeTruthy();
  });

  it('Should not show unlike button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenter({ id: 1 });

    expect(document.querySelector('#liked__button'))
      .toBeFalsy();
  });

  it('Should be able to like the restaurant', async () => {
    await createLikeButtonPresenter({ id: 1 });

    const likeButton = getLikeButton();
    likeButton.dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });
  });

  it('Should not be able to like the restaurant again when its already liked', async () => {
    await createLikeButtonPresenter({ id: 1 });

    FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    const likeButton = getLikeButton();
    likeButton.dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants())
      .toEqual([{ id: 1 }]);
  });

  it('Should not be able to like the restaurant when keypath is empty', async () => {
    await createLikeButtonPresenter({});

    const likeButton = getLikeButton();
    likeButton.dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants())
      .toEqual([]);
  });
});
