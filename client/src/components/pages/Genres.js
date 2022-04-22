import axios from "axios"
import {useEffect,useState} from "react"
import '../CssFIles/card.css'
import { Link } from 'react-router-dom'



const Genres = ()=>{
  const [genres, setGenres] = useState([])

  useEffect(()=>{
    getGenres()
  }, [])


 const getGenres = async()=>{
   try{
    let res = await axios.get('./api/genres')
    setGenres(res.data)
   }catch (err){
   alert('error getting genres')
  }
 }
  

    
const renderData = () => {
  const genre = genres.map((g) => {
    return (
      <div key={g.id}>
        <div className="wrapper">
          
          <div className="cards ">
            <Link to={`/genres/${g.name}`}state={{genre:g.name}}>
            <figure className="card ">
              <div className="centered">{g.name}</div>
              
                <img alt="g.id" className="back" src={g.image}></img>
               
            </figure>
              </Link>
          </div>
        </div>
      </div>
    )
  }
  
  )
  return genre
}
   
     
      return(
        <div className="App2">
          
      
          <h1>Genres</h1>   
{/*           
          <div className="wrapper">
            <div className="cards">
              <figure className="card">
                 <div className="centered">Movie</div>
              <img className="back" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/westerns-12-1582066991.jpg" ></img>
                </figure>
            </div>
          </div> */}
   <div className="rowdata">
          {renderData()}
      </div>    
        {/* {JSON.stringify(genres)} */}
        </div>
      
      )
  }


    

export default Genres
