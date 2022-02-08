import Header from "../../components/header/Header"

import { ContainerCharacterList } from "./styled"

import { useEffect, useState } from "react"
import { getPersonagens } from "../../services/requests"
import { useNavigate } from "react-router-dom"


export const CharacterListPage = () => {

    const [personagem, setPersonagem] = useState([])
    
    const navigate = useNavigate()

    useEffect(() => {

        getPersonagens(setPersonagem)

    }, [])

    return (
        <>
            <Header />

            <ContainerCharacterList>
                <h2>Personagens</h2>

                {personagem.length > 0 ? personagem.map((personagem, index) => {
                    return (
                        <button
                            onClick={() => navigate(`/detail/${index +1}`)}
                            key={personagem.name}
                        > {personagem.name}
                        </button>
                    )
                }) : <p>Carregando...</p>} 
            </ContainerCharacterList>
        </>
    )
}

export default CharacterListPage