import { useState } from "react";
import styled from "styled-components";

const SelectedPokemon = styled.div`
  width: 100%;
  height: 200px;
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
