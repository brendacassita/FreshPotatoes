import Card from "@mui/material/Card";
import potatoe from "../../Images/Potatoe.png";
import fry from "../../Images/fry.png";
import logo from "../../Images/Theotherlogo-01.png";
import { Link } from "react-router-dom";






const Freshmeter = () =>{
  return(
    <div className="App1">
      <h1>About Fresh Potatoes &reg;</h1>
      <p>Fresh Potatoes is for movie lovers and a resource for reccommendations and reviews.<br/> We provide fans a place to share
        their opinions not only once, but twice! <br/>We give you a chance to give a rating and review prior to seeing a movie as 
        well as after seeing the movie.<br/>
        If you’re a movie fan looking for a recommendation, or to share an opinion, you’ve come to the right place. </p>
     
      <h2>Fresh Potatoes and the Freshmeter. </h2>
          <img src={fry} width="50px" />
          <img src={potatoe} width="50px" /> 
      <h2>What is the Freshmeter?</h2>
      <p>The Freshmeter score - based on the opinions of other movie lovers and critics just like you. <br/> The score represents 
        the percentage of reviews by pre and post views.<br/> The score is calculated for the movie and shows up on our popular pages 
         
        after it receives at least five reviews. <br/>Our  <img src={potatoe} width="15px" /> (potato) icon represents pre ratings and reviews, 
         
              
        your opinion prior to seeing the movie
        <Link to={'/popular_potatoes'}><b style={{ color: "red" }}>(Popular Potatoes)</b></Link>.
        <br/>Our <img src={fry} width="15px" /> (fry)  icon represents post viewings. 
        <Link to={'/popular_fries'}><b style={{ color: "red" }}>(Popular Fries)</b></Link>.
        <br/> So sit back, grab some popcorn and tell us 
        all about your favorite or not so favorite movies. 
      </p>
    </div>
    
  )
}

export default Freshmeter