import styled from "styled-components";

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

const PokemonCard = ({ pokemonData, addPokemonCard }) => {
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
        <button onClick={addPokemonCard}>추가</button>
      </PokemonCardFrame>
    </div>
  );
};
export default PokemonCard;
