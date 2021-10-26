import {Request, Response} from 'express'
import connection from '../connection'

export const buscarFilmePersonagem = async (req: Request, res: Response) => {

    try {
        
        const id = req.params.id
        const result = await connection. raw (`
        
        SELECT name, title FROM movie_characters
        JOIN movie ON movie_id = movie.id
        JOIN characters ON character_id = characters.id
        WHERE movie_id = ${id}

        `)

        res.status(200).send(result[0])

    } catch (error) {

    }
}