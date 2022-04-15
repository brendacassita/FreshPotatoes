import axios from "axios"
import { useEffect, useState } from "react"
import useAxios from 'axios-hooks'


const Categories = ()=>{

    const[{data: movies, loading, error}] = useAxios('/api/movies')
    
    const [filteredCategories, setFilteredCategories] = useState([])
    
      if(error) return <p>Error</p>
      if(loading) return <p>Loading</p>

    const getUniqueCategories = ()=>{ 
      return movies.reduce((accum, movie) =>{
        if(!accum.includes(movie.genre)){
          accum.push(movie.genre)
        }
          return accum
        },[])
    }


    const showSelect = (event) => {
        let selectedCategory = event.target.value;
        setFilteredCategories(movies.filter((movie) => movie.genre === selectedCategory))
    }


      const getSelect = () => {
        let uniqueCategories = getUniqueCategories()
        return(uniqueCategories)
        
      }

      const renderFilteredCategoryMovies = () => {
        if (!filteredCategories) {
          return <p> No movies, or select a category </p>
      }
    
        return (
          filteredCategories.map((m) => (
            <div key={m.id}>
                 <p>  {m.genre  }{''} </p> 
                 

            </div>
          ))  
        )
      }
    
      return(
        <div>
        <h1>Categories</h1>   
          {showSelect && getSelect()}
          
        </div>
      
      )
  }


    

export default Categories