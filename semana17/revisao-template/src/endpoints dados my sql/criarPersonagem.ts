import {Request, Response} from 'express'
import connection from '../connection'

export const criarPersonagem = async (req: Request, res: Response) : Promise <void> => {

    try {
        const {name, gender, description} = req.body 
        await connection ("characters")
        .insert({
            name,
            gender,
            description 
        })

        res.status(200).send("Criado")

    } catch (error) {
        res.status(500).end()
    }
}