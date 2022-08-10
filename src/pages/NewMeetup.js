import AddMeetUp from "../component/meetup/AddMeetup"
import{useNavigate} from "react-router-dom"
function NewMeetup()
{
  const navigate=useNavigate()
  function AddMeetUpHandelar(meetupdata){
 fetch("https://react-start-dce6d-default-rtdb.firebaseio.com/meetups.json",
 {
  method:"POST",
  body: JSON.stringify(meetupdata),
  headers:{"Content-Type":"application/json"}
 }
 ).then(()=>
 {
  navigate("/", { replace: true });
 })
  }
    return(
      <div><h3 className="m-2">Add meet up  </h3>
      <AddMeetUp OnAddmeetup={AddMeetUpHandelar}/></div>  
    )
    
    
}export default NewMeetup