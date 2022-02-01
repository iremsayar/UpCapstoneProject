const ADD_FAV = "ADD_FAV";
const REMOVE_FAV = "REMOVE_FAV";

export const addFav = (id, title) => ({
  type: ADD_FAV,
  payload: { id, title },
});

export const removeFav = (title) => ({
  type: REMOVE_FAV,
  payload: title,
});

const favReducer = (fav = [], action) => {
  switch (action.type) {
    case ADD_FAV:
      return [...fav, action.payload];
    case REMOVE_FAV:
      return fav.filter((item) => item.title !== action.payload);
    default:
      return fav;
  }
};

export default favReducer;
