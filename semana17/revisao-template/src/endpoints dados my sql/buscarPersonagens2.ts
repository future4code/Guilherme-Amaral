import {Request, Response} from "express"
import connection from "../connection"
import { character } from "../types"

export const buscarPersonagens2 = async (req: Request, res: Response ) => {

    try {
        const {name, orderBy, orderType, page} = req.query

        const resultPage = 5

        // página 1 -> offeset 0 === 5 * 0
        // página 2 -> offeset 0 === 5 * 1
        // página 3 -> offeset 0 === 5 * 2

        const offset = resultPage * (Number(page)-1)
        

        const characters: character[] = await connection ("characters")
            .where("name", "LIKE", `%${name}%`)
            .orderBy(orderBy as string || "name", orderType as string)
            .offset (offset)

        res.status(200).send(characters)
    } catch (error) {
        res.status(500).send("Erro no servidor")
    }
}