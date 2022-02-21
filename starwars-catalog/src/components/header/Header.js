import { useLocation, useNavigate } from "react-router-dom"
import { ContainerHeader, Menu } from "./styled"

export const Header = () => {

    const navigate = useNavigate()

    const location = useLocation()
    console.log(location.pathname)

    return (

        <ContainerHeader>
            <div>
                <h1>Star Wars Catalog</h1>
            </div>

            <Menu>

                {location.pathname === "/" ?
                    <button className="buttonSelect" onClick={() => navigate('/')}>Home</button> :
                    <button onClick={() => navigate('/')}>Home</button>}

                {location.pathname === "/starships" ?
                    <button className="buttonSelect" onClick={() => navigate('/')}>Starships</button> :
                    <button onClick={() => navigate('/starships')}>Starships</button>}

                {location.pathname === "/pilots" ?
                    <button className="buttonSelect" onClick={() => navigate('/pilots')}>Pilots</button> :
                    <button onClick={() => navigate('/pilots')}>Pilots</button>}

            </Menu>

        </ContainerHeader>
    )
}

export default Header