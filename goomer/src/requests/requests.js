import { BASE_URL } from '../constantes/url'
import axios from 'axios'

export const getRestaurants = ( state ) => {

    axios.get(`${BASE_URL}/restaurants`)

    .then ((res) => {
        state.setRestaurants(res.data)
    })
    .catch ((err) => {
        console.log (err.message)
    })
}

export const getDetail = (id, setDetails) => {

    axios.get(`${BASE_URL}/restaurants/${id}/menu`)

    .then((res) => {
        setDetails(res.data)
    })
    .catch((err) => {
        console.log(err.message)
    })
}