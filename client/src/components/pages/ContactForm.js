

import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {makeStyles, useTheme} from '@mui/styles'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
//import useMediaQuery from "@mui/material/useMediaQuery";


import background from '../CssFIles/background.jpg'
import phoneIcon from '../CssFIles/phone.svg'
import emailIcon from '../CssFIles/email.svg'
import airplane from '../CssFIles/send.svg'

 

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center", 
    backgroundSize: "cover", 
    backgroundRepeat: "no-repeat",
    height: "60em"
  },
  
  message: {
    border: '2px solid',
    marginTop: "5em",
    borderRadius: 5
  },
  sendButton: {
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: 'orange',
    "&:hover": {
      
    }
  }
  
}));

const ContactForm = (props) => {
  const classes = useStyles()
  const theme = useTheme()
 
  
  const [name, setName] = useState('');
  
  const [email, setEmail] = useState('');  
  const [emailHelper, setEmailHelper] = useState('');
  
  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');
  
  const [message, setMessage] = useState('')
  const onChange = event => {
    let valid;

    switch(event.target.id){
      case 'email':
        setEmail(event.target.value)
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        .test(event.target.value)
        
        if (!valid) {
          setEmailHelper("Invalid email")
        }else {
          setEmailHelper("")
        }
        break;
        case 'phone':
          setPhone(event.target.value)
          valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
          .test(event.target.value)

          if(!valid) {
            setPhoneHelper("Invalid Phone")
          }else {
            setPhoneHelper("")
          }
            break;
            default:
              break; 
        }
      }
   


  return(
    
      
    <form action="https://submit-form.com/TIGURCmb">
 <Grid container direction="row" className='App1'>
    <div className='contactpic'>
          <Grid 
        item 
        container 
        direction="column" 
        justify="center"
        alignItems="center"  
        lg={4} 
        xl={3}
        >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography 
            
            variant="h2" 
            style={{lineHeight: 1, marginTop: "1em"}}> 
              Contact Us
          </Typography>
          <Typography style={{marginTop: "1em"}}
            variant="body1"
        
            >
              We'd love to hear from you!
            </Typography>
        </Grid>
        <Grid item container style={{ marginTop: "2em" }}>
                  <Grid item>
                    
            <img id='phone-icon'
              src={phoneIcon} 
                      alt="phone" 
                  
                      style={{marginRight: "0.5em"}}
                      /> 
                      
          </Grid>
          <Grid item>
          <a href= "tel:5555555555"> (555) 555-5555</a>
          <Typography 
    
            variant="body1" 
            style={{ textDecoration: "none", color: "white" }}
            >
         
          </Typography>
        </Grid>
      </Grid>
      
      <Grid item container style={{ marginBottom: "2em" }}>
          <Grid item>
                    <img 
                      className='email-icon'
              src={emailIcon} 
              alt="envelope" 
              style={{marginRight: "0.5em", verticalAlign: "bottom"}} 
              /> 
          </Grid>
          <Grid item>
          <a href="mailto:freshpotatoes@gmail.com">freshpotatoes@gmail.com</a>
          <Typography 
            variant="body1" 
            style={{ color: 'black', fontSize: "1rem" }}
            >
          </Typography>
        </Grid>
      </Grid>
      <Grid item container direction="column" style={{ maxWidth: "20em" }}>
        <Grid item style={{ marginBottom: "0.5em" }}>                                 
                    <TextField 
                     
          type="text"
            name="name"
            label="Name" 
            id="name" 
            fullWidth 
            value={name}
            onChange={(event) => setName(event.target.value)} 
          />
        </Grid>
        <Grid item style={{ marginBottom: "0.5em" }}>
          <TextField
          name="email"
            label="Email" 
            fullWidth
            error={emailHelper.length !== 0 }
            helperText={emailHelper}
            id="email" value={email} 
            onChange={onChange}
          />
        </Grid>
        <Grid item style={{ marginBottom: "0.5em" }}>
          <TextField 
            label="Phone" 
            name="phone"
            fullWidth
            error={phoneHelper.length !== 0 }
            helperText={phoneHelper}
            id="phone" 
            value={phone} 
            onChange={onChange} 
          />
        </Grid>
      </Grid>
      <Grid item style={{maxWidth: "20em"}}>
        <TextField 
          value={message} 
          multiline 
          fullWidth
          rows={10} 
          id="message" 
          name="message"
          onChange={(event) =>setMessage(event.target.value)}  
        />
      </Grid>
      <Grid item container justify="center" style={{marginTop: "2em" }} >
          <Button type = "submit"
            disabled={
              name.length === 0 || 
              message.length === 0 ||
              phoneHelper.length !== 0 ||
              emailHelper.length !== 0
           }
            variant="contained" 
            style={{ marginBottom: "1em" }} 
            className={classes.sendButton}
            >
              Send Message
          <img 
            src={airplane} 
            alt="paper airplane"
            style={{marginLeft: "0.5em" }} 
          />
          </Button>
      </Grid>
          </Grid>
        </Grid>
      </Grid>
     
        <Grid item container className={classes.background} lg={9}></Grid>
       </div>
    </Grid>
    </form>
  )
}

export default ContactForm; 
