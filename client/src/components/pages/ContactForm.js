import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {makeStyles, useTheme} from '@mui/styles'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
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
  }
}))


export default function ContactForm() {
  const classes = useStyles()
  const theme = useTheme()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')  
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  return(
    <Grid container direction="row">
      <Grid item container direction="column" justify="center" lg={3}>
        <Grid item>
          <Typography variant="h2" style={{lineHeight: 1}}>Contact Us</Typography>
          <Typography 
            variant="body1"
            >
              We'd love to hear from you!
            </Typography>

        </Grid>
        <Grid item container>
          <Grid item>
            <img 
              src={phoneIcon} 
              alt="phone" 
              style={{marginRight: "0.5em"}}
               /> 
          </Grid>
          <Grid item>
          <Typography 
            variant="body1" 
            style={{fontSize: "1rem"}}
            >
              (555)555-5555
          </Typography>
        </Grid>
      </Grid>
      
      <Grid item container>
          <Grid item>
            <img 
              src={emailIcon} 
              alt="envelope" 
              style={{marginRight: "0.5em", verticalAlign: "bottom"}} 
              /> 
          </Grid>
          <Grid item>
          <Typography 
            variant="body1" 
            style={{fontSize: "1rem" }}
            >
            FreshPotatoes@gmail.com
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item>                                 
          <TextField 
            label="Name" 
            id="name" value={name} 
            onChange={(event) => setName(event.target.value)} 
          />
        </Grid>
        <Grid item>
          <TextField 
            label="Email" 
            id="email" value={email} 
            onChange={(event) =>setEmail(event.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField 
            label="Phone" 
            id="phone" 
            value={phone} 
            onChange={(event) => setPhone(event.target.value)} 
          />
        </Grid>
      </Grid>
      <Grid item>
        <TextField 
          value={message} 
          multiline 
          rows={10} 
          id="message" 
          onChange={(event) =>setMessage(event.target.value)}  
        />
      </Grid>
      <Grid item>
          <Button variant="contained">Send Message
          <img src={airplane} alt="paper airplane" /></Button>
      </Grid>
   </Grid>
      <Grid item container className={classes.background} lg={9}></Grid>
    </Grid>
  )
}

 