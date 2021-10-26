import { DataBase } from "../data/DataBase"
import { User } from "../entites/User"
import { Authenticator } from "../service/Authenticator"

export const deleteUserBussines = async (input: any) => {

    const {id, token} = input

    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    if (!token) {
        throw new Error ("É necessário passar o token no headres da requisição para acessar essa funcionalidade")
    }

    if(tokenData.role !== "ADMIN") {
        throw new Error ("Apenas administradores podem deletrar usuários!")
    }

    const dataBase = new DataBase()
    const deleteUser =  await dataBase.deleteUser(id)

    return deleteUser
    
}