import React from 'react'
import Router from './Router/Router'
import { ThemeProvider } from '@material-ui/styles';
import theme from './constantes/theme'

function App () {

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
