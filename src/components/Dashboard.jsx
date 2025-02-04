import { useState } from "react";
import styled from "styled-components";

const SelectedPokemon = styled.div`
  background-color: pink;
`;
const DashBoard = () => {
  const [pokemonInBall, setPokemonInBall] = useState([]);
  return (
    <div>
      <SelectedPokemon />
    </div>
  );
};

export default DashBoard;
