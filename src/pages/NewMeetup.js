import AddMeetUp from "../component/meetup/AddMeetup";
import { useNavigate } from "react-router-dom";
import{useState}from"react"
function NewMeetup() {
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  function AddMeetUpHandelar(meetupdata) {
 
    fetch(
      "https://react-start-dce6d-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupdata),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then(() => {
        return navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        console.log("there are error in data");
        setIsLoading(false);
        setError("Couldn't find data, retry later!");
      });
  }
  if (error) {
    return (
      <div className="alert alert-danger">
        <h3 className="text-center">{error}</h3>
       
      </div>
    );
  }
  return (
    <div>
      <h3 className="m-2 ">Add meet up</h3>
      <AddMeetUp OnAddmeetup={AddMeetUpHandelar} />
    </div>
  );
}
export default NewMeetup;
