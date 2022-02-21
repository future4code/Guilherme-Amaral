import { useNavigate } from "react-router-dom"
import { ContainerHomePage } from "./styled"

export const HomePage = () => {

    const navigate = useNavigate()

    return (

        <>
            <ContainerHomePage>
                <button onClick={() => navigate('/starships')}>
                    Starships
                </button>

                <button onClick={() => navigate('/pilots')}>
                    Pilots
                </button>
            </ContainerHomePage>
        </>
    )
}

export default HomePage