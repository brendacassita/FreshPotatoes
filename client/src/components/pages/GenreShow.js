import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'
import '../CssFIles/container.css'
import { Link } from 'react-router-dom'

const GenreShow = () => {
  // const [loading, setLoading] = useState(true)
  const [genre, setGenre] = useState([])
  const [movies, setMovies] = useState([])
  const location = useLocation()

  console.log(location)

  useEffect(() => {
    getMovies()
  },[])

  // useEffect(() => {
  //   getGenre()
  // },[])
  
  const getMovies = async () => {
    try {
      let res = await axios.get(`/api/genres/${params.id}`)
      setMovies(res.data.results)
      // setLoading(false)
      console.log("MOVIES:", res.data.results)
    } catch (err) {
      alert("Error in getting movies")
    }
  }

  const renderMovie = () => {
    return movies.map((movie) => (
      <div key={`${movie.id}`}>
        <div>
        <Link to={`/movies/${movie.id}`}>
          <img className='genreShow genreImage' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        </Link>
        <h5 className='genreShow'>{movie.title}</h5>
      </div>
      </div>
    ))
  }
  
  // const getGenre = async () => {
  //   try {
  //     let res = await axios.get(`/api/genres/${params.id}`)
  //     setGenre(res.data)
  //    console.log(res.data)
  //   } catch(err) {
  //   alert('error getting genre id')
  //   }
  // }
  
  const params = useParams()
   

return (
  <div>
    {/* <div className=''><h1>{params.name}</h1></div> */}
    {renderMovie()}
  </div>
)
}

export default GenreShow


// return (
//   <div>
//     <div className=''><h1>{params.name}</h1></div>
    
//     {genre.map((m) => {
//       return (
        
//         <div className='genreShow'>
//            {/* <Link to={`/movies/${m.movie_id}`}> */}
//           {/* <img className='genreShow genreImage' src={m.poster} /> */}
//           {/* </Link> */}
//           {/* <h5 className='genreShow'>{m.movie_name}</h5> */}
//        </div>
// )
//     })}
    
    
//   </div>
// )
// }
