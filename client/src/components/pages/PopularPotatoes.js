import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PopularPotatoes = ()=>{
  const [top10, setTop10] =  useState([])
  const [per, setPer] = useState(10)
  const [count, setCount] = useState(1)


  useEffect(()=>{
    getTop10()
   console.log('in useeffect')

  },[])


  const getTop10 = async () =>{
    try{
      let res = await axios.get('/api/pagetoppotatoes/?per=10')
      setPer(res.data.per)
      setCount(res.data.count)

      setTop10(res.data.movie)
      console.log(res)
    }catch(err){
    alert('error in getting top 10 movies')
    }
  }

  const getMoreThanTop10 = async (page) =>{
    try{
      let res = await axios.get(`/api/pagetoppotatoes/?page=${page}`)
      setTop10(res.data.movie)
    }catch(err){
    alert('error in getting more top movies')
    }
  }

  const renderButtons = () =>{
    const numPage = Math.ceil(count/per)
    console.log(numPage)
    const buttonArr = []
    for(let i = 1; i<=numPage; i++){
      buttonArr.push(<button onClick={()=>{getMoreThanTop10(i)}}>{i}</button>)
    }
    return buttonArr
  }
 
  const renderMovies = ()=>{
    return top10.map((movie)=>(
      <div>
       <ol type = '1'> <li>
        <Link to={`/movies/${movie.id}`}>
        <img className='top10' src = {movie.poster}/>
        </Link>
        </li>
        </ol>
      </div>
    ))
  }



  return(
      <div>
      <h1>Popular Potatoes </h1>  
      {renderMovies()}
      <div>{renderButtons()}</div>
    </div>
  )
}

export default PopularPotatoes