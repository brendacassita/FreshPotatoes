import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import GitHubIcon from '@mui/icons-material/GitHub';
import github from '../CssFIles/images/github.png'
import linkedin from '../CssFIles/images/linkedin.webp'
import gmail from '../CssFIles/images/gmail.png'
import fb from '../CssFIles/images/fb.png'
import jess from '../../Images/Jess.jpg'
import fresh from '../../Images/Potatoe.png'
import sharayah from '../../Images/sharayah.jpg'
import trina from '../../Images/Trina.jpg'
import brenda from '../../Images/SELFIE.JPG'
import {Link} from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import '../CssFIles/About.css'
import LinkedIn from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import freshPF from '../../Images/FreshPotatoesFrylogo-01.png'
export default function MediaCard()





{
  return (
    <div className='App1'>

     
      {/* <div className="rowdata">
        
        <div className='Freshest' >
        <Card sx={{maxWidth: 345}} className='card-content'>
      <CardMedia
        component="img"
        height="250"
            image={fresh}
        alt="team"
          />
          
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          The Freshest
        </Typography>
        <Typography variant="body2" color="text.secondary">
         All about our Fresh Potatoes team! Add more about us here....
        </Typography>
        <a href="mailto:freshpotatoes@gmail.com">freshpotatoes@gmail.com <br/>
        {gmail && (
              <img style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                 }}src={gmail} width={300}/>)}</a>
                 {fb && (
              <img style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                 }}src={fb} width={300}/>)}

          
      </CardContent>
      <CardActions>
      </CardActions>
          </Card>
          </div>
    <br/>



    


     <div className='team'>

        <Card sx={{maxWidth: 345}} className='card-content'>
          
      <CardMedia
        component="img"
        height="250"
            image={jess}
        alt="Jess"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Jess
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <a target="_blank" href="https://github.com/jess215">
        {github && (
              <img style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                 }}src={github} width={300}/>)}</a>

        {linkedin && (
              <img style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "50px",
                  height: "40px",
                 }}src={linkedin} width={300}/>)}
        {gmail && (
              <img style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                 }}src={gmail} width={300}/>)}
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>





    <Card sx={{ maxWidth: 345 }} className='card-content'>
      <CardMedia
        component="img"
        height="250"
            image={brenda}
        alt="Brenda"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Brenda
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <a target="_blank" href="https://github.com/brendacassita">
        {github && (
              <img style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                 }}src={github} width={300}/>)}</a>

{linkedin && (
              <img style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "50px",
                  height: "40px",
                 }}src={linkedin} width={300}/>)}
 <a href="mailto:brendacassita@gmail.com">
{gmail && (
              <img style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                 }}src={gmail} width={300}/>)}</a>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>

    

    

    <Card sx={{ maxWidth: 345 }}className='card-content' >
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="Trina"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Trina
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <a target="_blank" href="https://github.com/TrinaNix4">
        {github && (
              <img style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                 }}src={github} width={300}/>)}</a>

          {linkedin && (
              <img style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "50px",
                  height: "40px",
                 }}src={linkedin} width={300}/>)}

          {gmail && (
              <img style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                 }}src={gmail} width={300}/>)}
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    


    <Card sx={{ maxWidth: 345 }} className='card-content'>
      <CardMedia
        component="img"
        height="250"
            image={sharayah}
        alt="Sharayah"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Sharayah
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>

        <a target="_blank" href="https://github.com/SharayahDesigns">
        {github && (
              <img style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                 }}src={github} width={300}/>)}</a>

          {linkedin && (
              <img style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "50px",
                  height: "40px",
                 }}src={linkedin} width={300}/>)}

{gmail && (
              <img style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                 }}src={gmail} width={300}/>)}
      </CardContent>
    </Card>

    




    <Card sx={{ maxWidth: 345 }} className='card-content'>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="Katherine"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Katherine
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <a target="_blank" href="https://github.com/katbrenda">
        {github && (
              <img style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                 }}src={github} width={300}/>)}</a>

{linkedin && (
              <img style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "50px",
                  height: "40px",
                 }}src={linkedin} width={300}/>)}

{gmail && (
              <img style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                 }}src={gmail} width={300}/>)}
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
          </Card>

          
        </div>
        
      </div> */}
      
      
      {/* <div className='card-1 middle'>
        <div className='front-Card'>
        <img className='img-face' src={jess} alt=""/>
        </div>
        <div className='back-Card'>
          <div className='back-content middle'>
            <span>youtube chanel</span>
            <div className='sm'>
            <a href='#'>dfsf</a>
            </div>
          </div>
        </div>
      
      </div> */}
      
      
      
      
        
      <img
        component="img"
        height="250"
            src={freshPF}
        alt="team"
          />
          
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          The Freshest
        </Typography>
        <Typography variant="body2" color="text.secondary">
         All about our Fresh Potatoes team! Add more about us here....
        </Typography>
        <a href="mailto:freshpotatoes@gmail.com">freshpotatoes@gmail.com <br/>
        {gmail && (
              < AlternateEmailIcon style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
            }} src={AlternateEmailIcon} width={300} />)}
        
        </a>
                 {fb && (
              <FacebookIcon style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                 }}src={fb} width={300}/>)}

          
      </CardContent>
      <CardActions>
      </CardActions>
          
         
       <h1>The Fresh Potatoes Team!</h1>
      
      
      {/* ------------------      JESSICA  -----------------*/}
      <div className='the-team'>
   
      <div class="container">
