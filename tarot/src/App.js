import Game from "./page/gameTarot/Game"
import { GlobalStyle } from "./styled/globalStyled"

import { ToastContainer } from "react-toastify"

export const App = () => {

  return (

    <>
      <GlobalStyle />
      <Game />
      <ToastContainer autoClose={3000}/>
    </>
  )
}

export default App
