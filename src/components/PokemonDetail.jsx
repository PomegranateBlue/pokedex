import { useSearchParams } from "react-router-dom";
import POKEMON_DATA from "../assets/MOCK_DATA";
const PokemonDetail = () => {
  const [searchParams] = useSearchParams();
  const pokemonId = searchParams.get("id");

  const selectedPokemonCard = POKEMON_DATA.find(
    (pokemon) => pokemon.id.toString() === pokemonId
  );
  //   console.log(selectedPokemonCard);
  return (
    <div>
      <h1>{selectedPokemonCard.korean_name}의 상세 정보</h1>
      <img src={selectedPokemonCard.img_url} />
      <p>{selectedPokemonCard.description}</p>
      <p>타입: {selectedPokemonCard.types.join(", ")}</p>
      <p>No. {selectedPokemonCard.id}</p>
      <button>뒤로가기</button>
    </div>
  );
};

export default PokemonDetail;
