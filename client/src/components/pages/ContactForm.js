import React, {useState} from 'react';
// import {Link} from 'react-router-dom'
// import {makeStyles, useTheme} from '@mui/styles'
// import Grid from '@mui/material/Grid'
// import { Typography } from '@mui/material'
// import Button from '@mui/material/Button'
// import TextField from '@mui/material/TextField'
// //import useMediaQuery from "@mui/material/useMediaQuery";


// import background from '../CssFIles/background.jpg'
// import phoneIcon from '../CssFIles/phone.svg'
// import emailIcon from '../CssFIles/email.svg'
// import airplane from '../CssFIles/send.svg'

 

const ContactForm = () => {

  return(
    <h1>contact</h1>
  )
}
export default ContactForm; 
// const useStyles = makeStyles(theme => ({
//   background: {
//     backgroundImage: `url(${background})`,
//     backgroundPosition: "center", 
//     backgroundSize: "cover", 
//     backgroundRepeat: "no-repeat",
//     height: "60em"
//   },
//   // learnButton: {
//   //   ...theme.typography.learnButton,
//   //   fontSize: "0.7rem",
//   //   height: 35,
//   //   padding: 5,
//   //   [theme.breakpoints.down("md")]: {
//   //     marginBottom: "2em"
//   //   }
//   // },
//   message: {
//     border: `2px solid ${theme.palette.common.blue}`,
//     marginTop: "5em",
//     borderRadius: 5
//   },
//   sendButton: {
//     ...theme.typography.estimate,
//     borderRadius: 50,
//     height: 45,
//     width: 245,
//     fontSize: "1rem",
//     backgroundColor: theme.palette.common.orange,
//     "&:hover": {
//       backgroundColor: theme.palette.secondary.light
//     }
//   }
  
// }));


// export default function ContactForm() {
//   const classes = useStyles()
//   const theme = useTheme()

//   // const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
//   // const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
//   // const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')  
  
//   const [phone, setPhone] = useState('')
  
//   const [message, setMessage] = useState('')

//   return(
    
//   )
// }

//  <Grid container direction="row">
//       <Grid 
//         item 
//         container 
//         direction="column" 
//         justify="center"  
//         lg={4} 
//         xl={3}
//         >
//         <Grid item>
//           <Typography 
//             variant="h2" 
//             style={{lineHeight: 1}}> 
//               Contact Us
//           </Typography>
//           <Typography 
//             variant="body1"
//             >
//               We'd love to hear from you!
//             </Typography>
//         </Grid>
//         <Grid item container style={{ marginTop: "2em" }}>
//           <Grid item>
//             <img 
//               src={phoneIcon} 
//               alt="phone" 
//               style={{marginRight: "0.5em"}}
//                /> 
//           </Grid>
//           <Grid item>
//           <Typography 
//             variant="body1" 
//             style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
//             >
//               <a
//              href= "tel:5555555555"
//               style={{ textDecoration: "none", color: "inherit" }}
//           >
//           (555) 555-5555
//           </a>
//           </Typography>
//         </Grid>
//       </Grid>
      
//       <Grid item container style={{ marginBottom: "2em" }}>
//           <Grid item>
//             <img 
//               src={emailIcon} 
//               alt="envelope" 
//               style={{marginRight: "0.5em", verticalAlign: "bottom"}} 
//               /> 
//           </Grid>
//           <Grid item>
//           <Typography 
//             variant="body1" 
//             style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
//             >
//               <a
//                 href="mailto:freshpotatoes@gmail.com"
//                 style={{ textDecoration: "none", color: "inherit" }}
//                   >
//                     freshpotatoes@gmail.com
//                   </a>
//           </Typography>
//         </Grid>
//       </Grid>
//       <Grid item container direction="column" style={{ maxWidth: "20em" }}>
//         <Grid item style={{ marginBottom: "0.5em" }}>                                 
//           <TextField 
//             InputProps={{disabledUnderline: true }}
//             label="Name" 
//             id="name" 
//             fullWidth 
//             value={name}
//             onChange={(event) => setName(event.target.value)} 
//           />
//         </Grid>
//         <Grid item style={{ marginBottom: "0.5em" }}>
//           <TextField 
//             label="Email" 
//             id="email" value={email} 
//             onChange={(event) =>setEmail(event.target.value)}
//           />
//         </Grid>
//         <Grid item style={{ marginBottom: "0.5em" }}>
//           <TextField 
//             label="Phone" 
//             id="phone" 
//             value={phone} 
//             onChange={(event) => setPhone(event.target.value)} 
//           />
//         </Grid>
//       </Grid>
//       <Grid item style={{maxWidth: "20em"}}>
//         <TextField 
//           value={message} 
//           multiline 
//           rows={10} 
//           id="message" 
//           onChange={(event) =>setMessage(event.target.value)}  
//         />
//       </Grid>
//       <Grid item >
//           <Button variant="contained" className={classes.sendButton}>Send Message
//           <img 
//             src={airplane} 
//             alt="paper airplane"
//             style={{marginLeft: "1em" }} 
//           />
//           </Button>
//       </Grid>
//    </Grid>
//       <Grid item container className={classes.background} lg={9}></Grid>
//     </Grid>