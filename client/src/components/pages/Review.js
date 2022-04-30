import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import "../CssFIles/editProfile.css";
import SvgComponent from "./SvgPotato";
import Radio from "@mui/material/Radio";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from "@mui/material";
import SvgPotato from "./SvgPotato";
import SvgFries from "./SvgFries";
import { DataContext } from "../../providers/DataProvider";

const labels = {
  1: "Worst Movie Ever.",
  2: "Meh, it passed the time.",
  3: "Pretty good.",
  4: "Awesome!",
  5: "Absolute must-see!",
};

const Review = (props) => {
  const [allReviews, setAllReviews] = useState([]);
  const [review, setReview] = useState();
  const [value, setValue] = useState(null);
  const [hover, setHover] = useState(null);
  const params = useParams();
  const [watched, setWatched] = useState("false");
  const { addPreReview, addPostReview } = useContext(DataContext);

  // check if doing watched or unwatched; conditional
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newReview = {
      comment: review,
      watched,
      rating: value,
      movie_id: props.movieId,
    };

    try {
      let res = await axios.post(
        `/api/movies/${props.movieId}/reviews`,
        newReview
      );
      if (watched == "false") {
        addPreReview(newReview);
      } else {
        addPostReview(newReview);
      }
    } catch (err) {
      alert("error occurred posting review");
    }
  };
  // const getReviews = async () => {
  //   try {
  //     let res = await axios.get(`/api/movies/${params.id}/reviews`);
  //     setAllReviews(res.data);
  //     console.log(res.data);
  //   } catch (err) {
  //     alert("error in getting reviews");
  //   }
  // };
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  // const renderReviews = () => {
  //   return review.map(r => {
  //         return <Review key={review.id} {...review} />
  //   })
  // }

  return (
    <div style={{ backgroundColor: "white" }}>
      <h2>Leave a review</h2>
      <div className="reviewRating">
        <Rating
          icon={
            watched == "true" ? (
              <SvgFries
                style={{ left: "100px", width: "100px", height: "120px" }}
              />
            ) : (
              <SvgPotato style={{ width: "100px", height: "100px" }} />
            )
          }
          name="hover-feedback"
          value={value}
          precision={1.0}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={
            watched == "true" ? (
              <SvgFries
                style={{ width: "100px", height: "100px", opacity: 0.55 }}
                fontSize="inherit"
              />
            ) : (
              <SvgPotato
                style={{ width: "100px", height: "100px", opacity: 0.55 }}
                fontSize="inherit"
              />
            )
          }
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </div>
      <hr></hr>
      {/* sets the state so that prewatched is the default radio button value
        update the category when we select a different value
        use onchange to do this; use setCategory to update the state
        so set it to pre or post  */}
      <FormControl>
        <FormLabel>Have you seen this movie? </FormLabel>
        <RadioGroup
          value={watched}
          onChange={(e) => setWatched(e.target.value)}
          row
        >
          <FormControlLabel value={false} control={<Radio />} label="No" />
          <FormControlLabel value={true} control={<Radio />} label="Yes" />
        </RadioGroup>
      </FormControl>

      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            // placeholder={"What do you think of the movie? (optional)"}
            style={{ marginTop: "2.5em", opacity: 0.55 }}
            onChange={(e) => setReview(e.target.value)}
            cols="75"
            rows="15"
          ></textarea>
        </div>
        <button className="editprofilebtn">Submit Review</button>
      </form>

      <hr></hr>
      {/* {allReviews.map((r)=> {
  console.log(allReviews)
  return(
    <div key={r.id}>
      {r.comment}
    </div>
  )
})
} */}

      <div>{JSON.stringify(review)}</div>
    </div>
  );
};

export default Review;
