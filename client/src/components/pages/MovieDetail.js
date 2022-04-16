import { useEffect, useState } from 'react'
import axios from 'axios'
import YouTube from 'react-youtube'
import '../../App.css'
import '../CssFIles/container.css'
import { useLocation, useParams } from 'react-router-dom'


const MovieDetail = () => {
  const [movies, setMovies] =  useState([])
  const [casts, setCasts] =  useState([])
  // const [roles, setRoles] =  useState([])
  const [unwatched, setUnwatched] =  useState([])
  const [watched, setWatched] =  useState([])


  useEffect(()=>{
    getMovies()
  },[])

  useEffect(()=>{
    getUnwatched()
  },[])

  useEffect(()=>{
    getWatched()
  },[])

 
  const getMovies = async () =>{
    try{
      let res = await axios.get(`/api/movies/${params.id}`)
      setMovies(res.data)
      console.log(res.data)
    }catch(err){
    alert('error in getting movies')
    }
  }

//TODO: need to make 2 separate api calls, one for watched and one for unwatched
  const getUnwatched = async () =>{
    try{
      let res = await axios.get(`/api/movies/${params.id}/unwatched`)
      setUnwatched(res.data)
      console.log(res.data)
    }catch(err){
    alert('error in getting unwatched reviews')
    }
  }

  const getWatched = async () =>{
    try{
      let res = await axios.get(`/api/movies/${params.id}/watched`)
      setUnwatched(res.data)
      console.log(res.data)
    }catch(err){
    alert('error in getting unwatched reviews')
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
  
    const params = useParams()
    const location = useLocation()

    const renderUnwatched = () => {
      const uw = unwatched.map((uw) => {
        return (
          <div>
            <p>{uw.unwatched_rating}</p>
          </div>
        )
      })
      return uw
    }

    const renderWatched = () => {
      const w = watched.map((w) => {
        return (
          <div>
            <p>{w.watched_rating}</p>
          </div>
        )
      })
      return w
    }

  return(
  
    <div className='App'>
      <h1>Movie Detail </h1>
      {movies.map((movie) => {
        console.log('movie name:', movie.name, movie.trailer)
        return(
          <div key={movie.id}>
            <h3>{movie.name}</h3>
            <div className='movieCard'>
              <img src={movie.poster} width={250} />
              <YouTube videoId={movie.trailer} opts={opts} width={500} /> 
            </div>

            <div>
              <h6> {movie.year} | {movie.runtime} | {movie.genre}</h6>
              <h6>pre: | post: </h6> 
    
              <div id='container'>
                <h4>Story Line</h4>
                <p className='information'>{movie.plot}</p>
                <h6>Cast & Crew</h6>
               <p>{casts.name}</p>
               <img href={casts.headshot} width={50} /> 
               {/* <p>{roles.title}</p> */}
              </div>

              <div className="control">
              </div>
            </div>       
          </div>
        )
      })}
      {renderUnwatched()}
      {renderWatched()}
      {/* {JSON.stringify(movies)} */}
      
    </div>
  )
}

export default MovieDetail
