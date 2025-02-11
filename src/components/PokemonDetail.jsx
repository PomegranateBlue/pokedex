import { useSearchParams } from "react-router-dom";
import POKEMON_DATA from "../assets/MOCK_DATA";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  PokemonDetailContainer,
  PokemonDetailImage,
  PokemonDetailDescription,
  PokemonDetailId,
  ReturnButton,
  PokemonDetailName,
  ButtonContainer,
  AddButton,
} from "../styles/PokemonDetailStyle";
import { PokemonType, PokemonTypeContainer } from "../styles/fontStyle";
import { addPokemonCard } from "../redux/slices/pokeDexSlices";

const PokemonDetail = () => {
  const [searchParams] = useSearchParams();
  const pokemonId = searchParams.get("id");
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      <ButtonContainer>
        {" "}
        <AddButton
          onClick={() => {
            dispatch(addPokemonCard({ id: selectedPokemonCard.id }));
          }}
        >
          추가하기
        </AddButton>
        <ReturnButton onClick={returnToList}>뒤로가기</ReturnButton>
      </ButtonContainer>
    </PokemonDetailContainer>
  );
};

export default PokemonDetail;
