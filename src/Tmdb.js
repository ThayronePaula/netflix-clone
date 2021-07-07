const API_KEY = "38c007f28d5b66f36b9c3cf8d8452a4b";
const BASE_URL = "https://api.themoviedb.org/3";
/*
-originais
-recomendados
-em alta
-acao
-comedia
-terror
-romance
-documentario
*/
const basicFetch = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  const json = await response.json();

  return json;
};

const getHomeList = async () => {
  return [
    {
      slug: "originais",
      title: "Originais Netflix",
      items: await basicFetch(`/discover/tv?with_network=213&page=1&language=pt-BR&api_key=${API_KEY}`),
    },
    {
      slug: "tranding",
      title: "Recomendados para você",
      items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
    },
    {
      slug: "toprated",
      title: "Em alta",
      items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
    },
    {
      slug: "action",
      title: "Ação",
      items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
    },
    {
      slug: "comedy",
      title: "Comédia",
      items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
    },
    {
      slug: "horror",
      title: "Terror",
      items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
    },
    {
      slug: "romance",
      title: "Romance",
      items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
    },
    {
      slug: "documentary",
      title: "Documentários",
      items:  await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
    },
  ];
};

export default getHomeList;
