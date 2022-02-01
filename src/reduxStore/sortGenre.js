const SORT_GENRE = "SORT_GENRE";

export const sortGenre = (id = "0") => ({
  type: SORT_GENRE,
  payload: id,
});

const sortGenreReducer = (id = "0", action) => {
  switch (action.type) {
    case SORT_GENRE:
      return action.payload;
    default:
      return id;
  }
};

export default sortGenreReducer;
