const testAddFavoriteRestaurant = require('./helpers/testAddFavoriteRestaurant');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Show empty favorite restaurant section', ({ I }) => {
  I.see('Your Favorite Restaurant', '.restaurant-list-title');
  I.see('Your Data Empty', '.empty-data');
});

Scenario('Liking one restaurant', async ({ I }) => {
  await testAddFavoriteRestaurant(I);
});
