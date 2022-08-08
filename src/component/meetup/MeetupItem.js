import style from"./MeetupItem.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { library } from "@fortawesome/fontawesome-svg-core";
 import {  faStar } from '@fortawesome/free-solid-svg-icons'
//  import MeeetupList from"./MeeetupList"

 library.add(faStar);

function MeetupItem(props)
{
    const{img,title,description}=props;
  

  return(
    <div className={style.big}>
    <div className={style.item }>
          <div className= {style.image}>
            <img className={style.img} src={img} alt={title}/>
            </div>
                 <div className={style.content}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div>
                      <button className="btn btn-dark"><FontAwesomeIcon icon="star" /></button>
                    </div>
                 </div>
      </div>
      </div>
  )
}
export default MeetupItem