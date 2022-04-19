import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Carousel from '../pages/Carousel'
import {AuthContext} from '../../providers/AuthProvider'


const Home = () => {
  let auth = useContext(AuthContext)
    const [movies, setMovies] =  useState([])
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
                <img src={movie.poster} onClick={()=>nav(`/movies/${movie.id}`)} style={{width: '100%'}} />
            </div>
        </div>
        ))   
    }

       return (
         <div style={{maxWidth: 1200,marginLeft: 'auto',marginRight: 'auto',marginTop: 64}}>
           
           {auth.user ?
             <div className='welcome'><h2 className='namehome'>Welcome {auth.user.name}!</h2>
             </div>
             :<p> hi</p>}
            
          
          
               
            <Carousel
                show={4}
                infiniteLoop
            > 
            {renderPosters()}
            
            </Carousel>
        </div>
    )
}

    export default Home

