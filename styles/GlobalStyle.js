// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, #root {
    margin: 0;
    padding: 0;
    color: black;
    font-family: Arial, sans-serif;
    background-color: white;
  }
`;

export default GlobalStyle;
