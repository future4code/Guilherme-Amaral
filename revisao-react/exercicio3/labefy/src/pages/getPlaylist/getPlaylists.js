import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/url"
import { Container, ContainerPlaylist } from "./styled"

export const Playlist = () => {

    const [playlist, setPlayList] = useState([])

    useEffect(() => {

        const getPlaylist = () => {
            axios.get(`${BASE_URL}/playlists`, {
    
                headers: {
                    Authorization: "guilherme-amaral-marzo"
                }
            })
            .then((res) => {
                setPlayList (res.data.result.list)
            })
            .catch((err) => {
                console.log (err)
            })
        }
        
        getPlaylist()
    
    }, [])

    console.log ('chegou', playlist)

    return (

        <Container>
            <h1>Playlists</h1>

            <ContainerPlaylist>
                {playlist.map (playlist => {
                    return <h2>{playlist.name}</h2>
                })}
            </ContainerPlaylist>
        </Container>
    )
}

export default Playlist