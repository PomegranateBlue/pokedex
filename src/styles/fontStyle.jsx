import styled from "styled-components";
import typeColors from "./TypeColors";
export const PokemonName = styled.div`
  font-size: 20px;
  font-family: "DungGeunMo";
  margin-bottom: 10px;
`;

export const PokemonTypeContainer = styled.div`
  padding: 3px;
`;

export const PokemonType = styled.div`
  display: flex;
  color: white;
  width: 60px;
  height: 30px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 3px;
  background-color: ${(props) => typeColors[props.type]};
`;
export const PokemonDescription = styled.div`
  font-family: "DungGeunMo";
  font-size: 24px;
`;

export const PokemonId = styled.div`
  font-size: 20px;
  font-family: "DungGeunMo";
  margin-top: 10px;
`;
