import DashBoard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px;
  margin: 0 auto;
`;
const Dex = () => {
  return (
    <div>
      <Container>
        <DashBoard />
        <PokemonList></PokemonList>
      </Container>
    </div>
  );
};

export default Dex;
