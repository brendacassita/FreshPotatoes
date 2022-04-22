import React,{useState, useEffect} from 'react'
import useAxios from 'axios-hooks' 
import axios from 'axios'
import Fuse from 'fuse.js'
import Ratings from '../shared/Ratings'
import {Link} from 'react-router-dom'
import '../CssFIles/card.css'
import '../CssFIles/SearchBar.css'
import '../CssFIles/searchResults.css'
import SearchIcon from '@mui/icons-material/Search'



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

    <div className='App'>
      <div className='searchall' >
      <div className='sline' ></div>
      <h1 className='searchall2' > Search Result - All</h1>
      <div className='bline' ></div>
      </div>

    <div className='App2'>
      <h1> Search Result Page</h1>
      <p>Search:</p>
      <input onChange={handleSearchTermChange} value={searchTerm} type='text' placeholder='search movies'></input>

      
      
      <div className='searchInputs1'>
        
          <input className=' searching' onChange={handleSearchTermChange} value={searchTerm} type='text' placeholder='search movies...'></input>
          {/* <div className='searchiconall'>
         <SearchIcon /> 
      </div> */}
      </div>
      <br />
      <div className='moviesearch' >
      {filteredMovies ? 
        filteredMovies.map((movies) => {
          return (
            
            <div className='searchresultsall'>
              <div  key={movies.id}>
                
                <div className='movieInfoBox' >
                  <Link className='cards' to={`/movies/${movies.id}`}>

                    <figure className='card resultcard'>
                      <img className='back result' src={movies.poster} width={100} />
                      </figure> 
                  </Link>
                  
                    <div className='seperate'>
                      <h4 className='movieName'>{movies.name}</h4>
                      <p>{movies.plot}</p>
                   </div>
                </div>
                {/* <Ratings /> */}
              </div>
        <div className='lineseperator'></div>
              </div>
          )
        })
        : <p>Not searching yet</p>}</div>
      <br/>
     <hr></hr>
      {allMovies.map((m) => {
        return (
          <div className='searchresults'>
            <div key={m.id}>
                <h4>{m.name}</h4>

                <div className='cards'>
                  <Link to={`/movies/${m.id}`}>
                    <figure className='card'>
                      <img className='back' src={m.poster} width={170} />
                      </figure>
                </Link>
                </div>
                {/* <Ratings /> */}
              </div>
        
           
            
              
              
              
              </div>
)
      
      })}
      
      
      {/* {JSON.stringify(allMovies)} */}
      
        
      </div>
     </div>
    
    
  )
}

export default SearchResults



