import DashBoard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
const Container = styled.div`
  margin: 10px;
  margin: 0 auto;
  background-color: rgb(250, 250, 250);
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
