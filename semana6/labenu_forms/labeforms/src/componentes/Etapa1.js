import React from 'react'
import styled from 'styled-components'

const Form = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px;
width: 600px;
border: solid black 1px;
margin: 65px auto;
`

const List = styled.li`
text-align: center;
justify-content: center;
align-items: center;
padding: 15px;
`
const List1 = styled.ol`
text-align: center;
justify-content: center;
align-items: center;
padding: 15px;
`


class Etapa1 extends React.Component {
    render () {
        return (
            <Form>
                <h1>Etapa 1 - Dados Gerais</h1>
                <List1>
                    <List>Qual o seu nome?</List>
                    <input />
                    <List>Qual a sua idade?</List>
                    <input />
                    <List>Qual o seu e-mail?</List>
                    <input />
                    <List>Qual a sua escolaridade?</List>
                    <input />
                </List1>
            </Form>
        )
    }
}

export default Etapa1