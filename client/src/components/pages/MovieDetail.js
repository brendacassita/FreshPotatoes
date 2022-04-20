import { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import "../../App.css";
import "../CssFIles/container.css";
import { useLocation, useParams } from "react-router-dom";
import Ratings from "../shared/Ratings";

const MovieDetail = () => {
  const [movies, setMovies] = useState([]);
  const [casts, setCasts] = useState([]);
  // const [roles, setRoles] =  useState([])
  const [unwatched, setUnwatched] = useState([]);
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    getUnwatched();
  }, []);

  useEffect(() => {
    getWatched();
  }, []);

  useEffect(() => {
    getCasts();
  }, []);

  const getMovies = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}`);
      setMovies(res.data);
      console.log(res.data);
    } catch (err) {
      alert("error in getting movies");
    }
  };

  //TODO: need to make 2 separate api calls, one for watched and one for unwatched
  const getUnwatched = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}/unwatched`);
      setUnwatched(res.data);
      console.log(res.data);
    } catch (err) {
      alert("error in getting unwatched reviews");
    }
  };

  const getWatched = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}/watched`);
      setWatched(res.data);
      console.log(res.data);
    } catch (err) {
      alert("error in getting unwatched reviews");
    }
  };

  const getCasts = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}/casts`);
      setCasts(res.data);
      console.log(res.data);
    } catch (err) {
      alert("error in getting cast");
    }
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const params = useParams();
  const location = useLocation();

  const renderUnwatched = () => {
    const uw = unwatched.map((uw) => {
      return (
        <div>
          <p>{uw.unwatched_rating}</p>
        </div>
      );
    });
    console.log(uw.unwatched_rating);
    return uw;
  };

  const renderWatched = () => {
    const w = watched.map((w) => {
      return (
        <div>
          <p>{w.watched_rating}</p>
        </div>
      );
    });
    console.log(w.watched_rating);
    return w;
  };

  return (
    <div className="App">
      {movies.map((movie) => {
        console.log("movie name:", movie.name, movie.trailer);
        return (
          <div key={movie.id}>
            <h1>{movie.movie_name}</h1>
            <div className="movieCard">
              <img src={movie.poster} width={250} />
              <YouTube videoId={movie.trailer} opts={opts} width={500} />
            </div>

            <div>
              <h6>
                {" "}
                {movie.year} | {movie.runtime} | {movie.genre}
              </h6>
              <div>
                <Ratings />
              </div>

              <div id="container">
                <h4>Story Line</h4>
                <p className="information">{movie.plot}</p>
              </div>

              <div className="control"></div>
            </div>
          </div>
        );
      })}

      {casts.map((cast) => {
        console.log("cast data:", cast.name);
        return (
          <div key={cast.id}>
            <img src={cast.headshot} width={100} />
            <p>{cast.title}</p>
            <p>{cast.name}</p>
          </div>
        );
      })}
      {/* {JSON.stringify(movies)} */}
    </div>
  );
};

export default MovieDetail;
