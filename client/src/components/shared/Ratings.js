import { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";
import { useParams } from "react-router-dom";

const Ratings = () => {
  const [unwatched, setUnwatched] = useState([]);
  const [watched, setWatched] = useState([]);

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
    }
    return unwatched
  };

  const getWatched = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}/watched`);
      setWatched(res.data[0]);
      console.log("Watched:", res.data);
    } catch (err) {
      alert("Error in getting watched reviews");
    }
    return watched
  };

  return (
    <div>
      <div>
        <h5 style={{ display: "flex", justifyContent: "center" }}>
          pre: {unwatched.rating}% | post: {watched.rating}%
        </h5>
      </div>
    </div>
  );
};

export default Ratings;
