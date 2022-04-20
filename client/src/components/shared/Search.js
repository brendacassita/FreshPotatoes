
import React,{useState, useEffect} from 'react'
import useAxios from 'axios-hooks' 
import axios from 'axios'
import Fuse from 'fuse.js'
import {useLocation, useParams} from 'react-router-dom'

import {Link} from 'react-router-dom'
import {styled,alpha} from '@mui/material/styles'
import {AppBar,IconButton,InputBase,Toolbar,Box} from '@mui/material'
import '../CssFIles/card.css'
import SearchIcon from '@mui/icons-material/Search'

const Search = () => {const [allMovies,setAllMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [filteredMovies,setFilteredMovies]  = useState([])
  const [searchTerm,setSearchTerm]  = useState('')
  
  useEffect(() => {
    getMoviesFromApi()
 
  },[])
  
  
  const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

 const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '22ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));
  
  
  
  
   
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
   const params = useParams()
  

  return (
    <div className='App'>
      <h1> Search Bar Function</h1>
        
      <p>Search:</p>
      
           
            <SearchIconWrapper>
              <SearchIcon className=""/>
            </SearchIconWrapper>
              <StyledInputBase onChange={handleSearchTermChange} value={searchTerm} type='text' className="search"
              placeholder="Search Movies…"/>
               
      
     
      <input onChange={handleSearchTermChange} value={searchTerm} type='text' placeholder='search movies'></input>
      
      
        {/* <p>{JSON.stringify(filteredMovies)}</p> */}
      
      <hr></hr>
      {filteredMovies ? 
        filteredMovies.map((movies) => {
          return (
            <div className='searchresults'>
              
              <div className='listbox'>
          
            <li >
              <span>{params.name}</span>
             
            </li>
          
        </div>
             
              
              
              
              
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


export default Search

