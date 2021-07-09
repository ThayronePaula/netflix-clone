import React from "react";
import "./FeaturedMovie.css";

const FeaturedMovie = ({ item }) => {
  console.log(item);
  return (
    <section
      className="featured"
      style={{
        backgroundSize: "contain",
        backgroundPosition: "center",
        background: ` url('https://image.tmdb.org/t/p/original${item.backdrop_path}') no-repeat`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--about">
            <h1>{item.name}</h1>
            <div className="featured--info">
              <span>{item.vote_average} pontos</span>
              <span>{item.first_air_date.slice(0,4)}</span>
              <span>{ item.number_of_seasons} { item.number_of_seasons > 1 ? 'temporadas' : 'temporada' }</span>
            </div>
            <div className="featured--info">

              {item.overview}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
