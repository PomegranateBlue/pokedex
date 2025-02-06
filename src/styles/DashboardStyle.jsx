import styled from "styled-components";
export const SelectedPokemonBoard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f6f6f6;
  border-radius: 10px;
  padding: 10px;
`;

export const PokeBallContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 10px;
`;
export const PokeBall = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  border: 5px dotted gray;
  border-radius: 10px;
  background-color: rgb(209, 209, 209);
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;
export const PokeBallImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const PokemonCard = styled.div`
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
