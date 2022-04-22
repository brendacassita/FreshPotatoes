import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate} from "react-router-dom"
import Carousel from '../pages/Carousel'
import {AuthContext} from '../../providers/AuthProvider'
import GenreFilter from '../pages/GenreFilter'
import '../CssFIles/card.css'




const Home = () => {
  let auth = useContext(AuthContext)
    const [movies, setMovies] =  useState([])

    const navigate = useNavigate()


    const [loading, setLoading] = useState(false)
    let nav = useNavigate()

    useEffect(()=>{
        getMovies()
    },[])

    const getMovies = async () =>{
        //change the state when we start to load
        setLoading(true);
        try{
          let res = await axios.get('/api/newest/')
          setMovies(res.data)
          console.log(res.data)
          //set back to false because now we have the data
          setLoading(false);
          console.log(res.data)
        }catch(err){
        alert('error in getting movies')
        }
      }


    const renderPosters = () => {
        return movies.map((movie) => (
        <div>
            <div style={{padding: 8}}>
                <img src={movie.poster_path} 
                // onClick={()=>nav(`/movies/${movie.id}`)} 
                style={{width: '100%'}} />
            </div>
        </div>
        ))   
    }

       return (
         <div className='App' >
           {/* <div className='welcome'><h2 className='namehome'>Welcome {auth.user.name}!</h2>
           </div> */}
         <div className='homeCarousel' >
            <Carousel
                show={4}
                infiniteLoop
            > 
            {renderPosters()}
            </Carousel>
<<<<<<< HEAD

            <div className="wrapper">
          
          <div className="cards ">
              {/* <GenreFilter /> */}
=======
        </div>
             
             
             
            <div className='homeGenre'>
              <GenreFilter />
>>>>>>> 1afe4c8b793d1211446c4e8268c81bd84c4ead99
            </div>
            </div>   
    )
}

    export default Home
