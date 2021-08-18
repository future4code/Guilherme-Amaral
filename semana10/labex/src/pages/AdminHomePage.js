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
align-items: center;
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
padding: 15px;
background-color: white;
color: red;
font-size: 18px;
font-weight: bold;
border: 1px solid white;
cursor: pointer;
text-align: center;
`

const TextosCard = styled.p `
padding: 8px;
font-size: 15px;
text-align: center;
`
const TextoViagem = styled.button`
padding: 15px;
background-color: white;
color: #EA744D;
font-size: 18px;
font-weight: bold;
border: 1px solid white;
border-radius: 8px;
cursor: pointer;
width: 250px;
text-align: center;
justify-content: center;
align-items: center;
`

const Card = styled.div `
box-shadow: 0px 2px 5px 0px #7D3996;
border-radius: 8px;
margin: 70px auto;
width: 260px;
padding: 30px;
`
const Cont = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
justify-content: center;
`

function AdminHomePage(props) {

    const history = useHistory()

    const voltar = () => {
        history.goBack()
    }

    const criarViagem = () => {
        history.push('/admin/trips/create')
    }

    const logout = () => {
        history.push('/login')
    }

    const irParaDetalhesViagens = () => {
        history.push('/admin/trips/:id')
    }

    console.log ('chegou', props.viagens)

    const viagensNaTela = props.viagens.map ((index) => {

        return <Card key={index.id}>
        <ContainerButtons>
            <ButtonsX>X</ButtonsX> 
        </ContainerButtons>
          <button onClick={props.getTripDetail}>teste</button>
        <TextoViagem onClick={irParaDetalhesViagens}>{index.name}</TextoViagem>
        <TextosCard> {index.description}</TextosCard>
        <TextosCard><strong>Planeta:</strong> {index.planet}</TextosCard>
        <TextosCard><strong>Duração:</strong> {index.durationInDays}</TextosCard>
        <TextosCard><strong>Data:</strong> {index.date}</TextosCard>
        
    </Card>

    })

    return (

        <div>

            <Titulo>Painel Administrativo</Titulo>

            <ContainerButtons>
                <Buttons onClick={voltar}>Voltar</Buttons>
                <Buttons onClick={criarViagem}>Criar Viagem</Buttons>
                <Buttons onClick={logout}>Logout</Buttons>
            </ContainerButtons>

            <Cont>
            {viagensNaTela}
            </Cont>

        </div>
    )
}

export default AdminHomePage