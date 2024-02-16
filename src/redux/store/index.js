import { configureStore, combineReducers } from "@reduxjs/toolkit";
import selectedSongReducer from "../reducers/select";
import favorite from "../reducers/favorite";

const globalReducer = combineReducers({
  selectedSong: selectedSongReducer,
  favorites: favorite,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
