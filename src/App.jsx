import Router from "./shared/Router";
import { PokemonContext } from "../src/context/PokemonContext";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <PokemonContext.Provider>
      <GlobalStyle />
      <Router />
    </PokemonContext.Provider>
  );
}

export default App;
