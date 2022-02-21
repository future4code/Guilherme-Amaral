import Header from "../../components/header/Header"
import { ContainerDetailPersonagem, Personagem } from "./styled"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { getDetail } from '../../services/requests'

export const CharacterDetailPage = () => {

    const navigate = useNavigate()
    const { id } = useParams();

    const [details, setDetails] = useState([]);
    const [homeworldLink, setHomeworldLink] = useState("");
    const [homeworld, setHomeworld] = useState("");

    useEffect(() => {

        getDetail(id, setDetails, setHomeworldLink, homeworldLink, setHomeworld)
    }, [homeworldLink]);


    return (
        <>
            <Header />

            <ContainerDetailPersonagem>
                <h2>Detalhes do personagem</h2>

                <Personagem>
                    {details.name && homeworld.name ?
                        <div>
                            <p>Nome: {details.name} </p>
                            <p>Planeta: {homeworld.name}</p>
                            <button onClick={() => navigate('/')}>Voltar a lista</button>
                        </div> : <p>Carregando...</p>}
                </Personagem>

            </ContainerDetailPersonagem>
        </>
    )
}

export default CharacterDetailPage