import { AuthContext } from "../../providers/AuthProvider"
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom"



const Home = ()=>{
    const [movies, setMovies] =  useState([])
    const navigate = useNavigate()

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


  const renderMovies = ()=>{
    return movies.map((movie)=>(
      <div key = {movie.id}>
      <img src={movie.poster} width={150}/>
      </div>
    ))
  }
  


      return(
        <div className='container'>
         {renderMovies()}
         
          {/* {JSON.stringify(movies)} */}
          
        </div>
      )
    }

    export default Home