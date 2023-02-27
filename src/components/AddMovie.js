import React, { Fragment, useRef, useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import classes from './AddMovie.module.css';
import ErrorModal from './ErrorModal';
import InputView from './InputView';

function AddMovie(props) {

  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');
  const imgRef = useRef('');

  const [error, setError] = useState();

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...
    if(titleRef.current.value.trim().length === 0 || openingTextRef.current.value.trim().length === 0 || releaseDateRef.current.value.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please Try To Fill in all of the fields before adding Movie'
      });
      return;
    }

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);

    titleRef.current.value = '';
    openingTextRef.current.value = '';
    releaseDateRef.current.value = '';
  }




  const errorModalHandler = () => {
    setError(null)
  }

  return (
    <Fragment>
    
    {error && <ErrorModal title={error.title} message={error.message} onError={errorModalHandler}></ErrorModal>}
   

    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Release Date</label>
        <input type='date' id='date' ref={releaseDateRef} />
      </div>
      
      <button onClick={props.onClick}>Add Movie</button>
    </form>
    </Fragment>
  );
}

export default AddMovie;
