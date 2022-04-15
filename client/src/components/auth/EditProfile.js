import React,{useContext,useState} from "react";



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
        console.log('trying to update with data:')
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
   } catch(err){
       alert('error occured updating user info')
   } finally {
     console.log(files)
     if(!files[0]){
       console.log('ffff')
       return 
     }
     handleImage()
   }
}


  return (
    <div className="App">
      <form onSubmit={handleSubmit} style={{width:'900px',margin:'auto', padding:'20px', border:'1px solid'}}>
        <h1>Edit Profile</h1>
        
        {user.avatar && <img  src={user.avatar} width={150} />} 
        
        {!user.avatar && <p>no image</p>}
        < br/>
        {user.name} <br/>
        {user.email}
        < br/>
      <p>{JSON.stringify(user)}</p>
        <h5>Full name:</h5><input value={name} onChange={(e)=> setName(e.target.value)} /> 
        <h5>Username: </h5><input value={username} onChange={(e)=> setUserName(e.target.value)} /> 
        {/* to do have *name already exists pop up if there is already a name */}
        <h6>*name already exists</h6> 
        <h5>Email:</h5><input value={email} onChange={(e)=> setEmail(e.target.value)} /> 
        <h5>Password:</h5><input value={password} onChange={(e)=> setPassword(e.target.value)} />  
        <h5>Phone number:</h5><input value={phone} onChange={(e)=> setPhone(e.target.value)} />   
        <br/>   
        <br/>   

        {/* <p>image:</p> */}
        {showUpload && <FilePond
            files={files}
            allowMultiple={false}
            onupdatefiles={handleUpdate}
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />}
        <button type = 'submit'>Save Changes</button>
        <br/>
        <button type = 'button' onClick={()=>setShowUpload(!showUpload)}>Click to update profile image</button>
        
      </form>
    </div>
  );
}

export default EditProfile
