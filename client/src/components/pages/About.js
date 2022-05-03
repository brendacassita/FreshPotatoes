import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import GitHubIcon from '@mui/icons-material/GitHub';
import github from "../CssFIles/images/github.png";
import linkedin from "../CssFIles/images/linkedin.webp";
import gmail from "../CssFIles/images/gmail.png";
import fb from "../CssFIles/images/fb.png";
import jess from "../../Images/Jess.jpg";
import fresh from "../../Images/Potatoe.png";
import sharayah from "../../Images/sharayah.png";
import trina from "../../Images/Trina.jpg";
import brenda from "../../Images/SELFIE.JPG";
import Kat from "../../Images/Katherine.jpg";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import "../CssFIles/About.css";
import LinkedIn from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import freshPF from "../../Images/FreshPotatoesFrylogo-01.png";
import TheatersIcon from "@mui/icons-material/Theaters";
import camera from "../CssFIles/images/camera.png";
import clapper from "../CssFIles/images/clapper.png";
import emailIcon from "../CssFIles/email.svg";
// import clapper from "../../Images/clapper.png";




export default function MediaCard() {
  return (
    <div className="App1">
      {/* <img component="img" height="250" src={freshPF} alt="team" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          The Freshest
        </Typography>
        <Typography variant="body2" color="text.secondary">
          All about our Fresh Potatoes team! Add more about us here....
        </Typography>
        <a href="mailto:freshpotatoes@gmail.com">
          freshpotatoes@gmail.com <br />
          {gmail && (
            <AlternateEmailIcon
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
              }}
              src={AlternateEmailIcon}
              width={300}
            />
          )}
        </a>
        {fb && (
          <FacebookIcon
            style={{
              objectFit: "cover",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
            }}
            src={fb}
            width={300}
          />
        )}
      </CardContent>
      <CardActions></CardActions> */}

      {/* *****TESTING TEAM CARD - IDK HOW TO CHANGE THE BG****** */}
      
     
        <h1>
          {" "}
           <img src={clapper} width="3.5%" /> 
          The Fresh Potatoes Team
           <img src={camera} width="3.5%" /> 
          {/* <TheatersIcon sx={{ fontSize: 30 }} /> */}
         
          {/* <img src={clapper}width="3.5%"/> */}
        </h1>
      

      {/* ------------------      team  -----------------*/}
      <div className="the-team">
        <div class="container">
          <div className="card-wrapper">
            <h1 className="name-team">The Freshest</h1>
            <div className="card1 profile-two">
              <div className="card-image profile-img--two">
                <img src={freshPF} width="100%" alt="profile-two" />
              </div>

              <ul className="social-icons">
                <li>
                  <a href="https://github.com/brendacassita/FreshPotatoes">
                    <GitHubIcon
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>

                <li>
                  <a href="mailto:freshpotatoes@gmail.com">
                    <AlternateEmailIcon
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>
              </ul>

              <div className="details jane">
                <h2>
                  {" "}
                  <Link to="/contact_us">
                    <img src={emailIcon} /> Contact Fresh Potatoes
                  </Link>
                  <br />
                  <span className="job-title"> </span>
                  <br />
                </h2>
              </div>
            </div>
          </div>
          {/* <!-- END box wrapper --> */}
        </div>
        {/* <!-- END container --> */}

        {/* ------------------      JESSICA  -----------------*/}
        <div class="container">
          <div className="card-wrapper">
            <h1 className="name-team">Jess</h1>
            <div className="card1 profile-two">
              <div className="card-image profile-img--two">
                <img src={jess} width="100%" alt="profile-two" />
              </div>

              <ul className="social-icons">
                <li>
                  <a href="https://github.com/jess215">
                    <GitHubIcon
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/jessica215/">
                    <LinkedIn
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>

                <li>
                  <a href="mailto:jessica.stevens2115@gmail.com">
                    <AlternateEmailIcon
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <InstagramIcon
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>
              </ul>

              <div className="details jane">
                <h2>
                  Jessica Nguyen
                  <br />
                  <span className="job-title">Full-Stack Developer</span>
                  <br />
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
            <h1 className="name-team">Trina</h1>
            <div className="card1 profile-two">
              <div className="card-image profile-img--two">
                <img src={trina} width="100%" alt="profile-two" />
              </div>

              <ul className="social-icons">
                <li>
                  <a href="https://github.com/TrinaNix4">
                    <GitHubIcon
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/search/results/all/?keywords=trina%20nixon&origin=RICH_QUERY_SUGGESTION&position=3&searchId=3763a397-4719-48e3-8780-546a58d67987&sid=zq1">
                    <LinkedIn
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>

                <li>
                  <a href="mailto:trinanixon7@gmail.com">
                    <AlternateEmailIcon
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <InstagramIcon
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>
              </ul>

              <div className="details jane">
                <h2>
                  Trina Nixon
                  <br />
                  <span className="job-title">Full-Stack Developer</span>
                  <br />
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
            <h1 className="name-team">Sharayah</h1>
            <div className="card1 profile-two">
              <div className="card-image profile-img--two">
                <img src={sharayah} width="100%" alt="profile-two" />
              </div>

              <ul className="social-icons">
                <li>
                  <a href="https://github.com/SharayahDesigns">
                    <GitHubIcon
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/sharayahhefner/">
                    <LinkedIn
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>

                <li>
                  <a href="">
                    <AlternateEmailIcon
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/colorush_studios/">
                    <InstagramIcon
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>
              </ul>

              <div className="details jane">
                <h2>
                  Sharayah Hefner
                  <br />
                  <span className="job-title">
                    Full-Stack Developer
                    <br /> UX/UI Designer
                  </span>
                  <br />
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
            <h1 className="name-team">Brenda</h1>
            <div className="card1 profile-two">
              <div className="card-image profile-img--two">
                <img src={brenda} width="100%" alt="profile-two" />
              </div>

              <ul className="social-icons">
                <li>
                  <a href="https://github.com/brendacassita">
                    <GitHubIcon
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/brendacassita/
"
                  >
                    <LinkedIn
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>

                <li>
                  <a href="mailto:brendacassita@gmail.com">
                    <AlternateEmailIcon
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/bebecassita/">
                    <InstagramIcon
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>
              </ul>

              <div className="details jane">
                <h2>
                  Brenda Cassita
                  <br />
                  <span className="job-title">Full-Stack Developer</span>
                  <br />
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
            <h1 className="name-team">Katherine</h1>
            <div className="card1 profile-two">
              <div className="card-image profile-img--two">
                <img src={Kat} width="102%" height="100%" alt="profile-two" />
              </div>

              <ul className="social-icons">
                <li>
                  <a href="https://github.com/katbrenda">
                    <GitHubIcon
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/katherine-gaylord-4368b837/">
                    <LinkedIn
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>

                <li>
                  <a href="">
                    <AlternateEmailIcon
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <InstagramIcon
                      sx={{ fontSize: 40 }}
                      className="fab Linked-in"
                      width="200px"
                    />
                  </a>
                </li>
              </ul>

              <div className="details jane">
                <h2>
                  Katherine Gaylord
                  <br />
                  <span className="job-title">Full-Stack Developer</span>
                  <br />
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
