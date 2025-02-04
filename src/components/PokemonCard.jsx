import styled from "styled-components";

const PokemonCardFrame = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 180px;
  height: 280px;
  border: ridge;
  border-radius: 6px;
  box-shadow: 6px 6px rgb(147, 147, 147);
  font-size: 12px;
  justify-content: center;
  align-items: center;
`;

const PokemonCard = ({ pokemonData }) => {
  const addPokemon = () => {};
  return (
    <div>
      <PokemonCardFrame>
        {" "}
        <div>
          <img src={pokemonData.img_url}></img>
        </div>
        <div>{pokemonData.korean_name}</div>
        <div>{pokemonData.types}</div>
        {/* <div>{pokemonData.description}</div> */}
        <div>No. {pokemonData.id}</div>
        <button>추가</button>
      </PokemonCardFrame>
    </div>
  );
};
export default PokemonCard;
