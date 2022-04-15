// import {React, useState} from "react";
// import Carousel from "react-material-ui-carousel";
// import { Paper } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// function MovieCarousel({movies}) {
//   const [items, setItems] = useState([]);
  
//   console.log(movies)
 


// const formatItems = () => {

// setItems(
//   movies.map((item, i) => (
// <Item key={i} item={item} />
// ))

// );

// }


// const Banner = (props) => {

//   const contentPosition = props.contentPosition ? props.contentPosition : "left"
//     const totalItems = props.length ? props.length : 3;
//     const mediaLength = totalItems - 1;
//     formatItems(); 

//      if (contentPosition === "left") {
//         items.unshift(props);
//     } else if (contentPosition === "right") {
//         items.push(props);
//     } else if (contentPosition === "middle") {
//         items.splice(items.length / 2, 0, props);
//     }
// //     return(

// //     )
//  }

//   return (

//     <Carousel
//       next={() => {
//         /* Do stuff */
//       }}
//       prev={() => {
//         /* Do other stuff */
//       }}
//     >
//     {Banner()}
      
//     </Carousel>
//   );
// }

// const useStyles = makeStyles({
//   root: {
//     position: "relative"
//   },
//   img_responsive: {
//     maxHeight: "560px",
//     width: "25%"
//   },
//   sec: {
//     position: "absolute",
//     top: "30%",
//     left: "10%",
//     color: "#fff"
//   }
// });




// //this is the 'movie'
// function Item(props) {
//   console.log(props)
//   const classes = useStyles();
//   return (

//     <Paper className={classes.root} >
//       <div>
        
//         <img className={classes.img_responsive} src= {props.item.poster}></img>
//       </div>

//     </Paper>
  
//   );
// }

// export default MovieCarousel;