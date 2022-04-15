
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
          let res = await axios.get('/api/movies')
          setMovies(res.data)
          //set back to false because now we have the data
          setLoading(false);
          console.log(res.data)
        }catch(err){
        alert('error in getting movies')
        }
      }



       return (
        <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <Carousel
                show={4}
                infiniteLoop
            >
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
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