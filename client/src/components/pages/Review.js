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
  Button
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
let timeout; 
const Review = (props) => {
  const [allReviews, setAllReviews] = useState([]);
  const [review, setReview] = useState(null);
  const [value, setValue] = useState(null);
  const [hover, setHover] = useState(null);
  const params = useParams();
  const [watched, setWatched] = useState("false");
  const { addPreReview, addPostReview } = useContext(DataContext);
  const [loading, setLoading] = useState();

  // check if doing watched or unwatched; conditional
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

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
  
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

    useEffect(() => {
      return () => {
        if (timeout) {
          clearTimeout(timeout);
        }
      };
    }, []);

  return (
    <div style={{ backgroundColor: "white" }}>
      {/* <h1 style={{ backgroundColor: "black", color: "white" }}>Leave a review</h1> */}
      <h4>
        Your review helps others find great movies to watch. <br></br>
        Please share what you liked or disliked.
      </h4>
      <div className="reviewRating">
        <Rating
          icon={
            watched == "true" ? (
              <SvgFries
                style={{ left: "100px", width: "50px", height: "50px" }}
              />
            ) : (
              <SvgPotato style={{ width: "50px", height: "50px" }} />
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
                style={{ width: "50px", height: "50px", opacity: 0.55 }}
                fontSize="inherit"
              />
            ) : (
              <SvgPotato
                style={{ width: "50px", height: "50px", opacity: 0.55 }}
                fontSize="inherit"
              />
            )
          }
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </div>

      {/* sets the state so that prewatched is the default radio button value
        update the category when we select a different value
        use onchange to do this; use setCategory to update the state
        so set it to pre or post  */}
      <FormControl>
        <br />
        <FormLabel>
          {" "}
          <h3 style={{ color: "#868686" }}>Have you seen this movie?</h3>{" "}
        </FormLabel>
        <RadioGroup
          value={watched}
          onChange={(e) => setWatched(e.target.value)}
        >
          <FormControlLabel
            value={false}
            control={<Radio />}
            label="No, I've never seen this movie"
          />
          <FormControlLabel
            value={true}
            control={<Radio />}
            label="Yes, I've seen it "
          />
        </RadioGroup>
      </FormControl>

      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            placeholder={"What did you think of the movie?"}
            style={{ marginTop: "2.5em", opacity: 0.55 }}
            onChange={(e) => setReview(e.target.value)}
            cols="55"
            rows="8"
          ></textarea>
        </div>

        <div
          style={{ display: "flex", paddingTop: "10px", marginLeft: "375px" }}
        >
          <Button
            className="buttonlogin1 btnlogin"
            variant="contained"
            type="button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit Review"}
          </Button>
        </div>
        {/* <button className="editprofilebtn">Submit Review</button> */}
      </form>

      {/* {allReviews.map((r)=> {
  console.log(allReviews)
  return(
    <div key={r.id}>
      {r.comment}
    </div>
  )
})
} */}
    </div>
  );
};

export default Review;
