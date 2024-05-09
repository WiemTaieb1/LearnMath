import { ThemeProvider } from "react-jss"
import { themes } from "./styles/theme/theme"
import { AppRoutes } from "./AppRoutes"


function App() {
  return (
    <ThemeProvider theme={themes()}>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
