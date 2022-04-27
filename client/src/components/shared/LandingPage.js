import React from "react";
import backpic from "../../Images/landingPage.jpg";
import logo from "../../Images/Theotherlogo-01.png";
import backpic2 from "../../Images/NeonBackground.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import { AuthContext } from "../../providers/AuthProvider";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Carousel from "../pages/Carousel";
import GenreFilter from "../pages/GenreFilter";
import "../CssFIles/card.css";
import '../CssFIles/Other.css'

import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import StorageIcon from "@mui/icons-material/Storage";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import GroupIcon from "@mui/icons-material/Group";

const LandingPage = () => {
  let auth = useContext(AuthContext);
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false)
  let nav = useNavigate();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () =>{
    //change the state when we start to load
    setLoading(true);
    try{
      let res = await axios.get('/api/newest/')
      setMovies(res.data.results)
      console.log(res.data.results)
      //set back to false because now we have the data
      setLoading(false);
      // console.log(res.data)
    }catch(err){
    alert('error in getting movies')
    }
  }

    const renderPosters = () => {
        return movies.map((movie) => (
        <div key={`${movie.id}`}>
            <div style={{padding: 8}}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title}`}
                onClick={()=>nav(`/movies/${movie.id}`)} 
                style={{width: '100%'}} />
            </div>
        </div>
        ))   
    }

  return (
    <div className="landing-all ">
      <div className="landingPage">
        <img className="backpic" src={backpic}></img>
        <img className="logolanding" src={logo}></img>
      </div>

      <p className="text-landing">
        Exclusive reviews by movie lovers, like you.
      </p>

      <div className="btn-all">
        <Link className="landingbtn1" href="/login">
          {" "}
          Sign in Fresh Potatoes
        </Link>

        <div className="check-align">
          <div className="check">
            <LocalMoviesIcon sx={{ fontSize: 60 }} />

            <h2>Search</h2>
            <p>Search all your favorite movies with a click of a mouse </p>
          </div>
          <div className="check2">
            <StorageIcon sx={{ fontSize: 60 }} />

            <h2>Database</h2>
            <p>We have a large database of movies. Name it, we got it</p>
          </div>

          <div className="check3">
            <StarBorderIcon sx={{ fontSize: 60 }} />
            <h2>Reviews</h2>
            <p> Rate and review movies before and after you view them</p>
          </div>

          <div className="check4">
            <GroupIcon sx={{ fontSize: 60 }} />
            <h2>Connect</h2>
            <p>Connect with millions of movie buffs across the world </p>
          </div>
        </div>

        <div className="landing-home">
          <div className="homeCarousel">
            <Carousel show={4} infiniteLoop>
              {renderPosters()}
            </Carousel>
          </div>

          <div className="homeGenre">
            <GenreFilter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
