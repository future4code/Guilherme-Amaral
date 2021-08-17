import React from 'react'
import styled from 'styled-components'
import {useHistory} from "react-router-dom"

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
box-shadow: 0px 2px 5px 0px #7D3996;
`

const CardCandidatura = styled.div `
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

const Select = styled.select`
padding: 10px;
margin: 15px;
width: 420px;
border: solid 1px #7D3996;
border-radius: 5px;
`

function ApplicationFormPage () {

    const history = useHistory()

    const voltar = () => {
        history.goBack()
    }
    
    return (

        <div>
            <Titulo>Inscreva-se para uma viagem</Titulo>

            <CardCandidatura>
                <Select>
                    <option>Escolha o destino</option>
                </Select>
                <Inputs type="text" placeholder="Nome"/>
                <Inputs type="number" placeholder="Idade"/>
                <Inputs type="text" placeholder="Texto da candidatura"/>
                <Inputs type="text" placeholder="Profisão" />
                <Select>
                    <option>Escolha um País</option>
                </Select>
            </CardCandidatura>

            <ContainerButtons>
                <Buttons onClick={voltar}>Voltar</Buttons>
                <Buttons>Enviar</Buttons>
            </ContainerButtons>


        </div>
    )
}

export default ApplicationFormPage