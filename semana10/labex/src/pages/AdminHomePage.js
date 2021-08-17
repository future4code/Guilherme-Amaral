import React from 'react'
import styled from 'styled-components'
import {useHistory} from "react-router-dom"

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
box-shadow: 0px 2px 5px 0px #7D3996;
`
const ButtonsX = styled.button `
padding: 8px;
background-color: #C22027;
color: white;
border: 1px solid #C22027;
border-radius: 8px;
cursor: pointer;
`
const ButtonsDetalhes = styled.button `
padding: 15px;
background-color: white;
color: #7D3996;
border: 1px solid white;
cursor: pointer;
width: 300px;
font-size: 14pt;
`


function AdminHomePage() {

    const history = useHistory()

    const voltar = () => {
        history.goBack()
    }

    const criarViagem = () => {
        history.push('/CreateTripPage')
    }

    const logout = () => {
        history.push('/LoginPage')
    }

    const irParaDetalhesViagens = () => {
        history.push('/TripDetailsPage')
    }

    return (

        <div>

            <Titulo>Painel Administrativo</Titulo>

            <ContainerButtons>
                <Buttons onClick={voltar}>Voltar</Buttons>
                <Buttons onClick={criarViagem}>Criar Viagem</Buttons>
                <Buttons onClick={logout}>Logout</Buttons>
            </ContainerButtons>

            

            <CardViagens>
                <ButtonsDetalhes onClick={irParaDetalhesViagens}>Viagem</ButtonsDetalhes>
                <ButtonsX>X</ButtonsX>     
            </CardViagens>



        </div>
    )
}

export default AdminHomePage