import { createContext, useState } from "react";
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetUpId) => {},
  itemIsFavorite: (meetUpId) => {},
});
export function FavoriteConextProvider(props) {
  const [userFavorites, setuserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setuserFavorites((PreuserFavorites) => {
      return PreuserFavorites.concat(favoriteMeetup);
    });
  }
  function removeFavoriteHandler(meetUpId) {
    setuserFavorites((PreuserFavorites) => {
      return PreuserFavorites.filter((meetUp) => meetUp.id !== meetUpId);
    });
  }
  function itemIsFavoriteHandler(meetUpId) {
    return userFavorites.some((meetUp) => meetUp.id === meetUpId);
  }
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
