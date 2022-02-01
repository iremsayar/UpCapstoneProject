import axios from "axios";

const BASE_API = axios.create({ baseURL: "https://api.themoviedb.org/3/" });

export const fetchDiscoverMovie = () =>
  BASE_API.get("/discover/movie/?api_key=49f6642bafe8fa24b033f9fe9bdb72c5");

export const fetchTrendingMovie = (type) =>
  BASE_API.get(
    `trending/movie/${type}?api_key=49f6642bafe8fa24b033f9fe9bdb72c5`
  );

export const fetchDiscoverGenre = () =>
  BASE_API.get(`/genre/movie/list?api_key=49f6642bafe8fa24b033f9fe9bdb72c5`);

export const fetchMovies = (movie_id) =>
  BASE_API.get(`movie/${movie_id}?api_key=49f6642bafe8fa24b033f9fe9bdb72c5`);

export const fetchCast = (movie_id) =>
  BASE_API.get(
    `movie/${movie_id}/credits?api_key=49f6642bafe8fa24b033f9fe9bdb72c5`
  );

export const fetchReview = (movie_id) =>
  BASE_API.get(
    `movie/${movie_id}/reviews?api_key=49f6642bafe8fa24b033f9fe9bdb72c5`
  );

export const fetchPopularMovie = () =>
  BASE_API.get(`movie/popular?api_key=49f6642bafe8fa24b033f9fe9bdb72c5`);

export const fetchTopRatedMovie = () =>
  BASE_API.get(`movie/top_rated?api_key=49f6642bafe8fa24b033f9fe9bdb72c5`);

export const fetchSort = (
  sort_date_to,
  sort_date_from,
  sort_genre,
  sort_choose
) =>
  BASE_API.get(
    // `movie/popular?api_key=49f6642bafe8fa24b033f9fe9bdb72c5&release_date.lte=${sort_date_to}&release_date.gte=${sort_date_from}&with_genres=${sort_genre}`
    `movie/popular?api_key=49f6642bafe8fa24b033f9fe9bdb72c5&release_date.lte=${sort_date_to}&release_date.gte=${sort_date_from}&with_genres=${sort_genre}§sort_by=${sort_choose}`
  );

export const fetchSearch = (search_movie) =>
  BASE_API.get(
    `search/movie?api_key=49f6642bafe8fa24b033f9fe9bdb72c5&query=${search_movie}`
  );
