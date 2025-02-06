import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "PixelFont";
        src: url("../src/fonts/PressStart2P-Regular.ttf") format("truetype");

    }
    body,html{
    height:100%;
    margin:0;
    padding:0;
    background-color:#80E5C1;
}    
    
`;

export default GlobalStyle;
