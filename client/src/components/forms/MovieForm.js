import React, { useState } from 'react'
import axios from 'axios'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

const MovieForm = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
  const [name, setName] = useState(location.state ? location.state.name : '')
  const [poster, setPoster] = useState(location.state ? location.state.poster : '')
  const [trailer, setTrailer] = useState(location.state ? location.state.trailer : '')
  const [plot, setPlot] = useState(location.state ? location.state.plot : '')
  const [runtime, setRuntime] = useState(location.state ? location.state.runtime : '')
  const [year, setYear] = useState(location.state ? location.state.year : '')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (params.id) {
        await axios.put(`/api/movies/${params.id}`, {name, poster, trailer, plot, runtime, year, id: params.id})
      } else {
        let res = await axios.post(`/api/movies`, {name, poster, trailer, plot, runtime, year})
        params.addMovie(res.data)
      }
      navigate('/movies')
    } catch (err) {
      alert('error in Movies form')
    }
  }

  return (
    <div>
      <h1>{params.id ? 'Edit' : 'New'} Movie Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Name: <input value={name} onChange={(e) => setName(e.target.value)}/></p>
        <p>Poster URL: <input value={poster} onChange={(e) => setPoster(e.target.value)}/></p>
        <p>Trailer URL: <input value={trailer} onChange={(e) => setTrailer(e.target.value)}/></p>
        <p>Plot: <input value={plot} onChange={(e) => setPlot(e.target.value)}/></p>
        <p>Runtime: <input value={runtime} onChange={(e) => setRuntime(e.target.value)}/></p>
        <p>Year: <input value={year} onChange={(e) => setYear(e.target.value)}/></p>
        <hr/>
        <button>{params.id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  )

} 


export default MovieForm