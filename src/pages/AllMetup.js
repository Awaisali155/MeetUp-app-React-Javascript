import React, { useState, useEffect } from "react";
import { MeetulList } from "../meetups/MeetulList";
export const AllMetup = () => {
  const [reciveData, setReciveData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getMeetUpData();
  }, []);

  function getMeetUpData() {
    fetch(
      "https://react-getting-started-2813d-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meets = [];
        for (const key in data) {  
          const meet = {
            id: key,
            ...data[key],
          };
          meets.push(meet);
        }
        console.log(meets, "meet");
        setReciveData(meets);

        setLoad(false);
      });
  }
  {
    if (load) {
      return (
        <section>
          <p>loading...</p>
        </section>
      );
    }
  }
  console.log(reciveData, "jhkjhj");
  return (
    <section>
      <h1>AllMetup</h1>
      <MeetulList meetups={reciveData} />
    </section>
  );
};
