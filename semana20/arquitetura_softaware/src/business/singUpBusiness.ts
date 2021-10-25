import { DataBase } from "../data/DataBase"
import { User } from "../entites/User"
import { Authenticator } from "../service/Authenticator"
import { HashManager } from "../service/HashManager"
import { IdGenerator } from "../service/IdGenerator"

export const singUpBusiness = async (input: any) => {

    try {

        const {name, email, passowrd, role} = input 

        if (!name || !email ||!passowrd ||!role) {
            throw new Error ("Insira corretamente 'name', 'email', 'password' e 'role'.")
        } 
    
        if (email.indexOf ("@") === -1){
            throw new Error ("Email inválido.")
        }
    
        if (passowrd.length < 6) {
            throw new Error ("O password deve haver mais de 6 caracteres")
        }
    
        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()
    
        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(passowrd)

        const newUser = new User (id, name, email, hashPassword, role)
    
        const dataBase = new DataBase()
        const createUser = dataBase.createUser(newUser)
    
        const authenticator = new Authenticator()
        const token = authenticator.generate({id, role})

        return token


    } catch (error: any) {
        throw new Error ( error.message || "Error creating user. Please check your system administrator.")

    }


}