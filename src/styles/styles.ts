import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    /* outline: 1px solid #00ff0040; */
  }
  :root {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
  }

  html, body {
    min-height: 100vh;
  }
  
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
  }

  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    background: ${({ theme }) => `
      linear-gradient(
        60deg,
        ${theme.colors.fuchsia},
        ${theme.colors.fadedBlue},
        ${theme.colors.cyan})
      `};
  }

  ul[class] {
    list-style: none;
  }
`;
