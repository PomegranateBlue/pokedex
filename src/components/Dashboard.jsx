import Pokeball from "../assets/pokeball.png";
import {
  SelectedPokemonBoard,
  PokeBallContainer,
  PokemonCard,
  PokeBall,
  PokeBallImage,
} from "../styles/DashboardStyle.jsx";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const DashBoard = () => {
  const { pokemonInBall, deletePokemonCard } = useContext(PokemonContext);
  const maxPokemon = 6;
  return (
    <div>
      <SelectedPokemonBoard>
        <h1>좋아하는 포켓몬은?</h1>
        <PokeBallContainer>
          {Array.from({ length: maxPokemon }, (_, index) => {
            if (index < pokemonInBall.length) {
              const bag = pokemonInBall[index];
              return (
                <PokemonCard key={bag.id}>
                  <img src={bag.img_url} alt={bag.korean_name} />
                  <div>{bag.korean_name}</div>
                  <div>{bag.types.join(", ")}</div>
                  <div>No. {bag.id}</div>
                  <button onClick={() => deletePokemonCard(bag.id)}>
                    삭제
                  </button>
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
