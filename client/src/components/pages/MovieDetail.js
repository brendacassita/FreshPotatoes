import { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import "../../App.css";
import "../CssFIles/container.css";
import { useParams } from "react-router-dom";
import Ratings from "../shared/Ratings";
import Review from "./Review";
import AllReviews from "./AllReviews";
import defaultPotatoe from "../../Images/blackwhitePotatoe.png";
import "../CssFIles/MovieDetail.css";
import TheatersIcon from "@mui/icons-material/Theaters";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import ReviewsIcon from '@mui/icons-material/Reviews';
import fry from "../../Images/fryLogo.png";
import potatoe from "../../Images/Potatoe.png";

const MovieDetail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState([]);
  const [trailer, setTrailer] = useState({});
  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(false);
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
      setCast(
        res.data.cast.length >= 5 ? res.data.cast.slice(0, 5) : res.data.cast
      );
      console.log("5", res.data.cast.slice(0, 5));
      console.log("CAST:", res.data.cast);
    } catch (err) {
      alert("Error in getting cast");
    }
  };

  // const renderCast = () => {
  //   return cast.map((cast) => (
  //     <div key={`${cast.id}`}>
  //       <div>
  //         <h5>{cast.character}</h5>
  //         <h5>{cast.name}</h5>
  //       </div>
  //       <div>
  //         <img
  //           src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
  //           onError={(event) => (event.target.style.display = "none")}
  //           width={100}
  //         />
  //       </div>
  //     </div>
  //   ));
  // };

  const renderCast = () => {
    return cast.map((cast) => (
      <div className="name-flex" key={`${cast.id}`}>
        {/* <h5>{cast.character}</h5> */}
        <h5>{cast.name}, &nbsp;</h5>
      </div>
    ));
  };

  const renderCastPictures = () => {
    return cast.map((cast) => (
      <div className="photo-flex" key={`${cast.id}`}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ padding: "5px" }}>
            <img
              className="photo-round"
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              onError={(event) => (event.target.style.display = "none")}
              width={100}
            />
          </div>
          <div>
            <h5>
              {cast.name}
              <br />
              <div style={{ color: "#868686" }}>as {cast.character}</div>
            </h5>
            {/* <h6>as {cast.character}</h6> */}
          </div>
          {/* <h5  >{cast.name},</h5> */}
        </div>
      </div>
    ));
  };

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
    if (movie) return `${movie.release_date} | ${movie.runtime} min `;
  };
  const getTime = () => {
    if (movie) return ` ${movie.runtime} min `;
  };

  const getGenre = () => {
    if (movie) return `${movie.genres.map((g) => g.name).join(", ")}`;
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
      <div className="App--1">
        <div className="button-back">
          <button className="shareButton" onClick={copyURL}>
            {!copied ? "Click here to share" : "Page Copied!"}
          </button>
        </div>

        <div className="black-back">
          <img
            className="movie-trailer"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            width={260}
          />
          {trailer && trailer.key && (
            <YouTube videoId={trailer.key} opts={opts} width={500} />
          )}
        </div>
        <div className="flex-box-container">
          <div className="movie-item Popular-MD1">
            <h1>{movie.title}</h1>
            <h4 className="text-color">{getGenre()}</h4>
            <h6> {getString()}</h6>
            <Ratings />
          </div>
          <div className="movie-box2  movie-item">
            <div className="Big-Line">
              <h1 className="Movie-Info">Overview</h1>
              <div className="Theater-Icon">
                <TheatersIcon sx={{ fontSize: 40 }} />
              </div>
            </div>
            <div className="movie-overview">
              <p>{movie.overview}</p>
            </div>
            <div className="Big-Line">
              <h1 className="Movie-Info">Movie Info</h1>
              <div className="Theater-Icon">
                <TheaterComedyIcon sx={{ fontSize: 40 }} />
              </div>
            </div>
            <div className="movie-overvie">
              <h4>
                {director.job} : {director.name}{" "}
              </h4>
            </div>
            <div className="movie-overview3">
              <h4> Genre: {getGenre()}</h4>
              <div className="movie-overview3">
                <h4>Time: {getTime()}</h4>
              </div>

              <h4 className="Cast-name">Cast: {renderCast()}</h4>

              {!show ? (
                <h4 className="Cast-photo">{renderCastPictures()}</h4>
              ) : null}

              {/* <button className="movie-button" onClick={() => setShow(true)}>
                Show Cast
              </button> */}
               
              <button className="movie-button" type="button" onClick={() => setShow(!show)}>
              {loading ? "Show Cast" : "Hide Cast"}
           
          
             
            
  


              </button>
            </div>
          </div>
        </div>

        {/* <div className="Movie-info-all">
              
              
            </div> */}
   <div className="review-box2  review-item">
            <div className="Big-Line">
              <h1 className="Movie-Info">Leave Review</h1>
              <div className="Theater-Icon">
              <ThumbsUpDownIcon sx={{ fontSize: 40 }} />
              </div>
            </div>
            </div>


        {/* <div className="Big-Line">
          <h1 className="Movie-Info">Leave Review</h1>
          <div className="Theater-Icon">
            <ThumbsUpDownIcon sx={{ fontSize: 40 }} />
          </div>
        </div> */}

        <div className="movie-review">
          <Review movieId={movie.id} />
        </div>

        {/* <div className="the-logos">
          <div className="logo1">
            <img src={potatoe} height="75px" width="auto" />
          </div>

          <div className="logo2">
            <img src={fry} height="75px" width="auto" />
          </div>
        </div> */}

        <div className="Big-Line">
          <h1 className="Movie-Info">All Reviews</h1>
          <div className="Theater-Icon">
            <ReviewsIcon sx={{ fontSize: 40 }} />
          </div>
        </div>

        <div className="Pre-post">
          <div className="POST" style={{ display: 'flex', flexDirection: 'row' }}>
            <img src={potatoe} height="65px" width="auto" style={{ paddingRight: '15px' }}/>
            <h1>Potatoes </h1>
          </div>
          
          <div className="POST" style={{ display: 'flex', flexDirection: 'row' }}>            
            <img src={fry} height="65px" width="auto" style={{ paddingRight: '15px' }}/>
            <h1>Fries </h1>
          </div>
        </div>

        <div className="">
          <AllReviews movieId={movie.id} />
        </div>
      </div>
    );
  };
  return <div>{render()}</div>;
};

export default MovieDetail;
