const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('Should return all the restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    const restaurants = await favoriteRestaurant.getAllRestaurants();

    expect(restaurants).toEqual([
      { id: 1 },
      { id: 2 }
    ]);
  });

  it('Should return the specific restaurant using property id', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getRestaurant(1))
      .toEqual({ id: 1 });
    expect(await favoriteRestaurant.getRestaurant(2))
      .toEqual({ id: 2 });
  });

  it('Should handle call the specific restaurant using invalid property id', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getRestaurant(3))
      .toEqual(undefined);
    expect(await favoriteRestaurant.getRestaurant())
      .toEqual(undefined);
  })

  it('Should not add a restaurant if it doesnt have property id', async () => {
    favoriteRestaurant.putRestaurant({ location: 'A' });
    favoriteRestaurant.putRestaurant({ wrongProp: 'B' })
    
    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([]);
  });

  it('Should remove favorite restaurant from the list using property id', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    favoriteRestaurant.deleteRestaurant(2);

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([{ id: 1 }]);

    favoriteRestaurant.deleteRestaurant(1);

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([]);
  });

  it('Should handle remove restaurant that not in the list', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    favoriteRestaurant.deleteRestaurant(3);

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });
}

export default itActsAsFavoriteRestaurantModel;