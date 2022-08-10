import React from "react"
import {Route,Routes} from 'react-router-dom'
import AllMeetUp from "./pages/AllMeetup"
import NewMeetUp from "./pages/NewMeetup"
import Anotherproduct from "./pages/AnotherProduct"
import Navbar from "./component/layout/NavBar"

function App (){

    return(
        <div>
       <Navbar/>
       <Routes>
       <Route path="/" element={<AllMeetUp/>}/>
       <Route path="/NewMeetUp" element={<NewMeetUp/>}/>
       <Route path="/list" element={<Anotherproduct/>}/>
       <Route path="*" element={<h3>page not found</h3>}/>
         </Routes>  
       
       </div>
    )
}
export default App