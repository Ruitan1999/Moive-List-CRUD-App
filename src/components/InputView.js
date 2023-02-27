import React, { Fragment, useRef, useState } from "react";
import classes from "./AddMovie.module.css";

const InputView = (props) => {
  return (
    <form onSubmit={props.submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" title={props.titleTest} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea
          rows="5"
          id="opening-text"
          openingtext={props.openingText5}
        ></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="date" id="date" releasedate={props.releaseDate} />
      </div>
      <button onClick={props.sendForm}>Add Movie</button>
    </form>
  );
};

export default InputView;
