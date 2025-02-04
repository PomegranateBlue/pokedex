import POKEMON_DATA from "../assets/MOCK_DATA";
import { useState } from "react";
const PokemonCard = () => {
  const [pokemonData, setPokemonData] = useState({
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    korean_name: "이상해씨",
    types: ["풀", "독"],
    id: 1,
    description: "풀과 독 타입의 포켓몬으로, 귀여운 식물 모양을 하고 있습니다.",
  });
  return (
    <div className="card-container">
      <div className="pokemon-image">{pokemonData.img_url}</div>
      <div className="pokemon-name">{pokemonData.korean_name}</div>
      <div className="pokemon-types">{pokemonData.types}</div>
      <div className="pokemon-description">{pokemonData.description}</div>
      <button>추가</button>
    </div>
  );
};
export default PokemonCard;
