import { Request, Response } from "express";
import { connection } from "../connection";
import { Ticket } from "../entities/ticket";

export const createTrip = async (req: Request, res: Response) => {

    try{
        const {id, name, description, price, origin, destination} = req.body

        const ticket: Ticket = new Ticket (
            id,
            name,
            description,
            price,
            origin,
            destination
        )

        await connection ('Ticket_labecommerce')
        .insert (ticket)

        res.status(200).send("Viagem criada")

    } catch (error) {

        res.status(500).end()

    }
}