import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import POKEMON_DATA from "../assets/MOCK_DATA";
const PokemonListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;
const PokemonList = () => {
  return (
    <PokemonListContainer>
      {" "}
      {POKEMON_DATA.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemonData={pokemon} />
      ))}
    </PokemonListContainer>
  );
};
export default PokemonList;
