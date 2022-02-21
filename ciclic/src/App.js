import Header from "./components/header/Header"
import { GlobalState } from "./global/GlobalState"
import { Router } from "./routers/Routers"
import { GlobalStyle } from "./styled/GlobalStyled"
import { ToastContainer } from 'react-toastify'

export const App = () => {

  return (

    <>
      <GlobalState>
        <Header />
        <GlobalStyle />
        <Router />
        <ToastContainer />
      </GlobalState>
    </>
  )
}

export default App;
