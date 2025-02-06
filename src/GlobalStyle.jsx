import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "PokemonFont";
        src: url("../src/fonts/PokemonGSK2Mono.ttf") format("truetype");

    }
    body,html{
    height:100%;
    margin:0;
    padding:0;
    background-color:#80E5C1;
}    
    
`;

export default GlobalStyle;
