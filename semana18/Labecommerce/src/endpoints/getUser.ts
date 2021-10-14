import { Request, Response } from "express";
import { connection } from "../connection";

export const getUser = async (req: Request, res: Response) => {

    try{
        const result = await connection.raw (`SELECT * FROM User_labecommerce`)

        res.status(200).send(result[0])

    } catch (error) {
        res.status(500).send()
    }
}