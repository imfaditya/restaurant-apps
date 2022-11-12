const testAddFavoriteRestaurant = require('./helpers/testAddFavoriteRestaurant');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Unliking one restaurants', async ({ I }) => {
  await testAddFavoriteRestaurant(I);
  I.seeElement('.restaurant-item a');
  const firstFavoriteRestaurant = locate('.restaurant-item a').first();

  I.click(firstFavoriteRestaurant);
  I.waitForElement('#liked__button', 5);
  I.click('#liked__button');

  I.amOnPage('/#/favorite');
  I.see('Your Data Empty', '.empty-data');
});