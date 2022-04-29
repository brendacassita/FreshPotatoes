import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { DataContext } from "../../providers/DataProvider";
// use data provider to get the reviews; 
const AllReviews = (props) => {
  const [reviews, setReviews] = useState ([]); 

  const params = useParams();
const {preReviews, postReviews, getPostReviews, getPreReviews} = useContext(DataContext)
useEffect(()=> {
getPreReviews(params.id);
getPostReviews(params.id);

}, [])



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
  
export default AllReviews; 

