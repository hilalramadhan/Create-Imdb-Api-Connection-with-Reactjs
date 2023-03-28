import axios from "axios";

export const getMovieList = async () => {
  const movie = await axios.get(
    `${process.env.REACT_APP_BASEURL}&s=marvel&page=1`
  );
  //   console.log({ movieList: movie });
  return movie.data.Search;
};
export const searchMovie = async (q) => {
  const search = await axios.get(
    `${process.env.REACT_APP_BASEURL}&s=${q}&page=1`
  );
  // console.log({ q });
  return search.data.Search;
};
