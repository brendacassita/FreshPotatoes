import axios from "axios";
import React, { useEffect, useState } from "react";

export const DataContext = React.createContext();

export const DataProvider = (props) => {
  const [reviewData, setReviewData] = useState([]);
  const [preReviews, setPreReviews] = useState([]);
  const [postReviews, setPostReviews] = useState([]);


  const addPreReview = (review) => {
    setPreReviews([...preReviews, review]);
  };

   const addPostReview = (review) => {
     setPostReviews([...postReviews, review]);
   };

const getPreReviews = async (id) => {
  try {
    let res = await axios.get(`/api/movies/${id}/reviews/pre`);
    setPreReviews(res.data);

    console.log("pre: ", res.data);
  } catch (err) {
    alert("error in getting reviews");
  }
};

const getPostReviews = async (id) => {
  try {
    let res = await axios.get(`/api/movies/${id}/reviews/post`);
    setPostReviews(res.data);
    console.log("post: ", res.data);
  } catch (err) {
    alert("error in getting reviews");
  }
};

  // const deleteReview = async (id) => {
  //   let res = await axios.delete(`/api/reviews/${id}`);
  //   const filteredReviews = reviewData.map( rev => {
  //           if(rev.review.id !== rev.id){
  //           return rev
  //       } else {
  //           return {movie: mov.movie, reviews: mov.reviews.filter(i=> i.id !== id)}
  //       }
  //   })

  const getReviewData = async (id) => {
    let res = await axios.get(`/api/reviews/${id}`);
    setReviewData(res.data);
  };
  return (
    <DataContext.Provider
      value={{ preReviews, postReviews, getPostReviews, getPreReviews, getReviewData, addPreReview, addPostReview}}
    >
      {props.children}
    </DataContext.Provider>
  );
}


export default DataProvider;
