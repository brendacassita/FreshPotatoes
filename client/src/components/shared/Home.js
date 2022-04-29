import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Carousel from "../pages/Carousel";
import { AuthContext } from "../../providers/AuthProvider";
import GenreFilter from "../pages/GenreFilter";
import "../CssFIles/card.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  let auth = useContext(AuthContext);
  const { t } = useTranslation(["home"]);
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
      setMovies(res.data.results);
      console.log(res.data.results);
      //set back to false because now we have the data
      setLoading(false);
      // console.log(res.data)
    } catch (err) {
      alert("error in getting movies");
    }
  };

  const renderPosters = () => {
    return movies.map((movie) => (
      <div key={`${movie.id}`}>
        <div style={{padding: 8}}>
          
          <img className=""
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title}`}
            onClick={() => nav(`/movies/${movie.id}`)}
            style={{ width: "100%" }}
            />
            </div>
        </div>
      
    ));
  };

  return (
    <div className="App1">
      {/* <div className='welcome'><h2 className='namehome'>Welcome {auth.user.name}!</h2>
           </div> */}

      <div className="homeCarousel">
        <Carousel show={4} infiniteLoop>
          {renderPosters()}
        </Carousel>
      </div>
      <div className="homeGenre">
        <GenreFilter />
      </div>
    </div>
  );
};

export default Home;
