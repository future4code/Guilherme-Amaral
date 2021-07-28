import React from 'react';
import styled from 'styled-components'
import axios from 'axios';



const ContainerPrincipal = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
font-family: Open Sans;
text-align: center;
padding: 20px;
width: 500px;
border: 1px solid black;
margin: auto;
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
      this.setState ({list: res.data })

    })

    .catch ((err) => {
     console.log (err)
    })

  }

  deleteUsers = (id) => {


    axios.delete (`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
     {

      headers: {
        Authorization: 'guilherme-amaral-lovelace'
      }
    })

    .then ((res) => {
      console.log(res)
      alert ('Removido')
      
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
    
    const listUsers = this.state.list.map ((user)=> { 
      return <ContainerSecundario>
        <p><hr />{user.name}</p>
        <button onClick={() => this.deleteUsers(user.id)}>Remover</button>
        </ContainerSecundario>
    }
    )
    

    return (
      <ContainerPrincipal>
        <h1>Labusers</h1>
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
          <button onClick={this.getAllUsers}>Lista de usuários</button>
        </div>
        
        <ContainerSecundario>
          {listUsers}
        </ContainerSecundario>
        
      </ContainerPrincipal>
    )
  }
}


export default App;
