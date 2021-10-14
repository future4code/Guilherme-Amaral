import { Request, Response } from "express";
import { connection } from "../connection";
import { User } from "../entities/user";

export const createUser = async (req: Request, res: Response) => {

    try {
        const {id,name, age} = req.body

        const user = new User (
            id,
            name,
            age
        )

        await connection ('User_labecommerce')
        .insert(user)

        res.status(200).send("Criado")

    } catch (error) {

        res.status(500).end()
    }
}