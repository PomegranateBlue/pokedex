import { configureStore } from "@reduxjs/toolkit";
import pokeReducers from "../slices/pokeDexSlices";

export const store = configureStore({
  reducer: {
    pokemon: pokeReducers,
  },
});

export default store;
