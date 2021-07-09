import React from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import "./MovieRow.css";
const MovieRow = ({ title, item }) => {
  const [scroll, setScroll] = React.useState(0);

  const handleLeftArrow = () => {
    let x = scroll + Math.round(window.innerWidth / 1.5);
    if (x > 0) {
      x = 0;
    }
    setScroll(x);
  };

  const handleRigthArrow = () => {
    let x = scroll - Math.round(window.innerWidth / 1.5);
    if (window.innerWidth - item.results.length * 151 > x) {
      x = window.innerWidth - item.results.length * 151 - 60;
    }
    setScroll(x);
  };
  if (!item) return null;
  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--right" onClick={handleRigthArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movie-Row--listarea">
        <div
          className="movie-Row--list"
          style={{
            marginLeft: scroll,
            width: item.results.length * 151.5,
          }}
        >
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
