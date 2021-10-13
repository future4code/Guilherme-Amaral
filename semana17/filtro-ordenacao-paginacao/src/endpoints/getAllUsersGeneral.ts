import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsersGeneral = async (req: Request, res: Response ): Promise <void> =>{

    try {
        let name = req.query.name
        let sort = req.query.sort as string
        let order = req.query.order as string

        console.log (req.query)

        if (name === "") {
            throw new Error ('User not found')
        }

        if (sort !== "name" && sort !== "email") {
            sort = "name"
        }

        if (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC" ) {
            order = "ASC" 
        }

        const result = await connection('aula49_exercicio')
        .where('name', 'like', `%${name}%`)
        .orderBy(sort, order)

        if(!result.length){
            res.statusCode = 404
            throw new Error("No users found")
        }// logica usada para quando o professor não for encontrado

        res.status(200).send(result)
        

    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
}

 export default async function selectAllUsersGeneral():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio;
    `)
 
    return result[0]
 }