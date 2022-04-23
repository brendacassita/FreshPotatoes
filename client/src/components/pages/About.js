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
import { Link } from 'react-router-dom';


export default function MediaCard() {
  return (
    <div className='App2'>

      <h1>About Us</h1>

      
      <div className="rowdata">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="team"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          The Freshest
        </Typography>
        <Typography variant="body2" color="text.secondary">
         All about our Fresh Potatoes team! Add more about us here....
        </Typography>
        freshpotatoes@gmail.com
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
    <br/>



    




    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
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
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>





    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
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
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>

    







   




    

    

    <Card sx={{ maxWidth: 345 }}>
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
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    


    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
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
      </CardContent>
    </Card>

    




    <Card sx={{ maxWidth: 345 }}>
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
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    </div>
</div>
  );
}


