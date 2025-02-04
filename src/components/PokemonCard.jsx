import styled from "styled-components";

const PokemonCardFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 320px;
  border: solid 3px black;
  font-size: 12px;
  justify-content: center;
  align-items: center;
`;

const PokemonCardContainer=styled.div`
    background-color:
`

const PokemonCard = ({ pokemonData }) => {
  console.log(pokemonData);
  return (
    <div>
      <PokemonCardFrame>
        {" "}
        <div>
          <img src={pokemonData.img_url}></img>
        </div>
        <div>{pokemonData.korean_name}</div>
        <div>{pokemonData.types}</div>
        <div>{pokemonData.description}</div>
        <div>No. {pokemonData.id}</div>
        <button>추가</button>
      </PokemonCardFrame>
    </div>
  );
};
export default PokemonCard;
