import React, { useState, useEffect } from "react";
import useAxios from "axios-hooks";
import axios from "axios";
import Fuse from "fuse.js";
import Ratings from "../shared/Ratings";
import { Link } from "react-router-dom";
import "../CssFIles/card.css";
import "../CssFIles/SearchBar.css";
import "../CssFIles/searchResults.css";
import SearchIcon from "@mui/icons-material/Search";
import "../CssFIles/Popular.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import potatoe from "../../Images/Potatoe.png";
import fry from "../../Images/fryLogo.png";
import { useParams } from "react-router-dom";
import ratings from "../shared/Ratings";

const SearchResults = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { i18n, t } = useTranslation(["common"]);
  const [unwatched, setUnwatched] = useState("");
  const [watched, setWatched] = useState({});
  const params = useParams();

  useEffect(() => {
    getMoviesFromApi();
    getUnwatched();
    getWatched();
  }, []);

  const options = {
    includeScore: true,
    keys: ["title", "genre"],
  };
  const fuse = new Fuse(allMovies, options);

  const getMoviesFromApi = async () => {
    try {
      let res = await axios.get("/api/movies/");
      console.log(res.data);
      setAllMovies(res.data.results);
      console.log("Set Movies:", res.data.results);
    } catch (err) {
      alert("error getting movies");
    }
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    const result = fuse.search(e.target.value);
    // Mapping through the results and displaying only y.item
    let MovieData = result.map((findMovie) => findMovie.item);
    setFilteredMovies(MovieData);
  };

  const getRatings = async (data) => {
    const movieInfo = await Promise.all(
      data.map(async (movie) => {
        let res = await axios.get("/api/movies/:id/watched"); // will be where axios call to get review is
        // const prereview that is pull it from the res.data

        const review = res.data.id;

        return { watched_rating: movie.watched_rating };
        // currently movies ->pass the movies id to a function that will do an axios call to review pull percentage from whichever axios call will get you the percentage return your object with info that you want
      })
    );
    return movieInfo;
  };

  const getUnwatched = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}/unwatched`);
      setUnwatched(res.data[0]);
      console.log("PARAMS");
      console.log("Unwatched:", res.data);
    } catch (err) {
      alert("Error in getting unwatched reviews");
      console.log(err);
    }
  };

  const getWatched = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}/watched`);
      setWatched(res.data[0]);
      console.log("Watched:", res.data);
    } catch (err) {
      alert("Error in getting watched reviews");
    }
  };

  return (
    <div className="App1">
      <div className="searchall">
        <div className="sline"></div>
        <h1 className="searchall2">{t("common:searchresultall")}</h1>
        <div className="bline"></div>
      </div>

      {/* <h1>Search Results</h1>
      <div className='searchall2' >
      <div className='line'>
        </div>
        </div> */}

      <div className="searchInputs1">
        <input
          className=" searching"
          onChange={handleSearchTermChange}
          value={searchTerm}
          type="text"
          placeholder={t("common:searchmovies")}
        ></input>

        <div className="searchiconall">
          <SearchIcon />
        </div>
      </div>
      <br />
      <div className="moviesearch">
        {filteredMovies ? (
          filteredMovies.map((movies) => {
            return (
              <div key={movies.id}>
                <div className="movie-details">
                  <li className="Popular-P">
                    <div className="cards ">
                      <Link to={`/movies/${movies.id}`}>
                        <figure className="card ">
                          <img
                            className="Top-10"
                            src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                            width={100}
                          />
                        </figure>
                      </Link>
                    </div>

                    {/* <div className="potatoe-rating">
                      <img src={potatoe} width="50px" />
                      <div className="rating-number">
                        <h5>pre-rating: </h5>

                        <h3 className="pop-percent">{unwatched}%</h3>
                      </div>
                      <img src={fry} width="40px" />

                      <div className="rating-number">
                        <h5>post-rating: </h5>
                        <h3 className="pop-percent">
                          {movies.watched_rating}%
                        </h3>
                      </div>
                    </div> */}

                    <div className="movie-details" key={movies.id}>
                      <div className="">
                        <h2 className="movie-title">{movies.title} </h2>
                      </div>

                      <h6 className="release">
                        {" "}
                        release: {movies.release} runtime:{movies.runtime}
                      </h6>

                      <div className="story-line">
                        <h4 className="story-title">Story Line</h4>
                        <p className="information">{movies.overview}</p>
                      </div>
                    </div>

                    <br />
                  </li>
                </div>
              </div>
            );
          })
        ) : (
          <p>Not searching yet</p>
        )}
      </div>
      <br />
      <hr></hr>
      {allMovies.map((m) => {
        return (
          <div className="searchresults">
            <div key={m.id}>
              <h4>{m.title}</h4>
              <div className="cards">
                <Link to={`/movies/${m.id}`}>
                  <figure className="card">
                    <img
                      className="back"
                      src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                      width={170}
                    />
                  </figure>
                </Link>
                {/* <div className="rating-logos">
                  <div className="lil-logo">
                    <img className="" src={fry} width="20px" />
                    <p>{unwatched}</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        );
      })}
      {/* {JSON.stringify(allMovies)} */}
    </div>
  );
};
export default SearchResults;
