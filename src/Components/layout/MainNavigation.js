import React from "react";
import classes from "./MainNavigation.module.css";
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/Favorite-context";

export const MainNavigation = () => {
  const favoriteCtx = useContext(FavoritesContext);
  const total = favoriteCtx.totalFavorites;
  return (
    <headrer className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/NewMetup">New Meetups</Link>
          </li>
          <li>
            <Link to="/Favroits"> My Favroits</Link>
            <span className={classes.badge}>{total}</span>
          </li>
        </ul>
      </nav>
      <Outlet />
    </headrer>
  );
};
