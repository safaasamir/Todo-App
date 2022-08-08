import {Route ,Switch} from "react"
import AllMeetUp from "./pages/AllMeetup"
import NewMeetUp from "./pages/NewMeetup"
import Favourite from "./pages/Favourite"

function App (){

    return(
        <div>
       <Switch>
       <Route path="/" exact><AllMeetUp/></Route>,
       <Route path="/NewMeetUp"><NewMeetUp/></Route>,
       <Route path="/Favourite"><Favourite/></Route>
       </Switch>
       </div>
    )
}
export default App