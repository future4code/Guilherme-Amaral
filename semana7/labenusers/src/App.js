import React from 'react';
import styled from 'styled-components'
import axios from 'axios';


const ContainerPrincipal = styled.div`
text-align: center;
margin-top: 250px;
padding: 20px;
width: 500px;
border: 1px solid black;
margin: 0 auto;
`
const ContainerSecundario = styled.div`
padding: 15px;
`

class App extends React.Component {

  createUser = () => {

  const body = {
    
    name: this.state.inputNome,
    email: this.state.inputEmail
  
  }
  
  axios.post ('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body,
   {
    
    headers: {
      Authorization: 'guilherme-amaral-lovelace'
    }
  })
  
  .then ((res) => {
    alert ('Adicionado')
    console.log(res.response)
    this.setState ({inputNome: ''})
    this.setState ({inputEmail: ''})
  })
  .catch ((err) => {
   console.log (err.response)
  })
  }

  getAllUsers = () => {

    axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {

      headers: {
        Authorization: 'guilherme-amaral-lovelace'
      }
    })

    .then ((res) => {
      console.log(res.data)
     
    })
    .catch ((err) => {
     console.log (err)
    })

  }
  
  state = {
    
    list: [],

    inputNome: '',
    inputEmail: ''

  }

  onChangeInputNome = (event) => {
    this.setState ({inputNome: event.target.value})
  }

  onChangeInputEmail = (event) => {
    this.setState ({inputEmail: event.target.value})
  }


  render () {
    
    return (
      <ContainerPrincipal>
        
        <ContainerSecundario>
          <label>Nome:</label>
          <input 
            value={this.state.inputNome} 
            onChange={this.onChangeInputNome}/>
        </ContainerSecundario>
        
        <div>
          <label>E-mail:</label>
          <input
            value={this.state.inputEmail} 
            onChange={this.onChangeInputEmail}/>
        </div>
        
        <ContainerSecundario>
          <button onClick={this.createUser}>Salvar</button>
        </ContainerSecundario>

        <div>
          <button onClick={this.getAllUsers}>Ir para pagina de listas</button>
        </div>

      </ContainerPrincipal>
    )
  }
}


export default App;
