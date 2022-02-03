import Router from '../src/router/Router'

import { GlobalStyle } from './styled/globalStyeld'
import { Container } from './styled'

export const App = () => {

  return (

    <Container>
      <GlobalStyle />
      <Router />
    </Container>
  );
}

export default App
