export type movie = { 
    id: number,
    title: string,
    year: number
}

export type character = {
    id: number,
    name: string,
    gender: GENDER,
    descripition?: string
}

export enum GENDER {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER",
}
