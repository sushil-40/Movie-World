/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export const MovieCard = ({
  searchedMovie,
  deleteFunc,
  handleOnAddToTheList,
}) => {
  const { Poster, Title, imdbRating, Plot, mood, imdbID } = searchedMovie;

  return (
    <div className="container mt-5">
      <div className="row border rounded text-dark p-3 movie-card-item">
        <div className="col-md">
          <img src={Poster} alt="" />
        </div>
        <div className="col-md">
          <h3>{Title}</h3>
          <p>IMDB Rating: {imdbRating}</p>
          <p>{Plot?.slice(0, 50)}...</p>
          {!mood && (
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-warning"
                onClick={() => handleOnAddToTheList("drama")}
              >
                Drama
              </button>

              <button
                className="btn btn-info"
                onClick={() => handleOnAddToTheList("action")}
              >
                Action
              </button>
            </div>
          )}

          <div className="d-grid mt-3">
            <button
              onClick={() => deleteFunc(imdbID)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
