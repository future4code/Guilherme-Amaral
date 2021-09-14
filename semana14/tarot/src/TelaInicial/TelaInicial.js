import React from 'react'
import { Button } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { ContainerCartas, ContainerPrincipal } from './styled'
import { ContainerBotaoIniciarJogo } from './styled'
import tarot from '../assets/tarot.json'
import CardDasCartas from './CardDasCartas'


const TelaInicial = () => {

    const cartas = tarot
    console.log (cartas.cards)

    const cartasParaJogar = cartas.cards.map ((cartas) => {
        return <CardDasCartas key={cartas.name} cartas={cartas} />
    })


    return (
        <div>

        <ContainerPrincipal>
            <Typography variant='h3' align='center'>Bem-vindo ao Tarot</Typography>
        </ContainerPrincipal>

        <ContainerBotaoIniciarJogo>
                <Button variant="contained" color="primary" align='center'>
                    Iniciar o Jogo
                </Button>
        </ContainerBotaoIniciarJogo>

        <ContainerCartas>
            {cartasParaJogar}
        </ContainerCartas>

        </div>
        
    )   
}

export default TelaInicial