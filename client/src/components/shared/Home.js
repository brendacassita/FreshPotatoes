import { AuthContext } from "../../providers/AuthProvider"
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'



const Home = ()=>{
    const [movies, setMovies] =  useState([])

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
  
      return(
        <div className='container'>
          {movies.map((movie)=>{
            return(
              <div key = {movie.id}>
                <img src={movie.poster} width={150} />
                
               
    
                </div>
            )
          })}
          {/* {JSON.stringify(movies)} */}
          
        </div>
      )
    }

    export default Home