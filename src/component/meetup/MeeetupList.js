import MeetupItem from "./MeetupItem";
import style from "./MeetupList.module.css";
import {useNavigate} from "react-router-dom";




function MeetupList(props) {
  const Navigate = useNavigate();

  const { places, plac } = props;

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
    console.log(`id= ${id}`);
  };
  ///////////////////////////

  
  const onEdit = (id) => {
    fetch(
      `https://react-start-dce6d-default-rtdb.firebaseio.com/meetups/${id}.json`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost",
          "Access-Control-Allow-Methods": "GET",
        },
      }
    )
      .then((data) => {
          const item_details = {
            id: data.id,
            title: data.title,
            image: data.image,
            description: data.description,
          };
      })
      .catch((err) => {
        console.log("error1");
      });
    console.log(`id= ${id}`);
  };

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
              
              onEdit(this.item_details);
            }}
            id={place.id}
          />
        ))}
      </ul>
    </div>
  );
}
export default MeetupList;
