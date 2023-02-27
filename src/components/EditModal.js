import React, { Fragment } from "react";
import classes from './ErrorModal.module.css'

const EditModal = (props) => {
  return (
    <Fragment>
    <div className={classes.backdrop}></div>
    <div className={classes.modal}>
        
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        
        <input type='text' id='text' ></input>
        <input type='text' id='text'></input>
        <input type='date' id='date'></input>
      </div>
      <footer className={classes.actions}>
        <button >Ok</button>
      </footer >
    </div>
    </Fragment>
  );
};

export default EditModal;
