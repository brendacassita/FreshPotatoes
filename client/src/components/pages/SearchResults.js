import React,{useState, useEffect} from 'react'
import useAxios from 'axios-hooks' 
import axios from 'axios'



const SearchResults = () => {
  const [movies,setMovies] = useState(null)
  const [loading, setLoading] = useState(true)
  
  
  useEffect(() => {
    getMoviesFromApi()
    
  },[])
  
 
  
  
  
  const getMoviesFromApi = async () => {
    try {
      let res = await axios.get('/api/movies')
      setMovies(res.data)
    } catch(err) {
      alert('error getting movies')
    }
  }
  
  
  
  return (
    <div>
      
      <h1> Search Result Page</h1>
      <div className='ui icon input'>
        <p>Search:</p>
        <input type='text' placeholder='search movies'></input>
        
        <p>{JSON.stringify(movies)}</p>
      </div>
     
    
    </div>
  )
}

export default SearchResults

