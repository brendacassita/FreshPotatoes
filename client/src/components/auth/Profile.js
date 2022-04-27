import React, { useContext, useState } from "react";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import { AuthContext } from "../../providers/AuthProvider";
import {useTranslation, } from 'react-i18next'

import bwPic from '../../Images/blackwhitePotatoe.png'



const Profile = () => {
  const [name, setName] = useState('');
  const auth = useContext(AuthContext)
  const {  user, setUser } = useContext(AuthContext)
  const {t} =  useTranslation(["common", "profile"])
  
  
  
  
  
  
  return(
    <div className="App2">
     <h1>{t("common:profile")}</h1>
     {/* <h1>profile</h1> */}

     {user.avatar && <img src={user.avatar} width={200} />}
     < br/>
     <p>{t("common:welcome")} {user.name}!</p>
      {/* {!user.avatar && <p>no image</p>} */}
      < br/>
      < br/>

       {/* <p>{JSON.stringify(user)}</p> */}
     
    </div>
  )
}
  



  


export default Profile


