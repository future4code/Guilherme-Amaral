import React from 'react'
import styled from 'styled-components'

const ContainerProfile = styled.div `
text-align: center;
border: 1px solid black;
width: 220px;
height: 250px;
margin: 50px auto;
`
const ContainerButtons = styled.div `
text-align: center;
`
const Buttons = styled.button `
margin: 10px;
`

function TelaInicial () {

    return (

        <div>

        <ContainerProfile>
            <p>Tela com perfis</p>
        </ContainerProfile>

        <ContainerButtons>
            <Buttons>SIM</Buttons>
            <Buttons>NÃO</Buttons>
        </ContainerButtons>

        </div>
    )
}

export default TelaInicial
