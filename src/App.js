import React from "react";
import getHomeList from "./Tmdb";

function App() {
  const [movieList, setMovieList] = React.useState([])
  React.useEffect(() => {
    const loadAll = async () => {
      let list = await getHomeList();
      setMovieList(list);
    };

    loadAll()
  }, []);

  return <div>
    

    
  </div>;
}

export default App;
