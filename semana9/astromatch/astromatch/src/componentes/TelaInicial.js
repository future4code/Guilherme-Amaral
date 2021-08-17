import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerProfile = styled.div `
text-align: center;
border: 1px solid black;
border-radius: 8px;
width: 320px;
height: 400px;
margin: 10px auto;
`
const ContainerButtons = styled.div `
text-align: center;
`
const Buttons = styled.button `
margin: 10px;
padding: 20px;
border-radius: 30px;
`
const Img = styled.img `
width: 250px;
height: 150px;
padding: 20px;
border-radius: 30px;
`

function TelaInicial () {
   
    return (

        <div>

        <ContainerProfile>

          <p> foto </p>

          <ContainerButtons>
            <Buttons>SIM</Buttons>
            <Buttons>NÃO</Buttons>
          </ContainerButtons>
       
        </ContainerProfile>

        </div>
    )
}

export default TelaInicial
