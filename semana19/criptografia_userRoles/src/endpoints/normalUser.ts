import { Request, Response } from "express";
import { connection } from "../connection";
import { Authenticator } from "../services/authenticator";

const userId = async (id: any) : Promise <any> => {
    
    let result = await connection.raw (`
    SELECT * FROM user_auth 
    WHERE id = '${id}'
    `)
return result[0][0]
}

export const infoUser1 = async (req: Request, res: Response) => {

    try {

        const token = req.headers.authorization as string

        const tokenData = new Authenticator().getTokenData(token)

        if (tokenData?.role !== "NORMAL") {
            res.statusCode = 401
            throw new Error ('Não autorizado')
        }

        const user = await userId (tokenData?.id)

        res.status(200). send({id: user.id, email: user.email})
  
    } catch (error: any) {
      
        res.status(400).send({ message: error.message});
    }
}