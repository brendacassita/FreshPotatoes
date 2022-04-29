import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const Reviews = (props) => {
  const [reviews, setReviews] = useState ([]); 
  const [preReviews, setPreReviews] = useState ([])
  const [postReviews, setPostReviews] = useState ([])
  
  const params = useParams();

useEffect(()=> {
getPreReviews();
getPostReviews();

}, [])

const getPreReviews = async () => {
  try {

    let res = await axios.get(`/api/movies/${params.id}/reviews/pre`);
    setPreReviews(res.data);
   
    console.log("pre: ", res.data);

  } catch (err) {
    alert("error in getting reviews");
  }
};

const getPostReviews = async () => {
  try {
    let res = await axios.get(`/api/movies/${params.id}/reviews/post`);
    setPostReviews(res.data);
    console.log("post: " , res.data);
  } catch (err) {
    alert("error in getting reviews");
  }
};

const renderPreReviews = () => {
  return preReviews.map((review) => (
    <div>
      <div>
      
        <h5>
          {review.comment}: {review.rating}
        </h5>
      </div>
    </div>
  ));
};

const renderPostReviews = () => {
  return postReviews.map((review) => (
    <div>
      <div>
      
        <h5>
          {review.comment}: {review.rating}
        </h5>
      </div>
    </div>
  ));
};

  return (
    <div>
      <h3>
        Post:
        {postReviews.length == 0 ? <p>no reviews</p> : renderPostReviews()}
      </h3>
      <h3>Pre: 
      {preReviews.length == 0 ? <p>no reviews</p> : renderPreReviews()}
      </h3>
    </div>
  );
};
  
export default Reviews; 

