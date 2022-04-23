import { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import "../../App.css";
import "../CssFIles/container.css";
import { useParams } from "react-router-dom";
import Ratings from "../shared/Ratings";
import Review from "./Review";

const MovieDetail = () => {
  const [movies, setMovies] = useState([]);
  const [casts, setCasts] = useState([]);
  const params = useParams();

  useEffect(() => {
    getMovies();
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

  return (
    <div className="App2">
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

                <Review movieId={movie.id} />
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
            <p>
              <b>{cast.title}</b>
            </p>
            <p>
              <i>{cast.name}</i>
            </p>
          </div>
        );
      })}
      {/* {JSON.stringify(movies)} */}
    </div>
  );
};

export default MovieDetail;
