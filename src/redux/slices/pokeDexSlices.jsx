import POKEMON_DATA from "../../assets/MOCK_DATA";
import { createSlice } from "@reduxjs/toolkit";
//MOCK DATA 모든 상태 관리를 여기서서
//포켓몬 추가/삭제, 대시보드에 존재하는 상태를 관리하자
const initialState = {
  selectedPokemon: [],
  pokemonData: POKEMON_DATA,
};
{
  /*
  initialState는 컴포넌트에서 다루는 데이터, 이 데이터를 조작하여 상태를 관리한다
  따라서 원본이 되는 POKEMON_DATA가 들어가게된다.
   */
}
const pokeSlice = createSlice({
  name: "pokeSlice",
  initialState,
  reducers: {
    addPokemonCard: (state, action) => {
      const selectedPokemonCard = state.pokemonData.find(
        (pokemon) => pokemon.id === action.payload.id
      );
      if (state.selectedPokemon.includes(selectedPokemonCard)) {
        alert("똑같은 포켓몬은 1마리만 데려갈 수 있습니다");
        return;
      }
      if (selectedPokemonCard) {
        if (state.selectedPokemon.length >= 6) {
          alert("최대 6마리의 포켓몬을 데리고 다닐 수 있습니다");
          return;
        }
      }
      state.selectedPokemon.push(selectedPokemonCard);
    },

    deletePokemonCard: (state, action) => {
      state.selectedPokemon = state.selectedPokemon.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
  },
});

export const { addPokemonCard, deletePokemonCard } = pokeSlice.actions;
export default pokeSlice.reducer;
