import POKEMON_DATA from "../assets/MOCK_DATA";
import { useState } from "react";
import styled from "styled-components";

const PokemonCardFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 320px;
  border: solid 1px white;
  font-size: 12px;
  justify-content: center;
  align-items: center;
`;

const PokemonCardContent = () => styled.div``;

const PokemonCard = () => {
  const [pokemonData, setPokemonData] = useState(POKEMON_DATA);
  console.log(pokemonData);
  return (
    <div>
      {pokemonData.map((pokemonInfo) => (
        <PokemonCardFrame key={pokemonInfo.id}>
          {" "}
          <div>
            <img src={pokemonInfo.img_url}></img>
          </div>
          <div>{pokemonInfo.korean_name}</div>
          <div>{pokemonInfo.types}</div>
          <div>{pokemonInfo.description}</div>
          <div>No. {pokemonInfo.id}</div>
          <button>추가</button>
        </PokemonCardFrame>
      ))}
    </div>
  );
};
export default PokemonCard;
