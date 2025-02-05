import { useState } from "react";
import styled from "styled-components";
import POKEMON_DATA from "../assets/MOCK_DATA";
const SelectedPokemonBoard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgb(229, 227, 227);
  border-radius: 10px;
  padding: 10px;
`;

const PokeBallSpriteContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 10px;
`;
const PokeBallSprite = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  border: 5px dotted gray;
  border-radius: 10px;
  background-color: rgb(191, 177, 177);
  align-items: center;
  justify-content: center;
`;
const DashBoard = () => {
  const [pokemonInBall, setPokemonInBall] = useState([]);
  // console.log(POKEMON_DATA);

  const addPokemonCard = (id) => {
    const selectedCard = POKEMON_DATA.find((card) => card.id === id);
    if (selectedCard) {
      setPokemonInBall((card) => [...card, selectedCard]);
      console.log(pokemonInBall);
    }
  };
  return (
    <div>
      <SelectedPokemonBoard>
        <h1>좋아하는 포켓몬은?</h1>
        <PokeBallSpriteContainer>
          <PokeBallSprite>1</PokeBallSprite>
          <PokeBallSprite>2</PokeBallSprite>
          <PokeBallSprite>3</PokeBallSprite>
          <PokeBallSprite>4</PokeBallSprite>
          <PokeBallSprite>5</PokeBallSprite>
          <PokeBallSprite>6</PokeBallSprite>
        </PokeBallSpriteContainer>
      </SelectedPokemonBoard>
    </div>
  );
};

export default DashBoard;
