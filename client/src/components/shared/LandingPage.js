import React from 'react'
import backpic from '../../Images/landingPage.jpg'
import logo from '../../Images/Theotherlogo-01.png'
import backpic2 from '../../Images/NeonBackground.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';
import {Link} from '@mui/material';



const LandingPage = () => {
  return (
    <div className='landing-all ' >
    <div className='landingPage' >
      <img className='backpic' src={backpic}  ></img>
      <img className='logolanding' src={logo}></img>
      </div>
      
      
      <p className='text-landing'      >Find out if you want to watch a movie</p>
  
      
      <div className='btn-all' >
        <Link className='landingbtn1' href='/login'> <FacebookIcon className='fbicon-landing' />Sign up Fresh Potatoes</Link>
        
      
      </div>
      </div>
  )
}

export default LandingPage

