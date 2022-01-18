import * as React from 'react';
import { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import NavBar from '../../general/NavBar/NavBar'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Login from '../Login/Login';
import StartPage from '../StartPage/StartPage';
import Basket from '../Basket/Basket';

const Layout = () => {
  
  const [dark, setDark] = useState(false);
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
        <>
        <ThemeProvider theme={theme}>
        <NavBar dark={dark} setDark={setDark}/>
        <Basket/>
        {/* <Login /> */}
        {/* outlet here */}
        <StartPage />
        </ThemeProvider>
       
        </>
    )
}

export default Layout;