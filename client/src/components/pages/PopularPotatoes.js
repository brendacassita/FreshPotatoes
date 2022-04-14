import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PopularPotatoes = ()=>{
  const [top3, setTop3] =  useState([])
  const [top10, setTop10] =  useState([])
  const [per, setPer] = useState(10)
  const [count, setCount] = useState(1)


  useEffect(()=>{
    getTop10()
   

  },[])



  const getTop3 = async () =>{
    try{
      let res = await axios.get('/api/top3/potatoes')
      setTop3(res.data)
      setCount(res.data)
      setPer(res.data)
      console.log(res.data)
    }catch(err){
    alert('error in getting top 3 movies')
    }
  }

  const getTop10 = async () =>{
    try{
      let res = await axios.get('/api/top10/potatoes')
      setTop10(res.data)
      console.log(res.data)
    }catch(err){
    alert('error in getting top 10 movies')
    }
  }

  const renderButtons = () =>{
    const numPage = Math.ceil(count/per)
    console.log(numPage)
    const buttonArr = []
    for(let i = 1; i<=numPage; i++){
      buttonArr.push(<button onClick={()=>{getTop10(i)}}>next page...</button>)
    }
    return buttonArr
  }
 



  return(
      <div className=''>
      <h1>Popular Potatoes </h1>
      <div className='container'>
      {renderButtons()}
      {top10.map((movie)=>{
        return(
          <div key = {movie.id}>
      
            <img src={movie.poster} width={150} />
          
            
            </div>
            
        )
      })}
      {/* {JSON.stringify(movies)} */}
      </div>
    </div>
  )
}

export default PopularPotatoes