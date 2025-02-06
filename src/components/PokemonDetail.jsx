import { useSearchParams } from "react-router-dom";
import POKEMON_DATA from "../assets/MOCK_DATA";
import { useNavigate } from "react-router-dom";
import {
  PokemonDetailContainer,
  PokemonDetailImage,
  PokemonDetailDescription,
  PokemonDetailId,
  ReturnButton,
  PokemonDetailName,
} from "../styles/PokemonDetailStyle";
import { PokemonType, PokemonTypeContainer } from "../styles/fontStyle";

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
      <PokemonDetailName>{selectedPokemonCard.korean_name}</PokemonDetailName>
      <PokemonDetailImage src={selectedPokemonCard.img_url} />
      <PokemonDetailDescription>
        {selectedPokemonCard.description}
      </PokemonDetailDescription>
      <PokemonType>
        {selectedPokemonCard.types.map((types, index) => (
          <PokemonTypeContainer key={index}>
            <PokemonType type={types}>{types}</PokemonType>
          </PokemonTypeContainer>
        ))}
      </PokemonType>
      <PokemonDetailId>No. {selectedPokemonCard.id}</PokemonDetailId>
      <ReturnButton onClick={returnToList}>뒤로가기</ReturnButton>
    </PokemonDetailContainer>
  );
};

export default PokemonDetail;
