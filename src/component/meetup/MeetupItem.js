//import style from"./MeetupItem.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { library } from "@fortawesome/fontawesome-svg-core";
 import {  faStar } from '@fortawesome/free-solid-svg-icons'

 library.add(faStar);
function MeetupItem(props)
{
    const{image,title,discription}=props;

    <div className="card">

    <img className="card-img-top" src={image} alt={title}/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{discription}</p>
      <abutton className="btn btn-primary"><FontAwesomeIcon icon="star" />Name</abutton>
    </div>
  </div>
 
}
export default MeetupItem