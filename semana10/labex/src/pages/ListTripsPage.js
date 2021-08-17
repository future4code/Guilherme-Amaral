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
margin: 70px auto;
width: 350px;
padding: 30px;
`

const TextosCard = styled.p `
padding: 5px;
font-size: large;
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
box-shadow: 0px 2px 5px 0px #7D3996;
`

function ListTripsPage(props) {

    const history = useHistory()

    const voltar = () => {
        history.goBack()
    }

    const irParaPaginaDeInscricao = () => {
        history.push('/trips/application')
    }

    console.log (props.viagens)
    
    return (
        <div>
            
            <Titulo>Lista de Viagens</Titulo>

            <CardViagens>
                <TextosCard>Nome:</TextosCard>
                <TextosCard>Descrição:</TextosCard>
                <TextosCard>Planeta:</TextosCard>
                <TextosCard>Duração:</TextosCard>
                <TextosCard>Data:</TextosCard>
            </CardViagens>

            <ContainerButtons>
                <Buttons onClick={voltar}>Voltar</Buttons>
                <Buttons onClick={irParaPaginaDeInscricao}>Inscrever-se</Buttons>
            </ContainerButtons>

        </div>
    )
}

export default ListTripsPage