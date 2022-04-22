import React, { useContext, useState } from "react";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import { AuthContext } from "../../providers/AuthProvider";




const Profile = () => {
  const [name, setName] = useState('');

  const auth = useContext(AuthContext)
 
  const {  user, setUser } = useContext(AuthContext)
  
  
  
  return(
    <div className="App2">
     <h1>Profile Page</h1>
     {user.avatar && <img src={user.avatar} width={200} />}
     < br/>
     {user.name}
      {/* {!user.avatar && <p>no image</p>} */}
      < br/>
      < br/>

       {/* <p>{JSON.stringify(user)}</p> */}
     
    </div>
  )
}
  


  


export default Profile


