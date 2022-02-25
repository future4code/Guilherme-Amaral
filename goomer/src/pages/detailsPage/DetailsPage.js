import { Container, ContainerDescriptionRestaurant, ContainerInput } from "./styled"

import SimpleAccordion from "../../components/accordion/Accordion"
import Loading from '../../components/loading/Loading'

import { FaSearch } from "react-icons/fa"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useContext } from "react"
import GlobalContext from "../../global/GlobalContext"

import { getDetail } from "../../requests/requests"

export const DetailsPage = () => {

    const { state } = useContext(GlobalContext)
    const { id }  = useParams()

    const [details, setDetails] = useState([])
    const [listDetailsFormated, setListDetailsFormated] = useState({})
    const [inputSearch, setInputSearch] = useState("")

    const infoRestaurant = state.restaurants.filter((restaurant) => {
        return restaurant.id == id
    })

    const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

    const getHourString = (hour) => {

        const dias = hour.days.length > 1 ? `${days[hour.days[0]-1]} a 
        ${days[hour.days[hour.days.length-1]-1]}` : `${hour.days[0]}`

        return dias + `: ${hour.from} às ${hour.to}`
    }

    const searchByItem = (group) => {

        if(inputSearch === "") {
            return true
        } else {
            return group.name.includes(inputSearch)
        }
    }

    useEffect(() => {
        getDetail(id, setDetails)
    }, []) 

    useEffect(() => {

        const fetch = () => {
            const menuList = {}
            for (let menuItem of details) {
               if(!menuList[menuItem.group]) menuList[menuItem.group] = [menuItem]
               else menuList[menuItem.group].push(menuItem)
            }
            setListDetailsFormated(menuList)
        }
       fetch()
    },[details])

    return (
        <>
            <Container>
                {infoRestaurant.length > 0 ? infoRestaurant.map(restaurant => {
                    return (
                        <ContainerDescriptionRestaurant key={restaurant.name}>
                            <div>
                                <img src={restaurant.image} alt="logo do resutante" />
                            </div>
                            <div>
                                <h2>{restaurant.name}</h2>
                                <p className="descripition">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                {restaurant.hours && restaurant.hours.map(hours => {
                                    return (<p key={hours.days}>{getHourString(hours)}</p>)
                                })}
                            </div>
                        </ContainerDescriptionRestaurant>
                    )
                }) : <Loading />}

                <ContainerInput>
                    <label>
                        Buscar no cardápio
                        <input 
                            placeholder="É necessário abrir a sessão abaixo para visualizar o resultado"
                            value={inputSearch}
                            onChange={(event) => setInputSearch(event.target.value)}
                        />
                        <FaSearch />
                    </label>
                </ContainerInput>

                <SimpleAccordion listDetailsFormated={listDetailsFormated} searchByItem={searchByItem}/>

            </Container>

        </>
    )
}

export default DetailsPage