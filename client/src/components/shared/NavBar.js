import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const auth = useContext(AuthContext);
  //   const {user} = useContext(AuthContext); 
  //    if(user) => logout
  //    if(!user) => login/register
  const renderRightNav = () => {
    if (auth.user) {
      return <Link to="/">Logout'TODO'</Link>;
    }
    return (
      <>
        <Link to="/">Home </Link> -  
        <Link to="/login">Login</Link> -  
        <Link to="/register">Register</Link> 

      </>
    );
  };
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
    <div></div>
      <div>{renderRightNav()}</div>
    </div>
  );
};
export default Navbar;