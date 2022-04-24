import axios from "axios";
import React, { useEffect, useState } from "react";

function Sandbox() {
//   const [popular, setPopular] = useState([]);
//   const [genres, setGenres] = useState([]);
//   const [filteredPopular, setFilteredPopular] = useState(null);

//   useEffect(() => {
//     getPopular();
//   }, []);

//   useEffect(() => {
//     getGenres();
//   }, []);

//   useEffect(() => {
//     setFilteredPopular(getPopular());
//   }, []);

//   function handlePopular(e) {
//     let genrePop = e.target.value;
//     genrePop !== "all"
//       ? setFilteredPopular(filterPopular(genrePop))
//       : setFilteredPopular(getPopular());
//   }

//   const getPopular = async () => {
//     let res = await axios.get("/api/popular/movies");
//     // const movies = this.normalizeData(res.data)
//     console.log(res.data.results);
//     setPopular(res.data.results);
//     return popular;
//   };

//   function filterPopular(popGenre) {
//     let filteredPopular = getPopular.filter(
//       (pop) => pop.genre_ids === popGenre
//     );
//     return filteredPopular;
//   }

//   const getGenres = async () => {
//     let res = await axios.get("api/tmdb_genres");
//     console.log(res.data.genres);
//     setGenres(res.data.genres);
//   };

    const [genres, setGenres] = useState([])
    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState(null)

    ///// USE EFFECTS /////
    useEffect(() => {
        setFilteredMovies(getMovies())
    },[])

    useEffect(() => {
        getGenres()
    },[])

    useEffect(() => {
        getMovies()
    },[])

    ///// HANDLER /////
    function handleMovies(e) {
        let genreMovie = e.target.value
        genreMovie !== "all"
        ? setFilteredMovies(filterMovies(genreMovie))
        : setFilteredMovies(getMovies())
    }

    ///// GENRES /////
    const getGenres = async () => {
        let res = await axios.get("/api/tmdb_genres")
        console.log(res.data.genres)
        setGenres(res.data.genres)
    }

    const renderGenres = () => {
        return genres.map((gen) => (
            <div key={`${gen.id}`}>
                    <p>{gen.id}</p>
                    <p>{gen.name}</p>
            </div>
        ))
    }

    ///// MOVIES /////
    const getMovies = async () => {
        let res = await axios.get("/api/popular/movies")
        console.log(res.data.results)
        setMovies(res.data.results)
    }

    function filterMovies(movGenre) {
        let filteredMovies = getMovies().filter((mov) => mov.genre_ids === movGenre)
        return filteredMovies
    }

  return (
    <div>
        <>
        <button value="all" onClick={handleMovies}>All</button>
        </>
        {genres && genres.map((genre, index) => (
            <>
            <button key={index} value={genre.id} onClick={handleMovies}>
                {genre.name}
            </button>
            </>
        ))}
        {/* <div>
            {filteredMovies && filteredMovies.map((mov) => (
                <div key={mov.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`} />
                </div>
            ))}
        </div> */}
        

      {/* <h1>Sandbox</h1>

      {genres &&
        genres.map((genre, index) => (
          <>
            <button
              className="genrebtn"
              key={index}
              value={genre.name}
              onClick={handlePopular}
            >
              {genre.name}
            </button>
          </>
        ))}

      <div>
        {filteredPopular &&
          filteredPopular.map((pop) => (
            <div key={pop.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${pop.poster_path}`}
                alt={`${pop.title}`}
                style={{ height: "200px" }}
              />
            </div>
          ))}
      </div> */}
    </div>
  );
}

export default Sandbox;
