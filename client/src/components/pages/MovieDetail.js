import { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import "../../App.css";
import "../CssFIles/container.css";
import { useParams } from "react-router-dom";
import Ratings from "../shared/Ratings";
import Review from "./Review";

const MovieDetail = () => {
  const [movie, setMovie] = useState([])
  const [videos, setVideos] = useState([])
  const [cast, setCast] = useState([])
  const [crew, setCrew] = useState([])
  const params = useParams()

  useEffect(() => {
    getMovie()
  }, [])

  useEffect(() => {
    getVideos()
  },[])

  useEffect(() => {
    getCast()
  }, [])

  useEffect(() => {
    getCrew()
  }, [])

  const getMovie = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}`)
      console.log('MOVIE')
      setMovie(res.data)
      console.log(res.data)
    } catch (err) {
      alert("Error in getting movie")
    }
  };

  const getVideos = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}/videos`)
      setVideos(res.data.results)
      console.log('VIDEOS')
      console.log(res.data.results)
    } catch (err) {
      alert('Error in getting videos')
    }
  }

  const getCast = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}/cast`)
      console.log('CAST')
      setCast(res.data.cast)
      console.log(res.data.cast)
    } catch (err) {
      alert("Error in getting cast")
    }
  };

  const getCrew = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}/cast`)
      console.log('CREW')
      setCrew(res.data.crew)
      console.log(res.data.crew)
    } catch (err) {
      alert("Error in getting crew")
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
      <h1>{movie.title}</h1>
      <div className="movieCard">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={250} />
        {/* <YouTube videoID={`https://www.youtube.com/watch?v=`} */}
      </div>

      <div>
        <h6>
          {" "}
          {movie.release_date} | {movie.runtime} min | {movie.genre}
        </h6>
      </div>

      {/* <Ratings /> */}

      <div id="container">
        <h4>Story Line</h4>
        <p className="information">{movie.overview}</p>
      </div>

        <Review movieId={movie.id} />
      <div className="control"></div>


    </div>
  )
};

export default MovieDetail;
