import React from 'react'
import styled from 'styled-components'
import {useHistory} from "react-router-dom"
import axios from 'axios'

const Titulo = styled.h1`
margin: 40px;
text-align: center;
color: #7D3996;
`
const CardViagem = styled.div `
box-shadow: 0px 2px 5px 0px #7D3996;
border-radius: 8px;
margin: 70px auto;
width: 350px;
padding: 30px;
`

const CardCandidatos = styled.div `
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
margin: 20px 20px ;
padding: 15px;
background-color: #EA744D;
color: white;
border: 1px solid #EA744D;
border-radius: 8px;
cursor: pointer;
width: 200px;
box-shadow: 0px 2px 5px 0px #7D3996;
`


function TripDetailsPage(props) {

    const history = useHistory()

    const voltar = () => {
        history.goBack()
    }

    return (

        <div>
    
            <Titulo>Viagem</Titulo>

            <CardViagem>
                <TextosCard>Nome:</TextosCard>
                <TextosCard>Descrição:</TextosCard>
                <TextosCard>Planeta:</TextosCard>
                <TextosCard>Duração:</TextosCard>
                <TextosCard>Data:</TextosCard>
            </CardViagem>

            <ContainerButtons>
                <Buttons onClick={voltar}>Voltar</Buttons>
            </ContainerButtons>

            
            <Titulo>Candidatos Pendentes</Titulo>

            <CardCandidatos>

                <TextosCard>Nome:</TextosCard>
                <TextosCard>Profissão:</TextosCard>
                <TextosCard>Idade</TextosCard>
                <TextosCard>País:</TextosCard>
                <TextosCard>Texto de Candidatura:</TextosCard>

                <ContainerButtons>
                    <Buttons>Aprovar</Buttons>
                    <Buttons>Reprovar</Buttons>
                </ContainerButtons>

            </CardCandidatos>

            <Titulo>Candidatos Aprovados</Titulo>

            <CardCandidatos>
            <TextosCard>Guilherme</TextosCard>
            </CardCandidatos>


        </div>
    )
}

export default TripDetailsPage