const SEARCH_MOVIE = "SEARCH_MOVIE";

export const searchMovie = (value = "spider") => ({
  type: SEARCH_MOVIE,
  payload: value,
});

const searchMovieReducer = (value = "spider", action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return action.payload;
    default:
      return value;
  }
};

export default searchMovieReducer;
