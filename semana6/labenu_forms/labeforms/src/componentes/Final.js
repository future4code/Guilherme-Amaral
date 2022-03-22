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

class Final extends React.Component {
    render () {
        return (
            <Form>
                <h1>O formulário acabou</h1>
                <p>Muito obrigado por particiar! Entraremos em contato!</p>
            </Form>
        )
    }
}

export default Final