import {Link}from "react-router-dom"
function nav(){
    return(
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><h3>To_Do_App</h3></Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-2">
            <li className="nav-item ">
            <Link className="nav-link active" aria-current="page" to="/">All-MeetUp</Link>
          </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/NewMeetUp">ADD-MeetUp</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/List">Another-product</Link>
              </li>
              
    
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default nav