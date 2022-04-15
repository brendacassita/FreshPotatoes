import axios from "axios"
import { useEffect, useState } from "react"



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
        {renderData()}
        {JSON.stringify(categories)}
        </div>
      
      )
  }


    

export default Genres