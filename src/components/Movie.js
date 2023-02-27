import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  const getID = () => {
    props.onDeleteUser(props.id);
  };

  const editEverything = () => {
    const onEditProps = {
      title: props.title,
      openingText: props.openingText,
      releaseDate: props.releaseDate,
      id: props.id,
    };

    props.onEdit(onEditProps);
  };

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <p>{props.image}</p>
      <button className={classes.remButton} onClick={getID}>
        Remove
      </button>
      <button
        className={classes.ediButton}
        onClick={() => {
          editEverything()
          props.show()
        }}
      >
        Edit
      </button>
    </li>
  );
};

export default Movie;
// (event) =>{onDeleteUserClicked(event)
