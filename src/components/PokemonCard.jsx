import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
const PokemonCardFrame = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin: 10px;
  border: ridge;
  border-radius: 6px;
  box-shadow: 6px 6px rgb(147, 147, 147);
  font-size: 16px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const PokemonCard = ({ pokemonData}) => {
  const {  addPokemonCard } = useContext(PokemonContext);
  const navigate = useNavigate();
  const showPokemonDetail = () => {
    navigate(`/detail?id=${pokemonData.id}`);
  };
  return (
    <div>
      <PokemonCardFrame onClick={() => showPokemonDetail(pokemonData.id)}>
        <div>
          <img src={pokemonData.img_url}></img>
        </div>
        <div>{pokemonData.korean_name}</div>
        <div>{pokemonData.types}</div>
        <div>No. {pokemonData.id}</div>
        <button onClick={() => addPokemonCard(pokemonData.id)}>추가</button>
      </PokemonCardFrame>
    </div>
  );
};
export default PokemonCard;
