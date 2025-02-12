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
import { useSelector, useDispatch } from "react-redux";
import { deletePokemonCard } from "../redux/slices/pokeDexSlices.jsx";
import { useNavigate } from "react-router-dom";
const DashBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showPokemonDetail = (id) => {
    navigate(`/detail?id=${id}`);
  };
  const pokemonInBall = useSelector((state) => state.pokemon.selectedPokemon);
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
                <PokemonCard
                  key={bag.id}
                  onClick={() => {
                    showPokemonDetail(bag.id);
                  }}
                >
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
                  <DeleteButton
                    onClick={() => dispatch(deletePokemonCard(bag.id))}
                  >
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
