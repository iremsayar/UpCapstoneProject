import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import userInfoReducer from "./userInfo";
import themeReducer from "./theme";
import sortGenreReducer from "./sortGenre";
import sortChooseReducer from "./sortChoose";
import sortDateFromReducer from "./sortDateFrom";
import sortDateToReducer from "./sortDateTo";
import isSortReducer from "./isSort";
import searchMovieReducer from "./searchMovie";
import isSearchReducer from "./isSearch";
import goProfileReducer from "./goProfile";
import userInfoLocalReducer from "./userInfoLocal";
import favReducer from "./fav";
import saveReducer from "./save";
const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  theme: themeReducer,
  sortGenre: sortGenreReducer,
  sortChoose: sortChooseReducer,
  sortDateFrom: sortDateFromReducer,
  sortDateTo: sortDateToReducer,
  isSort: isSortReducer,
  searchMovie: searchMovieReducer,
  isSearch: isSearchReducer,
  goProfile: goProfileReducer,
  userInfoLocal: userInfoLocalReducer,
  fav: favReducer,
  save: saveReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme", "userInfoLocal", "fav", "save"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

store.subscribe(() => console.log("STORE:::", store.getState()));

export const persistor = persistStore(store);

export default store;
