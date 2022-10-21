import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'

import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
