
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
//import MovieCarousel from '../pages/MovieCarousel'
import Carousel from '../pages/Carousel'
import {AuthContext} from '../../providers/AuthProvider'




const Home = () => {
  let auth = useContext(AuthContext)
    const [movies, setMovies] =  useState([])
    const [loading, setLoading] = useState(false)

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
     

        
        return movies.map((movie) => {
            <div>
                <img src= {movie.poster} />
            </div>
        })
        
    }

       return (
         <div style={{maxWidth: 1200,marginLeft: 'auto',marginRight: 'auto',marginTop: 64}}>
           
         
           {/* <div className='welcome'><h2 className='namehome'>Welcome {auth.user.name}!</h2>
           </div> */}
            
          
          
               
            <Carousel
                show={4}
                infiniteLoop
                // content added to the carousel - using a placeholder image
            > 
            
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/71R3sYwjb4L._AC_SL1464_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/61DfIhoIJGL._AC_SL1500_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/61KJHL4G+eL._AC_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/71DuFCPQHRL._AC_SL1500_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/71r6YHoA4sL._AC_SL1358_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://ariseletusbegoing.files.wordpress.com/2022/04/wp-16495315765356152001558212309618.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/71vHJ8UqxxL._AC_SL1500_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/51a-Iz7wwCL._AC_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/81wbOkjaZ+L._AC_SL1458_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/81xn4q+XdeL._AC_SL1500_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/51pC6YFqfqL._AC_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/710R6Go8u0L._AC_SY679_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/51Bw3Zfm97L.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/61ZWo59PYKL._AC_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/81wbOkjaZ+L._AC_SL1458_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

    export default Home


    // const Home = () => {
//     return (
//         <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
//             <Carousel
//                 show={4}
//                 infiniteLoop
//             >
//                 <div>
//                     <div style={{padding: 8}}>
//                         <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
//                     </div>
//                 </div>
//                 <div>
//                     <div style={{padding: 8}}>
//                         <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
//                     </div>
//                 </div>
//                 <div>
//                     <div style={{padding: 8}}>
//                         <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
//                     </div>
//                 </div>
//                 <div>
//                     <div style={{padding: 8}}>
//                         <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
//                     </div>
//                 </div>
//                 <div>
//                     <div style={{padding: 8}}>
//                         <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
//                     </div>
//                 </div>
//                 <div>
//                     <div style={{padding: 8}}>
//                         <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
//                     </div>
//                 </div>
//                 <div>
//                     <div style={{padding: 8}}>
//                         <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
//                     </div>
//                 </div>
//                 <div>
//                     <div style={{padding: 8}}>
//                         <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
//                     </div>
//                 </div>
//             </Carousel>
//         </div>
//     )
// }

// export default Home;
