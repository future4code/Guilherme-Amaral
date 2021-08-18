import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {useHistory} from "react-router-dom"
import axios from 'axios'
import { select } from 'async'

const Titulo = styled.h1`
margin: 40px;
text-align: center;
color: #7D3996;
`

const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin: 10px;
`

const Buttons = styled.button `
margin: 40px 20px ;
padding: 15px;
background-color: #EA744D;
color: white;
border: 1px solid #EA744D;
border-radius: 8px;
cursor: pointer;
width: 190px;
box-shadow: 0px 2px 5px 0px #7D3996;
`

const CardCandidatura = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Inputs = styled.input `
padding: 10px;
margin: 15px;
width: 400px;
border: solid 1px #7D3996;
border-radius: 5px;
`

const Select = styled.select`
padding: 10px;
margin: 15px;
width: 420px;
border: solid 1px #7D3996;
border-radius: 5px;
`

function ApplicationFormPage (props) {

    const history = useHistory()

    const voltar = () => {
        history.goBack()
    }

    const [escolhaPais, setEscolhaPais] = useState([])
    const [InputPlaneta, setInputPlaneta] = useState("")
    const [InputNome, setInputNome] = useState("")
    const [InputIdade, setInputIdade] = useState("")
    const [InputTexto, setInputTexto] = useState("")
    const [InputProfissao, setInputProfissao] = useState("")
   

    const onChangeInputPlaneta = (event) => {
        setInputPlaneta (event.target.value)
    }

    const onChangeInputNome = (event) => {
        setInputNome (event.target.value)
    }

    const onChangeInputIdade = (event) => {
        setInputIdade (event.target.value)
    }

    const onChangeInputTexto = (event) => {
        setInputTexto (event.target.value)
    }

    const onChangeInputProfissao = (event) => {
        setInputProfissao (event.target.value)
    }

    const onChangeInputPais = (event) => {
        setEscolhaPais (event.target.value)
    }


    const paises = () => {

        axios.get ('https://servicodados.ibge.gov.br/api/v1/paises/{paises}')

        .then ((res) => {
            setEscolhaPais (res.data)
            console.log (res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    useEffect(() => {

        paises()
    
      }, [])

    
    const escolhaPlaneta = props.viagens.map ((index) => {
        return <option key={index.id}>{index.planet}</option>      
    })

    return (

        <div>
            <Titulo>Inscreva-se para uma viagem</Titulo>
       
            <CardCandidatura>

                <Select onChange={onChangeInputPlaneta} 
                    value={InputPlaneta}>
                    <option>Escolha um Planeta</option>
                    {escolhaPlaneta}
                </Select>

                <Inputs onChange={onChangeInputNome} 
                value={InputNome} 
                type="text" 
                placeholder="Nome"
                />

                <Inputs onChange={onChangeInputIdade} 
                value={InputIdade}
                type="number" 
                placeholder="Idade"
                />

                <Inputs onChange={onChangeInputTexto} 
                value={InputTexto}
                type="text"
                placeholder="Texto da candidatura"
                />
            
                <Inputs onChange={onChangeInputProfissao} 
                value={InputProfissao} 
                type="text" 
                placeholder="Profisão" 
                />

                <Select onChange={onChangeInputPais} 
                    value={escolhaPais}>
                    <option>Escolha um País</option>
                </Select>



            </CardCandidatura>

            <ContainerButtons>
                <Buttons onClick={voltar}>Voltar</Buttons>
                <Buttons>Enviar</Buttons>
            </ContainerButtons>


        </div>
    )
}

export default ApplicationFormPage