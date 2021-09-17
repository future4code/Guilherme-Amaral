import React from 'react'
import { ContainerTitulo, ContainerBotaoVoltar, ContainerCartas } from './styled'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { irTelaInicial } from '../Router/Cordinator'
import { useHistory } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CardDasCartasJogo from './CardDasCartasJogo'


const TelaJogo = () => {

    const history = useHistory()
    
    const [cartas, setCartas] = useState([])

    const reqCartas = () => {

        axios.get ("tarot.json")

        .then ((res) => {
            setCartas (res.data.cards)
           
        })

        .catch ((err) => {
            console.log (err)
        })
    }

    useEffect(() => {
        reqCartas()
    },[])

    console.log ("chegou", cartas)

    const cartasNaTelaJogo = cartas.map ((cartas) => {
        return <div>
        <CardDasCartasJogo key={cartas.name} cartas={cartas}/>
        </div>
    })

    const shuffleArray = (arr) => {
        
        for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
        } 

    return arr;

    }

    console.log(shuffleArray(cartas))

    return (
        <div>

        <ContainerTitulo>
            <Typography variant='h3' align='center' color="primary">SELECIONE UMA CARTA</Typography>
        </ContainerTitulo>

        <ContainerBotaoVoltar>
                <Button onClick={()=> irTelaInicial(history)} variant="contained" color="primary" align='center'>
                    Voltar para Página inicial 
                </Button>
        </ContainerBotaoVoltar>

        <ContainerCartas>
            {cartasNaTelaJogo}
        </ContainerCartas>

        </div>
    )
}

export default TelaJogo