const assert = require('assert');

Feature('Add Review Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Add new review to the restaurant', async ({ I }) => {
  const name = "User Test 3";
  const review = "Food is good 3!";

  I.seeElement('.restaurant-item a');
  const firstRestaurant = locate('.restaurant-item a').first();
  I.click(firstRestaurant);
  I.waitForElement('.detail__input-review', 5);
  I.fillField('.input__name', name);
  I.fillField('.input__review', review);
  I.click(locate('.input__submit'));

  const lastReviewer = await I.grabTextFrom(locate('.review-identity b').last());
  const lastReview = await I.grabTextFrom(locate('.review-content p').last());
  assert.strictEqual(name, lastReviewer);
  assert.strictEqual(review, lastReview);
});
