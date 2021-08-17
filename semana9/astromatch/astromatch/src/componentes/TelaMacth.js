
import axios from 'axios'
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

    const getMatches = () => {

        axios.get ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches')

        .then((res) => {
            console.log (res.data)
          })
        .catch((err) => {
            alert (err.data);
          });
    }

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
        
            {getMatches()}
             

        </div>


    )
}

export default TelaMacth