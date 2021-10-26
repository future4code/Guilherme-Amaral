import { Request, Response } from "express";
import { sensitiveHeaders } from "http2";
import { send } from "process";
import { characters } from "../data";


export const getCreateCharacter = (req: Request, res: Response) : void => {

    try {
        const {name, gender, descripition} = req.body

        characters.push({
            id: Date.now(),
            name,
            gender,
            descripition
        })
    
        res.send(201).send("Criado")
    } catch (error) {

    }
} 