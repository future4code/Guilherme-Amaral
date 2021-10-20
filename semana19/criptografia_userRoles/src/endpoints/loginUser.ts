import { Request, Response } from "express";
import { connection } from "../connection";
import { Authenticator } from "../services/authenticator";
import { HashManager } from "../services/hashManager";



export const loginUser = async (req: Request, res: Response) : Promise <any> => {

    try {
        //buscar usuario por email 
        const {email, password} = req.body

      
        const [user] = await connection ('user_auth')
            .where({email})
        //conferir usuario no banco e verificar se existe e se a senha está correta

        const passwordIsCorrect: boolean = new HashManager().compareHash(password, user.password)

        if (!user || !passwordIsCorrect) {
            res.statusCode = 401 // "Unauthorized"
            throw new Error ("Credenciais inválidas")
        }

       const token = new Authenticator().generateToken({id: user.id, role: user.role})

       res.status(200).send ({token})
      

    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}