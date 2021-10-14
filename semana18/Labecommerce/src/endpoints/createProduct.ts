import { Request, Response } from "express";
import { connection } from "../connection";
import { Product } from "../entities/product";

export const createProduct = async (req: Request, res: Response) => {

    try {
        const {id, name, description, price} = req.body

        const product: Product = new Product (
            id,
            name,
            description,
            price
        )

        await connection ("Products_labecommerce")
        .insert(product)

        res.status(200).send("Produto criado")

    } catch (error) {
        
        res.status(500).end("Erro")
    }
}