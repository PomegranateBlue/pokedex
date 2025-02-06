import { createContext } from "react";
import POKEMON_DATA from "../assets/MOCK_DATA";
import { useState } from "react";
export const PokemonContext = createContext(null);
export const PokemonProvider = ({ children }) => {
  const [pokemonInBall, setPokemonInBall] = useState([]);
  const addPokemonCard = (id) => {
    const selectedCard = POKEMON_DATA.find((card) => card.id === id);
    if (selectedCard) {
      if (pokemonInBall.length >= 6) {
        alert("최대 6마리까지 데리고 다닐 수 있습니다");
        return;
      }
      setPokemonInBall((selectedPokemon) => [...selectedPokemon, selectedCard]);
    }
  };
  const deletePokemonCard = (id) => {
    setPokemonInBall((prevPokemon) =>
      prevPokemon.filter((card) => card.id !== id)
    );
  };

  return (
    <PokemonContext.Provider
      value={{ addPokemonCard, deletePokemonCard, POKEMON_DATA }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
