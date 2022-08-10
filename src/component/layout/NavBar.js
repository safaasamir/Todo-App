import {Link}from "react-router-dom"
function nav(){
    return(
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><h3>ToDo</h3></Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-2">
            <li className="nav-item ">
            <Link className="nav-link active" aria-current="page" to="/">AllMeetUp</Link>
          </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/NewMeetUp">NewMeetUp</Link>
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