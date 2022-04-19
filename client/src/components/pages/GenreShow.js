import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'
import '../CssFIles/container.css'




const GenreShow = () => {
  const [genre,setGenre] = useState([])
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    getGenre()
  },[])
  useEffect(() => {
    getMovies()
  },[])
  
  const getGenre = async () => {
    try {
      let res = await axios.get(`/api/genres/${params.id}`)
      setGenre(res.data)
     
    } catch(err) {
    alert('error getting genre id')
    }
  }
  
  const getMovies = async () => {
    try {
      let res = await axios.get(`/api/genres/${params.id}`)
      setMovies(res.data)
    console.log(res.data)
    } catch(err) {
    alert('error getting movies')
    }
}
  
  const params = useParams()
   
  
  return (
    <div>
      <h1 className='genretitle'>GenreShow</h1>
      
      {genre.map((movie) => {
        
        return (
          
          <div className='genreShow' key={movie.name}>
            <img className='genreShow genreImage' src={movie.poster} />
            <h5 className='genreShow'>{movie.movie_name}</h5>
         </div>
)
      })}
      
      
    </div>
  )
}

export default GenreShow

