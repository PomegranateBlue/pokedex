import DashBoard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
// import PokemonDetail from "../components/PokemonDetail";
import styled from "styled-components";
import POKEMON_DATA from "../assets/MOCK_DATA";
import { useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
const Container = styled.div`
  padding: 30px;
  margin: 0 auto;
`;

const Dex = () => {
  const [pokemonInBall, setPokemonInBall] = useState([]);

  const addPokemonCard = (id) => {
    const selectedCard = POKEMON_DATA.find((card) => card.id === id);
    if (pokemonInBall.includes(selectedCard)) {
      alert("같은 포켓몬은 1마리만!");
      return;
    }
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
      value={{
        pokemonInBall,
        deletePokemonCard,
        addPokemonCard,
        POKEMON_DATA,
      }}
    >
      <Container>
        <DashBoard />
        <PokemonList></PokemonList>
      </Container>
    </PokemonContext.Provider>
  );
};

export default Dex;
