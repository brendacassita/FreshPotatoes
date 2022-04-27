import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'
import '../CssFIles/Popular.css';

const PopularFries= ()=>{
  const [top10, setTop10] =  useState([])
  const [per, setPer] = useState(10)
  const [count, setCount] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)


  useEffect(()=>{
    getTop10()
   console.log('in useeffect')
  },[])


  const getTop10 = async () =>{
    try{
      let res = await axios.get('/api/pagetopfries/?per=10')
      setPer(res.data.per)
      setCount(res.data.count)
      setTop10(res.data.movie)
      console.log('res:', res)
    }catch(err){
    alert('error in getting top 10 movies')
    }
  }

  const getMoreThanTop10 = async (page) =>{
    try{
      let res = await axios.get(`/api/pagetopfries/?page=${page}`)
      setCurrentPage (page)
      setTop10(res.data.movie)
    }catch(err){
    alert('error in getting more top movies')
    }
  }

  const renderButtons = () =>{
    const numPage = Math.ceil(count/per)
    console.log('numPage:', numPage)
    const buttonArr = []
    for(let i = 1; i<=numPage; i++){
      buttonArr.push(<button className='pagebutton' onClick={()=>{getMoreThanTop10(i)}}>{i}</button>)
    }
    return buttonArr
  }
 
  const renderMovies = ()=>{
    return top10.map((movie)=>(
      <div className="display">
       <li>
        <Link to={`/movies/${movie.id}`}><div>
        <img className='top10' src = {movie.poster}/></div>
        </Link>
        <div></div>
        <h4>{movie.name}</h4>
        <div key={movie.id}>
            
            </div>

            <div>
              <h6>
                year: {movie.year} | runtime:{movie.runtime}
              </h6>
              <div>
                <h6>post-rating: {movie.watched_rating.toFixed(0)}%</h6>
              </div>
              <div id="container">
                <h4>Story Line</h4>
                <p>{movie.plot}</p>
              </div>
              <hr/>

            </div>
          


          <br />

        </li>
      </div>
      
    ))
  }







  return(
   
        <div className='App1'>
          <div className='searchall' >
      <div className='sline' ></div>
          <div className='titlename'></div>
      <h1 className='searchall2' >Popular Fries</h1>
      <div className='bline' ></div>
      </div>
      <p className='miniwording'>* Movies need a minimum of 5 or more reviews to show up on the "Popular Potatoes"</p>
      <hr/>
    <br/>
    
      <ol start={(currentPage-1)*10+1}>{renderMovies()}</ol>
      <div>{renderButtons()}</div>
      </div>
     
    
  )
}

export default PopularFries