<div className="card-wrapper">
                <h1 className='name-team'>Jess</h1>
      <div className="card1 profile-two">
        <div className="card-image profile-img--two">
                <img src={jess} width='100%' alt="profile-two" />
        </div>

            <ul className="social-icons">
              
          <li>
            <a href="https://github.com/jess215">
              <GitHubIcon sx={{ fontSize: 40 }}className="fab Linked-in" width='200px'/>
            </a>
              </li>
              
              <li>    
                <a href="https://www.linkedin.com/in/jessica215/">
                  <LinkedIn
                    sx={{ fontSize: 40 }}className="fab Linked-in" width='200px' />
                </a>
              </li>
              
          <li>
            <a href="">
            <AlternateEmailIcon sx={{ fontSize: 40 }}className="fab Linked-in" width='200px'/>
            </a>
          </li>
          <li>
            <a href="">
            <InstagramIcon sx={{ fontSize: 40 }}className="fab Linked-in" width='200px'/>
            </a>
          </li>
        </ul>

        <div className="details jane">
            <h2>Jessica Nguyen
             <br/>
                <span
                  className="job-title">Full-Stack Developer</span>
                <br/>
                
            </h2>
        </div>
    </div>
        </div>
        {/* <!-- END box wrapper --> */}
     
      </div>
      {/* <!-- END container --> */}
      
      
      
      
      {/* -------------------------  Trina   -----------------*/}
     
       <div class="container">
          <div className="card-wrapper">
             <h1 className='name-team'>Trina</h1>
      <div className="card1 profile-two">
        <div className="card-image profile-img--two">
      <img src={trina} width='100%' alt="profile-two"/>
        </div>

            <ul className="social-icons">
              
          <li>
            <a href="https://github.com/TrinaNix4">
              <GitHubIcon sx={{ fontSize: 40 }}className="fab Linked-in" width='200px'/>
            </a>
              </li>
              
              <li>    
                <a href="https://www.linkedin.com/search/results/all/?keywords=trina%20nixon&origin=RICH_QUERY_SUGGESTION&position=3&searchId=3763a397-4719-48e3-8780-546a58d67987&sid=zq1">
                  <LinkedIn
                    sx={{ fontSize: 40 }}className="fab Linked-in" width='200px' />
                </a>
              </li>
              
          <li>
            <a href="">
            <AlternateEmailIcon sx={{ fontSize: 40 }}className="fab Linked-in" width='200px'/>
            </a>
          </li>
          <li>
            <a href="">
            <InstagramIcon sx={{ fontSize: 40 }}className="fab Linked-in" width='200px'/>
            </a>
          </li>
        </ul>

        <div className="details jane">
            <h2>Trina Nixon
             <br/>
                <span
                  className="job-title">Full-Stack Developer</span>
                <br/>
                
            </h2>
        </div>
    </div>
        </div>
        {/* <!-- END box wrapper --> */}
     
      </div>
      {/* <!-- END container --> */}
      
      
      {/* ----------------------      Sharayah   -------------*/}
      
      
      
      <div class="container">
          <div className="card-wrapper">
            <h1 className='name-team'>Sharayah</h1>
      <div className="card1 profile-two">
        <div className="card-image profile-img--two">
      <img src={sharayah} width='100%' alt="profile-two"/>
        </div>

            <ul className="social-icons">
              
          <li>
            <a href="https://github.com/SharayahDesigns">
              <GitHubIcon sx={{ fontSize: 40 }}className="fab Linked-in" width='200px'/>
            </a>
              </li>
              
              <li>    
                <a href="https://www.linkedin.com/in/sharayahhefner/">
                  <LinkedIn
                    sx={{ fontSize: 40 }}className="fab Linked-in" width='200px' />
                </a>
              </li>
              
          <li>
            <a href="">
            <AlternateEmailIcon sx={{ fontSize: 40 }}className="fab Linked-in" width='200px'/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/colorush_studios/">
            <InstagramIcon sx={{ fontSize: 40 }}className="fab Linked-in" width='200px'/>
            </a>
          </li>
        </ul>

        <div className="details jane">
            <h2>Sharayah Hefner 
             <br/>
                <span
                  className="job-title">Full-Stack Developer
                   <br/>    UX/UI Designer</span>
                <br/>
                
            </h2>
        </div>
    </div>
        </div>
        {/* <!-- END box wrapper --> */}
     
      </div>
      {/* <!-- END container --> */}
      
      {/*------------------ BRENDA------------------ */}
      
        <div class="container">
          <div className="card-wrapper">
            <h1 className='name-team'>Brenda</h1>
      <div className="card1 profile-two">
        <div className="card-image profile-img--two">
                <img src={brenda} width='100%' alt="profile-two"/>
        </div>

            <ul className="social-icons">
              
          <li>
            <a href="https://github.com/brendacassita">
              <GitHubIcon sx={{ fontSize: 40 }}className="fab Linked-in" width='200px'/>
            </a>
              </li>
              
              <li>    
                <a href="https://www.linkedin.com/in/brenda-cassita-7387191bb
