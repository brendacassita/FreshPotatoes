import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const GenreFilter = () => {
  const [popular, setPopular] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  useEffect(() => {
    getPopular();
    // getGenres()
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  function handleMovies(e) {
    let genreMovie = e.target.value;
    console.log(genreMovie);
    genreMovie !== "all"
      ? setFilteredMovies(filterMovies(genreMovie))
      : setFilteredMovies(popular);
  }

  const getPopular = async () => {
    try {
      let res = await axios.get("/api/popular/movies");
      setPopular(res.data.results);
      setFilteredMovies(res.data.results);
      console.log("POPULAR:", res.data.results);
    } catch (err) {
      alert("Error in getting popular");
    }
  };


  ///// HARD CODED DATA FOR NOW /////
  const buttons = [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Action",
      value: 12,
    },
    {
      name: "Comedy",
      value: 35,
    },
    {
      name: "Drama",
      value: 18,
    },
    {
      name: "Family",
      value: 10751,
    },
    {
      name: "Thriller",
      value: 53,
    },
  ];

  function filterMovies(movGenre) {
    let filteredMovies = popular.filter((mov) => {
      return mov.genre_ids.includes(parseInt(movGenre));
    });
    console.log("FIlter:", filteredMovies);
    return filteredMovies;
  }

  return (
    <div>
      <h4 className="genreCategories">{t("common:categories")}</h4>

      {buttons &&
        buttons.map((genre, index) => (
          // <>

          <button
            className="genrebtn"
            key={index}
            value={genre.value}
            onClick={handleMovies}
          >
            {genre.name}
          </button>
          // </>
        ))}
      <div
        className="genreselect"
        style={{ display: "flex", flexDirection: "row" }}
      >
        {filteredMovies.length > 0 &&
          filteredMovies.map((mov) => (
            <div key={mov.id}>
              <img className="imgGenreFilter" src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`} style={{ height: "200px" }} />
              <h5 style={{ textAlign: "center" }}>
                {mov.title}
              </h5>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GenreFilter;
