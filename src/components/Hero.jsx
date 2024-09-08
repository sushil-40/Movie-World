import React, { useEffect, useRef, useState } from "react";
import { MovieCard } from "./MovieCard";
import { fetchFromAPI } from "../utils/axios";
import { randomChar } from "../utils/random";

export const Hero = () => {
  const [searchedMovie, setSearchedMovie] = useState({});
  const [bgImg, setBgImg] = useState("");

  // use this shouldFetch to load or fetch movie only one time when refresh the browser
  const shouldFetch = useRef(true);

  useEffect(() => {
    // fetchMovie();
    if (shouldFetch.current) {
      fetchMovie(randomChar());
      shouldFetch.current = false;
    }
  }, []);

  const fetchMovie = async (str) => {
    const movie = await fetchFromAPI(str);
    setSearchedMovie(movie);
    setBgImg(movie.Poster);
    // console.log(movie);
  };
  const movieStyle = {
    backgroundImage: `url(
     ${bgImg}
    )`,

    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "60vh",
  };
  return (
    <div>
      <nav className="py-3 text-danger fixed-top">
        <h2 className="container">Movieworld</h2>
      </nav>

      <div
        className="hero d-flex justify-content-center align-items-center text-light"
        style={movieStyle}
      >
        <div className="hero-content">
          <div className="form-center">
            <div className="text-center">
              <h1>Search Millions of Movies</h1>
              <p>
                Find about the movie more in details before watching them ...
              </p>
            </div>
          </div>

          <div className="input-group mby-5">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-danger" type="button" id="button-addon2">
              Button
            </button>
          </div>

          <div className="movie-card-display">
            <MovieCard searchedMovie={searchedMovie} />
          </div>
        </div>
      </div>
    </div>
  );
};
