const assert = require('assert');

const testAddFavoriteRestaurant = async (I) => {
  I.see('Your Data Empty', '.empty-data');
  
  I.amOnPage('/');
  I.see('Explore Restaurant', '.restaurant-list-title');
  I.seeElement('.restaurant-item a');
  
  const firstRestaurant = locate('.restaurant-item a').first();
  const firstTitle = await I.grabTextFrom('.content__name');

  I.click(firstRestaurant);
  I.waitForElement('#like__button', 5);
  I.click('#like__button');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const firstFavoriteTitle = await I.grabTextFrom('.content__name');
  
  assert.strictEqual(firstTitle, firstFavoriteTitle);
};

module.exports = testAddFavoriteRestaurant;