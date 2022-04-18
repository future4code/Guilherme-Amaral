import axios from 'axios'
import React, { useState, useEffect} from 'react'
import {Bar, TitleLogo} from './styled'

const MegaSena = () => {
    
    const [loterias, setLoterias] = useState ([])
    const [loteriasConcursos, setLoteriasConcursos] = useState([])
    const [concursos, setConcursos] = useState([])

    const [loteriasId, setLoteriasId] = useState("")

    const inputLoteriasId = (event) => {
        setLoteriasId (event.target.value)
    }

    const getLoterias = () => {
        axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/loterias")

        .then ((res) => {
            setLoterias (res.data)
        })
        .catch ((err) => {
            console.log (err)
        })
    }

    const getLoteriasConcursos = () => {
        axios.get ('https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos')

        .then((res) => {
            setLoteriasConcursos (res.data)
        })
        .catch((err) => {
            console.log (err)
        })
    }

    const getConcursos = (loteriasId) => {
        axios.get(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${loteriasId}`)

        .then((res) => {
            setConcursos (res.data)
            console.log (res.data)
        })
        .catch((err) => {
            console.log (err)
        })
    }

    useEffect(() => {

        getLoterias()
        getLoteriasConcursos()
        
    }, [])

    const renderLoterias = loteriasConcursos.map ((index) => {
        return <option key={index.id} value={index.id}>{index.concursoId}</option>
    })



    console.log(loteriasId)

    return (
        <div>

            <Bar>
                <select
                    onClick={() => getConcursos(loteriasId)}
                    onChange={inputLoteriasId} 
                >
                    {renderLoterias}
                </select>

            <TitleLogo>
                <h1>Mega Sena</h1>   
            </TitleLogo>
           
            </Bar>

        </div>
    )
}

export default MegaSena