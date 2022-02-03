import axios from "axios"

import { useState } from "react"
import { BASE_URL } from "../../constants/url"
import { Container, ContainerInputButton } from "./styled"

export const CreatePlaylist = () => {

    const [input, setInput] = useState("")

    const onChangeInput = (event) => {
        setInput (event.target.value)
    }

    const createPlaylist = () => {

        const body = {
            name: input
        }

        axios.post(`${BASE_URL}/playlists`, body, {

            headers: {
                Authorization: "guilherme-amaral-marzo"
            }
        })

        .then((res) => {
            alert ("Playlist criada")
            setInput ("")
        })
        .catch((err) => {
            console.log (err)
        })
    }

    console.log ('resposta do input', input)

    return (

        <Container>
           <h1>Criar playlist</h1>

           <ContainerInputButton>
               <input 
                placeholder="Adicione o nome da sua playlist"
                onChange={onChangeInput}
                value={input}
               />
               <button onClick={createPlaylist}>Criar</button>
           </ContainerInputButton>
        </Container>
    )
}

export default CreatePlaylist