import React ,{useState,useEffect}from 'react'
import EditForm from '../component/meetup/EditForm'

function Edit() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetup, setloadedMeetup] = useState([]);
  useEffect(() => {
    setIsLoading(true);

    fetch("https://react-start-dce6d-default-rtdb.firebaseio.com/meetups.json")
      .then((responce) => {
        if (responce) {
          return responce.json();
        }
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
      .catch((err) => {
        console.log("error1");
      });
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-3">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }

  return (
    <div><h3 className='m-3'> Edit Data</h3><EditForm/></div>
  )
}

export default Edit