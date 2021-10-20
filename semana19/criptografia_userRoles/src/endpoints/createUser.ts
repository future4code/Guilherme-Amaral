import { Request, Response } from "express";
import { connection } from "../connection";
import { USERS_ROLES } from "../interfaces";
import { Authenticator } from "../services/authenticator";
import { HashManager } from "../services/hashManager";
import { generateId } from "../services/idGeneration";

export const createUser = async (req: Request, res: Response) => {

    try {

        const {email, password, role} = req.body

        if (!email || email.indexOf("@") === -1) {
            throw new Error("Email invalido");
        }

        if (!password || password.length < 6) {
            throw new Error("Senha invalida");
        }

        if ( !(role in USERS_ROLES) ) {
            res.statusCode = 422
            throw new Error ("'role' deve ser 'NORMAL' ou 'ADMIN'")
        }

        const [user] = await connection ('user_auth')
            .where({email})
        
        if(user) {
            res.statusCode = 409
            throw new Error ('Email já cadastrado')
        }

        const id: string = generateId()
        
        const cipherPassword: string = new HashManager().generateHash(password)

        await connection
        .insert ({
            id,
            email,
            password: cipherPassword,
            role
        })
        .into ('user_auth')

        const token = new Authenticator().generateToken({id, role})

        res.status(200).send({message: "Usuario Criado", token})


    } catch (error: any) {
        res.status(500). send({message: error.message})
    }
}





