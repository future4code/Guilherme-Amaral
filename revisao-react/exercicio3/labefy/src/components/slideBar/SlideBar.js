import { useHistory } from "react-router-dom"
import { ContainerButton, Menu } from "./styled"

import { goToCreatePlaylist, goToPlaylist } from "../../router/cortinator"

export const SlideBar = () => {

    const history = useHistory()

    return (

        <Menu>
            <h1>Labefy</h1>

            <ContainerButton>
                <button onClick={() => goToCreatePlaylist(history)}>Criar Playlist</button>
                <button onClick={() => goToPlaylist(history)}>Acessar Playlist</button>
            </ContainerButton>

        </Menu>
    )
}

export default SlideBar