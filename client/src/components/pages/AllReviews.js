import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider"
import {useTranslation,} from 'react-i18next'
import bwPic from '../../Images/blackwhitePotatoe.png'
import fry from '../../Images/fryLogo.png'

const AllReviews = (props) => {
  const [name,setName] = useState('')
  const auth = useContext(AuthContext)
  const {user,setUser} = useContext(AuthContext)
  const {t} =  useTranslation(["common", "profile"])
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
    <div className="flex-box-container1">
      <div className="Review-box1" >
        
        {!review.avatar ? <img src={bwPic} width='50px' /> : <img className="user-photo-review" src={review.avatar} width='50px' />}
        
        <h4>{review.username}</h4>
        <h5 className="red-text" >Rating: {review.rating}</h5>
      </div>
      <div className="bubble bubble-bottom-left" >
      <h5>{review.comment} </h5>
      </div>
      
    </div>
  ));
};

const renderPostReviews = () => {
  return postReviews.map((review) => (
    <div className="flex-box-container1 ">
      
      <div className="Review-box1 " >
      {!review.avatar ? <img  src={bwPic} width='50px'/> :<img className="user-photo-review" src={review.avatar}width='50px'/> }
        
        <h4>{review.username}</h4>
        <h5 className="red-text">Rating: {review.rating}</h5>
      
      </div>
      
      
      <div className="bubble bubble-bottom-left">
        <h5>
          {review.comment}: 
        </h5>
      
      </div>
    </div>
  ));
};

  return (
    <div className="movie-review2 ">
      <h3 className="Popular-MD" >
       
        {postReviews.length == 0 ? <p>no reviews</p> : renderPostReviews()}
      </h3>
      <h3 className="Popular-MD "> 
      {preReviews.length == 0 ? <p>no reviews</p> : renderPreReviews()}
      </h3>
    </div>
  );
};
  
export default AllReviews; 

