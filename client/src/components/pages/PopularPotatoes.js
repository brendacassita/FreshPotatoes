import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../CssFIles/card.css'
import '../CssFIles/Popular.css';

const PopularPotatoes = () => {
  const [top10, setTop10] = useState([])
  const [per, setPer] = useState(10)
  const [count, setCount] = useState(1)
  const [casts, setCasts] = useState([])
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)


  useEffect(() => {
    getTop10()
    console.log('in useeffect')
  }, [])

  const getTop10 = async () => {
    try {
      let res = await axios.get('/api/pagetoppotatoes/?per=10')
      setPer(res.data.per)
      setCount(res.data.count)

      setTop10(res.data.movie)
      console.log(res)
    } catch (err) {
      alert('error in getting top 10 movies')
    }
  }

  const getMoreThanTop10 = async (page) => {
    try {
      let res = await axios.get(`/api/pagetoppotatoes/?page=${page}`)
      setCurrentPage (page)
      setTop10(res.data.movie)
    } catch (err) {
      alert('error in getting more top movies')
    }
  }

  const renderButtons = () => {
    const numPage = Math.ceil(count / per)
    console.log(numPage)
    const buttonArr = []
    for (let i = 1; i <= numPage; i++) {
      buttonArr.push(<button className='pagebutton' onClick={() => { getMoreThanTop10(i) }}>{i}</button>)
    }
    return buttonArr
  }

  const renderMovies = () => {
    return top10.map((movie) => (
      <div className="display">
      
        <li>
          <Link to={`/movies/${movie.id}`}>
            <img className='top10' src={movie.poster} />
          </Link>
          <h4>{movie.name} <br /></h4>
          <div key={movie.id}>
            <div className="movieCard">
            </div>

            <div>
              <h6>
                {" "}
                year: {movie.year} runtime:{movie.runtime}
              </h6>
              <div>
                <h6>pre-rating: {movie.unwatched_rating.toFixed(0)}%</h6>
              </div>

              <div id="container">
                <h4>Story Line</h4>
                <p className="information">{movie.plot}</p>
              </div>
              <hr/>

            </div>
          </div>


          <br />

        </li>
      </div>
      
    ))
  }









  return (
    <div className='App'>
       <div className='titleline' >
      <div className='smallline' ></div>
          <div className='titlename'></div>
          <h1 className='searchall2' >Popular Potatoes </h1>
      <div className='bigline' ></div>
      </div>
      <p className='miniwording'>* Movies need a minimum of 5 or more reviews to show up on the "Popular Potatoes"</p>
      <hr/>
    <br/>
      <ol start={(currentPage-1)*10+1}>{renderMovies()}</ol>
      <div>{renderButtons()}</div>



      {casts.map((cast) => {
        console.log("cast data:", cast.name);
        return (
          <div key={cast.id}>
            <img src={cast.headshot} width={100} />
            <p><b>{cast.title}</b></p>
            <p><i>{cast.name}</i></p>
          </div>
        );
      })}

    </div>
  );
}


export default PopularPotatoes