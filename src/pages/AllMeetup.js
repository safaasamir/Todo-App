import React, { useState, useEffect } from "react";
import MeetupList from "../component/meetup/MeeetupList";

function AllMeetup() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetup, setloadedMeetup] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    setIsLoading(true);
    setError("")

    fetch("https://react-start-dce6d-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        if (response) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data)
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setloadedMeetup(meetups);
      })
      
      .catch(() => {
        setIsLoading(false);
         setError("Couldn't find products, retry later!");
        console.log("error in fetch(firebase api) open network ")
      });
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-3">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="alert alert-danger">
        <h3 className="text-center">{error}</h3>
        <ul >
        <li >check your  network</li>
        <li >check your Api data</li></ul>
      </div>
    );
  }

  return (
    <section>
      <h1>All places </h1>
      <MeetupList plac={setloadedMeetup} places={loadedMeetup} />
    </section>
  );
}
export default AllMeetup;
