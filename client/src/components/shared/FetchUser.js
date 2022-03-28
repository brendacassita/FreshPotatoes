import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";

const FetchUser = (props) => {
  const [checked, setChecked] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  // [] makes this act as componentDidMount
  useEffect(() => {
    checkUser();
  }, []);
  
  const checkUser = async () => {
    // if user is authentecated or doesn't not have acces token
    // we can setchecked to true and return from the function call
    if (user || !localStorage.getItem("access-token")) {
      console.log('User found or no token')
      setChecked(true);
      return;
    }
    // user is not authentecated but has access-token in local storage
    // let's check if it is valid if it, will grab and set user
    try {
      console.log('checkin token in local storage')
      // token sent (need to validate)
      const res = await axios.get("/api/auth/validate_token");
     // token was valid res.data.data is the user data
      setUser(res.data.data);
    } catch (err) {
      // token was not valid
      console.log(err);
      console.log("unable to validate token");
    } finally {
      //Block of code to be executed regardless of the try / catch result
      setChecked(true);
    }
  };

  // return nested jsx in app.js. if checked ie user has been checked to see
  // if they are auth or not, while in the process of checking don't
  // return nested instead just return null, this way nothing in the fetchuser
  // in app.js wont be checked
   return checked ? props.children : null;
//   return null;
};

export default FetchUser;