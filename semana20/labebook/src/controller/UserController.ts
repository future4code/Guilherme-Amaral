import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusines";

export class UserController {

    constructor (

        private userBusiness: UserBusiness

    ) {}

    public sigup = async (req: Request, res: Response) => {

        try {

            const {name, email, password} = req.body

            const token = await this.userBusiness.userSignup ({name, email, password})
            
            res.status(200).send({message: "Usuário criado com sucesso!!", token})

        } catch (error: any) {
            res.status(400).send({error: error.message})
        }
    }

    public login = async (req: Request, res: Response) => {

        try {

            const {email, password} = req.body

            const token = await this.userBusiness.userlogin ({email, password})

            res.status(200).send({message: "Usuário logado", token})


        } catch (error: any) {
            res.status(400).send({error: error.message})
        }
    }
  
}