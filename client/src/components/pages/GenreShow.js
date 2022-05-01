import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../CssFIles/container.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const GenreShow = () => {
  // const [loading, setLoading] = useState(true)
  const [genre, setGenre] = useState([]);
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const { i18n, t } = useTranslation(["common"]);

  console.log(location);

  useEffect(() => {
    getMovies();
    getGenre();
  }, []);

  const getMovies = async () => {
    try {
      let res = await axios.get(`/api/genres/${params.id}`);
      setMovies(res.data.results);
      // setLoading(false)
      console.log("MOVIES:", res.data.results);
    } catch (err) {
      alert("Error in getting movies");
    }
  };

  const renderMovie = () => {
    return movies.map((movie) => (
      <div key={`${movie.id}`}>
        <div>
          <figure className="card">
            <Link to={`/movies/${movie.id}`}>
              <img
                className="genreShow genreImage"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            </Link>
          </figure>
          <h4 className="genreShow">{movie.title}</h4>
        </div>
      </div>
    ));
  };

  const getGenre = async () => {
    try {
      let res = await axios.get(`/api/genres`);
      setGenre(
        res.data.genres.find((genre) => {
          return genre.id == `${params.id}`;
        })
      );
      console.log("GENRE:", res.data.genres);
    } catch (err) {
      alert("Error getting genre id");
    }
  };

  const params = useParams();

  return (
    <div className="App1">
      <div className="searchall">
        <div className="sline"></div>
        <h1 className="searchall2"> {t(`common:${genre.name}`)}</h1>
        <div className="bline"></div>
      </div>
      <div className="rowdata">
        <div className="wrapper">
          {/* ADDED IN IN-LINE STYLING TO FIX, NOT SURE WHERE THIS GOES IN THE CSS FILE */}
          <div
            className="cards "
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {renderMovie()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenreShow;
