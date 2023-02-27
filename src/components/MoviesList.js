import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  const onDeleteUserClicked = (movie) => {
    props.onDeleteUser(movie);
  };

  const onEditClicked = (movie) => {
    props.onEdit(movie);
  };

  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => {
        return (
   
          
          <Movie
            onDeleteUser={onDeleteUserClicked}
            onEdit={onEditClicked}
            show={props.show}
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
            image={movie.image}
          />
       
        );
      })}
    </ul>
  );
};

export default MovieList;
