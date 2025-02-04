import Router from "./shared/Router";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
const Container = styled.div`
  background-color: rgba(225, 220, 220, 0);
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <h1>포켓몬 도감</h1>
      <Router />
    </div>
  );
}

export default App;
