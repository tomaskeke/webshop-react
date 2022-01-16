import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavBar from '../../general/NavBar/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '../../general/Card/Card';
import Account from '../Account/Account';


const Layout = () => {
  const [dark, setDark] = React.useState(false);

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
        {/* <Account /> */}
        {/* outlet here */}
        </ThemeProvider>
        </>
    )
}

export default Layout;