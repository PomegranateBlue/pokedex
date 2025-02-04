import { useState } from "react";
import styled from "styled-components";

const SelectedPokemon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: pink;
`;

const PokeBallSpriteContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: ;
`;
const PokeBallSprite = styled.div`
  display: flex;

  width: 100px;
  height: 100px;
  border: 1px solid black;
  background-color: red;
  justify-content: space-around;
`;
const DashBoard = () => {
  const [pokemonInBall, setPokemonInBall] = useState([]);
  return (
    <div>
      <SelectedPokemon>
        <h2>좋아하는 포켓몬은?</h2>
        <PokeBallSpriteContainer>
          <PokeBallSprite>1</PokeBallSprite>
          <PokeBallSprite>2</PokeBallSprite>
          <PokeBallSprite>3</PokeBallSprite>
          <PokeBallSprite>4</PokeBallSprite>
          <PokeBallSprite>5</PokeBallSprite>
          <PokeBallSprite>6</PokeBallSprite>
        </PokeBallSpriteContainer>
      </SelectedPokemon>
    </div>
  );
};

export default DashBoard;
