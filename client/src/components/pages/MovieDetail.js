import { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import "../../App.css";
import "../CssFIles/container.css";
import { useParams } from "react-router-dom";
import Ratings from "../shared/Ratings";
import Review from "./Review";
import AllReviews from "./AllReviews"
import defaultPotatoe from "../../Images/blackwhitePotatoe.png";

const MovieDetail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState([]);
  const [trailer, setTrailer] = useState({});
  const [copied, setCopied] = useState(false);
  const params = useParams();

  useEffect(() => {
    getMovie();
    getVideos();
    getCast();
    getCrew();
  }, []);

  const getMovie = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}`);
      setMovie(res.data);
      setLoading(false);
      console.log("MOVIE:", res.data);
    } catch (err) {
      alert("Error in getting movie");
    }
  };

  const getVideos = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}/videos`);
      setTrailer(
        res.data.results.find((t) => {
          return t.type === "Trailer";
        })
      );
      console.log("VIDEOS:", res.data.results);
    } catch (err) {
      alert("Error in getting videos");
    }
  };

  const getCast = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}/cast`);
      setCast(res.data.cast);
      console.log("CAST:", res.data.cast);
    } catch (err) {
      alert("Error in getting cast");
    }
  };

  const renderCast = () => {
    return cast.map((cast) => (
      <div key={`${cast.id}`}>
        <div>
          <h5>{cast.character}</h5>
          <h5>{cast.name}</h5>
        </div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
            onError={(event) => (event.target.style.display = "none")}
            width={100}
          />
        </div>
      </div>
    ));
  };

  // const getLimitedCast = cast => {
  //   let cas = []
  //   for (let i = 0; i < 5; i++) {
  //     const item = cast[i]
  //     cas.push(<li key={item.id}>{item.cast}</li>)
  //     console.log("Limited Cast:", cas)
  //   }
  //   return cas
  // }

  const getCrew = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}/cast`);
      setDirector(
        res.data.crew.find((d) => {
          return d.job === "Director";
        })
      );
      console.log("CREW:", res.data.crew);
    } catch (err) {
      alert("Error in getting cast");
    }
  };

  const getString = () => {
    if (movie)
      return `${movie.release_date} | ${movie.runtime} min | ${movie.genres
        .map((g) => g.name)
        .join(", ")}`;
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const copyURL = () => {
    const e = document.createElement("input");
    e.value = window.location.href;
    document.body.appendChild(e);
    e.select();
    document.execCommand("copy");
    document.body.removeChild(e);
    setCopied(true);
  };
  

 

  if (!movie) {
    return <p>"Loading"</p>;
  }

  const render = () => {
    if (loading) {
      return <p>"Loading"</p>;
    }
    
    return (
      <div className="App1">
        <h1>{movie.title}</h1>
        <div className="movieCard">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            width={250}
          />
          {trailer && trailer.key && <YouTube videoId={trailer.key} opts={opts} width={500} />}
        </div>
        <div>
          <h6> {getString()}</h6>
        </div>

        <Ratings />

        <button className="shareButton" onClick={copyURL}>
        {!copied ? "Click here to share this page" : "Page Copied!"}
        </button>

       

        <div id="container">
          <h4>Story Line</h4>
          <p className="information">{movie.overview}</p>
        </div>

        {/* <Review movieId={movie.id} /> */}
        <AllReviews movieId={movie.id}/>
        <Review/>
        <div className="control"></div>
        <div>
          <p>{director.job}</p>
          <p>{director.name}</p><br/>
        </div>
        <div>{renderCast()}</div>
      </div>
    );
  };
  return <div>{render()}</div>;
};

export default MovieDetail;
