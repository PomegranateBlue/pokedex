import { configureStore } from "@reduxjs/toolkit";
import pokeReducers from "../slices/pokeDexSlices";

export const store = configureStore({
  reducer: {
    pokemon: pokeReducers,
  },
});

export default store;

{/*
    store를 설정하고 pokeDexSlices 컴포넌트에서 만든 리듀서를 등록
    리듀서를 pokemon이라는 리듀서로 등록한 것이다.
     */}