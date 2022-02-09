import axios from "axios"
import { BASE_URL } from '../constanst/url'

export const getPilots = (setSavePilots) => {

    axios.get(`${BASE_URL}/people/`)
    .then((res) => {
        setSavePilots(res.data.results)
    })
    .catch((err) => {
        console.log(err)
    })
}

export const getStarships = (setSpaceships) => {

    axios.get(`${BASE_URL}/starships/`)
    .then((res) => {
        setSpaceships(res.data.results)
    })
    .catch((err) => {
        console.log(err)
    })
}