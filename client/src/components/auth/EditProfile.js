import React,{useContext,useEffect,useState} from "react";
import '../CssFIles/editProfile.css'


// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import { AuthContext } from "../../providers/AuthProvider";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import bwPic from '../../Images/blackwhitePotatoe.png'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function EditProfile() {
  const [files, setFiles] = useState([]);
  const {  user, setUser } = useContext(AuthContext)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  const [password, setPassword] = useState(user.password)
  const [username, setUserName] = useState(user.username)


  const [showUpload, setShowUpload] = useState(false)

                                                                                                             

  const upload = () =>{
    if(showUpload){
      return ////// ??????  how to return whole form upload box
    }else{
      return 
    }
  }


  //   A file has been added or removed, receives a list of file items
  const handleUpdate = (files)=>{
      setFiles(files)      
  }

  const handleImage = async (e)=>{
      let data = new FormData()
      data.append('fileYO', files[0].file)
      data.append('name', name)
      console.log(files)
     // axios call
     try{
        
       let res = await axios.put('/api/update_image', data)
       setUser(res.data)
     } catch(err){
         alert('error occured updating image')
     }
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
   try{
      console.log('trying to update with data:')
     let res = await axios.put(`/api/users/${user.id}`, {name, email, phone, password, username})
    setUser(res.data)
   } catch(err){
       alert('error occured updating user info')
   } finally {
     console.log('Password:',password)
     console.log(files)
     if(!files[0]){
       
       return 
     }
     handleImage()
   }
}


  return (
    <div className="Appnow">
      <div className="borderfresh">
        
        <form className="editprofile form" onSubmit={handleSubmit} >
         
         <button className="profilechange" type='button' onClick={()=>setShowUpload(!showUpload)}> 

            {user.avatar && <img className="avataredit" src={user.avatar} width={150} />}</button>
         
          {!user.avatar && <button onClick={() => setShowUpload(!showUpload)} ><img src={bwPic} width='170px'></img></button>}
          
          {/* <p>image:</p> */}
          <div className="fileupload">
        {showUpload && <FilePond
            files={files}
            allowMultiple={false}
            onupdatefiles={handleUpdate}
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />}
            </div>
       
       <h2 className="usernameedit">{user.name}</h2> 
        <p className="useremailedit"> {user.email}</p>
        
        {/* <p>{JSON.stringify(user)}</p> */}
        
        {/* <h5>Username: </h5><input value={username} onChange={(e)=> setUserName(e.target.value)} />  */}
        {/* to do have *name already exists pop up if there is already a name */}
        {/* <h6>*name already exists</h6>  */}
           <div className="edit-all">
        
         
            <div className="editalign">
              <div className="fullname ">
            <h5 >Full Name</h5>
             </div>
            </div>
              <input className="editbox" value={name} onChange={(e) => setName(e.target.value)} /> 
            
            
            <div className="editalign">
              <div className="fullname">
                <h5 >Email</h5>
                </div>
              </div>
            <input className="editbox" value={email} onChange={(e) => setEmail(e.target.value)} /> 
            
            
            <div className="editalign">
              <div className="fullname">
                <h5 >Password</h5>
                </div>
            </div>
          <input className="editbox" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />  
          
            
            
            <div className="editalign">
              <div className="fullname">
                <h5 >Phone number</h5>
                </div>
              </div>
            <input className="editbox" value={phone} onChange={(e) => setPhone(e.target.value)} />  
       
          
        <br/>   
        <br/>   

       
        
        <button className="editprofilebtn" type='submit'>Save Changes</button>
        
        <br />
        </div>
        {/* <button  type = 'button' onClick={()=>setShowUpload(!showUpload)}>Click to update profile image</button> */}
        
        </form>
        </div>
     </div>
  );
}

export default EditProfile
