import React from 'react'
import styled from 'styled-components'

const ContainerMatch = styled.div `
display: flex;
justify-content: space-around;
text-align: center;
text-align: center;
align-items: center;
border: 1px solid black;
width: 300px;
margin: 15px auto;
`

function TelaMacth() {

    return (

        <div>
            
            <ContainerMatch>
                <p>foto</p>
                <p>Nome</p>
            </ContainerMatch>

            <ContainerMatch>
                <p>foto</p>
                <p>Nome</p>
            </ContainerMatch>

        </div>


    )
}

export default TelaMacth