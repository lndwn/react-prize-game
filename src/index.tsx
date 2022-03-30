import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./views/routes";

const Root = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </ThemeProvider>
);

const rootElement = document.getElementById("root");
render(<Root />, rootElement);
