import { configureStore, combineReducers } from "@reduxjs/toolkit"; // Modifica l'importazione
import selectedSongReducer from "../reducers/select";

const globalReducer = combineReducers({
  selectedSong: selectedSongReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
