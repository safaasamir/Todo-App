import style from "./MeetupItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";


library.add(faTrash, faEdit);

function MeetupItem(props) {
  
  const { id, img, title, description, onDelete, onEdit} = props;
  
  const handeldelete = () => {
    onDelete(id);
  };
  const handelEdit = () => {
    onEdit(id);
  };

  
  
  return (
    <div className={style.big}>
      <div className={style.item}>
        <div className={style.image}>
          <img className={style.img} src={img} alt={title} />
        </div>
        <div className={style.content}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div>
            <button className={style.buttondelete} onClick={handeldelete}>
              <FontAwesomeIcon icon="trash" />
            </button>
            <button className={style.buttonedit} onClick={handelEdit}>
              <FontAwesomeIcon icon="edit" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MeetupItem;
