import React,{useState, useEffect} from 'react'
import useAxios from 'axios-hooks' 
import axios from 'axios'
import Fuse from 'fuse.js'
import Ratings from '../shared/Ratings'
import {Link} from 'react-router-dom'
import '../CssFIles/card.css'


const SearchResults = () => {
  const [allMovies,setAllMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [filteredMovies,setFilteredMovies]  = useState([])
  const [searchTerm,setSearchTerm]  = useState('')
  
  useEffect(() => {
    getMoviesFromApi()
 
  },[])
   
  const options = {
    includeScore: true,
    keys:['name', 'genre']
  }
  const fuse = new Fuse(allMovies, options)
 
  
  const getMoviesFromApi = async () => {
    
    try {
      let res = await axios.get('/api/movies')
      setAllMovies(res.data)
      
    } catch(err) {
      alert('error getting movies')
    }
  }
  
  
  
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value)
    const result = fuse.search(e.target.value)
   
    // Mapping through the results and displaying only y.item
    let MovieData = result.map(findMovie => findMovie.item)
    setFilteredMovies(MovieData)

  }
  
  

  return (
    <div className='App2'>
      <h1> Search Result Page</h1>
      <p>Search:</p>
      <input onChange={handleSearchTermChange} value={searchTerm} type='text' placeholder='search movies'></input>
      
        {/* <p>{JSON.stringify(filteredMovies)}</p> */}
      
      <hr></hr>
      {filteredMovies ? 
        filteredMovies.map((movies) => {
          return (
            <div className='searchresults'>
            <div key={movies.id}>
                <h4>{movies.name}</h4>
                <div className='cards'>
                  <Link to={`/movies/${movies.id}`}>
                    <figure className='card'>
                      <img className='back' src={movies.poster} width={170} />
                      </figure>
                </Link>
                </div>
                {/* <Ratings /> */}
              </div>
              </div>
          )
        })
      :<p>Not searching yet</p>}
    
        
        
      </div>
     
    
    
  )
}

export default SearchResults



