import { PokemonCardFrame } from "../styles/PokemonCardStyle";
import { useNavigate } from "react-router-dom";
import { CardButton } from "../styles/ButtonStyle";
import {
  PokemonName,
  PokemonId,
  PokemonType,
  PokemonTypeContainer,
} from "../styles/fontStyle";
import { useDispatch } from "react-redux";
import { addPokemonCard } from "../redux/slices/pokeDexSlices";
const PokemonCard = ({ pokemonData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showPokemonDetail = () => {
    navigate(`/detail?id=${pokemonData.id}`);
  };
  return (
    <div>
      <PokemonCardFrame
        onClick={(e) => {
          e.stopPropagation();
          showPokemonDetail(pokemonData.id);
        }}
      >
        <div>
          <img src={pokemonData.img_url}></img>
        </div>
        <PokemonName>{pokemonData.korean_name}</PokemonName>
        <PokemonType>
          {pokemonData.types.map((types, index) => (
            <PokemonTypeContainer key={index}>
              <PokemonType type={types}>{types}</PokemonType>
            </PokemonTypeContainer>
          ))}
        </PokemonType>
        <PokemonId>No. {pokemonData.id}</PokemonId>
        <CardButton
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addPokemonCard({ id: pokemonData.id }));
          }}
        >
          추가
        </CardButton>
      </PokemonCardFrame>
    </div>
  );
};
export default PokemonCard;
