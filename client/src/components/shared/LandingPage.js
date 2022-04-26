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

const LandingPage = () => {
  let auth = useContext(AuthContext);
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  let nav = useNavigate();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    //change the state when we start to load
    setLoading(true);
    try {
      let res = await axios.get("/api/newest/");
      setMovies(res.data);
      //set back to false because now we have the data
      setLoading(false);
      console.log(res.data);
    } catch (err) {
      alert("error in getting movies");
    }
  };

  const renderPosters = () => {
    return movies.map((movie) => (
      <div>
        <div style={{ padding: 8 }}>
          <img
            src={movie.poster}
            onClick={() => nav(`/movies/${movie.id}`)}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="landing-all ">
      <div className="landingPage">
        <img className="backpic" src={backpic}></img>
        <img className="logolanding" src={logo}></img>
      </div>

      <p className="text-landing">Find out if you want to watch a movie</p>

      <div className="btn-all">
        <Link className="landingbtn1" href="/login">
          {" "}
          Sign in Fresh Potatoes
        </Link>

        
        
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
