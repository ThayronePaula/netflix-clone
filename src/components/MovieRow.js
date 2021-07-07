import React from "react";
import "./MovieRow.css";
const MovieRow = ({ title, item }) => {
  if (!item) return null;
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movie-Row--listarea">
        <div className="movie-Row--list">
          {item.results.map((item, index) => (
            <div key={index} className="movie-Row--item">
              <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={`Imagem do poster do Filme/Serie - ${item.name}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
