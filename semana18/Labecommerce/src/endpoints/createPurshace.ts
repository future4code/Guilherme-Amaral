import { Request, Response } from "express";
import { connection } from "../connection";
import { Purchase } from "../entities/purchase";

export const createPurchase = async (req: Request, res: Response) => {

    try{
        const {id, total_price, user_id, product_id} = req.body

        const purchase: Purchase = new Purchase (
            id,
            total_price,
            user_id,
            product_id
        )

        await connection ('Purchase_labecommerce')
        .insert(purchase)

        res.status(200).send("Compra Realiada")

    } catch (error) {
        
        res.status(500).end()
    }
}