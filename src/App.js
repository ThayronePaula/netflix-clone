import React from "react";

import {getHomeList,getMovieInfo} from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";

import "./App.css";

function App() {
  const [movieList, setMovieList] = React.useState([]);
  const [featuredData, setFeaturedData] = React.useState(null);
  React.useEffect(() => {
    const loadAll = async () => {
      const list = await getHomeList();
      setMovieList(list);

      const originals = list.filter((item) => item.slug === "originais");

      let randomChosen = originals[0].items.results.length;

      randomChosen = Math.floor(Math.random() * randomChosen);
      const choisen = originals[ 0 ].items.results[ randomChosen ]
      let chosenInfo = await getMovieInfo( choisen.id, 'tv' )
      setFeaturedData(chosenInfo)
      console.log( chosenInfo );
      
    };

    loadAll();
  }, []);

  if (!movieList) return null;

  return (
    <div className="page">
      { featuredData && <FeaturedMovie item={ featuredData} />}
      <section className="list">
        {movieList.map(({ title, items }, index) => (
          <MovieRow key={index} title={title} item={items} />
        ))}
      </section>
    </div>
  );
}

export default App;
