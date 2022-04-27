import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Carousel from "../pages/Carousel";
import { AuthContext } from "../../providers/AuthProvider";
import GenreFilter from "../pages/GenreFilter";
import "../CssFIles/card.css";

const Home = () => {
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

<<<<<<< HEAD
  const renderPosters = () => {
    return movies.map((movie) => (
      <div>
        <div style={{ padding: 8 }}>
          <img
            src={movie.poster}
            onClick={() => nav(`/movies/${movie.id}`)}
            style={{ width: "100%" }}
          />
=======
       return (
         <div className='App1' >
           {/* <div className='welcome'><h2 className='namehome'>Welcome {auth.user.name}!</h2>
           </div> */}
           
         <div className='homeCarousel' >
            <Carousel
                show={4}
                infiniteLoop
            > 
            {renderPosters()}
            </Carousel>
>>>>>>> dddb19885eb6002f48fe8f5d2963ed6416c54a44
        </div>
      </div>
    ));
  };
  // if (!auth.user) {
  //   return <p>no user</p>;
  // }
  return (
    <div className="App">
      <div className="welcome">
        {/* <h2 className="namehome">Welcome {auth.user.name}!</h2> */}
      </div>
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
