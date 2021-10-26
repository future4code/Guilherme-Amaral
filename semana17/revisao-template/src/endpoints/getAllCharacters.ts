import {Request, Response} from "express"
import { characters } from "../data"

export const getAllCharacters = (req: Request, res: Response) => {

    try {

        res.send(characters)
        
    } catch (error) {

    }

}