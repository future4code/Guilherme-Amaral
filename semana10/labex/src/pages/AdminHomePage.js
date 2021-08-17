import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
margin: 40px;
text-align: center;
color: #7D3996;
`
const CardViagens = styled.div `
box-shadow: 0px 2px 5px 0px #7D3996;
border-radius: 8px;
margin: 30px auto;
width: 350px;
padding: 15px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
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
width: 150px;
`
const ButtonsX = styled.button `
padding: 8px;
background-color: #C22027;
color: white;
border: 1px solid #C22027;
border-radius: 8px;
cursor: pointer;
`


function AdminHomePage() {

    return (

        <div>

            <Titulo>Painel Administrativo</Titulo>

            <ContainerButtons>
                <Buttons>Voltar</Buttons>
                <Buttons>Criar Viagem</Buttons>
                <Buttons>Logout</Buttons>
            </ContainerButtons>

            

            <CardViagens>
                <p>Viagem</p>
                <ButtonsX>X</ButtonsX>     
            </CardViagens>

            <CardViagens>
                <p>Viagem</p>
                <ButtonsX>X</ButtonsX>     
            </CardViagens>

        </div>
    )
}

export default AdminHomePage