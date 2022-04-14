import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import MovieCarousel from './MovieCarousel';
import YouTube from 'react-youtube'




const Movies = () => {
const [movies, setMovies] = useState([]);


useEffect(()=>{
  getMovies()
}, [])


const getMovies = async () => {
  try{
    let res = await axios.get('/api/movies')
    setMovies(res.data)
    console.log(res.data)
  }catch(err){
    alert('error in getting movies')
  }
}


  
  
  return(
   
   <div className='App'>
       {/* <MovieCarousel /> */}

      <h1>All Movies </h1>
      {movies.map((movie)=>{
        return(
          <div key = {movie.id}>
            <img src={movie.poster} width={150} />
            <img src={movie.trailer} width={500} /> 
            <h3>{movie.name}</h3>
            <h6> {movie.year} | {movie.runtime} | {movie.genre}</h6>
          </div>
        
      )
    }
  )
}
</div>
  )
}
export default Movies;  

