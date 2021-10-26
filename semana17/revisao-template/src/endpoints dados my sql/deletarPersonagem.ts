import {Request, Response} from 'express'
import connection from '../connection'

export const deletarPersonagem = async (req: Request, res: Response) : Promise <void> => {

    try {
        const id = req.params.id

        await connection("characters")
        .delete()
        .where({id: id})
        
        res.status(200).send('Excluido')

    } catch (error) {

    }
}