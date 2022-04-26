import React, {useState} from 'react'
import {useParams} from 'react-router-dom'; 
import axios from 'axios'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import '../CssFIles/editProfile.css'
import SvgComponent from './SvgComponent';
import Radio from '@mui/material/Radio'
import { FormControlLabel, RadioGroup } from '@mui/material';

const labels = {
  1: 'Worst Movie Ever.',
  2: 'Meh, it passed the time.',
  3: 'Pretty good.',
  4: 'Awesome!',
  5: 'Absolute must-see!'

}

const Review = (props) => {  
  const [allReviews, setAllReviews] = useState([]); 
const [review, setReview] = useState(null);
const [value, setValue] = useState(null); 
const [hover, setHover] = useState(null)
const params = useParams();

const handleSubmit  = async (e) => {
  e.preventDefault()
  let newReview = {comment:review, rating:value, movie_id:props.movieId }
  console.log(newReview)
  try{
    let res = await axios.post(`/api/movies/${props.movieId}/reviews`, newReview)
    console.log(res.data)
    setReview(res.data) 
}catch (err) {
  alert('error occurred posting review')
}
}
const getReviews = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}/reviews`);
    setAllReviews(res.data);
      console.log(res.data);
    } catch (err) {
      alert("error in getting reviews");
    }
  };
function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`; 
}

// const renderReviews = () => {
//   return review.map(r => {
//         return <Review key={review.id} {...review} />
//   })
// }

  return(
<div>
    <h2>Leave a review</h2>
  <div className="reviewRating">
      <Rating
        icon={<SvgComponent style={{width:"64px", height:"64px"}} />}
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
        emptyIcon={<SvgComponent style={{ width:"64px", height:"64px", opacity: 0.55 }} 
        fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
  </div>

  <RadioGroup>
      <FormControlLabel control={<Radio />}  label="Pre"/>
  </RadioGroup>
    
    
    
    <form onSubmit={handleSubmit}>
      <div> 
       <textarea 
          placeholder={"What do you think of the movie? (optional)"} 
          style={{marginTop: "2.5em", opacity: 0.55}} 
          onChange={(e) => setReview(e.target.value)} 
          cols="75" 
          rows="15">
          </textarea>
          
      </div>
        <button 
          className="editprofilebtn"
          >Submit Review
        </button>
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

<div>

    {JSON.stringify(review)}
    </div>
    </div>
    
  );
}
  
export default Review; 