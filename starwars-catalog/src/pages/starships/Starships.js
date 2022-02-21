import { ConatainerStarships, CardStarships } from "./styled"
import starships from '../../images/starships.png'
import { getStarships } from "../../services/requests"
import { useEffect, useState } from "react"

export const Starships = () => {

    const [spaceships, setSpaceships] = useState([])

    useEffect(() => {
        getStarships(setSpaceships)
    }, [])

    return (

        <ConatainerStarships>
            <h1>Starships</h1>

            <CardStarships>
                {spaceships.length > 0 ? spaceships.map(spaceships => {
                    return (
                        <div>
                            <img src={starships} alt="pilot" />
                            <p>{spaceships.name}</p>
                        </div>
                    )
                }) : <p className="carregando">Carregando...</p>}
            </CardStarships>

        </ConatainerStarships>
    )
}

export default Starships