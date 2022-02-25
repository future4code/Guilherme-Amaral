import Header from '../src/components/header/Header'
import GlobalState from './global/GlobalState'

import { Router } from "./routes/Router"
import { GlobalStyled } from "./styled/GlobalStyled"
import { ToastContainer } from 'react-toastify'

export const App = () => {

  return (

    <>
      <GlobalState>
        <Header />
        <GlobalStyled />
        <Router />
        <ToastContainer theme="colored"/>
      </GlobalState>
    </>

  );
}

export default App;
