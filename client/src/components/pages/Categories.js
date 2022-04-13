
import { useEffect, useState } from 'react'
import axios from 'axios'

const Categories = () => {
  const [movies, setMovies] =  useState([])
  const [filteredCategories, setFilteredCategories] = useState([])

  useEffect(()=>{
    getMovies()
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

  const getUniqueCategories = () =>{
    return movies.reduce((accum, current)=>{
      if(!accum.includes(current.genre)){
        accum.push(current.genre)
      }
      return accum
    }, [])
  }

  // const renderFilteredCategoryMovies = ()=>{
  //   if(!filteredCategories){
  //     return<p>No movies in genre found </p>
  //   }
  //   return(
  //     {filteredCategories.map((m) => (
  //       <p>{m.genre}</p>
  //     ))}
  //   )}
  
  
  
  
  
  
  
  return(
    <div>
      <h1>Categories</h1>
      {movies.map((movie)=>{
        return(
          <div key = {movie.id}>
            <h5>{movie.genre}</h5>
            <img src={movie.poster} width={150} />
            {/* {renderFilteredCategoryMovies()} */}
            </div>
        )
      })}
      {/* {JSON.stringify(movies)} */}
      
    </div>
  )
}

export default Categories