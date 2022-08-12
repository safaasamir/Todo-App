import { Fragment, useRef,useState} from "react";
import style from "./AddMeetUp.module.css";
function AddMeetUp(props) {
  const [loading, setLoading] = useState(false);
  const { OnAddmeetup } = props;
  
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  function Submithandiler(event) {
    setLoading(true)
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const entereddescription = descriptionInputRef.current.value;

    const meetupdata = {
      title: enteredTitle,
      image: enteredImage,
      description: entereddescription,
    };
    OnAddmeetup(meetupdata);
  }
  return (
    <div className={style.back1}>
      <div className={style.back}>
        <form onSubmit={Submithandiler}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              ref={titleInputRef}
              disabled={loading}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Url-image
            </label>
            <input
              required
              type="url"
              className="form-control"
              id="image"
              ref={imageInputRef}
              disabled={loading}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              required
              id="description"
              className="form-control"
              rows="5"
              ref={descriptionInputRef}
              disabled={loading}
            ></textarea>
          </div>

          <div className={style.button}>
          <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </>
          ) : (
            "Add place"
          )}
        </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddMeetUp;
