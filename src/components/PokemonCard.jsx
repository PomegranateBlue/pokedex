import { PokemonCardFrame } from "../styles/PokemonCardStyle";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const PokemonCard = ({ pokemonData }) => {
  const { addPokemonCard } = useContext(PokemonContext);
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
        <div>{pokemonData.korean_name}</div>
        <div>{pokemonData.types}</div>
        <div>No. {pokemonData.id}</div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            addPokemonCard(pokemonData.id);
          }}
        >
          추가
        </button>
      </PokemonCardFrame>
    </div>
  );
};
export default PokemonCard;
