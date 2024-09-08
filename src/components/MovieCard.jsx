/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export const MovieCard = ({ searchedMovie }) => {
  const { Poster, Title, imdbRating, Plot } = searchedMovie;

  return (
    <div className="container mt-3">
      <div className="row border rounded text-dark p-3 movie-card-item">
        <div className="col-md">
          <img src={Poster} alt="" />
        </div>
        <div className="col-md">
          <h3>{Title}</h3>
          <p>IMDB Rating: {imdbRating}</p>
          <p>{Plot?.slice(0, 50)}...</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-warning">Drama</button>

            <button className="btn btn-info">Action</button>
          </div>
          <div className="d-grid mt-3">
            <button className="btn btn-danger">Action</button>
          </div>
        </div>
      </div>
    </div>
  );
};
