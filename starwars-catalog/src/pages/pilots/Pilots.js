import { CardPilot, ConatainerPilots } from "./styled"
import pilot from '../../images/pilot.png'
import { getPilots } from "../../services/requests"
import { useEffect, useState } from "react"

export const Pilots = () => {

    const [savePilots, setSavePilots] = useState([])

    useEffect(() => {
        getPilots(setSavePilots)
    }, [])

    return (

        <ConatainerPilots>
            <h1>Pilots</h1>

            <CardPilot>
                {savePilots.length > 0 ? savePilots.map(pilots => {
                    return (
                        <div>
                            <img src={pilot} alt="pilot" />
                            <p>{pilots.name}</p>
                        </div>
                    )
                }) : <p className="carregando">Carregando...</p>}
            </CardPilot>

        </ConatainerPilots>
    )
}

export default Pilots