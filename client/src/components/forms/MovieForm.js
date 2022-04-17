import React from 'react'
import axios from 'axios'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

const MovieForm = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [name, setName] = useState(location.state ? location.state.name : '')
  const [poster, setPoster] = useState(location.state ? location.state.poster : '')
  const [trailer, setTrailer] = useState(location.state ? location.state.trailer : '')
  const [plot, setPlot] = useState(location.state ? location.state.plot : '')
  const [runtime, setRuntime] = useState(location.state ? location.state.runtime : '')
  const [year, setYear] = useState(location.state ? location.state.year : '')
  const params = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (params.id) {
        await axios.put(`/api/movies/${params.id}`, {name, poster, trailer, plot, runtime, year, id: params.id})
      } else {
        let res = await axios.post(`/api/movies`, {name, poster, trailer, plot, runtime, year})
        addMovie(res.data)
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
      </form>
    </div>
  )

} 

export default MovieForm