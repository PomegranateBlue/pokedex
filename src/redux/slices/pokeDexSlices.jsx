import POKEMON_DATA from "../../assets/MOCK_DATA";
import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
const initialState = {
  selectedPokemon: [],
  pokemonData: POKEMON_DATA,
};

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
