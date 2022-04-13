import React,{useState, useEffect} from 'react'
import useAxios from 'axios-hooks' 
import axios from 'axios'
import Fuse from 'fuse.js'



const SearchResults = () => {
  const [allMovies,setAllMovies] = useState(null)
  const [loading, setLoading] = useState(true)
  const [filterMovies,setFilteredMovie]  = useState([])
  const [searchTerm,setSearchTerm]  = useState('')
  
  useEffect(() => {
    getMoviesFromApi()
    
  },[])
   
  const options = {
    includeScore: true,
    keys:['name', 'genre']
  }
  const fuse = new Fuse(options)
 
  
  const getMoviesFromApi = async () => {
    try {
      let res = await axios.get('/api/movies')
      setAllMovies(res.data)
    } catch(err) {
      alert('error getting movies')
    }
  }
  
  const handleSearchTermChange = (e)=>{
     setSearchTerm(e.target.value)
     const result = fuse.search(e.target.value)
    setFilteredMovie(result)
    // normalize render whatever you need
    
  }

  return (
    <div>
      
      <h1> Search Result Page</h1>
      <div className='ui icon input'>
        <p>Search:</p>
        <input onChange={handleSearchTermChange} type='text' placeholder='search movies'></input>
        
        <p>{JSON.stringify(allMovies)}</p>
      </div>
     
    
    </div>
  )
}

export default SearchResults



