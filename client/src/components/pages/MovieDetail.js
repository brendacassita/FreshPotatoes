import { useEffect, useState } from 'react'
import axios from 'axios'
import YouTube from 'react-youtube'

const MovieDetail = () => {
  const [movies, setMovies] =  useState([])
  const [casts, setCasts] =  useState([])
  const [roles, setRoles] =  useState([])
  const [reviews, setReviews] =  useState([])





  useEffect(()=>{
    getMovies()
   

  },[])
 
  const getMovies = async () =>{
    try{
      let res = await axios.get(`/api/movies/:id`)
      setMovies(res.data)
      console.log(res.data)
    }catch(err){
    alert('error in getting movies')
    }
  }

//TODO: need to make 2 separate api calls, one for watched and one for unwatched
  const getReviews = async () =>{
    try{
      let res = await axios.get('/api/reviews')
      setReviews(res.data)
      console.log(res.data)
    }catch(err){
    alert('error in getting reviews')
    }
  }

  
  

  
  return(
  
    <div className='App'>
      <h1>Movie Detail </h1>
      {movies.map((movie)=>{
        return(
          <div key = {movie.id}>
            <img src={movie.poster} width={150} />
            <img src={movie.trailer} width={500} /> 
            <h3>{movie.name}</h3>
            <h6> {movie.year} | {movie.runtime} | {movie.genre}</h6>
            <h6>pre: {reviews.rating} {reviews.rating} post:</h6>
            <h4>Story Line: </h4>
              <p>{movie.plot}</p>
              <h6>Cast & Crew</h6>
              <p>{casts.name}</p>
              <img src={casts.headshot} width={50} /> 
              <p>{roles.title}</p>

            </div>
        )
      })}
      {/* {JSON.stringify(movies)} */}
      
    </div>
  )
}

export default MovieDetail