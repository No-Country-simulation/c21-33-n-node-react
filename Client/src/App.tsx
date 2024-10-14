import './App.css'
import { CssBaseline } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'
import { ThemeProvider } from '@mui/material'
import { themeDark, themeLight } from './theme/theme'
import ResponsiveAppBar from './components/navBar/NavBar'

function App() {
  const { theme } = useSelector((state: RootState) => state.theme);


  return (
    <ThemeProvider theme={theme === 'dark' ? themeDark : themeLight}>
      <CssBaseline>
        <ResponsiveAppBar />
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App