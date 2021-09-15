import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { ContainerCartas, ContainerTitulo } from './styled'
import { ContainerBotaoIniciarJogo } from './styled'
import { irTelaJogo } from '../Router/Cordinator'
import axios from 'axios'
import { useHistory } from 'react-router'
import CardDasCartas from './CardDasCartas'

const TelaInicial = () => {

    const history = useHistory()

   const [cartas, setCartas] = useState([])

    const reqCartas = () => {

        axios.get ("tarot.json")

        .then ((res) => {
            setCartas (res.data.cards)
            console.log(res)
        })

        .catch ((err) => {
            console.log (err)
        })
    }

    useEffect(() => {
        reqCartas()
    },[])

    console.log ("chegou", cartas)

    const cartasNaTela = cartas.map ((cartas) => {
        return <CardDasCartas key={cartas.name} cartas={cartas}/>
    })

    return (
        <div>

        <ContainerTitulo>
            <Typography variant='h3' align='center'>BEM-VINDO AO TAROT</Typography>
        </ContainerTitulo>

        <ContainerBotaoIniciarJogo>
                <Button onClick={()=> irTelaJogo(history)}variant="contained" color="primary" align='center'>
                    Iniciar o Jogo
                </Button>
        </ContainerBotaoIniciarJogo>

        <ContainerCartas>
            {cartasNaTela}
        </ContainerCartas>

        </div>
        
    )   
}

export default TelaInicial