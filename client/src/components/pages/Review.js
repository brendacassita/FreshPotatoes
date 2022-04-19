import React, {useState} from 'react'
import {useParams} from 'react-router-dom'; 
import { FormControl, Input, InputLabel } from '@mui/material'
import axios from 'axios'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';


const labels = {
  0.5: 'Worst Movie Ever.',
  1: 'Worst Movie Ever.',
  1.5: 'Worst Movie Ever+.',
  2: 'Meh, it passed the time.',
  2.5: 'Meh, it passed the time.',
  3: 'Pretty good.',
  3.5: 'I would recommend this movie!', 
  4: 'Awesome!',
  4.5: 'Awesome!',
  5: 'Absolute must-see!'

}


const Review = () => {
const [review, setReview] = useState("");
const [value, setValue] = useState(2); 
const [hover, setHover] = useState(-1)
const params = useParams();

const handleSubmit  = async (e) => {
  e.preventDefault()

  try{
    let res = await axios.post(`api/movies/${movie_id}/reviews`)
    console.log(res.data)
    setReview(res.data)
  
}catch (err) {
  alert('error occurred posting review')
}
}

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`; 
}



  return(
    <div>
    <h2>Leave a Review</h2>
<Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>

    <form onSubmit={handleSubmit}>
    
      <div> 
        
          <textarea onChange={(e) => setReview(e.target.value)} cols="30" rows="5"></textarea>
            </div>
            <button>Submit</button>
    </form>
    </div>

  
  //     {/* see material UI docs for more info about the features below */}
  //      {/* <Typography component="legend">Read only</Typography>
  //     <Rating name="read-only" value={value} readOnly />
  //     <Typography component="legend">Disabled</Typography>
  //     <Rating name="disabled" value={value} disabled />
  //     <Typography component="legend">No rating given</Typography>
  //     <Rating name="no-value" value={null} />  */}

  );
}
  
export default Review; 