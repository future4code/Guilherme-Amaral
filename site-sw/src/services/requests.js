import { BASE_URL } from '../constants/urls'
import axios from "axios"

export const getPersonagens = (setPersonagem) => {

    axios.get(`${BASE_URL}/people/`)
    .then((res) => {
        setPersonagem (res.data.results)
        console.log ('Personagens',res.data.results)
    })
    .catch((err) => {
        console.log (err)
    })
}

export const getDetail = (id, setDetails, setHomeworldLink, homeworldLink, setHomeworld) => {

    axios.get(`${BASE_URL}/people/${id}`)
    
    .then((response) => {
        setDetails(response.data);
        setHomeworldLink(response.data.homeworld);
        
        homeworldLink &&
        axios.get(homeworldLink)
        .then((response) => {
          setHomeworld(response.data);
        });
    });
}