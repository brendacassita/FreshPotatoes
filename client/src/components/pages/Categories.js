import { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  const [movies, setMovies] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      let res = await axios.get("/api/movies");
      setMovies(res.data);
      console.log(res.data);
    } catch (err) {
      alert("error in getting movies");
    }
  };

  const getCategories = () => {
    return movies.reduce((accum, movie) => {
      if (!accum.includes(movie.genre)) {
        accum.push(movie.genre);
      }
      return accum;
    }, []);
  };

  const renderSelect = (categories) => {
    console.log(categories);
    return categories.map((category) => {});
  };

  const getSelect = () => {
    let uniqueCategories = getCategories();
    return uniqueCategories;
    console.log(uniqueCategories);
  };

  const renderFilteredCategories = () => {
    if (!filteredCategories) {
      return <p>no movies matching category, select a category</p>;
    }
  };

  return (
    <div>
      <h1>Categories</h1>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <h5>{movie.genre}</h5>
            <img src={movie.poster} width={150} />
            {getSelect()}
            {/* {renderFilteredCategories()} */}
          </div>
        );
      })}
      {/* {JSON.stringify(movies)} */}
    </div>
  );
};

export default Categories;
