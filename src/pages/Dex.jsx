import DashBoard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import POKEMON_DATA from "../assets/MOCK_DATA";
import { useState } from "react";
const Container = styled.div`
  padding: 30px;
  margin: 0 auto;
`;

const Dex = () => {
  const [pokemonInBall, setPokemonInBall] = useState([]);
  // console.log(POKEMON_DATA);

  const addPokemonCard = (id) => {
    const selectedCard = POKEMON_DATA.find((card) => card.id === id);
    console.log(selectedCard);
    if (selectedCard) {
      setPokemonInBall((selectedPokemon) => [...selectedPokemon, selectedCard]);
    }
  };
  return (
    <Container>
      <DashBoard />
      <PokemonList
        pokemonData={POKEMON_DATA}
        addPokemonCard={addPokemonCard}
      ></PokemonList>
    </Container>
  );
};

export default Dex;
