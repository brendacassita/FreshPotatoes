import React from 'react'
import axios from 'axios'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

const ReviewForm = (props) => {
  const [rating, setRating] = useState(props.rating || '')
  const [watched, setWatched] = useState(props.watched || '')
  const [comment, setComment] = useState(props.comment || '')
}

export default ReviewForm