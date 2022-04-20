import { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";
import { useParams } from "react-router-dom";

const Ratings = () => {
  const [unwatched, setUnwatched] = useState([]);
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    getUnwatched();
  }, []);

  useEffect(() => {
    getWatched();
  }, []);

  //TODO: need to make 2 separate api calls, one for watched and one for unwatched
  const getUnwatched = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}/unwatched`);
      setUnwatched(res.data);
      console.log(res.data);
    } catch (err) {
      alert("error in getting unwatched reviews");
    }
  };

  const getWatched = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}/watched`);
      setWatched(res.data);
      console.log(res.data);
    } catch (err) {
      alert("error in getting unwatched reviews");
    }
  };

  const params = useParams();

  const renderUnwatched = () => {
    const uw = unwatched.map((uw) => {
      return (
        <div>
          {uw.unwatched_rating}
        </div>
      );
    });
    console.log(uw.unwatched_rating);
    return uw;
  };

  const renderWatched = () => {
    const w = watched.map((w) => {
      return (
        <div>
          {w.watched_rating}
        </div>
      );
    });
    console.log(w.watched_rating);
    return w;
  };

  return (
    <div className="App">
      <div>
        <h5 style={{display: 'flex', justifyContent: 'center'}}>pre: {renderUnwatched()} | post: {renderWatched()}</h5>   
      </div>
    </div>
  );
};

export default Ratings;
