import axios from "axios";
import React, { useContext, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../providers/DataProvider";
// props from componenet for teh reviewID; check the review ID (if we use modal)
const ReviewForm = (props) => {
  const { addReview } = useContext(DataContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState(
    location.state ? location.state.title : ""
  );
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (params.id) {
        await axios.put(`/api/reviews/${params.id}`, {
          title,
          id: params.id,
        });
      } else {
        let res = await axios.post(`/api/movies/${params.id}/reviews`, {
          review,
        });
        console.log("res.data:", res.data);
        addReview(res.data);
      }
      // TODO: where should we route to?
      navigate("/reviews");
    } catch (err) {
      // alerts if there is an error
      alert("err");
    }
  };

  return (
    <div className="border">
      <h1>{params.id ? "Edit" : "New"}Review</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button className="button">{params.id ? "Update" : "Create"}</button>
      </form>
      <p>id: {params.id ? params.id : "no id"}</p>
      <p>{JSON.stringify(location.state)}</p>
    </div>
  );
};

export default ReviewForm;
