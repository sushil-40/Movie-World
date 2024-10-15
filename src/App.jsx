import { useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { Hero } from "./components/Hero";

function App() {
  const [movieList, setMovieList] = useState([]);
  const addMovieToList = (movie) => {
    //remove po.ssible duplicate movies
    const tempMv = movieList.filter((item) => item.imdbID !== movie.imdbID);
    setMovieList([...tempMv, movie]);
  };
  return (
    <div className="wrapper">
      {/* {    hero section} */}
      <Hero addMovieToList={addMovieToList} />
      {/* {   Display Section} */}
      <Display movieList={movieList} />
    </div>
  );
}

export default App;
