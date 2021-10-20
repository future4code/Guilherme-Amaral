export enum USERS_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface authenticationData {
    id: string,
    role: USERS_ROLES
}

export interface user {
    id: string 
    email: string 
    password: string
}