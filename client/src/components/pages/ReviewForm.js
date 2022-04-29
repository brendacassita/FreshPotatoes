// import axios
import axios from "axios";
import React, { useContext, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../providers/DataProvider";

const ReviewForm = () => {
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
        let res = await axios.post(`/api/movies/${params.id}/reviews`, { review });
        console.log("res.data:", res.data);
        addReview(res.data);
      }
      navigate("/jobs");
    } catch (err) {
      // alerts if there is an error
      alert("err");
    }
  };

  return (
    <div className="border">
      <h1>{params.id ? "Edit" : "New"} Job Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Job Title</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button className="button">{params.id ? "Update" : "Create"}</button>
      </form>
      <p>id: {params.id ? params.id : "no id"}</p>
      <p>{JSON.stringify(location.state)}</p>
    </div>
  );
};

export default JobForm;
