import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";

import { GlobalStyle } from "./styles/global";
import { Button } from "./components/Button";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
