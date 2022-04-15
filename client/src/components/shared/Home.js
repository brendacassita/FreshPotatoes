
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
//import MovieCarousel from '../pages/MovieCarousel'
import Carousel from '../pages/Carousel'


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
        <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <Carousel
                show={4}
                infiniteLoop
                // content added to the carousel - using a placeholder image
            > 
                <div>
                    <div style={{padding: 8}}>
                        <img src={renderPosters()} style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/5149l+O+P4L._AC_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/81R2FrgnfZL._AC_SL1000_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/516L7A1oXZL._AC_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/71enm1zeBvL._AC_SL1500_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/71J-SyixPsL._AC_SL1000_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/91RSvcwSX+L._AC_SL1500_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/7134I6+ZJmL._AC_SL1000_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/71pdrpHZUfL._AC_SL1500_.jpg" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/I/619yt12HbSL._AC_SL1001_.jpg" alt="placeholder" style={{width: '100%'}} />
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