import { DataBase } from "../data/DataBase"
import { Authenticator } from "../service/Authenticator"

export const getUsersBussines = async (input: any) => {

    const {token} = input

    if (!token) {
        throw new Error ("É necessário passar o token no headres da requisição para acessar essa funcionalidade")
    }

    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    const dataBase = new DataBase()
    const getAllUsers = await dataBase.getAll()

    return getAllUsers

}