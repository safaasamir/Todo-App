import MeetupItem from "./MeetupItem";
import style from "./MeetupList.module.css";
import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";

import EditForm from "./EditForm";
//import nav from "../layout/NavBar";

function MeetupList(props) {
  const { plac, places } = props;
  

  const [edited_data, setEditData] = useState([]);
  const [loading, setIsLoading] = useState(true);

  // const navigate = useNavigate();
  const onDelete = (id) => {
    fetch(
      `https://react-start-dce6d-default-rtdb.firebaseio.com/meetups/${id}.json`,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost",
          "Access-Control-Allow-Methods": "DELETE",
        },
      }
    )
      .then(() => {
        plac(
          places.filter((placee) => {
            return placee.id !== id;
          })
        );
      })
      .catch((err) => {
        console.log("error1");
      });
   
  };
  ///////////////////////////

  const onEdit = (id) => {
    fetch(
      `https://react-start-dce6d-default-rtdb.firebaseio.com/meetups/${id}.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        

        const item_details = {
          id: id,
          title: data.title,
          image: data.image,
          description: data.description,
        };
        setIsLoading(false);
        setEditData(item_details);
       
      })

      .catch((err) => {
        console.log(err);
       
      });
  };

  ///////////
  if (!loading) {
    return (
      (
        <div className="text-center m-3">
          <h3 className="m-3"> Edit Data</h3>
        </div>
      ),
      (<EditForm data={edited_data} items={loading} />)
    );
  }
 
  return (
    <div>
      <ul className={style.list}>
        {places.map((place) => (
          <MeetupItem
            key={place.id}
            img={place.image}
            title={place.title}
            description={place.description}
            onDelete={() => {
              onDelete(place.id);
            }}
            onEdit={() => {
              onEdit(place.id);
            }}
          />
        ))}
      </ul>
    </div>
  );
}
export default MeetupList;
