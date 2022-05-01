import React,{useContext,useEffect,useState} from "react";
import '../CssFIles/editProfile.css'
import {useTranslation} from 'react-i18next'
import Button from "@mui/material/Button";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import { AuthContext } from "../../providers/AuthProvider";
import FlashMessage, { MuiSnackbar } from "../pages/FlashMessage";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
 import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert"; 


// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import axios from "axios";
import bwPic from '../../Images/blackwhitePotatoe.png'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
let timeout; 
function EditProfile() {
  const [files, setFiles] = useState([]);
  const {  user, setUser } = useContext(AuthContext)
  const [name, setName] = useState(user.name)
  
  const [email, setEmail] = useState(user.email)
  const [emailHelper, setEmailHelper] = useState(user.email)
  
  const [phone, setPhone] = useState(user.phone)
  const [phoneHelper, setPhoneHelper] = useState(user.phone)
  
  const [password, setPassword] = useState(user.password)
  const [username, setUserName] = useState(user.username)
  const {t} =  useTranslation(["profile", "common"])
  const [loading, setLoading] = useState(false);
  // const [open, setOpen] = React.useState(true);
  const [showUpload, setShowUpload] = useState(false)
  // const [success, setSuccess] = useState(false);
  // const [message, setMessage] = useState('');
                                                                                                             
  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper("Invalid Phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };
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
    setLoading(true);
    
    timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    try{
      let res = await axios.put(`/api/users/${user.id}`, {name, email, phone, password, username})
      setUser(res.data)
      // setMessage(res.data)
      // console.log(res.data)
      // setSuccess(true)
    } catch(err){
      alert('error occured updating user info')
    } finally {
      if(!files[0]){  
        return 
      }
      handleImage()
    }
    // setSuccess(false)
  }
  
  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);
  
  return (
    <div className="Appnow">
      <div className="borderfresh">
        <form className="editprofile form" onSubmit={handleSubmit}>
          <button
            className="profilechange"
            type="button"
            onClick={() => setShowUpload(!showUpload)}
          >
            {user.avatar && (
              <img className="avataredit" src={user.avatar} width={150} />
            )}
          </button>

          {!user.avatar && (
            <button onClick={() => setShowUpload(!showUpload)}>
              <img src={bwPic} width="170px"></img>
            </button>
          )}

          {/* <p>image:</p> */}
          <div className="fileupload">
            {showUpload && (
              <FilePond
                files={files}
                allowMultiple={false}
                onupdatefiles={handleUpdate}
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
            )}
          </div>

          <h2 className="usernameedit">{user.name}</h2>
          <p className="useremailedit"> {user.email}</p>

          {/* <h5>Username: </h5><input value={username} onChange={(e)=> setUserName(e.target.value)} />  */}
          {/* to do have *name already exists pop up if there is already a name */}
          {/* <h6>*name already exists</h6>  */}
          <div className="edit-all">
            <div className="editalign">
              <h5 className="fullname">{t("profile:name")}</h5>
            </div>

            <input
              className="editbox"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className="editalign">
              <h5 className="fullname">{t("profile:email")}</h5>
            </div>
            <input
              className="editbox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="editalign">
              <h5 className="fullname">{t("profile:password")}</h5>
            </div>
            <input
              className="editbox"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="editalign">
              <h5 className="fullname">{t("profile:phone")}</h5>
            </div>
            <input
              className="editbox"
              name="phone"
              error={phoneHelper.length !== 0}
              helperText={phoneHelper}
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <br />
            <br />
            {/* <MuiSnackbar /> */}
            <div
              // style={{
              //   display: "flex",
              //   paddingTop: "10px",
              //   marginLeft: "375px",
              // }}
            >

              <Button className="editprofilebtn:hover"
                // className="buttonlogin1 btnlogin"
                variant="contained"
                type="button"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Loading..." : "Update Profile"}
              </Button>
            </div>

            {/* {
          success ? <FlashMessage message={message}/> : ''
      } */}

            {/* BRENDA: here is the section I couldn't get the loading state from above to work */}
            {/* <button className="editprofilebtn" type="submit">
              {t("common:submit")}
            </button> */}
            <br />
          </div>
          {/* <button  type = 'button' onClick={()=>setShowUpload(!showUpload)}>Click to update profile image</button> */}
        </form>
      </div>
    </div>
  );
}

export default EditProfile
