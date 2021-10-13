import {Request, Response} from 'express'
import { characters } from '../data'

export const deleteCharacter = (req: Request, res: Response) :void => {

    try {

        const id = Number(req.params.id)

        const index: number = characters.findIndex(
            character => character.id === id
        )

        if (index > -1) {
        characters.splice(index, 1) }
        

        res.status(200).send('Excluido')

    } catch (error) {

    }
}

