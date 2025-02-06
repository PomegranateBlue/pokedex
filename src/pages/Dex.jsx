import DashBoard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
// import PokemonDetail from "../components/PokemonDetail";
import styled from "styled-components";
import POKEMON_DATA from "../assets/MOCK_DATA";
import { useState } from "react";
const Container = styled.div`
  padding: 30px;
  margin: 0 auto;
`;

const Dex = () => {
  const [pokemonInBall, setPokemonInBall] = useState([]);
  console.log(pokemonInBall);

  const addPokemonCard = (id) => {
    const selectedCard = POKEMON_DATA.find((card) => card.id === id);
    // console.log(selectedCard);

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
    <Container>
      <DashBoard
        pokemonInBall={pokemonInBall}
        deletePokemonCard={deletePokemonCard}
      />
      <PokemonList
        pokemonData={POKEMON_DATA}
        addPokemonCard={addPokemonCard}
        deletePokemonCard={deletePokemonCard}
      ></PokemonList>
    </Container>
  );
};

export default Dex;
