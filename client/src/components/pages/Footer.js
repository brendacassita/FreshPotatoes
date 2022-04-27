import React from 'react'
import { ReactDOM } from 'react-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import BackToTopButton from '../shared/scroll/BackToTopButton';
// import {useTranslation} from 'react-i18next'
// import "../shared/localization/i18n"



const Footer = () => {
  return(
<footer  className='footer'>
<Box 
  // px={{ xs: 3, sm: 10}} 
  // py={{ xs: 5, sm: 10}}
  bgcolor="#1F1D2B" 
  color="white"
  >
  
  <Container maxWidth="lg">
    <Grid container spacing={5}>
      <Grid item xs={12} sm={4}>
        <Box borderBottom={1}>Help</Box>
        <Box>
            <Link href="/contact_us" color="inherit">
              Contact
            </Link> 
        </Box>
        <Box>
            <Link href="/about" color="inherit">
              About
            </Link> 
        </Box>
        <Box>
            <Link href="/privacy_policy" color="inherit">
              Privacy Policy
            </Link> 
        </Box>
  </Grid>
  <Grid item xs={12} sm={4}>
        <Box borderBottom={1}>Account</Box>
        {/* <Box>
            <Link href="/login" color="inherit">
              Login
            </Link> 
        </Box> */}
        {/* <Box>
            <Link href="/register" color="inherit">
              Register
            </Link> 
        </Box> */}
        <Box>
            <Link href="/profile" color="inherit">
              Profile
            </Link> 
        </Box>
        <Box>
            <Link href="/edit_profile" color="inherit">
              Edit Profile
            </Link> 
        </Box>
  </Grid>
  <Grid item xs={12} sm={4}>
        <Box borderBottom={1}>Pages</Box>
        <Box>
            <Link href="/" color="inherit">
              Home
            </Link> 
        </Box>
        <Box>
            <Link href="/popular_potatoes" color="inherit">
              PopularPotatoes
            </Link> 
        </Box>
        <Box>
            <Link href="/popular_fries" color="inherit">
              PopularFries
            </Link> 
        </Box>
       
        <Box>
            <Link href="/genres" color="inherit">
               Genres
            </Link> 
        </Box>
  </Grid>
  </Grid>
  <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs: 5, sm:0}}>
    Fresh Potatoes &reg; {new Date().getFullYear()}
    <BackToTopButton />
  </Box>
  </Container>
</Box>
    </footer>
  )
}

export default Footer; 
