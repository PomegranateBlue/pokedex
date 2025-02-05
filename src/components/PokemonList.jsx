import PokemonCard from "./PokemonCard";
import styled from "styled-components";
// import POKEMON_DATA from "../assets/MOCK_DATA";
const PokemonListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  padding: 30px;
  margin-top: 30px;
  background-color: gray;
  border-radius: 12px;
  border: 2px solid black;
  gap: 16px;
`;
const PokemonList = ({ addPokemonCard, pokemonData }) => {
  return (
    <PokemonListContainer>
      {" "}
      {pokemonData.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemonData={pokemon}
          addPokemonCard={addPokemonCard}
        />
      ))}
    </PokemonListContainer>
  );
};
export default PokemonList;
