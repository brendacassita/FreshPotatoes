import { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";
import { useParams } from "react-router-dom";
import Potatoe from "../../Images/Potatoe.png";
import Fry from "../../Images/FryLogo-06.png";

const Ratings = () => {
  const [unwatched, setUnwatched] = useState({});
  const [watched, setWatched] = useState({});

  useEffect(() => {
    getUnwatched();
    getWatched();
  }, []);

  const params = useParams();

  //TODO: need to make 2 separate api calls, one for watched and one for unwatched
  const getUnwatched = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}/unwatched`);
      setUnwatched(res.data[0]);
      console.log("Unwatched:", res.data);
    } catch (err) {
      alert("Error in getting unwatched reviews");
      console.log(err);
    }
    return unwatched;
  };

  const getWatched = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}/watched`);
      setWatched(res.data[0]);
      console.log("Watched:", res.data);
    } catch (err) {
      alert("Error in getting watched reviews");
    }
    return watched;
  };

  return (
    <div>
      <div>
        <h3
          style={{
            background: "white",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={Potatoe} height={60} />{" "}
          {unwatched && unwatched.rating ? `${unwatched.rating}%` : "No rating"}{" "}
          <img src={Fry} height={60} />{" "}
          {watched && watched.rating ? `${watched.rating}%` : "No rating"}
        </h3>
      </div>
    </div>
  );
};

export default Ratings;
