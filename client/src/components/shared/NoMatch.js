import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const NoMatch = () => {
  const navigate = useNavigate()
  let nav = useNavigate()


return (
  <div className='App1'>
  <h3>
    Page not found - return to
    
    <Link to="/"><b style={{color: 'red'}}> HOME</b></Link>
  </h3></div>
)
}

export default NoMatch;
