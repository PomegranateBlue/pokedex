import { useSearchParams } from "react-router-dom";
import POKEMON_DATA from "../assets/MOCK_DATA";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const PokemonDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 20px;
`;
const PokemonDetailImage = styled.img`
  width: 250px;
  height: 250px;
`;
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
