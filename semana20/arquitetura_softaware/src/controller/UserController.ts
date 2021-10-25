import { Request, Response } from "express";
import { deleteUserBussines } from "../business/deleteUserBussines";
import { getUsersBussines } from "../business/getUseresBussines";
import { loginBussines } from "../business/loginBussines";
import { singUpBusiness } from "../business/singUpBusiness";


export class UserController {

    public signUp = async (req: Request, res: Response) => {

        try {
            const {name, email, passowrd, role} = req.body

            const token = await singUpBusiness({name, email, passowrd, role})            

            res.status(200).send({message: "Usuário criado.", token})

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    public login = async (req: Request, res: Response) => {

        try {
            const {email, passowrd} = req.body

            const token = await loginBussines({email, passowrd})

            res.status(200).send({message: "Usuário logado.", token})
            
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    public getUsers = async (req: Request, res: Response) => {

        try {
            const token = req.headers.authorization

            const getUsers = await getUsersBussines({token})

            res.status(200).send(getUsers)

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    public deleteUser = async (req: Request, res: Response) : Promise <void> => {


     try{
        const {id} = req.params
        const token = req.headers.authorization

        await deleteUserBussines({id, token})

        res.status(200).send("Usuário apagado")

     } catch (error: any) {
         res.status(400).send({error: error.message})
     }
    }
}

