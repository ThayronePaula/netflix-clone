import React from "react";

import getHomeList from "./Tmdb";
import MovieRow from "./components/MovieRow";

import './App.css'

function App() {
  const [movieList, setMovieList] = React.useState([]);
  React.useEffect(() => {
    const loadAll = async () => {
      let list = await getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  if (!movieList) return null;
console.log(movieList);
  return (
    <div className="page">
      <section className="list">
        {movieList.map(({ title, items }, index) => (
          <MovieRow key={index} title={title} item={items} />
        ))}
      </section>
    </div>
  );
}

export default App;
