import React, { useState, useEffect } from "react";
import axios from "axios";

const GenreFilter = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    setPopular();
  }, []);

  const getPopular = async () => {
    try {
      let res = await axios.get('/api.popular')
      setPopular(res.data)
      console.log(res.data)
    } catch (err) {
      alert("error in getting popular")
    }
  }

//   return (
//     <div>
//       {popular.map((movie) => {
//         return (
//           <div key={movie.id}>
//             <h2>{movie.movie_name}</h2>

//         )
//       })}
//     </div>
//   );
// };

return (
  <div>
    {popular.map((movie) => {
      return (
        <div key={movie.id}>
          <h1>{movie.movie_name}</h1>
          <img src={movie.poster} width={250} />
        </div>
      );
    })}

    
    {/* {JSON.stringify(movies)} */}
  </div>
);
};

export default GenreFilter;
