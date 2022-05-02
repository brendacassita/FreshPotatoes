import Card from "@mui/material/Card";
import potatoe from "../../Images/Potatoe.png";
import fry from "../../Images/fry.png";
import logo from "../../Images/Theotherlogo-01.png";
import { Link } from "react-router-dom";

const Freshmeter = () => {
  return (
    <div className="App1">
      <h1>About Fresh Potatoes &reg;</h1>
      <p>
        Fresh Potatoes is for movie lovers and a resource for reccommendations
        and reviews.
        <br />
        We provide fans a place to share their opinions not only once, but
        twice! <br />
        We give you a chance to give a rating and review prior to seeing a movie
        as well as after seeing the movie.
        <br />
        If you’re a movie fan looking for a recommendation, or to share an
        opinion, you’ve come to the right place.{" "}
      </p>

      <h2>Fresh Potatoes and the Freshmeter. </h2>
      <img src={fry} width="50px" />
      <img src={potatoe} width="50px" />
      <h2>What is the Freshmeter?</h2>
      <p>
        The Freshmeter score - based on the opinions of other movie lovers and
        critics just like you. <br />
        The score represents the percentage of reviews by pre and post views.
        <br />
        The score is calculated for the movie and shows up on our popular pages
        after it receives at least five reviews. <br />
        <h4>
          We call the ratings before users see the movie, Potatoes.
          <img src={potatoe} width="20px" />
        </h4>
        <br />
        At Fresh Potatoes we WANT you to rate movies before you see them. <br />
        Let us know all your expectations about a movie based on trailers and
        how much you already love the fandom.
        <br />
        We have an entire page devoted to the best of all Potatoes.
        <br />
        These are all the hottest films that were anticipated by our users.
        <Link to={"/popular_potatoes"}>
          <b style={{ color: "#ec4e20" }}>(Popular Potatoes)</b>
        </Link>
        .<br />
        You can visit the page of each movie by clicking on the poster.
        <br />
        This will bring you to all the details you’ll ever need to know for that
        specific movie.
        <br />
        <br />
        After watching the movie, come back again to rate it based on how you
        actually liked it.
        <br />
        <h4>
          {" "}
          In contrast to our Potatoes, we have our Fries
          <img src={fry} width="20px" />, ratings after users have seen the
          movie.
        </h4>
        <br />
        We have another page dedicated to the best Fries on our site. <br />
        These are the films that have maintained their status after being
        watched.
        <br />
        <Link to={"/popular_fries"}>
          <b style={{ color: "#ec4e20" }}>(Popular Fries)</b>
        </Link>
        . When you visit a movie’s page you are greeted by the poster, <br />
        the trailer and a button with the option to share the page. <br />
        Below the title of the movie, you can see the genres, release date,
        runtime, <br />
        and most importantly, how a movie rated before and after being seen.{" "}
        <br />
        It’s a great gauge to see how the movie lived up to its expectations.{" "}
        <br />
        Under the Overview, you can read the plot summary. Under Movie Info you
        will find the Director and Cast. <br />
        <br />
        Now the time has come. It's the moment you’ve been waiting for - the
        chance to give your opinion.
        <br /> So sit back, grab some popcorn (or fries) and tell us all about
        your favorite, or not-so-favorite movies. <br />
        If you haven't seen the movie, give it a{" "}
        <b style={{ color: "#ec4e20" }}>potato</b>-rating! How good or bad do
        you think it will be? <br />
        Or select that you’ve seen the movie, and switch to a{" "}
        <b style={{ color: "#ec4e20" }}>fry</b>-rating. <br />
        Leave your comment, make sure it’s witty to win internet points, and
        submit your review.
        <br /> Now the internet knows that you have an opinion!
      </p>
    </div>
  );
};

export default Freshmeter;
