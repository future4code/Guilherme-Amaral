import React, { useState } from 'react'
import TelaInicial from './componentes/TelaInicial';
import TelaMacth from './componentes/TelaMacth';
import styled from 'styled-components'
import axios from 'axios';

const ContainerApp = styled.div `
text-align: center;
border: 1px solid black;
width: 400px;
height: 500px;
margin: 50px auto;
`

const ContainerHeader = styled.div `
display: flex;
justify-content: space-around;
text-align: center;
text-align: center;
align-items: center;
`

function App () {

  const [tela, setTela] = useState ('TelaMatch')
  const [perfils, setPerfils] = useState ({})


  const escolheTela = () => {

    switch (tela) {

      case "TelaInicial":
        return <TelaMacth />
      case "TelaMatch":
        return <TelaInicial />
      default:
        return <div>Erro! Página não encontrada :( </div>    
    }
  }

  const irParaTelaMatch = () => {
    setTela ('TelaInicial')
  }

  const irParaTelaInicial = () => {
    setTela ('TelaMatch')
  }

  const getProfileToChoose = () => {

    axios.get ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')

    .then((res) => {
      console.log (res.data)
    })
    .catch((err) => {
      alert (err.data);
    });
  
  }

  return (

    <ContainerApp>
      <ContainerHeader>
        <h3>Astromatch</h3>
        <button onClick={irParaTelaInicial}>home</button>
        <button onClick={irParaTelaMatch}>macths</button>
      </ContainerHeader>
      {escolheTela()}
      <button onClick={getProfileToChoose()}>Perfil</button>
   
    </ContainerApp>
  )
}

export default App;
