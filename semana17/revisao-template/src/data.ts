import { character, GENDER, movie } from "./types";

export let movies: movie[] = [
    
    {
        id: 1,
        title: "X-men O filme",
        year: 2000
    },
    {
        id: 2,
        title: "Velozes e Furiosos",
        year: 2000
    },
    {
        id: 3,
        title: "Deadpool",
        year: 2016
    }
]

export let characters: character[] = [

    {
        id:1,
        name:"Strom",
        gender: GENDER.FEMALE,
    },
    {
        id: 2, 
        name: "Deadpool",
        gender: GENDER.OTHER,
        descripition: "Sexy motherf***"
    },
    {
        id: 3, 
        name: "Colossus",
        gender: GENDER.MALE,
    },
    
]

