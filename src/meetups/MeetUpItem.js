import React, { useContext } from "react";
import { Card } from "../Components/ui/Card";
import classes from "./MeetUpItem.module.css";
import FavoritesContext from "../store/Favorite-context";
export const MeetUpItem = (props) => {
  const favoriteCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.meetup.id);
  function toggleHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.meetup.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.meetup.id,
        title: props.meetup.title,
        description: props.meetup.title,
        image: props.meetup.image,
        address: props.meetup.address,
      });
    }
  }
  return (
    <li className={classes.item} style={{ listStyle: "none" }}>
      <Card>
        <div className={classes.image}>
          <img src={props.meetup.image} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleHandler}>
            {itemIsFavorite ? "Remove from Favorite" : "to favorite "}
          </button>
        </div>
      </Card>
    </li>
  );
};
