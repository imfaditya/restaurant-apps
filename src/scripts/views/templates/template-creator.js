import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <a href="/#/detail/${restaurant.id}">  
      <div class="restaurant__image-wrapper" aria-hidden="true">
          <img class="restaurant__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name} restaurant">
        </div>
        <div class="restaurant__content">
          <p class="content__location" aria-label="location ${restaurant.city}">${restaurant.city}</p>
          <h3 class="content__name">${restaurant.name}</h3>
          <p class="content__rating">Rating ${restaurant.rating}</p>
          <p class="content__description">${restaurant.description}</p>
      </div>
    </a>
  </div>
`;

const createRestaurantDetailItemTemplate = (restaurant) => `
  <div class="detail__image-container">
    <img class="detail__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
  </div>
  <div class="detail__content">
    <div class="detail__header">
      <h2 class="detail__name" tabindex="0">${restaurant.name}</h2>
      <div class="detail__categories" tabindex="0">
        ${restaurant.categories.map((category) => `
          <p class="categories__item">${category.name}</p>
        `).join('')}
      </div>
    </div>
    <p class="detail__location" tabindex="0" aria-label="location ${restaurant.city}">${restaurant.city}</p>
    <p class="detail__rating" tabindex="0" aria-label="rating ${restaurant.rating}">⭐ ${restaurant.rating}</p>
    <p class="detail__description" tabindex="0">${restaurant.description}</p>
  </div>
  <div class="detail__menus">
    <h2 tabindex="0" class="menus__title">Our Special Menu</h2>
    <p tabindex="0"><b>Foods</b></p>
    <div class="menus__food" tabindex="0">
      ${restaurant.menus.foods.map((food) => `
        <p class="menu-item">${food.name}</p>
      `).join('')}
    </div>
    <p tabindex="0"><b>Drinks</b></p>
    <div class="menus__drink" tabindex="0">
      ${restaurant.menus.drinks.map((drink) => `
        <p class="menu-item">${drink.name}</p>
      `).join('')}
    </div>
  </div>
  <div class="detail__input-review">
    <h2 class="input__title" tabindex="0">Add New Review</h2>
    <input class="input__name" type="text" placeholder="Insert Your Name">
    <textarea class="input__review" type="text" placeholder="Insert Your Review"></textarea>
    <button class="input__submit" aria-label="Submit Review">Submit</button>
  </div>
  <div class="detail__review">
    <h2 class="review__title" tabindex="0">Honest Review</h2>
  </div>
`;

const createReviewRestaurantTemplate = (review) => `
  <div class="review-item">
    <div class="review-identity" tabindex="0">
      <p><b>${review.name}</b></p>
      <p>${review.date}</p>
    </div>
    <div class="review-content">
      <p tabindex="0">${review.review}</p>
    </div>
  </div>
`;

const createFavoriteFoodItemTemplate = (food) => `
  <section class="fav-food__image-wrapper">
    <img src="${food.strMealThumb}" alt="favorite food">
  </section>
  <section class="fav-food__content-wrapper">
  <div>
    <h3 tabindex="0">${food.strMeal}</h3>
    <p tabindex="0" class="food__type">${food.strCategory}</p>
    <p tabindex="0">From ${food.strArea}</p>
  </div>
  </section>
`;

const createLikeButtonTemplate = () => `
  <button id="like__button" aria-label="like this restaurant">♡</button>
`;

const createUnlikeButtonTemplate = () => `
  <button id="liked__button" aria-label="unlike this restaurant">♥</button>
`;

const createLoadScreenTemplate = () => `
  <span class="load__circle"></span>
`;

const createErrorGetDataTemplate = () => `
  <h2 class="failed__text">Failed To Get Data <br>:(</h2>
`;
export {
  createFavoriteFoodItemTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailItemTemplate,
  createReviewRestaurantTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
  createLoadScreenTemplate,
  createErrorGetDataTemplate,
};
