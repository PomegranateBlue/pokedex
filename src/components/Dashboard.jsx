import { useState } from "react";
import styled from "styled-components";
const SelectedPokemonBoard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgb(229, 227, 227);
  border-radius: 10px;
  padding: 10px;
`;

const PokeBallContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 10px;
`;
const PokeBall = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  border: 5px dotted gray;
  border-radius: 10px;
  background-color: rgb(191, 177, 177);
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin: 10px;
  border: ridge;
  border-radius: 6px;
  box-shadow: 6px 6px rgb(147, 147, 147);
  font-size: 16px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const DashBoard = ({ pokemonInBall, deletePokemonCard }) => {
  const maxPokemon = 6;
  return (
    <div>
      <SelectedPokemonBoard>
        <h1>좋아하는 포켓몬은?</h1>
        <PokeBallContainer>
          {Array.from({ length: maxPokemon }, (_, index) => {
            if (index < pokemonInBall.length) {
              const bag = pokemonInBall[index];
              return (
                <PokemonCard key={bag.id}>
                  <img
                    src={bag.img_url}
                    alt={bag.korean_name}
                    style={{ width: "100%" }}
                  />
                  <div>{bag.korean_name}</div>
                  <div>{bag.types.join(", ")}</div>
                  <div>No. {bag.id}</div>
                  <button onClick={() => deletePokemonCard(bag.id)}>
                    삭제
                  </button>
                </PokemonCard>
              );
            } else {
              return (
                <PokeBall key={`empty-${index}`}>포켓몬을 고르세요</PokeBall>
              );
            }
          })}
        </PokeBallContainer>
      </SelectedPokemonBoard>
    </div>
  );
};

export default DashBoard;
