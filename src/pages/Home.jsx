import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import title from "../assets/title.png";

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;
const HomeTitleContainer = styled.div``;
const HomeTitle = styled.img`
  width: 800px;
  height: auto;
`;
const StartDexButton = styled.button`
  font-family: "PixelFont", sans-serif;
  margin-top: 20px;
  font-size: 22px;
  image-rendering: pixelated;
  font-smooth: never;
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: never;

  padding: 8px;
  background-color: white;
  cursor: pointer;
  box-shadow: 4px 4px 4px rgba(50, 50, 50, 1);
  transition:transform 0.1s ease-in;

    &:active {
    transform: translate(6px, 6px);
    box-shadow: none;

`;
const Home = () => {
  const navigate = useNavigate();
  const startPokedex = () => {
    navigate("/dex");
  };

  return (
    <HomeContainer>
      <HomeTitleContainer>
        <HomeTitle src={title} />
      </HomeTitleContainer>
      <StartDexButton onClick={startPokedex}>PokeDex Start</StartDexButton>
    </HomeContainer>
  );
};

export default Home;
