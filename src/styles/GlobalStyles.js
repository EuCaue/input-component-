import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 4px;
  }
`;
