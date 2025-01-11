import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #f8e4fc, #fdf4d9);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
