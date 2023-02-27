import React, { Fragment, useRef, useState } from "react";
import classes from "./AddMovie.module.css";

function Edit(props) {

  const valueHandler = {
    title: props.editMovie.title,
    openingText: props.editMovie.openingText,
    releaseDate: props.editMovie.releaseDate,
  } ;
   
  return (
    <Fragment>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <form onSubmit={(event) => props.onSub(event)}>
            <div className={classes.control}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={valueHandler.title}
                onChange={(event) => props.onChange(event)}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="opening-text">Opening Text</label>
              <textarea
                rows="5"
                id="opening-text"
                name="openingText"
                value={valueHandler.openingText}
                onChange={(event) => props.onChange(event)}
              ></textarea>
            </div>
            <div className={classes.control}>
              <label htmlFor="date">Release Date</label>
              <input
                type="date"
                id="date"
                name="releaseDate"
                value={valueHandler.releaseDate}
                onChange={(event) => props.onChange(event)}
              />
            </div>

            <button>Save Movie</button>
          </form>
          <button
            className={classes.remButton}
            onClick={() => {
              props.onHide()

            }}
          >
            Close Editor
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Edit;
