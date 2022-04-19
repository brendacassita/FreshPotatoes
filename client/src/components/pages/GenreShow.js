import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'
import '../CssFIles/container.css'
import { Link } from 'react-router-dom'




const GenreShow = () => {
  const [genre,setGenre] = useState([])
  const [movies, setMovies] = useState([])
  const location = useLocation()
  console.log(location)
  useEffect(() => {
    getGenre()
  },[])
  
  
  const getGenre = async () => {
    try {
      let res = await axios.get(`/api/genres/${params.name}`)
      setGenre(res.data)
     console.log(res.data)
    } catch(err) {
    alert('error getting genre id')
    }
  }
  
  
  
  const params = useParams()
   
  
  return (
    <div>
      <div className=''><h1>{params.name}</h1></div>
      
      {genre.map((m) => {
        return (
          
          <div className='genreShow'>
             <Link to={`/movies/${m.genre_id}`}>
            <img className='genreShow genreImage' src={m.poster} />
            </Link>
            <h5 className='genreShow'>{m.movie_name}</h5>
         </div>
)
      })}
      
      
    </div>
  )
}

export default GenreShow

