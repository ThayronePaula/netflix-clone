import React from "react";

import { getHomeList, getMovieInfo } from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

import "./App.css";

function App() {
  const [movieList, setMovieList] = React.useState([]);
  const [featuredData, setFeaturedData] = React.useState(null);
  const [blackHeader, setBlackHeader] = React.useState(false);
  React.useEffect(() => {
    const loadAll = async () => {
      const list = await getHomeList();
      setMovieList(list);

      const originals = list.filter((item) => item.slug === "originais");

      let randomChosen = originals[0].items.results.length;

      randomChosen = Math.floor(Math.random() * randomChosen);
      const choisen = originals[0].items.results[randomChosen];
      let chosenInfo = await getMovieInfo(choisen.id, "tv");
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);
  React.useEffect(() => {
    const scroll = window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  // if (!movieList) return null;
  // console.log(movieList)
  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="list">
        {movieList.map(({ title, items }, index) => (
          <MovieRow key={index} title={title} item={items} />
        ))}
      </section>
      <footer>
        Feito com{" "}
        <span role="img" aria-label="coração">
          ❤️
        </span>{" "}
        por Thayrone de Paula.
        <br />
        Direitos de imagems a Netflix. <br />
        Api pega no site da themoviedb.org.
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
            alt="Carregando"
          />
        </div>
      )}
    </div>
  );
}

export default App;
