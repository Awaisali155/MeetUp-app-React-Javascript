import React from "react";
import { useContext } from "react";
import { MeetulList } from "../meetups/MeetulList";
import FavoritesContext from "../store/Favorite-context";

export const Favroits = () => {
  const favoriteCtx = useContext(FavoritesContext);
  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <p>you got no favorite</p>;
  } else {
    content = <MeetulList meetups={favoriteCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorite</h1>
      {content}
    </section>
  );
};
