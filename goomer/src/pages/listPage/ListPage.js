import { Container, MainContainer, RestaurantContainer } from "./styled"
import { useContext, useEffect, useState } from "react"

import { getRestaurants } from "../../requests/requests"
import { useNavigate } from "react-router-dom"

import { FaSearch } from "react-icons/fa"
import GlobalContext from "../../global/GlobalContext"
import Loading from "../../components/loading/Loading"

import useDate from '../../hooks/useDate'

export const ListPage = () => {

    const { state } = useContext(GlobalContext)
    const navigate = useNavigate()
    const { day, time } = useDate()

    const [inputSearch, setInputSearch] = useState("")

    useEffect(() => {
        getRestaurants(state)
    }, [])

    const searchByName = (restaurant) => {

        if(inputSearch === "") {
            return true
        } else {
            return restaurant.name.includes(inputSearch)
        }
    }

    const isOpen = (restaurant) => {

        for(let hour of restaurant.hours) {
            if(hour.days.includes(day)) {
                if(time >= hour.from && time <= hour.to) {
                    return true;
                }
            }
        }
        return false;
    }

    return (

        <Container>
            <h1>Bem Vindo ao Lista Rango</h1>
            <input 
                placeholder="Buscar estabelecimento"
                value={inputSearch}
                onChange={(event) => setInputSearch(event.target.value)}
            />
            <FaSearch />

            {state.restaurants.length > 0 ? 
                <MainContainer>
                 {state.restaurants.filter(searchByName).map(restaurant => {
                    return (
                        <RestaurantContainer key={restaurant.id}onClick={() => navigate(`/details/${restaurant.id}`)}>
                            <div>
                                <img src={restaurant.image} alt="logo do restaurante" />
                            </div>
                            <div>
                                <h4>{restaurant.name}</h4>
                                <p>{restaurant.address}</p>
                            </div>
                            <div className="tag">
                                {restaurant.hours ? isOpen(restaurant) ? <p>Aberto</p> : <p className="closed">Fechado</p> : <p className="closed">Unkown</p> }
                            </div>
                        </RestaurantContainer>
                    )
                })}
            </MainContainer> : <Loading />}
        </Container>
    )
}

export default ListPage 