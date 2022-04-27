
import React,{useState, useEffect} from 'react'
import useAxios from 'axios-hooks' 
import axios from 'axios'
import Fuse from 'fuse.js'
import {useLocation, useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {styled,alpha} from '@mui/material/styles'
import {AppBar,IconButton,InputBase,Toolbar,Box} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import '../CssFIles/SearchBar.css'
import {useTranslation} from 'react-i18next'
import i18next from 'i18next'



const SearchBar = ({placeholder, data}) => {
  const [allMovies,setAllMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [filteredMovies,setFilteredMovies]  = useState([])
  const [searchTerm,setSearchTerm] = useState('')
  const [focus,setFocus]  = useState(false)
  const {i18n, t} = useTranslation(["common"])

  
  useEffect(() => {
    getMoviesFromApi()
 
  },[])
  
  const options = {
    includeScore: true,
    keys:['title', 'genre']
  }
  const fuse = new Fuse(allMovies,options)
  
  const getMoviesFromApi = async () => {
    
    try {
      let res = await axios.get('/api/movies')
      setAllMovies(res.data[0].results)
      
    } catch(err) {
      alert('error getting movies')
    }
  }
  const handleFilter = (event) => {
    const searchWord = event.target.value
    const newFilter = getMoviesFromApi.filter((value) => {
      return value.title.includes(searchWord);
     
    });
     setFilteredMovies(newFilter)
  }
  
  
  const handleSearchTermChange = (e) => {
    setFocus(true)
    setSearchTerm(e.target.value)
    const result = fuse.search(e.target.value)
   
    // Mapping through the results and displaying only y.item
    let MovieData = result.map(findMovie => findMovie.item)
    setFilteredMovies(MovieData)

  }
  const params = useParams()
  

  
  
  
  
  
//-----------------------RETURN--------------------------
  return (
    
    
    <div className='searchbar'>
      
      <div className='searchInputs'>
        <div className='search-wrapper'>
          
        <input className='searchbox' type='text' placeholder={t("common:searchmovies")} onChange={handleSearchTermChange} value={searchTerm}>
        </input>  
        
          <div className='searchicon'>
         <SearchIcon/> 
          </div>
          
          </div>
      </div>
      
      {filteredMovies.length != 0 && (
        <div className='dataResult'>
          
          {filteredMovies.map((value) => {
            return (
              <a className='dataItem alink' href={`/movies/${value.id}`}>
                 <img className='' src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} width={50} />
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
)}
      
       
           
         
          
         
      
      
      
      
      
      {/* {searchTerm.length != 0 && (
      <div className='dataResult'>
        {allMovies.map((value,key) => {
          return <a className='dataItem' href={`/movies/${value.id}`}>
            <p>{value.name}</p>
          </a>
        })}
      </div>  
     )} */}
      
      
      
      {/* <Box className=''>
           <Search className='box' >
            <SearchIconWrapper>
              <SearchIcon className="searchicon"/>
            </SearchIconWrapper>
              <StyledInputBase className="search"
              placeholder="Search Movies…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Box>  */}
      
      
      
           
         
          {/* <Search className="box"></Search>
              <StyledInputBase autoFocus={focus} onChange={handleSearchTermChange} value={searchTerm} type='text' className="search"
              placeholder="Search Movies…"/>

             <SearchIcon className="searchicon"/> */}

      
      
      
      
      
      {/* <input onChange={handleSearchTermChange} value={searchTerm} type='text' placeholder='search movies'></input> */}
      
      
      
        {/* <p>{JSON.stringify(filteredMovies)}</p> */}
      
      
        
        
      </div>
     
    
    
  )
}


export default SearchBar

