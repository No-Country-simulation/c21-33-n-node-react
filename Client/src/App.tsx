import './App.css'
import { CssBaseline } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { ThemeProvider } from '@mui/material'
import { themeDark, themeLight } from './theme/theme'
import Routes from './routes/Routes'

function App() {
  const { theme } = useSelector((state: RootState) => state.theme);


  return (
    <ThemeProvider theme={theme === 'dark' ? themeDark : themeLight}>
      <CssBaseline>
        <Routes />
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App