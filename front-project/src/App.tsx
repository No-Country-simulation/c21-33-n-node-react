import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, CssBaseline } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/store'
import { decrement, increment, incrementByAmount } from './store/features/counter/counterSlice'
import { changeThemeMode } from './store/features/themeMode/themeSlice'
import { ThemeProvider } from '@mui/material'
import { themeDark, themeLight } from './theme/theme'

function App() {
  //const [count, setCount] = useState(0);
  const { value } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);


  return (
    <ThemeProvider theme={theme === 'dark' ? themeDark : themeLight}>
      <CssBaseline>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <Button variant='contained' onClick={() => dispatch(increment())}>
            increment
          </Button>
          <Button variant='contained' color='secondary' onClick={() => dispatch(decrement())}>
            decrement
          </Button>
          <Button variant='contained' onClick={() => dispatch(incrementByAmount(10))}>
            increment by 10
          </Button>
          <Button variant='contained' onClick={() => dispatch(changeThemeMode('dark'))}>
            setDarkMMode
          </Button>
          <Button variant='contained' onClick={() => dispatch(changeThemeMode('light'))}>
            setLightMode
          </Button>
          <button>
            count is {value}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App