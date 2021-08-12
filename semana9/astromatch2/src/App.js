import React, { useEffect, useState } from 'react'
import TelaInicial from './componentes/TelaInicial';
import TelaMacth from './componentes/TelaMacth';
import styled from 'styled-components'
import axios from 'axios';

const ContainerApp = styled.div `
text-align: center;
border: 1px solid black;
width: 500px;
height: 600px;
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
  const [perfils, setPerfils] = useState ('')
  const [listaMatch, setListaMatch] = useState ({})

  const escolheTela = () => {

    switch (tela) {

      case "TelaInicial":
        return <TelaMacth listaMatch={listaMatch} clear={clear}/>
      case "TelaMatch":
        return <TelaInicial perfils={perfils} choosePerson={choosePerson} choosePerson2={choosePerson2}/>
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
      console.log (res)
      setPerfils (res.data.profile)
    })
    .catch((err) => {
    });
  }

  useEffect(() => {

    getProfileToChoose()

  }, [])

  const body = {
    id: perfils.id,
    choice: true
  }

  const choosePerson = () => {

    axios.post ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person', body, {

        headres: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    })
    
    .then((res) => {
      setListaMatch (res.data.matches)
      getProfileToChoose()
    })
    .catch((err) => {
      
    });
  }

  const body2 = {
    id: perfils.id,
    choice: false
  }

  const choosePerson2 = () => {

    axios.post ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person', body2, {

        headres: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    })
    
    .then((res) => {
      setListaMatch (res.data.matches)
      getProfileToChoose()
     
    })
    .catch((err) => {
      alert (err)
    });
  }

  const clear = () => {

    axios.put ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear') 


    .then((res) => {
    console.log (res)
    setListaMatch (res.data)
    })

    .catch((err) => {
      alert (err.data);
    })
    
  }

  return (

    <ContainerApp>

      <ContainerHeader>
        <h3>Astromatch</h3>
        <button onClick={irParaTelaInicial}>home</button>
        <button onClick={irParaTelaMatch}>macths</button>
        <button onClick={clear}>limpar</button>
      </ContainerHeader>

      {escolheTela()}

    </ContainerApp>
  )
}

export default App;