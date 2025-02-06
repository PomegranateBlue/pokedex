import Pokeball from "../assets/pokeball.png";
import {
  SelectedPokemonBoard,
  PokeBallContainer,
  PokemonCard,
  PokeBall,
  PokeBallImage,
} from "../styles/DashboardStyle.jsx";
import {
  PokemonType,
  PokemonId,
  PokemonTypeContainer,
  PokemonName,
} from "../styles/fontStyle";
import { DeleteButton } from "../styles/ButtonStyle.jsx";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const DashBoard = () => {
  const { pokemonInBall, deletePokemonCard } = useContext(PokemonContext);
  const maxPokemon = 6;
  return (
    <div>
      <SelectedPokemonBoard>
        <h1 style={{ fontFamily: "DungGeunMo" }}>좋아하는 포켓몬은?</h1>
        <PokeBallContainer>
          {Array.from({ length: maxPokemon }, (_, index) => {
            if (index < pokemonInBall.length) {
              const bag = pokemonInBall[index];
              return (
                <PokemonCard key={bag.id}>
                  <img src={bag.img_url} alt={bag.korean_name} />
                  <PokemonName>{bag.korean_name}</PokemonName>
                  <PokemonType>
                    {bag.types.map((types, index) => (
                      <PokemonTypeContainer key={index}>
                        <PokemonType type={types}>{types}</PokemonType>
                      </PokemonTypeContainer>
                    ))}
                  </PokemonType>
                  <PokemonId>No. {bag.id}</PokemonId>
                  <DeleteButton onClick={() => deletePokemonCard(bag.id)}>
                    삭제
                  </DeleteButton>
                </PokemonCard>
              );
            } else {
              return (
                <PokeBall key={`empty-${index}`}>
                  <PokeBallImage src={Pokeball} />
                </PokeBall>
              );
            }
          })}
        </PokeBallContainer>
      </SelectedPokemonBoard>
    </div>
  );
};

export default DashBoard;
