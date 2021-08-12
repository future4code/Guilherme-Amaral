import React from 'react'
import styled from 'styled-components'

const ContainerProfile = styled.div `
text-align: center;
border: 1px solid black;
width: 320px;
height: 350px;
margin: 50px auto;
`

const Img = styled.img `
width: 250px;
height: 150px;
padding: 20px;
border-radius: 30px;
`

const ContainerButtons = styled.div `
text-align: center;
`
const Buttons = styled.button `
margin: 10px;
`

function TelaInicial (props) {
    
    return (

        <div>

        <ContainerProfile>
        <Img src={props.perfils.photo}/>
          <p>{props.perfils.name}</p>
          <p>{props.perfils.age}</p>
          <p>{props.perfils.bio}</p>
        </ContainerProfile>

        <ContainerButtons>
        <Buttons onClick={props.choosePerson}>SIM</Buttons>
        <Buttons onClick={props.choosePerson2}>NÃO</Buttons>
      </ContainerButtons>
    
        </div>
    )
}

export default TelaInicial