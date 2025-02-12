import styled from "styled-components";

export const PokemonCardFrame = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin: 10px;
  border: 4px solid gray;
  border-radius: 6px;
  box-shadow: 6px 6px rgb(147, 147, 147);
  justify-content: center;
  align-items: center;
  background-color: white;
  transition: all 0.1s ease-in-out;
  &:hover {
    box-shadow: 12px 12px rgb(147, 147, 147);
    transform: scale(1.05);
  }
`;
