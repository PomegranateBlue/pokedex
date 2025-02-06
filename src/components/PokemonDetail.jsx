import { useSearchParams } from "react-router-dom";
import POKEMON_DATA from "../assets/MOCK_DATA";
import { useNavigate } from "react-router-dom";
import {
  PokemonDetailContainer,
  PokemonDetailImage,
} from "../styles/PokemonDetailStyle";
const PokemonDetail = () => {
  const [searchParams] = useSearchParams();
  const pokemonId = searchParams.get("id");
  const navigate = useNavigate();
  const selectedPokemonCard = POKEMON_DATA.find(
    (pokemon) => pokemon.id.toString() === pokemonId
  );
  const returnToList = () => {
    navigate(-1);
  };
  return (
    <PokemonDetailContainer>
      <h2>{selectedPokemonCard.korean_name}</h2>
      <PokemonDetailImage src={selectedPokemonCard.img_url} />
      <p>{selectedPokemonCard.description}</p>
      <p>타입: {selectedPokemonCard.types.join(", ")}</p>
      <p>No. {selectedPokemonCard.id}</p>
      <button onClick={returnToList}>뒤로가기</button>
    </PokemonDetailContainer>
  );
};

export default PokemonDetail;
