import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { User } from "../entites/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"


export const signup = async (req: Request, res: Response) => {

    try {

        const {name, email, password, role} = req.body

        if (!name || !email || !password || !role) {
            res.status(422).send("Insira corretamente as informações: 'name', 'email', 'password', 'role'")
        }

        const userDatabase = new UserDatabase()
        const user = userDatabase.findUserByEmail(email)

        if (await user) {
         res.status(409).send('Email já cadastrado')
        }
        
        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()
    
        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)
        
        const newUser = new User (id, name, email, hashPassword, role)
        await userDatabase.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generate({id, role})

        res.status(200).send({message: "Usuário criado com sucesso", token})

    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}