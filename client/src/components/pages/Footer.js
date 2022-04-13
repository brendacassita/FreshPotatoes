import React from 'react'
import { ReactDOM } from 'react-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';


const Footer = () => {
  return(
<footer>
<Box 
  px={{ xs: 3, sm: 10}} 
  py={{ xs: 5, sm: 10}}
  bgcolor="text.secondary" 
  color="white"
  >
  
  <Container maxWidth="lg">
    <Grid container spacing={5}>
      <Grid item xs={12} sm={4}>
        <Box borderBottom={1}>Help</Box>
        <Box>
            <Link href="/" color="inherit">
              Contact
            </Link> 
        </Box>
        <Box>
            <Link href="/" color="inherit">
              Support
            </Link> 
        </Box>
        <Box>
            <Link href="/" color="inherit">
              Privacy Policy
            </Link> 
        </Box>
  </Grid>
  <Grid item xs={12} sm={4}>
        <Box borderBottom={1}>Account</Box>
        <Box>
            <Link href="/login" color="inherit">
              Login
            </Link> 
        </Box>
        <Box>
            <Link href="/register" color="inherit">
              Register
            </Link> 
        </Box>
  </Grid>
  <Grid item xs={12} sm={4}>
        <Box borderBottom={1}>Messages</Box>
        <Box>
            <Link href="/" color="inherit">
              *Insert Link*
            </Link> 
        </Box>
        <Box>
            <Link href="/" color="inherit">
              *Insert Link*
            </Link> 
        </Box>
        <Box>
            <Link href="/" color="inherit">
               *Insert Link*
            </Link> 
        </Box>
  </Grid>
  </Grid>
  <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs: 5, sm:0}}>
    Fresh Potatoes &reg; {new Date().getFullYear()}
  </Box>
  </Container>
</Box>
    </footer>
  )
}

export default Footer; 