import React from "react";
import { MovieCard } from "./MovieCard";

export const Display = () => {
  return (
    <div className="container  mt-5 rounded">
      <div className="bg-dark p-3">
        <div className="row">
          <div className="col">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary">
                All
              </button>
              <button type="button" className="btn btn-warning">
                Drama
              </button>
              <button type="button" className="btn btn-info">
                Action
              </button>
            </div>
            <div className="mt-3 text-light"> 2 Movies listed</div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col d-flex justify-content-around gap-2 flex-wrap">
            {new Array(10).fill("").map((item, i) => (
              <div className="" key={i}>
                {/* <MovieCard /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
