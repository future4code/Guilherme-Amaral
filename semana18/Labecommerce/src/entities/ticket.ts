import { Product } from "./product";

export class Ticket extends Product {

    origin: string
    destination: string

    constructor (

        id: string,
        name: string,
        description: string,
        price: number,
        origin: string,
        destination: string
        
    ) {
        
        super (id, name, description, price)
        this.origin = origin,
        this.destination = destination
    }
}

export const ticket1: Ticket = new Ticket ("1", "Viagem", "Viagem legal", 100, "RJ", "SP")

