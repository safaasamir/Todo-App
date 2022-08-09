 import React , {useState } from "react"
 import MeetupList from "../component/meetup/MeeetupList"



function AllMeetup()
{
  const [isLoading,setIsLoading]=useState(true)
  const [loadedMeetup,setloadedMeetup]=useState([])
  fetch ("https://react-start-dce6d-default-rtdb.firebaseio.com/meetups.json"
  ).then((responce)=>{
   return responce.json()
  }).then(data=>{
    setIsLoading(false)
    setloadedMeetup(data)
  })

  if(isLoading){
    return(
      <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div>
    )
  }
    return(
      <section>
      <h1>All places </h1>
      <MeetupList places={loadedMeetup}/>
      </section>  
    )
    
}export default AllMeetup