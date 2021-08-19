import React from 'react'
import styled from 'styled-components'
import {useHistory} from "react-router-dom"
import { useEffect } from 'react'

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
function CreateTripPage() {

       useEffect(() => {
        const token = localStorage.getItem('token')
    
        if (token === null) {
            console.log ('Não está logado!')
            history.push ('/login')
        }
    
    }, [])

    const history = useHistory()

    const voltar = () => {
        history.goBack()
    }

    return (

        <div>

        <Titulo>Criar Viagem</Titulo>

        <CardCandidatura>

            <Inputs type="text" 
            placeholder="Nome"
            />

            <Select>
                <option>Escolha um planeta</option>
            </Select>

            <Inputs type="date" />

            <Inputs type="text" 
            placeholder="Descrição"
            />

            <Inputs type="number"
             placeholder="Duração em dia"
            />
           
        </CardCandidatura>

        <ContainerButtons>
            <Buttons onClick={voltar}>Voltar</Buttons>
            <Buttons>Criar</Buttons>
        </ContainerButtons>
        
        </div>
    )
}

export default CreateTripPage