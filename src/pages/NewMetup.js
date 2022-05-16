import React from "react";
import { NewMeetupForm } from "../meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";
export const NewMetup = () => {
  const Navigate = useNavigate();

  function addMeetUpHandler(meetupData) {
    fetch(
      "https://react-getting-started-2813d-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      Navigate("/");
    });
  }
  return (
    <section>
      <h1>Add meetUp</h1>

      <NewMeetupForm addMeetUpHandler={addMeetUpHandler} />
    </section>
  );
};
