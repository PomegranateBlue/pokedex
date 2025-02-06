import Router from "./shared/Router";
import { PokemonContext } from "../src/context/PokemonContext";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
