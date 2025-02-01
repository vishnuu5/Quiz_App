import { ThemeProvider, CssBaseline } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import QuizContainer from "./components/QuixContainer"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuizContainer />
    </ThemeProvider>
  )
}

export default App

