import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
const Img = styled.img `
width: 110px;
height: 110px;
padding: 20px;
border-radius: 30px;
`

function TelaMacth(props) {

    const [listTela, setListTela] = useState ([])
    console.log(props.listaMatch)

    const getMatches = () => {

        axios.get ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches')

        .then((res) => {
            console.log (res.data.matches)
            setListTela (res.data.matches)
          })
        .catch((err) => {
            alert (err.data);
          });
    }

    useEffect(() => {

        getMatches()
    
      }, [props.clear])

      
    const ListaNaTela = listTela.map ((user) => {
        return <div key={user.id}>
            <Img src={user.photo} />
            <p>{user.name}</p>
        </div>
    })
    
    return (

        <div>       
            {ListaNaTela}  
        </div>

    )
}

export default TelaMacth
