import { configureStore, combineReducers } from "@reduxjs/toolkit";
import selectedSongReducer from "../reducers/select";

const globalReducer = combineReducers({
  selectedSong: selectedSongReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
