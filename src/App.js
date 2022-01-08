import * as React from 'react';
import { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import NavBar from './components/NavBar/NavBar'
import { createTheme, ThemeProvider } from '@mui/material/styles'
function App() {

  const [dark, setDark] = useState(true);

  const prefersDarkMode = useMediaQuery( dark ? '(prefers-color-scheme: dark )' : '(prefers-color-scheme: light');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }
        ),
    [prefersDarkMode],
  );
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
    
  );
}

export default App;
