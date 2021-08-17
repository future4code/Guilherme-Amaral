import React from 'react'
import logo from '../img/logo.png'
import styled from 'styled-components'

const Logo = styled.img `
height: 300px;
width: 500px;
`

const ContainerLogo = styled.div `
display: flex;
align-items: center;
justify-content: center;
margin-top: 100px;
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
border-radius: 8px;
background-color: #EA744D;
color: white;
border: 1px solid #EA744D;
cursor: pointer;
width: 200px;
`

function HomePage() {

    return (

        <div>
            <ContainerLogo>
            <Logo src={logo} />
            </ContainerLogo>

            <ContainerButtons>
                <Buttons>Ver Viagens</Buttons>
                <Buttons>Area de Administrador</Buttons>
            </ContainerButtons>
        </div>

    )
}

export default HomePage