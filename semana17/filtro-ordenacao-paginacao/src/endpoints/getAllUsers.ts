import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsers = async (req: Request, res: Response ): Promise <void> =>{

    try {

        const name = req.query.name
        console.log (name)

       const users = await connection ('aula49_exercicio')
       .where('name', 'like', `%${name}%`)
       
       
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

 export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio;
    `)
 
    return result[0]
 }