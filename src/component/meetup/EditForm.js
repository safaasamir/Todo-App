import React from 'react'
import style from "./AddMeetUp.module.css"

const EditForm = () => {
  return(
  <div className={style.back1}>
      <div className={style.back}>
        <form >
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
              
            ></textarea>
          </div>

          <div className={style.button}>
            <button className="btn btn-success mx-3 px-4" type="submit">
              Save
            </button>
            <button className="btn btn-danger px-3" type="submit">
              cancel
            </button>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default EditForm
