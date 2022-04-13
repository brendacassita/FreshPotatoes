import React,{useState, useEffect} from 'react'
import axios from 'axios'







const SearchResults = () => {
  const [movies, setmovies]= useState([])
  
  
  
  return (
    <div>
      
      <h1> I am the searchResult</h1>
      <div className='ui icon input'>
        <p>Search</p>
        <input type='text' placeholder='search movies'></input>
      </div>
     
    
    </div>
  )
}

export default SearchResults

