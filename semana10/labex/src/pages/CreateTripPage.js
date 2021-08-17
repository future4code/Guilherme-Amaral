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
function CreateTripPage() {

    return (

        <div>

        <Titulo>Criar Viagem</Titulo>

        <CardCandidatura>

            <Inputs type="text" placeholder="Nome"/>
            <Select>
                <option>Escolha um planeta</option>
            </Select>
            <Inputs type="date" />
            <Inputs type="text" placeholder="Descrição"/>
            <Inputs type="number" placeholder="Duração em dia" />
           
        </CardCandidatura>

        <ContainerButtons>
            <Buttons>Voltar</Buttons>
            <Buttons>Criar</Buttons>
        </ContainerButtons>
        
        </div>
    )
}

export default CreateTripPage