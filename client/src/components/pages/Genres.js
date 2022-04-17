import axios from "axios"
import {useEffect,useState} from "react"
import '../CssFIles/card.css'
import logo from '../../Images/Thelogo.png'


const Genres = ()=>{
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    getGenres()
  }, [])


 const getGenres = async()=>{
   try{
    let res = await axios.get('/api/categories')
    setCategories(res.data)
   }catch (err){
   alert('error getting categories')
  }
}

    
const renderData = () => {
  const genres = categories.map((c) => {
    return (
      <div key={c.genre}>
      </div>
    )
  }
  
  )
  return genres
}
   
     
      return(
        <div>
          <h1>Genres</h1>   
          
          <div className="wrapper">
            <div className="cards">
              <figure className="card">
                 <div className="centered">ACTION</div>
              <img className="back" src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/370-q80/movie_asset/87/18/37/wom_salone_poster_1400x2100.jpg" ></img>
                </figure>
            </div>
          </div>
          {/* <div className="container">
            
            <div className="card card0">
             <h2 className="genre-type">Action</h2>
            </div> 
            
            
            <div className="card ">
              <img className="card pic1" src={logo}></img>
              <div className="border">
                <h2 className="genre-type">Comedy</h2>
               </div>
            </div>
            
              
            <div className="card card1">
              <div className="border">
                <h2 className="genre-type">Comedy</h2>
               </div>
            </div>
            
            <div className="card card1">
              <div className="border">
                <h2 className="genre-type">Comedy</h2>
               </div>
            </div>
            
          </div> */}
         
          
          
          
          
          
          
          
          
          
          
          {/* <div className="container">
            
            <div className="img-container">
              <img src={logo} alt=""></img>
            </div>
            
            <ul className="social-media">
            <li> <a hrer='#'><i className="fa fa-facebook"></i> </a> </li>
            </ul>
            
            <div className="user-info">
              <h2>Genre</h2>
              <span>Action</span>
            </div>
          </div> */}
          
          
          
          
          
          
          
          
          
      
          
        {renderData()}
        {JSON.stringify(categories)}
        </div>
      
      )
  }


    

export default Genres
