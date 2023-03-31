import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import Edit from "./components/Edit";
import "./App.css";
import EditModal from "./components/EditModal";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  let [editMovie, setEditMovie] = useState({
    title: "",
    openingText: "",
    releaseDate: "",
    id: "",
  });

  
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        
        "https://reactproject-78ba1-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // const addingMoviewHandler = () => {

  // }

  async function addMovieHandler(movie) {
    
    const repsonse = await fetch(
      "https://reactproject-78ba1-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await repsonse.json();

    fetchMoviesHandler();
  }

  async function removeMovieHandler(movie) {
    // console.log(movie);
    const repsonse = await fetch(
      `https://reactproject-78ba1-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${movie}.json`,
      {
        method: "DELETE",
        body: JSON.stringify(movie),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await repsonse.json();

    fetchMoviesHandler();
  }

  

  async function EditMovieHandler(movie) {

      setEditMovie(movie);


  }


  async function saveMovieHandler() {
    

  const repsonse = await fetch(`https://reactproject-78ba1-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${editMovie.id}.json`, {
    method: 'PUT',
    body: JSON.stringify(editMovie),
    headers: {
      'Content-type' : 'application/json'
    }
  });
  const data = await repsonse.json();

  fetchMoviesHandler()
}


const hideModalHandler = () => {
  setShowModal(false)
}

const showModalHandler = () => {
  setShowModal(true)
}




  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = (
      <MoviesList
        movies={movies}
        onDeleteUser={removeMovieHandler}
        onEdit={EditMovieHandler}
        show={showModalHandler}
      />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  const valueChangeHandler = (event) => {

    const { name, value } = event.target
    setEditMovie({
      ...editMovie,
      [name]: value,

 
      
    });
    
   }
 

   async function submitHandler(event) {
    event.preventDefault();

    if(editMovie.title.trim().length === 0 || editMovie.openingText.trim().length === 0 || editMovie.releaseDate.trim().length === 0) {
      alert('fill in all fields')
      return;
    } else {
      await saveMovieHandler();

    setEditMovie({
      title: "",
      openingText: "",
      releaseDate: "",
      id: "",
    }, setShowModal(false))
    }

    
    
  }
  


  
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>

      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      {showModal && <section>
        <Edit editMovie={editMovie} onChange={valueChangeHandler} onSub={submitHandler} onHide={hideModalHandler} ></Edit>
      </section> }
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
