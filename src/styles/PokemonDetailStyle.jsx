import styled from "styled-components";

export const PokemonDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 20px;
`;

export const PokemonDetailName = styled.div`
  font-family: "DungGeunMo";
  font-size: 36px;
`;
export const PokemonDetailImage = styled.img`
  width: 250px;
  height: 250px;
`;
export const PokemonDetailDescription = styled.div`
  margin-bottom: 30px;
  font-size: 24px;
  font-family: "DungGeunMo";
`;

export const PokemonDetailId = styled.div`
  font-size: 26px;
  margin: 20px;
  font-family: "DungGeunMo";
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const AddButton = styled.button`
  font-family: "DungGeunMo";
  font-size: 20px;
  padding: 10px 15px;
`;

export const ReturnButton = styled.button`
  font-family: "DungGeunMo";
  font-size: 20px;
  padding: 10px 15px;
`;
