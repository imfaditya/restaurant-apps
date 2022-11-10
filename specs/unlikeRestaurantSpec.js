import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import createLikeButtonPresenter from './helpers/testLikeButtonFactories';

describe('Unlike a Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="likeBtnContainer"></div>';
  };

  const getUnlikeButton = () => {
    return document.querySelector('#liked__button');
  }

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('Should show unlike button when the restaurant has been liked before', async () => {
    await createLikeButtonPresenter({ id: 1 });

    expect(getUnlikeButton())
      .toBeTruthy();
  });

  it('Should not show unlike button when the restaurant has been liked before', async () => {
    await createLikeButtonPresenter({ id: 1 });

    expect(document.querySelector('#like__button'))
      .toBeFalsy();
  })

  it('Should be able to unlike the restaurant', async () => {
    await createLikeButtonPresenter({ id: 1 });

    let restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(restaurants).toEqual([{ id: 1 }]);

    const unlikeButton = getUnlikeButton();
    unlikeButton.dispatchEvent(new Event('click'));

    restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(restaurants).toEqual([]);
  })

  it('Should not error to unlike again the restaurant if the restaurant is not in the list', async () => {
    await createLikeButtonPresenter({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    const unlikeButton = getUnlikeButton();
    unlikeButton.dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants())
      .toEqual([]);
  });
})