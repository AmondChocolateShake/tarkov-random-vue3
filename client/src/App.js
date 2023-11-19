import MainContainer from "./components/MainContainer";
import styled, { ThemeProvider } from "styled-components";
import theme from "./components/styles/theme";
import './font/fonts.css'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <MainContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
