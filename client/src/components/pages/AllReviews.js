
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider"
import {useTranslation,} from 'react-i18next'
import bwPic from '../../Images/blackwhitePotatoe.png'
// import fry from '../../Images/fryLogo.png'
import { DataContext } from "../../providers/DataProvider";
import potatoe from "../../Images/Potatoe.png";
import fry from "../../Images/fry.png";

const AllReviews = (props) => {
  const [name,setName] = useState('')
  const auth = useContext(AuthContext)
  const {user,setUser} = useContext(AuthContext)
  const {t} =  useTranslation(["common", "profile"])
  const [reviews, setReviews] = useState ([]); 
  // const [preReviews, setPreReviews] = useState ([])
  // const [postReviews, setPostReviews] = useState ([])
  


  const params = useParams();
  const { preReviews, postReviews, getPostReviews, getPreReviews } =
    useContext(DataContext);
  
  useEffect(() => {
    getPreReviews(params.id);
    getPostReviews(params.id);
  }, []);

// useEffect(()=> {
// getPreReviews();
// getPostReviews();

// }, [])



const renderPreReviews = () => {
  return preReviews.map((review) => (
    <div className="flex-box-container1">
      <div className="Review-box1" style={{ paddingBottom: "15px" }}>
        {!review.avatar ? (
          <img src={bwPic} width="75px" />
        ) : (
          <img
            className="user-photo-review"
            src={review.avatar}
            width="75px"
            style={{ marginBottom: "-15px", marginTop: "30px" }}
          />
        )}
        <h5 style={{ marginBottom: "-20px" }}>{review.username}</h5>
        <h4 className="red-text-rating">
          {" "}
          <img src={potatoe} width="30px" />Rating: <br></br>{review.rating}/5
        </h4>
      </div>
      <div className="bubble bubble-bottom-left">
        <h5>{review.comment} </h5>
      </div>
    </div>
  ));
};

const renderPostReviews = () => {
  return postReviews.map((review) => (
    <div className="flex-box-container1 ">
      <div className="Review-box1 " style={{ paddingBottom: "15px" }}>
        {!review.avatar ? (
          <img src={bwPic} width="75px" />
        ) : (
          <img
            className="user-photo-review"
            src={review.avatar}
            width="75px"
            style={{ marginBottom: "-15px", marginTop: "30px" }}
          />
        )}
        <h5 style={{ marginBottom: "-20px" }}>{review.username}</h5>
        <h4 className="red-text-rating">
          <img src={fry} width="30px" />
          Rating: <br></br>
          {review.rating}/5<br></br>
        </h4>
      </div>

      <div className="bubble bubble-bottom-left">
        <h5>{review.comment}:</h5>
      </div>
    </div>
  ));
  };

  return (
    <div className="movie-review2 ">
      <h3 className="Popular-MD" >
        {preReviews.length == 0 ? <p>no reviews</p> : renderPreReviews()}
        
      </h3>
      <h3 className="Popular-MD "> 
      {postReviews.length == 0 ? <p>no reviews</p> : renderPostReviews()}
      </h3>
    </div>
  );
};

export default AllReviews;
