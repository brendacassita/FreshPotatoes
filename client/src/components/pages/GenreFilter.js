import React, { useState, useEffect } from "react";
import axios from "axios";

const GenreFilter = () => {
  const [filteredMovies, setFilteredMovies] = useState(null);
  useEffect(() => {
    setFilteredMovies(getMovies());
  }, []);

  function handleMovies(e) {
    let genreMovie = e.target.value;
    genreMovie !== "all"
      ? setFilteredMovies(filterMovies(genreMovie))
      : setFilteredMovies(getMovies());
  }

  // const [popular, setPopular] = useState([]);

  // useEffect(() => {
  //   getPopular();
  // }, []);

  // const getPopular = async () => {
  //   try {
  //     let res = await axios.get('/api/popular')
  //     setPopular(res.data)
  //     console.log(res.data)
  //   } catch (err) {
  //     alert("error in getting popular")
  //   }
  // }

  ///// HARD CODED DATA FOR NOW /////
  const movies = [
    {
      id: 8,
      name: "The Crow",
      genre: "drama",
      poster: "https://m.media-amazon.com/images/I/71pdrpHZUfL._AC_SL1500_.jpg",
    },
    {
      id: 4,
      name: "Knives Out",
      genre: "drama",
      poster: "https://m.media-amazon.com/images/I/71enm1zeBvL._AC_SL1500_.jpg",
    },
    {
      id: 13,
      name: "Earth Girls Are Easy",
      genre: "comedy",
      poster: "https://m.media-amazon.com/images/I/51Bw3Zfm97L.jpg",
    },
    {
      id: 11,
      name: "The Three Amigos!",
      genre: "comedy",
      poster: "https://m.media-amazon.com/images/I/51pC6YFqfqL._AC_.jpg",
    },
    {
      id: 15,
      name: "Man of Steel",
      genre: "adventure",
      poster: "https://m.media-amazon.com/images/I/81wbOkjaZ+L._AC_SL1458_.jpg",
    },
    {
      id: 9,
      name: "Labyrinth",
      genre: "adventure",
      poster: "https://m.media-amazon.com/images/I/619yt12HbSL._AC_SL1001_.jpg",
    },
  ];

  const buttons = [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Adventure",
      value: "adventure",
    },
    {
      name: "Comedy",
      value: "comedy",
    },
    {
      name: "Drama",
      value: "drama",
    },
  ];

  function getMovies() {
    const moviesList = movies;
    return moviesList;
  }

  function filterMovies(movGenre) {
    let filteredMovies = getMovies().filter((mov) => mov.genre === movGenre);
    return filteredMovies;
  }

  return (
    <div>
      <h4 className="genreCategories">Categories</h4>
      
      {buttons &&
        buttons.map((genre, index) => (
      
          <>
            
            <button className="genrebtn" key={index} value={genre.value} onClick={handleMovies}>
              {genre.name}
              </button>
            </>
            
        ))}
      <div className="genreselect" style={{ display: "flex", flexDirection: "row" }}>
        {filteredMovies &&
          filteredMovies.map((mov) => (
            <div key={mov.id}>
              <img className="imgGenreFilter" src={mov.poster} style={{ height: "200px" }} />
              <h5 style={{ textAlign: "center" }}>{mov.name}</h5>
            </div>
          ))}
      </div>
    </div>
    
  );
};

export default GenreFilter;