">
                  <LinkedIn
                    sx={{ fontSize: 40 }}className="fab Linked-in" width='200px' />
                </a>
              </li>
              
          <li>
            <a href="">
            <AlternateEmailIcon sx={{ fontSize: 40 }}className="fab Linked-in" width='200px'/>
            </a>
          </li>
          <li>
            <a href="">
            <InstagramIcon sx={{ fontSize: 40 }}className="fab Linked-in" width='200px'/>
            </a>
          </li>
        </ul>

        <div className="details jane">
            <h2>Brenda Cassita
             <br/>
                <span
                  className="job-title">Full-Stack Developer
                   </span>
                <br/>
                
            </h2>
        </div>
    </div>
        </div>
        {/* <!-- END box wrapper --> */}
     
      </div>
        {/* <!-- END container --> */}
        
        
        {/*--------- Katherine  ----------------- */}
      
      <div class="container">
          <div className="card-wrapper">
            <h1 className='name-team'>Katherine</h1>
      <div className="card1 profile-two">
        <div className="card-image profile-img--two">
      <img src='' width='100%' alt="profile-two"/>
        </div>

            <ul className="social-icons">
              
          <li>
            <a href="https://github.com/SharayahDesigns">
              <GitHubIcon sx={{ fontSize: 40 }}className="fab Linked-in" width='200px'/>
            </a>
              </li>
              
              <li>    
                <a href="https://www.linkedin.com/in/sharayahhefner/">
                  <LinkedIn
                    sx={{ fontSize: 40 }}className="fab Linked-in" width='200px' />
                </a>
              </li>
              
          <li>
            <a href="">
            <AlternateEmailIcon sx={{ fontSize: 40 }}className="fab Linked-in" width='200px'/>
            </a>
          </li>
          <li>
            <a href="">
            <InstagramIcon sx={{ fontSize: 40 }}className="fab Linked-in" width='200px'/>
            </a>
          </li>
        </ul>

        <div className="details jane">
            <h2>Katherine Gaylord
             <br/>
                <span
                  className="job-title">Full-Stack Developer
                   </span>
                <br/>
                
            </h2>
        </div>
    </div>
        </div>
        {/* <!-- END box wrapper --> */}
     
      </div>
      {/* <!-- END container --> */}
      
      </div>
        </div>
        
  
      
      
      
      
      
      
      

  );
}


