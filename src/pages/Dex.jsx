import DashBoard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
const Container = styled.div`
  background-color: pink;
`;

const Dex = () => {
  return (
    <Container>
      <h1>Dex</h1>
      <DashBoard />
      <PokemonList></PokemonList>
    </Container>
  );
};

export default Dex;
