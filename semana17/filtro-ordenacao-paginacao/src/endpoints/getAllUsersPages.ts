import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsersPages = async (req: Request, res: Response ): Promise <void> =>{

    try {
        
        let name = req.query.name
        let page = Number(req.query.page)

        if (page < 1 || isNaN (page)) {
            page = 1
        }

        const size = 5
        const offset = size *(page - 1) 

        console.log (req.query)


        const result = await connection('aula49_exercicio')
        .where('name', 'like', `%${name}%`)
        .limit(size)
        .offset(offset)

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

 export default async function selectAllUsersPages():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio;
    `)
 
    return result[0]
 }