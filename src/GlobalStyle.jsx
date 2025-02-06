import { createGlobalStyle } from "styled-components";
import DungGeunMo from "../src/fonts/DungGeunMo.woff";
const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family:"DungGeunmo";
        src:url(${DungGeunMo}) format('woff');


    }
    body,html{
    height:100%;
    margin:0;
    padding:0;
    background-color:#80E5C1;
}    
    
`;

export default GlobalStyle;
