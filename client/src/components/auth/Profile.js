import React, { useContext, useState } from "react";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import { AuthContext } from "../../providers/AuthProvider";

import bwPic from '../../Images/blackwhitePotatoe.png'



const Profile = () => {
  const [name, setName] = useState('');

  const auth = useContext(AuthContext)
 
  const {  user, setUser } = useContext(AuthContext)
  
  
  
  return(
    <div className="App1">
     <h1>Profile Page</h1>
      {user.avatar && <img className="profile-pic" src={user.avatar} width={200} />}
      
       {!user.avatar && <button ><img className="profile-pic" src={bwPic} width='170px'></img></button>}
      
      
      < br />
      <h2>{user.name}</h2>
     
      {/* {!user.avatar && <p>no image</p>} */}
      < br/>
      < br/>

       {/* <p>{JSON.stringify(user)}</p> */}
     
    </div>
  )
}
  



  


export default Profile


