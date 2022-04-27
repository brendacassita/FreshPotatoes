import axios from "axios";
import { useEffect, useState } from "react";
import "../CssFIles/card.css";
import { Link } from "react-router-dom";

const Genres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = async () => {
    try {
      let res = await axios.get("./api/genres");
      setGenres(res.data);
    } catch (err) {
      alert("error getting genres");
    }
  };

  const renderData = () => {
    const genre = genres.map((g) => {
      return (
        <div key={g.id}>
          <div className="wrapper">
            <div className="cards ">
              <Link to={`/genres/28`}>
                <figure className="card ">
                  <div className="centered">Action</div>

                  <img
                    alt="action"
                    className="back"
                    src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/370-q80/movie_asset/87/18/37/wom_salone_poster_1400x2100.jpg"
                  ></img>
                </figure>
              </Link>

              <Link to={`/genres/${g.name}`} state={{ genre: g.name }}>
                <figure className="card ">
                  <div className="centered">{g.name}</div>

                  <img alt="g.id" className="back" src={g.image}></img>
                </figure>
              </Link>
            </div>
          </div>
        </div>
      );
    });
    return genre;
  };

  return (
    <div className="App1">
      <div className="searchall">
        <div className="sline"></div>
        <h1 className="searchall2"> Genres</h1>
        <div className="bline"></div>
      </div>

      {/*           
          <div className="wrapper">
            <div className="cards">
              <figure className="card">
                 <div className="centered">Movie</div>
              <img className="back" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/westerns-12-1582066991.jpg" ></img>
                </figure>
            </div>
          </div> */}
      <div className="rowdata">
        <div className="wrapper">
          <div className="cards ">
            
            <Link to={`/genres/28`}>
              <figure className="card ">
                <div className="centered">Action</div>
                <img
                  alt="action"
                  className="back"
                  src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/370-q80/movie_asset/87/18/37/wom_salone_poster_1400x2100.jpg"
                ></img>
              </figure>
            </Link>

            <Link to={`/genres/12`}>
              <figure className="card ">
                <div className="centered">Adventure</div>
                <img
                  alt="action"
                  className="back"
                  src="https://m.media-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg"
                ></img>
              </figure>
            </Link>

            <Link to={`/genres/16`}>
              <figure className="card ">
                <div className="centered">Animation</div>
                <img
                  alt="action"
                  className="back"
                  src=""
                ></img>
              </figure>
            </Link>

            <Link to={`/genres/35`}>
              <figure className="card ">
                <div className="centered">Comedy</div>
                <img
                  alt="action"
                  className="back"
                  src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/7d40e55728cbd7f03444363572a830f5_bfcdfb95-e46e-4a48-b3a9-05c482802c01_500x.jpg?v=1573593901"
                ></img>
              </figure>
            </Link>

            <Link to={`/genres/80`}>
              <figure className="card ">
                <div className="centered">Crime</div>
                <img
                  alt="action"
                  className="back"
                  src="https://cpb-us-w2.wpmucdn.com/blogs.iu.edu/dist/f/65/files/2019/04/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_-1odtbn5.jpg"
                ></img>
              </figure>
            </Link>

            <Link to={`/genres/99`}>
              <figure className="card ">
                <div className="centered">Documentary</div>
                <img
                  alt="action"
                  className="back"
                  src=""
                ></img>
              </figure>
            </Link>

            <Link to={`/genres/18`}>
              <figure className="card ">
                <div className="centered">Drama</div>
                <img
                  alt="action"
                  className="back"
                  src="https://m.media-amazon.com/images/I/51mTtUGvUCL.jpg"
                ></img>
              </figure>
            </Link>

            <Link to={`/genres/10751`}>
              <figure className="card ">
                <div className="centered">Family</div>
                <img
                  alt="action"
                  className="back"
                  src="https://waghostwriter.com/wp-content/uploads/2020/01/0x800.jpg"
                ></img>
              </figure>
            </Link>

            <Link to={`/genres/14`}>
              <figure className="card ">
                <div className="centered">Fantasy</div>
                <img
                  alt="action"
                  className="back"
                  src="https://www.weekendnotes.com/im/008/05/movie-locations-fantasy-movies-film-travel5.JPG"
                ></img>
              </figure>
            </Link>

            <Link to={`/genres/36`}>
              <figure className="card ">
                <div className="centered">History</div>
                <img
                  alt="action"
                  className="back"
                  src=""
                ></img>
              </figure>
            </Link>

            <Link to={`/genres/27`}>
              <figure className="card ">
                <div className="centered">Horror</div>
                <img
                  alt="action"
                  className="back"
                  src=""
                ></img>
              </figure>
            </Link>

            <Link to={`/genres/10402`}>
              <figure className="card ">
                <div className="centered">Music</div>
                <img
                  alt="action"
                  className="back"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mv5bmji1ndyznzy2ml5bml5banbnxkftztgwodqwodczntmat-v1-1588868235.jpg?crop=0.9745419938139424xw:1xh;center,top&resize=480:*"
                ></img>
              </figure>
            </Link>

            <Link to={`/genres/9648`}>
              <figure className="card ">
                <div className="centered">Mystery</div>
                <img
                  alt="action"
                  className="back"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/115455159-1300x1733-1602867451.jpg?crop=0.910428158655109xw:1xh;center,top&resize=480:*"
                ></img>
              </figure>
            </Link>

            <Link to={`/genres/10749`}>
              <figure className="card ">
                <div className="centered">Romance</div>
                <img
                  alt="action"
                  className="back"
                  src="https://m.media-amazon.com/images/M/MV5BMTMxMmRmMWUtNGNhZS00MWYxLTkwNzUtM2QwNzI4MGU1ZTI2XkEyXkFqcGdeQXVyNTQ3MjE4NTU@._V1_FMjpg_UX1000_.jpg"
                ></img>
              </figure>
            </Link>

            <Link to={`/genres/878`}>
              <figure className="card ">
                <div className="centered">Science Fiction</div>
                <img
                  alt="action"
                  className="back"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mv5bmtexmzu0odcxndheqtjeqwpwz15bbwu4mde1oti4mzay-v1-1589813214.jpg?crop=1xw:0.960205078125xh;center,top&resize=480:*"
                ></img>
              </figure>
            </Link>

            <Link to={`/genres/10770`}>
              <figure className="card ">
                <div className="centered">TV Movie</div>
                <img
                  alt="action"
                  className="back"
                  src=""
                ></img>
              </figure>
            </Link>

            <Link to={`/genres/53`}>
              <figure className="card ">
                <div className="centered">Thriller</div>
                <img
                  alt="action"
                  className="back"
                  src="https://img.dtcn.com/image/themanual/rpllj2hpcoqmkfhtqute0mkeao2-500x500.jpg"
                ></img>
              </figure>
            </Link>

            <Link to={`/genres/10752`}>
              <figure className="card ">
                <div className="centered">War</div>
                <img
                  alt="action"
                  className="back"
                  src=""
                ></img>
              </figure>
            </Link>

            <Link to={`/genres/37`}>
              <figure className="card ">
                <div className="centered">Western</div>
                <img
                  alt="action"
                  className="back"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/westerns-12-1582066991.jpg"
                ></img>
              </figure>
            </Link>

          </div>
        </div>
      </div>
      {/* {JSON.stringify(genres)} */}
    </div>
  );
};

export default Genres;
