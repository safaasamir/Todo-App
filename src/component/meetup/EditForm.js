import React, { useState} from "react";
import style from "./AddMeetUp.module.css";
//import { useNavigate } from "react-router-dom";
const EditForm = (props) => {
 // const navigate = useNavigate();
  const { data } = props;

  const [loadingSubmit, setloadingSubmit] = useState(false);
  const [error, setError] = useState("");

  console.log("function has been used");

  const [formData, setFormData] = useState({
    id: data?.id,
    title: data?.title,
    description: data?.description,
    image: data?.image,
  });

  const handleOnChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
   
    e.preventDefault();
    setError("");
    setloadingSubmit(true);

    fetch(
      `https://react-start-dce6d-default-rtdb.firebaseio.com/meetups/${formData.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      }
       )
      .then(() => {
        setloadingSubmit(false);
        window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const oncancel = (e) => {
    e.preventDefault();
    window.location.reload()
  };

  // if (loadingSubmit) {
  //   return (
  //     <div className="d-flex justify-content-center my-3">
  //       <div className="spinner-border" role="status"></div>
  //     </div>
  //   );
  //}
  if (error) {
    return (
      <div className="alert alert-danger">
        <h3 className="text-center">{error}</h3>
        <ul>
          <li>check your network</li>
          <li>check your Api data</li>
        </ul>
      </div>
    );
  }

  return (
    <div className={style.back1}>
      <div>
        <h3 className="m-3"> Edit Data</h3>
      </div>
      <div className={style.back}>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              required
              type="text"
              value={formData.title}
              onChange={handleOnChange}
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              name="title"
              disabled={loadingSubmit}
              
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
              value={formData.image}
              onChange={handleOnChange}
              name="image"
              disabled={loadingSubmit}
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
              value={formData.description}
              onChange={handleOnChange}
              rows="5"
              name="description"
              disabled={loadingSubmit}
            ></textarea>
          </div>

          <div className={style.button}>
            <button 
              className="btn btn-success mx-3 px-4"
              type="submit"
              onClick={onSubmit}
              disabled={loadingSubmit}
            >
              {loadingSubmit ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </>
              ) : (
                "save"
              )}
            </button>
            <button
              className="btn btn-danger px-3"
              type="submit"
              onClick={oncancel}
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
