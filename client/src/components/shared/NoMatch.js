<<<<<<< HEAD
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
=======
import { Link } from "react-router-dom";

const NoMatch = () => (
  <div className="App1">
    <h3>
      Page not found - return to
      <Link to="/">
        <b style={{ color: "red" }}> HOME</b>
      </Link>
    </h3>
  </div>
);
>>>>>>> e0b3bb98e3532acbb162f2e0914f6f264d51af52

export default NoMatch;
