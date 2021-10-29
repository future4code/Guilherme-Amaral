import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"

export const getAllCharacters = async (req: Request, res: Response) => {
    try{
        const token = req.headers.authorization as string

        if(!token) {
            res.status(422).send("Esse endpoint exige uma autorização a ser passada nos headers")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        if (tokenData.role !== "ADMIN") {
            res.status(401).send('Somente admnistradores podem acessar essa funcionalidade')
        }

        const userDataBase = new UserDatabase()
        const users = await userDataBase.getAllUsers()

        res.status(200).send(users)

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}