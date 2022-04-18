import React from 'react'
import { FormControl, Input, InputLabel } from '@mui/material'

const Review = () => {

  return(
    
  
    <FormControl>
    <h2>Leave a Review</h2>
    <div>
      <label htmlFor="rating">Rating</label>
      <input type="range" min="1" max="5" name="review[rating]" id="rating"></input>
 
    </div>
      <div> 
        
          <textarea name="review[body]" id="body" cols="30" rows="5"></textarea>
            </div>
            <button>Submit</button>
    </FormControl>
    
  )
}

export default Review; 