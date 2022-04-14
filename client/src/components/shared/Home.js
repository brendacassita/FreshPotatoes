import { AuthContext } from "../../providers/AuthProvider"
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'


const Home = ()=>{
    const [movies, setMovies] =  useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getMovies()
    },[])

    const getMovies = async () =>{
        //change the state when we start to load
        setLoading(true);
        try{
          let res = await axios.get('/api/movies')
          setMovies(res.data)
          //set back to false because now we have the data
          setLoading(false);
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
                {!loading && <img src={movie.poster} width={150} />}
                {loading && <p>Loading...</p>}
           
         
                
               
    
                </div>
            )
          })}
          {/* {JSON.stringify(movies)} */}
          
        </div>
      )
    }

    export default Home