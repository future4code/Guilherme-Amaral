import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsersType = async (req: Request, res: Response ): Promise <void> =>{

    try {

        const type = req.query.type
        const users = await connection ('aula49_exercicio')
        .where('type', 'like', `%${type}%`)
    
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }// logica usada para quando o professor não for encontrado
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

   export default async function selectAllUsersType():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio;
    `)
 
    return result[0]
 }