import { useEffect, useState } from 'react'
import axios from 'axios'
import YouTube from 'react-youtube'
import '../../App.css'


const MovieDetail = () => {
  const [movies, setMovies] =  useState([])
  const [casts, setCasts] =  useState([])
  const [roles, setRoles] =  useState([])
  const [reviews, setReviews] =  useState([])





  useEffect(()=>{
    getMovies()
    getCasts()
    getRoles()
    getReviews()

  },[])
 
  const getMovies = async () =>{
    try{
      let res = await axios.get('/api/movies')
      setMovies(res.data)
      console.log(res.data)
    }catch(err){
    alert('error in getting movies')
    }
  }

  const getCasts = async () =>{
    try{
      let res = await axios.get('/api/casts')
      setCasts(res.data)
      console.log(res.data)
    }catch(err){
    alert('error in getting cast')
    }
  }
      
  const getRoles = async () =>{
    try{
      let res = await axios.get('/api/roles')
      setRoles(res.data)
      console.log(res.data)
    }catch(err){
    alert('error in getting roles')
    }
  }

  const getReviews = async () =>{
    try{
      let res = await axios.get('/api/reviews')
      setReviews(res.data)
      console.log(res.data)
    }catch(err){
    alert('error in getting reviews')
    }
  }

 
  const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
  
  

  
  
  return(
    <div className='App'>
      <h1>Movie Detail </h1>
      {movies.map((movie) => {
        console.log('movie name:', movie.name, movie.trailer)
        return(
          <div key={movie.id}>
            <h3>{movie.name}</h3>
            <div className='movieCard'>
            <img src={movie.poster} width={266} />
            <YouTube videoId={movie.trailer} opts={opts} width={500} /> 
            </div>
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
