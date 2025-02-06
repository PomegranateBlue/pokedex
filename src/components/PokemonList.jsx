import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
const PokemonListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  padding: 30px;
  margin-top: 30px;
  background-color: #f6f6f6;
  border-radius: 12px;
  border: transparent;
  gap: 16px;
`;
const PokemonList = () => {
  const { POKEMON_DATA } = useContext(PokemonContext);
  return (
    <PokemonListContainer>
      {POKEMON_DATA.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemonData={pokemon} />
      ))}
    </PokemonListContainer>
  );
};
export default PokemonList;
