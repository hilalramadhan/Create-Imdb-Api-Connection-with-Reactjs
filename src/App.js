import "./App.css";
import { getMovieList, searchMovie } from "./api";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";

const App = () => {
  const [titleMovie, setTitleMovie] = useState([]);
  useEffect(() => {
    getMovieList().then((data) => {
      setTitleMovie(data);
    });
  }, []);
  // console.log({ titleMovie: titleMovie });

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      if (query !== undefined) {
        setTitleMovie(query);
        // console.log({ query });
      }
    }
  };
  const TitleMovieList = () => {
    return titleMovie.map((movie, index) => {
      return (
        <div className="card" key={index}>
          <a href="">
            <div className="card-image">
              <img src={movie.Poster} className="img" alt={movie.Title} />
              <div className="playbutton">
                <FaRegPlayCircle />
              </div>
            </div>
            <div className="card-title">
              <span>{movie.Title}</span>
            </div>
            <div className="card-rating">
              <FaImdb />
              <span>{movie.Type}</span>
              <FaCalendarAlt />
              <span>{movie.Year}</span>
            </div>
          </a>
        </div>
      );
    });
  };
  return (
    <div className="App">
      <div className="container">
        <div className="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Movie"
            autoComplete="off"
            onChange={({ target }) => search(target.value)}
          />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="main">
        <TitleMovieList />
      </div>
    </div>
  );
};

export default App;
