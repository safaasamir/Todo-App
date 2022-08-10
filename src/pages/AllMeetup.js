import React, { useState, useEffect } from "react";
import MeetupList from "../component/meetup/MeeetupList";

function AllMeetup() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetup, setloadedMeetup] = useState([]);
  //const[data,setdata]=useState([])
  useEffect(() => {
    setIsLoading(true);

    fetch("https://react-start-dce6d-default-rtdb.firebaseio.com/meetups.json")
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
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
      ///new
      .catch(
        <div class="alert alert-danger">
          <strong>error 404! </strong> <p> page Not found</p><ul><li>check your network</li>
          <li>check your data</li></ul>
        </div>
      );
  }, []);
  ///new
  const handelarDelete=(id)=>{
    let allData = [...loadedMeetup];
    allData = allData.filter((datas) => datas.id !== id);
    setloadedMeetup(allData);
  }
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-3">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }
  return (
    <section>
      <h1>All places </h1>
      <MeetupList /*new*/ handeldelete={handelarDelete}places={loadedMeetup} />
    </section>
  );
}
export default AllMeetup;
