import React from "react";
import { MeetUpItem } from "./MeetUpItem";
import classes from "./MeetupList.module.css";
export const MeetulList = (props) => {
  return (
    <ul className={classes.lost}>
      {props.meetups.map((meetup) => (
        <MeetUpItem meetup={meetup} />
      ))}
    </ul>
  );
};
