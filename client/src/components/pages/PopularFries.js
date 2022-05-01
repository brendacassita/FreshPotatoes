import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import "../CssFIles/Popular.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import frylogo from "../../Images/fryLogo.png";

const PopularFries = () => {
  const [top10, setTop10] = useState([]);
  const [per, setPer] = useState(10);
  const [count, setCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
    getTop10();
    console.log("in useeffect");
  }, []);

  const getPopular = async (data, page) => {
    const movieInfo = await Promise.all(
      data.map(async (movie, ind) => {
        let res = await axios.get(`/api/movies/${movie.movie_id}`);
        const poster = `https://image.tmdb.org/t/p/w500${res.data.poster_path}`;
        const id = res.data.id;
        const name = res.data.title;
        const release = res.data.release_date;
        const runtime = res.data.runtime;
        const plot = res.data.overview;
        const index = ind + ((page - 1) * 10 + 1);

        return {
          poster,
          id,
          name,
          release,
          runtime,
          plot,
          watched_rating: movie.watched_rating,
          index,
        };
      })
    );
    return movieInfo;
  };

  const getTop10 = async () => {
    try {
      let res = await axios.get("/api/pagetopfries/?per=10");
      const mov = await getPopular(res.data.movie, 1);
      setPer(res.data.per);
      setCount(res.data.count);
      setTop10(mov);
      console.log("res:", res);
    } catch (err) {
      alert("error in getting top 10 movies");
    }
  };

  const getMoreThanTop10 = async (page) => {
    try {
      let res = await axios.get(`/api/pagetopfries/?page=${page}`);
      const mov = await getPopular(res.data.movie, page);
      setCurrentPage(page);
      setTop10(mov);
    } catch (err) {
      alert("error in getting more top movies");
    }
  };

  const renderButtons = () => {
    const numPage = Math.ceil(count / per);
    console.log("numPage:", numPage);
    const buttonArr = [];
    for (let i = 1; i <= numPage; i++) {
      buttonArr.push(
        <button
          key={i}
          className="pagebutton"
          onClick={() => {
            getMoreThanTop10(i);
          }}
        >
          {i}
        </button>
      );
    }
    return buttonArr;
  };

  const renderMovies = () => {
    return top10.map((movie) => (
      <div key={movie.id} className="display">
        <div className="movie-details">
          <li className="Popular-P">
            <h2 className="order">#{movie.index}</h2>

            <div className="cards">
              <Link to={`/movies/${movie.id}`}>
                <figure className="card">
                  <img className="Top-10" src={movie.poster} />
                </figure>
              </Link>
            </div>

            <div className="potatoe-rating">
              <img src={frylogo} width="50px" />
              <div className="rating-number">
                <h5>post-rating:</h5>
                <h3 className="pop-percent">
                  {movie.watched_rating.toFixed(0)}%
                </h3>
              </div>
            </div>

            <div className="movie-details" key={movie.id}>
              <div>
                <h2 className="movie-title">{movie.name}</h2>
              </div>

              <h6 className="release">
                Release: {movie.release} | Runtime: {movie.runtime} min
              </h6>

              <div className="story-line">
                <h4 className="story-title">Story Line</h4>
                <p className="information">{movie.plot}</p>
              </div>
            </div>

            <br />
          </li>
        </div>
      </div>
    ));
  };

  return (
    <div className="App1">
      <div className="searchall">
        <div className="sline"></div>
        <div className="titlename"></div>
        <h1 className="searchall2">{t("common:popularfries")}</h1>
        <div className="bline"></div>
      </div>
      <p className="miniwording">* {t("common:5minfries")}</p>
      <hr />
      <br />

      <ol start={(currentPage - 1) * 10 + 1}>{renderMovies()}</ol>
      <div>{renderButtons()}</div>
    </div>
  );
};

export default PopularFries;
