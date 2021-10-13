import {Request, Response} from 'express'
import connection from '../connection'
import { character } from '../types'

export const buscarTodos = async (req: Request, res: Response) : Promise <void> => {
 
    try {

        const buscarPersonagens: character[] = await connection ('characters')
        res.send(buscarPersonagens)

    } catch (error) {
        res.status(500).send("Erro no servidor")
    }
}