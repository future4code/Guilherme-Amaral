import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
margin: 40px;
text-align: center;
color: #7D3996;
`

const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin: 10px;
`
const Buttons = styled.button `
margin: 40px 20px ;
padding: 15px;
background-color: #EA744D;
color: white;
border: 1px solid #EA744D;
border-radius: 8px;
cursor: pointer;
width: 190px;
`

const CardLogin= styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Inputs = styled.input `
padding: 10px;
margin: 15px;
width: 400px;
border: solid 1px #7D3996;
border-radius: 5px;
`

function LoginPage() {

    return (

        <div>
            <Titulo>Login</Titulo>

            <CardLogin>
                <Inputs type="text" placeholder="E-mail"/>
                <Inputs type="text" placeholder="Senha" />
            </CardLogin>

            <ContainerButtons>
                <Buttons>Voltar</Buttons>
                <Buttons>Entrar</Buttons>
            </ContainerButtons>
        </div>
    )
}

export default LoginPage