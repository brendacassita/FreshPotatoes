import {Snackbar, Button } from "@mui/material";
import Alert from '@mui/material/Alert'; 
import React, {useState} from 'react';




export const MuiSnackbar = () => {

const [open, setOpen] = useState(false)
 

const handleClose = (event, reason) => {
  if(reason === 'clickaway'){
    return
  }
  setOpen(false)
}
  return(
    <>

      <Button
        onClick={() => setOpen(true)}>Update Profile</Button>
      <Snackbar
        message="Profile updated successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
      />
    </>
  )
}
