import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

function MovieCarousel({movies}) {
  console.log(movies)
 

  return (
    <Carousel
      next={() => {
        /* Do stuff */
      }}
      prev={() => {
        /* Do other stuff */
      }}
    >
      {movies.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

const useStyles = makeStyles({
  root: {
    position: "relative"
  },
  img_responsive: {
    maxHeight: "560px",
    width: "100%"
  },
  sec: {
    position: "absolute",
    top: "30%",
    left: "10%",
    color: "#fff"
  }
});

//this is the 'movie'
function Item(props) {
  console.log(props)
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className={classes.sec}>
        
        <Button
          sx={{
            ":hover": {
              color: "white"
            }
          }}
          color="info"
          variant="contained"
          className="CheckButton"
        >
          Shop Now
        </Button>
      </div>

    </Paper>
  );
}

export default MovieCarousel;