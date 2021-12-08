import React from 'react'
import Etapa1 from './componentes/Etapa1';
import Etapa2 from './componentes/Etapa2';
import Etapa3 from './componentes/Etapa3';
import Final from './componentes/Final';
import styled from 'styled-components';

const Bot = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin: 20px auto;
`

class App extends React.Component {

  state = {
    etapa: 1
  }
  
  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 /> 

      case 2: 
        return <Etapa2 />

      case 3:
        return <Etapa3 />

      case 4:
        return <Final />
    }
    
  }

  irParaProximaEtapa = () => {
    this.setState ({etapa: this.state.etapa +1})
  }
  
  render () {
    return (
      <div>
        
        {this.renderizaEtapa()}
        <Bot onClick={this.irParaProximaEtapa}>Proxima Etapa</Bot>

      </div>
    )
  }

}

export default App;
