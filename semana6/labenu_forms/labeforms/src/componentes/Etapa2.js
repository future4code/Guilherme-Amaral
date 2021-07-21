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
text-align: center;
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

class Etapa2 extends React.Component{
    render () {
        return (
            <Form>
                <h1>Etapa 2 - Informações do Ensino superior</h1>
                <List1>
                    <List>Qual curso?</List>
                    <input />
                    <List>Qual a unidade de ensino?</List>
                    <input />
                </List1>
            </Form>
        )
    }
}

export default Etapa2