import React from "react";
import "./FeaturedMovie.css";

const FeaturedMovie = ({ item }) => {
  console.log(item);
  const dateAir = new Date(item.first_air_date);
  const genres = [];
  for (let i of item.genres) {
    genres.push(i.name);
  }

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
              <div className="featured--head">
                <span>{item.vote_average} pontos</span>
                <span>{dateAir.getFullYear()}</span>
                <span>
                  {item.number_of_seasons}{" "}
                  {item.number_of_seasons > 1 ? "temporadas" : "temporada"}
                </span>
              </div>
              <p>{item.overview}</p>
              <div className="featured--buttons">
                <button>► Assistir</button>
                <button>+ Minha lista</button>
              </div>
              <div className="featured--genres">
                {genres.length ? genres.length < 2 ? <h3>Gênero:</h3> : <h3>Gêneros:</h3>:''}
                {genres.join(", ")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
